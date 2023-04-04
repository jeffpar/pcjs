---
layout: page
title: "PC-SIG Library Disk #1668"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1668/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1668"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPEECH"

    SPEECH is a program which generates speech and makes it possible for
    your computer to actually speak to you through its internal speaker.
    SPEECH is a "terminate and stay resident" program which becomes
    available as a background function, usable by other programs.  An
    additional program is included, SAY, which passes its command line
    arguments to the SPEECH function, thus allowing batch files to generate
    speech.
    
    SPEECH supports thirty-six phonemes, which are specified as one of two
    character codes, such as, a, ae, ah, b, ch, etc.  Phonemes may be given
    either upper or lower case.  Phonemes are separated with a dash and
    words are separated with a space.  For example, to say "this is a test",
    you would type; tz-ih-s ih-z ah t-eh-s-t-t.  This disk gives examples
    of how to say the cardinal numbers, the ordinal numbers, the
    letters of the alphabet, and over fifty different words.
    
    SPEECH is easy to use, comes fully documented, and can teach your
    computer to talk like a parrot.  AT and 386 users will need to slow
    their computers down to about 7.5 MHz in order to be able to understand
    the computer voice.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TALKDEMO.BAS

```bas
10 'Sample program demonstrating the SPEECH program
20 'by Vincent Poy
30 'Copyright 1984,
40 'All Rights Reserved.
50 '
60 SCREEN 0,1,0:WIDTH 40:LOCATE ,,0:COLOR 7,0,0:CLS:KEY OFF
70 NUMBER = 15
80 DIM TALK$(NUMBER)
90 DIM DISPLAY$(NUMBER)
100 FOR I=1 TO NUMBER:READ TALK$(I):NEXT I
110 FOR I=1 TO NUMBER:READ DISPLAY$(I):NEXT I
120 'Each TALK$ in array represents sentences to be passed to SPEECH.
130 'Each DISPLAY$ in array is an English sentence representing each TALK$.
140 FOR I=1 TO NUMBER
150 GOSUB 1010   'Print sentence.
160 GOSUB 1030   'Pass string to SPEECH.
170 GOSUB 1050   'Delay
180 NEXT I
190 RESTORE 1370:FOR I=1 TO 8:FOR J=1 TO 11:READ X:READ C:COLOR C:PRINT CHR$(X);:NEXT J:PRINT:NEXT I:FOR I=1 TO 2000:NEXT I
200 CLS:RESTORE 2000:I=0
210 NUMBER = 15        'redefine (read second set of strings)
220 ERASE TALK$:ERASE DISPLAY$          'clear old arrays
230 DIM TALK$(NUMBER)   'redimension array
240 DIM DISPLAY$(NUMBER)        'same thing
250 FOR I=1 TO NUMBER:READ TALK$(I):NEXT I
260 FOR I=1 TO NUMBER:READ DISPLAY$(I):NEXT I
270 FOR I=1 TO NUMBER
280 GOSUB 1010          'Print sentence.
290 GOSUB 1030          'Pass string to SPEECH.
300 GOSUB 1050          'Delay
310 NEXT I
900 END
1000 'Subroutines follow.
1010 PRINT DISPLAY$(I):PRINT     'Print it on screen.
1020 RETURN
1030 DEF SEG=0:SPEECH=972:CALL SPEECH (TALK$(I))         'pass string to SPEECH.
1040 RETURN
1050 FOR J=1 TO 300:NEXT         'Delay loop
1060 RETURN
1070 DATA"S-P-EE-CH B-I V-I-N-C-ENT P-OY
1080 DATA "k-ah-p-ee-r-i-t d-ee-s-eh-m-b-uh-r s-eh-k-uh-n-d n-i-n-t-ee-n h-uh-n-d-r-eh-d a-t-ee th-r-ee"
1090 DATA "aw-l r-i-t-s r-ee-s-u-r-v-d"
1100 DATA "a-ee b-ee s-ee d-ee ee-ee eh-f j-ee a-ch i j-a k-a eh-l eh-m eh-n oh-w p-ee k-y-oo ah-r eh-s t-ee y-oo v-ee d-uh-b-l-y-oo eh-k-s w-i z-ee"
1110 DATA "z-ee-r-oh w-uh-n t-oo th-r-ee f-oh-r f-i-v s-ih-k-s s-eh-v-eh-n a-a-t n-i-n t-eh-n"
1120 DATA "tz-uh r-a-ih-n ih-n s-p-a-ih-n"
1130 DATA "f-ah-l-l-s j-eh-n-t-l-ee ah-n tz-uh p-l-a-ih-n"
1140 DATA "h-ae-s ae-n-ee-b-ah-d-ee s-ee-n m-i d-aw-g"
1150 DATA "h-ih-s n-a-m ih-s ch-ah-r-l-ee"
1160 DATA "ae-n-d i m-ih-s h-ih-m v-ae-r-ee v-ae-r-ee m-uh-ch"
1170 DATA "tz-ih-s ih-s ae-n ee-m-r-j-eh-n-s-ee"
1180 DATA "uh k-ih-l-r t-uh-m-a-t-oh h-ae-s j-uh-s-t uh-t-ae-k-t"
1190 DATA "ae-n-d ih-s ee-t-ih-n-g tz-uh s-ih-t-ee"
1200 DATA "l-u-k ah-w-t"
1210 DATA "h-ee-r ih-t k-uh-m-s"
1220 DATA "SPEECH by Vincent Poy"
1230 DATA "Copyright 1988,"
1240 DATA "All Rights Reserved."
1250 DATA "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
1260 DATA "0,1,2,3,4,5,6,7,8,9,10"
1270 DATA "The rain in Spain..."
1280 DATA "falls gently on the plain."
1290 DATA "Has anybody seen my dog?"
1300 DATA "His name is Charlie..."
1310 DATA "and I miss him very very much."
1320 DATA "This is an emergency..."
1330 DATA "A killer tomato has just attacked..."
1340 DATA "and is eating the city!"
1350 DATA "Look out!"
1360 DATA "Here it comes!!!"
1370 DATA 32,7,32,7,32,7,219,2,32,7,219,2,32,7,219,2,32,7,32,7,32,7
1380 DATA 32,7,32,7,219,2,219,4,219,4,219,4,219,4,219,4,219,2,32,7,32,7
1390 DATA 32,7,32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7,32,7
1400 DATA 32,7,219,4,219,4,32,7,219,15,219,4,32,7,219,15,219,4,219,4,32,7
1410 DATA 32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7
1420 DATA 32,7,219,4,219,4,219,4,219,12,32,7,32,7,219,4,219,4,219,4,32,7
1430 DATA 32,7,32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7,32,7
1440 DATA 32,7,32,7,32,7,219,4,219,4,219,4,219,4,219,4,32,7,32,7,32,7
2000 DATA "tz-ih-s ih-s tz-uh w-a-ee w-ee t-eh-l s-p-ee-ch"
2010 DATA "h-aw-w t-oo t-aw-k"
2020 DATA "k-uh-n-s-ih-d-r tz-uh f-ah-l-oh-w-ih-n-g s-eh-n-t-eh-n-s"
2030 DATA "        "
2040 DATA "w-ee w-u-d b-r-a-k tz-ih-s s-eh-n-t-eh-n-s"
2050 DATA "d-ah-w-n l-i-k tz-ih-s"
2060 DATA "tz-uh m-ae-n ih-n tz-uh m-oo-n"
2070 DATA "ih-s d-ae-n-s-ih-n-g        "
2080 DATA "uh f-oh-n-eh-m ih-s uh b-a-s-ih-k s-ah-w-n-d y-oo-n-ih-t"
2090 DATA "tz-uh s-p-ee-ch p-r-oh-g-r-ae-m ih-s k-a-p-uh-b-uh-l"
2100 DATA "uh-f r-ee-p-r-oh-d-oo-s-ih-n-g th-u-r-t-ee s-ih-k-s f-oh-n-eh-m-s"
2110 DATA "y-oo-s-ih-n-g tz-ee-s f-oh-n-eh-m-s"
2120 DATA "ih-n d-ih-f-uh-r-eh-n-t k-ah-m-b-ih-n-a-sh-uh-n-s"
2130 DATA "g-ih-v-s uh-s tz-uh ae-b-ih-l-ih-t-ee t-oo k-r-ee-a-t"
2140 DATA "l-ih-m-ih-t-l-eh-s-s v-oh-k-ae-b-y-oo-l-ae-r-ee s-p-ee-ch"
3000 DATA "This is the way we tell SPEECH..."
3010 DATA "how to talk."
3020 DATA "Consider the following sentence..."
3030 DATA "The man in the moon is dancing."
3040 DATA "We would break this sentence..."
3050 DATA "down like this..."
3060 DATA "tz-uh m-ae-n ih-n tz-uh m-oo-n"
3070 DATA "ih-s d-ae-n-s-ih-n-g"
3080 DATA "A phoneme is a basic sound unit."
3090 DATA "The SPEECH program is capable..."
3100 DATA "of reproducing 36 phonemes."
3110 DATA "Using these phonemes..."
3120 DATA "in different combinations..."
3130 DATA "gives us the ability to create..."
3140 DATA "limitless vocabulary speech."
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1668

     Volume in drive A has no label
     Directory of A:\

    FILE1668 TXT      3701  11-22-89  10:16a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848  11-22-89  12:31p
    MAXHEAD2 COM     35984   1-10-87   8:31p
    MAXHEAD2 DAT      7680   1-10-87   8:31p
    REGIST   TXT      5197  10-02-88   8:31p
    SAY      ASM      2124   3-21-86   3:47p
    SAY      COM        97   3-12-86  11:24p
    SAY      DOC      9734  10-02-88   8:21p
    SAYTIME  ASM      6184   3-22-86  12:41p
    SAYTIME  COM       837   3-21-86   3:44p
    SAYTIME  SAL      4919   3-21-86   3:43p
    SPEECH   COM     21376   8-19-85   8:16p
    SPEECH   DOC      8927  10-02-88   8:32p
    TALKDEMO BAS      4465   9-21-88  10:02p
           15 file(s)     112111 bytes
                           43520 bytes free
