---
layout: page
title: "PC-SIG Diskette Library (Disk #510)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0510/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0510"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "VISIBLE-PASCAL"

    Visible-PASCAL, A PASCAL compiler, is particularly useful for teaching
    and learning PASCAL.  With this package, users can watch the operation
    of a program as it runs.  There are 19 different sample programs which
    can be edited or run.
    
    AUTOEXEC BAT  Starts program from boot disk.
    EDIT     BAT  Batch file to start the editor
    ERR      TXT  Text file containing error messages
    G        BAT  Batch file that explains how to start the program
    MANUAL   1    User manual part 1 of 2 (27K)
    MANUAL   2    User manual part 2 of 2 (52K)
    PRINTMAN BAT  Batch file that prints the manual
    RUN      BAT  Batch file to run a program
    VISBUG   EXE  Part of compiler
    VISED    EXE  Part of compiler
    VISPAS   EXE  Part of compiler
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ERR.TXT

{% raw %}
```
error message #0 -- this should never be displayed!     11/7/84               
the file was not opened before this      operation.                           
the file is not open for output (WRITE   operations). Do REWRITE first.       
the file is not open for input (READ     operations). Do RESET first.         
the disk is full; use a disk with  more  space on it.                         
the directory is full with too many      files; erase some of them.           
you can't ASSIGN a file that is already  open. CLOSE it first.                
the file name has no characters in it.                                        
attempted read beyond the end of file.   Test for EOF to prevent this error.  
reading an integer that is out of range: integers must be -32767 to 32767.    
error message #10 -- not used!                                                
#11 -- div by 0                                                               
#12 -- string length error                                                    
#13 -- index out of range                                                     
#14 -- case index out of range                                                
#15 -- stack overflow                                                         
#16 -- sub-range error                                                        
#17                                                                           
#18                                                                           
#19                                                                           
Reached the end of the file, program is  incomplete. Check program syntax.    
Too many identifers declared.   Remove   some declarations or definitions.    
','  expected.                                                                
Set elements must be between 0 and  255  in value.                            
This character is incorrect here.                                             
The program is too large; you must make  it smaller!                          
All set constants must be the same type.                                      
This item is incorrect at this point;    check your syntax.                   
Multiple definition in the program,  or  a pre-declared identifier or routine.
This word appears to be  an undeclared   identifier.                          
A constant is expected here.                                                  
A variable, constant, or function is expected here.                           
Too many variables were declared,   or   arrays are too large.                
Identifer expected.                                                           
'=' expected.                                                                 
';' expected.                                                                 
':' expected.                                                                 
This procedure/function was declared with a parameter list. '('  expected.    
'(' expected.                                                                 
')' expected.                                                                 
'INTEGER', 'CHAR', 'BOOLEAN', 'STRING',  or 'TEXT' type identifier expected.  
'..' expected, as in :ARRAY[1..10] OF..   etc                                 
Boolean or integer expression required.                                       
This word is incorrect at this point;    check your syntax.                   
An integer is required here.                                                  
The types of the two terms used here do  not match.                           
A boolean expression must be used here:  it must be True or False.            
The type of this expression does  not    match the control variable's type.   
#48                                                                           
':=' required.                                                                
Variable type does not match the type of the right hand part of statement.    
Integer, character, boolean, or string   variable  is expected here.          
'END' expected.                                                               
An integer or character expression  is   expected.                            
'THEN' expected.                                                              
A CASE label can have a maximum value of 255.                                 
This CASE label value is a duplicate of  a previous one.                      
An integer  or  character  variable is   expected.                            
'OF' expected.                                                                
This CASE label is not the same type as  the CASE variable or expression.     
'UNTIL' expected.                                                             
'DO' expected.                                                                
Parameter expected, beginning with VAR   or an identifier.                    
A variable or procedure identifier  is   expected.                            
A statement or perhaps 'END' or ';' is   expected.                            
The control variable in a FOR statement  must be a simple variable.           
'BEGIN' or a declaration section (CONST, TYPE, VAR) is expected.              
A procedure or function name is expected.                                     
'BEGIN' expected.                                                             
'TO' or 'DOWNTO' expected.                                                    
Incorrect symbol here;  a statement  is  expected.                            
'.' or another statement or procedure    is expected here.                    
sorry, GOTO's are not allowed, since     they can lead to bad habits!         
'DO' expected.                                                                
'[' expected.                                                                 
A positive integer is required for  the  index, between 1 and 4000.           
']' expected.                                                                 
only an array or a string can have an    index.                               
#78                                                                           
#79                                                                           
INTEGER, CHAR, or BOOLEAN expected for a  type.                               
#81                                                                           
Functions cannot return arrays.                                               
The number of parameters disagrees with  the declaration made earlier.        
The type of the parameter does not match the declaration made earlier.        
A simple variable (without index) or a   constant is needed here.             
'PROGRAM' expected.                                                           
Matching closing quotes required, single or double ('...' or "...").          
READ and WRITE must have at least one    parameter to be meaningful.          
Hexadecimal number such as $FF00 expected after a '$'.                        
INTEGER, BOOLEAN, or CHAR funtion type   expected.                            
#91                                                                           
#92                                                                           
#93                                                                           
The array size does not agree with its   declaration.                         
#95                                                                           
An expression  or a  quoted string  is   expected.                            
#97                                                                           
#98                                                                           
This declaration does not  match  the    previous declaration.                
The compiler option  is: T+ or T-.       T- removes the debugger code.        
```
{% endraw %}

## FILES510.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  510  VISIBLE-PASCAL                                         v1 DS2
---------------------------------------------------------------------------
VISIBLE-PASCAL, a Pascal Compiler, is particularly useful for teaching and
learning Pascal.  With this package, users can watch the operation of a
program as it runs.  There are also 19 sample programs already written that
can be run or edited.
 
AUTOEXEC BAT  Starts program from boot after system has been put on the disk
EDIT     BAT  Batch file to start the editor
ERR      TXT  Text file containing error messages
G        BAT  Batch file that explains how to start the program
MANUAL   1    User manual part 1 of 2 (27K)
MANUAL   2    User manual part 2 of 2 (52K)
PRINTMAN BAT  Batch file that prints the manual
RUN      BAT  Batch file to run a program
VISBUG   EXE  Part of Compiler
VISED    EXE  Part of Compiler
VISPAS   EXE  Part of Compiler
 
There are also 19 sample programs already written that can be run or edited.
 
PC-SIG (Software Interest Group)
1030 East Duane Ave, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES510.TXT

{% raw %}
```

Program name:  VISIBLE-PASCAL

Author name:   William Hapgood Associates
Address:       10 Sycamore Road
	       Wayland, MA 01778

Telephone Number: Not given

Suggested Donation: $35--You receive a future update.

Program Description:  VISIBLE-PASCAL, a Pascal Compiler is particularly useful
for teaching and learning Pascal.  With it you can watch the operation of your
program as it runs.  Requires IBM-PC (including jr.) or compatible with 128K of
memory, at least 1 disk drive, and DOS 2.0 or higher.  It supports a graphics
adapter, more disk drives, and printer.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0510

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       128   8-08-85   6:12p
    BOX                896   8-08-85   6:12p
    COLOR              512   8-08-85   6:12p
    EDIT     BAT       128   8-08-85   6:12p
    ERR      TXT      8192   8-08-85   6:12p
    FILEDEMO           896   8-08-85   6:12p
    FILES510 TXT      1188   5-07-86   2:36p
    FIRST1             640   8-08-85   6:12p
    G        BAT       384   8-08-85   6:12p
    GO       BAT       363   5-07-86   1:35p
    INKEY              640   8-08-85   6:12p
    KEYDFINE           384   8-08-85   6:12p
    LISTER             768   8-08-85   6:12p
    MANUAL   1       27008   8-08-85   6:12p
    MANUAL   2       51875  11-13-85  10:23p
    MATH               640   8-08-85   6:12p
    MODESW             256   8-08-85   6:12p
    NOTES510 TXT       592   1-01-80   1:42a
    PATTERN           1152   8-08-85   6:12p
    PRETTY2           7424   8-08-85   6:12p
    PRINTMAN BAT       128   8-08-85   6:12p
    RUN      BAT       384   8-08-85   6:12p
    SECOND1            512   8-08-85   6:12p
    SOUNDS             384   8-08-85   6:12p
    SOUNDS2            640   8-08-85   6:12p
    STRINGS            512   8-08-85   6:12p
    TESTCASE           512   8-08-85   6:12p
    TURTLE            2176   8-08-85   6:13p
    VISBUG   EXE     19584   8-08-85   6:13p
    VISED    EXE     20736   8-08-85   6:13p
    VISPAS   EXE     25600   8-08-85   6:13p
    WEATHER            640   8-08-85   6:13p
    WORDS              512   8-08-85   6:13p
           33 file(s)     176386 bytes
                          128000 bytes free
