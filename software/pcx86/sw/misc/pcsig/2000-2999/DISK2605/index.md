---
layout: page
title: "PC-SIG Diskette Library (Disk #2605)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2605/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2605"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2605.TXT

{% raw %}
```
Disk No: 2605                                                           
Disk Title: Metz Window Utilities #2 (2273 also)                        
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: METZ Window Utilities                                    
Author Version: 02/91                                                   
Author Registration: See program description.
Special Requirements: Windows
                                                                        
Metz Software has put together a package of Windows utilities that      
should appeal to wide spectrum of users who want to make their systems  
more manageable.                                                        
                                                                        
METZ TASK MANAGER (version 1.01) is a replacement for the Microsoft task
list application. TASK MANAGER expands upon the task list functions     
providing a comprehensive set of tulities such as a screen blanker, file
manager, customizeable tools menu, and more. PC Magazine Editors Choice 
(2/26/91) Registration $30.00                                           
                                                                        
METZ DESKTOP MANAGER (version 3.21) is a Microsoft Windows application  
designed to provide you with a friendly menuing system plus several     
utilities. With DESKTOP you can easily create menus and sub-menus which 
directly access your applications and data (across directories and      
drives). Additional features such as customizeable screen blanker,      
windows arrangement functions, directory tree display, file finder, pint
and shoot file management, and an automatic menu generator are also     
provided.                                                               
                                                                        
With DESKTOP MANAGER you can create menus and sub-menus which directly  
access your applications and data, across directories and drives.       
Registration $30.00                                                     
                                                                        
METZ DESKTOP NAVIGATOR (version 2.51) is a Microsoft Windows application
designed to provide fast access to your drives, directories, and files. 
File and directory management functions are included as well. Additional
features such as a customizable screen blanker, windows arrangement     
functions, and a file finder are also included. Registration $30.00     
                                                                        
METZ PHONES (version 3.46) is a Microsoft Windows application designed  
for maintaining lists of names, phone numbers, and addresses.  If you   
have a Hayes compatible modem, PHONES can dial the phone for you.       
Registration $15.00                                                     
                                                                        
METZ DIALER (version 2.22) is a pop-up, speed dialer which, when        
coupled with a Hayes compatible modem, provides a quick and convenient  
method of dialing phone numbers.  A customizable pulldown menu allows   
you to add names and numbers you frequently call. Registration $10.00   
                                                                        
METZ LOCK (version 1.52) is a security application for MICROSOFT        
WINDOWS.  Lock can be used to prevent unauthorized use of your system   
while unattended. Registration $15.00                                   
                                                                        
METZ RUNNER (version 1.2) is a utility which provides a quick method to 
run applications and files. Registration $10.00                         
                                                                        
METZ TIME (version 2.5) is a pop-up digital date and time display which 
placed anywhere on the screen. Registration $10.0                       
                                                                        
METZ FREEMEM (verson 3.5)is a moveable, digital, display of free        
conventional and free expanded memory.                                  
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## FREEMEM.DOC

{% raw %}
```
                            METZ Freemem OS/2 Version 1.0                               
                                         1/15/90                                        
                                                                                        
METZ Software                                                                           
OS/2 Version by Tom Landon                                                              
P.O. Box 6042                                                                           
Bellevue, Wa. 98008-0042, U.S.A.                                                        
sales (24 hr) .. (206) 646-5600                                                         
support       .. (206) 641-4525                                                         
                                                                                        
GEnie: A.METZ    Compuserve: [73567,1637]                                               
                                                                                        
Freemem is 'Freeware'.  No payment is necessary for this application.                   
                                                                                        
                                                                                        
                              Overview                                                  
                                                                                        
                                                                                        
Freemem.exe is a moveable, popup, free memory display for OS/2 1.XX.                    
                                                                                        
   - Freemem will keep itself on top of other windows so that it is always              
     visible.                                                                           
                                                                                        
   - With the left mouse button, click and drag Freemem to move it to the               
     desired location on your screen.  This position will be stored                     
     in the current OS2.INI for subsequent startups. (The default startup               
     position is the upper left corner of your screen.)                                 
                                                                                        
   - Add Freemem to your startup.cmd file.                                              
                                                                                        
   - As an OS/2 applications developer I have found freemem to be a                     
     useful tool for detecting memory managment problems within applications.           
     Since FREEMEM remains visible, tracking memory usage is simplified.                
                                                                                        
Non-mouse users.                                                                        
                                                                                        
    When Freemem has the input focus the following function keys work.                  
    (Alt+Tab to shift focus between windows, since Freemem has no caption               
    bar it is difficult to tell if it has the focus.  See the OS/2 Users Guide          
    for more information.)                                                              
                                                                                        
    F1   - Displays the about box, which contains configuration options.                
                                                                                        
    ALT+F7 - Allows you to move Freemem with the keyboard arrow keys.  Press            
                enter when done.                                                        
                                                                                        
    ALT+F4 - Closes Freemem.                                                            
                                                                                        
Mouse users.                                                                            
                                                                                        
    - Freemem can be moved with a click and drag motion of the left mouse               
      button.                                                                           
                                                                                        
    - The right mouse button clicked on Freemem will close it.                          
                                                                                        
    - A left mouse button double click on the Freemem window will display the           
      About box containing configuration options.                                       
                                                                                        
                                                                                        
                                 Configuration Options                                  
                                                                                        
                                                                                        
Invert Window.                                                                          
                                                                                        
    Normally Freemem displays free memory with black text on a white background.        
    Checking this option will cause free memory to be displayed with white text         
    on a black background.                                                              
                                                                                        
Beancount.                                                                              
                                                                                        
    Normally Freemem displays the size of the single largest block of memory.           
    This method is quite fast, so the display is updated every half second.             
    To display total memory available check the beancount option.   Freemem will        
    allocate memory blocks and total the sizes. Because nearly all of memory            
    is being allocated, OS/2 will discard and swap segments to disk.                    
                                                                                        
Beancount frequency.                                                                    
                                                                                        
    Enter how frequently you want beancounting to be performed.                         
                                                                                        
Minimum beancount allocation.                                                           
                                                                                        
    Freemem will allocate available segments this size or larger.   Typically,          
    the minimum size should be about 1024 bytes.  Attempting to allocate                
    smaller segments could cause OS/2 to discard or swap segments to disk,              
    resulting in poor performance.  If swapping is disabled, smaller sizes can          
    be used, such as 0, to get a more accurate reading of total physical memory         
    available.                                                                          
                                                                                        
     Information in this document is subject to change without notice                   
and does not represent any commitment on the part of METZ Software.  No                 
warranties of any kind are associated with this product.                                
                                                                                        
Your comments and suggestions are always welcome.                                       

```
{% endraw %}

## TIME.DOC

{% raw %}
```
                       METZ Time OS/2 Version 1.0                                       
                              Jan 24, 1990                                              
                                                                                        
METZ Software                                                                           
OS/2 Version by Tom Landon                                                              
P.O. Box 6042                                                                           
Bellevue, Wa. 98008-0042, U.S.A.                                                        
sales (24 hr) .. (206) 646-5600                                                         
support       .. (206) 641-4525                                                         
                                                                                        
GEnie: A.METZ    Compuserve: [73567,1637]                                               
                                                                                        
Time is 'Freeware'.  No payment is necessary for this application.                      
                                                                                        
                                                                                        
                              Overview                                                  
                                                                                        
Time.exe is a moveable, popup, digital date/time clock for OS/2 1.1+.                   
                                                                                        
   - Time will keep itself on top of other windows so that it is always                 
     visible.                                                                           
   - With the left mouse button, click and drag Time to move it to the                  
     desired location on your screen.  This position will be stored                     
     in the current WIN.INI for subsequent startups. (The default startup               
     position is the upper left corner of your screen.)                                 
   - Add Time to your STARTUP.CMD.                                                      
                                                                                        
-Non-mouse windows users can interact with Time as follows:                             
   When Time has the input focus the following function keys work:                      
   (Alt+Tab to shift focus between windows, since Time has no caption                   
   bar it is difficult to tell if it does have the focus.)                              
                                                                                        
   F1     - displays the about box, which contains configuration options.               
   ALT+F7 - allows you to move Time with the keyboard arrow keys, press                 
            enter when done.                                                            
   ALT+F4 - closes Time.                                                                
                                                                                        
Mouse users:                                                                            
   Time can be moved with a click and drag motion.                                      
   The right mouse button clicked on Time will close it.                                
   A double click on the Time window will display the About box containing              
      configuration options.                                                            
                                                                                        
     Information in this document is subject to change without notice                   
and does not represent any commitment on the part of METZ Software.  No                 
warranties of any kind are associated with this product.                                
                                                                                        
Your comments and suggestions are always welcome.                                       

```
{% endraw %}

## README.TXT

{% raw %}
```
  METZ Software                        Support       (206)-641-4525
  P.O. Box 6042                        Sales         1-800-447-1712
  Bellevue, Wa., 98008-0042, U.S.A.    International (206) 641-4525
                                       Fax           (206) 644-6026

  GEnie: A.METZ    Compuserve: [73567,1637]

                                                    January 17, 1991

Dear METZ Software User:

          ThreadZ Forms Alliance with METZ Software

ThreadZ Software Design Group, Inc., developers of utilities for
Microsoft Windows, and METZ Software, developers of shareware
utilities for Windows, have announced the formation of a special
alliance, the goal of which is to facilitate timely software
development and provide easy access to solution-oriented products.

The first result of this alliance is the incorporation of two
of METZ Software's shareware programs into a retail product called
ThreadZ File F/X.  ThreadZ File F/X is a group of four utilities
and a bonus of ThreadZ Task Manager, presented in an "a la carte"
manner so as to facilitate ease of use:

F/X File Manager, simplifies the create, delete, copy, rename and
move functions in Windows 3.0 using an intuitive tree directory display.

F/X File Find, a search program enabling users to locate files on
any attached hard drive, provides for the use of DOS wildcards,
specific file extensions, or even file creation dates as search
criteria.

F/X File Undelete provides a list of deleted files, states the
likelihood of a successful recovery, and, when prompted, will attempt
to undelete the chosen file.

F/X Text Search allows users to search a file, path name, directory
or an entire disk for a text string.  A list of matching files is
displayed and may be printed as a report.

The ThreadZ Task Manager, a distinctive replacement for Windows'
Task List, utilizes a menu which may be used to launch applications
and lets you arrange your windows the way that works best for you!

"A wonderful task manager and four other useful utilities makes this
a must-buy for Windows users."   PC Magazine, 1/29/91

ThreadZ File F/X retails for $129.95.  Through March 31, 1991,
however, registered users of METZ Software can order ThreadZ File F/X
for $49.95.  ThreadZ can be reached at 206-869-6292.

Visit ThreadZ at the Windows and OS/2 Conference in San Jose, CA,
March 5-7, 1991.  Also, see us at the Spring COMDEX Windows World in
Atlanta, GA, May 1991.

Sincerely,
Art Metz
METZ Software



The files contained on this disk are self extracting archive files.
By creating these files this way, we can provide more programs on
a diskette and you can un-archive them without any special tools.

  DLR.EXE - METZ Dialer
  DN.EXE  - METZ Desktop Navigator
  DT.EXE  - METZ Desktop Manager
  FM.EXE  - METZ Freemem
  LK.EXE  - METZ Lock
  MTM.EXE - METZ Task Manager
  PH.EXE  - METZ Phones
  RNR.EXE - METZ Runner
  TM.EXE  - METZ Time

Simply run the desired self extracting archive to extract it's contents.
For example, to extract the Phones files, copy PH.EXE to your disk then
type PH.  The contents of PH.EXE will be extracted.  PH.EXE does not
delete itself.

Special thanks to Haruyasu Yoshizaki for providing this self-extracting
file format.  (LHarc Version 1.13c)
```
{% endraw %}

## README~1.TXT

{% raw %}
```
  METZ Software                        Sales         (206) 641-4525
  P.O. Box 6042                        Support       (206) 641-4525
  Bellevue, Wa., 98008-0042, U.S.A.    Fax           (206) 644-6026

  GEnie: A.METZ    Compuserve: [73567,1637]

  METZ_OS2.ZIP - OS/2 Versions of METZ Time & Freemem

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2605

     Volume in drive A has no label
     Directory of A:\

    MTM      EXE     82599   2-12-91   7:57p
    PH       EXE     53623   1-14-91   9:11p
    README   TXT      3345   2-02-91   8:38a
    RNR      EXE     20833   8-05-90   1:40p
    TM       EXE     14565   8-05-90   2:00p
    GO       BAT        28  10-04-90   5:21a
    GO       BAK       971  10-05-90   2:47p
    GO       TXT      1497   4-12-91   9:37a
    FILE2605 TXT      4888   4-12-91   9:48a
    METZ_OS2 ZIP     17723   3-08-90   7:38p
    README~1 TXT       314   8-13-90   9:35p
           11 file(s)     200386 bytes
                          115712 bytes free
