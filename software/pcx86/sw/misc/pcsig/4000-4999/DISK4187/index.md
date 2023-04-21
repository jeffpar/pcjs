---
layout: page
title: "PC-SIG Diskette Library (Disk #4187)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4187/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4187"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FEATURE.DOC

{% raw %}
```

                               EarthBASE


EarthBASE is a mapping application which provides features in four main areas:
powerful database functions (reads/writes/creates XBASE files; imports/exports
delimited ASCII files), geocodes address locations onto a world map using 5-
digit zip code or latitude/longitude data, graphics file export (.TIF), and data
analysis functions.  XBASE files are dBASE compatible database files created
from applications such as dBASE II-IV, FoxPro, Clipper, etc..  A strength of
EarthBASE is its ability to work with large databases while requiring minimal
hardware.  EarthBASE is divided into four windows:  the globe window, the record
window, the field window, and the file creation window.  The main features of
these windows are as follows:

FILE CREATION WINDOW

XBASE files may be created or modified according to a user-specified field
structure.  Existing files may have fields added, deleted and/or field names
changed.  Multiple files may be joined and records may be appended onto existing
files.  Delimited files may be imported and converted to XBASE files.

GLOBE WINDOW

File Import:  Opens XBASE files containing up to 35,000 records.  EarthBASE
requires 570 Kb to open a 35,000 record file.  An XBASE file's structure is
automatically understood as it is loaded.  A record is located in the globe
window by using fields containing latitude and longitude data, or secondly, the
first five digits of a zip code from a field containing zip code data, if these
fields are present.  All of EarthBASE's features, except record location
visualization, are active if no location data is available.

Record Display Toggle:  Records may be displayed based on the following
criteria:  all records, all records included by the last query or all records
excluded by the last query.

Output:  The displayed contents of the globe window, governed by the record
display toggle, may be sent to the following printers as output:  Epson 9 pin,
Epson 24 pin, HP LaserJet and HP DeskJet.  The displayed contents may also be
stored to disk as a .TIF graphics image file (TIFF Class B - black and white)
or as an XBASE file.  Records are displayed in the globe window and stored in
the XBASE file in the order that they have been sorted in the record window.

Zoom:  Zooms in until the width scale of the globe window is 129 feet wide.

Speed:  On a 20 MHz 80386 machine, the entire globe is refreshed in less than
1 second if no records are loaded or in less than 6 seconds if 30,000 records
are loaded.  Close zoom-in refreshes are near real-time, without records loaded.

Cursor Movement:  The arrow keys move the globe in northward, southward,
eastward, and westward directions.  The snap mode moves the globe from record
location to record location in the above mentioned directions.  A mouse may be
used in place of the arrow keys if the appropriate driver is installed.

Measurement:  Measures the direct air distance between any two
points in miles and kilometers.

Count:  Counts the number of records within a user-defined circular perimeter.
If the count mode is active during queries in the field window, the query has
the added constraint that the record lie within the chosen perimeter.












Symbol:  The user may choose any field, out of which, the globe window's display
symbols for each record is extracted.  The font may be scaled to 9 sizes.

Range:  The user may choose any numeric field to divide the records into two
ranges (uses two font sizes and colors).

RECORD WINDOW

The record window lists all of the records in the opened XBASE file, row by
row.  The user specifies which fields are displayed in the window.  Records may
be sorted alphabetically according to their displayed fields or according to
their distances from the globe window's present cursor location.  The window
provides a string searching function.  The record display toggle functions as
it does in the globe window.  The record window list may be printed to a
delimited ASCII file or printer.

FIELD WINDOW

The field window may be entered after selecting a record with respect to its
location in the globe window or with respect to its displayed fields or record
number in the record window.  This window views, prints, queries, edits,
creates, copies, sums (field values), and deletes records in the opened XBASE
file.  Queried records may be edited, counted, summed (field values), or copied
to a new file.  All fields in the opened XBASE file may be queried by example
using '>', '<', and wildcard symbol '*' to constrain the query.  The record
display toggle functions as it does in the globe window and is used to create
compound queries.

GENERAL FEATURES

Menu driven, supports Microsoft Compatible Mice.
A password protected entrance.
Device independent graphics support for CGA, MCGA, EGA, VGA, Hercules, AT&T
6300, and IBM 3270 PC.
Help Screens.
An 80386SX, 80386, and 80486 version is available.
Shell to DOS restores RAM fully to second application.
Internal DOS I/O error handling.
Built-in support for 8087-80387 math coprocessors and emulation.
File backup.
DOS (> 3.0) LAN Compatibility - writes block writes on record basis.

Minimum Requirements:  IBM XT, 256 Kb, DOS 2.0, monochrome or color graphics
adapter (Hercules, CGA, EGA, VGA, AT&T 6300, or IBM 3270 PC), and one low-
density floppy drive.  Not copy protected.  640 Kb and a hard disk are
recommended for large databases.  dBASE is a trademark of Borland Inter-
national, Inc.  IBM is a trademark of International Business Machines Corp.
EarthBASE is a trademark of Resource Management Simulations; (c) 1989 - 1992;
All Rights Reserved.  Other brand names are trademarks or registered
trademarks of their respective holders.  Resource Management Simulations,
P.O. Box 11802, Santa Ana, CA, 92711, (714) 544-8872
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```








          This document contains several pages of information.  Pricing and
          an order form are found on the last pages.

                                       LICENSE

              All versions of EarthBASE are not public domain software, nor
          are they free software.  EarthBASE is copyright (C) 1989 - 1992
          by Resource Management Simulations.  All Rights Reserved.  In
          addition to license and warranty information contained in this
          file, additional information is found in the manual.

              Non-registered users are granted a limited license to use
          EarthBASE on a trial basis for the purpose of determining whether
          EarthBASE is suitable for their needs.  Use of EarthBASE, except 
          for this limited purpose, requires registration.  Use of non-
          registered copies of EarthBASE by any person, business,
          corporation, governmental agency or other entity institution is
          strictly forbidden.

              No user may modify EarthBASE in any way, including but not
          limited to decompiling, disassembling or otherwise reverse
          engineering the program.

              All users are granted a limited license to copy EarthBASE 
          only for the trial use of others subject to the above
          limitations, and also the following:

               EarthBASE must be copied in unmodified form, complete  
               with the file containing this license information.

               The full EarthBASE documentation must be included with     
               the copy.

               No fee, charge or other compensation may be accepted
               or requested by any licensee.

               EarthBASE may not be distributed in conjunction with
               any other product without written permission from
               Resource Management Simulations.

               Operators of electronic bulletin board systems (Sysops)     
          may post EarthBASE for downloading by their users only as long as
          the above conditions are met.  Distributors of public domain,
          user supported software and shareware may distribute copies of
          EarthBASE subject to the above conditions only after obtaining
          written permission from Resource Management Simulations.

              Registration permits a user the license to use EarthBASE only
          on a single computer; a registered user may use the program on a 
          different computer, but may not use the program on more than one
          computer at the same time.  Sharing EarthBASE on a network
          requires multiple licenses for the maximum number of simultaneous
          users.














                                       WARRANTY

              Resource Management Simulations makes no warranty of any 
          kind, express or implied, including without limitation, any
          warranties of merchantability and/or fitness for a particular
          purpose.  Resource Management Simulations shall not be liable for
          any damages, whether direct, indirect, special or    
          consequential arising from a failure of this program to operate 
          in the manner desired by the user.  Resource Management
          Simulations shall not be liable for any damage to data or
          property which may be caused directly or indirectly by use of the
          program.

              IN NO EVENT WILL Resource Management Simulations BE LIABLE TO
          YOU FOR ANY DAMAGES, INCLUDING ANY LOST PROFITS, LOST SAVINGS OR 
          OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR 
          USE OR INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY
          OTHER PARTY.
















































                                 ORDERING INFORMATION

              An EarthBASE registration licenses you to use the product on 
          a regular basis.  Registration permits a user the license to use
          EarthBASE only on a single computer; a registered user may use
          the program on a different computer, but may not use the program
          on more than one computer at the same time.  Sharing EarthBASE on
          a network requires multiple licenses for the maximum number of
          simultaneous users.

               Registration includes the following:

                1.  The user will receive a five-digit zip code file
                    which is used by EarthBASE to locate records
                    on the globe based on each record's zip code
                    field data.
                    ***IMPORTANT:
                    The zip code file provided with EarthBASE prior to
                    registration is accurate only to 2 digits.
                2.  The user will receive a printed manual.
                3.  Telephone support.
                4.  The user will receive the most recent shareware
                    version of EarthBASE.
                5.  Mailed notification of commercial updates to
                    EarthBASE.

              Registration for EarthBASE costs $199.  An additional $40
          should be included for a 80386 version of EarthBASE (must be used
          on machines containing 80386 or 80486 CPU), which improves
          performance by approximately 20% over the 8086 version of
          EarthBASE.  Volume discounts are available for EarthBASE regi-
          stration, as listed below.

              Please use the enclosed order and registration forms when
          placing an order.






























                           Corporate and Quantity Purchases

              All private, corporate, business, government or other
          commercial users of EarthBASE must be registered.  Quantity
          discounts begin at the fifth copy.  Corporate or site licensing
          is also available.

                                 EarthBASE DISCOUNTS (per order)
                          5 - 10 licenses. . . . . . . .  5%
                         11 - 20 licenses. . . . . . . . 10%
                         21 - 30 licenses. . . . . . . . 15%
                         31 - 40 licenses. . . . . . . . 20%
                         41 - 50 licenses. . . . . . . . 25%
                         51 - 60 licenses. . . . . . . . 30%
                         61 - 70 licenses. . . . . . . . 35%
                            > 71 licenses. . . . . . . . 40%


              Orders in quantities of less than 75 units are handled as
          quantity purchases.  Purchases of over 75 units may be handled as 
          quantity purchases or as corporate licensing agreements.  Please
          write or call for details.

              ALL PRICES AND DISCOUNTS ARE SUBJECT TO CHANGE WITHOUT
          NOTICE.  Discounts are not cumulative; they apply to single
          orders of like products only.  Unit prices are the same as for
          individual users.  

              WARNING: YOU MAY NOT USE EarthBASE WITHIN YOUR ORGANIZATION
          WITHOUT A PRIOR REGISTRATION OR LICENSE ARRANGEMENT.




































                                      EarthBASE
                               REGISTRATION INFORMATION

           EarthBASE for 8086 and above . . . . . . . . . . . . . $ 199
           EarthBASE/386 for 80386 and above. . . . . . . . . . . $ 239
          *EarthBASE+ for 8086 and above  . . . . . . . . . . . . $ 399
          *EarthBASE+/386 for 80386 and above . . . . . . . . . . $ 479

          *Note:  A street-level geocoding version of EarthBASE.
           EarthBASE+ reads and displays boundary and map (street) files
           which are sold by MapInfo Corporation, 200 Broadway, Troy, NY
           12180.






          Make money order, cashier's check or personal/company check out
          to Resource Management Simulations and send with order form below
          to Resource Management Simulations , P.O. Box 11802, Santa Ana,
          CA, 92711, (714) 544-8872.  A personal/company check will delay
          shipment for 15 business days.  Prices are subject to change
          without notice.  California residents should include sales tax of
          7.75%.  ORDERS OUTSIDE THE US:  Send checks drawn on US banks in
          US dollars.  No C.O.D. orders will be accepted.  EarthBASE is a
          trademark of Resource Management Simulations.  dBASE is a
          registered trademark of Ashton-Tate.






































     Order Form
     |==========================||============================================|
     |Date                      ||Qty   Description   Unit Price    Subtotal  |
     |==========================||============================================|
     |Purchase Order No.        ||    |  EarthBASE  |  $ 199.00  |            |
     |                          ||--------------------------------------------| 
     |==========================||(1)subtotal-discount = subtotal|            |
     |Ship To                   ||============================================| 
     |                          ||    |EarthBASE/386|  $ 239.00  |            | 
     |--------------------------||-------------------------------|------------|
     |                          ||(2)subtotal-discount = subtotal|            |
     |--------------------------||============================================|
     |                          ||    |  EarthBASE+ |  $ 399.00  |            |
     |--------------------------||--------------------------------------------|
     |                          ||(3)subtotal-discount = subtotal|            |
     |--------------------------||============================================|
     |                          ||    |EarthBASE+/386| $ 479.00  |            |
     |--------------------------||--------------------------------------------|
     |                          ||(4)subtotal-discount = subtotal|            |
     |--------------------------||===============================|============|
     |                          ||(1)+(2)+(3)+(4)    =  subtotal |            |
     |--------------------------||-------------------------------|------------| 
     |                          ||                  |Tax(CA)7.75%|            |
     |==========================||                  |------------|------------| 
     Phone (   )                                    |  Shipping  |            |
                                                    |============|============|
                                                    |   Total    |            | 
                                                    |============|============| 

     Media  

     __ 5 1/4" Diskette
     __ 3 1/2" Diskette

     Shipping Continental U.S. per EarthBASE-EarthBASE/386 registration: 
     (Outside U.S. add $5.00)

     __ UPS Ground $5.00
     __ UPS Blue (second day) $ 15.00 
     __ Overnight $ 35.00





















          EarthBASE               Registration Form

          IMPORTANT:  Please fill out this information form so that we can
          notify you of product upgrades, new product announcements and
          special offers.

          Date Purchased (mo/d/yr):__/__/__
          First Name:__________________________________________
          Middle Initial:__
          Last Name:_________________________________________
          Title:_____________________________________________
          Company:_________________________________________________________
          Address:_________________________________________________________
          City:_____________________________________  State:____
          Zip:______________  Country:__________________________
          Daytime phone:______________________________  Extension:_________
          How did you hear about EarthBASE:________________________________
          _________________________________________________________________

          Application area of interest  Hardware platform of interest
          __ Government                 __ Macintosh Plus, SE, or Portable
          __ Utilities                  __ SE30, Macintosh II or above
          __ Sales                      __ 80286 or below
          __ Marketing                  __ 80386 or above
          __ Oil & Gas                  __ PS/2______________
          __ Consultant                 __ Workstation___________________
          __ Other_____________         __ Other___________________

          Analysis needs                Disk space
          __ Local (street level)       __ Two floppies
          __ Regional (ZIP or county)   __ 40 Mb or less
          __ National (by state, city)  __ greater than 40 Mb
          __ International (by country)
          __ Global (by continent)      Memory
                                        __ 1 Mb
          Existing data resides in      __ 2-5 Mb
          __ dBASE, FoxBase             __ greater than 5 Mb
          __ Oracle
          __ Lotus 1-2-3                Operating system
          __ Excel                      __ DOS
          __ Filemaker                  __ Windows
          __ Other_____________         __ OS/2
                                        __ Mac
                                        __ Unix

          Comments:________________________________________________________
          _________________________________________________________________
          _________________________________________________________________
          _________________________________________________________________
          _________________________________________________________________
          _________________________________________________________________
          _________________________________________________________________
          _________________________________________________________________






















































```
{% endraw %}

## MANUAL.DOC

{% raw %}
```



























                          EarthBASE - EarthBASE/386 Version 1.39

                           (c) 1989 - 1992; All Rights Reserved









                              Resource Management Simulations
                                      P.O. Box 11802
                                    Santa Ana, CA 92711
                                          U.S.A.

                                      (714) 544-8872





























                                           INDEX
               *.BGI . . . . . . . . . . . . . . . . . . . . . . . 4, 5, 47
               Append  . . . . . . . . . . . . . . . . . . . . .  9, 29, 30
               Backup  . . . . . . . . . . . . . . . . . . . . . . . . 3, 5
               Clear . . . . . . . . . . . . . . . . . . 10, 19, 20, 31, 32
               Copy  . . . . . . 3, 5, 9, 11, 19, 21, 29, 31, 33, 35, 39-45
               Count . . . . . . . . .  2, 12-15, 18, 19, 25, 34, 39-42, 44
               Create  . . .  1, 3, 8-11, 19-21, 29, 32, 35, 39, 41, 43, 45
               Cursor  . 2, 3, 8-14, 16-18, 21-26, 31-37, 39-42, 44, 47, 48
               dBASE . . . . . . . . . . . . . . . . . . . . . .  1, 30, 50
               Default Directory . . . . . . . . . . . . .  5, 7, 9, 25, 46
               Delete  . . . . . . .  9, 11, 19, 21, 29, 31, 33, 35, 36, 46
               Delimited . . . . . . . . . . . . . . . 1, 3, 10, 29, 32, 37
               DIR . . . . . . . . . . . . . . . . . . . . .  7, 19, 25, 46
               Directory Facility  . . . . . . . . . . . . . . . . . . . 46
               Display .  1-3, 7, 8, 11-13, 16-19, 22-24, 26, 27, 34, 36-39
               DOS SHELL . . . . . . . . . . . . . . . . 24, 33, 37, 44, 46
               Edit  . . . . . . . 10, 11, 13, 19-21, 31, 32, 35, 39-42, 44
               Error . . . . . . . . . . . . . . . . . . . . . .  3, 25, 47
               Exit  . . . . . . . . . .  10, 22, 24-26, 33, 37, 40, 44, 46
               Export  . . . . . . . . . . . . . . . . . . . . . . .  1, 37
               F9  . . . . 7, 13-16, 18, 22, 24, 28, 34, 36, 38, 39, 44, 45
               Field . . .  2, 3, 7-16, 18, 19, 21, 23-27, 29-36, 39-45, 49
               Fill  . . . . . . . . . . . . . . . . . . . . . . . .  8, 16
               Geocode . . . . . . . . . . . . . . . . . . .  1, 10, 18, 20
               Globe .  2, 3, 7-19, 22-24, 27-29, 34-37, 39, 41, 46, 48, 49
               Goto  . . . .  8, 10, 12, 16, 17, 19, 21, 27, 28, 35, 36, 38
               Help  . . . . . . . . 3-5, 7, 16, 27, 30, 33, 34, 38, 39, 44
               Import  . . . . . . . . . . . . . . . . . . . . . . .  1, 37
               Insert  . . . . . . . . . . . . . . . . . . .  9, 31, 32, 48
               Installation  . . . . . . . . . . . . . . . . . . . . . .  4
               Join  . . . . . . . . . . . . . . . . . . . .  9, 29, 30, 32
               Load  . . . . . . . . . . . . . . . . . . . .  9, 29, 31, 40
               Match . . . . . . . . . . . . . . 10, 14, 29, 32, 36, 40, 42
               Measure . . . . . . . . . . . . . . . . . . . . . 12, 18, 25
               Mouse . . . . . . . . . . .  2, 7, 8, 17, 19, 23, 24, 27, 48
               Move  . . . . . .  2, 8, 10-13, 17-19, 21-23, 25, 31, 39, 46
               Network . . . . . . . . . . . . 3, 5, 10, 18, 24, 37, 43, 49
               Open  . . . . . . . . . . . . . . . 1, 9, 10, 17, 19, 20, 34
               Path  . . . . . . . . . . . . . . . . . . . .  5, 25, 46, 47
               Print . . .  4, 7, 9, 13, 31, 33, 35, 37, 39, 41, 43, 44, 47
               PSWD  . . . . . . . . . . . . . . . . . . .  4, 5, 7, 19, 25
               Query . . . . .  2, 3, 13-15, 18, 24, 34, 36, 40, 42, 43, 49
               Range . . . . . . . . .  2, 12-15, 19, 24-26, 34, 38, 39, 49
               Read  . . . . . . . . . 1, 5, 10, 18, 24, 28, 37, 43, 47, 49
               Record  . . . . 2, 3, 7, 8, 10-23, 25, 26, 28, 30, 34-45, 49
               Save  . . . . . . . . . . . .  9-11, 13-15, 29-32, 39-43, 45
               Search  . . . . . . . . . . . . . . .  13, 34, 40-42, 44, 45
               Snap  . . . . . . . . . . . . . .  2, 11, 12, 17, 19, 23, 27
               Sort  . . . . . . . . . . . . . . . . . . . . 14, 35, 36, 38
               Symbol  . 2, 3, 11, 13, 14, 17-19, 23, 24, 26, 34, 37-40, 46
               TIFF  . . . . . . . . . . . . . . . . . . . . . .  2, 15, 23
               XBASE .  1-5, 7-18, 20, 23-26, 29-32, 34, 37, 39, 40, 43, 49
               Zip code  . . . . . 1, 5, 7-10, 13, 16-18, 20-22, 24, 34, 38













                                          NOTICE
                                   USING THIS SOFTWARE 
                               CONSTITUTES AGREEMENT TO THE 
                                  TERMS OF THIS LICENSE.
                     RESOURCE MANAGEMENT SIMULATIONS - EarthBASE
                                  LICENSE AGREEMENT

               The included computer software, the media on which it is
          provided, and any associated documentation ("Software") is
          licensed by Resource Management Simulations to the original
          customer("User") for use by the User only in accordance with the
          terms set forth below.
          1. LICENSE:  In exchange for a License fee, Resource Management
          Simulations hereby grants to User a personal nonexclusive and
          nontransferable license to use the Software and associated
          documentation subject to the terms and conditions set forth in
          this License Agreement.
          2. RESTRICTIONS ON USE AND TRANSFER:  The original and any backup
          copies of the Software are to be used only in connection with a
          single computer.  You may physically transfer the Software from
          one computer to another, provided that the Software is used with
          only one computer at a time.  The User should treat the Software
          as a book with it only being used by one person at any given
          time.  User may make no more than three(3) backup copies solely
          for use as backup and not to be sold, loaned, leased, gifted or
          otherwise transferred or used by any other person.
          User may not (a) make or distribute copies or translations of the
          Software or documentation to others, except that you may install
          the Software on a hard disk and make the three backup copies
          allowed under this Agreement; (b) rent, lease, or grant
          sublicenses or other rights in the Software; (c) provide use of
          the Software in a computer service business, network,
          timesharing, interactive cable television, multiple CPU or
          multiple user arrangement to users who are not individually
          licensed by Resource Management Simulations; (d) make
          telecommunications data transmissions of the Software; (e)
          disassemble, reverse-engineer, or attempt to disassemble or
          reverse-engineer any part of the Software; or (f) remove any
          notice of proprietary rights(i.e. copyright, patent, trademark,
          trade name, etc.) from the Software or packaging therefor.
          3. GOVERNMENT AND GOVERNMENT CONTRACTOR LICENSE: if User is a
          unit or agency of the United States Government, or a contractor
          that will or may supply the software to any unit or agency of the
          United State Government, User agrees that: (a) the Software is
          "Commercial Computer Software" as that term is defined in
          Paragraph 27.401 of the DoD Supplement to the Federal Acquisition
          Regulations and in any corresponding DAR and ASPR Regulations, or
          any subsequent laws or regulations or revisions thereto; (b)
          Resource Management Simulations represents to User that the
          Software is developed at private expense, and no part of it was
          developed with government funds; (c) the government's use of the
          Software is subject to "Restricted Rights" as that term is
          defined in paragraph 52.227-7013 of the DoD Supplement or any












          subsequent laws or regulations or revisions thereto; (d) Resource
          Management Simulations represents that the Software may be deemed
          a trade secret of Resource Management Simulations for all
          purposes including for the purpose of the Freedom of Information
          Act; (e) each copy of the Software supplied to the government or
          to another government contractor will also bear and/or have
          affixed near it the restricted rights legends as supplied by
          Resource Management Simulations; (f) User will indemnify Resource
          Management and hold it harmless against any liability, loss,
          costs, and expenses(including reasonable attorney's fees) arising
          out of any breach by User of the provisions of this License
          Agreement.
          4. DISCLAIMER OF WARRANTIES: THE SOFTWARE PROVIDED HEREUNDER IS
          LICENSED ON AN "AS IS" BASIS.  RESOURCE MANAGEMENT SIMULATIONS
          SPECIFICALLY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
          MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  NO ORAL OR
          WRITTEN STATEMENTS, REPRESENTATIONS OR OTHER AFFIRMATION OF FACT,
          INCLUDING BUT NOT LIMITED TO, STATEMENTS REGARDING CAPABILITY,
          CAPACITY, SUITABILITY FOR USE OR PERFORMANCE OF THE SOFTWARE
          SHALL BE RELIED UPON BY USER OR DEEMED TO BE A WARRANTY OR
          REPRESENTATION BY RESOURCE MANAGEMENT SIMULATIONS FOR ANY
          PURPOSE, OR GIVE RISE TO ANY LIABILITY OR OBLIGATION OF RESOURCE
          MANAGEMENT SIMULATIONS WHATSOEVER.  THE USER ACCEPTS ALL
          RESPONSIBILITY FOR SELECTING THE SOFTWARE TO MEET USER NEEDS OR
          SPECIFIC PURPOSE.
          5. AGREED LIMITATION OF LIABILITY:  If at the time of delivery
          there are any defects in the media on which the Software is
          provided, User's sole and exclusive remedy shall be the
          replacement of any media returned to Resource Management
          Simulations within ninety(90) days of receipt of the Software by
          User, or, at Resource Management Simulation's sole election and
          expense, a  refund of the License fee paid to Resource Management
          Simulations.
          IN NO EVENT SHALL RESOURCE MANAGEMENT SIMULATIONS BE LIABLE FOR
          ANY LOSS OF PROFIT OR ANY OTHER COMMERCIAL DAMAGE, INCLUDING BUT
          NOT LIMITED TO INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
          OTHER DAMAGES(INCLUDING BUT NOT LIMITED TO LOST PROFITS), EVEN IF
          RESOURCE MANAGEMENT SIMULATIONS HAS NOTICE OF THE POSSIBILITY OF
          SUCH DAMAGES.  RESOURCE MANAGEMENT SIMULATION'S LIABILITY, IF
          ANY, FOR DAMAGES ARISING OUT OF BREACH OF CONTRACT, TORT, PATENT
          OR COPYRIGHT INFRINGEMENT, OR ANY OTHER CAUSE OF ACTION, SHALL
          NOT EXCEED THE LICENSE FEE PAID BY THE USER FOR THE SOFTWARE
          HEREUNDER, NOTWITHSTANDING ANY FINDING THAT THE EXCLUSIVE REMEDY
          REFERRED TO ABOVE FAILED OF IT'S ESSENTIAL PURPOSE.
          No action, regardless of form, arising out of any claimed breach
          of this License or relating to transactions which are the subject
          of the License may be brought by either party more than one(1)
          year after the delivery of the Software.
          6. TERM:  Upon receipt of the License fee, this License becomes
          effective and remains in full force and effect for twenty(20)
          years or until terminated.  The License may be terminated at any
          time by destroying the Software and documentation and all copies
          in whatever form.  It will also terminate if User fails to comply












          with any term or condition of this license Agreement.  User
          agrees upon such termination to destroy the Software and
          documentation together with all copies in whatever form.
          7. GOVERNING LAW:  This License Agreement shall be construed,
          interpreted, and governed by the laws of the State of California. 
          If any portion of the Agreement is held to be invalid by a court
          of competent jurisdiction, the validity of the remaining
          provisions shall not be affected thereby.
          8. ENTIRE AGREEMENT:  This License Agreement constitutes the
          entire agreement between Resource Management Simulations and User
          with respect to the Software and supersedes all prior
          communications with the User, including all oral or written
          proposals.  This License may not be modified except in writing by
          a duly authorized representative of Resource Management
          Simulations.



















































                                  TABLE OF CONTENTS



          1.0 INTRODUCTION   . . . . . . . . . . . . . . . . . . . .    1
               1.1 OVERVIEW  . . . . . . . . . . . . . . . . . . . .    1
               1.2 GETTING STARTED   . . . . . . . . . . . . . . . .    4

          2.0 TUTORIAL   . . . . . . . . . . . . . . . . . . . . . .    7

          3.0 GLOBE WINDOW   . . . . . . . . . . . . . . . . . . . .   16
               3.1 FEATURES  . . . . . . . . . . . . . . . . . . . .   16
               3.2 MENU ITEMS  . . . . . . . . . . . . . . . . . . .   19
               3.3 FUNCTION KEYS   . . . . . . . . . . . . . . . . .   27

          4.0 FILE CREATION WINDOW   . . . . . . . . . . . . . . . .   29
               4.1 MENU ITEMS  . . . . . . . . . . . . . . . . . . .   31
               4.2 FUNCTION KEYS   . . . . . . . . . . . . . . . . .   33

          5.0 RECORD WINDOW  . . . . . . . . . . . . . . . . . . . .   34
               5.1 FEATURES  . . . . . . . . . . . . . . . . . . . .   34
               5.2 MENU ITEMS  . . . . . . . . . . . . . . . . . . .   35
               5.3 FUNCTION KEYS   . . . . . . . . . . . . . . . . .   37

          6.0 FIELD WINDOW   . . . . . . . . . . . . . . . . . . . .   39
               6.1 FEATURES  . . . . . . . . . . . . . . . . . . . .   39
               6.2 MENU ITEMS  . . . . . . . . . . . . . . . . . . .   41
               6.3 FUNCTION KEYS   . . . . . . . . . . . . . . . . .   44

          7.0 REFERENCE  . . . . . . . . . . . . . . . . . . . . . .   46























                                                                        i












                                   LIST OF FIGURES


          Figure 1   . . . . . . . . . . . . . . . . . . . . . . . .   19
          Figure 2   . . . . . . . . . . . . . . . . . . . . . . . .   31
          Figure 3   . . . . . . . . . . . . . . . . . . . . . . . .   35
          Figure 4   . . . . . . . . . . . . . . . . . . . . . . . .   41














































                                                                       ii












             EarthBASE


                                   1.0 INTRODUCTION


             1.1 OVERVIEW

                  EarthBASE is a mapping application which provides
             features in four main areas:  powerful database functions
             (read/write/create XBASE files; import/export delimited
             ASCII files), geocodes address locations onto a world map
             using 5-digit zip code or latitude/longitude data, graphics
             file export (.TIF), and data analysis functions.  XBASE
             files are dBASE compatible database files created from
             applications such as dBASE II-IV, FoxPro, Clipper, etc..  A
             strength of EarthBASE is its ability to work with large
             databases while requiring minimal hardware.  EarthBASE is
             divided into four windows:  the globe window, the record
             window, the field window, and the file creation window.  The
             main features are as follows:

               FILE CREATION WINDOW

               XBASE files may be created or modified according to a
               user-specified field structure.  Existing files may
               have fields added, deleted, and/or field names changed. 
               Multiple files may be joined and records may be
               appended onto existing files.  Delimited files may be
               imported and converted to XBASE files.

               GLOBE WINDOW

               File Import:  Opens XBASE files containing up to 35,000
               records.  EarthBASE requires 570 KB to open a 35,000
               record file.  An XBASE file's structure is
               automatically understood as it is loaded.  EarthBASE
               asks the user to identify fields containing data which
               will be used to assign (geocode) a longitude and
               latitude to each record.  The user is asked to identify
               fields containing longitude, latitude and zip code
               data.

               A record is located in the globe window by using data
               from its latitude and longitude fields, or secondly,
               the first five digits of a zip code from its zip code
               field if these fields are present.  All of EarthBASE's
               features, except record location visualization, are
               active if no location data is available.

               Record Display Toggle:  Records may be displayed based
               on the following criteria:  all records, all records

             INTRODUCTION                                               1












             EarthBASE

               included by the last query or all records excluded by
               the last query.

               Output:  The displayed contents of the globe window,
               governed by the record display toggle, may be sent to
               the following printers as output:  Epson 9 pin, Epson
               24 pin, HP LaserJet and HP DeskJet.  The displayed
               contents may be stored to disk as a .TIF graphics image
               file (TIFF Class B - black and white) or as an XBASE
               file.  Records are displayed in the globe window and
               stored in the XBASE file in the order that they have
               been sorted in the record window.

               Zoom:  Zooms in until the width scale of the globe
               window is 129 feet wide.

               Speed:  On a 20 MHz 80386 machine, the entire globe is
               refreshed in less than 1 second if no records are
               loaded or in less than 6 seconds if 30,000 records are
               loaded.  Close zoom-in refreshes are near real-time,
               without records loaded.  

               Cursor Movement:  The arrow keys move the globe in
               northward, southward, eastward, and westward
               directions.  The snap mode moves the globe from record
               location to record location in the above mentioned
               directions.  A Microsoft compatible mouse may be used
               in place of the arrow keys if the appropriate driver is
               installed.

               Measurement:  Measures the direct air distance between
               any two points in miles and kilometers.

               Count:  Counts the number of records within a user-
               defined circular perimeter.  If the count mode is
               active during queries in the field window, the query
               has the added constraint that the record lie within the
               chosen perimeter.

               Symbol:  The user may choose any field, out of which,
               the globe window's display symbols for each record is
               extracted.  The font may be scaled to 9 sizes.

               Range:  The user may choose any numeric field to divide
               the records into two ranges (uses two font sizes and
               colors).





             INTRODUCTION                                               2












             EarthBASE


               RECORD WINDOW

               The record window lists all of the records in the
               opened XBASE file, row by row.  The user specifies
               which fields are displayed in the window.  Records may
               be sorted alphabetically according to their displayed
               fields or according to their distances from the globe
               window's present cursor location.  The window provides
               a string searching function.  The record display toggle
               functions in the record window as it does in the globe
               window.  The record window list may be printed to a
               delimited ASCII file or printer.

               FIELD WINDOW

               The field window may be entered after selecting a
               record with respect to its location in the globe window
               or with respect to its displayed fields or record
               number in the record window.  This window views,
               prints, queries, edits, creates, copies, sums (field
               values), and deletes records in the opened XBASE file. 
               Queried records may be edited, counted, summed (field
               values), or copied to a new file.  All fields in the
               opened XBASE file may be queried by example using '>',
               '<', and wildcard symbol '*' to constrain the query. 
               The record displayed in the field window may be printed
               to a file or printer.  The record display toggle
               functions as it does in the globe window and is used to
               create compound queries.

               GENERAL FEATURES

               Menu driven, supports Microsoft Compatible Mice.
               A password protected entrance.
               Device independent graphics support for CGA, MCGA, EGA,
               VGA, Hercules, AT&T 6300, and IBM 3270 PC.
               Help Screens.
               An 80386SX, 80386, and 80486 version is available.
               Shell to DOS restores RAM fully to second application.
               Internal DOS I/O error handling.
               Built-in support for 8087-80387 math coprocessors and
               emulation.
               File backup.
               DOS (> 3.0) LAN Compatibility - writes block writes on
               record basis (see a discussion on network capabilities
               in the Reference section).




             INTRODUCTION                                               3












             EarthBASE


             1.2 GETTING STARTED

                  Installation should have placed the following files in
             a directory:

               Ebase.exe:     The executable program.  Ebase386.exe is
                              the executable program for 80386 and 80486
                              machines.

               Ebase.ovr:     The executable program's overlay file. 
                              Ebase386.ovr is the overlay file for 80386
                              and 80486 machines.

               Citysm.dbf:    XBASE file containing several hundred
                              cities.  The file contains state, city,
                              latitude, and longitude fields.

               *.bgi:         Graphic drivers.

               Litt.chr:      Font driver.

               Pswd:          Password file.

               World.dat:     Contains location data for the world's
                              land masses.

               Demo.*         Various files used by the animated demo
                              mode of EarthBASE.  Type 'ebase demo' to
                              activate the demo.

               Zip5.dat:      Contains geocoding data for the first five
                              digits of zip codes (5-digit accuracy file
                              received after product is registered).

               Help.dat:      Help screen text file.

               *.doc:         Various document text files.  The license
                              document file explains registration
                              requirements for EarthBASE.

                  The executable file will work on IBM compatible
             computers running under the DOS operating system with at
             least 256 KB of RAM.  Minimizing buffer and file numbers in
             the config.sys file and not using a print spooler, ram disk,
             or any other ram resident program will allow more ram to be
             allocated to EarthBASE.  It is recommended that the computer
             have 640 KB of usable RAM (a 1 Megabyte RAM machine) which
             would allow EarthBASE to access up to 35,000 XBASE file
             records.  The *.BGI graphics driver files allow for the

             INTRODUCTION                                               4












             EarthBASE

             usage of most graphics boards and monitors.

                  The computer must be started from DOS, which is
             provided by the user.  Make a backup copy of program files
             on formatted blank disks before starting.  Copy the contents
             of the EarthBASE diskette to a directory on a hard disk. 
             Type 'pkunzip earthbas.zip' to unarchive the program files. 
             All of the unarchived files, except the document files,
             should be found in EarthBASE's default directory or the
             system's environment path.  Typing 'ebase' starts EarthBASE. 
             Typing 'ebase demo' activates a 20 minute animated demo of
             EarthBASE's features.  EarthBASE searches for its zip code
             data file on floppy disk drive B: after having searched on
             the hard disk.  EarthBASE can function without this data
             file but will lack its zip code geocoding capabilities.  If
             EarthBASE is to be run concurrently from a network server,
             EBASE.EXE should be given read-only status (see network
             information in the reference section, and network
             registration requirements in LICENSE.DOC).

                  EarthBASE's minimal requirements allow it to be run
             from systems with only one low-density floppy disk drive and
             256 KB of RAM (i.e. laptops, notebooks, diskless
             workstations, etc.).  Copy the following minimal files to a
             low-density floppy diskette:

             EBASE.EXE      *EarthBASE EXECUTABLE FILE (or EBASE386.EXE)
             EBASE.OVR       EarthBASE OVERLAY FILE (or EBASE.OVR)
             *.BGI          GRAPHICS DRIVER FILES (choose one of the     
                            following)
                                       CGA.BGI     ---CGA
                                       EGAVGA.BGI  ---EGA or VGA
                                       ATT.BGI     ---AT&T
                                       HERC.BGI    ---Hercules
                                       PC3270.BGI  ---IBM PC3270
             PSWD            PASSWORD FILE
             LITT.CHR        FONT FILE
             WORLD.DAT       WORLD BOUNDARY DATA FILE
             HELP.DAT        HELP SCREEN TEXT FILE

             Place the diskette in drive a:.  Notice that the files for
             the demo were not transferred to the low-density floppy
             diskette so the animated demo can't be run in this
             configuration.  The 'ZIP5.DAT' file (400 KB), if used,
             should be placed on a high-density 5 1/4 inch; a low or
             high-density 3 1/2 inch floppy diskette in drive b: or on a
             hard disk in the environment's path.  An XBASE database
             file, if used, must be placed where disk space is available
             on a diskette in drive a: or b:; or any location on a hard
             disk.

             INTRODUCTION                                               5












             EarthBASE


                  The user must enter the correct password to gain access
             to EarthBASE.  Until the user has created a password inside
             EarthBASE, the user may pass this point by pressing the
             ENTER key.














































             INTRODUCTION                                               6












             EarthBASE


                                     2.0 TUTORIAL

                  This tutorial will step through the various features of
             EarthBASE, as the animated demo does.  Key items of the
             tutorial are highlighted in bold print.  It creates an XBASE
             file and finally saves a graphics (.TIF) file displaying and
             XBASE file containing queried records.  At the DOS prompt,
             after typing 'ebase' or 'ebase386', you are asked to enter a
             security password.  In the main menu's SYSTEM item of the
             globe window, you may enter a desired password by choosing
             the PSWD menu item.  Until this is done, no password is
             required at the initial screen.  If you like you may get the
             feel of adjusting the globe position by using the arrow keys
             or a mouse.  The Z and ALT-Z keys adjust the zoom level in
             or out, respectively.  The / key toggles the activation of
             the globe or the menu receive keyboard or mouse inputs.  We
             will return to globe movement later in the tutorial.

                  EarthBASE contains the following four windows:  the
             globe window (displays and analyzes XBASE record locations),
             the record window (displays selected fields of sorted XBASE
             records), the field window (queries and edits the fields of
             XBASE records) and the file creation window (creates and
             modifies XBASE files based on a user-defined field
             structure).  

                  The globe window displays the following:  an
             orthographic view of the globe, a menu on the right border,
             program information along the bottom (free RAM memory,
             number of displayed records, decimal longitude and
             latitude), and above the just mentioned information a
             message and editing window.  

                  The number of displayed records only represents how
             many records are currently displayed in the globe window.  A
             record may not be displayed in the globe window if it was
             not successfully geocoded from zip code or latitude/
             longitude fields; or the record display toggle (F9 key) has
             not allowed it to be displayed.  It is possible to have the
             number of displayed records equal 0 even though there are
             many records in the XBASE file.  These non-displayed records
             may still be accessed in the record and field windows.  

                  The F1 key presents a help screen in each window of
             EarthBASE.  Press the F1 key to see a summary of available
             functions in the globe window.  It should be mentioned at
             this point that EarthBASE's default directory may be altered
             by selecting DIR in the main menu's SYSTEM item in the globe
             window.

             TUTORIAL                                                   7












             EarthBASE


                  You may freely adjust the view of the globe by changing
             the latitude and longitude of the cursor position in the
             center of the globe.  Use the arrow keys, a mouse or track
             ball to alter the latitude and longitude.  The mouse or
             track ball driver must be loaded into memory prior to
             entering EarthBASE.  Use the F4 key to enter the magnitude
             of latitude and longitude movement when the arrow keys are
             pressed.  When a track ball is used, a negative magnitude
             will move the globe in the same direction as the track ball
             movement.  The ALT-F4 key sets the mouse or track ball
             sensitivity.  You may zoom in your perspective of the globe
             by pressing the Z key (nearer by a factor of 2) or out by
             pressing the ALT-Z key (further by a factor of 2).  Pressing
             the C key zooms the globe to the finest screen resolution of
             128 feet wide.  Pressing the F key zooms the globe to the
             coarsest screen resolution of 12500 miles.

                  If you want to move the cursor location without
             redrawing the screen, toggle off globe movement with the M
             key.  Toggle back globe movement again with the M key.  You
             can GOTO any location by choosing the GOTO menu item in the
             main menu.  In the GOTO sub-menu, choose either the POLAR
             item to enter a latitude and longitude or the ZIP item to
             enter a zip code.  The globe will move its cursor location
             to data you have entered.  If the zip code geocoding file
             does not contain a zip code that you have entered, a number
             of possible zip codes will be presented to you to choose
             from.  The ZIPEDT menu item allows you to enter the latitude
             and longitude centroid locations of newly assigned zip codes
             that are not yet contained in the zip code geocoding file.

                  The globe is displayed (from fastest refresh to
             slowest) in three ways:  display no continent boundaries,
             display continent boundary outlines or fill in the continent
             boundaries.  The F3 key is used to toggle these modes. 
             Displaying continent boundaries is not always necessary if
             you are zoomed in with record locations displayed on the
             screen.  Globe movement will interrupt any screen drawing
             unless this is toggled off with the F7 key.
                  
                  Press the / key to activate the globe window's main
             menu (the / key toggles whether the globe or the menu is
             currently active in the globe window).  Then use the up and
             down arrow keys to place the cursor on the FILE menu item. 
             Press the ENTER key to choose this menu item.  In this sub-
             menu, choose the CREATE menu item to enter the file creation
             window.  This window allows you to create XBASE files with a
             unique field structure.  Press the F1 key to see a short
             description of the file creation window.

             TUTORIAL                                                   8












             EarthBASE


                  The left most column lists the field names of an
             existing loaded field structure.  In the columns to the
             right you may alter these field names, specify field types
             and specify field lengths.  If the field type is numeric
             (N), you are asked to enter the number of decimal places.   
             You may create a unique field structure or load the field
             structure of an existing XBASE file.  In order for an XBASE
             file's records to be geocoded in the globe window, an XBASE
             file's field structure must contain a zip code field or
             latitude and longitude fields.  Field names must be spelled
             as shown the overview section above.  You can load an XBASE
             file's field structure by moving the cursor down to the
             horizontal menu bar and pressing the FILE menu item.  Then
             choose the LOAD menu item and type in a file's name.  The
             wildcard (*.dbf) name may be used to open up the directory
             utility to show all matching files in the default directory. 
             In the directory utility you may select a filename by
             highlighting the filename and pressing the ENTER key or
             escape out of the window by pressing the ESC key.

                  Examine the field structure of this loaded XBASE file. 
             You may add, delete or modify the characteristics of
             existing fields.  Choose the ROW menu item and then either
             the INSERT, DELETE or COPY menu items to insert blank field
             rows, delete field rows, or copy a field row of the existing
             field structure.  If you like you may load the field
             structures of multiple XBASE files and append them to the
             fields already contained in the field window.  The main menu
             also includes the PRINT menu item which allows you to print
             the field structure to a file or printer.

                  When the field structure is completed, you should save
             the structure by saving it as an XBASE file.  Choose the
             FILE menu item in the main menu and then the SAVE menu item
             in the sub-menu.  You may save it as a new file with no
             records by not entering a filename when you are asked to
             enter a filename from which records will be extracted from
             and existing file.  If you do enter a filename of an
             existing file, non-deleted records will be copied from the
             existing file to a second file you specify if there are like
             fields in the existing file and the field structure in the
             file creation window.  Matching fields must have exact field
             names and type, but need not have the same field length.   
             If the second file already exists, you may APPEND the
             extracted file's records to the second file.  Records from
             multiple existing files may be extracted giving you the
             ability to JOIN multiple databases.  The multiple databases
             should however contain identical records.


             TUTORIAL                                                   9












             EarthBASE

             The extracted records may be contained in a delimited file,
             but the delimited fields must match the field structure in
             the field window by order and type.  This is the method of
             importing a delimited file into XBASE file format so that it
             may be used in EarthBASE.  Create the delimited file's field
             structure in the file creation window and then save the
             delimited file's records in an XBASE file.

                  It is possible to edit the field structure of an
             existing file by loading its field structure, editing the
             structure, extracting records from the existing file and
             saving the new structure to the same existing file.  You may
             clear the field structure in the file creation window by
             loading a new file or by choosing the CLEAR menu item in the
             FILE sub-menu.  We will now exit out of the file creation
             window back to the globe window by pressing the ESC key
             (press several times depending on the current menu level).

                  In the globe window, you may now open the file you just
             created/modified in the file creation window or any file by
             choosing the OPEN menu item in the FILE sub-menu.  Again the
             directory utility is available for wildcard filenames. 
             Opening a file clears from memory a currently opened file as
             does choosing the CLEAR menu item of the FILE menu item.  In
             the opening process, EarthBASE asks you to identify fields
             containing data which will be used to assign (geocode) a
             longitude and latitude to each record.  You will is asked to
             identify fields containing longitude, latitude and zip code
             data.  If the file contains a zip code field or latitude and
             longitude fields and each record contains data in these
             fields, the record will be geocoded onto the surface of the
             globe.

                  When a file is opened, each record's location data is
             loaded into memory.  This speed's the globe drawing process
             and is also the reason why available memory determines how
             many records an opened file may contain.  If a file is
             shared on a network where other users or processes are
             continually altering record's location data, you may want to
             update the location data in memory by pressing the ALT-F1
             key.  This forces EarthBASE to read the location data from
             disk until the ALT-F1 key is pressed again.  This, of
             course, slows the globe drawing process.

                  Now that a file is opened, we can now use the record
             window's GOTO function to move directly to the location of a
             specific record.  Press the F10 key to enter the record
             window.  In the record window, the cursor highlights the
             record nearest to the globe window's current cursor
             location.  Use the up and down arrow keys, the PAGEUP and

             TUTORIAL                                                  10












             EarthBASE

             PAGEDN keys and/or the CTRL-PAGEUP and the CTRL-PAGEDN keys
             to move the cursor to a record of choice.  Then press the
             F10 key to return back to the globe window at the location
             of the selected record.  If you had pressed the ESC key in
             the record window, you have returned back to the globe
             window at its original location prior to entering the record
             window.  The record window will be discussed further later
             in the tutorial.

                  Choosing the RECORD item in the globe window's main
             menu brings up a sub-menu of items which act on records. 
             You may edit, delete, create, copy or move a record after a
             record or location has been selected.  All of the menu items
             except the delete function loads the field window with
             record of choice or with a new record with the latitude and
             longitude fields filled with the current cursor location. 
             After editing the record's fields, you must press the F10
             key to save the record to the opened XBASE file.  Other
             functions available in the globe window will be discussed
             later.  Press the ESC key to return back to the globe
             window.  A short cut to entering the field window is to
             press the F5 key.  The field window will contain the record
             closest to the globe window's current cursor location.

                  In the globe window, if you want the cursor to move to
             the location of a record, it may take some time to do this
             with the arrow keys.  By pressing the F2 key, the snap mode
             is activated so that the cursor location snaps from record
             location to record location.  If you press the F2 key again,
             the snap mode is deactivated.  In addition to the 'x'
             representing a record location in the globe window, you can
             also select any field in the opened file from which each
             record's display symbol will be extracted.  Choose the
             SYMBOL item in the globe window's main menu.  A field select
             window is presented to you listing all of the fields in the
             opened file.  Fields which are currently displayed in the
             record window are highlighted.  Choose one of the fields by
             placing the cursor on it and pressing the ENTER key.  You
             may escape out of the window by pressing the ESC key.

                  The first non-blank character of the selected symbol
             field is now displayed for all records.  Pressing the F6 key
             causes the entire field contents to be displayed for each
             record.  Pressing the F6 key again causes only one character
             to be displayed.  Displaying only one character will refresh
             the screen faster.  Choosing another display field or
             deactivating a display field requires that you choose the
             SYMBOL menu item again.  Pressing the F4 key allows you to
             enter a font size value from 1 to 9.


             TUTORIAL                                                  11












             EarthBASE

                  The RANGE item in the globe window's main menu allows
             you to choose a numeric field in the field select window
             which will be used to divide all records into two ranges. 
             Only numeric fields are displayed in the field select
             window.  Once a field is selected, you are asked to enter a
             numeric value to divide the records based on the selected
             field.  Records whose field value is larger than the
             dividing value will have their display items colored red and
             at one font size larger than the default font chosen with
             key F4.  Records whose field value is smaller than or equal
             to the dividing value have their display items displayed at
             one font size smaller than the default font size.  Choosing
             another range field or deactivating a range field requires
             that you choose the RANGE menu item again.  Please leave the
             range field active during the rest of the tutorial.

                  You may measure the direct air distance between any two
             points by choosing the MILES item in the globe window's main
             menu.  Once the base location is chosen, use arrow keys,
             snap mode and/or GOTO functions to move the cursor to the
             desired locations.  You may repeatedly measure new distances
             from the original base location prior to pressing the ESC
             key to stop the measuring function.  This mode may not be
             active if the M key has been pressed to freeze the globe
             movement.

                  You may count the number of records located in a chosen
             radius by choosing the COUNT item in the globe window's main
             menu.  Once the base location is chosen, use arrow keys,
             snap mode and/or GOTO functions to move the cursor to the
             desired locations.  In this case, the cursor is the
             intersection of the radius and the circle.  The message
             window displays the radius of the circle and the number of
             displayed records contained in the circle.  You may
             repeatedly count the number of records in a new circle size
             from the original base location prior to pressing the ESC
             key to stop the measuring function.  This mode may not be
             active if the M key has been pressed to freeze the globe
             movement.  Please leave the count mode active during the
             rest of the tutorial.

                  Let's return to the record window again by pressing the
             F10 key.  The record window lists all of the non-deleted
             records in the opened XBASE file with the record number
             along the left border.  If a range field is active and a
             record's field value is greater than the range dividing
             value, the record number will be colored red for color
             monitors and reversed color for monochrome monitors.  If the
             globe window's count mode is active the displayed fields of
             records contained in the circle have their colors reversed. 

             TUTORIAL                                                  12












             EarthBASE

             Press the F1 key to see a summary of available functions in
             the record window.

                  By default, the record window displays fields, if
             available, containing latitude, longitude, zip code, user-
             specified range and user-specified symbol data.  By pressing
             the F8 key, you may choose your own display fields in.  The
             F7 key returns the displayed fields to the default fields. 
             Pressing the F2 key allows you to search for a string.  The
             horizontal menu along the bottom allows you to enter the
             field window similar to using the record menu in the globe
             window.  The PRINT menu item prints the record window
             contents to a file or to a printer.  Move the cursor down to
             the menu and choose the EDIT menu item.  

                  After you choose a record, you enter the field window. 
             If a range field is active and a record's field value is
             greater than the range dividing value, the record number on
             the top screen row will be colored red for color monitors
             and reversed color for monochrome monitors.  If the globe
             window's count mode is active the top screen row states
             whether or not the record is contained in the circle.  The
             up and down arrow keys moves the cursor from field to field. 
             The PAGEUP and PAGEDN keys and/or the CTRL-PAGEUP and the
             CTRL-PAGEDN keys loads previous or later records into the
             field window. By pressing the left arrow key or beginning to
             type activates the editing of a specific field until the
             ENTER key is pressed.  The field window's contents can be
             printed to a file or printer by pressing the ALT-F9 key. 
             The F7 key creates a new record without leaving the field
             window.  The F8 key copies the present field window contents
             to a new record without leaving the field window.  Press the
             F1 key to see a summary of available functions in the field
             window.

                  The field window's main functions are to edit the
             fields of a record and to query/search records.  The F2, F3,
             and F4 keys allow you to search for records whose
             appropriate field (cursor-highlighted field) contains string
             which you specify.  The F2 key allows you to edit each
             matched record.  Remember to press the F10 key to save the
             record contents before proceeding to a new record.  The F3
             key counts matched records and the F4 key copies matched
             records to an XBASE file which you specify.  The F5 key sums
             the appropriate field (cursor-highlighted numeric field)
             values of all records.  The F6 key writes a string which you
             specify to the appropriate field (cursor-highlighted field)
             of all records.  

                  The ALT-F2, ALT-F3, ALT-F4, ALT-F5, and ALT-F6 function

             TUTORIAL                                                  13












             EarthBASE

             keys are query by example function keys.  They perform the
             same function as their non-ALT counterpart keys above except
             that in order for a record to match, all of its fields must
             match all of the field window fields exactly.  The special
             query symbols '<', '>', and '*' are also used to modify the
             matching constraints when the ALT function keys are used. 
             If a string in a field window field is led by a '<' or '>',
             a record's field string will only match if it is less than
             or greater than the field window's field string following
             the '<' or '>' symbol.  Matches are not case sensitive
             (whether or not a character is capitalized).  Spaces are not
             ignored in the field window's field nor in a record's field. 
             If the field window's field contains the '*' wildcard
             symbol, only the characters to the left of the '*' symbol
             are used for matching.  Therefore if a field in the field
             window contains an '*' as the first character, the field
             will not be used in rejecting records.  It is suggested that
             you save 'query' record templates as records in the XBASE
             file for commonly executed queries.

                  If the count mode is active in the globe window prior
             to entering the field window, all record matches must
             satisfy the added constraint that the record lie within the
             user-specified circular perimeter.  This constraint is valid
             for all ALT and non-ALT keys.  Please perform a query at
             this time using one of the ALT function keys.  The rest of
             the tutorial assumes that a query has been performed.  By
             toggling the F9 key, you dictate whether the field window
             accesses all records, only records included by the last
             query or only records excluded by the last query.  In this
             way you may perform compound queries by basing new queries
             on the results of past queries.  After each query the F9
             mode is set to accessing all records.

                  Press the ESC key now to return to the record window. 
             By default the record window lists the records in the order
             of their record numbers.  Press the F5 key to sort the
             displayed fields alphabetically.  Remember that you can
             specify which fields are displayed.  Press the F6 key to
             sort the records according to their distance to the globe
             window's current cursor location.

                  At this point, the record window displays the sorted
             records in addition to information on each record's
             relationship to the range field and count mode.  Additional
             information may be gleaned by pressing the F9 key.  This
             toggles whether all records are displayed, all records
             included by the last query are displayed or all records
             excluded by the last query are displayed.  Press the ESC key
             to return back to the globe window. 

             TUTORIAL                                                  14












             EarthBASE


                   At this point just as in the record window, the globe
             window displays the record locations in addition to
             information on each record's relationship to the range field
             and count mode.  Again, additional information may be
             gleaned by pressing the F9 key.  Press the F9 key to see the
             records included by the last query.  Press it again to see
             the records excluded by the last query.  Notice that the
             count mode only counts the number of records displayed
             inside the circle.  The number counted will therefore differ
             based on the status of the F9 key.

                  As an end of the tutorial, we will now show how to save
             the globe window's screen contents to a graphic file or the
             displayed fields to an XBASE file.  In the globe window's
             main menu, choose the OUTPUT menu item.  In the sub-menu,
             choose the .TIF menu item.  The F9 key will determine which
             records are displayed when the TIFF graphics file is saved. 
             Choose the .DBF menu item to save the displayed records in
             an XBASE file.  Remember that the F9 key will determine
             which records are displayed and therefore which records are
             saved in the XBASE file.  The displayed records are also
             saved in the order in which they have been sorted in the
             record window.

                  Most of EarthBASE's functions have now been discussed. 
             Refer to other sections of the manual for further
             information.























             TUTORIAL                                                  15












             EarthBASE


                                   3.0 GLOBE WINDOW


                  The purpose for this window is to display the global
             locations of records contained in the opened XBASE file. 
             Upon entering this window the user is presented with an
             orthographic view of the world, a menu along the right
             border, and an information window along the bottom as seen
             on the manual's front cover.  The information window lists
             from left to right the amount of free RAM, the number of
             XBASE records displayed in the globe window, and the
             latitude and longitude location of the screen cursor.  The
             information window also displays textual information and
             asks for keyboard input at appropriate times.  The F1 key
             displays a help screen listing the available function keys. 
             All of the function keys described in this section are also
             found in the globe window menu tree's toggle, system and
             goto menu items.

                  The number of displayed records only represents how
             many records are currently displayed in the globe window.  A
             record may not be displayed in the globe window if it was
             not successfully geocoded from zip code or latitude/
             longitude fields; or the record display toggle (F9 key) has
             not allowed it to be displayed.  It is possible to have the
             number of displayed records equal 0 even though there are
             many records in the XBASE file.  These non-displayed records
             may still be accessed in the record and field windows.  The
             largest record number in the XBASE file may be found as the
             last row number in the record window.

                  This section will describe the features of the globe
             window, the menu items, and the command keys.  The field
             window may be entered directly by pressing the F5 key or by
             choosing the appropriate menu item under the RECORD menu. 
             The record window may be entered directly by pressing the
             F10 key.  When the F5 or F10 key is pressed, the field
             window contains and the record window highlights the record
             nearest to the globe window's current location.

             3.1 FEATURES

                  Initially the globe's continent boundaries and equator
             are outlined.  The user's location is at the cursor location
             in the center of the globe.  By pressing the F3 toggle key
             the user can cause EarthBASE to display, not display or fill
             in the boundaries of the continents.  Pressing the Z key
             will cause the user's perspective to zoom in twice as close. 
             The user may zoom in seven times.  Pressing the C key moves

             GLOBE WINDOW                                              16












             EarthBASE

             the window directly to the nearest zoom level. To zoom out
             twice as far, press the ALT-Z key combination.  Pressing the
             F key moves the window directly to the furthest zoom level.

                  The right arrow key moves the cursor location eastward. 
             The left arrow key moves the cursor location westward.  The
             up arrow key moves the cursor location northward.  The down
             arrow key moves the cursor location southward.  If an XBASE
             file is open and the user has toggled on the snap mode  (F2
             key), the arrows keys will move the cursor to the nearest
             northern, southern, western, or eastern record.  In this
             case the cursor latitude and longitude is exactly that of
             the record.  Cpu time may be saved by pressing the M key. 
             In this mode the globe is frozen and the cursor moves on the
             globe up to the globe's current horizon.  Pressing the M key
             again freezes the cursor and frees the globe for movement.

                  A Microsoft compatible mouse may be used in place of
             the arrow keys if the user has installed an appropriate
             device driver.  The magnitude of movement in degrees is
             determined by the user.  By pressing the F4 key, one can
             specify the movement amount, in degrees, at the present zoom
             level.  If the user zooms in once, the movement value is
             divided by 2.  If the user zooms out once the movement value
             is multiplied by 2.  The cursor movement value is limited to
             between 0.001 and 45.0 degrees.  By pressing the CTRL key
             while pressing the right or left arrow keys, the cursor
             movement is multiplied by 10.  The PAGEUP and PAGEDN keys
             replicate the up and down keys, but multiply the cursor
             movement by 10.  If an up or down command is given that
             would require cursor movement past the north or south pole,
             the cursor will position itself at the north or south pole.

                  Pressing the HOME key moves the cursor location to
             latitude = 0 degrees and longitude = 0 degrees.  Pressing
             the END key moves the cursor location to latitude = 0
             degrees and longitude = 180 degrees.  Pressing the INS key
             moves the cursor location to latitude = 0 degrees and
             longitude = -90 degrees.  The menu item GOTO allows the user
             to specify a longitude and latitude or zip code to which the
             globe window will be moved directly (the record window
             allows the user to GOTO a specific record location - F10
             key).  Pressing the / key deactivates the globe movement and
             activates the menu.  The globe is not redrawn until the
             keyboard buffer is empty.  The redrawing process may be
             interrupted by a keyboard input.  The cursor in the center
             of the globe blinks when EarthBASE is idle.  

                  If an XBASE file has been opened and the record is
             valid for display, a '+' or user-defined ascii symbol will

             GLOBE WINDOW                                              17












             EarthBASE

             be displayed on the globe at its latitude and longitude
             location.  The records are displayed in the order that they
             have been sorted in the record window.  

                  If a record's displayed screen pixel location coincides
             with the cursor's screen pixel location, its representative
             fields (chosen in the record window) will be shown in the
             information window.  If more than one record's displayed
             screen pixel location coincides with the cursor's screen
             pixel location, only one record's representative fields will
             be displayed.  In this case the user must zoom in closer to
             differentiate between the various record locations.  If the
             user wants a record's representative fields to appear in the
             information window and the record's location is near the
             cursor location, there are two methods to cause this to
             happen.  The user may use the arrow keys to move the
             record's screen pixel location or the user may zoom out to
             cause this to happen.  

                  When a file is opened, EarthBASE asks the user to
             identify fields containing data which will be used to assign
             (geocode) a longitude and latitude to each record.  The user
             is asked to identify fields containing longitude, latitude
             and zip code data.  If latitude and longitude data is not a
             available, the first five digits of a zip code in a zip code
             field will be used to assign a general location if it is
             available.  This location data is stored in memory and no
             longer read from the disk to speed the drawing process.  If
             the user alters the location data for a record, the data in
             memory is updated.  If other users on a network or other
             processes alter the databases location data, EarthBASE is
             not aware of these changes and does not update the data in
             memory.  In these cases, the user should use the ALT-F1 key
             in the globe window to force the reading of location data
             from the disk.  See the Reference section for a discussion
             on networking issues.  

                  The following menu item and function key sections
             describe the many features of the globe window.  The user
             may measure distances between two points, count the number
             of records in a user-defined circular perimeter and choose
             the field out of which the display symbol will be extracted. 
             The F6 key toggles whether the complete display symbol is
             displayed or only the first character.  The F9 key toggles
             which records are displayed in the globe window based on the
             following criteria:  all records, all records included by
             the last query or all records excluded by the last query. 
             XBASE and graphics (.TIF) files may be saved containing the
             current globe window contents.  For a summary of the globe
             window's main features, please see the overview subsection

             GLOBE WINDOW                                              18












             EarthBASE

             of the introduction section above.

             3.2 MENU ITEMS

                  The menu is activated by pressing the / key.  In order
             to deactivate the menu and activate world movement, the user
             should press the / key again.  The user traverses the menu
             by pressing the up and down arrow keys.  The user chooses a
             menu item by pressing the ENTER key after it is highlighted.

                   Figure 1 displays the menu tree of the globe window:

                                                                       
                Quit                                                   
                Epson 9p                                               
                Epson24p                                               
                HpLasJet                                               
                HpDeskJt                                               
                                                                       
                                                                       
                         Quit                                          
                Quit     File                                 Quit     
                Printer  Record                               Open     
                .TIF     Goto                        Quit     Clear    
                .DBF     Incre              Quit     Delete   Create   
                         Output             Create   Copy              
                         Toggle             Field    Move              
                         System   Quit      Record   Edit              
                Quit     Miles    Snap      Zipedt   Create            
                Shell    Count    Display   Polar                      
                Font     Range    Symlen    Zip                        
                Mouse    Symbol   Skip                                 
                Dir               Dquery                               
                Pswd              Dsource                              
                                  Freeze                               
                                  Centroid                             
                                                                       
                                                                        

                         Figure 1.  Globe window's menu tree.

                  EarthBASE may be exited by choosing Quit at the main
             menu.  Choosing Quit or pressing ESC at a lower menu will
             return the user to the next higher menu.  Pressing ESC will
             allow the user to escape from a menu item once its action is
             in progress.  The Quit menu item will not be discussed
             further in the menu discussion below.  Function keys which
             provide the same feature as a menu item follow the menu item
             in parentheses.


             GLOBE WINDOW                                              19












             EarthBASE

               File:

                 a) Open:     Opens an XBASE file and loads location
                              data for all non-deleted records.  If
                              another file was already open, it is
                              closed and its data cleared from memory. 
                              When the Open menu item is chosen, the
                              file name of the last opened file is
                              presented to the user.  He/she may edit it
                              or accept it by pressing the ENTER key.  
                              If a file contains more records than
                              memory allows to be accessed, the user may
                              still work normally with the records which
                              are accessed into memory.  In the low
                              memory case however, the user may not add
                              additional records to the file.  In the
                              XBASE file opening process, EarthBASE asks
                              the user to identify fields containing
                              data which will be used to assign
                              (geocode) a longitude and latitude to each
                              record.  The user is asked to identify
                              fields containing longitude, latitude and
                              zip code data.

                 b) Clear:    Closes an open file and clears its record
                              data from memory.

                 c) Create:   Enters the file creation window.























             GLOBE WINDOW                                              20












             EarthBASE


               Record Menu:   Excepting the create option, all items in  
                              this menu act on the user-specified record
                              whose displayed fields are found in the
                              information window.  

                 a) Delete:   The user may delete the chosen record. 
                              The process may be repeated until the user
                              presses the ESC key.

                 b) Copy:     The user may copy a chosen record to a
                              second cursor location.  The field window
                              is opened to the user with the new
                              location found in longitude and latitude
                              fields if present.  If only a zip code
                              field is present, it is the user's
                              responsibility to enter the correct zip
                              code.  If this is not done, the location
                              information will be lost for that record
                              when the file is closed.

                 c) Move:     The user may move a chosen record to a new
                              cursor location.  The field window is
                              opened to the user with the new location
                              found in longitude and latitude fields if
                              present.  If only a zip code field is
                              present, it is the user's responsibility
                              to enter the correct zip code.  If this is
                              not done, the location information will be
                              lost for that record when the file is
                              closed.

                 d) Edit:     The user may edit the chosen record in the
                              field window.

                 e) Create:   The user may create a record in the field
                              window at the current cursor location.

               Goto:

                 a) Create:   Enters the file creation window.

                 b) Field:    Enters the field window. (F5 key)

                 c) Record:   Enters the record window. (F10 key)

                 d) Zipedt:   Allows the user to edit or add location
                              data for five digit zip codes to the zip
                              code data file (Zip5.dat).  This allows
                              the user to keep the zip code data file

             GLOBE WINDOW                                              21












             EarthBASE

                              current as new zip codes are assigned by
                              the U.S government.  Registered EarthBASE
                              users will be notified of official updates
                              to Zip5.dat, which may be purchased twice
                              a year.

                 e) Polar:    Moves the globe position to a user
                              specified latitude and longitude.

                 f) Zip:      Moves the globe position to a user-
                              specified five digit zip code location. 
                              If the zip code data file does not contain
                              location data for the zip code, a window
                              is presented to the user listing the
                              nearest zip codes which have location data
                              assigned to them.  The user chooses a zip
                              code by highlighting it with the cursor
                              and pressing the ENTER key.  The user may
                              also press the ESC key to exit the window. 
                              If the user knows the location to a newly
                              assigned zip code, he/she may enter that
                              information in the zipedt menu item
                              previously described above.

               Incre:         Sets the cursor movement value in degrees. 
                              The value is automatically halved or
                              doubled as the globe is zoomed in or out,
                              respectively.  A negative value is
                              allowable and recommended for use with
                              track balls.  The globe will then move as
                              the track ball moves. (F4 key)

               Output:

                              Outputs the currently displayed contents
                              of the globe window, governed by the F9
                              key (record display toggle).

                 a) Printer:

                    1) Epson 9p:   Sends the globe window as printer
                                   output to an Epson 9 pin printer.

                    2) Epson24p:   Sends the globe window as printer
                                   output to an Epson 24 pin printer.

                    3) HPLasJet:   Sends the globe window as printer
                                   output to a HP LaserJet printer.

                    4) HPDeskJt:   Sends the globe window as printer

             GLOBE WINDOW                                              22












             EarthBASE

                                   output to a HP DeskJet printer.

                 b) .TIF:     Saves the globe window in a .TIF graphics
                              formatted file (TIFF Class B - black and
                              white).  Printer output may be created by
                              importing the .TIF file into an
                              application (word processor, desktop
                              publisher, paint program, etc.) which
                              accepts such a file.  Such an
                              application's printer capabilities would
                              then be used to output the image to a
                              printer.

                 c) .DBF:     Saves the displayed records in an XBASE
                              file.  Records are stored in the order in
                              which they have been sorted in the record
                              window.

               Toggle:

                 a) Snap:     Toggles the snap mode.  When the mode is
                              active, the arrow keys move the cursor to
                              the nearest northern, southern, western,
                              or eastern record location. (F2 key)

                 b) Display:  Toggles the following globe drawing
                              methods:  outlines the continent
                              boundaries, only draws record locations
                              and fills in the continent boundaries.  To
                              speed the filled continent boundary mode,
                              it is assumed that no water boundary is
                              present at the 25 mile wide screen zoom
                              level or nearer.  (F3 key)

                 c) Symlen:   Toggles the record's symbol string length
                              from one character to the entire field
                              length.  The globe window refreshes itself
                              faster if only the first character is
                              displayed. (F6 key)

                 d) Skip:     Toggles whether refreshing of the screen
                              is interrupted by user inputs at the
                              keyboard or by a Microsoft compatible
                              mouse.  As EarthBASE executes on ever
                              faster machines it may be better to allow
                              the screen to fully draw itself before
                              accepting the next user input. (F7 key)

                 e) DQuery:   Toggles the displaying of records
                              according to the following:  all records,

             GLOBE WINDOW                                              23












             EarthBASE

                              all records included by the last query or
                              all records excluded by the last query. 
                              This function is only available if the
                              database has not been altered since the
                              last query.  When the database has been
                              altered, the toggle reverts back to the
                              display all records mode. (F9 key)

                 DSource:     Toggles whether address location data is
                              constantly read from the disk or read from
                              its stored location in memory.  If the
                              address location data fields in the opened
                              XBASE file are not altered by other users
                              in a network or other processes, there is
                              no need to read the data constantly from
                              the disk.  Reading the data from the  disk
                              slows the drawing process.  EarthBASE is
                              aware when its own user alters address
                              location data and updates the data stored
                              in memory.  See the Reference section for
                              a discussion on networking issues. 
                              (ALT-F1 key)

                 g) Freeze:   Toggles whether the globe (redraws) or the
                              cursor (no redraw) moves when an arrow key
                              is pressed or the mouse is moved.  CPU
                              time is saved by not redrawing the globe.
                              (M key)

                 h) Centroid: Toggles whether zip code centroids are
                              displayed.  The user specifies the range
                              of zip codes to be displayed. (P key)

               System:

                 a) Shell:    Calls the DOS operating system without
                              permanently leaving EarthBASE.  Once in
                              the DOS SHELL the user can execute any
                              DOS command.  The user reenters
                              EarthBASE by typing EXIT. (ALT-D key)

                 b) Font:     Sets the globe window font size (1 - 9). 
                              Text is only displayed in the globe window
                              when a display symbol field has been
                              chosen. (F8 key)

                 c) Mouse:    Sets mouse and track ball movement
                              sensitivity.  A larger number entered at
                              the prompt causes less sensitivity to
                              input device movement. (ALT-F4 key)

             GLOBE WINDOW                                              24












             EarthBASE


                 d) Dir:      This menu item allows the user to alter
                              the default drive and/or directory.  The
                              present default directory is presented to
                              the user for modification.  After editing
                              the default drive and/or directory and
                              pressing the ENTER key, the default
                              directory will be changed to that shown if
                              no error has occurred.

                 e) Pswd:     This menu item allows the user to alter
                              EarthBASE's password.  The current
                              password is presented to the user for
                              editing or replacement.  The password is
                              saved in the password file 'pswd'.  The
                              file 'pswd' must be found in EarthBASE's
                              default directory or DOS's environment
                              path.

               Miles:         This menu item allows the user to
                              determine the shortest direct air distance
                              between a first and second location in
                              miles and kilometers.  A line is drawn
                              between the two locations and the distance
                              is shown in the information window.  The
                              user may continue to measure a new
                              distance to a new second location until
                              the ESC key is pressed.  The cursor will
                              then remain at the last second location
                              chosen.
               
               Count:         This menu item totals the number of
                              records contained in a user-specified
                              circular perimeter.  The arrow keys move
                              the intersection point of the circle with
                              its radius.  The number of encircled
                              records is shown in the information
                              window.  The user may exit the count mode
                              by pressing the ESC key.  The field and
                              record windows act differently if they are
                              entered while the count mode is active. 
                              This will be explained in the field and
                              record window sections of the manual.

               Range:         By choosing the range menu item, the user
                              may choose any numeric field which will be
                              used to separate the records into two
                              ranges.  A window is presented to the user
                              listing the opened XBASE file's fields
                              from which the range field is chosen. 

             GLOBE WINDOW                                              25












             EarthBASE

                              Fields highlighted in this window are
                              those currently displayed in the record
                              window.  The user chooses a field by
                              highlighting it with the cursor and
                              pressing the ENTER key.  The user may also
                              choose 'NONE' to deactivate the range
                              function.  The user may press the ESC key
                              to exit the menu item.  

                              After a field has been chosen, the user is
                              asked to enter the numeric value used to
                              divide the two ranges.  If a record's
                              range field value is greater than the
                              dividing value, its display symbol text  
                              (display field must be active) is
                              displayed with a font size one step larger
                              than the default size, while the other
                              records are displayed with a font size one
                              step smaller than the default size.  In
                              addition, if a color monitor is used,
                              records whose range field value is greater
                              than the dividing value will have its
                              display symbol text (display field must be
                              active) and locator marker '+' colored
                              red.

               Symbol:        By default, EarthBASE uses a '+' as the
                              display symbol for a record.  By choosing
                              the symbol menu item, the user may choose
                              any field whose contents will be used for
                              the display symbol of each record.  A
                              window is presented to the user listing
                              the opened XBASE file's fields from which
                              the symbol field is chosen.  Fields
                              highlighted in this window are those
                              currently displayed in the record window. 
                              The user chooses a field by highlighting
                              it with the cursor and pressing the ENTER
                              key.  The user may also choose 'NONE' to
                              deactivate the field symbol function and
                              revert back to the '+' symbol.  The user
                              may press the ESC key to exit the menu
                              item.








             GLOBE WINDOW                                              26












             EarthBASE


             3.3 FUNCTION KEYS

                  The following hot keys are available in the globe
             window:

               /:        Toggles the activation of the globe or the
                         menu.

               ALT-D:    See globe window menu item SYSTEM, sub-menu
                         item SHELL.

               ALT-F1:   See globe window menu item TOGGLE, sub-menu
                         item DSOURCE.

               ALT-F4:   See globe window menu item SYSTEM, sub-menu
                         item MOUSE.

               ALT-X:    Exits EarthBASE permanently.

               ALT-Z:    Zooms out the user's perspective of the globe
                         twice as far.

               CTRL-C:   Exits EarthBASE permanently.

               C:        Zooms in the user's perspective of the globe to
                         the nearest zoom level.

               F:        Zooms out the user's perspective of the globe
                         to the furthest zoom level.

               F1:       Displays a help screen.

               F2:       See globe window menu item TOGGLE, sub-menu
                         item SNAP.

               F3:       See globe window menu item TOGGLE, sub-menu
                         item DISPLAY.

               F4:       See globe window menu item INCRE.

               F5:       See globe window menu item GOTO, sub-menu item
                         FIELD.

               F6:       See globe window menu item TOGGLE, sub-menu
                         item SYMLEN.

               F7:       See globe window menu item TOGGLE, sub-menu
                         item SKIP.


             GLOBE WINDOW                                              27












             EarthBASE

               F8:       See globe window menu item SYSTEM, sub-menu
                         item FONT.

               F9:       See globe window menu item TOGGLE, sub-menu
                         item DQUERY.

               F10:      See globe window menu item GOTO, sub-menu item
                         RECORD.

               M:        See globe window menu item TOGGLE, sub-menu
                         item FREEZE.

               P:        See globe window menu item TOGGLE, sub-menu
                         item CENTROID.

               R:        Refreshes globe window.  Useful if ALT-F1
                         causes location data to be read from disk (see
                         above) and this data is being changed by
                         another process.

               Z:        Zooms in the user's perspective of the globe
                         twice as close.





























             GLOBE WINDOW                                              28












             EarthBASE


                               4.0 FILE CREATION WINDOW


                  The user enters this window by choosing its menu item
             in the globe window.  This window creates XBASE files with
             user-defined fields.  The user may create a field structure
             or load a field structure from an existing XBASE file and
             then modify it.  The user may load the field structures of
             multiple XBASE files and append them to the fields already
             contained in the field window (useful for joining data from
             multiple XBASE files).  The user may save the field
             structure as a new file with zero records or may copy like
             fields (original field name to new field name as mentioned
             below) from the records of an existing file into a new file. 
             All marked-for-deletion records are purged as records are
             moved from an existing file to a new file.  If the new file
             already exists and has a field structure matching that in
             the file creation window (field structure must have been
             loaded from the existing file and be unchanged), the user
             may append a file's records to the records of the existing
             file.  Records may be extracted from multiple files.  In
             this way the user may join multiple databases.  Multiple
             databases should however contain identical records.  The
             extracted records may be contained in a delimited file, but
             the delimited fields must match the field structure in the
             field window by order and type.

                  The user should delete all rows from a loaded field
             structure for data not to be moved from an original field
             name to the new file.  A field in the new file will be empty
             if the original field name in the field structure is empty
             or not found in the existing 'from' file.  The existing
             'from' file need not be the file from which a field
             structure was loaded.

                  In summary, the following steps are taken in creating a
             file:

                 1. The user creates the field structure of the XBASE
                    file to be created by entering the fields in the
                    file creation window or loading/editing the field
                    structure from existing XBASE files.

                  2.The user saves the XBASE file to be created.  If
                    this file already exists and has a field structure
                    matching that in the file creation window (field
                    structure must have been loaded from the existing
                    file and be unchanged), the user is asked if records
                    should be appended to this file.

             FILE CREATION WINDOW                                      29












             EarthBASE


                  3.The user is asked from which source file records
                    should be copied to the new file (or appended to an
                    existing file).  If no source file is given, an
                    empty file is created with the desired field
                    structure.  

                  4.After the records of a source file have copied to
                    the new file, the user is repeatedly asked if
                    records from additional source files should be
                    copied (joined) to the new file.  If the user
                    answered yes to the 'append records' question, this
                    mode remains true for the remainder of the save
                    operation.  If the user does want to join records
                    from many XBASE files into one XBASE file, the field
                    structures from these XBASE files should have been
                    loaded into the file creation window and edited as
                    desired.

                  The column arrangement of the file creation window's
             spreadsheet is set and not adjustable by the user.  The left
             most column contains the original field names of a loaded
             field structure (limited to 11 characters and left-
             justified).  The columns to the right allow the user to
             modify the field names to be used in the saved field
             structure, the field type (limited to 1 character: C =
             character, N = numeric, L = logical, D = date) and the field
             length (limited according to field type).  If the field type
             is numeric, the user is requested to enter the number of
             decimal places.  If the number of decimal places the user
             enters are too many for the field length, EarthBASE will
             override the decimal place number and give the maximum
             allowed.  The row number is found along the left border. 
             The F1 key displays a help screen listing the available
             function keys.

                  For the user's information, the XBASE standard
             specifies the following:

                Maximum record size (bytes)           = 4000 (.dbf file)
                Maximum number of fields in record    = 255  (dBASE IV)**
                                                      = 128  (dBASE III)
                                                      = 32   (dBASE II)
                Maximum field name length             = 11

                ** EarthBASE allows a maximum of 255 fields in a record.





             FILE CREATION WINDOW                                      30












             EarthBASE


                Field limits:

                Field Type    Max. length    Allowable Characters

                Character         254               ASCII
                Logical             1             YyNnTtFf
                Numeric            19           -.0123456789
                Date                8            0123456789
                Date Format = YYYYMMDD

                  The user maneuvers in the spreadsheet by using the
             following keypad keys, in addition to the arrow keys:  the
             PAGEUP and PAGEDN keys move the cursor position up or down
             by 19 rows; the HOME, INS and END keys return the cursor to
             top, middle and last rows, respectively.  To edit a cell at
             which the cursor resides, the user simply begins typing.  

             4.1 MENU ITEMS

                  A menu lies at the bottom of the data window.  Pressing
             the / key moves the cursor to the menu bar.  The user
             traverses the menu by pressing the right and left arrow
             keys.  The user chooses a menu item by pressing the ENTER
             key after it is highlighted.

                  Figure 2 displays the menu tree of the file creation
             window:

                                                        
                                                        
                               File              Load   
                               Row               Save   
                               Print    Insert   Clear  
                                        Delete          
                                        Copy            
                                                        
                                                        
                     Figure 2. File creation window's menu tree.

                  The window may be exited by pressing the ESC key at the
             main menu.  Pressing ESC at a lower menu will return the
             user to the main menu.  Pressing ESC will allow the user to
             escape from a menu item once its action is in progress.

               File:

                 a) Load:     Loads in the field structure of an XBASE
                              file.  When the load menu item is chosen,
                              the file name of the last loaded file for

             FILE CREATION WINDOW                                      31












             EarthBASE

                              this window is presented to the user. 
                              He/she may edit it or accept it by
                              pressing the ENTER key.

                 b) Save:     Asks the user for the file name of a new
                              XBASE file into which the file creation
                              window's present field structure will be
                              saved.

                              The user is then asked for the name of an
                              XBASE file from which data will be
                              extracted and placed in the new file.  As
                              a default, the file name of the loaded
                              field structure is presented to the user,
                              which he/she may alter.  Only data from
                              fields matching the original field names
                              will be transferred to the new file.  If
                              the user specifies no second file name the
                              new file will have no records.  If the new 
                              file already exists, the user has the
                              option of appending the transferred
                              records to the existing file.  Records may
                              be extracted from multiple existing files. 
                              In this way the user may join multiple
                              database.  The multiple databases should
                              however contain identical records.

                              The transferred records may be contained
                              in a delimited file, but the delimited
                              fields must match the field structure in
                              the field window by order and type. 
                              EarthBASE only recognizes delimited files,
                              as such, if its extension is '.TXT'.  The
                              user may specify the delimiting character
                              found in the delimited file.  This is the
                              method of importing a delimited file into
                              XBASE file format so that it may be used
                              in EarthBASE.  Create the delimited file's
                              field structure in the file creation
                              window and then save the delimited file's
                              records in an XBASE file.

                 c) Clear:    Clears the spreadsheet of the current
                              field structure information.

               Row:
                                                              
                 a) Insert:   Inserts a blank row at the location of the
                              cursor and shifts all lower rows down one
                              row.

             FILE CREATION WINDOW                                      32












             EarthBASE


                 b) Delete:   Deletes the contents of one row at the
                              cursor location and shifts all lower rows
                              back one row.  This process is repeated
                              until the user presses the ESC key.

                 c) Copy:     Copies the contents of a set of rows to a
                              second row position.  The original field
                              name status (empty or filled) is retained
                              in the copying process.

               Print:    Prints the contents of the spreadsheet to a
                         file or printer.

             4.2 FUNCTION KEYS

                  The following hot keys listed below perform tasks in
             the window:

               /:        Moves the cursor down to the menu.

               ALT-D:    Calls the DOS operating system without
                         permanently leaving EarthBASE.  Once in the
                         DOS SHELL the user can execute any DOS
                         command.  The user reenters EarthBASE by
                         typing EXIT.

               ALT-X:    Exits EarthBASE permanently.

               CTRL-C:   Exits EarthBASE permanently.

               F1:       Displays a help message.



















             FILE CREATION WINDOW                                      33












             EarthBASE


                                  5.0 RECORD WINDOW


                  The user enters the record window by pressing the F10
             key in the globe window, if an XBASE file is open.  This
             window, in a spreadsheet format, contains the list of
             records from the currently opened XBASE file and displays
             user-selected fields for each record.  Upon entering the
             record window,  the cursor highlights the record nearest to
             the globe window's cursor location.  If the globe window is
             in the count mode when the record window is entered, records
             located in the user-defined perimeter have their fields
             displayed in reversed color.  If the globe window is in the
             range mode and the range field causes a record's globe
             window display symbol to be displayed in red (or larger
             font), its record number will be displayed in red (or
             reversed color) in the record window.  The user may enter
             the field window after choosing the appropriate record
             window menu item and record.  The F1 key displays a help
             screen listing the available function keys.  All of the
             function keys described in this section are also found in
             the record window menu tree items.

             5.1 FEATURES

                  The default displayed fields (F7 key), if available,
             contain the following data from left to right are: 
             latitude, longitude, zip code, user-specified range and
             user-specified symbol data.  The display symbol is a '+' if
             no display symbol field has been chosen in the globe window. 
             If no display symbol is shown for a record, that record was
             not successfully geocoded to a location on the globe.  The
             user may also choose which fields will be displayed in the
             record window using the F8 key.  The F9 key toggles whether
             records are displayed based on the last query in the field
             window.

                  The record number is displayed along the left border. 
             Record numbers which are skipped are record's which are
             marked for deletion in the opened file.  The records may be
             sorted by alphabetizing the record's displayed fields or
             sorting the records according to their distance to the globe
             window's current cursor location.  The user may search for
             specific strings or record numbers.  The record list may be
             printed to a file or printer.

                  The cursor moves in the window by using the arrow keys
             and other keypad keys.  The PAGEUP and PAGEDN keys moves the
             cursor position up or down by 19 rows (190 rows if CTRL key

             FILE CREATION WINDOW                                      34












             EarthBASE

             also pressed).  Pressing the HOME key returns the cursor to
             the first row, while the END key moves the cursor to the
             last row containing information.  The INS key moves the
             cursor to the middle row containing information.  The F10
             key returns EarthBASE to the globe window at the location of
             the cursor highlighted record.  If the user presses the ESC
             key the globe window returns to its former location.

             5.2 MENU ITEMS

                  A menu lies at the bottom of the data window. Pressing
             the / key moves the cursor to the menu bar.  The user
             traverses the menu by pressing the right and left arrow
             keys.  The user chooses a menu item by pressing the ENTER
             key after it is highlighted.

                  Figure 3 displays the menu tree of the record window:

                                                                   
                                                     Edit          
                                                     Create        
                                                     Copy          
                                                     Delete             
              Record                                                    
              Goto                                                      
              Sort                                        String        
              Toggle                       Rec. Number    Rec. Number   
              Print         DFields        Alphabetize    Rec. Location 
                            DQuery         Rec. Distance                
                            DSource                                   
                                                                      
                                                          
                        Figure 3.  Record window's menu tree.

                  The window may be exited by pressing the ESC key at the
             main menu.  Pressing ESC at a lower menu will return the
             user to the main menu.  Pressing ESC will allow the user to
             escape from a menu item once its action is in progress. 
             Function keys which provide the same feature as a menu item
             follow the menu item in parentheses.

               Record:

                 a) Edit:     The user may edit a chosen record in the
                              field window.

                 b) Create:   The user may create a record in the field
                              window.

                 c) Copy:     The user may edit a copy of a chosen

             FILE CREATION WINDOW                                      35












             EarthBASE

                              record in the field window.

                 d) Delete:   The user may delete a chosen record.  The
                              process is repeated until the user presses
                              the ESC key.

               Goto:

                 a) String:        Searches each row's displayed fields
                                   for a user-specified string.  When
                                   the user hits any key, the next match
                                   is found until no match is found or
                                   the user hits ESC. (F2 key)

                 b) Rec. Number:   Moves the cursor to the user-
                                   specified record number. (F3 key)

                 c) Rec. Location: Returns EarthBASE to the globe window
                                   at the latitude and longitude
                                   location of the cursor-highlighted
                                   record. (F10 key)

               Sort:

                 a) Rec. Number:   Orders the rows by the record number
                                   along the left border. (F4 key)

                 b) Alphabetize:   Orders the rows by alphabetizing
                                   their displayed fields. (F5 key)

                 c) Rec. Distance: Orders the rows according to which
                                   records are nearest distance to the
                                   globe window's present cursor
                                   location. (F6 key)

               Toggle:

                 a) DFields:  Allows the user to choose which fields are
                              displayed in each row. (F8 key)

                 b) DQuery:   Toggles the displaying of records
                              according to the following:  all records,
                              all records included by the last query or
                              all records excluded by the last query. 
                              This function is only available if the
                              database has not been altered since the
                              last query.  When the database has been
                              altered, the toggle reverts back to the
                              'display all records' mode. (F9 key)


             FILE CREATION WINDOW                                      36












             EarthBASE

                 c) DSource:  Toggles whether address location data is
                              constantly read from the disk or read from
                              its stored location in memory.  If the
                              address location data fields in the opened
                              XBASE file are not altered by other users
                              in a network or other processes, there is
                              no need to read the data constantly from
                              the disk.  Reading the data from the  disk
                              slows the drawing process.  EarthBASE is
                              aware when its own user alters address
                              location data and updates the data stored
                              in memory.  See the Reference section for
                              a discussion on networking issues. 
                              (ALT-F1 key)

               Print:    Prints the displayed rows in the record window
                         to a delimited file or printer.  The last item
                         on the row, the globe window's display symbol
                         for that record, will not be printed to the
                         delimited file.  Printing to a file allows the
                         user to export a delimited database made up of
                         the fields and records displayed in the record
                         window.  Many databases and utilities (mailing
                         label utilities, etc.) import delimited files. 
                         The user may specify the delimiting character
                         which is compatible with the application that
                         will import the delimited file.

             5.3 FUNCTION KEYS

             The following hot keys listed below perform tasks in the
             record window:

               /:        Moves the cursor down to the menu.

               ALT-D:    Calls the DOS operating system without
                         permanently leaving EarthBASE.  Once in the
                         DOS SHELL the user can execute any DOS
                         command.  The user reenters EarthBASE by
                         typing EXIT.

               ALT-F1:   See record window menu item TOGGLE, sub-menu
                         item DSOURCE.

               ALT-X:    Exits EarthBASE permanently.

               CTRL-C:   Exits EarthBASE permanently.

               ESC:      If a menu item is not active, it returns
                         EarthBASE to the globe window to its former

             FILE CREATION WINDOW                                      37












             EarthBASE

                         latitude and longitude location.

               F1:       Displays a help screen.

               F2:       See record window menu item GOTO, sub-menu item
                         STRING.

               F3:       See record window menu item GOTO, sub-menu item
                         REC. NUMBER.

               F4:       See record window menu item SORT, sub-menu item
                         REC. NUMBER.

               F5:       See record window menu item SORT, sub-menu item
                         ALPHABETIZE.

               F6:       See record window menu item SORT, sub-menu item
                         REC. DISTANCE.

               F7:       Causes the rows to display fields containing
                         the following data:  longitude, latitude, zip
                         code, user-specified range and user-specified
                         symbol data.

               F8:       See record window menu item TOGGLE, sub-menu
                         item DFIELDS.

               F9:       See record window menu item TOGGLE, sub-menu
                         item DQUERY.

               F10:      See record window menu item GOTO, sub-menu item
                         REC. LOCATION.



















             FILE CREATION WINDOW                                      38












             EarthBASE


                                   6.0 FIELD WINDOW


                  This window is entered from the record and globe
             windows.  The field window, in a spreadsheet format,
             contains the field contents of a user-selected record in the
             currently opened XBASE file.  The user chooses the record
             after choosing a menu item in the globe or record window
             (edit, copy, create, move).  If the field window is
             activated by the F5 key in the globe window, the field
             window will contain the record closest to the globe window's
             cursor location.  The record number is displayed on the top
             line of the field window.  If the globe window is in the
             count mode when the field window is entered, the top line
             displays whether the record is inside or outside of the
             user-specified perimeter.  If the globe window is in the
             range mode and the range field causes a record's globe
             window display symbol to be displayed in red (or larger
             font), its record number will be displayed in red (or
             reversed color) on the top line of the field window.  All of
             the function keys described in this section are also found
             in the field window menu tree items.

                  A record's field names are listed in the left column
             and the present field values are listed in the right column. 
             The field value which is currently highlighted by the cursor
             is also displayed near the bottom-left border of the window. 
             The user may edit this value at any time.  EarthBASE only
             accepts the appropriate characters which are valid for the
             specific field type.  The F1 key displays a help screen
             listing the available function keys.

             6.1 FEATURES

                  The user maneuvers in the window by using the various
             keypad keys, in addition to the up and down arrow keys. 
             Pressing the HOME key returns the cursor to the first field. 
             Pressing the END key moves the cursor to the last field. 
             Pressing the INS key moves the cursor to the middle field.
             After editing of the fields is completed, the user may save
             the record contents in the opened XBASE file by pressing the
             F10 key.  ALL CHANGES TO THE RECORD WILL BE LOST IF F10 IS
             NOT PRESSED BEFORE LEAVING THE WINDOW OR MOVING TO A NEW
             RECORD (PAGEUP AND PAGEDN keys).  The field window's
             contents can be printed to a file or printer by pressing the
             ALT-F9 key or the choosing the print menu item.  The F7 key
             creates a new record without leaving the field window.  The
             F8 key copies the present field window contents to a new
             record without leaving the field window.  The F9 key toggles

             FIELD WINDOW                                              39












             EarthBASE

             whether the field window accesses all records, only records
             included by the last query or only records excluded by the
             last query.

                  When the user is ready to exit the field window, he/she
             should press the ESC key.  Pressing the ESC key does not
             save the record contents to the opened XBASE file.  Pressing
             the PAGEUP and PAGEDN keys load the field window with the
             contents of the previous and next record, respectively.  The
             field window processes all of the non-deleted records in the
             opened XBASE file as it performs each of the field window's
             file manipulation functions.  

                  The Search & (Edit/F2, Count/F3, Copy/F4, Sum/F5,
             Stuff/F6) menu/function key functions search for record's
             whose appropriate field (cursor-highlighted field) contains
             the user specified-subset string.  The F2 key allows the
             user to edit each matched record.  The F3 key counts matched
             records and the F4 key copies matched records to a user-
             specified file.  The F5 key sums the appropriate field
             (cursor-highlighted numeric field) values of matched
             records.  The F6 key writes the user-specified string to the
             appropriate field (cursor-highlighted field) of matched
             records.  

                  The QBE & (Edit/ALT-F2, Count/ALT-F3, Copy/ALT-F4,
             Sum/ALT-F5, and Stuff/ALT-F6) menu/function keys functions
             are query by example (QBE) function keys.  They perform the
             same function as their search counterpart functions above
             except that in order for a record to match, all of its
             fields must match all of the field window fields exactly.  

                  Search and QBE matches are not case sensitive (whether
             or not a character is capitalized).  Spaces are not ignored
             in the field window's field nor in a record's field.  If the
             field window's field contains the '*' wildcard symbol, only
             the characters to the left of the '*' symbol are used for
             matching.  Therefore if a field in the field window contains
             an '*' as the first character, all records will be accepted
             based on this field.

                  The special query symbols '<', '>' are also used to
             modify the matching constraints for QBE matches.  If a
             string in a field window field is led by a '<' or '>', a
             record's field string will only match if it is less than or
             greater than the field window's field string following the
             '<' or '>' symbol.  It is suggested that the user save
             'query' record templates as records in the XBASE file for
             commonly executed queries.


             FIELD WINDOW                                              40












             EarthBASE

                  If the count mode is active in the globe window prior
             to entering the field window, all record matches must
             satisfy the added constraint that the record lie within the
             user-specified circular perimeter.  This constraint is valid
             for all ALT and non-ALT keys.

             6.2 MENU ITEMS

                  A menu lies at the bottom of the data window.  Pressing
             the / key moves the cursor to the menu bar.  The user
             traverses the menu by pressing the right and left arrow
             keys.  The user chooses a menu item by pressing the ENTER
             key after it is highlighted.

                  Figure 4 displays the menu tree of the field window:

                                                                        
                                                          S & Edit      
                                                          S & Count     
                                                          S & Copy      
                                                          S & Sum       
                                                          S & Stuff     
              Search &                                                  
              QBE &                                                     
              Record                                      QBE & Edit    
              Toggle                       Create         QBE & Count   
              Print         DQuery         Copy           QBE & Copy    
                            DSource        Save           QBE & Sum     
                                                          QBE & Stuff   
                                                                        
                                                          
                         Figure 4.  Field window's menu tree.

                  The window may be exited by pressing the ESC key at the
             main menu.  Pressing ESC at a lower menu will return the
             user to the main menu.  Pressing ESC will allow the user to
             escape from a menu item once its action is in progress.

               Search &: Searches for records whose appropriate field 
                         (cursor-highlighted field) contains the user-
                         specified string as a subset string.  Spaces
                         are not ignored and the wildcard character '*'
                         may be used to ignore all characters to the
                         right and including the '*' character.

                 a) S & Edit: This search function allows the user to
                              edit search matched fields.  The user
                              should save the edited record with the F10
                              key before proceeding to the next matched
                              record. (F2 key)

             FIELD WINDOW                                              41












             EarthBASE


                 a) S & Count:This search function counts search matched
               records. (F3 key)

                 a) S & Copy: This search function copies search matched
                              records to a user-specified file or to the
                              printer. (F4 key)

                 a) S & Sum:  This search function sums the appropriate
                              field (cursor-highlighted numeric field)
                              of all search matched records.
                              (F5 key)

                 a) S & Stuff:This search function writes a user-
                              specified string to the appropriate field
                              (cursor-highlighted field) of all search
                              matched records. (F6 key)

               QBE &:    All of the matched record's fields must match
                         the field window's fields exactly.  The query
                         symbols '<', '>', and '*' affect the query.  
                         Spaces are not ignored.  The wildcard character
                         '*' if used ignores all characters to the right
                         and including the '*' character.

                 a) QBE & Edit:    This QBE function allows the user to
                                   edit QBE matched fields.  The user
                                   should save the edited record with
                                   the F10 key before proceeding to the
                                   next matched record. (ALT-F2 key)

                 a) QBE & Count:   This QBE function counts QBE matched
                                   records. (ALT-F3 key)

                 a) QBE & Copy:    This QBE function copies QBE matched
                                   records to a user-specified file or
                                   to the printer. (ALT-F4 key)

                 a) QBE & Sum:     This QBE function sums the
                                   appropriate field (cursor-highlighted
                                   numeric field) of all QBE matched
                                   records.(ALT-F5 key)

                 a) QBE & Stuff:   This QBE function writes a user-
                                   specified string to the appropriate
                                   field (cursor-highlighted field) of
                                   all QBE matched records. (ALT-F6 key)




             FIELD WINDOW                                              42












             EarthBASE


               Record:

                 a) Create:   Creates a new record without leaving the
                              field window.  After editing the new
                              record, the record should be saved with
                              the F10 key. (F7 key)

                 b) Copy:     Copies the field window's present contents
                              to a new record.  After editing the new
                              record, the record should be saved with
                              the F10 key. (F8 key)

                 c) Save:     Saves the field window's contents to the
                              appropriate record in the opened XBASE
                              file. (F10 key)

               Toggle:

                 a) DQuery:   Toggles the accessing of records according
                              to the following:  all records, all
                              records included by the last query or all
                              records excluded by the last query.  This
                              function is only available if the database
                              has not been altered since the last query. 
                              When the database has been altered or
                              queried, the toggle reverts back to the
                              'access all records' mode.  This function
                              allows the user to view records or to
                              create compound queries based on the last
                              query.

                 b) DSource:  Toggles whether address location data is
                              constantly read from the disk or read from
                              its stored location in memory.  If the
                              address location data fields in the opened
                              XBASE file are not altered by other users
                              in a network or other processes, there is
                              no need to read the data constantly from
                              the disk.  Reading the data from the  disk
                              slows the drawing process.  EarthBASE is
                              aware when its own user alters address
                              location data and updates the data stored
                              in memory.  See the Reference section for
                              a discussion on networking issues.

               Print:    Prints the field window contents to a file or a
                         printer.



             FIELD WINDOW                                              43












             EarthBASE



             6.3 FUNCTION KEYS

                  The following hot keys listed below perform tasks in
             the record window:

               /:        Moves the cursor down to the menu.

               ALT-D:    Calls the DOS operating system without
                         permanently leaving EarthBASE.  Once in the
                         DOS SHELL the user can execute any DOS
                         command.  The user reenters EarthBASE by
                         typing EXIT.

               ALT-F1:   See field window menu item TOGGLE, sub-menu
                         item DSOURCE.

               ALT-F2:   See field window menu item QBE &, sub-menu item
                         QBE & EDIT.

               ALT-F3:   See field window menu item QBE &, sub-menu item
                         QBE & COUNT.

               ALT-F4:   See field window menu item QBE &, sub-menu item
                         QBE & COPY.

               ALT-F5:   See field window menu item QBE &, sub-menu item
                         QBE & SUM.

               ALT-F6:   See field window menu item QBE &, sub-menu item
                         QBE & STUFF.

               ALT-F9:   See field window menu item PRINT.

               ALT-X:    Exits EarthBASE permanently.

               CTRL-C:   Exits EarthBASE permanently.

               F1:       Displays a help screen.

               F2:       See field window menu item SEARCH &, sub-menu
                         item S & EDIT.

               F3:       See field window menu item SEARCH &, sub-menu
                         item S & COUNT.

               F4:       See field window menu item SEARCH &, sub-menu
                         item S & COPY.


             REFERENCE                                                 44












             EarthBASE

               F5:       See field window menu item SEARCH &, sub-menu
                         item S & SUM.

               F6:       See field window menu item SEARCH &, sub-menu
                         item S & STUFF.

               F7:       See field window menu item RECORD, sub-menu
                         item CREATE.

               F8:       See field window menu item RECORD, sub-menu
                         item COPY.

               F9:       See field window menu item TOGGLE, sub-menu
                         item DQUERY.

               F10:      See field window menu item RECORD, sub-menu
                         item SAVE.


































             REFERENCE                                                 45












             EarthBASE


                                    7.0 REFERENCE


               This section lists items in alphabetical order which are
             common to all sections of EarthBASE.

             DOS SHELL : ALT-D

                  The DOS operating system may be called without leaving
             EarthBASE.  EarthBASE is remains resident in memory.  Most
             of EarthBASE is removed from RAM and stored to disk in the
             default directory in a hidden file (up to 600 KB) so that
             the system memory can be used by a second program.  Once in
             the DOS SHELL the user can execute any DOS command.  The
             user reenters EarthBASE by typing EXIT.  When the user types
             EXIT at the DOS prompt, EarthBASE is loaded back into RAM
             from disk and it continues from the point at which it was
             interrupted.  This function will not work if there is not
             enough room on disk to store EarthBASE's state or if the
             file 'command.com' cannot be found in the DOS environment
             path.  If the computer is turned off while EarthBASE is
             saved to disk, EarthBASE's current data and state on disk is
             not recoverable.  In this case the hidden file will remain
             and take up disk space.  Use a disk utility to delete the
             hidden file.  The hidden file name starts with the letter
             'D' and is followed by a random number.

             DEFAULT DIRECTORY

                  The default directory is the directory to which files
             are saved and from which files are loaded if no pathname is
             specified with the file name.  This default directory is
             shown in the bottom window in most program locations.  The
             default drive and/or directory may be changed once EarthBASE
             has started by using the directory DIR menu item in the
             globe window or exiting to the DOS SHELL and changing the
             drive and/or directory.  The directory pathname may be
             specified as part of the file name when loading and saving
             files.  

             DIRECTORY FACILITY

                  When loading or opening a file, if the file name
             contains a wildcard symbol (* or ?) the directory facility
             is presented to the user.  The available files matching the
             wildcard specification are listed alphabetically in the
             window.  The parent directory and subdirectories are listed
             at the end of the file list.  The arrow, HOME, END, PAGEUP,
             and PAGEDN keys are used to move around in the window. 

             REFERENCE                                                 46












             EarthBASE

             Press the ENTER key when the cursor highlights the chosen
             file.  The directory may be changed by choosing a directory
             name at the end of the file list.  The window may be exited
             without choosing a file by pressing the ESC key.

             ERROR MESSAGES

                  The following input/output error messages are available
             during the operation of EarthBASE.  The meaning of these
             errors may be found in the user's DOS manual.

                              File not found
                              Path not found
                              Invalid format
                              Not enough memory
                              File access denied
                              Invalid file access code
                              Invalid drive number
                              Disk write error
                              Disk read error
                              File not assigned
                              Invalid numeric format
                              Disk is write protected
                              Drive not ready
                              Unknown command
                              Bad pathname length
                              Disk seek error
                              Printer out of paper
                              Device write fault
                              Device read fault
                              Hardware fault
                              Disk write error
                              Disk read error
                              File not assigned


                  EarthBASE also notifies the user when there is too
             little RAM memory to accomplish a certain task.  EarthBASE
             notifies the user if the appropriate *.BGI (graphics driver)
             and other necessary files are not in the default drive or in
             the DOS environment path when it attempts to start. 
             EarthBASE also notifies the user of any file errors as it
             attempts to output data.  If the printer is turned off when
             EarthBASE attempts to print output, EarthBASE will wait
             without displaying an error message until the printer is
             turned on.  If the printer is turned off while printer or if
             it runs out of paper, an error message will be displayed.




             REFERENCE                                                 47












             EarthBASE


             LINE EDITOR

                  When EarthBASE is in editing mode, the following
             editing keys apply:

                 SPACEBAR:    Creates a space at the cursor position.

                 BACKSPACE:   Deletes a character to the left of the
                              cursor.

                 DEL:         Deletes a character to the right of the
                              cursor.

                 HOME:        Moves the cursor to the beginning of the
                              string.

                 END:         Moves the cursor to the end of the string.

                 INS:         Toggles the editing mode between 'insert'
                              and 'non-insert'.  In the insert mode,
                              when a key is pressed, the keystroke is
                              entered at the cursor position and all
                              characters beginning at the cursor
                              position and to the right are moved one
                              position to the right.  In the non-insert
                              mode, the existing character at the cursor
                              position is overwritten by the keystroke. 
                              In the insert mode the cursor is thin and
                              in the non-insert mode the cursor is fat. 
                              The insert status is highlighted in the
                              bottom portion of the screen whenever
                              EarthBASE is in the editing mode.

                 ENTER:       Accepts the entry and moves the cursor to
                              the next item.


             MOUSE

                  Inputs are accepted from a Microsoft compatible mouse
             if the appropriate driver is installed.  Pressing the left
             mouse button represents pressing the ENTER key.  Pressing
             the right button represents pressing the / key.  The ALT-F4
             key in the globe window adjusts mouse and track ball
             movement sensitivity.  A larger number entered at the ALT-F4
             prompt causes less sensitivity to input device movement.




             REFERENCE                                                 48












             EarthBASE

             NETWORK LAN CAPABILITIES

                  EarthBASE is compatible with DOS compatible networks. 
             EarthBASE's record locking feature is active if DOS Version
             3.0 or greater is present in the workstation.  XBASE
             database files may be shared my multiple users.  Writing to
             a file's record locks that individual record to prevent
             simultaneous writes to it.  Writes do not block reads and
             reads do not block reads or writes.  If multiple users are
             to share the EBASE.EXE file, its attribute should be set to
             read status using the following command:

                              attrib +r EBASE.EXE

             If EBASE.EXE is shared by multiple users, multiple licenses
             must be purchased for the maximum number of simultaneous
             users.

                  EarthBASE stores query, range and sorting history data
             in each user's computer memory.  This history data is not
             updated when another user alters the shared database.  This
             history data is only accurate then, at the instant it is
             created.  

                  Address location data (where to locate a record on
             globe) is stored in memory when the database is opened by
             each user and when a record is created during a session. 
             The ALT-F1 key in the globe, field, and record windows
             toggle whether EarthBASE uses the address location data
             stored in memory or always reads current address location
             data from the disk.  Reading address location data from the
             disk slows the drawing process.  If other users or processes
             are altering address location data often, the user should
             cause EarthBASE to constantly read the data from the disk or
             read the data from the disk on a periodic (user must toggle
             ALT-F1 key at his/her discretion) basis.

                  Each instance of EarthBASE, on a regular basis, checks
             the database for records created or deleted by other users. 
             Each instance of EarthBASE is aware when its own user alters
             address fields and appropriately alters the address location
             data in memory.









             REFERENCE                                                 49












             EarthBASE


             EarthBASE is a trademark of Resource Management Simulations. 
             IBM is a trademark of International Business Machines Corp. 
             dBASE is a trademark of Borland International, Inc.  Other
             brand and product names are trademarks or registered
             trademarks of their respective holders.













































             REFERENCE                                                 50





```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $19.95  ______

Super Saver Membership                                 $39.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $5.00  ______
($5.00 is refundable with your first order)

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

The PC-SIG 12th Edition - CALL FOR UPGRADE PRICING

The PC-SIG World of Games CD-ROM                       $19.95  ______ 

The PC-SIG World of Windows CD-ROM                     $19.95  ______

The PC-SIG Encyclopedia of Shareware CD-ROM 
Series (6 CD-ROM Set)                                  $99.00  ______


                                                    Subtotal   ______

Shipping and Handling                                          $5.00
Express Shipping Available.
Call PC-SIG for more information.

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD: Call (800) 245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4187

     Volume in drive A has no label
     Directory of A:\

    EBASE    ZIP    295530  10-21-93  11:21a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO-STRT  DAT       541   6-01-93  11:07a
    SIGORDER TXT      3176   9-24-93   1:57p
    GO       EXE     26022   1-10-92  12:14p
            5 file(s)     354647 bytes
                            5120 bytes free
