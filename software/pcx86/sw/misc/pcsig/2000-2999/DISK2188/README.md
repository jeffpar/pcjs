---
layout: page
title: "PC-SIG Diskette Library (Disk #2188)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2188/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2188"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PERSONNAL C SCREEN"

    The key to professional-looking programs is the screen design.
    However, producing such screens is often a tedious and time-consuming
    task.  With PERSONAL C-SCREEN the implementation of a professional
    screen layout into your C program becomes a simple task.  It has the
    following functions; interactive format generation, windows, menus,
    pop ups, pull downs, variable field and text attributes, alphanumeric
    and numeric selectable fields, mouse and printer support, and
    monochrome and color display support.
    
    PERSONAL C-SCREEN includes a set of screen management modules to
    generate the screen formats.  These interface modules let you use
    PERSONAL C-SCREEN with major C compilers such as Microsoft C,
    Microsoft Quick C, Turbo C, and Lattice C.
    
    PERSONAL C-SCREEN is invaluable to anyone wanting to improve the
    appearance of their C programs, and even comes with a demo program to
    illustrate its ease of use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2188.TXT

{% raw %}
```
Disk No: 2188                                                           
Disk Title: Personnal C Screen                                          
PC-SIG Version: 1                                                       
                                                                        
Program Title: Personal C - Sreen                                       
Author Version: 1.0                                                     
Author Registration: $17.00                                             
Special Requirements: C Compiler.                                       
                                                                        
The key to professional looking programs is the screen formats.  How-   
ever, producing such screens is often a tedious and time consuming      
task.  With PERSONAL C-SCREEN the implementation of a professional      
screen layout into your C program becomes a simple task.  PERSONAL      
C-SCREEN provides you with the following functions; interactive format  
generation, windows, menus, popups, pulldowns, variable field and text  
attributes, alphanumeric and numeric selectable fields, mouse and       
printer support, and monochrome and color display support.              
                                                                        
PERSONAL C-SCREEN includes a set of screen management modules to        
generate the screen formats.  These interface modules allow PERSONAL    
C-SCREEN to be used with the major C compilers, such as, Microsoft C,   
Microsoft Quick C, Turbo C, and Lattice C.                              
                                                                        
PERSONAL C-SCREEN is invaluable to anyone wanting to improve the        
appearance of their C programs, and even comes with a DEMO program to   
illustrate its ease of use.                                             
                                                                        
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
║               <<<<  Disk No 2188 PERSONAL C - SCREEN  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: COPY HELP.TXT PRN (press enter)       ║
║                                                                         ║
║ To start the program, type: UNIFORM  (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.TXT

{% raw %}
```
****************************************************************
*                                                              *
*                   Personal C - Screen                        *
*                                                              *
****************************************************************



                        Release    1.0


                  (C) 1989 J. Ebnet Software


      D - 8000 Munich, Passauer Straße 2, Tel. 089/7604179
      (Western Germany) 
 





1. Shareware
------------

This package contains release 1.0 of the utility Personal C - Screen. 
All Rights are reserved.

This software is being distributed as shareware. The release you
have is free to use and to copy. 

Disclaimer of warranty.

This software is provided without any express or implied war-
ranties whatsoover. Because of the diversity of contitions and
hardware under which this software may be used, no warranty 
for a particular purpose is offered. You are advised to test 
this software utility thoroughly before relying on it. The user
must assume the entire risk of using this software.

If you agree with the software tool Personal C - Screen you should 
become a registered user for a charges of $ 17. If you do it you will 
get the following performances

  - the right to use Personal C - Screen

  - an actual release of Personal C - Screen  with the following
    extension

    . formats without copyright note in line 24      
    . application examples in a source code format and in a file
      format

  - user support

  - update service for the following releases for a charges of
    only $ 9.

  - an extensive user manual

Just when there are fair users it will be possible to do a further
development of Personal C - Screen.

You have the chance to test the software tool Personal C - Screen. 
If you will use it in future you are expected to become an registered 
user.

A registration form you can find in the file REGIST.FOR. You can 
get it by the DOS command PRINT.

The release you have isn't a cripple ware. You can use the complete
functions of Personal C - Screen. The documentation HELP.TXT (this file) 
is only a short extract of the user guide you get when you will be 
registered.

In the sahreware release you have, there is a copyright note at
line 24 in all screen formats.



2. UNIFORM Format generator
---------------------------
         
To generate the screen formats there is the universal format generation 
tool UNIFORM on your disc.

UniForm is a complete solution for screen management. It consists of the
format generation tool and interface modules for the following compilers
and interpreters.

 Microsoft C, Microsoft Quick C, Turbo C, Lattice C
 Microsoft Basic, Microsoft Quick Basic, GW Basic, Basic86
 IBM Basic, Basica, Turbo Basic
 Microsoft Pascal, Turbo Pascal
 Microsoft Cobol, Personal Cobol, Professional Cobol, Level II Cobol
 Microsoft Macro Assembler, Turbo Assembler
 Turbo Prolog, Microsoft Fortran, Clipper, dBASE III Plus

You can get UniForm for a charge of $ 49.

3. Introduction
---------------

Its all the same. A comfortable user surface is absolutely
necessary today. User programs as well as system programs needs as
well with a monochrome display as a color monitor a good layout to
get a professional image.

But - to program windows, menus and so on is relatively difficult
and takes a lot of time. Moreover such routines schould be
implemented in a quick assembler coding. Indeed - a lot of reasons
to integrate the screen layout into the program by a conform help.

With Personal C - Screen the implemantation of a professional screen 
layout into your PCC-programs will take at best a moment of time.

Look to the following highlights:

   - interactive format generation               
   - windows, menus, popups, pulldowns ...      
   - alphanumeric numeric and selectable fields        
   - variable field and text attributes   
   - format application with one subroutine call    
   - mouse and printer support
   - monochrome and color display           
   - format managemant options               

You can find a short demonstration on your disc. Please start it
with DEMO (The format files on the disc (*.BLD) have to be in the
same directory).



4. How to use Personal C - Screen
---------------------------------

You create the format(s) with UNIFORM.EXE in an interactive mode
and define

  - the format name 
  - the format size
  - the compiler (Personal C)          
  - the directory for format files
  - the format layout with (without) variable fields
  - the field names and attributes for fields, text and frame

You include into the source code                             

  - the standard include file 
  - the variables definition file(s)
  - the subroutine call with parameters.
  
You compile the source code.
  
You link the program with the Personal C interface module.

You put the format file(s) into the run directory and call the
program.

In future in all your programs there will be a professional screen 
layout. A professional one like in the following exaple.
                                                                           
example for screen layout       
                                                                             
     ╔════════════════════════════════════════════════════════════════╗
     ║   compile program           EXAMPLE                            ║
     ║ ╔═════════════════════════════════════════════════════════════╗║
     ║ ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║║
     ║1║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ Datum 10 01 89 ░░░░║║
     ║ ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║║
     ║2║░░░░░░░╔══════════════════════════════════════╗░░░░░░░░░░░░░░║║
     ║ ║░ quest║──────────────────────────────────────║░░░░░░░░░░░░░░║║
     ║ ║░░░░░░░║                                      ║░░░░░░░░░░░░░░║║
     ║ ║░ files║  points      12╔═════════════════════╩═══════╗░░░░░░║║
     ║ ║░░░░░░░║                ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║░░░░░░║║
     ║ ║░ field║  cataloge     4║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║░░░░░░║║
     ║ ║░░░░░░░║                ║░░░░░ I n f o  !!!!!!! ░░░░░░║░░░░░░║║
     ║ ║░░░░░░░║────────────────║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║░░░░░░║║
     ║ ║░░░░░░░╚════════════════╣─────────────────────────────║░░░░░░║║
     ║ ╚════════════════════════╣░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║══════╝║
     ║                          ║░░ severe  errors ░░░ 22 ░░░░║       ║
  ╔══╩══════════════════════════╩═════╗░░░░░░░░░░░░░░░░░░░░░░░║   123 ║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║mber errors ░░░  1 ░░░░║       ║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║░░░░░░░░░░░░░░░░░░░░░░░║   000 ║
  ║░░░░░░                     ░░░░░░░░║  warnings  ░░░  0 ░░░░╠═══════╝
  ║░░░░░░   ERRORS     !!!    ░░░░░░░░║░░░░░░░░░░░░░░░░░░░░░░░║
  ║░░░░░░                     ░░░░░░░░╠═══════════════════════╝
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
  ╚═══════════════════════════════════╝                 



5. A simple example
-------------------

Mr. Adam plans to administrate his goods received in a little data 
base. Mr. Adam visited a short training in the C program language.

As a proud owner of Personal C - Screen Mr. Adam tries to integrate
a screen format into the user program.

Mr. Adam takes the following methodology:

Format generation 

  After invoking UNIFORM.EXE Mr. Adam comes into the main menu. He 
  takes function key F8 and comes to the menu "options". There he 
  defines                        

    - directory                                         c:\adam
    - field specification for input field alphanumeric  !
    - field specification for input field numeric       
    - field specification for output field alphanumeric $
    - field specification for output field numeric      %
    - field specification for selectable field          &
    - program language                                  Personal C
    - text attributes                                   white on blue
    - frame attributes                                  red on blue

  After saving the options with F1 he returns to main menu by function 
  key F8.

  The format name and format size he defines with PURCHASE, line 
  3 to 18 and column 5 to 70.

  After F1 Mr. Adam comes to menu "screen layout". There is an empty 
  screen with the choosen attributes for text and frame. He forms 
  the screen layout with the key input and key funktions like making 
  vertical or horizontal lines, delete lines or columns or put 
  on/off the frame around the picture. The variable fields he defines 
  by the field specifications. Because Mr. Adam is not an experienced 
  operator of UniForm sometimes he takes function key F9 to see the 
  functional overview. 

  Finally Mr. Adam saves the screen layout with F1 and comes into 
  menu "field names/ attributes". Here Mr. Adam can modify the 
  automatically defined field names and attributes of the variable 
  fields. The first field gets the field name "product" and the att-
  ributes green on reed. He saves field specific with F2. The remai-
  ning variable fields get the field names "date", "supplier", "quan-
  tity" and "price" and the color attributes white on red. After a 
  check (F3 and F4) Mr. Adam is satisfied. He saves the screen format 
  with function key F1.
  
  Mr. Adam comes into "main menu". Now he can define new formats or take
  one of the format managemant functions like show formats, change 
  formats, print formats, copy formats or look for a table of contents.

  Mr. Adam omits for further functions and finishes the dialog with the 
  UniForm format generator. In the defined directory he can find the 
  generated format file (PURCHASE.BLD) and the variables definition file 
  (PURCHASE.H).

Format application

  Mr. Adam edits the program source and is surprised because of just 
  a view lines of code in the user program ...               

    #include "pccform.h"       std-include
    #include "einkauf.h"       variables definition file
    main() 
    { FKZ = 1;                 display new format     
      strncpy (FMT, "einkauf ",8);      format name
      while (RET% != 110)      program end when F10
      { UNIF (&FKZ, FMT, PRODUKTNAME, &RET);
        FKZ = 3;               display just new fields
        /* database orders */
    } }

   Following he compiles the program with the include files 
   PCCFORM.H and PURCHASE.H. 

Program call   

  Mr. Adam calls the program PURCHASE.EXE. The format file PURCHASE.BLD 
  have to be copied into the run directory before.
                                                                             
  Layout for the program purchase 
                                                                        
   ╔══════════════════════════════════════════════════════════╗
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░ P U R C H A S E ░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║──────────────────────────────────────────────────────────║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░ product name         ░░░░░ PC TYP 123456-789 ░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░ input date           ░░░░░░░░░░░░░░ 10 02 89 ░░░░░░░░║
   ║░░░░ supply number        ░░░░░    BST-3443344443 ░░░░░░░░║
   ║░░░░ quantity             ░░░░░░░░░░░░░░        2 ░░░░░░░░║
   ║░░░░ price                ░░░░░░░░░░░░░░  9123 38 ░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║ ENTER SAVE         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║ ESC   REJECT       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║ F10   PROGRAM END  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
   ╚══════════════════════════════════════════════════════════╝

  The first time Mr. Adam made a program within a screen format!



6. Installation
---------------

System requirements 
 
  IBM personal computer oder 100 % compatible
  2 disc drives or 1 disc drive and hard disc                  
  MS-DOS or PC-DOS release 2.1 und higher
  UniForm supports all the screen modes and all usually printers.

Disc contents  

  UNIFORM.EXE    format generation program 
  UNIFORM.CFG    configuration file for UNIFORM.EXE
  PCCFORM.O      interface module for personal C
  PCCFORM.H      standard include
  FM01AR.BLD     sample format files              
  FM01BS.BLD 
  FM01DR.BLD 
  FM01LI.BLD 
  FM01EN.BLD 
  DEMO.EXE       demonstration program          
  HILFE.TXT      this file  
  REGIST.FOR     register form

  You can invoke the UniForm format generator from any directory of hard 
  disc or floppy disc.
  Copy the file UNIFORM.EXE and UNIFORM.CFG into that directory.

  The interface modules and standard include file you copy into the 
  compiler directory.



7. Format generation
--------------------

The format generation in UniForm runs in an interactive mode. In every 
processing step there is a functional overview you can see by function 
key F9.

Run mode     

  Invoke format generator 
  Adapt options    
  Define format name and format size   
  Edit format layout    
  Define field names and attributes for variables          
  Optional take format management functions        

Invoke format generator

  UniForm always is to call from the installation directory. The confi-
  guration file UNIFORM.CFG has to be in the same directory.  
            
  call:  

    CD \installation directory  
    uniform

Adapt options          

  With function key F8 you come from "main menu" to menu "options". 
  In that processing step you modify the actual definitions and save 
  them with F1. With F8 you return to "main menu". The configuration
  file UNIFORM.CFG will be updated with your change order.

  Options:            

    Format directory  
    Field specification for alphanumeric input fields
    Field specification for numeric input fields
    Field specification for alphanumeric ounput fields
    Field specification for numeric ounput fields
    Field specification for selectable fields
    Program language (Personal C)
    Text attributes
    Frame attributes

Define format name and format size  

  In the main menu you define the format name and save it with F1. 
  If the format name is syntactical ok you have to define the format 
  size. Save it with F1, too.

Edit format layout    

  In menu "edit layout" you form the layout of the format, inside the 
  defined borders. The variable fields you define with the appropriate 
  field specifications. 

Define field names and attributes

  In menu "field names/ attributes" you modify the field names and 
  attributes of the defined variables. If there is an empty format 
  (no variable field) this program step is not necessary.

Format management

  Besides the function "new format" (F1) in the main menu there are 
  some more functions for format management. Take them whenever you 
  want to.

    Format change
    Format show
    Format print
    Format copy
    Format delete
    Show contents

Functional Overview

  Look in the interactive mode (F9) or in the user guide.



8. Format application
---------------------

The display of a screen format you have created with UniForm is 
realized in just one subroutine call. The subroutine is written in 
a quick assembler coding. As a result the run time is extremely short. 
All the functions which are necessary for a complete formatting system 
are implemented in this subroutine. It is output formatting, display 
output, cursor adressing, mouse adressing, input formatting and the 
return of a code which informs about the pressed function key.

Run mode     

  - program source

      include standard include file 
      include variables definition file
      supply parameters          
      call assembler subroutine     
      analyse return code 

  - Compile the source  
  - Link the program with the interface module   
  - Copy the format file(s) into the run directory    
  - Call the program         

Standard include

  There is a standard include for Personal C. It contains of the defi-
  nition of the subroutine parameters of the subroutine.

Variables definition

  The variables definition file contains the definitions of all varia-
  ble fields of a format. UniForm creates this file whenever you define 
  a format with the format generator (when there is at least on variable 
  field).

Parameters for subroutine

  Before you call the subroutine you have to supply the offsets of the 
  parameters in the following order.

  function identifier                &FKZ
  format name                        &FMT
  field name                         &1. variable field
  return feld                        &RET

  function identifier FKZ

    2 byte binary field
    0    Save the actual screen
    1    Clear screen and display output of a new format
    2    Display output of a new format                     
         (no clear screen)                            
    3    Display output of the same format 
         (just an update of the variable fields)
    4    Display output of a new empty format           
         (no clear screen)                      
    5    Display output of a saved screen      
    11   Print output of a new format at LPT1
    12   Print output of a new format at LPT2
    13   Print output of a new format at LPT3
    14   Print output of a new format at COM1
    15   Print output of a new format at COM2

  Formatname FMT  
   
    8 byte character field
    Lowercase and/or uppercase letters and valid special characters 
    (see DOS conventions for file names), right justied paded by space.

  Field name of the first variable field

    If you take function 0, 4 or 5 you can take any variable field.

  Return field RET                      

    2 byte binary field
    Shows you the pushed botton selection or an error information.

Call subroutine    

  You have to call the subroutine with the Offset of the parameters.

Analyse return field

  In the parameter RET there is the pushed botton selection after 
  calling the subroutine. If there was an error there will be an 
  error number.

  Botton key

    F1  101            ALT 1  141
    F2  102            ALT 2  142
    F3  103            ALT 3  143
    F4  104            ALT 4  144
    F5  105            ALT 5  145
    F6  106            ALT 6  146
    F7  107            ALT 7  147
    F8  108            ALT 8  148
    F9  109            ALT 9  149
    F10 110            ALT 0  150
    SHIFT F1  111      ALT A  151
    SHIFT F2  112      ALT B  152
    SHIFT F3  113      ALT C  153
    SHIFT F4  114      ALT D  154
    SHIFT F5  115      ALT E  155
    SHIFT F6  116      ALT F  156
    SHIFT F7  117      ALT G  157
    SHIFT F8  118      ALT H  158
    SHIFT F9  119      ALT I  159
    SHIFT F10 120      ALT J  160
    CTRL F1  121       ALT K  161
    CTRL F3  123       ALT L  162
    CTRL F4  124       ALT M  163
    CTRL F5  125       ALT N  164
    CTRL F6  126       ALT O  165
    CTRL F7  127       ALT P  166
    CTRL F8  128       ALT Q  167
    CTRL F9  129       ALT R  168
    CTRL F10 130       ALT S  169
    ALT F1   131       ALT T  170
    ALT F2   132       ALT U  171
    ALT F3   133       ALT V  172
    ALT F4   134       ALT W  173
    ALT F5   135       ALT X  174
    ALT F6   136       ALT Y  175
    ALT F7   137       ALT Z  176
    ALT F8   138       CTRL P-Scr  177
    ALT F9   139       ENTER  100
    ALT F10  140       ESC    99

    If there was pressed ESC (99) all the modifications will be rejected. 
    If there was a key input at a selectable field (cursor position on a 
    selectable field) there will be the return number n+200 (n = number of 
    the unprotected variable field of the actual format).

  Error return

    1  wrong format name
    2  format file not accessable
    3  error in output formatting
    4  wrong function identifier
    6  printer not ready
    7  transmission error to printer
    8  paper end
    9  printer busy



9. Run in Personal C
--------------------

Std-Include (#inclue "PCCUNIF.H")
  int FKZ;  
  int RET = 0;
  char FMT[] = "        "; 
  void UNIF();

Variables definition file(s) (#include "format.H")
  STRUCT format {  
  alphanumeric   1-80 signs  -->  unsigned char feld[n];
  integer number 1-8  signs  -->  long feld;
  integer number 9-13 signs  -->  double feld;
  decimal number 1-8  signs  -->  float feld;
  decimal number 9-15 signs  -->  double feld;
  END } format;

Subroutine Call 
  UNIF(&FKZ,&FMT,&1.field,&RET);

Compile     
  like before

Link   
  link with PCCFORM.O

Notes   
  You have to define the variables global.
  Integers > 8 Zeichen in your PCC-program you have to provide in a
  decimal format (for. Example. 1234567890.0 for 1234567890).



7. Mouse and cursor adressing
-----------------------------

Cursor adressing
 
  There is the following seeting in format generation and format
  application

    - left arrow key    Cursor left
    - right arrow key   Cursor right
    - down arrow key    Cursor down
    - up arrow key      Cursor up
    - Home              Cursor to field beginning
    - End               Cursor to field end
    - Page Down         Cursor to next field
    - Page Up           Cursor to previous field
    - Back Slash        Delete character and cursor left
    - Del               Delete character
    - Ins (Modus)       Insert character


Mouse adressing
 
    - mouse key left    Cursor to mouse pointer

    - mouse key right   Cursor to mouse pointer
                        and return ENTER (RET = 100)



10. Trade mark
--------------

PCC ist is a trade mark of Mark DeSmet.

MS-DOS, PC-DOS are trade marks of Microsoft and IBM.


To
J. Ebnet Software

D 8000 München
Passauer Straße 2

Western Germany


REGISTRATION
PURCCHASE ORDER

- Software utility Personal C - Screen
-------------------------------------------------------------


Please send me the software utility Personal C - Screen for a charge
of $ 17.


I take the folowing payment:

   (  ) cheque payment

   (  ) transfer to the following bank account:
        Raiffeisenbank München EG
        West Germany
        bank number 70160300
        account number 414522
 
   (  ) cash on deliver
        (  ) in Western Germany         $  3.--
        (  ) from abroad                $  5.--

disc format:

   (  ) 5.25 inch disks
   (  ) 3.5 inch disks                  $  3.--



For a registrated user you will get an information of a new
program release automatically. You can order it in an update 
service for the special price of $ 9.

User support is possible for registrated users exclusively.

Sender:  





Date/signature:



.............................
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2188

     Volume in drive A has no label
     Directory of A:\

    UNIFORM  EXE     64692  10-26-89   9:41p
    UNIFORM  CFG        75  10-27-89   5:04p
    PCCFORM  O       24535  10-26-89   9:53p
    PCCFORM  H         102  10-11-89   7:57p
    HELP     TXT     23931  10-26-89   9:30p
    REGIST   FOR      1063  10-24-89   4:11p
    FM01EN   BLD      2019   1-01-80  12:35a
    FM01DR   BLD      2188   1-01-80  12:35a
    FM01LI   BLD      2019   1-01-80  12:34a
    FM01BS   BLD      2254   1-01-80  12:34a
    FM01AR   BLD      2848   1-01-80   2:19a
    DEMO     EXE     38544   1-01-80  12:33a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-03-90  10:03a
    FILE2188 TXT      2369   5-03-90  11:20p
           15 file(s)     167217 bytes
                          146432 bytes free
