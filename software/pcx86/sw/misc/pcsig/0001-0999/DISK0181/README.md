---
layout: page
title: "PC-SIG Diskette Library (Disk #181)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0181/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0181"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEWKEY"

    NEWKEY keyboard enhancer simplifies the entry of common keystroke
    sequences by letting you assign these sequences to any key desired.
    Once assigned to a particular key, whenever that key is struck the
    predefined sequence of keystrokes are returned.  For example, the Alt-C
    key combination might be defined as ``copy'' and whenever you strike
    Alt-C, the string ``copy'' is displayed.
    
    NEWKEY lets you customize software packages, readily create boiler plate
    passages, redefine your keyboard, and perform other useful tasks. You
    can even redefine your keyboard to the DVORAK keyboard if you wish.
    Several sample key definition files are included.
    
    NEWKEY provides many features, including:
    
    ~ Ability to define almost any key
    
    ~ Menu macros
    
    ~ Display macros
    
    ~ Fixed-length pauses during key translation
    
    ~ Nested key translation
    
    ~ Translation bypass for native entry of defined key
    
    ~ Dynamic display of the macro directory
    
    ~ Dynamic display of macros
    
    ~ Full-featured macro editor
    
    ~ Easy change of any macro
    
    ~ Ability to copy/move one macro to another
    
    ~ Ability to move keyboard buffer into macro
    
    ~ Ability to load, merge, and save macro files from within other
    applications
    
    ~ Screen blanker
    
    ~ Dynamic modification of the control keys
    
    ~ Dynamic clear macros from memory
    
    ~ User-defined dynamic define area length
    
    ~ Time delay pauses during key translation
    
    ~ Ability to toggle NEWKEY on/off
    
    ~ Slow typing mode
    
    ~ 128 keystroke type-ahead buffer
    
    ~ Ability to speed up keyboard repetition rate
    
    ~ Improved macro definition facilities
    
    ~ And much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #181 NEWKEY  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type:                                       ║
║                    COPY NEWKEY.DOC PRN   (press enter)                  ║
║                    COPY README PRN       (press enter)                  ║
║                                                                         ║
║ To start the program, type: NEWKEY (press enter)                        ║
║                                                                         ║
║ To start the program demo, type: DEMO (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
(c)Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## NEWKEY.DOC

{% raw %}
```


    
    
    
    
    
    
    
    
    
    
    
    
    
                                   NEWKEY
                              EVALUATION GUIDE
    
                          A Keyboard Enhancer for
                         The IBM Personal Computer
    
                                Version 5.4
    
    
    
    
    
                   (C)Copyright Frank A. Bell, 1984-1990
                            All rights reserved.
    
                                 Frank Bell
                          Compuserve id 75206,1366
    
    
    
    
    
    
    
    
    FAB Software
    P.O. Box 336
    Wayland, MA 01778
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    
    COPYRIGHT
    
    Copyright (C) 1984-1990 by Frank A. Bell.  All rights reserved.  
    
    The Newkey 5.4 programs may be copied subject to the restrictions 
    listed in 'Permission to Copy'.  
    
    This documentation is designed to accompany the Newkey evaluation disk 
    and does not fully document Newkey and its features.  The latest 
    version of Newkey, a printed manual, plus other benefits come with 
    Newkey when ordered.  For further information refer to the section on 
    registration later in this documentation.  
    
    If any portion of the evaluation disk is missing, a complete 
    evaluation disk is available for $10.  Use the order form at the end 
    of this documentation.  Please do not send disks.  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    
    
    
                                TABLE OF CONTENTS
    
    
    NEWKEY INTRODUCTION.......................................... 1
    
    PRINTING THE NEWKEY MANUAL................................... 2
    
    TAKING A GUIDED TOUR OF NEWKEY............................... 3
    
    THE USER-SUPPORTED CONCEPT................................... 3
    
    USER-SUPPORTED SOFTWARE AND DISK VENDORS..................... 3
    
    RESTRICTED PERMISSION TO COPY................................ 4
    
    FILES ON THE NEWKEY DISK..................................... 5
    
    LIMITED WARRANTY............................................. 6
    
    REGISTRATION................................................. 7
    
    ORDER FORM................................................... 8
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                              NEWKEY INTRODUCTION
    
    We believe that at $43.00, $20 - $250 below comparable commercial 
    programs, Newkey is one of the great bargains on the market today.  
    How many high quality, useful software programs can be purchased for 
    $43?  We hope that after you have had a chance to try out Newkey for 
    yourself you agree and decide to become a reqistered user.  
    
    PURPOSE
    
    The Newkey keyboard enhancer simplifies the entry of common keystroke 
    sequences by allowing these sequences to be assigned to any key 
    desired.  Once assigned to a particular key, whenever that key is 
    struck the predefined sequence of keystrokes will be returned in place 
    of the struck key.  For example, the alt c key might be defined as 
    'copy' and whenever alt c is struck the string 'copy' will be 
    returned.  
    
    Newkey allows customization of software packages, ready creation of 
    boiler plate passages, help menus, keyboard redefinition, cursor speed 
    up, screen blanker, extended keyboard buffer, and other useful 
    purposes.  Several sample key definition files are included with 
    Newkey and will be described later.  
    
    Newkey 5.4 provides many features including:
    
    - Ability to define almost any key
    - Menu macros
    - Display macros
    - Fixed length pauses during key translation
    - Nested key translation
    - Translation bypass for native entry of defined key
    - Dynamic display of the macro directory
    - Dynamic display of macros
    - Full featured macro editor
      - Easily change any macro
      - Copy/Move one macro to another
      - Move keyboard buffer into macro
    - Load, merge and save macro files from within other applications
    - Shorthand mode, Newkey watches your keystrokes and when they
    match a macro name, automatically plays back the macro.  No
    special hot key to enter, no wasted keystrokes.
     - Date/time macro function, define your own date & time templates
    and let Newkey fill them in for you
    - Fast key option allows fast cursor movement and key repetition
    - Use Newkey's pop-up features in graphics mode
    - Compatible with new IBM's new 'enhanced keyboard'
    - Guard macros from accidental deletion
    - Inactivate macros
    - Save/load file overwrite warning messages
    - Disk wait during macro playback
    - Screen on/off macro function
    - Enhanced compatibility with other programs
    - Suppress Newkey created keycodes which collide with other program
    - Keyboard click
    - Beep during macro definition
    - Cursor change during macro definition/playback made optional


    - Customize Newkey's menu colors
    - Screen blanker works with EGA
    - Dynamic modification of the control keys
    - Dynamic clear macros from memory
    - User defined dynamic define area length
    - Time delay pauses during key translation
    - Toggle Newkey on/off
    - Slow typing mode
    - Cancel Newkey processing at any time during playback or definition
    - Macro may call itself
    - Screen saver feature to blank screen after period of inactivity
    - Ability to define a macro within a macro
    - Multi-character macro names
    - Improved screen saver that works with most hardware and software
    - Macro descriptions
    - 128 keystroke typeahead buffer
    - Speed up keyboard repetition rate
    - Improved macro definition facilities, including
    
       - Defining status line
       - Macro already defined warning message
       - Defining alphabetic character warning message
       - Display/execute macro commands from menus as well as
         from control keys
       - Macro definition window
    
    - Call Newkey from its own macros
    - Cut & paste
    - Support for DOS 2.0 path names
    - and many more
    
    Newkeysp 5.4, the Newkey support program, provides many functions 
    including: 
    
    - Saving macros to disk from memory
    - Loading macros from disk to memory
    - Merging macros from disk to memory
    - Directory display of keys with translations
    - Individual display of key translations
    - Easy modification of Newkey control keys
    - Clear macros from memory
    - Toggle Newkey on/off
    - Execute macros from a batch file
    - Unload and reclaim memory under DOS 2.0
    - Be called from Newkey macros
    - Display macros and their descriptions
    
                     PRINTING THE NEWKEY MANUAL
    
    If you wish you may print the full Newkey manual (assuming it's on 
    your disk, which it may not be) by issuing the following command: 
          copy newkey.man lpt1
    The manual is about 100 pages long.
    
    
    
    


                     TAKING A GUIDED TOUR OF NEWKEY
    
    The guided tour demonstrates many of Newkey 5.4's major features and 
    uses Newkey macros extensively.  To start the guided tour type 'demo' 
    at the DOS command prompt and press enter.  The demo will load Newkey, 
    load the demo.key macro file, and start the tour.  
    
                         THE USER-SUPPORTED CONCEPT
    
                         User-supported Software
    
    User-supported software (also known as "shareware") is an experiment 
    in distributing computer programs based on these beliefs: 
    
    1.  That the value and utility of software is best assessed by the 
        user on his/her own system.  
    
    2.  That the creation of personal computer software can and should be 
        supported by the computing community.  
    
    3.  That copying of programs should be encouraged, rather than 
        restricted.  
    
    Anyone may legally obtain an evaluation copy of the program from a 
    friend or computer club.  After you have had a chance to use and 
    evaluate the program in your own environment, you are trusted to 
    either forward a payment to FAB Software or to discontinue use of the 
    program.  
    
    Free distribution of software eliminates costs for advertising and 
    copy protection schemes.  Users obtain quality software at greatly 
    reduced cost.  They can try it out before buying, and do so at their 
    own pace and in the comfort of their own home or office.  The best 
    programs will survive, based purely on their quality and usefulness.  
    
    
                  USER-SUPPORTED SOFTWARE AND DISK VENDORS
    
    With an acknowledgement to Eric Isaacson, author of A86, on whose 
    documentation this next question and answer is based, we offer this to 
    those of you who have purchased Newkey from a disk vendor.  
    
    QUESTION:  "I bought this macro processor from XYZ software House, 
    that advertised great software for $5 per disk.  What's going on here?  
    Have I already bought a macro processor, or what?" 
    
    ANSWER:  Well, no, not exactly.  You've bought a disk that has great 
    software on it; you haven't bought the software yet.  Newkey, like the 
    vast majority of software offered by the $5 per disk distribution 
    houses, is free-distribution software, also known as "shareware", or 
    "user-supported software".  That means I retain the right to Newkey, 
    but I choose to let people pass it around.  I have no business 
    relationship with any distribution houses.  I don't get a penny of the 
    $5 (or whatever) you paid them for the disk containing Newkey.  So I 
    need and expect to be paid by you, because I'm trying to make a living 
    out of making and supporting shareware products.  
    


    Many distribution houses do a poor job of revealing the shareware 
    nature of the software they sell.  If you thought you had purchased 
    the software free and clear, you might feel justified in being angry 
    with them for having misled you.  And you might look around for houses 
    that do a better job of informing the public.  But I hope you'll take 
    the time to consider everybody's role in the shareware marketing 
    scheme.  If you do, I think you'll conclude that although you may have 
    been misled, you haven't really been cheated out of anything.  
    
    Shareware is great for authors like me who haven't got the resources 
    to run expensive ad campaigns.  We simply cast our programs to the 
    winds.  They are distributed at pracically no cost to us.  That's why 
    we can charge a lot less than the cost of "commercial" software.  
    
    Shareware is also great for customers like you.  You can try out the 
    software before paying for it.  You'll know that a successful 
    shareware product is good, because only satisfied customers pay for 
    it.  The existence of shareware infuses healthy competition in the 
    entire software market, for both price and quality.  
    
    Finally, let's consider the distribution houses.  They provide a 
    legitimate service, for which they charge a reasonable price. The best 
    houses act as librarians, evaluating and cataloguing software.  Most 
    pay thousands of dollars for advertising. Their cut is far less than 
    the distributor's cut for "commercial" software (they prosper because 
    their volume is bigger).  Most customers for the distribution houses 
    are repeat customers, who are aware of, and happy with, what they are 
    getting.  If it weren't for your XYZ House, you might never have heard 
    of Newkey, or might never have figured out where to obtain it.  
    
    So I hope you'll be happy with shareware, and actively desire to 
    support it.  You'll feel good about promoting a healthy situation for 
    everybody.  And you'll encourage the best programmers in the world to 
    keep writing for you, instead of for the big corporations.  
    
    
                 RESTRICTED PERMISSION TO COPY
    
    What May be Copied
    
    All files on the Newkey disk may be copied.
    
    Rules For Copying 
    
    Individuals are granted permission to freely copy the Newkey disk for 
    their own evaluation or for others to evaluate, so long as no price or 
    other consideration is charged.  
    
    Computer clubs and other non-profit organizations are granted 
    permission to freely copy the Newkey disk and share it with their 
    members for the purposes of evaluation, so long as: 
    
    1.  No price or other consideration is charged.  However, a 
    distribution cost may be charged for the  cost of the diskette, so 
    long as it is not more than US $10 total.  This includes shipping, 
    handling, and all other charges.  
    


    2.  Club members who receive the programs are informed in writing of 
    the user-supported concept and encouraged to support it with their 
    payments.  
    
    3.  The programs and documentation are not modified in any way and are 
    distributed together.  
    
    4.  The Newkey disk may not be packaged together with any other 
    programs or materials.  It may not be bundled and sold as part of some 
    other more inclusive package.  
    
    5.  The programs may not be "rented" to others.
    
    6.  The printed manual is not copied or reproduced in any way.
    
    Companies, schools, universities, government, and other organizations 
    are granted permission to copy the Newkey programs for use on other 
    computers and at other locations in the company, so long as: 
    
    1.  The full registration fee of $43 has been paid for each and every 
    system on which the program will be used.  
    
    2.  The printed manual is not copied or reproduced in any way.
    
    Corporate licenses and volume discounts are available upon request.  
    
                       FILES ON THE NEWKEY DISK
    
    The following files should be on the Newkey evaluation disk.  If any 
    are missing on the copy you have, a complete evaluation copy may be 
    obtained from FAB Software for $10.  Use the order form at the end of 
    this documentation.  Please do not send disks.  
    
    DEMO.BAT - This is a batch file which will give you a demonstration of 
    Newkey.  It requires 192k of memory.  
    
    DEMO.KEY - Macro file containing Newkey tour.
    
    DVORAK.KEY - Macro file to redefine keyboard under Dvorak layout.
    
    EXAMPLE.BAT - Examples of NEWKEYSP usage.
    
    EXAMPLE.KEY - Examples of newkey macros.
    
    NEWKEY.DOC - Documentation which will introduce unregistered users to 
    Newkey.  To print it, "copy Newkey.doc lpt1".  
    
    NEWKEY.EXE - This is the program which actually replaces IBM's 
    keyboard interrupts (x'9' and x'16').  This program remains resident 
    while other programs execute and unless called upon to translate will 
    be transparent.  
    
    NEWKEY.MAN - This is the complete Newkey manual.  It is approximately 
    100 pages long and may be printed by issuing the following command: 
     copy newkey.man lpt1
    
    *** NOTE, due to space considerations, the manual is not on the disk 


    registered user's receive, thus it may not be on your disk if you 
    received it from a registered user.  
    
    NEWKEYSM.EXE - This is the small version of Newkey.exe.  It is 
    identical to the regular version, except that it lacks the pop-up 
    features and takes about 25K less memory.  *** NOTE, due to space 
    considerations this version may not be on your distribution disk.  It 
    is supported and will be on the disk you receive when you register.  
    
    NEWKEYSP.EXE - This program provides several functions necessary to 
    effectively use Newkey.  
    
    NEWKEYVS.EXE - This is the very small version of Newkey.exe.  It is 
    identical to the regular version, except that it lacks the pop-up 
    features and several other features.  It takes substantially less 
    memory.  *** NOTE, due to space considerations this version may not be 
    on your distribution disk.  It is supported and will be on the disk 
    you receive when you register.  
    
    README - Latest information on Newkey
    
    VENDOR.DOC - Distribution information for disk vendors.
    
                             LIMITED WARRANTY
    
    These programs are provided "as is" without warranty of any kind, 
    either expressed or implied, including, but not limited to the implied 
    warranties of merchantability and fitness for a particular purpose.  
    The entire risk as to the quality and performance fo the program is 
    with you.  Should the program prove defective, you (and not FAB 
    Software or its dealers) assume the entire cost of all necessary 
    servicing, repair or correction.  
    
    In no event will the FAB Software be liable to you for any damages, 
    including any lost profits, lost savings or other incidental or 
    consequential damages arising out of the use of or inability to use 
    these programs, even if the FAB Software has been advised of the 
    possibility of such damages, or for any claim by any other party.  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                                REGISTRATION
    
    To register as an official Newkey user complete the order form on the 
    next page and send to FAB Software.  As a registered user you will 
    receive: 
    
       - The latest version of Newkey
       - A version which does not display the evaluation notice screen.
       - A printed manual (92 pages, tips on use, index)
       - Telephone and written support
       - Notification of new versions
    
                                    PLUS
          
            *** A FREE INTRODUCTORY MEMBERSHIP ON COMPUSERVE ***
          
    As a FAB Software customer you will be entitled to a free introductory 
    membership to CompuServe!  Upon registration you will receive 
    information on how to order your free membership which includes: 
          
    - A private User ID number and password
    - $15.00 Introductory usage credit (over 1 hr of connect time on a 
      1200-baud modem)
    - A complimentary subscription to ONLINE TODAY, Compuserve's computing 
      magazine, published monthly 
          
    Best of all there is no annual fee or minimum monthly charge, you pay 
    only for the time you use.  Discontinue at any time.  
         
    As a member of CompuServe Information Service you will be able to tap 
    into hundreds of information resources, including personal computer 
    forums, electronic mail service with CompuServe subscribers around the 
    world, financial data, and much, much more.  
          
    Use CompuServe to get in touch with the author of DvorakKB via 
    electronic mail (CIS ID:  75206,1366) with your questions, comments, 
    and suggestions.  
          
    This offer is limited to first time CompuServe subscribers.  One per 
    customer.  This is a limited-time offer and may be withdrawn at any 
    time without prior notice.  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                                ORDER FORM
    
    FAB Software                     FED ID# 04-2861400
    P.O. Box 336                     (508) 358-6357
    Wayland, MA 01778
    ---------------------------------------------------------------
                                             PRICE       PRICE
    PRODUCT                         QTY      EACH       EXTENDED
    -----------------------------   ---      -----      --------
    Newkey 5.4
      Quantity   1 to  5            ___      $43.00     $_______
      Quantity   6 to  9            ___      $34.40     $_______
      Quantity  10 to 49            ___      $32.25     $_______
      Quantity  50 to 99            ___      $30.10     $_______
      Quantity 100+                 ___      $27.95     $_______
    
    Newkey Labels (see next page for description, must 
      be accompanied by purchase of full registered version)
      Quantity  10 to  24           ___      $14.00     $_______
      Quantity  25 to  99           ___      $12.50     $_______
      Quantity 100 to 249           ___      $11.00     $_______
      Quantity 250 to 499           ___      $ 9.00     $_______
      Quantity 500 to 999           ___      $ 7.00     $_______
      Quantity 1000+                ___      $ 5.00     $_______
    
    Newkey Evaluation disk          ___      $10.00     $_______
    
    Purchase Order (invoice required)         $7.00     $_______
    
    Foreign orders, except Canada, add(*)     $7.00     $_______
    
                                            SUBTOTAL    $_______
    
    Massachusetts sales tax (5%) (MA residents only)    $_______
    
                                             TOTAL      $_______
    
    Name: _________________________________Phone:________________
    
    Address:_____________________________________________________
    
    Address: ____________________________________________________
    
    City, State, Zip: ___________________________________________
    
    Where did you learn about Newkey?____________________________
    
    Visa [ ]  MasterCard [ ]  Check [ ] (U. S. funds)
    Card# ______________________________________
    Expiration Date ____________________________
    Signature __________________________________
    
    Prices subject to change without notice.
    
    * Foreign orders paid by check must be in US $ and drawn through a US 
    bank or through the US branch of a foreign bank.  
    


                               NEWKEY LABELS
    
    Newkey labels are the disk labels that normally come on the Newkey 
    disk.  Each label confers the same rights to use the Newkey program 
    that purchasing the full Newkey package does subject to the following 
    restrictions: 
    
    - Labels do NOT confer the right to copy the Newkey manual or other 
    printed documentation that may be distributed with the registered 
    version.  
    
    - All support for users of the labeled versions must be made through 
    users of the fully registered version.  Users of the labeled versions 
    are not entitled to support from FAB Software.  
    
    PURCHASES OF LABELS MUST BE MADE BY PREVIOUSLY REGISTERED USERS OR BE 
    ACCOMPANIED BY THE PURCHASE OF ONE FULL REGISTERED VERSION.  
    
    The minimum order quantity for labels is 10.  
    
    The purchaser is responsible for making his own Newkey disk and 
    attaching the label to it.  If the purchaser does not wish to 
    physically attach the label to the disk on which Newkey is 
    distributed, then it may be placed on any accompanying documentation 
    (perhaps on the rear cover of the DOS manual, for example).  Any 
    reasonable method which effectively uses a Newkey label for each copy 
    distributed may be used.  
    
    Labels are intended to be used in a value added manner.  Usually this 
    means that it is not even necessary that the user realize that Newkey 
    is present.  The user just knows that when a certain key is pressed, a 
    certain action will occur.  In this manner, Newkey can be used to 
    automate command sequences, build help menus, and in general to build 
    a more friendly, easy-to-use interface to the underlying software 
    system being provided to the user.  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0181

     Volume in drive A has no label
     Directory of A:\

    NEWKEY   MAN    152208   1-15-89   4:04p
    DEMO     BAT       526  11-09-88   8:55p
    DEMO     KEY     18181  11-27-88   9:29p
    DVORAK   KEY      1930  11-09-88   8:58p
    EXAMPLE  KEY     12701  10-27-90   7:17p
    EXAMPLE  BAT      1445   1-24-89  10:58p
    LOADNEW  BAT       312   7-01-90   4:05p
    NEWKEY   EXE     64862  12-08-90   3:43p
    NEWKEY   DOC     24739  10-27-90   8:13p
    NEWKEYSP EXE     44206  12-08-90   3:44p
    ORDER    FRM      4355  10-27-90   8:14p
    README           16729  10-27-90   7:12p
    MENU     KEY       928   8-30-88   9:40a
    GO       BAT        38   8-03-87   2:24p
    GO       TXT       882   1-01-80   3:18a
           15 file(s)     344042 bytes
                           10240 bytes free
