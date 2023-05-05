---
layout: page
title: "PC-SIG Diskette Library (Disk #40)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0040/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0040"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK MARKET ANALYSER"

    Stock Market Analysis Program for creating, analyzing and plotting
    security data files.  Stock market analyzer is a stock tracking
    program that enables the user to update the history files of a
    particular stock, either with current activity or a past record.  It
    then displays the data in graphic form so the user may analyze the
    stock trend.  Stock market analyzer comes complete with routines to
    plot the compiled stock data.
    
    How to Start: To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult MAKSTKFL.DOC for program
    documentation.
    
    File Descriptions:
    
    PLTSTKFL DOC  Documentation for PLTSTKFL.BAS
    PLTSTKFL BAS  Main program to print stock data
    MAKSTKFL DOC  Documentation for MAKSTKFL.BAS
    MAKSTKFL BAS  Main program to create stock data file
    SCHWABCM BAS  Part of stock market program
    *        NYS  Stock data file (14 files)
    PUTNAMHL MUT  Stock data file
    INDUST   DJA  Stock data file
    KELLYSER OTC  Stock data file
    COMSHARE OTC  Stock data file
    TRANSFER BAT  Backup batch file
    PLTSEQFL ALL  Lists all plot files
    UPDSTKFL ALL  Lists all securities files
    MONEYMKT INT  Stock data file
    GEMAR70  OPT  Stock data file
    UPDSTKFL DAT  Lists all active files
    PLTSEQFL DAT  List of files to be automatically plotted
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #40, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  MAKSTKFL.BAS         CRC = CE 13

--> FILE:  MAKSTKFL.DOC         CRC = C2 F9

--> FILE:  TRANSFER.BAT         CRC = 52 9B

--> FILE:  UPDSTKFL.ALL         CRC = F0 8E

--> FILE:  UPDSTKFL.DAT         CRC = F0 8E

--> FILE:  PLTSEQFL.DAT         CRC = F0 8E

--> FILE:  PLTSEQFL.ALL         CRC = F0 8E

--> FILE:  PLTSTKFL.BAS         CRC = EB C1

--> FILE:  PLTSTKFL.DOC         CRC = 0C D1

--> FILE:  MONEYMKT.INT         CRC = 00 00

--> FILE:  AELPW   .NYS         CRC = 90 6C

--> FILE:  INDUST  .DJA         CRC = EF 34

--> FILE:  FLIGTSF .NYS         CRC = A9 DA

--> FILE:  AUTODT  .NYS         CRC = F6 93

--> FILE:  DISNEY  .NYS         CRC = D5 10

--> FILE:  GANNETT .NYS         CRC = 2D 7B

--> FILE:  AMPINC  .NYS         CRC = A6 18

--> FILE:  GENEL   .NYS         CRC = 12 09

--> FILE:  BOEING  .NYS         CRC = 83 25

--> FILE:  CORNG   .NYS         CRC = 57 08

--> FILE:  PUTNAMHL.MUT         CRC = 1C BE

--> FILE:  ESKOD   .NYS         CRC = 9E E6

--> FILE:  GMOT    .NYS         CRC = 5C DF

--> FILE:  AT&T    .NYS         CRC = 8C D1

--> FILE:  DELTAA  .NYS         CRC = C0 D3

--> FILE:  DUPONT  .NYS         CRC = 23 66

--> FILE:  COMSHARE.OTC         CRC = 16 5B

--> FILE:  KELLYSER.OTC         CRC = A8 2D

--> FILE:  GEMAR70 .OPT         CRC = 0A 33

--> FILE:  SCHWABCM.BAS         CRC = 87 3F

 ---------------------> SUM OF CRCS = 2C DE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MAKSTKFL.BAS

{% raw %}
```bas
1 ' (PC)^3 Software Submission MAKSTKFL authored on January 4, 1983 by
2 '
3 ' Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
4 '
5 ' Copyright 1983 Michael Csontos
6 '
7 '  This program is made freely available non-exclusively to the Picture
8 '  City Personal Computer Programmers' Club for distribution to its members
9 '  and through software exchange to other users groups as long as credit is
10 ' given to the author and (PC)^3.
11 '
12 '
13 ' NOTE: The files MAKSTKFL.DOC, UPDSTKFL.DAT, and data files with the
14 ' extensions DJA, NYS, OTC, OPT, and MUT are associated with this program.
15 '
16 '
10000 DEFINT N:DIM GRAPH$(100)
10050 KEY OFF:CLS
10100 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT STRING$(79," ");:COLOR 7,0:LOCATE LIN,1
10150 ON ERROR GOTO 10200:OPEN "makstkfl.doc" FOR INPUT AS #1:CLOSE #1:GOTO 10250
10200 NODOC=1:RESUME 10250
10250 ON ERROR GOTO 0
10300 ON ERROR GOTO 10350:OPEN "updstkfl.dat" FOR INPUT AS #1:CLOSE #1:GOTO 10400
10350 NOUPD=1:RESUME 10400
10400 ON ERROR GOTO 0
10450 RESPMSG$="PRESS A NUMBER KEY CORRESPONDING TO YOUR SELECTION OR PRESS <Esc> TO QUIT."
10500 PRINT
10550 PRINT "Do you want to (1): insert data ahead of an existing file (earlier dates),
10600 PRINT " or            (2): add data to an existing file (starting after last date),
10650 PRINT " or            (3): start a new securities data file,"
10700 PRINT " or            (4): find start and end dates for a file,"
10750 PRINT " or            (5): print a report of a securities file,
10800 PRINT " or            (6): plot a graph on the screen of the last 24 day's price data,
10850 IF NOUPD THEN 11000
10900 PRINT " or            (7): update all files listed in UPDSTKFL with next day's data,
10950 IF NODOC THEN 11050
11000 PRINT " or            (8): read the documentation file,
11050 PRINT " or            <Esc>: to quit?"
11100 X$=INKEY$:IF X$="" THEN 11100 ELSE IF X$=CHR$(27) THEN 18300 ELSE B=VAL(X$)
11150 IF B<1 OR B>8 THEN PRINT:PRINT RESPMSG$:GOTO 11100
11200 ON B GOTO 11250,11300,11350,11400,11450,11500,11550,11600
11250 B$="INSERT DATA":GOTO 11650
11300 B$="ADD DATA":GOTO 11650
11350 B$="NEW DATA":GOTO 11650
11400 B$="DATE RANGE":GOTO 11650
11450 B$="REPORT":GOTO 11650
11500 B$="SCREEN GRAPH":GOTO 11650
11550 B$="UPDATE":GOTO 11650
11600 B$="DOCUMENTATION":GOTO 11650
11650 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT B$;:COLOR 7,0:LOCATE LIN,1
11700 ON B GOTO 11750,11750,11750,11750,11750,11750,26950,27950
11750 PRINT
11800 PRINT "Is the file for (1): Dow Jones Averages,
11850 PRINT " or             (2): New York Stock Exchange,
11900 PRINT " or             (3): Over the Counter Markets,
11950 PRINT " or             (4): Options,
12000 PRINT " or             (5): Mutual Funds,
12050 PRINT " or             <Esc>: to quit?"
12100 X$=INKEY$:IF X$="" THEN 12100 ELSE IF X$=CHR$(27) THEN 18300 ELSE C=VAL(X$)
12150 IF C<1 OR C>5 THEN PRINT:PRINT RESPMSG$:GOTO 12100
12200 ON C GOTO 12250,12300,12350,12400,12450
12250 EXT$=".DJA":GOTO 12500
12300 EXT$=".NYS":GOTO 12500
12350 EXT$=".OTC":GOTO 12500
12400 EXT$=".OPT":GOTO 12500
12450 EXT$=".MUT":GOTO 12500
12500 LIN=CSRLIN:LOCATE 25,15:COLOR 0,7:PRINT "FILE FOR " EXT$;:COLOR 7,0:LOCATE LIN,1
12550 GOSUB 22050'getfile
12600 ON B GOTO 13200,13800,14300,12700,24200,28600,12650,12650
12650 PRINT "B>6 trap #1":GOTO 13350
12700 IF NOFILE=1 THEN 13350
12750 INPUT #1, STARTDATE$
12800 FOR N=1 TO 4: INPUT #1, DUMP:NEXT N
12850 IF EOF(1) THEN 13050
12900 INPUT #1, ENDDATE$
12950 FOR N=1 TO 4: INPUT #1, DUMP:NEXT N
13000 GOTO 12850
13050 PRINT:PRINT "The first date in the file is " STARTDATE$ ","
13100 PRINT:PRINT "and the final file date is    " ENDDATE$ "."
13150 GOTO 13350
13200 IF NOFILE=1 THEN PRINT:PRINT "You cannot insert unless there is already a file on the disk.  Run the" ELSE 13400
13250 PRINT "program again making the correct selections or correct the problem with your
13300 PRINT "disk files.
13350 CLOSE:KEY ON:END
13400 INPUT#1,FIRSTDATE$
13450 CLOSE #1
13500 TEMPFILE$=FILENAME$+".OLD"
13550 PRINT:PRINT "GENERATING BACKUP FILE CALLED " TEMPFILE$ "."
13600 ON ERROR GOTO 13750:NAME FILESPEC$ AS TEMPFILE$:ON ERROR GOTO 0
13650 LIN=CSRLIN:LOCATE 25,64:COLOR 0,7:PRINT "TILL " FIRSTDATE$;:COLOR 7,0:LOCATE LIN,1
13700 GOTO 14600
13750 IF ERR=58 THEN KILL TEMPFILE$:RESUME ELSE ON ERROR GOTO 0:GOTO 13350
13800 IF NOFILE=1 THEN PRINT:PRINT "You cannot add to a file unless there is already a file on the disk.  Run the" ELSE 14000
13850 PRINT "program again making the correct selections or correct the problem with your
13900 PRINT "disk files.
13950 CLOSE:KEY ON:END
14000 IF EOF(1) THEN CLOSE #1:GOTO 14700
14050 INPUT #1,DAT$
14100 FOR N=1 TO 4
14150 INPUT #1,DUMP
14200 NEXT N
14250 GOTO 14000
14300 CLOSE #1
14350 PRINT:PRINT "To start a securities data file, enter a file name (up to eight characters, no
14400 PRINT "extension. The extension shown below will be added to identify the file.
14450 IF C=4 THEN PRINT:PRINT "NOTE: To work with the program PLTSTKFL, the last two characters of an options        data filename must be the strike price of the option.
14500 PRINT:INPUT "FILENAME"; FILENAME$
14550 GOSUB 22350 'getfile name test
14600 PRINT:PRINT "Enter starting ";
14650 GOSUB 23700' datcheck
14700 DAYSKIP$(1)="SAT.":DAYSKIP$(2)="SUN."
14750 GOSUB 19500'dattonum
14800 GOSUB 22900'makefile
14850 LIN=CSRLIN:LOCATE 25,24:COLOR 0,7:PRINT FILESPEC$;:COLOR 7,0:LOCATE LIN,1
14900 LIN=CSRLIN:LOCATE 25,39:COLOR 0,7:PRINT "EX-9's; SK-8's; RP-7's";:COLOR 7,0:LOCATE LIN,1
14950 IF B=7 THEN 15300
15000 IF B=2 THEN 15100
15050 D=D-1
15100 PRINT:PRINT "To end entries, enter 9999."
15150 PRINT "To skip a date (holiday) enter 8888."
15200 PRINT "To repeat a date (error recovery) enter 7777."
15250 PRINT "If there is no data for an entry (no trades) press <enter> to skip through.":PRINT
15300 D=D+1
15350 GOSUB 20450'datgen
15400 IF DATINC=1 THEN GOSUB 20950: GOSUB 20450
15450 IF B=1 AND ATE$=FIRSTDATE$ THEN PRINT "START OF OLD DATA!":PRINT:PRINT "...Old data is being transferred from " TEMPFILE$ " to " FILESPEC$ ".":GOTO 18350
15500 GOSUB 21350'monthnam
15550 GOSUB 19850'dayname
15600 FOR WKDY=1 TO 7:IF DAYNAME$=DAYSKIP$(WKDY) THEN 15300
15650 NEXT WKDY
15700 PRINT  DAYNAME$ ", " MONTHNAME$ " " D$ ", " Y$
15750 ON C GOTO 16350,15800,16900,17350,17700
15800 INPUT "VOLUME"; AA' -----------NYS - C=2--------------------------------
15850 GOSUB 18100:IF INT(AA)<>AA THEN BEEP:PRINT "VOLUME must be an integer!":GOTO 15800
15900 INPUT "HIGH  "; BB
15950 GOSUB 18100
16000 INPUT "LOW   "; CC
16050 GOSUB 18100:IF CC>BB THEN BEEP:PRINT "LOW is greater than HIGH!":GOTO 16000
16100 IF (CC-BB)>0.25*BB THEN BEEP:PRINT "Day's trading range is greater than 25%!"
16150 INPUT "CLOSE "; DD
16200 GOSUB 18100:IF DD>BB THEN BEEP:PRINT "CLOSE is greater than HIGH!":GOTO 16150
16250 IF DD<CC THEN BEEP:PRINT "CLOSE is less than LOW!":GOTO 16150
16300 GOTO 18050
16350 INPUT "CLOSE "; DD' -----------DJA - C=1--------------------------------
16400 GOSUB 18100
16450 INPUT "HIGH  "; BB
16500 GOSUB 18100:IF DD>BB THEN BEEP:PRINT "CLOSE is greater than HIGH!":GOTO 16450
16550 INPUT "LOW   "; CC
16600 GOSUB 18100:IF CC>BB THEN BEEP:PRINT "LOW is greater than HIGH!":GOTO 16550
16650 IF CC>DD THEN BEEP:PRINT "LOW is greater than CLOSE!":GOTO 16550
16700 IF (BB-CC)>0.25*CC THEN BEEP:PRINT "Day's trading range is greater than 25%!"
16750 INPUT "VOLUME"; AA
16800 GOSUB 18100:IF INT(AA)<>AA THEN BEEP:PRINT "VOLUME must be an integer!":GOTO 16750
16850 GOTO 18050
16900 INPUT "VOLUME"; AA' -----------OTC - C=3--------------------------------
16950 GOSUB 18100:IF INT(AA)<>AA THEN BEEP:PRINT "VOLUME must be an integer!":GOTO 16900
17000 INPUT "BID   "; BB
17050 GOSUB 18100
17100 INPUT "ASKED "; CC
17150 GOSUB 18100:IF BB>CC THEN BEEP:PRINT "BID is greater than ASKED!":GOTO 17100
17200 IF (CC-BB)>0.25*BB THEN BEEP:PRINT "Day's trading range is greater than 25%! Press <enter> to input this value, or    press any other key to reenter day's price data.":GOTO 17300
17250 GOTO 18050
17300 X$=INKEY$: IF X$="" THEN 17300 ELSE IF X$=CHR$(13) THEN 17250 ELSE 17000
17350 INPUT "CLOSE "; DD' ----------OPT - C=4---------------------------------
17400 GOSUB 18100
17450 INPUT "CALL  "; BB
17500 GOSUB 18100
17550 INPUT "PUT   "; CC
17600 GOSUB 18100
17650 GOTO 18050
17700 INPUT "NET ASSET VALUE"; BB' ----MUT - C=5------------------------------
17750 GOSUB 18100
17800 INPUT "OFFER          "; CC
17850 GOSUB 18100:IF BB>CC THEN BEEP:PRINT "NAV is greater than OFFER!":GOTO 17800
17900 IF (CC-BB)>0.25*BB THEN BEEP:PRINT "Day's trading range is greater than 25%! Press <enter> to input this value, or    press any other key to reenter day's data.":GOTO 18000
17950 GOTO 18050
18000 X$=INKEY$: IF X$="" THEN 18000 ELSE IF X$=CHR$(13) THEN 17950 ELSE 17700
18050 WRITE#1,ATE$,AA,BB,CC,DD:IF B=7 THEN CLOSE #1:GOTO 27000 ELSE 15300
18100 IF AA=9999 OR BB=9999 OR CC=9999 OR DD=9999 THEN AA=0:BB=0:CC=0:DD=0:RETURN 18300
18150 IF AA=8888 OR BB=8888 OR CC=8888 OR DD=8888 THEN AA=0:BB=0:CC=0:DD=0:RETURN 15300
18200 IF AA=7777 OR BB=7777 OR CC=7777 OR DD=7777 THEN AA=0:BB=0:CC=0:DD=0:RETURN 15700
18250 RETURN
18300 CLOSE:KEY ON:END
18350 ON ERROR GOTO 18850
18400 OPEN TEMPFILE$ FOR INPUT AS #2
18450 IF EOF(2) THEN 19300
18500 INPUT #2, DAT$
18550 Z100$=DATE$
18600 DATE$=DAT$
18650 DAT$=DATE$:DATE$=Z100$
18700 INPUT #2,AA,BB,CC,DD
18750 WRITE #1,DAT$,AA,BB,CC,DD
18800 GOTO 18450
18850 IF ERL=18350 THEN 23050
18900 IF ERL=18550 THEN PRINT:PRINT "THERE IS AN ERROR IN READING THE FILE " TEMPFILE$ ". CHECK THIS FILE WITH EDLIN." ELSE 19100
18950 PRINT "  THIS PROGRAM WILL END WITH YOUR NEW DATA IN " FILESPEC$ " AND YOUR OLD FILE "
19000 PRINT "  IN " TEMPFILE$ "."
19050 CLOSE #1, #2: KEY ON:ON ERROR GOTO 0:END
19100 IF ERL=17000 THEN PRINT:PRINT "THERE IS AN ERROR IN READING FROM " TEMPFILE ". YOUR NEW DATA WITH SOME OF THE" ELSE 19300
19150 PRINT "OLD DATA APPENDED WILL BE FOUND IN " FILESPEC$ ".  YOUR OLD FILE " TEMPFILE$
19200 PRINT "SHOULD BE INTACT. USE EDLIN TO CHECK IT, THEN RENAME IT AND START OVER."
19250 CLOSE #1, #2: KEY ON:ON ERROR GOTO 0:END
19300 PRINT:PRINT "YOUR NEW DATA WITH THE OLD DATA APPENDED WILL BE FOUND IN " FILESPEC$
19350 PRINT:PRINT "CHECK THIS FILE WITH EDLIN. THE FILE " TEMPFILE$ " WILL BE WRITTEN OVER "
19400 PRINT:PRINT "ONLY WHEN YOU DO ANOTHER INSERT OPERATION ON " FILENAME$ "."
19450 CLOSE #1, #2: KEY ON:ON ERROR GOTO 0:END
19500 Y=VAL(RIGHT$(DAT$,4))'                        --
19550 D=VAL(MID$(DAT$,4,2))'   dat$ as mm-dd-yyyy     |  subroutine
19600 M=VAL(LEFT$(DAT$, 2))'    to  M,D,Y,M$,D$,Y$    |     to
19650 M2030=M+100:D2030=D+100'                        |  decompose
19700 M$=STR$(M2030):D$=STR$(D2030):Y$=STR$(Y)'       |    dates
19750 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'|    into
19800 RETURN'                                       --  strings & numbers
19850 M3000=M:Y3000=Y'
19900 IF M3000>2 THEN 20000'
19950 M3000=M3000+12:Y3000=Y3000-1'
20000 N=2+D+M3000*2+Y3000+INT(Y3000/4)-INT(Y3000/100)+INT(Y3000/400)+INT(0.6*(M3000+1))'
20050 ON 1+INT(1/2+(N/7-INT(N/7))*7) GOTO 20100,20150,20200,20250,20300,20350,20400'
20100 DAYNAME$="SAT.":RETURN'
20150 DAYNAME$="SUN.":RETURN'         Subroutine to give day of week
20200 DAYNAME$="MON.":RETURN'
20250 DAYNAME$="TUE.":RETURN'                     from
20300 DAYNAME$="WED.":RETURN'
20350 DAYNAME$="THU.":RETURN'            integers M, D, & Y.
20400 DAYNAME$="FRI.":RETURN'
20450 DATINC=0:Z4000$=DATE$'                                  --
20500 M$=STR$(M+100):D$=STR$(D+100):Y$=STR$(Y+10000)'           | subroutine
20550 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'          |    to
20600 ATE$=M$+"-"+D$+"-"+Y$'                                    |   form
20650 ON ERROR GOTO 20850'   Converts M,D, & Y integers          |    and
20700 DATE$=ATE$'           into ATE$ in form mm-dd-yyyy        |   check
20750 ON ERROR GOTO 0'      and M$,D$, & Y$ as mm, dd, & yyyy.  |     a
20800 DATE$=Z4000$:RETURN'  If invalid date, returns DATINC = 1.| standard
20850 IF ERR=5 THEN DATINC=1 ELSE PRINT "DATGEN TROUBLE":STOP'  |date format
20900 RESUME 20750'                                            --
20950 D=1:M=M+1:YEARLIM=0'                                 --
21000 IF M=13 THEN 21100'     Uses M, D, & Y.                 | subroutine
21050 RETURN'                Assumes end of old month.       |    for
21100 M=1:Y=Y+1'             Returns D=1,M+1,Y+1 as needed.  | incrementing
21150 IF Y>=2099 THEN 21250'  If Y exceeds 2099,              |    a
21200 RETURN'                      returns: YEARLIM = 1      |   date
21250 PRINT "Cannot go beyond year 2099"'                    |    by
21300 YEARLIM=1:RETURN'                                    --   one month
21350 ON M GOTO 21400,21450,21500,21550,21600,21650,21700,21750,21800,21850,21900,21950
21400 MONTHNAME$="JAN.":RETURN'
21450 MONTHNAME$="FEB.":RETURN'
21500 MONTHNAME$="MAR.":RETURN'
21550 MONTHNAME$="APR.":RETURN'            Subroutine that returns
21600 MONTHNAME$="MAY.":RETURN'
21650 MONTHNAME$="JUN.":RETURN'                   a name for
21700 MONTHNAME$="JUL.":RETURN'
21750 MONTHNAME$="AUG.":RETURN'               the month numbered M.
21800 MONTHNAME$="SEP.":RETURN'
21850 MONTHNAME$="0CT.":RETURN'
21900 MONTHNAME$="NOV.":RETURN'
21950 MONTHNAME$="DEC.":RETURN'
22000 '-----------GETFILE------subroutine to specify a file for use----------
22050 ON ERROR GOTO 22550:NOFILE=0
22100 PRINT:PRINT "The following files are on the disk.":FILES "*"+EXT$
22150 ON ERROR GOTO 0
22200 IF B=3 THEN  RETURN 14500
22250 PRINT:PRINT "What is the filename of the one you want to use":INPUT "(if none type NONE)";FILENAME$
22300 IF FILENAME$="NONE" OR FILENAME$="none" OR FILENAME$="None" THEN NOFILE=1:RETURN
22350 FILESPEC$=FILENAME$+EXT$
22400 ON ERROR GOTO 22650:OPEN FILESPEC$ FOR INPUT AS #1
22450 IF B=3 THEN PRINT "There already is a file with this name on the disk. Entering data will change   it.  Press <Ctrl>+<Break> now to quit if this is a mistake.":CLOSE #1
22500 ON ERROR GOTO 0:RETURN
22550 IF ERR=53 THEN 22600 ELSE PRINT "GETFILE TROUBLE":STOP
22600 PRINT "There are no files for this security on this disk.":NOFILE=1:RESUME 22500
22650 IF ERR = 52 THEN PRINT "That is not a correct filespec, try again":RESUME 22150
22700 IF ERR = 62 THEN PRINT "Bad file data. You are trying to read from the wrong file. Try again.":RESUME 22050
22750 IF ERR = 53 THEN 22800 ELSE PRINT "GETFILE TROUBLE":STOP
22800 PRINT "The disk is clear of files by that name.":NOFILE=1:RESUME 22500
22850 '---------MAKFILE------opens a file for appending data----------------
22900 ON ERROR GOTO 23050' disk error subroutine DSKERROR
22950 OPEN FILESPEC$ FOR APPEND AS #1
23000 ON ERROR GOTO 0:RETURN
23050 IF ERR=24 THEN PRINT "No disk in drive? Device timeout.":GOTO 23600
23100 IF ERR=52 THEN PRINT "Bad file name. ";:INPUT "Try entering the complete filespec (with extension).";FILESPEC$:RESUME
23150 IF ERR=57 THEN PRINT "I/O error. Try another disk.":GOTO 23600
23200 IF ERR=61 THEN PRINT "Disk full. Try another disk.":GOTO 23600
23250 IF ERR=64 THEN PRINT "Bad file name. ";:INPUT "Try entering the complete filespec (with extension).";FILESPEC$:RESUME
23300 IF ERR=67 THEN PRINT "Too many files in directory. Try another disk to temoroarily save your data.":GOTO 23600
23350 IF ERR=68 THEN PRINT "Disk drive unavailable.":GOTO 23600
23400 IF ERR=70 THEN PRINT "You have write protected this disk!":GOTO 23600
23450 IF ERR=71 THEN PRINT "No disk in drive or door not closed.":GOTO 23600
23500 IF ERR=72 THEN PRINT "Disk Media Error. Try another disk.":GOTO 23600
23550 PRINT:PRINT "DISK PROBLEM ";:CLOSE:ON ERROR GOTO 0:END
23600 PRINT "Program will continue when problem is corrected.":LOCATE CSRLIN-2,1:RESUME
23650 '-----------DATCHECK----------input starting date---------------------
23700 Z1000$=DATE$'                                           --
23750 INPUT "date";DAT$'                                       | subroutine
23800 ON ERROR GOTO 24050'        Converts input                |    to
23850 DATE$=DAT$'                to standard                   |   enter
23900 ON ERROR GOTO 0'           date format (mm-dd-yyyy)      |    and
23950 DAT$=DATE$:DATE$=Z1000$'   and returns it as DAT$        |   check
24000 RETURN'                                                  |    the
24050 IF ERR=5 THEN 24100 ELSE PRINT "DATCHECK TROUBLE":STOP'   |   date
24100 PRINT "Not a valid date. Try again.":RESUME 23750'       --
24150 '---------------list a data file on the printer-----------------------
24200 ON ERROR GOTO 24350:LPRINT CHR$(27)CHR$(64)CHR$(14)CHR$(15)CHR$(27)CHR$(48)CHR$(27)CHR$(67)CHR$(0)CHR$(11)CHR$(27)CHR$(68)CHR$(20)CHR$(40)CHR$(60)CHR$(80)CHR$(100)CHR$(120)CHR$(0);:ON ERROR GOTO 0
24250 LPRINT "Listing of the file "FILESPEC$" on "DATE$" at "TIME$"."
24300 ON C GOTO 24400,24900,25400,25900,26400
24350 IF ERR=24 OR ERR=25 OR ERR=27 THEN BEEP:PRINT:PRINT "PRINTER NOT READY!...Program will resume when problem is corrected.":RESUME ELSE ON ERROR GOTO 0:GOTO 13350
24400 LPRINT:PAGE=PAGE+1:LPRINT CHR$(27)CHR$(45)CHR$(1)"---PAGE "PAGE"---"CHR$(9)"DATE"CHR$(9)"CLOSE"CHR$(9)"HIGH"CHR$(9)"LOW"CHR$(9)"VOLUME"CHR$(27)CHR$(45)CHR$(0)
24450 FOR N=1 TO 80
24500 IF EOF(1) THEN CLOSE #1:LPRINT CHR$(12):GOTO 13350
24550 INPUT #1, ATE$,VOL,HIGH,LOW,CLSE
24600 IF N/5=INT(N/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(1);
24650 IF (N-1)/5=INT((N-1)/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(0);
24700 LPRINT CHR$(9) ATE$ CHR$(9) CLSE CHR$(9) HIGH CHR$(9) LOW CHR$(9) VOL
24750 NEXT N
24800 LPRINT CHR$(12);
24850 GOTO 24200
24900 LPRINT:PAGE=PAGE+1:LPRINT CHR$(27)CHR$(45)CHR$(1)"---PAGE "PAGE"---"CHR$(9)"DATE"CHR$(9)"VOLUME"CHR$(9)"HIGH"CHR$(9)"LOW"CHR$(9)"CLOSE"CHR$(27)CHR$(45)CHR$(0)
24950 FOR N=1 TO 80
25000 IF EOF(1) THEN CLOSE #1:LPRINT CHR$(12):GOTO 13350
25050 INPUT #1, ATE$,VOL,HIGH,LOW,CLSE
25100 IF N/5=INT(N/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(1);
25150 IF (N-1)/5=INT((N-1)/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(0);
25200 LPRINT CHR$(9) ATE$ CHR$(9) VOL CHR$(9) HIGH CHR$(9) LOW CHR$(9) CLSE
25250 NEXT N
25300 LPRINT CHR$(12);
25350 GOTO 24200
25400 LPRINT:PAGE=PAGE+1:LPRINT CHR$(27)CHR$(45)CHR$(1)"---PAGE "PAGE"---"CHR$(9)"DATE"CHR$(9)"VOLUME"CHR$(9)"BID"CHR$(9)"ASKED"
25450 FOR N=1 TO 80
25500 IF EOF(1) THEN CLOSE #1:LPRINT CHR$(12):GOTO 13350
25550 INPUT #1, ATE$,VOL,BID,ASKED,DUMP
25600 IF N/5=INT(N/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(1);
25650 IF (N-1)/5=INT((N-1)/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(0);
25700 LPRINT CHR$(9) ATE$ CHR$(9) VOL CHR$(9) BID CHR$(9) ASKED
25750 NEXT N
25800 LPRINT CHR$(12);
25850 GOTO 24200
25900 LPRINT:PAGE=PAGE+1:LPRINT CHR$(27)CHR$(45)CHR$(1)"---PAGE "PAGE"---"CHR$(9)"DATE"CHR$(9)"CLOSE"CHR$(9)"CALL"CHR$(9)"PUT"
25950 FOR N=1 TO 80
26000 IF EOF(1) THEN CLOSE #1:LPRINT CHR$(12):GOTO 13350
26050 INPUT #1, ATE$,DUMP,CAL,PTT,CLSE
26100 IF N/5=INT(N/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(1);
26150 IF (N-1)/5=INT((N-1)/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(0);
26200 LPRINT CHR$(9) ATE$ CHR$(9) CLSE CHR$(9) CAL CHR$(9) PTT
26250 NEXT N
26300 LPRINT CHR$(12);
26350 GOTO 24200
26400 LPRINT:PAGE=PAGE+1:LPRINT CHR$(27)CHR$(45)CHR$(1)"---PAGE "PAGE"---"CHR$(9)"DATE"CHR$(9)"NET ASSET VALUE"CHR$(9)"OFFERING PRICE"
26450 FOR N=1 TO 80
26500 IF EOF(1) THEN CLOSE #1:LPRINT CHR$(12):GOTO 13350
26550 INPUT #1, ATE$,DUMP,NAV,OFFR,DUMP
26600 IF N/5=INT(N/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(1);
26650 IF (N-1)/5=INT((N-1)/5) THEN LPRINT CHR$(27)CHR$(45)CHR$(0);
26700 LPRINT CHR$(9) ATE$ CHR$(9) NAV CHR$(9) OFFR
26750 NEXT N
26800 LPRINT CHR$(12);
26850 GOTO 24200
26900 '----------------------------READ SEQUENCE FILE------------------------
26950 OPEN "UPDSTKFL.DAT" FOR INPUT AS #3
27000 IF EOF(3) THEN CLOSE #3:KEY ON:END
27050 LIN=CSRLIN:LOCATE 25,24:COLOR 0,7:PRINT STRING$(15," ");:COLOR 7,0:LOCATE LIN,1
27100 INPUT #3, FI$
27150 FILESPEC$=""
27200 FOR N=1 TO LEN(FI$):LTR$=MID$(FI$,N,1)
27250 IF "a"<=LTR$ AND LTR$<="z" THEN LTR$=CHR$(ASC(LTR$)-32)
27300 FILESPEC$=FILESPEC$+LTR$
27350 NEXT N
27400 SECTYPE$=RIGHT$(FILESPEC$,4)
27450 NAMELENGTH=INSTR(FILESPEC$,".")-1
27500 FILENAME$=LEFT$(FILESPEC$,NAMELENGTH)
27550 EXT$=SECTYPE$
27600 IF EXT$=".DJA" THEN C=1
27650 IF EXT$=".NYS" THEN C=2
27700 IF EXT$=".OTC" THEN C=3
27750 IF EXT$=".OPT" THEN C=4
27800 IF EXT$=".MUT" THEN C=5
27850 PRINT:PRINT SPC(24) FILESPEC$;
27900 OPEN FILESPEC$ FOR INPUT AS #1:GOTO 14000
27950 OPEN "MAKSTKFL.DOC" FOR INPUT AS #1 '-------------READ DOCUMENTATION-
28000 PRINT:PRINT:PRINT:PRINT
28050 FOR N=1 TO 20
28100 IF EOF(1) THEN CLOSE #1:ENDDOC=1:GOTO 28300
28150 LINE INPUT #1, DOCULINE$
28200 PRINT DOCULINE$
28250 NEXT N
28300 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT "Press any key to continue except <Esc>, which will end the program.";:COLOR 7,0:LOCATE LIN,1
28350 X$=INKEY$:IF X$="" THEN 28350 ELSE IF X$=CHR$(27) THEN 13350 ELSE 28400
28400 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT STRING$(79," ");:COLOR 7,0:LOCATE LIN,1
28450 IF ENDDOC THEN PRINT:PRINT "END OF DOCUMENTATION FILE":PRINT:PRINT:ENDDOC=0:GOTO 10500
28500 GOTO 28050 ' ---------------------end of read documentation--------------
28550 '----------------start of screen plotting routines--------------------
28600 LIN=CSRLIN:LOCATE 25,24:COLOR 0,7:PRINT FILESPEC$;:COLOR 7,0:LOCATE LIN,1
28650 GOSUB 34150' skipdays
28700 ON C GOTO 28800,28800,30950,34700,30950'
28750 '----------------------------------------------------C = 1 or 2--------
28800 MAXHIGH=0:MINLOW=65000!:SUMCLSE=0:DAYS=0
28850 PRINT:PRINT "--- DESCRIPTION OF THE PLOT TO FOLLOW --- ":PRINT
28900 PRINT:PRINT "The baseline, indicated by "CHR$(34)"A"CHR$(34)" is the average of the closing prices"
28950 PRINT "The daily high and low are indicated by "CHR$(34)"H"CHR$(34)" and "CHR$(34)"L"CHR$(34)" respectively."
29000 PRINT CHR$(34)"C"CHR$(34)" indicates the daily closing prices. This symbol overlays any "
29050 PRINT "other character that might otherwise be in its position.":PRINT
29100 IF EOF(1) THEN CLOSE #1:GOTO 29550' ------------determine scale--------
29150 INPUT #1,ENDDATE$,VOLUME,HIGH,LOW,CLSE
29200 IF HIGH=0 THEN 29300
29250 IF HIGH>MAXHIGH THEN MAXHIGH=HIGH
29300 IF LOW=0 THEN 29400
29350 IF LOW<MINLOW THEN MINLOW=LOW
29400 IF CLSE=0 THEN 29500
29450 SUMCLSE=SUMCLSE+CLSE:DAYS=DAYS+1
29500 GOTO 29100
29550 AVERAGE=SUMCLSE/DAYS
29600 RANGE=MAXHIGH-MINLOW
29650 MULTIPLIER=79/RANGE
29700 OFFSET=MINLOW*MULTIPLIER-1
29750 AV=INT(MULTIPLIER*AVERAGE-OFFSET)
29800 GOSUB 34400
29850 PRINT
29900 IF EOF(1) THEN CLOSE #1:GOTO 33050' ---------plot price data - C = 1 or 2
29950 INPUT #1, DAT$,VOL,HIGH,LOW,CLSE
30000 IF HIGH=0 THEN HI=AV:GOTO 30100
30050 HI=INT(MULTIPLIER*HIGH-OFFSET)
30100 IF CLSE=0 THEN CL=AV:GOTO 30200
30150 CL=INT(MULTIPLIER*CLSE-OFFSET)
30200 IF LOW=0  THEN LO=AV:GOTO 30400
30250 LO=INT(MULTIPLIER*LOW-OFFSET)
30300 IF LO<40 THEN TEXT=1
30350 IF HI>90 THEN TEXT=0
30400 FOR N=1 TO 80:GRAPH$(N)=" ":NEXT
30450 IF HIGH=0 AND LOW=0 AND CLSE=0 THEN GRAPH$(AV)="A":GOTO 30900
30500 FOR N=LO TO HI:GRAPH$(N)="#":NEXT
30550 IF HI<AV THEN FOR N=HI TO AV:GRAPH$(N)="-":NEXT
30600 IF AV<LO THEN FOR N=AV TO LO:GRAPH$(N)="-":NEXT
30650 GRAPH$(AV)="A"
30700 GRAPH$(LO)="L"
30750 GRAPH$(HI)="H"
30800 GRAPH$(CL)="C"
30850 IF EOF(1) THEN FOR N=1 TO 79:PRINT GRAPH$(N);:NEXT:GOTO 29900
30900 FOR N=1 TO 80:PRINT GRAPH$(N);:NEXT:GOTO 29900
30950 '----------------------------------------------------C = 3 or 5--------
31000 MINBID=65000!:MAXASK=0:SUMBID=0:DAYS=0
31050 PRINT:PRINT "In the plot to follow the average bid or net asset value over the range of"
31100 PRINT "days plotted forms the baseline, with values increasing to the right."
31150 IF EOF(1) THEN CLOSE #1:GOTO 31550' ------------determine scale-----------
31200 INPUT #1,ENDDATE$,VOLUME,BID,ASK,DUMP
31250 IF ASK=0 THEN 31350
31300 IF ASK>MAXASK THEN MAXASK=ASK
31350 IF BID=0 THEN 31150
31400 IF BID<MINBID THEN MINBID=BID
31450 SUMBID=SUMBID+BID:DAYS=DAYS+1
31500 GOTO 31150
31550 AVERAGE=SUMBID/DAYS
31600 RANGE=MAXASK-MINBID
31650 MULTIPLIER=79/RANGE
31700 OFFSET=MINBID*MULTIPLIER-1
31750 AV=INT(MULTIPLIER*AVERAGE-OFFSET)
31800 GOSUB 34400
31850 PRINT
31900 IF EOF(1) THEN CLOSE #1:GOTO 33050' ---------plot price data - C = 3 or 5
31950 INPUT #1, DAT$,VOL,BID,ASK,DUMP
32000 IF ASK=0 THEN AS=AV:GOTO 32100
32050 AS=INT(MULTIPLIER*ASK-OFFSET)
32100 IF BID=0  THEN BI=AV:GOTO 32300
32150 BI=INT(MULTIPLIER*BID-OFFSET)
32200 IF BI<40 THEN TEXT=1
32250 IF AS>90 THEN TEXT=0
32300 FOR N=1 TO 80:GRAPH$(N)=" ":NEXT
32350 IF ASK=0 AND BID=0 THEN GRAPH$(AV)="A":GOTO 32950
32400 FOR N=BI TO AS:GRAPH$(N)="#":NEXT
32450 IF AS<AV THEN FOR N=AS TO AV:GRAPH$(N)="-":NEXT
32500 IF AV<BI THEN FOR N=AV TO BI:GRAPH$(N)="-":NEXT
32550 GRAPH$(AV)="A"
32600 GRAPH$(BI)="L"
32650 GRAPH$(AS)="H"
32700 IF C=3 THEN GRAPH$(BI)="B"
32750 IF C=5 THEN GRAPH$(BI)="N"
32800 IF C=3 THEN GRAPH$(AS)="K"
32850 IF C=5 THEN GRAPH$(AS)="O"
32900 IF EOF(1) THEN FOR N=1 TO 79:PRINT GRAPH$(N);:NEXT:GOTO 31900
32950 FOR N=1 TO 80:PRINT GRAPH$(N);:NEXT:GOTO 31900
33000 '--------------------exit routine from price plotting------------------
33050 LIN=CSRLIN:LOCATE 25,39:COLOR 0,7:PRINT "PRESS A KEY TO CONT. OR <Esc> TO END";:COLOR 7,0:LOCATE LIN,1
33100 X$=INKEY$:IF X$="" THEN 33100 ELSE IF X$=CHR$(27) THEN 13350 ELSE 33200
33150 '-----------------------------PLOT VOLUME DATA-------------------------
33200 LIN=CSRLIN:LOCATE 25,39:COLOR 0,7:PRINT STRING$(40," ");:COLOR 7,0:LOCATE LIN,1
33250 ON C GOTO 33300,33300,33300,13350,13350
33300 GOSUB 34400
33350 INPUT #1, STARTDATE$,MAXVOL,HIGH,LOW,CLSE
33400 IF EOF(1) THEN CLOSE #1:GOTO 33600
33450 INPUT #1, ENDDATE$,VOL,HIGH,LOW,CLSE
33500 IF VOL>MAXVOL THEN MAXVOL=VOL
33550 GOTO 33400
33600 MULTIPLIER=79/MAXVOL
33650 GOSUB 34400
33700 PRINT
33750 IF EOF(1) THEN CLOSE #1:GOTO 38200
33800 INPUT #1, DAT$,VOL,HIGH,LOW,CLSE
33850 VL=INT(MULTIPLIER*VOL)
33900 FOR N=1 TO 80:GRAPH$(N)=" ":NEXT
33950 FOR N=1 TO VL:GRAPH$(N)="#":NEXT
34000 GRAPH$(VL)="V"
34050 IF EOF(1) THEN FOR N=1 TO 79:PRINT GRAPH$(N);:NEXT N:GOTO 33750
34100 FOR N=1 TO 80:PRINT GRAPH$(N);:NEXT N:GOTO 33750
34150 DAYSS=0'    ----------------------------------------skipdays start-------
34200 IF EOF(1) THEN CLOSE #1:GOTO 34350
34250 INPUT #1, DUMP$:FOR N=1 TO 4: INPUT #1, DUMP:NEXT
34300 DAYSS=DAYSS+1:GOTO 34200
34350 SKIP=DAYSS-24
34400 OPEN FILESPEC$ FOR INPUT AS #1' -----------skipdays after first pass----
34450 IF SKIP<=0 THEN RETURN
34500 FOR SK=1 TO SKIP
34550 INPUT #1, DUMP$:FOR N=1 TO 4:INPUT #1, DUMP:NEXT N
34600 NEXT SK
34650 RETURN'    ----------------------------------------skipdays end---------
34700 '----------------------------------OPTIONS----------- C = 4 ------------
34750 MAXCAL=0:MAXPTT=0:MAXL=0:MINCAL=65000!:MINPTT=65000!:MINL=65000!
34800 PRINT:PRINT "The following definitions apply to the plot that follows:":PRINT
34850 PRINT "P = PUT price":PRINT "C = CALL price":PRINT "U = closing price of the underlying stock":PRINT "L = U - C":PRINT "T = U + P":PRINT "S = strike price":PRINT
34900 IF EOF(1) THEN CLOSE #1:GOTO 35550' -----------determine scale--------
34950 INPUT #1,ENDDATE$,DUMP,CAL,PTT,CLSE
35000 IF CAL=0 THEN 35150
35050 IF CAL>MAXCAL THEN MAXCAL=CAL
35100 IF CAL<MINCAL THEN MINCAL=CAL
35150 IF PTT=0 THEN 35300
35200 IF PTT<MINPTT THEN MINPTT=PTT
35250 IF PTT>MAXPTT THEN MAXPTT=PTT
35300 IF CLSE=0 THEN 35500
35350 LLL=CLSE-CAL:TTT=CLSE+PTT
35400 IF LLL<MINL THEN MINL=LLL
35450 IF TTT>MAXT THEN MAXT=TTT
35500 GOTO 34900
35550 RANGECAL=MAXCAL-MINCAL
35600 RANGEPTT=MAXPTT-MINPTT
35650 RANGEUUU=MAXT-MINL
35700 MULTIPLCAL=75/RANGECAL
35750 MULTIPLPTT=75/RANGEPTT
35800 MULTIPLUUU=75/RANGEUUU
35850 OFFCAL=MINCAL*MULTIPLCAL-2
35900 OFFPTT=MINPTT*MULTIPLPTT-2
35950 OFFUUU=MINL*MULTIPLUUU-2
36000 STRIKE=VAL(RIGHT$(FILENAME$,2))
36050 ST=INT(MULTIPLUUU*STRIKE-OFFUUU)
36100 GOSUB 34400
36150 CL=INT(MULTIPLUUU*CLSE-OFFUUU)
36200 CA=INT(MULTIPLCAL*CAL-OFFCAL)
36250 LLL=CLSE-CAL
36300 LL=INT(MULTIPLUUU*LLL-OFFUUU)
36350 PT=INT(MULTIPLPTT*PTT-OFFPTT)
36400 TTT=CLSE+PTT
36450 TT=INT(MULTIPLUUU*TTT-OFFUUU)
36500 IF EOF(1) THEN 38200' ---------plot price data - C = 4 OPTIONS---------
36550 INPUT #1, DAT$,DUMP,CAL,PTT,CLSE
36600 IF CLSE=0 THEN 36700
36650 CL=INT(MULTIPLUUU*CLSE-OFFUUU)
36700 IF CAL=0 THEN 36950
36750 CA=INT(MULTIPLCAL*CAL-OFFCAL)
36800 IF CLSE=0 THEN 36950
36850 LLL=CLSE-CAL
36900 LL=INT(MULTIPLUUU*LLL-OFFUUU)
36950 IF PTT=0 THEN 37250
37000 LLL=CLSE-CAL
37050 PT=INT(MULTIPLPTT*PTT-OFFPTT)
37100 IF CLSE=0 THEN 37250
37150 TTT=CLSE+PTT
37200 TT=INT(MULTIPLUUU*TTT-OFFUUU)
37250 FOR N=1 TO 80:GRAPH$(N)=" ":NEXT N
37300 IF CAL=0 AND PTT=0 AND CLSE=0 THEN PRINT:GOTO 36500
37350 IF CAL=0 THEN 37450
37400 FOR N= LL TO CL:GRAPH$(N)="-":NEXT
37450 IF PTT=0 THEN 37550
37500 FOR N= CL TO TT:GRAPH$(N)="+":NEXT
37550 GRAPH$(ST)="S"
37600 IF PTT=0 THEN 37700
37650 GRAPH$(TT)="T"
37700 IF CAL=0 THEN 37800
37750 GRAPH$(LL)="L"
37800 GRAPH$(CL)="U"
37850 IF PTT=0 THEN 37950
37900 GRAPH$(PT-1)="#":GRAPH$(PT)="P":GRAPH$(PT+1)="#"
37950 IF CAL=0 THEN 38050
38000 GRAPH$(CA-1)="#":GRAPH$(CA)="C":GRAPH$(CA+1)="#"
38050 GRAPH$(0)=CHR$(156)
38100 FOR N=1 TO 80:PRINT GRAPH$(N);:NEXT N
38150 GOTO 36500
38200 LIN=CSRLIN:LOCATE 25,39:COLOR 0,7:PRINT "PRESS <Esc> TO END";:COLOR 7,0:LOCATE LIN,1
38250 X$=INKEY$:IF X$="" THEN 38200 ELSE IF X$=CHR$(27) THEN 13350 ELSE 38200
38300 '           SAVE"makstkfl.bas",a
65000 '           SAVE"makstkfl.bas",a
```
{% endraw %}

## MAKSTKFL.DOC

{% raw %}
```
                 DOCUMENTATION FOR MAKSTKFL.BAS

                    Copyright 1983 BY Michael Csontos
                                      3228 Livonia Center Road
                                      Lima, New York 14485
                                      January 4, 1983


                             INTRODUCTION

      This program assists in the generation of data files for securities price
and  volume  data. It is intended for use with other programs that will analyze
and/or plot the data. The program is designed to use the Wall Street Journal or
other  newspaper  financial  statistics pages for manual entry of the data into
ASCII  sequential  files  accessable  to BASIC, EDLIN and other languages under
PC-DOS.

      It includes a simple plotting routine, but the program PLTSTKFL.BAS by me
is intended for serious plotting of the data files on an EPSON printer.

      I  have  written  another  companion  program named DAYLOG.BAS which will
generate  forms  on  the  printer  for  use  in recording securities (or other)
statistics.  These  three programs allow you to gather data from a library or a
stack  of  newspapers that would be awkward to handle at the computer (DAYLOG),
create data files (MAKSTKFL), and plot the data (PLTSTKFL).

      I  have  provided  no means of editing or correcting the files after they
are  created.  While the DOS utility EDLIN is quite limited, it is adaquate for
the  purpose.  Also  I have purposely avoided the use of the CLS (clear screen)
command. While it may look more professional to start each segment with a blank
sereen,  and  it  is  unfortunate  that  scrolling  is not smooth on a computer
screen,  I like the ability to review for a few seconds what I have done before
it vanishes completely. 

      All  data  entry is in decimal. I found it confusing to remember a format
for  entering  fractions  with  the  numeric  keypad,  and easy to remember the
decimal equivalents of eighths. A small calculator might be useful if you trade
in  securities  traded  in  32nds  or 16ths.

      There  is  no  automatic  transfer from the end of one function to a menu
(except  for the documentation read function). With the PC's <F2> key programed
for  RUN and the keyboard buffer available I felt that it was not necessary. If
you  finish  one  stock  file  and know which one you want next, you can key in
something like  <F2><2><3><C><O><M><S><H><A><R><E>, and probably the first data
entry, about as fast as the disk drive takes to reach that part of the program.
This  is  as  easy  as  using another menu to get you there from the end of the
program. 

      This  program  makes  reference  to or creates several other files listed
below and explained later. 

           MAKSTKFL.DOC      which you are reading
           UPDSTKFL.ALL      a list of all securities files
           UPDSTKFL.DAT      a list of active securities files
           TRANSFER.BAT      a batch file used to backup data files
           ????????.DJA      data file created by MAKSTKFL
           ????????.NYS        "   "     "     "      "
           ????????.OTC        "   "     "     "      "
           ????????.OPT        "   "     "     "      "
           ????????.MUT        "   "     "     "      "


                             PROGRAM OPERATION

      When  the  program  is  run it immediately checks for the presence of the
files MAKSTKFL.DOC and UPDSTKFL.DAT. If they are present you are presented with
a  menu  with  eight  selections. If these files are not on the active disk the
selections that would use them are omitted.

      There  are  two  menus  presented.  The  first selects the function to be
performed.  The second selects the type of security file to be used. The second
menu is skipped when it is not needed.

      A description of the menu selections follows.

                             FIRST MENU - FUNCTION

           (1):  INSERT DATA

      If  a  securities  data file (specified by the second menu) exists on the
active  disk  the  program finds its starting date, renames it to ????????.OLD,
opens  a  new  file  with securities file name, allows you to enter data from a
date you specify till the old file's starting date, then transfers the old data
onto  the end of the new file. This allows you to extend your database backward
in time.

           (2):  ADD DATA

      Using  an existing data file, the program finds the last entry date, then
appends  data  you  enter  until  you tell it to stop by entering a code number
(9999).

           (3):  NEW DATA

      The  program  will  open  a  new  file with a filename you specify and an
extension  for  the  security type selected in the second menu. You specify the
starting date and enter data until you enter the stop code 9999.

           (4):  DATE RANGE

      The  first and last dates in the specified security file are displayed on
the screen. 

           (5):  REPORT

      All  data  for  the specified security is printed on the printer. This is
useful if you have been entering data directly from a newspaper or data service
and  have no written record. The format is easier to read than an EDLIN listing
or a dump using the DOS TYPE command.

           (6):  SCREEN GRAPH

      This is an abbreviated version of PLTSTKFL directed to the screen for use
as  a  quick check of recently entered data. While the data entry routines trap
many  typographical  errors,  others  don't show up until an attempt is made to
plot the data.

           (7):  UPDATE

      In order to use this function you must have a file called UPDSTKFL.DAT on
the  active  disk.  You create this file in DOS with EDLIN UPDSTKFL.DAT or COPY
CON:  UPDSTKFL.DAT.  It  is  simply a list of the files you want to update on a
daily basis. An example of an EDLIN listing is:

           1:*TRANS.DJA
           2: DELTAA.NYS
           3: UNPAC,NYS
           4: DOW8_508.NYS
           5: BIOTECH.OTC

      The  program  will read this file line by line, retrieve the file listed,
find the last date, allow you to enter the next day's data, then go to the next
file  in the UPDSTKFL list. The program selects the proper data format from the
extension of the filespec on the list.

      While  the  program will not permit more than one day's data to be enered
at  a  time in this mode, if the skip code (8888) is entered the next date will
be used, to allow for the skipping of holidays.

      It  may be convenient to have a file UPDSTKFL.ALL on the disk listing all
stock  files  you  have created. It is considerably easier to delete lines from
files with EDLIN than to type in filespecs without errors each time you want to
change your updating cycle. Just copy UPDSTKFL.ALL to UPDATKFL.DAT and edit the
DAT file.

            (8): DOCUMENTATION

      If  the  file  MAKSTKFL.DOC is present on the active disk, this mode will
allow you to read it without leaving BASIC or reloading the program.


                             SECOND MENU - SECURITY TYPE

      Selection  of the type of security is necessary for the convience of data
entry, since the published tables present different types of information and in
different  order  for various markets. All of the formats are based on listings
in The Wall Street Journal.

           (1):   Dow Jones Averages

      This   is  for  the  entries  from  the  tables  of  30  INDUSTRIALS,  20
TRANSPORTATION,  15  UTILITIES  and  65 STOCKS COMPOSITE AVERAGE data. The data
file format is actually the same as for selection (2) but this allows for entry
in  the  same  order  as  in  the  paper.  The entry order is CLOSE, HIGH, LOW,
VOLUME.

      The data file is "date",volume,high,low,close.

           (2):   New York Stock Exchange

      Covers  the  data for the NYSE-Composite Transactions as well as New York
Exchange  Bonds  and  Amex-Composite Tranactions. The order of entry is VOLUME,
HIGH, LOW, CLOSE.

      The data file is "data",volume,high,low,close.

           (3):  Over the Counter Markets

      Data  entry  in  the  order  VOLUME,  BID, ASKED for NASDAQ quotes of the
Over-the-Counter Markets.

      The data file is "date",volume,bid,asked,0.

           (4):  Options

      Listed Options Quotations data in the order NY CLOSE, CALLS, PUTS.

      It  is  important  for  options files that the last two characters of the
filename  be  the  strike price of the option if this data is to be used by the
program   PLTSTKFL.   An  example  is  BETHJA35  where  the  filespec  will  be
BETHJA35.OPT.  In  plotting  options  data,  PLTSTKFL  extracts  the  last  two
characters in the filename for use as a baseline in the plot. 


      The data file is "date",0,call,put,close.

           (5):  Mutual Funds

      NET  ASSET  VALUE  and OFFER PRICE data entry for Mutual Fund data.

      The data file is "date",0,nav,offer,0

      The  data  file formats above are what you will see if you list the files
with  DOS  [type]  or  EDLIN.  The  null  (0)  entries are used to allow common
subroutines to be used for search or conversion of all of the data types.

                             FILE SELECTION

      After  you have specified a securities type, you will be presented with a
list of the files of that type that are on the active disk. You must then enter
the filename of the one you want. The filename may be any that is acceptable to
DOS  except  in  the case of options, where the last two characters are used to
record the strike price.

      {NOTE:  The filespec consists of [filename].[extension]. You are to enter
the  eight  (or  less) character [filename]. The three character [extension] is
supplied by the program.}

      If  you  enter  a  filename  that  is  on  the  disk  but not on the list
displayed, you may add data to that file in the wrong format, causing confusion
later.  Therefore check the filespec displayed in line 25 of the display before
proceeding to enter data.

      .
                             DATA ENTRY

      Once  the  program  is in a mode for data entry it will list the security
dile  open on line 25, the date for the data to be entered and the type of data
in  the  active screen area. The program uses BASIC INPUT statements so it will
reject  some  data  entries such as characters and extra punctuation marks. The
program  will  trap  some  errors  such as decimal points in volume entries and
inappropriate  values for HIGH, LOW, and CLOSE relative to data already entered
for that date.

      The  program  will  prompt  for  reentry of the data just entered. If the
problem  is  with  data  entered earlier, enter the number 7777 and the program
will  restart  the  data  entry  cycle with the same date. The program does not
expect securities prices to change by more than 25% in one day. If this data is
entered, it askes for a second <enter> to confirm it. 

      Once  the last data for a day is entered the program prompts for the next
day's  data  and  there  is  no  way  to  retreive the previous data (see ERROR
CORRECTION).  The  number 7777 may be entered for any field to restart the data
cycle at the same date to correct errors that are caught before the last entry.
If  the number 8888 is entered the program will skip to the next date and there
will  be no item in the data file for the date so skipped. When the number 9999
is entered the program ends the data entry mode. No data entry is made for that
last date.

                             ERROR CORRECTION

      The data files created with this program use the following format:

           "date",data AA,data BB,data CC,data DD

      A typical EDLIN listing would look like:

        1:*"12-10-82",1234,22.375,21,22.125
        2: "12-13-82",1324,22.875,21.5,22
        3: "12-14-82",4231,20,19.125,21.25

      This  is  not  intended  to  be  a  tutorial on how to use EDLIN, but the
procedure  for correcting a file is to exit BASIC (enter <SYSTEM>), start EDLIN
(enter  <A:EDLIN  filespec>  if your DOS disk is in drive A and your data is in
active drive B) and enter <L>. A listing similar to the above will appear. Find
the date where the error occors. Enter the line number and the line will appear
with  the  prompt below it. Use the DOS editing keys to correct the error, then
exit EDLIN.

      With the error trapping routines of MAKSTKFL this procedure should seldom
be necessary.

                            DATA BACKUP

      This  program  opens  all  files  for  output in the APPEND mode so it is
difficult  to loose data. Nevertheless it is advisable to regularly backup your
data.  The file TRANSFER.BAT is provided to simplify this procedure. It depends
on  having  a  two  disk  system with the MAKSTKFL program, its associated data
files, and TRANSFER.BAT all in drive B and the backup disk in drive A.

      If  you are using PLTSTKFL or other analysis program it is a good idea to
use  the  disk  containing it as the backup disk for the following reason. When
run, TRANSFER  will first erase all stock data files in drive A. This is useful
because  if  the  files  are  updated  on  a  daily basis they will become very
fragmented  by  the  DOS  disk  routines.  Since the copy command uses existing
directory entries on the destination disk if they exist, they must be erased in
order  to  get good disk utilization on the backup disk. Using the backup files
with analysis programs should decrease disk drive activity.

      If  the disks are in the proper drives, TRANSFER will try to erase itself
in  drive  A  as  a  precaution,  erase  securities  in  drive A, then copy all
securities files in drive B to drive A.

      Since it is possible for this routine to distroy itself if misused, it is
listed  below. You may recreate the file by editing this file if you are clever
at that sort of thing.

           rem WARNING!!!
           REM   This routine will erase all stock data files in drive A:.
           rem   Be sure that this disk is in drive B:.
           rem   The transfer is made from drive B: to drive A:.
           rem As a precaution this transfer batch file will erase itself if it
                 is in drive A:. 
           pause  WARNING!  Press  <Ctrl>+<Break>  if  you  think  you  are  in
                 trouble.
           erase A:transfer.bat
           erase a:*.dja
           erase a:*.nys
           erase a:*.otc
           erase a:*.opt
           erase a:*.mut
           rem All stock data files will be transfered from B: to A:.
           rem Be sure that the source disk is in drive B:
           pause  and that the destination disk is in drive A:
           copy *.dja A:
           copy *.nys A:
           copy *.otc A:
           copy *.opt A:
           copy *.mut A:

                             MISCELLANEOUS

      At  the  time  of  this  writing this program has quite a few rough edges
which will have to be worked off by use. The error recovery procedures for disk
and  printer  faults especially need work. It will be necessary to simulate all
possible faults and trace the behavior of the software. However most of this is
cosmetic,  since restarting the program (from <Ctrl>+<Break> if necessary) will
solve  most  problems. The nature of the data entry and the ease of editing the
files make this program tolerant of errors.

      Revisions  of  this  program and companion programs will be made avilable
through the user groups that distribute this program.

                             ---***---



           The  program  MAKSTKPLT.BAS  and  its  associated
           files  are  made freely available non-exclusively
           for  distribution  to  the members of the Picture
           City  Personal  Computer  Programmers'  Club  and
           through software exchange with other users groups
           as  long  as  the  author  and  (PC)^3  are fully
           credited.

```
{% endraw %}

## PLTSTKFL.BAS

{% raw %}
```bas
1 ' (PC)^3 Software Submission PLTSTKFL authored on January 4, 1983 by
2 '
3 ' Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
4 '
5 ' Copyright 1983 Michael Csontos
6 '
7 '  This program is made freely available non-exclusively to the Picture
8 '  City Personal Computer Programmers' Club for distribution to its members
9 '  and through software exchange to other users groups as long as credit is
10 ' given to the author and (PC)^3.
11 '
12 '
13 ' NOTE: The files PLTSTKFL.DOC, PLTSEQFL.DAT, and data files with the
14 ' extensions DJA, NYS, OTC, OPT, and MUT are associated with this program.
15 ' Also are PLTSEQFL.ALL, and MONEYMKT.INT.
16 '
10000 GOTO 12000
10100 Y=VAL(RIGHT$(DAT$,4))'  --------------------------------------------------
10200 D=VAL(MID$(DAT$,4,2))'   dat$ as mm-dd-yyyy     |  subroutine
10300 M=VAL(LEFT$(DAT$, 2))'    to  M,D,Y,M$,D$,Y$    |     to
10400 M2030=M+100:D2030=D+100'                        |  decompose
10500 M$=STR$(M2030):D$=STR$(D2030):Y$=STR$(Y)'       |    dates
10600 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'|    into
10700 RETURN'    -------------------------------------  strings & numbers  -----
10800 M3000=M:Y3000=Y'   -------------------------------------------------------
10900 IF M3000>2 THEN 11100'
11000 M3000=M3000+12:Y3000=Y3000-1'
11100 N=2+D+M3000*2+Y3000+INT(Y3000/4)-INT(Y3000/100)+INT(Y3000/400)+INT(0.6*(M3000+1))'
11200 ON 1+INT(1/2+(N/7-INT(N/7))*7) GOTO 11300,11400,11500,11600,11700,11800,11900'
11300 DAYNAME$="SAT.":RETURN'
11400 DAYNAME$="SUN.":RETURN'         Subroutine to give day of week
11500 DAYNAME$="MON.":RETURN'
11600 DAYNAME$="TUE.":RETURN'                     from
11700 DAYNAME$="WED.":RETURN'
11800 DAYNAME$="THU.":RETURN'            integers M, D, & Y.
11900 DAYNAME$="FRI.":RETURN'--------------------------------------------------
12000 KEY OFF:CLS:WIDTH "lpt1:",255
12100 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT STRING$(79," ");:COLOR 7,0:LOCATE LIN,1
12200 ON ERROR GOTO 12700
12300 OPEN "moneymkt.int" FOR INPUT AS #1
12400 INPUT #1, ANINT
12500 CLOSE #1:ON ERROR GOTO 0:GOTO 13100
12600 ON ERROR GOTO 0: GOTO 13200
12700 IF ERR=53 THEN NOINTFL=1:RESUME 12900
12800 ON ERROR GOTO 0
12900 ON ERROR GOTO 0
13000 PRINT:INPUT "Current money market fund interest rate (%)";ANINT
13100 IF ANINT<1 OR ANINT>100 THEN ANLMFR=0.1 ELSE ANLMFR=ANINT/100
13200 RESPMSG$="PRESS A NUMBER KEY CORRESPONDING TO YOUR SELECTION OR PRESS <Esc> TO QUIT."
13300 DIM GRAPH$(132)
13400 DIM MTH$(12):MTH$(1)="JAN.":MTH$(2)="FEB.":MTH$(3)="MAR.":MTH$(4)="APR.":MTH$(5)="MAY.":MTH$(6)="JUN.":MTH$(7)="JUL.":MTH$(8)="AUG.":MTH$(9)="SEP.":MTH$(10)="0CT.":MTH$(11)="NOV.":MTH$(12)="DEC."
13500 ON ERROR GOTO 13700' -----------------select task-----------------------
13600 OPEN "pltseqfl.dat" FOR INPUT AS #3:GOTO 13800
13700 NOSEQ=1:RESUME 13800
13800 ON ERROR GOTO 0
13900 ON ERROR GOTO 14000:OPEN "pltstkfl.doc" FOR INPUT AS #1:CLOSE #1:GOTO 14100
14000 NODOC=1:RESUME 14100
14100 ON ERROR GOTO 0:IF NOSEQ AND NODOC THEN 16300
14200 PRINT:PRINT "Do you want to ";
14300 IF NODOC THEN 14600
14400 PRINT "(1):  read the documentation file for this program,
14500 PRINT " or            (2):  plot a single securities file,
14600 IF NODOC=0 THEN 14700 ELSE PRINT "(2):  plot a single securities file,
14700 IF NOSEQ THEN 15000
14800 PRINT " or            (3):  plot all files for a single type of security,
14900 PRINT " or            (4):  plot all security files,
15000 PRINT " or            <Esc> to quit?":IF NOSEQ THEN 15300
15100 PRINT "     NOTE: The security must be listed in the file PLTSEQFL.DAT
15200 PRINT "           in order to be plotted in options 3 or 4.
15300 X$=INKEY$:IF X$="" THEN 15300 ELSE IF X$=CHR$(27) THEN 17200 ELSE AA=VAL(X$)
15400 IF AA<1 OR AA>4 THEN PRINT:PRINT RESPMSG$:GOTO 15300
15500 IF NOSEQ THEN IF AA<1 OR AA>2 THEN PRINT:PRINT RESPMSG$:GOTO 15300
15600 ON AA GOTO 15700,15800,15900,16000
15700 AA$="DOCUMENTATION":GOTO 16100
15800 AA$="SINGLE FILE":GOTO 16100
15900 AA$="SINGLE TYPE":GOTO 16100
16000 AA$="ALL FILES":GOTO 16100
16100 LIN=CSRLIN:LOCATE 25,60:COLOR 0,7:PRINT AA$;:COLOR 7,0:LOCATE LIN,1
16200 ON AA GOTO 52500
16300 PRINT'     ---------------- select type of plot - B -------------------
16400 PRINT "Do you want (1): a continuous plot of medium resolution,
16500 PRINT " or         (2): a continuous plot of fine resolution,
16600 PRINT " or         (3): 11 inch plot of the latest data in medium resolution,
16700 PRINT " or         (4): 11 inch plot of the latest data in fine resolution,
16800 PRINT " or            <Esc>: to quit?"
16900 X$=INKEY$:IF X$="" THEN 16900 ELSE IF X$=CHR$(27) THEN 17200 ELSE B=VAL(X$)
17000 IF B<1 OR B>4 THEN PRINT:PRINT RESPMSG$:GOTO 16900
17100 ON B GOTO 17300,17400,17500,17600
17200 KEY ON:END
17300 B$="MED. CONT.":GOTO 17700
17400 B$="FINE. CONT.":GOTO 17700
17500 B$="MED. 11 IN.":GOTO 17700
17600 B$="FINE 11 IN.":GOTO 17700
17700 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT B$;:COLOR 7,0:LOCATE LIN,1
17800 ON AA GOTO 17200,17900,17900,20000
17900 PRINT'     -------------- select type of file to be processed - C -----
18000 PRINT "Is the file for (1): Dow Jones Averages,
18100 PRINT " or             (2): New York Stock Exchange,
18200 PRINT " or             (3): Over the Counter Markets,
18300 PRINT " or             (4): Options,
18400 PRINT " or             (5): Mutual Funds,
18500 PRINT " or             <Esc>: to quit?"
18600 X$=INKEY$:IF X$="" THEN 18600 ELSE IF X$=CHR$(27) THEN 17200 ELSE C=VAL(X$)
18700 IF C<1 OR C>5 THEN PRINT:PRINT RESPMSG$:GOTO 18600
18800 ON C GOTO 18900,19000,19100,19200,19300
18900 EXT$=".DJA":GOTO 19400
19000 EXT$=".NYS":GOTO 19400
19100 EXT$=".OTC":GOTO 19400
19200 EXT$=".OPT":GOTO 19400
19300 EXT$=".MUT":GOTO 19400
19400 LIN=CSRLIN:LOCATE 25,15:COLOR 0,7:PRINT "FILE FOR " EXT$;:COLOR 7,0:LOCATE LIN,1
19500 ON AA GOTO 17200,19600,20000,20000
19600 GOSUB 37600 ' GETFILE  --------- select file - FILESPEC$ --------------
19700 IF NOFILE OR BADFILE THEN PRINT "PROGRAM TERMINATED":CLOSE:KEY ON:END
19800 LIN=CSRLIN:LOCATE 25,15:COLOR 0,7:PRINT "FILE FOR " FILESPEC$;:COLOR 7,0:LOCATE LIN,1
19900 IF C=1 OR C=2 OR C=3 THEN 20000 ELSE 21400' -- select data - DD -------
20000 PRINT
20100 PRINT "Do you want a plot of  (1): Prices,
20200 PRINT " or                    (2): Volume,
20300 PRINT " or                    (3): both (first Prices, then Volume),
20400 PRINT " or                    <Esc> to quit?"
20500 X$=INKEY$:IF X$="" THEN 20500 ELSE IF X$=CHR$(27) THEN 17200 ELSE DD=VAL(X$)
20600 IF DD<1 OR DD>4 THEN PRINT:PRINT RESPMSG$:GOTO 20500
20700 ON DD GOTO 20800,20900,21000
20800 PLOT$="PRICES":GOTO 21100
20900 PLOT$="VOLUME":GOTO 21100
21000 PLOT$="PRICES, THEN VOLUME":GOTO 21100
21100 LIN=CSRLIN:LOCATE 25,40:COLOR 0,7:PRINT PLOT$;:COLOR 7,0:LOCATE LIN,1
21200 ON AA GOTO 17200,21300,50600,50600
21300 ON DD GOTO 21400,34700,21400' ---------plot price data ----------------
21400 LPRINT CHR$(27) CHR$(64) CHR$(14) CHR$(27) CHR$(45) CHR$(1) CHR$(15) DATE$ "/" TIME$ CHR$(18) CHR$(27) CHR$(69) "     PRICE     " CHR$(27) CHR$(71) FILESPEC$ CHR$(27) CHR$(72) CHR$(27) CHR$(45) CHR$(0)
21500 IF B=3 OR B=4 THEN GOSUB 40500' skipdays
21600 ON C GOTO 21800,21800,28100,41600,28100'
21700 '----------------------------------------------------C = 1 or 2--------
21800 MAXHIGH=0:MINLOW=65000!:SUMCLSE=0:DAYS=0
21900 IF EOF(1) THEN CLOSE #1:GOTO 22800' ------------determine scale-----------
22000 INPUT #1,ENDDATE$,VOLUME,HIGH,LOW,CLSE
22100 IF HIGH=0 THEN 22300
22200 IF HIGH>MAXHIGH THEN MAXHIGH=HIGH
22300 IF LOW=0 THEN 22500
22400 IF LOW<MINLOW THEN MINLOW=LOW
22500 IF CLSE=0 THEN 22700
22600 SUMCLSE=SUMCLSE+CLSE:DAYS=DAYS+1
22700 GOTO 21900
22800 AVERAGE=SUMCLSE/DAYS
22900 RANGE=MAXHIGH-MINLOW
23000 LPRINT CHR$(27) CHR$(70) CHR$(15) CHR$(27) CHR$(48);
23100 LPRINT "A = average closing value of all data plotted =";:LPRINT USING "####.###";AVERAGE;
23200 LPRINT "   The numbers to the right of the dates below are the daily closing prices."
23300 LPRINT "The lowest low plotted is ";:LPRINT USING "####.###";MINLOW;
23400 LPRINT ".  The highest high plotted is ";:LPRINT USING "####.###";MAXHIGH;
23500 LPRINT ".  That high is ";:LPRINT USING "####.#";(MAXHIGH-MINLOW)/MINLOW*100;:LPRINT "% greater than that low."
23600 LPRINT CHR$(27) CHR$(45) CHR$(1);
23700 LPRINT " M = The value of money equal to the average closing value at the start of the plot, compounded daily at ";:LPRINT USING "###.##";ANLMFR*100;:LPRINT "%/yr."
23800 LPRINT CHR$(27) CHR$(45) CHR$(0);
23900 IF B=2 OR B=4 THEN LPRINT CHR$(27) CHR$(83) CHR$(INT(VAL(RIGHT$(TIME$,1))/5)) CHR$(27) CHR$(65) CHR$(4);
24000 MULTIPLIER=130/RANGE
24100 OFFSET=MINLOW*MULTIPLIER-1
24200 AV=INT(MULTIPLIER*AVERAGE-OFFSET)
24300 MFND=AVERAGE:MFRATE=ANLMFR/255
24400 GOSUB 41000
24500 IF EOF(1) THEN 27700' ---------plot price data - C = 1 or 2------------
24600 MFND=MFND+MFND*MFRATE
24700 IF MFND>MAXHIGH THEN MFND=MAXHIGH
24800 MF=INT(MULTIPLIER*MFND-OFFSET)
24900 INPUT #1, DAT$,VOL,HIGH,LOW,CLSE
25000 IF HIGH=0 THEN HI=AV:GOTO 25200
25100 HI=INT(MULTIPLIER*HIGH-OFFSET)
25200 IF CLSE=0 THEN CL=AV:GOTO 25400
25300 CL=INT(MULTIPLIER*CLSE-OFFSET)
25400 IF LOW=0  THEN LO=AV:GOTO 25800
25500 LO=INT(MULTIPLIER*LOW-OFFSET)
25600 IF LO<40 THEN TEXT=1
25700 IF HI>90 THEN TEXT=0
25800 GOSUB 10100 ' decompose date
25900 GOSUB 10800 ' get DAYNAME$
26000 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." AND TEXT=0 THEN LPRINT STRING$(27," ");:GOTO 26300
26100 TEXT$=DAYNAME$+" "+MTH$(M)+" "+D$+", "+Y$+" ####.###"
26200 IF TEXT=0 THEN LPRINT USING TEXT$;CLSE;
26300 FOR N=1 TO 132:GRAPH$(N)=" ":NEXT
26400 IF HIGH=0 AND LOW=0 AND CLSE=0 THEN GRAPH$(AV)="A":GOTO 27300
26500 FOR N=LO TO HI:GRAPH$(N)="#":NEXT
26600 IF HI<AV THEN FOR N=HI TO AV:GRAPH$(N)="-":NEXT
26700 IF AV<LO THEN FOR N=AV TO LO:GRAPH$(N)="-":NEXT
26800 GRAPH$(AV)="A"
26900 GRAPH$(MF)="M"
27000 GRAPH$(LO)="L"
27100 GRAPH$(HI)="H"
27200 GRAPH$(CL)="C"
27300 IF TEXT=0 THEN FOR N=28 TO 132:LPRINT GRAPH$(N);:NEXT:LPRINT:GOTO 24500
27400 FOR N=1 TO 100:LPRINT GRAPH$(N);:NEXT
27500 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." THEN LPRINT:GOTO 24500
27600 LPRINT USING TEXT$;CLSE:GOTO 24500
27700 LPRINT TIME$:CLOSE #1
27800 IF B=3 OR B=4 THEN LPRINT CHR$(12) ELSE LPRINT:LPRINT
27900 IF DD=3 THEN 34700
28000 IF AA>2 THEN 50600 ELSE KEY ON:END
28100 '----------------------------------------------------C = 3 or 5--------
28200 MINBID=65000!:MAXASK=0:SUMBID=0:DAYS=0
28300 IF EOF(1) THEN CLOSE #1:GOTO 29100' ------------determine scale-----------
28400 INPUT #1,ENDDATE$,VOLUME,BID,ASK,DUMP
28500 IF ASK=0 THEN 28700
28600 IF ASK>MAXASK THEN MAXASK=ASK
28700 IF BID=0 THEN 28300
28800 IF BID<MINBID THEN MINBID=BID
28900 SUMBID=SUMBID+BID:DAYS=DAYS+1
29000 GOTO 28300
29100 AVERAGE=SUMBID/DAYS
29200 RANGE=MAXASK-MINBID
29300 LOWER$="low":HIGHER$="high"
29400 IF C=3 THEN LOWER$="bid":HIGHER$="asked"
29500 IF C=5 THEN LOWER$="NAV":HIGHER$="offer"
29600 LPRINT CHR$(27) CHR$(70) CHR$(15) CHR$(27) CHR$(48);
29700 LPRINT "A = average " LOWER$ " price of all data plotted =";:LPRINT USING "####.###";AVERAGE;
29800 LPRINT "   The numbers to the right of the dates below are the daily " LOWER$ " prices."
29900 LPRINT "The lowest " LOWER$ " plotted is ";:LPRINT USING "####.###";MINBID;
30000 LPRINT ".  The highest " HIGHER$ " price plotted is ";:LPRINT USING "####.###";MAXASK;
30100 LPRINT ".  That high is ";:LPRINT USING "####.#";(MAXASK-MINBID)/MINBID*100;:LPRINT "% greater than that low."
30200 LPRINT CHR$(27) CHR$(45) CHR$(1);
30300 LPRINT " M = The value of money equal to the average " LOWER$ " value at the start of the plot, compounded daily at ";:LPRINT USING "###.##";ANLMFR*100;:LPRINT "%/yr."
30400 LPRINT CHR$(27) CHR$(45) CHR$(0);
30500 IF B=2 OR B=4 THEN LPRINT CHR$(27) CHR$(83) CHR$(INT(VAL(RIGHT$(TIME$,1))/5)) CHR$(27) CHR$(65) CHR$(4);
30600 MULTIPLIER=130/RANGE
30700 OFFSET=MINBID*MULTIPLIER-1
30800 AV=INT(MULTIPLIER*AVERAGE-OFFSET)
30900 MFND=AVERAGE:MFRATE=ANLMFR/255
31000 GOSUB 41000
31100 IF EOF(1) THEN 34300' ---------plot price data - C = 3 or 5------------
31200 MFND=MFND+MFND*MFRATE
31300 MF=INT(MULTIPLIER*MFND-OFFSET)
31400 INPUT #1, DAT$,VOL,BID,ASK,DUMP
31500 IF ASK=0 THEN AS=AV:GOTO 31700
31600 AS=INT(MULTIPLIER*ASK-OFFSET)
31700 IF BID=0  THEN BI=AV:GOTO 32100
31800 BI=INT(MULTIPLIER*BID-OFFSET)
31900 IF BI<40 THEN TEXT=1
32000 IF AS>90 THEN TEXT=0
32100 GOSUB 10100 ' decompose date
32200 GOSUB 10800 ' get DAYNAME$
32300 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." AND TEXT=0 THEN LPRINT STRING$(27," ");:GOTO 32600
32400 TEXT$=DAYNAME$+" "+MTH$(M)+" "+D$+", "+Y$+" ####.###"
32500 IF TEXT=0 THEN LPRINT USING TEXT$;BID;
32600 FOR N=1 TO 132:GRAPH$(N)=" ":NEXT
32700 IF ASK=0 AND BID=0 THEN GRAPH$(AV)="A":GOTO 33900
32800 FOR N=BI TO AS:GRAPH$(N)="#":NEXT
32900 IF AS<AV THEN FOR N=AS TO AV:GRAPH$(N)="-":NEXT
33000 IF AV<BI THEN FOR N=AV TO BI:GRAPH$(N)="-":NEXT
33100 GRAPH$(MF)="M"
33200 GRAPH$(AV)="A"
33300 GRAPH$(BI)="L"
33400 GRAPH$(AS)="H"
33500 IF C=3 THEN GRAPH$(BI)="B"
33600 IF C=5 THEN GRAPH$(BI)="N"
33700 IF C=3 THEN GRAPH$(AS)="K"
33800 IF C=5 THEN GRAPH$(AS)="O"
33900 IF TEXT=0 THEN FOR N=28 TO 132:LPRINT GRAPH$(N);:NEXT:LPRINT:GOTO 31100
34000 FOR N=1 TO 100:LPRINT GRAPH$(N);:NEXT
34100 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." THEN LPRINT:GOTO 31100
34200 LPRINT USING TEXT$;BID:GOTO 31100
34300 LPRINT TIME$:CLOSE #1
34400 IF B=3 OR B=4 THEN LPRINT CHR$(12) ELSE LPRINT:LPRINT
34500 IF DD=3 AND C=3 THEN 34700
34600 IF AA>2 THEN 50600 ELSE KEY ON:END
34700 '-----------------------------PLOT VOLUME DATA-------------------------
34800 LPRINT CHR$(27) CHR$(64) CHR$(14) CHR$(27) CHR$(45) CHR$(1) CHR$(15) DATE$ "/" TIME$ CHR$(18) CHR$(27) CHR$(69) "    VOLUME    " CHR$(27) CHR$(71) FILESPEC$ CHR$(27) CHR$(72) CHR$(27) CHR$(45) CHR$(0)
34900 IF B=3 OR B=4 THEN IF DD=3 THEN GOSUB 41000 ELSE GOSUB 40500' skipdays
35000 IF B=1 OR B=2 THEN IF DD=3 THEN OPEN FILESPEC$ FOR INPUT AS #1
35100 INPUT #1, STARTDATE$,MAXVOL,HIGH,LOW,CLSE
35200 IF EOF(1) THEN CLOSE #1:GOTO 35600
35300 INPUT #1, ENDDATE$,VOL,HIGH,LOW,CLSE
35400 IF VOL>MAXVOL THEN MAXVOL=VOL
35500 GOTO 35200
35600 LPRINT:LPRINT " V = the volume traded on the day.
35700 LPRINT CHR$(27) CHR$(70) CHR$(15) CHR$(27) CHR$(48);
35800 IF B=2 OR B=4 THEN LPRINT CHR$(27) CHR$(83) CHR$(INT(VAL(RIGHT$(TIME$,1))/5)) CHR$(27) CHR$(65) CHR$(4);
35900 MULTIPLIER=100/MAXVOL
36000 GOSUB 41000
36100 IF EOF(1) THEN CLOSE #1:GOTO 37400
36200 INPUT #1, DAT$,VOL,HIGH,LOW,CLSE
36300 VL=INT(MULTIPLIER*VOL)
36400 GOSUB 10100:GOSUB 10800' decompose date and get dayname
36500 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." THEN LPRINT STRING$(27," ");:GOTO 36900
36600 TEXT$=DAYNAME$+" "+MTH$(M)+" "+D$+", "+Y$+"#########"
36700 IF C=3 OR C=4 THEN VOL=VOL*100
36800 LPRINT USING TEXT$;VOL;
36900 FOR N=1 TO 102:GRAPH$(N)=" ":NEXT
37000 FOR N=1 TO VL:GRAPH$(N)="#":NEXT
37100 GRAPH$(VL)="V":GRAPH$(1)=CHR$(156)
37200 FOR N=1 TO 102:LPRINT GRAPH$(N);:NEXT
37300 LPRINT:GOTO 36100
37400 IF B=3 OR B=4 THEN LPRINT CHR$(12) ELSE LPRINT:LPRINT
37500 IF AA>2 THEN 50600 ELSE KEY ON:END
37600 ON ERROR GOTO 39100:NOFILE=0'  ------------GETFILE---------------------
37700 IF ERR=62 THEN PRINT "Bad file data. You are trying to read from the wrong file. Try again.":RESUME 37600
37800 PRINT:PRINT "The following files are on the disk.":FILES "*"+EXT$
37900 ON ERROR GOTO 0
38000 PRINT:PRINT "What is the filename of the one you want to use":INPUT "(if none type NONE)";FI$
38100 FILENAME$=""
38200 FOR N=1 TO LEN(FI$):LTR$=MID$(FI$,N,1)
38300 IF "a"<=LTR$ AND LTR$<="z" THEN LTR$=CHR$(ASC(LTR$)-32)
38400 FILENAME$=FILENAME$+LTR$
38500 NEXT N
38600 IF FILENAME$="NONE" THEN NOFILE=1:RETURN
38700 FILESPEC$=FILENAME$+EXT$
38800 ON ERROR GOTO 39100:OPEN FILESPEC$ FOR INPUT AS #1
38900 ON ERROR GOTO 0:RETURN
39000 '-----------------------disk error handling----------------------------
39100 IF ERR=24 THEN PRINT "No disk in drive? Device timeout.":GOTO 40400
39200 IF ERR=52 THEN PRINT "Bad file name. ":RESUME 38000
39300 IF ERR=53 AND ERL=37800 THEN PRINT "There are do files for this type of security on this disk.":NOFILE=1:RESUME 38900
39400 IF ERR=53 AND ERL=38800 THEN PRINT "The disk has no file by that name.:resume 23600
39500 IF ERR=57 THEN PRINT "I/O error. Try another disk.":GOTO 40400
39600 IF ERR=61 THEN PRINT "Disk full. Try another disk.":GOTO 40400
39700 IF ERR=64 THEN PRINT "Bad file name. ":RESUME 38000
39800 IF ERR=67 THEN PRINT "Too many files in directory. Try another disk to temoroarily save your data.":GOTO 40400
39900 IF ERR=68 THEN PRINT "Disk drive unavailable.":GOTO 40400
40000 IF ERR=70 THEN PRINT "You have write protected this disk!":GOTO 40400
40100 IF ERR=71 THEN PRINT "No disk in drive or door not closed.":GOTO 40400
40200 IF ERR=72 THEN PRINT "Disk Media Error. Try another disk.":GOTO 40400
40300 PRINT:PRINT "DISK PROBLEM ";:CLOSE:ON ERROR GOTO 0:KEY ON:END
40400 PRINT "Program will continue when problem is corrected.":LOCATE CSRLIN-2,1:RESUME
40500 DAYSS=0'    ----------------------------------------skipdays start-------
40600 IF EOF(1) THEN CLOSE #1:GOTO 40900
40700 INPUT #1, DUMP$:FOR N=1 TO 4: INPUT #1, DUMP:NEXT
40800 DAYSS=DAYSS+1:GOTO 40600
40900 IF B=3 THEN SKIP=DAYSS-80 ELSE SKIP=DAYSS-200
41000 OPEN FILESPEC$ FOR INPUT AS #1' -----------skipdays after first pass----
41100 IF SKIP<=0 THEN RETURN
41200 FOR SK=1 TO SKIP
41300 INPUT #1, DUMP$:FOR N=1 TO 4:INPUT #1, DUMP:NEXT N
41400 NEXT SK
41500 RETURN'    ----------------------------------------skipdays end---------
41600 '----------------------------------OPTIONS----------- C = 4 ------------
41700 MAXCAL=0:MAXPTT=0:MAXL=0:MINCAL=65000!:MINPTT=65000!:MINL=65000!
41800 IF EOF(1) THEN CLOSE #1:GOTO 43100' -----------determine scale--------
41900 INPUT #1,ENDDATE$,DUMP,CAL,PTT,CLSE
42000 IF CAL=0 THEN 42300
42100 IF CAL>MAXCAL THEN MAXCAL=CAL
42200 IF CAL<MINCAL THEN MINCAL=CAL
42300 IF PTT=0 THEN 42600
42400 IF PTT<MINPTT THEN MINPTT=PTT
42500 IF PTT>MAXPTT THEN MAXPTT=PTT
42600 IF CLSE=0 THEN 43000
42700 LLL=CLSE-CAL:TTT=CLSE+PTT
42800 IF LLL<MINL THEN MINL=LLL
42900 IF TTT>MAXT THEN MAXT=TTT
43000 GOTO 41800
43100 RANGECAL=MAXCAL-MINCAL
43200 RANGEPTT=MAXPTT-MINPTT
43300 RANGEUUU=MAXT-MINL
43400 LPRINT CHR$(27) CHR$(70) CHR$(15) CHR$(27) CHR$(48);
43500 LPRINT "P = PUT price.  C = CALL price.   U = closing price of underlying stock. L = U - C.  T = U + P.   S = strike price (from FILENAME).
43600 LPRINT "   The numbers to the right of the dates below are L  and T in that order.  P, C, & L-U-S-T scales are completely independent.
43700 LPRINT "The lowest PUT is:";:LPRINT USING "####.###";MINPTT;
43800 LPRINT ".  The highest PUT is:";:LPRINT USING "####.###";MAXPTT;
43900 LPRINT ".  This is a ";:LPRINT USING "####.#";(MAXPTT-MINPTT)/MINPTT*100;:LPRINT "% increase or a ";:LPRINT USING "####.#";(MAXPTT-MINPTT)/MAXPTT*100;:LPRINT "% decrease."
44000 LPRINT CHR$(27) CHR$(45) CHR$(1);
44100 LPRINT "The lowest CALL is:";:LPRINT USING "####.###";MINCAL;
44200 LPRINT ".  The highest CALL is:";:LPRINT USING "####.###";MAXCAL;
44300 LPRINT ".  This is a ";:LPRINT USING "####.#";(MAXCAL-MINCAL)/MINCAL*100;:LPRINT "% increase or a ";:LPRINT USING "####.#";(MAXCAL-MINCAL)/MAXCAL*100;:LPRINT "% decrease."
44400 LPRINT CHR$(27) CHR$(45) CHR$(0);
44500 IF B=2 OR B=4 THEN LPRINT CHR$(27) CHR$(83) CHR$(INT(VAL(RIGHT$(TIME$,1))/5)) CHR$(27) CHR$(65) CHR$(4);
44600 MULTIPLCAL=105/RANGECAL
44700 MULTIPLPTT=105/RANGEPTT
44800 MULTIPLUUU=105/RANGEUUU
44900 OFFCAL=MINCAL*MULTIPLCAL-2
45000 OFFPTT=MINPTT*MULTIPLPTT-2
45100 OFFUUU=MINL*MULTIPLUUU-2
45200 STRIKE=VAL(RIGHT$(FILENAME$,2))
45300 ST=INT(MULTIPLUUU*STRIKE-OFFUUU)
45400 GOSUB 41000
45500 CL=INT(MULTIPLUUU*CLSE-OFFUUU)
45600 CA=INT(MULTIPLCAL*CAL-OFFCAL)
45700 LLL=CLSE-CAL
45800 LL=INT(MULTIPLUUU*LLL-OFFUUU)
45900 PT=INT(MULTIPLPTT*PTT-OFFPTT)
46000 TTT=CLSE+PTT
46100 TT=INT(MULTIPLUUU*TTT-OFFUUU)
46200 IF EOF(1) THEN 50200' ---------plot price data - C = 4 OPTIONS---------
46300 INPUT #1, DAT$,DUMP,CAL,PTT,CLSE
46400 IF CLSE=0 THEN 46600
46500 CL=INT(MULTIPLUUU*CLSE-OFFUUU)
46600 IF CAL=0 THEN 47100
46700 CA=INT(MULTIPLCAL*CAL-OFFCAL)
46800 IF CLSE=0 THEN 47100
46900 LLL=CLSE-CAL
47000 LL=INT(MULTIPLUUU*LLL-OFFUUU)
47100 IF PTT=0 THEN 47700
47200 LLL=CLSE-CAL
47300 PT=INT(MULTIPLPTT*PTT-OFFPTT)
47400 IF CLSE=0 THEN 47700
47500 TTT=CLSE+PTT
47600 TT=INT(MULTIPLUUU*TTT-OFFUUU)
47700 GOSUB 10100 ' decompose date
47800 GOSUB 10800 ' get DAYNAME$
47900 IF B=2 OR B=4 THEN IF DAYNAME$<>"FRI." THEN LPRINT STRING$(21," ");:GOTO 48300
48000 TEXT$=MTH$(M)+" "+D$+"###.###"
48100 IF CAL=0 AND PTT=0 AND CLSE=0 THEN LLL=0:TTT=0
48200 LPRINT USING TEXT$;LLL;:LPRINT USING "###.###";TTT;
48300 FOR N=1 TO 132:GRAPH$(N)=" ":NEXT
48400 IF CAL=0 AND PTT=0 AND CLSE=0 THEN LPRINT:GOTO 46200
48500 IF CAL=0 THEN 48700
48600 FOR N= LL TO CL:GRAPH$(N)="-":NEXT
48700 IF PTT=0 THEN 48900
48800 FOR N= CL TO TT:GRAPH$(N)="+":NEXT
48900 GRAPH$(ST)="S"
49000 IF PTT=0 THEN 49200
49100 GRAPH$(TT)="T"
49200 IF CAL=0 THEN 49400
49300 GRAPH$(LL)="L"
49400 GRAPH$(CL)="U"
49500 IF PTT=0 THEN 49700
49600 GRAPH$(PT-1)="#":GRAPH$(PT)="P":GRAPH$(PT+1)="#"
49700 IF CAL=0 THEN 49900
49800 GRAPH$(CA-1)="#":GRAPH$(CA)="C":GRAPH$(CA+1)="#"
49900 GRAPH$(0)=CHR$(156)
50000 FOR N=0 TO 109:LPRINT GRAPH$(N);:NEXT
50100 LPRINT :GOTO 46200
50200 LPRINT TIME$:CLOSE #1
50300 IF B=3 OR B=4 THEN LPRINT CHR$(12) ELSE LPRINT:LPRINT
50400 IF AA>2 THEN 50600 ELSE KEY ON:END
50500 '----------------------------READ SEQUENCE FILE------------------------
50600 IF EOF(3) THEN CLOSE #3:KEY ON:END
50700 INPUT #3, FI$
50800 FILESPEC$=""
50900 FOR N=1 TO LEN(FI$):LTR$=MID$(FI$,N,1)
51000 IF "a"<=LTR$ AND LTR$<="z" THEN LTR$=CHR$(ASC(LTR$)-32)
51100 FILESPEC$=FILESPEC$+LTR$
51200 NEXT N
51300 SECTYPE$=RIGHT$(FILESPEC$,4)
51400 NAMELENGTH=INSTR(FILESPEC$,".")-1
51500 FILENAME$=LEFT$(FILESPEC$,NAMELENGTH)
51600 IF AA=3 THEN 52400
51700 EXT$=SECTYPE$
51800 IF EXT$=".DJA" THEN C=1
51900 IF EXT$=".NYS" THEN C=2
52000 IF EXT$=".OTC" THEN C=3
52100 IF EXT$=".OPT" THEN C=4
52200 IF EXT$=".MUT" THEN C=5
52300 OPEN FILESPEC$ FOR INPUT AS #1:GOTO 21300
52400 IF SECTYPE$=EXT$ THEN 52300 ELSE 50600
52500 OPEN "PLTSTKFL.DOC" FOR INPUT AS #1 '-------------READ DOCUMENTATION-----
52600 PRINT:PRINT:PRINT:PRINT
52700 FOR N=1 TO 20
52800 IF EOF(1) THEN ENDDOC=1:GOTO 53200
52900 LINE INPUT #1, DOCULINE$
53000 PRINT DOCULINE$
53100 NEXT N
53200 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT "Press any key to continue except <Esc>, which will the program.                ";:COLOR 7,0:LOCATE LIN,1
53300 X$=INKEY$:IF X$="" THEN 53300 ELSE IF X$=CHR$(27) THEN 17200 ELSE 53400
53400 LIN=CSRLIN:LOCATE 25,1:COLOR 0,7:PRINT STRING$(79," ");:COLOR 7,0:LOCATE LIN,1
53500 IF ENDDOC THEN CLOSE #1:ENDDOC=0:PRINT:PRINT:PRINT:PRINT "END OF DOCUMENTATION FILE":PRINT:PRINT:GOTO 14200
53600 GOTO 52700
65000 '         SAVE"pltstkfl.bas",a
```
{% endraw %}

## PLTSTKFL.DOC

{% raw %}
```
                       DOCUMENTATION FOR PLTSTKFL.BAS

                          Copyright 1983 BY Michael Csontos
                                            3228 Livonia Center Road
                                            Lima, New York 14485
                                            January 4, 1983


                              INTRODUCTION

      This  program  is  intended for use in making printer plots of securities
(stock,  bonds,  options,  mutual  funds)  from  files  created  by the program
MAKSTKFL.BAS  by  the  above author. It contains printer commands for the EPSON
MX-80  printer.  The  special  GRAPHTRACK  feature used is SCRIPT (subscript or
superscript) for high resolution plots. Medium resoluton plots should work with
the IBM version of the printer.

      Several  files  which  should be on the same disk with this program. They
are:

           PLTSTKFL.DOC      which you are now reading
           PLTSEQFL.DAT      a list of files you want plotted automaticly
           PLTSEQFL.ALL      a list of all files to edit to PLTSEQFL.DAT
           MONEYMKT.INT      containing the inerest rate to be used in plots
           ????????.DJA      data file created by MAKSTKFL
           ????????.NYS      "    "    "       "  "
           ????????.OTC      "    "    "       "  "
           ????????.OPT      "    "    "       "  "
           ????????.MUT      "    "    "       "  "

      The  program will run without these files, except that of course at least
one data file must be present for it to do anything.

      The plots may be continuous over all of the data in the files or adjusted
for  the  most  recent  data  that  will  fit on an eleven inch page. Each plot
consists of a heading giving the date and time plotted, the type of data (price
or  volume)  and  some  statistics  about  the data (average price, lowest low,
highest high, percent range).

      No  scale is generated for the plots. Instead the data is referenced to a
line based on the average closing price for the security and the daily price is
printed  with  the  date on each line (or for every Friday in high resolution).
The placement of the date and price is adjusted so that the price plot can take
full advantage of the width of the paper.

      The  purpose  of this type of plot is to emphasize price movements rather
than  to  show the value of a stock. The presence of the average value baseline
with  the money market growth plot makes it easy to see when it would have been
a good time to have bought or to have sold.

                             PROGRAM OPERATION

      When  the  program  is  run  it first checks for the presence of the file
MONEYMKT.INT.  This  file  should contain a single number, the interest rate in
percent,  to  be  used in all but options plots to show a compartatve growth in
the  average  price  of  the  security  over  the time plotted. The file may be
created or revised in DOS with EDLIN.

      If  the file MONEYMKT.INT is missing the program will ask you to enter an
interest  rate for use for the current run. If you enter 0 or just press enter,
the program will assume a rate of 10%

      The   program   next   checks   for  the  presence  of  PLTSEQFL.DAT  and
PLTSTKFL.DOC.  If they are missing, the menu options requiring them are skipped
in the displays to follow.

                             MENUS

      Four  menus  are  produced  by the program. The first selects the program
function.  The  second  selects the type of plot. The third selects the type of
security.  And  the fourth selects the data to be plotted. The <Esc> key may be
pressed  at any of these to abort the program. Menus will be skipped if they do
not apply to the function selected.

                             FIRST MENU - FUNCTION

           (1):  DOCUMENTATION

      This  appears  if the file PLTSTKFL.DOC is present on the active disk. It
allows  you  to  read the documentation file without exiting BASIC or reloading
the program.

           (2):  SINGLE FILE

      In this mode the program will ask you to specify a single securities file
and  then will plot the data for that file, returning to BASIC when the plot is
completed.

           (3): SINGLE TYPE

      If  PLTSEQFL.DAT  is  present, this mode will ask you to select a type of
security  and  then  plot  all  files  listed  in PLTSEQFL.DAT for that type of
security.

           (4): ALL FILES

      All  files  listed  in  PLTSEQFL.DAT  will  be  plotted.  The  securities
selection menu will be skipped.

                             SECOND MENU - PLOT

      Selections  (1):  and (2): are for a continuous plot. The plot will start
at  the  beginning  of  the  file  and run to the end. No provision is made for
skipping  perforations  on  fan-fold  forms.  (I  use  teletype paper.) If your
printer's  bit  switch  is  set for "1 inch skip over perf" you may get gaps in
your  plots.  This  may also cause trouble in the 11 inch page mode, since this
program  makes  full  use  of  the  page.  A space of two lines is left between
successive  plots  in  this mode.

      Selections  (3):  and  (4):  limit  the  plot to an eleven inch page. The
program  determines the number of entries in the data file, then plots the last
80  of  them  in  medium  resolution  mode, or the last 200 of them in the high
resolution mode. In order to obtain this much data per page the spacing between
pages  is  about 1/2 inch. Therefore align fan-fold paper carefully and be sure
printer  bit  switch SW2-4 in the EPSON is off (its normal position). The paper
is advanced to the top of the next form at the end of each plot.

      Selections  (1):  and (3): use compressed print and 1/8 inch line spacing
to  produce plots with a resolution of 1/130 and eighty days per page. The date
and relevant price or volume data are printed on each line.

      Selections  (2): and (4): use the EPSON's compressed script mode to print
130  points per line on a 1/18 inch line for 200 lines per page. Because of the
overlapping of lines, the price or volume data is printed only for Fridays. The
script  type  (superscript  or  subscript) is randomized for each run using the
TIME$ function to equalize wear on the print head and ribbon.

      .
                             THIRD MENU - SECURITY TYPE

      Selection of the type of security is necessary for the format of the plot
since  the  data  files present different types of information and in different
order for various markets. All of the formats are based on listings in The Wall
Street Journal.

           (1):   Dow Jones Averages

      This   is  for  the  entries  from  the  tables  of  30  INDUSTRIALS,  20
TRANSPORTATION,  15  UTILITIES  and  65 STOCKS COMPOSITE AVERAGE data. The data
file format is actually the same as for selection (2) but this selection allows
for handling the larger volumes and prices in the plot.

      The data file format is "date",volume,high,low,close.

           (2):   New York Stock Exchange

      Covers  the  data for the NYSE-Composite Transactions as well as New York
Exchange  Bonds  and  Amex-Composite  Tranactions. On each line are plotted the
daily  low,  high,  close,  average close, and the value that the average would
have  become  since  the beginning of the plot at the market interest rate. The
space  between the low and the high is darkened with "#" symbols and the offset
of this bar from the average is filled with "-"'s

      The data file format is "data",volume,high,low,close.

           (3):  Over the Counter Markets

      This  format  covers  NASDAQ  quotes of the Over-the-Counter Markets. The
plot  is  similar  to selection (2): except that there is no closing price. The
spread between the bid and asked prices is filled with "#"'s. 

      The data file format is "date",volume,bid,asked,0.

           (4):  Options

      These files contain data for listed options. 

      It  is  important  for  options files that the last two characters of the
filename  be  the  strike price of the option if this data is to be used by the
program   PLTSTKFL.   An  example  is  BETHJA35  where  the  filespec  will  be
BETHJA35.OPT.  In  plotting  options  data,  PLTSTKFL  extracts  the  last  two
characters in the filename for use as a baseline in the plot. 

      The  plot  for  options is quite complex. The put and the call prices are
scaled  independantly  to  fill  the  available  space  and  plotted  without a
baseline.  They are bracketed by "#" symbols to make them stand out. The strike
price  is  extracted  from the file name and is used as a baseline for relative
price comparisons.

      Two  new data points are generated by subtracting the call price from the
closing  price  and  by  adding  the put price to the closing price in the data
file.  These  numbers  are  listed, with the date, on the left of the plot. The
resulting  low,  strike, close, and high prices are scaled to fit the available
space and plotted.

      The  space between the low and the close is filled with "-"'s and between
close  and  high  with  "+"'s to tie them together. A study of this plot should
provide considerable information about the behavior of options.

      The data file format is "date",0,call,put,close.

           (5):  Mutual Funds

      This  format  is  the  same as for Over-the Counter stocks except the Net
Asset  Value  and  Offer  Price  are  plotted,  and  there  is  no  volume data
available.

      The data file format is "date",0,nav,offer,0

      The  data  file formats above are what you will see if you list the files
with  DOS  [type]  or  EDLIN.  The  null  (0)  entries are used to allow common
subroutines to be used for search or conversion of all of the data types.

                             FOURTH MENU - DATA TO BE PLOTTED

      For  most  types  of  files both price and volume data is available. This
menu lets you decide which you want plotted. 

                                   -

      Printing  will  start  after  the  last  menu selection is made. There is
considerable  disk  activity and calculation with this program. Therefore speed
will  be  considerably  improved with any or all of printer buffers, ram memory
disk simulation, or a compiled version of this program.

                             DATA FILE GENERATION

      This  program is intended to be used with the program MAKSTKFL.BAS by the
same  author.  However  you can create data files with EDLIN or other editor or
write  a simple high level language yourself. The files are sequential with the
folowing format on each line"

           "date",data-AA,data-BB,data-CC,data-DD

      The  location  of  the  values for each type of file is shown under THIRD
MENU above. The date is a string variable in the form used by the BASIC [TIME$]
command. The data is fixed point. An EDLIN listing would appear as follows:

           1:*"04-07-83",3598,24.5,21.25,23.875
           2: "04-08-83",4259,26.25,23.125,25
           3: "04-11-83",5983,27.875,25.625,26.625

      With  this  information  you  may be able to use this program without any
other software.


                             MISCELLANEOUS

      At the time of this writing this program is still in a fairly rough form.
Most  work  is  needed  in  the  error  recovery routines from disk and printer
faults.  Hwever  since the software only opens files for input, there is little
likelyhood  of  loss  of  data  and  the  program  can always be restarted with
<Ctrl>+<Break>. 

      Revisions  and companion programs will be made available through the user
groups that distribute this program.

                             ---***---



      The program PLTSTKFL.BAS and its associated files are made freely
available for non-exclusive distribution by the Picture City Personal Computer
Programmers' Club and through exchange with other users groups as long as
(PC)^3 and the author are fully credited.

```
{% endraw %}

## SCHWABCM.BAS

{% raw %}
```bas
1 KEY OFF:CLS
10 ' The program "schwabcm.bas" to calculate the stock commissions charged by
20 ' Charles Schwab & Co., Inc. based on their rate card of February 1982.
30 '
40 ' The rates are:    Transaction               Rate
50 '                    $0 - 3000               $18+1.2%
60 '                 $3001 - 7000               $36+0.8%
70 '                $7001 - 56000               $57+0.3%
80 '
90 ' Minimum:  $0.08 per share for 1st 600 shares
100 '           $0.04 per share for each share thereafter.
110 '
120 ' Maximum:  $0.45 per share for orders of 100 or more shares.
130 '
140 FIRSTBREAK=3000
150 SECONDBREAK=7000
160 THIRDBREAK=56000!
170 FIRSTFIXED=18
180 SECONDFIXED=36
190 THIRDFIXED=57
200 FIRSTRATE=0.012
210 SECONDRATE=0.008
220 THIRDRATE=0.003
230 MINBREAK=600
240 FIRSTMINCHARGE=0.008
250 SECONDMINCHARGE=0.004
260 MAXBREAK=100
270 MAXCHARGE=0.45
280 '-----------------data input------------------------------------
290 PRINT " If you tell this program the number of shares of stock you want to
300 PRINT " buy and the price of the stock, it will give you the commission
310 PRINT " charged by Charles Schwab & Co., Inc.
315 PRINT
320 INPUT " Number of shares";NUMBEROFSHARES
325 IF NUMBEROFSHARES<>INT(NUMBEROFSHARES) THEN PRINT "Number of shares must be an integer.":GOTO 315
330 PRINT "
335 ON ERROR GOTO 370
340 INPUT " Price of the stock";PRICE
345 ON ERROR GOTO 0
350 TRANSACTION=NUMBEROFSHARES*PRICE
360 IF TRANSACTION>FIRSTBREAK THEN 500 ELSE 400
370 PRINT "Price must be entered as pp.ppp instead of as a fraction and without a $ sign.":RESUME 330
400 BASECOMMISSION=FIRSTFIXED+FIRSTRATE*TRANSACTION
450 GOTO 1000
500 IF TRANSACTION>SECONDBREAK THEN 700 ELSE 600
600 BASECOMMISSION=SECONDFIXED+SECONDRATE*TRANSACTION
650 GOTO 1000
700 IF TRANSACTION>THIRDBREAK THEN 900 ELSE 800
800 BASECOMMISSION=THIRDFIXED+THIRDRATE*TRANSACTION
850 GOTO 1000
900 PRINT:PRINT " The transaction cost is $"TRANSACTION". Over $56,000 principal amount the
910 PRINT "commission charge is 72% below fixed rates in effect prior to 5/1/75 but not
920 PRINT "less than $225.
930 GOTO 10000
1000 IF NUMBEROFSHARES>MINBREAK THEN 1200 ELSE 1100
1100 MINCOMMISSION=NUMBEROFSHARES*FIRSTMINCHARGE
1110 GOTO 2000
1200 MINCOMMISSION=MINBREAK*FIRSTMINCHARGE+(NUMBEROFSHARES-MINBREAK)*SECONDMINCHARGE
2000 IF NUMBEROFSHARES>=MAXBREAK THEN MAXCOMMISSION=NUMBEROFSHARES*MAXCHARGE ELSE MAXCOMMISSION=65000!
3000 IF BASECOMMISSION>MINCOMMISSION THEN COMMISSION=BASECOMMISSION ELSE COMMISSION=MINCOMMISSION:PRINT:PRINT "This is based on the minimum commission rate."
3010 IF BASECOMMISSION>MAXCOMMISSION THEN COMMISSION=MAXCOMMISSION:PRINT:PRINT "This is based on the maximum commission rate."
4000 PRINT:PRINT "The principal amount is $"TRANSACTION".
4010 PRINT " The commission is $"COMMISSION".
4020 PRINT " The total amount is $"TRANSACTION+COMMISSION".
4025 PRINT " The commission is "COMMISSION/TRANSACTION*100"% of the principal amount.
4027 PRINT " The commission is $"COMMISSION/NUMBEROFSHARES" per share.
4030 GOTO 10000
10000 PRINT:PRINT:PRINT "Press any key to enter new data except <Esc> which will end the program.
10010 X$=INKEY$:IF X$="" THEN 10010 ELSE IF X$=CHR$(27) THEN 20000 ELSE CLS:GOTO 315
20000 CLS:KEY ON:END
65000 '         SAVE"schwabcm"
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0040

     Volume in drive A has no label
     Directory of A:\

    MAKSTKFL BAS     23808   1-04-83   9:04p
    MAKSTKFL DOC     16206   1-04-83   8:14p
    TRANSFER BAT       689  11-26-82  11:22p
    UPDSTKFL ALL       266  12-15-82  11:10p
    UPDSTKFL DAT       266  12-15-82  11:10p
    PLTSEQFL DAT       266   1-04-83  12:09p
    PLTSEQFL ALL       266   1-04-83  12:09p
    PLTSTKFL BAS     18560   1-04-83   9:58p
    PLTSTKFL DOC     12211   1-04-83   8:15p
    MONEYMKT INT         7   1-04-83  10:32p
    AELPW    NYS      3968   1-04-83  12:02p
    INDUST   DJA      4992   1-04-83  12:02p
    FLIGTSF  NYS      3840   1-04-83  12:07p
    AUTODT   NYS      3840   1-04-83  12:04p
    DISNEY   NYS      4096   1-04-83  12:06p
    GANNETT  NYS      3712   1-04-83  12:08p
    AMPINC   NYS      3958   1-04-83  12:59p
    GENEL    NYS      3927   1-04-83   1:00p
    BOEING   NYS      3968   1-04-83  12:04p
    CORNG    NYS      3968   1-04-83  12:06p
    PUTNAMHL MUT      3200   1-04-83  12:10p
    ESKOD    NYS      3968   1-04-83  12:07p
    GMOT     NYS      4119   1-04-83   1:02p
    AT&T     NYS      4352   1-04-83  12:03p
    DELTAA   NYS      3968   1-04-83  12:06p
    DUPONT   NYS      3968   1-04-83  12:07p
    COMSHARE OTC      3200   1-04-83  12:09p
    KELLYSER OTC      2944   1-04-83  12:09p
    GEMAR70  OPT      3185   1-04-83   1:03p
    SCHWABCM BAS      3072   2-24-83   1:47p
    CRC      TXT      1968  11-09-84   9:17a
    CRCK4    COM      1536  10-21-82   7:54p
           32 file(s)     152294 bytes
                            1024 bytes free
