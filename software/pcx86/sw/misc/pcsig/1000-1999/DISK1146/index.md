---
layout: page
title: "PC-SIG Diskette Library (Disk #1146)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1146/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1146"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOGIN"

    LOGIN restricts access to the computer by requiring each user to
    enter an authorized user name and password.
    
    A menu with up to 45 choices is then displayed from which each person
    can execute programs and DOS commands.  Users can temporarily exit the
    program to DOS, to do other functions.  If nothing is done by the user
    after a certain amount of time, LOGIN automatically logs off the user
    and blanks the computer screen.  Each time a user makes a selection,
    LOGIN asks whether it is for business or personal use and the user is
    allowed to make a short comment.  After the user is done and logs off,
    LOGIN records everything that was done into a special text file.  This
    text file lists the user's name, date and time of each action, menu
    choice that was selected, whether or not it was for business or personal
    use, and a short comment by the user.  LOGIN automatically creates
    separate monthly log files, according to the date entered when the
    computer boots up.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTOLOG.TXT

{% raw %}
```
logout
xeq1
autolog
```
{% endraw %}

## FILE1146.TXT

{% raw %}
```
Disk No  1146
Program Title:  LOGIN version 1.10
PC-SIG version 1
 
LOGIN will restrict access to the computer by requiring each user to
enter in an authorized user name and password.
 
A menu with up to 45 choices is then displayed from which each person
can execute programs and DOS commands.  LOGIN will even allow users to
temporarily exit the program to DOS, where other functions can be done.
If nothing is done by the user after a certain amount of time, LOGIN
will automatically log off the user and blank the computer screen.  Each
time a user makes a selection, LOGIN asks whether it is for business or
personal usage and the user is allowed to make a short comment.  After
the user is done and logs off, LOGIN will record everything that was
done into a special text file.  This text file will list the user's
name, the date and time of each action, the menu choice that was
selected, whether or not it was for business or personal usage, and a
short comment by the user.  LOGIN will automatically create separate
monthly log files, according to the date that is entered when the
computer boots-up.
 
LOGIN allows you to enter the user names and passwords that are to be
valid, create your own menu and select its colors, specify the amount of
time after which the screen will blank, and control whether or not other
users may modify the menu or exit to DOS from LOGIN.
 
Usage:  Log of Computer Usage/Users.
 
Special Requirements:  A hard drive.
 
How to Start:  Type INSTALL (press enter).
 
Suggested Registration:  $25.00
 
File Descriptions:
 
FILES    DOC  File descriptions.
LOG      EXE  Main program.
REGISTR  LOG  Contains program registration number.
AUTOLOG  TXT  File used by LOG.EXE.
LN1      TXT  File used by LOG.EXE.
MENU     1    Contains the menu information.
INSTALL  BAT  Installs program on hard drive.
INITIAL  EXE  Initializes program.
README   DOC  Documentation.
AUTH     ID   Contains the list of user names and passwords.
LOG      INI  Data file for INITIAL.EXE.
C        BAT  Batch file to copy files from drive A to drive C.
LOGIN    ARC  Archived file containing the above files for a backup.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk No 1146 LOGIN  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentaton to your printer, type MANUAL (press enter)     ║
║                                                                         ║
║ To install the program to your hard drive, type INSTALL (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LN1.TXT

{% raw %}
```
logout
xeq1
HAC
```
{% endraw %}

## AUTOLOG.TXT

{% raw %}
```
logout
xeq1
autolog
```
{% endraw %}

## LN1.TXT

{% raw %}
```
logout
xeq1
HAC
```
{% endraw %}

## README.DOC

{% raw %}
```
log.man






                               LOGIN


                                 by

                      Arts & Sciences Company
                           23 Arabian Way
                      Scotts Valley, CA 95066
                           (408) 438-5173























(C) COPYRIGHT Arts & Sciences Company, 1988.
All Rights Reserved.


                         YOUR LOGIN LICENSE
                      -----------------------
     
     
     LOGIN  is copyrighted.  Even though the program  is  shareware, 
and  can be freely copied, there are still some limitations to  pro
tect  the quality of the distribution of the program and to  support 
future development.
     
     Users of LOGIN may make copies of this program for trial use by 
others on a PRIVATE NON-COMMERCIAL BASIS. We suggest that this eval
uation period be limited to 30 days.
     
     By accepting and using this software, you acknowledge that this 
software may not suit your particular requirements or be  completely 
trouble-free.
     
     With proper application, this software will perform as describ
ed.   However, Arts & Sciences Company is not responsible  for  your 
specific  application  or any problems resulting from  use  of  this 
software.
     
     If the software does not perform as described, our liability to 
you  is limited to replacing the software or refunding the  purchase 
price (if purchased and registered).  We have no liability to you or 
any  other  person  or  entity for any  damage  or  loss,  including 
special, incidental, or consequential damages, caused by this  soft
ware, directly or indirectly.  Some states do not allow the  limita
tion or exclusion of liability for incidental or consequential dama
ges, so the above limitation or exclusion may not apply to you.
     
     This Agreement is governed by the laws of the State of Califor
nia.  Should any part of this agreement be held invalid, the remain
der  of the Agreement will still be in effect.  This  Agreement  can 
only  be  modified by written statement signed by  Arts  &  Sciences 
Company.
     

     Under this license, you may NOT:
     
     1)    Distribute  the  program in  connection  with  any  other 
product  or  service, or as part of a corporate  or  institutionally 
sponsored  distribution.  Site licenses and bundling agreements  are 
available upon request.
     2)    Charge  anything  for LOGIN.  An exception  is  made  for 
registered  user  groups  who may charge a cost-based  fee  (not  to 
exceed $10) to cover their own costs.
     3)   Distribute the program in modified form.
     4)   Copy or reproduce the printed documentation in any form.

Revision Date:  5/14/88








                              Contents

                                                           Page
    I.  What is LOGIN? ...................................... 1

    II.  Installation. ...................................... 2

    III.  Helpful Hints. .................................... 3

    IV.  Additional help and comments. ...................... 4
     
     V.  Site License and Bundling Arrangements. ............ 5


I.  What is LOGIN?

     LOGIN  enables the user to restrict access to the computer,  to 
keep a detailed log of computer usage each month, and to run applic-
ations  by  selecting them from a user specified menu.    While  the 
menu  is  displayed,  the program monitors the  keyboard  input  and  
after  a given period of time, if there is no activity, it logs  the 
user off and blanks the screen.  

     Access is controlled by a username and password.  These may  be 
composed  of  the keyboard characters and numbers and  are  not  re-
stricted  otherwise.  The username must be followed by a comma,  the  
password, and <Enter>, without spaces in between.  For a given user-
name,  only one password is permitted.  Usernames and passwords  are 
entered into  the  program by the individual installing the  program  
on  the system.  During the installation process, the individual may  
choose an "access" code that allows him to enter the data.

     The time and date are assumed to be set when the computer boots 
up.   The program keeps a file with the username,  the  application, 
whether the use is business or personal (for IRS purposes), the time 
and  date,  and any additional comments (1 line) the user  may  add.  
When  the  user logs out (or the program logs him out) the  file  is 
written  with the notation "logout."  A new file is  generated  each 
month.   The filename is coded with the month and year and  has  the 
extension ".log."  The file is written as an ASCII file which can be 
imported into a data-base program for easy inspection and analysis.

     The user creates a menu of the applications he or she wants  to 
run  by  selecting "Modify the Menu," and entering the path  to  the 
application from the root directory, the executable (.exe or .com  - 
no  batch files allowed) filename, and a description for  the  menu.  
Up to 45 menu entries are possible. 

     A batch file may be run from LOGIN, but to do so requires spec
ial  care:  when the program asks for the executable  filename,  the 
user must type in the following 

                    command /c <batch-file-name> 

where <batch-file-name> is the name of the batch file the user wish
es  to  run.  All the other entries are similar to  those  of  other 
applications.  You must have DOS 3.0 or higher to do this. 


II.  Installation.

     1.   Boot up the computer with DOS 2.0 (or later versions)  and 
make the default drive the hard disk.  (Make sure the root directory 
is the current directory.)  

     2.   Place the floppy diskette containing the program in  Drive 
A:, close the door, and after the prompt type

                             a:install

Then  follow  the directions.  Be sure to add  the  following  three 
lines to the end of your autoexec.bat file after the installation:

                      copy autolog.txt ln1.txt
                      log
                      command /c xeq1

if you are using DOS 3.0 or higher; or, add these lines 

                      copy autolog.txt ln1.txt
                      log
                      xeq1

if you are using DOS 2.0 or 2.1.

     3.  The LOGIN INITIALIZATION program allows the user to  select 
the screen display colors, the display time before blanking, and the 
access  code.   You  should run the program and keep  track  of  the 
access code you select.

     4.  Re-boot or type "autoexec" to start the program.  

     5.   When  the LOGIN program asks for  Username  and  Password, 
enter  your  access  code, a comma, and press <Enter>  -  again,  no 
spaces allowed and the comma is necessary.  This way you gain access 
to  the authorized user and password list.  Enter the  username  and 
password.  Only one password per username is permitted. 



III.  Helpful Hints.

     1.   Think about the application programs you want to  run  and 
the  order you want them to appear on the menu.  Make sure you  know 
the  path to the application and the executable filename before  you 
begin to enter the data.  The menu description can be 12  characters 
long.

     2.   There  will be times when you want to get to  DOS  to  run 
commands  that  require parameters, like "copy," and the way  to  do 
this  is to place an entry in the menu without an executable   file
name:   just   hit <Enter> when asked for the  executable  filename.  
When  you invoke this "application," LOGIN will return you  to  DOS.  
Return to LOGIN by typing "go"  from  the root directory (or specify 
the root directory in a "Path"  statement in your Autoexec.bat file:  
then you can type "go" from anywhere).



 

IV.  Additional help.

     This program was written by Hugh A. Calvin for Arts &  Sciences 
Company.  It was written in QuickBasic 4.0 for the IBM PC/XT or  AT.  
The  source is available on a 5.25" diskette at a cost of  $50  plus 
$3.50 postage and handling.  Send your check to:

                      Arts & Sciences Company
                           23 Arabian Way
                      Scotts Valley, CA 95066


     Since  this  program is being distributed  as  Shareware,  only 
registered  users may call for assistance.  To register,  send  your 
name,  mailing address, telephone number, and the  old  registration 
number, and a check for $25 to Arts & Sciences.  Upon  registration, 
you  are entitled to a user's manual, technical support, your  (new) 
registration number, and program updates.  

     By distributing the program, you will earn $5 each time someone 
registers with your registration number.  



V.  Site Licenses and Bundling Arrangements
     
     Corporate site licenses and bundling arrangements are available 
direct from Arts & Sciences Company.
     
     Site  licenses  can be used to distribute large  quantities  of 
LOGIN  and its documentation within a specific organization at  very 
reasonable prices.  
     
     Bundling arrangements can be used to distribute copies of LOGIN 
in order to promote some other product or service. 
     
     Note  that neither of these activities is permitted  under  the 
limited license granted to all users of LOGIN without the  expressed 
written consent of Arts & Sciences Company. 
     
```
{% endraw %}

## README.DOC

{% raw %}
```
log.man






                               LOGIN


                                 by

                      Arts & Sciences Company
                           23 Arabian Way
                      Scotts Valley, CA 95066
                           (408) 438-5173























(C) COPYRIGHT Arts & Sciences Company, 1988.
All Rights Reserved.


                         YOUR LOGIN LICENSE
                      -----------------------
     
     
     LOGIN  is copyrighted.  Even though the program  is  shareware, 
and  can be freely copied, there are still some limitations to  pro
tect  the quality of the distribution of the program and to  support 
future development.
     
     Users of LOGIN may make copies of this program for trial use by 
others on a PRIVATE NON-COMMERCIAL BASIS. We suggest that this eval
uation period be limited to 30 days.
     
     By accepting and using this software, you acknowledge that this 
software may not suit your particular requirements or be  completely 
trouble-free.
     
     With proper application, this software will perform as describ
ed.   However, Arts & Sciences Company is not responsible  for  your 
specific  application  or any problems resulting from  use  of  this 
software.
     
     If the software does not perform as described, our liability to 
you  is limited to replacing the software or refunding the  purchase 
price (if purchased and registered).  We have no liability to you or 
any  other  person  or  entity for any  damage  or  loss,  including 
special, incidental, or consequential damages, caused by this  soft
ware, directly or indirectly.  Some states do not allow the  limita
tion or exclusion of liability for incidental or consequential dama
ges, so the above limitation or exclusion may not apply to you.
     
     This Agreement is governed by the laws of the State of Califor
nia.  Should any part of this agreement be held invalid, the remain
der  of the Agreement will still be in effect.  This  Agreement  can 
only  be  modified by written statement signed by  Arts  &  Sciences 
Company.
     

     Under this license, you may NOT:
     
     1)    Distribute  the  program in  connection  with  any  other 
product  or  service, or as part of a corporate  or  institutionally 
sponsored  distribution.  Site licenses and bundling agreements  are 
available upon request.
     2)    Charge  anything  for LOGIN.  An exception  is  made  for 
registered  user  groups  who may charge a cost-based  fee  (not  to 
exceed $10) to cover their own costs.
     3)   Distribute the program in modified form.
     4)   Copy or reproduce the printed documentation in any form.

Revision Date:  5/14/88








                              Contents

                                                           Page
    I.  What is LOGIN? ...................................... 1

    II.  Installation. ...................................... 2

    III.  Helpful Hints. .................................... 3

    IV.  Additional help and comments. ...................... 4
     
     V.  Site License and Bundling Arrangements. ............ 5


I.  What is LOGIN?

     LOGIN  enables the user to restrict access to the computer,  to 
keep a detailed log of computer usage each month, and to run applic-
ations  by  selecting them from a user specified menu.    While  the 
menu  is  displayed,  the program monitors the  keyboard  input  and  
after  a given period of time, if there is no activity, it logs  the 
user off and blanks the screen.  

     Access is controlled by a username and password.  These may  be 
composed  of  the keyboard characters and numbers and  are  not  re-
stricted  otherwise.  The username must be followed by a comma,  the  
password, and <Enter>, without spaces in between.  For a given user-
name,  only one password is permitted.  Usernames and passwords  are 
entered into  the  program by the individual installing the  program  
on  the system.  During the installation process, the individual may  
choose an "access" code that allows him to enter the data.

     The time and date are assumed to be set when the computer boots 
up.   The program keeps a file with the username,  the  application, 
whether the use is business or personal (for IRS purposes), the time 
and  date,  and any additional comments (1 line) the user  may  add.  
When  the  user logs out (or the program logs him out) the  file  is 
written  with the notation "logout."  A new file is  generated  each 
month.   The filename is coded with the month and year and  has  the 
extension ".log."  The file is written as an ASCII file which can be 
imported into a data-base program for easy inspection and analysis.

     The user creates a menu of the applications he or she wants  to 
run  by  selecting "Modify the Menu," and entering the path  to  the 
application from the root directory, the executable (.exe or .com  - 
no  batch files allowed) filename, and a description for  the  menu.  
Up to 45 menu entries are possible. 

     A batch file may be run from LOGIN, but to do so requires spec
ial  care:  when the program asks for the executable  filename,  the 
user must type in the following 

                    command /c <batch-file-name> 

where <batch-file-name> is the name of the batch file the user wish
es  to  run.  All the other entries are similar to  those  of  other 
applications.  You must have DOS 3.0 or higher to do this. 


II.  Installation.

     1.   Boot up the computer with DOS 2.0 (or later versions)  and 
make the default drive the hard disk.  (Make sure the root directory 
is the current directory.)  

     2.   Place the floppy diskette containing the program in  Drive 
A:, close the door, and after the prompt type

                             a:install

Then  follow  the directions.  Be sure to add  the  following  three 
lines to the end of your autoexec.bat file after the installation:

                      copy autolog.txt ln1.txt
                      log
                      command /c xeq1

if you are using DOS 3.0 or higher; or, add these lines 

                      copy autolog.txt ln1.txt
                      log
                      xeq1

if you are using DOS 2.0 or 2.1.

     3.  The LOGIN INITIALIZATION program allows the user to  select 
the screen display colors, the display time before blanking, and the 
access  code.   You  should run the program and keep  track  of  the 
access code you select.

     4.  Re-boot or type "autoexec" to start the program.  

     5.   When  the LOGIN program asks for  Username  and  Password, 
enter  your  access  code, a comma, and press <Enter>  -  again,  no 
spaces allowed and the comma is necessary.  This way you gain access 
to  the authorized user and password list.  Enter the  username  and 
password.  Only one password per username is permitted. 



III.  Helpful Hints.

     1.   Think about the application programs you want to  run  and 
the  order you want them to appear on the menu.  Make sure you  know 
the  path to the application and the executable filename before  you 
begin to enter the data.  The menu description can be 12  characters 
long.

     2.   There  will be times when you want to get to  DOS  to  run 
commands  that  require parameters, like "copy," and the way  to  do 
this  is to place an entry in the menu without an executable   file
name:   just   hit <Enter> when asked for the  executable  filename.  
When  you invoke this "application," LOGIN will return you  to  DOS.  
Return to LOGIN by typing "go"  from  the root directory (or specify 
the root directory in a "Path"  statement in your Autoexec.bat file:  
then you can type "go" from anywhere).



 

IV.  Additional help.

     This program was written by Hugh A. Calvin for Arts &  Sciences 
Company.  It was written in QuickBasic 4.0 for the IBM PC/XT or  AT.  
The  source is available on a 5.25" diskette at a cost of  $50  plus 
$3.50 postage and handling.  Send your check to:

                      Arts & Sciences Company
                           23 Arabian Way
                      Scotts Valley, CA 95066


     Since  this  program is being distributed  as  Shareware,  only 
registered  users may call for assistance.  To register,  send  your 
name,  mailing address, telephone number, and the  old  registration 
number, and a check for $25 to Arts & Sciences.  Upon  registration, 
you  are entitled to a user's manual, technical support, your  (new) 
registration number, and program updates.  

     By distributing the program, you will earn $5 each time someone 
registers with your registration number.  



V.  Site Licenses and Bundling Arrangements
     
     Corporate site licenses and bundling arrangements are available 
direct from Arts & Sciences Company.
     
     Site  licenses  can be used to distribute large  quantities  of 
LOGIN  and its documentation within a specific organization at  very 
reasonable prices.  
     
     Bundling arrangements can be used to distribute copies of LOGIN 
in order to promote some other product or service. 
     
     Note  that neither of these activities is permitted  under  the 
limited license granted to all users of LOGIN without the  expressed 
written consent of Arts & Sciences Company. 
     
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1146

     Volume in drive A has no label
     Directory of A:\

    AUTH     ID        128   4-20-88   9:33p
    AUTOLOG  TXT        23   4-10-88   9:14a
    C        BAT        13   5-10-88   7:26a
    FILE1146 TXT      2293  10-07-88   9:16a
    FILES    DOC       896   4-22-88   6:00a
    GO       BAT        38  10-03-88   3:35p
    GO       TXT       540  10-03-88   3:39p
    INITIAL  EXE     54145   5-07-88   9:34a
    INSTALL  BAT       384   4-20-88   9:39p
    LN1      TXT        19   4-20-88   9:31p
    LOG      EXE     65899   5-08-88   7:54p
    LOG      INI       256   5-01-88   9:55a
    LOGIN    ARC    112320   5-14-88   7:47p
    MANUAL   BAT       152  10-03-88   3:36p
    MENU     1         128   4-20-88   9:30p
    README   DOC      9594   5-14-88   7:47p
    REGISTR  LOG        20   5-07-88   9:32a
           17 file(s)     246848 bytes
                           63488 bytes free
