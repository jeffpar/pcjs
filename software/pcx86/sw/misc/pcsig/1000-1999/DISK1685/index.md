---
layout: page
title: "PC-SIG Diskette Library (Disk #1685)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1685/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1685"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AUTOMATIC FORTRAN FORMAT STATEMENTS"

    FMT takes the drudgery out of writing FORTRAN FORMAT statements by
    automatically generating FORMAT statements for you.  Simply use a
    wordprocessor or text editor to create an ASCII file that looks just
    like the output you would like your program to produce.  FMT turns your
    data into a set of FORMAT statements that can be pasted into your
    FORTRAN program.  This is a great tool for any FORTRAN programmer.
    
    The input to FMT is an ASCII file containing the output that is to be
    transformed into FORTRAN FORMAT statements.  The file should look just
    the way it is to appear on screen.  FMT automatically adds the leading
    blank character required by FORTRAN.  FMT can be instructed to treat
    each line in the input file as a separate FORMAT statement.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1685.TXT

{% raw %}
```
Disk No: 1685                                                           
Disk Title: Automatic Fortran Format Statements                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: Automatic Fortran Format Statements                      
Author Registration: $12.00                                             
Special Requirements: None.                                             
                                                                        
FMT takes the drudgery out of writing FORTRAN FORMAT statements by      
automatically generating FORMAT statements for you.  Simply use a       
word processor or text editor to create an ASCII file that looks just   
like the output you would like your program to produce.  FMT turns your 
data into a set of FORMAT statements that can be pasted into your       
FORTRAN program.  This is a great tool for any FORTRAN programmer.      
                                                                        
The input to FMT is an ASCII file containing the output that is to be   
transformed into FORTRAN FORMAT statements.  The file should look just  
the way it is to appear on screen.  FMT automatically adds the leading  
blank character required by FORTRAN.  Digits are represented by carets. 
Floating point numbers are distinguished by the presence of a decimal   
point in the string.  For example; ^^^^ becomes I4, ^^^^. becomes F5.0, 
and ^^^.^^^ becomes F6.3.  Character data is represented with the tilde 
(~) character.  For example; ~~~~~~~~ becomes 8A1.                      
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FMT.DOC

{% raw %}
```







                                      FMT
                      Automatic FORTRAN FORMAT Statements
                                 Version 1.00
                                   (c) 1989

                         "One of many STATOOLS(tm)..."
                                      by

                               Gerard E. Dallal
                               53 Beltran Street
                               Malden, MA  02148














                                    NOTICE

            Copyright 1989 by Gerard E. Dallal.  FMT is shareware.  If
        you find FMT to be useful,  a non-exclusive license fee of $12
        should be sent to the author.



                                  DISCLAIMER

            STATOOLS  are  provided  "as  is"  without warranty of any
        kind.  The entire risk as to  the  quality,  performance,  and
        fitness   for  intended  purpose  is  with  you.   You  assume
        responsibility for the selection of the program  and  for  the
        use of results obtained from that program.
















                                                                PAGE 2


        
                              PROGRAM DESCRIPTION

            FMT  takes  the  drudgery  out  of  writing FORTRAN FORMAT
        statements.  Simply use a word processor  or  text  editor  to
        create  an  ASCII  file  that looks just like the output you'd
        like your program to produce.  FMT turns the model into a  set
        of  FORMAT  statements  that  can  be pasted into your FORTRAN
        program.  For example, FMT turns

                                Monthly Report
                                     Wages

                 Employee Name           Salary +  Fringe   =  Total
               Last        First

          {           }  {       }      ^^^^.^^    ^^^^.^^    ^^^^.^^

        into

          *   33X,'Monthly Report'/
          *   38X,'Wages'/
          *   /
          *   18X,'Employee Name',11X,'Salary +  Fringe   =  Total'/
          *   16X,'Last',8X,'First'/
          *   /
          *   11X,A13,'  ',A9,6X,F7.2,4X,F7.2,4X,F7.2/



                                   OPERATION

            The input to FMT is an ASCII file  containing  the  output
        that is to be transformed into FORTRAN FORMAT statements.  The
        file  should look just the way it is to appear on screen.  FMT
        automatically adds the leading  blank  character  required  by
        FORTRAN.

            The name of the input file must  have  the  qualifier  UNF
        (for  "UNFormatted").  The resulting FORMAT statements will be
        written to a file with the same basename and the qualifier FMT
        (for "ForMaTted").  For  example,  when  DESIGN  is  given  in
        response to the FMT prompt

                Enter basename for text to be formatted.
                       unformatted .UNF, formatted .FMT:

        the  text  file  DESIGN.UNF  is  used  to  create  the  FORMAT
        statement file DESIGN.FMT.




        FMT                                                G.E. Dallal



                                                                PAGE 3



        Numerical data

            Digits are represented by carets.  Floating point  numbers
        are  distinguished  by  the presence of a decimal point in the
        string.

                            ^^^^   becomes I4
                           ^^^^.   becomes F5.0
                         ^^^.^^^   becomes F6.3

        Numerical fields  cannot  run  into  each  other.  FMT  cannot
        distinguish between 2I2 and I4.

        Character data

            The tilde (~) represents a CHARACTER*1  variable  (A1).  A
        substring  of  'n'  tildes  becomes  nA1 in the FMT file.  The
        first and last characters of  character  variables  of  length
        greater  than  1  are  denoted by the left brace ({) and right
        brace (}), respectively.

                      ~~~~~~~~~~~~  becomes  12A1
                      {          }  becomes  A12
                      {   }~~~{  }  becomes  A5,3A1,A4



                                     NOTES

            1.  The  qualifier  UNF  is  not  added to the basename in
                response to the FMT prompt.

            2.  Blank  lines in the UNF file become slashes (/) in the
                FMT file.

            3.  Lines in the UNF file with a period (.) in  the  first
                column become blank lines in the FMT file.

            4.  Carets  (^),  tildes  (~),  and braces ({,}) cannot be
                used as text in the UNF file.  If these characters are
                necessary,  use a surrogate in the UNF file and use  a
                text  editor  to  replace  them after the FMT file has
                been created.

            5.  Unbalanced braces will cause the program to  terminate
                with an error message.

            6.  Single  quotes  may appear in the UNF file.  They will
                be doubled appropriately in the FMT file.



        FMT                                                G.E. Dallal



                                                                PAGE 4




                       DUPLICATION AND SHAREWARE NOTICES

            You may  distribute  unmodified  copies  of  FMT  and  its
        documentation provided there is no charge beyond a duplication
        fee not to exceed $6.

            FMT is shareware.  If you find FMT to be  useful,  a  non-
        exclusive license fee of $12 should be sent to the author.



                               REGISTRATION FORM


            Licensed from:

                  Gerard E. Dallal
                  53 Beltran Street
                  Malden, MA  02148


            Date:      /   /
            ----------------------------------------------------------
                                       Qty      Fee       Fee
                     ITEM                       each      extended

            FMT:  Automatic FORTRAN
                FORMAT Statements            x  $12   =
                  (license fee)       -----               --------

            FMT distribution disk            x   $5   =
                                      -----               --------

                                             SUBTOTAL
                                                          --------

                     5% Sales Tax (MA residents only)
                                                          --------


                                                TOTAL
                                                          --------

                 Please make check payable to Gerard E. Dallal

                 You may keep a copy of this invoice for your
                                 tax records.




        FMT                                                G.E. Dallal


                                 STATOOLS(tm)

        STATOOLS(tm) is a set of stand-alone programs designed to fill
        in some of the gaps left by major statistical program packages
        such as SAS, SPSS-X, BMDP, and SYSTAT:

        STAT-SAK is the STATistician's Swiss  Army  Knife.  While  not
        the custom tool for any particular job,  it carries out a wide
        variety of miscellaneous tasks that are not  easily  performed
        by most large statistical packages.  These include probability
        distributions (normal,  t,  chi-square,  F, binomial, Poisson,
        studentized range);  exact confidence intervals  for  binomial
        p's;  Fisher's  exact test for 2 by 2 tables;  Mantel-Haenszel
        test and approximate 95% confidence interval  for  the  common
        odds  ratio;  Bartholomew's  test  for increasing proportions;
        Bartholomew's test for increasing normal means;  one  and  two
        sample   t-tests   from   summary   statistics;    correlation
        coefficients:  test that a population value is  0,  confidence
        interval  for  a  single coefficient,  test of equality of two
        independent coefficients,  test of equality of  two  dependent
        coefficients (coefficients from the same correlation matrix).

        PC-SIZE  determines  the  sample  size requirements for single
        factor experiments, two factor experiments,  randomized blocks
        designs,  paired  t-tests,  and comparison of proportions.  It
        can calculate the power of specific sample sizes  as  well  as
        determine the sample size needed to achieve specific power.

        PC-PLAN generates randomization plans.

        PC-EMS produces tables of expected mean squares  for  balanced
        experiments using the Cornfield-Tukey algorithm.

        PC-PITMAN,   calculates  observed  significance  levels  using
        recursive   relationships   to   obtain   the    randomization
        (permutation)  distribution  of a number of statistics without
        directly examining all possible permutations of the  data.  It
        performs one and two sample randomization tests and rank tests
        in the presence of an arbitrary number of ties in the data.

        PC-MULTI  performs multiple comparisons using Tukey's honestly
        significant differences (studentized range statistic).

        FORGET-IT produces Forget-it  Plots  (also  known  as  Two-way
        Plots),  a  graphical  device  for  displaying the interaction
        structure of a two-way table.

        STRUCTR  fits  structural  relations  when  the ratio of error
        variances is known.

        PC-AIP fits additive-in-the-probits models to  two-dimensional
        contingency tables with ordered column classifications.








        To  obtain  a  set  on  three  diskettes  (for  the IBM PC and
        compatibles running DOS 2.0 or later versions) containing  the
        source code, executable files, and user's guides, send a check
        in the amount of $15 to


                              Gerard E. Dallal
                              53 Beltran Street
                              Malden, MA  02148


        Other programs:

        OCTA (One man's Contingency Table Analysis):  Interactive log-
        linear analysis of multi-dimensional contingency tables by use
        of   the   Deming-Stephan   iterative   proportional   fitting
        procedure.   Quasi-independence   models;   Brown's  tests  of
        partial and multiple association.  Tables of up to 1000  cells
        containing  no  more  than  7 dimensions and 20 categories per
        dimension.  ($10)

        LOGISTIC:  Logistic regression.  Maximum likelihood  estimates
        of  the  regression  coefficients  are  obtained  by  use of a
        Newton-Raphson  iterative  procedure.   Interactions  may   be
        specified  in the model.  The right hand side of the model may
        contain up to 20 terms.  Analyzes data in MYSTAT/SYSTAT system
        files.  ($10)

        cLOGISTIC:  Conditional  logistic  regression  for  stratified
        case-control data. Up to 500 strata with no more than 10 cases
        plus controls per  stratum.  The  product  of  the  number  of
        subjects  and  the number of variables must be no greater than
        6000.  ($5 OR formatted 5-1/4"  floppy  diskette  in  a  self-
        addressed  stamped  mailer.  Also,  accompanies LOGISTIC at no
        additional charge.)

        PITMAN:  A  version  of PC-PITMAN (described above) that works
        with data in SYSTAT/MYSTAT  files.  ($5  OR  formatted  5-1/4"
        floppy diskette in a self-addressed stamped mailer)

        TRACK:  Foulkes-Davis tracking index, the probability that two
        individuals chosen at random will have measurement curves that
        do not cross.  Fits linear, quadratic, or cubic polynomials to
        each  individual's  data  and  judges the adequacy of the fit.
        Analyzes  data  in  MYSTAT/SYSTAT  system  files.  Produces  a
        command  file  that allows SYGRAPH (Systat,  Inc.) to draw the
        measurements curves.  ($5 OR formatted 5-1/4" floppy  diskette
        in a self-addressed stamped mailer)

        WUBA-WUBA:  Converts  space  or comma delimited ASCII files of
        numerical data to MYSTAT/SYSTAT files. ($5 OR formatted 5-1/4"
        floppy diskette in  a  self-addressed  stamped  mailer.  Also,
        accompanies  any  program  that analyzes data in SYSTAT/MYSTAT
        files at no additional charge.)

        GENERIC:  Set of FORTRAN source code that can  be  used  as  a
        template   for  writing  MYSTAT/SYSTAT  supplements.   ($5  OR
        formatted 5-1/4" floppy diskette in a  self-addressed  stamped
        mailer)

        RCJOIN:  identifies  sources of interaction in two-dimensional
        tables of counts (Computers and Biomedical Research, 21(1988),
        129-136) ($5 OR formatted 5-1/4" floppy diskette  in  a  self-
        addressed stamped mailer)

        MUDIFT:  Multivariate distribution-free comparison  of  growth
        curves. (Guo S, Simon R, Talmadge JE, Klabansky RL.  Computers
        and Biomedical Research,  20(1987), 37-48.) Works with data in
        MYSTAT/SYSTAT files.  MUDIFT was written with Shumei  Guo,  R.
        Simon,  J.E. Talmadge,  and  R.L. Klabansky.  ($5 OR formatted
        5-1/4" floppy diskette in a self-addressed stamped mailer)

        BUMP:  Dose-response curves in the  presence  of  a  downturn.
        (Simpson and Margolin,  Biometrika, 73(1986), 589-596).  Works
        with data  in  MYSTAT/SYSTAT  files.  BUMP  was  written  with
        Douglas G.  Simpson and is available from him at Department of
        Statistics,  University  of Illinois at Urbana-Champaign,  101
        Illini Hall, 725 South Wright Street, Champaign, IL 61820. ($5
        OR  formatted  5-1/4"  floppy  diskette  in  a  self-addressed
        stamped mailer)


            A word about MYSTAT...

        MYSTAT is a full-featured subset  of  the  statistics  package
        SYSTAT  by Systat,  Inc.  MYSTAT can analyze up to 32000 cases
        and 50 variables.  It contains a full-screen editor which  can
        import  ASCII  files and,  through an extensive transformation
        facility,  create new variables and modify existing variables.
        MYSTAT's  statistical capabilities include summary statistics,
        scatterplots,  histograms,  stem-and-leaf displays,  t  tests,
        correlation  coefficients,  regression analysis,  balanced and
        unbalanced multi-way analysis of variance, and the analysis of
        two  dimensional  tables  of  counts.   MYSTAT  will  soon  be
        packaged  with  number  of  introductory statistics textbooks.
        Anyone may obtain a free copy of MYSTAT by sending  a  written
        request to Systat,  Inc.,  1800 Sherman Avenue,  Evanston,  IL
        60201. (Reference:  Wilkinson, L.  (1987), "MYSTAT: A Personal
        Version of SYSTAT," The American Statistician, 41,  334.) I am
        unable to provide copies of MYSTAT.




















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1685

     Volume in drive A has no label
     Directory of A:\

    FMT      DOC     15517  12-18-88  11:26a
    FMT      EXE     26921  12-17-88  11:02a
    README             690  12-17-88  11:07a
    README   BAT        13   2-21-86  11:28p
    FILE1685 TXT      2295  12-11-89   5:30p
    GO       TXT       540  12-12-89   1:20p
    GO       BAT        38   1-01-80   1:37a
            7 file(s)      46014 bytes
                          111616 bytes free
