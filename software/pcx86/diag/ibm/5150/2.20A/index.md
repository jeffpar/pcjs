---
layout: page
title: IBM PC Advanced Diagnostics 2.20
permalink: /software/pcx86/diag/ibm/5150/2.20A/
redirect_from: /disks/pcx86/diags/ibm/5150/2.20a/
machines:
  - id: ibm5150
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/ibm/5150/cga/256kb/debugger/machine.xml
    autoMount:
      A:
        name: IBM PC Diagnostics 2.20 (Adv)
---

This disk displays the following startup messages:

    The IBM Personal Computer                                                       
    ADVANCED DIAGNOSTICS                                                            
    Version 2.20 (C)Copyright IBM Corp 1981, 1985                                   
    ROS P/N:  5700051                                                               
    ROS DATE: 04/24/81                                                              
                                                                                    
    SELECT AN OPTION                                                                
                                                                                    
    0 - SYSTEM CHECKOUT                                                             
    1 - FORMAT DISKETTE                                                             
    2 - COPY DISKETTE                                                               
    3 - PREPARE SYSTEM FOR MOVING                                                   
    9 - END DIAGNOSTICS                                                             
                                                                                    
    ENTER THE ACTION DESIRED                                                        

{% include machine.html id="ibm5150" %}
