---
layout: page
title: "PC-SIG Diskette Library (Disk #1070)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1070/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1070"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PARTICLE SIMULATION"

    Here are several programs that simulate the orbits of celestial bodies
    and small particles. Use them to simulate the orbit of a three-star
    system, the orbit of a comet approaching the Earth, and the orbits of
    the Earth, sun, and moon. PARTICLE SIMULATION also has programs that
    simulate the movement of a particle inside an ellipse or an ellipsoid.
    In addition, there's an explanation of the twin paradox of relativity:
    why people should cease to age as they approached the speed of light.
    Graphics are included in the explanation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1070.TXT

{% raw %}
```
Disk No  1070
Program Title: PARTICLE SIMULATION version 5
PC-SIG version 1

    PARTICLE SIMULATION has several programs that simulate the orbits of
celestial bodies and small particles. It can simulate the orbit of a
three-star system, the orbit of a comet approaching the earth, and the
orbits of the earth, sun, and moon. PARTICLE SIMULATION also has programs
that simulate the movement of a particle inside an ellipse or an ellipsoid,
the latter shown in three cross sections. Before each program begins, you
have the option of changing the parameters so you can see a different path
or outcome of the particle or celestial body. In addition, it has a program
that explains the "twin paradox" problem of relativity: why would people
cease to age as they approached the speed of light? The program has text
and graphics that explain this concept of the theory of relativity.

Usage: Particle Simulation

System Requirements: 128K memory, one floppy disk drive, and a CGA or EGA
color graphics card. Some programs require a 8087 math chip.

How to Start: Type README (press enter) for instructions.

Suggested Registration: Public Domain

File Descriptions:

3STARSC0 COM  Three stars, CGA
3STARSE0 COM  Three stars, EGA
3STARSE7 COM  Three stars, EGA, 8087 chip
PON3DC0  COM  Ellipsoid billiard system, CGA
PON2DC0  COM  Elliptical billiard system, CGA
PON3DE0  COM  Ellipsoid billiard system, EGA
PON3DE7  COM  Ellipsoid billiard system, EGA, 8087 chip
PON2DE0  COM  Elliptical billiard system, EGA
PON2DE7  COM  Elliptical billiard system, EGA, 8087 chip
MOONC0   COM  Sun, Moon, and Earth, CGA
MOONE0   COM  Sun, Moon, and Earth, EGA
MOONE7   COM  Sun, Moon, and Earth, EGA, 8087 chip
COMETC0  COM  Comet and Earth, CGA
GEODSCC0 COM  Particle on a surface along the geodesic, CGA
GEODSCE7 COM  Particle on a surface along the geodesic, EGA, 8087 chip
TWINPRDX COM  Twin paradox
README   COM  Instructions
FILES    TXT  File descriptions

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```

                      Particle Simulator

Files on this disk:

The last two characters $,# indicates hardware requirements for that program.
$ means CGA or EGA, # means 8087 requirements (e.g. 3STARSe7 needs EGA, 8087
and 3STARSc0 needs cga and no 8087.)

3stars$#.com          3-body simulations
 Pon?D$#.com          Elliptic billiard systems in ?-dimension
  Moon$#.com          Sun, Moon and earth
 Comet$#.com          Comet near the earth 
Geodsc$#.com          Movement of a particle on a surface along the geodesic
Twinprdx.com          Time delay phenomenon in Relativity  theory (CGA)
readme  .com          Introduction

This is an update (as of Jan. 14, 1987) of 'Particle Simulation' disk X4321.
I re-organized it into a first part of two disk-series 'Math Software', of 
which the second is 'Differential Equations with parser'. Please ignore my 
previous versions of 'Particle Simulation' and 'Differential Equations' 
programs.

This disk is a Public Domain Software, and may freely copied and distributed
except for commercial purposes, although my second disk 'Differential Equations
with parser' is a shareware recommended for registration.

        Byoung Keum
        Dept of Math, Univ. of IL,
        1409 w. Green, Urbana,
        IL 61801
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk No 1070 PARTICLE SIMULATOR >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For information about the program, type README (press enter)            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1070

     Volume in drive A has no label
     Directory of A:\

    3STARSC0 COM     22835  11-30-87  10:40p
    3STARSE0 COM     24286  12-08-87   1:18a
    3STARSE7 COM     22969  12-08-87   1:17a
    COMETC0  COM     16211  11-30-87   9:11p
    FILE1070 TXT      2095   6-13-88   3:11p
    FILES    TXT      1295   1-14-88   2:30p
    GEODSCC0 COM     20362  11-30-87   9:30p
    GEODSCE7 COM     20449  12-07-87   2:39p
    GO       BAT        38   5-31-88   1:01p
    GO       TXT       386   5-31-88   1:01p
    MOONC0   COM     17026  11-12-87  11:02p
    MOONE0   COM     18807  12-08-87   1:49a
    MOONE7   COM     17480  12-07-87  11:17p
    PON2DC0  COM     15630  11-30-87   9:22p
    PON2DE0  COM     17218  12-04-87  12:52a
    PON2DE7  COM     15865  12-07-87   2:28p
    PON3DC0  COM     16572  11-30-87   9:20p
    PON3DE0  COM     17974  12-04-87   1:01a
    PON3DE7  COM     16649  12-07-87   2:27p
    README   COM     14285   1-14-88   2:28p
    TWINPRDX COM     24578  11-30-87   9:08p
           21 file(s)     323010 bytes
                           27648 bytes free
