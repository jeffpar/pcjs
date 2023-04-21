---
layout: page
title: "PC-SIG Diskette Library (Disk #2035)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2035/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2035"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COST CALCULATION"

    Do you need to determine how much a product should cost your client? Do
    you need to know how much to charge customers for your new widget? If
    you do, then COST CALCULATION will help you. Tabulate activities,
    equipment, labor, indirect equipment, and materials used and arrive at a
    cost to be charged for your new widget or whatever you are manufacturing
    or making.
    
    COST CALCULATION is a program for recording the costs involved in a
    small to large manufacturing and/or construction firm. Its objective is
    to provide itemized overhead costs and costs of each final
    product produced.
    
    Installing the program is easy. Once done, read the manual carefully.
    This is necessary or the program cannot be used properly.
    
    For those in construction or manufacturing, COST CALCULATION is worth
    examining. The shareware version is limited to 20 pieces of equipment,
    60 activities, 400 vouchers, and 10 consumers (not customers). More
    complete printer error checking is provided in the registered version.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTENTS.DOC

{% raw %}
```

Cost Calculation
MEABT

Files on this Disk:

Instal.Bat............... Instals Cost Calculation onto your hard disk.
Start.Bat................ Starts Cost Claculation.
Config.Sys............... Required to run Cost Calculation.
Cost.Exe................. Main Program.
Cost.0vr................. Main Program Overlay.
Contact.Dat.............. M.E.A.B.T. Address.
Read.Me.................. Information for Registration of Version 2.11
Tutor.Doc................ Tutorial for Cost Calculation.
PrintTut.Bat............. Prints Tutorial.
Manual.Doc............... Cost Calculation Manual.
Printman.bat............. Prints Manual.
Promo.Com................ Promotional Program.
Promo.Doc................ Promotional Program Data.
Contents.Doc............. This File.




```
{% endraw %}

## FILE2035.TXT

{% raw %}
```
Disk No: 2035                                                           
Disk Title: Cost Calculation                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: Cost Calculation                                         
Author Version: 2.15                                                    
Author Registration: $50.00                                             
Special Requirements: 640K RAM and hard drive recommended.              
                                                                        
Do you need to determine how much a product should cost your client?  Do
you need to know how much to charge vendors for your new widget?  If you
do, then COST CALCULATION will help you. Tabulate activities, equipment,
labor, indirect equipment, and materials used and arrive at a cost to be
charged for your new widget or whatever you are manufacturing or making.
                                                                        
COST CALCULATION is a program for recording the costs involved in a     
small to large manufacturing and/or construction firm.  It's objective  
is to provide:  1) itemized overhead costs, and 2) costs of each final  
product produced.                                                       
                                                                        
Installing the program is easy. Once done, read the manual carefully.   
This is necessary or the program cannot be used properly.  The manual   
and screen information is based on British spelling but should not be a 
serious hindrance to anyone.                                            
                                                                        
For those in construction or manufacturing, CC is worth taking a look   
at.                                                                     
                                                                        
Program Limitations:  The shareware version is limited to 20 pieces of  
equipment, 60 activities, 400 vouchers, and 10 consumers (not           
customers).  More complete printer error checking is provided in the    
registered version.                                                     
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```



   ********************************************************************
   *                                                                  *
   *                                                                  *
   *                   C O S T   C A L C U L A T I O N                *
   *                                                                  *
   *                                                                  *
   *                   O P E R A T I O N   M A N U A L                *
   *                                                                  *
   *                                                                  *
   *        (c) Mid-East Applied Business Technology (Canada) Ltd     *
   *                                                                  *
   *                             July  1989                           *
   *                                                                  *
   *        Version 2.15             by Kenneth Betts & Dan Gibson    *
   *                                                                  *
   *                                                                  *
   ********************************************************************



**************************   CONTENTS     ********************************

       Introduction...........................................

       Copy Right Notice......................................

       Disclaimer.............................................

       Registration ..........................................

       Versions available.....................................

       The Costing System.....................................    

       The Code System........................................

       Installing Cost Calculation on your Hard Disk..........

       Initialization.........................................

       The Title Page.........................................

       The Main Menu..........................................

       Activities
         Defining.............................................
         Initializing.........................................
         Editing..............................................

       Equipment
         Defining.............................................
         Initializing..........................................
         Editing..............................................

       Indirectly Charged Equipment
         Defining.............................................
         Initializing.........................................
         Editing..............................................

       Labour Pool   
         Defining.............................................
         Initializing...........................................
         Editing..............................................

       Stores   
         Defining.............................................
         Initializing...........................................
         Editing..............................................

       The Report 
         Compiling............................................
         Editing..............................................
         Making the Report....................................

       The Cost Code Directory................................

       List of Accounts.......................................

       Vouchers                                               
         Defining.............................................
         Append...............................................
         Edit.................................................
         Post.................................................

      Distribution of Stores
         Defining.............................................
         Append...............................................
         Edit.................................................
         Post.................................................

      Utilities                              
         Edit Accounts........................................
         Sort Accounts........................................
         List Cost Details....................................

      The Control System......................................

      Printing................................................

      Technical Data
         File Contents........................................
         Codes................................................ 

      Getting the Full Program
         Version 2.1..........................................

         Version 2.2..........................................







**********************   INTRODUCTION    ***************************




Welcome  to  "Cost  Calculation" by MEABT Ltd.  and to the  world  of  better
control over costs, pricing, and profits.

"Cost Calculation" is a powerful tool.

The  speed of "Cost Calculation" and its very easy to use entry formats  make
it  the  natural  choice for projects involving hundreds  of  activities  and
pieces of equipment.

The  flexible "design your own" coding system makes transition from an  older
system relatively painless.

Version 2.x shows dramatic processing time savings over version 1.0;  of from
50 % on medium size projects to 80 % on large projects!!




************************   COPYRIGHT NOTICE   *******************************


Mid-East  Applied   Business  Technology   (Canada)  Ltd.  fully  intends  to
vigorously prosecute any and ALL copyright violations.







*************************    DISCLAIMER    ***********************************


MEABT hereby disclaims all warranties relating to this software (Cost
Calculation Version 2.1x) whether expressed or implied, including without
limitation any implied warranties of merchantability or fitness for a
particular purpose.  MEABT will not be liable for any special, incidental,
consequential, indirect or similar damages due to loss of data or any other
reason, even if MEABT or any agent of MEABT has been advised of the
possibility of such damages.  In no event shall MEABT's liability for any
damages ever exceed the price paid for the license to use this software,
regardless of the form of the claim.  The person using the software bares
all risk as to the quality and performance of the software.

However, with proper application this software will perform as described.

Note:  In no case  is  our  liability  greater  than  replacement  of the
registered software or refund of your registration fee paid.






****************************  DISTRIBUTION  *********************************


Version 2.1 and 2.15 of this program may be copied and distributed provided  
that: 
1. NO changes are made in this program or manual. 
2. NO charges are made except a minamul charge to cover the cost of the 
   diskette and shipping or handling up to $10
3. the copies are  used  by  the  registered owner OR are used for evaluation
   only.




******************************  REGISTRATION  ********************************


                           Version 2.1

Version 2.1 of Cost Calculation is Public Domain.



                           Version 2.15


Cost Calculation 2.15 is a mini version of the full program.

Complete printer error checking is not provided on version 2.15.

The following restraints affect the use of version 2.15:
    1) only 20 equipment may be initialized
    2) only 60 activities may be initialized
    3) only 400 vouchers may be processed in any one period
    4) only 10 consumers may be listed for each fixed distribution stock

These restrictions should not affect a small business.

It is possible to register Version 2.15 by sending your company name, address, 
and a cheque or money order for $50.00 to the MEABT address at the end of this 
manual. The registration fee will provide you with the following: 

  o  A copy of Cost Calculation Version 2.15 (Not copy protected)
  o  A copy of the full Manual on the disk
  o  Automatic notice of Updates etc.
  o  Access to the BBS help line and mail box.
  o  You will be supporting the concept that allowed you to receive Cost
     Calculation in the first place.  Only through User support can we
     continue to support and improve out products, and release other products
     we have already developed and are developing.
  o  A discount of $50.00 against the price of Version 2.2 if you wish to
     upgrade at a later date.

Your comments as a registered user of the software  are  greatly  appreciated
and will help us to provide continuing useful product development.


                          Version 2.2
To obtain Cost Calculation version 2.2 (with  none  of  the  above  mentioned
restrictions) contact your distributor, or the MEABT Office at:


             M.E.A.B.T.
             #48 Homewood Ave.,
             Hamilton, Ontario
             L8P 2M2








**********************   THE COSTING SYSTEM  ******************************


Using Cost Calculation entails the modeling of the operations of your company
in  such a way as to have the program calculate the value added to a piece of
material,  the  unit  cost  of  production,  or the  cost  of  performing  an
operation.

In  doing this,  consideration must be taken of the basic resources consumed;
materials, labour and equipment.

Cost  accounting  with  Cost Calculation depends upon  the  relationships  of
consumer of resources and resources consumed.

Cost  Calculation  divides  consumers into  five  basic  groups;  Activities,
Equipment,  Labour Pools,  Indirectly charged Equipment, and Material Stocks.
Each of these consumers (except for Indirectly charged Equipment) may in turn
become a producer of a resource to be consumed.

During an activity's editing session, any of the products may be removed from 
the list of Resources Produced by entering three space characters when Cost 
Calculation prompts you with the code of the product that you wish to remove. 

There is a command line switch that may be used -> /R.  When this is used Cost 
Calculation will take the existing data files and return them all to the empty 
state.  That is, all definitions and relationships will still exist, but there 
will be no values, quantities, or rates.  Mostly this is useful during the 
period of development of the coding system itself.  The other use of this 
switch is to produce a tested and working template that can be used on another 
set of data.  Thirdly (for me mostly) this is great for demonstrations; reset 
the program and then run the vouchers through again. 




**************************** THE CODE SYSTEM *******************************



***** Points on designing a code system/ modeling the business *****
 

You will need to make an operators guide.  Use rough paper for notes now,
and print it up nicely once your system is tested.  In the operators guide
you will record notes on information that the operator should include, or
check that it is included, each month.  Also in the guide you will include
a list of the activities and a list of resources. These will be ordered by
code, and if you wish, you could also order them alphabetically.

Description of Resources and Consumers:

The end result of cost accounting is to provide two pieces of information 1)
Itemized overhead costs, 2) costs of each final product produced.

To arrive at these figures it is necessary to consider the consumption of
resources by each stage of the production process or project as we will call
it.

The major types of resources fall in to 1) materials, 2) labour, 3) equipment.
In Cost Calculation these are the concept behind 1) Stocks, 2) Labour Pools
and 3) Equipment.

Cost Calculation divides the Equipment in to two major class, 1) those
equipment whose Operating Hours (OHR) will be billed to the cost of a final
product (Equipment) and 2) those equipment whose costs will be part of the
overhead costs (Indirect Equipment).  Where as the Equipment costs are
itemized by Cost Calculation according to the piece of equipment, the costs
of the Indirect Equipment are itemized according to the resource consumed.

To accomplish production or to finish a project there must be activity.
Activity has several characteristics 1) it consumes resources, 2) it some
times produces a measurable result and sometimes not, 3) it can be sub-divided
into smaller steps.

The work of modeling your business into a Cost Accounting system, involves
1) sub-dividing the work of your business into small steps called activities,
2) determining the measurable result of any steps that have a resulting
product, 3) determining the resources consumed by each step.

For each activity you will need to determine the resources (materials,
expenses, labor types, and equipment) that are consumed and any products that
are produced.   If a product is produced you will need to determine whether it
will be  1) A finished product, 2) An intermediate product.  Also you will
need to know if the quantity produced will be determined 1) upon its
consumption (if it is an intermediate product) or  2) at the point of
production (either intermediate or final products).

If there are any activities that require the entry of 'Total Production' on
a period basis these should be noted in the operators guide under 'Period
Routine Checkup'.

As you work through the activities keep a summary list of each of 1)
Equipment, 2) Labor types, 3) materials, and 4) other monetary expenses.
These lists will be very helpful to you in the next steps.

When sub-dividing your work into activities, remember that smaller steps
will provide more detailed accounts.  More detail is only helpful to a
certain point.  A good rule of thumb might be to take your yearly gross
expenses and divide by 10,000 for a small business or 40,000 for a large
business to estimate a good number of activities.

For each piece of equipment, or group of similar equipment, you should
determine the resources that will be consumed.

If there are any equipment in these groups that require the entry of 'Total
Production' on a period basis these should be noted in the operators guide
under 'Period Routine Checkup'.

Labor must first be divided into classes of laborers (such as hourly,
salaried, management etc.) according to your desire for accuracy.  Only one
rate will be calculated for use with all types of labor assigned to one
pool.  When you have determined what Labour pools you wish to define, assign
each class of laborer to one of the pools.

The Indirect Equipment must also be divided into classes.  Although the
specific costs of each equipment will be recorded by Cost Calculation, the
resulting report of overhead costs (of these equipment) will be subtotaled
according to the class's consumption to each resource.

The stocks are for storing items that will be used later.  Determine what
items you will need to store.  It will be helpful to divide them into logical
groups (eg. Building Materials,  Consumables,  Fuels,  Non-material).

What to do when it gets messy:

1) An activity uses the product of an other activity

This is easily handled by Cost Calculation.  Simply define the product of
the activity and define the same product as a resource consumed by the
other activity.

There is no problem at all with passing products down a chain of activities
as long as you wish it to be.

2) An equipment uses the product of an activity

Again, there is no problem here.  Simply define the product of the activity
and define the same product as a resource consumed by the equipment.

3) An equipment uses the product of an other equipment

Still, no problem.  Define the first equipment as a resource consumed by the
second equipment (along with all the other resources consumed by the second
equipment).

4) An Equipment's or activity's product should be stored.

When you are defining your stocks you should make note of this fact.  The
product of the Equipment or activity should be given one name (eq. Widgets
Produced ) and the item after being moved to the stock should be given a
second name (eg. Widgets from Stock).

Go over any existing definitions of resources consumed and determine that
this naming convention has been adhered to.

5) The thing to be stored is not a tangible object

No problem.  Cost Calculation is a computer program. It can't tell the
difference anyway!  Just give the thing a name.

6) A product is a final product, but will be stored before sale

Make the sale of products (or shipping as the case maybe) into an activity.
The activity that produces the final product should then produce a product
that is to be stored and later consumed by the activity called "Sale".


Things you have to fix:

1)  One of the resources consumed by a labor pool is an equipment or the
product of an activity.

You will need to reorganize your resources.  This product or equipment should
be consumed by the activities along with the labor from the labor pool. But,
not as part of the labor cost.

You will need to note this situation in the operators guide under 'Period
Routine Checkup' so that the operator can double check each period to be
sure that the proper vouchers have been entered.

2) Two differing activities produce the same product

There are two ways ahead,
1) redefine the two activities as one activity,
2) define a third activity that consumes only two resources, the product
of the one activity and the product of the other (each product should have
a different name at this point) and produces one product (with a third name).
example:
   activity 1
   'Acid Production Station' produces  'bulk acid frm Production Station'
   activity 2
   'Acid Recycle Station'  produces  'bulk acid frm Recycle Station'
   activity 3
   'Collection of Bulk Acid' produces 'bulk acid'
You will need to note this situation in the operators guide under 'Period
Routine Checkup' so that the operator can double check each period to be
sure that the proper vouchers have been entered.

Designing The Coding System:

You should NOT start to code until you have thoroughly completed the
description of your system.


NOTE: Any time you are asked to assign a resource code ("DDD") you must
also determine the unit that you will use.  This can be any convenient
three letter abreaviation.  This information will be stored by Cost
Calculation to remind you as you use the program.  In this way you will
avoid MANY confusions.


Now you have in front of you a detailed description of the consumption and
production of you business.  You are ready to design a code system.

Keep in mind the description of Cost Calculations code system.

The general code is:            AABB.CC.DDD.

Where the AABB.CC is the consumer and DDD is the resource consumed.

     Activities are:    VVVV.VV.DDD
     Equipment  are:    02DD.CC.DDD
     Labour pool is:    LLLL.LL.DDD
 Indirect Equipment:    03II.CC.DDD
     Material Stock:    MMMM.MM.DDD

     The "DDD" is always a resource that is consumed.

     An equipment always becomes a   resource  to  be consumed by replacing
the  "DDD"  by "2CC" where "CC" is taken from that equipment's  (or  indirect
equipment's) defined code.

     "VVVV.VV",  "LLLL.LL", or "MMMM.MM" may not be any code that begins with
"02" or "03". (e.g. 0211.11 is an invalid activity code).

     No "VVVV.VV", "LLLL.LL", or "MMMM.MM" may be replaced by a similar code.
(e.g.  if  there  is an activity 1100.10 then it is wrong to define either  a
stock or a labour pool as 1100.10);

REMEMBER: that you have a total of 28 unique first digits (of the "DDD") to
work with.  That is more than enough if you use them well.  The master report
will be organized (with in each consumer's report) according to these first
digits.

Start with the equipment, and indirect equipment together.  Each one must be
assigned a unique two digit alpha-numeric code (eg. 12  A1  5C).  This code
is the primary index to the equipment and will replace the "CC" in the
general code.

When assigning the codes, try to use the first digit as a group indicator
and the second as a particular equipment.  This will help later in the
analysis of data.
example:
   21    Toyota Pickup
   22    Mitsubishi Pickup
   31    Honda Power Saw
   32    Brand X Power Saw

Every where that each of these equipment appears on the other lists
(activities etc. ) as a resource, you should write the code "2" followed by
the two digit code for that piece of equipment.  No other resources may use
a "2" as the first digit.

The Labor Pools could be done next.  Each labor type on your list of labor
types should be assigned a three digit code.  This is a resource code, i.e.
"DDD" in the general coding system.

It is usually best to use the first digit as a code to indicate all labor
types.  The second digit could be used either to indicate the labor pool
to which this labor is assigned, or a similar type of labor but from a
different pool.  The third digit can be used to indicate the particular
labor type.
example:
    All Labor         1
    Hourly Pool         1
    Salaried Pool       2
    Management Pool     3
    Day Labor             1
    Permanent Gen.        2
    Office Gen.           3
    Secretarial           4
    Skilled               5

Every where that these labor types appear as resources consumed, you should
write that labor type's unique code.

It would be good to do the stocks now.  If you have made good notes while
describing you business, this will go quite easily.

If you have not already done so, divide your stocks into logical groups as
suggested above.  Each item must appear only once.  It is a good idea to
use the first digit of the resource code to indicate the stock group.
The second digit can be used to indicate differing qualities of a resource
and/or the difference between a resource produced and a resource stored.

Example:
fuels and Lubricants      4
gasoline                    10
bronze gasoline             11
10/30 oil                   20
10/40 oil                   21
Grains and feeds          5
Wheat grown                 10
Wheat in Granary            11
Wheat hauled to elevator    12

Every where that these items appear as resources consumed you should write
the unique resource code.

Finally we come to the list of monetary expenses.  Group these into general
categories and assign each a unique resource code.  Use only as many unique
first digits are are needed.

Now we are ready to begin coding the activities.  This entails two general
stages 1) assignment of "resource" codes to various summary and informative
data types, 2) assignment of codes to the activities.

First we will need codes for the summary data such as 'Total Production' and
'Total Consumption' used by Cost Calculation (eg. 700 and 701).

At this point you should give some thought to any other information that you
may wish to store on a month by month basis.  This can be very useful later
on during analysis.
example:
    Temperatures (high, low, average etc.)                     A00 - A05
    Rain Fall                                                  A10 - A15
    Absenteeism rates                                          A20 - A2D
    Days Worked  (for work that depends on the weather maybe)  A30
    Foot Ball Scores   (ie. worker moral!)                     A40 - A4F

Any of these types of entry should be fully documented in the operators
guide under 'Period Routine Checkup'.  Be sure to make a note of EACH
unique NINE digit combination that is to be entered.

While this is still all clear in your mind, take a few minutes to decide
how you would like these resource codes arranged in columns on the master
report.  There are seven columns and a potential of four different first
digits assigned to each column.

Write this column information in the operators guide.

Now for the final stage: assigning the activity codes.

Review the general code system above.

First give a six digit code to each of the labor pools (LLLL.LL).  It is
best to use as simple a code as possible. Only one digit should differ to
indicate each labor pool.

Second do the same for the stocks (MMMM.MM).  Make each broad category of
items a separate stock.  Use as simple a code as possible.  Only one digit
should differ to indicate each stock group.

It is often a good practice to use the first digit to indicate the Labor
Pools, Stocks, Equipment (pre-defined by cost Calculation), or activity.
Example:
     Equipment                   0     ->
        Direct                     2   ->  Pre-Defined
        Indirect                   3   ->
     Labor                       1
        Hourly Pool                1  \
        Salaried Pool              2   | Second of six digits the same
        Managers Pool              3   | as the first digit of "DDD".
     Stock                       2     |
        fuels & lubricants         4   | Parallelism makes the system neater!
        grains and feeds           5   /
     Activities - Intermediate   3
                - Final          4
                - Over head      5

Continue to classify and sub-classify your activities. There is lots of
room to work with -- 6 digits. And, don't forget you can use letters as well
as numbers.

When you are done check the codes over to make certain that they are unique.
If you have only 20 or 30 activities this will be quite simple.  However,
if you have 1000 activities use a sort utility on a computer to help you.
The DOS sort utility will work well because it does not throw out matches.
If you use the code and the description of each activity in your sort
it will be much easier to see what offenders there are and to adjust your
code system based on the computer out put.

Take the sorted list of Activities and Codes and add them to the operators
guide under 'Activities sorted by Code'.  Don't forget to include the codes
for Labor pools and Stocks as well.

Cost Calculation will help you produce a list of "DDD" resource codes
through  its dictionary facilities.  So wait until you have entered the
data into Cost  Calculation's initialization and then produce a sorted
list of resource codes.



************   INSTALLING COST CALCULATION ON YOUR HARD DISK   ***************



1)    "Cost Calculation" must be run from a hard  disk  equipped  system.  To
help with installation your distribution disk comes with  an  INSTAL.BAT file.
With the master disk in drive A:, and at the A> prompt type "INSTAL <Y".

2)  To start Cost Calculation you must be  on  drive  C: (ie. DOS prompt C> )
use  the  DOS  ChangeDir  command  "CD COST <Y".  Then  call the program with
"COST <Y".     *** Cost Calculation 2.1 CAN be run from a batch file ***

3)     Press  "y"  or  "Y"  to  consent  to  our  copy  rights  (as  found on
our registration of a user form) or the "Esc" key to quit.

4)  Having consented to our rights, you are presented with the main menu.






*****************************  TITLE PAGE  ******************************** 



When you start the program you will see a page that looks like this:

--------------------------------------------------------------------
            
                       C O S T    C A L C U L A T I O N 

        To register contact your Distributor:

   This is NOT a Public Domain program
       Distributed for TRAIL USE


    (c) Mid-East Applied Business Technology (Canada) Ltd


Version 2.1.D                                     by Kenneth Betts

Press 'y' to consent to our copy rights.  Esc to quit.
--------------------------------------------------------------------
  





**************************   MAIN MENU  **********************************


If you Press 'y' or 'Y'from the title page you will see the main menu:

----------------------------------------------------------------------

(c) MEABT                          Period ??                 Ver 2.1.D


                               MAIN MENU

                        1. Initialization
                        2. Vouchers
                        3. Distribution of Material Stocks
                        4. Utilities
                        6. End Work Session

                     Enter Your Selection [  ]

-----------------------------------------------------------------------




***************************   INITIALIZATION  *******************************

                                    
Cost Calculation requires that initialization take  place before you can use
the program effectively.  This initialization call all be edited later, EXCEPT
FOR THE CODES. Choosing the appropriate codes is MOST important.

In the center of the top line you will see "??".   When you have been working 
for  a  few months,  you will have developed a set of files for  each  month.
As  often happens,  you will likely be called on from time to time to  review
and/or correct files from your library of backup diskettes.

So  that  there is little chance of you becoming confused about which set  of
files  you  are currently operating on,   a two digit  code  representing the
month  of the files is displayed at the top of your screen.(for more  details
see  Vouchers)

But you have not yet begun, so "??" is displayed.

The  first,  and  most  important,  step is for you to  initialize  the  cost
coding system.

Initialization can be done in the following areas:
    Activities,  Equipment, Indirectly Charged Equipment, Labour Pool, Stores, 
Reports, the Costing Code Directory, and the List of Accounts.

The Initialization Menu looks like this:

----------------------------------------------------------------------------

(c) MEABT                         Period ??                       Ver. 2.1.D

                           Initialization Menu

                      1. Activity
                      2. Equipment
                      3. Indirect Charged Equipment
                      4. Labour
                      5. Material Stocks
                      6. Sub-total Groupings
                      7. Cost Code Directory

                         Enter Your Selection [  ]

-----------------------------------------------------------------------------







****************************   ACTIVITIES  ********************************







********  DEFINING  **********

Definition of an Activity:
   An activity is the most generalized form of a resource consumer and/or
resource producer.  In an activity no assumptions are made.  You have maximum 
flexibility in choosing methods of calculation of unit costs and description 
of resources consumed.


******** INITIALIZATION ***********

From the Initialization menu  select 1. Activity.
The Screen will look like this:

-----------------------------------------------------------------------------
(c) MEABT                         Period ??                       Ver. 2.1.D

                       Initialization of Activities

Activity Code           Description               Performance   Unit   Rate
 (6 digits)            (40 characters)             (N/C/P/B)           (C/P)
[    .  ]

-----------------------------------------------------------------------------

FIRST, you will be asked for an activity code.  If you do not understand the 
coding system, run through the Tutorial to get some idea of how it works.  
Enter  your  code .  Notice that since the '.' appears on the screen you need 
not enter it from the key board. 

SECOND, you will be asked for a description of this activity.  Notice  that  
since  the  brackets  were  not  filled   by the description, you needed to 
press enter. 

THIRD, you will be asked for the Performance.

It  is  possible  for  the  unit rate of the product of  an  activity  to  be
calculated  two  ways;  1) by the quantities that are consumed by  the  other
activities, and 2) by the quantity produced by the source and measured at the
source.   Cost Calculation allows a lot of freedom at this point.   You may 
specify which figures to calculate and print on the report; choosing from C  
or  P or B (both) or N (neither).  

FOURTH, you may select the Units.  The unit that you select (any three letter
code) will be a guide to you.  At any point that you are asked to enter a per 
unit rate  or a rate is displayed by Cost Calculation, this unit will also be 
displayed. 

FIFTH, you may select which rate  to be used in distribution of the cost 
among the consumers.   Normally, this is whether these units are to be consumed
or simply produced.   However, in some cases (e.g. a electric generator) the 
total units produced may be more readily known than the sum of units used by 
consumers .

You will be asked to review  the information you have entered.   If it is 
correct then enter /YES/ or  /<F10>/ else enter /NO<enter>/ or /<F9>/ to 
return and enter the  correct information. 

At this point Cost Calculation asks one more Questions:

***** Yes you are right.  This is an 'old' expression that the rest of the 
concept has grown out of.  Let's change it. 

Resources Produced :             Relative  Value:

Each resource that is a product of this activity must be assigned a "DDD".  
Other consumers will have access to these resources at the unit cost 
calculated by Cost Calculation.  Each of the five possible resources produced 
will be given a value proportional to the relative values of all the defined 
resources produced, and the consumption of each.

EXAMPLE:
A consumer adds, to a basic hand lotion, either "Natural", "Enchanted" 
or "Herbal" essences.  So, the consumer becomes a source of three differing
resources.                                        

Total Costs of this Consumer     :4,750  {from various sources}
Total Production by this Consumer:
       Resource  450    Rel. Value  1.5     Consumption    200 units
       Resource  451    Rel. Value  2.0     Consumption     50 units
       Resource  452    Rel. Value  2.5     Consumption     30 units 
Billed Value of Resources        :    
       200*1.5*y + 50*2.0*y + 30*2.5*y = 4,750
                                 475*y = 4,750
                                     y = 10

       Resource  450   Billed at 10*1.5 = 15
       Resource  451   Billed at 10*2.0 = 20
       Resource  452   Billed at 10*2.5 = 25

I hope that's better.
*****    

When you have no more products, enter /<enter>/ and /YES/ or /<F10>/.


Now  you  are ready to define the resources that will be  consumed  by  this
activity.

Enter a three digit code and the description.
An example of units might be:
   Labour  HRS (Hours)
   Fuel    LTR (Liters)
   Nails   BOX (Boxs)
   Wood    MSQ (Meters Square)
   Units   EA. (Each)
   Rent    $$  (Dollars)
When you have entered this correctly then enter /YES/ or /<F10>/ else
/NO<enter>/ or /<F9>/to return.

At  this point the built in resource dictionary will automatically enter this
resource code,  description and unit in its data file.  In the future it will
be sufficient to enter the resource code and Cost Calculation will prompt you
with the description and the unit.

To finish and exit, enter the code as /<enter>/.

To return to the main menu enter the activity code /<enter>/.



********** EDITING ACTIVITIES ************


The definition of an activity may be edited.  The code may not be changed.

To edit an activity,  chose Activity from the initialization menu.  Enter the
code  of  the activity that you wish to edit.   You will be asked  to confirm
your selection by entering /YES/.
You may change the Description,  Performance, Unit, and Rate for the activity
and the consumption and production codes.

You  may  then change the rates for the materials that define consumption  by
entering the "DDD" and then changing the rate.   The rates need not add up to
any particular sum; they simply express any convenient ratio.

Existing  materials will be presented to you for you to edit.   New materials
may  be added to the end of this list by entering the new "DDD" and the rate.
A total of five materials may be assigned as the product of any one activity.

Additional  costs may be added to the activity now.   Enter the proper "DDD",
the description,  and the unit.  End the list in the normal way.   Previously
defined costs will NOT be changed.







*****************************  EQUIPMENT  **********************************







******** DEFINING ***********

  Definition of Equipment:
  An Equipment is a specialized  form of a resource consumer and producer.  
In an Equipment a few assumptions are made.  All equipment are both consumers 
and producers.  The resource produced by an equipment is always operating 
hours, "OHR".  The cost of each OHR is calculated on the basis of the 
consumption of OHR by the other consumers.                                


******** INITIALIZING EQUIPMENT ********

From the initialization menu, select 2. Equipment.


The page will then look like this:

------------------------------------------------------------------------------
(c) MEABT                         Period ??                       Ver 2.1.D

                         Initialization of Equipment

Equipment Code        Description               Performance    Unit  Rate
 (4 digits)          (40 characters)
[02    ]                                         B           OHR    C


-----------------------------------------------------------------------------



Notice that the "AA" of the general code is replaced with a "02" to indicate 
directly charged equipment.  The "02" is already there for you.  In some 
versions the 02 is implied, but not shown.  

Also  since the "BB" of the general code is replaced by a two digit extension
of the "DDD" (resource code), you are not asked for this either.

Enter the rest of the code and the description.

The  equipment  is automatically  initialized  to  "B"  (both consumption  and  
production quantities) and the rate at which they  are billed  out  is by "C" 
(consumption) and the unit  is  "OHR"  (operating hours). 

You will then be asked for the code for  Total Consumption  and the code for 
Total Production.

Since equipment have a cost code extension enter total consumption code and 
the total production code. 

You will then be asked  if the entries are correct.  If not you may return 
and edit them again.  If they are correct then enter /YES/.

When you have finished all your equipment enter the code /<enter>/.  If you 
have more equipment at a later date, you may return here and add more.

You will now be asked for the Costs for ALL Equipment (the Code, Description, 
and Unit). Define the costs that are to be accepted to this set of equipment.

Enter the  code, description, and unit.  An example follows:

       00120   Labour            HRS
       00312   Fuel              LIT


To finish and exit, enter the code as /<enter>/.

To return to the main menu enter the activity code /<enter>/.


***********  EDITING EQUIPMENT  **********


The definition of an equipment may be edited.  The code may not be changed.

To  edit an equipment,  chose Equipment from the initialization menu.   Enter
the  code  of  the equipment that you wish to edit.   You  will  be  asked to
confirm your selection by entering /YES/.

You may change the description, Performance, Unit, and Rate for the equipment
and the consumption and production codes.

When  you have complete the editing of the specifications of any equipment to
be  edited additional costs may be added to the equipment.  Enter the  proper
"DDD",  the  description,  and  the  unit.  End the list in the  normal  way.
Previously defined costs will NOT be changed.

Since most equipment have very similar costs, Cost Calculation is designed to
save most of the entry time that would be required to enter the same cost for
each equipment.   You may initialize any number of pieces of equipment at one
time.    Only  after you have defined a group of equipment codes will  you be
asked for the "DDD" codes.  These codes will be applied to the entire list of
equipment.







********************** INDIRECTLY CHARGED EQUIPMENT  ************************






******** DEFINING ********

  Definition of Indirectly Charged Equipment:
  An Indirectly Charged equipment is a specialized  form of an equipment.  
In an indirectly charged equipment a few assumptions are made.  All 
indirectly charged equipment are consumers ONLY.  Normally these are  
general utility equipment for which it would be impractical to maintain 
billing procedures.  Here emphasis is placed more heavily on the type of 
resource consumed than on the individual equipment.

The Indirectly Charged Equipment differ from all other consumers in the 
way they are organized for reporting purposes in that they are grouped    
into classes.

********* INITIALIZATION ********

When you choose the third choice from the Initialization menu you will be 
shown the following page:

-------------------------------------------------------------------------

(c) MEABT                    Period ??                        Ver. 2.1.D

              Initialization of Indirectly Charged Equipment

Cost Code                  Description
(4 digits)                (40 Characters)
[    ]

------------------------------------------------------------------------
Where  as  all  other  items  have  a  two  part  code,   indirectly  
charged equipment has a three part code (recall the coding system 
description). 

Indirectly charged equipment are grouped in classes.  The consumption of a
resource by all the equipment in each class will be treated in the same way 
as the consumption of resources by any other consumer.  The class is 
considered to be the consumer rather than the individual equipment.      

Enter the code and the description.

You will then be asked for the Equipment Included, the Code, and Description.
                                                         
Enter the equipment. eg:

       20   Datsun

You will then be asked for the costs included... the Code  and the Unit.
 eg:
       120  HRS
       312  LIT

To finish and exit, enter the code as /<enter>/.
To return to the main menu enter the activity code /<enter>/.


****** EDITING INDIRECTLY CHARGED EQUIPMENT ******


Additional  costs  and/or  equipment may be added to the  indirectly  charged
equipment.  Enter the code for the class of indirectly charged equipment.

Enter  the "CC"  and the description of the equipment to be added to the list
of equipment in this category.  End the list in the normal way.

Enter  the  "DDD"  and the unit of the costs to be accepted for  these  newly
added equipment. End the list in the normal way.

Previously defined costs for previously defined equipment will NOT be changed.

Cost  Calculation will accept up to 100 indirectly charged equipment in  each
class. Up to 40 cost codes may be entered for these equipment.







*****************************  LABOUR  POOL  ********************************





********** DEFINING ************

  Definition of Labour Pool:
  A Labour Pool is a specialized  form of a resource consumer and producer.  
In an Labour Pool a few assumptions are made.  All Labour Pools are both 
consumers and producers.  The resource produced by a Labour Pool is always 
man hours, "MHR".  These man hours are divided into classes.  Each pool 
includes a number of these classes.  The cost of each MHR is calculated on 
the basis of the consumption of MHR by the other consumers.  In contrast to 
the activity all resources produced by the same labour pool (classes of MHR) 
are billed at the same rate.  Each Labour Pool has its own rate.  

A Labour Pool may not be a consumer of the product of an other consumer.  The
resources consumed by the Labour Pool should have an immediately available 
cash value.

********* INITIALIZATION *******

Most businesses need a labour pool.  Each labour pool may include several 
classes of labour.  Each class will be accounted separately by Cost 
Calculation.  But the same billing rate will be used for all classes of 
labour with in each pool.

Some examples are given below:  EG:
 
5000.00   Hourly Laborers

Included classes :  120  Fruit Pickers
		    121  Packers
		    122  General & Temporary
	 
5001.00   Salaried Laborers     

Included classes :  130  Farm Hands
		    131  Tree Dressers
		    132  General Salaried

5002.00   Clerical Workers

Included classes :  140  Office Staff


When you request item four from the Initialization menu, you will see the 
following screen:

--------------------------------------------------------------------------

(c) MEABT                        Period ??                     Ver. 2.1.D

                       Initialization of Labour Pool

Labour Pool Code                 Description
 (6 digits)                     (40 characters)

---------------------------------------------------------------------------

Enter the Code and the Description.  You will then be asked the Code for Total 
Consumption:

After this it will ask you for the Labour classes, code and Description.  The
labour class can be considered the product of the Labour Pool.

EG:
Labour classes        120    Skilled Labour

You will then be asked for the Costs to be accepted for this Labour Pool, 
Code and description.

To finish and exit, enter the code as /<enter>/.
To return to the main menu enter the activity code /<enter>/.

******** EDITING THE LABOUR POOL ********

The definition of a labour pool may be edited.  The code may not be changed.

To edit a labour pool, chose "Labour" from the initialization menu. Enter the
code.  You will be asked to confirm your selection by entering /YES/.

You  may change the description,  for the labour pool and the consumption and
production codes.

You  will be presented with the existing defined labour classes.  Any changes
to  these will over write (and cause the loss of) previously defined  classes.
New labour classes may be added to the end of this list by entering  the  new
"DDD" . If you do not wish to change this information, then skip this section
by pressing "enter".

Labour  pool  costs may be edited now.   Again,  you will  be  presented with
the  existing  defined costs.   These may be over written or accepted  and new
costs  added to the end of the list.  Enter the proper nine digit codes,  the
description, and the unit. End the list in the normal way.

Cost Calculation remembers up to 10 costs for the labour pool.  The number of
labour classes supported in each pool is 15.





******************************   STOCKS   ***********************************





********** DEFINING ************

The stocks can best be thought of as storage of costs. We may therefore store
even non-material items such advertising expenses or prepaid royalties.

The stocks themselves are a consumer of resources and may also be a source of
resources  to be consumed.  (The costs of operating the physical plant called
The Stocks is not intended here.  This consumption of  resources should be an
activity).

********** INITIALIZATION *************

When you choose number five from the Initialization Menu you will see the 
following screen:

------------------------------------------------------------------------------
(c) MEABT                         Period ??                      Ver. 2.1.D

                         Initialization of Stocks

Stock Code                 Description                Unit    Type
(9 digits)              (40 characters)                      (M/A/F)


Enter the code and the Description.

If you  wish to have these items removed from the stocks automatically when
consumed  by  an activity or equipment then mark them  /A/ for Auto.   Some
examples are:

    4000.310   Nails      BOX     A     <enter>
    4000.311   Wood       MSQ     A     <enter>
    4000.312   Fuel       LIT     A     <enter>

There are three basic distribution functions; Manual, Auto, and Fixed.  Those
stocks marked as Manual can only be distributed by use of the Distribution of
Material Stocks facility from the Main Menu.  The Auto distributed stocks may
be  distributed  by the Distribution of Material Stocks or by  voucher.   The
Fixed  distribution stocks are first distributed according to  any  vouchers,
secondly  by the Distribution of Material Stocks,  and thirdly the  remaining
stock is distributed according to a fixed list of percentages.

When  a stock is marked as Fixed distribution,  then you will be requested to
enter a list of consumer codes and the corresponding percentages.

It  is often the case that a stock may consume a resource directly from third
party  sources some times and from an internal production source  at  others.
This  difference  is  marked by the entry of a "0" in the rate  area  of  the
appropriate  voucher.   eg.   4000.00.312   Rate:0    Total:0  indicates that
the source of the "312" should be an activity with in the system.

A little thought here will indicate a possible conflict.   Room for confusion
exists  here in distinguishing the "312" that is headed toward the Stock from
internal  and external sources,  and the "312" that is leaving the stock  for
internal and external consumers.

This  is clarified by the introduction into the Stocks of a distinct code  to
represent the material when it is a product of an activity.

Because product consumed by the stocks may be the product of an activity, the
cost and the quantity of the product on hand will not be known until some way
through  the  calculation.   In such a case the Fixed distribution of  such a
stock is delayed until the quantity and cost are known.
                                                    
You will then be asked for the cost code for the Internal Source.  If you have 
no internal sources of stocks leave this space blank with /<enter>/. 

If you mark a stock for fixed distribution, you will then be asked for the 
Distribution Pattern.   You need to fill in the Six Digit code, and the 
Percent.  An example follows:

    1120.00    10%
    1220.01     7% 
    1220.02    27%

It is not necessary for the list to total 100%.  

To finish and exit, enter the code as /<enter>/.

To return to the main menu enter the activity code /<enter>/.


******* EDITING STORES *******

To edit a stock, chose "Material Stocks" from the initialization menu.  Enter
the  code of the stock that you wish to edit.   You will be asked  to confirm
your selection by entering /YES/.

You may change the description, the unit and the distribution function.

When editing the distribution list of a fixed distribution stock, you will be
presented  with  the  existing defined distribution list  for  editing.   New
consumers may be added to the end of the list.







***************************  REPORTS   ************************************



****** DEFINING ****


We must describe to "Cost Calculation" how we want the columns laid out in the 
report to produce sub-totals of resources. 

********** INITIALIZATION *************

Select Sub-total Groupings from the menu.

The Screen will appear as follows:
------------------------------------------------------------------------------
(c) MEABT                         Period ??                        Ver. 2.1.D

                          Initialization of Subtotals

                           Description                 Totals   Codes
                                                       (Y/N)
Group 1 :   [          ]   [               ]                      00's
                                                                  00's
                                                                  00's
                                                                  00's
------------------------------------------------------------------------------

For Group one (column one) enter the description in the first bracket..   
(leave  the second bracket empty by /<enter>/).  If you want this column 
totaled for a total of all types of the item enter /Y/. 

If your labour types occupy the one hundreds, enter /1<enter><enter><enter>
<enter>/ to place all,  and only, the resources whose  codes are  represented
by "1DD" in the first column.

Review your entries. Enter /YES/.

And Example of your entries might be:
        Bracket 1      Bracket 2
       Equipment                      Y   2,,,,    {codes in the 200's}
       Materials                      Y   3,,,,    {codes in the 300's}
       Products                       Y   4,,,,    {codes in the 400's}
       Other           Expenses       Y   5,,,,    {codes in the 500's}
       Quantities                     N   7,,,,    {codes in the 700's}
       Others                         N   6,8,9,0, {all other codes}

You are returned to the Main Menu at the end.

********** EDITING THE REPORT *************

To edit the report column headings and/or the distribution of costs among the
columns, select 6. Sub-Total Groupings from the initialization menu.

The existing contents and values may be retained by just pressing enter.   To
make a change just enter the new contents over the old.

*********** MAKING THE REPORT ***********

From the main menu select 4. Period End Reporting.

The screen will look like this:
--------------------------------------------------------------------------
(c) MEABT                       Period ??                      Ver. 2.1.D

                              Report Menu

                            1.  Calculate

                            2.  Print Report

                            3.  Utilities


                        Enter Your Selection  [  ]

---------------------------------------------------------------------------

From  the  report menu,  select 1.  Calculate, to calculate and then post  the
vouchers that were entered with a zero rate.

First the labour rate will be calculated.  Then Cost Calculation will enter a
loop of four steps,  Posting,  Calculation of Equipment Costs, Calculation of
Activities  and Distribution of Stocks .   When all the  outstanding vouchers
have been posted, the indirectly charged equipment will be calculated.

Now you may produce a complete report of costs.  Select 2. Print Report.

Here  you may enter any DOS file name to save the report or you may enter 
/PRN/ to write directly to the printer.  We suggest that you save your reports 
in a file on the computers disk.  Enter the file name /first.txt/. 

You will be returned to the Report Menu when the report is finished.

Finally, we want to print out a copy of the report on the printer.

If you  should now see "C:\>_" on your screen,  the DOS prompt.   There  are 
two main ways of proceeding from here: 
 1) if you have a DOS "print" facility
    - enter /print cost\first.txt<enter>/
 2) else
    - enter /copy cost\first.txt prn<enter>/

Do not turn off the computer until the report is finished.

Notice how much  information is displayed and how easy it is to understand in 
this form. 

If you request the Utilities menu, you will see the same utilities menu that 
is discussed below under the topic "Utilities."





*************************   THE COST CODE DIRECTORY   **********************



The  Cost  Code  Directory service provides  two  maintenance  functions:  1)
editing of dictionary entries, and 2) a print out of the current directory.

Lets print out a list of our cost codes. Select 7. Cost Code Directory.  skip
the  editing facilities by /<enter>/.   When prompted to print out a listing,
turn on your printer and press /y/.

The list is in order of the "DDD" code.

When the list is finished,return to the Main Menu by pressing /<enter>/.




*********************** THE LIST OF ACCOUNTS *********************************



If you  have made changes to the coding system/structure of the  accounts
"Cost Calculation" suggests that you print out a full listing of the accounts
data base.

Turn on your printer and then enter /Y/.

Take  some time to examine the listing.   Notice that all the  activities and
equipments are listed giving all the information we entered for them.

After  the  structure description,  is a full list off all the cost  accounts
that we created.




******************************** VOUCHERS **********************************


THIS IS WHERE YOU BEGIN OPERATION! 

***** DEFINING **********
  The entry of vouchers for the consumptions, expenses and transactions of 
the period,  and the posting of these vouchers.

The entry of the vouchers describes to Cost Calculation the flow of resources
from source to consumer.

The voucher consists of five parts:
     a nine digit code   ->   consumer and resource
     voucher number      ->   cross reference and sequencing
     quantity            ->   number of units {where 0 indicates a deleted
                              voucher}
     rate                ->   per unit cost {where 0 indicates a rate to be
                              calculated by Cost Calculation ie. internal
                              source}
     total               ->   total monetary value

The Voucher Menu is as follows:
------------------------------------------------------------------------------
(c) MEABT                      Period ??                      Ver.2.1.D
  
                            Voucher Menu

                            1. Append

                            2. Edit

                            3. Post


                   Enter your selection [  ]
------------------------------------------------------------------------------


******* APPEND *********

Select 1. Append by /1/.

You will see a screen as follows:
-----------------------------------------------------------------------------
(c) MEABT                      Period ??                          Ver 2.1.D

                          Appending Vouchers

           Code            Description               Unit

----------------------------------------------------------------------------

Enter the Code of the Voucher.  Recall the activity's code (XXXX.XX) and the 
resource  (DDD) code.  Therefore the first vouchers code will be XXXX.XX.DDD. 
Enter this as /XXXXXXXXX/. {remember that you don't enter the dots because 
they are already on the screen.} 

Notice that the description and the unit are displayed on the screen so  that
you will be assured that you have entered the right code.

The reference code consists of two parts.  The first part should be the month
or  period  and the second should be the same as the voucher numbers  used by
your accounting office.   If this is your first month enter /01/.   It will 
then become voucher 01.XXXX.  More than one voucher may have the same 
reference.  

Enter the quantity of units as advised by your accounting department's 
voucher, engineer's report or supervisor etc.

If you do not know the cost of each unit then you  need  to tell Cost 
Calculation that you do not yet know the cost  of  each unit.   Cost 
Calculation should determine a cost.  To do this, enter the rate as 
/0<enter>/.  Notice that the total is entered for you. 

Your next voucher may be for different code (eg.  0200.10.312).  If this
is from  the same voucher enter /<enter><enter>/.   Enter the quantity. If 
it was purchased separately,  rather than taken from the  stock,  the 
voucher gives the total cost of the purchase.   Press /<enter>/ to  skip over 
the  rate  and then enter the total units.   Notice that the  rate is 
calculated for you. 

Some Examples of vouchers :
     Code           Voucher    Quantity        Rate     Total
     3000.00.500    01.0002    145             1
     3000.00.501    01.0003    35              1
     1000.00.310    01.0004    9               0
     4000.00.312    01.0005    312             0.65
     4000.00.311    01.0006    110                      1600
     4000.00.310    01.0006    12                       9
     1000.00.120    01.0007    275             0
     5000.00.502    01.0008    800             1
     5000.00.350    01.0008    35              1
     1000.00.311    01.0009    100             0
     2000.00.310    01.0009    1               0
     0300.20.312    01.0010    40              0
     0300.20.120    01.0010    10              0
     0200.10.120    01.0011    15              0
     0200.10.312    01.0011    72              0
     2000.00.210    01.0012    45              0
     3000.00.120    01.0012    160             0


Notice  that before returning to the menu you are given the option to print a
verification list by  entering /Y/.

When the list is finished you will be returned to the menu.

NOTICE that the period at the top of your screen will now change.. 

******** EDITING VOUCHERS ********

If any of your vouchers were wrong you will need to edit them.  Select "2. 
Edit" from the menu. 

The screen looks much the same as above, except it is now in the editing mode. 

Example of an edit session :
  
You entered:      Code  1000.00.120   Ref. 01.0007  Quan.  275  Rate  0 
It should be:     Code  1000.00.120   Ref. 01.0007  Quan.  255  Rate  0 

Enter the code /1000000120/.

You are presented with three options:
          Y -> edit this voucher
          N -> wrong code, let me try a new code
          S -> show me the next voucher with the same code

Enter /Y/.  Now you are present with two options:
          D -> make this a deleted voucher.
          C -> Change the contents of this voucher.
Enter /C/.
Ref.  /010007/. Quantity /255/.  Rate /0/.

You are then asked if you want to Print a Verification List.
You are then returned to the vouchers menu.


********* POST ************


There are four steps to this process; and they happen automatically:
   - Preparing the Accounts
   - Zeroing Current Balances
   - Posting the Vouchers
   - Distribution of Material Stocks
When this is done you will be returned to the Vouchers Menu.





*********************  DISTRIBUTION OF STOCKS ****************************** 


******** DEFINING *********

Although stocks may all be listed as automatic distribution;  that is you 
entered vouchers to represent the consumption of the stocks by each activity 
and equipment, there may be a difference in Cost Calculations estimate of the 
store of things like fuel and the stock volumes advise you receive at the end 
of a period. 

Since this value is no longer in the stocks it should be distributed to 
appropriate consumers.

From the main menu, select 3. Distribution of Material Stocks.

The screen will appear with the same option as the Voucher menu:
                          
                          1. Append
                          2. Edit
                          3. Post

******* APPEND **********.

Enter  the  full stock code.  Notice that the  description  and  unit are 
displayed for you. If you have the correct account the enter /y/ else /n/ 
and enter it again. 

The current quantity, average rate to date, and the total value are displayed
for  you.  Now enter the final balance (in units) reported from the inventory 
check.  The amount you are to distribute will be displayed.

Now you  must decide where to distribute the cost of the units, in this case  
liters of  fuel. Perhaps is should be distributed between two of the 
vehicles, 70% and 30%.. 

If so, then enter the code for fuel consumed by the first vehicle. Confirm 
that this is  the right account.  The reference number will be shown.  (Using 
"A"  will later remind you that this is a stock "A"djustment.) Enter the  
percent  as /70<enter>/.    Notice  that  the Remaining  percent  is  
calculated  by Cost Calculation.  Confirm that this is correct. 

Enter  the  code for fuel consumed by the second vehicle. Give  it a reference 
of (01.A002), and a quantity of 30 %. 

To return,  enter the code as /<enter>/, as always. Do it again to return to  
the menu.   

If you want to print the Verification list then answer 'y'.   

Notice that the percentages on the list have been converted to liters. 

******* POST ******
Select 3.  Post.  The operation is automatic.

Return to the Main menu.




*************************** UTILITIES *************************************

If you select number Number 5 from the main Menu, a Utility Menu appears as 
follows:
-------------------------------------------------------------------------
(c) MEABT                   Period ??                          Ver. 2.1.D

                         Utilities Menu

                       1. Edit Accounts

                       2. Sort Accounts

                       3. List Cost Details

                       4. List all Cost Details

                       5. Cost Code Directory


                     Enter Your Selection [  ]

-----------------------------------------------------------------------------

********* EDIT ACCOUNTS ******** 

This facility allows you to change:
  - a Description
  - the unit
  - the current balances in the account
  - the accumulative balances in the account

Each type of account is entered according to its own type of code:
   [xxxx.xx.   ]   activity totals
   [xxxx.xx.   ]   labour totals
   [02  .xx.   ]   equipment totals
   [03  .xx.   ]   indirectly charged equipment totals
   [xxxx.xx.xxx]   stock detail
   [xxxx.xx.xxx]   cost detail

To accept the previous value simply enter /<enter>/.   For cost  details, the
rate  is  calculated by Cost Calculation if you skip the rate and  enter  the
total.

************** SORT ACCOUNTS **********

This  facility  is  used to order cost details on the reports so  that  those
costs  that occupy the first column are all printed first,  the second column
are  printed  second and so on.   At the same time  the  sort  eliminates any
unneeded records in the file 'ninecode.dat'.

********* LIST COST DETAILS **********

As each voucher,  and manual stock distribution, is posted the transaction is
recorded  in  the  file 'transact.dat'.   This file has a  capacity  of about
655,000  transactions  (about 22 MB of data).  If you find that the  file  is
getting too large or it takes too long to list the cost details, you may copy
this  file to a diskette,  delete it from the hard disk and start  over.   In
this case it is important to save the file for later reference.

If  you  chose  "List All Cost Details" then all transactions  including  the
beginning  period and the ending period will be searched and then listed  for
you in order according to the voucher reference number.  The list is totaled.

If you chose "List Cost Details" you will have to specify the beginning and 
the ending period.

You will need to indicate to Cost Calculation the nine digit code that you 
wish to have searched.  You may search for a range of codes by using a search 
template made up of digits and spaces.

Examples:  pattern  3   .  .120
           matches  3000.00.120
           matches  3100.99.120

The  list that is produced may be saved into a file by entering any valid DOS
file  name,  or  sent to the printer by entering "prn" or to  the  screen  by
entering "con".




**************************** THE CONTROL SYSTEM ****************************



There  is  a built in control system in Cost Calculation.    Cost Calculation
knows  the  proper  order in which to enter and/or change  data  and  produce
reports.  As  you  progress  through the periods work Cost  Calculation  will
monitor  your  progress  and  give you a warning if it seems  that  you  have
forgotten something.

There are two possible responses to these warnings:
  /r/ -> I understand the situation and I wish to continue
  /q/ -> I do not wish to continue in this situation

It  may some times happen that Cost Calculation will lose its place.  If this
happens,  continue  to the end of the period end report then Cost Calculation
will correct itself.

******************************* PRINTING **********************************

Cost Calculation allows you to print a number of Lists and Reports.
They are:
       1. Verification List for Vouchers
       2. Verification List for Manual Stock Distribution 
       3. Structure List
       4. Cost Details (Transaction Search)
       5. Directory of Cost Codes
       6. Master Report

When ever you are asked for a file name you may use and valid DOS file name 
or device (ie. CON  PRN  NUL).  There is no built in support for AUX or COM.

All print outs are designed to work on a wide variety of printer types.  

For best results, your printer should support ASCII 15 for condensed mode 
printing.

Because of the size of the Master Report, it is printed on 132 col. paper 
in condensed mode.  All other print outs will fit on 80 col. paper at 10 
char/inch.

You may find that you are getting a page of printing, followed by a page with 
only a few (1 to 5) lines of print.  Check the dip switch settings on you 
printer. The 'Skip Over Page Break' function should be turned off.  Cost 
Calculation handles its own paging. 



*********************** EDITING OF THE STRUCTURE **************************


Editing of the structure of the model (such as we created in our tutorial) is
done  through the initialization menu.   Edit mode is  automatically selected
when  an existing consumer's code is entered in any one of the initialization
screens;   activity,  equipment,  etc.  While  in  edit mode,  the  existing
definitions may be retained by simply pressing /<enter>/.



************************* TECHNICAL DATA ***********************************

*****File Contents*******

  CONTROL .DAT       Program flow data
  NINECODE.DAT       Detail cost totals
  ACTYCODE.DAT       Activity definition and totals
  EQIPCODE.DAT       Equipment definition and totals
  INDRCODE.DAT       Indirectly charged equipment definition and totals
  LABRCODE.DAT       Labour Pool definition and totals
  STOKCODE.DAT       Material Stock definition and totals
  COLUMN  .DAT       Ordering of columns data
  COSTCODE.DAT       Resource code dictionary
  VOUCHERS.DAT       This period's vouchers
  DISTRIB .DAT       This period's manual stock distributions
  NORATE  .DAT       Vouchers that require Cost Calculation to calculate rates
  *       .NDX       Index file to the DAT file of the same name
  *       .$$$       A temporary "scratch pad" file
  C000    .EXE       The main program file
  C000    .OVR       Overlay files for the main program
  COST    .BAT       Batch file to start the main program file


********* Codes *********

All  codes  (cost codes,  and reference codes,  etc.) may be either numbers 0
through 9 and/or letters.  Letters can only be used as capitals. This gives a
total possible of 2,176 million combinations.

The  number  of Activity, Labour Pool, and Stock codes permitted is virtually
unlimited (2,000 million total), provided the codes do not overlap.

The  number  of equipment and indirectly charged equipment supported is 1,296
each.

The report  column  heading  data will handle 4 sets of hundreds on each of 7
columns for a total of 2800 different "DDD" codes.

There may be a  total  of  2,000 million nine digit codes;  that is more than
any one will ever need.




************************  GETTING THE FULL PROGRAM *************************

                           Version 2.1

Version 2.1 is Public Domain.


                           Version 2.15


You have in your hands now, Cost Calculation Version 2.15.  This is a mini
version of the full program.

Complete printer error checking is not provided on version 2.15.

The following restraints affect the use of version 2.15:
    1) only 20 equipment may be initialized
    2) only 60 activities may be initialized
    3) only 400 vouchers may be processed in any one period
    4) only 10 consumers may be listed for each fixed distribution stock

These restrictions should not affect a small business.

As a Registered user of Cost Calculation 2.15 you receive the following
customer services:
  o  A copy of Cost Calculation Version 2.15 (Not copy protected)
  o  A copy of the full Manual on the disk
  o  Automatic notice of Updates etc.
  o  Access to the BBS help line and mail box.
  o  You will be supporting the concept that allowed you to receive Cost
     Calculation in the first place.  Only through User support can we
     continue to support and improve out products, and release other products
     we have already developed and are developing.
  o  A discount of $50.00 against the price of Version 2.2 if you wish to
     upgrade at a later date.


                             Version 2.2

To obtain Cost Calculation version 2.2 (with  none  of  the  above  mentioned
restrictions) contact your distributor, or the MEABT Office at:


             M.E.A.B.T.
             #48 Homewood Ave.,
             Hamilton Ontario
             Canada   L8P 2M2

```
{% endraw %}

## TUTOR.DOC

{% raw %}
```



     ********************************************************************
     *                                                                  *
     *                                                                  *
     *                 C O S T   C A L C U L A T I O N                  *
     *                                                                  *
     *                        T U T O R I A L                           *
     *                                                                  *
     *                                                                  *
     *                                                                  *
     *       (c) Mid-East Applied Business Technology (Canada) Ltd      *
     *                                                                  *
     *                           July  1989                             *
     *                                                                  *
     *        Version 2.15           by Kenneth Betts & Dan Gibson     *
     *                                                                  *
     ********************************************************************









CONTENTS:


Introduction

LESSON ONE..........Cost Calculation

            Cost Calculation Concept
            Code System                            
            Interpretation of Codes


LESSON TWO..........Starting Cost Calculation               

            Initializing the Coding system
            Activities                              
            Equipment                               
            Indirectly Charged Equipment            
            Labour Pool                             
            Stores                                  
            The Report                              
            The Cost Code Directory                 
            List of Accounts                        

LESSON THREE.........Vouchers

            Append                                 
            Edit                                   
            Post                                   

LESSON FOUR..........Distribution of Stores                  

LESSON FIVE..........Reports                              

LESSON SIX...........Utilities                               

            Edit Accounts                          
            Sort Accounts                          
            List Cost Details                      

LESSON SEVEN.........The Control System

LESSON EIGHT.........Editing of the Structure                

            Activities                             
            Equipment                              
            Indirectly Charged Equipment           
            Labour
            Stores & Stocks                                
            The Report                             


************************   COPYRIGHT NOTICE   *******************************


Mid-East  Applied   Business  Technology   (Canada)  Ltd.  fully  intends  to
vigorously prosecute any and ALL copyright violations.







*************************    DISCLAIMER    ***********************************


MEABT hereby disclaims all warranties relating to this software (Cost
Calculation Version 2.1x) whether expressed or implied, including without
limitation any implied warranties of merchantability or fitness for a
particular purpose.  MEABT will not be liable for any special, incidental,
consequential, indirect or similar damages due to loss of data or any other
reason, even if MEABT or any agent of MEABT has been advised of the
possibility of such damages.  In no event shall MEABT's liability for any
damages ever exceed the price paid for the license to use this software,
regardless of the form of the claim.  The person using the software bares
all risk as to the quality and performance of the software.

However, with proper application this software will perform as described.

Note:  In no case  is  our  liability  greater  than  replacement  of the
registered software or refund of your registration fee paid.






****************************  DISTRIBUTION  *********************************


Version 2.11 and 2.15 of this program may be copied and distributed provided  
that: 
1. NO changes are made in this program or manual. 
2. NO charges are made except minimal charges to cover the cost of the 
   diskette and shipping or handling up to $10
3. the copies are  used  by  the  registered owner OR are used for evaluation
   only.




******************************  REGISTRATION  ********************************


                           Version 2.1


Cost Calculation Version 2.1 is PUBLIC DOMAIN.


                           Version 2.15


Cost Calculation 2.15 is a mini version of the full program.

Complete printer error checking is not provided on version 2.15.

The following restraints affect the use of version 2.15:
    1) only 20 equipment may be initialized
    2) only 60 activities may be initialized
    3) only 400 vouchers may be processed in any one period
    4) only 10 consumers may be listed for each fixed distribution stock

Note:  These restrictions should not affect a small business.

You may register your Version 2.15 by sending your company name, address, and 
a cheque or money order for $50.00 to the MEABT address at the end of this 
manual. The registration fee will provide you with the following: 

  o  A copy of Cost Calculation Version 2.15 (Not copy protected)
  o  Automatic notice of Updates etc.
  o  Access to the BBS help line and mail box.
  o  You will be supporting the concept that allowed you to receive Cost
     Calculation in the first place.  Only through User support can we
     continue to support and improve out products, and release other products
     we have already developed and are developing.
  o  A discount of $50.00 against the price of Version 2.2 if you wish to
     upgrade at a later date.

Your comments as a registered user of the software  are  greatly  appreciated
and will help us to provide continuing useful product development.


                          Version 2.2
To obtain Cost Calculation version 2.2 (with  none  of  the  above  mentioned
restrictions) contact your distributor, or the MEABT Office at:


             M.E.A.B.T.
             #48 Homewood Ave.,
             Hamilton, Ontario
             Canada    L8P 2M2






Introduction:


By following the instructions in these lessons you will learn how to use
Cost Calculation.  Although the lessons don't cover every aspect of the
program, especially of Version 2.2, they will provide you with the
basics of:

o  Installing Cost Calculation on your Hard disk
o  Creating the files and codes for your work
o  Understanding the Cost Calculation Concept
o  How to enter information
o  Moving around the program
o  Producing Reports
o  Printing Reports

To get the most out of these lessons you should be familiar with your
computer, DOS, and the operations of your business.  You should also
understand the Cost Calculation concept, and how it applies to your
business.




LESSON ONE: 


                      The Cost Calculation Concept

Cost Calculation  thinks of everything in the terms of work stations.  Each 
place in your business where goods are consumed or changed is a work station.  
The office consumes paper, equipment, and labour.  The ordering and stocking 
facilities consume stocks.  These are then moved on to the different
manufacturing stages.  Each of these stages consume and change materials 
before going on to packaging and shipping.  

With Cost Calculation, each of these different work stations are called : 
'ACTIVITIES.'  

Cost Calculation will assist you in modeling your company's operations so 
that you can better track the costs of business and production in each of 
these Activities, and will help you compare the performance of the different 
activities with each other.  

In each of these Activities, materials are used, and value is added to them.  
For instance, in the construction industry, material is purchased, and each 
activity then assembles the materials.  The products produced have a higher 
value than the materials purchased due to the costs of labour, rent, office 
overheads, utilities. etc.

Cost Calculation is designed to calculate the following:
                 1. The value added to materials
                 2. The  unit  cost  of  production
                 3. The  cost  of  performing operations

In  doing this,  consideration must be taken of three basic resources 
consumed:
                1. Materials
                2. Labour 
                3. Equipment

Cost accounting with Cost Calculation depends upon the relationships of the 
following:
                1. Consumer of resources 
                2. Resources consumed



Consumer of Resources:

Each Activity consumes resources.  However, Cost Calculation looks at not only 
the Activities, but also at equipment which may be shared, etc.  So, in 
considering these things, keep in mind that Cost  Calculation  divides  
consumers into  five  basic  groups:  
               1.  Activities
               2.  Equipment  
               3.  Labour Pools  
               4.  Indirectly charged Equipment 
               5.  Material Stocks


Resources Consumed:
   Each of these consumers (except for Indirectly charged Equipment) may in 
   turn become a producer of a resource to be consumed. 
  
   An example of this is the purchasing of materials, which passes them on to 
the first production stage.  There some things are assembled, and passed on to 
the second stage where more assembled units are added.  Perhaps your business 
partially assembles different components, and then in one final assemble puts 
everything together.  

Cost Calculation considers each of these steps in allowing you to do cost 
calculation.


During an activity's editing session, any of the products may be removed from 
the list of Resources Produced by entering three space characters when Cost 
Calculation prompts you with the code of the product that you wish to remove. 

There is a command line switch that may be used -> /R.  When this is used Cost 
Calculation will take the existing data files and return them all to the empty 
state.  That is, all definitions and relationships will still exist, but there 
will be no values, quantities, or rates.  Mostly this is useful during the 
period of development of the coding system itself.  The other use of this 
switch is to produce a tested and working template that can be used on another 
set of data.  Thirdly (for me mostly) this is great for demonstrations; reset 
the program and then run the vouchers through again. 




                           The Code Sytem




***** Points on designing a code system/ modeling the business *****

You will need to make an operators guide.  Use rough paper for notes now,
and print it up nicely once your system is tested.  In the operators guide
you will record notes on information that the operator should include, or
check that it is included, each month.  Also in the guide you will include
a list of the activities and a list of resources. These will be ordered by
code, and if you wish, you could also order them alphabetically.

Description of Resources and Consumers:

The end result of cost accounting is to provide two pieces of information 1)
Itemized overhead costs, 2) costs of each final product produced.

To arrive at these figures it is necessary to consider the consumption of
resources by each stage of the production process or project as we will call
it.

The major types of resources fall in to 1) materials, 2) labour, 3) equipment.
In Cost Calculation these are the concept behind 1) Stocks, 2) Labour Pools
and 3) Equipment.

Cost Calculation divides the Equipment in to two major class, 1) those
equipment whose Operating Hours (OHR) will be billed to the cost of a final
product (Equipment) and 2) those equipment whose costs will be part of the
overhead costs (Indirect Equipment).  Where as the Equipment costs are
itemized by Cost Calculation according to the piece of equipment, the costs
of the Indirect Equipment are itemized according to the resource consumed.

To accomplish production or to finish a project there must be activity.
Activity has several characteristics 1) it consumes resources, 2) it some
times produces a measurable result and sometimes not, 3) it can be sub-divided
into smaller steps.

The work of modeling your business into a Cost Accounting system, involves
1) sub-dividing the work of your business into small steps called activities,
2) determining the measurable result of any steps that have a resulting
product, 3) determining the resources consumed by each step.

For each activity you will need to determine the resources (materials,
expenses, labor types, and equipment) that are consumed and any products that
are produced.   If a product is produced you will need to determine whether it
will be  1) A finished product, 2) An intermediate product.  Also you will
need to know if the quantity produced will be determined 1) upon its
consumption (if it is an intermediate product) or  2) at the point of
production (either intermediate or final products).

If there are any activities that require the entry of 'Total Production' on
a period basis these should be noted in the operators guide under 'Period
Routine Checkup'.

As you work through the activities keep a summary list of each of 1)
Equipment, 2) Labor types, 3) materials, and 4) other monetary expenses.
These lists will be very helpful to you in the next steps.

When sub-dividing your work into activities, remember that smaller steps
will provide more detailed accounts.  More detail is only helpful to a
certain point.  A good rule of thumb might be to take your yearly gross
expenses and divide by 10,000 for a small business or 40,000 for a large
business to estimate a good number of activities.

For each piece of equipment, or group of similar equipment, you should
determine the resources that will be consumed.

If there are any equipment in these groups that require the entry of 'Total
Production' on a period basis these should be noted in the operators guide
under 'Period Routine Checkup'.

Labor must first be divided into classes of laborers (such as hourly,
salaried, management etc.) according to your desire for accuracy.  Only one
rate will be calculated for use with all types of labor assigned to one
pool.  When you have determined what Labour pools you wish to define, assign
each class of laborer to one of the pools.

The Indirect Equipment must also be divided into classes.  Although the
specific costs of each equipment will be recorded by Cost Calculation, the
resulting report of overhead costs (of these equipment) will be subtotaled
according to the class's consumption to each resource.

The stocks are for storing items that will be used later.  Determine what
items you will need to store.  It will be helpful to divide them into logical
groups (eg. Building Materials,  Consumables,  Fuels,  Non-material).

What to do when it gets messy:

1) An activity uses the product of an other activity

This is easily handled by Cost Calculation.  Simply define the product of
the activity and define the same product as a resource consumed by the
other activity.

There is no problem at all with passing products down a chain of activities
as long as you wish it to be.

2) An equipment uses the product of an activity

Again, there is no problem here.  Simply define the product of the activity
and define the same product as a resource consumed by the equipment.

3) An equipment uses the product of an other equipment

Still, no problem.  Define the first equipment as a resource consumed by the
second equipment (along with all the other resources consumed by the second
equipment).

4) An Equipment's or activity's product should be stored.

When you are defining your stocks you should make note of this fact.  The
product of the Equipment or activity should be given one name (eq. Widgets
Produced ) and the item after being moved to the stock should be given a
second name (eg. Widgets from Stock).

Go over any existing definitions of resources consumed and determine that
this naming convention has been adhered to.

5) The thing to be stored is not a tangible object

No problem.  Cost Calculation is a computer program. It can't tell the
difference anyway!  Just give the thing a name.

6) A product is a final product, but will be stored before sale

Make the sale of products (or shipping as the case maybe) into an activity.
The activity that produces the final product should then produce a product
that is to be stored and later consumed by the activity called "Sale".


Things you have to fix:

1)  One of the resources consumed by a labor pool is an equipment or the
product of an activity.

You will need to reorganize your resources.  This product or equipment should
be consumed by the activities along with the labor from the labor pool. But,
not as part of the labor cost.

You will need to note this situation in the operators guide under 'Period
Routine Checkup' so that the operator can double check each period to be
sure that the proper vouchers have been entered.

2) Two differing activities produce the same product

There are two ways ahead,
1) redefine the two activities as one activity,
2) define a third activity that consumes only two resources, the product
of the one activity and the product of the other (each product should have
a different name at this point) and produces one product (with a third name).
example:
   activity 1
   'Acid Production Station' produces  'bulk acid frm Production Station'
   activity 2
   'Acid Recycle Station'  produces  'bulk acid frm Recycle Station'
   activity 3
   'Collection of Bulk Acid' produces 'bulk acid'
You will need to note this situation in the operators guide under 'Period
Routine Checkup' so that the operator can double check each period to be
sure that the proper vouchers have been entered.

Designing The Coding System:

You should NOT start to code until you have thoroughly completed the
description of your system.


NOTE: Any time you are asked to assign a resource code ("DDD") you must
also determine the unit that you will use.  This can be any convenient
three letter abreaviation.  This information will be stored by Cost
Calculation to remind you as you use the program.  In this way you will
avoid MANY confusions.


Now you have in front of you a detailed description of the consumption and
production of you business.  You are ready to design a code system.

Keep in mind the description of Cost Calculations code system.

The general code is:            AABB.CC.DDD.

Where the AABB.CC is the consumer and DDD is the resource consumed.

     Activities are:    VVVV.VV.DDD
     Equipment  are:    02DD.CC.DDD
     Labour pool is:    LLLL.LL.DDD
 Indirect Equipment:    03II.CC.DDD
     Material Stock:    MMMM.MM.DDD

     The "DDD" is always a resource that is consumed.

     An equipment always becomes a   resource  to  be consumed by replacing
the  "DDD"  by "2CC" where "CC" is taken from that equipment's  (or  indirect
equipment's) defined code.

     "VVVV.VV",  "LLLL.LL", or "MMMM.MM" may not be any code that begins with
"02" or "03". (e.g. 0211.11 is an invalid activity code).

     No "VVVV.VV", "LLLL.LL", or "MMMM.MM" may be replaced by a similar code.
(e.g.  if  there  is an activity 1100.10 then it is wrong to define either  a
stock or a labour pool as 1100.10);

REMEMBER: that you have a total of 28 unique first digits (of the "DDD") to
work with.  That is more than enough if you use them well.  The master report
will be organized (with in each consumer's report) according to these first
digits.

Start with the equipment, and indirect equipment together.  Each one must be
assigned a unique two digit alpha-numeric code (eg. 12  A1  5C).  This code
is the primary index to the equipment and will replace the "CC" in the
general code.

When assigning the codes, try to use the first digit as a group indicator
and the second as a particular equipment.  This will help later in the
analysis of data.
example:
   21    Toyota Pickup
   22    Mitsubishi Pickup
   31    Honda Power Saw
   32    Brand X Power Saw

Every where that each of these equipment appears on the other lists
(activities etc. ) as a resource, you should write the code "2" followed by
the two digit code for that piece of equipment.  No other resources may use
a "2" as the first digit.

The Labor Pools could be done next.  Each labor type on your list of labor
types should be assigned a three digit code.  This is a resource code, i.e.
"DDD" in the general coding system.

It is usually best to use the first digit as a code to indicate all labor
types.  The second digit could be used either to indicate the labor pool
to which this labor is assigned, or a similar type of labor but from a
different pool.  The third digit can be used to indicate the particular
labor type.
example:
    All Labor         1
    Hourly Pool         1
    Salaried Pool       2
    Management Pool     3
    Day Labor             1
    Permanent Gen.        2
    Office Gen.           3
    Secretarial           4
    Skilled               5

Every where that these labor types appear as resources consumed, you should
write that labor type's unique code.

It would be good to do the stocks now.  If you have made good notes while
describing you business, this will go quite easily.

If you have not already done so, divide your stocks into logical groups as
suggested above.  Each item must appear only once.  It is a good idea to
use the first digit of the resource code to indicate the stock group.
The second digit can be used to indicate differing qualities of a resource
and/or the difference between a resource produced and a resource stored.

Example:
fuels and Lubricants      4
gasoline                    10
bronze gasoline             11
10/30 oil                   20
10/40 oil                   21
Grains and feeds          5
Wheat grown                 10
Wheat in Granary            11
Wheat hauled to elevator    12

Every where that these items appear as resources consumed you should write
the unique resource code.

Finally we come to the list of monetary expenses.  Group these into general
categories and assign each a unique resource code.  Use only as many unique
first digits are are needed.

Now we are ready to begin coding the activities.  This entails two general
stages 1) assignment of "resource" codes to various summary and informative
data types, 2) assignment of codes to the activities.

First we will need codes for the summary data such as 'Total Production' and
'Total Consumption' used by Cost Calculation (eg. 700 and 701).

At this point you should give some thought to any other information that you
may wish to store on a month by month basis.  This can be very useful later
on during analysis.
example:
    Temperatures (high, low, average etc.)                     A00 - A05
    Rain Fall                                                  A10 - A15
    Absenteeism rates                                          A20 - A2D
    Days Worked  (for work that depends on the weather maybe)  A30
    Foot Ball Scores   (ie. worker moral!)                     A40 - A4F

Any of these types of entry should be fully documented in the operators
guide under 'Period Routine Checkup'.  Be sure to make a note of EACH
unique NINE digit combination that is to be entered.

While this is still all clear in your mind, take a few minutes to decide
how you would like these resource codes arranged in columns on the master
report.  There are seven columns and a potential of four different first
digits assigned to each column.

Write this column information in the operators guide.

Now for the final stage: assigning the activity codes.

Review the general code system above.

First give a six digit code to each of the labor pools (LLLL.LL).  It is
best to use as simple a code as possible. Only one digit should differ to
indicate each labor pool.

Second do the same for the stocks (MMMM.MM).  Make each broad category of
items a separate stock.  Use as simple a code as possible.  Only one digit
should differ to indicate each stock group.

It is often a good practice to use the first digit to indicate the Labor
Pools, Stocks, Equipment (pre-defined by cost Calculation), or activity.
Example:
     Equipment                   0     ->
        Direct                     2   ->  Pre-Defined
        Indirect                   3   ->
     Labor                       1
        Hourly Pool                1  \
        Salaried Pool              2   | Second of six digits the same
        Managers Pool              3   | as the first digit of "DDD".
     Stock                       2     |
        fuels & lubricants         4   | Parallelism makes the system neater!
        grains and feeds           5   /
     Activities - Intermediate   3
                - Final          4
                - Over head      5

Continue to classify and sub-classify your activities. There is lots of
room to work with -- 6 digits. And, don't forget you can use letters as well
as numbers.

When you are done check the codes over to make certain that they are unique.
If you have only 20 or 30 activities this will be quite simple.  However,
if you have 1000 activities use a sort utility on a computer to help you.
The DOS sort utility will work well because it does not throw out matches.
If you use the code and the description of each activity in your sort
it will be much easier to see what offenders there are and to adjust your
code system based on the computer out put.

Take the sorted list of Activities and Codes and add them to the operators
guide under 'Activities sorted by Code'.  Don't forget to include the codes
for Labor pools and Stocks as well.

Cost Calculation will help you produce a list of "DDD" resource codes
through  its dictionary facilities.  So wait until you have entered the
data into Cost  Calculation's initialization and then produce a sorted
list of resource codes.

Congratulations! You have finished modeling and coding your business.  If
you have followed the steps carefully and made proper notes, the rest is a
breeze.


Remember:   Interpretation of Codes


     The "DDD" is always a resource that is consumed.

     An equipment always becomes a   resource  to  be consumed by replacing
the  "DDD"  by "2CC" where "CC" is taken from that equipment's  (or  indirect
equipment's) defined code.

     "VVVV.VV",  "LLLL.LL", or "MMMM.MM" may not be any code that begins with
"02" or "03". (e.g. 0211.11 is an invalid activity code).

     No "VVVV.VV", "LLLL.LL", or "MMMM.MM" may be replaced by a similar code.
(e.g.  if  there  is an activity 1100.10 then it is wrong to define either  a
stock or a labour pool as 1100.10);






LESSON TWO:


                    Starting Cost Calculation


1)    "Cost Calculation" must be run from a hard  disk  equipped  system.  To
help with installation your distribution disk comes with  an  INSTAL.BAT file.
With the master disk in drive A:, and at the A> prompt type "INSTAL <Y".

2)  To start Cost Calculation you must be  on  drive  C: (ie. DOS prompt C> )
use  the  DOS  ChangeDir  command  "CD COST <Y".  Then  call the program with
"COST <Y".     *** Cost Calculation 2.1 CAN be run from a batch file ***

3)     Press  "y"  or  "Y"  to  consent  to  our  copy  rights  (as  found on
our registration of a user form) or the "Esc" key to quit.

4)  Having consented to our rights, you are presented with the main menu.

In the center of the top line you will see "??".   When you have been working
for  a  few months,  you will have developed a set of files for  each  month.
As  often happens,  you will likely be called on from time to time to  review
and/or correct files from your library of backup diskettes.

So  that  there is little chance of you becoming confused about which set  of
files  you  are currently operating on,   a two digit  code  representing the
month  of the files is displayed at the top of your screen.(for more  details
see 2 Vouchers)

But you have not yet begun, so "??" is displayed.

We suggest that you build a small demonstration system with us.   So start up
Cost Calculation and lets begin.



                       Initializing the Coding system


The  first,  and  most  important,  step is for you to  initialize  the  cost
coding system.

The  notation / / means to press the enclosed keys in the  order  given.  The
brackets  <  > indicate the name of a key to be pressed.  Small  letters  are
often converted to capital letters automatically by Cost Calculation.

Select 1. Initialization  from the main menu by pressing the number one.  The
beep  that  you hear tells you that your response has been accepted and  that
you do not need to press enter.



                           Activities


From the Initialization menu  select 1. Activity.

Our  first  activity  will  have the code  '1000.00'.    Enter  this  code as
/100000/.  Notice that since the '.' appears on the screen you need not enter
it from the key board.

The  description of this activity is 'Construction'.  So enter  /construction
<enter>/.    Notice that the activity name is entered in all capital letters.
Also notice  that  since  the  brackets  were  not  filled   by the
description, you needed to press enter.

Performance Units for this activity can be calculated in two different ways.  
  1) by the quantities that are consumed by  the  other activities.
  2) by the quantity produced by the source and measured at the source.   

Cost Calculation allows a lot of freedom at this point.   

FIRST  we may specify which figures to calculate and print on the report; 
choosing from C (Consumption)  or  P (Production) or B (both) or N (neither).   

Our construction activity is going to make units that will be assembled by an 
other  activity.    Also,  we  wish to distribute the  costs  of construction 
each  period according to the number of units consumed by an other  activity. 
So enter /C/ for 'rate calculated by consumption'. 

Costs are distributed in units.  The unit that you wish to use, as a unit of 
cost, can be any three letters.  This unit will be displayed on the report and
during entry sessions.  Now, enter the unit as /EA./.

SECOND we may select which of the two possible rates ('C' or 'P') is to be 
used in distribution of the cost among the consumers. 
NOTE:
The  rate  at which the units in our example will be charged to other 
activities  will  be according to the total of units consumed; so enter /C/.

We need a "DDD" to represent the total units consumed. Enter /700/.

Review  the information you have entered.   If it is correct then enter /YES/
or  /<F10>/ else enter /NO<enter>/ or /<F9>/ to return and enter the  correct
information.

It  could  be  that  there are several different qualities  and/or  types  of
units produced by an activity.   But in our case there is only one.   Give it
the "DDD" code (resource code) of /400/.  If there had been several different
products, they could each be given a different proportion of the costs of the
activity. But we have only one product, so enter the rate as /1/.

Since we have no more products, enter /<enter>/ and /YES/ or /<F10>/.

Now  you  are  ready to define the resources that will be  consumed  by  this
activity.

Enter  /120/  as the code and /LABOUR<enter>/ as the description.    The unit
is /HRS/. If you have entered this correctly then enter /YES/ or /<F10>/ else
/NO<enter>/ or /<F9>/to return.

At  this point the built in resource dictionary will automatically enter this
resource code,  description and unit in its data file.  In the future it will
be sufficient to enter the resource code and Cost Calculation will prompt you
with the description and the unit.

Continue with the following:

       310   Nails      BOX
       311   Wood       MSQ

To finish, enter the code as /<enter>/.

Now we are ready for the second activity.

The code is /200000/ and the description is /Erection of Units<enter>/.

We do not wish to calculate a performance rate here so enter /N/.

If  you  have entered the information correctly enter /<enter>/ and /YES/  or
/<F10>/.

Enter the following costs:

       210   Truck                HRS
       120   Labour               HRS
       310   Nails                BOX
       400   Constructed units    EA.

To finish, enter the code as /<enter>/.

Our final activity is the office. Enter this activity:

code:        3000.00
Description: Office
performance:  N
consumption:  -none-
costs:       120   Labour            HRS
             500   Rent              $$            
             501   General Expenses  $$

Good job!  To return to the main menu enter the activity code /<enter>/.




                              Equipment
 


On our project we have only one piece of directly charged equipment, a truck.

From the initialization menu, select 2. Equipment.

Notice that since the "AA" of the general code is always replaced with a "02"
to indicate directly charged equipment, the "02" is already there for you.

Also  since the "BB" of the general code is replaced by a two digit extension
of the "DDD" (resource code), you are not asked for this either.

Enter the code as /10/ and the description as /truck/.

Notice  that  the  equipment  are  automatically  initialized  to  "B"  (both
consumption  and  production quantities) and that the rate at which they  are
billed  out  will be by "C" (consumption) and the unit  is  "OHR"  (operating
hours).

Since equipment have a cost code extension then the code for total consumption 
is /02700/ and total production is /02701/. HOWEVER, since you are in the 
Equipment area, the computer already knows '02' as the first numbers of the 
code.  you need only enter /700/ for the total consumption and /701/ for the 
total production.

Review the entries and if correct then enter /YES/.

Since we have finished all our equipment enter the code /<enter>/.

Now we will define the costs that are accepted to this set of equipment.

Enter the  following costs:

       00120   Labour            HRS
       00312   Fuel              LIT

Finish the list in the normal way.

Return to the menu in the normal way.




                     Indirectly Charged Equipment


Where  as  all  other  items  have  a  two  part  code,   indirectly  charged
equipment has a three part code (recall the coding system description).

In  our example,  we have one class of indirect equipment costs.    Enter the
code /00/ and the description /Office Vehicles<enter>/.

Enter the following equipment:

       20   Datsun

And the following costs:

       120  HRS
       312  LIT

Return to the menu by pressing enter for the Equipment page, and enter again 
to the menu.





                            Labour Pool



Now we need a labour pool.  Our pool will have only one type of labour.

Code                5000.00
Description         Labour Pool
Total Consumption   700    {review entries}
Labour Types        120    Labour
                    {end list in normal way}
Costs               5000.00.350  Lunches
                    5000.00.502  Wages
                    {end list}



Press return (/enter/) three times to get through the code, and then once 
again to return to the initialization menu.


                           Stores &  Stocks


The stocks can best be thought of as storage of costs.  We may therefore store
even non-material items such advertising expenses or prepaid royalties.

The stocks themselves are a consumer of resources and may also be a source of
resources  to be consumed.  (The costs of operating the physical plant called
The Stocks is not intended here.  This consumption of resources should be an
activity).

We will maintain one store with the code 4000.00 containing the items listed.  
So the codes will be 4000.00.???  using the  codes listed below.
eg: 4000.00.310

Since  we wish to have these items removed from the stocks automatically when
consumed  by  an activity or equipment mark them all /A/ for Auto.    In this
example  we  have no internal sources of stocks so we will leave  that  space
blank with /<enter>/.

 4000.00.310   Nails      BOX     A     <enter>
 4000.00.311   Wood       MSQ     A     <enter>
 4000.00.312   Fuel       LIT     A     <enter>

Return to the menu.






                                Reports



Finally,  we must describe to "Cost Calculation" how we want the columns laid
out in the report to produce sub-totals of resources.

Select Sub-total Groupings from the menu.

Group  one  (column one) enter the description as LABOUR   (leave  the second
bracket empty by /<enter>/).  We will want this column totaled for a total of
all types of labour enter /Y/.

Since our labour types occupy the one hundreds, enter /1<enter><enter><enter>
<enter>/ to place all,  and only, the resources whose  codes are  represented
by "1DD" in the first column.  When asked for other   codes (_00) simply 
press return to skip through these to the next entry.

Review your entries. Enter /YES/.

Continue with:
        Bracket 1      Bracket 2
       Equipment                      Y   2,00    {codes in the 200's}
       Materials                      Y   3,00    {codes in the 300's}
       Products                       Y   4,00    {codes in the 400's}    
       Other           Expenses       Y   5,00    {codes in the 500's}
       Quantities                     N   7,00    {codes in the 700's}
       Others                         N   600,800,900,000, {all other codes}

You are returned to the Initialization Menu.



                        The Cost Code Directory



The  Cost  Code  Directory service provides  two  maintenance  functions:  
                1) editing of dictionary entries
                2) a print out of the current directory.

Let's print out a list of our cost codes. Select 7. Cost Code Directory.  Skip
the  editing facilities by /<enter>/.   When prompted to print out a listing,
turn on your printer and press /y/.

Press Y to send the information to your printer. (PRN)

The list is in order of the "DDD" code.

When the list is finished, return to the Initialization Menu by pressing 
/<enter>/. 




                        The List of Accounts


Since  you  have made changes to the coding system/structure of the  accounts
"Cost Calculation" suggests that you print out a full listing of the accounts
data base.

Turn on your printer and then enter /Y/.

Take  some time to examine the listing.   Notice that all the  activities and
equipments are listed giving all the information we entered for them.

After  the  structure description,  is a full list off all the cost  accounts
that we created.

GOOD JOB.
Now at the Main Menu select 'End Work Session' and have a cup of tea.



LESSON THREE:


                                   Vouchers


Welcome back to Cost Calculation.

Now  that  we have designed our cost control system,  we are ready  to  begin
operation.

There  are  two steps;  first,  the entry of vouchers for  the  consumptions,
expenses  and  transactions of the period,  and second,  the calculation  its
self.

The entry of the vouchers describes to Cost Calculation the flow of resources
from source to consumer.

The voucher consists of five parts:
     a nine digit code   ->   consumer and resource
     voucher number      ->   cross reference and sequencing
     quantity            ->   number of units {where 0 indicates a deleted
                              voucher}
     rate                ->   per unit cost {where 0 indicates a rate to be
                              calculated by Cost Calculation ie. internal
                              source}
     total               ->   total monetary value



                                Append



To begin the entry of vouchers start Cost Calculation (see B steps 2,  3, and
4).

Select 2. Vouchers from the Main Menu by pressing /2/.

Select 1. Append by /1/.

Our activity,  'Erection of Units',  erected 12 units this month. Recall that
this   activity's   code  is  2000.00  and  that  the  units,   produced   by
'Construction',  have a "DDD" of 400.  Therefore our first vouchers code will
be 2000.00.400. Enter this as /200000400/. {remember that you don't enter the
dots because they are already on the screen.}

Notice that the description and the unit are displayed on the screen so  that
you will be assured that you have entered the right code.

The reference code consists of two parts.  The first part should be the month
or  period  and the second should be the same as the voucher numbers  used by
your accounting office.   Since this is our first month enter /01/.   This is
voucher /0001/.

Twelve constructed units were used so enter the quantity /12<enter>/.

We  need  to tell Cost Calculation that we do not yet know the cost  of  each
unit.   Cost Calculation should determine a cost.  To do this, enter the rate
as /0<enter>/.  Notice that the total is entered for you.

Our  next voucher is for code /020010312/ (i.e.  0200.10.312).  Since this is
from  the same voucher enter /<enter><enter>/.   The quantity is  /50/ .Since
this  fuel was purchased separately,  rather than taken from the  stock,  the
voucher gives the total cost of the purchase.   Press /<enter>/ to  skip over
the  rate  and then enter the total /3.35<enter>/.   Notice that the  rate is
calculated for you.              *****Change this to dollars??*****
                     *****Yes! Use a reasonable Dollar amount for diesel*****
Enter the following vouchers:
     Code           Voucher    Quantity        Rate     Total
     3000.00.500    01.0002    145             1
     3000.00.501    01.0003    35              1
     1000.00.310    01.0004    9               0
     4000.00.312    01.0005    312             0.65  ***** $?? *****          
     4000.00.311    01.0006    110                      1600
     4000.00.310    01.0006    12                       9
     1000.00.120    01.0007    275             0
     5000.00.502    01.0008    800             1
     5000.00.350    01.0008    35              1
     1000.00.311    01.0009    100             0
     2000.00.310    01.0009    1               0
     0300.20.312    01.0010    40              0
     0300.20.120    01.0010    10              0
     0200.10.120    01.0011    15              0
     0200.10.312    01.0011    72              0
     2000.00.210    01.0012    45              0
     3000.00.120    01.0012    160             0

Very Good.

Return to the menu in the normal way. ( enter a code /<enter>/).
Notice  that before returning to the menu you are given the option to print a
verification list. Do this; turn on your printer then enter /Y/.

When the list is finished you will be returned to the menu.

NOTICE that the period at the top of your screen is now "Period 01".


                                 EDIT

Lets pretend that when you were entering the information into the vouchers 
that you made a mistake.  We will need to edit them.  Select "2. Edit"
from the menu.

We entered:      Code  1000.00.120   Ref. 01.0007  Quan.  275  Rate  0
It should be:    Code  1000.00.120   Ref. 01.0007  Quan.  255  Rate  0

Enter the code /1000000120/.

You are presented with three options:
          Y -> edit this voucher
          N -> wrong code, let me try a new code
          S -> show me the next voucher with the same code

Enter /Y/.  Now you are present with two options:
          D -> make this a deleted voucher.
          C -> Change the contents of this voucher.

Enter /C/.

Ref.  /010007/. Quantity /255/.  Rate /0/.

See if you can make the correction.


Now make the next correction:                           ***** $ ?? *****     
We entered:   Code  4000.00.312   Ref. 01.0005   Quan.  312  Rate  0.65
It should be: Code  4000.00.312   Ref. 01.0005   Quan.  312  Rate  0.065

Return to the vouchers menu.

Now we are ready to post our vouchers to the accounts.




                                     Post.

Select 3 Post.

You will now be asked to reset or quit.  Enter Reset. /R/

There are four steps to this process; and they happen automatically:
   - Preparing the Accounts
   - Zeroing Current Balances
   - Posting the Vouchers
   - Distribution of Material Stocks
When this is done you will be returned to the Vouchers Menu.

GOOD JOB. Now return to the Main Menu and select 'End Work Session' and have a 
cup of tea. Take a break.




LESSON FOUR: 

Welcome Back to Cost Calculation.

  
                   Distribution of Stores

We have one more matter to deal with before producing our report.   The stock
report that came from the material stocks this month reports the following:
      Fuel   155 LIT
      Nails    2 BOX
      Wood    10 MSQ
Although  our  stocks are all listed as automatic distribution;  that  is  we
entered  vouchers to represent the consumption of the stocks by each activity
and  equipment,  there  is a difference in Cost Calculation's estimate of the
store of Fuel and the stock report.

From the main menu, select 3. Distribution of Material Stocks.

Select 1. Append.

Enter  the  code  4000.00.312.    Notice that the  description  and  unit are
displayed for you. If you have the correct account the enter /y/ else /n/ and
enter it again.

The current quantity, average rate to date, and the total value are displayed
for  you.   Notice that the quantity is 200 LIT just as we thought  it should
be.   Now the final balance reported from the inventory check is 155  lit. so
enter /155<enter>/.  So we are to distribute 45 lit.

Now  we  must decide where to distribute the cost of this 45 liters of  fuel.
Lets add it to: the truck  70% and the Datsun  30%.

Enter the code for fuel consumed by the truck; 0200.10.312. Confirm that this
is  the right account.  The reference number will be 01.A001.  (The "A"  will
later  remind  us  that this is a stock "A"djustment.) Enter the  percent  as
/70<enter>/.    Notice  that  the Remaining  percent  is  calculated  by Cost
Calculation.  Confirm that this is correct.

Now for the Datsun...

Enter  the  code for fuel consumed by the Datsun;  0300.20.312.    Give  it a
reference of 01.A002, and a quantity of 30 %.

Great.

Now to return,  enter the code as /<enter>/, as always. Do it again to return
to  the menu.   Answer 'y' to print a verification list.   Take  some time to
examine the list.  Notice that the percentages have been converted to liters.

Now  that  we  are satisfied with the distribution list,  we must  post  this
information.  Select 3.  Post.  The operation is automatic.

Return to the Main menu.

GOOD JOB. We have almost finished a month of work! 

Now return to the Main Menu and select 'End Work Session' and have a cup of 
tea. Take a break. 



LESSON  FIVE:


                            Reports
  


From the main menu select 4. Period End Reporting.

From  the  report menu,  select 1.  Calculate to calculate and then post  the
vouchers that were entered with a zero rate.

First the labour rate will be calculated.  Then Cost Calculation will enter a
loop of four steps,  Posting,  Calculation of Equipment Costs, Calculation of
Activities  and Distribution of Stocks .   When all the  outstanding vouchers
have been posted, the indirectly charged equipment will be calculated.

There that was easy wasn't it.

Now we may produce a complete report of costs.  Select 2. Print Report.

Here  we may enter any DOS file name to save the report or we may enter /PRN/
to write directly to the printer.  We suggest that you save your reports in a
file on the computers disk.  Enter the file name /first.txt/.

You will be returned to the Report Menu when the report is finished.

Finally, we want to print out a copy of the report on the printer.

Return to the main menu and select 6. End Work Session.

You  should now see "C:\>_" on your screen,  the DOS prompt.   There  are two
main ways of proceeding from here:
 1) if you have a DOS "print" facility
    - enter /print cost\first.txt<enter>/
 2) else
    - enter /copy cost\first.txt prn<enter>/

Do not turn off the computer until the report is finished.

Take  time to examine the report carefully.   Notice how much  information is
displayed and how easy it is to understand in this form.

Very well done.   You have made a good start.  Welcome to the world of modern
Cost  Controllers!   


Have a cup of  ea. Take a break. 




LESSON SIX: 
  
                               Utilities

Cost Calculation has a variety of Utilities which can be used in various 
situations.


                           Edit Accounts

This facility allows you to change:
  - a Description
  - the unit
  - the current balances in the account
  - the accumulative balances in the account

Each type of account is entered according to its own type of code:
   [xxxx.xx.   ]   activity totals
   [xxxx.xx.   ]   labour totals
   [02  .xx.   ]   equipment totals
   [03  .xx.   ]   indirectly charged equipment totals
   [xxxx.xx.xxx]   stock detail
   [xxxx.xx.xxx]   cost detail

To accept the previous value simply enter /<enter>/.   For cost  details, the
rate  is  calculated by Cost Calculation if you skip the rate and  enter  the
total.



                             Sort Accounts



This  facility  is  used to order cost details on the reports so  that  those
costs  that occupy the first column are all printed first,  the second column
are  printed  second and so on.   At the same time  the  sort  eliminates any
unneeded records in the file 'ninecode.dat'.



                         List Cost Details
  


As each voucher,  and manual stock distribution, is posted the transaction is
recorded  in  the  file 'transact.dat'.   This file has a  capacity  of about
655,000  transactions  (about 22 MB of data).  If you find that the  file  is
getting too large or it takes too long to list the cost details, you may copy
this  file to a diskette,  delete it from the hard disk and start  over.   In
this case it is important to save the file for later reference.

If  you  chose  "List All Cost Details" then all transactions  including  the
beginning  period and the ending period will be searched and then listed  for
you in order according to the voucher reference number.  The list is totaled.

If you chose "List Cost Details" you will have to specify the beginning and
the ending period.

You must indicate to Cost Calculation the nine digit code that you wish to 
have searched.  You may search for a range of codes by using a search template
made up of digits and spaces.

Examples:  pattern  3   .  .120
           matches  3000.00.120
           matches  3010.99.120 

The  list that is produced may be saved into a file by entering any valid DOS
file  name,  or  sent to the printer by entering "prn" or to  the  screen  by
entering "con".

GOOD JOB. Now return to the Main Menu and select 'End Work Session' and have a 
cup of tea. Take a break.





LESSON SEVEN:


                              The Control System


There  is  a built in control system in Cost Calculation.    Cost Calculation
knows  the  proper  order in which to enter and/or change  data  and  produce
reports.  As  you  progress through the period's work Cost  Calculation  will
monitor  your  progress  and  give you a warning if it seems  that  you  have
forgotten something.

There are two possible responses to these warnings:
  /r/ -> I understand the situation and I wish to continue
  /q/ -> I do not wish to continue in this situation

It  may some times happen that Cost Calculation will lose its place.  If this
happens,  continue  to the end of the period end report then Cost Calculation
will correct itself.

GOOD JOB. Now return to the Main Menu and select 'End Work Session' and have a 
cup of tea. Take a break.




LESSON EIGHT:


                        Editing of the Structure


Editing  of the structure of the model (such as we created in our  example)is
done  through the initialization menu.   Edit mode is  automatically selected
when  an existing consumer's code is entered in any one of the initialization
screens;   activity,  equipment,  etc.  While  in  edit  mode,  the  existing
definitions may be retained by simply pressing /<enter>/.



                               Activities


The definition of an activity may be edited.  The code may not be changed.

To edit an activity,  chose Activity from the initialization menu.  Enter the
code  of  the activity that you wish to edit.   You will be asked  to confirm
your selection by entering /YES/.
You may change the Description,  Performance, Unit, and Rate for the activity
and the consumption and production codes.

You  may  then change the rates for the materials that define consumption  by
entering the "DDD" and then changing the rate.   The rates need not add up to
any particular sum; they simply express any convenient ratio.

Existing  materials will be presented to you for you to edit.   New materials
may  be added to the end of this list by entering the new "DDD" and the rate.
A total of five materials may be assigned as the product of any one activity.

Additional  costs may be added to the activity now.   Enter the proper "DDD",
the description,  and the unit.  End the list in the normal way.   Previously
defined costs will NOT be changed.



                                Equipment



The definition of an equipment may be edited.  The code may not be changed.

To  edit an equipment,  chose Equipment from the initialization menu.   Enter
the  code  of  the equipment that you wish to edit.   You  will  be  asked to
confirm your selection by entering /YES/.

You may change the description, Performance, Unit, and Rate for the equipment
and the consumption and production codes.

When  you have complete the editing of the specifications of any equipment to
be  edited additional costs may be added to the equipment.  Enter the  proper
"DDD",  the  description,  and  the  unit.  End the list in the  normal  way.
Previously defined costs will NOT be changed.

Since most equipment have very similar costs, Cost Calculation is designed to
save most of the entry time that would be required to enter the same cost for
each equipment.   You may initialize any number of pieces of equipment at one
time.    Only  after you have defined a group of equipment codes will  you be
asked for the "DDD" codes.  These codes will be applied to the entire list of
equipment.



                    Indirectly Charged Equipment
 
  

Additional  costs  and/or  equipment may be added to the  indirectly  charged
equipment.  Enter the code for the class of indirectly charged equipment.

Enter  the "CC"  and the description of the equipment to be added to the list
of equipment in this category.  End the list in the normal way.

Enter  the  "DDD"  and the unit of the costs to be accepted for  these  newly
added equipment. End the list in the normal way.

Previously defined costs for previously defined equipment will NOT be changed.

Cost  Calculation will accept up to 100 indirectly charged equipment in  each
class. Up to 40 cost codes may be entered for these equipment.





                                Labour



The definition of a labour pool may be edited.  The code may not be changed.

To edit a labour pool, chose "Labour" from the initialization menu. Enter the
code.  You will be asked to confirm your selection by entering /YES/.

You  may change the description,  for the labour pool and the consumption and
production codes.

You  will be presented with the existing defined labour types.    Any changes
to  these  will over write (and cause the loss of) previously defined  types.
New  labour  types may be added to the end of this list by entering  the  new
"DDD" . If you do not wish to change this information, then skip this section
by pressing "enter".

Labour  pool  costs may be edited now.   Again,  you will  be  presented with
the  existing  defined costs.   These may be overwritten or accepted  and new
costs  added to the end of the list.  Enter the proper nine digit codes,  the
description, and the unit. End the list in the normal way.

Cost Calculation remembers up to 10 costs for the labour pool.  The number of
labour types supported in each pool is 15.





                                 Stocks




To edit a stock, chose "Material Stocks" from the initialization menu.  Enter
the  code of the stock that you wish to edit.   You will be asked  to confirm
your selection by entering /YES/.

You may change the description, the unit and the distribution function.

There are three basic distribution functions; Manual, Auto, and Fixed.  Those
stocks marked as Manual can only be distributed by use of the Distribution of
Material Stocks facility from the Main Menu.  The Auto distributed stocks may
be  distributed  by the Distribution of Material Stocks or by  voucher.   The
Fixed  distribution stocks are first distributed according to  any  vouchers,
secondly  by the Distribution of Material Stocks,  and thirdly the  remaining
stock is distributed according to a fixed list of percentages.

When  a stock is marked as Fixed distribution,  then you will be requested to
enter a list of consumer codes and the corresponding percentages.

It  is often the case that a stock may consume a resource directly from third
party  sources some times and from an internal production source  at  others.
This  difference  is  marked by the entry of a "0" in the rate  area  of  the
appropriate  voucher.   eg.   4000.00.312   Rate:0    Total:0  indicates that
the source of the "312" should be an activity with in the system.

A little thought here will indicate a possible conflict.  Room for confusion
exists  here in distinguishing the "312" that is headed toward the Stock from
internal  and external sources,  and the "312" that is leaving the stock  for
internal and external consumers.

This  is clarified by the introduction into the Stocks of a distinct code  to
represent the material when it is a product of an activity.

Because product consumed by the stocks may be the product of an activity, the
cost and the quantity of the product on hand will not be known until some way
through  the  calculation.   In such a case the Fixed distribution of  such a
stock is delayed until the quantity and cost are known.

When editing the distribution list of a fixed distribution stock, you will be
presented  with  the  existing defined distribution list  for  editing.   New
consumers may be added to the end of the list.




                             Reports



To edit the report column headings and/or the distribution of costs among the
columns, select 6. Sub-Total Groupings from the initialization menu.

The existing contents and values may be retained by just pressing enter.   To
make a change just enter the new contents over the old.






GETTING THE FULL PROGRAM:


You have in your hands now, Cost Calculation Version 2.15 

If you would like to register you copy of Version 2.15 please send $50.00 to 
the address at the end of this tutorial, and you will receive a copy of the 
SHAREWARE VERSION of Cost Calculation.  This registered version is described 
below: 


                        Version 2.15

Cost Calculation 2.15 is a mini version of the full program.

Complete printer error checking is not provided on version 2.15.

The following restraints affect the use of version 2.15:
    1) only 20 equipment may be initialized
    2) only 30 activities may be initialized
    3) only 350 vouchers may be processed in any one period
    4) only 25 consumers may be listed for each fixed distribution stock

NOTE:  These restrictions should not affect a small business.

A registered copy of Version 2.15 is available by sending your company name, 
address, and a cheque or money order for $50.00 to the MEABT address at the 
end of this tutorial. The registration fee will provide you with the 
following: 

  o  A copy of Cost Calculation Version 2.1 (Not copy protected)
  o  A copy of the full Manual on the disk
  o  Automatic notice of Updates etc.
  o  Access to the BBS help line and mail box.
  o  You will be supporting the concept that allowed you to receive Cost 
     Calculation in the first place.  Only through User support can we 
     continue to support and improve out products, and release other products 
     we have already developed and are developing.
  o  A discount of $50.00 against the price of Version 2.2 if you wish to 
     upgrade at a later date.
  

To obtain Cost Calculation version 2.2 (with  none  of  the  above  mentioned
restrictions) contact your distributor, or the MEABT Office at:


             M.E.A.B.T.
             #48 Homewood Ave.,
             Hamilton, Ontario
             Canada    L8N 4B4


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2035

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        23   7-18-89   5:15p
    CONTACT  DAT       125   9-13-89   5:05p
    CONTENTS DOC       791   9-13-89   4:27p
    COST     EXE     49664   8-30-89  12:14p
    COST     OVR    101955   8-30-89  12:14p
    FILE2035 TXT      3035   1-15-90   6:25p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-16-90  12:24p
    INSTAL   BAT       929   8-12-89   9:05p
    MANUAL   DOC     74582   9-13-89   6:44p
    PRINTMAN BAT       400   8-12-89   9:08p
    PRINTTUT BAT       277   8-30-89   4:32p
    PROMO    COM     13056   9-13-89   2:59p
    PROMO    DOC      6844   9-13-89   3:57p
    READ     ME       2965   9-13-89   6:26p
    START    BAT        18   7-20-89  12:59p
    TUTOR    DOC     62666   9-13-89   6:45p
           17 file(s)     317908 bytes
                           35840 bytes free
