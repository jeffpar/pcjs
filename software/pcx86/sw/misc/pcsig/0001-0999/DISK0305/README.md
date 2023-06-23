---
layout: page
title: "PC-SIG Diskette Library (Disk #305)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0305/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0305"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYMPHONY WORKSHEETS #1"

    SYMPHONY WORKSHEETS 1 is good assortment of miscellaneous
    worksheets, macro aids, setting sheets, application add-in programs
    and tech notes.  One useful application included is a Wordstar to
    Symphony conversion utility.  Technical tips explain differences
    between 123 and Symphony macros, database conversion from 123 and
    wordprocessing in 2 colcumns.  For fun, there is a biorythm worksheet
    and a roulette game.  For the serious, there is a Desktop-like
    appointment calendar and phone directory (nice graphics).
    
    System Requirements: 512K, two disk drives, monochrome display and
    Lotus SYMPHONY
    
    How to Start:  Access through Lotus SYMPHONY
    
    File Descriptions:
    
    COMTST   PRN  Test file to use with COMMA.APP
    COMPSV   CTF  Translation table for Compuserve
    COMPSV   CCF  Setting sheet for Compuserve
    COMMA    APP  Application add-in for file import (comma-delimited)
    COMDOC   WRK  Documentation for COMMA.APP
    CLFORM   WRK  Allows use of a FORM window without leaving window
    CHCKWR   WRK  Converts numbers to spelled-out words
    BIORYM   WRK  Plots Biorythm graph
    APPT     WRK  Appointment Calendar
    ADDRS    WRK  Name & Address notebook and mailing list label printer
    DBSEQ    WRK  Example of FORMs with record #'s
    DECODE   EXE  Analyzer of 123 and Symphony worksheets
    HAMMER   WRK  Demo of graphics macros with trig. functions
    FTMAC    WRK  File transfer utilities (macros) - XMODEM
    FROMTO   TXT  Tech notes on 123 vs Symphony macros
    DECODE   WRK  Can be used with DECODE.EXE
    SYM102   TXT  Tech notes-database conversion from 123
    SPACER   TXT  Data dependent line spacing/database
    ROULET   WRK  Roulette wheel game
    REDIAL   WRK  Redial phone-and-login branch macro
    NYNEW    TXT  New York Lotus SIG Newletter 10/84 (78K file)
    MENUBR   WRK  Examples of {menubranch} uses
    LOTUSM   WRK  Automatic message retrieval from 'World of Lotus'
    SYMQ&A   TXT  Questions and answers from Lotus
    SYNC     WRK  Synchronized windows macros
    TWOCOL   WRK  Hints re: wordprocessing in two columns
    WIDE     APP  Application add-in for file import: allows for long lines
    WIDTST   PRN  Test file for WIDE.APP
    WIDEDOC  WRK  Documentation for WIDE.APP
    WNDWSY   WRK  Macro for synchronizing windows like 1-2-3
    WRDST    CTF  Translation for Wordstar files to Symphony
    DIR-LIST      Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FROMTO.TXT

{% raw %}
```
                          From 1-2-3 to Symphony
                          A Functional Comparison


 A. Commonly Used 1-2-3/Symphony Equivalents
    (Function key names are shown in square brackets)

     1-2-3                        Symphony

 Commands and Functions

     /                           [SERVICES] and [MENU]
                                  (Also / in SHEET window)

     @Today                      @Now (Automatically converted except in
                                  macros)

     Data Distribution           Range Distribution

     Data Fill                   Range Fill

     Data Table                  Range What-If

     Graph View                  Graph Preview

     Graph Save                  Image-Save

     Input Range                 Database Range

     Period (.) as an anchor     TAB  (Period works in SHEET window)

     Print Setup Strings         Print Init-String

     Range Justify               DOC window's word wrap

     Range Label-Prefix          Range Label-Alignment

     Worksheet Erase Yes         [SERVICES] New Yes

     Worksheet Global Default    In SHEET:  [MENU] Settings



 Miscellaneous

     Access System Disk- and     [SERVICES]  Application Attach  DOS.APP
      and File-Manager           (DOS. APP is an Add-in that Lotus sends
                                 with Symphony.  It allows you to
                                 move conveniently between DOS and
                                 Symphony without actually exiting
                                 Symphony.)

     Autoexecute macro           [SERVICES] Settings

     Autoload worksheet          [SERVICES] Configuration

     .DRV                        .SET (For Driver Sets)
     .WKS                        .WRK

 Macros

     /xc                         {branch} {location}
     /xr                         {return}
     /xg                         {branch location}
     /xi                         {if condition} {true} {false}
     /xl                         {getlabel prompt, location}
     /xm                         {menucall macroname}
     /xn                         {getnumber prompt, location}
     /xq                         {quit}
     /                           {menu} or {m}
                                 {services} or {s}

     {BS}                        {backspace} or {bs}
     {del}                       {delete}
     {ESC}                       {escape} or {esc}
     {PgDn}                      {pgdn} or {bigdown}
     {PgUp}                      {pgup} or {bigup}



 B. Settings Respecification

 The following 1-2-3 settings are carried over into Symphony:

 @ Functions
 Data Distribution Ranges
 Data Fill Ranges
 Data Input Cells
 Data Table (What-If) Ranges
 Individually set row or column titles
 Label-Prefix settings
 Named Ranges
 Numeric Format settings
 Recalculation Iterations settings
 Recalculation Method settings
 Recalculation Order settings

 The following need to be respecified in Symphony:

 Spreadsheet

 Global Column Width Settings    In SHEET window:  [MENU]  Settings  Width
  (Symphony default is 9)

 Formulas containing both        Adjust so that both do not occur
 numeric and string              in the same formula.  There are new
 expressions                     string handling capabilities.

 Split windows                   [SERVICES]  Window  Pane



 Database

 Data Fill Start, Step and       In SHEET window:  [MENU]  Range  Fill
  Stop values

 Database ranges entered with    In SHEET window:  [MENU]  Query  Settings
  /Data Query                     Basic Ranges

                                 In FORM window:  [MENU]  Settings  Basic Ranges

 Data Sort Keys and Order        In SHEET window:  [MENU]  Query  Settings
 (Symphony does not sort          Sort-Keys
 the top row of field names.)
                                 In FORM window:  [MENU]  Settings  Sort-Keys


 Graphs

 All settings                    In SHEET window:  [MENU]  Graph  1st-Settings
                                  ... 2nd-Settings

                                 In GRAPH window:  [MENU]  1st-Settings ...
                                  2nd-Settings


 Macros

 Most macros                     Learn mode or programming with Symphony
                                 Command Language.  Many functions done
                                 with macros in 1-2-3 are done with
                                 commands and settings in Symphony.


 Printing
 Print Destination               [SERVICES]  Print  Settings
 Print Margins
 Print Source Range
 Setup Strings (Init-Strings)


 C. Compatible File Formats

 Symphony's Translate utility is a program allowing you to move data
 between Symphony and other programs as follows:

         Source                          Destination
         VisiCalc                        Symphony
         DIF (Data Interchange Format)   Symphony
         Symphony                        DIF
         Symphony                        dBASE-II
         dBASE-II                        Symphony

 See Introduction to Symphony, Chapter 4, for more information.
```
{% endraw %}

## NYNEW.TXT

{% raw %}
```






 No. 12    NYPC  1-2-3 / S Y M P H O N Y  N E W S L E T T E R     Oct 84
           ==================================================

     1231231231231231231231231231231231231231231231231231231231231231
     2 +----------------------------------------------------------+ 2
     3 | INSIDE NEWSLETTER    (NEWSLETTER CONTENTS)            1  | 3
     2 | SYMPHONY             (LOTUS PROGRAMS)              4-11  | 2
     1 | OTHER GURUS          (LOTUS COMPETITORS)          14-23  | 1
     2 | WHO'S ON 1 2 AND 3   (CLUB PARTICIPATION)            25  | 2
     3 | LOTUS ENLIGHTENMENT  (CLUB COURSES)               26-27  | 3
     1 | WELCOME TO LIBRARY   (CLUB SOFTWARE)                 29  | 1
     2 | SHAKABUKU            (CLUB NEXT MEETING)             30  | 2
     3 | FEEDBACK FORM        (CLUB FEEDBACK)                 31  | 3
     1 +----------------------------------------------------------+ 1
     2312312312312312312312312312312312312312312312312312312312312312

                I N S I D E    O U R    N E W S L E T T E R

 Welcome to the N.Y.  1-2-3/Symphony  We were  very pleased to  have over
 Users  Group.   Our  Newsletter  is  50 students  enroll in  our initial
 divided into two sections:           presentation  of Symphony  courses.
                                      Both  the  Beginning  and  Advanced
                                      Courses will  be repeated, starting
  SECTION 1:LOTUS NEWS. Pages 4-23.   January 7. See page 26 for details.
  Here  we  feature news  about  the
  latest  products related  to 1-2-3  We  are  also delighted  to  report
  and  Symphony, how  the two  Lotus  that   according  to   the  lastest
  Programs are doing  on the current  popularity  ratings,  Symphony  and
  popularity  charts,  and what  new  1-2-3 are  now running neck-in-neck
  "goodies" Lotus' competitors claim  for  leadership  in the  integrated
  to offer.                           software  market,   with  Framework
                                      trailing  far  behind.  See pages 4
                                      and  14  for  more  information  on
  SECTION 2:CLUB NEWS. Pages 25-30.   Symphony's spectactular success.
  Our club activites are outlined on
  page 25.  On page  31, you have an  Our  next  meeting will  include  a
  opportunity  to  become an  active  talk  by Doug  Cobb, editor  of the
  participant in the New York 1-2-3/  Symphony Users  Journal, on  why he
  Symphony  Users  Group.   It's  as  believes  Symphony  is  a  superior
  easy as 1-2-3.                      program to Framework.  See p. 6.

     ===============================================================

     The N.Y. 1-2-3/Symphony Users Group is a Special Interest Group
                    of the N.Y. IBM P.C. Users Group.
         For N.Y. IBM PC Users Group information, call 533-NYPC.
             Current N.Y. 1-2-3/Symphony Membership . . 756

















                 T O    O U R    F O R U M    R E A D E R S


 This is the  first Newsletter which  Naturally,   we   will   be   quite
 we are  including in the  "World of  interested  in   your  comments  or
 Lotus"  Forum.                       suggestions.

 As indicated  on pages 9 and  10 of  We   would    also   welcome   your
 this   Newsletter,  we   are  quite  participation  in our  Users Group.
 excited about the  "World of Lotus"  While we are based  in New York, we
 and  its  potential  to  help Forum  have  over   250  subscribers  from
 Members make more  effective use of  outside    the   New    York   City
 their 1-2-3 and Symphony Programs.   Metropolitan area.

 The  Newsletter, as  it appears  on  The   Newsletter   is  being   made
 your  screen, is  identical to  the  available  to you  free of  charge.
 Newsletter     which     we     are  However,   we   have   considerable
 distributing to  our Members except  expenses    in     preparing    the
 for the following pages:             Newsletter.  We would appreciate it
                                      if you would  also subscribe to our
 All ads have  been removed from the  Newsletter or send us a donation to
 World  of Lotus  copy.  This  omits  help our  Users Group meet  some of
 pages 2, 3, 12, 13, 24 and 28.       these expenses.  See  the last page
                                      for  information   on  the  address
 Page 5 is a typewritten form of the  where    you    may    send    your
 Softsel  information which  appears  subscription or donation.
 in our Newsletter.
                                      We  also   welcome  advertisers  to
 Special  print attributes  and page  participate   in  our   Newsletter.
 breaks  have   been  eliminated  to  While  the  ads have  been  omitted
 facilitate on-line reading.          from  the  Newsletter appearing  in
                                      the  World of  Lotus  Forum, we  do
 The  Newsletter, as  it appears  on  maintain    a   loyal    group   of
 the   Bulletin    Board,   may   be  advertisers  who   have  found  the
 downloaded and copied  by any Forum  Newsletter beneficial  in promoting
 member.                              their products.

                                   -2-






























                    T H E    M U S I C    B E G I N S


 Within one month  of the release of  Softsel's  chairman  David  Wagman,
 Symphony to  the public on  July 3,  (Computer  Systems   News  9/10-41)
 the   younger   sibling  of   1-2-3  reports  that  "Softsel has shipped
 accomplished  a feat  unable to  be  more  units (of  Symphony) in  less
 achieved  by any  other "rival"  of  time than any other product."
 1-2-3.
                                      According to  forecasts of software
 Softsel  reported,  in  its  survey  seers,  the   future  for  Symphony
 ending August 7,  that Symphony had  remains equally bright. 
 surpassed the  hitherto unabeatable
 1-2-3  in  sales.  This  marks  the  Harvey Bundy  (Computer Systems New
 first  time  since  the  advent  of  9/10-47)  predicts that  Symphony's
 1-2-3 over 18 months ago that 1-2-3  sales  will  stabilize  at  between
 did not appear in the #1 position.   25,000  and  30,000  at  year  end,
                                      making it either #1  or #2 in sales
 Two  months later,  Softsel reports  over   the   next  year,   probably
 (see  opposite page)  that Symphony  dependent  upon how  strongly 1-2-3
 continues to run neck-and-neck with  continues to be demanded.
 1-2-3, except  that 1-2-3  has once
 again  regained  its  long-held  #1  Similarly, Jim Seymour, a columnist
 position.  However,  since Symphony  for PC Week  (6/7-25), predicts, "I
 is also represented  by a companion  think  Lotus   will  probably  ship
 product, "1-2-3 to Symphony", which  100,000  of   their  $200  Symphony
 stands at  #7, it is  possible that  upgrades  in   the  last   half  of
 the  sales  of   the  two  Symphony  1984."
 products, if combined, would retain
 the   coveted   #1   position   for  Seymour adds:  "Getting the product
 Symphony.                            onto 100,000 desks in six months is
                                      known as `capturing the market'." 
 Just  how  close  the  intra-family
 rivalry of  Symphony and  1-2-3 is,  The   New    York   Times   reports
 was detailed  in a recent  issue of  (10/12-D2):  "As  a result  of  the
 Computer  Systems  News  (9/10-41).  success  of  its  Lotus  1,2,3  and
 CSN reports  that during  the first  Symphony  programs, sales  at Lotus
 two   months  after   Symphony  was  have risen dramatically in the last
 introduced,  Symphony  sold  65,000  year.   It posted  revenues of  $53
 copies   while   1-2-3   was   only  million during 1983, its first year
 slightly ahead with 70,000.          of operation, and industry analysts
                                      expect   revenues  to   reach  $140
 Framework,  Symphony's  arch-rival,  million to $160 million this year."
 while    briefly    appearing    in  That's  a three-fold  increase over
 Softsel's  top  ten during  August,  an historic first year!
 has now skidded out of this favored
 list,   and  has   fallen  to   the  The  stock  market has  duly  taken
 disappointingly  low   position  of  notice  of  Symphony's  spectacular
 #20.  See p. 16 for more details on  success.  Since  the public release
 the  suprisingly  poor  showing  of  of the Symphony  program, the price
 Framework  in  the  closely-watched  of   Lotus   stock  has   increased
 Symphony-Framework contest.          approximately 50%.

                                  -4-












               T H E    M U S I C    B E G I N S (Continued)





                  S O F T S E L    H O T    L I S T  (tm)
                  -------------    -----    -------

                        WEEK OF OCTOBER 8, 1984


                    This Week

                        1            1-2-3

                        2            Symphony

                        3            PFS:File

                        4            Multiplan

                        5            Chart

                        6            PFS:Write

                        7            PFS:Report

                        8            1-2-3 to Symphony

                        9            Filevision

                       10            Thinktank

                      -----------------------------------

                       20            Framework

                      -----------------------------------




                 The HOT LIST is compiled from Softsel sales to
                 over 9,000  retail  outlets in  50 states  and
                 45 countries.





                                    -5-














              T H E    M U S I C    B E G I N S (Continued)


 Since  the introduction on February  We are also be presenting this same
 14  of  the Symphony  Program,  the  disk of Lotus Contest Macros to our
 N.Y.   1-2-3/Symphony  Users  Group  Members   through    our   Software
 has  been  honored  to  have  three  Library.  See  page 29  for details
 presentations   by  Lotus   of  the  on how to  obtain our public domain
 Symphony Program,  including a live  Symphony disks.
 demonstration   in   July  of   the
 Symphony  Program by  Chris Morgan,  We  are  currently forming,  within
 Vice-President   of  Communications  our Users Group, a Subgroup devoted
 for Lotus.                           to  actual  users of  the  Symphony
                                      Program.  This group will be headed
 In conjunction with Chris' talk, we  by   Barbara    Brown   of   Morgan
 presented  in  the  June  and  July  Guaranty.  See page  25 for details
 issues of our Newsletter a two part  on this new Subgroup.
 interview  with  him  on  questions
 which  we  have found  of  greatest  The  unexpected   acclaim  accorded
 interest to  our Members concerning  earlier this  year by  the computer
 the Symphony Program.                media  to  a   rival  of  Symphony,
                                      Framework, has resulted in creating
 We  are  following up  our  initial  a contest    between   Lotus    and
 presentations   of  Symphony   with  Ashton-Tate of historic importance.
 monthly articles  in our newsletter
 providing  the  latest  news  about  Because of the significance of this
 Symphony and its major competitors.  contest  and  its   impact  on  the
                                      future   of    the   microcomputing
 We are also about to offer, for the  industry, the  N.Y.  1-2-3/Symphony
 second   time,   two   courses   in  Users Group decided to embark on an
 Symphony - Beginning and Advanced -  extensive   program   to  aid   our
 which will begin  on January 7.  We  members   in  reaching   their  own
 are delighted  to report  that over  conclusions     in    the     Great
 50   students   enrolled   in   the  Symphony-Framework   Debate.    See
 Beginning  and   Advanced  Symphony  page 14 for details. 
 Courses during the  first time they   
 were   offered   in   September   -  Next  month, Doug  Cobb, author  of
 November of this year.  See page 26  the textbook, "Mastering Symphony",
 for   details   on   our   Symphony  and publisher of the Symphony Users
 Courses.                             Journal,  will  be  concluding  our
                                      presentation   of    the   Symphony
 We were delighted to have been able  Framework   debate   with  a   talk
 to include  a set of Macros  in our  detailing why  he believes Symphony
 Advanced Course which were initally  is a superior product to Framework.
 developed  at Lotus,  as part  of a  Doug's talk will be the counterpart
 Contest  conducted   internally  to  to  Adam  Green's  presentation  in
 promote   the   understanding   and  August,     where    he     claimed
 appreciation of  Symphony's Command  Framework's   superiority  to   the
 Language.                            Symphony Program.

                                   -6-















               T H E    M U S I C    B E G I N S (Continued)


 In  conjunction  with  Doug  Cobb's  On  word  processing, Cobb  states,
 appearance  before  our next  Users  "Symphony's  word processor  is the
 Group  meeting,  we  are  including  easiest  part  of  the  program  to
 within  this   Newsletter  excerpts  learn  and use.   That ease  of use
 from a  review which  Doug recently  does not imply that Symphony's word
 wrote on Symphony.                   processor is an incomplete program.
                                      On the contrary, Symphony is one of
 Cobb's  article   begins,  "Do  you  the most functional word processors
 remember  how  you  felt  when  you  we have seen."
 first  saw Lotus  1-2-3 in  action?
 If you  were like  me, after  a few  Cobb concludes, "By  now, it should
 minutes of  watching 1-2-3 operate,  be  clear that  Symphony is,  in my
 you began to think  of all the ways  opinion, an excellent program."
 you  could use  the program,  and a
 small smile  crept onto  your face.  He   ends   his    review   on   an
 When  I  worked   with  Lotus'  new  interesting  conjecture,  "I  think
 product,  Symphony,  for the  first  Symphony has a  chance gradually to
 time   I  had   exactly  the   same  replace  1-2-3  as the  number  one
 feeling; only  this time  the smile  business software product."
 was a full-fledged grin.

 Cobb  then goes  on to  elaborae on  Doug  Cobb's review  is typical  of
 why  he  regards   Symphony  as  an  the  numerous other  evaluations of
 "incredible product".                Symphony which we have noted in our
                                      previous issues.
 With regard to  the windowing capa-
 bility,  he  states, "Probably  the  For   example,  Popular   Computing
 most obvious change in Symphony, is  presented a highly laudatory review
 the  program's   windowing  system.  of Symphony,  which we  included in
 Once  you  get   the  hang  of  it,  the  May issue  of our  Newsletter.
 Symphony's windows  are fairly easy  In that review, Paul Bonner, Senior
 to  manage, and  they add  terrific  Editor   of    Popular   Computing,
 flexibility to the program."         writes, "Symphony  is aptly titled.
                                      When  you  add together  the  parts
 Cobb  says of  Symphony's graphics,  played by each of the sections of a
 "Probably  the  nicest  feature  of  symphonic orchestra  or by  each of
 Symphony is its  ability to display  the  applications within  Symphony,
 a worksheet  and  a  graph  on  the  the  results is  something uniquely
 screen at the same time."            powerful and  compelling.  Symphony
                                      includes and integrates  all of the
 On   the   database  function,   he  most      popular      productivity
 writes,  "Symphony's  data base  is  applications  as  elegantly as  any
 substantially improved over 1-2-3's  system  on  the  personal  computer
 data base.  With the combination of  market.  Because of  that, it would
 the enchance data  base and the new  be a wise choice for many people to
 Symphony Command Language, Lotus is  make  Symphony  the  first  program
 clearly challenging the stand-alone  they  ever buy.   It  could end  up
 programmable  data   base  managers  being the only program they'll ever
 (especially dBASE II)."              need."

                                   -7-












               T H E    M U S I C    B E G I N S (Continued)


 During  the past  five months,  the  As  part  of  this  seminar,  Lotus
 N.Y.   1-2-3/Symphony  Users  Group  presented  the participants  with a
 has   been  preoccupied   with  the  program   called    Decode.exe,   a
 historic    confrontation   between  valuable  aid to  add-in developers
 Symphony    and    Framework    for  and others  who wish  to understand
 supremacy    in   the    integrated  the   specific   layouts   of   the
 software market.                     Symphony and  1-2-3 files.   We are
                                      delighted  to  report that  we  are
 The  surprisingly  poor showing  of  making   the   Decode.exe   program
 Framework in  this Contest  and the  available  to our  Members via  the
 spectacular  success   of  Symphony  Software Library.  See  page 29.
 (see page 4), now permits our Users
 Group  to turn  its attention  from  One example  of the  new literature
 the  Symphony-Framework Contest  to  to come  out of  Symphony's success
 providing  its  members  with  more  is  the   Symphony  Users  Journal,
 effective    ways   of    utilizing  published by our next speaker, Doug
 Symphony to  meet their programming  Cobb.  This is a monthly periodical
 needs.                               dedicated to users  of the Symphony
                                      Program.   Regular features  of the
 Although  the Symphony  Program was  Journal will include major articles
 released  only  a few  months  ago,  about     each    of     Symphony's
 numerous vendors,  anticipating the  components, a monthly column on the
 popularity   which   Symphony   has  Symphony   Command  Language,   and
 achieved,   announced    plans   to  reviews  of  products  designed  to
 produce     add-ins,     templates,  enhance the Symphony Program.
 utilities,   literature,  etc.   to
 supplement the Symphony Program.     Forthcoming    issues     of    our
                                      Newsletter  will  focus heavily  on
 In addition,  it has  been reported  the  burgeoning  number  of  books,
 (Computers &  Electronics 9/84-112)  disks,    videotapes,    templates,
 that Lotus itself  will be offering  utilities,  and  add-ins which  are
 add-ins to  Symphony in  such areas  being daily  announced to  meet the
 as   spelling   checkers,   project  needs of Symphony Users, as well as
 management,     and     appointment  the many  computers being announced
 calendars.                           as providing Symphony support.

 Seminars  sponsored  by Lotus  were  As one example, we cite a recent ad
 recently  held  in Boston  and  San  of NCR  (New York  Times 10/11-D15)
 Francisco,   where  Lotus   offered  which    carries   the    following
 detailed information to prospective  headline:  "THE PERFECT  INSTRUMENT
 add-in developers  on how  they may  FOR YOUR SYMPHONY IS NOW PERFORMING
 cooperate  with Lotus  in marketing  AT AN NCR  DEALER NEAR YOU." Sounds
 their   add-ins.     One   of   the  a lot   like   the  ads   appearing
 participants,   Enno  Bekker,   has  regularly  in  the media  in  which
 kindly provided our Newsletter with  vendors  attempt  to promote  their
 a detailed account of the seminar's  products by  having them associated
 activities (see page 11).            with 1-2-3.

                                   -8-














              R E A C H I N G    O U T    T O    L O T U S


 One   of   the   more   significant  Each month, Lotus publishes its own
 developments   to   come   out   of  Newsletter,   called   the   "Lotus
 Symphony  has  been the  "World  of  Newsletter",  which appears  on the
 Lotus",  a  Bulletin  Board  System  World of Lotus BBS.
 Lotus now sponsors on CompuServe.
                                      The September issue contained the
 Purchasers    of    Symphony    are  following articles:
 automatically entitled  to one hour
 of free time on World of Lotus as a  1. Lotus Compatibility
 result  of  their purchase  of  the  2. 1-2-3/Symphony Exchange Program
 Symphony Program.   It is difficult  3. 1-2-3 - Did you know?
 to see how they can resist becoming  4. Symphony - Did you know?
 a steady user of this System.        5. Symphony Questions and Answers
                                      6. Symphony Courseware
 Many  of  you   may,  in  fact,  be  7. 1-2-3 for the PC Jr.
 reading  this  Newsletter from  the  8. Tips on Using 1-2-3.
 World  of   Lotus  Bulletin  Board,
 since  our Newsletter  is available  The feature  of the World  of Lotus
 to users of World of Lotus users to  we  found  most  exciting  was  the
 both observe and download.           Symphony   User   Forum.    It   is
                                      possible, in this Forum, to ask any
 The World of Lotus contains so many  question whatsoever  about Symphony
 valuable features that  we can only  and  expect  a reply  within  24-48
 summarize a  few of the  major ones  hours.   Furthermore,  a  user  can
 in this article.   We will be going  browse  through  approximately  200
 into  much   more  detail   on  the  questions  and   answers  of  other
 benefits   of    this   System   in  members   of    the   Forum.    The
 subsequent issues.                   information  which can  be obtained
                                      in  this manner  about Symphony  is
 We  also  found that  the  Symphony  incredibly invaluable.
 Program's  communications  features
 were extremely helpful in accessing  The XA  Files, while  technically a
 World of Lotus.   See the following  part  of the  Symphony User  Forum,
 page for a  complete description of  offer   a   distinct  but   equally
 how   we  used   Symphony's  commu-  important   benefit   to   Symphony
 nications  system   in  conjunction  users.    On  these   files  appear
 with the World of Lotus BBS.         numerous  examples  of  Macros  and
                                      other  Symphony  programs, each  of
                                      which  can  be  downloaded  without
 In this issue of our Newsletter, we  cost by a World  of Lotus user.  As
 will focus on  three major features  well as  being of benefit  in their
 of the World of Lotus:               intended  area of  application, the
                                      XA   files    are   extraordinarily
    . The Lotus Newsletter            helpful as  an educational  tool in
    . The Symphony User Forum         mastering  the fine  points of  the
    . The XA Files                    Symphony Program.

                                   -9-















                   I N    P E R F E C T    H A R M O N Y 
                           by Dr. Bernard Backhaut

 This section  of the  Newsletter is  Once  having  captured  information
 devoted  to applications  which our  into our spreadsheet, we were later
 Users  Group   is  making   of  the  able to browse through the captured
 Symphony Program.                    data  off-line.   We  then  further
                                      removed  any unwanted  messages and
 In the July and August Newsletters,  edited those messages which were of
 we    explained   how    the   Word  interest to us.
 Processing  features   of  Symphony
 have  been   extremely  helpful  in  World   of   Lotus  contains   many
 writing our Users Group Newsletter.  Symphony  files  of  value  to  our
                                      Members, which have been donated by
 In this  issue, we discuss  how the  Lotus to  users on a  public domain
 communications features of Symphony  basis.   We  were  easily  able  to
 are   currently    aiding   us   in  download  these  files,  using  the
 obtaining important information for  Symphony File-Transfer command.
 our Members from the World of Lotus
 Bulletin  Board (see  page 9  for a  At  one  time,  we had  a  question
 description of  the World  of Lotus  about Symphony which required Lotus
 System).                             to examine a file of ours.  We were
                                      able to  upload this file  to Lotus
 Symphony's  communications  package  without effort, using  an option in
 permits  the  login  of  our  Users  the      File-Transfer     command.
 Group  computer with  the World  of  Examination  of  the uploaded  file
 Lotus  to  occur  in  a  completely  enabled   Lotus   to   answer   our
 automatic   fashion.   The   entire  question readily.
 sequence  of  keystrokes, from  the
 beginning of the  call to the World  One  of  our  members  wanted  some
 of  Lotus,  until   access  of  the  information  which we  had obtained
 Symphony     Users     Forum     is  from  the  World   of  Lotus.   The
 accomplished, happens automatically  Wait-Mode   command   enabled   our
 through    presetting   appropriate  computer  to  answer  the  member's
 parameters   on  a   Communications  call  automatically   and  ready  a
 Settings Sheet.                      connection  with  his computer  for
                                      transmittal of the data to him.
 Once having logged  in to the Lotus
 Bulletin Board, we  were then able,  As  is   evident  from   the  above
 by  utilizing   Symphony's  capture  discussion,   we  have   found  the
 mode,  to  transfer information  of  Symphony  communications package  a
 importance about Symphony, from the  tremendous  aid in  simplifying our
 World  of Lotus  BBS to  a Symphony  interactions  with   the  World  of
 spreadsheet on our computer.         Lotus  Bulletin  Board  System  and
                                      enabling  us to  obtain information
 Moreover,  we  are able  easily  to  of benefit to our Members.
 selectively  capture only  messages
 from the  Lotus BBS of  interest to  In the next issue, we will describe
 our   Users   Group,  because   the  how  the  Data   Base  features  of
 Capture  facility  of Symphony  has  Symphony   have    helped   us   in
 the capability to be turned off and  reorganizing  our Mailing  List and
 on merely  by pressing  the Capture  in   printing    Labels   for   our
 function key repeatedly.             Newsletter.
                                    -10-












                  C O M E    J O I N    T H E    B A N D 
                              by Enno Becker

 Lotus   is  enlisting   independent  The Library  Manager, known inform-
 software   developers   to   extend  ally as "Hyperspace",  is an espec-
 Symphony's  capabilities  into  new  ially exciting feature for Symphony
 areas by  providing technical spec-  programmers.  Once a macro has been
 ifications   and  new   programming  developed in the  usual way, it may
 tools for 1-2-3 and Symphony.  In a  be removed  from the  worksheet and
 series of Technical Conferences for  placed in a special area in memory.
 Independent  Developers   held  re-  The Range  Names remain  active and
 cently in Boston and San Francisco,  the code has  the same effects when
 Lotus   released  previously   pro-  executed.    The    macros   remain
 prietary information  and announced  present, as   worksheet  files  are
 several new programming tools.       saved and retrieved. 

 The Worksheet File  Format for both  In the  most far-ranging discussion
 1-2-3   and   Symphony   has   been  of  the  day, Lotus  software  dev-
 published by Lotus.   The codes and  opment  engineers   described  Sym-
 layouts used in the variable-length  phony's   Add-in  Tools   facility.
 records are completely described in  Using procedures and object modules
 a document  which  may be  obtained  from  Lotus, qualified  independent
 from   the   User  Group   Software  developers  will  soon be  able  to
 Library (see page 29).               write  applications   which  become
                                      part of Symphony, sharing access to
 Lotus  has also  developed and  re-  the  worksheet and  user interface.
 leased  to  the   public  domain  a  The creation of  an Add-In requires
 program  called   DECODE.EXE.   The  sophisticated  programming in  C or
 program  will read  any WKS  or WRK  assembly language.
 file and  print a record  by record
 translation.   DECODE.EXE can  also  As  a system  designer involved  in
 be   obtained  from   our  Software  several   Symphony    projects,   I
 Library.                             believe that the  new products will
                                      increase  confidence in  Symphony's
 Three  products were  announced for  capabilities  as  a foundation  for
 release  in  the first  quarter  of  specialized applications. 
 1985.   The 1-2-3  Macro Conversion
 Aid  will perform  a direct  trans-  I am    currently    involved    in
 tion  from 1-2-3  code to  the Sym-  standardizing  Symphony programming
 phony equivalent.   The Range Input  techniques  for more  effective use
 Add-In   will  create   a  Symphony  in large projects.  Readers who are
 capability  similar  to  the  Range  interested  in   additional  infor-
 Input   command   of  1-2-3.    The  mation about  the conference  or in
 Command  Language  Library  Manager  discussing   Symphony   programming
 will  allow  macro programs  to  be  techniques  are invited  to contact
 logically separated from data.       me at (212) 807-9206. 

                                   -11-


















                           O T H E R    G U R U S

     A-to-Z           All-in-1         Unison           SeriesOnePlus
     Jack2            SuperCalc3       TMakerIII        VisiCalcIV
     4 in 1           Integrated7      20-20            Peachtext5000
     Electric Desk    Soft Office      Silicon Office   Integrated Office
     Assistant        MBA              KnowledgeMan     Number Cruncher
     Business Manager Information Mgr  Report Manager   Decision Manager
     Consultant       Professional     Executive        Profit Center
     Framework        Grid             Benchmark        Latitude
     Easy             Practical        Intuit           Smart
     Ability          Enable           Handle           Personal Decision
     Open Access      Golden Gate      Propel           Starburst
     Aura             It               Ovation          Encore
     Lisa             Jane             Oman             Hello Charlie


 As is evident  from the above list,  Says  PC  Week  of the  Symphony  -
 1-2-3  and  Symphony now  have  the  Framework  confrontation  (5/22-3),
 distinction  of attracting  over 50  "Grab a ringside seat and watch two
 competitors.                         software heavyweights slug it out."

 However,   during   the  past   few  Byte  (7/84-119)  suggested,  "This
 months,  it became  evident to  the  summer's  hottest  battle won't  be
 computer community that the Contest  between  rival  baseball  teams  or
 had  narrowed  to a  head-on  clash  even  rival  football leagues,  but
 between    Lotus'   Symphony    and  between the purveyors of integrated
 Ashton-Tate's Framework.             software."

                                      Computer      Advertising      News
 The   New   York  Times   (5/28-34)  (6/30-10),  in  a full  page  story
 dramatically  depicted  the  status  about     the    Symphony-Framework
 and  importance  of  this  Contest:  advertising    duel,   began    its
 "The attention  of the  industry is  coverage   with  the   observation,
 focused on a battle brewing between  "Neither    the   Democratic    and
 two of  the biggest  and best-known  Republican   conventions  nor   the
 players: Lotus, based in Cambridge,  Olympic  games  figure   to  be  as
 Mass.,  and  Ashton-Tate of  Culver  bitterly  fought  as this  summer's
 City, Calif."                        other contest -  the battle between
                                      Lotus and Ashton-Tate."
 Continued  the Times:  "The success
 of  these two  products may  deter-  PC Magazine portrayed the intensity
 mine  which   company  becomes  the  of  the conflict  as follows:  "War
 premier provider  of office produc-  seems to be the appropriate word to
 tivity  software  to  the  nation's  describe   Ashton-Tate's  marketing
 largest customers."                  strategy for Framework."

                                   -14-


















                 O T H E R    G U R U S (Continued)


 The N.Y.1-2-3/Symphony Users Group,  Our third  speaker was  Adam Green,
 recognizing the historic importance  one   of  the   chief  critics   of
 of the  Symphony-Framework Contest,  Symphony and a leading proponent of
 is   presenting    a   program   of  Framework.    Adam  Green   made  a
 activities  over  a  span  of  five  "live"  presentation  of  Framework
 months which we  believe will equip  before our  group and engaged  in a
 our Members to  go beyond "watching  heated discussion  with our members
 two  software heavyweights  slug it  about   the   relative  merits   of
 out" and will actually provide them  Symphony and Framework. 
 with enough information to reach an
 appropriate choice in this historic  Our   fourth  presentation   was  a
 decision.                            point-by-point     comparison    of
                                      Symphony    and     Framework    by
 See the July Newsletter for a Press  Micro-Trek,       with       "live"
 Release  we  issued  describing  in  presentations  of the  two programs
 detail  the  five month  agenda  of  side-by-side.  Members were able to
 activities   we   are   presenting,  observe the  relative advantages of
 associated   with    the   Symphony  the  two  programs when  performing
 Framework confrontation.             similar tasks. 

 Our agenda  began with  an kick-off  Our five part series concludes with
 talk  by  Michelle Preston  on  the  a talk by Douglas  Cobb on November
 topic, "Symphony and  the Future of  7.    His   talk    will   be   the
 Integrated   Software".    Michelle  counter-part   of    Adam   Green's
 Preston is  widely regarded  as one  presentation.  Adam Green indicated
 of  the leading  financial analysts  why  he  believed Framework  was  a
 on  Wall  Street,   and  her  talk,  superior program to Symphony.  Doug
 coming on the eve of the release of  Cobb   will  defend   the  opposite
 the    Symphony    and    Framework  position,  in   explaining  why  he
 Programs,  was  regarded  of  great  believes   that   Symphony   is   a
 significance   to    the   computer  superior program to Framework.
 community.
                                      Doug  Cobb  is   currently  in  the
 Our   second  meeting   featured  a  forefront    of     the    Symphony
 "live" presentation  of Symphony by  community,   having    written   an
 Chris  Morgan,  Vice  President  of  outstanding    textbook   entitled,
 Communications  for  Lotus and  the  "Mastering  Symphony"   and  having
 principal   spokesperson   of   the  established   a   new   periodical,
 Company to  the computer community.  called,    "The   Symphony    Users
 We  were  also  fortunate  to  have  Journal."  In  addition  to  Doug's
 Chris  offer our  Newsletter a  two  comments on  the Symphony-Framework
 part  interview on  Symphony, which  debate,   members   will  have   an
 we included in  the July and August  opportunity at our meeting to learn
 issues.                              more about his Users Journal.

                                   -15-

















                         OTHER GURUS (Continued)


 While  we  have been  delighted  to  On  page  24,    under  the  title,
 have been able to play a major role  "A Crack  in the  Framework" appear
 in  the  in the  Symphony-Framework  several  of  the  the  reasons  why
 debate during the  past six months,  software   users  have   turned  to
 we  are also  happy to  report that  Symphony    over    Framework    in
 Symphony,  with each  passing week,  overwhelming   numbers.    In   its
 is more clearly establishing itself  reviews of  Framework, the computer
 as  the  winner  in  this  historic  press  has  provided an  incredible
 software confrontation.              array  of   reasons  why  consumers
                                      should  be  wary  about  using  the
 The  debate  over   the  merits  of  Framework program.
 Symphony and Framework continues in
 the computer media,  but by now the  The computer  community reaction to
 integrated   software  users,   the  the  Symphony Framework  debate has
 ultimate  judges  in this  contest,  been  extensively  reported in  the
 have had an adequate opportunity to  computer   press.    For   example,
 cast their votes.                    PC Week (7/3-14)  declared Symphony
                                      to  be  an  early  victor  in  this
 As shown  on pages  4 and 5  of our  Contest under  the banner headline,
 newsletter,  Symphony   is  running  "Survey  Sees Symphony  Winning 1st
 neck and neck  with 1-2-3 for first  Movement."
 place  in  the integrated  software
 market.   This  has been  the  case  Stated    PC Week:     "The    well
 since early July, when Symphony was  publicized   confrontation  between
 first introduced to the public.      Lotus's Symphony  and Ashton-Tate's
                                      Framework  begins  this  week,  and
 Framework, on the other hand, while  indications  are   that  the  first
 briefly  in the  top 10  during the  round will go to Lotus."
 first  week  of  its  introduction,
 slipped  almost immediately  out of  Observed PC  Week (7/3-1) "Symphony
 the   top   10,  and   has   almost  was  shipped   on  time;  Framework
 continuously fallen  since then, to  missed deadline."
 now occupy  the unenviable position
 of  #20  in the  business  software  Harvey   Bundy   III,  a   software
 market.                              industry  analyst   with  Chicago's
                                      William  Blair &  Co., said  that a
 Enough  time  has  now  passed  and  delay  of more  than a  month could
 enough votes have been cast in this  hurt Framework sales  by as much as
 Contest to make  it highly unlikely  20%  if  the products  are  roughly
 that     Framework    will     ever  equivalent (PC Week 7/10-4).
 effectively compete  with Symphony.
 So  what  was  billed  as  a  major  Bundy  also  observed, "I've  heard
 contest   between   Framework   and  lots of people say,  `When do I get
 Symphony has in  fact turned out to  Symphony?' I  haven`t heard anybody
 be a runaway victory for Symphony.   say `When do I get Framework?'"

                                   -16-
















                         OTHER GURUS (Continued)


 PC Week continues, "Interviews with  The  InfoWorld   article  concludes
 PC coordinators of  10 medium sized  with  a  quote   from  Dr.  Bernard
 to   large  businesses   turned  up  Backhaut,  Chairperson of  the N.Y.
 substantial  interest in  Symphony.  1-2-3/Symphony  Users   Group:  "We
 Only  two   were  unaware   of  the  took a poll of  our users and found
 product.  Five said they planned to  that  80  percent   were  going  to
 buy   at   least   one   copy   for  upgrade to Symphony."
 evaluation,  and,  of  those,  four
 said  they  could forsee  uses  for  The failure of Framework to provide
 several copies."                     significant competition to Symphony
                                      in  the  judgment  of  the  "bottom
 On  the other  hand, PC  Week found  line"  judges -  the computer  user
 that  "only  four  of the  10  were  community  -  should   come  as  no
 aware  of Framework,  and only  two  suprise   to   followers   of   the
 said  they expected  to compare  it  integrated   software  marketplace.
 with Symphony."                      Recent  news stories  have depicted
                                      the collapse  or demise  of several
                                      would-be   challengers   of   Lotus
 Similarly,   InfoWorld   (9/24-12),  products.
 writing under the banner, "Symphony
 Leads   Framework   -  Many   Users  For example,  InfoWorld carries the
 Upgrading  from   1-2-3",  reports,  following headline in its October 1
 "Lotus  Development's Symphony  has  issue, page 13: "Business Solutions
 made  a  fast   break  out  of  the  Folds - Lack of venture capital and
 starting  gate  in  its  integrated  poor sales are cited."
 software  race  with  Ashton-Tate's
 Framework.   Many  users of  Lotus'  The   article   begins,   "Business
 1-2-3 are upgrading with the "1-2-3  Solutions  Inc. in  King Park,  New
 to  Symphony" product,  and dealers  York,   is   folding   because   of
 report  many  customers are  buying  insufficient     venture    capital
 the Symphony package outright.       funding  and lack  of sales  of its
                                      much-touted   integrated   product,
 The  InfoWorld   article  continues  Jack2."
 with a  quote from Craig  Fertal of
 Quest Computers,  a computer dealer  Earlier this year, Jack2 had staged
 in Palo Alto,  California, "I can't  a major    advertising    campaign,
 speak for  other dealers,  but I've  claiming its superiority over 1-2-3
 sold one  copy of Framework  and 10  in a public  contest, whose results
 copies of the Symphony upgrade."     were  strongly  criticized  in  the
                                      computer press by Dr. Backhaut.
 InfoWorld   reports:    "The   five
 ComputerLand  outlets  of  Phoenix,  The InfoWorld  article reports that
 Arizona   have    had   experiences  Business   Solutions    had   spent
 similar to  Quest's.  `We've  got a  $3 million   to   $5   million   in
 lot of  orders in for  the Symphony  promoting   Jack2,  prior   to  the
 upgrade,' says  Pat Perelli, `We've  product's  collapse.  One  can only
 also sold 25  copies of Symphony in  speculate  how much  Framework will
 the last  week.  We've  started off  spend contesting Symphony before it
 real light with Framework.'"         will reach a similar conclusion.

                                  -17-












              A   C R A C K   I N   T H E   F R A M E W O R K


 A considerable number of criticisms  PC   Week  (8/7-124)   also  notes,
 of Framework  have now  appeared in  "Framework   cannot   automatically
 the computer  press.                 convert  keystrokes to  upper case,
                                      so   a  programmer   developing  an
 In  this  article,  we  review  the  application   must  make   it  test
 major criticisms of Framework which  separately    for     upper-    and
 have  recently appeared  in ten  of  lower-case   responses    to   user
 the leading computer journals.       prompts.

 PC  Week (4/7-1)  points out  that,  Personal Software (7/84-99) claims
 unlike  Symphony, Framework  cannot  that   Framework  appears   to  run
 run on a  single disk drive system,  slower than 1-2-3. 
 making  it  unadaptable to  use  on
 portable  computer   systems.   The
 article  also notes  that Framework  Computer and  Electronics (8/84-43)
 is not aimed at number-crunchers.    points  out that,  with respect  to
                                      Framework's alleged  superiority in
 In  a   subsequent  issue,  PC Week  word    processing    capabilities,
 (7/10)  reports "Company  spokesmen  superscripting   and   subscripting
 announced   that  Ashton-Tate   has  have    not   been    included   in
 scrapped its plan  to recommend use  Framework, no page  breaks within a
 of the  product on PCS with  a mere  frame are  possible, and  a section
 256K bytes  of memory.   Instead it  of a document  cannot be referenced
 will recommend the use of PC's with  by page number -  the frame must be
 a minimum  of  384K  bytes.   Since  paged through a screen at a time.
 Lotus is advising a minimum of 320K
 bytes  for   Symphony,  the  change  Furthermore,   C&E   reports   that
 means   Framework  will   lose  tha  Framework   does   not   have   the
 advantage of being able to run on a  capability to "jump"  directly to a
 smaller system than Symphony and it  specific  cell -  entering data  in
 will  pick up  the disadvantage  of  other than  row order  requires two
 requiring an even larger one."       keystrokes   between   each   entry
                                      instead  of one.
 And  in a  later issue(7/17-3),  PC
 Week  remarks,   "Framework  stores  The Computers  & Electronics review
 data    in    memory   much    less  also   claims   that   adding   and
 efficiently      than     competing  deleting rows  is more  clumsy than
 products.  A  384K byte  system can  in competitor's products.
 handle a speadsheet  of 1,860 cells
 or  270  database   records  of  10  The Computers & Electronics article
 fields each  or 42 pages  of text."  concludes,   "Framework's  greatest
 Comments  Ashton-Tate's  president,  weakness  is   that  it   does  not
 David   Cole,  "This   thing  eat's  tightly    integrate    the    word
 memory.   We knew  it was  a memory  processing      and     spreadsheet
 hog all the way along."              functions."

                                   -18-
















      A   C R A C K   I N    T H E   F R A M E W O R K (Continued)


 Byte (8/84-122)  points out,  "On a  Popular Computing (9/84-102) warns,
 monochrome   monitor,   Framework's  "The automatic linking accomplished
 word  processor  does  not  produce  by  Symphony's single  worksheet is
 true   what-you-see-is-what-you-get  not   in   effect   in   Framework.
 output."                             Indeed,  if you  want one  frame to
                                      reflect  changes  made in  another,
 Byte  also warns  that even  though  you must interlock  them overtly by
 Framework offers a  DOS window, "As  inserting a reference to the second
 Framework  cannot  control all  the  frame in the first." 
 screen  handling routines  employed
 by an external  program, it may not  Popular   Computing  adds,   "Those
 be possihle to run within a partial  whose    work   involves    complex
 screen window -  the program itself  analyses of numerical  data and the
 might grab the whole screen."        creation of  reports based  on such
                                      analyses  will probably  be happier
 As for the  much heralded outlining  with Symphony."
 feature  of Framework,  Byte offers
 the following reservation, "This is
 the   first   time   that   outline  Robert  Quinn, in  Computer Living,
 processing  has  been brought  into  (8/84-8) observes, "Symphony's form
 integrated  business software  as a  creation seems  to be  easier, more
 major  organizing  feature.  It  is  flexible,  more  powerful, and  can
 unfamiliar   and  not   necessarily  handle more records than Framework.
 suited to  the working  styles that  For example,  using a 512K  RAM IBM
 the software marketplace has caused  PC,  I created  identical databases
 many users to adopt."                in  each  package  which  had  five
                                      fields,     each    having     nine
 List      (8/84-104)      cautions,  characters.  Framework would accept
 "Virtually  everything you  do with  slightly under 600 records before I
 Framework must be  broken down into  got   a   "memory  full"   message.
 categories   and  organized   in  a  Symphony  accepted more  than 2,800
 logical     manner.     In     word  records."
 processing,   particularly,  you're
 forced  to do  this because  of the  With regard  to communications, the
 32K  size limit  of any  individual  Computer   Living   article   says,
 frame."                              "Framework's   communications  mode
                                      was  something   of  a  last-minute
 List also  notes, "In  its graphics  patch job."
 mode,   Framework  is   limited  to
 traditional business graphs, and it  The article also compares the speed
 must   derive  its   data  from   a  of   the  Symphony   and  Framework
 spreadsheet.   Framework lacks  the  pacages  and   reports:  "Framework
 powerful     Lisa-like    free-draw  seems  to  be  considerably  slower
 capability."                         doing spreadsheet calculations."

                                   -19-

















      A   C R A C K   I N    T H E   F R A M E W O R K (Continued)


 Personal Computer  World (8/84-120)  The Personal Computer World article
 warns  a potential  Framework user,  also notes, "An interesting feature
 "If you want to include spreadsheet  of Symphony which  is not permitted
 data in a  word processor document,  in  Framework  is  the  ability  to
 you have to get devious and contain  change the type of a window."
 frames  within   frames.   Although
 this works, it  is very clumsy, and  The    same    article    observes,
 getting  the imported  data exactly  "Symphony's    spreadsheet   calcu-
 where   you  want   it  can   be  a  lations  are  decidely faster  than
 problem."                            those of  Framework's.  Ashton-Tate
                                      claims that Framework's spreadsheet
 Adds Personal Computer World, "When  can be  used for  accounts ledgers,
 you  look at  Symphony, you'll  see  cash   flow   analysis,  job   cost
 that    it's    much   easier    to  estimates  and budget  preparation,
 incorporate   selected  spreadsheet  yet it's worth questioning how easy
 data."                               it would be  to implement this sort
                                      of project."
 Continues Personal  Computer World,
 "If you  inadvertently press  a key  To   back   up   this   contention,
 for too long, you can be treated to  Personal  Computer World  reports a
 a lengthly   sequence  of   redraws  benchmark  test,  which found  that
 while  the   software  catches  up.  integer  and decimal  recalculation
 This  sequence   can  take  several  time for  Framework was 2  rows per
 seconds    to    finish   and    is  second while  for Symphony,  it was
 unstoppable."                        48 rows per second, making Symphony
                                      24  times as  fast as  Framework in
 The Personal Computer World article  this task.
 considers in  detail the capability
 to switch modes from spreadsheet to  PC  Magazine   (11/13-35)  reports,
 word   processing  and   concludes,  "The  battle for  supremacy between
 "This  ability to  switch modes  on  the new "super" integrated software
 the   fly  is   one  of   the  most  packages  has  been   given  a  new
 impressive aspects of Symphony.  If  wrinkle  with  the introduction  of
 you attempted to  perform the above  the IBM PC-AT."
 example in Framework, the job would
 be much more difficult."             Continues  PC   Magazine,  "The  AT
                                      knocks Framework  completely out of
 The same article adds, "Moving data  the ring.  Officials at Ashton-Tate
 is  another   area  where  Symphony  would not  reveal a patch  or other
 scores heavily over Framework."      method to retrofit  the program for
                                      IBM's new computer."
 With regard to available functions,
 Personal  Computer World  observes,  However,  with regard  to Symphony,
 "Symphony can offer: @ROUND, @RAND,  PC  Magazine adds,  "Symphony gains
 @ISNUMBER and a few other functions  the  AT  advantage over  Framework.
 which   have   no  counterpart   in  We  found an  easy way  to get  the
 Framework."                          program running on the AT."
                                   -20-















      A   C R A C K   I N    T H E   F R A M E W O R K (Continued)


 With  regard  to  word  processing,  PC  World concludes  its discussion
 PC World    (11/84-151)   observes,  on   the   data  base   module   of
 "Changes  in  a  document  are  not  Framework  by   noting,  "The  most
 automatically  recalculated on  the  critical function  missing from the
 table of  contents." PC  World also  DBMS  is multiple-key  sorts.  Only
 notes, "Two features Framework does  one field can be sorted at a time." 
 not support are  multiple fonts and
 proportional spacing."               PC    World     next    moves    to
                                      communications,      "The     tele-
 With   respect   to   spreadsheets,  communications      portion      of
 PC World  warns,   "Advanced  1-2-3  Framework,    called   MITE,    was
 users    may    find    Framework's  obviously  tacked  on at  the  last
 spreadsheet less powerful than they  minute." Continues  PC World, "MITE
 would  like."  In  support  of  the  does not use pull-down menus and it
 above statement, PC World observes,  uses   the  function   keys  in   a
 "The spreadsheet  lacks the ability  different  way  than  the  rest  of
 to split screens  and name ranges."  Framework does."
 Furthermore, "you cannot point to a
 range by moving backwards.           Adds  PC World,  "MITE's menus  are
                                      not very helpful, and it requires a
 As for printing  a spreadsheet, the  separate data file  for the numbers
 article  cautions, "The  ability to  and   parameters  of   each  remote
 print a range  is also omitted; the  system you call."
 print function will  only print the
 whole spreadsheet."                  The  article   in  PC   World  next
                                      criticizes   Framework's  document-
 PC  World  agrees  with  the  other  ation,   "The   tutorial  is   only
 press  reviews with  regard to  the  marginally   interactive   and   is
 lack  of speed  of Framework,  "The  almost  an  insult  to  the  user's
 spreadsheet  is not  a speed  demon  intelligence." 
 like       Lotus      Development's
 1-2-3." PC World adds, "The biggest  The PC World  article also has this
 hurdle potential converts will face  important  warning, "My  commercial
 is Framework's lack  of emphasis on  release   of  Framework   does  not
 huge spreadsheets."                  always  save  files  on my  PC.  It
                                      works   perfectly  only   about  60
 PC World  then turns  its attention  percent of  the time on my  PC. The
 to the data base mode of Framework,  other 40  percent of the  time, the
 "A spreadsheet and  a data base can  program hangs up without saving all
 be linked.  However, only a one way  my  precious work,  and  I have  to
 flow is possible - information from  reboot  to start  the program.   If
 the  data  base  can  go  into  the  this problem persists,  I predict a
 spreadsheet, but not vice versa."    rocky road ahead for the program."

 Continues  PC   World,  "Generating  The author of  the PC World article
 reports  is  not  as simple  as  it  adds,  "I expect  the <Ins>  key to
 should be.   To organize  and print  toggle   between  the   insert  and
 any  report  other than  the  whole  overtype  modes,  but in  Framework
 data base, you will have to write a  the  <Ins>   key  calls   the  last
 FRED program."                       pull-down menu you used."
                                    -21-












      A   C R A C K   I N    T H E   F R A M E W O R K (Continued)


 The PC World  article quoted on the  The author of a Framework review in
 previous  page continues,  "You can  Microcomputing  (11/84-62)  begins,
 only move  a block to  the position  "Right  after I  first began  using
 after    the   cursor.     Standard  Framework,  I started  encountering
 practice  is to  insert before  the  system crashes.  The computer would
 cursor.  Because  Framework inserts  lock up and the  only way out was a
 blocks  after the  cursor, you  can  cold  start."
 never  move a  block  to the  first
 position in  a frame.  You  have to  Continues Microcomputing, "The most
 move  it  to the  second  position,  dismaying  part  was that  whatever
 then move  whatever is ahead  of it  had been on the  disk in the file I
 to the position behind it.  This is  was using was also gone, dumped out
 a roundabout and awkward method."    like a child's toys on the floor."

 The  PC World  article also  notes,  If  this  were   not  enough  of  a
 "The clock in  the upper right hand  headache, Microcomputing continues,
 corner   of  the   screen  can   be  "In addition,  the screen occasion-
 annoying.   It  ticks  whether  you  ally locked  up with  what appeared
 want  it to  or  not.  Seeing  that  to be snow all over it."
 motion  from the  corner of  my eye
 distracts me, but I can find no way  Microcomputing  also  adds a  speed
 to turn it off."                     test    between    Framework    and
                                      Symphony, consisting  of 26 columns
 In the same vein, the author of the  and  50  rows.    1-2-3  took  4.12
 PC World article requests, "I would  seconds and  Symphony 4.82 seconds,
 also like  to be  able to  turn off  about the same,  but Framework took
 the  twitching status  line on  the  45.61  seconds,   approximately  10
 bottom of the screen."               times longer  than either  1-2-3 or
                                      Symphony. (page 71)
 The author of  the PC World article
 finally    laments,   "One    other  Microcomputing  also found,  with a
 weakness  is  the method  of  print  640K  computer, "On  Framework, you
 queueing.  Framework writes a print  can build  a spreadsheet  no larger
 file to the disk before printing it  than  26 columns  by  70 rows.   In
 then it  spools from the  disk file  Symphony,    you    can   have    a
 and eventually erases the file.  If  spreadsheet  of  26 by  278."  This
 there  is not  enough space  on the  gives Symphony an advantage in size
 disk,  Framework  will  print  from  of approximately 4 to 1.
 memory.  In that  case, there is no
 spooling and you  must wait for the  Concludes Microcomputing, "Symphony
 file to  print before  you continue  is  still better  with numbers  and
 to  work."                           spreadsheets  than   anything  else
                                      available.     It's    the    ideal
 Concludes the author,  "This is one  spreadsheeter's package.  Financial
 of  the  weakest print  spoolers  I  types,   accountants   and   others
 have  seen  on   a  PC;  it's  only  dealing    in   detailed    numbers
 marginally  better than  no spooler  analysis   and  modeling   will  be
 at all."                             comfortable with Symphony."

                                   -22-













      A   C R A C K   I N    T H E   F R A M E W O R K (Continued)


 We   conclude    our   summary   of  PC Week then moves on to databases,
 Framework  reviews  with  a  recent  only to report, "Unfortunately, 200
 evaluation  appearing  in  PC  Week  records was about the most we could
 (9/11-48).                           cram  into the  available workspace
                                      on our 512K  byte system.  Like the
 The article begins  with an overall  spreadsheet,  Framework's  database
 evaluation:  "Our verdict?   Frame-  consumes  an   enormous  amount  of
 work  is  very sophisticated  in  a  memory." 
 number of  ways but  doesn't appear
 all too  comfortable working within  PC Week  also notes,"Database sorts
 the     memory    and     processor  are limited to one field."
 constraints of the PC."
                                      And if  you want to bring  in dBASE
                                      files,  PC  Week cautions,  "You'll
 Continues the PC  Week article, "In  have to allocate  about 10 bytes of
 every  formal   and  informal  test  Framework memory per single byte of
 situation    we    could    devise,  a dBASE file.  There  seems to be a
 Framework and its files appeared to  10  to one  expansion of  file size
 consume  an  inordinate  amount  of  during the translation process."
 memory,  and   even  on   the  8087
 equipped unit, to  turn in sluggish  PC  Week  concludes its  review  of
 performance."                        Framework with a  discussion of the
                                      program's   documentation,  "Unfor-
 The  article goes  on to  warn, "If  tunately,   we   found   the   Fred
 you   think  this   program  is   a  documentation   uninformative   and
 replacement    for    the    number  obtuse.   There is  no tutorial  on
 crunching  capabilities  of  1-2-3,  Fred, not a single complete program
 heaven help you."                    example and not  the slightest hint
                                      about where  or how a  Fred program
 Explains   PC    Week,   "You   can  should be written or invoked.  It's
 anticipate  giving up  55 bytes  of  as if  someone told  you everything
 memory   to  each   cell  in   your  there  is to  know about  cars, but
 spreadsheet.     Any    spreadsheet  neglected to mention  that you need
 larger than 50  columns by 100 rows  a key to start the engine."
 will  easily  overtax a  512K  byte
 system in no time."                              ------

 Concludes PC Week about Framework's  In this review of articles from ten
 spreadsheet           capabilities,  of the major computer publications,
 "Framework's   performance   as   a  we  have  attempted  to  present  a
 "spreadsheet cruncher"  leaves much  comprehensive     discussion     of
 to  be desired.   A 10  by 50  cell  Framework   as   reported  in   the
 templates that used the square root  computer media.
 function  (@SQRT)  as   well  as  a   
 number squared, took one minute and  However,  we should  note that  for
 twenty seconds to recalculate.  The  1-2-3   users,  perhaps   the  most
 same  formula  recalculated  in  17  important  consideration   is  that
 seconds   under   Symphony   on   a  they can  obtain Symphony  for only
 standard PC."  (A ratio of  about 5  $200  while   Framework  will  cost
 to 1).                               $700, or $500 more.
                                   -23-












                    W H O ' S   O N   1   2   A N D   3


                    THE NY 1-2-3/SYMPHONY EXECUTIVE BOARD

      CHAIRPERSON              BERNARD BACKHAUT          212-596-0772 (H)
      USER PHONE NETWORK       BERNADETTE BEEKMAN        212-557-7439 (H)
      BULLETIN BOARD SYSTEMS   JOHN GERMAN               212-559-4313 (W)
      BBS COORDINATOR          JIM CLYDE                 212-566-6799 (W)
      MIKE'S BBS GROUP         JUDYTH POWERS             212-692-9393 (W)
      OPEN DISCUSSION GROUP    STEVEN GOLDMAN            212-228-1116 (H)
      NEWSLETTER CONTRIBUTIONS JESUS BATISTA             201-542-7752 (H)
      NEWSLETTER DESIGN        PAT JENNINGS              212-836-3855 (H)
      SOFTWARE LIBRARY         AL MERKLE                 718-939-4717 (H)
      SOFTWARE EVALUATION      PRISCILLA TATE-AUSTIN     212-749-1222 (H)
      DEFENDER OF THE FAITH    MORRIS STEMP              212-275-6124 (H)
      JOB BANK                 CHARLES BROWNING          212-335-8766 (H)
      CONTESTS                 HENRY BHALLA              212-947-2772 (W)
      FAIRS                    NIVIA CRUZ                212-799-7161 (H)
      PARAPHENALIA             ELI KRUPNIK               212-674-6912 (H)
      USERS GROUP GUIDE        ROBERT VARKONYI           212-539-1875 (H)
      SYMPHONY USERS GROUP     BARBARA BROWN             212-587-2844 (W)
      CORPORATE GROUP          THOMAS GILDAY             212-489-5949 (W)
      GRAPHICS GROUP           ED STARK                  212-595-7046 (H)
      WORD PROCESSING GROUP    SHARON SWEENEY            212-586-6581 (H)
      MACRO GROUP              ALICE WEISS               212-938-8879 (W)
      INVESTMENT GROUP         HENRY HYMOFF              212-934-7061 (H)
      ACCOUNTING GROUP         TOM STASKOWSKI            516-872-9394 (H)
      MEMBERSHIP               THOMAS PELLEGRINI         212-836-7218 (H)



 Symphony Users.                      Job Bank.

 Barbara Brown of Morgan Guaranty is  The Job  Bank continues  to receive
 organizing a Special Interest Group  numerous  calls from  organizations
 for  actual users  of the  Symphony  in  the New  York area  for persons
 Program.  The purpose of this Group  listed  in  the  Job Bank  who  are
 is to provide  mutual assistance to  available  for  full or  part  time
 its  Members in  actual utilization  work, utilizing 1-2-3 or Symphony.
 of the Symphony Program.
                                      Several  large   corporations  have
 The activities  of this  Group will  requested names from  our Job Bank,
 depend  upon the  interests of  its  and   we   urge  individuals   with
 Members.   Please  contact  Barbara  expertise in 1-2-3  and Symphony to
 Brown for futher details.            register.

                                   -25-


















         -----------------------------------------------------
               BEGINNING AND ADVANCED SYMPHONY COURSES 
         TO BE REPEATED BY THE N.Y. 1-2-3/SYMPHONY USERS GROUP
         -----------------------------------------------------


 The highly successful Beginning and  We will  be offering two  courses -
 Advanced  Symphony   Courses  being  Beginning   and  Advanced   -  both
 offered  by  the  New  York  1-2-3/  meeting for five consecutive weeks,
 Symphony  Users  Group  are  to  be  one evening  per week, from  7 p.m.
 repeated, beginning January 7.       to 9 p.m.  The Advanced Course will
                                      meet   immediately  following   the
                                      completion of the Beginning Course.
 We  are  pleased to  announce  that  Both  courses  will  be  taught  by
 Money  Magazine, published  by Time  Dr. Backhaut,  Chairperson  of  the
 Inc., will be acting as the host to  N.Y.   1-2-3/Symphony Users  Group.
 our next Symphony Courses.           The cost of each course is $50.

 Classes  will be  held  in a  large  Because   of  the   large  interest
 Conference   room   at  the   World  already expressed in these courses,
 Headquarters   of  Time   Inc.,  in  two sections will be made available
 Rockefeller  Center, at  6th Avenue  for each course, meeting on consec-
 and 50th Street.   This location is  utive Mondays or Tuesdays.  However
 easily accessible from all areas of  it is  still recommended  that stu-
 Manhattan.                           dents enroll  as soon  as possible,
                                      since  space  is limited.   Classes
 Money   Magazine   will   also   be  begin on January 7 and January 8.
 providing     excellent    computer
 facilities    for   use    in   the  To  enroll  in a  Symphony  course,
 presentation of our courses.         please complete the form below.



 NAME: __________________________________________________________________

 ADDRESS: _______________________________________________________________

 CITY:    __________________________  STATE: ________________________________

 WORK PHONE: _________________________ HOME PHONE: _______________________

 BEGINNING: __________________________ ADVANCED: ________________________

 MONDAY CLASSES: _____________________ TUESDAY CLASSES: _________________


 To enroll, make out a check payable to NYPC and mail it to:

 Symphony Classes    c/o Dr. Bernard Backhaut, 2 Pierrepont Street,
                         Brooklyn NY 11201

 For further information, call 212-596-0772.

                                   -26-













                ------------------------------------------
                       OUTLINE FOR SYMPHONY COURSES
                OFFERED BY N.Y. 1-2-3/SYMPHONY USERS GROUP
                ------------------------------------------





                            BEGINNING COURSE
                            ----------------

         January    7,  8               Spreadsheets

         January   14, 15               Windows & Graphics

         January   21, 22               Word Processing

         January   28, 29               Data Base Management

         February   4,  5               Elementary Applications



                            ADVANCED COURSE
                            ---------------

         February  11, 12               Communications

         February  18, 23               Command Language - 1

         February  25, 30               Command Language - 2

         March      4,  5               Advanced Applications - 1

         March     11, 12               Advanced Applications - 2




         The text for the course is "Using Symphony" by Douglas Cobb.




 -------------------------------------------------------------------
 Note:  Students enrolling in the Symphony Courses are presumed to
        have a "working" knowledge of 1-2-3.  Those aspects of
        Symphony which also appear in 1-2-3 will be assumed
        to be known by the student.

                                  -27-













           W E L C O M E    T O    O U R    L I B R A R Y
                   by Al Merkle, Software Librarian

 Welcome  to  our Software  Library.  We will also be expanding our 1-2-3
 We  are   happy  to   report  that,  library to include  what our judges
 beginning with this  month, we will  deem to be the ten best submissions
 be  offering   disks  for  Symphony  in our own 1-2-3 Contest.
 users,  as  well as  continuing  to
 provide    software    for    1-2-3  These   disks,  being   outstanding
 enthusiasts.                         examples of  the use of  1-2-3, are
                                      certain  to  be  extremely  popular
 All of  our disks may  be purchased  with our Members.  We are trying to
 for $8 at our Users Group meetings,  have  these  disks assembled  in  a
 or for $10 by  mail.  Checks are to  form  appropriate for  distribution
 be made  out to NYPC and  should be  by  our  Library  by the  time  the
 mailed  to the  addresses indicated  Contest winners have been selected.
 below.
                                      We continue to  offer the following
 The  first  two  disks we  will  be  1-2-3 disks:
 offering  to  Symphony  users  were
 provided  to  our  Club  by  Lotus.  UTILITY 1-2-3.   This has,  so far,
 They are:                            been   our   most   popular   disk.
                                      Utility    1-2-3    is   used    in
 .Lotus Macro Contest Winners. This   conjunction with 1-2-3 to gain more
 is  a  choice selection  of  Macros  efficient   and    better   looking
 drawn    from   a    Contest   held  results.   Included   is  an  ASCII
 internally at Lotus  to promote the  character   generator  which   will
 appreciation  and understanding  of  allow the user to  place any of the
 Symphony Macros.   Anyone seriously  256  ASCII text  characters on  the
 considering   the  development   of  worksheet,  and  a Printer  Control
 Symphony Macros  should regard this  Generator  which   will  allow  the
 disk as a "must."                    mixing  of various  font types  and
                                      styles such as boldface, compressed
 .Decoding of  1-2-3 and  Symphony    print, and underlining.
 Files.  This disk, also provided by
 Lotus  to   our  Library,  supplies  KEY  II DEMO  DISKETTE.  This  demo
 users of Symphony  and 1-2-3 with a  diskette  gives  the user  a  great
 detailed byte-by-byte  breakdown of  introduction  to  KEY  II,  a  very
 the Lotus files they create.  While  useful and time saving program.
 providing  valuable   insight  into
 file  structures  to all  users  of  TAX  4-5-6.   A  tax  program  that
 Lotus  programs,  the  Decode  disk  helps keep track of, and calculates
 will  be especially  appreciated by  your  taxes.   Includes  printable,
 applications developers.             IRS approved forms.

 Send  your  requests  for  Symphony  Send your requests  for 1-2-3 disks
 disks to:                            to:

       Symphony Disks
       163 Joralemon Street                  Alphonse Merkle
       Suite 1102                            PO Box 7557
       Brooklyn NY 11201                     Flushing NY 11352
                                  -29-













       P L E A S E     P O S T    O N    B U L L E T I N    B O A R D





                 NOTICE OF LOTUS 1-2-3/SYMPHONY USERS MEETING
                 ============================================



                                 NOVEMBER 7

                       CITY UNIVERSITY GRADUATE CENTER
                        33 WEST 42 STREET AT 5TH AVE.
                                  ROOM 207




                     DOUGLAS COBB SPEAKS ON THE TOPIC

                        "WHY SYMPHONY IS A SUPERIOR
                            PROGRAM TO FRAMEWORK"




                     OPEN DISCUSSION GROUP AT 6:15 P.M.
                          MEETING STARTS AT 7 P.M.

                        FOR FURTHER INFORMATION CALL:
                            DR. BERNARD BACKHAUT
                                212-596-0772


















                                    -30-
















         UPDATING OF N.Y. 1-2-3/SYMPHONY USERS GROUP DATABASE
         ====================================================



 We are now in the process of updating the Database of our Users Group.
 We are requesting that each person who has not yet done so fill in the
 form below and return it to:

                          N.Y. 1-2-3 Database
                          c/o Dr. Bernard Backhaut
                          2 Pierrepont Street
                          Brooklyn NY 11201

 The purpose of the Database is to enable us to inform each of the Heads
 of our Subgroups  of your interest  in further information  about their
 activities.  Thank you.




 ------------------------------------------------------------------------



 NAME:  _______________________________ORGANIZATION: ____________________

 ADDRESS: _______________________________________________________________

 PHONE: _________________________________________________________________


 I would like futher information about the following activities of the
 New York 1-2-3 Users Group:


 ____    1-2-3 Phone Network           ____    Symphony Users Group
 ____    1-2-3 Bulletin Board          ____    Corporate Group
 ____    Symphony Beginning Course     ____    Investment Group
 ____    Symphony Advanced Course      ____    Accounting Group
 ____    Contest Committee             ____    Database Group
 ____    Fair Committee                ____    Micro-Mainframe Group
 ____    Software Evaluation           ____    Word Processing Group
 ____    Software Library              ____    Graphics Group
 ____    Job Bank                      ____    Macro Group




                                   -31-
















            SUBSCRIPTIONS                       ADVERTISING

 Those unable to  attend meetings of  Advertising  rates for  the NYPC
 the   N.Y.   1-2-3/Symphony   Users  1-2-3 Newsletter are as follows:
 Group   may    receive   the   NYPC
 1-2-3/Symphony  Newsletter  through      $60.00  -  full page 
 the mail.                                $30.00  -  half page 
                                          $15.00  -  quarter page 
 To subscribe for one year, make out
 a check for $15 payable to NYPC and  All ads must be paid in advance.
 send it to:                          Ads must be  submitted in camera
                                      ready  form.   10% discount  for
         1-2-3 Subscriptions          paid  orders  of three  or  more
         c/o Dr.Bernard Backhaut      insertions.
         2 Pierrepont Street 
         Brooklyn NY 11201            To place an ad, make out a check
                                      payable to NYPC and send it to:
 Back  issues  may  be  obtained  at
 $1.50 per issue.                          1-2-3  Advertising 
                                           c/o  Dr. Bernard Backhaut
 A free  1/4  page ad  is  available       2 Pierrepont Street
 with each subscription.                   Brooklyn NY 11201




 -------------------------------------------------------------------
       1-2-3 Newsletter 
       c/o Dr. Bernard Backhaut
       2 Pierrepont Street
       Brooklyn NY 11201

















                                   -32-















```
{% endraw %}

## SPACER.TXT

{% raw %}
```

            DATA DEPENDENT LINE SPACING IN DATA BASE REPORTS

PROBLEM

There are frequently circumstances in the generation of Data Base
Reports under Symphony where it would be useful to have an extra line
feed inserted depending upon the data content of the previous or next
record in the report.  Examples:

     When printing a mailing list or phone list in alphabetic order,
      the report will be more legible if there is an extra line-feed
      separating the A's from the B's, and so on.

     When printing data from a chart of accounts, to be able to feed a
      line when the master account number changes.

Although one might use the Symphony "Multiple" report format to do this,
this can be cumbersome to set up, and forces printing of the "Above
Range" with each section of the report.

Symphony allows you to imbed control codes in the report range using the
special label prefix "|", but unfortunately, the control codes following
the "|" must be fixed and not computed.  Moreover, Symphony sends to the
printer ONLY the contents of the "|" label on that line.

SOLUTION

There is a solution IF your printer permits or uses "Escape" code
sequences to cause line feeds or to affect the size of line feeds.  An
"Escape" code sequence is one in which a particular control code (ASCII
0 to 31) causes the printer to interpret the following characters as a
command line rather than as data to be printed.  The most common
character to initiate this is \027 (Escape), but might be any other that
the printer manufacturer chooses.

For example, the IDS Prism printer allows one to use an escape sequence
to program the line separation that occurs with an ordinary line feed.
In order to establish a line spacing of nn/48 inches, one sends to the
printer the following sequence: \027,B,nn,$
Thus the sequence \027,B,8,$ sets normal (6 lines per inch) spacing,
while \027,B,0,$ causes no paper advance with the normal line feed. 

EXAMPLE

In order to take advantage of this under Symphony, consider the
following example.  You have a data base consisteing of two fields,
"Name" and "Address", and wish to print the alphabetic listing skipping
lines whenever the first letter of the name changes.  In the "Main"
range of the Report, use the following four lines:

     |\027,B,
     @IF(@LEFT(+NAME,1)<>@LEFT(+A25),"8,$","0,$")
     |\027,B,8,$
     +NAME

Here, the first and third lines are Labels with the special prefix "|".
(Enter these by typing ||\027, etc.).  The second line is a formula that
compares tests the first character of the NAME with the entry preceding
it.  (In the example, the cell address of NAME would be A26.) The effect
of this sequence is to single space the list of names except where the
lead letter changes.  There, an extra line is inserted.  The sequence
works as follows:

     Symphony sends only the special label contents for the first line.
      This initiates the escape sequence to the printer.

     The second line is transmitted in its entirety.  Because Symphony
      interprets this as a simple string to print, it will terminate
      this line with a carriage return/line feed.  The printer will
      interpret the string value of the @IF as the new spacing (Normal
      or Zero) and will space to the next line accordingly when it
      receives the line feed.

     The third line is only an escape sequence (no characters or line
      feed will be sent by Symphony).  The sequence will assure that the
      printer has returned to normal spacing when it prints the fourth
      line.

     Finally, the fourth line is the normal Report line.  If line two
      evaluated to "0,$" then this is the only line of the sequence
      which will cause the paper to advance in the printer.

NOTES

Although this technique is discussed in the context of line spacing, it
can be used to cause data dependent selection of any of the printers
special features that are invoked by escape codes.  For instance, with
many printers it would be possible to cause a data dependent change in
the font, say to print the bulk of a report in draft mode, but to switch
to Near Letter Quality for the first line in a block.

                                        Woody Beeler  76044,351
                                                               
```
{% endraw %}

## SYM102.TXT

{% raw %}
```

 Symphony Notes 
 Release 1 
 For IBM and COMPAQ 
 Personal Computers 
 August 6, 1984 


 Note 102      Transferring a 1-2-3 Database to Symphony 



 Introduction 

 Symphony works with 1-2-3 database files in much the same way
 1-2-3 does.  To make use of Symphony's additional database
 capabilities using the FORM window, however, you must follow the
 procedure outlined in this note. 

 This procedure involves retrieving the 1-2-3 file with Symphony
 and saving it as a Symphony file, creating a blank Symphony
 worksheet, and then combining the file's field name range and
 Database range with the blank worksheet. 



 Before You Start 


 1-2-3 and Symphony Databases 

 There are several differences between 1-2-3 and Symphony
 databases: 

     *  The Input range in 1-2-3 is called the Database range in
        Symphony. 

     *  Symphony classifies this Database range as well as the
        Criterion range and the Output range as the Basic ranges.
        Symphony specifies the Database and Criterion ranges
        automatically during form generation. 


 Symphony's Form Generation Process 

 During Symphony's form generation process, you can accept the
 form setting defaults or you can change them.  The FORM window
 Generate command offers the following form setting options:

     *  The default field type - Choose Label, Number, Date, Time,
        or Computed.  Label is the default.

     *  The default field length - Indicate the column width.  The
        default is 9. 

     *  The name of the Database settings sheet - This names the
        settings sheet.  The default name is MAIN. 

 When Symphony generates a form, it automatically creates several
 different ranges.  These ranges adopt the name of the Database
 settings sheet.  Refer to the Symphony How-To Manual and the
 Reference Manual for more information about these ranges. 



 Procedure 

 Before you begin, be sure to make a backup copy of the 1-2-3
 database file you are going to transfer. 

 Start with Symphony loaded in the computer.  If you have a
 two-disk drive computer, put the disk with the 1-2-3 database
 file in either disk drive.  If you have a hard-disk computer, 
 you can either put a disk with the 1-2-3 database file in the
 disk drive or work with a 1-2-3 database file on the hard disk. 


 1.  Begin in a SHEET window and retrieve the 1-2-3 file you want
     to transfer. 

     Select Services File Retrieve and call up the 1-2-3 file. 

     Note:  Be sure to indicate the appropriate disk drive when
            you type in the name of the file to be retrieved.  If
            your file is in a subdirectory, make sure you indicate
            the subdirectory name. 

            You can retrieve the 1-2-3 file with its .WKS
            extension.  When you select File Retrieve, Symphony
            lists the available files on the command line on the
            screen.  On the status line, you will see the path
            ending with \*.wrk.  Press the Escape key once and
            *.wrk disappears.  Then type in *.wks and press
            Return; the files with a .WKS extension will be
            listed.  Or, when making the backup copy of the file,
            you can use the operating system command to change the
            extension from .WKS to .WRK and then retrieve the
            file. 


 2.  Next, name two separate ranges: the field name range
     (consisting of the column headings) and the Database range
     (consisting of all the data in the worksheet).  Be sure to
     write down the range names you use.  To simplify the transfer
     process, you might use "fields" and "data" for the range
     names. 

     *  Select Menu Range Name Create.  Type in a name for the
        field name range.  Highlight the range and press Return. 

     *  Follow the same procedure to name the Database range and
        highlight its boundaries. 

     *  Save the file with the Services File Save command. 

     Note:  It's a good idea to change the 1-2-3 .WKS extension 
            to the Symphony .WRK extension now if you haven't done
            it yet. 


 3.  Copy the field name range onto a blank worksheet. 

     *  Select Services New Yes to create a blank worksheet. 

     *  Copy the field name range onto the new worksheet by
        selecting Services File Combine Copy Named-Area. 

        Type in the name of the field name range (for example,
        fields) and select Read and either Value or Formula. 

        Finally, type in the name of the saved file. 

     The field names should appear at the pointer position on 
     the worksheet.  Don't worry if some of the field names are
     shortened on the screen.  You can adjust the column widths
     individually later. 


 4.  Switch to the FORM window and generate an entry form. 

     *  Select Menu Generate.  You can accept or change Symphony's
        default settings for the field type and length and the
        Database settings sheet name at this point or you can wait
        and change them later.  To accept the defaults, press
        Return three times. 

     *  Highlight the field name range so that it includes all of
        the field names. 

     *  Press Return and you will see the entry form. 


 5.  Copy the Database range on the new worksheet. 

     *  Switch back to the SHEET window.  You will see the
        database that Symphony generated.  The following ranges
        are on the screen: Entry range, Definition range, Above
        Report range, Main Report range, Criterion range, and
        Database range.  (Full definitions of these ranges can 
        be found in the Symphony How-To Manual.) 

     *  Press Goto and type in the name of the Database settings
        sheet followed by _DB.  For example, if you accepted the
        default name for the settings sheet, you would type
        MAIN_DB.  Press Return and the pointer moves to the first
        field name of the Database range.  Move the pointer down
        one row. 

     *  Copy the Database range into the new worksheet by
        selecting Services File Combine Copy Named-Area. 

        Type in the Database range name (for example, data) and
        select Read and either Value or Formula. 

        Type in the name of the saved file. 


 6.  Since Symphony has not yet extended the range of the new
     database past the field name row, you must extend the
     Database range. 

     *  With the pointer on the leftmost field name, select Menu
        Query Settings Basic Database. 

     *  Highlight the range to include all the data that has been
        brought into the Database range to the worksheet. 

     *  Press Return and then press Quit three times. 

     Symphony will now automatically adjust the Database range
     downward each time a new record is entered through the entry
     form. 


 7.   Switch back to the FORM window and you will see the data
      for the first record on the entry form.  Use the Page Down
      key to see the next record on the entry form. 

      Select Services File Save to save the file.  You now have a
      Symphony database file. 

```
{% endraw %}

## SYMQ&A.TXT

{% raw %}
```
           Hotline Q & A

           SYMPHONY

           The following are answers to questions commonly asked by our
           dealers and test sites about Symphony's capabilities.

              FILE HANDLING

           Q. When I do a File Retrieve, the file name extensions are .WRK
              for both worksheet and document files.  Am I doing File Save
              correctly?

           A. Yes.  Symphony gives the .WRK file name extension to both
              spreadsheets and documents.  As does 1-2-3, Symphony uses .PIC
              and .PRN file name extensions to indicate graph-image and print
              files respectively.


           Q. When accessing a directory through File Retrieve or File Save,
          [23;1H[J
          Key S or <ENTER> to continue[23;30H!s
          [23;1H[J    the ESC key does not erase the current directory.

           A. To erase the current directory name, simply press [ESC] twice.
              This allows you to type in the name of another sub-directory.


              WORD PROCESSING

           Q. In a DOC window, there are times when word wrap doesn't seem to
              work.  Why?

           A. Word wrap is disabled when overstrike INS is turned on, or when
              justification is set to NONE.  Press [INSERT] to turn off
              overstrike mode or change the justification in the format line.


           Q. Why are non-left aligned labels considered to be non-text,
              i.e., why can't they be edited in word processing?

           A. Centered (^) and right-aligned labels (") use leading spaces.
              The Symphony program would need to be significantly larger to
              handle these labels as text.


           Q. Values entered in a SHEET window cannot be edited in a DOC
              window.

















           A. True.  The worksheet values you entered in SHEET are protected.


              SPREADSHEET

           Q. When printing spreadsheets, long labels are truncated at the
              column width.

           A. True.  When defining an output range, the entire visible
              portion of the labels must be highlighted.


           Q. Where are the global options?

           A. Press [Menu] and select Settings to establish column width,
              recalculation mode, label prefix, etc.


           Q. How do I transfer a row to a column without using DIF?

           A. Use Symphony's new Range Transpose command.


           Q. Will there be a function for TIME calculation?

           A. There are several.  @TIME returns the serial value of a time of
              day.  @TIMEVALUE returns a serial value of a time entered as a
              string.  There are also @HOUR, @MINUTE, and @SECOND, which will
              accept a serial value, and return the corresponding time value.


           Q. I'm using the range name "1st" in my worksheet, but Symphony
              will not allow me to use @ functions involving that range.

           A. Correct.  For computational purposes, range names cannot begin
              with a number, but Symphony will accept a range name like "1st"
              for move, erase, and copy commands.


              GRAPHING

           Q. How do I explode the Pie Charts?

           A. By assigning a B range for the graph settings, and giving a
              value of 100 to 107 to the section you want exploded.


           Q. How do I do a log/semi-log scale graph?

















           A. By hitting the daily double at Aqueduct!  But
              seriously...Symphony has built this into its graph
              capabilities.  Select Graph 2nd Settings X-Axis Type
              Logarithmic.  Do the same for the Y-Axis if appropriate.


              FORMS/DATABASE

           Q. What is the parse review range?

           A. This is an area that Symphony uses to store any data that does
              not match the criteria established by a form definition.  An
              example of such data would be the salutation and login sequence
              which remains on the screen during a communications session
              with a mainframe.


           Q. Has the Data Distribution command been eliminated from
              Symphony?

           A. Not at all.  It can now be found under Range Distribution.


           Q. I'm creating a mailing list with Symphony, but it will not
              accept the part of the formula I've used to reference zip
              codes.

           A. Symphony's string handling capabilities are one of its nicest
              features, but it still sees numbers the same way as 1-2-3 does.
              To create a formula that involves columns of numbers as well as
              text, use the @STRING function for any numerical data.


              COMMUNICATIONS

           Q. Symphony's Settings Name Phone-and-Login sequence doesn't work
              with my Hayes Smartmodem 1200.

           A. Check to be sure that dip-switch number six is set to ON -- the
              up position.


           Q. Why does my monitor display two characters for every one I
              strike?

           A. Check your COMM Settings Sheet to be sure that Echo is set to
              OFF.


           Q. When I dial a remote computer, I hear the phone ring, and I
















              hear the high pitched sound that indicates that I've reached
              the computer, but I can't connect.

           A. You're transmitting at different baud rates.  Find out the baud
              rate of the computer you're trying to access and adjust your
              own baud rate accordingly -- probably downward.  The two most
              common baud rates between computers are 300 and 1200.


              SYMPHONY COMMAND LANGUAGE

           Q. Can I turn my screen off while the macro is executing?

           A. Yes.  The new {paneloff} command will surpress the display of
              the control panel, and the {windowsoff} command will supress
              the window displays.
           Hotline Q & A

           SYMPHONY

           The following are answers to questions commonly asked by our
           dealers and test sites about Symphony's capabilities.

              FILE HANDLING

           Q. When I do a File Retrieve, the file name extensions are .WRK
              for both worksheet and document files.  Am I doing File Save
              correctly?

           A. Yes.  Symphony gives the .WRK file name extension to both
              spreadsheets and documents.  As does 1-2-3, Symphony uses .PIC
              and .PRN file name extensions to indicate graph-image and print
              files respectively.


           Q.  When accessing a directory through File Retrieve or File Save, the ESC
          key does not erase the current directory.

           A. To erase the current directory name, simply press [ESC] twice.
              This allows you to type in the name of another sub-directory.


              WORD PROCESSING

           Q. In a DOC window, there are times when word wrap doesn't seem to
              work.  Why?

           A. Word wrap is disabled when overstrike INS is turned on, or when
              justification is set to NONE.  Press [INSERT] to turn off
              overstrike mode or change the justification in the format line.


















           Q. Why are non-left aligned labels considered to be non-text,
              i.e., why can't they be edited in word processing?

           A. Centered (^) and right-aligned labels (") use leading spaces.
              The Symphony program would need to be significantly larger to
              handle these labels as text.


           Q. Values entered in a SHEET window cannot be edited in a DOC
              window.

           A. True.  The worksheet values you entered in SHEET are protected.


              SPREADSHEET

           Q. When printing spreadsheets, long labels are truncated at the
              column width.

           A. True.  When defining an output range, the entire visible
              portion of the labels must be highlighted.


           Q. Where are the global options?

           A. Press [Menu] and select Settings to establish column width,
              recalculation mode, label prefix, etc.


           Q. How do I transfer a row to a column without using DIF?

           A. Use Symphony's new Range Transpose command.


           Q. Will there be a function for TIME calculation?

           A. There are several.  @TIME returns the serial value of a time of
              day.  @TIMEVALUE returns a serial value of a time entered as a
              string.  There are also @HOUR, @MINUTE, and @SECOND, which will
              accept a serial value, and return the corresponding time value.


           Q. I'm using the range name "1st" in my worksheet, but Symphony
              will not allow me to use @ functions involving that range.

           A. Correct.  For computational purposes, range names cannot begin
              with a number, but Symphony will accept a range name like "1st"
              for move, erase, and copy commands.


















              GRAPHING

           Q. How do I explode the Pie Charts?

           A. By assigning a B range for the graph settings, and giving a
              value of 100 to 107 to the section you want exploded.


           Q. How do I do a log/semi-log scale graph?

           A. By hitting the daily double at Aqueduct!  But
              seriously...Symphony has built this into its graph
              capabilities.  Select Graph 2nd Settings X-Axis Type
              Logarithmic.  Do the same for the Y-Axis if appropriate.


              FORMS/DATABASE

           Q. What is the parse review range?

           A. This is an area that Symphony uses to store any data that does
              not match the criteria established by a form definition.  An
              example of such data would be the salutation and login sequence
              which remains on the screen during a communications session
              with a mainframe.


           Q. Has the Data Distribution command been eliminated from
              Symphony?

           A. Not at all.  It can now be found under Range Distribution.


           Q. I'm creating a mailing list with Symphony, but it will not
              accept the part of the formula I've used to reference zip
              codes.

           A. Symphony's string handling capabilities are one of its nicest
              features, but it still sees numbers the same way as 1-2-3 does.
              To create a formula that involves columns of numbers as well as
              text, use the @STRING function for any numerical data.


              COMMUNICATIONS

           Q. Symphony's Settings Name Phone-and-Login sequence doesn't work
              with my Hayes Smartmodem 1200.

















           A. Check to be sure that dip-switch number six is set to ON -- the
              up position.


           Q. Why does my monitor display two characters for every one I
              strike?

           A. Check your COMM Settings Sheet to be sure that Echo is set to
              OFF.


           Q. When I dial a remote computer, I hear the phone ring, and I
              hear the high pitched sound that indicates that I've reached
              the computer, but I can't connect.

           A. You're transmitting at different baud rates.  Find out the baud
              rate of the computer you're trying to access and adjust your
              own baud rate accordingly -- probably downward.  The two most
              common baud rates between computers are 300 and 1200.


              SYMPHONY COMMAND LANGUAGE

           Q. Can I turn my screen off while the macro is executing?

           A. Yes.  The new {paneloff} command will surpress the display of
              the control panel, and the {windowsoff} command will supress
              the window displays.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0305

     Volume in drive A has no label
     Directory of A:\

    BIORYM   WRK      8002  10-09-84   4:33p
    ROULET   WRK      3072   9-23-84   3:43a
    REDIAL   WRK      2176  11-07-84   8:32p
    MENUBR   WRK      6656   9-24-84   9:45a
    FTMAC    WRK      1664   9-24-84   9:50a
    WIDEDOC  WRK     16767   9-29-84  12:21p
    COMDOC   WRK     19664   9-29-84  12:29p
    DECODE   WRK      1280  10-04-84   9:23a
    SYNC     WRK      1280  10-13-84   1:06p
    CLFORM   WRK      2432  10-13-84   1:08p
    ADDRS    WRK     31104  10-13-84   1:59p
    DBSEQ    WRK      2944  10-20-84  11:45a
    NYNEW    TXT     78592  10-25-84   8:45p
    WIDTST   PRN       256   9-29-84  11:55a
    COMTST   PRN      1536   9-29-84  11:57a
    DECODE   EXE     34944  10-04-84   9:21a
    COMMA    APP     11008   9-29-84  10:38a
    WIDE     APP     10880   9-29-84  11:44a
    WNDWSY   WRK      3840  10-27-84   9:52a
    LOTUSM   WRK      9344  10-27-84  10:00a
    APPT     WRK     22656  10-29-84  11:15p
    COMPSV   CTF       512   9-29-84  11:10a
    COMPSV   CCF      1536   9-29-84  11:14a
    WRDST    CTF       512  10-27-84   9:48a
    SYMQ&A   TXT     12514  11-25-84   5:43p
    CHCKWR   WRK      3968  10-31-84   8:21p
    DIR-LIST          3072  12-16-84   8:07p
    HAMMER   WRK      6144  11-10-84   1:27p
    FROMTO   TXT      5376  11-07-84   8:27p
    SYM102   TXT      7424  11-07-84   8:30p
    TWOCOL   WRK      4096  11-17-84   2:55p
    SPACER   TXT      4480  12-01-84  11:41a
           32 file(s)     319731 bytes
                           26624 bytes free
