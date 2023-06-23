---
layout: page
title: "PC-SIG Diskette Library (Disk #3468)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3468/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3468"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DESCR.DOC

{% raw %}
```




                             MATH MASTER.

           Math  Master  allows  you  to  enter  both  simple  and
           sophisticated   formulas   and   expressions  onto  the
           computer  screen  in  almost  free  form.   This  makes
           working  with  Math Master as simple as handling pencil
           and paper.

           In  addition to performing basic arithmetic operations,
           Math  Master  computes compound interest, square roots,
           powers,  trigonometric  and other functions, and allows
           you to combine some or all of these operations into one
           expression.

           Math  Master  is  able to retain all previously entered
           expressions  in its memory and offers features to view,
           browse,    modify,    print   and   recalculate   those
           expressions.

           Math  Master  has  the  ability  to  perform arithmetic
           operations with dates, working and/or calendar days, as
           well as display a scrollable monthly calendar.




















```
{% endraw %}

## MX.TXT

{% raw %}
```




                   ╔════════════════════════════════════╗
                   ║                                    ║
                   ║                                    ║
                   ║   1....COPY SYSTEM TO HARD DISK C  ║
                   ║                                    ║
                   ║   2....PRINT README.DOC            ║
                   ║                                    ║
                   ║   3....PRINT REGISTRATION CARD     ║
                   ║                                    ║
                   ║   4....RUN SHORT DESCRIPTION       ║
                   ║                                    ║
                   ║   5....RUN MATH MASTER             ║
                   ║                                    ║
                   ╚════════════════════════════════════╝


      Type in an option (1,2,3,4 or 5) and press<ENTER>


```
{% endraw %}

## README.DOC

{% raw %}
```

                              MATH MASTER



          Copyright (c) 1991 Jasper Work Automation Systems Ltd.

          Math  Master  is  a  shareware  product.   You may make
          copies  of  this program and pass them on to others for
          their evaluation.  If you make use of this software you
          are expected to pay a registration fee of $ 35 to:

          Jasper Work Automation Systems Ltd.  57 Pleasant Avenue
          Toronto,  Ontario,  M2M  1L8 Canada Tel: (416) 733-4905
          Fax: (416) 512-2385

          Registration  is for home users only and does not apply
          to  businesses,  organizations,  government agences, or
          educational   institutions,  who  must  obtain  a  site
          license for use.  Contact JWAS for more information.

          Upon receipt of you registration fee you will receive a
          printed  manual,  a disk with the latest version of the
          software, and unlimited support.

          Jasper  Work  Automation  Systems  Ltd.   provides  its
          product  "as  is"  without warranty of any kind, either
          express  or  implied, including the implied warranty of
          fitness for a particular purpose or merchantability and
          Jasper  Work  Automation  Systems  Ltd.   shall  not be
          liable    for   any   tort,   indirect,   special,   or
          consequential  damages such as loss of profits, or loss
          of  goodwill  from  the  use  or  inability  to use the
          software for any purpose.
























                                                                1
     
          MATH MASTER USER GUIDE



          Welcome  to  Math Master! Just how easy it is, you will
          see  in a minute.  As a matter of fact, if you know how
          to  write  your  expressions and formulas on paper, you
          already  know  how  to  use  Math  Master.   No tedious
          programming, training or numerous trials and errors, as
          with  spread  sheets  or  similar  software.  With Math
          Master it is easy to be right!

          To work with it, you need:

          Hardware - IBM PC/XT/AT compatible computer

          Operating system - DOS 2.1 or higher

          Program  files:  M.EXE  - Executable file UNIVERS.DBF -
          dBASE  III  compatible  file  for  math.   expressions.
          DATES.DBF - file for date expressions.

          To start the program:

              - Insert the floppy diskette into the computer.
              - Type  A: and press <ENTER>
              - Type M and press enter. The first screen of Math

          The  first  screen  of  Math Master offers two choices:
          Universal  Calculator and Calendar Calculator.  You can
          use Up and Down arrow keys to move highlighted bar from
          one option to another for selection.



          FIRST OPTION.  UNIVERSAL CALCULATOR.


          Select  UNIVERSAL  CALCULATOR  and  press  <ENTER>.   A
          window   appears   asking   to   specify  precision  of
          calculation.   It  means that you can specify number of
          decimals,  which  you  want  to display for calculation
          results.   If you press F1 at this point, a help window
          appears,  offering simple explanation and examples.  If
          you  do not specify precision, the program will display
          2 decimals by default.

          After  you  press  <ENTER>,  a screen showing UNIVERSAL
          CALCULATOR  appears.   Now  you are ready to start your
          calculations.   Suppose,  you  want  to  calculate  the
          following expression:

             3 * (227 / 12 + 31 + 1/2 - 18 * 152)


          In the column OP enter + or -, if you wish to calculate

                                                                2
     
          running  total  of  all  expressions  during  the whole
          session.  Otherwise, just press <ENTER>.

          Now  enter  the  expression  as  it  is  written above.
          Notice  that  it  is written in almost the same form as
          you  would write it on paper.  If you made a mistake of
          any  kind,  the  computer  will notice it and display a
          message how to correct it.

          Press  <ENTER>  and  the  program  will  calculate your
          formula and place the result in the column RESULT.  You
          can  see that the program displayed as many decimals as
          you have specified.

          Press  F1  at  this point, and you will see help screen
          showing  all  operations  and  functions you can use in
          your expressions.

          For  those  who  need  more sophisticated computations,
          Universal Calculator offers the following features:


                Compound interest

                Power

                Trigonometric functions

                Natural logarithms

                Exponential (EXP - The inverse of LOG)


          At  the  bottom  of  the screen you can see all options
          offered by Universal Calculator.

          By pressing Esc key you will exit the program.  At this
          point  Universal Calculator offers you a choice to save
          all your work or erase.  Press 1, and all your activity
          will  be  saved in Dbase III compatible file for future
          use.   Your  data  can  be  used  in other programs, or
          modified  later.   There  is  no  limit  to  number  of
          expressions you can store in this file.

          F1 key offers you explanations on usage of operands and
          functions

          F2  allows  you to enter new expression.  At the bottom
          of  the  screen  highlighted  boxes will appear showing
          places for data entry.

          F3  allows  you  to  change  any  expression  you  have
          previously  entered.   To do this, use Up or Down arrow
          keys  to  move scroll bar to the expression you want to
          change.   Press F3.  Change anything in your expression
          and  press  <ENTER>.   The program will recalculate the

                                                                3
     
          result of your expression, as well as running total, if
          + or - operator preceding the expression was entered.

          F4   allows   you  to  save  any  expression  you  have
          previously  entered.   To do this, use Up or Down arrow
          keys  to move the scroll bar to the expression you want
          to  save.   Press  <ENTER>.   You  can  save  up  to  5
          expressions.

          This  feature is very convenient if you need to reenter
          this   or  similar  expression  many  times.   You  can
          retrieve  it later from the memory, instead of entering
          it time and again.

          If  you  tried  to  save  more  that  5 expression, the
          computer  displays  the  window  with  all  your  saved
          expressions.   At this point you can replace one of the
          old saved expression with the new selection.

          F5  allows  you  to retrieve one of the expressions you
          have previously saved.  Press F5 and the window showing
          all  previously  entered expressions appear.  Use Up or
          Down   arrow  keys  to  move  the  scroll  bar  to  the
          expression  you want to retrieve.  Press <ENTER>.  Your
          selection  will be placed in the data entry field.  You
          can modify it here or just press <ENTER> to accept.

          F6 allows you to delete one of the expressions you have
          previously  saved.   Use  Up or Down arrow keys to move
          the  scroll  bar  to the expression you want to delete.
          Press <ENTER>.  The selected expression will be deleted
          and running total at the bottom recalculated.

          F7   allows   you   to  print  all  previously  entered
          expressions.



          SECOND OPTION.  DATES/CALENDARS CALCULATOR.


          For  people dealing with schedules, calendars and dates
          this  option  is  a  must.   When Calendar Calculations
          screen  appears,  enter the date from which you wish to
          start  working on your schedule or calculation.  In the
          column  DATA  TYPE,  enter 1, as explained in the small
          help  menu above the calculation board.  Then enter the
          date.  In our example, the date 01/05/89 was entered.

          Suppose,  we want to add 43 calendar days to this date.
          Press  F2  to  enable data entry.  Enter 2 for the data
          type  (first  column)  and  press <ENTER>.  In the next
          column, enter either + add, or - to subtract the number
          and  press  <ENTER>.   In  our example it is +.  In the
          next  column enter 43 and press <ENTER>.  In the next 5
          columns  all  particulars of your result will appear: a

                                                                4
     
          month  of  the  calculated date, day of the month, week
          day, year and the date in the regular form.

          Very  often  managers  need to add working days, rather
          than  calendar  days.   In order to calculate resulting
          calendar   date,   the  programs  calculates  how  many
          Saturdays  and Sundays occur in the period of specified
          working   days.    Line  3  on  the  calculating  board
          illustrates this calculation.  In the column DATA TYPE,
          3  was entered to specify working days.  The + sign was
          entered  to indicate that the number should be added to
          the  calendar  date.   In this case it is a date on the
          line above, Feb.  17, 1989.

          In  the  next  column,  25  was  entered  for number of
          working  days.   The  resulting date is March 24, 1989.
          You may notice that the number of calendar days between
          March  24  and  February  17 is greater than 25.  It is
          because  the computer added non-working days that occur
          during this period in 25 working days.

          In  the  same  manner  you can add or subtract calendar
          weeks or months, subtract one day from another, perform
          calculations    as    in   Universal   Calculator,   or
          add/subtract mathematical expression to/from the date.

          Among    other   things,   Math   Master   takes   into
          considerations   the   leap  years  (with  29  days  in
          February).

          The  Calendar  Calculator can also save to and retrieve
          from the memory the date and expression in the same way
          as   Universal  Calculator,  or  print  all  previously
          entered data.

          If  you  press  F5 key, a monthly calendar will pop up.
          You  can  browse  it forward and backward as far as you
          wish.



















                                                                   5

```
{% endraw %}

## REGIST.DOC

{% raw %}
```




                  Registration form for individual home users.

            Program: Math Master

            # of copies: __       $ 35.00  per copy     Total $

            Payment by cheque.


            Mailing Address:

            Last Name:                            First Name:

            Address Line 1________________________________________

            Address Line 2________________________________________

            City/State/Province___________________________________

            Country/Postal Code___________________________________

            Phone:______________    Phone: _______________

            Fax: _______________




            









            Send to:  Jasper Work Automation Systems Ltd.
                      57 Pleasant Ave.
                      Toronto, Ontario
                      Canada M2M 1L8

                      Tel: (416) 733-4905
                      Fax: (416) 512-2385
            
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3468

     Volume in drive A has no label
     Directory of A:\

    M        EXE    296577  11-02-90   7:41p
    UNIVER   DBF       717  11-02-90   7:39p
    U_CALEND DBF       413   1-19-90   8:38a
    UN_SEQ   NTX      2048   6-18-91   8:04p
    USEQ     NTX      2048  11-02-90   7:40p
    MX       TXT       899   6-18-91   8:34p
    README   DOC     11332   6-19-91   1:18p
    REGIST   DOC      1007   6-19-91   1:23p
    1        BAT        16   6-18-91   7:59p
    H        BAT        28   6-18-91   7:58p
    2        BAT        25   6-18-91   7:59p
    3        BAT        25   6-18-91   7:59p
    5        BAT         6   6-18-91   8:00p
    DESCR    DOC      1115   6-18-91   8:09p
    4        BAT        24   6-18-91   8:10p
    GO       BAT        32   4-13-93  10:11a
    SHOW     EXE      2040   9-12-88  10:48a
           17 file(s)     318352 bytes
                           33792 bytes free
