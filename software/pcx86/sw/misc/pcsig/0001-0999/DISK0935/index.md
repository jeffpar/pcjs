---
layout: page
title: "PC-SIG Diskette Library (Disk #935)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0935/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0935"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MSPANTOC, BIBLIO, AND LIST-MRG"

    Writers -- here's a useful addition to your library.
    
    MSPANTOC reads a document you created on a wordprocessor and
    writes a new document, updated with:
    
    ~ Assigned section, paragraph, figure, and table numbers
    
    ~ Resolved cross references
    
    ~ A table of contents
    
    ~ A list of figures
    
    ~ A list of tables
    
    MSPANTOC is not a wordprocessor or an outline generator.  It complements
    your existing wordprocessing package by providing the numbering and
    cross-reference features not available with many current wordprocessing
    packages.  It works with WordStar, WordPerfect, or any other
    wordprocessor.
    File Descriptions:
    
    ------------  MSPANTOC.
    MSP10    EXE  The main program.
    MSP10    DOC  On disk documentation.
    MSP      CFG  Default configuration file.
    MSPC10   EXE  Configuration program.
    WP       ATR  Default WordPerfect print attributes.
    WS       ATR  Default WordStar print attributes.
    READ     ME   Information file.
    
    LIST-MGR searches for a text string or set of strings and selects
    records from a text file such as a list of addresses, clients,
    customers, members, etc.
    
    Each retrieved record can have up to five labeled fields (e.g., name,
    street, city-state-zip, expiration date, notes).  The number, length,
    or sequence of fields need not be the same for different records.
    
    You can send selected records to screen, printer, a new disk file, or
    any combination of these.  You can change the within-record field
    sequence in the output records, omitting some fields altogether if you
    want.
    
    Writers, Students, Editors -- BIBLIO will interest you.
    
    BIBLIO selects references from a pre-existing text file with a
    list of bibliographic references.  Each reference can have up to five
    labeled fields such as author, title, source, keywords, and notes.  The
    number, length, or sequence of fields need not be the same for different
    references.
    
    You can request selection of those references with a desired search
    phrase in a specified field.  You can send the output of the selected
    records to the screen, printer or disk.
    File Descriptions:
    
    -------- ---  BIBLIO.
    BIBLIO   DOC  Documentation for the BIBLIO program.
    BIBLIO   EXE  The BIBLIO main program.
    BIBLIO   REF  The reference sample file to use with the BIBLIO program.
    BIBLIO   TXT  Introduction file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIBLIO.DOC

{% raw %}
```

			BIBLIO.EXE
		       Version 9/87

	      A Search and Retrieval Utility 
		   for list management.

		     BIOLIT Inc., #47
		      131 NW 4th St.
		   Corvallis OR. 97339
	  
You are invited to try BIBLIO and to give copies to 
others. Anyone who keeps the program should send $20 to the
address above to avoid copyright infringement and license 
their use of the program.  If they send their address and 
the name of the program registered, registrants will be 
sent free replacement disks if any major 'bugs' are found 
and removed from the program before January 1, 1989 and    
will be offered low-cost updates if significantly enhanced 
versions  are developed. Suggestions for enhancements are 
invited.  

NOTE: Another Biolit program, LIST-MGR.EXE, is similar to 
BIBLIO but is more general in its application, being 
intended for use with lists in general. It allows retrieval
of records containing a given phrase, word, or word 
fragment (referred to as a 'phrase') in a designated part  
(field) of the record and retrievals of records containing 
either or both of two field/phrase combinations. It also   
provides the select-on-display, select-all-records, and    
reformatting options of BIBLIO.    

When you register BIBLIO, you may request a free  copy of 
LIST-MGR if you enclose a formatted diskette with  
postage-paid mailer or enclose an additional $1.50 for	   
diskette and mailing costs.


       SOME EXAMPLES OF WHAT YOU CAN DO WITH BIBLIO 
 
Using an input list of bibliographic references (records), 
you can generate a new text file containing: 
 
References in which the Author and Title fields have been  
interchanged. 
 
References from which the Keys field, Notes field, and	   
field labels have been omitted. 
 
All of the references by a specified author. 
 
Those references by a specified author which also include a
specified key word in the Keys field. 
 
Those references which contain both of two key words in the
Keys field. 
 
Those references which contain both of two text words (in  
the Title, Keys, or Notes fields). 
 
		    FIELD LABELS
A general comment concerning the necessity of field labels
(designated characters which mark the beginning of defined
sections of each record) and of record separation is in order. 

If a computer is to make selections based on the content
of different records and of different fields within those
records, it must be able to detect where each record and
each field begins and ends.  There are two approaches to
providing the computer with this information:

1) require that each record and each of its component 
fields be of a defined length, with the fields occurring 
in a defined sequence within the record. For example, 
each record can be defined as 6 lines long with the first
line holding the name, the second the street address, etc.
   The disadvantage of this approach is the rigid format 
required for each record, with that required format being 
the same for every record. Furthurmore, the defined maximum 
record size must be set aside in memory for each record, 
whether or not the individual record is that long.

2) allow the different records to differ in length,
in the number of fields contained, and in the sequence 
of fields within the record by using tags to tell the 
computer where each record and field begins and ends.
   The disadvantage of this approach is that field and
record markers must be inserted in the record list.

In developing LIST-MGR and BIBLIO, we decided that the
greater flexibility of record format allowed by the second
method outweighed the inconvenience of requiring field 
labels.

		   WHAT BIBLIO DOES 
 
BIBLIO acts upon a pre-existing text file containing a list
of bibliographic citations, each of which may include up to 5 
labeled fields: Authors (field A), Title (T), Source (S),  
Keywords (K), and Notes (N).  It can accomplish either or  
both of two functions, REFORMATTING and RETRIEVAL. 
 
REFORMATTING:  For multi-field records, the user may select
the fields to be included in the output-file records as    
well as the sequence of fields within the records. 
 
RETRIEVAL: Selected records are extracted from the input   
list and sent to the selected output destination.  Records 
are selected according to one of the following criteria, as
chosen by the user:

a) occurrence of a desired search phrase in a specified 
field (field A, T, K, N, or T+K+N); 
 
b) occurrence of both of two field/phrase combinations;
 
c) direct decision when the first part of each record is   
displayed; 
 
d) selection of all records in the input file (useful for
Reformatting). 

OUTPUT: Output of the selected records is to screen,
printer, a new disk file, or any combination of these
three destinations.

 
 
     FORMAT FOR INPUT RECORD (REFERENCES) FILE: 
 
1. The pre-existing input file must not exceed 60000 
characters and should be in ASCII text format without 
non-printing control codes (save the file from Word Perfect,
for example, as a DOS text file using Ctrl-F5 or from
Wordstar in non-document format), although in some cases 
input files with non-ASCII characters will be handled 
satisfactorily.

2. Each record must be followed by an empty line. 
 
3. Any 'empty' line within a single record must contain
at least one character or  space so it will not be
interpreted as an end-of-record signal.

4. The `{`  sign must not occur except as specified below. 
 
5. Any record may include any or all of 5 labeled fields,  
in any order. Each field must begin at the left margin with
a three-character label: a '{', a letter (A,T,S,K, or N),  
and a space.  Permitted fields and labels are: 
   {A [Author field]  -first line must begin with: `{A ` 
   {T [Title field]  -first line must begin with: `{T ` 
   {S [Source field] -first line must begin with: `{S ` 
   {K [Key words or phrases] -first line begins: `{K ` 
   {N [Notes, abstract, etc.] -first line begins: `{N ` 
 
6. The number, length, or sequence of fields need not be   
the same for different records. 
 
 
		     TECHNIQUE 
 
On-screen instructions should be adequate for your use of  
BIBLIO.  However, the following pointers may be of interest. 
 
SEARCH PHRASES: Search phrases may be words, word	   
fragments, or phrases up to 18 characters in length.
 
HOW MANY FIELDS:  There is no need for a given field to    
contain only a single  category of information. The entire 
record can be in a single field, simplifying file	   
preparation, if (a) you will not need to change the record 
format for the output file or (b) retrieval is desired no  
matter where within the record your search phrase occurs.  
On the other hand, if you will want to drop or move part of
the record before output, or if some occurrences of the    
search phrase should be ignored, an additional fields will  
be required.  

PUNCTUATION:  Punctuation, spacing, and upper/lower case of
search phrases must be the same as in the input file   
for a retrieval to  occur. Judicious selection of search   
phrases will minimize false non-retrievals or false	   
retrievals. Examples: if you want retrieval whether or not 
the first letter of a phrase is capitalized, omit that	   
first letter from your search phrase.  If you do not want  
retrieval if a word is part of a larger word, include the  
preceding and/or following space. Use all-caps in the	   
record when possible (as in Keys and Notes fields) to	   
eliminate uncertainty about case for those sections of the 
record.
 
RE-SELECTION:  The number of search phrase/field	   
combinations for a given record is not limited to the two  
that can be entered at each pass: if field labels are	   
retained in the output file, that output file can then be  
renamed and used as the input file for selection 
of a further sub-set of records. Using this cascade	   
technique, simultaneous occurrence of any number of search 
field/phrase combinations may be assured before a record  
is finally selected. 
 
 
		    SAMPLE INPUT FILE 
 
The short input file seen below is included on the	   
distribution diskette as BIBLIO.REF.  Scan it now to	   
identify possible search strategies (e.g., retrieve	   
those records containing both CARTIL and PROTEIN SYN in    
field K.  Then type BIBLIO for a trial run of the program. 
 

		      BIBLIO.REF 
 
{A L.F. Adamson and S.H. Ingbar  
{T Selective Alteration by Triiodothyronine of Amino Acid  
   Transport in Embryonic Bone	
{S Endocrinology, 81 (1967) 1362-1371  
{K AMINO ACID TRANSPORT  THYROID HORMONE  BONE	
  
{A L.F. Adamson, S.G. Langeluttig, and C.S. Anast  
{T Inhibition by Puromycin of Amino Acid Transport by	   
   Embryonic Chick Bone  
{S Biochim. Biophys. Acta, 115 (1966) 355-360  
{K PROTEIN SYNTHESIS  PUROMYCIN  AMINO ACID TRANSPORT  BONE
   CARTILAGE  
{N PUROMYCIN INHIBITS AMINO ACID TRANSPORT BY EMBRYONIC    
   CHICK BONE BUT ONLY AFTER A 1-2 HOUR DELAY.	REVERSAL OF
   THE INHIBITION AFTER REMOVAL OF THE PUROMYCIN IS ALSO   
   DELAYED.  THE DELAYS ARE ATTRIBUTED TO THE TIME REQUIRED
   FOR EXHAUSTION OR SYNTHESIS OF TRANSPORT PROTEINS.  
  
{A L.F. Adamson, A.C. Herrington, and J. Bornstein  
{T Evidence for the Selection by the Membrane Transport    
   System of Intracellular or Extracellular Amino Acids for
   Protein Synthesis  
{S Biochim. Biophys. Acta, 282 (1972) 352-365  
{K PROTEIN SYNTHESIS  AMINO ACID TRANSPORT  PUROMYCIN  BONE
   CARTILAGE  
{N ..A COMPLEX FORMED BETWEEN THE AMINO ACID AND THE	   
   MEMBRANE TRANSPORT SYSTEM  IS THE SOURCE OF SUBSTRATE   
   FOR PROTEIN SYNTHESIS OR FOR INTRACELLULAR RELEASE.	IN 
   ORDER FOR INTRACELLULAR AMINO ACIDS TO BE INCORPORATED  
   INTO PROTEIN, THEY MUST FIRST BECOME REASSOCIATED WITH  
   THE MEMBRANE, IN COMPETITION WITH EXTRACELLULAR AMINO   
   ACIDS AND AT A SITE EXPOSED TO EXTRACELLULAR MODIFIERS  
   OF AMINO ACID UPTAKE.  
 

ION WITH EXTRACELLULAR AMINO   
   ACIDS AND AT A SITE EXPOSED TO EXTRACELLULAR MODIFIERS  
   OF AMINO ACID UPTAKE.  
 
```
{% endraw %}

## BIBLIO.TXT

{% raw %}
```
			BIBLIO.EXE
		       Version 9/87
	      A Search and Retrieval Utility 
	       for bibliographic references

		       BIOLIT, #47
		      131 NW 4th St.
		    Corvallis OR 97339
	  
BIBLIO runs on the IBM PC, XT, AT, or compatibles.  It selects	
references from a pre-existing text file containing a list of	
bibliographic references, each of which may include up to 5	
labeled fields: Authors, Title, Source, Keywords, and Notes.	
The number, length, or sequence of fields need not be the same	
for different references.

The user requests selection of those references containing:	
   a) a desired search phrase in a specified field; or
   b) both of two field/phrase combinations.
The user may change the within-record field sequence in the	
output records, omitting some fields altogether if so desired. 
 
Output of the selected records is to screen, printer, a new disk
file, or any combination of these three destinations.

REQUESTED REGISTRATION FEE: $15 (or $20 together with LIST-MGR)

```
{% endraw %}

## FILE0935.TXT

{% raw %}
```
Disk No:  935                                                           
Disk Title: MSPantoc, Biblio, and List-MRG                              
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: MSPANTOC                                                 
Author Version: 1.2                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
Writers -- here's a useful addition to your library.                    
                                                                        
MSPANTOC reads a document you created on a wordprocessor and            
writes a new document, updated with:                                    
                                                                        
~ Assigned section, paragraph, figure, and table numbers                
                                                                        
~ Resolved cross references                                             
                                                                        
~ A table of contents                                                   
                                                                        
~ A list of figures                                                     
                                                                        
~ A list of tables                                                      
                                                                        
MSPANTOC is not a wordprocessor or an outline generator.  It complements
your existing wordprocessing package by providing the numbering and     
cross-reference features not available with many current wordprocessing 
packages.  It works with WordStar, WordPerfect, or any other            
wordprocessor.                                                          
Program Title: Lst-Mgr                                                  
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
LIST-MGR searches and selects records from a text file such as a list of
addresses, clients, customers, members, and such, if it detects the     
presence of a specific string or set of strings.                        
                                                                        
Each retrieved record can have up to five labeled fields (e.g., name,   
street, city-state-zip, expiration date, notes).  The number, length,   
or sequence of fields need not be the same for different records.       
                                                                        
You can send selected records to screen, printer, a new disk file, or   
any combination of these.  You can change the within-record field       
sequence in the output records, omitting some fields altogether if you  
want.                                                                   
Program Title: BIBLIO                                                   
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Writers, Students, Editors -- BIBLIO will interest you.                 
                                                                        
BIBLIO selects references from a pre-existing text file with a          
list of bibliographic references.  Each reference can have up to five   
labeled fields such as author, title, source, keywords, and notes.  The 
number, length, or sequence of fields need not be the same for different
references.                                                             
                                                                        
You can request selection of those references with a desired search     
phrase in a specified field.  You can send the output of the selected   
records to the screen, printer or disk.                                 
                                                                        
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
║          <<<<  Disk No 935  MSPANTOC & BIBLIO & LIST-MGR  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation on this disk, type:                          ║
║                  COPY READ.ME PRN  (press Enter)                        ║
║                                                                         ║
║ When READ.ME is finished printing, type:                                ║
║                  MANUAL (press Enter)                                   ║
║                                                                         ║
║ To run the program MSPANTOC, Type: MSP (press enter)                    ║
║                                                                         ║
║ To run the program BIBLIO, Type: BIBLIO (press enter)                   ║
║                                                                         ║
║ To run the program LIST-MGR, Type: LIST-MGR (press enter)               ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## LIST-MGR.DOC

{% raw %}
```

		      LIST-MGR.EXE
		      Version 2/89

	      A Search and Retrieval Utility 
		   for list management.

		     BIOLIT, Box 268 
		      131 NW 4th St.
		   Corvallis OR. 97330
	  
You are invited to try LIST-MGR and to give copies to 
others. Anyone who keeps the program should send $15 to the
address above to avoid copyright infringement and to	   
register their use of the program ($20 for registration of
both LIST-MGR and BIBLIO.  Registrants will be sent free 
replacement programs if any major 'bugs' are found and 
removed from the program within one year of registration 
and will be offered low-cost updates if significantly 
enhanced versions are developed. Suggestions for
enhancements are invited.  

NOTE: Another Biolit program, BIBLIO.EXE, is similar to 
LIST-MGR but is more specific in its application, being 
intended for use with lists of bibliographic references.   
It allows retrievals of records containing a specified	   
field/phrase combination, both of two field/phrase	   
combinations (Author-Keys, Author-textWord, Key-Key, or    
Key-textWord;  textWord is a combined field consisting of  
the Title, Keywords, and Notes fields). BIBLIO also provides
the select-on-display, select-all-records, and reformatting
options of LIST-MGR.


		  WHAT LIST-MGR DOES

LIST-MGR runs on computers using the PC- or MS-DOS operating
system. It acts upon a pre-existing input text file 
containing a list of records, each of which may include up 
to 5 labeled fields.  It can accomplish either or both of
two functions, REFORMATTING and RETRIEVAL.

REFORMATTING:  For multi-field records, the user may change
the sequence in the output file of fields within records,  
omitting or repeating fields as desired.

RETRIEVAL: Selected records are extracted from the input   
list and sent to the output destination.  Records are	 
selected for retrieval according to one of the following
criteria, as selected by the user:

1) occurrence of a desired word or phrase (referred to	   
below as a 'phrase') in a specified field;

2) occurrence of either of two desired field/phrase	 
combinations;

3) occurrence of both of two field/phrase combinations;

4) individual decision by the user when the first part 
of each record is displayed; or

5) retrieval of all records in the list (useful when	   
Reformatting).

OUTPUT: Output is to screen, printer, a new disk file, or
any combination of these three output destinations. Field
sequence in output records is selected by user.

		    FIELD LABELS
A general comment concerning the necessity of field labels
(designated characters which mark the beginning of defined
sections of each record) and of record separation is in order. 

If a computer is to make selections based on the content
of different records and of different fields within those
records, it must be able to detect where each record and
each field begins and ends.  There are two approaches to
providing the computer with this information:

1) require that each record and each component fields be 
of a defined length, with the fields occurring in a defined 
sequence within the record. For example, each record can be 
defined as 6 80-character lines with the first line holding 
the name, the second the street address, etc.
   The disadvantage of this approach is the rigid record
format required, with that required format being the same
for every record. Furthurmore, the defined maximum 
record size must be set aside in memory for each record, 
whether or not the individual record is that long.

2) allow the different records to differ in length,
in the number of fields contained, and in the sequence 
of fields within the record by using tags to tell the 
computer where each record and field begins and ends.
   The disadvantage of this approach is that field and
record markers must be inserted in the record list.

In developing LIST-MGR and BIBLIO, we decided that the
greater flexibility of format allowed by the second
method outweighed the inconvenience of requiring field 
labels.


		FORMAT FOR INPUT RECORD FILE:

1. The pre-existing input file must not exceed 60000 
characters and should be in ASCII text format without 
non-printing control codes (save the file from Word Perfect,
for example, by using Ctrl-F5), although in some cases 
input files with non-printing codes will be handled 
satisfactorily.

2. Each record must be followed by an empty line.

3. Every line within a single record must contain at least 
one character or space. (If you want a line to appear to be 
empty, simply put one or more spaces in it).

4. The `{`  sign must not occur except as specified below.

5. Any record may include any or all of 5 labeled fields,  
in any order. Each field must begin at the left margin with
a three-character label: a {, a digit (1-5), and a space.

6. The number, length, or sequence of fields need not be   
the same for different records.

			TECHNIQUE

On-screen directions should be adequate for your use of  
LIST-MGR.  However, the following pointers may be of	   
interest.

SEARCH PHRASES: A search 'phrase' may be a word, word	   
fragment, or phrase up to 18 characters in length.

HOW MANY FIELDS:  There is no need for a given field to    
contain only a single category of information. The entire   
record can be in a single field, simplifying file	   
preparation, if (a) you will not need to change the record 
format for the output file or (b) retrieval is desired no  
matter where within the record your search phrase occurs.  
On the other hand, if you will want to drop or move part of
the record before output, or if some occurrences of the    
search phrase should be ignored, additional fields will  
need to be used.

Addition of more fields can sometimes be avoided by minor
modification of the text within a field.  For example,	   
suppose that your records are single-field addresses and   
you will want to retrieve on the basis of the first three  
digits of the zip code (for example, 801). Because 801 may 
also occur in a street number, false retrievals may occur. 
This can be avoided by preceding your zip codes with a	   
period (.80004, for example).  You can then search for .801
without needing to put zip codes in a separate field.

PUNCTUATION:  Punctuation, spacing, and upper/lower case must
be the same in the search-phrase as in the input file for 
a retrieval to occur. Judicious selection of search phrases
will minimize false retrievals or false non-retrievals. 
Examples: if you want retrieval whether or not the first 
letter of a phrase is capitalized, omit that first letter 
from your search phrase.  If you do not want retrieval if 
a word is part of a larger word, include the preceding space. 

If a given part of your records can be in all caps, you    
will eliminate uncertainty about case for that part (and   
also avoid false retrievals from non-capitalized parts of  
the record.)

RE-SELECTION:  The number of search phrases to be matched  
before a record is to be finally selected is not limited to
the two that can be entered at each pass: if field labels  
are retained in the output file, that output file can then 
be used (after being renamed) as the input file for	   
selection of a further sub-set of records. Using this	   
cascade technique, simultaneous  occurrence of any number  
of field/phrase combinations may be assured before a record
is finally selected.

OUTPUT FIELDS:	Sequence of fields within records of the 
output file can differ from that of the input file. Fields
can also be omitted or repeated, as desired.  Repetition
of a field is sometimes useful if the output record must
be padded with blank lines (to maintain record positions
on mailing labels, for instance).  In this case, if one of
field for each record is simply a blank line, this field
can be repeated as often as needed in the output records.

		     SAMPLE INPUT FILE

The very artificial short input file seen below is included
on the distribution diskette as LIST-MGR.REF.  It suggests 
some of the types of records which might be usefully	   
managed by LIST-MGR, including bibliographic references,   
product specifications, and address lists.

Scan it now to identify possible search strategies (e.g.,  
retrieve those records containing ZIP2 in field 1.  Then   
type LIST-MGR for a trial run of the program.

		      LIST-MGR.REF

{1 ADDRESSEE NAME
   111 1ST STREET
   CITY STATE .11111
.
.
.

{2 NOTES CONCERNING THE ADDRESSEE. This field would be	   
omitted from the output file when generating an address    
list to be used for typing mailing labels.

{1 ADDRESSEE 1
STREET1 
CITY1 STATE1 .ZIP1
. 
.
.

{1 POTENTIAL DONOR 1   
STREET2 
CITY2 STATE2 ZIP2
.
.
.
{2 TELEPHONE: XXX-XXXX
BIRTHYEAR: 1900-1910 
INCOME: 20000-40000 
POLITICS: DEMOCRAT INACTIVE 
OCCUPATION: RETIRED

{1 CUSTOMER 1
STREET3 
CITY3 STATE3 ZIP3
.
.
.
{2 POTENTIAL SALES: COPIERS  PERSONAL COMPUTER	PRINTERS   
RIBBONS  OFFICE SUPPLIES   OFFICE EQUIPMENT
{3 PURCHASES:  KAYPRO PC 10 1987  C ITOH STARWRITER 1987
{4 PAYMENT RECORD: GOOD  PERSONAL CHECKS

{1 STUDENT 1
STREET4 
CITY1 STATE1 ZIP1
.
.
.
{2 NOTES: ADVISOR: JOHN JONES  
	  MAJOR: VET MED
	  RESIDENCE: VAN ZILE HALL
	  FINANCIAL ASSISTANCE: PELL
	  FIRST TERM: FALL 87
	  ACADEMIC DEFICIENCIES: NONE

{1 SUBSCRIBER 1    8/88
STREET5 
CITY2 STATE2 ZIP2
{2 RENEWALS: SINCE 8/82

{1 CLUB MEMBER 1	12/87
STREET6 
CITY3 STATE3 ZIP3
.
.
.
{2 TELEPHONE HOME 123-4567 WORK 123-5678
   EMPLOYER: SUNRISE BOWL
   OFFICER/BOARD: YES

{1 CLIENT 1
STREET7 
CITY1 STATE1 ZIP1
.
.
.
{2 NOTES

{1 SUPPLIER 1
STREET8 
CITY2 STATE2 ZIP2
.
.
.
{2 PRODUCTS: CANNED VEGETABLES	CANNED FRUIT  GENERAL	   
	     GROCERIES	 
PAYMENT: 60 DAYS  90% REFUND ON RETURNS
TELEPHONE: xxx-xxx-xxxx

{1 AUTHORS
{2 TITLE 1
{3 BIBLIOGRAPHOIC SOURCE
{4 KEYWORDS
{5 ABSTRACT

{1 AUTOMOBILE MAKE MODEL AND YEAR
   LIST PRICE
   WARRANTEE	
   ENGINE 
   CHASSIS
   TIRES 


YWORDS
{5 AB
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0935

     Volume in drive A has no label
     Directory of A:\

    MSP      EXE     23413   6-08-90   4:21p
    READ     ME       3594   6-08-90   4:28p
    MSP      CFG      1174  12-27-88   2:12p
    MSPC     EXE     30531   6-08-90   1:46p
    WS       ATR       128   1-20-87   3:48p
    WP       ATR         8  12-06-86   2:07p
    BIBLIO   DOC     10240   1-28-88   1:47p
    BIBLIO   EXE      7338   1-28-88  10:00p
    BIBLIO   REF      1536   8-25-87   9:03a
    BIBLIO   TXT      1152   3-25-88   4:04p
    GO       BAT        38  10-19-87   3:56p
    LIST-MGR DOC     10240   2-20-89  10:44a
    LIST-MGR EXE      6168   2-20-89  11:12a
    MANUAL   BAT       147   1-19-89   9:21a
    FILE0935 TXT      5033   8-28-90   4:24p
    GO       TXT      1189   1-01-80   8:06a
           16 file(s)     101929 bytes
                           53760 bytes free
