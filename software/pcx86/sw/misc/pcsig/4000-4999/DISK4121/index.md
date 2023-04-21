---
layout: page
title: "PC-SIG Diskette Library (Disk #4121)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4121/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4121"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LATENEWS.DOC

{% raw %}
```
KWIKSTAT 3.3 LATENEWS, Release 3

Corrections to manual:

p 1-13,14: The figure 1.7 should show a pick (menu) list of field names.
Use up and down arrow keys to highlight field/variable to choose, then
press Enter, or point to the field name with the mouse pointer
and click once. Throughout the manual, when you choose one field for
an analysis, a pick list is used rather than typing in the number
of the field name. (see note 2 below)
                  
p. 4-26: The table should be:

Gp1     Gp2     Gp3     Gp4
60.8    78.7    92.6    86.9
67.0    77.7    84.1    82.2
54.6    76.3    90.5    83.7
61.7    79.8            90.3

The formula on page 4-43 should read:

U = n1n2 - [n1(n1+1)]/2 - S

The only difference is that the 90.3 is in Gp4 instead of Gp3.

1. Loading KWIKSTAT in a subdirectory that had a previous version of 
KWIKSTAT will not overwrite any of your DBF files. To save space on disk, 
erase old Kwikstat programs prior to ver 3. (ERASE *.EXE), or load 
Kwikstat in a different directory (e.g., \KS33).

2. Some actual screens may differ from the ones in the manual, since some do 
not reflect changes made for mouse support. An important difference is
when you are asked to choose a field for analysis. In the manual, and
in some of the examples, you are told to press 2, for example, to choose
the second field name. Now, in many instances, fields appear in a menu-like
list. In this case, instead of pressing 2, you use the up and down arrow
keys to highlight your choice, then press Enter, or use the mouse pointer 
to choose the field by name.

3. In several analyses, a late change has been made to give you more support 
in viewing and printing the results of an analysis. In most cases, you will 
be asked if you want to view/print results. If you answer Yes, a viewer will 
be used to display the results of an analysis. Using the button bar commands
at the bottom of the screen, you can press function keys or click with a 
mouse to output the report (to a file or printer), add a title to the report, 
set the left margin, choose a printer code, or exit from the viewer.

If you save the contents of the viewer to a file, you can merge the 
information into your word processor, or view/print the information 
at a later time. To use the viewer from the DOS prompt, enter TXVIEW and
the name of the file to view. The viewer works on all ASCII text files.
For example, if you want to view a file named REPORT.TXT, you would enter 
the command

        TXVIEW REPORT.TXT

4. Hercules graphics are supported on all modules except Simulations. Use a
Hercules/CGA Simulator such as SIMCGA or HGCIBM (both shareware programs) 
to allow you to run the simulations module on a Hercules monitor. If you 
use a simulator, specify a CGA monitor in the setup routine. Printing
graphics screens in the simulations module is not supported.

5. When displaying some graphs in EGA or VGA mode, you can change colors
using the following keys

F1, F2, F3 - change display colors
F5 - go to black and white
F6 - white on black
F8,F9,F10 - change background in VGA mode (gradual changes)

6. Version 3.3 supports display and printing of graphs in EGA and VGA modes
on Epson and HP Laserjet compatible printers. This allows much nicer results 
in the printout of graphs. Not all combinations of printers and monitors are 
supported when printing graphs. If you have problems printing graphics, try 
another selection in the setup routine (Helps menu) For example, if you are 
unable to print using the high resolution Epson or Laserjet options, try the 
low resolution options. The high resolution options ONLY work for EGA and VGA 
monitors and high-res Epson or Laserjet printers. 

7. You can capture an EGA or VGA graphic screen into a PCX file. Display a 
captured PCX graph by using the command SHOW from the DOS prompt. For 
example, if you capture the file named GRAPH.PCX, enter 

        SHOW GRAPH.PCX EGA

if captured in EGA mode. Use VGA in the command if captured in VGA mode. 
Captured graphs can be imported into programs such as word processors,
slideshow programs, publishing programs, etc. that support the PCX
standard. When you import into WordPerect, you usually need to choose
to change the graph to black and white, invert the colors and scale
the graph to get the best detail.

8. Because it caused so many questions, a plot now usually does not ask 
you what monitor type to use -- it uses only the one you specified in 
the setup. This (hopefully) means that the program will be able to 
handle printing graphs more consistently. If you miss this feature, you
can bring it back by copying the file SHOW.BAT to MCHOICE.INI (i.e.
COPY SHOW.BAT MCHOICE.INI). If you want a plot displayed in a different
monitor type, or if you like the way it prints using a different monitor
type (some people like the CGA/Laserjet printout better than the 
VGA/Laserjet printout), you can choose a different monitor/printer by
choosing the Setup option from the Helps menu or by running the KSETUP
program from the DOS prompt.

9. In crosstabulations, you are given the option to choose what numbers
will appear in the table - Expected values, Contribution to Chi-Square
and Row/Col/Total Percents. The new entry not descibed in the manual is
called CONTRIB. This number is the "contribution to Chi-Square". That
is, the number shows how much a particular cell contributed to the
size of the Chi-Square statistic. This often comes in handy when you
are trying to discover what may have caused a table to result in a
low p-value (a high Chi-Square statistic).

10. Copy/Backup option in Data menu - this option allows you to copy a
database to a new filename or destination or to make a backup copy of 
your database. If you are going to be doing manipulation of a database, 
it is a good idea to make a backup first, in case a problem occurs that 
effects data in your original database. 

11. Multiple regression now allows 20 variables. However, if you push the
program to the limit with many variables and hundreds of records, you may 
run into an out-of-memory problem.

12. The maximum length of a path for Kwikstat is 30 characters.

13. Beginning with release 3, there are two additional functions available 
in the database. AVE(list) and SD(list), which calculates an average of the 
listed fields and SD calculates the standard deviation. For example, If you 
have fields named REP1, REP1 and REP3, doing a Field Replace with 
=AVE(REP1,REP2,REP3) will place the average in the field. Doing a Field 
replace with =STD(REP1,REP2,REP3) will place the standard deviation of the
tree numbers in the field. Add the Math Calculator functions to the table 
on page 2-51. 

14. To support network use, Release 3 causes all temporary files to be 
stored on the defined default path (you specified in setup). This means 
that if you are running Kwikstat on a network, using your local machine as 
the default Kwikstat path, all temporary files used by Kwikstat will be 
stored on your local disk. This prevents problems caused by more than two 
people trying to access the same temporary file at the same time. 

15. When you choose edit from the Data menu, it goes directory to record 1 
for editing. Use the Goto (F5) to move to a specific record once you are in 
editing mode. 
```
{% endraw %}

## PRINTERS.DOC

{% raw %}
```
PRINTING GRAPHICS SCREENS 

Kwikstat works best with CGA, EGA or VGA compatible monitors with Epson
or HP Laserjet compatible printers. If you are using a different 
combination of printer/monitor you may not be able to print all 
resolutions of graphics. Normally, graphics printing is built into
Kwikstat, but for special cases, external graphics programs may
be required to allow you to print graphic displays. If an external 
graphics program is required, the command for the program is placed
in the KS.BAT file so that the program is activated each time you run 
KS. Also, a MARK and RELEASE command are used to mark the location of the
memory resident program in memory, then release the memory when you
finish using Kwikstat. Here are brief descriptions of some of the printer 
programs used. If you are still not able get graphics to print, we can 
provide you with a disk containing additional printer support. 

EPSON.COM
=========
A replacement for GRAPHICS.COM, and may be used with a variety of dot 
matrix printers. Many printers emulate Epson type graphics, so even if your 
printer is not an Epson, this routine may still work. 

SCRNDMP.COM
===========
SCRNDMP v 1.02 will install an enhancement to the PrtSc key which adds 
graphics printing support for Hercules Mono, Color Graphics Adapter (mono 
mode) and Enhanced Graphics Adapter (6430x350 Color). Printers supported 
are Okidata 92, Okidata 192, Epson/IBM, and C.Itoh Prowriter. Only the 
selected driver remains resident. Copyrighted by Hardwood Software 
Associates. Entered into public domain for non-commercial use only. Version 
1.02 corrects page selection on EGA. Used by permission.

Instructions for using SCRNDMP
Usage:  SCRNDMP /g /p
Where:  g = E[GA] for Enhanced Graphics(640x350 Color)
          = C[GA] for Color Graphics(640x200 Mono only)
          = H[ercules] for Herc Mono Graphics (720x348 Mono)
        p = E[PSON] for EPSON/IBM printer
          = C[ITOH] for CITOH PROWRITER/PROWRITER II printer
          = 1[92] for OKIDATA 192 printer
          = 9[2] for OKIDATA 92 printer

EXAMPLE:Suppose you had a Hercules type monitor setup, and an Epson 
printer.  You would enter the following command at the DOS prompt: 

   C>SCRNDMP /h/e

When you press Print Screen or choose Print from a graphics menu, 

   1)If the screen is a text screen, press the spacebar.
   2)If the screen is a graphics screen, press the number 1 on the upper
   row of number keys.

If no key is pressed within 10 seconds the regular text print screen 
routine is used. Graphics printing in progress can be canceled by pressing 
'ESC'. 

GRAF.COM
========
(Graftrax) A replacement for GRAPHICS.COM, with Epson Graftrax and IBM 
Graphics printers. 

LASERJET.EXE
============
The LASERJET/THINKJET PRINT SCREEN utility allows you to print the contents 
of your display screen using the HP LaserJet or compatible printers. The 
normal command to use the LASERJET program is with the following command: 

C>LASERJET A

To print the contents of the PC display, perform the following two-step 
procedure: 

a.  Press "SHIFT-PrtSc" (or P in a KWIKSTAT graphics screen.) After a 
5-second delay, your display screen will be dumped to the printer. 

b.  You may select any of the options from the list below by pressing the 
key of the desired option within 5 seconds.  

                          KEY              OPTION
  ORIENTATION            * P -- PORTRAIT ORIENTATION
                           L -- LANDSCAPE ORIENTATION
  PRINT POSITIONING      * T -- TOP OF PAGE (PORTRAIT MODE ONLY)
                           M -- MIDDLE OF PAGE (PORTRAIT MODE ONLY)
                           B -- BOTTOM OF PAGE (PORTRAIT MODE ONLY)
  PAPER EJECTION         * Y -- AUTO FORM FEED AT END OF PAGE
                           N -- NO AUTO FORM FEED AT END OF PAGE
  ENTER KEY -- TERMINATES 5-SECOND TIME-OUT PERIOD, *=Default values

HERCLJ
=======
This program is similar to the LASERJET program described above. Use the 
command HERCLJ A. 

```
{% endraw %}

## SITELICE.DOC

{% raw %}
```

                                 K W I K S T A T
                                 ---------------
     
                                   VERSION 3.3
                                   -----------
     
               S I T E    L I C E N S E    I N F O R M A T I O N
               ---------------------------------------------------
     
     What is a site license?  A site license is an inexpensive way for more 
     than one person to legally use one copy of a program on more than one 
     computer at a time. Site licenses are designed for companies, offices 
     or workgroups where more than one person in the organization needs to 
     use a product, but does not need additional manuals or disks. Site 
     licensing enables companies, departments, government agencies, etc., 
     to equip their personnel with the tools they need at a minimal cost. 
     
     Here's the gist of how it works:  The company purchasing a site 
     license (the licensee) provides a single point of contact for 
     shipping, technical support, upgrades, etc., and we (the licensor) 
     provide a "golden master" of the diskettes, manual, and any other 
     parts of the package. 
     
     The following chart gives a breakdown of the cost of site licensing 
     and how much you save per site licensed. For instance, if you 
     purchased a site license for 11 users (sites) your cost would be 
     $531.30, which saves you $227.70 off the cost of 11 separate 
     purchases. The more sites you license, the more you save. 
     
                                  KWIKSTAT       KWIKSTAT PLUS
                    Discount      Price Per       Price Per
     Quantity       Percentage      Unit            Unit
     
      1 -  10           0%          $69.00         $99.00
     11 -  20          30%          $48.30         $69.30
     21 -  50          40%          $41.40         $59.40
     51 -  100         50%          $34.50         $49.50
     101-  200         60%          $27.60         $39.60
     201+           Please contact TexaSoft
     
     For a full copy of the site license agreement, please contact:
     
          TexaSoft                               Voice:  (214) 291-2115
          P.O. Box 1169                            FAX:  (214) 291-3400
          Cedar Hill TX 75104               CompuServe:  70721,3145
          U.S.A.                        Toll-free (US): 800-955-TEXAS
     













```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4121

     Volume in drive A has no label
     Directory of A:\

    KSHELP   330     14435  12-26-92   3:33a
    FTIPS    BAT       218  12-26-92   3:33a
    MAKEDATA BAT      1461  12-26-92   3:33a
    PRINTDOC BAT       331  12-26-92   3:33a
    README   BAT       797  12-26-92   3:33a
    SHOW     BAT       543  12-26-92   3:33a
    EX       DAT      1451  12-26-92   3:33a
    EXCOMMA  DAT      1844  12-26-92   3:33a
    CAR      DBF      2080  12-26-92   3:33a
    CITY     DBF      1850  12-26-92   3:33a
    ELDERLY  DBF      2240  12-26-92   3:33a
    EXAMPLE  DBF      1664  12-26-92   3:33a
    FAMILY   DBF      1120  12-26-92   3:33a
    LIFE     DBF      1632  12-26-92   3:33a
    LONGLEY  DBF       914  12-26-92   3:33a
    MD       DBF       962  12-26-92   3:33a
    PERSONN  DBF      1824  12-26-92   3:33a
    FILE_ID  DIZ       317  12-26-92   3:33a
    FTIPS    DOC      5716  12-26-92   3:33a
    KS       DOC    128541  12-26-92   3:33a
    LATENEWS DOC      7448  12-26-92   3:33a
    PRINTERS DOC      4096  12-26-92   3:33a
    SITELICE DOC      2505  12-26-92   3:33a
    KS3      EXE      3485  12-26-92   3:33a
    KS3LIFE  EXE     31451  12-26-92   3:33a
    KS3SIMU  EXE     26907  12-26-92   3:33a
    KS3UTIL  EXE     38811  12-26-92   3:33a
    TXHELP   EXE      3474  12-26-92   3:33a
    TXPRT    EXE      7771  12-26-92   3:33a
    TXVIEW   EXE     15595  12-26-92   3:33a
    BAR1     IMG       527  12-26-92   3:33a
    BAR2     IMG      1031  12-26-92   3:33a
    BEETLE   IMG       512  12-26-92   3:33a
    CAT      IMG       768  12-26-92   3:33a
    PC       IMG       384  12-26-92   3:33a
    PERSON   IMG       628  12-26-92   3:33a
    TXVIEW   PRT       364  12-26-92   3:33a
    TEST     WKS      2423  12-26-92   3:33a
           38 file(s)     318120 bytes
                           24576 bytes free
