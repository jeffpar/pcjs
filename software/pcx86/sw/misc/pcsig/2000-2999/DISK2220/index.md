---
layout: page
title: "PC-SIG Diskette Library (Disk #2220)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2220/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2220"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO SCREDIT 2 OF 2 (1653 ALSO)"

    As a Turbo Pascal programmer you may enjoy screen design, but dread the
    hours of coding required to get the screen to look the way you want.
    Many screen library packages help, but still require that you write a
    considerable amount of code.  With TURBO SCREDIT, you create screens
    with the built-in screen editor; TURBO SCREDIT automatically generates
    the code.  No syntax errors and no repetitive debugging.
    
    The package mainstay is a special editor for designing screens. Tedious
    tasks such as programming in screen color, data field location, data
    field length, data entry order, and line and box drawing are easily
    manipulated in the screen editor.  Data input, conversion, and error
    checking are all controlled with a simple macro sub language.  No
    photographic memory or scratch work is necessary since the screen design
    is done as it would appear in the application. The generated code is
    even commented to make customization easier.
    
    TURBO SCREDIT can be used by programmers at any skill level.  It comes
    with extensive on-line help, a tutorial, and a programmers reference
    manual.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2220.TXT

{% raw %}
```
Disk No: 2220                                                           
Disk Title: Turbo ScrEdit 2 of 2 (1653 also)                            
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Turbo ScrEdit                                            
Author Version: 1.6                                                     
Author Registration: $25.00                                             
Special Requirements: Turbo Pascal or Turbo C v1.5 or higher.           
                                                                        
As a Turbo Pascal programmer you may enjoy screen design, but dread the 
hours of coding required to get the screen to look the way you want.    
Many screen library packages help, but still require that you write a   
considerable amount of code.  With TURBO SCREDIT, you create screens    
with the built-in screen editor; TURBO SCREDIT automatically generates  
the code.  No syntax errors and no repetitive debugging.                
                                                                        
The package mainstay is a special editor for designing screens.         
Tedious tasks such as programming in screen color, data field           
location, data field length, data entry order, and line and box         
drawing are easily manipulated in the screen editor.  Data input,       
conversion, and error checking are all controlled with a simple macro   
sub language.  No photographic memory or scratch work is necessary      
since the screen design is done as it would appear in the application.  
The generated code is even commented to make customization easier.      
                                                                        
TURBO SCREDIT can be used by programmers at any skill level.  It comes  
with extensive on-line help and a tutorial.                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
      Page 1                  Turbo ScrEdit 1.6            [ReadMe.Doc]
                             (Shareware Version)
      
                   (C)opyright 1989, 1990 by iHn Systems.
                                P.O. Box 1707
                            Tulare CA. 93275-1707
                               (209) 688-7665
                     Answering machine available 24 hrs.
      
      [About version 1.6]----------------------------------------------
      Turbo ScrEdit 1.6 has many improvements over version 1.5, but  is 
      completely source code compatible with all previous versions. 
      Improvements include:
       1 - A new programmers reference manual.
       2 - New tutor parts II and III (II deals with field validation
           statements, III deals with programming techniques.)
       3 - New version now supports true DUPE FIELDS, EDIT MASKS, FULL
           COLOR RECONFIGURING PROGRAMMATICALLY (fields and screens).
           Improved demonstration  files and examples.  New  modes  for
           using  ENTER as TAB, instantaneous field validation as  data
           is  entered, automatic display of field help  messages,  and
           much more!
       4 - All new installation procedure (INSTALL.BAT). 
       5 - BATCH  file  procedures simplify generating the  "Unit"  and  
           "C" library files for programmers interfaces.
       6 - Windows  library has been improved and made much faster  and 
           more flexible.
       
       PREVIOUS TURBO SCREDIT USERS:
           Delete  all  of  the previous Turbo ScrEdit  files  and  re-
           install using INSTALL.BAT.  
      
           ScrEdit.Exe has been renamed to TScrEdit.Exe.
       
       PREVIOUS VERSION ERRORS CORRECTED:
           The run time error that would occasionally occur while using 
           the F4 compile screen option has been corrected.
      
           The   F9  ascii  character  override  procedure   has   been 
           corrected.
      
           Turbo ScrEdit seemed to Hang when any key was pressed  other 
           that  Y or N when prompting for confirmation  during  screen 
           selection  -  Now  it continues to prompt until Y  or  N  is 
           selected.
      
           Automatic  screen file backup is now optional - has Y  or  N 
           prompt.
      
      
      [DISTRIBUTION DISKETTES]-----------------------------------------
      DISK 1 OF 2: Contains   the  Turbo  ScrEdit  screen   development 
                   environment  and PARTS I and II of the Turbo ScrEdit 
                   Tutor.
       
      DISK 2 OF 2: Contains  the  source  code needed  to  compile  and 
                   create the programming interfaces required to access 
                   and  use  screens  stored in  Turbo  ScrEdit  screen 
      
      
      
      
      
      
      
      
      Page 2                                               [ReadMe.Doc]
      -----------------------------------------------------------------
                   libraries. Disk 2 of 2 also contains PART III of the 
                   Turbo  ScrEdit  tutor,  the  programmers   reference              
                   manual, programming examples.
      
      DISK 3:      REGISTERED  VERSION ONLY:   Contains  the  "Pop  Up" 
                   windows  interface  files, a mailing  label  program 
                   that  demonstrates using Turbo ScrEdit  screens  and 
                   windows  to maintain a data base of mailing  labels. 
                   (Uses  Turbo  Database Toolbox).  Other  programming 
                   examples as disk space allows.
      
      
      [BULLETIN BOARD USERS]-------------------------------------------
      
      If  you have downloaded the Turbo ScrEdit files from  a  bulletin 
      board,  you  will want to unpack the files onto 2  (360k)  floppy 
      diskettes.  (One  high density diskette will do, but it  will  be 
      easier  to  follow the installation instructions if you  use  two 
      diskettes.)  
      
      Unpack ScrEd1.Arc onto a diskette labeled "Disk 1 of 2".
      
      Unpack ScrEd2.Arc onto a diskette labeled "Disk 2 of 2".
      
      When  you have successfully unpacked the files you will have  two 
      diskettes that will contain the files listed below.
           
      [DISK FILES DESCRIPTION]-----------------------------------------
                                               (Registered version)
          "Disk 1 of 2"      "Disk 2 of 2"      "Disk 3"   
          ------------       ------------       -------------- 
          ScrDisk1.Exe       ScrDisk3.Exe       See ReadMe.Doc
          ScrDisk2.Exe       ScrDisk4.Exe   
          ReadMe.Doc         ScrDisk5.Exe   
          Install.Bat        ReadMe.Doc     
                             Install3.Bat   
                             Install5.Bat   
                      
      For  a  detailed description of each of the files  in  the  Turbo 
      ScrEdit package, read the contents of the file "PrintMe.1st".
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Page 3                                               [ReadMe.Doc]
      [INSTALLATION INSTRUCTIONS]--------------------------------------
      
      The batch file INSTALL.BAT will help you install Turbo ScrEdit on 
      your system. The installation will vary depending on your  system 
      configuration. 
      
      * Hard disk users*      There is nothing special you will need to
      do  before beginning the installation. You will specify the  name 
      of  the  directory that you want Turbo ScrEdit  to  be  installed 
      into. The installation program will create the directory and four 
      additional sub-directories.
      
      * Floppy disk users *   You  will  need  5   formatted  diskettes 
      for the installation. Some of the diskettes will only be required 
      until you can print the documents that they will hold. Before  we 
      go further let me show you how the 5 diskettes will relate to the 
      hard drive installation. 
      
      Hard Disk Structure:         Floppy diskettes labeled:
      ---------------------------  ------------------------------------
      C:\UserDirectory             "1 of 5 - Turbo ScrEdit"
      C:\UserDirectory\Tutor       "2 of 5 - Turbo ScrEdit Tutor"
      C:\UserDirectory\Doc         "3 of 5 - Programmers Ref. Manual"
      C:\UserDirectory\Interfac    "4 of 5 - Program Interface Modules"
      C:\UserDirectory\Demos       "5 of 5 - Examples and Demos"
      
      (UserDirectory is specified by you during installation.)                
      -----------------------------------------------------------------
      
      INSTALL.BAT  requires  three parameters and has  a  command  line 
      format of:
           INSTALL TYPE  FROM:  TO:[\PATH]       
                   ----  -----  ----------
           TYPE:   H  when installing on a hard drive system.
                   F  when installing on a floppy drive system.
           FROM:   The  disk drive where the installation diskette  has 
                   been inserted.
           TO:[\PATH]  
                   FLOPPY DRIVE INSTALLATION: specify only the 
                   destination disk drive (No Path, \ is assumed).
      
                   HARD DRIVE INSTALLATION: specify the drive and
                   path where you wish Turbo ScrEdit to reside.
      
      TO BEGIN THE INSTALLATION: follow these 3 steps:
      
         STEP 1 - Insert "Disk 1 of 2" into drive A: 
      
         STEP 2 -  FLOPPY DRIVE INSTALLATION: Insert diskette "1 of  5" 
                   into drive B: and type: B:
      
         STEP 3 -  HARD DRIVE INSTALLATION example:
                       A:INSTALL H A: C:\ScrEdit
      
                -  FLOPPY DRIVE INSTALLATION example:
                       A:INSTALL F A: B:
      
      TO COMPLETE THE INSTALLATION: When INSTALL.BAT is  finished,  the 
      initial  installation will be complete. However, there are  still 
      several  steps  to  be  performed.  Locate  and  print  the  file 
      "PrintMe.1st and continue the installation as described beginning 
      on Page 3. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2220

     Volume in drive A has no label
     Directory of A:\

    INSTALL3 BAT      2555   5-04-90  12:11p
    INSTALL5 BAT      1422   5-07-90   8:09a
    README   DOC      8528   5-17-90   9:10a
    SCRDISK3 EXE    110508   5-17-90   9:12a
    SCRDISK4 EXE     86136   5-17-90   9:12a
    SCRDISK5 EXE    111678   5-17-90   9:13a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   5-03-90   4:39p
    FILE2220 TXT      2443   6-05-90   4:46p
            9 file(s)     324156 bytes
                           32768 bytes free
