---
layout: page
title: "PC-SIG Diskette Library (Disk #1673)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1673/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1673"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MR. LABEL"

    A labeling program that offers some very useful features.  Create
    everything from simple reports to custom labels and print on any type of
    single-sheet or continuous form.
    
    Use your printer like a typewriter to create one-time labels, or
    retrieve and print information from lists.
    
    MR. LABEL offers professional features especially useful to
    secretaries,
    sales people, and businesses:
    
    ~ Address envelopes -- individual or continuous feed
    
    ~ Print the return and destination addresses in one operation
    
    ~ Design labels any size and position text anywhere on the label
    
    ~ Vary type fonts between lines
    
    ~ Print letterheads, price tags, ID badges, file folder labels, name
    tags, inventory slips, and disk labels
    
    ~ Create mass-mailing applications
    
    ~ Design print formats for database records
    
    ~ Print promotional messages on mailers as they're addressed
    
    ~ Plan formats to print checks and complete forms
    
    ~ Print in any font supported by your equipment
    
    ~ Avoid typing repetitive lines with fixed text
    
    ~ Increase a printed number with the auto-increment feature
    
    ~ Adjust screen colors, automatically center, and make multiple copies
    
    ~ Design printing formats and save them to disk
    
    ~ Includes a powerful text editor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1673.TXT

{% raw %}
```
Disk No: 1673                                                           
Disk Title: Mr. Label                                                   
PC-SIG Version: S2                                                      
                                                                        
Program Title: Mr. Label                                                
Author Version: 5.0                                                     
Author Registration: $29.00                                             
Special Requirements: Printer.                                          
                                                                        
A labeling program that offers some very useful features.  Create       
everything from simple reports to custom labels and print on any type of
single-sheet or continuous form.                                        
                                                                        
Use your printer like a typewriter to create one-time labels, or        
retrieve and print information from lists.                              
                                                                        
MR. LABEL offers professional features especially useful to secretaries,
sales people, and businesses:                                           
                                                                        
~ Address envelopes -- individually or continuous feed                  
                                                                        
~ Print the return and destination addresses in one operation           
                                                                        
~ Design labels any size and position text anywhere on the label        
                                                                        
~ Vary type fonts between lines                                         
                                                                        
~ Print letterheads, price tags, ID badges, file folder labels, name    
tags, inventory slips, and disk labels                                  
                                                                        
~ Create mass-mailing applications                                      
                                                                        
~ Design print formats for database records                             
                                                                        
~ Print promotional messages on mailers as they're addressed            
                                                                        
~ Plan formats to print checks and complete forms                       
                                                                        
~ Print in any font supported by your equipment                         
                                                                        
~ Avoid typing repetitive lines with fixed text                         
                                                                        
~ Increase a printed number with the auto-increment feature             
                                                                        
~ Adjust screen colors, automatically center, and make multiple copies  
                                                                        
~ Design printing formats and save them to disk                         
                                                                        
~ Includes a powerful text editor.                                      
                                                                        
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
║                  <<<<  Disk #1673  MR. LABEL  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  ML (press enter)                               ║
║                                                                         ║
║ To print the documentation, type:  COPY ML.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## ML.DOC

{% raw %}
```








                                      MR. LABEL


                                     Version 5.0
                                     USER MANUAL


                       Copyright (C) Thomas Gleason, 1986-1990
                                 All rights reserved.

                                  DataWave Software
                                    P.O. Box 42213
                                 Mesa, Arizona 85274
                                    (602) 820-8041



               ----------------------------------------------------------- 
                          S H A R E W A R E   V E R S I O N
               -----------------------------------------------------------
               The Shareware version of  MR. LABEL is completely functional
               but is  not the most  recent version - that  is reserved for
               our registered users.
            
               The registration fee is $29.  A single location site license
               is $60.  Registered version features: typeset documentation,
               current  disk, useful  laser printer  information,  low cost
               updates,  Ascii graphics  chart.   On your  disk there  is a
               registration form (register.prt).   Corporate users may wish
               to use the form (invoice.prt).

               Most  successful organizations  want to know  about software
               that  makes their employees more productive.  If you use Mr.
               Label  on  your job,  tell  your  manager  how  the  program
               benefits  the company  and that  you'd like  the up  to date
               registered version.

               You may copy  MR. LABEL  for the purpose  of letting  others
               evaluate it.   Non-profit user groups and  BBS operators may
               make   evaluation   copies  available   to   their  members.
               Shareware distributors should write for the latest version.

               MR. LABEL  is not public domain  software.  It is  not to be
               sold or  distributed in conjunction with  any other product.
               The name  MR.  LABEL is  a  trademark.   You  are granted  a
               limited  license  to use  the program  for  30 days  for the
               purpose of  evaluation.  This  software is supplied  "as is"
               without warranty  of any kind, either  expressed or implied.
               DataWave   Software  expressly  disclaims  any  warranty  of
               merchantability or fitness for any purpose.








                                  Table of Contents



          INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . .   4

          SECTION I: GETTING STARTED  . . . . . . . . . . . . . . . . .   5
               REGISTERED VERSION . . . . . . . . . . . . . . . . . . .   6
               HARDWARE REQUIREMENTS  . . . . . . . . . . . . . . . . .   6
               STARTING THE PROGRAM . . . . . . . . . . . . . . . . . .   6
               CHANGING SCREEN COLORS . . . . . . . . . . . . . . . . .   6

          SECTION 2:  THE MENUS . . . . . . . . . . . . . . . . . . . .   7
               MENU LINE  . . . . . . . . . . . . . . . . . . . . . . .   7
               F1: FORMATS MENU . . . . . . . . . . . . . . . . . . . .   8
               F2: SETTINGS MENU  . . . . . . . . . . . . . . . . . .    10
               HOW TO CHANGE SETTINGS . . . . . . . . . . . . . . . .    12
               F3: FILES MENU . . . . . . . . . . . . . . . . . . . .    13

          SECTION 3: FEATURES . . . . . . . . . . . . . . . . . . . .    16
               TYPING TEXT/MAKING CORRECTIONS . . . . . . . . . . . .    16
               THE EQUAL (=) COMMAND  . . . . . . . . . . . . . . . .    16
               THE ECHO (^E) COMMAND  . . . . . . . . . . . . . . . .    17
               SEQUENTIAL NUMBERING/AUTOMATIC INCREMENTING  . . . . .    17
               USING FIXED LINES  . . . . . . . . . . . . . . . . . .    18
               ENVELOPES - DOT-MATRIX PRINTERS  . . . . . . . . . . .    20
               ENVELOPES - LASER PRINTERS . . . . . . . . . . . . . .    20
               LASER ENVELOPES - An example . . . . . . . . . . . . .    20
               USING FILES: An Example  . . . . . . . . . . . . . . .    21
               PRINTING LABELS ACROSS: 1 to 9 UP  . . . . . . . . . .    23

          SECTION 4:  PRINTERS & PRINTER COMMANDS . . . . . . . . . .    25
               LASER VS DOT-MATRIX PRINTERS . . . . . . . . . . . . .    25
               SETUP COMMANDS for LASER PRINTERS  . . . . . . . . . .    25
               PAGE DRIFT . . . . . . . . . . . . . . . . . . . . . .    26
               USING AVERY LABELS . . . . . . . . . . . . . . . . . .    27
               DOT MATRIX PRINTERS  . . . . . . . . . . . . . . . . .    27
               PRINTER COMMANDS - The Basics  . . . . . . . . . . . .    28
               TYPING ESCAPE SEQUENCES/PRINTER COMMANDS . . . . . . .    28
               SENDING A PRINTER COMMAND  . . . . . . . . . . . . . .    30
               CPI - CHARACTERS PER INCH  . . . . . . . . . . . . . .    30
               EXAMPLES of DOT-MATRIX PRINTER COMMANDS  . . . . . . .    31
               PRINTER ERRORS . . . . . . . . . . . . . . . . . . . .    32
               CLEAR/RESET  . . . . . . . . . . . . . . . . . . . . .    32

          SECTION 5:  FORMATS . . . . . . . . . . . . . . . . . . . .    33
               FORMATTING PRINTED TEXT  . . . . . . . . . . . . . . .    33
               The R (RIGHT) Command  . . . . . . . . . . . . . . . .    33
               The C (CENTER) Command . . . . . . . . . . . . . . . .    33
               RULES FOR THE R AND C COMMANDS . . . . . . . . . . . .    34







               NOTE TO LASER USERS  . . . . . . . . . . . . . . . . .    34
               RETRIEVING, CREATING AND EDITING A FORMAT  . . . . . .    35
               GET DISK FORMAT  . . . . . . . . . . . . . . . . . . .    35
               CREATE PRINTING FORMAT . . . . . . . . . . . . . . . .    36
               EXAMPLE: CREATING A FORMAT . . . . . . . . . . . . . .    37
               MODIFY FORMAT  . . . . . . . . . . . . . . . . . . . .    39
               ADDING FIXED TEXT TO A FORMAT  . . . . . . . . . . . .    39

          SECTION 6: THE TEXT EDITOR  . . . . . . . . . . . . . . . .    40
               USING THE TEXT EDITOR  . . . . . . . . . . . . . . . .    40
               ESCAPE SEQUENCES IN THE EDITOR . . . . . . . . . . . .    40
               COMMAND SUMMARY  . . . . . . . . . . . . . . . . . . .    41
               BASIC MOVEMENT COMMANDS  . . . . . . . . . . . . . . .    42
               EXTENDED MOVEMENT COMMANDS . . . . . . . . . . . . . .    44
               INSERT and DELETE COMMANDS . . . . . . . . . . . . . .    45
               FIND and REPLACE COMMANDS  . . . . . . . . . . . . . .    46
               FILE COMMANDS  . . . . . . . . . . . . . . . . . . . .    47
               WINDOW COMMANDS  . . . . . . . . . . . . . . . . . . .    48
               BLOCK COMMANDS . . . . . . . . . . . . . . . . . . . .    49
               MISCELLANEOUS COMMANDS . . . . . . . . . . . . . . . .    50

          FILES on the PROGRAM DISK . . . . . . . . . . . . . . . . .    52

          APPENDIX A:  DATABASE TO LIST CONVERSION  . . . . . . . . .    53
               CONVERT DATABASE . . . . . . . . . . . . . . . . . . .    53
               JOINING LINES  . . . . . . . . . . . . . . . . . . . .    54
               CONVERTING dBASE FILES TO ASCII  . . . . . . . . . . .    55

          INDEX . . . . . . . . . . . . . . . . . . . . . . . . . . .    57







                                                                     Page 4


          INTRODUCTION
          MR.  LABEL is  a  dedicated labeling  program that's  loaded with
          features.   It works with  all dot-matrix and  laser printers and
          all  font  cartridges.   Use your  printer  like a  typewriter to
          create one-time labels or print from lists.

          MR.  LABEL  can quickly  print a  mailing  label or  channel text
          through a  custom printing format.   You'll find MR.  LABEL to be
          immediately useful  for everyday  labeling tasks and  for special
          projects.    Included  with  your disk  are  several  pre-written
          formats  for use  with popular  continuous forms.   Owners  of HP
          LaserJet or compatible printers can use any brand of laser label.

          MR. LABEL offers time saving features which are especially useful
          to secretaries, business people, and professionals.   The easy to
          understand manual  shows practical  uses that everyone  will find
          useful.  Here's a summary of features.

               * Print up to 9 labels across
               * Use any brand of label - Avery, Rediform, laser labels
               * Use your printer's fonts - dot matrix or laser
               * Repeat repetitive lines - avoid unnecessary typing
               * Auto-Increment, Sequential numbering
               * Automatic centering
               * Up to 10,000 copies
               * Border your labels - 4 styles
               * Print  letterheads, price  tags, file folder  labels, name
                    tags, inventory slips, Rolodex cards; disk and cassette
                    labels, anything!
               * Design labels - any size; position text however you want
               * Address envelopes; individually or continuous feed.  Print
                    the  return  address  and  destination  address in  one
                    operation.
               * Channel database records into printing formats
               * Includes  an easy to use, professional quality text editor
                    that  lets you edit up  to 6 lists  simultaneously in a
                    full-screen   mode.      Includes  search/replace   and
                    cut/paste capabilities.


          MR. LABEL has many business and home uses  - and it's easy to    
          learn.  Combine MR. LABEL's capabilities with the speed and power
          of your printer for fast, attractive results.  

                    







                                                                     Page 5

                              SECTION I: GETTING STARTED

          MR.  LABEL  is  adaptable  to  a  multitude  of professional  and
          personal uses. It has two major purposes:

          1. To serve  as a stand-alone labeling  system.  Text  typed from
               the keyboard or read from lists can be printed onto any type
               of label, envelope, continuous form, or paper stock.  

          2. To  process text that  needs special formatting.   Attractive,
               custom labels, name tags, mailers etc are easy to create.  

          MR. LABEL is a labeling  program.  It is not designed  to perform
          database  management.   It will,  however, process  lists created
          within Mr. Label or by any database program or word processor.

          MR.  LABEL  excels  at  channeling lists  into  special  printing
          formats which make use of the full capabilities and fonts of your
          printer.  The program also has an excellent extraction utility to
          pick needed data out of text database files.  

          Mr. Label's  formatting features  let you use  any manufacturer's
          labels or  envelopes.   You are  not limited  by the software  to
          using canned formats that probably won't work with custom labels.
          You'll  never have to purchase  a software update  to get support
          for a new  printer.  Mr.  Label works with  all printers and  can
          even access special laser fonts like barcodes and OCR. 

          MR. LABEL has many features to fill a variety of needs but most  
          people won't need  all of them.  Just use what you need and don't
          worry  about the  rest.   Topics like  Setup Files,  Formats, and
          Printer Commands are useful  features and require an intermediate
          skill level.  If you only do basic labeling tasks on a dot-matrix
          printer you can safely ignore these subjects.

          Folks  interested   in  creating   custom  printing   formats  or
          extracting   information  out  of  databases  should  read  those
          sections of the manual.   Be sure to read the section on the Text
          Editor.  The last page has some info about files on the disk.

          There are several other documentation files on your disk.
          1. README.DOC has any last minute documentation.  
          2.  FORMATS1.PRT  has  examples  of labels  formatted  for  Epson
               compatible dot-matrix printers.  
          4. QUESTION.PRT  answers to common questions/problems

          To print any of these files  A> copy filename.ext prn







                                                                     Page 6

          REGISTERED VERSION
          You  are expected to pay the registration  fee if you make use of
          this software beyond  a trial period.  This copy  of MR. LABEL is
          fully functional but the Registered version is always more recent
          and  therefore contains new features or fixes.  We also provide a
          laser printer addendum  with detail  on getting the  most out  of
          your printer.  The addendum includes step-by-step instructions on
          using formats with various label stock.

          HARDWARE REQUIREMENTS
          MR.  LABEL requires an IBM-PC  or compatible, one  disk drive and
          256K of memory.  A graphics card is not  needed.  For the sake of
          safety, make a backup copy  of your program disk.  As  we discuss
          features  of the program  in this manual, keys  you need to press
          will be enclosed within <>.  

          STARTING THE PROGRAM
          To run the  program put your  DOS disk in drive  'A' and turn  on
          your computer.   Take your DOS  disk out and replace  it with the
          MR. LABEL disk.   From the A> prompt,  type:   <ML> and press the
          Enter key.   The main screen  will appear.  Turn  your printer on
          and make sure it  has paper.   If you attempt  to print with  the
          printer off, your computer may lock up.  

          Pressing <Esc> anywhere within MR.  LABEL will generally get  you
          out of the  current menu or  abort whatever you're  doing at  the
          time.  

          CHANGING SCREEN COLORS
          The color of the  text and background can be changed  by entering
          a  command  on   line 1.   Press <Enter>  from the Menu  Line and
          you'll  be at line 1.   For example, <^B1T14:>   means make the  
          (B)ackground  color blue  and  the (T)ext  yellow.   The  command
          starts  with a '^'  and ends with  a colon. 'B'  must precede the
          'T'.
               Dark Colors           Light Colors
               0: black               8: dark gray
               1: blue                9: light blue
               2: green              10: light green
               3: cyan               11: light cyan
               4: red                12: light red
               5: magenta            13: light magenta
               6: brown              14: yellow
               7: light gray         15: white

          Text can be any color  but the background must be a dark color.  
          Monochrome monitors should  use the default  colors <^B0T7:>   To
          save  color changes,  select  "Save Configuration"  from the  F3:
          Files menu.  







                                                                     Page 7


                                SECTION 2:  THE MENUS

          MENU LINE
          The Menu Line is the  top line on your screen and  shows the menu
          choices.  The Status Box is in the center of the screen and shows
          the  current settings and filenames.   The dashed  line below the
          settings  represents  an inch  ruler.   A  white arrow  below the
          dashed line points at the right edge of your form.  Here are your
          menu line choices.


           TYPE  F1:FORMATS  F2:SETTINGS  F3:FILES  F4:ED  F5:DOS  F10:QUIT




          TYPE:   When the cursor  is on the  Menu Line, press  <Enter> and
               begin  typing.   When  the program  displays your  completed
               label  at the top of the screen  and asks " Is text correct?
               ", press <N> and change your label text or press <Enter>  to
               print.  The  label is  printed  according  to the  displayed
               settings.   If  you realize  that a  setting is  wrong while
               typing in text just press <Esc> to abort the label.  
            
          F1:  FORMATS   Displays a  menu of  options you  can use  to send
               printer commands, create formats etc.

          F2: SETTINGS   Displays the SETTINGS  window.  From here  you can
               change the displayed settings.

          F3: FILES   Here you can  elect to read  information from a  list
               file rather than type it from the keyboard.  Or you can send
               your typed text to  a file (create a list) rather than print
               it.   Here you  may also  save the  screen colors  and reset
               command if you've changed them.

          F4:  EDITOR  Pressing <F4> places you in MR. LABEL's text editor.
               With the  editor you can  create, edit,  append, and  search
               lists.  In  many situations, database programs may  be over-
               kill and present a  formidable learning curve for infrequent
               users.  MR. LABEL's editor makes the job easy by letting you
               edit lists in a  full screen mode rather than  as individual
               records.  See the  section, The Text Editor, for  details of
               how to use  the editor.  Once in the editor,  you can read a
               file by pressing  <Ctrl-K R>,  save a file  <Ctrl-K S>,  and
               exit  the editor by pressing  <Ctrl-K X>.   <Ctrl-K Q> quits
               the Editor without saving the file.







                                                                     Page 8

          F5: DOS   The Dos Shell allows you to branch to Dos, run your own
               word processor, database, or print setup  files and then pop
               back into Mr. Label right where you left off.  Press <F5> to
               jump to Dos.  Type <EXIT> at the Dos prompt to pop back.

          F10: QUIT  Quits the program.  All files are properly closed.


          F1: FORMATS MENU
          Pressing  <F1> from  the  status line  will  offer some  options.
          These will be explained in greater detail later.

                   FORMAT MENU
               --------------------
                 Printer Command
                 Directory
                 Create New Format
                 Get Disk Format
                 Modify Format
                 Convert Database
                 Clear/Reset

          PRINTER COMMAND:
               Sending printer codes will change how text prints.  All text
               lines will be  affected.   The 'R' and  'C' format  commands
               (explained later) can not be entered here.  The printer must
               be on.   From  this option  you can send  a command  to your
               printer  to change  the  font for  all  lines or  reset  the
               printer.  On laser  printers you can change the  paper size,
               tray type, or send a setup command.  If part of your command
               prints as text then the command was wrong.   The printer may
               burp a bit when it receives a printer command but should not
               interpret any part of the command as text to be printed.

          DIRECTORY:
               Displays the files of  any disk placed in the  active drive.
               The default directory can be  changed.  Format files created
               with MR. LABEL have  a '.FMT' extension.   Previous versions
               of the program  used a .LBL extension.  Setup files end with
               .SET

          CREATE NEW FORMAT:
               Allows  the text on  each line of  a label to  be positioned
               anywhere   on  a form and  printed in any  font.  Formatting
               allows you to create  a custom printing format which  can be
               recalled  for use  at  a  later date.    Thus,  you can  use
               continuous business envelopes, or any other form, to do some
               fancy stuff.  For example: The format could print your fixed
               return  address  in  the  upper  left  corner,  get  varying







                                                                     Page 9

               customer addresses from a file and print them on consecutive
               envelopes.  The  text on each line could even  be in various
               fonts.   A  formatting  example later  in  the manual  shows
               exactly how to do this (letter.fmt).

          GET DISK FORMAT:
               Retrieve  a saved  printing format  (*.fmt file)  from disk.
               When a format is  active a white 'F' appears just  below the
               Status box.

          MODIFY FORMAT:
               Previously saved printing formats  or newly created ones can
               be corrected or changed and then re-saved. 

          CONVERT DATABASE:
               This  is a great utility  for the accomplished  user or data
               processing professional.  Database row and column text files
               with carriage returns as  record delimiters can be converted
               to a list.   Useful  lists can  be created  by snipping  and
               joining specified columns(fields) of data.  Example: 
               Worth  James   E.   becomes  James E. Worth

          CLEAR/RESET:
               Resets  the  printer  to  power-up  state,  clears  printing
               formats and   closes files,  resets settings.   For the  few
               printers that  don't recognize  the reset command,  turn the
               printer  off, then on.  Mr. Label comes configured to send a
               reset  for  an Epson  dot-matrix  printer  but that  can  be
               changed.

               You  can customize the Clear/Reset to send the correct reset
               command  for your  dot-matrix  or laser  equipment.   Select
               <F1:Send Printer  Command>  and type  your  printer's  reset
               command preceded by  a (^)  and followed by  a colon.   Then
               press <Enter>.   So, for the following  printers the command
               would be: 
               HP LaserJet II series:  ^<Esc>E:    
               Epson FX:  ^<Esc>@:          
               This becomes the  active reset  command.  To  make this  the
               permanent reset command, go  to the F3 menu and  press "Save
               Configuration".  

               The <Esc> character  is typed  by pressing <ALT  E>.   ASCII
               keyboard characters  can be typed or  you may use  the ALT #
               method of entering commands.  See the section "Typing Escape
               Sequences"  for  an  explanation  of  sending  commands  and
               changing the fonts of your printer.  







                                                                    Page 10

          F2: SETTINGS MENU
          Pressing  <F2> from  the Menu  Line displays  a variety  of label
          settings in a window.  
               -------------------
               Lines ....... 4
               Start ....... 1
               Stop ........ 4
               Spaces ...... 2
               Margin ...... 0
               Width ....... 32
               Copies ...... 1
               Center ...... No
               Pause ....... No
               Border ...... No


          LINES:    This is  the number of  LINES of printed  text that you
               want on  each label.  If  the number of LINES  exceeds 5 the
               bottom half  of the  screen will  scroll upward  when typing
               your text. Changing the LINES setting will also change STOP.
                
          START/STOP   The lines between START and STOP are called 'VARYING
               LINES' because  they  vary  with every  label.    The  lines
               outside the START  and STOP  range are 'FIXED  LINES'.   The
               text on those lines will  repeat for every label.  The  STOP
               setting will always be  the same as LINES unless  you change
               it.  STOP  will change if LINES is changed.   Assume that we
               have the  following settings: lines=6,  start=3, and stop=5.
               Then lines  1,2, and  6 are  fixed; you  will enter  text on
               varying   lines  3,4,5.    Before  changing  the  Start/Stop
               settings, type any text you want to remain fixed.

               Start and Stop lines must hold to some rules.  

               1. START can't be larger than STOP
               2. LINES must be larger than START or STOP                  
               Entering values  that break  the rules causes  a 'START/STOP
               ERROR' message.  

          SPACES:   The number  of blank lines  between successive  labels.
               The paper is advanced by SPACES after  the last line of your
               label  is printed.  Since the standard mailing label has six
               lines,  the default settings  are 4 LINES and 2 SPACES  = 6.
               The combination  of Lines  and  Spaces will  vary with  your
               label size and the number of Lines you are printing.  Always
               set SPACES = 0 when creating a list on disk. 

          MARGIN:   The left MARGIN setting at  which to begin printing. Be
               aware  that, due to the  way they fit  between the tractors,







                                                                    Page 11

               continuous  labels often  start printing  in column  3. It's
               best to set the margin to an even number. 
                            
               The MARGIN setting causes  the print head to space  over the
               set number  of columns  before printing.   Warning: If  your
               printer hits  the right  margin before  finishing a  line of
               text it  will do a line-feed (ie. skip to the next line) and
               continue printing.  If you get blank lines or uneven margins
               showing  up on  your  printouts, it's  probably because  the
               printer can't  get it all  on one  line and so  does a  line
               feed.   The Margin  setting goes  up to 99  because in  some
               print modes (condensed) you can print over 80  characters on
               a line.  

          COPIES:   The number of  identical COPIES of  a particular label.
               If the Pause  setting is  'Y' the printer  will wait  before
               printing the next copy.  Press any key while printing copies
               to stop.   To print copies across a page,  you must read the
               text  from a list  file.  The  number of labels  in the file
               must be greater than the number of labels you  want to print
               ACROSS (3 UP needs 3+ labels in the file).  

          WIDTH:  The Width of the label.  Always set the Width to the size
               of your form.   The default setting is set  for the standard
               mailing label which holds 32 characters of text.  The number
               32 actually stands for 3.2 inches.  The number of characters
               that will fit on each line depends on the font used.  
                    
               MR. LABEL  will automatically make an  adjustment based upon
               the Width setting and  the CPI (Characters Per Inch)  of the
               font to allow more or less characters on the line.  

               Remember, that  the Width  represents inches.   The standard
               print mode is 10  Characters Per Inch (CPI).  Therefore, a 4
               inch label will  fit 4 x  10 CPI =  40 characters per  line.
               Some  fonts print 5  to 20 characters per  inch.  With these
               fonts you get more or less characters on the label  line. At
               5 CPI you get:  4 x 5 CPI = 20 characters per 4" label line.
               At 18 CPI it is 4 x 18 CPI = 72.  MR. LABEL will perform all
               the  print mode adjustments if you give him the proper Width
               (inches  x  10) and  the  CPI for  the font  you  are using.
               Entering the CPI will be discussed in detail.

          C:  CENTERING    Centers  text between  the  left MARGIN  and the
               selected Width of the label.  If the Margin is set at 10 and
               Width is at 50 then  the text will be centered at  column 35
               (50  div 2 =  25... 25 +  10 =  35).  The  Center setting is
               ignored  when using a FORMAT.   Formatted lines are centered
               using the 'C' command.







                                                                    Page 12

          P:  PAUSE   When  pause is set to 'Y',  the printer pauses before
               printing the  next COPY of  a label  and you'll be  asked to
               press a key.   Press  <Enter> to continue  printing, <S>  to
               stop making  copies, or  <R>  to run  the list.   The  Pause
               feature gives you time  to position forms in the  printer or
               to inspect a few labels before printing a whole list.      


          BORDER:   You may choose one of 4 different types of border or no
               border.  Choosing a border adds two lines to your label; one
               above  and  below.   So  pre-adjust your  Spaces  setting to
               account for these two extra lines.  Using a border also adds
               a character to  the beginning  and end of  each label  line.
               The Borders  setting is  not directly  available if using  a
               Format or if printing greater than 1-across.  

               It's  not  hard though  to  get borders  around  labels when
               printing  across.  Simply type bordered labels to a list and
               then read and  print the list.   Set the Border setting  on,
               set  Spaces=0, and set the WIDTH  setting to 2 less than the
               width of your label's  across columns.  No Format  should be
               active.   Using  <F3:Print to  a  File>, type  your bordered
               labels to a list file.  When done typing, <F3:Close/Save the
               file>.   The bordered labels now  reside in a file  on disk.
               You could read this list  into the Editor to take a  look at
               it.   Now, <F3:Read List from  File> and print as  2 or more
               across.  Since the border characters are now part of a file,
               they're treated as regular text.  

               Be careful about trying  to print a list of  bordered labels
               with  a printing Format.   If the font  varies between lines
               the  border characters on each  line will print in different
               sizes.

               If  your laser  printer  won't print  borders properly  it's
               because your selected font does not have border characters.


          HOW TO CHANGE SETTINGS
          From  the Menu  Line press  <F2> to  access the  settings window.
          Move  the  dark bar  up  or down  using  the arrow  keys  on your
          keyboards keypad.  When the bar is on the desired setting you can
          change that setting.  Toggle the Pause and Center settings to 'Y'
          and  'No' by pressing <Enter>.   The Border  setting also toggles
          through its  options by pressing  <Enter>.  The  numeric settings
          are  changed by  pressing <Enter>,  typing a  value and  pressing
          <Enter> again.    Each of  the settings  has a  range of  values.
          Exceed the value and you get a 'RANGE ERROR' message.







                                                                    Page 13

                           SETTING RANGES
                          -----------------
                          Lines    1..12
                          Start    1..STOP
                          Stop     1..LINES
                          Spaces   0..99
                          Margin   0..99
                          Copies   1..9999
                          Width    1..78
                          Center   Y/NO  (On/Off)
                          Pause    Y/No  (On/Off)
                          Border   4 options or None



          F3: FILES MENU
          The Files Menu is accessed by  pressing <F3> from the Menu  Line.
          This menu  lets you  read text  from a  file(a list)  rather than
          entering it from the keyboard.  Or, you can send labels out to  a
          file  rather than the printer.   If a printer isn't available you
          can print to a file and later use the file as a list.   MR. LABEL
          makes working with files easy but read this section carefully. 

                   FILES MENU
               -------------------
                Close/Save Files
                Print to a File
                Read List from File
                Save Configuration
                Mr. Label info


          CLOSE/SAVE FILES:
               Any  active   files  are  closed,  data   remaining  in  the
               computer's buffer  is written to disk, input  reverts to the
               keyboard and output to the printer. 

          READ LIST FROM FILE:
               Requests you to  enter the  name of an  existing file  which
               holds label  information such  as mailing lists.   The  file
               must  be a text file and not  a dBase.dbf file or some other
               specialized file format.   The  label text in  a file  would
               look similar to:

                    Bill Jones                   ;start of first label
                    123 W. Third St.
                    Mesa, AZ 85210
                    Susan Anderson               ;start of second label
                    345 E. Center St.







                                                                    Page 14

                    Phoenix, AZ 85002


               Press ENTER when  the sliding  bar is over  'Read List  from
               File'.     Type   the  filename   and  any   path.  Example:
               'c:\info\list.dat'.  

               If MR. LABEL finds  the file, its name will be  displayed at
               the bottom  of the window.   A beep  and error  message will
               occur if there was a problem finding the file.

               After selecting the file name another menu appears.  See the
               section "PRINTING LABELS ACROSS" for the options.

               If you select  more than 1  label across FORMATS can  not be
               used.   In most cases  you'll want to  print the whole  list
               immediately.   But if you select 1 label across and "Process
               Individually" = "Y",  the labels will be read one  at a time
               into the upper screen  and the program will wait for  you to
               press <Enter> before printing.  Press  <Esc> and the current
               label  is  skipped.   Pressing  <Enter>  retrieves the  next
               label.  This  is useful  for printing on  hand-fed forms  or
               envelopes.

               The  number of  lines  read from  the  list for  each  label
               depends on the  settings for  Start and Stop  - the  varying
               lines.

               (If the last label in a  file won't print it's because there
               needs to be a couple of carriage returns after the last line
               in the file.)

          PRINT TO A FILE:
               Enter the  name of a  file and  all text goes  to that  file
               including any printer control codes if a FORMAT is active or
               if a  printer command  has been  sent  from F1:Send  Printer
               Command.  MR. LABEL  won't append an existing file  but will
               overwrite  it - you'll be  asked if over-writing  is OK.  If
               you  want to  append  two similar  files  together, use  the
               Editor.  Read the first file  into the editor <Ctrl-K R>, go
               to the end of the file <Ctrl Q C), and read in the next file
               <Ctrl K R>.  Then save the file under a new name <Ctrl K S>.

               Printing your  labels to a file is useful if a printer isn't
               handy or  if you  want to  use the  list later in  different
               ways.   IMPORTANT: Set SPACES  = 0  to avoid blank  lines in
               your list.   You don't  want blank lines  between labels  in
               your list  because  it  makes  the list  more  difficult  to
               process.  Or,  make your  last line FIXED  and containing  a







                                                                    Page 15

               semicolon. Because  MR. LABEL  ignores lines  beginning with
               semicolons, they will act as a visual label separator.

               Your files  can hold formatted text or  lists.  To keep your
               files straight, you should use some naming conventions.  Try
               using  a '.lst' suffix for  list files and  '.prt' for files
               intended to be printed. 

               Printing your labels to a file is useful if  a printer isn't
               handy or  if you  want to use  the list  later in  different
               ways.   IMPORTANT:  Set SPACES =  0 to avoid  blank lines in
               your list.   You don't  want blank lines  between labels  in
               your  list  because it  makes  the  list  more difficult  to
               process.  Or,  make your  last line FIXED  and containing  a
               semicolon. Because  MR. LABEL  ignores lines  beginning with
               semicolons, they will act as a visual label separator.

               Your files can  hold formatted text or lists.   To keep your
               files straight, you should use some naming conventions.  Try
               using  a '.lst' suffix for  list files and  '.prt' for files
               intended to be printed. 

               A  file  you create  which  contains  printer control  codes
               created with  a Format can  not be used  in the future  as a
               list file because of the imbedded printer commands.  (If you
               read a formatted print file into MR. LABEL's editor, you may
               see some  printer code symbols displayed before each line of
               text).

               All settings including COPIES, MARGIN etc will act on a file
               exactly  as on the  printer.  Text  can be read  from a List
               file  and directed  to another  file.   Thus you  can create
               different  formatted  versions of  a  list  to be  used  for
               various purposes.

               Text printed to a file is stored in a buffer and written out
               in chunks.   So always F3:Close/Save your  files when you're
               done  typing your list.  This insures the data is written to
               disk.   Exiting MR. LABEL with a F10 will automatically save
               everything properly.

               Files  can also be printed from  the DOS level.  Adjust your
               labels  in the  printer  and type:  <COPY FILENAME.EXT  PRN>
               This  means 'copy the file to the printer(prn)'.  This would
               be very  useful if your  file contained text  formatted with
               printer  codes.   You  could just  print  the file  from DOS
               anytime you needed more copies of those labels.  







                                                                    Page 16

          SAVE CONFIGURATION:
               The MR. LABEL default  colors and printer reset  command are
               stored in a file called ML.SYS.   It's a good idea to change
               these  default values if  your printer doesn't  use the same
               reset  command as an Epson, <ESC>@, or if you don't like the
               default colors ( grey on black ).  See 'Changing Colors' and
               F1:Clear/Reset.







                                                                    Page 17


                                 SECTION 3: FEATURES


          TYPING TEXT/MAKING CORRECTIONS
          Laser printer users may wish to read in Section 4 the paragraphs
          on "Laser Printers" and "Using Avery Labels" before proceeding.

          With the cursor on the Menu  Line, press the <Enter> key and then
          start typing  an address.  Use  the cursor keys to  move back and
          forth  on a line.   Press the  <Ins> key on  the keypad to change
          between Insert and Overwrite modes.  Pressing only <Enter> at any
          line will  make it blank.   (Press the <Esc> key  and you'll quit
          the label.)  The number of characters allowable on a line depends
          upon the Width setting  and the CPI(characters per inch)  of your
          font. 

          When the last line is typed, the lower screen will clear and your
          text  will  re-appear at  the  top.   MR. LABEL  prints  the text
          appearing  in  the upper  screen.   "Is  Text Correct?"  will now
          prompt you.  If you press <Y> or <Enter>, the label will print as
          many  times as you  have requested copies.   If you  enter <N> it
          will ask  : Change which Line?.   Enter the line  number and type
          the corrected  line of text.   Upon  your approving the  label it
          will print.

          MR. LABEL considers  leading and  trailing spaces to  be part  of
          your text.  So to get a slanted label such as: 

                         The President
                           16 Pennsylvania Ave.
                             Washington, D.C 10045
                     
          ...just pad the start of  each line with spaces.  There's  a much
          easier way to do this  if you're going to be processing a  lot of
          labels this  way.   Use  the 'R'  (Right) command  from within  a
          FORMAT (see SLANTED.FMT).    


          THE EQUAL (=) COMMAND
          After printing your text the cursor returns to the Menu Line.  If
          you decide  to type another label and  the text on a  line is the
          same as  the previous label, you  don't have to retype  it.  Just
          enter an <=> at the line number and  press <Enter>.  The old line
          will be inserted in the label.  If you are going to be creating a
          lot of labels  with repeating  text, you should  use MR.  LABEL's
          Fixed Lines feature.







                                                                    Page 18

          THE ECHO (^E) COMMAND
          Sometimes  you'd like  to copy  a line  on the  current label  to
          another line rather than retype it.  Simply  put the command ^E#:
          on  a line; where #  is the number of the  line you wish to copy.
          This  command  also works  on the  Format  screen when  you enter
          printer commands -  explained later.  The command begins with a ^
          and ends  with a  colon. In  the label  below lines  1 and 2  are
          echoed to lines 3 and 4.

               1. Double Vision, Inc.          Double Vision, Inc.
               2. The Eyeglass Experts         The Eyeglass Experts
               3. ^E1:                  -->    Double Vision, Inc.
               4. ^E2:                         The Eyeglass Experts

          The  above example is simple but remember, you can assign printer
          font commands to each line (via a Mr. Label printing Format).  So
          line 3  could be: in a  different font than line  1; centered; or
          moved right.  This Echo feature  is very useful when using the HP
          "Bar Code 3-of-9/OCR-A"  font cartridge.  In  the examples below,
          lines 1 through 3 appear in an OCR font, the  number appearing on
          line 3 is then echoed to the remaining lines and printed as a two
          line barcode symbol.  

               Kelloggs Corn Flakes      Handbook of Bar Coding Systems
                   Family Size           Burke, Harry E.
                    *6233146*            *HF 5416 B87*
                 || | ||| | || |         ||| | || ||| || | ||||
                 || | ||| | || |         ||| | || ||| || | ||||         

          Combine the Echo command  with Mr. Label's AUTO-INCREMENT command
          and  you can  produce  thousands of  laser quality,  sequentially
          numbered, OCR and/or Barcoded price tags, stock labels - you name
          it.  With registration  we provide a laser printer  addendum that
          explains  how  to  optimize  using Mr.  Label  with  special font
          cartridges  and different  paper  stocks.    Ask for  the  "Laser
          Addendum".  



          SEQUENTIAL NUMBERING/AUTOMATIC INCREMENTING
          This  feature is  only  available for  1-UP  labels.   (You  may,
          however,  print a sequentially numbered  list to a  file and then
          retrieve the list and process as 3 Across.)  One number appearing
          anywhere  on a label can be made  to increment by any amount with
          each  additional COPY.  This  is done by placing some commands on
          the  LAST line  of   your label.     This feature  is  useful for
          automatically increasing a house address, part number or anything
          that increases at a fixed rate.  







                                                                    Page 19

          An  example of  the  increment command  is:   ^300C4A2L3:    This
          translates to:  

               start at the number 300
               place it in (C)olumn 4
               (A)dd 2 with each copy printed
               place on (L)ine 3

          As  an  example,  let's  say  that  you  wanted  to  create  1000
          sequentially numbered  tickets for  your drama  club.   The first
          four  lines hold the text for the  ticket and the last line holds
          the increment codes.

                    1: No: ****, ADMIT ONE
                    2: The TAMING of the SHREW
                    3: October 15, 1991
                    4. University Drama Group
                    5: ^1000C5A1L1:

          The ^ character on line 5 is typed and does not mean to press the
          CTRL  key.   The  number 1000  will  replace the  four  asterisks
          starting in column 5 on line one.  The labels will print as 1001,
          1002 and so forth up to the number of COPIES you  have set.  Line
          5 will  print as a  space(blank line)  so take that  into account
          when making your Spaces setting.  

          The  asterisks, or  any  padding characters  you choose,  specify
          where  we  want the  number  to  print.   The  number of  padding
          characters  should  equal the  number of  digits in  the smallest
          number  of your sequence.  Insert a couple space characters after
          the last pad character if the number may increase in length.  

          Once MR. LABEL has examined the increment codes on the last line,
          the codes are placed in memory.  So, can replace  line 5 with new
          text when your  first label appears  in the top  of the screen  -
          perhaps a semicolon if writing to a file.  

          Increment Command Summary:
          The  increment code must  be on the  last line of the  label.  It
          must start  with the ^  character in  column one and  end with  a
          colon.  The  C, A, L  must be in  order or a  beep occurs.   Just
          remember that the letters spell the name CAL.



          USING FIXED LINES 
          Fixed lines are label lines that stay the  same while other lines
          vary.   Varying lines may be typed  from the keyboard or gathered
          from a list.  Fixed lines can be entered two ways:







                                                                    Page 20

          1. By changing the  Start and Stop settings so only certain lines
               need  to  be  typed.   This  method  is  more versatile  but
               requires typing the fixed text within the program.
          2.  By adding text  directly to a  printing Format.   The text is
               entered after  any printer  commands for  a format line  and
               then saved permanently  with the Format file.   Although the
               fixed text never has to be retyped, its placement on a label
               or form is quite limited.

          This  section discusses  method #1.   Method  #2 is  discussed in
          Section 5:Adding Fixed Text to a Format.
                              
          Imagine that you are a real estate agent and have sold a house at
          2630 W. Oak.  You want to  send 100 of the neighbors a letter  to
          inform them of your success and hopefully attract more business. 

          The look  of your first 3  1/2 inch by 15/16  mailing label would
          be:                 Homeowner
                              2632 W. Oak
                              Phoenix, AZ 85022 
          Since the first and third lines will remain the same, wouldn't it
          be nice if you could avoid typing them?  Let's use Fixed Lines.  
                             
          1. Enter these settings:  Lines = 3,  Width = 32,  Spaces = 3.
          2. Type and print your first label as above.  This puts the fixed
               text on the appropriate lines. ('Homeowner' and 'Phoenix, AZ
               85022') 
          3. Press <F2> from the  status line to change the START  and STOP
               settings.  Make Start = 2, Stop = 2.  Press <Esc> to go back
               to the status line.
          4. When you start typing, the only line requested will be line 2.
               Lines one and three will repeat on each label.

          MR.  LABEL's AUTO-INCREMENT feature would also be perfect in the 
          above situation  because you could set the house addresses to    
          increment  automatically. (Example:  2632 W.  Oak,  2634  W. Oak,
          2636 ...).  Then you wouldn't have to type anything!
                              
          If you want your labels to  be Centered just toggle that  setting
          to 'Y'.  The   text will be centered between the  left margin '0'
          and the Width '32'...  a center point of 16.  

          Now select F1:Printer Command and enter these characters exactly:
          5/<Esc>W1   This is a command for  a dot-matrix printer.  The Esc
          command is entered by pressing ALT-E.  Press the <Esc> key on the
          keyboard to  exit back to the Menu Line.   Now type a label.  The
          EXPANDED type font will print.  







                                                                    Page 21

          Commands sent  from F1:Printer  Command affect the  entire label.
          Notice how  you can't type as  many characters on a  line.  Since
          this font prints twice as wide, MR. LABEL has made adjustments so
          you can't  print over the edge of  your label.  Excess characters
          already on the lines  will be truncated.   Go to the F2  menu and
          turn on Centering.  Type another  label and all the lines will be
          in the  larger font and centered.  Turn on Borders and change the
          Margin.  Select <F1:CLEAR/RESET> when you're done experimenting. 



          ENVELOPES - DOT-MATRIX PRINTERS
          To  address continuous feed envelopes  or forms, you  need to set
          the SPACES setting to the  right amount.  The printer must  start
          printing  each envelope at the same horizontal row position. If a
          form is 24 lines from top to bottom then the SPACE setting should
          be:  24  - Lines  Typed  = Spaces.    The address  on  a business
          envelope starts at about column 40, so set Margin=40.

          When addressing hand fed  envelopes some dot-matrix printers will
          sound a paper out buzzer and go off-line.  The paper-out detector
          can be  turned off by a  switch on some printers or  by sending a
          direct printer command.   See 'Sending  Printer Commands'.   Some
          printers don't have a way to turn off the buzzer.  

          ENVELOPES - LASER PRINTERS
          Laser  printers  require  a series  of  setup  commands  to print
          envelopes.  You must change the:  job size, tray, page size,  and
          set the  orientation to  landscape.   This can  be done  from the
          printer control panel or  very quickly with a setup file.   Setup
          files are discussed later  in this manual.   On the HP 2P  the MP
          Tray must be specified from the control panel.  


          LASER ENVELOPES - An example
          The best  way to  print envelopes  on a laser  printer is  with a
          printing format.   Section 5  discusses formats in  detail.   The
          format on disk,  HPENVLP1.FMT prints  the return  address in  the
          upper left  corner, spaces down, prints  your destination address
          lines in  column 40, and then advances to the next envelope.  You
          could  run  a  list through  this  format  rather  than type  the
          addresses.  It's also possible to assign a different font to each
          line.  To use this format:

          1.   Select  the paper  tray.  Select  Size =  Com10 from  the HP
               control panel and load some 4 x 9.5 envelopes in the tray.
          2.  Press <F5:DOS> and from DOS  A:> copy ENVELOPE.SET prn   Type
               <exit> to return to the program.







                                                                    Page 22

          3.   Type your fixed  return address on lines 1  through 4 but do
               not print it.  Press <ESC> at "Is text Correct".
          4.  From <F1:Get Disk Format> enter <HPENVLP1>.   Exit the Format
               menu. 
          5.  At the main  screen type a few envelope addresses.   (A blank
               envelope will be ejected before the first one prints.) 

          The registered version includes additional envelope formats.


          USING FILES: An Example
          Let's experiment  with using files.   Make sure  Lines=4, Start=1
          and that your printer is on.  On your disk there is a sample data
          file  called 'Names.lst'.   We'll process this list  1 label at a
          time.  Open the F3 menu and after selecting <Read List from File>
          type  <NAMES.LST>  . Then  at the  Across  menu move  to 'Process
          Individually' and press <Enter> to toggle to 'Y'.

          This list consists of 4 line groupings of information. To read it
          properly, START and STOP must span 4 lines.  Normally START is at
          1 and STOP equals LINES but this can be changed via the settings.
          (If you look at the  file 'NAMES.LST' from DOS by  entering <TYPE
          NAMES.LST>  or by loading the  file into the  editor, here's what
          the first 2 labels would be.) 
                        ; This is a comment line and will not print
                        Paul Stone
                        Monolith Corporation
                        234 Verybig Drive
                        Phoenix, AZ 85034
                        ;
                        Jack Hill
                        1st State Bank
                        16 Main St.
                        San Diego, CA 80111

          Now, press <Esc> to  go to the Menu Line.   Press <Enter> and MR.
          LABEL will read in the  first 4 lines from your file  and display
          them  in the upper window.  Press  <Enter> to print the label. If
          you  had pressed <Esc> at  'Is text Correct'  the displayed label
          would not print.  But press <Enter> again and next group of lines
          would be read  from the file.   Keep  pressing <Enter> until  the
          computer beeps and the 'End-of-File' message appears.

          The number  of lines  read  from the  list  file for  each  label
          depends on the settings for START  and STOP.  Lines from the file
          are read into  the lines  between and including  Start and  Stop.
          (MR. LABEL ignores  lines beginning  with a  semicolon.   They're
          called  'comment' lines and can act  as visual label separators.)







                                                                    Page 23

          Here's  how  our first  label for  Mr.  Stone would  print  if in
          various ways we had changed the settings of Start and Stop. 

          Example #1:  LINES=4, START=1, STOP=4
            Paul Stone
            Monolith Corporation
            234 Verybig Drive
            Phoenix, AZ 85034    
               First 4 lines read from file. This is correct.

          Example #2:  LINES=4, START=1, STOP=3    
            Paul Stone
            Monolith Corporation
            234 Verybig Drive

               Oops! Missed the  City &  State. Even worse  the next  label
               will print as: 

            Phoenix, AZ 85034
            Jack Hill
            1st State Bank

               Our whole list will be a mess because we're grabbing 3 lines
               at a time from the file instead of 4.

          Example #3:  LINES=5, START=2, STOP=5    

            Paul Stone
            Monolith Corporation
            234 Verybig Drive
            Phoenix, AZ 85034    
               The first  4 lines  in the file  are read  into label  lines
               2,3,4,5.     Line  1  is  FIXED  and  could  hold  the  word
               'ATTENTION' or could be blank.  This is fine.               
                                   
          When reading from a file  all the settings perform exactly as  if
          the text was typed from  the keyboard.  Set the Width  setting to
          the width  of  your  label. If  a  FORMAT is  active  and  you're
          printing 1-Up labels, the  text will be printed according  to the
          printer commands in the format file.  

          You can create a list file with any word  processor including MR.
          LABEL's editor; by  using MR. LABEL's  'Print  to a FILE' option;
          or  by converting a database file (see CONVERT DATABASE under the
          F1 menu).  If using a word processor such as WordPerfect you must
          save the list via "Text Out", "DOS Text".              







                                                                    Page 24

          PRINTING LABELS ACROSS: 1 to 9 UP
          The  standard print mode is one label across(1-Up).  When reading
          from a list file, MR. LABEL can print up to 9 labels across.  You
          can also change the Margin, Copies, Centering, and Pause settings
          (see the section: 'Read  List from File').  The  number of labels
          in the  list file must be  greater than the number  of labels you
          wish to print across.  You'll need at least 3 labels in your file
          to print 3  across.   (When creating  a list,  you should  always
          avoid unnecessary blank lines between labels in your list file by
          setting Spaces  = 0.)   The font  type for all  the lines  can be
          changed via F1:Printer Command.

          Printing FORMATS  can not be used when printing more than 1-Up.  
          (Formatted  text can be printed  in different columns by changing
          the Margin  setting and running  paper back through  the printer.
          This  technique is  easier to  do with  laser printers  than dot-
          matrix printers.)

          MR. LABEL will truncate lines read from a list if the text on the
          lines  exceeds the Width * CPI adjustment.  This prevents writing
          over the  edge of the  label.  In  other words, if Width=40  (a 4
          inch label) and you have  5 CPI, there can be only  20 characters
          per line as 5cpi x 4" = 20.  

          THE ACROSS MENU          
               After you select 'F3:Read  List from File' and enter  a file
               name  you are  placed  in another  menu.   The  options  and
               default values are:
               NUMBER OF LABELS ACROSS    1
               WIDTH OF LABEL COLUMNS    32
               PROCESS INDIVIDUALLY       N

          # ACROSS
               One across is the default.   Enter a number from 2-9  if you
               wish.    The "width  of  label  columns" will  automatically
               change.

          COLUMN WIDTH
               This is the column  width and defaults to the  Width setting
               if  the # across  is 1.  It  is not to  be confused with the
               Width setting.  The  "Width of Label Columns" refers  to the
               distance, the number of characters  (in 10 CPI), between the
               left edges of the  adjacent columns of  labels.  (To put  it
               another way: How many character positions are there from the
               left  edge  of  the first  label  to  the left  edge  of the
               second.)   You can use  a ruler  to measure the  distance in
               inches between columns and multiply by 10.   So 2.6 inches x
               10 = 26 character positions.  







                                                                    Page 25

          The  number of columns(# of labels across) times the column width
          (width of a  label column) must  be less than  80 for a  standard
          printer.  If it goes over 80 the printer will start wrapping text
          to  the next line.   So, to print  3 Up, the  number of positions
          must be 26 or less because (3x26=78) and  (3x27=81).  For 5 Up it
          must be 15 or less (5x15=75).  

          Mr.  Label assumes  you're using  an 80  column printer  and will
          automatically  change  the  column width  for  you.    (The Width
          setting is automatically reset to 2 less than the 'across' column
          width).  If you are printing on a wide carriage printer, printing
          in  landscape  mode,  or  using  non-standard  label  stock,  the
          automatically calculated  column width  may not be  correct -  so
          you'll  have to manually change  it.  When  printing in different
          fonts,  MR.  LABEL will  automatically  calculate  and print  the
          correct number of characters to fit your label columns.

          PRINT INDIVIDUALLY
               "Process  Individually" works when the  # across =  1.  This
               causes printing to  pause after printing  each label.   This
               feature is  useful when printing  from a list  onto hand-fed
               envelopes.  Press <Enter> to retrieve another label.

          After selecting a list file and the # across, press <Esc> to exit
          from the menus and  the cursor will return to the Menu Line.  You
          may now review  the Settings and  make sure your  printer is  on-
          line.   Your list will print immediately upon pressing <Enter> at
          the  Menu Line.   Press any other  key and the  list printing may
          abort.







                                                                    Page 26

                       SECTION 4:  PRINTERS & PRINTER COMMANDS


          LASER VS DOT-MATRIX PRINTERS
          A wide variety  of label  stock exists for  Dot matrix  printers.
          They  are the machine of  choice for most  labeling tasks because
          they are fast, inexpensive, and reliable.  Laser printers offer a
          wider variety of fonts  and produce higher quality output.   But,
          they require more preparation and special sheet labels.

          Laser printers differ from dot-matrix machines in several ways.
          1. Laser  printers are page  printers rather than  line printers.
               Paper is pushed through the machine once the sheet is filled
               with text  or  graphics.   Partially  filled  pages  can  be
               ejected by  doing a Form Feed at  the printer console or via
               software.    Laser printers  maintain  a 1/2"  non-printable
               region at the top and bottom of paper stock.  
          2. A Laser printer needs to receive a setup string to tell it the
               paper size, paper tray, and  page margins.  Since dot-matrix
               machines expect  forms to be continuous  feed, setup strings
               are not needed. 
          3. On  Laser printers,  changing a font  automatically cancels  a
               previous font.   Dot-matrix printer commands stay on until a
               specific command is sent to turn them off.  

          IMPORTANT:  Never put pin feed  or photocopier labels  in a laser
          printer.  They  can peel off inside the machine  and that means a
          repair bill.  Only use labels that are laser printer safe. 


          SETUP COMMANDS for LASER PRINTERS
          You'll often need  to quickly send a series  of setup commands to
          tell the  printer to  change  the job  size,  page size,  use  an
          optional paper tray, print in  landscape mode on envelopes,  etc.
          These are one-time commands and should not be part of a Format.

          There are 3 ways to send setup commands.
          1.  From the  printer console.  On HP printers you can enter some
               setup  and font  commands  easily from  the  console.   Some
               printers require that the  paper size be set at  the printer
               console.
          2.  From F1:Printer Command
          3.  From a Setup file.  A setup file saves you the time of always
               entering the  commands manually.   Create a  permanent setup
               file  by entering  printer commands  within the Editor.   To
               send the commands you "print" the setup file.  Here's how to
               create a setup file and send it to the printer.
               a.) Type the  commands all on one line in  the Editor but do
                    not  press <Enter> at the  end of the  line.  The first







                                                                    Page 27

                    command should usually be  a Reset.  (See the  topic in
                    Section 6: "Escape Sequences in the Editor.)
               b.)  Save the file <Ctrl-K  S>. Exit the  editor by pressing
                    <Ctrl-K X>
               c.) Press <F5:Dos> from the main screen.
               d.) Print the setup file: C> copy filename.set prn   Nothing
                    prints but the commands have been sent.
               e.) Type <exit> to return to the program.
               f.) Use a format, type text etc.

          In 'a' above, type all the commands on one line and do  not press
          <Enter> at  the end of  the line.   Pressing <Enter> puts  a line
          feed in the setup file  and will cause a  blank line to print  on
          your first form.  This may cause text to drift lower from page to
          page (Page  Drift).  To  make sure there is  no line feed  in the
          setup, read the file into  the Editor.  Then press <Ctrl-Q  C> to
          go to  the end-of-file.  If  the cursor rests below  your line of
          commands, press  <Backspace> till  the cursor  moves  up a  line.
          Then re-save the file.

          If you must have multiple lines in a setup file  then send a Form
          Feed  from F1:Printer Command(Alt 12) or from the printer console
          after printing the setup  file.  This should position text at the
          top of form.

          Do not include font commands in setup files unless the CPI(pitch)
          of the font is 10.  Do not include the CPI in a setup file.

          On your disk there is a  setup file called ENVELOPE.SET which you
          can use to prepare the printer to print business envelopes.  Here
          are its commands:
             <Esc>E<Esc>&l81A<Esc>&l1O

          <Esc>E           ;reset the printer
          <Esc>&l81A       ;set job size to Com 10 (4" x 9.5") envelopes 
          <Esc>&l10        ;set orientation to Landscape

          On  the HP-IIP, after sending  the commands and  trying to print,
          the control panel  will flash and require you to manually set the
          MP tray to Com 10 if you haven't already done so.


          PAGE DRIFT
          Page drift is when text  on each successive page prints  lower or
          text  is lost at the bottom of a page.  When this occurs on laser
          labels it's usually because the page  size or top margin setup is
          wrong.  







                                                                    Page 28

          USING AVERY LABELS
          We've  already created setup files  for use with  all Avery laser
          labels.   For example, the  setup file called  AV5262.SET changes
          the page length and top margin to the values recommended by Avery
          for use with their #5262 two across, 8 line labels.  To use these
          labels:
          1.  Print the setup file from Dos: <copy AV5262.SET prn>  
          2.  Adjust the Lines, Spaces, and other settings
          3.  Optional: Retrieve a printing Format; F1:Get Format.
          4.  Type your labels or print a list.  

          Setup files for the  following Avery labels are included  on your
          disk: 5160, 5161, 5162, 5163, 5164, 5196, 5197, 5260, 5261, 5262,
          5266, 5267, 


          DOT MATRIX PRINTERS
          Dot matrix printers  have a variety of fonts and  settings.  Some
          can  be  accessed by  means of  control  panel switches  but most
          require  that you  send the  printer Commands(Escape  Sequences).
          For example:  A Line Feed advances the paper 1/6 of an inch.  The
          line feed  can be changed  to as  little as 1/216th  of an  inch.
          Most  printers  support underlining,  superscripts,  elite, pica,
          enlarged,  condensed,  double strike  and  even  foreign language
          characters.  

          Printer font  commands or at  least the CPI  should be sent  from
          within Mr. Label via <F1:Printer Command>.  Setting a switch does
          not tell the program the CPI. 

          Dot  matrix commands vary a bit between printers so many programs
          avoid  their use due to  compatibility problems or provide scores
          of  "drivers" for different equipment.   MR. LABEL  allows you to
          send Commands  to access any  font offered by your printer.  What
          does a  Command look like?   Here's the command sent  in BASIC to
          cause underlining on an EPSON printer: (Most printers emulate the
          Epson).  

                        Print chr$(27);'-';Chr$(1):

          MR. LABEL sends the command like this: <Esc>-1
          The command will now stay on until turned off by:    <Esc>-0

          REMEMBER: Most  dot-matrix printer commands stay  on until turned
          off!  







                                                                    Page 29

          PRINTER COMMANDS - The Basics
          DEFINITIONS:
               Code: A single letter or number sent to the printer.
               Command: A series of  codes that change the way  the printer
                    prints  text.   Dot-matrix commands  consist of  one to
                    three codes.  Laser commands often have over 25 codes.
               Format: Printer commands for each line of the label plus the
                    settings:   Lines,  Start,  Stop,  Width,  Margin,  and
                    Spaces.  
          Mr.  Label  works  with all  printers.    And,  with Mr.  Label's
          formatting commands you can  access any of your  printer's native
          or cartridge fonts and position text anywhere on a label.

          Previous  versions of Mr. Label  sent commands as decimal numbers
          and performed error checking on the codes.  Commands are now sent
          as ASCII characters and  without error checking.  You  can always
          tell  if you've sent an  invalid printer command  because part of
          your command will print  as text.  Printer commands  should never
          print.  
          This command turns on Roman Courier Bold on the HP LaserJet:     
             10/<Esc>(8U<Esc>(s0p10.00h12.0v0s3b3T<Esc>&l0O

          Here's Sub-script, Double-Strike on the Epson dot-matrix: 
             10/<Esc>S1<Esc>G     ;Turns on sub-script, double-strike
             <Esc>T<Esc>H         ;this turns both commands off

          Printer commands are upper and lower case sensitive.  If even one
          character is wrong the command will be in error.  Also, watch out
          for 0, O and 1, l - they look a lot alike.  

          The 10/ shown  in the  above commands is  the CPI(Characters  Per
          Inch) or pitch of the font and is required by Mr. Label.  It must
          precede any font command sent from within Mr. Label.  The program
          will assume your font is 10 CPI unless told differently.  If your
          Margins,  Centered  text,  etc are  not  lined  up  in the  right
          columns, it's probably because you didn't include the right CPI. 

          Selecting a font from  the console does not tell  the program the
          CPI.  Mr. Label  will assume it is 10  CPI.  If you set  the font
          via the console  to a  12 pitch font,  simply select  <F1:Printer
          Command> and enter 12/.


          TYPING ESCAPE SEQUENCES/PRINTER COMMANDS
          ASCII  stands  for   American  Standard   Code  for   Information
          Interchange  and  is the  way  the  information industry  assigns
          numbers for each character.







                                                                    Page 30

          Printer  commands are a sequence of numbers that tell the printer
          to change  the way it  prints or  operates.  In  printer manuals,
          printer commands are expressed as either ASCII decimal numbers or
          their  keyboard  equivalent.   Every  number  and  letter on  the
          keyboard has an ASCII value in the range of 32-126.  For example:
          A=65  a=97  B=66  <Esc>=27.  
            
          Numbers below 31 and over 126 are not represented on the keyboard
          and must be entered with the ALT # method.  Laser users will have
          an  easier  time  with  printer commands  than  dot-matrix  users
          because laser commands use only keyboard characters and Esc.

          In this manual when a printer code is stated as ALT # it means to
          hold down  the  ALT key,  type a  number on  the numeric  keypad,
          release  the ALT  key.   A character  will appear.   This  is the
          character  representation of an ASCII  value.  You  must type the
          numbers from the keypad, not from the top row of the keyboard. 

          Since  values  in  the  range  of  32 to  126  have  a  character
          represented on the keyboard, you may either type the character or
          its decimal value with ALT #.  All other ASCII values require the
          ALT # method.  The <Esc> character is a special case.

          <ESC>:   The number 27 is  referred to as ESCAPE or  ESC.  In the
               Hewlett-Packard  printer  manuals  <Esc> is  written  as Ec.
               This has nothing  to do with  the ESC key on  your keyboard.
               The ESC  or 27 primes  the pump.   It lets the  printer know
               that  what follows  is not  to be  printed but is  a printer
               command(an Escape Sequence).

          To  type  the <Esc>  code  from  within  <F1:Printer Command>  or
          <F1:Create Format>, you must press ALT E.  The Esc character will
          appear as a left arrow.

          Here's the  commands for an Epson  printer to turn on  the super-
          script font and double-strike:
          Decimal Values:  027 083 027 071
          Characters:    <Esc>  S <Esc> G 
          You type in Mr. Label: <Alt E>S<Alt E>G     ;this the easy way
           or also: <Alt E><Alt 83><Alt E><Alt 71>

          This command sets the HP LaserJet to 'Letter' Job Size:
          Decimal Values: 027 038 108 050 065
          Characters:   <Esc>  &   l   2   A
          You type:     <Alt E>&l2A

          Several  printer commands can go on one  line.  Do not put spaces
          between the codes.   Do not  enter printer commands  at the  main
          screen of Mr. Label.   The main screen is for typing  label text.







                                                                    Page 31

          Printer  commands are  entered at  F1:Printer Command,  F1:Create
          Format,  F1:Modify  Format, and  in the  Editor.   In  the Editor
          printer commands are handled a little bit different.  See Section
          6:"Escape Sequences in the Editor".


          SENDING A PRINTER COMMAND
          Printer commands  sent from F1:PRINTER COMMAND  affect every line
          of the label. Commands sent from CREATE FORMAT act upon selective
          lines.    From the  Menu line  press <F1>.    A menu  window will
          appear. 

          We are going  to put a dot-matrix printer into  enlarged mode and
          an HP into  a small font.   Select <Printer  Command>.  Type  the
          following:  

          Dot Matrix:   5/<Esc>W1  
          Laser IIP:   17/<Esc>(10U<Esc>(s0p16.67h8.5v0s0b0T<Esc>&l0O

          Press <Enter>.  The '5/' and '17/' are the CPI for the fonts.  

          Nothing seemed  to happen  but your Dot-matrix  printer will  now
          print   everything  in  an  enlarged   font  and  your  laser  in
          compressed.  Press <Esc> to get  back to the main screen.  Create
          a  label and print.   Change  the Width  and Center  settings and
          print another one.  Notice how wide the letters print.  
                    
          It is extremely important that the CPI(Characters per inch) be 
          included.   MR. LABEL makes spacing adjustments based on the CPI.
          The 5 CPI  means that the ENLARGED  font prints 5 characters  per
          inch.   Fonts print in various  sizes and some take  more or less
          characters per inch to display the same text.

          The important point is that when sending a command that changes a
          font  you must include the  CPI to get  proper centering, aligned
          margins and the proper number of characters on a line.


          CPI - CHARACTERS PER INCH
          To tell  MR. LABEL the correct  CPI you precede the  command with
          the  CPI figure followed by a slash.   A fractional CPI should be
          rounded  to the nearest whole number(16.67 = 17CPI).  So Enlarged
          on a dot-matrix machine would be sent as:
                      ON  5/<Esc>W1        Turns on Enlarged mode
                     OFF 10/<Esc>W0        Turns off Enlarged; Changes the 
                                            CPI to 10
          Courier Bold for an HP Laser:
             12/<Esc>(0N<Esc>(s0p12.00h10.0v0s3b3T<Esc>&l0O
          Laser fonts stay on until a new font command is sent.







                                                                    Page 32

             
          Your  printer manual should list the CPI  for each font.  You can
          determine the CPI yourself by measuring the number  of characters
          per inch with a ruler.  If no CPI is sent it is assumed to be 10.
          If  you don't provide the correct CPI, you may get truncated text
          or non-aligned margins. 

          To  avoid problems, do not use proportional fonts with Formats or
          with  the Margin  and Center  settings.   Mr. Label's  Center and
          Margin  settings and the 'C' and 'R' commands will space properly
          only when using the Fixed space fonts of your printer.


          EXAMPLES of DOT-MATRIX PRINTER COMMANDS
          Below  are some  commands  for EPSON  and  many other  dot-matrix
          printers. 

              ON           OFF               Fonts, Commands, & CPI

          18/<Alt 15>     <Alt 18>          Condensed(Compressed) 16-18    
                                             CPI usually
          <Esc>Q<Alt 132> <Esc>Q<Alt 80>   Right margin to 132 chars
          <Esc>C<Alt 20>  <Esc>C<Alt 66>   Form Length to 20 lines;        
                                            an 11" page = 66 lines
          <Esc>9          <Esc>8           Paper-out buzzer
          <Esc>G          <Esc>H           Double Strike
          5/<Esc>W1       <Esc>W0          Enlarged(Expanded) - 5 CPI
          10/<Esc>S0      <Esc>T           Superscript - 10 CPI
          12/<Esc>M       <Esc>P           Elite - 12 CPI
          <Esc>E          <Esc>F           Emphasized(NLQ)
          10/<Esc>4       <Esc>3           Italic - 10 CPI
          <Esc>-1         <Esc>-0          Underlining
          <Esc>@                           Printer Reset
          <ALT 10>                         Line feed - printhead down      
                                            one line
          <ALT 13>                         Carriage Return; printhead      
                                            to column 1
          <ALT 12>                         Form Feed - printhead to top of 
                                            next page

          Many  commands  can  be  combined.   For  example  Double-Strike,
          Enlarged creates a large and bold font.

                                   5/<Esc>G<Esc>W1

          MR. LABEL works with all printers but you'll have to check your
          printer  manual to make sure  the above commands  are correct for
          your  equipment.   Some  printers, like  the  Okidata, are  a bit
          different.   Notice that there  are no spaces  between the codes.







                                                                    Page 33

          There  is a  maximum of  50 code  characters per  printer command
          line.

          PRINTER ERRORS
          An error is made when you supply a command that  the printer does
          not  understand.  When this  happens the printer  will assume the
          command  is meant  to be  text and  will print  it.   It's pretty
          obvious when you goof-up.  Just modify the command.


          CLEAR/RESET
          Pressing CLEAR/RESET sends a command to the printer which resets
          it to the power-up state.  All the settings  and the CPI are also
          reset.   The  Format mode  is  exited.   All  files  are  closed.
          Turning your printer off and on does not reset the CPI.  For dot-
          matrix  printers  that don't  respond  to  a reset(the  printhead
          should return to  the left side of  the machine), turn  the power
          off  then on.    See Section  1:Clear/Reset  for instructions  on
          customizing the reset command.







                                                                    Page 34

                                 SECTION 5:  FORMATS


          FORMATTING PRINTED TEXT
          When you create a printing format you define how you want text to
          print on  your form.   All typed text  or lists read  from a file
          will print according to the active format.  
          You define:
          1.  How many Lines of text are on the label
          2.  The Start and Stop positions for gathering text
          3.  The Width of the form
          4.  The Spaces (blank lines) to advance after the text is printed
          5.  The Margin.  The number of spaces from the left edge  of your
               paper.  This is the column to begin printing.
          6.  Printer commands/fonts to be assigned to each Line of text

          Let's  say you're in the  mail order business  and ship packages.
          You  could create  a  shipping label  that  printed your  address
          centered  at  the  top,  moved  down  6  lines  and  printed  the
          customer's  address left justified and  with the first  line in a
          large font.

          Formatting assigns  printer commands  to  corresponding lines  of
          text. These Format commands and the settings can be saved to disk
          for  future use.   Please note, the  printer commands(format) for
          each line are saved - not any typed text.  Label text is saved in
          list files and channeled through Formats. 

          Formatting  text lets you completely control the position  of the
          printhead and the  font for each line.  Thus every line can be in
          a different font and/or position on the page. 

          This  is great for printing on Rolodex cards or designing special
          labels like shipping labels or promotional mailings.  Formats use
          printer commands  plus two  special software commands,  namely, R
          and C. 

          The R (RIGHT) Command          
          The 'R' always precedes the CPI.   Example:  20R5/<Esc>W1  Here R
          =  20.  The  CPI=5.  The R  means space over  some columns to the
          right before  printing  this  line.   The  Margin  setting  moves
          everything over while the R moves lines selectively.   The sum of
          Margin and R must always be an even number. 







                                                                    Page 35

          The C (CENTER) Command 
          The letter  'C' placed as  the first  character of a  format line
          will cause the text to be centered between the MARGIN and the 
          Width settings.   Example: C5/<Esc>W1   It works the same  as the
          CENTER  setting except it moves  individual lines rather than all
          of  them.   Remember, the  F2:Center setting  has no effect  if a
          format is  active.  The 'C'  is great for centering  a label that
          uses  different type  fonts  on  each  line.    See  the  format,
          CENTERED.FMT for a dot-matrix  Format with 3 lines, centered  and
          in 3 fonts.
                   
          Here's the priority of text placement.  Text is first moved 
          according to the MARGIN setting, then it is moved Right via the 
          'R' command and lastly centered with the 'C' command.  Don't 
          forget to include the CPI if it isn't 10. 

          If you are only sending an R, C or CPI command without anything 
          else here are some rules.  Remember that R, C, and CPI are  
          software commands  not printer  commands.   MR. LABEL  uses these
          numbers to make  various spacing  adjustments.   If your  command
          line  has an  R,  C, or  CPI  command then  they  must precede  a
          slash(/).


          RULES FOR THE R AND C COMMANDS
          1. 35R/   If only sending  an R follow it  by a slash.   The R is
               only good for that line.  It reverts to zero after printing.

          2. 5/    If only sending a CPI.  If no CPI is given for a line it
               is assumed to be 10.

          3. 35R5/ If sending an R and a CPI.

          4. The sum of MARGIN and the  R should ALWAYS be an even  number.
               Otherwise,  if you  are lining up  different type  fonts one
               above  another they may not  be perfectly aligned.   This is
               caused  by   rounding  when  MR.  LABEL   makes  his  margin
               adjustments.

          5. C/     Centers the text.  A 10 CPI is assumed.
             C5/    Centered using 5 CPI as the spacing adjustment.
             C35R5/ Centers the text after moving Right 35 spaces.  The    
                     CPI here is 5.


          NOTE TO LASER USERS
          The  formatting  examples in  this section  are for  a dot-matrix
          printer but  laser users can  modify the  format by  substituting
          their  own font  commands.   In "Section  3:Laser Envelopes  - an







                                                                    Page 36

          Example", we  had discussed a  similar laser format.   Additional
          information is also provided  with registration.  Before printing
          using laser  labels, send the  right setup commands  to configure
          your printer to your paper stock.  To use a format that prints on
          envelopes we  would  first  use ENVELOPE.SET.    This  tells  the
          printer to  print in  landscape mode on  Com 10 envelopes.   Some
          laser  printers with  inadequate RAM  may have  problems rotating
          more than one font at a time to Landscape mode.  

          When  printing on envelopes  or any "one  label to a  page" laser
          stock,  the first command (after the CPI  slash) on line 1 of the
          format  should usually be a  form feed<Alt 12>.  Spaces should be
          zero.
            Example: 10/<Alt 12><Esc>(10U...etc.  
          This  ejects the previous form  and positions the  printer at the
          top of  a new 'page' before  printing.  Do not  include the reset
          command in a format.  The  Echo command can be used to copy  long
          printer commands when creating Formats.



          RETRIEVING, CREATING AND EDITING A FORMAT

          GET DISK FORMAT          
          Here are the  general steps  to follow when  retrieving a  format
          file:

          1. At  the main screen type any Fixed text(or blank lines) on the
               lines  that  will be  outside  the Start/Stop  range  of the
               Format.
          2. Use F1:GET FORMAT to load the disk format file.
          3.  From  F2:Settings  change  any other  Settings  as  required.
               Altering the  format settings  for LINES,  START or  STOP is
               guaranteed  to  cause  problems  because  doing  so  greatly
               changes the format.
          4. At the main  screen begin typing or read a  list file into the
               format.

          On your MR. LABEL disk there  is a dot-matrix format file  called
          LETTER.FMT  which prints  the return  and destination  address on
          continuous  business envelopes in one  pass and in different type
          styles.  This format can be adapted to many uses.  We'll use this
          complicated labeling format as an  example.  The format  requires
          the user to type the  return address and message line  only once.
          (The  return   address  and  message  line  are  Fixed  for  each
          envelope.)  This sort of application is very effective in getting
          the  recipient's  attention  and  makes  for  an  attractive  and
          professional looking  mailer.  It  also saves the sender a lot of
          work.  Let's enter the fixed lines for the Format.







                                                                    Page 37

          Step #1:
          At F2:Settings change Lines to 11.  Press <Esc> to  return to the
               Menu line.  
          On lines 1,2 and 3  type your return address.  Press  <Enter> for
               all the lines up through 9.  This  makes lines 4 to 9 blank.

          On Line 10 type: <IMPORTANT>.  
          Press <Enter> for line 11.  
          Press <Esc>  at ' Is  Text Correct?   '.   It's not  necessary to
               print the text.  We have now finished Step 1, entering fixed
               lines.

          Step #2:
          Select F1:Get Disk Format.   Enter the filename <LETTER>.  (  MR.
          LABEL saves and retrieves all format files automatically with the
          .FMT suffix  ).  Upon  loading the   file, a  description of  the
          format appears.  Notice that Start is 6 and Stop is 9.  Lines 6-9
          are varying lines   -  all the rest are  fixed.  This was Step 2,
          loading the format file.  (If you wish, select <F1:Modify Format>
          to see the printer codes.)

          Step #3:
          Press  <Esc> and go back to the main  screen.  You will notice  a
          white 'F'  on the screen.   This means that a  Printing Format is
          now active. Also, the settings have changed to reflect the active
          format.  At this point you could change the Copies if you wanted.


          Step #4:
          Press <Enter> at  the Menu Line, type lines 6 - 9 and then print.
          The  LETTER Format prints your  return address in  the upper left
          corner,  spaces  down and  prints  the  destination address,  and
          finally prints our underlined message.


          CREATE PRINTING FORMAT          
          To create  a format, first  plan it  out on paper.   Then  follow
          these steps to enter it into the computer: 

          1.  Select  CREATE FORMAT.   Change the  Settings lines,  spaces,
               start, stop, width, and margin to the needed values.  
          2.  You can now enter  printer commands for each line.  Remember,
               you can use the  ECHO command to copy similar  format lines.
               Save the format if you wish.
          3.  Exit  to the Menu Line  and type a  sample label to test  the
               format.  If needed, select  F1:MODIFY FORMAT to make changes
               or to save the format.







                                                                    Page 38

          EXAMPLE: CREATING A FORMAT
          Let's recreate  the LETTER  format to  show how  it's done.   The
          first 3  lines  hold our  return  address.   Lines 6-9  hold  the
          addressee information.

          Step #1
          First Press <F1:CREATE FORMAT>.  

          Step #2:
          Then  press 2:Change Settings.   Set LINES=11.   Set the WIDTH=40
               because  the  longest line  of our  address won't  exceed 40
               characters.  Set SPACES=4   because we want some  line feeds
               to push  our envelope  through the printer  after it's  done
               being   addressed.   Set START=6   and   STOP=9  because the
               destination address  will go  into the  varying lines.   Set
               MARGIN=0.  COPIES,  PAUSE, and  BORDER are never  part of  a
               Format.  Press <Esc> to leave the settings window.

          Step #3:
          Next,  we  assign  printer commands  to  lines  of  our label  by
               pressing a  1 to  ENTER CODES.   Use the  left arrow,  right
               arrow, and backspace keys to move around on the line.  Press
               INS on the  keypad to switch  between overstrike and  insert
               modes.  

               Use the Echo  command(^E#:) to copy  a similar command  from
               another line.  This  is especially useful for laser  printer
               commands since they are long and often very similar.

          The commands  that go on  each line are  shown below.   When done
          typing, correct any commands and save the format.

          Keep in mind when creating your dot-matrix formats that text will
          be printed according to the printer commands for the current line
          and any  prior commands that have  not been turned off.   You may
          wish to  do  a RESET  before  retrieving a  format to  clear  any
          existing printer commands.  The printer commands for a line go to
          the printer just before the text.  

          These are the commands that make up the Letter.fmt format.       
             
          1.  10/  The 10 is the CPI for the line - normal text.  Lines 1-3
               contain the return address and will print in normal mode.  
                              
          2.  10/  The CPI stays at 10 and nothing else changes either.

          3.  10/  Same as above.







                                                                    Page 39

          4.  10/<Alt 10>...   Enter <Alt 10> 9 times.  Each ALT 10 appears
               as an 'L' and is a linefeed character.  After the address is
               printed in the upper left corner we need to space down (line
               feed) in  order get the print head on the right line.  Lines
               4  and 5  are blank  on our  envelopes but  if you  wanted a
               fourth return address  line on line 4 you could have put all
               the linefeeds  on line 5.  In this case we aren't changing a
               font  but  are moving  the printhead  to  a new  position in
               preparation for lines 6 - 9.  

          5.  10/  Line  5 has no printer commands and will contain a blank
               text line.  

          6.  42R5/<Esc>W1    The text for this line will  print 42 columns
               Right  from the left Margin  position.  <Esc>W1   causes the
               person's name to print in Enlarged mode.  The CPI is 5. 

          7.  42R10/<Esc>W0   We want lines 7, 8, 9 to print in normal mode
               starting  in column 42. So,  we'll turn off  enlarged mode -
               <Esc>W0  

          8.  42R10/   Line 8 prints in column 42 in normal 10 CPI.

          9.  42R10/:   Line 9 prints in column 42 in normal 10 CPI.

          10. 5/<Alt 10><Esc>W1<Esc>-1   The <Alt 10> forces the print head
               down one line.   These other codes cause text  to be printed
               in  Enlarged=<Esc>W1,  Underlined=<Esc>-1  mode starting  in
               column  number  1.   The  CPI  is set  to  5.   Our  message
               "IMPORTANT" goes on line 10.

          11. <Esc>W0<Esc>-0    <Esc>W0 turns off enlarged.   <Esc>-0 turns
               off underlining.   The enlarged and  underline commands have
               to be turned off because we want line 1 on the next label to
               start printing  in normal mode.   There is no text  for line
               11.   You may  have to  include an extra  line like  this to
               reset everything to normal mode. (Or, you could omit line 11
               and put the 'off' commands as the first commands on line 1.)

          After entering the  codes for line  11 you'll be  asked  if   the
          codes are correct.  Enter <Y> or press <Enter>.  
          Press <3> for SAVE FORMAT.  'DESCRIBE' will appear on the  
          top line.  Enter information that will explain what goes on each 
          line or what the format is for.  You have 145 characters in which
          to fit your explanation. 

          At the 'FILENAME' prompt, enter <MYLABEL>.  The format will be 
          saved. You may also precede the filename with the drive  letter -
          example: B:mylabel.   







                                                                    Page 40

          The format  is now saved to  disk and is active  in the computer.
          If you  don't have your fixed  text entered on lines  1-3 you may
          wish  to do a F1:Clear/Reset, Enter the fixed text, then retrieve
          the format <F1:Get  Format>.  At  the main screen,   you'll  type
          text on  lines 6 to 9.   The complete envelope  format will print
          including  fixed text.   You  could  also read  a  list into  the
          varying  lines of this format.   The Format  POSTCARD.FMT on your
          disk prints a return  and destination address on Avery 3.5"  x 6"
          continuous postcards (product #4167).


          MODIFY FORMAT
          If you don't like the looks of your format press MODIFY FORMAT to
          make any changes.  All the settings and codes for the format will
          be  displayed.   You  can retain  the  previous description    by
          entering  a "=".  The  format file can be  re-saved with the same
          or  a new name.  Modify mode is much like creating the format.  A
          format must be active(F) to do an edit.


          ADDING FIXED TEXT TO A FORMAT
          A  fixed line  of text  can be  added to any  line of  a printing
          format.  Thus you  can permanently embed fixed text like a return
          address right in the format.   There is a catch though.  Although
          preceeding font commands will  act on embedded text, the  'R' and
          'C' commands will not.   Embedded text will print  left justified
          and to the left  of any typed label text.  It  may also adversely
          affect the placement  of label text that  goes on the  same line.
          So, it can  be done but  it lacks the  flexibility of the  normal
          fixed lines method.







                                                                    Page 41

                              SECTION 6: THE TEXT EDITOR


          USING THE TEXT EDITOR
          Press <F4> from the status line to enter the editor.  MR. LABEL's
          editor is a powerful, full-featured editing environment.  It does
          not word wrap text but  extends long rows of text to the right on
          the screen.  Just move the cursor to the right  to view the text.
          Upon  entering  the editor  you are  placed  into a  default file
          called "NONAME".  At this  point you can do whatever want.   Read
          in files(Ctrl-K R) from disk, edit them, combine files, save them
          to a new file(Ctrl-K  S) etc.  You can have several files open in
          separate windows(Ctrl-O A) and move text between them.  Files can
          be as large as your machine's available memory.   Type (Ctrl-K X)
          to exit the editor.  (Ctrl-K Q) quits without saving the file.

          The top line  of any editing window  also has a status line.   It
          shows:
               Line:   The line number that the cursor is on.
               Col:    The number of the column containing the cursor.
               Byte:   The number of bytes the cursor is into the file.
               Insert: Indicates if Insert or Over-write mode is in effect.
                    See the command "Toggle Insert".
               Indent: Indicates that  auto-indent is on.   See the command
                    "Toggle Autoindent".
               Save:    Indicates that the file  has been modified since it
                    was last saved.


          ESCAPE SEQUENCES IN THE EDITOR
          Escape  Sequences are typed in the editor to create laser printer
          setup files.  They are typed a little different than  in the main
          program.  To type non-keyboard characters including Esc:
          1. Press <Ctrl  P> before  typing any character  less than 32  or
               over 127.   The <Ctrl P>  tells the Editor that  you want to
               type a non-keyboard character.
          2. With  Num-lock on, hold down the ALT key, type the number from
               the keypad, release the ALT key. 

          Thus, <Esc> is entered  by first <Ctrl P> and then <ALT  27>.  In
          the Editor you cannot use ALT E to type Esc.  In the  Editor some
          codes appear  differently than in the  main program (027=Esc='[',
          012=Form  Feed='L', 010=Line Feed='J').   In  the main  program a
          Line Feed(ALT 10) appears as a stocky 'L' and a Form Feed(Alt 12)
          as a stylized 'F'.  

          Laser printer  commands generally consist of  the <Esc> character
          and a bunch  of keyboard characters.   Be sure  to read  "Section







                                                                    Page 42

          4:Setup Commands for  Laser Printers".  Here's  how the Landscape
          command would be typed in the editor:
           Command:  <Esc>&l1O
           Editor:   <Ctrl P><Alt 27>&l1O
             
          Dot matrix commands  could also by entered.   To type  our super-
          script, double-strike commands in the Editor:
          Decimal Values: 27 83 27 71       ;27=<Esc>  83=S  71=G
          In the Editor: 
           <Ctrl P><Alt 27>S<Ctrl P><Alt 27>G      ;this is the easy way
          or
           <Ctrl P><Alt 27><Ctrl P><Alt 83><Ctrl P><Alt 27><Ctrl P><Alt 71>

          Remember: Printer commands are upper/lower case sensitive.  
                    Do not press <Enter> at the end of your line of setup  
                    commands.


          COMMAND SUMMARY     
          MR.  LABEL's  editing  commands   are  similar  to  Wordstar  and
          Sidekick.  When the notation Ctrl- precedes another key, it means
          that you hold down the Ctrl key and press the second key.  In the
          case of commands using  Ctrl and two keystrokes (like  Ctrl-K R),
          you hold  Ctrl down only while  you press the first  key, not the
          second.

          COMMAND                      KEYSTROKES

          Character left               arrow or Ctrl-S
          Character right              arrow or Ctrl-D
          Word left                    Ctrl-left arrow or Ctrl-A
          Word right                   Ctrl-Right arrow or Ctrl-F
          Line up                      Up arrow or Ctrl-E
          Line down                    Down arrow or Ctrl-X
          Scroll up                    Ctrl-W
          Scroll down                  Ctrl-Z
          Page up                      PgUp or Ctrl-R
          Page down                    PgDn or Ctrl-C
          Beginning of file            Ctrl-PgUp or Ctrl-Q R
          End of file                  Ctrl-PgDn or Ctrl-Q C
          Beginning of line            Home or Ctrl-Q S
          End of line                  End or Ctrl-Q D
          Top of screen                Ctrl-Home or Ctrl-Q E
          Bottom of screen             Ctrl-End or Ctrl-Q X
          Go to line                   Ctrl-J L
          Go to column                 Ctrl-J C
          Top of block                 Ctrl-Q B
          Bottom of block              Ctrl-Q K
          Jump to marker 0..9          Ctrl-Q 0 .. Ctrl-Q 9







                                                                    Page 43

          Set marker 0..9              Ctrl-K 0 .. Ctrl-K 9
          Previous cursor position     Ctrl-Q P
          New line                     Enter or Ctrl-M
          Insert line                  Ctrl-N
          Insert control character     Ctrl-P
          Delete current character     Del or Ctrl-G
          Delete character left        Backspace or Ctrl-H
          Delete word                  Ctrl-T
          Delete to end of line        Ctrl-Q Y
          Delete line                  Ctrl-Y
          Find                         Ctrl-Q F
          Find and Replace             Ctrl-Q A
          Find next                    Ctrl-L
          Abandon File                 Ctrl-K Q
          Save and Edit                Ctrl-K S
          Save and Exit                Ctrl-K X or F2
          Save to a file               Ctrl-K N
          Add Window                   Ctrl-O A or Shift-F3
          Next Window                  Ctrl-O N or F6
          Previous Window              Ctrl-O P or Shift-F6
          Resize active window         Ctrl-O S
          Begin Block                  F7 or Ctrl-K B
          End Block                    F8 or Ctrl-K K
          Copy block                   Ctrl-K C
          Move block                   Ctrl-K V
          Delete block                 Ctrl-K Y
          Hide Block                   Ctrl-K H
          Read a file                  Ctrl-K R
          Write block to file          Ctrl-K W
          Abort                        Ctrl-U
          Restore Line                 Ctrl-Q L
          Undo last deletion           Ctrl-Q U
          Toggle Insert mode           Ins or Ctrl-V
          Toggle Autoindent            Ctrl-Q I
          Toggle marker display        Ctrl-K M
          Change directory             Ctrl-J D
          Set default extension        Ctrl-J E
          Show Available memory        Ctrl-J R



          BASIC MOVEMENT COMMANDS
          These  commands move the cursor  without altering the  text.  The
          cursor can be moved in one of two ways: with a  key on the keypad
          or with  a "control character".  Control characters are activated
          by holding down the Ctrl key and pressing a keyboard key.







                                                                    Page 44

          CHARACTER LEFT                               LEFT ARROW or CTRL-S
          Moves the  cursor one character to  the left.  This  command does
          not work across line breaks.  Cursor stops when it hits column 1.

          CHARACTER RIGHT                             RIGHT ARROW or CTRL-D
          Moves the cursor one character to the right. Does not work across
          line breaks.   When it reaches the right edge of the text window,
          the text scrolls horizontally until it reaches the extreme  right
          edge of the line (column 999).

          WORD LEFT                               CTRL-LEFT ARROW or CTRL-A
          Moves the cursor to  the beginning of the word to the left.  This
          command works across line breaks.

          WORD RIGHT                             CTRL-RIGHT ARROW or CTRL-F
          Moves the cursor to the beginning of the word to the right.

          LINE UP                                        UP ARROW or CTRL-E
          Moves the cursor to the line above.  If  the cursor is on the top
          line of the window, the window scrolls down to reveal more text.

          LINE DOWN                                    DOWN ARROW or CTRL-X
          Moves the  cursor to line  below.  If the  cursor is on  the last
          line of  the window, the  window scrolls  up on line  (if there's
          more text to scroll).

          SCROLL UP                                                  CTRL-W
          Scrolls up  toward the beginning of the file, one line at a time.
          The cursor remains on its line until it reaches the bottom of the
          window.

          SCROLL DOWN                                                CTRL-Z
          Scrolls down toward the end of the file, one line at a time.  The
          cursor  remains  on its  line until  it  reaches the  top  of the
          window.

          PAGE UP                                            PGUP or CTRL-R
          Moves the cursor one page up with an overlap of one line.

          PAGE DOWN                                          PGDN or CTRL-C
          Moves the cursor one page down with an overlap of one line.

          BEGINNING OF FILE                           CTRL-PGUP or CTRL-Q R
          Moves the cursor to the first character of the file.

          END OF FILE                                 CTRL-PGDN or CTRL-Q C
          Moves the cursor just beyond the last character of the file.







                                                                    Page 45

          BEGINNING OF LINE                                HOME or CTRL-Q S
          Moves the cursor to column 1 of the current line.

          END OF LINE                                       END or CTRL-Q D
          Moves the cursor to the end of the current line.

          TOP OF SCREEN                               CTRL-HOME or CTRL-Q E
          Moves  the cursor  to  the first  line  displayed in  the  active
          window.  The cursor stays in the same column.

          BOTTOM OF SCREEN                             CTRL-END or CTRL-Q X
          Moves the cursor to the last line displayed in the active window.
          The cursor stays in the same column.


          EXTENDED MOVEMENT COMMANDS
          These commands are for quick movement.

          GO TO LINE                                               CTRL-J L
          Prompts for a line number and moves the cursor there.

          GO TO COLUMN                                             CTRL-J C
          Prompts for a column number and moves the cursor there.

          TOP OF BLOCK                                             CTRL-Q B
          Moves  the cursor to the  position of the  block-begin marker set
          with  Ctrl-K B.  The command works even if the block is hidden or
          the block-end marker is not set.

          BOTTOM OF BLOCK                                          CTRL-Q K
          Moves the cursor to the position of the block-end marker set with
          Ctrl-K K.   The command works even if the block  is hidden or the
          block-begin marker is not set.

          JUMP TO MARKER 0..9                          CTRL-Q 0 .. CTRL-Q 9
          Moves the cursor to one of  the ten text markers created with Set
          marker command.  Ctrl-l-Q 0  jumps to marker  0, Ctrl-Q 1  jumps to
          marker  1, and so on.  If  the specified marker has not been set,
          the cursor is not moved.

          SET MARKER 0..9                              CTRL-K 0 .. CTRL-K 9
          Sets one of  the ten text markers at the  current position of the
          cursor.  Ctrl-K  0 set marker 0,  Ctrl-K 1 sets marker 1,  and so
          on.
          Markers are set to mark or remember a location in your file.  

          PREVIOUS CURSOR POSITION                                 CTRL-Q P
          Moves  to the last cursor position.  This command is particularly
          useful  to move  back to  the previous position  after a  Find or







                                                                    Page 46

          Find-and-replace operation.


          INSERT and DELETE COMMANDS
          These  commands let you insert  and delete characters, words, and
          lines.  

          NEW LINE                                          ENTER or CTRL-M
          In  Insert  mode,  this commands  inserts  a  line  break at  the
          cursor's position.  If  Autoindent mode is in effect,  the cursor
          moves to  the next line and to the same  column as the first non-
          blank  character in  the  previous line;  otherwise, it  moves to
          column 1 of the new line.

          In Overwrite  mode, this command moves the  cursor to column 1 of
          the  next line without  inserting a new  line, whether Autoindent
          mode  is in effect or not.  A new line will be inserted if you're
          in Overwrite mode and the cursor is on the last line of the file.

          INSERT LINE                                                CTRL-N
          Inserts a line  break at the cursor's position.   The cursor does
          not move.

          INSERT CONTROL CHARACTER                                   CTRL-P
          Allows  control characters to  be entered into  the text. Control
          characters  are displayed  as  highlighted letters.   First  type
          CTRL-P  then enter your control  code with ALT  # method from the
          keypad.

          DELETE CURRENT CHARACTER                            DEL or CTRL-G
          Deletes the character  under the cursor and moves  any characters
          to right of the cursor one position to the left.

          DELETE CHARACTER LEFT                         BACKSPACE or CTRL-H
          Moves  the cursor  one  character to  the  left and  deletes  the
          character  positioned there.    Characters to  the  right of  the
          cursor are moved one position to the left.  If the command begins
          when  the  cursor is  in  column one,  the  invisible end-of-line
          marker for  the previous  line is deleted  and the two  lines are
          joined.

          DELETE WORD                                                CTRL-T
          Deletes the  word to the right of the cursor.  This command works
          across line breaks and thus can remove line breaks.

          DELETE TO END OF LINE                                    CTRL-Q Y
          Deletes all  text from the position  of the cursor to  the end of
          the line.







                                                                    Page 47

          DELETE LINE                                                CTRL-Y
          Deletes  the line containing the cursor and moves any lines below
          it up one line.


          FIND and REPLACE COMMANDS
          These commands find patterns of text and  optionally replace them
          with new patterns.  

          FIND                                                     CTRL-Q F
          Lets you  search for a string of text up  to 67 characters.  When
          you enter the  command, you  will be asked  for a search  string.
          The last  search string entered ( if any) will be displayed.  You
          can select it again by pressing <Enter>, edit it, or  enter a new
          search string.  <Esc>  or <Ctrl-U> will cancel a  search command,
          and Ctrl-P can be used  to enter control characters.  (To  find a
          period  at the  end of  a line,  you would search  for <.Ctrl-M>,
          where  Ctrl-M  was entered  by  pressing  <Ctrl-P> and  <Ctrl-M>.
          Ctrl-M is the Enter key, a carriage return.

          After  the search string is entered, you must specify your search
          options.  The options you used last are displayed.  You can enter
          new  options (canceling the old  ones), edit the current options,
          or  select them again by pressing <Enter>.  The following options
          are available and you may use more than one.  Ex: GUW

               B    Searches  backwards from  the  current cursor  position
                    toward the beginning of the file.

               G    Searches globally.  The entire file is scanned  for the
                    search string.

               L    Limits the search to the currently marked block.

               U    Ignores case;  treats all alphabetic  characters as  if
                    they were uppercase.

               W    Searches for whole words only;  skips matching patterns
                    embedded in other words.

          If the text  contains a  target matching the  search string,  the
          target is  highlighted and the  cursor is positioned  just beyond
          it.

          FIND AND REPLACE                                         CTRL-Q A
          This operation works the same as the Find command except that you
          can replace the found string with another string.  After entering
          the search string, you are asked to enter the replacement string.







                                                                    Page 48

          The last replacement  string entered, if any,  will be displayed;
          you may accept it, edit it, or enter a new string.

          Finally, you are prompted for options.  The options you used last
          are  displayed at first.   You may enter  new options (cancelling
          the  old ones),  edit  the current  options,  or select  them  by
          pressing  <Enter>.  The options  available are the  same as those
          for the Find command with the exception of the following:

               N    Replaces   without   asking;   does   not   prompt  for
                    confirmation at each occurrence of the search string.

          If the text  contains a  target matching the  search string,  the
          target is highlighted  and the cursor  is positioned just  beyond
          it.  You are then asked if you wish to replace it.  Press  <Y> to
          replace  it,  <N> to  ignore it,  or <A>  to  replace it  and all
          subsequent matches  without asking.  You can  abort the operation
          by pressing <Q>.

          FIND NEXT                                                  CTRL-L
          Repeats  the last search operation.   If the  last search command
          called for  Find operation,  the same search  string and  options
          will   be  repeated;   for  a  Find-and-replace   operation,  the
          replacement string will be reused as well.


          FILE COMMANDS
          File commands let you  save your edits.  To read  a file into the
          editor see the command  <Ctrl-K R> and also "Window  Commands" if
          you  want several files open at once.  Several general guidelines
          apply to most of these commands:

               Specify any legal file name,  including a drive and/or path.
               Don't use file names with the .BAK extension, however, since
               that's the extension given to backup files.

               When you are prompted for a file name, you will be shown the
               last file entered.   You can accept it by  pressing <Enter>,
               edit it, or enter a new file name.

               When  existing  files  are  edited  and  saved,  the  editor
               automatically creates a backup copy  of the file by renaming
               the old  file and  saving the new  one under  the old  name.
               (Backup files are given the .BAK extension.)

          ABANDON FILE                                             CTRL-K Q
          If  the file in  the active  window has  not been  modified, this
          command  closes the window.   Otherwise, you are  asked to verify
          that  the file should be  abandoned before the  window is closed.







                                                                    Page 49

          If the active window is the only window open, this command can be
          used to leave the editor.

          SAVE AND EDIT                                            CTRL-K S
          Simply saves the file in the active window.

          SAVE AND EXIT                                      CTRL-K X or F2
          Saves the file in the active window.  If the active window is the
          only window open, this  command will quit the editor;  otherwise,
          the  window is  closed and  you may  continue editing  in another
          window.

          SAVE TO A FILE                                           CTRL-K N
          Prompts  you for a file name, then  saves the file in the current
          window in the specified file.   This becomes the new name for the
          file in the window(and in any other windows that display the same
          file).  This  command is particularly  useful for editing  NONAME
          files.


          WINDOW COMMANDS
          When using window commands, keep in mind the following:

               The editor  can manage no  more than  six open windows  at a
               time.

               Windows occupying  fewer than  seven screen lines  cannot be
               divided.

               You can see  different parts of the  same file by using  the
               Add  window command and  specifying the name  of an existing
               window.

          ADD WINDOW                                   CTRL-O A or SHIFT-F3
          Opens another window.   You will be prompted for  a pathname/file
          to edit;   if you  don't specify one,  a NONAME file  is created.
          You can  later save  it as a  named file  with the  Save to  file
          command.  If too many windows are open or if the active window is
          too  small to  be  divided in  half  (to make  room  for the  new
          window), you will get an error message.

          NEXT WINDOW                                        CTRL-O N or F6
          Makes the next window the active window.

          PREVIOUS WINDOW                              CTRL-O P or SHIFT-F6
          Makes the previous window the active window.







                                                                    Page 50

          RESIZE ACTIVE WINDOW                                     CTRL-O S
          Changes  the size of the active window.   You can adjust the size
          by pressing the Up and Down arrow keys.   When finished, pressing
          <Enter> or <Esc> returns you to the editor.


          BLOCK COMMANDS
          A block is  an arbitrarily  defined, contiguous unit  of text;  a
          block can be as  small as a  single character or  as large as  an
          entire file.  Mark a block by placing a begin-block marker at the
          first character in  the desired  block, and  an end-block  marker
          just beyond the last  character.  Once marked,  the block can  be
          copied, moved, deleted, or written to a file.

          Although marked  blocks are normally  highlighted so you  can see
          what you've marked, the block maybe hidden (or made visible) with
          the Hide block command.  Many of the block-manipulation  commands
          described here work only when the  block is being displayed.  The
          block-related  cursor movement  commands Ctrl-Q  B and  Ctrl-Q K,
          described  in  the  section "Extended  Movement  Commands",  work
          whether the block is hidden or displayed.

          BEGIN BLOCK                                        F7 or CTRL-K B
          Marks the beginning of a block.  The marker itself is not visible
          on the screen, and the  block becomes visible only when the  end-
          block marker is set. 

          END BLOCK                                          F8 or CTRL-K K
          Marks the end of a block.  Like the begin-block  marker, the end-
          block  marker  is invisible,  and the  block  itself will  not be
          displayed unless both markers are set. 

          COPY BLOCK                                               CTRL-K C
          Creates a copy  of a  marked and displayed  block at the  current
          cursor position.  The  original block is left unchanged,  and the
          markers are placed around the new copy of the block.

          MOVE BLOCK                                               CTRL-K V
          Moves a marked and  displayed block from its current  position to
          the cursor's position. The markers remain around the block at its
          new position.

          DELETE BLOCK                                             CTRL-K Y
          Deletes a marked  and displayed  block.  The  Undo last  deletion
          command (Ctrl-Q U)  can restore  about 20 lines  of text, so  use
          this command with care.







                                                                    Page 51

          HIDE BLOCK                                               CTRL-K H
          Toggles off  and on  the visual  marking of  a block.  (Text will
          change color.)  

          READ FILE FROM DISK                                      CTRL-K R
          Reads a file  into the  editor at the  cursor's current  position
          exactly as if it were  copied from another part of the text.  The
          file read in is color marked as  a block.  See Hide Block.  Using
          this  command,  several files  can be  read  into the  editor and
          apppended.

          WRITE BLOCK TO FILE                                      CTRL-K W
          Writes  the currently  marked block  to a  file.   You are  first
          prompted for  a file name.   If the file already  exists, you are
          asked if you want to overwrite it.  If the file does not exist, a
          new file  is created.  The block is left unchanged, and the block
          markers remain  in place.  If  no block is marked  the command is
          ignored.


          MISCELLANEOUS COMMANDS
          ABORT                                                      CTRL-U
          Halts an operation in progress.

          RESTORE LINE                                             CTRL-Q L
          Will undo any changes made to a line of  text as long as you have
          not left the line.  

          UNDO LAST DELETION                                       CTRL-Q U
          Restores  lines deleted with the Delete  line command (Ctrl-Y) or
          the Delete block command (Ctrl-K Y)

          TOGGLE INSERT MODE                                  INS or CTRL-V
          Selects Insert of  Overwrite mode.  In Insert mode,  text to  the
          right of the cursor is moved to the right as new text is entered.
          In Overwrite mode, any text beneath the cursor is overwritten.

          TOGGLE AUTOINDENT                                        CTRL-Q I
          When  Autoindent mode is in effect, the new line command (<Enter>
          or <Ctrl-M>) will move the cursor to the next row and to the same
          column as the first non-blank character on the previous line.

          TOGGLE MARKER DISPLAY                                    CTRL-K M
          Hides or  makes all  text markers  visible.  Setting  a new  text
          maker automatically turns on Marker display if it was off.

          CHANGE DIRECTORY                                         CTRL-J D
          Changes the active drive and directory.







                                                                    Page 52

          SET DEFAULT EXTENSION                                    CTRL-J E
          Set  the  default extension  for file  names.   The  extension is
          automatically  added  to  file  names   lacking  extensions.  For
          example, if you  have set the  default extension to .DOC  and are
          about to  load  SAMPLE.DOC,  you can  simply  enter  SAMPLE  when
          prompted for a file name.

          SHOW AVAILABLE MEMORY                                    CTRL-J R
          Shows the amount of RAM available for editing.  







                                                                    Page 53


          We're very interested  in learning  how people use  MR. LABEL  at
          home or  work and will  be happy to  respond to any  inquiries or
          comments  about  the  program.   Suggestions  for  improving  the
          program  are always very welcome.  If you've created Formats that
          others may find  useful, please send the code and a sample label.
          We'll include it in a Format library.


          FILES on the PROGRAM DISK
          Ml.EXE is the executable code.
          ML.SYS holds screen colors and the reset command.
          README.DOC tells how to print the manual.  Lists new features.
          ML.DOC is the documentation.
          DATABASE.DTA is a sample database text file.
          QUESTION.PRT answers to common questions about the program.
          REGISTER.PRT is a registration and order form.
          INVOICE.PRT    a  registration form  for  corporate/institutional
               users.
          NAMES.LST is a sample list file
          *.SET  These are setup files for various laser papers


          FORMAT FILES

          HPENVLP1.FMT addresses envelopes on the HP laser printer.

          The  following dot  matrix  printing formats  are  on your  disk.
          Laser formats are included with registration.

          FORMATS1.PRT is a print file that shows some labels created using
          the some of  the formats(.fmt  files) listed below.   The  format
          codes are explained.  To print it type: <copy formats1.prt prn>

          LETTER.FMT  is  a  disk   format  for  printing  continuous  feed
               envelopes.
          LARGE1.FMT prints the first line of each label in expanded font.
          POSTCARD.FMT prints continuous feed postcards. Avery #4167
          CENTERED.FMT prints 3 lines, centered and in 3 fonts. Try it!
          SLANTED.FMT prints 4 lines slanted to the right.
          SHIPPING.FMT prints a  fixed and centered  4 line return  address
               and 4 line destination address on Avery shipping labels.
          ROLODEX.FMT prints a card for a Rolodex file - Rediform #06821
               Full name on first line.
          NAMETAG.FMT prints a nametag - Avery #4160;
               First Name on first line; Employer on 2nd line
          DISK5.FMT prints a label for 5 1/4 disk. Avery #4240







                                                                    Page 54

                       APPENDIX A:  DATABASE TO LIST CONVERSION


          CONVERT DATABASE          
          Let's start by explaining some database terminology.  

          FILE: A collection of data about many  people or things.(Example:
               A corporate personnel file) 
          RECORD: The Data on one person or thing.(James Worth's data).
          FIELD: One piece of information.(Jim's Zip code or city).
                    
          MR. LABEL can read fixed length database text files (ASCII row 
          and column files)  and extract up to 10 selected  fields of data.
          Each  extracted field  is assigned  to a  line of  a label.   The
          database file  to be read must  be a fixed length  text file with
          each record terminated by  a carriage return.  The  fields in the
          records must be in the same column positions.  Records can be any
          size  but only  the  first 254  characters of  each  line can  be
          accessed.   Below is  an example of  what such a  file would look
          like.   The numbered grid  is not part  of the  file.  MR.  LABEL
          reads in the first record from the file and uses it as a template
          to process the whole file.

          ....+....1....+....2....+....3....+....4....+....5....+....6....+
          Worth      James     26 S. Sundown St.    Phoenix     AZ   85022*
          Sanders    Mary      616 Sunny Crest      Scotts      CA   95066*
          Sands      Joe       12 W. Central        New York    NY   10024*
           

          Some databases and spreadsheets do not normally store information
          in plain text files  but all can create  them via a command  or a
          conversion utility (see below for a dBase example).  Most program
          manuals  discuss this topic.  Some databases begin each file with
          a header record or store data in binary code.  On the screen this
          will  appear  as a  bunch  of strange  symbols  or unintelligible
          information.   It will  have to be converted  to a standard ASCII
          text file.  
                    
          After selecting Convert Database  from the F1:Formats menu, enter
          the  filename containing the  database records.   You can include
          the drive name and path name  -  ex:  <b:\file\filename.dat>  The
          file  will be retrieved and a  message will appear if the records
          exceed  255 characters or  if there was  an access problem.   The
          file can still be processed if its longer than 254 characters but
          data  beyond that can't be extracted.   The first record from the
          file  will be displayed beneath a numbered grid which denotes the
          positions of each character in the record.  You'll be asked: 
            How many fields to extract (1-12):







                                                                    Page 55

          Enter the total number of  fields(pieces of information) you wish
          to
          extract  from the record.  For  example, LastName, FirstName, and
          Zip would be 3 fields.  

          Each  field, or item of  information in the  record, extends from
          the first character of a field  to one character before the start
          of  the next field.   (Note:  If  right-justified, numeric fields
          may actually  start a number of  spaces to the left  of the first
          character shown in the field.) 
                              
          In the above records,  the First Name field extends  from columns
          12 to 21.  The 'Street  Address' field is from columns 22  to 42.
          The last field  ends in   column   64   -  one  space before  the
          asterisk. 

          Type the BEGIN and END field positions for each field you'll be
          extracting  and press <Enter> after  each number.   If you wanted
          the Last Name field on your label then the 'begin' position would
          be 1 and  the 'end' would be 11.  Fields  may be extracted in any
          order. If you enter  a non-numeric position character it  will be
          rejected.  After  selecting each  line you may  either begin  the
          conversion or JOIN LINES.  


          JOINING LINES
          The JOIN feature is a very important tool.  If you work at a 
          company  with a data processing  department you may  wish to show
          this  feature  to  the  programming  staff.    (You  can  extract
          downloaded flat file  information without having  it preformatted
          by  a  COBOL program.)   Combine  this  feature with  MR. LABEL's
          formatting capabilities and you've got a powerful combination. 

          The  JOIN feature lets you  append lines from  your selected list
          onto the ends of others.  In our above example,  say we extracted
          the following three  fields:   Last Name, First  Name, Zip  Code.
          The first  record would display like below  and you'd be asked to
          either convert to this kind of list or join some lines.
               1. Worth
               2. James             ;each label is now 3 lines
               3. 85022

          We want to print the label as  FIRST NAME & LAST NAME.  Since the
          first  and last names have been extracted as two separate fields,
          you  need to  join them  in the proper  order.   So, the  line to
          APPEND TO  would be #2  and APPEND FROM  would be  #1.  The  data
          would now appear as:







                                                                    Page 56

               1. ;
               2. James Worth       ;after the join, each label is 2 lines
               3. 85022

          Spaces  are  automatically  inserted  between  joined  lines  and
          trailing  spaces are  trimmed.   Lines made  blank appear  with a
          semicolon and  are  removed prior  to  creating the  final  list.
          Lines may be joined more than once.  Upon approving the extracted
          fields, MR. LABEL will ask you to type a new filename to hold the
          label list.   Make sure the name  is not the same  as an existing
          file!  The list will be created from the database  and written to
          your new file.  You may view the new list file with the editor.


          CONVERSION NOTES
          Be aware that a field in the very first record of a file could be
          blank.  To  prevent any  field location problems,  read the  file
          into the editor and take a look at  the data.  The column counter
          will show the  position of each  character.   Long lines of  data
          extend off the  screen to the  right but you  can scan the  file.
          Just  move the cursor  to the right  and the screen  will scroll.
          All the records may  appear to be  on one long  line or they  may
          display one above  the other.   If they're all  on one line,  the
          carriage return character will  display as the letter "M"  at the
          end of each record.

          On your  disk there is  a file called  DATABASE.DTA which is  the
          type of file a Realtor might keep on clients.  You can experiment
          Converting this file.  Take a look at it first with the editor. 

                    Field Positions for Database.dta

                    Last Name      1-19          Zip        74-78
                    First Name    20-31          Price      79-85
                    Address       32-51          Need       86-109
                    City          52-71          Employer  110-129
                    State         72-73          Phone     130-142
                    

          CONVERTING dBASE FILES TO ASCII
          Here's a quick way to convert selected dBase III fields to a flat
          Ascii text file.  These commands are entered at the dot prompt:

          1.)  SET ALTERNATE TO LIST.DAT        ;name the disk file
          2.)  SET ALTERNATE ON                 ;open the file
          3.)  LIST NAME, ADDRESS1, CITY FOR ZIPCODE = "85274" OFF
               (Selects fields based  on a  logical condition.   The  'OFF'
               command suppresses printing of record numbers)
          4.)  SET ALTERNATE OFF                ;close disk file







                                                                    Page 57

          dBase puts your selected fields into a row and column format in a
          file  called  LIST.DAT.    All database  programs  have  commands
          similar  to this.   Read LIST.DAT into the  editor and delete any
          lines at the  start of the  file if they contain  dBase commands.
          Save the  file.  These  commands get in  there because after  you
          type  SET ALTERNATE ON dBase  copies commands, and  the result of
          commands, to your disk file.  This file can now be CONVERTED to a
          list and then processed by Mr. Label.







                                                                    Page 58

                                        INDEX


          .FMT  8, 9, 36, 52
          .LBL  8
          .lst  14
          .prt  14
          .SET  8
          'C'  8, 12, 31, 33, 34, 39
          'R'  8, 16, 31, 33, 34, 39
          <Esc>:  29
          # across  23, 24
          addendum  6, 17
          ALT # method  9, 29, 45
          ALT E  9, 29, 40
          append  7, 14, 54
          ASCII  1, 9, 28, 29, 53, 55
          Avery  4, 16, 27, 39, 52
          barcode  17
          blank lines  10, 11, 15, 23, 33, 35
          Border setting  12
          buffer  13, 15
          cartridge fonts  28
          Center setting  11, 34
          Code:  28
          color  6, 50
          Com 10  26, 35
          Command:  8, 28, 41
          comment  21
          condensed  11, 27, 31
          continuous feed  4, 20, 25, 52
          control codes  14, 15
          converting  22, 55
          CPI  11, 16, 23, 26-28, 30-35, 37, 38
          Ctrl P  40, 41
          dBase  13, 53, 55, 56
          Dos Shell  8
          double-strike  28, 29, 31, 41
          Ec  29
          Echo  17, 35-37
          elite  27, 31
          enlarged  27, 30, 31, 38
          ESCAPE  9, 26-30, 40
          Files Menu  6, 13
          FIXED LINES  10, 16, 18, 19, 35, 36, 39
          Form Feed  25, 26, 31, 35, 40
          Format:  8, 9, 20, 28
          Formatting  5, 8, 9, 28, 33, 34, 54
          HP   17







                                                                    Page 59

          increment  4, 17-19
          Insert  16, 18, 37, 40, 42, 45, 50
          job size  20, 25, 26, 29
          JOIN feature  54
          landscape  20, 24-26, 35, 41
          laser envelopes  20, 34
          laser labels  4, 26, 27, 35
          Line Feed  11, 26, 27, 31, 38, 40
          line printers  25
          memory  6, 18, 40, 42, 51
          Monochrome  6
          NONAME  40, 48
          OCR  5, 17
          Okidata  31
          orientation  20, 26
          Overwrite  14, 16, 45, 50
          Page Drift  26
          page printers  25
          page size  20, 25, 26
          paper out  20
          paper tray  20, 25
          path  14, 47, 53
          Pause feature  12
          pica  27
          Process Individually  14, 21, 23, 24
          RAM  35, 51
          RANGE ERROR  13
          Rediform  4, 52
          registered  1, 6, 21
          registration fee  1, 6
          repeating text  16
          reset command  7, 9, 15, 32, 35
          rotating  35
          screen colors  6, 7, 52
          semicolon  15, 18, 21, 55
          sequentially  17, 18
          setup commands  20, 25, 35, 41
          setup string  25
          slash  30, 34, 35
          Status Box  7, 9
          superscripts  27
          Text Editor  4, 5, 7, 40
          text file  13, 52, 53, 55
          truncate  23
          underlining  27, 31, 38
          width of label columns  23
          Width setting  11, 12, 16, 22-24
          word processor  5, 8, 22
          WordPerfect  22







                                                                    Page 60

```
{% endraw %}

## README.DOC

{% raw %}
```








          Mr. Label v5.0
          Readme.doc

          The manual for Mr. Label is on disk in a file called ML.DOC.  To
          print it:  A> copy ml.doc prn
          It will require 58 sheets of paper.

                               Changes from version 4.2
          Program supports all laser printers.  

          Provides 4 styles of borders.

          Printer commands are typed as characters rather than as ascii
          decimal numbers.

          Improved screens.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1673

     Volume in drive A has no label
     Directory of A:\

    ML       DOC    148543   7-20-90   4:37p
    README   DOC       517   7-15-90   2:09p
    DATABASE DTA      1024   6-10-88   7:08p
    ML       EXE    135728   7-20-90   5:28p
    CENTERED FMT      2113   6-27-90   3:26p
    DISK5    FMT      2113   6-27-90   3:56p
    HPENVLP1 FMT      2113   7-17-90   7:39p
    LARGE1   FMT      2113   6-27-90   3:52p
    LETTER   FMT      2113   6-27-90   4:51p
    NAMETAG  FMT      2113   6-27-90   3:49p
    POSTCARD FMT      2113   6-27-90   3:37p
    ROLODEX  FMT      2113   6-27-90   3:27p
    SHIPPING FMT      2113   6-27-90   3:28p
    SLANTED  FMT      2113   6-27-90   3:44p
    INVOICE  PRT      1966   7-04-90  11:07a
    QUESTION PRT      6353   7-20-90   3:38p
    REGISTER PRT      1840   7-04-90  11:06a
    AV5160   SET        19   6-27-90   1:06p
    AV5161   SET        19   6-27-90   1:06p
    AV5162   SET        20   6-27-90   1:16p
    AV5163   SET        19   6-27-90   1:08p
    AV5164   SET        19   6-27-90   1:09p
    AV5166   SET        14   6-27-90   1:10p
    AV5167   SET        19   6-27-90   1:11p
    AV5196   SET        19   6-27-90   1:12p
    AV5197   SET        14   6-27-90   1:13p
    AV5260   SET        19   6-27-90   1:06p
    AV5261   SET        19   6-27-90   1:06p
    AV5262   SET        20   6-27-90   1:16p
    AV5266   SET        14   6-27-90   1:10p
    AV5267   SET        19   6-27-90   1:11p
    ENVELOPE SET        14   6-10-90  12:56p
    ML       SYS         7   7-15-90   2:26p
    NAMES    LST       499   7-21-90   1:02p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       575   7-10-90   2:12a
    FILE1673 TXT      4071   8-29-90   8:40a
           37 file(s)     322558 bytes
                            9216 bytes free
