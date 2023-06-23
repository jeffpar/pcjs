---
layout: page
title: "PC-SIG Diskette Library (Disk #2240)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2240/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2240"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RETIRE"

    A versatile, easy-to-use retirement planning tool that offers a
    simple way to take a hard look at personalized retirement prospects.
    Project retirement income based on company savings plans, IRAs,
    personal savings and social security.
    
    RETIRE prompts you to enter details of projected retirement living
    expenses.  Find out how long your savings will last.  Income, taxes,
    and expenses are broken down and a year-by-year status of savings is
    shown. Major planned expenditures, cash collections, and special
    adjustments such as the sale of your house are provided for.
    "What if" analysis can be made for items like age at death for you or
    your spouse, rate of inflation, etc.
    
    This version deals with a normal single life annuity pension option as
    offered by most companies.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADJUST.TXT

{% raw %}
```
                              SPECIAL ADJUSTMENTS

         This module collects additional information that may be used in the 
retirement calculations. The cost-of-living adjustment, if any, included in 
your pension plan is requested. The amount of you own contributions to your 
retirement plan are requested since for some pension options, on your early 
death, thats all your spouse will receive. The rate of interest used in the 
program for calculating interest earned on your savings is based on your 
previous estimate of inflation plus your evaluation, in this module, of you 
own investment attitude as aggressive, average, or conservative. 

         In the event that this analysis is for a married couple and that one 
of the participants is assumed to die first, an estimate of the subsequent 
reduction in cost of living for the survivor is requested. If you plan to sell 
your home and take advantage of the one time IRS tax break for sale of a 
primary residence, the information may be entered in this module. 

         Also covered in this module are life insurance and state income tax.
The year of collection for any insurance entered here is automatically placed 
at the first death of a participant. Rate of state income tax should be an 
estimate of the actual percentage of adjusted gross income that will be paid.
 
```
{% endraw %}

## ASSET.TXT

{% raw %}
```
                        RETIREMENT ASSETS MODULE

         This module asks for data about your assets going into retirement, 
such as a 401k company savings plan, individual IRA accounts, normal taxable 
savings accounts and the like. Since you may be planning your retirement 
several years before the fact, it also requests an estimate of annual input 
up until retirement. Tax free income is entered here along with a measure of 
it's inflation sensitivity. Other taxable income, such as a spouse's pension 
is entered in the cost-of-living module. 

         The program asks for your estimated Social Security benefit at age 
65, and then calculates and displays your monthly benefit at the age you wish 
to begin collecting. By following the instructions you may then find and enter 
the correct value for your spouse either as a percentage of your benefit or 
what she has earned at her own job, whichever is higher. 

         If you have entered "after tax" money into a company savings plan 
before the 401k type plan was in existence you may be able to withdraw a 
certain amount tax free and roll the rest into an IRA. The program provides 
for you to withdraw this money at retirement. This may be handy since 
withdrawals from IRA's before age 59 1/2 are penalized. 
 
```
{% endraw %}

## BASE.TXT

{% raw %}
```
                              BASIC ASSUMPTIONS

         The first module sets the stage for retirement, establishing timing, 
marital status and ages of participants. The predicted age at death is 
critical in evaluating pension options since some plans stop paying the 
surviving spouse. At this input you are prompted with your life expectancy 
according to the IRS. One scenario for analysis should include an untimely 
early death. 

         An important decision is how to handle distributions from your 
company (401k) savings plan, you can pay taxes immediately or defer with an 
IRA rollover. If you choose a lump sum distribution the program will choose 
the lowest tax from conventional or ten year averaging, but will not 
investigate eligibility for capital gains treatment. Analyze both ways and 
observe how the choice effects your particular retirement. 

         Another critical factor is your estimate of average inflation during 
your retirement. Even if your pension plan has a built in cost-of-living 
(COLA) adjustment it may lag behind actual inflation while your expenses 
grow. For high inflation, earnings on savings will rise directly with 
inflation while pension income may be relatively fixed, this favors rapid pay 
out options. Try several values of inflation to observe this phenomenon. 

```
{% endraw %}

## CALC.TXT

{% raw %}
```
                         DESCRIPTION OF CALCULATIONS

         For each year of retirement the ages of participants, inflated costs 
of living, and Social Security benefits are calculated. Social Security is 
calculated using it's historic tendency to increase at a rate equivalent to 
80% of inflation. Programed after retirement expenditures and cash collections 
are included at the value input. (I.E. no inflation factor is used on these 
inputs) Other incomes including pension benefits are inflated in accordance 
with their COLA's and the user's current estimate of inflation. 

         For each pension option that has an input in the pension module a 
yearly comparison of income and expenses are made. Deficiencies are made up 
first from normal taxable savings and then from your personal IRA (includes 
any roll over) and lastly from your spouse's IRA. Interest from those savings 
are included as income in that year. Taxes are an expense from the previous 
year. Bankrupt situations are noted for later reporting.

         Taxes are estimated using standard deductions and the 1989 tax 
schedules for married or single as appropriate. Social Security is taxed using 
1988 rules. All money taken from IRA's, including the mandatory withdrawals 
over age 70, are taxed, but interest earned in IRA's is not.
 
```
{% endraw %}

## COLA.TXT

{% raw %}
```
                           COST OF LIVING MODULE

         This module takes you through a fairly exhaustive routine to input 
your cost of living in today's dollars. During calculations the program 
assumes that all income above this amount goes into savings and begins to 
draw interest. So don't fool yourself, be sure you have described a budget 
that you can live within. This is probably the most common and most serious 
mistake made in planning a retirement. 

         Expenses not subject to inflation are identified in this module so 
that future years livng cost are not pushed unrealistically high by inflation. 
Planned major expenses after retirement are provided for in this module as are 
planned cash collections which you may be counting on. It is recommended that 
at least one large contingency expense be entered into some future year. 

         Other income such as a spouse's pension may be totaled and added into 
this module along with the level in percent with which that income will match 
inflation. 

         If you feel that your costs of living will decline as you get older 
you can adjust for that amount in today's dollars. The reduction will start in 
the year you become, or would have become, 70 years old.
 
```
{% endraw %}

## FILE2240.TXT

{% raw %}
```
Disk No: 2240                                                           
Disk Title: Retire                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Retire                                                   
Author Version: 2.0                                                     
Author Registration: $29.95                                             
Special Requirements: None.                                             
                                                                        
Retire is a versatile, easy to use retirement planning tool. It offers a
simple way to take a hard look at personalized retirement prospects. The
user can project retirement income based on company savings plans,      
IRA's, personal savings and social security.                            
                                                                        
The program prompts you to enter details of projected retirement living 
expenses.  Then you find out how long your savings will last.  Income,  
taxes, and expenses are broken down and Year-by-year status of savings  
are shown.  Major planned expenditures, cash collections, and special   
adjustments such as the sale of your house are provided for.  "What if" 
analysis can be made for items like age at death for you or your spouse,
rate of inflation, etc. The documentation is excellent.                 
                                                                        
This version deals with a normal single life annuity pension option as  
offered by most companies. The registered version will process and      
compare 16 additional options including the joint and 100% survivor     
options.                                                                
                                                                        
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

THE RETIRE PROGRAM IS A RETIREMENT PLANNING TOOL.

         To run the program, type: RETIRE (press enter) 
         
         To read the documentation, type: DOC (press enter)

         After personal data has been entered and suitable analysis reports 
have been obtained on the monitor, the PRINTOUT program may be used to obtain 
hardcopy yearly detail reports on the option of your choice. type: PRINTOUT 
(press enter)

         Files required on disk are tax schedules MARTAX.SCH SINTAX.SCH 
10YRTAX.SCH and an actuarial file named ACTTAB.DAT. 

         Personal data is stored in files PERDAT.DAT and PERSTR.DAT which are 
initialized at first program use. 

         Besides knowledge of his personal assets the user is expected to have 
a list of the pension plan options offered by his employer and a projection of 
the monthly payments that each plan would offer at retirement. 



```
{% endraw %}

## INTRO.TXT

{% raw %}
```
RETIRE version 1.             INTRODUCTION

         RETIRE is a tool for planning your retirement. It helps you create a 
personalized data base of personal and financial information critical to your 
retirement. Flexible categories handle most situations and include a 
comprehensive cost of living module which separates expenses by inflation 
sensitivity. It allows for the planning of major post retirement expenditures 
and cash collections as well as reductions in expenses due to old age. 
Provisions are made for Social Security, 401k plans, selling of a home and 
much more. 

         The program assumes that one prime source of income after retirement 
will be a monthly pension or annuity payment and therefore displays the 
advantages or disadvantages for that particular user, of up to 17 different 
types of pension options that are normally offered to employees. (I.E. single 
life, 100% survivor, 10 year certain, etc.) It analyses and reports in detail 
on each option. If calculations indicate that savings will run out, the 
program indicates at what age and what percentage of necessary income remains. 

         You may change data such as rate of inflation, age at death, costs of 
living, contingency plans, etc to recalculate and further focus in on the 
particulars of your personal retirement situation. 

```
{% endraw %}

## PENSION.TXT

{% raw %}
```
                             PENSION MODULE

         This module lists 17 types of pension payment plan options which are 
common in industry or in purchased annuity plans. Full descriptions of the 
plans are included in the input prompts. It is important to note that the 
input required here is the predicted monthly benefit payment offered by the 
plan in the year you plan to retire. That is in the year listed in item 4 of 
the basic assumption module. 

         Social Security adjustment options require three inputs. Namely the 
adjustment breakpoint (the year you plan to start collecting your Social 
Security benefit which for these options is limited to a choice between 62 and 
65), the monthly benefit before that age, and the monthly benefit thereafter. 

         Remember to change entries in the pension module if you decide to 
change your planned year of retirement! 

         If no entry or 0 is listed as the monthly annuity, no calculation 
will be made for that option. To analyze your situation with no pension you 
must put a token value into one of the options.

         The unregisterd version of the program does not do all options.

```
{% endraw %}

## RESULTS.TXT

{% raw %}
```
                            RESULTS OF ANALYSIS

         After the calculations you are given six types of information.

Disposition of your 401k - This report shows your plan's value at retirement 
at the current input and what your taxes would be on a lump sum withdrawal. 

How long savings last - For each option this report lists the ages of the 
participants when savings are exhausted and the percent of necessary living 
expenses that are still being collected. If savings are not used up the report 
says so and lists the total savings remaining at the final participants death. 

Accumulative net cash - For each option the report shows the savings balance 
at the end of retirement. If savings have been used up, the amount that would 
have had to be borrowed to maintain your standard of living is shown. 

Income and expenditures - Breakdowns of the components of income and 
expenditures for each option are available.

Year by year status of savings - For each option the year by year fluctuations 
in savings can be observed. Major planned expenditures and cash collections 
are also listed here so that their effect can be understood.
 
```
{% endraw %}

## SHARE.TXT

{% raw %}
```


                           UNREGISTERED VERSION

           This program is for analyzing your retirement with a single 
life annuity type retirement option which is offered by most company 
retirement plans. 

           If you like the program and would like to look at other 
more complex options please request a registered disk from :

                           GABE Software
                           1350 Camino Manadero
                           Santa Barbara, Ca. 93111

          The registerd version will accept and compare seventeen 
popular options including the joint & 100% survivor options offered by 
many companies.

                   The registration fee is $29.95
     



```
{% endraw %}

## SINTRO.TXT

{% raw %}
```
RETIRE                          INTRODUCTION

         RETIRE is a tool for planning your retirement. It helps you create a 
personalized data base of personal and financial information critical to your 
retirement. Flexible categories handle most situations and include a 
comprehensive cost of living module which separates expenses by inflation 
sensitivity. It allows for the planning of major post retirement expenditures 
and cash collections as well as reductions in expenses due to old age. 
Provisions are made for Social Security, 401k plans, selling of a home and 
much more. The unregistered version will analyze a Single Life annuity only.

         RETIRE assumes that one prime source of income after retirement will 
be a monthly pension or annuity payment and therefore displays the advantages 
or disadvantages for that particular user, of up to 17 different types of 
pension options that are normally offered to employees. (I.E. single life, 
100% survivor, 10 year certain, etc.) It analyses and reports in detail on 
each option. If calculations indicate that savings will run out, the program 
indicates at what age and what percentage of necessary income remains. 

         You may change data such as rate of inflation, age at death, costs of 
living, contingency plans, etc to recalculate and further focus in on the 
particulars of your personal retirement situation. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2240

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        29   6-13-88   3:37p
    GO       TXT       922   6-20-88   2:10p
    RETIRE   EXE    189910   4-16-90  11:59a
    MARTAX   SCH       512   1-25-90   4:38p
    SINTAX   SCH       512   1-25-90   4:35p
    10YRTAX  SCH      1920   4-14-88   4:29p
    ACTTAB   DAT     14208   2-28-88  10:20p
    PRINTOUT EXE    102372  10-13-89   8:17a
    DOC      BAT       247   6-16-88   1:52p
    INTRO    TXT      1360   6-16-88   9:25a
    BASE     TXT      1350   6-16-88   9:21a
    CALC     TXT      1346   4-13-90   2:03p
    ADJUST   TXT      1368   4-16-90  12:28p
    PENSION  TXT      1191   4-16-90   1:04p
    RESULTS  TXT      1179   6-16-88   9:14a
    ASSET    TXT      1307   6-16-88   9:15a
    COLA     TXT      1273   6-16-88   9:23a
    SHARE    TXT       725   4-16-90  12:05p
    SINTRO   TXT      1422   4-16-90  12:23p
    FILE2240 TXT      2369   6-21-90   2:56p
           20 file(s)     325522 bytes
                           25600 bytes free
