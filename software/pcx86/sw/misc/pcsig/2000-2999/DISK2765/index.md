---
layout: page
title: "PC-SIG Diskette Library (Disk #2765)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2765/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2765"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2765.TXT

{% raw %}
```
Disk No: 2765
Disk Title: Mine Field
PC-SIG Version: S1

Program Title: Mine Field
Author Version: 1.00
Author Registration: $15.00
Special Requirements: 400K RAM, VGA, and a mouse.

MINE FIELD is a graphical game of logic, deduction and maybe a little
luck.  Mark all of the mines in a minefield so your troops can make it
through safely.  Mark all of the bombs or uncover all of the safe tiles
and the game is over.

Some of the features of MINE FIELD include:

~ Superb VGA graphics

~ Mouse support

~ 15 different boards to choose from

~ User-selected number of mines

~ On-line rules

~ Sound toggle

~ 640 x 480, 16-color VGA resolution

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## MF.DOC

{% raw %}
```




                         M I N E   F I E L D
                         -------------------


                             Version 1.00
                             ------------


                    Written by:  Charles A. Hardy
                            Member of the
                Association of Shareware Professionals


             Copyright 1990-1991 Expert Source Code, Inc.
                         All Rights Reserved.



              P R O G R A M   D O C U M E N T A T I O N
              -----------------------------------------


                      Last updated:  May, 1991




    +-----------------------------------------------------------+
    |                     Table of Contents                     |
    +-----------------------------------------------------------+

         Program Requirements. . . . . . . . . . . . . . .  2
         Program Description . . . . . . . . . . . . . . .  2
         Packing List. . . . . . . . . . . . . . . . . . .  3
         Release and Update History. . . . . . . . . . . .  4
         Other Expert Source Code, Inc. Shareware. . . . .  4
         Shareware Concept . . . . . . . . . . . . . . . .  6
         Program Registration. . . . . . . . . . . . . . .  7
         Product Support . . . . . . . . . . . . . . . . .  8
         ESC BBS . . . . . . . . . . . . . . . . . . . . .  8
         Author/Publisher Information. . . . . . . . . . .  9
         Association of Shareware Professionals (ASP). . .  9
         ASP Ombudsman Statement . . . . . . . . . . . . . 11
         Programming Tools . . . . . . . . . . . . . . . . 11
         Trial Use License . . . . . . . . . . . . . . . . 11
         Shareware Version Distribution License. . . . . . 12
         Trial Use (Shareware Version) Warranty. . . . . . 14
         Registered Version ONLY Warranty. . . . . . . . . 15
         Applying for ASP Membership . . . . . . . . . . . 15
         How to Contact Expert Source Code, Inc. . . . . . 16




  Mine Field Documentation                          Page 1 of 16



                        =====================
                        Program Requirements:
                        =====================

    Mine Field runs in 640 X 480 X 16 VGA graphics mode.  It
    requires about 350K of disk space and about 400K of free
    memory (RAM).  Mind Field also requires a mouse for program
    interaction.  The delay at the beginning of the program is
    necessary to load all of the pictures that this program uses.

    NOTE:  Because of the intensive disk access of this program
           when loading the graphics files (Especially during the
           introduction) it is recommended that you run it from a
           hard disk.  This will drastically cut the delay at the
           beginning of the program.


                         ====================
                         Program Description:
                         ====================

    Mine Field is a graphical game of logic and deduction.  Your
    job is to mark all of the mines in a mine field so that your
    troups can make it through safely.  There are 15 differect
    board to choose from and you can select how many bombs to put
    on each board.  The games begins with a board of raised tiles.
    Your then have to click on a tile and hope there isn't a mine
    under it.  If you don't get blown up the tile removes itself to
    reveal either a blank space or a number.  A blank space means
    that there are no bombs in the 8 surrounding squares and the
    computer will automaticly uncover those squares for you until
    it reaches a square with a number.  A numbered square means that
    there are that number of bombs in the surrounding 8 tiles.

    You have to figure out where all of the bombs are and mark them
    by clicking on them with the right button.  This turns the tile
    red and prevents you from uncovering it with the left button.  If
    you change your mind about weather or not there is a bomb under
    a red tile then you can click on it again with the right button
    and it will turn back to a normal square and you will then be able
    to uncover that tile with the left button.

    The game is over when you mark all of the bombs or when you uncover
    all of the safe tiles.

    Some of the features of Mine Field include:

      *  Superb VGA graphics.

      *  Mouse support.




  Mine Field Documentation                          Page 2 of 16



      *  15 different Board to choose from.

      *  User selected number of Mines.

      *  On-line rules.

      *  Sound Toggle.


                             =============
                             Packing List:
                             =============

    The complete Mine Field Shareware package should contain
    the following files.  Please ensure that each file is
    present.  If any of these files are missing then the
    package is not complete and is not suitable for distribution
    to others.  The complete package may be obtained directly
    from Expert Source Code, Inc. or by downloading from ESC BBS.

     File Name                   Description of File
    -----------    ----------------------------------------------
    MF.EXE       - The Mine Field executable program file.

    MF.GXL       - The Mind Field graphics library.

    MF.DOC      -  The Mind Field documentation file.

    REGISTER.FRM - The Mind Field registration form.


                     ===========================
                     Release and Update History:
                     ===========================

    1.00 - Initial release.


















  Mine Field Documentation                          Page 3 of 16


              =========================================
              Other Expert Source Code, Inc. Shareware:
              =========================================

    AGGRESSION - Written by:  Thomas B. Hardy (ASP)
         Aggression is a board game that combines some of the
         aspects of checkers and backgammon.  The object is to
         get all of your pieces from their starting side to the
         opposite side before your opponent does.  One or two
         players.  EGA and a Mouse are required.

    APPLES & ORANGES - Written by:  Charles A. Hardy (ASP)
         Apples & Oranges is an Othello style strategy board
         game.  It can be played by either 1 or 2 players.  The
         object of the game is to capture as many of your
         opponents pieces as possible.  One or two players.  EGA
         and a Mouse are required.

    DRAW POKER - Written by:  Charles A. Hardy (ASP)
         Draw Poker is like a cross between a slot machine and
         Poker.  You make your bet, replace any unwanted cards
         and collect your winnings.  This is a single player
         game and includes a TOP 10 list.  VGA and a Mouse
         are required.

    EXPERT TOOLS - Written by:  Thomas B. Hardy (ASP)
         Expert Tools are the utilities that Norton forgot.
         Containing over a dozen utilities these tools can be
         used from the command line or from the included shell
         program.

    FLORIDA LOTTERY - Written by:  Charles A. Hardy (ASP)
         Florida Lottery is a number picker/tracker for Florida's
         lottery games.  It covers CA$H 3, FANTASY 5 and LOTTO
         games.  Florida Lottery also includes complete history
         files for the FANTASY 5 and LOTTO games.  The program
         supports either EGA graphics or ASCII color graphics.
         Either a color monitor or EGA graphics is required.

    MASTER MIND - Written by:  Charles A. Hardy (ASP)
         Master Mind is a game of logic and deduction.  The object
         of the game is to guess which pieces of fruit go in which
         position.  The setup screen lets you choose to guess at
         5 to 7 position from 5 to 9 pieces of fruit (with or
         without multiple pieces of the same kind of fruit) with
         three levels of reporting.  This is a single player game.
         VGA and a Mouse are required.








  Mine Field Documentation                          Page 4 of 16



    MATCH'EM - Written by:  Charles A. Hardy (ASP)
         Match'em is an concentration style memory game.  The
         game is played on an 8 X 8 grid of raised buttons.
         Inside of each button is a picture.  The object of the
         game is to try to select two (2) buttons with alike
         pictures for a match.  One or two players.  EGA and a
         Mouse are required.

    MINE FIELD - Written by:  Charles A. Hardy (ASP)
         Mine Field is graphical game of logic and deduction.
         The object of the game is to mark all of the mines in
         the enemy mine field so that your troups can get
         through.  There are 15 different board styles to choose
         from and a user selected number of bombs in each field.
         VGA and a Mouse are required.

    SUPER MAXIT - Written by:  Joe M. Paris (ASP)
         Super Maxit is a graphical version of the classic MAXIT
         strategy board game with a few twists.  There are
         several board shapes that the user can choose from.  One
         or two players.  EGA is required.

































  Mine Field Documentation                          Page 5 of 16



                          ==================
                          Shareware Concept:
                          ==================

    If you are familiar with the idea behind Shareware, then you
    know that Shareware is the ultimate in money back guarantees.

    Most money back guarantees work like this:  You pay for the
    product and them have some period of time to try it out and
    see whether of not you like it.  If you don't like it or find
    that it doesn't do what you need, you return it (undamaged)
    and at some point - which might take months - you get your
    money back.  Some software companies won't even let you try
    their product!  In order to qualify for a refund, the
    diskette envelope must have an unbroken seal.  With these
    "licensing" agreements, you only qualify for your money back
    if you haven't tried the product.  How absurd!

    Shareware is very different.  With Shareware you get to try
    it for a limited time, without spending a penny.  If you
    decide not to continue using it, you throw it away and forget
    all about it.  No paperwork, phone calls, or correspondence
    to waste your valuable time.

    Software authors who use the Shareware method of distribution
    feel that Shareware is the best way to try a product.  You
    are able to try it on your own system(s), in your own special
    environment, with no sales people looking over your shoulder.
    Have you ever purchased a car and realized that if you could
    have test driven it for 2 weeks your purchase decision might
    have been different?  With Shareware these problems can be
    avoided - you DO have a 2 week test-drive!

    After trying a Shareware product and deciding to continue to
    use it, then - and only then - do you pay for it.  not only
    that, but Shareware is traditionally MUCH less expensive
    simply because you are paying for the software, not the
    advertising and marketing that comprises that majority of the
    cost of most software (a one page ad in PC Magazine, one
    time, can cost upwards of $20,000).  If the try-before-you-
    buy concept sounds like an ideal way to make your purchase
    decisions, you're right!

    Some companies burden their products with annoying copy
    protection schemes because they don't trust their users.
    Shareware developers not only don't use copy protection, they
    freely distribute their products because they DO trust their
    users.

    Someone once said that you should never trust software that
    doesn't trust you.  This makes a lot of sense - no wonder
    Shareware is becoming so popular among users and developers.


  Mine Field Documentation                          Page 6 of 16



    Shareware is a distribution method, NOT a type of software.
    Shareware is produced by accomplished programmers, just like
    retail software.  There is good and bad Shareware, just as
    there is good and bad retail software.  The primary
    difference between Shareware and retail software is that with
    Shareware you know if it's good or bad BEFORE you pay for it.
    Registration of Shareware products, in addition to being
    required, is also an incentive for programmers to continue to
    produce quality software for the Shareware market.

    There is another significant advantage to Shareware - it
    allows small companies like Expert Source Code, Inc. to make
    software available without the hundreds of thousands of
    dollars in expenses that it takes to launch a traditional
    retail software product.  There are many programs on the
    market today which would never have become available without
    the Shareware marketing method.  Please show your support for
    Shareware by registering those programs you actually use and
    by passing them on to others.  Thank you for your support!


                        =====================
                        Program Registration:
                        =====================

    Mine Field is marketed under the Shareware concept (for a more
    detailed description of Shareware see above).  You are free
    to use this program for a trial period of two weeks.  If
    you continue to use this program after the trial period you
    are required to register it.  The program is registered by
    mailing in the registration form (printed from the program or
    printed from the file REGISTER.FRM) with the appropriate
    fees.

    Credit Card users may also register by calling the ESC BBS
    (See descritpion below) at 407/699-8258 and typing "OPEN 2"
    at the main menu prompt or by E-Mailing us a completed regis-
    tration form.

          ESC BBS (9600 Courier HST) - 407/699-8258
                   CompuServe - 72711,2035
                      Prodigy - FGTD17A
                       GEnie - C.HARDY7
                       Delphi - ESCINC

    Registered users of Mine Field will receive the following
    benefits:

      *  A registered copy of the latest version of Mine Field.

      *  Product support as described below.



  Mine Field Documentation                          Page 7 of 16



      *  Free upgrades (cost only).  If you see a latter version
         of Mine Field and you would like your registered copy
         upgraded to that version just contact us and we will
         update your copy for only what it costs us for the disk
         and shipping ($5.00).


                           ================
                           Product Support:
                           ================

    Support for all of Expert Source Code, Inc. Shareware
    products is available in the following forms:

      *  By calling the ESC BBS (The support BBS for Expert
         Source Code, Inc.) at (407) 699-8258 (1200/2400/9600
         Courier HST - 24 hours a day) and leaving a (C)omment to
         the SYSOP.

      *  Via E-Mail to:  CompuServe - 72711,2035
                            Prodigy - FGTD17A
                             GEnie - C.HARDY7
                             Delphi - ESCINC

      *  By U.S. Mail to:   Expert Source Code, Inc.
                            P. O. Box 180519
                            Casselberry, FL  32718-0519


                               ========
                               ESC BBS:
                               ========

    ESC BBS is the Expert Source Code, Inc. support BBS.  In
    addition to it's normal BBS services ESC BBS offers free
    support and order processing for all of Expert Source Code,
    Inc. Shareware.  ESC BBS also has all of the latest version
    of Expert Source Code, Inc. Shareware products for free
    downloading (not including long distance telephone charges
    of course).  You can also register Expert Source Code, Inc.
    products on-line by typing "OPEN 2" at the main menu prompt.

    ESC BBS operates a 1200/2400/9600 Courier HST modem 24 hours
    a day and can be reached at (407) 699-8258.

    Complete access to all of ESC BBS features is free just for
    answering the questions the first time you sign on.







  Mine Field Documentation                          Page 8 of 16


                    =============================
                    Author/Publisher Information:
                    =============================

    Expert Source Code, Inc. is a small software company owned
    and operated by its three resident programmers.  At Expert
    Source Code, Inc. we believe that the primary purpose of our
    business is service, not profit,  This concept is fundamental
    to our approach to product development, production and
    marketing.  All of Expert Source Code, Inc. authors are
    members of the Association of Shareware Professionals (ASP).

    Please feel free to contact us at any time if you have any
    questions, comments or suggestions.  We can be reached by the
    following methods:

      *  U.S. Mail to:  Expert Source Code, Inc.
                        P. O. Box 180519
                        Casselberry, FL  32718-0519

      *  E-Mail to:   CompuServe - 72711,2035
                            Prodigy - FGTD17A
                             GEnie - C.HARDY7
                             Delphi - ESCINC

      *  ESC BBS (The home of Expert Source Code, Inc.) at
         (407) 699-8258 (1200/2400/9600 Courier HST - 24
         hours a day.

            =============================================
            Association of Shareware Professionals (ASP):
            =============================================

                         _______
                    ____|__     |               (tm)
                 --|       |    |-------------------
                   |   ____|__  |  Association of
                   |  |       |_|  Shareware
                   |__|   o   |    Professionals
                 -----|   |   |---------------------
                      |___|___|    MEMBER

    In the early days of Shareware there were no real standards.
    Independent authors had no efficient way to learn from each
    other or to work together to improve the overall image of
    Shareware.  There was no system in place th ensure that users
    were treated fairly and professionally.   There was no way
    for users to find an address for an author who had moved.  In
    short, the Shareware community was disorganized and each
    author did things the way he or she thought was best.  It was
    clear that if Shareware was ever to become a viable and
    respected marketing alternative, there had to bo some stan-
    dardication.  There had to be some guidelines to best serve
    the users.

  Mine Field Documentation                          Page 9 of 16



    In 1987 a handful of Shareware authors founded the Associa-
    tion of Shareware Professionals (ASP).  In forming this
    industry association these Shareware authors had several
    primary goals in mind, including:

      *  To inform users about Shareware programs and about
         Shareware as a method of distributing and marketing
         software.

      *  To foster a high degree of professionalism among
         Shareware authors by setting programming, marketing,
         support standards for ASP members to follow.

      *  To encourage broader distribution of Shareware through
         user groups and disk dealers who agree to identify and
         explain the nature of Shareware.

      *  To assist members in marketing their software.

      *  To provide a forum through which ASP members may
         communicate, share ideas, and learn from each other.


    The newly formed Association of Shareware Professionals
    worked together to draft a code of ethics for all present
    and future members.  This code of ethics included several
    requirements that soon became very popular among users
    (customers), including:


      *  A member's program (evaluation version) could not be
         limited (crippled) in any way.  In the true spirit of
         Try-Before-You-Buy, users must be able to evaluate all
         the features in a program before paying the registration
         fee.

      *  Members must respond to every registration.  At the very
         least they must send a receipt for the payment.

      *  Members must provide technical support for their
         products for at least 90 days from the date of
         registration.

    A new system was put in place to help ensure that users were
    treated fairly and professionally.  If a user was unable to
    resolve a problem with a member author them the user could
    contact the ASP Ombudsman with their complaint.  The
    Ombudsman would then try to help resolve the dispute.  for
    more complete details reguarding the Ombudsman, please refer
    to the "ASP Ombudsman Statement" below.




  Mine Field Documentation                          Page 10 of 16


                       ========================
                       ASP Ombudsman Statement:
                       ========================

    This program is produced by a member of the Association of
    Shareware Professionals (ASP).  ASP wants to make sure that the
    shareware principle works for you.  If you are unable to resolve
    a shareware-related problem with an ASP member by contacting the
    member directly, ASP may be able to help.  The ASP Ombudsman can
    help you resolve a dispute or problem with an ASP member, but
    does not provide technical support for members' products.

    Please write to the ASP Ombudsman at:

            ASP Ombudsman
            545 Grover Road
            Muskegon, MI  49442-9427
            U.S.A.

    or send a CompuServe message via CompuServe MAIL to ASP Ombudsman
    70007,3536.


                          ==================
                          Programming Tools:
                          ==================

    Mine Field was written using the following software tools:

      *  Turbo Pacsal 6.0 by Borland International.

      *  Expert Software Tools by Expert Source Code, Inc.

      *  TechnoJock's Turbo Toolkit by TechnoJock Software, Inc.

      *  GX Development Kit by GENUS Microprogramming.



                          ==================
                          TRIAL USE LICENSE:
                          ==================

    Mine Field is NOT a public domain program.  It is
    Copyright 1990-1991 by Expert Source Code, Inc.  All
    rights reserved.

    This software and accompanying documentation are protected by
    United States Copyright law and also by International Treaty
    provisions.  Any use of this software in violation of
    Copyright law or the terms of this limited license will be
    prosecuted to the best of our ability.  The conditions under
    which you may copy this software and documentation are
    clearly outlined below.

  Mine Field Documentation                          Page 11 of 16



    Expert Source Code, Inc. hereby grants you a limited license
    to use this software for evaluation purposes for a period not
    to exceed two weeks.  If you intend to continue using this
    software (and/or it's documentation) after the two week
    evaluation period, you MUST make a registration payment to
    Expert Source Code, Inc.

    Using this software after the two week evaluation period,
    without registering the software is a violation of the terms
    of this limited license.

    Licensee shall not use, copy, rent, lease, sell, modify,
    decompile, disassemble, otherwise reverse engineer, or
    transfer the licensed program except as provided in this
    agreement.  Any such unauthorized use shall result in
    immediate and automatic termination of this license.

    All rights not expressly granted here are reserved to Expert
    Source Code, Inc.

              =======================================
              Shareware Version Distribution License:
              =======================================

    As the copyright holder for Mine Field, Expert Source Code,
    Inc. authorizes distribution by individuals only in
    accordance with the following restrictions.

    Vendors who are ASP Associate Members in good standing are
    hereby given permission to distribute the Mine Field
    package in accordance with the Distribution Restrictions
    listed above.  ASP Associate Members (often called "ASP
    Approved Vendors") in good standing do not need to request
    permission to distribute this package. This permission is
    in effect until or unless we notify you otherwise, in writing.
    ASP Vendor Members who wish to distribute the Mine Field
    package as part of a collection (such as PsL's MegaDisk set,
    or a CD-ROM package) may do so provided that all the other
    restrictions are met.

    Shareware Distributors and Disk Vendors who are not ASP
    Associate Members, but who wish to distribute the Mine Field
    package must comply with the following restrictions in
    addition to those listed below.  In order for us to ensure
    that only current versions are distributed, we require that
    you request permission from us (Expert Source Code, Inc.)
    to distribute any of our products.  Since permission is
    routinely granted, you may begin distributing the Mine Field
    package immediately after sending in your request.  You don't
    need to wait for confirmation from us before beginning dis-
    tribution,  If, for any reason, your request is denied, you
    must cease distribution immediately upon notification.  You


  Mine Field Documentation                          Page 12 of 16



    may nor list any of our products in advertisements, catalogs
    or other literature which describes our products as "FREE
    SOFTWARE".  Shareware is "Try-Before-You-Buy" software,
    it is not free.

    Vendors (non-ASP Vendor Members) who wish to distribute the
    Mine Field package as part of a collection (such as PsL's
    MegaDisk set of a CD-ROM package) must obtain permission
    from Expert Source Code, Inc. prior to beginning such a
    distribution.

    Individuals are hereby granted permission by Expert Source
    Code, Inc. to copy the Mine Field diskette for their own use
    (for evaluation purposes) or for other individuals to
    evaluate, ONLY when the following conditions are met.

    The Mine Field package is defined as containing all the
    material listed in the "Packing List" section listed above.
    If any files listed in the packing list are missing, then
    the package is not complete and distribution is forbidden.
    Please contact us to obtain a complete package suitable for
    distribution.

      *  The Mine Field package - including add related program
         files and documentation files - CANNOT be modified
         in any way and must be distributed as a complete
         package, without exception.  The "Packing List"
         section above contains a list of all files that are
         part of the Mine Field package.

      *  No price or other compensation may be charges for the
         Mine Field package.  A distribution cost may be
         charged for the cost of the diskette, shipping and
         handling, as long as the total (per disk) does not
         exceed US$10.00 in the United States and Canada or
         US$12.00 internationally.

      *  The Mine Field package CANNOT be sold as part of some
         other inclusive package.  Nor can it be included in
         any commercial software packaging offer, without a
         written agreement from Expert Source Code, Inc.  For
         information on combining the Mine Field package with
         related programs to form a "disk-set", please refer
         to the information below for ASP and non-ASP Disk
         Vendors.

      *  The Printed User's Guide may not be reproduced in whole
         or in part, using any means, without the written
         permission of Expert Source Code, Inc.  In other words,
         the disk-based documentation may not be distributed in
         PRINTED (hardcopy) form.



  Mine Field Documentation                          Page 13 of 16


      *  The Mine Field package cannot be "rented" or "leased"
         to others.

      *  The person receiving a copy of the Mine Field package
         MUST be made aware that each disk or copy is ONLY
         for evaluation, and that Expert Source Code, Inc.
         has not received any royalties or payment for the
         product.  This requirement can be met by including the
         complete Mine Field package, which contains any
         appropriate registration reminders.

      *  The person receiving a copy of the Mine Field package
         MUST be made aware that he or she does not become
         a registered user until Expert Source Code, Inc.
         has received payment for registration of the software.
         This requirement can be met by including the complete
         Mine Field package, which contains any appropriate
         registration reminders.

      *  Expert Source Code, Inc. prohibits the distribution of
         outdated versions of the Mine Field package, without
         written permission from Expert Source Code, Inc.
         If the version you have is over twelve (12) months old,
         please contact us to ensure that you have the most
         current version.  This version was released in May 1991.

      *  Licensee shall not use, copy, rent, lease, sell, modify,
         decompile, disassemble, otherwise reverse engineer or
         transfer the licensed program except as provided in
         this agreement.  Any such unauthorized use shall result
         in immediate and automatic termination of this license.

      *  U.S. Government Information:  Use, duplication or
         disclosure by the U.S. Government of the computer
         software and documentation in this package shall be
         subject to the restricted rights applicable to
         commercial computer software as set forth in subdivision
         (b)(3)(ii) of the Rights in Technical Data and Computer
         Software clause at 252.227-7013 (DFARS 52.227-7013).
         The Contractor/manufacturer is:
                         Expert Source Code, Inc.
                         P. O.  180519
                         Casselberry, FL 32718-0519

    All rights not expressly granted here are reserved to Expert
    Source Code, Inc.


          ==================================================
          Trial Use (Shareware Evaluation Version) Warranty:
          ==================================================

    The Shareware evaluation (trial use) version is provided AS


  Mine Field Documentation                          Page 14 of 16



    IS.  Expert Source Code, Inc.  MAKES NO WARRANTY OF ANY KIND,
    EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY
    WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
    PURPOSE.


                  =================================
                  Registered Version ONLY Warranty:
                  =================================

    Expert Source Code, Inc warrants the physical diskette(s) and
    physical documentation provided with registered verisons to
    be free of defects in materials and workmanship for a period
    of sixty days from the date of registration.  If Expert
    Source Code, Inc. receives notification within the warranty
    period of defects in materials or workmanship, and such
    notification is dertermined by Expert Source Code, Inc. to be
    correct.  Expert Source Code, Inc. will replace the defective
    diskette(s) or documentation.

    The entire and exclusive liability and remedy for breach of
    this Limited Warranty shall be limited to replacement of
    defective diskette(s) or dicumentation and shall not include
    or extend to any claim for ir right to recover any other
    damages, including but not limited to, loss of profit, data,
    or use of the software, or special, incidental, or conse-
    quential damages or other similar claims, even if Expert
    Source Code, Inc.  has been specifically advised of the
    possibility of such damages.  In no event will Expert Source
    Code, Inc.'s liability for any damages to you or any other
    person ever exceed the lower of suggested list price or
    actual price paid for the license to use the software,
    regardless of any form of the claim.

    Expert Source Code, Inc. SPECIFICALLY DISCLAIMS ALL OTHER
    WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED
    TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY AND/OR FITNESS
    FOR A PARTICULAR PURPOSE.


                   ============================
                   Applying for ASP Membership:
                   ============================

    If you would like to apply for ASP Associate Membership (to
    become an ASP approved Vendor or an ASP BBS member), simply
    write to the following address and request a VENDOR or BBS
    membership application package:

                    ASP Executive Director
                    545 Grover Road
                    Muskegon, MI  49442-9427
                    U.S.A.

  Mine Field Documentation                          Page 15 of 16



    or send a CompuServe message via CompuServe MAIL to ASP
    Executive Director 72050,1433.  You may also FAX a request
    to the ASP executive Director at 1-616-788-2765.


               ========================================
               How to Contact Expert Source Code, Inc.:
               ========================================

    Expert Source Code, Inc. may be contacted by any of the
    following methods:

      *  By U.S. Mail to:  Expert Source Code, Inc.
                           P. O. Box 180519
                           Casselberry, FL  32718-0519

      *  By E-Mail to:  CompuServe - 72711,2035.
                           Prodigy - FGTD17A
                            GEnie - C.HARDY7
                            Delphi - ESCINC

      *  By calling ESC BBS at (407) 699-8258 and leaving a
         (C)omment to the SYSOP.































  Mine Field Documentation                          Page 16 of 16
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2765

     Volume in drive A has no label
     Directory of A:\

    MF       DOC     35533   6-25-91   5:21p
    MF       EXE    128000   6-24-91   5:08p
    MF       GXL    127365   6-01-91   3:42a
    REGISTER FRM      3649   6-26-91   1:48a
    GO       BAT        38   7-23-91   2:37a
    FILE2765 TXT       781   8-01-91  12:22a
    GO       TXT      1002   8-09-91   3:48a
            7 file(s)     296368 bytes
                           23552 bytes free
