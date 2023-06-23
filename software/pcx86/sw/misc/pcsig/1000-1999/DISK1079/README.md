---
layout: page
title: "PC-SIG Diskette Library (Disk #1079)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1079/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1079"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "4PRINT"

    If you're a professional programmer or a home hacker who's ``gone
    laser'', 4PRINT is a simple-to-use, paper-conserving, laser printer
    utility that can ease program code documentation. 4PRINT lets the HP
    LaserJet, LaserJet+, Laser Jet II, and compatibles print title lines
    plus four 66-line, 80-column pages of ASCII text on 8-1/2" X
    11" sheet of paper.
    
    4PRINT helps you maintain source code by automatically recording a
    program listing's file name, date, time, and page count.  It allows 264
    lines of contiguous code to be visible at once in an opened three-ring
    binder, and can print multiple source files with a single invocation.
    4PRINT handles tabs, form feeds, and end-of-file characters like a pro!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1079.TXT

{% raw %}
```
Disk No: 1079
Program Title:  4PRINT version 3.0
PC-SIG version:  2

If you're a professional programmer or just a home hacker who's "gone
laser," 4PRINT is a simple-to-use, paper-conserving, laser printer
utility that can ease program code documentation. 4PRINT lets the HP
LaserJet, LaserJet+, Laser Jet II, and compatibles print title lines
plus four sixty-six-line, eighty-column, double-side pages of ASCII text
on 8-1/2" X 11" sheet of paper.

4PRINT will help you maintain source code by automatically recording a
program listing's file name, date, time, and page count.  It allows 264
lines of contiguous code to be visible at once in an opened three-ring
binder, and can print multiple source files with a single invocation.
4PRINT handles tabs, form feeds, and end-of-file characters like a pro!

Usage:  Laser Printer Utility.

Special Requirement:  An HP LaserJet, LaserJet+, LaserJet II, or an
HP-compatible laser printer with a small fixed-pitch landscape font
(i.e., lineprinter, etc.).

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 without diskette, $35.00 with diskette.

File Descriptions:

READ     ME   Information file.
WHAT'S   NEW  New features since previous version(s).
SHARE    DOC  Shareware registration and disk vendor information.
SITELIC  DOC  Site license information.
4PRINT   DOC  Full documentation (33 pages).
4PRINT   EXE  The 4PRINT program.
LINEPRNT DOC  Shareware information from Elfring Soft Fonts.
LP085R16 USL  Elfring small landscape Letter Gothic soft font.
ID1000        Used to load soft font.
PERM          Used to load soft font.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No: 1079  4Print  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the manual on this disk, type:                               ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the program on this disk, type:                                ║
║                                                                         ║
║             4PRINT (press enter)                                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LINEPRNT.DOC

{% raw %}
```
                          Line Printer Soft Fonts

The LaserJet + and some compatible laser printers lack several of the fonts 
found in the LaserJet II. Without these fonts you can't run standard programs 
like 4PRINT! This shareware soft font package solves part of that problem by
including a landscape line printer font for use on those machines that don't 
come with such a font. This line printer font includes the full line drawing 
character set.

Elfring Soft Fonts has a special conversion package that gives your LaserJet +
or compatible printer the same set of soft fonts that are found in the LaserJet
II. This font set includes portrait & landscape versions of 8.5 point 16.66 
pitch line printer, 12 point 10 pitch Courier, and 12 point 10 pitch Courier 
Bold. See the shareware registration sheet below for ordering information. We 
also have a large number of soft fonts and utilities for your laser printer.


                         Using This Soft Font

To use the LP085R16.USL, (line printer, landscape 8.5 point 16.66 pitch), soft 
font in conjuction with 4PRINT or any other software package you first have to 
send it to your laser printer. The process of sending a soft font to a laser 
printer is called downloading. The easiest way to download a soft font is to
use a program to do this. Elfring Soft Fonts sells several different soft font
downloaders. We have a shareware command line downloader available for $15, 
and a commercial memory resident downloader for $30. (You can also get the 
memory resident soft font downloader bundled with a set of Helv & Roman soft 
fonts for $55. {portrait 8, 10, 12, & 14 point medium/bold/italic + 18 & 24 
point bold})

To download a soft font with MS-DOS commands you must create a batch file and
two other disk files with an ASCII text editor capable of inserting Escape 
codes into a text file. The files should look as follows:

Batch File                     ID1000 File       PERM File
===========================================================================
echo off                       <Esc>*c1000D      <Esc>*c5F
copy/b id1000 lpt1:
copy/b lp080r16.usp lpt1:
copy/b id1000 lpt1:
copy/b perm lpt1:

Note that the character sequence <Esc> stands for the escape key, and this
batch file can only download one soft font since it also assigns the soft 
font ID number (1000)!

Once the soft font is downloaded to your printer any other software package 
can use this font just as if it were working with a LaserJet II! You can 
select this soft font by sending the following character sequence to your
printer:

<Esc>&l1O<Esc>(10U<Esc>(s0p16.6h8.5v0s0b0T
                   Line Printer Soft Font Registration Form
 
 Remit to:       Elfring Soft Fonts                 Tel: (312) 377-3520
                 P.O. Box 61                        CIS: [72417,3437]
                 Wasco, Illinois 60183
 
 ____ LP085R16.USL Registration .............. @ $ 10.00 ea  $ ________
      (No need to register if you buy the font set below)
 
 ____ LaserJet + to LaserJet II Font Set ..... @ $ 30.00 ea  $ ________
      (includes our DOWNLOAD program, portrait & landscape 8.5
       point - 16.6 pitch line printer fonts, and 12 point -
       10 pitch Courier {med & bold}, all with a limited
       version of the PC-8 symbol set {line drawing})
 
 ____ TSR Download ........................... @ $ 30.00 ea  $ ________
      (memory resident soft font & printer control)
 
 ____ TSR Download & LaserJet soft fonts ..... @ $ 55.00 ea  $ ________
      (with portrait Helv & Roman soft font set)
 
 ____ Matching 30 pt and landscape fonts ..... @ $ 20.00 ea  $ ________
 
 ____ TSR Download & DeskJet soft fonts ...... @ $ 55.00 ea  $ ________
      (with portrait Helv & Roman soft font set)
 
                                                   Subtotal    ________
 
      Shipping and handling (no charge for $10 registration)     $ 3.00
 
                                                      Total  $ ________
 
      Payment by:  [ ] Check   [ ] MC   [ ] Visa   [ ] PO # ___________
            (Minimum credit card order is $20, minimum PO order is $50)
 
         Name: ________________________________ Title: ________________
 
      Company: ________________________________________________________
 
      Address: ________________________________________________________
 
               ________________________________________________________
 
      Day Phone: _____________________   Evening: _____________________
 
      Card #: _______________________________  Exp. Date: _____________
 
      Signature of card holder: _______________________________________
 
      Where did you learn about LP085R16.USL or obtain your trial copy?
 
      _________________________________________________________________
 
      Do you have any comments or suggestions to improve our soft fonts?
 
      _________________________________________________________________
 
      _________________________________________________________________
                      LICENSE AND OTHER INFORMATION


Users of the LP085R16.USL soft font must accept this disclaimer of warranty:
"LP085R16.USL is supplied as is.  The author disclaims all warranties, 
expressed or implied, including, without limitation, the warranties of 
merchantability and of fitness for any purpose. The author assumes no 
liability for damages, direct or consequential, which may result from the 
use of LP085R16.USL."

LP085R16.USL is a "shareware soft font" provided only in conjunction with the
4PRINT program. This soft font may not be distributed without the 4PRINT
program. LP085R16.USL is provided at no charge to the user for evaluation.  
The essence of "user-supported" software is to provide personal computer 
users with quality software without high prices, and yet to provide incentive 
for programmers to continue to develop new products.  If you find this soft 
font useful, or you intend to use it for any purpose other than a 15 day 
evaluation, you must make a registration payment of $10.00 to Elfring Soft
Fonts.  The $10.00 registration fee will license one copy of this font for 
use on any one laser printer at any one time.  You must treat this software 
just like a book.  For example, this software may be used by any number of
people and may be freely moved from one computer location to another, so 
long as there is no possibility of it being used at one location while it's 
being used at another. Just as a book cannot be read by two different persons 
at the same time. Site-License arrangements may be made by contacting Elfring
Soft Fonts.

Anyone distributing LP085R16.USL for any kind of remuneration must first 
contact Elfring Soft Fonts at the address below for authorization.  This 
authorization will be automatically granted to distributors recognized by 
the (ASP) as adhering to its guidelines for shareware distributors, and 
such distributors may begin offering LP085R16.USL immediately (However, 
Elfring Soft Fonts must still be advised so that the distributor can be 
kept up-to-date with the latest version of LP085R16.USL.).

You are encouraged to pass a copy of 4PRINT and LP085R16.USL along to your
friends for evaluation.  Please encourage them to register their copy if they
find that they can use it.  All registered users will receive a copy of the
latest version soft font and utility catalog from Elfring Soft Fonts. In
addition, registered users are entitled to the special price listed on the 
registration form for our LaserJet + soft font upgrade set. 

LP085R16.USL must be registered for EACH USER at your site; alternatively,
contact Elfring Soft Fonts for current SITE LICENSE information. LP085R16.USL 
will work on any LaserJet + or compatible laser printer. It will not work on 
a DeskJet printer.
 
Elfring Soft Fonts is a member of the Association of Shareware Professionals 
(ASP).  ASP wants to make sure that the shareware principle works for you.  
If you are unable to resolve a shareware related problem with an ASP member 
by contacting the member directly, ASP may be able to help.  The ASP Ombudsman 
can help you resolve a dispute or problem with an ASP member, but does not 
provide technical support for members' products.  Please write to the ASP 
Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message 
via Easyplex to ASP Ombudsman [70007,3536].

```
{% endraw %}

## SHARE.DOC

{% raw %}
```



                           4PRINT REGISTRATION FORM

     Remit to:       Korenthal Associates, Inc.         Tel: (212) 242-1790
                     230 West 13th Street               FAX: (212) 242-2599
                     New York, New York 10011           CIS: [76164,237]
                     Attention: Customer Service

     ____ 4PRINT Disk (current version) .......... @ $ 10.00 ea  $ ________
             (includes program and manual on disk, no registration)

     ____ 4PRINT Registration .................... @ $ 25.00 ea  $ ________
             (includes 4FOLD, does not include disk)

     ____ 4PRINT Registration and Disk ........... @ $ 35.00 ea  $ ________
             (registration, 4FOLD, KAZAP, program and manual on disk)

     ____ 4PRINT Complete Shareware Package ...... @ $ 39.95 ea  $ ________
             (all of the above plus printed documentation)

                                                       Subtotal    ________

          New York residents add applicable sales tax:      Tax    ________

          Shipping and handling (no charge for $25 registration)     $ 3.00

                                                          Total  $ ________

          Payment by:  ( ) Check   ( ) MC   ( ) Visa   ( ) PO # ___________

             Name: ________________________________ Title: ________________

          Company: ________________________________________________________

          Address: ________________________________________________________

                   ________________________________________________________

                   ________________________________________________________

          Day Phone: _____________________   Evening: _____________________

          Card #: _______________________________  Exp. Date: _____________

          Signature of card holder: _______________________________________


          Where did you learn about 4PRINT or obtain your trial copy?
          (If from a BBS, please tell us the name and phone number.)

          _________________________________________________________________

          Do you have any comments or suggestions to improve 4PRINT?

          _________________________________________________________________

          _________________________________________________________________





                         4PRINT SHAREWARE INFORMATION

     4PRINT is distributed through regular commercial channels, and also on
     CompuServe and local BBS's as a shareware product.  No matter how you
     obtained the product, we encourage you to freely copy and distribute
     4PRINT provided that:

          1. No fee beyond normal media, duplication, and shipping costs
             may be charged.
          2. Vendors approved by the Association of Shareware Professionals
             may distribute 4PRINT, but Korenthal Associates must be
             supplied with a copy of the first catalog issue offering each
             new revision (major or minor) of 4PRINT.
          3. Other shareware vendors may distribute 4PRINT only with the
             written permission of Korenthal Associates.  In all cases, it
             must be clearly stated to the purchaser that he or she is
             receiving an UNREGISTERED copy of a SHAREWARE product and, as
             above, current catalogs must be sent to Korenthal Associates.
          4. The distribution file, 4PRNTnnn.ARC, must be distributed IN
             ITS ORIGINAL FORM.  Specifically, the companion utilities
             4FOLD and KAZAP may ABSOLUTELY NOT be distributed.

     If you received 4PRINT as shareware (i.e., if you didn't pay for it or
     you bought a disk from a software library), and you use it beyond a
     two week trial period, you must register the program using the
     accompanying order form (or the form printed by the program itself).
     You may also register by phone (212-242-1790) or FAX (212-242-2599)
     using MasterCard, Visa, or company purchase order.

     You can also register through the Public (Software) Library by calling
     toll-free 1-800-2424-PSL with MC/Visa.  For questions about orders
     placed through PSL, call 713-665-7017.  For technical questions, call
     Korenthal Associates at 212-242-1790.  When you register through PsL,
     you get a $5 coupon good for ordering other shareware programs.

     For $25, registered users will receive 4FOLD, a companion utility
     which allows you to print multiple files one per column (with headers
     on each column) instead of one per page.  For $35, users also receive
     KAZAP, a utility which allows you to bypass DEBUG and easily set all
     the 4PRINT default parameters.

     Registered users will be notified of significant upgrades to 4PRINT,
     and will be placed on a mailing list to receive information about
     future products from Korenthal Associates.

     4PRINT must be registered for EACH USER at your site; alternatively,
     contact Korenthal Associates for current SITE LICENSE information.

     Korenthal Associates is a member of the Association of Shareware
     Professionals (ASP).  ASP wants to make sure that the shareware
     principle works for you.  If you are unable to resolve a shareware-
     related problem with an ASP member by contacting the member directly,
     ASP may be able to help.  The ASP Ombudsman can help you resolve a
     dispute or problem with an ASP member, but does not provide technical
     support for members' products.  Please write to the ASP Ombudsman at
     P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message via
     Easyplex to ASP Ombudsman [70007,3536].


```
{% endraw %}

## SITELIC.DOC

{% raw %}
```
      
                    PROGRAM END USER SITE LICENSE AGREEMENT


     Korenthal Associates, Inc. (Licensor) grants to _____________________ 
     ________________________________________(Licensee), and Licensee 
     accepts, a license to use the licensed program in accordance with the 
     terms and conditions contained in this agreement.

     1.0  DEFINITIONS

          1.1  "Licensed program" means the object code version of the 
     program listed in Exhibit 1 and related program user documentation.  
     No rights to the source code versions of the licensed program are 
     granted by this license.

          1.2  "Object code" means any instruction or set of instructions 
     in machine readable form.

          1.3  "User documentation" means any standard manuals or other 
     related materials used for user instruction or reference in use of the 
     licensed program.

          1.4  "Use" means copying of any portion of the licensed program 
     from a storage unit or media into the designated equipment and 
     execution of the licensed program on the equipment.

     2.0  LICENSE GRANT

          2.1  Licensee is granted a nontransferable, nonexclusive right to 
     use the number of copies of the licensed program indicated on Exhibit 
     1 for Licensee's internal use.  Licensor will deliver one copy of the 
     licensed program to Licensee.  Licensee may make additional copies of 
     the licensed program, up to the number of copies licensed herein, 
     provided that each copy of the program contains Licensor's copyright 
     notice and any other proprietary legends, including legends under the 
     Federal Acquisition Regulations (FAR), if any, contained on the 
     delivered copy.

          2.2  Each copy of the licensed program provided under this 
     license may be used on only one computer at any one time.  If used on 
     a network system, each user is considered to be employing a distinct 
     copy of the licensed program.

          2.3  Licensee shall not use, copy, rent, lease, sell, modify, 
     decompile, disassemble, otherwise reverse engineer, or transfer the 
     licensed program except as provided in this agreement.  Any such 
     unauthorized use shall result in immediate and automatic termination 
     of this license.

     3.0  TERMS

          3.1  This license is effective until terminated.  Licensee may 
     terminate it at any time by destroying the licensed program and all 
     copies of it an notifying the Licensor in writing.  This license will 
     also terminate as otherwise provided in this agreement.  On 
     termination, Licensee shall return all materials not destroyed to 
     Licensor together with a written verification that the remaining 
     materials have been destroyed.

     4.0  PAYMENT

          4.1  The fee for this license is set forth in Exhibit 1, payable 
     as set forth.

     5.0  CONFIDENTIALITY AND PROPRIETARY RIGHTS

          5.1  The licensed program is licensed, not sold.  Nothing in this 
     agreement shall be construed as conveying title in the licensed 
     program to Licensee.

          5.2  Licensee understands and agrees that the licensed program 
     and all documentation related thereto constitute the valuable 
     properties and trade secrets of Licensor, owner of the copyright to 
     the licensed program, embodying substantial creative efforts which are 
     secret, confidential, and not generally known by the public, and which 
     secure to Licensor a competitive advantage.

          5.3  Licensee agrees during the term of this license, and 
     thereafter, to hold the licensed program, including any copies thereof 
     and any documentation related thereto, in strict confidence and to not 
     permit any person or entity to obtain access to it except as required 
     for Licensee's own internal use hereunder.

          5.4  Licensee shall inform Licensor promptly and in writing of 
     any actual or suspected unauthorized use or disclosure of the licensed 
     programs or documentation related thereto.  

          5.5  The obligations under this paragraph shall survive the 
     termination or rescission of this agreement.

     6.0  LIMITED WARRANTY

          6.1  Licensor warrants that for a period of ninety days from the 
     date of delivery of the licensed program the program, if unmodified by 
     the Licensee, will perform in substantial conformity with the user 
     documentation.  Licensor does not warrant that the licensed program is 
     free from coding errors.  Any program problems reported to Licensor 
     during the warranty period and determined by the Licensor to be actual 
     coding errors will be corrected by Licensor within a reasonable time.  
     Any modifications to the licensed program shall thereafter be licensed 
     AS IS.

          6.2  The above warranty does not apply to the extent that any 
     failure of the licensed program to perform as warranted is caused by 
     the licensed program being (1) not used in accordance with the user 
     documentation, or (2) modified by any person other than authorized 
     Licensor personnel.

          6.3  Within forty-five days after delivery of the first copy of 
     the licensed program, Licensee shall perform such tests as it deems 
     necessary to determine that the licensed program operates 
     substantially in conformity with the user documentation.  If during 
     such tests Licensee determines that the licensed program does not so 
     perform after following the error procedures described in the user 
     documentation, Licensee shall immediately notify Licensor, setting 
     forth the defects noted with the specificity requested by Licensor.  
     Upon notification of reported defects, Licensor shall have a 
     reasonable time to determine if actual coding errors exist and, if so, 
     to remedy those errors.  Within fifteen days after redelivery, 
     Licensee shall retest the program and report any other problems 
     encountered.  Unless Licensee notifies Licensor of defects encountered 
     within the forty-five day test period, the licensed program shall be 
     deemed to have been accepted.

          6.4  LICENSOR MAKES AND LICENSEE RECEIVES NO OTHER WARRANTIES, 
     EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF 
     MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

     7.0  LIMITATION OF LIABILITY

          7.1  The total liability of Licensor or its suppliers for any 
     claim or damage arising out of the use of the licensed program or 
     otherwise related to this license shall be limited to direct damages 
     which shall not exceed the license fee(s) which have been paid by 
     Licensee to Licensor for the specific client project which is the 
     subject of such claim or damage.

          7.2  IN NO EVENT SHALL LICENSOR OR ITS SUPPLIERS BE LIABLE FOR 
     ANY CONSEQUENTIAL OR INCIDENTAL DAMAGES ARISING OUT OF THE USE OF THE 
     LICENSED PROGRAM OR RELATED TO THIS LICENSE.

     8.0  TERMINATION.  THIS LICENSE MAY BE TERMINATED BY LICENSOR IF:

          8.1  Licensee fails to comply with any material term or condition 
     of this agreement and Licensee fails to cure such failure within 
     fifteen days after notices of such failure by Licensor; and

          8.2  Licensee's normal business operations are disrupted or 
     discontinued for more than thirty days by reason of insolvency, 
     bankruptcy, receivership, or business termination.

     9.0  GENERAL TERMS

          9.1  Neither this agreement nor any rights or obligations 
     hereunder shall be assigned or otherwise transferred by Licensee 
     without prior written consent of Licensor, which consent will not be 
     unreasonably withheld.  Licensor may assign this agreement entirely in 
     its discretion upon the express written assumption of the obligations 
     hereunder by the assignee.

          9.2  This agreement shall be interpreted and enforced in 
     accordance with and shall be governed by the laws of the State of New 
     York applicable to contracts between residents.  No suit for 
     enforcement of or for a declaration of rights between the parties to 
     this agreement shall be commenced in any court other than the 
     Municipal or Superior Court in and for New York County, State of New 
     York, or in the United States District Court for the Southern District 
     of the State of New York.

          9.3  Any controversy or claim arising out of or relating to this 
     agreement or the breach thereof shall be settled by arbitration in 
     accordance with the commercial rules of the American Arbitration 
     Association, using an arbitrator with knowledge of computers and 
     software, and judgment upon the award rendered by the arbitrator(s) 
     may be entered in any court having jurisdiction thereof.  No 
     arbitration or other action arising out of any claimed breach of this 
     agreement or transactions under this agreement may be demanded by 
     either party more than one year after the cause of action accrued.  
     The prevailing party in any such action related to or arising under 
     this agreement shall be entitled to reasonable attorneys' fees.

          9.4  This agreement and its exhibits contain the entire agreement 
     between the parties hereto, superseding all previous agreements, 
     representations, understandings and negotiations.  This agreement may 
     not be amended other than by writing signed by an authorized 
     representative of the parties.

          9.5  In any terms or provisions of this agreement shall be found 
     to be illegal or unenforceable then, notwithstanding, this agreement 
     shall remain in full force and effect and such term or provision shall 
     be deemed stricken.

          9.6  No amendment of this agreement shall be effective unless it 
     is in writing and signed by duly authorized representatives or both 
     parties.  No term or provision hereof shall be deemed waived and no 
     breach excused unless such waiver or consent shall be in writing and 
     signed by the party claimed to have waived or consented.  Any consent 
     by any party to or waiver of a breach by the other, whether express or 
     implied, shall not constitute a consent to, waiver of or excuse for 
     any other, different or subsequent breach.

          9.7  This agreement shall be binding on and shall inure to the 
     benefit of the heirs, executors, administrators, successors and 
     assigns of the parties hereto, but nothing in this paragraph shall be 
     construed as a consent to any assignment of this agreement by either 
     party except as provide hereinabove. 

          9.8  Time is of the essence of this agreement.

          9.9  This agreement may be signed in counterparts.


     Effective this ____________ day of ________________________, 19_____.

              LICENSEE                                 LICENSOR


     ________________________________    _________________________________
     Authorized Representative           Authorized Representative

     Typed name______________________    Typed name_______________________

     Title___________________________    Title____________________________

     Address_________________________    Address__________________________

     ________________________________    _________________________________

     ________________________________    _________________________________

     ________________________________    _________________________________



                                   EXHIBIT 1

                               Licensed Programs


       LICENSED PROGRAM       NUMBER OF USERS      LICENSE FEE PAYABLE

           4PRINT                 Up to 10              $  200.00
                                  Up to 25              $  450.00
                                  Up to 50              $  800.00
                                  Up to 75              $ 1000.00
                                  Up to 100             $ 1250.00
                                  100+             Please contact Korenthal
                                                   Associates, Inc.
         
     The above prices include one copy of the Retail Version of 4PRINT.  
     Licensee may make additional copies, up to the number of copies 
     licensed.  Korenthal Associates, Inc., can supply multiple copies of 
     the distribution disk at an additional cost of $5.00 per copy plus 
     shipping and handling costs.

     If you are licensing for 75 or more copies of 4PRINT, at your request, 
     we will deliver a personalized version of the program that will 
     either:

     1) Remove the "]</\ 4PRINT" watermark that appears in the lower right 
        hand corner of a 4PRINTed page.

     2) Print your own personalized watermark.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1079

     Volume in drive A has no label
     Directory of A:\

    LP085R16 USL     11068   3-16-89   3:10a
    FILE1079 TXT      1758   6-22-89   8:51a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  11-09-88  12:04p
    MANUAL   BAT       147   6-08-88   3:02p
    4PRINT   DOC    106141   3-16-89   3:10a
    4PRINT   EXE     88576   3-16-89   3:10a
    ID1000               8   3-16-89   3:10a
    LINEPRNT DOC      8569   3-16-89   3:10a
    PERM                 5   3-16-89   3:10a
    READ     ME       4273   3-16-89   3:10a
    SHARE    DOC      5810   3-16-89   3:10a
    SITELIC  DOC     13274   3-16-89   3:10a
    WHAT'S   NEW      1508   3-16-89   3:10a
           14 file(s)     242177 bytes
                           72704 bytes free
