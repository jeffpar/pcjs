---
layout: page
title: "PC-SIG Diskette Library (Disk #289)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0289/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0289"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "POWER WORKSHEETS"

    Power-Worksheets is a user-supported program which relieves you of the
    need to set up (or program) and test 1-2-3 worksheets.  A collection
    of financial calculators, the worksheets are easy to use,
    sophisticated and well graphed.  Also included is a phone databes and
    Desktop-like appointment calendar.  Over 70 pages of documentation is
    included with this disk, which is actually one of two disks available.
    Disk #2, which contains additional graph-supported worksheets, is
    available for $49 from the author.
    
    System Requirements:  265K, two disk drives, LOTUS 1-2-3 v2.0
    
    How to Start:  Access through LOTUS 1-2-3
    
    Suggested Registration: $49 (includes printed manual and second disk)
    or $5 per worksheet.
    
    File Descriptions:
    
    AUTO123  WKS  Lotus autostart file
    README   1ST  Descriptions of worksheets on this disk
    AGENDA   WKS  Allows you to go from one worksheet to another.
    BSTAT    WKS  Accepts data and performs two major analytical tasks.
    ROR      WKS  Another calculation program.
    PROFIT   WKS  Analysis worksheet.
    NPV      WKS  Calculation program.
    DEPREC   WKS  A comprehensive worksheet.
    SREGR    DOC  Part of documentation (33K)
    ROR      DOC  Part of documentation (27K)
    PROFIT   DOC  Part of documentation (44K)
    NPV      DOC  Part of documentation (20K)
    DEPREC   DOC  Part of documentation (24K)
    BSTAT    DOC  Part of documentation (18K)
    INTRO    DOC  Introduction ( 6K)
    PRINTDOC BAT  Prints 72 pages of documentation
    SREGR    WKS  Linear Regression program
    TV       WKS  Part of Power Worksheet
    TEST     WKS  Test worksheet
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BSTAT.DOC

{% raw %}
```





         BSTAT - Basic Statistics Calculator 


         1.  INTRODUCTION 

              This worksheet  provides some  basic statistical  tools which
         can be used to quickly analyze up to 6 sets of data. 

              For each data range, the statistical results are displayed in
         the Results Block.  These results include: 

         No. of Observations 
               The number  of observations for  each data range  is counted
               and displayed. 

         Maximum 
               The maximum value in the data range. 

         Minimum 
               The minimum value in the data range. 

         Range 
               The  range  of  values.   i.e. the  difference  between  the
               maximum and the minimum. 

         Mean (Average) 
               The arithmetic mean or average obtained by adding up all the
               values  in a  data range,  then  dividing the  total by  the
               numbers of observations. 

         Standard Deviation 
               The  standard  deviation  is  a  measure  of  dispersion  or
               "average difference" from the average value of a data range.
               The standard deviation in  the Population Statistics section
               reflects  the actual  standard deviation  in the  data.  The
               standard   deviation  in   the  Sample   Statistics  section
               represents  a   prediction  about  the   estimated  standard
               deviation  of  a  much   larger  population,  based  on  the
               assumption that  the data contained  in the data range  is a
               representative   sample  from   that  larger,   but  unseen,
               population.  

         Variance 
               The variance is the square of the standard deviation. 


         2.  USING BSTAT 

               The main menu of BSTAT offers you seven choices (plus Quit).
               They are as follows: 

         Input 
               This  option allows  you to  specify the  maximum number  of
               observations you  will eventually  enter.  It then  exits to
               "raw" 1-2-3 to  allow you to input up to  6 data timeseries,
               either manually or using a file operation. 


         09/09/84                                                 BSTAT - 1








         Blank 
               You should choose this option  if you have finished with the
               data in the worksheet and want  to start again with an empty
               worksheet.  Note  that this option wipes  out all calculated
               results as  well as  the raw data.   (You must  confirm this
               choice to reduce the risk of accidental erasure.) 

         Calc 
               Make this choice  when you want to  calculate or recalculate
               the results.  If you have  changed data or entered more data
               since  you  last  calculated, you  must  recalculate  before
               displaying new results or graphs. 

         Results 
               This option centers the Results Block on the screen for easy
               viewing of all statistical results for all 6 data ranges. 

         Graph 
               This worksheet contains  a comprehensive graphics capability
               which will  allow you  to define up  to 42  distinct graphs.
               See the Graph Details section below for more information. 

         Print 
               The print option sends the  contents of the worksheet to the
               printer.    The    entire   worksheet   will    be   printed
               automatically. 

         Agenda 
               If you select  this option (and confirm  it when requested),
               the  current worksheet  is  lost and  replaced  by the  main
               agenda.  Then you can load  another worksheet from the disk.
               Note confirmation  is required before this  option proceeds,
               because it will overwrite the worksheet in memory. 


         2.1 Input Details 

              Input first asks you to  "Enter Max.  Number of Observations"
         which you expect to be  working with.  The worksheet requires this
         estimate in order to precondition  itself before you enter the raw
         timeseries, either manually or by a file operation. 

              If you expect approximately 100  values to be entered you may
         specify the  "...Max.  Number  of Observations"  to be,  say, 300.
         There is no need to be precise in answering this prompt as long as
         this number  is larger  than the total  number of  timeseries data
         points which you intend to enter. 

              After specifying  the maximum  number of  observations, press
         the Enter key.  There will be  some activity on the screen and the
         leftmost column will be filled with  numbers ranging from 1 to the
         maximum number  which you specified.   This is a handy  feature to
         keep  track  of your  position  if  you  must enter  many  numbers
         manually.   Later  on, during  the  Calc  operation, the  leftmost
         column  will  be  scaled  again  to match  the  actual  number  of


         09/09/84                                                 BSTAT - 2







         observations entered. 

              You will notice  that the cursor is now  positioned under the
         column labeled  "Range 1".  You will  also be aware that  the menu
         has disappeared from the top of  the screen.  You are now in "raw"
         1-2-3 mode and are free to enter timeseries data in one or more of
         the Range columns.  This can be  done manually or using 1-2-3 file
         commands.  There is no need for the number of observations in each
         range to  be equal  since the  statistical results  are calculated
         independently for each range. 

              The amount  of data which  you can  enter is only  limited by
         your computer's memory and 1-2-3's limit of about 2000 rows. 

              When you  have finished entering  data, simply use  the Alt-M
         keystroke combination to bring back the main menu.  Normally, your
         next action will be to choose the Calc option. 


         2.2 Calc Details 

              Activating the  Calc option  results in  a very  busy looking
         screen as a number of important  procedures are carried out by the
         worksheet.   It is  not necessary  for you  to be  aware of  these
         automatic operations but they are  briefly described here for your
         information.  First, the number  of newly entered observations are
         counted and  recorded in Row  9, and  the numbers in  the leftmost
         column are re-scaled to match the number of entries in the longest
         data range  column.  Next,  various formulas  are copied  into the
         Results Block area.  Finally, a  sequence of ranging procedures is
         carried out in  order to define graph ranges.   This graph ranging
         is  performed  during   the  Calc  operation  in   order  to  save
         considerable time later on during the Graph procedures. 

              When  the  Calc operation  is  completed,  the main  menu  re
         appears at the top of the screen. 

              Following completion  of the Calc procedure,  the statistical
         results contained in the Results  Block are ready for viewing.  In
         addition, the  Graph option  may be  used to  visually investigate
         various combinations of data ranges. 


         2.3 Graph Details 

              The Graph option first asks you  to specify either a Color or
         a Black &  White (Monochrome) monitor.   Once this choice  is made
         you are presented with the first  of 8 graph menus which allow the
         selection of different  combinations of the data  ranges which are
         to be  plotted.  Refer  to the menu  tree map at  the end  of this
         section to see the options  available.  Also, note that except for
         the first graph selection menu,  all subsequent menus have choices
         beginning with A,  B, C, etc.. in order to  allow the selection of
         each option using only one  keystroke, according to standard 1-2-3
         practice.  As desired, move between graph menus using the NextMenu
         and PrevMenu options.  


         09/09/84                                                 BSTAT - 3








              Any graph  can be sent  to a  printer by following  the 1-2-3
         PrintGraph procedures. 


         3.  EXAMPLE - Strange Data 

              A file called TEST.WKS contains five sets of data.  The BSTAT
         worksheet permits  the data sets  to be easily analyzed  for their
         basic  statistical properties  and compared  visually in  order to
         determine possible inter-relationships.   The following procedures
         might be used to investigate the information. 

         Keystroke            Comments 

         {Enter}              Press  the  ENTER  key to  select  the  first
                              choice in the menu, i.e.  Input. 

         200 {Enter}          Specify maximum number of observations. 

         /fcc {ENTER} test {ENTER} 
                              Use  the 1-2-3  file/combine/copy/entire file
                              keystroke   combination    to   combine   the
                              information  contained in  the TEST.WKS  file
                              into the data ranges in the worksheet. 

         Alt-M                Bring up the main menu. 

         c                    Select the Calc option.  

         r                    Select  the  Results  option to  examine  the
                              statistical properties of the ranges. 

         g                    Select the Graph option. 

         c or b               Select   Color  or   B&W(Monochrome)  monitor
                              setting. 

         1                    1Range  option  plots  a graph  of  Range  1.
                              Looks like a series of random numbers. 

         press any key        Return to graph menu. 

         2                    2Range option  plots a  graph of Range  2.  A
                              curve. 

         press any key        Return to graph menu. 

         3                    3Range option  plots a  graph of Range  3.  A
                              sine wave. 

         press any key        Return to graph menu. 

         4                    4Range  option  plots  a graph  of  Range  4.
                              Another curve. 



         09/09/84                                                 BSTAT - 4







         press any key        Return to graph menu. 


         5                    5Range option  plots a  graph of Range  5.  A
                              strange pattern. 

         press any key        Return to graph menu. 

         n                    Use NextMenu to select next menu. 

         b                    B13Range option plots a graph of Ranges 1 and
                              3. 

         press any key        Return to graph menu. 

         nn                   Select graph menu beginning with A35Range. 

         a                    A35Range option plots a graph of Ranges 3 and
                              5. 

         press any key        Return to graph menu. 

         nnnn                 Go to graph menu beginning with A1235Rge. 

         f                    F12345 option plots Ranges 1 through 5. 

         press any key        Return to graph menu. 

         q                    Return to main menu. 

         q                    Exit to 1-2-3 READY mode. 

         {F5} c81 {ENTER}     Use  F5 function  key (i.e.  the 1-2-3  Go to
                              command) to go to cell c81. 

         /re{end}{right}{end}{down}{ENTER} 
                              Erase the  last 50 observations in  each data
                              range in order to concentrate on the first 50
                              observations. 

         Alt-M                Bring up the main menu. 

         c                    Select the Calc option.  

         g                    Select the Graph option. 

         c or b               Select  Color  or  B&W  (Monochrome)  monitor
                              setting. 

         nnn                  Select graph menu beginning with A35Range. 

         a                    A35Range option plots a graph of Ranges 3 and
                              5. 

         press any key        Return to graph menu. 



         09/09/84                                                 BSTAT - 5







         nnnn                 Go to graph menu beginning with A1235Rge. 

         f                    F12345 option plots Ranges 1 through 5. 

         press any key        Return to graph menu. 

         q                    Return to main menu. 



















































         09/09/84                                                 BSTAT - 6







         Menu Tree for BSTAT Worksheet 

         Input       -  Input Data 

         Blank       -  Clear Input Fields 
         .  No          -  Cancel "Blank" Command 
         .  Yes         -  Yes, Erase all input 

         Calc        -  Calculate Results 

         Results     -  Show Results 

         Graph       -  Plot Graph(s) of Data or Results 
         .  Color       -  Print Graphs in Color (see PLOT1 Menu) 
         .  B&W         -  Print Graphs in Monochrome (see PLOT1 Menu) 
         .  Quit        -  Return to Menu 

         Print       -  Print Results 

         Agenda      -  Return to Worksheet Selection Agenda 
         .  No          -  Cancel Request.  Do not erase worksheet 
         .  Yes         -  Erase Worksheet.  Return to selection Agenda 

         Quit        -  Exit to 1-2-3 READY mode 

         PLOT1 Menu: 
         .  1Range      -  Plot Range 1 
         .  2Range      -  Plot Range 2 
         .  3Range      -  Plot Range 3 
         .  4Range      -  Plot Range 4 
         .  5Range      -  Plot Range 5 
         .  6Range      -  Plot Range 6 
         .  NextMenu    -  Go to next plot menu (see PLOT2 Menu) 
         .  Quit        -  Return to Menu 

         PLOT2 Menu: 
         .  A12Range    -  Plot Ranges 1 and 2 
         .  B13Range    -  Plot Ranges 1 and 3 
         .  C14Range    -  Plot Ranges 1 and 4 
         .  D15Range    -  Plot Ranges 1 and 5 
         .  E16Range    -  Plot Ranges 1 and 6 
         .  NextMenu    -  Go to next plot menu (see PLOT3 Menu) 
         .  PrevMenu    -  Return to previous menu (see PLOT1 Menu) 
         .  Quit        -  Return to Menu 

         PLOT3 Menu: 
         .  A23Range    -  Plot Ranges 2 and 3 
         .  B24Range    -  Plot Ranges 2 and 4 
         .  C25Range    -  Plot Ranges 2 and 5 
         .  D26Range    -  Plot Ranges 2 and 6 
         .  E34Range    -  Plot Ranges 3 and 4 
         .  NextMenu    -  Go to next plot menu (see PLOT4 Menu) 
         .  PrevMenu    -  Return to previous menu (see PLOT2 Menu) 
         .  Quit        -  Return to Menu 




         09/09/84                                                 BSTAT - 7







         PLOT4 Menu: 
         .  A35Range    -  Plot Ranges 3 and 5 
         .  B36Range    -  Plot Ranges 3 and 6 
         .  C45Range    -  Plot Ranges 4 and 5 
         .  D46Range    -  Plot Ranges 4 and 6 
         .  E56Range    -  Plot Ranges 5 and 6 
         .  NextMenu    -  Go to next plot menu (see PLOT5 Menu) 
         .  PrevMenu    -  Return to previous menu (see PLOT3 Menu) 
         .  Quit        -  Return to Menu 

         PLOT5 Menu: 
         .  A123Rge     -  Plot Ranges 1, 2, and 3 
         .  B124Rge     -  Plot Ranges 1, 2, and 4 
         .  C125Rge     -  Plot Ranges 1, 2, and 5 
         .  D126Rge     -  Plot Ranges 1, 2, and 6 
         .  E134Rge     -  Plot Ranges 1, 3, and 4 
         .  NextMenu    -  Go to next plot menu (see PLOT6 Menu) 
         .  PrevMenu    -  Return to previous menu (see PLOT4 Menu) 
         .  Quit        -  Return to Menu 

         PLOT6 Menu: 
         .  A135Rge     -  Plot Ranges 1, 3, and 5 
         .  B136Rge     -  Plot Ranges 1, 3, and 6 
         .  C145Rge     -  Plot Ranges 1, 4, and 5 
         .  D146Rge     -  Plot Ranges 1, 4, and 6 
         .  E234Rge     -  Plot Ranges 2, 3, and 4 
         .  NextMenu    -  Go to next plot menu (see PLOT7 Menu) 
         .  PrevMenu    -  Return to previous menu (see PLOT5 Menu) 
         .  Quit        -  Return to Menu 

         PLOT7 Menu: 
         .  A235Rge     -  Plot Ranges 2, 3, and 5 
         .  B236Rge     -  Plot Ranges 2, 3, and 6 
         .  C345Rge     -  Plot Ranges 3, 4, and 5 
         .  D346Rge     -  Plot Ranges 3, 4, and 6 
         .  E456Rge     -  Plot Ranges 4, 5, and 6 
         .  F1234Rge    -  Plot Ranges 1, 2, 3, and 4 
         .  NextMenu    -  Go to next plot menu (see PLOT8 Menu) 
         .  Quit        -  Return to Menu 

         PLOT8 Menu: 
         .  A1235Rge    -  Plot Ranges 1, 2, 3, and 5 
         .  B1236Rge    -  Plot Ranges 1, 2, 3, and 6 
         .  C1345Rge    -  Plot Ranges 1, 3, 4, and 5 
         .  D1346Rge    -  Plot Ranges 1, 3, 4, and 6 
         .  E1456Rge    -  Plot Ranges 1, 4, 5, and 6 
         .  F12345Rge   -  Plot Ranges 1, 2, 3, 4, and 5 
         .  G123456Rg   -  Plot Ranges 1, 2, 3, 4, 5, and 6 
         .  Quit        -  Return to Menu 









         09/09/84                                                 BSTAT - 8


```
{% endraw %}

## DEPREC.DOC

{% raw %}
```





         DEPREC - Depreciation Schedules 


         1.  INTRODUCTION 

              Depreciation is  a non-cash item deducted  from income before
         taxes  are calculated.   It is  intended to  allocate the  cost of
         capital equipment over  its useful life.  A number  of methods can
         be used  to calculate the amount  to be allocated, and  you should
         seek  qualified advice  to  choose the  appropriate method.   This
         worksheet calculates depreciation by five methods: 

              -  straight  line: the  depreciation  amount is  the same  in
                 every year (except possibly the first and last). 

              -  sum of years' digits: each year  in the life is assigned a
                 number  from  N  to  1   (i.e.  in  reverse  order).   The
                 depreciation in  each year  is proportional to  the number
                 assigned to that year. 

              -  declining  balance: the  depreciation  in each  year is  a
                 fixed percentage of the opening book value for the year. 

              -  declining balance  with crossover: this method  is similar
                 to declining  balance, except  that when  the depreciation
                 falls below  what would  be allowed  by the  straight line
                 method  over  the  remainder  of the  life,  the  (higher)
                 straight   line  depreciation   is   used.   This   method
                 depreciates the book  value to the salvage  value over the
                 life of  the asset; the  declining balance method  may not
                 depreciate it so much. 

              -  accelerated  cost recovery  system: the  Economic Recovery
                 Tax  Act of  1981 introduced  new rules  for depreciation.
                 Assets are  assigned to  one of  five categories,  and the
                 depreciation percentages are laid out for each category. 


              This worksheet  is very simple  to use.  Just enter  the cost
         and other data shown in the input menu, and request a calculation.
         You can examine  the results of the calculation on  your screen in
         tabular  or graphic  form, or  send them  to your  printer.  Three
         forms of  graph are available for  each schedule: a line  graph, a
         side-by-side bar chart, and a stacked bar chart. 


         2.  USING DEPREC 

              The  main  menu of  the  DEPREC  worksheet offers  you  seven
         choices (plus Quit).  They are as follows: 

         Input 
               This choice  allows you to  enter the input data  needed for
               the depreciation  calculations.  It  leads to a  sub-menu of
               all  the input  data items.   To  enter or  change an  item,
               select  it from  this menu,  type the  value, and  press the


         09/09/84                                                DEPREC - 1







               ENTER key.  Input is described in more detail below. 

         Blank 
               Choose this option  if you want to clear the  input area and
               all calculated results.   You will be asked  to confirm your
               intention  to delete  all the  data. 

         Calc 
               When  you have  entered  your data,  select  this option  to
               perform  the   calculations.   It  will  set   up  all  five
               depreciation schedules then return you to the main menu. 

         Results 
               This  option displays  the  depreciation  schedules on  your
               screen.  It  leads to a  sub-menu from which you  can select
               the schedule you want to display.   If the life of the asset
               is more than 15 years, you will get a scroll menu along with
               the schedule so  you can scroll the display up  and down the
               schedule. 

         Graph 
               You can produce three graphs  from each schedule.  The first
               is a line graph showing  the annual depreciation and closing
               book value for each year, and accumulated depreciation.  The
               second  is   a  side-by-side   barchart  showing   the  same
               information as the line graph.  The third is a 'stacked bar'
               chart.   In  this  chart,  the lower  section  of  each  bar
               represents  the  closing  book  value;  the  middle  section
               represents  the  depreciation for  this  year,  and the  top
               section represents the  prior accumulated depreciation (thus
               the   top  two   sections  taken   together  represent   the
               accumulated depreciation).  The Graph option is described in
               more detail below. 

         Print 
               You can  print any  of the  depreciation schedules,  and the
               input  data area.   The Print  option is  described in  more
               detail below. 

         Agenda 
               If you select  this option (and confirm  it when requested),
               the  current worksheet  is  lost and  replaced  by the  main
               agenda.  Then you can load  another worksheet from the disk.
               Note confirmation  is required before this  option proceeds,
               because it will overwrite the current worksheet. 

         2.1 Input Details 

              The input menu allows you to enter or change any input value.
         The menu offers  seven choices (plus Quit).  To enter  or change a
         particular value, select  it from the menu, type  the (new) value,
         and press the ENTER key.  The  value you enter will be checked for
         reasonableness.  If the value is not reasonable (eg. asset cost is
         zero or less),  1-2-3 will beep at  you, and you must  enter a new
         (reasonable) value before  you can return to the  input menu.  The
         items you can enter are as follows: 


         09/09/84                                                DEPREC - 2








         Cost 
               allows you  to enter the  original cost of the  asset.  This
               may be any value that is greater than the sum of the salvage
               value and the  grants.  Note that if you  are replacing data
               that  is   already  present,  and   you  want  to   enter  a
               substantially  lower  value for  the  cost,  the system  may
               object  because it  is lower  than the  sum of  the previous
               values  for grants  and salvage  value which  have not  been
               replaced.  The simplest solution here is either to blank out
               the previous input using the  Blank option in the main menu,
               or else to enter the salvage value and grants before the new
               asset cost. 

         Grants 
               allows  you to  enter the  amount of  any grants  or similar
               credits which  you might receive  as a result  of purchasing
               this asset.   Obviously, you  can only depreciate  an amount
               net  of these  grants  (which the  worksheet calculates  for
               you).  Grants must be zero  or greater, but not greater than
               the difference between the asset cost and the salvage value.
               If you  are entering data on  top of existing data,  and the
               new  cost is  substantially greater  than the  old one,  you
               should enter  it first.  Otherwise the  worksheet may object
               to  the value  for grants  because  it is  greater than  the
               difference between the (old) asset cost and salvage value. 

         Salvage 
               allows you  to enter the salvage  value of the asset  at the
               end of its useful life.  The value you enter must be zero or
               positive, but less than the asset cost minus grants.  If you
               are typing  new data on  top of  existing data, and  the new
               asset cost  is substantially  higher than the  previous one,
               you should  enter the cost first.   Otherwise, the worksheet
               might object when you try to enter the salvage value because
               it is higher than the  difference between the (old) cost and
               grants. 

         PurDate 
               allows you  to enter  the purchase date  of the  asset.  The
               purchase data  is split into  two parts (distinguished  by a
               sub-menu) -  the year and the  month.  To enter the  year of
               purchase, you must type  (initial letters only) PurDate Year
               followed by the  year (four digits).  To enter  the month of
               purchase, you must type (initial letters only) PurDate Month
               followed by  the month  (January=1, February=2,  etc.).  The
               purchase year is  used only to annotate  the schedules.  The
               purchase month  affects the amount of  depreciation taken in
               the first year, and the amount that rolls over into the last
               year of the schedule.  (Unless  the purchase month is 1, the
               schedule will cover one more year than the life of the asset
               to accommodate this roll-over.) For example, if the purchase
               month is  July (7), then  only half the  normal depreciation
               will be  taken in the  first year, and the  following years'
               depreciations will  be adjusted  to compensate.  If  you can
               take the  full depreciation  in the  first year,  you should


         09/09/84                                                DEPREC - 3







               enter 1 for the purchase month, regardless of when the asset
               is purchased.  The  above comments do not apply  to items in
               ACRS  Recovery  Cost  Categories  1  through  4,  which  are
               unaffected by the month of purchase.  For ACRS Recovery Cost
               Category 5,  a different schedule of  percentages applies to
               each month of purchase. 

         Life 
               allows you to enter the useful life (in years) of the asset.
               This determines the period of time over which the asset will
               be depreciated. 

         DBRate 
               allows you to enter the percentage of the opening book value
               that  may be  deducted each  year.  The  amount that  may be
               deducted each year decreases  as the prior years' deductions
               reduce the book value.  You must enter a number between zero
               and 100 (inclusive). 

         ACRSCat 
               allows you  to enter the Recovery-Life  Category, as defined
               by the  Economic Recovery Tax  Act of 1981.   The Categories
               are as follows: 

              1 -  3-year property, for  example automobiles, light trucks,
                   and equipment used in research and development. 

              2 -  5-year property, including  most machinery and equipment
                   not falling into category 1. 

              3 -  10-year property,  which covers certain types  of public
                   utility property and real estate. 

              4 -  15-year  utility  property,   including  public  utility
                   property,  and  some  kinds   of  real  estate  such  as
                   low-rental units. 

              5 -  15-year  real  property,  which covers  all  other  real
                   estate. 

              You must  enter one of  the above category numbers,  or 1-2-3
         will beep at you. 

         2.2 Graph Details 

              The graph  menu offers you  seven choices (plus  Quit).  Five
         correspond to the  five schedules you can display.   The other two
         allow you to choose the type  of plot (line, bar, or stacked-bar),
         and to set  options (color or monochrome  plots).  The information
         shown  for each  schedule  is  the same  -  annual and  cumulative
         depreciation, and  closing book value.  A  slight exception occurs
         in the  stacked bar chart, where  it makes more sense  to show the
         prior   accumulated   depreciation   above  the   current   year's
         depreciation,  so  the  sum  of   these  two  is  the  accumulated
         depreciation (which, when added to  the closing book value, always
         gives the original cost, net of grants). 


         09/09/84                                                DEPREC - 4








              The options in the graph menu are as follows: 

         Type 
               allows you  to specify  which form of  graph you  want.  The
               three choices  in the  sub-menu are  Line, Bar,  and Stacked
               Bar.    The  line   graph  shows   annual  and   accumulated
               depreciation,  and  closing  book value  in  three  separate
               lines.  The  bar graph shows  the same three items  as three
               vertical  bars side-by-side.   The  stacked-bar graph  shows
               only one  vertical bar  for each year.   The bar  is divided
               into three slices.  The  lowest slice represents the closing
               book value  for the  year, the  centre slice  represents the
               depreciation  for the  year,  and the  top  slice shows  the
               accumulated depreciation for prior years. 

         Options 
               allows  you   to  specify  Color  or   Black-and-white  (ie.
               monochrome)  graphs, and  to View  the latest  graph without
               respecifying it.  You might use this last option if you have
               reset some of  the graph options without  changing data, and
               want to see their effect. 

         Stline 
               plots the straight line depreciation schedule. 

         YrDig 
               plots the sum-of-years' digits depreciation schedule. 

         Dbal 
               plots the declining balance depreciation schedule. 

         Xover 
               plots  the  declining  balance  depreciation  schedule  with
               crossover to straight line. 

         ACRS 
               plots  the  Accelerated  Cost Recovery  System  depreciation
               schedule. 

         2.3 Print Details 

              When you choose Print from the main menu, the macro pauses so
         you can re-align  the paper.  Once you have done  so, it remembers
         where the top of  the page is so that it can skip  to the top of a
         new page when you select the Page option from the print menu.  The
         worksheet does  not automatically  skip to a  new page  after each
         schedule.   If you  want  to print  schedules  on separate  pages,
         simply use  the Page option  to force a skip  to a new  page after
         you've printed  each one.  If  you omit  the Page option,  you can
         print several schedules per page. 

              The  print sub-menu  offers seven  choices (plus  Quit).  The
         choices are as follows: 




         09/09/84                                                DEPREC - 5







         Input 
               prints the input data area of the worksheet. 

         Stline 
               prints the straight line depreciation schedule. 

         YrsDig 
               prints the sum-of-years'-digits depreciation schedule. 

         Dbal 
               prints the declining balance depreciation schedule. 

         Xover 
               prints  the  declining  balance depreciation  schedule  with
               crossover to straight line depreciation. 

         ACRS 
               prints  the Accelerated  Cost  Recovery System  depreciation
               schedule. 

         Page 
               forces a skip to the top of a new page. 


         3.  EXAMPLE - Buying a Truck 

              In July 1984,  you buy a light truck for  your business.  The
         truck  costs you  $10,000, but  you get  a $500  tax credit.   You
         expect the truck  to last three years, at which  point its salvage
         value should be $2,000.  You  want to consider a declining balance
         rate of  40%, and the  truck is  classified in ACRS  cost recovery
         category 1. 

              When the DEPREC  worksheet is loaded, you may  enter the data
         as follows: 


         Keystrokes           Comments 

         {ENTER}              Press  the  ENTER  key to  select  the  first
                              choice in the main menu - Input. 

         c 10000 {ENTER}      Asset cost. 

         g 500 {ENTER}        Grants to be netted against the asset cost. 

         s 2000 {ENTER}       Salvage value. 

         py 1984 {ENTER}      Year of purchase. 

         pm 7 {ENTER}         Month of purchase. 

         l 3 {ENTER}          Asset life (in years). 

         d 40 {ENTER}         Declining balance rate. 



         09/09/84                                                DEPREC - 6







         a 1 {ENTER}          ACRS cost-recovery category. 

         q                    Return to the main menu. 

         c                    Calculate.  There  will be a delay  while all
                              the schedules are calculated. 

              You can now display the  schedules on your screen by choosing
         the Results option from the main menu.  Here's how: 

         r                    Select the Results option. 

         i                    Displays  the  input   (home)  screen.   This
                              option typically  has no effect,  because you
                              are already on the home screen. 


         s                    Straight line depreciation  schedule. 

         y                    Sum-of-years'-digits depreciation schedule. 

         d                    Declining balance depreciation schedule. 

         x                    Declining balance  depreciation schedule with
                              crossover to the straight line method. 

         a                    Accelerated Cost Recovery System depreciation
                              schedule. 

              If the  asset life is  more than 15  years, the display  of a
         schedule is accompanied by a scroll menu that allows you to scroll
         up and down the schedule one screen-full at a time. 

              The next  option on the main  menu is Graph.  The  graph menu
         offers  seven choices  (plus Quit).   You can  display any  one of
         three types of graph for each of the five schedules.  For example,
         if  you  want  to  display  a   stacked  bar  graph  of  the  ACRS
         depreciation, you would proceed as follows (from the main menu): 

         g                    Select the Graph option. 

         ts                   Select a stacked bar graph. 

         a                    Display  this graph  for  the ACRS  schedule.
                              (Press any  key when you've  finished viewing
                              the graph.) 

         q                    Return to the main menu. 


              To print  the depreciation  schedules, select Print  from the
         main  menu.   For  example,  to  print the  input  data  and  ACRS
         depreciation  schedule on  one  page, and  the  straight line  and
         declining balance depreciation schedules on a second page, proceed
         as follows: 



         09/09/84                                                DEPREC - 7







         p                    Select Print from the  main menu.  The system
                              will prompt  you to  align the paper  in your
                              printer to the top of a new page. 

         {ENTER}              Press the ENTER key when you have aligned the
                              paper.  This  tells the system where  the top
                              of the page  is so it can skip to  the top of
                              the  next page  if you  select Page  from the
                              print menu. 

         ia                   Print  the input  data and  ACRS depreciation
                              schedule on one page. 

         psd                  Skip to  a new  page, and print  the straight
                              line   and  declining   balance  depreciation
                              schedules. 

         q                    Return to the main menu. 








































         09/09/84                                                DEPREC - 8







         Menu Tree for DEPREC Worksheet 

         Input    -  Input all data. 
         .  Cost     -  Input the asset cost. 
         .  Grants   -  Input grants to be netted against the cost. 
         .  Salvage  -  Input the salvage value at the end of the life. 
         .  PurDate  -  Input the purchase date. 
         .  .  Year     -  Input the year of purchase. 
         .  . Month     -  Input the month of purchase (January=1, etc.). 
         .  Life     -  Input the useful life of the asset (in years). 
         .  DBRate   -  Input the declining balance depreciation rate (%). 
         .  ACRSCat  -  Input the ACRS recovery-life category (1-5). 
         .  Quit     -  Return to main menu. 

         Blank    -  Blank out all input and depreciation schedules. 
         .  No       -  Do not blank out; return to main menu. 
         .  Yes      -  Blank out data, then return to main menu. 

         Calc     -  Calculate all depreciation schedules. 

         Results  -  Display depreciation schedules on the screen. 
         .  Stline   -  Display straight line depreciation schedule. 
         .  YrsDig   -  Display sum-of-years-digits depreciation schedule. 
         .  Dbal     -  Display declining balance depreciation schedule. 
         .  Xover    -  Display crossover depreciation schedule. 
         .  ACRS     -  Display ACRS depreciation schedule. 
         .  Quit     -  Return to main menu. 

         Graph    -  Display graphs of depreciation schedules. 
         .  Type     -  Set graph type. 
         .  .  Line        -  Prepare to display line graphs. 
         .  .  Bar         -  Prepare to display bar graphs. 
         .  .  Stacked-Bar -  Prepare to display stacked bar graphs. 
         .  Options  -  Set graph options. 
         .  .  Color    -  Display graphs in color. 
         .  .  B&W      -  Display graphs in monochrome. 
         .  .  View     -  Re-display the last-seen graph. 
         .  Stline   -  Graph straight line depreciation schedule. 
         .  YrsDig   -  Graph sum-of-years-digits depreciation schedule. 
         .  Dbal     -  Graph declining balance depreciation schedule. 
         .  Xover    -  Graph crossover depreciation schedule. 
         .  ACRS     -  Graph ACRS depreciation schedule. 
         .  Quit     -  Return to main menu. 

         Print    -  Print input data and depreciation schedules. 
         .  Input    -  Print input data. 
         .  Stline   -  Print straight line depreciation schedule. 
         .  YrsDig   -  Print sum-of-years-digits depreciation schedule. 
         .  Dbal     -  Print declining balance depreciation schedule. 
         .  Xover    -  Print crossover depreciation schedule. 
         .  ACRS     -  Print ACRS depreciation schedule. 
         .  Page     -  Skip to the top of the next page. 
         .  Quit     -  Return to main menu. 

         Agenda   -  Return to worksheet agenda. 
         .  No       -  Do not leave this worksheet; return to main menu. 


         09/09/84                                                DEPREC - 9







         .  Yes      -  Clear this worksheet and load agenda. 

         Quit     -  Exit to 1-2-3 READY mode. 























































         09/09/84                                                DEPREC - 10


```
{% endraw %}

## INTRO.DOC

{% raw %}
```





         POWER WORKSHEETS FOR 1-2-3 

         INTRODUCTION 

              Congratulations!  We  think you  have made  a wise  choice in
         buying Lotus  1-2-3.  With  it, your only  obstacles to  solving a
         problem are to  supply the data and define  the worksheet formulas
         to analyze it.   While we cannot help you supply  the data, we can
         help  with the  worksheet  by  giving you,  in  this package,  six
         predefined  worksheets to  perform common  analyses. 

              Within a few minutes of starting, you should be able to begin
         entering  your data  and getting  results.  We  have designed  our
         worksheets to be easy to use.  And we have included the options we
         feel  you will  find  most useful.   For  example, the  worksheets
         contain graph  definitions so  you can plot  your data  and/or the
         results of  the analysis.   Also we  use menus,  like the  ones in
         Lotus 1-2-3  itself, so you  are never left without  guidance. 

            Before you  use these worksheets, we  strongly recommend that
         you make  a copy of  the master diskette,  and that you  work only
         with copies, never with the master itself.  There are many mishaps
         that  can destroy  the  information on  a  diskette, ranging  from
         accidental erasure  to coffee spills.   The safest place  for your
         master diskette is on a shelf, not in the machine or on your desk.
         To make  it easy for  you to copy the  diskette, there is  no copy
         protection on it.  You can copy it  as often as you like using the
         standard DOS utilities. 


         USING THE WORKSHEETS 

              The worksheets in this package have been designed to help you
         analyze data  with the minimum of  effort.  They will work  on any
         IBM PC or compatible machine that can support 1-2-3.  To guide you
         on your  way, each worksheet is  driven by a series  of menus that
         prompt you with the alternatives.   In addition to calculating and
         displaying  the results,  the worksheets  include options  to send
         them to a  printer, and to produce graphs. 

             While most  of your work  with this package requires  no more
         than regular typing  and cursor movement, we  occasionally have to
         use  off-beat  key combinations.   There  are  only two  such  key
         combinations we will  need.  One is Ctrl-Break.   To generate this
         combination,  hold down  the key  marked Ctrl,  and press  the key
         marked  Scroll Lock  (it has  Break printed  on the  front).  This
         forces an interruption  of a macro (or of  other processing).  You
         may find you need to press the key marked Esc to get back to READY
         mode in  1-2-3.  The other  combination is  Alt-x, where 'x'  is a
         letter.  To  generate this combination,  hold down the  key marked
         Alt while typing the letter.  This combination executes one of our
         macros.   There are  several such  macros in  each worksheet.   In
         particular,  the following  macros have  the same  meaning in  all
         worksheets: 




         09/09/84                                                 INTRO - 1







              Alt-B  begins  execution   of  all  the   macros.   Normally,
                     execution will begin automatically when each worksheet
                     is first  loaded.  However, you may  occasionally find
                     you have accidentally 'broken  out' of our macros (you
                     can tell this because the  'CMD' flag at the top right
                     corner  of  your  screen  will go  out).   To  restart
                     execution from the very beginning, press Alt-B. 


              Alt-M  executes the  main menu.   Use this  to return  to the
                     menus from 1-2-3 READY mode  (ie. if the 'CMD' flag at
                     the  top  right  corner  of  your  screen  goes  out).
                     Typically, Alt-M has the same effect as Alt-B, but you
                     may   find  you   need   to  use   Alt-B  to   perform
                     initialization which Alt-M does not do.  


              Warning: If you use the 1-2-3 command /Move to move data into
         a named  range, the  range name  becomes invalid,  along with  any
         formulas that refer  to it.  Most of our  worksheets are protected
         against  such  an event.   However,  the  SREGR worksheet  is  not
         protected.  You  should avoid  the /Move  command when  using this
         worksheet.  This comment does not apply to /Copy. 

              When  entering numbers,  remember  to omit  any  $ signs,  or
         punctuation, except for the decimal  point.  A leading hyphen must
         be used if the number is negative, and a period should be used for
         the decimal point if there are  any non-zero digits to follow.  If
         the entry is a whole number, you need not enter the decimal point,
         or any following  zeros, even though decimal digits  may appear in
         the  display.   Percentages are  entered  the  same way  as  other
         numbers.  Do not  convert a percentage to a decimal,  or use the %
         key after typing the number.   To enter 41.23 percent, simply type
         41.23 and press the ENTER key. 


         THE AGENDA WORKSHEET 

              The  AGENDA worksheet  is  the centrepiece  of this  package.
         When you  first enter the package,  and whenever you leave  one of
         the other worksheets through the  Agenda option, this worksheet is
         loaded.   It allows  you  to  select any  other  worksheet in  the
         package.  To select a worksheet, simply type the initial letter of
         its name,  or move the  cell pointer over  its name and  press the
         Enter key. 













         09/09/84                                                 INTRO - 2


```
{% endraw %}

## NPV.DOC

{% raw %}
```





         NPV - Net Present Value Calculator 


         1.  INTRODUCTION 

              The net  present value of  a cash  flow (at a  given discount
         rate) is found by discounting all  values in the cash flow back to
         the opening period ('now') and  calculating their sum, taking into
         account the sign  of each value.  It yields a  'current value' for
         the cash flow,  allowing for the time value of  money (ie.  $1 now
         is worth more than $1 next year). 

              Net  present value  is a  commonly-used method  of evaluating
         projects  or investments,  or  of comparing  two investments  with
         different cash flow characteristics.  (Another measure is the rate
         of return, usually  calculated as the discount  rate which reduces
         the  net present  value of  the cash  flow to  zero.  See  the ROR
         worksheet for a discussion of rate of return.) 

              This worksheet will calculate the net present value of a cash
         flow at a number of discount rates.  You can produce a plot of the
         cash flow and cumulative cash flow by period.  And you can produce
         a plot of  the net present  value against the discount  rate.  The
         discount rate at which this latter graph crosses the X axis is the
         internal rate of return of the cash flow (see the ROR worksheet). 


         2.  USING NPV 

         2.1 Overview 

              The main menu  of the NPV worksheet offers  you seven options
         (plus Quit).  They are: 

         Input 
               This  option  allows  you  to enter  cash  flow  values  and
               discount rates.  It presents a sub-menu from which to select
               the data you want to input. 

         Blank 
               This option  blanks out the  input and results areas  of the
               worksheet,  after receiving  confirmation this  is what  you
               intend.   It is  useful  for clearing  out  all data  before
               entering an entirely new cash flow. 

         Calc 
               The  calc option  performs all  calculations.  You  must use
               this option whenever you change data or enter new data. 

         Results 
               When you  select this option,  you are presented a  sub menu
               allowing you  to choose  between the cash  flow and  the net
               present value  areas.  The  only essential difference  is in
               the set of column headings the program freezes as you scroll
               through the data. 



         09/09/84                                                   NPV - 1







         Graph 
               This worksheet  offers two  main graphs.   You can  plot the
               cash flow  and cumulative cash  flow by period; and  you can
               plot the net present values against the discount rates. 

         Print 
               This option sends  the cash flow and net  present value data
               to your printer, after a pause for paper alignment. 

         Agenda 
               If you  select this option,  and confirm it  when requested,
               the  current worksheet  is  lost and  replaced  by the  main
               worksheet  selection  agenda.   You can  then  load  another
               worksheet.  Note confirmation is required before this option
               proceeds, because it overwrites the worksheet in memory. 

         2.2 Input Details 

              Choosing the Input  option from the main menu leads  to a sub
         menu  with three  options  - Cashflow,  Periods/Yr, and  DiscRate.
         Each option allows you to enter part of the data. 

              The Cashflow option  allows you to enter cash  flow values by
         period.  This  option places the  cell pointer  at the top  of the
         cash flow  column and moves it  down one cell each  time you press
         the Enter key.   Thus, if you want to enter  the entire cash flow,
         simply type each number in turn and press the Enter key after each
         one.  Please note the following: 

              -   A value  must be  entered  for each  period covering  the
                  entire  duration of  the project  and starting  at period
                  zero.  If the cash flow  value for a particular period is
                  zero, enter zero.  Do not leave the cell blank. 

               -   Period  zero is  now, period  one is  one period  (year,
                   month, or whatever) hence. 

              -   Cash outflows  must be entered as  negative numbers; cash
                  inflows must be entered as positive numbers. 

              If you don't want to enter  the whole cash flow (for example,
         if you want to adjust a  cash flow you've already entered) you may
         use the  cursor movement  keys to  place the  cell pointer  on any
         number you want to change, and re-type it in normal 1-2-3 fashion.
         When you press the Enter key, the macro will move the cell pointer
         down one row. 

              The macro  which drives  this process has  no way  of knowing
         when you've  finished entering  or changing  data.  When  you have
         finished, you must break out of  the macro and re-invoke the input
         menu.  To do this, hold down the Ctrl key and press the Break key.
         The CTL  flag at  the top  of the screen  will go  out, indicating
         you've broken  out of the macro.   Then hold down the  Alt key and
         press I to invoke the input menu. 




         09/09/84                                                   NPV - 2







              The  Periods/Yr option  accepts  the number  of periods  that
         correspond to a year.  If you  have annual data, you must enter 1.
         If you  have monthly data,  enter 12.   This parameter is  used to
         convert the  discount rates  from the annual  values you  enter to
         values  applicable to  periods.  Thus,  whatever the  periods your
         data represents, you always enter discount rates as annual values. 

              The third  choice in the  input menu is DiscRate.   It allows
         you to enter  annual discount rates for which the  worksheet is to
         calculate the net present value.   Enter the rates as percentages.
         Do not  use the  % key or  convert to a  decimal (for  example, to
         enter 20%, type 20 and press the  Enter key).  It's a good idea to
         include zero in the set of  discount rates, because this gives the
         straight sum of the cash flow  values - a figure you can calculate
         independently to check your data entry. 

         2.3 Graph Details 

              This worksheet can produce two different graphs on either the
         color or  monochrome display.  Each graph  can take the form  of a
         line  graph, a  bar  chart,  or a  scatter  graph (points  without
         connecting lines).   These are  selected by means  of a  menu with
         four choices. 

              The  Cashflow option  displays a  graph of  the cash  flow by
         period.  The form  of the graph will  be the same as  the one that
         was last  displayed.  The NPV option  displays a graph of  the net
         present value against  the discount rate.  This shows  you how the
         net present value behaves as  future values are discounted more or
         less  heavily.  The  discount rate  (if  any) at  which the  graph
         crosses  the X-axis  represents  the rate  which  reduces the  net
         present value  of the  cash flow  to zero.  This  is known  as the
         internal rate of return of the cash flow. 

              The Type option presents a sub-menu from which you can select
         the  form of  the graph.   The three  choices are  Line, Bar,  and
         Scatter.  Each  choice will immediately re-display  the last graph
         in the selected form, then return to the graph menu. 

              The final choice  - Options - allows you to  choose the Color
         or monochrome (B&W)  monitor for the display.   Again, each choice
         re-displays the last graph on the selected device. 


         3.  EXAMPLES 

         3.1 A Simple Investment 

              This  example shows  how the  net present  value varies  with
         discount rate when  the cash flow is well-behaved.   You have been
         given the  opportunity to purchase  a note for $15,000.   The note
         will return $5,000 at the end of the first year, $7,000 at the end
         of the second year, and $9,000 at the end of the third year.  What
         is the  net present value  of this investment at  various discount
         rates? 



         09/09/84                                                   NPV - 3







         Keystroke      Comments 

         {ENTER}         Select the  Input option from the main menu. 

         P 1 {ENTER}     Select the Periods/Yr option  from the input menu,
                         and enter the number of periods per year (the data
                         is annual) 


         C               Select the  Cashflow option  from the  input menu.
                         The cell  pointer will go  to the top of  the cash
                         flow column. 

         -15000 {ENTER}  Enter the value for period zero (now).  Since this
                         is a  payment (ie.  a cash  outflow) its  value is
                         entered as a negative  number.  When you press the
                         ENTER key, the cell pointer moves down to the next
                         cell in the column. 

         5000 {ENTER}    Enter the value  returned at the end  of the first
                         year.  This is a cash inflow. 

         7000 {ENTER}    Enter the value returned at  the end of the second
                         year. 

         9000 {ENTER}    Enter the value  returned at the end  of the third
                         year. 

         {Ctrl}{Break}   To terminate  the input  loop, hold down  the Ctrl
                         key and press the Break  key.  The CMD flag at the
                         top of the screen will go out. 

         {Alt} I         To re-invoke the input menu, hold down the Alt key
                         and press I. 

         D               Select the  DiscRate option to enter  the discount
                         rates,  as annual  percentages.  The  cell pointer
                         will move  to the  top cell  in the  discount rate
                         column. 

         0 {ENTER}       The net present  value at zero percent  is the sum
                         of  the cash  flow items.   In this  example, it's
                         easy to check your input  by eye, but you may want
                         to get into  the habit of always  entering zero in
                         the discount rate column to  give you a total cash
                         flow, which you could check independently. 

         5 {ENTER}       Enter the remaining discount rates. 
         10 {ENTER} 
         15 {ENTER} 
         20 {ENTER} 
         25 {ENTER} 
         30 {ENTER} 

         {Ctrl}{Break}   As for  the cash flow  column, hold down  the Ctrl
                         key and press Break to terminate the input loop. 


         09/09/84                                                   NPV - 4








         {Alt} I         Then  hold down  the Alt  key and  press I  to re-
                         invoke the input menu. 

         Q               Return to the main menu 

         C               Select the Calc option in  the main menu.  The net
                         present values will be calculated 

         G               Select the Graph option from the main menu. 

         text {ENTER}    Whenever you enter the graph menu, the system will
                         ask  you to  enter  a second  title  line for  the
                         graphs.  You  may leave this line  blank, or enter
                         any short description.  To  get rid of an existing
                         description before typing a new one, press the Esc
                         key. 

         N               This option  displays a  graph of the  net present
                         value against  the discount rates.  Press  any key
                         to return to the graph menu. 

         T L             If the graph is not  already a line graph, you can
                         go to the  Type sub-menu to specify  a line graph.
                         The graph will be  re-displayed.  Press any key to
                         return to the graph menu. 


              The line graph  shows that the net present value  of the cash
         flow  is zero  at  a discount  rate  of about  17%.   This is  the
         internal rate of return of the cash flow.  You should buy the note
         if this rate  of return is sufficiently high, bearing  in mind all
         other factors (such as security). 


         3.2 An Accelerated Income Project 

              Many  projects  in  the   resources  industry  are  aimed  at
         accelerating resource  recoveries.  This  leads to  increased cash
         flows  in early  years,  followed by  compensating decreased  cash
         flows in later years.  Thus the  cash flow consists of a series of
         outflows (the  investment), followed by  a series of  inflows (the
         increased cash flows) followed by  another series of outflows (the
         reduced cash flows).  This is not a 'well-behaved' cash flow.  The
         NPV worksheet can  illustrate how the net present value  of such a
         cash flow varies with discount rate. 

              You  are  considering  the  value  of  an  enhanced  recovery
         project.  The  immediate cost  of this project  is $600.   It will
         increase cash  flows in the  next three  years by $800,  $500, and
         $200 respectively.  In  the three years after  that, however, cash
         flows will be  reduced by $200, $500, and  $800 respectively.  You
         need to  know the  net present  value of  this project  at various
         rates of return. 




         09/09/84                                                   NPV - 5







         Keystroke       Comments 

         {ENTER}         Select the  first option -  Input - from  the main
                         menu. 

         P 1 {ENTER}     Enter the number of periods  per year (the data is
                         annual). 

         C               Select the  Cashflow option  from the  input menu.
                         The cell  pointer will go  to the top cell  of the
                         cash flow column. 

         -600 {ENTER}    Enter  the initial  investment  (in period  zero).
                         The cell  pointer will automatically move  down to
                         the next period when you press the Enter key. 

         800 {ENTER}     Enter the increases in cash flow values in the 
         500 {ENTER}     first three years. 
         200 {ENTER} 

         -200 {ENTER}    Enter the decreases in cash flow values in the 
         -500 {ENTER}    next three years. 
         -800 {ENTER} 

         {Ctrl}{Break}   When all  the cash flow values  have been entered,
                         hold down the Ctrl key  and press the Break key to
                         break out of  the macro. 

         Alt I           To re-invoke the input menu, hold down the Alt key
                         and press I. 

         D               Select the  DiscRates option in the  input menu to
                         enter discount rates.  The cell pointer will go to
                         the top cell in the discount rates column. 

         0 {ENTER}       Enter the discount rates, as annual percentages 
         5 {ENTER}       Each time you press the Enter key, the cell 
         10 {ENTER}      pointer will move down to the next cell in the 
         15 {ENTER}      column. 
         20 {ENTER} 
         25 {ENTER} 
         30 {ENTER} 
         35 {ENTER} 
         40 {ENTER} 
         45 {ENTER} 
         50 {ENTER} 
         55 {ENTER} 
         60 {ENTER} 
         65 {ENTER} 
         70 {ENTER} 
         75 {ENTER} 
         80 {ENTER} 
         85 {ENTER} 
         90 {ENTER} 
         95 {ENTER} 
         100 {ENTER} 


         09/09/84                                                   NPV - 6








         {Ctrl}{Break}   When you have entered all the discount rates, hold
                         down the Ctrl key and press the Break key to break
                         out of the input loop. 

         {Alt} I         To re-invoke the input menu, hold down the Alt key
                         and type I. 

         Q               Return to the main menu. 

         C               Invoke the calculations. 

         G               Select the graph option from the main menu. 

         text {ENTER}    Each time you  invoke the graph menu,  it asks you
                         to  enter the  second title  line for  the graphs.
                         You may enter any short description.  To remove an
                         existing  description  before  typing a  new  one,
                         press the Esc key. 

         N               Select the NPV option in the graph menu to display
                         a graph  of  the  net present  value  against  the
                         annual discount rates.  Press any key to return to
                         the graph menu. 

         T L             Specify the  type of graph  as a line  graph.  The
                         graph will immediately be re-displayed.  Press any
                         key to return to the graph menu. 

         Q               Return to the main menu 

         Q               Exit to 1-2-3  READY mode.  To return  to the main
                         menu, hold down the Alt key and type M. 

























         09/09/84                                                   NPV - 7







         Menu Tree for NPV Worksheet 

         Input    -  Input periods/year, cash flow, and discount rates 
         .  Periods/Yr  -  Enter number of periods per year 
         .  Cashflow    -  Enter cash flow values by period 
         .  DiscRate    -  Enter annual discount rates (%) 
         .  Quit        -  Return to main menu 

         Blank    -  Blank out all input areas 
         .  No       -  Do not erase data.  Return to main menu 
         .  Yes      -  Erase all input data and results 

         Calc     -  Calculate Results 

         Results  -  Display Results 
         .  Cashflow -  Display cashflow figures and column headings 
         .  .  Down     -  Scroll down one screen 
         .  .  Up       -  Scroll up one screen 
         .  .  Quit     -  Return to results menu 
         .  NPV      -  Display net present values and column headings 
         .  .  Down     -  Scroll down one screen 
         .  .  Up       -  Scroll up one screen 
         .  .  Quit     -  Return to results menu 
         .  Quit     -  Return to main menu 

         Graph    -  Plot graphs of cashflow and/or results 
         .  Cashflow -  Display graph of cashflow and cumulative cashflow 
         .  NPV      -  Display graph of net present values 
         .  Type     -  Set type of graph 
         .  .  Line     -  Display a line graph 
         .  .  Bar      -  Display a bar chart 
         .  .  Scatter  -  Display a scatter chart 
         .  Options  -  Set color or monochrome display option 
         .  .  Color    -  Display graph in color 
         .  .  B&W      -  Display graph in monochrome 
         .  Quit     -  Return to main menu 

         Print    -  Print Results 

         Agenda   -  Return to Worksheet Selection Agenda 
         .  No       -  Do not leave this worksheet.  Return to main menu 
         .  Yes      -  Leave this worksheet.  Load the selection agenda 

         Quit     -  Exit to 1-2-3 READY mode 














         09/09/84                                                   NPV - 8


```
{% endraw %}

## PROFIT.DOC

{% raw %}
```





         PROFIT - Profitability Analysis 


         1.  INTRODUCTION 

              This worksheet helps  you carry out a variety  of analyses on
         the profitability  of selling  goods or  services.  It  takes into
         account the revenue received for  each sale, the cost of producing
         the goods, and the fixed costs or overheads.  As well as breakeven
         point calculations,  the worksheet  will tell  you what  sales are
         required to produce a given profit  (before tax) or a given profit
         margin (defined as the percentage of profit before tax to sales). 

              A wide selection of graphs  are available to help you display
         the relationships  between the various factors.   The relationship
         may be  plotted between any  pair chosen from the  following seven
         items: 

              Unit cost of production 
              Revenue per unit sold 
              Fixed costs 
              Profit before tax 
              Margin before tax 
              Sales revenue 
              Number of units sold. 

              The worksheet can  simultaneously handle data for  up to four
         cases, and data from any case can be selected for plotting. 


         2.  USING PROFIT 

         2.1 Overview 

              The PROFIT worksheet  is simple to use.  There  is one screen
         where the basic data is input  and the main results are displayed.
         The main menu presents five options (plus Quit).  They are: 

         Input 
               The input option places you in 1-2-3 Range Input mode so you
               can  enter  the  input  data on  the  main  screen.   1-2-3-
               highlights the cells into which  you can input data,and will
               only move  the cell pointer  to input cells.  When  you have
               finished inputting, press the Esc  key to return to the main
               menu. 

         Blank 
               The Blank option blanks out one entire case (ie. one column)
               in the  main screen.  This  is useful  if you want  to start
               again from scratch in that case. 

         Graph 
               This option  presents you with  a series of menus  where you
               can  specify what  you  want  to see  plotted.   There is  a
               selection of seven items (given above), and you may plot any
               item  against any  other  item  - a  total  of 42  different


         08/21/84                                                PROFIT - 1







               graphs.  Graphing is described in more detail below. 

         Print 
               This  option prints  the main  screen containing  your input
               data and results.   It first asks you to align  the paper in
               your printer.  Then it offers  you the opportunity to define
               one line of  header text and one line of  footer text.If you
               want to eliminate an existing header or footer before typing
               a new one, simply press the Esc key. 

         Agenda 
               If you  select this option,  and confirm it  when requested,
               the  current worksheet  is  lost and  replaced  by the  main
               worksheet  selection  agenda.   You can  then  load  another
               worksheet.  Note confirmation is required before this option
               proceeds, because it overwrites the worksheet in memory. 

         2.2 Graph Details 

              Graphics  form the  majority  of this  worksheet.  While  the
         table of numbers presented on  the main screen may be interesting,
         graphs of the  relationships between the various  factors are even
         more useful  for showing the  relationships between them.   A wide
         variety of  graphs is  available.  They are  designed to  show the
         sensitivity of one factor on  another, where the factors are those
         listed in the introduction. 

              When you first select the Graph option, and after each graph,
         the worksheet presents a menu where you can select which case (ie.
         column) you want  to examine.  Then you are presented  with a pair
         of  similar menus  allowing you  to select  the two  factors whose
         relationship  is to  be plotted.   The first  of the  pair is  the
         factor to be  plotted on the vertical axis of  the graph.  This is
         called  the dependent  factor, because  its values  depend on  the
         values you specify  for the other factor.  The second  menu of the
         pair selects the factor to be  varied.  This is called the control
         factor.  The control  factor is plotted along  the horizontal axis
         of the graph. 

              Once you have chosen the factors to be plotted, the worksheet
         asks  you to  specify low  and high  limits of  the range  for the
         control factor.  Once  this is done, the  worksheet calculates and
         displays the graph.  When you have viewed the graph, press any key
         to continue. 

              The worksheet will then present you with the option of saving
         this graph  on disk so you  can print it using  1-2-3's PrintGraph
         program.   If  you  select  No  (the  default),  you  will  return
         immediately to the  first menu allowing you to select  a case.  If
         you select  Yes the  worksheet will issue  a /Graph  Save command.
         You must specify a file name for the graph (the filename extension
         will be  .PIC), and if a  file with that name  already exists, you
         must indicate whether you want to  replace it.  When the graph has
         been saved,  the worksheet  does not continue  automatically.  The
         reason for  this is that the  macro has no way  of knowing whether
         you will enter  a conflicting file name, and if  you do, which way


         08/21/84                                                PROFIT - 2







         you will turn.  Being unable  to prepare itself for these options,
         the macro retreats.  You must hold down the Alt key and press M to
         re-invoke the main menu. 

              As mentioned above, there are 42 different graphs that can be
         produced  from  this  worksheet.   The  following  gives  a  brief
         description of each one, and the  formula it uses.  Note that each
         pair of  factors is represented on  two graphs (with the  roles of
         dependent and control factors reversed).  Sometimes the two graphs
         are equivalent, as in the  Unit cost/Unit revenue case.  For other
         pairs,  the two  graphs  are not  equivalent  because they  assume
         different unit  sales.  For example,  the graph with Unit  cost as
         control factor and  Margin before tax as  dependent factor assumes
         the unit sales  required for the given margin from  the main input
         screen; The reverse graph assumes breakeven units. 


         Dependent Factor:    Unit Cost 
         Control Factor:      Unit Revenue 
         Graph Title:         Unit Cost Required to Break Even 
         Description:         This graph shows the  unit cost that produces
                              a breakeven   situation   as   unit   revenue
                              changes.   It  assumes  the  fixed  cost  and
                              breakeven  units  shown  on  the  main  input
                              screen. 
         Formula Used: 
         Unit cost = Unit revenue - Fixed cost / Breakeven units 


         Dependent Factor:    Unit Cost 
         Control Factor:      Fixed Cost 
         Graph Title:         Unit Cost Required to Break Even 
         Description:         This graph shows the  unit cost that produces
                              a breakeven  situation  as   the  fixed  cost
                              changes.   It assumes  the  unit revenue  and
                              breakeven  units  shown  on  the  main  input
                              screen. 
         Formula Used: 
         Unit cost = Unit revenue - Fixed cost / Breakeven units 


         Dependent Factor:    Unit Cost 
         Control Factor:      Profit Before Tax 
         Graph Title:         Unit Cost to Produce Given Profit 
         Description:         This graph shows the  unit cost that produces
                              the specified profit  before tax.  It assumes
                              the unit  revenue, fixed cost, and  the units
                              required for  the given profit before  tax on
                              the main  input screen.   If you want  to use
                              the  breakeven  units  instead of  the  units
                              required for  the given  PBT, set  the profit
                              before tax on the main input screen to zero. 
         Formula Used: 
         Unit cost = Unit revenue - (Fixed cost + PBT) / PBT units 




         08/21/84                                                PROFIT - 3







         Dependent Factor:    Unit Cost 
         Control Factor:      Margin Before Tax (%) 
         Graph Title:         Unit Cost to Produce Given Margin 
         Description:         This graph shows the  unit cost that produces
                              the specified margin  before tax.  It assumes
                              the unit  revenue, fixed cost, and  the units
                              required  for the  given margin  on the  main
                              input  screen.   If  you   want  to  use  the
                              breakeven units instead of the units required
                              for the  given margin, set the  margin on the
                              main input screen to zero. 
         Formula Used: 
         Unit cost = Unit revenue * (1 - 0.01 * Margin ) - Fixed cost / 
              Margin units 


         Dependent Factor:    Unit Cost 
         Control Factor:      Sales $ 
         Graph Title:         Unit Cost Required to Break Even 
         Description:         This graph shows the  unit cost that produces
                              a breakeven situation  from the  given sales.
                              It assumes  the unit  revenue and  fixed cost
                              from the main input screen. 
         Formula Used: 
         Unit cost = Unit revenue * (Sales $ - Fixed cost) / Sales $ 


         Dependent Factor:    Unit Cost 
         Control Factor:      Sales Units 
         Graph Title:         Unit Cost Required to Break Even 
         Description:         This graph shows the  unit cost that produces
                              a breakeven  situation from  the given  sales
                              units.  It assumes the unit revenue and fixed
                              cost from the main input screen. 
         Formula Used: 
         Unit cost = Unit revenue - Fixed cost / Sales units 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Unit Cost 
         Graph Title:         Unit Revenue Required to Break Even 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces a  breakeven situation as  unit cost
                              changes.   It  assumes  the  fixed  cost  and
                              breakeven  units  shown  on  the  main  input
                              screen. 
         Formula Used: 
         Unit revenue = Unit cost + Fixed cost / Breakeven units 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Fixed Cost 
         Graph Title:         Unit Revenue Required to Break Even 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces a  breakeven situation as  the fixed
                              cost changes.   It assumes the unit  cost and


         08/21/84                                                PROFIT - 4







                              breakeven  units  shown  on  the  main  input
                              screen. 
         Formula Used: 
         Unit revenue = Unit cost + Fixed cost / Breakeven units 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Profit Before Tax 
         Graph Title:         Unit Revenue to Produce Given Profit 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces the specified profit before tax.  It
                              assumes the  unit cost,  fixed cost,  and the
                              units  required for  the given  profit before
                              tax on the main input screen.  If you want to
                              use the breakeven units  instead of the units
                              required for  the given  PBT, set  the profit
                              before tax on the main input screen to zero. 
         Formula Used: 
         Unit revenue = Unit cost + (Fixed cost + PBT) / PBT units 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Margin Before Tax 
         Graph Title:         Unit Revenue to Produce Given Margin 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces the specified margin before tax.  It
                              assumes the  unit cost,  fixed cost,  and the
                              units required  for the  given margin  on the
                              main input  screen.  If  you want to  use the
                              breakeven units instead of the units required
                              for the  given margin, set the  margin on the
                              main input screen to zero. 
         Formula Used: 
         Unit revenue = (Unit cost + Fixed cost / Margin units) / (1 - 0.01 
              * Margin) 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Sales $ 
         Graph Title:         Unit Revenue Required to Break Even 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces a breakeven situation from the given
                              sales.  It  assumes the  unit cost  and fixed
                              cost from the main input screen. 
         Formula Used: 
         Unit revenue = Unit cost * Sales $ / (Sales $ - Fixed cost) 


         Dependent Factor:    Unit Revenue 
         Control Factor:      Sales Units 
         Graph Title:         Unit Revenue Required to Break Even 
         Description:         This  graph  shows   the  unit  revenue  that
                              produces a breakeven situation from the given
                              sales units.   It assumes  the unit  cost and
                              fixed cost from the main input screen. 
         Formula Used: 


         08/21/84                                                PROFIT - 5







         Unit revenue = Unit cost + Fixed cost / Sales units 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Unit Cost 
         Graph Title:         Fixed Costs Required to Break Even 
         Description:         This graph shows the fixed cost that produces
                              a breakeven situation  as unit  cost changes.
                              It  assumes the  unit  revenue and  breakeven
                              units shown on the main input screen. 
         Formula Used: 
         Fixed cost = Breakeven units * (Unit revenue - Unit cost) 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Unit Revenue 
         Graph Title:         Fixed Costs Required to Break Even 
         Description:         This graph shows the fixed cost that produces
                              a breakeven   situation   as   unit   revenue
                              changes.   It  assumes   the  unit  cost  and
                              breakeven  units  shown  on  the  main  input
                              screen.  
         Formula Used: 
         Fixed cost = Breakeven units * (Unit revenue - Unit cost) 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Profit Before Tax 
         Graph Title:         Fixed Costs to Produce Given Profit 
         Description:         This graph shows the fixed cost that produces
                              a breakeven  situation as  profit before  tax
                              changes.  It  assumes the unit  revenue, unit
                              cost, and  the units  required for  the given
                              profit before  tax on the main  input screen.
                              If  you  want  to  use  the  breakeven  units
                              instead of  the units required for  the given
                              PBT, set  the profit  before tax on  the main
                              input screen to zero. 
         Formula Used: 
         Fixed cost = PBT units * (Unit revenue - Unit cost) - PBT 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Margin Before Tax 
         Graph Title:         Fixed Cost to Produce Given Margin 
         Description:         This graph shows the fixed cost that produces
                              a breakeven  situation as  margin before  tax
                              changes.  It  assumes the unit  revenue, unit
                              cost, and  the units  required for  the given
                              margin before  tax on the main  input screen.
                              If  you  want  to  use  the  breakeven  units
                              instead of  the units required for  the given
                              margin, set the margin before tax on the main
                              input screen to zero. 
         Formula Used: 
         Fixed cost = Margin units * (Unit revenue * (1 - 0.01 * Margin) - 


         08/21/84                                                PROFIT - 6







              Unit cost) 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Sales $ 
         Graph Title:         Fixed Costs Required to Break Even 
         Description:         This graph shows the fixed cost that produces
                              a breakeven situation  from the  given sales.
                              It  assumes the  unit revenue  and unit  cost
                              from the main input screen. 
         Formula Used: 
         Fixed cost = Sales $ * (Unit revenue - Unit cost) / Unit revenue 


         Dependent Factor:    Fixed Cost 
         Control Factor:      Sales Units 
         Graph Title:         Fixed Costs Required to Break Even 
         Description:         This graph shows the fixed cost that produces
                              a breakeven  situation from  the given  sales
                              units.  It assumes the  unit revenue and unit
                              cost from the main input screen. 
         Formula Used: 
         Fixed cost = Sales units * (Unit revenue - Unit cost) 


         Dependent Factor:    Profit Before Tax 
         Control Factor:      Unit Cost 
         Graph Title:         Profit For Given Unit Cost 
         Description:         This graph  shows the profit before  tax that
                              results from  a given unit cost.   It assumes
                              the  unit   revenue,  fixed  cost,   and  the
                              breakeven units from the main input screen. 
         Formula Used: 
         PBT = Breakeven units * (Unit revenue - Unit cost) - Fixed cost 


         Dependent Factor:    Profit Before Tax 
         Control Factor:      Unit Revenue 
         Graph Title:         Profit For Given Unit Revenue 
         Description:         This graph  shows the profit before  tax that
                              results  from  a   given  unit  revenue.   It
                              assumes the  unit cost,  fixed cost,  and the
                              breakeven units from the main input screen. 
         Formula Used: 
         PBT = Breakeven units * (Unit revenue - Unit cost) - Fixed cost 


         Dependent Factor:    Profit Before Tax 
         Control Factor:      Fixed Cost 
         Graph Title:         Profit For Given Fixed Costs 
         Description:         This graph  shows the profit before  tax that
                              results from a given  fixed cost.  It assumes
                              the   unit  revenue,   unit  cost,   and  the
                              breakeven units from the main input screen. 
         Formula Used: 
         PBT = Breakeven units * (Unit revenue - Unit cost) - Fixed cost 


         08/21/84                                                PROFIT - 7









         Dependent Factor:    Profit Before Tax 
         Control Factor:      Margin Before Tax 
         Graph Title:         Profit Required for Given Margin 
         Description:         This graph  shows the profit before  tax that
                              results in  the given  margin %.   It assumes
                              the unit revenue, and  the units required for
                              the given margin before tax on the main input
                              screen.   If you  want to  use the  breakeven
                              units instead  of the units required  for the
                              given margin,  set the  margin before  tax on
                              the main input screen to zero. 
         Formula Used: 
         PBT = Margin units * Unit revenue * Margin % / 100 


         Dependent Factor:    Profit Before Tax 
         Control Factor:      Sales $ 
         Graph Title:         Profit for Given Sales $ 
         Description:         This graph  shows the profit before  tax that
                              results from  the given sales $.   It assumes
                              the unit  revenue, unit cost, and  fixed cost
                              from the main input screen. 
         Formula Used: 
         PBT = Sales $ * (Unit revenue - Unit cost) / Unit revenue - 
              Fixed cost 


         Dependent Factor:    Profit Before Tax 
         Control Factor:      Sales Units 
         Graph Title:         Profit for Given Sales Units 
         Description:         This graph  shows the profit before  tax that
                              results  from  the  given  sales  units.   It
                              assumes  the  unit  revenue, unit  cost,  and
                              fixed cost from the main input screen. 
         Formula Used: 
         PBT = Sales units * (Unit revenue - Unit cost) - Fixed cost 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Unit Cost 
         Graph Title:         Margin for Given Unit Cost 
         Description:         This graph  shows the margin before  tax that
                              results from  a given unit cost.   It assumes
                              the  unit   revenue,  fixed  cost,   and  the
                              breakeven units from the main input screen. 
         Formula Used: 
         Margin = 100 * (1 - Unit cost / Unit revenue - Fixed cost / 
              (Breakeven units * Unit revenue)) 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Unit Revenue 
         Graph Title:         Margin for Given Unit Revenue 
         Description:         This graph  shows the margin before  tax that


         08/21/84                                                PROFIT - 8







                              results  from  a   given  unit  revenue.   It
                              assumes the  unit cost,  fixed cost,  and the
                              breakeven units from the main input screen. 
         Formula Used: 
         Margin = 100 * (1 - Unit cost / Unit revenue - Fixed cost / 
              (Breakeven units * Unit revenue)) 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Fixed Cost 
         Graph Title:         Margin for Given Fixed Cost 
         Description:         This graph  shows the margin before  tax that
                              results from a given  fixed cost.  It assumes
                              the   unit  revenue,   unit  cost,   and  the
                              breakeven units from the main input screen. 
         Formula Used: 
         Margin = 100 * (1 - Unit cost / Unit revenue - Fixed cost / 
              (Breakeven units * Unit revenue)) 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Profit Before Tax 
         Graph Title:         Margin for Given Profit 
         Description:         This graph  shows the margin before  tax that
                              results from  a given profit before  tax.  It
                              assumes  the  unit   revenue  and  the  units
                              required for  the given profit before  tax on
                              the main  input screen.   If you want  to use
                              the  breakeven  units  instead of  the  units
                              required for  the given  PBT, set  the profit
                              before tax on the main input screen to zero. 
         Formula Used: 
         Margin = 100 * PBT / (PBT units * Unit revenue) 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Sales $ 
         Graph Title:         Margin for Given Sales $ 
         Description:         This graph  shows the margin before  tax that
                              results from a given sales $.  It assumes the
                              unit revenue,  unit cost, and the  fixed cost
                              from the main input screen. 
         Formula Used: 
         Margin = 100 * (Unit revenue - Unit cost) / Unit revenue - 
              Fixed cost / Sales $ 


         Dependent Factor:    Margin Before Tax 
         Control Factor:      Sales Units 
         Graph Title:         Margin for Given Sales Units 
         Description:         This graph  shows the margin before  tax that
                              results from a given sales units.  It assumes
                              the unit  revenue, unit  cost, and  the fixed
                              cost from the main input screen. 
         Formula Used: 
         Margin = 100 * (1 - Unit cost / Unit revenue - Fixed cost /  


         08/21/84                                                PROFIT - 9







              Sales units / Unit revenue) 


         Dependent Factor:    Sales $ 
         Control Factor:      Unit Cost 
         Graph Title:         Sales Required to Break Even 
         Description:         This  graph shows  the  sales  $ required  to
                              break  even  as  the unit  cost  varies.   It
                              assumes the fixed cost  and unit revenue from
                              the main input screen. 
         Formula Used: 
         Sales $ = Fixed cost * Unit revenue / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales $ 
         Control Factor:      Unit Revenue 
         Graph Title:         Sales Required to Break Even 
         Description:         This  graph shows  the  sales  $ required  to
                              break even  as the  unit revenue  varies.  It
                              assumes the fixed cost and unit cost from the
                              main input screen. 
         Formula Used: 
         Sales $ = Fixed cost * Unit revenue / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales $ 
         Control Factor:      Fixed Cost 
         Graph Title:         Sales Required to Break Even 
         Description:         This  graph shows  the  sales  $ required  to
                              break  even as  the  fixed  cost varies.   It
                              assumes the  unit revenue and unit  cost from
                              the main input screen. 
         Formula Used: 
         Sales $ = Fixed cost * Unit revenue / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales $ 
         Control Factor:      Profit Before Tax 
         Graph Title:         Sales Required for Given Profit 
         Description:         This  graph shows  the  sales  $ required  to
                              produce  a  given   profit  before  tax.   It
                              assumes  the  unit  revenue, unit  cost,  and
                              fixed cost from the main input screen. 
         Formula Used: 
         Sales $ = (PBT + Fixed cost) * Unit revenue / 
              (Unit revenue - Unit cost) 


         Dependent Factor:    Sales $ 
         Control Factor:      Margin Before Tax 
         Graph Title:         Sales Required for Given Margin 
         Description:         This  graph shows  the  sales  $ required  to
                              produce  a  given   margin  before  tax.   It
                              assumes  the  unit  revenue, unit  cost,  and
                              fixed cost from the main input screen. 
         Formula Used: 


         08/21/84                                                PROFIT - 10







         Sales $ = Fixed cost / (1 - Unit cost / Unit revenue - 0.01 * 
              Margin) 


         Dependent Factor:    Sales $ 
         Control Factor:      Sales Units 
         Graph Title:         Sales $ Versus Sales Units 
         Description:         This  graph  shows the  relationship  between
                              sales $ and sales units.  It assumes the unit
                              revenue from the main input screen. 
         Formula Used: 
         Sales $ = Sales units * Unit revenue 


         Dependent Factor:    Sales Units 
         Control Factor:      Unit Cost 
         Graph Title:         Unit Sales Required to Break Even 
         Description:         This  graph shows  the unit  sales that  will
                              result in  a breakeven situation as  the unit
                              cost varies.   It assumes the fixed  cost and
                              the unit revenue from the main input screen. 
         Formula Used: 
         Sales Units = Fixed cost / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales Units 
         Control Factor:      Unit Revenue 
         Graph Title:         Unit Sales Required to Break Even 
         Description:         This  graph shows  the unit  sales that  will
                              result in  a breakeven situation as  the unit
                              revenue  varies.  It  assumes the  fixed cost
                              and the unit cost from the main input screen. 
         Formula Used: 
         Sales Units = Fixed cost / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales Units 
         Control Factor:      Fixed Cost 
         Graph Title:         Unit Sales Required to Break Even 
         Description:         This  graph shows  the unit  sales that  will
                              result in a breakeven  situation as the fixed
                              cost varies.  It assumes the unit revenue and
                              the fixed cost from the main input screen. 
         Formula Used: 
         Sales Units = Fixed cost / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales Units 
         Control Factor:      Profit Before Tax 
         Graph Title:         Unit Sales for Given Profit 
         Description:         This  graph shows  the  unit  sales that  are
                              required  to produce  a  given profit  before
                              tax.  It assumes the unit revenue, unit cost,
                              and  the  fixed  cost  from  the  main  input
                              screen. 
         Formula Used: 


         08/21/84                                                PROFIT - 11







         Sales Units = (Fixed cost + PBT) / (Unit revenue - Unit cost) 


         Dependent Factor:    Sales Units 
         Control Factor:      Margin Before Tax 
         Graph Title:         Unit Sales for Given Margin 
         Description:         This  graph shows  the  unit  sales that  are
                              required  to produce  a  given margin  before
                              tax.  It assumes the unit revenue, unit cost,
                              and  the  fixed  cost  from  the  main  input
                              screen. 
         Formula Used: 
         Sales units = Fixed cost / (Unit revenue * (1 - 0.01 * Margin) - 
              Unit cost) 


         Dependent Factor:    Sales Units 
         Control Factor:      Sales $ 
         Graph Title:         Sales $ Versus Sales Units 
         Description:         This  graph  shows the  relationship  between
                              sales $ and sales units.  It assumes the unit
                              revenue from the main input screen. 
         Formula Used: 
         Sales units = Sales $ / Unit revenue 


         3.  EXAMPLE 

              Your  company  is  considering making  and  selling  widgets.
         Research indicates that you can produce a widget for about $2, and
         sell it for about $5.   Annual overheads are estimated at $10,000.
         Your V.P.   Finance has  asked you to  analyze these  figures, and
         answer the following specific questions: 

              1.    What is the breakeven volume? 
              2.    If your company is to  make $5,000 per year profit from
                    this venture, what sales (in $ and units) are required? 
              3.    Your company  aims for  a 25%  margin on  sales, before
                    tax.   What sales  (in  $ and  units)  are required  to
                    achieve this? 
              4.    What are the breakeven volumes if unit cost is $1.50 or
                    $3.00, and unit revenue is $4.00 or $6.00? 
              5.    Repeat the above with annual overheads of $15,000. 

              You know  that the  V.P. likes to  see graphs  of sensitivity
         analyses, so you  decide to attack questions 4  and 5 graphically.
         The following  are the keystrokes  required to produce  answers to
         the questions posed, once you've loaded the worksheet: 

         Keystrokes Comments 

         {ENTER}             Select the Input option from the main menu 
         2 {DOWN}            Enter the unit cost for case A 
         5 {DOWN}            Enter unit revenue 
         10000 {DOWN}        Enter fixed cost 
         5000 {DOWN}         Enter required profit before tax 


         08/21/84                                                PROFIT - 12







         25 {DOWN}           Enter required margin before tax 
         2 (DOWN}            Enter corresponding data for case B 
         5 {DOWN} 
         15000 {DOWN} 
         5000 {DOWN} 
         25 {ENTER} 

         {Esc}               Return to main menu. 

              At  this point,  the screen  shows the  results of  the basic
         calculations.  They are as follows: 

                                   Case A        Case B 
         Fixed Cost               $10,000       $15,000 
         Breakeven Units            3,333         5,000 

         Units for $5,000 PBT       5,000         6,666 
         $ sales for $5,000 PBT   $25,000       $33,333 

         Units for 25% margin       5,714         8,571 
         $ sales for 25% margin   $28,571       $42,857 

              You can now proceed to the graphical analysis for questions 4
         and 5.  The keystrokes are as follows: 

         Keystrokes          Comments 

         {Alt} M             If required, to invoke the main menu. 


         G                   Select the Graph option from the main menu 

         {ENTER}             Select case A 

         U                   Plot   unit  sales   on   the  vertical   axis
                             (dependent factor) 

         C                   Plot unit cost on the horizontal axis (control
                             factor). 

         1.5 {ENTER}         Specify the  low limit for the  control factor
                             (unit cost).   Note that the graph  scale will
                             actually begin at 1.4, not 1.5.  The reason is
                             that  the   macro  decides   upon  0.2   as  a
                             convenient scale  increment, and both  the low
                             and high limits of  the graph are multiples of
                             the chosen increment. 

         3 {ENTER}           Specify high limit for unit cost. 

                                  At this point, there is a pause while the
                             macro calculates  and displays the  graph.  It
                             shows  that  breakeven  units fall  to  around
                             2,850 if the unit cost falls to $1.50.  If the
                             unit cost  is as high as  $3.00, the breakeven
                             units are 5,000.  Of  course, with unit cost =


         08/21/84                                                PROFIT - 13







                             $2.00, the  breakeven units  are 3,333,  as we
                             saw on the main screen. 

         {ENTER}             To return  to the  menus when  you've finished
                             examining the graph. 

         Y                   To save this  graph on disk, so you  can get a
                             printed copy. 

         bevola1 {ENTER}     Select a filename for the graph. 

         {Alt} M             Re-invoke the  main menu  after the  graph has
                             been saved. 

         G                   Select graph option. 

         A                   Case A. 

         U                   Plot unit sales ... 

         R                   against unit revenue. 

         4 {ENTER}           Low limit for unit revenue. 

         6 {ENTER}           High limit for unit revenue. 

                                  The   graph  that   is  displayed   shows
                             breakeven units  = 4,000  when unit  revenue =
                             $4.00, falling  to 2,500  when unit  revenue =
                             $6.00. 

         {ENTER}             return to menu when finished with graph. 

         Y                   Save this graph on disk for future printing. 

         bevola2 {ENTER}     Name of graph save file. 

         {Alt} M             Re-invoke menu when graph has been saved. 

         G B U C             Select  graphs;  plot breakeven  units  versus
                             unit cost for case B. 

         1.5 {ENTER}         Low limit for unit cost. 
         3 {ENTER}           High limit for unit cost. 

                                  The graph  shows breakeven units  = 4,300
                             when unit cost =  $1.50, and breakeven units =
                             7,500 when unit cost = $3.00. 

         {ENTER}             When finished viewing graph. 

         Y bevolb1 {ENTER}   Save graph on disk. 

         {Alt} M             Re-invoke menu. 

         G B U R             Graph breakeven units against unit revenue for


         08/21/84                                                PROFIT - 14







                             case B. 

         4 {ENTER}           Low limit for unit revenue. 
         6 {ENTER}           High limit for unit revenue. 

                                  The graph shows  breakeven units = $7,500
                             when  unit  revenue  is $4.00,  and  breakeven
                             units = 3,800 when unit revenue is $6.00. 

         {ENTER}             When finished viewing graph. 

         Y bevolb2 {ENTER}   Save graph on disk. 

         Q                   To leave  the Graph  Save menu, and  return to
                             1-2-3 READY mode. 

              You can now use the  PrintGraph program to obtain hard copies
         of the four graphs.  Refer to the 1-2-3 manual for instructions on
         how to use this program. 







































         08/21/84                                                PROFIT - 15







         Menu Tree for PROFIT Worksheet 

         Input    -  Input data and calculate results 

         Blank    -  Blank out input and result areas 
         .  A_Case   -  Blank out column for case A 
         .  B_Case   -  Blank out column for case B 
         .  C_Case   -  Blank out column for case C 
         .  D_Case   -  Blank out column for case D 
         .  Quit     -  Do not blank out any column.  Return to main menu. 

         Graph    -  Display graphs 
         .  A_Case   -  Graph data for case A. 
         .  .  (see below) 
         .  B_Case   -  Graph data for case B. 
         .  .  (see below) 
         .  C_Case   -  Graph data for case C. 
         .  .  (see below) 
         .  D_Case   -  Graph data for case D. 
         .  .  (see below) 

         . Each of the above choices leads to the following menu: 
         .  .  Cost     -  Dependent Factor is: cost per unit 
         .  .  .  (see below) 
         .  .  Revenue  -  Dependent Factor is: revenue per unit 
         .  .  .  (see below) 
         .  .  Fixed    -  Dependent Factor is: fixed costs 
         .  .  .  (see below) 
         .  .  Profit   -  Dependent Factor is: $ profit before tax 
         .  .  .  (see below) 
         .  .  Margin   -  Dependent Factor is: profit margin % 
         .  .  .  (see below) 
         .  .  Sales    -  Dependent Factor is: $ sales 
         .  .  .  (see below) 
         .  .  Units    -  Dependent Factor is: unit sales 
         .  .  .  (see below) 
         .  .  Quit     -  Return to main menu 

         .  . Each of the above choices leads to the following menu: 
         .  .  .  Cost     -  Control Factor is: cost per unit 
         .  .  .  Revenue  -  Control Factor is: revenue per unit 
         .  .  .  Fixed    -  Control Factor is: fixed costs 
         .  .  .  Profit   -  Control Factor is: $ profit before tax 
         .  .  .  Margin   -  Control Factor is: profit margin % 
         .  .  .  Sales    -  Control Factor is: $ sales 
         .  .  .  Units    -  Control Factor is: unit sales 
         .  .  Quit     -  Return to main menu 

         .  .  . The following menu is displayed after the graph: 
         .  .  .  .  No    -  Do not save this graph on disk 
         .  .  .  .  Yes   -  Save graph (for future printing) 

         Print    -  Print input data and results 

         Agenda   -  Return to worksheet selection agenda 
         .  No       -  Do not erase this worksheet.  Return to main menu 


         08/21/84                                                PROFIT - 16







         .  Yes      -  Erase this worksheet and go to worksheet agenda 

         Quit     -  Exit to 1-2-3 READY mode. 























































         08/21/84                                                PROFIT - 17


```
{% endraw %}

## ROR.DOC

{% raw %}
```





         ROR - Rate of Return Calculator 


         1.  INTRODUCTION 

              This worksheet calculates the rate  of return of a cash flow.
         Rate  of  return  is  notionally equivalent  to  the  interest  or
         discount rate that reduces the net  present value of the cash flow
         to  zero.  (The  net present  value of  a cash  flow at  different
         discount rates is calculated by the NPV worksheet.) 

              Rate of  return is one  measure of the  value of a  cash flow
         that takes  into account the time  value of money (NPV  is another
         measure).   The  higher the  rate  of  return,  the more  you  can
         discount  future earnings  and  costs before  the project  becomes
         unprofitable. 

              There are many ways to calculate rate of return, depending on
         your assumptions  about financing sources and  profit reinvestment
         opportunities.   This  worksheet  uses  three  methods,  described
         below.  The PAYOUT worksheet (on  the Volume 1B disk) calculates a
         project payout  schedule, given the  cash flow and  interest rates
         for loans and investments.  That  worksheet takes into account the
         positive and negative  balances accruing to the  project.  It also
         has  a goal-seeking  option to  find the  loan interest  rate that
         reduces the project closing balance  to zero.  This is another way
         of calculating a rate of return for the project. 


         2.  CALCULATION METHODS 

         2.1 Introduction 

              As stated above,  this worksheet
         uses three methods.   Each method corresponds to  a different set
         of  assumptions about  financing sources  and profit  reinvestment
         opportunities.  The three
         methods typically lead to different values for the rate of return.
         This does  not mean that  one is right  and the others  are wrong;
         each  one is  correct according  to its  set of  assumptions.  The
         following descriptions include a  discussion of the advantages and
         disadvantages of each method of calculation. 

         2.2 Internal Rate of Return 

              The first (and simplest) method of calculating rate of return
         assumes that loans and investments make the same rate of return as
         the project being  evaluated.  For example, if the  rate of return
         calculated  by this  method is  30%,  the assumption  is that  the
         interest rate  on money borrowed  to finance this project  and the
         yield  obtained  by reinvesting  the  profits  are both  30%  too.
         Nevertheless, this  method of  calculating rate  of return  is the
         most  widely used.   The result  of this  method is  known as  the
         internal rate  of return  (IRR) because it  makes no  reference to
         factors (such as discount or  reinvestment rates) outside the cash
         flow. 


         09/09/84                                                   ROR - 1








              The IRR method may fall down  when the cash flow is not 'well
         behaved'.  The typical well-behaved cash flow has cash outflows at
         the beginning, followed by cash  inflows.  When there is more than
         one change of sign in the  cash flow values, this method may yield
         multiple rates of return.  Such cash flows can occur (for example)
         in income acceleration projects in the resource industries.  Here,
         an initial  investment leads  to an increased  cash flow  in early
         years, but a reduced cash flow (over the 'do nothing' alternative)
         in later  years as  the accelerated  resource depletion  takes its
         toll.  The cash flow for this project (compared with 'do nothing')
         starts out  negative, becomes  positive, then returns  to negative
         again.  Application  of the simple  method can yield two  rates of
         return -  one reasonable, and  one ridiculously large.   The large
         rate is mathematically correct, but  assumes one could obtain that
         same rate of  return by reinvesting the profits  from the project,
         which is not usually practical. 

         2.3 Modified Internal Rate of Return 

              The second method avoids the  multiple rate of return problem
         by discounting all cash outflows to  a single value in the opening
         period using a specified discount  rate.  This single value may be
         though of as the amount that would  have to be invested now at the
         discount rate to support the outflows.  The cash outflows are then
         replaced by this single outflow in  period zero to give a modified
         cash flow (which  is then 'well behaved').  The rate  of return of
         this cash  flow is  calculated using  the method  described above.
         The assumption  behind this method  is that an amount  is invested
         now at the discount rate and the proceeds are used to finance the
         cash outflows.  The  rate of return is the rate  which this amount
         would have  to yield  (if invested)  in order  to return  the same
         positive  cash flows  (in  amount  and timing)  as  the cash  flow
         stream. 

         2.4 Financial Management Rate of Return 

              The third method goes one  step further.  It begins, like the
         second method, by discounting all  cash outflows to a single value
         in the opening period using  the specified discount rate.  Then it
         calculates the amount that would accrue in the final period if all
         cash inflows were reinvested at  a specified reinvestment rate for
         the remainder of the project duration.  The rate of return by this
         method is  the rate which the  single value in the  opening period
         would have to  yield (if invested) in order to  accrue to the same
         amount as  the reinvested  cash inflow values  yield in  the final
         period. 

         2.4 General Comments 

              There are  many sets  of assumptions  which one  could defend
         when evaluating  a project.  Each  of the methods  described above
         has its  flaws.  The first  assumes that surpluses yield  the same
         rate of return if reinvested (though  supluses do not occur if the
         rate  of return  is applied  to  a well-behaved  cash flow).   The
         second  and  third methods  do  not  take  proper account  of  the


         09/09/84                                                   ROR - 2







         deficits and surpluses that occur  during the life of the project.
         The PAYOUT worksheet  calculates a payout schedule  for a project,
         given its  cash flow and  borrowing and reinvestment  rates.  This
         schedule calculates the closing balance  for each period, and uses
         the appropriate  rate depending  on the sign  of the  balance.  In
         this respect,  it may be thought  of as 'more accurate'.   It also
         has a  goal-seeking option, which  yields the borrowing  rate that
         reduces  to zero  the closing  balance  in the  final period  (ie.
         produces  a breakeven  project).   Experimenting  with the  PAYOUT
         worksheet can give a better  understanding of rate of return.  The
         PAYOUT  worksheet is  contained  on  the Volume  1B  disk in  this
         series. 


         3.  USING ROR 

         3.1 Overview 

              The main menu of the ROR worksheet offers seven options (plus
         Quit).  They are as follows: 

         Input 
               This option  leads to  a menu  of the  items you  may input.
               This sub-menu  allows you to  enter the cash flow  values by
               period, the number  of periods corresponding to  a year, the
               discount rate  for cash outflows, the  reinvestment rate for
               cash inflows, and  a first estimate of the  internal rate of
               return.   The  input process  is  described  in more  detail
               below. 

         Blank 
               This option  blanks out  all input  data and  results (after
               receiving confirmation that this is what you intend).  It is
               useful  for  clearing  the   worksheet  before  entering  an
               entirely new set of data. 

         Calc 
               The calculate option performs  all calculations and displays
               the three rates of return. 

         Results 
               This shows  the results of  the calculations.  If  there are
               more than  eleven periods in  the cash flow (ie.  it extends
               beyond the bottom  of the home screen) this  option yields a
               scroll menu that  allows you to scroll the  cash flow column
               up and down to view the entire cash flow. 

         Graph 
               Two graphs are  available in this worksheet.   One shows the
               cash flow and cumulative cash flow.  The other shows the net
               present value of  the cash flow at discount  rates between 0
               and 100 percent.  Both graphs can be displayed in monochrome
               or color,  as line  charts, bar  charts, or  scatter (points
               only) graphs. 




         09/09/84                                                   ROR - 3







         Print 
               The print option prints the cash flow, cumulative cash flow,
               and results area. 

         Agenda 
               If you select  this option (and confirm  it when requested),
               the current worksheet is lost  and replaced by the worksheet
               selection  agenda.    From  there,  you  can   load  another
               worksheet.  Note confirmation is required before this option
               proceeds because it overwrites the worksheet in memory. 

         3.2 Input Details 

              The Input  option in the main  menu leads to a  sub-menu with
         five  options -  Cashflow,  Periods/Yr,  DiscRate, ReinvRate,  and
         EstIRR.  Each option allows you to enter part of the data. 

              The Cashflow option allows you  to enter cash flow values, by
         period.  This  option places the  cell pointer  at the top  of the
         cash flow column,  and moves it down one cell  each time you press
         the Enter key.  If you want  to enter the entire cash flow, simply
         type each number  in turn and press the Enter  key after each one.
         Please note the following: 

              -   A value  must be  entered  for each  period covering  the
                  entire  duration of  the project  and starting  at period
                  zero.  If the cash flow  value for a particular period is
                  zero, enter zero.  Do not leave the cell blank. 

              -   Period  zero is  now,  period one  is  one period  (year,
                  month, or whatever) hence. 

              -   Cash outflows  must be entered as  negative numbers; cash
                  inflows must be entered as positive numbers. 

              If you don't want to enter  the whole cash flow (for example,
         if you want to adjust a  cash flow you've already entered) you may
         use the  cursor movement  keys to  place the  cell pointer  on any
         number you want to change, and re-type it in normal 1-2-3 fashion.
         When you press the Enter key, the macro will move the cell pointer
         down one row. 

              The macro  which drives  this process has  no way  of knowing
         when you've  finished entering  or changing  data.  When  you have
         finished, you must break out of  the macro and re-invoke the input
         menu.  To do this, hold down the Ctrl key and press the Break key.
         The CTL flag at the top of the screen will go out.  Then hold down
         the Alt key and press I to invoke the input menu. 

              The  Periods/Yr option  accepts  the number  of periods  that
         correspond to a year.  If you  have annual data, you must enter 1.
         If you  have monthly data,  enter 12.   This parameter is  used to
         convert the discount and reinvestment  rates you enter from annual
         rates to rates  per period.  It is also used  to convert the rates
         of return  from rates  per period to  annual rates.   Whatever the
         periods your  data represents,  you always  enter rates,  and read


         09/09/84                                                   ROR - 4







         results as annual rates. 

              The third  choice in the  input menu is DiscRate.   It allows
         you to enter  the annual rate used to discount  cash outflows back
         to period zero. 

              The fourth choice  is ReinvRate.  It allows you  to enter the
         annual re-investment rate  used to accumulate the  future value of
         the cash inflows in the final period. 

              The final option is EstIRR.   Normally, you should leave this
         at zero, and  the worksheet will choose its own  first estimate of
         the internal  rate of return.   The worksheet will choose  a value
         which is  close to  the first  change of sign  of the  net present
         value.  If the graph of net  present value crosses the X-axis more
         than once,  there is more  than one  internal rate of  return.  In
         this  case, you  may enter  a discount  rate close  to the  second
         crossing, and the worksheet will calculate its rate of return 

              The last three options expect to receive only one number.  To
         enter the  number, simply select  the option from the  input menu,
         type the number, and press the Enter key. 

         3.3 Graph Details 

              This worksheet can produce two different graphs on either the
         color or  monochrome display.  Each graph  can take the form  of a
         line  graph, a  bar  chart,  or a  scatter  graph (points  without
         connecting lines).   These are  selected by means  of a  menu with
         four choices. 

              The Cashflow graph displays the cash flow and cumulative cash
         flow by period.  The form of the graph will be the same as the one
         that  was last  displayed.  The  NPV graph  shows the  net present
         value against  the discount rate in  steps of 5% from  0% to 100%.
         It shows  how the net present  value behaves as future  values are
         discounted more  or less heavily.   The discount rate (if  any) at
         which  the graph  crosses  the X-axis  represents  the rate  which
         reduces the net  present value of the cash flow  to zero.  This is
         known as the internal rate of return of the cash flow. 

              The Type option presents a sub-menu from which you can select
         the  form of  the graph.   The three  choices are  Line, Bar,  and
         Scatter.  Each choice  re-displays the last graph  in the selected
         form, then returns to the graph menu. 

              The fourth choice - Options -  allows you to choose the Color
         or monochrome (B&W)  monitor for the display.   Again, each choice
         re-displays the last graph on the selected device. 


         4.  EXAMPLES 

         4.1 A Simple Investment 

              This  example illustrates  the use  of this  worksheet for  a


         09/09/84                                                   ROR - 5







         well-behaved cash  flow.  You have  been given the  opportunity to
         purchase a note  for $15,000.  The note will return  $5,000 at the
         end of the first  year, $7,000 at the end of  the second year, and
         $9,000 at the end of the third year.  What is the internal rate of
         return of  this investment?   Assuming you  plan to  re-invest the
         returns from the note at 13% until the end of the third year, what
         is the  rate of return  of this plan  over the three  year period.
         (Note, method two does not apply in this case, because there is
         only one cash outflow in period zero.) 


         Keystroke       Comments 

         {ENTER}         Select the Input option from the main menu. 

         P 1 {ENTER}     Number of periods per year (the data is annual) 


         C               Select the Cashflow option.  The cell pointer will
                         go to the top of the cash flow column. 

         -15000 {ENTER}  Value  for period  zero  (now).  Since  this is  a
                         payment (ie.  a cash outflow)  it is entered  as a
                         negative number.   When you  press the  ENTER key,
                         the cell pointer  will move down to  the next cell
                         in the column. 

         5000 {ENTER}    Value returned at the end of the first year.  This
                         is a cash inflow. 

         7000 {ENTER}    Value returned at the end of the second year. 

         9000 {ENTER}    Value returned at the end of the third year. 

         {Ctrl}{Break}   To terminate  the input  loop, hold down  the Ctrl
                         key and press the Break  key. 

         {Alt} I         To re-invoke the input menu, hold down the Alt key
                         and press I. 

         R 13 {ENTER}    Re-investment rate, as an annual percentage. 

         Q               Return to the main menu. 

         C               Select the  Calc option.  The rate  of return will
                         be calculated using the three methods. 

         G               Select the Graph option from the main menu. 

         text {ENTER}    Whenever you enter the graph menu, the system will
                         prompt you  to enter a  second title line  for the
                         graphs.  You  may leave this line  blank, or enter
                         any short description.  To  get rid of an existing
                         description before typing a new one, press the Esc
                         key. 



         09/09/84                                                   ROR - 6







         N               This option  displays a  graph of the  net present
                         value against  the discount rates.  Press  any key
                         to return to the graph menu. 

         T L             If the graph is not  already a line graph, you can
                         go to the  Type sub-menu to specify  a line graph.
                         The graph will be  re-displayed.  Press any key to
                         return to the graph menu. 


         4.2 An Accelerated Income Project 

              Many  projects  in  the   resources  industry  are  aimed  at
         accelerating resource  recoveries.  This  leads to  increased cash
         flows  in early  years,  followed by  compensating decreased  cash
         flows in later years.  Thus the  cash flow consists of a series of
         outflows (the  investment), followed by  a series of  inflows (the
         increased cash flows) followed by  another series of outflows (the
         reduced cash flows).  This is not a 'well-behaved' cash flow. 

              You  are  considering  the  value  of  an  enhanced  recovery
         project.  The  immediate cost  of this project  is $600.   It will
         increase cash  flows in the  next three  years by $800,  $500, and
         $200 respectively.  In  the three years after  that, however, cash
         flows will be  reduced by $200, $500, and  $800 respectively.  You
         need to  know the  rate of  return of  this project.   Future cash
         outflows can be discounted at 10% p.a., and you can re-invest cash
         inflows at 18% p.a. 

         Keystroke       Comments 

         {ENTER}         Select the input option from the main menu. 

         P 1 {ENTER}     Number of periods  per year (the data is
                         annual). 

         C               Select the  Cashflow option  from the  input menu.
                         The cell  pointer will go  to the top cell  of the
                         cash flow column. 

         -600 {ENTER}    Initial  investment (in  period  zero).  The  cell
                         pointer will move down to the next period when you
                         press the Enter key. 

         800 {ENTER}     Increases in cash flows in the first three years. 
         500 {ENTER} 
         200 {ENTER} 

         -200 {ENTER}    Decreases in cash flows in the next three years. 
         -500 {ENTER} 
         -800 {ENTER} 

         {Ctrl}{Break}   Hold down the Ctrl key  and press the Break key to
                         break out of  the macro.  The CTL flag  at the top
                         of the screen will go out. 



         09/09/84                                                   ROR - 7







         Alt I           To re-invoke the input menu, hold down the Alt key
                         and press I. 

         D 10 {ENTER}    Select the  DiscRate option  in the input  menu to
                         enter  the rate  used  to  discount negative  cash
                         flows back to period zero. 

         R 18 {ENTER}    Select the ReinvRate option in the input menu, and
                         enter  the re-investment  rate  for positive  cash
                         flows. 

         Q               Return to the main menu. 

         C               Invoke the calculations. 

                   The results  of the  calculation show that  the internal
               rate of  return is 24%.   But if  you can only  discount the
               future cash outflows  at 10% p.a.  (instead of  the 24% that
               IRR assumes), the rate of  return falls to almost zero.  And
               even if you can guarantee an 18% return on the cash inflows,
               the rate of return is still only 13.05%.  At this point, you
               might be intrigued about this cash flow.  One way to look at
               it  is to  examine  its net  present  value under  different
               discount rates.  To do this, enter the following: 

         G               Select the graph option. 

         text {ENTER}    Each time you  invoke the graph menu,  it asks you
                         to  enter the  second title  line for  the graphs.
                         Enter  any   short  description.   To   remove  an
                         existing  description  before  typing a  new  one,
                         press the Esc key. 

         N               Select the NPV option in the graph menu to display
                         a graph  of  the  net present  value  against  the
                         annual discount rates.  Press any key to return to
                         the graph menu. 

         T L             Select a  line graph.  The graph  will immediately
                         be re-displayed. 

                   This graph  shows that  the net  present value  peaks at
               under $50  when the discount  rate is around 40%.   But this
               assumes  that  you   can  get  a  40%  rate   of  return  on
               investments,  which is  unlikely.   And even  then, the  net
               present  value  is  very  small.   Clearly  this  is  not  a
               profitable project, even though  the internal rate of return
               is impressive.  You will also see that the net present value
               curve crosses the X-axis at  two points.  The worksheet will
               converge on  the leftmost  point, unless  you enter  a first
               estimate  of  the rate  of  return  that  is closer  to  the
               rightmost one.  To find the  rightmost rate of return, enter
               (say)  65 for  EstIRR  in  the input  menu,  and repeat  the
               calculations. 

              To exit from the menus, type the following: 


         09/09/84                                                   ROR - 8








         Q               Return to the main menu. 

         Q               Exit to 1-2-3  READY mode.  If you  want to return
                         to the main  menu, hold down the Alt  key and type
                         M. 




















































         09/09/84                                                   ROR - 9







         Menu Tree for ROR Worksheet. 

         Input    -  Enter Cashflow Values and Discount/Reinvestment Rates 
         .  Periods/Yr  -  Enter number of periods per year 
         .  Cashflow    -  Enter cashflow values 
         .  DiscRate    -  Enter annual discount rate for cash outflows 
         .  ReinvRate   -  Enter annual reinvestment rate for cash inflows 
         .  Quit        -  Return to main menu 

         Blank    -  Clear Input Fields 
         .  No       -  Cancel "Blank" Command 
         .  Yes      -  Yes, Erase all input 

         Calc     -  Calculate Results 

         Results  -  Show Results 
         .  Down     -  Scroll down one screen 
         .  Up       -  Scroll up one screen 
         .  Quit     -  Return to main menu 

         Graph    -  Display Graphs 
         .  Cashflow -  Display cashflow and cumulative cashflow 
         .  NPV      -  Display net present value vs. discount rate 
         .  Type     -  Select line graph, bar chart, or scatter plot 
         .  .  Line     -  Display line graph 
         .  .  Bar      -  Display bar chart 
         .  .  Scatter  -  Display scatter graph 
         .  Options  -  Choose color or monochrome monitor 
         .  .  Color    -  Display graphs in color 
         .  .  B&W      -  Display graphs in monochrome 
         .  Quit     -  Return to Menu 

         Print    -  Print Results 

         Agenda   -  Return to Worksheet Selection Agenda 
         .  No       -  Do not clear this worksheet.  Return to main menu 
         .  Yes      -  Clear this worksheet.  Go to selection agenda 

         Quit     -  Exit to 1-2-3 READY mode 



















         09/09/84                                                   ROR - 10


```
{% endraw %}

## SREGR.DOC

{% raw %}
```





         SREGR - Simple Linear Regression 


         1.  INTRODUCTION 

              Linear regression is a method  of finding the "best" straight
         line through  a set  of points.   Each point  is described  by two
         values, and if there is  a linear relationship between the values,
         the points  will lie close  to a straight  line when plotted  on a
         graph.   For  example,  we  might look  for  such  a  relationship
         between: 

            -  sales of  the IBM PC  and sales of  the PC version  of Lotus
               1-2-3 

            -  sales of Lotus 1-2-3 and of books about 1-2-3 

            -  prime interest rate and business bankruptcies 

              In  each of  the above  examples, we  might be  interested in
         estimating the  value of  the second item  (Y, the  dependent var-
         iable)  given a  value  for  the first  item  (X, the  independent
         variable).  The SREGR worksheet will calculate the equation of the
         best-fit  straight line  through  pairs of  X-Y  values, and  will
         calculate estimates  of Y,  given X values,  from the  line.  This
         worksheet is  a subset  of the LREGR  worksheet (contained  on the
         Volume 1B disk).  It does  not calculate any confidence limits, or
         the significance of the Student's  t value for the regression.  As
         a result,  it  can  accept  more  pairs  of  input  values  for  a
         particular  main memory  configuration, and  it calculates  faster
         than LREGR. 

              The worksheet accepts pairs of values (labelled Y and X), and
         calculates the values  of a and b in  the equation Y = a +  b X of
         the  best-fit straight  line.  a is  often  called the  intercept,
         because it is the point at which the line intercepts the Y-axis on
         a graph, and b is the slope. 

              In  addition  to calculating  the  intercept  and slope,  the
         worksheet calculates two of the  parameters a statistician uses to
         appraise the quality of the fit.  These are: 

            -  the correlation  coefficient (r), which measures  the degree
               of association between  X and Y. The value of  r always lies
               between  1   and  -1.    A  value   of  zero   indicates  no
               relationship;  a  value of  +1  or  -1 indicates  a  perfect
               relationship.  The correlation  coefficient is negative when
               larger values of X are associated with smaller values of Y. 

            -  the value of  Student's t for the hypothesis  that the slope
               (b) is  zero (ie.  changing the  value of  X doesn't  have a
               significant effect on the value of Y).  The larger the value
               of t,  the less  we are inclined  to accept  the hypothesis.
               Note the SREGR worksheet does not calculate the significance
               of this t-value in probability terms (but you can look it up
               in standard statistical tables). 


         08/21/84                                                 SREGR - 1








              Statistical tables exist for  the correlation coefficient and
         Student's  t, which  give the  probability that  such a  value (or
         better) could be obtained purely by chance from random data. 

              For the purpose  of estimating the coefficients (a  and b) of
         the regression equation, the worksheet uses all X-values for which
         Y-values  are  supplied.   These  X-Y pairs  must  be  entered  in
         consecutive  rows,  beginning  at  the  top  of  the  input  area.
         However, you  may enter more  X-values below the ones  paired with
         Y-values.  The  worksheet estimates the Y-values  corresponding to
         all the X-values you enter.  This is useful if you want to use the
         regression line as a forecasting pr estimating tool. 


         2.  USING SREGR 

              The main menu of SREGR  offers you seven choices (plus Quit).
         They are as follows: 

         Input 
               This  choice   allows  you  to   enter  data  to   feed  the
               calculations, and to change the  limit on the number of data
               items you may  input.  There are two types of  data: the raw
               X-Y pairs  from which  the regression  line is  derived, and
               additional X  values for  which Y estimates  are calculated.
               Note that changing the maximum number of data items involves
               erasing all input  data.  Therefore, if you  think you might
               need  more space  than the  worksheet initially  allows (300
               pairs), you  should change  the limit  before you  enter any
               data. 

         Blank 
               You should choose this option  if you have finished with the
               data in the worksheet and want  to start again with an empty
               worksheet.  Note  that this option wipes  out all calculated
               results as  well as  the raw data.   (You must  confirm this
               choice to reduce the risk of accidental erasure.) 

         Calc 
               Make this choice  when you want to  calculate or recalculate
               the results.  If you have  changed data or entered more data
               since  you  last  calculated, you  must  recalculate  before
               displaying new results or graphs. 

         Results 
               This option guides you through  the various results areas in
               the worksheet.  The  main results are all shown  in the home
               screen.  But there is a  screen full of intermediate results
               (averages and sums of  squares, for example).  And alongside
               the columns in which you entered the raw data are calculated
               Y estimates.  To  print your results, select  Print from the
               main menu (see below). 

         Graph 
               One  of the  clearest ways  to show  a linear  regression is


         08/21/84                                                 SREGR - 2







               though a graph.  This worksheet  offers one graph - a simple
               one showing the original data points and the regression line
               through them. 

         Print 
               The print  option allows you  to send selected areas  of the
               worksheet  to your  printer.  You  can select  two different
               areas:  the final  and  intermediate results  areas (as  one
               page), and the raw data and Y estimates. 

         Agenda 
               If you select  this option (and confirm  it when requested),
               the  current worksheet  is  lost and  replaced  by the  main
               agenda.  Then you can load  another worksheet from the disk.
               Note confirmation  is required before this  option proceeds,
               because it will overwrite the worksheet in memory. 

         2.1 Input Details 

              The input  phase allows  you to  enter data  in a  variety of
         ways.  The input menu has five choices (plus Quit). 

              The first and  second choices (XYPairs and  YXPairs) are very
         similar.   If your  source  data  is arranged  as  two columns  of
         numbers, these  choices will  handle all  pointer movement  as you
         enter  your data  row-by-row.  If  the X  column is  on the  left,
         select XYPairs;  if the Y column  is on the left,  select YXPairs.
         Then enter your  data one row at  a time.  Type the  number on the
         left  first, then  the number  on the  right.  After  each number,
         press the ENTER  key.  Note that in the worksheet  the Y column is
         always  on   the  left.   Selecting  XYPairs   or  YXPairs  merely
         determines which column receives the first number of each pair you
         type.  These two options (and Est-X) are convenient if you want to
         use the numeric pad on your keyboard to enter the numbers, because
         they perform all  the necessary cursor movement for  you.  You can
         press the  Num Lock key to  disable the cursor movement  keys, and
         use the numeric pad for numbers.   (Remember to press the Num Lock
         key again when you've finished  entering your data, to re-activate
         the cursor  movement keys.) When  you have entered all  your data,
         hold down the Ctrl key and  press Break.  This will stop the macro
         and exit  to 1-2-3  READY mode.   Then hold down  the Alt  key and
         press I to return to the input menu.  If you choose either XYPairs
         or YXPairs when  you have already entered some data,  the new data
         will be added to the bottom  of the existing pairs (but overlaying
         any unpaired  X values for  which Y estimates were  required).  To
         get rid of existing pairs, you  must use the Blank option from the
         main menu. 

              The third choice is Est-X.  It  allows you to add a column of
         unpaired X  values below  the existing  data.  The  worksheet will
         calculate a Y estimate for each  unpaired X value you enter.  Type
         each value for X, and press  the ENTER key.  When you have entered
         all the values, hold down the Ctrl key and press Break.  This will
         stop the macro  and exit to 1-2-3 READY mode.   Then hold down the
         Alt key and press I to return to the input menu. 



         08/21/84                                                 SREGR - 3







              The fourth choice  uses the standard 1-2-3  Range Input facil
         ity.  In some respects this is convenient, because it confines the
         cell  pointer to  the  unprotected  cells in  the  X  and Y  input
         columns.  And  pressing the  Esc key returns  you directly  to the
         input menu.  However, you are  responsible for all cursor movement
         within the input  area.  So you cannot easily use  the numeric pad
         to  enter your  numbers with  this  option.  Remember  to enter  Y
         values on the  left (column B), and X values  on the right (column
         C). 

              The final  choice (except Quit)  in this menu is  Number.  It
         allows you  to set the maximum  number of input values.   When the
         SREGR worksheet  is first loaded,  it is  limited to 300  pairs of
         input values.  If  your machine has less than 256K  of memory, you
         will not be  able to enter even this many  pairs without a 'Memory
         Full' error.   However, if your  machine has more memory,  you may
         use this option to increase the amount of data you can input.  You
         must confirm  your intention to  use this option, because  it will
         erase any data in the input area. 

              There will  come a time when  you have entered data  into the
         worksheet, but  you need to  re-size the input area  (for example,
         because you underestimated the amount  of data).  When you re-size
         the area,  the worksheet will erase  your input.  But you  can use
         the /File Xtract option of 1-2-3 to save the data you have entered
         and avoid re-typing it.  Here's how. 

                   To save the input data,  first exit to 1-2-3 READY mode,
               then press  the Goto  key (F5), type  the word  'input', and
               press the ENTER key.  You will find yourself at the top left
               corner of  the input  area.  Then  type the  following 1-2-3
               command (initial letters only): 

                   /File Xtract Values  

               1-2-3 will  prompt you for a  file name.  Choose a  name for
               the data,  type it, and  press ENTER.   If a file  with this
               name  already  exists, 1-2-3  will  ask  you  if it  may  be
               replaced (ie.  if 1-2-3  may overwrite  it).  When  you have
               chosen the file name, 1-2-3 asks you to specify the range to
               be  saved.   Press the  keys  Right  End Down  in  sequence,
               followed by the  ENTER key.  Here, Right means the  6 key on
               the numeric pad (in cursor mode),  and Down means the 2 key.
               1-2-3 will then save your data  on disk, and you may proceed
               to re-size the input area.  (Hold down the Alt key and press
               M to return to the main menu.) 

                   When you have re-sized the  input area, you can retrieve
               your data from  the disk by exiting to 1-2-3  READY mode and
               moving  to  the  top  left  corner of  the  input  area  (as
               described  above).  Then  type the  following 1-2-3  command
               (initial letters only): 

                   /File Combine Copy Entire-file 

               1-2-3 will present  a menu of the files on  disk, from which


         08/21/84                                                 SREGR - 4







               you should select  the one you saved (or type  its name) and
               press the  ENTER key.   1-2-3 will  then retrieve  your data
               from the disk into the worksheet.  Hold down the Alt key and
               press M to return to the main menu. 

              There is one more option  available to you for inputting data
         to  this worksheet.   That  is  to use  the  1-2-3 commands.   For
         example, you may  already have the input data  for your regression
         analysis stored in a worksheet on  disk.  If the data occupies two
         adjacent  columns in  the worksheet,  with  Y values  in the  left
         column, you can use 1-2-3's /File Combine Copy command to copy the
         data into the LREGR worksheet.  To  do this, simply choose Quit at
         the main menu, press the Goto key (F5), type the word 'input', and
         press ENTER.  You will find yourself at the top left corner of the
         data input area.   Now you can type /fcc and  follow the remaining
         1-2-3 instructions  to copy the  data from the worksheet  on disk.
         When  you have  finished, hold  down the  Alt key  and press  I to
         return to  the input menu.   Note, do not  use /Move to  move data
         around  in  the  worksheet.   Moving   data  into  a  named  range
         invalidates the range name along  with any formulas that depend on
         it.   You  will  probably   destroy  the  worksheet's  ability  to
         calculate properly if you use /Move commands in it. 

         2.2 Graph Details 

              The  macro   that  displays  the  graph   in  this  worksheet
         deliberately  avoids setting  many of  the graph  parameters.  For
         example, the labels for the X-  and Y- axes are initially set when
         the worksheet is loaded, and are  not changed.  If you wish to use
         your own labels,  exit to 1-2-3 READY mode and  change them.  Then
         hold down the Alt key and press M to return to the main menu.  The
         following  is a  list of  the graph  options that  are set  by the
         macro.  Attempts to reset these options will be futile. 

              - Graph subtitle 
              - Graph type and ranges 
              - Legends for ranges 
              - Range formats 

              To get  a printed copy of  any graph, first display  it using
         the graph  menu.  The last-displayed  graph is called  the current
         graph.  Then exit to 1-2-3 READY mode.  Press the Graph key (F10),
         and verify the  graph.  If you wish, you may  use the 1-2-3 /Graph
         commands  to modify  the  graph before  printing.   Then type  the
         following 1-2-3 command (initial letters only): 

              /Graph Save 

         1-2-3 will ask you  to specify a file name, and  save the graph in
         that file.  You  may then use the PrintGraph program  to print the
         graph.  For  instructions on  how to  use the  PrintGraph program,
         read the PrintGraph section of the 1-2-3 manual. 

         2.3 Print Details 

              The print  macros assume  you have a  printer capable  of 80-


         08/21/84                                                 SREGR - 5







         column printing.   Before printing  each option, the  macros allow
         you to align the paper to the  top of a new page.  Press the ENTER
         key when  you are ready  for printing to  begin.  At the  end, the
         macro  will feed  the paper  to the  top of  a new  page so  that,
         normally, you won't have to keep re-aligning the paper. 

              The  final  and  intermediate  results are  printed  as  one,
         because they will comfortably fit  onto a 66-line page.  The third
         option can lead to several pages of output.  The macro defines the
         top border  of the  page to be  the rows of  the worksheet that
         identify the columns being printed. 


         3.  EXAMPLES 

         3.1 Radio or Television? 

              In the U.K., one must buy a television licence before one can
         legally  receive  television programs.   Prior  to  1971, a  radio
         licence was required to receive radio signals, unless one bought a
         television licence  which covered  both.  With  the rise  of tele-
         vision in the home, one might expect a fall in the number of radio
         licences  issued.   Indeed,  one   might  expect  that  for  every
         television licence bought,  one less radio licence  would be sold,
         since  most people  owned radios  before they  bought televisions.
         The numbers of radio and  television licences issued for the years
         1949 to 1968 are shown in the following table: 

                   Radio and Television Licences 
                   Issued in the United Kingdom. 

                   YEAR RADIO TELEVISION 
                                  (Millions)   
                   1949  11.7    0.1 
                   1950  12.0    0.3 
                   1951  11.6    0.7 
                   1952  11.2    1.4 
                   1953  10.7    2.2 
                   1954  10.2    3.2 
                   1955   9.4    4.4 
                   1956   8.6    5.6 
                   1957   7.6    6.8 
                   1958   6.6    8.0 
                   1959   5.4    9.2 
                   1960   4.5   10.4 
                   1961   3.9   11.2 
                   1962   3.5   11.9 
                   1963   3.2   12.5 
                   1964   3.0   13.0 
                   1965   2.8   13.3 
                   1966   2.6   13.7 
                   1967   2.5   14.3 
                   1968   2.5   15.0 


              This table clearly shows the growth of television licences at


         08/21/84                                                 SREGR - 6







         the  expense  of  radio  licences.   The data  in  this  table  is
         contained  on your  disk in  a worksheet  named TV.  To use  it to
         illustrate the regression analysis, perform the following steps: 

         1.    Load the  SREGR worksheet  and when  the main  menu appears,
               Press Q to exit to 1-2-3 READY mode. 
         2.    Press  the Goto  key (F5),  then type  the word  'input' and
               press the ENTER key. 
         3.    Type the following 1-2-3 command (initial letters only): 
                   /File Combine Copy Entire-file TV 
               and press  the ENTER  key.  This will  bring the  saved data
               into the input area of your worksheet. 
         4.    Hold down the  Alt key and press M. This  will return you to
               the main menu. 
         5.    Choose the Calc option.  When calculations are complete, you
               may use the results, graph, and print phases. 

              The  results  show  a highly  significant  correlation.   The
         surprising part of  the answer, however, is that the  slope of the
         regression  line is  -1.425, and  not,  as one  might expect,  -1.
         Moreover the standard deviation of the  slope - S(b) - is so small
         (0.03) that  it is inconceivable that  the real slope is  -1 given
         the observations we  have.  This means the increase  in the number
         of television licences sold exceeds  the decrease in the number of
         radio licences by about 40%.  Since  anyone who bought or rented a
         television almost  certainly used  a radio, one  must look  for an
         explanation. 

              A  possible  explanation for  the  difference  is that  radio
         licences were not treated seriously.   It was common for people to
         use unlicenced radio receivers, and few were prosecuted.  But when
         television licences  were introduced, the  need for a  licence was
         publicised, and  users of  unlicenced televisions  were prosecuted
         more actively.  The 40% difference  is likely due to people buying
         a television  licence when  before they  did not  bother to  buy a
         radio licence.  Another likely  explanation is that the population
         of viewers was growing in total. 

              The   correlation  coefficient   (r)   for  this   particular
         regression is -0.9962, which is  very close to -1 (meaning perfect
         correlation).  If  you examine  the graph, you  will see  that the
         points do indeed lie very close to a straight line. 

              A note of warning is in order here.  It can be very dangerous
         to assume that a  cause-and-effect relationship exists between two
         factors, even  when the  fit is  this good.   One should  take the
         results of  any statistical analysis  with a large grain  of salt,
         unless there is a prior  expectation of cause-and effect.  In this
         particular  case, we  do have  such expectation  because owning  a
         television  licence  removed the  need  to  buy a  radio  licence.
         Measurements such  as these that are  taken over a period  of time
         can  be influenced  by external  factors which  change over  time.
         This  can lead  to  an  apparent relationship  when  in fact  none
         exists.   For  example,  television  sales over  some  years  were
         positively  correlated  with  admissions to  mental  institutions.
         This statement could hardly  justify an assertion that televisions


         08/21/84                                                 SREGR - 7







         cause mental illness!  Both simply happened to be growing over the
         period the figures were observed. 

         3.2 Example 2 - Fictitious Data 

              This example  leads you  through a  complete analysis  of the
         data given in the following table: 

              Linear Regression 
              Fictitious Data 
              X value Y value 
                   1       3 
                   3       5 
                   5       6 
                   7       8 
                   9      12 
                   11     12 

              Once  you  have loaded  the  SREGR  worksheet, the  following
         keystrokes will perform the analysis: 

         Keystrokes     Comments 

         {ENTER}         Press the ENTER key to  select the Input choice in
                         the main menu. 

         X               Choose  the  XYPairs  option in  the  input  menu,
                         because this  is how the source  data is arranged.
                         Note that the macro will place the cell pointer in
                         the topmost cell of the X value input column. 

         1 {ENTER}       This enters  the first  X value  in the  top cell.
                         The macro will move the cell pointer one column to
                         the left to receive the first Y value. 

         3 {ENTER}       Enters the first Y value.  The macro will now move
                         the cell pointer to the  right and down so you can
                         enter the second X value. 

         3 {ENTER}       Enter the remaining values. 
         5 {ENTER} 

         5 {ENTER} 
         6 {ENTER} 

         7 {ENTER} 
         8 {ENTER} 

         9 {ENTER} 
         12 {ENTER} 

         11 {ENTER} 
         12 {ENTER} 

         {Ctrl} {Break}  Having entered all the  pairs of values, hold down
                         the  Ctrl key  and  press Break.   This stops  the


         08/21/84                                                 SREGR - 8







                         macro, and returns you to 1-2-3 READY mode. 

         {Alt} I         Hold down the Alt key,  and press I.  This returns
                         you to the input menu. 

         E               Select  Est-X   to  obtain  estimates  of   Y  for
                         specified X values.  The  macro positions the cell
                         pointer at  the first cell  in the X  input column
                         below the values you have already input. 

         0 {ENTER}       Enter  the  X  values   for  which  estimates  are
                         required. 
         2 {ENTER} 
         4 {ENTER} 
         6 {ENTER} 
         8 {ENTER} 
         10 {ENTER} 
         12 {ENTER} 

         {Ctrl} {Break}  Return to the input menu. 
         {Alt} I 

         Q               Return to main menu. 

         C               Perform the calculations. 

              At this  point, all the  results have been obtained,  and you
         can display them by choosing Results in the main menu.  Here's how
         (starting at the main menu):  

         R               Takes you to the Results menu from the main menu. 

         {ENTER}         Displays the  final results on the  'home' screen.
                         (Typically,  you  will  already  be  on  the  home
                         screen,  and  this  option will  have  no  visible
                         effect.)  On   this  screen,  you  can   read  the
                         calculated  regression  equation, the  correlation
                         coefficient, and the Student's t value for testing
                         the significance of the regression.  

         I               Displays the  intermediate results.  Here  you can
                         see the  number of (paired) observations,  and the
                         mean of  the (paired)  X and  Y values.   The last
                         line on  this screen shows the  standard deviation
                         of  the  slope,  which   is  used  to  derive  the
                         Student's t statistic for the significance test of
                         the regression. 

         R               Displays the raw data.   The display starts at the
                         first screen-full  of data, but you  are presented
                         with a menu that allows  you to scroll up and down
                         one screen-full at a time.  Note the macro sets up
                         a window  so   the  column  headings   are  always
                         displayed above  the data  columns.  You  will not
                         need to scroll for this small set of data. 



         08/21/84                                                 SREGR - 9







         Q               Returns you to the results menu. 

         Q               Returns  you to  the  main menu  from the  results
                         menu. 


              You  can display  the  graph provided  by  this worksheet  as
         follows: 

         G               Takes you from the main menu to the graphics menu.
                         Initially, the graphs  are set up to  display on a
                         color monitor.   If you have a  monochrome monitor
                         (with a  graphics adaptor  card), you  should type
                         the following three commands: 

              O          Selects the graphics options menu. 

              B          Tells 1-2-3 to plot graphs in monochrome (B&W). 

              Q          Returns you to the graphics menu. 

         R               Displays the  graph showing  the raw  data points,
                         and the  regression line through them.   From this
                         graph, you  can see how  well (or not)  the points
                         follow the straight line.  Press any key to return
                         to the graphics menu. 

         Q               Returns you to the main menu. 

              If you  wish, you  may Quit  all menus and  set up  the graph
         title (not subtitle),  and the X- and Y-axis legends  to suit your
         needs.  Then use  Alt-M to return to the menus  and re-display the
         graph.  Since the  graphics macro does not  reset these parameters
         each time, they will appear on the graph as you have set them. 

              To print the results, first  make sure your printer is turned
         on and  loaded with  paper.  Then,  from the  main menu,  type the
         following: 

         P               To go to the print menu. 

         R               To  print  the  final  and  intermediate  results.
                         Press  ENTER when  you are  ready for  printing to
                         begin. 

         D               To  print the  raw  data and  Y estimates.   Press
                         ENTER when you are ready for printing to begin. 

         Q               To return to the main menu. 

              Before starting each section of  output, the macros pause for
         you to align the paper.  After  each section of output, they space
         to the top of the next page,  so you should only have to align the
         paper once - before the first section. 




         08/21/84                                                 SREGR - 10







         Menu Tree for SREGR Worksheet 

         Input    -  Input X-Y data.  
         .  XYPairs  -  Input X-Y pairs of values (X first). 
         .  YXPairs  -  Input Y-X pairs of values (Y first). 
         .  Est-X    -  Enter X values to obtain Y estimates. 
         .  Range    -  Use 1-2-3 standard Range Input facility. 
         . Number - Set maximum number of data pairs (erases data). 
         .  .  No       -  Do not erase or resize data area. 
         .  .  Yes      -  Erase and resize data area. 
         .  Quit     -  Return to main menu. 

         Blank    -  Blank out data input area. 
         .  No       -  Do not blank out input area; return to main menu. 
         .  Yes      -  Blank out input area, then return to main menu. 

         Calc     -  Calculate all results. 

         Results  -  Display results on the screen. 
         .  Final    -  Show final results (regression equation, etc.). 
         .  Intermed -  Show intermediate results (sums of squares, etc.). 
         .  Rawdata  -  Show raw input data and Y estimates. 
         .  .  Down     -  Scroll down one screen. 
         .  .  Up       -  Scroll up one screen. 
         .  .  Quit     -  Return to results menu. 
         .  Quit     -  Return to main menu. 

         Graph    -  Display graphs. 
         .  Rawdata  -  Display graph of input data and regression line. 
         .  Options  -  Select graph options. 
         .  .  Color    -  Display graphs in color. 
         .  .  B&W      -  Display graphs in monochrome. 
         .  .  Quit     -  Return to graph menu. 
         .  View     -  Re-display the last-seen graph. 
         .  Quit     -  Return to main menu. 

         Print    -  Send results to printer. 
         .  Results  -  Print final and intermediate results. 
         .  Data     -  Print raw data and Y estimates. 
         .  Quit     -  Return to main menu. 

         Agenda   -  Return to worksheet agenda. 
         .  No       -  Do not leave this worksheet; return to main menu. 
         .  Yes      -  Clear this worksheet and load agenda. 

         Quit     -  Exit to 1-2-3 READY mode. 












         08/21/84                                                 SREGR - 11


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0289

     Volume in drive A has no label
     Directory of A:\

    AGENDA   WKS      2432   1-01-80   1:11a
    AUTO123  WKS      7168   1-01-80   1:10a
    BSTAT    DOC     18268   9-09-84   6:50p
    BSTAT    WKS     18432   8-22-84   9:27p
    DEPREC   DOC     24828   9-09-84   6:53p
    DEPREC   WKS     25216   8-22-84   9:29p
    INTRO    DOC      6194   9-09-84   2:39p
    NPV      DOC     20848   9-09-84   6:56p
    NPV      WKS     12288   8-22-84   9:30p
    PRINTDOC BAT       768   9-09-84  12:28p
    PROFIT   DOC     44909   8-21-84  11:13p
    PROFIT   WKS     18944   8-22-84   9:32p
    README   1ST     15115   1-01-80   1:23a
    ROR      DOC     27055   9-09-84   7:02p
    ROR      WKS     14976   8-22-84   9:33p
    SREGR    DOC     33180   8-21-84  11:09p
    SREGR    WKS     12032   8-22-84   9:34p
    TEST     WKS     10112   1-01-80   1:33a
    TV       WKS      2816   3-15-84   7:37p
           19 file(s)     315581 bytes
                               0 bytes free
