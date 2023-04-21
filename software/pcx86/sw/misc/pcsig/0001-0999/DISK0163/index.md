---
layout: page
title: "PC-SIG Diskette Library (Disk #163)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0163/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0163"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILTERS"

    DBSCREEN is a filter package that lets you create dBase II, III,
    and III+ screens. Instead of entering row and number designations into
    a format file, simply "paint" your fields on your display in a
    full-screen edit mode. See exactly what your screen is going to look
    like.  DBSCREEN also lets you modify and print dBase II, III, and III+ s
    formats. Other programs let you modify character strings, change tabs
    into spaces, and encrypt/decrypt your files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #163, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CRYPT   .C           CRC = C2 85

--> FILE:  CRYPT   .DOC         CRC = 0F 03

--> FILE:  CRYPT   .EXE         CRC = 2F D5

--> FILE:  DETAB   .C           CRC = 4B 8F

--> FILE:  DETAB   .DOC         CRC = 15 BF

--> FILE:  DETAB   .EXE         CRC = C2 E1

--> FILE:  ERR     .C           CRC = EE 9E

--> FILE:  ERRS    .C           CRC = DB D3

--> FILE:  ESCT    .C           CRC = 1F D7

--> FILE:  FILP    .C           CRC = 29 A5

--> FILE:  FILPS   .C           CRC = C9 5E

--> FILE:  INDE    .C           CRC = E9 86

--> FILE:  INDEX   .C           CRC = 39 93

--> FILE:  LOCAL   .H           CRC = 95 63

--> FILE:  SETS    .C           CRC = 2A 6D

--> FILE:  SPSCN   .C           CRC = DC E8

--> FILE:  SPSCN   .DOC         CRC = 5B 26

--> FILE:  SPSCN   .EXE         CRC = 0E 40

--> FILE:  TRANSLIT.C           CRC = AB DD

--> FILE:  TRANSLIT.DOC         CRC = D0 AB

--> FILE:  TRANSLIT.EXE         CRC = EA EC

--> FILE:  VERSION .C           CRC = 99 B7

--> FILE:  WC      .C           CRC = AB E5

--> FILE:  WC      .DOC         CRC = 04 D3

--> FILE:  WC      .EXE         CRC = 05 BF

--> FILE:  XXX     .            CRC = 65 C8

--> FILE:  DBS     .PRT         CRC = 50 DB

--> FILE:  DBS     .EXE         CRC = 62 DF

 ---------------------> SUM OF CRCS = FD 32

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CRYPT.DOC

{% raw %}
```

     CRYPT (Encryption / Decryption Filter)
     Command
    
     --------------------------------------------------
     Purpose:  This program will encode the text, read 
               from the standard input, and write it to
               the standard output device.


     Format:   CRYPT key


     Type:     Internal  External
                           ***
     
     Remarks:  To decode an encrypted message, pass the
               message through this filter again with 
               the same key as was used for encryption.
             
             
     Example:  A>CRYPT yohoho <crypt.doc >crypt.cod

               Will produce a file containing the text
               of this file, encoded so that it is illegible.

               A>CRYPT yohoho <crypt.cod
               
               Will then reproduce the text of this document,
               and display it on the screen.


     Note:     1.   The encryption method here is based on
                    the XOR function, and while secure enough
                    to keep someone from freely reading
                    encoded files, it will probably not stop
                    a determined effort to decode the files.
                     
               2.   Care should be taken to remember the key
                    since there is no way of reconstructing it
                    short of decrypting the file.


               Written by Michael Hanson

```
{% endraw %}

## DETAB.DOC

{% raw %}
```

     DETAB Filter
     Command
    
     --------------------------------------------------
     Purpose:  This filter reads text from the standard
     		   input device, replaces all tab characters
     		   with the corresponding number of spaces
     		   and then writes it to the standard output
     		   device.
             
     
     Format:   DETAB [n1 n2 n3 ... nx][/n]

     
     Type:     Internal  External
                           ***
     
     Remarks:  The default expansion is tab stops every
     		   four characters, this may be overridden
     		   in two ways using the optional parameters.

               The n1 n2 ... nx parameters are a list of x
               integers separated by spaces, that specify
               the columns for the first x tab stops.
               
               The /n parameter is an integer indicating
               that tabs are to be set every n columns after
               the current one.

             
	 Example:  A>DETAB <detab.doc
	 		   
	 		   Will output this document to the screen, with
	 		   each tab expanded to four characters. (It will
	 		   look diferent than if the file is TYPE'd since
	 		   type expands tabs to eight characters).
             
               A>DETAB 2 4 6 /3 <fname.ext >fname.lst
                
               Will expand the first three tabs on a line 
               to two spaces and the rest to three spaces
               placing the file with expanded tabs in the
               .lst file.


     Notes:    1.   The two methods of specifying tabs can
     				be used independently, or together as in
     				the second example, but the /n parameter
     				must follow any list of numbers (if only
     				a list of numbers is specified, the tabs
     				after the lists end will be every four 
     				columns).

     		   2.	There are an almost unlimited number of 
     		   		tab stops posible, but any tabs occuring 
     		   		beyond the 100'th column will be expanded
     		   		to a single space.

     		   3.	Tab stops may be specified at every column
     		   		if desired, but each tab character will be
     		   		expanded into at least one space.


              Written by Michael Hanson

```
{% endraw %}

## FILES163.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 163    Dscreen and Text Filters                           v1.1 DS2
---------------------------------------------------------------------------
CRYPT    C     Source code for CRYPT.EXE
CRYPT    DOC   CRYPT.EXE documentation
CRYPT    EXE   Encryption/decryption filter.  Uses a key to encode files.
READ     ME    Documentation for DBS.EXE
DBS      EXE   Screen generator for dBASEII
DETAB    C     Source code for DETAB.EXE
DETAB    DOC   Documentation for DETAB.EXE
DETAB    EXE   Replaces tabs with appropriate number of spaces
ERR      C     Source for subroutine used here
ERRS     C      "
ESCT     C      "
FILP     C      "
FILPS    C      "
INDE     C      "
INDEX    C      "
LOCAL    H      "
SETS     C      "
SPSCN    C     Source code for SPSCN.EXE
SPSCN    DOC   Documentation for SPSCN.EXE
SPSCN    EXE   Removes spaces at the ends of lines in a text file
TRANSLIT C     Source code for TRANSLIT.EXE
TRANSLIT DOC   Documentation for TRANSLIT.EXE
TRANSLIT EXE   Translates a character string into a different string
VERSION  C     Source for subroutine used here
WC       C     Source code for WC.EXE
WC       DOC   Documentation for WC.EXE
WC       EXE   Counts characters, words and lines in a text file
```
{% endraw %}

## SPSCN.DOC

{% raw %}
```

     SPSCN (Space Scan)
     Command
    
     --------------------------------------------------
     Purpose:  This filter reads text from the standard
               input and removes any blanks at the end 
               of each line, it then writes the text to
               the standard output.
     

     Format:   SPSCN
     
     Type:     Internal  External
                           ***
     
     Example:  SPSCN <texfile.doc >outfil.doc

               Will remove any extra blanks at the ends
               of the lines in texfile.doc and place the
               result in outfil.doc. Or,

               DEBUG fnam.com | SPSCN >fnam.lst
               ( then press u and q)

               where fnam.com is some executable file 
               that you wish to disassemble (see note
               below).

     
     Note:     SPSCN is particularly useful for cleaning
               up files produced by capturing the output
               of another program, such as debug, which
               adds several spaces to the end of a line
               of disassembled code.

     
              Written by Michael Hanson

```
{% endraw %}

## TRANSLIT.DOC

{% raw %}
```

     TRANSLIT (Character Translation Filter)
     Command
    
     --------------------------------------------------
     Purpose:  This is a filter that reads a file from 
               the standard input device, translates 
               specified characters into others, and
               writes the translated text to the 
               standard output device.


     Format:   TRANSLIT from to


     Type:     Internal  External
                           ***

     Remarks:   The parameters 'from' and 'to' are strings 
                of characters, a given character in 'from'
                will be translated into the corresponding
                character in the to string.
                 
                To specify a range of characters
                to be converted you may type char-char 
                (see examples and note below).
                 
                To specify non-printing characters such
                as <cr>,<lf> or <tab> one may use the
                following escape sequences (the leading
                \ tells translit that the following is 
                to be interpreted as a special character).

                    \f  form feed
                    \b  back space
                    \n  line-feed
                    \t  tab
                    \s  space
                    \\  back slash character itself
                    \!  exclamation mark
                    \r  carriage return     
                    \0  ASCII null 
                
                To specify that all characters not in 
                the given set of from characters are to
                be translated to a given character,
                precede the list of characters with an
                exclamation mark (!)( see example below).
 
             
     Examples:  A>TRANSLIT a-z A-Z <translit.doc

                Will display this file, with all the
                lower case letters in it converted to 
                upper case.Or,
                 
                A>TRANSLIT \s\t\n \n <translit.doc 
                    >transl.wrd
                 
                will produce a list of all the words in
                this file, listed one per line, in the
                file transl.wrd. 
                 
                A>TRANSLIT !\n\r\sA-Za-z0-9 \s <translit.
                    doc >transl.npu
                 
                Will make the file transl.npu containing
                this document with all the punctuation
                marks removed.
     
     Note:      1.  When specifying ranges of characters
                    both characters must be upper-case 
                    letters, lower-case letters or
                    digits. The first character must also
                    be the predecessor of the second, in
                    lexical order. Thus a-s, 2-5 or W-Y are 
                    legal, but A-z , 9-1 and x-e are not 
                    legal.
                     
                2.  If the to string is shoreter than
                    the from string, then the excess
                    characters in from will all be translated
                    to the last character of to.
                    

               Written by Michael Hanson

```
{% endraw %}

## WC.DOC

{% raw %}
```

     WC (Word Count)
     Command
    
     --------------------------------------------------
     Purpose:  This filter reads text from the standard
               input device, counting the number of 
               characters, words and lines and writes 
               the totals to the standard output device.
     
     Format:   WC [-[L][W][C]]
     
     Type:     Internal  External
                          ***
     
     Remarks:  The -L parameter specifies that the line
               count should be printed.
             
               The -W parameter specifies that the word
               count should be printed.
                  
               The -C parameter specifies that the
               character count should be printed.
            
               Specifying no parameter has the same 
               effect as specifying all of the
               parameters. i.e. WC -lwc
      
     Examples: A>WC <wc.doc -wc
               
               Will output the number of words and
               characters in this file.Or,
                
               A>DIR C: | WC -l
                
               Will output the number of files on drive 
               C: plus 7.

     
     Notes:    1.  When counting characters, WC ignores
                   the CR (carriage return) and the LF
                   (line feed) characters, so the count
                   may not agree with the file size in
                   the directory.

               2.  WC regards a word as any string of
                   characters separated from the rest
                   of the text by an end of line, space
                   or tab character.
             
     
              Written by Michael Hanson

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0163

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1875  11-14-84   2:42p
    CRCK4    COM      1536  10-21-82   7:54p
    CRYPT    C         640   8-22-83  12:40a
    CRYPT    DOC      1536   8-23-83   1:28a
    CRYPT    EXE      5632   8-22-83  12:40a
    DBS      EXE     39936   7-13-86   2:39p
    DETAB    C        2176   8-22-83   2:03a
    DETAB    DOC      2304   8-22-83  12:10a
    DETAB    EXE      6656   9-15-83  12:48a
    ERR      C         256   8-22-83   1:58a
    ERRS     C         256   8-22-83  12:35a
    ESCT     C         512   8-22-83   2:00a
    FILES163 TXT      1334   1-04-80  12:16a
    FILP     C         768   8-22-83   2:01a
    FILPS    C         512   8-22-83   1:59a
    INDE     C         640   6-13-83  12:35a
    INDEX    C         384   8-22-83   2:01a
    LOCAL    H         384   8-22-83   1:48a
    READ     ME       1024   7-13-86   2:43p
    SETS     C        1664   6-13-83  12:35a
    SPSCN    C        1280   8-22-83   2:06a
    SPSCN    DOC      1280   8-22-83  12:06a
    SPSCN    EXE      6144   9-15-83  12:44a
    TRANSLIT C        1536   8-22-83   2:05a
    TRANSLIT DOC      3456   8-22-83  12:19a
    TRANSLIT EXE      7168   9-15-83  12:33a
    VERSION  C         384   8-22-83   1:57a
    WC       C        1664   8-22-83   2:03a
    WC       DOC      1920   8-22-83  12:08a
    WC       EXE     10240   8-22-83  12:05a
           30 file(s)     105097 bytes
                           50688 bytes free
