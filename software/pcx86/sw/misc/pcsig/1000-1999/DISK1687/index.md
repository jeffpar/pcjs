---
layout: page
title: "PC-SIG Diskette Library (Disk #1687)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1687/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1687"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "READ.COM AND READIT"

    A fast text file reader, READ.COM pages, scrolls, and searches in ASCII
    files. The screen-switching option lets you prepare a table of contents
    for a file without direct switching to any screen. The program offers
    no written documentation and limited help on screen.
    
    THE TEXT FILE READER (READIT) allows users to scroll, page, and print
    on-line documents.  All commands are displayed on a horizontal menu bar.
    An intuitive interface provides a straightforward source for on-line
    help.  READIT provides the means to distribute manuals, instructions,
    procedures and other documents, royalty free, to users with a wide range
    of computer experience.  Users without wordprocessing experience can be
    brought "up to speed" in minutes.
    
    Using READIT with your text file requires that text be prepared as shown
    in the documentation.  Control over formatted printing and screen
    display is provided so documents come out looking professional --
    printer or screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1687.TXT

{% raw %}
```
Disk No: 1687                                                           
Disk Title: Read.Com and ReadIt                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: Read.com                                                 
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
A fast text file reader, READ.COM pages, scrolls, and searches in ASCII 
files.  The screen-switching option lets you prepare a table of contents
for a file without direct switching to any screen.  The program offers  
no written documentation and limited help on screen.                    
                                                                        
                                                                        
Program Title: ReadIt                                                   
Author Version: 2.0                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
THE TEXT FILE READER (READIT) Allows users to scroll, page, and print   
on-line documents.  All commands are displayed on a horizontal menu bar.
An intuitive interface provides a straightforward source for on-line    
help.  READIT provides the means to distribute manuals, instructions,   
procedures and other documents, royalty free, to users with a wide range
of computer experience.  Users without word processing experience can be
brought "up to speed" in minutes.                                       
                                                                        
Using READIT with your text file requires that text be prepared as shown
in the documentation of this program.  Three possible formats are       
supported.  Control over formatted printing and screen display is       
provided so documents come out looking professional--printer or screen. 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## READ.DOC

{% raw %}
```

    READ.COM is:

          - fast .DOC reader; pages, scrolls, searches;
            permits display attribute control in .DOC files


    READ.COM is self-documenting; type READ<ENTER> at the
        DOS prompt, to display the HELP screens.

    READTEST.DOC demonstrates READ.COM's attribute control;
        type READ READTEST.DOC at the DOS prompt -

    READ.COM V 3.02 is copyrighted, and assigned to the public domain
        by the programmer.

```
{% endraw %}

## READIT.DOC

{% raw %}
```
_________________________________________________________________

Text File Reader (ReadIt) User's Guide          November 17, 1989
_________________________________________________________________

o TABLE OF CONTENTS:

      Overview .......................................... 2
      Hardware Requirements ............................. 2
      General ........................................... 2
      Installation Procedure ............................ 2
      Start-Up Procedure ................................ 3
      Test Drive ........................................ 3
      Text Preparation Overview ......................... 4
      Text Preparation .................................. 4
      Registration ...................................... 5
      License Agreement ................................. 6

Information in this document is subject to change without  notice
and does not represent a commitment on  the  part  of  Cobrasoft.
The software described in this  document  is  furnished  under  a
License Agreement.  By using the accompanying software you  agree
to accept the terms and conditions of the License Agreement. 







o Trademark and Copyright Acknowledgements:

(C) Copyright 1989 Cobrasoft.  All rights reserved.
Cobrasoft is a registered trademark of Cobrasoft.
IBM and PS/2 are registered trademarks of the IBM Corporation.
ReadIt is a trademark of Cobrasoft.









                              - 1 -

o OVERVIEW:
The Text File Reader (ReadIt) allows users to read and print  on-
line documents, at their own pace, with a short  learning  curve.
All commands are displayed on a horizontal menu bar. An intuitive
interface provides a straight forward method to scroll, page  and
print documents.  Users without word processing experience can be
brought "up to speed" in minutes.  ReadIt  provides  a  means  to 
distribute on-line manuals, instructions,  procedures  and  other 
documents, royalty free, to users with a wide range  of  computer
experience.

o HARDWARE REQUIREMENTS:
An IBM PC/XT/AT/PS/2 or compatible with a minimum of 256K RAM and 
DOS 2.1 or later are required.  While not required, a printer  is
recommended. 

o GENERAL:
ReadIt is supplied on one 3 1/2 or 5 1/4 inch disk.  Before using
the disk, make a backup copy and  read  these  instructions.  The
instructions assume that you are familiar with your microcomputer
and have some knowledge of the Disk Operating System (DOS).

This User's Guide can be printed with ReadIt's  <Alt P>  command.
It contains six pages and may be used  as  an  outline  for  your
document.  As a registered ReadIt  user,  you  are  eligible  for
one year of free technical support.  If difficulties arise,  call
our support staff at  (213)532-6212.  These  instructions  assume
that drive A or C is used.  If a different drive  is  used,  sub-
stitute the correct drive designator. 

o INSTALLATION PROCEDURE:
Installation is not required for floppy drive systems.  If a hard
drive is used, allow at least 200 kilobytes of free  disk  space.
When creating a directory you must supply a name. READIT or other
valid directory name may be used.  If a directory name other than
READIT is used, substitute the correct directory name. To install
ReadIt onto a directory named READIT proceed as shown:

1. From the root directory C> prompt type: MD\READIT <ENTER>.
2. From the C> prompt type: CD\READIT <ENTER>.
3. Place the ReadIt disk in drive A.
4. From the C> prompt type: COPY A:*.* <ENTER>. 


                              - 2 -

o START-UP PROCEDURE:
ReadIt can read files from any drive or directory.  When starting
ReadIt, the filename and extension (to be read) is  passed  as  a 
command line argument as shown in the following examples:

               READIT C:\MYPATH\MYFILE.EXT <ENTER>
               READIT B:MYFILE.EXE <ENTER>
               READIT MYFILE.EXT <ENTER>

When READIT <ENTER> is typed, the on-line ReadIt User's Guide  is 
displayed. You may substitute your document for the ReadIt User's
Guide.  When your document is used, in lieu of the User's  Guide,
it must be renamed READIT.DOC.

Floppy Drive Start-Up Procedure:
1. After the computer is booted place the ReadIt disk in drive A. 
2. At the DOS A> prompt type a start-up command as  shown  above.
   As a minimum, READIT followed by a filename and extension must
   be typed.  If the filename  and  extension  are  omitted,  the
   default text file will appear.

Hard Drive Start-Up Procedure:
1. After the computer is booted type:  CD\READIT  <ENTER>.  If  a
   directory name other than READIT is used, substitute the  cor-
   rect name.
2. At the DOS C> prompt type a start-up command as  shown  above.
   As a minimum, READIT followed by a filename and extension must
   be typed.  If the filename  and  extension  are  omitted,  the
   default text file will appear.
                           
o TEST DRIVE:
It only takes a few minutes to become familiar with the operation
of ReadIt. Before you begin, check that the ten key pad is not in
the numeric mode (NumLock Off).  Perform several  trial  runs  as
shown below:

A. Use the appropriate start-up procedure to display  the  ReadIt
   User's Guide.  Type: READIT <ENTER>.
B. If all has gone well, text and  a  horizontal  menu  bar  will
   appear.  Review the menu selections at the base of the screen.
C. Press the PgDn key to display the next screen page.  To return 
   to the previous screen page, press PgUp. 


                              - 3 -

D. To scroll down one line, press the DOWN arrow key.  To  scroll
   up one line, press the UP arrow key.
E. To display the end of the document, press E.
F. To return to the beginning of the document, press B.
G. To display the middle of a document, press  M.  Note  that  an
   arrowhead will appear in the left margin to mark the mid-point
   of the document.
H. If you have a color  monitor, the  foreground  and  background
   colors can be changed by pressing F1 and F2. Press the F1 key.
   Continue pressing F1 until you step through all the foreground
   colors.  Press the F2 key. Continue pressing F2 until you step
   through all the background colors.  Note that the first screen
   is displayed after any color change. 
I. Before printing the text, check that the  printer  is  on-line
   and has an adequate supply of paper. When the printer is ready
   press Alt and P simultaneously.  If it is necessary  to  abort
   the print sequence, press ESC.
J. When through, press ESC to return to DOS.

o TEXT PREPARATION OVERVIEW:
Using ReadIt with your text file requires that text  be  prepared
as shown:
1. Prepare and proof your document.  Do not space text  with  the
   TAB key.  Each line of text must be terminated by  a  carriage
   return.  The new page character must be on a line by itself at 
   the beginning of each page and after the last page.
2. Save the manuscript as an ASCII (unformatted) text  file.  Any
   valid filename and extension may be used, if  your  text  file
   will not replace the ReadIt User's Guide.  If your file is  to
   replace the ReadIt User's Guide, rename your file  READIT.DOC.
   READIT.DOC must reside on the same  disk  or  directory  which
   contains ReadIt's files.
3. Use ReadIt to check and print your text.

o TEXT PREPARATION:
On-line documents should  be  constructed  for  ease  of  viewing
rather than conforming to a rigid format.  If possible, the table 
of contents should be presented as the first screen. Page numbers
are easily found if they are centered at the bottom of each page. 
If the document is short and has  a  well  constructed  table  of
contents, an index is usually not required.  When preparing text,
keep in mind that each screen page displays 23 lines of text. 


                              - 4 -        

Text should be prepared with a word processor. Do not use the TAB
key.  Each line of text can have up to  65  characters  and  must 
terminate with a carriage return.  Using one inch left and  right
hand margins should produce a line with 65  characters.  If  more
than 65 characters are entered, ReadIt will  truncate  the  line. 
Page length should be set at 46 lines/page.  If page numbers  are
used, they should be placed on the 46th line.  The new page char-
acter should be inserted, on a line by itself, at  the  beginning
of each page and after the last page. Each ReadIt file can accom-
modate approximately 80 screen  pages  (23  lines/screen)  or  40
printed pages (46 lines/page). 

After the text has been prepared, the file must be  saved  as  an
ASCII (unformatted) file. Any valid filename and extension may be
used, if your text file will not replace the ReadIt User's Guide. 
If your file is to replace the ReadIt User's Guide,  it  must  be
named READIT.DOC.  If necessary, rename your file  with  the  DOS
RENAME command.  READIT.DOC must  reside  on  the  same  disk  or
directory which contains READIT.EXE.  To check that each line has
been terminated with a carriage return  and  that  the  new  page
character has been properly inserted,  scan  your  original  text
file with the DOS TYPE command. 

Use ReadIt to proof and print your text.  Compare the ReadIt text
to the original file.  If portions of the text are  missing,  the
line(s) may not have been terminated with a carriage  return.  If
lines appear out of order or are missing, the TAB  key  may  have
inadvertently been used.

o REGISTRATION:
This version of ReadIt is distributed as  user  supported  Share-
ware.  The user is granted a limited license to  use  Readit  for
non-commercial use.  The user may  copy  and  freely  share  this
program with others, subject to the  provisions  of  the  license
statement.  If you continue using ReadIt after a  thirty (30) day
evaluation  period,  you  are  required  to  register.  For  non-
commercial use the  registration  fee  is  twenty  ($20)  dollars
(outside USA $35 US dollars).  Contact Cobrasoft  for  commercial
distribution and/or site license information.





                              - 5 -

_________________________________________________________________

                        LICENSE AGREEMENT
_________________________________________________________________

Cobrasoft grants a limited, non-exclusive  license  to  the  user
to distribute the Text File  Reader's  (ReadIt)  files  with  the
user's text files for non-commercial use. The user has permission
to copy and freely share the software with others subject to  the
following provisions:
1. ReadIt is distributed as user supported Shareware.  Should the
   software be used beyond a thirty (30) day  evaluation  period,
   the user is required to register.
2. The software and/or documentation may be uploaded to  bulletin
   boards and can be used by clubs, schools or  other  non-profit
   groups for educational purposes only.  When used  for  educat-
   ional purposes, one (1) copy must be registered for each fifty
   (50) student copies distributed.
3. The software and/or documentation may not be sold  for  profit
   by other than Cobrasoft authorized dealers.  When  distributed
   as Shareware or for educational purposes,  reasonable  charges
   may be applied.
4. The software and/or documentation may not be  distributed,  in
   whole or in part, with any commercial product or service with-
   out obtaining a commercial distribution and/or site license.

The software and documentation are distributed "as is". The soft-
ware and documentation are subject to change without  notice  and
does not represent a commitment on the part of Cobrasoft.  Cobra-  
soft specifically disclaims all warranties, expressed or implied,
including but not limited  to  implied  warranties  of  merchant-
ability and fitness for a particular purpose.  In no  event  will
Cobrasoft be liable for any  loss  of  profit  or  other  damage,
including but not limited to special, incidental,  consequential,
commercial or other damages.
            
This Agreement shall be governed by the  laws  of  the  state  of
California or use such other law as may be  required  to  protect
the legitimate interests of Cobrasoft.
_________________________________________________________________

  Cobrasoft, 4455 Torrance Blvd., Suite 273, Torrance, CA 90503 
_________________________________________________________________

                              - 6 -


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1687

     Volume in drive A has no label
     Directory of A:\

    FILE1687 TXT      2739  12-28-89   2:16p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80   2:24a
    READ     COM      6772  10-18-88   2:57p
    READ     DOC       472  10-18-88   3:02p
    READIT   DAT        11  11-17-89   9:42a
    READIT   DOC     12667  11-17-89   9:11a
    READIT   EXE     55308  11-06-89  10:15a
    READTEST DOC      3511   8-25-88   2:56a
            9 file(s)      82212 bytes
                           75264 bytes free
