---
layout: page
title: "PC-SIG Diskette Library (Disk #528)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0528/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0528"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEW YORK WORD"

    NEW YORK WORD is a powerful word processor that allows split-screen
    editing, movement of text between windows, and creation of macros (to
    perform functions with just a few keystrokes), and footnotes.  It also
    features automatic table of contents, automatic index generation,
    automatic hyphenation, and mail merge.  This shareware package is more
    powerful than some retail word processors.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EUROPE.DOC

{% raw %}
```
                                                April 17, 1987

To our European users,

   This version of New York Word (version 2.2) contains support for
foreign language characters. Here are a few things that you should
know in order to use the European character set :

  1) To put a European character into your text, press the ALT Q
key. This invokes the <QUOTE CHAR> command. On the status line,
you will see the message "QUOTE". Hold the ALT key down, and type
the 3-number sequence on the numeric keypad which corresponds to
the character you want.

  2) New York Word reserves the extended ASCII characters above
220 for its own use. However, some of you need to use the beta-sign
instead of writing "ss". If you need this, you will need to do three
things :
    a) In the WPDEFAUL file, put the line
         tr 128=225
       (This says that when you insert the character with the
        ASCII value 128 into your file, the character with the
        value 225 should appear on the screen. This is the
        beta sign.)
    b) In the .PRT file for your printer, you must put the line
         tr 128=xxx
       where xxx is the sequence you must send to your printer in
       order to print a beta-sign.
       (This says that when the character 128 is printed out, the
       control sequence xxx should be sent to your printer.)
    c) When you want to put a beta-sign in your text, press the
       ALT Q key, hold the ALT key, and press 1,2,8 on the
       numeric keypad.

If you need access to the character 128, you can change the "dummy"
character to another value (like 144).

If you have any questions, you can write to me, but please enclose
an international reply coupon.

                                                Sincerely,
                                                
                                                
                                                Marc Adler
                                                Magma Software Systems
```
{% endraw %}

## FILES528.TXT

{% raw %}
```
Disk No:  528
Program Title:  NEW YORK WORD version 2.30
PC-SIG version: 2.5
 
NEW YORK WORD is a powerful word processor that allows split- screen
editing, movement of text between windows, the creation of MACROS to
perform functions with just a few keystrokes, footnotes, automatic
table-of-contents, index-generator, automatic-hyphenation, mail merge,
and a programming language.  A user supported package more powerful than
most retail word processors.
 
Usage:  Word Processing
 
Special Requirements:  Two floppy disk drives.
 
How to Start:  Type GO and (press enter).
 
Suggested Registration:  $45.00
 
File Descriptions:
 
ARCE     COM  Unscrunching program.
CHANGES  23   List of upgrade made in new version.
EUROPE   DOC  Documentation for EUROPE.
FINSTALL BAT  Installation batch file for floppy disks.
INSTALL  BAT  Hard disk installation batch file.
INSTALL  DOC  Documentation for install batch files.
KEYCHART      Listing of keyboard commands for NYW.
MANUAL        Manual for NYW.
NYWHELP  ARC  Archived help menus.
NYWORD23 ARC  Archived NYW program and other related files.
PCWTONYW ARC  Archived PC-Write to MY Word file.
PRINTER  DOC  Printer documentation.
READ     ME   Read me file.
REGISTER DOC  Registration form.
 
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
║                  <<<<  Disk #528 NEW YORK WORD  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Welcome to NEW YORK WORD version 2.30. To find out info about           ║
║ installing the program on your system, type the READ.ME file. If you    ║
║ have a hard disk system, you must use the file INSTALL.BAT. If you      ║
║ have a floopy system, you must use the file FINSTALL.BAT.               ║
║                                                                         ║
║ If you have trouble installing the program, please call the PC-SIG      ║
║ technical service department.                                           ║
║                                                                         ║
║ If you register, you also get the speller, keyboard remapping           ║
║ facility, and the New York Word printed manual (102 pages). Send a      ║
║ check for $45.00 + $2 shipping ($7 overseas) to :                       ║
║                                                                         ║
║               Marc Adler                                                ║
║               138 - 23 Hoover Ave.                                      ║
║               Jamaica, New York  11435                                  ║
║                                                                         ║
║ The registration form is in a file called REGISTER.DOC.                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
           INSTALLATION INSTRUCTIONS FOR THE NEW YORK WORD
                             VERSION 2.2

    The  NYW  package is stored in a special archived format. In order
to de-archive the files, you need either  the  public  domain  utility
called ARC (version 5.1 or later) or  ARCE.  These  utilities  can  be
downloaded from virtually every bulletin board in the country. 

    There   is   a   batch   file  on  the  distribution  disk  called
"INSTALL.BAT". Put your NYWord disk in disk A  and  type  "A:INSTALL".
The  installation procedure assumes you have a hard disk named "C" and
that  you  want  to  install it on drive C. If you have a floppy drive
system, then use the file called FINSTALL.BAT. 

    The  INSTALL.BAT file will create a subdirectory on drive C called
\NYW.  In  this  directory  will  be  placed  the  executable  program
(WP.EXE),  the  help  files (NYWHELP.XX), some text files (*.DOC), and
the printer configuration files (*.PRT). If you are a registered user,
then you will  receive  the  mail  merge  program,  the  multi  column
utility,  and  possibly some other utilities. The INSTALL program will
make subdirectories for these too (\NYW\NYWMAIL, \NYW\MULTICOL).

    Among the extracted files are three files which are important (but
not required) in order to configure your NYW environment. These  files
are : 

  1) WPDEFAUL  -  default values for system configuration
  2) WPFORMAT  -  default values for format block number 0
  3) WPPRMENU  -  default values for the printer menu

    As  of this date, these three files should be placed in any direc-
tory in your search path, or in a directory which you will ALWAYS  use
for  word  processing.  At  a later date, I may add a parameter in the
WPDEFAUL file which lets the user specify  a  search  path  for  these
files. 

    Although you can alter the values of the parameters in these files
without reading the manual, it's recommended that you read the  manual
and  have  a little bit of practice with NYW before modifying them. In
each file, however, there is some help information.

*** REMEMBER - IF YOU MODIFY ANY OF THESE FILES WITH NYWORD, ***
***            YOU MUST SAVE THEM IN ASCII                   ***

    The executable file is called WP.EXE. This should be placed in one
of the directories which is included  in  your  DOS  search  path,  or
placed in your current directory. To find out what your current search
path  is,  type "PATH" from the DOS prompt. Refer to the MS/DOS manual
if you need help on changing your search path.

    Also  included are a few ".PRT" files. These files contain printer
codes for each printer. Read the file "SKELETON.PRT" to learn  how  to
build and modify your own .PRT file.

    The  first  line  of  your  "WPPRMENU"  configuration  file should
contain  the  name  of  your  printer.  For  instance, since I have an
Okidata Model 84, the first line of my  WPPRMENU  file  has  the  word
"oki84".  The  first time that you print a file, NYW will search for a
file that has the name of that printer, plus a ".PRT"  extension.  For
instance,  NYW  would  search  for  a file called "OKI84.PRT". When it
finds the file, it will read in the printer codes, and interpret them.

    You should put the ".PRT" file that  you  choose  in  one  of  the
directories in your search path, preferably the one that also contains
the configuration files.


                       THE NYWORD HELP FACILITY

    Among  the files that you will find in the NYWord package are help
files.  Each  help  file  is called "NYWHELP.xx", where xx is a one or
two-digit  number. These files should be stored either in your current
directory,  or in a directory which is in your DOS search path. If you
want to store these files in a subdirectory called \NYW\HELP, then you
should add \NYW\HELP to your PATH.

    When you press the <HELP> command (the ALT H key), NYWord searches
all of the directories in your DOS  search  path  for  a  file  called
"NYWHELP.0". This file contains the text for the main help  menu,  and
can be changed by you if you want (see below). When NYWord finds  this
file,  it  will  display it on the screen, and then prompt you for the
help selection. 

    To read a help file, type the number next to the  help  topic  you
want  to  view.  NYWord  will then look for a file called "NYWHELP.nn"
where  nn is the number you just typed, and if found, will display the
file. After you view this file, NYWord will re-display the  main  help
screen and prompt you for the next selection.

CHANGING THE HELP FILES

    These  help  files  are  in  ASCII form, and their contents can be
changed by using any text editor available. If you  decide  to  change
it,  then  make  sure  that  you  save  your  changes  in  ASCII  form
(especially if you use a word processor  which  writes  out  files  in
their own format).

    You  can  add  your  own  help  files,  as  long  as  you  name it
"NYWHELP.xx", where xx is a one or two-digit number.  These  new  help
files should reside in the same directory as the other help files.

```
{% endraw %}

## ME.DOC

{% raw %}
```
                 A RECONFIGURABLE PROGRAMMER'S EDITOR
                           WITH SOURCE CODE

    ME is a high quality programmer's text editor written specifically
or  the  IBM PC. It contains features only found in the more expensive
programmer's text editors. These features include :

                           Multiple Windows
                         Column cut and paste
                     Line marking for source code
                         Regular Expressions
                        C-like Macro Language
                       Reconfigurable Keyboard
                      Capture  your DOS session
                 Run your compiler and examine errors
                 Comes with useful precompiled macros


                            FAST OPERATION

    A  common  complaint  with some of the more expensive programmer's
editors is the sluggish operation. Too many of  the  "basic"  commands
are implemented as macros, and virtual memory slows the operation even
more.  ME  is extremely quick, keeping all text in memory. As the cost
of memory decreases, and with most people  owning  at  least  512K  of
memory,  editing  large  files  is  no  longer  a  problem. As the new
generation of CPU chips emerge, most virtual memory operations will be
handled by the hardware, not by the software.


                        C-LIKE MACRO LANGUAGE

    New  commands  and  features may be added to the editor by writing
programs  in  its  macro  language.  The  language  resembles  C,  and
it's  extremely  easy  to  write  and  examine macros when you are not
dealing with a parenthesized language like LISP. The  macro  languages
comes  with a rich set of primitives for handling strings and changing
the  editor  environment.  ou can assign a macro to any keystroke. You
can even generate a macro from a keyboard macro.

    The editor comes with a macro compiler.  The  compiler  takes  the
macro source file, and produces an intermediate code file from it. The
intermediate code executes very quickly, and takes up little space.

    With  the  macro  language,  you  can  customize  your programming
environment for different languages and different compilers.


                          MULTI-FILE EDITING

    The  editor  allows you to keep as many as 12 different windows on
the screen simultaneously. Each window can contain a  different  file,
or  can  have  multiple  views  into the same file. Text can be easily
transfered between windows. You can choose any window, and enlarge  it
to the size of the whole screen for easier editing.


                         REGULAR EXPRESSIONS

     The  UNIX(TM)  operating  system pioneered the use of regular ex-
pressions in pattern matching. Regular expressions allow you to search
for a context, such as "all lines beginning with the  letter  a,b,  or
c", or "any occurence of two numbers followed by a letter". The editor
incorporates   regular   expressions  into  its  search-and-substitute
facility to allow powerful pattern matching.


                           SAFETY FEATURES

    To  prevent  a  loss  of  your file, there are two safety features
built in to the editor. After you save a file, the editor will make  a
backup  copy  of  the old version. Also, the user can enable an option
that dumps the current buffer out to a file after every n  keystrokes.
If  the  editing session terminates normally, then this temporary file
is erased, but if the system crashes, then you can recover your edited
file from this temporary file.


                          SOURCE CODE OPTION

    The source code option lets you see how text editors are  written,
and  gives you real-world applications of various data structures. You
will also learn how to write interpreters by  examining  code  to  the
macro  language  compiler  and  interpreter. 

    If you have a favorite set of macros, you can code the  macros  in
'C',  and  add them to the editor. This will make your macros run much
faster, and since you don't have to load them in, this will also  save
space.

    A unique advantage of the source code option is that many program-
mers  will  have the opportunity to examine the code, improve parts of
it, and add additional features. The best of  these  improvements  and
enhancements  will  be  incorporated into future releases, which, as a
registered source code user, you will receive updates for. 

    The code is written in C, and conforms to the ANSI standard.  This
allows  the  code  to  be compiled with any compiler that supports the
ANSI standard. A few of the string handling and input-output  routines
are written in 8086 assembly language for speed. 

    The source code option is perfect for OEMs and VARs  who  want  to
add a text editor to their applications.

END USER PRICES

Price for program and on-line documentation             $39.95
Price for editor & complete source code                 $94.95
Shipping & Handling                              US     $ 2.00
                                               Overseas $ 5.00

VARS and OEMS - please contact us. We have very favorable terms  which
would allow you to sell the editor with your own product line.


                       MAGMA SOFTWARE SYSTEMS
                            Marc Adler
                        138 - 23 Hoover Ave.
                      Jamaica, New York  11435
                                  
                         (718) 793 - 5670

Please make checks out to Marc Adler
```
{% endraw %}

## PCWTONYW.DOC

{% raw %}
```
        GENERATING NYWORD PRT FILES FROM PC-WRITE PR.DEF FILES

    The   success   of  the  New  York  Word  word  processor  in  the
"user-supported" software market has taken me quite  by  surprise.  It
seems  as  if many people are switching from their old word processors
to NYWord. It seems that a large  number  of  people  were  previously
using the PC-WRITE word processor, published by Quicksoft.

    PC-WRITE comes with a utility called MENUPRT.EXE which generates a
file called PR.DEF. The PR.DEF file contains configuration information
for  your  particular  printer.  NYWord  comes  with  several  printer
configuration files, all ending in a .PRT extension.  The  PR.DEF  and
the  .PRT  files  have  different  formats,  so the user who changes a
PR.DEF file to a .PRT file has a tedious job ahead.

    The enclosed files help change  a  PC-WRITE  PR.DEF  file  into  a
NYWord .PRT file. There are three files included in this package. They
are :

  1)  PCWTONYW.EXE - the executable program which generates a PRT file
from a PR.DEF file.

  2) X.BAT - a batch file to automate the process

  3) PCWTONYW.C - the C source code for the utility

    To generate a .PRT file, follow these steps :

  A. Use PC-WRITE's MENUPRT.EXE program  to  choose  the  printer  you
would  like  to  configure.  MENUPRT.EXE  will  generate a file called
PR.DEF in your current directory.

  B. Invoke the X batch  file  with  the  name  of  the  printer.  For
instance,  if  the  PR.DEF file contains information for a Brother H15
printer, give the command :

       X broth15

  C. A file called BROTH15.PRT will be generated. This is the  printer
configuration file to be used by NYWord.

  D.  NYWord  comes with a file called WPPRMENU. Change the first line
of this file to "broth15".

  E. Move the BROTH15.PRT file to the same subdirectory as your  other
NYWord configuration files.

    Enjoy the utility.

                                        Marc Adler
                                        Magma Software Systems
                                        138 - 23 Hoover Ave.
                                        Jamaica, NY  11435

```
{% endraw %}

## PRINTER.DOC

{% raw %}
```
                         CONFIGURING YOUR PRINTER

     When  NYWord  starts  up,  it  searches  your  disk  for  a file named
WPPRMENU. This file contains the default settings that will be used in  the
printer  menu that is displayed whe you print a document. The first line of
WPPRMENU contains the name of your printer. This name should  be  the  same
name  as the PRT file you use, MINUS the ".prt" extension. For instance, if
I have an EPSON FX-80 printer, I want to use the EPSON.PRT file which comes
with NYWord. Therefore, the first  line  of  my  WPPRMENU  file  should  be
"epson".  If you want to use a different PRT file, change the first line of
the WPPRMENU file and SAVE IT IN ASCII!!!! 

      A "PRT" file contains a list of control sequences which NYWord  sends
to  your  printer  in  order to print effects like underlining, boldfacing,
etc. An entry in the PRT file consists of a two letter sequence,  an  equal
sign,  and  a  control string. If you modify this file, you must SAVE IT IN
ASCII!!! NYWord comes with a file called SKELETON.PRT  which  serves  as  a
template  for  creating  new  PRT  files.  NYWord also comes with a program
called NYWPRT.EXE. This program is a form based program for  modifying  and
creating PRT files. 

CONTROL STRINGS

      A control string is a list of one or more bytes which must be sent
to your printer in order to have your printer perform certain actions.
Because your printer often needs control bytes which are not printable on
your screen, we use a certain notation to specify these characters.

      In addition to specifying regular characters, you can have the following
codes in your control string :

     ^A-^Z      - sends <CTRL> A through <CTRL> Z  (ASCII 1 thru 26)
     ^[, ^\, ^], ^^, ^_    decimal 27, 28, 29, 30, 31
     
     \nnn       - sends the decimal value nnn. For instance, \234 sends the
                  value 234 to the printer. 'nnn' can be up to 3 digits,

     \E         - sends the ESCAPE character (ASCII 27)
     \b         - sends a backspace (ASCII 8)
     \Z         - sends a zero (ASCII 0)
     \\         - sends a backslash

As  an  example, let's examine the control string that NYWord sends to
an EPSON printer in order to turn underlining on and off. We have  the
following two lines in the EPSON.PRT file :

    us=\E-\1
    ue=\E-\Z

    The  "us"  parameter  means "underline start". The bytes we send to the
EPSON to turn underlining on are an ESCAPE (\E), a minus sign (-), and  the
ASCII value 1 (\1). To turn underlining off, we send ESCAPE, minus, ASCII 0
(\Z). 

    As  another  example,  the  control string \E1G^F\237 would send to the
printer a decimal 27,  decimal  49  ('1'),  decimal  71  ('G'),  decimal  6
(^F), and decimal 237 


FONT INFORMATION

You  You  can  have a choice of 26 fonts, labelled 'a' through 'z'. The two
letter sequence for a font starts with the letter 'F' followed by the small
letter label. For example, the sequence "Fb=\E&(Osl"  defines  the  control
sequence that's sent to the printer to change to font 'b'. 

    If  your printer is capable of less than 26 fonts, then just define the
fonts needed. You do not need to label the fonts starting with  the  letter
'a'. For instance if your printer can only print italics and no other font,
you  can  define "Fi" to be the control code to put your printer in italics
mode. When you enable the font by using <EFFECTS>  then  respond  with  the
letter 'i' when asked for the name of the font. 

HOW TO PRINT LINE GRAPHICS

    The  <GRAPHICS  MODE>  command  (the <CTRL> G key) puts you into a mode
where you can draw line graphics. There are 11 different  graphics  charac-
ters  that you can print out. NYWord uses fonts A through K (that's capital
A through K) to contain  the  control  sequences  which  draws  these  line
graphics  on  your  printer.  The  following table lists the correspondence
between the two letter parameters and the line graphic  which  the  control
sequence draws :

                FA - top left corner
                FB - top right corner
                FC - botton left corner
                FD - bottom right corner
                FE - horizontal line
                FF - vertical line
                FG - intersection
                FH - top tee
                FI - bottom tee
                FJ - left tee
                FK - right tee

    Some  printers (or some memory resident programs) let you print the IBM
extended  ASCII  character  set.  If  yours does, then all that needs to be
specified in each control sequence is the ASCII value of the  graphic.  For
instance,  the  extended  ASCII  character 180 is the right tee graphic. In
this case, you would have the line "FK=\180" in your PRT file.

HELP

    If you are desperate, MAGMA SYSTEMS will configure your printer for you
for a modest fee. Contact us for details.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                  NEW YORK WORD REGISTRATION FORM

Date _________                                      Invoice No. ______

Purchased from :
  Marc Adler / Magma Systems
  15 Bodwell Terrace
  Millburn, New Jersey  07041


NAME    ___________________________________________________

ADDRESS ___________________________________________________

        ___________________________________________________
        
CITY    __________________   STATE __________  ZIP ________



Product                  Qty            Unit Price       Total Price

NYW Word Processor                         45.00

Sales Tax (NY residents add 8 1/4 %)

Shipping & Handling                         3.00
(Overseas)                                 10.00
                                                        ______________
 
Total Amount


Please fill this part out so we can improve on future versions.

What kind of printer do you use?


What features would you like to see put in New York Word?




What features need to be improved in the current version?




Where did you hear about New York Word?



--------------------------------------------------------------------------
* Please make checks payable to Marc Adler
  All checks *must* be payable in US dollars on a US bank. All checks not
meeting this requirement will be trashed. Sorry....
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0528

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      5424   9-10-86   7:46p
    CHANGES  23       7976  11-04-88  11:45a
    EUROPE   DOC      2033   4-16-87   9:37p
    FILES528 TXT      1390   1-11-89   3:56p
    FINSTALL BAT       904  12-09-88  11:15a
    GO       BAT        38   5-26-87   5:30p
    GO       TXT      1618   1-06-89  12:02p
    INSTALL  BAT      1399  11-04-88   4:25p
    INSTALL  DOC      5180   4-28-87  11:55a
    KEYCHART          3546  11-04-88   4:32p
    MANUAL           96691   5-19-87   9:30p
    NYWHELP  ARC     22197   5-12-87   8:30a
    NYWORD23 ARC    167714  11-14-88  11:59a
    PCWTONYW ARC     14935  12-14-86   4:01p
    PRINTER  DOC      4982   5-28-87  10:41p
    READ     ME       8113  11-14-88   4:50p
    REGISTER DOC      1387  11-04-88   4:27p
           17 file(s)     345527 bytes
                            9216 bytes free
