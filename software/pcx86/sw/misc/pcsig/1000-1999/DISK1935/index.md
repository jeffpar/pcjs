---
layout: page
title: "PC-SIG Diskette Library (Disk #1935)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1935/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1935"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POPTEXT"

    This help-screen generation utility for Turbo Pascal and Assembly
    language programmers allows programmers to easily integrate pop-up style
    help windows into their own programs.
    
    POPTEXT features an easy to use editor, a unit to include in Turbo
    programs, and three bonus units, including some fast writing routines,
    routines to enhance CRT, and a unit with all of the key definitions.
    
    Each help window is a record consisting of 15 lines and 15 links.  The
    lines are displayed on the screen, and the links are hidden in the
    background.  In addition to being linked by line, windows are linked by
    the page up and page down keys.  Using the editor, you can create new
    files, and append the files up to 256 records each.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1935.TXT

{% raw %}
```
Disk No: 1935                                                           
Disk Title: PopText                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PopText                                                  
Author Version: 2.1                                                     
Author Registration: $25.00                                             
Special Requirements: Hard Drive recommended.                           
                                                                        
This help-screen generation utility for Turbo Pascal and Assembly       
language programmers allows programmers to easily integrate pop-up style
help windows into their own programs.                                   
                                                                        
POPTEXT features an easy to use editor, a unit to include in Turbo      
programs, and three bonus units, including some fast writing routines,  
routines to enhance CRT, and a unit with all of the key definitions.    
                                                                        
Each help window is a record consisting of 15 lines and 15 links.  The  
lines are displayed on the screen, and the links are hidden in the      
background.  In addition to being linked by line, windows are linked by 
the Page Up and Page Down keys.  Using the Editor, you can create new   
files, and append the files up to 256 records each.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```

HELPDEF.TPU             Definition of the POPTXT card
POPTX.EXE               The POPText Editor
HYPERDOC.DOC            Documentation
HYPERHLP.DOC            Interface for HYPERHLP.TPU
HYPERHLP.TPU            Unit to include in your program
HYPFW.DOC               Interface for HYPFW.TPU
HYPFW.TPU               FAST screen write routines
KEYNAMES.TPU            Names of all keys
KEYNAMES.PAS            Source code for Keynames.
POPRES.EXE              Memory Resident INT $6E version
POPTEXT.HLP             A sample of a stack, with some docs.
REGISTER.DOC            Form to Register POPTEXT
SCREENIO.DOC            Interface to Screenio.tpu
SCREENIO.TPU            advanced windowing and Keyboard routines
THLP.EXE                Example program
THLP.PAS                Example program source code.
TSRDEMO.ASM             Example using POPRES - source code.
TSRDEMO.EXE             Example using POPRES.


POPTXT21.ARC            Poptext units for Turbo Pascal 4.0
POPTXT22.ARC            Poptext units for Turbo Pascal 5.5
```
{% endraw %}

## FW.DOC

{% raw %}
```
Unit FW;

{***********************************************}
{**** POPTEXT Version 2.1                   ****}
{**** (C) 1989 Tone Zone Computing          ****}
{**** FW - Fast ScreenWrite Utility         ****}
{**** Interface section for Unit FW         ****}
{***********************************************}

{***********************************************}
{** License to incorportate FW.TPU to        ***}
{** REGISTERED USERS only  (See Register.doc)***}
{***********************************************}


Interface

Uses Crt;

Procedure FastWrite(buf:String;Y,X,C:Byte);
{Usage:  Fastwrite(String,Row,Column,attr);
        Writes String to specified coordinates using attr for attribute.
        Interprets #129 as HighVideo and
                   #130 as Lowvideo in text stream}

Procedure ChangeAttr(L,Y,X,C:Byte);
{Usage:  ChangeAttr(Length,Row,Column,attr);
        Sets specified length of Row,Column to specified Attribute}


Procedure SetFWColors(LoVid,HiVid,InvLo,InvHi:Byte);
{Usage: SetFWColors(Lo,Hi,ILow,IHigh);
        Sets the attribute values for global variables LowVid,HighVid,
        InvHigh,InvLow.  Default values are 7,11,112,11 respectively}


Var Highvid,
    Lowvid,
    InvHigh,
    InvLow:byte;

{Contain the values used by Fastwrite in interpreting the #129 and #130
 Highlight values.  Can be used as parameters to Attrs of ChangeAttr and
 Fastwrite to increase monitor compatability.  Default values are set
 to     Highvid = 11
        Lowvid  = 7
        InvLow  = 112
        InvHigh = 11}


implementation
```
{% endraw %}

## HELPDEF.DOC

{% raw %}
```
Unit HelpDef;

{***********************************************}
{**** POPTEXT Version 2.1                   ****}
{**** (C) 1989 Tone Zone Computing          ****}
{****                                       ****}
{**** Unit HelpDef - Definition of the      ****}
{**** POPTEXT Card                          ****}
{***********************************************}

Interface

type Line = String[40];
     Page = Array[1..15] of Line;
     TraceBack = Array[0..255] of byte;
     PickitList = Array[1..15] of Word;
     HelpNode   = Record
                    HelpPage:Page;
                    List    :PickitList;
                    Valid   :word;      {Bitmap of Valid Choices}
                    PGItUP  :word;      {Where to go if PageUp (0 for none)}
                    PGItDN  :word;      {Where to go for PageDn (0 for none)}
                  end; {Record}
     HelpFile=File of HelpNode;


```
{% endraw %}

## HYPERDOC.DOC

{% raw %}
```
                       PopText HelpSystem
                           Version 2.1

                               by
                        Brian K. Trotter


                  (C) 1989 Tone Zone Computing


             Distributed under the ShareWare System


Restrictions: Permission is given to freely copy and distribute
this program so long as there is no charge, and that it is not
added as an incentive to market another software or hardware
product. This program is NOT a public domain program, but is
being distributed under the "ShareWare" concept. Anybody may use
these programs, but only REGISTERED USERS may actually
incorporate the units HYPERHLP,HYPFW, HELPDEF and SCREENIO. Users
are asked to send a registration fee of Twenty-Five
Dollars ($25.00) to:
              Tone Zone Computing.
              P.O. Box 414
              Bishop, CA 93514
Registration entitles users to freely incorporate POPTEXT into
their Turbo Pascal programs. By the way, there are several
signatures embedded in the code, so I can verify my copyright
against non-registered users.

Disclaimer: This software and accompanying documentation files
are provided "AS IS" without warranty of any kind. Further, Tone
Zone Computing does not Warrant, guarantee, or make any
representations regarding the use, or the results of use, of this
software. All risk taken in the use of this software is assumed
by you, the user and Not Tone Zone Computing, nor any software
club distributing this software. Due to the nature of this
software (programming aid), it should be pointed out that
improper use of this software can lead to unexpected results.
You, the user assume all responsiblity for these results.

That should satisfy my lawyers. Now on to the more important
stuff.

I.  The Purpose of POPTEXT.
    Too often, especially in the ShareWare market, documentation
becomes scarce, or users become loath to pass on needed
documentation files. Often times, programmers fail to properly
document files out of either neglect or laziness. One feature of
several commercial programs in addition to outstanding
documentation is the POP-UP HELP WINDOW. Excellent examples of
this are found in Turbo Pascal 4.0 and above, Wordstar 2000+, and
Novel LAN services. With or without the manual, the user has some
reference available on-line.
    POPTEXT is an includable UNIT for Turbo Pascal programmers to
prepare similar help systems.


II.  Features of POPTEXT.
    POPTEXT features an easy to use editor, a unit to include in
Turbo 4.0 programs (Upgrades to 5.5 available SOON!!!!), and
three bonus units, including some fast writing routines, routines
to enhance CRT, and a unit with all of the key definitions.
    The POPTEXT system features Context sensitive help, Window
linking, and an easy to use Menubar.
    POPRES is a memory resident version of POPTEXT which can be
accessed through Int $6E

III.  About the Help window.
    Each help window is a record consisting of 15 lines and 15
links. The lines are displayed on the screen, and the links are
hidden in the background. In addition to being linked by line,
windows are linked by the Page Up and Page Down keys. Windows are
stored in a file with the extension .hlp, and are accessed
randomly by POPTEXT. It is possible to access any record which
already exists within the helpfile. Using the Editor, you can
create new files, and append the files up to 256 records each.

IV.  Using the Editor.
    Using the Editor is as simple as typing HELPED Plus the name
of the file you wish to edit. If you do not supply a filename,
HELPED will prompt you for one. If the file does not exist,
HelpEd will create a new file.
    Next, you are prompted with options to Edit, Link, Test,
Choose Another, and Quit.
    Edit - Allows you to place text in the windows. A few helpful
hints here. After you have selected the Page number, use the
Arrow keys (Up/Down) to select lines to Edit. Page/Up and
Page/Down allow you to browse through the pages.
        Important features of Edit.
                F2:  Switches you to linking Mode.
                F3:  Centers the Current line of text.
                Enter or any Alphanumeric:
                        Edit the current line.
                           (While Editing line, ESC erases line)
                ESC: Return to Main Menu.
    Link - Linking is the key to POPTEXT. To the right of the
help box, you will see a list of numbers in another box. Most
likely, in a new file these will all be zeroes. If you are
editing the help file which came with this program, you will find
several non-zero numbers. These represent links in the stack. The
file can be looked at as a stack of cards. The links allow you to
move to any portion of the stack. Links are line oriented, so
selecting the link at the user level is as easy as moving the bar
to the line containing the link and pressing enter. This is only
the first step. In the editing mode, you have to mark the text by
highlighting a keyword in the text line associated with the link.
To do so, press ^Q before you type the word to be associated, and
^W after. This will highlight the word. POPTEXT will properly
function only when both of these is done.
   There can be up to 15 links in each box. To establish a link,
move the cursor to the line you want linked and press enter.
Respond to the prompt with the number you want linked. Pressing
ALT-C clears all links. Pressing F1 returns you to the editor
mode.
    Test - Testing the helpscreen causes the program to activate
the very same subroutine which you will incorporate in your
program. In this manner, you can see how the help menu will look
and feel, as well as check the validity of the links.
    Choose Another File - Allows you to close the current help
stack and select another. If the selected file does not exist,
PopText will create it.
    Quit and Save - Rather self explanatory.



Section II:  Organizing a PopText Stack.
    I predict the most popular use for this program will be
context sensitive help. This is best demonstrated from the Turbo
Pascal Menubar. Whereever you are in the menubar, pressing F1
gives you help on that subject. This is because its helpfile is
indexed so that it calls up the exact heading needed. Another
popular use will be the Deck. The deck is used when it is
nessessary to show the user a large amount of facts in small
bits. You start at the top and browse through the cards at your
leisure. It is possible to provide vast amounts of data through
the deck.

I.  Context Sensitive Help.
    Context sensitive help is achieved when a program is able to
recognize what block of information is required to deliver to the
user, and automatically selects the appropriate card from the
deck.
    Example: You have Six menus with 4 to 9 options on each
menu. You wish to maintain expandability to up to 9 items on each
menu. (Menus should never have more that 9 items. If you are
building larger menus, consider breaking them up. It is much
easier on the user. The menus are all arranged by Topic. Pressing
F1 at a Menu Header (e.g. File Options, Compiler Options, Run,
Edit, etc) will call the card 10 times the menu number. On the
menu choices, pressing F1 will call 10 times the menu number plus
the number of the choice. In this way, the cards are indexed
automatically by topic, and easy to manipulate. Should further
information be needed past the first card of each topic, it would
then LINK to a card further away.

II. Random Access Deck.
    Random Access Decks are most usefull for teaching and
outlines. In addition to Context-Sensitive Help, Turbo Pascal
also has a Random Access Deck. It is called by pressing F1 again
after pressing F1. This places the user in a very sophisticated
menu where he can select from the topic of his choice. Some of
these are submenus, leading down to further topics. Since all who
will be using this program are Turbo Pascal Users, I suggest you
explore the Help system. It will give excellent insight into
Random Access Decks.
    Example: Information on various topics is stored in my
stacks. On the first card, I have a list of topics where if there
are more than 15 topics, I split the options over several decks
with a more option. (Usually, the first cards are all topic
cards, so pressing pagedown imediatly gives me more topics.
    On the first menu I select the topic "Cars". This moves me to
a card with a list of manufacturers. I select "Nissan". This
moves me to a list of models. I select "Sentra". I am now looking
at a card with information on the Nissan Sentra. In this manner,
I can arrange all my data. Another example of how this structure
works can be seen in Biology. Start your stack with the largest
topics. From there, work your way down to sub topics until you
reach the exact information you require.
    The help menu which comes with this program is an example of
a Random access stack, except that it leads you through the steps
required much more carefully than you normally might. This is to
better educate you. Remember, you are responsible for indicating
to the user the proper way to move about the stack.

    It is quite possible to combine a context sensitive stack
directly into a random access stack. The random access stack must
eventually dig into the context sensitive data as its final
results.





    Including POPTEXT in your programs.
    If you are a Turbo 4.0 user, you are ready to go. Simply add
the statement      Uses Hyperhlp;
  to your program.  There are several requirements.

         1. You must call function
OPENHELPFILE(S:String):Integer;
         2. Any time you want to use the help system, simply
invoke the procedure PopTextCard(NUM:BYTE); where num is the card
number you wish to begin on.
         3. If Openhelpfile returns a non-zero result, then
either POPTEXT was unable to find the file, or the file is bad.
         4. On exit, is is always wise to call the function
CLOSEHELPFILE:integer;
         5. You must at compile time have the units
              Keynames,
              Screenio,
              HLPFW,
              HelpDef,
              Hyperhlp; in the Unit directory or current drive.

Using POPRES:
        PopRes is designed for those who do not have Turbo Pascal
4.0. Nearly every language enables the user access to the 8088's
built in interrupt functions. POPRes is a memory resident program
which traps a normally unused interrupt vector ($6E) and causes
it to act just like unit HYPERHLP. (It is the unit HYPERHLP with
some surrounding code.) Load POPRES before loading the program
which calls the POPTEXT routines.

******* IMPORTANT NOTE:  DO NOT USE THESE INTERRUPT VECTORS
******* IF POPRES.EXE IS NOT INSTALLED!  YOUR SYSTEM WILL HALT!

        We advise caution in the use of these routines if you are
unfamiliar with the use of Interrupts.

        INT $6E  -  POPRES

        AH = 0  PopTextCard
                Entry conditions: AH = 0
                                  AL = Window to use.
                Exit conditions: None
                Activates the Help window beginning with card
number Al. Control is passed back to the caller when user escapes
help.

        AH = 1  OPENHELPFILE
                Entry conditions: Ah=1
                                  DS:DX = pointer to an ASCIIZ
string with filename of helpfile.
                Exit conditions
                   Al = 0  no error
                   Al = 1  file not found.

        Prepares the help window by assigning a filevar. Required
preparatory routine before calling PopTextCard.

        AH = 2  Closehelpfile
                Entry conditions: AH = 2
                Exit conditions: None

        Closes Help file and de-initializes Openhelpfile. Usefull
for changing help files.


        A sample program using POPRES is included.  Zhlp.asm.
        For your convenience it has already been assembled, but
you may alter it at your leisure and learn from it.




Licensing agreement.

    While this program is in the Shareware system, and no fee can
be charged for distribution (I make an exception for shareware
firms and user groups who may charge up to $5.00 for media and
time to copy only.), It is NOT, repeat NOT a public domain
program. Please have respect for the many hours which went into
POPTEXT. Those programmers who uses POPTEXT must appreciate the
work of programming. I hereby licence to REGISTERED USERS only,
the right to incorporate Screenio, HLPFW, HelpDef, and Hyperhlp
into thier programs. I only included the interface sections,
which are listed in the *.doc files. Currently, only Turbo 4.0 is
supported, and all other versions must use the memory resident
POPRES.EXE and interrupts.

Registration Fees and benefits.

    By registering this program, you entitle yourself to two
the latest version of this program, plus one upgrade. I promise,
there will be upgrades. In addition, you will receive other
programs on a shareware basis, plus a discount on registration of
future Tone Zone Computing Programs. Honest, there will be more.
Registered users may purchase the source code for POPTEXT for
$50.00.  This source code may be modified and distributed in
your EXEcutable files, but not distributed in source form.
Information on purchasing POPTEXT source will be sent to
registered users.
    Eventually, an assembly language version of POPTEXT will be on
the way which may be included in Assembly Language and 'C'
programs. Also on the way is ADVENTURESOFT, an adventure writing
language, an Object oriented database series, and many, many
utilities.
    If you wish to register, please send $25.00, check or money
order to
                   Tone Zone Computing
                   Rt 2 TP 13
                   Bishop, Ca 93514

                   Make Checks Payable to
                   Tone Zone Computing

    You will receive the latest version of POPTEXT as well as
proof of registration.  Please include the version number.

VERSION NUMBER 2.1


Note:  There is one known bug in the editor.  When you are
testing a stack and encounter a window with no links, the
editor's TEST utility will print garbage.  PopRES.EXE and
HyperHlp.TPU do not exhibit these problems.  This error will
be fixed soon, and a spot upgrade sent to registered users.
Also:  Turbo Pascal 5.5 Users.  PopText 2.2 is compiled and ready
for Turbo Pascal 5.5.  Please indicate on the registration
form that you are a TP5.5 user and I will send you a version
for 5.5 instead of 4.0.  Turbo 5.0 users will have to purchase
the source code for $50.00 and re-compile the units on their
machine.  Poptext 2.2, using Turbo 5.5 is available on
Random Access Information Network (503)-761-8100 (12/24,N,8,1).




Poptext (C) 1989 Brian K. Trotter
        (C) 1989 Tone Zone Computing.

Poptext is written entirely in Turbo Pascal 4.0 and MASM 4.0

Turbo Pascal is a registered trademark of Boorland International,
Inc.

MASM is a registered trademark of Microsoft.


```
{% endraw %}

## HYPERHLP.DOC

{% raw %}
```
unit hyperhlp;

{*********************************************************}
{*** Interface Section for                      **********}
{*** Hyperhlp.TPU                               **********}
{*** (C) 1989 Tone Zone Computing               **********}
{*** Permission granted to registered users     **********}
{*** to incorporate into Turbo Pascal Programs  **********}
{*********************************************************}


interface


Uses Dos,          {Standard Boorland Unit}
     CRT,          {Standard Boorland Unit}
     SCREENIO,     {Windows, and Key Routines}
     HelpDef,      {Standard Definitions for HelpEd}
     HYPFW,        {Writing and Highlighting Routines}
     Keynames;     {Names of all the keys you could press.}


procedure PopTextCard(x:byte);
{**** Usage :  PopTextCard(nodenumber);
        Engages the help utility and enters the user into
        help screen 'x' }


function openhelpfile(s:string):integer;
{**** Usage : x:=Openhelpfile(filevar);
   Assigns the file (filevar) to be the current helpfile}

function closehelpfile:integer;
{**** Usage : x:=Closehelpfile;
    Closes the file and resets the POPTEXT system.}
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

                              Tone Zone Computing

POPTEXT  Registration Form.

Please print this form and fill it out if you wish to register
Poptext.


Name                  ________________________________
Company(Optional)     ________________________________
Address               ________________________________
                      ________________________________
                      ________________________________

Enclosed is $25.00  (Check / Money Order) Circle One.
Please do not send cash.


                PopText Version Number  _______
                (See POPTEXT.DOC)

        Where Did you get POPTEXT

        Friend          ____
        Stole it        ____
        Bulletin Board  ____
           (Which One?)  ___________________________________________
        Users Group     ____
           (Which One?)  ___________________________________________
        ShareWare Dist. ____
           (Which One?)  ___________________________________________


        I Program in the Following Languages
        _________________________________________________________
        _________________________________________________________
        _________________________________________________________

Please send this form with check or money order payable to

                Tone Zone Computing
                P.O. Box 414
                Bishop, CA  93514

You will be sent a reciept, a distribution disk, a registration
number, and the next upgrade as it is written.

















          Where Innovation and Logic Join Hands to Create Excellence


```
{% endraw %}

## SCREENIO.DOC

{% raw %}
```
Unit ScreenIO;

{***********************************************}
{**** Unit Screenio                         ****}
{**** Extra Goodies For Unit CRT            ****}
{**** (C) 1989 Tone Zone Computing          ****}
{***********************************************}

Interface
Uses Dos,Crt;

Const T:Byte = 7;
      C=1;

      NoBorder   = 0;     {Passed to Swindow to determine the border}
      Bars       = 1;
      DoubleBars = 2;
      Solid      = 3;
      ThinSolid  = 4;
      Dots       = 5;
      Dense      = 6;
      Pack       = 7;

      Normal:Byte = 7;
      CursorOffFlag:Boolean = False;

Var ScanCode:Byte;






{*****************************************************************}
{****** Replacement procedures for  CRT                      *****}
{*****************************************************************}

Function KeyPressed:Boolean; {Determines if a key is waiting.}
Function Inkey:Char;         {Reads a key without display}
Function KeyScan:Char;       {Reads a key, only if a key is waiting}

{If Inkey returns a 0 - then the character is an Extended character,
 The scancode is stored in the byte variable ScanCode;}

{KeyScan reads a key only if a key is waiting.  If there is no key in
the buffer, it returns a #255}

{*****************************************************************}
{****************** Extra Goodies ********************************}
{*****************************************************************}

Function Sread(LocX,LocY,Colo:Byte):Byte;
{Returns the contents of screen Location LocX,LocY.  If you want the
text contents, use Colo=0, for the attribute, use Colo:=1;}

Procedure Swrite(LocX,LocY,Colo,What:Byte);
{Writes a character directly to the screen.  Uses The attribute Colo.
 Writes the character chr(What)}

Procedure SWindow(X1,Y1,X2,Y2,Border:Byte);
{Places a window on the with coordinates X1,Y1,X2,Y2 and border definition
as determined with above constants.  If border <>Noborder then the actual
text window will be X1+1,Y1+1,X2-1,Y2-1}

Function Calculate_Offset(Lox,Loy,Clo:Byte):Integer;

Procedure CursorOn;     {Turn the Cursor on}
{Turns the Bios cursor off}

Procedure CursorOff;    {Turn the Cursor off}
{Turns the Bios cursor on.}

implementation



```
{% endraw %}

## TSRDEMO.ASM

{% raw %}
```
Page 60,132

;  Zhlp.asm
;  Poptext 2.1
;  Copyright (c) 1989 Tone Zone Computing
;
;  A test of the memory resident feature of Poptext





Code Segment Byte Public


     Assume Cs:Code,SS:Stack;

JMP    Entry;
        Copyright  Db 'POPRes Testing Routine'
        ByWho      Db '(c) 1989 Tone Zone Computing',13,10,'$'
        Filename   Db 'Poptext.hlp',0,'$'
        Error1     Db 'Error: Unable to Start Poptext$'

Entry:     Push CS                  ;Initialize Data Seg
     POP   DS                       ;
     Assume DS:Code
     MOV   DX,Offset Copyright      ;Copyright Notice
     MOV   AH,9                     ;
     INT   21H                      ;
     PUSH  CS                  ;
     POP   DS                       ;
     Assume Ds:Code
     MOV   DX,Offset Filename       ;DS:DX points to Filename
     MOV   AH,02                    ;OpenHelpFile(Filename);
     INT   6EH                      ;Call POPTEXT
     CMP   AL,00                    ;Is Return OK?
     JNZ   BADFile                  ;OOPS
     MOV   AH,01                    ;We want to use the help
     MOV   AL,01                    ;PopTextCard(1)
     INT   6EH                      ;Call POPTEXT
Closeall:
     MOV   AH,03                    ;CloseHelpFile
     INT   6EH                      ;Call POPTEXT
     MOV   AH,4CH                   ;Exit
     INT   21H                      ;Call MSDos
BadFile:
     MOV   DX,Offset Error1         ;Display Error Message
     MOV   AH,09                    ;
     INT   21H                      ;Call MS-Dos
     MOV   AH,4CH                   ;Leave
     INT   21H                      ;Call MS-Dos

Code Ends

Stack Segment Word Stack

  Stackfill  Dw 10000 dup(?)

stack ends

End

```
{% endraw %}

## FW.DOC

{% raw %}
```
Unit FW;

{***********************************************}
{**** POPTEXT Version 2.1                   ****}
{**** (C) 1989 Tone Zone Computing          ****}
{**** FW - Fast ScreenWrite Utility         ****}
{**** Interface section for Unit FW         ****}
{***********************************************}

{***********************************************}
{** License to incorportate FW.TPU to        ***}
{** REGISTERED USERS only  (See Register.doc)***}
{***********************************************}


Interface

Uses Crt;

Procedure FastWrite(buf:String;Y,X,C:Byte);
{Usage:  Fastwrite(String,Row,Column,attr);
        Writes String to specified coordinates using attr for attribute.
        Interprets #129 as HighVideo and
                   #130 as Lowvideo in text stream}

Procedure ChangeAttr(L,Y,X,C:Byte);
{Usage:  ChangeAttr(Length,Row,Column,attr);
        Sets specified length of Row,Column to specified Attribute}


Procedure SetFWColors(LoVid,HiVid,InvLo,InvHi:Byte);
{Usage: SetFWColors(Lo,Hi,ILow,IHigh);
        Sets the attribute values for global variables LowVid,HighVid,
        InvHigh,InvLow.  Default values are 7,11,112,11 respectively}


Var Highvid,
    Lowvid,
    InvHigh,
    InvLow:byte;

{Contain the values used by Fastwrite in interpreting the #129 and #130
 Highlight values.  Can be used as parameters to Attrs of ChangeAttr and
 Fastwrite to increase monitor compatability.  Default values are set
 to     Highvid = 11
        Lowvid  = 7
        InvLow  = 112
        InvHigh = 11}


implementation
```
{% endraw %}

## HYPERDO2.DOC

{% raw %}
```
                       PopText HelpSystem
                           Version 2.2
                         (For Turbo 5.5)
                               by
                        Brian K. Trotter


                  (C) 1989 Tone Zone Computing


             Distributed under the ShareWare System


Restrictions: Permission is given to freely copy and distribute
this program so long as there is no charge, and that it is not
added as an incentive to market another software or hardware
product. This program is NOT a public domain program, but is
being distributed under the "ShareWare" concept. Anybody may use
these programs, but only REGISTERED USERS may actually
incorporate the units HYPERHLP,HYPFW, HELPDEF and SCREENIO. Users
are asked to send a registration fee of Twenty-Five
Dollars ($25.00) to:
              Tone Zone Computing.
              P.O. Box 414
              Bishop, CA 93514
Registration entitles users to freely incorporate POPTEXT into
their Turbo Pascal programs. By the way, there are several
signatures embedded in the code, so I can verify my copyright
against non-registered users.

Disclaimer: This software and accompanying documentation files
are provided "AS IS" without warranty of any kind. Further, Tone
Zone Computing does not Warrant, guarantee, or make any
representations regarding the use, or the results of use, of this
software. All risk taken in the use of this software is assumed
by you, the user and Not Tone Zone Computing, nor any software
club distributing this software. Due to the nature of this
software (programming aid), it should be pointed out that
improper use of this software can lead to unexpected results.
You, the user assume all responsiblity for these results.

That should satisfy my lawyers. Now on to the more important
stuff.

I.  The Purpose of POPTEXT.
    Too often, especially in the ShareWare market, documentation
becomes scarce, or users become loath to pass on needed
documentation files. Often times, programmers fail to properly
document files out of either neglect or laziness. One feature of
several commercial programs in addition to outstanding
documentation is the POP-UP HELP WINDOW. Excellent examples of
this are found in Turbo Pascal 4.0 and above, Wordstar 2000+, and
Novel LAN services. With or without the manual, the user has some
reference available on-line.
    POPTEXT is an includable UNIT for Turbo Pascal programmers to
prepare similar help systems.


II.  Features of POPTEXT.
    POPTEXT features an easy to use editor, a unit to include in
Turbo 5.5 programs and three bonus units, including some fast
writing routines, routines to enhance CRT, and a unit with all 
of the key definitions.
    The POPTEXT system features Context sensitive help, Window
linking, and an easy to use Menubar.
    POPRES is a memory resident version of POPTEXT which can be
accessed through Int $6E

III.  About the Help window.
    Each help window is a record consisting of 15 lines and 15
links. The lines are displayed on the screen, and the links are
hidden in the background. In addition to being linked by line,
windows are linked by the Page Up and Page Down keys. Windows are
stored in a file with the extension .hlp, and are accessed
randomly by POPTEXT. It is possible to access any record which
already exists within the helpfile. Using the Editor, you can
create new files, and append the files up to 256 records each.

IV.  Using the Editor.
    Using the Editor is as simple as typing HELPED Plus the name
of the file you wish to edit. If you do not supply a filename,
HELPED will prompt you for one. If the file does not exist,
HelpEd will create a new file.
    Next, you are prompted with options to Edit, Link, Test,
Choose Another, and Quit.
    Edit - Allows you to place text in the windows. A few helpful
hints here. After you have selected the Page number, use the
Arrow keys (Up/Down) to select lines to Edit. Page/Up and
Page/Down allow you to browse through the pages.
        Important features of Edit.
                F2:  Switches you to linking Mode.
                F3:  Centers the Current line of text.
                Enter or any Alphanumeric:
                        Edit the current line.
                           (While Editing line, ESC erases line)
                ESC: Return to Main Menu.
    Link - Linking is the key to POPTEXT. To the right of the
help box, you will see a list of numbers in another box. Most
likely, in a new file these will all be zeroes. If you are
editing the help file which came with this program, you will find
several non-zero numbers. These represent links in the stack. The
file can be looked at as a stack of cards. The links allow you to
move to any portion of the stack. Links are line oriented, so
selecting the link at the user level is as easy as moving the bar
to the line containing the link and pressing enter. This is only
the first step. In the editing mode, you have to mark the text by
highlighting a keyword in the text line associated with the link.
To do so, press ^Q before you type the word to be associated, and
^W after. This will highlight the word. POPTEXT will properly
function only when both of these is done.
   There can be up to 15 links in each box. To establish a link,
move the cursor to the line you want linked and press enter.
Respond to the prompt with the number you want linked. Pressing
ALT-C clears all links. Pressing F1 returns you to the editor
mode.
    Test - Testing the helpscreen causes the program to activate
the very same subroutine which you will incorporate in your
program. In this manner, you can see how the help menu will look
and feel, as well as check the validity of the links.
    Choose Another File - Allows you to close the current help
stack and select another. If the selected file does not exist,
PopText will create it.
    Quit and Save - Rather self explanatory.



Section II:  Organizing a PopText Stack.
    I predict the most popular use for this program will be
context sensitive help. This is best demonstrated from the Turbo
Pascal Menubar. Whereever you are in the menubar, pressing F1
gives you help on that subject. This is because its helpfile is
indexed so that it calls up the exact heading needed. Another
popular use will be the Deck. The deck is used when it is
nessessary to show the user a large amount of facts in small
bits. You start at the top and browse through the cards at your
leisure. It is possible to provide vast amounts of data through
the deck.

I.  Context Sensitive Help.
    Context sensitive help is achieved when a program is able to
recognize what block of information is required to deliver to the
user, and automatically selects the appropriate card from the
deck.
    Example: You have Six menus with 4 to 9 options on each
menu. You wish to maintain expandability to up to 9 items on each
menu. (Menus should never have more that 9 items. If you are
building larger menus, consider breaking them up. It is much
easier on the user. The menus are all arranged by Topic. Pressing
F1 at a Menu Header (e.g. File Options, Compiler Options, Run,
Edit, etc) will call the card 10 times the menu number. On the
menu choices, pressing F1 will call 10 times the menu number plus
the number of the choice. In this way, the cards are indexed
automatically by topic, and easy to manipulate. Should further
information be needed past the first card of each topic, it would
then LINK to a card further away.

II. Random Access Deck.
    Random Access Decks are most usefull for teaching and
outlines. In addition to Context-Sensitive Help, Turbo Pascal
also has a Random Access Deck. It is called by pressing F1 again
after pressing F1. This places the user in a very sophisticated
menu where he can select from the topic of his choice. Some of
these are submenus, leading down to further topics. Since all who
will be using this program are Turbo Pascal Users, I suggest you
explore the Help system. It will give excellent insight into
Random Access Decks.
    Example: Information on various topics is stored in my
stacks. On the first card, I have a list of topics where if there
are more than 15 topics, I split the options over several decks
with a more option. (Usually, the first cards are all topic
cards, so pressing pagedown imediatly gives me more topics.
    On the first menu I select the topic "Cars". This moves me to
a card with a list of manufacturers. I select "Nissan". This
moves me to a list of models. I select "Sentra". I am now looking
at a card with information on the Nissan Sentra. In this manner,
I can arrange all my data. Another example of how this structure
works can be seen in Biology. Start your stack with the largest
topics. From there, work your way down to sub topics until you
reach the exact information you require.
    The help menu which comes with this program is an example of
a Random access stack, except that it leads you through the steps
required much more carefully than you normally might. This is to
better educate you. Remember, you are responsible for indicating
to the user the proper way to move about the stack.

    It is quite possible to combine a context sensitive stack
directly into a random access stack. The random access stack must
eventually dig into the context sensitive data as its final
results.





    Including POPTEXT in your programs.
    If you are a Turbo 5.5 user, you are ready to go. Simply add
the statement      Uses Hyperhlp;
  to your program.  There are several requirements.

         1. You must call function
OPENHELPFILE(S:String):Integer;
         2. Any time you want to use the help system, simply
invoke the procedure PopTextCard(NUM:BYTE); where num is the card
number you wish to begin on.
         3. If Openhelpfile returns a non-zero result, then
either POPTEXT was unable to find the file, or the file is bad.
         4. On exit, is is always wise to call the function
CLOSEHELPFILE:integer;
         5. You must at compile time have the units
              Keynames,
              Screenio,
              HLPFW,
              HelpDef,
              Hyperhlp; in the Unit directory or current drive.

Using POPRES:
        PopRes is designed for those who do not have Turbo Pascal
5.5. Nearly every language enables the user access to the 8088's
built in interrupt functions. POPRes is a memory resident program
which traps a normally unused interrupt vector ($6E) and causes
it to act just like unit HYPERHLP. (It is the unit HYPERHLP with
some surrounding code.) Load POPRES before loading the program
which calls the POPTEXT routines.

******* IMPORTANT NOTE:  DO NOT USE THESE INTERRUPT VECTORS
******* IF POPRES.EXE IS NOT INSTALLED!  YOUR SYSTEM WILL HALT!

        We advise caution in the use of these routines if you are
unfamiliar with the use of Interrupts.

        INT $6E  -  POPRES

        AH = 0  PopTextCard
                Entry conditions: AH = 0
                                  AL = Window to use.
                Exit conditions: None
                Activates the Help window beginning with card
number Al. Control is passed back to the caller when user escapes
help.

        AH = 1  OPENHELPFILE
                Entry conditions: Ah=1
                                  DS:DX = pointer to an ASCIIZ
string with filename of helpfile.
                Exit conditions
                   Al = 0  no error
                   Al = 1  file not found.

        Prepares the help window by assigning a filevar. Required
preparatory routine before calling PopTextCard.

        AH = 2  Closehelpfile
                Entry conditions: AH = 2
                Exit conditions: None

        Closes Help file and de-initializes Openhelpfile. Usefull
for changing help files.


        A sample program using POPRES is included.  Zhlp.asm.
        For your convenience it has already been assembled, but
you may alter it at your leisure and learn from it.




Licensing agreement.

    While this program is in the Shareware system, and no fee can
be charged for distribution (I make an exception for shareware
firms and user groups who may charge up to $5.00 for media and
time to copy only.), It is NOT, repeat NOT a public domain
program. Please have respect for the many hours which went into
POPTEXT. Those programmers who uses POPTEXT must appreciate the
work of programming. I hereby licence to REGISTERED USERS only,
the right to incorporate Screenio, HLPFW, HelpDef, and Hyperhlp
into thier programs. I only included the interface sections,
which are listed in the *.doc files. Currently, only Turbo 4.0 is
supported, and all other versions must use the memory resident
POPRES.EXE and interrupts.

Registration Fees and benefits.

    By registering this program, you entitle yourself to two
the latest version of this program, plus one upgrade. I promise,
there will be upgrades. In addition, you will receive other
programs on a shareware basis, plus a discount on registration of
future Tone Zone Computing Programs. Honest, there will be more.
Registered users may purchase the source code for POPTEXT for
$50.00.  This source code may be modified and distributed in
your EXEcutable files, but not distributed in source form.
Information on purchasing POPTEXT source will be sent to
registered users.
    Eventually, an assembly language version of POPTEXT will be on
the way which may be included in Assembly Language and 'C'
programs. Also on the way is ADVENTURESOFT, an adventure writing
language, an Object oriented database series, and many, many
utilities.
    If you wish to register, please send $25.00, check or money
order to
                   Tone Zone Computing
                   Rt 2 TP 13
                   Bishop, Ca 93514

                   Make Checks Payable to
                   Tone Zone Computing

    You will receive the latest version of POPTEXT as well as
proof of registration.  Please include the version number.

VERSION NUMBER 2.2


Note:  There is one known bug in the editor.  When you are
testing a stack and encounter a window with no links, the
editor's TEST utility will print garbage.  PopRES.EXE and
HyperHlp.TPU do not exhibit these problems.  This error will
be fixed soon, and a spot upgrade sent to registered users.
Also:  Turbo Pascal 4.0 Users.  PopText 2.1 is compiled and ready
for Turbo Pascal 4.0.  Please indicate on the registration
form that you are a TP4.0 user and I will send you a version
for 4.0 instead of 5.5.  Turbo 5.0 users will have to purchase
the source code for $50.00 and re-compile the units on their
machine.  Poptext 2.1, using Turbo 4.0 is available on
Random Access Information Network (503)-761-8100 (12/24,N,8,1).




Poptext (C) 1989 Brian K. Trotter
        (C) 1989 Tone Zone Computing.

Poptext 2.2 is written entirely in Turbo Pascal 5.5 and TASM 1.0

Turbo Pascal is a registered trademark of Boorland International,
Inc.

TASM - Turbo Pascal Assembler is a registered trademark of Boorland
International, Inc.

```
{% endraw %}

## HYPERHLP.DOC

{% raw %}
```
unit hyperhlp;

{*********************************************************}
{*** Interface Section for                      **********}
{*** Hyperhlp.TPU                               **********}
{*** (C) 1989 Tone Zone Computing               **********}
{*** Permission granted to registered users     **********}
{*** to incorporate into Turbo Pascal Programs  **********}
{*********************************************************}


interface


Uses Dos,          {Standard Boorland Unit}
     CRT,          {Standard Boorland Unit}
     SCREENIO,     {Windows, and Key Routines}
     HelpDef,      {Standard Definitions for HelpEd}
     HYPFW,        {Writing and Highlighting Routines}
     Keynames;     {Names of all the keys you could press.}


procedure PopTextCard(x:byte);
{**** Usage :  PopTextCard(nodenumber);
        Engages the help utility and enters the user into
        help screen 'x' }


function openhelpfile(s:string):integer;
{**** Usage : x:=Openhelpfile(filevar);
   Assigns the file (filevar) to be the current helpfile}

function closehelpfile:integer;
{**** Usage : x:=Closehelpfile;
    Closes the file and resets the POPTEXT system.}
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

                              Tone Zone Computing

POPTEXT  Registration Form.

Please print this form and fill it out if you wish to register
Poptext.


Name                  ________________________________
Company(Optional)     ________________________________
Address               ________________________________
                      ________________________________
                      ________________________________

Enclosed is $25.00  (Check / Money Order) Circle One.
Please do not send cash.


                PopText Version Number  _______
                (See POPTEXT.DOC)

        Where Did you get POPTEXT

        Friend          ____
        Stole it        ____
        Bulletin Board  ____
           (Which One?)  ___________________________________________
        Users Group     ____
           (Which One?)  ___________________________________________
        ShareWare Dist. ____
           (Which One?)  ___________________________________________


        I Program in the Following Languages
        _________________________________________________________
        _________________________________________________________
        _________________________________________________________

Please send this form with check or money order payable to

                Tone Zone Computing
                P.O. Box 414
                Bishop, CA  93514

You will be sent a reciept, a distribution disk, a registration
number, and the next upgrade as it is written.

















          Where Innovation and Logic Join Hands to Create Excellence


```
{% endraw %}

## SCREENIO.DOC

{% raw %}
```
Unit ScreenIO;

{***********************************************}
{**** Unit Screenio                         ****}
{**** Extra Goodies For Unit CRT            ****}
{**** (C) 1989 Tone Zone Computing          ****}
{***********************************************}

Interface
Uses Dos,Crt;

Const T:Byte = 7;
      C=1;

      NoBorder   = 0;     {Passed to Swindow to determine the border}
      Bars       = 1;
      DoubleBars = 2;
      Solid      = 3;
      ThinSolid  = 4;
      Dots       = 5;
      Dense      = 6;
      Pack       = 7;

      Normal:Byte = 7;
      CursorOffFlag:Boolean = False;

Var ScanCode:Byte;






{*****************************************************************}
{****** Replacement procedures for  CRT                      *****}
{*****************************************************************}

Function KeyPressed:Boolean; {Determines if a key is waiting.}
Function Inkey:Char;         {Reads a key without display}
Function KeyScan:Char;       {Reads a key, only if a key is waiting}

{If Inkey returns a 0 - then the character is an Extended character,
 The scancode is stored in the byte variable ScanCode;}

{KeyScan reads a key only if a key is waiting.  If there is no key in
the buffer, it returns a #255}

{*****************************************************************}
{****************** Extra Goodies ********************************}
{*****************************************************************}

Function Sread(LocX,LocY,Colo:Byte):Byte;
{Returns the contents of screen Location LocX,LocY.  If you want the
text contents, use Colo=0, for the attribute, use Colo:=1;}

Procedure Swrite(LocX,LocY,Colo,What:Byte);
{Writes a character directly to the screen.  Uses The attribute Colo.
 Writes the character chr(What)}

Procedure SWindow(X1,Y1,X2,Y2,Border:Byte);
{Places a window on the with coordinates X1,Y1,X2,Y2 and border definition
as determined with above constants.  If border <>Noborder then the actual
text window will be X1+1,Y1+1,X2-1,Y2-1}

Function Calculate_Offset(Lox,Loy,Clo:Byte):Integer;

Procedure CursorOn;     {Turn the Cursor on}
{Turns the Bios cursor off}

Procedure CursorOff;    {Turn the Cursor off}
{Turns the Bios cursor on.}

implementation



```
{% endraw %}

## TSRDEMO.ASM

{% raw %}
```
Page 60,132

;  Zhlp.asm
;  Poptext 2.1
;  Copyright (c) 1989 Tone Zone Computing
;
;  A test of the memory resident feature of Poptext





Code Segment Byte Public


     Assume Cs:Code,SS:Stack;

JMP    Entry;
        Copyright  Db 'POPRes Testing Routine'
        ByWho      Db '(c) 1989 Tone Zone Computing',13,10,'$'
        Filename   Db 'Poptext.hlp',0,'$'
        Error1     Db 'Error: Unable to Start Poptext$'

Entry:     Push CS                  ;Initialize Data Seg
     POP   DS                       ;
     Assume DS:Code
     MOV   DX,Offset Copyright      ;Copyright Notice
     MOV   AH,9                     ;
     INT   21H                      ;
     PUSH  CS                  ;
     POP   DS                       ;
     Assume Ds:Code
     MOV   DX,Offset Filename       ;DS:DX points to Filename
     MOV   AH,02                    ;OpenHelpFile(Filename);
     INT   6EH                      ;Call POPTEXT
     CMP   AL,00                    ;Is Return OK?
     JNZ   BADFile                  ;OOPS
     MOV   AH,01                    ;We want to use the help
     MOV   AL,01                    ;PopTextCard(1)
     INT   6EH                      ;Call POPTEXT
Closeall:
     MOV   AH,03                    ;CloseHelpFile
     INT   6EH                      ;Call POPTEXT
     MOV   AH,4CH                   ;Exit
     INT   21H                      ;Call MSDos
BadFile:
     MOV   DX,Offset Error1         ;Display Error Message
     MOV   AH,09                    ;
     INT   21H                      ;Call MS-Dos
     MOV   AH,4CH                   ;Leave
     INT   21H                      ;Call MS-Dos

Code Ends

Stack Segment Word Stack

  Stackfill  Dw 10000 dup(?)

stack ends

End

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1935

     Volume in drive A has no label
     Directory of A:\

    FILE1935 TXT      2073  12-28-89   4:03p
    FILES    TXT      1057   9-12-89   8:39p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   3:16a
    PKXARC   COM     12242   4-27-87
    POPTXT21 ARC     68070   8-21-89   2:45p
    POPTXT22 ARC     72822   8-21-89   2:45p
    READ     ME       1888   8-21-89   2:44p
            8 file(s)     158730 bytes
                          158720 bytes free
