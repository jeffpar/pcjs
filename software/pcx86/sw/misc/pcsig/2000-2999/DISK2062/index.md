---
layout: page
title: "PC-SIG Diskette Library (Disk #2062)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2062/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2062"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IMAGEPRINT  DISK 2 OF 2(517 ALSO)"

    IMAGEPRINT lets you produce high-quality characters on a dot matrix
    printer. IMAGEPRINT produces the IBM Graphics Printer's character set,
    which matches the IBM-PC's character set, in letter quality. Text input
    to IMAGEPRINT can come either directly from the keyboard (typewriter
    mode) or from a disk file. The text input can contain embedded
    backslash (``\'') commands, which select bold, underlining, double
    width, italics, superscript, subscript, half high, ten or twelve
    characters per inch, compressed, proportional spacing, etc. Text can be
    formatted (left and right micro-justification, hard and soft hyphens,
    margins, headers and footers, etc.) with IMAGEPRINT's built-in
    formatting capabilities.
    
    File Descriptions:
    
    CONTROL  DAT  Utility data.
    CONTROL  EXE  Utility file.
    DEMODATA      Data file for FONTDEMO.EXE.
    ENHANCE  EXE  Utility file.
    FONT1         Cubic font (the default font).
    FONTDEMO EXE  Program used for a demonstration of other fonts.
    IP       EXE  Main program.
    IPV3     DOC  Documentation.
    ORDER    FRM  Order form
    README        Introduction, directions.
    REM-CTRL EXE  Removes CONTROL.EXE from memory.
    SAMPLE   DAT  Example text substitutions.
    TUTOR_1  TXT  Simple IMAGEPRINT demonstration.
    TUTOR_2  TXT  Detailed IMAGEPRINT demonstration.
    UTILS    DOC  Documentation for CONTROL and ENHANCE.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2062.TXT

{% raw %}
```
Disk No: 2062                                                           
Disk Title: ImagePrint  disk 2 of 2(517 also)                           
PC-SIG Version: S3                                                      
                                                                        
Program Title: ImagePrint Printer Utility                               
Author Version: 3.3                                                     
Author Registration: $42.95                                             
Special Requirements: IBM/Epson/compatible dot matrix printer.          
                                                                        
IMAGEPRINT lets you produce high-quality characters on a dot matrix     
printer. IMAGEPRINT produces the IBM Graphics Printer's character set,  
which matches the IBM-PC's character set, in letter quality. Text input 
to IMAGEPRINT can come either directly from the keyboard (typewriter    
mode) or from a disk file. The text input can contain embedded          
backslash (``\'') commands, which select bold, underlining, double      
width, italics, superscript, subscript, half high, ten or twelve        
characters per inch, compressed, proportional spacing, etc. Text can be 
formatted (left and right micro-justification, hard and soft hyphens,   
margins, headers and footers, etc.) with IMAGEPRINT's built-in          
formatting capabilities.                                                
                                                                        
                                                                        
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
║        <<<<  Disk No 2062 IMAGEPRINT (disk 2 of 2, also 517  >>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: COPY UTILS.DOC PRN (press enter)      ║
║                                                                         ║
║ To run the program, insert disk 1, type: IP (press enter)               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## UTILS.DOC

{% raw %}
```












                           "CONTROL"  and  "ENHANCE"


                          for IBM Personal Computers

                                      and

                   IBM/Epson/Compatible Dot Matrix Printers



























                   (C)Copyright IMAGE Computer Systems 1989

                              All Rights Reserved




















      TABLE OF CONTENTS

        CONTROL

          What is CONTROL? .............................. 1

          Files included with CONTROL ................... 1

          Loading CONTROL ............................... 1

          Configuring CONTROL ........................... 2

          CONTROL Error Messages ........................ 4

        ENHANCE

          What is ENHANCE? .............................. 5

          Loading ENHANCE ............................... 6

          ENHANCE Error Messages ........................ 7









































                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      WHAT IS CONTROL?

        CONTROL is a memory-resident program that allows you to easily 
        access the features of your printer. Simple commands, embedded 
        in your printed text, are converted into printer control 
        codes. You can also define text substitutions that allow you 
        to "boiler-plate" letters, forms, etc. 

        Configuration files allow you to specify what effect each 
        embedded command has. 

        CONTROL can be removed from memory without rebooting your 
        computer. 


      FILES INCLUDED WITH CONTROL

        The files are:

          CONTROL.EXE     The main memory-resident program.

          REM-CTRL.EXE    Removes CONTROL from memory.

          CONTROL.DAT     Sample data file for Epson or IBM printers. 
                          It contains substitution definitions that
                          select bold, double width, etc.

          SAMPLE.DAT      Sample data file for text. It contains 
                          example text substitutions.

        Both of the .DAT files are plain "ASCII" files. They contain 
        comments to help you understand their contents. 


      LOADING CONTROL

        The syntax for loading CONTROL is:

          CONTROL  [-Tx]  [configuration_file]  [printer]

        All bracketed items following CONTROL are optional.

        The "-Tx" option allows you to select an alternate trigger 
        character for the embedded commands contained in the text that 
        you are sending to your printer. The character following the 
        "T" (here shown as an "x") becomes the new trigger character. 
        The default trigger character is a backslash ("\"). A typical 
        example of an embedded command would be: 

          \BThis would print as bold, \Cand this wouldn't.



                                                                  1








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        In the above example, "\B" turns on the bold feature of your 
        printer, and "\C" turns it off. (The "\B" and "\C" commands 
        could mean something entirely different; they are used here 
        only for the purpose of showing commands embedded within 
        text.)

        The trigger character is always immediately followed by a 
        character that identifies which substitution string is to 
        replace the embedded command. Upper and lower case are 
        equivalent for the second character. For example, "\b" and 
        "\B" are the same. 

        The "configuration_file" option allows you to select an 
        alternate configuration file. The default configuration file 
        is CONTROL.DAT. To load SAMPLE.DAT instead, type:

          CONTROL SAMPLE.DAT
        
        The "printer" option allows you to use CONTROL with a printer 
        connected to a printer port other than the default LPT1: 
        (PRN:). "Printer" can be LPT1:, LPT2: or LPT3:. For example, 
        to control the printer connected to LPT2:, type:
           
          CONTROL LPT2:

        To remove CONTROL from memory, run REM-CTRL from the DOS
        prompt.


      CONFIGURING CONTROL

        The CONTROL configuration file determines what strings are 
        substituted for the embedded commands contained in your text. 
        
        The default CONTROL.DAT file contains the following 
        substitution definitions for an Epson or IBM printer: 
        
          \B    :       turns on (B)old printing
          \C    :       (C)ancels bold, underline, double width
          \E    :       turns on (E)ight lines per inch printing
          \N    :       turns off superscript and subscript
          \S    :       turns on (S)ix lines per inch printing
          \U    :       turns on (U)nderlining
          \V    :       turns on subscript ("arrow" points down)
          \W    :       turns on double (W)idth
          \^    :       turns on superscript ("arrow" points up)
          \<    :       turns on compressed mode
          \>    :       turns on 10 characters per inch mode

        Configuration files must be in "ASCII" format. The file must 
        contain only printable characters ("A...Z, 0...9"), with no 


                                                                  2








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        word processor or printer control codes. Most word processors 
        have a facility for editing and saving ASCII files. 

        You may find the following explanation of the contents of a 
        configuration file easier to understand if you first copy 
        CONTROL.DAT to your printer with the following command:

          COPY CONTROL.DAT PRN:

        The substitution definitions contained in the configuration 
        file consist of a header character, followed by a colon, 
        followed by the substitution string. For example, to define 
        the string that will be substituted for "\B": 

          B: {ESC} "E"

        In the above example, each occurence of "\B" in your text will 
        be replaced by the ESCAPE character, immediately followed by 
        an upper case E. This is the IBM or Epson command for bold 
        printing.

        Comments in a definition file are enclosed by parentheses "(" 
        and ")".

        Special control character representations recognized are:

          {ESC}   This is the escape character (decimal 27, hex 1B)
          {LF}    This is a line feed character
          {CR}    This is a carriage return
          {NL}    This is a newline (line feed, plus carriage return)
          {TAB}   This is a tab character
          {FF}    This is a form feed character

        Not all string substitutions have to be printer control commands. 
        You can define ordinary text substitutions. For example:

          A: "This is what will print if '\A' is sent to the printer"

        The parsing of the configuration file uses the following 
        rules:

          comment ::= (anything enclosed in parentheses)
          substitution definition ::= header & body
          header ::= alpha & :
          alpha ::= ASCII characters greater than 32 (hex 20)
          body ::= (string | number | control character) & separator
          string ::= "anything enclosed in double quotes"
          number ::= integer <= 255
          control character ::= {ESC} | {LF} | {CR} | {NL} | {TAB} | {FF}
          separator ::= SPACE | COMMA | TAB | LF | CR | FORMFEED



                                                                  3








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      CONTROL ERROR MESSAGES

        "ERROR - DOS version 2.0 or higher needed"

          CONTROL doesn't run under DOS versions earlier than 2.0.

        "ERROR - Printer specification bad"

          You have specified an invalid printer port. The default is
          LPT1: (PRN:). You can specify LPT2: or LPT3:.

        "ERROR - Configuration file not found: ????????"

          CONTROL defaults to reading CONTROL.DAT. You can specify
          another file on the command line when loading CONTROL. In any
          case, CONTROL is unable to find the configuration file.

          The question marks represent the configuration file name you
          tried to load.

        "DOS ERROR while reading configuration file: ????????"

          This error is being reported by DOS. Perhaps the file has
          been corrupted.

        "ERROR in configuration file: ????????
         Non-printable character on line xx"

          The configuration file must contain only ASCII text (A...Z,
          0...9, etc.). A character with an ASCII value below 32 has
          been found in the file.

        "ERROR - '{' must precede control code on line xx
         For example: '{tab}' or '{esc}'"

          CONTROL recognizes several common printer control code
          representations. {lf} represents line feed, {cr}  
          represents carriage return, etc. You must use brackets
          ("{}") around each control code.

        "ERROR - Colon must follow control character in configuration 
        file"

          Each substitution definition in the configuration file must
          start with a header character, followed by a colon (":").

        "ERROR on line xx of configuration file: ????????. Number out 
        of range"

          Numbers, which represent ASCII values, cannot exceed 255,
          the upper limit of ASCII characters.


                                                                  4








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        "ERROR - Unbalanced comment bracketing in configuration file"

          A configuration file can contain comments, which are 
          enclosed with parentheses "()". Each start of a comment
          must be matched by an end. For example:

            (this is a properly bracketed comment)   (and so is this)

            ((this isn't; there are 2 left parens and only 1 right)

        "ERROR - Too many definitions in configuration file"

          You are limited to 70 definitions in a configuration file.

        "ERROR - Configuration buffer overflow"

          Your definitions have exceeded the allowable number of total
          characters. The maximum for all definitions combined is 
          approximately 2000 characters. 

        "ERROR - Memory-resident program not found"

          This is an error message from REM-CTRL. Either CONTROL isn't 
          in memory, or you have loaded another memory-resident program
          on top of CONTROL A third possibility is that an ill-behaved 
          program is resident in memory. 


      WHAT IS ENHANCE?

        ENHANCE is a memory-resident program that improves the 
        graphics output of standard Epson or IBM dot matrix printers. 
        This improvement comes from printing each graphics pass twice, 
        possibly shifting the second graphics pass to the right one 
        dot position.

        ENHANCE can also map high density graphics to lower density 
        graphics supported by earlier printers. 

        ENHANCE can't make a poorly scaled or crudely drawn graphic 
        attractive. By the time ENHANCE receives the graphics output, 
        the shape of the picture has already been determined. ENHANCE 
        receives the graphics picture in thin horizontal strips of dot 
        patterns, and there is no way to know how or what would 
        improve a particular picture. 

        ENHANCE is compatible with IBM or Epson printers that support 
        the following graphics commands: 





                                                                  5








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


          ESC "K"   single density graphics    
          ESC "L"   low-speed double density graphics
          ESC "Y"   high-speed double density graphics
          ESC "Z"   quadruple-density graphics

        Almost all PC printers sold since 1986 are compatible.


      LOADING ENHANCE

        The syntax for loading ENHANCE is:

          ENHANCE  [dash options]  [printer]

        All bracketed items following ENHANCE are optional.

        The dash options are:

          -R    Remove ENHANCE from memory. 

          -T    Print graphics twice. Each sweep of the print head
                will be doubled for darker, clearer graphics. This is
                the default if no dash options are used.

          -TS   Print graphics twice, shifting the second
                pass one dot position to the right. This results
                in graphics that are darker and slightly bolder.

          -L    Convert ESC "Z" quadruple density graphics to
                ESC "L" double density graphics. This option
                allows graphics to print on >some< early
                printers that only recognize double density graphics.

        Examples:

          ENHANCE -T LPT2:      {print graphics twice on printer
                                 attached to the 2nd printer port}

          ENHANCE -R            {remove ENHANCE from memory}

        ENHANCE should be loaded into memory before any other memory-
        resident software that generates graphics output. For example, 
        if you intend to do graphics screen dumps, you should first 
        load ENHANCE, and then load the DOS GRAPHICS program.









                                                                  6








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      ENHANCE ERROR MESSAGES

        "ERROR - Printer must be in range 1...3"

          You have specified an invalid printer port. The default is
          LPT1: (PRN:). You can specify LPT2: or LPT3:.

        "ERROR - DOS version 2.0 or higher needed"

          ENHANCE doesn't run under DOS versions earlier than 2.0.

        "ERROR - '-R' is invalid;
         ENHANCE not resident (or not found)"

          The "-R" command line option removes ENHANCE from memory. 
          ENHANCE isn't already in memory, or another memory-resident
          printer-controlling program has been loaded after ENHANCE. A
          third possibility is that an ill-behaved memory-resident
          program has broken the "link" to ENHANCE.

        "ERROR - '-x' not a valid command; ignored"

          The 'x' represents a dash option that ENHANCE doesn't
          recognize.





























                                                                  7









```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2062

     Volume in drive A has no label
     Directory of A:\

    FONT16           20446  11-30-89   4:00p
    FONT17           17014  11-30-89   4:00p
    FONT18           16756  11-30-89   4:00p
    FONT19           22255  11-30-89   4:00p
    FONT20           31525  11-30-89   4:00p
    FONT21           31678  11-30-89   4:00p
    FONT22           43855  11-30-89   4:00p
    FONT23           41227  11-30-89   4:00p
    FONT24           41470  11-30-89   4:00p
    UTILS    DOC     15770  11-30-89   4:00p
    CONTROL  EXE      5467  11-30-89   4:00p
    REM-CTRL EXE       936  11-30-89   4:00p
    CONTROL  DAT      1035  11-30-89   4:00p
    SAMPLE   DAT       603  11-30-89   4:00p
    ENHANCE  EXE      5357  11-30-89   4:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   2-20-90  12:08p
    FILE2062 TXT      1999   2-20-90  12:09p
           18 file(s)     297971 bytes
                           16384 bytes free
