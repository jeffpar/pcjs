---
layout: page
title: "PC-SIG Diskette Library (Disk #1047)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1047/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1047"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILER FINDER 1 OF 2 (ALSO 1048)"

    FILER FINDER is an on-disk index to information management software for
    microcomputers, which stores, indexes, manipulates and retrieves
    structured and unstructured data.  This program has a searchable data
    file on over 500 pieces of information management software.  The types
    of software in the data file include file managers, database managers,
    integrated software packages, bibliographic and indexing programs, and
    others.  The main program on this disk lets you search for programs in
    the data files by name, class, characteristics, comments, cost,
    manufacturer, operating systems and number of fields available. After a
    search, you can send the results to the screen, the printer, or a disk
    file.  The data files are in dBase III+ format.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBCREATE.DOC

{% raw %}
```




      DBCREATE -- GUIDELINES ON DATABASE CREATION
      ----------------------------------------------------------------
      Shadduck & Sullivan  Information Specialists
      3508 45th Ave. So., Minneapolis, MN  55406   612-729-1292
      Copyright 1985 Gregg Shadduck and Jeanette Sullivan
      Permission is given to reprint, if you credit the source.
      
      
      SETTING UP A DATABASE
      
      Turn off the computer.  Turn it on later a few times over the
      next few days to check out ideas, but do your work on paper, in
      pieces, iteratively, trying out your ideas on yourself and on
      others.
      
      Think about the whole universe of what you can possibly do.
      Allow your mind to wander.  Think about the information you will
      want in your reports.  Start thinking about the access keys
      (with or without indexes) you want in your file(s); how do you
      want to be able to retrieve and relate what information?  Do not
      limit yourself to what and how you are doing today.
      
      Consider using some software and some arrangement of information
      that is cheaper and simpler, perhaps more flexible, than a more
      obvious solution.  Consider something more expensive that gives
      you room to grow.  Also consider the full range of software types
      available to you: structured file and database managers, less
      structured or more capacious database managers (variable length
      fields, full-text indexing, repeating fields...), or textual
      freeform retrieval methods.
      
      If you are considering downloading from another file consider
      whether the data is suitable for your needs, how it must be
      modified, and how long the conversion will take.
      
      Test, try, test, try, test before committing yourself.
      
      Iterative process:
      
      -- collect initial information
      
      -- develop prototype with 5-15 dummy records
      
      -- prepare prototype reports or transaction programs, say for 2
      months of the year, with a summary, instead of for all 12 months
      
      -- return results to user for response
      
      -- refine
      
      -- get response
      
      -- refine
      
      
      




      DOCUMENTATION:
      
      -- Document the structure of the file(s), the report formats,
      programs, and definitions.  In more expensive DBMSs you will be
      assisted more by data dictionaries.  In any case, get in the good
      habit of scribbling on papers, of noting at the top of each file,
      the date (and time, when things are changing fast) of the last
      revision, and your initials.
      
      
      
      QUESTIONS TO ASK BEFORE DESIGNING THE FILES(S):
      
      -- What are you describing?  Are there examples of input
      documents?  Use them as a guide and a prompt, but don't get stuck
      on them.  You might well change the structure or order of
      something, say, making a couple of files from information
      contained on a single document format.
      
      -- How large is it now, and how large will it eventually be?  Be
      generous.
      
      -- How often does it need updating?  What data will be updated
      (added, deleted, changed)?  This affects the structure of the
      file and the need to index/sort (update index while adding
      records, after adding records and before a report...).
      
      -- What kind of queries (ad hoc questioning of the file) will be
      made?
      
      -- What kind of standard reports are desired?  Are there copies
      of previous reports?
      
      -- What kind of transactions will you/they be performing?  This
      affects the need for programming.
      
      -- How many other people will be using the file?  Will they have
      other uses for the file?
      
      -- Must special precautions be taken for privacy, security, data
      locks?
      
      -- What other software and hardware will be needed to interface
      with word processors, mainframes, printers, modems...?
      
      
      
      QUESTIONS REGARDING INDIVIDUAL FIELDS (if, indeed, there must be
      fields in your records--this shouldn't be taken for granted):
      
      -- length: maximum, minimum, average, feasibility of truncating
      or using accepted/standard abbreviations.  This affects
      retrieval.
      
      -- Are codes an option?  Avoid codes, especially numeric codes,
      unless they are already generally accepted by the users.  Are




      there ways around codes?
      
      -- Type of data, and EXCEPTIONS to the rules: null instead of a
      zero in a numeric field, "maybe" in a T/F field, upper/lower case
      usage adhered to...
      
      -- Limits of the data values: upper and lower limits,
      particularly if the DBMS allows parameter/range checking.
      
      -- Are any fields subject to change soon, i.e. longer zip codes,
      addition of foreign addresses to an address file?
      
      
      
      QUESTIONS TO ASK ABOUT THE PROTOTYPES:
      
      -- Is the record complete?  Are all the fields necessary?
      Conversely, is all the necessary information included?
      
      -- Are the field names and report headings obvious and not too
      cryptic?  If you understand what it means today will you remember
      6 months from now?
      
      -- Are the data formats acceptable, e.g. length, style?
      
      -- Are the units of measurement evident?
      
      -- Have you adequately differentiated the records one from
      another, or let your indexing pile them in a mass?  Have you
      avoided "miscellaneous" categories?  Have you used indexing terms
      and thesauri common to your field?  Standard abbreviations?
      
      -- Are your screen presentations clear, leading the eye to the
      important stuff, uncluttered?  Can you speed data entry through
      defaults, short forms, coded information?  (See The Elements of
      Friendly Software Design, by Paul Heckel [New York: Warner, 1984]
      for a good, readable treatment.)
      
      -- Are your report formats clear?  Using white space efectively?
      Do common data elements fall in clusters and lines/columns/rows,
      and are different data elements differentiated?
      
      -- Have you used unique identifiers for your records?
      
      
      
      VOCABULARY CONTROL
      
      -- No pain, no gain.  Some very fun, creative, stimulating
      programming of microcomputer software, particularly for the stuff
      that calls itself "freeform," claims to come close to getting
      around some laws of information science.  It is NOT true that
      information can be filed willy-nilly and later be retrieved with
      dispatch and effectiveness.  The larger the files the less it is
      true.
      




      -- The larger the files the greater the need for studying and
      applying ways to control indexing terms.  This is too little
      mentioned in the popular literature.
      
      To illustrate that with an example central to the problem,
      consider the tradeoffs between precision and recall in file
      searching.
      
      RECALL is the ability to retrieve relevant documents from the
      database in response to a subject request.  It may be expressed
      by the ratio:
      
           # of relevant docs retrieved by the system
           ------------------------------------------------ x 100
           total # of relevant docs contained in the system
      
      PRECISION is the ability to hold back nonrelevant documents
      produced by a search request.  It may be expressed by the
      precision ratio:
      
           # of relevant docs retrieved by the system
           ------------------------------------------ x 100
           total # of docs retrieved by the system
      
      It is a law that recall and precision are inversely related.
      You can find exactly what you are looking for, and only what you
      are looking for (precision), but your recall of other relevant
      items will suffer.  Or you can find all possible items relating
      to your needs, but only if a lot of chaff accompanies the
      results.  You suspect that from personal experience.  More than
      that, it has been shown to be a law.
      
      That cannot be altered, but accepted.  What CAN be affected is
      the searcher's success in guiding a search toward greater recall
      or greater precision.  That control is made possible by
      controlling the indexing vocabulary.
      
      Let us point you to the "bible" on the topic: F.W. Lancaster,
      Vocabulary Control for Information Retrieval, Washington, DC:
      Information Resources Press, 1972.  The cost is pushing $30, but
      Lancaster says it all.  If nothing else, grab a copy at the
      library and get to understand the synopsis of the entire book: 41
      succinct rules, on pages 223-225.
      
      We will quote just a few of the rules from the synopsis.
      
      "The effectiveness of a retrieval system is largely dependent
      upon the size and composition of the document classes....  The
      important thing is what we put into a class (i.e. how we define
      its scope), not what we call it."
      
      "A complete entry vocabulary, consisting of natural-language
      words occurring in documents and requests, is very important to
      the effectiveness and efficiency of a retrieval system....there
      is considerable evidence to suggest that computer-based retrieval
      systems can operate effectively on the natural language of




      documents or abstracts."
      
      "The combination of free-text input plus a thesaurus as a
      searching aid may provide the most functional base for
      operation."  The searcher can obtain great specificity (on text
      words) and broad searches (on the thesaurus groups).
      
      "Highly successful retrieval systems can be operated by a "two-
      level" searching approach; that is, on a combination of
      uncontrolled keywords with a small, broad controlled vocabulary
      imposed on them as a kind of superstructure."
      
      Note that "controlled vocabularies are expensive to construct and
      maintain.  Some of the less sophisticated approaches to
      vocabulary control [e.g. a small controlled vocabulary
      supplemented by freely assigned keywords, fast indexing with few
      indexing terms per entry] may be justifiable on the basis of a
      cost-effectiveness analysis."
      
      For an excellent, more general discussion of the indexing process
      we suggest Harold Borko and Charles L. Bernier, Indexing Concepts
      and Methods, New York: Academic Press, 1978.
      
      Thousands of controlled vocabularies (thesauri, lists of subject
      headings, classification schemes) have already been developed.
      You might recognize more common ones as the headings in card
      catalogs in libraries, or as subject terms in indexes and
      directories you have consulted in school or at work.  Use such
      systems when they fit your subject.
      
      For a comprehensive directory of thesauri from the years 1950 to
      1982 see Classification Systems and Thesauri, 1950-1982
      (International Classification and Indexing Bibliography ICIB 1),
      Frankfurt (Woogstr. 36a, D-6000 Frankfurt 50): INDEKS Verlag,
      1982.
      
      And ask at your library for additional suggestions.
      
      
      
      THE CORPORATE CONTEXT
      
      -- Is management willing to accomplish one small piece at a time?
      
      -- Is management willing to discard a system if it does not work?
      
      -- Is management aware of the tentative nature of estimated
      benefits?
      

```
{% endraw %}

## DBDESC.DOC

{% raw %}
```




      ATTRIBUTES OF FILE MANAGERS & DBMSs: FOR BACKGROUND & SELECTION
      ---------------------------------------------------------------
      Shadduck & Sullivan  Information Specialists
      3508 45th Ave. So., Minneapolis, MN  55406  612-729-1292
      Copyright 1985 Gregg Shadduck and Jeanette Sullivan
      Permission is given to reprint, if you credit the source.
      
      
      Note what a reviewer wrote of Reader's Digest's ListMaker
      software:
      
      "Computer programming is easy enough that people who are
      unskilled can design computer software.  They can package it
      smartly, give it excellent documentation, and market it with
      skill.  In the end, it does not do the job for which it was
      intended."  -- Robert Schuldenfrei, InfoWorld 5(48A):73. 1983.
      
      That is not reassuring for someone shopping for software.
      Neither is part of the message in a headline from a recent
      InfoWorld survey article:
      
      "File capabilities still important: users buy cannons to shoot
      ducks; the top end moves toward multiusers."  -- Scott Mace,
      InfoWorld 7(29):34-39. 22 July 1985.  [Recommended]
      
      The moral here?  You can be almost equally unhappy with something
      that doesn't perform what you expected, whether it be too little
      (a la ListMaker), or too much (a la cannons for ducks).  Choose
      your game, then choose your tool.
      
      The following is a long checklist that can help you ensure that
      the information management software you choose IS appropriate to
      your task.  The list is overkill.  Most of the items can very
      well be irrelevant in any particular context.  But you decide.
      
      I.  Basic software structure
      
      hardware requirements
        - specific manufacturers, models
        - Is a hard disk drive required?
        - minimum memory required
        - math co-processor supported/required?
        - any additional input/output devices?
      
      adaptations to different machines
        - ASCII characters only
        - graphic symbols, too
        - color
        - file across multiple drives/disks
        - uses function keys
      
      portability
        - under which operating systems does it run?
        - supports subdirectories
      
      data model




        - single file or relational
      
      data types and maximum sizes
        - character
        - numeric (integer, floating point, money or $, other)
        - date (mm/dd/yy, yy/mm/dd, system date, other)
        - time
        - logical
      
      sorting and indexing
        - machine language sort?  Speed?
        - maintain index(es) while entering data
        - easily created, eliminated?
        - multiple indexes?  (more that one/first field)
        - redefine indexes, or fixed?
        - single index on more than one field?
        - must you sort, or can you index?
        - allow multiple keys, duplicate keys, changes in keys
      
      physical data protection
        - recovery and restart capabilities
      
      performance
        - is data redundancy eliminated?
        - are variable length records and/or data compression used?
      
      multi-user
        - concurrent multiple access with record locking, field
              locking?
      
      user interface
        - menus, prompting, commands, natural language, visual
      
      
      II.  File/database creation
      
      specifying files/databases
        - no. of record types (files) per database
        - no. of fields per record
        - max. field size
        - variable length fields
        - max. record size
        - max. no. of records per file, records per database
        - file schema or data dictionary
        - can files cross over several disks?
        - conversely, can several small files be on one disk, or
              does each file require a disk?
        - can define a field only once, yet use in many files?
        - ease of viewing the file definitions, quick commands
        - has repeating fields/fields with multiple values?
        - handles dates with ease, arithmetic w/ dates?
        - tokens, aliases, or synonyms
        - index data
        - passwords/permissions/security, at field/record/file
              level, read-only/modify
        - encryption




        - relations
        - validity tests
        - error or prompting messages
        - multiple views of database
      
      data independence
        - ease of definition, changes
        - field data: ease of changing or adding fields
        - can change the fields in existing files w/o time-
              consuming dump from the file?
        - can add new files using existing fields?
        - can database structure be modified without changing
              previous programs?
      
      data integrity
        - protect against data corruption, erroneous data entry,
              unauthorized relationships
      
      data security
        - separate "read" and "write" access controls
        - to what level (record, field)?
        - encryption?
      
      
      III.  Data entry/modification
      
      input screen specifications
        - can design, program, or "paint" custom displays?
        - method (paint, program, automatic)
        - no. of screens per file (can you define your own screens
              and alternate screens?)
        - no. of files per screen
        - simulate paper forms
        - link help messages to a field
        - master/detail relationship
        - can you carry repetitive data from one record to the
              next?
      
      data entry editing
        - can experienced user quickly enter data w/ few commands?
        - can edit while entering?
        - data entry validation: range tests, specific values
        - error handling (field by field/total or selective
              reprompting)
        - default values in specific fields
        - table lookup to an outside file? (authority control,
              cross references)
        - verify (input data twice)
        - required field
        - date tests/conversion
        - built in text editor?  How rudimentary?
        - can use a word processor to edit?
        - how tightly can that WP be brought in/integrated?
      
      
      IV.  Query




      
        - can browse?
      
      query language
        - can ad hoc queries be made, with what type of commands?
        - mass/global additions, deletions, updates/changes
        - load and unload
        - execute stored scripts/command sequences
        - can reports be gotten from pre-defined/canned queries?
        - quality of output
      
      searching
        - prompted?
        - near-English query language?
        - help screens?
        - search several files simultaneously; on the fly or batch
              only?
        - are results of search operations SELECT, PROJECT, JOIN,
              UNION, DIFFERENCE, INTERSECTION?
        - Boolean
        - soundex
        - on indexed (faster) and unindexed (far slower) fields
        - embedded strings
        - wild cards
        - comparison and range searches
        - right and/or left truncation
        - nesting with parenthesis
      
      
      V.  Reporting
      
      report generation capabilities
        - no. of fields able to sort on
        - aggregates: min., max., count, avg., %...built in or
              programmable
        - arithmetic: *, /, +, -
        - parameter passing
        - flexibility of output (built-in or programmable,
              flexibility vs. complexity)
        - multifile access
        - report formatter/generator
        - screen dumps
        - flexibility: in labeling headers, especially large or
              small formats
        - can print in both lines-across and columns, record on
              more than one line?
        - trim trailing blanks and concatenate fields
        - line wrap
      
      
      VI.  Procedural/programming language
      
      procedural/programming language (any? what does it resemble?)
        - create command files
        - global and local variables?
        - if-then-else, while, for, repeat...until




        - number of files open simultaneously
        - number of memory variables
        - strength of string functions (trimming blanks, replacing
              parts of string...)
        - accept input from users
        - compile the code
        - debugging helps
      
      
      VII.  Broader context/generalities
      
      performance
        - speed in creating means to import data
        - sorting and/or indexing speed
        - time to find indexed and unindexed records
        - degradation with additional indexes
        - time to create, and to execute, a report
      
      important generalities
        - documentation, both printed and online
        - program robustness (action at boundary conditions, error
              handling, recovery, degree of damage when failure...)
        - flexibility and ease of use
      
      langauge
        - what language was it written in?  (Sometimes important
              for maintenance, speed, ability to interface with other
              software, hooks to the language itself.)
      
      data importing and exporting/read from and write to other files:
        - none, packaged, or programmable?
        - SYLC files (useful with Lotus 1-2-3)
        - DIF (Data Interchange Format, restrictions to
              shorter/numeric fields)
        - SDF (Standard Data Format, useful with MailMerge, BASIC)
        - ASCII (American Standard Code for Information
              Interchange, a common text form), delimited with ' or "
              or not delimited
        - others programmable
        - if you can import/download records, how difficult is it
              to convert them to the format that your software requires?
      
      advanced features
        - back-up ability and copy protection, ease of backup
        - audit trails (pre- and post-imaging, activity or
              transaction log to aid in recovery)
        - data restructuring (inherent or separate program, can add
              or change indexes)
        - linked or multiple updating of indexes and files
        - interface to high level language
      
      support
        - training, product updates, enhancements, add-ons,
              consulting
      
      marketing features




        - time on market, firm's track record, history and policies
              on update the software
        - number sold
        - price
      
      personal/situational
        - minimum hardware configuration (floppy/hard disk, RAM,
              version of DOS)
        - user group support, knowledgable friends and co-workers
              (this can be VERY important, don't discount it)
        - need to run software on one or a variety of machines,
              or to exchange data files
      
      
      For a lengthy description of many variations on characteristics
      of database management systems and for a survey of small DBMSs
      see:  (1)  PC Magazine's great series on file and database
      managers, from June 12, 1984 (Vol. 3, no. 11) to September 4,
      1984 (Vol. 3, no. 17), and (2)  G.C. Everest's Comparative Survey
      of Database Management Systems on Microcomputers, (MISRC-WP-84-
      01), Minneapolis, MN: Management Information Systems Research
      Center, University of Minnesota, 1984.  Tel. 612-373-7822.
      

```
{% endraw %}

## FILE1047.TXT

{% raw %}
```
Disk No: 1047                                                           
Disk Title: Filer Finder (Disk 1 of 2)  (Disk 1 of 2)                   
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Filer Finder                                             
Author Version: 2.04                                                    
Author Registration: $34.50                                             
Special Requirements: 380K RAM and two floppy drives.                   
                                                                        
FILER FINDER is an on-disk directory to information management software 
for microcomputers, that primarily stores, indexes, manipulates and     
retrieves textual data.  This program has a searchable data file on over
500 pieces of information management software.  The types of software in
the data file include file managers, database managers, integrated      
software packages, bibliographic and indexing programs, on-line library 
catalogs, and others.  The main program on this disk lets you search for
programs in the data files by name, class, characteristics, comments,   
cost, manufacturer, operating systems and number of fields available.   
After a search, you can send the results to the screen, the printer, or 
a disk file.  The data files are in dBase III+ format.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1047

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        17   9-29-88   5:46a
    READ-ME  1ST      1870   4-10-89   4:59a
    READ-ME  2ND     44574   4-04-89  12:11p
    FILEFIND EXE    276208   4-07-89  10:56a
    DBCREATE DOC     12158  12-09-87   4:51p
    DBDESC   DOC     11945  12-09-87   4:52p
    FILE1047 TXT      1925   2-15-90  12:39p
            7 file(s)     348697 bytes
                           11264 bytes free
