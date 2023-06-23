---
layout: page
title: "PC-SIG Diskette Library (Disk #231)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0231/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0231"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REFLIST"

    REFLIST is an easy-to-use program that lets you create and format lists
    of references and bibliographies, --  elements which are always a
    problem for the writer submitting material to a variety of publishing
    houses, each with its own specific requirements.
    
    The truly unique feature of REFLIST is that once your paper has been
    written, it reformats your references into different user-defined
    formats.  You can submit a paper to one publisher with the references
    in one format and then, with REFLIST, reformat the references to a
    different format expected by another publisher -- all quickly and
    easily. In addition, REFLIST has instructions for quick integration
    into WordPerfect, PC-Write, or any ASCII-based wordprocessor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES231.TXT

{% raw %}
```
Disk No:  231
Program Title:  REFLIST version 3.5
PC-SIG version: 1.4

REFLIST is a easy to use program that allows you to create and format
lists of references, bibliographies and footnotes.

The truly unique feature of REFLIST is that once your paper has been
written, it will reformat your references into different user-defined
formats.  You can submit a paper to one publisher with the references in
one chosen format and then with REFLIST, reformat the references to a
different format expected by another publisher.  All quickly and easily.
In addition, REFLIST contains instructions for quick integration into
PC-Write and Word Perfect.

Usage:  Footnotes and References.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

EXAMPLE  MSS  Practice file.
MASTFILE DTA  Master file of references.
MASTFILE INX  Index file.
REFLIST  DEF  List of definitions.
REFLIST  DOC  Documentation.
REFLIST  EXE  Main Program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No 231 Reflist version 3.5   >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentationon this disk, type:                         ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the program on this disk, type:                                ║
║                                                                         ║
║             REFLIST (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REFLIST.DOC

{% raw %}
```

                             ******* 
                             REFLIST 
                             ******* 

                                           

        A PROGRAM TO WRITE AND FORMAT REFERENCE LISTS FOR 
               SCIENTIFIC AND TECHNICAL MANUSCRIPTS 

               v3.51 - (c) 1984, 1985,1986,1987,1988 

                          E.J.Shillitoe 
                       5326 Dumfries Drive 
                         Houston TX 77096 

                          (713) 728-0596 




REFLIST is a program for the IBM PC and compatible computers.  It 
performs  the  following  tasks  for authors  of  scientific  and 
technical manuscripts: 



--   REFLIST reads a text file and finds  the  citations to other 
     publications.  


--   It draws the references out of a Master File and formats the 
     reference list according to the style requirements of almost 
     any journal.  


--   It  can  return to the text file and replace  the  citations       
     with the appropriate numbers. 



This  program  is  distributed  on a  "Shareware"  basis.  It  is 
copyrighted,  but if you find it useful then you can feel free to 
give out copies to any one else.  If you use this program, please 
send me either a check or a purchase order for $30.  I will 
register you as a user, send you the latest version of the 
program, add any formats that you need and keep you informed of 
new developments.   The disc that I send you will have a more 
extensive .DOC file, as well as configuration files for WORD 
PERFECT and PC-WRITE.  It will include over 30 journal formats, 
and instructions on how to add your own formats.   Telephone 
support is provided to subscribers. 


                             ******* 



1  WHAT REFLIST DOES 

Imagine this situation,  which often faces researchers and  other 
academic  people.  You finish writing a thesis,  a review article 
or a grant proposal,  and have to compose a list  of  references.  
Firstly you have to read through the work carefully making a list 
of  the  citations  in  the  text,   eliminating  duplicates  and 
alphabetizing them if necessary.  When this is finally  done  you 
have  to  look up the actual references and make up the reference 
list.  This might have a hundred items,  each  looking  a  little 
like this: 


Sorsdahl  OA,  Williams  CM,  & Bruno  FP:  Scintillation  camera 
scanning of the salivary glands. Radiology 92:1477-1480, 1969 


Typing  each  reference  is a slow business,  even  with  a  word 
processor,  as  the  format and details have to  be  just  right.  
Eventually  you  are finished.   However soon you  find  yourself 
submitting  a paper on a similar subject to the journal 'Nature'.  
Now you must re-type all of the references so that they look like 
this: 


1.  Sorsdahl,  O.A.,  Williams,  C.M. & Bruno, F.P. Radiology 92, 
1477 (1969). 


Suppose that 'Nature' rejects your paper  (unlikely,  of  course) 
and  you  want  to  re-submit  it  to the Journal of the National 
Cancer Institute.  You have no choice but to re-type  the  entire 
list again, until each reference looks like this: 


(1)  SORSDAHL OA,  WILLIAMS CM,  BRUNO FP.  Scintillation  camera 
scanning of the salivary glands.  Radiology 1969; 92:1477-1480. 


Suppose that the Journal of the National Cancer Institute accepts 
the paper,  but soon you are writing another on a related subject 
(therefore using some of the same references again) and decide to 
send it to  the Journal of Virology.   Now you must re-type  your 
references again, but make them look like this: 


Sorsdahl O.A.,  C.M.Williams and F.P.Bruno (1969).  Scintillation 
camera scanning of the salivary glands. Radiology 92, 1477-1480. 


Suppose  that the Journal of Virology rejects the paper ...  well 
you probably get the point by now.  In fact if you  go  into  any 
scientific library and pick up any 10 journals at random you will 
probably find about 9 different reference formats.  


Here is another problem raised by references.  Some journals want 
you  to  include citations within the text like this  (Smith  and 
Jones,  1984)  which  is easy enough,  but many others  want  the 
citations to be numbered like this (7).   The numbering system is 
a  real  pain to use because you have to write the  entire  paper 
first,  and then put in the numbers later.  If you edit the paper 
even slightly and add or remove just one citation you have to re-
number all of the following citations in the text,  and re-number 
the  entire reference list again.   Then if the paper comes  back 
from  a  reviewer  who demands that some references be  added  or 
others deleted, you go through the whole business all over again.  


These three problems,  of compiling the citations, formatting the 
references  and  numbering  the citations and references,  are of 
course governed by extremely rigid rules and so can be  performed 
by a computer.  REFLIST is a program to do these tasks  and  this 
manual  explains how to use it.  Before you start,  make a backup 
copy  of  the disc and use the copy for your work.  Save the disc 
supplied in case of problems later with your working disc.  



                             ******* 2 INSTALLATION 


To install REFLIST you must tell the program what character you 
will be putting in text files to flag citations to other 
published works.  In order to see how flagging works use your 
word-processor  to examine the file named "EXAMPLE.MSS" on the 
REFLIST   disc.   You will see that it consists of a section of a 
scientific manuscript containing a number of citations.    Each 
citation is preceded by a  flag  which tells the REFLIST program 
that what follows  is  a citation.   The  flag consists of the 
Control-R  character  which might  appear on your screen  
something  like ^R,  or might  look like a double-headed arrow.   
You must now determine if your word processor  will  allow  you  
to put a  Control-R  into  your  own documents.  If  you write 
with WORDSTAR (tm) then you simply type Control-P Control-R 
before each citation in your text and if  you wish  to  see  the  
text without the ^R character you can hide it with  the  Control-
O Control-D command.  

If you use PC-WRITE (tm) then  in  your ED.DEF file you will need 
two lines - one will read  #R:255.255.255=18.  This line  is to 
distinguish the Control-R from the font characters that control 
printing and to prevent PC-WRITE from duplicating it when it 
reformats paragraphs. The other line in ED.DEF must read R:"".  
(Note  that between the quote marks should be the  double headed 
arrow on the screen.  When you print out this manual you might 
get nothing between the quotes).  This line allows you to enter 
Control-R in the text by holding down the Control key while 
pressing the R.  One way to write the Control-R into the ED.DEF 
file for the very first time you do it is to hold down the Alt 
key, press 18 on the numeric keypad, and then release the Alt 
key.  This does not work on all PC-clones however. In your PR.DEF 
file you should put the line $18=  (Note that the line is 
incomplete, with nothing after the = sign).  This prevents the 
Control-R from being sent to the printer when the file is 
printed. 

WORD PERFECT lets you enter the Control-R into the text simply by 
holding down the Control key and pressing R.  If you find that 
this symbol is being sent to your printer and causing problems, 
then you will have to re-install your printer to prevent the 
character from being sent, or to re-define it as a character that 
does nothing. 

Many other  word-processors  also  allow  the  entry  of  control 
characters into the text, but you will have to consult the manual 
or call the company to  find  how  this  is  done.  Some  word-
processors,  such  as  MULTIMATE  (tm),  Microsoft's WORD (tm) or 
WORDSTAR 2000 (tm)  do  not  generally  write  ASCII  files,  but 
compress  the  data into their own format.  REFLIST can only read 
ASCII files, but these programs can write in ASCII if they are 
told to print to the disc. 

If it is not possible to enter Control-R into text with your word 
processor,  or if this symbol means something  to  your  printer, 
then  you  will  have  to  use  some other character to flag each 
citation.  It is best to use a Control- character since  it  will 
not appear in your printed text,  but do not use Control-H, -I, -
J,  -M or -Z as these probably mean  something  already  to  your 
computer  or printer and will produce a surprise when you edit or 
print the text.  If it is  completely  impossible  to  enter  any 
Control  character  into  your  text  then you will have to use a 
printable character which you do not use otherwise.  For  example 
you could use a & or a ^ or a @ sign.  Later you will have to use 
the  'Find-And-Replace' command of your word processor to replace 
the flags with  a  space,  or  you  might  be  able  to  alter  a 
translation  table  to make that character non-printing.  

If you have chosen a text flag other than Control-R you must call 
up REFLIST.DEF again and look at line 3.  It starts with a 
control-R character.  Replace the control-R with the character 
that you have chosen.  Now you  should  try it out by going 
through EXAMPLE.MSS removing the Control-Rs and replacing them 
with your own flag.  As you do this you will notice that each 
citation has  its  own  flag,  even  if there  are several 
citations together.  Citations have to consist of a name or names 
and a year.  Citations must be shorter than 40 characters and can 
terminate in a lower case letter (i.e.  1981a, 1964c)  if  
necessary.  Punctuation such as commas or periods can be included 
in the citation or left out as  necessary.  Once  you have  
modified  the  EXAMPLE.MSS  file  to  suit  your  own  word 
processor you should save the modified version on the disc.  



                            ******* 

                            ******* 


3 - PREPARING A REFERENCE LIST 


To start the program from the DOS prompt, just type REFLIST and   
press  ENTER.  After  the program has loaded you will see a menu  
offering five choices.  As with all of the REFLIST menus, the 
first letter of each choice is shown highlighted, and the choice 
can be made by pressing that letter on the keyboard.  
Alternatively, the choice can be made by using the up and down 
arrow keys on the cursor pad until your choice is shown in 
inverse video, and then pressing ENTER.   If you press the ESC 
key while using REFLIST you will cancel the current choice and 
usually go back a step in the program. 

To get a demonstration of the program you can prepare a reference 
list for the text file called EXAMPLE.MSS that is provided with 
the program.  For  the sake of a demonstration chose option  
"Prepare  a reference list".   You will then be given the option 
of preparing a list from a text file, from all the entries in 
your Master File, or according to keywords.  Choose the text file 
option and you will be asked  the  name  of  the file for the  
program  to  read.   Type EXAMPLE.MSS and press  ENTER.   The 
file name must be on the same disc  as  the  REFLIST program.    
If  it was on another disc you would have  typed,   for example,  
B:EXAMPLE.MSS , if it was on a disc in the B drive. 

You will see a message on the screen telling you that the program 
is reading your text, and what flag it is looking for. This goes 
by very fast for a small file such as EXAMPLE.MSS.    When this 
has been done and all of the citations have been found,  you will 
see another message telling you that the index to the Master File 
of references is being read.  This goes by very fast when the 
Master File is small, but gets slower when the file is large. 
Soon you  will see another menu asking you to chose the journal 
format in  which you  want your list to be written.  If you don't 
like the choices offered,  move the inverse video bar down to the 
bottom and  press  ENTER  to  see more choices.   Type the number 
of the  journal  whose  format  you need, or put the bar on it, 
and  press ENTER again.  Soon you will see a message saying that 
the reference list is ready.  

Type DIR to see the directory of the disk.   It will now  contain 
two  new  files:  EXAMPLE.CIT  and EXAMPLE.REF.   Use  your  word 
processing  program to read EXAMPLE.REF and you will see that  it 
consists  of the reference list for EXAMPLE.MSS,  written in  the 
format that you chose.   However, if any references are missing 
from the Master File you will get a message to that effect and 
will have to add them. 

                             ******* 

 
4 - REPLACING TEXT CITATIONS WITH NUMBERS 

Some  journals  and  books require that  citations  in  the  text 
consist  of numbers instead of names and years.    If REFLIST has 
already  created  a reference list for a document it can use  the 
new .CIT  file  to  replace  citations  with  the  correct 
numbers.  

Firstly,  prepare  the  reference list by using option P from the 
Menu.  Then choose option R (Replace citations in the  text  with 
numbers).  You will be asked for the name of the text file.  Type 
in  the  file  name  (for  example  EXAMPLE.MSS) and press ENTER.  
After  the  replacement  you  must  keep  the  EXAMPLE.CIT   file 
carefully,  since if you ever need to put the citations back, the 
program will need that file.  

To put the citations back into the text,  call REFLIST and choose 
option R again.  After replacing the numbers with  the  citations 
it  will  be  necessary  to  line  up  the margins with your word 
processor.   If  you  accidentally  wiped  out  the  file  called 
EXAMPLE.CIT (or whatever your text's citation file is called), it 
will not be possible to get the citations back into the text.  


                             ******* 



                             ******* 

FILES USED BY REFLIST 


The following four files are all essential for REFLIST to work.  

REFLIST.EXE             The Program 

MASTFILE.DTA            The Master File of references.  It can be 
                        given a  different  name,  if  you change 
                        the name in REFLIST.DEF 

MASTFILE.INX            An index file used by the program.  It is 
                        updated automatically when new references 
                        are added or deleted, or when you use the 
                        I option from the Main Menu 

REFLIST.DEF             A  file of definitions. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0231

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE  MSS      1526   5-29-86   9:35p
    FILES231 TXT      1134   1-25-89   9:05a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   1-11-89   3:28p
    MANUAL   BAT       147   6-08-88   3:02p
    MASTFILE DTA      6281   5-26-86   2:37p
    MASTFILE INX       246   6-01-86  11:01a
    REFLIST  DEF      6920  10-09-88   3:21p
    REFLIST  DOC     14860  12-28-88   8:57p
    REFLIST  EXE     72772   8-06-88   1:41p
           10 file(s)     104926 bytes
                           52224 bytes free
