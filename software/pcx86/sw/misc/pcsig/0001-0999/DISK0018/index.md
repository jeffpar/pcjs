---
layout: page
title: "PC-SIG Diskette Library (Disk #18)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0018/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0018"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "IQBUILDER"

    This set of educational programs is ideal for parents or teachers who
    want to work with youngsters to develop word and number skills. Each
    of these BASIC programs is separately loaded from a main program menu.
    The synonym and antonym programs are particularly challenging.
    
    IQ BUILDER uses no graphics, but it does get the job done. The target
    group is children between the ages of 5-10.
    File Descriptions:
    
    MENU     BAS  Menu to select programs for execution.
    MASTER   BAS  MASTERMIND -- guess the code.
    READING  BAS  Improve your reading speed.
    FRANK    BAS  HANGMAN by another name.
    WORDS    BAS  Data for FRANK.
    MATH     BAS  Drill of simple math problems.
    NIM      BAS  Ancient game of skill and strategy.
    BACKGAM  BAS  BACKGAMMON.
    BLACK    BAS  BLACKJACK -- 1 or 2 players.
    TRUCKER  BAS  Make your fortune in the trucking business.
    IQBUILD  BAS  Sub-menu to run the IQ-Builder Series.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANALOG.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM A(30):FOR I=1 TO 30:A(I)=I:NEXT I
10 CLS:R=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP A(INT(RND*30+1)),A(INT(RND*30+1)):NEXT I:GOTO 300
20 PRINT"part to whole":RETURN
30 PRINT"type to one of its characteristics":RETURN
40 PRINT"things that are part of the same thing":RETURN
50 PRINT"measurement to what is measured":RETURN
60 PRINT"measurement to object measured":RETURN
70 PRINT"class to species":RETURN
80 PRINT"group to member":RETURN
90 PRINT"members of the same class":RETURN
100 PRINT"things with a feature in common":RETURN
110 PRINT"equivalent measures":RETURN
120 PRINT"parts of a hierarchy":RETURN
130 PRINT"cause and effect":RETURN
140 PRINT"things to what they do":RETURN
150 PRINT"tools to what they work on":RETURN
160 PRINT"tools to what they create":RETURN
170 PRINT"condition to what happens in that condition":RETURN
180 PRINT"worker to object created":RETURN
190 PRINT"worker to tool":RETURN
200 PRINT"person to his goal":RETURN
210 PRINT"person to something he avoids":RETURN
220 PRINT"synonyms and antonyms":RETURN
230 PRINT"things that go together":RETURN
240 PRINT"thing dependent on another":RETURN
300 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
310 LOCATE 2,34:PRINT"Analogies 1":COLOR 7,0
320 XX=1:C=A(XX):R=0:N=0
330 RESTORE:IF C>1 THEN FOR L=1 TO C-1:READ A$,B$:FOR X=1 TO 6:READ A1(X):NEXT X,L
340 GOSUB 7000
350 READ A$,B$
360 PRINT:PRINT"Problem" C
370 PRINT:PRINT"This is what kind of analogy?"
380 PRINT:PRINTA$ " is to " B$:PRINT
390 FOR X=1 TO 5:PRINT"(";:COLOR 15:PRINT X;:COLOR 7:PRINT")  ";:READ A1(X):
400 ON A1(X) GOSUB 20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240
410 NEXT X:READ K
420 BEEP:LOCATE 25,1:PRINT"Your choice is - ";
430 GOSUB 59990:IF INSTR("12345",IKEY$)=0 THEN 430
440 N=N+1:IF VAL(IKEY$)=K THEN PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"Correct!";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:R=R+1:GOTO 460
450 PLAY "mbn50n25":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"No!  The answer was " K ".";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);
460 XX=XX+1
470 IF XX<30 THEN C=A(XX):GOTO 330
480 GOSUB 7000:PRINT"You scored" R "right out of" N "  or" INT(100*R/N) "percent."
490 IF R/N<0.6 THEN PRINT"Why don't you look at this program again.":TIMEOUT=3:GOSUB 59950:RUN
500 IF R/N<=0.9 THEN PRINT"Very good!"
510 IF R/N>0.9 THEN PRINT"100 percent!  What else can I say!!"
520 TIMEOUT=3:GOSUB 59950:GOTO 700
600 RUN "iqbuild"
700 CHAIN MERGE "analog2",5
1000 PLAY "mbn50n25":LOCATE 25,1:PRINT"No!  Hint:";:TIMEOUT=3:GOSUB 59950
1010 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:BEEP
1020 IF K=1 THEN PRINT"The numbers change by thr rule " A$;
1030 IF K=2 THEN PRINT"Look for more than one rule.  One rule is " A$;
1040 IF K=3 THEN PRINT"The amount of change gets " A$ " each time.";
1050 IF K=4 THEN PRINT"Alternating series.  One rule is " A$;
1060 IF K=5 THEN PRINT"Look for groups of " A$ " numbers.";
1070 TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);:LOCATE Y1-1,X1:RETURN
3100 PRINT:PRINT TAB(10) "╔" STRING$(35,"═") "╗"
3110 PRINT TAB(10) "║";:COLOR 15:PRINT A B C D E F G H;:COLOR 7:PRINT TAB(46) "║"
3120 PRINT TAB(10) "╚" STRING$(35,"═") "╝":PRINT:RETURN
5500 DATA mouth, head,2,8,9,1,7,4
5510 DATA fast, slow,19,22,7,21,2,4
5520 DATA pint, milk,5,13,11,8,3,1
5530 DATA dog, cat,2,3,6,8,11,4
5540 DATA captain, sergeant,9,11,10,16,12,2
5550 DATA cup, saucer,21,23,22,5,1,3
5560 DATA coal, black,3,9,2,16,23,3
5570 DATA year, time,1,4,3,6,2,2
5580 DATA careless, accident,12,13,8,20,8,1
5590 DATA cushion, legs,8,7,6,13,3,5
5600 DATA vocal cords, talk,19,21,10,8,13,5
5610 DATA dig, hole,17,15,10,21,12,5
5620 DATA child, dark,20,19,13,12,3,1
5630 DATA scissors, paper,16,14,15,12,5,2
5640 DATA pen, ink,23,21,15,12,9,1
5650 DATA bread, butter,23,21,22,13,9,3
5660 DATA thunder, rain,20,16,10,11,6,2
5670 DATA def. lineman, tackle runner,20,12,16,17,19,5
5680 DATA run, flee,13,21,1,3,20,2
5690 DATA pack, wolf,7,10,12,16,23,1
5700 DATA chef, egg beater,19,20,21,1,18,5
5710 DATA fire, sum,9,6,5,3,21,1
5720 DATA cement mixer, cement,1,7,6,10,14,5
5730 DATA bricklayer, wall,8,9,10,14,17,5
5740 DATA fly, fly,13,23,22,12,16,1
5750 DATA oven, pie,15,6,3,21,18,1
5760 DATA sedated, sleep,21,12,19,23,1,2
5770 DATA gram, once,16,23,10,11,13,3
5780 DATA vehicle, bike,6,8,10,23,21,1
5790 DATA argument, fight,13,11,14,19,16,5
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## ANALOG2.BAS

```bas
310 LOCATE 2,34:PRINT"Analogies 2":COLOR 7,0
700 RUN "analog3"
5500 DATA pencil, lead,3,12,13,14,1,5
5510 DATA dictator, powerful,2,1,9,12,23,1
5520 DATA dial, picture tube,11,21,22,7,3,5
5530 DATA frequency, radio waves,5,3,7,10,12,1
5540 DATA pound, force,5,9,4,10,21,3
5550 DATA bird, sparrow,21,22,23,6,7,4
5560 DATA army, soldier,7,11,8,10,19,1
5570 DATA TV, radio,15,2,11,8,13,4
5580 DATA act, play,2,7,9,1,11,4
5590 DATA miles, light years,10,21,22,23,6,1
5600 DATA boss, worker,13,16,11,14,19,3
5610 DATA poison, death,14,16,12,20,23,3
5620 DATA herb, flavor,16,19,1,3,13,5
5630 DATA mop, floor,15,19,21,14,22,4
5640 DATA mold, figure,13,14,15,8,1,3
5650 DATA war, battles,20,16,11,14,7,2
5660 DATA programmer, program,20,14,18,21,17,5
5670 DATA architect, blueprint,18,15,13,14,7,1
5680 DATA diver,depths,12,11,19,20,23,3
5690 DATA diver, bends,12,11,19,20,23,4
5700 DATA stingy, tight,22,21,3,2,1,2
5710 DATA health, clean air,19,2,3,23,16,4
5720 DATA horse, saddle,23,22,12,11,6,2
5730 DATA mutton, sheep,13,1,12,21,10,2
5740 DATA prophet, revelation,18,15,17,20,21,3
5750 DATA seek, escrew,19,3,1,21,5,4
5760 DATA cistern, water,19,22,3,15,16,2
5770 DATA crutch, locomotion, 21,11,15,11,6,3
5780 DATA ascetic, philanderer,22,21,7,6,2,2
5790 DATA entrepreneur, profits,19,2,4,16,20,1
```

## ANALOG3.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM A(18):FOR I=1 TO 18:A(I)=I:NEXT I
10 CLS:R=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP A(INT(RND*18+1)),A(INT(RND*18+1)):NEXT I
20 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
30 LOCATE 2,34:PRINT"Analogies 3":COLOR 7,0
40 XX=1:C=A(XX):R=0:N=0
50 RESTORE:IF C>1 THEN FOR L=1 TO C-1:FOR X=1 TO 10:READ A$:NEXT X,L
60 GOSUB 7000
70 READ A$,B$
80 PRINT:PRINT"Problem" C
90 PRINT:PRINT"Complete the second analogy so that it is most like the first:"
100 PRINT:PRINT A$ " is to " B$ " as":PRINT
110 READ A$:PRINT A$ " is to which of these:"
120 FOR X=1 TO 5:PRINT"(";:COLOR 15:PRINT X;:COLOR 7:PRINT")  ";:READ A$:PRINTA$:NEXT X
130 READ K, A$
140 BEEP:LOCATE 25,1:PRINT"Your choice is - ";:N=N+1:Z=Z+1
150 GOSUB 59990:IF INSTR("12345",IKEY$)=0 THEN 150 ELSE A=VAL(IKEY$)
160 IF (A<>K)*(Z>1) THEN PLAY "mbn50n25":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"No!  The answer was " K ".";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:GOTO 200
170 IF (A=K)*(Z=1) THEN PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"Correct!";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:R=R+1:GOTO 200
180 IF (A=K)*(Z>1) THEN PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"Right...";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:R=R+0.7:GOTO 200
190 PLAY "mbn50n25":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"No, but here is a hint:  " A$;:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:GOTO 140
200 XX=XX+1:Z=0
210 IF XX<18 THEN C=A(XX):GOTO 50
220 GOSUB 7000:PRINT"You scored" R "right out of" N "  or" INT(100*R/N) "percent."
230 IF R/N<0.6 THEN PRINT"Why don't you look at this program again.":TIMEOUT=3:GOSUB 59950:RUN
240 IF R/N<=0.8 THEN PRINT"Good score"
250 IF R/N<=0.9 THEN PRINT"Excellent!"
260 IF R/N>0.9 THEN PRINT"100 percent!  What else can I say!!"
270 TIMEOUT=3:GOSUB 59950:GOTO 700
600 RUN "iqbuild"
700 CHAIN MERGE "analog4",5
5500 DATA cat, kitten, lion, tiger, lioness, baby, young, cub, 5, parent to offspring
5510 DATA spice, food, wit, fame, information, conversation, fortune, intelligence, 3, adds flavor
5520 DATA bass, soprano, low, top, voice, male, high, music, 4, opposites on scale
5530 DATA ladder, rung, carrying case, handle, lock, cover, divider, hinge, 1,  something to hold
5540 DATA pint, liter, yard, quart, metric, drink, colume, meter, 5, one system to another
5550 DATA hammer, nail, bat, strike, hit, baseball, fly, swing, 3, tool hits
5560 DATA wince, pain, blush, embarrassment, cry, anger, avoid, dislike, 1, caught with fly open
5570 DATA concise, verbose, exact, qualify, imprecise, inferior, opulent, terse, 2, on target to off target
5580 DATA dregs, wine, slag, iron, drink, grapes, rot, castoff, 1, left overs
5590 DATA synthetic, natural, nylon, chemical, cloth, thread, silk, grow, 4, one is imitation
5600 DATA leg, man, wheel, walk, bike, woman, clock, turn, 2, locomotion
5610 DATA time, scythe, justice, liberty, scales, pedestal, clock, chains, 2, statue holds these
5620 DATA lawyer, will, mechanic, automobile, repair, wrench, dirt, brakes, 2, what is created
5630 DATA obituary, eulogy, libel, slander, speech, print, law, abuse, 1, written to spoken
5640 DATA dusk, dawn, death, infancy, birth, growth, maturity, beginning, 2, opp. ends of the same line
5650 DATA usury, interest, miserly, money, misfortune, frugality, thievery, opulence, 3, one word extreme of other
5660 DATA positive, negative, +, x, /, -, 0, *, 3, numerical signs
5670 DATA beetle, lobster, horse, fish, hog, whale, grass, mannal, 3, land to water mannal
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## ANALOG4.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM A(12):FOR I=1 TO 12:A(I)=I:NEXT I
10 CLS:R=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP A(INT(RND*12+1)),A(INT(RND*12+1)):NEXT I
30 LOCATE 2,34:PRINT"Analogies 4":COLOR 7,0
50 RESTORE:IF C>1 THEN FOR L=1 TO C-1:FOR X=1 TO 14:READ A$:NEXT X,L
90 PRINT:PRINT"Which analogy below is most similar to this one:"
110 REM
120 FOR X=1 TO 5:PRINT"(";:COLOR 15:PRINT X;:COLOR 7:PRINT")  ";:READ A$,B$:PRINT A$ " is to " B$:NEXT X
210 IF XX<13 THEN C=A(XX):GOTO 50
600 RUN "iqbuild"
700 CHAIN MERGE "analog5",5
5500 DATA team, coach, carpenter, tools, club, advisor, army, general, truck, driver, men, man, 3, organized group
5510 DATA carelessness, accident, fire, burn, care, safety, punch, fight, flee, run, thoughtlessness, oversight, 5, human error
5520 DATA brake, car, thinker, doer, root, plant, choke, carburetor, nest, bird, block, movement,3, holds back unit
5530 DATA parsimonious, frugal, generous, spendthrift, joyful, happy, poor, miserly, hate, love, profit, capitalist, 1, 1st word extreme of other
5540 DATA choir, singer, fort, soldiers, orchestra, musician, college, professors, team, coach, men, man, 2, musical group
5550 DATA painting, frame, photo, album, frame, house, bristles, brush, water, rain, statue, chisel, 1, holds art
5560 DATA dentist, drill, pencil, paper, satirist, words, saw, wood, tooth, bite, doctor, disease, 2, tools need not be physical
5570 DATA heat, coal, fuel, gas, car, move, power, energy, gunpowder, explode, light, kerosene, 5, energy from a thing
5580 DATA unbrella, rain, hammer, chisel, computer, program, snow, storm, coat, cold, roof, house, 4, shield for the element
5590 DATA city, town, continent, island, mayor, council, house, barn, lawyers, farmers, smart, dumb, 1, size difference
5600 DATA disease, fever, allergy, sneeze, flu, spread, run, perspire, knife, whet, sick, cold, 1, problem to symptom
5610 DATA mozart, rock, inventor, invention, quality, junk, shakespear, soap opera, ballet, hastle, records, tape, 3, classical artist to pop
5620 REM
5630 REM
5640 REM
5650 REM
5660 REM
5670 REM
```

## ANALOG5.BAS

```bas
30 LOCATE 2,34:PRINT"Analogies 5":COLOR 7,0
210 IF XX<13 THEN C=A(XX):GOTO 50
700 CHAIN MERGE "analog6",5
5500 DATA car, gas, disease, germs, man, food, fire, wood, man, eat, boat, motor, 2, supplies energy
5510 DATA prism, triangle, wood, paper, can, bottle, base, height, can, circle, line, sphere, 4, shape within
5520 DATA base X height, triangle, perimeter, square, arc + tangent, circle, age-sex, man, side X side, square, base X height, statue, 4, compute area
5530 DATA bull market, bear market, good, evil, right, left, top, bottom, upturn, downturn, private, public, 4, change of direction
5540 DATA crab, crustacean, bird, flight, bird, wing, man, vertebrate, frog, lizard, fish, aquatic, 3, class by skeleton
5550 DATA Hamlet, Shakespear, potato eaters, Van Gogh, movie, actors, opera, Caruso, poet, writer, Beethoven, orchestra, 1, creation -- creator
5560 DATA lexicographer, cartographer, words, pictures, showing, telling, seeing, feeling, math, science, literature, science, 1, dictionary to maps
5570 DATA benediction, malediction, speak, swear, bless, curse, rabbi, priest, flee, fight, libel, slander, 2, bene--good male--ill
5580 DATA Nixon, Nepoleon, Watergate, Waterloo, president, war, football, soccer, elected, ejected, lawful, unlawful, 1, two downfalls
5590 DATA pitbull, greyhound, truck, car, jet, airplane, dog, cat, sheep, goats, karate, track, 5, fighter to runner
5600 DATA nucleus, cell, building, basement, sun, solar system, earth, moon, atomic, energy, cell, amoeba, 2, center to whole
5610 DATA food, starvation, insulin, coma, battle, defeat, sickness, health, indulge, abstain, pleasure, torture, 1, results of lack
```

## ANALOG6.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM A(15):FOR I=1 TO 15:A(I)=I:NEXT I
10 CLS:R=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP A(INT(RND*15+1)),A(INT(RND*15+1)):NEXT I
30 LOCATE 2,34:PRINT"Analogies 6":COLOR 7,0
210 IF XX<16 THEN C=A(XX):GOTO 50
700 RUN "b:iqbuild"
5500 DATA antiseptic, bacteria, army, nation, lawyer, defense, prescription, cure, bald, hair, education, ignorance, 5, A removes B
5510 DATA aristocrat, baron, flower, stem, president, vice president, leader, follower, insect, ant, civilian, soldier, 4, an example
5520 DATA solvency, pay, poor, buy, athletic, champion, aggressive, passive, punctual, tardy, bankruptcy, profit, 2, one leads to the other
5530 DATA despotic, domineer, cordial, rebuff, timid, withdraw, aggressor, tremble, malcontent, cooperate, disgruntled, rejoice, 2, character to action
5540 DATA hold, ship, basement, house, tail, airplane, vault, security, site, edifice, garage, car, 1, part down below
5550 DATA erosion, water, bomb, fuse, wars, destruction, professional, amateur, aging, time, floor, polish, 4, action to agent
5560 DATA illness, absence, watchman, theft, trip, fall, fly, drive, award, reward, competition, defeat, 2, one follows other
5570 DATA gravel, pit, oil, well, cement, sand, tunnel, cave, crest, mountain, concrete, road, 1, up from ground
5580 DATA dam, flow, science, research, reporter, news, laws, lawyer, autocracy, liberty, education, learning, 4, A resists B
5590 DATA conjunction, clauses, guest, hospitality, bridge, shores, paragraph, sentences, walls, land, shoes, foot, 2, binds together
5600 DATA intermediatiary, arbitrate, belligerent, peace, adherent, pact, general, private, prosecutor, conviction, believer, belief, 4, his job
5610 DATA asteroid, planet, pond, lake, moon, orbit, meteor, burn, rocket, free fall, combustible, burning, 1, big to small
5620 DATA pear, potato, tomato, fruit, pint, liquid, great dane, terrier, sweet, sour, peach, turnip, 5, tree to ground
5630 DATA bear, fur, fish, seaweed, fish, gills, car, sheet metal, bug, wings, food, nutrients, 3, outside cover
5640 DATA sheep, fold, macherel, school, dog, cat, bluefish, bait, planet, solar system, tortoise, shell, 1, types of herds
```

## ANTONYM.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM P(35):FOR I=1 TO 35:P(I)=I:NEXT I
10 CLS:T=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP P(INT(RND*35+1)),P(INT(RND*35+1)):NEXT I
20 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
30 LOCATE 2,35:PRINT"Antonyms 1":COLOR 7,0
40 LOCATE 4,1:PRINT"Antonyms are words of opposite meaning.":PRINT
50 PRINT"In this lesson, pick the word that means the opposite of the one"
60 PRINT"in the box."
70 XX=1:P=P(XX)
80 IF P>1 THEN FOR J=1 TO P-1:FOR X=1 TO 7:READ A$:NEXT X,J
90 PRINT:PRINT"Problem" P
100 READ A$:PRINT:PRINT"Which word below is most opposite to"
110 PRINTTAB(39-INT(LEN(A$)/2)) "╔" STRING$(LEN(A$),"═") "╗"
120 PRINTTAB(39-INT(LEN(A$)/2)) "║" A$ "║"
130 PRINTTAB(39-INT(LEN(A$)/2)) "╚" STRING$(LEN(A$),"═") "╝"
140 FOR X=1 TO 5:READ A$:PRINT"(";:COLOR 15:PRINT X;:COLOR 7:PRINT")  " A$:NEXT X:READ R
150 BEEP:LOCATE 25,1:PRINT "Your choice is - ";
155 GOSUB 59990:IF INSTR("12345",IKEY$)=0 THEN 155 ELSE C=VAL(IKEY$)
160 N=N+1:IF C=R THEN PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"That is correct!";:T=T+1:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);
170 IF C<>R THEN PLAY "mbn50n25":LOCATE 25,1:PRINTSPC(79);:LOCATE 25,1:PRINT"No!  Try again.";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);:GOTO 150
180 XX=XX+1:IF XX<36 THEN P=P(XX):GOSUB 7000:RESTORE:GOTO 80
190 GOSUB 7000:PRINT"Your score is the total number right out of all answers given."
200 PRINT:PRINT"You scored " T " right out of " N ", or " INT(T/N*100+0.5) " percent."
210 PRINT:IF T/N>0.9 THEN PRINT"Excellent job!":GOTO 240
220 IF T/N>0.75 THEN PRINT"Good score!":GOTO 240
230 PRINT"Why don't you look at this program again...":TIMEOUT=7:GOSUB 59950:RUN
240 TIMEOUT=7:GOSUB 59950:GOTO 700
600 RUN "iqbuild"
700 CHAIN MERGE "antonym2",5
5500 DATA waste, meet, save, pollute, often, agree, 2
5510 DATA warlike, private, democratic, common, peaceful, empty, 4
5520 DATA wake, warn, freeze, sleep, trap, eat, 3
5530 DATA question, remember, propose, answer, remark, watch, 3
5540 DATA wild, ready, trapped, natural, tame, sick, 4
5550 DATA prove, disprove, approve, reprove, improve, remain, 1
5560 DATA quick, difficult, thin, careless, calm, slow, 5
5570 DATA quit, start, renew, elect, return, use, 1
5580 DATA whole, empty, partial, smooth, mirace, give, 2
5590 DATA punish, educate, reward, accept, fight, flee, 2
5600 DATA wealth, disease, burden, poverty, freedom, worry, 3
5610 DATA change, leave, oversee, visit, shape, remain, 5
5620 DATA identical, uncommon, unknown, unlike, unable, undone, 3
5630 DATA wicked, legal, good, famous, beautiful, strong, 2
5640 DATA abandon, reveal, keep, strict, revolt, furnish, 2
5650 DATA yield, resist, upset, proceed, create, present, 1
5660 DATA tardy, equal, favorable, disloyal, happy, prompt, 5
5670 DATA woeful, content, uneasy, joyful, helpful, useful, 3
5680 DATA hill, cave, hollow, pond, volcano, peak, 2
5690 DATA effect, result, cause, manufacture, award, prove, 2
5700 DATA tired, attired, untried, tireless, retired, contrived, 3
5710 DATA export, deport, import, report, disport, support, 2
5720 DATA melt, gasify, burn, evaporate, freeze, heat, 4
5730 DATA hardship, aid, collapse, improvement, ease, quiet, 4
5740 DATA offend, close, react, please, perfect, clean, 3
5750 DATA hinder, aid, forward, besides, accept, keep, 1
5760 DATA punctual, final, gentle, smooth, sunny, tardy, 5
5770 DATA scold, clean, tear, keep, praise, raise, 4
5780 DATA weep, shine, tickle, mend, fill, rejoice, 5
5790 DATA wreck, drift, inhabit, create, please, smile, 3
5800 DATA unravel, show, express, prove, predict, entangle, 5
5810 DATA accept, give, reject, caution, reward, empty, 2
5820 DATA unreal, ordinary, actual, fold, make, cover, 2
5830 DATA absence, plenty, return, destiny, error, presence, 5
5840 DATA withdraw, advance, divide, restore, elect, allow, 1
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## ANTONYM2.BAS

```bas
30 LOCATE 2,35:PRINT"Antonyms 2":COLOR 7,0
700 RUN "b:iqbuild"
5500 DATA able, unearned, nondescript, irregular, biased, incompetent, 5
5510 DATA reason, allegiance, safeguard, ransom, witticism, avarice, 1
5520 DATA haste, sloth, equip, frighten, help, waste, 1
5530 DATA fugitive, permanent, domestic, affirmative, eligible, mortal, 1
5540 DATA nonchalant, mendable, peculiar, sneering, excitable, boring, 4
5550 DATA dread, plea, weakness, shriek, welcome, revise, 4
5560 DATA humorous, avaricious, solemn, ambiguous, farcical, structural, 2
5570 DATA charge, absolve, bless, breach, purchase, cancel, 1
5580 DATA abrasive, victorious, suitable, uninhabited, smooth, damp, 4
5590 DATA exalt, abase, submit, laud, issue, bury, 1
5600 DATA frank, uncommon, restrained, eloquent, undefined, indolent, 2
5610 DATA brazen, cultivated, broken, shy, tough, burnish, 3
5620 DATA censure, becalm, offset, praise, besiege, profit, 3
5630 DATA humility, pride, redundancy, meanness, solitude, dryness, 1
5640 DATA formidable, mortal, unreasonable, confused, pleasant, shapely, 4
5650 DATA blame, misrepresent, recourse, absolve, defy, match, 3
5660 DATA defer, accelerate, embroil, blunder, reinstate, escape, 1
5670 DATA eccentric, disinterested, objective, oblique, trustworthy, ordinary, 5
5680 DATA feasible, conventional, impractical, unclean, fearful, mundane, 2
5690 DATA casual, belated, idyllic, deliberate, decorous, benevolent, 3
5700 DATA prosperity, adversity, uncertainty, democracy, renown, avocation, 1
5710 DATA lunacy, rectitude, chicanery, sanity, deliverance, cleverness, 3
5720 DATA chide, jest, belabor, huddle, praise, devour, 4
5730 DATA intentional, pronounced, accidental, continual, auxiliary, rotund, 2
5740 DATA earnest, laconic, tranquil, legendary, frivolous, irrelevant, 4
5750 DATA dally, relax, hasten, declaim, prevail, rebel, 2
5760 DATA foster, unfrock, recondition, discharge, discourage, upstage, 4
5770 DATA lofty, doctrinaire, mechanical, lowly, marginal, civil, 3
5780 DATA ethical, dogmatic, artistic, immoral, political, learned, 3
5790 DATA dowdy, contrived, emphatic, young, twisted, chic, 5
5800 DATA genial, vulnerable, uneven, sullen, nimble, hungry, 3
5810 DATA wearisome, knowing, agreeable, fiery, interesting, gentle, 4
5820 DATA explicit, immodest, conceited, valid, ambiguous, improbable, 4
5830 DATA denounce, commend, rebut, behold, dissemble, establish, 1
5840 DATA abet, compress, install, polarize, hinder, uncover, 4
```

## BACKGAM.BAS

```bas
2430 KEY OFF:CLS:COLOR 0,7:LOCATE 1,30:KEY(10) ON:ON KEY(10) GOSUB 5000:PRINT" B A C K G A M M O N ":COLOR 7,0
2440 FOR X=1 TO 2:LOCATE 12,1:PRINT SPC(79):LOCATE 12,1:PRINT"Enter the name of player #" X;:PLAY "mbc":INPUT " - " ,A$(X):NEXT X
2450 DEFINT A,D-J,L-M,S-U,X-Z:GOSUB 59980:DIM A(25)
2460 LOCATE 12,1:PRINTSPC(79):LOCATE 5,10:PRINT"Your pips look like this:"
2462 LOCATE 7,30:PRINT A$(1) TAB(45) " - ▀▀▀":LOCATE 9,30:PRINT A$(2) TAB(45) " - ▀ ▀"
2470 LOCATE 25,1:PRINT "Press any key to continue";:PLAY "c":GOSUB 59990
2480 FOR X=0 TO 25:A(X)=0:NEXT X
2482 A(24)=2:A(19)=-5:A(17)=-3:A(13)=5:A(12)=-5:A(8)=3:A(6)=5:A(1)=-2
2500 GOSUB 2590:W=0:IF INT(RND*2+1)=2 THEN W=1
2510 LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT A$(W+1);
2520 COLOR 15:PRINT"   1";:COLOR 7:PRINT"=ROLL DICE, ";:COLOR 15:PRINT"2";:COLOR 7:PRINT"=REDRAW BOARD, ";:COLOR 15:PRINT"3";:COLOR 7:PRINT"=NEW GAME";
2530 PLAY "c":GOSUB 59990:IF INSTR("123",IKEY$)=0 THEN 2530 ELSE X=VAL(IKEY$)
2540 ON X GOTO 2560, 2550, 2480:GOTO 2510
2550 GOSUB 2590:GOTO 2510
2560 L=INT(RND*6+1):M=INT(RND*6+1):D=2:IF L=M THEN D=4 ELSE IF L<M THEN SWAP L,M
2570 ON W+1 GOTO 2770, 3080
2580 PLAY "ae":LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT"INVALID MOVE";:TIMEOUT=6:GOSUB 59950:RETURN
2590 CLS:FOR X=20 TO 70 STEP 4:FOR Y=3 TO 19:LOCATE Y,X:PRINT"║";:NEXT Y,X
2600 LOCATE 2,20:PRINT"╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗";
2610 LOCATE 20,20:PRINT"╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝";
2620 LOCATE 11,20:PRINT"╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣";
2630 Y=24:FOR X=21 TO 65 STEP 4:LOCATE 1,X:PRINT Y;:Y1=25-Y:LOCATE 21,X:PRINT Y1;:Y=Y-1:NEXT X
2640 LOCATE 11,5:PRINT"ON BAR";:LOCATE 10,6:PRINT"▀ ▀";:LOCATE 12,6:PRINT"▀▀▀";
2650 LOCATE 9,6:PRINT A(0);:LOCATE 13,6:PRINT A(25);
2660 FOR X=24 TO 13 STEP -1
2670 IF A(X)=0 THEN 2710 ELSE  U=1:IF A(X)<0 THEN U=2
2680 FOR Z=1 TO ABS(A(X)):S=3+Z-1
2690 Y=(24-X)*4+21:LOCATE S,Y:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
2700 NEXT Z
2710 NEXT X
2720 FOR X=1 TO 12:IF A(X)=0 THEN 2765
2730 U=1:IF A(X)<0 THEN U=2
2740 FOR Z=1 TO ABS(A(X)):S=20-Z
2750 Y=(X-1)*4+21:LOCATE S,Y:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
2760 NEXT Z
2765 NEXT X:RETURN
2770 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT A$(1) ", your roll is  ";:COLOR 15:PRINTL;:COLOR 7
2780 J=25:IF D>1 THEN COLOR 15:PRINT M;:COLOR 7
2790 IF A(25)>0 AND A(25-L)<-1 AND A(25-M)<-1 THEN 3070
2800 IF A(J)<1 THEN J=J-1:GOTO 2800
2810 E=0:FOR X=L+1 TO 25:IF A(X)>0 AND A(X-L)>-2 THEN E=1
2820 NEXT X:FOR X=M+1 TO 25:IF A(X)>0 AND A(X-M)>-2 THEN E=1
2830 NEXT X:IF E=1 THEN 2850 ELSE IF J>6 THEN 3070
2840 IF A(M)<1 AND A(L)<1 AND J>L THEN 3070
2850 IF A(25)>0 THEN F=25:LOCATE 25,40:COLOR 15:PRINT"FROM BAR ";:COLOR 7:GOTO 2880
2860 PLAY "d":LOCATE 25,40:COLOR 15:INPUT;"FROM-- ",IN$:COLOR 7:F=VAL(IN$):IF F<1 OR F>24 THEN 2940
2870 IF A(F)<1 THEN 2940
2880 PLAY "d":LOCATE 25,60:COLOR 15:INPUT;"TO-- ",IN$:COLOR 7:T=VAL(IN$)
2890 IF T=99 THEN 3020
2900 IF T<1 OR T>24 THEN 2940
2910 IF A(T)<-1 THEN 2940
2920 IF F-T=L THEN L=M:GOTO 2950
2930 IF F-T=M THEN M=L:GOTO 2950
2940 GOSUB 2580:GOTO 2770
2950 A(F)=A(F)-1:IF A(T)=-1 THEN A(0)=A(0)+1:A(T)=0
2960 A(T)=A(T)+1
2970 GOSUB 3430:D=D-1:E=0:FOR X=1 TO 25
2980 IF A(X)<1 THEN E=E+1
2990 NEXT X:IF E=25 THEN 3580
3000 IF D=0 THEN W=1:GOTO 2510
3010 GOTO 2770
3020 IF J>6 THEN 2940
3030 IF F=M OR M>J AND F=J THEN M=L:GOTO 3060
3040 IF F=L OR L>J AND F=J THEN L=M:GOTO 3060
3050 GOTO 2940
3060 A(F)=A(F)-1:GOTO 2970
3070 PLAY "ae":TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"You can't move!";:W=ABS(W-1):TIMEOUT=6:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:GOTO 2510
3080 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT A$(2) ", your roll is  ";:COLOR 15:PRINT L;:COLOR 7
3090 IF D>1 THEN COLOR 15:PRINT M;:COLOR 7
3100 J=0
3110 IF A(0)>0 AND A(L)>1 AND A(M)>1 THEN 3070
3120 IF A(0)<1 AND A(J)>=0 THEN J=J+1:GOTO 3120
3130 E=0:IF A(0)>0 AND A(L)<2 THEN E=1
3140 IF A(0)>0 AND A(M)<2 THEN E=1
3150 FOR X=1 TO 24-L:IF A(X)<0 AND A(X+L)<2 THEN E=1
3160 NEXT X:FOR X=1 TO 24-M:IF A(X)<0 AND A(X+M)<2 THEN E=1
3170 NEXT X:IF E=1 THEN 3200
3180 IF J<19 THEN 3070
3190 IF A(25-M)>-1 AND A(25-L)>-1 AND J<25-L THEN 3070
3200 IF A(0)>0 THEN F=0:LOCATE 25,40:COLOR 15:PRINT"FROM BAR ";:COLOR 7:GOTO 3240
3210 PLAY "f":LOCATE 25,40:COLOR 15:INPUT;"FROM-- ",IN$:COLOR 7:F=VAL(IN$)
3220 IF F<1 OR F>24 THEN 3290
3230 IF A(F)>-1 THEN 3290
3240 PLAY "f":LOCATE 25,60:COLOR 15:INPUT;"TO-- ",IN$:COLOR 7:T=VAL(IN$):IF T=99 THEN 3380
3250 IF T<1 OR T>24 THEN 3290
3260 IF A(T)>1 THEN 3290
3270 IF T-F=L THEN L=M:GOTO 3300
3280 IF T-F=M THEN M=L:GOTO 3300
3290 GOSUB 2580:GOTO 3080
3300 IF F=0 THEN A(0)=A(0)-2
3310 A(F)=A(F)+1:IF A(T)=1 THEN A(25)=A(25)+1:A(T)=0
3320 A(T)=A(T)-1
3330 GOSUB 3430:D=D-1:E=0:FOR X=1 TO 25
3340 IF A(X)>-1 THEN E=E+1
3350 NEXT X:IF E=25 THEN 3590
3360 IF D=0 THEN W=0:GOTO 2510
3370 GOTO 3080
3380 IF J<19 THEN 3290
3390 IF F=25-M OR J>25-M AND F=J THEN M=L:GOTO 3420
3400 IF F=25-L OR J>25-L AND F=J THEN L=M:GOTO 3420
3410 GOTO 3290
3420 A(F)=A(F)+1:GOTO 3330
3430 LOCATE 9,6:PRINT A(0);:LOCATE 13,6:PRINT A(25);:IF F=0 OR F=25 THEN 3450
3440 H=F:GOSUB 3460:IF T=99 THEN RETURN
3450 H=T:GOSUB 3460:RETURN
3460 U=1:IF A(H)<0 THEN U=2
3470 P=A(H):IF P>8 THEN P=8
3480 IF H<=12 THEN 3510
3490 X=(24-H)*4+21:G=0:IF H=F THEN G=1
3500 Y=2+ABS(P)+G:GOTO 3540
3510 X=(H-1)*4+21:G=0:IF H=F THEN G=1
3520 Y=20-ABS(P)-G
3540 LOCATE Y,X:PRINT"   ";
3550 IF H<>T THEN RETURN
3560 LOCATE Y,X:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
3570 RETURN
3580 PLAY "c16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:COLOR 25:LOCATE 25,1:PRINT A$(1) " WINS";:TIMEOUT=6:GOSUB 59950:COLOR 7:RUN "b:???0??"
3590 PLAY "c16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:COLOR 25:LOCATE 25,1:PRINT A$(2) " WINS";:TIMEOUT=6:GOSUB 59950:COLOR 7:RUN "b:???0??"
5000 RUN "menu"
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 ON KEY(1) GOSUB 5000:IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## BLACK.BAS

```bas
10 REM=======================================================================
20 REM============================ BLACKJACK ================================
30 REM This program plays Blackjack with either one or two players.  The   ==
40 REM computer always plays the role of dealer and the players betting    ==
50 REM on the results of each play.                                        ==
70 REM=======================================================================
80 REM $s2
100 REM======================================================================
110 REM=========================== MAIN ROUTINE =============================
120 REM This routine contains the main logic for the program.  It makes    ==
130 REM extensive use of subroutines which are described later.            ==
140 REM======================================================================
150 REM $s2
160 GOSUB 500 'INITIALIZATION
170 GOSUB 1000 'PLAY BLACKJACK
180 GOTO 170
490 REM $s2
500 REM======================================================================
510 REM========================== INITIALIZATION ============================
520 REM This routine turns off the function keys, sets the display to      ==
530 REM 80-character mode, and displays the opening screens.               ==
550 REM======================================================================
560 REM $s2
570 KEY OFF:KEY(10) ON:ON KEY(10) GOSUB 10000:DEFINT A-Z
580 WIDTH 80:B=0:O=0
590 CLS:HEART=3:DIAMOND=4:CLUB=5:SPADE=6
591 FOR I=1 TO 12
600 Y=5:X=30:CARD=I:SUIT=HEART:GOSUB 20000
601 Y=5:X=41:CARD=I+1:SUIT=SPADE:GOSUB 20000
602 NEXT I
603 Y=5:X=30:CARD=11:SUIT=HEART:GOSUB 20000
604 Y=5:X=41:CARD=1:SUIT=SPADE:GOSUB 20000
610 LOCATE 14,35:PRINT "BLACKJACK"
620 LOCATE 16,39:PRINT "by"
621 LOCATE 17,30:PRINT "Hughes J. Glantzberg"
622 LOCATE 18,30:PRINT "1602 Elizabeth Drive"
623 LOCATE 19,30:PRINT "Carrollton, TX 75007"
630 ON ERROR GOTO 3000
635 TIMEOUT=5:GOSUB 59950
640 RETURN
990 REM $pa
1000 REM=====================================================================
1010 REM======================== PLAY BLACKJACK =============================
1080 REM=====================================================================
1085 REM $s2
1100 CLS
1110 LOCATE 12,10:PRINT"Will there be 1 or 2 players?  ";
1120 GOSUB 59990:PLAYERS=VAL(IKEY$):IF PLAYERS<>1 AND PLAYERS<>2 THEN 1120
1130 PRINT PLAYERS
1140 FOR I=1 TO PLAYERS
1150 PRINT TAB(10) "Enter the name of player " I "  ";:INPUT "",NAM$(I)
1160 NEXT I
1170 GOSUB 59980:Z=50:DIM A(64)
1180 FOR X=1 TO 52:A(X)=X:NEXT X
1190 CLS:GOSUB 1200:CLS:GOTO 2000
1195 REM $s2
1200 REM=====================================================================
1210 REM========================== SHUFFLING ================================
1220 REM=====================================================================
1230 REM $s2
1240 LOCATE 12,35:PRINT"Shuffling"
1250 FOR L=1 TO 156:X=INT(RND*52)+1:Y=INT(RND*52)+1
1260 SWAP A(X),A(Y):NEXT L:J=1
1270 LOCATE 12,35:PRINT SPC(9):RETURN
1295 REM $s2
1300 REM=====================================================================
1310 REM======================== SELECT THE CARD ============================
1320 REM=====================================================================
1330 REM $s2
1340 SUIT=INT((A(J)-1)/13)
1350 CARD=A(J)-SUIT*13
1352 IF SUIT=3 THEN SUIT=CLUB
1354 IF SUIT=2 THEN SUIT=SPADE
1356 IF SUIT=1 THEN SUIT=DIAMOND
1358 IF SUIT=0 THEN SUIT=HEART
1360 RETURN
1395 REM $s2
1400 REM=====================================================================
1410 REM======================== SET UP THE CARD ============================
1420 REM=====================================================================
1430 REM $s2
1440 X=(N-1)*11+1
1450 Y=(M-1)*8+1
1460 GOSUB 20000
1470 RETURN
1990 REM $s2
2000 REM=====================================================================
2010 REM========================= BEGIN THE GAME ============================
2050 REM=====================================================================
2060 REM $s2
2070 LOCATE 25,10
2080 PRINT"Press `E' to quit playing";
2100 FOR X=1 TO PLAYERS
2105 LOCATE 11+X,10
2110 PRINT NAM$(X) ", what is your bet?  $";:INPUT "",IN$
2120 IF IN$="E" OR IN$="e" THEN RUN "b:???0??" ELSE BET(X)=VAL(IN$)
2130 NEXT X
2140 GOSUB 4000
2150 X1=0:X2=0:IF R=1001 THEN 2170
2160 IF A(59)=1011 THEN 2300 ELSE 2500
2170 FOR X=1 TO PLAYERS:LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT NAM$(X) ", insurance (y or n)? ";
2180 GOSUB 59990:IF INSTR("YNyn",IKEY$)=0 THEN 2180
2190 IF X=1 AND (IKEY$="y" OR IKEY$="Y") THEN X1=1
2200 IF X=2 AND (IKEY$="y" OR IKEY$="Y") THEN X2=1
2210 NEXT X
2220 IF A(59)<>1011 THEN 2900
2300 H=J:J=0:N=1:M=3:GOSUB 1300:GOSUB 1400:LOCATE 18,65:PRINT"BLACKJACK";
2310 J=H
2320 GOTO 5050
2500 FOR M=1 TO 2 STEP 3-PLAYERS
2510 N=3
2520 LOCATE 5,65:PRINT NAM$(1);
2530 LOCATE 18,65:PRINT"Dealer";
2540 LOCATE 25,1:PRINT SPC(70):IF M=1 THEN LOCATE 25,1:PRINT NAM$(1);:L=2 ELSE LOCATE 11,65:PRINT NAM$(2);:LOCATE 25,1:PRINT NAM$(2);:L=3
2550 PRINT"'s turn - 1=HIT, 2=STAND, 3=DOUBLE, 4=REVIEW CARDS";
2560 GOSUB 59990:IF INSTR("1234",IKEY$)=0 THEN 2560 ELSE X=VAL(IKEY$)
2570 Q=56+M:ON X GOTO 2600,2660,2800,6000:GOTO 2540
2580 NEXT M:GOTO 5000
2600 GOSUB 1300:GOSUB 1400:J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
2601 IF CARD=1 THEN R=1001
2602 A(Q)=A(Q)+R
2610 IF A(Q)<1000 AND A(Q)>21 THEN 2650
2620 IF A(Q)-(INT(A(Q)/1000)*1000)>21 THEN 2650
2630 N=N+1:IF O=99 THEN O=0:GOTO 2660 ELSE 2540
2650 LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT"BUST!";:B=B+1
2660 IF N=3 AND A(Q)=1011 THEN A(Q)=9000
2670 T=J:GOTO 2580
2800 IF N<>3 THEN 2540 ELSE O=99:T(L)=T(L)*2:GOTO 2600
2900 LOCATE 25,1:PRINTSPC(79);:LOCATE 25,1:PRINT"No Blackjack!";
2910 TIMEOUT=5:GOSUB 59950
2920 IF X1=1 THEN BET(1)=BET(1)*0.5
2930 IF X2=1 THEN BET(2)=BET(2)*0.5
2940 GOTO 2500
2990 REM $s2
3000 REM=====================================================================
3010 REM======================== ERROR ROUTINE ==============================
3060 REM=====================================================================
3070 REM $s2
3080 IF ERR=4 THEN RESTORE:RESUME
3085 IF ERR=71 AND ERL=2090 THEN RUN
3090 PRINT"error " ERR " occurred in line " ERL
3100 STOP
3990 REM $s2
4000 REM=====================================================================
4010 REM======================= DISPLAY THE CARDS ===========================
4020 REM=====================================================================
4030 REM $s2
4040 CLS
4050 FOR N=1 TO 2
4060 FOR M=1 TO 3 STEP 3-PLAYERS
4070 IF M=3 AND N=1 THEN GOSUB 4500 ELSE GOSUB 4200
4071 NEXT M,N:RETURN
4200 GOSUB 1300:GOSUB 1400:J=J+1
4205 IF CARD>9 THEN R=10 ELSE R=CARD
4207 IF CARD=1 THEN R=1001
4210 A(56+M)=A(56+M)+R
4220 RETURN
4500 K=J:GOSUB 1300:A(0)=A(J):J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
4505 CARD=0:IF R=1 THEN R=1001
4510 GOSUB 1400
4520 A(59)=R
4530 RETURN
4990 REM $s2
5000 REM=====================================================================
5010 REM======================= PLAY THE DEALER =============================
5020 REM=====================================================================
5030 REM $s2
5035 LOCATE 25,1:PRINTSPC(79);
5040 N=1:M=3:W=J:J=0:GOSUB 1300:GOSUB 1400:J=W
5050 V=A(59):N=3:IF B=PLAYERS THEN 5500
5060 W=V/1000:V=V-W*1000:X=0:IF W>0 THEN X=1
5070 IF V>16 THEN 5500
5080 IF X>0 AND V+10>16 AND V+10<22 THEN V=V+10:GOTO 5500
5090 GOSUB 1300:GOSUB 1400:J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
5100 V=V+R+W*1000:N=N+1:GOTO 5060
5500 FOR X=1 TO PLAYERS:U=A(56+X):Y=U/1000:U=U-Y*1000
5510 IF Y>0 AND U+10<22 THEN U=U+10 ELSE IF U>21 THEN U=0
5520 IF V>21 THEN V=1
5530 Y=(X-1)*6+5
5535 IF A(56+X)=9000 THEN LOCATE Y,65:PRINT"BLACKJACK";:WINNING(X)=WINNING(X)+BET(X)*2:GOTO 5550
5540 IF V=U THEN LOCATE Y,65:PRINT"PUSH      "; ELSE IF V>U THEN LOCATE Y,65:PRINT"LOSE      ";:WINNING(X)=WINNING(X)-BET(X) ELSE LOCATE Y,65:PRINT"WIN       ";:WINNING(X)=WINNING(X)+BET(X)
5550 NEXT X
5560 FOR X=55 TO 59:A(X)=0:NEXT X:B=0
5570 TIMEOUT=5:GOSUB 59950
5580 CLS:LOCATE 3,37:PRINT"SO FAR":X=0
5590 LOCATE 5,30:PRINT NAM$(1) USING " has $#,###,###.##"; WINNING(1)
5600 IF PLAYERS=1 THEN 5620
5610 LOCATE 6,30:PRINT NAM$(2) USING " has $#,###,###.##"; WINNING(2)
5620 TIMEOUT=5:GOSUB 59950
5630 IF J>42 THEN GOSUB 1200
5640 GOTO 2000
5990 REM $s2
6000 REM=====================================================================
6010 REM======================= DISPLAY CARDS USED =========================
6020 REM=====================================================================
6030 REM $s2
6040 FOR X=57 TO 59:A(X)=0:NEXT X
6050 CLS:W=J:J=0:LOCATE 1,10:PRINT"HEARTS" TAB(30) "DIAMONDS" TAB(50) "CLUBS" TAB(70) "SPADES"
6060 LOCATE 3,1:PRINT"ACE"
6070 FOR Y=4 TO 12:LOCATE Y,1:PRINT Y-2:NEXT Y
6080 LOCATE 13,1:PRINT"JACK":LOCATE 14,1:PRINT"QUEEN":LOCATE 15,1:PRINT"KING"
6090 FOR J=1 TO K-PLAYERS:GOSUB 1300:E=(SUIT-3)*20+15:F=CARD+2
6100 LOCATE F,E:PRINT "▄";:NEXT J
6110 TIMEOUT=5:GOSUB 59950
6120 CLS:J=K-PLAYERS:GOSUB 4000:M=1:N=3
6130 IF J=T THEN M=2:N=3
6140 IF J=W THEN 2520
6150 GOSUB 1300:GOSUB 1400:IF CARD>9 THEN R=10 ELSE R=CARD
6160 A(56+M)=A(56+M)+R:N=N+1:GOTO 6130
9990 REM $pa
10000 RUN "menu"
19990 REM $s2
20000 REM====================================================================
20010 REM======================== DISPLAY A CARD ============================
20020 REM This routine displays a card at coordinates (y,x) on the         ==
20030 REM screen.  CARD must be set to the card number (1-13) and SUIT     ==
20040 REM must be set to the value of the suit of the card.                ==
20050 REM====================================================================
20060 REM $s2
20070 LOCATE Y,X:PRINT CHR$(201) + STRING$(7,205) + CHR$(187);
20080 ON CARD+1 GOSUB 20500,30000,30120,30203,30263,30323,30383,30443,30493,30553,30613,30673,30733,30793
20090 LOCATE Y+7,X:PRINT CHR$(200) + STRING$(7,205) + CHR$(188);
20100 RETURN
20495 REM $s2
20500 REM====================================================================
20510 REM========================= DISPLAY A    =============================
20520 REM====================================================================
20530 REM $s2
20550 LOCATE Y+1,X:PRINT CHR$(186) "       " CHR$(186);
20560 LOCATE Y+2,X:PRINT CHR$(186) "       " CHR$(186);
20570 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
20580 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
20590 LOCATE Y+5,X:PRINT CHR$(186) "       " CHR$(186);
20600 LOCATE Y+6,X:PRINT CHR$(186) "       " CHR$(186);
20610 RETURN
29990 REM $s2
30000 REM====================================================================
30010 REM========================= DISPLAY AN A =============================
30020 REM====================================================================
30030 REM $s2
30050 LOCATE Y+1,X:PRINT CHR$(186) "A      " CHR$(186);
30060 LOCATE Y+2,X:PRINT CHR$(186) "       " CHR$(186);
30070 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30080 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30090 LOCATE Y+5,X:PRINT CHR$(186) "       " CHR$(186);
30100 LOCATE Y+6,X:PRINT CHR$(186) "      A" CHR$(186);
30110 RETURN
30119 REM $pa
30120 REM====================================================================
30130 REM========================= DISPLAY A  2 =============================
30140 REM====================================================================
30145 REM $s2
30150 LOCATE Y+1,X:PRINT CHR$(186) "2      " CHR$(186);
30160 LOCATE Y+2,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30170 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30180 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30190 LOCATE Y+5,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30200 LOCATE Y+6,X:PRINT CHR$(186) "      2" CHR$(186);
30201 RETURN
30202 REM $s2
30203 REM====================================================================
30204 REM========================= DISPLAY A  3 =============================
30205 REM====================================================================
30206 REM $s2
30210 LOCATE Y+1,X:PRINT CHR$(186) "3      " CHR$(186);
30220 LOCATE Y+2,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30230 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30240 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30250 LOCATE Y+5,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30260 LOCATE Y+6,X:PRINT CHR$(186) "      3" CHR$(186);
30261 RETURN
30262 REM $s2
30263 REM====================================================================
30264 REM========================= DISPLAY A  4 =============================
30265 REM====================================================================
30266 REM $s2
30270 LOCATE Y+1,X:PRINT CHR$(186) "4      " CHR$(186);
30280 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30290 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30300 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30310 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30320 LOCATE Y+6,X:PRINT CHR$(186) "      4" CHR$(186);
30321 RETURN
30322 REM $pa
30323 REM====================================================================
30324 REM========================= DISPLAY A  5 =============================
30325 REM====================================================================
30326 REM $s2
30330 LOCATE Y+1,X:PRINT CHR$(186) "5      " CHR$(186);
30340 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30350 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30360 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30370 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30380 LOCATE Y+6,X:PRINT CHR$(186) "      5" CHR$(186);
30381 RETURN
30382 REM $pa
30383 REM====================================================================
30384 REM========================= DISPLAY A  6 =============================
30385 REM====================================================================
30386 REM $s2
30390 LOCATE Y+1,X:PRINT CHR$(186) "6      " CHR$(186);
30400 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30410 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30420 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30430 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30440 LOCATE Y+6,X:PRINT CHR$(186) "      6" CHR$(186);
30441 RETURN
30442 REM $s2
30443 REM====================================================================
30444 REM========================= DISPLAY A  7 =============================
30445 REM====================================================================
30446 REM $s2
30450 LOCATE Y+1,X:PRINT CHR$(186) "7      " CHR$(186);
30460 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30470 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30475 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30480 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30490 LOCATE Y+6,X:PRINT CHR$(186) "      7" CHR$(186);
30491 RETURN
30492 REM $pa
30493 REM====================================================================
30494 REM========================= DISPLAY A  8 =============================
30495 REM====================================================================
30496 REM $s2
30500 LOCATE Y+1,X:PRINT CHR$(186) "8      " CHR$(186);
30510 LOCATE Y+2,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30520 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30530 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30540 LOCATE Y+5,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30550 LOCATE Y+6,X:PRINT CHR$(186) "      8" CHR$(186);
30551 RETURN
30552 REM $pa
30553 REM====================================================================
30554 REM========================= DISPLAY A  9 =============================
30555 REM====================================================================
30556 REM $s2
30560 LOCATE Y+1,X:PRINT CHR$(186) "9      " CHR$(186);
30570 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30580 LOCATE Y+3,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30590 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30600 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30610 LOCATE Y+6,X:PRINT CHR$(186) "      9" CHR$(186)
30611 RETURN
30612 REM $s2
30613 REM====================================================================
30614 REM========================= DISPLAY A 10 =============================
30615 REM====================================================================
30616 REM $s2
30620 LOCATE Y+1,X:PRINT CHR$(186) "10     " CHR$(186);
30630 LOCATE Y+2,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30640 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30650 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30660 LOCATE Y+5,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30670 LOCATE Y+6,X:PRINT CHR$(186) "     10" CHR$(186);
30671 RETURN
30672 REM $pa
30673 REM====================================================================
30674 REM========================= DISPLAY A  J =============================
30675 REM====================================================================
30676 REM $s2
30680 LOCATE Y+1,X:PRINT CHR$(186) "J      " CHR$(186);
30690 LOCATE Y+2,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30700 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30710 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30720 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30730 LOCATE Y+6,X:PRINT CHR$(186) "      J" CHR$(186);
30731 RETURN
30732 REM $pa
30733 REM====================================================================
30734 REM========================= DISPLAY A  Q =============================
30735 REM====================================================================
30736 REM $s2
30740 LOCATE Y+1,X:PRINT CHR$(186) "Q      " CHR$(186);
30750 LOCATE Y+2,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30760 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30770 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30780 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30790 LOCATE Y+6,X:PRINT CHR$(186) "      Q" CHR$(186);
30791 RETURN
30792 REM $s2
30793 REM====================================================================
30794 REM========================= DISPLAY A  K =============================
30795 REM====================================================================
30796 REM $s2
30800 LOCATE Y+1,X:PRINT CHR$(186) "K      " CHR$(186);
30810 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30820 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30830 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30840 LOCATE Y+5,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30850 LOCATE Y+6,X:PRINT CHR$(186) "      K" CHR$(186);
30860 RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## FRANK.BAS

```bas
10 KEY OFF:WIDTH 80:CLS:DEFINT A-Z:CU$="     "
70 Z=0:GOSUB 3000:FOR X=13 TO 15:LOCATE X,1:PRINT STRING$(80,"█");:NEXT X
74 CHAIN MERGE "b:words", 75, ALL
75 GOSUB 1000:DIM H$(NW), H(NW), A$(90), A(90), W$(90), W(90), U$(50), U(50):T$=TIME$:XX=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2)):RANDOMIZE XX
77 RESTORE:FOR I=1 TO NW:READ H$(I):NEXT I
80 FOR X=1 TO NW:IF H(X)=0 THEN 100 ELSE NEXT X
90 FOR X=1 TO NW:H(X)=0:NEXT X:H=INT(RND*NW):GOTO 110
100 FOR T=1 TO 5:H=INT(RND*NW):IF H(H)=0 THEN 110 ELSE NEXT T:H=X
110 H$=H$(H):H(H)=1
120 L=LEN(H$):FOR X=1 TO L:W$(X)=MID$(H$,X,1):W(X)=0:NEXT X
140 LOCATE 14,39-L/2:PRINT STRING$(L+2," ");:LOCATE 14,40-L/2:COLOR 15:PRINT STRING$(L,"-");:COLOR 7
150 FOR X=65 TO 90:A$(X)=CHR$(X):NEXT X
160 LOCATE 16,1:PRINTSPACE$(70):LOCATE 16,1:PRINT"What's your letter?";
170 LOCATE 18,5:PRINTSTRING$(70,"▄");
180 LOCATE 20,14:FOR X=65 TO 90:PRINTA$(X)" ";:NEXT X
190 CU=22:LOCATE 21,30:PRINT"('/' to guess word)";
200 IKEY$="":LOCATE 16,CU:PRINTCU$;
210 GOSUB 59990:BEEP
220 IF IKEY$="*" THEN CLS:LOCATE 12,10:PRINT"The word was "H$(H)"!";:TIMEOUT=5:GOSUB 59950:RUN "b:ekg001"
230 IF IKEY$="/" THEN 2000
240 A=ASC(IKEY$):IF A>90 THEN A=A-32
250 IF INSTR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",IKEY$)=0 THEN 200
260 LOCATE 16,CU:PRINTIKEY$;
270 IF A$(A)=" " THEN LOCATE 17,1:PRINT"You've already used "IKEY$"!";:TIMEOUT=2:GOSUB 59950:LOCATE 17,1:PRINTSPACE$(50);:GOTO 200
280 S=0:NC=0:FOR X=1 TO L
290 IF W$(X)=IKEY$ THEN W(X)=1:S=S+1
300 IF W(X)=1 THEN NC=NC+1
310 NEXT X
320 IF NC=L THEN 340
330 IF S<>0 THEN 340 ELSE IF Z>=7 THEN 3800 ELSE LOCATE 17,1:PRINT"The monster gets ";:GOSUB 3000:TIMEOUT=2:GOSUB 59950:LOCATE 17,1:PRINTSPACE$(50);:A$(A)=" ":GOTO 180
340 LOCATE 14,40-L/2:COLOR 15
350 FOR X=1 TO L:IF W(X)=1 THEN PRINTW$(X); ELSE PRINT"-";
360 NEXT X:COLOR 7:A$(A)=" ":IF NC=L THEN 4000
370 TIMEOUT=2:GOSUB 59950:GOTO 180
1000 ON ERROR GOTO 1050
1010 RESTORE:NW=0
1020 READ X$:NW=NW+1:GOTO 1020
1050 RETURN
2000 LOCATE 16,1:PRINT"What is your guess for the word? ";:INPUT W$:IF W$="*" THEN CLS:LOCATE 12,10:PRINT"The word was "H$(H)"!";:TIMEOUT=5:GOSUB 59950:RUN "b:???0??"
2010 IF W$=H$ THEN 4000
2020 LOCATE 16,1:PRINT SPACE$(70);:LOCATE 16,1:PRINT"Wrong!  There goes ";:GOSUB 3000:TIMEOUT=2:GOSUB 59950:GOTO 160
3000 Z=Z+1:ON Z GOTO 3100, 3200,3300,3400,3500,3600,3700,3800
3010 STOP
3100 LOCATE 1,1:PRINT STRING$(80,"▀");:LOCATE 12,1:PRINT STRING$(80,"▄");:FOR X=1 TO 12:LOCATE X,1:PRINT"█";:LOCATE X,80:PRINT"█";:NEXT X:LOCATE 2,28:COLOR 15:PRINT"F R A N K E N S T E I N";:COLOR 7
3110 FOR X=6 TO 12:LOCATE X,10:PRINTSTRING$(8,"█");:LOCATE X,62:PRINTSTRING$(8,"█");:NEXT X:LOCATE 5,13:PRINT"██";:LOCATE 5,65:PRINT"██";
3120 RETURN
3200 PRINT"his body!";
3210 COLOR 15:LOCATE 6,37:PRINT STRING$(7,"█") CHR$(31) STRING$(6,29) STRING$(5,"█") CHR$(31) STRING$(4,29) STRING$(3,"█") CHR$(31) STRING$(2,29) "█";:COLOR 7
3220 RETURN
3300 PRINT"his arm!";
3310 COLOR 15:LOCATE 6,35:PRINT"▄▄" CHR$(31) STRING$(2,29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3320 RETURN
3400 PRINT"his other arm!";
3410 COLOR 15:LOCATE 6,44:PRINT"▄▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3420 RETURN
3500 PRINT"his leg!";
3510 COLOR 15:LOCATE 9,39:PRINT"▄" CHR$(31) CHR$(29) "█" CHR$(31) STRING$(2,29) "▄█";:COLOR 7
3520 RETURN
3600 PRINT"his other leg!";
3610 COLOR 15:LOCATE 9,41:PRINT"▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█▄";:COLOR 7
3620 RETURN
3700 PRINT"his head!";
3710 COLOR 15:LOCATE 3,39:PRINT"███" CHR$(31) STRING$(3,29) "▌█▐" CHR$(31) STRING$(3,29) "█▀█";:COLOR 7
3720 RETURN
3800 LOCATE 16,1:PRINT"     The word was   " H$ ".";:TIMEOUT=2:GOSUB 59950:PRINT"   The MONSTER lives!!!";:TIMEOUT=2:GOSUB 59950
3810 FOR X=1 TO 10
3820 LOCATE 6,35:PRINT"  " CHR$(31) STRING$(2,29) " " CHR$(31) CHR$(29) " ";
3830 LOCATE 6,44:PRINT"  " CHR$(31) CHR$(29) " " CHR$(31) CHR$(29) " ";
3840 COLOR 15:LOCATE 6,35:PRINT"▀▀" CHR$(30) STRING$(2,29) "█" CHR$(30) CHR$(29) "█";
3850 LOCATE 6,44:PRINT"▀▀" CHR$(30) CHR$(29) "█" CHR$(30) CHR$(29) "█";
3860 FOR X1=1 TO 50:NEXT X1
3870 LOCATE 6,35:PRINT"  " CHR$(30) STRING$(2,29) " " CHR$(30) CHR$(29) " ";
3880 LOCATE 6,44:PRINT"  " CHR$(30) CHR$(29) " " CHR$(30) CHR$(29) " ";
3890 COLOR 15:LOCATE 6,35:PRINT"▄▄" CHR$(31) STRING$(2,29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3900 COLOR 15:LOCATE 6,44:PRINT"▄▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3905 NEXT X
3910 LOCATE 16,1:PRINTSPACE$(70):LOCATE 16,1:PRINT"              Would you like to play again (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
3920 GOTO 4010
4000 LOCATE 16,1:PRINT"Correct!!     Would you like to play again (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
4010 GOSUB 59990:IF INSTR("ynYN",IKEY$)=0 THEN 4010
4020 BEEP:IF IKEY$="y" OR IKEY$="Y" THEN CLS:Z=0:GOSUB 3000:FOR X=13 TO 15:LOCATE X,1:PRINT STRING$(80,"█");:NEXT X:GOTO 80
4030 RUN "menu"
5000 RUN "b:???0??"
10000 DATA fat,cat,act,can,fast,hat,hand,last,man,ran,have
10010 DATA red,hen,let,get,help,next,pet,men,went,bed,said
10020 DATA big,pig,fir,did,swim,six,dig,win,sit,hit,been
10030 DATA rug,bug,jump,hunt,fun,must,cup,bus,cut,run,of,from
10040 DATA hot,pond,got,hop,not,dog,log,lost,soft,on,was,want
10050 DATA glass,grass,bell,dress,will,still,off,cross,fuss,stuff,roll
10060 DATA milk,truck,ask,back,mask,neck,desk,sick,silk,rock
10070 DATA fish,dish,brush,splash,wish,ship,shop,shed,shut,shelf,wash
10080 DATA rich,witch,lunch,catch,ranch,pitch,such,match,much,stretch,watch
10090 DATA that,this,them,than,then,thin,bath,thick,with,cloth,both
10100 DATA pink,thank,bank,think,trunk,string,sang,long,bring,hung,young
10110 DATA play,day,may,say,stay,train,rain,wait,paint,mail,they
10120 DATA bake,safe,chase,came,cake,gave,late,game,name,made,break
10130 DATA see,need,keep,sleep,me,she,clean,read,teach,piece
10140 DATA try,dry,by,cry,fly,pie,tie,lie,cried,tried,eye
10150 DATA side,line,five,time,like,fine,ride,hide,kite,mine,give
10160 DATA find,kind,mind,hind,blind,right,night,light,fight,might,wind
10170 DATA go,no,slow,show,own,low,boat,road,goat,coat,to,do
10180 DATA cold,nose,old,those,hold,close,told,hope,gold,home,one
10190 DATA new,chew,few,blue,threw,true,grew,suit,flew,fruit,build
10200 DATA use,mule,cute,goose,loose,choose,food,soon,zoo,room,you,school
10210 DATA some,friend,done,does,come,shoe,move,guess,live,head
10220 DATA put,pull,push,full,bush,foot,look,good,book,took,could,should,would
10230 DATA why,wheel,when,whip,which,who,white,whose,while,what
10240 DATA all,draw,ball,crawl,call,fault,fall,caught,saw,taught,shall,gone
10250 DATA brown,house,cow,found,down,sound,how,our,now,out,your,four
10260 DATA toy,noise,joy,point,boy,soil,join,boil,oil,spoil
10270 DATA hear,year,ear,rear,dear,cheer,clear,deer,near,steer,here
10280 DATA hair,care,air,scare,pair,bare,chair,square,fair,share,bear,where
10290 DATA fork,or,for,short,horse,floor,store,tore,shore,more,wore,door
10300 DATA barn,yard,car,arm,farm,are,hard,dark,far,march,part
10310 DATA her,jerk,serve,girl,bird,first,third,curl,turn,hurt,word,work,were
10320 DATA better,never,after,under,coller,color,other,mother,water father
10330 DATA funny,happy,story,hurry,party,any,many,very,ready,pretty
10340 DATA write,knew,know,wrote,lamb,talk,walk,laugh,climb,eight
10350 DATA one,two,three,four,five,six,seven,eight,nine,ten
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## IQBUILD.BAS

```bas
10 REM ======================================================================
20 REM ============================= IQ Builder =============================
30 REM This program presents a menu of the programs available in the      ===
40 REM IQ Builder series and allows the user to select a program by       ===
50 REM moving the cursor to the desired program and pressing ENTER.       ===
60 REM ======================================================================
70 REM $s2
80 REM  =====================================================================
90 REM  Turn off KEY display, set display width, clear the screen and set ===
100 REM KEY(10) to reload the menu program when pressed in command mode.  ===
110 REM =====================================================================
120 REM $s2
130 KEY OFF:WIDTH 80:CLS:KEY 10,"run "+CHR$(34)+"b:???0??"+CHR$(13)
140 REM $s2
150 REM =====================================================================
160 REM Display the menu of the programs available in IQ Builder.         ===
170 REM =====================================================================
180 REM $s2
190 LOCATE 1,34,0:COLOR 0,7:PRINT " IQ Builder ";
200 LOCATE 3,10:COLOR 7,0:PRINT "The following programs are available on this diskette:";
210 LOCATE 5,30:PRINT "Number Series"
220 LOCATE 6,30:PRINT "Analogies"
230 LOCATE 7,30:PRINT "Synonyms"
240 LOCATE 8,30:PRINT "Antonyms"
270 LOCATE 16,1:PRINT"Use the ";:COLOR 15:PRINT"UP ("CHR$(24)")";:COLOR 7:PRINT" and ";:COLOR 15:PRINT"DOWN ("CHR$(25)")";:COLOR 7:PRINT" arrows to position the cursor to the function"
280 LOCATE 17,1:PRINT"desired and then press the ";:COLOR 15:PRINT"ENTER ("CHR$(17)CHR$(196)CHR$(217)")";:COLOR 7:PRINT" key."
290 REM $s2
300 REM =====================================================================
310 REM Set up the initial coordinates for the selection arrow.           ===
320 REM =====================================================================
330 REM $s2
340 X=25:Y=5
350 REM $pa
360 REM =====================================================================
370 REM Set up UP and DOWN arrows for moving selection arrow.             ===
380 REM =====================================================================
390 REM $s2
400 KEY(11) ON:KEY(14) ON:ON KEY(11) GOSUB 730:ON KEY(14) GOSUB 800
410 REM $s2
420 REM =====================================================================
430 REM Set up KEY(10) to return to MENU program on A-disk.               ===
440 REM =====================================================================
450 REM $s2
460 KEY(10) ON:ON KEY(10) GOSUB 1000
470 REM $s2
480 REM =====================================================================
490 REM Display highlighted selection arrow at Y,X.                       ===
500 REM =====================================================================
510 REM $s2
520 COLOR 31:LOCATE Y,X:PRINT "==>";
530 REM $s2
540 POKE 106,0'clear kybd buffer
550 REM $s2
560 REM =====================================================================
570 REM If ENTER is pressed, go to program run routine.                   ===
580 REM =====================================================================
590 REM $s2
600 IF INKEY$ = CHR$(13) THEN BEEP:COLOR 7:CLS:GOTO 870
610 REM $s2
620 REM =====================================================================
630 REM Display the date and time at the bottom of the display.           ===
640 REM =====================================================================
650 REM $s2
660 COLOR 7:LOCATE 25,25:PRINT DATE$,TIME$;
670 GOTO 520
680 REM $pa
690 REM =====================================================================
700 REM Move the selection arrow up if it isn't at the top of the menu.   ===
710 REM =====================================================================
720 REM $s2
730 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y>5 THEN Y=Y-1
740 RETURN 520
750 REM $s2
760 REM =====================================================================
770 REM Move the selection arrow down if it isn't at the top of the menu. ===
780 REM =====================================================================
790 REM $s2
800 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y<8 THEN Y=Y+1
810 RETURN 520
820 REM $s2
830 REM =====================================================================
840 REM Run the selected program. If selection is invalid, return to menu.===
850 REM =====================================================================
860 REM $s2
870 IF Y=5 THEN RUN "numbers"
880 IF Y=6 THEN RUN "analog"
890 IF Y=7 THEN RUN "synonym"
900 IF Y=8 THEN RUN "antonym"
930 BEEP:LOCATE 2,1:PRINT "Please make another selection."
940 FOR I=1 TO 1000:NEXT I:RUN
950 REM $s2
960 REM =====================================================================
970 REM Return to MENU program on the A-disk.                             ===
980 REM =====================================================================
990 REM $s2
1000 COLOR 7,0:RUN "menu"
```

## MASTER.BAS

```bas
10 KEY OFF:WIDTH 80:CLS:DEFINT A-Z:GOSUB 59980:KEY(10) ON:ON KEY(10) GOSUB 2700
20 GOSUB 500:DIM GT(15,6),PO(6,4)
30 LOCATE 12,1:INPUT "What is your first name";NA$
40 LOCATE 13,1:PRINT"How many games do you wish to play, "NA$;:INPUT NG
50 IF NG<1 THEN LOCATE 13,1:PRINT SPACE$(80):GOTO 40
60 LOCATE 12,1:PRINT SPACE$(80):LOCATE 13,1:PRINT SPACE$(80)
70 LOCATE 12,1:PRINT"I will now toss a coin to determine the order of play."
75 COLOR 15:PRINT"     HEADS";:COLOR 7:PRINT" - you're the codemaker"
78 COLOR 15:PRINT"     TAILS";:COLOR 7:PRINT" - you're the codebreaker"
80 TIMEOUT=5:GOSUB 59950
90 CT=INT(RND*2)+1:IF CT<>1 AND CT<>2 THEN 90
100 IF CT=1 THEN M1$="heads":M2$="codemaker" ELSE M1$="tails":M2$="codebreaker"
120 PRINT"The coin came out " M1$ " so you will be the " M2$ "."
130 TIMEOUT=5:GOSUB 59950
140 GC=0:PC=0:PP=0
150 IF CT=1 THEN GOSUB 1000 ELSE GOSUB 2000
160 TIMEOUT=5:GOSUB 59950:IF CT=1 THEN GOSUB 2000 ELSE GOSUB 1000
170 IF GC=0 THEN GA$="game" ELSE GA$="games"
180 TIMEOUT=5:GOSUB 59950:CLS:GOSUB 500:LOCATE 12,10:PRINT"After" GC+1 GA$ " the score is:"
190 LOCATE 14,38-LEN(NA$):PRINTNA$ ": " PP
200 LOCATE 15,30:PRINT"computer: " PC
210 TIMEOUT=5:GOSUB 59950
220 GC=GC+1
230 IF GC<NG THEN 150
240 M1$="It's a tie"
250 IF PC>PP THEN M1$="  I won"
260 IF PC<PP THEN M1$=" You won"
270 LOCATE 17,30:PRINTM1$
280 LOCATE 19,1:PRINT"Would you like to play another game (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
290 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 290
300 IF IKEY$="y" OR IKEY$="Y" THEN CLS:GOSUB 500:GOTO 40
310 CLS:LOCATE 12,10:PRINT"Thank you for playing, " NA$
320 TIMEOUT=5:GOSUB 59950:RUN "menu"
500 LOCATE 1,28:COLOR 0,7:PRINT " ***** MASTERMIND ***** ":COLOR 7,0:RETURN
1000 CLS:GOSUB 500:YY=5:XX=12
1010 FOR Y=2 TO 18:LOCATE Y,9:PRINT"█";:LOCATE Y,39:PRINT"▐▌";:LOCATE Y,73:PRINT"█";:NEXT Y
1015 LOCATE 2,9:PRINT STRING$(64,"█");:LOCATE 18,9:PRINT STRING$(64,"█");
1020 LOCATE 20,10:PRINT"It's your turn to make a code.":TIMEOUT=3:GOSUB 59950
1030 LOCATE 20,1:PRINT SPACE$(80):LOCATE 20,10:PRINT"Enter a 4-digit code (using digits 1-6) for me to guess - ";
1040 INPUT CO$:LOCATE 20,1:PRINTSPACE$(80)
1050 NU$=CO$:GOSUB 3000
1060 IF ER<>0 THEN 1030
1070 LOCATE 3,9:PRINT STRING$(64,"█");:LOCATE 4,9:PRINT STRING$(64,"█");
1080 LOCATE 3,30:PRINT" CODE =" T(1) T(2) T(3) T(4) " ";
1090 FOR R=1 TO 6:FOR C=1 TO 4:PO(R,C)=R:NEXT C,R
1100 C1=1:C2=1:C3=1:C4=0:GU=0
1110 GU=GU+1
1120 IF GU=1 THEN FOR I=1 TO 4:C(I)=INT(RND*6)+1:NEXT I
1130 IF GU=2 THEN C(1)=C1:C(2)=C2:C(3)=C3:C(4)=C4
1140 IF GU>2 THEN FOR I=1 TO 4:C(I)=GT(GU-1,I):NEXT I
1150 IF GU>1 THEN GOSUB 3500
1160 TR$=""
1170 FOR I=1 TO 4:TR$=TR$+RIGHT$(STR$(C(I)),1):NEXT I
1180 BEEP:LOCATE 20,25:PRINT"Please evaluate try #" GU "- " TR$
1190 LOCATE 21,33:PRINT"Black pegs = ";
1200 GOSUB 59990:IF INSTR("01234",IKEY$)=0 THEN 1200 ELSE PRINTIKEY$:BB=VAL(IKEY$)
1210 LOCATE 22,33:PRINT"White pegs = ";
1220 GOSUB 59990:IF INSTR("01234",IKEY$)=0 THEN 1220 ELSE PRINTIKEY$:WW=VAL(IKEY$)
1230 FOR I=1 TO 4:GT(GU,I)=C(I):NEXT I:GT(GU,5)=BB:GT(GU,6)=WW
1240 NU$=CO$:GOSUB 3000
1250 FOR I=1 TO 4:C(I)=T(I):NEXT I
1260 NU$=TR$:GOSUB 3000
1270 GOSUB 4000 'evaluate guess
1280 FOR I=1 TO 4:T(I)=C(I):NEXT I
1290 IF BB=B AND WW=W THEN 1320
1300 LOCATE 23,18:PRINT"Your evaluation should have been B =" B " W =" W
1310 GT(GU,5)=B:GT(GU,6)=W:TIMEOUT=2:GOSUB 59950
1320 LOCATE YY,XX:PRINT USING" ## = \  \ - B = # W = #";GU,TR$,GT(GU,5),GT(GU,6);
1330 IF XX=43 THEN YY=YY+1:XX=12 ELSE XX=43
1340 FOR I=20 TO 23:LOCATE I,1:PRINT SPACE$(80);:NEXT I
1350 IF B=4 THEN PLAY "mbc16c16c16ge8g":PP=PP+GU:LOCATE 20,34:PRINT"I got it !!!":RETURN
1360 IF B+W=4 THEN GOSUB 5000
1370 IF B+W=0 THEN GOSUB 6000
1380 IF B=0 AND W<>0 THEN GOSUB 7000
1390 LOCATE 20,30:PRINT"Quiet!  I'm thinking."
1400 GOTO 1110
2000 CLS:GOSUB 500:YY=5:XX=12:ON KEY(10) GOSUB 2800
2010 FOR Y=2 TO 18:LOCATE Y,9:PRINT"█";:LOCATE Y,39:PRINT"▐▌";:LOCATE Y,73:PRINT"█";:NEXT Y
2015 LOCATE 2,9:PRINT STRING$(64,"█");:LOCATE 18,9:PRINT STRING$(64,"█");
2020 LOCATE 20,10:PRINT"Now it's my turn to make a code.":TIMEOUT=5:GOSUB 59950
2030 LOCATE 20,1:PRINT SPACE$(80):LOCATE 20,10:PRINT"O.K.  I've got it now.  Take your first guess."
2040 NO=0:FOR I=1 TO 4:C(I)=INT(RND*6)+1:NEXT I:TIMEOUT=3:GOSUB 59950
2050 LOCATE 20,1:PRINT SPACE$(80):LOCATE 20,10:PRINT"Enter your guess (4 digits) - ";
2060 INPUT TR$:IF LEN(TR$)<>4 THEN 2050
2070 NU$=TR$:GOSUB 3000
2080 IF ER<>0 THEN 2050
2090 GOSUB 4000 'evaluate guess
2100 NO=NO+1:LOCATE YY,XX:PRINT USING" ## = \  \ - B = # W = #";NO,TR$,B,W;
2110 IF XX=43 THEN YY=YY+1:XX=12 ELSE XX=43
2120 FOR I=20 TO 23:LOCATE I,1:PRINT SPACE$(80);:NEXT I
2130 IF B=4 THEN PLAY "mbc16c16c16ge8g":PC=PC+NO:LOCATE 20,33:PRINT"You got it !!!":ON KEY(10) GOSUB 2700:RETURN ELSE 2050
2700 RUN "menu"
2800 LOCATE 25,10:PRINT"The code was "C(1) C(2) C(3) C(4);:TIMEOUT=5:GOSUB 59950
2810 GOTO 2700
3000 ER=0
3010 FOR I=1 TO 4:T(I)=VAL(MID$(NU$,I,1)):IF T(I)<1 OR T(I)>6 THEN ER=1
3020 NEXT I:RETURN
3500 GOSUB 3700 'get next entry from possibility table
3510 FOR L=1 TO GU-1:FOR J=1 TO 4:T(J)=GT(L,J):NEXT J
3520 GOSUB 4000 'evaluate old guess using new guess as code
3530 IF GT(L,5)=B AND GT(L,6)=W THEN NEXT L:RETURN ELSE 3500
3700 C4=C4+1:IF C4>=7 THEN C4=0:GOTO 3720
3710 IF PO(C4,4)=0 THEN 3700 ELSE C(4)=PO(C4,4):RETURN
3720 C3=C3+1:IF C3>=7 THEN C3=1:GOTO 3740
3730 IF PO(C3,3)<>0 THEN C(3)=PO(C3,3):GOTO 3700 ELSE 3720
3740 C2=C2+1:IF C2>=7 THEN C2=1:GOTO 3760
3750 IF PO(C2,2)<>0 THEN C(2)=PO(C2,2):GOTO 3730 ELSE 3740
3760 C1=C1+1:IF C1>=7 THEN PRINT"Error in probability table.":END
3770 IF PO(C1,1)<>0 THEN C(1)=PO(C1,1):GOTO 3750 ELSE 3760
4000 B=0:W=0:FOR I=1 TO 4:W(I)=C(I):NEXT I:FOR I=1 TO 4
4010 IF W(I)=T(I) THEN W(I)=-1:T(I)=-2:B=B+1
4020 NEXT I:FOR I=1 TO 4:FOR J=1 TO 4
4030 IF T(I)=W(J) THEN W(J)=-1:W=W+1:GOTO 4050
4040 NEXT J
4050 NEXT I:RETURN
5000 FOR I=1 TO 4:EL(I)=I:NEXT I:FOR I=1 TO 4:EL(GT(GU,I))=0:NEXT I
5010 FOR I=1 TO 6:IF EL(I)<>0 THEN PO(I,1)=0:PO(I,2)=0:PO(I,3)=0:PO(I,4)=0
5020 NEXT I:RETURN
6000 FOR I=1 TO 4:FOR J=1 TO 4:PO(GT(GU,I),J)=0:NEXT J,I:RETURN
7000 FOR I=1 TO 4:PO(GT(GU,I),I)=0:NEXT I:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## MATH.BAS

```bas
5 REM This program is MATH
10 CLS:KEY OFF:CLEAR 100:GOSUB 100:GOSUB 1000
20 GOSUB 2000:RUN "menu"
50 RUN "menu"
100 GOSUB 59980
110 DEFSTR N:DIM NUMBER(15)
115 DB$=CHR$(31)+CHR$(29):D$=CHR$(31):B2$=STRING$(2,29):B3$=B2$+CHR$(29)
120 NUMBER(1)=" ▄█"+DB$+"█"+DB$+"█"+D$+B2$+"▀▀▀"
130 NUMBER(2)="▄▀▀▀▄"+D$+B2$+"▄▀"+D$+B2$+B2$+"▄▀"+D$+B3$+"▀▀▀▀▀"
140 NUMBER(3)="▀▀▀▀█"+DB$+B2$+"▄▄█"+DB$+"█"+DB$+B2$+B2$+"▀▀▀▀▀"
150 NUMBER(4)="  ▄█"+DB$+B3$+"▄█▄█▄"+D$+B2$+"█"+DB$+"▀"
160 NUMBER(5)="█▀▀▀▀"+DB$+B2$+B2$+"█▄▄▄"+D$+"█"+DB$+B2$+B2$+"▀▀▀▀"
170 NUMBER(6)=" ▄▀"+DB$+B2$+"█▄▄▄"+D$+B2$+B2$+"█"+D$+"▀▀▀"+CHR$(30)+"█"+D$
180 NUMBER(7)="▀▀▀▀█"+D$+B2$+"▄▀"+DB$+B2$+"▄▀"+D$+B2$+"▀"
190 NUMBER(8)="▄▀▀▀▄"+DB$+B2$+B2$+"▀▄▄▄▀"+DB$+B2$+B2$+"█"+D$+"▀▀▀"+CHR$(30)+"█"+D$
200 NUMBER(9)="▄▀▀▀▄"+DB$+B2$+B2$+"▀▄▄▄█"+D$+B2$+"▄▀"+DB$+B2$+"▀"
210 NUMBER(10)="▄▀▀▀▄"+DB$+B2$+B2$+"█   █"+DB$+B2$+B2$+"█   █"+D$+B2$+B2$+"▀▀▀"
220 NUMBER(11)=D$+" ▄█▄"+D$+B2$+"▀"
230 NUMBER(12)=D$+" ▄▄▄"
240 NUMBER(13)=D$+"▀▄▀"+DB$+B2$+"▀ ▀"
250 NUMBER(14)="  ▄"+D$+B2$+"▄▄▄"+D$+B2$+"▄"
260 NUMBER(15)=" ▄▄▄"+D$+D$+B3$+"▄▄▄"
270 NUMBER(0)="     "+DB$+B2$+B2$+"     "+DB$+B2$+B2$+"     "+DB$+B2$+B2$+"     "
300 C$(1)="RIGHT":C$(2)="CORRECT":C$(3)="ABSOLUTELY":C$(4)="GOOD GOING":C$(5)="YOU'RE DOING OK!":C$(6)="I KNEW YOU'D GET THAT ONE"
990 RETURN
995 CLS:FOR I=1 TO 20:LOCATE I,67:PRINT"THIS IS A TEST";:NEXT I:END
1000 KEY OFF:COLOR 0,7:LOCATE 1,34:PRINT " Math Program "
1010 COLOR 7,0:LOCATE 3,1:PRINT "This program will drill you on simple math problems.  You may select the"
1020 PRINT "type(s) of problems which will be presented.  The operations available include:"
1030 LOCATE 6,10:COLOR 15:PRINT "1";:COLOR 7:PRINT" - Addition"
1040 LOCATE 7,10:COLOR 15:PRINT "2";:COLOR 7:PRINT" - Subtraction"
1050 LOCATE 8,10:COLOR 15:PRINT "3";:COLOR 7:PRINT" - Multiplication"
1060 LOCATE 9,10:COLOR 15:PRINT "4";:COLOR 7:PRINT" - Division"
1070 LOCATE 10,10:COLOR 15:PRINT "5";:COLOR 7:PRINT" - Addition and Subtraction
1080 LOCATE 11,10:COLOR 15:PRINT "6";:COLOR 7:PRINT" - Multiplication and Division"
1090 LOCATE 12,10:COLOR 15:PRINT "7";:COLOR 7:PRINT" - Addition, Subtraction, Multiplication and Division"
1100 LOCATE 14,1:PRINT "Enter the number for the type(s) of operations desired - ";
1110 GOSUB 59990
1120 IF INSTR("1234567",IKEY$)=0 THEN 1110
1130 L1=VAL(IKEY$):LOCATE 14,1:PRINT STRING$(75,32)
1140 LOCATE 14,1:PRINT"Enter the level of difficulty desired ";:COLOR 15:PRINT"(1-10)";:COLOR 7:PRINT" - ";
1150 INPUT L:IF L<1 OR L>10 THEN 1140
1160 RETURN
2000 GOSUB 3000 'initialize result tally
2010 ON L1 GOSUB 4000,5000,6000,7000,8000,9000,10000 'select value
2020 GOSUB 11000 'display the problem
2030 GOSUB 12000 'accept the answer
2040 GOSUB 13000 'evaluate answer & tally results
2050 IF R=1 THEN 2010
2060 GOSUB 13900 'give final results
2070 TIMEOUT=12:GOSUB 59950:RETURN
3000 FOR I=1 TO 4
3010 S(1,I)=0 'number of consecutive correct responses
3020 IF L1=I OR L1=7 OR (L1=5 AND I<3) OR (L1=6 AND I>2) THEN S(2,I)=L ELSE S(2,I)=0 'level of difficulty
3030 S(3,I)=0 'total correct answers
3040 NEXT I
3050 S=0 'total exercises tried
3060 RETURN
4000 REM select addition values
4010 V1=INT(RND*10*S(2,1)):V2=INT(RND*(10*S(2,1)-V1)):T=1:RETURN
5000 REM select subtraction values
5010 V1=INT(RND*10*S(2,2)):V2=INT(RND*V1):T=2:RETURN
6000 REM select multiplication values
6010 V1=INT(RND*5*S(2,3)):IF V1=0 THEN 6010 ELSE V2=INT((RND*10*S(2,3))/V1):T=3:RETURN
7000 REM select division values
7010 V1=INT(RND*10*S(2,4)):V2=INT(RND*V1):IF V1=0 OR V2=0 THEN 7010 ELSE IF INT(V1/V2)<>V1/V2 THEN 7010
7020 T=4:RETURN
8000 REM select addition or subtraction values
8010 IF RND<0.5 THEN 4000 ELSE 5000
9000 REM select multiplication or division values
9010 IF RND<0.5 THEN 6000 ELSE 7000
10000 REM select addition, subtraction, multiplication or division values
10010 ON INT(RND*10)+1 GOTO 4000,5000,6000,7000,4000,5000,6000,7000,4000,5000:STOP
11000 REM display the problem
11010 CLS
11020 V1$=STR$(V1):V2$=STR$(V2)
11025 IF V1=0 THEN LOCATE 11,16:PRINT NUMBER(10);:GOTO 11050
11030 IF LEN(V1$)>2 THEN LOCATE 11,10:PRINT NUMBER(VAL(MID$(V1$,2,1)));
11035 IF VAL(RIGHT$(V1$,1))=0 THEN LOCATE 11,16:PRINT NUMBER(10);:GOTO 11050
11040 LOCATE 11,16:PRINT NUMBER(VAL(RIGHT$(V1$,1)));
11050 LOCATE 11,27:PRINT NUMBER(T+10);
11060 IF V2=0 THEN LOCATE 11,41:PRINT NUMBER(10);:GOTO 11100
11070 IF LEN(V2$)>2 THEN LOCATE 11,35:PRINT NUMBER(VAL(MID$(V2$,2,1)));
11080 IF VAL(RIGHT$(V2$,1))=0 THEN LOCATE 11,41:PRINT NUMBER(10);:GOTO 11100
11090 LOCATE 11,41:PRINT NUMBER(VAL(RIGHT$(V2$,1)));
11100 LOCATE 11,53:PRINT NUMBER(15);
11110 RETURN
12000 REM accept the answer
12010 LOCATE 18,31,,0,13:COLOR 15:PRINT"The answer is - ";:INPUT A$:COLOR 7
12020 A=VAL(A$):LOCATE ,,,13
12030 IF A=0 THEN LOCATE 11,71:NUMBER=NUMBER(10):GOSUB 12500:GOTO 12070
12040 IF LEN(A$)>1 THEN LOCATE 11,65:NUMBER=NUMBER(VAL(LEFT$(A$,1))):GOSUB 12500
12050 IF VAL(RIGHT$(A$,1))=0 THEN LOCATE 11,71:NUMBER=NUMBER(10):GOSUB 12500:GOTO 12070
12060 LOCATE 11,71:NUMBER=NUMBER(VAL(RIGHT$(A$,1))):GOSUB 12500
12070 RETURN
12500 FOR I=1 TO LEN(NUMBER):PRINT MID$(NUMBER,I,1);:NEXT I:RETURN
13000 REM evaluate the answer & tally the results
13010 C%=0:ON T GOSUB 13100,13200,13300,13400
13020 IF C%=1 THEN GOSUB 13500 ELSE GOSUB 13700
13030 LOCATE 25,27:PRINT"Another exercise (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?" ;
13040 GOSUB 59990:IF INSTR("ynsYNS",IKEY$)=0 THEN 13040
13050 IF IKEY$="y" OR IKEY$="Y" THEN R=1
13060 IF IKEY$="n" OR IKEY$="N" THEN R=0
13070 IF IKEY$="s" OR IKEY$="S" THEN GOSUB 13900:GOTO 13030
13080 RETURN
13100 V3=V1+V2:IF A=V3 THEN C%=1
13110 RETURN
13200 V3=V1-V2:IF A=V3 THEN C%=1
13210 RETURN
13300 V3=V1*V2:IF A=V3 THEN C%=1
13310 RETURN
13400 V3=V1/V2:IF A=V3 THEN C%=1
13410 RETURN
13500 PLAY "mbc16c16c16ge8g"
13510 S(1,T)=S(1,T)+1:S(3,T)=S(3,T)+1
13520 IF S(1,T)>15 THEN S(1,T)=0:S(2,T)=S(2,T)+1
13530 IF S(2,T)>10 THEN S(2,T)=10
13540 FOR I=15 TO 25:LOCATE I,1:PRINTSPACE$(79);:NEXT I
13550 S=S+1:IX=INT(RND*6)+1
13560 LOCATE 20,40-LEN(C$(IX))/2:COLOR 15:PRINT C$(IX):COLOR 7
13570 RETURN
13700 PLAY "n50n25":S(1,T)=0:S=S+1
13705 NUMBER=NUMBER(0):LOCATE 11,65:GOSUB 12500:LOCATE 11,71:GOSUB 12500
13710 IF V3=0 THEN LOCATE 11,65:NUMBER=NUMBER(0):GOSUB 12500:LOCATE 11,71:NUMBER=NUMBER(10):GOSUB 12500:GOTO 13800
13720 IF V3>9 THEN LOCATE 11,65:NUMBER=NUMBER(VAL(MID$(STR$(V3),2,1))):GOSUB 12500
13730 IF INT(V3/10)=V3/10 THEN LOCATE 11,71:NUMBER=NUMBER(10):GOSUB 12500:GOTO 13800
13740 LOCATE 11,71:NUMBER=NUMBER(VAL(RIGHT$(STR$(V3),1))):GOSUB 12500
13800 LOCATE 18,28:COLOR 15:PRINT"NOTE THE CORRECT ANSWER":COLOR 7
13810 RETURN
13900 CLS:LOCATE 12,30:PRINT"CONSECUTIVE      DIFFICULTY     TOTAL"
13910 LOCATE 13,32:PRINT"CORRECT          LEVEL       CORRECT"
13920 LOCATE 14,20:PRINT STRING$(50,"█")
13930 LOCATE 15,1:PRINT"ADDITION" TAB(20) USING"█             ##               ##          ##    █";S(1,1),S(2,1),S(3,1)
13940 LOCATE 16,1:PRINT"SUBTRACTION" TAB(20) USING"█             ##               ##          ##    █";S(1,2),S(2,2),S(3,2)
13950 LOCATE 17,1:PRINT"MULTIPLICATION" TAB(20) USING"█             ##               ##          ##    █";S(1,3),S(2,3),S(3,3)
13960 LOCATE 18,1:PRINT"DIVISION" TAB(20) USING"█             ##               ##          ##    █";S(1,4),S(2,4),S(3,4)
13965 LOCATE 19,20:PRINTSTRING$(50,"█")
13970 LOCATE 22,30:PRINT USING"Percent Correct = ###";INT(((S(3,1)+S(3,2)+S(3,3)+S(3,4))/S)*100)
13980 RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## MENU.BAS

```bas
10 REM ============================= ADX008 =================================
20 REM This program presents a menu of the programs available on this     ===
30 REM diskette and allows the user to select a program by moving the     ===
40 REM cursor to the desired program and pressing ENTER.                  ===
50 REM ======================================================================
60 REM  Turn off KEY display, set display width, clear the screen and set ===
70 REM KEY(10) to reload this menu program when pressed in command mode. ===
80 REM =====================================================================
90 KEY OFF:WIDTH 80:CLS
100 REM $s2
110 REM =====================================================================
120 REM Display the menu of the programs available on this diskette.      ===
130 REM =====================================================================
140 LOCATE 1,37,0:COLOR 0,7:PRINT " ADX008 ";
150 LOCATE 3,10:COLOR 7,0:PRINT "The following programs are available on this diskette:";
160 LOCATE 5,30:PRINT "Reading Program"
170 LOCATE 6,30:PRINT "Mastermind"
180 LOCATE 7,30:PRINT "Math program"
190 LOCATE 8,30:PRINT "Frankenstein"
200 LOCATE 9,30:PRINT "Game of Nim"
210 LOCATE 10,30:PRINT "Backgammon"
220 LOCATE 11,30:PRINT"Blackjack"
230 LOCATE 12,30:PRINT"Trucker"
240 LOCATE 13,30:PRINT "IQ Builder"
245 LOCATE 14,30:PRINT "Exit to BASIC"
250 LOCATE 18,1:PRINT"Use the ";:COLOR 15:PRINT"UP ("CHR$(24)")";:COLOR 7:PRINT" and ";:COLOR 15:PRINT"DOWN ("CHR$(25)")";:COLOR 7:PRINT" arrows to position the cursor to the function"
260 LOCATE 19,1:PRINT"desired and then press the ";:COLOR 15:PRINT"ENTER ("CHR$(17)CHR$(196)CHR$(217)")";:COLOR 7:PRINT" key."
270 REM =====================================================================
280 REM Set up the initial coordinates for the selection arrow.           ===
290 REM =====================================================================
300 X=25:Y=5
310 REM =====================================================================
320 REM Set up UP and DOWN arrows for moving selection arrow.             ===
330 REM =====================================================================
340 KEY(11) ON:KEY(14) ON:ON KEY(11) GOSUB 610:ON KEY(14) GOSUB 680
390 REM =====================================================================
400 REM Display highlighted selection arrow at Y,X.                       ===
410 REM =====================================================================
420 COLOR 15:LOCATE Y,X:PRINT "==>";
430 POKE 106,0'clear kybd buffer
440 REM =====================================================================
450 REM If ENTER is pressed, go to program run routine.                   ===
460 REM =====================================================================
470 REM $s2
480 IF INKEY$ = CHR$(13) THEN BEEP:COLOR 7:CLS:GOTO 750
490 REM $s2
500 REM =====================================================================
510 REM Display the date and time at the bottom of the display.           ===
520 REM =====================================================================
530 REM $s2
540 COLOR 7:LOCATE 25,25:PRINT DATE$,TIME$;
550 GOTO 420
560 REM $pa
570 REM =====================================================================
580 REM Move the selection arrow up if it isn't at the top of the menu.   ===
590 REM =====================================================================
600 REM $s2
610 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y>5 THEN Y=Y-1
620 RETURN 420
630 REM $s2
640 REM =====================================================================
650 REM Move the selection arrow down if it isn't at the top of the menu. ===
660 REM =====================================================================
670 REM $s2
680 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y<14 THEN Y=Y+1
690 RETURN 420
700 REM $s2
710 REM =====================================================================
720 REM Run the selected program. If selection is invalid, return to menu.===
730 REM =====================================================================
740 REM $s2
750 IF Y=5 THEN RUN "reading"
760 IF Y=6 THEN RUN "master"
770 IF Y=7 THEN RUN "math"
780 IF Y=8 THEN RUN "frank"
790 IF Y=9 THEN RUN "nim"
800 IF Y=10 THEN RUN "backgam"
810 IF Y=11 THEN RUN "black"
820 IF Y=12 THEN RUN "trucker"
830 IF Y=13 THEN RUN "iqbuild"
835 IF Y=14 THEN STOP
840 BEEP:LOCATE 2,1:PRINT "Please make another selection."
850 FOR I=1 TO 1000:NEXT I:RUN
```

## NIM.BAS

```bas
10 REM Game of NIM. Author: J. E. Steitz 2-14-82
20 OPTION BASE 1
30 DEFINT P,I-N
40 DIM PILE(13)
50 CLS:LOCATE 5,1
60 PRINT"*******************************************************************************"
70 PRINT"*******************************************************************************"
80 PRINT"**                                                                           **"
90 PRINT"**                                                                           **"
100 PRINT"**                                                                           **"
110 PRINT"**                                                                           **"
120 PRINT"**            If you ";:COLOR 0,7:PRINT"DO";:COLOR 7,0
130 PRINT" want instructions, just hit RETURN (";CHR$(17);CHR$(196);CHR$(217);") key.        **"
140 PRINT"*******************************************************************************"
150 PRINT"*******************************************************************************"
160 LOCATE 8,27
170 PRINT"Welcome to the game of NIM."
180 LOCATE 10,15
190 INPUT"If you do NOT want instructions, type N or NO: ",A$
200 IF A$ = "N" OR A$ = "n" OR A$="NO" OR A$="no" THEN 350
210 CLS:PRINT"                 The Game of NIM -- By J. E. Steitz 2-16-82"
220 PRINT:PRINT"The game of NIM is an ancient game of skill and strategy.  The game is played"
230 PRINT"with any number of piles of objects.  The two players take turns removing any"
240 PRINT"number of objects from one of the piles.  You can take one object or the whole"
250 PRINT"pile, but you can't take objects from two piles."
260 PRINT:PRINT"As agreed upon before the start of the game, the winner is the one who"
270 PRINT"takes (or doesn't take) the last object from the last pile.":PRINT
280 PRINT"In this version of the game, you can elect to have up to 12 piles of objects,"
290 PRINT"with up to 15 objects in each pile.":PRINT
300 PRINT"From here on out, just respond to the questions as they come up.":PRINT
310 PRINT"Oh, by the way, if you want to concede a game, just enter 0,0 when it's your"
320 PRINT"move.  Your IBM Personal Computer gladly accepts forfeits."
330 PRINT:PRINT:PRINT"                           GOOD LUCK!":BEEP:BEEP:PRINT
340 INPUT"When you have finished reading this, just press the return key. ",A$
350 CLS:PRINT:INPUT"How many piles (1-12)";NPILES
360 IF NPILES => 1 AND NPILES =< 12 THEN 380
370 BEEP:PRINT"Come, now - enter a number between 1 and 12":GOTO 350
380 PRINT:PRINT"you may have from 1 to 15 items in each pile."
390 FOR PCT = 1 TO NPILES
400 PRINT USING"How many in pile ##";PCT;
410 INPUT PILE(PCT)
420 IF PILE(PCT) >= 1 AND PILE(PCT)<= 15 THEN 440
430 BEEP:PRINT"You must enter a number between 1 and 15":GOTO 400
440 NEXT PCT
450 PRINT:INPUT"Does taking the last item Win (W) or Lose (L) the game";A$
460 IF A$ = "L" OR A$ = "l" OR A$ = "w" OR A$ = "W" THEN 480
470 BEEP:PRINT"PLEASE answer with W or L.  Now try again":GOTO 450
480 WOPT$="take"
490 IF A$ = "L" OR A$ = "l" THEN WOPT$ = "notake"
500 PRINT:INPUT"Do you want to move first (Y,N)";A$
510 IF A$ = "y" OR A$ = "Y" OR A$ = "n" OR A$ = "N" THEN 530
520 BEEP:PRINT"You MUST answer Y for yes, or N for no.  Try again.":GOTO 500
530 FIRST$="IBMPC"
540 IF A$ = "Y" OR A$ = "y" THEN FIRST$ = "player"
550 WIN$ = "no"
560 GOSUB 1240
570 IF FIRST$ = "IBMPC" THEN 610
580 GOSUB 1100
590 IF WIN$="no" THEN GOSUB 710
600 GOTO 630
610 GOSUB 710
620 IF WIN$="no" THEN GOSUB 1100
630 IF WIN$="no" THEN 570
640 IF WIN$="player" THEN GOSUB 2090
650 IF WIN$="IBMPC" THEN PRINT:GOSUB 1520:PRINT"Ho, hum --- I win again...":PRINT
660 INPUT"Want to play another";A$
670 IF A$ = "y" OR A$ = "Y" OR A$ = "n" OR A$="N" THEN 690
680 GOSUB 1420:PRINT"Please, just a simple Y or N.  Try again.":GOTO 660
690 IF A$ = "Y" OR A$ = "y" THEN 350
700 END
710 REM IBMPC MOVE
720 PCTW=0
730 FOR PCT=1 TO NPILES
740 IF PILE(PCT)>0 THEN 790
750 NEXT PCT
760 WIN$="IBMPC"
770 IF WOPT$ = "take" THEN WIN$="player"
780 GOTO 1040
790 GOSUB 1690
800 PILEW=PILE(PFIRST)
810 PCTW=PFIRST
820 IF PNZ<>1 THEN 910
830 IF PILE(PFIRST)<> 1 THEN 880
840 PILE(PFIRST)=0
850 WIN$="player"
860 IF WOPT$="take" THEN WIN$="IBMPC"
870 GOTO 1040
880 IF WOPT$="take" THEN PILE(PFIRST)=0:WIN$="IBMPC":GOTO 1040
890 PILE(PFIRST)=1
900 GOTO 1040
910 IF PALLONE THEN PILE(PFIRST)=0:GOTO 1040
920 GOSUB 1830
930 IF PCTW<>0 THEN 1010
940 PCTW=RND*NPILES
950 IF PCTW=0 THEN 940
960 IF PILE(PCTW)=0 THEN 940
970 PILEW=PILE(PCTW)
980 TPILE!=RND*PILEW
990 PILE(PCTW)=FIX(TPILE!)
1000 GOTO 1040
1010 GOSUB 1560
1020 GOSUB 1690
1030 IF PALLONE THEN IF WOPT$<>"take" THEN PILE(PCTW)=0
1040 FOR I=1 TO 1000:NEXT I
1050 GOSUB 1240
1060 IF PCTW=0 THEN RETURN
1070 PRINT USING"I took ## from pile ";PILEW-PILE(PCTW);
1080 PRINT PCTW
1090 RETURN
1100 REM Player's move
1110 PRINT"Enter pile number and the number you want to remove, separated by a comma."
1120 PRINT"Enter 0,0 if you want to concede the game."
1130 INPUT"For example: 2,7 ==> ",PPN,PREM
1140 IF PPN+PREM=0 THEN 1220
1150 IF PPN>0 AND PPN<=NPILES THEN 1170
1160 BEEP:PRINT"That pile number doesn't exist. Try one we are playing with.":GOTO 1110
1170 IF PREM>0 AND PREM<=PILE(PPN) THEN 1190
1180 GOSUB 1420:BEEP:PRINT"You can't take zero items and you can't take more than the pile contains.":GOTO 1110
1190 PILE(PPN)=PILE(PPN)-PREM
1200 GOSUB 1240
1210 RETURN
1220 WIN$="IBMPC"
1230 GOSUB 1420:RETURN
1240 REM DISPLAY PILES ROUTINE
1250 CLS
1260 FOR PHT = 15 TO 1 STEP -1
1270 FOR PCT = 1 TO NPILES
1280 IF PILE(PCT)< PHT THEN PRINT "      ";
1290 IF PILE(PCT) >= PHT THEN PRINT "O-O   ";
1300 NEXT PCT
1310 PRINT
1320 NEXT PHT
1330 FOR PCT = 1 TO NPILES
1340 PRINT USING "##    ";PCT;
1350 NEXT PCT
1360 PRINT:PRINT
1370 FOR PCT = 1 TO NPILES
1380 PRINT USING "(##)  ";PILE(PCT);
1390 NEXT PCT
1400 PRINT
1410 RETURN
1420 REM RAZZBERRY ROUTINE
1430 SOUND 400,7
1440 FOR I = 1 TO 15
1450 SOUND 90,20
1460 FOR J=1 TO 15: NEXT J
1470 SOUND 40,0
1480 FOR J=1 TO 15: NEXT J
1490 NEXT I
1500 SOUND 40,0
1510 RETURN
1520 REM                          FANFARE ROUTINE
1530 PLAY"t140mbo2c8f8a8o3c8c16c16c8o2a8a16a16a8f8a8f8c"
1540 PLAY"mbo2c8f8a8o3c4o2a8o3c.."
1550 RETURN
1560 REM                    MAKE ALL BIT COLUMNS EVEN ROUTINE
1570 REM REQUIRES PCTW - THE 'WORKING' PILE NUMBER AND NPILES - PILE COUNT
1580 PILE(PCTW)=0
1590 MASK=8
1600 FOR I=1 TO 4
1610 PBC=0
1620 FOR PCT=1 TO NPILES
1630 IF PILE(PCT) AND MASK THEN PBC=PBC+1
1640 NEXT PCT
1650 IF PBC AND 1 THEN PILE(PCTW)=PILE(PCTW) OR MASK
1660 MASK=MASK/2
1670 NEXT I
1680 RETURN
1690 REM                          CHECK PILE STATUS ROUTINE
1700 REM If all piles contain one, sets pallone = 1
1710 REM If all piles are empty, pnz is set to zero, else it counts non-empties
1720 REM PFIRST is set to the pile number of the first non-empty pile.
1730 PNSAVE=0
1740 PNZ=0
1750 PALLONE=1
1760 FOR PCT=1 TO NPILES
1770 IF PILE(PCT)>1 THEN PALLONE=0
1780 IF PILE(PCT)<>0 AND PNSAVE=0 THEN PNSAVE=PCT
1790 IF PILE(PCT)<>0 THEN PNZ=PNZ+1
1800 NEXT PCT
1810 PFIRST=PNSAVE
1820 RETURN
1830 REM                             ANALYZE BIT COLUMNS ROUTINE
1840 REM IF any bit column is odd, sets PCTW to the pile number of the biggest
1850 REM pile having a bit in the odd column and sets PILEW to
1860 REM the number of items in that pile.
1870 REM IF ALL BIT COLUMNS ARE EVEN, SETS BOTH THE ABOVE VALUES TO ZERO.
1880 MASK = 8
1890 FOR I= 1 TO 4
1900 PBC=0
1910 PNSAVE=0
1920 PILESAVE=0
1930 FOR PCT=1 TO NPILES
1940 M= PILE(PCT) AND MASK
1950 IF M=0 THEN 1980
1960 PBC=PBC+1
1970 IF PILE(PCT) > PILESAVE THEN PILESAVE=PILE(PCT):PNSAVE=PCT
1980 NEXT PCT
1990 M=PBC AND 1
2000 IF M THEN 2060
2010 MASK=MASK/2
2020 NEXT I
2030 PILEW=0
2040 PCTW=0
2050 RETURN
2060 PILEW=PILESAVE
2070 PCTW=PNSAVE
2080 RETURN
2090 REM                       PLAYER WINS DISPLAY ROUTINE
2100 PLAY"mbt162o2c4e4e4g4g4o3c4c4e4e4c4c4o2g4g4e4e4"
2110 FOR I=1 TO 4
2120 COLOR 7,0
2130 CLS
2140 IF I AND 1 THEN COLOR 0,7
2150 IF I = 3 THEN PLAY"mbt162o3e8e-8d4o2b4b4g4g4f4f4o3d8e8c4c4c4c4c4."
2160 PRINT"*******************************************************************************"
2170 PRINT"*******************************************************************************"
2180 PRINT"********   *********   *******        *********   ********   ******************"
2190 PRINT"**********   *****   *******   ******   *******   ********   ******************"
2200 PRINT"************   *   *******   **********   *****   ********   ******************"
2210 PRINT"**************   *********   **********   *****   ********   ******************"
2220 PRINT"**************   *********   **********   *****   ********   ******************"
2230 PRINT"**************   ***********   ******   ********   ******   *******************"
2240 PRINT"**************   *************        ************        *********************"
2250 PRINT"*******************************************************************************"
2260 IF I=4 THEN COLOR 31,0
2270 PRINT"**********************************************************************   ******"
2280 PRINT"*********   ***************   ***     *****   *********   ***********   *******"
2290 PRINT"**********   *************   *****   ******     *******   **********   ********"
2300 PRINT"***********   ***********   ******   ******   *   *****   *********   *********"
2310 PRINT"************   ***   ***   *******   ******   ***   ***   ********   **********"
2320 PRINT"*************   *     *   ********   ******   *****   *   *******   ***********"
2330 PRINT"**************     *     *********   ******   *******     *********************"
2340 PRINT"***************   ***   *********     *****   *********   *****   *************"
2350 PRINT"*******************************************************************************"
2360 PRINT"*******************************************************************************"
2370 NEXT I
2380 COLOR 7,0
2390 PRINT
2400 RETURN
```

## NUM2.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 500:KEY(9) ON:ON KEY(9) GOSUB 600:DIM S(25):FOR I=1 TO 25:S(I)=I:NEXT I
10 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
20 LOCATE 2,32:PRINT"Number Series 2":COLOR 7,0:GOSUB 59980
30 LOCATE 4,5:PRINT"There are 25 series to solve in this lesson.  You'll get three chances to"
40 PRINT"solve each one.  If you're having trouble, the computer will give you a hint."
50 FOR I=1 TO 100:SWAP S(INT(RND*25+1)),S(INT(RND*25+1)):NEXT I:XX=1:N=S(XX)
70 RESTORE
80 IF N>1 THEN FOR O=1 TO N-1:READ A,B,C,D,E,F,G,H,I,J,K,A$:NEXT O:Q=N-1
90 PRINT"Ok, here's your first series :
100 READ A,B,C,D,E,F,G,H,I,J,K,A$
110 T=T+1:Q=Q+1
120 PRINT:PRINT"Series" Q ":":PRINT"Type in the next two numbers in this series.  Put a comma between them."
130 GOSUB 3100
140 BEEP:INPUT "The next two numbers are: ",X,Y
145 Y1=CSRLIN:X1=POS(0)
150 IF (X=I)*(Y=J) THEN 300
160 Z=Z+1:IF Z=3 THEN 200
170 IF Z=2 THEN GOSUB 1000:GOTO 140
180 LOCATE 25,1:PRINT SPC(79);:PLAY "mbn50n25":LOCATE 25,1:PRINT"No!  Try again.";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1-1,X1:GOTO 140
200 PLAY "n50n25":PRINT:PRINT"No!  The answer is:  " I "," J;:GOTO 350
300 IF Z=0 THEN R=R+1
310 LOCATE 25,1:PRINT SPC(79);:PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT"Right!";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1,X1
350 Z=0
360 XX=XX+1:IF XX<26 THEN 410
370 GOSUB 7000:PRINT"You did" T "number series and answered " R "right on your first try."
380 PRINT:IF R/T>=0.9 THEN PRINT"That's terrific!"
390 IF (R/T>0.75)*(R/T<0.9) THEN PRINT"Very Good!"
400 IF R/T<0.75 THEN PRINT"Maybe you should try this lesson again!"
405 PRINT:PRINT"Press ENTER to proceed to the next lesson or R to repeat this lesson."
407 GOSUB 59990:IF IKEY$="r" OR IKEY$="R" THEN RUN ELSE IF IKEY$=CHR$(13) THEN 600 ELSE 407
410 GOSUB 7000:N=S(XX)
430 RESTORE
440 IF N>1 THEN FOR O=1 TO N-1:READ A,B,C,D,E,F,G,H,I,J,K,A$:NEXT O:Q=N-1
450 GOTO 100
500 RUN "iqbuild"
600 CHAIN MERGE "num3",5
1000 PLAY "mbn50n25":LOCATE 25,1:PRINT"No!  Hint:";:TIMEOUT=3:GOSUB 59950
1010 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:BEEP
1020 IF K=1 THEN PRINT"The numbers change by thr rule " A$;
1030 IF K=2 THEN PRINT"Look for more than one rule.  One rule is " A$;
1040 IF K=3 THEN PRINT"The amount of change gets " A$ " each time.";
1050 IF K=4 THEN PRINT"Alternating series.  One rule is " A$;
1060 IF K=5 THEN PRINT"Look for groups of " A$ " numbers.";
1070 TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);:LOCATE Y1-1,X1:RETURN
3100 PRINT:PRINT TAB(10) "╔" STRING$(35,"═") "╗"
3110 PRINT TAB(10) "║";:COLOR 15:PRINT A B C D E F G H;:COLOR 7:PRINT TAB(46) "║"
3120 PRINT TAB(10) "╚" STRING$(35,"═") "╝":PRINT:RETURN
5500 DATA 5,10,15,20,25,30,35,40,45,50,1,+5
5510 DATA 3,5,7,9,11,13,15,17,19,21,1,+2
5520 DATA 6,11,10,15,14,19,18,23,22,27,2,-1
5530 DATA 10,13,16,19,22,25,28,31,34,37,1,+3
5540 DATA 4,5,5,6,7,7,8,9,9,10,2,+0
5550 DATA 29,6,27,7,25,8,23,9,21,10,4,-2
5560 DATA 36,32,28,24,20,16,12,8,4,0,1,-4
5570 DATA 5,6,8,9,11,12,14,15,17,18,12,+2
5580 DATA 16,8,15,9,14,10,13,11,12,12,4,-1
5590 DATA 6,10,9,11,12,12,15,13,18,14,4,+3
5600 DATA 15,18,14,17,13,16,12,15,11,14,4,-1
5610 DATA 9,9,11,15,15,12,21,21,13,27,4,+6
5620 DATA 3,5,9,11,15,17,21,23,27,29,2,+2
5630 DATA 11,16,21,26,31,36,41,46,51,56,1,+5
5640 DATA 30,28,26,24,22,20,18,16,14,12,1,-2
5650 DATA 9,14,18,23,27,32,36,41,45,50,2,+4
5660 DATA 3,4,10,5,6,10,7,8,10,9,4,+0
5670 DATA 5,9,10,14,15,19,20,24,25,29,2,+4
5680 DATA 2,8,9,2,10,11,2,12,13,2,4,+1
5690 DATA 12,17,22,22,32,27,42,32,52,37,4,+5
5700 DATA 1,4,7,10,13,16,19,22,25,28,1,+3
5710 DATA 35,12,35,13,34,14,34,15,33,16,4,+1
5720 DATA 8,14,10,13,12,12,14,11,16,10,4,+2
5730 DATA 4,8,10,14,16,20,22,26,28,32,2,+4
5740 DATA 11,5,9,7,7,9,5,11,3,13,4,-2
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## NUM3.BAS

```bas
20 LOCATE 2,32:PRINT"Number Series 3":COLOR 7,0:GOSUB 59980
600 RUN "iqbuild"
5500 DATA 5,10,10,6,11,11,7,12,12,8,4,+1
5510 DATA 4,6,9,13,18,24,31,39,48,58,3,greater
5520 DATA 3,8,7,12,11,16,15,20,19,24,2,-1
5530 DATA 3,9,5,9,6,9,8,9,9,9,4,+2 +1
5540 DATA 45,44,42,39,35,30,24,17,9,0,3,greater
5550 DATA 1,2,3,6,7,14,15,30,31,62,2,* 2
5560 DATA 0,4,8,12,16,20,24,28,32,36,1,+4
5570 DATA 7,17,26,34,41,47,52,56,59,61,3,less
5580 DATA 14,17,19,22,24,27,29,32,34,37,2,+3
5590 DATA 1,13,3,11,5,9,7,7,9,5,4,-1
5600 DATA 3,4,18,6,7,18,9,10,18,12,4,+0
5610 DATA 1,1,5,2,2,6,3,3,7,4,4,+1
5620 DATA 27,24,21,18,15,12,9,6,3,0,1,-3
5630 DATA 1,2,4,7,11,16,22,29,37,46,3,greater
5640 DATA 9,13,8,12,7,11,6,10,5,9,4,-1
5650 DATA 2,5,8,8,11,14,14,17,20,20,2,+3
5660 DATA 2,3,5,8,12,17,23,30,38,47,3,greater
5670 DATA 1,11,20,28,35,41,46,50,53,55,3,less
5680 DATA 3,5,10,12,17,19,24,26,31,33,2,+5
5690 DATA 5,6,8,8,14,10,23,12,35,14,4,+2
5700 DATA 10,11,17,18,24,25,31,32,38,39,2,+1
5710 DATA 5,2,6,4,8,5,9,7,11,8,4,+1 +2
5720 DATA 11,14,16,17,17,16,14,11,7,2,3,less
5730 DATA 7,9,8,10,9,11,10,12,11,13,4,-1
5740 DATA 1,2,5,5,9,8,13,11,17,14,4,+3
```

## NUMBERS.BAS

```bas
5 DEFINT A-Z:KEY(10) ON:ON KEY(10) GOSUB 500:KEY(9) ON:ON KEY(9) GOSUB 600
10 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
20 LOCATE 2,32:PRINT"Number Series 1":COLOR 7,0
30 LOCATE 4,5:PRINT"A number series is a list of numbers that are connected to each other by"
40 LOCATE 5,1:PRINT"a rule.  For example, look at this simple number series:"
50 GOSUB 3000:GOSUB 3100:GOSUB 4000
60 GOSUB 6500:PRINT TAB(10) "(";:COLOR 15:PRINT"1";:COLOR 7:PRINT")  add 3 to each number to get the next."
70 PRINT TAB(10) "(";:COLOR 15:PRINT"2";:COLOR 7:PRINT")  add 2 to each number to get the next.":N=2:GOSUB 6000
80 IF Z>0 THEN LOCATE 11,1:GOTO 60
90 GOSUB 7000:PRINT"Rules for number series can involve addition, subtraction, multiplication,
100 PRINT"and division.":PRINT
110 PRINT"The rule tells you how to change each number in the series into the next number"
120 PRINT"in the series.":PRINT
130 GOSUB 4000:GOSUB 3000
140 GOSUB 6500:GOSUB 3100:PRINT TAB(10) "(";:COLOR 15:PRINT"1";:COLOR 7:PRINT") add 2   (";:COLOR 15:PRINT"2";:COLOR 7:PRINT") subtract 2   (";:COLOR 15:PRINT"3";:COLOR 7:PRINT") multiply by 2"
150 N=3:GOSUB 6000:IF Z>0 THEN 150
160 GOSUB 7000:PRINT"In a number series, the numbers can change by following more than one rule."
170 GOSUB 2000:GOSUB 3100
180 PRINT"Here you add 1, then add 3, then add 1 again, etc.:"
190 PRINTTAB(10) "2 (+1) 3 (+3) 6 (+1) 7 ...":GOSUB 4000
200 GOSUB 3100:GOSUB 5000
205 IF Z>0 THEN 200
210 GOSUB 7000:PRINT"There's one more thing you should know before you try solving some number"
220 PRINT"series.";:GOSUB 4000
230 PRINT"Sometimes a number series actually contains more than one series."
240 PRINT:PRINT"Here's one series:  1  3  5  7"
250 PRINT:PRINT"Here's another:  21  19  17  15"
260 PRINT:PRINT"Here's one series that combines them both:"
270 GOSUB 3000:GOSUB 3100:GOSUB 4000
280 PRINT"We call a series that combines two or more series an `alternating series'"
290 PRINT"because it alternates back and forth between the two series."
300 GOSUB 4000:GOSUB 7000
310 PRINT"The way to solve an alternating series is to find the rule for each series and"
320 PRINT"solve one series at a time.  Then put the answers together.":GOSUB 3100:GOSUB 5000
330 IF Z>0 THEN 310
340 GOSUB 7000:PRINT"Remember, the numbers can change by one or more rules.  You can also have an"
350 PRINT"alternating series with two or more series combined into one series.":PRINT
370 GOSUB 4000:GOTO 600
500 RUN "iqbuild"
600 RUN "num2"
2000 PRINT:PRINT"Look at this number series."
3000 READ A,B,C,D,E,F,G,H,I,J:RETURN
3100 PRINT:PRINT TAB(10) "╔" STRING$(35,"═") "╗"
3110 PRINT TAB(10) "║";:COLOR 15:PRINT A B C D E F G H;:COLOR 7:PRINT TAB(46) "║"
3120 PRINT TAB(10) "╚" STRING$(35,"═") "╝":PRINT:RETURN
4000 Y1=CSRLIN:X1=POS(0)
4010 LOCATE 25,1:PRINT"Press any key to continue";:BEEP:GOSUB 59990:LOCATE 25,1:PRINT SPC(79);
4020 LOCATE Y1,X1:RETURN
5000 PRINT"Type in the next two (2) numbers in this series."
5010 BEEP:INPUT "Put a comma between them - ",X,Y
5015 Y1=CSRLIN:X1=POS(0)
5020 IF (X=I)*(Y=J) THEN 6100
5030 Z=Z+1:IF Z=3 THEN LOCATE 25,1:PRINT SPC(79);:PLAY "n50n25":LOCATE 25,1:PRINT"The answer is:  " I "," J;:Z=0:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1,X1:RETURN
5040 LOCATE 25,1:PRINT SPC(79);:PLAY "mbn50n25":LOCATE 25,1:PRINT"No!  Try again.";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1-2,X1:GOTO 5000
5500 DATA 2,4,6,8,10,12,14,16,18,20
5510 DATA 1,2,4,8,16,32,64,128,0,0
5520 DATA 2,3,6,7,10,11,14,15,18,19
5530 DATA 10,12,11,13,12,14,13,15,14,16
5540 DATA 1,21,3,19,5,17,7,15,9,13
6000 Y1=CSRLIN:X1=POS(0):Z=0
6010 LOCATE 25,1:PRINT "Enter the number of your answer";
6020 BEEP:GOSUB 59990:IF INSTR("123456789",IKEY$)=0 THEN 6020
6030 IF VAL(IKEY$)=N THEN 6100
6040 Z=Z+1:IF Z=3 THEN LOCATE 25,1:PRINT SPC(79);:PLAY "n50n25":LOCATE 25,1:PRINT"The answer is" N;:Z=0:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1,X1:RETURN
6050 LOCATE 25,1:PRINT SPC(79);:PLAY "mbn50n25":LOCATE 25,1:PRINT"No!  Try again.";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:GOTO 6010
6100 LOCATE 25,1:PRINT SPC(79);:PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT"Right!";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE Y1,X1:Z=0:RETURN
6500 PRINT"What's the rule for this series?":RETURN
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## READING.BAS

```bas
5 REM This program is Reading
10 KEY OFF:WIDTH 80:CLS:DEFSTR C,R,S,Z:DEFINT I,L,T
20 LOCATE 1,27:COLOR 0,7:PRINT " ***** TACHISTOSCOPE *****";
30 LOCATE 3,10:COLOR 7,0:PRINT "This program is designed to improve your reading speed.";
40 LOCATE 5,10:PRINT "I will briefly display a short phase and you try and read it.";
50 LOCATE 7,10:PRINT "Type what you see, and I will tell you if you were right.";
70 COLOR 15: LOCATE 25,25:PRINT "press any key when you're ready";
74 CHAIN MERGE "words", 75, ALL
75 GOSUB 1000:T1=1000:T4=100:T$=TIME$:XX=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2)):RANDOMIZE XX
78 C(1)="Right":C(2)="Correct":C(3)="Absolutely":C(4)="You're doing OK!":C(5)="I knew you'd get that one"
80 IF INKEY$ = "" THEN GOTO 80
100 RESTORE:FOR I=1 TO INT(RND*L+1):READ S:NEXT I
110 COLOR 10:CLS:LOCATE 12,1,0:PRINT STRING$(80,"-");:LOCATE 14,1,0:PRINT STRING$(80,"-");
120 T=5:GOSUB 2000
130 X=40-INT(LEN(S)/2):COLOR 15:LOCATE 13,X:PRINT S
140 FOR I=1 TO T1:NEXT I:CLS
150 COLOR 7:LOCATE 1,1:PRINT "Enter what you read ":INPUT R
160 IF R=S THEN GOSUB 500 ELSE GOSUB 600
170 COLOR 15:LOCATE 24,22:PRINT "Do you want another phrase (Y or N)?";
180 I$=INKEY$:IF I$="" THEN GOTO 180
190 IF INSTR("ynYN",I$)=0 THEN GOTO 180
200 IF INSTR("yY",I$)<>0 THEN GOTO 100
210 RUN "menu"
500 COLOR 0,7:I=RND(6)*6+1:X=40-LEN(C(I))/2:LOCATE 12,X:PRINT C(I):COLOR 7,0
510 PLAY "mbc16c16c16ge8g"
520 T1=T1-T4:RETURN
600 PLAY "n50n25":T4=10
610 COLOR 7:LOCATE 3,1:PRINT "Sorry - Try again!":INPUT R
620 IF R=S THEN GOTO 500
630 PLAY "n50n25":COLOR 7:LOCATE 12,27:PRINT "Sorry, what I gave you was"
640 COLOR 0,7:LOCATE 13,27:PRINT S:COLOR 7,0
650 T1=T1+T4:RETURN
1000 ON ERROR GOTO 1050
1010 RESTORE:L=0
1020 READ X$:L=L+1:GOTO 1020
1050 RETURN
2000 T$=TIME$:T3=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2))
2010 T$=TIME$:T2=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2))
2020 IF T>T2-T3 THEN GOTO 2010 ELSE RETURN
```

## SYNONYM.BAS

```bas
5 KEY(10) ON:ON KEY(10) GOSUB 600:KEY(9) ON:ON KEY(9) GOSUB 700:DIM P(35):FOR I=1 TO 35:P(I)=I:NEXT I
10 CLS:T=0:N=0:GOSUB 59980:FOR I=1 TO 100:SWAP P(INT(RND*35+1)),P(INT(RND*35+1)):NEXT I
20 CLS:LOCATE 1,34:COLOR 0,15:PRINT" IQ Builder ":COLOR 15,0
30 LOCATE 2,35:PRINT"Synonyms 1":COLOR 7,0
40 LOCATE 4,1:PRINT"Synonyms are words of similar meaning.":PRINT
50 PRINT"In this lesson, pick the word with a meaning most similar to the one"
60 PRINT"in the box."
70 XX=1:P=P(XX)
80 IF P>1 THEN FOR J=1 TO P-1:FOR X=1 TO 7:READ A$:NEXT X,J
90 PRINT:PRINT"Problem" P
100 READ A$:PRINT:PRINT"Which word below is most similar to"
110 PRINTTAB(39-INT(LEN(A$)/2)) "╔" STRING$(LEN(A$),"═") "╗"
120 PRINTTAB(39-INT(LEN(A$)/2)) "║" A$ "║"
130 PRINTTAB(39-INT(LEN(A$)/2)) "╚" STRING$(LEN(A$),"═") "╝"
140 FOR X=1 TO 5:READ A$:PRINT"(";:COLOR 15:PRINT X;:COLOR 7:PRINT")  " A$:NEXT X:READ R
150 BEEP:LOCATE 25,1:PRINT "Your choice is - ";
155 GOSUB 59990:IF INSTR("12345",IKEY$)=0 THEN 155 ELSE C=VAL(IKEY$)
160 N=N+1:IF C=R THEN PLAY "mbc16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"That is correct!";:T=T+1:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);
170 IF C<>R THEN PLAY "mbn50n25":LOCATE 25,1:PRINTSPC(79);:LOCATE 25,1:PRINT"No!  Try again.";:TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINTSPC(79);:GOTO 150
180 XX=XX+1:IF XX<36 THEN P=P(XX):GOSUB 7000:RESTORE:GOTO 80
190 GOSUB 7000:PRINT"Your score is the total number right out of all answers given."
200 PRINT:PRINT"You scored " T " right out of " N ", or " INT(T/N*100+0.5) " percent."
210 PRINT:IF T/N>0.9 THEN PRINT"Excellent job!":GOTO 240
220 IF T/N>0.75 THEN PRINT"Good score!":GOTO 240
230 PRINT"Why don't you look at this program again...":TIMEOUT=5:GOSUB 59950:RUN
240 TIMEOUT=5:GOSUB 59950:GOTO 700
600 RUN "iqbuild"
700 CHAIN MERGE "synonym2",5
5500 DATA immense, often, distant, huge, compact, endless, 3
5510 DATA strange, odd, uneasy, sad, ugly, scare, 1
5520 DATA kin, enemy, rinse, friend, union, relative, 5
5530 DATA inhabitant, traveler, realtor, resident, creature, worker, 3
5540 DATA burning, boiling, heated, breathing, ablaze, blushing, 4
5550 DATA employ, manage, gain, meet, use, please, 4
5560 DATA quiet, calm, sorry, common, simple, sad, 1
5570 DATA quickly, simply, often, secretly, gaily, rapidly, 5
5580 DATA empty, pale, stale, rare, vacant, thin, 4
5590 DATA banish, disappear, repeat, tell, exile, attack, 4
5600 DATA movement, action, purpose, liesure, pretense, company, 1
5610 DATA snare, enlarge, change, trap, anger, help, 3
5620 DATA nomad, citizen, wanderer, hermit, alien, visitor, 2
5630 DATA live, allow, reflect, establish, offer, abide, 5
5640 DATA quake, destroy, fix, tremble, weaken, cover, 3
5650 DATA slender, narrow, sleek, starve, shapely, fashionable, 1
5660 DATA nativity, homeland, birth, citizenship, frontier, movement, 2
5670 DATA wander, consider, vary, pave, chat, roam, 5
5680 DATA abbreviate, indicate, relate, hasten, shorten, describe, 4
5690 DATA quarrel, mistake, harm, puzzle, desire, argument, 5
5700 DATA abhor, hate, gather, reveal, leave, kill, 1
5710 DATA scheme, worry, plan, please, mix, fight, 2
5720 DATA deputy, honorary, representative, hoodlum, sheriff, manager, 2
5730 DATA quiver, desert, shake, harden, whirl, sink, 2
5740 DATA abet, settle, rival, assist, upgrade, reveal, 3
5750 DATA wary, guarded, fierce, insistent, tired, huge, 1
5760 DATA competently, successfully, artfully, ably, humanely, cautiously, 3
5770 DATA influence, affect, gather, cure, glimpse, please, 1
5780 DATA nucleus, neutron, atom, energy, center, union, 4
5790 DATA elastic, moving, pleasing, flexible, swollen, intensive, 3
5800 DATA quadruple, increase, count, divide, identical, fourfold, 5
5810 DATA bright, sharp, radiant, ambrosial, persistent, ideal, 2
5820 DATA spherical, circular, empty, rounded, full, inflated, 3
5830 DATA conform, evolve, improve, mention, adapt, shape, 4
5840 DATA ignite, destroy, hat, kindle, shine, shower, 3
7000 FOR Y=4 TO 24:LOCATE Y,1:PRINTSPC(79);:NEXT Y:LOCATE 4,1:RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## SYNONYM2.BAS

```bas
30 LOCATE 2,35:PRINT"Synonyms 2":COLOR 7,0
700 RUN "iqbuild"
5500 DATA illustrious, momentous, painted, menial, grotesque, celebrated, 5
5510 DATA quizzical, alert, questionable, abrupt, puzzled, flustered, 4
5520 DATA aberration, abnormality, secret, enormity, homily, homage, 1
5530 DATA servile, toxic, pleasant, commonplace, hidden, slavish, 5
5540 DATA voluble, gaseous, lofty, mercenary, talkative, corrosive, 4
5550 DATA exemplary, studious, reflective, commendable, presumptuous, cosmic, 3
5560 DATA cartel, beacon, authority, monopoly, legation, complex, 3
5570 DATA malady, repast, loss, medicine, affliction, incision, 4
5580 DATA imprudent, nasty, insane, injudicious, hesitant, selective, 3
5590 DATA conjecture, signal, deportment, advantage, perfection, ponder, 5
5600 DATA fervid, zealous, chilly, fertile, worried, flowery, 1
5610 DATA genre, vantage, pledge, sort, analogy, portal, 3
5620 DATA waggish, doglike, demented, roguish, venomous, twisting, 3
5630 DATA aesthete, majesty, connoisseur, mystic, excess, idyll, 2
5640 DATA lampoon, obscure, refinery, remorse, satire, corrode, 4
5650 DATA tepid, diffuse, faulty, genial, illusive, lukewarm, 5
5660 DATA recoup, consign, delineate, enlist, recover, intensify, 4
5670 DATA sagacious, strange, mercenary, wise, intimate, destructive, 3
5680 DATA viscous, spirited, pitiless, sticky, reluctant, resonant, 3
5690 DATA fiat, treasure, yearning, aversion, decree, nuisance, 4
5700 DATA refurbish, ordain, corroborate, renovate, substitute, resuscitate, 3
5710 DATA ricochet, oscillate, covet, augment, rebound, crisscross, 4
5720 DATA submit, arrange, acquiesce, contrast, caress, conserve, 2
5730 DATA gesticulation, vendetta, procedure, indemnity, experience, gesture, 5
5740 DATA peruse, implore, correct, read, compensate, muzzle, 3
5750 DATA flagellate, denounce, whip, sacrifice, bewitch, cleanse, 2
5760 DATA literate, officiate, authentic, educated, cathartic, written, 3
5770 DATA  oration, veneer, anecdote, meeting, discourse, following, 4
5780 DATA traverse, circle, guard, cross, incriminate, transfer, 3
5790 DATA unanimity, sterility, distribution, correlation, unity, animated, 4
```

## TRUCKER.BAS

```bas
5 REM This program is Trucker
10 KEY OFF:WIDTH 80:CLS:DEFINT C-S
20 LOCATE 5,3:PRINT"╔════════╗";:LOCATE 6,3:PRINT"╚═══╗╔═══╝";:LOCATE 7,7:FOR X=1 TO 7:PRINT"║║" CHR$(31) STRING$(2,29);:NEXT X:PRINT"╚╝";
30 LOCATE 5,14:PRINT"╔════════╗";:LOCATE 6,14:PRINT"║╔══════╗║";:LOCATE 7,14:PRINT"║║      ║║";:LOCATE 8,14:PRINT"║║      ║║";:LOCATE 9,14:PRINT"║╚══════╝║";:LOCATE 10,14:PRINT"║╔══╗ ╔══╝";
40 LOCATE 11,14:PRINT"║║  ╚╗╚╗";:LOCATE 12,14:PRINT"║║   ╚╗╚╗";:LOCATE 13,14:PRINT"║║    ╚╗╚╗";:LOCATE 14,14:PRINT"╚╝     ╚═╝";
50 LOCATE 5,25:PRINT"╔╗      ╔╗";:FOR X=6 TO 12:LOCATE X,25:PRINT"║║      ║║";:NEXT X:LOCATE 13,25:PRINT"║╚══════╝║";:LOCATE 14,25:PRINT"╚════════╝";
60 LOCATE 5,36:PRINT"╔════════╗";:LOCATE 6,36:PRINT"║╔══════╗║";:LOCATE 7,36:PRINT"║║      ╚╝";:FOR X=8 TO 11:LOCATE X,36:PRINT"║║";:NEXT X:LOCATE 12,36:PRINT"║║      ╔╗";:LOCATE 13,36:PRINT"║╚══════╝║";:LOCATE 14,36:PRINT"╚════════╝";
70 LOCATE 5,47:PRINT"╔╗   ╔═╗";:LOCATE 6,47:PRINT"║║  ╔╝╔╝";:LOCATE 7,47:PRINT"║║ ╔╝╔╝";:LOCATE 8,47:PRINT"║║╔╝╔╝";:LOCATE 9,47:PRINT"║╚╝╔╝";:LOCATE 10,47:PRINT"║╔╗╚╗";:LOCATE 11,47:PRINT"║║╚╗╚╗";:LOCATE 12,47:PRINT"║║ ╚╗╚╗";
80 LOCATE 13,47:PRINT"║║  ╚╗╚╗";:LOCATE 14,47:PRINT"╚╝   ╚═╝";
90 LOCATE 5,58:PRINT"╔════════╗";:LOCATE 6,58:PRINT"║╔═══════╝";:LOCATE 7,58:PRINT"║║";:LOCATE 8,58:PRINT"║║";:LOCATE 9,58:PRINT"║╚═══╗";:LOCATE 10,58:PRINT"║╔═══╝";:LOCATE 11,58:PRINT"║║";
100 LOCATE 12,58:PRINT"║║";:LOCATE 13,58:PRINT"║╚═══════╗";:LOCATE 14,58:PRINT"╚════════╝";
110 LOCATE 5,69:PRINT"╔════════╗";:LOCATE 6,69:PRINT"║╔══════╗║";:LOCATE 7,69:PRINT"║║      ║║";:LOCATE 8,69:PRINT"║║      ║║";:LOCATE 9,69:PRINT"║╚══════╝║";:LOCATE 10,69:PRINT"║╔══╗ ╔══╝";
120 LOCATE 11,69:PRINT"║║  ╚╗╚╗";:LOCATE 12,69:PRINT"║║   ╚╗╚╗";:LOCATE 13,69:PRINT"║║    ╚╗╚╗";:LOCATE 14,69:PRINT"╚╝     ╚═╝";
130 LOCATE 4,1:PRINT"╔" STRING$(78,"═") "╗";:FOR X=5 TO 14:LOCATE X,1:PRINT"║";:LOCATE X,80:PRINT"║";:NEXT X
135 LOCATE 15,1:PRINT"╚" STRING$(37,"═") "╗  ╔" STRING$(37,"═") "╝";
140 LOCATE 16,31:PRINT"╔═══════╝by╚═══════╗";:LOCATE 17,31:PRINT"║Hughes  Glantzberg║";:LOCATE 18,29:PRINT"╔═╝1602 Elizabeth Dr.╚═╗";:LOCATE 19,29:PRINT"║Carrollton,  TX  75007║";
150 LOCATE 20,29:PRINT"╚" STRING$(22,"═") "╝";
155 TIMEOUT=4:GOSUB 59950
160 T$=TIME$:XX=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2)):RANDOMIZE XX
170 DIM MT(2), MP(2,25), MP$(2,25), MR$(2,25), ZM(2,25), DS$(6), NT$(4)
180 DD$="$#,###":DC$="$#,###.##"
190 NT$(1)="first":NT$(2)="second":NT$(3)="third":NT$(4)="fourth"
200 DS$(0)="Monday":DS$(1)="Tuesday":DS$(2)="Wednesday":DS$(3)="Thursday":DS$(4)="Friday":DS$(5)="Saturday":DS$(6)="Sunday"
1000 CLS:XC=190:MF=0:HL=3:HS=7:HR=0:GOSUB 2100
1020 LOCATE 3,1:PRINT"You are at the Los Angeles trucking terminal."
1030 PRINT"Three types of cargo are available:"
1040 COLOR 15:PRINT:PRINT TAB(5)"1";:COLOR 7:PRINT"--oranges  (highest profit if they don't spoil)"
1050 COLOR 15:PRINT TAB(5)"2";:COLOR 7:PRINT"--freight forwarding  (penalty for late delivery)"
1060 COLOR 15:PRINT TAB(5)"3";:COLOR 7:PRINT"--U.S. Mail  (lowest rate, but no hurry to arrive)"
1070 PRINT:PRINT"The cargo is due in New York by 4 PM on Thursday."
1080 PRINT:PRINT"Which type of cargo do you want (";:COLOR 15:PRINT"1";:COLOR 7:PRINT", ";:COLOR 15:PRINT"2";:COLOR 7:PRINT", or ";:COLOR 15:PRINT"3";:COLOR 7:PRINT")?";
1090 GOSUB 59990:IF INSTR("123",IKEY$)=0 THEN 1090 ELSE CT=VAL(IKEY$):PRINTCT
1100 INPUT "How many pounds will you carry (40,000 is the legal limit)";WL
1110 IF WL<25000 THEN PRINT"You can't make a living on half a load.":GOTO 1100
1120 PRINT:PRINTTAB(5) "They are loading your truck now."
1130 RESTORE
1150 FOR RT=0 TO 2:READ NP, MT(RT):FOR I=1 TO NP
1170 READ MP(RT,I), MP$(RT,I), MR$(RT,I), ZM(RT,I):NEXT I,RT
1190 TC=10:WF=190:NP=1:TS=1:SL=55:XN=XN+1
1200 IF WL>50000. THEN WL=50000.:PRINT"50,000 pounds of cargo has filled your trailer!":TIMEOUT=2:GOSUB 59950
1220 HR=HR+1:CLS:GOSUB 2100:LOCATE 3,1
1225 PRINT"You paid ";:COLOR 15:PRINT"$190.00";:COLOR 7:PRINT" for a nearly full tank of diesel fuel.":PRINT
1230 PRINT"Two of your tires are worn.  Do you want replacements (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
1235 GOSUB 59990:IF INSTR("ynYN",IKEY$)=0 THEN 1235
1240 IF IKEY$="n" OR IKEY$="N" THEN 1350
1245 PRINT"A new tire costs $200.00.  A retread costs $100.00."
1260 INPUT "     Which type do you want";Z$:Z$=LEFT$(Z$,1)
1270 INPUT "     How many";T
1280 IF T=3 THEN IF Z$="n" OR Z$="N" THEN TS=2:T=2:XC=XC+200
1290 IF T<0 OR T>2 THEN 1330
1300 IF T=0 THEN 1350
1310 IF Z$="r" OR Z$="R" THEN TC=TC-3*T:XC=XC+100*T:GOTO 1350
1315 IF Z$="n" OR Z$="N" THEN TC=TC-4*T:XC=XC+200*T:GOTO 1350
1330 PRINT"I did not understand your answers.":PRINT"Let's try again!":GOTO 1230
1350 PRINT:PRINT"You may choose the ";:COLOR 15:PRINT"n";:COLOR 7:PRINT"orthern, ";:COLOR 15:PRINT"m";:COLOR 7:PRINT"iddle or ";:COLOR 15:PRINT"s";:COLOR 7:PRINT"outhern route."
1360 PRINT"     Which route do you choose (";:COLOR 15:PRINT"n";:COLOR 7:PRINT", ";:COLOR 15:PRINT"m";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"s";:COLOR 7:PRINT")? ";
1362 GOSUB 59990:IF INSTR("nmsNMS",IKEY$)=0 THEN 1362
1363 PRINT IKEY$:PRINT:PRINT
1365 IF IKEY$="n" OR IKEY$="N" THEN RT=1:RH=4:GOTO 1600
1370 IF IKEY$="m" OR IKEY$="M" THEN RT=0:RH=2:GOTO 1600
1375 RT=2:RH=1:GOTO 1600
1400 AF=SP^2*CD*CR
1420 IF AF>RND*1.000000e+7 THEN GOTO 4000
1430 AF=SQR(MF+100)*TC
1440 IF AF>RH*25000*RND THEN GOSUB 2600
1450 IF SP>SL-RH+10 THEN GOSUB 2300
1460 HR=HR+1:HL=HL+1
1470 IF SL<40 THEN SL=55
1480 T=ABS(55-SP):IF T>12 THEN T=12.5
1490 T1=SP/(4.5-0.2*T)
1500 WF=WF-T1:IF WF<0 THEN GOSUB 2500
1510 MF=MF+SP
1520 IF MF>MT(RT) THEN 5000
1530 TIMEOUT=2:GOSUB 59950
1550 CLS:GOSUB 2100
1560 LOCATE 2,1:PRINT"Approximate fuel:";:COLOR 15:PRINTINT(WF-4+RND*10);:COLOR 7:PRINTTAB(36) "Speed: ";:COLOR 15:PRINTSP:COLOR 7
1570 PRINT"        Odometer: ";:COLOR 15:PRINTMF;:COLOR 7:PRINTTAB(30) "Miles to go: ";:COLOR 15:PRINTMT(RT)-MF:COLOR 7
1580 PRINT
1600 IF MP(RT,NP)<=MF THEN GOTO 3100 ELSE PRINT"Cruising on " MR$(RT,NP)
1610 GOSUB 3000:PRINT"You are feeling " CD$
1620 GOSUB 2800:PRINT"Current weather: " CR$
1630 NS=NS+1:IF NS>3 THEN GOSUB 1700
1640 INPUT "How fast do you wish to go (20-100)";SP
1650 IF SP<20 THEN PRINT"Your have to go at least 20 --";:GOTO 1640
1660 IF SP>INT(1.5*SL) THEN  SP=INT(1.5*SL):PRINT"You can only get the old rig to go" SP "MPH on this road."
1670 GOTO 1400
1700 REM
1710 PRINT"Truck stop ahead.  Do you want to stop (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")? ";
1715 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 1715 ELSE PRINTIKEY$
1720 IF IKEY$="n" OR IKEY$="N" THEN S=1:HL=HL+1:RETURN
1740 T=85+INT(35*RND)
1750 PRINTUSING"Diesel fuel costs $#.## per gallon.";T/100
1760 INPUT "     How many gallons do you want";T1
1770 IF T1>0 THEN PRINTUSING"Pay $###.##";T*T1/100:XC=XC+T*T1/100:WF=WF+T1
1780 PRINT"So far, you have spent " USING DC$;XC
1790 IF WF>201 THEN PRINT"Your tank only holds 200 gallons --" INT(WF-200)" gallons spilled !!":WF=200
1800 IF TS>0 THEN 1900
1810 T=200+INT(50*RND):T1=100+INT(70*RND)
1820 PRINTUSING "A new tire costs $###.##.     A retread costs $###.##.";T,T1
1830 PRINT "     Do you want to buy a tire (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
1835 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 1835
1840 IF IKEY$="n" OR IKEY$="N" THEN 1900
1850 STOP
1900 HR=HR+1:NS=0
1910 PRINT"Do you want to get some sleep (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")? ";
1915 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 1915 ELSE PRINT IKEY$
1920 IF IKEY$="n" OR IKEY$="N" THEN CLS:GOSUB 2100:LOCATE 5,1:RETURN
1930 INPUT "     How many hours of rest";T
1940 IF T<1 THEN RETURN
1950 DH=HR-24*INT(HR/24)
1960 HR=HR+T:TIMEOUT=4:GOSUB 59950:IF CT=1 THEN WF=WF-7*T:IF WF<0 THEN WF=0:GOSUB 2570
1970 IF DH>21 OR DH<12 THEN T=INT(T/2+0.6):PRINT"Thanks to the daytime noise, you got only"T"hours real sleep."
1980 HS=HS+T
1990 IF T>3 THEN HL=0 ELSE HL=HL/2
2000 PLAY "mbn50n0n50n0n50n0n50n0n50n0n50n0n50n0n50n0n50n0n50"
2010 CLS:GOSUB 2100:LOCATE 5,1:PRINT"Time to hit the road again."
2015 IF CT=1 THEN PRINT"You now have" INT(WF) "gallons of fuel.":PRINT"Do you want to buy more (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")? "; ELSE RETURN
2017 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 2017 ELSE PRINT IKEY$
2020 IF IKEY$="n" OR IKEY$="N" THEN RETURN ELSE 1740
2100 DH=HR+8:DT=INT(DH/24):DH=DH-24*DT
2130 IF DT>6 THEN DT=DT-7:GOTO 2130
2140 DM$="AM":IF DH=12 THEN  DM$="Noon":GOTO 2200
2160 IF DH>12 THEN DH=DH-12:DM$="PM"
2170 IF DH=0 THEN DH=12:DH$="Midnight"
2200 REM
2210 LOCATE 1,13:PRINT"Day: ";:COLOR 15:PRINT DS$(DT);:COLOR 7:PRINT TAB(37) "Time: ";:COLOR 15:PRINT DH DM$ "       ":COLOR 7
2220 RETURN
2300 REM
2310 IF (SP-SL+2*RH-5)^2<900*RND THEN RETURN
2320 PRINT"Smokey is behind you with his lights on.  Pull over!"
2340 TIMEOUT=2:GOSUB 59950
2350 NT=NT+1:PRINT"See the justice of the peace for your " NT$(NT) " offense."
2360 PRINT"     Wait" NT "hours for your hearing."
2370 HR=HR+NT:HL=HL+NT
2380 IF NT>3 THEN 2430
2390 T=INT(NT*(RND*5)):T1=INT(5*(RT+NT*(RND*4)))
2400 PRINTUSING"     The fine is $###.## plus $##.## for each MPH over the limit.";T1,T
2410 PRINT"     Pay ";:COLOR 15:PRINTUSING DD$;T1+T*(SP-SL):COLOR 7:XC=XC+T1+T*(SP-SL)
2420 TIMEOUT=8:GOSUB 59950:RETURN
2430 PRINT"  You are sentenced to 30 days in jail for reckless driving."
2440 TIMEOUT=2:GOSUB 59950
2450 PRINT"Your I.C.C. driver's license is revoked !"
2460 GOTO 5500
2500 T1=T1+WF:WF=0:SP=0
2510 T=(4.5-0.2*T)*T1:MF=MF+T
2520 PRINT"After"T"more miles, you ran out of fuel  (";:COLOR 15:PRINT"DUMMY !!";:COLOR 7:PRINT")"
2540 PRINT"     It cost $200 to get a barrel of diesel delivered."
2550 WF=55:T1=INT(RND*5):HR=HR+T1:ZC=ZC+200:HL=HL+T1
2560 PRINT"          You also wasted"T1"hours by your carelessness."
2570 IF CT=1 THEN CX=CX+INT(RND*3):PRINT"     Sitting with the refer unit off is damaging the oranges."
2580 TIMEOUT=1:GOSUB 59950
2590 RETURN
2600 FOR I=80 TO 1 STEP -5:PLAY "n"+STR$(I):NEXT I
2620 PRINT"Your just blew a tire !!"
2630 IF TS=0 THEN 2710
2640 TC=TC-2*TS:TS=0
2650 T=INT(RND*2)+1:IF T=1 THEN T$="outside" ELSE T$="inside"
2660 PRINT"     It took"T"hours to change the " T$ " tire.":HR=HR+T:HL=HR+T+1
2670 TIMEOUT=2:GOSUB 59950:RETURN
2710 PRINT"Since your spare has already been used, you have to call a tow truck":PRINT"from town to deliver a new tire for you."
2720 PRINT"     This service cost $400.00 and took 4 hours."
2730 HR=HR+4:HL=HL+4:XC=XC+400
2740 TIMEPUT=2:GOSUB59950:RETURN
2800 REM
2810 AF=(3000+MF)*RND:ON RT+1 GOTO 2870,2820,2910
2820 IF AF<3300 AND CR<>50 THEN 2960
2830 IF AF>4800 THEN 2965
2840 IF AF>4600 THEN 2970
2850 IF AF>3800 THEN 2975
2860 GOTO 2985
2870 IF AF<3400 AND CR<>50 THEN 2960
2880 IF AF>4900 THEN 2965
2890 IF AF>4700 THEN 2970
2900 IF AF>4200 THEN IF INT(RND*3)+1=1 THEN 2975 ELSE 2980
2905 GOTO 2985
2910 IF AF<4000 AND CR<>50 THEN 2960
2920 IF AF>5700 THEN 2965
2930 IF AF>5500 THEN 2970
2940 IF AF>4400 THEN 2980
2950 GOTO 2985
2960 CR=1:CR$="clear & dry":RETURN
2965 CR=50:CR$="B-L-I-Z-Z-A-R-D  !!":RETURN
2970 CR=10:CR$="fog -- limited visibility":RETURN
2975 CR=5:CR$="light snow":RETURN
2980 CR=5:CR$="rain":RETURN
2985 CR=3:CR$="clear, but roadway is wet":RETURN
3000 REM
3010 IF HL>19 OR HR/HS>4 THEN CD=100:CD$="..E.X.H.A.U.S.T.E.D..":RETURN
3020 IF HL<4 AND COS(HR/HS)<2.3 THEN CD=1:CD$="rested & rearing to go.":RETURN
3030 IF HL<8 AND COS(HR/HS)<2.5 THEN CD=2:CD$="fine":RETURN
3040 IF HL<12 AND HR/HS<=3 THEN CD=4:CD$="  b o r e d":RETURN
3050 IF HL<16 AND HR/HS<=3 THEN CD=8:CD$="  t i r e d  !!":RETURN
3060 CD=25:CD$="fatigued...you're getting sleepy":RETURN
3100 REM
3110 PRINT"You have just passed " MP$(RT,NP)
3120 ZH=ZM(RT,NP):SL=55
3130 ON INT(ZH) GOSUB 3210, 3310, 3360, 3410, 3500, 3710, 3860
3140 NP=NP+1:IF INT(ZH)=8 THEN 5000 ELSE TIMEOUT=5:GOSUB 59950:FOR I=5 TO 11:LOCATE I,1:PRINT SPACE$(70):NEXT I:LOCATE 5,1:GOTO 1600
3210 PRINT"Time zone changes -- set clock ahead one hour."
3220 HR=HR+1:GOSUB 2100
3230 RETURN
3310 T=100*(ZH-INT(ZH))
3320 PRINT"STOP!   Pay toll of " USING"$##.##";T
3330 XC=XC+T
3340 RETURN
3360 IF RND<ZH-INT(ZH) THEN RETURN
3370 PRINT"Construction ahead !!":TIMEOUT=2:GOSUB 59950
3380 PRINT"Slow down -- speed limit 35 MPH":SL=35
3390 RETURN
3410 IF RND<ZH-INT(ZH) THEN RETURN
3420 T=SP+RND*5-2
3430 PRINT"You were just clocked by radar at" T "MPH."
3440 IF T>SL+3 THEN GOSUB 2320 ELSE PRINT"     No ticket this time."
3450 RETURN
3500 IF ZH=INT(ZH) THEN IF RND<0.5 THEN 3520 ELSE RETURN
3510 IF RND<ZH-INT(ZH) THEN RETURN
3520 PRINT"Weighing station open -- trucks must stop.":TIMEOUT=2:GOSUB 59950
3530 PRINT"Scale weighs truck with cargo, fuel & driver: ";
3540 T=19000+WL+7*WF+25*(INT(RND*10))
3550 PRINTUSING"##,### pounds.";T
3560 T=INT(T-60000.)
3570 IF T<1 THEN PRINT"     You're O.K.":RETURN
3580 IF ZH=5 THEN 3630
3590 T1=INT(RND*4)+2:PRINT"     Overweight fine is $200.00 plus" T1 "cents/pound."
3600 XC=XC+200+(T*T1)/100
3610 PRINT"Pay fine of ";:COLOR 15:PRINTUSING DC$;200+(T*T1)/100:COLOR 7
3620 RETURN
3630 REM
3640 PRINT"You are not allowed to enter Louisiana with that load."
3650 PRINT"     Take a 200 mile detour through Arkansas with 45 MPH limit."
3660 SL=45:MR$(RT,NP)="Arkansas county roads"
3670 FOR I=12 TO 25:MP(RT,I)=MP(RT,I)+200:NEXT I
3680 MT(RT)=MT(RT)+200
3690 RETURN
3710 IF RND<ZH-INT(ZH) THEN RETURN
3720 T=INT(RND*6)
3730 PRINT"A rock slide has blocked the Alleghany Tunnel entrance."
3740 PRINT "     THE HIGHWAY DEPARTMENT WILL HAVE IT CLEARED IN"T"HOURS."
3750 HR=HR+T:TIMEOUT=2:GOSUB 59950:IF CT=1 THEN WF=WF-7*T:IF WF<=1 THEN GOSUB 3820
3760 IF T>1 THEN T1=INT(T/2+0.5) ELSE T1=0
3770 IF T1>3 THEN HL=0 ELSE IF T1>0 THEN HL=HL/2
3780 HS=HS+T1
3790 PRINT"     While waiting, you got"T1"hours of sleep"
3800 GOSUB 2100:RETURN
3820 PRINT"     You ran out of gas while waiting":T=0:GOSUB 2540
3830 RETURN
3860 IF CT>1 THEN RETURN
3870 IF RND<ZH-INT(ZH) THEN RETURN
3880 PRINT"The trailer refrigeration unit has failed endangering the cargo."
3890 PRINT"     Repairs take 2 hours and cost $100.00."
3900 CX=CX+INT(RND*5):HR=HR+2:HL=HL+2:XC=XC+100
3910 GOSUB 2100:TIMEOUT=2:GOSUB 59950
3920 RETURN
4000 FOR I=80 TO 1 STEP -5:PLAY "n"+STR$(I):NEXT I
4020 FOR I=1 TO 6
4030 CLS:FOR J=1 TO 100:NEXT J
4040 LOCATE 12,34:PRINT"C R A S H !!"
4050 FOR J=1 TO 100:NEXT J,I
4060 PRINT
4070 IF CD=100 OR (CD=25 AND SP<65) THEN PRINT"You fell asleep at the wheel.":GOTO 4130
4080 IF CR=50 THEN PRINT"You drove off the road into a snow filled ditch.":GOTO 4130
4090 IF CR=10 THEN PRINT"You rear-ended a pick-up with no tail lights.":GOTO 4130
4100 IF SP>65 THEN PRINT"        Speed kills !":GOTO 4130
4110 IF CR>2 THEN PRINT"You hit a slick spot":PRINT"  and skidded off the road.":GOTO 4130
4120 PRINT"A drunk driver rammed your rig.":PRINT"        Tough luck !"
4130 PRINT:TIMEOUT=2:GOSUB 59950
4140 PRINT"You lose your truck & profits.":PRINT
4150 PRINT:PRINT"Do you want to start over (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
4155 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 4155
4160 IF IKEY$="n" OR IKEY$="N" THEN RUN "b:???0??"
4170 XP=0:NT=0:CLS:GOTO 1000
5000 FOR I=1 TO 5
5020 CLS:FOR J=1 TO 60:NEXT J
5030 LOCATE 12,37:PRINT"WELCOME":LOCATE 13,40:PRINT"TO":LOCATE 14,36:PRINT"NEW YORK"
5040 FOR J=1 TO 60:NEXT J,I
5050 TIMEOUT=1:GOSUB 59950:CLS
5100 GOSUB 2100:LOCATE 5,1
5110 T=HR-INT(HR/24):IF T<10 OR T>21 THEN 5140
5120 PRINT"The warehouse is closed for the night.  Come back tomorrow."
5130 T=24-T:HR=HR+T:TIMEOUT=2:GOSUB 59950:GOSUB 2100
5140 PRINT:T=INT(HR/24):T1=HR-24*T
5150 PRINT"You completed the trip in"T"days";
5160 IF T1>1 THEN PRINT" &"T1"hours." ELSE PRINT"."
5170 PRINTUSING"     Trip expenses totaled $#,###.##";XC
5180 T1=85*T+85:PRINT USING"     Truck payment, insurance and taxes cost $#,###";T1
5190 XC=XC+T1:PRINT
5200 ON CT GOTO 5220, 5310, 5360
5220 T1=(T-4)*INT(RND*3):IF T1>0 THEN CX=CX+T1
5230 IF CX>6 THEN PRINT"Your oranges have spoiled.  Haul them to the dump!":XT=-50:GOTO 5400
5240 PRINT"Collect six-and-a-half cents per pound for good oranges."
5250 XT=0.06500001*WL:PRINTUSING"     Total for the load: $#,###.##";XT
5260 IF CX<1 THEN 5400
5270 PRINTUSING"     Part of the load is damaged.  Subtract ##%.";5*CX
5280 XT=XT-XT*CX/20:PRINTUSING"     Net payment is $#,###.##.";XT
5290 GOTO 5400
5310 XT=0.05*WL:PRINT"Collect five cents a pound for freight."
5320 PRINTUSING"     Total for load = $#,###.##";XT
5330 IF HR<95 THEN 5400
5340 CX=2:PRINT"     You're late!!  Subtract ten percent penalty.":GOTO 5400
5360 PRINT"Postmaster pays 4.75 cents per pound on delivery.":XT=0.0475*WL:CX=0:GOTO 5400
5400 PRINT:XT=XT-XC:XP=XP+XT:IF XT<0 THEN 5470
5410 PRINTUSING"Your net profit this trip was $#,###.##";XT
5420 IF XT>100 THEN PRINT"     G O O D   W O R K  !!"
5430 IF XN>1 THEN PRINTUSING"     Your average profit has been $#,###.##";XP/XN
5440 IF XT<200 OR XP/XN<250 THEN PRINT"     You'd make more money washing dishes !"
5450 PRINT:PRINT:PRINT"Do you want to make another trip (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")? ";
5455 GOSUB 59990:IF INSTR("nyNY",IKEY$)=0 THEN 5455 ELSE PRINTIKEY$
5460 IF IKEY$="n" OR IKEY$="N" THEN CLS:RUN "b:???0??" ELSE 1000
5470 PRINTUSING"Bad trip. . . You lost $#,###.##";ABS(XT)
5480 IF XP>=0 THEN GOTO 5430
5490 PRINT"     You are bankrupt !!!"
5500 TIMEOUT=4:GOSUB 59950
5520 PRINT:PRINT"Your rig has been repossessed."
5530 PRINT:TIMEOUT=5:GOSUB 59950:RUN "menu"
9030 DATA 21,2850
9040 DATA 90,Barstow,I-15 in California,7.80
9050 DATA 225,Needles,I-40 in California,1
9060 DATA 440,Flagstaff,I-40 in California,3.65
9070 DATA 620,Gallup,I-40 in Arizona,5.5
9080 DATA 760,Albuquerque,I-40 in New Mexico,3.35
9090 DATA 930,Tucumcari,I-40 in New Mexico,1
9100 DATA 1040,Amarillo,I-40 in Texas,7.8
9110 DATA 1155,Oklahoma border,I-40 in Texas,5.5
9120 DATA 1305,Oklahoma City,I-40 in Oklahoma,2.65
9130 DATA 1530,Missouri border,Oklahoma Turnpike,2.40
9140 DATA 1815,St. Louis,I-44 in Missouri,0
9150 DATA 1980,Terre Haute,I-70 in Illinois,5.5
9160 DATA 2050,Indianapolis,I-70 in Indianna,0
9170 DATA 2115,Ohio border,I-70 in Indianna,1
9180 DATA 2220,Columbus,I-70 in Ohio,5.5
9190 DATA 2350,Wheeling West Virginia,I-70 in Ohio,4.25
9200 DATA 2410,New Stanton,I-70 in Pennsylvania,6.75
9210 DATA 2570,Harrisburg,Pennsylvania Turnpike,3.75
9220 DATA 2760,New Jersey border,Pennsylvania Turnpike,2.95
9230 DATA 2840,Holland Tunnel,I-70 in New Jersey,2.4
9240 DATA 9999,New York,New York streets,0
9250 DATA 18,2710
9260 DATA 90,Barstow,I-15 in California,7.8
9270 DATA 245,Las Vegas,I-15 in California,1
9280 DATA 365,Utah border,I-15 in Arizona,0
9290 DATA 500,End of Interstate,I-15 in Utah,3.2
9300 DATA 555,Salina,US-89 in Utah,4.5
9310 DATA 760,Grand Junction,I-70 in Utah,5.4
9320 DATA 1010,Denver,I-70 in Colorado,3.75
9330 DATA 1190,Nebraska border,I-76 in Colorado,1
9340 DATA 1450,Omaha,I-80 in Nebraska,5.5
9350 DATA 1590,Demoines,I-80 in Iowa,4.75
9360 DATA 1750,Illinois border,I-80 in Iowa,5.6
9370 DATA 1910,Gary,I-80 in Illinois,2.5
9380 DATA 2050,Ohio border,Indianna Turnpike,2.45
9390 DATA 2215,Cleveland,Ohio Turnpike,2.8
9400 DATA 2280,Pennsylvania border,I-80 in Ohio,4.16
9410 DATA 2615,East Stroudsberg,I-80 in Pennsylvania,3.33
9420 DATA 2675,Washington Bridge,I-80 in New Jersey,2.2
9430 DATA 9999,New York,city streets,0
9450 DATA 25,3120
9460 DATA 75,Palm Springs,I-10 in California,0
9470 DATA 225,Blythe,I-10 in California,1
9480 DATA 375,Phoenix,I-10 in Arizona,0
9490 DATA 495,Tucson,I-10 in Arizona,7.9
9500 DATA 650,Lordsburg,I-10 in Arizona,5.75
9510 DATA 795,El Paso,I-10 in New Mexico,0
9520 DATA 965,Pecos,I-10 in Texas,1
9530 DATA 1080,Odessa,I-20 in Texas,0
9540 DATA 1250,Abilene,I-20 in Texas,3.8
9550 DATA 1439,Dallas,I-20 in Texas,0
9560 DATA 1610,Louisiana border,I-20 in Texas,5
9570 DATA 1785,Vicksburg,I-20 in Louisiana,0
9580 DATA 1965,Alabama border,I-20 in Mississippi,1
9590 DATA 2100,Birmingham,I-20 in Alabama,4.25
9600 DATA 2200,Georgia border,I-20 in Alabama,0
9610 DATA 2255,Atlanta,I-20 in Georgia,0
9620 DATA 2320,Carolina border,I-85 in Georgia,5.75
9630 DATA 2565,Greensboro,I-85 in Carolina,3.8
9640 DATA 2680,Virginia border,I-85 in North Carolina,7.85
9650 DATA 2775,Richmond,I-85 in Virginia,0
9660 DATA 2880,Washington D.C.,I-95 in Virginia,0
9670 DATA 2920,Baltimore,I-95 in Maryland,2.3
9680 DATA 2990,New Lersey border,I-95 in Delaware,2.25
9690 DATA 3110,Holland Tunnel,New Jersey Turnpike,2.4
9700 DATA 9999,New York,city streets,0
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## WORDS.BAS

```bas
10000 DATA fat,cat,act,can,fast,hat,hand,last,man,ran,have
10010 DATA red,hen,let,get,help,next,pet,men,went,bed,said
10020 DATA big,pig,fir,did,swim,six,dig,win,sit,hit,been
10030 DATA rug,bug,jump,hunt,fun,must,cup,bus,cut,run,of,from
10040 DATA hot,pond,got,hop,not,dog,log,lost,soft,on,was,want
10050 DATA glass,grass,bell,dress,will,still,off,cross,fuss,stuff,roll
10060 DATA milk,truck,ask,back,mask,neck,desk,sick,silk,rock
10070 DATA fish,dish,brush,splash,wish,ship,shop,shed,shut,shelf,wash
10080 DATA rich,witch,lunch,catch,ranch,pitch,such,match,much,stretch,watch
10090 DATA that,this,them,than,then,thin,bath,thick,with,cloth,both
10100 DATA pink,thank,bank,think,trunk,string,sang,long,bring,hung,young
10110 DATA play,day,may,say,stay,train,rain,wait,paint,mail,they
10120 DATA bake,safe,chase,came,cake,gave,late,game,name,made,break
10130 DATA see,need,keep,sleep,me,she,clean,read,teach,piece
10140 DATA try,dry,by,cry,fly,pie,tie,lie,cried,tried,eye
10150 DATA side,line,five,time,like,fine,ride,hide,kite,mine,give
10160 DATA find,kind,mind,hind,blind,right,night,light,fight,might,wind
10170 DATA go,no,slow,show,own,low,boat,road,goat,coat,to,do
10180 DATA cold,nose,old,those,hold,close,told,hope,gold,home,one
10190 DATA new,chew,few,blue,threw,true,grew,suit,flew,fruit,build
10200 DATA use,mule,cute,goose,loose,choose,food,soon,zoo,room,you,school
10210 DATA some,friend,done,does,come,shoe,move,guess,live,head
10220 DATA put,pull,push,full,bush,foot,look,good,book,took,could,should,would
10230 DATA why,wheel,when,whip,which,who,white,whose,while,what
10240 DATA all,draw,ball,crawl,call,fault,fall,caught,saw,taught,shall,gone
10250 DATA brown,house,cow,found,down,sound,how,our,now,out,your,four
10260 DATA toy,noise,joy,point,boy,soil,join,boil,oil,spoil
10270 DATA hear,year,ear,rear,dear,cheer,clear,deer,near,steer,here
10280 DATA hair,care,air,scare,pair,bare,chair,square,fair,share,bear,where
10290 DATA fork,or,for,short,horse,floor,store,tore,shore,more,wore,door
10300 DATA barn,yard,car,arm,farm,are,hard,dark,far,march,part
10310 DATA her,jerk,serve,girl,bird,first,third,curl,turn,hurt,word,work,were
10320 DATA better,never,after,under,coller,color,other,mother,water father
10330 DATA funny,happy,story,hurry,party,any,many,very,ready,pretty
10340 DATA write,knew,know,wrote,lamb,talk,walk,laugh,climb,eight
10350 DATA one,two,three,four,five,six,seven,eight,nine,ten
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0018

     Volume in drive A has no label
     Directory of A:\

    ANALOG   BAS      4096  11-02-82   5:26p
    ANALOG2  BAS      1280  11-02-82   5:25p
    ANALOG3  BAS      3584  11-02-82   5:25p
    ANALOG4  BAS      1920  11-02-82   5:24p
    ANALOG5  BAS      1664  11-02-82   5:23p
    ANALOG6  BAS      2304   7-16-82
    ANTONYM  BAS      3840  11-02-82   5:21p
    ANTONYM2 BAS      2560   7-11-82
    BACKGAM  BAS      4736  11-04-82   3:53p
    BLACK    BAS     16000  11-04-82   3:54p
    FRANK    BAS      6144  11-04-82   3:50p
    IQBUILD  BAS      4608  11-02-82   5:28p
    MASTER   BAS      5120  11-02-82   4:15p
    MATH     BAS      6400  11-02-82   4:13p
    MENU     BAS      4096  11-04-82   5:12p
    NIM      BAS      8832   9-01-82   7:02p
    NUM2     BAS      3584  11-02-82   5:27p
    NUM3     BAS      1024  11-02-82   5:26p
    NUMBERS  BAS      3712  11-02-82   5:27p
    READING  BAS      1536  11-02-82   4:32p
    SYNONYM  BAS      3840  11-02-82   5:23p
    SYNONYM2 BAS      2048  11-02-82   5:22p
    TRUCKER  BAS     17024  11-02-82   5:29p
    WORDS    BAS      2560   4-24-82
           24 file(s)     112512 bytes
                           44032 bytes free
