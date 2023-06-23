---
layout: page
title: "PC-SIG Diskette Library (Disk #192)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0192/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0192"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HEALTH RISK"

    A PC conversion of the CDC Health Risk appraisal program that helps
    medical and health-care professionals -- doctors, nurses, public health
    administrators, etc. -- continue to deliver quality care.
    
    A questionnaire helps you assess and evaluate risks to the patient's
    health.  This program should only be used by qualified health
    professionals who have the experience and training to adequately
    interpret individual results.
    
    For further information on HEALTH RISK, contact the Center for Disease
    Control directly in Atlanta, Georgia.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #192, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  HRAINP1 .EXE         CRC = 55 91

--> FILE:  HRA1    .EXE         CRC = 2B 12

--> FILE:  HRADATA .            CRC = 5A 62

--> FILE:  PRINTSTY.            CRC = 15 42

--> FILE:  SYSTAB  .            CRC = E3 37

--> FILE:  DIATAB  .            CRC = 4E 46

--> FILE:  M1      .            CRC = 1D F5

--> FILE:  OWTAB   .            CRC = 04 19

--> FILE:  AGETAB  .            CRC = BF 1E

--> FILE:  TITLES  .            CRC = F9 3D

--> FILE:  RRSKFCT .            CRC = 32 3F

--> FILE:  EDT     .            CRC = 4C 36

--> FILE:  RM2     .            CRC = 3D F1

--> FILE:  RWTTAB  .            CRC = E2 0A

--> FILE:  RTOP12  .            CRC = 5D 85

--> FILE:  RDTH    .            CRC = 89 19

--> FILE:  RPRTHED .            CRC = 68 02

--> FILE:  RSMOHED .            CRC = 9C 5A

--> FILE:  HDATA   .            CRC = 93 2E

--> FILE:  HRADOC  .TXT         CRC = 7D 29

--> FILE:  BATCH   .DOC         CRC = 3A 81

--> FILE:  HDATA   .BAK         CRC = BF 35

--> FILE:  HRAPRINT.EXE         CRC = EC A9

--> FILE:  SMOKWHY2.EXE         CRC = 2A 1C

--> FILE:  SMOKE   .            CRC = 09 76

--> FILE:  SYSINFO .SYS         CRC = 9D 91

 ---------------------> SUM OF CRCS = 4D 70

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## HRADOC.TXT

{% raw %}
```





						Arden L. Ashton Jr. MD
						1521 Kiowa
						Leavenworth, Kansas 66048
						(913)682-9116

Dear Doctors

	I hope the enclosed copy of the IBM PC conversion of the Center For
Disease Control health risk appraisal will help you in delivering quality
care. I have found it very useful in my patient education program.  I feel
my patients are more likely to change there health habits if I can show them
how this will benefit their long term health.

	This program is designed to run on the IBM personal computer with
at least 128k of random access memory, a 80 column display, one double
sided floppy diskette and a printer.  The program can be ran on a hard disk
or completly in a "RAM" disk mode (these will speed up the program).
The program and documentation can be copied and distributed as long as
it is not for commercial gain and the copyright notice is not altered.	We
recommend that the program only be use by qualified health professionals
who have the experience and training to adequately interpret individual
results.  Further information on the program can be obtained directly from
the Center for Disease Control in Atlanta, Georgia.

	The program is currently designed to run off a single double sided
disk drive.  The program is distributed on two single sided diskettes (a
latter version will allow the program to run off two single sided disk
drives).

 GETTING STARTED
	First copy all the files from the distribution diskettes to a newly
formated double sided diskette.  Store the distribution diskettes in a safe
place and use the diskette you made as your working diskette. (NOTE: do NOT use
the diskcopy command in making your copy of the program;  rather use the
COPY command with the global file symbols, i.e. COPY *.*)   You should now have
a copy of the following files on your diskette:

	   HRAINP1  EXE    52992   2-23-83  11:57a-- interactive input module
	   HRA1     EXE    63744   1-21-83   8:52p-- main hlth risk program
	   HRAPRINT EXE    24832   1-21-83   8:21p-- program to set up printer

	   SYSTAB	     501   7-27-82   6:26p --- data tables
	   DIATAB	     501   7-27-82   5:51p	 "    "
	   M1		    1920   7-27-82   5:26a	 "    "
	   OWTAB	     947   7-24-82		 "    "
	   AGETAB	    2250   7-24-82		 "    "
	   TITLES	    1148  10-18-82   7:09p	 "    "
	   RRSKFCT	     384   8-03-82  10:47p	 "    "
	   EDT		     361   8-03-82  10:37p	 "    "
	   RM2		    3200   8-06-82   1:48p	 "    "
	   RWTTAB	    1152   7-27-82   7:37a	 "    "
	   RTOP12	    7424  10-23-82   4:09p	 "    "
	   RDTH 	   14848   7-27-82   7:57a	 "    "
	   RPRTHED	    5376   8-04-82  12:43a	 "    "
	   RSMOHED	    1280   8-06-82   8:29p	 "    "

	   HDATA	     ???   ?-??-83   6:26p --active pt. data
	   HRADATA	     ???   ?-??-83   ?:??a --archival file
	   PRINTSTY	     128   1-21-83   7:56p --printer parameters
	   HRADOC.TXT				   --documentation

	Before getting started let us first see how the program basically
works.	We may start the program in either an interactive mode or a batch
mode.  In the batch mode we would type in HRA1 (enter to the system prompt).
The main health risk program is then loaded and it automaticaly looks for
patient data in the file named "HDATA".  It completes the first patient's
appraisal then returns to the file "HDATA" to see if any other patients are
listed. If another patient's data is found, it does his risk appraisal and again
returns to "HDATA" looking for another patient's data.  After all the patients
have been done in "HDATA", it automatically goes into the interactive data input
program "HRAINP1".

    This interactive program DESTROYES the old HDATA and writes
the new patients information to the diskette in a completely new HDATA file.
The program adds the current patients data to an archival file HRADATA
(this file was designed to be used with future programs which would allow you
to go back and analysis the demographics etc. of the patient's data).  After
the participant has successfully entered his responses the program automatically
goes to the health appraisal program.

     The only other program you need to be aware of is the program to set up
your printer.  You can enter the printer control codes for your printer (i.e.
compressed print, double strike, etc.) and the number of copies of each print-
out you want. To start this program all you need to do is type HRAPRINT (enter
to the DOS prompt.  The default print codes in the distribution diskette are
0,0,0 (null codes) and one copy of the printout.

     You can now start working with the programs and see how they work in
your environment. I would recommend initially running the sample cases.  First
make sure your printer is on and the paper is set to the top of the form.
You enter the command HRA1 <enter to the DOS prompt. (<enter= hit return key).
The program will now do the risk appraisal for 3  patients and then automati-
cally go into the interactive data entry program. If you should want to stop
the program before it is completed you can enter the "ESC" key. The program
periodically looks for this key and will stop execution (depending where you
are in the program, it can take several minutes).

     Once you have gone throught the example cases and an interactive session,
you may want to try the program to set up the control codes for your printer.
The program is started by entering the command HRAPRINT <enter to the DOS
prompt.  The program will take you through the program step by step to store
the printer control codes for your printer. After you have successfully done
this every time a new risk appraisal is to be printed, the control codes will
automatically be sent to the printer.

APPENDIX A  BATCH OPERATION

	 In certain situations a batch mode of operation can be used to
increase the number of risk appraisals done in a given period of time.
In the interactive mode each participant can take a long time entering
his personal data. If time is not a consideration, this is not a problem;
but in other cases time is of the essence.  An experienced operator can
take the data from many questionnaires and put it into a file which can then
run in a batch mode.  In the batch mode the slowest part of the evaluation
generally is the printer.  The printer not only takes time printing out the
evaluation but it also holds up the computer from going to the next case.
(A print buffer can avoid this hang up allowing the computer to be calculating
the next case while the printer is printing the report for the last case)

	 The patient data file can be created in any text editor (not word
processors). Included in the DOS is an adaquate test editor named "EDLIN".
The "EDLIN" program can be copied to your working diskett and used to
create a batch file. The following steps can be followed to creat your file:

	   1. Call up the editor program along with the data file by typing
		A> EDLIN HDATA <enter
	   2. If the data file HDATA had not already been created on the disk,
		you would be told that this is a new file. You would then enter
		the letter "I" (insert) to the editor prompt "*".  You could
		now enter the data from the questionnaires in the exact form
		noted in example #1.  After entering the data for one case,
		you would hit the return key and start entering data for the
		next case.  After entering all the cases, you simultaneously
		hit the "CTRL" and "BREAK" keys.  The file is then saved by
		entering the letter "e" to the editor prompt "*".
	    3. If the data file Hdata  is on the disk, you can look at the
		first few lines of data by typing in the letter "L" to the
		editor prompt "*".  All the lines of the old file will
		have to be deleted before you save the new data. You can
		delete all the lines except the first one by entering
		"2,500 D" (delete lines 2 to 500) to the editor prompt "*".
	    4. Use the retained data in line 1 as a guide for entering
		the other cases. To start adding data to line #2 type
		"2 I" to the prompt. You can now start adding data to
		line two in the editor.  By retaining the old case in
		line #1 you can use it as a visual aid in making sure
		you enter the data in the right order and format. After
		you have entered all the cases you can delete the old
		case in line #1 by typing "1D" (delete #1) to the prompt.
	     5. Save the new data file by typing "E" to the prompt.


EXAMPLE  OF DATA FORMAT IN  HDATA IN THE EDLIN PROGRAM
     *1. SMITH,SMAL,J,111111111,1,1,55,6,7,222,3,0,0,0,0,2,0,0,0,3,22000,99,
2,3,2,3,2,2,2,2,123,77,211,1,1,1,2,3,3,3,0,0,0,0,0,2,2,3,1,1,LV,KS

EXAMPLE OF DATA (two cases) IN HDATA IN THE EDLIN PROGRAM
     *1. SMITH,SMAL,J,111111111,1,1,55,6,7,222,3,0,0,0,0,2,0,0,0,3,22000,99,
2,3,2,3,2,2,2,2,123,77,211,1,1,1,2,3,3,3,0,0,0,0,0,2,2,3,1,1,LV,KS
      2. SMITH,JOHN,R,222222222,1,1,55,6,7,222,3,0,0,0,0,2,0,0,0,3,22000,99,
2,3,2,3,2,2,2,2,123,77,211,1,1,1,2,3,3,3,0,0,0,0,0,2,2,3,1,1,LV,KS

NOTE: THE INTERACTIVE PROGRAM STORE EXTRA SPACES IN THE DATA FILE (EXAMPLE)
      *1. SMITH,NORM,J,1111111111, 1 , 1 , 55 , 6 , 8 , 222 , 3 , 0 , 0 ,
 , 0 , 2 , 0 , 0 , 0 , 3 , 22000 , 99 , 2 , 3 , 2 , 3 , 2 , 2 , 2 , 2 , 123 ,
 077 , 211 , 1 , 1 , 1 , 2 , 3 , 3 , 3 , 0 , 0 , 0 , 0 , 0 , 2 , 2 , 3 , 1 ,
 1 ,LV,KS


APPENDIXE B FORMAT OF ARCHIAVAL FILE
     The archival file HRADATA grows in size with each interactive case that
it processes.  It can become too large for the diskette and give a disk over-
flow error.  To provent this from happening you should periodically either
erase the the file HRADATA or copy it to another diskette.  The program to
analysis this data is currently not available but the following code showing
how it was created can help those who have some computer experience get to
the data.

OPEN "R",2,"HRADATA",193:FIELD #2,12 AS IDC$,4 AS I$( 1),177 AS D$
NREC=1
NREC=NREC+1
PRINT "NREC";NREC
RECS=NREC:LSET I$(1)=MKS$(RECS)
LSET IDC$="FIRST RECORD"
PUT #2,1
FIELD #2,12 AS IDC$,4 AS I$( 1),4 AS I$( 2),4 AS I$( 3),4 AS I$( 4),
    4 AS I$( 5),4 AS I$( 6) ,4 AS I$( 7),4 AS I$( 8),4 AS I$( 9),4 AS I$(10),
  4 AS I$(11),4 AS I$(12) ,4 AS I$(13),4 AS I$(14),4 AS I$(15),121 AS D$
LSET IDC$=IDCODE$
FOR J=1 TO 15:LSET I$(J)=MKS$(INPT!(J)):NEXT J
FIELD #2,72 AS D$  ,4 AS I$(16),4 AS I$(17),4 AS I$(18),4 AS I$(19),
   4 AS I$(20),4 AS I$(21) ,4 AS I$(22),4 AS I$(23),4 AS I$(24),4 AS I$(25),
  4 AS I$(26),4 AS I$(27) ,4 AS I$(28),4 AS I$(29),4 AS I$(30),61 AS D1$
FOR J=16 TO 30:LSET I$(J)=MKS$(INPT!(J)):NEXT J
FIELD #2,132 AS D$ ,4 AS I$(31),4 AS I$(32),4 AS I$(33),4 AS I$(34),
   4 AS I$(35),4 AS I$(36) ,4 AS I$(37),4 AS I$(38),4 AS I$(39),4 AS I$(40),
   4 AS I$(41),4 AS I$(42) ,4 AS I$(43),4 AS I$(44),3 AS COT$  ,2 AS STA$
FOR J=31 TO 44:LSET I$(J)=MKS$(INPT!(J)):NEXT J:LSET COT$=CO$:LSET STA$=ST$

					ARDEN L. ASHTON,JR
					M.D.

					PROGRAMED BY:
					JEFFREY BORBELY
					PRES. ADVANCED MEDICAL SYSTEMS, INC.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0192

     Volume in drive A has no label
     Directory of A:\

    AGETAB            2250   7-24-82
    BATCH    DOC      5760   7-29-83   2:22a
    CRC      TXT      1781  11-15-84   8:10a
    CRCK4    COM      1536  10-21-82   7:54p
    DIATAB             501   7-27-82   5:51p
    EDT                361   8-03-82  10:37p
    HDATA              256   5-25-84  12:55p
    HDATA    BAK       256  10-13-83  12:16a
    HRA1     EXE     63744   1-21-83   8:52p
    HRADATA          12160   5-25-84  12:55p
    HRADOC   TXT     11070   3-05-83   7:12p
    HRAINP1  EXE     52992   2-23-83  11:57a
    HRAPRINT EXE     25088   2-24-83   8:10a
    M1                1920   7-27-82   5:26a
    OWTAB              947   7-24-82
    PRINTSTY           128   1-01-80  12:01a
    RDTH             14848   7-27-82   7:57a
    RM2               3200   8-06-82   1:48p
    RPRTHED           5376   8-04-82  12:43a
    RRSKFCT            384   8-03-82  10:47p
    RSMOHED           1280   8-06-82   8:29p
    RTOP12            7424  10-23-82   4:09p
    RWTTAB            1152   7-27-82   7:37a
    SMOKE             5120   4-04-83   8:52p
    SMOKWHY2 EXE     54272  10-12-83  10:10p
    SYSINFO  SYS       512   4-26-83  12:05a
    SYSTAB             501   7-27-82   6:26p
    TITLES            1148  10-18-82   7:09p
           28 file(s)     275967 bytes
                           31744 bytes free
