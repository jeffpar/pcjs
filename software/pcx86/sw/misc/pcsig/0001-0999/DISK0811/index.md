---
layout: page
title: "PC-SIG Diskette Library (Disk #811)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0811/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0811"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INTELLI-TRIEVE"

    INTELLI-TRIEVE is a "weighted retrieval" utility for users of dBase
    III, dBase III+ and compatible database managers. Weighted retrieval
    is a way of sorting database records with greater flexibility than a
    simple sort. The weighted retrieval sorts on multiple fields, but it
    allows you to put numeric "importance" on different fields and then
    totals your database's "score" over several different fields.
    
    INTELLI-TRIEVE performs weighted retrieval by comparing each record in
    a database to user-defined selection criteria and produces a copy of
    the database with the records arranged in descending order of
    acceptability. The result is an entirely new view of your data, one
    that cannot be attained through standard indexing, filtering or
    sorting operations.
    
    A simple, menu-driven process helps you choose a database and the
    fields that are to be included in the weighted retrieval calculations.
    Decide how each field is to be judged and weighted, without reworking
    your database or program. The function is nondestructive and leaves
    the original files intact. New files are created with the data
    rearranged according to the sort criteria.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES811.TXT

{% raw %}
```
Disk No  811
Program Title: INTELLI-TRIEVE
PC-SIG version 1
 
    INTELLI-TRIEVE is a weighted retrieval utility for users of dBASE III,
dBASE III+ (trademarks of Ashton-Tate), and compatible database managers.
The weighted retrieval capability provided by INTELLI-TRIEVE is a powerful
and versatile tool that performs a very complex task easily without
programming.
 
    Weighted retrieval has been available for years to users of powerful
mainframe systems like IBM's CICS. Intelli-Trieve now brings this powerful
concept to microcomputer users. INTELLI-TRIEVE performs weighted retrieval
by comparing each record in a database to user-defined selection criteria,
and producing a copy of the database with the records arranged in
descending order of acceptability. The result is an entirely new 'view'
of your data, one that cannot be attained through standard indexing,
filtering or sorting operations. INTELLI-TRIEVE allows you to extract new
and valuable information from your data in ways that were not considered in
the original database design - without altering the structure of your
databases.
 
    INTELLI-TRIEVE's simple, menu-driven process allows you to choose a
database, indicate which fields are to be included in the weighted
retrieval calculations, and how each field is to be judged and weighted.
INTELLI-TRIEVE then reproduces the database, ordered by the new selection
criteria, after which you can apply your DBMS's browsing and reporting
capabilities to view your new information.
 
    INTELLI-TRIEVE doesn't try to do those things your DBMS already does so
well, and which you've invested time and effort to master. It provides
added value instead of reinvented wheels.
 
    Weighted retrieval is well suited to aiding you in selecting securities
investments based on your definition of the relative importance of factors
such as volatility, price, price-to-earnings ratios, volume - all
considered and weighed simultaneously. Another use is to perform any sort
of complex and detailed preference matching, from the traditional dating
service to job/candidate matching, business site selection or student
admissions. Sales people can use INTELLI-TRIEVE to develop efficient leads
based on demographic and geographic criteria they set to match the product
and its market.
 
    INTELLI-TRIEVE is a unique and useful utility for those businesses
which have extensive, detailed dBase III files. It can let you sort your
data in a way that no other program can. The program is menu driven and
extremely easy to use, even a novice user should have no trouble at all
making use of INTELLI-TRIEVE's powerful features. There is a documentation
file included which can be viewed from within the program (choose HELP from
the main menu), or printed to your printer using the DOS PRINT command.
 
Usage:  Buisness (dBase III) Utility
 
System requirements: INTELLI-TRIEVE will run on any IBM-PC or
compatible with at least 256 K of memory and one disk drive. The function
performed by INTELLI-TRIEVE is nondestructive, that is it leaves your
original database files intact and creates new files with the data
rearranged according to your sorting criteria.
 
How to start:  From the DOS prompt, Type: IT  (press enter)
 
Suggested Registration: $19.00
 
File descriptions:
 
IT       EXE   INTELLI-TRIEVE main program
IT       DOC   Documentation file for INTELLI-TRIEVE
READ     ME    Note from the author
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## IT.DOC

{% raw %}
```




                               INTELLI-TRIEVE (tm)

              Copyright 1987, Richard Ray Viets, All Rights Reserved

       Intelli-Trieve is a weighted retrieval utility for users of dBASE
       III, dBASE III+ (trademarks of Ashton-Tate), and compatible
       database managers.  The weighted retrieval capability provided by
       Intelli-Trieve is a powerful and versatile tool that performs a
       very complex task easily - without programming.

       Weighted retrieval has been available for years to users of
       powerful mainframe systems like IBM's CICS.  Intelli-Trieve now
       brings this powerful concept to microcomputer users.

       Intelli-Trieve performs weighted retrieval by comparing each
       record in a database to user-defined selection criteria, and
       producing a copy of the database with the records arranged in
       descending order of 'acceptability'.

       The result is an entirely new 'view' of your data, one that cannot
       be attained through standard indexing, filtering or sorting
       operations. Intelli-Trieve allows you to extract new and valuable
       information from your data in ways that were not considered in the
       original database design - without altering the structure of your
       databases.

       Intelli-Trieve's simple, menu-driven process allows you to choose
       a database, indicate which fields are to be included in the
       weighted retrieval calculations, and how each field is to be
       judged and weighted.

       Intelli-Trieve then reproduces the database, ordered by the new
       selection criteria, after which you can apply your DBMS's browsing
       and reporting capabilities to view your new information.

       The goal of Intelli-Trieve is to provide an easy way to extract
       new and valuable information from existing data.  You can use it
       immediately, and in minutes see an increase in the value of your
       data.

       Intelli-Trieve doesn't try to do those things your DBMS already
       does so well, and which you've invested time and effort to master.
       It  provides added value instead of reinvented wheels.

       What are some of the ways you can apply the power of Intelli-
       Trieve? Weighted retrieval is well suited to aiding you in
       selecting securities investments based on your definition of the
       relative importance of factors such as volatility, price, price-
       to-earnings ratios, volume -all considered and weighed
       simultaneously.

       Another use is to perform any sort of complex and detailed
       preference matching, from the traditional dating service to


                                      -1-










       job/candidate matching, business site selection or student
       admissions.

       Sales people can use Intelli-Trieve to develop efficient leads
       based on demographic and geographic criteria they set to match the
       product and its market.

       Executives responsible for purchasing decisions can rely on
       Intelli-Trieve to simplify the complex task of weighing the
       relative merits of hundreds of competing products, based on dozens
       of independently considered criteria.

       With Intelli-Trieve existing databases, designed for yesterday's
       information needs, can be made to reveal new information, based on
       the demands of today.

       A WEIGHTED RETRIEVAL EXAMPLE

       A simple example of how weighted retrieval might be used in
       solving a marketing problem will demonstrate Intelli-Trieve's
       power and ease of use.  The object in the example is to extract
       qualified sales leads from a database consisting of thousands of
       records, each of which contains varied - and often incomplete-
       demographic data about one person.

       Suppose the product we wish to sell is a fast, expensive sports
       car which only a very small portion of the people represented in
       our database can afford, or would even want.  In order to maximize
       our efforts we will want to contact the most likely candidates
       first, in the order of their sales potential, and avoid wasting
       our time on those unlikely to buy our product.

       We might know, for example, that men are more likely to indulge
       themselves with a sports car; especially if they are single.  We
       also know that our chances of making a sale increase if our
       prospect earns $40,000 a year or more, and we have an even greater
       chance of making a sale to someone making over $60,000. Suppose we
       also think that prospects within three months of their fortieth
       birthday may be especially susceptible because of 'midlife
       crisis'.  And finally, we know we will have greater success among
       those whose last automobile purchase was at least two years ago,
       especially if the purchase price of the old car was over $8,000.
       If that purchase was not financed we stand an even better chance
       of making the sale.

       The standard methods of filtering or indexing might be able to
       extract from the data those who met ALL our criteria, but precious
       few sales leads would result.  Worse still, many excellent leads
       would be lost altogether because a prospect failed to meet one
       criteria, even while meeting all the others.

       In our example we give more weight to single men, but a married
       man with a high income and an aging car who is close to forty
       would be well worth contacting.  And we really don't want to

                                      -2-










       eliminate those whose fortieth birthday has already passed.  With
       the ordinary capabilities of microcomputer DBMS's we would
       probably end up being less strict, less creative in setting up our
       'view' of the data - and therefor less efficient.

       With Intelli-Trieve, on the other hand, we won't 'lose' good
       candidates, yet we can still apply all the detailed, complex
       criteria we can think up to 'qualify' our leads.

       Intelli-Trieve's menu-driven retrieval criteria specification
       process allows us to quickly assign each important field's TARGET
       VALUE and (for numeric and date fields) a RANGE within which we
       are seeking a MATCH.  We also specify a MATCH VALUE to be added to
       a record's 'weight' if that record's field falls within our
       desired range; and a NO-MATCH VALUE to be subtracted when the
       match fails.

       Some of the fields we are including in our selection criteria will
       often contain no data.  Intelli-Trieve gives you the option of
       'disregarding' these 'NULL FIELDS', so as not to unfairly penalize
       a record for not meeting the match criteria, when the value is
       simply unknown.  Intelli-Trieve accomplishes this in a manner that
       also avoids favoring records with many 'nulls'.  The result is a
       'weighted qualification percentage' based on potential and actual
       scores (adjusted for nulls as specified).

       It is up to you to decide how much weight to give to each field's
       meeting, or not meeting, your selection criteria.  In our sports
       car sales example, we might weight each of our criteria as
       follows:

       FIELD      FIELD  TARGET             MATCH   NO-MATCH  DISREGARD
       NAME       TYPE   VALUE              VALUE   VALUE     NULLS?
       -----      -----  ------             -----   --------  ---------

       SEX        CHAR   'M'                500     500       NO

       MARRIED    LOG    .F.                100     50        N/A

       INCOME     NUM    > 40,000           100     200       NO

       INCOME     NUM    > 60,000           200     0         YES

       BORN       DATE   7/1/47 - 9/30/47   400     50        NO

       LAST_CAR   DATE   < 7/1/85           200     50        YES

       CAR_COST   NUM    > 8,000            100     0         YES

       FINANCED   LOG    .F.                200     0         N/A

       Notice that Intelli-Trieve allows more than one criteria per
       field, as in the case of INCOME which awards 100 'points' for
       incomes greater than $40,000, and an additional 200 if income is

                                      -3-










       greater than $60,000. Income below $40,000 results in a point
       'penalty' of 200.

       Consider the sampling of database records below:

       REC#  SEX  MARRIED  INCOME  BORN      LAST_CAR  CAR_COST  FINANCED
       ----  ---  -------  ------  --------  --------  --------  --------

       1     M    .T.      25,000  01/23/52  04/01/86  9,500     .T.

       2     F    .F.      37,000    /  /      /  /    0

       3     M    .F.      66,500  11/28/44  05/01/83  11,400    .T.

       4     M    .T.      68,000  08/23/47  04/15/82  23,500    .F.

       5     M    .F.      41,000  11/25/46    /  /    0

       Although none of the records meets all the desired criteria,
       several are very 'acceptable' as defined by our selection
       criteria.  Record #4, for instance, is the best match, even though
       he is married.  Record #3 is a good fit as well, although he
       misses on age, and he financed his last car.  And while our data
       for record #5 is incomplete, what data we do have shows that he
       might be a good prospect. The other two records are less hopeful.

       Intelli-Trieve will create a new copy of the database, in which
       record #4 will appear first, followed by records #3, #5, #1, and
       #2. This new, weighted order will allow our hypothetical marketing
       effort to be most fruitful and efficient.

       How you use Intelli-Trieve depends on your information needs and
       the data you have to work with, limited only by your imagination
       and creativity.

       INSTALLING AND USING INTELLI-TRIEVE

       Intelli-Trieve is simplicity itself to install.  Simply copy
       IT.EXE to a diskette or to your hard drive, type 'IT' at the DOS
       prompt, and the INTELLI-TRIEVE MENU appears.

       It is a standard 'light-bar' menu; use the up/down arrows to
       highlight the function you want to use, and then press RETURN.

       The first menu selection 'REGISTRATION' will give you information
       on how to become a registered user of Intelli-Trieve, and how
       registration will benefit you.  'REGISTRATION' will also tell you
       more about the user survey.

       The second menu selection, 'SPECIFY RETRIEVAL CRITERIA' allows you
       to identify the database you wish to use, and the name of the
       specification criteria file you wish to create.  For more
       information, select this option and press F1 for more help.


                                      -4-










       The third menu selection, 'PERFORM WEIGHTED RETRIEVAL', creates a
       new database with the fields in weighted order, based on the
       selection criteria you previously saved in a criteria file.  For
       more information, select this option and press F1 for more help.

       The fourth menu selection, 'HELP', displays this tutorial.  The
       final option, 'QUIT', returns to the DOS prompt or the program
       that invoked Intelli-Trieve.

       SPECIFYING RETRIEVAL CRITERIA

       In order to create retrieval criteria you must tell Intell-Trieve
       which database is to be used.  You must also name the criteria
       file to be created. The criteria file must not already exist.

       After naming the database and criteria files, a screen appears
       which allows you to name, in turn, each field which you want to
       include in the weighted retrieval calculations.  Numeric, Date,
       Character, and Logical fields are allowed.  You may specify
       multiple, separate criteria for any individual field.  Up to 128
       field specifications are allowed.

       Entering a valid field name displays a screen for that type of
       field. The information required for a field specification depends
       somewhat on the type of field, but many of the requirements are
       the same for all field types.

       INFORMATION REQUIRED FOR ALL FIELD TYPES

       MATCH VALUE is the number of 'points' awarded an individual record
       for 'matching' the criteria set.  It can be any positive number or
       zero. The particular value assigned is up to you, and works in
       conjunction with all the other MATCH and NO-MATCH VALUES assigned
       to other fields.

       NO-MATCH VALUE is the number of 'points' an individual record is
       penalized for not meeting the criteria specified.  It can be any
       positive number or zero.

       If you answer 'Y' to the question, 'DISREGARD NULL FIELDS?', an
       adjustment will be made to the 'weighted qualification percentage'
       of any records for which the field contains a zero (numeric), or
       blanks (date and character).  Logical fields are never 'null', and
       therefor cannot be 'disregarded'.  This technique avoids unfairly
       penalizing records for which information was simply not available.
       More detail on 'nulls' is contained in the Intelli-Trieve tutorial
       available from the main menu.

       NUMERIC FIELDS

       When specifying retrieval criteria for a numeric field, enter the
       TARGET VALUE (what you're looking for), and the LOWER and UPPER
       LIMITS OF THE RANGE.  If all three are equal, then an exact match


                                      -5-










       is required. Otherwise, a value between the lower and upper
       limits, inclusive, will constitute a match.

       DATE FIELDS

       When specifying retrieval criteria for a date field, enter the
       TARGET VALUE (the date you're looking for), and the LOWER and
       UPPER LIMITS OF THE RANGE.  If all three are equal, then an exact
       match is required. Otherwise, a date falling between the lower and
       upper limits, inclusive, will constitute a match.

       LOGICAL FIELDS

       For logical fields you need only specify which constitutes a
       match, 'True (T)' or 'False (F)', and what the MATCH and NO-MATCH
       VALUES are.

       CHARACTER FIELDS

       For character fields you may specify any word or phrase up to 20
       characters long.  Intelli-Trieve matches the word or phrase with
       the contents of the character field without regard to whether the
       letters are in upper or lower case; the matching is NOT case-
       sensitive.

       FUNCTION KEYS

       While specifying criteria for an individual field, the ESC key
       will cancel the individual field specification.  When pressed at
       the field selection screen, the ESC key cancels the entire
       retrieval specification, and does not save any work.

       F3 saves the retrieval criteria to the assigned file and returns
       to the main menu.

       F1 displays help screens.

       PERFORMING WEIGHTED RETRIEVAL

       When you have completed specifying the retrieval criteria for your
       database you are ready to tell Intelli-Trieve to perform the
       weighted retrieval calculations and produce a new copy of your
       database in weighted order.

       You are asked to name the CRITERIA FILE which contains the
       retrieval specifications you have created.  Include the drive and
       path if different from the the current DOS defaults.  Intelli-
       Trieve will verify that the file exists, and that it is valid.

       You are also asked for the name, and optional drive and path, of
       the output database to be created.  The output database must use
       the extension '.DBF'.  If the file already exists it will be
       overwritten. DO NOT use your database file as Intelli-Trieve's
       output database - if you wish to have an output database of the

                                      -6-










       same name as your input database, specify a different path or
       drive, in order to guarantee that Intelli-Trieve's weighted
       retrieval output will be a sorted COPY of your database.

       Intelli-Trieve will display messages on the screen as each step in
       the weighted retrieval process is performed.  When the process is
       complete a message at the top of the screen will confirm that a
       new database has been created. Use your DBMS to access the
       information in it.

       The amount of time required to perform weighted retrieval depends
       on a number of factors, including the speed of your computer and
       disk drive, how large your database is, and how complex your
       retrieval criteria are. The more complex the retrieval criteria
       the longer the retrieval will take.

       THIS IS A SHAREWARE PROGRAM

       The Shareware concept, under which this program is distributed,
       depends on the direct support of those who use the software.  You
       are asked to contribute $19 to become a registered user of
       Intelli-Trieve.

       Your support of this product helps ensure that it will keep up
       with changes to dBASE and that enhancements will be made to
       increase its usefulness.

       As part of Intelli-Trieve's further development process,
       registered users are asked to complete the short questionnaire
       which follows and enclose it with your registration check.  Your
       responses will help guarantee that future releases of this program
       meet the needs of its registered users.

       SEND TO THE ADDRESS BELOW:

            -Your $19 contribution (check payable to 'Richard Ray Viets')
            -Your name, address and phone number
            -Your completed questionnaire

                              RICHARD RAY VIETS
                              INTELLI-TRIEVE
                              16 OLDFIELD FARMS
                              ENFIELD, CT 06082












                                      -7-










       INTELLI-TRIEVE USER QUESTIONAIRE

       Rank the following possible enhancements to Intelli-Trieve in
       their order of usefulness to you (1 for most useful, 7 for least):

       ____  Modify an existing criteria file

       ____  Onscreen browse of records in weighted order without
             creating a sorted copy of the database

       ____  Create a copy of the database in weighted order, but only
             copy a specified number of the 'best' records

       ____  Display the weighted qualification percentage (the record's
             'score') onscreen

       ____  Generate a printable text summary of the criteria specified

       ____  Specify criteria ranges in percentages or +/- units

       ____  Specify date criteria as day-of-week or month

       COMMENTS:

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0811

     Volume in drive A has no label
     Directory of A:\

    FILES811 TXT      3598   8-10-87   4:22p
    GO       BAT        38   8-05-87   8:30a
    GO       TXT       617   8-05-87   8:33a
    IT       DOC     19383   5-12-87   4:34p
    IT       EXE    183168   5-12-87  11:18a
            5 file(s)     206804 bytes
                          113664 bytes free
