---
layout: page
title: "PC-SIG Diskette Library (Disk #1898)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1898/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1898"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROOM"

    This program helps you find the best location in your stereo room for
    the loudspeakers and the "sweet spot" listening position.
    
    Properly locating the speakers and listening positions avoids the low
    frequency intensity variations caused by room generated standing wave
    patterns.  Hand calculating the best positions is tedious.  This
    program will allow you to find several acceptable set-ups which can
    avoid the overbearing bass and poor transient response due to improperly
    situated speakers.  Not for use with dipole radiators.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1898.TXT

{% raw %}
```
Disk No: 1898                                                           
Disk Title: Room                                                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Room                                                     
Author Version: 05/90                                                   
Author Registration: $30.00                                             
Special Requirements: CGA or Hercules graphics.                         
                                                                        
This program helps you find the best location in your stereo room for   
the loudspeakers (and your ears).                                       
                                                                        
Adjusting the loudspeaker and listening positions so as to minimize the 
intensity variations caused by standing waves is the most practical     
solution to the problem of low frequency standing wave patterns.  The   
best positions involve a degree of compromise and are tedious to        
calculate.  This software can provide an optimal solution and does not  
require an engineering or acoustics background.                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ROOM.DOC

{% raw %}
```
>>>>>>>>>>>>>>>>>>>>>>>> Document for THE LISTENING ROOM <<<<<<<<<<<<<<<<<<<<<

REGISTRATION.................................................................

$30 to Sitting Duck Software at the address shown at the bottom of this
document.  Upon registration you will receive the latest version of the
program which includes the ability to provide a frequency plot of your
loudspeaker system AS INFLUENCED BY THE NEARBY ROOM BOUNDARIES.  The
distance between the speakers and room boundaries cause peaks and dips to
appear in the overall response curve.  Judicious speaker and listener
placement can help avoid the worst of both the standing wave and room
boundary effects.

WHAT THIS PROGRAM DOES..............................

LISTENING ROOM is software designed to minimize the effects of standing waves
by determining desirable speaker and listener placement within the audio
environment.  Sitting in room locations where hot spots or nulls are absent
provides a more natural, smoother response, removes the need for excessive
equalization and reduces transient decay time.

============= THIS PROGRAM IS NOT FOR USE WITH DIPOLE RADIATORS! ============


MACHINE REQUIREMENTS................................

The Listening Room runs on any IBM compatible machine with DOS 2.11 or better,
256K of RAM and Hercules compatible, CGA color, EGA color and VGA color
monitors.


--------------------------------STANDING WAVES--------------------------------

Due to the nature of home listening environments, low frequency standing wave
patterns develop within the room which alter the apparent FREQUENCY RESPONSE
and TRANSIENT DECAY TIME of the audio playback system.  Standing waves exhibit
themselves as pockets of low and high acoustic pressures and may be readily
observed by walking around within the listening room while steady state, bass
rich material is being reproduced.  The response variations, which can exceed
25 db at different listening positions, cannot be properly compensated for by
an electronic equalizer.

Of the various solutions to the standing wave problem, adjusting the loud-
speaker and listening positions is the least expensive, most practical and
often the most effective solution for the average homeowner or apartment
dweller.  If you are currently considering extreme measures to improve what
your believe to be a problem room, use this program first.  Many times, no
further work will be required.

Optionally, the software may be used to intentionally place the listening
position in a standing wave "hot spot" for the LOWEST frequency to help
compensate for speakers with poor low frequency response although the result
will not be the same as that provided by a system with inherently good low
frequency response.


Additionally, using the program to locate the NULLS for low frequencies and
placing your turntable at the calculated location will help to minimize
acoustic feedback.  Sadly, a traditional "along the wall" turntable position
is among the worst locations while an intrusive "center of the room" placement
is often the best.  Note that a corner location is usually the worst of all.
When determining the turntable location with this program, mentally replace
"listener" with "turntable".  Most often, the ideal turntable location is near
the center of the cube defined by the room boundaries.  This site places the
turntable halfway between the floor and ceiling, an arrangement that you'll
probably not select.


----------------USING THE STANDING WAVE PORTION OF THE PROGRAM--------------

This program assumes that your speakers will be placed symmetrically, and
equidistant from the side walls and that the listening position will be on a
line perpendicular to one drawn between the speakers and parallel to the side
walls.  Note that some standing wave nulls for the width cannot be raised in
the symmetric mode.  An asymmetric mode of operation is available for those
who desire it.

Starting with the speakers in the corners and the listener against the back
wall, use the indicated keys to move the speakers and listener to positions
which satisfy your personal tastes and environment.  Make adjustments,
compromising to the degree which you are willing, until the maximum number of
markers are grouped around any horizontal line, preferably in the 0db to -10db
range.  Two or more ADJACENT markers which stray upward from the grouping, two
or more markers for the SAME FREQUENCY which stray upward from the grouping or
OVERLAPPING markers which stray upward from the grouping should be avoided.


The markers symbol indicates whether its position on the grid is due to the
(L) length or (W) width or (H) height of the room.  There may be more than one
set of acceptable positions.  If used for locating the turntable, the maximum
number of markers should be toward the bottom of the chart.
Screen prompts provide the necessary keystroke information to make adjustments
and enter the room dimensions.  There is also a small help screen.  Dimensions
displayed are in inches, measurements from the speakers are taken from the
geometric center of the driver that is reproducing the frequency of interest
(usually the woofer) and measurements from the listener are taken from the
center of the head.

If your system has several drivers in a vertical array which cover the the
20-220Hz range, the distance from the floor should be set to the middle of the
array.  With MANY drivers in a vertical array you may safely ignore the height
altogether.  You may also ignore the height if you have a large panel radiator
such as an electrostatic system.

Locate your speakers at least 24" from each of the nearest walls to minimize
early reflections and allow a believable sound stage to be established.


If you are placing your speakers asymmetrically, press <A> for asymmetric
operation.  In this mode, you may move the left and right speakers independent
of each other, by using the keys as shown in the prompts.  Asymmetric operation
will display two sets of L's and two sets of W's and will require more time to
find the best positions.

For single-woofer positioning, as with a sub woofer, use the symmetrical mode
and ignore one of the speakers and its distances to the boundaries.  Depending
upon the crossover frequency of your single woofer, you may have to do the
woofer and satellite positioning as separate exercises.

Some room shapes make excellent listening environments, others may be less
satisfactory.  In any case, the use of this program will provide an audible
improvement.  Final results will always be better than displayed because
furniture and openings such as doors, help to break up hot spots and nulls in
the overall response, particularly for frequencies toward the right side of
the chart.

The chart markers indicate the relative standing wave intensity for a
particular room dimension and frequency.  Only the AXIAL standing waves
(those traveling from front-to-back, left-to- right and ceiling-to-floor) are
considered, since these are the most significant.  No attempt has been made
to combine the standing wave activity with the DIRECT response from the speaker
to the listener's ears.  The displayed chart, therefore, should not be taken
for a true frequency response curve.  In practice, a null in the standing wave
will usually mean a perceived reduction in bass at the given frequency rather
than a complete absence of sound.

Using this program to determine the preferred listening set-up will take some
effort.  Much less effort, however, than the time honored process of moving,
listening... moving... listening......which always leaves the question, "Is
this really better?"  If you are equalizing your system with any of the several
techniques available, be sure to locate your speakers prior to the procedure.
Equalizing to correct erroneous speaker placement is not the path to take for
quality reproduction.

Do not waste your time trying to get everything within a few db.  If you can
get most of the markers between +2 and -10 on the standing wave graph, you
have accomplished your task.  Note that just a few inches one way or the other
can sometimes make a significant difference.

Using the asymmetric mode, even if your final set-up will be symmetric, makes
it easy to compare one set-up curve with another.

If your set-up is asymmetric, do not believe that +4 on one channel will
properly compensate for -4 on the other.  Try to keep the curves on the
boundary plot as closely matched as possible to maintain L-R channel balance.
This will be difficult and possibly suggests that a symmetrical set up may
be preferable.
As an instructive example try the following set-up:

     Room:                       180" x 144" x 102"
     Operation:                  Symmetrical
     Speakers from front wall:   60"
     Speakers from side wall:    48"
     Speaker height:             20"
     Listener height:            35"
     Listener from rear wall:    34"


None of these dimensions would be unusual for a typical room and this set-up
and would provide acceptable results.  Less than 20 minutes was required to
juggle things into place for this example.

Naturally, you will want to take a look at your current set-up.  Who knows,
it may already be perfect.

--------------------------------SOME EXAMPLES-------------------------------

The explanation of the standing wave portion spoke of grouping markers about
a horizontal line.

In the example below, the area bounded by +2 and -6 contains the majority of
markers.  This grouping is quite acceptable despite the W's at the bottom which
are unavoidable in a symmetrical set-up.  Tighter groupings are possible but
often do not coincide with a reasonable listening configuration.

+-----------------------------------------------+
| +6                                            |
R +4                                            |
e +2                                            |
l  0      L         W                  L        |
a -2          H                  L              |
t -4                    L              W        |
i -6            L          H                    |
v -8                                            |
e-10                                            |
 -12                                            |
P-14                                            |
r-16                                            |
e-18                                            |
s-20                                            |
s-22                                            |
u-24                                            |
r-26                                            |
e-28                                            |
|-30       W                  W                 |
|                    1 1 1 1 1 1 1 1 1 1 2 2 2  |
|    2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2  |
|    0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  |
+-----------------Frequency in Hz---------------+



The example below shows an unacceptable grouping.  One L and one W marker are
needlessly located at the bottom and a particularly nasty sounding potential
problem is indicated by the group of three markers around +4 and 190Hz.  Room
transient response suffers and an equipment problem may even be suspected.

+-----------------------------------------------+
| +6                                   W        |
R +4      L                            LH       |
e +2                                            |
l  0                            L               |
a -2            H                               |
t -4                                            |
i -6                                            |
v -8                                            |
e-10                W                           |
 -12                                            |
P-14                                            |
r-16                                            |
e-18                                            |
s-20                                            |
s-22                                            |
u-24                                            |
r-26                                            |
e-28                        H                   |
|-30       W            L     W                 |
|                    1 1 1 1 1 1 1 1 1 1 2 2 2  |
|    2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2  |
|    0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  |
+-----------------Frequency in Hz---------------+



Note: Which horizontal line you choose to group the markers around is not
as important a keeping the markers grouped together.  Markers which stray
UPWARDS from the grouping indicate the most severe problems.  The well known
"Rule of Thirds", where the speakers are in from the front wall 1/3 of the
room length and the listener is in from the rear wall 1/3 of the room length
does indeed put most of the markers on the -6 line.  Its drawbacks are; the
1 (sometimes 2, depending on room length) stray markers on the +6 line and
the fact that is cannot be usefully applied to the width and height of the
room.  The "Rule of Modified Fifths", where the speakers are in from the front
wall 1/5 of the room length and the listener is in from the rear wall 2/5 of
the room length, provides somewhat better results but may still result in a
stray marker at +6.  We have yet to find a simple "rule" that provides good
results.  In the Symmetrical mode, you may use <F2> or <F3> to set the
markers and distances to the Rule of Thirds or the Rule of Modified Fifths.
Despite the drawbacks of the two rules, they do make good starting points
for you to work from.  <F4> applies the Rule of Modified Fifths to the length
and the Rule of Modified Fifths to the width.  There is a rule based on
7ths but it does not provide satisfactory results.


Below is an example of one possible near ideal situation.  The asymmetric
mode must be selected in order to move all the W markers into the grouping.
More markers are shown in this example because the asymmetric mode doubles
the number of markers necessary.  Figure on spending a great deal of time
to produce similar configurations, especially if you intend to get the
boundary plot as nice!

+-----------------------------------------------+
| +6                                            |
R +4                                            |
e +2                                            |
l  0                                            |
a -2                                            |
t -4      LW    H    H  L   H   L      W        |
i -6      LW    L    H  L   H W L      W        |
v -8            L             W        LH       |
e-10                                   LH       |
 -12                                            |
P-14                                            |
r-16                                            |
e-18                                            |
s-20                                            |
s-22                                            |
u-24                                            |
r-26                                            |
e-28                                            |
|-30                                            |
|                    1 1 1 1 1 1 1 1 1 1 2 2 2  |
|    2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2  |
|    0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  |
+-----------------Frequency in Hz---------------+



GETTING HELP

If there is something about the program that you do not understand, feel free
to call Sitting Duck Software during the hours of 8:00 A.M. to 10:00 P.M.,
Pacific Time.  If there is no answer, try again later.  We are glad to answer
your questions and provide any advice in areas which we are knowledgeable.



ERRORS and UPGRADES

If you find any errors in the program, let us know immediately.  We want to
fix them for the benefit of new users.  Purchasers of The Listening Room are
always entitled to the latest version at no additional cost beyond a $1
shipping and handling charge.
THE PHILOSOPHY OF SITTING DUCK

We have no axes to grind nor are we interested in exercising our egos.  The
code of the Listening Room program has been arranged in a manner that will
present to YOU an easy to understand and use distillation of the facts. If
you don't believe we have done our job, let us know.

CONTACT US

We would like to hear about your experiences; before and after using this
program.  You could provide important information that will allow us to make
operational, instructional or user interface improvements.  No need to be
tactful; you may hide a significant point.  We are also interested in how many
users have a math co-processor.  We want to make this program as useful and
easy to use as possible and will listen to all suggestions.  There is a
possibility of a professional version of the program; for this to become a
reality, we need to know what you, as professionals, wish in the way of
features and abilities.

Thanks, regards and good listening from the co-authors;


     Bill Fitzpatrick, programming & interface
     Ralph Gonzalez,   math, spatial geometry and nitpicking

The program is compiled with the Microsoft BASIC 6 compiler.
Assembler routine library from Crescent Software of Stamford, CT


The Listening Room (C)(R) 1989                             All rights reserved
Sitting Duck Software      POBox 130      Veneta, OR 97487      (503) 935-3982

As of 5 May, 1990 we would like to thank the following for their efforts in
helping to promote The Listening Room:

Audio Concepts                 Quality drivers and loudspeaker kits.
CD Review                      "The" magazine for CD buyers.
KLH Research & Development     Loudspeaker manufacturers.
Stereophile                    Respected "Underground" review publication.


As ridiculous as it may seem, I believe we have to say:

Microsoft is a registered trademark of Microsoft Corporation.
IBM is a registered trademark of International Business Machines.




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1898

     Volume in drive A has no label
     Directory of A:\

    ROOM     EXE    100940   5-31-90  10:05a
    ROOM     DOC     18322   5-29-90   5:16p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       729   1-01-80   2:42a
    FILE1898 TXT      1777   7-13-90  11:31a
            5 file(s)     121806 bytes
                           36864 bytes free
