---
layout: page
title: IBM PC Advanced Diagnostics 1.00
permalink: /software/pcx86/diag/ibm/5150/1.00/
redirect_from: /disks/pcx86/diags/ibm/5150/1.00/
machines:
  - id: ibm5150
    type: pcx86
    debugger: true
    config: /machines/pcx86/ibm/5150/mda/64kb/debugger/machine.xml
    autoMount:
      A:
        name: IBM PC Diagnostics 1.00
---

This disk displays the following startup messages:

    The IBM Personal Computer DIAGNOSTICS                                           
    Version 1.00 (C) Copyright IBM Corp 1981                                        
                                                                                    
    SELECT AN OPTION                                                                
                                                                                    
    0 - RUN DIAGNOSTIC ROUTINES                                                     
    1 - FORMAT DISKETTE                                                             
    2 - COPY DISKETTE                                                               
    9 - EXIT TO SYSTEM DISKETTE                                                     
                                                                                    
    INSERT  DIAGNOSTIC DISKETTE  IN DRIVE A AND ENTER THE ACTION DESIRED
 
{% include machine.html id="ibm5150" %}

### Directory of IBM PC Diagnostics 1.00

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*     1920
    IBMDOS   COM*     6211   7-09-81
    COMMAND  COM       895   7-22-81
    DFORMAT  COM      2399   8-05-81
    DCOPY    COM      2943   8-05-81
    CMD99    COM      2399   8-05-81
    DIAGS    COM     15951   8-07-81
            7 file(s)      32718 bytes
                          125952 bytes free
