---
layout: page
title: "PC-SIG Diskette Library (Disk #1453)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1453/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1453"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MSFORMS  2 OF 2 (ALSO 970)"

    MSFORMS and its utility program, NAMES, read a QUAN report from a
    Finnigan(tm) mass spectrometer and produce a finished report for given
    classes of target compound analysis (TCA), suitable for presentation to
    a client.
    
    Attach the RS232 communications cable that runs from the GC/MS NOVA
    computer to the Tektronix/Westward system terminal of the NOVA to the
    serial port of your PC. Load a suitable terminal emulator program in
    your PC and capture the Finnigan TCA QUAN reports as individual ASCII
    files.
    
    MSFORMS is then loaded and the QUAN filenames are passed to the
    program, along with other information, including matrix type and
    dilution factors. MSFORMS processes it and prints an analysis form
    suitable for delivery to a client.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1453.TXT

{% raw %}
```
Disk No: 1453
Program Title: MSFORMS version 6 (Disk 2 of 2)
PC-SIG version: 2.3

This is the MSFORMS documentation disk, refer to disk #970 for a full
description of the program.

Usage:  Report Generator for Finnigan Mass Spectrometers.

Special Requirements:  512K memory, two disk drives, and a printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $50.00

File Descriptions:

MSFORMS  DOC  Manual.
UPDATE   DOC  Manual.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1453 MSFORMS  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, Type: MANUAL (press enter)                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MSFORMS.DOC

{% raw %}
```



                                     NOTICE
                                     ______











                   MSFORMS  is  a copyrighted product  and  as 
                   such  is protected by the copyright laws of 
                   the United States.


                   You are therefore asked NOT to give  copies 
                   of  your  MSFORMS REGISTERED disk  away  to 
                   anyone.

                   You may, and indeed are encouraged, to give 
                   away  copies  of  your  MSFORMS  EVALUATION 
                   disk, providing, of course, that you adhere 
                   to  the  limits  contained in  the  license 
                   agreement.

                   Your cooperation in this matter is  greatly 
                   appreciated.


                   Declan Cowley
                   August 1987























         
                                     MSFORMS

                                  Version 3.10


                              copyright 1986, 1989

                                        by

                                  Declan Cowley
                                (CHAOS COMPUTING)
















        801 Seminole Blvd.
        Geneva, Fl 32732
        407-896-6645 (work)






                                MSFORMS    page 1



                                   NOTICE
                                   ------









               BEFORE PROCEEDING ANY FURTHER YOU ARE ENCOURAGED TO 


               MAKE  A  BACKUP   COPY  OF  YOUR  EVALUATION  DISK.


               THE  FILE  MAINTAINENCE SECTION OF THE  PROGRAM WILL


               ALTER  SOME   OF  THE   FILES  SUPPLIED   WITH  THIS 


               PROGRAM   -   SO  USE   OF  YOUR   BACKUP  COPY  FOR 


               EXPERIMENTING IS ENCOURAGED.              






























                                MSFORMS    page 2



                              YOUR MSFORMS LICENSE

        MSFORMS  is  copyrighted and is NOT in the public  domain.   Even
        though  the program is distributed under the  SHAREWARE  concept,
        and  can  be freely copied,  there are still some limitations  to
        protect  the  quality of the distribution and to  support  future
        development.

        Users of MSFORMS may make copies of this program for trial use by
        others on a PRIVATE NON-COMMERCIAL BASIS.   This program may  not
        be sold by anyone other than the author.

        By  accepting and using this software,  you acknowledge that this
        software  may  not  suit  your  particular  requirements  or   be
        completely trouble free.

        With proper application, this software will perform as described.
        However  I will not be responsible for your specific  application
        or any problems resulting from the use of this software.

        If  the software does not perform as described,  my  liability to
        you  is  limited  to  replacing the  software  or  refunding  the
        purchase  price  (if  purchased  and  registered).    I  have  no
        liability to you or any other person or entity for any damage  or
        loss,  including  special,  incidental or consequential  damages,
        caused by this software, directly or indirectly.

        This   agreement  is  governed  by  the  laws  of  the  State  of
        California.   Should any part of this agreement be held  invalid,
        the  remainder  of the agreement will still be in  effect.   This
        agreement can only be modified by written statement signed by me.

        Under this license you may NOT:

        1)  Distribute the program in connection with any other product
            or service, as part of a corporate or institutionally
            sponsored distribution.

        2)  Charge anything for MSFORMS.  An exception is made for
            registered user groups who may charge a cost based fee
            (not to exceed $10) to cover their own costs.

        3)  Distribute the program in modified form, or without the
            accompanying  demo files and this document file.




        Declan Cowley
        August 1987







                                MSFORMS    page 3



                              THE SHAREWARE CONCEPT
                              ---------------------


        MSFORMS  is distributed through a unique marketing concept called
        SHAREWARE.  The diskette with programs on it can be freely copied
        and  shared.   It is also available directly from the author  for
        $50,  shipping  and  handling included.   We ask you to  help  us
        distribute  MSFORMS by sharing unmodified and complete copies  of
        the  EVALUATION RELEASE with others.   We also encourage you  and  
        those   to whom  you have distributed the program,   to  register 
        your  copy if you  find  the  program of use.   Registration  has  
        a  number  of benefits to you:

        1)  You will receive the most recent version of the program.
            -the registered version has a few enhancements over this
             shareware release - mainly ...

              * it does not have the SHAREWARE notice.
              * fixes of any found or reported bugs.
              * recent improvements/additions.
              * you may request to receive the source code -
               QuickBASIC source and the C and assembler library modules.  

        2)  You will be notified of updates.

        3)  (MAINLY)  You will be supporting the concept that allowed you
            to  receive MSFORMS in the first place.   Only  through  user
            support can I continue to improve MSFORMS and perhaps develop
            other programs.

        Only  by  supporting  the program authors  who  release  valuable
        programs  as  shareware can you encourage others to do the  same.
        Supporting  shareware  will encourage other  authors  which  will
        result  in more low cost quality software for you to  enjoy.   If
        ASHTON-TATE  and  LOTUS  had their way we would all  be  spending
        upwards of $500 for each software package and not even be allowed
        to  make  backup copies for our own protection  under  threat  of
        legal  prosecution.   Fortunately not all of us think this way  -
        hence SHAREWARE. 

















                                MSFORMS    page 4



                              HARDWARE REQUIREMENTS
                              ---------------------

        An  IBM  PC or MS-DOS compatible computer with 512K  of  RAM  and 
        running  MS-DOS V2.0 or higher,  dual 360K floppies (with a  hard 
        disk  recommended).  A serial port  and a parallel  printer  port 
        are also required.


                          SUGGESTED DISK CONFIGURATIONS
                          -----------------------------

        A hard disk is the best configuration to work with, as there is a 
        lot of disk activity during program execution as MSFORMS reads in 
        the  various  files it needs and creates data files.   I  suggest 
        capturing  your  QUAN reports onto a floppy, or  into  their  own 
        subdirectory.  It makes erasing the files easier (since there  is 
        no  real  reason  to keep the captured QUAN  reports)-  and  more 
        foolproof.

        If  you  have  a dual drive system,  then MSFORMS and  its  files 
        should be on the same floppy.  The QUAN reports on another.

        Before proceeding, I would suggest that you make a backup copy of 
        the  distribution disk.   Use the backup for normal everyday  use 
        and  put  your  original away in a safe  place.   Once  you  have 
        customized MSFORMS to your parameter lists, make a backup of  the 
        support files for safe keeping.





























                                MSFORMS    page 5



                              MSFORMS - AN OVERVIEW
                              ---------------------

        MSFORMS reads in an ASCII QUAN report that has been generated  on  
        a FINNIGAN(tm)  mass  spectrometer  using Finnigan TCA  software, 
        and produces  a  finished report suitable for giving to a client.  

        This is accomplished by attaching the RS-232 communications cable 
        from  the  GC/MS NOVA computer to the  serial port  of  your  PC.   
        You  then load a suitable  terminal emulator program on  your  PC 
        and  capture  as  individual ASCII files the  FINNIGAN  TCA  QUAN 
        reports onto your PC's disk.  (Also supports the ITD).

        MSFORMS  is  then  loaded and the QUAN filenames  passed  to  the
        program,  along with other information, including matrix type and
        dilution  factors.  MSFORMS reads in the QUAN report,  parses  it 
        and  then  gives you the opportunity to edit the results  or  add 
        flags  before  it   prints  out  a  results  form  suitable   for 
        presenting to  a client. In addition, MSFORMS will also  generate 
        an MS/MSD report and a surrogate summery report.

        A CONFIGURATION menu allows the user to set up default parameters 
        for the program to use and to define your printer control codes.

        The  FILE MAINTAINCE section is used to set up the files  MSFORMS
        requires while processing the QUAN report.   These files  include
        'library'  name   lists  - two for each analysis (soil and  water 
        matrix) - complete  with  MDL's  (method   detection limits),   a  
        surrogate  file that tells MSFORMS how many   internal  standards  
        and   surrogate  standards  you  use in your  analysis   and  the 
        concentrations of your surrogates and  a  print header  file that 
        contains  the name and address  that will  appear on the  top  of 
        the report, and an MS/MSD info file. In addition, this section is  
        used  to  create a BATCH file that MSFORMS can use   to   process 
        multiple QUAN reports unattended.

        MSFORMS  is  not all encompassing (unfortunately),  therefore  it
        places  certain restrictions on you and your system in order  for
        you to be able to use it.  These restrictions are not very severe
        and can be easily incorporated into your method of operation. The
        restrictions will be pointed out to you during the course of  the
        rest of this manual.

        Finally,    this   is    not   a   substitute,   for   FINNIGAN's 
        QAFORMASTER(tm).    Although,  perhaps one day!!!  It is intended   
        for     any    GC/MS   lab   that   employs     FINNIGAN     mass 
        spectrometers  and  uses FINNIGAN's AUTOQUAN(tm)  software.   Its 
        function   is   to  aid  the  analyst  in  processing  the   mass  
        spectrometer  QUAN results into a presentable form,  suitable for 
        giving to a client.







                                MSFORMS    page 6



        MSFORMS   was   written  primarily  because I used to  spend   so  
        much   time transcribing   data   from  QUAN  reports   to   work  
        sheets   and calculating values based on dilution factors which I 
        then  hand  to  a  secretary who types  it  again.    One  day  I 
        discovered  how  easy  it  was to interface a PC to  the  MS  and 
        download  a QUAN report.  That was the beginning - this  (MSFORMS 
        V2.61)  is the middle (and the fifth evaluation  release).    The  
        end   may  not  be for quit a while as I  have   many  ideas  for 
        changes and additions to MSFORMS.   What really spurred me on was 
        FINNIGAN's  $4000  QAFORMASTER program.   That  program  is  very 
        comprehensive (suitable of FINNIGAN),  with a manual that boggles 
        the  mind.  I  thought an inexpensive and easy to   use   program 
        might find some favor.

        I  refer  you  to the EPA CLP STATEMENT   of  WORK   for  ORGANIC 
        ANALYSIS  Multi-Media, Multi-Concentration 10/86 revision,  as  a 
        guide  to  what  I  am  trying to achieve.   So  if  some  of  my 
        explanations  of  what the program does or what I  am  trying  to 
        achieve  with it are less than lucid,  then if you refer to  this 
        document, I hope it will become clearer. 

        Finally,  I  am  a practicing scientist  and  programmer,  not  a
        writer.  So please bear with me as I do my best to create a lucid
        description of this program and how to use it.

































                                MSFORMS    page 7



                            DEMO/TRIAL RUN of MSFORMS
                            -------------------------


        Like  most  people,  you  are  anxious to see what  you  have  in 
        MSFORMS.  So this section is a quick demo of the MSFORMS program.  
        On  your distribution disk are all the files that are needed  for 
        this demo.  You should have the following:-

                            NAMES.VOW               MSFORMS.EXE
                            NAMES.VOS              
                            NAMES.BNW               MSFORMS.CFG
                            NAMES.BNS               PRINTER.CFG
                            NAMES.PCW               EPSON.PRN
                                                    HPLJET.PRN
                            SURROGAT.VO
                            SURROGAT.BN             BATCH.MSF
                            SURROGAT.PC 
                            MATRIX.VO
                            MATRIX.BN
                            MATRIX.PC
                            REPORTS.FRM
                            QUAN1.VO
                            QUAN2.VO
                            QUAN3.VO
                            QUAN4.BN
                            QUAN5.BN
                            QUAN6.BN 

        First  we will generate the volatile organics report.   Start  by 
        inserting your backup copy of the distribution disk into drive A, 
        then  enter MSFORMS at the DOS A> prompt,  followed by a carriage 
        return.  The SHAREWARE notice will appear followed shortly by the 
        MSFORMS  opening  screen  and  shortly  following  it  the   main 
        menu.  Select 'QUAN REPORT GENERATOR' with the cursor keys,  then 
        the  parameter  entry  screen will appear.  The  cursor  will  be 
        positioned  at  the first entry - QUAN FILENAME.   Type  QUAN1.VO 
        followed  by a carriage return (<CR>).   For the following  eight 
        entries  enter  anything you want. At the  nineth  entry  (SAMPLE 
        TYPE) enter 'W'.  For now enter one's for the dilution factors.

        After a very short pause the screen will change and the data will 
        be  displayed  for modification.  The data can  be  displayed  in 
        pages  using  the PgUp PgDn keys, or you can go to  the  top  and 
        bottom  of the data by using the HOME and END keys  respectively.  
        To  select  a result for editing, press the cursor up  or  cursor 
        down keys.  The selected result will be highlighted, continue  to 
        use  the  cursor keys to select the item of interest.   When  you 
        have moved the cursor to the item of interest press the <F1>  key 
        to  edit the result, or press the <F2> key to edit the flag  (two 
        flag characters are allowed).  Once you have finished editing the 
        results, press the ESC key to start the printing of the form.





                                MSFORMS    page 8



        At  this  time there should be a fair amount of disk  activity  - 
        this  is normal.   Very shortly the printer will fire up and  the 
        report will be printed.  Basically that's all there is to it.


        Now  repeat the above exercise,  only use QUAN4.BN  for  the QUAN 
        FILENAME entry.  This time you will get a semi-volatiles report.

        Repeat the exercise again, only this time use GC.PC for the  QUAN 
        FILENAME  entry (and water for the MATRIX).  This is the  way  to 
        specify  that  no quan report exists, it will then  read  in  the 
        NAMES.PCW file  and  present  you with  an  edit  screen  without 
        results.   Edit in the results, then print the report.   This  is 
        the  mechanism  that can be used for generating  GC  reports,  or 
        reports for any other instrument that has a list of compounds.

        Repeat the exercise again, only enter BATCH for the QUAN FILENAME 
        entry.   This  will automatically produce both reports using  the 
        QUAN1.VO  and  QUAN4.BN files.   Note that this time no  data  is 
        presented for editing.  This is discussed later in the manual. 

        Now  select 'MS/MSD REPORT GENERATOR' from the menu.  The  MS/MSD 
        parameter  screen  will appear.   Enter  QUAN1.VO,  QUAN2.VO  and 
        QUAN3.VO for the filenames (in that order),  complete the rest of 
        the entries and an MS/MSD report is generated.   Repeat the above 
        for  the three .BN QUAN files (4,5,6 in that order) and you  will 
        get a BNA MS/MSD report.

        Select  the  'MS/MSD REPORT GENERATOR' again.   This  time  enter 
        GC.PC for the first QUAN filename.  The cursor will now skip  the 
        next two fields.  Proceed as normal with the rest of the entries.  
        This  time three screens will be presented for EDITing.   Editing 
        in  the spike results will allow you to enter data from a GC  run 
        for  an MS/MSD report.  The first screen is for the results  from 
        the  unspiked sample, the second for the spike and the third  for 
        the spike duplicate.

        Now select 'SURROGATE REPORT GENERATOR' from the menu, answer  VO 
        and  a  surrogate summery report will be  printed.  Selecting  it 
        again and answering BN will produce another surrogate report.

















                                MSFORMS    page 9



                                FILE MAINTAINENCE
                                -----------------

        Since   the   FILE  MAINTAINENCE section   creates   files   that  
        MSFORMS requires in order to work, we shall discuss it first.

        FILE  MAINTAINENCE   is   used  to create six  files,   three  of  
        which  must  be present for MSFORMS to work.

        The files are:-
                        1)  NAMES.xxW
                        2)  NAMES.xxS
                        3)  SURROGAT.xx 
                        4)  MATRIX.xx 
                        5)  REPORTS.FRM
                        6)  BATCH.MSF

                 - where xx is any two letter extention, user defined. 

        All  these files are present on the distribution disk.   However,
        you will need to create your own in order to customize the system
        to your operation.

        The files present on the distribution disk also include six ASCII
        QUAN    reports    downloaded   from   my   4600.     They    are  
        QUAN1(2&3).VO   and  QUAN4(5&6).BN  and they  are   VOA  and  SVO 
        reports respectively.  You may use  these files together with the 
        other  files above to do  'test runs'  of  the program.   

        Selecting 4 at the main menu will select FILE MAINTAINENCE.     
        You will be presented with a menu.  The selections are:-
         
                            1)  CREATE NEW NAME LIST
                            2)  EDIT NAME LIST ENTRY
                            3)  INSERT/DELETE ENTRY 
                            4)  ADD NEW ENTRY TO LIST
                            5)  CREATE SURROGATES FILE
                            6)  CREATE MATRIX SPIKE FILE
                            7)  CREATE REPORTS FILE
                            8)  CREATE BATCH FILE
                            9)  RETURN TO MAIN MENU
         
        The   first  four  entries  create  or  edit  the  NAMES.xxS   or  
        NAMES.xxW files.













                                MSFORMS    page 10



                            1)  CREATE NEW NAME LIST
                            ------------------------

        Selecting   this item on the menu will bring up a  screen  asking 
        for the two letter extention (xx (above)) of the file you wish to 
        create  and the matrix.  Your  selection here will create a  file 
        named  either NAMES.xxW or NAMES.xxS. 

        Once selected a new entry screen is displayed:-
         
                   2 LETTER FILE EXTENTION .--       ENTRY NUMBER : ---
         
                          MDL -------    UNITS ------------------------  
         
                COMPOUND NAME ------------------------------
         
                       CODE # ----

                       CAS # ----------

             BASE MULTIPLIER ----
             
        The  entry number is filled in for you - it is a counter to  help
        you keep track.

        The  MDL (method detection limit) is entered first.   Entering  a
        0 (zero) will terminate entry and write the file to disk.
        The  MDL value to enter should correspond to your reportable  MDL
        for  your standard analysis weight/volumn.  As  per the  VOA  CPL
        contract  this  would correspond to 5 (ug/l or  ug/kg)  for  MOST
        compounds.    As  per the BNA CPL contract this would  correspond 
        to 10(ug/l) for MOST compounds.  Since the normal dilution factor 
        for  water is 2 it will be necessary to half the CLP values to  5 
        in  order to get the correct MDL (when using a dilution factor of 
        2) on the printed report.   The MDL used in SVO analysis of soils 
        with a normal soil sample weight corresponding to  30gm,  the CLP  
        contract  level  of 330 (ug/kg) for MOST  compounds  (this   also 
        corresponds  to a normal dilution factor of one for a  30gm  soil 
        sample extracted and concentrated to 1ml).
         
        If  you  are  not  doing  CLP work then  the  MDL  you  enter  is 
        determined by your standard operating procedures.  The reportable 
        units that will appear on the report form is taken from the UNITS 
        entry.  

        *** NOTE ***
              The  program  actually only reads the UNITS field  and  the 
              BASE  MULTIPLIER field from the FIRST entry in each file  -
              this is  why the input routine will not prompt you for them
              a  second  time,  but  carries  the  input  over  into  all
              subsequent entries. 
         





                                MSFORMS    page 11



        Next  is the compound name.   Here you enter the compound name AS
        YOU  WANT  IT TO APPEAR on the printed report.   If you  want  it
        capitalized on your report - make sure you capitalize it when you
        enter it.
         
        *** NOTE ***
                  This  is one of the restrictions (actually  three)  the
                  program will make on your system.
         
                  1)   The  internal  standards  MUST be  the  first  'x'
                  compounds in your name list.
         
                  2)   The  surrogate  standards MUST  be  the  next  'y'
                  compounds in your name list.
         
                  3)   The balance of the compounds in your TCA list MUST
                  BE ENTERED IN THE ORDER THEY APPEAR IN THE QUAN REPORT.
         
                  3a)   This restriction (3) also applies to your IS  and
                  SS.   This  means that your QUAN report MUST  list  the
                  compounds in the following order:-
                                      a: Internal Standards
                                      b: Surrogate Standards
                                      c: rest of the TCA compounds
         
                  Why is this?  Because MSFORMS does not have the ability
                  (yet) to determine which compound is where.   Therefore
                  it expects the order of compounds in the QUAN report to
                  correspond to the order in this name list.   It further
                  discards   the   first  'x'  compounds  (the   internal
                  standards) and processes the second 'y' compounds  (the
                  surrogate  standards) and generates % recovery  results
                  for them.   The balance of the compounds are treated as
                  TCA compounds.
         
                  MDL values for the internal standards and surrogates --
                  you  cannot enter zero (as this would terminate  entry) 
                  so  I  suggest a suitably small non zero  but  positive 
                  value, such as 0.1.

                  If you intend to use the ND option on your report  then 
                  the  MDL value entered in the FIRST entry of  the  name 
                  list is used on the report. 
         
                  One   final  restriction  - the  QUAN  report  must  be
                  complete with NOT FOUNDS if necessary.   That means the
                  QUAN   report  MUST  NOT  have  had  the  NOT   FOUND's
                  compressed out by EDSL (U;W;E.
                  The  reason  for  this restriction is  related  to  the
                  programs  current inability to determine what  compound
                  is where.   The processing of the QUAN report  involves
                  discarding  all  text only lines from the QUAN  report,
                  leaving only lines containing results.  Then the number
                  on the left is read in and this tells the program  what
                  compound it is, which it then reads from the name file.


                                MSFORMS    page 12



                  This  is why the order is important.   If you  compress
                  out the  NOT FOUND's with EDSL (U;W , the  entries  are
                  renumbered  and  that  number no longer points  to  the
                  correct compound in the name list.
         
                  For those of you not familiar with how to preserve  the
                  QUAN  list  intact,  especially if you  have  automatic
                  procedures  that  do additional data processing on  an
                  analytical  run  that compresses out the  NOT  FOUND's,
                  incorporate   the  following  before  and   after   the
                  procedure:
         
                  FTP (CO;$1.QL;TEMP.QL;E
                  procedure
                  FTP (CO;TEMP.QL;$1.QL;E
         
                  This  obviously  presupposes  that  the  file  you  are
                  processing is in $1.   If it isn't you will need to set
                  it up beforehand.
         
         
        Finally,  if you are unclear as to the above I suggest you take a
        look  at the two QUAN reports supplied with this program and  the
        name lists also supplied.
         
        Next is an entry entitled CODE.  At present this is not used.  It 
        is  present in order to provide forward compatability between the 
        files generated now with future versions of MSFORMS.

        The  next   entry  is the CAS #.   This is a report option.

        The  last  entry is BASE MULTIPLIER.   The BASE MULTIPLIER  is  a 
        constant  factor  that you wish applied to the data  results  (it 
        does  not effect the surrogates) to bring the QUAN report  values 
        up to the reportable UNITS.   For instance the MDL for CLP  soils 
        is 330 ug/kg.  However only 30 grams are extracted. To convert 30 
        grams  to kilograms a multiplier of 33 is required.   Entering 33 
        as  the base multiplier takes care of  this  automatically.   The 
        only thing the analyst needs to worry about are dilution factors.  
        This  also  allows  the  program  to  be  customized  to  unusual 
        extraction  volumns  and final extract volumns.   Once these  are 
        standardized, calculate the factor to convert the QUAN results to 
        reportable  results  and  enter  it  into  the  BASE  MULTIPLIER.  
        Thereafter  you need only concern yourself with dilution  factors 
        (ie:  variations  from your standardized extraction  volumns  and 
        final  extract  volumns).   If  you  do not need to  use  a  BASE 
        MULTIPLIER, enter a value of one.
              
         
         







                                MSFORMS    page 13



                             2) EDIT NAME LIST ENTRY 
                             -----------------------
         
        Menu  item 2 (EDIT LIST) allows you to select an entry  in
        the  appropriate  name list for editing.   You supply  the  entry
        number  - the program then displays the entry for  editing.   You
        need not re-enter  all data  for that entry - hitting return does
        default  to the original data.   Enter data only if you  wish  to 
        make  a  change.   You  may modify the UNITS field and  the  BASE 
        MULTIPLIER field in this option.  REMEMBER entry #1 is the record 
        the program reads to get the UNITS and BASE MULTIPLIER fields and 
        MDL entry.


                            3) INSERT/DELETE ENTRY  
                            ----------------------

        This section allows you to delete an entry from the name list and 
        to insert an entry into the name list.  After selecting the  file 
        to  change the entries are displayed for selection in order  from 
        first to last.  You have three choices:

                            Keep - keeps the entry (no change)
                            Delete - deletes the displayed entry
                            Insert - allows you to insert a new entry in
                                     FRONT of the displayed entry.


        Finally,  you  are asked to confirm your changes.   Answering  No 
        will not make the changes permanent.  Yes, will.



                            4) ADD NEW NAMES TO LIST
                            ------------------------
         
        Menu   item   4  (ADD NEW ENTRIES TO LIST) allows  you   to   add  
        additional compounds to your selected name list.   This item will 
        append the new  entry  to the END of the name list.  Bear in mind  
        that all entries in the name list will appear on the report form.
         

        Just  to  reiterate,  the compound entry numbers in this  module
        must correspond to the compound name and the number that  appears
        on the left of your QUAN report.  The program expects these to be
        the same,  and indeed uses these numbers to get the compound name
        and MDL from the appropriate name list, NAMES.xxW or NAMES.xxS.


        *** NOTE ***
                    As  MSFORMS  is designed to handle a maximum  of  160 
                    compounds   per  report,   the  NAMES  program   will 
                    terminate  user input after the 160th entry has  been 
                    input (in modules 1 and 3).  The file will be written 
                    to disk and closed with 160 compound entries in it.


                                MSFORMS    page 14



                            5) CREATE SURROGATES FILE
                            -------------------------
         
         
        Menu  item  5 will create a disk file that will tell MSFORMS  how 
        many  internal  standards  and surrogate  standards  are  in  the 
        NAMES.xxx file and corresponding QUAN report.   At the moment the 
        assumption  is  that  the same number of internal  standards  and 
        surrogates are used in both soil and water analysis.

        The entry screen looks like:

                                VOA(V) or BNA(B) or GC(G) -

                                  2 LETTER FILE EXTENTION  .--

                             NUMBER OF INTERNAL STANDARDS  ---
              
                            NUMBER OF SURROGATE STANDARDS  ---

                                         SURROGATE NUMBER  ---

                         TRUE (UNDILUTED) SURROGATE VALUE  ---

        The   true  (undiluted)  value  corresponds  to   the   surrogate 
        concentration  at a dilution factor of one.   

         A value of zero is a valid entry if you should use no surrogates 
        (or internal standards).




























                                MSFORMS    page 15



                           6) CREATE MATRIX SPIKE FILE
                           ---------------------------


        Menu  item  6 will create a disk file of the information  MSFORMS 
        needs in order to process matrix spike/matrix spike duplicates.

        The screen display looks like:


                        2 LETTER FILE EXTENTION : .--

                       QUAN REPORT ENTRY NUMBER : ---
                
                 COMPOUND NAME : ------------------------------

                 COMPOUND CODE : ----

                 CONCENTRATION : ----


        QUAN REPORT ENTRY NUMBER - this is the same as in the name lists, 
        if  the compound is number 32 on your QUAN report then  enter  32 
        here.   MSFORMS uses this number to select out of the QUAN report 
        only those entries it needs.

        COMPOUND NAME - this is self explanatory,  again enter it exactly 
        as you want it on your report.

        COMPOUND  CODE  - at this time,  this entry is not used,  but  is 
        included to allow forward compatability at a later date.

        CONCENTRATION - enter the spiking concentration of the  compound.  
        This value will be used to compute the percent recoveries.   This 
        is the true (undiluted) value.



                             7) CREATE REPORTS FILE
                             ----------------------
         
        Menu  item  7  will create a disk file that  contains  the  name,
        address  and phone number of your lab.   This information is read
        in by MSFORMS and placed at the top of the printed report.
         
        In  addition  a  footer can be added to your report,  such  as  a 
        disclamer  (or a Christmas greeting).   The  footer can be up  to 
        122  characters  long.    Input  is  divided  in  two  fields  61 
        characters  long.   Enter your footer until you reach the end  of 
        the  field,  then hit return and enter the  second  field.   When 
        entering, ignore the artifical boundery at the end of the field - 
        type  until  you reach it then hit return and continue.   If  you 
        have to break a word in the middle, that's okay, just continue on 
        the  next  line  where  you  left  off.    The  footer  will   be 
        automatically centered on the report form.


                                MSFORMS    page 16



                              8) CREATE BATCH FILE
                              --------------------
         
         
        Menu  item  8  will  create  a disk  file  with  all  the  report
        parameters  for multiple files.   This will allow MSFORMS  to  do
        data processing on multiple files unattended.
         
        The  data  entry screen which appears is almost identical to  the
        MSFORMS data entry screen.   The only difference is the  presence
        of  'ENTRY  #  :' that appears in the upper left of  the  screen.
        This keeps track of how many files you have entered.
         
        The entry screen looks like this :
         
                        QUAN FILE NAME : --------------
                         BLANK FILE ID : -------------- 
                           CLIENT NAME : ------------------------------
                     LAB SAMPLE NUMBER : --------------
                  CLIENT SAMPLE NUMBER : ------------------------
                         DATE RECEIVED : ----------
                          DATE SAMPLED : ----------
                        DATE EXTRACTED : ----------
                         DATE ANALYSED : ----------
          SAMPLE TYPE (SOIL/WATER/AIR) : -
            DILUTION FACTOR     SAMPLE : --------   SURROGATES : --------
         
        The only required entries are QUAN FILE NAME, SAMPLE TYPE and the
        DILUTION FACTORS.

        There  are restrictions as to what you may enter  here,  and  the
        program checks for valid input.
         
                     QUAN  FILE  NAME:    Valid entries require  any  two 
                     letter extension.  This  is  how  MSFORMS determines  
                     what name list to use.    The only  other limitation 
                     is that it be a valid DOS filename.  NOTE: the GC.xx 
                     entry  is not valid here, as this requires the  edit 
                     screen input.
         
                     BLANK  FILE  ID:  This is the mass  spec  instrument 
                     file name.  (extraction date (BNA) and analysis date 
                     (VOA) are already present on the report)  The sample 
                     instrument file name is extracted by the parser  and 
                     will appear on the report under the blank id.

                     SAMPLE TYPE:  Only an 'S' or 'W'  or 'A' is valid.
                          The  'A'  will use the  appropriate  .xxW  name 
                          list.  However, result  units  will read 'total 
                          nanograms'  in place of whatever is in the name 
                          list for UNITS.
             
                     DILUTION FACTORS:   Any numeric entry greater than 0
                     (zero)  is  accepted.     The  range  of  values  is 
                     .0000001 to 99999999.


                                MSFORMS    page 17



                                     MSFORMS
                                     -------
         
        MSFORMS is started from the DOS prompt by typing MSFORMS followed
        by  a  carriage  return.   The opening screen  is  the  SHAREWARE
        notice.   If you register your copy of MSFORMS,  you will receive
        the  latest edition of the program,  complete with serial  number
        and  without  the SHAREWARE notice. 
         
        The  second  screen is the real opening screen,  and the  one  on
        which your serial number will appear.  This screen also tells you
        what version it is.

        The third screen is the main menu.  At present it has  only   six 
        offerings.   Item  1  is the parameter entry  screen  for  report 
        generation  and is  virtually  identical to the batch file  entry 
        screen  in  FILE MAINTAINENCE.  Item 2 is the  SURROGATE  SUMMERY 
        REPORT.  Item 3 is the MS/MSD entry screen and item 4 is EPA  CLP 
        REPORTS  MENU.  Item 5 is the FILE MAINTAINENCE MENU.  Item 5  is 
        the CONFIGURATION menu. Item 6 exits to DOS. 

        For  menu  item 1,  QUAN REPORT GENERATOR  the same  restrictions 
        apply  as  in  FILE MAINTAINENCE.   The  same  four  entries  are 
        required,   the  others   are   optional.    All   non   required  
        entries  supply information that will appear in the header of the 
        printed  report.   Lab sample number and date analysed are passed 
        to the surrogate summery report.
         
        Again,  the  QUAN FILE NAME MUST end with any  valid  two  letter 
        extention, however, here a third entry is also valid.    Entering 
        BATCH will  transfer control  to the file we created with item  7 
        in  FILE MAINTAINENCE and  proceed to automatically  process  the 
        files named therein.

        Entering  GC.xx is also valid.  Essentially this is  the  'blank' 
        report.   The xx is any valid two letter extention for which  all 
        the  appropriate  files have been created.  The  'GC'  tells  the 
        program  that a QUAN file does not exist.  The program then  goes 
        out  and creates a blank report by reading in the  NAMES.xx  file 
        and assigns zero to each result.  On the edit screen you then get 
        to edit in the results.   The GC.xx entry is NOT valid in BATCH.

        If  you have entered GC.xx for the QUAN FILENAME, a  window  will 
        open requesting the METHOD.  This is to allow the user to specify 
        the  GC method number (ie: 601, 8010 etc.).  On the report  form, 
        the method number will replace the QUAN FILE ID.











                                MSFORMS    page 18



        If 'A' is entered for sample type,  a window will open at the top 
        of the screen requesting additional input.  

                           --  AIR ANALYSIS --

                    Result Units  (total nanograms)

              extract volumn(ml)  (1000)

                          MATRIX  (AIR)

        The  values  in  brackets are default values and can be  kept  by 
        simply  hitting return,  else enter the  changes  required.   The 
        volumn  entry is based on 1000ml for calculations (1000ml gives a 
        factor  of  one).   Anternate  entries will  adjust  the  results 
        accordingly - especially useful if reporting results in  wt/litre 
        volumn.  This works in ADDITION to the dilution factors.

        If  'S'  is entered for sample type,  a window will open  at  the 
        bottom of the screen requesting additional input.

                          -- SOIL ANALYSIS --

                    Percent Moisture  (0)

        The  value in brackets is default,  and corresponds to NO percent 
        moisture  correction.    This works in ADDITION to  the  dilution 
        factor.

        If the sample matrix is soil, then one of two additional messages 
        appear  underneath  the  RESULT UNITS:  on  the  report.   Either 
        "Results reported on a wet weight basis" or "Results reported  on 
        a  dry  wight basis", depending upon your answer to  the  percent 
        moisture question.
         
        Once  the final item on this screen has been entered MSFORMS will
        read  in and parse the named QUAN report.   Then a fourth  screen
        appears which will present a listing of CMPD # and its VALUE  for
        editing  before  the  report is printed.   This  will  allow  the
        analyst  to remove erroneous data from the QUAN report or correct
        results that have been recalculated.   To remove a false hit from
        the report simply enter the compound number.   You will then have
        the compound number and its value displayed at the bottom of  the
        screen   and  be  prompted  for  the  new  value.    The  minimum 
        allowable  value  is  0. 
         
        Once  finished  editing  the data,  MSFORMS  then  processes  the
        results data and prints the finished report.
         
        MSFORMS  will  multiply the MDL by the dilution  factor  for  the
        sample  in keeping with CLP protocol.   Also in keeping with  CLP
        protocol,  MSFORMS  supplies  the letter 'U' after the MDL  value
        when it is reported as the result.   Result values between 0.5MDL
        and the MDL are reported with a 'J' appended.  Result values less
        than 0.5MDL are reported as the MDL.


                                MSFORMS    page 19



        One final note.  If the BATCH mode is invoked, the editing screen
        is  bypassed.   If  you need to edit any QUAN  reports  prior  to
        processing and you want to use the BATCH mode,  then you can edit
        your  QUAN  reports using WORDSTAR(tm) in its non document  mode.
        Of course, any other ASCII file text editor will also work.


        Printed results are rounded to two significant figures.

        If you call up a screen you do not want to be in, pressing return 
        without entering anything will return you to the main menu.

        During  the  execution of the program, if you find  that  MSFORMS 
        returns an error telling you that a file does not exist or if you 
        forget  a  filename, it is possible to get a  directory  listing.  
        During  MOST fielded input, pressing the <F10> key will  cause  a 
        window  to  open.   Enter the Drive:\Path for which  you  need  a 
        listing  and  press return.  The filenames for  that  Drive:\Path 
        will  be  displayed.   If  there are more  entries  than  can  be 
        displayed in the window, pressing PgDn and PgUp will display  the 
        rest.   HOME will allow another Drive:\Path to be  entered.   END 
        will close the window and return you to the input field you  were 
        at prior to calling the directory window.

        Menu item 2, SURROGATE SUMMERY REPORT will ask for the two letter 
        extention  for  which  to  generate  the  summery  report.    The 
        surrogate  summery  file is generated automatically each  time  a 
        report  is  processed  from  item  1,  unless,  of  course,  zero 
        surrogates is specified in its surrogat.xx file.
          
        When the surrogate summery report is printed the file  containing 
        the  surrogate  summary (SURRHOLD.xx) is renamed  to  SR??????.xx 
        for archival purposes (or for your QC officer).  The data in this 
        file  contains  information not currently printed.  The  data  is 
        contained in the following format:

        num,  lab  id,  date analysed,  time  analysed,  date  extracted, 
        instrument filename, matrix, (surrogate results .....)

        num = 6 + (number of surrogates)

        ie: VOA analysis uses 3 surrogates, therefore num = 6 + 3 == 9.















                                MSFORMS    page 20



        Menu  item 3,  MS/MSD REPORT GENERATOR will call up the following 
        input screen:


                SAMPLE QUAN FILENAME : --------------

          MATRIX SPIKE QUAN FILENAME : --------------

                   MSD QUAN FILENAME : --------------

                           SAMPLE ID : --------------

             MATRIX (Soil/Water/Air) : -

                       DATE ANALYSED : ----------

                     DILUTION FACTOR : ---------


        The SAMPLE QUAN FILENAME refers to the unspiked sample.  The next 
        refer to the two spiked samples.   The program checks to see that 
        all three have the SAME file name extention (ie: .VO or .BN).

        An  entry of GC.xx is a valid input here.  Again, this tells  the 
        program  that  you  wish  to generate an  MS/MSD  report  for  an 
        analysis,  but  that there are no QUAN files to read  in.   Since 
        there are no quan files to read in, the QUAN filename for the  MS 
        and  MSD will be bypassed.  The program will request other  field 
        items, then you will be presented with the edit screen to edit in 
        the results for the SAMPLE, then MATRIX SPIKE and then the MATRIX 
        SPIKE DUPLICATE, each in turn.   Watch the box over the  compound 
        names to tell which is currently requested. 

        The  SAMPLE  ID  is for laboratory sample identification  on  the 
        report.  MATRIX and DATE ANALYSED are self explanatory.  Input on 
        these three items is optional.

        DILUTION  FACTOR is as it implies.   The assumption made here  is 
        that all three samples were run using the same dilution factor.

        The  program  will subtract the unspiked sample values  from  the 
        spiked  values  and then use the concentrations entered into  the 
        MATRIX.xx files created in FILE MAINTAINENCE to calculate percent 
        recoveries.   All  values are multiplied by the entered  dilution 
        factor  before any calculations are made.   The program uses  the 
        spike   and   spike  duplicate  results  to  compute   the   RPD.  
        Calculations are done on the results unmodified,  but the results 
        are rounded only prior to printing.


        *** NOTE ***
                    MSFORMS  uses the computer's system clock to generate 
                    the  REPORT  DATE on the forms.   So  make  sure  the 
                    system  date  is set correctly when the  computer  is 
                    turned on.


                                MSFORMS    page 21



        Menu  item 4, EPA CLP REPORTS MENU.  This will display a menu  of 
        EPA  CLP  forms.   At  this  release  only  the  first  entry  is 
        functional,  the  HSL  REPORT  - FORM I.   The  other  forms  are 
        currently under development.

        Selecting the HSL FORM I REPORT will display the header screen:
        ORGANICS ANALYSIS DATA SHEET                   EPA SAMPLE NUMBER
        QUAN FILENAME:...............                    .............
        Lab Name:.........................   Contract:...........
        Lab Code:.......  Case No:......  SAS No:.......  SDG:......
        Matrix: (soil/water) ......       Lab Sample ID:.............
        Sample wt/vol:..... (g/ml)....    Lab File ID:...........
        Level:(low/med)......             Date Received:........
        % Moisture: not dec.... dec....   Date Extracted:........
        Extraction:(SepF/Cont/Sonc)....   Date Analysed:........
        GPC Cleanup:(Y/N)...  pH:.....    CONC UNITS: .....
        Column:(pack/cap)......           (ug/l or ug/Kg)
        Dilution Factor:  Sample:........ Surrogates:........

        If  you have conpleted the EPA HEADER in the configuration  menu, 
        then  the  lab name, contract, lab code, case no., sas  no.,  sdg 
        no., level, extraction, GPC and column will be filled in from the 
        file  information.   Otherwise  you  will  need  to  supply   the 
        information.  Hitting return will accept any existing data.  Some 
        items (matrix, sample (g/ml), level, extraction, GCP, column  and 
        conc  units) have specific required entries.  To speed  entry  in 
        these  fields,  it is only necessary to enter  one  letter.   The 
        accepted letters are:

        FIELD             LETTER         DISPLAY  
        --------------------------------------------
        MATRIX:             S            SOIL
                            W            WATER
        SAMPLE (g/ml):      G            G
                            M            ML
        LEVEL:              L            LOW 
                            M            MED
        EXTRACTION:         F            SEPF
                            C            CONT
                            S            SONC
        GPC:                Y            Y
                            N            N
        COLUMN:             P            PACK
                            C            CAP
        CONC UNITS:         L            UG/L
                            K            UG/KG

        Once you conplete the entries, the QUAN report is read in and the 
        EDIT  screen  is displayed.  The entry results can be  edited  at 
        this  time.  Hitting ESC will print the form.  An EPA CLP FORM  I 
        is  printed.   This matches the CLP format report in  most  ways.  
        The  few  descrepiencies are: fixed 34 compounds  per  page,  the 
        report  footer does not say 1/87 Rev and the SV page 2  does 
        not  have  the diphenylamine note.  The header form  number  says 
        only 1 instead of 1A or 1B or 1C etc.


                                MSFORMS    page 22



                               CONFIGURATION MENU
                               ------------------

        This  selects the configuration menu, which offers the  following 
        options:

                               CONFIGURE MSFORMS
                               CONFIGURE MENU
                               CONFIGURE EPA HEADER
                               RETURN TO MAIN MENU


                                CONFIGURE MSFORMS
                                -----------------


        This  allows you to set the DRIVE:\PATH specifications for  where 
        MSFORMS will look for its own files (NAMES.xxx etc.), as well  as 
        where it will look for your QUAN files.  This will eliminate  the 
        need to enter a drive specifier, as well as allow you to keep the 
        files in another subdirectory, if you so desire.

        Enter  drive specifiers as 'A:' or 'A:\' not simply  'A'.   Enter 
        path  specifiers  as 'A:\path' or 'A:\path\'  or  '\path\'.   The 
        preceding  backslash  is  required  if  no  drive  specifier   is 
        included.    The  trailing  backslash  can  be  omitted   because 
        CONFIGURE will add it if omitted.

        The report options are:

        a: PRINT 'J' VALUES - a yes/no answer is required.
           If  you  answer NO the 'ND' will be printed in  place  of  the 
           'MDL'  or  'J' values.  The form footer  information  will  be 
           changed  from  the 'U', 'J' info to read "ND =  indicates  the 
           compound  was  analysed for, but not detected at  a  detection 
           limit of 'x'".  Where 'x' is the MDL value found in the  first 
           record  (IS#1)  of  the NAMES.xxx file.  This  value  will  be 
           adjusted for dilution.

        b: U/J CUTOFF - enter percent (1 - 100).
           If  you answer Yes (a: above), then you will be asked for  the 
           'U/J'  cutoff (This step is omitted if you answered No).   The 
           U/J  cutoff  is  the percentage of the MDL value  you  wish  J 
           values  reported to.  ie: If the MDL is 10 and you  wanted  to 
           report J values down to 1, then enter 10 (10% of 10 = 1.  100% 
           would only report MDL's and no J values).

        c: NUMBER OF LINES/PAGE - a numeric value greater than zero.
           This  tells the printing routine how many LINES OF RESULTS  to 
           print per page.  

        d: TWO COLUMNS - a Yes/No answer is required.
           'Y'  will cause two columns of results to be printed per  page 
           in 15 cpi print format. 'N' will cause only a single column of 
           results to be printed per page in 10 cpi print format.


                                MSFORMS    page 23



        e: PRINT CAS # - a Yes/No answer is required.
           Turns on or off the printing of CAS#.

        f: PRINT SURROGATES - a Yes/No answer required.
           Turns  on  or  off  the  printing  of  the  surrogate  percent 
           recoveries.  If surrogate printing is turned off, the  program 
           will  continue to calculate surrogate percent  recoveries  and 
           append them to the surrogate summary file.

        g: PRINT DILUTION FACTOR - a Yes/No answer required.
           Turns  on or off the printing of the dilution factor used  for 
           analysis.   This  will  appear on the  bottom  of  the  report 
           opposite the RESULT UNITS:.

        h: PRINT % MOISTURE - a Yes/No answer required.
           Turns  on or off the printing of the % moisture  value.   This 
           will  appear on the bottom of the report  underneath  DILUTION 
           FACTOR.  A % moisture will be printed only if one is entered.

        When the screen comes up, the current settings are displayed.  In 
        most  cases hitting return without entering anything will  retain 
        the  current  setting.  The two settings  that  require  explicit 
        entry  each time, are the two Path:\directory entries.   This  is 
        because  a  null path IS a valid entry and  the  computer  cannot 
        distinguish between retaining the current entry or changing it to 
        a null.

        Last  but  not  least,  you are asked if you  want  to  save  the 
        configuration  info.  'Y' saves it to a disk file  (MSFORMS.CFG).  
        'N'  does not save it, but puts the changes into effect  for  the 
        duration  of the session.  At startup, MSFORMS will read  in  the 
        configuration info and put the values into effect.  MSFORMS  will 
        require  the  MSFORMS.CFG  file to be in the  same  directory  as 
        itself.

                                CONFIGURE PRINTER 
                                -----------------
        The printer configuration screen will allow you to configure  the 
        program  to  work with your printer.  The following  entries  are 
        required:
                             BELL
                             LINEFEED
                             FORMFEED
                             COMPRESSED (17 cpi)
                             DOUBLE WIDTH
                             UNDERLINE ON
                             UNDERLINE OFF
                             EMPHASIZED ON
                             EMPHASIZED OFF
                             10 cpi (PICA)
                             RESET






                                MSFORMS    page 24



        The  filename  MSFORMS reads in at startup is  PRINTER.CFG.   Two 
        printer  configurations  are supplied, EPSON (EPSON.PRN)  and  HP 
        laserjet   II  (HPLJET.PRN).   Copy  the  appropriate   file   to 
        PRINTER.CFG, or create your own configuration file.  The  control 
        code sequence MUST be entered as the decimal values separated  by 
        commas. NO SPACES ARE ALLOWED.  The HP laserjet does not  support 
        double  width printing - so 'NONE' is entered in this field  (see 
        file).

        When  the  screen comes up, the current  entries  are  displayed.  
        Hitting return without entering anything will retain the  current 
        values.  



                              CONFIGURE EPA HEADER
                              --------------------

        This  section  accepts data that remains fairly constant  in  the 
        header  of  the  EPA reports.  It will create a  file  for  later 
        retrieval during program execution.  The display wiil be:

        LAB NAME: .........................    CONTRACT: ...........
        LAB CODE: ....... CASE NO: ...... SAS NO: ....... SDG NO: ......
        LEVEL:(low/med) ......    VOLATILES COLUMN: (pack/cap) ........
        SEMIVOLATILES:
        EXTRACTION: (SepF/Cont/Sonc) ....   GPC CLEANUP: (Y/N) ...

        The  same  single letter entries mentioned  above,  also  applies 
        here.  There is no entry validation performed here.



























                                MSFORMS    page 25



                            COMPLETE SYSTEM OPERATION
                            -------------------------

        We  have covered MSFORMS,  now lets cover the complete  operation 
        from  getting  the  QUAN report from the  MS  to  generating  the 
        printed report.

        To start,  it  is  necessary to connect the PC  up  to  the  NOVA 
        computer and use it as the system terminal.   To do this you need 
        to  disconnect the communications cable from the back of the mass 
        spec terminal and connect it to the SERIAL port of your PC.

        Next  you will need a suitable communications  terminal  emulator 
        program  which  is  capable of capturing data  displayed  to  the 
        screen  into  a  disk file on your PC.   At the  very  least  the 
        program  should be able to emulate a DEC VT-52 or VT-100 and best 
        of all should be able to emulate a Tektronix 4010.  Although most 
        all text only type emulators should work - I have only tried  the 
        DEC and TEK emulators.

        The  communications parameters will need to be set up properly if 
        you hope to have a meaningful communication with the NOVA.

        The parameters are:
                          BAUD RATE : 9600
                          DATA BITS : 7
                          STOP BITS : 1
                          DUPLEX : HALF
                          PARITY : SPACE

        A note about parity - the WESTWARD terminal uses SPACE parity  and 
        TekTERM  supports  SPACE  parity.    However  some  communications 
        programs do  not - so experiment with what is  available.  I would 
        like to recommend a program that is in the public domain.   It  is 
        called  TekTERM  and it is a DEC VT-100 emulator with a  tektronix 
        4010  emulator  built in.   This program is  outstanding.   It  is 
        incredibly  easy to use (the 'manual' is one  page),  offers  high 
        resolution text (VT-100 mode) and best of all, complete tektronics 
        4010 emulation WITH FULL GRAPHICS!!!  The PC display does not have 
        the resolution of the tektronix,  but all the information is there 
        - highly readable.   In addition,  the cross-hairs work perfectly.  
        You can display CHRO,  use the cross-hairs to select a scan and go 
        into SPEC and look at the spectra.  It's all there.

        The  program  is  in the public domain and  available  from  user 
        groups. It is disk # 441 from PC-SIG (1030 E. Duane Ave. Suite D,
        Sunnyvale,  Ca 94086 @ $6 + 6.5% sales tax in Ca.  each).  I will 
        also  be  happy to provide the program free to all  who  register 
        MSFORMS.

        Since  there are many communications programs that you could use, 
        I cannot even begin to give detailed instructions as to how to go 
        about  downloading  a  QUAN  report  that  would  be  meaningful.  
        Therefore  my discussion will use the TekTERM  program  mentioned 
        above.


                                MSFORMS    page 26



        Assuming  the  PC has been properly connected to  the  NOVA,  the 
        TekTERM program is started by entering TT at the DOS prompt.  The 
        opening screen displays with the four possible commands listed at 
        the  bottom.   ALT-L will ask for the configuration file (4600 in 
        my case),  then ALT-C will connect you (put you on line with  the 
        NOVA).   If  you do not get the MSDS prompt(>) or IDOS  prompt(+) 
        right  away,  press return.   If that does not bring it up  check 
        your  communications  parameters.   (Make sure your COM  port  is 
        properly  assigned  in both the program and in the computer  - no 
        conflicts.)

        Assuming we have a prompt,  you will need to be in MSDS.  To list 
        a QUAN report on the screen you would type QUAN <filename>.  This 
        will display the requested QUAN report.   However this will  also 
        pause after each page and wait for a RETURN before displaying the 
        next  page.   This is fine on the screen,  but we want to capture 
        the displayed QUAN report to a disk file so it would be nice  not 
        to  have  to  keep  pressing  return.   I  have  two  very  short 
        procedures on my MS to handle VOA and SVO QUAN reports.

        They are:
                  DUMPVO.PR = QUAN $(D;;;;E
                  DUMPBN.PR = QUAN $(D;;;;G2;;;E

        These  will  display  the  QUAN reports without  having  to  keep 
        entering RETURNS.

        Back  at our display we have the MSDS prompt (>) and we  wish  to 
        capture the QUAN report for file 86M1BN0245.

        1)  Type DUMPBN 86M1BN0245  - do NOT hit return yet.

        2)  Press F4 - this starts the capture routine.
                     - a  prompt will appear asking for the name to  give 
                       the captured file.
                     - enter   QUAN245.BN   (remember   the   file   name 
                       restrictions). 
                     - press RETURN

        3)   Now  you are back at the MSDS display with the cursor  under 
        the captured filename prompt. 
             NOW press RETURN.

        4)  After a brief delay,  the QUAN report will scroll by.   There 
        should  be  intermittent  disk  activity as the  QUAN  report  is 
        written to disk.

        5)  Once it is finished and you have the MSDS prompt back - press 
        F4 again (this closes the captured file).

        That's all there is to it.   The captured file is now ready to be 
        processed  by  MSFORMS.   It  shouldn't  take much  to  see  that 
        downloading a lot of files can be automated somewhat by using  an 
        MSDS procedure driven by a name list.



                                MSFORMS    page 27



                                   FINAL NOTES
                                   ___________


        The  captured files can be processed without further manipulation 
        by MSFORMS.   As I mentioned earlier,  MSFORMS provides a results 
        editor for the analyst to correct false hits,  etc.  If the BATCH 
        mode  is  employed,  this  results editor is  bypassed  to  allow 
        multiple files to be processed unattended.  If it is necessary to 
        edit any of the files to be processed in BATCH mode then an ASCII 
        text editor will be required.  WORDSTAR(tm) when used in it's non 
        document  mode  is  an  excellent  choice.   Points  to  remember 
        regardless  of which editor is used.   The position  (column)  is 
        important, so be sure to overwrite what is there - not insert.

        Since  the position of compounds in the QUAN list MUST match  the 
        positions  of  compounds  in  the  NAMES name  list  it  will  be 
        necessary  to reposition any compounds to their correct  position 
        in  the  list if they are added after the QUAN  report  has  been 
        created.

        I achieve this (very infrequently - if your library lists are set 
        up properly)  by setting $8 to a shortened filename.  Then append 
        the missed compounds to this list.  When all the missed compounds 
        have been found, a procedure similar to the following will insert 
        the compound into the correct place.

                   XYZ.PR = EDQL 86M1VO0281,DEC(-4,42;W;E
                            EDQL 281,DEC(A;E
                            EDQL 86M1VO0281,DEC(-1,4;A;E
                            EDQL DEC,86M1VO0281
                Then review it and W;E if its correct.

        Newer  versions of Finnigan software allow sorting the quan  list 
        by library number - this is much faster than the method above!!!

        Lastly,  the  name assigned to the captured file.   In my lab the 
        GC/MS runs are assigned filenames like:  86M1BN0245
                - the first two characters (86) signify the year.
                - the second two characters (M1) the instrument number.
                - the third two characters (BN) the analysis type.
                - the last four characters (0245) a sequential number
                  assigned at run time.
        All  of  that will not fit into a DOS filename.   So it  must  be 
        concatenated  into something meaningful within the limits of  DOS 
        (8 characters).  Remember I limit your choice of extension to two 
        letters.

        The  maximum number of entries currently supported (at  least  on 
        the edit screen {2 screens}) is 160.  Raw result values up to  (8 
        digits)  will be correctly parsed.   Values larger than that will 
        be truncated on the left.





                                MSFORMS    page 28



                                     FINALLY
                                     -------


        This program began in July  of  1986  as  a  programming exercise 
        I set myself.  First I discovered how easy it was to connect a PC 
        to  the  mass  spec,  then  I wanted to find out  what  would  be 
        involved in processing a captured QUAN file.   Therein began  the 
        start  of this program.   As I proceeded with my project it  grew 
        bit by bit until it reached its present form.   I use it daily in 
        my laboratory, and it has increased my productivity considerably.  
        I no longer need spend hours processing yesterdays data.   I  can 
        now  complete  the data in about half the time,  and  with  fewer 
        errors.  I decided to distribute the program as I felt other labs 
        could make use of it also.

        However,  the  future of the program depends on you the end user.  
        User   support   through  registration  will   assure   continued 
        development  and phone support (but only for  registered  users).  
        Your   comments   and  suggestions  are  not  only  welcome   but 
        encouraged.   Please let me know what you like about the program, 
        and what you dislike (with suggestions for improvement,  please).  
        Let me know what you would like to see added in future  versions.  
        If  a  sufficient number of people request a  particular  change, 
        then  I will do my best to implement it.   All other  suggestions 
        will be considered, and implemented where feasible.

        BUGS!!!
                  Although  I have been using this program in my own  lab 
                  for a while now and even though I have done my best  to 
                  detect  and eliminate these pesky creatures,  I am sure 
                  some  of you will manage to find some.   Please let  me 
                  know if you do.   I also need to know what produced the 
                  bug and what it did.   I'll do my best to fix any  bugs 
                  in a timely manner.

        What am I looking at doing in future revisions?  

        1)  Non dependent positions of the compounds in the QUAN report.
            Probably through the use of a code that would have to be in 
            your library compound name - ie: the first four characters.
            Now you know what that CODE entry in NAMES is leading up to!
            Comments?

        2)  Another module to generate QC SAMPLE reports.

        3)  Support for the CAS # on the printed report. (CLP forms)
                     **** completed March 1988 ****

        4)  Automatic  page  breaks  if  you have  more  than  about  70 
            reportable compounds.  **** completed June 1988  ****
            *****  user definable page breaks also *****

        5)  Builtin terminal emulator.



                                MSFORMS    page 29



                                 TECHNICAL NOTES
                                 ---------------



        1:   FILE CHECKING

             QuickBASIC's  error handling is terrible.  Unfortunately  it 
             has  deteriorated  with QB4, rather than  improving.   As  a 
             result of this, I have written a file checking routine  that 
             checks  for  the  presence  (existance) of  a  file  in  the 
             specified  DRIVE:\path,  immediately  after  you  enter  the 
             filename.  If the file does not exist, the error is reported 
             and  you  are asked to reinput the filename.   In  addition, 
             certain  critical  MSFORMS files are  also  checked.   Their 
             absence  will  usually abort the  procedure  (reporting  the 
             error  and  the missing filename to you  first).   The  file 
             checking  is fairly transparant with a hard disk, but  quite 
             noticable if you are using floppies.

        2:   MSFORMS is written in QuickBASIC and requires version 4.

             The screens and most fielded input is written in assembler.

             The windowing routines were written in assembler in previous 
             versions.   From version 2.10 on, the windowing  routine  is 
             written  in  C, as is the file checking procedure  and  some 
             fielded  input  and  all function key  input.   Microsoft  C 
             version  5  is  required for linking  (MEDIUM  memory  model 
             library).

             Because  of  the requirement of the C library,  I  will  not 
             automatically be supplying the source code.  Instead, I have 
             included a place on the registration form for requesting it.
             ONLY the QuickBASIC source code will be supplied.  The  rest 
             (the  assembler  and  C  procedures)  will  be  supplied  as 
             linkable  libraries.   However in order  to  recomplile  the 
             program you will have to have the following:

                          Microsoft QuickBASIC 4
                          Microsoft C compiler version 5
                                    or QuickC
                          Microsoft LINK version 3 or later
                              (supplied with the above compilers)

             You should also have:

                          Microsoft Library Manager (LIB)
                          Microsoft MAKE
                          Microsoft CODEVIEW version 2
                            (these are supplied with MSC 5)

             Remember  one  of  the  above C  compilers  IS  REQUIRED  to 
             recompile the source code because the C MEDIUM memory  model 
             library is used. 


                                MSFORMS    page 30



                                REGISTRATION FORM
                                -----------------


        If you purchased MSFORMS directly from me in your own name,  then 
        your  copy  is  already registered and you will receive  all  the 
        benefits  of  registration.   You  do  not  need  to  send  in  a 
        registration form.

        If  you received MSFORMS some other way,  you may  register  your 
        copy  by  filling  out the following form and mailing it  to  the 
        listed  address along with $50 (shipping and handling  included).  
        You  will  promptly  receive  the  latest  version  of   MSFORMS.  
        (Request TekTERM if you wish a copy).  You will also be placed in 
        database  of  registered users so that you will automatically  be 
        notified of any MSFORMS updates.  

        Mail to:

        Declan Cowley
        801 Seminole Blvd.
        Geneva, Fl 32732


        NAME : __________________________________________

        COMPANY : _______________________________________

        ADDRESS : _______________________________________

        CITY/STATE : ____________________________________

        ZIP : _______________       PHONE : _____________________________


        WHICH VERSION OF MSFORMS DO YOU HAVE : __________________________


        WHICH MODEL MASS SPEC DO YOU USE : ______________________________


        WHAT REVISION OF INCOS DO YOU USE : _____________________________


        DO YOU WANT THE QuickBASIC SOURCE CODE     YES(  )      NO(  )


        How  did  you  first learn about MSFORMS or where did  you  first 
        obtain a copy of MSFORMS?

        __________________________________________________________________

        __________________________________________________________________

        __________________________________________________________________


                                MSFORMS    page 31



                           CUSTOM VERSIONS OF MSFORMS
                           --------------------------


        Do you like the program generally,  but certain parts do not meet 
        your  specific  needs  adequately?

        Well  if so,  then a custom version may be what you need.   I  am 
        willing to do customizing of MSFORMS if the project is reasonably 
        practical to implement.   You will need to call me and discuss it 
        on an individual basis.  Any costs involved would be based on the 
        amount of time and effort required to implement your request.

        As  the  saying goes,  'Nothing is impossible - it just  takes  a 
        little longer to implement!'

        Declan Cowley
        December 1986







































                                MSFORMS    page 32

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```



        UPDATE.DOC                                               Jan 1989

        NOTE:   INFORMATION CONTAINED IN THIS UPDATE FILE SUPERCEEDS  THE 
                MSFORMS.DOC MANUAL.


                    ******     MSFORMS V3.10 UPDATE    ******

        This release has added the long awaited and much needed  position 
        independence  of the entries in the QUAN report.  In order to  do 
        this  two things are required: 1) the USECODE must be set to  'Y' 
        in  the MSFORMS configuration file, and 2) the CODE entry in  the 
        NAMES.xx  file must be assigned.  The program now uses that  CODE 
        entry,  so  an explanation of how to set it up  correctly  is  in 
        order.

        If  USECODE  is set to 'N' in the configuration  file,  then  the 
        program  works  as  before.  If set to 'Y' then  the  first  four 
        characters  of the compound name in the QUAN report are read  and 
        used to match the entry with the entry in the NAMES.xx file.  The 
        two  MUST match.  If they do not, then the program  assumes  that 
        QUAN  entry is of no interst, and ignores it.  The NAMES.xx  file 
        MUST   have  the  internal  standards  first,  followed  by   the 
        surrogates,  followed  by the analyte list (this is the  same  as 
        before!).  The order of the analytes in the NAMES.xx file, is the 
        order that they will appear on the report.

        The  fact  that  the unwanted entries are  ignored  in  the  QUAN 
        report, means that now special NAMES.xx files can be set up  that 
        are only a subset of the entire QUAN report.  Example: you run  a 
        625 analysis, the TCA report contains all the BNA compounds,  but 
        you  are  asked  only to report the  acids.   Solution:  set  the 
        USECODE to 'Y', enter the QUAN filename (QUAN 5.BN) and for  NAME 
        LIST enter 'AC'.  An acids only report will be generated.

        The  main data entry screen has two new entries.  The first  I've 
        already  mentioned: The NAME LIST entry.  You will be  asked  for 
        this  ONLY  if you have USECODE set to 'Y'.  This allows  you  to 
        specify the two letter extention of the NAMES.xx file you want to 
        use.   It can be different from the two letter extention  of  the 
        QUAN file.

        The  second  new entry is PROTOCOL.  This allows you  to  specify 
        what protocol was used for analysis. IE: 624 or 8270 or  608/8080 
        etc.

        The  USECODE is NOT used for specifying different NAMES.xx  files 
        if  you are generating EPA CLP forms.  It will still be  used  to 
        match the QUAN entries with the NAMES.xx entries.  

        The  CODE is NOT used to sort the entries, only match  them  with 
        the  NAMES.xx  entries.  As I stated earlier, the  order  of  the 
        entries in the NAMES.xx file is the order they will appear in the 
        printed report.



                                   1



        The  CODE entries in the NAMES.xx file MUST match the first  FOUR 
        characters the Finnigan library name.  The match HAS TO BE EXACT.  
        Also make sure that they are UNIQUE for each entry.  You can  use 
        only  letters,  or  only  numbers  or  a  combination  of   both.  

        As  additional  demos,  I have included  QUAN7.VO  and  QUAN8.BN.  
        These  two  files contain only hits (the non hits have  been  U'd 
        out)  and  they are not in order.  I have also  included  a  file 
        NAMES.ACW to demonstrate the subset of a full BNA analysis.

        A final caveat.  The program will not handle duplicate entries in 
        the QUAN report properly.  It will use the first entry it  finds.  
        Example:   suppose  that  the last surrogate is  not  found,  you 
        manually  find it and append it to the end of the QUAN  list,  if 
        you  do not delete the first 'zero' entry for the surrogate,  the 
        program will find the first entry and stop looking.

        Also  the SPIKE program has not yet been updated to handle  using 
        the  CODE.   Consequently,  QUAN reports must  contain  the  'NOT 
        FOUND' entries for the MS/MSD report generator to work properly.

        The  MSFORMS.DOC manual states that a maximum of 160  entries  in 
        the QUAN report can be handled.  This number has been  downgraded 
        to a maximum of 120 entries with this release.



        *****************************************************************

                      ****    MSFORMS V2.80 UPDATE    ****

        This release fixes two bugs that were present in the 2.70 release  
        - both  minor.   In addition support for EPA CLP format forms has 
        started. This release only supports FORM I.  Future releases will  
        add additional forms.  The menus reflect the additions.  

        Here then, is an explanation of the new additions:

        Menu  item 4, EPA CLP REPORTS MENU.  This will display a menu  of   
        EPA  CLP  forms.   At  this  release  only  the  first  entry  is   
        functional,  the  HSL  REPORT  - FORM I.   The  other  forms  are   
        currently under development.















                                   2



        Selecting the HSL FORM I REPORT will display the header screen:

        ORGANICS ANALYSIS DATA SHEET                   EPA SAMPLE NUMBER
        QUAN FILENAME:...............                    .............
        Lab Name:.........................   Contract:...........
        Lab Code:.......  Case No:......  SAS No:.......  SDG:......
        Matrix: (soil/water) ......       Lab Sample ID:.............
        Sample wt/vol:..... (g/ml)....    Lab File ID:...........
        Level:(low/med)......             Date Received:........
        % Moisture: not dec.... dec....   Date Extracted:........
        Extraction:(SepF/Cont/Sonc)....   Date Analysed:........
        GPC Cleanup:(Y/N)...  pH:.....    CONC UNITS: .....
        Column:(pack/cap)......           (ug/l or ug/Kg)
        Dilution Factor:  Sample:........ Surrogates:........

        If  you have conpleted the EPA HEADER in the configuration  menu,  
        then  the  lab name, contract, lab code, case no., sas  no.,  sdg  
        no., level, extraction, GPC and column will be filled in from the  
        file  information.   Otherwise  you  will  need  to  supply   the  
        information.  Hitting return will accept any existing data.  Some  
        items (matrix, sample (g/ml), level, extraction, GCP, column  and  
        conc  units) have specific required entries.  To speed  entry  in  
        these  fields,  it is only necessary to enter  one  letter.   The  
        accepted letters are:

                FIELD             LETTER         DISPLAY  
                --------------------------------------------
                MATRIX:             S            SOIL
                                    W            WATER
                SAMPLE (g/ml):      G            G
                                    M            ML
                LEVEL:              L            LOW 
                                    M            MED
                EXTRACTION:         F            SEPF
                                    C            CONT
                                    S            SONC
                GPC:                Y            Y
                                    N            N
                COLUMN:             P            PACK
                                    C            CAP
                CONC UNITS:         L            UG/L
                                    K            UG/KG

        Once you conplete the entries, the QUAN report is read in and the  
        EDIT  screen  is displayed.  The entry results can be  edited  at  
        this  time.  Hitting ESC will print the form.  An EPA CLP FORM  I  
        is  printed.   This matches the CLP format report in  most  ways.   
        The  few  descrepiencies are: fixed 34 compounds  per  page,  the  
        report  footer does not say 1/87 Rev and the SV page 2  does  not  
        have   the  diphenylamine note.  The header  form   number   says  
        only 1 instead of 1A or 1B or 1C etc.






                                   3



                              CONFIGURE EPA HEADER
                              --------------------

        This  section  accepts data that remains fairly constant  in  the  
        header  of  the  EPA reports.  It will create a  file  for  later  
        retrieval during program execution.  The display wiil be:

        LAB NAME: .........................    CONTRACT: ...........
        LAB CODE: ....... CASE NO: ...... SAS NO: ....... SDG NO: ......
        LEVEL:(low/med) ......    VOLATILES COLUMN: (pack/cap) ........
        SEMIVOLATILES:
        EXTRACTION: (SepF/Cont/Sonc) ....   GPC CLEANUP: (Y/N) ...

        The  same  single letter entries mentioned  above,  also  applies  
        here.  There is no entry validation performed here.




                              *********************


        Finally,  an  addition  (improvement ??)  in  the  reporting   of 
        surrogate  summaries.   Currently,  when  you  print a  surrogate 
        summary report, the SURRHOLD file is archived in the form  of  an 
        SR999999 file.  Now, in addition to archiving the SURRHOLD   file 
        an  additional  file  is  created  -  SRxx9999.WKS.   As the  WKS  
        extention signifies, this file is a LOTUS 123 worksheet file  and 
        can be read by any version of LOTUS 123 from version 1.0 on.  The 
        four digits  in  the  SRxx9999  name correspond to the last  four 
        digits in the SR999999 name.    If your QA/QC officer uses  LOTUS 
        for control charting your surrogate results, this should make  it 
        a lot easier. 



        Declan                                                   Dec 88



        NOTE:  This program has not been tested with the INCOS 50.  If
               you have an INCOS 50 and this program does not parse the
               QUAN report correctly, I would appreciate it very much 
               if you could send me some ASCII files of the INCOS 50
               QUAN reports.  Then I could work on the parser.

               Thank-you.










                                   4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1453

     Volume in drive A has no label
     Directory of A:\

    FILE1453 TXT       577   6-20-89   8:39a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386   6-20-89   8:39a
    MANUAL   BAT       147   3-02-89  10:00a
    MSFORMS  DOC     78336   1-15-89  10:19p
    UPDATE   DOC     10752   1-22-89   6:57p
            6 file(s)      90236 bytes
                           68608 bytes free
