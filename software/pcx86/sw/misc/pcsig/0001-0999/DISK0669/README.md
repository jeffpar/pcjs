---
layout: page
title: "PC-SIG Diskette Library (Disk #669)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0669/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0669"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPHTIME II 1 OF 2 (ALSO 670)"

    GRAPHTIME-II is a business and technical graphics system with text and
    font editors.  Designed for use with dBASE II/III, Multiplan, Lotus 1-
    2-3 and ASCII files, it can also be used on its own with data entered
    from the keyboard into the built-in spreadsheet.  Epson compatible, HP
    Deskjet and Laserjet printers are supported.
    
    The package consists of six main modules:
    
    ~  GRAPH -- 19 types available with up to 10 graphs per screen
    
    ~  DRAW -- Full-screen color graphics editor
    
    ~  FONT -- Text generator and font editor
    
    ~  FILE -- External file input/output
    
    ~  TEXTED -- Text and macro editor
    
    ~  PRINT -- Printer driver
    
    The graphics editor can create free-form diagrams or enhance a
    previously made graph.  You can select arrow keys, joystick or mouse to
    control the graphics cursor.
    
    GRAPHTIME-II can be either menu or command-driven, with an emphasis on
    ease of use.  All scales and labels are made automatically with manual
    override.  A macro facility is included for commonly-used
    command sequences and to control slide shows.  Macros can also be
    created by recording a sequence of commands as they are used.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0669.TXT

{% raw %}
```
Disk No:  669                                                           
Disk Title: Graphtime II 1 of 2 (670 2nd disk)  (Disk 1 of 2)           
PC-SIG Version: S3.3                                                    
                                                                        
Program Title: Graphtime II                                             
Author Version: 3.00                                                    
Author Registration: $49.95                                             
Special Requirements: 512K RAM, CGA or EGA graphics.                    
                                                                        
GRAPHTIME II is a business-presentation graphics program.  GRAPHTIME II 
does various line, column and pie charts.  The charts can be printed or 
plotted, viewed individually, or set up to run as an unattended ``slide 
show'' on the monitor.  It accepts data from dBase II/III, Multiplan,   
and Lotus 1-2-3, or you can enter data directly.  It has a font editor, 
macro editor and math functions including moving averages.  There is    
even an ``undo'' function.  A Microsoft mouse (or compatible) is        
recommended.                                                            
                                                                        
This version will plot 24 data points and will print ``paint''          
files, but will not save them.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FUNGEN.DOC

{% raw %}
```
------------------------------------------------------------------------
							   April 2, 1990
                GRAPHTIME-II Function data generation.

The  Function  generator system operates independently of the  other
GRAPHTIME-II programs.  When the function(s) have been  entered and the
data  created, this data file is then  loaded with the normal FL command
in the GRAPH program.

INSTALLATION.

a. Floppy disk:
Copy the Startup disk (#1) to a new floppy disk. e.g. A:> COPY *.*  B:<Ent>
Label this disk "Function Generator".
Delete any Help files from this disk: DEL *.GTH<Ent>

IBM  PC: Copy the BASICA interpreter from your system disk in drive A:
onto the Function Generator disk in drive B:
e.g. A:> COPY BASICA.*  B:<Ent>
     or
IBM  Compatibles:  Copy the  GWBASIC interpreter onto the Function Generator
disk: e.g. A:> COPY GWBASIC.*  B:<Ent>

b. Hard disk:

1.  Copy  BASICA.* or GWBASIC.* to the GT subdirectory.
   e.g. C:\GT> COPY A:BASICA.* <Ent>
	C:\GT> COPY A:GWBASIC.* <Ent>

OPERATION.

From  either  drive A:>  (Floppy system)
 or   subdirectory  C:\GT>  (Hard disk), enter:

GTF <Ent>    (with GWBASIC installed)

or

GTFB <Ent>   (with BASICA installed)

This  will run the Function Generator program. One or two functions
may be entered.
Single function: e.g. A(X)=X*SIN(X)
Where  A  is  the function  name.  X is the argument  and  will  be
specified as a range of values.
X-axis will be the X range specified (e.g. -10 to 10).
Y-axis will be the function of X. (e.g. X*SIN(X) )

Double function: e.g. Funct1: A(X)=SIN(X) and Funct2: B(X)=COS(X)

X-axis will be Funct1(X).
Y-axis will be Funct2(X).

                                   2.

When the functions have been entered the program will request:

Function Title:                 (To accept the title shown, press
Y-axis Title:                    <Ent> or type in your new title.
X-axis Title:                    These will appear on the graph.)

A  new  program  will  be  generated  and run  to  request  further
information:
(Note: On a PC-XT this process will take approximately 30 seconds.)

Output File name:___________/   (The name may include drive. eg B:
                                 Do not add an extension as .GTD
                                 is added.)
Number of points:____/          (Maximum for GRAPHTIME is 1024)
Minimum argument:________/      (May be + or -)
Maximum argument:________/      (Must be higher than minimum.)

The increment will calculated and displayed.
If the entry is OK press Y or <Ent>.
The  X and Y data pairs will be calculated and written to the  data
file.
You  may then press <Esc> to return to system (DOS) level, or press
SPACE  to  create  another  file  of the same function(s)  using  a
different numbers of points and argument range.

When  the  file(s) have  been created, startup GRAPHTIME-II in  the
usual way: GT<Ent> or GO<Ent> then select G for Graph.
Use FL name<Ent> to load the data into memory.
The data is in Random format and may be edited, printed or graphed.

 _________________________________________________________________

```
{% endraw %}

## GTFLP.BAS

{% raw %}
```bas
10 'SAVE"GTFLP" 'Rene Rojas for Computer Performance 13-10-87
20 REM
30 A$=STRING$(78,205):COLOR 14,1:CLS
40 LOCATE 3,1:PRINT STRING$(1,201):LOCATE 3,2:PRINT A$:LOCATE 3,80:PRINT STRING$(1,187):LOCATE 22,1:PRINT STRING$(1,200):LOCATE 22,2:PRINT A$:LOCATE 22,80:PRINT STRING$(1,188)
50 FOR I=4 TO 21:LOCATE I,1:PRINT STRING$(1,186):LOCATE I,80:PRINT STRING$(1,186):NEXT I
60 LOCATE 2,10:COLOR 14,1:PRINT "G R A P H T I M E - I I   F U N C T I O N    G E N E R A T I O N ";:LOCATE 11,36:COLOR 16,7:PRINT "LOADING";:COLOR 14,1
70 RUN "GTFG"
```
{% endraw %}

## GTPRINT.DOC

{% raw %}
```
------------------------------------------------------------------

GRAPHTIME-II                                  2 April 1990

GTPRINT.EXE   (Available with registered version.)

This  is a program to convert a plotter  file
(name.GTG) to output high resolution graphs onto a standard
EPSON/compatible graphics printer.

Operation:

Load  the plotter  driver  (from  DRAW or GRAPH) and  create  a
plotter file of a diagram or graph. During the setup stage,
select Printer instead of Plotter. (Do not use Direct mode.)
When the plotter file is Run [PR], the HPGL printer driver is loaded.
When the file  name  is  requested,  enter  the  plotter  file  name
previously created. (Do not include the .GTG extension.)

Three  resolutions are possible.  Normally use the 960  dot
resolution. (Usually only the text size is affected.) The higher
the resolution, the slower the printing speed.
To abort printing, press <ESC>. It may take up to minute to respond.
You will then be asked for another filename. Press <ESC> to exit.

NOTES: Complex graphs or drawings can take up to 45 minutes on a
       normal XT. An 80286 or faster processor is desirable.
       Pattern fill is limited to that of an HPGL plotter.

John D. Newman
Computer Performance.
```
{% endraw %}

## LINE.DOC

{% raw %}
```
--------------------------------------------------------------------------
			    GRAPHTIME-II

Program: GTLINE

This program is called from the DRAW program with the GL command.
It provides an alternative diagram drawing facility by making use of the
IBM/EPSON graphics character set. This allows lines and frames to be drawn
in two thicknesses and many additional text symbols are available.

Blocks of the screen can be moved or copied.

Up to four screens can be joined to form a single larger diagram.
Screens can be saved to and loaded from disk.

When printing, text can use printer attributes such as bold or condensed.
For more details, press F1 key when LINE is loaded.

April 2, 1990

---------------------------------------------------------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0669

     Volume in drive A has no label
     Directory of A:\

    GT       BAT       274   4-01-90   6:46p
    GTDEMO   GTT       734  11-09-89   6:08a
    GTC1     BAT       283   4-01-90   6:48p
    GTC2     BAT       199  12-16-89  10:39a
    GTSTART  EXE      9601   3-31-90   9:47a
    PORT     COM      2454   2-13-88   4:10p
    FUNGEN   DOC      3171   4-01-90   7:02p
    GTPRINT  DOC      1278   4-01-90   6:57p
    LINE     DOC       793   4-01-90   7:05p
    BRUN30   EXE     70680   4-07-87  10:48a
    OTHERS   MSG       509   3-31-90   9:48a
    GTLINE   EXE     30769  12-16-89   2:20p
    GTPRS    EXE      8320  10-13-87   7:37p
    DEMO     BAT       273   4-01-90   7:39p
    ADMIN    GTD       301  11-17-89   2:45p
    BUBBLE   GTD       387  11-26-89   9:09a
    DPBUDGET GTD       421  11-27-89  11:12p
    PARTS    GTD       322  11-17-89   2:45p
    RAND     GTD       333  11-17-89   4:31p
    SALES    GTD       641  11-25-89   6:14a
    SEA0     GTD       271  11-17-89   4:31p
    SHARES   GTD       770  11-17-89   4:32p
    TEST     GTD      3259  11-17-89   2:41p
    WAGES    GTD       519  11-17-89   2:45p
    FONT1    GTF      3200  10-17-85   6:14p
    FONT2    GTF      3072  10-15-85   8:19p
    FONT3    GTF      3006  11-15-89   1:48p
    GO       BAT       272   4-01-90   7:41p
    PRINTHLP BAT       314   4-01-90   7:33p
    NORM     GTT       668   6-18-88  10:35a
    GTFG     BAK      7902   5-15-89   8:09p
    A        GTH      1414   3-27-90   9:25p
    DRB      GTH      1136   3-27-90  11:21p
    DRC      GTH      1017   3-27-90  11:24p
    DRD      GTH      1061   3-27-90  11:25p
    DRE      GTH       778   3-27-90  11:27p
    DRF      GTH      1060   3-27-90  11:28p
    DRG      GTH       849   3-27-90  11:29p
    DRI      GTH      1338   3-27-90   9:23p
    DRL      GTH      1885   3-27-90  11:33p
    DRP      GTH      1077   3-27-90  11:31p
    DRR      GTH      1013   3-27-90  11:32p
    DRT      GTH      4854   3-27-90  11:36p
    F        GTH      1807   3-27-90   9:45p
    G        GTH      2440   3-27-90  10:14p
    GP       GTH      7144  12-02-89   8:42p
    I        GTH      4044   3-28-90  12:04a
    K        GTH      1046   3-27-90  11:59p
    M        GTH      3531   3-27-90  10:49p
    P        GTH      4099   3-27-90  11:16p
    S        GTH      3192   3-27-90  11:04p
    MCGA     GTM       631  12-21-89   8:11p
    MEGA     GTM      1151   3-31-90  11:08a
    T1       GTT        48  10-04-87  10:27a
    GTDRAW   MSG      1165   2-18-90   7:58p
    GTGRAPH  MSG      1878   3-10-90   7:57p
    GTPIEBL  MSG       799  10-21-89   1:22p
    GTTEXTED MSG      1619   1-25-90   6:09p
    GTFC     EXE     13809   8-04-87  10:25p
    MOUSE    COM      7099   8-17-87  12:00p
    TFR      BAK       111   6-13-88   2:00p
    TEXT     GTT       886  11-12-89  10:31a
    FONT6    GTF      6199   9-18-88  10:45p
    T1       GTB       656   7-19-88  12:56p
    CCGA     GTM       684  12-21-89   8:11p
    FONT4    GTF      1919   9-18-88   1:27a
    GTFILE   MSG      1593   1-07-90   6:00p
    GANTDEMO GTD       793  11-28-89  11:29a
    GTF      BAT       363   6-18-88   9:43a
    GTFB     BAT       293  10-06-87   8:57a
    README            2983   4-01-90   7:34p
    FONT5    GTF      4034   9-18-88   1:07a
    FONT7    GTF      9612   9-18-88  10:53p
    GTFLP    BAS       385  10-13-87   9:14p
    TFR      GTZ       129   4-01-90   7:43p
    FILE0669 TXT      1925   4-24-90  10:16a
           76 file(s)     260545 bytes
                           20480 bytes free
