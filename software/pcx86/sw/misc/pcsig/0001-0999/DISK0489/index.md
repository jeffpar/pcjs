---
layout: page
title: "PC-SIG Library Disk #489"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0489/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0489"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JESUS SAYS"

    Jesus says is a interactive program that carries on a "conversation"
    with the user.  It has an adjustable reading speed for slower readers.
    The user is prompted to enter a sentance and the program respondes
    with a quote from the bible.  Then the user is given a chance to exit
    the program or continue, if the program is exited, another phrase is
    printed out.
    
    File Descriptions:
    
    JESUS   EXE   MAIN PROGRAM (MODE 40)
    JESUS   BAS   BASIC PROGRAM USED BY JESUS.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## JESUS.BAS

```bas
10 REM                 ****************************
20 REM                 *        JESUS SAYS        *
30 REM                 ****************************
40 REM
50 REM                   *************************
60 REM                   *   DATE 03/14/85       *
70 REM                   *       BY DAVID BOMAN  *
80 REM                   *************************
90 X$="ONE":Z$="ALL"
100 REM
110 REM
120 KEY OFF
130 DIM R$(60):FOR V=1 TO 60:READ R$(V):NEXT V
140 V$=RIGHT$(TIME$,2):V=VAL(V$):RANDOMIZE V
150 CLS
160 SCREEN 0:WIDTH 80:LOCATE 13,1:COLOR 15,0,1:PRINT" Adjust Reading SPEED?            1=Slow  2=Moderate  3=Normal  4=Quick  5=Fast"
170 PRINT"                                                                                   ENTER [1-5]   ?";
180 S$=INKEY$:IF VAL(S$)>5 OR VAL(S$)<1 THEN 180:IF S$="" THEN 180
190 S=VAL(S$):ON S GOTO 200,210,220,230,240
200 I=22000:GOTO 250
210 I=15000:GOTO 250
220 I=11000:GOTO 250
230 I=8000:GOTO 250
240 I=7200:GOTO 250
250 WIDTH 40:LOCATE 8,14,0
260 COLOR 4,7:PRINT" JESUS SAYS ":COLOR 15,0
270 LOCATE 11,18:PRINT "FROM":LOCATE 14,13:PRINT "THE HOLY BIBLE"
280 FOR I=7000 TO I STEP 1
290 SWAP X$,Z$
300 NEXT
310 REM                     ***********************
320 REM                     *     BEGIN INPUT     *
330 REM                     ***********************
340 REM
350 CLS:LOCATE 8,1,0:COLOR 0,7:PRINT "35  Again the next day John stood, and"
360 PRINT "two of his disciples;"
370 PRINT "36  And,looking upon Jesus as he walked,"
380 PRINT "he saith, Behold the Lamb of God!"
390 PRINT "37  And the two disciples heard him "
400 PRINT "speak,and they followed Jesus."
410 PRINT "38  Then Jesus turned, and "
420 PRINT "saw them following and saith unto them,":COLOR 7,0,4
430 FOR I=3000 TO I STEP 1
440 SWAP X$,Z$
450 NEXT
460 CLS:LOCATE 11,10,1:COLOR 4,7,4:PRINT " What seek ye?     ";
470 COLOR 0,7:PRINT "JOHN 1:35-38":COLOR 7,0
480 LOCATE 22,1:COLOR 7,0:PRINT "Type your CONVERSATION then PRESS RETURN"
490 LOCATE 24,1:LINE INPUT Q$
500 P$="PRAY"
510 P=INSTR(Q$,P$)
520 IF P>0 THEN 660
530 CLS
540 IF LEN(Q$)<8 THEN LOCATE 8,1,0 ELSE 870
550 COLOR 4,7
560 PRINT"For God so loved the world,"
570 PRINT"that he gave his only begotten Son,"
580 PRINT"that whosoever believeth in him should "
590 PRINT"not perish,"
600 PRINT"but have everlasting life."
610 COLOR 0,7:PRINT"JOHN 3:16":COLOR 7,0
620 FOR I=5500 TO I STEP 1
630 SWAP X$,Z$
640 NEXT
650 GOTO 960
660 CLS:LOCATE 8,1,0:COLOR 4,7,0:PRINT" After this manner, therefore, pray ye: ":GOSUB 790
670 CLS:LOCATE 8,1:COLOR 4,7,1:PRINT" Our Father, who art in heaven,":GOSUB 790
680 PRINT" Hallowed be thy name.":GOSUB 790
690 PRINT"    Thy kingdom come. Thy will be done":GOSUB 790
700 PRINT" In earth, as it is in heaven.":GOSUB 790
710 PRINT"    Give us this day our daily bread.":GOSUB 790
720 PRINT"    And forgive us our debts,":GOSUB 790
730 PRINT" as we forgive our debtors.":GOSUB 790
740 PRINT"    And lead us not into temptation,":GOSUB 790
750 PRINT" but deliver us from evil.":GOSUB 790
760 PRINT" For thine is the kingdom,and the power,":GOSUB 790
770 PRINT" and the glory, forever.":LOCATE 20,7:PRINT"Amen":GOSUB 790
780 LOCATE 21,14,0:COLOR 0,7,4:PRINT" MATTHEW 6:9-13":COLOR 7,0,4:GOTO 830
790 FOR I=6800 TO I STEP 3
800 SWAP X$,Z$
810 NEXT
820 RETURN
830 FOR I=5800 TO I STEP 2
840 SWAP X$,Z$
850 NEXT
860 GOTO 960
870 REM                ***************************
880 REM                *      MAKE RESPONCE      *
890 REM                ***************************
900 REM
910 V=INT(RND   *(60+1))
920 LOCATE 8,1,0:COLOR 4,7:PRINT R$(V):COLOR 7,0
930 FOR I=4500 TO I STEP 1
940 SWAP X$,Z$
950 NEXT
960 CLS:LOCATE 11,1,0:COLOR 4,7:PRINT "Ask, and it shall be given you;"
970 PRINT "seek, and ye shall find;"
980 PRINT "knock, and it shall be opened unto you;"
990 COLOR 0,7,0:PRINT "MATTHEW 7:7":COLOR 15,0,0:
1000 FOR I=5000 TO I STEP 2
1010 SWAP X$,Z$
1020 NEXT
1030 CLS
1040 LOCATE 16,1,1:COLOR 1:PRINT "Do you wish to continue fellowship (Y/N)                                     ?";
1050 A$=INKEY$
1060 IF A$="N" OR A$="n" THEN 1130
1070 IF A$="Y" OR A$="y" GOTO 460 ELSE 1040
1080 REM
1090 REM                 *************************
1100 REM                 *        ENDING         *
1110 REM                 *************************
1120 REM
1130 CLS:COLOR 7,7,0:LOCATE 1,1,0:PRINT SPACE$(40);
1140 LOCATE 2,1,0:COLOR 4,7,0:PRINT "Therefore, whosoever heareth these      ";:GOSUB 790
1150 PRINT " sayings of mine, and doeth them,       ":GOSUB 790
1160 PRINT " I will liken him unto a wise man,      ":GOSUB 790
1170 PRINT " who built his house upon a rock.       ":GOSUB 790
1180 PRINT "And the rain descended, and the         ":GOSUB 790
1190 PRINT " floods came, and the winds blew        ":GOSUB 790
1200 PRINT " and beat upon that house,              ":GOSUB 790
1210 PRINT " and it fell not;                       ":GOSUB 790
1220 PRINT SPACE$(40);
1230 PRINT "    for it was founded upon a rock.     ":GOSUB 790
1240 PRINT SPACE$(40);
1250 PRINT "And every one that heareth these sayings":GOSUB 790
1260 PRINT " of mine, and doeth them not, shall be  ":GOSUB 790
1270 PRINT " likened unto a foolish man, who built  ":GOSUB 790
1280 PRINT " his house upon the sand.               ":GOSUB 790
1290 PRINT "And the rain descended,and the floods   ":GOSUB 790
1300 PRINT " came, and the winds blew and beat upon ":GOSUB 790
1310 PRINT " that house, and it fell;               ":GOSUB 790
1320 PRINT SPACE$(40);
1330 PRINT "      and great was the fall of it.     ":GOSUB 790
1340 PRINT SPACE$(40);
1350 PRINT SPACE$(40)
1360 LOCATE 24,1,0:COLOR 0,7,0:PRINT "                        MATTHEW 7:24-27 ";
1370 COLOR 7,7,1:GOSUB 790
1380 LOCATE 1,1,0:COLOR 0,0,0:PRINT SPACE$(240);:PRINT SPACE$(240);:PRINT SPACE$(240);:PRINT SPACE$(240);:PRINT SPACE$(240)
1390 CLS:LOCATE 15,1,0:COLOR 4,7:PRINT "I have yet many things to say unto you, "
1400 PRINT "but ye cannot bear them now.":COLOR 0,7
1410 PRINT "JOHN 16:12":COLOR 7,0
1420 FOR I=7000 TO I STEP 1
1430 SWAP X$,Z$
1440 NEXT
1450 CLS:LOCATE 12,8,0:COLOR 4,7,4:PRINT " SURELY,I COME QUICKLY. "
1460 LOCATE 13,11,0:COLOR 0,7,4:PRINT "REVELATION 22:20":COLOR 7,0,4
1470 FOR I=6000 TO I STEP 3
1480 SWAP X$,Z$
1490 NEXT
1500 PRINT SPACE$(240)
1510 PRINT SPACE$(240)
1520 PRINT SPACE$(240)
1530 PRINT SPACE$(240)
1540 PRINT SPACE$(240)
1550 PRINT SPACE$(240)
1560 PRINT SPACE$(240)
1570 REM                   ***************************
1580 REM                   *       DATA ENTRIES      *
1590 REM                   ***************************
1600 REM
1610 DATA"  [Permit] it to be so now; for thus it becometh us to fulfill all righteousness                                                                  MATTHEW  3:15 "
1620 DATA"  It is written, Man shall not live by  bread alone, but by every word that     proceedeth out of the mouth of God.                                                                        MATTHEW  4:4 "
1630 DATA"  It is written again, Thou shalt not   [put the Lord, thy God, to the test].                                                                      MATTHEW  4:7 "
1640 DATA" [Begone],Satan; for it is written,     Thou shalt worship the Lord, thy God,   and him only shalt thou serve.                                                                            MATTHEW  4:12 "
1650 DATA" Repent; for the kingdom of heaven      is at hand.                                                       MATTHEW  4:17 "
1660 DATA"  Follow me, and I will make you        fishers of men.                                                   MATTHEW  4:19 "
1670 DATA"  Blessed are the poor in spirit;       for theirs is the kingdom of heaven.                                                                        MATTHEW 5:3 "
1680 DATA"  Blessed are they that mourn;          for they shall be comforted.                                        MATTHEW 5:4 "
1690 DATA"  Blessed are the meek;                 for they shall inherit the earth.                                                                           MATTHEW 5:5 "
1700 DATA"  Blessed are they who do hunger and    thirst after righteousness; for they    shall be filled.                                                                                            MATTHEW 5:6 "
1710 DATA"  Blessed are the merciful; for they    shall obtain mercy.                                                                                         MATTHEW 5:7 "
1720 DATA"  Blessed are the pure in heart;        for they shall see God.                                             MATTHEW 5:8 "
1730 DATA"  Blessed are the peacemakers;          for they shall be called the [sons] of  God.                                                                MATTHEW 5:9 "
1740 DATA"  Blessed are they who are persecuted   for righteousness' sake; for theirs is  the kingdom of heaven.                                             MATTHEW 5:10 "
1750 DATA"  Blessed are ye, when men shall revile you, and persecute you, and shall say   all manner of evil against you falsely, for my sake.                                                      MATTHEW  5:11 "
1760 DATA"  Ye are the salt of the earth, but if  the salt have lost its savor, with what shall it be salted? It is thereafter    good for nothing, but to be cast out,   and to be trodden under foot of men.                              MATTHEW  5:13 "
1770 DATA"  Ye are the light of the world. A city that is set on a hill cannot be hidden.                                                                   MATTHEW  5:14 "
1780 DATA"  Neither do men light a [lamp],and put it under a bushel, but on a [lampstand],and it giveth light unto all that are   in the house.                                                     MATTHEW  5:15 "
1790 DATA"  Let your light so shine before men,   that they may see your good works, and  glorify your Father, who is in heaven.                                                                    MATTHEW  5:16 "
1800 DATA"  Whosoever,therefore, shall break one  of these least commandments, and shall  teach men so, he shall be called the    least in the kingdom  of heaven;                                                                                Mt.5:19 "
1810 DATA"... I say unto you that whosoever  is   angry with his brother without cause    shall be in danger of judgement;                                                                        MATTHEW 5:21,22 "
1820 DATA"......... if thou bring thy gift to the altar, and there rememberest that thy   brother hath [anything] against thee,   Leave there thy gift before the altar,  and go thy way; first be reconciled to  thy brother...          MATTHEW 5:23,24 "
1830 DATA"  Ye have heard that it hath been said, Thou shalt love thy neighbor, and hate  thine enemy; But I say unto you,        Love your enemies,                                              MATTHEW 5:43,44 "
1840 DATA"  bless them that curse you, do good to them that hate you, and pray for them   who despitefully use you, and persecute you,  That ye may be the [sons] of      your Father, who is in heaven;                                  MATTHEW 5:44,45 "
1850 DATA"  for he maketh his sun to rise on the  evil and on the good, and sendeth rain  on the just and on the unjust. For if yelove them who love you, what reward     have ye? Do not even the[tax collectors]the same?               MATTHEW 5:45,46 "
1860 DATA"  ........., when thou doest thine alms,do not sound a trumpet before thee, as  the hypocrites do in the synagogues and in the streets, that they may have gloryfrom men. Verily I say unto you, They   have their reward.          MATTHEW 6:2 "
1870 DATA"  ....................., thou shalt not be as the hypocrites are; for they love to pray standing in the synagogues and  at the corners of the streets, that theymay be seen by men. Verily I say into   you, They have their reward.     Mt.6:5 "
1880 DATA"... when ye pray,use not vain           repetitions,as the [pagans] do;for they think that they shall be heard for theirmuch speaking.                                                    MATTHEW 6:7,8 "
1890 DATA" For if ye forgive men their trespasses,your heavenly Father will also forgive  you;                                                               MATTHEW 6:14 "
1900 DATA"Lay not up for yourselves treasures uponearth,where moth and rust doth corrupt, and where theives break through and     steal,                                                             MATTHEW 6:19 "
1910 DATA" ... lay up for yourselves treasures in heaven, where neither moth nor rust dothcorrupt, and where theives do not break through nor steal; For where your       treasure is, there will your heart be   also.                   MATTHEW 6:20,21 "
1920 DATA" No man can serve two masters;for eitherhe will hate the one, and love the      other; or else he will hold the one, anddespise the other. Ye cannot serve God  and [money].                                                       MATTHEW 6:24 "
1930 DATA" Behold the fowls of the air; for they  sow not, neither do they reap, nor      gather into barns, yet your heavenly    Father feedeth them. Are ye not much    better than they?                                                  MATTHEW 6:26 "
1940 DATA" .........,[be not anxious] saying,What shall we eat? or, What shall we drink?  or, With what shall we be clothed? For  after all these things do the Gentiles  seek. For your heavenly Father knoweth  that ye have need of all these....Mt6:32"
1950 DATA" Judge not, that ye be not judged. For  with what judgement ye judge, ye shall  be judged; and with what measure ye     [measure], it shall be measured to you  again.                                                            MATTHEW 7:1,2 "
1960 DATA" If ye then,being evil,know how to give good gifts unto your children, how much more shall your Father,who is in heaven,give good things to them that ask him?                                                                     MATTHEW 7:11 "
1970 DATA" Therefore, all things whatever ye wouldthat men should do to you, do ye even   so to them; for this is the law and the prophets.                                                          MATTHEW 7:12 "
1980 DATA"....... [narrow] is the gate, and [hard]is the way, which leadeth unto life, andfew there be that find it.                                                                                 MATTHEW 7:14 "
1990 DATA" Beware of false prophets, who come to  you in sheep's clothing, but inwardly   they are ravening wolves. Ye shall know them by their fruits. Do men gather     grapes of thorns, or figs of thistles?                          MATTHEW 7:15,16 "
2000 DATA"  Go thy way; and as thou hast believed,so be it done unto thee.                                           MATTHEW 8:13 "
2010 DATA"  Why are ye fearful, O ye of little    faith?                                                             MATTHEW 8:26 "
2020 DATA"  Why think ye evil in your hearts?                                                                         MATTHEW 9:4 "
2030 DATA"  Follow me.                MATTHEW 9:9 "
2040 DATA"  No man putteth a piece of new cloth onan old garment, for that which is put into fill it up taketh from the garment,  and the [tear] is made worse.                                      MATTHEW 9:16 "
2050 DATA"  Believe ye that I am able to do this? According to your faith be it unto you. See that no man know it.                                                                                MATTHEW 9:28-30 "
2060 DATA"  Heal the sick, cleanse the lepers,    raise the dead, cast out [demons];      freely ye have received, freely give.                                                                      MATTHEW 10:8 "
2070 DATA"  ... he that endureth to the end shall be saved.                                                              Mt.10:22 "
2080 DATA"The disciple is not above his [teacher],nor the servant above his lord.                                   MATTHEW 10:24 "
2090 DATA"  Fear them not, therefore; for there isnothing covered that shall not be       revealed; and hidden, that shall not be known. What I tell you in darkness, thatspeak in light.....                                            METTHEW 10:26,27 "
2100 DATA"  ... fear not them who kill the body,  but are not able to kill the soul; but  rather fear him who is able to destroy  both soul and body in hell.                                       MATTHEW 10:28 "
2110 DATA"  Whosoever, therefore, shall confess mebefore men, him will I confess also     before my Father, who is in heaven. But whosoever shall deny me before men, him will I also deny before my Father, who  is in heaven.          MATTHEW 10:32,33 "
2120 DATA" He that findeth his life shall lose it;and he that loseth his life for my sake shall find it.                                                    MATTHEW 10:39 "
2130 DATA"  He that receiveth you receiveth me,   and he that receiveth me receiveth him  that sent me.                                                     MATTHEW 10:40 "
2140 DATA" I am Alpha and Omega, the beginning andthe ending,....                                                  REVELATION 1:8 "
2150 DATA"  Behold, I stand at the door,and knock;if any man hear my voice, and open the  door, I will come in to him......                                                                       REVELATION 3:20 "
2160 DATA" ..behold, I come quickly, and my rewardis with me, to give every man according as his work shall be.                                                                                  REVELATION 22:12 "
2170 DATA"  ..., I am the light of the world;     he that followeth me shall not walk in  darkness, but shall have the light of   life.                                                                 JOHN 8:12 "
2180 DATA" ... It is not for you to know the timesor seasons, which the Father hath put   in his own power.                                                  THE ACTS 1:7 "
2190 DATA" .....It is more blessed to give than   to receive.                                                      THE ACTS 20:35 "
2200 DATA" ...Dost thou believe on the Son of God?                                                                      JOHN 9:35 "
2210 DATA" ......If I honor myself, my honor is   nothing;......                                                        JOHN 8:54 "
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0489

     Volume in drive A has no label
     Directory of A:\

    FILES489 TXT       817   3-30-87   3:36p
    GO       BAT         8   3-31-87   8:30a
    JESUS    BAS     18661   1-26-86  12:30p
    JESUS    EXE     44398   1-23-86   9:34p
            4 file(s)      63884 bytes
                           95232 bytes free
