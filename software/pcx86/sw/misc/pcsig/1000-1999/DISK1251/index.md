---
layout: page
title: "PC-SIG Diskette Library (Disk #1251)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1251/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1251"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DENTAL P.M.S 1 OF 5 (1251 THRU 1255)"

    DENTAL PATIENT MANAGEMENT SYSTEM (DPMS) tracks treatments and manages
    accounts receivable, insurance, patient billing, and follow-up
    information. Insurance company information, complete patient
    information, and procedure details are integrated. Information need be
    entered only once; data from insurance forms is automatically posted to
    a patient's account receivable records. DPMS uses common computer
    forms such as an attending dentists statement and the NEBS patient
    billing form. Entering a patient procedure automatically updates
    billing information  including charges. Invoicing can be done in four
    keystrokes.
    
    DPMS's biggest strengths are patient tracking and generating written
    and telephone follow-up reminders, as well as inactive patient lists.
    Patient files can be read by most wordprocessors to generate labels and
    form letters. Most routine procedures are included, and more can be
    added.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1251.TXT

{% raw %}
```
Disk No: 1251
Disk Title: Dental P.M.S 1 of 5 (1251 thru 1255)
PC-SIG Version: S1.1

Program Title: Dental P.M.S
Author Version: 3.2
Author Registration: $125.00
Special Requirements: 512K RAM and a hard drive.

DENTAL PATIENT MANAGEMENT SYSTEM (DPMS) tracks treatments and manages
accounts receivable, insurance, patient billing, and follow-up
information.  Insurance company information, complete patient
information, and procedure details are integrated.  Information need be
entered only once; data from insurance forms is automatically posted to
a patient's account receivable records.  DPMS uses common computer
forms such as an attending dentists statement and the NEBS patient
billing form. Entering a patient procedure automatically updates
billing information  including charges.  Invoicing can be done in four
keystrokes.

DPMS's biggest strengths are patient tracking, and generating written
and telephone follow-up reminders, as well as inactive patient lists.
Patient files can be read by most wordprocessors to generate labels and
form letters.  Most routine procedures are included, and more can be
added.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989, 1990 PC-SIG, Inc.
```
{% endraw %}

## PMS.DOC

{% raw %}
```






            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                             PATIENT MANAGEMENT SYSTEM
                                          
                                          
                                    Version 3.2
                                          
                                          
                                         by
                                          
                                      SureSoft
                                          
                                   P.O. BOX 2082
                            VAN NUYS, CALIFORNIA  91404
                                          






































                                          
            
            
            
            
            
            
                                     COPYRIGHTS
            
            
            SureSoft Software is Copyright (c) 1985-1989 by SureSoft and
            may only be copied and distributed under the conditions
            specified in this document.
            
            COBOL is an industry standard language. Microsoft COBOL is
            copyright (c) by Microsoft Corporation, 1988, and copyright
            (c) by Micro Focus Limited, 1978, 1987. All Rights Reserved.
            
            
            
            Microsoft (TM) WORD is copyright (c) by Microsoft
            Corporation.



































                                        - 2 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            1. THE SHAREWARE CONCEPT
            
            There are several problems with much of the software on the
            market today. First, it is too high priced. This is
            partially a result of the cost of advertising and
            distribution and if these costs can be significantly reduced
            or eliminated, the savings can be passed along to the user.
            Advertising creates wants; it does not add to the value of a
            product.
            
            A second problem affecting software costs, particularly in
            specialized fields (such as dental office system software)
            is the cost of salesmen and convention booth costs. These,
            too, must be passed on the end user and they also affect the
            price you pay for your software. And once the salesman has
            completed his demonstration of the system (and gets your
            order) he collects his commission and adds no further value
            to your system.
            
            As a potential user, you have another problem beyond that of
            price. You would like to try out the software before you buy
            it. After all, if it doesn't do what you want, it isn't
            really of much benefit to you. But vendors are not
            interested in extensive try-outs, partly out of their fear
            that you will steal their software by copying it and then
            returning the original to them for a refund.
            
            Shareware software addresses all of these problems and
            others by letting you try out the software until you are
            satisfied with it and then asking you for a registration fee
            that does not require you to take out a mortgage on your
            business. These low fees are so reasonable because there are
            no high priced salesmen, distributors, and advertising
            executives to be paid.
            
            This manual will provide you with all of the information you
            need to use the major functions of the Patient Management
            System. In some places, you will find this notice:
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            We believe that everything necessary to adequately evaluate
            the Patient Management System has been included and the
            undocumented functions are more like "icing on the cake".
            There are several reasons why we have done this.
            
            1.   There are some people who will make extensive use of
                 the Patient Management System without registering. We
                 would like to encourage them to register. Where else
                 can you get a bargain like this?
            



                                        - 3 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            2.   Those who do not register will not be advised of
                 upgrades and will not be able to take advantage of the
                 facilities of the latest version of the system. While
                 new versions of the system will eventually end up in
                 general circulation, the programs required to upgrade
                 from an older version will be issued under normal
                 copyright restrictions and may not be circulated. Thus,
                 it may at times be necessary for an unregistered user
                 to throw out all of his old data and re-enter it if he
                 desires to upgrade other than by the proper means.
            
            3.   We feel that our registered users should be rewarded.
            
            There is a registration form included on the last page of
            this documentation for your convenience; or you may simply
            send us your name, mailing address, and telephone number
            with your registration check for $125. California residents,
            please remember to include 6.75% sales tax.
            
            PLEASE NOTE: Until we receive your registration, you
            essentially do not exist for us. We wish that it didn't have
            to be this way but there are still a significant number of
            people around who not only will use the system without
            registering but will also use up large amounts of our time
            on the telephone or in letters if we let them; hence the
            rule of no registration, no questions. So if it looks good
            to you, register and get the full manual. Then, if you still
            have questions, write or call. The functions are all defined
            in this manual, even if how to use them is not.
            
            Your registration fee will get you the full printed version
            of the manual, our unlisted support telephone number, one
            year of support, including all upgrades to the system issued
            during that period of time, and the opportunity to extend
            your support (and continue to receive upgrades) for a small
            annual fee.
            
            Also, when you register, you will receive the very latest
            version of the system. So if you are a new user, we suggest
            that you do not enter a lot of data which you want to
            retain. The latest version may be several versions removed
            from the version you are working with.
            
            So save your real, critical data until you receive the
            latest version of the system. Then, as a registered user,
            you will be eligible to receive notifications of all future
            upgrades which you can receive for a nominal fee (current
            fee $35.00 for annual support). These are generally issued
            semi-annually, but at least annually, and permit you to keep
            your system up to date. As a new registered user, you will
            receive copies of any upgrades issued without charge for a
            period of one year.
            As a service, we will make upgrades available from previous
            versions at a cost of $50.00 per upgrade (plus 6.75% sales



                                        - 4 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            tax for California residents). However, upgrades are
            cumulative, which means that you must apply EACH upgrade in
            sequence. Thus, to upgrade from version 3.0 to version 3.2,
            you must first apply the upgrade from 3.0 to 3.1 and then
            the upgrade from 3.1 to 3.2. Total cost for the upgrades
            would be $100.00. So, as mentioned above, wait until you
            receive your current version of the system and save this
            unnecessary expense.
            
            Finally, we continue to make changes to the system as our
            users request them. We encourage you to also submit any
            suggestions which you might have for the improvement of the
            system. Please drop us a line and let us know what you think
            should be added or changed and why such an addition or
            change would be advantageous. We would really like to hear
            from you.
            
            
            2. DISTRIBUTION
            
            You are specifically granted a license to obtain an
            evaluation copy of the system from a friend or association
            and to use that copy to evaluate the system on your own
            computer in your own office. You may also use a dealer's
            computer equipment for purposes of evaluating the
            interaction of the system with any computer equipment which
            you propose to purchase. You are then trusted to either
            forward a payment to the author or to discontinue use of the
            system. In either case, you are encouraged to copy the
            programs and make them available to others for their
            evaluation. When you copy the system, you must not make any
            changes to the files or directories provided on the
            diskettes. All files and directories must be copied onto
            succeeding diskettes and all copyrights must remain intact.
            
            While you may freely copy the diskettes for evaluation
            purposes, please note that the SureSoft Patient Management
            System is NOT a Public Domain program. It is Copyright (c)
            by SureSoft and may only be copied under the conditions set
            forth above.
            
            If you are in the business of selling Shareware diskettes,
            you may charge a diskette fee not to exceed $6.00 per
            diskette, plus a reasonable shipping and handling charge.
            
            3. SYSTEM INTRODUCTION
            
            The SureSoft Patient Management System is a set of programs
            which comprise a basic dental office system. It was
            originally designed to provide a strong marketing program.
            Patient recalls are facilitated by options to select patient
            records by a number of parameters. Mailing labels, merge
            files for word processors and reports for telephone followup
            as well as hand addressing are available.



                                        - 5 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            Insurance billing is provided and the information captured
            on the insurance billing form may be automatically
            transferred to the patient's receivable record, eliminating
            the need to re-enter the information.
            
            Patient Billing (Accounts Receivable) has been greatly
            simplified by tying procedure numbers into a procedure file
            which is used on both the patient statement and on insurance
            billing statements. In other words, by simply entering the
            procedure number, both the description and your standard fee
            are obtained from the procedure file, eliminating the
            requirement for your office staff to type these entries.
            
            Monthly patient bills are as easy as feeding forms into your
            printer and selecting the billing option from a menu. By
            printing on two part carbonless forms, a permanent record of
            all bills sent out can be maintained for your office
            records.
            
            This section describes the hardware required and the system
            installation procedures. Please read section 3 completely
            before starting your system.
            
            
            3.1 System Requirements
            
            The SureSoft Patient Management System is designed to run on
            an IBM PC/XT/AT or PS/2 with 512 Kbytes or more of main
            memory and a hard disk. One floppy disk drive is required
            for installing the system running PC-DOS 3.1 or greater. An
            80 column printer is required for reports and other printed
            output. While a monochrome monitor will be preferred by some
            because of its low cost, the system supports a color monitor
            and uses color effectively to highlight certain functions.
            
            The Patient Management System has been run on a wide variety
            of clones with complete success. However, we cannot
            guarantee that it will work on any particular clone. Our
            suggestion is that you try it before you buy the equipment
            if you do not already have it. There are some clones which
            are not 100% IBM compatible that could possibly not run the
            system properly. For color, you may use the CGA, EGA, or VGA
            adapters.
            
            You must set your files and buffers statements in your
            CONFIG.SYS file to at least 20 files and 20 buffers (we
            recommend 25). The Patient Management System requires that a
            large number of files be open at various times and the
            system simply will not function without these large values.
            






                                        - 6 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            WARNING:
            
            The Microsoft  file handler  is NOT compatible with many TSR
            programs. This includes some of the popular menu systems. We
            strongly recommend  that you  do NOT  use a menu system with
            the Patient Management System. Loss of data can occur.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            3.2 Installing the System
            
            CAUTION:
            
            The installation instructions given here are for new
            installations only. If you are upgrading your system from a
            previous version, follow the instructions included with your
            upgrade diskette. The instructions given below will destroy
            your existing data.
            
            Before installing the system, please look at the directories
            of the diskettes you received to determine if there is a
            file named README.DOC. If this file is present, you should
            print it out to see if there are any last minute changes to
            the installation procedure. This file may contain both
            procedural and documentation changes.
            
            Installation of the system consists of copying the files
            from the distribution diskettes to an appropriate directory
            on your hard disk and running a batch file to initialize
            data files.
            
            Your first step should be to create a subdirectory on your
            hard disk to contain your system. Use the DOS MKDIR (make
            directory) command to accomplish this. Then, using the CD
            (change directory) command, make this new directory your
            current directory. If you are not familiar with these
            commands, they are well documented in your DOS manual.
            Alternatively, you may use your root directory if you will
            not be installing a large number of other programs on your
            computer.
            
            Step two is to simply copy all of the files from the
            distribution diskettes to your working directory. Assuming
            that you are at the C> prompt and in your chosen directory,
            place each diskette into drive A in turn and enter the
            command  "COPY A:*.*".
            
            When all of your files have been copied, enter the following
            command:  "STARTUP".  This will run a batch file that will
            initialize all of the files required by your system and will
            then delete the initialization programs from the hard disk.



                                        - 7 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            These files are deleted to minimize the possibility of
            anyone accidentally running the programs again and
            destroying your data. The programs in question are named
            PMS00001.EXE and PMS03011.EXE. They remain on the
            distribution floppy diskette and may be re-copied if they
            are ever again required.
            
            Your system is now completely installed and ready for use.
            
            
            IMPORTANT ------------------------------
            
            When you first set up your system, it is designed to provide
            an automatic interface between the insurance billing program
            and the patient billing module. If you do not intend to use
            the patient billing module for any reason, it is important
            that you turn off the automatic interface. Failure to turn
            this interface off will cause records to be written to the
            interface file every time that you use the insurance billing
            program for an actual statement. This file will continue to
            grow until it absorbs all of the available data space on
            your hard disk.
            
            To turn this function off, go to the Utility Menu, select
            the option to update Static Information, Select Option I on
            the static menu, and enter an 'O' (letter O, not number 0-
            zero). This will turn the option off. To re-activate at any
            time, go to the same screen and enter an 'X'.
            
            
            3.3 System Backups
            
            No matter what computer equipment you use, you must plan for
            and eventually expect to experience some degree of failure.
            This is particularly true where hard disk drives are
            concerned. The hard disk, due to the nature of its
            construction and because it runs continuously, is the most
            likely part of your system to fail. It is a truism that
            SOONER OR LATER YOUR HARD DISK WILL FAIL. Unfortunately,
            that is also where you will have your important files.
            
            WHEN your hard disk fails, recovery is important. If you
            have made a backup of your hard disk, you will be able to
            recover to the point where your backup was taken and will
            only need to re-enter data entered after the backup was
            made. If you have not made a backup, you may lose everything
            and have to start all over.
            
            We can't tell you how often to make backups of your data or
            how you should make them. You must make that decision based







                                        - 8 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            upon your volume of business and with the help and guidance
            of your local dealer. We can only make a few suggestions for
            your consideration.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            3.4 The "forms" concept
            
            The SureSoft Patient Management System was designed from an
            operational standpoint around the forms that your office
            staff are already familiar with. And thinking of the screens
            as forms in an electronic typewriter will greatly aid your
            staff in their transition to the computer. The only
            difference in filling out these forms and filling out a form
            on a traditional typewriter is that the computer will ask
            for related information at one time rather than slavishly
            moving across a line. This is more fully defined in the
            Definitions section.
            
            There are two "forms" that are actual forms from printers
            and these are required if you are to get full value from the
            system. The first is a printed Attending Dentist's Statement
            which is available from Moore Business Forms as their form
            number 4093. (This form is also available from other
            printers--it is the 1978 ADA revision of the Attending
            Dentist Statement). Since most of these forms are very
            close, you might have another you wish to try and you should
            certainly do so. The advantage of the Moore form is that it
            is a continuous form and you can print multiple statements
            unattended. In any event, you may try out the system by
            printing on plain paper.
            
            The patient bill form is also a readily available form. We
            used NEBS form 9060 in developing the system, but this form
            is used with a number of different accounting packages and
            is readily available from different printers. This form was
            chosen because of the tear-off top portion which is to be
            returned with the patient's remittance. This greatly
            facilitates posting of payments. By the way, window
            envelopes are also available from NEBS, and most other forms
            suppliers, for this form. You may also use plain paper when
            you are testing the system but be aware that the statement
            forms are not size 8 1/2 x 11 and that sample print on plain
            paper will look strange. You must also reset the paper in
            the printer when you complete printing sample statements on
            plain paper.
            
            If you wish to print mailing labels, you will need to obtain
            standard 3 1/2 x 15/16" labels.
            




                                        - 9 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            You may  also print  directly  onto  either  3  1/2"  or  4"
            continuous form post cards.
            
            
            3.5 Definitions
            
            We need to define a few terms in order to make communication
            between us easier. We will make a special effort to not let
            this get out of hand.
            
            CURSOR: The cursor is the blinking block or underline
            character that lets you know where the data you type will
            show up on the screen. That's all it is. Consider it as
            performing the same function as the position indicator on
            your typewriter.
            
            ENTER/RETURN: When you see the word ENTER or RETURN in
            capital letters or enclosed in square brackets as [ENTER] or
            [RETURN], this refers to the key on the right side of the
            keyboard with an arrow on it which points down and to the
            left. Some keyboards use the actual words ENTER or RETURN.
            To avoid confusion, we will try to stick with the term
            [ENTER] throughout this document.
            
            Use of the word enter in lower case letters means that you
            are to type in the required information. Confusing? Let's
            assume that you are about to type the name Hill into the
            computer and you are instructed to - "enter the name and
            press ENTER" or "enter name and [ENTER]". In both cases, you
            would type the individual letters "Hill" and then you would
            press the [ENTER] key. Just to check that out one more time,
            you would have pressed five keys. They are the H, i, l, l,
            and [ENTER] keys.
            
            Another function of the [ENTER] key when working on an on-
            screen form is that of a tab key. You actually have two
            options when you are tabbing forward, the [ENTER] key as
            well as the tab key. For forward tabs, you may use whichever
            key you prefer.
            
            TAB: The [TAB] key is defined somewhat differently on
            various keyboards. On the IBM PC, it is designated by an
            arrow pointing to the left on top of an arrow pointing to
            the right. Some keyboards use the word TAB on the key. On
            the standard IBM keyboard, it is located on the upper left
            of the keyboard, next to the letter "Q".
            
            Unlike a typewriter, the computer is able to tab in either
            direction. A normal forward tab is obtained by simply
            pressing the key. A backwards tab is obtained by first
            pressing the [SHIFT] key and holding it down while you press
            the [TAB] key. The [ENTER] key may be used as a forward tab
            key only while working on any of the forms.
            



                                       - 10 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            There is one other important difference between using the
            [TAB] key on a computer and on a typewriter. Tabbing on the
            computer is under control of the program and may tab to any
            point on the screen rather than simply across the line you
            are working on. This makes it much easier to work on
            'groups' of information rather than jumping around in your
            thinking process simply because of the requirements of the
            form you are working on.
            
            BACKSPACE: The [BACKSPACE] key is the left pointing arrow
            usually located in the top row of the keyboard, immediately
            above the [ENTER] key. This key can be somewhat confusing
            because it is sometimes a destructive backspace (i.e.,
            erasing as it moves) and is sometimes non-destructive. In
            general, when you are issuing DOS commands, the key is
            destructive and when you are entering data into your files,
            it will be don-destructive. Note that this is a general rule
            and you should always test new programs to determine how
            they work.
            
            FUNCTION KEYS: Depending upon which keyboard you have, there
            are either  10 or  12 function  keys available.  They may be
            arranged in  two rows  down the left side of the keyboard or
            they may  be in a single row across the top. In either case,
            function keys  11 and  12 are  never  used  in  the  Patient
            Management System.
            
            These keys have special meanings at various times in the
            programs. When they are active (available for your use) they
            will be defined at the bottom of your screen. For example,
            the new patient form has [F1] defined as "START OVER". If
            you press the [F1] key at any time while you are working on
            a new patient form, it is the equivalent of tearing a form
            out of a typewriter, throwing it away, and putting in a new,
            fresh form. If a function key is not defined on the bottom
            of the screen, it is not active at that time and pressing it
            will have no particular effect.
            
            We need to stress that what a function key will do is what
            is defined at the bottom of the screen at a particular time,
            not what you may have used it for in another program only
            moments before. The only exception to this on-screen
            definition is the [Esc] key, or 'panic button' defined
            below.
            
            PANIC BUTTON: The [Esc] (ESCAPE) key moves around from
            keyboard to keyboard. It will have the letters Esc printed
            on it. On the standard IBM PC keyboard, it is located on the
            top left, next to the numeral '1'. On newer keyboards, it
            tends to be somewhere in the upper right area of the
            keyboard. This is our 'panic button'. It is almost always
            active. It is usually displayed as active in the lower right
            corner of the screen. This key will generally return you to
            the main menu from wherever you are. Use caution, however,



                                       - 11 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            because if you are in the process of entering data for a new
            patient and press the [Esc] key, you will lose the
            information entered on the screen.
            
            Sometimes, the [Esc] key will simply return you up one level
            in menus.
            
            
            4. TUTORIAL
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5. DATA BASE REFERENCE
            
            
            5.1 Starting the Day's Work
            
            To begin the day's work, first turn the computer on by
            following the instructions in your computer manual and the
            manuals for whatever peripherals you may have connected to
            your computer. If you have an AUTOEXEC.BAT file, you may
            wish to have it automatically start the Patient Management
            System for you if that is your primary use of the computer.
            
            If your computer has a clock/calendar built in (or added),
            the date will be set correctly by the computer. If you do
            not have a clock/calendar card, be sure to answer the date
            prompt correctly (DO NOT simply press the [ENTER] key as is
            commonly done). The reason is that the computer uses the
            current date in quite a few functions and it gets the date
            by asking the computer what the date is. If the computer has
            the wrong date, some of your patient records could end up
            with some incorrect dates in them.
            
            If you do not start the computer via the AUTOEXEC.BAT file,
            use the 'CD' command to make certain that the computer is
            working in the correct directory and type the command:
            
                 PMS [ENTER]
            
            These are the only special instructions that you need to
            remember. From this point on, all that you will be doing is
            under the control of the programs.
            
            After you type the PMS command, (or the computer does it for
            you in the AUTOEXEC.BAT file) the system banner will be
            displayed for a few seconds and then the Main Menu will be
            presented. The system banner screen contains the version
            number of the system. You should note this for your records
            and if you ever have need to contact us, we must know the




                                       - 12 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            version number you are using before we can provide any
            assistance of any kind.
            
            Also, a version of the system will only be supported for a
            reasonable length of time following the release of a new
            version. This will generally range from 90 days to 180 days,
            depending upon the changes involved in the new version. This
            will not be a problem for registered users as they will
            receive everything necessary to upgrade their system to the
            newest version.
            
            
            5.2 The Main Menu
            
            The Main Menu presents a number of processing options. To
            make a selection, simply press the keys indicated on the
            screen next to your choice, followed by the [ENTER] key. For
            example, adding new patients to the data base is listed as
            option 1. The line on the menu reads:
            
                 (1) ADD NEW PATIENT
            
            To select this option, press the '1' key and the [ENTER]
            key. The screen will clear, you will receive a message
            stating that the program is loading and, once the program is
            loaded, you will see the form for adding a new patient to
            the data base.
            
            The Main Menu screen is divided into four sections. Of
            these, the END OF JOB option is the way in which you exit
            the system. Normally, this would only be at the end of a
            day's work. However, if you need to exit the Patient
            Management System in order to use your word processor or to
            do other work on the computer, always exit via this option.
            This will ensure that all files are closed properly and that
            any other cleanup chores have been done properly. It's like
            cleaning off your desk at night and putting everything away
            where you will be sure to find it in the morning.
            
            NEVER, NEVER, NEVER - just turn your computer off without
            exiting the system when you finish. This can destroy files.
            No matter what program you are working with, you should
            always get back to the DOS prompt (something like C:>)
            before you turn off your computer.
            
            
            5.3 Adding a New Patient
            
            When you choose the option to add new patients to your file,
            you will be presented with a form for the information. When
            the form is first presented, it is just as if you had
            inserted a form into a typewriter and positioned the type
            ball to the first field to be typed. You will find the
            cursor waiting in that position for you. The only real



                                       - 13 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            difference between entering data here and doing it on a
            typewriter is that the fields will be addressed in a logical
            order; not necessarily straight across the page. The cursor
            will always be on the field you are working on.
            
            Most of the fields on the form are self explanatory but a
            few may need special instructions. Before that, however,
            here are a few general considerations concerning entering
            data.
            
            As you enter data into a field, you may occasionally make a
            mistake (if you're like most of us). When this happens,
            simply press the left arrow (backspace) [<-] key. The cursor
            will backspace over the invalid data and permit you to re-
            enter the character that you entered incorrectly. When you
            finish with a field, press the [TAB] key to signify that you
            are done and to have the computer tab to the next field. If
            you notice an error after you leave the field, you may back-
            tab to the field in error and make any needed corrections.
            Then tab forward to continue with your entries.
            
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1 Special Fields
            
            Some fields have special requirements if you are to obtain
            maximum benefit from their use. These are described in the
            order in which they appear on the patient form.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1.1 Zip Code
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            5.3.1.2 Chart
            
            You may use any numbers for your charts from 000001 through
            999998. Both 000000 and 999999are not available. Duplicate
            chart numbers are not permitted in the system.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            



                                       - 14 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            5.3.1.3 B/D (Birthday)
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1.4 SS # (Social Security Number)
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1.5 Telephone Numbers
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1.6 EMP (Employer)
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.3.1.7 INS Code
            
            The insurance codes are the three digit numbers you have
            assigned to the companies on your list of carriers (Option 3
            at the Main Menu). Company numbers are not validated as you
            enter them so that you will not be forced into sequential
            processing whenever you add new patients with insurance
            companies not yet on file. In practical terms, this just
            means that you should be a bit careful.
            
            
            5.3.1.8 Insured Chart # - Relationship
            
            INSURED CHART # - RELATIONSHIP: This field allows you to tie
            one chart to another for insurance billing purposes. For
            example, a young girl who is covered under her father's
            insurance would have the father's chart number entered here
            and the word "DAUGHTER" in the RELATIONSHIP field. When this
            patient is called up for insurance billing, the father's
            insurance information is obtained from his chart and used on
            the insurance forms.
            
            





                                       - 15 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            5.3.1.9 Bill To Chart #
            
            BILL TO CHART #: This chart number is used for patient
            billing purposes where billings are to be grouped, such as
            sending only one bill for an entire family. To carry the
            example of the young girl discussed above another step
            farther, if her bill is also to go to her father, his chart
            number would also be placed in this field. However, she
            could be covered under his insurance coverage as indicated
            above but included on her mother's billing statement. In
            that case, the mother's chart number would be included here.
            Finally, if her billing is to be kept separate from the rest
            of the family, simply ignore this field and she will receive
            a separate bill. Note that this field only has meaning if
            you have the Patient Billing option of the system installed.
            
            
            5.3.1.10 Inactive
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.4 Review/Change Patient Record
            
            When this program comes up, it will ask if you want to
            locate a record by name (last name and first initial) or
            chart number. Press either [1] or [2] in response to the
            question. If you choose [2], you will then be asked for the
            chart number. Enter the 6 digit chart number. The computer
            will then search for the number you have requested. If it is
            found on the file, the record will be presented to you on
            the screen. If that particular chart number is not located,
            you will receive an error message on screen and will be
            returned again to this question.
            
            If you choose to locate a patient by name, press the [1]
            key. You will then be asked to enter the last name and first
            initial of the record you wish to have displayed. Enter the
            last name and first initial as you expect to find them on
            the data base. The computer will then search for the name.
            For purposes of locating a record by name, uppercase letters
            are not significant. The computer will treat upper and lower
            case letters alike.
            
            If the name does not exist on the file, you will receive a
            "NAME NOT ON FILE" message and will be returned to the
            NAME/CHART question. If the name is found, the computer
            can't be sure that it has located the one that you want to
            see (how many people with the name Jones or Smith are on
            your file?) so it will display basic information in an
            abbreviated format and ask if that is the one you wanted to
            see. If it is, press the [Y] key and you will then be given



                                       - 16 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            the complete record. If the record displayed is not the
            correct one, press the [N] key and you will be offered the
            next name that matches your request. This will continue for
            as long as necessary or until you run out of names that
            match your selection criteria.
            
            If you accept a name and then decide that it is not the
            correct one once it is fully displayed on the screen,
            pressing the [F1] key will take you back to the NAME/CHART
            option where you may select another record.
            
            
            5.4.1 Modifying the Record
            
            Once the record has been located and displayed, the [F2] key
            will permit you to go into the modification mode. When you
            choose this option, the cursor will move to the last name
            field. You may then use the [TAB] keys to move from one
            field to another. When you get to the field that you wish to
            change, you may either completely re-type the field or use
            the cursor movement keys on the numeric keypad to move
            within the field and change only partial data. When you
            finish correcting a field, press either the [ENTER] or [TAB]
            keys to move on to the next field. You may move around the
            fields in the form at your own convenience, making
            corrections/changes in whatever order best suits you.
            
            When you have completed all of your changes, simply press
            the [F6] key to register your changes on the data base. Most
            changes will be made instantly. If you changed the patient's
            last name, the change may take a few seconds while the
            computer deletes the record under the previous name and
            creates a new record with the new name.
            
            
            5.5 Add/Change Insurance Company
            
            Selecting this option (Option 3 at the Main Menu) will give
            you a choice of adding a new insurance company to your files
            (A) or changing information on an existing company (C). If
            you are adding a new company to your files, the computer
            will automatically assign the next available company number.
            You are then presented with a company screen where you enter
            the company name, mailing address, city, state, and zip
            code. This is the information that will be printed on
            insurance forms when they are printed (see CREATE AN
            INSURANCE FORM).
            
            If you are changing information relating to an insurance
            company already on file, you must enter the company number.
            The information currently on file will be displayed on the
            screen and the program will go into correction mode. You may
            move backward and forward through the fields by using the
            [TAB] keys. Simply overtype the field or fields that you



                                       - 17 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            wish to change. When you complete your changes, pressing the
            [F6] key will record the changes in the insurance company
            file.
            
            After the new or changed insurance company information has
            been stored in the insurance company file, you will be
            returned to the add/change question. If you have completed
            your work with insurance companies, press the [Esc] key to
            return to the Main Menu. It is then advisable to select
            option '18' at the Main Menu so that you may obtain a new
            working list of companies. This only takes a couple of
            minutes and is well worth the time spent. You should always
            have a current list available for use while you are entering
            new patients.
            
            
            5.6 State Insurance Forms
            
            Selecting this option will bring up an information screen
            unless you have requested a special insurance module for
            your state. If one does not currently exist, and you are a
            registered user, we will work with you to provide the
            necessary program. Note that this is only for state mandated
            forms (generally for welfare patients).
            
            
            5.7 Create an Insurance Form
            
            Selecting Option 6 at the Main Menu will permit you to
            create the data for use on an Attending Dentist's Statement.
            The Patient Management System is designed to use the spacing
            provided on Moore Business Forms form number 4093. This is a
            continuous form set on three part non-carbon forms. The
            forms may be pre-printed with the dentist's name, address,
            etc. if you wish or you may have the computer print the
            information (see section 5.14.6 for more information).
            
            When you select this option, you are first asked to enter
            the chart number of the patient for whom you wish to prepare
            a statement. Only chart numbers are acceptable here. This is
            to minimize the potential for error on similar names.
            
            After you enter the chart number, the computer will do two
            things before presenting the information for you to work on.
            First, it will obtain the patient's record and set up as
            much information as it has available in memory for use on
            the chart. Then, if that chart is tied to another chart (via
            the INSURED CHART # field on the patient's record) the
            computer will obtain the insured's chart and fill in the
            insurance information from that record.
            
            Once the computer has filled in as much information as it
            has available (this only takes a second or two) it will
            present the top portion of the form to you. This portion of



                                       - 18 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            the form, like the others, is designed to mirror on the
            screen the relative location of the fields on the actual
            form. Therefore, if you are at all confused over the layout
            on the screen, simply compare it to a copy of the actual
            form. You should also be aware that the field sizes on the
            screen are the same size as those on the form. That is, you
            can only type as many characters onto a line on the screen
            as will fit on the form.
            
            Notice the function keys listed at the bottom of the screen.
            Throughout the creation of the Attending Dentist's
            Statement, the [F1] key is dedicated to starting over. The
            [F2] key indicates that it is for corrections although it
            will seldom be used since you may readily move the cursor
            back and forth throughout the fields with the [TAB] key. The
            [F4] key is used to move on to the next part of the form
            when you are satisfied with this part. The [Esc] key, as
            usual, will take you back to the main menu.
            
            Note that in many cases, all available patient information
            will have been filled out on this part of the form. You may
            only need to complete the first fields which are choosing
            between estimated and actual. This is done by placing an 'X'
            on the appropriate line. This choice, however, will
            determine whether the statement is included on the followup
            listing prepared under option 12 at the Main Menu. It will
            also determine whether the information is transferred to
            patient billing records if you have the Patient Billing
            Option installed for automated patient billing.
            
            Both parts two and three of the form list the patient name
            and chart number at the top of the screen along with an
            indication of whether you are working on an estimate or an
            actual billing. This is to prevent confusion should you be
            called away momentarily to another task. Most of part 2
            simply requires that you place an 'X' in appropriate yes or
            no columns in response to questions. Any dates which may
            show up as zeros on the screen will not print on the form
            unless you enter non-zero information into them.
            
            There are two ways to move on to part three of the form, the
            actual billing portion. Both the [F4] and [F5] keys will get
            you there, but with a difference. Use of the [F4] key will
            start part 3 using your standard billing amounts taken from
            your Procedure File. The [F5] key, however, will use the
            descriptions and codes from your Procedure File but will
            require you to enter fees for each procedure you list on the
            form. This is to provide for special billing situations. The
            other function keys work as described.
            
            When you pull up part three of the form, there is a prompt
            line at the bottom of the screen, immediately above the
            function key definitions. There is an arrow ( ==> ) pointing
            to the prompt line. The underscore characters indicate data



                                       - 19 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            to be entered by you. If a field is not needed, simply use
            the [TAB] key to move to the next field. For example, if you
            were billing for a full set of x-rays, the tooth and surface
            fields would be meaningless and you would [TAB] past them.
            The date is the date that the procedure was performed, and
            the PROC # field is for the procedure number.
            
            Once you have completed the information on a billing line,
            press the [ENTER] key and the computer will display the
            appropriate line or lines for printing in the blank space
            above. The computer obtains the description for the
            procedure and your fee from your Procedure File, based upon
            the procedure number you entered on the prompt line. The
            prompt line is then reset for the next entry.
            
            Notice that the 'TOTAL FEE' field is now filled in by the
            computer. This is a running total while you enter procedures
            and may be used as a check that you don't miss anything. If
            you fill all available lines on this screen, you will move
            automatically to part 3A which functions identically to part
            3. Between the two screens, there are sufficient lines
            available to fill one Attending Dentist's statement
            completely.
            
            If you started Part 3 with the [F5] key, there is also a fee
            field on the prompt line. After you enter the procedure
            number, the cursor will move on to the fee field. Enter the
            fee amount as dollars and cents, complete with the decimal
            point. Note that you do not need to press the [ENTER] key
            after entering the cents. The computer will still obtain the
            description of the procedure from the Procedure File but
            will use the fee you input instead of the one on the file.
            
            IMPORTANT: The [F2] key will let you go back to the previous
            parts of the form to make corrections. However, when you
            return to Part 3, you will have lost the data you input and
            you must re-enter the information.
            
            The [F5] function key will permit you to exit from either
            part 3 or part 3A to complete production of the form. You
            are then asked whether to Print Now (N) or Save (S) the form
            for later printing. If you choose to save the form for later
            printing in batch mode (see Option 12, PRINT INSURANCE FORMS
            at the Main Menu) simply press the [S] key. The computer
            will take a few seconds to store all of the information and
            will then return you to the chart selection screen to
            prepare for the next form. You may then either proceed to
            prepare another form or press the [Esc] key to return to the
            Main Menu.
            
            If you choose to print the form immediately and already have
            forms aligned in your printer, simply press the [N] (for
            NOW) key and the form will be printed. If it is an actual
            billing, the patient, insurance company, and total fee will



                                       - 20 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            be saved for printing on the billing list when that report
            is next printed following a batch print run. If you do not
            have forms ready in the printer, do not press the [N] key
            until you are ready to print. Align a form in the printer
            first and then press the [N] key. When the form has been
            printed, you will be asked whether you wish to re-print it.
            If it was badly aligned, press [Y] after aligning a new form
            in the printer. If you are satisfied, press [N] and you will
            be asked for the next chart number.
            
            
            5.7.1 Interface to Patient Billing
            
            If you have the Patient Billing option installed (included
            automatically starting with version 3.0) and you are
            creating an actual billing, the information you have entered
            will be automatically transferred to the patient's statement
            without further effort on your part. It will show up on the
            patient's next statement. The information is placed in the
            transaction file as soon as the Attending Dentist's
            Statement is printed and is available for posting to the
            patient's records.
            
            
            5.8 Mass Update
            
            The Mass Update (Option 7 at the Main Menu) provides you
            with an easy way to make identical changes to the date
            fields. The idea is to select the field to be updated,
            provide the computer with the information to be posted (i.e,
            the new date), enter the chart numbers which are to be
            updated, and let the computer go about the work of updating
            the records.
            
            The fields which you can update in this manner are: 'LAST
            OH', 'NEXT OH', 'EXTRACTION', 'BRIDGE', 'PARTIAL',
            'DENTURE', 'ENDO. TREATMENT', 'PERIO. TREATMENT', and
            'RECALL LETTER'. The definitions of all but the first two
            may be changed at system setup time.
            
            Simply select the field you wish to update by number. You
            will then be asked for the date to be posted. Enter whatever
            date you desire to post to the records.
            
            After entering the date, you are then asked for the chart
            numbers to be updated. Once you complete entering the
            information, the computer will post the dates on the charts
            you have entered and print a posting report for your
            records.
            
            As you enter each chart number, the patient's name and
            address are read from the patient file and displayed on the
            screen. You must then accept of reject the entry you have
            just made by pressing the Y or N (for Yes or No) key. This



                                       - 21 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            is to reduce the potential for error in keying the chart
            number.
            
            When you enter information for the 'LAST OH' (Last Oral
            Hygiene), the NEXT OH field is also updated. Each patient
            record has a time interval field which you may complete on a
            patient by patient basis. If that information is present,
            the computer will use it to update the NEXT OH field. If it
            is not present, the computer will default the NEXT OH to 6
            months and 1 day from the LAST OH date. This date may then
            be used to generate recall letters or post cards.
            
            
            5.9 Add/Change Procedure File
            
            This processing is entered by selecting Option 8 at the Main
            Menu. When you first enter Procedure File processing, you
            are asked whether you want to add a new procedure or to
            change an existing procedure. The selection options are [A]
            and [C].
            
            To enter a new procedure to the file, you are required to
            enter the procedure number, one or two lines of description
            (these are used on the Attending Dentist's Statement and on
            patient bills) and your fee for this procedure.
            
            If you choose to change a procedure, you are asked for the
            number of the procedure you wish to change. Enter that
            number and press [ENTER]. The information currently on file
            is then presented on-screen and you are automatically placed
            in change mode. Move around the screen making whatever
            changes you wish and then press the [F6] key when you are
            finished to update the information on file. If you press the
            [Esc] key rather than the [F6] key, you are returned to the
            Main Menu without updating the information on file. When you
            first install your system, you receive a sample procedure
            file which you may load and then modify as you wish.
            
            There are 2 fee fields on the procedure file. The field
            simply listed as FEE will be your standard fee. The second
            field, STATE FUNDED FEE, only has meaning when it is used
            with a state funded program. These programs are only
            available to registered users, upon request. Just ignore
            this second field.
            
            
            5.10 Mailing Labels & Post Cards
            
            This option will permit you to print on either mailing
            labels or continuous form post cards. After choosing Option
            11 at the Main Menu, you are asked to choose between Labels
            or Cards. Press the "L" or "C" keys as appropriate. Labels
            are designed to print on standard 3 1/2 x 15/16 labels. Post
            cards print on 3 1/2 inch post card stock. Labels will begin



                                       - 22 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            printing in print position #1 and postcards will begin in
            position #11. You are given an option to align your printing
            according to the option you have chosen.
            
            You will be presented with a menu of options. These include
            BIRTHDAY, LAST OH, NEXT OH, EXTRACTION, BRIDGE, PARTIAL,
            DENTURE, ENDO. TREATMENT, PERIO. TREATMENT, RECALL LETTER,
            ZIP CODE, INSURANCE COMPANY, REFERRED BY, EMPLOYER, RECALL
            CODE. After choosing your option, you will be asked to enter
            the selection data. For dates, you are asked for a range of
            dates by entering a starting and an ending date. For
            example, if you wish to obtain labels for all persons with a
            birthday in July, you would select the birthday option and
            then enter the starting date as 0701 and the ending date as
            0731.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.11 List Procedure File
            
            This option will prepare a listing of your Procedure file in
            procedure number order. This report is particularly useful
            for reviewing your fee schedule. You will also probably want
            to print a copy of the file provided with the system to
            review the procedures and explanations provided with the
            system in order to determine what procedures you might wish
            to add and those which you might wish to change. You will
            also need to enter your fee schedule initially.
            
            
            5.12 Word Processing Extract
            
            This option will create a file of extracted information to
            be used in preparing form letters via the merge option of
            your favorite word processor. A few early options remain on
            the menu, but we suggest that you use the ASCII options as
            virtually all word processors will work with an ASCII
            delimited file.
            
            The information provided on the extract is:
            
            FIRST NAME, LAST NAME, ADDRESS, CITY, STATE, ZIP CODE, DATA,
            EXTRANEOUS. The DATA field is the information contained in
            the field you extracted on.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            




                                       - 23 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            5.12.1 Supported Word Processors
            
            Use the ASCII option only. All major word processors accept
            an ASCII delimited file as input to their merge function.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.12.2 Extract Options
            
            See the Mailing Labels option for a discussion of the menu.
            
            
            5.12.3 The Extract File
            
            A file with the extract information is created and is named
            'PASSFILE.DAT'. You use this file as input to your word
            processor to create personalized letters. In the ASCII file,
            there are eight fields, seven of them usable. The last field
            contains useless information for most word processors and
            was set up to provide space for some specialized
            information. However, you will have to let your word
            processor know of its existence in most cases. Simply give
            it a name in your field definitions and then ignore it.
            
            
            5.13 Select Records (reports)
            
            This option provides reports based upon the same selection
            criteria used in the word processing extract and in the
            mailing labels. After making your selection as defined in
            those sections, make certain that your printer is loaded
            with plain paper and is on-line. You will then be asked to
            choose between the Address and Telephone formats. The
            address format would be most useful if you were to
            personally address cards to patients while the telephone
            format would be most useful in providing telephone followup.
            
            Depending upon the number of records chosen, the computer
            may get well ahead of the printer if you are using a spooler
            program or a hardware buffer. In this case, you will return
            to the Main Menu and may continue other uses of the computer
            without waiting for the report to complete. If you wish to
            obtain another plain paper type of report, you may go ahead
            and make the selection. The computer can then work on
            creating that report while it finishes printing the current
            one. As soon as the current report completes printing, the
            computer will immediately begin printing the next report. If
            a paper change is required, however, you will have to wait
            until the computer finishes, change the paper, and then
            start the next report.
            



                                       - 24 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            NOTE: Any records flagged as inactive will be excluded from
            the reports.
            
            
            5.14 Insurance company Master List
            
            The insurance company listing, Option 18 at the Main Menu
            will print a list of the insurance companies on your file by
            company number. You should always have a current copy of
            this list handy when you are entering data so that you can
            enter the correct company number on the patient record. You
            need only ready the printer, press [ENTER] and the computer
            will do the rest. Since this list is not usually very long,
            the job should complete very quickly.
            
            
            5.15 Utilities
            
            A number of utilities have been included with the Patient
            Management System to help you maintain your system. These
            are programs not normally used in the day to day operation
            of your system
            
            
            5.15.1 The Utility Menu
            
            The Utility Menu is entered by selecting the Utilities
            option at the Main Menu. You are then presented with the
            Utility sub-menu. When you return from any of the utility
            programs, you will return to this sub-menu. Note that
            selection of option 99 will return you to the Main Menu.
            
            
            5.15.2 Deleting Records
            
            Since a disgruntled staff member could do a considerable
            amount of damage by deleting patient records from your
            files, the deletion program is password protected. This
            means that every time you enter the deletion program in
            order to delete a patient record, you must give the master
            password. You are asked to enter it on a password screen. As
            you type in the letters, you will not be able to see what
            you have typed. This is done to make it harder for a nearby
            observer to discover what the password is by watching the
            screen.
            
            When you receive your system, the master password is
            'PASSWORD', exactly as typed (without the quotes). You must
            enter it in all capital letters. All passwords are case
            sensitive and are matched exactly with the way they have
            been defined to the system. If you have changed the password
            via the 'UPDATE STATIC INFORMATION' option, you must enter
            it here exactly as you changed it.
            



                                       - 25 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            If you enter an incorrect password, you are returned
            immediately to the Utility Menu. If the password is correct,
            you are asked for the chart number of the patient record
            which is to be deleted. You will then be shown the
            abbreviated form of the patient data and asked to verify
            that it is the correct entry.
            
            After each delete, you are again asked to enter the
            password. While this may seem to be a nuisance at times, it
            is to protect against the time when you may be engaged in
            deleting records and are called away. If you were to forget
            to exit the deletion routines, your system would then be
            exposed to possible malicious damage. Since deletions should
            be relatively infrequent, this should only be a slight
            inconvenience.
            
            
            5.15.3 Rebuilding Patient Files
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.15.4 Display File Statistics
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.15.5 List Inactive Patients
            
            This is a report designed to help you keep track of your
            inactive patients. You are provided with two options; you
            may print all of the inactive patients on the file or those
            with a certain code. To print all patients, simply press
            [ENTER] when asked to provide the code to be listed;
            otherwise, enter the appropriate code.
            
            This code is case sensitive. If you have some patients that
            are not appearing where you think they should, consider
            running a full list and verifying the INACTIVE code. In many
            cases, you are likely to find that the code is in lower case
            when you requested upper case, etc.
            
            










                                       - 26 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            5.15.6 Update Static Information
            
            The static information section is primarily used for the
            management of passwords.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            5.16 End Of Job
            
            You use the END OF JOB option whenever you must exit from
            the system, whether it is actually at the end of the day or
            if you are going to stop the system in order to use the
            computer for other purposes. For example, you may be going
            to run form letters using your word processing program and a
            file that you have created. You would exit the system using
            this option and go about your word processing tasks.
            
            If you need to re-enter the Patient Management System after
            you finish with your other chores and you are still in the
            correct sub-directory or have returned to it, enter the
            command:
            
                 PMS  [ENTER]
            
            The system will re-initialize and the Main Menu will be
            presented.
            
            
            5.17 Abnormal Power Down
            
            Abnormal power downs may be harmful to your computer and/or
            to your data. Generally, these occur during storms or other
            situations likely to be preceded by a voltage spike. All
            electronic equipment is sensitive to these spikes; computers
            more than most.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            The Patient Management System is reasonably protected
            against these kinds of situations. It accomplishes this by
            closing files as soon as possible. If all files are closed,
            your data will not be damaged, provided that physical damage
            does not occur to the hard disk itself.
            
            Following a power failure, try to re-start the system in the
            normal manner. Then call up the information you were just
            working with. If it comes up on the screen, look at a few
            other recent entries. If these all appear to be okay, you
            have probably not suffered any data damage.



                                       - 27 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            If the computer appears to be operating properly but you are
            unable to use your files properly, it will be necessary to
            go to your last backup of the system and to restore your
            files at that point. Work entered since then will likely
            have to be repeated.
            
            
            5.18 Data Base Index
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            










































                                       - 28 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            6. Patient Billing / Accounts Receivable
            
            This section describes the use of the Patient Billing
            (Accounts Receivable) module of the Patient Management
            System. To use this module, you must have the data base
            module installed and operating. The Accounts Receivable
            module is tightly coupled with the Patient Management System
            and will NOT operate as a stand-alone accounts receivable
            system.
            
            The terms Accounts Receivable and Patient Billing refer to
            the same process and are used interchangeably in this
            documentation.
            
            
            6.1 Introduction to Billing
            
            To use this module effectively, you will need a supply of
            statement forms which the computer may use to automatically
            produce your monthly statements. The form we programmed for
            around is form number 9060 from Nebs Computer Forms. This
            form is compatible with much Apple software, the Small
            Business Systems Group software for several computers, and
            the Star Software Systems for CP/M and MP/M based systems.
            This form was chosen for two reasons. First, it should be
            readily available from most publishers of continuous forms
            because it is used by so many popular general purpose
            accounting systems and secondly, it is one of the few forms
            which utilize a "tear off" portion to be returned with the
            remittance. The tear off and return portion makes posting of
            payments much easier since the chart number, required for
            posting, is on that part of the form. This eliminates the
            time consuming operation of looking up patient information
            when remittances are received.
            
            Most publishers of continuous forms can supply single or
            dual window envelopes for ease of mailing plus return
            envelopes to help in your collection efforts. This makes the
            monthly billing chore as simple as having the computer print
            the statements, removing the printed statements from the
            printer, stripping the perforated edges, stuffing the
            envelopes, applying postage, and mailing.
            
            We suggest that you consider obtaining your statement forms
            in 2 part carbonless forms. After printing, you simply
            separate the two copies and keep the duplicate intact for
            your permanent records.
            
            IMPORTANT: To avoid tying up the computer while you are
            entering charges and payments, this information is NOT
            posted directly to the patient's account. The information is
            collected in a transaction file until you run the POST
            function. When you post, all transactions you have entered
            directly as well as those created when you prepared actual



                                       - 29 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            Attending Dentist's Statements are posted to the patient's
            records. See the POST function for more information.
            
            
            6.2 Accounts Receivable Menu
            
            The Accounts Receivable sub-system is entered via Option 21
            at the Patient Management System Main Menu. You are first
            presented with a screen identified as the 'ACCOUNTS
            RECEIVABLE ACCESS SCREEN' where you are asked to 'ENTER
            PASSWORD' and you are presented with a series of asterisks.
            You must enter the correct password to gain access to the
            accounts receivable sub-system. As you type the password,
            the cursor will move across the asterisks but the letters
            you type will not be displayed for security reasons.
            
            The password, when your system was originally shipped was
            'PASSWORD' (no quotes, and all capital letters). This must
            be entered exactly as given.
            
            If you enter the password correctly, you will be presented
            with the Accounts Receivable Menu which looks and functions
            very much like the Main Menu. As you move in and out of the
            accounts receivable modules, you will return to this menu.
            
            If you do not enter the password correctly, the screen will
            turn red on a color monitor, the message INVALID PASSWORD
            ACCESS DENIED will be printed on the screen and you will be
            unceremoniously exited from the Patient Management System.
            If this happens, you must restart your system with the PMS
            command.
            
            
            6.3 Enter Charges
            
            This program is used to enter charges directly to a
            patient's statement. It is used when an Attending Dentist's
            Statement has not been prepared. If an Attending Dentist's
            Statement has been prepared, it is not necessary to use this
            function as the charges entered on that form will
            automatically be transferred to the patient's billing
            statement.
            
            There are only four fields required for entering a charge
            and two of these will carry the date forward from one screen
            to the next. The four fields and their purpose are described
            below.
            
            PATIENT CHART NUMBER: Enter the patient's chart number here,
            not the billing chart number. This is important as the
            billing statement will reflect the patient's name. If the
            billing chart number is different, as in the case where a
            single statement is sent for all members of a family, the
            computer will handle the consolidation automatically.



                                       - 30 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            As you enter each chart number, the patient's name and
            address are read from the patient file and displayed on the
            screen. You must then accept of reject the entry you have
            just made by pressing the Y or N (for Yes or No) key. This
            is to reduce the potential for error in keying the chart
            number.
            
            Since there will often be more than one billing item per
            patient, after you complete the entry, the patient's chart
            number will still be in this field. To enter another charge
            for the same patient, simply press the [ENTER] key to tab to
            the next field. If the next charge is for a different
            patient, just type the new chart number over top of the
            number on the screen.
            
            DATE: Whenever you first enter the charge screen, the
            current date is obtained from the system and is placed into
            this field for your convenience. If you are entering charges
            for the current date, you may simply tab past this field.
            However, as this is the date that will be reflected on the
            patient's statement, you should over type it if the charge
            date is different. Once you change the date, the new date
            will remain in the field until you again change it.
            
            PROCEDURE NUMBER: All billings are based upon the entries in
            your procedure file. You just enter the procedure number and
            the description in the procedure file will be used on the
            patient's billing statement giving complete, descriptive
            billing without all the typing! In all cases, the basic fee
            is used; never the state funded fee.
            
            AMOUNT: You have two options in the amount field. To use the
            standard amount as reflected on your procedure file, just
            press the [ENTER] key. You will see the computer fill in a
            zero amount for a moment. This zero amount is an indication
            to the computer that you wish to use the standard amount and
            the computer will obtain that amount from the procedure
            file. If, however, you wish to bill a different amount than
            what is on your file, enter the amount you wish to bill in
            this field. The amount you enter will be used rather than
            the amount on file.
            
            NOTE: You may need to pay particular attention to the amount
            field whenever you have made recent changes to a fee on the
            procedure file. For example, if you have already changed the
            fee for an extraction and you are still entering charges
            from a date prior to the change, you will need to enter the
            correct fee here. Accepting the default will cause the new
            fee to be used.
            
            When you have completed your entries, use the [Esc] key to
            exit this option. You will then be returned to the Accounts
            Receivable Menu.



                                       - 31 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            
            6.4 Enter Payments
            
            This is Option 12 at the Accounts Receivable Menu screen and
            is used for entering payments only. If you are adjusting an
            account balance, use option 13; do not use the payment
            entry.
            
            PATIENT CHART NUMBER: You may enter either the billing chart
            number or the patient chart number (if different) and the
            payment will get to the appropriate account based upon the
            BILL TO information on the patient chart. In most cases, you
            will have the billing chart number which will be printed on
            the return portion of the patient's statement.
            
            As you enter each chart number, the patient's name and
            address are read from the patient file and displayed on the
            screen. You must then accept of reject the entry you have
            just made by pressing the Y or N (for Yes or No) key. This
            is to reduce the potential for error in keying the chart
            number.
            
            DATE: This date field will be initialized and handled
            identical to the date field in the charges input screen.
            
            PAID BY: There are two 'paid by' options; 'Patient' and
            'Insurance Company'. Simply enter anything in the
            appropriate field (we use an X, but you can use whatever you
            wish). The importance of this field shows up on the
            patient's statement. Entries indicated as having been paid
            by the patient will state 'PAYMENT - THANK YOU' on the
            patient's next statement whereas entries indicated as having
            been made by the insurance company will reflect 'PAID BY
            INSURANCE COMPANY'. This will help give the patient a proper
            record of just who paid what. It is also important to
            identify insurance company payments if you are tracking open
            insurance company payments with the report option.
            
            AMOUNT: Enter the amount of the payment.
            
            CHECK NUMBER: This information is not carried over to the
            statement so you may ignore it if you choose. However, it is
            printed on the posting report and can at times be of value
            in tracing activity on an account. Whether or not you use
            the field is a decision for your office to make.
            
            NOTE ON APPLYING PAYMENTS: For aging purposes, all payments
            are applied to the oldest balance first.
            
            






                                       - 32 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            6.5 Enter Adjustments
            
            The adjustment screen is used to make adjustments to a
            patient's account, either positive or negative (see AMOUNT,
            below). This screen should be used to correct an error on an
            account or to make any other required adjustment so that the
            adjustment is properly reflected as an adjustment on the
            patient's next statement.
            
            PATIENT CHART NUMBER: Like the charges screen, the patient's
            chart number should be entered, not necessarily the billing
            chart number. The computer will see that the entry is posted
            to the proper billing chart, if it is different.
            
            As you enter each chart number, the patient's name and
            address are read from the patient file and displayed on the
            screen. You must then accept of reject the entry you have
            just made by pressing the Y or N (for Yes or No) key. This
            is to reduce the potential for error in keying the chart
            number.
            
            DATE: Handled the same as the charges and payments.
            
            AMOUNT: To add to (increase) a patient's balance, enter the
            amount of the adjustment here. If you are lowering the
            balance, enter the adjustment amount and then press the [-]
            (minus) key BEFORE you press the [ENTER] key. In either
            case, the amount will be reflected on the patient's next
            statement with the notation 'ADJUSTMENT'.
            
            
            6.6 Look Up An Account Balance
            
            The purpose of this option is to do a quick lookup on an
            account. It is important to remember, however, that only
            POSTED amounts will be reflected in the balance shown. Any
            unposted amounts will not show up. So if you have unposted
            transactions for the patient you are looking up, you must
            add these amounts to the balance displayed here in order to
            arrive at the correct present balance for the account.
            
            This lookup function operates much like the REVIEW/CHANGE
            PATIENT RECORD in the main data base in that you may look up
            a balance either by chart number or by name. For more
            information on finding the appropriate record, please see
            that section of your data base manual.
            
            Once you have obtained the appropriate patient record the
            balance lookup begins. The screen you are presented with
            will show the patient chart number you requested, the
            billing chart number (which may be the same or different)
            and the billing name (again, may be the same or different).
            




                                       - 33 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            The billing name and chart number are presented as an
            indication to you that the balance you are shown may contain
            charges for other, related patients. Remember, while you
            enter charges and payments by patient, the computer
            maintains its records by billing chart.
            
            
            6.7 Initialize Prior Accounts
            
            When you first transfer your patient records to the
            computer, you need a method of setting up existing balances
            before you can take full advantage of the billing system.
            There are four fields on the screen for each of your current
            billing records.
            
            PATIENT CHART NUMBER: Enter the patient chart number here.
            If the patient record indicates that billings are to be
            consolidated on another statement, the computer will make
            that consolidation automatically. Note that even if you
            currently have separate statements but wish to consolidate
            them on your automated system, there is no need for you to
            pre-consolidate the accounts. As long as you have the 'BILL
            TO' fields completed on the patient records, the computer
            will make the consolidation automatically. Also, to help you
            understand just what will be done, the 'BILL TO' information
            is displayed along with the patient information while you
            are entering data.
            
            30 - 60 DAYS: Enter in this field amounts which are for the
            PREVIOUS month only. For example, if you were converting in
            the month of May, this field would contain unpaid amounts
            which were billed in April.
            
            60 - 90 DAYS: Enter amounts which were billed two months ago
            and remain unpaid. In the example given above of converting
            in May, this field would contain amounts which were billed
            in March.
            
            90 DAYS: Enter the amount in this field which remain unpaid
            from three months or longer (February and older in our
            example).
            
            Do not enter current months charges in any of these fields.
            All current months charges should be entered directly either
            through an insurance billing or via option 12 at the
            Accounts Receivable Menu so that proper descriptive billing
            can take place.
            
            Note that the [F1] key is indicated as 'cancel' at the
            bottom of this screen. If you discover that you have made a
            number of errors on the entry and need to start over, use
            this function key to exit the current entry without saving
            your work and without returning all the way to the menu.
            



                                       - 34 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            NOTE: Do NOT set up accounts which do not have outstanding
            balances. It is not necessary and just wastes computer
            storage space. Whenever you make an entry to an account
            which has not been set up in advance, the account is
            automatically opened on the Accounts Receivable masterfile
            when you post the entry. The account is also automatically
            removed at the end on the month when the balance is zero to
            help conserve space.
            
            
            6.8 Posting
            
            Whenever you enter charges, payments, or adjustments to a
            patient's account, the line items are placed in a
            transaction file where they are held by the computer. The
            transactions are NOT posted to the account file immediately
            because of the time required to look up all of the
            appropriate information. While this may only take a second
            or two, even this amount of time can be distracting to the
            operator faced with entering a large quantity of data.
            Consequently, we have chosen to make the data entry
            operation as fast as possible and let the computer do all of
            its lookups at one time while your office staff is doing
            something else.
            
            This suggests that you should probably run a daily posting
            cycle to update all charges and payments. If run daily, this
            should only take a minute or two. We recommend that you
            either post at the end of your day or at the beginning.
            However, you may post at a time that best fits your
            schedule.
            
            To post, first make certain that the printer is loaded with
            plain paper and is on-line so that the posting report can be
            produced as the computer posts. Then, simply select this
            option and let the computer do the work.
            
            All of the transactions are first sorted. This is primarily
            for reporting purposes so that all of a patient's entries
            will be together to aid in your review of the posting
            report. While the sort is taking place, the computer screen
            displays a 'SORTING' notation.
            
            PLEASE NOTE: The sort is particularly sensitive to
            experiencing problems with TSR programs. In all cases where
            clients have experienced sort problems, they had a TSR
            program running. So if you have any problems, get rid of
            those TSRs.
            
            When the sort has completed, a 'POSTING' notation is placed
            on the screen and a 'DO NOT DISTURB' sign is "hung up". As
            an extra precaution against anyone interrupting the posting
            process, the screen is turned red on a color monitor.
            



                                       - 35 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            As each transaction is processed, the transaction is listed
            on the ACCOUNTS RECEIVABLE POSTING REPORT. This report is in
            billing chart order and also lists the patient chart for
            reference. The type of transaction is indicated by CHG for
            charge, PMT for a payment, and ADJ for an adjustment amount.
            The customer's check number is listed next for payments and
            the procedure number is listed for charges. The procedure
            (or payment) date is listed next, followed by the billed
            amount (payment amount for payments). Finally, if the item
            was obtained from an insurance company billing, it is so
            indicated on the report.
            
            
            6.9 Close Period
            
            This option is selected at the completion of the billing
            cycle. Its purpose is to close out the period and get ready
            for the next cycle. You select this option AFTER you have
            completed all work, reports, statements, etc. for a billing
            cycle and before you begin the next cycle; normally once a
            month.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            6.10 Aging Report
            
            The aging report is selected after all transactions have
            been posted for the billing cycle and before the period is
            closed. It is at this time that the information is most
            accurate for aging purposes. That is, data in the OVER 30
            DAYS category is between one and two months old, etc.
            
            When the period is closed, the information is shifted one
            period and will then most appropriately represent what the
            status will become at the end of the cycle if the amounts
            are not paid during that cycle. This is still useful
            information and you may choose to run the report
            periodically during the cycle to see how your collections
            are coming along.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            
            6.11 Print Statements
            
            The statement print option will prepare your monthly
            statements using the information accumulated during the
            month. Make certain that your posting is up to date and then
            select the statement option.



                                       - 36 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            
            You will first be given an opportunity to align your forms
            in the printer to prepare for the run. You should always
            print at least one form in alignment mode to make sure that
            you are satisfied with the way the statements will be
            printed. If everything prints in the proper location, you
            may proceed on to the printing of the actual statements. If
            the forms are mis-aligned, correct them and print another
            alignment copy.
            
            Once statement printing begins, it will continue until all
            of the statements have been printed without any further
            intervention. However, no matter how careful the planning,
            things sometimes go wrong. If you experience any
            difficulties during your statement print run, please refer
            to the Statement Reprint function.
            
            If there are any missing charts that are required by the
            statement print program, a special report of these chart
            numbers will be produced at the completion of the run. These
            represent billings which the computer was not able to
            produce. Add the charts to your master file and then use the
            STATEMENT REPRINT option to print these statements -- BEFORE
            -- you close the period.
            
            
            6.12 Statement Reprint
            
            No matter how careful the planning, things sometimes go
            wrong. And this is never more true than during a long
            computer run. You may run out of forms and while you load
            new ones, a couple of statements are printed out of
            alignment. Or perhaps your ribbon breaks and several
            statements are printed before you recognize the problem. The
            statement reprint function was designed to help you resolve
            these kinds of problems.
            
            The screen presents you with the option of reprinting any
            group of statements by entering the beginning and ending
            billing chart number to be reprinted. If you do not enter a
            beginning number, statements will be reprinted from the
            beginning of the file. If you do not enter an ending chart
            number, statements will be reprinted to the end of the file.
            Therefore, simply pressing [ENTER] for both numbers will
            cause the entire file to be reprinted.
            
            
            6.13 Open Insurance Payments
            
            This is a report of insurance payments which are indicated
            as being open longer than some period of time. You may
            select any period of time in months and or days. If, for
            example, you select a period of two months and the current
            date is June 30, then any patient with an insurance billing



                                       - 37 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            made before April 30 with no insurance payments received
            since that time will be reported. Note that this will not
            report on any insurance billings made prior to installation
            of version 3.1 and that it is important to properly identify
            the source of payments.
            
            
            6.14 Return to Main Menu
            
            This function will return you to the main system menu. Once
            you return to the Main Menu, you will be required to re-
            enter the password to again access the Accounts Receivable
            functions. If you have instituted password protection for
            your system (i.e., if you have installed passwords beyond
            the 'PASSWORD' that was shipped with your system( you should
            be very careful to exit the Accounts Receivable menu when
            you are away from the computer for some time.
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            
            6.15 Accounts Receivable Index
            
                    *-----------------------------------------*
                    * THIS SECTION OMITTED IN EVALUATION COPY *
                    *-----------------------------------------*
            





























                                       - 38 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

            PLEASE NOTE:
            
            We do not know from where you obtained your copy of the
            system, upon what equipment you intend to install it, or how
            you intend to use it. You may even intend to use it for
            purposes other than that for which it was originally
            intended. Because we have no salesmen to verify your
            intended use or other control over your use and because you
            have the opportunity to freely evaluate the system before
            becoming a registered user, we must issue the following
            disclaimer...
            
            
            
                                     DISCLAIMER
            
            
            You assume full responsibility for the selection of this
            system of programs and for the installation, use, and
            results from this program.
            
            SureSoft makes no representation of fitness or warranties
            with respect to the programs or their contents and disclaims
            any implied warranties of merchantability or fitness for any
            particular purpose. The entire risk as to the quality and
            performance of the program is with you.
            
            In no event shall SureSoft or the Author be liable to you
            for any damages, including any lost profits, lost savings,
            lost opportunity costs or other incidental or consequential
            damages arising out of your use or inability to use this
            system of programs, even if the Author has been advised of
            such damages, or for any claim by any other party.
            























                                       - 39 -





                       PATIENT MANAGEMENT SYSTEM - USERS GUIDE
                           Copyright (c) by SureSoft, 1990

                                     ORDER FORM
             ----------------------------------------------------------
            J. D. Tucker
            SureSoft
            P.O. Box 2082
            Van Nuys, CA  91404
            
            
            Please register my use of the SureSoft Patient Management
            System, version 3.2, send me the printed set of
            documentation and your support telephone number, and notify
            me of the next upgrade. I understand that I am entitled to
            free upgrades for a period of one year with my registration.
            After my free year of support, you will offer me the
            opportunity to extend my support on an annual basis at a
            nominal cost. I may then choose to continue to obtain
            upgrades to keep my system current or I may decide to
            continue using the version of the system which I am then
            using.
            
            Also, if these is a more recent version of the system than
            the one I am registering, send me the diskettes for that
            version. I understand that I am entitled to the most recent
            version but, as I new registered user, I will not receive
            any automatic upgrade programs to convert from prior
            versions to the most current version.
            
            
            PMS v. 3.2 Registration. . . . . . . . . . . . $125.00
              (includes printed manual)
            
                                                          $
            6.75% California state sales tax . . . . . . . -------
            
                                                          $
            TOTAL  . . . . . . . . . . . . . . . . . . . . -------
            ******  Make Checks payable to J. D. Tucker
            
            Please indicate:
            
            5 1/4" diskettes: ______    3 1/2" diskettes: _____
            
            
            Name
                ---------------------------------------------
            Address
                   ------------------------------------------
            Address
                   ------------------------------------------
            City                         State      Zip
                -------------------------     ------   ------
            
            Daytime phone number (____) ____ - ________
               (in case there is a problem with your order)



                                       - 40 -


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1251

     Volume in drive A has no label
     Directory of A:\

    PMS      DOC    116366   3-09-90   2:11p
    PMS01005 EXE     62505   3-25-90   7:22p
    PMS01012 EXE     48187   5-02-90   7:22p
    PMS00002 EXE     41903   3-24-90   1:46p
    PMS03008 EXE     36981   3-24-90   3:10p
    PMS03009 EXE     43483   3-24-90   3:13p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   5-02-90   7:24p
    FILE1251 TXT      1260   6-01-90   2:57a
            9 file(s)     351340 bytes
                            5120 bytes free
