---
layout: page
title: "PC-SIG Diskette Library (Disk #879)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0879/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0879"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BIORHYTHM MONTHLY SCHEDULE PROGRAM"

    Many people believe that the human body experiences a number of cycles
    every month or so.  Three major cycles run simultaneously but have
    differing periods so that one cycle may be expressing the beginning of a
    curve while another will be at the peak of its own curve at the same
    time.  It is believed that the overlapping and timing of these cycles or
    curves can be used to predict how you will perform in the future.
    
    BIO can calculate these biorhythm cycles for any person born after the
    year 1753.  The physical, emotional and intellectual cycles are marked
    by letters in columns for each day of the month, each letter showing how
    high or low that particular cycle is.  An asterisk indicates a critical
    day for that cycle.
    
    BIOCOMP.EXE compares the biorhythms of two persons, and will display
    the percentage of compatibility for each cycle.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIO.DOC

{% raw %}
```
  Applications of Biorhythms in Business and Professional Life
  ------------------------------------------------------------

                               By

                          Bill McGinnis
             Bill McGinnis Publications and Software
                         P. O. Box 2543
                      Alexandria, Va. 22301
                          July 5, 1987


The Basics of Biorhythm
-----------------------

    Biorhythm Theory states that each of us is influenced by
three biological cycles which begin at birth and continue
throughout our lives.

    The physical cycle is 23 days long and influences physical
factors such as eye-hand coordination, strength, endurance, and
resistance to disease.

    The emotional cycle is 28 days long and influences our emo-
tional states, affecting love/hate, optimism/pessimism, pas-
sion/coldness, depression/elation.

    The intellectual cycle is 33 days long and influences our
memory, alertness, speed of learning, reasoning ability, accuracy
of computation.

    At the moment of birth, according to Biorhythm Theory, each
cycle starts at a zero point and begins to rise in a positive
phase during which the energies and abilities are high.  (Engi-
neers will recognize the cycles as "sine waves" in their form.)
After reaching a positive peak, each cycle then gradually
declines, crossing its zero point midway through its period. . .
11 1/2 days for the physical, 14 days for the emotional, and 16
1/2 days for the intellectual.  The remainder of each cycle is a
negative phase, during which our energies and capabilities are
reduced.

    The most unstable times are the "critical days" in each
cycle, when the cycle crosses its zero point, changing from posi-
tive to negative or from negative to positive.  During these
critical days, the abilities vary wildly, from extremely high to
extremely low.  You may make brilliant discoveries or tragic log
ical errors on intellectually critical days.  You may win the
Super Bowl or throw ten interceptions on a physically critical
day. You may impulsively propose marriage or impulsively quit
your job on emotionally critical days.

                 Copyright 1987 by Bill McGinnis
    Ok to copy this document, as long as you don't change it.

Applications of Physical Biorhythms
-----------------------------------

1. Don't drive or operate dangerous equipment on physically crit-
ical days.  When walking, don't fall down.

2. In athletic competitions, your performance will either be very
good or very bad on physically critical days.

3. Don't undergo surgery on physically critical days. The risk is
too great.  If you are a doctor, don't perform surgery on physi-
cally critical days.

4. Try to schedule events requiring great exertion, such as long
trips or hikes or all-night parties, on physically positive days.
You will have more energy then.

5. Don't expect too much from yourself physically on physically
negative days. Don't try to stay up too late.  Don't drink too
much. Don't try to win any athletic events.

6. On physically negative days, do routine, easy tasks.  Get
plenty of rest.  Avoid cold drafts.

Applications of Emotional Biorhythms
------------------------------------

1. Don't trust your feelings on emotionally critical days.  Most
important, don't act on these feelings.  Never quit your job or
file for divorce or make any kind of big decision on an emotion
ally critical day.  You will likely regret it if you do!

2. If you are an artist or performer or poet or writer, some of
your most brilliant work will occur on emotionally critical days.
And some of your worst work will occur on these days, too.

3. If you need a burst of positive emotional energy to make a big
sale, or give a great speech, try to schedule the event on a pos-
itive emotional day.  Avoid emotionally negative days in these
cases.

4. Disregard negative, hopeless feelings on emotionally negative
days. These feeling will probably change on the positive days.


Applications of Intellectual Biorhythms
---------------------------------------

1. Don't expect great brain work on intellectually negative days.
You just won't get it.  For example, today is a very negative day
for me intellectually.  I tried to do some programming for a dif-
ficult new application a few hours ago.  I could not solve the
problems.  But I can write this document just fine, because this
is merely routine re-expression of ideas I already know.

2. Do routine brain work on intellectually negative days. . .
nothing that makes you think too much.  Don't try to win any
chess tournaments on intellectually negative days.

3.  Schedule events which demand quick thinking on intellectually
positive days.  Going to court, giving speeches, taking student
exams, solving abstract problems, all should be done on intellec-
tually positive days.

4.  On intellectually critical days, your mental performance may
be brilliant and it may be terrible.


Is This Biorhythm Stuff True or Not?
-----------------------------------

    I don't know for you, but it seems to work for me.  The only
way you will know if it works for you is to test it for your
self, on yourself and on your co-workers. In my opinion, there
has not been enough formal research done to either prove or dis-
prove Biorhythm Theory.  The evidence which supports Biorhythm
Theory seems to come mostly from those who are eager to prove the
theory is correct. The fact that nobody has yet hypothesized any
sober, coherent reasons WHY Biorhythm Theory might be true has
kept most serious researchers out of the picture.

    But it seems to work for me.  And I am told that the Japanese
have been using Biorhythms for years, mainly to reduce traffic
accidents and industrial accidents on physically critical days.


How Can Biorhythm Schedules be Obtained ?
-----------------------------------------

    If you have an IBM (or compatible) personal computer, the
easiest way to get Biorhythm schedules in a form you can use is
to purchase the Biorhythm Schedule computer program I wrote for
this purpose. The program costs only $25, and you can produce
Biorhythms for any day of any month of any year for anyone born
after the year 1753.  All you need is date of birth.  Historical
Biorhythms are loaded with possible excitement.  How about com-
puting the Biorhythms for Gen. George Pickett at the Battle of
Gettysburg (remember Pickett's charge)?  He was born January 28,
1825.  Or how about Sen. Edmund Muskie, who burst into tears on
national TV on February 26, 1972, thereby assuring his defeat in
the Democratic presidential nomination that year. He was born
March 28, 1914.

    In my system of reporting, the very positive days of a cycle
are A. The moderately positive days are B.  The moderately nega-
tive days are C.  The very negative days are D.  And the critical
days are indicated by *. So you are able to tell quickly what the
Biorhythm Scores are for each day of the month.


    You may order this program from me for $25 at P. O. 2543,
Alexandria, Va. 22301.  If you already have it, just enter BIO at
the prompt to make it run.

Biorhythmic Compatibility
-------------------------

    Using Biorhythms, it is actually possible to arrive at a
number which claims to tell how well-suited any two people are to
each other, Biorhythmically. For each cycle, a computation is
made to determine what percent of the time the two people will be
in the same phase (either positive or negative) together.  The
idea is that the closer you are in phase to the other person, the
more likely to get along you will be, if other factors are held
constant.  When the other person is strongest physically, you
will be strongest physically, etc.  Then the three scores are
averaged to arrive at an average compatibility factor.

    As you can imagine, it can be fascinating to compute the dif-
ferent compatibility levels of pairs of people you know.

    And in the workplace, Biorhythmic Compatibility can help
predict if any two people will be able to work together smoothly,
or if they will always seem to be "out of step" with each other.

    I have written a computer program which quickly calculates
Biorhythmic Compatibility for each cycle and for an average for
any two people.  This program is also $25, available by mail from
me at P. O. Box 2543, Alexandria, Va. 22301.  If you already have
it, just enter BIOCOMP at the prompt to make it run.

         THANKS FOR YOUR INTEREST, AND HAPPY COMPUTING!




             Bill McGinnis Publications and Software
                         P. O. Box 2543
                      Alexandria, Va. 22301







                 Copyright 1987 by Bill McGinnis
    OK to copy this document, as long as you don't change it.

```
{% endraw %}

## README.DOC

{% raw %}
```
                          Bill McGinnis Software
                              P. O. Box 2543
                          Alexandria, Va. 22301


                              July 23, 1987



Dear Software User:

    Welcome to the Bill McGinnis Software Release Disk #1!

    What we have here is three programs and some supporting files.  Two of
the programs are Biorhythm programs . . . BIO.EXE and BIOCOMP.EXE.  To
make them run, you just enter BIO or BIOCOMP, respectively.  The explana-
tion of biorhythms is found on BIO.DOC, an ASCII text file. The two files
AUTH.BMS and AUTHCOMP.BMS are companion files to BIO.EXE and BIOCOMP.EXE.
Neither program will run unless its companion file is present.  BIO.EXE is
the most useful Biorhythm program available today, in my opinion.

    The third program is PROP.EXE.  To make it run, just enter PROP at the
prompt.  Its companion file is PARAM.BMS.  PROP.EXE will not run unless
PARAM.BMS is also present.  The documentation for PROP.EXE is internal.
Just follow the prompts, and you will get the documentation.  PROP.EXE is
a universal proposal writer.  It produces one-page typed proposals, suit-
able for selling almost any product or service.  It can easily be user-
customized  to meet your particular needs.  This is a thoroughly busi-
ness-tested program.  I used it for two years in an auto repair business
before I generalized it.

    Everything here is shareware.  You may copy it all you want.  Just
please do not change anything.  Any questions or suggestions, please con-
tact me at the address above.

    Please send money.

                                Sincerely,




                              Bill McGinnis

```
{% endraw %}

## BIO.DOC

{% raw %}
```
  Applications of Biorhythms in Business and Professional Life
  ------------------------------------------------------------

                               By

                          Bill McGinnis
             Bill McGinnis Publications and Software
                         P. O. Box 2543
                      Alexandria, Va. 22301
                          July 5, 1987


The Basics of Biorhythm
-----------------------

    Biorhythm Theory states that each of us is influenced by
three biological cycles which begin at birth and continue
throughout our lives.

    The physical cycle is 23 days long and influences physical
factors such as eye-hand coordination, strength, endurance, and
resistance to disease.

    The emotional cycle is 28 days long and influences our emo-
tional states, affecting love/hate, optimism/pessimism, pas-
sion/coldness, depression/elation.

    The intellectual cycle is 33 days long and influences our
memory, alertness, speed of learning, reasoning ability, accuracy
of computation.

    At the moment of birth, according to Biorhythm Theory, each
cycle starts at a zero point and begins to rise in a positive
phase during which the energies and abilities are high.  (Engi-
neers will recognize the cycles as "sine waves" in their form.)
After reaching a positive peak, each cycle then gradually
declines, crossing its zero point midway through its period. . .
11 1/2 days for the physical, 14 days for the emotional, and 16
1/2 days for the intellectual.  The remainder of each cycle is a
negative phase, during which our energies and capabilities are
reduced.

    The most unstable times are the "critical days" in each
cycle, when the cycle crosses its zero point, changing from posi-
tive to negative or from negative to positive.  During these
critical days, the abilities vary wildly, from extremely high to
extremely low.  You may make brilliant discoveries or tragic log
ical errors on intellectually critical days.  You may win the
Super Bowl or throw ten interceptions on a physically critical
day. You may impulsively propose marriage or impulsively quit
your job on emotionally critical days.

                 Copyright 1987 by Bill McGinnis
    Ok to copy this document, as long as you don't change it.

Applications of Physical Biorhythms
-----------------------------------

1. Don't drive or operate dangerous equipment on physically crit-
ical days.  When walking, don't fall down.

2. In athletic competitions, your performance will either be very
good or very bad on physically critical days.

3. Don't undergo surgery on physically critical days. The risk is
too great.  If you are a doctor, don't perform surgery on physi-
cally critical days.

4. Try to schedule events requiring great exertion, such as long
trips or hikes or all-night parties, on physically positive days.
You will have more energy then.

5. Don't expect too much from yourself physically on physically
negative days. Don't try to stay up too late.  Don't drink too
much. Don't try to win any athletic events.

6. On physically negative days, do routine, easy tasks.  Get
plenty of rest.  Avoid cold drafts.

Applications of Emotional Biorhythms
------------------------------------

1. Don't trust your feelings on emotionally critical days.  Most
important, don't act on these feelings.  Never quit your job or
file for divorce or make any kind of big decision on an emotion
ally critical day.  You will likely regret it if you do!

2. If you are an artist or performer or poet or writer, some of
your most brilliant work will occur on emotionally critical days.
And some of your worst work will occur on these days, too.

3. If you need a burst of positive emotional energy to make a big
sale, or give a great speech, try to schedule the event on a pos-
itive emotional day.  Avoid emotionally negative days in these
cases.

4. Disregard negative, hopeless feelings on emotionally negative
days. These feeling will probably change on the positive days.


Applications of Intellectual Biorhythms
---------------------------------------

1. Don't expect great brain work on intellectually negative days.
You just won't get it.  For example, today is a very negative day
for me intellectually.  I tried to do some programming for a dif-
ficult new application a few hours ago.  I could not solve the
problems.  But I can write this document just fine, because this
is merely routine re-expression of ideas I already know.

2. Do routine brain work on intellectually negative days. . .
nothing that makes you think too much.  Don't try to win any
chess tournaments on intellectually negative days.

3.  Schedule events which demand quick thinking on intellectually
positive days.  Going to court, giving speeches, taking student
exams, solving abstract problems, all should be done on intellec-
tually positive days.

4.  On intellectually critical days, your mental performance may
be brilliant and it may be terrible.


Is This Biorhythm Stuff True or Not?
-----------------------------------

    I don't know for you, but it seems to work for me.  The only
way you will know if it works for you is to test it for your
self, on yourself and on your co-workers. In my opinion, there
has not been enough formal research done to either prove or dis-
prove Biorhythm Theory.  The evidence which supports Biorhythm
Theory seems to come mostly from those who are eager to prove the
theory is correct. The fact that nobody has yet hypothesized any
sober, coherent reasons WHY Biorhythm Theory might be true has
kept most serious researchers out of the picture.

    But it seems to work for me.  And I am told that the Japanese
have been using Biorhythms for years, mainly to reduce traffic
accidents and industrial accidents on physically critical days.


How Can Biorhythm Schedules be Obtained ?
-----------------------------------------

    If you have an IBM (or compatible) personal computer, the
easiest way to get Biorhythm schedules in a form you can use is
to purchase the Biorhythm Schedule computer program I wrote for
this purpose. The program costs only $25, and you can produce
Biorhythms for any day of any month of any year for anyone born
after the year 1753.  All you need is date of birth.  Historical
Biorhythms are loaded with possible excitement.  How about com-
puting the Biorhythms for Gen. George Pickett at the Battle of
Gettysburg (remember Pickett's charge)?  He was born January 28,
1825.  Or how about Sen. Edmund Muskie, who burst into tears on
national TV on February 26, 1972, thereby assuring his defeat in
the Democratic presidential nomination that year. He was born
March 28, 1914.

    In my system of reporting, the very positive days of a cycle
are A. The moderately positive days are B.  The moderately nega-
tive days are C.  The very negative days are D.  And the critical
days are indicated by *. So you are able to tell quickly what the
Biorhythm Scores are for each day of the month.


    You may order this program from me for $25 at P. O. 2543,
Alexandria, Va. 22301.  If you already have it, just enter BIO at
the prompt to make it run.

Biorhythmic Compatibility
-------------------------

    Using Biorhythms, it is actually possible to arrive at a
number which claims to tell how well-suited any two people are to
each other, Biorhythmically. For each cycle, a computation is
made to determine what percent of the time the two people will be
in the same phase (either positive or negative) together.  The
idea is that the closer you are in phase to the other person, the
more likely to get along you will be, if other factors are held
constant.  When the other person is strongest physically, you
will be strongest physically, etc.  Then the three scores are
averaged to arrive at an average compatibility factor.

    As you can imagine, it can be fascinating to compute the dif-
ferent compatibility levels of pairs of people you know.

    And in the workplace, Biorhythmic Compatibility can help
predict if any two people will be able to work together smoothly,
or if they will always seem to be "out of step" with each other.

    I have written a computer program which quickly calculates
Biorhythmic Compatibility for each cycle and for an average for
any two people.  This program is also $25, available by mail from
me at P. O. Box 2543, Alexandria, Va. 22301.  If you already have
it, just enter BIOCOMP at the prompt to make it run.

         THANKS FOR YOUR INTEREST, AND HAPPY COMPUTING!




             Bill McGinnis Publications and Software
                         P. O. Box 2543
                      Alexandria, Va. 22301







                 Copyright 1987 by Bill McGinnis
    OK to copy this document, as long as you don't change it.

```
{% endraw %}

## FILES879.TXT

{% raw %}
```
Disk No  879
Program Title:  BIORHYTHM MONTHLY SCHEDULE PROGRAM
PC-SIG version 1
 
    BIO can calculate the biorhythm cycles for any person born after the
year 1753. After a birthdate is entered, the program calculates the
biorhythms of a specified month and year. The physical, emotional, and
intellectual cycles are marked by letters in columns for each day of the
month, each letter showing how high or low that particular cycle is. An
asterisk indicates a critical day for that cycle. BIOCOMP.EXE compares the
biorhythms of two persons, and will display the percentage of compatibility
for each cycle. PROP.EXE is a universal proposal writer. It produces
one-page typed proposals, suitable for selling almost any product or
service. It can easily be user-customized to meet your own particular
needs.
 
Usage: Biorhythms
 
System Requirements: 90K memory and one disk drive.
 
How to Start: Enter BIO (press enter).
 
Suggested Registration: $25 for BIO, $10 for BIOCOMP.
 
File Descriptions:
 
README   DOC  Program introduction
AUTH     BMS  Companion file for BIO.EXE
BIOCOMP  EXE  Biorhythm compatibility
AUTHCOMP BMS  Companion file for BIOCOMP.EXE
PROP     EXE  Proposal Writer program
PARAM    BMS  Companion file for PROP.EXE
BIO      DOC  Documentation
BIO      EXE  BIORHYTHM program
BIO      ARC  Archive of programs on this disk
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk No 879 BIORHYTHM MONTHLY SCHEDULE PROGRAM  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, Type:                        ║
║                        COPY *.DOC PRN (press enter)                     ║
║                                                                         ║
║ To start BIORHYTHM, Type: BIO (press enter)                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
                          Bill McGinnis Software
                              P. O. Box 2543
                          Alexandria, Va. 22301


                              July 23, 1987



Dear Software User:

    Welcome to the Bill McGinnis Software Release Disk #1!

    What we have here is three programs and some supporting files.  Two of
the programs are Biorhythm programs . . . BIO.EXE and BIOCOMP.EXE.  To
make them run, you just enter BIO or BIOCOMP, respectively.  The explana-
tion of biorhythms is found on BIO.DOC, an ASCII text file. The two files
AUTH.BMS and AUTHCOMP.BMS are companion files to BIO.EXE and BIOCOMP.EXE.
Neither program will run unless its companion file is present.  BIO.EXE is
the most useful Biorhythm program available today, in my opinion.

    The third program is PROP.EXE.  To make it run, just enter PROP at the
prompt.  Its companion file is PARAM.BMS.  PROP.EXE will not run unless
PARAM.BMS is also present.  The documentation for PROP.EXE is internal.
Just follow the prompts, and you will get the documentation.  PROP.EXE is
a universal proposal writer.  It produces one-page typed proposals, suit-
able for selling almost any product or service.  It can easily be user-
customized  to meet your particular needs.  This is a thoroughly busi-
ness-tested program.  I used it for two years in an auto repair business
before I generalized it.

    Everything here is shareware.  You may copy it all you want.  Just
please do not change anything.  Any questions or suggestions, please con-
tact me at the address above.

    Please send money.

                                Sincerely,




                              Bill McGinnis

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0879

     Volume in drive A has no label
     Directory of A:\

    AUTH     BMS       373   1-01-80  12:18a
    AUTHCOMP BMS       373   1-01-80  12:07a
    BIO      ARC    114425   7-24-87  12:42a
    BIO      DOC      9088   7-05-87  12:08a
    BIO      EXE     49456   7-24-87  12:42a
    BIOCOMP  EXE     44788   7-08-87  12:33a
    FILES879 TXT      1487  12-03-87   8:50a
    GO       BAT        38  12-01-87  11:43a
    GO       TXT       617  12-01-87  11:54a
    PARAM    BMS      2369   1-01-80  12:02a
    PROP     EXE     89142   7-16-87   3:14a
    README   DOC      1792   7-23-87   1:41a
           12 file(s)     313948 bytes
                            2048 bytes free
