---
layout: page
title: IBM PC Diagnostics 1.02
permalink: /software/pcx86/diag/ibm/5150/1.02/
redirect_from: /disks/pcx86/diags/ibm/5150/1.02/
machines:
  - id: ibm5150
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/ibm/5150/mda/64kb/debugger/machine.xml
    autoMount:
      A:
        name: IBM PC Diagnostics 1.02
---

This disk displays the following startup messages:

    The IBM Personal Computer DIAGNOSTICS                                           
    Version 1.02 (C)Copyright IBM Corp 1981, 1982                                   
                                                                                    
    SELECT AN OPTION                                                                
                                                                                    
    0 - RUN DIAGNOSTIC ROUTINES                                                     
    1 - FORMAT DISKETTE                                                             
    2 - COPY DISKETTE                                                               
    9 - EXIT TO SYSTEM DISKETTE                                                     
                                                                                    
    INSERT  DIAGNOSTIC DISKETTE  IN DRIVE A AND ENTER THE ACTION DESIRED
 
{% include machine.html id="ibm5150" %}
