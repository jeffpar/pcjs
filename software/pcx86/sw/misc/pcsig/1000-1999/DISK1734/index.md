---
layout: page
title: "PC-SIG Diskette Library (Disk #1734)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1734/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1734"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CASSETTE!"

    CASSETTE! is a full screen editor that is specifically configured to
    create the paper inserts one puts in audio cassette boxes.  Four
    different label formats are included in the program, as well as a
    printing program for high quality output.
    
    This program generates enthusiasm and interest; if your interest is in
    creating high quality cassette labels, diligence will pay off in having
    a customized labeling system, capable of creating exactly the label you
    want.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CASSETTE.DOC

{% raw %}
```












                                   CASSETTE!   

                                  Version 4.0
                               A Logika Product             
                            Written by John Buckman
                        




























                                                          Logika (tm)
                                                          John Buckman
                                                          4 Lexington Avenue
                                                          New York, NY 10010



 Cassette! Version 4.0                                   
____________________________________________________________________________


WHAT IS CASSETTE!?

   Cassette! is a full screen editor not unlike a word processor 
except that instead of being specialized toward full-page writing, 
Cassette! is an editor especially made to create paper inserts for 
audio cassettes. Much like a programmer's editor or a mailing label 
editor, Cassette! is a word processor whose features are especially 
tailored to help you create audio cassette paper inserts (Hereby 
referred to as 'Cassette Labels')  

WHAT CAN I DO WITH CASSETTE!?
 
   Cassette! allows you to create labels in four different formats. 
Each format has its own benefits and shall be discussed later. 
Cassette comes with the program 'Imageprint' which will print 
Cassette labels in letter quality print. In addition, printers which 
cannot normally print IBM graphics characters such as the Epson 
MX/FX series will be able to when they use Imageprint.  

ALL THIS FOR FREE?

   Cassette! is not a free product, but a user-supported package. 
You may try out this complete version of Cassette! but I ask that if 
you find the product useful you register the program for $20. The 
registration fee not only ensures that new, improved versions of 
Cassette! shall keep coming, but you will also receive updated 
versions of Cassette! in the mail, printed documentation and product 
support. If you appreciate Cassette! but do not feel that the 
program merits your dollar donation, then I ask you to donate your 
time, as I have in the creation of this program, to write me to let 
me know what can be done to improve Cassette!  

              Logika
              John Buckman
              4 Lexington Avenue
              New York NY 10010

 Cassette! Version 4.0                                     by John Buckman
____________________________________________________________________________


                           Cassette Version 4.0
                               User's Manual


The main operation of Cassette! is based on the Editing Mode and its 
various word-processing functions. The File menu provides label 
saving and loading while also letting you print multiple copies of 
the same label. The Options menu was designed to accomodate future 
additions to Cassette! The Options menu now supports an optional 
recording date on the top line, an automatic song-numbering facility, 
and insert & delete whole line capability. The Help facility is a 
feature which is implemented only in the registered version of 
Cassette! sent to all registered users. The main print facility is for 
dumping the onscreen label to the printer. If letter quality 
print is desired, or if your printer cannot handle IBM graphics 
characters, then the Imageprint program must be used. The following 
pages describe in detail each of the functions of Cassette! and 
explain their purpose in constructing Cassette labels.  
   Beginning with version 2.3 of Cassette!, there is an optional EGA 
Compatible version of Cassette included. This version uses the EGA's 
43 line mode to make full screen editing of larger labels possible. 
The labels have an extension of ".ECS" for EgaCassette label. For the 
most part, users will still use the normal CASSETTE program except 
when they want to use this new Cassette format. The EGA Cassette 
will only edit ECS labels and is not meant to be an exact duplicate 
of the normal Cassette program but rather to complement it and to 
surpass it for certain applications. The EGA Version of Cassette is 
executed by running the EXE file EGARUN.EXE. All the Cassette 
editing functions should work fine with this new version. I hope you 
enjoy and use this new format.  

 Cassette! Version 4.0                                    
____________________________________________________________________________

                             [ Editing Labels ]

Editing Key          Function
___________          __________________________________________________

Alt - C              Execute the Configure Cassette! program. Be carefull, 
File Menu            as selecting this erases the current label you are 
 [C]onfigure         editing when it executes the Configuring program. The 
                     Configure! Cassette at present only lets you change two 
                     things. You may change the colors of the menus inside 
                     Cassette! and you may change the type of Cassettte! label 
                     format you wish to use.  

Alt - D              Execute the Print (Dump) feature from the main menu. 
Main Menu            Pressing this key automatically dumps the on-screen label 
 [P]rint (Dump)      to the printer in What-You-See-Is-What-You-Get (WYSIWYG) 
                     format. This is a straight ASCII dump to the printer and 
                     does not provide Letter quality print.  If your printer 
                     will not print IBM graphics characters such as those used 
                     in the Cassette label, then you MUST use the Imageprint 
                     program or another program which is capable of printing 
                     those characters on your printer. I have included this 
                     feature for two reasons. One, often a memory resident 
                     print enhancing program (Such as Lettrix) is resident or 
                     the printer has acceptable print quality and therefore 
                     Imageprint is neither needed nor wanted. 
                     Secondly, sometimes a rough copy is wanted and 
                     letter quality is not needed.  

Alt - F              Go to to Cassette! File menu.
File Menu

Alt - H              Execute the Cassette! Help facility.
Help Facility

Alt - I              Executes the Insert line facility of the options 
Options Menu         Menu. Inserts a blank line at the current cursor 
 [I]nsert Line       position. This function is available only in the song 
                     name area. Cassette will not let you insert a line at 
                     any other part of the label.  

Alt - L              Executes the load label facility of the File Menu.  You 
File Menu            may only load Cassette! labels with an extension of 
 [L]oad label        ".CAS"; ".BIG" Labels like those created by the paste 
                     label facility cannot be displayed on-screen. Loading 
                     a label automatically replaces the on-screen label so 
                     be sure to save the label you are working on before 
                     loading another on top of it. Only labels created and 
                     saved by Cassette may be loaded into Cassette. The 
                     labels are saved in a plain ASCII format that is not 
                     directly compatible with Wordstar, Multimate and other 
                     word-processing packages. Cassette labels may be 
                     edited using a plain ASCII editor such as PC-WRITE or 
                     EDLIN but using one obviously defeats the purpose of 
                     using Cassette! as said editors are page oriented 
                     while Cassette! is explicitely made for the creation 
                     of labels.  

 Cassette! Version 4.0                                    
____________________________________________________________________________

Alt - M              Executes the multiple print facility of the file menu.  
File Menu            This may also be used as a simple print-label facility 
 [M]ultiple Print    if one specifies 1 copy to print. Otherwise, this 
                     simply dumps the label to printer, much in the same 
                     fashion as the Print (Dump) onscreen label does. Each 
                     label is printed on its own piece of paper so that if 
                     large amounts of labels are to be printed, all can be 
                     cut from the single top label if they are stacked 
                     correctly. An extension of ".CAS" is assumed but 
                     labels produced by the paste label facility may be 
                     printed if the extension of ".BIG" is added.  

Alt - N              Executes the Number Songs facility from the options 
Options Menu         menu. Numbers songs in a "1.Song Name" fashion 
 [N]umber songs      throughout the Label's song name area. Each line which 
                     begins at the first column is numbered. In this way, 
                     song names which take up more than one line are not 
                     numbered twice.  There is no way to un-number the songs 
                     once the process has been done so I would recommend 
                     saving the label before numbering, so that it may be 
                     brought back if the effect of numbering is not wanted. 
                     Some expreimentation may be needed to get used to the 
                     way this facility works.  Look especially carefully at 
                     the four sample labels if you don't fully understand 
                     how this works.  

Alt - O              Go to the Options Menu.
Options Menu

Alt - P              This executes a specialized Paste label facility 
Paste Label          available only from Editing Mode. This facility will 
                     merge two Saved Cassette! labels together into one 
                     large label with an extension of ".BIG". This facility 
                     effectively create one label with two song areas, one 
                     of which folds under the other. Perhaps the best way 
                     to understand what the Paste label facility does is to 
                     simply TYPE the sample label "SAMPLE5.BIG" For obvious 
                     reasons, the paste label facility will only work 
                     correctly with Cassette! Label formats one and two.  
                     The Song areas for formats three and four are too 
                     large to fold and fit inside a audio cassette box. As 
                     with the numbering facility, the best way to 
                     understand this specialized utility is to experiment 
                     with it.  

Alt - R              Execute the remove line facility of the Options menu.  
Options Menu         This function removes (deletes) the line at which the 
 [R]emove line       cursor currently resides. This function is the exact 
                     reverse of the Insert Line function and also will only 
                     work in the song section of the label.  

Alt - S              Executes the Save label procedure of the File menu.  
File Menu            Labels are automatically saved with an extension of 
 [S]ave label        ".CAS" and no other extension name is allowed. The 
                     Label is saved in straight ASCII format.  

 Cassette! Version 4.0                                  
____________________________________________________________________________

Alt - X              This key automatically quits Cassette! and exits to 
                     DOS. No warning is issued unlike the Quit facility from 
                     the Main menu. Pressing Alternate - [X] from any menu
                     automatically exits Cassette and drops to DOS.

Ctrl - C             Centers the line. This function is available only from 
                     the editing mode.                      

Ctrl - E             Clears the screen to begin a new label. The current
                     label is erased from the screen and a new blank label 
                     appears. Be carefull to save your work before erasing
                     the screen. Once a label has been completed, this is 
                     the standard procedure for starting a new label.

TAB                  Inserts a space at the current cursor position. This is 
                     the equivalent of turning insert ON, pressing the space
                     bar, and turning insert OFF. This is just a shortcut
                     key for alligning or inserting single space into a
                     Cassette! label.

ESC                  Returns to the previous Editing field. I recommend 
                     using the ESC key instead of the Up-Arrow key to move
                     up a field since the ESC is a true field move while 
                     the Up-Arrow key merely moves the cursor. The Up and 
                     Down arrows are included in the program merely for 
                     quick editing purposes.

RETURN               Moves the cursor to the next field. Use of the Return
                     and ESC key is preferable over the use of the Up and 
                     Down Arrow keys for moving from field to field. 
                     Cassette! is a field orented editor and therefore 
                     expects a Return key at the end of each field. The
                     ESC key does a true move to previous field while the 
                     Arrow keys merely move about the screen.

[ \ ]                Pressing the backslash key bring up the Main Cassette!
Main Menu            Menu. Almost all of the Cassette! functions can be 
                     selected with two keys from the Main Menu.


 Cassette! Version 4.0                                   
____________________________________________________________________________

                            [ Printing a Label ]


Next to designing a label, printing a label is the most important 
function of Cassette! There are several ways to print a label.  

1.      Selecting "Print (Dump)" from the main menu or pressing 
        ALT-D from the editing mode. The advantage of this is that 
        it may be executed from within Cassette! The output is 
        straight ASCII data sent to LPT1: to be printed. 
        Unfortunately, if your printer does not directly support 
        IBM graphics characters then your printer will not 
        correctly print the label. In addition, the unless your 
        printer has built in letter quality print, the quality of 
        the print will not match that produced by the Imageprint 
        program.  

2.      Selecting "Multiple Print" from the File Menu or pressing 
        Alt-M from the editing mode. The output is the same as that 
        produced by the "Print (Dump)" selection in that straight 
        ASCII data is sent to the printer. However, here, a saved 
        label may be specified to print any number of times. Each 
        copy is printed on a separate sheet of paper.  

3.      Exiting to DOS and printing a Cassette! label using the 
        Imageprint program. The format for printing a label from
        DOS is "C>PRINT MYLABEL.CAS". If you wish to print a BIG 
        label such as one created by the Paste label facility, then
        an extension of ".BIG" should be used instead of ".CAS". 
        For example, "C>PRINT BIGLABEL.BIG". The Imageprint 
        program has many things going for it. It prints all text in 
        superb, three times over, letter quality font. It manages
        to print IBM graphics characters on most printers while 
        still being in letter quality mode. The complete Imageprint
        is not a public domain program, but this version with
        only FONT1 included is. If you like this program as much
        as I do, I suggest you get yourself registered with them 
        to get all the fonts. In any case, you should be able to
        find the complete Public domain version of Imageprint
        on a local BBS. The program I included and the FONT1 are
        but the bare minumum needed to run Imageprint, more 
        programs are included in the full release. 

In general, I use the "Print (Dump)" feature to print a rough draft 
of a Label, then save it and print it using Imageprint. Once you 
have seen the quality of its print it is hard to settle for normal 
dot-matrix print.        


 Cassette! Version 4.0                                   
____________________________________________________________________________

                    [ Cutting a label to size ]

Once the label has been printed, it needs to be cut and folded so 
that it may fit inside an audio cassette box. Here is a full size 
example:

 ____________________________________________________________
|                                                            |
|                                             (Printed Page) |
|                                                            |
|                                                            |
|   _______________________                                  |
|  |                       |   Cut around the Outer          |
|  |                       |   edge of the label, then       |
|  |-----------------------|   get ready to fold the label   |
|  |_______________________|   on the next page.             |
|  |___________|___________|                                 |
|  |           |           |                                 |
|  |           |           |                                 |
|  |           |           |   <--(Cassette Label)           |
|  |           |           |                                 |
|  |           |           |                                 |
|  |           |           |                                 |
|  |           |           |                                 |
|  |           |           |                                 |
|  |___________|___________|                                 |
|                                                            |
|                                                            |
|____________________________________________________________|



 Cassette! Version 4.0                                 
____________________________________________________________________________

 _________________________
[                         ]
[                         ]
[-------------------------]  <---- Fold here
[                         ]         
[-------------------------]  <---- and Fold Here.
[------------|------------]
[            |            ]
[            |            ]
[            |            ]          [ Folding a regular, Cut Label ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[____________|____________]
 _________________________
[                         ]
[                         ]
[-------------------------]  <---- Fold here
[                         ]         
[-------------------------]  <---- Fold Here.
[------------|------------]
[            |            ]
[            |            ]
[            |            ]          [ Folding a BIG, cut label such
[            |            ]            as one produced by the Paste
[            |            ]            label facility ]
[            |            ]
[            |            ]
[            |            ]
[------------|------------]   <---- Fold this section under the
[            |            ]         previous song section.
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[            |            ]
[____________|____________]

```
{% endraw %}

## FILE1734.TXT

{% raw %}
```
Disk No: 1734                                                           
Disk Title: Cassette!                                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Cassette!                                                
Author Version: 4.0                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
CASSETTE! is a full screen editor that is specifically configured to    
create paper inserts for audio cassettes, also known as cassette labels.
Four different label formats are included in the program, as well as a  
printing program for high quality output.                               
                                                                        
This program exhibits enthusiasm and interest in cassette labels, but is
a bit difficult to follow without extreme patience and diligence.  But  
if your interest is in creating high quality cassette labels, diligence 
will pay off in having a customized labeling system, capable of creating
exactly the label you want.                                             
                                                                        
                                                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1734

     Volume in drive A has no label
     Directory of A:\

    FONT1            12347  12-05-85  11:12p
    RUN-ME   BAT      1192   3-15-89   2:32p
    SAMPLE5  BIG      1250   8-17-87   1:41p
    SAMPLE1  CAS       990   8-17-87   1:40p
    SAMPLE2  CAS       990   8-17-87   1:40p
    SAMPLE3  CAS       990   8-17-87   1:40p
    SAMPLE4  CAS       990   8-17-87   1:41p
    CASSETTE CNF        32   3-15-89   2:10p
    43       COM       128  11-21-85  11:56a
    CASSETTE DOC     20526   3-15-89   3:30p
    SAMPLE6  ECS      1635  10-25-87  10:59p
    BRUN30   EXE     70680   4-07-87  10:48a
    CASLABL  EXE     26856   3-15-89   2:10p
    CASSETTE EXE     57993   3-15-89   2:13p
    EGARUN   EXE      3591   3-15-89   3:51p
    @!@EGACA EXE     37239   3-15-89   3:56p
    SAMPLE   LBL       863   9-18-88   6:17p
    CASLABL  PDV       228   4-19-88  11:34a
    DEFAULT  PDV       228   4-19-88  11:34a
    EPSON    PDV       226   4-19-88  11:34a
    PROPRINT PDV       261   3-09-89   4:55p
    FILE1734 TXT      2001  12-18-89   1:29p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   5:10a
           24 file(s)     241814 bytes
                           66560 bytes free
