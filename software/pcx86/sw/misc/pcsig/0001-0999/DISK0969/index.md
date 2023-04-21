---
layout: page
title: "PC-SIG Diskette Library (Disk #969)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0969/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0969"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ERROR.TXT

{% raw %}
```
Unmatched number of parameters                                                  Has been defined private already                                                Cannot find procedure file                                                      Syntax error in filter expression                                               Cannot locate command file                                                      Not a Character expression                                                      File currently open                                                             No more variable space available                                                Maximum number of variables exceeded                                            File does not exist                                                             Data item not found                                                             Macro must be a character string                                                Either syntax error in expression, or data type mismatch,or variable undefined  Must operate on data type                                                       Invalid variable name                                                           Undefined variable encountered                                                  Invalid drive specifier                                                         Invalid report form file                                                        Report stack overflow                                                           You must use character string for file names, field names or variable names     Unrecognizable dCode, incompatible object file                                  Error creating file                                                             Error opening file                                                              Error closing file                                                              Error reading file                                                              Error writing file                                                              Error positioning in file                                                       BAD field name                                                                  BAD field type                                                                  Record out of range                                                             Not a dBASE III data base                                                       No such record in index                                                         Illegal key                                                                     No data base in use in area                                                     No INDEX file in use in area                                                    Creating from this file would end up with more than max. allowed # of fields!   Creating from this file would end up with more than max. allowed record size!   Index SYNC error                                                                Maximum allowed number of records reached                                       FIELD not found                                                                 Too many digits                                                                 Printer not ready                                                               Not enough memory                                                               Mode error in forming file name                                                 Illegal work area number or alias                                               PARSER STACK OVERFLOW                                                           MACRO STACK OVERFLOW                                                            Not a LABEL file                                                                Illegal relation expression                                                     Editor stack overflow                                                           Filter expression not logical                                                   Cyclic relation not allowed                                                     No more file name space                                                         Too many relations in this chain                                                Bad path name                                                                   File server module error                                                        Binary file not found                                                           Memory allocation error                                                         Memory de-allocation error                                                      Maximum number of load modules exceeded                                         Feature not yet implemented                                                     Invalid function key or function number                                         Value out of range                                                              Stack underflow                                                                 Undefined function encountered                                                  Passing variable not defined                                                    Illegal function parameter(s)                                                   Expression stack overflow                                                       Maximum number of READs in a format file has been exceeded                      							
```
{% endraw %}

## ERROR2.TXT

{% raw %}
```
Unmatched number of parameters                                                  Has been defined private already                                                Cannot find procedure file                                                      Syntax error in filter expression                                               Cannot locate command file                                                      Not a Character expression                                                      File currently open                                                             No more variable space available                                                Maximum number of variables exceeded                                            File does not exist                                                             Data item not found                                                             Macro must be a character string                                                Either syntax error in expression, or data type mismatch,or variable undefined  Must operate on data type                                                       Invalid variable name                                                           Undefined variable encountered                                                  Invalid drive specifier                                                         Invalid report form file                                                        Report stack overflow                                                           You must use character string for file names, field names or variable names     Unrecognizable dCode, incompatible object file                                  Error creating file                                                             Error opening file                                                              Error closing file                                                              Error reading file                                                              Error writing file                                                              Error positioning in file                                                       BAD field name                                                                  BAD field type                                                                  Record out of range                                                             Not a dBASE III data base                                                       No such record in index                                                         Illegal key                                                                     No data base in use in area                                                     No INDEX file in use in area                                                    Creating from this file would end up with more than max. allowed # of fields!   Creating from this file would end up with more than max. allowed record size!   Index SYNC error                                                                Maximum allowed number of records reached                                       FIELD not found                                                                 Too many digits                                                                 Printer not ready                                                               Not enough memory                                                               Mode error in forming file name                                                 Illegal work area number or alias                                               PARSER STACK OVERFLOW                                                           MACRO STACK OVERFLOW                                                            Not a LABEL file                                                                Illegal relation expression                                                     Editor stack overflow                                                           Filter expression not logical                                                   Cyclic relation not allowed                                                     No more file name space                                                         Too many relations in this chain                                                Bad path name                                                                   File server module error                                                        Binary file not found                                                           Memory allocation error                                                         Memory de-allocation error                                                      Maximum number of load modules exceeded                                         Feature not yet implemented                                                     Invalid function key or function number                                         Value out of range                                                              Stack underflow                                                                 Undefined function encountered                                                  Passing variable not defined                                                    Illegal function parameter(s)                                                   Expression stack overflow                                                       Maximum number of READs in a format file has been exceeded                      							
```
{% endraw %}

## FILES969.TXT

{% raw %}
```
Disk No  969
Program Title: PERSONAL CHECKING ACCOUNT MANAGEMENT SYSTEM (Disk 2 of 2)
PC-SIG version 1
 
    PERSONAL CHECKING ACCOUNT MANAGEMENT SYSTEM is a menu-driven program
based on dBASE-III+/dBXL command files. These files are set up to minimize
errors, and ease reporting of data on any checking account. Menu selections
include new check/charge entry, deposit entry, check cancellation, deposit
cancellation, balance inquiry, screen listing of a portion or all of the
check register file, listing of all uncancelled items, editing of any item,
creation of a new register, and a means of restarting the program for a
different check register data file without needing to exit to the operating
system. A minimum of computer knowledge is assumed. PC-CHECK is a good
checking account management system. That is useful for home or even for
businesses. The program is well-documented.
 
Usage: Personal Checking
 
System Requirements: 320K memory and two floppy drives.
 
How to Start: Type: BCHECK3 (press enter).
 
Suggested Registration: $25.00
 
File Descriptions:
 
BCHECK3  EXE    Main program.
CHECKING DOC    Documentation.
TEST3    DBF    Sample Data File.
CHKSHELL DBF    Shell or Template of the correct data file.
CONFIG   SYS    Configuration file.
ERROR    TXT    Error messaging file.
ERROR2   TXT    Error messaging file.
CCHRPORT FRM    Overlay File.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0969

     Volume in drive A is DISK0969
     Directory of A:\

    BCHECK3  EXE    230850   6-04-87   2:21p
    CCHRPORT FRM      1990   2-22-87   3:16p
    CHECKING DOC     99456   6-07-87   8:53p
    CHKSHELL DBF       512   6-08-87  10:16a
    CONFIG   SYS       128   6-04-87  10:36a
    ERROR    TXT      5632  10-28-86   5:17p
    ERROR2   TXT      5632  10-28-86   5:17p
    FILES969 TXT      1506  12-18-87   9:29a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-15-87   1:23p
    TEST3    DBF      3754   6-04-87  12:44p
           11 file(s)     350038 bytes
                            6144 bytes free
