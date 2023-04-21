---
layout: page
title: "PC-SIG Diskette Library (Disk #2284)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2284/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2284"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SSQL"

    This program uses the Structured Query Language, fast becoming the
    standard among the top databases (ORACLE, dBase IV). It's a complete
    implementation of ANSI SQL with the exception of the security
    features.
    
    Some examples of the program's features are:
    
    ~ CREATE TABLE, CREATE VIEW.
    
    ~ INSERT, UPDATE.
    
    ~ DELETE, DROP, SELECT.
    
    ~ Full support for nulls.
    
    ~ Up to 14 tables in joints.
    
    ~ Up to 14 levels of subqueries.
    
    ~ Support for correlated subqueries.
    
    ~ dBase compatible.
    
    SSQL comes with sample databases to work with while you're going
    through the tutorial. You will need a understanding of databases in
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2284.TXT

{% raw %}
```
Disk No: 2284                                                           
Disk Title: SSQL                                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: SSQL                                                     
Author Version: 2.2                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
This program uses the Structured Query Language that is taking off in   
today's database oriented environment, and is fast becoming the         
standard among the top databases (ORACLE, dBASE IV). It's a complete    
implementation of ANSI SQL with the exception of the security features. 
Some examples of the program's features are:                            
                                                                        
~ CREATE TABLE, CREATE VIEW                                             
                                                                        
~ INSERT, UPDATE                                                        
                                                                        
~ DELETE, DROP, SELECT                                                  
                                                                        
~ Full support for nulls                                                
                                                                        
~ Up to 14 tables in joints                                             
                                                                        
~ Up to 14 levels of subqueries                                         
                                                                        
~ Support for correlated subqueries                                     
                                                                        
~ Dbase compatible                                                      
                                                                        
SSQL comes with example databases to work with while you're going       
through the tutorial. You will need a understanding of databases in     
order to put SSQL to work for you.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SSQL.DOC

{% raw %}
```


















                                     SSQL
                                  VERSION 2.2


                       COPYRIGHT (C) 1990 BY STEVE SILVA
    
                            SILVAWARE
                            3902 NORTH 87TH STREET
                            SCOTTSDALE, AZ 85251



                     Special thanks to the hard-working 
                     students in CIS425 at the DeVry 
                     Institute of Technology, Phoenix, Arizona.




         ***************************************************************
         ** READ THIS!!!!!!!                                          **
         ** IF YOU HAVE A PREVIOUS VERSION OF SSQL, YOU NEED CONVERT  **
         ** YOUR FILES.  FROM YOUR DIRECTORY (or disk) THAT CONTAINS  **
         ** THE .SQL FILES, TYPE A:CONVERT (assuming that the new     **
         ** new SSQL disk is in drive A).                             **
         ***************************************************************














         dBase is a trademark of Ashton-Tate.


                                 TABLE OF CONTENTS
         
         
         INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . INTRO-1
           Key Words Needed to Understand the Documentation  . . . . INTRO-1
           What Is SQL And Why Is It So Important To Know? . . . . . INTRO-1
           How Does This Implementation Of SQL Differ From Others? . INTRO-3
           Strengths and Weaknesses of SSQL  . . . . . . . . . . . . INTRO-4
           Differences In The Registered Version . . . . . . . . . . INTRO-4
           Install SSQL  . . . . . . . . . . . . . . . . . . . . . . INTRO-6
           Permission to copy  . . . . . . . . . . . . . . . . . . . INTRO-6
           Changes from 1.4 to 2.2 . . . . . . . . . . . . . . . . . INTRO-7
           Syntax Diagrams . . . . . . . . . . . . . . . . . . . . . INTRO-7
           SSQL Specifications . . . . . . . . . . . . . . . . . . . INTRO-8
           Contents of Disk  . . . . . . . . . . . . . . . . . . . . INTRO-8
           dBase Compatibility . . . . . . . . . . . . . . . . . . . INTRO-9
        
         THE EXAMPLE DATABASES . . . . . . . . . . . . . . . . . . . DATABASE-1
         USING YOUR OWN WORD PROCESSOR FROM WITHIN SSQL  . . . . . . WORD-1
         USING SCRIPT FILES  . . . . . . . . . . . . . . . . . . . . SCRIPT-1
         
         EXTRACTING DATA FROM A SINGLE TABLE . . . . . . . . . . . . SELECT-1
           Distinct  . . . . . . . . . . . . . . . . . . . . . . . . SELECT-2
           Where . . . . . . . . . . . . . . . . . . . . . . . . . . SELECT-3
           search_expression . . . . . . . . . . . . . . . . . . . . SELECT-3
           Special Search Expression - is null, is not null  . . . . SELECT-5
           Special Search Expression - like, not like  . . . . . . . SELECT-6
           And, Or, Not  . . . . . . . . . . . . . . . . . . . . . . SELECT-7
           Any . . . . . . . . . . . . . . . . . . . . . . . . . . . SELECT-11
           In. . . . . . . . . . . . . . . . . . . . . . . . . . . . SELECT-12
           All . . . . . . . . . . . . . . . . . . . . . . . . . . . SELECT-12
           Between constant AND constant . . . . . . . . . . . . . . SELECT-13
           Importance of the NULL (Unknown value)  . . . . . . . . . SELECT-13
           Mathmatical Functions Avg, Min, Max, Sum, Count . . . . . SELECT-15
           Column Calculations (+, -, *, /)  . . . . . . . . . . . . SELECT-18
           Group by, Having  . . . . . . . . . . . . . . . . . . . . SELECT-19
           Order by  . . . . . . . . . . . . . . . . . . . . . . . . SELECT-20
           Redirectto  . . . . . . . . . . . . . . . . . . . . . . . SELECT-21
      
         JOINING . . . . . . . . . . . . . . . . . . . . . . . . . . JOIN-1
         SIMPLE SUBQUERIES . . . . . . . . . . . . . . . . . . . . . SUB-1
         CORRELATED SUBQUERIES . . . . . . . . . . . . . . . . . . . COR-1
         CONVERTING ENGLISH TO SQL . . . . . . . . . . . . . . . . . ENG-1
         CREATE A TABLE  . . . . . . . . . . . . . . . . . . . . . . CREATE-1
         CREATE A VIEW . . . . . . . . . . . . . . . . . . . . . . . VIEW-1
         DROP A TABLE/VIEW . . . . . . . . . . . . . . . . . . . . . DROP-1
         INSERT DATA INTO A TABLE  . . . . . . . . . . . . . . . . . INSERT-1
         UPDATE DATA IN A TABLE  . . . . . . . . . . . . . . . . . . UPDATE-1
         DELETE DATA FROM A TABLE  . . . . . . . . . . . . . . . . . DELETE-1
         TUTORIAL  . . . . . . . . . . . . . . . . . . . . . . . . . TUTORIAL-1

******** ORDER FORM  * * * * * * * * * * * * * * * * * * * * * * * * LAST PAGE
         
         
         
         KEY WORDS NEEDED TO UNDERSTAND THE DOCUMENTATION

         SQL - Structured Query Language. A standard method of 
         interacting with a database.  It is pronounced "SEQUEL"!!  
         However,  over the years I have noticed more and more people 
         saying the letters S-Q-L.
         
         TABLE - A table is typically known as a FILE in other systems.
         You may ask why they don't just call a table a file.  It is 
         because that although normally a table does refer to a specific 
         file, a table can refer to something that spans two or more 
         files.  This can be done by "creating a view" (see 
         documentation). If you read a book on relational databases, they 
         will probably refer to a table as a relation. 

         ROW - A row corresponds to a record or a portion of a record in 
         a file.  In relational theory it is called a tuple.

         COLUMN - A column is typically known as a field in other 
         systems.  In relational theory it is called an attribute.

         The above names were created to give relational databases a 
         consistent and accurate view of data.

         EXAMPLE:

         You may have a TABLE named sales which contains COLUMNs called 
         date, custnum, partnum and quantity.  Every time you made a 
         sale, you would add a ROW of data to the TABLE.

                      COLUMNS
           -----------------------------
          |         |        |         |
         date    custnum  partnum  quantity
         ------  -------  -------  --------
         880201  8524     AD873         928       <-- ROW
         880203  7687     VF8709         87       <-- ROW

         ----------------------------------
                        ^
                        |
                      TABLE 

         WHAT IS SQL AND WHY IS IT SO IMPORTANT TO KNOW?
         
         SQL stands for Structured Query Language.  It was developed as 
         a standard method to query (extract data from) a relational 
         database and do other operations to maintain relational 
         databases.  Relational databases look at files as if they were 
         simply tables.  SQL was developed years ago at a theoretical 
         level but because of its inherent inefficiencies and programming 
         complexity, it has been very difficult to create workable programs.  
         It provides the most flexible approach to extracting data from a 
         database.  It allows us to extract data in seconds that would 
         take a knowledgeable programmer hours, days or weeks to extract, 
         even if the programmer had the most advanced non-SQL languages 
         available.  For a sampling of the types of queries that SQL can 
         handle, refer to Appendix A.

                                      INTRO-1






         Most database management systems on PCs, minicomputers, and 
         mainframes have an SQL interface.  So far, there is no "better" 
         language waiting to replace SQL so once you learn SQL, it 
         should serve you for many years.
         
















































                                  INTRO-2
         
         HOW DOES THIS IMPLEMENTATION DIFFER FROM THE OTHERS?
         The following is a table from the January, 1988 issue of BYTE.  
         I have added SSQL to the end of the table for comparison: 

         SQL Command  Informix  Ingres  Oracle  SQLBase  XDB   XQL    SSQL
                        2.0      5.0     5.1     3.2.2    II   1.0     2.1
                       ($795)   ($950)  ($1295)  ($995) ($395) ($795) ($30)
         DML (Data Manipulation Language)
         SELECT         Yes      Yes      Yes     Yes    Yes    Yes    Yes 
           COLUMNS      Yes      Yes      Yes     Yes    Yes    Yes    Yes 
           EXPRESSIONS  Yes      Yes      Yes     Yes    Yes    No     Yes
         DISTINCT       Yes      Yes      Yes     Yes    Yes    No     Yes 
         FROM           Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         WHERE          Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         GROUP BY       Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         HAVING         Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         ORDER BY       Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         SUBQUERIES     Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         UPDATE SET     Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         WHERE          Yes      Yes      Yes     Yes    Yes    Yes    Yes  
         SUBQUERIES     Yes      Yes      Yes     Yes    Yes    No     Yes 
         INSERT INTO    Yes      Yes      Yes     Yes    Yes    Yes     1  
         SUBQUERY       Yes      Yes      Yes     Yes    Yes    No     Yes  
         DELETE FROM    Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         SUBQUERIES     Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         UNION          Yes      Yes      Yes     Yes    Yes    No     Yes
         CORRELATED -                                                      
         SUBQUERIES     Yes      Yes      Yes     Yes    Yes    No     Yes  
         DML Predicates 
         BETWEEN        Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         LIKE           Yes      Yes      Yes     Yes    Yes    No     Yes 
         IS NULL        Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         EXISTS         Yes      Yes      Yes     Yes    Yes    No     Yes  
         ALL            Yes      Yes      Yes     Yes    Yes    No     Yes 
         ANY            Yes      Yes      Yes     Yes    Yes    No     Yes 
         SOME           No       No       No      No     No     No     No  
         [NOT]          Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         DML Functions 
         AVG            Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         COUNT(*)       Yes      Yes      Yes     Yes    Yes    No     Yes  
         COUNT          Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         MAX            Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         MIN            Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         SUM            Yes      Yes      Yes     Yes    Yes    Yes    Yes 
         DDL (Data Definition Language)
         ALTER TABLE    Yes      Yes      Yes     Yes    Yes    Yes     2  
         CREATE TABLE   Yes      Yes      Yes     Yes    Yes    Yes    Yes 
           NOT NULL     Yes      Yes      Yes     Yes    Yes    No     Yes  
         CREATE INDEX   Yes      Yes      Yes     Yes    Yes    Yes    No  
         CREATE UNIQUE
         INDEX          Yes      Yes      Yes     Yes    Yes    No     No  
         CREATE VIEW    Yes      Yes      Yes     Yes    Yes    Yes    Yes
         DROP TABLE     Yes      Yes      Yes     Yes    Yes    Yes    Yes
         DROP INDEX     Yes      Yes      Yes     Yes    Yes    Yes    No  

         1. Similar to the standard except that you cannot use a 
         calculation to update a set of rows.
         2. Although the syntax is different, You can delete columns in a 
         table, change the names of the columns, change the size and data 
         type of a column, etc.
                                      INTRO-3
         
         
         
         STRENGTHS AND WEAKNESSES OF SSQL

         My emphasis has been on the Data Manipulation Language since 
         that is the most difficult to master and it is the most useful 
         to the end-user.  Since the current version of SSQL cannot 
         create indexes, joining large tables tends to be slow in 
         comparison.  When joining tables, SSQL on a PC with a RAM disk 
         can evaluate about 750-800 rows/minute.  On a PC AT with a hard 
         disk it is about 3200 rows/minute.  However, my next major 
         project will be to incorporate the use of index files which 
         should increase the speed dramatically.

         I don't think SSQL can be touched on a price/performance basis 
         though.  I use Oracle 5.1 - the stack of documentation is over 
         a foot high and it requires a PC AT with one megabyte of 
         extended memory.  It is an excellent package but not everybody 
         needs the power of a $1,295 product. 

         SSQL documentation is oriented toward the end-user, not the
         programmer.  There are nearly 400 pages!!!!  It contains many 
         detailed explanations and examples. 

         DIFFERENCES IN THE REGISTERED VERSION
         
         PROGRAM
         There is NO difference in the programs except that registered 
         users are assured of getting the most current version.

         DISK-BASED DOCUMENTATION (UNREGISTERED USERS)
         In order to fit everything on a single disk, there is only 
         enough documentation on some commands to explain the basics. 
         However, it does show all the ANSI SQL commands so you can see 
         for yourself that the commands actually work. You do not get 
         documentation on most of the utilities that make working in 
         this environment a bit easier and allow you, for example, to 
         output any query to a dBase file which gives you the ability to 
         customize reports. 

         FULL DOCUMENTATION (REGISTERED USERS)

         Actually, it is much more than just documentation.  It is a 
         book with nearly 400 pages.  It was produced with a desk-top 
         publishing package, printed on a laser printer, and bound. 

         The name of the book is APPLYING SQL.  Besides explaining all 
         the details of syntax, it shows the common constructs used in 
         SQL to make creating your own queries much easier.  Much of 
         each chapter is centered around translating English into SQL 
         and how to note peculiarities and ambiguities in English that 
         can cause problems in writing queries.

         Support is offered by mail or through CompuServe (73177,2771).



                                      INTRO-4
         





         One of the most complex (and useful) topics in SQL is the 
         correlated subquery.  Most authors give you a page or two on 
         the topic.  That is not nearly enough for you to be able to use 
         it on your own.  My chapter on correlated subqueries is over 40 
         pages.  One good gauge on the quality of a book on SQL is how 
         well it explains the correlated subquery and how well it 
         conveys the importance of the topic.  It is an essential part 
         of SQL that opens up various categories of queries that cannot 
         be accomplished any other way.
         
         The last chapter on queries is CONVERTING ENGLISH TO SQL.  It 
         gives you over 50 pages on approaches to converting English to 
         SQL and dozens of examples.  It explains how to break down a 
         sentence in English that simplifies its conversion.  Many of 
         the common words used in queries are analyzed.  As is often the 
         case with English, the same word in different contexts can 
         significantly change the meaning of the sentence and its 
         conversion to SQL.  Much of the chapter explains how to convert 
         sentences with negation which can be VERY tricky.  For 
         example, let's anylze the following query:
         
         List the purchase dates when all of the following products were 
         purchased: MW, NM, GC. 
         
         The query, although a bit complex when solving it SQL, is 
         nonetheless rather straightforward.  When we negate the query 
         it gets even more confusing (and realistic!!): 

         List the purchase dates when all of the following products were 
         NOT purchased: MW, NM, GC. 
         (if all the products were purchased, skip the date) 

         List the purchase dates when NONE of the following products were 
         purchased: MW, NM, GC.
         (if any of the products were purchased, skip the date)

         List the purchase dates when something other than the following 
         products were purchased: MW, NM, GC. 

         Once you see the solutions to these queries you will better 
         understand why SQL is "structured" and it should give you a 
         more critical understanding of English queries.

         The full chapters on the joins, and subqueries have many more 
         examples and detailed explanations.

         The power of SQL can be TOTALLY lost if the user does not 
         understand the basics of data normalization. Normalization 
         involves the rules for creating tables.  If the tables are not 
         organized correctly, SQL cannot be used to its full potential.  
         It is important to note that the topic is discussed with the 
         non-technical end-user in mind.  Since there have not been any 
         widely available SQL program, all the books on normalization 
         tend to be very theoretical and academically oriented.  
 

                                     INTRO-5            




         
         You also get full information on utilities to delete columns from 
         tables, modify column names, change the width of columns, create 
         tables which are subsets of a current table, etc. 

         
         INSTALL SSQL
         There is no installation per se.  Normally you just want to 
         copy the contents of the distribution disk into a subdirectory 
         on your hard disk.  If you have a floppy disk system put the  
         SSQL disk in drive A and a blank formatted disk in drive B.  
         With the DOS prompt on drive A type:
         COPY SSQL.EXE B:
         COPY ERROR.DAT B:
         COPY *.DBF B:
         COPY *.SQD B:

         The only things you have to remember is that SSQL.EXE and 
         ERROR.DAT have to be in the same directory and the database 
         files must be in your default directory.
         Here is some more information about the files on the 
         distribution disk.. 
         SSQL.EXE - The executable program. 
         ERROR.DAT - contains the error messages
         The other files (tables, views, etc.) must be in your current 
         directory.  In essence, your directory corresponds to your 
         complete database. 
         MEANING OF FILE EXTENSIONS
         DBF - The dbase files.  On the distribution disk, you have 
         BRANCH.DBF, SALES.DBF, PROD.DBF, MANU.DBF, EMP.DBF and 
         CUST.DBF.
         SQD - Definition files.  There is one for every DBF file.
         VIE - The view files. These are text files that contain SELECT 
         statements which form the views.
         TXT - Table output to disk.  These files are created when you 
         use the REDIRECTTO option in the SELECT command to save your 
         report in a disk file instead of sending it to the printer.
         EDIT.FIL - This contains the command to start your word 
         processor or text editor from within SSQL.  See the section on 
         USING YOUR OWN WORD PROCESSOR for more details on this. 
         
         You can put SSQL.EXE and ERROR.DAT in a single directory and 
         set a path to it. You can then have various other directories 
         for the tables. 
         
         PERMISSION TO COPY

         Please copy this disk and give it to a friend (or anybody else).
         However, the following restrictions apply:
         1.  No changes can be made to the distribution disk, including the 
         documentation.
         2. You cannot copy or reproduce the printed manual.  
         
         
         
                              INTRO-6



         Any commercial, educational, governmental and other such 
         organizations are required to purchase a copy of SSQL for every 
         building it is used in. 

         Quantity discounts available.

         CHANGES FROM 1.4 TO 2.2

         Bug fixes too numerous to mention.
         dBase compatible files
         Row width increased from 132 to 500 characters
         Create table, create view, insert, update and delete are ANSI 
         standard 
         Add count(*)
         Addition of drop table, drop view, and correlated subqueries 
         Ability to use calculations in the select list, in the where 
         clause, and update
         The UNION command
         table size increased from 20K to amount of memory.
         The non-standard 'into' is changed to 'redirectto' to eliminate 
         the conflict with the ANSI 'into'
         Complete revision of documentation for registered users.

        SYNTAX DIAGRAMS
        Many chapters begin with a syntax diagram that concisely
        describes a command and its options.  It takes some practice to
        read them but there are only four basic components:

        lowercase_letters - they describe something that you must supply. 
        The rules for correctly writing this part of the command follow
        in the documentation.  It may represent a single word, such as
        the syntax for table_name or a rather complicated series of words
        that is needed for a column_definition.

        [  ] - items between square brackets are optional.

        ...   -  three dots mean previous item may be repeated.

        UPPER CASE LETTERS and all other symbols such as '(', ')', ';',
        '.', and ','  - these must be typed as shown.  Although when
        typing the command, you can use lower case instead of upper case
        letters.  For example, refer to the syntax diagram for creating 
        tables.
        
        Since CREATE TABLE is in uppercase, it must
        always be typed as shown.  The items in lowercase such as
        table_name, column_definition, and uniqueness_constraint must be
        replaced by information you supply.  The rules for forming the
        phrases required by the words in lowercase will be contained in
        the chapter.  The item called column_definition is repeated.  The
        first occurance is outside of the square brackets which means
        that it is required.  The second occurance of column_definition



                                 INTRO-7





        is within square brackets which means that it is optional.  There
        is a comma after the left square bracket which means that if you
        add another column_definition, there must be a comma before it. 
        There are three dots after the second occurance of
        column_definition which means that column_definitions can be more
        than two column_definitions.  Other symbols, such as '(', ')' and
        ';' must be included at the positions shown in the example.  In
        SQL, spacing and lines make no difference.  You can create a
        table with all the components on a single line or put each word
        on a separate line.


        SSQL SPECIFICATIONS

        Requires only one floppy diskette 
        Program only takes up about 122K
        Minimum Memory 256K
        Maximum number of columns 128
        Maximum length of a row 500 bytes (characters)
        Maximum number of rows 
        It is limited by memory. With a 640K PC, the OUTPUT size of the
        table cannot exceed about 400K.  The tables on the disk can be
        larger, you just could not display all the rows and columns at
        once.  Also, you could join multiple large tables as long as the
        resultant table was not over 400K. This means that a table with
        rows 100 characters wide could contain about 4,000 rows.
        
        Maximum levels of subqueries 14
        Maximum number of tables you can join 14
        

        CONTENTS OF DISK
        READ.ME       - Basic information
        SSQL.EXE      - The executable file
        ERROR.DAT     - Contains error messages
        EDIT.FIL      - The text file with the location of your word processor
        BRANCH.DBF, PROD.DBF, EMP.DBF, MANU.DBF, SALES.DBF, CUST.DBF,
        BRANCH.SQD, PROD.SQD, EMP.SQD, MANU.SQD, SALES.SQD, CUST.SQD,
                      - The tables used in the documentation
        SSQL.DOC      - Documentation
        ORDER.FRM     - Order form. type: COPY ORDER.FRM PRN 
                        for a printout
        PRINTDOC.BAT  - The batch file to print the documentation
        CONVERT.EXE   - Converts the older .SQL files to .DBF and .SQD
        RUN           - ALTHOUGH THIS IS NOT ON THE DISK IT WILL BE AFTER
                        THE FIRST TIME YOU RUN SSQL.  IT CONTAINS YOUR
                        LAST COMMAND



                                     INTRO-8






         DBASE COMPATIBILITY

         SSQL creates dBase III compatible files and it can read any 
         dBase file with the following exceptions:
                No memo data type
                No field length over 132

         A significant difference between SQL and dBase is the ability 
         of SQL to store a null (see SELECT-13 for more information).  
         Even dBase IV cannot store a null.  The way I have done it is 
         that character columns are filled with blanks, and numeric 
         columns contain -0 (negative zero).  You will never see a -0 
         when using SSQL, the column value will be blank.  This 
         information might be useful if you manipulate files created by 
         SSQL in dBase.

         You will notice that every .DBF file created by SSQL has a 
         corresponding .SQD file.  This stores information specific to 
         file creation - Not Null and Unique (see CREATE-2 for more 
         information).  If you access a dBase file not created through 
         SSQL, the .DBF file is created with Not Null set for every 
         column and no uniqueness constraints. 

         If you change the number of fields in a dBase file after it has 
         been accessed by SSQL, you should delete the corresponding .SQD 
         file. Otherwise, the Not Null and Uniqueness constraints will 
         not be correct.  
       

























                                INTRO-9



         
         
         
         
         THE EXAMPLE DATABASES
         There are two sets of simplified databases.  The manufacturing
         database is primarily used for examples throughout the
         documentation.  The law firm data is primarily used for the
         questions at the end of the chapters.
         
         
         MONOLITH MANUFACTURING
         Monolith Manufacturing manufactures and markets high tech
         products in the western states.  There are manufacturing
         facilities in various states.  Products are manufactured in
         batches at each facility.  When the batch is finished an entry is
         made in the table with the date the batch was finished, the
         product code, the state where the product was manufactured, the
         quantity of saleable items and the percent of defects in the
         batch if that is tracked.  Related to the manufacturing table is
         the product table which simply has the description that
         corresponds to each product code.
         The sales portion of the business has as its core the sales
         table.  When a sale is made, an entry is made which contains the
         date of sale, branch code, customer code, salesperson number,
         product code and quantity purchased.  Related to the sales table
         are the branch table, the employee table and the customer table. 
         The branch table contains the branch code, the state the branch
         is in and the employee number of the manager.  The employee table
         contains the employee number, the name of the employee, and the
         employee's manager number if the employee has a manager (the
         president does not have a manager).  All manager numbers have an
         entry in the employee number column since all managers are also
         employees.  The customer table contains the customer code, the
         customer name and the state where the customer resides.
         The following contains details on the Monolith's six tables.  The
         data types correspond to the types used in the create table
         command.  When a column in one table corresponds to a column
         (especially a primary key) in another table, it is in the form of
         TABLE.column. This information will be useful when we need to
         retrieve information that spans tables.  In chapter 22, we will
         refer to these columns as having common domains.
         
         SALES TABLE
         column  data                               Common columns in 
         name    type       description             other tables
         date    date       Date of sale 
         bc      char(2)    Branch code             BRANCH.code
         cc      char(2)    Customer code           CUST.code
         sn      numeric(2) Salesperson number      EMP.code,
                                                 EMP.mgrnum, BRANCH.mgrnum
         pc      char(2)    product code            PROD.code, MANU.code
         qty     numeric(3) quantity

         Key is date, bc, cc, sn, pc



                               DATABASE-1




         BRANCH TABLE
         column   data                              Common columns in 
         name     type       description            other tables
         code     char(2)    branch code            SALES.bc
         st       char(2)    state code             CUST.st, MANU.mst
         mgrnum   numeric(2) manager number         EMP.enum,
                                                    EMP.mgrnum, SALES.sn
         KEY is code
         
         EMP TABLE
         column   data                              Common columns in 
         name     type       description            other tables
         enum     numeric(2) employee number        EMP.mgrnum, BRANCH.mgrnum, 
                                                    SALES.sn 
         name     char(20)   employee name
         mgrnum   numeric(2) manager number         EMP.enum,
                                                    BRANCH.mgrnum, SALES.sn
         KEY is enum

         PROD TABLE
         column   data                              Common columns in 
         name     type       description            other tables
         code     char(2)    product code           MANU.code, SALES.pc
         descrip  char(15)   product description
         KEY is code        

         MANU TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         date     date       date of manufacture
         code     char(2)    product code            PROD.code
         mst      char(2)    state where product     BRANCH.st, PROD.st
                             is manufactured
         defects  numeric(3) percent defects in batch  
         qty      numeric(3) quantity manufactured
         KEY is date, code, ms

         CUST TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         code     char(2)    Unique customer code    SALES.cc
         name     char(15)
         st       char(2)    State                   MANU.mst, PROD.st
         rating   numeric(2)  
         KEY is code
         
         
         COLE'S LAW FIRM
         Cole's Law offers service in a variety of specialties such as
         Real Estate, Computers, Crime, and Patents.  All attorneys work
         in only one of the specialties.  Each attorney is assigned a
         category as follows:
         1 - Partner
         2 - Associate
         3 - Clerk


                               DATABASE-2





         All associates and clerks have supervising attorneys.Clients are
         also put in categories but they are defined very differently. It
         is related to yearly billings:
         1 - over $1,000,000 yr
         2 - $500,000 - $999,999
         3 - $100,000 - $499,999
         4 - less than $100,000
         Since attorneys get bonus points for bringing clients to the
         firm, we also track the originating attorney.
         Cases are based on a unique case number.  A client could be
         associated with many cases.  There is a primary attorney in each
         case.  The main topic of the case will always relate to the
         specialty of the primary attorney.  Not all attorneys on the case
         will have the same specialty however. 
         Work on the cases is organized by date, case number and attorney
         number.  The hours worked are for a single day.
         
         SPCLTY TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         code     char(2)    unique specialty        ATTORNEY.spec
         descrip  char(15)   specialty
         KEY is code

         ATTORNEY TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         num      char(2)    unique number
         name     char(15)
         city     char(10)
         st       char(2)
         supatt   char(2)    Supervising attorney     ATTORNEY.num, 
                                                      CLIENT.origatt, 
                                                      CASE.primatt, 
                                                      CASEWORK.attnum
         spec     char(2)    Specialty of att.        SPCLTY.code
         cat      numeric(1) Category
         yrs      numeric(2) Years of service
         salary   numeric(8)
         KEY is num

         CLIENT TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         num      char(2)                            CASE.clnum
         name     char(20)
         city     char(10)
         st       char(2)    State
         cat      numeric(1) Category
         origatt  char(2)    Originating attorney    ATTORNEY.num, 
                                                     ATTORNEY.supatt,
                                                     CASE.primatt, 
                                                     CASEWORK.attnum
         KEY is num
         


                               DATABASE-3




         CASE TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         num      char(2)    Case number
         city     char(10)
         st       char(2)    State
         clnum    char(2)    Client number           CLIENT.num
         primatt  char(2)    Primary attorney num.   ATTORNEY.num, 
                                                     ATTORNEY.supatt, 
                                                     CLIENT.origatt, 
                                                     CASEWORK.attnum
         KEY is num

         CASEWORK TABLE
         column   data                               Common columns in 
         name     type       description             other tables
         date     date       Date worked
         casenum  char(2)    Case number             CASE.num
         attnum   char(2)    Attorney number         ATTORNEY.num,
                                                     CLIENT.origatt,       
                                                     CASE.primatt, 
                                                     ATTORNEY.supatt
         hours  numeric(5,2) Hours worked on date
         KEY is date, casenum, attnum
        
         
         





























                               DATABASE-4

         
         
         
         
         
         
         USING YOUR WORD PROCESSOR

         You can modify any SSQL command by calling your text editor or
         word processor from within SSQL.  You must first specify which
         text editor or word processor you are using in a file called
         EDIT.FIL.  The file must contain the path and name of the text
         editor or word processor.  YOU CANNOT CALL A BATCH FILE.  The
         distribution disk contains an EDIT.FIL with the following:
         C:\PCWRITE\ED
         The command to start PC-Write is ED and it resides on drive C: in
         the PCWRITE directory.  You can replace the above line with the
         path and program name of your own. The EDIT.FIL must reside on
         your default directory. The syntax is:
         EDIT [file_name];
         The file_name is any valid name which will be accepted by your
         word processor on the command line.  For example, if you want to
         edit MGRORG, you would type:
         edit mgrorg;
         As is true with all commands except calling a script file, you
         must end this one with a ';'.  When you exit your word
         processor/text editor, you will return to SSQL.  Refer to the
         next section to find out how to process the file you just
         created.
         There is a special case when you want to edit the last SSQL
         command that you typed.  Every command you type except edit and
         exit is stored in a file called RUN.  To edit the last command
         entered type:
         edit run;
         If your word processor does not allow you to type the file name
         that you want to edit after the word processor command in
         EDIT.FIL simply type:
         edit;



















                             WORD-1


         
         
         
         
         
         
         CALL SCRIPT FILE 

         A script file is a text file which contains an SSQL command.  The
         script file can then be called from SSQL and the command it
         contains will be processed.
         
         SYNTAX:
         @file_name 
         
         The file_name can be any valid DOS file name.
         The file must be text only, no special word processing formats
         allowed. PC-Write or Qedit are excellent choices because they
         always produce standard text. If you use WordPerfect, save the
         file using Text Out (Ctrl-F5). If you use Wordstar, I feel sorry
         for you but anyway, use the non-document format. 
         
         COMMENTS IN THE SCRIPT FILE
         You can precede a comment by two dashes and from that point to
         the end of the line will not be processed by SSQL. The comment
         can be at any place in the line, not necessarily at the beginning
         as the following example shows.
         You can create a file called MGRORG which contains:
         --This query finds the names of managers who have
         -- salespeople who have sold products to Organomice
         select name      --Get names
         from emp      
         where enum in 
           (select mgrn   --of managers
            from emp 
            where enum in   
              (select sn        -- who have salespeople
               from sales,cust  -- who have sold products to
               where cc = code  -- Organomice
               and name = 'Organomice')); 
         
         From SSQL, you would simply type: 
         
         @MGRORG 

         The file you created would be displayed on the screen and then 
         the result would appear. 
         The script file can contain multiple commands.
         











                            SCRIPT-1




         QUERIES - SINGLE TABLE

         OVERVIEW

         The select command is used to retrieve data from tables. The
         select command is covered in three later chapters too.  Although
         the use of select on a single table is relatively easy,
         translating from English to SQL (or most other query languages)
         can be rather tricky.  The approach of this chapter is not merely
         to explain the syntax of the command, it should give you a more
         critical approach to applying SQL.

         SYNTAX: 

         SELECT [DISTINCT] column_name [,column_name ...] 
         FROM table_name [,table_name ...] 
         [WHERE search_expression] 
         [REDIRECTTO file_name]         <--Non-Standard 
         [GROUP BY column_name [,column_name ...] 
         [HAVING criteria]]
         [ORDER BY column_name [,column_name ...] 

         If you want all the columns in a table you can replace the list
         of column names with an asterisk (*). 
         The select command produces a report in the form of a table.
         Although the basic use of the select takes a short time to learn,
         the more advanced uses take a long time to master. 
         The tables used in this chapter are on the distribution disk so
         you can try entering the commands yourself.
         All the examples have each clause starting on a new line for
         purposes of clarity. It is not necessary to have them on separate
         lines. It is sometimes advantageous to keep the query on one line
         because if you need to make a correction, you cannot backup a
         line. However, to make correcting command much easier, you can
         call your word processor from within SSQL. This is described in
         the full documentation.

         THE BASICS OF SELECT 

         Find all the data in the manu table.
         
         select *  
         from manu; 
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15 
         02/01/87 GC   ID        0  55  
         02/02/87 NM   CA       17  93  
         02/02/87 DD   ID           25  
         02/03/87 DD   WA       22  46  
         02/02/87 NM   WA       15  25  
         02/04/87 DD   AZ       12  25  
         02/04/87 DD   CA       15  25  
         02/06/87 GC   AZ        4  43  
          
         9 rows selected  


                                SELECT-1





         
         Instead of typing all the column names, you can use the * to
         denote all column names. On the next line, the "from manu" tells
         us that we want the data to come from the table named "manu". All
         select commands must end with a semi-colon (;). If we just wanted
         the product code and the state that it was manufactured in you
         would type:
         
          select code, mst 
          from manu; 
          code mst  
          ---- ---  
          GC   ID   
          GC   ID   
          NM   CA   
          DD   ID   
          DD   WA   
          NM   WA   
          DD   AZ   
          DD   CA   
          GC   AZ   
           
          9 rows selected 
         
         DISTINCT 
         The optional statement "distinct" will eliminate all rows with
         duplicate columns that you have specified. If you wanted to find
         out all the different states where products are manufactured, you
         would type:
         
         select distinct mst 
         from manu; 
          
         mst  
         ---  
         ID   
         CA   
         WA   
         AZ   
          
         4 rows selected 
         
         As you can see only 4 rows were found. This is because  there can
         be more than one row with the same state. Only the first
         occurrence of each data element is retained. 
         The "distinct" modifier can be used with one or more column names
         in a select statement. However, the "distinct" modifier operates
         on the whole row, not just a single column. In the manu table,
         the primary key is date, code, mst. What if we wanted not only
         the state where the products are manufactured but the product
         codes too. Notice what happens with the following:





                                SELECT-2





         
         select mst, code 
         from manu; 
          
         mst code  
         --- ----  
         ID  GC    
         ID  GC    
         CA  NM    
         ID  DD    
         WA  DD    
         WA  NM    
         AZ  DD    
         CA  DD    
         AZ  GC    
          
         9 rows selected 
         
         Some of the rows are duplicated because it is possible to
         manufacture the same product in the same state but on a different
         date. To get rid of the duplication of rows we can add the
         "distinct" modifier.
         
         WHERE 
         
         The where clause of the select command is the most powerful and
         complex part of SQL. Our discussion will be broken down into
         various phases. The first phase is using the where with a single
         table name. Later you will see it used with multiple tables and
         you will find that you can even put another select command within
         the where clause. 
         
         search_expression 
         
         The simplest search expression relates a column name to a
         constant. A constant is an exact value that you enter. All column
         values are tested against the constant value. If the column name
         that you are testing is defined as a character, the constant must
         be enclosed in single quotes or double quotes. The constant you
         are searching for may not contain a quote. If the column name you
         are testing for is defined as numeric, the constant is a number
         without any quotes. 
         You can relate the column name to the constant in the following
         ways: 
         
         = equal 
         <> not equal 
         != not equal 
         ~= not equal
         >  greater than 
           less than 
         >= greater than or equal 
         <=  less than or equal 
         IS NULL   column value is null
         IS NOT NULL   column value is not null
         LIKE  like a pattern
         NOT LIKE  not like a pattern


                                SELECT-3





         
         Find out which customers are in Arizona. 
         
         select * 
         from cust 
         where st = 'AZ'; 
          
         code name            st rating  
         ---- --------------- -- ------  
         ZZ   Organomice      AZ     34  
         DD   QuarkCo         AZ     10  
          
         2 rows selected 
         
         Spaces are optional on either side of the "=". You could have
         typed: 
         
         where st='AZ'; 
         
         Instead of single quotes you could have used double quotes: 
         
         where st="AZ"; 
         
         In the manu table, the column name "defects" is the percent of
         defects when the product was manufactured. The statement below
         shows you how to get a list of all the information for those
         products with defects over 10%.
         
         select * 
         from manu 
         where defects > 10; 
          
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/02/87 NM   CA       17  93  
         02/03/87 DD   WA       22  46  
         02/02/87 NM   WA       15  25  
         02/04/87 DD   AZ       12  25  
         02/04/87 DD   CA       15  25  
          
         6 rows selected 
         
         The symbols such as <, >, =, <=, >=, and != can be used with
         character data too. For example, the statement below shows how to
         retrieve all customer names alphabetically greater than Machado.








                                SELECT-4





         
         select name 
         from cust 
         where name > "Machado"; 
          
         name             
         ---------------  
         Technoharps      
         Organomice       
         QuarkCo          
         Marswarp         
         Multicrud        
          
         5 rows selected 
         
         SPECIAL SEARCH EXPRESSION - IS NULL, IS NOT NULL 
         
         Nulls are an important concept in relational databases. For
         example, let's look at the percentage of defects in Idaho:
         
         select *
         from manu
         where mst = 'ID'; 
           
         date     code mst defects qty  
         ------   ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/01/87 GC   ID        0  55  
         02/02/87 DD   ID           25  
          
         3 rows selected 
          
         In Idaho, the batch of MW on 02/07/87 has 12% defects, GC on 02/01/87
         has 0% defects but there is nothing listed for DD. This "nothing"
         is called a null. It does not mean zero or blank. A null means
         that the data element is unknown. In our case, product DD in
         Idaho is not tracked for defects like other products. This isn't
         to say that there are zero defects. It just means we have no
         entry. 
         If we wanted to look at all products for which we do not track
         defects, we would use the following:
         
         select * 
         from manu 
         where defects is null; 
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/02/87 DD   ID           25  
          
         1 row selected 
         



                                SELECT-5





         
         We could find all the products for which we track defects by
         using is not null:
         
         select * 
         from manu 
         where defects is not null; 
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/01/87 GC   ID        0  55  
         02/02/87 NM   CA       17  93  
         02/03/87 DD   WA       22  46  
         02/02/87 NM   WA       15  25  
         02/04/87 DD   AZ       12  25  
         02/04/87 DD   CA       15  25  
         02/06/87 GC   AZ        4  43  
          
         8 rows selected 
         
         Null values can be used with both numeric columns and character
         columns.
         
         SPECIAL SEARCH EXPRESSION - LIKE, NOT LIKE 
         
         An expression with like is used when we want to retrieve data
         that is similar in some way to another set of characters. The
         like expression can only be used with character data. This is
         explained in the full documentation.
         
         AND, OR, NOT 
         
         We can link expressions with ands and ors. If you use an and,
         both expressions have to be true in order to add the row to the
         table we are producing. If you use an or, only one of the
         expressions has to be true. You can use as many ands and ors as
         you want in a query. The expressions are evaluated from left to
         right. All the ands are done first, then evaluation starts again
         from the left and the ors are processed. 
         If you want to reference different column names in a search, the
         logic as stated in English is typically the same as it is in SQL.
         Usually there is no confusion between the and and the or unless
         you are dealing with the same column name. 
         Find all products in Washington with defects over 16%:
         
         select distinct code 
         from manu 
         where mst = 'WA' and defects > 16; 
          
         code  
         ----  
         DD    
          
         1 row selected 


                                SELECT-6





         
         Generally, the use of a single and or an or in a where clause is
         more or less common sense unless you are referring to the same
         column name. What if you wanted to find all the products
         manufactured in Washington and Idaho? This has two meanings in
         everyday English: 
         
         1. Out of all the products we manufacture, I want a list of the
         ones we manufacture in Washington and a list of the ones we
         manufacture in Idaho. 
         
         2. Out of all the products we manufacture, I want a list of each
         one we manufacture in BOTH Washington and Idaho. 
         
         We will accept the first meaning in this example. It is
         interesting to note that we could have also said, "List all the
         products manufactured in Washington or Idaho." It seems odd that
         in English "or" can have the same meaning as "and". Even if you
         don't agree with my interpretation, beware that others do and
         that it may cause communication problems. 
         In the English version you use the "and" so there is a tendency
         to always use the "and" in the SQL version too. This would be
         wrong. The English perspective and the SQL perspective are
         different. The English perspective often looks at the whole group
         of items. The SQL perspective looks at one item at a time. To
         translate Washington and Idaho into SQL we look at it from its
         perspective. We will look at each item. If that item is
         manufactured in Washington or Idaho, we will add it to our table.
         Notice that when we look at it from the SQL perspective, we use
         the "or" instead of the "and". This not just a quirk of SQL
         logic, it is common to virtually all data bases. The statement
         below shows how to find out all the products manufactured in
         Washington and Idaho: 
         
         select distinct code 
         from manu 
         where mst='WA' or mst='ID'; 
          
         code  
         ----  
         GC    
         DD    
         NM    
          
         3 rows selected 
         
         It is interesting to note what the meaning would be if we used an
         and instead of an or. Would it tell us every product manufactured
         in BOTH Washington and Idaho? No, it wouldn't as you can see in
         the following:
         
         select distinct code 
         from manu 
         where mst='WA' and mst='ID'; 
          
         no rows found 


         
                                SELECT-7





         
         Actually, it makes no sense. How could a state for an individual
         item be both WA and ID????? 
         
         But how WOULD you find out every product manufactured in both
         Washington and Idaho? The search strategy is rather complex and
         the topic is covered under joining tables and again when we
         discuss subqueries. 
         
         In order to express the opposite logic, you use the not but you
         have to be careful. The statement below shows how to find the
         products manufactured outside of Washington or Idaho. 
         
         select * 
         from manu 
         where not (mst='WA' or mst='ID'); 
         
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/02/87 NM   CA       17  93  
         02/04/87 DD   AZ       12  25  
         02/04/87 DD   CA       15  25  
         02/06/87 GC   AZ        4  43  
          
         4 rows selected 
         
         Again, we must be careful about how we express the query in
         English. The query above cannot be translated as: Find the
         products NOT manufactured in Washington or Idaho. The query above
         retrieved some products that happen to be manufactured in Idaho
         or Washington. We really did not care. The only constraint we
         cared about was the state in which it was manufactured. The query
         could accurately be translated in fractured English: Find the
         products manufactured not in Washington or Idaho. By changing the
         statement to one that requests products not manufactured in
         Washington or Idaho, we change the words modified by "not" from
         the states to products manufactured. To find the products not
         manufactured in Washington or Idaho we must first find the set of
         all products manufactured in Washington or Idaho:
         
         select distinct code 
         from manu 
         where mst = 'WA' or mst = 'ID'; 
         
         code  
         ----  
         GC    
         DD    
         NM    
          
         3 rows selected 





         
                                SELECT-8





         
         Then we must find all the products in the other states that are
         not in the above set of three products. We end up with the
         following which finds that there are not any products
         manufactured in the other states that are not manufactured in
         Washington and Idaho.
         
         select distinct code 
         from manu 
         where code != 'NM' and code != 'GC' and code != 'DD'; 
          
         no rows found
         
         Well, you may ask, what IS the select statement to find the
         products not manufactured in Washington or Idaho? Not so fast.
         Actually, it would require a subquery that is covered in the
         section on subqueries. 
         
         If I may digress...
         
         I know. Just a few pages into the basics of the select statement
         and you are ready to give up. Remember, the logic of SQL is not
         all that difficult. The main problem is that you do not think
         critically about the meaning of sentences. Much has been written
         about the problems of communication between humans and computers.
         Most of the problems are actually caused by the end-user and the
         "computer expert". I put the burden on the "computer expert" who
         should know enough about English to note the subtlties and
         ambiguities of what the end-user is requesting. This is just as
         relevant for interpreting queries as it is building complete
         application systems.
         
         Meanwhile, back at the ranch...
         
         Normally, if a condition is true, we add that row to the table.
         By using the not, if the condition is false, we add the row to
         the table. On the first row of the select statement to find
         products manufactured outside Idaho and Washington, the state is
         CA. It was selected because it is not equal to WA or ID. Just as
         we can express the same thought in English more than one way, we
         can do the same with SQL. We could have written:
         
         select * 
         from manu 
         where mst != 'WA' and mst != 'ID'; 
         OR 
         select * 
         from manu 
         where not (mst = 'WA') and not (mst = 'ID'); 





         
                                SELECT-9





         
         What if we would have written or instead of and in the two
         examples above? Every row would have been selected. No matter
         what the state is, it would either be not equal to WA or not
         equal to ID! 
         
         Remember that whenever you use the not, you must enclose the
         expression in parentheses. 
         
         You can have as many ands and ors in a query as you need. What if
         you wanted all products in Washington and Idaho with defects less
         than 16%?  
         
         select * 
         from manu 
         where (mst='WA' or mst='ID') and defects < 16; 
          
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/01/87 GC   ID        0  55  
         02/02/87 NM   WA       15  25  
          
         3 rows selected 
         
         We find that only two products are selected. Notice that
         parentheses enclose the or expression. This is because without
         the parentheses the and expression would have been executed
         first. Remember that without parentheses the ands are processed
         first and the ors are processed next. Not inserting the
         parentheses would have changed the meaning considerably:
         
         select * 
         from manu 
         where mst='WA' or mst='ID' and defects < 16; 
          
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/01/87 GC   ID        0  55  
         02/03/87 DD   WA       22  46  
         02/02/87 NM   WA       15  25  
          
         4 rows selected 
         
         The above query is the equivalent of saying, "List all products
         in Washington and list all products in Idaho with defects under
         16%."  Another way of stating it is "In looking through all the
         products, if a product is manufactured in Washington or an Idaho
         product has under 16% defects, add it to the list." The important
         concept is that the 16% defects relates to the products
         manufactured in Idaho, not all products. 
         


                                SELECT-10





         
         SETS (used with constants) 
         
         Instead of relating items one at a time, we can relate groups of
         items at once. These groups are called sets. They are enclosed
         parentheses and the constants are separated by commas. 
         
         You saw above how you can use =, !=, <, >, <=, and >=. We can
         expand that concept to include any and all.  This chapter has a
         brief introduction to sets.  Sets are the main topic of the
         chapters on subqueries where instead of using constants in sets,
         we use select statements.
         
         ANY 
         
         As you will see, the use of the any with constants is simply a
         short-hand method of writing a series of comparisons with ors.
         The any may be combined with any of the comparison operators:
         =any  equal to any 
         >any  greater than any 
         <any  less than any 
         !=any  not equal to any 
         >=any  greater than or equal to any 
         <=any  less than or equal to any 
         
         Although there are many possible combinations with any, very few
         are of any use. With constants, the only one that is typically
         used is =any. 
         
         Let's rewrite the query concerning all products manufactured in
         Washington or Idaho:
         
         select distinct code 
         from manu 
         where mst =any ('WA','ID'); 
         code  
         ----  
         GC    
         DD    
         NM    
          
         3 rows selected 
         
         Translated into English it would be: Select the description from
         the manufacturing table where the state of manufacture is equal
         to any of the following - WA or ID. 
         We can use numbers too. What if you wanted to know the basic
         information on products that have a percentage of defects of 12%
         or 15%?




         
                                SELECT-11





         
         select date, code, mst 
         from manu 
         where defects =any (12,15); 
         date     code mst  
         -------- ---- ---  
         02/07/87 GC   ID   
         02/02/87 NM   WA   
         02/04/87 DD   AZ   
         02/04/87 DD   CA   
          
         4 rows selected 
         
         IN 
         
         An equivalent to =any is in. The above query could be translated:
         
         select date, code, mst
         from manu  
         where defects in (12,15);  
         
         The above two queries could be translated into a query without a
         set:
         
         select date, code, mst 
         from manu 
         where defects = 12 or defects = 15; 
         
         ALL
         
         The all can be combined with all the comparison operators just as
         was seen with the any. The only common use with constants occurs
         with the !=all which allows us to exclude a set of data. In the
         following statement we show information on products manufactured
         outside of Washington and Idaho.
         
         select date, code, mst 
         from manu 
         where mst !=all('WA','ID'); 
          
         date     code mst  
         -------- ---- ---  
         02/02/87 NM   CA   
         02/04/87 DD   AZ   
         02/04/87 DD   CA   
         02/06/87 GC   AZ   
          
         4 rows selected 
         
         Although we translated =any as "equal to any item in the set",
         !=all is usually translated as "not equal to any item in the
         set". Another way to state the above query is to find products
         manufactured in a state that is not any of the following -
         Washington and Idaho.  Confusing, isn't it??  Just remember that




                                SELECT-12





         
         !=all is the opposite of =any.  This ambiguity in English is
         related to a riddle I heard Theo ask on the Cosby show:  "What
         two coins add up to 30 cents and one of them is not a quarter?" 
         The answer, of course, is a nickel and a quarter.  The nickel is
         not a quarter which satisfies the rule.  Theo was applying a
         !=any to the set when a typical listener would think that !=all
         was actually meant.
         
         BETWEEN constant AND constant 
         An easy way to select a range of values is use the between/and
         component of the where clause. The following shows how to find
         the basic information for products with defects between 12% and
         16%: 
         
         select date, code, mst, defects 
         from manu 
         where defects between 12 and 16; 
          
         date     code mst defects  
         -------- ---- --- -------  
         02/07/87 GC   ID       12  
         02/02/87 NM   WA       15  
         02/04/87 DD   AZ       12  
         02/04/87 DD   CA       15  
          
         4 rows selected 
         
         Notice that when we use the between, we include the 12 and the
         16. Unfortunately, the word "between" can have more than one
         meaning in standard English. If you say "The treasure is located
         between San Francisco and Walnut Creek", you would assume that
         the treasure is not IN San Francisco or Walnut Creek. That is,
         you would not include the end points - San Francisco or Walnut
         Creek. If you say "This insurance plan is available for those
         people between the ages of 18 and 65", you would assume that if
         you are 18 or 65, you are eligible. That is, you would include
         the end points. In English, when the word between is used with
         numbers, the end points are included. In other cases, the end
         points are not included. Silly, isn't it!! Just remember that in
         SQL, between includes the end points.
         
         IMPORTANCE OF THE NULL (UNKNOWN VALUE)
         Now that you understand the basics of how the where clause works,
         we need to complicate it a bit with considering the unknown value
         (the null).  If the where clause evaluates to TRUE, then the row
         is displayed, otherwise, it is not displayed.  In most non-SQL
         databases, the where clause only evaluates to TRUE and FALSE.  In
         SQL we have TRUE, FALSE, and UNKNOWN.  We can use truth tables to
         show the relationship.





                                SELECT-13





         
          AND  |TRUE  FALSE  UNK     OR   |TRUE  FALSE  UNK
          ----------------------     -----------------------
          TRUE |TRUE  FALSE  UNK     TRUE |TRUE  TRUE   TRUE
          FALSE|FALSE FALSE  FALSE   FALSE|TRUE  FALSE  UNK   
          UNK  |UNK   FALSE  UNK     UNK  |TRUE  UNK    UNK
         
          NOT
          ------------
          TRUE  |FALSE
          FALSE |TRUE
          UNK   |UNK
         
         This can cause some confusing results until you are used to it.
         For example, there are nine rows in the manu table.  However, the
         two queries below result in a total of only eight rows.  
         
         select *
         from manu
         where defects = 15;
         
         date     code mst defects qty 
         -------- ---- --- ------- --- 
         02/02/87 NM   WA       15  25 
         02/04/87 DD   CA       15  25 
         
         2 rows selected
         
         select *
         from manu
         where defects != 15;
         
         date     code mst defects qty 
         -------- ---- --- ------- --- 
         02/07/87 GC   ID       12  15 
         02/01/87 GC   ID        0  55 
         02/02/87 NM   CA       17  93 
         02/03/87 DD   WA       22  46 
         02/04/87 DD   AZ       12  25 
         02/06/87 GC   AZ        4  43 
         
         6 rows selected
         
         
         At first glance you would think that defects are either equal to
         fifteen or not equal to fifteen.  However there is one instance
         where defects has an unknown value so it is not displayed.
         Intuitively you may be saying to yourself that since an unknown
         value is not equal to fifteen, it should be displayed, but that
         is not the way it works.  If you look at both the AND truth table
         and OR truth table, there is no difference between the false and
         the unknown since a result of FALSE or UNKNOWN will prevent a row
         from being displayed.  However, in the truth table for NOT, there
         is a difference. The opposite of unknown is still unknown.
         
         

                                SELECT-14





         
         AGGREGATE FUNCTIONS - AVG, MIN, MAX, SUM, COUNT 
         
         All the aggregate functions operate on numeric columns except
         count which will operate on any columns. 
         
         SYNTAX: 
         
         AVG([DISTINCT] column_name) 
         MIN(column_name) 
         MAX(column_name) 
         SUM([DISTINCT]column_name) 
         COUNT([DISTINCT]column_name) 
         
         SUMMARY 
         
         AVG - without DISTINCT: The average of all values in a column
         AVG - with DISTINCT: The average of non-duplicate values 
         MIN - The minimum value in the column 
         MAX - The maximum value in the column 
         SUM - without DISTINCT: The sum of all values in the column 
         SUM - with DISTINCT: The sum of non-duplicate values 
         COUNT - without DISTINCT: the number of column values 
         COUNT - with DISTINCT: the number of non-duplicate column values 
         
         Notice that some of the functions have the distinct option. This
         will exclude all rows in the table which have duplicate column
         values. The follwing two examples show the difference. 
         select count(mst) 
         from manu; 
         CNT(mst)  
         --------  
                9  
          
         9 rows selected 
         
         The above query can be translated as: 
         How many rows have values in the mst column? There are a total of
         9. This is not very useful because every row is going to have an
         entry for mst. The answer will always be the total number of rows
         in the table since the mst column was created with the "not null"
         constraint. 
         The following query is typically more useful. It answers the
         question: "How many different states manufacture products?"
         
         select count(distinct mst) 
         from manu; 
         CNT(mst)  
         --------  
                4  
          
         9 rows selected 
         



                                SELECT-15





         
         Typically, when you are using a column name with count, you will
         modify it with distinct. When querying a table with a multiple
         part key, all columns will have the possibility of having
         duplicate entries. This is the case with the manu table with a
         key of date, code, mst. With such tables, you will modify the
         column name with distinct. When you query a table that has a key
         based on a single column, the only column you can be assured of
         not having duplicates is the key column. If you want to count all
         the rows in the table, there is a short-cut:
         
         select count(*) 
         from manu; 
         
         CNT(*)  
         ------  
              9  
          
         9 rows selected 
         
         At this point, you may ask what use the column name is without
         the distinct modifier? It is that wonderful concept of the null
         that has been touched on before and will be discussed in more
         detail about the other functions. The count function will not
         count rows that have a null value in the column you are counting.
         Actually, all the functions skip rows with nulls. In the employee
         table, not everyone has a corresponding manager number. The entry
         for employees without a manager is a null (actually only the
         president doesn't have a manager in this table). The following
         tells us how many employees have managers.
         
         select count(mgrnum) 
         from emp; 
         CNT(mgrnum)  
         -----------  
                  14  
          
         15 rows selected 
         
         This can be contrasted with the following query. Notice how
         simply adding the word "distinct" completely changes the meaning
         of the query to finding how many managers there are in the
         company.
         
         select count(distinct mgrnum) 
         from emp; 
         
         CNT(mgrnum)  
         -----------  
                   7  
          
         15 rows selected 
         



                                SELECT-16





         
         The functions also can be used with the where clause. The
         following shows how many batches of product DD are in the table.
         
         select count(*) 
         from manu 
         where code = 'DD'; 
         
         CNT(*)  
         ------  
              4  
          
         4 rows selected 
          
         Before we discuss the other functions, let's look at the
         percentage of defects in Idaho:
         
         select * 
         from manu 
         where mst = 'ID'; 
         date     code mst defects qty  
         -------- ---- --- ------- ---  
         02/07/87 GC   ID       12  15  
         02/01/87 GC   ID        0  55  
         02/02/87 DD   ID           25  
          
         3 rows selected 
         
         In Idaho, the are three entries: 12, 0, and "nothing". This
         "nothing" is called a null. Nulls are important in relational
         data bases. It does not mean zero or blank. A null means that the
         data element is not relevant in the row. In our case, product DD
         is not tracked for defects like other products. This isn't to say
         that there are zero defects. It just means we have no entry.
         Because there are only two valid entries for defects in Idaho,
         the functions will not take into account the null data element.
         The average percentage of defects will be 12/2 = 6, not 12/3 = 4:
         
         select avg(defects) 
         from manu 
         where mst='ID'; 
         AVG(defects)  
         ------------  
                    6  
          
         3 rows selected 
         
         
         The sum function totals the numeric values in the column(s)
         requested. Below we sum the number of product DD that has been
         manufactured.




         
                                SELECT-17





         
         select sum(qty) 
         from manu 
         where code = 'DD'; 
         
         SUM(qty)  
         --------  
              121  
          
         4 rows selected 
         
         More than one function can be used in a query: 
         
         
         select avg(qty), sum(qty) 
         from manu 
         where code = 'DD'; 
          
         AVG(qty) SUM(qty)  
         -------- --------  
               30      121  
          
         4 rows selected 
         
         
         Except for the group by clause, you cannot retrieve column values
         and functions based on column values in the same query. 
         
         COLUMN CALCULATIONS (*, /, +, -)
         
         Numeric columns can be used in calculations.  The following
         symbols are used:
         
         * = multiplication
         / = division
         + = addition
         - = subtraction
         The following shows the values if the defects doubled.
         
         select code, defects*2
         from manu;
         
         code      defects 
         ---- ------------ 
         GC             24 
         GC              0 
         NM             34 
         DD                
         DD             44 
         NM             30 
         DD             24 
         DD             30 
         GC              8 
         
         9 rows selected


                                SELECT-18





         
         In a calculation, multiplication and division are processed
         first, then the addition and subtraction.  The order of
         processing can be changed by adding parentheses.  Calculations
         within parentheses are calculated first.  More than one column
         can be used in a calulation and even the same column can be
         referenced more than once.  The column name for the calculation
         is taken from the first column name however you can rename the
         column (as shown in the full documentation).  The data type for
         the calculation is based on the first column in the calculation.
         Calculations can occur also in the where clause.
         
         GROUP BY, HAVING
         
         The group by clause is normally used with aggregate functions. 
         It has two operations:
         
         1.  It sorts by the column name.
         
         2.  The aggregate functions only operate based on the rows that
         have the same column name.  The functions in essence create
         sub-totals based on the column name.
         
         What if we wanted to know the average defects in each state:
         
         select mst, avg(defects) 
         from manu 
         group by mst; 
          
         mst AVG(defects)  
         --- ------------  
         AZ             8  
         CA            16  
         ID             6  
         WA            18  
          
         4 rows selected 
         
         
         The column name after the group by must exist on the line with
         the select.  After the select you can only have column names in
         the group by and aggregate functions - nothing else.
         You can restrict the group by clause with the having component.
         In SSQL you are allowed one simple selection that includes the =.
         <, <=, >, >=, and !=.  As with the group by, the column name
         in the having component must exist in the select clause.
         If you only wanted a list of states with defects over 10% you
         would use the following:
         






                                SELECT-19





         
         select mst, avg(defects) 
         from manu 
         group by mst having avg(defects) > 10; 
          
         mst AVG(defects)  
         --- ------------  
         CA            16  
         WA            18  
          
         2 rows selected 
         
         The group by clause can have up to two fields.  This is when you
         want a group within a group.  
         The group by clause can be used with the where clause.  When we
         found the average defects in each state we could have modified it
         by excluding product DD. 
         The where clause and the having clause are related.  However, the
         where clause operates on the whole table without regard for the
         grouping.  The having clause operates on the data that has
         already been grouped.  Because of the way the having clause
         works, most of the time the having clause contains an operation
         with an aggregate function because that is the basic purpose of
         the group by clause.
         
         ORDER BY
         
         The order by clause sorts the output of the table based on the
         column name(s) listed.  The original table is not changed. As
         with the group by clause, the order by clause can be used with
         the where clause.  For example, the following query will produce
         a list of manufacturing information sorted by defects for those
         items manufactured in Idaho.
         
         select date, code, defects 
         from manu 
         where mst = 'ID' 
         order by defects; 
          
         date     code defects  
         -------- ---- -------  
         02/02/87 DD            
         02/01/87 GC         0  
         02/07/87 GC        12  
          
         3 rows selected 
         
         You also can produce a sort within a sort.  The following query
         will produce an ordered list of dates and within each date the
         state will be sorted.




         
                                SELECT-20





         
         select date, mst, code, qty 
         from manu 
         order by date, mst; 
          
         date     mst code qty  
         -------- --- ---- ---  
         02/01/87 ID  GC    55  
         02/02/87 CA  NM    93  
         02/02/87 ID  DD    25  
         02/02/87 WA  NM    25  
         02/03/87 WA  DD    46  
         02/04/87 AZ  DD    25  
         02/04/87 CA  DD    25  
         02/06/87 AZ  GC    43  
         02/07/87 ID  GC    15  
          
         9 rows selected 
         
         The order by clause assumes ascending order.  You can reverse the
         order by finding out in the full documentation
         
         When there are two columns to sort, one can be in ascending order
         while the other is in descending order. 
         In the current version of SSQL, you are limited to two sort
         columns.
         
         REDIRECTTO file_name
         
         Normally the report that is produced by the select command is
         displayed on the monitor.  However, with the redirectto clause,
         the report can be redirected to a text file or to the printer. 
         The text file is in standard ASCII text.  That is, there are no
         special characters in it.  The file name you give it must not
         have an extension because SSQL adds the extension ".txt".  
         If you wanted all the Arizona products stored in a file called
         ARIZ.TXT and you wanted the report sorted by product code, you
         would use the following query.
         
         select * 
         from  manu 
         where mst='AZ' 
         redirectto ariz 
         order by code; 
         
         The output would be stored in a file called ARIZ.TXT on your
         default drive.  To display the file on the monitor, you would
         exit SSQL and the following at the DOS prompt:
         
         type ariz.txt




         
                                SELECT-21





         
         You also can have the report sent to the printer.  Replace the
         file name with prn or lpt1.  Make sure the printer is on when you
         use this option.  
         
         EXERCISES (ANSWERS IN THE FULL DOCUMENTATION)
         
         IT IS IMPORTANT TO USE ONLY THE INFORMATION IN THE QUESTION TO
         FORMULATE THE QUERY.  For example, it is not acceptable in
         question 15 to look at the data and just select attorneys that
         have a category of 1.
         
         1.  List the rows in the attorney table.
         2.  List the rows in the attorney table but just the following
         columns in the following order:  name, salary, years of service
         3.  List the different case numbers in the casework table.
         4.  List the attorney names for attorneys with real estate
         specialties.
         5.  List the attorney names for attorneys with over 15 years of
         service
         6.  List the client names for clients not in California.
         7.  List the client columns for clients who do not have
         originating attorneys.
         8.  List the cases that have primary attorneys.
         9.  List the clients whose names end in Inc.
         10. List the client names that contain the word Discount.
         11. List the casework information for August of any year. 
         12. List the attorney names for category 1 and category 2
         attorneys.
         13. List category 1 attorneys where the salary is over $50,000.
         14. Attorney names for all category 1 attorneys and category 2
         attorneys that earn over $40,000 and have over 4 years of
         service.
         15. List the attorneys who do not have a category of 2 or 3.
         16. Do number 15 another way.
         17. Do number 16 another way.
         18. List the attorneys who are category 1 or 2 and receive a
         salary of over $50,000.
         19. List the attorney names for attorneys who have worked 5, 6,
         10, or 12 years.
         20. Do number 19 another way.
         21. List the attorneys who have salaries greater than or equal to
         $40,000 and less than or equal to $60,000.
         22. Do number 21 another way.
         23. How many different originating attorneys are there?
         24. What is the average years of service for category 1
         attorneys?
         25. Who has the most years of service?
         26. List the number of entries in the casework table, by case
         number.
         27. How many hours has each attorney worked?
         28. What is the average salary by category?
         29. What is the lowest salary in each specialty?  Only include
         salaries greater than $30,000.
         30. How would you do #29 except save it in a file called
         NUM29.TXT?
         31. Sort the casework table by case number, and within case
         number the attorney number.

                                SELECT-22





         JOINING TABLES
         
         
         Often, the data we need exists in more than one table. In order
         to extract the data, we need to select the appropriate columns
         and join the tables. The type of join primarily discussed is
         called a natural join but for the sake of brevity I will just use
         the word "join" alone. 
         Whenever we join tables, there must normally be a common column.
         Hear the common column contains the customer code. It is not
         important that the column names are different. The important
         aspect is that they describe precisely the same thing - i.e.,
         they have a common domain.
         In SQL, the join operation normally has three basic components:
         
         SELECT column names - for duplicate names, precede the column
         name with the table name and a period as in prod.code
         
         FROM table names separated by commas
         
         WHERE common columns are set to be equal
         
         The following shows how to combine the sales information from 
         the sales table and the customer name from cust:
         
         select name, pc, qty 
         from sales, cust
         where cc=code;

         name            pc qty 
         --------------- -- --- 
         Organomice      MW  23 
         Organomice      DD  34 
         QuarkCo         AB   2 
         Marswarp        MW  81 
         Technoharps     NM   3 
         Technoharps     MW  41 
         Technoharps     GC  33 
         Compugorp       MW 125 
         Compugorp       MW 947 
         Compugorp       DD 452 
         Compugorp       NM  32 
         
         name            pc qty 
         --------------- -- --- 
         QuarkCo         GC 845 
         Organomice      NM  45 
         Organomice      MW  73 
         Compugorp       GC  50 
         Compugorp       DD  32 
         Compugorp       GC  77 
         
         17 rows selected

         MUCH MORE IN THE FULL DOCUMENTATION

                                JOIN-1




         
         EXERCISES (ANSWERS IN THE FULL DOCUMENTATION)
         
         Use only the information contained in the question!!!
         
         1.  List the attorney name and the specialty description (not
         just the specialty code) for each attorney.
         2.  List the casework table except replace the attorney number
         with the attorney name.
         3.  List the attorney name and specialty description for all
         originating attorneys who have clients in California. 
         4.  List the case numbers for all primary attorneys who are
         partners. 
         5.  List the attorney name and case numbers for all attorneys who
         are partners and work with clients from California.
         6.  List the attorney name and the number of hours worked by each
         attorney. 
         7.  List the attorney name and the number of hours worked by each
         attorney where the total number of hours is over  
         8.  List the attorney name and his or her supervisor's name for
         all those attorneys who do not work for partners. 
         9.  List any attorney who works for a client who has a case in
         Mesa, Arizona. 
         10. List all attorneys who work on at least one case outside
         Mesa, Arizona. 
         11. List the client name, case number, and originating attorney
         name for all clients in California.  Sort the report by case
         number within client name. 




























                                JOIN-2







         SIMPLE SUBQUERIES
         
         OVERVIEW
         
         In previous chapters, any comparison operation was done with
         actual values or a column name. Whenever we used the =, !=, <,
         > , <=, >=, in, all, or any there was a column name on one
         side and either a column name, an actual value or for the in,
         all, or any, a set of actual values on the other side. The
         problem is that often the values on right side of the comparison
         operation are not known until the query is made. In such cases
         the right side of the comparison is stated as a separate select
         command that is called a subquery. The result of the subquery is
         obtained first and the data is passed back to the previous query.
         Many queries can be linked together in this way.
         Another way of looking at it is that often, we need to break down
         our problem into more than one query. Each query will have its
         own select. We need subqueries when, in analyzing a problem, we
         find that we need information from one query before we can
         process another query. Sometimes we can either join tables or use
         a subquery. Typically, subqueries retrieve information more
         rapidly than joining tables.
         
         SUBQUERIES WITH =, !=, <, >, <=, AND >=
         
         These operators can be used with any subquery that produces a
         single value. It is commonly used with subqueries that contain  
         an aggregate function. The following shows the customer codes and
         quantity for those customers who have purchased more of product
         MW in a single purchase than the total purchased by customer BB.
         
         select  cc, qty
         from  sales
         where  pc = 'MW'
         and  qty >
           (select  sum(qty)
           from  sales
           where  cc = 'BB'
           and  pc = 'MW');
         
         cc qty 
         -- --- 
         EE  81 
         AA 125 
         AA 947 
         ZZ  73 
         
         4 rows selected
         
         This method also can be used with any column where we know it can
         only return a single value.



                                     SUB-1





         SET EXPRESSIONS - IN
         
         In the section on simple select statements, we used any and in
         with constants (actual values). The true power of the set
         expressions involves its use in subqueries. 
         
         We will first compare a join with a subquery. If we wanted to get
         product codes for all products purchased by customers in
         California, we could join the SALES table and the customer table.
         
         select  distinct pc
         from  sales, cust
         where  cc = code
         and  st = 'CA';
         
         pc 
         -- 
         MW 
         
         1 row selected
         
         
         Another approach would be to break it down into two queries. We
         know that we need a list of product codes from the SALES table.
         The SALES table has customer codes but it doesn't have
         information on states. Another way to state the problem is that
         we want all product codes from the SALES table where the customer
         code is in the set of customers that are in California. find the
         customers in California.
         
         
         select  distinct pc
         from  sales
         where  cc in
           (select  code
           from  cust
           where  st='CA');
         
         pc 
         -- 
         MW 
         
         1 row selected
         
         THERE IS MUCH MORE IN THE FULL DOCUMENTATION
         
         EXERCISES (ANSWERS IN THE FULL DOCUMENTATION)
         
         Use only the information found in the questions.  You will notice
         that some of the questions are the same as the ones in the
         chapter on joins.
         
         1.  List the case numbers that Hilda Wildabeas has worked on.
         2.  List the case numbers for all primary attorneys who are
         partners. 



                                     SUB-2






         3.  List the attorney name for all attorneys who are partners and
         work with clients from California. (Not just as primary
         attorneys)
         4.  List any attorney who works for a client who has a case in
         Mesa, Arizona. 
         5.  List all attorneys who work on at least one case outside
         Mesa, Arizona. 
         6.  List all attorneys who do not work on any cases in Mesa,
         Arizona. 
         7.  List attorneys with above average years of service.
         8.  List the names of attorneys who are originating attorneys
         9.  List attorney numbers for attorneys who work on both case 01
         and case 04. 
         10. List attorney numbers for attorneys who do not work on case
         01 or 04.
         11. List attorney names for originating attorneys who do not have
         clients in California.




































                                     SUB-3






         CORRELATED SUBQUERIES 
          
         OVERVIEW 
          
         A correlated subquery is a subquery that refers to a table 
         OUTSIDE the subquery. This causes correlated subqueries to be 
         processed differently from simple subqueries. Simple subqueries 
         are processed once, and the result is passed back to the main 
         query. The correlated subquery is processed for every row in the
         
         main query. This allows us to process a subquery based on a 
         particular column value in each row of the main query. It can get
         even more complex with multiple levels of subqueries. With simple
         subqueries, each subquery is isolated and passes back a single 
         set of values to the previous level. With correlated subqueries,
         each subquery can depend on more than one of the previous levels.
         
         If we are working on the SALES table we can have a subquery that
         is processed for each customer or product, not the whole table. 
         Another way of looking at it is that for each row in the main 
         query we can take a value, say customer code, and process a 
         subquery based on the customer. The value it produces for the 
         customer can be compared to another value in the same row in the
         main query. We will do that in the next section when we want to 
         display the complete row in a SALES table for every customer 
         purchase where the quantity purchased is above average FOR THAT 
         CUSTOMER. With a simple subquery we could only compare customer 
         purchases with average SALES for the whole table or a SINGLE 
         customer. Using the correlated subquery is sometimes like being 
         able to compare values to a subquery with a GROUP BY.  
          
         Often, we just want to test for the existence of a row in a 
         subquery based on a value in the first level of the query so SQL
         has the exists predicate. By using the correlated subquery we can
         create some rather complex tests on sets of data.  
          
         AGGREGATE FUNCTIONS 
          
         Let's contrast the correlated subquery with a simple subquery 
         that is produced below: 
          
         select * 
         from sales  
         where qty > 
          (select avg(qty) 
          from sales); 
          
         date     bc cc sn pc qty  
         -------- -- -- -- -- ---  
         04/01/87 1A AA 10 MW 947  
         04/08/87 1A AA 10 DD 452  
         04/08/87 1B DD 11 GC 845  
          
         3 rows selected 


                                     COR-1




          
         It solves the problem for displaying the complete row in the 
         SALES table for every customer purchase where the quantity 
         purchased is above average (based on the complete SALES table). 
          
         The way a simple subquery works is that it is processed ONCE, and
         
         the result is passed back to the main query. 
         Now let's change the query a little bit. Now we want to display 
         the complete row in a SALES table for every customer purchase 
         where the quantity purchased is above average FOR THAT CUSTOMER.
         
         Without knowing much else, it should at least be obvious that we
         need to process the subquery more than once since the query 
         states that we need an average for EACH customer to compare the 
         quantity to. Actually, the correlated subquery is more 
         inefficient than this. Usually, for EVERY row in the first table,
         
         the subquery is processed: 
          
         select * 
         from sales sales1 
         where qty > 
          (select avg(qty) 
          from sales 
          where cc = sales1.cc); 
          
         date     bc cc sn pc qty  
         -------- -- -- -- -- ---  
         04/12/87 1B BB 27 MW  41  
         04/15/87 2A BB 33 GC  33  
         04/01/87 1A AA 10 MW 947  
         04/08/87 1A AA 10 DD 452  
         04/08/87 1B DD 11 GC 845  
         04/01/87 2A ZZ 12 NM  45  
         04/08/87 2A ZZ 12 MW  73  
          
         7 rows selected 
          
          
         On the last line of the subquery we set cc = sales1.cc. This 
         means that for every row in the first table, it will take the 
         customer code (sales1.cc), and compute the average quantity for 
         that customer. It will then determine whether the quantity is 
         greater than the average quantity. We had to use the alias sales1
         to distinguish one SALES table from the other. Following any 
         table name we can rename it to avoid confusion or ambiguity. The
         alias can be any name that would be a valid table name. 
          





                                     COR-2





         EXISTS/NOT EXISTS  
          
         The exists predicate tests for the existence of a row selected in
         a subquery BASED ON DATA IN THE CURRENT QUERY (and possibly outer
         queries). We do not care what data selected happens to be in the
         subquery, we just want to know that it exists. The following 
         shows how to find the names of products in the SALES table. 
          
         select descrip 
         from prod 
         where exists 
          (select * 
          from sales 
          where code = pc); 
          
         descrip          
         ---------------  
         Megawamp         
         Gigasnarf        
         Nanomouse        
         Dynamic Disk     
          
         4 rows selected 
          
         THE TRUE VALUE OF THE CORRELATED SUBQUERY CAN BE SEEN IN THE FULL
         DOCUMENTATION - ABOUT 40 PAGES!!! 
          
         EXERCISES (ANSWERS IN THE FULL DOCUMENTATION) 
          
         1.  List the state and the attorney with above average years of 
         service in that state.  
         2.  List all attorneys who work in over 2 cases.  
         3.  List all attorney numbers and corresponding cases for those 
         who have worked over 10 hours on a single case.  
         4.  List the case numbers for all primary attorneys who are 
         partners.  
         5. List the attorney numbers for all attorneys (not just primary
         attorneys) who are partners and work with clients from 
         California.  
         6.  List the originating attorneys who have clients in all 
         states.  
         7.  List the originating attorneys who have clients in all states
         except California  











                                     COR-3






         CONVERTING ENGLISH TO SQL
         
         OVERVIEW
         The previous chapters emphasized the point of view of SQL and
         understanding all the parts.  This chapter is more concerned with
         the point of view of a person wanting to solve queries using SQL. 
         There are three pieces of important information - understanding
         the database, understanding the query, and finally writing the
         SQL statement.
         
         ***************************************************************
         **  THE FULL DOCUMENTATION HAS THE SQL STATEMENTS AND        **
         **  EXPLANATIONS.  THE FOLLOWING WILL GIVE YOU A GOOD        **
         **  IDEA OF THE FLEXIBILITY OF SQL AND THE VARIETY OF        **
         **  PROBLEMS THAT IT CAN SOLVE  (IT SHOULD ALSO CONVINCE     **
         **  YOU TO REGISTER SO YOU CAN GET THE FULL DOCUMENTATION!)  **
         ***************************************************************
         
         UNDERSTANDING THE DATABASE
         In the chapter on the example databases, when a column was
         described, any other common columns in other tables was mentioned
         also.  This commonality allows us to work with information that
         spans tables.  There are other ways to group this information
         that may be useful.  The first way is to group them by the common
         domains.  The Monolith Manufacturing database has four basic
         domains (I do not count date): state, product code, employee
         number, and branch code. We can group them as follows:
         
         
         
         NAME TABLES COLUMN NAME
         STATE CUST st
          MANU mst
          BRANCH st
         
         PRODUCT MANU code
         CODE PROD code
          SALES pc
         
         EMPLOYEE SALES sn
         NUMBER EMP enum
          EMP mgrnum
          BRANCH mgrnum
         
         BRANCH BRANCH code
         CODE SALES bc
         
         Whenever we join tables or use a subquery, we must use common
         domains so the above information is essential.
         
         
         
         
         
         
                                    ENG-1





         GENERAL APPROACH TO SOLVING THE QUERY
         (This section is only in the full documentation)

         The Numbering Scheme For Queries
         Each key word or words is given a number from 1 to 4.  The number
         is further divided into numbers to the right of a decimal as to
         how the keywords are used.  Each example is  followed by a
         letter.  Query 3.2B corresponds to the second example(B) for the
         second use(2) of keyword 3.  Queries preceded by an 'N' means
         that it is a negated version of the query.  There may be more
         than one way to negate it so the version is in the right-most
         position as in: N3.2B.2.
         
         1 - AND
         The and is used to refer to information in columns.  In its
         simplest form, it is used to select which columns to display.  It
         is commonly used to determine which rows to display.  As you will
         see from the examples, there are many ways to translate and into
         SQL.
         1.1 Used to describe which columns to display.
         1.1A List the date of manufacture, product code, and quantity.
         
         1.2 Used when you need or:
         1.2A List the rating for Organomice and Compugorp.
         1.2B List the dates of purchase for products MW and NM.
         
         1.3 Ambiguous 
         Solution could be an or a more complex construction.  Usually the
         ambiguity arises because we are referring to sets of values
         instead of single values.  The answer could be a union of the two
         sets (or) or an intersection (subquery). Query 1.2A asks for
         rating which will be a single value for each customer.  In query
         1.3A, we are concerned with two sets of values - products
         manufactured in Washington and products manufactured in Idaho. 
         Just because it refers to sets of values does not necessarily
         mean that it is ambiguous.  Query 1.2B refers to sets but (in my
         opinion) it is not ambiguous.  Contrast 1.2B with 1.3B which I
         think is ambiguous.
         1.3A  List the products manufactured in Washington and Idaho.
         1.3B  List the dates when products MW and NM were purchased.
         
         1.4. Not Ambiguous
         However the and translates into a more complex SQL statement. 
         What we are after here is often an intersection of the sets as
         you can see in 1.4A and 1.4B.  That is, we want values common to
         all sets. An intersection can normally be achieved through a
         series of subqueries.
         1.4A  List the products manufactured in both Washington and
         Idaho.
         1.4B  List the dates when all of the following products were
         purchased: MW, NM, and GC.
         1.4C  List the customers who are from Arizona and have purchased
         product MW.  




                                    ENG-2





         1.5 Definitely need an and in the where clause.  
         The and is used when we want to test two or more different
         columns in a row within a single table.
         1.5A  List the customers who are from Arizona and have a rating
         over 15.
         
         1.6 Implied and
         1.6A  List the Arizona customers who have a rating over 15.
         Same as 1.5A
         1.6B  List the Arizona customers who have purchased product MW.
         Same as 1.4C
         
         OR
         2.1  Normally translates to or:
         2.1A  List the customer codes for customers who have purchased MW
         or NM.
         2.1B  List the customers names for customers who have purchased
         MW or NM.
         2.1C  List the customer names for customers who are from
         California or have a rating less than 10.
         
         2.2 Comparison operators <= and >=.
         2.2A  List customers who have a rating greater than or equal to
         15.
         
         3 - WHICH, WHO, WHOSE, THAT, WITH, WHERE
         The above words have various meanings but I will emphasize their
         use in clauses.  Clauses connect parts of sentences.  Sometimes
         is makes a query clearer when it is converted to a form that has
         a clause.  The first six queries ask the same thing in different
         ways.  
         3.1A  Which customers have a rating over 10?
         3.1B  Who has a rating over 10?
         3.1C  List customers who have ratings over 10.
         3.1D  List customers with ratings over 10.
         3.1E  List every customer whose rating is over 10.
         3.1F  List every customer where the rating is over 10.
         Queries 3.1C through 3.1D are the most straightforward because
         the first part describes what is to be displayed and the second
         part describes the logic to determine which rows we want.  Many
         of the following can be rewritten in a similar manner but I will
         usually present only one approach.
         
         3.2  Link tables  
         3.2A  List the customer's states for customers who have purchased
         products  that are manufactured in Idaho.
         3.2B  Get branch codes for branches that sell products that are
         sold by branches that sell product DD. This is a rather
         convoluted one but shows the power of recognizing clauses. 
         Logically we want to find all the branches that sell product DD.






                                    ENG-3





         Then we want to take those branches and find all the products
         they sell.  With that set of products, we want to find all the
         branches that sell those products.  Notice how in 3.2B each
         subquery corresponds to each clause.  Be careful doing the
         conversion.  Sometimes the "that" does not have to be included. 
         Get branch codes for branches that sell products sold by branches
         that sell product DD.  In the previous sentence the "that" is
         missing between "products" and "sold".
         3.2C  List the names of employees who have sold products to
         Compugorp.
         3.2D. Get customer names and product names for customers who have
         purchased items that are manufactured outside their own state.
         3.2E  Get branch code, customer names and product names for those
         who purchase products that are manufactured in their own state
         from a branch in their own state.
         3.2F  Get branch numbers for branches that sell to both AA and
         BB.
         3.2G Who are the managers?
         3.2H  What are the names of managers who actually sold something?
         3.2I  What are the names of managers whose salespeople have sold
         products to Organomice?
         3.2J  What are the names of managers whose salespeople have sold
         products ONLY to Organomice? We have to add something to exclude
         salespeople who sold to a customer other than Organomice.
         3.2K List the names of Xero Xanadu's subordinates who sold
         Technowidgits and what were the quantities sold?
         3.2L  Get branch codes for branches that sell to a Washington or
         Arizona customer a product manufactured in Oregon.
         3.2M Get all pairs of state values where the branch in the first
         state sells to a customer in a second state.
         
         3.4  Implied that or who  
         The words in parentheses in the following three queries are
         optional.
         3.4A  Get product codes for products (that were) sold to any
         customer in California.
         3.4B  Get product numbers and corresponding customer names for
         products (that are) manufactured in the same state as a customer.
         3.4C  Get customer numbers for customers (who were) sold at least
         one product from a branch in the same state.
         
         4 - ANY/ALL
         Translating any and all cause the same sort of problems that were
         caused by and.  This is because the way we use a word in English
         may be different from the way we translate it to SQL.
         First of all, I will skip over any queries in which the any or
         all serve no purpose.  Often they are added for emphasis and CAN
         mean the same thing as in queries 4.1A and 4.1B.  Normally, the
         word any serves no purpose unless it is used in a comparison.




                                    ENG-4





         4.1  All and any not needed.  
         4.1A  Get all product codes for all products purchased by
         customers in California. 
         Same as 3.4A
         4.1B  Get any product code for any products purchased by any
         customer in California. 
         Same as 3.4A
         4.1C  Get product codes for products purchased by customers in
         California. 
         Same as 3.4A
         
         4.2  All used as part of a FORALL quantifier
         This was discussed in detail in the chapter on correlated
         subqueries. It is used when we want to compare one set of values
         to another set of values instead of comparing a single value to a
         set of values or comparing a single value to a single value.
         4.2A  Get product codes for products purchased by all customers.
         4.2B  Get product codes for products purchased by all customers
         in California.
         4.2C  Get product codes for products where the minimum defects is
         greater than 10 and has been purchased by all customers.
         4.2C  Get customer names for customers who have purchased all
         products.
         4.2D  States that manufacture all products sold by a branch in
         the same state.
         4.2E  Branches that have sold all the products manufactured in
         their own state.
         4.2F Branches that have sold all the products to all the
         customers.
         
         4.3 Using any and all in comparisons
         These are very deceiving.  The use of any normally translates to
         all in SQL or an equivalent construction.  This idea is discussed
         in the chapter on subqueries.
         4.3A  List products that have defects greater than any defect for
         products manufactured in Idaho.  Compare this to 4.3B.
         4.3B  List products that have defects greater than all defects
         for products manufactured in Idaho.
         Query 4.3A is normally interpreted as the same as 4.3B although
         logically it means something different.  If you think that they
         are different in common English then I guess SQL has distorted
         your thinking a bit.  When a tennis player says that he is better
         than ANY tennis player, we assume that he means that he is better
         than ALL tennis players.  The confusion is caused by the fact
         that in most contexts any and all are very different as in the
         following two sentences.  Give me any book.  Give me all the
         books.
         4.3C  List products that have defects less than any (all) defects
         for products manufactured in Idaho.
         4.3D  List products that have defects the same as any defects for
         products manufactured in Idaho.  In this case we cannot replace
         the "any" with an "all" and retain the same meaning.
         


                                    ENG-5





         N - NEGATION
         In this section I will take many of the above queries and negate
         them.
         N1.2a List the rating for all except Organomice and Compugorp.
         N1.3A.1  List the products manufactured in neither Washington nor
         Idaho.
         N1.3A.2 List the products not manufactured in both Washington and
         Idaho.
         N1.3B.1  List the dates that products MW or NM were not
         purchased.
         N1.3B.2  List the dates that products other than MW or NM were
         purchased.
         N1.4B.1  List the dates when all of the following products were
         not purchased: MW, NM, and GC.
         N1.4B.2  List the dates when none of the following products were
         purchased: MW, NM, and GC.
         N1.4B.3  List the dates when something other than the following
         products were purchased: MW, NM, and GC.
         N1.4C.1  List the customers who are from Arizona and have not
         purchased product MW.  
         N2.1B.1  List the customers names for customers who have not
         purchased MW or NM.
         N2.1B.2  List the customers names for customers have purchased
         products other than MW and NM.
         The difference between N2.1B.1 and N2.1B.2 is that the first one
         would exclude any customer who has purchased MW or NM.  The
         second one would include the customer as long as the customer
         purchased another product.
         N3.2A.1  List the customer's states for those customers who have
         not purchased products manufactured in Idaho.
         N3.2A.2  List the customer's states for those customers who have 
         purchased products not manufactured in Idaho.
         N3.2A.2  List the customers' states for those customers who have 
         purchased products manufactured outside (not in) Idaho.
         The above differs from the previous query in that it will include
         any product manufactured in Idaho IF it is manufactured outside
         Idaho.
         N3.2B.1  Get branch codes for branches that do not sell products
         that are sold by branches that sell product DD.
         N3.2B.2  Get branch codes for branches that sell products that
         are not sold by branches that sell product DD.
         N3.2B.3  Get branch codes for branches that sell products that
         are sold by branches that do not sell product DD.
         The negation is on selling product DD.  This is different from
         saying: "...branches that sell products other than DD".  
         N3.2C.1  List the names of employees who have not sold products
         to Compugorp.
         N3.2D.1 Get customer names and product names for customers who
         have purchased items not manufactured outside their own state.
         N3.2D.2 Get customer names for customers who have not purchased
         items manufactured outside their own state.  




                                    ENG-6





         N3.2D.3 Get customer names for customers who have only purchased
         items in their own state. 
         At first glance N3.2D.3 seems the same as N3.2D.2 but N3.2D.2
         would display customers who have not purchased anything.  We have
         to add some more to make sure that the customer actually made a
         purchase.
         N3.2F.1  Get branch codes for branches that do not sell to both
         AA and BB.
         N3.2F.1  Get branch codes for branches that sell to neither AA
         nor BB.
         N3.2F.1  Get branch codes for branches that do not sell to AA or
         BB.
         N3.2G.1  What are the names of managers who did not sell
         anything?
         N3.2I.1  What are the names of managers whose salespeople have
         not sold products to Organomice?
         N3.2I.2  What are the names of managers whose salespeople have 
         sold products to everyone except Organomice?  This becomes a
         tough one because the opposite of "only Organomice" in 3.2I is
         "everyone except Organomice" and "everyone" corresponds to the
         FORALL quantifier covered in the chapter on correlated
         subqueries.  The core of this query has to do with "salespeople
         selling to ALL customers (except Organomice)".
         N3.2L.1  Get branch codes for branches that sell to a Washington
         or Arizona customer a product not manufactured in Oregon.
         N3.2L.2  Get branch codes for branches that sell to a Washington
         or Arizona customer a product manufactured outside of Oregon.
         N4.2A.1  Get product codes for products not purchased by all
         customers.
         N4.2A.2  Get product codes for products purchased by none of the
         customers.
         N4.2D.1  States that do not manufacture all products sold by a
         branch in the same state.
         N4.2D.2  States that manufacture no products sold by a branch in
         the same state.
         N4.2E.1  Branches that have not sold all the products
         manufactured in their own state.
         N4.2E.2  Branches that have sold none of the products
         manufactured in their own state.
         N4.2E.3  Branches that have sold all the products not
         manufactured in their own state.
         N4.2E.4  Branches that have sold all the products manufactured
         outside their own state.

                                    ENG-7





         CREATE  TABLE
         
         OVERVIEW
         The CREATE TABLE command is used to create a table file. You can
         control the contents of the columns in two ways.  You can prevent
         a column from being null and you can make sure that a column or
         set of columns never contain duplicate values.  These
         restrictions allow us to maintain valid primary keys when we use
         the INSERT command to add rows to a table or the UPDATE command
         to modify values in a table.
         
         SYNTAX
         
         CREATE TABLE table_name (
           column_definition [, column_definition...]
           [, uniqueness_constraint]
         );

         EXAMPLE:
         The statement below shows how to create the cust table that  the
         documentation uses. 
         
         create table cust ( 
         code char(2) not null unique,   
         name char(15) not null,
         st char(2) not null,
         rating numeric(2)
         );
         
         You can define up to 27 columns in a table.
         As with all SQL commands, they can be in uppercase or lowercase. 
         After the name of the table, parentheses enclose the column
         definitions. The column definitions are put on separate lines to
         aid in readability.  SQL never requires anything to be put on
         separate lines or have specific spacing. Note that all column
         definitions except the last one has a comma after it.
         The above command states that there will be four columns in the
         cust table:
         
         code can have up to two characters.  It is the primary key so
         nulls will not be allowed and each code will be unique.
         
         name can have up to fifteen characters. It must contain a value.
         
         st   is the state postal code and it can have up to 2 characters.
         It must contain a value.
         
         rating is the customer rating.  Since NOT NULL is not specified,
         the customer rating is optional - it does not have to be entered.






                                      CREATE-1





         COMPONENTS OF CREATE TABLE
         
         table_name
         A table name can be from 1 to 10 characters.  The first eight
         characters must be unique.  The first character must be a letter 
         of the alphabet.  The rest can be letters or digits, _
         (underscore), or #.  The table files are created on the disk as in
         table_name.DBF and table_name.SQD.  For example, the cust 
         table, created above would be stored as CUST.DBF and CUST.SQD 
         on your disk.  However, from SSQL, you would always refer to it 
         as CUST.  Since SSQL adds the extension of DBF and SQD to all 
         table files, you must not use a period in your table name.   
         
         column_definition
         
         column_name data_type [NOT NULL [UNIQUE]]
         
         column_name
         A column name can be from 1 to 10 characters.  The first
         character must be a letter of the alphabet.  The rest can be
         letters or digits.  In creating column names remember that when
         you display a table, the full column name is displayed too as the
         heading.  Long column names tend to fill the screen (or printer)
         very rapidly when you want to display many columns.  The column
         name is displayed exactly as you type it, retaining the uppercase
         and lowercase letters.  The create statement above created the
         column names and hence the headings in lowercase letters.  We
         could have written it as shown below.
         
         create table cust ( 
         CODE char(2) not null unique,   
         NAME char(15) not null,
         ST char(2) not null,
         RATING numeric(2)
         );
         
         With the statement above, whenever we display data from the
         table, the headings would in uppercase.

         data_type
         The data types in SQL fall into two broad categories - numbers
         and characters.  Within the numbers category, there are exact
         numeric types and approximate numeric types.  However, all 
         numeric data types are converted to the dBase numeric data 
         type.  The other types are included to maintain compatibility 
         with ANSI SQL.  Two non-standard data have been added to 
         maintain compatibility with dBase - Date and Logical.



         

                                CREATE-2





         Numeric
         
          (Exact Numeric)
          NUMERIC[(length [,decimal_places])]
          DECIMAL[(length [,decimal_places])]
          DEC[(length [,decimal_places])]
          INTEGER
          INT
          SMALLINT
          (Approximate Numeric covered in the full documentation)

         When you use numeric data types the values are always
         right-justified (values are pushed to the right so all the
         decimal lines up).  Data must be of this type in order to use any
         of the numeric functions such as avg, max, min, and sum.  
         The first three data types in the exact numeric category -
         NUMERIC, DECIMAL, and DEC, can be used interchangeably.  It
         sounds a little odd that a data type called DECIMAL does not
         necessarily mean that the contents of the column will contain a
         decimal place since the modifier decimal_places is optional. 
         
         length (optional)
         The length of the column be up to 12 digits (including the
         decimal place. Without this specification, the length is 1.
         
         decimal_places (optional)
         The number of places to the right of the decimal.  For Example:  
         
         cost  numeric(5,2)
         
         This would allow a maximum of 99.99 to be stored in the column.
         
         This also could be defined as:
         
          cost decimal(5,2)
         or 
          cost dec(5,2)
         
         It is allowable to use whole numbers even though you define it as
         having decimals.  For example, you want to enter grades that are
         from  0 to 100 but when you calculate grade averages, you want it
         calculated to one tenth of a grade point.  You would define the
         column as:
         
          grade  numeric(5,1)
         
         You would enter the grades as whole numbers but when the average
         is calculated, the decimal would be included. 
         With NUMERIC, DECIMAL and DEC, if you omit the dec_places
         modifier, the result is a whole number.
         
         Data types such as INTEGER (which is the same as INT) and
         SMALLINT have lengths associated with them.  The ANSI standards
         state that the lengths shall be determined by the implementor so
         I have picked lengths of ten and five respectively.

                               CREATE-3

         
         INTEGER is the same as numeric(10) or decimal(10) or dec(10)
         SMALLINT is the same as numeric(5) or decimal(5) or dec(5)
         
         You can see that although there are six exact numeric data types,
         you only need one.
         
         Characters
         
          CHARACTER[(length)]
          CHAR[(length)]

         These data types can be used for any column that you do not use
         in a calculation.  Although the data is usually a combination of
         alphabetic and numeric data, it is alright if the column just
         contains digits.  The characters are left-justified.  The maximum
         column width is 80.  CHARACTER and CHAR can be used
         interchangeably.  If you omit the length modifier, then the
         length of the column is one.
         
         Date
           DATE
           The DATE data type creates a column of 8 characters.  Dates 
         are entered as mm/dd/yy.  
         
         Logical
           LOGICAL - A one character column that can store Y, y, N, n, 
         T, t, F, f, or ? 

         NOT NULL
         This modifier to a column definition will ensure that there is
         always a value for this column. It prevents the INSERT and UPDATE
         commands from allowing a column to contain a null value. When
         used with the UNIQUE modifier, it is used to specify a primary
         key.  There are special commands to retrieve rows that only have
         null values in a particular column or to exclude rows that have
         null values in a particular column.
         
         UNIQUE
         This ensures that each value in the column is unique.  If an
         attempt is made to enter a duplicate value when inserting a new
         row, an error results and the row is not added to the table.  If
         you use unique, it must be used with NOT NULL. This is typically
         used when a single column is a primary key. 
         
         Uniqueness_constraint (covered in full documentation)
         
         CHECKING THE STRUCTURE OF A TABLE
         In order to display the create command used to create the table,
         type STRUCT followed by the table name.
         
         EXERCISES (Answers in full documentation)
         The following are based on the law firm database as described in
         the chapter on the example databases.  
         1.  Create the SPCLTY table
         2.  Create the ATTORNEY table
         3.  Create the CLIENT table
         4.  Create the CASE table
         5.  Create the CASEWORK table

                                     CREATE-4






         CREATE A VIEW

         OVERVIEW
         A view is a derived table.  A view describes an alternative
         access to columns and tables that already exist.  The create
         table command allowed us to create a physical table that is also
         called a base table.  With a base table every column corresponds
         to the source of data.  We can always use the insert, update, and
         delete commands on base tables.  Views never exist as permanent
         tables.  Whenever you query a view, it creates a temporary table
         based on your view.  When the query is complete, the temporary
         table is erased.
         The view can reference an existing column under a different name
         or keep the original name. The view can be based on more than one
         table.  You can reference as few or as many columns you want in
         the tables you select.
         
         SYNTAX
         
         CREATE VIEW view_name [(column_name [,column_name...])] AS
         select_statement
         
         EXAMPLES:
         Create a view which only shows less than the full number of
         columns in a table.  In a commercial database system, this can be
         used to prevent users from seeing sensitive data.  For example,
         The employee table may include salary information.  A view of
         that table could have everything except the salary information.
         It is necessary to have some background in the use of the select
         command before attempting to create a view of a table.  The
         statement below shows the creation of a view called custa.   It
         is based on the cust table that has four columns:  code, name,
         st, and rating.
         
         create view custa as
         select code, name, st
         from cust;
         
         The column names are the same as they are in the original table. 
         The only difference is that rating is not part of the view.
         When you use view custa in a query, it acts just like a regular
         table.  When it displays all the columns as shown below, you only
         see the three columns specified in the view.  
         
         select * 
         from custa; 
         
         code name            st  
         ---- --------------- --  
         AA   Compugorp       WA  
         BB   Technoharps     OR  
         ZZ   Organomice      AZ  
         DD   QuarkCo         AZ  
         EE   Marswarp        CA  
         FF   Multicrud       NV  
         
                                     VIEW-1





         We have no access to the rating column when using the custa view.
         
         RULES FOR USING VIEWS
         
         It is used in a select statement, NOT an insert, update, or
         delete statement. To erase the view, use the drop view statement.
         
         Can contain any select statement except one that has redirectto. 
         
         Views should only be used when they are absolutely needed.  They
         can add much confusion to a database design because it is easy to
         forget which are tables and which are views.
         
         (MORE IN THE FULL DOCUMENTATION)








































                                      VIEW-2






         DROP TABLE/VIEW

         OVERVIEW
         The drop command is used to erase a table or view from the disk.
         The drop table command is used to erase the description of the
         table from the disk.  The drop view command erases the view but
         can never alter data or tables since the view simply describes
         access to a table or tables.
         
         SYNTAX
         
         DROP TABLE table_name;
         or
         DROP VIEW view_name;
         
         EXAMPLES:
         
         drop table cust;
         drop view custa; 
         
         COMPONENTS OF THE DROP COMMAND
         
         table_name
         The table_name must be a valid table name which contains NO data. 
         In order to delete all the data you can first type:
         
         delete from table_name;
         
         The delete command erases the data (see chapter 10 for more
         details) and the drop table command erases the column
         descriptions.
         
         view_name
         The view_name must be a valid view name.  Since no data is
         affected it can be used at any time.




















                                DROP-1






          INSERT DATA INTO A TABLE

          OVERVIEW
          The ANSI standards define two ways to add data to a table. One
          requires us to type each value for each column in each row. The
          other copies data from one table and puts it in another. It is
          very useful for making corrections to tables. I only describe the
          first type in this documentation.  Registered users find out
          about the more advanced use of the insert command and a special,
          non-ANSI command which makes inserting data MUCH easier.
          
          Both insert commands maintain the restrictions we may have
          imposed through the CREATE TABLE command.  We could have
          specified NOT NULL and UNIQUE to prevent certain types of data
          errors in our tables.
          
          INSERT VALUES - SYNTAX
          
          INSERT INTO table_name [column_name [,column_name...]]
          VALUES (column_value [,column_value]);
          
          EXAMPLES:
          
          The first example shows the typical way to use the insert command
          since it does not reference any column names.  The insert command
          assumes that you will enter the data in the order that they were
          created in the table.  The second example shows that column names
          can be referenced. The third example shows that the data entry
          does not have to be in the order in which the columns were
          created.  Compare the order of the values to the first example.
          insert into cust values('AA','Compugorp','WA',20);
          or
          insert into cust code, name, st, rating
          values('AA','Compugorp','WA',20);
          or
          insert into cust name, code, rating, st 
          values('Compugorp','AA',20,'WA');
          
          MORE DETAIL ON THE COMPONENTS OF THE SYNTAX
          
          table_name
          
          Any existing table in your database.
          
          column_name
          
          Normally column names are not used with the insert command.  This
          is because the insert command assumes that we are going to insert
          values for all the columns in the table in the order in which
          they were created. You saw this in the first example.  It has the
          same effect as the second example.  In the third example we want
          to insert data in a different order.  This could be useful if the
          source document that we are getting the data from presents the
          data in a different order from which the table was designed.  



                                   INSERT-1





          column_value
          There are three types of column values: character, numeric and
          null.
          
          Character data
          Character data must be enclosed in quotes or apostrophes. The
          first example above could have been entered as:
          
          insert into cust values("AA","Compugorp","WA",20);
          
          Although you can enter SQL commands in uppercase or lowercase,
          care must be taken when entering character data since everything
          is stored exactly as entered.  This can create problems when we
          are retrieving data.  Let's assume that Compugorp purchased some
          Megawamps so we insert the following information into the sales
          table: date, branch code, customer code, employee number, product
          code and quantity.
          
          insert into sales values('04/01/87','1A','aa',10,'MW',947);
          
          Although SQL would accept the above insert command, we made a
          critical logical error.  The correct customer code for Compugorp
          is 'AA', NOT 'aa'.  This is an error that is rather difficult to
          detect.  Any time we relate the sales table with the cust table,
          the above row in the sales table will not be retrieved.  This
          could cause reports to disagree.  The section on correlated
          subqueries explains how to detect this problem.  Technically, it
          is called referential integrity.
          Another mistake that is easily made involves accidentally having
          leading or trailing spaces in a character value.  If we inserted
          the data for Compugorp with the following:
          
          insert into cust values('AA','Compugorp ','WA',20);
          
          You will notice the space after the last 'p' in Compugorp.  There
          will not be a problem with it until you try a query that includes
          the name of the company as shown below.
          select *
          from cust 
          where name = 'Compugorp';
          
          The row with Compugorp will not be found because the query did
          not contain the space after the last p!  This is a very
          frustrating error as I have seen quite a few students accuse me
          of having a serious malfunction in my program with the look on
          their faces suggesting what I could do with SSQL.
          All columns have a particular length associated with them.  This
          denotes the maximum number of characters that the column can
          contain.  When we created the cust table, the name column was
          defined as char(15) which means that the maximum number of
          characters it can contain is 15.  If more than 15 characters are
          in the name, only the first 15 are saved.



                                   INSERT-2




          
          insert into cust values('GG','Bizzlesnarf & Sons','CA',10);
          
          Although the above command would be allowed, when we retrieve the
          customer name, only "Bizzlesnarf & " would be displayed.
          
          Numeric Data
          The basic rule to remember with numeric data is not to enclose
          them in quotes as we can see above with the entry for rating. 
          The length of the column as specified in the create table command
          must not be exceeded.  Rating was created as numeric(2) which
          means that the maximum number of digits is 2.  The following
          insert command would cause an error because the entry for rating
          contains 3 digits instead of 2:
          
          insert into cust values('AA','Compugorp','WA',123);
          
          Because of the error, none of the values would be added to the
          table.
          
          Null data
          I really should not write "null data" or "null value" because the
          concept of the null means absence of a value.  If we add a
          customer that has no rating we would do something like:
          
          insert into cust values('HH','MagnaMice','AZ',null);
          
          There are NO QUOTES enclosing the word null.  Like all other
          keywords in SQL, it can be in uppercase or lowercase letters. 
          The null is different from a 0 (zero) in that a null means that
          there is no rating.  A 0 (zero) means that there IS a rating and
          the rating is 0.  This idea is further developed when discussing
          data retrieval in the section on the select command.          






















                                   INSERT-3






         UPDATE DATA IN A TABLE
         
         OVERVIEW
         The update command is used to change column values in existing
         rows based on criteria in a search_condition that is accomplished
         through a where clause. If there where any constraints put on the
         column values when the table was created such as not null or not
         null unique, the update command makes sure that the constraints
         are maintained before the columns are actually updated.  Next to
         the insert command, it is the most cumbersome to use.  To make
         updates a bit easier, I made a non-ANSI command which is fully
         explained in the full documentation.
         
         UPDATE SYNTAX
         
         UPDATE table_name
         SET column_name = value [, column_name = value...]
         WHERE search_condition

         The value can be a mathmatical expression.

         EXAMPLES:
         In the first example, the rating for customer AA is increased 
         by 5.
         
         update cust
         set rating = rating + 5
         where code = 'AA';
         
         In the example below, the rating for customer CC is changed to a
         null.
         
         update cust
         set rating = null
         where code = 'CC';
         
         
         The example below shows how to change the percent defects to 10
         for a batch of product GC that occurred on July 21, 1987 in
         Idaho.
         
         update manu
         set defects = 10
         where date = '07/21/87' and code = 'GC' and mst = 'ID';
         
         In the following, two columns are changed.  For customer BB,
         rating is changed to 14 and the state column is changed to Idaho.
         
         update cust
         set rating = 14, st = 'ID'
         where code = 'BB';
         

                                      UPDATE-1





         The example below is a bit more involved.  We want to change the
         rating of branch 2A customers who have purchased above average
         quantities (overall) to 30. The use of the select command in a
         where clause is covered in a later section.  

         update cust
         set rating = 30 
         where code in 
          (select distinct code 
           from cust, sales
           where cc=code  
             and bc='2A'  
             and qty >
            (select avg(qty) 
             from sales)); 
         
         COMPONENTS OF UPDATE
         
         table_name
         Any existing table in your database.
         
         column_name
         Any valid column name in the table name accessed, including the
         column(s) which form the key. 
          
         value
         The value is anything appropriate for the data type of the
         column.  Any value that would work with the insert command will
         work with the update command.  As with the insert command, the
         word null is valid to show that there is no value for the column. 
         Remember to put quotes around character values.
         
         
         search_condition
         The section on the select command has more detail on the
         search_condition that is accomplished with the use of a where
         clause.  Typically, you want to update a single row.  To update a
         single row the search_condition must test for the primary key so
         that will be explained here.  The primary key allows you to
         uniquely define each row.  The cust table, which is used in most
         of the examples above, has a primary key based on code.  That is,
         based on the value in code, we know only a single row will be
         updated.  
         
         Compound keys are discussed in the full documentation.







                                UPDATE-2






         DELETE ROWS FROM A TABLE
         
         OVERVIEW
         The delete command deletes rows based on the criteria in the
         where clause.  Without a where clause, all the data in the table
         is deleted.
         Refer to the section on the select statement for details on the
         where clause.  The basic difference between the select * and the
         delete is that with select, the rows are displayed, and with
         delete, the rows are deleted.  Because of this, it is a smart
         idea to use the select before you use the delete so you can see
         the rows that you are going to delete.
         You can only delete complete rows.  If you want to delete column
         data within a row, use the update command.
         
         SYNTAX
         
         DELETE FROM table_name
         [WHERE search_expression]
         
         EXAMPLES:
         
         The following shows how to delete all the data from the cust
         table.
         
         delete from cust;
         
         The following shows how to delete customers from the cust table
         whose rating is less than 10.
         
         delete from cust
         where rating < 10;
         
         COMPONENTS OF DELETE
         
         table_name
         Any existing table in your database.
         
         search_condition
         The section on the select statement has more detail on the
         search_condition that is accomplished with a where clause. A
         simple example is shown above. The command to delete customers
         whose rating is less than 10 could create some problems if there
         were customers in the sales table with customer codes that you
         deleted.  Whenever you delete a row that contains a primary key
         that is used in another table, problems can arise.  In order to
         determine whether there are any of those customers in the sales
         table, you could use the select command as shown below.
         
         select *
         from   sales
         where  cc in (
           select code
           from   cust
           where  rating < 10);

                                     DELETE-1




         
         To delete all the corresponding rows in the sales table for
         customers whose rating is less than 10, you would simply take the
         statement above and replace the "select * from" with "delete" as
         shown below.
         
         delete from sales
         where  cc in (
           select code
           from   cust
           where  rating < 10);
         
         The delete command below shows how to delete all rows in the
         sales table that do not have a corresponding customer code in the
         cust table. The not exists is covered in the full documentation.
         
         delete from sales
         where not exists
             (select *
              from cust
              where code = cc);
         
         HOW TO RESTORE DATA YOU HAVE JUST DELETED
         
         Type it in again!!! (Therefore be very careful when you use this
         command).
         
         EXERCISES (Answers in the full documentation)
         
         What are the commands to delete:
         
         1.  The attorneys with over 15 years of service.
         
         2.  The category 2 clients from Florida.
         
         3.  Client c2.



















                                DELETE-2






         TUTORIAL
         
         OVERVIEW
         This tutorial will take you through the basics creating a table,
         inserting data into a table, updating rows in a table, deleting
         rows from a table, retrieving data from a table, creating a view
         of a table and dropping a table.
         
         START SSQL
         From the DOS prompt type SSQL and press ENTER:
         
         CREATE THE TABLE
         Before we can put any data into the table, you need to describe
         the type(s) of data that it is going to contain.  Often the table
         we create is referred to as a base table.  Base tables contain
         actual data which is distinguished from a derived table (see
         Create a View). It is assumed that you have already read the
         introduction which contains the basic definitions of columns,
         rows, and tables. You will create a shortened version of a
         payroll table.  For each employee you will store the last name,
         the first name, salary, and city.  The key will be
         a combination of last name and first name. Type the following:
         
         create table pay (
         last char(15) not null,
         first char(15) not null,
         salary numeric(5),
         city char(12),
         unique(last, first)
         );
         
         Last name and first name can each be up to fifteen characters in
         length.  Since they are part of the primary key, nulls will not
         be allowed in the columns.  The combination of the column names
         last and first are set to unique so there can be no duplicate
         primary keys.  The values for city are limited to twelve
         characters.  Salary is limited to five digits which means up to
         $99,999.
         If you made a mistake, skip to the last part of the tutorial to 
         find out how to drop a table which erases it from the disk so 
         you can start over.
         
         INSERT DATA INTO THE TABLE
         The following has has the commands to insert four rows of data 
         into the table. When you type them, be careful to include all the
         appropriate quotes and commas.  And yes, include the in correct
         spelling of Scottsdale.  You will correct it in the next section.
         Note that Hippity Hopper has a null in place of his
         salary.  This means that the salary is not available which is
         different from putting a salary of zero.
         
         insert into pay values('Everski','Willy',45000,'Scottsdale');
         insert into pay values('Everski','Wilshe',60000,'Scootsdale');
         insert into pay values('Hopper','Hippity',null,'Phoenix');
         insert into pay values('Nosebleed','Harvey',20000,'Peoria');


                                TUTORIAL-1




         If you made any mistakes, you should be able to correct them
         after going through the next section on updates.
         
         UPDATE DATA IN A TABLE
         You need to make two changes to the table.  Scootsdale needs to
         be changed to Scottsdale and the salary for Willy Everski needs
         to be changed to 55,000.  The where clause is needed to access 
         the specific row you need.
         
         update pay
         set city = 'Scottsdale'
         where city = 'Scootsdale';
         
         update pay
         set salary = 55000
         where last = 'Everski' and first = 'Willy';
         
         
         DELETE A ROW FROM A TABLE
         Harvey Nosebleed has been fired so you want to delete the row
         that contains the data for Harv.  Figure D-5 shows you how.  In a
         manner similar to the update, the where clause describes which
         row should be deleted.
         The where clause only includes the last name
         because I know that all the other Nosebleeds have been fired. 
         However, the primary key is both last and first names.  With the
         Everskis you had to include both last and first names otherwise
         both would have been updated.  OK, technically we could have
         gotten by with just the first names but I know you realize that
         in a real-world scenario that would not be acceptable.
         
         delete from pay
         where  last='Nosebleed';
         
         RETRIEVE DATA FROM A TABLE
         The select command is used to retrieve data from a table.  The
         following select command retrieves all the data in the table. 
         
         select *
         from pay;
         
         last          first         salary city         
         ------------- ------------- ------ ------------ 
         Everski       Willy         55000 Scottsdale
         Everski       Wilshe        60000 Scottsdale
         Hopper        Hippity             Phoenix   
         
         3 rows selected






                                TUTORIAL-2





         The following shows how to retrieve the first name and last name for
         all the rows.
         
         select first, last
         from pay;
         
         first           last            
         --------------- --------------- 
         Willy           Everski         
         Wilshe          Everski         
         Hippity         Hopper          
         
         3 rows selected
         
         The following displays the rows of employees which
         have salaries of less than $58,000.  Notice that the row for
         Hippity Hopper is not displayed because all nulls are excluded. 
         
         select *
         from pay
         where salary > 58000;
         
         last          first         salary city         
         ------------- ------------- ------ ------------ 
         Everski       Willy          55000 Scottsdale   
         
         1 row selected
         
         CREATE A VIEW
         A view is an alternate way of looking at a table or even a
         combination of tables.  It is also known as a derived table
         because a view is derived from one or more base tables. We will
         create a view which excludes salary information.  The view is
         based on a select statement. The view accesses data in the base
         table every time it is used in a select statement.  There is
         never any data contained in the view.  The following creates the
         view.  
         
         create view pay1 as
         select last, first, city
         from pay;
         
         Now let's see what happens when all the columns of the view are 
         selected.
         
         select *
         from pay1;
         
         last            first           city
         --------------- --------------- ------------
         Everski         Willy           Scottsdale
         Everski         Wilshe          Scottsdale
         Hopper          Hippity         Phoenix
         
         3 rows selected


                                TUTORIAL-3





         DROP A TABLE
         When a table is dropped, the description of the table is erased
         from the disk.  The drop command will only work on an empty
         table.  The delete command is needed to delete all the data in 
         the table then the drop command erases the table from the disk.  
         
         delete from pay;
         drop  pay;
         
         EXIT SSQL
         This is a tough one - type EXIT and press ENTER












































                                TUTORIAL-4


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2284

     Volume in drive A has no label
     Directory of A:\

    SSQL     EXE    122530   1-07-90   7:44a
    READ     ME        449   1-07-90   7:31a
    SSQL     DOC    162456   1-14-90   8:53a
    ORDER    FRM      2279   1-07-90   7:30a
    PRINTDOC BAT        41   1-07-90   7:31a
    MANU     DBF       347   1-02-90   7:16a
    MANU     SQD       256   1-02-90   7:16a
    SALES    DBF       532   1-02-90   7:16a
    SALES    SQD       256   1-02-90   7:16a
    BRANCH   DBF       151   1-02-90   7:16a
    BRANCH   SQD       256   1-02-90   7:16a
    CUST     DBF       294   1-02-90   7:16a
    CUST     SQD       256   1-02-90   7:16a
    PROD     DBF       170   1-02-90   7:16a
    PROD     SQD       256   1-02-90   7:16a
    EMP      DBF       445   1-02-90   7:16a
    EMP      SQD       256   1-02-90   7:16a
    ERROR    DAT     11840   1-01-90   7:57p
    EDIT     FIL        18   1-02-89   1:21p
    CONVERT  EXE     41894   1-01-90   3:38p
    FILE2284 TXT      2961   7-20-90  12:14p
    GO       BAT        41   1-01-80   2:04a
           22 file(s)     347984 bytes
                               0 bytes free
