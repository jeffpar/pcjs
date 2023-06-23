---
layout: page
title: "PC-SIG Diskette Library (Disk #2213)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2213/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2213"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REFERENCE MGMNT SYS-RSX #1 (2214 ALSO)"

    Reference Management System is a self-explanatory, menu-driven system
    for handling bibliographic references:  data entry, viewing, searching,
    tabulation, and reporting.  It provides data and index file
    compatibility with dBase III and III+, and it is compiled to provide
    operational speed.  It is organized in five basic menus covering related
    operations.  Searches include scanning, single and multi-item, and
    output can be sent to printer or disk in linear or card formats, with
    user control of included fields.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ERROR.TXT

{% raw %}
```
Unmatched number of parameters                                                  Has been defined private already                                                Cannot find procedure file                                                      Syntax error in filter expression                                               Cannot locate command file                                                      Not a Character expression                                                      File currently open                                                             No more variable space available                                                Maximum number of variables exceeded                                            File does not exist                                                             Data item not found                                                             Macro must be a character string                                                Either syntax error in expression, or data type mismatch,or variable undefined  Must operate on data type                                                       Invalid variable name                                                           Undefined variable encountered                                                  Invalid drive specifier                                                         Invalid report form file                                                        Report stack overflow                                                           You must use character string for file names, field names or variable names     Unrecognizable dCode, incompatible object file                                  Error creating file                                                             Error opening file                                                              Error closing file                                                              Error reading file                                                              Error writing file                                                              Error positioning in file                                                       BAD field name                                                                  BAD field type                                                                  Record out of range                                                             Not a dBASE III data base                                                       No such record in index                                                         Illegal key                                                                     No data base in use in area                                                     No INDEX file in use in area                                                    Creating from this file would end up with more than max. allowed # of fields!   Creating from this file would end up with more than max. allowed record size!   Index SYNC error                                                                Maximum allowed number of records reached                                       FIELD not found                                                                 Too many digits                                                                 Printer is either not connected or turned off                                   Not enough memory                                                               Mode error in forming file name                                                 Illegal work area number or alias                                               PARSER STACK OVERFLOW                                                           MACRO STACK OVERFLOW                                                            Not a LABEL file                                                                Illegal relation expression                                                     Editor stack overflow                                                           Filter expression not logical                                                   Cyclic relation not allowed                                                     No more file name space                                                         Too many relations in this chain                                                Bad path name                                                                   File server module error                                                        Binary file not found                                                           Memory allocation error                                                         Memory de-allocation error                                                      Maximum number of load modules exceeded                                         Feature not yet implemented                                                     Invalid function key or function number                                         Value out of range                                                              Stack underflow                                                                 Undefined function encountered                                                  Passing variable not defined                                                    Illegal function parameter(s)                                                   Expression stack overflow                                                       Maximum number of READs in a format file has been exceeded                      Structure invalid                                                               Syntax error in locate expression                                               Locate expression is not logical                                                Valid expression is either illegal or not of logical type                       Invalid order number                            
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║  <<<<  Disk #2213 REFERENCE MANAGEMENT SYSTEM 1 OF 2 (also 2214 >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program, type: INSTALL (press enter)                     ║
║                                                                         ║
║ To run the program, type: RSX  (press enter)                            ║
║                                                                         ║
║ To print documentation, type: COPY RSX.DOC PRN  (press enter)           ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2213

     Volume in drive A has no label
     Directory of A:\

    CHOOSE   COM       161  10-20-85   4:36p
    ERROR    TXT      5888   3-02-87   3:50p
    INSTALL  BAT     13254   1-09-90   7:00p
    README            1478   3-06-90   9:21p
    README-2          1023   5-26-90   5:49p
    RSX      DOC     64511   5-26-90   5:37p
    RSX      EXE    272064   5-28-90  11:00p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       729   1-01-80   9:48a
            9 file(s)     359146 bytes
                               0 bytes free
