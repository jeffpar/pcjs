---
layout: page
title: "PC-SIG Diskette Library (Disk #360)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0360/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0360"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PFROI, PORTFOLIO MANAGEMENT WITH ROI"

    Now you can track your investments daily.  How often have you analyzed
    just how much of an increase, (or, sadly, a decrease), from the
    original cost, that daily value represents?  PFROI helps you to
    maintain and manage a securities (stocks, bonds, mutual funds, CDs,
    etc.) portfolio and periodically measure the return on investment.
    
    Several reports and analyses are available: gains, dividends, interest,
    miscellaneous income, open lots, transactions, account position,
    relative strength, valuation plot, portfolio ROI, security ROI and
    client statement.  Focus on those marginal investments in order to make
    well-informed GO/NO GO decisions.  PFROI does not download electronic
    stock data.  A demonstration data file is included.
    
    Manage an extensive portfolio and plan and prepare your taxes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIP.TXT

{% raw %}
```

PFROI provides complete portfolio management including computation of 
return on investment (IRR method). Users who register with the 
publisher will receive an enhanced version with additional features.   

PFROI Features

* easy data input format.

* computation of true return on investment (IRR method).

* numerous reports including capital gains, dividend & interest reports 
  useful for tax preparation and a detailed open lot report useful for 
  tax planning.  

* FIFO, average cost and specific tax lot methods.  Tax rates are 
  user-configurable (flexible for tax law changes).  

* valuation graphics (CGA, EGA, VGA & Hercules).  

* support of just about every security type (stocks, bonds, mutual 
  funds, cd's, depreciable assets, options, etc.) with many transaction 
  types including reinvestment.

* output to printer, text file or screen.

Here is what "CHANGING TIMES" magazine has to say about PFROI in their
5/89 article "BEST OF THE ALMOST-FREE SOFTWARE":

 "A SUPERB shareware portfolio manager, PFROI keeps track of 
 transactions in your investment portfolio and evaluates its 
 performance by computing your before- and after-tax annual rates of 
 return -- for entire portfolios or individual securities.  You can 
 track multiple portfolios -- say, one for your stocks, one for your 
 mutual funds or one for each brokerage account.  The program supports 
 every conceivable type of transaction, including phantom interest from 
 zero-coupon bonds, depreciation, short sales and stock splits.  An 
 added beauty is that it keeps track of the tax implications of each 
 trans- action.  If your losses exceed the maximum tax deduction in any 
 one year, the program will carry the loss over the next year.  Another 
 excellent feature is the option of separating multiple purchases of a 
 stock (or dividend reinvestments) into tax lots so you can keep track 
 of your tax basis by specifying which lot or lots you wish to sell." 
      
      





```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  PC-SIG Disk #360  PFROI, PORTFOLIO MANAGEMENT WITH ROI  >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To read author's description of PFROI, type:  TYPE DESCRIP.DOC (Enter)  ║
║                                                                         ║
║ To run PFROI, type:  PFROI                                              ║
║                                                                         ║
║ To print instructions for READ AND RUN and then GRFX2, type:            ║
║                      COPY RNR.DOC PRN (press Enter)                     ║
║                      COPY GRFX2.DOC PRN (press Enter)                   ║
║                                                                         ║
║ To read author's articles, type:  TYPE PATENTS.TXT                      ║
║                                   TYPE TAXES.TXT                        ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## GRFX2.DOC

{% raw %}
```
_




            Grfx - An Educational Program
          Copyright (c) 1984, 89, Techserve, Inc.

 1.0  Introduction

 Grfx is an educational program to plot mathmatical functions of
 the form "Y = F(x)".  F(x) may be any expression involving:

  x or X - The independent variable on the horizontal axis
     of the plot.

 Any integer or decimal constant, e.g. "3" or "4.56".

 Arithmetical operators - (+, -, *, /) where * = multiply
     and  / = divide.

 Trigonometric operators - (Sin, Cos, Tan).

 Power Operator - ( ^ ).  E.g. 2^3 = 8.

 Ln - The Natural Logrithm operator. E.g.  Ln(5*x).

 Exp - Natural Exponential Operator. E.g.  Exp(x).

 You must have a CGA graphics card in your PC to use Grfx.


 2.0  Starting Grfx

 Start Grfx by keying in "Grfx2"<Enter> when you are logged onto the
 drive containing GRFX2.EXE.  Note the introductory message
 containing a brief summary of the available commands.  After
 reading, hit any key to move on to the main Grfx screen.


 3.0  Entering a Function

 The first step in using Grfx is to enter the function you wish
 to plot.  To do this, depress the "Alt" key and "F" key simul-
 taneously to enter the "FunctionEdit" mode.  This mode permits
 you to key in your function on the bottom line of the screen.
 Note the non-blinking cursor to the right of the equal sign.

 You may now key in your function.  Try the following:

       (X/2) + 2.1415*Sin(3*x)

 You may use the horizontal arrow keys on the keypad to move the
 cursor, and may use the backspace key to delete characters.  The
 "Del" key also deletes any characters to the right of the cursor.

 When you have finished entering the function, hit the "Return"
 key.  This tells Grfx to go back to the main mode.  Note that
 you don't have to be at the last character.  After hitting the
 "Return" key, note that the Alt-Key command summary reappears
 on the top line, indicating the main mode.





_







 4.0  Plotting a Function

 To plot the function just entered, depress Alt-P.  The function
 is then plotted on the screen, provided it is within the scale
 range of the graph.  An error message is displayed if the func-
 tion contains an illegal expression,  . . . hitting any key
 returns the "FunctionEdit" mode to allow error correction.


 5.0  Changing Scale

 If the function you wish to plot is best viewed using a differ-
 ent scale, the scale may be changed using the Scale function.

 Depress Alt-S.  Note the prompt on the top line to choose a
 scale from 0 to 4.  The zero scale ranges from -1 to +1.  The
 4 scale ranges from -10000 to +10000.  The default scale is 1.

 Selecting a new scale does not destroy a previously entered
 function.  However, it does clear any previous plot.  To
 re-plot,  simply press Alt-P.


 6.0  Changing Colors

 If you have a color monitor, display colors may be changed by
 keying Alt-L.  Note the following prompt on the top line:

  Select :  F)oreground  B)ackground  Esc

 The foreground and background selections will toggle foreground
 and background colors.  (Background is inactive on CGA displays.)


 7.0  Clearing Plots

 Grfx plots new functions over old plots unless you first clear
 the old plots.  This may be done using Alt-C.  Note that the
 clear operation also clears any existing function, . . . so be
 sure to "Clear" before entering a new function if you don't
 want to overplot an old function.


 8.0  Back to DOS  - Alt-Q returns you to DOS.


 9.0  GrFx2

 GrFx2 is an enhanced version of Grfx, revised in 1989.
 Added features include support of Hercules, EGA and VGA
 displays, and output to 9-pin Epson type printers.
 (Alt-O command).





_

```
{% endraw %}

## PATENTS.TXT

{% raw %}
```
SOFTWARE PATENTS - "The End of Software 'Free Speech'?"
      
A number of recent articles including one in the "Wall Street Journal" on 
3/14/89 entitled "Will Software Patents Cramp Creativity?" have described 
how the U.S. Patent Office has started to issue patents on software 
techniques.  This issue should be of intense interest to customers, 
distributors and authors in the shareware business. 

The thrust of the articles is that more and more patents are being 
issue on software techniques which may have a long run chilling effect on 
the software industry. Based on the cases mentioned it appears to that 
individuals or companies are being granted patents for such things as 
moving a cursor around on the display screen.  These individuals are
then running to court to file lawsuits asking so-called "infringers" for 
up to 5% royalties on the software using these heretofor commonly used 
techniques. 

Kenneth Wasch, executive director of the Software Publisher's Association 
was quoted by the "Christian Science Monitor" 9/12/89 as saying the key 
players in the lawsuits seem to be "people from outside our industry who 
just buy up a bunch of patents and then come into our industry filing 
lawsuits . . . They are just buying patents to see if they can shake some 
money free". 

Until recently, software authors and publishers have legally protected the 
fruit of their labors using copyrights and trade secret law protections. 
Copyrights confer legal ownership protecting the entire body of a program, 
preventing others from making and selling wholesale unauthorized disk copies 
of programs.  (Shareware authors usually provide blanket authorizations for 
users and distributors to make copies, subject to certain limitations).  To 
register copyrights, users submit a listing of the program source code to 
the copyright office along with a small fee.  A limited portion of the 
listing may be withheld to protect portions of the code which are considered 
"proprietary" by the author.  Although a copyright covers a entire work, it 
generally does not legally preclude others from using independently developed 
program components or fragments that happen to be the same or similar to 
those in the copyrighted work.  

Unlike copyrights, however, software patents usually cover only fragments of 
a software program and may involve perhaps only a few lines of program source 
code.  The patent holder is presumed to have the legal right to preclude 
others from using the program fragment for up to sixteen years.  To make an 
analogy, this would be similar to the author of a written work patenting a 
phrase or a simple sentence, precluding others from its use without payment 
of a royalty.  Fortunately for the English language this has never evolved.  

Some might argue that software is different from human spoken or written
language in that it involves a more rigorous logic and may be more cleverly
applied.  That may or may not be true.  If it is true, then a programmer
may protect his innovation merely by withholding the subject portion of
the source code from the copyright disclosure.   Trade secrecy laws protect
the author from misappropriation of such code by, say, employee theft or 
competitor reverse engineering, however they do not prevent other authors 
from developing similar code fragments through their own independent study 
and development.  It is the belief of this software author that this is a 
more equitable mechanism for software creativity protection than patents. 
The reason is that the process is self-regulating, i.e. "proprietary" 
techniques which are trivial (and thus ought never to be patentable) will be 
commonly independently developed elsewhere, whereas techniques which are 
truly innovative will remain hidden due to their complexity.  

On the whole, the copyright and trade secrecy system has worked quite well.  
It has protected authors well enough to spur a plethora of new software.
And it has fostered enough competition to ensure falling prices to the 
benefit of consumers. There appears to be only two groups that will benefit 
from software patents: lawyers and large corporations.  Two groups who will 
be hurt are software consumers and small, independent software producers who 
cannot afford the legal costs of the patent and cross-licensing processes. 

If you concur in this analysis and wish to protect your interests as a 
consumer or independent software author please write your senators
and congressman at the following addresses (feel free to include a
copy of this analysis):

  Hon. Chairman Robert Kastenmeier
  House Judiciary Committee on 
  Courts & Intellectual Property
  2137B Rayburn House Office Bldg
  Washington, DC  20515

  Senators: Senate Office Bldg
            Washington, DC 20510

  Reps.   : House Office Bldg
            Washington, DC 20515  



Robert N. Hobbs
Pres., Techserve, Inc.
P.O. Box 70056
Bellevue, WA 98007
(206-747-5598)

```
{% endraw %}

## READ-ME.TXT

{% raw %}
```
Execute (run) the program "RNR.EXE" to view menu from which "CMP"
type text files may be decompressed and read.
```
{% endraw %}

## TAXES.TXT

{% raw %}
```
 ┌───────────────────────────────┐
 │ INCOME TAX = PRODUCTIVITY TAX │
 └───────────────────────────────┘
 As an economic observer, one notes that there are basically three types of 
 taxes a government can impose: 1) Income tax, 2) Consumption tax (e.g. sales 
 taxes, value-added taxes, tariffs), or 3) Asset tax.  In a free-market 
 economy, the imposition of each type of tax will differently influence the 
 choices of individuals with regard to income (i.e. work vs. leisure), 
 savings/investment, and consumption.  

 In the absence of taxes, people will presumably work, save and consume 
 (spend) at levels commeasurate with their own ability and desires.  This 
 would theoretically produce an economically optimized society.  However, 
 given the necessity for taxes to support services that government can best 
 provide, it seems desirable that taxes should be structured so as to at 
 least not cause economic sub-optimizaton.  

 Viewing current taxes from the point of view of an average taxpayer of 
 middle class means, the approximate tax burden on a two income, home-owning 
 married couple grossing $50,000/year living in a state with a hypothetical 
 5% income tax and 5% sales tax is as follows: 

  Gross Income               :  $50,000
  IRA contribution           : -$ 4,000  (savings/investment)
  Mortgage/Other Deductions  : -$ 8,000  (non-taxed consumption)
  State Tax Deductions       : -$ 3,000
                               --------
  Federal Taxable Income     :  $35,000
  Federal Income Tax         : -$ 6,047  (an INCOME TAX)
                                -------
                                $28,953
  State Income Adjustments   :  $ 3,000
                                -------
                                $31,953
  State/Local Income Tax     : -$ 1,600  (an INCOME TAX)
  Property Tax               : -$ 1,400  (an ASSET TAX) 
  Social Security Tax (6.5%) : -$ 3,250  (an INCOME TAX)
                                -------
  Consumable Income             $25,703
  Tax-Exempt Consumption     : -$ 7,000
  Other Savings (4% * 50K)   : -$ 2,000
                                -------
  Taxable Consumption        :  $16,703
  Sales Tax (@5%)            : -$   835  (CONSUMPTION TAX)
  Gasoline Taxes             : -$   200  (CONSUMPTION TAX)
  Excise Tax on Home         : -$   100  (CONSUMPTION TAX)
  (Amortized over 20 years)                                       

 Breaking the tax burden down by category shows:
      
   INCOME TAXES         $10,897      81%
   ASSET TAXES          $ 1,400      10%
   CONSUMPTION TAXES    $ 1,135       9%
                        -------
                        $13,432
      
 This example shows that the American tax burden is imbalanced between the 
 three types of taxes, with the majority of the burden by a wide margin being 
 comprised of an income tax.  
      
 
 The impact of this disproportionate tax burden on the economy as a whole can 
 be seen by examining how income taxes affect the utility of income to the 
 individual.  Since income can only be spent or saved, a rational individual 
 will look at how an income tax affects those two options.  
      
 By saving income, an individual foregoes current consumption in favor of 
 future consumption.  He or she will be less willing to do so unless they 
 believe that saving will enable a higher level of future consumption.  For 
 this to be possible, the income which is saved must itself earn income which 
 means it must be invested.  However, income taxes reduce investment income, 
 thus reducing the value of savings.  Income taxes thus act as an incentive 
 for the individual to consume and as a disincentive to save and invest.  
      
 Despite the cuts in the top marginal U.S. income tax rates over the past 30 
 years, the real income tax burden on the average taxpayer has actually 
 increased.  This is the result of inflation induced bracket creep, higher 
 state and local income taxes, and expanding social security taxes.  It is 
 not surprising therefore, that over this time period the savings rate of 
 individuals has dropped from 7% down to below 3% of income recently (1988).  
 
 The declining savings rate has resulted in higher interest rates.  It has 
 also resulted in corresponding lower rate of industrial investment than our 
 strongest foreign trade competitors whose real interest rates are relatively 
 lower.  The lower industrial investment means that on average, American
 companies are turning fewer out new products and processes, and are 
 operating with older, less efficient plant and equipment.  

 A severe unfavorable trade imbalance and a decline in relative per capita 
 income are the already apparent result of these policies.  Reversal of this 
 situation will require either an economic calamity to re-stimulate savings, 
 or alternatively, but unlikely, a recognition by politicians that the income 
 tax is not a "progressive tax", but is rather a "Productivity Tax".  
      
 ┌─────────────────────────── 40% Socialist ? ───────────────────────────┐
 │                                                                       │
 │ In the example above, the total tax burden of $13,432 comprises 27%   │
 │ of the couple's gross income of $50,000.  Adding the 6.5% matching    │
 │ Social Security payment made by their employer, plus corporate        │
 │ taxes and inflation paid indirectly through the price of goods and    │
 │ services will raise the couple's total direct and indirect tax burden │
 │ to over 37%.  This is the percentage of Gross National Product that   │
 │ is spent by local, state and federal governments in the USA.          │
 │ Although we view ourselves as a capitalist, free market nation, these │
 │ figures belie the fact that we are already almost 40% socialist.      │ 
 │                                                                       │
 │ Stated in other terms, almost 40% of spending in this country is      │
 │ a result of "collective" decision making as opposed to individual     │
 │ decision-making.  This raises the question: If a majority of the      │
 │ income of the majority of people is channeled through government      │
 │ offices, will the private sector ever stand a chance with a public    │
 │ dependent upon public payroll and political handouts?  One would      │
 │ think not.  Perhaps it is time to place a constitutional cap on total │
 │ government spending so we will remain a country of free individuals.  │
 │                                                                       │
 │ Robert Nile Hobbs, Pres., Techserve, inc.                             │
 └───────────────────────────────────────────────────────────────────────┘
 ╓───────────────────────────────────────────────────────────────────────╖
 ║ Copyright (C) 1988, Techserve, inc.  (Box 70056, Bellevue, WA 98007)  ║
 ╙───────────────────────────────────────────────────────────────────────╜
 
 
 ╓───────────────────────────────────────────────────────────────────────╖
 ║ This article may be reproduced in whole or part provided copyright    ║
 ║ notice is preserved.  Persons concerned with this subject are in      ║
 ║ fact encouraged to send a copy of this to their congressmen and       ║
 ║ legislators with a request for action to cap governmental spending    ║
 ║ and to re-structure taxes in an economically balanced fashion.        ║
 ╙───────────────────────────────────────────────────────────────────────╜



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0360

     Volume in drive A has no label
     Directory of A:\

    PFROI    COM     44086   8-01-90   8:00a
    PFROI    000    108544   8-01-90   8:00a
    PFROI    HLP     11653   1-21-90   5:08p
    PFROI2-1 CMP     24493   7-31-90  10:22a
    PFROI2-2 CMP     22881   7-31-90  10:22a
    PATENTS  TXT      5060   1-07-90   5:00p
    READ-ME  DOC     10469   7-31-90  11:28a
    RNR      EXE     36784   7-25-90  11:52a
    ACCOUNTS STD       512   1-31-88  11:46a
    SYMBCHG  EXE      6880   1-31-90   3:09p
    RNR      DOC      7162   6-15-90   2:41p
    DEMOPF           17920  12-30-88  12:00p
    TAXES    TXT      7613   3-19-89  11:18p
    TXTTOPFR EXE     11152   1-31-90   2:48p
    GRFX2    EXE     30176   8-03-89  12:43p
    GRFX2    DOC      3782   8-02-89  11:24a
    READ-ME  TXT       114   8-26-89  10:39p
    DESCRIP  TXT      2036  11-16-89  12:22p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1112   1-01-80   8:21a
           20 file(s)     352469 bytes
                            1024 bytes free
