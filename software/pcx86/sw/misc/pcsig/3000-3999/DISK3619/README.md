---
layout: page
title: "PC-SIG Diskette Library (Disk #3619)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3619/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3619"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```






                       Capital Gainz Version 3.1
        Copyright 1992 by David Lee Cohen. All Rights Reserved.

                              Dave Cohen
                                DBLinx
                            P.O. Box 12545
                          RTP, NC  27709-2545
                            (919)-469-5196
                          (919)-469-3972 BBS
                       CompuServe ID: 70431,132
                    Internet:davec@rock.concert.net
                            January 6, 1993
 
======================================================================
Capital Gainz, the Capital Gainz Utility Program, the Capital Gainz
Graphics Program, the Capital Gainz Demo, and all online and printed
Capital Gainz documentation are Copyright 1992 by David Lee Cohen.
Unauthorized duplication or distribution is prohibited, except for:

     => Personal backup copies.
     => Copies of the Capital Gainz Demo/Tutorial may be distributed,
     but no fee may be charged.
     => Copies of the Evaluation Version of Capital Gainz may be made
     and distributed, according to the guidelines listed in the online
     VENDOR.DOC file.
     The Evaluation Version is a special version of Capital Gainz,
     includes online documentation only, and DOES NOT include the
     Capital Gainz Utility Program or the Capital Gainz Graphics
     Program.

Disk vendors interested in distributing the Evaluation Version of
Capital Gainz should read the guidelines in VENDOR.DOC.

Capital Gainz, the Capital Gainz Utility Program, the Capital Gainz
Graphics Program, the Capital Gainz Demo, and online and printed
Capital Gainz documentation are protected by U.S. and International
Copyright Laws.
======================================================================

READ THIS ENTIRE DOCUMENT: It contains important information!

    This is an unregistered shareware version of Capital Gainz if it
was obtained from a shareware disk vendor, an electronic bulletin
board, or a source other than DBLinx and David Lee Cohen; or during
program sign-on the phrase "shareware" or "evaluation" is displayed.
Otherwise, this is a registered version of Capital Gainz, purchased by
and registered to you. If this is a shareware version of Capital
Gainz, after installation refer to the document LICENSE.DOC for
details on the shareware version's restrictions and for information on
ordering a registered version of Capital Gainz. Also included in
LICENSE.DOC is a list of what you get with registration.





Requirements:
-------------
    Capital Gainz requires:
     - An IBM personal computer or compatible
     - MS-DOS version 3.00 or later
     - Any monochrome or CGA/EGA/VGA monitor
          For the Graphics Program, Hercules/EGA/VGA is required
     - A minimum of 640KB of RAM, with 512KB free
     - A hard disk, with between 1.2MB and 3.0MB of free space
     - A printer is NOT required

Disk Space:
-----------
    The main components of Capital Gainz, along with approximate disk
space requirements, are:
     - Capital Gainz program, libraries, and data: 950KB
     - Several years of user data: 200KB
     - Online documentation: 700KB
     - Graphics Program: 500KB
     - Utility Program: 300KB
     - Demo/tutorial: 500KB

Distribution, Registration:
---------------------------
    Distribution restrictions are detailed in the VENDOR.DOC file.
Registration requirements are discussed in LICENSE.DOC. This software
is not public domain, and failure to abide by the distribution
restrictions constitutes a violation of the U.S. and International
Copyright laws.

Upgrading to a New Revision or
Converting to a Registered Version
-----------------------------------
    If you already have a shareware or registered version of Capital
Gainz installed, install the new registered version in the same
directory. Only program and documentation files will be overwritten.
Data files may be upgraded, but will otherwise not be affected. 

    Sometimes, a change in file formats requires an upgrade of
existing data files. If this is the case, the upgrade function of the
Capital Gainz Utility Program will be invoked automatically during
installation. IF YOU ARE UPGRADING, YOU SHOULD INSTALL THE NEW VERSION
IN THE DIRECTORY CONTAINING THE OLD PROGRAM FILES. When attempting to
run a new version of Capital Gainz against old data files that were
not upgraded, you may receive the error "Invalid Record Declaration"
when running Capital Gainz. If you experience this problem, run the
Capital Gainz Utility Program to upgrade your data files.

    The HISTORY.DOC file contains a list of major changes between
revisions of Capital Gainz. If you are upgrading from a pre-version
3.0 copy and have been maintaining multiple portfolios with DOS





subdirectories, see the section on Upgrading to Version 3.0 later in
this document.

Prepare for Installation
------------------------
    You should have one or more diskettes containing the following:
     - INSTALL.EXE, INSTALL.INF, INSTALL.HLP (optional)
     - README.DOC (required, may be in documentation archive)
     - CGZLBnnn.xxx - Runtime library archive (required)
     - CGZPRnnn.xxx - Program files archive (required)
     - CGZDCnnn.xxx - Documentation files archive (required)
     - CGZDTnnn.xxx - Data files archive (required)
     - CGZEXnnn.xxx - Example data archive (optional)
     - CGZDMnnn.xxx - Demo/tutorial archive (optional)
     - CGZGRnnn.xxx - Graphics program archive (optional)
     - CGZUTnnn.xxx - Utility program archive (optional)

     'nnn' refers to the version/subversion number, such as 31A.
     'xxx' refers to the archive extension, such as ZIP or EXE.
 
    If you downloaded the files from a bulletin board system, make
sure you at least have the archives and files listed as 'required'
above. If you don't have INSTALL.EXE, you'll need to manually
unarchive the files.

Installation
------------
    To install Capital Gainz, execute INSTALL.EXE. For instance, if
you inserted the Install disk into drive A, type:

     C:>A:INSTALL

You will be prompted for the necessary information, and any
directories requested will be created if they do not exist. Online
help is available by hitting the F1 key. You'll be prompted to insert
disks as needed. After installation, the new Capital Gainz directory
will be your current working directory. Detailed information on the
installation process is included in the User's Manual.

    INSTALL may not be included in some BBS distributions. If not, you
should create the target directory and unarchive the files to it.
Assuming you have the files in \PROCOMM\DL:

     C:>MKDIR \CAPGNZ
     C:>CD \CAPGNZ
     C:>PKUNZIP \PROCOMM\DL\CGZLB31A.ZIP
     C:>PKUNZIP \PROCOMM\DL\CGZPR31A.ZIP
     C:>PKUNZIP \PROCOMM\DL\CGZDC31A.ZIP
     C:>PKUNZIP \PROCOMM\DL\CGZDT31A.ZIP

    Common installation problems include: bad diskettes, corrupt data





caused by electronic transmission errors, and incorrect composition of
the archives on the diskettes. The result of these kinds of problems
are installation errors indicating: invalid archive, invalid archive
format, or disk read errors. If you run into a similar problem,
contact your original source for a replacement. If you encounter
problems getting a replacement, contact us directly and let us know
where you obtained your copy. 

Documentation
-------------
    After installation is complete, these important Capital Gainz
documents will be on your disk:

     README.DOC - this file.

     LICENSE.DOC - the license agreement and information on ordering
     the registered version of Capital Gainz.

     CGnn.DOC - Chapter 'nn' of the Capital Gainz user's manual. In
     the online version of the manual, screen shots, example reports,
     and several chapters are omitted.

    You can view or print the documentation from within Capital Gainz
using the View Documentation option from the Main Menu. 

Getting Started
---------------
    If you don't want to read the entire Capital Gainz User's Manual
before getting started, you may want to at least read over the Quick
Tour chapter to get you up and running as quickly as possible. Or, you
can run the Demo/Tutorial screen show described below. Also be sure to
refer to the LICENSE.DOC file for usage and distribution guidelines.
To start up Capital Gainz, type:

    C:>CG

in the directory you specified during installation.

Demo/Tutorial
-------------
    To run the demo/tutorial screen show, change to the directory you
specified for the demo files and run CGDEMO. For instance:

     C:>CD \CAPGNZ\DEMO
     C:>CGDEMO

The demo works best on EGA/VGA color monitors. It will run on
monochrome screens, but field highlighting won't show up.

Backing Up Data
---------------





    I strongly urge you to regularly backup your Capital Gainz data
files. There is a Backup option on the Main Menu that executes the
backup command entered in the User Settings Form, but it may be slow
on older PCs. If this is the case, use your favorite backup or
compression utility to backup the data files before or after running
Capital Gainz. You can even modify the CG.BAT startup file to do this
automatically. Alternatively, you can use the DOS COPY command in a
batch file to copy the data files to a backup diskette.

The data files that should be backed up are:
    *.DAT
    *.K01

Included in this release is an example batch file, CAPGNZBU.BAT, that
backs up Capital Gainz data files using the DOS COPY command.
CAPGNZBU.BAT accepts the letter of the drive to copy the data files to
as its only argument. Thus, to backup data from the current directory
to the diskette in drive A:

     C:>CAPGNZBU A

Problems with Category Methods
------------------------------
    Prior to version 3.0, Capital Gainz had some shortcomings in its
handling of the category selling methods. As correctly described in
the manual, the average price, not the actual purchase price, was
subtracted from the total purchase amount when changing/deleting open
share records. As of version 3.0, Capital Gainz subtracts the actual
purchase price on changes/deletions and traces through the
chronological history of the shares when you choose the Total option
on the Fixup Form. This is possible since both the actual and the
average price are now stored in the sold shares records. 

    If you have securities that use a category method, be sure to
check them. If you have not sold any shares, then the easiest
verification process is to run Fixup from the Local Security Table,
choosing the Total option on the Fixup Form. If you have sold shares,
we suggest that you delete (don't unsell) the sold shares records, re-
enter the purchases, and run Fixup/Total before re-executing the
sales.

Problems With Selling Shares
----------------------------
    Prior to version 3.0h (04/06/92), Capital Gainz examined all
purchases when you executed a sale, not just those prior to the
entered selling date. Thus, if you used the Maximum Loss selling
method to record a sale on 6/1/91, but had entered purchases up
through 12/1/91, then all of the purchases would have been examined.
Also, if you used a category method, all purchases would be factored
into the average price for the sale. Again, this was correctly
documented. If you did not record purchases until all prior sales had





been recorded, or used the FIFO or ID methods, there was no problem.
As of version 3.0h, Capital Gainz restricts open shares by the sale
date, and even recalculates the average price as of the sale date.

Double Category Method Discontinued
-----------------------------------
    As of version 3.0r, Capital Gainz no longer supports the Double
Category selling method. Considerable thought went into this decision.
There are a number of reasons for discontinuing it:

- There is no difference between short and long term tax rates.

- This method is far more complicated than many users assume. Actions
such as recording sales out of order, having an incorrect system date,
or setting the holding period to an incorrect value have numerous side
effects. It's very easy to make a serious error, either using Capital
Gainz or pencil and paper. In fact, it's very likely that many, if not
all, users of this method have made such errors.

- Roughly 50% of testing is devoted to the Double Category method,
given its complicated nature. As the program gets more complex, a
considerable price increase would be required.

- Prior to version 3.0, the Double Category selling method had a
serious problem - you could not record prior sales, since share
migration occurred automatically.

- As of version 3.0, the Double Category method was handled robustly.
But, it was impossible to account for changes in the holding period.
(Based on the IRS documents.)

    I apologize for any inconvenience. This method is still available
for any securities that were already using it, but share migration is
no longer done. To continue using it, you'll have to manually maintain
the values in the local security using the Fixup option. You are
strongly urged to discontinue use. If you haven't sold any shares,
simply change to a different selling method. If you've only sold
shares from the long term category, it seems reasonable that you can
switch to the Single Category method after migrating all of the short
term shares. However, there is no mention of this in the IRS
documents. If you have sold short term shares, you'll either have to
manually maintain these securities within Capital Gainz, or backtrack
and redo prior sales with another method, filing amended taxes as
necessary. Seek advice from your accountant or the IRS documentation. 

    In any case, other selling methods, such as last-in/first-out or
minimum gain/maximum loss, are superior for reducing taxes. Just be
sure to tell your broker/investment company which shares to sell. 

Upgrading to Version 3.0
------------------------





    If you were not maintaining multiple portfolios using DOS
subdirectories, you can skip this section. A single default portfolio
will be created for your data during the upgrade process. However, if
you are upgrading and have been maintaining multiple portfolios using
DOS subdirectories, you'll need to use the Capital Gainz Utility
Program to merge the portfolios.

    Version 3.0's support for multiple portfolios consolidates
duplicate data required when using DOS subdirectories. On
installation, enter the subdirectories containing data to be upgraded.
You can also upgrade these directories after installation. When you
upgrade, a default portfolio is created in each subdirectory. After
installation, you can skim over the Capital Gainz Users Manual for
information on how the data files are set up for multiple portfolios.
In particular, read the discussions on the Portfolio File, the Global
Security File, and the Local Security File. Then, follow these steps
to merge your portfolios:

o    If you did not upgrade all of the subdirectories at installation,
     upgrade them now using the Upgrade option in the Capital Gainz
     Utility Program, CGUTIL.EXE. The Utility Program is described in
     detail in the Capital Gainz Users Manual. By upgrading, each
     directory will contain a single version 3.0 portfolio. You can
     change directories from within the Utility Program. 

o    Make certain that you don't have any conflicting security symbols
     in various directories. In other words, if you used the same
     security symbol to represent completely different securities, run
     Capital Gainz in the directories to rename the conflicting
     securities. If a given symbol represented the same security for
     multiple portfolios, there's no problem - the security
     definitions will be merged while individual values are maintained
     in separate portfolios. For instance, if you used FPINC to
     represent the Financial Progress Daily Income mutual fund in one
     directory, and used FPINC to represent the Financial Progress
     Industrial Income Fund in another directory, rename one or both
     of them using the Global Security Form in Capital Gainz. If you
     used FPINC to represent Financial Progress Daily Income in both
     directories, you don't have to change anything. Each holding of
     FPINC will be in a different portfolio.

o    Also, make certain that you don't have any conflicting
     broker/investment company names in various directories. If the
     same name represented different broker/investment companies, then
     run Capital Gainz in the directories to rename the conflicting
     broker/investment companies with the Broker/Investment Company
     Form. For instance, if you used Fidelity for the Fidelity Mutual
     Funds in one directory and Fidelity for the Fidelity Brokerage in
     another directory, rename one or both of them. If you used
     Fidelity to represent the Fidelity Mutual Funds in both
     directories, you don't have to change anything. The two





     broker/investment companies will be merged into one.

o    Copy the portfolios from the other directories to the
     installation directory using the Copy/Move Portfolios option in
     the Utility Program. This will eliminate duplicate security
     definitions and broker/investment companies while separating the
     holdings from each directory into individual portfolios. When you
     copy a portfolio with the Utility Program, a new portfolio ID is
     generated for it in the destination directory.

o    When you are finished, run Capital Gainz in the installation
     directory, where you copied all of your portfolios to. Make sure
     the data is correct. Then, you can exit from Capital Gainz and
     delete the files in the old subdirectories.

Enhancements
------------
    Capital Gainz is constantly being enhanced. My goal is to put out
a release every 6 months, with every other one being a 'major' release
with significant new features. Registered users are notified of
updates, and can receive the upgrade for a small fee. I don't want
anyone getting the impression that these frequent updates are meant to
just increase revenues. Rather, I feel an obligation to offer the best
product possible to those who have supported me in the past. 

    So, what's planned? The following new features are targeted for
the near term:
     - Mouse support.
     - Portfolio 'snapshot' histories.
     - Better support for bonds.
     - Faster program execution.
     - Download prices from online services.
     - Optional price data for of mutual funds.

And, of course, a Windows version is planned for the long term.

If You Like It
--------------
    If you like Capital Gainz, let me know. Also, pass along any
suggestions - many features added over the years originated from user
feedback. If friends or co-workers are interested, tell them to
contact me and I'll send them a free evaluation copy of Capital Gainz.
Of course, any mention of Capital Gainz in correspondence to magazines
or newspapers is greatly encouraged and appreciated. Finally, if
you're interested, I'm always looking for volunteers to try out new
features in pre-releases of Capital Gainz.





Documentation Changes:
----------------------

Chapter 1 - Introduction
     Under 'Disk Space', the required space for the demo/tutorial
     should be 500KB. This reduces the size of a full release to
     3.1MB.

Chapter 2 - Overview
     Under 'Executables and Related Files', there is no CGGDEMO.EXE.

Chapter 3 - Installation
     Under 'Set Parameters', 'Install Demo Files' changed to 'Install
     Demo/Tutorial'.

     Since the INSTALL program is suspended during actual file copies,
     an additional 360KB of disk space is required to hold the program
     image.

     Added 'Enhanced Keyboard?' question.

Chapter 5 - Questions and Answers
     Add question to first section: Why do I get an 'Out of
     Environment Space' error when I run CG.BAT? You are running out
     of environment variable space. Capital Gainz uses some space when
     it shell to DOS, to set the prompt to 'Type EXIT to return
     to...'. In CG.BAT, it reserves some space in order to do this
     later. You should modify the /E:n parameter on your CONFIG.SYS
     file's SHELL= line so 'n' is about 50 larger.

     Security performance should refer to 'return', not 'gain/loss'.

     Under 'Calculations', question 1 should read 'doesn't', not
     'does'.

     Add a question under 'Activity': Why doesn't the distribution
     total on Capital Gainz' Schedule B match the distribution amount
     on my 1099? There could be several explanations. A mutual fund
     may have paid a foreign tax, and this amount did not appear in
     any statements. If so, record a dividend on the last day of the
     year equal to the foreign tax, and also record a fee for the
     amount. Another cause for mismatch is when a dividend
     reinvestment plan offers discounted shares, or absorbs brokerage
     commissions. These discounts should be recorded with the
     corresponding purchases as negative commissions.

     Add a question to first section: 'Why doesn't Capital Gainz
     accept any keystrokes?'. You answered YES to Enhanced Keyboard?
     in the install program. You can reinstall, or just edit CG.BAT,
     removing the /E switch on CAPGNZ, CGUTIL, and CGGRAPH.





Chapter 7 - Activity
     A negative commission, which is a discount, should also be
     recorded for brokage commissions absorbed by the investment
     company. This is often the case in dividend reinvestment plans.

Chapter 9 - Prices
     For Total Return and Activity Summary Reports, it's best to have
     prices recorded near the beginning and ending of each year.

Chapter 10 - Log Maintenance
     In the Closed Shares Log, the current position, based on the last
     recorded price and date, is shown for uncovered short sales.

Chapter 15 - Reports
     The following reports changed slightly: Portfolio Summary, User
     Settings, Global Security, Total Return, Portfolio Detail,
     Portfolio Allocation, Open Detail, Closed Detail.

     Only Fees are listed on the fee report. Discounts are added in
     with dividends on Schedule B.

     On the Wash Sale Report, the number of shares sold was added. The
     report lists each sale, along with related purchases. The
     purchases shown are from 30 days prior to up to 30 days after the
     sale, and the total share purchases shown for each sale are less
     than or equal to the number of shares sold.

     On the Activity Summary Report, 'Gain/Loss' was changed to
     'Return' in the bottom section.

     On the Activity Summary Report, in the third section, the selling
     activity reflects the total sales in the period.

     On the Activity Summary Report, if you requested all dates, the
     first date is determined from the activity logs. The last date is
     the last date found in the price history file if any shares are
     open on the end date. If no shares are open on the end date, the
     last date is the last activity date. Thus, the performance of
     closed out securities is bracketed by the first and last activity
     dates, and the performance of active securities is bracketed by
     the first activity date and last price date.

     On the Activity Summary Report, if all dates were specified, the
     grand total return is a rough approximation, since different
     securities cover different periods.

     In the Closed Detail Report, the current position, based on the
     last recorded price and date, is shown for uncovered short sales.

Chapter 18 - Utility Program
     The 'Rebuild Price History' function was enhanced. Now, you can





     rebuild prices from the activity logs, or just trim the existing
     price history down to one price per month. The second option
     saves the last price found in each month, deleting the other
     price records.

     Under 'Shell to DOS', there is a typo with 'discussed'.

Chapter 19 - Graphics Program
     The opening logo file CGGRAPH.PCX, is in VGA format.

     Under 'Printing Graphs', 'Ctrl-P' is the print key, not 'F2'.

     Under 'Performance Graph', 'Gain/Loss' was changed to 'Return'.

     Under 'Performance Graph Settings', 'Gain' was changed to
     'Return(+)' and 'Loss' was changed to 'Return(-)'.

     The exact labeling in the User Settings Form changed slightly.

     Under 'Lookup Adapter', CGA is no longer supported.

     If you are using Hercules Graphics and a Dot Matrix printer, then
     you need to modify the printer codes in order to print graphs.
     For the most common printer, the Epson FX, you need to change the
     Pre-Line Codes in Printer Setup (User Settings) from:
          27 42 4 128 2 0 0 0
     to:
          27 42 6 208 2 0 0 0 
     This is to handle Hercules 720 pixel line length.

Chapter 20 - Analysis
     In the sections that discuss performance, 'gain/loss' was changed
     to 'return'.

     Remove 'Closed Shares Gain/Loss - Over Period' section.

     Under 'Performance', if all dates were specified, the grand total
     return is a rough approximation, since different securities cover
     different periods.

Chapter 21 - Tax-Related Details
     Under 'Discounts', discounts are not included on the fee report.
     They are added into the dividends on Schedule B, since companies
     report these two together on 1099s.

Chapter 23 - Speed, Memory, and Disk Space
     Another good way to reduce disk space is to use the Utility
     Program's Rebuild Price History function to trim prices down to
     one per month.

     Under 'Demo/Tutorial Files', the required disk space should be





     500KB.

Chapter 25 - Error Messages
     Add: CGA graphics not supported. The Graphics Program does not
     support CGA graphics. The resolution would be far too poor for
     any but the simplest of graphs.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```






                       Capital Gainz Version 3.1
        Copyright 1992 by David Lee Cohen. All Rights Reserved.

                              Dave Cohen
                                DBLinx
                            P.O. Box 12545
                          RTP, NC  27709-2545
                            (919)-469-5196
                          (919)-469-3972 BBS
                       CompuServe ID: 70431,132
                    Internet:davec@rock.concert.net

                           November 11, 1992
                      _______ 
                 ____|__     |               (R) 
              --|       |    |------------------- 
                |   ____|__  |  Association of 
                |  |       |_|  Shareware 
                |__|   o   |    Professionals 
              -----|   |   |--------------------- 
                   |___|___|    MEMBER 


======================================================================
Capital Gainz, the Capital Gainz Utility Program, the Capital Gainz
Graphics Program, the Capital Gainz Demo, and all online and printed
Capital Gainz documentation are Copyright 1992 by David Lee Cohen.
Unauthorized duplication or distribution is prohibited, except for:

     => Personal backup copies.
     => Copies of the Capital Gainz Demo/Tutorial may be distributed,
     but no fee may be charged.
     => Copies of the Evaluation Version of Capital Gainz may be made
     and distributed, according to the guidelines listed in the online
     VENDOR.DOC file.
     The Evaluation Version is a special version of Capital Gainz,
     includes online documentation only, and DOES NOT include the
     Capital Gainz Utility Program or the Capital Gainz Graphics
     Program.

Disk vendors interested in distributing the Evaluation Version of
Capital Gainz should read the guidelines in VENDOR.DOC.

Capital Gainz, the Capital Gainz Utility Program, the Capital Gainz
Graphics Program, the Capital Gainz Demo, and online and printed
Capital Gainz documentation are protected by U.S. and International
Copyright Laws.
======================================================================





Vendors: 
--------
This package was developed by a member of the Association of Shareware
Professionals. Capital Gainz may only be distributed as a complete
package, and only the evaluation (unregistered) version may be
distributed. The Capital Gainz Utility Program, Capital Gainz Graphics
Program, and printed copies of the users manual may not be
distributed. Modification of the executable in any way is strictly
prohibited.

If you are an ASP approved vendor or BBS, then you are authorized to
carry Capital Gainz in your distribution library. All other vendors
and BBS must receive either electronic or written mail authorization
to distribute Capital Gainz.

Capital Gainz can not be bundled and distributed with any other
programs. It must be distributed as a stand-alone package. Capital
Gainz may NOT be included on 'mega-disks', other multi-program disk
sets, or CDs, unless you first receive electronic or written
authorization from David Lee Cohen. Customers should have the
opportunity to purchase just those programs that they want, rather
than paying extra for unwanted ones. Online catalog programs are an
exception - they may be included with the Capital Gainz distribution.
If there is enough free space, the catalog may even be included on one
of the Capital Gainz disks.

Explicit or implicit authorization to distribute Capital Gainz gives
you permission to charge a distribution fee. However, this fee may not
exceed $6.00 per disk for the complete Capital Gainz evaluation
package.

This document includes several descriptions: one line, 128 characters,
512 characters, and about one page. Please use the one most
appropriate for your catalog.

Registration: 
-------------
$59.00 for Capital Gainz and the Graphics Program
$49.00 for Capital Gainz
    Add $5.00 for shipping and handling within the U.S.

With registration, you get a 300 page bound users manual, technical
support, the Capital Gainz Utility Program, and the Capital Gain
Demo/Tutorial.

Keywords:
---------
PORTFOLIO STOCK MUTUAL FUND DOLLAR-COST ASP INVEST SHAREWARE

Update:
-------





Version 3.1 contains a significant number of new features:
     - A load/commission/discount calculator
     - User-definable security types
     - Paper-saver option on reports
     - Password protection
     - Much improved file viewer
     - Help function now uses online manual
     - Price from Value feature, for securities without a known price
     - Data consistency checker
     - Wash sale report
     - Total return report
     - Grouped sales for the tax forms
     - Default price and distribution values determined by date
     - Form driven installation
     - Open information for closed shares can now be modified
     - Allocation report contains individual securities
     - Warnings added to prevent incorrect entries
     - Example data can be installed
     - Graphics and charting features (registered version only)

Files:
------
The evaluation version of Capital Gainz is composed of the following
files:

     - INSTALL.EXE, INSTALL.INF, INSTALL.HLP (optional)
     - README.DOC (required, may be in documentation archive)
     - CGZLBnnn.xxx - Runtime library archive (required)
     - CGZPRnnn.xxx - Program files archive (required)
     - CGZDCnnn.xxx - Documentation files archive (required)
     - CGZDTnnn.xxx - Data files archive (required)
     - CGZEXnnn.xxx - Example data archive (optional)
     - CGZDMnnn.xxx - Demo/tutorial archive (optional)

     'nnn' refers to the version/subversion number, such as 31A.
     'xxx' refers to the archive extension, such as ZIP or EXE.
 
BBS may want to omit installation program, but users will then have to
manually unarchive the program. Likewise, BBS may omit the Example and
Demo archives.

INSTALL.INF drives the installation procedure. The format of the file
is described at the top of the file, and can be modified as necessary.
However, if you must modify it, be sure you understand the format and
thoroughly test any changes.

Suggested distribution formats:

  3 360KB diskettes:

                                                                     3





     1) INSTALL.EXE, INSTALL.INF, INSTALL.HLP, README.DOC,
          CGZLBnnn.xxx (Library)
     2) CGZPRnnn.xxx (Program), CGZEXnnn.xxx (Example),
          CGZDTnnn.xxx (Data)
     3) CGZDCnnn.xxx (Documentation), CGZDMnnn.xxx (Demo)

  2 720KB diskettes:
     1) INSTALL.EXE, INSTALL.INF, INSTALL.HLP, README.DOC,
          CGZLBnnn.xxx (Library), CGZPRnnn.xxx (Program),
          CGZEXnnn.xxx (Example), CGZDTnnn.xxx (Data)
     2) CGZDCnnn.xxx (Documentation), CGZDMnnn.xxx (Demo)

  BBS download:
     1) CGZLBnnn.xxx (Library)
     2) CGZPRnnn.xxx (Program)
     3) CGZDCnnn.xxx (Documentation)
     4) CGZDTnnn.xxx (Data)
     5) CGZEXnnn.xxx (Example, optional)
     6) CGZDMnnn.xxx (Demo, optional)

Author:
-------
Capital Gainz, the Capital Gainz Utility Program, the Capital Gainz
Graphics Program, the Capital Gainz Demo/Tutorial, and all online and
printed documentation is Copyright 1992 by David Lee Cohen

Association of Shareware Professionals Author Member

Support:
--------
Telephone, CompuServe Email, Internet Email, or U.S. Mail
BBS: 919-469-3972

Hardware/Software Requirements:
-------------------------------
     - An IBM personal computer or compatible
     - MS-DOS version 3.00 or later
     - Any monochrome or CGA/EGA/VGA monitor
          For the Graphics Program, Hercules/EGA/VGA is required
     - A minimum of 640KB of RAM, with 512KB free
     - A hard disk, with between 1.2MB and 3.0MB of free space
     - A printer is NOT required

Category:
---------
     Investment/Financial/Portfolio Management


One-Line Description: 

                                                                     4





---------------------
Investment portfolio manager


Tiny Description (128 characters):
----------------------------------
Portfolio manager for investors. Ideal for a 'dollar-cost' strategy.
Wide variety of selling methods. ASP, HD, 3.0, 640K.


Short Description (512 characters):
-----------------------------------
Capital Gainz is a portfolio manager for both small investors and
professional investment managers. Ideal for a 'dollar-cost averaging'
strategy. Record purchases, sales, dividends, capital gains; calculate
gain/loss and total return; view or print information for one or more
securities and over a range of dates; reinvest dividends; record stock
splits; execute sales of multiple purchases using FIFO, LIFO, max
gain, max loss, specific ID, average cost. Hard disk, 640K, DOS 3.0.
ASP Shareware, $49.


Long Description:
-----------------
Capital Gainz is an investment portfolio manager that balances the
modest needs of the small investor with the complex requirements of
the professional investment manager. It's ideal for individual
investors following a 'dollar-cost averaging' strategy with mutual
funds.

You record purchases, sales, and distributions with easy to understand
forms, and select records from scrolling tables. A load/commission
calculator can be called up when recording a purchase or sale.

You can easily record the sale of a number of different purchases that
occurred over a period. Capital Gainz allows you to sell shares by
specific identification, first-in/first-out, last-in/first-out,
maximize gains/minimize losses, minimize gains/maximize losses, and
average cost.

You can calculate a security's total return. Capital Gainz finds the
first price, last price, and reinvested distributions within a date
range to calculate a true total return figure. 

You can compare a security's total return to your actual realized
performance. Capital Gainz combines your purchases, sales, and
distributions to arrive at your actual realized performance. 

You can specify flexible reporting options. Capital Gainz gives you

                                                                     5





several levels of detail and summary reports, and the ability to
restrict the information by date range and/or security. Other reports
include portfolio allocation and Schedule B and D. 

You can perform powerful 'what-if?' scenarios. After you enter how
many shares to sell and the selling method to use, or select specific
shares, Capital Gainz displays a table of all affected open shares
with the associated gain or loss. You are then given the choice of
confirming or backing out of the sale. 

You can easily maintain securities' price histories. Every buy and
sell transaction potentially adds an entry to the price history,
without any additional action required on your part. You can manually
add entries, change entries, and delete entries. 

You can maintain up to 999 separate portfolios. All portfolio specific
screens and reports show the associated portfolio. 

You can keep a pool of defined securities for populating portfolios.
Capital Gainz separates securities into 'local' and 'global' entities.
Local securities are specific instances of global securities. You can
associate brokers and investment companies with securities.

An additional graphics program can be purchased with the registered
version. With this program, you can generate price graphs, total
return area charts, security cost/value charts, portfolio allocation
charts, and performance charts.

Capital Gainz provides a powerful and flexible alternative to
commercial investment software - at a much lower cost! 

Registration: $49 plus shipping and handling. Includes 300 page users
manual, utility program, and demo/tutorial. Graphics Program is
available for an additional $10. ASP Shareware. 
















                                                                     6

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3619

     Volume in drive A has no label
     Directory of A:\

    INSTALL  EXE    132934   1-28-93   1:59p
    INSTALL  HLP      5048  11-11-92   9:40a
    INSTALL  INF      3340   1-28-93   1:59p
    README   DOC     26576   1-06-93   8:01p
    VENDOR   DOC     12185  11-11-92   7:26p
    CGZLB31I EXE    148664   1-28-93   2:00p
    GO       BAT        34   6-22-93   1:44p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     330821 bytes
                           28672 bytes free
