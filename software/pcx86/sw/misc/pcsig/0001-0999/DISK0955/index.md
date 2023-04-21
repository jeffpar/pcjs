---
layout: page
title: "PC-SIG Diskette Library (Disk #955)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0955/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0955"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AUTOMATED PLANNING FORM (APF)"

    AUTOMATED PLANNING FORM (APF) is a menu-driven set of planning tools.
    You can quickly make, store, retrieve, and update project schedules.
    
    APF uses CGA graphics, and via DOS GRAPHICS.COM, can quickly produce
    presentation-quality printouts on most dot matrix printers.  Plan
    projects, and communicate plans and progress to management, clients and
    those working on the project.
    
    APF features:
    
    ~ Up to 17 action items with subschedules for more detail
    
    ~ Works in weeks, months, quarters, or years
    
    ~ Automatically translate from weeks to months to quarters to years
    
    ~ Shows percent completion of each task (action item)
    
    ~ Shows dependencies in critical path
    
    ~ Full edit ability
    
    ~ Automatic origination and revision dating
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES955.TXT

{% raw %}
```
Disk No  955
Program Title: AUTOMATED PLANNING FORM (APF) version 7.0
PC-SIG version 1.2
 
AUTOMATED PLANNING FORM (APF) is a menu-driven set of planning tools.
It lets you quickly make, store, retrieve, and update project schedules.
Unlike most other scheduling software, APF uses CGA graphics, and via
DOS GRAPHICS.COM, can quickly produce presentation-quality printouts on
most dot matrix printers.  Use it to plan projects, communicate plans
and progress to management, clients and those working on the project.
 
APF features:
 
~Up to seventeen action items--use subschedules if you need more detail
 
~Work in weeks, months, quarters, or years
 
~Automatically translate from weeks to months to quarters to years
 
~Show percent completion of each task (action item)
 
~Show constraints (dependencies), i.e., indicate that one event can't
start until an earlier event is completed.
 
~Full edit capability--insert, delete, add items, change bar location,
change percent completion, etc.
 
~Automatic origination and revision dating
 
Usage:  Planning Tools.
 
System Requirements:  Color graphics.
 
How to Start:  Type GOAPF (press enter).
 
Suggested donation:  $39.00
 
File Descriptions:
 
LOGAPF   EXE  Prowess, Inc. logo and license statement
APF      EXE  Automated Planning Form program
APFHLP   EXE  Help file for Automated Planning Form
GL       EXE  GPM and Learning Curve programs
PLANM    EXE  Top level menu
PLIC     EXE  Prowess, Inc. license statement (called on pgm. exit)
PPR      EXE  Personal Reminder program
WWW      EXE  What, Who and When (W-3) Planner program
APFDEMO       Demo APF schedule
W3DEMO        Demo W-3 plan
BRUN40   EXE  Runtime file
RDAT          Personal Reminder data file
README   DOC  Documentation
GOAPF    BAT  Batch file to load program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PCSIG.TXT

{% raw %}
```

AUTOMATED PLANNING FORM FILE DESCRIPTION

LOGAPF	 EXE	 6869	Prowess, Inc. logo and license statement
APF	 EXE	58027	Automated Planning Form program
APFHLP	 EXE	15605	Help file for Automated Planning Form
GL	 EXE	28635	GPM and Learning Curve programs
PLANM	 EXE	 6071	Top level menu
PLIC	 EXE	 4823	Prowess, Inc. license statement (called on pgm. exit)
PPR	 EXE	20595	Personal Reminder program
WWW	 EXE	40837	What, Who and When (W-3) Planner program
APFDEMO 	 3456	Demo APF schedule
W3DEMO		 1024	Demo W-3 plan
BRUN40	 EXE	76816	Runtime file
RDAT		   98	Personal Reminder data file
README	 DOC	13510	Documentation
GOAPF	 BAT	   34	Batch file to load program
PCSIG	 TXT	  704	This file
```
{% endraw %}

## README.DOC

{% raw %}
```

                  AUTOMATED PLANNING FORM (APF) - DOCUMENTATION


        CONTENTS:

                     *  Prowess, Inc. license agreement

                     *  Product disclaimer

                     *  Program descriptions

                     *  System requirements

                     *  Preparation

                     *  Running APF

                     *  General operation guide


                   AUTOMATED PLANNING FORM LICENSE AGREEMENT
		 Copyright 1985, 1986, 1987, 1988 Prowess, Inc.


     This is a user supported software product.  It is not public domain
     software, nor is it free software. You are granted a limited license
     to use this product on a trial basis.   If you continue to use this
     product after a trial period, you are expexted to register by sending:

	   $30 (Minimum reg.)	       or	 $45 (+ $4 S/H) (Full reg.)

           * Technical support                   *  Technical support
           * Update notification                 *  Latest diskette
						 *  Shareware pleas removed

		   Texas residents, please add 8 % sales tax

     Contact us for information concerning low cost site licenses. If you
     like the shareware concept - try before you buy - please support the
     companies that provide useful, professional quality products.

       Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas  75238

                               (214) 349-4718


     You are encouraged to distribute copies of this software providing
     that you make no modifications to any of the files and that the copy
     that you distribute, regardless of the means of distribution, contain
     all files that came on your product diskette.

                                   DISCLAIMER
                                   ----------

     This software product and associated instructional material are sold
     "as is" without warranty as to their performance, accuracy, freedom
     from error, merchantability or fitness for any particular purpose.
     The entire risk as to the performance of the software is assumed by
     the user.








     Under no circumstances, whether in contract or tort, shall Prowess,
     Inc. be liable for indirect, consequential, special, or exemplary
     damages such as, but not limited to, loss of revenue or anticipated
     profits, lost business or other economic loss, arising out of, or
     in connection with this agreement, or your use, or inability to use
     any program or sub-program associated with this software product.


                              PROGRAM DESCRIPTIONS
                              --------------------


     AUTOMATED PLANNING FORM (APF) is a menu driven set of planning tools.
     The product diskette contains the following programs:

     AUTOMATED PLANNING FORM (APF)
     -----------------------------

     APF lets you quickly generate, store, retrieve and update project
     schedules. Unlike most other scheduling software, APF uses high
     resolution graphics, and via DOS GRAPHICS.COM, can produce fast
     presentation quality printouts on most wire-dot printers.

     Use it to plan projects, communicate plans and progress to management,
     to clients and those working on the project.

     APF features:
        * Up to 17 action items - use sub-schedules if you need more detail

        * Work in weeks, months, quarters or years

        * Automatically translate from weeks to months to quarters to years

        * Show percent completion of each task (action item)

        * Show constraints (dependencies) i.e. indicate that one event
          can't start until an earlier event is completed.

        * Full edit capability - insert, delete, add items, change bar
          location, change percent completion, etc.

        * Automatic origination and revision dating

     WHAT, WHO and WHEN (W3) PLANNER
     -------------------------------

     The W3 planner is an excellent project management tool for detailed
     project planning. It lists action items (WHAT), assigns responsibility
     for completing each action item (WHO) and indicates the date on which
     each task must be completed (WHEN).  W3 plans may be created, stored,
     retrieved, updated and printed.

        * Handles up to 95 action items

	* Full editing capability - insert, delete, edit, etc.

        * Single line scrolling and full page scrolling

        * Automatic origination and revision dating

        * Print via DOS GRAPHICS.COM or under program control

     NOTE: The + and - keys on the numeric keypad provide full page
	   scrolling of multi-screen W-3 plans.

     SINGLE TIER GPM
     ---------------

     Given any two of the three following variables, cost, price, gross
     profit margin (GPM), the program will solve for the third. Simply
     press ENTER without making a data entry to define the unknown.

     TWO-TIER GPM
     ------------

     This program deals with manufacturer's cost, manufacturer's GPM,
     manufacturer's price, retailer's cost (same as manufacturer's price),
     retailer's GPM and retail price. Given enough information, the program
     will solve for more than one variable. It will first determine if it
     has enough information to solve for any variable, if so, it will solve
     for that variable and use that solution, along with your previous
     inputs, to solve for other variables.


     LEARNING CURVE
     --------------

     The more of something that you manufacture, the less it should cost
     due to experience, automation, practice, purchasing leverage, etc.
     This reduction in cost with increasing volume can be described by the
     complex "learning curve" equation. This program makes the complexity
     transparent to the user. The following variables are listed:

                    - Number of units at low volume

                    - Cost per unit at low volume

                    - Number of units at high volume

                    - Cost per unit at high volume

                    - Learning Curve percentage   (85 - 93 are typical)

     This program will will solve for any single variable. After solving for
     the missing variable, you can change one or more parameters and get a new
     solution. Up to 10 complete solutions may be stored and displayed upon
     exiting the program.


     PROWESS PERSONAL REMINDER
     -------------------------

     Up to 14 dates, times and messages may be stored. When the computer's
     clock/calendar time or date equals or exceeds the programmed time and
     date, the program "beeps" and displays the date, time and message. Once
     you have acknowledged the reminder, it is erased from the reminder file
     to make room for new entries.

     The program must be active for reminders to be displayed (it does not
     run in background), but could be useful in a variety of ways:











     Example #1

        Program a week's appointments with each appointment's time set to,
        say 7:00 AM, on the correct date. Put the actual appointment time in
        the message column along with the appointment message. Activate PPR
        when you get to work at 7:30 or 8:00 AM and the day's appointments
        will all be displayed.

     Example #2

        Prior to a meeting in your office, program a fictitious appointment
        for whatever time you would like to terminate the meeting. Leave
        PPR active. At the programmed time, the computer will beep and
        announce your "appointment", allowing you to gracefully terminate
        the meeting.

     Example #3

        You are extremely busy, but must make a phone call at exactly 10:30
        AM and are afraid that you will forget. Program a reminder and
        leave PPR active while you work. At the appointed time, you will
        get a beep and your reminder will be displayed. (the message could
        contain the phone number).




                       USING YOUR AUTOMATED PLANNING FORM
                       ----------------------------------


     SYSTEM REQUIREMENTS
     -------------------

                       *  IBM-PC or 100% compatible with CGA graphics
                          capability (or equivalent mono graphics)

                       *  DOS 2.x or greater (must contain GRAPHICS.COM
                                              for printing)
                       *  128K RAM

                       *  Wire-dot printer setup for graphics mode

     PREPARATION
     -----------

     First format a new diskette with the /S option.

          EXAMPLE:   FORMAT B:/S  (assuming that a new diskette is
                                   installed in dirve B.)

     Next, copy the contents of your APF product diskette to the newly
     formatted diskette.

          EXAMPLE:  COPY *.* B:   (Assuming that you have the product
                                   diskette in drive A and the newly
                                   formatted disk in drive B)

          The new diskette will become your working copy, so protect your
          investment and put the APF product diskette in a safe place.






     Then copy your DOS graphics printing utility GRAPHICS.COM to your
     working diskette. Put your DOS system diskette in drive A and your
     working diskette in drive B and enter:

         COPY GRAPHICS.COM B:

     Your working copy is ready to use. Label it AUTOMATED PLANNING FORM.


     RUNNING AUTOMATED PLANNING FORM
     -------------------------------

     Put your working diskette in drive A and enter:  GOAPF  <return>

     This will execute a batch file that first loads GRAPHICS.COM and then
     loads the APF program. Once GRAPHICS.COM is loaded, you can print both
     text AND graphics on most wire-dot printers by pressing SHIFT-PRTSC.
     To work properly, your printer must be capable of printing graphics.
     IBM printers, most EPSON printers and most others have this capability.
     If you have problems printing, check your printer manual to insure that
     the dip switches, or jumpers, in the printer are set to the graphics
     mode. You may leave your printer in the graphics mode for other
     applications and it will work normally.

     Even though we have gone to great lengths to make these programs user
     friendly and highly intuitive, we strongly suggest that you read
     through each program's help file before executing it. After reading a
     help file carefully, you should be able to operate the associated
     program sucessfully in a matter of minutes!

     For the full registration fee of $45 (+ $4 shipping and handling), we
     will send you a diskette containing the latest version of all programs
     and will remove all shareware pleas. The product will have the look and
     feel of any other quality commercial software product.


     GENERAL OPERATION GUIDE
     -----------------------

     All of the above programs are accessed from the main menu. When you
     exit from any of the programs, you will be given a choice of returning
     to the main menu or exiting to DOS.

     As with all Prowess, Inc. products, you can enter a 'Q' at most user
     inputs to exit the programs. From the exit screen, you may typically
     restart the current program, return to the menu or exit at DOS.

     Options are selected by entering the capitalized letter in the option
     word (usually the first letter). On color systems, this letter is
     displayed in a different color. On some monochrome systems, you may
     need to increase the display intensity to see the key letters in
     option words.

     Unless instructed otherwise, DO NOT use the TAB key or ARROW keys to
     position the cursor or use commas or double quotes (") in your inputs!
     In some circumstances, entering a comma or double quote will result in
     the error message "REDO FROM START". If this message appears, do not
     attempt to reposition the cursor - simply make a correct input, at the
     current cursor position. Although the screen will be "messy" until it is
     redrawn, the program will proceed normally.







     If you like this program set, try our other Prowess , Inc. shareware
     tools:

      * DOLLAR-PRO - Financial programs (interest, annuities, amortization)
      * PLOT - Technical plotting (X-Y, area under curves, polar & vectors)
      * AUTOMATED ADDRESS BOOK - (fast data base for addresses)
      * PROMENU - The best PC-based menu system of the market!

     Try before you buy - and full registration is never more than $50.

     Contact Prowess, Inc. for information on our non-shareware technical
     productivity software tools:

	 DESIGNER SERIES - A complete pre-CAD workstation product for
			   circuit and electromechanical design.

	 FRONT LINE PLANNER - Project oriented planning tools. A professional
			      version of APF plus financial tools

	 FRONT LINE MANAGER - Complete project expense forecasting tools
			       (Handles multiple projects)

     Prowess, Inc. 203 Lakeridge Village, Suite 102  Dallas, Tx  75238
     Phone (214) 349-4718




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0955

     Volume in drive A has no label
     Directory of A:\

    APF      EXE     58027   9-17-88  11:56a
    APFDEMO           3456   6-06-86  11:05a
    APFHLP   EXE     15605   9-17-88  12:21p
    BRUN40   EXE     76816  10-08-87   5:57p
    FILES955 TXT      1953   9-28-88  11:42a
    GL       EXE     28635   9-17-88   5:04p
    GO       BAT        38   1-27-88   8:49a
    GO       TXT       540   9-27-88   9:00a
    GOAPF    BAT        34   9-17-88   4:32p
    LOGAPF   EXE      6869   9-17-88   1:41p
    PCSIG    TXT       704   9-19-88  10:43p
    PLANM    EXE      6071   9-17-88   1:27p
    PLIC     EXE      4823   9-17-88   1:46p
    PPR      EXE     20595   9-17-88   1:30p
    RDAT                98   9-17-88   3:44p
    README   DOC     13510   9-17-88   4:30p
    W3DEMO            1024   6-06-86  11:27a
    WWW      EXE     40837   9-17-88   3:26p
           18 file(s)     279635 bytes
                           33792 bytes free
