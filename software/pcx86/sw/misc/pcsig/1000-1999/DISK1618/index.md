---
layout: page
title: "PC-SIG Diskette Library (Disk #1618)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1618/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1618"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "STAT"

    STAT is a program that analyzes, plots and displays
    statistical data from internal data files or imported DBASE III and
    LOTUS 1-2-3 files.
    
    The data files created may have up to 800 records, 10 fields
    (variables) per record, and 10 characters for the name of each
    variable.  They can be viewed, edited, sorted, manipulated, and
    printed. The program can analyze the data and produce a number of
    graphs, including histograms, scatter plots, line plots, multi-line
    plots, X-Bar and R Charts, pareto charts and bar charts.  STAT can also
    calculate the mean, median, mode, range, standard deviation, standard
    error of the mean, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1618.TXT

{% raw %}
```
Disk No: 1618                                                           
Disk Title: STAT                                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: STAT                                                     
Author Version: 10/89                                                   
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
STAT is a program that analyzes, plots and displays                     
statistical data from internal data files or imported from DBASE III    
and LOTUS 1-2-3 records.                                                
                                                                        
The data files created may have up to 800  records, 10 fields           
(variables) per record, and 10 characters for the name of each          
variable.  They can be viewed, edited, sorted, manipulated, and         
printed. The program can analyze the data and produce a number of       
graphs, including histograms, scatter plots, line plots, multi-line     
plots, X-Bar and R Charts, pareto charts and bar charts.  STAT can also 
calculate the mean, median, mode, range, standard deviation, standard   
error of the mean and more.                                             
                                                                        
File Descriptions:                                                      
                                                                        
STAT     EXE  Main program.                                             
STAT     DOC  Documentation.                                            
TEST     DBF  Test file.                                                
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #1618  STAT  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  STAT (press enter)                             ║
║                                                                         ║
║ To print documentation, type:  COPY STAT.DOC PRN (press enter)          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## STAT.DOC

{% raw %}
```
This program ( STAT.EXE ) is written and compiled using
Borland's Turbo Basic. It was written to answer a need
for the graphic representation of data for Statistical
Process Control Programs.

Menu selections are by either the cursor keys or the
space bar.

All graphic displays stay on the screen until the space
bar is hit to give you time to look or to print the graph.

This program presumes some level of understanding of
statistics and thus, is self explanatory.

When all else fails, read the screen!

TECHNICAL NOTES

1. Curve fitting

   a. Least Squares of the forms :

         Y = m * X + b (straight line)
         Y = m1 * X + m2 * X^2 + b (one cusp)
         Y = m1 * X + m2 * X^2 + m3 * X^3 + b (twp cusps)

   b. Powers of the form Y = m * X^b


   c. Exponential of the form Y = m * e^(bX)

   d. Logarithmic of the form Y = m + b * Log (X)

   e. Multiple Regression has a maximum of 25 independent
      variables.

FILE SELECTION

1. Dbase III - This will accept III or III+ files. It will only
    read numeric and date fields.

2. LOTUS 123 - You must first name the range in LOTUS using
    the /Range/Name/Create function. It is assumed that the
    top ROW of the named range are the field titles. You must
    also format the whole range in decimal format. The decimal
    format can be different for each field.
    NOTE : This will not accept range inputs such as A1..E55.

3. STATPLOT - These files are created using this program.
    You can save Dbase or Lotus files in this format after
    they are read above. This is especially useful if you are
    only using a small amount of a large LOTUS or Dbase file.

If you hit return, it will display the files in the current
directory. If you enter a drive letter followed be a colon (:)
or a path followed by back-slash (\),it will display the files
as designated.

The F9 function key will store the previous drive letter or path
so that you do not have to re-type the drive or path.




PITFALL

If you are changing color in a monochrome system and the screen
blanks, hit F1 or F3 until text appears. If you accidently
hit return and save the blank screen, get out of the program by
either Ctrl-Break <return><return> or soft boot. You then
have to erase the color file named COLOR.DAT.

MENU TREE I

|        MAIN MENU
|--------------------------
|       Existing File
|
|          New File
|
|         Edit Data
|
|          Add Data
|
|         Save Data
|
|    Statistical Analysis
|
|   Data Manipulation Menu
|
|         System Menu
|
|--------------------------


|--------------------------
|    EXISTING FILE MENU
|
|--------------------------
|
|        dBASE III
|
|      Statplot File
|
|        123 - LOTUS
|
|        System Menu
|
|--------------------------


|--------------------------
|
|      SYSTEM MENU
|
|--------------------------
|
|     Graphics Menu
|
|       Set Colors
|
|       View Data
|
|       Print Data
|
|      Exit Program
|
|       Main Menu
|
|--------------------------






|--------------------------
|
|     SET COLORS
|
|---------------------------
|
| F1-UP COLOR TEXT
|
| F2-DOWN COLOR TEXT
|
| F3-UP COLOR BACKGROUND
|
| F4-DOWN COLOR BACKGROUND
|
| F5-UP COLOR BORDER
|
| F6-DOWN COLOR BORDER
|
|
| EXIT WITH <CR>
|
|--------------------------


|--------------------------
|
|  DATA MANIPULATION MENU
|
|--------------------------
|
|            Log
|
|        Exponential
|
|      Powers - Roots
|
|       Add Constant
|
|        Set Scale
|
|       Sort Records
|
|     Set Record Scope
|
|        System Menu
|
|--------------------------












|--------------------------
|
|  GRAPHICS  MENU
|
|--------------------------
|
|      Histogram
|
|     Scatter Plot
|
|      Line Plot
|
|    Multi-Line Plot
|
|  X-Bar and R Chart
|
|     Pareto Chart
|
|      Bar Chart
|
|    Curve Fitting
|
|      System Menu
|
|--------------------------


|--------------------------
|
|     CURVE FITTING
|
|--------------------------
|
|    Least Squares
|
|        Powers
|
|      Exponential
|
|       Logarithmic
|
|  Multiple Regression
|
|      System Menu
|
|--------------------------

Copywrite (c) Gerald Mele 1987
125 Moose Hill Road
Oxford, Ct. 06483
203-888-4544

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1618

     Volume in drive A has no label
     Directory of A:\

    FILE1618 TXT      2591  10-18-89   7:44p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       540  10-13-89   3:33p
    STAT     DOC      4452   9-15-88   1:42p
    STAT     EXE    127816   1-01-80   2:52p
    TEST     DBF       815   9-20-88   7:51a
            6 file(s)     136252 bytes
                           22016 bytes free
