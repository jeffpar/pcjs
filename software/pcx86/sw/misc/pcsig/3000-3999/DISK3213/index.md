---
layout: page
title: "PC-SIG Diskette Library (Disk #3213)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3213/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3213"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## 486TEST.DOC

{% raw %}
```

                           486TEST (TM) DOCUMENTATION
                      Copyright 1992 - All Rights Reserved

    INTRODUCTION

    486TEST (TM) is a diagnostic program designed to test motherboards and
    system components. Computational loads on the processor, and numeric
    processor (if present) exceed by several orders of magnitude the use a
    computer would receive in a commercial environment in a 24 hour period.

    This program tests all of the system's resources including the BIOS,
    CPU, NDP, CACHE, RAM, EXTENDED MEMORY and DISPLAY MEMORY. Once started
    486TEST (TM) will run for days. A status line at the bottom of the
    screen keeps you updated as to the progress of the test.


    DISCLAIMER

    THIS PROGRAM TESTS A COMPUTER USING TESTS DESIGNED TO DETECT DEFECTIVE,
    UNRELIABLE, OR IMPROPERLY RATED COMPONENTS. THIS PROGRAM WILL CAUSE
    YOUR SYSTEM TO RUN AT TEMPERATURES FAR IN EXCESS OF NORMAL OPERATING
    TEMPERATURES FOR AN EXTENDED PERIOD OF TIME. THIS WILL SUBJECT YOUR
    COMPUTER TO HIGHER THAN NORMAL USE AND STRESS DURING THE TEST PERIOD.

    SYSTEMS WHICH USE LOW QUALITY COMPONENTS CAN BE PERMANENTLY DAMAGED BY
    THIS PROGRAM! THE AUTHOR, DISTRIBUTOR AND LICENSEES OF THIS PROGRAM
    CANNOT BE HELD RESPONSIBLE FOR ANY DAMAGE, REAL OR OTHERWISE CAUSED BY
    THIS PROGRAM.

    ANY USE OF THIS PROGRAM SIGNIFIES THAT YOU UNDERSTAND THIS WARNING AND
    WISH TO SUBJECT YOUR SYSTEM TO THESE TYPES OF TESTS AND ACKNOWLEDGE THE
    FACT THAT YOUR COMPUTER MAY NOT OPERATE AFTER BEING TESTED.


    RUNNING 486TEST (TM)

    1) BEFORE running the program, please disable any memory managers you
       may be loading in your CONFIG.SYS or AUTOEXEC.BAT file.

    2) Copy 486TEST.EXE to the directory where you want to install the
       software. You should not run this program from the distribution
       diskette. It is advisable to copy and run this program from your
       hard disk drive.

    3) DO NOT turn off your monitor during this test. You can turn the
       brightness down to prevent burn-in of the monitor screen if you
       desire but DO NOT turn off the monitor.

    4) Do not rename the program file.


    WHAT 486TEST (TM) IS ALL ABOUT

    This program is designed to put your system through an electronic
    torture test. It works on the principle that most problems appear due
    to either poor engineering, defects during assembly or the use of
    improperly rated components.

    486TEST's intensive testing will bring the system's components to
    extremely high operating temperature and subject them to extremely high
    operational stresses. Design or component flaws will show up by hanging
    the system or causing the system to perform warm or cold boots.




                           486TEST (TM) DOCUMENTATION
                      Copyright 1992 - All Rights Reserved

    The best time to use this program is when you receive your brand new
    computer. While you won't be able to use your new computer for a while
    it is better to locate any problems as soon as possible. If your system
    passes the test, it should keep running.

    If you have unloaded all memory managers and you find that your system
    hangs or reboots, then something is wrong with your computer. This
    program is used by a computer manufacturer to test their computers in a
    110 degree burn-in room for 48 hours. Any computer with high quality,
    properly rated components can run this test for weeks without crashing.

    After the initial test and before the warranty expires run this test
    three times, just to make sure you can detect any problems and get them
    fixed before the warranty expires.


    NEW FEATURES IN 486TEST (TM)

    1) A proprietary adaptive algorithm is now in use. This insures that
       additional loads are placed on the processor/co-processor when a
       high power processor is found.

    3) Video RAM testing cycles have been increased to place a heavier load
       on the video display card during the test period.

    4) Portions of the program have been ported to machine language
       allowing more tests to be run in a given period of time.

    5) The documentation has been changed to reflect program updates.


    WARNING

    Do NOT touch any of the components during testing. You can easily get
    burned as the components get VERY hot! The system case SHOULD be closed
    to insure that normal ventilation procedures are in use.



























                           486TEST (TM) DOCUMENTATION
                      Copyright 1992 - All Rights Reserved

                          SHAREWARE REGISTRATION FORM

    There are two registrations currently available for this software.  The
    first is a PERSONAL registration, which licenses the use of the program
    on one computer at a time, by one person at a time.

    The second registration is a COMMERCIAL registration, which licenses
    the use of program on any number of computers.

    All registrations include free updates for one year (normally an update
    is issued every four to six months) and technical support via telephone
    and through EMAIL if you have access to one of the major networks. You
    will receive the latest version of the software when you purchase a
    registration and a minimum of one update six months later.  Updates
    after the first year can be purchased for thirty (30) percent of the
    registration fee then in effect.

    All software purchased under one of the registrations described above
    will display registration information consisting of the owner's name
    and serial number.











































                           486TEST (TM) DOCUMENTATION
                      Copyright 1992 - All Rights Reserved

                              SHAREWARE ORDER FORM


    Name:______________________________________________________________

    Company:___________________________________________________________

    Address:___________________________________________________________

    Address:___________________________________________________________

    City:_______________________________ State:_______ Zip:____________

    Phone Number: (________) ____________-______________


    Registration Description              Price    Quantity        Total


    Personal 486TEST  Registration    $   25.00   ________    $ ____.__


  Commercial 486TEST  Registration    $   75.00   ________    $ ____.__


                                                   Sub-Total  $ ____.__


                                           Shipping/Handling  $    5.00


                                                       Total  $ ____.__


        Please allow a minimum of three weeks for delivery of your order.
    All orders are shipped UPS ground or through the mail.


        Please send all orders to:

                               Richard Levey
                           41 Park Row - Room 710
                          New York, New York 10038



















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3213

     Volume in drive A has no label
     Directory of A:\

    486TEST  EXE     48263   7-29-92   7:07p
    486TEST  DOC      7358   7-29-92   7:07p
    GO       BAT        39  10-04-92   9:18a
    SHOW     EXE      2040   9-12-88  10:48a
            4 file(s)      57700 bytes
                          101376 bytes free
