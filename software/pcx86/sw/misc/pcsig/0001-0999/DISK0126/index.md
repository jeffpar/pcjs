---
layout: page
title: "PC-SIG Diskette Library (Disk #126)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0126/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0126"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBASE II PROGRAMS"

    Here are seven routines that will enhance your overall business use of
    dBASE II. Included are mini-programs for such tasks as: form letter
    generator, mailing label manager, a back-up routine, a library
    routine, a state-zip code checker, and a conversion program.
    
    System Requirements: dBASEII software.
    
    How to Start:  Copy the programs marked *.prg to your DBASE II disk,
    then from the DOS prompt enter TYPE DOC.TXT for instructions on how to
    run the programs from inside DBASE II.
    
    Suggested Registration:  $10.00 per
    
    File Descriptions:
    
    BACKUP   PRG  dBASE II backup routine
    STATEX   NDX  dBASE II state & zipcode checker
    SUPERBAK PRG  dBASE II backup routine
    STATEZIP PRG  Part of dBASE II state & zipcode checker
    STATEZIP DBF  Part of dBASE II state & zipcode checker
    -------- ---  dBASE II form letter generator
    DOC      TXT  Documentation
    MAIL     DBF  Part of dBASE II form letter generator
    MAIL     PRG  dBASE II form letter generator
    MAILLAB  PRG  Part of dBASE II form letter generator
    MAILINFO PRG  Part of dBASE II form letter generator
    MAILFMT  FMT  Part of dBASE II form letter generator
    MAILENTR PRG  Part of dBASE II form letter generator
    MAILLTTR PRG  Part of dBASE II form letter generator
    MIS      DBF  Part of dBASE II form letter generator
    PRINT    TXT  Part of dBASE II form letter generator
    ML2      PRG  dBASE II mailing label manager
    -------- ---  dBASE II mailing label manager
    ML2      DOC  Documentation for dBASE II mailing label manager
    *        PRG  dBASE II library routine (16 files)
    MLABEL5  PRG  Part of dBASE II mailing label manager
    ML2*     PRG  Mailing label manager program files (16)
    ML2      DBF  Part of dBASE II mailing label manager
    ???      NDX  Index files used by programs
    ???      DBF  Database files used by programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #126, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ADDSUB  .PRG         CRC = 62 5D

--> FILE:  BACKUP  .PRG         CRC = A9 55

--> FILE:  BLANK   .PRG         CRC = C2 79

--> FILE:  ENTER   .PRG         CRC = 87 8A

--> FILE:  GUIDE   .PRG         CRC = D1 06

--> FILE:  MAIL    .DBF         CRC = A9 01

--> FILE:  MAIL    .PRG         CRC = 69 14

--> FILE:  MAILENTR.PRG         CRC = 02 2D

--> FILE:  MAILFMT .FMT         CRC = 13 7E

--> FILE:  MAILINFO.PRG         CRC = 48 6D

--> FILE:  MAILLAB .PRG         CRC = C2 A1

--> FILE:  MAILLTTR.PRG         CRC = 46 41

--> FILE:  MIS     .DBF         CRC = 26 D8

--> FILE:  ML2     .DBF         CRC = D6 3D

--> FILE:  ML2     .DOC         CRC = 46 4D

--> FILE:  ML2     .PRG         CRC = AF A8

--> FILE:  ML2A    .PRG         CRC = 69 FC

--> FILE:  ML2EDIT .PRG         CRC = 2E B6

--> FILE:  ML2ENTR .PRG         CRC = F6 98

--> FILE:  ML2INFO .PRG         CRC = BD 4A

--> FILE:  ML2LAB  .PRG         CRC = 96 B1

--> FILE:  ML2LAB1 .PRG         CRC = 92 16

--> FILE:  ML2LAB2 .PRG         CRC = 59 1F

--> FILE:  ML2LAB4 .PRG         CRC = 6F D6

--> FILE:  ML2LIST .PRG         CRC = ED 84

--> FILE:  ML2LST1 .PRG         CRC = 7A 2E

--> FILE:  ML2LTTR .PRG         CRC = 82 C4

--> FILE:  ML2MULTI.PRG         CRC = 4D 06

--> FILE:  ML2REC  .PRG         CRC = 7A BA

--> FILE:  ML2SORT .PRG         CRC = 81 7A

--> FILE:  ML2ZIPCT.PRG         CRC = D1 17

--> FILE:  MLABEL5 .PRG         CRC = 70 66

--> FILE:  NAMEBRK .PRG         CRC = A0 A4

--> FILE:  PRINT   .TXT         CRC = 11 70

--> FILE:  REFDEX  .NDX         CRC = 7C 2C

--> FILE:  REFERALS.DBF         CRC = 92 F4

--> FILE:  REFS    .PRG         CRC = E5 1E

--> FILE:  SEARCH  .PRG         CRC = 2F 56

--> FILE:  SHOWFIL .PRG         CRC = 80 E2

--> FILE:  SOME    .DBF         CRC = C0 6B

--> FILE:  SORTED  .DBF         CRC = 12 D1

--> FILE:  STATEX  .NDX         CRC = 93 1D

--> FILE:  STATEZIP.DBF         CRC = 6D C2

--> FILE:  STATEZIP.PRG         CRC = 00 9B

--> FILE:  STRINGS .DBF         CRC = CF B2

--> FILE:  SUBDEX  .NDX         CRC = AC B5

--> FILE:  SUBJECTS.DBF         CRC = D1 BD

--> FILE:  SUBS    .PRG         CRC = FE 46

--> FILE:  SUPERBAK.PRG         CRC = AD 6A

--> FILE:  DOC     .TXT         CRC = 88 6D

--> FILE:  XXX     .            CRC = 41 4C

--> FILE:  XXX     .BAK         CRC = C3 0C

 ---------------------> SUM OF CRCS = F8 2A

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DOC.TXT

{% raw %}
```
Item......................Instructions/Comments........................

Form letter generator     Enter "DO MAIL" at dBASE II dot prompt
Mailing label manager     Enter "DO ML2 at dBASE II dot prompt
Back-up routine           Enter "DO SUPERBAK" at dBASE II dot prompt
Library Routine           Enter "DO GUIDE" at dBASE II dot prompt
State-Zip code checker    Enter "DO STATEZIP" at dBASE II dot prompt
Conversion program        Enter "DO CONVERT" at dBASE II dot prompt
Back-up program           Enter "DO BACKUP" at dBASE II dot prompt
```
{% endraw %}

## PRINT.TXT

{% raw %}
```

                                                      Your Company 
                                                      8080 Micro St. 
                                                      Silicon, CA 93002 
                                                      (213) 555-1234 
                                                        
John J. Jones                   
Micro Enterprises              
1234 Chip Road                 
Silicon, CA 90002               


Dear Mr. Jones        

This  is  the body of a form letter.  It was first written with  a  word 
processor and then modified to become a command file.  The modifications 
are:  placement  of  question  marks at the beginning of each  line  and 
enclosing  the text in single quotes or square brackets.  In  this  way, 
each  line of text is written to the ALTERNATE file by means of the  SET 
ALTERNATE commands in MAILLTTR.CMD (which calls this command file). 

The text of the letter can be altered based on the database data fields. 
For instance,  if the content of the letter should change for  different 
states,  then  this condition can be checked and the appropriate  action 
can be taken. 


                                              Yours truly 




                                              Mike R. O. Chip 

Example: 

California residents add 6% sales tax 
.pa 
                                                      Your Company 
                                                      8080 Micro St. 
                                                      Silicon, CA 93002 
                                                      (213) 555-1234 
                                                        
John J. Jones                   
Micro Enterprises              
1234 Chip Road                 
Silicon, CA 90002               


Dear Mr. Jones        

This  is  the body of a form letter.  It was first written with  a  word 
processor and then modified to become a command file.  The modifications 
are:  placement  of  question  marks at the beginning of each  line  and 
enclosing  the text in single quotes or square brackets.  In  this  way, 
each  line of text is written to the ALTERNATE file by means of the  SET 
ALTERNATE commands in MAILLTTR.CMD (which calls this command file). 

The text of the letter can be altered based on the database data fields. 
For instance,  if the content of the letter should change for  different 
states,  then  this condition can be checked and the appropriate  action 
can be taken. 


                                              Yours truly 




                                              Mike R. O. Chip 

Example: 

California residents add 6% sales tax 
.pa 
                                                      Your Company 
                                                      8080 Micro St. 
                                                      Silicon, CA 93002 
                                                      (213) 555-1234 
                                                        
Thomas Brown                    
1234 West Winchester Dr.       
Boston, MA 10024                


Dear Mr. Brown        

This  is  the body of a form letter.  It was first written with  a  word 
processor and then modified to become a command file.  The modifications 
are:  placement  of  question  marks at the beginning of each  line  and 
enclosing  the text in single quotes or square brackets.  In  this  way, 
each  line of text is written to the ALTERNATE file by means of the  SET 
ALTERNATE commands in MAILLTTR.CMD (which calls this command file). 

The text of the letter can be altered based on the database data fields. 
For instance,  if the content of the letter should change for  different 
states,  then  this condition can be checked and the appropriate  action 
can be taken. 


                                              Yours truly 




                                              Mike R. O. Chip 

Example: 

.pa 
                                                      Your Company 
                                                      8080 Micro St. 
                                                      Silicon, CA 93002 
                                                      (213) 555-1234 
                                                        
Joseph W. Pixler                
1125 Singing Meadow Rd         
Diamond Bar, CA 91710           


Dear Mr. Pixler       

This  is  the body of a form letter.  It was first written with  a  word 
processor and then modified to become a command file.  The modifications 
are:  placement  of  question  marks at the beginning of each  line  and 
enclosing  the text in single quotes or square brackets.  In  this  way, 
each  line of text is written to the ALTERNATE file by means of the  SET 
ALTERNATE commands in MAILLTTR.CMD (which calls this command file). 

The text of the letter can be altered based on the database data fields. 
For instance,  if the content of the letter should change for  different 
states,  then  this condition can be checked and the appropriate  action 
can be taken. 


                                              Yours truly 




                                              Mike R. O. Chip 

Example: 

California residents add 6% sales tax 
.pa 
                                                      Your Company 
                                                      8080 Micro St. 
                                                      Silicon, CA 93002 
                                                      (213) 555-1234 
                                                        
Josephine Franklin              
12 Country Club Dr             
Cucamonga, CA 9l733             


Dear Mrs. Franklin     

This  is  the body of a form letter.  It was first written with  a  word 
processor and then modified to become a command file.  The modifications 
are:  placement  of  question  marks at the beginning of each  line  and 
enclosing  the text in single quotes or square brackets.  In  this  way, 
each  line of text is written to the ALTERNATE file by means of the  SET 
ALTERNATE commands in MAILLTTR.CMD (which calls this command file). 

The text of the letter can be altered based on the database data fields. 
For instance,  if the content of the letter should change for  different 
states,  then  this condition can be checked and the appropriate  action 
can be taken. 


                                              Yours truly 





. DO MAIL

Enter date as mm/dd/yy:




          Form Letter Writing System 


          0 - EXIT 
          1 - Enter new entries 
          2 - Make Labels 
          3 - Write Letters 

 enter desired action 
WAITING 
. 

. 
. 

. 

. 

. QUIT

*** END RUN     dBASE II     ***


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0126

     Volume in drive A is DISK0126
     Directory of A:\

    ADDSUB   PRG      1024
    BACKUP   PRG      2048
    BLANK    PRG      9728
    CRC      TXT      3003  11-09-84   3:06p
    CRCK4    COM      1536  10-21-82   7:54p
    DOC      TXT       640  12-27-83   5:36p
    ENTER    PRG      1920
    GUIDE    PRG      2560
    MAIL     DBF      2048
    MAIL     PRG      1536
    MAILENTR PRG      1024
    MAILFMT  FMT       640
    MAILINFO PRG      1152
    MAILLAB  PRG       896
    MAILLTTR PRG      1664
    MIS      DBF      1024
    ML2      DBF      1024
    ML2      DOC      1152
    ML2      PRG      1152
    ML2A     PRG       256
    ML2EDIT  PRG       896
    ML2ENTR  PRG       768
    ML2INFO  PRG       384
    ML2LAB   PRG      3584
    ML2LAB1  PRG       256
    ML2LAB2  PRG       256
    ML2LAB4  PRG       384
    ML2LIST  PRG      1920
    ML2LST1  PRG       256
    ML2LTTR  PRG       896
    ML2MULTI PRG      1792
    ML2REC   PRG       256
    ML2SORT  PRG       896
    ML2ZIPCT PRG       768
    MLABEL5  PRG      1536
    NAMEBRK  PRG      2688
    PRINT    TXT      7168
    REFDEX   NDX      1024
    REFERALS DBF      1024
    REFS     PRG       512
    SEARCH   PRG      1408
    SHOWFIL  PRG       384
    SOME     DBF      1024
    SORTED   DBF      1024
    STATEX   NDX      1024
    STATEZIP DBF      1024
    STATEZIP PRG      3328
    STRINGS  DBF      1024
    SUBDEX   NDX      1024
    SUBJECTS DBF      1024
    SUBS     PRG       384
    SUPERBAK PRG      2944
    XXX               2944   1-15-84  10:54p
    XXX      BAK      3072  12-27-83   5:38p
           54 file(s)      84923 bytes
                           68608 bytes free
