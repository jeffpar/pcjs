---
layout: page
title: "PC-SIG Diskette Library (Disk #1854)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1854/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1854"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOANPMT"

    LOANPMT is a multi-functional loan calculation program.  Payments,
    principal, APR, and term of loan can all be calculated when given the
    other three.  Additional loan costs and loan points can optionally be
    added to the principal.  It is a good program for comparing different
    loans.
    
    Amortization tables can be printed, displayed, or saved to disk for all
    loans computed.  Early loan payoffs can be computed for existing loans.
    Loan information can be saved to or loaded from disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1854.TXT

{% raw %}
```
Disk No: 1854                                                           
Disk Title: LoanPMT                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: LOANPMT                                                  
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
LOANPMT is a multi-functional loan calculation program.  Payments,      
principal, APR, and term of loan can all be calculated when given the   
other three.  Additional loan costs and loan points can optionally be   
added to the principal.  It is a good program for comparing different   
loans.                                                                  
                                                                        
Amortization tables can be printed, displayed, or saved to disk for all 
loans computed.  Early loan payoffs can be computed for existing loans. 
Loan information can be saved to or loaded from disk.                   
                                                                        
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
║                 <<<<  Disk #1854  LOANPMT  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: LOANPMT                                         ║
║                                                                         ║
║ To print documentation, type: COPY LOANPMT.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INVOICE.DOC

{% raw %}
```
        
        
        
        
        
        
                             USER REGISTRATION FORM
        
                LOANPMT COPYRIGHT (C) 1989, DATA LANGUAGE SYSTEMS
                               ALL RIGHTS RESERVED
        
           To register your use of LOANPMT, complete this form and mail 
        it along with the Invoice and your check, money order, or 
        charge card information to:
        
              Data Language Systems
              Attn: Donald L. Swartz
              R.R.#1, Box 18A
              Yorktown, Indiana 47396
        
        (Please print) DATE: _______________  LOANPMT Ver #___________
        (Please Check One) ( ) MR., ( ) MS., or ( ) ________
           NAME: _____________________________________________________
        COMPANY: _____________________________________________________
         STREET: _____________________________________________________
           CITY: _____________________  STATE: _______ ZIP: __________
        COUNTRY: _____________________________________________________
          PHONE: (_________)  ________________________________________
        
        MICROCOMPUTER USED: __________________________________________
        
        MONITOR: ( ) Monochrome  ( ) Color
        GRAPHICS CARD: ( ) MDA  ( ) CGA  ( ) EGA  ( ) MCGA  ( ) VGA
                       ( ) Other __________________________________
        DISK DRIVES:
              # _____  5 1/4" Floppy    # _____ 3 1/2" Floppy
              # _____  Hard Drives
        
        PRINTERS:
           ( ) Dot Matrix    ( ) Laser    ( ) Other __________________
           Printer brand name & model# _______________________________
        
        HOW DID YOU ACQUIRE THIS PROGRAM:
           ( ) BBS    ( ) User Group    ( ) Shareware Library
           ( ) From a friend  ( ) Direct from Data Language Systems
           ( ) Other _________________________________________________
        
        WHAT WOULD YOU LIKE TO SEE ADDED TO THIS PROGRAM?
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        
        COMMENTS:
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        






                                                      INVOICE # 090189
        Remit to:
        
           Data Language Systems
           R.R.#1, Box 18A
           Yorktown, IN 47396
           (317) 759-7367
        
        
        Ship to (please print):
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
                                                 UNIT
                                                 PRICE
             DESCRIPTION               QTY      (U.S.$)       TOTAL
        
        LOANPMT Ver 1.0 
        registration fee.             _____     $15.00     ___________
        
        LOANPMT (5 1/4", 360K)
        distribution disk.            _____      $5.00     ___________
        
        SUB TOTAL:                                         ___________
        
        SALES TAX (Indiana Residents)              5%      ___________
        
        Shipping & Handling - Air Mail (No charge for US,
        Canada, & Mexico, $5.00 per distribution disk for
        all other locations)                               ___________
        
        TOTAL:                                             ___________
        
        Please send payment for total amount in U.S. funds only.  
        Method of payment (check one):
                  ( ) Check  ( ) Money Order  ( ) MasterCard  ( ) Visa
        
        Charge card users must fill in the following, or you may phone 
        us at the number shown above from 5:00PM-9:00PM EST:
        
        Account No. ___ ___ _ _____ _ _____ _____ _  Exp. Date _______
        
        MasterCard only, four digit ICA number                        
        
        Signature: ___________________________________________________
        (required for all charge cards)
```
{% endraw %}

## LOANPMT.DOC

{% raw %}
```
        
        
        
        
        
        
        
        
        
        
        
                                 L O A N P M T 
        
                                   Version 1.0
        
        
                            U S E R ' S   G U I D E 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                              Data Language Systems
        
        
        
        
        
        
        
        
        
                                     LOANPMT
                                   Version 1.0
                    Copyright (C) 1989, Data Language Systems
                                     9-1-89
        
        
        
        
                                Table of Contents
        
        
                                                                  Page
        
        System requirements..........................................1
        Introduction.................................................1
        Installing LOANPMT...........................................2
        Using LOANPMT................................................4
        Overlays and LOANPMT.OVR.....................................4
        Data entry...................................................7
        Program control features.....................................8
        Date (MM-DD-YY) entry........................................9
        Selecting Program Mode......................................10
        Loan Payment Mode...........................................10
        Printing an Amortization Table..............................15
        Displaying an Amortization Table............................17
        Saving an Amortization Table................................18
        Saving Loan Data............................................20
        Loading Loan Data...........................................21
        Loan Payoff Mode............................................22
        Printing a Loan Payoff Summary..............................26
        Loan Payment example........................................27
        Loan Payoff example.........................................33
        Program History.............................................35
        Program Enhancement Requests
        (How to Receive a Free Program Upgrade).....................36
        Reporting LOANPMT Bugs
        (How to Receive a Free Program Upgrade).....................37
        Software License............................................38
        User Support................................................39
        A note about SHAREWARE......................................40
        Disclaimer..................................................41
        User Registration Form......................................42
        Invoice.....................................................43
        
        
        
        
        
        
        
        
        
        
                                        i
        

                                                            LOANPMT Ver 1.0
                                                                     Page 1


                               SYSTEM REQUIREMENTS
        
           To use LOANPMT you must at least have the following:
        
              IBM PC, XT, AT, PS/2 or a 100% compatible computer.
              119K of free RAM.
              PC-DOS or MS-DOS Version 2.0 or higher.
              One floppy diskette drive (min.), hard disk (optional).
              One printer (optional) connected to a parallel port (to 
                   print amortization tables and loan payoff summaries, 
                   but not required if you do not wish to make these 
                   printouts.)
        
           IBM, PC-DOS, PC, XT, AT, and PS/2 are registered trademarks 
        of the International Business Machines Corporation.
        
           MS-DOS is a registered trademark of Microsoft Inc.
        
        
                                  INTRODUCTION
        
           LOANPMT is a multi-functional loan calculation program.  
        Payments can be computed when given principal, APR, and term of 
        loan.  Principal can be determined when given APR, payment, and 
        term of loan.  APR can be calculated when given principal, term 
        of loan, and payment.  Or, term of loan can be computed when 
        principal, APR, and payment are given.  Additional loan costs 
        and loan points can optionally be added to the principal.  
        Amortization tables can be printed, displayed, or saved to disk 
        for all loans computed.  Early loan payoffs can be computed for 
        existing loans.  Loan information can be saved to or loaded 
        from disk.  
        
           If you are using this program for a loan planning tool, then 
        be aware that for various reasons the results of this program 
        can vary from the actual amounts that may be charged by 
        different lenders.  Only a loan institution can tell you what 
        the actual costs, payment, etc. for a given loan from them will 
        be.  Therefore, always consult with your loan agency for the 
        actual amount that you will be charged for a given loan.
        
           The following files are contained on the distribution disk:
        
              LOANPMT.EXE  - Executable LOANPMT program.
              LOANPMT.OVR  - LOANPMT program overlay files.
              LOANPMT.DOC  - Documentation for the LOANPMT program
                             (this file).
              INVOICE.DOC  - Registration & Invoice forms.
              EXAMPLE1.PMT - Loan payment file example #1.
              EXAMPLE1.AMR - Loan amortization table file example #1.
              README.TXT   - Start-up instructions, etc.
              README.BAT   - Batch file to typeout README.TXT.
        

                                                            LOANPMT Ver 1.0
                                                                     Page 2


                               INSTALLING LOANPMT
        
           If you received LOANPMT in an archived file, be sure to 
        unarchive it according to the instructions that should have 
        been provided by the distributor so that the files listed on 
        page #1 are contained on a single floppy disk.  If you do not 
        have all the files listed on page #1, then you have an 
        unauthorized copy of LOANPMT.  To receive an authorized copy of 
        LOANPMT with the latest version of all the distribution files, 
        you may order one directly from Data Language Systems for 
        $5.00.  Simply fill out and mail the Invoice on page #43 of 
        this documentation.  Or, if you wish to use MasterCard or Visa, 
        you may call Data Language Systems at the phone number listed 
        on the Invoice.
        
        TO INSTALL LOANPMT ON A SINGLE OR DUAL-FLOPPY SYSTEM:
        
           You're going to create a bootable (system) disk from a new 
        diskette, and copy LOANPMT files from the distribution disk to 
        it.  Make sure your computer is booted up as described in your 
        DOS manual, and the DOS prompt is shown.
        
           1. Insert your DOS system disk into drive A, and issue the 
              command:
              
                   FORMAT B:/S
              
              If you have a dual-drive system, place a new (blank) 
              diskette into drive B, and press ENTER when you are 
              prompted to do so on the screen.
              
              If you have a single-drive system, insert your new 
              diskette into the drive when you are prompted to "insert 
              new disk for drive B."  After you have removed your 
              system disk and your new disk is in the drive, press 
              ENTER.
              
              Follow any instructions that may appear on the screen.  
              When the format is complete, your new disk will be 
              formatted and it will also contain a copy of your 
              operating system (DOS) so your computer can be booted 
              from it.
              
              Label the new disk:
              
                   LOANPMT Ver 1.0
                     SYSTEM DISK
        
           2. Place your disk with the LOANPMT distribution files on it 
              into drive A.  If you have a dual-drive system, place 
              your new LOANPMT SYSTEM DISK into drive B.  Now issue the 
              command at the DOS prompt:
              
                   COPY A:LOANPMT.EXE B:
              

                                                            LOANPMT Ver 1.0
                                                                     Page 3


                         INSTALLING LOANPMT (Continued)
        
              If you have a single-disk system, follow the prompts that 
              appear on the screen.  Keep in mind; though, that the 
              "disk for drive A" is the LOANPMT distribution disk, and 
              the "disk for drive B" is the LOANPMT SYSTEM DISK.
              
              When the DOS prompt reappears, continue by issuing the 
              following command with the distribution disk in drive A:
              
                   COPY A:LOANPMT.OVR B:
              
              Again, single-drive users should proceed as described 
              above, while dual-drive users must continue with the 
              LOANPMT SYSTEM DISK in drive B.
              
              NOTE: It is recommended, but not required, that you copy 
              the example files on the LOANPMT distribution disk to the 
              LOANPMT SYSTEM DISK.  To do so, single-drive and dual-
              drive users should proceed as described above and issue 
              the following command:
              
                   COPY A:EXAMPLE1.* B:
        
           Your diskette labeled LOANPMT SYSTEM DISK is now a bootable 
        disk that contains the necessary files to run LOANPMT.
        
        TO INSTALL LOANPMT ONTO A HARD DISK SYSTEM:
        
           You're going to create a subdirectory off of your root 
        directory named LPMT (or whatever else you choose), and then 
        you are going to copy the necessary files from the LOANPMT 
        distribution disk into this subdirectory.
        
           1. Assuming that your hard disk is configured as drive C, 
              use the following commands at the DOS prompt:
              
                   C:
                   CD C:\
                   MKDIR LPMT
                   CD \LPMT
        
           2. Now place the disk with the LOANPMT distribution files on 
              it into drive A and issue the command:
              
                   COPY A:*.* C:\LPMT 
              
              NOTE: If you do not wish to copy all the distribution 
              files onto your hard disk, then the following commands 
              will copy the minimum number of files required to run 
              LOANPMT:
              
                   COPY A:LOANPMT.EXE C:\LPMT
                   COPY A:LOANPMT.OVR C:\LPMT 
              

                                                            LOANPMT Ver 1.0
                                                                     Page 4


                         INSTALLING LOANPMT (Continued)
        
        It is also recommended, but not required, that you copy the 
        example files to your hard disk by issuing the following 
        command:
        
              COPY A:EXAMPLE1.* C:\LPMT
        
           You now have all the LOANPMT files in the directory C:\LPMT, 
        and you are now ready to run the LOANPMT program.
        
        
                                  USING LOANPMT
        
           To use LOANPMT, be sure the files LOANPMT.EXE and 
        LOANPMT.OVR are on the disk of the assigned drive, and that 
        they are in the current directory or path.  Then, at the DOS 
        prompt, type LOANPMT and press the ENTER key.  The program will 
        then start execution, and the initial LOANPMT screen with the 
        copyright notice, etc. will appear.
        
           At this point you may:
        
           1. Press ENTER (or optionally TAB) to proceed with the 
              program.
        
           2. Press the F1 key to see a brief help screen.
        
           3. Press the ESC key to terminate the program.
        
        
                            Overlays and LOANPMT.OVR
        
           Many of the LOANPMT program's functions are contained in the 
        program overlay file LOANPMT.OVR.  An overlay file simply 
        contains portions of the program's executable program code.  
        LOANPMT is constructed so that the following program features 
        are performed by the overlay file:
        
           1. On-line help (activated by pressing the F1 key).
        
           2. Saving Loan Data (activated by pressing the F2 key).
        
           3. Loading Loan Data (activated by pressing the F3 key).
        
           4. Printing an Amortization Table.
        
           5. Displaying an Amortization Table.
        
           6. Saving an Amortization Table.
        
           7. Printing a Loan Payoff Summary.
        

                                                            LOANPMT Ver 1.0
                                                                     Page 5


                      Overlays and LOANPMT.OVR (Continued)
        
        All other program functions (mainly computing loan payments and 
        loan payoffs) are performed without the overlay file.
        
           You should install both LOANPMT.EXE and LOANPMT.OVR as 
        described in the INSTALLING LOANPMT section on page 2.  If 
        LOANPMT.OVR is not correctly installed as described, and 
        program execution is initiated as explained in the USING 
        LOANPMT section on page 4, the initial LOANPMT screen will 
        appear as normal, but you will hear a beep and the following 
        error message will appear at the bottom of the screen:
        
        FILE: LOANPMT.OVR not found!
                                Press ENTER to continue, ESC to quit!
        
        Since LOANPMT.OVR was improperly (or probably not) installed, 
        the overlay manager could not find it, and has failed to 
        initialize.  If ENTER is pressed, the program will continue and 
        you can compute loan payments and loan payoffs.  If any of the 
        seven functions on page 4 are attempted, though, you will hear 
        a beep and the following error message will appear at the 
        bottom of the screen:
        
        LOANPMT.OVR not found! Requested program function UNAVAILABLE!
        
        and a brief help screen will appear explaining the error that 
        has occurred.  You will also notice that on the top line of the 
        help screen it will say:
        
                        Overlay Manager not initialized!
        
        If PageDn is pressed, a second help page will be displayed 
        explaining what you must do to make the overlay program 
        function available.  Which is as follows:
        
        1. If you still wish to perform an overlay program function, 
           you must first terminate the program by pressing ESC, then:
        
           a. On a single- or dual-disk floppy system.  Insert a floppy 
              disk that contains both the files LOANPMT.EXE & 
              LOANPMT.OVR.
           
           b. On a hard disk system, install a copy of the file 
              LOANPMT.OVR in a directory that will always be in the 
              path when LOANPMT is running.  The best way to achieve 
              this is to copy LOANPMT.OVR to the same directory as 
              LOANPMT.EXE.
           
           Then re-start LOANPMT.
        
        2. To continue LOANPMT without performing the requested overlay 
           function, simply press ENTER and proceed with the program.
        
        3. To exit LOANPMT, press ESC.
        

                                                            LOANPMT Ver 1.0
                                                                     Page 6


                      Overlays and LOANPMT.OVR (Continued)
        
           On a single- or dual-floppy disk drive system, if you start 
        the program and everything starts correctly (i.e. the overlay 
        manager initializes and you do not receive the overlay error 
        message at the initial LOANPMT screen) and you then remove the 
        floppy disk containing LOANPMT.OVR, you will receive the 
        following error if any of the seven previously listed program 
        functions performed by the overlay are requested:
        
        LOANPMT.OVR not found! Requested program function UNAVAILABLE!
        
        and a brief help screen will appear explaining the error that 
        has occurred.  You will also notice that on the top line of the 
        help screen it will say:
        
           Overlay Manager was initialized, but LOANPMT.OVR not found!
        
        If PageDn is pressed, a second help page will be displayed 
        explaining what you must do to make the overlay program 
        function available.  Which is as follows:
        
        1. If you still wish to perform an overlay program function:
           
           a. On a single- or dual-drive floppy system, insert a floppy 
              disk that contains LOANPMT.OVR into the assigned drive 
              and press ENTER, and then re-issue the requested program 
              function.
           
           b. On a hard disk system, you must first terminate LOANPMT 
              by pressing ESC.  Then you must install a copy of the 
              file LOANPMT.OVR in a directory that will always be in 
              the path when LOANPMT is running.  The best way to 
              achieve this is to copy LOANPMT.OVR to the same directory 
              as LOANPMT.EXE.
        
        2. To continue LOANPMT without performing the requested overlay 
           function, simply press ENTER and proceed with the program.
        
        3. To exit LOANPMT, press ESC.
        
           Please notice that there are two distinct overlay errors 
        previously described.  They are:
        
           1. Overlay Manager not initialized!
        
           2. Overlay Manager initialized, but LOANPMT.OVR not found!
        
           Finally, LOANPMT has been written to support the 
        Lotus/Intel/Microsoft Expanded Memory Specification (EMS).  
        When sufficient EMS space is available, LOANPMT will load the 
        file LOANPMT.OVR into EMS memory.  Once loaded into EMS, the 
        disk file LOANPMT.OVR is closed and all subsequent calls by 
        LOANPMT for overlay program functions will be made to the 

                                                            LOANPMT Ver 1.0
                                                                     Page 7


                      Overlays and LOANPMT.OVR (Continued)
        
        overlay copy in EMS.  Thus all overlay program functions will 
        be performed as fast in-memory transfers instead of slower disk 
        to RAM transfers.  If you have EMS and the overlay is 
        successfully initialized into EMS by LOANPMT, you will see the 
        following message at the bottom of the initial LOANPMT screen:
        
        LOANPMT.OVR loaded to EMS.
                              Press ENTER to continue, or ESC to quit!
        
           If the EMS initialization fails, then the program will 
        attempt to initialize the overlay manager to the disk file as 
        was previously described.
        
        
                                   DATA ENTRY
        
           At all data entry fields of the program that require the 
        keying in of alphanumeric or numeric data, your entry can be 
        edited for corrections, etc. by using the following keys:
        
           HOME -  Moves the cursor to the first character in the 
                   field.
        
           END -   Moves the cursor beyond the last character in the 
                   field, or, if the field is full, places the cursor 
                   on the last character in the field.
        
           RIGHT
           ARROW - Moves the cursor one character right in the field.
        
           LEFT
           ARROW - Moves the cursor one character left in the field.
        
           INSERT- Toggles between insert and overwrite mode.  The 
                   current mode is highlighted in the status line at 
                   the very top of the screen.  Insert mode inserts a 
                   character before the character at the cursor.  
                   Overwrite mode overwrites the character at the 
                   cursor with the character keyed in.
        
           DELETE- Deletes the character that is at the cursor's 
                   location.
        
           LEFT
           DELETE- If the cursor is not under the first character in a 
                   field, then pressing this key will delete the first 
                   character to the left of the cursor.
        
           At all data entry points that use a highlighted bar menu, 
        you may use the RIGHT ARROW or LEFT ARROW keys, or you may 
        press a key corresponding to the first letter in one of the 
        menu choices, to move the highlighted bar.

                                                            LOANPMT Ver 1.0
                                                                     Page 8


                             DATA ENTRY (Continued)
        
           To move between data entry fields within the data entry 
        screen, the following keys can be used:
        
           ENTER - Enters the current field into the program and moves 
                   the cursor to the next field.
        
           TAB -   Enters the current field into the program and moves 
                   the cursor to the next field.
        
           DOWN
           ARROW - Enters the current field into the program and moves 
                   the cursor to the next field.
        
           UP
           ARROW - Enters the current field into the program and moves 
                   the cursor to the previous field.
        
           SHIFT
           TAB -   Enters the current field into the program and moves 
                   the cursor to the previous field.
        
        
                            PROGRAM CONTROL FEATURES
        
           Many program control features are built into this program.  
        The status line at the top of the screen shows most of these 
        features.  The following keys control the status line features, 
        and these features are always available while you are in any 
        data entry field (i.e. whenever the program is waiting for you 
        to enter "ANY" data):
        
           F1 - displays a help screen that is most appropriate for the 
           present location you are at in the program.  When you are in 
           a help screen, pressing ESC returns you to the point in the 
           program where you entered help (pressed F1).
        
           F9 - toggles data input between NEW and EDIT.  NEW means  
           you must enter new data at each data entry point.  EDIT 
           means old data will be displayed and you will be allowed to 
           edit it using the edit features described in the Data Entry 
           section.  The highlighted item is the feature that is 
           currently in effect.  By pressing F9 you can switch between 
           NEW and EDIT data entry mode.
        
           INSERT - As explained in the Data Entry section, pressing 
           the INSERT key toggles you between INSERT and OVERWRITE mode 
           for data entry.  The highlighted item is the feature that is 
           currently in effect.
        
           ESC - Pressing the ESC key (while in a data entry field)  
           exits the program.
        

                                                            LOANPMT Ver 1.0
                                                                     Page 9


                      PROGRAM CONTROL FEATURES (Continued)
        
           CAPS LOCK - When the Caps Lock key is depressed and caps 
           lock is in effect from the keyboard, CAPS is displayed in 
           highlight in the status line.  When caps lock is in effect, 
           all alphabetic characters are entered as uppercase.
        
           NUM LOCK  - When the Num Lock key is depressed and num lock 
           is in effect from the keyboard, NUM is displayed in 
           highlight in the status line.  When num lock is in effect, 
           numbers can be entered from the numeric keypad.  Otherwise, 
           the special functions HOME, END, INS, etc. can be entered.
        
           SCROLL LOCK - When the Scroll Lock key is depressed and  
           scroll lock is in effect, SCROLL is displayed in highlight 
           in the status line.  Scroll lock has no affect on the 
           operation of this program.
        
        
                              DATE (MM-DD-YY) ENTRY
        
           At all data entry fields of LOANPMT that require a date 
        entry, such as the following prompt:
        
              Date of first payment (MM-DD-YY): mm-dd-year
        
        The default date that appears in the field is the next date 
        following the system's date that falls within the previously 
        given payment schedule.  (i.e.  If the payment schedule 
        previously selected is "Monthly" and the system date is 
        8-01-1989, then the default date given will be 9-01-1989.)
        
           If a date has been previously entered and a new loan has not 
        been computed, then the old date will appear.  If you wish to 
        change the date shown, then enter the new date using the format 
        shown (i.e. Month-Day-Year).
        
           The date field actually contains three separate sub-fields.  
        Each sub-field is separated by the dash ("-"). You do not (and 
        cannot) type in the dashes used in the date.
        
           The month sub-field (left sub-field) will only accept the 
        digits 1 through 12.  The day sub-field (middle sub-field) will 
        only accept valid days for the month currently in the month sub-
        field.  In the case of a month entered of 2 (February), then 
        leap year checking is not done until ENTER is pressed to allow 
        you to leave the day sub-field so you can enter a different 
        year.
        
           The year sub-field (right sub-field) will accept any four 
        digit entry.  It is suggested that you enter the full year, but 
        you may use only the last two digits if you wish.  Be warned, 
        though, that when leap year checking is done, two digit years 
        are considered to be in the 1st century.  This is only 

                                                            LOANPMT Ver 1.0
                                                                    Page 10


                        DATE (MM-DD-YY) ENTRY (Continued)
        
        important to keep in mind if your loan is started in this 
        century (20th century) and will be ending in the next century 
        (21st century).
        
           While non-century years that are evenly divisible by four 
        are leap years, only those century years that are evenly 
        divisible by 400 are leap years.  Therefore, if you entered the 
        starting date of a 30 year loan with payments due each month as 
        8-31-89 (i.e. payments due at the end of each month), the 
        program would process the years correctly until it finished 
        with year 99.  It would then incorrectly start year 100 instead 
        of the year 2000.  The year 100 is not evenly divisible by 400 
        while the year 2000 is (i.e. the year 100 is not a leap year, 
        but the year 2000 is).  The program would then incorrectly tell 
        you that your payment for February was due on 2-28-00, when in 
        fact, it is actually due on 2-29-00 since the year 2000 is a 
        leap year.  Additionally, if you printed this amortization 
        table, it would also print the year as 100 and all the 
        subsequent years would start with 100.
        
           You must use the RIGHT ARROW or LEFT ARROW keys to move 
        between the date fields and press ENTER (or TAB or DOWN ARROW) 
        to enter the date.  The program performs error checking on all 
        date entries as described above and will not let you proceed 
        until a valid date is entered.
        
        
                             SELECTING PROGRAM MODE
        
           If ENTER is pressed at the initial LOANPMT screen, the 
        LOANPMT data entry screen will appear and the program will be 
        waiting for you to choose between the two program modes of Loan 
        Payment and Loan Payoff at the prompt:
        
           Program mode:   Loan Payment   Loan Payoff
        
           Loan Payment will be highlighted.  To select the program 
        mode, simply use the LEFT ARROW or RIGHT ARROW keys, or press 
        the "L" key, to move the highlighted bar.  When the program 
        mode you desire is highlighted, press the ENTER (or TAB or DOWN 
        ARROW) key to select it.  The selected program mode will be 
        displayed at the top of the data entry screen.
        
        
                                LOAN PAYMENT MODE
        
           Starting in the loan payment mode (see Selecting Program 
        Mode section, page 10, for a given payment schedule, any one of 
        the following four items can be computed if the other three are 
        entered:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 11


                          LOAN PAYMENT MODE (Continued)
        
              1. Principal amount of loan.
        
              2. Annual percentage rate.
        
              3. Duration of loan (in years or payments).
        
              4. Loan payment.
        
           Optionally, you can also enter the following:
        
              1. Loan company.
        
              2. Borrower.
        
              3. Comment. 
        
              4. Loan costs.
        
              5. Loan points.
        
              6. Deferred principal.
        
           As soon as Loan Payment mode is selected, the cursor will 
        then be positioned after the prompt:
        
              Loan Company:
        
           You may enter the name of the loan company here, if you 
        wish.  If one is entered, it will appear on all printouts 
        produced by the program.  If you make a mistake entering the 
        loan company's name, you can edit the line as described in the 
        Data Entry Section on page 7.  When the loan company's name is 
        in this field, press ENTER (or TAB or DOWN ARROW) to enter it 
        into the program.  The cursor will then be moved after the 
        prompt:
        
              Borrower:
        
           You can enter the name of the borrower.  If one is entered, 
        it will be printed on all printouts produced by the program.  
        Again, you may edit your entry as described in the Data Entry 
        Section on page 7.  When you have the borrower's name in this 
        field, press ENTER (or TAB or DOWN ARROW) to enter it into the 
        program.  The cursor will then be moved after the prompt:
        
              Comment:
        
           You can enter the reason for the loan, loan number, or any 
        other comment you wish.  If one is entered, it will be printed 
        on all printouts produced by the program.  Again, you may edit 
        your entry as described in the Data Entry Section on page 7.  
        When you have the desired information in this field, press 

                                                            LOANPMT Ver 1.0
                                                                    Page 12


                          LOAN PAYMENT MODE (Continued)
        
        ENTER (or TAB or DOWN ARROW) to enter it into the program.  A 
        highlight bar menu will then appear for selecting a payment 
        schedule as follows:
        
        Yearly Semiyearly Quarterly Monthly Semimonthly Biweekly Weekly
        
           Use the RIGHT ARROW or LEFT ARROW keys, or enter the first 
        letter of the payment schedule desired (i.e. "Y" for Yearly, 
        "Q" for Quarterly, "M" for Monthly, etc.) to move the 
        highlighted bar to the desired payment schedule.  You may 
        select between:
        
           Yearly      -  1 payment per year.
           Semiyearly  -  2 payments per year (i.e. every 6 months).
           Quarterly   -  4 payments per year (i.e. every 3 months).
           Monthly     - 12 payments per year (i.e. every month).
           Semimonthly - 24 payments per year (i.e. twice a month).
           Biweekly    - 26 payments per year (i.e. every two weeks).
           Weekly      - 52 payments per year (i.e. every week).
        
           When the desired payment schedule is highlighted, press 
        ENTER (or TAB or DOWN ARROW) to enter it into the program.  The 
        cursor will then be moved after the prompt:
        
           Loan principal: $
        
           Enter the amount of money to be borrowed, or press F5 to 
        have the program compute the principal for you.  If F5 is 
        entered, the word UNKNOWN will be displayed for this field and 
        the cursor will be moved to the next field.  If you enter a 
        principal, it must be greater than or equal to $0.00 and less 
        than or equal to $10,000,000.00.  If this condition is not met, 
        an error message will be displayed when you press ENTER (or TAB 
        or DOWN ARROW), and the program will not let you proceed until 
        the error is corrected.
        
           After a principal has been entered, the cursor will appear 
        after the prompt:
        
              Additional loan costs: $
        
           You may enter any loan costs that are being included in your 
        loan.  If you are NOT financing any of the loan costs with this 
        loan, then do NOT enter anything in this field.  If loan costs 
        are entered, they must be greater than or equal to $0.00 and 
        less than or equal to $1,000,000.00.  If this condition is not 
        met, an error message will be displayed when you press ENTER 
        (or TAB or DOWN ARROW), and the program will not let you 
        proceed until the error is corrected.
        

                                                            LOANPMT Ver 1.0
                                                                    Page 13


                          LOAN PAYMENT MODE (Continued)
        
           Once the loan costs have been entered, the cursor will 
        appear after the prompt:
        
              Loan points charged:
        
           You may enter any loan points here that are being included 
        into your loan.  If you are NOT financing any of the loan 
        points with this loan, then do NOT enter anything in this 
        field.  If loan points are entered, they must be greater than 
        or equal to 0.000 and less than or equal to 99.999.  If this 
        condition is not met, an error message will be displayed when 
        you press ENTER (or TAB or DOWN ARROW), and the program will 
        not let you proceed until the error is corrected.
        
           When the loan points have been entered, the cursor will 
        appear after the prompt:
        
              Deferred principal: $
        
           Enter the portion of the total amount financed that is to be 
        deferred and payed along with the final payment.  You can 
        create "interest only" loans by deferring the entire amount 
        financed, or you can "balloon" a portion of the amount financed 
        into the final payment.  You may enter an amount that is 
        greater than or equal to $0.00 and that is less than or equal 
        to the total amount financed.  If this condition is not met, an 
        error message will be displayed when you press ENTER (or TAB or 
        DOWN ARROW), and the program will not let you proceed until the 
        error is corrected.
        
           After the deferred principal has been entered, the cursor 
        will appear after the prompt:
        
              Annual percentage rate (%):
        
           Enter the annual percentage rate (APR) charged for your 
        loan.  If the highlighted message "Press F5 to compute" is 
        displayed, you may press the F5 key to have the program compute 
        
        an APR for you.  If F5 is entered, the word UNKNOWN will be 
        displayed for this field and the cursor will be moved to the 
        next field.  Please note that only one UNKNOWN can be computed. 
        If another field currently displays UNKNOWN, the program will 
        not allow you to enter another one.  If you enter an APR, it 
        must be greater than or equal to 0% and less than 100%.  If 
        this condition is not met, an error message will be displayed 
        when you press ENTER (or TAB or DOWN ARROW), and the program 
        will not let you proceed until the error is corrected.
        
           Once an APR has been entered, the cursor will appear after 
        the prompt:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 14


                          LOAN PAYMENT MODE (Continued)
        
              Duration of loan in years:
        
           Enter the duration of the loan or press F6 to access the 
        following menu:
        
                       Years    Payments
        
           Use the RIGHT ARROW or LEFT ARROW to move the highlighted 
        bar to the desired duration entry type, or press "Y" to move it 
        to "Years" or press "P" to move it to "Payments".  When the 
        desired type is highlighted, press ENTER (or TAB or DOWN ARROW) 
        to enter it into the prompt.  Select "Years" to enter the 
        duration of your loan in whole years, or select "Payments" to 
        enter the duration of your loan in total number of payments.
        
           When a duration is entered it must be greater than or equal 
        to 1 (years or payments) and less than or equal to 50 years (or 
        the equivalent number of payments).  If this condition is not 
        met, an error message will be displayed when you press ENTER 
        (or TAB or DOWN ARROW), and the program will not let you 
        proceed until the error is corrected.
        
          If the highlighted message "Press F5 to compute" is 
        displayed, you may press the F5 key to have the program compute 
        the loan duration for you.  If F5 is entered, the word UNKNOWN 
        will be displayed for this field and the cursor will be moved 
        to the next field.  Please note that only one UNKNOWN can be 
        computed.  If another field currently displays UNKNOWN, the 
        program will not allow you to enter another one.
        
           If none of the previous fields display UNKNOWN, then after 
        the loan duration has been entered, the loan payment will be 
        computed and displayed and the cursor will be placed after the 
        prompt:
        
              Print amortization table (Y/N)?
        
           But, if one of the previous fields does display UNKNOWN, 
        then the cursor will appear at the prompt:
        
              Payment: $
        
           Enter the desired loan payment.  An error will occur if a 
        payment is entered that together with the previously entered 
        data will cause the UNKNOWN field to not fall within its 
        prescribed range.  (i.e.  If principal is UNKNOWN and a payment 
        is entered that will cause principal to compute to a value 
        greater than $10,000,000.00, an error message will result.)  An 
        error will also occur if a payment less than $0.00 is entered.  
        Once these conditions are met, the cursor will be placed after 
        the prompt:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 15


                          LOAN PAYMENT MODE (Continued)
        
              Print amortization table (Y/N)?
        
           You can press F6 to access a menu that will allow you to 
        select between PRINT, DISPLAY, or SAVE mode for an amortization 
        table.  PRINT mode prints the amortization table on your 
        printer, DISPLAY mode allows you to display one year of the 
        table at a time on the screen, and SAVE mode allows you to save 
        the table as a text file on disk.  Use the RIGHT ARROW or LEFT 
        ARROW keys (or press "P" for PRINT, or "D" for DISPLAY, or "S" 
        for SAVE) to move the highlighted bar.  Once the desired mode 
        is highlighted, press ENTER (or TAB or DOWN ARROW) to enter the 
        mode.  Next answer "N" (for NO) to the prompt if you do not 
        want an amortization table printed, displayed, or saved, and 
        the program will return you to the program mode prompt (see 
        Selecting Program Mode, page 10), or answer "Y" (for YES) if 
        you do (see the following sections, Printing an Amortization 
        Table, Displaying an Amortization Table, and Saving an 
        Amortization Table).  The program will not allow you to proceed 
        until "Y" or "N" has been entered.  If "N" is entered, the 
        cursor is placed at the program mode prompt where you can enter 
        new loan data or exit the program by pressing ESC.  When the 
        program is terminated, the CRT screen returns to the display 
        that was on the screen just before LOANPMT started executing.
        
        
        
                         PRINTING AN AMORTIZATION TABLE
        
           Once you have reached the amortization table prompt as 
        described in the Loan Payment Section, and you want to print an 
        amortization table, you must ensure that the prompt reads:
        
              Print amortization table (Y/N)?
        
           If it doesn't, then press F6 so the following menu appears:
        
              Print  Display  Save
        
           Use the RIGHT ARROW or LEFT ARROW key (or press "P") to move 
        the highlight to the word "Print" and then press ENTER (or TAB 
        or DOWN ARROW) to enter the word "Print" into the prompt and 
        return you to the end of the prompt.  If the letter "Y" (or 
        "y") does not appear under the cursor, then press the "Y" key 
        and then press ENTER (or TAB or DOWN ARROW).  The following 
        prompt will then appear on the next line with the cursor in the 
        month field:
        
              Date of first payment (MM-DD-YY): mm-dd-year
        
           A default date will appear in this field.  If you wish to 
        change the date shown, then enter the new date using the format 
        shown (i.e. Month-Day-Year).  The date contains three separate

                                                            LOANPMT Ver 1.0
                                                                    Page 16


                   PRINTING AN AMORTIZATION TABLE (Continued)
        
        fields.  Use the RIGHT ARROW or LEFT ARROW key to move between 
        the date fields and press ENTER (or TAB or DOWN ARROW) to enter 
        the date.  The program performs error checking on all date 
        entries and will not let you proceed until a valid date has 
        been entered.
        
           For a more thorough description on date field entry, read 
        the Date (MM-DD-YY) Entry section which starts on page 9.
        
           Once a date has been entered, the following two lines will 
        display the prompt:
        
              Print to device: LPT1
                             PARALLEL PORT:   LPT1 (PRN)   LPT2   LPT3
        
           The port highlighted is also printed after the prompt and 
        will be the port selected when you press the ENTER (or TAB or 
        DOWN ARROW) key.  To change the port selection, use the RIGHT 
        ARROW or LEFT ARROW keys (or press "L") to move the highlighted 
        bar.
        
           Once ENTER (or TAB or DOWN ARROW) has been pressed the 
        printout starts.  If the program detects an error (either at 
        the beginning or during the printout), the printout stops and 
        the following error message will be displayed at the bottom of 
        the screen:
        
        Printer not ready! -- 
                   Press ENTER when ready or ESC to cancel printout.
        
           Normally any of the following can cause this error:
        
           1. No printer attached to selected port (or port does not 
              exist).
           2. Printer not powered on.
           3. Printer not selected on line.
           4. Printer out of paper or paper is jammed.
           5. Printer failure.
           6. Etc.
        
           If the problem can be corrected, you can proceed with the 
        printout once you are ready by pressing ENTER.  If the problem 
        is not immediately correctable, or if you do not wish to 
        proceed with the printout, press ESC and the printout will be 
        terminated and you will be placed at the program mode selection 
        prompt.
        
           If no problems are detected during the printout, the prompt 
        "PRINTING . . ." is displayed at the bottom of the screen.  If 
        you need to stop the printout, then press the ESC key.  When 
        the ESC key is pressed, the prompt "CANCEL PRINTING (Y/N)?" is 
        displayed.  If you want to continue printing simply answer "N"

                                                            LOANPMT Ver 1.0
                                                                    Page 17


                   PRINTING AN AMORTIZATION TABLE (Continued)
        
        (for no), but if you want to cancel the printout, then answer 
        "Y" (for yes) and you will be placed at the program mode 
        selection prompt.
        
           After the printout is finished, the cursor returns to the 
        program mode selection prompt.  You can enter new data to 
        process a new loan, or you can press the ESC key to terminate 
        the program.  When the program is terminated, the CRT screen 
        returns to the display that was on the screen just before 
        LOANPMT started executing.
        
        
                        DISPLAYING AN AMORTIZATION TABLE
        
           Once you have reached the amortization table prompt as 
        described in the Loan Payment Section, and you want to display 
        an amortization table, you must ensure that the prompt reads:
        
              Display amortization table (Y/N)?
        
           If it doesn't, then press F6 so the following menu appears:
        
              Print  Display  Save
        
           Use the RIGHT ARROW or LEFT ARROW key (or press "D") to move 
        the highlight to the word "Display" and then press ENTER (or 
        TAB or DOWN ARROW) to enter the word "Display" into the prompt 
        and return you to the end of the prompt.  If the letter "Y" (or 
        "y") does not appear under the cursor, press the "Y" key and 
        then press ENTER (or TAB or DOWN ARROW).  The following prompt 
        will then appear on the next line with the cursor in the month 
        field:
        
              Date of first payment (MM-DD-YY): mm-dd-year
        
           A default date will appear in this field.  If you wish to 
        change the date shown, then enter the new date using the format 
        shown (i.e. Month-Day-Year).  The date contains three separate 
        fields.  Use the RIGHT ARROW or LEFT ARROW key to move between 
        the date fields and press ENTER (or TAB or DOWN ARROW) to enter 
        the date.  The program performs error checking on all date 
        entries and will not let you proceed until a valid date has 
        been entered.
        
           For a more thorough description on date field entry, read 
        the Date (MM-DD-YY) Entry section which starts on page 9.
        
           Once a date has been entered, the following two lines will 
        display the prompt:
        
              Loan runs from xxxx to yyyy
              Select loan year to display: xxxx
        

                                                            LOANPMT Ver 1.0
                                                                    Page 18


                  DISPLAYING AN AMORTIZATION TABLE (Continued)
        
           As shown here, "xxxx" represents the first year of the loan 
        and "yyyy" represents the final year of the loan.  The initial 
        year is selected by default.  If you wish to see another year, 
        then keyin a year falling within the given range and press 
        ENTER (or TAB or DOWN ARROW) key.  If the entered year does not 
        fall within the displayed range, an error message is given and 
        the program will not let you proceed until a correct year is 
        entered.
        
           Once a good year has been entered, the amortization is 
        displayed on the screen for that year.  If the table is too 
        long to fit on the screen, use the UP ARROW or DOWN ARROW keys 
        to move through the table one line at a time, or use the PAGE 
        UP or PAGE DOWN keys to move through the table one full screen 
        at a time.  Once you are through viewing the table, press the 
        ESC key to return to the LOANPMT data entry screen.  Once you 
        are back at the data entry screen, press ESC to quit display 
        mode or ENTER to display another year.
        
           If ENTER is pressed, you may enter another year as before to 
        be displayed.  If ESC is pressed the cursor returns to the 
        program mode selection prompt.  You can enter new data to 
        process a new loan, or you can press the ESC key to terminate 
        the program.  When the program is terminated, the CRT screen 
        returns to the display that was on the screen just before 
        LOANPMT started executing.
        
        
                          SAVING AN AMORTIZATION TABLE
        
           Once you have reached the amortization table prompt as 
        described in the Loan Payment Section, and you want to save an 
        amortization table, you must ensure that the prompt reads:
        
              Save amortization table (Y/N)?
        
           If it doesn't, then press F6 so the following menu appears:
        
              Print  Display  Save
        
           Use the RIGHT ARROW or LEFT ARROW key (or press "S") to move 
        the highlight to the word "Save" and then press ENTER (or TAB 
        or DOWN ARROW) to enter the word "Save" into the prompt and 
        return you to the back to the end of the prompt.  If the letter 
        "Y" (or "y") does not appear under the cursor, press the "Y" 
        key and then press ENTER (or TAB or DOWN ARROW).  The following 
        prompt will then appear on the next line with the cursor in the 
        month field:
        
              Date of first payment (MM-DD-YY): mm-dd-year
        

                                                            LOANPMT Ver 1.0
                                                                    Page 19


                    SAVING AN AMORTIZATION TABLE (Continued)
        
           A default date will appear in the field.  If you wish to 
        change the date shown, then enter the new date using the format 
        shown (i.e. Month-Day-Year).  The date contains three separate 
        fields.  Use the RIGHT ARROW or LEFT ARROW key to move between 
        the date fields and press ENTER (or TAB or DOWN ARROW) to enter 
        the date.  The program performs error checking on all date 
        entries and will not let you proceed until a valid date has 
        been entered.
        
           For a more thorough explanation on date field entry, read 
        the Date (MM-DD-YY) Entry section which begins on page 9.
        
           Once a date has been entered, the following prompt appears 
        on the next line with the cursor at the end of it:
        
              Save Amortization Table to Filename:
        
           Enter a filename for the amortization table's text file 
        using the following format:
        
              [d:][path] filename
        
        where "d:" is the optional disk drive name, "path" is an 
        optional DOS pathname, and "filename" is a valid DOS filename.  
        Do not add a filename extension to the filename.  The program 
        will automatically add the filename extension ".AMR" to all 
        amortization filenames entered.  Error detection is provided 
        for invalid drive names, paths, filenames, etc., and the 
        program will not let you proceed until everything is correctly 
        entered.
        
           Once the program accepts a valid entry, the file is created 
        on the specified drive, etc.  After the file has been 
        successfully created, the cursor returns to the program mode 
        selection prompt, and the following message is displayed at the 
        bottom of the screen:
        
              Amortization Table saved to file FILENAME.AMR
        
           You can enter new data to process a new loan, or you can 
        press the ESC key to terminate the program.  When the program 
        is terminated, the CRT screen returns to the display that was 
        on the screen just before LOANPMT started executing.
        
           The saved amortization file is a text file and may be 
        printed to your printer later using DOS print commands or 
        various third party printer routines.  The file may also be 
        edited via EDLIN or any other ASCII text editor.
        
           The distribution disk contains a sample amortization table 
        file named EXAMPLE1.AMR for your examination and testing 
        purposes.

                                                            LOANPMT Ver 1.0
                                                                    Page 20


                                SAVING LOAN DATA
        
           Once you have reached the amortization table prompt as 
        described in the Loan Payment Section, you will notice that the 
        following prompt will appear near the lower left of the data 
        entry screen:
        
              F2=Save Loan Data
        
           Whenever this prompt is visible, you may save the loan data 
        to disk.  If you want to save the current loan data, press the 
        F2 key and the following two line prompt will appear near the 
        bottom of the data entry screen:
        
              Before data can be saved, please enter
              Date of first payment (MM-DD-YY): mm-dd-year
        
           A default date will appear in this field.  If you wish to 
        change the date shown, then enter the new date using the format 
        shown (i.e. Month-Day-Year).  The date contains three separate 
        fields.  Use the RIGHT ARROW or LEFT ARROW key to move between 
        the date fields and press ENTER (or TAB or DOWN ARROW) to enter 
        the date.  The program performs error checking on all date 
        entries and will not let you proceed until a valid date has 
        been entered.
        
           For a more thorough description on date field entry, read 
        the Date (MM-DD-YY) Entry section which starts on page 9.
        
           Once a date has been entered, the following prompt appears 
        on the next line with the cursor at the end of it:
        
              Save Loan Data Filename:
        
           Enter a filename for the loan data's file using the 
        following format:
        
              [d:][path] filename
        
        where "d:" is the optional disk drive name, "path" is an 
        optional DOS pathname, and "filename" is a valid DOS filename.  
        Do not add a filename extension to the filename.  The program 
        will automatically add the filename extension ".PMT" to all 
        filenames entered.  Error detection is provided for invalid 
        drive names, paths, filenames, etc., and the program will not 
        let you proceed until everything is correctly entered.
        
           Once the program accepts a valid entry, the file is created 
        on the specified drive, etc.  After the file has been 
        successfully created, the cursor returns to the program mode 
        selection prompt, and the following message is displayed at the 
        bottom of the screen.:
        
              Data saved to file FILENAME.PMT
        

                                                            LOANPMT Ver 1.0
                                                                    Page 21


                          SAVING LOAN DATA (Continued)
        
           You can enter new data to process a new loan, or you can 
        press the ESC key to terminate the program.  When the program 
        is terminated, the CRT screen returns to the display that was 
        on the screen just before LOANPMT started executing.
        
        
                                LOADING LOAN DATA
        
           Whenever the following prompt is visible near the bottom of 
        the data entry screen:
        
              F3=Load Loan Data
        
        You may load a previously saved loan data file from disk.  If 
        you wish to load a data file, press the F3 key and the cursor 
        will be placed at the end of the following prompt near the 
        bottom of the data entry screen:
        
              Load Loan Data Filename:
        
           Enter a filename for a loan data file using the following 
        format:
        
              [d:][path] filename
        
        where "d:" is the optional disk drive name, "path" is an 
        optional DOS pathname, and "filename" is a valid DOS filename.  
        Do not add a filename extension to the filename.  The program 
        will automatically add the filename extension ".PMT" to all 
        filenames entered.  Error detection is provided for invalid 
        drive names, paths, filenames, etc., and the program will not 
        let you proceed until everything is correctly entered.
        
           Once the program accepts a valid entry, the file is loaded 
        and all data fields are updated to display the data that was 
        stored in the file.  The following message is also displayed at 
        the bottom of the screen:
        
              Data loaded from file FILENAME.PMT
        
           If the program is in Loan Payment mode, the cursor will be 
        placed at the amortization table prompt where you may proceed 
        as you desire with the entered data.
        
           If the program is in Loan Payoff mode, the cursor is placed 
        in the "Number of payments already made" prompt where you may 
        proceed to compute a loan payoff balance.
        
        

                                                            LOANPMT Ver 1.0
                                                                    Page 22


                                LOAN PAYOFF MODE
        
           In the Loan Payoff mode (see Selecting Program Mode 
        section), the loan payoff balance for a given set of loan data 
        can be computed when the following four items are given:
        
              1. Annual percentage rate.
        
              2. Duration of loan (in years or payments).
        
              3. Loan payment.
        
              4. Number of payments already made.
        
           Optionally, you can also enter the following:
        
              1. Loan company.
        
              2. Borrower.
        
              3. Comment.
        
              4. Principal.
        
              5. Loan costs.
        
              6. Loan points.
        
              7. Deferred principal.
        
           As soon as Loan Payoff mode is selected, the cursor will 
        then be positioned after the prompt:
        
              Loan Company:
        
           You may enter the name of the loan company here, if you 
        wish.  If one is entered, it will appear on all printouts 
        produced by the program.  If you make a mistake entering the 
        loan company's name, you can edit the line as described in the 
        Data Entry Section on page 7.  When the loan company's name is 
        in this field, press ENTER (or TAB or DOWN ARROW) to enter it 
        into the program.  The cursor will then be moved after the 
        prompt:
        
              Borrower:
        
           You can enter the name of the borrower.  If one is entered, 
        it will be printed on all printouts produced by the program.  
        Again, you may edit your entry as described in the Data Entry 
        Section on page 7.  When you have the borrower's name in this 
        field, press ENTER (or TAB or DOWN ARROW) to enter it into the 
        program.  The cursor will then be moved after the prompt:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 23


                          LOAN PAYOFF MODE (Continued)
        
              Comment:
        
           You can enter the reason for the loan, loan number, or any 
        other comment you wish.  If one is entered, it will be printed 
        on all printouts produced by the program.  Again, you may edit 
        your entry as described in the Data Entry Section on page 7.  
        When you have the desired information in this field, press 
        ENTER (or TAB or DOWN ARROW) to enter it into the program.  A 
        highlight bar menu will then appear for selecting a payment 
        schedule as follows:
        
        Yearly Semiyearly Quarterly Monthly Semimonthly Biweekly Weekly
        
           Use the RIGHT ARROW or LEFT ARROW keys, or enter the first 
        letter of the payment schedule desired (i.e. "Y" for Yearly, 
        "Q" for Quarterly, "M" for Monthly, etc.) to move the 
        highlighted bar to the desired payment schedule.  You may 
        select between:
        
           Yearly      -  1 payment per year.
           Semiyearly  -  2 payments per year (i.e. every 6 months).
           Quarterly   -  4 payments per year (i.e. every 3 months).
           Monthly     - 12 payments per year (i.e. every month).
           Semimonthly - 24 payments per year (i.e. twice a month).
           Biweekly    - 26 payments per year (i.e. every two weeks).
           Weekly      - 52 payments per year (i.e. every week).
        
           When the desired payment schedule is highlighted, press 
        ENTER (or TAB or DOWN ARROW) to enter it into the program.  The 
        cursor will then be moved after the prompt:
        
           Loan principal: $
        
           Enter the amount of money to be borrowed, or press F5 to 
        have the program compute the principal for you.  If F5 is 
        entered, the word UNKNOWN will be displayed for this field and 
        the cursor will be moved to the next field.  If you enter a 
        principal, it must be greater than or equal to $0.00 and less 
        than or equal to $10,000,000.00.  If this condition is not met, 
        an error message will be displayed when you press ENTER (or TAB 
        or DOWN ARROW), and the program will not let you proceed until 
        the error is corrected.
        
           After a principal has been entered, the cursor will appear 
        after the prompt:
        
              Additional loan costs: $
        
           You may enter any loan costs that are being included in your 
        loan.  If you are NOT financing any of the loan costs with this 
        loan, then do NOT enter anything in this field.  If loan costs 
        are entered, they must be greater than or equal to $0.00 and

                                                            LOANPMT Ver 1.0
                                                                    Page 24


                          LOAN PAYOFF MODE (Continued)
        
        less than or equal to $1,000,000.00.  If this condition is not 
        met, an error message will be displayed when you press ENTER 
        (or TAB or DOWN ARROW), and the program will not let you 
        proceed until the error is corrected.
        
           Once the loan costs have been entered, the cursor will 
        appear after the prompt:
        
              Loan points charged:
        
           You may enter any loan points here that are being included 
        into your loan.  If you are NOT financing any of the loan 
        points with this loan, then do NOT enter anything in this 
        field.  If loan points are entered, they must be greater than 
        or equal to 0.000 and less than or equal to 99.999.  If this 
        condition is not met, an error message will be displayed when 
        you press ENTER (or TAB or DOWN ARROW), and the program will 
        not let you proceed until the error is corrected.
        
           When the loan points have been entered, the cursor will 
        appear after the prompt:
        
              Deferred principal: $
        
           Enter the portion of the total amount financed that is to be 
        deferred and payed along with the final payment.  You can 
        create "interest only" loans by deferring the entire amount 
        financed, or you can "balloon" a portion of the amount financed 
        into the final payment.  You may enter an amount that is 
        greater than or equal to $0.00 and that is less than or equal 
        to the total amount financed.  If this condition is not met, an 
        error message will be displayed when you press ENTER (or TAB or 
        DOWN ARROW), and the program will not let you proceed until the 
        error is corrected.
        
           After the deferred principal has been entered, the cursor 
        will appear after the prompt:
        
              Annual percentage rate (%):
        
           Enter the annual percentage rate (APR) charged for your 
        loan.  An APR must be greater than or equal to 0% and less than 
        100%.  If this condition is not met, an error message will be 
        displayed when you press ENTER (or TAB or DOWN ARROW), and the 
        program will not let you proceed until the error is corrected.
        
           Once an APR has been entered, the cursor will appear after 
        the prompt:
        
              Duration of loan in years:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 25


                          LOAN PAYOFF MODE (Continued)
        
           Enter the duration of the loan or press F6 to access the 
        following menu:
        
                       Years    Payments
        
           Use the RIGHT ARROW or LEFT ARROW to move the highlighted 
        bar to the desired duration entry type, or press "Y" to move it 
        to "Years" or press "P" to move it to "Payments".  When the 
        desired type is highlighted, press ENTER (or TAB or DOWN ARROW) 
        to enter it into the prompt.  Select "Years" to enter the 
        duration of your loan in whole years, or select "Payments" to 
        enter the duration of your loan in total number of payments.
        
           When a duration is entered it must be greater than or equal 
        to 1 (years or payments) and less than or equal to 50 years (or 
        the equivalent number of payments).  If this condition is not 
        met, an error message will be displayed when you press ENTER 
        (or TAB or DOWN ARROW), and the program will not let you 
        proceed until the error is corrected.  After the duration has 
        been entered the cursor will appear at the prompt:
        
              Payment: $
        
           Enter the loan payment.  An error will occur if a payment is 
        entered that together with the previously entered data will 
        cause the principal to be greater than $10,000,000.00.  An 
        error will also occur if a payment less than $0.00 is entered.  
        After these conditions are met, the cursor will be placed after 
        the prompt:
        
              Number of payments already made:
        
           Keyin the number of payments you have already made.  If a 
        number less than zero or greater than the previously entered 
        duration of the loan is entered, an error message will be 
        displayed and the program will wait for you to correct your 
        entry.  When a correct entry is made, the program will compute 
        and display the payoff balance for the loan.  The cursor will 
        then be positioned after the prompt:
        
              Print loan payoff summary (Y/N)?
        
           Answer "N" (for NO) to the prompt if you do not want a 
        payoff summary printed, and the program will return you to the 
        program mode prompt (see Selecting Program Mode, page 10).   
        Answer "Y" (for YES) if you do (see the following section, 
        Printing a Loan Payoff Summary).  The program will not allow 
        you to proceed until "Y" or "N" has been entered.  If "N" is 
        entered, the cursor is placed at the program mode prompt where 
        you can enter new loan data or exit the program by pressing 
        ESC.  When the program is terminated, the CRT screen returns to 
        the display that was on the screen just before LOANPMT started 
        executing.
        

                                                            LOANPMT Ver 1.0
                                                                    Page 26


                         PRINTING A LOAN PAYOFF SUMMARY
        
           Once you have reached the Print Loan Payoff Summary prompt 
        as described above in the Loan Payoff section, the cursor will 
        be placed at the end of the following prompt:
        
              Print loan payoff summary (Y/N)?
        
           If the letter "Y" (or "y") does not appear under the cursor, 
        then press the "Y" key and press ENTER (or TAB or DOWN ARROW).  
        The following two lines will display the prompt:
        
              Print to device: 
                             PARALLEL PORT:   LPT1 (PRN)   LPT2   LPT3
        
           The port highlighted is also printed after the prompt and 
        will be the port selected when you press the ENTER (or TAB or 
        DOWN ARROW) key.  To change the port selection, use the RIGHT 
        ARROW or LEFT ARROW keys (or press "L") to move the highlighted 
        bar.
        
           Once ENTER (or TAB or DOWN ARROW) has been pressed the 
        printout starts.  If the program detects an error (either at 
        the beginning or during the printout), the printout stops and 
        the following error message will be displayed at the bottom of 
        the screen:
        
        Printer not ready! -- 
                   Press ENTER when ready or ESC to cancel printout.
        
           Normally any of the following can cause this error:
        
           1. No printer attached to selected port (or port does not 
              exist).
           2. Printer not powered on.
           3. Printer not selected on line.
           4. Printer out of paper or paper is jammed.
           5. Printer failure.
           6. Etc.
        
           If the problem can be corrected, you can proceed with the 
        printout once you are ready by pressing ENTER.  If the problem 
        is not immediately correctable, or if you do not wish to 
        continue with the printout, press ESC and the printout will be 
        terminated and you will be placed at the program mode selection 
        prompt.
        
           If no problems are detected during the printout, the prompt 
        "PRINTING . . ." is displayed at the bottom of the screen.  If 
        you need to stop the printout, then press the ESC key.  When 
        the ESC key is pressed, the prompt "CANCEL PRINTING (Y/N)?" is 
        displayed.  If you want to continue printing simply answer "N" 
        (for no), but if you want to cancel the printout, then answer 
        "Y" (for yes) and you will be placed at the program mode 
        selection prompt.
        

                                                            LOANPMT Ver 1.0
                                                                    Page 27


                   PRINTING A LOAN PAYOFF SUMMARY (Continued)
        
           After the printout is finished, the cursor returns to the 
        program mode selection prompt.  You can enter new data to 
        process a new loan, or you can press the ESC key to terminate 
        the program.  When the program is terminated, the CRT screen 
        returns to the display that was on the screen just before 
        LOANPMT started executing.
        
        
                              LOAN PAYMENT EXAMPLE
        
           This example shows how LOANPMT can be used to find a monthly 
        loan payment.  Let's say that Data Language Systems is in need 
        of some office improvements and we have had a number of 
        construction and remodeling contractors submit bids for the 
        work.  We have decided to hire the contractor who has bid 
        $4,800, and after checking with various loan institutions, we 
        find that the prevailing annual percentage rate charged for 
        office improvement loans at our bank, The Last National Bank of 
        Yorktown, is 12.5% and the maximum length of time they will 
        lend money for our type of loan is 1 1/2 years (18 months).  
        They also tell us that we must pay a $15 filing fee so they can 
        file our loan with the county clerk and that this fee may not 
        be included in the loan.  They also inform us that no points 
        will be charged for the loan.  We now have all the information 
        needed to compute a monthly payment.
        
           Make sure the files LOANPMT.EXE and LOANPMT.OVR are on the 
        disk of the assigned drive, and that they are in the current 
        directory or path.  Next, at the DOS prompt, type LOANPMT and 
        press the ENTER key.  The program will start execution, and the 
        LOANPMT screen will appear with the following message at bottom 
        of the screen:
        
              Press ENTER to continue, or ESC to quit!
        
           Make sure that EDIT and OVERWRITE are highlighted in the 
        status line at the top of the screen and do not change them 
        during this example.  You may depress the NUM LOCK key, if you 
        wish, to allow numeric input from the numeric keypad.  Notice 
        that whenever NUM LOCK is in effect, NUM is displayed at the 
        end of the status line.  Now press the ENTER key.  The LOANPMT 
        data entry screen will now appear and the program will position 
        you at the program mode prompt:
        
           Program mode:   Loan Payment   Loan Payoff
        
        with Loan Payment highlighted.  Press the ENTER (or TAB or DOWN 
        ARROW) key to select Loan Payment mode.  Notice that "Loan 
        Payment" is now displayed at the top of the data entry screen.  
        The cursor will now be placed at the prompt:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 28


                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
              Loan Company:
        
           Type in: "The Last National Bank of Yorktown" and then press 
        the ENTER (or TAB or DOWN ARROW) key and the cursor will be 
        moved to the prompt:
        
              Borrower:
        
           Now type in: "Data Language Systems" and then press the 
        ENTER (or TAB or DOWN ARROW) key and the cursor advance to the 
        prompt:
        
              Comment:
        
           Enter: "Office Improvement Loan" and press the ENTER (or TAB 
        or DOWN ARROW) key and you will now see the Payment schedule 
        menu appear with Monthly highlighted.  Press the ENTER (or TAB 
        or DOWN ARROW) key to select monthly payments and the cursor 
        will be positioned at the zero of the prompt:
        
              Loan principal: $0
        
            This prompt is where we enter the amount we are going to 
        borrow, so key in 4800 and press the ENTER  (or TAB or DOWN 
        ARROW) key.  Notice that the entry overwrites the zero that was 
        originally displayed at the prompt.  The cursor will next 
        position itself at the zero of the prompt:
        
              Additional loan costs: $0
        
           Since the $15 filing fee cannot be financed, press the ENTER 
        (or TAB or DOWN ARROW) key to retain the zero.  The cursor will 
        be advanced to the zero in the prompt:
        
              Loan points charged: 0
        
           No loan points are being charged for this loan, so press the 
        ENTER  (or TAB or DOWN ARROW) key to retain the zero.  The 
        cursor is now placed in the zero of the prompt:
        
              Deferred principal: $0
        
           From our discussion with the bank, no portion of this loan 
        is being deferred, so press the ENTER (or TAB or DOWN ARROW) 
        key to retain the zero.  The cursor is now moved to the zero in 
        the prompt:
        
                Annual percentage rate: 0
        
          Enter the annual percentage rate charged for borrowing the 
        money here.  So key in 12.5 and press the ENTER (or TAB or DOWN 
        ARROW) key.  You will now see that the cursor has moved to the 
        character "one" in the prompt:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 29


                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
              Duration of loan in years: 1
        
           Since we want to borrow the money for one and a half years, 
        we need to enter our loan duration in payments instead of 
        years.  Press the F6 key to access the Loan Duration menu.  
        When the menu appears, you will see Years highlighted.  Use the 
        RIGHT ARROW key (or press "P") to move the highlight to 
        payments and press ENTER (or TAB or DOWN ARROW).  You will now 
        notice that the prompt has been changed to:
        
              Duration of loan in payments: 12
        
           Now key in 18 (i.e. 1 1/2 years x 12 months/year = 18 
        months) and press the ENTER (or TAB or DOWN ARROW) key.  You 
        have now entered all the information the program needs to 
        compute the monthly payment which is now displayed:
        
              Payment: $293.82
        
           And the cursor is now displayed under the "N" in the prompt:
        
              Print amortization table (Y/N)? N
              Press F6 to select between PRINT, DISPLAY, or SAVE of 
        amortization table.
        
           Before we proceed to print an amortization table, notice 
        that the following prompt now appears the lower left of the 
        data entry screen:
        
              F2=Save Loan Data
        
           Let's save the loan data we just entered.  Press the F2 key 
        and the following prompt appears:
        
              Before data can be saved, please enter
              Date of first payment (MM-DD-YY):  9- 1-1989
        
           Since this example was initially ran on 8-1-1989 and monthly 
        payments were previously selected, the default date was 
        9-1-1989.  The date displayed for you though, will be one month 
        from the date found on your system clock.
        
           You can always select the default date by pressing the ENTER 
        (or TAB or DOWN ARROW) key.  But our loan requires the first 
        payment to be 9-1-1989.  So key it in, if it is not already 
        displayed, and press the ENTER (or TAB or DOWN ARROW) key.  The 
        program will now respond with the following prompt:
        
              Save Loan Data Filename:
        
        

                                                            LOANPMT Ver 1.0
                                                                    Page 30


                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
           Let's call this EXAMPLE1.  So now keyin:
        
              EXAMPLE1
        
        and press the ENTER (or TAB or DOWN ARROW) key.  If you have 
        loaded all the files from the distribution disk onto your disk 
        and if they are in the current DOS path, you will hear a beep 
        and the following message will be displayed at the bottom of 
        the screen:
        
              File already exists!  OK to overwrite (Y/N)? N
        
           If you wish you can type in "Y" and press the ENTER (or TAB 
        or DOWN ARROW) key.  When you answer "Y" or if you did not get 
        the "File already exists" message, your disk drive's light will 
        come on briefly, and then you will see the following message 
        displayed at the bottom your screen.
        
              Data saved to file EXAMPLE1.PMT
        
           Whether or not you save the file, you will be returned to 
        the prompt:
        
              Print amortization table (Y/N)? N
              Press F6 to select between PRINT, DISPLAY, or SAVE of 
        amortization table.
        
           Now let's print the amortization table, but if you did not 
        want to print it, then you would just simply press the ENTER 
        key, and the cursor would return to the program mode selection 
        prompt so you can compute another loan.  Or, if you wanted to 
        Display or Save an amortization table, you could follow the 
        instructions in the Displaying Amortization Table or Saving 
        Amortization Table sections.  But, let's type in Y and press 
        the ENTER (or TAB or DOWN ARROW) key.
        
           The cursor now appears in the month field of the following 
        prompt:
        
              Date of first payment (MM-DD-YY):  9- 1-89
        
           If you followed the instructions above, the date displayed 
        will be 9-1-1989, but if it is not, then key it in now and 
        press the ENTER (or TAB or DOWN ARROW) key.
        
           The following prompts now appear on the screen:
        
              Print to device: LPT1
                             PARALLEL PORT:   LPT1 (PRN)   LPT2   LPT3
        
        and LPT1 (PRN) is highlighted.  If your printer is connected to 
        a different port than LPT1, then use the arrow keys (or press

                                                            LOANPMT Ver 1.0
                                                                    Page 31


                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
        "L") to move the highlighted bar to the correct port 
        designation.  Now press the ENTER (or TAB or DOWN ARROW) key to 
        select the port for printer output.
        
          Once the ENTER key has been pressed, and the program detects 
        no printer errors, the amortization table printout starts.  The 
        prompt "PRINTING . . ." is displayed at the bottom of the 
        screen while the printout is in progress.  But, if you get the 
        message:
        
        Printer not ready! -- 
                   Press ENTER when ready or ESC to cancel printout.
        
        refer to page 16.
        
           The following amortization table was printed during this 
        example:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 32


                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
        
                               LOAN AMORTIZATION                 PAGE   1
                                     8-1-89
        
                       The Last National Bank of Yorktown
        
                        BORROWER: Data Language Systems
                       LOAN FOR: Office Improvement Loan
        
                                                               DEFERRED
        LOAN COSTS           POINTS           PRINCIPAL        PRINCIPAL
          $0.00           0.000($0.00)         $4800.00          $0.00
        
               TERM OF LOAN            ANNUAL                   AMOUNT
            18 MONTHLY PAYMENTS        % RATE    PAYMENT        FINANCED
            (1 YR, 6 MO, 0 WK)        12.500%    $293.83        $4800.00
        
         PAYMENT      PAYMENT    INTEREST        PRINCIPAL       BALANCE
           DATE        NUMBER     PAYMENT         PAYMENT        OF LOAN
        
         9- 1-89          1         50.00          243.83         4556.17
        10- 1-89          2         47.46          246.37         4309.80
        11- 1-89          3         44.89          248.94         4060.86
        12- 1-89          4         42.30          251.53         3809.33
            TOTAL      ____    __________      __________      PAYMENTS  
        FOR YEAR 1989:    4  $     184.65 +  $     990.67 =  $    1175.32
        
        TOTAL-TO-DATE:    4  $     184.65 +  $     990.67 =  $    1175.32
        
         1- 1-90          5         39.68          254.15         3555.18
         2- 1-90          6         37.03          256.80         3298.38
         3- 1-90          7         34.36          259.47         3038.91
         4- 1-90          8         31.66          262.17         2776.74
         5- 1-90          9         28.92          264.91         2511.83
         6- 1-90         10         26.16          267.67         2244.16
         7- 1-90         11         23.38          270.45         1973.71
         8- 1-90         12         20.56          273.27         1700.44
         9- 1-90         13         17.71          276.12         1424.32
        10- 1-90         14         14.84          278.99         1145.33
        11- 1-90         15         11.93          281.90          863.43
        12- 1-90         16          8.99          284.84          578.59
            TOTAL      ____    __________      __________      PAYMENTS  
        FOR YEAR 1990:   12  $     295.22 +  $    3230.74 =  $    3525.96
        
        TOTAL-TO-DATE:   16  $     479.87 +  $    4221.41 =  $    4701.28
        
         1- 1-91         17          6.03          287.80          290.79
         2- 1-91         18          3.03          290.79            0.00
            TOTAL      ____    __________      __________      PAYMENTS  
        FOR YEAR 1991:    2  $       9.06 +  $     578.59 =  $     587.65
        
        TOTAL-TO-DATE:   18  $     488.93 +  $    4800.00 =  $    5288.93
        
        AMOUNT OF FINAL PAYMENT = $293.82
        

                                                            LOANPMT Ver 1.0
                                                                    Page 33


        
                        LOAN PAYMENT EXAMPLE (CONTINUED)
        
           After the printout is finished, the cursor returns to the 
        Program Mode prompt.  You could enter new data, but now press 
        the ESC key.  The program is terminated, and the CRT screen is 
        returned to the display that was on the screen just before 
        LOANPMT started executing.
        
        
                               LOAN PAYOFF EXAMPLE
        
           This example shows how LOANPMT can be used to find a payoff 
        balance for the loan created in the Loan Payment Example 
        section (see page 27).
        
           Make sure the files LOANPMT.EXE, LOANPMT.OVR, and 
        EXAMPLE1.PMT are on the disk of the assigned drive, and make 
        sure they are in the current directory or path.  Next, at the 
        DOS prompt, type LOANPMT and press the ENTER key.  The program 
        will start execution, and the LOANPMT screen will appear with 
        the following message at bottom of the screen:
        
              Press ENTER to continue, or ESC to quit!
        
           Make sure that EDIT and OVERWRITE are highlighted in the 
        status line at the top of the screen and do not change them 
        during this example.  You may depress the NUM LOCK key, if you 
        wish, to allow numeric input from the numeric keypad.  Notice 
        that whenever NUM LOCK is in effect, NUM is displayed at the 
        end of the status line.  Now press the ENTER key.  The LOANPMT 
        data entry screen will now appear and the program will position 
        you at the program mode prompt:
        
           Program mode:   Loan Payment   Loan Payoff
        
        with Loan Payment highlighted.  Press the RIGHT ARROW or LEFT 
        ARROW (or press the "L") key to move the highlight to Loan 
        Payoff.  Now press the ENTER (or TAB or DOWN ARROW) key to 
        select Loan Payoff mode.  Notice that "Loan Payoff" is now 
        displayed at the top of the data entry screen.  The cursor will 
        now be placed at the prompt:
        
              Loan Company:
        
           Since we previously saved the loan to disk from the Loan 
        Payment Example section (see page 27), press the F3 key.  The 
        following prompt will appear near the bottom of the screen:
        
              Load Loan Data filename:
        
           Now keyin:
        
              EXAMPLE1
        

                                                            LOANPMT Ver 1.0
                                                                    Page 34


                         LOAN PAYOFF EXAMPLE (Continued)
        
        and press the ENTER (or TAB or DOWN ARROW) key.  If the file 
        EXAMPLE1.PMT is not in the current DOS path, you will hear a 
        beep and the following error message will appear:
        
              File not found!
        
           If you get this error, you must either use the UP ARROW key 
        to return you to the top of the data entry screen so you can 
        enter the data shown in the Loan Payment Example section (see 
        page 27), or exit the program and load the file EXAMPLE1.PMT 
        from the distribution disk to the current DOS path.
        
           If the program finds the file EXAMPLE1.PMT in the current 
        DOS path of your disk, the disk light will come on briefly.   
        Then the following message will appear at the bottom of the 
        screen:
        
              Data loaded from file EXAMPLE1.PMT
        
        and all the values retrieved from the file will be displayed 
        throughout the data entry screen.  The cursor will be 
        positioned at the prompt:
        
              Number of payments already made:
        
           Let's keyin 12 and press the ENTER (or TAB or DOWN ARROW) 
        key.  The payoff balance will be computed and displayed as:
        
              Payoff balance: $1700.45
        
        and the cursor will be positioned at the prompt:
        
              Print loan payoff summary (Y/N)? N
        
           If you do not want to print the loan payoff summary, answer 
        "N", but let's print one.  Type "Y" and press the ENTER (or TAB 
        or DOWN ARROW) key.  The following prompt will appear:
        
              Print to device: LPT1
                             PARALLEL PORT:   LPT1 (PRN)   LPT2   LPT3
        
        and LPT1 (PRN) is highlighted.  If your printer is connected to 
        a different port than LPT1, then use the arrow keys (or press 
        "L") to move the highlighted bar to the correct port 
        designation.  Now press the ENTER (or TAB or DOWN ARROW) key to 
        select the port for printer output.
        
          Once the ENTER key has been pressed, and the program detects 
        no printer errors, the summary printout starts.  The prompt 
        "PRINTING . . ." is displayed at the bottom of the screen.  
        But, if you get the message:
        

                                                            LOANPMT Ver 1.0
                                                                    Page 35


                         LOAN PAYOFF EXAMPLE (Continued)
        
        Printer not ready! -- 
                   Press ENTER when ready or ESC to cancel printout.
        
        refer to page 16.
        
           The following loan payoff summary was printed during this 
        example:
        
        
                         *** LOAN PAYOFF CALCULATION ***
        
                       The Last National Bank of Yorktown
        
                         BORROWER: Data Language Systems
                        LOAN FOR: Office Improvement Loan
        
        Total amount financed: $4800.00
        
        Annual percentage rate (APR): 12.5000%
        
        Monthly payment: $293.83
        
        Initial number of monthly payments: 18
        
        Number of monthly payments already made: 12
        
        Number of monthly payments remaining: 6
        
        Amount required to payoff loan: $1700.45
        
        
           After the printout is finished, the cursor returns to the 
        program mode selection prompt.  You can enter new data to 
        process a new loan, or you can press the ESC key to terminate 
        the program.  When the program is terminated, the CRT screen 
        returns to the display that was on the screen just before 
        LOANPMT started executing.
        
        
                                 PROGRAM HISTORY
        
        LOANPMT.EXE & LOANPMT.OVR
        
           09-01-89    Version 1.0
                       
                       Initial program release.
        

                                                            LOANPMT Ver 1.0
                                                                    Page 36


                          PROGRAM ENHANCEMENT REQUESTS
                     (HOW TO RECEIVE A FREE PROGRAM UPGRADE)
        
           If you have enhancements you would like to see incorporated 
        into the LOANPMT program, you are encouraged to submit them to 
        Data Language Systems.
        
           If you are a registered user of LOANPMT you could receive a 
        free upgrade of LOANPMT for your enhancement request.  If you 
        are the first registered user to submit a particular 
        enhancement request, and it is selected for incorporation into 
        LOANPMT, you will receive, free of charge, the upgrade of 
        LOANPMT that contains your requested enhancement.
        
           To submit an enhancement request, please print (or type) 
        your request and mail it to Data Language Systems.  Be sure to 
        include:
        
           NAME, CUSTOMER NUMBER (if known)
           ADDRESS
           CITY, STATE, ZIP CODE
           COUNTRY (if not USA)
           (AREA CODE) PHONE#, BEST TIME TO CONTACT YOU (only include 
           this information if you do not mind if we call you in case 
           we need more information.)
        
           The following are some of the enhancements that have  
        already been suggested:
        
           1. Add menu of all .PMT files in current path to select from 
              when F3 is pressed.
           2. Add method to change and save color attributes of display 
              screen color monitors.
           3. Highlight the active data entry field.
           4. Add a DOS shell.
        
           All requests submitted become the property of Data Language 
        Systems, and Data Language Systems reserves the right to select 
        only those requests for incorporation into LOANPMT that are 
        determined to be feasible and viable enhancements to LOANPMT.  
        The postmark date on each request will be used to determine 
        which request was the first in case of duplicate requests by 
        more than one registered user.
        
           Only registered users are eligible to participate in the 
        free upgrade offer, but you need not be a registered user to 
        submit an enhancement request.
        
           To be eligible to receive a free upgrade under this offer, 
        the registered user must also agree to beta test the proposed 
        enhancement, with no charge to Data Language Systems, prior to 
        its official release.

                                                            LOANPMT Ver 1.0
                                                                    Page 37


                             REPORTING LOANPMT BUGS
                     (HOW TO RECEIVE A FREE PROGRAM UPGRADE)
        
           Although every attempt has been made to provide bug free 
        software, it is realistic to accept the fact that some bugs 
        will escape even the most aggressive testing.
        
           If you find what you believe is a bug in the LOANPMT 
        program, you are encouraged to submit it to Data Language 
        Systems so it can be corrected.
        
           If you are a registered user of LOANPMT, you could receive a 
        free upgrade of LOANPMT for your bug report.  If you are the 
        first registered user to submit a particular bug for 
        correction, you will receive, free of charge, the upgrade of 
        LOANPMT that contains the bug fix.
        
           To submit a bug, please print (or type) the condition that 
        you suspect to be a bug and mail it to Data Language Systems.   
        Be sure to include:
        
           NAME, CUSTOMER NUMBER (if known)
           ADDRESS
           CITY, STATE, ZIP CODE
           COUNTRY (if not USA)
           (AREA CODE) PHONE#, BEST TIME TO CONTACT YOU (only include 
           this information if you do not mind if we call you in case 
           we need more information.)
        
           All bugs submitted become the property of Data Language 
        Systems, and Data Language Systems reserves the right to only 
        modify LOANPMT for submissions that are determined to be actual 
        malfunctions of the intended design of LOANPMT.  The postmark 
        date on each request will be used to determine which request 
        was the first in case of duplicate requests by more than one 
        registered user.
        
           There will be situations where a reported bug will be 
        determined by Data Language Systems to be within the realm of 
        the actual program design (i.e. not really a bug).  In these 
        cases, your submission will be handled as a Program Enhancement 
        Request (see page 36).
        
           Only registered users are eligible to participate in the 
        free upgrade offer, but you need not be a registered user to 
        submit a bug.
        
           To be eligible to receive a free upgrade under this offer, 
        the registered user must also agree to beta test the bug fix, 
        with no charge to Data Language Systems, prior to its official 
        release.

                                                            LOANPMT Ver 1.0
                                                                    Page 38


                                SOFTWARE LICENSE
        
           The LOANPMT program, its documentation, and all other files 
        on the distribution disk are copyright (C) 1989 by Data 
        Language Systems.  All rights are reserved.  You are free to 
        use, copy, and distribute LOANPMT if:
        
           1. No fee is charged for use, copying or distribution.  
              Clubs, user groups, and shareware libraries may charge a 
              nominal fee of $5 or less for expenses and handling for 
              distributing LOANPMT.
           
           2. The program and documentation are not modified in any 
              way.
           
           3. All distribution disks must contain the files:
              
              LOANPMT.EXE  (Executable LOANPMT program)
              LOANPMT.OVR  (Executable program overlays)
              LOANPMT.DOC  (Documentation file)
              INVOICE.DOC  (Registration & Invoice forms)
              EXAMPLE1.PMT (Loan payment file example #1)
              EXAMPLE1.AMR (Loan amortization table file example #1)
              README.TXT   (Start-up instructions, etc.)
              README.BAT   (Batch file to typeout README.TXT)
              
              These file names may not be changed, but they may be    
              archived or combined into one file named LOANPMT.ARC,    
              LOANPMT.ZIP, etc. to save space for distribution.
           
           4. If you find this program useful, then register your use.  
              To register, fill out and return the User Registration 
              Form and Invoice along with the $15.00 fee to be eligible 
              for user support, etc. (see pages 42 & 43).
        
           Site licenses and commercial licenses are available.  Write 
        to the Data Language Systems for more information.
        
           When you register your use of these programs, you will be 
        eligible to receive user support, and you will receive notices 
        of future upgrades and bug fixes, etc.
        
           Any use or distribution of the LOANPMT program constitutes 
        agreement to and acceptance of this license.
        
           This license and your right to use the software 
        automatically terminate if you fail to comply with any of the 
        provisions of this license.
        
           If you have questions or comments about the use, licensing, 
        or registration of this program, or to submit enhancement 
        requests or report bugs, please write to Data Language Systems 
        at the address shown on the registration form.
        

                                                            LOANPMT Ver 1.0
                                                                    Page 39


                                  USER SUPPORT
        
           If you are a registered user of LOANPMT and you experience 
        problems, need help, have questions, etc., then Data Language 
        Systems wants to hear from you.
        
           Feel free to write us about anything you have to say about 
        our program.  If you prefer, you may call us.  Don Swartz will 
        usually be available for user phone support Monday through 
        Friday, 5:00PM-9:00PM EST.  Please only call between the hours 
        listed for phone support, and please note that Indiana does NOT 
        observe EDT (Eastern Daylight savings Time) during the summer 
        months.  So please plan your calls accordingly.
        
           Call (317) 759-7367 and ask for Don Swartz.  Please don't 
        get discouraged if he is not always available.  We still want 
        to do everything we can to help you.  Please call back.  Not 
        only does he have a family, but he usually takes one computer 
        science night class every fall and spring semester at Ball 
        State University.
        
        
        

                                                            LOANPMT Ver 1.0
                                                                    Page 40


                             A NOTE ABOUT SHAREWARE
        
           LOANPMT is a Shareware program.  Sometimes Shareware has 
        been called Freeware, User Supported Software, and other 
        names.  Shareware is NOT Public Domain software.  Data Language 
        Systems retains all rights to the software and its 
        documentation under the copyright laws and simply allows 
        distribution of this program and the documentation with the few 
        restrictions listed in the Software License on page 38.
        
           Since this program is Shareware, you may look at, keep, 
        copy, etc. the software and the documentation, but if you use  
        this program, then register your use with Data Language 
        Systems.  The registration fee for LOANPMT is only $15.00 and 
        is an inexpensive way to:
        
           1. Guarantee you have the support of Data Language Systems.
        
           2. Make sure you will know about updates, enhancements, bug 
              notices and fixes, etc.
        
           3. Allow Data Language Systems to make these programs even 
              better.
        
           4. Give credit to the author for providing you with a    
              program that has been useful to you.
        
           You are free to run this software on your computer to make 
        sure it is compatible with your system and to make sure it 
        operates to your satisfaction before you "buy" it by sending in 
        the registration form and fee.
        
           So please, if you find this program useful, then send in 
        your registration fee so Data Language Systems can continue to 
        support and improve the program.  But, if after testing the 
        software, you find it unsatisfactory or incompatible, I welcome 
        your comments.  User satisfaction is our goal at Data Language 
        Systems, and only by hearing from the people who use this 
        software can we achieve this goal.
        
        
        Thank You For Your Support,
        
        Donald L. Swartz
        Data Language Systems
        
        
        

                                                            LOANPMT Ver 1.0
                                                                    Page 41


                                   DISCLAIMER
        
           The LOANPMT program and its documentation are Copyright (C) 
        1989 by Data Language Systems.  All rights are reserved.
        
           This program and its documentation are supplied "AS IS" 
        without any warranty, expressed or implied.  In no event will 
        Data Language Systems, or the author, be liable for any 
        damages, including (but not limited to) any lost profits, lost 
        savings, or other incidental or consequential damages arising 
        out of the use of or inability to use the program, even if Data 
        Language Systems or the author has been advised of the 
        possibility of such damages, or for any claim by any other 
        party.
        
           Any use of the LOANPMT program and its documentation  
        constitutes agreement to and acceptance of this disclaimer.
        
           Data Language Systems, however, does warrant that any 
        LOANPMT distribution diskettes obtained directly from Data 
        Language Systems will be free from defects in materials and 
        workmanship under normal use for a period of ninety (90) days 
        from the date of delivery to you as evidenced by a copy of your 
        Data Language Systems shipping invoice.  If you wish to claim a 
        defective disk under this warranty, you must send the defective 
        LOANPMT distribution diskette and a copy of your Data Language 
        Systems invoice to us.  You must state whether you want a full 
        refund of the purchase price of the diskette or a replacement 
        diskette.  Refunds or replacements will only be made after the 
        diskette and the copy of your invoice have been received.  
        Distribution diskettes obtained from other Shareware 
        distributors are not covered by this warranty.

                                                            LOANPMT Ver 1.0
                                                                    Page 42


                             USER REGISTRATION FORM
        
                LOANPMT COPYRIGHT (C) 1989, DATA LANGUAGE SYSTEMS
                               ALL RIGHTS RESERVED
        
           To register your use of LOANPMT, complete this form and mail 
        it along with the Invoice on page 43 and your check, money 
        order, or charge card information to:
        
              Data Language Systems
              Attn: Donald L. Swartz
              R.R.#1, Box 18A
              Yorktown, Indiana 47396
        
        (Please print) DATE: _______________  LOANPMT Ver #___________
        (Please Check One) ( ) MR., ( ) MS., or ( ) ________
           NAME: _____________________________________________________
        COMPANY: _____________________________________________________
         STREET: _____________________________________________________
           CITY: _____________________  STATE: _______ ZIP: __________
        COUNTRY: _____________________________________________________
          PHONE: (_________)  ________________________________________
        
        MICROCOMPUTER USED: __________________________________________
        
        MONITOR: ( ) Monochrome  ( ) Color
        GRAPHICS CARD: ( ) MDA  ( ) CGA  ( ) EGA  ( ) MCGA  ( ) VGA
                       ( ) Other __________________________________
        DISK DRIVES:
              # _____  5 1/4" Floppy    # _____ 3 1/2" Floppy
              # _____  Hard Drives
        
        PRINTERS:
           ( ) Dot Matrix    ( ) Laser    ( ) Other __________________
           Printer brand name & model# _______________________________
        
        HOW DID YOU ACQUIRE THIS PROGRAM:
           ( ) BBS    ( ) User Group    ( ) Shareware Library
           ( ) From a friend  ( ) Direct from Data Language Systems
           ( ) Other _________________________________________________
        
        WHAT WOULD YOU LIKE TO SEE ADDED TO THIS PROGRAM?
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        
        COMMENTS:
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        

                                                            LOANPMT Ver 1.0
                                                                    Page 43


                                                      INVOICE # 090189
        Remit to:
        
           Data Language Systems
           R.R.#1, Box 18A
           Yorktown, IN 47396
           (317) 759-7367
        
        
        Ship to (please print):
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
           _________________________________________________
        
                                                 UNIT
                                                 PRICE
             DESCRIPTION               QTY      (U.S.$)       TOTAL
        
        LOANPMT Ver 1.0 
        registration fee.             _____     $15.00     ___________
        
        LOANPMT (5 1/4", 360K)
        distribution disk.            _____      $5.00     ___________
        
        SUB TOTAL:                                         ___________
        
        SALES TAX (Indiana Residents)              5%      ___________
        
        Shipping & Handling - Air Mail (No charge for US,
        Canada, & Mexico, $5.00 per distribution disk for
        all other locations)                               ___________
        
        TOTAL:                                             ___________
        
        Please send payment for total amount in U.S. funds only.  
        Method of payment (check one):
                  ( ) Check  ( ) Money Order  ( ) MasterCard  ( ) Visa
        
        Charge card users must fill in the following, or you may phone 
        us at the number shown above from 5:00PM-9:00PM EST:
        
        Account No. ___ ___ _ _____ _ _____ _____ _  Exp. Date _______
        
        MasterCard only, four digit ICA number                        
        
        Signature: ___________________________________________________
        (required for all charge cards)
```
{% endraw %}

## README.TXT

{% raw %}
```
    LOANPMT Ver 1.0, Copyright (C) 1989 by Data Language Systems, 9-1-89
This distribution disk contains the following files:
   1. LOANPMT.EXE (Executable LOANPMT program)
   2. LOANPMT.OVR (LOANPMT program overlay files)
   3. LOANPMT.DOC (Documentation for the LOANPMT program)
   4. INVOICE.DOC (Registration & Invoice forms)
   5. EXAMPLE1.PMT (Loan payment file example #1)
   6. EXAMPLE1.AMR (Loan amortization table file example #1)
   7. README.TXT (This file)
   8. README.BAT (Batch file to type this file).
If you did not receive all of these files, you can obtain a 5 1/4", 360K floppy
disk containing the latest version by sending $5.00 (for US, Canada, & Mexico),
or $10.00 for all other locations, (in US funds only) to the address below.

To run the program: A>LOANPMT
To printout the documentation:  A>COPY LOANPMT.DOC > PRN

If you find this program useful, then register by sending $15.00 (US funds)
along with the filled forms contained in the file INVOICE.DOC to the address
below.  MasterCard & Visa users may phone us at (317) 759-7367, 5:00PM-9:00PM
EST.  Thank you for your support, Don Swartz
                                  Data Language Systems    (Please pass a copy)
                                  R.R.#1, Box 18A          (of these files on )
                                  Yorktown, IN 47396       (to a friend.      )
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1854

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE1 AMR      3062   9-01-89   1:00a
    EXAMPLE1 PMT       336   9-01-89   1:00a
    FILE1854 TXT      1777  12-22-89  10:14a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   8:48a
    INVOICE  DOC      4942   9-01-89   1:00a
    LOANPMT  DOC    117718   9-01-89   1:00a
    LOANPMT  EXE     75216   9-01-89   1:00a
    LOANPMT  OVR     36316   9-01-89   1:00a
    README   BAT        33   9-01-89   1:00a
    README   TXT      1383   9-01-89   1:00a
           11 file(s)     241361 bytes
                           75776 bytes free
