---
layout: page
title: "PC-SIG Diskette Library (Disk #2615)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2615/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2615"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2615.TXT

{% raw %}
```
Disk No: 2615                                                           
Disk Title: Kwikstat 3 of 3 (#654, #655 also)                           
PC-SIG Version: S2.11                                                   
                                                                        
Program Title: Kwikstat                                                 
Author Version: 2.10                                                    
Author Registration: $49.00                                             
Special Requirements: 384K RAM and CGA. Hard drive recommended.         
                                                                        
KWIKSTAT is a scientific statistical analysis system complete with      
graphics.  You can import ASCII files, dBase III files or build your own
databases.  KWIKSTAT is menu-driven, with six separate modules:         
                                                                        
~ DATA    -- Create a database, enter and edit data.                    
                                                                        
~ REPORTS -- Export data to another program; display the structure of a 
selected database and access DOS without exiting.                       
                                                                        
~ STAT1   -- Descriptive statistics and graphical representations such  
as histograms, scatterplots and box plots.                              
                                                                        
~ STAT2   -- Explore comparative statistics with t-tests on paired or   
matched data and one way analysis of variance (ANOVA).                  
                                                                        
~ STAT3   -- Perform simple linear and multiple regression analyses.    
                                                                        
~ STAT4   -- Deal with various methods to analyze categorical data, as  
opposed to measured data.                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #2615  KWIKSTAT  >>>>                  ║
║                   Disk 3 of 3 (also #654 and #655)                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To begin the Simulations Module, type:  README  (press Enter)           ║
║                                                                         ║
║ To install KWIKSTAT, insert Disk 1 and type:  README  (press Enter)     ║
║                                                                         ║
║ To print a copy of the order form from Disk 1, type:                    ║
║                                      COPY ORDER PRN  (press Enter)      ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## KSSIMU.DOC

{% raw %}
```










                                   Kwikstat 2.10

                            Kwikstat Simulations Module
                                 (c)TexaSoft, 1990

        ALL RIGHTS RESERVED

        All rights reserved. Printed in the United States of America. No
        part of this book may be reproduced without prior permission. For
        information, address TexaSoft, P.O. Box 1169, Cedar Hill, Texas
        75104.

        No patent liability is assumed with respect to the use of the
        information contained herein. While every precaution has been taken
        in the preparation of this publication, the publisher assumes no
        responsibility for errors or omissions. Neither is any liability
        assumed for damages resulting from the use of the information
        herein.

        INSTALLING KWIKSTAT SUPPLEMENT ON YOUR HARD DISK

        A hard disk is recommended for using KWIKSTAT, although individual
        programs can be run from a floppy disk. The procedure described
        here loads this KWIKSTAT supplemental program on the hard disk
        drive C:, in a subdirectory named C:\KWIKSTAT.

        Place the KWIKSTAT SIMULATIONS DISK in drive A:. Make disk A: the
        default drive, by entering the command:

        C>A:

        (or you can use B: if your disk drive does not fit disk A:) Next,
        enter the command:

        A>KSLOAD C:\KWIKSTAT\

        (There is a space after the command KSLOAD). If your Kwikstat
        programs are on another disk drive or directory, change the command
        to reflect its location. You need to have version 2.10 or higher of
        Kwikstat, with EXE files dated 10-1-90 or later for the menu to
        work properly. Install the Kwikstat basic modules BEFORE installing
        any supplemental program.



          ________________________________________________________
                                Please Register

                                        1

          Kwikstat Simultations Module
          ________________________________________________________



        FLOPPY DRIVE INSTALLATION

        Place the KWIKSTAT SIMULATIONS disk in drive A: and the disk where
        you want it to reside in drive B:, and enter the command:

        A>KSLOAD B:\

        The B: disk must have the files BRT70EFR.EXE, KSMENU.INI and
        KWIKSTAT.HLP on the disk.  Also, make sure the disk has enough
        space for the copy to take place (about 80K).

        INSTRUCTIONS FOR OPERATION

        From the hard disk prompt "C", get into the KWIKSTAT directory
        using the command:

        C>CD \KWIKSTAT

        To begin KWIKSTAT, enter the command:

        C>KS

        The SUPPLEMENTAL program will appear on the Kwikstat menu. If it
        does not, please check to see that you have performed the
        installation properly.

        LATENEWS

        If it exists, print the file LATENEWS.DOC to get the latest
        information on Kwikstat. It may include information on new features
        or changes not included in this manual. Please check the main
        Kwikstat manual for information on monitor and path setup
        procedures and error codes.

        DATA GENERATION AND SIMULATION

        The Kwikstat Data Generation and simulation module is used to
        generate sample datasets for Kwikstat and to display simulation of
        some common statistical concepts. The screen for this module is
        illustrated below:<$&menu[v]>

        A)GENERATE DATA SETS

        This option allows you to create Kwikstat (dBASE) data sets from a
        Normal, Uniform or Exponential distribution. You will be asked to
        specify the number of variables (columns in the database) to
        generate. Then for each variable, you must specify if it is to be
        from a Normal, Uniform or Exponential distribution.

          ________________________________________________________
                                Please Register

                                        2

          Kwikstat Simultations Module
          ________________________________________________________



        If the data is to be from a Normal Distribution, you must specify
        the mean and standard deviation of the variable. If the data is
        from a uniform distribution, you will be asked to specify the
        minimum and maximum of the distribution. You can examine the
        generated data sets in the Kwikstat Descriptive statistics module.
        See also option E to display a list of the dataset..

        B)95% CONFIDENCE INTERVAL SIMULATION

        The 95% Confidence Interval simulation shows visually the meaning
        of a 95% confidence interval. That is, if you take 100 samples from
        a population and calculate a 95% C.I. for each sample, you would
        expect about 95 of the 100 C.I. ranges to include the actual mean
        of the population.

        In this simulation, 100 samples of size 30 are drawn from a
        normally distributed distribution and a 95% C.I. is calculated for
        each sample. The true mean of the population is plotted
        horizontally on the screen. Each C.I. is plotted vertically on the
        screen so you can visually see if the range of the C.I. covers the
        true population mean. All 100 C.I.'s are plotted and a summary of
        how many covered the mean is displayed on the screen. To see what
        is meant by "about 95" will cover the mean, repeat this simulation
        several times. You will see that the number covering the mean will
        range from the 80s to 100, but will average about 95 over a period
        of trials.

        C)DEMONSTRATE CENTRAL LIMIT THEOREM

        The Central Limit Theorem states that if samples of size n are
        taken from a population with an arbitrary distribution, the
        distribution of the means of the samples approaches normality as
        the size of the (n) sample increases. NOTE:If you are using a PC
        with an 8088 chip and no math co-processor, the generation of the
        Normal population will take as much as 2 to 3 minutes.

        In this demonstration, a population of 500 points is generated from
        either a Normal, Uniform or Exponential distribution. Then, 100
        samples of sizes 2, 3, 5, 10 and 30 are taken from the population.
        A histogram of the original population is displayed on the left
        side of the computer screen and a histogram of the sample is
        displayed on the right side of the screen. As each sample is
        displayed, you can see how the larger sample size makes the right
        side histogram approach a bell-shape. Also, as the sample size
        increases, the spread of the histogram gets smaller (the standard
        deviation).

        The demonstration will automatically cycle through the 5 sizes of
        samples. To cancel the demonstration, press the Esc key. This will
          ________________________________________________________
                                Please Register

                                        3

          Kwikstat Simultations Module
          ________________________________________________________



        cause the demonstration to stop once the current sample has been
        displayed.

        D)FLIP A COIN DEMONSTRATION

        When you flip a fair coin, you would expect to get about the same
        number of heads and tails over a long period of time. This
        simulation automates 100 coin tosses and graphs the results. You
        should repeat this simulation a number of times to see how the
        graph varies for different series of flips.

        E)LIST VALUES FROM A DATABASE TO THE SCREEN

        This option allows you to display the contents of a database to the
        screen. This is the sample as the "Kwiklook" option in the DATA
        module. Its purpose here is to allow you to example databases that
        you have created in this module without having to go to another
        module.































          ________________________________________________________
                                Please Register

                                        4

          Kwikstat Simultations Module
          ________________________________________________________



                                ORDER BLANK SN:KS21090s

    KWIKSTAT BASIC PACKAGE (7 modules), printed manual, latest
    version, registration, 2 disks       ($49) x _______= $____________

    Extra KWIKSTAT Manuals          ($10 each) x _______= $____________

    KWIKSTAT 2-WAY ANOVA Supplemental program $19 x_____= $____________

    KWIKSTAT TIME SERIES Supplemental program $19 x_____= $____________
    Note:You need the KWIKSTAT BASIC package to run supplemental programs.

    KWIKSTAT PLUS package, includes BASIC PACKAGE plus both
    SUPPLEMENTS, 4 disks (9 total modules)    $79 x_____= $____________

    Normal registration includes 90 day phone support.  You may extend
    support to 1 year, plus automatically receive all updates during the
    year.  EXTENDED SUPPORT & UPDATES/YEAR    $40 x_____= $____________

    SUB TOTAL                                             $____________
    Texas Residents add 7.25% sales tax                   $____________
    Add $4 P&H, $8 if PO, COD or RUSH or $10 if overseas  $____________

    TOTAL ENCLOSED                                        $
                                                           ============
    -------------------------------------------------------------------
    Specify:    ____5 1/4 inch disk or      ____ 3.5 inch disk
    -------------------------------------------------------------------
    Check one:___Check or M.O. ___MC ___VISA  ___ P.O. #___________
    -------------------------------------------------------------------
    IF CREDIT CARD:Name on card:_________________________________
    Card Number is:____________________________Exp Date__________
    Authorized Signature:________________________________________
    -------------------------------------------------------------------
    Mail order to:_______________________________________________
    Address:_____________________________________________________
    City, State, Zip:____________________________________________
    Phone (    )_________________________________________________
    -------------------------------------------------------------------
    Where did you hear about Kwikstat?_________________________________
    -------------------------------------------------------------------
    Mail to:TexaSoft, P.O. Box 1169, Cedar Hill, TX 75104. Thanks!
    Guaranteed satisfaction or return for a full refund. Phone
    Orders (Visa, MasterCard): Call 214-291-2115. FAX:214-291-3400.








                                        5
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2615

     Volume in drive A has no label
     Directory of A:\

    KSSMEN              44  10-15-90   2:11a
    README   BAT      1004  10-15-90   2:11a
    KSDEMO   COM     10034  10-15-90   2:11a
    PRINTDOC COM      7282  10-15-90   2:11a
    KSSIMU   DOC     11217  10-15-90   2:11a
    BRT70EFR EXE     83728  10-15-90   2:11a
    KSSIMU   EXE     43456  10-15-90   2:11a
    KSMENU   INI       518  10-15-90   2:11a
    KSTAT    INI       121  10-15-90   2:11a
    KSLOAD   BAT      2175  10-15-90   2:11a
    DEMO     BAT       322  10-15-90   2:11a
    FILE2615 TXT      2517   4-25-91   2:53p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1156   1-01-80   7:04a
           14 file(s)     163612 bytes
                          150528 bytes free
