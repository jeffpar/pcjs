---
layout: page
title: "PC-SIG Library Disk #985"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0985/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0985"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROBABILITY AND STATISTICS 1 OF 2 (2123)"

    The following programs are included:
    
    KSPROB computes probabilities, percentage points, reliability and hazard
    functions for 23 probability distributions.  It is menu-driven, can
    output to the screen, printer or disk.  An 80x87 is used if present, but
    is not required.
    
    KSSTAT has modules for exploratory regression (CFIT), testing for
    normality (LILFOR) and crosstabulations (XTAB), as well as for summary
    statistics and histograms with breakdown variables and test mode scatter
    plots.  Missing values can be handled; column names can be specified and
    are used in output.
    
    KSPDAT produces date files that can be used for producing probability
    tables and graphs.  Output formats can be specified by the user.  Output
    can be either multicolumn files or multiple two column files.
    
    KSPRBAS is a BASIC program with accurate approximations for probability
    distributions commonly used in introductory courses.  Intended for use
    in hand held computers, it is very compact.
    
    SIMCORR produces pseudo-random samples from a bivariate normal
    population.  It illustrates the meaning of the correlation
    coefficient.
    
    An extensive chart showing interrelationships between distributions is
    included.  There are examples of graphs produced with KSPDAT output.
    All programs are documented.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## KSPRBAS.BAS

```bas

                   Probability Programs for Small Computers
                               Joseph C. Hudson

        This program is written in Sharp EL-5500III BASIC. Lower case 
        letters and extra spaces are used for clarity. The variable L is 
        given as a capital letter. sqr is used instead of Sharp's � and 
        pi is used instead of �. If your computer does not predefine pi, 
        you will have to define it if you implement line 410. BASIC 
        dialects vary among small computers. Expect to make  substantial 
        changes in i/o and initialization statements if you use this 
        program on another machine.
        
        lines       compute or approximate
        
        100 - 150   binomial density and cdf
        200 - 290   hypergeometric density and cdf
        300 - 350   Poisson density and cdf
        400 - 450   Gaussian cdf
        500 - 570   inverse Gaussian cdf
        600 - 620   Gaussian right tail probability
        630 - 695   subroutines used in lines 600 - 960
        700 - 760   Student's t right tail probability
        800 - 840   chi - square right tail probability
        900 - 960   f distribution right tail probability 
        
        errors
        
        the binomial, Poisson and hypergeometric computations are exact
        to 4 decimal places for all values checked. the program does 
        well for in all three sections computing normal quantities. for  
        Student's t, upper tail probs are acceptable for 4 or more df, 8 
        or more df for chi-square. for the f distribution, results are 
        acceptable if both df are 8 or more, results are not acceptable 
        if both are 4 or less, and are mixed otherwise.
        
        the program crashes if t = 0, x� = df - 1 or f = 1 with both 
        degrees of freedom equal. the program will not accept df = 1 for 
        Student's t or df < 3 for x�.
        
        the file ksprbas.err contains the results of extensive error 
        checks. use this for more detail about errors and for checking 
        the results of your own implementation.
        
        references: see ksrefs.doc

100 clear : restore : input "x=";x,"n=";n,"p=";p
110 t = (1-p)^n : s = t
120 if x = 0 then 140
130 for i = 1 to x : t = t *(n-i+1) * p / i / (1-p) : s = s + t : next i
140 using : print x;" ";n;" ";p
150 print using "###.####";t+0.00005;s+0.00005 : goto 100

200 clear:restore:input "x=";x,"np=";np,"ns=";ns,"k=";k
210 mi = 0 : if k + ns - np > 0 then let mi = k + ns - np
220 ma = k : if ns < k then let ma = ns
230 if x < mi then let t = 0 : let s = 0 : goto 280
240 if x > ma then let t = 0 : let s = 1 : goto 280
250 L=np-ns : d=k :nt=ns:if mi > 0 then let L=ns : let d=np-k : let nt=np-ns
260 t=1:for i=1 to nt:L=L+1:t = t*(L-d)/L : next i : s=t : if x=mi then 280
270 for i = mi+1 to x : t = t*(k-i+1)*(ns-i+1)/i/(np-k-ns+i) : s = s+t : next i
280 using : print x;" ";np;" ";ns;" ";k
290 print using "###.####";t+0.00005;s+0.00005 : goto 200


ksprbas.bas                                             page 2

300 clear : restore : input "x=";x,"m=";m
310 t = exp(-m) : s = t
320 if x = 0 then 340
330 for i = 1 to x : t = t * m / i : s = s + t : next i
340 using : print x;" ";m
350 print using "###.####";t + 0.00005;s + 0.00005 : goto 300

400 clear : restore : input "z=";z
410 y = exp(-z*z/2) / sqr(2*pi)
420 x = 1 / (1 + 0.2316419 * abs(z))
430 p=0.31938153+x*(-0.356563782+x*(1.781477937+x*(-1.821255978+x*1.33027449)))
440 p = p * y * x : if z > 0 then let p = 1 - p
450 using : print z;" p=; using "##.####";p + 0.00005 : goto 400

500 clear : restore : input "p=";p
510 f = 0 : if p > 0.5 then let f = 1 : let p = 1 - p
520 t = sqr(-2 * ln(p))
530 n = 2.515517 + t * (0.802853 + t * 0.010328)
540 d = 1 + t * (1.432788 + t * (0.189269 + t * 0.001308))
550 z = t - (n / d) + 0.0005 : if f = 1 then let p = 1 - p
560 if p < 0.5 then let z = - z
570 using : print p;" z="; using "###.###";z : goto 500

600 gosub 630 
610 input "z=";z : gosub 670
620 using : print z;" qz="; using "###.####";q+0.00005 : goto 610

630 clear : restore : dim a(9)
640 data -1.26551223,1.00002368,.37409196,.09678418,-.18628806
650 data .27886807,-1.13520398,1.48851587,-.82215223,.17087277
660 for i = 0 to 9 : read a(i) : next i : return

670 y = 1 / (1 + abs(z) / 2 / sqr(2))
680 p = a(9) : for i = 8 to 0 step -1 : p = a(i) + y * p : next i
690 q = 0.5 * y * exp(p-z*z/2) : if z < 0 then let q = 1 - q 
695 return

700 gosub 630 
710 input "df=";d,"t=";t : if d < 2 then 710
720 g = sqr(ln(1 + t * t / d))
730 s = 0.184 * (8 * d + 3) / d / g
740 z = sqr(d) * g * (1 - 2 * sqr(1 - exp(-s * s)) / (8 * d + 3)) : gosub 670
750 if t < 0 then let q = 1 - q
760 using : print d;t;"qt=";using "###.####";q+.00005 : goto 710

800 gosub 630 
810 input "df=";d,"x=";x:if d < 3 then 810
820 z = sqr(x + (d - 1) * (ln((d - 1) / x) - 1))
830 z = z * (x - d + 2 / 3 - 0.08 / d) / abs(x - d + 1) : gosub 670
840 using : print d;x;"qx=";using "###.####";q + 0.00005 : goto 810

900 gosub 630 
910 input "df1=";d,"df2=";e,"f=";f
920 p = e / (d * f + e) : c = 0.08 * ((1-p) / e - p/d + (.5-p)/(d+e))
930 d = d-1 : e = e-1 : z = e * ln(e/((d+e)*p)) + d * ln(d/((d+e)*(1-p)))
940 z = sqr(3 * (d + e) * z / (3 * (d + e) + 1))
950 z = z * (e + 1/3 - (d+e+2/3)*p+c) / abs(e - (d+e)*p) : gosub 670
960 using : print d+1;e+1;f;"qf=";using "###.####";q+0.00005 : goto 910


```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0985

     Volume in drive A has no label
     Directory of A:\

    WEIB     EXE     30649   5-28-90  11:36p
    BINO     EXE      9864   5-28-90   3:03p
    KSSAMPLE L01     38330   3-07-90  11:19p
    SIMCORR  EXE     36117   3-08-90   2:01a
    KSPRCHRT EXE     23394   3-06-90   9:24p
    README   1        2164   5-28-90  11:49p
    KSSAMPLE COD       174   4-08-89   3:18p
    KSSAMPLE DAT     24330   4-08-89   3:25p
    KSPDAT   DOC     26625   5-28-90  11:43p
    KSPRBAS  BAS      5534   3-10-90   1:04a
    KSPRBAS  ERR      8767   3-10-90   1:04a
    KSPRDIST DOC     10307   3-08-90  10:21a
    KSPROB   DOC      6836   5-28-90  11:47p
    KSREFS   DOC      4978   3-09-90  12:22a
    KSSTAT   DOC     31567   5-28-90  11:46p
    NOT      EXE     40901   5-28-90   2:08p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1114   7-10-90   2:09p
    FILE0985 TXT      2961   7-09-90   5:58p
           19 file(s)     304650 bytes
                            8192 bytes free
