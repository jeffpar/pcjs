---
layout: page
title: "PC-SIG Diskette Library (Disk #1661)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1661/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1661"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MULTI-PRINT"

    Looking for a better alternative to the DOS PRINT program?  Something
    that will give you more control over your printing?  MULTI-PRINT accepts
    several different parameters for such added features as printing
    multiple copies of a document, left margin adjustment, page length, page
    width, and the ability to add page numbers and time stamps to the
    printout.  Like PRINT.COM which comes on your DOS disk, this program has
    a print queue for multiple files, but MULTI-PRINT can also work in batch
    mode accepting a list of documents (with command options) from a file.
    MULTI-PRINT prints a file in interactive mode constantly displaying what
    is being printed, the files in the print queue, and a helpful estimation
    of print time.
    
    The added control and flexibilty that come with MULTI-PRINT make it a
    necessary part of any user's utility library.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHKENV10.DOC

{% raw %}
```

                           " Check Environment "

                                     a

                         Multi-Print v4.0 Utility


This  utility  will display your systems 'environment' and determine wether
or not  you  have  defined  a  path  for  Multi-Print  v4.0  to  find  it's
configuration file.

If   Check   Environment   finds   a   match   to  the  environment  string
MPRINT=DRIVE:\DIRECTORY then it will stop and point it out  to  you.  If  a
match  is  not  found  your  entire environment will be displayed. For more
information about your systems 'environment' I suggest  your  consult  your
DOS  manual.  Please  read  the  User  Configuration utility documentation,
CONFIGMP.DOC, to get a better idea as to what this utility is used for.


```
{% endraw %}

## CONFIGMP.DOC

{% raw %}
```


                  Multi-Print v4.0 Copyright (c) 1987,89

             U S E R  C O N F I G U R A T I O N  U T I L I T Y


**** Note ****

You  should  read  the  section entitled 'All about Multi-Print's Switches'
contained in MPRINT40.DOC before proceeding further if you are not familiar
with how Multi-Print's 'switches' work.

***************

The  User  Configuration Utility, hereafter known as UCU, will allow you to
store your most commonly used switches to a configuration file, which  will
be  loaded  when  you  run  Multi-Print.  For example, lets say you use the
following switches the most: MPRINT /S+ /PH+ /PP+ /DT+ README.DOC
                                     ^    ^    ^    ^
                                     |__ Switches __|

You  need  only  enter them once in the UCU and they, the switches, will be
loaded  automatically  when  you  run  Mprint.  Let's   create   your   own
configuration file by running the file CONFIGMP.EXE now.

You  will  always  know  the location of the configuration file you will be
creating, or over-writing by looking at the first line inside the box which
says,'Using Config File:'.  If a configuration file was found you  will  be
shown  it's  location  on  this line, such as: C:\DOS\. Okay, now let's get
started. The first question is:

Enable the print sensor [N] (Y or N) ?

The 'N'(No) in the box '[ ]' tells you that this is the value  Mprint  will
use  right  now,  if you decided NOT to alter it. If you want Mprint to use
the print sensor just type a 'Y'.  If you want to keep what it  is  set  to
now  just  tap  the RETURN button. Any other answer besides an 'N' or a 'Y'
will be met with a beep.

Further on you will be asked another question that requires you to enter  a
number within a certain range. For example:

Set default page length to [64] (25-200) ?

At this point the UCU is asking you  for  a  number  between  25  and  200.
Anything else will be rejected and you will have to re-enter your number.

There are eleven questions in all. These questions allow you to pre-set the
most commonly used switches. When you finish answering all of them you will
either be asked if you want to save the values you entered or over-write an
existing configuration file file.

The   UCU  has   a  special  feature  which  enables  it  to  search  for a
configuration file if one was not found in your current  directory.  Here's
how you can do this:


 User Configuration Utility         Page 02                Multi-Print v4.0


Type  the following in your AUTOEXEC.BAT file which is, or will be, located
in the root directory of your hard disk, or diskette.

SET PATH=DRIVE:\DIRECTORY     <- Location of MPRINT40.EXE
SET MPRINT=DRIVE:\DIRECTORY   <- Location of MPCONFIG.CFG
                                 Set to same location as MRINT40.EXE.

Now just re-boot your system and your all set to go  !  Place  MPRINT40.EXE
and  your newly created configuration file MPCONFIG.CFG in the location you
specified in 'DRIVE:\DIRECTORY'.

Now no matter where you are in your system you can run Multi-Print  and  it
will  load  it's configuration file. If you are in a directory that already
has a configuration file the UCU and Multi-Print will  load  it  BEFORE  it
goes  out  to  search  for  the  one  in your pre-set directory above. This
feature allows you to have a  seperate  configuration  file  for  different
locations on your disk for different documents.

And that's it !







```
{% endraw %}

## FILE1661.TXT

{% raw %}
```
Disk No: 1661                                                           
Disk Title: Multi-Print                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Multi-Print                                              
Author Version: 4.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Looking for a better alternative to the DOS PRINT program?  Something   
that will give you more control over your printing?  MULTI-PRINT accepts
several different parameters for such added features as printing        
multiple copies of a document, left margin adjustment, page length, page
width, and the ability to add page numbers and time stamps to the       
printout.  Like PRINT.COM which comes on your DOS disk, this program has
a print queue for multiple files, but MULTI-PRINT can also work in batch
mode accepting a list of documents (with command options) from a file.  
MULTI-PRINT prints a file in interactive mode constantly displaying what
is being printed, the files in the print queue, and a helpful estimation
of print time.                                                          
                                                                        
The added control and flexibilty that come with MULTI-PRINT make it a   
necessary part of any users utility library.                            
                                                                        
File Descriptions:                                                      
                                                                        
MPRINT40  EXE  Multi-Print v4.0 Program.                                
MPRINT40  DOC  Documentation file.                                      
CHKENV10  EXE  The 'Check Environment' utility.                         
CHKENV10  DOC  'Check Environment' documentation.                       
CONFIGMP  EXE  User Configuration utility                               
CONFIGMP  DOC  Documentation file.                                      
STATMENT  LIC  Registration agreement & disclaimer.                     
LICENSE   LIC  Form to register your copy of Multi-Print v4.0           
DISTRIBG  LIC  Distribution aggreement.                                 
README    FIX  Documentation erros corrected.                           
README!   MP   A quick start to running Multi-Print.                    
GO        BAT  Batch file to get Multi-Print up and running fast.       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## MPRINT40.DOC

{% raw %}
```















                               Multi-Print (tm) v4.0

                     Copyright (C) 1987-1989 Gerald P. Doyon

                              February 6, 1989

                   " An Enhanced and Innovative Print Utility "



Multi-Print v4.0                                  User Documentation Page 2
Multi-Print  v4.0                Page  02                      Users Guide

                       T A B L E  O F  C O N T E N T S



  Introduction                                                3
  System Requirements . . . . . . . . . . . . . . . . . . . . 4
  Command-Line Switches                                       4
    /CO:xxx - # Copies. . . . . . . . . . . . . . . . . . . . 4
    /DD - Duplicates Documents. . . . . . . . . . . . . . . . 5
    /DC - Display User Configuration default values . . . . . 5
    /DM - Display Multi-Print default values. . . . . . . . . 5
    /DT - Print current Date/Time stamp . . . . . . . . . . . 6
    /DV - Run in DESQ View. . . . . . . . . . . . . . . . . . 6
    /? & /H - Help. . . . . . . . . . . . . . . . . . . . . . 6
    /LM:xxx - Set left margin . . . . . . . . . . . . . . . . 7
    /OP - Output to Printer . . . . . . . . . . . . . . . . . 7
    /OS - Output to Screen  . . . . . . . . . . . . . . . . . 7
    /PH - Print page headers. . . . . . . . . . . . . . . . . 7
    /PL:xxx - Set Page Length . . . . . . . . . . . . . . . . 7
    /PP - Print page numbers. . . . . . . . . . . . . . . . . 8
    /PS:xxxx - Set Printer Speed  . . . . . . . . . . . . . . 8
    /PW:xxx - Set page width. . . . . . . . . . . . . . . . . 8
    /S - Print Sensor . . . . . . . . . . . . . . . . . . . . 8
    /SS - Save Screen . . . . . . . . . . . . . . . . . . . . 9
    /ST - Print Sensor Test . . . . . . . . . . . . . . . . . 9
    /WE - Watch edge of paper . . . . . . . . . . . . . . . . 9
    /WF:filename - Work Files . . . . . . . . . . . . . . . . 10
  Multi-Print in action                                       11
    Statistics Window . . . . . . . . . . . . . . . . . . . . 11-14
    Text View Window. . . . . . . . . . . . . . . . . . . . . 14
Primary On-Line Commands                                      15
    [A]bort . . . . . . . . . . . . . . . . . . . . . . . . . 15
    [N]uke  . . . . . . . . . . . . . . . . . . . . . . . . . 15
    [S]ensor On/Off . . . . . . . . . . . . . . . . . . . . . 15
    [P]ause . . . . . . . . . . . . . . . . . . . . . . . . . 16
    [-]/[+] Scroll  . . . . . . . . . . . . . . . . . . . . . 16
    [V]iew Queue  . . . . . . . . . . . . . . . . . . . . . . 16
    [Up-Arrow]/[Down-Arrow] - # Copies  . . . . . . . . . . . 16
    [H]elp  . . . . . . . . . . . . . . . . . . . . . . . . . 16
    [Q]uit  . . . . . . . . . . . . . . . . . . . . . . . . . 17
    [F-1] Toggle between command lists. . . . . . . . . . . . 17
    [O]utput  . . . . . . . . . . . . . . . . . . . . . . . . 17
Secondary On-Line Commands                                    17
    [D]isplay Defaults. . . . . . . . . . . . . . . . . . . . 17
    [M]emory Statistics . . . . . . . . . . . . . . . . . . . 17
    [U]se Headers . . . . . . . . . . . . . . . . . . . . . . 18
  Thanks & Things to come . . . . . . . . . . . . . . . . . . 19
  Shareware/Registration  . . . . . . . . . . . . . . . . . . 20


Multi-Print v4.0                                  User Documentation Page 3
Multi-Print  v4.0                Page  03                      Users Guide


I N T R O D U C T I O N

Welcome  to  Multi-Print  version  4.0  !!   Multi-Print  was  specifically
designed  to  make printing your documents less of a chore, and to give you
more control over the printing process than  the  program  PRINT.COM  gives
you,  which  is  supplied  with  your  operating  system.   A  big  part of
Multi-Print's objective is to keep you informed  as  to  exactly  how  your
document's printing is progressing.

For  those  of you already familiar with Multi-Print you will find that the
new and enhanced capabilities of this version are greater than all previous
versions combined, and promises to be even better in the  months  to  come.
You should make sure that the following files are contained in your archive
of MPRINT40.ARC:

  MPRINT40.EXE   - This is Multi-Print v4.0
  MPRINT40.DOC   - and its associated documentation.
  CHKENV10.EXE   - The 'Check Environment' utility
  CHKENV10.DOC   - 'Check Environment' documentation
  CONFIGMP.EXE   - User Configuration utility
  CONFIGMP.DOC   - and its documentation
  STATMENT.LIC   - Registration agreement & disclaimer
  LICENSE.LIC    - Form to register your copy of Multi-Print v4.0
  DISTRIBG.LIC   - Distribution aggreement.
  README.FIX     - Documentation erros corrected.
  README!.MP     - A quick start to running Multi-Print
  GO.BAT         - Batch file to get Multi-Print up and running fast.

You  can rename the executable file MPRNIT40.EXE to MPRINT.EXE, or whatever
is comfortable for you to use. I will refer to MPRINT40.EXE  as  MPRINT.EXE
from now on.

If  you  do notall of the above files, you can find the complete archive at
the following FINE BBS's:

Georgia Board BBS  (912) 923-8180  2400 buad, 24 hours
Dixieland BBS      (912) 471-6833  9600 baud, 24 hours
Capture BBS        (912) 923-6471  2400 baud, 24 hours
Channel-1          (617) 354-8873  9600 baud, 24 hours
PC-Ohio            (216) 381-7946  9600 baud, 24 hours
Northern Lights    (207) 766-2467  9600 baud, 24 hours
GEnie IBM Roundtable   ( My user I.D. here is G.DOYON)
Compuserve IBM section ( [75340,272] )

I   like  recieving mail from people who have questions on the operation of
Multi-Print, and yes, even problems ! So far I've been able to  respond  to
every letter, so keep 'em coming ! Feel free to call me at home if you have
any problems, whether you are a registered user or not.

Gerald P. Doyon
246 Collins Ave
Centerville, GA 31028
(912) 953-2817 ( Eastern Standard Time )


Multi-Print v4.0                                  User Documentation Page 4
Multi-Print  v4.0                Page  04                      Users Guide


R E Q U I R E M E N T S

You should run Multi-Print on a IBM or 100% compatable.  You  must  have  a
minimum of 105k or RAM available to run Multi-Print.  Multi-Print should be
able  to  run  easily  on  most  printers,  but  works  best  on  Epson and
compatables. I wrote Multi-Print with MS-DOS version 3.2. I do not know  if
this program will operate on earlier, or later version.

For best printing results, I suggest making your printer ignore the paper's
page breaks - Multi-Print will handle it.


S W I T C H E S

Hint: A switch is basically what the  name  implies,  it  usually  switches
something  on  or  off. These on/off switches are convenient. If you type a
switch, but realize at the end of the command line that you need ( or don't
need) that option, you can cancel the other switch by typing  the  opposite
one.  Also, switches and filenames need not be in any specific order on the
command-line.  You  can  first have a switch, then a filename, then another
switch or two.

All on/off switches use the +/-, respectively.


--------------------------------------------------------------------------
 /CO:xx                                                          # Copies
--------------------------------------------------------------------------

You are limited to a maximum of 99 copies PER document. If you  attempt  to
exceed  the  maximum,  Multi-Print  will adjust the number of copies to 99.
Only the FIRST document loaded in Queue will effect by the number if copies
you set here.


Multi-Print v4.0                                  User Documentation Page 5
Multi-Print  v4.0                Page  05                      Users Guide

--------------------------------------------------------------------------
 /DD+  or /DD-                                        Duplicate Documents
--------------------------------------------------------------------------

Multi-Print has incorporated a unique feature which will ensure that you do
not load the same document twice in Queue. By default this option is set to
/DD-, or duplicates NOT allowed.  However, you can override the default  by
using the /DD+ switch, duplicates allowed.

MPRINT /DD+ TEST.DOC

or,  should you decide that you really DON'T want duplcates and do not want
to re-type the command line just add the opposite switch, for example:

MPRINT /DD+ TEST.DOC /DD-

which effectively cancels out the first switch !

Note: When the number of documents in Queue becomes lengthy, say in  excess
of 100 files, you might notice a slight delay. This is due to the fact that
before  a  filename  can be added to the Queue, it must first be checked to
see that it has not been previously loaded.


---------------------------------------------------------------------------
 /DC                                   Display Configuration File Defaults
---------------------------------------------------------------------------

   This  switch  works  identical  to  the  '/DM' switch above, except that
  Mutli-Print will display the values/defaults YOU have written in  one  of
  your user configuration files.

  Note: Any other switches/filenames entered on the command  line  will  be
  ignored.  After  displaying the defaults in your configuration file(built
  by the User Configuration utility, remember ?), Multi-Print  will  return
  you to the DOS prompt.


--------------------------------------------------------------------------
 /DM                                         Display Multi-Print Defaults
--------------------------------------------------------------------------

You may view exactly what default values Multi-Print will load  by  default
by  using  this  switch.  Settings for things such as page length, margins,
page width, printer speed, etc...

These are the preset values received within  Multi-Print.  Do  not  confuse
this  switch  with  the '/DC' one which will show you the dfefaults you set
via the User Configuration utility.  You will be returned to the DOS prompt
after Mulit-Print's defaults have been displayed.


Multi-Print v4.0                                  User Documentation Page 6
Multi-Print  v4.0                Page  06                      Users Guide


---------------------------------------------------------------------------
 /DT+ or -                                                    Date  & Time
---------------------------------------------------------------------------

This feature is particularly nice for programmers  who  have  a  hard  time
keeping  track  of  their most current copy of source code. This problem is
solved by printing the document name, file date,and current date  and  time
on the top lines of your document in this format:

'* File name : MPRINT40.DOC  21-Dec-88'
'* Printed on: Saturday November 26, 1988 1:31:36 p.m.'

Note:  This  switch  will only work when a document is printing in 'Manual'
mode, since Multi-Print cannot compensate for documents with form-feeds  to
control the paging.


--------------------------------------------------------------------------
 /DV                                                             DESQview
--------------------------------------------------------------------------

New  to  Multi-Print is its ability to run in the multi-tasking environment
of DESQview. To run Multi-Print in DESQview simply use  the  '/DV'  switch,
for example:

MPRINT TEST.DOC /DV

If  DESQview is not already loaded, then Multi-Print will not run.

Note: You MUST load Multi-Print in DESQview with direct screen writes OFF !


---------------------------------------------------------------------------
 /H  or /?                                                            Help
---------------------------------------------------------------------------

If you cannot remember how to use a certain switch, or even remember how to
invoke Multi-Print then use the Help switch like this:

MPRINT /H  or MPRINT /?

If  this  switch is present on the command line, even if other switches are
used, the help screen will be displayed and you will be returned to the DOS
prompt.


Multi-Print v4.0                                  User Documentation Page 7
Multi-Print  v4.0                Page  07                      Users Guide


---------------------------------------------------------------------------
 /LM:xxx                                                       Left Margin
---------------------------------------------------------------------------

To set your left margin type the following: MPRINT /LM:5 MPRINT40.DOC. This
will set your left margin  to  indent  five  spaces  to  the  right  before
printing.  The maximum length for the left margin is 50. The default margin
has  been  set  to 0, or no indentation.  You may change your configuration
file at any time to the value which you use most often. This is in addition
to any margins built in to the document itself.


---------------------------------------------------------------------------
 /OS or /OP                                                         Output
---------------------------------------------------------------------------

There are two output modes, or places where your text will be  printed:  to
the  screen or printer. You will always be able to see your document in the
Text View window whether output is being directed to the  printer  or  not.
For  instance,  if you want to familiarize with Multi-Print, or you wish to
pre-view your document without having to waste  any  paper  just  type  the
following:

MPRINT /OS MPRINT40.DOC

Multi-Print  will  function  in  screen  mode just as it does when actually
printing.  The default mode is output to the printer. Output to the  screen
is just that, no printing is being done.

The switch '/OP' will cancel out the previous one, '/OS', if entered on the
same   command   line.  This  saves  you   from   re-entering   the   whole
command-line.

---------------------------------------------------------------------------
/PH+  or  /PH-                                          Print Page Headers
---------------------------------------------------------------------------

For  any  document that Multi-Print has to MANUALLY insert page breaks for,
you have the option of printing page headers.  When Multi-Print is  up  and
running  you will then be prompted for a header, a maximum of 78 characters
in length. It will then be centered and be printed on the top line of  each
page.  More  on  this  option later when we get to the on-line commands. To
activate page headers, use the switch '/PH+' on  your  command  line.   The
default is '/PH-', or no page headers.


---------------------------------------------------------------------------
 /PL:xxx                                                   Set Page Length
---------------------------------------------------------------------------

The  default  page length is set to 64 lines per page.  You can change this
at any time either by altering your user configuration file  via  the  User
Configuration utility (CONFIGMP.EXE), or on the command-line. For example:

MPRINT MPRINT40.DOC /PL:66

The maximum page length allowed has been set to 999.

Multi-Print v4.0                                  User Documentation Page 8
Multi-Print  v4.0                Page  08                      Users Guide


---------------------------------------------------------------------------
 /PP+ or /PP-                                           Print Page Numbers
---------------------------------------------------------------------------

You  also  have the option to have Multi-Print to print page numbers on the
bottom of each page, provided your document is  printing  in  MANUAL  mode.
Page numbering will appear in this format: '1 of 5', '2 of 5', etc..

To  activate  this  feature use the switch '/PP+', or 'PP-' to de-activate.
The default is page numbering OFF.


---------------------------------------------------------------------------
 /PS:xxxx                                            Set Printer CPS Speed
---------------------------------------------------------------------------

The default printer speed in characters per second, CPS, is set to 160. You
can change  the  default  two  different  ways.  Either  change  your  user
configuration  file  or  use  the  'PS:xxxx'  switch  to  alter  it  on the
command-line. For example:

MPRINT TEST.DOC /PS:180

Note: Minimum speed is 60 CPS, maximum setting allowed is 1500 CPS.


---------------------------------------------------------------------------
 /PW:xxxx                                                   Set Page Width
---------------------------------------------------------------------------

The default page width has been set to 80 characters. You may  change  this
by  entering  this  switch.  For example: MPRINT /PW:100 will set your page
width to 100 characters. Maximum page width is 255 characters.


---------------------------------------------------------------------------
 /S+  or /S-                                           Print Sensor On/Off
---------------------------------------------------------------------------

Also new to Multi-Print is its ability to sense whether or not your printer
is on/off, or, if some sort of error  condition  has  occurred.   No  print
utility can successfully trap EVERY error for EVERY printer and Multi-Print
is  one  of them. Multi-Print may not work with your printer at all and may
indicate that your printer is off line, when it really isn't.

In such an instance, you should disable the sensor option for best results.
To find out whether or not the sensor will  work  with  your  printer,  use
please look at the Sensor Test switch below, '/ST'.

The  print sensor will NOT intercept every printer error and is by no means
fool proof ! The sensor merely gives you a  margin  of  protection  against
occassional  'non-serious'  printer errors (the term 'non serious' may mean
different things to different people).


Multi-Print v4.0                                  User Documentation Page 9
Multi-Print  v4.0                Page  09                      Users Guide


---------------------------------------------------------------------------
 /SS+ or /SS-                                                  Save Screen
---------------------------------------------------------------------------

You can optionally allow Multi-Print to save a copy of your  screen  BEFORE
it  starts  operating.   When  Multi-Print  is finished your screen will be
restored exactly as it was before. Use '/SS+' to save the screen, or '/SS-'
to disable screen saving.  Nothing will  happen  if  you  have  Multi-Print
already  configured to save your screen and you enter the switch '/SS+'. By
default Multi-Print will restore your screen to what it looked like  before
you ran this program.


---------------------------------------------------------------------------
 /ST                                                     Print Sensor Test
---------------------------------------------------------------------------

Not all printers will respond to Multi-Print's print sensor. To find out if
yours will/will not, run the built-in sensor test. For example:

MPRINT /ST

You  should  run  this  test  with  both  your printer on, and off for best
results.

---------------------------------------------------------------------------
 /WE+ or /WE-                                                   Watch Edge
---------------------------------------------------------------------------

If any line within the document you will print is LONGER than your set page
width  that  line will be truncated. This switch prevents your printer from
running off the 'Edge' of the paper. Most newer printers will wrap the word
around to the next line, so this feature may not be useful to you. You  can
activate  this  switch  by  typing '/WE+' on the command-line, or '/WE-" to
DE-activate it. This option may be pre-set within  the  User  Configuration
Utility.


Multi-Print  v4.0                Page  10                      Users Guide


---------------------------------------------------------------------------
 /WF:filename                                                   Work Files
---------------------------------------------------------------------------

Work files are a fast and painless way of printing documents that you print
often.  Many related documents can be grouped in a work  file  and  printed
effortlessly.   Typing  a  long  list  of filenames on the command line can
become cumbersome.

To create a work file you can use any word processor that makes pure  ASCII
files.   I suggest you give your work file an extension of '.WRK' so as not
to confuse them with your other documents, however, it  is  not  necessary.
Here is an example of a work file I use often:

  MPCODE.WRK    <-- Work file name

  MP4?.PAS    /PH+ /PP+ /DT+ \
  MPWORK.PAS                  |
  MPCONFIG.PAS                |
  C:\TURBO\MP4\MPHELP.PAS     |--- Contents of the work file.
  MPTEXT.PAS                  |
  MPVARSB.*                   |
  MPQUE.PAS                  /

Please  note  that wildcards, paths and switches are FULLY supported within
work files. ( Do not call another work file from WITHIN a work file !)

Note:  To set some of your more commonly used switches and have them loaded
whenever you run Multi-Print please refer  to  the  document  CONFIGMP.DOC.
Remember   that   you   can   temporarily  over-ride  any  values  in  your
configuration file by alternately using the switches  '+'(on)  or  '-'(off)
capability on the command line.

Multi-Print v4.0                                 User Documentation Page 11
Multi-Print  v4.0                Page  11                      Users Guide


Multi-Print I N  A C T I O N

There  are  two  windows shown while Multi-Print is running. I call the top
window the 'Statistics' window, and the bottom the 'Text' window.   Let  me
explain  the  Status  window  first.   The  best  way for you to understand
everything that you see would be to run Multi-Print using  MPRINT40.DOC  to
work  with.  Just type 'MPRINT40 /OS MPRINT40.DOC' on your command line and
we'll continue.

Let's discuss the all the information provided to  you  in  the  Statistics
window  in  conjunction  with  the  on-line commands and how they interact.
We'll start first with the:


---------------------------------------------------------------------------
                         Statistics Window - Line #1
---------------------------------------------------------------------------

Output to:
----------

At this time you will see the word 'Screen'  displayed  here.   This  means
that  the  document  is  being  sent  ONLY  to the screen at this time.  By
default Multi-Print sends all output to the printer,  or  screen,  but  you
have re-directed your document to the screen by using the '/OS' ( Output to
Screen ) switch used above.

You  can  re-direct output from printer to screen, or screen to printer, by
tapping the 'O'utput command.  If you are currently outputing your document
to the screen you will immediately start printing your  document.  At  this
point  you  will notice a highlighted bar appear in your Text window.  This
is a reference point showing you that all text below the  highlighted  line
has  been re-directed to the printer, or screen which ever the case may be.
The 'Output to' status line will now reflect your change in output and  you
will see the word 'Printer'.

If  your  printer was not on-line when you tapped the 'O'utput key to start
printing your document a small window will pop up tell you that you have  a
printer error.  Please refer to the on-line 'S'ensor command below for more
on the printer error trapping options.

Queue
-----

The  number  of  documents  you  have  in  'Queue' (documents waiting to be
printed) will be displayed at all times. This number does not  include  the
document  currently  being  printed  and  will  decrease after the document
currently printing has completed.

Multi-Print v4.0                                 User Documentation Page 12
Multi-Print  v4.0                Page  12                      Users Guide


Page Mode
---------

There are only two Page(paging) Mode's, Automatic and  Manual.  Multi-Print
has  the unique ability to automatically choose which method of paging your
document would be best.  Your document will first be scanned, or  analyzed,
before  it is printed.  If a form feed is found while scanning, Multi-Print
will shift into Automatic paging. It will let  the  document  automatically
page itself.

There  is Manual mode. Let's say, for example, that the current page length
has been set to 64 lines per page.  If while scanning, Multi-Print does not
come across a page break before the 64th line it will then decide that your
document you should be printed in Manual mode. All page breaks will be made
at the specified page length of 64 lines.   If  you  know  that  there  are
built-in  page breaks in your document but Multi-Print wants to print it in
Manual mode because of what we discussed in the  last  few  lines  you  can
'over-ride' it.

To  over-ride  just temporarily set your page length to a greater value, or
past where you think the first page  break  occurs.   You  can  temporarily
over-ride  the  page  length you set in the User Configuration utility with
the command-line switch '/PL:xxx'. For instance:  MPRINT  /PL:100  TEST.DOC
will  force  Multi-Print to print a document in Manual mode if a page break
is not found before the 100th line.

Print Time
----------

The amount of time that your document will take to print  is  dependent  on
your  printer's speed in characters per second(CPS). The default CPS is set
to 160 CPS. Consult your printer's manual for the correct speed. Be sure to
enter this figure in your user configuration file, or  specify  it  on  the
command line with the switch '/PS:xxxx'.

Note: The maximum print speed allowed is 9999 CPS.

Multi-Print v4.0                                 User Documentation Page 13
Multi-Print  v4.0                Page  13                      Users Guide


Scroll Rate
-----------

Scroll rate refers to the speed in which your documents is displayed in the
Text  View  window.  There are three scroll speeds available: Normal, Slow,
and Slower.

The default speed is set at the 'Normal' rate, which is FAST.  This rate of
scroll is not ideal for previewing your document. Just tap the '-' to  slow
it  down  a  little, and tap it again to slow it down ALOT.  If you want to
start scrolling at the normal rate just tap the '+' however many times  you
pressed the '-' key. Easy !

To  completely  stop  the  document from printing/scrolling tap the 'P'ause
key. To resume printing tap any key.

If you run Multi-Print initially outputing to the screen  the  scroll  rate
will be stepped down to 'Slow' scrolling.

Note:  Slowing  the  scroll  rate  while  the  document  is  printing will,
naturally, slow down the printing.

Sensor
------

The print sensor is either 'On' or 'Off', and will be displayed/updated  at
all   times.  The  default  is  'On',  unless  otherwise  changed  via  the
command-line switch '/ps-' or your configuration file. You can  toggle  the
print sensor On/Off by tapping the 'S'ensor key.

Copies
------

Displays  the  amount  of  copies  left to print for the document currently
printing.  You may adjust the number of  copies  to  print  by  using  your
up-arrow  key  to  INCREASE  the  copies, or the down-arrow key to DECREASE
them.  You are limited to a maximum of 99 copies per document at any  given
time.

--------------------------------------------------------------------------
                        Statistics Window - Line #2
--------------------------------------------------------------------------

# Pages
-------

After Multi-Print has scanned the document it will immediately indicate how
many pages this document will take to print.

Multi-Print v4.0                                 User Documentation Page 14
Multi-Print  v4.0                Page  14                      Users Guide


% Printed
---------

There  are  two indicators that show how far the document has progressed in
its printing.  I call them the  'Digital'  and  'Analog'  indicators.   The
digital  indicator  is  very  precise  and  tells  you exactly how much has
printed, such as 4 %, 17 %, 78 %, etc.. The  other  indicator,  the  Analog
display,  was incorporated for one important reason. I usually don't sit in
front of the computer and wait for my document to finish printing.  From  a
distance  I  cannot  see  the  Digital  status  because it is too small and
doesn't catch my eye.  On the other hand, the Analog % is  perfect  because
at  a  glance  I  can  roughly  tell  how  far the document is along in its
printing.

Each block that pops up represents 10 % of the document that  has  printed.
When  it  reaches  the middle partition the document is 50 % printed.  Both
indicators are very useful, as you will come to know.

FileName
--------

[Top Line] The document's name currently being printed.
[Bottom]   The next document in Queue to be printed.

Size
----

The size of the document in bytes.

Date
----

The creation date of that document.


--------------------------------------------------------------------------
                        Text View Window - Line #3
--------------------------------------------------------------------------

The  Text  View  windows  primary  job is to display your document as it is
printing, at ALL times - even while printing.

The  upper-right  corner  of  the  Text View window will always display the
location of the document currently printing. If the location path  is  more
than  twenty  characters in length it will be truncated and a '+' sign will
be stuck to the end to indicate that  the  path  length  was  exceed.   For
example    the    path:    C:\DOS\TURBO\PASCAL\MPRINT.PAS   would   become:
C:\DOS\TURBO\PASCAL+

The upper right portion of the Text View will display how many pages of the
document has printed. It also shows thewhich line is being printed  on  the
current page.


Multi-Print v4.0                                 User Documentation Page 15
Multi-Print  v4.0                Page  15                      Users Guide


--------------------------------------------------------------------------
                       Primary On-line Command list
--------------------------------------------------------------------------

We  will now catch up and explain the rest of the on-line command functions
that we did not cover in the process of describing the Statistics and  Text
view windows.

'A'bort
--------

Any  time a document is printing you have the ability to abort it - to stop
it from printing.  If you are printing multiple copies of  a  document  and
you  abort the document, you abort ALL of them ! Multi-Print will then load
and print the next document in Queue, if there is one.  Since this  command
is  'destructive', you will be given a choice to back out.  Just type a 'N'
to the question " Do you REALLY want to abort this document  ?  (Y/N)".  If
you  are  currently  printing and you abort, a control code will be sent to
your printer to clear it's buffer and not print un-wanted text.

Note: Saying a particular command is 'destructive' does not mean that  your
computer or actual document will be hurt !

'N'uke
-------

This  command  allows you to 'Nuke', or remove the document that is next in
Queue to be printed.  This command is also 'destructive' in nature, and you
will be given a chance to back out, and not remove the document from Queue.
If there are no documents in Queue when you use this  command  it  will  be
ignored.

'S'ensor
---------

You may turn the print sensor On or Off at will while the document is being
sent  to  your  printer or screen.  If Multi-Print's sensor works with your
printer you will be notified of a printer error, should one  occur.  If  an
error  does  occur while the sensor's on you will be given three choices to
correct the problem.  You could:

1) Correct any problem you had with the printer and tap your ESCape key  to
resume.

2)  Tap  the  'O'utput key to re-direct output from the printer to just the
Text View window in the event of say a paper jam.

3) Finally, the problem may be that Multi-Print's sensor is  to  blame  and
the only way to continue printing would be to disable the sensor.  Just tap
the 'S'ensor key and resume printing.

Multi-Print v4.0                                 User Documentation Page 16
Multi-Print  v4.0                Page  16                      Users Guide


'P'ause
-------

 By tapping this key you can pause the printing of your  document.  If  you
 are  outputing  to  the printer that it will not stop immediately. This is
 because the printer's buffer, where it stores some of  your  document,  is
 still full. When it empties then your printing will stop.

'-'/'+' Scroll
--------------

This  command  has  been explained in great detail above.  Since the normal
scrolling rate within the Text View window is very fast, you  can  slow  it
down  by  tapping  the  '-' key. Tap the same key again and the scroll rate
slows down even more. To speed up the scroll rate, you merely tap  the  '+'
key.  This command is very useful for previewing a document and selectively
printing parts of it by alternately tapping the 'O'utput key.

'V'iew Queue
------------

This  is  a  new feature to Multi-Print which allows you to view the entire
list of documents you have in Queue. A window will pop up showing  you  the
position  of  the  document  in  Queue,  it's location, name, size, date of
creation, and estimated print time. For example:

  C:\DOS\PRINT\TEXT\TEMP   <--- document path, normal length
  C:\DOS\PRINT\TEXT\TE+    <--- Truncated path

Notice the '+' sign  on  line  two's  path  ?   This  indicates  that  your
documents path was longer then twenty characters and had to be truncated to
fit in the window.

If  you  have more then ten documents in Queue you can alternately use your
PG DN(Page Down) and PG UP(Page Up) keys to view the entire Queue.

Up Arrow/Down Arrow Copies
--------------------------

As  mention  above,  use  your  up  and  down  arrow  keys  to  alternately
increase/decrease the number of copies of you wish to print.

'H'elp
------

By  tapping  the  'H'  key, you can get on-line help on any of the commands
available in Multi-Print. Tap the highlighted letter of the command  and  a
window will pop up containing a brief description of the command you chose.
To  try  another  help  screen, tap any key and you will be returned to the
help menu. If you want to resume printing, tap your ESCape key and you will
leave the Help menu.


Multi-Print v4.0                                 User Documentation Page 17
Multi-Print  v4.0                Page  17                      Users Guide


'Q'uit
------

This command hardly needs an explanation. Tap the 'Q' key and you  will  be
asked  if  you  really want to leave Multi-Print.  You can, of course, back
out by tapping 'N' and resume printing.


'O'utput
----------

With  this  command you may re-direct output to either the printer, or just
the screen depending on where your are printing your document at the  time.
If you are outputing to the printer and you tap this key your document will
print  only  to  the screen. The opposite is true when you are outputing to
the screen and you re-direct output to the printer.  For  more  information
about  this  command  refer  to  the  information  about  'Output'  in  the
Statistics window documentation above.


'F-1' function key
-------------------

Tap the F-1 key to view the secondary command-line list.  To return to  the
primary command list just tap the F-1 key again.


--------------------------------------------------------------------------
                      Secondary On-line Command list
--------------------------------------------------------------------------

'D'isplay Defaults
------------------

By  using  this  command you can see practically all of your user definable
options, such as page width, length, whether or not Screen  Save  has  been
enabled, etc..

This  feature is very useful when you are in doubt as to whether or not you
set.

'M'emory Stats
--------------

This feature is a hold-out from when Multi-Print was being Beta tested  and
debugged.  I have kept it in the final release as kind of a throw away type
information. It is really not very useful, but may be interesting  to  some
people.  When  you  activate this command, you will be shown two lines, the
first of which tells you how much available memory is left in your  system.
The second tells you how much memory space the Queue is taking.

Multi-Print v4.0                                 User Documentation Page 18
Multi-Print  v4.0                Page  18                      Users Guide


'U'se headers (On/Off)
-----------------------

If  you  have  loaded  more than one document in Queue that will print page
headers, but want to over-ride this option for one or several documents you
just tap the 'U' key. A small window will be displayed to tell you  whether
the  header(s)  were  enabled or disabled.  This function has absolutley NO
effect on documents that were not previously loaded to print page headers.


Multi-Print v4.0                                 User Documentation Page 19
Multi-Print  v4.0                Page  19                      Users Guide


                                 T H A N K S

I would like to personally thank the following people who spent many  hours
Beta testing Multi-Print:

Melvin  Douglas  - My very first registered supporter who's pleas for 'More
Gerry, give me a Son of Multi-Print that does MORE !' have been answered.

Patrick Piccolo - A great Beta tester if ever there was one  !  Thanks  for
your many ideas which were implemented in this version.

George Hughes - An ace dBase programmer, teacher and Beta tester.

Jim  LeMay  -  His  outstanding  windows and screen writing code heled make
Multi-Print what it is today.

Borland  International  for  it's  fine  Turbo   Pascal   compiler,   which
Multi-Print was written in.

                          T H I N G S  to  C O M E

There  are MANY things that I wanted to put into version 4.0, however, if I
kept adding things I would never release a new version !  Multi-Print  will
continue to grow by leaps and bounds. Please feel free to send any comments
on what you would like to see. Stay tuned, there's more to come !!!

-  A  completely  new  user  interface  that  will combine the creation and
adjustment  of  the  User  Configuration  utility  with  the   running   of
Multi-Print all in one.

- A super fast pull down directory that will allow you to add a document to
the Queue on the fly.

-  The  ability to print WordStar version 5.0 down by filtering the garbage
characters you would normally see outside of the Word Star environment.

- Even better printer error detection.

- Overall increase in the document scanning speed by  re-writing  my  Turbo
Pascal  code  which  accomplishes the text in Turbo Assembler, another fine
Borland product.

- Adding several printer font styles.

- Laser printer compatability

- The ability to 'zoom' the text view window so that more of your documents
text can be seen.

- The ability to print both sides of your paper to cut down on waste.

- A bookmark capability which will allow you to resume printing a a pre-set
'book-mark(s)'.

- Support for printers configured as LPT2, LPT3, etc.

Multi-Print v4.0                                 User Documentation Page 20
Multi-Print  v4.0                Page  20                      Users Guide


               S H A R E W A R E   &   R E G I S T R A T I O N


Multi-print  is  NOT  a  public  domain  or  free  program!   It  is  being
distributed as Shareware.  The Association of Shareware Professionals (ASP)
offers the following definition of Shareware:

Shareware  distribution  gives users a chance to try software before buying
it.  If you try a Shareware program and continue using it, you are expected
to  register.  Individual  programs  differ  on  details  --  some  request
registration  while others require it, some specify a maximum trial period.
With registration, you get anything from the simple right to continue using
the software to an updated program with printed manual.

Copyright laws apply to both Shareware and  commercial  software,  and  the
copyright  holder  retains  all  rights,  with a few specific exceptions as
stated below.  Shareware authors are accomplished  programmers,  just  like
commercial  authors,  and the programs are of comparable quality.  (In both
cases, there are good programs and bad ones!) The main difference is in the
method of distribution.  The author specifically grants the right  to  copy
and  distribute  the  software,  either  to all and sundry or to a specific
group.  For example, some  authors  require  written  permission  before  a
commercial disk vendor may copy their Shareware.

So, Shareware is a distribution method, not a type of software.  You should
find software that suits your needs and pocketbook, whether it's commercial
or  Shareware.   The  Shareware  system  makes  fitting  your needs easier,
because you can try before you buy. And because the overhead is low, prices
are low also.  Shareware has the ultimate money-back guarantee  --  if  you
don't use the product, you don't pay for it.

Registration licenses you to use Multi-Print Version 4.0.  Any unregistered
use  other than trial use to determine if Multi-Print meets your needs is a
violation of our license agreement and is forbidden.

Single user registration is available for $15 per  copy,  which  does  noti
nclude  postage  and  handling.   Registered  users  will  be sent the most
current version.  I will also answer letters and calls from any Multi-Print
User whether registered or not  concerning  any  problems  they  may  have.
Comments, good or bad, ideas and suggestions are welcome !

If  you  wish  to be a registered member of  Multi-Print  please  read  the
document STATMENT.LIC, and complete the form LICENSE.LIC.

                                 The End !

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1661

     Volume in drive A has no label
     Directory of A:\

    FILE1661 TXT      3257  11-29-89   2:04p
    GO1      BAT        38   1-01-80   1:37a
    CHKENV10 DOC       790   1-16-89   4:31p
    CHKENV10 EXE      3056   1-29-89   7:06p
    CONFIGMP DOC      3547   1-09-89  11:28p
    CONFIGMP EXE     19552   1-09-89   9:59p
    DISTRIB  LIC      2250   1-17-89   3:04p
    GO       BAT        27   1-16-89  11:56p
    LICENSE  LIC      1551   2-06-89   7:21p
    MPRINT40 DOC     43368   2-06-89   7:16p
    MPRINT40 EXE     61574   2-06-89   7:50p
    README!  MP        680   2-01-89   7:00p
    README   FIX       663   2-06-89   7:15p
    STATMENT LIC      1722   1-17-89   3:02p
    GO       TXT       540  11-30-89  10:34a
           15 file(s)     142615 bytes
                           12800 bytes free
