---
layout: page
title: "PC-SIG Diskette Library (Disk #1981)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1981/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1981"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1981.TXT

{% raw %}
```
Disk No: 1981                                                           
Disk Title: The Electrical DBS Disk    Disk 5 of 5                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Electrical DBS disk                                  
Author Version: 02/12                                                   
Author Registration: $45.00                                             
Special Requirements: None.                                             
                                                                        
THE ELECTRICAL REFERENCE DATABASE gives electricians, engineers,        
designers, and panel shop operators one place on your computer where you
can go to and find those little notes that only experience produces.  In
this case an experienced professional has given you his experience and  
created a forum for you to add your own.                                
                                                                        
Databases include:                                                      
                                                                        
~ D.C.  MOTORS                                                          
                                                                        
~ SINGLE PHASE MOTORS                                                   
                                                                        
~ THREE PHASE INDUCTION MOTORS                                          
                                                                        
~ THREE PHASE WOUND ROTOR MOTORS                                        
                                                                        
~ THREE PHASE SYNCHRONOUS MOTORS                                        
                                                                        
~ NEMA DATA                                                             
                                                                        
~ MOTOR FRAME SIZES                                                     
                                                                        
~ THREE PHASE CONDUCTORS AMPACITIES                                     
                                                                        
~ SINGLE PHASE CONDUCTOR AMPACITIES                                     
                                                                        
~ MAXIMUM CONDUCTORS IN CONDUIT                                         
                                                                        
~ THREE PHASE TRANSFORMERS                                              
                                                                        
~ RECOMMENDED COPPER WIRE AND TRANSFORMER SIZES                         
                                                                        
Motor databases provide information as to full load currents, motor over
current protection rating, the size or guage of the wire required to    
connect one motor of that particular horsepower in a general purpose    
application, the conduit trade size required to house the wire, the NEMA
size starter recommended,the amperage and the recommended fusing.       
                                                                        
The present data is referred to as "seed" data just to get you started. 
You may add and delete data as you like.  Each data base may can handle 
a maximum of 32000 entries.                                             
                                                                        
Each database is menu-driven and complete with it's own help function   
and notes field.  Use this data base as a tool - not as a replacement   
for the NATIONAL ELECTRICAL CODE manual!  All information assumes a     
single motor installation.  Consult your N.E.C. manual for the details  
of your particular installation.                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES_5.DOC

{% raw %}
```

 Volume in drive A has no label
 Directory of  A:\

NEC      COM    19049   1-01-80   1:51a
YOURSYS  COM    26516   9-22-87   1:25a
SBMIO    COM    11291   9-22-87   1:25a
MESSAGE  1        178   1-01-80  12:51a
RUN      BAT       64   1-01-80  12:47a
SBMSIO   CHN    27209   9-22-87   1:25a
MANUAL   DOC     5802   1-01-80  12:32a
HELP     TXT     2762   9-22-87   1:25a
THREXFMR CHN    23128   1-01-80  12:35a
FILES_5  DOC        0   2-12-89  11:23a
       10 File(s)    240640 bytes free
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk #1981  THE ELECTRICAL DBS DISK  >>>>             ║
║                (disk 5 of 5, 1977, 1978, 1979, 1980 also)               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install files onto your hard drive, insert disk 1 and type: INSTALL  ║
║                                                                         ║
║ To start program, type: RUN          (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.TXT

{% raw %}
```
───────────────────────────────────────────────────────────────────────────────
KEY         FUNCTION         COMMENT
───────────────────────────────────────────────────────────────────────────────
 F          Find Record.     With this function you can find a record in any
                             file by any key.

 E          Edit Record.     Edit the highlighted record.

 D          Delete Record.   The highlighted record and subrecords are deleted.

 A          Add Record.      Allows addition of a new record to the file.
 C          Copy Record.     Same as Add but copies fields from current record.

 Q          Quit to Menu.    Quit back to the main menu.

 N          Next Record.     The next record will be displayed.
 P          Previous Record. The Previous record will be displayed.

 T          First Record.    The first record will be displayed.
 L          Last Record.     The last record will be displayed.

 +/-        Switch Files.    Switch to next or previous file in Database.
───────────────────────────────────────────────────────────────────────────────
───────────────────────────────────────────────────────────────────────────────
                         ─* EDIT MODE KEYS *─
───────────────────────────────────────────────────────────────────────────────
F1          Abort Edit/Add.  This key may be used to Abort the Edit or Add
                             functions.  The data files will not be updated.
F5          Delete Field.    The field is deleted from the cursor position to
                             the end of the field and the cursor is placed at
                             the left margin of the field.
F9          Done Edit/Add.   This key is used to end editing. The record is
                             written to the data files.
Tab key     Skip to margin.  This function will skip to start or end of field
                             contents.
─┘ key     End field edit.  This key will end editing in the current field.
                             The cursor is moved to the next field.
─          Backspace.       This key will cause the cursor to move left and
                             erase the character to the left.
Ins         Insert Toggle.   This key will toggle the insert mode On/Off.
Del         Delete char.     The character under the cursor will be deleted.
           Field Up.        This key is used to move to the previous field.
           Field Down.      This key is used to move to the next field.
           Cursor Left.     This key moves the cursor to the left.
Ü           Cursor right.    This key moves the cursor to the right.
───────────────────────────────────────────────────────────────────────────────
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1981

     Volume in drive A is DISK1981
     Directory of A:\

    FILE1981 TXT      4589   1-04-90  11:53a
    FILES_5  DOC       507   2-12-89  11:23a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   1-01-80   3:40a
    HELP     TXT      2762   9-22-87   1:25a
    MANUAL   DOC      6345   2-12-89   1:07p
    MESSAGE  1         178   1-01-80  12:51a
    NEC      COM     19049   1-01-80   1:51a
    RUN      BAT        64   1-01-80  12:47a
    SBMIO    COM     11291   9-22-87   1:25a
    SBMSIO   CHN     27209   9-22-87   1:25a
    THREXFMR CHN     23128   1-01-80  12:35a
    YOURSYS  COM     26516   9-22-87   1:25a
           13 file(s)     122447 bytes
                           33792 bytes free
