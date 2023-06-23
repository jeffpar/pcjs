---
layout: page
title: "PC-SIG Diskette Library (Disk #1507)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1507/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1507"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XYSEE 1 OF 2 (1508 ALSO)"

    Teachers will welcome this computer-aided instructional system when
    designing interactive tutorials and tests for high school and college
    level algebra, geometry and trigonometry.  At last, here's a method for
    time-crunched teachers and concerned parents to provide special,
    individualized help for the struggling student and enrichment for the
    advanced student!
    
    XYSEE enhances students' understanding by incorporating high resolution
    graphics to help them visualize the curve represented by a given
    equation, and the effect upon the form of the curve when parameters
    within the equation change.  Tackles such subjects as points and lines,
    intermediate quadratics and trigonometrics, and advanced parametrics and
    composites.  In addition, interactive coverage is extended to forms
    such as triangles, user defined polygons (structured spline and
    free-form), and designs utilizing artistic mathematics.
    
    XYSEE's game module challenges the student to solve puzzles consisting
    of graphic representations of standard formulae.  Imagine the
    excitement of a "Math Bee" or "College Bowl" pitting opposing teams in
    solving puzzle sets exhibiting complexities from ho-hum to horrific.
    The student's progress in solving each piece of the puzzle is displayed
    and special help is available for identifying boundaries and zeroing in
    on solutions.  Teachers will appreciate the performance reporting
    module which tracks solution attempts by the student as well as
    difficulty levels attained.
    
    The secret of this menu-driven instructional system lies in its use of
    macros which allow the instructor to formulate problems which
    demonstrate mathematical principles.  All of XYSEE's macros, data-sets,
    and puzzles may be prepared with the "smart" capabilities of its fully
    integrated application sensitive editor.  The intuitive structure and
    automatic validation abilities of the editor endow even casual users
    with the ability to quickly create scripts of any level of complexity.
    
    System features include moving window displays, function-specific
    statistics, auto-scaling, and context-sensitive help screens.  With
    progressive overlays and multiple import facility, the package offers
    plot enhancement techniques, and sound and color control.  Both graphic
    and non-graphic printers are supported.  A demonstration tutorial
    highlights program features and an extensive and well-written
    instruction manual is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1507.TXT

{% raw %}
```
Disk No: 1507                                                           
Disk Title: XYSee 1 of 2 (1508 also)                                    
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: XYSee                                                    
Author Version: 2.5.0                                                   
Author Registration: $30.00                                             
Special Requirements: CGA and a text editor.                            
                                                                                                                                                
XYSEE allows teachers to create interactive computer tutorials for      
teaching high school and college level algebra, geometry and            
trigonometry.  At last, here's a method for the time-crunched teacher   
to be able to provide special, individualized help for the struggling   
student and enrichment for the advanced student!                        
                                                                        
XYSEE enhances students' understanding by incorporating graphics to     
help them visualize the curve represented by a given equation, and the  
effect upon the form of the curve when parameters within the equation   
change.  Tackles such subjects as points and lines, intermediate        
quadratics and trigonometrics, and advanced parametrics and             
composites.  In addition, interactive coverage is extended to forms     
such as triangles, user defined polygons (structured spline and         
free-form), and designs utilizing artistic mathematics.                 
                                                                        
The secret of this menu-driven instructional system lies in its use of  
macros which allow the instructor to formulate complex problems and     
demonstrate mathematical principles.  System features include moving    
window displays, function-sensitive statistics, and context-sensitive   
help screens.  With progressive overlays and multiple import facility,  
the package offers plot enhancement techniques, and sound and color     
control.  Both graphic and non-graphic printers are supported.  A       
demonstration tutorial and an extensive and well-written instruction    
manual are included.                                                    
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILELIST.DOC

{% raw %}
```
                        == XYSee Ver. 2.5 Required Files ==

       The following files are required for the program to function properly.

               XYSee.EXE     XYSee.OVR     SetSEE.DTA    MenuSEE.DTA
               4X6.FON       8X8.FON       ERROR.MSG

       The following documentation and utility files should also be present.

         XYSee.DOC     {documentation diskette}

        *Sine_2X.MAM   Angle.MAM     Imprt.MAM    *XY_Demo.MAM  *Two_D.PZL
         Equilat.MAG   Point1.MAG    Point2.MAG    Parallel.MAG  TwoLine.PZL
         Roots.MAQ     C_Circle.MAQ  Parabola.MAQ  Conic.MAQ     Ellipse.MAQ
         Hyperbol.MAQ  SinPhase.MAT  CosAmp.MAT    TanAmp.MAT    CosecPol.MAT
         SecAmp.MAT    CotAmp.MAT    Comp1.MAA     Comp2.MAA     Para1.MAA
         Para2.MAA     Spline.MAA    Distort.IMP   Skewed.IMP   *Normal.IMP
         AdvEx.PZL     AdvPzl1.PZL   AdvPzl2.PZL   BasPzl1.PZL   BasPzl2.PZL
         BasPzl3.PZL  *Example.PZL   GeomEx.PZL    IntPzl1.PZL   IntPzl.PZL
        *Practice.MAM *Practice.PZL  QuadEx.PZL    SineTest.MAM  TrigEx.PZL
        * = Utility files located on the XYSee Main Program disk.

         We hope you find XYSee both Educational and Enjoyable...2/90
```
{% endraw %}

## README.DOC

{% raw %}
```
                        == Welcome to XYSee Version. 2.5 ==

              XYSee requires MS/PC-DOS Ver. 2.0 or greater to execute.

         COPY: The main program diskette files to a formatted disk
               having approximately 360K of available space.

                       Two  disk drive example: Copy A:*.* B:
                       Hard disk drive example: Copy A:*.* C:

         If you are using larger drives than 360K, XYSee can reside on
         the same diskette as DOS. If your drives are 360K, you must:
             1. Start your computer with it's normal "system disk".
             2. Swap the XYSee main program disk with the system disk.

         RUN: Merely enter "XYSee" at the DOS prompt.

         Example:  A>XYSee <ENTER>

         CALL FOR MACROs: Should you develop some interesting MACROs,
                          Import files, or Puzzles, please send us a
                          copy to share with others.            2/90

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1507

     Volume in drive A has no label
     Directory of A:\

    4X6      FON       285  12-23-87   4:00a
    8X8      FON      2048  12-23-87   4:00a
    CURRENT  PZL        43   2-18-89   9:32p
    ERROR    MSG       569  12-23-87   4:00a
    EXAMPLE  PZL      1633  10-15-89   7:06a
    FILE1507 TXT      3033   3-29-90  11:26a
    FILELIST DOC      1280   2-18-89   7:35p
    GO       BAT        72   3-24-89  10:26p
    MENUSEE  DTA     10734   9-28-89   9:24p
    NORMAL   IMP       417  10-15-89   7:03a
    PRACTICE MAM      3712  10-08-89   4:43p
    PRACTICE PZL       698  10-15-89   7:11a
    README   DOC      1024   2-18-89   7:36p
    REGISTER FRM      1664   2-18-89   4:54p
    SD       COM      3584   8-18-84  10:24a
    SETSEE   DTA         6   2-18-89   9:14p
    SINE_2X  MAM      1010  10-08-89   8:48p
    TWO_D    PZL        93  10-15-89   7:07a
    XYSEE    EXE     94368   2-18-89   5:58p
    XYSEE    OVR    205660   2-18-89   5:58p
    XY_DEMO  MAM     17201   2-18-89   3:48p
           21 file(s)     349134 bytes
                            3072 bytes free
