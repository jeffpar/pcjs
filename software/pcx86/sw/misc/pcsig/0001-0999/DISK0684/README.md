---
layout: page
title: "PC-SIG Diskette Library (Disk #684)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0684/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0684"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAGE ONE"

    The PAGEONE programs provide a powerful, flexible document processor for
    small to medium size files where the major emphasis is print formatting.
    PAGEONE is a hybrid type of wordprocessor; it contains many features
    either not found on many large wordprocessors (for instance, a
    chain-printing device) or so difficult on them that most people do not
    use them (line oriented formatting with embedded commands).
    
    It is especially useful for making letters, flyers, documents and forms
    of all types; there is even a "typewriter" mode for dashing something
    off.  It is easy to learn, and over 90% of its instructions are
    displayed on the screen at all times alongside the work processed.  For
    greater efficiency of operation, formatting is line oriented and editing
    capabilities are fully screen oriented.
    
    System Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $34.00
    
    File Descriptions:
    
    CODES    EXE  Sub-program accessed by PAGEONE
    DEMO     TXT  Demonstration file of PAGEONE features
    ???????? DAT  Data files for running various printers (3 files)
    FILECONV COM  File conversion from Wordstar to ASCII.
    FILESOND ISK  Text file listing the major files on this disk
    PAGEONE  COM  Main program file
    PAGEONE  DOC  The operators manual
    PRINFILE COM  Menu driven print queue utility
    README   TXT  Instructions for starting program
    STYLES   DOC  Documentation ad registration form for STYLES.EXE
    STYLES   EXE  Sub-program accessed by PAGEONE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.TXT

{% raw %}
```
                                                                               
                                     THIS                                      
                                     IS A                                      
                              DEMONSTRATION FILE                               
                                    OF SOME                                    
                          OF THE FEATURES OF PAGEONE.                          
-------------------------------------------------------------------------------
                                    You can                                    
                                                        place text on the right
or on the left.                                                                
                           or perhaps in the center?                           
      You   can   justify   both  sides  of  long  lines  out  to  the  margins
like  this  or  you  can take a couple of short words and set them on each side
like                                                                      this.
or                                  even                                  three
            Using margins of 10 left and right I am going to show you          
          how  you  could  hang  text  around  a  photograph or other          
          illustration.  Now  changing  the margins to 10 left and 40          
          right.   This  will  leave  a                                        
          place  within the text for an                                        
          illustration  to go. When you                                        
          reach   the  bottom  of  your                                        
          illustration,   just   return                                        
          the  margins  to  their  original settings and you have it.          
          -----------------------------------------------------------          
    You  can  even set a very                                                  
narrow  column  at  any place                                                  
on  the  paper width you wish                                                  
by  just  varying  the margin                                                  
settings.  If  you  use large                                                  
words  it  is better to hyph-                                                  
enate  or  you  may  find you                                                  
have two words on a line with                                                  
a  lot  of white space in be-                                                  
tween                   them.                                                  
-----------------------------                                                  
                                       A                                       
                                      new                                      
                                   and it's                                    
                                  a different                                  
                               way to make your                                
                            print-outs really stand                            
                         out from all the rest of the                          
                       ordinary ho-hum sort of bland and                       
                     not very interesting reports that you                     
                 get on your desk every day. It's PAGEONE the                  
             document processor by NoRoSco Research, Bakersfield.              
                                      ***                                      
                                      ***                                      
                                Why settle  for                                
                                less  than  the                                
                                very, very best                                
                                in    software!                                
                                                                               
N  N  OOOO  RRRR  OOOO  SSSS  CCCC  OOOO                                       
NN N  O  O  R  R  O  O  S     C     O  O                                       
N NN  O  O  RRRR  O  O  SSSS  C     O  O  NOROSCO                              
N  N  O  O  RR    O  O     S  C     O  O  RESEARCH                             
N  N  OOOO  R R   OOOO  SSSS  CCCC  OOOO                                       
                   software development -:- pc consultant -:- computer services
-------------------------------------------------------------------------------
 Box 1508 -:- Bakersfield, California -:- 93302-1508 -:- Phone: (805) 833-0266 
-------------------------------------------------------------------------------
                                                        "Filling the niche.....
                                                        at a reasonable price."
                                                                               
```
{% endraw %}

## FILES684.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  684  PAGEONE                                                v1
---------------------------------------------------------------------------
The PAGEONE programs provide a powerful, flexible document processor for
small to medium size files, whose major emphasis is print formatting.
 
CODES    EXE  Sub-program accessed by PAGEONE
DEMO     TXT  Demonstration file of PAGEONE features
???????? DAT  Data files for running various printers (3 files)
FILECONV COM  File conversion utility that strips high bits from Wordstar
              type files and breaks them up for PAGEONE.
FILESOND ISK  Text file listing the major files on this disk
PAGEONE  COM  Main program file
PAGEONE  DOC  The operators manual
PRINFILE COM  Menu driven print queue utility
README   TXT  Instructions for starting program
STYLES   DOC  Documentation ad registration form for STYLES.EXE
STYLES   EXE  Sub-program accessed by PAGEONE
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES684.TXT

{% raw %}
```
Program name: PAGEONE  Document Processor  Version 1.01
 
Author name:  Roy Scott and Norene Scott DBA NoRoSco Research
Address:      P. O. Box 1508
              Bakersfield, California 93302-1508
 
Telephone Number:
 
Suggested Donation: $34.00, which brings you the Advanced Version 4.01pc that
supports a color monitor with user choice or default colors, embedded printer
codes in text files, extended directory features, and many more, plus updated
documentation, telephone support, and product updates at reasonable cost.
 
 
Program Description:
 
PAGEONE  is  a hybrid type of word processor, specially designed to process
small to medium sized documents.  It contains many features either not found on
many large word processors,  or so difficult on them that  most people do not
use them. It is especially useful for making letters, flyers, documents and
forms of all types.  It is easy to learn, and over 90% of its instructions are
displayed on the screen at all times alongside the work processed.  For greater
efficiency of operation, formatting is line oriented and editing capabilities
are fully screen oriented.
 
PAGEONE was written in Pascal, then compiled under Turbo Pascal, and so oper-
ates directly from DOS. This results in both speed and a saving of memory.
It is compatible with memory resident programs, as well.
 
Minimum  system  requirements  for using this program are: IBM PC or compatible
type  computer  with  minimum  of  128K  bytes  of  memory, DOS 2.0 or greater,
an 80 column monitor and 1 floppy drive. A printer is recommended.
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
```
{% endraw %}

## PAGEONE.DOC

{% raw %}
```
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                    PAGEONE                                    
                              Document Processor                               
                                Version 4.02pc                                 
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                Copyright 1986                                 
                         by Roy Scott and Norene Scott                         
                                                                               
                                Distributed by:                                
                                                                               
                               NoRoSco Research                                
                                P. O. Box 1508                                 
                      Bakersfield, California 93302-1508                       
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                               TABLE OF CONTENTS                               
                                                                               
                                                                               
                                                                               
                                                                               
          Notices...................................................1          
                                                                               
          Overview of PAGEONE.......................................2          
          Installing PAGEONE........................................2          
                                                                               
          Function Keys.............................................3          
                                                                               
          Color Options.............................................4          
          Creating a new document...................................4          
                                                                               
          Editing existing documents................................5          
          Printing from disk........................................5          
          Memory Printing...........................................5          
                                                                               
          Re-editing a document.....................................6          
          Disk Directory............................................6          
          Exiting PAGEONE...........................................6          
          Dos shell.................................................6          
          Printer notes.............................................6          
                                                                               
          Formatting notes..........................................7          
          File specifications.......................................7          
                                                                               
          Pull down menu............................................8          
          Character strings.........................................8          
          Line delete...............................................8          
          Line insert...............................................8          
          Character insert..........................................8          
          Character delete..........................................8          
                                                                               
          Deformatting..............................................9          
          Cut & paste...............................................9          
          Margins...................................................9          
                                                                               
          Screens..................................................10          
          Other functions..........................................10          
          End of line markers......................................10          
          Saving files.............................................10          
                                                                               
          Typewriter mode..........................................11          
          Skeleton files...........................................11          
          Chaining print files.....................................11          
          Sample session...........................................11          
          Incompatibilities........................................11          
                                                                               
          Trademarks...............................................12          
          License and warranty.....................................12          
                                                                               
          Bug Report...............................................13          
          Registration form........................................13          
                                                                               
                                                                               
                                                                               
          This manual copyright (c) 1986 by Roy Scott & Norene Scott           
                                                                               
                                       i                                       
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                    NOTICE:                                    
                                                                               
       This version of PAGEONE may be freely copied and shared with your       
   friends, it is shareware. It may not be used for any commercial purpose.    
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                        VERSIONS OF PAGEONE AVAILABLE:                         
                                                                               
                     4.02pc version distributed by PC-SIG                      
            3.01 for TRS-80 Models I & III (4 runs in the III mode)*           
                  5.00pc current IBM and compatibles version                   
                        (*a limited subset of PAGEONE)                         
                                                                               
                                                                               
                             INVISIBLE CHARACTERS:                             
                                                                               
If  you  are  using  text  files  created by another word processor and you are
having trouble with them, the problem is probably imbedded  control  characters
or  'high  bit'  characters  in  the  text. If this sort of problem arises, use
the provided utility program 'FILECONV.COM' to process  the  file  for  use  by
PAGEONE.                                                                       
                                                                               
Please be aware that if the lines in the file are longer  than  79  characters,
PAGEONE  will  truncate  them  to 79 characters. We cannot gaurantee that files
from other text systems will work well with PAGEONE.                           
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
first printing--February 1986                                                  
                                    page 1                                     
                                                                               
                                                                               
                                                                               
                                                                               
PAGEONE  DOCUMENT PROCESSING SYSTEM FOR TANDY 1000, 1200,IBM PC AND COMPATIBLES
                  Copyright 1986 by Roy Scott & Norene Scott                   
           Distributed by Norosco Research--Bakersfield, California            
                                                                               
                                                                               
                                                                               
                                                                               
                           1.0--OVERVIEW OF PAGEONE                            
                                                                               
PAGEONE  is a specially designed document processing system for small to medium
sized  jobs. It contains many features that are either not found in many of the
large  word  processing  systems,  or  these  features  in  such systems are so
difficult  to  learn  that  most people do not use them. PAGEONE creates a file
that  is  one letter size page (8.5 x 11 inches) long. This makes it especially
useful for making letters, flyers, documents and forms of all types. PAGEONE is
very easy to learn as over 90% of the instructions for its use are displayed on
the screen along with your work at all times.                                  
                                                                               
PAGEONE  is  a  hybrid  type  of word processor, with the formatting being line
oriented  for great flexibility and full screen editing for greatest efficiency
of operation.                                                                  
                                                                               
Since  a normal printed page has 66 lines and the maximum that can be displayed
on  a normal screen is 25 lines, some method of simulated screen display had to
be  devised.  This was done in the following way: The 66 lines per printed page
have  been broken down into 3 video screens, each with 22 lines of 80 character
text.  The  bottom  two  lines  on  the screen are used as (24) status and (25)
information  lines.  Line  23,  which is not used by text, is used as a message
area   for  updated  information  about  line  length,  lines  being  full  and
and   end-of-file   being   reached.   Each   line   will  hold  79  characters
maximum.  The  79  character  maximum  was chosen not only because odd numbered
lines  center  and justify better, but with some older model printers that have
an  80 character buffer, an 80 character line results in double spacing. Spaces
in  the  file  are  represented by small graphics blocks that will disappear as
you  proceed  over  them, they are for visual use only. As you reach the end of
each  video screen, you will automatically advance to the next screen. This all
sounds  complex,  but  with just a little use it will become easy. What you see
is what you get (wysiwyg).                                                     
                                                                               
PAGEONE  is  written in Pascal, then compiled using the Turbo Pascal system, so
it operates directly from your DOS. This results in a saving in memory as Basic
does  not have to be active in the system, and it is fast! To activate PAGEONE,
simply type PAGEONE from the DOS ready prompt, after loading any other resident
programs.                                                                      
                                                                               
Minimum  system  requirements  for using this program are: IBM PC or compatible
type  computer  with  minimum  of  128K  bytes  of memory*, DOS 2.0 or greater,
an 80 column monitor and 1 floppy drive. A printer is recommended.             
                                                                               
As  a  point  of  interest,  please  note  that  all  documentation for PAGEONE
was created with PAGEONE.                                                      
                                                                               
*If DOS SHELL feature invoked, 256K will be needed for most applications.      
                                                                               
                    1.1--INSTALLING PAGEONE ON YOUR SYSTEM                     
                                                                               
PAGEONE   is  distributed  on  a  standard  9  sector  MSDOS  format  diskette.
For  use,  all  that  needs  to  be  done is transfer the files on the diskette
to  a  DOS  diskette  using  the  commands that are appropriate to your system.
Then store your original diskette is a safe place in case of need.             
                                                                               
                                    page 2                                     
                                                                               
                                                                               
                                                                               
                                                                               
TURBO  LIGHTNING  from Borland International works very well with PAGEONE. Load
it prior to PAGEONE and pull down the enviornment section. Choose  one  of  the
environments  that  you  do  not  have  a  program for and modify it, naming it
PAGEONE. Change the key assignments to your system if necessary. The  following
changes  must  be  made  for  PAGEONE. Item "M" should be set to "screen", item
"N" to "050", and item "P" to item  "C"  on  the  secondary  menu.  Since  this
program  uses  alternate  key combinations there is no conflict with the normal
PAGEONE function key assignments.                                              
                                                                               
                      1.2--FUNCTION KEYS USED IN PAGEONE                       
                                                                               
            Material in the angle brackets < and > indicates a key.            
                                                                               
Following is a list of the function keys as they are used in PAGEONE:          
                                                                               
<F1> to delete a line, cursor must be on the first space of the line.          
                                                                               
<F2> or <enter> to place an end of line (EOL) marker. (see subfunction         
     list below)                                                               
                                                                               
<F3> to exit the edit mode, you will have the option to save your file.        
                                                                               
<F4> to create a string of characters horizontally. Any character on the       
     keyboard can be used in this string, the cursor must be on the first      
     space of the line.                                                        
                                                                               
<F5> to load or dump the cut & paste buffer. Cursor must be on the first       
     space of the line. First use marks the start as the line indicated        
     by the cursor, second use marks the end as the line above the line        
     indicated by the cursor. Place cursor on first space of the new first     
     line, and press <CTL><F5> to dump. The block will overwrite any text      
     that is under it, so use care.                                            
                                                                               
<F6> to set the margins (1, 2, 10, 0, etc.), cursor on the first space of      
     the line.                                                                 
                                                                               
<F7> to insert a blank line at cursor, cursor must be on first space of        
     the line.                                                                 
                                                                               
<F8> deformats a line. Removes all formatting that has been placed in the line 
     by the subfunctions of <F2>. The line can then be reformated as you wish. 
     The cursor must be on first space of the line. <CTL><F8> may be used to   
     deformat the entire file in memory. Cursor on the first space of file.    
                                                                               
<F9> get a directory listing, this version supports full pathnames, wildcards  
     and hard disk.                                                            
                                                                               
<F10>pulls down a function menu. Most PAGEONE functions can be done by using   
     this menu.                                                                
                                                                               
                             SUBFUNCTIONS OF <F2>:                             
                                                                               
<C> centers the line you are currently working on.                             
                                                                               
<J> justify the current line, out to the margins on both ends.                 
                                                                               
<L> or <enter> sets current line left flush on margin, results in what is      
    called "ragged right" composition.                                         
                                                                               
<R> sets current line flush on right margin, results in "ragged left"          
    composition.                                                               
                                    page 3                                     
                                                                               
                                                                               
                                                                               
                                                                               
                              USES OF OTHER KEYS:                              
                                                                               
                                                                               
Since  PAGEONE  is always in the overtype mode, character keys will replace the
character  or  space  under  the cursor. The unshifted arrow keys will move the
cursor  to  any  place  you  desire  on  the screen. The <control><right arrow>
keys will move the cursor to the beginning of the next line.                   
                                                                               
                                                                               
The  <enter>  key  is  used to terminate input only in the margin setting, file
handling,  color  monitor,  printer  ready  routines  and  end of line markers.
All other entries are immediate.                                               
                                                                               
                                                                               
The  <esc>  key  when pressed from within the edit screens will give you a help
screen that lists the functions available.                                     
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
The  editing  keys on your keyboard all work within PAGEONE. Thus you will find
that  <Tab>  will  move  you  over to the next even 10 spaces, <Backspace> will
move  you  back  one  space  and  erase,  <Delete>  will  remove  the character
under  the  cursor,  <Pgdn>  will  move  you  to  the  next video screen unless
you  are  on  the  last  one  and  <Pgup>  will  move you to the previous video
screen  unless  you are on the first one. <Insert> will put you into the insert
mode  and all input from the keyboard will be placed to the left of the cursor.
<Control><Pgup>  will  move  you  to  the first character of your document file
and <Control><Pgdn> will move you to the last character  in  the  file.  <home>
will move you to the first space in the line, <end> will move the cursor to the
first space past the last character in the line.                               
                                                                               
                                                                               
                                                                               
                              1.3--COLOR OPTIONS                               
                                                                               
                                                                               
                                                                               
When  you activate PAGEONE, you will first be asked if you have a color monitor
on.  If  you  do  you  will  then  be allowed to choose the colors for the main
background, the text on this background, the background of the two status lines
on  the  bottom  of  the screen, the text on them and the color of the messages
that  appear  in  the  message line and the border color. If you do not want to
change  the  colors  they  will  default to preset values. If you do not have a
color  monitor on, answer "N" to the first question and the system will default
to the black and white mode. Then the main menu will come up with your choices.
The following 7 sections explain each of the 7 menu options in detail.         
                                                                               
                                                                               
                                                                               
                  1.4--MENU OPTION 1, CREATING A NEW DOCUMENT                  
                                                                               
                                                                               
Choosing this option will clear all variables and file memory and set you up to
begin  the  creation of a new file. You will go to the edit screen and have all
options  at  your  command. Margins are initially set to 0 left and 0 right and
can  be changed on any line. It is important to leave the amount of blank lines
you wish to have on top and bottom of the file. If you wish to have three blank
line  at  the  top of the page and three blank lines at the bottom of the page,
                                                                               
                                    page 4                                     
                                                                               
                                                                               
                                                                               
                                                                               
start your text on line 4 and end it on line 63. You will note that on the left
side of the status line (24) at the bottom of the screen,  there  are  counters
for line, character and screen. Let these be your guide. When you exit the edit
screens you will have the option to save your file.                            
                                                                               
                                                                               
                                                                               
                                                                               
               1.5--MENU OPTION 2, EDITING AN EXISTING DOCUMENT                
                                                                               
                                                                               
                                                                               
                                                                               
Upon  choosing this option the screen will clear and you will be asked to enter
a  filespec for the file you want to edit. Filespecs follow MSDOS  conventions,
so if you are unfamiliar with them, read the book! If the file you ask  for  is
not  available or you enter the spec wrong, you will be prompted to correct it.
All functions are active in this option, the margins are set to 0 initially.   
                                                                               
                                                                               
                                                                               
                                                                               
It is important to remember when editing a file, to use the same margin setting
used  originally if you wish to have a uniform appearance should you reformat a
line. When you exit the edit screen you will have the option to save your  file
under a new name or <enter> to save back to the same file.                     
                                                                               
                                                                               
             1.6--OPTION 3, PRINTING A DOCUMENT DIRECTLY FROM DISK             
                                                                               
                                                                               
This  option  will  allow  you  to  print out a file directly from disk without
disturbing the file you are currently working on in  memory.  The  screen  will
clear  and  you  will  be  asked  for  the filespec that you wish to print. The
restrictions noted in section 1.5 also apply here. It is  very  important  that
the printer be turned on and actively on line for this option to work properly.
Set the printer on the actual first line of the page. PAGEONE files are  stored
in  formatted  form on the disk, so they will print out well using this option.
When printing is finished, you will be able to go back to the work file.       
                                                                               
                                                                               
*Note: in this PAGEONE version you have the option of choosing  to  print  more
than  one  copy  of  a document in either direct disk or memory print mode. The
large files created by the PRINFILE utility program  in  this  version  may  be
printed  by option 3, but cannot be edited by PAGEONE at this time. If you have
sufficient memory available, PRINFILE or STYLES can be called and used from the
DOS SHELL feature of the main menu.                                            
                                                                               
                                                                               
                1.7--OPTION 4, PRINTING A DOCUMENT FROM MEMORY                 
                                                                               
                                                                               
This is the printing method that you will probably use most  often,  as  it  is
quicker,  easier  and  will  allow printing over and over with changes in copy.
When you choose this option, the screen will clear and a  message  will  appear
requesting  that  you  ready  the printer for use. Set the printer on the first
line of the page. Upon termination of printing, you will be  returned  to  main
menu.                                                                          
                                                                               
                                                                               
                                    page 5                                     
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                1.8--OPTION 5, RE-EDITING A DOCUMENT IN MEMORY                 
                                                                               
This  option is very useful should you change your mind, or wish to create form
letters or other  documents  with  changes  to  each  between  printings.  Upon
choosing  this  option  you  will  be placed at the start of the current memory
file. All functions are active in this option and the file can  be  saved  upon
exit  if  desired. If there is no file resident in memory this option will have
the same effect as choosing option 1 on the main  menu  except  that  no  space
blocks  will be shown on the screen. If you prefer working without them you may
enter edit in this way.                                                        
                                                                               
                                                                               
                     1.9--OPTION 6, DISK DIRECTORY LISTING                     
                                                                               
Option  6  on  the  main  menu  will  give  you  a  directory  listing  of  the
directory  you  choose. Press <enter> for the current directory. Pressing <ESC>
will return you to the main menu.  This  option  supports  full  pathnames  and
wildcards.                                                                     
                                                                               
                        2.0--OPTION 7, EXITING PAGEONE                         
                                                                               
This  option  is  the  proper  way to exit PAGEONE. You will be returned to DOS
ready.                                                                         
                                                                               
                                                                               
                                                                               
                           2.0a--OPTION 0, DOS SHELL                           
                                                                               
Although it does not show on the main menu (to keep accidents from  happening),
you  may  enter  a DOS SHELL feature of PAGEONE by pressing <0> (zero). Once in
the shell, you may execute any DOS command or run any  program  that  you  have
sufficient  memory  for.  You may find that if your machine has 128K of memory,
that you may have some problems with this feature. The best  way  to  find  out
is by experimentation.                                                         
                                                                               
There  are  two error messages, FILE NOT FOUND and INSUFFICIENT MEMORY FOR THIS
OPERATION. Remember that if you are using a DOS version of less than  3.x,  you
must  either  have  path  commands entered or change the directory to where the
command or program is located prior to running it. To exit this feature,  enter
<Q> on the command line. You will be returned to the main menu.                
                                                                               
Both PRINFILE and STYLES can be called from this function.                     
                                                                               
                                                                               
                          2.1--SPECIAL PRINTER NOTES                           
                                                                               
                                                                               
PAGEONE  is  written  so  that almost any printer that has 80 columns will work
with it. It should even work well with serial printers as long as you  use  the
proper configeration.                                                          
                                                                               
Another  important  point  to remember is that the printer should be set to the
first blank line on the page, not the  first  print  line.  If  you  are  using
perforated  printing  paper, this means set the printer where it would print on
the first line after the perforation. If you are printing on single  sheets  it
may  not be possible to do this. In this case as an alternative, start creating
your print file on the actual first line of the file,  leaving  the  amount  of
blank lines you want (for top and bottom both) at the end of the file. Then set
your printer to start printing on the  first  PRINT  line  and  you  will  come
out right.                                                                     
                                                                               
                                    page 6                                     
                                                                               
                                                                               
                                                                               
                                                                               
Special  printer  commands  can be embedded in PAGEONE documents. The following
restrictions  apply.  Printer commands can only be placed in blank lines of the
document  or  in the left margins if there is room. Up to four of these command
sequences  can  be placed in a line. This means that printer commands cannot be
placed in full width lines (79 characters). The printer command must be started
on  the  first  space  of  the  line  and  have  the following form: .wwxxyyzz.
Thus  the command must start with a period (.) followed by eight digits then an
ending  period  (.).  Most  printer commands (you will find them listed in your
printer  book)  take the form of <esc> (27) followed by another two digit code.
The  command  to  disable  the  linefeed on a DWII printer is thus 2721. If the
function  you  desire has only one code, then the rest of the digits must be 0.
If  the  code desired is a single digit then it must be preceded by a 0. Thus a
printer  command  of  8  would be written as .08000000. As you can see the left
margin  must  be at least 10 for insertion of printer commands. These commands,
if inserted in the margins, must be placed after the line is formatted.        
                                                                               
                                                                               
                                                                               
                            2.2--LINE FORMAT NOTES                             
                                                                               
                                                                               
Please  note  that  you  start typing all lines at the left side of the screen.
Lines   are   formatted   using   the  subfunctions:  <J>  justifies  lines  by
adding  spaces  between  words so that the line is evenly spaced and out to the
margin  on  both  ends.  The  formula used for this is very fast and efficient.
It  will  even  spread  two characters to opposite sides of the page as long as
you  have  one  space  between  them. Do not leave any trailing spaces on lines
you  intend  to  justify.  Due  to  word  length  and column width constraints,
however,  it  is  recommended   that  if  you  use  narrow  columns,  that  you
occasionally  hyphenate  a  word  to  make for a more natural appearance of the
printed  copy.  Otherwise  you may find that if you use narrow columns and long
words, you may have two words on a line with a lot of space between them.      
                                                                               
                                                                               
The  subfunction  <C>  will  center  a line on the page. This works best if you
be  sure  to  have  an  odd number of characters in your line. The counter will
make  this  very  easy to do. Do not use leading or trailing blanks if you wish
your line to center well.                                                      
                                                                               
                                                                               
The  subfunctions  <L>  (or  <enter>)  and  <R> will set the line either to the
(L)eft  or  (R)ight margin of the line. No justification will be done, the line
will  be  moved  as  is.  This  can  sometimes  be used to create some dramatic
effects.                                                                       
                                                                               
                                                                               
                                                                               
                   2.3--FILE SPECIFICATIONS USED BY PAGEONE                    
                                                                               
                                                                               
PAGEONE  uses  the normal MS-DOS file specification conventions as put forth in
the  manual  from  Microsoft.  This  book  is  required  reading  for  any file
operations and if you do not have a copy by all means purchase one.            
                                                                               
                                                                               
                                                                               
The file specifications used are as follows:                                   
                                                                               
                                                                               
                                D:AAAAAAAA.BBB                                 
                                                                               
                                    page 7                                     
                                                                               
                                                                               
                                                                               
                                                                               
Where  A  indicates  an  up to 8 character file name, must begin with a letter,
numbers  are  allowed  after  the  first  character.  B  indicates  an  up to 3
character  extension  such  as .TXT for text. Must be preceded by a period (.).
D  indicates  a  drive  from  A  to  D and must be followed by a colon (:). All
items  in  the  specification  with  the  exception of A are optional, but make
for greater clarity when used. Full pathnames are supported under this  system.
The filename 'Q' without an extension must not be used in PAGEONE.             
                                                                               
                                                                               
                         2.3a--PULL DOWN FUNCTION MENU                         
                                                                               
Pressing <F10> pulls down a function menu that lists most of the  functions  of
PAGEONE.  To  use  it, use the arrow keys to place the highlighted bar over the
desired function and press <enter>.                                            
                                                                               
To exit the menu without executing a function, press <esc>.                    
                                                                               
Note that although you can set the block markers  from  this  menu,  the  block
copy function must be done by the <CTL><F5> key combination.                   
                                                                               
                                                                               
                  2.4--CREATING CHARACTER STRING HORIZONTALLY                  
                                                                               
You  can  dress up your documents or forms by using this feature of PAGEONE. By
pressing  <F4>  you  go  into the character string mode. You may then enter any
character  from  the  keyboard  followed  by <enter> and presto you have a line
of  them  margin  to  margin. You must be on the first space of the line to use
this function.                                                                 
                                                                               
                                                                               
                             2.5--DELETING A LINE                              
                                                                               
By  pressing  <F1>,  you  will  delete  a  line that is indicated by the cursor
position.  The  entire  file will be moved up one line, opening a blank line at
the  end  of  the  file. You must be on the first space of the line to use this
function.                                                                      
                                                                               
                                                                               
                         2.6--INSERTING A BLANK  LINE                          
                                                                               
By  pressing <F7>, you will insert a blank line in the file as indicated by the
cursor  position.  The entire file will be moved down one line. If you have any
copy  on  the  last  line  of the file (66), it will be lost. You must have the
cursor on the first space of the line for this function to work.               
                                                                               
                                                                               
                   2.7--INSERTING CHARACTERS WITHIN THE LINE                   
                                                                               
By  pressing  the  <insert>  key, you will be placed into insert mode. Anything
then  typed will be inserted to the immediate left of the cursor. You exit this
mode  by  pressing  <esc>.  This  function  will work anywhere within the line,
limited  only  by  the  margin settings. For best results, deformat using  <F8>
and  then  insert, the line may then be reformatted to your liking.            
                                                                               
                                                                               
                 2.8--TO DELETE THE CHARACTER UNDER THE CURSOR                 
                                                                               
By  pressing  the <delete> key, you will delete the character under the cursor.
The line will move over to fill the space. This function works  anywhere within
the line.                                                                      
                                                                               
                                    page 8                                     
                                                                               
                                                                               
                                                                               
                                                                               
                    2.8a--DEFORMATTING, LINE OR ENTIRE FILE                    
                                                                               
                                                                               
By placing the cursor on the first space of a  line  and  then  pressing  <F8>,
you  will  remove all formatting from the line. The margins, and all centering,
flushing or justification will be removed and the line placed on the left  side
of the screen. You may then edit and reformat the line as you choose.          
                                                                               
                                                                               
By  pressing  <CTL><F8>  the formatting will be removed from the entire file in
memory.  You  must be on the first space of the file for this function to work.
No text is lost, only margins and extra spaces  and  the  graphics  blocks  are
removed.  If  you  do not like working with the graphic space blocks, this is a
good way to get rid of them---BEFORE FORMATTING ANY TEXT!                      
                                                                               
                                                                               
                                                                               
               2.9--LOADING AND DUMPING THE CUT AND PASTE BUFFER               
                                                                               
                                                                               
One  of  the  most  useful  functions  of the  PAGEONE  system  is  the  cut  &
paste  buffer.    This  buffer  holds  up to 66 lines. It is important that you
use function <F7> to  create blank lines where you  want  to  "paste"  or  they
will  overwrite  the  lines  where    you  place them. To use this feature, put
the  cursor  on  the  first  space  of  the  first line you want to copy, press
<F5>.  This  marks  the start as the line indicated  by  the  cursor. Then move
the cursor to the first space of the line past the end of the  block  you  want
to copy. Pressing <F5> again  marks  the  end  as  the  location  indicated  by
the cursor. The buffer is then loaded and ready for use.  Move  the  cursor  to
the  first  space  of the new first line and press <CTL><F5> to copy the block.
The lines moved have not been erased, they still will  exist  at  the  original
location.  You  may remove them with <F1> if desired. The popular name for this
loading and dumping action is "cut" for load and "paste" for dump. Text can  be
copied  to  another file using this function, as long as you do not exit to the
system, leaving PAGEONE, in between files.                                     
                                                                               
                                                                               
                                                                               
                           3.0--SETTING THE MARGINS                            
                                                                               
                                                                               
Pressing <F6> will allow you to set the margins. You must be on the first space
of a line for this function to  work.  These  margins  only  affect  the  lines
entered  after  they  are set. Previously set lines retain the margin they were
set  with.  This  gives  you  great  flexibility  to  create varying effects as
theoretically each line in the file could have a different margin setting.     
                                                                               
                                                                               
                                                                               
On invoking this function, line 23 on the screen will clear and question you as
to  the spaces you wish in each margin. Numbers entered must not be larger than
the  total  spaces  available  in  a line. Thus margins of 40 left and 40 right
would  not  be accepted as they total more than the 79 maximum spaces available
in  a  line.  You  will be asked to input the left margin first, then the right
margin.  After  you  have  entered  both margins, you will be asked if they are
correct, if not you will be given the opportunity to correct them. When you are
finished  and  sure  that they are correct, answer "Y" to the last question and
you  will  see  the new maximum line length appear at the right end of line 23.
Setting the margins can be done on any line.                                   
                                                                               
                                                                               
                                    page 9                                     
                                                                               
                                                                               
                                                                               
                                                                               
                     3.1--MOVING THROUGH THE VIDEO SCREENS                     
                                                                               
                                                                               
As  noted  earlier,  as  you  are  entering text and come to the end of a video
screen,  you  will  automatically  be  placed  at the start of the next screen.
Counters  located  on  the  left side of line 24 give you a constant readout of
line  number,  character  within-the-line  number and screen number. Should you
wish  to  move  back  or  forward  in  the  file the following functions can be
invoked  by  pressing the indicated key: <pgdn> will move you forward one video
screen  unless  you  are  on  the last one, <pgup> will move you back one video
screen  unless  you are on the first one, <control><pgup> will take you back to
the  very  beginning  of the file, with the cursor placed on the first space of
the file, <control><pgdn> will place the cursor on the last  character  of  the
file.                                                                          
                                                                               
                                                                               
                         3.2--OTHER FUNCTIONS AND KEYS                         
                                                                               
                                                                               
The  arrow  keys  will  move  the  cursor anywhere on the screen. The <control>
<right arrow> key will move the cursor to the first space on the next line.    
                                                                               
PAGEONE  is  always  in  the  overtype mode, so any character or space key will
replace what is under the cursor.                                              
                                                                               
                                                                               
<F10> use of this function key pulls down a menu of the functions available.   
                                                                               
                                                                               
<F9>  will  give  a  listing  of  the  current directory from within edit. This
      version supports full pathnames and wildcards.                           
                                                                               
                                                                               
                                                                               
             3.3--PLACING AND USING THE END OF LINE (EOL) MARKERS              
                                                                               
                                                                               
End  of  line  markers  (EOL)  are  placed by pressing <F2> or <enter>. This is
necessary  for  formatting  your  lines. Your line for formatting must be equal
to  or  less  than the line length shown on the right side of line 23. You will
then  be  shown the subfunction list on line 23. You may center, justify, right
flush  or  left  flush  your  line  at  this  time.  The line will be formatted
according to your choice at this point and the margins added to each end.      
                                                                               
                                                                               
                         3.4--SAVING FILES IN PAGEONE                          
                                                                               
                                                                               
Pressing  <F3>  will allow you to exit the edit screens. You may then save your
file  under the name you choose. Merely answer "Y" to the question about saving
file  as  you exit; if you answer "N" you will be returned to the main menu. If
you  have been editing an old file, the file name will be listed as the current
file; you can save it back to the same disk file by merely pressing <enter> for
the file name. Otherwise, enter a new file name following the specifications in
section   2.2,   followed   by   <enter>  to  save  the  file  at  the  prompt.
If the file exists you will be asked  if  you  wish  to  overwrite  it.  It  is
recommended  that  you  save  your  file  often to keep from losing information
to  a  power  outage  or  some other reason. It is much easier to save the file
in  this  simple  way  than  it  is to recreate the information again. When the
file  save is done you will be returned to the main menu. You can then print or
                                                                               
                                    page 10                                    
                                                                               
                                                                               
                                                                               
                                                                               
re-edit  the  file  as  it  still will be in memory at this time. The file will
remain in memory until the system is reset or you choose option (1) on the main
menu to create a new file.                                                     
                                                                               
                                                                               
                                                                               
                        3.5--TYPEWRITER MODE OF PAGEONE                        
                                                                               
                                                                               
In  addition  to  all  the  formatting features thus far listed, PAGEONE can be
operated  in  the  typewriter  mode  for "quick and dirty" notes, letters, etc.
Simply  choose option (1) on the main menu, then type into it just as you would
on    a   typewriter. Just press <enter> twice at the end of each line and keep
typing. When you are finished, this file can be printed or saved as any  other,
the  only  difference  being  that  the composition will be all "ragged right".
                                                                               
                                                                               
                                                                               
                       3.6--SKELETON FILES WITH PAGEONE                        
                                                                               
                                                                               
A  very useful thing you can do with PAGEONE is the creation of skeleton files.
Suppose you are using PAGEONE to write business letters. Just set up a new file
and  create  your  own  letterhead  using  the  formatting and character string
features,  then  save  this file to disk with a distinctive name. Then whenever
you  want  to  write  a  letter,  choose  to  edit an old file and call in your
letterhead.  You  may  then fill the file with the letter, below the letterhead
previously created, and print it out. This saves a lot of keystrokes.          
                                                                               
                                                                               
                                                                               
                 3.7--CHAINING FILES FOR PRINTING WITH PAGEONE                 
                                                                               
                                                                               
Using  the  program  PRINFILE  that  is included on your disk, you may create a
print  queue  of  up  to 20 files for printing at the same time. It can also be
used  to  make up to 99 copies of one file. Up to 20 files can also be combined
into one large file. These files can be printed by PAGEONE, but not edited.    
                                                                               
                                                                               
                      3.8--A SAMPLE SESSION WITH PAGEONE                       
                                                                               
                                                                               
As  a  sample session with PAGEONE, we recommend  the following: Invoke PAGEONE
by  typing  PAGEONE at the DOS ready after loading any resident programs needed
by  your  system.  Choose option (2) on the main menu, to edit an old file. For
file  specification,  enter DEMO.TXT. When the file has loaded, page through it
and  examine it to see both how some of the functions work and how they look on
the  screen. Exit the edit mode and do a memory print of the file. Then re-edit
the  file  using  (5)  on  the  main  menu and compare the screen file with the
printed  file.  When  you have done all of this, then use the file in memory to
try  out  the  various functions of PAGEONE. In this way you can gain firsthand
knowledge of the program.                                                      
                                                                               
                                                                               
                   3.9--KNOWN INCOMPATIBILITIES WITH PAGEONE                   
                                                                               
                                                                               
At  this  time there are no known incompatibilities with PAGEONE, and the files
produced are compatible with most other word processors.                       
                                                                               
                                    page 11                                    
                                                                               
                                                                               
                                                                               
                                                                               
                          4.0--TRADEMARK RECOGNITION                           
                                                                               
TANDY  and  RADIO  SHACK  are  trademarks and products of the Tandy Corp. MSDOS
is  a  trademark  and  product  of  Microsoft.  IBM  is  the  trademark  of the
International  Business  Machines  Corp.  These  are  used  in  this manual for
purposes  of  illustration  only  and do not constitute an endorsement by these
companies.                                                                     
                                                                               
PAGEONE  is  compiled  under  the  TURBO  PASCAL  system.  This is an excellent
compiler and we highly recommend it to those of you who program.               
                                                                               
TURBO  PASCAL  and  TURBO  LIGHTNING  are  trademarks  and  products of Borland
International.                                                                 
                                                                               
PC-SIG is the trademark of the PC Software Interest Group.                     
                                                                               
                                                                               
                           4.1--LICENSE AND WARRANTY                           
                                                                               
The  purchaser  is hereby granted a license for this software for one computer.
This means that this software is like a book, it can be traded, sold or used on
any  number  of  different  computers,  ONE  AT  A  TIME  . Licensee is allowed
unlimited  backups  for  archival  purposes  to protect his investment. NOROSCO
RESEARCH  will  endeavor  to support the registered user of this software for a
period  of 90 days from the date of purchase. Inquiries should be addressed to:
Norosco  Research,  P.  O.  Box  1508, Bakersfield, CA 93302-1508 and contain a
self addressed, stamped envelope for reply.                                    
                                                                               
                                                                               
                                                                               
NOROSCO  RESEARCH  and  Roy  Scott  &  Norene  Scott  warrant the diskette that
contains  PAGEONE  to  be  free  of manufacturing defects to the extent that it
contains  machine  readable  code  for  the model of microcomputer specified on
the  label.The  terms of this warranty shall be limited to replacement only and
shall not encompass any other damages.                                         
                                                                               
                                                                               
NOROSCO  RESEARCH  and Roy Scott & Norene Scott specifically disclaim all other
warranties,  expressed  or  implied,  including  but  not  limited  to, implied
warranties of merchantability and fitness for a particular purpose with respect
to  defects  in  the diskette and documentation and the program license granted
herein.  In  particular,  and without limiting operation of the program license
with  respect  to any particular application, use or purpose. In no event shall
NOROSCO  RESEARCH  or  Roy Scott & Norene Scott be liable for any commercial or
other  damages, including but not limited to special, incidental, consequential
or other damages or similar claims.                                            
                                                                               
                                                                               
                                                                               
                                                                               
                               Norosco Research                                
                                                                               
                                P. O. Box 1508                                 
                                                                               
                      Bakersfield, California 93302-1508                       
                                                                               
                                (805) 833-0266                                 
                                                                               
                                                                               
                                                                               
                                                                               
                                    page 12                                    
                                                                               
                                                                               
                                                                               
                                                                               
                                  BUG REPORT                                   
-------------------------------------------------------------------------------
                                                                               
If  you experience a problem with PAGEONE, fill out this report and send it in.
If you have found a genuine bug and it has not been  previously  reported,  you
will  receive, at no cost to you, the latest version of PAGEONE. Please give as
much information about the bug as you can so that we may recreate the problem. 
                                                                               
NAME:__________________________________________________________________________
                                                                               
ADDRESS:_______________________________________________________________________
                                                                               
CITY:____________________________STATE:__________________________ZIP:__________
                                                                               
DAYTIME TELEPHONE NUMBER:______________________________________________________
===============================================================================
                                                                               
Please list your system configuration:_________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
                                                                               
Problem (conditions, examples, etc.)___________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
                                                                               
PAGEONE Registration # ____________________________                            
                                                                               
                                    page 13                                    
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                 REGISTRATION  AND ADVANCED VERSION ORDER FORM                 
-------------------------------------------------------------------------------
                                                                               
                                                                               
Please  add  me  to the list of registered users of the advanced version 5.00pc
of  PAGEONE.  I  understand  that PAGEONE is copyrighted and agree to the terms
and conditions listed in section 4.1 of the user manual.                       
                                                                               
                                                                               
                                                                               
NAME:__________________________________________________________________________
                                                                               
                                                                               
ADDRESS:_______________________________________________________________________
                                                                               
                                                                               
CITY:____________________________STATE:__________________________ZIP:__________
                                                                               
                                                                               
DAYTIME TELEPHONE NUMBER:______________________________________________________
                                                                               
                                                                               
===============================================================================
                                                                               
                                                                               
                                                                               
Please list your system configuration:_________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
                                                                               
Memory (256k required for advanced version):___________________________________
                                                                               
                                                                               
===============================================================================
                                                                               
                                                                               
Enclose check or money order for $34.00 and send to:                           
                                                                               
                                                                               
                                                                               
                               Norosco Research                                
                                                                               
                                P. O. Box 1508                                 
                                                                               
                      Bakersfield, California 93302-1508                       
                                                                               
                                                                               
Please allow up to 6 weeks for shipping.                                       
                                                                               
                                                                               
                                                                               
          Signature__________________________________________________          
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
```
{% endraw %}

## README.TXT

{% raw %}
```
                                                                               
                                                                               
                                                                               
                                     NOTE:                                     
                                                                               
           To start the program type "pageone" from the dos prompt.            
                                                                               
             Select the item PRINT A DISK FILE from the main menu.             
                                                                               
      Set your printer to the top of page and enter "pageone.doc" at the       
                               filename prompt.                                
                                                                               
        This will print out the operators manual, about 16 pages, so be        
                          sure you have enough paper.                          
                                                                               
              Read the manual and begin to create your own files!              
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
```
{% endraw %}

## STYLES.DOC

{% raw %}
```
                                                                               
                                                                               
                                                                               
                                                                               
                           PRINTSTYLES INSTRUCTIONS                            
                                                                               
                                                                               
                                                                               
This  documentations  is  intended to help with the use of PRINTSTYLES program.
First  a  few  notes  for  those who intend to use this with Word Star or other
word processor other than PAGEONE.                                             
If  you  are going to use Word Star then you must first run Word Star then take
the  option  Run  Program.  When you select this option you will be asked for a
DOS  command  or  program  name, at this point enter STYLES and press enter and
you should be presented with a menu of selections.                             
                                                                               
                                                                               
                                                                               
        Now that we are at the menu let me explain what each one does.         
                                                                               
Menu  option  number  one  will  cause your printer to print condensed letters.
To  use  option  number two you must first set the condensed mode off before it
will  work. The same applies if you use the enlarged print mode, you must first
set the enlarged mode off before set condensed mode on.                        
                                                                               
                                                                               
I  sincerly  hope  you find this program usefull and decide to buy the expanded
version 1.01 which will allow much more flexability.                           
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
               REGISTRATION AND ADVANCED VERSION ORDER FORM for:               
-------------------------------------------------------------------------------
                                  PRINTSTYLES                                  
                         From The Print Styles Factory                         
                                                                               
This  program  is intended for use with an Epson FX-80 printer or compatible it
is  a  sample  program  only  if you would like to be able to do more with your
Epson  printer  other  than standard printing, but you don't have the knowledge
or  the time to invest in research then for a small charge of $5.00 and a blank
disk  I  will  send you a program that will allow you to do every thing that is
possible with the Epson printer, from condensed to enlarged printing.          
                                                                               
Also available PRINTSTYLES for some Toshiba and Tandy printers.                
                                                                               
                                                                               
                                                                               
                                                                               
NAME:__________________________________________________________________________
                                                                               
                                                                               
ADDRESS:_______________________________________________________________________
                                                                               
                                                                               
CITY:____________________________STATE:__________________________ZIP:__________
                                                                               
                                                                               
DAYTIME TELEPHONE NUMBER:______________________________________________________
                                                                               
                                                                               
===============================================================================
                                                                               
                                                                               
                                                                               
Please list your system configuration:_________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
_______________________________________________________________________________
                                                                               
                                                                               
Memory (128k required for advanced version):___________________________________
                                                                               
                                                                               
===============================================================================
                                                                               
SEND DISK & $5.00 TO:         Stacy Roller                                     
                           3214 State Rd. Sp#3                                 
                            Oildale,Ca. 93308                                  
                                                                               
                                                                               
Please allow up to 6 weeks for shipping.                                       
                                                                               
                                                                               
                                                                               
          Signature__________________________________________________          
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
                                                                               
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0684

     Volume in drive A has no label
     Directory of A:\

    CODES    EXE     30752   5-13-86  10:17p
    DEMO     TXT      5346   2-17-86   3:23p
    EPSON    DAT       360   5-22-86  10:51a
    FILECONV COM     12907   2-10-86   8:46a
    FILES684 TXT      1111   1-30-87   9:50a
    FILESOND ISK      5346   6-30-86  11:26a
    GO       BAT       639   1-29-87   9:35a
    NOTES684 TXT      1703   1-29-87   9:43a
    PAGEONE  COM     48968   2-28-86  11:31a
    PAGEONE  DOC     85536   6-30-86  11:02a
    PRINFILE COM     18329   1-22-86   8:31a
    README   TXT      5346   6-30-86  11:11a
    STYLES   DOC     10692   2-07-86   3:32p
    STYLES   EXE     34614   5-22-86  10:41a
    TANDY    DAT       252   5-13-86  10:18p
    TOSHIBA  DAT       396   5-13-86  10:19p
           16 file(s)     262297 bytes
                           51200 bytes free
