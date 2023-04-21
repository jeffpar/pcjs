---
layout: page
title: "PC-SIG Diskette Library (Disk #2346)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2346/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2346"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXTOUT, CONVDW, & TEXTCON"

    TEXTOUT/5 converts WordPerfect 5.0 and 5.1 document files to ASCII.
    
    It improves upon WordPerfect's Text Out command, in both DOS Text and
    generic word processing formats.  TEXTOUT/5 translates the entire
    document, including text, captions and equations from graphics boxes,
    as well as footnotes and endnotes -- all items that WordPerfect
    ignores.  TEXTOUT/5 can mark certain font attributes, such as
    underlining, in the ASCII file by using special characters.  This is
    useful if you want to transfer the ASCII file to another word
    processor and restore the attributes.
    
    CONVDW converts IBM DisplayWrite 3 & 4 document files to ASCII.
    
    IBM does not publish the file format for DisplayWrite, so CONVDW is one
    of the very few programs that can read DisplayWrite files.  Create
    files that omit the soft returns and retain the tab characters.  This
    format, very useful for importing to another word processor, is not
    available from within DisplayWrite.
    
    CONVDW omits most page-formatting characteristics.  For example, the
    left margin is not expanded to spaces, the top and bottom margins are
    not expanded to blank lines, and page breaks, headers, footers, and
    page numbering are omitted.
    
    TEXTCON allows you to import ASCII files into your word processor
    without having to manually delete carriage returns, remove extra
    spaces, and generally reformat your documents.
    
    Files can be imported with accurate paragraph breaks due to TEXTCON's
    intelligent paragraph recognition algorithms.  No more manual deletion
    of hard returns.  TEXTCON even works with difficult formats, such as
    fully nested, outline style and hanging indents.  TEXTCON also removes
    excess spaces, blank lines, and headers and footers.  TEXTCON can
    accept any form of ASCII file, including those transferred from
    Macintosh or UNIX, as well as WordStar.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONVDW.DOC

{% raw %}
```






       ConvDW 1.2 Payment Form
       -----------------------

       NEW!  Payment for ConvDW now entitles you to a free CompuServe
       IntroPak, including a $15 credit toward on-line time!

         Name ____________________________________________________________

         Company _________________________________________________________

         Address _________________________________________________________

         City ________________________________ State ______ Zip __________

                                         Country _________________________

       NUMBER OF COPIES ____     DISKETTE SIZE __________

       TOTAL PAYMENT  $_____  ($20/copy suggested)
              Payment of $20 or more per copy entitles the purchaser to a
              printed manual (sized to fit the DW binder), the current
              release of ConvDW without the on-screen payment reminder,
              and a free CompuServe IntroPak.

       SALES TAX     _______  (Michigan residents only, 4%)

       OVERSEAS
       SHIPPING      _______  ($5 per order)

       PAYMENT METHOD:

       ___  Check enclosed (US Funds):

       ___  Bill company (enclose purchase order, add $5 processing fee)

       ___  Charge VISA / MasterCard

            Card # __________________________________  Expires ___________

            Signature ____________________________________________________

       Call (517) 332-4353 to pay by MasterCard or VISA, or send your payment
       or purchase order to:   CrossCourt Systems
                               1521 Greenview Ave.
                               East Lansing, MI  48823


       Prices are in U.S. dollars and include shipping within North America.

       Foreign orders:  payment must be by credit card, international money
       order in U.S. dollars, or by check in U.S. dollars drawn on a U.S.
       bank.  Payment must also include $5 shipping for airmail delivery.






                                       ConvDW
                      DisplayWrite-to-ASCII Conversion Program
                                    Version 1.2

                          Another Shareware Product from:
                                 CrossCourt Systems
                 (Member - Association of Shareware Professionals)


       FEATURES

       ConvDW is a standalone program for IBM-compatible computers that
       converts IBM DisplayWrite 3 & 4 document files to ASCII.  IBM does not
       publish the file format for DisplayWrite, so ConvDW is one of only a
       handful of programs, either shareware or commercial, that can read
       DisplayWrite files.  See the end of this file for information about
       conversion to DCA/RFT and our DisplayWrite Conversion Package for
       those who need to perform their own conversions to or from
       DisplayWrite.

       ConvDW improves upon DisplayWrite's ASCII output in several ways.

       1.  ConvDW can create files that omit the soft returns and retain the
           tab characters.  This format, which is very useful for importing
           to another word processor, is not available from within
           DisplayWrite.
       2.  It can mark certain font attributes, such as underlining, in the
           ASCII file by using special characters.  This also is useful if
           you want to transfer the ASCII file to another word processor and
           restore the attributes.
       3.  ConvDW can be run from the DOS command line, and will accept
           wildcard filespecs.
       4.  It can be used by someone who does not have DisplayWrite, but who
           may have received DisplayWrite files from elsewhere.

       ConvDW's default ASCII format is very much like DisplayWrite's ASCII
       output.  It emulates indents, tabs and centering by the use of spaces,
       and ends each line with a hard carriage return.  The format is
       suitable for electronic mail and many other purposes.  See the
       "OPTIONS" section for information on the other formats ConvDW can
       produce.

       ConvDW omits most page-formatting characteristics.  This means that,
       for example, the left margin is not expanded to spaces; the top and
       bottom margins are not expanded to blank lines; and page breaks,
       headers, footers, and page numbering are omitted.


       USE

       To run ConvDW, type CONVDW followed by two filenames.  The first one
       is the name of the input (DisplayWrite) file, the second is the output
       (ASCII) file.  For example:



                                      3


           CONVDW TEST.DOC TEST.OUT

       The file names can include wildcards, employed in the same way as with
       the DOS COPY command.  For example,
           CONVDW A:C*.TXT *.PRN
       would convert all DW3 files starting with the letter C in the current
       directory on drive A: to ASCII files with the extension .PRN on the
       current drive and directory.

       If no extension is specified for the source file, .DOC will be used.
       If none is specified for the target file, .ASC will be used.  For
       example,
           CONVDW \DOCS \TEXT
       would convert all files with the extension .DOC from the \DOCS
       directory to the \TEXT directory while changing their extensions to
       .ASC.  To use a filename with no extension, you must end the name with
       a period.

       If a file already exists under the output name, it will be replaced
       without warning.  If the input and output names are the same, ConvDW
       will not proceed with the conversion.  If the source file is not a DW3
       or 4 document, ConvDW will report this, and will not perform the
       conversion.


       OPTIONS

       ConvDW has many options which can be invoked by "switches" on the
       command line.  The switches start with a slash or a hyphen, followed
       by a letter identifying the option, and, for some of the switches, a
       numeric value.  The identifying letter can be upper or lower case and
       the switches can appear anywhere on the command line -- before, after,
       or in between the filenames.  There must not be any spaces between the
       slash, the letter and the number.  A typical command might look like:
           CONVDW /T /R /B60 /C62 JULY \NEW

           "Generic Format" Options

           These two options would usually be used together.  The resulting
           format has tabs and carriage returns only where the operator
           originally typed them, with no spaces or "soft returns" added.
           This is usually the best format to use if you want to transfer the
           resulting ASCII file to another word processor.

           1.  /R        keep only hard <R>eturns

               This will keep only DisplayWrite's hard returns in the ASCII
               file, in effect turning each paragraph into a single long line
               of text.



                                      4


           2.  /T           keep <T>ab characters

               This will keep tab characters in the ASCII file, rather than
               replacing them with spaces.  This will also suppress the use
               of spaces to position text that is centered between the
               margins or flush to the right margin.


           Font Attribute Options

           These four options, two of which use two switches apiece, allow
           the start and end of certain font attributes to be marked in the
           ASCII file using special characters.  They are usually used along
           with the generic-format options in order to move the ASCII file to
           another word processor and restore the original format.

           The naming of these switches is intended to be mnemonic, but they
           require some explanation.  For bold and underline, which have both
           a start and end code, the switch for the starting code is intended
           to remind you of the function, while the switch for the ending
           code simply follows the start switch alphabetically.  Thus /B for
           bold is paired with /C, and /U for underline is paired with /V.

           Subscripting and superscripting do not have end codes in
           DisplayWrite; you end a superscript by putting in a subscript code
           (and vice versa), thus returning to the original level.  The
           switch names for these are less obvious, with /I intended to
           remind you of things often used as subscripts, while /X might be
           used as a superscript (powers).

           1.  /B# and /C#             <B>oldface

               There are several ways to use these and the following paired
               options.

               If you want to mark boldface text using the default characters
               of { (ASCII 123) at the beginning and } (ASCII 125) at the
               end, all you have to do is specify /B by itself.

               If you want to mark boldface text, but want to use different
               characters, perhaps because the default characters may occur
               in your document, you can specify either or both of the /B and
               /C switches with a numeric ASCII value (as indicated by the #
               symbol in the switch template above).  In the case of the /B
               switch, the ASCII character corresponding to the numeric value
               will be used to mark the start of boldface; the value given
               for the /C switch will be used to mark the end.

               The value must be decimal (i.e., hexadecimal is not allowed)
               and cannot be zero.  Only a single ASCII value can be used for
               each switch; it is not possible to mark with a multi-character
               code, such as [B].  So, for example, /B17 would cause a Ctrl-Q



                                      5


               to be used at the start of bold text, while /C35 would put #
               symbols at the end of bold text.

               In some ways the use of ASCII values is inconvenient, but DOS
               puts restrictions on the use of many characters on the command
               line, so something like /B< /C> will not work.  The use of
               numbers gives maximum flexibility.

           2.  /U# and /V#          <U>nderlining

               The description of /B and /C above explains how the paired
               options work.  If you use /U without a number, the beginning
               of underlining will be marked with < (ASCII 60) and the ending
               with > (ASCII 62).

           3.  /I#                      subscript

               The description of /B and /C above explains how to use this
               option.  If you use /I without a number, the beginning of a
               subscript will be marked with ~ (ASCII 126).

           4.  /X#                    superscript

               The description of /B and /C above explains how to use this
               option.  If you use /X without a number, the beginning of a
               superscript will be marked with ^ (ASCII 94).


       REGISTRATION AND DISTRIBUTION

       IBM and DisplayWrite are registered trademarks of International
       Business Machines Corporation.

       ConvDW is Copyright 1988-89, CrossCourt Systems.

       If you try ConvDW and find it to be a useful and valuable product,
       please complete your purchase of it by sending payment to CrossCourt
       Systems at the address below.  For $20 you will receive a printed
       manual, sized to fit an IBM binder, and the current version of the
       program, without the on-screen payment reminder.  You will also
       receive a free IntroPak for the CompuServe Information Service, the
       premiere interactive electronic communication service.  CompuServe
       provides news, financial information, entertainment services, personal
       computing services, special interest forums, and more.  The IntroPak
       includes $15 of free on-line time.

       VISA and MasterCard are accepted.  Volume discounts and site licenses
       are available.

       In the spirit of shareware, we believe that the value of a program is
       best determined by you, based on the number of copies you are using,
       the frequency of use, and the amount of time it saves you.  Our



                                      6


       business policy is to accept payments both above and below the stated
       $20 price.

       ConvDW may be distributed to others, as long as 1) the program is not
       altered in any way, 2) this documentation file is always included, and
       3) no charge is made for such distribution beyond a modest disk
       preparation fee.  For bulletin board distribution, please use the file
       name CONVDW.ZIP.

       ConvDW has been tested and performs its functions essentially as
       described above, without causing any damage to the computer in use or
       any of its files.  However, all users are responsible for backing up
       their own files, and CrossCourt Systems assumes no responsibility for
       any damage or losses incurred as a result of its use.

       CrossCourt Systems supports ConvDW, by providing technical assistance,
       bug fixes, and enhancements.  CrossCourt Systems can be reached on
       CompuServe at 72446,2704, or at the address and phone below.  If you
       encounter problems with any conversion, or have suggestions for
       improvements, please let us know about them.

       CrossCourt Systems
       1521 Greenview Ave.
       East Lansing, MI 48823
       (517) 332-4353


       CrossCourt Systems is a member of the Association of Shareware
       Professionals (ASP), a group dedicated to high standards in the
       design, documentation, and support of shareware products.  ASP wants
       to make sure that the shareware principle works for you.  If you are
       unable to resolve a shareware-related problem with an ASP member, the
       ASP Ombudsman may be able to help.  Please write to the ASP Ombudsman
       at P.O. Box 5786, Bellevue, WA 98006 or send a CompuServe EasyPlex
       message to ASP Ombudsman 70007,3536.



       Other products from CrossCourt Systems

       DisplayWrite Conversion Package - includes a report describing the
       format of DisplayWrite files, as well as Microsoft C source code for
       ConvDW, DWtoRFT, and DumpDW.  Call for information.

       DWtoRFT - converts DisplayWrite files to DCA/RFT using wildcard
       filenames.  Great for large conversions from DisplayWrite to other
       formats.  Available for $50 direct.

       TextOut/5 - converts WordPerfect 5.0 or 5.1 files to ASCII, offering
       many of the same options as ConvDW.  Its conversion is much more
       flexible than WordPerfect's own.  It also converts foot- and endnotes,
       text boxes, and equations, and formats tables better than WP does.



                                      7


       Shareware found as TXTOUT.ZIP or TEXTOUT5.ZIP on bulletin boards.
       Available for $20 direct (includes printed manual).

       ConvDCA - converts IBM DCA/RFT format files to ASCII, offering many of
       the same options as TextOut/5.  Shareware found as CNVDCA.ZIP or
       CONVDCA.ZIP on bulletin boards.  Available for $20 direct.

       TextCon - a program to reformat ASCII files before importing them to
       your word processor.  TextCon performs extremely intelligent
       "cleaning" operations on your ASCII files, so you have less editing to
       do after importing them.  It removes unneeded hard carriage returns
       (even with tricky paragraph formats), strips excess spaces used for
       margins or justification, and does other processing to get the
       cleanest conversion possible.  Can also perform other unusual
       formatting tasks such as splitting long lines in generic-format files.
       Shareware found as TEXTCN.ZIP or TEXTCON.ZIP on bulletin boards.
       Available for $25 direct (includes printed manual).

```
{% endraw %}

## FILE2346.TXT

{% raw %}
```
Disk No: 2346                                                           
Disk Title: Textout, ConvDW, & TextCon                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Textout                                                  
Author Version: 1.3                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
TEXTOUT/5 converts WordPerfect 5.0 and 5.1 document files to ASCII.  It 
improves upon WordPerfect's Text Out command, in both the DOS Text and  
generic word processing formats.  TEXTOUT/5 translates the entire       
document, including text, captions and equations from graphics boxes, as
well as footnotes and endnotes - all items that WordPerfect ignores.    
TEXTOUT/5 can mark certain font attributes, such as underlining, in the 
ASCII file by using special characters.  This is useful if you want to  
transfer the ASCII file to another word processor and restore the       
attributes.                                                             
Program Title: ConvDW                                                   
Author Version: 1.2                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
CONVDW converts IBM DisplayWrite 3 & 4 document files to ASCII.  IBM    
does not publish the file format for DisplayWrite, so CONVDW is one of  
very few programs that can read DisplayWrite files.  CONVDW can create  
files that omit the soft returns and retain the tab characters.  This   
format, which is very useful for importing to another word processor,   
is not available from within DisplayWrite.  CONVDW omits most page      
formatting characteristics.  For example, the left margin is not        
expanded to spaces, the top and bottom margins are not expanded to blank
lines, and page breaks, headers, footers, and page numbering are        
omitted.                                                                
Program Title: TextCon                                                  
Author Version: 1.7                                                     
Author Registration: $25.00                                             
Special Requirements: None                                              
                                                                        
TEXTCON gives you the ability to import ASCII files into your word      
processor without having to manually delete carriage returns, remove    
extra spaces, and generally reformat your documents.  Files can be      
imported with correct paragraph breaks due to TEXTCON's intelligent     
paragraph recognition algorithms.  No more manual deletion of hard      
returns.  TEXTCON even works with difficult formats, such as fully      
nested, outline style and hanging indents.  TEXTCON also removes excess 
spaces, blank lines, and headers and footers.  TEXTCON can accept any   
form of ASCII file, including those transferred from Macintosh or UNIX, 
as well as WordStar.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TEXTOUT5.DOC

{% raw %}
```






       TextOut/5 1.3 Payment Form
       --------------------------

       NEW!  Payment for TextOut/5 now entitles you to a free CompuServe
       IntroPak, including a $15 credit toward on-line time!

         Name ____________________________________________________________

         Company _________________________________________________________

         Address _________________________________________________________

         City ________________________________ State ______ Zip __________

                                         Country _________________________

       NUMBER OF COPIES ____     DISKETTE SIZE __________

       TOTAL PAYMENT  $_____  ($20/copy suggested)
              Payment of $20 or more per copy entitles the purchaser to a
              printed manual (sized to fit the WP binder), the current
              release of TextOut/5 without the on-screen payment reminder,
              and a free CompuServe IntroPak.

       SALES TAX     _______  (Michigan residents only, 4%)

       OVERSEAS
       SHIPPING      _______  ($5 per order)

       PAYMENT METHOD:

       ___  Check enclosed (US Funds):

       ___  Bill company (enclose purchase order, add $5 processing fee)

       ___  Charge VISA / MasterCard

            Card # __________________________________  Expires ___________

            Signature ____________________________________________________

       Call (517) 332-4353 to pay by MasterCard or VISA, or send your payment
       or purchase order to:   CrossCourt Systems
                               1521 Greenview Ave.
                               East Lansing, MI  48823


       Prices are in U.S. dollars and include shipping within North America.

       Foreign orders:  payment must be by credit card, international money
       order in U.S. dollars, or by check in U.S. dollars drawn on a U.S.
       bank.  Payment must also include $5 shipping for airmail delivery.






                                     TextOut/5
                     WordPerfect 5 to ASCII Conversion Program
                                    Version 1.3

                          Another Shareware Product from:
                                 CrossCourt Systems
                 (Member - Association of Shareware Professionals)


       FEATURES

       TextOut/5 converts WordPerfect 5.0 and 5.1 document files on IBM-
       compatible computers to ASCII.  It improves upon WordPerfect's Text
       Out command, in both the "DOS Text" and "generic" formats.

       1.  TextOut/5 translates text, captions, and equations from graphics
           boxes, as well as footnotes and endnotes; WordPerfect does not.
       2.  TextOut/5 formats tables much better than WordPerfect does.
       3.  TextOut/5 translates over 400 of WordPerfect's special characters
           to ASCII; WordPerfect translates only 150.
       4.  TextOut/5 allows you to specify the line length you want in the
           ASCII file, without any reformatting on your part.
       5.  TextOut/5 can use special characters to mark many font attributes,
           such as underline, allowing you to transfer the file to another
           word processor and restore the attributes.
       6.  TextOut/5 runs from the DOS command line, and accepts wildcard
           filespecs.
       7.  TextOut/5 can recover text from damaged files that WordPerfect
           will not load.

       TextOut/5's default ASCII format is very much like that of the
       WordPerfect "DOS Text Save" command.  It emulates indents, tabs and
       centering by the use of spaces, and ends each line with a hard
       carriage return.  The format is suitable for electronic mail and many
       other purposes.  See the "OPTIONS" section for information on the
       other formats TextOut/5 can produce.

       TextOut/5 omits most page-formatting characteristics.  This means
       that, for example, the left margin is not expanded to spaces; the top
       and bottom margins are not expanded to blank lines; page breaks,
       headers, footers, and page numbering are omitted; and line-spacing and
       top-to-bottom-centering commands are ignored.

       Over 400 of WordPerfect's special characters are translated to
       equivalent or similar ASCII characters.  Other WordPerfect special
       characters are translated to ASCII 254.  WordPerfect's overstrike
       feature is translated with a backspace character (ASCII 8) inserted
       between the characters.

       Captions and text from graphics boxes are translated.  Equations are
       written in the command form used in the equation editor.  Tables have
       correct horizontal spacing, but, unfortunately, any cell containing



                                                                               3


       more than one line of text will cause the next cell to the right to
       start one or more lines below where it should.

       Footnotes and endnotes are placed at the end of the ASCII file.
       Within the notes, a period and a single space are added after the note
       number for readability.  If a document contains both footnotes and
       endnotes, the footnotes appear first, followed by the endnotes.  The
       footnote reference numbers in the text are enclosed in square
       brackets, e.g. [1], while endnote reference numbers are enclosed in
       braces, e.g. {3}.

       For "Fast-Saved" documents, TextOut/5 will warn you that the
       formatting may not be correct.  Unless you have recently made a change
       in margins, tabs or fonts without having gone to the end of the
       document, the ASCII format will probably be fine.  You can avoid
       potential problems by changing your Setup options to disable Fast
       Saves.


       USE

       To run TextOut/5, type TO5 followed by two filenames.  The first one
       is the name of the input (WordPerfect) file, the second is the output
       (ASCII) file.  For example:
           TO5 TEST.DOC TEST.ASC

       The file names can include wildcards, employed in the same way as with
       the DOS COPY command.  For example,
           TO5 A:P*.*
       converts all files starting with P in the current directory on drive
       A: to ASCII files of the same name on the current drive and directory,
       while
           TO5 \DOCS \TEXT\*.TXT
       would convert all files from the \DOCS directory to the \TEXT
       directory while changing their extensions to TXT.

       If a file already exists under the output name, it will be replaced
       without warning.  If the input and output names are the same,
       TextOut/5 will not proceed with the conversion.  If the source file is
       not a WordPerfect 5 document, TextOut/5 will report this, and will not
       perform the conversion.


       OPTIONS

       TextOut/5 has many options which can be invoked by "switches" on the
       command line.  The switches start with a slash or a hyphen, followed
       by a letter identifying the option, and, for some of the switches, a
       numeric value.  The identifying letter can be upper or lower case and
       the switches can appear anywhere on the command line -- before, after,
       or in between the filenames.  There must not be any spaces between the
       slash, the letter and the number.  A typical command might look like:
           TO5 /T /R /B60 /C62 SAMPL SAMPL.ASC



                                                                               4



       "Generic Format" Options

       These two options are usually used together to produce a format like
       WordPerfect's "generic word processing" option.  This format has tabs
       and carriage returns only where the operator originally typed them,
       with no spaces or "soft returns" added.  This is usually the best
       format to use if you want to transfer the resulting ASCII file to
       another word processor.

       1.  /R            keep only hard <R>eturns

           This will keep only WordPerfect's hard returns in the ASCII file,
           in effect turning each paragraph into a single long line of text.

           It also changes the formatting of footnotes and endnotes, placing
           them in-line where they occur rather than at the end of the file.
           This makes it easier to change them back into footnotes in another
           word processor, in many cases by using a macro.  [[The note
           numbers are omitted entirely, and the content of a footnote is
           enclosed in double square brackets, as shown by this sentence.]]
           {[Endnotes are enclosed as shown by this sentence.]}


       2.  /T               keep <T>ab characters

           This will keep tab characters in the ASCII file, rather than
           replacing them with spaces.  It differs slightly from
           WordPerfect's generic format, in that it does not use spaces to
           position text that is centered between the margins or flush to the
           right margin.


       Font Attribute Options

       These four pairs of switches, allow the start and end of certain font
       attributes to be marked in the ASCII file using special characters.
       They are usually used along with the generic-format options in order
       to move the ASCII file to another word processor and restore the
       original format.

       The naming of these switches is intended to be mnemonic, but they
       require some explanation.  The first switch of each pair, used for the
       "start attribute" code, should remind you of the function, while the
       switch for the "end attribute" code simply follows the first
       alphabetically.  Thus /B for bold is paired with /C, and /U for
       underline is paired with /V.  Subscripting and superscripting are less
       obvious, with /I and /J intended to remind you of things often used as
       subscripts, while /X and /Y might be used as superscripts (powers).

       1.  /B# and /C#                 <B>oldface

           There are several ways to use these and the other paired options.



                                                                               5



           To mark boldface text using the defaults of { (ASCII 123) at the
           beginning and } (ASCII 125) at the end, just specify /B by itself.

           To mark boldface text using other characters, perhaps because the
           default characters may occur in your document, specify either or
           both of the /B and /C switches with a decimal ASCII value (as
           indicated by the # symbol in the switch template above).  In the
           case of the /B switch, the ASCII character corresponding to the
           numeric value will be used to mark the start of boldface; the
           value given for the /C switch will be used to mark the end.

           The value must be decimal and cannot be zero.  Only a single ASCII
           value can be used for each switch; it is not possible to mark with
           a multi-character code, such as [B].  So, for example, /B17 would
           cause a Ctrl-Q to be used at the start of bold text, while /C35
           would put # symbols at the end of bold text.

           In some ways the use of ASCII values is inconvenient, but DOS puts
           restrictions on the use of many characters on the command line, so
           combinations like /B< /C> would not work.  The use of numbers
           gives maximum flexibility.

       2.  /I# and /J#                 subscripts

           The description of /B and /C above explains how the paired options
           work.  If you use /I without a number, the beginning of a
           subscript will be marked with ~ (ASCII 126) and the ending with |
           (ASCII 124).

       3.  /U# and /V#              <U>nderlining

           The description of /B and /C above explains how the paired options
           work.  If you use /U without a number, the beginning of
           underlining will be marked with < (ASCII 60) and the ending with >
           (ASCII 62).

       4.  /X# and /Y#               superscripts

           The description of /B and /C above explains how the paired options
           work.  If you use /X without a number, the beginning of a
           superscript will be marked with ^ (ASCII 94) and the ending with \
           (ASCII 92).


       Layout Options

       1.  /L#                      line <L>ength

           Documents that are formatted with small fonts or for wide pages
           may have a large number of characters per line when translated to
           ASCII.  Similarly, documents that are formatted in columns may
           have very short lines.  Such long or short lines may be



                                                                               6


           undesirable in the ASCII file, so TextOut/5 lets you change the
           line length.

           The /L# option tells TextOut/5 to ignore WordPerfect's line breaks
           (soft returns) and use a line length that you specify.  /L70, for
           example, would cause lines in the ASCII file to break just before
           column 70.

           Items that are tabbed beyond this column can cause formatting
           errors.  To avoid this, TextOut/5 ignores the WordPerfect display
           pitch when the /L# option is used, and instead sets its own pitch.
           If tabbed items still extend beyond the desired length, you can
           try reducing the pitch further yourself, with the /P# option.
           With some documents, of course, it is impossible to shorten the
           line length without ruining the formatting.

           The /L option overrides the /R option.

       2.  /P#                   tab-fill <P>itch

           Word Perfect 5 measures all tabs, indents, centering, etc. in
           absolute units, i.e. inches.  It also allows you to intermix
           different font sizes at will.  This can cause some inconsistencies
           in spacing when converting to ASCII files, where inches and font
           sizes are meaningless.

           For each document, WordPerfect calculates what it calls display
           pitch, which is the average width of a character in the smallest
           font in the document.  This is not really a pitch, since it
           denotes inches per character, and might typically have a value of
           .083".  Calculating the inverse of this gives a true pitch value,
           measured in characters per inch.  For example, 1/.083 gives a
           value of 12 pitch.

           TextOut/5 uses WordPerfect's display pitch to determine how many
           spaces to use when expanding tabs and other alignment codes.  This
           normally works quite well, but sometimes WordPerfect assigns an
           inappropriate display pitch to a document.  This would affect,
           among others, items that are tabbed, possibly putting them too
           close together or too far apart.

           To correct this type of error, which should rarely occur, you can
           specify a different pitch for the tab filling by using, for
           example, /P12 to indicate 12 pitch.


       Other Options

       1.  /D              <D>elimited merge file

           The /D option converts a secondary merge file to ASCII delimited
           format, consisting of quoted fields separated by commas, with
           carriage returns only at the ends of records.  Use this for



                                                                               7


           secondary merge files only; this option will convert a standard
           document into a single line of text.

       2.  /H                <H>eaderless WP file

           This option can recover the text from a damaged file that may not
           be usable with WordPerfect.  There are many different kinds of
           damage that may occur to a file, however, and the quality of the
           results from TextOut/5 may vary widely.

           BEFORE YOU USE THIS OPTION YOU MUST REMOVE THE HEADER FROM THE
           FILE.  If you don't, the program will still work, but probably
           won't recover any text .  To do this, you must have a byte-level
           editor, such as WordPerfect's Program Editor or the Norton
           Utilities, and you must know how to use it on binary files.  Using
           the editor, find the initial text of the document and delete
           everything that precedes it.  The WordPerfect header may contain
           recognizable text that precedes the beginning of the document, but
           you should delete this anyway; look specifically for the beginning
           of the body of the document.  Don't delete anything after the
           initial text of the document, even though much of it may look like
           junk.  Save the result under a new name.

           Run TextOut/5 using this new headerless file as input and
           specifying the /H option.  Use the generic-format options as well
           as the attribute-marking options, because they will produce a file
           that can be most easily restored to its original format.  Since
           the new file is ASCII, use the Retrieve command on the Text In/Out
           - DOS Text menu rather than the standard document Retrieve.

           If the first attempt is unsatisfactory, try editing the headerless
           file again, this time looking for large blocks of a single
           character.  Try deleting these and running TextOut/5 again.


       REGISTRATION AND DISTRIBUTION

       TextOut/5 is Copyright 1988-90, CrossCourt Systems.

       If you try TextOut/5 and find it to be a useful and valuable product,
       please complete your purchase of it by sending payment to CrossCourt
       Systems at the address below.  For $20 you will receive a printed
       manual, sized to fit the WordPerfect binder, and the current version
       of the program, without the on-screen payment reminder.

       You will also receive a free IntroPak for the CompuServe Information
       Service, the premiere interactive electronic communication service.
       CompuServe provides news, financial information, entertainment
       services, personal computing services, special interest forums, and
       more.  The IntroPak includes $15 of free on-line time.

       VISA and MasterCard are accepted.  Volume discounts, site licenses,
       and Microsoft C source code for TextOut/5 are also available.



                                                                               8



       In the spirit of shareware, we believe that the value of a program is
       best determined by you, based on the number of copies you are using,
       the frequency of use, and the amount of time it saves you.  Our
       business policy is to accept payments both above and below the stated
       $20 price.

       TextOut/5 may be distributed to others, as long as 1) the program is
       not altered in any way, 2) this documentation file is always included,
       and 3) no charge is made for such distribution beyond a modest disk
       preparation fee.  For bulletin board distribution, please use the file
       name TEXTOUT5.ZIP or TXTOUT.ZIP

       TextOut/5 has been tested and performs its functions essentially as
       described above, without causing any damage to the computer in use or
       any of its files.  However, all users are responsible for backing up
       their own files, and CrossCourt Systems assumes no responsibility for
       any damage or losses incurred as a result of its use.

       CrossCourt Systems supports TextOut/5, by providing technical
       assistance, bug fixes, and enhancements.  CrossCourt Systems can be
       reached on CompuServe at 72446,2704, or at the address and phone
       below.  If you encounter problems with any conversion, or have
       suggestions for improvements, please let us know about them.

       CrossCourt Systems
       1521 Greenview Ave.
       East Lansing, MI 48823
       (517) 332-4353

       CrossCourt Systems is a member of the Association of Shareware
       Professionals (ASP), a group dedicated to high standards in the
       design, documentation, and support of shareware products.  ASP wants
       to make sure that the shareware principle works for you.  If you are
       unable to resolve a shareware-related problem with an ASP member, the
       ASP Ombudsman may be able to help.  Please write to the ASP Ombudsman
       at P.O. Box 5786, Bellevue, WA 98006 or send a CompuServe EasyPlex
       message to ASP Ombudsman 70007,3536.



                                                                               9


       Other products from CrossCourt Systems

       ConvDW - converts IBM DisplayWrite 3 or 4 files to ASCII, offering
       many of the same options as TextOut/5, including the generic-format
       option that DW lacks.  IBM does not publish the file format for
       DisplayWrite, so ConvDW is one of only a handful of programs, either
       shareware or commercial, that can read DisplayWrite files.  Usually
       found as CONVDW.ZIP on bulletin boards.  Available for $20 direct
       (includes printed manual).

       DisplayWrite Conversion Package - includes a report describing the
       format of DisplayWrite files, as well as Microsoft C source code for
       ConvDW, DWtoRFT, and DumpDW.  Call for information.

       DWtoRFT - converts DisplayWrite files to DCA/RFT using wildcard
       filenames.  Great for large conversions from DisplayWrite to other
       formats.  Available for $50 direct.

       ConvDCA - converts IBM DCA/RFT format files to ASCII, offering many of
       the same options as TextOut/5.  Usually found as CNVDCA.ZIP or
       CONVDCA.ZIP on bulletin boards.  Available for $20 direct.

       TextCon - a program to reformat ASCII files before importing them to
       your word processor.  TextCon performs extremely intelligent
       "cleaning" operations on your ASCII files, so you have less editing to
       do after importing them.  It removes unneeded hard carriage returns
       (even with tricky paragraph formats), strips excess spaces used for
       margins or justification, and does other processing to get the
       cleanest conversion possible.  Can also perform other unusual
       formatting tasks such as splitting long lines in generic-format files.
       Usually found as TEXTCN.ARC or TEXTCON.ARC on bulletin boards.
       Available for $25 direct (includes printed manual).

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2346

     Volume in drive A has no label
     Directory of A:\

    TEXTCON  ZIP     41706   1-21-90  11:49a
    TEXTOUT5 ZIP     26862   1-17-90   6:06p
    CONVDW   ZIP     19941   1-21-90  12:10p
    GO       TXT      1385  10-05-90   1:41a
    GO       BAT        40   1-01-80   6:00a
    FILE2346 TXT      3997  10-05-90   9:12a
            6 file(s)      93931 bytes
                           65024 bytes free
