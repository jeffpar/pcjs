---
layout: page
title: "PC-SIG Diskette Library (Disk #932)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0932/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0932"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LABCOAT - DATA AND COST ANALYSIS"

    LABCOAT, a laboratory data and cost analysis program, can help you to
    manage a clinical lab. Calculate item depreciation and evaluate
    extensive-test cost data for your equipment. Routine lab statistics
    and Q.C. charting are included.
    
    LABCOAT handles data entry and calculations for lipoprotein data. You
    can calculate numerical data, mean and standard deviation, and range.
    Also included is an evaluation program for prospective lab assistants,
    based on such criteria as job knowledge, judgment decisions, patient
    awareness, organizational skills, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0932.TXT

{% raw %}
```
Disk No:  932                                                           
Disk Title: Labcoat - Data and Cost Analysis                            
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: Labcoat (American version)                               
Author Version: 3.6                                                     
Author Registration: None.                                              
Special Requirements: CGA.                                              
                                                                        
LABCOAT, a laboratory data and cost analysis program, helps you manage a
clinical lab.  You can calculate item depreciation and evaluate         
extensive-test cost data for your equipment.  Routine lab statistics and
Q.C. charting are included.                                             
                                                                        
It handles data entry and calculations for lipoprotein data.  You can   
calculate numerical data, mean and standard deviation, and range.  Also 
included is an evaluation program for lab assistants, based on criteria 
such as job knowledge, judgment decisions, patient awareness,           
organization, and such.                                                 
                                                                        
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
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #932 LABCOAT  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type:                                       ║
║             COPY README-1.DOC PRN (press Enter)                         ║
║             COPY README-2.DOC PRN (press Enter)                         ║
║             COPY RELEASE.DOC PRN (press Enter)                          ║
║             COPY REG.DOC PRN (press Enter)                              ║
║                                                                         ║
║ To run the program, type: LABCOAT (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## README-1.DOC

{% raw %}
```
PC-SIG #932          README-1.DOC               Copyright 1990

                      LABCOAT - Version 3.6 - 07/90
                          
      SYSTEM REQUIREMENTS: 256K, 1 FLOPPY, COLORGRAPHICS recommended

MAIN PROGRAM: LABCOAT

            LABCOAT.PAS , EVALUATE.PAS & LIPID.PAS, written
         in "User Friendly Pascal" (Together, about 140 K),
         were compiled to provide a CHEAP and FUN Clinical Lab
         helper for those with enough funds to have a PC, but not
         enough to have the Omnipotent MegaBlodgett Clinical 
         Laboratory Complete Management Information System.

            Included programs are README-1, and README-2 written to
         inform;  LABCOAT.COM , LIPID.COM, EVALUATE.COM, EXEC.COM,
         QCHART.EXE, LABCOAT.000 & LIPID.000 which  are the executable 
         files ( just boot DOS, insert this  disk, and enter LABCOAT); 
         and LABCOAT.PAS, LIPID.PAS &  EVALUATE.PAS, the Turbo Pascal
         source code for three of the  programs.  The Source files
         are archived to the file SOURCE.EXE.  Once that file is moved         
         to an empty formatted disk, it can be self-extracted by simply
         typing SOURCE and hitting the Enter Key.   
           
           Users wishing to install the programs to their hard disk
         may do so - just make sure that all the file extensions 
         marked ".COM", ".000" & ".EXE" are on the same directory.

            All coding was done on an IBM PC, using DOS 2.1/3.2 with
         print routines tested on an Epson FX-85 and Okidata 182 (IBM).
         There is a lot of calling for Text and Background Colors in
         these programs - if you don't have a color card and monitor,
         you will not be able to say, "It's poorly written, but their 
         color's really nice".  People with color graphics cards and
         mono monitors can contact me for adjusted versions.  People
         from Canada, where S.I. units are used for Lipid Values may
         also contact me for that version ($3.00 Canadian).

           There are some printer and keyboard controls inserted at 
         various spots.  We toggle on the CAPS LOCK for example.  The
         print control calls are really for IBM or Epson character set
         compatable printers. These calls are mainly for borders and
         emphasized text and form feeds.  

           Fuzzy Logic is a close relative of the writers, and actually,
         may have made some contributions to these programs.  To help
         you appreciate him, We provided the source code and suggest
         you review it.  Further tips on this will follow.

           If you want to change something, just get out Turbo 3.0 and
         change it.  Good luck.  Please do not re-release an altered
         form of Labcoat under the same name, though - it's copyrighted.
         For use in your own lab, do as you please.
         
                 DOUG STANDING / GEN. MAX von BIRDFACE (R.I.P.)
                     943 ASTER CT, SUNNYVALE, CA  94086





           To check on the assumptions in calculations for the output 
        on pages 1 - 4 of the testcost module, check the source code.
        You can view and print the source in a number of ways:

           1. Load the file LABCOAT.PAS into your wordprocessor and 
        either view it or print it out complete with page breaks, 
        which is what we usually do.  Use condensed or "quality"
        mode printer commands ( >= 12cpi ).  REMEMBER: You must
        de-archive the source files onto another floppy first, before
        viewing or printing them.  Use PKXARC for this.

           2. Go to DOS, load the disk in "A:", turn your printer on 
        and type "copy a:LABCOAT.PAS LPT1", then hit return.  You may
        need to use the DOS program MODE.COM first.  The format is,
        "mode lpt1:"

           3. Load Turbo Pascal, if you have it ( and you Will need it
        if you're going to alter this program ), then load the file
        LABCOAT.PAS and use the editor to browse.

             ( The same steps work for LIPID.PAS & EVALUATE.PAS )
       ( Printing all the Pascal Source is going to use 65 - 70 Pages )
        
          At page 2 of LABCOAT.PAS, we've listed all the variables
        with {cryptic explanations as to use}.  Check those in both
        real and integer sections.  Next, at about pg 7-8 of the source, 
        we've set out the major group of calculations using those 
        variables.  If you go on to the code segment marked "Print
        Routine for GETIT", you can see a few more calculations and
        also follow the use of all the calculations as they're applied 
        to the 3 output pages that Procedure GETIT prints for you.
                Really, all the accounting math in GETIT is very 
        simple stuff, as are the formulas in the procedure for the
        Depreciation routine.  The Moving Average calculations are a 
        little more "elegant", and the Quicksort in the Stats program 
        is probably the most difficult to follow.  Basically, it only
        exists to serve the Median Procedure.  You can refer to 
        Herbert Schildt's Advanced Turbo Pascal, Osborne McGraw-Hill,
        for the whole story on Quicksorts, etc.  We just grabbed the
        idea, dressed it up and plugged it in.
            The assumptions for the Lipid Profile Program are outlined
        in the source code.  Basically, the program takes input of a
        patient's demographics and Cholesterol, Trig, HDL values and
        then calculates other values and flags them for age and sex
        related normals.  The beginning values ( breakpoints ) for
        both Moderate and High Cardiovascular Disease ( CVD ) Risk
        levels are printed out to the right of the patient results
        and any abnormal flags ( asterisks ).  The CVD risk break-
        points are always calculated based on the age group and sex
        of the patient.  


                                PAGE 2 OF 3



             Lipoprotein Phenotyping is also presented, in simple form,
        when some breakpoint elevations are passed.  I think that it was
        after writing this program that I decided it would be really
        dishonorable to not include the source files on the disk.
        At this point (1989) the meaning of lipoprotein levels is still
        a controversial subject.  What's "normal" here may not be in
        your setting.  Furthermore, the Lipid Research Council's 
        Abel-Kendall reference method for Cholesterol measurement may
        not be totally comparable to other standardization techniques.
        Simply adopting the reference ranges without having the same
        reference methodology and standarization may be misleading.
        So what you get is the skeleton.  I put in what looked like
        the current LRC reference ranges - you do what you want. 
        Canadian (S.I.) versions of this routine are available - write.
       
                           FATAL RUNTIME ERRORS

            You can enjoy "runtime" errors with program crashes if 
        you do some of the following:
                1. Try to enter numbers larger than 32767 into the
        Statistics routine.  The procedures to get the minimum and
        maximum values use the Pascal TRUNC and ROUND functions,
        which won't allow for entries over MAXINT (32767).
                2. Try using empty carriage returns to pass up 
        requests for numerical input.  If division by zero occurs
        anywhere in the calculations, you may crash. We attempted to
        initialize all critical variables or to error trap those 
        entries, but some get missed.  The other alternative is that
        the system will insert whatever garbage is floating around the
        memory when you use empty returns.  Birdface's suggestion is:
        Put A Number In.
                3. You fail to turn on the printer when requested and
        then also fail to respond to the "WRITE FAULT -" prompt by
        switching the printer on and pressing the "R" key for RETRY.
                4. Attempting to enter letters when numeric data is
        asked for.  For example, try answering the question, "Please
        Enter Age:  ", by typing and entering "Forty One". You may crash.

            Just try to remember, Birdface was only a poor little Parrot,
        and he wrote all the error traps.  He also invented the names for
        most of the variables in the code - they are not my fault - I don't
        know how he chose MAXHEADROOM or SICKO  -  I only followed orders.

                            COPYRIGHTS

                I would welcome collaboration and will give 
        credit for significant input.  Labcoat and its related .COM
        and .EXE files is copyright 6/90, and alterations of the 
        source, without direct written communication with Doug Standing, 
        should be used on your work site only, and not sent out for 
        distribution, or sold for profit.  Period.





```
{% endraw %}

## README-2.DOC

{% raw %}
```

        PC-SIG # 932                 README-2.DOC       Copyright 1990
        07-11-90

           This is Version 3.6 of Labcoat.  The upgrade includes
         a new linked program to the Statistics module, called QChart.exe.
         A Turbo com file called Exec, mostly thanks to T.U.G. & Bela 
         Lubkin, makes the DOS call necessary to run Qchart out of Labcoat.
         The updated files are starred below.
         The update includes recompilation with Turbo Pascal's
         TINST option 4 to make the executable files more compatible 
         with strange graphics card / monitor combinations.  Some users
         have color graphics cards with mono monitors, and this version
         attempts to meet their needs also. For those who still have 
         problems, I am usually happy to try customizations, if they will
         contact me directly.  IN FACT, I HAVE A MONO ONLY VERSION.

        Included files are (** = changed in present version):

       **       LABCOAT.COM -           The compiled main program,
                                menu driven, with subroutines for
                                Capital Depreciation, Moving Averages,
                                Statistics/Charting, Test Cost Analysis 
                                and print-out of the variables needed in
                                the Test Cost Analysis.  The present 
                                update corrects a procedure in the 
                                Standard Deviation calculation to conform 
                                to the "N-1" rule, and warns of subroutines
                                that expect a printer.

       **       LABCOAT.000 -           Overlay code for compiled program.

                LIPID.COM   -           Compiled Cardiovascular Risk and
                                lipoprotein profiler, called from main menu
                                of LABCOAT.  This portion is available in
                                S.I. Units for Canadians & Others.  Requests
                                for that version can be sent to the author,
                                along with $3.00 to cover shipping and 
                                preparation.  Lipid is set up to call Labcoat
                                upon exit.

                LIPID.000   -           Overlay code for compiled program.

                EVALUATE.COM-           Employee computerized evaluation
                                program which is called from main menu of
                                LABCOAT.COM and will call Labcoat upon exit.


                BIRDFACE.COM-           Color Graphics routine, called from
                                LABCOAT.COM menu.  Calls Labcoat upon exit.
                                The routine requires CGA.


files (contd)


                SOURCE.EXE  -  The Archived form of the source code
                               for programs LABCOAT, LIPID, EVALUATE, EXEC,
                               AND BIRDFACE.PAS.  Archiving was necessary to
                               supply everything on one disk.  The user can
                               can de-archive the files by transfering the
                               file SOURCE.EXE to another empty floppy disk.
                               The user then types SOURCE, hits Enter, and
			       the source code self-extracts.				                               


   **       README-1.DOC    -           ASCI discussion of programs at length.
   **       README-2.DOC    -           Update notes & further instructions.
   **       RELEASE.DOC     -           Program/File descriptions for SIGs.
   **       REG.DOC         -           Registration Form - User Input   

       **        QCHART.EXE -           A new addition to print out control
                               charts (Levy-Jennings) & do statistical jobs.
                               Qchart must be run from the Labcoat main menu.
                               It is set up to run Labcoat upon exit.
                               A PRINTER IS ABSOLUTELY REQUIRED. 

       **        EXEC.COM   -           Modified from Public Domain via the
                               Turbo Users Group & Bela Lubkin.  When called
                               by Labcoat, it instructs DOS to execute Qchart. 

        Best Regards,

        DOUGLAS STANDING / GEN. MAX VON BIRDFACE (RIP * )
        943 ASTER CT
        SUNNYVALE, CA 94086

  
    * Sorry to say, Birdface kicked the bucket 2/89.  His position was
      filled by Hermann Scooter, D.Y.H., former software consultant
      to DON'T BYTE! Magazine, and an acknowledged genius at the task
      of cracking DOS Shells.


```
{% endraw %}

## REG.DOC

{% raw %}
```


            LABCOAT USER REGISTRATION / COMMUNICATION


Send To:        DOUGLAS STANDING
                943 ASTER CT.
                SUNNYVALE, CA  94086

Note:           Registration Fees are not requested unless you get
                something else from me that costs money or, in 
                some cases, a lot of time.  Registration is 
                mainly useful for guaranteeing at least one 
                notification of updates or bug fixes & providing
                you a form for making suggestions or comments.
                Registration also provides me with accurate 
                information about distribution.


NAME:____________________________________________________________

ADDRESS:_________________________________________________________

CITY:___________________________  STATE:_________________________

ZIP: ___________________________

LABCOAT PURCHASED FROM WHAT SUPPLIER?_____________________________

VERSION NUMBER OF PROGRAM YOU HAVE:_____________

YOUR COMPUTER TYPE:_______________________________________________

GRAPHICS ADAPTOR:_________________________________________________

HARD-DISK? ( Y / N )      PRINTER:________________________________      

SEND PURE MONOGRAPHICS VERSION? ( ENCLOSE $3.00 ) ________________

SEND VERSION WITH LIPOPROTEINS IN S.I. UNITS? ( $3.00 ) __________


COMMENTS ( ATTACH SEPARATE SHEET IF YOU WANT ):

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

___________________________________________________________________

        Please Note:  YOU are responsible for determining and verifying
                      the accuracy or validity of the calculations in 
                      these programs.  If you find errors, can suggest
                      improvements or wish to contribute additions to
                      the program, please write.  I still use this thing,
                      and can probably benefit too.


```
{% endraw %}

## RELEASE.DOC

{% raw %}
```
LABCOAT - LABORATORY DATA & COST ANALYSIS           v3.6     RELEASE.DOC

FILE DESCRIPTIONS:

        LABCOAT.000     Overlay File
        LIPID.000       Overlay File
        SOURCE.EXE      Compressed Turbo Pascal Source Code (self-extracts)
        BIRDFACE.COM    Graphic Art Subprogram
        EVALUATE.COM    Lab/Clinic Employee Evaluation Subprogram
        EXEC.COM        DOS exec. Routine To Call Qchart From Labcoat
        LABCOAT.COM     Main Program With Menus Calling All Other
                        .COM & .EXE SubPrograms
        LIPID.COM       Lipoprotein Phenotype Calculator
        RELEASE.DOC     This ASCI Letter to SIGs & users.
        README-1.DOC    General Descriptions of Utility of Programs
        README-2.DOC    Updates To Topics & File Discussions for 1990 
        REG.DOC         Registration/Communication Form
        QCHART.EXE      Levy-Jennings Chart to Printer and 
                        Statistical Data Handler - A SubProgram 
                        of LABCOAT - Printer Absolutely Required

THINGS THAT LABCOAT DOES:

        1.      Extensive Laboratory Test-Cost Analysis - for 
                manual methods or automated/semi-automated
                methods.  Four page printouts (optional) for
                cost breakdowns and break-even descriptions.

        2.      A Lipoprotein Calculator & phenotyping reporter
                that outputs reports to screen &/or printer.

        3.      Excellent Moving Average Routine - with user input
                of number of periods and screen &/or printer output.

        4.      Equipment Depreciation Routine - with 3 options for
                depreciation type and printed report. (Printer Reqd.)

        5.      Employee Evaluation Routine - Easy input - screen 
                &/or printed reports - weighted scoring - originally
                designed for Lab / Medical Assistant evaluations.

        6.      Lab Statistics Program - Formatted Data Input &
                Output, with Mean, Median, CV%, Std. Dev., High
                Value/Low Value to screen &/or Printer.  For
                production of monthly Levy-Jennings Control 
                charts, a subroutine is available (Printer Reqd).

        7.      A Color-Graphics Art Routine for idle periods.

        8.      Archived Source Code - for every .COM file on disk.
                Just move to an empty disk, type SOURCE, hit Return.

REQUIREMENTS:   256K Memory - Color Graphics - Printer for Reports

REGISTRATION:   No Set Fee - Users registering with me may make comments
                and suggestions or arrange for limited customizing, 
                mono versions, S.I. versions and free notification of 
                updates/bug fixes (see REG.DOC).  I'm cheap.




                LABCOAT was written as a Clinical Laboratory Helper, 
        combining routine statistics, computation of moving averages, an
        employee evaluation program that's fun, a comprehensive test
        cost analysis and break-even analyser, an instrument depreciation
        routine, a very complete program to assess cardiovascular risk
        status via blood lipid values, and, finally, a little moving art.

                The program is not just intended for Laboratory managers;
        a lot of it is broadly applicable to many business and scientific 
        applications.  And, to the point, the entire source code is right
        on the disk, and anyone using it can boot Turbo Pascal and change
        the program and pass it on, I don't care - as long as the stuff
        remains useful or gets improved.  I'm encouraging any users
        to alter the source as they see fit, for their worksite. The
        program name and rights to distribution are mine.  

                The code, as mentioned, was written in Turbo Pascal 3.0 .
        I wrote on an IBM PC using PC DOS 2.1, testing report printing on
        Okidata 182 (IBM) and Epson FX-85 (Epson).  The programs are heavy
        on color and should be run that way, but, other than the short
        Art routine, a color-graphics card is not required.  However, some
        users with color graphics cards & mono monitors are going to have
        trouble with the color calls - I can and will provide them with
        customized versions, if they contact me directly.


                I suppose 256K RAM is best for headroom, and 1 5 1/4" floppy
        drive is enough.  There is now a routine called Exec.com that uses DOS 
        calls.  It was written basically by Borland, & shouldn't be troublesome
        but, if so, only limits the use of Qchart. I do toggle on Caps Lock and 
        Num Lock though.
             
                Thus, my guess is that MS DOS and other IBM DOS compatable 
        operating systems will boot the programs.
                                    
                Aside from interactive screen displays, the programs do
        produce a fair amount of printed material; 11+ pages of various
        reports can be generated.  For that reason I must say that the
        user should have a printer, preferably dot-matrix, to really get
        the maximum output.  The output was set up using the Epson and
        Okidata printers, with a few printer codes called: emphasized
        pitch, form feed and a line character for report borders.  What
        a daisy wheel printer would do with that I don't know.  If the 
        user has a Turbo Compiler, the calls can easily be removed from
        the source code (they're flagged), and re-compilation can be done.

                        Why don't You look at it and tell me what You think?
                If you want to realease it, that's fine.
        Boot DOS, insert disk, type LABCOAT, and hit Return.

                                        SINCERELY,

                                      DOUGLAS STANDING
                                      943 ASTER CT
                                      SUNNYVALE, CA 94086


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0932

     Volume in drive A has no label
     Directory of A:\

    1VERSION 3_6         4   6-12-90   3:00p
    BIRDFACE COM     12959  12-06-88  11:31a
    EVALUATE COM     22564   7-10-90   4:22p
    EXEC     COM     11996   2-16-89   9:31p
    LABCOAT  000     14080   7-10-90   3:58p
    LABCOAT  COM     31449   7-10-90   3:58p
    LIPID    000     46336   7-10-90   4:09p
    LIPID    COM     18531   7-10-90   4:09p
    QCHART   EXE     72086   7-06-90   9:14p
    README-1 DOC      9278   7-10-90   6:25p
    README-2 DOC      4831   7-10-90   6:28p
    REG      DOC      2150   7-10-90   2:44p
    RELEASE  DOC      6136   7-10-90   9:39p
    SOURCE   EXE     62389   7-10-90   6:19p
    GO       BAT        38  10-19-87   3:56p
    FILE0932 TXT      1851   8-10-90   8:53a
    GO       TXT       881   1-01-80   1:51a
           17 file(s)     317559 bytes
                           35840 bytes free
