---
layout: page
title: "PC-SIG Diskette Library (Disk #1633)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1633/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1633"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE PROGRESS REPORT"

    Teachers, now the task of writing classroom progress reports is
    academic.  THE PROGRESS REPORT computerizes the process so that progress
    reports for five different classes, each with up to 50 students (250
    student total), can be generated and printed along with a summary list.
    THE PROGRESS REPORT is completely menu driven and intuitive to operate.
    You can enter up to 28 progress report comments, which are saved to a
    file, and can then be individually selected for inclusion in a student
    progress report. This greatly simplifies the job of writing progress
    reports.
    
    Each progress report consists of student name, comment number selections
    1 - 28 (you may select up to 24 of the 28 comments for any one progress
    report), test grade option, and an additional teacher comment.  The test
    grade option allows you to enter up to 8 test grades, which will appear
    in the report along with the average grade.  The last item in the
    progress report is an additional teacher comment for each individual
    student.  The progress reports are automatically printed along with a
    summary list of names for all students processed and their class or
    subject area.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1633.TXT

{% raw %}
```
Disk No: 1633                                                           
Disk Title: The Progress Report                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Progress Report                                      
Author Version: 1.0                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Teachers, now the task of writing classroom progress reports is         
academic.  THE PROGRESS REPORT computerizes the process so that progress
reports for five different classes, each with up to 50 students (250    
student total), can be generated and printed along with a summary list. 
THE PROGRESS REPORT is completely menu driven and intuitive to operate. 
You can enter up to 28 progress report comments, which are saved to a   
file, and can then be individually selected for inclusion in a student  
progress report. This greatly simplifies the job of writing progress    
reports.                                                                
                                                                        
Each progress report consists of student name, comment number selections
1 - 28 (you may select up to 24 of the 28 comments for any one progress 
report), test grade option, and an additional teacher comment.  The test
grade option allows you to enter up to 8 test grades, which will appear 
in the report along with the average grade.  The last item in the       
progress report is an additional teacher comment for each individual    
student.  The progress reports are automatically printed along with a   
summary list of names for all students processed and their class or     
subject area.                                                           
                                                                        
Program Limitations:  Supports 250 students.                            
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TPR1.DOC

{% raw %}
```

                           The Progress Report 1.0
                           (C) Copyright 1989 by AP Software
                                                 PO Box 205
                                                 Westford, Ma., 01886

1.0 Introduction
----------------
    This program creates student progress reports in 5 different classes or
    subject areas with 50 reports available for each class or subject area.
    After all the progress reports are printed, one summary list is
    produced. This list contains the names of all students processed and
    their class or subject area.

    If you find this program useful, send your vote of approval, comments and
    a registration fee of $10 to A.P. Software, PO Box 205, Westford, Ma.
    01886. This program was written by and for teachers. All registered users
    receive support and update discounts."

                Your Support is Needed and Greatly Appreciated

    A.P. Software assumes no responsibility or liability for use of this
    program. 

2.0 Main Menu Operation
-----------------------
    The main menu program screen contains 4 choices described below.

2.1 View/Edit Schoolname
------------------------
    This selection allows you to change the schoolname to any name with a
    maximum of 45 characters or spaces. Punctuation and capital letters must
    be entered exactly as you want them to appear.

    Hitting Return, with no characters entered causes the old name to be
    completey erased.  Hitting ESC cancels the name change operation, leaving
    the original intact.

2.2 View/Edit Comments
----------------------
    This selection allows you to view and change any of the 28 progress report
    comments. A maximum of 35 characters is allowed.

    First select a number from 1-28. Hitting return will then continue the
    editing process.  If no number is entered and you hit Return, all comments
    are updated and control returns to the main menu. ESC will also update
    comments and return control to the main menu.

    Comments must be edited exactly as you want them to appear. Hitting
    Return, with no characters entered, causes the old comment to be
    completely erased. Hitting ESC cancels the current comment change only,
    and returns you to the comment # selection 1-28.















2.3 Produce Progress Reports
----------------------------
    This selection allows you to enter all the necessary data and produce
    progress reports.

    The data input screen appears first allowing you to enter:
    Academic Year                 Max 10 characters
    Term                          Max 10 characters
    Teacher                       Max 20 characters
    Month                         Max  3 characters
    Day                           #'s 1-31
    Year                          1980 - 2100

    The remaining questions on this data input screen allow you to define the
    class/subject areas and the number of reports for each.

    The "# of class/subject areas" must be 1 thru 5. Each class/subject area
    title is then asked for ( max 20 char's) along with the number of reports
    for that class/subject area ( max 50 reports for each area ).

    Next you are given an opportunity to either accept or reject this data.
    Remember, to enter all data exactly as you want it to appear. You will not
    be allowed to leave any of the above questions blank. ESC will cancel this
    operation and return control to the main menu.

    After the data is accepted, the specific data for each individual report
    is entered. That data includes student name ( max 20 char's ) and comment
    # selection ( 1 thru 28 ). You may select up to 24 of the 28 comments for
    any one progress report. Hitting Return, with no comment # selection,
    completes the entries for comments.

    The Test Grade option appears next. You may enter up to 8 test grades. If
    you chose to enter test grades, those grades and their average will appear
    on the progress report. If you hit Return for the FIRST grade, without
    entering any grade, the test grade option is not used for that particular
    progress report. Hitting Return, for grades 2 through 7, without a grade
    entry or entering grade 8 completes this option.

    The last item to enter is the additional teacher comment. You may use up
    to 75 characters to create individual comments for each student.

    Last you are asked to verify the data.  A "Y" continues to the next
    student.  A "N" forces you to re-enter the data for the student you are
    currently working on.

    The reports are automatically printed along with a summary list. This
    list contains the names of all the students processed and their class or
    subject area.

2.4 End
-------
    Returns control to DOS level.

3.0 Files
---------
    There are 2 files necesary for the operation of The Progress Report 1.0.
    They are TPR1.EXE and COMMENTS.DAT. Documentation is in the file
    TPR1.DOC.







rt 1.0.
    They are TPR1.EXE and COMMENTS.DAT. Documentation is in the file
    TPR1.DOC.








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1633

     Volume in drive A has no label
     Directory of A:\

    COMMENTS DAT       878   1-01-80  12:04a
    FILE1633 TXT      2739  12-05-89   4:45p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-08-89  10:15a
    TPR1     DOC      5248   2-11-89   1:17a
    TPR1     EXE     57646   2-11-89   1:45a
            6 file(s)      67089 bytes
                           91136 bytes free
