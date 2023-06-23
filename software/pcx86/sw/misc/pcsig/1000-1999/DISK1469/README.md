---
layout: page
title: "PC-SIG Diskette Library (Disk #1469)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1469/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1469"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRYSTAL"

    Generate and view 3-D models of crystals. The built-in editor allows
    you to modify crystal structures from the included library or
    construct entirely new ones.
    
    Sample crystal files are included on this disk, and new crystal
    structures may be created by modifying these files or by creating a new
    file. CRYSTAL has a complete set of built-in editing
    capabilities. When viewing a crystal structure, use the cursor pads to
    rotate the model on the x, y and z axis. Also provided are data
    files of crystals for use by CHEMICAL and CHEMVIEW, two excellent
    companion programs to CRYSTAL. CRYSTAL operates independently or in
    conjuction with these programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALUMINUM.TXT

{% raw %}
```



     { Aluminum at 25 Degrees C }.

Make cube dimensions 2.86 A.
Place Al atoms on a face centered cube.
```
{% endraw %}

## BIF3.TXT

{% raw %}
```

     { BiF3  }

Make cube dimensions 5.12 A.
Make atoms full scale.
Place Bi3+ atoms at the corners of the cube.
Place Bi3+ atoms on the faces of the cube.
Place an F- atom at the center of the cube.
Place F- atoms on the edges of the cube.
Place F- atoms at (0.25,0.25,0.25), (0.25,0.25,0.75).
Place F- atoms at (0.25,0.75,0.25), (0.25,0.25,0.75).
Place F- atoms at (0.75,0.25,0.25), (0.25,0.25,0.75).
Place F- atoms at (0.75,0.75,0.25), (0.25,0.25,0.75).
```
{% endraw %}

## BPO4.TXT

{% raw %}
```

     { BPO4  }

Make lattice dimensions 4.33, 4.33, 6.64 A.
Make atoms full scale.
Color P atoms Green.
Color B atoms Red.
Place P atoms at the corners of the cube.
Place a P atom at the center of the cube.
Place B atoms at (0,0.5,0.25), (0.5,0,0.75).
Place B atoms at (1,0.5,0.25), (0.5,1,0.75).
Place O atoms at (0.64,0.76,0.63), (0.36,0.76,0.37).
Place O atoms at (0.36,0.24,0.63), (0.64,0.24,0.37).
Duplicate.

```
{% endraw %}

## CAC2.TXT

{% raw %}
```

     { CaC2  }

Make lattice dimensions 3.87, 3.87, 6.37 A.
Make atoms full scale.
Place Ca2+ atoms at the corners of the cube.
Place Ca2+ atoms on the faces of the cube.
Place C atoms at (0,0,0.406), (0,0,0.594).
Place C atoms at (0,1,0.406), (0,1,0.594).
Place C atoms at (1,0,0.406), (1,0,0.594).
Place C atoms at (1,1,0.406), (1,1,0.594).
Place C atoms at (0,0.5,0.906), (0,0.5,1.094).
Place C atoms at (0,0.5,-0.094), (0,0.5,0.094).
Place C atoms at (0.5,0,0.906), (0.5,0,1.094).
Place C atoms at (0.5,0,-0.094), (0.5,0,0.094).
Place C atoms at (1,0.5,0.906), (1,0.5,1.094).
Place C atoms at (1,0.5,-0.094), (1,0.5,0.094).
Place C atoms at (0.5,1,0.906), (0.5,1,1.094).
Place C atoms at (0.5,1,-0.094), (0.5,1,0.094).
```
{% endraw %}

## CRYSTAL.DOC

{% raw %}
```

  (Use F5 to toggle window size)

  CRYSTAL is a 3 dimensional molecular modeling program that generates
  computer models of ionic crystal structures. This program is a
  companion program with CHEMICAL and CHEMVIEW.

  To display the example data files first use the Read command to
  read a text description from the disk. Then use the View command
  to display this crystal. While viewing the crystal use the cursor
  keys to change the direction of rotation. The X,Y, and Z keys
  change the view be along the corresponding axis. The space bar
  returns to the menu screen.

  New crystal structures are easiest to make by modifying an existing
  file. The F1 key gives help for using the editor, and the shift F1
  key shows this help file. The commands and atoms/ions allowed are
  listed below (all commands must end in a period).

   { COMMENT }
   Color __ atoms  Red|Pink|Light_Pink|Orange|Gold|Yelow|Mint_Green
                   Forrest_Green|Green|Light_Green|Light_Blue
                   Violet_Blue|Blue_Violet|Blue|White.
   Duplicate cells.
   Make atoms __ scale.
   Make cube dimensions __ A|pm.
   Make lattice dimensions __ __ __ A|pm.
   Make lattice angles __ __ __ degrees.
   Place __ atom|atoms at center|corner|edge|face of cube|lattice.
   Place __ atoms at (__,__,__), (__,__,__), ... .
   Place __ atoms on body centered cube.
   Place __ atoms on cubic closest packing.
   Place __ atoms on face centered cube."),
   Place __ atoms on a hexagonal lattice.").

   Ac     2.0    Ac3+   1.11   Ag     1.44   Ag+    0.97   Al     1.43
   Al3+   0.57   Am3+   1.00   Am4+   0.85   As     1.21   As3+   0.69
   As3-   1.99   As5+   0.47   At     1.40   Au     1.44   Au+    1.37
   B      0.88   B3+    0.2    Ba     2.17   Ba2+   1.38   Be     1.11
   Be2+   0.31   Bi     1.46   Bi3+   1.20   Bi3-   2.217  Bi5+   0.74
   Br     1.14   Br-    1.97   Br7+   0.39
   C      0.77   C4+    0.15   C4-    2.60   Ca     1.97   Ca2+   1.06
   Cd     1.49   Cd2+   0.99   Cl     0.99   Cl-    1.81   Cl7+   0.26
   Co     1.26   Co2+   0.78   Co3+   0.65   Cr     1.25   Cr2+   0.80
   Cr3+   0.70   Cr6+   0.52   Cs     2.62   Cs+    1.70   Cu     1.28
   Cu+    0.96   Cu2+   0.72
   F      0.64   F-     1.36   F7     0.07   Fe     1.26   Fe2+   0.80
   Fe3+   0.67
   Ga     1.22   Ga3+   0.65   Ge     1.22   Ge2+   0.65   Ge4+   0.55
   H-     2.08   Hg     1.55   Hg2+   1.12
   I      1.33   I-     2.16   I7+    0.50   In     1.62   In3+   0.95
   Ir     1.35   Ir4+   0.66
   K      2.31   K+     1.33   Kr     1.69
   La     1.88   La3+   1.07   Li     1.52
   Mg     1.60   Mg2+   0.75   Mn     1.29   Mn2+   0.83   Mn3+   0.52
   Mn7+   0.46   Mo     1.36   Mo4+   0.68   Mo6+   0.65
   N      0.70   N3-    1.56   N5+    0.11   Na     1.86   Na     1.86
   Na+    1.00   Ne     1.12   Ni     1.24   Ni2+   0.74   Np3+   1.02
   Np4+   0.88
   O      0.66   O2-    1.4    O6+    0.09   Os     1.34   Os4+   0.65
   P      1.1    P3-    1.92   P5+    0.34   Pb     1.75   Pd     1.38
   Pd2+   0.50   Po     1.4    Po4+   0.9    Pt     1.38   Pt2+   0.52
   Pt4+   0.55   Pu3+   1.01   Pu4+   0.86   Ra     2.2    Ra2+   1.42
   Rb     2.44   Re     1.37   Re6+   0.52   Rh     1.34   Rh3+   0.75
   Rh4+   0.65   Ru     1.33   Ru4+   0.60
   S      1.04   S2-    1.855  S6+    0.29   Sb     1.41   Sb3+   0.90
   Sb3-   2.17   Sb5+   0.62   Sc     1.6    Sc3+   0.83   Se     1.17
   Se-    1.96   Se4+   0.40   Se6+   0.42   Si     1.17   Si4+   0.40
   Sn     1.4    Sn2+   1.02   Sn4+   0.65   Sr     2.15   Sr2+   1.18
   Tc     1.3    Tc4+   0.50   Te     1.37   Te2-   2.21   Te4+   0.84
   Te6+   0.56   Th4+   0.95   Ti     1.46   Ti2+   0.76   Ti4+   0.60
   Tl     1.71
   U3+    1.04   U4+    0.89
   V      1.31   V2+    0.82   V3+    0.75   V5+    0.59
   W      1.37   W4+    0.68   W6+    0.65
   Xe     1.9
   Y      1.80   Y3+    0.91
   Zn     1.33   Zn2+   0.75   Zr     1.57   Zr4+   0.80


   CRYSTAL is written in Turbo PROLOG version 2.0 and Turbo C. The 
   Turbo PROLOG toolbox is also used.

   CHEMICAL, CHEMVIEW, and CRYSTAL are placed in the Public Domain and
   may be freely copied and distributed. The latest version of these
   programs with source code can be obtained from the author for $20
   (for all three). Updates are $10 for registered users. Add $5 for
   overseas shipping and $3 for 3 1/2 inch disks. Version 4.1 of
   PLANETS (an astronomy program that shows planetary motion) is
   available for $10. The source code is not for public distibution
   and is only available from the author.

                    Larry Puhl
                    6 Plum Court
                    Sleepy Hollow, Ill. 60118

```
{% endraw %}

## CU3AU.TXT

{% raw %}
```



               { Cu3Au }.

Make cube dimensions 3.90 A.
Place Au atoms at the corners of the cube.
Place Cu atom at the center of the cube.
Place Cu atoms on the faces of the cube.

```
{% endraw %}

## CUAU.TXT

{% raw %}
```



               { CuAu }.

Make cube dimensions 390 pm.
Place Au atoms at the corners of the cube.
Place Au atom at the center of the cube.
Place Cu atoms on the faces of the cube.

```
{% endraw %}

## DIAMOND.TXT

{% raw %}
```

               { Diamond }

Make cube dimensions 2.84 A.
Place C atoms at the corners of the cube.
Place C atoms at the faces of the cube.
Place C atoms at (0.25,0.25,0.25) (0.75,0.75,0.25) 
Place C atoms at (0.75,0.25,0.75) (0.25,0.75,0.75).
Duplicate.
```
{% endraw %}

## FES.TXT

{% raw %}
```

     { FeS  }

Make cube dimensions 5.4175 A.
Make atoms full scale.
Color Fe2+ atoms red.
Color S2- atoms yellow.
Place Fe2+ atoms at the corners of the cube.
Place Fe2+ atoms on the faces of the cube.
Place S2- atoms at (0.386,0.386,0.386), (0.614,0.614,0.614).
Place S2- atoms at (0.886,0.114,0.886), (0.114,0.886,0.114).
Place S2- atoms at (0.114,0.114,0.886), (0.886,0.886,0.114).
Duplicate.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1469 CRYSTAL  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type CRYSTAL (press enter)                        ║
║                                                                         ║
║ To copy the documentation to your printer, type                         ║
║                          COPY CRYSTAL.DOC LPT1 (press enter)            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## KMGF3.TXT

{% raw %}
```

     { KMgF3 }

Make lattice dimensions 5.38, 5.38, 8.44 A.
Make atoms full scale.
Place Mg2+ atoms at the corners of the lattice.
Place an Mg2+ atom at the center of the lattice.
Place Mg2+ atoms at (0,0,0.5), (0,1,0.5), (1,0,0.5), (1,1,0.5).
Place Mg2+ atoms at (0.5,0.5,0), (0.5,0.5,1).
Color K+ atoms red.
Place K+ atoms at (0,0.5,0.25), (0,0.5,0.75).
Place K+ atoms at (1,0.5,0.25), (1,0.5,0.75).
Place K+ atoms at (0.5,0,0.25), (0.5,0,0.75).
Place K+ atoms at (0.5,1,0.25), (0.5,1,0.75).
Color F- atoms green.
Place F- atoms at (0,0,0.25), (0,0,0.75).
Place F- atoms at (0,1,0.25), (0,1,0.75).
Place F- atoms at (1,0,0.25), (1,0,0.75).
Place F- atoms at (1,1,0.25), (1,1,0.75).
Place F- atoms at (0.25,0.25,0), (0.25,0.25,0.5), (0.25,0.25,1).
Place F- atoms at (0.25,0.75,0), (0.25,0.75,0.5), (0.25,0.75,1).
Place F- atoms at (0.75,0.25,0), (0.75,0.25,0.5), (0.75,0.25,1).
Place F- atoms at (0.75,0.75,0), (0.75,0.75,0.5), (0.75,0.75,1).
Place F- atoms at (0.5,0.5,0.25), (0.5,0.5,0.75).

```
{% endraw %}

## LAFEO3.TXT

{% raw %}
```

     { LaFeO3 Perovskite structure }

Make cube dimensions 4.14 A.
Make atoms full scale.
Place Fe3+ atoms at the corners of the cube.
Place an La3+ atom at the center of the cube.
Place O2- atoms on the edges of the cube.
```
{% endraw %}

## MERCURY.TXT

{% raw %}
```



             { Mercury }.

Make lattice dimensions 334 334 334 pm.
Make lattice angles 30 90 90.
Place Hg atoms on the corners of lattice.
```
{% endraw %}

## NACL.TXT

{% raw %}
```

     { NaCl  Table Salt }

Make cube dimensions 5.62 A.
Make atoms full scale.
Place Cl- atoms at the corners of the cube.
Place an Na+ atom at the center of the cube.
Place Na+ atoms on the edges of the cube.
Place Cl- atoms at the faces of the cube.
```
{% endraw %}

## SIO2.TXT

{% raw %}
```

     { SiO2 at 600 Deg C }

Make lattice dimensions 5.01, 5.01, 5.47 A.
Make atoms full scale.
Color O atoms Red.
Color Si atoms Yellow.
Place Si atoms at (0.5,0.5,0.333),(0,0.5,0.667),(1,0.5,0.667).
Place Si atoms at (0.5,0,0),(0.5,0,1),(0.5,1,0),(0.5,1,1).
Place O atoms at (0.394,0.197,0.167), (0.606,0.803,0.167).
Place O atoms at (0.197,0.394,0.5), (0.803,0.606,0.5).
Place O atoms at (0.197,0.803,0.833), (0.803,0.197,0.833).
Duplicate.
```
{% endraw %}

## ZNS.TXT

{% raw %}
```

               { ZnS }

Make cube dimensions 4.16 A.
Place S2- atoms at the corners of the cube.
Place S2- atoms at the faces of the cube.
Place Zn2+ atoms at (0.25,0.25,0.25) (0.75,0.75,0.25) 
Place Zn2+ atoms at (0.75,0.25,0.75) (0.25,0.75,0.75).
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1469

     Volume in drive A has no label
     Directory of A:\

    CRYSTAL  EXE    167171  12-23-88   9:12a
    CRYSTAL  DOC      4778  12-23-88   9:15a
    SF6      DAT      1028   6-26-88  11:07a
    CL2O7    DAT      4172   6-26-88  10:22a
    ZN(NH3)4 DAT      2944   6-26-88  11:10a
    NITRO    DAT      3611   6-26-88  11:03a
    FES      TXT       411   1-01-80  12:20a
    BIF3     TXT       471   1-01-80  12:19a
    DIAMOND  TXT       264   1-01-80  12:49a
    KMGF3    TXT      1021   7-17-88  12:52a
    ALUMINUM TXT       115   1-01-80   1:07a
    CU3AU    TXT       195   1-01-80   1:07a
    NACL     TXT       262   7-04-88   1:29a
    CUAU     TXT       194   1-01-80   1:46a
    MERCURY  TXT       150   1-01-80  12:24a
    LAFEO3   TXT       232   7-04-88   2:52a
    CAC2     TXT       743   7-08-88   1:10a
    ZNS      TXT       258   7-08-88   2:58a
    BPO4     TXT       431   7-11-88   1:15a
    SIO2     TXT       457   7-10-88   1:50a
    AG(NH3)2 DAT      4234   6-26-88  10:18a
    ASPIRIN  DAT      3243   6-26-88  10:19a
    SULFANIL DAT      3132   6-26-88  11:07a
    DDT      DAT      4921   6-26-88  10:23a
    BF3      DAT       626   6-26-88  10:19a
    CF4      DAT       816   6-26-88  10:21a
    NF3      DAT       652   6-26-88  10:29a
    S2F10    DAT      1785   6-26-88  11:06a
    B2CL4    DAT       966   6-26-88  10:19a
    S2CL2    DAT      1800   6-26-88  11:06a
    N2O5     DAT      1107   6-26-88  10:29a
    C2H5OH   DAT      1506   6-26-88  10:20a
    PCL5     DAT       896   6-26-88  11:04a
    L_TRYPTO DAT      4787   6-26-88  10:28a
    PRUSSIAN DAT      5332   6-26-88  11:06a
    GLUCOSE  DAT      3197  10-09-88   9:57a
    THYMINE  DAT      2026  10-09-88   9:58a
    GLYCINE  DAT      1712   6-26-88  10:25a
    ALANINE  DAT      2251   6-26-88  10:18a
    PROLINE  DAT      2826   6-26-88  11:05a
    LEUCINE  DAT      3782   6-26-88  10:26a
    TYROSINE DAT      3650   6-26-88  11:08a
    TRYPTOPH DAT      4630   6-26-88  11:08a
    LACTIC   DAT      5560   6-26-88  10:26a
    METHIONI DAT      3556   6-26-88  10:28a
    ISOLEUCI DAT      3699   6-26-88  10:26a
    SERINE   DAT      2329   6-26-88  11:07a
    THREONIN DAT      2676   6-26-88  11:08a
    CYSTEINE DAT      2463   6-26-88  10:24a
    ASPARAGI DAT      2803   6-26-88  10:18a
    GLUTAMIN DAT      3314   6-26-88  10:24a
    ASPARTAT DAT      2535   6-26-88  10:19a
    LYSINE   DAT      4146   6-26-88  10:28a
    CORONENE DAT      6357   6-26-88  10:22a
    GLUTAMAT DAT      3115   6-26-88  10:23a
    ZN(OH)2  DAT       760   6-26-88  11:10a
    CF3COOH  DAT      1307   6-26-88  10:20a
    CH3COOH  DAT      1308   6-26-88  10:21a
    ADENINE  DAT      2103  10-09-88   9:56a
    AT       DAT       200  10-09-88   9:56a
    TNT      DAT      3110  10-09-88   9:58a
    ATP      DAT      6064  10-09-88   9:56a
    NIACIN   DAT      1899  10-09-88   9:58a
    ISOBUTAN DAT      1835  10-09-88   9:58a
    HPO3     DAT      3450  10-09-88   9:57a
    BENZENE  DAT      1877  10-09-88   9:56a
    URATE    DAT      2122  10-09-88   9:59a
    C6H12    DAT      2475  10-09-88   9:57a
    C5H5O2N  DAT      1723  10-09-88   9:57a
    GO       BAT        38   6-14-89   3:12p
    GO       TXT       617   6-29-89   9:58a
           71 file(s)     322226 bytes
                               0 bytes free
