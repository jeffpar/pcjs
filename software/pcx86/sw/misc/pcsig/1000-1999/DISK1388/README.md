---
layout: page
title: "PC-SIG Diskette Library (Disk #1388)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1388/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1388"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE WINNING BID"

    I have a dollar, do I have two dollars? Two dollars, two dollars...
    sold!
    
    THE WINNING BID is a bonanza for both professionals and amateurs turning
    to auctions to raise big bucks. It lets you trace merchandise from
    donors or the house on through to the purchaser, reporting who receives
    what, and how much was the bid price. The 70-page manual tutors
    hobbyists on how to set up and operate this profitable fundraiser.
    
    THE WINNING BID records sellers or donors, and consigned merchandise,
    providing pre-sale receipts. Post-sale statements double as receipts
    for tax purposes and allow buyers to pick up merchandise. Merchandise
    lots are tagged with lot numbers, a description, and minimum bid if
    needed. Date, time and amount of sales are recorded along with the
    buyers' identities.
    
    The program prints paddle numbers in advance, and tracks buyers by
    paddle number and the merchandise they bought, and even adds sales tax
    where appropriate. It can combine lots, track bids made under the
    minimum and record seller alterations to bid prices after the sale is
    complete. Buyers can close and pay for their purchases at any time
    during the auction or after its completion. Likewise, sellers can be
    paid at any time or limited to payment when the purchasers of their
    merchandise pay.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1388.TXT

{% raw %}
```
Disk No: 1388
Program Title: THE WINNING BID version 1.3
PC-SIG version 1

I have a dollar, do I have two dollars?  Two dollars, two dollars..sold!

THE WINNING BID is a bonanza for both professionals and amateurs turning
to auctions to raise big bucks.  It lets you trace merchandise from
donors or the house on through to the purchaser, reporting who receives
what, and how much was the bid price.  The 70-page manual tutors
hobbyists on how to set up and operate this profitable fundraiser.

THE WINNING BID records sellers or donors, and consigned merchandise,
providing pre-sale receipts.  Post-sale statements double as receipts
for tax purposes and allow buyers to pick up merchandise.  Merchandise
lots are tagged with lot numbers, a description, and minimum bid if
needed.  Date, time and amount of sales are recorded along with the
buyers' identities.

The program prints paddle numbers in advance, and tracks buyers by
paddle number and the merchandise they bought, and even adds sales tax
where appropriate.  It can combine lots, track bids made under the
minimum and record seller alterations to bid prices after the sale is
complete.  Buyers can close and pay for their purchases at any time
during the auction or after its completion.  Likewise, sellers can be
paid at any time or limited to payment when the purchasers of their
merchandise pay.

Synopsis:  Everything you need to run a successful auction but the
auctioneer!

Usage:  Business/Specialized/Auctions

Special Requirements:  A printer; hard disk recommended for very
large auctions.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Description:

WB       EXE  Main program.
WBNOS    FLE  Overlay.
WBREAD   ME   Initial information.
WB       DOC  Program documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1388 The Winning Bid  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type WB (press enter)                             ║
║                                                                         ║
║ To view info about the program, type VIEW (press enter)                 ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## WB.DOC

{% raw %}
```



















                                  User Manual

                                The Winning Bid

                                  Version 1.3

















                        Copyright 1988 by Jan B. Young
                               Precision Systems
























                              The Winning Bid
                                Version 1.3
                                User Manual


     The User-Supported Version of the The Winning Bid (WB) is owned by Jan
     B. Young, doing business as Precision Systems, 767 N. Holden St., Port
     Washington,  WI  53074.  See section V of this manual for the complete
     terms and conditions of sale.

     The registration fee for the User-Supported version of The Winning Bid
     is $25.00.  For your fee, you will receive:

         1)  A  free  copy  of  The Auction Primer, a separate manual which
            gives hints and tips for the operation of  profitable  auctions
            using The Winning Bid.

         2) Free telephone support (see section VI).

         3) A free copy of the professional version demo on diskette.  This
            demo diskette is worth $5 if you choose to upgrade to the  Pro-
            fessional Version.

     Register today!  Send your $25.00 to:


                               Precision Systems
                               767 N. Holden St.
                           Port Washington, WI 53074


     Wisconsin residents must include 5% sales tax ($1.25 additional).




























                                  Page 2





                              The Winning Bid
                                Version 1.3
                                User Manual


                               Table of Contents

              Registration                                          2

         I.   Introduction
              A. Purpose                                         I- 2
              B. Assumptions made                                I- 3
              C. Hardware required                               I- 3
              D. Physical auction room setup and procedures      I- 4
              E. How to read this manual                         I- 4

         II.  Installing The Winning Bid
              A. Installation                                   II- 2
              B. Data base setup                                II- 3
              C. Data base clearing                             II- 4

         III. Tutorial
              A. Starting The Winning Bid                      III- 2
              B. Clear Data Base                               III- 3
              C. System Set Up                                 III- 3
              D. Print Paddles                                 III- 5
              E. Preprint Lot Tags                             III- 6
              F. Enter Sellers/Lots                            III- 6
              G. Silent Auction                                III- 7
              H. Live Auction                                  III- 8
              I. Close Buyers and Sellers                      III- 9
              J. Print Reports                                 III-10

         IV.  Reference section
              A. Clear Data Base                                IV- 2
              B. System Set Up                                  IV- 3
              C. Print Paddles & Tags                           IV- 9
              D. Enter Sellers/Lots                             IV-12
              E. Silent Auction                                 IV-19
              F. Live Auction                                   IV-25
              G. Reports                                        IV-30
              H. Stop                                           IV-42
              I. Data Backups and Archiving                     IV-43

         V.   Terms and conditions of sale                       V- 2

         VI.  Support                                           VI- 2

         VII. Index                                            VII- 2











                                  Page 3





                              The Winning Bid
                                Version 1.3
                                User Manual






















                                I. Introduction


































                                 Page I-1





                              The Winning Bid
                                Version 1.3
                                User Manual

                                   A. Purpose

     The Winning Bid is a software product designed to support both amateur
     fund-raising and professional for-profit auctions.

     Many hobby and charitable organizations across the country raise funds
     to  support  their activities through amateur auctions.  Although some
     of these auctions are conducted by professional auctioneers, the book-
     keepers and the people who support the auctioneer by checking in mate-
     rial lots, carrying them to and from the auction block, and collecting
     from the buyers are generally amateur volunteers.

     Merchandise  lots  are sometimes donated, giving the organization 100%
     of the proceeds of the sale.  Other merchandise may be sold on  behalf
     of  the  buyer, with the organization receiving a commission of 10% to
     30% of the proceeds.  Other auctions sell a  mixture  of  donated  and
     commissioned merchandise.

     Professional,  for-profit  auctions  differ from amateur auctions pri-
     marily in the pace and professionalism of the operation.  Professional
     auction  houses don't receive merchandise donations, but do sell items
     owned by the house. The logic for management of owned items is identi-
     cal  to  that for donations since proceeds accrue fully to the auction
     house. Volunteer labor is rare in the professional auction  house  and
     is  generally  replaced with paid labor, increasing the need for effi-
     ciency.

     The Winning Bid contributes to the successful operation of an  auction
     by:

         1.  Recording sellers (or donors) and the merchandise they consign
            (or donate). As lots are checked in, The Winning Bid produces a
            pre-sale  receipt.   After  the  auction is over, it produces a
            post-sale statement which can double as a receipt for tax  pur-
            poses,  or can accompany the payment for goods sold on consign-
            ment and can be used as an authorization  document  during  the
            post-sale   pickup  of  unsold  merchandise.   Seller's  names,
            addresses, and phone numbers are recorded, simplifying the  job
            of mailing post-sale statements and checks.

         2.  Recording and tracking merchandise lots.  Lot tags listing the
            lot's number, a description, and (optionally) a minimum bid are
            printed as lots are checked in. The system tracks separate min-
            imum bids for the auction and for each lot; only the larger  of
            the  two  is printed on the lot tags.  As the auction proceeds,
            the date and time of sale is recorded along  with  the  selling
            price and the buyer's identity.

         3.  Buyers are identified (by a paddle number) and the merchandise
            purchased by each buyer is identified with data entry occurring
            in real time as the auction progresses.  Paddles are printed in
            advance (if desired).  Post-sale  statements  are  printed  for
            each  buyer  as  a payment receipt and as pick-up authorization
            for physical delivery of the merchandise  purchased.  If  sales
            tax  is  to  be  collected  from  buyers,  The Winning Bid will

                                 Page I-2





                              The Winning Bid
                                Version 1.3
                                User Manual

            include the proper calculations on its statements.

         4. Numerous special circumstances are handled and tracked  by  the
            system  including  the combination of two or more lots into one
            by the auctioneer, bids made under the minimum specified by the
            organization  and/or  the  seller, alterations to the bid price
            after the sale is complete, correction for data  entry  errors,
            etc.

         5.  The  Winning Bid allows buyers to close and pay for their pur-
            chases at any time during the auction or after its  completion.
            Sellers  may  be  allowed to close and receive payment any time
            after auctioning of their merchandise is  complete  or  can  be
            limited  to  closure only after the buyers of their merchandise
            have paid, or when there is enough money in  the  till  to  pay
            them  (in cash), or both.  Or sellers can be closed by the auc-
            tion house after completion of the auction, with statements and
            checks mailed out later.

         6.  After  completion  of  the  auction,  a variety of reports are
            available listing buyers and sellers, and a P&L  statement  for
            the auction can be printed.


                              B. Assumptions made

     The Winning Bid makes several assumptions about the physical organiza-
     tion and operation of  the  auction.   The  most  important  of  these
     assumptions are:

         1.  That the auctioneer will work from an auction block, with mer-
            chandise lots brought to the block for sale  and  then  carried
            away.   Auctions  in which the auctioneer moves around the auc-
            tion hall (i.e. when machinery or other hard-to-move items  are
            being  sold)  can  be  supported by recording bids on paper and
            using runners to carry them to the computer, but this  is  less
            convenient.   The Winning Bid assumes that the computer and its
            operator will be physically located within ear-shot of the auc-
            tioneer at all times.

         2.  That each auction is independent from all others.  The Winning
            Bid can support more than one auction at a time by  maintaining
            data  bases  on separate diskettes or disk directories, but the
            software will operate on and report on only one at a time.


                              C. Hardware required

     The minimum hardware required by The Winning Bid is an IBM-PC or close
     compatible  computer  with  at  least  256K of memory and two diskette
     drives.

     Although The Winning Bid will operate on the minimum hardware set,  it
     will  be  difficult  to effectively control an auction with it because
     all reports will necessarily be directed to the screen.  Not only will

                                 Page I-3





                              The Winning Bid
                                Version 1.3
                                User Manual

     this  make  it  impossible for the operator to give receipts to buyers
     and sellers, it will also interrupt the flow  of  bidding  during  the
     auction  itself.  Therefore,  the  following  additional  equipment is
     highly recommended:

         1. A printer.  Almost any printer will do so long as it can  print
            80 columns on an 8 1/2" by 11" page.

         2.  A  second  printer  (and  a  second printer port).  The second
            printer will allow both paper (for reports) and tag stock  (for
            lot  tags) to be printed without the need for constantly chang-
            ing forms. Unless the advance-tag option is selected (see  sec-
            tion III-B and elsewhere in this manual), the second printer is
            highly advised for efficiency and speed in  the  seller-and-lot
            entry process.

         3.  A  hard  disk  is  not  required (a 360K diskette has adequate
            capacity to handle several hundred merchandise  lots),  but  is
            advised for speed.


                 D. Physical auction room setup and procedures

     The  Winning Bid is designed to be compatible with a variety of physi-
     cal auction rooms and a flexible set of auction operating  procedures.
     As a general guide to procedures, however, you should read this manual
     in detail and experiment with the software on your own before  attemp-
     ting to actually operate an auction with The Winning Bid.

                           E. How to read this manual

     Construction  of  a  user manual which will simultaneously fill user's
     needs for tutorial instruction and also function as a reference  docu-
     ment  is difficult.  Further complicating this requirement is the need
     to serve users at both a beginning and an expert  level.   These  mul-
     tiple  (and  conflicting)  requirements are often the reason why users
     are disappointed in the quality of the documentation they receive with
     the software they purchase.

     This  user  manual attempts to meet all of the above requirements with
     the following strategy:

         1. Tutorial and reference needs are met with two separate sections
            in  this  manual  and  with  a separate document (the "Primer")
            These cover, respectively, auction  operations  in  a  tutorial
            fashion,  reference  material,  and hints and tips on the oper-
            ation of a profitable auction.

         2. Beginner/expert issues are addressed by writing for the  middle
            ground with additional comments as necessary enclosed in brack-
            ets like this: { }.  Start by ignoring the  bracketed  informa-
            tion; read it when you need it.




                                 Page I-4





                              The Winning Bid
                                Version 1.3
                                User Manual






















                         II. Installing The Winning Bid


































                                 Page II-1





                              The Winning Bid
                                Version 1.3
                                User Manual

     Making The Winning Bid work on your computer involves three relatively
     simple steps: transfer of the software to your hard disk or to a work-
     ing  diskette (called the "installation"), customization of it through
     table entries ("setup"), and construction of an initial data base.

                                A. Installation

     Installation of The Winning Bid on your computer system is  simplicity
     itself.  Begin  by  producing a directory of the diskette on which you
     received The Winning Bid.  You should see the following files  in  the
     directory:

              WB.EXE     The Winning Bid program
              WBNOS.FLE  Block letter data file
              WBREAD.ME   Version-specific,  last-minute  information about
                 your copy of The Winning Bid

     {The demonstration version of The Winning Bid comes with a second dis-
     kette containing documentation.  On that diskette you will find a file
     called "WB.DOC".  The documentation is printed with  the  DOS  command
     "COPY A:WB.DOC LPT1:".}

     Before  installing The Winning Bid, "TYPE" the file WBREAD.ME and fol-
     low any instructions contained in it.  Some instructions could  super-
     sede those given below. (Use the DOS command TYPE A:WBREAD.ME.)

     If you have a two-diskette computer, format two blank diskettes. Label
     one "WB Software" and the other "WB Data".  Then  copy  everything  on
     the  delivery  diskette  to the Winning Bid software diskette. Option-
     ally, you may wish to preformat the software diskette with DOS  and  a
     copy  of  COMMAND.COM and then write a batch file to start The Winning
     Bid. If you don't know how to do this offhand, refer to your DOS  man-
     ual.

     If you have a hard-disk, create a new directory (possibly called "WB")
     and copy everything on the delivery diskette to it.

     In either case, the original delivery diskette should then  be  safely
     stored away as a backup copy.

     Regardless  of  whether  you are running from diskette or a hard disk,
     operation of The Winning Bid requires that  the  software  be  on  the
     default  drive  and in the current directory.  Further, it is required
     that the file WBNOS.FLE be present together with the software  on  the
     default drive and in the current directory.  WB.DOC (demo system only)
     and WBREAD.ME may be placed elsewhere, or can be deleted at your  dis-
     cretion.  (Delete these files from your working copy of the software -
     not from the original disk.)

     After you have run The Winning Bid for the first  time,  another  file
     called  WB.CFG  will  be  automatically  created.  This file must also
     remain on the default drive and in the default directory whenever  The
     Winning Bid is run.



                                 Page II-2





                              The Winning Bid
                                Version 1.3
                                User Manual

     Following  completion of the installation process, The Winning Bid may
     be started by typing "WB" followed by the enter key.

     {The Winning Bid will run faster and will be more  responsive  if  you
     provide  the  statement "BUFFERS=20" in a CONFIG.SYS file on your root
     directory.}


                               B. Data Base Setup

     Before The Winning Bid can be used, the data base must be set  up  and
     cleared. These two processes may be run in either sequence.

     FAILURE  TO RUN BOTH THE SET UP AND CLEARING PROCESSES BEFORE ENTERING
     DATA WILL HAVE UNPREDICTABLE AND PROBABLY UNDESIRABLE RESULTS.

     The set up process is one that you will use several times before  each
     auction  as  plans  for  the  auction  are firmed and as the situation
     changes.  Although the process asks for some information that you  can
     only  guess at now, you must still go through the set up at least once
     before you can run The Winning Bid.  Remember, you can  always  change
     it later.

     Set  up  is  done by running the system (type "WB" and press the enter
     key).  The Winning Bid presents its main  menu  and  asks  which  disk
     drive  holds your data files.  Respond with the appropriate drive let-
     ter (A, B, C, etc.).

     Now The Winning Bid displays its main menu.  Select option 2 from  the
     menu to set up The Winning Bid for your use. During the set up process
     you will be presented with up to four screens of options and variables
     to  be  completed  (the exact number of screens depends on the options
     you select, as described below). For each of  the  screens  displayed,
     fill  in  the  blanks  as  appropriate.  When each screen is complete,
     press Esc to proceed to the next screen.  When  the  last  screen  has
     been completed, The Winning Bid will return you to the main menu.

     Following  completion of each set up screen, The Winning Bid validates
     your data and may present a screen of  warnings.   You  may  elect  to
     return  to  the prior screen and make any required corrections, or you
     may elect to proceed without making corrections at  this  time.   Only
     one  error  (the selection of identical foreground and background col-
     ors) is considered adequately important to force you to make the  cor-
     rection immediately.

     In  addition  to  the above, after completion of the third screen, The
     Winning Bid tests your printer port assignments and determines whether
     or  not  your  printers  are present and the communications parameters
     correct. If the printers do not respond properly, an additional screen
     reports  the problem.  Note that the problems shown on this screen can
     result if the printer isn't currently connected to the computer, if it
     isn't  turned  on,  and/or  if it isn't online.  If an error occurs in
     this test, The Winning Bid will record the fact that  the  printer  is
     not  available  and,  subsequently, will not attempt to use it. If the
     error is later corrected, The Winning Bid must be notified  either  by

                                 Page II-3





                              The Winning Bid
                                Version 1.3
                                User Manual

     passing  through  the  setup process or by stopping and restarting the
     system (the same test is conducted every time you  start  The  Winning
     Bid).   To  do  this, press F10 from the main menu and then type WB to
     restart the system.

     A detailed description of the set up data entry screens and the fields
     that appear on them can be found in section IV of this manual.


                           C. Clearing the Data Base

     The data base clearing process erases an old data base (if one exists)
     and creates a new one.  It must be run during the initial installation
     of  The  Winning  Bid to create files for entry of your sellers, lots,
     and buyers.

     To run the data base clearing process, selection function 1  from  the
     main  menu.   You will be presented with a warning screen. Press "Esc"
     if you do not want to run data base clearing at this time.  Press  the
     enter key to continue with the process.

     The  data  base  clearing  process is fully automatic.  It takes a few
     minutes to run.  Please be patient.

     For more information about data base clearing, see section IV.































                                 Page II-4





                              The Winning Bid
                                Version 1.3
                                User Manual






















                                  III. Tutorial


































                                Page III-1





                              The Winning Bid
                                Version 1.3
                                User Manual

     One of the important differences  between  a  good  auctioneer  and  a
     mediocre  one  is  pacing.   The good auctioneer knows how fast to go,
     when to wait for a prospective bidder to make up  his  mind,  when  to
     lighten the mood with a joke, and when to cut off bidding on an item.

     In  an auction operated with The Winning Bid, you, the computer opera-
     tor, will be seated at your keyboard close to the auctioneer.  It will
     be your job to keep up with the auctioneer, recording bids as they are
     accepted and thereby doing the bookkeeping.  Because the pace  of  the
     auction  is controlled by the auctioneer and not by you, the job will,
     at  times,  require  significant  concentration.   If  the  auctioneer
     accepts  a  bid  and  you fail to hear it, the auction will have to be
     interrupted while things are straightened out.  You will find it  dif-
     ficult  to  read this manual and pay attention to the bidding simulta-
     neously.  Therefore, it is essential that you have a solid understand-
     ing  of  The  Winning Bid before starting since you won't have time to
     look things up during the auction itself.

     You shouldn't be frightened by this warning.  The Winning Bid has been
     successfully  used  to run many auctions by many people.  However, you
     should spend the time required to go through this tutorial in step-by-
     step detail.  And then you should develop your own scenario which more
     closely corresponds to the auction that you will be running and  prac-
     tice operating The Winning Bid under that scenario.

     Also,  if  your typing skills are rusty, it may be worthwhile to brush
     them up before the auction.

     This tutorial presumes that you have successfully installed the  soft-
     ware (as described in section II of this manual). It proceeds from the
     software installation through several steps as follows:

         A.  Start The Winning Bid
         B.  Clear Data Base
         C.  System Set Up
         D.  Print Paddles
         E.  Pre-print Lot Tags
         F.  Enter Sellers/Lots
         G.  Silent Auction
         H.  Live Auction
         I.  Close Buyers and Sellers
         J.  Print Reports

     Reports are not documented in the tutorial.  If you would like to look
     at a sample report before actually printing it, refer to the appropri-
     ate pages in section IV.

                     Tutorial Step A: Start The Winning Bid

     1. It you have a two-diskette system, begin by placing your  DOS  dis-
        kette in drive A.  Turn the power on and wait for the A> prompt. At
        the A> prompt, remove the DOS diskette, insert  The  Winning  Bid's
        program  diskette  in  drive A (use a copy, not the original) and a
        blank, formatted diskette in drive B.


                                Page III-2





                              The Winning Bid
                                Version 1.3
                                User Manual

     2. Or, if you have a hard disk, turn the computer on and wait for  the
        C> prompt.

     3.  Type "WB" (without the quotation marks, and followed by a carriage
        return).  The Winning Bid will display its introductory screen.

     4. Note: The Winning Bid reacts to single-character  commands  without
        waiting  for  you to press the carriage return.  When, however, you
        enter multiple characters, you must signal the completion  of  your
        entry  by pressing the carriage return.  Use of the carriage return
        is assumed throughout the remainder of this tutorial and  won't  be
        mentioned again.

     5. From the introductory screen, press any key to continue.

     6. The Winning Bid assumes, but does not require, that two printers be
        connected to your computer.  If you have previously told  The  Win-
        ning  Bid that one or both of the printers are not present, it will
        give you a reminder on the introductory screen.  Press any  key  to
        progress past this warning.

     7. The Winning Bid will display its main menu.

     8. From the main menu you may select any of eight options.  Selections
        are made by pressing function keys.  In the steps that  follow,  we
        will guide you through each of the options.


                      Tutorial Step B: Clear The Data Base

     1.  The  data  base  clearing  process erases an old data base (if one
        exists) and creates a new one.  It must be run during  the  initial
        installation  of  The Winning Bid to create files for entry of your
        sellers, lots, and buyers. After the first use  of  the  data  base
        clear,  it  should  be  run ONLY after completion of one auction as
        preparation for the next one.

     2. Press F1. You will be presented with a warning  screen.  Press  the
        enter  key  to continue.  After a brief pause, you will be returned
        to the main menu.



                        Tutorial Step C: System Set Up

     1. Next, if this is the first time you are running  The  Winning  Bid,
        you must run the system set up function.  From the main menu, press
        F2.

        System set up allows the user to enter and modify a range  of  con-
        trol  variables  which  affect the operation of The Winning Bid and
        the presentation of screens and reports to both the WB operator and
        the auction's buyers and sellers.  Switches are provided to turn on
        and off major features; other controls direct output  to  different
        printers,  control screen colors, and provide information needed by

                                Page III-3





                              The Winning Bid
                                Version 1.3
                                User Manual

        The Winning Bid (such as tag sizes).

     2. System set up begins with a screen of control  variables.   Options
        are  selected by filling in these blanks presented.  For a detailed
        description of the options and what they do, refer to section IV of
        this manual.  For the purposes of this tutorial, we suggest you use
        the following:

        Auction Name.  Use any convenient name, i.e. "Smith & Co.".
        Cash Tracking. "Y".
        Starting Cash Amount. $100.  (Don't type the dollar sign.)
        Seller Close Control.  "Y".
        Commission Rate.  "20".
        Tax Rate.  "5".
        Auction-wide Minimum Bid.  "2".
        Color.  If your CRT is capable of supporting color, enter  "Y".  If
           not, enter "N".

        Use  the up and down arrows or the carriage return key on your key-
        board to move from field to field.  When the screen is complete and
        you  are satisfied with it, use the Esc key to progress to the next
        screen.

     3. Having completed the first screen, The Winning Bid  validates  your
        input  and,  if  necessary, presents a screen of warnings.  You may
        elect to return to the prior screen and make any  required  correc-
        tions,  or  you  may elect to proceed without making corrections at
        this time.

     4. Another screen  of  control  variables  appears.   Like  the  first
        screen,  complete  this screen and press Esc when you are done.  We
        suggest the following values for this tutorial:

        Name and Address on Paddles.  "Y".
        Rules on Paddles. "N".
        Rules File Name.  Leave blank.
        Tags In-line or Batch. "B".
        Minimum Bid on Tags. "B".
        Tag Printer Port. Enter "1", "2", or "3", to tell The  Winning  Bid
           which port (LPT1, LPT2, or LPT3) is connected to the printer you
           will use for printing lot tags.  An entry of "0" indicates  that
           there is no tag printer.
        Tag Eject. "0"
        Report  Printer  Port.  Enter "1", "2", or "3", to tell The Winning
           Bid which port (LPT1, LPT2, or LPT3) is connected to the printer
           you  will  use  for printing reports.  An entry of "0" indicates
           that there is no report printer.
        Report Eject. "0".

     5. If you specified that you have a color CRT, a screen  is  now  dis-
        played  to  allow  color selection. A grid of sample foreground and
        background colors is displayed.  A box which serves as a cursor  is
        drawn  around the color combination now in use. Use the cursor con-
        trol keys (the arrows on the numeric keypad) to move the box to the
        color  combination  you  want.   When you have made your selection,

                                Page III-4





                              The Winning Bid
                                Version 1.3
                                User Manual

        press Esc to progress to the next screen.

     6. The final screen allows you to specify the size and  shape  of  the
        lot tags you will be using.  For the purposes of this tutorial, you
        may wish to print lot tags on plain paper.  If  so,  the  following
        values are appropriate:

        Number of Tags Across. "1".
        Tag Height. "10".
        Tag Width. "48".
        Tag Separation. "2".
        First Tag Starting Column. "1".
        Second Tag Starting Column. Leave blank.

     7.  When  you complete this screen and press Esc, you will be returned
        to the main menu.  The system set up process is now complete.


                         Tutorial Step D: Print Paddles

     Next, let's try printing some  buyer's  paddles  and  some  lot  tags.
     Press  F3 from the main menu and respond "Y" when you are asked if you
     want to print paddles.  Specify a starting paddle number  (i.e.   100)
     and  an  ending  paddle  number  (i.e.  103)  and  the paddles will be
     printed.

     Advance printing of paddles is recommended because print time is  sig-
     nificant  and  buyers  will  not want to stand in line to wait for the
     printing

     The software that prints buyer paddles includes the ability to  insert
     into  them  a  set of auction rules which you can write.  If you would
     like to try including auction rules, take the following steps:

     1. Exit The Winning Bid (respond "N" when asked if you want  to  print
        lot tags and press F10 when you reach the main menu).

     2. Using any word processor or text editor, write your rules.  You may
        use up to 70 characters per line, and up to 8 lines  of  text.   Be
        sure that you save the resulting rules as an ASCII file.

     3.  If  necessary, move the text file containing the rules to the disk
        and directory where you keep The Winning Bid.

     4. Re-start The Winning Bid (type "WB") and re-run the setup  function
        (F2).  Change the "Rules on Paddles" parameter to "Y" and enter the
        name of your rules text file in the field titled "Rules File Name".

     Now, the next time you print paddles, your rules will be included.







                                Page III-5





                              The Winning Bid
                                Version 1.3
                                User Manual


                      Tutorial Step E: Pre-print Lot Tags

     After paddles have been printed, The Winning Bid asks if you want  lot
     tags  printed.   These  tags  are not the only tags available from The
     Winning Bid and are not recommended for general purpose  uses  because
     they  do not contain a description of the merchandise.  Respond "Y" if
     you want to try printing some anyway.  After you give The Winning  Bid
     a  starting  and  ending tag number, it will print the tags and return
     you to the main menu.



                       Tutorial Step F: Enter Sellers/Lots

     The entry of seller and merchandise lot information is intended to  be
     done  as merchandise is received for the auction, as far in advance as
     necessary.

     Throughout this process, you can back out at any point  with  the  Esc
     (escape) key.

     1.  To begin the seller/lot entry process, press F4 from the main menu
        and you will be presented with the seller/lot entry screen and  the
        prompt:

                    Command (Add/Find/Modify/Delete/Report):

        The  seller/lot entry process requires entry of the seller's infor-
        mation first, followed by entry of that seller's lots.

     2. Press the "A" key (for Add) and then the "S" key (for Seller).  You
        are prompted for the seller's name, address, city, state, zip code,
        phone number and commission rate. The commission rate  defaults  to
        the value entered during the setup process.

     3.  After  completing  entry  of the seller, you may enter merchandise
        lots for the seller's merchandise.  Again press "A" (for  Add)  and
        then  press  "L" (for Lot).  You are asked for a minimum bid (which
        may be zero, indicating no minimum) and a description of  the  lot.
        Lot  descriptions  must be at least one line long, and may be up to
        ten lines long.  Press the carriage  return  key  after  completing
        each  line  of  description; press it twice after the last line has
        been entered.

        If you have specified in the set up process that lot tags are to be
        produced  in-line,  a  lot  tag will automatically print on the tag
        printer after entry of each merchandise lot.  If the lot tag  stock
        is specified as 2-across, a pair of tags will print following every
        second lot entry.

     4. For purposes of this tutorial, enter four sellers and at least  two
        lots  for  each.   You  can  make  up  names  and addresses and lot
        descriptions as you go. Put a minimum bid on a few of the lots.


                                Page III-6





                              The Winning Bid
                                Version 1.3
                                User Manual

     5. Notice that you can view your work using  the  up-arrow  and  down-
        arrow  keys  to move through a seller's lots, and the PgUp and PgDn
        keys to move between sellers.  You can also find a specific  seller
        by pressing the "F" key at the main prompt.

     6.  The "M" key is used for changing or MODIFYING data on both sellers
        and lots.  After pressing the "M" key, you are  asked  whether  you
        want  to modify the currently-displayed seller or a lot.  Press "S"
        or "L" in response and you will be allowed to make changes  to  the
        data entered.

     7.  When entry of a seller and that seller's merchandise lots has been
        completed, the final step in the seller/lot  entry  process  is  to
        produce  a  receipt for the merchandise.  Press "R" (for Report) at
        the main prompt and enter the seller's number.   If  you  specified
        "batch"  lot  tag  printing  in  the  set up, lot tags will also be
        printed at this time.

     8. Press Esc (escape) at the seller/lot entry main prompt to return to
        the system's main menu.


                         Tutorial Step G: Silent Auction

     A silent auction is one in which lots are tagged with relatively large
     sheets of paper (often with the regular Winning Bid lot tag stapled to
     it).   During  the  silent auction, bidders write their paddle numbers
     and bid on these sheets and the highest bid wins.  The Winning Bid  is
     used to prepare the lot tags and results are entered into it so state-
     ments for buyers and sellers can be printed.

     1. Press F5 from the main menu and you  will  be  presented  with  the
        silent auction operation screen.  This screen is divided into three
        areas for 1) system-maintained status information, 2) prompts, data
        entry  and messages, and 3) lot status information.  See section IV
        of this manual for a detailed description of these areas.

        The subfunctions of the silent auction  are  reached  through  com-
        mands. The main prompt is:

                     Command (Sell/Modify/Find/Close/Purge):

     2.  To  enter  a  sale, press "S".  You are asked to enter the buyer's
        number (paddle number) and the bid amount.  Assuming that  the  bid
        is  above  any  existing  minimum,  The  Winning Bid records it and
        returns to the main prompt.  "Sell" one or two lots to get the feel
        of it.

     3.  After  entry, bids may be modified or errors corrected by pressing
        the "M" key (for Modify).  You are asked for a lot number  and  are
        asked whether or not the lot should be "unsold". If you enter a "Y"
        to unsell the lot, The Winning Bid will withdraw the  current  high
        bid, remove the buyer's number, and there will no longer be an out-
        standing bid on that lot. Try unselling one of the  lots  that  you
        sold in step 2.

                                Page III-7





                              The Winning Bid
                                Version 1.3
                                User Manual


     4. If you modify a sale and enter an "N" when asked whether or not the
        lot should be unsold, The Winning Bid will allow you to  specify  a
        new  price  and/or buyer.  The price entered must be above both the
        auction-wide minimum bid and the lot-for-lot minimum bid.   Make  a
        few changes to bids you entered.

     5.  The  "F"  key  is used to FIND a lot with a specified description.
        After pressing the "F" key, you are asked for a word or  phrase  to
        search for.  Try finding a lot.

     6.  The  "C" key is used to CLOSE buyers and sellers.  We will discuss
        closing in more detail later.  For tutorial purposes,  do  not  use
        the "C" key now.

     7.  The  "P"  key PURGES or removes from the data base all bids except
        those made by buyers who have closed.  This clears the  way  for  a
        live  auction  by  eliminating buyers who did not show up to settle
        their accounts after completion of the silent  auction.    Try  the
        "P"  key.  Unless you closed one or more buyers, all bids will dis-
        appear.

     8. Press Esc (escape) to return to the main menu.


                         Tutorial Step H: Live Auction

     During a live auction, The Winning Bid is used to record the final bid
     (only  the  final  bid)  on  each lot as it crosses the auction block.
     Recording live auction data allows the system to produce  buyer's  and
     seller's  statements  later and allows the preparation of a variety of
     management reports after the auction is complete.

     1. Press F6 from the main menu and you will be presented with the live
        auction  operation  screen,  nearly identical to the silent auction
        screen.  See section IV for a detailed description of this screen.

        The subfunctions of the live auction are reached through  commands.
        The main prompt is:

                     Command (Sell/Group/Modify/Find/Close):

     2.  The "S" key is used to SELL a merchandise lot, or to record a bid.
        After pressing the "S" key, you are asked for a lot number,  a  bid
        amount,  and  a  buyer  number.  The lot number defaults to the lot
        currently at the top of the third section of the  screen,  but  you
        are  allowed  to  enter  a  different number, should the auctioneer
        decide to sell  lots  out  of  numeric  sequence.   To  accept  the
        default, simply press enter.

        Sell  the first two lots.  Then sell a lot which has a minimum bid,
        specifying a bid price below the minimum.  Observe the  error  mes-
        sage  and  press either "A" to accept the bid or "Esc" (or the car-
        riage return key) to nullify it.


                                Page III-8





                              The Winning Bid
                                Version 1.3
                                User Manual

     3. When an auctioneer cannot sell a lot, he or she will often put that
        lot  together with another one and sell the two together.  The Win-
        ning Bid calls this "grouping".  Lots may be grouped only  if  they
        share  a single seller/consignor because there is otherwise a prob-
        lem in dividing up the proceeds.  When two lots are  grouped,  only
        the  second  one  named remains salable.  The other becomes part of
        it.

        The "G" key is used to group lots for  sale  as  a  single  entity.
        Press  the  "G"  key  and you will be prompted for a lot number and
        then for a second lot number.  Try it once for two  lots  from  one
        seller,  and then again with two lots from two different sellers to
        see what happens.

        Grouping is not limited to two lots.  You can group three  or  more
        lots together by successive use of the "G" key, so long as they are
        all from a single seller.  Try grouping three lots from one seller.

     4. After entry, bids may be modified or errors corrected  by  pressing
        the  "M"  key (for Modify).  You are asked for a lot number and are
        asked whether or not the lot should be "unsold". If you enter a "Y"
        to  unsell  the lot, The Winning Bid will withdraw the current high
        bid, remove the buyer's number, and there will no longer be an out-
        standing  bid on that lot. The process is identical to that used in
        the silent auction.

     5. Likewise, the "F" key is used as it is in  the  silent  auction  to
        FIND a lot with a specified description.



                   Tutorial Step I: Close Buyers and Sellers

     The  act  of closing a buyer or seller implies that he or she has com-
     pleted all auction activity and is prepared to settle  accounts.   The
     Winning Bid, therefore, prints a receipt/statement and forbids further
     buying and selling for that  individual.   (Of  course,  a  new  buyer
     and/or  seller number can be issued if the person wants to continue at
     a later time.)

     1. To close a buyer, press the "C" key. You will be  asked  whether  a
        buyer  or a seller is to be closed.  Press "B" for buyer or "S" for
        seller.  You will then be asked for the buyer's or seller's number.
        Enter the number.

        The closing of sellers requires that all of that seller's lots must
        all be sold (or must have at least crossed the auction block).   If
        the  close  control option has been selected in the set up process,
        buyers of the seller's merchandise  must  have  closed  (indicating
        that payment has been received).  A report-only option allows these
        requirements to be bypassed and a report produced without  actually
        closing the seller.

     2.  After  accepting the number, The Winning Bid calculates the amount
        due and displays it with a request  for  the  payment  type  (cash,

                                Page III-9





                              The Winning Bid
                                Version 1.3
                                User Manual

        check,  or  credit card).  Select a payment type and key the appro-
        priate number.  The statement will then be printed.



                        Tutorial Step J: Print Reports

     In addition to the seller's claim check and the seller's  and  buyer's
     receipts,  The  Winning Bid provides several management reports. These
     reports are reached by pressing F7 which presents a  subordinate  menu
     listing  the reports.  Several of the reports involve the selection of
     options (i.e. open, closed, or both; summary or detailed).

     For purposes of this tutorial, run each of the reports with  at  least
     one set of options.  Compare the reports with their descriptions which
     appear in section IV of this manual.  Remember, while looking  at  the
     reports,  that you may not have sold all the items in your sample data
     base and many not have closed out all buyers and sellers.






































                                Page III-10





                              The Winning Bid
                                Version 1.3
                                User Manual






















                             IV. Reference Section


































                                 Page IV-1





                              The Winning Bid
                                Version 1.3
                                User Manual

     The Winning Bid operates under a single  main  menu,  one  subordinate
     menu, and both prompts and commands as necessary.  The reference mate-
     rials appearing in this section are organized by main menu option, and
     by submenu, prompt, or command within the main menu.

     The seven main menu options are exercised by pressing function keys as
     shown below.  Function keys 8 and 9 are inoperative.

         1. Clear Data Base
         2. System Set Up
         3. Print Paddles & Tags
         4. Enter Sellers/Lots
         5. Silent Auction
         6. Live Auction
         7. Reports
         10. Stop

                      Main Menu option 1: Clear Data Base

     The data base clearing process erases an old data base (if one exists)
     and creates a new one.  It must be run during the initial installation
     of The Winning Bid to create files for entry of  your  sellers,  lots,
     and  buyers.  After the first use of the data base clear, it should be
     run ONLY after completion of one auction as preparation for  the  next
     one.

     THE  DATA  BASE CLEARING PROCESS IRRETRIEVABLY ERASES DATA. DO NOT RUN
     IT UNTIL YOU ARE COMPLETELY DONE WITH THE EXISTING DATA.

     To run the data base clearing process, select function 1 from the main
     menu.  You will be presented with a warning screen. Press "Esc" if you
     do not want to run data base clearing at this time.  Press  the  enter
     key to continue with the process.

     {Data  base  clearing  begins  by erasing all data files and modifying
     some values on the configuration file, WB.CFG.  Then it builds a blank
     9999  record buyer file.  Because The Winning Bid does not necessarily
     assign buyer numbers, the blank file is required to eliminate the dis-
     tinction  between  non-existent buyers and buyers who haven't bid yet.
     The completed buyer file occupies 200,160 bytes of storage and will be
     the largest of The Winning Bid data files.}















                                 Page IV-2





                              The Winning Bid
                                Version 1.3
                                User Manual


                       Main Menu option 2: System Set Up

     The  system  set  up  function is accessed by pressing F2 any time the
     main menu appears.

     System set up allows the user to enter and modify a range  of  control
     variables  which  affect the operation of The Winning Bid and the pre-
     sentation of screens and reports to both the WB operator and the  auc-
     tion's  buyers  and sellers.  Switches are provided to turn on and off
     major features; other controls direct output  to  different  printers,
     control  screen  colors, and provide information needed by The Winning
     Bid (such as tag sizes).

     During the set up process you  will  be  presented  with  up  to  four
     screens  of options and variables to be completed (the exact number of
     screens depends on the options you select, as  described  below).  For
     each of the screens displayed, fill in the blanks as appropriate. When
     each screen is complete, press Esc to proceed to the next screen. When
     the last screen has been completed, The Winning Bid will return you to
     the main menu.

     Following completion of each set up screen, The Winning Bid  validates
     your  data  and  presents  a screen of warnings if necessary.  You may
     elect to return to the prior screen and make any required corrections,
     or  you  may elect to proceed without making corrections at this time.
     Only one error (the selection of identical foreground  and  background
     screen colors) is considered adequately important to force you to make
     the correction immediately.

     In addition to the above, after completion of the second  screen,  The
     Winning Bid tests your printer port assignments and determines whether
     or not your printers are present  and  the  communications  parameters
     correct.  If  a problem occurs, the results of this test are presented
     in one additional screen.  Note that problems shown on this screen can
     result if the printer isn't currently connected to the computer, if it
     isn't turned on, and/or if it isn't online.  If  an  error  occurs  in
     this  test, The Winning Bid will note the fact that the printer is not
     available and, subsequently, will not attempt to use it.  If the error
     is later corrected, the test may be rerun (and printer status updated)
     either by passing  through  the  setup  process  or  by  stopping  and
     restarting  The Winning Bid (the same test is conducted every time you
     start The Winning Bid).  To do this, press F10 from the main menu  and
     then type "WB" to restart the system.

     Here is a detailed description of the set up data entry screens.

     Screen 1 - Control Variable Maintenance (always displayed)

         Auction  Name.   The auction name is printed at the top of certain
            screens, on tags and paddles, and on  reports.   It  serves  to
            identify  this  auction as different from all others.  The auc-
            tion name field is a 32-position character field which you  may
            complete as you wish.


                                 Page IV-3





                              The Winning Bid
                                Version 1.3
                                User Manual

         Cash  Tracking.   When cash tracking facilities are turned on, The
            Winning Bid will keep track of the amount of cash in  the  auc-
            tion's  till  (not  including checks and credit card slips) and
            will prevent sellers from closing until there  is  enough  cash
            available  to pay them. If cash tracking is turned off, sellers
            are assumed to be paid by check and their closure is  permitted
            without  regard  to  the  amount  of cash in the till. The cash
            tracking field is a single-character field which should contain
            either a "Y" or an "N".

         Starting  Cash Amount. When cash tracking is used, The Winning Bid
            needs to know the starting amount of money in your cash box. If
            money  is  withdrawn from (or added to) the cash box during the
            auction for reasons other than to pay sellers or  collect  from
            buyers,  an adjustment can be made in the starting cash amount,
            even in the middle of the  auction.   If  you  don't  know  the
            starting  cash  amount  now,  enter  any number (i.e. zero) and
            change it later. The starting cash amount field is 7  positions
            long. Enter dollars and cents, but do not use a dollar sign ($)
            or commas.

         Seller Close Control.  When seller close control is turned on, The
            Winning  Bid  will  not permit sellers to close out and collect
            their money until all of their lots have been sold (or at least
            until  the  auctioneer has tried to sell them) and until all of
            the buyers of their lots have closed out  and  paid.  Should  a
            buyer  fail  to  pay up, the merchandise can be reclassified as
            unsold and can be returned to the seller providing  the  seller
            has not already been paid. In an auction where cash is handled,
            this facility protects the organization from buyers who "disap-
            pear" without paying their bill. The seller close control field
            is a single-character field which should contain either  a  "Y"
            or an "N".

         Commission  Rate.  Different sellers can be charged different com-
            mission rates, which are entered as part of  the  seller  entry
            process  (not  as part of set up).  The commission rate entered
            here is simply the default rate, used to simplify  seller  data
            entry.  The commission rate field is a 4-position numeric field
            which should contain the rate as a percentage ("10" indicates a
            ten  percent  commission;  ".10"  indicates a one-tenth percent
            commission). Do not enter the percent sign (%).

         Tax Rate.  If sales tax is to be collected, enter  the  sales  tax
            rate  as  a  percentage ("5" indicates five percent; ".5" indi-
            cates a half of one percent). Do not  enter  the  percent  sign
            (%). The tax rate field is a 4-position numeric field.









                                 Page IV-4





                              The Winning Bid
                                Version 1.3
                                User Manual

         Auction-wide  Minimum  Bid.   Minimum  bids are established by the
            sellers (if you let them) on a lot-by-lot basis.   In  addition
            to  the  seller's  minimums,  you can establish an auction-wide
            minimum bid.  The minimum bid used in the auction  and  printed
            on  lot tags and in reports will be the greater of the auction-
            wide minimum bid and the seller's minimum  bid  for  each  lot.
            This  minimum  bid is used for lot valuation prior to sale, and
            to issue warnings when the sale amount is too small.  The mini-
            mum bid field is 7 positions long. Enter dollars and cents, but
            do not use a dollar sign ($) or commas.

         Color.  If your CRT is capable of supporting color, enter "Y".  If
            not,  enter "N". {Under some circumstances it may be preferable
            to define a monochrome CRT which supports graphics as  a  color
            CRT and then, in screen 3, select black and white as the colors
            used. Experiment if you wish.}

     Screen 2 - Control Variable Maintenance (always displayed)

         Name and Address on Paddles.  The Winning Bid  is  able  to  print
            paddles  for  buyers to display to the auctioneer when a bid is
            accepted and must be recorded.  As a recommended  option  (con-
            trolled  by  this  field),  The  Winning  Bid can provide blank
            spaces on the paddle for the buyer to write his  or  her  name,
            address,  and telephone number. The name-and-address-on-paddles
            control field is one-position long.  A "Y" will cause the blank
            fields to be printed.

         Rules on Paddles. On the same paddles, The Winning Bid can print a
            set of rules for the auction.  The rules can be of your design,
            entered through a text editor.  The rules-on-paddles field must
            contain a "Y" if the rules are to be printed.

         Rules File Name. If rules are to be printed on  the  paddle,  this
            field must contain the fully-qualified DOS name for a text file
            which contains the rules text.  Follow standard DOS naming con-
            ventions  in completing this twelve-character field.  If you do
            not want rules printed on the paddles, you may leave this field
            blank or enter an "N".

            {The  rules  file itself must be created outside of The Winning
            Bid.  Almost any word processor or text editor may be  used  so
            long  as  it  is capable of saving text in an ASCII file.  When
            the name of this file is given to The Winning Bid, the first 70
            characters on each of the first eight lines will be used on the
            buyer's paddles. The rules file must be saved  along  with  the
            software in the default directory on the default disk drive.}

         Tags  In-line or Batch. Lot tags are printed by The Winning Bid as
            part of the seller and merchandise lot entry process.  The tags
            can  be printed one-at-a-time as each lot is entered (so-called
            "in-line"), or can  be  printed  in  a  group  along  with  the
            seller's  receipt  after entry of the last merchandise lot. The
            in-line procedure may be preferable at times because data entry
            can occur simultaneously with the physical tagging of the mate-

                                 Page IV-5





                              The Winning Bid
                                Version 1.3
                                User Manual

            rial. Under other circumstances, such as the pre-entry of  mer-
            chandise before the auction when you do not have a printer con-
            nected to your computer, the batch option may be better because
            it will allow data entry without a tag printer connected to the
            system. Enter an "I" or a "B" in this field.

         Minimum Bid on Tags. Lot tags printed in the process of seller and
            lot entry show the lot number and a description of the merchan-
            dise.  In addition, at your discretion, they  can  include  the
            minimum  bid  amount.  Depending on specific auction procedures
            and your assessment of buying psychology, it may or may not  be
            wise to include minimum bids on the tags. If, however, the auc-
            tioneer is selling from the information on the  tags  (as  many
            will  do),  remember that he also needs to know about minimums.
            The minimum bid amount shown on the tag is the  larger  of  the
            seller's  minimum  bid  and  the  auction-wide  minimum.  Enter
            either a "Y" or an "N" in this field.   (Preprinted  tags  pro-
            duced  from  option  3 on the main menu are not affected by the
            content of this field;  tags  produced  during  the  seller/lot
            entry process from option 4 on the main menu are.)

         Tag Printer Port. This is the DOS port to which the tag printer is
            attached.  Enter "1", "2", or "3",  corresponding  respectively
            to  LPT1,  LPT2,  and LPT3.  The entry of "0" tells The Winning
            Bid that there will be no tag printer.

         Tag Eject (tags). After printing a batch of tags, The Winning  Bid
            is  able  to  eject  one  or  more tags so you can tear off the
            printed ones.  The number of (rows  of)  tags  required  to  be
            ejected  depends  on  the printer used and may be entered here.
            Zero is a valid entry.  The tag eject is not used when tags are
            produced "inline".

         Report  Printer  Port.  This  is  the DOS port to which the report
            printer is attached.  Enter "1",  "2",  or  "3",  corresponding
            respectively  to  LPT1, LPT2, and LPT3.  The entry of "0" tells
            The Winning Bid that there will be no report printer.

         Report Eject (pages). After printing a report, The Winning Bid  is
            able to eject one or more pages so you can tear off the printed
            ones. The number of pages required to be ejected depends on the
            printer used and may be entered here.  Zero is a valid entry.

            If  you  wish to operate The Winning Bid with a single printer,
            set the report printer port and the tag  printer  port  to  the
            same  value. See the description of screen 4 for further infor-
            mation on how to make this work for you.









                                 Page IV-6





                              The Winning Bid
                                Version 1.3
                                User Manual

         {If you have a serial printer and wish to use it with The Winning
         Bid,  the DOS MODE command can redirect output from a parallel to
         a serial port.  Try this:}

              {1. Before starting The Winning Bid, type the  following  DOS
                 commands:

                 A> MODE COM1:24,E,7,1,P
                 A> MODE LPT2:=COM1:

                 MODE is a DOS command.  Look for a program called MODE.EXE
                 on your DOS diskette.  The examples given  assume  that  a
                 serial  printer is connected to port COM1 and that nothing
                 else is connected to port LPT2. Some  parameters  such  as
                 speed,  parity, etc.  may have to be adjusted.  Read about
                 the MODE command in your DOS manual.}

              {2. Now run The Winning Bid.  In setup option, tell The  Win-
                 ning  Bid  that  the printer is connected to LPT2.  Use of
                 the MODE command redirects output from LPT2 to COM1.


     Screen 3 - Colors (displayed only if you specified a color screen)

         Screen four is presented only if you specified that  you  have  a
         color  CRT  on  screen 1.  Screen four works differently than the
         others.  A grid of sample foreground  and  background  colors  is
         displayed.   A  box  which serves as a cursor is drawn around the
         color combination now in use. You may use the cursor control keys
         (the  arrows  on the numeric keypad) to move the box to the color
         combination you want.  When you have made your  selection,  press
         Esc to progress to the next screen.


     Screen 4 - Tag Stock Descriptors (always displayed)

         Lot  tags are assumed to be printed on label stock.  Depending on
         the merchandise to be sold, any of a variety of label shapes  and
         sizes may be appropriate.  The tag stock descriptors allow you to
         tell The Winning Bid what your tags will  look  like  so  it  can
         print them correctly.

         Number  of  Tags  Across.   The  Winning Bid can print lot tags on
            either 1-up or 2-up stock.  Enter either a 1 or  a  2  in  this
            field.

         Tag  Height.  The  tag  height  field  contains  the height of the
            printed area of the tag measured  in  lines  of  print.  To  be
            effective,  tags  should  be  at least 3 lines high, which will
            allow the printing of the auction name, lot number and  minimum
            bid,  plus  one line of the description.  Since The Winning Bid
            limits merchandise lot descriptions to 10  lines,  the  maximum
            tag height allowed is 12 lines.



                                 Page IV-7





                              The Winning Bid
                                Version 1.3
                                User Manual

         Tag  Width.  The tag width field contains the width of the printed
            area of the tag measured in characters.   Most  printers  print
            ten  characters  per  inch.  The Winning Bid limits merchandise
            lot description lines to 48 characters each, so the  tag  width
            should be entered as 48 or less.

         Tag  Separation. Tag separation is the number of blank lines which
            should be printed between the completion of  one  tag  and  the
            start  of  the  next.  The sum of this field and the tag height
            field should equal the distance between the start  of  one  tag
            and the next (probably figuring at six lines per inch).

         First  Tag  Starting Column. Enter the printer column number where
            the printed area of the leftmost (or only) tag should start.

         Second Tag Starting Column. Enter the printer column number  where
            the printed area of the rightmost tag should start. If tags are
            1-up, this field is ignored.

         {It may be appropriate to use 3x5 cards for lot tags.  3x5  cards
         are  generally  available  in pin-feed form and can be handled by
         most printers.  To center a lot tag on  a  3x5  card,  enter  the
         above descriptors as 1, 12, 40, 6, 6, and 0 respectively.}

         {If  you want to operate with a single printer, one way to elimi-
         nate the need for the second printer is  to  print  lot  tags  on
         ordinary  8 1/2 by 11 paper. To print one lot tag per page, enter
         the above descriptors as 1, 12, 48, 54, 17, and  0  respectively.
         To  print  two  lot tags per page, enter 1, 12, 48, 21, 17, and 0
         respectively.  To print three lot tags per page, enter 1, 12, 48,
         10,  17,  and  0  respectively.   To print six lot tags per page,
         enter 2, 12, 38, 10, 1, and 41, respectively. Other  combinations
         are  possible.  Of  course,  the  printing  of multiple tags on a
         single page assumes that you will cut the page apart  with  scis-
         sors or a knife after printing is complete.}

         {Tag descriptors can be changed at any time during auction prepa-
         ration and operation.  However, as merchandise lots are  entered,
         the  description  field provided is sized to fit the tag stock as
         The Winning Bid understands it at that time. For best use of your
         tags,  you  should  establish the tag descriptors before entry of
         the first lot.  If  circumstances  require  that  you  later  use
         larger  or smaller tags, the description fields will be truncated
         or blank-filled as necessary.}

     The set up process may be re-run at any time (even in the middle of an
     auction),  providing the cautions shown above are remembered. This can
     be handy if, for instance, a printer breaks down or  if  you  find  an
     error in the configuration.







                                 Page IV-8





                              The Winning Bid
                                Version 1.3
                                User Manual


                    Main Menu option 3: Print Paddles & Tags

     Both  buyer's  paddles  and  lot tags may be printed in advance of the
     auction.  Advance printing of paddles  is  recommended  because  print
     time  is significant and buyers will not want to stand in line to wait
     for the printing.  Advance printing of lot tags, however, is not  gen-
     erally  recommended  because  descriptive information and minimum bids
     will necessarily be absent. A more complete lot tag can be printed  as
     part  of  the seller and lot entry process. See main menu option 4 for
     more details.

     To print either buyer's paddles or advance lot tags, select the  Print
     Paddles & Tags option from the main menu by pressing F3.

     You will be prompted:

                          Do You Want Paddles (Y/N)

     {Paddles  are  only available through buyer number 999 due to physical
     space restrictions on the printed paddle.  If you want  to  use  buyer
     numbers above 999, you may do so (up to the system limit of 9999), but
     preprinted paddles will not be available.}

     {Paddles are printed on the  report  printer.   They  do  not  involve
     graphics and therefore do not require a graphics printer.}

     Press  either  the  "Y"  to  print  paddles, or the "N" to skip paddle
     printing. You will then be prompted for the first and last buyer  num-
     ber  to  be  printed.  If you change your mind and decide not to print
     paddles, press escape (Esc) and The Winning Bid will jump to  lot  tag
     printing.

     After  entry  of  the last buyer number to be printed, The Winning Bid
     will attempt to print the paddles.  Possible  error  conditions  which
     could arise include:

         Printer  Not  Responding  -  Correct  Problem and Press Any Key or
            Press Esc to Abort. This error is typically caused  by  printer
            hardware or communications problems.  Check for a loose printer
            cable.  If nothing is apparent, press any key and let The  Win-
            ning  Bid  try  again.  Sometimes transient electrical noise on
            the printer cable can trigger the  message.   If  that  doesn't
            work, try turning the printer off and on again after a few sec-
            onds' pause. If in fact the problem cannot be corrected and you
            need  to  proceed  with  the  auction,  press  Esc to abort the
            report.

         Printer Out of Paper - Correct Problem and  Press  Any  Key.  Note
            that  some  printers  will not communicate paper outages to The
            Winning Bid. In some cases, these printers will simply continue
            to  print  on the roller; in other cases they will issue a hard
            error (above).



                                 Page IV-9





                              The Winning Bid
                                Version 1.3
                                User Manual

         Rules File Not Found - Printing Without It.  If you  are  printing
            auction  rules  on the paddle, the rules file which you created
            with an editor or word processor must be on the  default  drive
            and in the default directory.

     When the printing of paddles is complete, you will be prompted:

                          Do You Want Lot Tags (Y/N)

     {Lot  tags printed with this option show only the auction name and the
     lot number. Because they are  designed  for  printing  in  advance  of
     seller  and  lot entry, they do not include either lot descriptions or
     minimum bids. A more complete lot tag can be printed as  part  of  the
     seller  and  lot  entry  process.  See  main  menu  option  4 for more
     details.}

     {Lot tags are printed on the tag printer.}

     Press either the "Y" to print tags, or the "N" to skip  tag  printing.
     You  will  then  be  prompted for the first and last tag numbers to be
     printed.  If you change your mind and decide not to print tags,  press
     escape (Esc) and The Winning Bid will return to the main menu.

     After entry of the last tag number to be printed, The Winning Bid will
     attempt to print the tags.   Possible  error  conditions  which  could
     arise include:

         Printer  Not  Responding  -  Correct  Problem and Press Any Key or
            Press Esc to Abort. See description above.

         Printer Out of Paper - Correct Problem  and  Press  Any  Key.  See
            description above.

     When the printing of lot tags is complete, you will be returned to the
     main menu.

     Lot tag samples appear below; a paddle sample is on the next page.


    +-----------------------------+  +----------------------------+
    |        Auction Name         |  +        Auction Name        |
    |          Lot 123            |  |          Lot 124           |
    |                             |  |                            |
    |                             |  |                            |
    +-----------------------------+  +----------------------------+

                       Figure IV - 1: Preprinted Lot Tags









                                Page IV-10





                              The Winning Bid
                                Version 1.3
                                User Manual

 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XX                                                                       XX
XX                            AUCTION NAME                               XX
XX                                                                       XX
XX             XX       XXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXX            XX
XX            XXX      XXXXXXXXXXXXXXXXXX   XXXXXXXXXXXXXXXXXX           XX
XX           XXXX      XX              XX   XX              XX           XX
XX          XXXXX      XX              XX   XX              XX           XX
XX             XX                      XX                   XX           XX
XX             XX                     XX                    XX           XX
XX             XX                   XX                    XX             XX
XX             XX                 XX                    XX               XX
XX             XX               XX                      XX               XX
XX             XX             XX                          XX             XX
XX             XX           XX                              XX           XX
XX             XX         XX                                XX           XX
XX             XX       XX                                  XX           XX
XX             XX      XX                                   XX           XX
XX             XX      XX                   XX              XX           XX
XX             XX      XX                   XX              XX           XX
XX          XXXXXXXX   XXXXXXXXXXXXXXXXXX   XXXXXXXXXXXXXXXXXX           XX
XX          XXXXXXXX   XXXXXXXXXXXXXXXXXX    XXXXXXXXXXXXXXXX            XX
XX                                                                       XX
XX                                                                       XX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Rules of the Auction:

    1) All merchandise is sold as-is and where-is.  There are NO
       WARRANTIES.
    2) Buyers may close out at any time by surrendering their paddles and
       paying for their merchandise. Cash, check (with ID), Visa, or
       MasterCard accepted.
    3) Sellers may close out and receive payment at any time AFTER the
       buyers of their merchandise have closed and have paid.  Surrender
       your receipt to close.

                    --------------- TEAR HERE ---------------

                                 Buyer No.  123

                    Name    ________________________________

                    Address ________________________________

                            ________________________________

                    City    ________________________________

                    State   _______________  ZIP  __________

                    Phone   (_____)_________________________


                                Page IV-11





                              The Winning Bid
                                Version 1.3
                                User Manual


                     Main Menu option 4: Enter Sellers/Lots

     The entry of seller and merchandise lot information may be done as far
     in  advance  of  the auction as necessary.  In a typical auction, some
     merchandise will be known in advance.  In addition, sellers  and  mer-
     chandise will arrive prior to, and depending on house rules, even dur-
     ing the auction. Press F4 from the main menu and you will be presented
     with  the  seller  and  lot  entry screen. This screen is divided into
     three areas for prompts, data entry and messages, for seller  informa-
     tion, and for lot information respectively.

     The subfunctions of seller and lot entry are reached through commands.
     The main prompt is:

                   Command (Add/Find/Modify/Delete/Report):

     In response to this prompt, you may issue  any  of  ten  single-letter
     commands.   The  Winning Bid responds to your commands without waiting
     for you to press the enter key.  The commands are:

         Esc (escape), when pressed in response to the main prompt, returns
            you  to  the main system menu. {Escape works differently in the
            subfunctions.  See the descriptions below.}

         PgUp will display the previous seller and the first lot  for  that
            seller.

         PgDn  will  display  the  next  seller  and the first lot for that
            seller.

         Up Arrow (on the numeric keypad) will display the previous lot for
            the seller currently displayed.

         Down  Arrow  (on the numeric keypad) will display the next lot for
            the seller currently displayed.

            {In the seller display box and in the lot  display  box,  small
            arrows appear when there are previous/next sellers and/or lots.
            These arrows are there to remind you that there are other sell-
            ers  and/or  lots  and  to  tell  you when the four paging keys
            described above are active.}

            {If the four paging keys don't work when arrows appear  on  the
            screen, try pressing the NumLock key to enable them.}

         The "A" key is used for ADDING both sellers and lots. After press-
            ing the "A" key, you are asked whether  you  want  to  enter  a
            seller or a lot.  Press "S" or "L".

              The  "S"  key  initiates  the addition of a new SELLER to the
                 data  base.  You  are  prompted  for  the  seller's  name,
                 address,  city,  state, zip code, phone number and commis-
                 sion rate.


                                Page IV-12





                              The Winning Bid
                                Version 1.3
                                User Manual

                 The commission rate defaults to the value  entered  during
                 the  setup  process.  Press enter to accept this value, or
                 type in a  different  value.  The  commission  rate  field
                 should  contain the rate as a percentage ("10" indicates a
                 ten percent commission; ".10" indicates a  one-tenth  per-
                 cent commission). Do not enter the percent sign (%).

                 Throughout the process, you can back out at any point with
                 the Esc (escape) key.  Seller additions are not  committed
                 to  the  data  base  until  you have responded to the last
                 prompt.

                 {If you choose not to  record  seller's  addresses  and/or
                 phone  numbers,  simply  press enter at each prompt.  This
                 practice is not recommended, but can be used if you  judge
                 it advisable.}

              The  "L"  key initiates the addition of a new merchandise LOT
                 to the data base.  You are prompted for the seller's  num-
                 ber  (the  seller currently displayed on the screen is the
                 default - just press enter to accept it).  After entry  of
                 the seller number, you are prompted for the seller's mini-
                 mum bid and up to ten lines of description, one at a time.
                 After entry of the last description line, press enter once
                 again (thus entering a blank description line)  to  return
                 to the main prompt.

                 You  can  back  out  of  the  lot-add process with the Esc
                 (escape) key at any time prior to pressing the  enter  key
                 after  keying the first line of description. Lot additions
                 are not committed to the data base prior to that point.

                 If you have specified in the set up process that lot  tags
                 are  to  be produced in-line, a lot tag will automatically
                 print on the tag printer after entry of  each  merchandise
                 lot.   If  the  lot  tag stock is specified as 2-across, a
                 pair of tags will print following every second lot  entry.
                 If  an  odd  number  of tags are needed, the last tag will
                 print when the Esc key is  used  to  exit  the  seller/lot
                 entry process and return to the main menu.

                 Sample copies of lot tags appear following the description
                 of the Report function.

                 {You must enter the seller before you can enter his or her
                 merchandise  lots.  Likewise,  you  cannot  enter lots for
                 deleted sellers.}

                 {The length of the  individual  lot  description  line  is
                 determined by the size of the tag as it was entered in the
                 set-up process, subject to a system maximum of 48  charac-
                 ters.   Regardless  of the length of the description line,
                 there can be no more than ten  lines  of  description  for
                 each lot.}


                                Page IV-13





                              The Winning Bid
                                Version 1.3
                                User Manual

         The  "F" key is used to FIND and display either a seller or a mer-
            chandise lot. After pressing the "F" key, you are asked whether
            you want to find a seller or a lot.  Press "S" or "L".

              The  "S"  key  is  used to find a SELLER's record on the data
                 base and display it along with  the  first  lot  for  that
                 seller.  You are prompted for the seller's name or number.
                 If you know the number,  key  it  without  any  extraneous
                 characters and The Winning Bid will locate and display the
                 record.  If you don't know the number,  key  the  seller's
                 name or a portion of it, and a search will be made.

                 {The  search  is made only in the seller's name field (not
                 in any of the address fields); The  Winning  Bid  searches
                 for the appearance of the characters you keyed anywhere in
                 the field.  Keying "PAT", therefore, will  result  in  the
                 display  of both "Pat Smith" and "Bob Patterson".  (Keying
                 "BILL" will not, of course, find "William Jones".)}

              The "L" key is used to find a LOT record on the data base and
                 display it along with the appropriate seller's record. You
                 are prompted for the lot's number or  a  fragment  of  its
                 description.  If  you  know the number, key it without any
                 extraneous characters and The Winning Bid will locate  and
                 display the record.  If you don't know the number, key one
                 or more important words from the description and a  search
                 will be made.

                 {The search is made through all existing description lines
                 for every lot on file until a match is found.  The search,
                 however,  considers  each  description line separately and
                 will not, therefore, find two words if they exist on  dif-
                 ferent  description  lines.  Find is best used on one word
                 or a fragment of a word.}

            Both find functions (seller and lot) will search until a  match
            is  made  (or  until  the  end of the file is reached).  If the
            search was not successful, a "Not Found" message  appears.   If
            the  search is successful, the first appropriate record is dis-
            played with a "Continue (Y/N)" message. Press  "Y"  or  "N"  to
            indicate whether or not you want to search for another matching
            record.

            Following completion, you are returned to the main  prompt  and
            may continue with other commands.

            {All  searches  are  insensitive to case.  Everything is tempo-
            rarily converted to upper case before making comparisons.}








                                Page IV-14





                              The Winning Bid
                                Version 1.3
                                User Manual

         The "M" key is used for changing or MODIFYING data on both sellers
            and  lots.   After  pressing the "M" key, you are asked whether
            you want to modify a seller or a lot.  Press "S" or "L".

            The seller/lot modified is the one currently  being  displayed.
            Use  the  PgUp and PgDn, the Up and Down Arrows and/or the Find
            function to display the lot to be changed before  pressing  the
            "M" key.

              The  "S"  key  initiates  a  change  to  the current SELLER's
                 record. You are presented with the seller's name, address,
                 city,  state,  zip  code, phone number and commission rate
                 and may modify them, or may simply press enter  to  accept
                 them as they exist.

                 Throughout the process, you can back out at any point with
                 the Esc (escape) key.  Seller changes are not committed to
                 the data base until you have responded to the last prompt.

              The  "L"  key  initiates  a change to the current merchandise
                 LOT. You are presented with the seller's minimum  bid  and
                 each line of description. You may modify them, or may sim-
                 ply press enter to accept them as they exist.

                 You can back out of the lot modification process with  the
                 Esc  (escape)  key at any time prior to pressing the enter
                 key after rekeying the  first  line  of  description.  Lot
                 changes  are  not committed to the data base prior to that
                 point.

                 {Modification of lots which have been grouped  with  other
                 lots or of lots which have been sold is not permitted.  If
                 you must modify a grouped (but  unsold)  lot,  ungroup  it
                 first,  then  modify  it  and  regroup it.  Ungrouping and
                 grouping can be done from the live auction screen.  If you
                 must  modify  a  sold lot, unsell it first, then modify it
                 and resell it.  Unselling and reselling can be  done  from
                 either  the silent or live auction screens. Unselling, and
                 reselling is not permitted after buyers have closed on the
                 theory  that they have paid their bill and the transaction
                 is final. Ungrouping, however, is permitted.}

         The "D" key is used for DELETING  both  sellers  and  lots.  After
            pressing  the "D" key, you are asked whether you want to modify
            a seller or a lot.  Press "S" or "L".

            The seller/lot deleted is the one  currently  being  displayed.
            Therefore, use the PgUp and PgDn, the Up and Down Arrows and/or
            the Find function to display the lot or seller  to  be  deleted
            before pressing the "D" key.






                                Page IV-15





                              The Winning Bid
                                Version 1.3
                                User Manual

              The  "S" key deletes the current SELLER's record and all mer-
                 chandise  lots  associated  with  that  seller.  You   are
                 prompted  for  and  must  type  the  word "DELETE" in full
                 before the deletion occurs.  If  you  type  anything  else
                 (i.e. the word "KEEP") or simply push the Esc or the enter
                 key, no deletion will occur.

                 {The Winning Bid will not delete a seller if any of his or
                 her  lots  have been sold.  However, if the seller has not
                 closed, it will delete all lots which have not been  sold.
                 Sellers  with  grouped (but not sold) lots can be deleted.
                 All lots in the group  will  be  deleted  along  with  the
                 seller.  Groups  are limited to lots belonging to an indi-
                 vidual seller.}

              The "L" key deletes the  current  merchandise  LOT.  You  are
                 prompted  for  and  must  type  the  word "DELETE" in full
                 before the deletion occurs.  If  you  type  anything  else
                 (i.e. the word "KEEP") or simply push the Esc or the enter
                 key, no deletion will occur.

                 {The Winning Bid will not delete a  lot  if  it  has  been
                 grouped  with  other  lots or if it has been sold.  If you
                 must delete a grouped (but unsold) lot, ungroup it  first,
                 then  delete it. Ungrouping can be done from the live auc-
                 tion screen. If you must delete  a  sold  lot,  unsell  it
                 first,  then  delete it. Unselling can be done from either
                 the silent or live auction screens,  providing  the  buyer
                 has not closed.}

         The  "R" key is used to print the Seller's Claim Check REPORT. You
            are prompted for the seller's name or number and the report  is
            printed on the report printer. If you have specified in the set
            up process that lot tags are to be  batch-produced,  they  will
            automatically  print on the tag printer after completion of the
            claim check. Sample copies of the Seller's Claim  Check  report
            and the corresponding lot tags appear on the following pages.

            {Reports  and lot tags are not available for deleted sellers or
            deleted lots.}

            {Reports are also not available on disabled printers.  Printers
            are  disabled  when  The Winning Bid is unable to establish and
            maintain communications with them.  Remember that if a  printer
            problem  exists  when  you  start The Winning Bid, that printer
            will remain disabled (and The Winning Bid will not  attempt  to
            use  it)  until  you either pass through the set up function or
            you stop and restart The Winning Bid.  The startup process  and
            the  set up process are the only two times when disabled print-
            ers are tested and can be re-enabled.  On the other hand, if  a
            printer fails (or runs out of paper) during operation, The Win-
            ning Bid will pause and wait for you to fix  the  problem.   If
            you  succeed in fixing it, the printer will not be disabled and
            reports/tags will be available.}


                                Page IV-16





                              The Winning Bid
                                Version 1.3
                                User Manual

                             Seller's Claim Check
                                 Auction Name
                                  02-06-1988

R. W. Jones                                          Seller No.  2
250 Main St., Suite 125
Lawrence                         KS 70204

 Lot No.  Description                                       Min. Bid
 -------  ------------------------------------------------  --------
     5    Oak dining table and 4 chairs                        25.00
          with two leaves
     6    6 folding chairs                                      0.00
     7    Harden sofa, 3 pillows                               40.00
     8    Set of 3 occasional tables                           25.00
          cherry
     9    Antique marble-top dresser                            0.00
    10    Small 7-drawer desk                                   0.00
    11    RCA color TV                                          0.00
    12    Weber upright piano                                   0.00
    13    4 bar stools                                          0.00
    14    Box of miscl. kitchen implements                      0.00
    15    Box of stoneware dishes                               0.00
    16    Box of pots and pans                                  0.00
    17    Box of serving implements                             0.00
    18    Box of Corning ware                                   0.00
    19    Set of sterling silverware                           50.00
          includes 9 serving pieces
          plus service for 8 - complete
    20    Stamp collection - 2 boxes                            0.00
    21    Black and chrome desk                                 0.00
    22    Two desk chairs                                       0.00
    23    7" Sears radial arm saw                               0.00
    24    Black & Decker sabre saw                              0.00
    25    Black & Decker 3/8" drill                             0.00
    26    Black & Decker circular saw                           0.00
    27    Box of hand tools                                     0.00
    28    Sears lawn mower                                      0.00
    29    Jacobsen 8 HP snow blower                             0.00
    30    Nine boxes of books                                   0.00
    31    Sears washing machine                                 0.00
    32    Sears dryer                                           0.00








                         Figure IV - 3: Seller's Receipt





                                Page IV-17





                              The Winning Bid
                                Version 1.3
                                User Manual

+-------------------------------+  +------------------------------+
|                               |  |                              |
|         Auction Name          |  |          Auction Name        |
|     Lot No 5  Min Bid 25.00   |  |      Lot No 6  Min Bid 1.00  |
| Oak dining table and 4 chairs |  |  6 folding chairs            |
| with two leaves               |  |                              |
|                               |  |                              |
+-------------------------------+  +------------------------------+

+-------------------------------+  +------------------------------+
|                               |  |                              |
|         Auction Name          |  |          Auction Name        |
|     Lot No 7  Min Bid 40.00   |  |      Lot No 8  Min Bid 25.00 |
| Harden sofa, 3 pillows        |  |  Set of 3 occasional tables  |
|                               |  |                              |
|                               |  |                              |
+-------------------------------+  +------------------------------+

+-------------------------------+  +------------------------------+
|                               |  |                              |
|         Auction Name          |  |          Auction Name        |
|     Lot No 9  Min Bid 1.00    |  |      Lot No 10  Min Bid 1.00 |
| Antique marble-top dresser    |  |  Small 7-drawer desk         |
|                               |  |                              |
|                               |  |                              |
+-------------------------------+  +------------------------------+








                            Figure IV - 4: Lot Tags





















                                Page IV-18





                              The Winning Bid
                                Version 1.3
                                User Manual


                       Main Menu option 5: Silent Auction

     Press F5 from the main menu and you will be presented with the  silent
     auction operation screen.  This screen is divided into three areas for
     1) system-maintained status information, 2) prompts,  data  entry  and
     messages, and 3) lot status information.

     The top section of the screen contains system-maintained status infor-
     mation.  If your set-up specifies cash tracking, the current  contents
     of  the  cash box is displayed with the legend "Cash Bal".  If you are
     not using cash tracking, this field does not appear.  The  next  field
     consists  of  the legend "Lots Sold" followed by two numbers separated
     by a slash.  The first of these numbers is the number  of  lots  which
     have  been sold (i.e. have a valid bid outstanding); the second is the
     number of lots which have not yet been sold.  The final field consists
     of  two  more numbers separated by another slash, following the legend
     "Dollars Sold".  The first of these numbers is  the  dollar  value  of
     lots  which  have  been  sold (i.e. have a valid bid outstanding); the
     second is the dollar value of lots which have not yet been sold.  Sold
     lots are valued at the actual current bid while lots not sold are val-
     ued at the higher of the two minimum bids.

     {Lot grouping is rare in silent auctions, but common in live auctions.
     Therefore,  it  is not supported from the silent auction function, but
     is supported from the live auction  function.   If  lots  are  grouped
     using  the  live  auction  capabilities and then the silent auction is
     run, you will find that lots grouped into another one  are  considered
     "sold"  for  purposes  of the "Lots Sold" fields in the top section of
     the silent auction screen. The "Dollars Sold" field will  continue  to
     include the minimum bid value of all lots in the not-sold-amount field
     since the minimum bid on a group of lots is considered to be  the  sum
     of the minimums for the individual lots.  The sold-amount in the "Dol-
     lars Sold" field will continue to be the sum of all actual bids.}

     When the silent auction screen is first displayed, the  third  section
     will  display  the merchandise lots beginning with lot number 1.  Five
     columns are shown: lot number, lot description, the minimum  bid,  the
     current  high  bid,  and  the number of the buyer who made the current
     high bid.

     {The minimum bid displayed is the lot-by-lot minimum bid, usually spe-
     cified  by sellers.  The auction-wide minimum bid is not considered in
     the display (but is  included  in  calculations)  because  auctioneers
     sometimes waive auction-wide minimums, but rarely are in a position to
     waive lot-by-lot minimums.  The display thus communicates the restric-
     tions on the auctioneer.}

     {When  one  lot  is  grouped  under another, the current bid column is
     replaced with the legend "With nnnn".  The value of nnnn is the number
     of  the lot under which this one was grouped.  At the extreme right of
     the screen, an asterisk designates lots which have other lots  grouped
     under them.}



                                Page IV-19





                              The Winning Bid
                                Version 1.3
                                User Manual

     The  subfunctions  of the silent auction are reached through commands.
     The main prompt is:

                    Command (Sell/Modify/Find/Close/Purge):

     In response to this prompt, you may issue any of  eight  single-letter
     commands.   The  Winning Bid responds to your commands without waiting
     for you to press the enter key.  The commands are:

         Esc (escape), when pressed in response to the main prompt, returns
            you  to  the main system menu. {Escape works differently in the
            subfunctions.  See the descriptions below.}

         Up Arrow (on the numeric keypad) will scroll the display  of  lots
            up. {The up arrow works only to the point where the last lot is
            displayed at the bottom of the screen.}

         Down Arrow (on the numeric keypad) will scroll the display of lots
            down.

         The "S" key is used to SELL a merchandise lot, or to record a bid.
            After pressing the "S" key, you are asked for a buyer number, a
            lot  number, and a bid amount. The buyer number defaults to the
            most recently-entered buyer number; to accept the default, sim-
            ply  press  enter.  If the specified buyer has closed, The Win-
            ning Bid will reject the sale with a warning message.  The  lot
            specified  must exist, the lot must not be deleted, and it must
            not be grouped under another lot. The  price  entered  must  be
            greater  than  the  current  high bid and greater than both the
            auction-wide minimum bid and  the  minimum  bid  for  the  lot.
            Finally,  the buyer who is bidding must not be the current high
            bidder.

            {If a buyer who is the current high bidder  wants  to  increase
            his bid, use the Modify function, described below.}

            {If  you are running the demo version of The Winning Bid, buyer
            numbers are limited to the values 1, 2, and 3.}

         The "M" key is used primarily  for  MODIFYING  or  correcting  key
            entry  errors.  After pressing the "M" key, you are asked for a
            lot number. The lot specified must exist, the lot must  not  be
            deleted, it must not be grouped under another lot, it must have
            an outstanding bid, and the buyer must not have closed. If  all
            these  conditions  are  met,  you  will be asked if you want to
            "Unsell" the lot.  Enter a "Y" or an "N" to respond.

            If you enter a "Y" to unsell the  lot,  The  Winning  Bid  will
            withdraw  the  current high bid, remove the buyer's number, and
            there will no longer be an outstanding bid on that lot.

            If you enter an "N", The Winning Bid will allow you to  specify
            a new price and/or buyer.  The price entered must be above both
            the auction-wide minimum bid and the lot-for-lot  minimum  bid.
            The new buyer must not be closed.

                                Page IV-20





                              The Winning Bid
                                Version 1.3
                                User Manual


            {If  you are running the demo version of The Winning Bid, buyer
            numbers are limited to the values 1, 2, and 3.}

         The "F" key is used to FIND a lot with  a  specified  description.
            After  pressing the "F" key, you are asked for a word or phrase
            to search for. Lots found to have this word or phrase in  their
            description  will  be displayed at the top of the third section
            of the screen, one at a time, unit you respond "N" or "Esc"  to
            the "CONTINUE (Y/N)?" prompt.

            {The  search  is not case sensitive; all fields are temporarily
            capitalized before searching.  Find considers each  description
            line  independent  of  all  others  and  is  not able to locate
            phrases which are split across multiple description lines.}

         The "C" key is used to CLOSE buyers and sellers.  The act of clos-
            ing  a buyer or seller implies that he or she has completed all
            auction activity and is prepared to settle accounts.  The  Win-
            ning  Bid,  therefore,  prints  a receipt/statement and forbids
            further buying and selling for that individual.  (Of course,  a
            new  buyer  and/or  seller  number  can be issued if the person
            wants to continue at a later time.)

            Upon pressing the "C" key, you are asked whether a buyer  or  a
            seller is to be closed:

              The "B" key designates the closing of a BUYER.  You are asked
                 to enter the buyer number.  The  buyer  must  have  bought
                 something, and must not already be closed.  If a buyer has
                 previously closed, his or her receipt  can  be  re-printed
                 using a report-only option (press "R").

                 After accepting the buyer's number, The Winning Bid calcu-
                 lates the amount due from the buyer and displays it with a
                 request  for  the  payment  type  (cash,  check, or credit
                 card). Enter the numeral 1,  2,  or  3  as  shown  in  the
                 prompt.   If  the cash-tracking feature is being used, the
                 payment type tells The Winning Bid whether or not  to  add
                 this  sale  to the cash box.  If not, entry of the payment
                 type is still recommended for historical purposes.

                 Upon entry of a valid payment type, The Winning  Bid  will
                 attempt  to  print  the  buyer's  receipt  on  the  report
                 printer.

              The "S" key designates the closing  of  a  SELLER.   You  are
                 asked  to  enter  the seller number.  The seller must have
                 lots associated with his record and must  not  already  be
                 closed.   If  a  seller  has previously closed, his or her
                 receipt can  be  re-printed  using  a  report-only  option
                 (press "R").

                 In  addition,  the seller's lots must all be sold (or must
                 have at least crossed the auction block).   If  the  close

                                Page IV-21





                              The Winning Bid
                                Version 1.3
                                User Manual

                 control  option  has  been selected in the set up process,
                 buyers of the seller's merchandise must have closed (indi-
                 cating  that  payment  has  been received).  A report-only
                 option allows these requirements  to  be  bypassed  and  a
                 report produced without actually closing the seller.

                 After  accepting the seller's number, The Winning Bid cal-
                 culates the amount due to the seller and displays it  with
                 a request for the payment type (cash or check only in this
                 case). If the cash tracking option is in use and  if  pay-
                 ment is to be made in cash, the seller will not be allowed
                 to close unless there is enough cash in the till  to  make
                 the payment.

                 Upon  entry  of a valid payment type, The Winning Bid will
                 attempt to  print  the  seller's  receipt  on  the  report
                 printer.

            Possible  error  conditions  which  could  arise  during report
            printing include:

              Printer Not Responding - Correct Problem and Press Any Key or
                 Press  Esc  to  Abort.  This  error is typically caused by
                 printer hardware or communications problems. Check  for  a
                 loose  printer  cable.   If nothing is apparent, press any
                 key and let The Winning Bid try again. Sometimes transient
                 electrical noise on the printer cable can trigger the mes-
                 sage.  If that doesn't work, try turning the  printer  off
                 and  on  again  after a few seconds' pause. If in fact the
                 problem cannot be corrected and you need to  proceed  with
                 the auction, press Esc to abort the report.

              Printer  Out  of  Paper  - Correct Problem and Press Any Key.
                 Note that some printers will not communicate paper outages
                 to  The  Winning  Bid.  In some cases, these printers will
                 simply continue to print on the  roller;  in  other  cases
                 they will issue a hard error (above).

            Sample  Buyer's  and  Seller's receipts appear on the following
            pages.

         The "P" key PURGES or removes from the data base all  bids  except
            those  made by buyers who have closed.  This clears the way for
            a live auction by eliminating buyers who did  not  show  up  to
            settle  their  accounts after completion of the silent auction.
            DO NOT "PURGE" UNTIL ALL SILENT  AUCTION  BUYERS  HAVE  CLOSED.
            DATA IS DESTROYED.

            The  purge  process  is preceded by a double-check to make sure
            you really want to purge bids.  When authorized, the process is
            fully automatic.





                                Page IV-22





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name

                                 Receipt Page  1

                                Payment by Check

                                  Buyer No.  14

 Lot  Description                                          Bid Amt
----  --------------------------------------------------  --------
  39  Box of costume jewelry                                  5.00
  31  Sears washing machine                                  10.00
  24  Black & Decker sabre saw                               14.00
  15  Box of stoneware dishes                                 8.00
   3  Irish linen table cloth 48x84                          10.00
   2  Sterling carafe - no marks                            101.00
      very fine condition
                                                          --------
                             Total                          148.00
                             Tax at  5 %                      7.40
                                                          --------
                             Total                          155.40








                         Figure IV - 5: Buyer's Receipt
























                                Page IV-23





                              The Winning Bid
                                Version 1.3
                                User Manual


                                  Auction Name

                                 Receipt Page  1

                                Payment by Check

Seller No.  1
Mary Ellen Walker
12A 14th St.
Crestline                        OH 30327
412-498-2958

 Lot  Description                                          Bid Amt
----  --------------------------------------------------  --------
   1  Large Limoges floral bowl - chip                       23.00
      in bottom rim
   2  Sterling carafe - no marks                            101.00
      very fine condition
   3  Irish linen table cloth 48x84                          10.00
   4  Four assorted bolts of cloth:                           3.00
      2 cotton, 1 cotton velour,
      1 terry toweling
                                                          --------
                             Total                          137.00
                             Commission at  15 %             20.55
                                                          --------
                             Total                          116.45








                         Figure IV - 6: Seller's Receipt



















                                Page IV-24





                              The Winning Bid
                                Version 1.3
                                User Manual


                        Main Menu option 6: Live Auction

     Press  F6  from  the main menu and you will be presented with the live
     auction operation screen. This screen is divided into three areas  for
     1)  system-maintained  status  information, 2) prompts, data entry and
     messages, and 3) lot status information.

     The top section of the screen contains system-maintained status infor-
     mation.   If your set up specifies cash tracking, the current contents
     of the cash box is displayed with the legend "Cash Bal".  If  you  are
     not  using  cash tracking, this field does not appear.  The next field
     consists of the legend "Lots Sold" followed by two  numbers  separated
     by  a  slash.   The first of these numbers is the number of lots which
     have been sold (i.e. have a valid bid outstanding); the second is  the
     number of lots which have not yet been sold.  The final field, labeled
     "Dollars Sold", consists of two  more  numbers  separated  by  another
     slash.  The  first  of these numbers is the dollar value of lots which
     have been sold (i.e. have a valid bid outstanding); the second is  the
     dollar value of lots which have not yet been sold.  Sold lots are val-
     ued at the actual current bid while lots not sold are  valued  at  the
     higher of the two minimum bids.

     {When lots are grouped into other lots, they are considered "sold" for
     purposes of the "Lots Sold" field. The "Dollars Sold" field will  con-
     tinue  to  include  the minimum bid value of all lots in the not-sold-
     amount field since the minimum bid on a group of lots is considered to
     be  the  sum of the minimums for the individual lots.  The sold-amount
     in the "Dollars Sold" field will continue to be the sum of all  actual
     bids.  Because  grouping complicates the picture, it may not always be
     possible to add up the minimum bids on unsold lots in the  third  sec-
     tion of the live auction operation screen and arrive at the same total
     as shown in the "Dollars Sold" field.}

     When the live auction screen is first  displayed,  the  third  section
     will  display  the merchandise lots beginning with lot number 1.  Five
     columns are shown: lot number, lot description, the minimum  bid,  the
     current  high  bid,  and  the number of the buyer who made the current
     high bid.

     {The minimum bid displayed is the lot-by-lot minimum bid, usually spe-
     cified  by the seller.  The auction-wide minimum bid is not considered
     in the display (but is included in calculations)  because  auctioneers
     sometimes waive auction-wide minimums, but are rarely in a position to
     waive lot-by-lot minimums.  The display thus communicates the restric-
     tions on the auctioneer.}

     {When  one  lot  is  grouped  under another, the current bid column is
     replaced with the legend "With nnnn".  The value of nnnn is the number
     of  the lot under which this one was grouped.  At the extreme right of
     the screen, an asterisk designates lots which have other lots  grouped
     under them.}




                                Page IV-25





                              The Winning Bid
                                Version 1.3
                                User Manual

     The subfunctions of the live auction are reached through commands. The
     main prompt is:

                    Command (Sell/Group/Modify/Find/Close):

     In response to this prompt, you may issue any of  eight  single-letter
     commands.   The  Winning Bid responds to your commands without waiting
     for you to press the enter key.  The commands are:

         Esc (escape), when pressed in response to the main prompt, returns
            you  to  the main system menu. {Escape works differently in the
            subfunctions.  See the descriptions below.}

         Up Arrow (on the numeric keypad) will scroll the display  of  lots
            up.  The up arrow works only to the point where the last lot is
            displayed at the bottom of the screen.

         Down Arrow (on the numeric keypad) will scroll the display of lots
            down.

         The "S" key is used to SELL a merchandise lot, or to record a bid.
            After pressing the "S" key, you are asked for a lot  number,  a
            bid amount, and a buyer number.  The lot number defaults to the
            lot currently at the top of the third section  of  the  screen,
            but  you  are  allowed  to enter a different number, should the
            auctioneer decide to sell lots out  of  numeric  sequence.   To
            accept the default, simply press enter.

            The lot specified must be valid and not deleted. (Deletions are
            done through the seller/lot entry option.)  It must not be sold
            (i.e.  have  an  outstanding bid) and must not be grouped under
            another lot.

            Only final bids on each lot (those accepted by the  auctioneer)
            should be recorded.

            {If  a  lot  has been sold and must be re-sold, The Winning Bid
            requires that it first be "unsold".  Or,  if  a  lot  has  been
            grouped  and  must now be separated for sale by itself, it must
            first be  "ungrouped".   Both  topics  are  covered  under  the
            description of the "M" (modify) key, below.}

            The bid price entered must be for the lot. Don't enter per-unit
            price when the lot contains more than one  unit.   It  must  be
            greater than both the auction-wide minimum bid and the lot-for-
            lot minimum bid.  If the auctioneer waives a minimum  bid,  you
            may  enter a lower number and "force" The Winning Bid to accept
            it after the warning message appears by pressing the "A" key.

            Sales to closed buyers are not permitted.

            {If you are running the demo version of The Winning Bid,  buyer
            numbers are limited to the values 1, 2, and 3.}



                                Page IV-26





                              The Winning Bid
                                Version 1.3
                                User Manual

         The  "G"  key  is  used to group lots for sale as a single entity.
            When one lot is grouped "with" (or "under") another, the  first
            lot  is no longer available for sale.  The second lot's lot-by-
            lot minimum bid becomes the sum of the two  minimums  and  only
            the  second lot can be sold.  Multiple lots can be grouped in a
            "chain" simply by repeated use of the "G"  key.   One  or  more
            lots  can  later  be  removed from the group by "ungrouping", a
            sub-function of the "M" key.

            When the "G" key is pressed, you will be asked for two lot num-
            bers.   Both must be valid lots which have not been sold, which
            have no bids outstanding, and which have not been deleted.  The
            first  lot  entered  must  not already be grouped under another
            lot, but it can have other lots grouped under it. That  is,  it
            must  show  zeros in the bid column in the third section of the
            live auction screen. The second lot may be a member of a  group
            or  can have lots grouped under it or both. The two lots speci-
            fied must belong to the same seller  (because  grouping  across
            sellers  causes  problems with division of the proceeds).  And,
            finally, a lot may not be grouped with itself and the lots  may
            not form a circular grouping.

         The  "M"  key  is  used  primarily for MODIFYING or correcting key
            entry errors.  After pressing the "M" key, you are asked for  a
            lot  number.  The  lot  specified must exist and it must not be
            deleted.

              If the lot specified is a member of  a  group,  you  will  be
                 asked  if  you  want to "ungroup" it.  If you respond "Y",
                 the lot will be removed from its group and will  again  be
                 an  independent  lot,  available for sale.  If you respond
                 "N", you will be returned to the main prompt.   Ungrouping
                 is possible, even after the buyer has closed.

                 {If  you  "ungroup" a lot from a group that has been sold,
                 the lot removed from the group will be in "unsold"  status
                 while the remainder of the group (which may be one or more
                 lots) will continue to be in the "sold" status.}

              If the lot specified is not a member of a group, it must have
                 an outstanding bid, and the buyer must not have closed. If
                 all these conditions are met, you will  be  asked  if  you
                 want  to  "Unsell"  the  lot.   Enter  a  "Y" or an "N" to
                 respond.

                 If you enter a "Y" to unsell the lot, The Winning Bid will
                 withdraw the bid, remove the buyer's number and there will
                 no longer be an outstanding bid on that lot.

                 If you enter an "N", The Winning Bid  will  allow  you  to
                 specify  a new price and/or buyer.  The price entered must
                 be above both the auction-wide minimum bid  and  the  lot-
                 for-lot minimum bid.  The new buyer must not be closed.

                 {If  you  are running the demo version of The Winning Bid,

                                Page IV-27





                              The Winning Bid
                                Version 1.3
                                User Manual

                 buyer numbers are limited to the values 1, 2, and 3.}

         The "F" key is used to FIND a lot with  a  specified  description.
            After  pressing the "F" key, you are asked for a word or phrase
            to search for. Lots found to have this word or phrase in  their
            description  will  be displayed at the top of the third section
            of the screen, one at a time, unit you respond "N" or "Esc"  to
            the "CONTINUE (Y/N)?" prompt.

            {The  search  is not case sensitive; all fields are capitalized
            before searching.  Find considers each description  line  inde-
            pendent  of  all  others  and  is  not  able to locate words or
            phrases which are split across multiple description lines.}

         The "C" key is used to CLOSE buyers and sellers.  The act of clos-
            ing  a buyer or seller implies that he or she has completed all
            auction activity and is prepared to settle accounts.  The  Win-
            ning  Bid,  therefore,  prints  a receipt/statement and forbids
            further buying and selling for that individual.  (Of course,  a
            new  buyer  and/or  seller  number  can be issued if the person
            wants to continue at a later time.)

            Upon pressing the "C" key, you are asked whether a buyer  or  a
            seller is to be closed:

              The "B" key designates the closing of a BUYER.  You are asked
                 to enter the buyer number.  The  buyer  must  have  bought
                 something, and must not already be closed.  If a buyer has
                 previously closed, his or her receipt  can  be  re-printed
                 using the report-only option (press "R").

                 After accepting the buyer's number, The Winning Bid calcu-
                 lates the amount due from the buyer and displays it with a
                 request  for  the  payment  type  (cash,  check, or credit
                 card).  If the cash-tracking feature is  being  used,  the
                 payment  type  tells The Winning Bid whether or not to add
                 this sale to the cash box.  If not, entry of  the  payment
                 type is still recommended for historical purposes.

                 Upon  entry  of a valid payment type, The Winning Bid will
                 attempt  to  print  the  buyer's  receipt  on  the  report
                 printer.

              The  "S"  key  designates  the  closing of a SELLER.  You are
                 asked to enter the seller number.  The  seller  must  have
                 lots  associated  with  his record and must not already be
                 closed.  If a seller has previously  closed,  his  or  her
                 receipt  can  be  re-printed  using  a  report-only option
                 (press "R").

                 In addition, the seller's lots must all be sold  (or  must
                 have  at  least  crossed the auction block).  If the close
                 control option has been selected in the  set  up  process,
                 buyers of the seller's merchandise must have closed (indi-
                 cating that payment has  been  received).   A  report-only

                                Page IV-28





                              The Winning Bid
                                Version 1.3
                                User Manual

                 option  allows  these  requirements  to  be bypassed and a
                 report produced without actually closing the seller.

                 After accepting the seller's number, The Winning Bid  cal-
                 culates  the amount due to the seller and displays it with
                 a request for the payment type (cash or check only in this
                 case).  If  the cash tracking option is in use and if pay-
                 ment is to be made in cash, the seller will not be allowed
                 to  close  unless  there is enough cash in the till to pay
                 him or her.

                 Upon entry of a valid payment type, The Winning  Bid  will
                 attempt  to  print  the  seller's  receipt  on  the report
                 printer.

            Samples of these reports appear under Main Menu Option  5,  the
            silent auction.

            Possible error conditions which could arise during the printing
            of reports include:

              Printer Not Responding - Correct Problem and Press Any Key or
                 Press  Esc  to  Abort.  This  error is typically caused by
                 printer hardware or communications problems. Check  for  a
                 loose  printer  cable.   If nothing is apparent, press any
                 key and let The Winning Bid try again. Sometimes transient
                 electrical noise on the printer cable can trigger the mes-
                 sage.  If that doesn't work, try turning the  printer  off
                 and  on  again  after a few seconds' pause. If in fact the
                 problem cannot be corrected and you need to  proceed  with
                 the auction, press Esc to abort the report.

              Printer  Out  of  Paper  - Correct Problem and Press Any Key.
                 Note that some printers will not communicate paper outages
                 to  The  Winning  Bid.  In some cases, these printers will
                 simply continue to print on the  roller;  in  other  cases
                 they will issue a hard error (above).



















                                Page IV-29





                              The Winning Bid
                                Version 1.3
                                User Manual

                          Main Menu option 7: Reports

     In  addition  to the seller's claim check and the seller's and buyer's
     receipts, The Winning Bid provides several management  reports.  These
     reports  are  reached by pressing F7 which presents a subordinate menu
     listing the reports.  The reports are described below with samples and
     field-by-field descriptions.

     Although  these  reports  are intended for use after completion of the
     auction, they are available any time and will  correctly  reflect  the
     status of the auction whenever they are printed.

     Profit and Loss Statement

         The  Profit  and  Loss Statement (P&L) is produced by pressing F1
         from the reports sub-menu.  No further input is required.

         Fields included in the report are:

         a) Auction Name - The value stored in  the  set  up  auction  name
            field.
         b)  Lots  Handled  -  The total number of merchandise lots on file
            excluding those deleted.
         c) Value (at Minimum Bid) - The value of all merchandise  lots  on
            file  excluding those deleted, priced at the greater of the two
            minimum bids.
         d) Less Lots Grouped - The quantity and value of  all  lots  which
            were  grouped  into another lot.  A group of lots is considered
            to have as a minimum bid the greater  of  1)  the  sum  of  the
            seller's  minimum bids for the individual lots, and 2) the auc-
            tion-wide minimum bid for a single lot.  The effect  of  group-
            ing,  therefore,  is  only to reduce the total auction value by
            the auction-wide minimum bids, and only in cases where they are
            not  overruled  by  seller's  minima.   The  value  shown  here
            reflects that effect.
         e) Less Lots Not Sold - The quantity and value of all  lots  which
            have  not  been  sold  as  of the time of the report.  Lots not
            sold, for the purposes of this report, are lots which  have  no
            selling  price  recorded.  The value reported is the greater of
            the seller's minimum bid and the auction-wide minimum bid. When
            groups have not been sold, the value is the value of the group.
         f) Lots Sold - Items (b) and (c) less items (d) and (e).
         g)  Overbid Amount - The sum, for all lots sold, of the difference
            between the minimum bid and the actual selling price.
         h) Tax Collected - The sum, over all  buyers,  of  the  amount  of
            sales  tax  collected.  This includes buyers which have not yet
            closed, but excludes buyers which were purged at the end of the
            silent  bidding  process  (because  the failed to close out and
            pay).
         i) Total Receipts - The sum of items (f), (g), and (h).
         j) Tax Payable - The sum of items (f) and (g)  multiplied  by  the
            sales tax rate setup parameter.




                                Page IV-30





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name

                                Profit and Loss

         Lots Handled                          51
         Value (at Minimum Bid)                          918.00
         Less Lots Grouped                      3          3.00
         Less Lots Not Sold                     6         40.00
                                            -----      --------
         Lots Sold                             42        875.00
         Overbid Amount                                  507.00
         Tax Collected                                    69.13
                                                       --------
         Total Receipts                                          1,451.13

         Tax Payable                                      69.10
         Due or Paid to Sellers                        1,107.95
                                                       --------
         Total Payments                                          1,177.05
                                                                 --------
         Profit                                                    274.08








                         Figure IV - 7: Profit and Loss

























                                Page IV-31





                              The Winning Bid
                                Version 1.3
                                User Manual

         k)  Due  or  Paid  to  Sellers - The sum, over all sellers, of the
            actual selling price for all of their lots  multiplied  by  one
            minus their commission rate.
         l) Total Payments - The sum of (j) and (k).
         m) Profit - Item (i) minus (l).

     List of Lots

         Lots  may  be  listed  by  pressing F2 from the reports sub-menu.
         There is a summarized and a detailed list, and the listing may be
         restricted  to  sold  lots, or unsold lots, or it may include all
         lots.

         Columns on this report are:

         a) Lot - The lot number assigned by The Winning Bid when  the  lot
            is entered.
         b)  Description  - The seller-provided description of the lot.  On
            the summary report, only the first description line is  printed
            for  each lot.  On the detail report, all description lines are
            printed.
         c) Sale Price - For lots that have not been grouped  into  another
            lot,  the  sale  price is the actual selling price. For grouped
            lots, the legend "With nnnn" appears, where nnnn is the  number
            of  the  lot  this lot was grouped into.  On the detail report,
            the seller's minimum bid appears on the  second  line  in  this
            column.
         d) Buyer - The number of the buyer who purchased this item. On the
            detail report, the sale date appears on the second line in this
            column.
         e)  Seller  - The number of the seller who sold this item.  On the
            detail report, the time of the sale appears on the second  line
            in this column.

         At the bottom of the last page, summary fields are printed:

         f)  Total at Selling Price - The grand total of all selling prices
            for the lots listed.
         g) Total at Minimum Bid - The grand total of all seller's  minimum
            bids for the lots listed (appears only on the detail report).
         h) Total Number of Lots - The total number of lots listed.















                                Page IV-32





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name
                                 Lot List - Page  1

 Lot Description                                  Sale Price   Buyer Seller
---------------------------------------------------------------------------

   1 Large Limoges floral bowl - chip                  23.00     2     1

   2 Sterling carafe - no marks                       101.00    14     1

   3 Irish linen table cloth 48x84                     10.00    14     1

   4 Four assorted bolts of cloth:                      3.00    19     1

   5 Oak dining table and 4 chairs                 With    6           2

   6 6 folding chairs                              With    8           2

   8 Set of 3 occasional tables                        50.00     2     2

   9 Antique marble-top dresser                        12.50     3     2

  10 Small 7-drawer desk                                4.50     1     2

  11 RCA color TV                                      26.00    30     2

  12 Weber upright piano                               45.00     3     2


                                    /=====/

  52 Five boxes of books.                               5.50    22     6

  53 Encyclopedia Brittanica 1987                       5.00    51     6

  54 Water pump - no motor                              1.00     3     6

  55 Computer desk with printer stand                   0.00     0     6

Total at Selling Price $1,382.00
Total Number of Lots 51








                        Figure IV - 8: Summary Lot List





                                Page IV-33





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name
                                 Lot List - Page  1

 Lot Description                                  Sale Price   Buyer Seller
---------------------------------------------------------------------------

   1 Large Limoges floral bowl - chip                  23.00     2     1
     in bottom rim                                     20.00 02-09-88 23:53

   2 Sterling carafe - no marks                       101.00    14     1
     very fine condition                              100.00 02-06-88 22:07

   3 Irish linen table cloth 48x84                     10.00    14     1
                                                        0.00 02-06-19 22:07

   4 Four assorted bolts of cloth:                      3.00    19     1
     2 cotton, 1 cotton velour,                         0.00 02-06-88 22:05
     1 terry toweling

   5 Oak dining table and 4 chairs                 With    6           2
     with two leaves                                   25.00 02-09-88 23:56

                                    /=====/

  53 Encyclopedia Brittanica 1987                       5.00    51     6
                                                        0.00 02-06-19 22:07

  54 Water pump - no motor                              1.00     3     6
                                                        0.00 02-10-19 00:03

  55 Computer desk with printer stand                   0.00     0     6
                                                        0.00 02-10-19 00:03

Total at Selling Price $1,382.00
Total at Minimum Bid $  877.00
Total Number of Lots 51








                         Figure IV - 9: Detail Lot List










                                Page IV-34





                              The Winning Bid
                                Version 1.3
                                User Manual

     List of Sellers (F3)

         Sellers  may  be listed by pressing F3 from the reports sub-menu.
         There is a summarized and a detailed list, and the listing may be
         restricted to closed sellers, or  open sellers, or it may include
         both.

         The columns included on the report are:

         a) No. and Name - The seller's number and  name.   On  the  detail
            version  of  the  report, the seller's address and phone number
            also appears.
         b) No. Lots - The number of lots auctioned for the  seller.   Lots
            are counted whether or not they have been sold.
         c)  Total  $  -  The  total  of  all actual selling prices for the
            seller.
         d) Less Comm - The total paid (or to be paid) to the seller  after
            deduction of commission.
         e)  Close  Date/Time - The date and time of closure of the seller.
            On the detail version of the report, the method of  payment  to
            the seller appears below the closure date and time.

         On  the  detail  report,  each  seller's listing is followed by a
         listing of the lots sold by that seller:

         f) Lot No. - The number assigned to the lot by The Winning Bid.
         g) Act $ - The actual selling price.  Lots which have been grouped
            into other lots bear the legend "With nnnn" instead of a price.
         h)  Description  -  The seller's description of the lot, including
            all lines.

         At the bottom of the report, a total is printed:

         i) Total Number of Sellers - The total number of sellers appearing
            on the report.





















                                Page IV-35





                              The Winning Bid
                                Version 1.3
                                User Manual

                                 Auction Name
                            Seller List - Page  1

No. and Name              No. Lots   Total $  Less Comm    Close Date/Time
---------------------------------------------------------------------------

   1 Mary Ellen Walker           4     137.00     116.45   02-10-1988 00:04
   2 R. W. Jones                27     528.00     448.80   02-10-1988 00:04
   3 Robert Peterson             4     591.00     502.35   02-10-1988 00:04
   4 Gary Boswell                2      20.00      17.00   02-10-1988 00:05
   5 June Brown                  7      27.50      23.37   02-10-1988 00:05
   6 House Items                 7      78.50       0.00   02-10-1988 00:05

Total Number of Sellers 6








                      Figure IV - 10: Summary Seller List

































                                Page IV-36





                              The Winning Bid
                                Version 1.3
                                User Manual

                                 Auction Name
                            Seller List - Page  1

 No. and Name              No. Lots   Total $  Less Comm    Close Date/Time
  Lot No., Act $, and Description                        Payment Method
---------------------------------------------------------------------------

   1 Mary Ellen Walker           4     137.00     116.45   02-10-1988 00:04
     12A 14th St.                                            Check
     Crestline                        OH 30327
     412-498-2958
               1     23.00 Large Limoges floral bowl - chip
                           in bottom rim
               2    101.00 Sterling carafe - no marks
                           very fine condition
               3     10.00 Irish linen table cloth 48x84
               4      3.00 Four assorted bolts of cloth:
                           2 cotton, 1 cotton velour,
                           1 terry toweling


                                    /=====/

   6 House Items                 7      78.50       0.00   02-10-1988 00:05
     No address                                              Check
     No city

              49     41.00 Ansel Adams print - signed and
                           numbered.
              50     20.00 Box of model trains.  Includes
                           2 engines, 7 cars, track, 3
                           buildings, transformer
              51      6.00 Large model piper cub with
                           gasoline engine
              52      5.50 Five boxes of books.
              53      5.00 Encyclopedia Brittanica 1987
              54      1.00 Water pump - no motor
              55      0.00 Computer desk with printer stand


Total Number of Sellers 6








                        Figure IV - 11: Detail Seller List






                                Page IV-37





                              The Winning Bid
                                Version 1.3
                                User Manual


     List of Buyers (F4)

         Buyers  may  be  listed by pressing F4 from the reports sub-menu.
         There is a summarized and a detailed list, and the listing may be
         restricted  to  closed  buyers, or open buyers, or it may include
         both.

         The detailed list of open buyers is appropriate  for  posting  to
         announce winning bidders after a silent auction.

         The columns included on the report are:

         a) Buyer - The buyer's number.
         b) No. Lots - The number of lots purchased by the buyer.
         c) Total $ - The total amount paid by the buyer, exclusive of tax.
         d) Close Date/Time - The date and time of closure of the buyer.
         e) Payment Method - The payment method selected by the buyer.

         On  the detail report, each buyer's listing is followed by a list
         of the lots bought:

         f) Lot # - The number assigned to the lot by The Winning Bid.
         g) Price - The actual selling price.  Lots which have been grouped
            into other lots bear the legend "With nnnn" instead of a price.
         h)  Description  -  The seller's description of the lot, including
            all lines.

         At the bottom of the report, a total is printed:

         i) Total Number of Buyers - The total number of  buyers  appearing
            on the report.
























                                Page IV-38





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name
                            Buyer List - Page  1

Buyer   No. Lots  Total $
            Lot #    Price     Description
---------------------------------------------------------------------

   4      1        3.00

              16      3.00 Box of pots and pans

  13      2       92.00

              29     70.00 Jacobsen 8 HP snow blower
              25     22.00 Black & Decker 3/8" drill

  14      6      148.00

              39      5.00 Box of costume jewelry
              31     10.00 Sears washing machine
              24     14.00 Black & Decker sabre saw
              15      8.00 Box of stoneware dishes
               3     10.00 Irish linen table cloth 48x84
               2    101.00 Sterling carafe - no marks
                           very fine condition

Total Number of Buyers 3








                 Figure IV - 12: Detail List, Open Buyers Only



















                                Page IV-39





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name
                            Buyer List - Page  1

Buyer   No. Lots  Total $    Close Date/Time   Payment Method
----------------------------------------------------------------------------

   1      4      151.50   02-10-1988 00:04       Check
   2     12      108.50   02-10-1988 00:04       Cash
   3      5      133.50   02-10-1988 00:04       Credit Card
  13      2       92.00   02-07-1988 20:01       Check
  14      6      148.00   02-07-1988 20:00       Check
  19      3       28.00   02-07-1988 20:00       Cash
  22      1        5.50   02-07-1988 20:01       Cash
  30      1       26.00   02-07-1988 20:00       Credit Card
  40      1        3.00   02-07-1988 20:01       Cash
  51      6       95.00   02-07-1988 20:01       Credit Card
  62      4      591.00   02-07-1988 20:01       Credit Card

Total Number of Buyers 11








                      Figure IV - 13: Summary Buyer List



























                                Page IV-40





                              The Winning Bid
                                Version 1.3
                                User Manual


                                 Auction Name
                            Buyer List - Page  1

Buyer   No. Lots  Total $    Close Date/Time   Payment Method
            Lot #    Price     Description
----------------------------------------------------------------------------

   1      4      151.50   02-10-1988 00:04       Check

              28      1.00 Sears lawn mower
              26     14.00 Black & Decker circular saw
              19    132.00 Set of sterling silverware
                           includes 9 serving pieces
                           plus service for 8 - complete
              10      4.50 Small 7-drawer desk


                                    /=====/


  62      4      591.00   02-07-1988 20:01       Credit Card

              36     21.00 Apple color monitor
              35     20.00 Package of 25 diskettes: games
                           word processor, spreadsheet
                           etc.  Documentation missing
              34    100.00 Epson FX80 printer
              33    450.00 Apple IIe computer


Total Number of Buyers 11








                       Figure IV - 14: Detail Buyer List















                                Page IV-41





                              The Winning Bid
                                Version 1.3
                                User Manual

                           Main Menu option 10: Stop

     Press F10 from the main menu or from the reports sub-menu and The Win-
     ning Bid will stop operations, returning you to DOS.

     THE USE OF F10 IS STRONGLY RECOMMENDED WHEN YOU ARE DONE WITH THE WIN-
     NING BID BECAUSE SOME DATA IS NOT WRITTEN TO DISK IMMEDIATELY.  IF YOU
     TURN OFF THE COMPUTER OR REBOOT IT WITHOUT FIRST PRESSING F10, RECORDS
     COULD BE LOST.















































                                Page IV-42





                              The Winning Bid
                                Version 1.3
                                User Manual

                           Data Backups and Archiving

     To  make  a  backup  copy of The Winning Bid's data, you must copy the
     following files:

         WBSELL.DTA
         WBLOT.DTA
         WBBUY.DTA
         WBDESC.DTA
         WB.CFG

     Note that the first four will be on the disk or diskette drive you use
     to  hold  data  (the drive you specify on the introductory screen when
     you start The Winning Bid).  The last file, WB.CFG, contains  configu-
     ration  data  and summary data about the auction.  It resides with the
     software.  All five must be copied to make a valid backup and all five
     must  be  restored  to  their  correct places if The Winning Bid is to
     function properly after the restore.






































                                Page IV-43





                              The Winning Bid
                                Version 1.3
                                User Manual






















                        V. Terms and conditions of sale


































                                 Page V-1





                              The Winning Bid
                                Version 1.3
                                User Manual

     The terms and conditions of sale are different for different  versions
     of  The  Winning Bid.  This manual corresponds to the "User-Supported"
     version.  You can tell which version you have by looking at  the  sys-
     tem's  introductory screen. Terms and conditions of sale for the User-
     Supported version of The Winning Bid are as follows:

     The User-Supported Version of the The Winning Bid (WB) is owned by Jan
     B. Young, doing business as Precision Systems, 767 N. Holden St., Port
     Washington, WI 53074.  For your payment (if any), you  have  not  pur-
     chased the system, but only a license to use a copy of it.

     The  User-Supported  Version is intended for the user-supported market
     place and, as such, is a subset of the complete system.

         1. Your license is transferrable and may be subdivided. This means
            that  you  may  freely  make  and distribute copies of both the
            software and documentation, provided you:
              A) Make no alteration to either the software or the  documen-
                 tation. Copyright and disclaimer notices must be preserved
                 and distributed intact with the system.
              B) Distribute only complete copies of the software, each copy
                 accompanied  by a complete copy of the documentation. (The
                 documentation may be distributed as a data file on a  dis-
                 kette, or as a physical document.)
              C) Charge the recipient no more than $10 per diskette for the
                 sublicense.  This $10 fee is inclusive  of  all  diskette,
                 documentation,  shipping,  handling  and  other  ancillary
                 charges (but need not include sales tax, if any).

         2. The software is copyrighted and all rights therein are reserved
            by the owner.

         3. You must assume all responsibility for the selection and appli-
            cation of the software as appropriate to  achieve  the  results
            intended by you.  THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WAR-
            RANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING,  BUT
            NOT  LIMITED  TO  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
            FITNESS FOR A PARTICULAR PURPOSE.

         4. The user-supported version of The Winning Bid  is  not  return-
            able.  All sales are final.















                                 Page V-2





                              The Winning Bid
                                Version 1.3
                                User Manual

     The registration fee for the User-Supported version of The Winning Bid
     is $25.00.  For your fee, you will receive:

         1) A free copy of The Auction  Primer,  a  separate  manual  which
            gives  hints  and tips for the operation of profitable auctions
            using The Winning Bid.

         2) Free telephone support (see section VI).

         3) A free copy of the professional version demo on diskette.  This
            demo  diskette is worth $5 if you choose to upgrade to the Pro-
            fessional Version.

     Upgrade today!  Send your $25.00 to:


                               Precision Systems
                               767 N. Holden St.
                           Port Washington, WI 53074


     Wisconsin residents must include 5% sales tax ($1.25 additional).


































                                 Page V-3





                              The Winning Bid
                                Version 1.3
                                User Manual






















                                 VI.  Support


































                                 Page VI-1





                              The Winning Bid
                                Version 1.3
                                User Manual


     Support for The Winning Bid is available to all licensees of the  Pro-
     fessional  Version  of The Winning Bid, and to REGISTERED licensees of
     the User-Supported Version.  Unregistered licensees are  not  eligible
     for  support.  (See section V for instructions on how to register your
     copy.) The support provided to registered licensees includes:

         1) Free letter/telephone  support  covering  installation,  setup,
            auction   procedures,  and  auction  operations  in  reasonable
            amounts. If you telephone, you must  be  prepared  to  pay  the
            phone bill, including any calls we must make back to you. Write
            to Precision Systems, 767 N. Holden St.,  Port  Washington,  WI
            53074 or call 414-284-3742. CALLS CAN ONLY BE ACCEPTED EVENINGS
            OR WEEKENDS.

         2) On-site installation and training is available on  a  quotation
            basis.  Write to Precision Systems at the address above stating
            your requirements.  We will provide a price.

         3) Similarly, custom modifications and enhancements  can  be  pur-
            chased. Write to Precision Systems at the address above stating
            your requirements.  We will provide a price.

     No matter how much testing is done, no software product is  ever  per-
     fect.   If  you find an error in The Winning Bid, or in its documenta-
     tion, we'd like to know about  it.   Similarly,  if  you  identify  an
     enhancement  that  you  would like made in the future, let us know. We
     cannot promise any immediate action, but all input will  be  carefully
     reviewed  and taken into account as future versions of The Winning Bid
     are planned.


























                                 Page VI-2





                              The Winning Bid
                                Version 1.3
                                User Manual






















                                   VII. Index


































                                Page VII-1





                              The Winning Bid
                                Version 1.3
                                User Manual

                          The Winning Bid - Subject Index
         Subject                                  Section Page
         ---------------------------------------- ------- ----
         Archiving data                               IV  43
         Assumptions made                              I   3
         Auction operations, live                     IV  25
         Auction, live, tutorial                     III   8
         Auction, silent                              IV  19
         Auction, silent, tutorial                   III   7
         Backups                                      IV  43
         Benefits                                      I   2
         Brackets, meaning of                          I   4
         Buyer close, tutorial                       III   9
         Buyers, closing, live auction                IV  28
         Buyers, closing, silent auction              IV  21
         Buyers, lists, printing                      IV  38
         Buyers, lists, samples                       IV  39
         Cash tracking                                IV   4
         Cash, starting amount                        IV   4
         Claim check report, seller's, printing       IV  16
         Claim check, seller's, sample                IV  17
         Clearing the data base                       II   4
         Clearing the data base                       IV   2
         Clearing the data base, tutorial            III   3
         Close buyers, tutorial                      III   9
         Close control, seller                        IV   4
         Close sellers, tutorial                     III   9
         Closing buyers, live auction                 IV  28
         Closing buyers, silent auction               IV  21
         Closing Sellers, live auction                IV  28
         Closing sellers, silent auction              IV  21
         Color                                        IV   5
         Colors, selection                            IV   7
         Commission rate                              IV   4
         Copyright                                     V   2
         Data base clearing, tutorial                III   3
         Diskette, contents                           II   2
         Eject, report                                IV   6
         Eject, tags                                  IV   6
         Grouping lot, live auction                   IV  27
         Hardware requirements                         I   3
         Installation                                 II   2
         Installation, on-site                        VI   2
         License, software                             V   2
         Live auction, tutorial                      III   8
         Lot entry, tutorial                         III   6
         Lot tags, prep rinting, tutorial            III   6
         Lots, deleting                               IV  15
         Lots, finding                                IV  14
         Lots, finding, live auction                  IV  28
         Lots, finding, silent auction                IV  21
         Lots , lists, printing                       IV  32
         Lots, lists, samples                         IV  33
         Lots, merchandise, addition of               IV  13


                                Page VII-2





                              The Winning Bid
                                Version 1.3
                                User Manual

                          The Winning Bid - Subject Index
         Subject                                  Section Page
         ---------------------------------------- ------- ----
         Lots, modifying                              IV  15
         Merchandise lots, addition of                IV  13
         Merchandise lots, deleting                   IV  15
         Merchandise lots, finding                    IV  14
         Merchandise lots, finding, live auction      IV  28
         Merchandise lots, finding, silent auct'n     IV  21
         Merchandise lots, lists, printing            IV  32
         Merchandise lots, lists, sample              IV  33
         Merchandise lots, modifying                  IV  15
         Minimum bid on tags                          IV   6
         Minimum bid, auction-wide                    IV   5
         MODE, using for RS232 printers               IV   7
         Modifications, software                      VI   2
         Modifying sales, live auction                IV  27
         Name, auction                                IV   3
         Organization, this manual                     I   4
         Paddle, sample                               IV  11
         Paddles, creating rules file                 IV   5
         Paddles, name and address blanks             IV   5
         Paddles, printing                            IV   9
         Paddles, printing, tutorial                 III   5
         Paddles, rules                               IV   5
         Port, report printer                         IV   6
         Port, tag printer                            IV   6
         Printer tests                                II   3
         Profit and Loss Statement, printing          IV  30
         Profit and Loss Statement, sample            IV  31
         Purging unclosed buyers, silent auction      IV  22
         Purpose                                       I   2
         Receipt, seller, sample                      IV  24
         Receipts, buyer, printing                    IV  21
         Receipts, buyer, printing                    IV  28
         Receipts, buyer, sample                      IV  23
         Receipts, seller, printing                   IV  21
         Receipts, sellers, printing                  IV  28
         Refunds                                       V   3
         Registration                                  V   5
         Report eject                                 IV   6
         Report printer port                          IV   6
         Reports                                      IV  30
         Reports, tutorial                           III   9
         RS232 printers, setup                        IV   7
         Rules, creating rules file                   IV   5
         Sales, modifying, silent auction             IV  20
         Seller close, tutorial                      III   9
         Seller entry, tutorial                      III   6
         Seller's claim check report, printing        IV  16
         Seller's claim check report, sample          IV  17
         Sellers, addition of                         IV  12
         Sellers, close control                       IV   4
         Sellers, closing, live auction               IV  28


                                Page VII-3





                              The Winning Bid
                                Version 1.3
                                User Manual

                          The Winning Bid - Subject Index
         Subject                                  Section Page
         ---------------------------------------- ------- ----
         Sellers, closing, silent auction             IV  21
         Sellers, deleting                            IV  15
         Sellers, finding                             IV  14
         Sellers, lists, printing                     IV  35
         Sellers, lists, samples                      IV  36
         Sellers, maintenance                         IV  12
         Sellers, modifying                           IV  15
         Selling, live auction                        IV  26
         Selling, silent auction                      IV  20
         Serial printers, setup                       IV   7
         Set up, tutorial                            III   3
         Setup, data base                             II   3
         Setup, data base                             IV   3
         Silent auction, tutorial                    III   7
         Starting cash amount                         IV   4
         Starting The Winning Bid                     II   3
         Starting The Winning Bid, tutorial          III   2
         Stopping The Winning Bid                     IV  42
         Support                                      VI   2
         System set up, tutorial                     III   3
         Tag descriptors                              IV   7
         Tag eject                                    IV   6
         Tag height                                   IV   7
         Tag printer port                             IV   6
         Tag separation                               IV   8
         Tag starting column(s)                       IV   8
         Tag width                                    IV   8
         Tag width vs. description field width        IV   8
         Tags across, number of                       IV   7
         Tags, lot, preprinting, tutorial            III   6
         Tags, minimum bid on                         IV   6
         Tags, preprinted, sample                     IV  10
         Tags, preprinting                            IV  10
         Tags, printing inline or batch               IV   5
         Tags, printing on plain paper                IV   8
         Tags, sample                                 IV  18
         Tags, using 3x5 cards                        IV   8
         Tax rate                                     IV   4
         Tests, printer ports                         II   3
         Tracking, cash                               IV   4
         Training, on site                            VI   2
         Tutorial                                    III   2
         Warranty                                      V   4










                                Page VII-4





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1388

     Volume in drive A has no label
     Directory of A:\

    FILE1388 TXT      1928   5-26-89  10:52a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-26-89  10:55a
    MANUAL   BAT       148   5-26-89  12:13p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        41   5-26-89  12:12p
    WB       DOC    170752  11-28-88  10:59p
    WB       EXE    145348  12-15-88   9:56p
    WBNOS    FLE      3680   9-12-87  10:53a
    WBREAD   ME       1792   2-28-88  11:37p
           10 file(s)     324746 bytes
                           32768 bytes free
