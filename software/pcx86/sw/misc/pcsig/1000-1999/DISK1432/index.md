---
layout: page
title: "PC-SIG Diskette Library (Disk #1432)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1432/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1432"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RADIO REPAIR & RADIATION"

    "Who knows what evil lurks in the hearts of all men?  The Shadow knows!"
    Old radio shows are again playing on the air, capturing the ears and
    imaginations of a generation that has never heard of a cat's whisker
    tuner or a carbon arc transmitter!  Now, what could be better than
    listening to these great moments from the Golden Age of radio on an
    antique radio you've restored yourself?
    
    RADIO is a preliminary course on "How to service and restore antique
    radios."  Fixing up old radios can be a rewarding hobby, particularly as
    antique radios have become collectors items!  The quintessence of
    nostalgia, many of these old radios are lying around in attics and at
    junk shops -- waiting for someone to see past the dust and bring them
    back to life!
    
    This how-to booklet on disk reveals the simple test equipment you will
    need and guides you, step-by-step, through the process of checking and
    repairing each component of an antique radio to restore it to top-notch
    condition.  A vacuum tube guide is provided, as well as the RMA color
    code for power transformers, audio-frequency transformers,
    intermediate-frequency transformers, and speaker field coils.
    
    RADIATION EXPOSURE CALCULATOR calculates your approximate yearly
    radiation exposure from a variety of sources, including your computer
    monitor!  The radiation data used by this program was compiled from a
    recent study by the Department of Commerce.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1432.TXT

{% raw %}
```
Disk No: 1432
Program Title: RADIO and RADIATION EXPOSURE CALCULATOR
PC-SIG version 1

"Who knows what evil lurks in the hearts of all men?  The Shadow knows!"
Old radio shows are again playing on the air, capturing the ears and
imaginations of a generation that has never heard of a cat's whisker
tuner or a carbon arc transmitter!  Now, what could be better than
listening to these great moments from the Golden Age of radio on an
antique radio you've restored yourself?

RADIO is a preliminary course on "How to service and restore antique
radios."  Fixing up old radios can be a rewarding hobby, particularly as
antique radios have become collectors items!  The quintessence of
nostalgia, many of these old radios are lying around in attics and at
junk shops---waiting for someone like yourself to see past the dust and
bring them back to life!

This how-to booklet on disk reveals the simple test equipment you will
need and guides you, step-by-step, through the process of checking and
repairing each component of an antique radio to restore it to top notch
condition.  A vacuum tube guide is provided as well as the RMA color
code for power transformers, audio-frequency transformers,
intermediate-frequency transformers, and speaker field coils.

RADIATION EXPOSURE CALCULATOR calculates your approximate yearly
radiation exposure from a variety of sources, including your computer
monitor!  The radiation data used by this program was compiled from
a recent study by the Department of Commerce.

Synopsis:  Tells you approximately how many rems of radiation you are
absorbing each year.

Synopsis:  How to restore antique radios for fun and profit.

Usage:  Electronics/Antique Radio Repair/Collecting and
Health/Safety/Personal Radiation Level Exposure.

Special Requirements:  Word processor or text editor needed to read
the file.

How to Start:  Type GO (press enter)

Suggested Registration:  $5.00 for RADIO and $6.00 for RADIATION.

File Descriptions:

RADIO    TXT  Text program.
READ     TXT  Text file.
R        EXE  Radiation program.
README   TXT  Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## RADIO.TXT

{% raw %}
```
                    ANTIQUE RADIO REPAIR : a short course
 
   INTRODUCTION: It really doesn't require a great deal of test equipment or
 
technical savvy to restore an antique radio to top notch condition.  You
 
should however have some knowledge of the fundamentals of electronics (how
 
tubes work to amplify a signal, the differences between a TRF receiver and a
 
superhet, how diodes rectify, how power supplies work, etc, etc...) in order
 
to fully utilize the following material.  If you need assistance in getting a
 
better grasp of the these fundamentals, your library may have a few books on
 
the subject.  Now as far as test equipment is concerned, you should have three
 
items: a good 20,000 (or greater) ohms/volt VOM, a signal tracer with a
 
demodulator probe, and a schematic diagram of the radio receiver you are
 
working on.  The VOM can be purchased from Radio Shack, the signal tracer can
 
be purchased in kit form from Heath Company.  By the way, the manual that
 
comes with the signal tracer will give basic troubleshooting procedures.  One
 
other item will be helpful at times, and this is an RF signal generator which
 
is also available from the Heath Company in kit form, but you can buy this
 
later after you become more proficient at troubleshooting.  Most experts also
 
mandate using an isolation transformer for safety, but later I will suggest an
 
alternative.
 
  The first step in troubleshooting a dead (no sound from speaker) radio is to
 
see if the tubes light up.  As you can see from an (older) textbook, radio's
 
with a power transformer have their filaments wired in parallel and are
 
supplied with AC voltage from a winding on the power transformer.  Therefore
 
suppose the radio you are working on is dead, has a power transformer and one
 
of the tubes is not lit.  You will probably find the tube not lit to have an
 
open filament, which can be verified by removing the tube from the socket and
 
measuring its filament resistance with the lowest range of your ohmmeter.  If
 
you don't get a reading, the filament is open and you have found the trouble.
 
Now suppose that all tubes were not lit.  In this case the problem is caused
 
by either a faulty AC line plug, an open line cord, a defective fuse in the
 
primary of the power transformer (if one exists), a defective on/off switch,
 
or a bad winding on the power transformer.  By the way, power transformers
 
rarely go bad.  ALWAYS BE ON THE LOOKOUT FOR BAD SOLDER JOINTS !!!!!!!!
 
Now lets suppose the radio you are working on is dead (no sound from the
 
speaker), and has no power transformer.  Your textbook will show that radio's
 
without a power transformer wire the filaments in series with the on/off
 
switch, line cord and line plug.  As you can see, an open in any one of the
 
above will cause the filaments not to be lit.  Again, you can use your
 
ohmmeter, but an open tube filament is probably the cause of failure.
 
   What do you do if you find a bad RESISTIVE LINE CORD?  Replace it with a
 
regular line cord, but install a resistor in series with the tube filaments.
 
How do you calculate the resistor value?  First look up the filament voltage
 
for each tube in a tube manual.  The resistor is equal to 120 minus the sum of
 
the filament voltages, divided by the filament current (of one tube only) in
 
amperes.  Now wasn't that easy!  Its wattage is equal to 120 minus the sum of
 
the filament voltages, times itself, and divided by the resistance value you
 
just calculated.  FOLLOW YOUR WIRING DIAGRAM!!!!!!
 
   Lets talk about another easily corrected problem.  When you turn the tuning
 
knob, the frequency pointer remains stationary.  At this point, you must
 
remove the chassis from the cabinet by removing the screws from the bottom and
 
back of the cabinet.  It will also be necessary to pull off the front knobs.
 
Be very careful, I can't give explicit directions as each model is different.
 
As you can see, a drive mechanism moves the frequency pointer as the tuning
 
knob is turned.  But look....the dial cord which goes from pulley to pulley is
 
broken!  Replace that cord with a new dial cord, but work on the radio with
 
the tuning capacitor in the closed position.  This will prevent damaging the
 
capacitor and will insure that the frequency pointer will point to 550 KC on
 
the dial when the tuning capacitor is closed, which is the way it's supposed
 
to be.  But before you replace the chassis and speaker, it would be a good
 
idea to see if the radio plays.  READ AND HEED THE NEXT SENTENCE!!!  Whenever
 
working on a transformerless radio, you must insert the line plug in the wall
 
socket so that no AC voltage can be measured on your VOM between the metal
 
chassis and a good ground.  If you don't get 0 volts AC, reverse the line
 
plug.  This procedure is done with the ON/OFF switch "on", and must be done
 
each time you work on AC/DC radios, so that you don't receive a jolt each time
 
you touch the chassis!  ........REMEMBER, A SHOCK CAN BE LETHAL !!!!!
 
   As you know from your studies, the power supply supplies the needed DC
 
voltages to the tubes, without which the radio will not play.  Even a low
 
supply voltage may causes problems.  The power supply output (or B+) can
 
become deficient in (3) ways.  Either it's missing, is low in value, or has an
 
excess AC ripple content.  Missing B+ is caused by either a defective
 
rectifier tube or an open filter resister or choke coil.  Tube failure can be
 
verified by substitution with a good tube, and the open filter can be verified
 
with your ohmmeter.  A low B+ can also be caused by a bad rectifier tube.
 
Excess AC ripple manifests itself as HUM in the speaker, and is caused by a
 
defective electrolytic capacitor in the filter network.  The electrolytic
 
capacitor is the big CAN you see on top of the chassis.  If you cannot find a
 
CAN type replacement, install a terminal strip on the underside of the chassis
 
and relocate the wiring from the bad capacitor to the strip adding new tubular
 
(with identical ratings) electrolytic capacitors.  For esthetic reasons leave
 
the defective CAN on the chassis.
 
   Now let's review the signal tracer.  It's nothing more than a high gain
 
amplifier with a demodulator probe.  As you probably know, the electronic
 
circuitry between the antenna and speaker of an AM radio amplify and modify
 
the received transmitted signal.  Each stage has an input and an output, and
 
we use the tracer to methodically trace the development of the signal through
 
the defective radio.  For example, suppose we have on the bench a radio with
 
no output from the speaker even with the volume control fully clockwise.  We
 
also observe that all filaments are lit.  Now lets use the signal tracer to
 
find the defective circuitry!  The first thing we must do is set the frequency
 
pointer of the defective radio to a known local station.  We can double check
 
the pointer accuracy by touching the CONTROL GRID of the RF AMPLIFIER tube
 
with the demodulator probe.  WE NOW HEAR THE LOCAL RADIO STATION from the
 
signal tracer speaker!  Next we touch the PLATE of the RF AMPLIFIER tube, the
 
grid and plate of the CONVERTER tube, and the control grid and plate of both
 
IF AMPLIFIER tubes.  At each location we hear the local station, so we shift
 
the probe to the control grid of the FIRST AUDIO AMPLIFIER tube.  Again we
 
hear the signal, but when we touch the plate we hear nothing.  We have found
 
the defective stage!  The next thing we do is substitute another good tube for
 
the AUDIO AMPLIFIER tube, but this doesn't help, so we get out our trusty old
 
VOM and start taking DC voltage readings.  We check the plate and find o volts
 
DC.  The diagram says it should be 65V, so we turn off power, unplug the line
 
cord, and start taking resistance readings of the plate circuitry.  WE FOUND
 
IT!  The load resister is open, it should read 7500 ohms.  With an open load
 
resister, the plate receives no voltage, so the tube stopped amplifying.  We
 
replace it and the radio plays....end of story.
 
   Restoring an old radio also means returning the cabinet to its original
 
condition.  Tuning knobs and dial plate should also look original.  You can
 
find needed parts by advertising in ANTIQUE RADIO CLASSIFIED, or by writing to
 
its advertisers.  All this may sound like hard work, but the rewards make it
 
all worthwhile.
 
                                SERVICING TIPS
 
1. When working on live circuitry, do so with extreme care. A shock probably
 
   will not be fatal, but your response from it may cause you to jerk and
 
   cause some other problem such as knocking over and damaging the radio
 
   your working on, or upsetting the soldering iron.
 
2. Keep your soldering iron in an approved holder when HOT.
 
3. A 100 watt iron or gun is adequate for servicing antique radios. Get one
 
   with a small sharp tip. RADIO SHACK can supply the necessary hand tools.
 
4. Become proficient at soldering before working on a radio, as poor soldering
 
   techniques may introduce more defects in the radio your working on.
 
5. Don't change parts on a whim. Do so only after careful investigation.
 
   Unnecessary probing and movement of parts may introduce additional defects.
 
6. Train yourself to see trouble. Always be on the lookout for bad solder
 
   joints and overheated parts. They may be the cause of trouble.
 
7. Before turning the radio "on", make sure the correct tube type is in the
 
   correct tube socket. It's also a good idea to check the tubes on a tube
 
   tester before appling AC.
 
 8. KEEP A FIRE EXTINGUISHER IN YOUR WORK AREA !
 
   The following is a list of some of the more popular tubes used in antique
 
radios. REMEMBER ... WHEN REMOVING A TUBE FROM ITS SOCKET, DO SO VERY CARE-
 
FULLY as the tube probably has lost rigidity due to aging !
 
TUBE                          FILAMENT     ------------PIN NUMBER-------------
TYPE      FUNCTION           volts amps    FIL-CT   K   P    G1 G2 G3 G4 G5 G6
 
01A       Amplifier          5.0   .25     1-4          2    3
2A3       Power Amplifier    2.5  2.50     1-4          2    3
2A5       Power Amplifier    2.5  1.75     1-6      5   2    4  3  5
2A7       Converter          2.5   .80     1-7      6   2    5  4  3  C  3
2B7       Amplifier          2.5   .80     1-7      6   2    C  3  6
          Detector                                      4,5
5U4       Rectifier          5.0  3.00     2-8          4,6
5V4       Rectifier          5.0  2.00     2-8      8   4,6
5Y3       Rectifier          5.0  2.00     2-8          4,6
5Z3       Rectifier          5.0  3.00     1-4          2,3
6A7/6A7S  Converter          6.3   .30     1-7      6   2    5  4  3  C  3
6A8       Converter          6.3   .30     2-7      8   3    5  6  4  C  4
6B7       Amplifier          6.3   .30     1-7      6   2    C  3  6
          Detector                                      4,5
6C5       Amplifier          6.3   .30     2-7      8   3    5
6C6       Amplifier          6.3   .30     1-6      5   2    C  3  4
6C7       Amplifier          6.3   .30     1-7      6   2    C
          Detector                                      4,5
6D6       Amplifier          6.3   .30     1-6      5   2    C  3  4
6F6       Power Amplifier    6.3   .70     2-7      8   3    5  4  8
6F7/6F7S  Amplifier          6.3   .30     1-7      6   2    C  3  6
          Amplifier                                     4    5
6G6       Power Amplifier    6.3   .15     2-7      8   3    5  4  8
6H6       Rectifier          6.3   .30     2-7      8   5
          Rectifier                                 4   3
6J5       Amplifier          6.3   .30     2-7      8   3    5
6K6       Power Amplifier    6.3   .40     2-7      8   3    5  4  8
6K7       Amplifier          6.3   .30     2-7      8   3    C  4  5
6K8       Mixer              6.3   .30     2-7      8   3    5  4  C  4
          Oscillator                                    6    5
6Q7       Amplifier          6.3   .30     2-7      8   3    C
          Detector                                      4,5
6SA7      Converter          6.3   .30     2-7      6   3    5  4  8  4  6
6SC7      Amplifier          6.3   .30     7-8      6   5    4
          Amplifier                                     2    3
6SK7      Amplifier          6.3   .30     2-7      5   8    4  6  3
6SQ7      Amplifier          6.3   .30     7-8      3   6    2
          Detector                                      4,5
6U5/6G5   Indicator          6.3   .30     1-6      5   2    3  (target=pin 4)
6U6       Power Amplifier    6.3   .75     2-7      8   3    5  4  8
6U7       Amplifier          6.3   .30     2-7      8   3    C  4  5
6V6       Power Amplifier    6.3   .45     2-7      8   3    5  4  8
6V7       Amplifier          6.3   .30     2-7      8   3    C
          Detector                                      4,5
6W5       Rectifier          6.3   .90     2-7      8   3,5
6W6       Power Amplifier    6.3  1.25     2-7      8   3    5  4  8
6X5       Rectifier          6.3   .60     2-7      8   3,5
6ZY5      Rectifier          6.3   .30     2-7      8   3,5
7A4       Amplifier          6.3   .30     1-8      7   2    6
7A5       Power Amplifier    6.3   .75     1-8      7   2    6  3  7
7A6       Rectifier          6.3   .15     1-8      2   3
          Rectifier                                 7   6
7A7       Amplifier          6.3   .30     1-8      7   2    6  3  4
7A8       Converter          6.3   .15     1-8      7   2    4  3  5  6  5  7
7B4       Amplifier          6.3   .30     1-8      7   2    6
7B5       Power Amplifier    6.3   .40     1-8      7   2    6  3  7
7C5       Power Amplifier    6.3   .45     1-8      7   2    6  3  7
7C6       Amplifier          6.3   .15     1-8      7   2    3
          Detector                                      5,6
7E6       Amplifier          6.3   .30     1-8      7   2    3
          Detector                                      5,6
 
 
TUBE                          FILAMENT     ------------PIN NUMBER-------------
TYPE      FUNCTION           volts amps    FIL-CT   K   P    G1 G2 G3 G4 G5 G6
 
7F7       Amplifier          6.3   .30     1-8      2   3    4
          Amplifier                                 7   6    5
7G7/1232  Amplifier          6.3   .45     1-8      7   2    6  3  4
7H7       Amplifier          6.3   .30     1-8      7   2    6  3  4
7L7       Amplifier          6.3   .30     1-8      7   2    6  3  4
7N7       Amplifier          6.3   .60     1-8      2   3    4
          Amplifier                                 7   6    5
7Q7       Converter          6.3   .30     1-8      7   2    4  3  6  3  5
7R7       Amplifier          6.3   .30     1-8      7   2    6  5  7
          Detector                                      3,4
7S7       Mixer              6.3   .30     1-8      7   2    6  5  4  5  7
          Oscillator                                    3    4
7V7       Amplifier          6.3   .45     1-8      7   2    6  3  4
7Y4       Rectifier          6.3   .50     1-8      7   3,6
12SA7     Converter         12.6   .15     2-7      6   3    5  4  8  4  1
12SK7     Amplifier         12.6   .15     2-7      5   8    4  6  3
12SQ7     Amplifier         12.6   .15     7-8      3   6    2
          Detector                                      4,5
15        RF Amplifier       2.0   .22     1-5      4   2    C  3  4
19        Power Amplifier    2.0   .26     1-6          2    3
          Power Amplifier                               5    4
24A/24S   RF Amp-Detector    2.5  1.75     1-5      4   2    C  3
25A6      Power Amplifier   25.0   .30     2-7      8   3    5  4  8
25L6      Power Amplifier   25.0   .30     2-7      8   3    5  4  8
25Z5      Rectifier         25.0   .30     1-6      4   5
          Rectifier                                 3   2
26        Amplifier          1.5  1.05     1-4          2    3
27/27S    Det-Amplifier      2.5  1.75     1-5      4   2    3
30        Det-Amplifier      2.0   .06     1-4          2    3
33        Power Amplifier    2.0   .26     1-5          2    3  4  5
35/35S    Amplifier          2.5  1.75     1-5      4   2    C  3
35L6      Power Amplifier   35.0   .15     2-7      8   3    5  4  8
35Z5      Rectifier         35.0   .15     2-7 3    8   5
36        RF Amp-Detector    6.3   .30     1-5      4   2    C  3
39/44     AF-RF Amplifier    6.3   .30     1-5      4   2    C  3  4
41        Power Amplifier    6.3   .41     1-6      5   2    4  3  5
42        Power Amplifier    6.3   .65     1-6      5   2    4  3  5
43        Power Amplifier   25.0   .30     1-6      5   2    4  3  5
45        Power Amplifier    2.5  1.50     1-4          2    3
46        Power Amplifier    2.5  1.75     1-5          2    3  4
47        Power Amplifier    2.5  1.75     1-5          2    3  4
50C6      Power Amplifier   50.0   .15     2-7      8   3    5  4  8
50L6      Power Amplifier   50.0   .15     2-7      8   3    5  4  8
55        Amplifier          2.5  1.00     1-6      5   2    C
          Detector                                      3,4
56/56S    Det-Amplifier      2.5  1.00     1-5      4   2    3
57/57S    Det-Amplifier      2.5  1.00     1-6      5   2    C  3  4
58/58S    Amplifier          2.5  1.00     1-6      5   2    C  3  4
71A       Power Amplifier    5.0   .25     1-4          2    3
75        Amplifier          6.3   .30     1-6      5   2    C
          Detector                                      3,4
76        Det-Amplifier      6.3   .30     1-5      4   2    3
78        Amplifier          6.3   .30     1-6      5   2    C  3  4
80        Rectifier          5.0  2.00     1-4          2,3
83        Rectifier          5.0  3.00     1-4          2,3
85        Amplifier          6.3   .30     1-6      5   2    C
          Detector                                      3,4
V99       Det-Amplifier      3.3   .063    2-4          3    1
X99       Det-Amplifier      3.3   .063    1-4          2    3
 
FIL = filament, CT = center tap, K = cathode, P = plate, G# = grid #, C = cap
 
 
                    RMA COLOR CODE FOR POWER TRANSFORMERS
 
1. Primary leads-black. If tapped: common-black; tap-black & yellow striped;
   finish-black & red striped.
2. High-voltage plate winding-red. Center tap-red & yellow striped.
3. Rectifier filament winding-yellow. Center tap-yellow & blue striped.
4. Filament winding #1-green. Center tap-green & yellow striped.
5. Filament winding #2-brown. Center tap-brown & yellow striped.
6. Filament winding #3-gray. Center tap-gray & yellow striped.
 
               RMA COLOR CODE FOR AUDIO-FREQUENCY TRANSFORMERS
 
Blue-Plate lead of the primary.
Red-B+ lead.
Green & Black-for center-tapped push-pull operation.
Green-Grid lead to secondary.
Black-Grid return (this applies whether the secondary is plain or center-
      tapped).
 
           RMA COLOR CODE FOR INTERMEDIATE-FREQUENCY TRANSFORMERS
 
Blue-Plate (primary) lead.     NOTE: Aging my cause a color change to occur.
Red-B+ (primary) lead.               Also, a different color code may have
Green-Grid (secondary) lead.         been used by the builder.
Black-Grid or AVC (secondary) lead.
 
                   RMA COLOR CODE FOR SPEAKER FIELD COILS
 
Black & red striped-start         NOTE: The center-tap (if any) will be Yellow
& red striped-finish             gray & red striped.
 
                        VACUUM TUBE NUMBERING SYSTEM
 
All vacuum tube pins are numbered according to one easily remembered rule.
WHEN VIEWING A TUBE SOCKET FROM THE CHASSIS UNDERSIDE, PINS ARE NUMBERED IN
THE CLOCKWISE DIRECTION STARTING FROM THE KEY.
 
                           VACUUM TUBE SUBTITUTION
 
Many of the vacuum tubes used in antique radios can be replaced with another
tube type  (such as a 5Z3 for a type 80) without any rewiring, but a sub-
stitution manual must be consulted first. Your public library or antique radio
supplier will certainly have them. If you expect to do much serviceing, you
should purchase your own copy!
 
..............................................................................
 
                                                   Copyright 1989 by L. Lovell
 
 
                          SHAREWARE IS NOT FREEWARE
 
        This program is distributed under the SHAREWARE concept. If you
 
        enjoyed using my program, will you please send a $5.00 registration
 
        fee to :
                    Larry Lovell
                                    2732 King St.
                                                     Endwell, NY 13760
 
        Your financial assistance will be greatly appreciated !!!!




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1432

     Volume in drive A has no label
     Directory of A:\

    FILE1432 TXT      2236   6-02-89   9:31a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       771   6-02-89   9:35a
    PAGE     COM       325   1-06-87   4:21p
    PRINT    BAT       138   6-02-89   9:38a
    R        EXE     49328   1-01-80   1:03a
    RADIO    TXT     21186   1-01-80  12:13a
    VIEW     BAT        41   6-02-89   9:36a
            8 file(s)      74063 bytes
                           83456 bytes free
