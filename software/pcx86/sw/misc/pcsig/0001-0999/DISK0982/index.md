---
layout: page
title: "PC-SIG Diskette Library (Disk #982)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0982/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0982"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TAX-PLANNER"

    TAX-PLANNER is a question-and-answer program to help you estimate the
    income tax you'll owe Uncle Sam. Then, you can fine-tune your
    paycheck deductions so you'll have enough withheld when you file your
    returns the next year.
    
    You can easily modify the withholding options, such as marital status,
    number of exemptions and additional taxes for withholdings.  You can
    also estimate deductions from various employers and print reports each
    time an estimate is completed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES982.TXT

{% raw %}
```
Disk No  982
Program Title: TAX PLANNER
PC-SIG version 1.1
 
TAX-PLANNER is a question-and-answer program to help you estimate the
income tax that you'll owe Uncle Sam. Once you've done that, you can
fine-tune your paycheck withholdings so you'll have enough tax withheld
when you file your returns the next year.
 
With the withholding-tax estimator, you can easily modify the withholding
options, such as marital status, number of exemptions, and additional
taxes for withholdings, until you fine-tune the withholdings from each
source.  You can also estimate withholdings from various employers and
print reports each time an estimate is completed.
 
Usage:  Financial.
 
System Requirements:  256K memory.
 
How to Start:  Type PRINTDOC (press enter).
 
Suggested Registration:  $20.00
 
File Descriptions:
 
TPREADME TXT   Informational file, read before using program.
TP870001 EXE   Introductory screen and automatic system setup.
TP870002 EXE   Registration module.
TP870003 EXE   Main menu module.
TP870004 EXE   User guide module.
TP870005 EXE   System file used by TAX-PLANNER.
TPINCTAX EXE   Module to estimate 1987 income taxes.
TPPRTTAX EXE   Module to print income tax estimate.
TPWTHTAX EXE   Module to work with payroll withholdings.
BRUN20   EXE   Runtime module used by TAX-PLANNER.
TPMANUAL DOC   Abridged documentation for the TAX-PLANNER system.
AUTOEXEC BAT   Startup file for a bootable diskette.
COPYHD   BAT   Installs program on a hard-disk equipped system.
COPYONE  BAT   Installs program on a single floppy drive computer.
COPYTWO  BAT   Installs program on a dual floppy drive computer.
PRINTDOC BAT   Prints documentation file using your printer.
TP87     BAT   Starts TAX-PLANNER program (floppy systems).
TP87HD   BAT   Startup file for hard-disk users.
CONFIG   SYS   Startup file for a bootable diskette.
TPFILES  TXT   Listing of TAX-PLANNER files.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<< Disk No 982 TAX PLANNER >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║                  PRINTDOC (press enter)                                 ║
║                                                                         ║
║   To run the program, type:                                             ║
║                  TP870001 (press enter)                                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TPFILES.TXT

{% raw %}
```
                        Listing of Tax-Planner Files

      BRUN20  .EXE   - Runtime module copyrighted by Microsoft Corporation.
      TP870001.EXE   - Introductory screen and automatic system setup.
      TP870002.EXE   - Registration module.
      TP870003.EXE   - Main menu module.
      TP870004.EXE   - User guide module.
      COPYONE .BAT   - Procedure for installation on one floppy drive systems.
      COPYTWO .BAT   - Procedure for installation on two floppy drive systems.
      CONFIG  .SYS   - System configuration file for diskette users.
      TPINCTAX.EXE   - Module to estimate 1987 income taxes.
      TPPRTTAX.EXE   - Module to print income tax estimate.
      TPWTHTAX.EXE   - Module to work with payroll withholdings.
      TP87HD  .BAT   - Startup file for harddisk users, renamed to TP87.BAT. 
      AUTOEXEC.BAT   - Auto startup file for diskette users.
      TP87    .BAT   - Startup file for diskette users.
      TP870005.EXE   - A system file used by Tax-Planner.
      COPYHD  .BAT   - Procedure for installation on harddisk systems.
      TPREADME.TXT   - An informational file for all users.
      TPFILES .TXT   - This listing of Tax-Planner FIles for Version 1.87.
      TPMANUAL.DOC   - Documentation for the Tax-Planner System.
      PRINTDOC.BAT   - For printing the Documentation file (TPMANUAL.DOC).

       20 Files  on the Tax-Planner Distribution diskette - Version 1.87
```
{% endraw %}

## TPMANUAL.DOC

{% raw %}
```



















                                      Tax-Planner

                                     Version  1.87


                             For Tax Planning During 1987


                                  by Michael H. Norris
                                     Garland, Texas



                       (c) Copyright 1987 by Michael H. Norris

































                                  Table of Contents


                Tax-Planner Subject                                Page

                How Tax-Planner developed                            3

                Program Features                                     4

                Licensing Information                                7
                     Registration Information                        8
                     A sample registration form                      9

                Warranty Statements                                 10

                Required Equipment                                  10

                Installing Tax-Planner                              11
                     Backup Copies                                  11
                     Working Copies                                 12
                     Copying Tax-Planner Files
                          Floppy Disk Systems                       12
                          Hard Disk Systems                         13

                Getting Started                                     15
                     Overview                                       15
                     Quick Start                                    16


                Appendix - Files on this diskette                   20

























                  (c) Copyright 1987 by Michael H. Norris      page 2










                              How Tax-Planner Developed


          As I prepared to file my 1986 Federal tax return I learned more 
          about the tax law changes which had been passed in 1986. These 
          changes to the law will change the way that we file our 1987 and
          future year Federal income tax returns.

          I had heard that tax rates would be decreased.  I had also heard 
          that certain deductions I always counted on to legally reduce my 
          taxable income were being restricted, or even eliminated.  I am 
          like a lot of people in that while I do not enjoy paying taxes, I 
          actually hate not getting a refund when I file my return.

          A few years ago I ended up paying a lot of money (in my opinion) 
          when I filed my return because I had too little money held out 
          during the year.  I decided that it was time to do some advance 
          planning in order to prevent paying out a lot of money when tax 
          time came around again.  I began working on an income tax program 
          that would help me plan for either a refund, or at the worst, a 
          small amount of additional tax that I could afford to pay when I 
          filed my tax return.

          In 1987 every employee will be required to file a new W-4 form no 
          later than October 1st.  This is a revised form and "Simplified", 
          now four pages of instructions instead of the two pages provided 
          in the past.

          The revised W-4 form, and its lengthy instructions, are designed 
          to make it easier to determine the number of withholding 
          exemptions that we should claim, or additional amounts of income 
          tax withheld, to avoid being penalized for failing to withhold 
          enough tax during the year.  I did not find the new W-4 easy to 
          interpret.  If you have more than one source of income, or if you 
          and your spouse are both employed, you may also have trouble 
          using the new form.

          In 1986 and prior years you could be penalized for failing to 
          withhold at least 80 percent of the tax you owed during the 
          year.  In 1987 that penalty will be applied if you fail to 
          withhold at least 90 percent of your tax during the year.  A real 
          problem exists for 1987 and the next few years in that it is 
          difficult to know how much tax you will owe at the end of the 
          year early enough in the year to have enough tax automatically 
          withheld to meet your tax obligation, and to avoid penalties.

          This problem has developed because certain deductions we used in 
          1986 are eliminated entirely for 1987 - such as the sales tax 
          deduction.  Other deductions are now subject to percentage 
          limitations that were allowed completely in 1986 - such as 
          miscellaneous deductions on Schedule A.  Other deductions are 
          being phased out for certain people - such as the IRA deduction 
          in 1987 if you are covered by a company pension plan.  Welcome to 
          Tax-Planner, it will help you analyze these changes.

                  (c) Copyright 1987 by Michael H. Norris      page 3










                               Features of Tax-Planner


          Tax-Planner is designed as a question and answer program which 
          will allow you to estimate the income tax that you will owe for 
          1987 and to use that income tax estimate to fine-tune your pay- 
          check withholdings so that you will have enough tax withheld when 
          you file your tax returns in 1988.

          The income tax estimate allows the following types of income and 
          expenses to be input (or computed by the program) and used in the 
          estimation of 1987 Federal income tax.

          1.  Income tax based on the following filing categories:
              a.  Single return,
              b.  Married filing a joint return,
              c.  Head of Household status,
              d.  Married filing separate returns,
              e.  Widow(er) filing status.

          2.  Claim up to 99 dependents.

          3.  Considers the tax benefits of individuals who are over age 
              65 or who are legally blind for income tax purposes (a change
              in tax treatment from prior years.) 

          4.  Allows income, expenses, and deductions from the following 
              sources and calculates the income tax according to any 
              special tax treatment (Input is requested in the same 
              order that is used on the 1986 Federal income tax return - 
              form 1040.)
              a.  Salaries, wages, tips, etc.
              b.  Interest income.
              c.  Dividend income.
              d.  Taxable refunds of State and local income taxes.
              e.  Alimony you receive.
              f.  Business income or losses from sole proprietorships.
              g.  Capital gains and losses.
              h.  Other capital gain distributions.
              i.  Other gains and losses on the sale of business assets.
              j.  Fully taxable pensions, IRA distributions, and 
                  annuities.
              k.  Other pensions and annuities, including rollovers.
              l.  Income from rents, royalties, partnerships, estates, 
                  and trusts.
              m.  Farm income and losses.
              n.  Unemploymant compensation.
              o.  Social security benefits - calculates the portion, if 
                  any, which may be taxable in 1987.
              p.  Other income sources not listed above may be combined 
                  and entered as one item, just as done on form 1040.
              q.  Moving expense deductions (an itemized deduction for 
                  1987.)


                  (c) Copyright 1987 by Michael H. Norris      page 4










                         Features of Tax-Planner, continued


              r.  IRA contribution deductions - which are limited at 
                  the upper income levels, beginning in 1987.
              s.  Deductions for penalties on the early withdrawal of 
                  savings from time accounts.
              t.  Deduction for alimony you pay to another person.
              u.  Deductions for Employee business expenses (must be 
                  itemized for 1987, the program computes the allowable 
                  amount based on the new 2% income limitation.)
              v.  Deductions for itemized deduction in the following 
                  categories:
                  1)  Medical expenses with the new 7.5% limitation.
                  2)  State and local income taxes, real property tax, 
                      and other taxes (except for sales taxes.)
                  3)  Interest expenses which applies the 35% limit 
                      for consumer interest expenses.
                  4)  Contributions (allowed only if you itemize other 
                      personal expenses.)
                  5)  Casualty losses (reduced by the $100 per 
                      occurrence and the overall 10% limitation.)
                  6)  Miscellaneous deductions which are also subject 
                      to the new 2% income limitation.

          5.  Allows for either the calculation or entry of the 
              following Tax credits:
              a.  Child and Dependent care credits.
              b.  Credits for the elderly and Handicapped.
              c.  Input of other credits such as Foreign tax credits or 
                  Mortgage credits.

          6.  Allows for either the calculation or entry of other taxes:
              a.  Self-employment taxes on business income.
              b.  Taxes from the recapture of investment credits.
              c.  Social security taxes on tip income not reported to 
                  employers.
              d.  Taxes on early withdrawal of IRA's, or penalty taxes 
                  on prohibited transactions.
              e.  Input of other taxes.

          7.  The following payments may be entered from the income tax 
              estimator module and reduces the amount of tax that will 
              be needed from withholdings  - which are calculated in a 
              different estimator program:
              a.  Withholdings that have occurred prior to the 
                  estimation date.
              b.  Estimated payments that you may have made.
              c.  Earned income credit which is treated as a payment
                  since it is a refundable credit.  It is calculated 
                  automaticcal by Tax-Planner.
              d.  Calculation of excess social security withholdings.
              e.  Any other payments which you may have made.


                  (c) Copyright 1987 by Michael H. Norris      page 5










                         Features of Tax-Planner, continued


          The withholding tax estimator allows you to easily modify the 
          withholding options, such as marital status, number of 
          exemptions, and additional taxes for withholdings, until you 
          fine-tune the withholdings from each source.  Earnings from 
          various employers may be used to estimate withholdings.  Reports 
          may be printed each time an estimate is complete.

          Tax-Planner also includes a mini-manual on the disk that may be 
          reviewed from the main menu.

          One may enter a question mark for most of the income tax and 
          withholding tax questions to obtain more help than is given 
          within the text of a question.

          A report may be produced from within the income tax estimator of 
          the income tax estimate.  The tax itself that is estimated is 
          carried forward to the withholding program.



































                  (c) Copyright 1987 by Michael H. Norris      page 6










                                Licensing Information


          Tax-Planner is not free software, and it is not public domain 
          software.  All versions of Tax-Planner, including version 1.87, 
          are user supported software, also known as Shareware.

          This software is being made available for a trial period so that 
          you can determine if it is of use to you.  If you determine that 
          this software is useful to you, or if you repeatedly use it 
          yourself, or allow others to use it, you must register your 
          copy.  Non-registered users are granted a limited license to use 
          Tax-Planner on a trial basis only.

          Registered users are granted the right to use Tax-Planner on any 
          machine that they own, or use, as often as they wish, provided 
          that in no case may Tax-Planner be used on more than one machine 
          at the same time, except where multiple copies have been 
          registered, or a site-license has been granted.

          No user may modify Tax-Planner in any way including, but not 
          limited to, disassembling, decompiling, or otherwise changing the 
          product.  All users may copy Tax-Planner for the trial use of 
          others, subject to the above restrictions, and the following 
          terms:

               Tax-Planner must be copied in its original (unmodified) 
               form, complete with the files that contain licensing, 
               registration, and copyright information.

               Full Tax-Planner documentation must be distributed with 
               the other system files.

               No fee, charge, or other compensation may be requested, 
               or accepted, by the licensee, or distributor, except for 
               a fee not to exceed $6.00 to defray the expense of 
               diskettes and shipping costs.  No fee may be charged to 
               simply copy the distribution diskette files onto another 
               diskette.

               Tax-Planner may not be distributed in conjunction with 
               any other product without the prior written approval of 
               the author.

          Distributors of public domain software, or computer user groups, may 
          distribute Tax-Planner if the distribution copies are clearly labeled 
          as a User Supported Software product and the conditions above are met.

          Operators of electronic bulletin boards, either membership or public 
          boards, may post Tax-Planner for downloading by their users so long 
          as the above conditions are met.

          Tax-Planner may not be distributed in any other manner without first 
          obtaining written permission from the author - Michael H. Norris.

                  (c) Copyright 1987 by Michael H. Norris      page 7










                              Registration Information


          There are two methods by which you may register your copy of 
          Tax-Planner:

          1.  Send your check or money order for $15.00 to 
              register your trial copy.

              You will automatically receive a registration 
              receipt and a registered copy of any newer 
              release to the Tax-Planner version you have.  
              This will insure that your version is 
              up-to-date.


          2.  Send your check or money order for $20.00 and 
              receive the same benefits as stated above, and 
              be placed on the mailing list to receive a 
              trial copy of the 1988 Tax-Planner which will 
              be available in January 1988.

              Consecutive versions of Tax-Planner may be 
              registered at reduced rates.


          Please use the registration form that you can print from the 
          Tax-Planner menu, as this is the only way that I can determine 
          the version and release number of your Tax-Planner.  You will
          not automatically receive any newer release of Tax-Planner if 
          you do not use the personalized registration form.

          A trial copy of Tax-Planner may be requested at any time by 
          simply requesting it and enclosing a check or money order for 
          $5.00 to offset shipping and handling expenses.

          Registration and shipping prices are subject to change at any 
          time.

          For information on other types of licenses, such as site 
          licenses, or for group registration discount information please 
          contact:

                                   Michael H. Norris
                                    P.O. Box 475122
                                Garland, TX  75047-5122









                  (c) Copyright 1987 by Michael H. Norris      page 8










                                  Registration Form


          Remit to:           Michael H. Norris
                               P.O. Box 475122
                            Garland, TX  75047-5122

          Please send:

          ____ Tax-Planner Disks . . . . . . . . . . . @ $5.00 each ____       
                Tax-Planner current release only - no registration

          ____ Tax-Planner Regular Registration  . .  @ $15.00 each ____
                Registration of the current version, and be mailed
                any newer release to version 1.87.

          ____ Tax-Planner Extended Registration . .  @ $20.00 each ____
                Regular registration benefits and receive next
                year's version automatically which can then be
                registered at a reduced rate.
                                                           Subtotal ____
 
                         Texas residents please add 7.75% sales tax ____

                                                 Total - Texas only ____

                                                 Total - All others ____

          Payment by ( )Personal check, ( )Business check, ( )Money order


          Please MAIL to:___________________________________ (Name)

                         ___________________________________ (Company)

                         ___________________________________ (Mail Code)
 
                         ___________________________________ (Street Address)

                         ___________________________________ (City,State,Zip)


           Signature _________________________________ Date _____________
           Comments:







          No orders outside the United States will be accepted. Checks 
          and money orders must be drawn on U.S. Institutions.  No C.O.D. 
          orders will be accepted.

                  (c) Copyright 1987 by Michael H. Norris      page 9









                                 Warranty Statement


          The author, Michael H. Norris, makes no warranty of any kind, 
          express or implied, including without any limitation, any 
          warranties of merchantability and/or fitness for a particular 
          purpose.  The author shall not be liable for any damages, whether 
          direct, indirect, special, or consequential arising from the 
          failure of this product to operate in the manner desired by the 
          user.  The author shall not be liable for any damage to data or 
          property which may be caused directly or indirectly by the use of 
          the program.

          In no event will the author be liable to you for any damages, 
          including lost profits or lost savings, or other incidental or 
          consequential damages arising out of use or inability to use the 
          program, or for any claim by any other person.



                                 Required Equipment


          This software has been tested using IBM DOS versions 2.1 and 
          above, and with MS-DOS version 2.11.

          It has also been executed on an IBM PC/XT/AT and on several IBM 
          PC compatible machines.  It has not been tested on machines with 
          less than 256K of memory installed but should execute with as 
          little as 128K of installed memory.

          Tax-Planner executes on either monochrome systems, or systems 
          which have color-graphic cards installed.























                  (c) Copyright 1987 by Michael H. Norris      page 10










                               Installing Tax-Planner


          FIRST THINGS FIRST


          Backup Copies vs. Working Copies

          A backup copy is simply a copy of the Tax-Planner distribution 
          diskette.  A working copy is a copy that you can use to start 
          your computer.  In either case you should place a write-protect 
          tab on your Tax-Planner distribution copy.  Your Tax-Planner 
          distribution diskette will become your backup copy if you elect 
          to prepare a working copy.  If you do not intend to prepare a 
          diskette that can boot your system and start Tax-Planner you 
          should make a backup copy before using Tax-Planner.  Tax-Planner 
          may be executed directly from the distribution diskette.


          Making a Backup Copy:

          Begin by booting your computer with your DOS system.

          On a floppy diskette system, type the following command and 
          follow the instructions that appear on the screen:

              A>DISKCOPY <Enter>

          On a hard disk system, type the following command and follow the 
          instructions that appear on the screen.  If you only have one 
          floppy diskette drive you will be instructed to swap diskettes in 
          the drive as the copy proceeds:

              C>DISKCOPY A: B:<Enter>

          When DOS asks for the SOURCE diskette, use the Tax-Planner 
          distribution diskette. Use a blank diskette as the TARGET 
          diskette.  If your TARGET diskette is unformatted, DISKCOPY will 
          format it for you.  DISKCOPY will write over anything that 
          already exists on the TARGET diskette.  















                  (c) Copyright 1987 by Michael H. Norris      page 11










                                Installation, continued


          Making a Working Copy:

          A working, or bootable diskette, must have the Disk Operating 
          System installed before it can be used to start your computer.  If 
          you wish to prepare a working diskette you should first use the 
          FORMAT command, with the /S option to format a diskette with the 
          system files on it.  If you have not used the format command follow 
          the instructions below:

          On a floppy diskette system, place your DOS diskette in disk drive 
          A and type the following command::

              A>FORMAT /S <Enter>

          On a hard disk system, type the following command:

              C>FORMAT A:/S <Enter>

              You will be instructed to place a floppy diskette into Drive 
              A, do so and follow the instructions on the screen.

          When DOS asks if you want to format another diskette enter N for 
          "No".  You are now ready to transfer the Tax-Planner files from the 
          distribution diskette to the diskette that you just formatted.  If 
          you plan to install the Tax-Planner software on your hard disk you 
          should follow the instructions for hard disk installation.


          INSTALLING Tax-Planner FILES

          Tax-Planner contains two procedures that allow you to copy the 
          Tax-Planner files from the distribution disk to a diskette that has 
          been formatted with the /S option.  It also includes another 
          procedure that you may use to create a directory on your hard disk 
          and transfer the Tax-Planner files to the directory.  In all cases 
          you start by placing the Tax-Planner distribution diskette into 
          drive A.  If you have two floppy diskette drives you may place your 
          newly formatted diskette in drive B as you will not need to swap 
          diskettes during the installation procedure.  Follow the 
          instructions below depending on your hardware configuration:

          One Floppy Diskette Drive Systems

          With the Tax-Planner distribution diskette in the drive:

              A>COPYONE <Enter>

          Follow the instructions that appear on the screen and be ready to 
          swap out between the Tax-Planner distribution diskette and the 
          diskette that you formatted with the /S option.


                  (c) Copyright 1987 by Michael H. Norris      page 12










                               Installation, continued

 
          The following files will be copied to your diskette:

              TP87.BAT  - a batch file to start Tax-Planner when your 
                          computer was started with some other DOS 
                          diskette.
              AUTOEXEC.BAT - a batch file that is executed immediately
                          when you use your Tax-Planner work diskette to 
                          start your computer, and start Tax-Planner 
                          immediately.
              CONFIG.SYS - a file that the DOS system uses to set system
                          parameters for efficiency purposes and to set up 
                          special device drivers.
              TP87####.EXE - the Tax-Planner execution modules that are
                          used by Tax-Planner, where #### is a number that 
                          identifies the particular module.
              Other Tax-Planner files - may not be copied to your working
                          disk or to your hard disk if they are not needed 
                          by Tax-Planner.  This includes the COPYXXX.BAT 
                          files and the Tax-Planner DOC file.

          The procedure files that are used for installation purposes are 
          not copied to your working copy as they are not needed by 
          Tax-Planner and exist only to help you install Tax-Planner.


          Two Floppy Drive Systems

          With the Tax-Planner distribution diskette in Drive A and the 
          diskette you formatted with the /S option in Drive B:

              A>COPYTWO <Enter>

          Follow the instructions that appear on the screen.  You will not 
          need to swap out the diskettes during the procedure.  The same 
          files are created under this procedure that are discussed under 
          the One Floppy Drive System procedure.


          Hard Disk Drive Systems

          If you have more than one floppy diskette drive place the 
          Tax-Planner distribution diskette in drive A:

              C>A:COPYHD <Enter>

          This procedure will create a subdirectory with the name TP87 and 
          will copy the TP87.BAT file to the Root directory.  All the 
          Tax-Planner files that are needed for execution will be copied to 
          the TP87 directory.



                  (c) Copyright 1987 by Michael H. Norris      page 13










                               Installation, continued


          The files listed under One Floppy Disk Systems will be copied to 
          the TP87 directory except for the AUTOEXEC.BAT file and the 
          CONFIG.SYS file.  You should already have files similar to these 
          on your hard disk and do not need to add anything to them in 
          order for Tax-Planner to work properly.  The TP87.BAT file may be 
          moved to any directory of your choice so long as that directory 
          is in your PATH command.













































                  (c) Copyright 1987 by Michael H. Norris      page 14










                                   Getting Started


          This software does not prepare tax returns.  If you have not 
          filed your 1986 return you should not use this software to help 
          you since it applies tax rates that are effective for 1987 - not 
          1986.

          This software has two major modules:

              The 1987 Income Tax Estimator, and
              The Withholding Tax Estimator.

          One of the problems I face in marketing this software is that you 
          do not know how good it is until it comes time to actually file 
          your 1987 tax return - on or before April 15, 1988.  You can 
          check the withholding tax estimates against your current pay stub 
          to see if they are accurate but you can not easily check out the 
          income tax estimate for accuracy.

          The income tax estimate is as close as anyone can get this early 
          in the year since tax law is subject to change.  The actual rates 
          are accurate and are not likely to change.  Certain deductions 
          may be revived for 1987 that are not available right now if 
          enough pressure (public opinion) is brought to bear on Congress.  
          Use the program and add a few dollars to the Income tax estimate 
          before you begin the fine-tuning process with your withholdings 
          to build in an additional security blanket.  Next year at this 
          time you will know how good the program actually is!

          Your goal for using this program is to end up with an equal 
          amount of income tax withheld from your wages to pay the taxes 
          that you will owe when you file your 1987 tax return (on or 
          before April 15,1988 for most of us.)

          To start you should have some information available:

          1.  The amount and type of income you receive, such as 
              earnings from wages, salaries, tips, interest, 
              dividends, your own business, etc.

              This breakdown of types of income can be taken off a 
              prior year tax return - 1986 if you have it since 
              your 1987 sources of income may not differ much from 
              1986.

              You will need to determine how much of each type of 
              income you can expect in 1987.  You will really need 
              only the Form 1040 itself, and Schedule A (if you 
              itemized personal expenses) to obtain the broad 
              category information that is needed to use this 
              product to estimate through 1987.



                  (c) Copyright 1987 by Michael H. Norris      page 15










                             Getting Started, continued


          2.  Payroll Information to use to estimate how much 
              withholding tax is needed to offset the tax you will 
              owe.

              You should get the latest pay stub from each source 
              of income.  You need to be able to determine the pay 
              cycle (weekly, Biweekly, etc) and the total pay - 
              before any deductions.


          Once you have gathered this information you are ready to sit down 
          and begin your 1987 Federal tax estimates.


                                   Quick Start

          We will use the following hypothetical situation for a quick 
          start demonstration of Tax-Planner:

          You work a single job, are single, and make $2,000 each month.  
          You have $150 income tax withheld from each paycheck and have 
          received two of your 24 checks so far this year.  You also re-
          ceive $1,000 each month from your ex(spouse) for alimony which 
          has no tax withheld from it.  You rent your home and do not have 
          enough personal deductions to itemize deductions.  You wish to 
          change your payroll withholding to cover the additional taxes 
          that the alimony you receive causes.

          Start your computer, then enter TP87 to start the Tax-Planner 
          program (If you have the Tax-Planner files on diskette you must 
          place the diskette in drive A before you enter TP87.)

          The copyright and registration notice should be displayed on the 
          screen after the program loads.  When you have read the notice 
          you should press enter to move to the next program.

          The next program allows you to register your copy and prints a 
          personalized registration form.  For now select option 4 from the 
          menu to continue.

          The main menu appears next.  When you have more time you should 
          read the on-line users guide.  The menu options are arranged in 
          the order you should normally select.  Enter 2 to estimate income 
          taxes.  Once we have the tax estimated we will know how much 
          withholding will be required.

          The income tax estimator will load and ask a few general 
          questions.  First select filing status 1 (single.)  Answer no to 
          each of the next two questions, you may answer no by pressing the 
          enter key if No is shown inside the diamond, such as <No>.


                  (c) Copyright 1987 by Michael H. Norris      page 16










                               Quick Start, continued


          Answer the question about dependents by typing 1 and then press 
          enter.  You must press return to enter an answer to the 
          questions.  Answer No to the question about company pension plans.

          The upper portion of the screen will begin to fill in.  As we 
          continue the remainder of the screen will be completed.  We are 
          now ready to begin entering income information.  Press enter to 
          continue.

          Enter 24000 in reponse to the question about income from salaries 
          and wages.  Enter zero for the next three questions by simply 
          pressing enter, once for interest income, again for the dividend 
          income question, and a third time for income from local income 
          tax refunds.

          You now must answer Yes to the question about other income since 
          we have not yet been asked about alimony income.  Type a Y and 
          press enter to continue.

          The next question asks us about alimony income.  Answer it by 
          typing in 12000 and then press enter ($1,000 per month times 12 
          months.)  We have no other income to use in the estimate but must 
          press enter for each additional question to either answer No or 
          to enter zero for each question.  There are eleven (11) 
          additional questions that are income questions.

          We now are notified that we we will begin entering information 
          about adjustments to income.  Press return to continue.

          There are four questions about these adjustments to income.  
          Answer the first three by simply pressing enter.  The fourth 
          question may be skipped by typing N and then pressing enter.  It 
          is different because it is currently a very popular adjustment to 
          income.  Press enter a second time to leave the IRA question.

          We are now notified that we may begin entering itemized deduction 
          information.  Press enter to continue, then enter an N to skip 
          the itemized deduction questions.

          We are now notified that we may enter tax credit information.  
          Press enter to continue, then press enter one time for each tax 
          credit question.

          We are notified that we may enter other tax information.  Press 
          enter to continue, then press enter four times to skip the four 
          other tax questions.






                  (c) Copyright 1987 by Michael H. Norris      page 17










                               Quick Start, continued


          We now are at the last part of the program.  Before we continue 
          check the upper portion of the screen, notice that the line for 
          "Estimate of Tax Needed" shows taxes of $6,476.50 with an arrow 
          just to the right of the amount.  This arrow with two shafts has 
          progressed down the screen as we completed certain portions of 
          the tax information entries, changing to a single shaft as we 
          finished an entry class.  Now look at the bottom part of the 
          screen.  There is only one of the options that applies to us, 
          payroll withholdings.  Answer Y to continue with the questions.  
          Enter 300 for the amount withheld from wages.  Note that the 
          amount needed for taxes decreased $300.  We now need 6176.50 in 
          withholdings to break even on taxes when we file our tax return 
          next year.  Answer N to the other questions.

          The screen should now inform us that we did not qualify for the 
          earned income credit.  Press enter to continue and then answer No 
          to the question about printing a copy of the estimate.  The 
          screen should clear and the menu display.  Select menu option 
          three (3) so that we can work on our withholdings.

          After the withholding program loads you will see a screen that is 
          basically blank - except for the amount of tax needed which was 
          carried over from the income tax estimate.

          Simply press return to bypass the Income Source Name.

          Enter 1 for single for the marital status.

          You are now asked to enter the number of exemptions, we need a 
          lot of tax withheld since a third of our income has no 
          withholdings.  Enter a 0 in response to the number of exemptions 
          to claim question.

          Enter a 3 to select the semimonthly pay period from the menu.  

          Enter 1000 for the total pay we receive each payday.

          Press enter to enter zero for the amount of additional 
          withholdings.

          Type in 22 and press return for the question about the number of 
          pay periods to use.  We have already received 2 checks and used 
          those withholdings in the income tax estimate.  No reason for us 
          to duplicate income or deductions for this estimate.

          The right side of the screen should now fill in.  We can easily 
          see that only 64% of the tax we need will be available if we do 
          not request our employer to withhold an amount in addition to the 
          amounts that the tax table provides.  We do not wish to 
          accumulate any amounts until we get our withholdings closer to 
          what we need.

                  (c) Copyright 1987 by Michael H. Norris      page 18










                               Quick Start, continued


          Answer No to prevent accumulating this first estimate.

          Press enter to prevent printing a report.

          Press enter to estimate again.

          Press enter to continue with the same source.  The only 
          withholding option that we can now manipulate is the extra tax 
          since we are already using the highest rates, and are claiming no 
          exemptions.

          Press enter to keep everything the same until we get to the 
          additional tax withholdings.  Enter No so we can change our 
          previous entry and request that additional tax be withheld.

          We are asked to enter the amount of additional tax to be 
          withheld.  A quick check of the figures looks like $100 times 22 
          periods will be pretty close.  Enter 100.  Then press enter to 
          keep the same number of pay periods.

          We now have 99% of what tax we need for 1987 withheld if we stop 
          now and fill out a W-4 form.  We can go through the estimate 
          again to get even closer.  We need a little over $50 which 
          appears to be about another $2.30 additional withholdings per pay 
          period to help us accumulate enough tax for 1987.

          We should continue and print a report.  It will contain enough 
          information to help us complete a form W-4 to give our employer.

          If we had two income sources that were subject to withholding we 
          could have split the amount we needed between the two of them.  
          This is a good approach to use if you are married and have two 
          paychecks since one of the checks is normally larger than the 
          other.  Split the amount of additional tax you need to withhold 
          between the two checks based on their relationship to total 
          income.  If one person has total earnings of $10,000 and the 
          other has total earnings of $20,000 the one with the higher 
          earnings should have the largest amount of extra tax withheld.

                               End of the Quick Start



          When you begin using Tax-Planner for your own estimate remember 
          to enter a question mark (?) for questions you do not understand 
          as the question mark entry will provide you with additional help, 
          or a better explanation of the question.





                  (c) Copyright 1987 by Michael H. Norris      page 19










                                Files on this Diskette


          Your Tax-Planner diskette should have the following files on it as 
          the minimum required to perform properly.


              TP870001.EXE - The Introduction Screen program which also
                             performs some minor set-up functions..

              TP870002.EXE - The registration program which is bypassed
                             on registered versions until you distribute
                             a copy to another person.

              TP870003.EXE - The Main Menu program.

              TP870004.EXE - The User Guide.

              TPINCTAX.EXE - The program that performs the income tax 
                             estimate.

              TPPRTTAX.EXE - The program that is called when you print a
                             copy of the income tax estimate.

              TPWTHTAX.EXE - The withholding tax estimator and reporter.

              TP870005.EXE - The module that contains your Version and
                             release information.

              BRUN20.EXE   - The runtime module required by these programs.

              TPMANUAL.DOC - This manual on file.


          Besides these files the Tax-Planner will create temporary files 
          that it needs as it executes.  The files above are the minimum 
          files that may be distributed to allow others to use Tax-Planner.

          Erase any files that end in LOG, TAX, or DAT, and the file 
          TP870008.EXE before you distribute a copy of your Tax-Planner files 
          as these files contain information on your tax situation which you 
          may not wish to share with other persons.













                  (c) Copyright 1987 by Michael H. Norris      page 20






                                                                            

```
{% endraw %}

## TPREADME.TXT

{% raw %}
```

     The Tax-Planner documentation may be printed by entering PRINTDOC from
     the DOS prompt.  The program may be started by entering TP87 after it 
     has been installed.  The documentation explains how to setup Tax-Planner.

     You should use whole dollar entries within the program as you reply to
     its questions.  Since most people will enter less than 50 dollar items
     and the tax is a percentage of the income less certain expenses your
     tax estimate will not be affected by more than 10 or 15 dollars in tax.

     Within either the income tax estimator or the withholding tax estimator 
     you may enter a question mark "?" for most of the questions to receive
     additional help, or an explanation of the question.  I tried to stay
     away from income tax terminology as much as possible but had to use it
     in some cases.  The tax law after the 1986 changes is still very complex.

     Let me know of your problems or dislikes about Tax-Planner when you 
     register your copy. I can use your suggestions to improve the product 
     for 1988, or add additional help within the documentation.

                                              Thanks for trying Tax-Planner,
                                              Michael H. Norris
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0982

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        66   3-20-87  10:22a
    BRUN20   EXE     68396   6-13-86  10:55a
    CONFIG   SYS        33   3-20-87  10:23a
    COPYHD   BAT      1024   3-20-87   8:44p
    COPYONE  BAT       696   3-20-87  10:20a
    COPYTWO  BAT       695   3-20-87  10:21a
    FILES982 TXT      2039   8-17-88   1:10p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   6-06-88  11:37a
    PRINTDOC BAT       952   3-20-87  10:22a
    TP87     BAT        66   3-20-87  10:21a
    TP870001 EXE      7088   3-20-87  12:20a
    TP870002 EXE     16896   3-20-87  12:20a
    TP870003 EXE      5632   3-20-87  12:14p
    TP870004 EXE     18608   3-20-87  12:22a
    TP870005 EXE        24   3-20-87   9:31p
    TP87HD   BAT        49   3-20-87  10:22a
    TPFILES  TXT      1536   3-20-87  12:32p
    TPINCTAX EXE    106496   3-20-87  12:06p
    TPMANUAL DOC     44416   3-20-87  12:15p
    TPPRTTAX EXE     15616   3-20-87  12:09p
    TPREADME TXT      1408   3-20-87  12:15p
    TPWTHTAX EXE     45344   3-20-87  12:10p
           23 file(s)     337812 bytes
                           12288 bytes free
