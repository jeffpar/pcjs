---
layout: page
title: "PC-SIG Diskette Library (Disk #2290)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2290/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2290"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NG_MAKER PROGRAMMER'S TOOL"

    This program is designed to be used in conjunction with the Norton
    Guides, by Peter Norton Computing, and PC-Browse, by QuickSoft. It reads
    the ASCII source code for any program and extracts the comments which
    indicate the purpose, function, and expectations of the various building
    blocks of your program.
    
    NG_MAKER will combine and assemble these comments into a database file
    compatible with the Norton Guides or PC-Browse.  Once completed, you can
    call up either program and review at a glance the various building
    blocks that make up the program you are working on.
    
    The program is designed to work in cooperation with MicroSoft-
    compatible MAKE files that control the compilation of large projects.
    Using NG_MAKER will require that you make small changes in your MAKE
    file and to the source code for your project.  In each case, the changes
    are all "hidden" behind remark symbols, so they are completely invisible
    to your compiler/assembler.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2290.TXT

{% raw %}
```
Disk No: 2290                                                           
Disk Title: NG_MAKER PROGRAMMER'S TOOL                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: NG_Maker Programmer's Tool                               
Author Version: 2.7                                                     
Author Registration: $25.00                                             
Special Requirements: PC-Browse or Norton Guides.                       
                                                                        
This program is designed to be used in conjunction with the Norton      
Guides, by Peter Norton Computing, and PC-Browse, by QuickSoft. It reads
the ASCII source code for any program and extract the comments which    
indicate the purpose, function, and expectations of the various building
blocks of your program.                                                 
                                                                        
NG_MAKER will combine and assemble these comments into a database file  
compatible with the Norton Guides or PC-Browse. Once completed, you can 
call up either program and review at a glance the various building      
blocks that make up the program you are working on.                     
                                                                        
The program is designed to work in cooperation with MicroSoft-          
compatible MAKE files that control the compilation of large projects.   
Using NG_MAKER will require that you make small changes in your MAKE    
file and to the source code for your project. In each case, the changes 
are all "hidden" behind remark symbols, so they are completely invisible
to your compiler/assembler.                                             
                                                                        
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
║        <<<<  PC-SIG Disk #2290  NG_MAKER PROGRAMMER'S TOOL  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view description of Shareware, type:  TYPE SHAREWRE.TXT (Enter)      ║
║                                                                         ║
║ To print documentation, type:  COPY NG_MAKER.DOC PRN (press Enter)      ║
║                                COPY NG_SPLIT.DOC PRN (press Enter)      ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## NG_SPLIT.DOC

{% raw %}
```
/************************************************************************/
/*									*/
/*	ng_split - splits Norton Guides database into components	*/
/*									*/
/************************************************************************/
/*									*/
/*	ng_split, Copyright (C) 1988, by John C. Gordon			*/
/*	Norton Guides Splitter, 12 August 1988, ALL RIGHTS RESERVED	*/
/*									*/
/*	This program is meant for those of us who bought the Norton	*/
/*	Guides and were disappointed by the fact that we couldn't	*/
/*	modify the databases provided for our own purposes (by making	*/
/*	the fatal assumption that "customizing the Guides" included	*/
/*	the ability to customize the published databases).		*/
/*									*/
/*	I have been able to take the databases provided in the Guides,	*/
/*	"un-compile" (split) them into their component parts, and	*/
/*	then re-compile them back into a database using the NGC and	*/
/*	NGML utilities provided with the Guides.  The resulting		*/
/*	database is identical to the original using DOS 'comp'		*/
/*	(except for a six-character difference in the Microsoft C	*/
/*	database, which does not affect execution).			*/
/*									*/
/*	I have tested this program on the Norton Guides for Turbo C	*/
/*	Microsoft C.  Others have tested it on the other published	*/
/*	databases and some public domain ones.  If you find that it	*/
/*	does not work for some database, I will be glad to look at	*/
/*	the code to see if I can get it to work.  I will need a copy	*/
/*	of the database file, however (only for debugging - the		*/
/*	disk(s) will be returned with a copy of the new program).	*/
/*									*/
/*	There are some funny file formats possible which NG_SPLIT	*/
/*	doesn't handle right now.  They will be corrected in V2.0 in	*/
/*	a couple of months.  They do not appear in any of Norton's	*/
/*	databases (as far as I know), but they can be created by the	*/
/*	NG software.  Please send me a copy of anything that NG_SPLIT	*/
/*	can't handle, so I can make sure that everything is covered.	*/
/*	Included in V2 or V3 will be a utility to re-write the funny	*/
/*	source code into something more reasonable, since usually the	*/
/*	strange formats mess up the operation of the grey + key.	*/
/*									*/
/*	If you like this program and would like to see more like	*/
/*	it, please contribute whatever you think this program is	*/
/*	worth to you (recommended $5 or $10).  Thank you.		*/
/*									*/
/*			John C. Gordon					*/
/*			Post Office Box 25107				*/
/*			Alexandria, VA  22313-5107			*/
/*									*/
/*			Home phone : (703) 528-2205			*/
/*									*/
/************************************************************************/

/************************************************************************/
/*									*/
/*	ng_split		Version 1.2		12 August 1988	*/
/*									*/
/*	Purpose:	Split a Norton Guides .ng database into		*/
/*			its original component source files		*/
/*									*/
/*	Syntax:		ng_split db_name				*/
/*	Where:		'db_name' = the name of the Norton Guides	*/
/*			database (with or without the .ng suffix)	*/
/*									*/
/*	Restrictions:	1)  The NG database must be located in your	*/
/*			    current working directory.			*/
/*			2)  The database must not be "active" when	*/
/*			    you run ng_split.  You must either		*/
/*			    uninstall the Guides or copy the database	*/
/*			    to a different (work) directory first.	*/
/*			3)  Due to the intensive character I/O, you	*/
/*			    should run from your RAMdisk, if possible.	*/
/*									*/
/*	Remarks:	ng_split will create several files in your	*/
/*			current working directory :			*/
/*									*/
/*		'db_name':	the menu link control file		*/
/*		'db_name'.bat:	a batch file containing the commands	*/
/*			to re-create the database			*/
/*		'dbxx'_000:	the individual source data files are	*/
/*			named 'dbxx'_000 through 'dbxx'_999, depending	*/
/*			on how many files are needed.  Note : 'dbxx'	*/
/*			is the first four characters of 'db_name'.	*/
/*		temp:	a temporary file which is deleted on exit	*/
/*									*/
/*	For example : if you are splitting the Turbo C database tc.ng,	*/
/*		you would use the command:	ng_split tc		*/
/*		which would create files:	tc			*/
/*						tc.bat			*/
/*						tc_000 through tc_011	*/
/*						temp (deleted)		*/
/*									*/
/*	Change history:							*/
/*		V 1.0 - 17 June 88 - original program			*/
/*		V 1.1 - 18 July 88 - allow databases with names longer	*/
/*				than six characters or with more than	*/
/*				26 source files and update docs		*/
/*		V 1.2 - 12 August 88 - fix bug with !short with no data	*/
/*				following it and !file.  also added	*/
/*				status lines and better error messages	*/
/*									*/
/************************************************************************/

/************************************************************************/
/*									*/
/*	Hints on interpreting error messages :				*/
/*									*/
/*	In general, all error messages indicate that NG_SPLIT was	*/
/*	unable to successfully split your database.  In those cases,	*/
/*	I would appreciate it if you could send me a copy of the	*/
/*	database, so I can correct the program.  There are two error	*/
/*	messages, however, which I can do nothing about :		*/
/*									*/
/*	Write error - possibly out of disk space			*/
/*		- this indicates that either you are out of space	*/
/*		  OR your directory cannot hold any more files.		*/
/*									*/
/*	WARNING - Database error					*/
/*		- this one comes up if there is an error in the		*/
/*		  database itself.  It occurs when it is trying to	*/
/*		  locate a !seealso segment and the database contains	*/
/*		  an illegal address.  You can verify this by looking	*/
/*		  at the output file which contains the error and	*/
/*		  searching for the string :		_???.ngo:	*/
/*		  Make note of the name of the faulty !seealso clause	*/
/*		  ( the name in quotes after the colon ) and the name	*/
/*		  of the !short section which contains it ( backward	*/
/*		  search for !short: ).  Next, look at the menu link	*/
/*		  control file ( same name as the database, but without	*/
/*		  the .ng suffix ) and look for the name of the output	*/
/*		  file which contained the error.  Make note of the	*/
/*		  menu heading and the menu item which corresponds to	*/
/*		  that file.  Now, bring up the database and find the	*/
/*		  menu heading and menu item.  Then, look up the name	*/
/*		  of the !short item you located before.  You will	*/
/*		  notice that it has a !seealso item with the faulty	*/
/*		  clause name.  If you try to select that !seealso	*/
/*		  clause, nothing will happen.  I don't know why this	*/
/*		  happens and have only seen it happen in one database	*/
/*		  If I get several different databases with this	*/
/*		  problem, I may be able to find a pattern and find a	*/
/*		  way to correct the database and the source files.	*/
/*									*/
/*		  Of course, the above instructions to verify the	*/
/*		  database error are a little more complicated if the	*/
/*		  error is in a !file instead of a !short called from	*/
/*		  the menu, but its the same principle - its just a	*/
/*		  little more work to find out which !short the error	*/
/*		  is in.						*/
/*									*/
/************************************************************************/
```
{% endraw %}

## SHAREWRE.TXT

{% raw %}
```

   ABOUT SHAREWARE...

   Shareware (also known as user supported software and other names) is a
   concept not understood by everyone.  The authors of Shareware retain all
   rights to the software under the copyright laws while still allowing
   free distribution.  This gives the user the chance to freely obtain and
   try out software to see if it fits his needs.  Shareware should not be
   confused with Public Domain software even though they are often obtained
   from the same sources.

   If you continue to use Shareware after trying it out, you are expected
   to register your use with the author and pay a registration fee.  What
   you get in return depends on the author, but may include a printed
   manual, free updates, telephone support, etc.  Only by paying for the
   Shareware you use do you enable the Shareware author to continue to
   support his software and create new programs.  Considering that the
   Shareware registration fees are almost always far less than the purchase
   price of comparable commercial software it's obvious that Shareware is a
   good deal for everyone.

   There are real advantages to you in the Shareware system.  You get to
   try out software to make sure it is compatible with your hardware and
   that it fits your needs before you "buy" it with your registration.
   The author saves the expense of advertising, packaging and distribution
   and passes the savings on to you.  Plus, most Shareware authors are
   much more accessible than commercial software sources so that your
   questions and suggestions are much more likely to be responded to.


                         Thank you for your support.



Steven Kurtz
1433 Summerland Ave.
San Pedro,CA
90732
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2290

     Volume in drive A has no label
     Directory of A:\

    NG_MAKER EXE     23040   4-28-90   8:28p
    NG_SPLIT ZIP     18755   1-28-90  11:42a
    QNG      BAT       632  10-31-89  12:24p
    PC-SIG            1093   5-17-90   3:51p
    SHAREWRE TXT      1764   1-01-80   3:36a
    NG_MAKER DOC     28721   1-01-80   3:41a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       650   7-18-90   7:51a
    FILE2290 TXT      2369   7-18-90   4:17p
            9 file(s)      77064 bytes
                           80384 bytes free
