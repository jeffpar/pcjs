---
layout: page
title: "PC-SIG Diskette Library (Disk #883)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0883/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0883"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XXXPERT"

    XXXPERT lets you create question-and-answer diagnostic programs to help
    solve problems -- an expert system.
    
    An expert system can be used for just about any application that lends
    itself to a hierarchy of rules. Once a set of rules is created and
    entered into the expert system, it will let you make decisions more
    quickly and consistently than before. The same set of rules, used by
    another, should yield the same decisions.
    
    XXXPERT lets you create a file of rules in an English language syntax.
    Then you enter questions into a file. Both rules and questions are
    compiled and then executed by the CONSULT program. This lets a person
    answer questions and make decisions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES883.TXT

{% raw %}
```
Disk No  883
Program Title:  XXXPERT version 2.4
PC-SIG version 1.1

XXXPERT lets you create a question-and-answer diagnostic program to
help solve problems.  XXXPERT can be used for just about any application,
and once a program is created it will help you do things that you would not
be able to do consistently as well without XXXPERT.  Programs are created by
a system of rules in an English language syntax, stored in a "rules" file.
Rules are simply statements of logic used to structure the program.  Questions
that appear on the screen are stored in an "asks" file.  Once a program is
completed, it can be compiled and then executed by the CONSULT program.  A
person using CONSULT does not need to know the rules for structuring a program.

Please note:  the program SCREEN DO has been moved to disk #1118, due to
space limitations.

Usage:  Artificial Intelligence.

System Requirements:  256K memory.

How to Start:  Type XXXPERT (press enter).

Suggested Registration:  $50.00

File Descriptions:

XXXPERT  COM  Main program.
XXXPERT  DOC  Documentation.
XXXPERT  FRM  Correspondence form.
CONSULT  COM  Consultation only program.
READ     ME   Introduction.
MINICON  COM  Sub-program
SALES    DBF  Data file
???????  R    Sample rules file (5 files).
???????  K    Sample consult file (5 files).
???????  A    Sample asks file (5 files).
???????  E    Data file (3 files)
???????  WKS  Data file (3 files)

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 883 XXXPERT  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for XXXPERT, type:                           ║
║                    MANUAL (press enter)                                 ║
║                                                                         ║
║ To run the XXXPERT program, Type: XXXPERT (press enter)                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## XXXPERT.DOC

{% raw %}
```













                                    XXXPERT

                                      V24





























                                 Copyright 1988

                                Stephen Thurber

                               1926 Labrador Lane

                               Vienna, VA  22180

                              All rights reserved







         INTRODUCTION





         Please  see  READ.ME for important license information before

         using this product.



         XXXPERT  is  an  expert  system  development  facility  which

         includes   an   editor,   file  manager  and  expert  systems

         inference   engine   packaged   together  in  one  integrated

         environment.



         You  can use XXXPERT to develop expert systems that use rules

         you  write  in  an  English language syntax.  You can develop

         expert  systems  that will aid you and others in doing things

         that  you  would  not  be  able  to  do  consistently as well

         without   XXXPERT.   XXXPERT  allows  you  to  define  expert

         knowledge  just once then apply it repeatedly time after time

         as  a  stand-alone  expert  system  or  integrated with other

         applications  software and other files.  There is essentially

         no  limit  to  the size and complexity of expert systems that

         may  be  constructed  with XXXPERT.  XXXPERT is very fast and

         allows  rulebases  (expertise) to be chained together into an

         arbitrarily large system of knowledge.





         XXXPERT   is   a   product  that  is  distributed  under  the

         'shareware'   concept.   Please  see  the  next  chapter  for

         further explanation.







         SHAREWARE





         XXXPERT  is  distributed  under  a  concept commonly known as

         'shareware'.   This  approach to software distribution allows

         you  to  receive and try software then pay for it only if you

         wish to keep it.



         If  you  feel  that,  after  trying XXXPERT, it has given you

         some  value,  please  contribute $9.00 to the author if it is

         for  your  personal use.  Otherwise the required contribution

         is  $29.00.   Shareware  operates largely on the honor system

         with   a   contribution   being   your   vote  for  continued

         development  of  this  product.  If  you contribute $29.00 or

         more,  you  will  receive  a  copy  of  the  current  updated

         versions  of  XXXPERT  and CONSULT, as well  source  code for

         the latest version of the product.



         Continued  personal,  commercial,  non-profit  and government

         organization   use   is  prohibited  unless  the  appropriate

         royalty  has  been  paid for each copy of XXXPERT in use (ie:

         according  to  the common analogy with books--one reader/user

         at a time per copy). Site licenses are available.



         Please address correspondence and contributions to:



                                  XXXPERT,V24

                              c/o Stephen Thurber

                              1926 Labrador Lane

                              Vienna, VA  22180









         XXXPERT DESIGN PHILOSOPHY





         A  few words on the design philosophy underlying XXXPERT will

         probably aid you greatly in using it well.   Therefore I will

         digress  a  bit  before  returning  you  to  a nuts and bolts

         discussion  of  product  features.  The following are the key

         points  of  XXXPERT's general design approach and the reasons

         for each:



         1.  XXXPERT  and  CONSULT  are conceived to be complements to

         your  existing  stable  of  software.   Therefore the product

         concentrates  on  delivering  only  those  features which are

         uniquely  an  aspect  of expert systems while providing links

         and  tools  to  make  the  product cooperate with the rest of

         your  PC  software.   This  is  helpful  since  you  probably

         already   know  how  to  use  an  existing  set  of  software

         (including  DOS,  batch  files,  a  database,  spreadsheet or

         whatever)  and  would  like to spend a minimum amount of time

         on   learning   new  quirks  of  other  software.   It  would

         therefore  be  wasteful  of your time (and mine) to duplicate

         commonly  available  software functions here in this product.

         For   this   reason,  you  will  not  find  a  new  database,

         spreadsheet,  or  batch file syntax introduced here.  Instead

         XXXPERT  adds  only  the new features you need to quickly add

         expert  systems  capabilities to your overall PC applications

         environment.   You  will  not  need  to  learn new syntax for

         features duplicating those you already have on your PC.



         2.   There is a wide variety of other software out there, and

         any  of  it may interest you as a complement to this product.

         XXXPERT  and  CONSULT therefore are designed to link to other

         software  through  standard DOS files,  DBASE 3 (r) files and

         LOTUS  (r)  .WKS  spreadsheet files, allowing you to use them

         with virtually any other PC software.



         3.   You probably already know how to use DOS batch files, so

         this  product  does  not  introduce another 'script' language

         for  you  to  use.   Instead,  we  attempt to make it easy to

         build  systems  using DOS batch files to script together your

         application  with  this product and any other type of product

         (or user-written program) of your choosing.  This approach is

         easy, familiar and frugal with PC memory.



         4.   This product has an integrated development approach that

         is  similar  to popular new programming language compilers in

         that  coding,  compilation, testing, debugging, and operating

         expert  systems  may  be  done without leaving XXXPERT.  This

         greatly  speeds  the  development process for expert systems.

         A  CONSULT  "run-time"  system  lets you build expert systems

         technology   into   your  applications  (with  XXXPERT  being

         essentially  invisible  to  the  user.)   A  MINICON run time

         system is included for situations wherein memory is tight.







         HARDWARE REQUIREMENTS





         XXXPERT  requires  an  IBM (r) or closely compatible computer

         with  DOS 2.1 or above, 256k RAM or more, and a monochrome or

         color  monitor.  Additional RAM may be needed to use the RUN@

         feature  that allows you to run other programs within XXXPERT

         and  CONSULT (depending on the size of the program you intend

         to run.)  MINICON can run in as little as 115k, however.



         THE XXXPERT DISK





         Please  feel  free to make as many copies of the XXXPERT disk

         as  you  wish, PROVIDED THAT ALL OF THE FILES ON THE DISK ARE

         COPIED  WITHOUT  MODIFICATION.   You  may  give copies of the

         disk  to  anyone,  and are encouraged to do so as long as you

         do  not  distribute  any  XXXPERT  file  without  the others.

         XXXPERT files include:



         XXXPERT.COM                    the integrated expert system

         CONSULT.COM                    the consult-only system

         XXXPERT.DOC                    this document

         XXXPERT.FRM                    a correspondence form

         CAR.R                          car diagnosis rules sample

         CAR.K                          compiled car rules

         CAR.A                          car diagnosis asks sample

         CHEESE.R                       cheese selection rules

         CHEESE.K                       compiled cheese rules

         CHEESE.A                       cheese selection asks

         READ.ME                        introductory notes

         TV.R                           Part of comprehensive example

         TV.A                            "

         TV.K                            "

         TELEV.WKS                       "

         RADIO.R                         "

         RADIO.A                         "



         RADIO.K                         "

         RADIO.WKS                       "

         PAPER.R                         "

         PAPER.A                         "

         PAPER.K                         "

         PAPER.WKS                       "

         SALES.DBF                       "



         To run the comprehensive example type:



         CONSULT RADIO









         INSTALLING XXXPERT



         XXXPERT  should  be installed on a diskette along with a copy

         of your DOS system.  The easiest way to do this is:



         1: Insert your DOS diskette in drive A.

         2: Insure that A is the default drive.

         3: Insert a new floppy disk in drive B.

         4: type: format b:/s

         5: press return.

         6: Insert the XXXPERT distribution disk in drive A.

         7: type: copy a:*.*  b:

         8: press return.



         The  new disk will then be ready to use as your expert system

         disk.



         Alternatively, XXXPERT may be installed on your hard disk.







         DEVELOPING RULES



         XXXPERT   is   a   rule-driven   system.   Rules  are  simply

         statements  of  logic  that  you  wish to have applied to the

         area   of   expertise  your  rules  are  to  address.   These

         statements   are   written   in  English   and  abbreviations

         thereof.   The  first  rule statement in a rules file must be

         on  a  line  by  itself  (and on the first line of the file).

         This  statement  must  specify  the  name of the goal for the

         consultations  to  be  performed with the set of accompanying

         rules.   In  the  CAR  rulebase the goal is PROBLEM since the

         purpose  of  the CAR consultation is to determine the problem

         with  the  car.   The  goal  in  a  rule  file  is  always an

         identifier  (a  fieldname  or variable) to name the object of

         the   consultation   process.    XXXPERT  will  use  all  the

         subsequent  rule  statements  to  seek  a value for the goal.

         Each  rule statement after the first must be of the following

         general form:



         IF ==== EQ ---- AND ==== EQ ---- THEN ==== EQ ----





         where  ==== indicates an identifier (a fieldname or variable)

         and  ----  indicates  a  state  (a  constant  or value).  For

         example,  to  express  the  knowledge  that:   baby's  diaper

         should  be changed when baby is crying and diaper is wet, the

         rule could be coded:



         IF   DIAPER  EQ  WET  AND  BABYACT  EQ  CRY  THEN  ACTION  EQ

         NEW.DIAPER



         The  EQ  in  XXXPERT's  rules  syntax stands for equals.  The

         keyword  NE may be used to express an inequality (not equals)

         situation  in  otherwise  similar  syntax.   For field values

         that  are numeric, the GT (greater than), GE (greater than or

         equal  to),  LT  (less  than), and LE (less than or equal to)

         keywords  may  also  be used as appropriate.  The part of the

         rules  statement  format  shown above as: AND ==== EQ ---- is

         optional  as  well  as  repeatable.   Thus the following rule

         examples  are  all  valid  and  meaningful (but different, of

         course!):



         IF DIAPER EQ WET THEN ACTION EQ NEW.DIAPER



         IF  DIAPER  EQ  WET  AND BABYACT EQ CRY AND HAD.NO.NAP EQ YES

         THEN ACTION EQ GETHELP





         A  set  of  rules may be constructed in this way to handle an

         arbitrarily   complex  set  of  expertise.   The  CAR.R  file

         contains   an   example   set  of  rules  for  diagnosing  an

         automobile  that  won't start.  The CHEESE.R file contains an

         example  set of rules for choosing cheese to go with a course

         of  a  meal.   Other  examples may be found in the CAR2.R and

         CREDIT.R  files.   You may use the DOS 'type' command to view

         these  files  or  you  may use the XXXPERT rules editor after

         doing   a   Getfile   for   CAR,   CHEESE,   CAR2  or  CREDIT

         respectively.



         Identifiers  (fields  or  variables) may be any name or other

         collection  of  letters,  punctuation and numbers in a string

         up  to  16  characters  in  length.   Imbedded blanks are not

         allowed.   Constants  (values)  are  subject  to  these  same

         restrictions.   Constants  may  be  words  or  numbers and if

         numeric  they may be integer (ie: 1) or real (ie: 123.45).  A

         single  file  of rules may consist of up to 400 rule elements

         in  this version of XXXPERT.  A rule element is generated  by

         each  IF  and by each pair of ANDs.  Rulebases with more than

         400  rule  elements  can  be  effectively implemented through

         multiple  related  rulebases.   Techniques for achieving this

         are  discussed  in the section on EPILOGUE and in the section

         on extended input/output.





         Rules  are  coded in free format with multiple rules per line

         or  multi-line  rules  as  desired.  XXXPERT supports sets of

         rules  up  to  300 lines per file in this version of XXXPERT.

         This  limit  is  also  easily  circumvented  through multiple

         related  rulebase techniques.










         DEVELOPING ASKS



         XXXPERT  will  need  certain information from the user in the

         course  of  any  given  consultation session depending on the

         rules  being  used  in  that  session.  The "asks" define how

         XXXPERT   should   ask   the   user   (consultee)   for  such

         information.   In  general  you  should  code an ask for each

         identifier  that  appears  in  the  left-hand-side  of a rule

         (before  the  THEN) unless it also appears in the right-hand-

         side of another rule.



         XXXPERT  asks  consist  of two lines each.  The first line of

         each  ask  must  contain  the identifier to which it applies,

         and  the  identifier must begin at the beginning of the line.

         The  second  line  of  each  ask  must  contain  one  of  the

         following:  1)  A  text  prompt  that  XXXPERT  should use to

         request  a  value  from the user for that identifier; or 2) A

         specification  for  a  worksheet  cell from which to retrieve

         the  information;  3) A specification of a database .DBF file

         and  record selection specification for a record containing a

         value  for  the  ask;  or 4) A specification for a program to

         run  which will provide the necessary data to XXXPERT.  Thus,

         odd-numbered  lines  of  the asks (first, third, fifth, etc.)

         will  contain  identifiers  while  even-numbered  lines  will

         contain  the associated text prompt for the user, a worksheet



         specification,   a   database   specification  or  a  program

         specification.



         To  define a text prompt for an ASK you merely place the text

         of  the  desired  prompt  on  the  second  line  of  the ASK.

         XXXPERT  and  CONSULT will automatically edit a user response

         to  the prompt to insure that the response in consistent with

         at  least  one rule in the rulebase being used.  In the event

         that  the response is invalid there will be a warning message

         and the prompt will be repeated for the user.



         To  define  a  worksheet  reference  you begin the second ASK

         line  with  the  keyword:  WKS@  followed  by the name of the

         worksheet  followed by the desired cell.  To refer to the C25

         cell  of  a  worksheet  named  BUDGET.WKS  for  an ASK of the

         XXXPERT  field  named  SALES  you  would  use  the  following

         statements:



         SALES

         WKS@ BUDGET C25



         Only  standard  .WKS  format  files  are  supported  by  this

         feature.   If  the  attempt to retrieve worksheet data should

         fail,   a  value  of  NA  will  be  returned  for  the  field

         associated  with the ASK.  NA should therefore not be used as

         a value in RULES.





         To  define  a database reference you begin the second line of

         the  ASK with the keyword: DB3@ followed by the database file

         name  followed  by  a  selector  field followed by a value to

         search  for  in  the  selector field.  The DB3 interface will

         look  for  a  record  which  has  the  stated  value  in  the

         specified  selector  field.   Upon finding such a record, the

         value  in  that record for the ASKed field in the record will

         be  given  to  the  ASKed  field in XXXPERT.  To refer to the

         record  containing 1987 in the YEAR field of a database named

         BUDGET.DBF  for  an  ASK of the XXXPERT field named SALES you

         would use the following statements:



         SALES

         DB3@ BUDGET YEAR 1987



         Only  standard .DBF format dBASE 3 (r) files are supported by

         this  feature.   If  the attempt to retrieve  database record

         should  fail,  a  value  of NA will be returned for the field

         associated  with the ASK.  NA should therefore not be used as

         a value in RULES.



         To  define  a  program  to  run  under  XXXPERT or CONSULT to

         provide  the data needed for an ASK you must begin the second

         line  of  the ASK with the code: RUN@ followed by the name of

         the  program  to be run.  To run GETDAT.COM you would use the

         following statement on the second line of the ASK:





         RUN@ GETDAT



         The  program that you run must be a .COM format file and must

         not  require  more  memory  than  is  left  available on your

         machine  after  XXXPERT  or  CONSULT has been loaded in.  The

         program  that  you run must place a value for the ASKed field

         in  a  file  named  RUN.I  (this is where XXXPERT and CONSULT

         will  be looking for it).  The program that you run must also

         be  well-mannered  enough  to  not  disturb  DOS,  CONSULT or

         XXXPERT-owned  parts  of  your  computer.  If your program is

         too  large  or  ill-mannered  your consultation will crash or

         behave   unpredictably.   If  the  attempt  to  retrieve  the

         program's  data  should  fail, a value of NA will be returned

         for  the  field associated with the ASK.  NA should therefore

         not be used as a value in RULES.



         XXXPERT  supports  sets  of asks of up to 600 lines per file.

         Once  you  create  a set of asks you should save it under the

         same  name  as  the  rules  that you intend to use them with.

         See  CHEESE.A,  CREDIT.A, CAR.A and CAR2.A for asks examples.

         NOTE:   Asks   must  be  created  in  upper  case,  and  this

         requirement is enforced by the XXXPERT editor.







         PROLOGUE, INTERMISSION AND EPILOG



         It  may  be  desirable for certain explanatory information to

         be  displayed  in the course of a consultation in the XXXPERT

         environment.   The prologue feature, intermission feature and

         epilogue   feature  are  all  provided  in  XXXPERT  to  this

         purpose.   Prologue  provides  the ability to define a screen

         of  text  to  be displayed at the beginning of a consultation

         with  a  given  set  of  rules.   Intermission  provides  the

         ability  to  define  a  screen  of  text for any given set of

         rules  that  is  to be displayed at the end of a consultation

         but   just   prior   to   the  presentation  of  the  XXXPERT

         conclusion.   Epilogue  provides  the  ability  to  define  a

         screen  of  text  for  any  given  set of rules that is to be

         displayed  after  the  presentation of the XXXPERT conclusion

         and  that  may vary depending on the specific conclusion that

         is reached by XXXPERT.



         You  may  use the prologue feature by entering the editor (as

         described  in  the  next chapter) to create a prologue screen

         under  the  same  file name as the rules you intend to use it

         with.    The screen contents may be entirely of your choosing

         up  to the 20 line limit provided for the prologue screen for

         any given file group (set of rules files.)





         You  may  use the intermis feature by entering the editor (as

         described  in  the  next chapter) to create a intermis screen

         under  the  same  file name as the rules you intend to use it

         with.    The screen contents may be entirely of your choosing

         up  to the 20 line limit provided for the intermis screen for

         any given file group (set of rules files.)



         You  may  use the epilogue feature by entering the editor (as

         described  in  the next chapter) to create an epilogue screen

         for  each conclusion (value for the rules goal) that you want

         to  have in your rules file.  The format of the epilogue file

         is  similar to that for asks in the sense that you must put a

         value  on  a line by itself (at the beginning of the line) to

         identify  the  start  of  the  text  associated  with a given

         possible  conclusion  (goal value).  The text to be displayed

         when  that  goal  value is selected as the XXXPERT conclusion

         must  be  coded on the immediately subsequent lines (up to 20

         lines).   The  end  of  the text associated with a given goal

         value  (conclusion)  is  delimited  by  placing the same goal

         value  on  a line by itself at the beginning of the line.  An

         epilogue  file  for  2  possible goal values (a conclusion of

         YES and a conclusion of NO) might look like this:



         (see next page)





         YES

         THIS IS THE TEXT I WANT TO DISPLAY FOR THE YES CONCLUSION

         FOR MY EPILOGUE

         YES

         NO

         THIS IS THE TEXT I WANT TO DISPLAY FOR THE NO CONCLUSION

         FOR MY EPILOGUE

         NO



         The  EPILOGUE facility also allows you to link to another set

         of   rules   depending   on   the   results  of  the  current

         consultation.   This  feature  (called chaining) is available

         only  in  the  CONSULT  program  (see  the chapter on CONSULT

         later  in  this  manual)  and  it  allows the construction of

         expert systems with essentially any number of rules.



         Chaining  is  the  capability  to  link  multiple  rule files

         serially  within  a single CONSULTation run.  This capability

         is  implemented  through  the  CHN@  command  in the EPILOGUE

         facility.   CHN@  allows you to name a rulebase to invoke and

         causes  the  results of the current consultation to be passed

         on  to the consultation for the named rulebase.  The EPILOGUE

         facility    allows    for   an   individual   CHN@   rulebase

         specification   for   each   possible   consultation  result,

         therefore  the rulebase used for the next consultation may be

         varied    according   to   the   outcome   of   the   current

         consultation.   There  is  no  limit  to the number of levels

         of   rulebases   that  may  be  involved  in  this  type   of

         arrangement.



         To  specify a set of rules to be chained-to after the current

         consultation  is  completed you include a CHN@ keyword as the

         first  4  characters  in  any  of  the epilogue lines for the

         value  of  the  goal  to  which  chaining  is to apply in the

         chained-from   consultation.    CONSULT  will  recognize  the

         keyword,  suppress  display  of that epilogue line and use it

         as   a  specification  for  chaining.   The  CHN@  should  be

         followed  by  at  least one space, then the name of the rules

         file  to  use  for  the  next  stage  of  consultation.   For

         example,  to  chain  to  the XYZ rules when the value for the

         current  consultation  goal  is ABC an EPILOGUE with no other

         display lines would look like this:



         ABC

         CHN@ XYZ

         ABC



         Other  lines  of  information could have been included in the

         EPILOGUE  and  would  have  been displayed normally.  If more

         than  one CHN@ line is included in the range of lines for one

         value  of  the  goal then the last CHN@ line so included will

         prevail.





         The  use  of  CHN@ overrides the usual convention on .O files

         in   the  CONSULT   program  (see  the  section  on  extended

         input/output  later  in  this  manual).  Instead of observing

         the  .O  file convention, a .I file is created under the name

         of  the  chained-to  rules  (ie: XYZ.I in the example above).

         This  file  contains the name and value of the goal field for

         the  chained-from  rules  so that the chained-to consultation

         rules  may  be primed with data from the goal of the chained-

         from  rules.   Using this feature you can create a network of

         sets  of  rules that comprise a knowledge-base that may be as

         large as one wishes.







         USING XXXPERT



         You  may  start  XXXPERT  by  booting  your  system  with the

         XXXPERT  disk  in  the  default drive A.  When the system has

         completed the boot process XXXPERT may be started by typing:



         xxxpert



         and  pressing  the  return  key.   XXXPERT  will  start and a

         banner  screen  will  appear  welcoming  you  to  the XXXPERT

         system  environment.   To  continue  you  should press return

         once again.



         At  this point XXXPERT's main menu will display, offering the

         following options:



         Getfile  Editfile  Consult  Keep  Trace  Xref  Output  Quit



         You  may  select  the  option  you  need  by typing the first

         letter  of  the  name of the option.  The letter may be typed

         in  either  upper  or lower case.  Alternatively, you may use

         the   right-arrow   and   left-arrow  keys  to  position  the

         highlight  box  over  a  menu  selection  and press return to

         activate  that  selection.   These are conventions that apply

         to   all  menu  selection  options  throughout  the   XXXPERT

         product.









         GETFILE



         The  main  menu's  Getfile  option  brings  up a prompt for a

         filename  and  loads the file group you specify into the file

         areas  within  XXXPERT.    This  allows  you  to  retrieve  a

         previously-created  set  of  inference  rules, asks and other

         information  so  that  you  may  modify  and/or  consult with

         them.   If  you  make  a error in typing the filename you may

         use  the  backspace  (or left-arrow) key to correct it.  Once

         the  file name has been typed press the return key to perform

         the  get.   Do not include an extension in the file name (ie:

         to  retrieve  the  sample car rules and asks, CAR is correct,

         CAR.R  is incorrect.)   XXXPERT will retrieve both the  rules

         and    all   related   files   (including   asks,   prologue,

         intermission  and  epilog,  if  present)  for  the  specified

         name.   In  the CAR example above, both CAR.R and CAR.A would

         be retrieved by requesting CAR.







         EDITFILE



         The  main  menu's  Editfile  option brings up a menu of these

         sub-options:



         Rules    Asks   Prologue   Intermis   Epilogue    Quit



         The  rules  option  starts  the  rules  editor  subsystem and

         displays  the  first  screen  of  rules from the current file

         group.    If the current file group's set of rules is  empty,

         the  edit  screen  will  be  blank  (this will be the case if

         Getfile  has  not been successfully performed and no previous

         rules  edit  has  been  performed since XXXPERT was started.)

         Once  in  the  rules  editor you may type in XXXPERT rules in

         free  format.   The  editor always stores rule information in

         upper  case except for numbers and punctuation which (for the

         ones  that  are  allowed)  are  stored  in  the  way they are

         typed.   The  home,  up-arrow,  left-arrow, right-arrow, end,

         down-arrow,  page down,  and page up keys may be used to move

         the  cursor position accordingly.  The backspace key performs

         the  same  function  as  the  left-arrow.  The del key may be

         used  to  delete  characters  and  the ins key may be used to

         switch  to and from insert mode in the editor.  (An indicator

         in  the  bottom  line  of  the  edit screen notes whether the

         editor  is  in  insert mode or overtype mode.)  A line may be

         deleted  by  pressing  the  D key while the ctrl key is being

         held  down.   The  return  key will advance the cursor to the

         start  of  the next line on the screen except while in insert

         mode,  in  which case the return key will insert a blank line

         in  front  of  the  line  in  which  the  cursor is currently

         positioned.    The  slash  key  (/) may be used to bring in a

         pop-up  menu  for  other functions as described in the EDITOR

         POP-UP MENU section below.



         The   asks  option  starts  the  asks  editor  subsystem  and

         displays  the  first  screenful of asks from the current file

         group  in  XXXPERT.  Asks edit performs functions in the same

         manner  as  rules  edit,  except  that  the  editing  is with

         respect to asks rather than rules.



         The  prologue option starts the prologue editor subsystem and

         displays  the  prologue  screen for the current file group in

         XXXPERT.   Prologue  edit  functions  similarly to rules edit

         except  that  XXXPERT limits the prologue to 20 lines of text

         and the editor enforces this limit.



         The  intermis option starts the intermis editor subsystem and

         displays  the  intermis  screen for the current file group in

         XXXPERT.   Intermis  edit  functions  similarly to rules edit

         except  that  XXXPERT limits the intermis to 20 lines of text

         and the editor enforces this limit.





         The  epilogue option starts the epilogue editor subsystem and

         displays  the  first  epilogue screenful for the current file

         group  in  XXXPERT.   Prologue  edit  functions  similarly to

         rules edit.



         Quit returns you to the XXXPERT main menu.







         EDITOR POP-UP MENU



         In  any  edit  session, the slash key may be used to invoke a

         pop-up menu that contains the following options:



         Continue      Save     Zap     Quit



         Continue  removes  the  pop-up  menu  and  continues the edit

         process.



         Save  allows  you  to save edited material (rules or asks) to

         disk  under  a  filename of your choosing.  When specifying a

         filename  do not include an extension.  XXXPERT will add a .R

         extension   for  files  saved  during  a  rules  edit,  a  .A

         extension  for files saved during an asks edit a .P extension

         for  files  saved  during a prologue edit, a .N extension for

         files  saved  during an intermis edit, and a .E extension for

         files  saved  during an epilogue edit.  Files that you intend

         to  use  together  as  a  file  group  (set  of rules-related

         information)  should  be  saved  under  the same name  (ie: I

         have  created  all  the  CHEESE  consultation files under the

         name  CHEESE,  allowing  XXXPERT  to  provide the extensions,

         resulting   in   DOS  filenames  of  CHEESE.R,  CHEESE.A  and

         CHEESE.K  for  the CHEESE rules, CHEESE asks, and CHEESE keep

         respectively).   The role of .K files is explained later.  My



         CHEESE   example  does  not  use  prologue,  intermission  or

         epilogue.



         Zap  clears  out  the  contents  of  the area currently being

         edited.   Note  that  Zap  has  no  impact  on  disk files by

         itself.   Only  the data inside XXXPERT is cleared unless you

         subsequently do a Save.



         Quit  takes  you  back  to the Editfile menu, terminating the

         current  edit  process.  The edit data is retained in XXXPERT

         but  is  not  saved  to  disk unless you do a save before the

         quit.







         CONSULT



         The  main  menu's Consult option uses the current set of asks

         and  rules  in  XXXPERT to conduct a consultation with you on

         the  basis  of the logic you defined in those rules and asks.

         Based  on  your  answers  to  the  questions XXXPERT poses, a

         recommendation  will  be  made  according  to  the  inference

         rules.   You  must  press  the return key with each reply you

         provide  to  XXXPERT's  questions.  You may correct any error

         in  an answer prior to pressing return by using the backspace

         key   or   the   left-arrow   key.   You  may  terminate  the

         consultation at any prompt by pressing the escape key (ESC.)



         Please  remember that XXXPERT's conclusion and recommendation

         will  be  based solely on the rules you provide.  The quality

         of  the recommendation is therefore directly dependent on the

         quality   of  inference  rules  you  develop.   Before  using

         XXXPERT  or CONSULT to make any important decision you should

         thoroughly  test  the expert system you have built to be sure

         that XXXPERT and CONSULT give you the results you intend.







         KEEP



         The  keep  command  on  XXXPERT's  main  menu  may be used to

         create  and  store (on disk) a compiled form of the currently

         retrieved  set  of  rules.   This  compiled form may later be

         used  by  the  CONSULT  program  (CONSULT.COM) to immediately

         conduct  a  consultation  session with that set of rules (and

         associated  files) without the need to see the XXXPERT banner

         screen,   use   menus,   perform   getfiles,   and  wait  for

         compilations.    This   greatly   aids  in  the  creation  of

         applications    involving   multiple   rulebases,    multiple

         consultations  and/or  other software (besides XXXPERT).  See

         the CONSULT PROGRAM section later in this manual.







         TRACE



         The  trace  command  is  available on the main menu to switch

         trace  mode  on  and  off for XXXPERT.  Requesting trace will

         turn  the  trace  mode  on  if it is currently off, and vice-

         versa.   Consultations that are run while trace is on will be

         accompanied   by   a  trace-style  debugging  report  on  the

         inference  rules being used by XXXPERT's reasoning process as

         the  consultation  progresses.   This  allows you to test the

         rules you develop in an easy and visible way.







         XREF



         The  XREF  command  on  XXXPERT's  main  menu  may be used to

         display an  analysis report on the currently retrieved set of

         rules.   This  report  consists  of three parts: the listing,

         the cross reference and the warnings analysis.



         The listing  shows  the  current  set  of rules in a standard

         format  labeled  with line numbers to aid in use of the cross

         reference part of the report.



         The  cross reference  shows  each  identifier in the rulebase

         along  with the line numbers for each rule line in which that

         identifier is used.



         The  warnings  analysis  reports instances in the current set

         of  rules  where  a  field value is created but never used or

         vice-versa.   That  is,  a warning message will be issued for

         each  field  value  that appears in a THEN but is not used in

         any  IF  and  for  each field value that is used in an IF but

         does  not appear in any THEN.  Certain instances of the above

         are screened out, however as follows:





         1.  A  field  value  that appears in a THEN for the goal will

         not  be  subject  to  warnings  (since goals are not normally

         used in IFs.



         2.   A  field  value that appears in an IF will be subject to

         warnings  only  if  the field identifier  appears in at least

         one  THEN  (with  another  value).   (Field  identifiers that

         never  appear  with  any  value in any THEN are assumed to be

         included in an ASK.)







         OUTPUT



         The  output  option  on  XXXPERT's  main  menu may be used to

         access  a  selection  screen  that controls whether TRACE and

         XREF  output  are  directed  to the screen (by default) or to

         the first parallel printer port (by option).







         CONSULT PROGRAM



         The  CONSULT  program  allows  you  to conduct a consultation

         session  using a set of rules for which a KEEP has previously

         been   executed  in  XXXPERT.   CONSULT  goes  directly  into

         consultation   without   any   intervening   screens,  menus,

         compilations or prompts.



         CONSULT  may  be  started  by  typing CONSULT followed by the

         name  of  the  'kept' rules that are to be used.  The example

         below  would  initiate a consultation for the CAR rules using

         the 'kept' car rulesfile: CAR.K and the CAR asksfile: CAR.A:



         consult car



         This  type of command may be used at the DOS prompt or within

         a BATCH file on your DOS system.







         EXTENDED INPUT/OUTPUT



         The   CONSULT   program   has   a   feature  called  extended

         input/output  that greatly facilitates the linking of XXXPERT

         rulebases  with  each  other  and with information from other

         systems.   Extended  input/output  allows  data  to be passed

         into  a  consultation session and it allows the conclusion of

         a   consultation   session   to  be  passed  out  to  another

         consultation  session or another system.  The two most likely

         uses  for  this  feature  are:  1-  linking together multiple

         related  expert  systems  that  would  be  too  large  to  be

         integrated  into  a  single rulebase (either because of human

         limitations  or XXXPERT  limitations)  and  2- linking expert

         systems  consultations  in  with  other PC-based applications

         and data.



         You  may  pass data values into a consultation for any of the

         rule  fields  by  arranging for the desired values to be in a

         file  when  CONSULT  is  started.  The file name should match

         the  rule  file  name  except  that the extension must be: .I

         instead  of:  .R.  Thus to run a consultation passing data in

         to  be  used with the CAR rules you would create a file named

         CAR.I  and  start  the  session by issuing CONSULT CAR at the

         DOS prompt (or within a batch file).





         Within  the  .I  file  the data fields and corresponding data

         values  should  alternate  lines  in  a manner similar to the

         ASKs  files.   The  first line should contain the first field

         of  interest,  the second line a value for that field, and so

         on.    Thus to inform the CAR consultation that it should use

         a  value  of  44 for TURNS you would create a CAR.I file that

         looks like this:



         TURNS

         44



         Turns  is the field of interest and therefore is on the first

         (or  any  odd-numbered line) and 44 is the value for TURNS so

         it is on the line immediately after TURNS.



         At  the end of any CONSULT session a value will be determined

         for  the  goal  (assuming  the  rulebase  contains sufficient

         knowledge).   CONSULT  always  then creates a file (with a .O

         extension  and  a  name  matching  the  rule  file name) that

         contains  the goal field name on the first line and the value

         for  the  conclusion  on  the  second line.  This data may be

         used  by  other  systems  or  by  other  CONSULT  sessions if

         desired.   Note  that  (not coincidentally) the .O file has a

         format  consistent  with  .I  file requirements.  This allows

         you  to rename a .O file to an appropriate .I name and use it

         as  input  to  a  consultation session (the renaming could be

         done  in a batch file, for example).  You can, therefore, use



         these  files  and  the  DOS  batch  file  capability  to link

         multiple   rulebases   through   multiple   consultations  in

         combination  with  any other software of your choosing.  This

         allows  you  to  build arbitrarily complex expert systems and

         integrate  them with non-XXXPERT  applications using familiar

         DOS facilities!



         A  DOS  batch  file  to  link  the  CAR rulebase with another

         rulebase (CARFIX, for example) might look like this:



         ERASE CAR.O

         ERASE CARFIX.I

         CONSULT CAR

         RENAME CAR.O CARFIX.I

         CONSULT CARFIX



         Such  a  batch  file  would  run a CAR consultation, pass the

         conclusion  to  CARFIX  and  run the CARFIX consultation with

         the  conclusion  of  the  CAR  consultation  as  input  (that

         otherwise  would  need  to  be obtained from the user with an

         ASK.)   The  ERASE commands have been included to prevent the

         possibility of using files left over from previous runs.  The

         .O  files  are not created if CONSULT finds that its rulebase

         does   not   provide   sufficient   knowledge   to   make   a

         recommendation,  so  the  use of ERASE may be key to insuring

         the integrity of your overall batch job.





         With  the above batch file as written, the first consult will

         report  its  results  to  the  screen as well as to the CAR.O

         file.    It    may   not   always   be  desirable  to  report

         intermediate  results  in a series of CONSULTs and if this is

         the  case,  screen  output  may  be suppressed by including a

         second  parameter  (X)  in the CONSULT command after the rule

         file  name.   In  the  above  example the output from the CAR

         consultation  could  have  been  suppressed  by rewriting the

         CONSULT command in the following way:



         CONSULT CAR X



         Note  that  these  various  file  sharing techniques could be

         used  to  share  data  with spreadsheets, databases, graphics

         packages or any other PC application.





         MINICON



         MINICON  is  a  version  of  CONSULT  that requires much less

         memory  (RAM)  to run but lacks the ability to perform any of

         the  ASK  and  CHN@ functions.  It is very useful if you want

         to   integrate  an  expert  system  facility  inside  another

         application  without  taking  much  additional  memory (about

         115k  or  so).   All  data  needed  by MINICON to perform the

         consultation  must already be in a .I file since ASKs are not

         available.   MINICON may be used by most any application that

         has the ability to run external programs.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0883

     Volume in drive A has no label
     Directory of A:\

    CAR      A        1296   8-22-87   6:08a
    CAR      K        2797   3-19-88   4:46p
    CAR      R        1080   8-22-87   6:08a
    CHEESE   A         432   8-15-87   4:24p
    CHEESE   K        2804   8-23-87   9:46p
    CHEESE   R        1296   8-15-87   4:24p
    CONSULT  COM     64983   4-20-88   7:10p
    FILES883 TXT      1568   7-28-88   1:26p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   7-07-88  10:37a
    MANUAL   BAT        22   7-07-88  10:38a
    MINICON  COM     23585   2-10-88   5:16p
    PAPER    A         288  12-05-87   4:09p
    PAPER    E        1152  12-31-87  10:14a
    PAPER    K         676  12-05-87   6:43p
    PAPER    R         864  12-05-87   4:06p
    PAPER    WKS       817  12-05-87   2:48p
    RADIO    A         288  12-05-87   4:10p
    RADIO    E        1440  12-31-87  10:09a
    RADIO    K         676  12-05-87   6:31p
    RADIO    R         864  12-05-87   4:04p
    RADIO    WKS       817  12-05-87   2:47p
    READ     ME       2442  12-06-87   5:29a
    SALES    DBF       703  12-05-87   3:39p
    TELEV    WKS       822  12-05-87   2:50p
    TV       A         288  12-05-87   4:10p
    TV       E        1440  12-31-87  10:12a
    TV       K         676  12-05-87   9:09p
    TV       R         864  12-05-87   6:52p
    XXXPERT  COM     64983   4-20-88   7:02p
    XXXPERT  DOC     46976   4-23-88  11:02a
    XXXPERT  FRM      1152   4-20-88   6:33p
           32 file(s)     228746 bytes
                           76800 bytes free
