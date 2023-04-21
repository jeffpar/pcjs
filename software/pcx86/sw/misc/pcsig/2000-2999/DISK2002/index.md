---
layout: page
title: "PC-SIG Diskette Library (Disk #2002)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2002/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2002"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QUATTRO & 1-2-3 FOR WORDPERFECT"

    QWP makes life easier for editors and others who frequently
    incorporate spreadsheets into WordPerfect documents.  QWP converts
    Lotus 1-2-3 (Versions 1A and 2.1) and Quattro (Versions 1.0 and 1.1)
    spreadsheet files into WordPerfect 4.2 files (readable by WordPerfect
    Versions 4.2 and above).
    
    QWP allows column alignments to be maintained when the WordPerfect user
    wishes to incorporate a spreadsheet into a document formatted for a
    printer using proportional spacing.  This offers an advantage over the
    commonly used technique of "printing" spreadsheets to an ASCII format
    disk file and importing them into WordPerfect, because the conversion
    process translates all tabs into a fixed number of spaces.  QWP
    automatically calculates an appropriate tab format for each line, even
    as data types change.
    
    Most users who are already familiar with Lotus 1-2-3 or Quattro and
    WordPerfect will find QWP's documentation adequate to get them
    started.  However, they should be prepared to experiment a bit in order
    to produce exactly the results they want.  This time will be repaid by
    eliminating hours reformatting or retyping a spreadsheet in order to
    align the columns.
    
    The registration provisions are unusually generous, allowing a
    registered user to make an unlimited number of copies for all
    machines located at a single street address.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2002.TXT

{% raw %}
```
Disk No: 2002                                                           
Disk Title: Quattro & 1-2-3 for WordPerfect                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Quattro & 1-2-3 to WordPerfect                           
Author Version: 1.02                                                    
Author Registration: $25.00                                             
Special Requirements: Lotus 1-2-3 or Quattro, Word Perfect.             
                                                                        
QWP.EXE may make life easier for editors and others who frequently must 
incorporate spreadsheets into WordPerfect documents.  QWP.EXE converts  
Lotus 1-2-3 (Versions 1A and 2.1) and Quattro (Versions 1.0 and 1.1)    
spreadsheet files into WordPerfect 4.2 files.  These may be read        
directly by WordPerfect Versions 4.2 - 5.0.  QWP.EXE allows column      
alignments to be maintained when the WordPerfect user wishes to         
incorporate a spreadsheet into a document formatted for a printer using 
proportional spacing.  This offers an advantage over the commonly used  
technique of "printing" spreadsheets to an ASCII format disk file and   
importing them into WordPerfect, because the conversion process         
translates all tabs into a fixed number of spaces.  QWP.EXE             
automatically calculates an appropriate tab format for each line, even  
as data types change.                                                   
                                                                        
Most users who are already familiar with Lotus 1-2-3 or Quattro and     
WordPerfect will find QWP.EXE's documentation adequate to get them      
started.  However, they should be prepared to experiment a bit in order 
to produce exactly the results they want consistently on the first or   
second try.  Once they are familiar with the program, however, this     
investment in time will be repaid when they no longer have to spend     
hours reformatting or retyping a spreadsheet because they couldn't      
get the columns to line up in a WordPerfect document formatted for      
proportional spacing on a laser printer.                                
                                                                        
A potential frustration in the learning process is that, despite its    
relative ease of use, the error handling of QWP.EXE is weak.  The       
program queries the user for information regarding things such as the   
name of the output file to be created, the spreadsheet ranges to be     
converted, what borders to include, etc.  At certain points, hitting    
ENTER without providing the requested information or trying to ESCAPE   
from a prompt to which you don't know the answer may result in the      
system hanging and needing to be rebooted.  However, this is an         
inconvenience which, hopefully, will be addressed in future versions    
of QWP.EXE and not a fatal flaw.                                        
                                                                        
The registration provisions are unusually generous, allowing a          
registered user to make an unlimited number of copies for all           
machines located at a single street address.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## QWP.DOC

{% raw %}
```
QWP.EXE   (C) Copyright 1989   Stephen J. Lowens    Version 1.04
 
  
QWP.EXE  A file format translation program.  
         Translates Quattro and 1-2-3 files into WordPerfect 4.x. 
         Output can be used in WordPerfect versions 4.x and 5.0. 

LICENSE

  
QWP is distributed as user supported software.  It is not in the 
public domain and it is not free software.  You may use the program
on a trial basis to determine if it is useful to you.  You may also
make copies for distribution to others for evaluation purposes. 
If you use the program for productive work, please send a license
fee of $25 to:  

         Stephen Lowens  
         1644 Oak View Avenue  
         Kensington, CA 94707  
  
The fee permits the use of the program on an unlimited number of
computers located at a single street address.  

Upon request, I will send you a copy that bypasses the help screen
and request for license message when the program starts.
  
WHAT QWP DOES

QWP translates spreadsheet files into a format that can use fixed 
or proportional spaced fonts in WordPerfect.  Columnar spreadsheet
data is analyzed by the program to determine whether the data
should be right or left justified in each column.  The program
automatically develops the appropriate tab format line, and will
change the tab line if the data types change.  The program also
inserts the proper code for left tab or right alignment before each
cell value.  
  
The program solves the problem caused by the interaction of blank 
spaces in a line composed of proportional font text.  

BEFORE YOUR RUN QWP

QWP can extract data from a Quattro or 1-2-3 file in two ways:
using range names or cell coordinates.  You can specify range names
within the spreadsheet which identify the data to be extracted, or
you can enter coordinates of the cells directly into QWP.  In
general, you will find it easier to identify range names within the
spreadsheet before saving it, and then enter those range names into
QWP.  Up to 50 ranges of data can be extracted from a single
spreadsheet in a single pass  of the program.  


QWP.EXE   (C) Copyright 1989   Stephen J. Lowens  


RUNNING QWP
  
To start the program, type "QWP."  
  
After QWP is started, you will be presented with a listing of 
spreadsheet names in the current directory.  Cursor keys or the  
first letter of the file name can be used to select the file.  
  
An output file name is then requested.  Any legal DOS name can be 
specified.  
  
Two parameters are then requested.  The "Left Margin" should  
correspond with the default left margin that is used in WordPer- 
fect.  Note that QWP's Left Margin is in "characters", rather  
than inches or points.  The QWP value may thus be different than 
the WordPerfect Left Margin.  Some experimentation may necessary 
to establish the value that works best for you.  
  
The "Multiplier" value is used to spread or compress the data  
horizontally.  The value should be greater than 0.0.  A value less 
than 1 will squeeze the data together.  A value greater than 1 will
spread it apart.  The value 1.0 is recommended as a starting point.

The program will then present a selection screen for range names. 
The names should be selected in the order in which they are to be 
translated.  Select the name "Specify" if you want to specify the 
upper left and lower right hand corners of a range inside QWP.  The
label "Quit" ends the selection process and initiates format
translation. 

For each data range, the program also has an option of identifying
one or more "border" columns.  These borders work just like 1-2-3
or Quattro border columns.  They allow you to print a set of
columns that is not adjacent to your main data range. An example:

	Say that your desired data range is from K40 to Z99.  This is  
  probably too wide for the page, so you will convert it in three
  sections.  Say that columns J,K and L contain information
  relevant to all of the other columns, and you would like to see
  them printed with all of the rest of the data.  One way to do
  this would be to set up three data ranges, one from M40 to P99,
  one from Q40 to U99, and one from V40 to Z99.  Save these as
  rangenames in the spreadsheet.  When you identify each of these
  rangenames inside QWP, enter columns J and L as the left and
  right boundaries for the borders.  You need specify these borders
  only once.  Select "Retain Borders" for the other two ranges. 
  Columns J, K and L will be printed with each range.
 
QWP.EXE   (C) Copyright 1989   Stephen J. Lowens  

WHAT YOU GET OUT OF THIS

The resultant file will be in WordPerfect 4.2 format.  This format 
can be directly read by WordPerfect 5.0.  You will need to page  
down through the file the first time to get it to appear properly 
on the screen.  

QWP SUPPORTS:

    1-2-3 Versions 1A and 2.1; Quattro Versions 1.0 and 1.1.
    General,fixed,currency,percent,comma,date and time formats.
    Left,right and repeating (\) labels.
    Hidden Columns and cells.

FIVE CAUTIONARY NOTES:  
  
A  QWP  does not split lines that are longer than a default line
   length.  If you desire to print an area that is wider than a  
   typical page, you will need to specify separate ranges for    
   each horizontal section. You may use the "Borders" option
   just like in Quattro or 1-2-3 to repeat border columns with
   each range of data.

B  If the columns do not appear to line up in the WordPerfect    
   document, the space available in WordPerfect may not be wide  
   enough for the data.  If this occurs, there are four options: 
  
       1. Select a smaller multiplier value in QWP.  
       2. Reduce the value of the left and right margins in both
          QWP and WordPerfect.  
       3. Select a smaller font in WordPerfect.  
       4. Use landscape mode in WordPerfect.  
 
  
C   Because spreadsheet files effectively work with fixed space  
    fonts and current word-processing favors proportional spacing, 
    it is not always possible to get an ideal translation between 
    the two formats, particularly where spreadsheet labels are   
    long. In QWP, this may be a problem where a label is longer  
    than the cell width.  QWP includes code to make a best guess 
    in this case.  However, the most successful use of the program 
    will occur in spreadsheets where labels are always no longer 
    than the width of the cell in which they reside.  

D   QWP Version 1.0 is incompatible with 1-2-3 Vsn 3.

E   QWP does not insert margin changes into the WordPerfect file. 
    If margin changes are needed, they should be done before the
    file is imported into WordPerfect.


QWP.EXE   (C) Copyright 1989   Stephen J. Lowens 

TIPS AND TECHNIQUES

A    If the entire table is too tightly packed, select a larger 
     multiplier.  If the entire table is spread out to far, use
     a smaller multiplier.  If one column is the wrong width,
     change the column width inside Quattro or 1-2-3.

B    QWP reads through the spreadsheet from top to bottom.  If
     the program seems to be very slow and the spreadsheet is    
     large, try extracting the values of the data to be printed   
     into a separate spreadsheet, or move the data to be printed 
     to the top of the spreadsheet.

C    You should set the QWP "Left Margin" parameter so that the 
     resultant tab line in WordPerfect contains a tab on or just
     to the right of the left margin inside WordPerfect.

D 	Since there may be adjustments to the left margin and
     multiplier parameters, is advisable to run QWP out of the DOS
     Shell in WordPerfect.  In this way, QWP can be accessed, the
     parameters can be adjusted, and the resultant file can then
     be  directly imported into WordPerfect.  Parameter changes can
     be made by repeating this sequence.  However, if the WordPer-
     fect file is large, there may not be enough memory to run QWP
     out of the DOS shell more than once.  In this case, it will
     be necessary to run the programs separately.



Quattro is a trademark of Borland, International.  
WordPerfect is a trademark of WordPerfect Corporation.  
1-2-3 is a trademark of Lotus Development Corporation   



QWP.EXE   (C) Copyright 1989   Stephen J. Lowens

```
{% endraw %}

## SAMPLE.DOC

{% raw %}
```
SAMPLE.WK1 is a spreadsheet in Lotus 1-2-3 Version 2.1 format.  It
contains several range names and miscellaneous data and format
types to demonstrate the range of translation capabilities.

Column B can be used for a "test" border.

Column E is hidden.

There is data in cells B13 to G24 that can be used to test the
"Specify" option.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2002

     Volume in drive A has no label
     Directory of A:\

    FILE2002 TXT      3923   1-02-90   6:38p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:25a
    QWP      DOC      8444  11-04-89   6:18p
    QWP      EXE     88976  11-04-89   6:42p
    README   104      1559  11-04-89   9:20a
    SAMPLE   DOC       347  10-21-89   9:38a
    SAMPLE   WK1      3067  10-21-89   9:37a
            8 file(s)     106894 bytes
                           51200 bytes free
