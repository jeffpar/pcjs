---
layout: page
title: "PC-SIG Diskette Library (Disk #2949)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2949/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2949"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## BACKUP.DOC

{% raw %}
```






   BACKUP PROCEDURES

   Operation of The CONSTITUTION Notebook Program involves the creation of
   files that represent a lot of work on your part.

   Files associated with this package are created or modified when you:  edit,
   delete, or modify (synonym or subject) reports; create a new seminar; parse
   another version or portion of the US Constitution, or; edit syllable data.

   TCNbP Company recommends that you periodically backup your data files
   associated with the TCN program.


   To emerge unscathed from an otherwise catastrophic hard drive or floppy
   drive head crash, backup your files on the occasions and in the manner
   described in this file.  Of course, you are free to backup more often if it
   gives you a warm feeling.  But don't backup any less often.  And if you have
   utilities other then DOS to backup your hard drive, by all means use them if
   you care to.  Use the information in this file to determine what to back up.

   If your computer has a magnetic tape, you can use it to backup your TCN data
   files.

   Otherwise, information is presented under the heading MAKING BACKUP TARGETS
   to help you prepare backup targets.

   Details of when, which diskette(s), and how to backup vary depending on
   whether you operate from a 5-1/4" floppy drive, a 3-1/2" floppy drive, or a
   hard drive.

   Refer to the procedure in this file that applies to the manner in which you
   operate The CONSTITUTION Notebook Program and backup your TCN package
   diskettes when and as instructed.


   When to Backup

   The titles of the following paragraphs describe an event after which you
   should backup certain TCN files.  Each paragraph explains WHAT to back up.


   Following changes made using Main Menu options 3, 4, or 5, backup:

        5-1/4 inch Index diskettes (2 of 4 and 3 of 4)

        3-1/2 inch Program diskette and User Documentation diskette (1 of 2 and
        2 of 2)

        Hard drive install directory and all its subdirectories

   


                                            97












   After Using Main Menu option 10, backup

        5-1/4 inch Program Diskette and Index Diskettes

        3-1/2 inch Program diskette and User Documentation diskette (1 of 2 and
        2 of 2)

        Hard drive install directory and all its subdirectories


   After Updating Syllable data with Main Menu option 11, backup

        5-1/4 inch Program Diskette

        3-1/2 inch Program Diskette

        Hard drive install directory and all its subdirectories



   Back Up Procedure for Floppy Diskettes

   On the occasions listed above, copy your working copy of a diskette onto the
   backup target for that diskette.  Use the DOS DISKCOPY command.


   Back Up Procedure for Hard Drives

   On the occasions listed above, copy your install directory and all its files
   and subdirectories onto a backup target diskette or diskettes.  Use the DOS
   BACKUP command with the /S option.  Have a blank formatted diskette handy in
   case you run out of room on your backup diskettes.  This works for
   everybody.  If you have DOS 4.0 or later, BACKUP will automatically format
   and continue the backup process without ill effect.  DOS 3.3 has a /F option
   that will format an unformatted diskette and continue.  Earlier versions
   will fail and you have to start over.

   You may wonder why backing up the install directory and everything below it
   is always recommended when you can easily see by the information for
   diskettes that not everything has to be backed up.  The answer to that is,
   it doesn't take very long anyway and it makes the recovery process much
   simpler.


   Recovery Procedure for Floppies

   If a working copy of a floppy diskette becomes defective, discard it.  Get
   another diskette that formats flawlessly.  Label it.  Copy your backup copy
   of the defective diskette onto the new diskette.




                                            98












   Recovery Procedures for Hard Drives

   If you lose data on a hard drive, get the drive fixed.

   Use the DOS RESTORE command to transfer the contents of your backup
   diskette(s) back onto your hard drive.



   MAKING BACKUP TARGETS


   Refer to the following materials to make backup targets for your TCN program
   package.



   Floppy Targets


   If you operate your TCN program on floppy disks, use the DOS DISKCOPY
   command to make a duplicate of each diskette in the package.  Label each
   duplicate diskette sufficiently to identify:

         a.  which diskette it backs up

         b.  that it is the backup diskette, not the working copy



   Hard Disk Targets

   Format diskettes to be used as a target with the DOS BACKUP command.  Label
   the diskettes sufficiently to identify:

         a.  that it is a backup target for the TCN program

         b.  the install drive and directory.

         c.  how many backup target diskettes you are using for the TCN program
         (four 5 1/4" targets or two 3 1/2" targets is sufficient to start
         with, though more may be required later if you do a lot of work with
         the TCN program)

         d.  the sequence number of each target

         e.  if it is formatted for high density
   





                                            99






```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```






                                    TABLE OF CONTENTS
                                                                                    
     File Names Start Pages

     BACKUP.DOC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  96
     CONTENTS.DOC                                           (Table of Contents)
     COVER.DOC                                              (Cover Page)
     DISKROOM.DOC                                                            92
     EDITOR.DOC                                                              81
     EVAL.DOC                                                                 1
     FUNCKEYS.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
     MAINMENU.DOC                                                            15
     MM1.DOC                                                                 22
     MM10.DOC                                                                65
     MM11.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
     MM12.DOC                                                                74
     MM13.DOC                                                                75
     MM2.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
     MM3.DOC                                                                 26
     MM4.DOC                                                                 29
     MM5.DOC                                                                 40
     MM6.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  51
     MM7.DOC                                                                 58
     MM8.DOC                                                                 63
     MM9.DOC                                                                 64
     PREFACE.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   i
     USATEXT.DOC                                                             85



     Contents by File Name and Pages



     FILENAME:  PREFACE.DOC

     INTRODUCTION                                                             i
     GENERAL PROGRAM DESCRIPTION                                              i
     PROGRAM LIMITATIONS . . . . . . . . . . . . . . . . . . . . . . . . . . ii
          Extent of Error Recovery                                           ii
     KEYBOARD . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . iii
     DETAILED PROGRAM DESCRIPTION . . . . . . . . . . . . . . . . . . . . .  iv
         I.  Parse text files containing US Constitution which produces:     iv
         II.  Access to Lexicography Data Base for Review, Update, Output    iv
         III. A Four-Level Data Hierarchy  . . . . . . . . . . . . . . . . .  v
              A.  Version or portion                                          v
                   1.  Seminar                                                v
                       i). Subject                                            v
                            a).  Heading                                      v
                            b).  List of related words                        v
                            c).  Compilation of related phrases               v
                            d).  Comments                                     v
         













                       ii). Synonym                                          vi
                            a).  Heading                                     vi
                            b).  Word list                                   vi
                            c).  Compilation of related phrases              vi
                            d).  Comments                                    vi
         IV.  Notebook Functions                                             vi
             A.  Access output described in I.A. for review.                 vi
             B.  Create Topic Heading                                        vi
             C.  Access of Topic Headings for Review, 
                            Update, Deletion, Output                         vi
             D.  Compile Index of Phrases Related to Accessed Topic . . . . vii
             E.  Edit User Comments Related to Accessed Topic               vii
     TEXT OF THE UNITED STATES CONSTITUTION IN ASCII FILES                  vii



     FILENAME:  EVAL.DOC


     EVALUATION MATERIALS                                                     1
     GENERAL                                                                  1
          PARSE ENGINE . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
          NOTEBOOK FUNCTIONS                                                  2
          LEXICOGRAPHY FUNCTIONS                                              2
          MISCELLANEOUS FUNCTIONS . . . . . . . . . . . . . . . . . . . . . . 3
     EVALUATION EXERCISES                                                     3
     ON-SCREEN EXERCISES                                                      3
     CROSS REFERENCING EXERCISES                                              3
          Cross Reference Exercises for Synonyms . . . . . . . . . . . . . .  4
          Creating a Synonym Heading                                          4
          Now to access the heading . . . . . . . . . . . . . . . . . . . .   5
          Deleting cross references to all occurrences of a word . . . . . .  7
          Now to cross reference a specific occurrence of a word              7
          Deleting a reference to a specific occurrence of a word . . . . . . 8
          CREATING A SUBJECT HEADING . . . . . . . . . . . . . . . . . . . .  9
          A Timely Exercise                                                   9
     CONTINUING YOUR EVALUATION . . . . . . . . . . . . . . . . . . . . . .  10
     Continuing Evaluation of the Notebook Function                          10
          Review of Provided On-Screen Comments                              10
          Producing Your Own Comments . . . . . . . . . . . . . . . . . . .  11
     Lexicography Functions                                                  11
          Word and Clause Profiles                                           11
          Parameter Searches                                                 11
          Vocabulary Lists                                                   11
     Parse Engine . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
     Registration                                                            12
     Continuing Your Study of the Constitution . . . . . . . . . . . . . . . 13



     















     FILENAME:  MAINMENU.DOC


     MAIN MENU                                                               15
         Exit.                                                               15
         Choose version or portion.                                          15
         Choose Seminar.                                                     15
         Subject . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
         Synonym.                                                            16
         Parameter Searches, Word.                                           16
         Parameter Searches, Clauses . . . . . . . . . . . . . . . . . . . . 17
         Profiles, word use.                                                 17
         Profiles, clauses.                                                  17
         Analyze source file.                                                17
         Enter Syllable Data . . . . . . . . . . . . . . . . . . . . . . . . 18
         Options.                                                            18
         Choose Vocabulary List.                                             18
         Shareware Information.                                              18



     FILENAME:  FUNCKEYS.DOC


     FUNCTION KEYS                                                           19
         F1 Help.                                                            19
         F2 Function Key.                                                    19
         F3 Function Key.                                                    19
         F4 DEL . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
         F5 Xport.                                                           20
         F6 Find.                                                            20
         F7 Print. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
         F8 New.                                                             21
         F9                                                                  21
         F10 TGKEY.                                                          21



   FILENAME:  MM1.DOC

   MAIN MENU OPTION 1, EXIT                                                  22



   FILENAME:  MM2.DOC

   MAIN MENU OPTION 2, Version or Portion                                    23
   Description of the Screen                                                 23
       [File Name]                                                           23
       [Comments]  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
       [ Source Path ]                                                       24
       [ Output Path ]                                                       24
   Selecting a Version or Portion                                            24
     












     FILENAME:  MM3.DOC


     MAIN MENU OPTION  3, Choose Seminar                                     26
         What is a Seminar?                                                  26
         Screen Description . . . . . . . . . . . . . . . . . . . . . . . .  27
         Accessing a Seminar                                                 27
         Creating a Seminar . . . . . . . . . . . . . . . . . . . . . . . .  28



     FILENAME:  MM4.DOC


     CROSS REFERENCING PROCEDURES FOR SUBJECTS                               29
     Creating a Subject Heading                                              29
     Accessing a Subject Heading . . . . . . . . . . . . . . . . . . . . . . 30
     Reviewing the Selected Heading                                          30
     Reviewing Notes . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
     Reviewing Cross References using the F2 Key                             31
         F2 from the Selected Heading Field                                  31
         F2 from a highlighted word in the Middle Column . . . . . . . . . . 32
     Reviewing Cross References using the F3 Key                             32
         F3 from the Selected Heading Field                                  32
         F3 from a highlighted word in the Middle Column . . . . . . . . . . 33
     Adding Cross References to the Accessed Heading                         33
         Cross Referencing Every Occurrence of a Word . . . . . . . . . . .  34
         Cross Referencing Specific Occurrence(s) of a Word                  34
     Adding Comments . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
     Deleting Cross References from the Accessed Heading                     35
         Deleting Individual Cross References . . . . . . . . . . . . . . .  36
         Deleting All Cross References of a Selected Word                    36
     Deleting the Accessed Heading . . . . . . . . . . . . . . . . . . . . . 37
     Printing your Cross References                                          37
     Exporting Your Cross References to an ASCII Disk File . . . . . . . . . 38



     FILENAME:  MM5.DOC


     CROSS REFERENCING PROCEDURES FOR SYNONYMS                               40
     Creating a Synonym Heading                                              40
     Accessing a Synonym Heading                                             40
     Reviewing the Selected Heading . . . . . . . . . . . . . . . . . . . .  41
     Reviewing Notes                                                         41
     Reviewing Cross References using the F2 Key . . . . . . . . . . . . . . 42
         F2 from the Title Block of the Middle Column                        42
         F2 from a highlighted word in the Middle Column                     42
     Reviewing Cross References using the F3 Key . . . . . . . . . . . . . . 43
         F3 from the Title Block of the Middle Column                        43
         F3 from a highlighted word in the Middle Column . . . . . . . . . . 44
     Adding Cross References to the Accessed Heading                         44
     Cross Referencing Every Occurrence of a Word                            44












     Cross Referencing Specific Occurrence(s) of a Word                      45
     Adding Comments . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
     Deleting Cross References from the Accessed Heading                     46
         Deleting Individual Cross References                                46
         Deleting All Cross References of a Selected Word . . . . . . . . .  47
     Deleting the Accessed Heading . . . . . . . . . . . . . . . . . . . . . 48
     Printing your Cross References                                          48
     Exporting Your Cross References to an ASCII Disk File . . . . . . . . . 49



     FILENAME:  MM6.DOC


     MAIN MENU OPTION 6                                                      51
         Description of the Interactive Screen                               51
         Parameter Field Descriptions . . . . . . . . . . . . . . . . . . .  52
              Syllables Area                                                 52
              Letters Area . . . . . . . . . . . . . . . . . . . . . . . . . 53
              Occurrences Area . . . . . . . . . . . . . . . . . . . . . . . 54
              Place Area                                                     54
              Word Area . . . . . . . . . . . . . . . . . . . . . . . . . .  55
         Performing a Search . . . . . . . . . . . . . . . . . . . . . . . . 56



     FILENAME:  MM7.DOC


     MAIN MENU OPTION 7                                                      58
         Description of the Interactive Screen                               58
         Parameter Field Descriptions                                        58
             Syllables Area . . . . . . . . . . . . . . . . . . . . . . . .  59
             Letters Area . . . . . . . . . . . . . . . . . . . . . . . . .  60
             Words Area                                                      60
             Place Area . . . . . . . . . . . . . . . . . . . . . . . . . .  61
         Performing a Search . . . . . . . . . . . . . . . . . . . . . . . . 62



     FILENAME:  MM8.DOC


     MAIN MENU OPTION 8                                                      63
         The Secondary Menu                                                  63
         The Reports                                                         63
         Secondary Menu Option 4                                             63



     















     FILENAME:  MM9.DOC


     MAIN MENU OPTION 9                                                      64
         The Secondary Menu                                                  64
         The Reports                                                         64



     FILENAME:  MM10.DOC


     MAIN MENU OPTION 10, ANALYZING (PARSING) A SOURCE FILE                  65
         1)  Source file preparation.                                        65
         2)  Diskette preparation.                                           65
         3)  Analysis dialogue . . . . . . . . . . . . . . . . . . . . . . . 66
         4)  Analysis.                                                       66
     Analysis Dialogue . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
         1)  Source Text File Drive Specifier Prompt.                        67
         3)  Source Text File Name Prompt . . . . . . . . . . . . . . . . .  68
         4)  Output Drive Prompt.                                            68
         5)  Output Path Prompt . . . . . . . . . . . . . . . . . . . . . .  69
         6)  Comments Prompt.                                                69
     Analysis of the Source File . . . . . . . . . . . . . . . . . . . . . . 70



     FILENAME:  MM11.DOC


   MAIN MENU OPTION 11                                                       72
         The Secondary Menu                                                  72
         Entering Syllable Data . . . . . . . . . . . . . . . . . . . . . .  73



     FILENAME:  MM12.DOC


     MAIN MENU OPTION 12                                                     74
         Name of Install Directory                                           74
         Colors                                                              74
         User Documentation Drive                                            74



     FILENAME:  MM13.DOC


  MAIN MENU OPTION 13                                                        75
  The Secondary Menu                                                         75
         Words In Order Of Appearance . . . . . . . . . . . . . . . . . . .  76
         Words Sorted By Number Of Syllables                                 76
         Alphabetical List, Capitalized Words and Uncapitalized Words Merged 76












         Alphabetical List, Caps separate from Not caps, plus Numbers, Punct 77
         Words That Appear In Uppercase Only                                 77
         Words That Appear In Lower Case Only                                77
         Words That Appear In Both Upper And Lower Case . . . . . . . . . .  78
         Words Sorted By Number Of Times They Are Used                       78
         Words Sorted By Number Of Letters                                   78
         Reviewing the Vocabulary Lists                                      78
  LEXICOGRAPHY INFORMATION . . . . . . . . . . . . . . . . . . . . . . . . . 79
         Length                                                              79
         Syllables                                                           79
         Occurrences . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
         Place                                                               80
         Reference                                                           80



     FILENAME:  EDITOR.DOC


   COMMENT EDITOR                                                            82
         Accessing the Comment Editor                                        82
         Exiting the Comment Editor . . . . . . . . . . . . . . . . . . . .  83
         Using the Comment Editor                                            83
         Suggestions for Content of Your Comments . . . . . . . . . . . . .  84
         Saving Your Comments . . . . . . . . . . . . . . . . . . . . . . .  85
         Printing Your Comments                                              85
         Exporting Your Comments                                             85



     FILENAME:  USATEXT.DOC


     THE CONSTITUTION ON DISK                                                86
     DESCRIPTION OF THE PROVIDED TEXT OF THE CONSTITUTION                    86
         Hyphenation                                                         86
         Initial Capitalization of Words . . . . . . . . . . . . . . . . . . 87
         Archaic Spellings                                                   87
         Punctuation                                                         87
         Indentation                                                         87
         Article Titles . . . . . . . . . . . . . . . . . . . . . . . . . .  88
         Section Titles                                                      88
         Amendment Titles                                                    88
         Inclusion of Resolution . . . . . . . . . . . . . . . . . . . . . . 89
         Calligraphy                                                         89
         Unresolved Questions                                                89
     MODIFICATION OF PROVIDED FILES CONTAINING CONSTITUTIONAL TEXT  . . . .  90
         Roman Numerals                                                      90
         Additional Words                                                    90
         Why Modify the Provided Source Files?                               90
         Use of CONSTITUTION, ARTICLE, and AMENDMENT . . . . . . . . . . . . 91


                                            7












         Use of Section or SECTION                                           91
         Hyphenation                                                         91
         Effects of Vertical Spacing                                         91
         Use of Horizontal (Linear) Spaces . . . . . . . . . . . . . . . . . 92
         Carriage Returns and Horizontal Spaces in the Signature Section     92
         Closing Carriage Returns                                            92
         Use of ASCII File                                                   92



     FILENAME:  DISKROOM.DOC


     EFFICIENT UTILIZATION OF DISK SPACE                                     93
         5-1/4" Floppy Tips                                                  93
         3-1/2" Floppy Tips                                                  93
         Hard Disk Tips                                                      93
     DETAILED INFORMATION ABOUT DISK SPACE REQUIREMENTS                      93
         The Simple Rule . . . . . . . . . . . . . . . . . . . . . . . . . . 94
         When to Check Space Left on Floppies                                94
         What You Need to Know                                               94
         Absolute Minimum Required Space                                     94
         Estimation of Additional Space Requirements                         94
         Sample Space Calculation . . . . . . . . . . . . . . . . . . . . .  95
         Space Requirements for Seminars                                     95
         Consequences of a Disk full Error                                   95
         Summary                                                             95




     FILENAME:  BACKUP.DOC


   BACKUP PROCEDURES                                                         97
   When to Backup                                                            97
         Following changes made using Main Menu options 3, 4, or 5, backup:  97
         After using Main Menu option 10, backup . . . . . . . . . . . . . . 98
         After updating Syllable data with Main Menu option 11, backup       98
   Back Up Procedure for Floppy Diskettes                                    98
   Back Up Procedure for Hard Drives                                         98
   Recovery Procedure for Floppies                                           98
   Recovery Procedures for Hard Drives . . . . . . . . . . . . . . . . . . . 99
   MAKING BACKUP TARGETS                                                     99
         Floppy Targets                                                      99
         Hard Disk Targets                                                   99







                                            8






```
{% endraw %}

## COVER.DOC

{% raw %}
```






                                  User Documentation
                                         for

                          The CONSTITUTION Notebook Program

                        Copyright 1989 - 1992 by TCNbP Company

                               Shareware Version  1.22




















































```
{% endraw %}

## DISKROOM.DOC

{% raw %}
```






     EFFICIENT UTILIZATION OF DISK SPACE

     This file contains information about efficient disk space utilization with
     The CONSTITUTION Notebook Program.  Tips for saving space on 5-1/4"
     floppies, 3-1/2" floppies, and fixed (hard) drives are provided.


     5-1/4" Floppy Tips

     With version 1.22, you can delete the GO.EXE file.

     You can also make another copy of the Index (Main) Diskette (2 of 4) and
     delete some of the seminar directories on each of them.  The seminar
     directories have a path name "VERSION1\SMNR#" where # is an Arabic numeral
     between 1 and 6, inclusive.  You can put 1 - 3 on one diskette and 4 - 6
     on the other.  Do NOT delete the same seminar from both diskettes.  When
     you access the various seminars, the swap index diskette prompt will be
     repeated until you get the right diskette in the floppy drive.

     NOTE:  The information in the preceding paragraph is for the benefit of
     those users who have no fixed drive or a very crowded one.  TCNbP Company
     recommends a hard drive for use of the TCN program beyond evaluation.


     3-1/2" Floppy Tips

     You can delete the GO.EXE file from your working copy.  Restore it from
     your original if you ever need it.

     You can copy the HELP.TCN, HELPINDX.TCN files to other floppies and erase
     them from your working copy.

     You now have more available room on diskette 1.  You can fill it up, but
     you'll have to do a LOT of work.


     Hard Disk Tips

     About all hard disk users can do is erase GO.EXE from the directory you
     installed to on the fixed disk.



     DETAILED INFORMATION ABOUT DISK SPACE REQUIREMENTS


     A full disk error is a fatal error.  You will get kicked out of the
     program.  Depending on what file is being saved when a disk gets full, you
     could lose all your subject cross references or all your synonym cross
     references including notes in a seminar.  The program provides no warning.
     You have to manually monitor available space on a diskette to make the


                                         93












     appropriate decisions.  The following information tells you what you need
     to know to prevent loss of data resulting from a full disk error.

     The Simple Rule

     A simple rule to follow regarding diskette use is 1 version or portion per
     360 K 5.25 inch diskette, 2 per 720 K 3.5 inch diskette, or 3 per 1.44 M
     3.5 inch diskette.  This rule will always work.  It results in decent
     diskette utilization (better than 50% if version includes complete text of
     Constitution) while leaving adequate room for additional comments and
     cross references that you generate manually.

     If you are analyzing small portions of the text of the Constitution, you
     may wish to place more than one version or portion on a diskette.  There
     is an absolute limit of 9, 18, or 36 such portions per 360K, 720K, or 1.44
     M diskettes, respectively.  Placing this number of portions on each size
     diskette leaves very little room for exported files, or for additional
     comments and cross references that you generate manually.  Practical
     maximums are 4, 12, and 27.


     When to Check Space Left on Floppies

     The above guidelines give you a good way to estimate the number of
     diskettes you will need over the life of this program.  There are two
     times that more specific information should be considered.  One of these
     times is before you analyze a version or portion of the Constitution using
     Main Menu option 10.  Another time is before creating another seminar or
     adding a lot of notes.


     What You Need to Know

     The specific information that you need is the amount of unused space on
     the diskette.  If the diskette has just been formatted and no data is
     saved on it, the amount of unused space is equal to the capacity of the
     diskette.  Otherwise, you can use the DOS DIR command (or a disk status
     information feature of your desk top software) to obtain this information.


     Absolute Minimum Required Space

     If the diskette has less than 40,000 bytes available, there is no way you
     can save the output produced by Main Menu option 10 on it.  Don't even
     try.  Even if you are analyzing a portion of the Constitution with only
     one sentence in it, this much disk space is required.  


     Estimation of Additional Space Requirements




                                         94












     To estimate additional space required by larger portions of the
     Constitution, determine the size of the source file using the DOS DIR
     command (or a related feature of your desktop), and double the size.  This
     is the additional space.  To determine total estimated space, add the
     doubled size to 40,000.  This number is an absolute minimum.  To give
     yourself a little working room, add 20,000.  If the diskette has less
     space than this, clear off some space by deleting unrelated files
     including exported files, if any, (don't delete files with the file type
     .lex or .lxx), or use another diskette.


     Sample Space Calculation

     Example calculation using USACONST.DOC with a size of 51,352 bytes.

        40,000   absolute minimum
       104,000   2 times 51,352 (rounded up to 52,000)
        20,000   working room
         -----------
       164,000   minimum practical space required.



     Space Requirements for Seminars

     Concerning notes and seminars, 20,000 bytes is the minimum practical space
     to open a new seminar.  Additionally, allow 1,000 bytes of disk space for
     each 20 lines of notes that you estimate you will write.


     Consequences of a Disk full Error

     Remember, a disk full error is a fatal error.  It can result in the loss
     of a considerable amount of work.  It is up to you to manually monitor the
     available disk space to prevent this error.  This is a simple check that
     can be performed from DOS or your desk top before starting the program.
     If you are generous with spare space, you can prevent this error with
     occasional checks.


     Summary

     The purchased materials require about 1.5 Megabytes of disk space install.  

     If you intend to analyze different versions, additional space is required.  

     The files generated by the program as a result of analyzing the
     Constitution occupy 40 Kilobytes of disk space (minimum, even if the
     portion or version consists of one word) to 164 Kilobytes (worst case,
     unless amendments are added).



                                         95












     If you don't write very many notes, the disk space used by the cross
     reference functions is nominal.  Each line of notes requires 41 bytes of
     disk space.  (This holds even if the entire line is blank and even if it
     was created using the down arrow key.  Don't worry, the PG DN key will not
     create blank lines.)  Once a line has been created, it's there whether it
     was created by wrapping from a previous line or with the down arrow key.
     That 41 bytes of disk space is forever taken.  If you don't enter a line,
     no disk space is used.

     You can enter 190 lines per subject or synonym.  This is a maximum of 8
     Kilobytes per subject or synonym.  You can enter up to 200 subjects or
     2,000 synonyms. Hence, if you type in the maximum allowed notes for 45
     subjects or synonyms, you can exceed the capacity of a 5.25 inch diskette
     forcing you to use a fixed drive.  The same thing happens at 90 subjects
     with maximum notes for a 3.5 inch diskette.  In practice, this is a lot of
     notes and most users will not encounter this limit.





































                                         96






```
{% endraw %}

## EDITOR.DOC

{% raw %}
```






   COMMENT EDITOR

   This file contains information about the comment editor for Main Menu
   options 4 and 5, Subjects and Synonyms, respectively.  The comment editor is
   the part of The CONSTITUTION Notebook Program that lets you type in your
   thoughts concerning interpretation of the Constitution.  Your comments can
   be typed in the rightmost column of the secondary screen for Subjects.  Your
   comments for Synonyms are entered in the rightmost column of the Synonym
   screen.



   Accessing the Comment Editor

   Accessing the Comment Editor is slightly different for Subjects and
   Synonyms.  A procedure for each follows.


   To access the Comment Editor for Subjects, proceed as follows:

        1)  Select Main Menu option 4.

        2)  Access a topic.  (Highlight a selection and press ENTER.)

        3)  Press the TAB key until the flashing cursor appears in the top left
        corner of the rightmost column of the screen.


   To access the Comment Editor for Synonyms, proceed as follows:

        1)  Select Main Menu option 5.

        2)  Access a topic.  

            a)  Press the TAB key once.  The highlighting moves to the second
            column.

            NOTE:  If the Highlighting does not move to the second column, it
            is because no Synonym headings have been created.  To create a
            Synonym heading, select a word of interest in the left column and
            press ENTER.  Then start at step a.

            b)  Highlight the desired heading.

            c)  Press ENTER.

        3)  Press the TAB key until the flashing cursor appears in the top left
        corner of the rightmost column of the screen.





                                         82












   Exiting the Comment Editor

   To exit the Comment Editor, press the TAB key or the ESC key.  In either
   case, the flashing cursor disappears from the rightmost column and
   highlighting appears in the leftmost column.

   NOTE:  On older computers, a delay up to 15 seconds can occur when you exit
   the comment editor.  This delay is normal for the TCN program.  Your
   computer is not locked up.  This delay never occurs when you only browse
   comments without making changes.  It occurs as a seminar gets full of
   comments.  If you add or delete one or more lines of comments in one of the
   first titles (as determined by where it is displayed) in the list of titles,
   the delay is most pronounced.



   Using the Comment Editor

   The following material describes modes of the Comment Editor and actions of
   the various keys.

        The Comment Editor operates in an insert mode or a strikeover mode
        controlled by the INSERT key.  An underline cursor indicates insert
        mode.  On most computers strikeover mode is indicated by a rectangular
        cursor.  On some computers, the strikeover cursor is a line at the top
        of the letter and another line at the bottom of the letter.

        Each letter you type appears where the cursor is and the cursor is
        moved to the right one space or to the next line.

        In the insert mode, when you type a character, text beginning at the
        cursor and the cursor itself moves one space to the right and the
        character you typed appears where the cursor was.  When appropriate,
        words are wrapped to the next line and the cursor moves to the next
        line.

        In the strikeover mode, when you type a character, the character you
        type replaces whatever was there and the cursor moves to the right one
        space or to the next line.

        If you press the ENTER key in the insert mode, a new line is created
        with text at and to the right of the cursor on it.  If the line is not
        wrapped properly, place the cursor past the end of the last word on it
        and press the DELETE key.

        If you press the ENTER key in the strikeover mode, the cursor is moved
        to the beginning of the next line.  If you press the ENTER key while
        the cursor is on the last line of your comments, a new line is created.





                                         83












        To delete a character in either mode, place the flashing cursor under
        the character and press the DELETE key.  Use the BACK SPACE key to
        erase the character to the left of the cursor.

        To delete a blank line in either mode, place the flashing cursor
        anywhere on the line and press the DELETE key.  If the last line of
        your comments is a blank line, it cannot be deleted.

        To control the position of the flashing cursor without typing text, use
        the HOME, END, PG UP, PG DN, and the cursor movement (arrow) keys.

        Until you enter comments for a topic, only the ENTER key, the right
        arrow key and the down arrow cursor keys will move the cursor.

        If you have two or more lines of comments (even if they are blank), the
        HOME key and the END key will move the flashing cursor to the first and
        last line, respectively, of your comments.  The column is not affected
        with the END key.  The HOME key moves the flashing cursor to the first
        character in the first line.

        If the flashing cursor is not in the first column of the first line,
        the left arrow key (or CTRL-L combination) will move the cursor to the
        left one space or up one line.

        If the flashing cursor is not on the first line of comments, the up
        arrow key will move the cursor toward the first line one line at a
        time.  The cursor stays in the same column.

        Until you have 14 or more lines of comments, the PG UP key and the 
        PG DN key have no effect.

        Once you type 14 or more lines, the PG UP key will move the text 13
        lines toward the first line.  If the first line of comments is on the
        screen, the PG UP key has no effect.  The cursor stays in the same
        column on the same line of the screen.

        Once you type 14 or more lines, the PG DN key will move the text 13
        lines toward the last line.  If the last line of comments is on the
        screen, the PG DN key has no effect.  The cursor stays in the same
        column on the same line of the screen.


   Suggestions for Content of Your Comments

   While the cross referencing functions of The CONSTITUTION Notebook Program
   limit you strictly to internal parts of the Constitution, the Comment Editor
   does not so restrict you.

        In your comments, you can interpret indexes related to the current
        topic.



                                         84












        You can cite other topics indexed in the same seminar.

        You can cite other topics indexed in different seminars.

        You can cite topics indexed in other versions or portions of the
        Constitution.

        You can cite relevant Court cases or Supreme Court cases.

        You can cite titles, authors, and pages of relevant research material.



   Saving Your Comments

   To save your comments, press the ESC key until the Main Menu appears.  If
   desired, you can access your comments again for further editing.  Do not
   turn your computer off after entering comments until you exit from The
   CONSTITUTION Notebook Program using Main Menu option 1.  If you do, results
   are unpredictable.


   Printing Your Comments

   To print your comments, press the TAB key as required to highlight the title
   of your topic and press the F7 key.  Your comments are printed following the
   title of the topic, the list of related words, and the list of indexed
   phrases.



   Exporting Your Comments

   To export your comments, press the TAB key as required to highlight the
   title of your topic and press the F5 key.  Prepare the appropriate disk
   drive if exporting to a floppy drive; enter a drive specifier, path,
   filename and extension and press ENTER.  Your comments are exported to the
   file you specified. The format of the export file is the same as the
   printout obtained using the F7 key as described in the preceding procedure.
   That is, your comments follow the title of the topic, the list of related
   words, and the list of indexed phrases.

   When accessing the exported file with a word processing application, specify
   carriage return at the end of lines if prompted for this information.

   If you erroneously press the F5 key, press the ESC key to exit without
   exporting a topic.  Control of the program resumes with the highlighting on
   the title of your topic.





                                         85






```
{% endraw %}

## EVAL.DOC

{% raw %}
```





     EVALUATION MATERIALS

     The following materials contain information and exercises to help you
     evaluate the TCN program.

     EVALUATION MATERIALS                                                     1
     GENERAL                                                                  1
          PARSE ENGINE . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
          NOTEBOOK FUNCTIONS                                                  2
          LEXICOGRAPHY FUNCTIONS                                              2
          MISCELLANEOUS FUNCTIONS . . . . . . . . . . . . . . . . . . . . . . 3
     EVALUATION EXERCISES                                                     3
     ON-SCREEN EXERCISES                                                      3
     CROSS REFERENCING EXERCISES                                              3
          Cross Reference Exercises for Synonyms . . . . . . . . . . . . . .  4
          Creating a Synonym Heading                                          4
          Now to access the heading . . . . . . . . . . . . . . . . . . . .   5
          Deleting cross references to all occurrences of a word . . . . . .  7
          Now to cross reference a specific occurrence of a word              7
          Deleting a reference to a specific occurrence of a word . . . . . . 8
          CREATING A SUBJECT HEADING . . . . . . . . . . . . . . . . . . . .  9
          A Timely Exercise                                                   9
     CONTINUING YOUR EVALUATION . . . . . . . . . . . . . . . . . . . . . .  10
     Continuing Evaluation of the Notebook Function                          10
          Review of Provided On-Screen Comments                              10
          Producing Your Own Comments . . . . . . . . . . . . . . . . . . .  11
     Lexicography Functions                                                  11
          Word and Clause Profiles                                           11
          Parameter Searches                                                 11
          Vocabulary Lists                                                   11
     Parse Engine . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
     Registration                                                            12
     Continuing Your Study of the Constitution . . . . . . . . . . . . . . . 13



     GENERAL

     The TCN program has 14 options on the Main Menu that can be grouped as
     follows:

          1.  Parse engine

          2.  Notebook functions

          3.  Lexicography functions (analysis based on word complexity or use)

          4.  Miscellaneous

     A brief description of each group follows.





                                            1










     PARSE ENGINE

     Main Menu option 10 is the parse engine.

     You don't have to know anything about the parse engine at this point
     except that it exists.  It is provided with the TCN package so you can
     update your package if the Constitution is amended.  It is discussed here
     to support the descriptions of the notebook functions and the lexicography
     functions.

     For input, the parse engine uses an ASCII file that contains the text of
     the Constitution.  Preparation of this file is covered in MM10.DOC and
     USATEXT.DOC.  So you can begin evaluating the TCN program without learning
     all that material, 3 complete sets of parse engine output are provided
     with this evaluation copy of the TCN program.

     The output of the parse engine includes encrypted files that contain the
     text of the Constitution and an exhaustive index of every word.  The
     notebook functions use this part of the parse engine output.

     Other output produced by the parse engine is used by the lexicography
     functions.




     NOTEBOOK FUNCTIONS

     Main Menu options 2, 3, 4, and 5 are the notebook functions.  These are
     the functions that lend the word "Notebook" to the title of the TCN
     program.  You can use the notebook functions to:

        1.  Review provided comments about the Constitution and rights.

        2.  Modify, output (to ASCII file or printer), or delete provided
        comments about the Constitution and rights.

        3.  Create, review, modify, output (to ASCII file or printer), or
        delete your own comments about the Constitution and rights.

     The TCN program's interactive search and indexing features are part of the
     notebook functions.

     The notebook functions are introduced by exercises in this file.


     LEXICOGRAPHY FUNCTIONS

     Main Menu options 6, 7, 8, 9, 11, and 13 are the lexicography functions.
     You can use the lexicography functions to:

        1.  Review or output (to ASCII file or printer)

            word profile data

                                            2










            clause profile data

            vocabulary lists

        2.  Review, edit, or output (to ASCII file or printer) syllable data

        3.  Review or output (to ASCII file or printer)

            lists of WORDS that fit user specified lexicography parameters

            lists of CLAUSES that fit user specified lexicography parameters

     MISCELLANEOUS FUNCTIONS

     Main Menu options 1 and 14 are miscellaneous functions.  Main Menu option
     1 lets you exit the TCN program.  Main Menu option 14 tells you how to
     register the TCN program.


     EVALUATION EXERCISES

     The following materials contain a battery of exercises to introduce you to
     the notebook functions of the TCN program.

     ON-SCREEN EXERCISES

     A set of on-screen exercises is part of the TCN program itself.  These
     exercises are intended to help you get started with the program.  To
     access the on-screen exercises, proceed as follows:

     1)  Start the TCN program as described previously.

     2)  When the Main Menu appears, type 4 and press ENTER.

     3)  Notice that the title 'Exercises' is highlighted.

     4)  Press ENTER.

     5)  Press the TAB key twice and scroll through the exercises using the
         PG UP, PG DN, HOME and END keys.  Try some of the things the exercises
         suggest.



     CROSS REFERENCING EXERCISES

     Generally, cross referencing procedures are analogous for synonyms and
     subjects.  The four major steps are:

          1)  Create a heading, if it does not already exist.

          2)  Access the desired heading.

          3)  Review the heading while adding or deleting related references or
          comments.
                                            3











          4)  Exit to the Main Menu to save changes.

     Steps 3 and 4 are identical for subjects and synonyms.  Steps 1 and 2 are
     analogous, but not identical.  The on-screen exercises have taken you
     through step 2 and the review portion of step 3 for subjects.  The
     following exercises take you through all 4 steps for synonyms.  Following
     that, a final exercise shows you how to create a subject heading.

     Specific procedures for subjects and synonyms are contained in files
     MM4.DOC and MM5.DOC, respectively.



     Cross Reference Exercises for Synonyms

     If you have just performed the on-screen exercises, you have to get the
     default seminar to begin this exercise.  The following steps do that.
     They are not required steps in typical cross referencing procedures.

          1)  Select option 3 from the Main Menu.

          2)  Press the HOME key to highlight the top seminar, Sample Subjects
          and Synonyms Cross References.

          3)  Press ENTER.

     Ok, we are back at the Main Menu now ready to begin the synonym cross
     referencing exercise.  The following steps create a heading for the word
     Power.  Other parts of the exercise will cross reference synonyms to the
     word power as used in the Constitution.  As an introduction to the
     comments editor, you will be provided with a question to type in.


     Creating a Synonym Heading

          1)  Select option 5 from the Main Menu.

          NOTE:  On 2 of the lowest lines of the screen just above the function
          key mnemonics, messages appear to advise you what functions are
          available.  Note these messages as you go through the procedure.
          They will help you operate the program without documentation.

          2)  When the SYNONYMS screen appears, press the F6 key.

          3)  Type the word power and press ENTER.

              Notice the words power, Power, Powers, powers at the top of the
              left column.  You are already familiar with use of the F6 key
              from the on-screen exercises.

          4)  Using the up or down arrow keys, highlight the word Power,
          singular, initial capital letter.

          
                                            4










          5)  Press ENTER.

              Notice that the word Power is inserted above the word rights in
              the middle column.  Its placement is explained in MM5.DOC.  The
              heading is now created.


     Now to access the heading . . .

          1)  Press the TAB key once.

              Notice the highlighting is removed from the left column and now
              appears in the middle column.

          2)  Using the up and down arrow keys, highlight the word Power in the
          middle column.

          3)  Press ENTER.

              Notice the list of words in the middle column disappears and the
              title block over the middle column changes.  The highlighting is
              removed from the middle column and now appears in the title block
              of the middle column.

              The heading is accessed.  In this exercise, we accessed the
              heading immediately after creating it.  This is perfectly ok, but
              it is not required.  You can do other things first if you want
              to.

     Now to cross reference some phrases . . .

          1)  First, press the F2 key.

              Don't be alarmed by the blank screen.  When F2 is pressed while
              the heading in the title block is highlighted, all cross
              referenced phrases are displayed.  Since you haven't cross
              referenced anything yet, a blank screen shows exactly what is
              cross referenced.

          2)  Press the ESC key to get the SYNONYMS screen back.

          3)  Press the TAB key once and notice it goes into the comments
          column.  It skips the middle column since the middle column is
          presently empty.

          4)  Press the TAB key and notice the highlighting returns to the left
          column.  If you are following this exercise exactly, the word Power
          is highlighted.  The program keeps track of this sort of thing for
          you.

          5)  Press ENTER.

              Notice the word Power appears in the middle column.  But isn't
              that what already happened?  Well, yes and no.  To see the
              difference . . .
                                            5











          6)  Press the TAB key once.  The highlighting moves to the title
          block of the middle column.

          7)  Press F2.  Hey, no blank screen this time!

              All occurrences of the word Power are now cross referenced as
              synonyms to the heading Power.  Of course, any word can be
              considered a synonym to itself.  So doing this is ok, but it is
              not required.  You identify synonyms to the program; it does not
              find them for you or even give you hints.

          8)  Press the ESC key to get the SYNONYMS screen back.

          9)  Press the TAB key once and notice where it goes.

          10)  Press the TAB key again and type, "How does the use of the word
          Power in the US Constitution compare or contrast with the use of the
          word rights therein?"  Congratulations!  You've just entered comments
          using the comments editor.  More information about it is contained in
          the file EDITOR.DOC.  (You can access that file using the help on
          help feature at the Main Menu.)

          11) Press the TAB key and notice the highlighting back in the left
          column.

          12) Using the up and down arrow keys, highlight the word power,
          singular, lower case.

          13) Press ENTER.

              Notice that power now appears in the middle column.

          14) Highlight Powers and press ENTER to cross reference all
          occurrences.

          15) Highlight powers and press ENTER to cross reference all
          occurrences.

          16) Using the F6 key, find the word authority in the vocabulary list.
          This word is being sought out because it is suspected of being a
          synonym for the word power.

          17) Highlight Authority and press ENTER to cross reference all
          occurrences.

          18) Highlight authority and press ENTER to cross reference all
          occurrences.

          19) Press the TAB key once.

          20) Press F2 to view cross referenced phrases.  Notice the order.
          Optionally, scroll using the PG UP, PG DN, HOME, or END keys.


                                            6










          21) Press F3 to view cross referenced text.  Left and right arrow
          keys move you among cross referenced portions of text.

          22) If you performed step 20 or 21, press the ESC key to get the
          SYNONYMS screen back.

     Ok, now that you have added cross references, you are ready to delete a
     few.  It is useful to be able to delete cross references if you change
     your mind or if you make a mistake.

     As with adding cross references, you can delete the cross references to
     all occurrences of a word with just two keystrokes.  But you don't have to
     add or delete them all.  In the following exercises you will first delete
     the cross references to all occurrences of a word.  Then you will add a
     cross reference to one occurrence of a word.  Then you will delete a cross
     reference to a single occurrence of a word.


     On with the next exercise, 



     Deleting cross references to all occurrences of a word . . .

          1)  Press the TAB key once to place the highlighting in the middle
          column (not in the title block).

          2)  Highlight the word Powers, plural, initial capital letter.  (Use
          up and down arrow keys as needed.

          3)  Press the F4 key.

              Notice prompt that appears a bottom left side of screen.

          4)  Type the letter Y (no need to press ENTER).

              Notice that the word Powers disappears from the middle column.
              But this is not all that has happened.

          5)  Press the TAB key 3 times to highlight the title block.

          6)  Press the F2 key.

              Notice that no phrases containing the word Powers are displayed.

     This is the process to delete cross references to all occurrences of a
     word.

          7)  Press the ESC key to get the SYNONYMS screen back.

     Now to cross reference a specific occurrence of a word . . .

          1)  Press the TAB key three times to move the highlighting to the
          left column.

                                            7










          2)  Using the F6 key and the up and down arrow keys, highlight the
          word Powers.

          3)  Press F2.

          4)  Using the up and down arrow keys, highlight any of the displayed
          phrases that you choose.  Make a note of the reference at the left
          side of the screen.

          5)  Press ENTER.

              It doesn't look like much happened but it did.

          6)  Press the ESC key to get the SYNONYMS screen back.

              Notice that the word Powers is back in the middle column.  But
              that's not all.

          7)  Press the TAB key once to highlight the title block of the middle
          column.

          8)  Press F2 and look for the reference you noted in step 4.  You
          might have to use the PG UP or PG DN scroll keys.  There's your
          phrase.

     9)  Press the ESC key to get the SYNONYMS screen back.


     Deleting a reference to a specific occurrence of a word . . .

     1)  Press the F2 key.

     2)  Using the up and down arrow keys, highlight a phrase, any phrase.

     3)  Press the F4 key.

     4)  Type a Y.

         The phrase is gone.  You saw it happen.

     5)  Press the ESC key to get the SYNONYMS screen back.


     NOTE:  You've done a lot of work.  Before saving it, you might want to go
     back and re-cross reference all occurrences of the word Powers (not to
     mention the single cross reference you just deleted) in order to be able
     to complete the exercise you so thoughtfully typed in the comments column.
     Whatever you decide to do about that, no doubt you will be happy to know
     that when you press the ESC key twice, your work is saved on disk and you
     are returned to the Main Menu.





                                            8










     CREATING A SUBJECT HEADING

     The procedure to create a subject heading is as follows:

          1)  Select option 4 from the Main Menu.

          2)  When the primary SUBJECTS screen appears, press the F8 key.

              Notice that a blank highlighted line appears at the end of the
              list of subjects.  But the title is not complete yet.

          3)  Type in up to 60 letters and numbers to form a meaningful title.

              Now the title is created and complete.

              To access it, just press ENTER anytime it is highlighted,
              including right now.  After you access it, cross references are
              created in exactly the same manner that was shown for synonyms.

              You cannot delete a subject heading from the primary screen.  To
              delete it, access it and proceed to the secondary screen.  Press
              the TAB key once to highlight the heading on the 3rd line, press
              F4 and type a Y.  You are returned to the primary screen and the
              heading is gone.

              If you do not delete the heading, it is automatically saved on
              disk when you return to the Main Menu.


     A Timely Exercise

     During a recent event, the issue addressed in this exercise became
     relevant.  The question arose, "Are supreme court justices appointed for
     life?"  What does the Constitution have to say on this matter?

     Aha!  You have the TCN program.  It has an interactive search feature.
     But to use it, you have to know what words to look for.  However, the
     vocabulary list provides a source of exact search words.  BUT (!!!), those
     lists are almost 1400 words long!

     You could search the entire list of words for promising search key words.
     And if you have absolutely no idea about what is in the Constitution,
     that's exactly what you will have to do.  BUT(!!!), if you have absolutely
     no idea about what is in the Constitution, how likely does it appear that
     you will be able to spot pertinent search key words or recognize the
     relevant text?


     To illustrate the intended point, can you answer the following question:

     Is the issue of the length of terms for supreme court justices even
     addressed in the Constitution?  Yes or No.



                                            9










     If you answered yes, in what Article of the Constitution would you expect
     to find the answer?  Is it in the original document? . . . the Bill of
     Rights, maybe? . . . or in amendments 11 - 26?  

     Enough.  Happily, in this case, TCNbP company will provide you with
     relevant search words and leading questions.  The key words are:

        Behaviour, 
        Impeachment
        Impeachments.  

     The questions are, 

        "Does the Constitution explicitly state that supreme court justices are
        appointed for life?"

        "Does the Constitution explicitly exempt supreme court justices from
        impeachment?"

     By now, you should be able to use the key words to find and index the
     relevant phrases.  And you should be able to use the comment editor to
     type in the preceding questions and your answers to them.

     And this is what the TCN program was designed to do.

     What the TCN program cannot do is ask the question.  To ask the question,
     you must have some idea about what is in the Constitution.  Having the TCN
     program is no substitute for that awareness.  Acquiring that awareness is
     your responsibility.


     This completes the provided EVALUATION EXERCISES.



     CONTINUING YOUR EVALUATION

     The foregoing exercises have demonstrated:

          How to move around in the notebook functions of the TCN program. 

          How to use the interactive search and indexing functions.

     However, your evaluation of the TCN program is not complete.  Neither is
     your study of the United States Constitution.


     Continuing Evaluation of the Notebook Function

     There are a few more things you can do with the notebook function.

          Review of Provided On-Screen Comments

          On-screen with the the US Constitution under this evaluation copy of
          the TCN program are five historically significant documents that
                                            10










          address rights of the human individual.  These documents are
          presented in 180 (or so) paragraph-sized segments in five seminars.
          Along with many of these paragraphs from other rights documents,
          TCNbP Company has provided comments and has indexed a few related
          phrases from the US Constitution.

          Now that you know how to navigate using the notebook functions of the
          TCN program, review some of these provided comments.  In all, TCNbP
          Company provides approximately 20,000 words of comments.

          Producing Your Own Comments

          If you have some issue of Constitutional interpretation in mind, try
          using the interactive search of the TCN program to find relevant
          phrases.  After searching, create a relevant heading and compile any
          relevant phrases under it using the indexing features of the TCN
          program.  Add a few comments that come to mind.

          If you don't find any related phrases, make a heading and type in
          some comments under it.  Mention events that raised the question you
          have in mind.  List search words you tried.  Note whether you found
          the search words you were looking for.  Note why you decided any
          phrases found were not related to the question.

     Lexicography Functions

     Then, in addition to the notebook functions covered in the evaluation
     exercises, there are the lexicography functions.


          Word and Clause Profiles

          Main Menu options 8 and 9 provide profiles of vocabulary and sentence
          complexity.  Calling up the various profiles is easy enough.
          Interpreting the profiles is another matter.  The profiles contain
          raw data.  Whether you use them and how you interpret them is up to
          you.


          Parameter Searches

          Main Menu options 6 and 7 compile lists of words or clauses that fit
          user specified lexicography parameters.  These functions require more
          input than just a menu number.  The user documentation helps.


          Vocabulary Lists

          Perusing the vocabulary lists available under Main Menu option 13
          could prove interesting.  Call up the help and browse the related
          user documentation for information about each list.




                                            11










     Parse Engine

     You might want to try the parse engine.

     This evaluation copy of the TCN program comes with 3 complete sets of
     parse engine output.  The provided evaluation exercises used the default
     set of output.  Before running the parse engine, you ought to have a look
     at the other two sets.

     Use Main Menu option 2 to access the other set of output, called a version
     or portion.

     There are no comments provided with the other portions.  However, the
     lexicography profiles are there.  Have a look.  They give one example of a
     reason to use the parse engine.

     Then read or print out the files USATEXT.DOC and MM10.DOC.  Use help on
     help to print out USATEXT.DOC.  Call up help for Main Menu option 10 and
     press F3 to browse MM10.DOC.  While browsing it, press F7 to print it out.

     To run the parse engine, prepare an ASCII file according to USATEXT.DOC.
     Then refer to MM10.DOC for instructions about the parse dialogue.


     Registration

     Is the TCN program useful?

     Sure it is.

     But is it useful to you?

     Possibly not.

     (Embarrassed silence interrupted at intervals by sounds of throat
     clearing)

     No need for all that.  If the TCN program does not appear to be useful to
     you, simply clear it off your hard drive and pass the trial diskettes on
     to someone else or format them so they can be useful to you.

     But if the TCN program is useful to you and you continue to use it (either
     sporadically or regularly), please register.  See Main Menu option 14 for
     fees and benefits.











                                            12










     Continuing Your Study of the Constitution.

     The evaluation exercises demonstrated the strengths of the TCN program.

     Limitations of the TCN program were also demonstrated.  Some of these
     limitations were limitations not only of the TCN program, but limitations
     also of any computer program (and any computer for that matter).

     The TCN program cannot ask a question.

     The TCN program cannot become concerned about its rights and neither can
     the computer it runs on.

     The computer it runs on cannot experience happiness, so why would it ever
     pursue it?

     But the individual who operates the computer CAN experience happiness.

     And that person is probably actively involved in the pursuit of happiness
     every waking moment.

     And that person must be concerned with the possibility of undue
     interference with legitimate activities involved in that pursuit.

     And that person must be concerned with the legitimate limits of activity
     involved in that pursuit.

     And out of these concerns arise the questions about rights.

     And out of these concerns arise questions about the legitimate limits of
     government powers and the proper exercise thereof.

     The TCN program can help you find what the Constitution has to say
     regarding such questions.

     If you find segments of the Constitution related to such questions, the
     TCN program can help you organize what you find and store it for future
     reference along with your comments about what you did or did not find.

     But it is up to you to ask the question.

     And it is up to you to decide whether the policies, procedures and
     activities of officials are in keeping with the Constitution.

     And it is important for every Citizen to ask these questions and make the
     judgments.

     The Constitution contains a guarantee to provide a Republican form of
     government to every state.  With the active participation of the private
     Citizenry, this guarantee IS fulfilled.  Without it, that guarantee CANNOT
     be fulfilled.

     And what has been said here concerning the Constitution's guarantee of a
     Republican form of government is also true of every guarantee the
     Constitution contains.
                                            13











     For the guarantee to be fulfilled, the Citizenry must participate.

     To participate, to ask relevant questions and make reasonable judgments,
     each Citizen must know at least what is written in the Constitution.

     Whether or not you continue to use the TCN program, please continue your
     study of the Constitution.

     Thank you for trying The CONSTITUTION Notebook Program.













































                                            14





```
{% endraw %}

## FUNCKEYS.DOC

{% raw %}
```






     FUNCTION KEYS


     F1 Help.  

     The TCN program features help-on-help, help at the Main Menu, and context
     sensitive help.  At the Main Menu, press F1 to get help-on-help.  Or type
     the number of a Main Menu option and press F1 to get help related to that
     Main Menu option.  At other times, press F1 to get context sensitive help.
     When help is displayed, you can browse or print related information by
     pressing F3 and then F7.


     NOTE: F2 - F6 have special mnemonics for Main Menu option 14.  These
     mnemonics are self explaining.  They are not described in this file.


     F2 Function Key.

     The F2 function key has the mnemonic "INTRO" at the Main Menu.  At other
     times it has the mnemonic "CONC".

     "INTRO" is an abbreviation for introduction.  When "F2 INTRO" is
     displayed, press F2 to view an introduction to the TCN program.

     "CONC" is an abbreviation for concordance which is a compilation of
     phrases that contain a common word.  When you press F2, a list of phrases
     is displayed.  A reference is displayed for each phrase at the left of the
     screen.  (For more information about this reference, see MM13.DOC.)  One
     word is highlighted in each phrase.  If you are working from a vocabulary
     list, the same word is highlighted in all the displayed phrases.  If you
     are working from a synonym or subject cross reference list, a different
     word may be highlighted in each phrase.  One phrase is highlighted.  The
     PG UP, PG DN, HOME, END, up arrow, down arrow keys can be used to
     highlight a desired phrase.  When working in synonym and subject cross-
     reference lists, you can operate on the highlighted phrase with the ENTER
     key or the F4 key.  If you press F3, the text of the Constitution is
     displayed with the highlighted phrase on the 4th line of the screen.
     (exception is when phrase within 4 lines of top of file or within 14 lines
     of end of file).


     F3 Function Key.

     The F3 key has the mnemonic "EVAL" at the Main Menu.  At other times, it
     has the word "Text" associated with it.

     "EVAL" is an abbreviation for evaluation.  When "F3 EVAL" is displayed,
     press F3 to print out evaluation instructions for the TCN program.  Have
     14 sheets of paper in your printer.  TCNbP Company strongly recommends



                                            19












     that all users take advantage of these materials to evaluate the TCN
     program.

     If you press F3 while a vocabulary list is displayed, the text of the
     Constitution is displayed with the first occurrence of the highlighted
     word on the fourth line of the screen (with exceptions noted previously).
     If the selected word occurs more than once, you can use the right and left
     arrow keys to move among the occurrences.  The left arrow key will not
     move you from the first occurrence to the last occurrence.  The right
     arrow key will not move you from the last occurrence to the first
     occurrence.  The PG UP, PG DN, HOME, and END keys are active while text is
     displayed using F3.


     F4 DEL.  

     DEL is a mnemonic for delete.  However, F4 is not used to delete
     characters.  F4 is used to delete seminars, subject headings, or cross
     references.  You always get a double check prompt when you press F4.  Type
     an N to exit without deleting anything.  What gets deleted depends on what
     is highlighted on the screen.  Take your time.  One keystroke can delete
     hours of work if a subject heading, synonym list heading, or a seminar
     title is highlighted.


     F5 Xport.  

     This key allows you to export some of the reports generated using this
     program.  You can use exported files with your own word processing or
     spreadsheet software applications.  You are prompted for a file name.
     Type in the drive specifier, path, file name and extension.  If you don't
     know what this means, refer to the manuals that came with your computer or
     other software.  To avoid erasing files generated automatically by this
     program, do not use .lex or .lxx as the extension.  As an added measure,
     set aside a separate diskette or directory specifically for the purpose of
     holding files created using the F5 key.  Content and format of the file is
     the same as what you get when you press the F7 key with a given field
     highlighted.


     F6 Find.  

     If you are in an alphabetically sorted vocabulary list, this key will get
     you within a few keystrokes of a specific word.  You can type the whole
     word if desired, but the first 3 or 4 letters of the word will get you
     close.  As a rule, don't use all caps.  Also, capitalizing or not
     capitalizing the first letter makes a big difference in some lists.  F6 is
     active when an alphabetical vocabulary list is selected (Main Menu option
     13, secondary menu options 3, 4, 5, 6, or 7) and Main Menu options 4, 5,
     6, 11, or 13 are in use.  To escape from F6 without performing a search,
     press ENTER without typing anything.


                                            20














     F7 Print.

     Use this key to produce hard copy printout of vocabulary lists, word
     concordances, synonym and subject cross references or profiles.  If F7
     doesn't print something, press the F10 key to turn off display of function
     key mnemonics and use the screen print function of your computer.  F7 will
     not produce hard copy of Constitutional text.  Use your word processor to
     do that with the provided Constitutional text files.


     F8 New.  

     Use this key to add a new seminar title or subject heading.  You must
     select option 3 or 4 from the Main Menu for this key to be active.  


     F9

     Not used.


     F10 TGKEY.  

     Turns display of function key mnemonics on or off with repeated presses.
     Default mode is keys displayed.  Press F10 to turn off display.  When
     desired, press F10 again to turn display of mnemonics back on.  Useful for
     screen prints if you do not want to have the function key mnemonics
     included in your output.























                                            21






```
{% endraw %}

## MAINMENU.DOC

{% raw %}
```






     MAIN MENU

     The Main Menu is the menu that is displayed when you start the program.

     It consists of 14 options numbered 1 through 14.

     To select an option, use the typewriter number keys (not the numeric
     keypad keys) to type the corresponding number and press ENTER.

     If you make a mistake, use the BACK SPACE key to erase it before pressing
     ENTER.

     A brief discussion of each option follows.


     Exit.  

     The exit option allows you to exit the notebook program without rebooting
     your computer.  Get in the habit of exiting the program with this option.
     To do so ensures that any notes you have made will be saved on disk.  For
     more information, see file MM1.DOC.


     Choose version or portion.

     Within limits, The CONSTITUTION Notebook Program allows you to parse any
     complete version or any portion of any version of the United States
     Constitution that you wish.  The files associated with one complete
     version of the Constitution and three portions of the Constitution are
     provided with the program.  The choose version or portion option allows
     you to indicate which version or portion of the Constitution you want to
     examine.  The information displayed about each version or portion is
     entered in the dialogue associated with Main Menu option 10 Analyze Source
     File.  To select a version or portion, scroll through the list displayed
     when you select option 2 until the entry for the desired portion or
     version is highlighted and then press ENTER.  The default selection is the
     complete version of the Constitution provided with the program.  To read
     the files associated with a selected version or portion requires up to 5
     minutes depending on the amount of text included as well as what kind of
     computer you have.  For more information, see file MM2.DOC.



     Choose Seminar.

     The notes (subject cross references, synonym cross references and related
     comments) that you compile for each version or portion can be organized in
     seminars.  The amount of notes you can store is limited mainly by disk
     space and a practical maximum of 40 seminars per version or portion.  This
     allows up to 80,000 cross-references, an adequate quantity for a document
     consisting of less than 10,000 words.  Subordinate to each seminar is a


                                            15












     set of subject reports and a set of synonym reports that you can generate
     and modify using this program.  For more information, see file MM3.DOC.



     Subject.

     This option allows you to collect references to words related to a heading
     you make up.  The references are generated by highlighting a word in a
     vocabulary list (to indicate every occurrence of that word in the
     Constitution is related to the heading) or by highlighting a phrase
     containing the word in a concordance-like display generated by function
     key 2 (to indicate that the highlighted occurrence is related to the
     subject heading).  References can be deleted in a similar fashion using
     the F4 key.  To select the desired subject, scroll through the displayed
     list until the desired subject is highlighted and then press ENTER.  The
     selected subject is then displayed for review, update, deletion, print
     out, or saving to disk.  New subjects are added by pressing the F8 key.
     To delete a subject, access it, press the tab key once and then use F4.  A
     simple editor allows you to compile comments related to each subject
     heading.  For more information, see file MM4.DOC.



     Synonym.

     This option allows you to collect references to words that are synonyms to
     other words in the Constitution.  The references are generated by
     highlighting a word in a vocabulary list (to indicate every occurrence of
     that word in the Constitution is considered to be a synonym) or by
     highlighting a phrase containing the word in a concordance-like display
     generated by function key 2 (to indicate that the highlighted occurrence
     is considered to be a synonym).  References can be deleted in a similar
     fashion using the F4 key.  To select the desired list of synonyms, scroll
     through the displayed list until the desired word is highlighted and then
     press ENTER.  The selected word is then displayed along with its cross
     references for review, update, deletion, print out, or saving to disk.  To
     indicate that a word has synonyms, highlight it in a vocabulary list and
     press ENTER.  To delete a word, access it and then use F4.  A simple
     editor allows you to compile comments related to each word with synonyms.
     For more information, see file MM5.DOC.



     Parameter Searches, Word.

     In this program, the term word refers to any group of letters and numbers
     between two blanks, a blank and a punctuation mark, or a punctuation mark
     and a blank.  This option allows you to compile lists of words based on a
     set of parameters that you enter on an interactive screen.  For example,



                                            16












     you could list all the 7-letter words that start with N if you so desire
     using this option.  For more information, see file MM6.DOC.



     Parameter Searches, Clauses.

     In this program, the term clause refers to all words occurring between any
     two punctuation marks.  You can list clauses that consist of a number of
     letters, words, and syllables in a specified range entered on an
     interactive screen.  This option can be used to compile clauses in terms
     of reading complexity.  For more information, see file MM7.DOC.



     Profiles, word use.

     Gives you access to profiles of word use by vocabulary and text according
     to letters, syllables, and number of times a word is used.  Another gauge
     of reading complexity.  Report is generated automatically during execution
     of Main Menu option 10.  Can be updated without performing Main Menu
     option 10 if new syllable data is entered using Main Menu option 11.  Can
     be printed out or exported (saved as soft copy) for edit.  For more
     information, see file MM8.DOC.



     Profiles, clauses.

     Gives you access to profiles of clause complexity by number of words,
     letters, or syllables.  Another gauge of reading complexity.  Report is
     generated automatically during execution of Main Menu option 10.  Can be
     updated without performing Main Menu option 10 if new syllable data is
     entered using Main Menu option 11.  Can be printed out or exported (saved
     as soft copy) for edit.  For more information, see file MM9.DOC.


     Analyze source file.

     Allows you to generate full compliment of output for a version or portion
     of the Constitution that you prepare.  For best results, run this option
     first, that is, before performing any other Main Menu option.  Re-start
     program if necessary to run this option first.  If you analyze two
     versions or portions back to back, re-start the program between the two.
     Certain rules must be followed concerning hyphenation and headings for
     amendments, sections and articles.  The first word in the file is
     critical.  Refer to MODIFICATION OF PROVIDED FILES CONTAINING
     CONSTITUTIONAL TEXT in the file USATEXT.DOC for more information.  Fixed
     drive operators can arrange input and output files any way desired. Floppy
     drive operators must observe a few constraints.  For more information, see
     file MM10.DOC.


                                            17












     Enter Syllable Data.

     Allows you to enter the number of syllables for any word in the vocabulary
     of the Constitution.  This option is provided in case the Constitution is
     amended resulting in new words being used for which syllable data is not
     entered.  Also, you may disagree with the number of syllables entered in
     the provided list.  You can change the number of syllables using this
     option.  Keep in mind that this is a master vocabulary being changed.  All
     profiles subsequently generated for any version or portion using options 6
     - 10 will use the data you enter.  For more information, see file
     MM11.DOC.


     Options.

     Allows you to indicate desired values for a series of options.  For more
     information, see file MM12.DOC.


     Choose Vocabulary List.

     Allows you to choose from a variety of vocabulary lists compiled for the
     selected version or portion during execution of option 10.  The
     subordinate menu is self explanatory.  The default list is number 3 on
     this menu.  For more information, see file MM13.DOC.


     Shareware Information.  

     Provides information related to shareware distribution of this version of
     The CONSTITUTION Notebook Program.  Includes amount of requested payment
     and contact information.  Information is contained in an encrypted file.
     On older, slower PCs, up to 45 seconds is required for decryption.  For
     more information, run the program and select Main Menu option 14.  File
     name MM14.DOC is not provided.


















                                            18






```
{% endraw %}

## MM1.DOC

{% raw %}
```






   MAIN MENU OPTION 1, EXIT


   Main Menu option 1 provides a way for you to exit The CONSTITUTION Notebook
   program to DOS or to your desktop without rebooting your computer.  By
   using this function, you assure yourself that all changes that you make to
   options, syllable information, subject references, or synonym references
   are saved to disk.

   To accomplish this, proceed as follows:

        1)  Upon completion of all desired functions, select Main Menu option
            1, exit.

        2)  At the 'Are you sure, Y/N?' prompt, type a Y.

            Execution of The CONSTITUTION Notebook Program ends and you are
            returned either to DOS or to your desktop, depending on how you
            have your computer set up.

            If you inadvertently select this function, type an N at the 'Are
            you sure, Y/N?' prompt to return to the main menu and continue
            using the program.






























                                            22






```
{% endraw %}

## MM10.DOC

{% raw %}
```






     NOTE:  For best results, perform Main Menu option 10 immediately after
     starting the program (before performing any other function).  If you use
     Main Menu option 10 on two files back-to-back, restart the program between
     the two files.  If you fail to do this, and the file that is analyzed is
     smaller than the selected version or portion or smaller than the
     previously analyzed file, subsequent attempts to display phrases and text
     near the end of a version or portion may result in errors.



     MAIN MENU OPTION 10, ANALYZING (PARSING) A SOURCE FILE


     This file contains information needed to parse a file using Main Menu
     option 10.  In addition to the task oriented instructions needed to
     complete the analysis dialogue, information of a general nature is
     included to guide you through the entire process.


     Major steps involved in analyzing a file are:


     1)  Source file preparation.

     The content of your source file depends on your objective for performing
     the analysis.  The source file is prepared using your word processor.
     Save your file in a mode that does not insert special codes in the file.
     Files in this format are generally described as ASCII files.  All provided
     files are such files.  Main Menu option 10 works fine with them.  Using
     Main Menu option 10 with files containing special codes (not ASCII) may
     produce unreliable results.  Refer to modification of source file for
     further information.

     Check your source file very carefully.  Once you analyze it, you are stuck
     with the results of the analysis.  You cannot delete it.  There is a
     practical limit of 30 (approximately) sets of output that can be
     accommodated by this program.


     2)  Diskette preparation.

     If you intend to save your output on diskette, or use the diskette drives
     to store your source file during the analysis, you must have the diskettes
     ready before you can start the analysis function dialogue.  As you proceed
     through the dialogue, the program checks your information against the
     diskettes in the drive.  This ensures that all required information is
     available.  If not, at least you haven't tied up your computer for the
     time required to parse the file for nothing.





                                            65












     Know what will be on each diskette and have the source file stored where
     you intend to parse it from before starting the program.  If need be,
     format a diskette or two and label it (them) first.

     If you are storing more than one set of output on a diskette, check the
     available space on the diskette that you will use to store your output.
     The program does not do this.  Be sure that the diskette has enough room
     for the automatically generated output files and enough room to store the
     amount of cross references and comments that you estimate you will
     generate.  For further information see DETAILED INFORMATION ABOUT DISK
     SPACE REQUIREMENTS in the file DISKROOM.DOC.

     If you are working on a computer that has only one diskette drive and no
     fixed drive, your source file must be stored on the same diskette where
     the output files will be stored.  This limits one diskette users to 1
     (maximum) analysis of the complete Constitution with all amendments per
     360 K 5.25-inch diskette.  There simply is not room for the source file
     and 2 sets of outputs.  After completing option 10, you can delete the
     source file from the diskette if need be to free up space.  The program
     does not use the source file except during option 10.


     3)  Analysis dialogue.

     The analysis dialogue begins after you select Main Menu option 10.  You
     are prompted for information in a series of prompts.  As you enter each
     item of information, the program checks the information against available
     files on diskette or the fixed drive.  If a problem is detected, prompts
     appear to alert you and give hints at solutions.  The  information entered
     during the analysis dialogue is used by the computer during analysis to
     locate required information and to decide where to store the output.
     Also, this information is saved for display during execution of Main Menu
     option 2.  You are provided an opportunity during the analysis dialogue to
     enter comments (60 characters).

     The analysis dialogue provides a measure of confidence that all required
     files are available before starting the actual analysis.  One thing that
     the dialogue will not detect is when single diskette users have the source
     file and output files on separate diskettes.  Remember, single diskette
     users with no fixed drive, the source file must be on the same diskette
     where you intend the output to be stored.  Otherwise, you will get a fatal
     error or totally erroneous output.  Another thing the program does not
     check is whether the Constitution file is on the Program Diskette.  NEVER
     do this.


     4)  Analysis.

     The program parses the file and generates 28 files that contain the
     indexes used to display and cross reference information.  The screen
     usually has something displayed on it to give you an idea that something


                                            66












     is happening so you can know that you computer is not locked up.  You
     might be prompted to insert the program diskette or the diskette with the
     source file.  If prompted to insert the program diskette (this prompt will
     not appear if you installed on a fixed drive), put the program diskette in
     the drive where you installed.  If you put it in another drive, the prompt
     will be repeated until you put it in the proper drive.  If prompted to
     insert the diskette with the source file, insert it in the drive that you
     indicated during the analysis dialogue.  If you put it in another drive,
     the prompt is repeated until you put it in the appropriate drive.

     If a message appears advising you to print the screen, a fatal error has
     occurred.  This is possible due to the wide variations occurring in user
     preparation of the source file.  If this happens, send your screen print
     out and a copy (on diskette) of your source file to the address provided
     by Main Menu option 14 for advice concerning a solution.



     Analysis Dialogue


     The same series of prompts is displayed for all diskette, diskette
     plus fixed drive, or fixed drive combinations during the analysis
     dialogue.  Depending on the combination of disk drives that you have or
     are using, your responses vary.  Each response is checked for validity
     before proceeding to the next prompt.  Each prompt is repeated until
     acceptable input is provided.  The following materials describe each
     prompt, valid responses and error correction for the analysis dialogue.


     1)  Source Text File Drive Specifier Prompt.

     You are prompted for the drive specifier that indicates on which drive
     the text source file will be stored during analysis.

         a)  Type an upper or lower case letter A - Z.

         b)  Press ENTER.

         The program checks to see if the drive you specified is available.
         A formatted diskette must be in the drive if a floppy is specified.

         If the drive is unavailable, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the drive is available, the next prompt appears.

     





                                            67












     2)  Source Text File Path Information Prompt

     You are prompted for the path on which the source file is stored during
     analysis.  A colon and backslash are automatically added to the drive
     specifier previously entered.

         a)  Type the rest of the path information.  If the source file is
         stored in the root directory, do not type anything.

         b)  Press ENTER.

         The program checks to see if the path you specified exists.

         If the path does not exist, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the path exists, the next prompt appears.


     3)  Source Text File Name Prompt.

     You are prompted for the file name of the source file.

         a)  Type in the source file name and extension.

         b)  Press ENTER.

         The program checks to see if the file exists on the path
         previously entered.

         If the file does not exist, an advisory message appears to that
         effect and solutions are given.  The prompt is repeated.

         If the file exists, the next prompt appears.


     4)  Output Drive Prompt.

     You are prompted for the drive specifier that indicates on which drive the
     output files will be stored.

         a)  Type an upper or lower case letter A - Z.

         b)  Press ENTER.

         The program checks to see if the drive you specified is available.  A
         formatted diskette must be in the drive if a floppy is specified.

         If the drive is unavailable, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.



                                            68












         If the drive is available, the next prompt appears.


     5)  Output Path Prompt.

     You are prompted for the path on which the output files are to be stored
     by analysis.  A colon and backslash are automatically added to the drive
     specifier previously entered.

         a)  Type the rest of the path information.

         If the output is to be stored in the root directory, do not type
         anything.  However, if you are using a fixed drive, or if you are
         storing the output of more than one analysis on a floppy diskette, you
         must not specify the root directory for more than one analysis.
         Otherwise, the results of the previous analysis will be lost.  A
         simple rule is: ALWAYS specify a unique path.  Never store output in
         the root directory on any drive or any diskette.

         b)  Press ENTER.

         The program checks to see if the path you specified exists.

         If the path does not exist, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the path exists, the program checks to see if the path has been
         used for analysis previously.  If so, an advisory message appears to
         that effect, and you are given the option to continue or escape.  If
         you continue, the results of the previous analysis are lost.  If you
         escape, you can repeat the analysis dialogue and enter different path
         information.

         When all checks have been completed, the next prompt appears.

     6)  Comments Prompt.

     You are prompted for 60 characters of comments.

         a)  Type your comments, if any.

         The left and right arrow keys, DELETE, and F9 keys are active.

         The source file name, source file path, the output file path
         information that you entered previously during this dialogue is stored
         for recall during Main Menu option 2.  Your comments need not repeat
         this information.  Use the comments to reference another file or
         perhaps a notebook that contains more detailed information about the
         reasons for this analysis.  Or briefly describe the source file as was
         done with the provided analysis.



                                            69












         b)  Press ENTER.

         No checks are performed.  The program proceeds to the actual analysis
         of the source file.



     Analysis of the Source File


     Following completion of the analysis dialogue, the program reads the
     master sort data.  If you are working from diskette, you may be prompted
     to insert the program diskette.  If so, insert it in the drive that you
     installed to.

     After reading the master sort data, the program attempts to access the
     source file.  If it is not available, you are prompted to insert the
     appropriate diskette.  Insert the diskette in the drive you indicated
     during the analysis dialogue.

     When analysis begins, the 200 bytes of text that is being parsed is
     displayed at the top of the screen.  This display (as well as the others)
     was placed in the code to aid in de-bugging while the program was being
     written.  It was left in the code for two reasons.  One reason is so your
     screen won't sit idle for an extended period while analysis is performed.
     The other reason is to provide helpful information should bugs appear in
     use when the Constitution is amended or when you analyze modified files.

     If your modified version contains words not previously used in the
     provided files, you may be prompted to insert the program diskette during
     analysis (if you are working from diskettes).  If so, place the working
     copy of the program diskette in the drive that you installed to.


     NOTE:  This process updates the master vocabulary list.  Never write the
     updated list to the backup diskette or to the original.  Write the updated
     list to your working copy if you are using diskettes.  To avoid saving the
     updated list on the original or backup copy, always protect those copies
     by leaving the write protect tab in place for 5.25 inch diskettes or
     always leaving the write protect tab on 3.5 inch diskettes in the protect
     position.  Each time your master vocabulary list is updated, backup your
     master vocabulary list.  The program does not do this, nor does it remind
     you to do it.  See BACKUP.DOC.


     The remainder of the prompts that appear on the screen during analysis are
     of no interest except that they should always be changing at least once
     every 5 minutes.  If not, the program is locked up.

     When analysis is complete, you may be prompted to insert the program
     diskette and then the index (output) diskette.  If so, insert the


                                            70












     diskettes in the appropriate drive (install drive for program diskette,
     drive you specified during analysis dialogue for index diskette).  After
     these two prompts, you are returned to the Main Menu and the results of
     your analysis are now available for review.

















































                                            71






```
{% endraw %}

## MM11.DOC

{% raw %}
```






   MAIN MENU OPTION 11


   Main Menu option 11 allows you to update syllable information.  You can edit
   the syllable data provided when you purchased this program.  Or, you can
   enter syllable data for words not included in the purchased master
   vocabulary list, should you parse a modified version of the Constitution or
   should you update the Constitution to include possibly forthcoming
   amendments.

   You can access 6 vocabulary lists using Main Menu option 11, including two
   versions of the master list which are not available using Main Menu options
   13 or 6.

   This file contains information needed to use Main Menu option 11.



   The Secondary Menu


   When you select 11 from the Main Menu, a secondary menu with 7 options
   numbered 0 - 6 appears.  Options 1 - 6 are vocabulary list formats.  Option
   0 returns you to the main menu.

   Option 2 is useful if you have just executed Main Menu option 10 on a
   version or portion of the Constitution.  New words for which no syllable
   information has been entered will appear at the top of the list because the
   computer 'thinks' that these words have 0 syllables.  You can enter the
   syllable data for those words and not concern yourself with the remainder of
   the list.  Given that the default version has nearly 1400 entries for which
   syllable data is entered, this saves a lot of time.  Over an hour was
   required to enter the syllable data for the master list of the default
   version.  Typically, less than a dozen new words will be added to the
   vocabulary in a modified version.  That much syllable information can be
   entered in a few minutes.

   Option 3 speeds up mass entry of syllable entry by automatically copying
   syllable  information for initially capitalized and not initially
   capitalized spellings of the same word.

   Options 1 and 4 display numbers for entry of syllable data.  If a number is
   intended to be pronounced, select one of these lists to enter the
   appropriate syllable data.

   Options 5 and 6 display all words in the master vocabulary list, as opposed
   to options 1 - 4 which only display words that occur in the current version
   or portion.  These lists include all words, including misspelled words
   that were ever included in a file parsed using Main Menu option 10.

   The lists for options 1 - 4 are more fully described in file MM13.DOC.


                                            72















   Entering Syllable Data


   To enter syllable data, proceed as follows:

   1)  Select 11 from the main menu.

   2)  Select a vocabulary list from the secondary menu.

       The selected vocabulary list is displayed after a delay.

   3)  Scroll through the displayed vocabulary list until a word for which
   you wish to enter syllable data is highlighted.  Use the PG UP, PG DN,
   HOME, END, up arrow and down arrow keys to move the highlighting.

   4)  Type the appropriate syllable information using the top row of
   typewriter keys, not the numeric keypad.

       The number you typed is displayed in the syllables column of the
   highlighted word and the highlighting is advanced in the list.

       You do not have to press the ENTER key.

       NOTE:  If you select secondary menu option 3 and the syllable data is
   entered within the bottom 3 lines on a screen, the highlighting may not
   advance properly.  Advance it manually with one of the above mentioned
   scroll keys when this happens.

       You can print the selected vocabulary list or export it (save it to 
   disk) using the F7 and F5 function keys, respectively.

   5)  When you are finished entering syllable data, press the ESC key to
   return to the secondary menu.

       You can select another vocabulary list if desired or return to the
   Main Menu according to your selection.  If you have updated syllable
   information, the program reminds you to regenerate the word usage and
   clause complexity profiles.  The prompt gives you the option to regenerate
   the profiles immediately.  If you type an N, you can update the profile
   later using Main Menu option 8, secondary menu option 4.  If you did not
   enter any syllable data, the prompt does not appear.









                                            73






```
{% endraw %}

## MM12.DOC

{% raw %}
```






     MAIN MENU OPTION 12


     Main Menu option 12 is used to specify desired values for options.  When
     you select 12 from the Main Menu, a secondary menu is displayed.  You can
     choose from among the options on the secondary menu for review or update.
     Or you can choose 0 from the secondary menu to return to the Main Menu.



     Name of Install Directory


     Use eliminated for version 1.22.


     Colors


     If you desire, you can change the colors for color monitor, or the
     relative level of foreground, background intensity for monochrome
     monitors.  The defaults are 1 and 15.  This gives a white on blue display
     on color monitors.  On some monochrome monitors, it results in highlighted
     items being underscored.



     User Documentation Drive

     Use eliminated for version 1.22.























                                            74






```
{% endraw %}

## MM13.DOC

{% raw %}
```






  MAIN MENU OPTION 13


  Main Menu option 13 allows you to select among 9 vocabulary lists.  The
  lists vary as to their content and the sort key by which they are ordered.
  You can print any list using F7 or export any of the lists (save on disk)
  using F5.  A description of each list is included in this file along with 
  some practical word study (lexicographical) methods to which each list lends
  itself.

  With the various lists, lexicography information is displayed on the line
  with each word.  Up to five columns can be displayed within a single list.
  The information in each column is described near the end of this file.

  All lists on this menu contain words, numbers, or punctuation marks that
  occur in the selected version or portion.  A master list that contains all
  words, numbers and punctuation marks from all versions and portions can be
  accessed using Main Menu option 11.

  The TCN program focuses on words.  You access phrases or text by first
  selecting a word from a list.  You proceed from menus to the lists
  automatically.  To return to a list after accessing phrases or text (F2 or F3
  keys), press the ESC key.

  While you are in a list, the following scroll keys move you through the list
  to highlight (select) a specific word:  PG UP, PG DN, HOME, END, up arrow,
  down arrow.

  The list that you need may vary depending on what you are trying to
  accomplish.


  Choice of Vocabulary List

  You can choose a vocabulary list while performing Main Menu options 6, 11, or
  13.  The selected list will affect performance of options 4, 5, 6, 11, and
  13.  To see the default list, select Main Menu option 13 and then select item
  3.  The default list is read when you select a version or portion or when the
  default version is read.  The default list remains in effect until another
  list is selected during performance of Main Menu options 6, 11, or 13.  For
  more information about the available vocabulary lists, see file MM13.DOC.



  The Secondary Menu


  When you select 13 from the Main Menu, a secondary menu consisting of 10
  options numbered 0 - 9 appears.  Options 1 - 9 are vocabulary lists.  Item 0
  returns you to the Main Menu.  The vocabulary lists are discussed below in
  order of their appearance on the secondary menu.


                                            75















  Words In Order Of Appearance


  All words, numbers, and punctuation symbols are included in this list.
  The program creates this list by appending newly encountered words to the
  end of this list.  That is to say, when the program encounters a word for
  the first time in the source file, it adds that word to the end of this
  list.  The result is a list ordered according to initial appearance.

  A practical application of this list is to evaluate focus.  Naturally, the
  words used most often occur early in a version or portion.  Once you get
  past the part of the list that relates the first appearance of very common
  words, there are words that appear late that are used several times.
  Hence, one can infer a focus on these words.  One interesting combination
  of facts to look at is words that appear very early (say even in the
  Preamble) that are used only once.  Hence, this list contains information
  related to focus; one aspect of focus being order of appearance (first
  things -most important- first) and number of times a word is used.



  Words Sorted By Number Of Syllables


  Only words are included in this list.

  A practical use of this list is to enter syllable data.  Also, the
  grouping of words according to syllables may be helpful.



  Alphabetical List, Capitalized Words Merged With Uncapitalized Words


  Only words are included in this list.

  A practical application of this list is convenience when entering synonym
  and subject cross references.  To the program, initially capitalized words
  and words not initially capitalized are two totally different words.
  Hence, if a word appears initially capitalized in some places and not
  initially capitalized in others, you have to access both spellings to
  indicate that both spellings are related.  In an ordinary sort (secondary
  menu option 4), these spellings are far apart in the list.  In this list,
  they are adjacent to each other.

  F6 can be used when this list is selected to quickly move to a desired
  word.



                                            76












  When the program is first started, or when you select a version or
  portion, this is the default list.



  Alphabetical List, Caps separate from Not caps, plus Numbers, Punct


  This list contains all words, numbers, and punctuation marks.  Unlike
  secondary menu option 1, this list is sorted alphabetically.

  One practical use of this list is to access occurrences of Arabic numeral
  in Constitutional text.  With this list selected, you can highlight an
  Arabic numeral and press F2 or F3 to see where the highlighted numeral
  occurs.

  Another practical use of this list is to show exactly which words, numbers
  and punctuation marks are greater than which.  This information is useful
  to understand the results of using the words area of Main Menu option 6.

  You could compile examples of punctuation mark usage.

  F6 works with this list.



  Words That Appear In Uppercase Only


  This list contains those words that are initially capitalized every time
  that they are used in the selected version or portion of the Constitution.

  A photogenic copy of the original Constitution reveals initially
  capitalized words in the middle of sentences.  Many of the words would not
  be capitalized by contemporary capitalization conventions.  An emphasis on
  or importance attached to words that were consistently capitalized can be
  inferred.  This list can be used in conjunction with the following two
  lists to evaluate the use of capitalization in the Constitution.



  Words That Appear In Lower Case Only


  This list contains those words that never appear initially capitalized in
  the selected version or portion of the Constitution.

  This list can be used in conjunction with the preceding list and the
  following list to evaluate use of capitalization in the Constitution.

  


                                            77












  Words That Appear In Both Upper And Lower Case


  This list contains those words that appear initially capitalized in some
  places and not initially capitalized in others in the selected version or
  portion of the Constitution.

  This list can be used in conjunction with the preceding two lists to
  evaluate use of capitalization in the Constitution.



  Words Sorted By Number Of Times They Are Used


  Only words are included in this list.

  A practical use of this list is to rank words by the number of times they
  occur in a selected version or portion.



  Words Sorted By Number Of Letters

  Only words are included in this list.

  A practical use of this list is to rank words that occur in a selected
  version or portion by the number of letters they contain.



  Reviewing the Vocabulary Lists


  To review a vocabulary list, proceed as follows:

  1)  Select 13 from the Main Menu.

  2)  Select a vocabulary list from the secondary menu.

      After a delay, the list is displayed.

      All lists include length, syllable, and occurrence information with
  each word.  In addition, the list accessed through secondary menu option 1
  provides place information.

      You can print out the entire list using the F7 key.

      You can export the entire list to a file on disk that can be used with
  many word processors.  These files are large.  Some word processors won't
  hold them.  If saving to diskette, allow 150,000 bytes for the vocabulary


                                            78












  list of the default version.  The F5 key performs the export function.

      You can review every phrase that contains a highlighted word by using
  the F2 key.  When these phrases are displayed, you can print them or export
  them to disk.  Except for words occurring more than 300 times, the files
  created thusly can be held by many common word processors.

      You can review text surrounding every occurrence of a highlighted word
  using the F3 key.

      When finished reviewing a list, press the ESC key to return to the
  secondary menu.

      When finished reviewing all word lists, select 0 from the secondary
  menu to return to the Main Menu.



  LEXICOGRAPHY INFORMATION


  Five different kinds of lexicography information are displayed in the
  various lists for each word.  Length, syllable, and occurrence data for
  each word is displayed in all the lists.  Reference and place data is
  displayed for the 'Words in order of appearance' list.  All information
  except syllable data is automatically generated and cannot be changed by
  the user.  The information included under each of the five titles is
  described below.



  Length

  The number in the length column is the number of letters in the
  corresponding word.



  Syllables


  The number in the syllables column is the number of syllables in the
  corresponding word.



  






                                            79












  Occurrences


  The number in the occurrences column is the number of times that the
  corresponding word appears in the selected version or portion.



  Place


  Place is defined as the location of a word, number or punctuation mark
  relative to the beginning of a selected version or portion.  Remember, a
  word is a group of alphanumeric characters between two blanks, a
  punctuation mark and a blank, or between a blank and a punctuation mark.
  The displayed place information is location of the first occurrence of the
  corresponding word.



  Reference


  Reference information is displayed for the 'Words in order of appearance'
  list or when F2 is pressed.  In either case, it appears at the left side
  of the screen.  Reference information for the 'Words in order of
  appearance' list is derived from the location of the first occurrence of
  the corresponding word.  Reference information displayed when F2 is
  pressed is derived from the location of the corresponding phrase.  The
  information below about references applies to F2 and the vocabulary list
  display.

  Art is an abbreviation for article.

  Sec is an abbreviation for section.

  Amd is an abbreviation for amendment.

  A reference can have one of the four following formats:

  Art #.#

  Art # Sec #.#

  Amd #.#

  Amd # Sec #.#

  When an article or an amendment is not divided into sections, the number
  following the abbreviation has a number to the right of the decimal.  The
  number to the right of the decimal is a paragraph number.  Even if there


                                            80












  is only one paragraph, this number is used.

  When an article or amendment is divided into sections, the number
  following the abbreviation (Art or Amd) does not have a decimal.  The
  abbreviation Sec is followed by a number, a decimal, and then another
  number.  Even if a section only has one paragraph, there is a number to
  the right of the decimal.

  The reference Amd 10.1 is used to indicate text in the first paragraph of
  the tenth amendment in the Bill of Rights.

  The reference Art 1 Sec 2.3 is used to indicate that the associated word
  or phrase is included in the 3rd paragraph of the 2nd section of the 1st
  article of the Constitution.







































                                            81






```
{% endraw %}

## MM2.DOC

{% raw %}
```






   MAIN MENU OPTION 2, Version or Portion


   Main Menu option 2 allows you to select a version or portion of the
   Constitution for review.  When you purchase the program, you have a
   selection consisting of a complete version, and 3 portions.  Later, if you
   analyze another file using Main Menu option 10, your selection is increased
   to include each version you analyze.  The following materials explain what
   appears on the screen and how to use Main Menu option 2.



   Description of the Screen

   When you select Main Menu option 2, the top three lines of the screen
   contain titles that show the relative positions of information provided for
   each version or portion available for selection.  The titles are:


   [File Name]                      [Comments]
   [ Source Path ]
   [ Output Path ]


   The fourth line of the screen is blank.  The fifth, sixth and seventh
   lines are highlighted (reverse video for color monitors, underscored for
   monochrome).  The highlighted lines contain information entered during the
   analysis dialogue (see file MM10.DOC) for the default version.

   Below the highlighted lines are displayed (in unhighlighted format
   separated by a blank line) the information entered during analysis
   dialogue for the other provided portions.

   If you have used Main Menu option 10 to analyze other versions or portions,
   the information that you entered during the analysis dialogue can be
   displayed by scrolling with the HOME, END, PG UP, PG DN, or up arrow and
   down arrow keys.

   Information for each available version or portion is displayed on three
   lines followed by a blank line.  The information appears in the same
   relative position as indicated by the titles on the top three lines of the
   screen.  The information referred to by each title is as follows:


   [File Name]  

   Twelve characters maximum consisting of a valid DOS file name (8 characters
   maximum), a period (if used), and a 3 character (maximum) extension, if
   used.  File name is entered during analysis dialogue.




                                            23












   [Comments]  

   Beginning in column 20 of the line on which the file name is displayed, 60
   (maximum) characters of comments entered during the analysis dialogue.


   [ Source Path ]  

   Beginning in column 1 of the line below that on which the file name and
   comments are displayed, eighty characters (maximum) of information defining
   drive and path on which source file was stored during execution of Main Menu
   option 10.  Can be a memory jogger if you use your imagination.  Information
   is entered during analysis dialogue.


   [ Output Path ]  

   Beginning in column 1 of the line below that on which the location of source
   file is displayed, eighty characters (maximum) of information defining drive
   and path on which output files were stored during execution of Main Menu
   option 10.  Can be a memory jogger if you use your imagination.  Information
   is entered during analysis dialogue.



   Selecting a Version or Portion


   To select a version or portion of the Constitution for review, proceed as
   follows:

   1)  Select item 2 from the Main Menu.

       A slight delay occurs while information is read from disk.  If
   operating from diskette, you may be prompted to insert the program
   diskette.  If so, place the working copy of your program diskette in the
   drive that you installed to.  If you put it in another drive, the prompt
   is repeated.

   2)  When the selections appear on the screen, scroll through the available
   items using the HOME, END, PG UP, PG DN, and up arrow or down arrow keys
   until the desired version or portion is highlighted.

   3)  If working from diskette, insert the index diskette.  This refers to
   the diskette on which the output files are stored.  Place that diskette in
   the drive specified in the location of output files information area of
   the highlighted selection.

   4)  Press ENTER.

       A delay occurs while files are read.  This delay may be as long as 5


                                            24












   minutes depending on the size of the selected version and the kind of
   computer you have.  A prompt appears at the bottom of the screen advising
   which file is being read.  This prompt should be updated at least every 90
   seconds.  When all files are read, you are returned to the Main Menu.

       If you put the index diskette in the wrong drive, inserted the wrong
   index diskette, or if you failed to insert the index diskette, you are
   prompted to insert it.  Information related to the selected version or
   portion is displayed along with the prompt.  Insert the index diskette in
   the appropriate drive and press ENTER.  In some cases you may be returned
   to the Main Menu anyway.  If so, repeat Main Menu option 2.










































                                            25






```
{% endraw %}

## MM3.DOC

{% raw %}
```






     MAIN MENU OPTION  3, Choose Seminar

     Main Menu option 3 allows you to select among existing seminars or to
     create a new seminar.  The materials in this file explain what a seminar
     is, how and why to create a seminar, and how to select a seminar.



     What is a Seminar?

     A seminar is a set of cross references created by the user.

     The program keeps a separate set of seminars for each version or portion
     of the Constitution analyzed using Main Menu option 10.

     Each seminar contains a set of words with synonyms and a set of subjects.
     Each word with synonyms and each subject has a set of related cross
     references and comments.

     Eight seminars with subject and synonym cross references are provided with
     the default version of analyzed files.  The other provided versions do not
     include any subjects or synonyms.  However, you can create them, if you
     wish.

     A seminar can contain a maximum of:

          2,000 lines of comments for subjects and 2,000 lines of comments for
          synonyms, for a maximum possible total of 4,000 lines of comments.

          2,000 subject headings and 2,000 synonym headings for a maximum
          possible total of 4,000 headings.

          2,000 subject cross references and 2,000 synonym cross references for
          a maximum possible total of 4,000 cross references.

          You can have any relative number of subjects and synonym headings.

          You can have any relative number of cross references and comments
          distributed among the subject headings or among the synonym headings.

     If you reach a maximum limit in the subjects, you can still work in the
     synonym section of the seminar if it is not already full.

     If you reach a maximum limit in the synonyms, you can still work in the
     subject section of the seminar.

     Reaching one of these maximum limits (actually, rather unlikely) is one
     reason to create a new seminar.

     Another reason to create a new seminar is to logically group synonym and
     subject headings, comments and cross references under a title relevant to


                                            26












     the version or portion of the Constitution being studied.

     When you select a version or portion of the Constitution (or let the
     program make the default selection), only the seminars related to that
     selected version or portion can be accessed.

     When you create a seminar, it is accessible only when the selected version
     or portion of the Constitution is selected.  If you select another
     version, the created seminar is unavailable.

     When you select a seminar, only those synonyms and subject headings
     previously stored in that seminar are available for review.  You can
     update the headings, cross references and comments if desired.  Unless you
     manually duplicate a heading with the associated cross references and
     comments in another seminar (perfectly ok to do so), said headings, cross
     references and comments will not be available if you select another
     seminar.

     You can switch seminars as often as you like.



     Screen Description


     When Main Menu option 3 is selected, a screen appears with the title
     SEMINARS.  The third line of the screen is highlighted.  If this is a
     newly analyzed version or portion of the Constitution, the line will be
     blank.  You can enter a title using the typewriter keys, F9, DELETE, and
     the left or right arrow keys.  If you have previously created other
     seminars and entered titles, each of those titles will appear on a line
     below the third line.  No blank line separates titles.  If more than one
     seminar exists, you can move the highlighting using the HOME, END, PG UP,
     PG DN, up arrow or down arrow keys.  You can edit the title of a seminar
     anytime it is highlighted on this screen.



     Accessing a Seminar


     To access a seminar, proceed as follows:

          1)  Select 3 from the Main Menu.

          2)  Scroll through the available selections until the desired seminar
          is highlighted.

          3)  Press ENTER.




                                            27












              You are returned to the Main Menu.  Subject and Synonyms
              available now using Main menu options 4 and 5 are those
              previously entered under the accessed seminar.

              If you do not wish to change the accessed seminar, press ESC
              instead of ENTER.  You are returned to the Main Menu.  The
              accessed seminar is unchanged.

              If no seminar selection is made using Main Menu option 3, the
              default is the first seminar.



     Creating a Seminar


     To create a seminar, proceed as follows:

          1)  Select 3 from the Main Menu.

          2)  Press F8.

              A blank highlighted line appears at the end of the existing list.

          3)  Type a seminar title in the highlighted area.

              At this point, you can press F8 and create another seminar.

              OR, you can press ENTER to access the newly created seminar.

              OR, you can press ESC to return to the Main Menu.  The new
              seminar is created; however, the accessed seminar is unchanged.

              OR, you can scroll through the list and press ENTER to select a
              different seminar.

              Pressing ENTER or ESC returns you to the Main Menu with the
              seminar selected as described previously.


     NOTE:  Once you create a seminar, you are stuck with it.  You cannot
     delete it.  If desired you can change the title and place different
     references in it.










                                            28






```
{% endraw %}

## MM4.DOC

{% raw %}
```






     CROSS REFERENCING PROCEDURES FOR SUBJECTS

     The four major steps for cross referencing subjects are:

           1) Create a heading, if it does not already exist.

           2) Access the desired heading.

           3) Review the heading while adding or deleting related references or
           comments.

           4) Exit to the main menu to save changes.



     Creating a Subject Heading


     To create a subject heading, proceed as follows:

          1)  Select 4 from the main menu.

          A screen appears with the heading SUBJECTS.  The third line of the
          screen is highlighted in reverse video.  This line contains the title
          of the default subject for the selected seminar.  If no title has
          been entered, the highlighted area is blank.  If so, you can enter a
          title if desired as described in step 3 which follows.

          2)  Press F8.  A new subject heading is created at the end of the
          existing list.  The highlighting moves to the newly created subject
          heading.

          3)  Type in a title.  Use the typewriter keys as per usual.  The
          INSERT, BACK SPACE, DELETE, left and right arrow keys are active.

          At this point you can access the created subject heading by
          performing the procedure that follows beginning at step 2.  Or you
          can press ESC to return to the Main Menu.  If so, the newly created
          subject title is saved to disk and will be displayed the next time
          you choose Main Menu item 4.  However, no cross references or
          comments are entered as yet.



     








                                            29












     Accessing a Subject Heading


     To access a created subject heading, proceed as follows:

          1)  Select 4 from the main menu.

          A screen appears with the heading SUBJECTS.  The third line of the
          screen is highlighted in reverse video.  This line contains the title
          of the default subject for the selected seminar.  If no title has
          been entered, the highlighted area is blank.  If so, you can enter a
          title if desired as described in step 3 in the preceding procedure.

          2)  Scroll through the list of subjects using PG UP, PG DN, HOME, END
          or the up and down arrow keys until the desired heading is
          highlighted.

          3)  Press ENTER.  A screen appears with a SUBJECT heading on the top
          line.  The title (if any) of the selected subject is displayed on the
          third line, under which is a boxed in area divided into three
          columns.  You now have access to the selected heading for review,
          print out, exporting to disk, updates including additions, deletion
          to cross references or comments, or even elimination of the entire
          subject heading.

          Words previously entered under this heading (if any) appear in the
          middle column.  Notes previously entered under this heading (if any)
          appear in the right column.

          The middle and right columns will be blank if this is the first time
          you have accessed the subject heading.  You can move the highlighting
          among the three columns and the selected heading field using the TAB
          key.  If the middle column is blank, it will be skipped.

          If you press ESC while the cursor is in the rightmost column, the
          cursor is removed from the rightmost column and the highlighting
          appears in the left column.

          If you press ESC while the highlighting is in the left or middle
          column, you are returned to the screen on which the list of subjects
          is displayed.


     Reviewing the Selected Heading


     Cross references and notes associated with a heading can be reviewed after
     the heading is accessed according to the preceding procedure.  The
     associated cross references can be reviewed using either the F2 or the F3
     key.  Procedures for reviewing notes and cross references follow.



                                            30














     Reviewing Notes


     To review notes, press the TAB key until the cursor appears in the
     rightmost column.  Use the scroll keys PG UP, PG DN, HOME, END, up arrow
     and down arrow to move through the comments as desired.  If all comments
     appear in the window, PG UP and PG DN will have no effect.



     Reviewing Cross References using the F2 Key


     One method for reviewing cross references using the F2 key involves
     pressing F2 while the accessed heading is highlighted in the Selected
     Heading field.  The other method involves pressing F2 while a word in the
     middle column is highlighted.  The results obtained by each method and
     practical applications of each method are described below.



     F2 from the Selected Heading Field


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the Selected Heading field on the third line of the screen.

     2)  Press F2.

     The subject screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  All phrases that
     have been cross referenced to the selected heading are accessed.  To
     return to the subject screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from the Title Block of the
     Middle Column.

     Pressing F4 deletes cross reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.





                                            31












     F2 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F2.

     The subject screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  Only those cross
     referenced phrases that contain the highlighted word are accessed.  To
     return to the subject screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from a highlighted word in
     the Middle Column.

     Pressing F4 deletes cross reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     Reviewing Cross References using the F3 Key


     One method for reviewing cross references using the F3 key involves
     pressing F3 while the accessed heading is highlighted in the Selected
     Heading field.  Another method involves pressing F3 while a word in the
     middle column is highlighted.  A third method (mentioned previously)
     involves using the F2 key to locate a specific phrase and then pressing
     the F3 key.  The results obtained by each method and practical
     applications of each method are described below.



     F3 from the Selected Heading Field


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed


                                            32












     heading in the Selected Heading field on the third line of the screen.

     2)  Press F3.

     The subject screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading on the 4th line of
     the screen. (Exception is when cross reference occurs with 1st 4 or last
     14 lines of active version or portion)  To return to the subject screen
     press the ESC key.

     OR, you can scroll through the cross referenced phrases using the
     left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     F3 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F3.

     The subject screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading that contains the
     word you indicated on the 4th line of the screen. (Exception is when cross
     reference occurs with 1st 4 or last 14 lines of active version or portion)
     To return to the subject screen press the ESC key.

     OR, you can scroll through the cross referenced phrases that contain the
     indicated word using the left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     Adding Cross References to the Accessed Heading


     Cross references can be added in two ways.  Before you can add cross
     references to a heading, the heading must already be created and accessed


                                            33












     according to the preceding materials.  Once a heading is created and
     accessed, you can indicate that every occurrence of a word is related to
     the accessed heading or that an individual occurrence of a word is
     related.  You can access the heading and change the cross references as
     many times as you want to.



     Cross Referencing Every Occurrence of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the ENTER key.  The highlighted word appears in the middle
     column.  All occurrences of the highlighted word are now cross referenced
     to the accessed heading.  To verify, use the F2 or F3 key to review the
     cross references as described previously.



     Cross Referencing Specific Occurrence(s) of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the F2 key.  The subject screen is replaced by a series of
     phrases that contain the word you indicated.  All phrases in the
     Constitution that contain the indicated word are accessed.

     You can scroll through the displayed phrases using the scroll keys PG UP,
     PG DN, HOME, END, up arrow or down arrow.

     You can return to the subject screen without cross referencing any thing
     by pressing the ESC key before you press the ENTER key.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  This is desirable sometimes to
     verify that the phrase you have highlighted is actually the phrase you are
     looking for.  Press ESC to return to the subject screen without cross


                                            34












     referencing anything or press F2 to return to the phrase display.

     With a desired phrase highlighted, press the ENTER key.  The highlighted
     occurrence of the word is now cross referenced to the accessed heading.
     The word you indicated before pressing F2 is added to the middle column if
     it was not already there.

     You can cross reference as many phrases as you wish.  If you attempt to
     duplicate the cross reference of an occurrence of a word to the accessed
     heading, the duplicate reference is ignored.  However, that same word can
     still be cross referenced to as many other headings under synonyms, or
     subject in the same or other seminars as you wish.

     When all desired occurrences of a word are cross referenced to the
     accessed heading, press the ESC key to return to the subject screen.

     4)  To verify, use the F2 or F3 key to review the cross references as
     described previously.



     Adding Comments


     With a heading accessed, press the TAB key until the cursor appears in the
     rightmost column.  On the typewriter keys, type up to 190 lines of
     comments per heading, 2000 maximum lines per seminar.  Use the INSERT key
     to control INS and RPLCE modes.  Use the DELETE key or the BACK SPACE key
     to erase unwanted characters.  The ENTER key moves the cursor to the
     beginning of the next line.  If the INS mode is selected, or if the cursor
     is on the last line, it also adds a line.  Active scroll keys are PG UP,
     PG DN, HOME, END, left, right, up and down arrows.  They do what they
     usually do in common word processor programs.  Each time you press the
     down arrow key or the ENTER key  with the cursor on the bottom line of
     your comments, you consume 41 bytes of disk space.  This can add up.  For
     more information, refer to the file named EDITOR.DOC.



     Deleting Cross References from the Accessed Heading


     Individual cross references to the accessed heading can be deleted.  Or
     all cross references of a selected word to the accessed heading can be
     deleted.  Or the accessed heading can be deleted with ALL associated cross
     references and comments.  Procedures to accomplish each of these delete
     functions follow.

     Keep in mind that you are NOT affecting the source text file in any way
     when you use the delete function (or any other feature of this program for
     that matter).  No words can or will be deleted from the vocabulary list


                                            35












     using the F4 key.  Only the accessed heading and its cross references are
     affected by the F4 key.



     Deleting Individual Cross References


     With the heading accessed, proceed as follows:

     1)  Press the F2 key.  You can use the F2 key from within the Selected
     Heading field or from a highlighted word in the middle column as described
     previously under 'Reviewing Cross References using the F2 Key'.

     2)  Scroll through the displayed phrases until the phrase containing the
     occurrence that you wish to delete is highlighted.  Use the PG UP, PG DN,
     HOME, END, or up arrow, down arrow keys to move the highlighting.

     NOTE:  You can return to the subject screen without deleting anything by
     pressing the ESC key.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  The cross
     reference to the highlighted occurrence is now deleted.  The screen is
     refreshed with the deleted phrase eliminated.  If the deleted phrase is
     the only phrase displayed, you are returned to the subject screen.

     If you type N in response to the 'Are you sure, Y/N?' prompt, you are
     returned to the display of cross referenced phrases.  The highlighted
     phrase is NOT deleted.

     You can delete as many cross references as you wish.  When finished
     deleting, press the ESC key to return to the subject screen.  You can
     return to delete cross references to other phrases anytime you wish.

     When you delete individual references using this procedure, no words are
     removed from the middle column, not even if you delete all cross
     references to a particular word or words.



     Deleting All Cross References of a Selected Word


     With the heading accessed, proceed as follows:

     1)  Press the TAB key until the top word in the middle column is accessed.

     2)  Scroll through the displayed words until the desired word is
     highlighted.  Use the PG UP, PG DN, HOME, END, or up arrow, down arrow


                                            36












     keys to move the highlighting.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  All cross
     references to the highlighted word are now deleted.  The screen is
     refreshed with the deleted word eliminated.  If the deleted word is the
     only word in the middle column, the highlighting moves to the left column.

     If you type N in response to the 'Are you sure, Y/N?' prompt, the
     highlighted word is NOT deleted.

     You can delete as many words as you wish.  When finished deleting, you can
     continue performing other functions in any desired order.  You can return
     to delete other words anytime you wish.



     Deleting the Accessed Heading


     When you delete the accessed heading, the accessed heading no longer
     appears on the screen with the list of subjects.  All associated cross
     references and comments are deleted.  The space used for comments on the
     disk is NOT freed up.  To delete the accessed heading, proceed as follows:

     1)  With the heading accessed, press the TAB key until the heading is
     highlighted in the Selected Heading field on the third line of the screen.

     2)  Press the F4 key.

     3)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  You are
     returned to the screen on which the list of subjects is displayed.  The
     list no longer contains the deleted heading.


     NOTE:  You can use the same heading multiple times.  This capability has
     its practical applications.  If you have done this, only the heading that
     you accessed is deleted.

     If you type an N in response to the 'Are you sure, Y/N?' prompt, you can
     continue reviewing the accessed heading as per usual.



     Printing your Cross References


     To make a hard copy of your cross references to an accessed heading,
     proceed as follows:



                                            37












     1)  Prepare your printer.

     2)  Access the desired heading.

     3)  Press the TAB key until the accessed heading is highlighted on the
     third line of the screen.

     4)  Press F7.  The print out should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F7 while the highlighting is in the left
     column.  This results in a 25-page listing of the vocabulary list for the
     default version.  Press the ESC key to stop print out of the vocabulary
     list.  The ESC key will NOT stop print out of the accessed heading.



     Exporting Your Cross References to an ASCII Disk File


     To export a soft copy of your cross references to an ASCII file, proceed
     as
     follows:

     1)  Decide on a file name.

       You are prompted for a file name during this procedure.  The file name
     must be a valid DOS file name.  The program does not perform any check of
     the file name.

       If you enter an invalid file name, results are unpredictable.

       If you enter the file name of an existing file, the existing file is
     erased when you press F5.  No warning or advisory message is provided.

       The file name can include a drive specifier and path information.

       You MUST type in the extension.  The program will not provide one.
     Without the extension, some word processors may not access the file.  Many
     will not access the file as easily without the proper extension.  Check
     the documentation provided with your word processor and use the proper
     extension.

     2)  If working with floppies, insert the target diskette in the
     appropriate drive.

       As has been discussed elsewhere, it is a good idea to use a separate
     diskette for the purpose of exporting these soft copy versions of your
     cross
     references.


                                            38













       Keep track of the space on your target diskette.  As has been discussed
     elsewhere, a full disk error is a fatal error.  You will get kicked out of
     the program.

       Minimum space required is 1,000 bytes.  To this add 10 bytes per word in
     the middle column, 80 bytes per phrase displayed (when the F2 key is
     pressed while the accessed heading is highlighted in the title block of
     the middle column), and 50 bytes per line of comments including all blank
     lines.

       The maximum possible space consumed by a single heading is 170,000
     bytes.  But this is ridiculous and will probably NEVER occur.  Even if it
     does, it will fit on a single floppy if you use one that is less than half
     full.  As a typical example, the soft copy file created by this procedure
     for the provide cross references to the word 'rights' consumes
     approximately 4,000 bytes of disk space.

     3)  Access the desired heading.

     4)  Press the TAB key until the accessed heading is highlighted on the
     third line of the screen.

     5)  Press F5.  You are prompted for a file name.  Type in the file name
     with drive specifier, path information and extension as discussed
     previously.

     6)  Press ENTER.  The export should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F5 while the highlighting is in the left
     column.  This results in a 100,000 byte listing of the vocabulary list for
     the default version.  Press the ESC key to stop exporting of the
     vocabulary list.  The ESC key will NOT stop exporting of the accessed
     heading.

     Don't worry about swapping diskettes.  If you are working with diskettes
     and you forget to swap back to the index or program diskette, you are
     prompted for them when they are needed.  You are NOT prompted for the
     alternate diskette to export soft copy files of your cross references.
     You must do this on your own before pressing ENTER after typing in the
     file name.










                                            39






```
{% endraw %}

## MM5.DOC

{% raw %}
```






     CROSS REFERENCING PROCEDURES FOR SYNONYMS

     The four major steps for cross referencing synonyms are:

          1) Create a heading, if it does not already exist.

          2) Access the desired heading.

          3) Review the heading while adding or deleting related references or
          comments.

          4) Exit to the main menu to save changes.



     Creating a Synonym Heading


     To create a synonym heading, proceed as follows:

     1)  Select 5 from the main menu.

     A screen appears with the heading SYNONYMS.  A box on the screen is
     divided into 3 columns.  The top word in the left column is highlighted.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press ENTER.  When the highlighted word appears in the middle column,
     your heading is created.

     At this point you can access the created synonym heading by performing the
     procedure that follows beginning at step 2.  Or you can press ESC to
     return to the Main Menu.  Notice that the title of the middle column is
     'Words with Synonyms'.  ESC will not return you to the Main Menu if the
     title of the middle column is 'Synonyms for xxxxxxx' where xxxxxx is a
     word you have selected.



     Accessing a Synonym Heading


     To access a created synonym heading, proceed as follows:

     1)  Select 5 from the main menu.

     A screen appears with the heading SYNONYMS.  A box on the screen is
     divided into 3 columns.  The top word in the left column is highlighted.

     2)  Press the TAB key once.  The highlighting moves to the middle column.


                                            40













     3)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired heading is highlighted.   (F6
     won't work when the highlighting is in the middle column.)

     4)  Press ENTER.  The title block of the middle column changes to
     'Synonyms for xxxxxxx' where xxxxxx is the desired heading.  The word you
     selected as the desired heading is highlighted.  You now have access to
     the selected heading for review, print out, exporting to disk, updates
     including additions, deletions to cross references or comments, or even
     elimination of the entire synonym heading.

     Words previously entered under this heading (if any) appear in the middle
     column.  Notes previously entered under this heading (if any) appear in
     the right column.

     The middle and right columns will be blank if this is the first time you
     have accessed the subject heading.  You can move the highlighting among
     the three columns and the middle column title block using the TAB key.  If
     the middle column is blank, it will be skipped.

     If you press ESC while the cursor is in the rightmost column, the cursor
     is removed from the rightmost column and the highlighting appears in the
     left column.

     If you press ESC while the highlighting is in the left column, the middle
     column title block, or in the middle column, the title of the middle
     column changes to 'Words with Synonyms'.



     Reviewing the Selected Heading


     Cross references and notes associated with a heading can be reviewed after
     the heading is accessed according to the preceding procedure.  The
     associated cross references can be reviewed using either the F2 or the F3
     key.  Procedures for reviewing notes and cross references follow.



     Reviewing Notes


     To review notes, press the TAB key until the cursor appears in the
     rightmost column.  Use the scroll keys PG UP, PG DN, HOME, END, up arrow
     and down arrow to move through the comments as desired.  If all comments
     appear in the window, PG UP and PG DN will have no effect.





                                            41












     Reviewing Cross References using the F2 Key

     One method for reviewing cross references using the F2 key involves
     pressing F2 while the accessed heading is highlighted in the title block
     of the middle column.  The other method involves pressing F2 while a word
     in the middle column is highlighted.  The results obtained by each method
     and practical applications of each method are described below.



     F2 from the Title Block of the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the title block of the middle column.

     2)  Press F2.

     The synonym screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  All phrases that
     have been cross referenced to the selected heading are accessed.  To
     return to the synonym screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from the Title Block of the
     Middle Column.

     Pressing F4 deletes cross-reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     F2 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F2.


                                            42













     The synonym screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  Only those cross
     referenced phrases that contain the highlighted word are accessed.  To
     return to the synonym screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from a highlighted word in
     the Middle Column

     Pressing F4 deletes cross-reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     Reviewing Cross References using the F3 Key


     One method for reviewing cross references using the F3 key involves
     pressing F3 while the accessed heading is highlighted in the title block
     of the middle column.  Another method involves pressing F3 while a word in
     the middle column is highlighted.  A third method (mentioned previously)
     involves using the F2 key to locate a specific phrase and then pressing
     the F3 key.  The results obtained by each method and practical
     applications of each method are described below.



     F3 from the Title Block of the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the title block of the middle column.

     2)  Press F3.

     The synonym screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading on the 4th line of
     the screen. (Exception is when cross reference occurs with 1st 4 or last
     14 lines of active version or portion)  To return to the synonym screen
     press the ESC key.

     OR, you can scroll through the cross referenced phrases using the
     left and right arrow keys.



                                            43












     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.




     F3 from a highlighted word in the Middle Column

     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F3.

     The synonym screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading that contains the
     word you indicated on the 4th line of the screen. (Exception is when cross
     reference occurs with 1st 4 or last 14 lines of active version or portion)
     To return to the synonym screen press the ESC key.

     OR, you can scroll through the cross referenced phrases that contain the
     indicated word using the left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     Adding Cross References to the Accessed Heading


     Cross references can be added in two ways.  Before you can add cross
     references to a heading, the heading must already be created and accessed
     according to the preceding materials.  Once a heading is created and
     accessed, you can indicate that every occurrence of a word is a synonym to
     the accessed heading or that an individual occurrence of a word is a
     synonym.  You can access the heading and change the cross references as
     many times as you want to.



     Cross Referencing Every Occurrence of a Word


     With the desired heading accessed, proceed as follows:



                                            44












     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the ENTER key.  The highlighted word appears in the middle
     column.  All occurrences of the highlighted word are now cross referenced
     to the accessed heading.  To verify, use the F2 or F3 key to review the
     cross references as described previously.





     Cross Referencing Specific Occurrence(s) of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the F2 key.  The synonym screen is replaced by a series of
     phrases that contain the word you indicated.  All phrases in the
     Constitution that contain the indicated word are accessed.

     You can scroll through the displayed phrases using the scroll keys PG UP,
     PG DN, HOME, END, up arrow or down arrow.

     You can return to the synonym screen without cross referencing any thing
     by pressing the ESC key before you press the ENTER key.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  This is desirable sometimes to
     verify that the phrase you have highlighted is actually the phrase you are
     looking for.  Press ESC to return to the synonym screen without cross
     referencing anything or press F2 to return to the phrase display.

     With a desired phrase highlighted, press the ENTER key.  The highlighted
     occurrence of the word is now cross referenced to the accessed heading.
     The word you indicated before pressing F2 is added to the middle column if
     it was not already there.

     You can cross reference as many phrases as you wish.  If you attempt to
     duplicate the cross reference of an occurrence of a word to the accessed
     heading, the duplicate reference is ignored.  However, that same word can
     still be cross referenced to as many other headings under synonyms, or


                                            45












     subject in the same or other seminars as you wish.

     When all desired occurrences of a word are cross referenced to the
     accessed heading, press the ESC key to return to the synonym screen.

     4)  To verify, use the F2 or F3 key to review the cross references as
     described previously.



     Adding Comments


     With a heading accessed, press the TAB key until the cursor appears in the
     rightmost column.  On the typewriter keys, type up to 190 lines of
     comments per heading, 2000 maximum lines per seminar.  Use the INSERT key
     to control INS and RPLCE modes.  Use the DELETE key or the BACK SPACE key
     to erase unwanted characters.  The ENTER key moves the cursor to the
     beginning of the next line.  If the INS mode is selected, or if the cursor
     is on the last line, it also adds a line.  Active scroll keys are PG UP,
     PG DN, HOME, END, left, right, up and down arrows.  They do what they
     usually do in common word processor programs.  Each time you press the
     down arrow key or the ENTER key  with the cursor on the bottom line of
     your comments, you consume 41 bytes of disk space.  This can add up.  For
     more information, refer to the file named EDITOR.DOC.



     Deleting Cross References from the Accessed Heading


     Individual cross references to the accessed heading can be deleted.  Or
     all cross references of a selected word to the accessed heading can be
     deleted.  Or the accessed heading can be deleted with ALL associated cross
     references and comments.  Procedures to accomplish each of these delete
     functions follow.

     Keep in mind that you are NOT affecting the source text file in any way
     when you use the delete function (or any other feature of this program for
     that matter).  No words can or will be deleted from the vocabulary list
     using the F4 key.  Only the accessed heading and its cross references are
     affected by the F4 key.



     Deleting Individual Cross References


     With the heading accessed, proceed as follows:

     1)  Press the F2 key.  You can use the F2 key from within the title block


                                            46












     of the middle column or from a highlighted word in the middle column as
     described previously under 'Reviewing Cross References using the F2 Key'.

     2)  Scroll through the displayed phrases until the phrase containing the
     occurrence that you wish to delete is highlighted.  Use the PG UP, PG DN,
     HOME, END, or up arrow, down arrow keys to move the highlighting.

     NOTE:  You can return to the synonym screen without deleting anything by
     pressing the ESC key.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  The cross
     reference to the highlighted occurrence is now deleted.  The screen is
     refreshed with the deleted phrase eliminated.  If the deleted phrase is
     the only phrase displayed, you are returned to the synonym screen.

     If you type N in response to the 'Are you sure, Y/N?' prompt, you are
     returned to the display of cross referenced phrases.  The highlighted
     phrase is NOT deleted.

     You can delete as many cross references as you wish.  When finished
     deleting, press the ESC key to return to the synonym screen.  You can
     return to delete other phrases anytime you wish.

     When you delete individual references using this procedure, no words are
     removed from the middle column, not even if you delete all cross
     references to a particular word or words.



     Deleting All Cross References of a Selected Word


     With the heading accessed, proceed as follows:

     1)  Press the TAB key until the top word in the middle column is accessed.

     2)  Scroll through the displayed words until the desired word is
     highlighted.  Use the PG UP, PG DN, HOME, END, or up arrow, down arrow
     keys to move the highlighting.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  All cross
     references to the highlighted word are now deleted.  The screen is
     refreshed with the deleted word eliminated.  If the deleted word is the
     only word in the middle column, the highlighting moves to the left column.

     If you type N in response to the 'Are you sure, Y/N?' prompt, the
     highlighted word is NOT deleted.


                                            47













     You can delete as many words as you wish.  When finished deleting, you can
     continue performing other functions in any desired order.  You can return
     to delete other words anytime you wish.



     Deleting the Accessed Heading


     When you delete the accessed heading, the word no longer appears in the
     middle column when the heading is Words with Synonyms.  All associated
     cross references and comments are deleted.  The space used for comments on
     the disk is NOT freed up.  To delete the accessed heading, proceed as
     follows:

     1)  With the heading accessed, press the TAB key until the heading is
     highlighted in the title block of the middle column.

     2)  Press the F4 key.

     3)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  Screen is
     refreshed with the comments cleared from the right column.  The title of
     the middle column changes to Words with Synonyms.  The middle column no
     longer contains the deleted heading.  If there are no other words in the
     middle column, the highlighting appears in the left column.

     NOTE:  You can use the same word as a heading multiple times.  This
     capability has its practical applications.  If you have done this, only
     the heading that you accessed is deleted.

     If you type an N in response to the 'Are you sure, Y/N?' prompt, you can
     continue reviewing the accessed heading as per usual.



     Printing your Cross References


     To make a hard copy of your cross references to an accessed heading,
     proceed as follows:

     1)  Prepare your printer.

     2)  Access the desired heading.

     3)  Press the TAB key until the desired heading is highlighted in the
     title block of the middle column.

     4)  Press F7.  The print out should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may


                                            48












     occur.

     A common mistake is to press F7 while the highlighting is in the left
     column.  This results in a 25-page listing of the vocabulary list for the
     default version.  Press the ESC key to stop print out of the vocabulary
     list.  The ESC key will NOT stop print out of the accessed heading.



     Exporting Your Cross References to an ASCII Disk File


     To export a soft copy of your cross references to an ASCII file, proceed
     as  follows:

     1)  Decide on a file name.

       You are prompted for a file name during this procedure.  The file name
     must be a valid DOS file name.  The program does not perform any check of
     the file name.

       If you enter an invalid file name, results are unpredictable.

       If you enter the file name of an existing file, the existing file is
     erased when you press F5.  No warning or advisory message is provided.

       The file name can include a drive specifier and path information.

       You MUST type in the extension.  The program will not provide one.
     Without the extension, some word processors may not access the file.  Many
     will not access the file as easily without the proper extension.  Check
     the documentation provided with your word processor and use the proper
     extension.

     2)  If working with floppies, insert the target diskette in the
     appropriate drive.

       As has been discussed elsewhere, it is a good idea to use a separate
     diskette for the purpose of exporting these soft copy versions of your
     cross references.

       Keep track of the space on your target diskette.  As has been discussed
     elsewhere, a full disk error is a fatal error.  You will get kicked out of
     the program.

       Minimum space required is 1,000 bytes.  To this add 10 bytes per word in
     the middle column, 80 bytes per phrase displayed (when the F2 key is
     pressed while the accessed heading is highlighted in the title block of
     the middle column), and 50 bytes per line of comments including all blank
     lines.



                                            49












       The maximum possible space consumed by a single heading is 170,000
     bytes.  But this is ridiculous and will probably NEVER occur.  Even if it
     does, it will fit on a single floppy if you use one that is less than half
     full.  As a typical example, the soft copy file created by this procedure
     for the provide cross references to the word 'rights' consumes
     approximately 4,000 bytes of disk space.

     3)  Access the desired heading.

     4)  Press the TAB key until the desired heading is highlighted in the
     title block of the middle column.

     5)  Press F5.  You are prompted for a file name.  Type in the file name
     with drive specifier, path information and extension as discussed
     previously.

     6)  Press ENTER.  The export should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F5 while the highlighting is in the left
     column.  This results in a 100,000 byte listing of the vocabulary list for
     the default version.  Press the ESC key to stop exporting of the
     vocabulary
     list.  The ESC key will NOT stop exporting of the accessed heading.

     Don't worry about swapping diskettes.  If you are working with diskettes
     and you forget to swap back to the index or program diskette, you are
     prompted for them when they are needed.  You are NOT prompted for the
     alternate diskette to export soft copy files of your cross references.
     You must do this on your own.






















                                            50






```
{% endraw %}

## MM6.DOC

{% raw %}
```






     MAIN MENU OPTION 6


     The Parameter Search (Words) function allows you to compile a list of
     words, the usage parameters of which conform to a set of values that you
     indicate on an interactive screen.  A description of the interactive
     screen, task-oriented (step-by-step) procedures for using the screen, and
     practical hints for using this function are included in this file.



     Description of the Interactive Screen


     When option 6 is selected from the Main Menu, the interactive screen for
     the parameter search (words) function appears.  On the top line of the
     screen is the title WORD PARAMETER SEARCH.

     On the third line of the screen is a field labeled 'Word List Selection'.
     This field allows you to select a vocabulary list.  When the screen is
     first displayed, the cursor is placed in this field, and the default value
     is 3.

     Beginning at approximately mid screen, 5 other areas for input are
     displayed.  Each of these five areas (described in the following material)
     has two fields to receive input related to a specific word usage
     parameter.  In each of these five areas, one field is for a maximum value,
     and the other field is for a minimum value to be used during the search.
     These maximum and minimum value determine what will be 'found' during the
     search.  Four of the areas require numeric input.  The fifth area accepts
     number(s), letter(s), or word(s).  When the screen is first displayed, the
     maximum and minimum occurring values for the selected version or portion
     are displayed in each of these five areas as the defaults.

     You can move the cursor among the fields using the TAB, up arrow, or down
     arrow keys.  You can enter data in each field using the typewriter keys,
     F9, DELETE, and the left or right arrow keys.

     Press ENTER when cursor is in the top field to select a vocabulary list.

     Press ENTER when the cursor is anywhere else on this screen to initiate
     specified search.

     Press ESC while cursor is on this screen to return to the Main Menu.



     





                                            51












     Parameter Field Descriptions


     Five areas on the screen contain two fields intended to receive your
     input.  The input for each field in an area depends on what you are
     looking for.  The value entered in the left field of any area can be equal
     to or less than the value entered in the right field of that area.  Words
     falling within the limits specified by your input will be displayed in a
     list on another screen.  You can return to this screen by pressing ESC.
     If no words fall within the limits you specify, an advisory message to
     that effect is displayed.  If a value in the left field of any area is
     greater than the value in the right field of the same area, no matches
     will be found.

     Each area is displayed on two lines.

     The top line has a number, a title and another number.  Each title
     specifies the word usage parameter that is entered in its area.  The left
     number indicates the minimum occurring value for a word usage parameter in
     the selected version or portion.  The right number indicates the maximum
     occurring value for a word usage parameter in the selected version or
     portion.  The numbers displayed on the top line of each area may vary for
     each version or portion.  They are determined during execution of Main
     Menu option 10.  The numbers on the top line of an area cannot be changed
     by the user.

     The second line contains a number, the symbols '<= target <=' and another
     number.  When the screen is first displayed, the numbers displayed on the
     second line are the same as the numbers displayed on the first line.  The
     left field for an area begins where the left number is displayed on the
     second line.  The right field for an area begins where the right number is
     displayed on the second line.  The second line can be read, 'The words
     that I am searching for (target) have a value for 'the title on first
     line' that is greater than or equal to the value in the left field and
     smaller than or equal to the value in the right field.  You can change
     the value in any field on the second line by accessing it (use the TAB
     key, up arrow or down arrow keys) and then typing in a desired value using
     the typewriter keys.



     Syllables Area

     The area with the title syllables is displayed on the 13th and 14th lines
     of the screen.  This area is used to specify the maximum and minimum
     number of syllables in the word(s) (if any) found during the specified
     search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


                                            52














     The minimum default value displayed on the top line is 0 because that is
     the number of syllables entered for punctuation marks.  The maximum
     default value depends on which version or portion you select.  The number
     1787 which occurs in Article VII with the signatures has 7 syllables.  If
     you select USACONST.DOC or ORIGINAL.DOC using Main Menu option 2, 7 is the
     maximum default value for the syllables area.  The maximum can be smaller
     for other versions or portions.

     To compile a list of 6 syllable words, you can enter 6 in both the left
     and right fields of the syllables area.  If you leave the values in the
     fields of the other areas at their defaults, you get all the six syllable
     words in the selected vocabulary list.

     To compile a list of 7 syllable words, enter 7 in both fields of the
     syllables area and leave the fields of the other areas at their default
     values.  When you press ENTER, you get the 'No matches found' advisory
     message.  Why is this?  The reason is that 1787 is not included in the
     default vocabulary list.

     To access a list containing 1787, press the TAB or up arrow key until the
     cursor is in the 'Word List Selection' field.  Press ENTER.  Select 4.
     Return to the parameter search screen and repeat the search.  The number
     1787 is 'found'.  The reason that 1787 is found is that it is included in
     the vocabulary list number 4 that you selected.  (This is not true if you
     select the BILLRITE.DOC or AMENDS.DOC portion using Main Menu option 2).

     The preceding exercise is intended to show the functioning of the
     syllables field.  The exercise demonstrates how the selected vocabulary
     list and selected version or portion interact with the syllables field.
     The 'Letters' area and the 'Occurrences' area behave in a similar fashion.
     The exercises are not repeated for them.  The 'Place' area and the 'Word'
     area are somewhat different.  See the corresponding paragraphs for further
     information about the 'Place' and 'Word' areas.

     For more information about vocabulary lists, see file MM13.DOC.  For more
     information about versions and portions, see file MM2.DOC.  For
     information about entering syllable data, see file MM11.DOC.



     Letters Area


     The area with the title letters is displayed on the 13th and 14th lines of
     the screen to the right of the syllables area.  This area is used to
     specify the maximum and minimum number of letters in the word(s) (if any)
     found during the specified search.




                                            53












     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     For the default version, the minimum default value displayed on the top
     line is 1 because that is the number of letters contained in the article
     adjective "A", the Roman Numerals "I" and "X", as well as the personal
     pronoun "I".  The maximum default value is 16 for the default version
     resulting from the use of 'constitutionally' and 'disqualification'.  The
     minimum and maximum default values may vary with the selected version or
     portion.

     To compile a list of 6 letter words, you can enter 6 in both the left and
     right fields of the letters area.  If you leave the values in the fields
     of the other areas at their defaults, you get all the six letter words in
     the selected vocabulary list.



     Occurrences Area


     The area with the title occurrences is displayed beneath the syllables
     area on the 17th and 18th lines of the screen.  This area is used to
     specify the maximum and minimum number of times that the word(s) (if any)
     found by a specified search are used in the selected version or portion.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     For the default version, the minimum default value displayed on the top
     line is 1 because numerous words are used once in that version.  The
     maximum default value is 700 for the default version because that is the
     number of times that the article adjective 'the' is used.  No other word
     occurs more times in the default version.  The minimum and maximum default
     values may vary with the selected version or portion.

     To compile a list of words that occur 6 times, you can enter 6 in both the
     left and right fields of the occurrences area.  If you leave the values in
     the fields of the other areas at their defaults, you get all the words in
     the selected vocabulary list that occur 6 times.



     Place Area


     The area with the title Place is displayed beneath the letters area on the
     17th and 18th lines of the screen.  This area is used to specify where in


                                            54












     the Constitution you want to search for the word(s) (if any) found during
     the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     The minimum default value displayed on the top line is always 1 because of
     the way place is defined.  The maximum default value is depends on the
     total number of words, numbers, and punctuation marks in the selected
     version or portion.  The maximum default value nearly always  varies with
     the selected version or portion.

     Place is defined as the location of a word, number or punctuation mark
     relative to the beginning of a selected version or portion.  Remember, a
     word is a group of alphanumeric characters between two blanks, a
     punctuation mark and a blank, or between a blank and a punctuation mark.
     To obtain place information for a particular occurrence of a word, number
     or punctuation mark, highlight the item of interest in a vocabulary list
     and press F2.  Highlight the occurrence of interest.  Place information is
     displayed at the top of the screen.

     To find what word occurs in the middle of the Constitution, divide the
     default maximum by 2 and enter the rounded off value in the left and right
     fields of the Place area.  If you leave the other areas at their defaults,
     the word displayed is the word in the exact middle of the Constitution.

     A more practical application of this field might be to confine your search
     to a particular Article, Section, or Amendment.  This would involve
     finding the place information for the beginning of two consecutive
     articles, sections, or amendments.  Enter the place information for the
     first item in the left field and enter the place information for the
     second item in the right field.  This allows you to perform your search
     with a given article, section, or amendment.

     Actually, you can specify any place value as beginning or end.  Valid
     input is NOT limited to beginnings of Articles, Section, or Amendments.



     Word Area


     The area with the title Word is displayed beneath the Occurrences area on
     the 21st and 22nd lines of the screen.  This area is used to specify the
     word(s) (if any) found during the specified search.  The words that will
     be found are based on an alphanumeric evaluation of your input.

     To see what is greater than what in alphanumeric sorts performed by this
     program, select Main Menu option 13 and then select option 4.  The


                                            55












     displayed list is in the order that is used by this search function to
     evaluate your input.  Generally speaking, blank comes first, followed by
     punctuation marks and numbers, then capital letters, then lower case
     letters.

     Also, to be found, a target word must be contained in the selected
     vocabulary list.  The default vocabulary list contains no Arabic numbers.
     Hence, if you look for the item with 7 syllables while 3 appears in the
     top field, you get 'No matches found'.  But there is a term with 7
     syllables.  To find it, move the cursor to the top field and press ENTER.
     Select 1 or 4 from the menu that appears.  Enter 7 in the left field of
     the syllable parameter.  Press ENTER.  Surprised?


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     The defaults on this screen are intended to be such that all words are
     included within the default ranges.  Hence, all blanks is always the
     default for the left field and lower case zz is always the default for the
     right field.

     One practical application of this area involves using it in conjunction
     with the place area.  You can specify a search within a given article,
     section, or amendment as previously described while the same word is
     entered in the left and right fields of the word area.  The resulting
     display tells you if the word occurs in the specified article, section, or
     amendment (get the place information by using F2 on the word ARTICLE,
     SECTION, or AMENDMENT in all upper case), and if so, how many times.



     Performing a Search


     To perform a search, proceed as follows:

     1)  Determine the appropriate values to specify your search, including
     which vocabulary list.

     2)  Select 6 from the Main Menu.

     3)  Select the appropriate vocabulary list if it is other than the one
     indicated in the 'Word List Selection' field.

     4)  Type the previously determined values in the fields of the appropriate
     areas.

     5)  With the cursor in any field except the 'Word List Selection' field,
     press ENTER.


                                            56













         After a delay, you either get a list of words that fit your input, or
     you get an advisory message, 'No matches found'.

         If the 'No Matches found' message appears, press ENTER to return to
     the interactive screen.

         If the list of words 'found' requires more than one screen to display,
     scroll through the list using PG UP, PG DN, HOME, or END keys.  You cannot
     access phrases or text using F2 and F3.

         You can print the list using the F7 key.

         You can export the list to disk using the F5 key.

         Using the screen print function of your computer, you can print a hard
     copy of the interactive screen title WORD PARAMETER SEARCH with your
     input.  F7 won't print that screen.  F5 won't export it to disk.



































                                            57






```
{% endraw %}

## MM7.DOC

{% raw %}
```






     MAIN MENU OPTION 7


     The Parameter Search (Clauses) function allows you to compile a list of
     clauses that conform to a set of values that you indicate on an
     interactive screen.  A description of the interactive screen, task-
     oriented (step-by-step) procedures for using the screen, and practical
     hints for using this function are included in this file.



     Description of the Interactive Screen


     When 7 is selected from the Main Menu, the interactive screen for the
     parameter search (words) function appears.  On the top line of the screen
     is the title CLAUSE PARAMETER SEARCH.

     Beginning at approximately mid screen, 4 areas for input are displayed.
     Each of these four areas (described in the following material) has two
     fields to receive input related to a specific  parameter of clause
     complexity.  In each of these four areas, one field is for a maximum
     value, and the other field is for a minimum value to be used during the
     search.  These maximum and minimum value determine what clauses will be
     found during the search.  The four areas require numeric input.  When the
     screen is first displayed, the maximum and minimum occurring values for
     the selected version or portion are displayed in each of these four areas
     as the defaults.

     You can move the cursor among the fields using the TAB, up arrow, or down
     arrow keys.  You can enter data in each field using the typewriter keys,
     F9, DELETE, and the left or right arrow keys.

     Press ENTER when the cursor is anywhere on this screen to initiate
     specified search.

     Press ESC while cursor is on this screen to return to the Main Menu.



     Parameter Field Descriptions


     Four areas on the screen contain two fields intended to receive your
     input.  The input for each field in an area depends on what you are
     looking for.  The value entered in the left field of any area can be equal
     to or less than the value entered in the right field of that area.
     Clauses falling within the limits specified by your input will be
     displayed one at a time on another screen.  You can return to this screen
     by pressing ESC.  If no clauses fall within the limits you specify, an
     advisory message to that effect is displayed.  If a value in the left


                                            58












     field of any area is greater than the value in the right field of the same
     area, no matches will be found.

     Each area is displayed on two lines.

     The top line has a number, a title and another number.  Each title
     specifies the clause complexity parameter that is entered in its area.
     The left number indicates the minimum occurring value for a clause
     complexity parameter in the selected version or portion.  The right number
     indicates the maximum occurring value for a clause complexity parameter in
     the selected version or portion.  The numbers displayed on the top line of
     each area may vary for each version or portion.  They are determined
     during execution of Main Menu option 10.  The numbers on the top line of
     an area cannot be changed by the user.

     The second line contains a number, the symbols '<= target <=' and another
     number.  When the screen is first displayed, the numbers displayed on the
     second line are the same as the numbers displayed on the first line.  The
     left field for an area begins where the left number is displayed on the
     second line.  The right field for an area begins where the right number is
     displayed on the second line.  The second line can be read, 'The clauses
     that I am searching for (target) have a value for the 'title on first
     line' that is greater than or equal to the value in the left field and
     smaller than or equal to the value in the right field.'  You can change
     the value in any field on the second line by accessing it (use the TAB
     key, up arrow or down arrow keys) and then typing in a desired value using
     the typewriter keys.



     Syllables Area


     The area with the title syllables is displayed on the 13th and 14th lines
     of the screen.  This area is used to specify the maximum and minimum
     number of syllables in the clause(s) (if any) found during the specified
     search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     The minimum default value displayed on the top line is 0 because of the
     double dash between the semi colon and the quote mark that precedes the
     President's inaugural oath.  The maximum default value depends on which
     version or portion you select.  Sixty-six is the maximum number of
     syllables in a clause for the default version.  The maximum can be smaller
     for other versions or portions.

     To compile a series of clauses with a total 6 syllable words, you can


                                            59












     enter 6 in both the left and right fields of the syllables area.  If you
     leave the values in the fields of the other areas at their defaults, you
     get all the six syllable clauses in the selected version or portion.



     Letters Area


     The area with the title letters is displayed on the 13th and 14th lines of
     the screen to the right of the syllables area.  This area is used to
     specify the maximum and minimum number of letters in the clause(s) (if
     any) found during the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     For the default version, the minimum default value displayed on the top
     line is 3 because that is the number of letters contained in the
     conjunction 'and' that occurs between two commas.  The maximum default
     value is 222 for the default version resulting from a phrase in the 22nd
     amendment.  The minimum and maximum default values may vary with the
     selected version or portion.

     To compile a list of clauses that consist of a total of 6 letters, you can
     enter 6 in both the left and right fields of the letters area.  If you
     leave the values in the fields of the other areas at their defaults, you
     get all the six letter clauses in the selected version or portion.



     Words Area


     The area with the title words is displayed beneath the syllables area on
     the 17th and 18th lines of the screen.  This area is used to specify the
     maximum and minimum number of words contained in clause(s) (if any) found
     by a specified search in the selected version or portion.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     For the default version, the minimum default value displayed on the top
     line is 1 because of the use of the conjunction 'and' between two commas.
     The maximum default value is 65 for the default version because of a
     phrase in the 22nd amendment.  No other phrase is longer  in the default
     version.  The minimum and maximum default values may vary with the


                                            60












     selected version or portion.

     To compile a list of clauses that contain 6 words, you can enter 6 in both
     the left and right fields of the words area.  If you leave the values in
     the fields of the other areas at their defaults, you get all the 6-word
     clauses in the selected version or portion.



     Place Area


     The area with the title Place is displayed beneath the letters area on the
     17th and 18th lines of the screen.  This area is used to specify where in
     the Constitution you want to search for the clause(s) (if any) found
     during the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     The minimum default value displayed on the top line is always 1 because of
     the way place is defined.  The maximum default value is depends on the
     total number of words, numbers, and punctuation marks in the selected
     version or portion.  The maximum default value nearly always  varies with
     the selected version or portion.

     Place is defined as the location of a word, number or punctuation mark
     relative to the beginning of a selected version or portion.  Remember, a
     clause is a group of words and numbers between two punctuation marks,
     between a carriage return (a blank line) and a punctuation mark or between
     a punctuation mark and a carriage return.  To obtain place information for
     a particular occurrence of a word, number or punctuation mark, highlight
     the item of interest in a vocabulary list and press F2.  Highlight the
     occurrence of interest.  Place information is displayed at the top of the
     screen.

     To find what phrase occurs in the middle of the Constitution, divide the
     default maximum by 2 and enter the rounded off value in the left and right
     fields of the Place area.  If you leave the other areas at their defaults,
     the phrase displayed is the phrase in the exact middle of the
     Constitution.

     A more practical application of this field would involve finding the place
     information for the beginning of two consecutive articles, sections, or
     amendments.  Enter the place information for the first item in the left
     field and enter the place information for the second item in the right
     field.  This allows you to perform your search within a given article,
     section, or amendment.



                                            61














     Performing a Search


     To perform a search, proceed as follows:

     1)  Determine the appropriate values to specify your search.

     2)  Select 7 from the Main Menu.

     3)  Type the previously determined values in the fields of the appropriate
     areas.

     4)  Press ENTER.

         After a delay, you either get a list of clauses that fit your input,
     or you get an advisory message, 'No matches found'.

         If the 'No Matches found' message appears, press ENTER to return to
     the interactive screen.

         Scroll through the list one at a time using any key except ESC. You
     cannot access phrases or text using F2 and F3.

         You can print the list using the F7 key.

         You can export the list to disk using the F5 key.

         Using the screen print function of your computer, you can print a hard
     copy of the interactive screen entitled CLAUSE PARAMETER SEARCH with your
     input.  F7 won't print that screen.  F5 won't export it to disk. 





















                                            62






```
{% endraw %}

## MM8.DOC

{% raw %}
```






     MAIN MENU OPTION 8


     Main Menu option 8 allows you to review reports automatically generated
     during execution of Main Menu option 10.  It also allows you to regenerate
     those reports manually following update of syllable information using Main
     Menu option 11.  This file provides information needed to use Main Menu
     option 8. 



     The Secondary Menu

     When you select Main Menu option 8, a secondary menu consisting of 5
     options numbered 0 - 4 appears.  Options 1 - 3 display reports.  Option 4
     regenerates the reports.  Option 0 returns you to the Main Menu.



     The Reports


     Each of the three reports focuses on a single lexicographic statistic.
     The reports 'read' themselves to you.  The wording is not polished.  You
     can export a report to disk and improve the text using your word
     processor.  The F5 key accomplishes this.  You can print the report out on
     your printer using the F7 key.  If a report occupies more than one screen,
     use the HOME, END, PG UP, and PG DN keys to scroll through it.  When
     finished with a report, press ESC to return to the secondary menu.



     Secondary Menu Option 4


     The execution of this function is automatic, once it is selected.
     Diskette users may be prompted to swap diskettes.  If so, place the index
     diskette in the appropriate drive.  The swap prompt is repeated until the
     expected diskette is placed in the appropriate drive.  When the function
     is completed, you are returned to the secondary menu.  You can review
     reports or return to the Main Menu.












                                            63






```
{% endraw %}

## MM9.DOC

{% raw %}
```






     MAIN MENU OPTION 9


     Main Menu option 9 allows you to review reports automatically generated
     during execution of Main Menu option 10.  This file provides information
     needed to use Main Menu option 9. 



     The Secondary Menu

     When you select Main Menu option 9, a secondary menu consisting of 4
     options numbered 0 - 3 appears.  Options 1 - 3 display reports.  Option 0
     returns you to the Main Menu.



     The Reports


     Each of the three reports focuses on a single lexicographic statistic.
     The reports 'read' themselves to you.  The wording is not polished.  You
     can export a report to disk and improve the text using your word
     processor.  The F5 key accomplishes this.  You can print the report out on
     your printer using the F7 key.  If a report occupies more than one screen,
     use the HOME, END, PG UP, and PG DN keys to scroll through it.  When
     finished with a report, press ESC to return to the secondary menu.


























                                            64






```
{% endraw %}

## PREFACE.DOC

{% raw %}
```






     INTRODUCTION


     NOTE:  Most introductory materials are available on-screen in the TCN
     program.  Help is available from the F1 function key.  Use the F2 or F3
     keys at the Main Menu.  Or operate Main Menu option 14 and use function
     keys F2 through F6 to obtain other introductory information about this
     package.



     This file introduces a package of materials known as The CONSTITUTION
     Notebook Program.

     It provides information about the program, the user documentation, and the
     other materials included on the diskettes with The CONSTITUTION Notebook
     Program.

     You don't have to be a computer expert to install or operate The
     CONSTITUTION Notebook Program.  However, knowledge of general DOS file
     name and path conventions is helpful.  Refer to the documentation that was
     included with your personal computer for information on this topic.



     GENERAL PROGRAM DESCRIPTION

     The materials included with The CONSTITUTION Notebook Program facilitate
     an individual study of The United States Constitution.

     The program is helpful in the study of questions that hinge on word
     usage.

     Two of the Main Menu options allow you to take notes on the United
     States Constitution in an interactive manner.  Your notes consist of a
     heading, a list of related words, a compilation of related phrases, and a
     set of comments.  Your heading and comments are limited only by your
     imagination.  However, only words that appear in the Constitution can be
     placed in the list of related words.  Also, only phrases that appear in
     the Constitution can be placed in the compilation of related phrases.
     The restriction on words and phrases is deliberate.  This restriction
     provides a measure of conciseness and objectivity to notes produced using
     this program.

     When you generate such notes using this program, the program
     automatically saves them on diskette for review, and update.  You can
     print your notes using your printer.  You can also save your notes in a
     file that can be used by many common word processors.  With your notes in
     such a file, you can embellish and expand your comments or you can
     enhance the typestyles and format of the notes.



                                            i












     Lexicography statistics compiled by the program can be used to determine
     the relative simplicity or complexity of various parts of the US
     Constitution.

     More information about capabilities of this program are contained in this
     file under the heading DETAILED PROGRAM DESCRIPTION.


     PROGRAM LIMITATIONS

     This parse engine included with this program can accommodate no more than
     12 additional (39 total) amendments to the US Constitution.  No more than
     2,000 additional words can be accommodated.  There is a limit of 30
     versions or portions.

          Mouse pointer interface is not supported.

          Some features might not work on non-standard keyboards.

          The numeric key pad won't work for entering numbers on many
          computers.  These keys control scrolling and cursor movement.  Use
          the top row of typewriter keys to enter numbers.

          The CAPS lock key or the NUM LOCK key may disable scroll keys when
          enabled.  If scroll keys don't work, toggle the setting of the CAPS
          lock or NUM LOCK functions.



     Extent of Error Recovery

     A reasonable effort has been made to prevent your being ejected from the
     program when mistakes are made during ordinary operator input.  However,
     the program is not idiot-proof.  If you are reviewing the provided
     materials or materials generated by you, getting kicked out of the
     program means the inconvenience of a 3 to 8 minute start up.  If you are
     generating cross references or adding comments, getting kicked out of the
     program means the possible loss of considerable effort in addition to the
     3 to 8 minute start up.  To avoid this, take your time while learning the
     system.  Type carefully to ensure you strike the intended key and review
     input carefully before pressing ENTER.  Save often when using Main Menu
     options 4, 5, or 11.  (The other options either do not require files to
     be saved or else they do it automatically.  Also, do not confuse the file
     save function of Xport, the F5 function key, with the kind of save
     described here.)  To save, exit from the option to the Main Menu.  The
     pertinent files are saved before the Main Menu is displayed.  Then return
     to the option and continue working.






                                            ii













     KEYBOARD

     General.  The typewriter keys on your keyboard work as per usual.
     Depending on the function or task being performed, some inappropriate keys
     are ignored.  For example, you can't type a comma in a filename.

          If your keyboard has cursor movement keys (up arrow, down arrow, left
          arrow, and right arrow) separate from the numeric key pad and they
          don't work, try using the 8, 2, 4, and 6 keys on the numeric key pad
          instead.

          The BREAK, CTRL, ALT, PRINT, F9, F11 and F12 keys have no function
          for this program.  The TCN program ignores them.

          ESC, ENTER, TAB, INSERT, DELETE, BACK SPACE, HOME, END, PG UP, PG DN,
          and the up, down, left, and right arrow keys do things that they are
          often used to do.  Function keys F1 through F10 have mnemonics
          displayed at the bottom of the screen to remind you what they do.
          More information is contained in the file FUNCKEYS.DOC.

          The SHIFT TAB combination is not recognized by the program.

          The \ (backslash) key doesn't perform as expected on some keyboards.
          If you have trouble with it,

               1.  Press and hold the ALT key.

               2.  On the numeric keypad (not the typewriter keys), type a 9
               and release the 9.

               3.  On the numeric keypad (not the typewriter keys), type a 2
               and release the 2.  

               4.  Release the ALT key.

               NOTE:  You may have to toggle the NUM LOCK setting to make this
               work.

               This is the only use for the ALT key and the only time that you
               should type numbers on the numeric keypad while using this
               program.


     PARAMETER SEARCH PROCEDURES

     Generally, the concept for parameter search is similar for words and
     clauses, Main Menu options 6 and 7, respectively.  When the screen first
     appears a set of parameter fields is displayed with defaults set to
     maximum and minimum values that occur in the selected version or portion.
     The  idea is to narrow the search parameters to produce a compilation that


                                            iii












     contains a list of words or phrases of interest.  The procedures to do
     this are contained in files MM6.DOC and MM7.DOC for words and clauses,
     respectively.



     DETAILED PROGRAM DESCRIPTION

     The program is stored on diskette 1, the Program Diskette, in the file
     TCN.EXE.

     The program supports an individual study of the United States Constitution
     by providing the following capabilities:

     I.  Parse text files containing US Constitution which produces:

         A.  A replication of the input file that can be accessed by the
             other features of this program, but which cannot be edited.
             Input file is not altered.

         B.  Exhaustive index of every word.

         C.  Lexicography data base including:

             1.  Gross word count.

             2.  Individual word count.

             3.  Individual word length (number of letters)

             4.  Lexicon that accepts manual input of syllable data for 
                 each word.

             5.  Profiles of word data in 2., 3., and 4..

             6.  Gross clause count.

             7.  Word count of each clause.

             8.  Total characters in each clause (minus blanks).

             9.  Total syllables in each clause (based on 4., above).

             10. Profiles of clause data in 7., 8., and 9..

             11. Nine unique selectable vocabulary lists.

     II.  Access to Lexicography Data Base for Review, Update, Output

     



                                            iv












     III. A Four-Level Data Hierarchy 

     Allows for Organization of Results Produced by Notebook Functions
     Described in Item IV..  In the outline which follows, the top tier is
     represented by the capital letter A.  The second tier is represented by
     the Arabic numeral 1.  The third tier is represented by lower case Roman
     numerals i and ii.  The fourth tier is represented by the lower case
     letters a, b, c, and d.

     A.  Version or portion

     Created using Main Menu option 10, accessed using Main Menu option 2.

         1.  Seminar

         Created and accessed using Main Menu option 3.

              i). Subject

              Created and accessed using Main Menu option 4.

                  a).  Heading

                  Up to 60 characters that names anything you can imagine
                  typed in on the primary subjects screen.

                  b).  List of related words

                  Generated by pressing ENTER while a word is highlighted in
                  the vocabulary list on the secondary subjects screen, or when
                  F2 is pressed while a word in the vocabulary list (again, on
                  the secondary subjects screen) is highlighted followed by
                  ENTER being pressed while a desired phrase is highlighted.

                  c).  Compilation of related phrases

                  Compilation of related phrases is generated by the same
                  keystrokes that generate the list of related words.

                  d).  Comments

                  Generated by manually typing in your thoughts while the
                  cursor is in the third column of the secondary subjects
                  screen.

          







                                            v












             ii). Synonym

             Created and accessed using Main Menu option 5.

                 a).  Heading

                 Can only be a word in the vocabulary list for the selected
                 version or portion.  Generated by highlighting a desired word
                 in the vocabulary list and then pressing ENTER.

                 b).  Word list
       
                 Generated by making a heading active and pressing ENTER while
                 a word is highlighted in the vocabulary list, or when F2 is
                 pressed while a word in the vocabulary list is highlighted
                 followed by ENTER being pressed while a desired phrase is
                 highlighted.

                 c).  Compilation of related phrases

                 Compilation of related phrases is generated by the same
                 keystrokes that generate the list of related words.

                 d).  Comments

                 Generated by manually typing in your thoughts while the cursor
                 is in the third column of the synonym screen.


     As an example of how this hierarchy can be used to some advantage, have a
     supreme court case as a title for a seminar or as a subject.  Use the
     subordinate levels in the hierarchy to compile your research findings.
     Or, use a phrase in the Constitution as the title of a subject or seminar.
     If you do this, you can list supreme court cases in the comments column to
     correlate the phrase with rulings.

     Generally, the less information is related to a heading, the lower you can
     place it in the hierarchy.  Conversely, the more information related to a
     heading, the higher you should place it in the hierarchy.  If you have a
     great deal of information to go under one heading, you could even devote
     an entire version or portion to it.


     IV.  Notebook Functions

         A.  Access output described in I.A. for review.

         B.  Create Topic Heading

         C.  Access of Topic Headings for Review, Update, Deletion, Output



                                           vi












         D.  Compile Index of Phrases Related to Accessed Topic

             NOTE:  User highlights word or phrase, then presses ENTER or
                    the F4 function key to achieve following.  Program
                    automatically extracts pertinent indices from
                    exhaustive output described in I.B..

             1.  Index (under accessed topic) all phrases containing key
                 word.

             2.  Index (under accessed topic) specific occurrence(s) of
                 phrases containing key word.

             3.  Delete (from accessed topic) indices of all phrases
                 containing key word.

             4.  Delete (from accessed topic) index of specific
                 occurrence(s) of phrase containing key word.

         E.  Edit User Comments Related to Accessed Topic

             NOTE:  User TABs into 'Comments' column and blazes away at the
                    keyboard to type in up to approximately 1,000 words of
                    comments related to accessed topic.



     TEXT OF THE UNITED STATES CONSTITUTION IN ASCII FILES

     The package includes the text of the United States Constitution in ASCII
     files.  These files are in a directory named RIGHTS.  There are four files
     that contain this text.  One file contains the entire Constitution with
     all twenty-seven amendments.  The other three files were produced by
     breaking up this file.  More information about these files can be found in
     the file USATEXT.DOC.

     Also included in the RIGHTS directory are files containing the text of 5
     other significant historical documents related to individual rights.















                                           vii






```
{% endraw %}

## USACONST.DOC

{% raw %}
```
CONSTITUTION OF THE UNITED STATES

We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.



ARTICLE I


SECTION 1.  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.


SECTION 2.  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.

No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen.

Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three-fifths of all other Persons.  The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct.  The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative;  and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three.

When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies.

The House of Representatives shall chuse their Speaker and other Officers;  and shall have the sole Power of Impeachment.


SECTION 3.  The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years;  and each Senator shall have one Vote.

Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes.  The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one-third may be chosen every second Year;  and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies.

No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen.

The Vice-President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided.

The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice-President, or when he shall exercise the Office of President of the United States.

The Senate shall have the sole Power to try all Impeachments.  When sitting for that Purpose, they shall be on Oath or Affirmation.  When the President of the United States is tried, the Chief Justice shall preside:  And no Person shall be convicted without the Concurrence of two-thirds of the Members present.

Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States:  but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.


SECTION 4.  The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof;  but the Congress may at any time by Law make or alter such Regulations, except as to the Places of chusing Senators.

The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day.


SECTION 5.  Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business;  but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide.

Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two-thirds, expel a Member.

Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy;  and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one-fifth of those Present, be entered on the Journal.

Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting.


SECTION 6.  The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States.  They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same;  and for any Speech or Debate in either House, they shall not be questioned in any other Place.

No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office under the Authority of the United States, which shall have been created, or the Emoluments whereof shall have been encreased during such time;  and no Person holding any Office under the United States, shall be a Member of either House during his Continuance in Office.


SECTION 7.  All Bills for raising Revenue shall originate in the House of Representatives;  but the Senate may propose or concur with Amendments as on other Bills.

Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States;  If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it.  If after such Reconsideration two-thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two-thirds of that House, it shall become a Law.  But in all such Cases the Votes of both Houses shall be determined by yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively.  If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law.

Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States;  and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two-thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill.


SECTION 8.  The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States;  but all Duties, Imposts and Excises shall be uniform throughout the United States;

To borrow Money on the credit of the United States;

To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;

To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States;

To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;

To provide for the Punishment of counterfeiting the Securities and current Coin of the United States;

To establish Post Offices and post Roads;

To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries;

To constitute Tribunals inferior to the supreme Court;

To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations;

To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water;

To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years;

To provide and maintain a Navy;

To make Rules for the Government and Regulation of the land and naval Forces;

To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions;

To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress;

To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings; -- And

To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.


SECTION 9.  The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person.

The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it.

No Bill of Attainder or ex post facto Law shall be passed.

No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or Enumeration herein before directed to be taken.

No Tax or Duty shall be laid on Articles exported from any State.

No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another:  nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another.

No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law;  and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time.

No Title of Nobility shall be granted by the United States:  And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.


SECTION 10.  No State shall enter into any Treaty, Alliance, or Confederation;  grant Letters of Marque and Reprisal;  coin Money;  emit Bills of Credit;  make any Thing but gold and silver Coin a Tender in Payment of Debts;  pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility.

No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing its inspection Laws:  and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States;  and all such Laws shall be subject to the Revision and Controul of the Congress.

No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.



ARTICLE II


SECTION 1.  The executive Power shall be vested in a President of the United States of America.  He shall hold his Office during the Term of four Years, and, together with the Vice-President, chosen for the same Term, be elected, as follows

Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress:  but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector.

The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves.  And they shall make a List of all the Persons voted for, and of the Number of Votes for each;  which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate.  The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted.  The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed;  and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President;  and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President.  But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote;  A quorum for this Purpose shall consist of a Member or Members from two-thirds of the States, and a Majority of all the States shall be necessary to a Choice.  In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice-President.  But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice-President.

The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes;  which Day shall be the same throughout the United States.

No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President;  neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States.

In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice-President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice-President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected.

The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be encreased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them.

Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation: -- "I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States."


SECTION 2.  The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States;  he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment.

He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two-thirds of the Senators present concur;  and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law;  but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments.

The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.


SECTION 3.  He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient;  he may, on extraordinary Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect to the Time of Adjournment, he may adjourn them to such Time as he shall think proper;  he shall receive Ambassadors and other public Ministers;  he shall take Care that the Laws be faithfully executed, and shall Commission all the Officers of the United States.


SECTION 4.  The President, Vice-President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.



ARTICLE III


SECTION 1.  The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish.  The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.


SECTION 2.  The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority; -- to all Cases affecting Ambassadors, other public Ministers and Consuls; -- to all Cases of admiralty and maritime Jurisdiction; -- to Controversies to which the United States shall be a Party; -- to Controversies between two or more States;  between a State and Citizens of another State; -- between Citizens of different States; -- between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects.

In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction.  In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make.

The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury;  and such Trial shall be held in the State where the said Crimes shall have been committed;  but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.


SECTION 3.  Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort.  No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.

The Congress shall have Power to declare the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except during the Life of the Person attainted.



ARTICLE IV


SECTION 1.  Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.  And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.


SECTION 2.  The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.

A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be found in another State, shall on Demand of the executive Authority of the State from which he fled, be delivered up, to be removed to the State having Jurisdiction of the Crime.

No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due.


SECTION 3.  New States may be admitted by the Congress into this Union;  but no new State shall be formed or erected within the Jurisdiction of any other State;  nor any State be formed by the Junction of two or more States, or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress.

The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States;  and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State.


SECTION 4.  The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion;  and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence.



ARTICLE V

The Congress, whenever two-thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two-thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three-fourths of the several States, or by Conventions in three-fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress;  Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article;  and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.



ARTICLE VI

All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation.

This Constitution, and the Laws of the United States which shall be made in Pursuance thereof;  and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land;  and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the contrary notwithstanding.

The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution;  but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.



ARTICLE VII

The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.

Done in Convention by the Unanimous Consent of the States present the Seventeenth Day of September in the year of our Lord one thousand seven hundred and Eighty seven and of the Independence of the United States of America the Twelfth IN WITNESS whereof We have hereunto subscribed our Names,

                                Go.  Washington - Presidt. and deputy from Virginia


New Hampshire                   John Langdon                                                           Nicholas Gilman

Massachusetts                   Nathaniel Gorham                                                       Rufus King

Connecticut                     Wm: Saml. Johnson                                                      Roger Sherman

New York                        Alexander Hamilton

New Jersey                      Wil: Livingston                                                        David Brearley                                                         Wm. Paterson.                                                          Jona: Dayton

Pennsylvania                    B Franklin                                                             Thomas Mifflin                                                         Robt Morris                                                            Geo. Clymer                                                            Thos FitzSimons                                                        Jared Ingersoll                                                        James Wilson                                                           Gouv Morris

Delaware                        Geo: Read                                                              Gunning Bedford jun                                                    John Dickinson                                                         Richard Bassett                                                        Jaco: Broom

Maryland                        James McHenry                                                          Dan of St Thos. Jenifer                                                 Danl Carroll

Virginia                        John Blair --                                                            James Madison Jr.

North Carolina                  Wm. Blount                                                             Richd. Dobbs Spaight.                                                  Hu Williamson

South Carolina                  J. Rutledge                                                            Charles Cotesworth Pinckney                                            Charles Pinckney                                                       Pierce Butler

Georgia                         William Few                                                            Abr Baldwin

Attest William Jackson Secretary


        In Convention Monday, September 17th. 1787.

                        Present
                      The States of

New Hampshire, Massachusetts, Connecticut, Mr. Hamilton from New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia.


Resolved,

That the preceding Constitution be laid before the United States in Congress assembled, and that it is the Opinion of this Convention, that it should afterwards be submitted to a Convention of Delegates, chosen in each State by the People thereof, under the Recommendation of its Legislature, for their Assent and Ratification; and that each Convention assenting to, and ratifying the Same, should give Notice thereof to the United States in Congress assembled.

Resolved, That it is the Opinion of this Convention, that as soon as the Conventions of nine States shall have ratified this Constitution, the United States in Congress assembled should fix a Day on which Electors should be appointed by the States which shall have ratified the same, and a Day on which the Electors should assemble to vote for the President, and the Time and Place for commencing Proceedings under this Constitution.  That after such Publication the Electors should be appointed, and the Senators and Representatives elected:  That the Electors should meet on the Day fixed for the Election of the President, and should transmit their votes certified signed, sealed and directed, as the Constitution requires, to the Secretary of the United States in Congress assembled, that the Senators and Representatives should convene at the Time and Place assigned; that the Senators should appoint a President of the Senate, for the sole Purpose of receiving, opening and counting the Votes for President; and, that after he shall be chosen, the Congress, together with the President should, without Delay, proceed to execute this Constitution.

By the Unanimous Order of the Convention.
                                                                                                                 Go: Washington Presidt.
W. Jackson Secretary.



Congress of the United States

begun and held at the City of New-York, on Wednesday the fourth of March, one thousand seven hundred and eighty-nine

THE Conventions of a number of the States, having at the time of their adopting the Constitution, expressed a desire, in order to prevent misconstruction or abuse of its powers, that further declaratory and restrictive clauses should be added:  And as extending the ground of public confidence in the Government, will best ensure the beneficent ends of its institution:

RESOLVED by the Senate and House of Representatives of the United States of America, in Congress assembled, two thirds of both Houses concurring, that the following Articles be proposed to the Legislatures of the several States, as Amendments to the Constitution of the United States, all or any of which Articles, when ratified by three fourths of the said Legislatures, to be valid to all intents and purposes, as part of the said Constitution; vizt.

ARTICLES in addition to, and Amendment of the Constitution of the United States of America, proposed by Congress, and ratified by the Legislatures of the several States, pursuant to the fifth Article of the original Constitution. . . .

FREDERICK AUGUSTUS MUHLENBERG
Speaker of the House of Representatives.
JOHN ADAMS, Vice-President of the United States, and President of the Senate.

ATTEST,
JOHN BECKLEY, Clerk of the House of Representatives.
SAM. A. OTIS Secretary of the Senate.


AMENDMENTS TO THE CONSTITUTION OF THE UNITED STATES OF AMERICA



AMENDMENT I

Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof;  or abridging the freedom of speech, or of the press, or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.



AMENDMENT II

A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.



AMENDMENT III

No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.



AMENDMENT IV

The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.



AMENDMENT V

No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger;  nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb, nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law;  nor shall private property be taken for public use without just compensation.



AMENDMENT VI

In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation;  to be confronted with the witnesses against him;  to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.



AMENDMENT VII

In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.



AMENDMENT VIII

Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.



AMENDMENT IX

The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.



AMENDMENT X

The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.



AMENDMENT XI

The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.



AMENDMENT XII

The Electors shall meet in their respective States and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same State with themselves;  they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the Government of the United States, directed to the President of the Senate;  the President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted;  The person having the greatest number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed;  and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President.  But in choosing the President, the votes shall be taken by States, the representation from each State having one vote;  a quorum for this purpose shall consist of a member or members from two-thirds of the States, and a majority of all the States shall be necessary to a choice.  And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon them, before the fourth day of March next following, then the Vice-President shall act as President, as in the case of the death or other constitutional disability of the President.  The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President;  a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice.  But no person constitutionally ineligible to the office of the President shall be eligible to that of Vice-President of the United States.



AMENDMENT XIII


SECTION 1.  Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States or any place subject to their jurisdiction.


SECTION 2.  Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XIV


SECTION 1.  All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.  No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States;  nor shall any State deprive any person of life, liberty, or property, without due process of law;  nor deny to any person within its jurisdiction the equal protection of the laws.


SECTION 2.  Representatives shall be apportioned among the several States according to their respective numbers, counting the whole number of persons in each State, excluding Indians not taxed.  But when the right to vote at any election for the choice of Electors for President and Vice-President of the United States, Representatives in Congress, the executive and judicial officers of a State, or the members of the Legislature thereof, is denied to any of the male inhabitants of such State, being twenty-one years of age, and citizens of the United States, or in any way abridged, except for participation in rebellion, or other crime, the basis or representation therein shall be reduced in the proportion which the number of such male citizens shall bear to the whole number of male citizens twenty-one years of age in such State.


SECTION 3.  No person shall be a Senator or Representative in Congress, or Elector of President and Vice-President, or hold any office, civil or military, under the United States, or under any State, who, having previously taken an oath, as a member of Congress, or as an officer of the United States, or as a member of any State Legislature, or as an executive or judicial officer of any State, to support the Constitution of the United States, shall have engaged in insurrection or rebellion against the same, or given aid or comfort to the enemies thereof.  But Congress may by a vote of two-thirds of each House, remove such disability.


SECTION 4.  The validity of the public debt of the United States, authorized by law, including debts incurred for payment of pensions and bounties for services in suppressing insurrection or rebellion, shall not be questioned.  But neither the United States nor any State shall assume or pay any debt or obligation incurred in aid of insurrection or rebellion against the United States, or any claim for the loss or emancipation of any slave;  but all such debts, obligations and claims shall be held illegal and void.


SECTION 5.  The Congress shall have power to enforce, by appropriate legislation, the provisions of this article.



AMENDMENT XV


SECTION 1.  The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XVI

The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.



AMENDMENT XVII

The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years;  and each Senator shall have one vote.  The electors in each State shall have the qualifications requisite for electors of the most numerous branch of the State Legislatures.

When vacancies happen in the representation of any State in the Senate, the executive authority of such State shall issue writs of election to fill such vacancies:  Provided, That the Legislature of any State may empower the Executive thereof to make temporary appointments until the people fill the vacancies by election as the Legislature may direct.

This amendment shall not be so construed as to affect the election or term of any Senator chosen before it becomes valid as part of the Constitution.



AMENDMENT XVIII


SECTION 1.  After one year from the ratification of this article  the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.


SECTION 2.  The Congress and the several States shall have concurrent power to enforce this article by appropriate legislation.


SECTION 3.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.



AMENDMENT XIX

The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.

Congress shall have power to enforce this Article by appropriate legislation.



AMENDMENT XX


SECTION 1.  The terms of the President and Vice-President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3rd day of January, of the years in which such terms would have ended if this article had not been ratified;  and the terms of their successors shall then begin.


SECTION 2.  The Congress shall assemble at least once in every year, and such meeting shall begin at noon on the 3rd day of January, unless they shall by law appoint a different day.


SECTION 3.  If, at the time fixed for the beginning of the term of the President, the President elect shall have died, the Vice-President elect shall become President.  If a President shall not have been chosen before the the time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice-President elect shall act as President until a President shall have qualified;  and the Congress may by law provide for the case wherein neither a President elect nor a Vice-President elect shall have qualified, declaring who shall then act as President, or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or Vice-President shall have qualified.


SECTION 4.  The Congress may by law provide for the case of the death of any of the persons from whom the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for the case of the death of any of the persons from whom the Senate may choose a Vice-President whenever the right of choice shall have devolved upon them.


SECTION 5.  Sections 1 and 2 shall take effect on the 15th day of October following the ratification of this article.


SECTION 6.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the Legislatures of three-fourths of the several States within seven years from the date of its submission.



AMENDMENT XXI


SECTION 1.  The eighteenth article of amendment to the Constitution of the United States is hereby repealed.


SECTION 2.  The transportation or importation into any State, Territory, or Possession of the United States for delivery or use therein of intoxicating liquors, in violation of the laws thereof, is hereby prohibited.


SECTION 3.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by conventions in the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.



AMENDMENT XXII


SECTION 1.  No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once.  But this article shall not apply to any person holding the office of President when this Article was proposed by the Congress, and shall not prevent any person who may be holding the office of President, or acting as President, during the term within which this Article becomes operative from holding the office of President or acting as President during the remainder of such term.


SECTION 2.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the Legislatures of three-fourths of the several States within seven years from the date of its submission to the States by the Congress.



AMENDMENT XXIII


SECTION 1.  The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct:

A number of electors of President and Vice-President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State;  they shall be in addition to those appointed by the States, but they shall be considered, for the purposes of the election of President and Vice-President, to be electors appointed by a State;  and they shall meet in the District and perform such duties as provided by the twelfth article of amendment.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XXIV


SECTION 1.  The right of citizens of the United States to vote in any primary or other election for President or Vice-President, for electors for President or Vice-President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XXV


SECTION 1.  In case of the removal of the President from office or of his death or resignation, the Vice-President shall become President.


SECTION 2.  Whenever there is a vacancy in the office of the Vice-President, the President shall nominate a Vice-President who shall take office upon confirmation by a majority vote of both houses of Congress.


SECTION 3.  Whenever the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that he is unable to discharge the powers and duties of his office, and until he transmits to them a written declaration to the contrary, such powers and duties shall be discharged by the Vice-President as Acting President.


SECTION 4.  Whenever the Vice-President and a majority of either the principal officers of the executive departments or of such other body as Congress may by law provide, transmit to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office, the Vice-President shall immediately assume the powers and duties of the office as Acting President.

Thereafter, when the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that no inability exists, he shall resume the powers and duties of his office unless the Vice-President and a majority of either the principal officers of the executive department or of such other body as Congress may by law provide, transmit within four days to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office.  Thereupon Congress shall decide the issue, assembling within forty-eight hours for that purpose if not in session.  If the Congress, within twenty-one days after receipt of the latter written declaration, or, if Congress is not in session, within twenty-one days after Congress is required to assemble, determines by two-thirds vote of both houses that the President is unable to discharge the powers and duties of his office, the Vice-President shall continue to discharge the same as Acting President;  otherwise, the President shall resume the powers and duties of his office.



AMENDMENT XXVI


SECTION 1.  The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.


SECTION 2.  The Congress shall have the power to enforce this article by appropriate legislation.



AMENDMENT XXVII


No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.



```
{% endraw %}

## USACONST.DOC

{% raw %}
```
CONSTITUTION OF THE UNITED STATES

We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.



ARTICLE I


SECTION 1.  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.


SECTION 2.  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.

No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen.

Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three-fifths of all other Persons.  The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct.  The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative;  and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three.

When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies.

The House of Representatives shall chuse their Speaker and other Officers;  and shall have the sole Power of Impeachment.


SECTION 3.  The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years;  and each Senator shall have one Vote.

Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes.  The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one-third may be chosen every second Year;  and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies.

No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen.

The Vice-President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided.

The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice-President, or when he shall exercise the Office of President of the United States.

The Senate shall have the sole Power to try all Impeachments.  When sitting for that Purpose, they shall be on Oath or Affirmation.  When the President of the United States is tried, the Chief Justice shall preside:  And no Person shall be convicted without the Concurrence of two-thirds of the Members present.

Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States:  but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.


SECTION 4.  The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof;  but the Congress may at any time by Law make or alter such Regulations, except as to the Places of chusing Senators.

The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day.


SECTION 5.  Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business;  but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide.

Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two-thirds, expel a Member.

Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy;  and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one-fifth of those Present, be entered on the Journal.

Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting.


SECTION 6.  The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States.  They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same;  and for any Speech or Debate in either House, they shall not be questioned in any other Place.

No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office under the Authority of the United States, which shall have been created, or the Emoluments whereof shall have been encreased during such time;  and no Person holding any Office under the United States, shall be a Member of either House during his Continuance in Office.


SECTION 7.  All Bills for raising Revenue shall originate in the House of Representatives;  but the Senate may propose or concur with Amendments as on other Bills.

Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States;  If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it.  If after such Reconsideration two-thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two-thirds of that House, it shall become a Law.  But in all such Cases the Votes of both Houses shall be determined by yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively.  If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law.

Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States;  and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two-thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill.


SECTION 8.  The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States;  but all Duties, Imposts and Excises shall be uniform throughout the United States;

To borrow Money on the credit of the United States;

To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;

To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States;

To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;

To provide for the Punishment of counterfeiting the Securities and current Coin of the United States;

To establish Post Offices and post Roads;

To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries;

To constitute Tribunals inferior to the supreme Court;

To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations;

To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water;

To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years;

To provide and maintain a Navy;

To make Rules for the Government and Regulation of the land and naval Forces;

To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions;

To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress;

To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings; -- And

To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.


SECTION 9.  The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person.

The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it.

No Bill of Attainder or ex post facto Law shall be passed.

No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or Enumeration herein before directed to be taken.

No Tax or Duty shall be laid on Articles exported from any State.

No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another:  nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another.

No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law;  and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time.

No Title of Nobility shall be granted by the United States:  And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.


SECTION 10.  No State shall enter into any Treaty, Alliance, or Confederation;  grant Letters of Marque and Reprisal;  coin Money;  emit Bills of Credit;  make any Thing but gold and silver Coin a Tender in Payment of Debts;  pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility.

No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing its inspection Laws:  and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States;  and all such Laws shall be subject to the Revision and Controul of the Congress.

No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.



ARTICLE II


SECTION 1.  The executive Power shall be vested in a President of the United States of America.  He shall hold his Office during the Term of four Years, and, together with the Vice-President, chosen for the same Term, be elected, as follows

Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress:  but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector.

The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves.  And they shall make a List of all the Persons voted for, and of the Number of Votes for each;  which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate.  The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted.  The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed;  and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President;  and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President.  But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote;  A quorum for this Purpose shall consist of a Member or Members from two-thirds of the States, and a Majority of all the States shall be necessary to a Choice.  In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice-President.  But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice-President.

The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes;  which Day shall be the same throughout the United States.

No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President;  neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States.

In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice-President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice-President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected.

The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be encreased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them.

Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation: -- "I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States."


SECTION 2.  The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States;  he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment.

He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two-thirds of the Senators present concur;  and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law;  but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments.

The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.


SECTION 3.  He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient;  he may, on extraordinary Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect to the Time of Adjournment, he may adjourn them to such Time as he shall think proper;  he shall receive Ambassadors and other public Ministers;  he shall take Care that the Laws be faithfully executed, and shall Commission all the Officers of the United States.


SECTION 4.  The President, Vice-President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.



ARTICLE III


SECTION 1.  The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish.  The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.


SECTION 2.  The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority; -- to all Cases affecting Ambassadors, other public Ministers and Consuls; -- to all Cases of admiralty and maritime Jurisdiction; -- to Controversies to which the United States shall be a Party; -- to Controversies between two or more States;  between a State and Citizens of another State; -- between Citizens of different States; -- between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects.

In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction.  In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make.

The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury;  and such Trial shall be held in the State where the said Crimes shall have been committed;  but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.


SECTION 3.  Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort.  No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.

The Congress shall have Power to declare the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except during the Life of the Person attainted.



ARTICLE IV


SECTION 1.  Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.  And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.


SECTION 2.  The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.

A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be found in another State, shall on Demand of the executive Authority of the State from which he fled, be delivered up, to be removed to the State having Jurisdiction of the Crime.

No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due.


SECTION 3.  New States may be admitted by the Congress into this Union;  but no new State shall be formed or erected within the Jurisdiction of any other State;  nor any State be formed by the Junction of two or more States, or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress.

The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States;  and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State.


SECTION 4.  The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion;  and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence.



ARTICLE V

The Congress, whenever two-thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two-thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three-fourths of the several States, or by Conventions in three-fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress;  Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article;  and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.



ARTICLE VI

All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation.

This Constitution, and the Laws of the United States which shall be made in Pursuance thereof;  and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land;  and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the contrary notwithstanding.

The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution;  but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.



ARTICLE VII

The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.

Done in Convention by the Unanimous Consent of the States present the Seventeenth Day of September in the year of our Lord one thousand seven hundred and Eighty seven and of the Independence of the United States of America the Twelfth IN WITNESS whereof We have hereunto subscribed our Names,

                                Go.  Washington - Presidt. and deputy from Virginia


New Hampshire                   John Langdon                                                           Nicholas Gilman

Massachusetts                   Nathaniel Gorham                                                       Rufus King

Connecticut                     Wm: Saml. Johnson                                                      Roger Sherman

New York                        Alexander Hamilton

New Jersey                      Wil: Livingston                                                        David Brearley                                                         Wm. Paterson.                                                          Jona: Dayton

Pennsylvania                    B Franklin                                                             Thomas Mifflin                                                         Robt Morris                                                            Geo. Clymer                                                            Thos FitzSimons                                                        Jared Ingersoll                                                        James Wilson                                                           Gouv Morris

Delaware                        Geo: Read                                                              Gunning Bedford jun                                                    John Dickinson                                                         Richard Bassett                                                        Jaco: Broom

Maryland                        James McHenry                                                          Dan of St Thos. Jenifer                                                 Danl Carroll

Virginia                        John Blair --                                                            James Madison Jr.

North Carolina                  Wm. Blount                                                             Richd. Dobbs Spaight.                                                  Hu Williamson

South Carolina                  J. Rutledge                                                            Charles Cotesworth Pinckney                                            Charles Pinckney                                                       Pierce Butler

Georgia                         William Few                                                            Abr Baldwin

Attest William Jackson Secretary


        In Convention Monday, September 17th. 1787.

                        Present
                      The States of

New Hampshire, Massachusetts, Connecticut, Mr. Hamilton from New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia.


Resolved,

That the preceding Constitution be laid before the United States in Congress assembled, and that it is the Opinion of this Convention, that it should afterwards be submitted to a Convention of Delegates, chosen in each State by the People thereof, under the Recommendation of its Legislature, for their Assent and Ratification; and that each Convention assenting to, and ratifying the Same, should give Notice thereof to the United States in Congress assembled.

Resolved, That it is the Opinion of this Convention, that as soon as the Conventions of nine States shall have ratified this Constitution, the United States in Congress assembled should fix a Day on which Electors should be appointed by the States which shall have ratified the same, and a Day on which the Electors should assemble to vote for the President, and the Time and Place for commencing Proceedings under this Constitution.  That after such Publication the Electors should be appointed, and the Senators and Representatives elected:  That the Electors should meet on the Day fixed for the Election of the President, and should transmit their votes certified signed, sealed and directed, as the Constitution requires, to the Secretary of the United States in Congress assembled, that the Senators and Representatives should convene at the Time and Place assigned; that the Senators should appoint a President of the Senate, for the sole Purpose of receiving, opening and counting the Votes for President; and, that after he shall be chosen, the Congress, together with the President should, without Delay, proceed to execute this Constitution.

By the Unanimous Order of the Convention.
                                                                                                                 Go: Washington Presidt.
W. Jackson Secretary.



Congress of the United States

begun and held at the City of New-York, on Wednesday the fourth of March, one thousand seven hundred and eighty-nine

THE Conventions of a number of the States, having at the time of their adopting the Constitution, expressed a desire, in order to prevent misconstruction or abuse of its powers, that further declaratory and restrictive clauses should be added:  And as extending the ground of public confidence in the Government, will best ensure the beneficent ends of its institution:

RESOLVED by the Senate and House of Representatives of the United States of America, in Congress assembled, two thirds of both Houses concurring, that the following Articles be proposed to the Legislatures of the several States, as Amendments to the Constitution of the United States, all or any of which Articles, when ratified by three fourths of the said Legislatures, to be valid to all intents and purposes, as part of the said Constitution; vizt.

ARTICLES in addition to, and Amendment of the Constitution of the United States of America, proposed by Congress, and ratified by the Legislatures of the several States, pursuant to the fifth Article of the original Constitution. . . .

FREDERICK AUGUSTUS MUHLENBERG
Speaker of the House of Representatives.
JOHN ADAMS, Vice-President of the United States, and President of the Senate.

ATTEST,
JOHN BECKLEY, Clerk of the House of Representatives.
SAM. A. OTIS Secretary of the Senate.


AMENDMENTS TO THE CONSTITUTION OF THE UNITED STATES OF AMERICA



AMENDMENT I

Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof;  or abridging the freedom of speech, or of the press, or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.



AMENDMENT II

A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.



AMENDMENT III

No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.



AMENDMENT IV

The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.



AMENDMENT V

No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger;  nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb, nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law;  nor shall private property be taken for public use without just compensation.



AMENDMENT VI

In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation;  to be confronted with the witnesses against him;  to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.



AMENDMENT VII

In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.



AMENDMENT VIII

Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.



AMENDMENT IX

The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.



AMENDMENT X

The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.



AMENDMENT XI

The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.



AMENDMENT XII

The Electors shall meet in their respective States and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same State with themselves;  they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the Government of the United States, directed to the President of the Senate;  the President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted;  The person having the greatest number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed;  and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President.  But in choosing the President, the votes shall be taken by States, the representation from each State having one vote;  a quorum for this purpose shall consist of a member or members from two-thirds of the States, and a majority of all the States shall be necessary to a choice.  And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon them, before the fourth day of March next following, then the Vice-President shall act as President, as in the case of the death or other constitutional disability of the President.  The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President;  a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice.  But no person constitutionally ineligible to the office of the President shall be eligible to that of Vice-President of the United States.



AMENDMENT XIII


SECTION 1.  Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States or any place subject to their jurisdiction.


SECTION 2.  Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XIV


SECTION 1.  All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.  No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States;  nor shall any State deprive any person of life, liberty, or property, without due process of law;  nor deny to any person within its jurisdiction the equal protection of the laws.


SECTION 2.  Representatives shall be apportioned among the several States according to their respective numbers, counting the whole number of persons in each State, excluding Indians not taxed.  But when the right to vote at any election for the choice of Electors for President and Vice-President of the United States, Representatives in Congress, the executive and judicial officers of a State, or the members of the Legislature thereof, is denied to any of the male inhabitants of such State, being twenty-one years of age, and citizens of the United States, or in any way abridged, except for participation in rebellion, or other crime, the basis or representation therein shall be reduced in the proportion which the number of such male citizens shall bear to the whole number of male citizens twenty-one years of age in such State.


SECTION 3.  No person shall be a Senator or Representative in Congress, or Elector of President and Vice-President, or hold any office, civil or military, under the United States, or under any State, who, having previously taken an oath, as a member of Congress, or as an officer of the United States, or as a member of any State Legislature, or as an executive or judicial officer of any State, to support the Constitution of the United States, shall have engaged in insurrection or rebellion against the same, or given aid or comfort to the enemies thereof.  But Congress may by a vote of two-thirds of each House, remove such disability.


SECTION 4.  The validity of the public debt of the United States, authorized by law, including debts incurred for payment of pensions and bounties for services in suppressing insurrection or rebellion, shall not be questioned.  But neither the United States nor any State shall assume or pay any debt or obligation incurred in aid of insurrection or rebellion against the United States, or any claim for the loss or emancipation of any slave;  but all such debts, obligations and claims shall be held illegal and void.


SECTION 5.  The Congress shall have power to enforce, by appropriate legislation, the provisions of this article.



AMENDMENT XV


SECTION 1.  The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XVI

The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.



AMENDMENT XVII

The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years;  and each Senator shall have one vote.  The electors in each State shall have the qualifications requisite for electors of the most numerous branch of the State Legislatures.

When vacancies happen in the representation of any State in the Senate, the executive authority of such State shall issue writs of election to fill such vacancies:  Provided, That the Legislature of any State may empower the Executive thereof to make temporary appointments until the people fill the vacancies by election as the Legislature may direct.

This amendment shall not be so construed as to affect the election or term of any Senator chosen before it becomes valid as part of the Constitution.



AMENDMENT XVIII


SECTION 1.  After one year from the ratification of this article  the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.


SECTION 2.  The Congress and the several States shall have concurrent power to enforce this article by appropriate legislation.


SECTION 3.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.



AMENDMENT XIX

The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.

Congress shall have power to enforce this Article by appropriate legislation.



AMENDMENT XX


SECTION 1.  The terms of the President and Vice-President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3rd day of January, of the years in which such terms would have ended if this article had not been ratified;  and the terms of their successors shall then begin.


SECTION 2.  The Congress shall assemble at least once in every year, and such meeting shall begin at noon on the 3rd day of January, unless they shall by law appoint a different day.


SECTION 3.  If, at the time fixed for the beginning of the term of the President, the President elect shall have died, the Vice-President elect shall become President.  If a President shall not have been chosen before the the time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice-President elect shall act as President until a President shall have qualified;  and the Congress may by law provide for the case wherein neither a President elect nor a Vice-President elect shall have qualified, declaring who shall then act as President, or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or Vice-President shall have qualified.


SECTION 4.  The Congress may by law provide for the case of the death of any of the persons from whom the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for the case of the death of any of the persons from whom the Senate may choose a Vice-President whenever the right of choice shall have devolved upon them.


SECTION 5.  Sections 1 and 2 shall take effect on the 15th day of October following the ratification of this article.


SECTION 6.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the Legislatures of three-fourths of the several States within seven years from the date of its submission.



AMENDMENT XXI


SECTION 1.  The eighteenth article of amendment to the Constitution of the United States is hereby repealed.


SECTION 2.  The transportation or importation into any State, Territory, or Possession of the United States for delivery or use therein of intoxicating liquors, in violation of the laws thereof, is hereby prohibited.


SECTION 3.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by conventions in the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.



AMENDMENT XXII


SECTION 1.  No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once.  But this article shall not apply to any person holding the office of President when this Article was proposed by the Congress, and shall not prevent any person who may be holding the office of President, or acting as President, during the term within which this Article becomes operative from holding the office of President or acting as President during the remainder of such term.


SECTION 2.  This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the Legislatures of three-fourths of the several States within seven years from the date of its submission to the States by the Congress.



AMENDMENT XXIII


SECTION 1.  The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct:

A number of electors of President and Vice-President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State;  they shall be in addition to those appointed by the States, but they shall be considered, for the purposes of the election of President and Vice-President, to be electors appointed by a State;  and they shall meet in the District and perform such duties as provided by the twelfth article of amendment.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XXIV


SECTION 1.  The right of citizens of the United States to vote in any primary or other election for President or Vice-President, for electors for President or Vice-President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.


SECTION 2.  The Congress shall have power to enforce this article by appropriate legislation.



AMENDMENT XXV


SECTION 1.  In case of the removal of the President from office or of his death or resignation, the Vice-President shall become President.


SECTION 2.  Whenever there is a vacancy in the office of the Vice-President, the President shall nominate a Vice-President who shall take office upon confirmation by a majority vote of both houses of Congress.


SECTION 3.  Whenever the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that he is unable to discharge the powers and duties of his office, and until he transmits to them a written declaration to the contrary, such powers and duties shall be discharged by the Vice-President as Acting President.


SECTION 4.  Whenever the Vice-President and a majority of either the principal officers of the executive departments or of such other body as Congress may by law provide, transmit to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office, the Vice-President shall immediately assume the powers and duties of the office as Acting President.

Thereafter, when the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that no inability exists, he shall resume the powers and duties of his office unless the Vice-President and a majority of either the principal officers of the executive department or of such other body as Congress may by law provide, transmit within four days to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office.  Thereupon Congress shall decide the issue, assembling within forty-eight hours for that purpose if not in session.  If the Congress, within twenty-one days after receipt of the latter written declaration, or, if Congress is not in session, within twenty-one days after Congress is required to assemble, determines by two-thirds vote of both houses that the President is unable to discharge the powers and duties of his office, the Vice-President shall continue to discharge the same as Acting President;  otherwise, the President shall resume the powers and duties of his office.



AMENDMENT XXVI


SECTION 1.  The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.


SECTION 2.  The Congress shall have the power to enforce this article by appropriate legislation.



AMENDMENT XXVII


No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.



```
{% endraw %}

## USATEXT.DOC

{% raw %}
```






     THE CONSTITUTION ON DISK

     This file contains information about the files included as part of this
     package that contain the text of the United States Constitution.  These
     files were used with Main Menu option 10 of The CONSTITUTION Notebook
     Program to produce the versions and portions of the Constitution that are
     provided with that package.  If you do not have a copy of The
     CONSTITUTION Notebook Program, send LSASE to TCNbP Company, P.O. Box 516,
     Olla, LA 71465-0516 for information.

     Included are files that contain the text of the United States
     Constitution in a format that can be used with many common word
     processors.  These files are contained in a directory named RIGHTS.  This
     directory is on diskette 3 of 4 for 5.25 inch format or diskette 2 of 2
     for 3.5 inch diskettes in the 720 K format.  One file named USACONST.DOC
     contains the text of the entire Constitution including the Bill of Rights
     and the other 17 amendments.  Three more files were formed by breaking
     USACONST.DOC into three sections.  The file named ORIGINAL.DOC contains
     the first 7 articles, the signatures, the resolution proposing
     ratification of the Constitution, and the resolution proposing the
     amendments that became the Bill of Rights.  The file named BILLRITE.DOC
     contains the 10 (of the first 12 proposed) amendments which were ratified
     and have come to be commonly referred to as the Bill of Rights.  Another
     file named AMENDS.DOC contains amendments 11 through 27.


     The files containing portions of the Constitution were provided for the
     benefit of those whose word processors might not hold USACONST.DOC.


     DESCRIPTION OF THE PROVIDED TEXT OF THE CONSTITUTION

     As has been noted previously, the text of the entire Constitution is
     provided with this program.  The version provided is an attempt to match
     the original text to the extent possible while maintaining viability for
     use with the program.  A description of concessions required to adapt the
     text of the Constitution for use with this program follows:


     Hyphenation

     The text of the Constitution contains very few hyphenated words (less
     than a dozen).  The text used with this program contains many.  The
     program treats everything between two blanks as a word.  Therefore, all
     occurrences of the term 'Vice President' are hyphenated so the program
     will automatically distinguish 'Vice-President' from President.  The
     fractions are hyphenated to be counted as one word.  The term 'one third'
     is more properly thought of as one word than two. If you feel otherwise,
     edit the source file, removing the hyphens and analyze the file using
     Main Menu option 10.



                                         86












     No words are hyphenated in order to be divided at the end of a line in
     the text provided with this program.

     Initial Capitalization of Words

     The text of the Constitution contains numerous words that are spelled
     with initial caps in the middle of a sentence.  Many of these words would
     not ordinarily be capitalized according to contemporary writing
     conventions. The provided text preserves the original use of initial
     caps.  A photographic reproduction of the original was employed for this
     purpose. The photographic reproduction ended with the 10th amendment in
     the Bill of Rights.  Past that point, no reliable source was located to
     resolve differences among sources.


     Archaic Spellings

     The text of the Constitution contains several words with archaic
     spellings.  Defence, chuse, labour, encrease and chusing come immediately
     to mind.  The provided text preserves original spellings to the end of
     the 10th amendment in the Bill of Rights.  Past that point, no reliable
     source was found to resolve differences among sources.

     NOTE:  More correctly stated, multiple sources did not corroborate with
     total consistency.  Sources agreeing on one detail might not agree on
     another.


     Punctuation

     The punctuation of the Constitution is difficult to see on a photographic
     reproduction.  There is disagreement among sources as to the exact
     punctuation.  Punctuation in the provided files is best guess.  If your
     guess is better, by all means, change to suit.

     One punctuation mark used in the Constitution has no keyboard equivalent
     on this type of computer.  This punctuation mark is a long dash used in 7
     places.  It is represented in the provided files as two consecutive
     dashes.  A space precedes the first dash and another space follows the
     second dash.  There is NOT a space between the dashes.  The spaces tell
     the program that the dashes are not part of a word.  If you fail to use
     spaces with this punctuation mark,  you will get some interesting
     additions to the beginning of your alphabetically sorted vocabulary list.


     Indentation

     The text of the Constitution used indentation to indicate the start of a
     new paragraph.  The provided files use vertical spacing for this purpose.
     At least one blank line must separate two paragraphs.  In the provided
     files, 3 blank lines precede each new article or amendment, 2 blank lines


                                         87












     precede each new section and 1 blank line precedes each new paragraph.
     The extra vertical spaces preceding articles, sections and amendments are
     for visual effect only.  They are intended to make the file easier for
     you to read.  They have no effect on the program.  As long as you have
     one blank line (2 presses of the ENTER key or carriage return key),
     preceding each new paragraph, section, article or amendment, the program
     should produce accurate references.


     Article Titles

     The text of the Constitution used Article with initial caps (albeit,
     large bold fancy letters were used) to indicate the beginning of a new
     article.  The provided files use ARTICLE in all caps for this purpose.
     When creating files to be analyzed by this program, do not use article in
     all caps for any purpose except to start a new article.  That is, do not
     use ARTICLE (all caps) in the text of any paragraph of any section
     article or amendment.

     Also, a period appears after the word Article each time it is used in a
     heading in the original Constitution.  These periods were omitted from
     these text files to avoid running up the number of clauses.


     Section Titles

     The text of the Constitution used Section with initial caps to indicate
     the beginning of a new section.  The provided files use SECTION in all
     caps for this purpose.  When creating files to be analyzed by this
     program, do not use section in all caps for any purpose except to start a
     new section.  That is, do not use section (all caps) in the text of any
     paragraph of any section article or amendment.

     Also, a period appears after the word Section each time it is used in a
     heading in the original Constitution.  These periods were omitted from
     these text files to avoid running up the number of clauses.  However, the
     period after the associated Arabic numberal is included to avoid having
     the Section title counted as words and syllables in the first clause
     following.



     Amendment Titles

     Headings for the amendments posed a special problem in terms of
     consistency with the original text and program efficacy.  Since not all
     proposed amendments were adopted, a numbering problem developed right
     away.  Also, there is not one consistent heading throughout the
     amendments according to the sources used.  The provided files use
     AMENDMENT in all caps to indicate the start of a new amendment.  When
     creating files to be analyzed by this program, do not use amendment in


                                         88












     all caps for any purpose except to start a new amendment.  That is, do
     not use AMENDMENT (all caps) in the text of any paragraph of any section
     article or amendment.  The provided files contain only those amendments
     which were ratified.


     Inclusion of Resolution

     The provided files contain the resolution by which the Constitution was
     brought into effect.  Also included is the resolution proposing the
     amendments that became the Bill of Rights.  These resolutions follow the
     signatures in Article VII and precede Amendment I in the Bill of Rights.
     Both resolutions are included in USACONST.DOC as well as in ORIGINAL.DOC.  

     Due to the way the TCN program generates references, both resolutions get
     the reference prefix Art 7.  Given the relatedness of the purpose of both
     these resolutions, this is not entirely inappropriate.

     Any attempt to parse a portion with the second resolution at the
     beginning of BILLRITE.DOC is guaranteed to produce disappointing results
     regarding references.


     Calligraphy

     The TCN program is limited to the use of initial caps or all caps in the
     attempt to express an infinite range of emphasis made possible by human
     penmanship.

     For example, the word "done" at the opening of the signature section of
     the Constitution is in all lower case.  However, the letters are
     deliberately made much larger.  In its attempt to express this emphasis,
     TCNbP Company decided to use an initial capital letter.

     A similar dilemna is presented by the words "In Witness" and "We the
     People".



     Unresolved Questions

     Several questions are left unresolved by the photogenic copy.  One
     concerns the use of the apostrophe with its.  Another concerns use of
     initial capitalization in the word suits in amendment VII in the Bill of
     Rights.

     Further difficult questions are raised by the issue of calligraphy.

     Frankly, due to the difficulty in reading some words, not every source
     agrees as to whether a particular word is capitalized.  In some cases,



                                         89












     not every source agrees on the spelling of some words.  TCNbP tried
     heroically to resolve these issues, but did not totally succeed.

     What to do?  Give users Main Menu option 10.  You prepare a source file
     to suit yourself.  Parse it using Main Menu option 10 and work from that
     version.  Modification of source files is described in the text that
     follows.


     MODIFICATION OF PROVIDED FILES CONTAINING CONSTITUTIONAL TEXT

     Within limits, you can use this program to produce its full compliment of
     output files on modified versions of the provided files.  This capability
     is provided mainly in the event that the Constitution is amended as well
     it may be in the not too distant future.


     Roman Numerals

     The program can read Roman Numerals (Arabic not allowed for amendment
     numbers) up to 39.


     Additional Words

     The program can accept at least 1,000 additional words (quite a lot
     considering the average size of amendments).  An exact maximum cannot be
     determined; however, it will probably hold nearer to 2,000 additional
     words.


     Why Modify the Provided Source Files?

     Other than possible amendments, one reason is that you may wish to
     analyze a version that has all superseded phrases omitted. (Given the
     amount of superseded text devoted to the election of the President and
     order of succession in the event of his death or resignation, parsing a
     file with superseded phrases omitted should produce interesting results
     concerning the relative number of times Congress and President are used
     if nothing else.)  Or, you may wish to analyze the Constitution on an
     Article-by-Article basis.

     Another reason to modify the source file is to incorporate modern
     spelling and capitalization conventions.  The spelling used in the
     provided files is intended to match the original spelling.  This includes
     archaic spellings as well as the use of initial caps or in one or two
     cases all caps.  Several versions of the Constitution were compared, but
     the decision where multiple sources did not match was not always certain.
     If you can obtain a photographic copy of the original (amendments 11 - 27
     of this version were not derived from that), believe it before these
     files.


                                         90













     Other variations of valid modifications are limited only by your
     imagination.

     Use of CONSTITUTION, ARTICLE, and AMENDMENT

     In addition to the carriage return usage and hyphenation effects
     described previously, the first line of the file MUST contain the word
     "CONSTITUTION", "ARTICLE", or "AMENDMENT" in all upper case.  "ARTICLE",
     or "AMENDMENT" in all upper case must be followed by a Roman numeral that
     goes with the material that follows the heading.  The Roman numeral must
     be followed by two (minimum) carriage returns.  Start the file with
     "CONSTITUTION" if your analysis includes the Preamble.  Start the file
     with "ARTICLE" if your analysis begins in the first 7 articles following
     the preamble.  Start the file with "AMENDMENT" if your analysis begins in
     the Bill of Rights or thereafter.



     Use of Section or SECTION

     Where "Section" is used to indicate the beginning of a new section
     reference in the text, the word must be in all upper case, SECTION.  Even
     if it is eventually used as upper case in the text of an amendment
     (unlikely), you must use initial caps.  The same is true for ARTICLE, or
     AMENDMENT.  The word "Constitution" can be used anywhere in the file as
     initial cap, all lower case or all upper case.  However, if the first
     word in a file is CONSTITUTION in all caps, the program will 'think' that
     it is in the Preamble, whether it is or not.  For clarification about the
     effect of using these words in all caps, initial caps, all lower case,
     refer to the provided text files and the resulting output of the program.
     The words in all caps ARTICLE, AMENDMENT, SECTION, and CONSTITUTION can
     easily be found in the alphabetically sorted vocabulary lists using F6.

     Failure to use CONSTITUTION, AMENDMENT, ARTICLE, or SECTION properly may
     result in improper references.


     Hyphenation

     Analysis of files that incorporate automatic hyphenation may produce
     unpredictable results.


     Effects of Vertical Spacing

     At least one vertical space (blank line) must appear between paragraphs.
     Always use two presses of the ENTER or carriage return key, even if one
     press gives you a blank line.  You can put more than one blank line if
     you wish.  In the provided files, three blank lines precede each article



                                         91












     or amendment heading, two blank lines precede each section, and one blank
     line precedes each paragraph.



     Use of Horizontal (Linear) Spaces

     In the provided file, two spaces follow each period (except at the end of
     a paragraph), two follow each colon and semicolon.  One space follows
     each comma.  You can use one linear (horizontal) space where two are used
     without affecting the output.


     Carriage Returns and Horizontal Spaces in the Signature Section

     If your word processor has a feature that allows you to view the
     placement of carriage return characters in a file, enable that feature
     and look at the signatures in ORIGINAL.DOC.  Notice that in the
     signatures, blanks are used as separators except after the last signature
     for each state.  In this manner, the signatures for each state get
     treated as one paragraph.  If you put carriage returns after each
     signature (press the ENTER key), each individual signature will get a
     separate paragraph reference.  This can place your references in Article
     7 at variance with the same references of other individuals using this
     program.  To maintain the consistency of your references, do not change
     the use of carriage returns (ENTER key presses) in the signature section.


     Closing Carriage Returns

     Always put at least 4 carriage returns after the last word or punctuation
     mark in a version or portion of the Constitution that you prepare for
     parsing.  To do this, press your end of file combination (usually CTRL
     END).  Just get the cursor located past the last punctuation mark or the
     last character in the last word.  Press ENTER 4 times.



     Use of ASCII File

     Use the 'Text Only' or ASCII file save option of your word processor to
     store your modified file.  Parsing a non-ASCII file may produce
     unreliable results.

     Use the carriage return after paragraphs option.  If your word processor
     does not provide this function, or you do not use it, the TCN program
     will generate a unique reference (Art 1 Sec 1.1, etc.) for each line of
     text.  You will crash the program guaranteed on a full blown version of
     the Constitution.  Even if the program does not crash, your references
     will be useless.



                                         92






```
{% endraw %}

## BACKUP.DOC

{% raw %}
```






   BACKUP PROCEDURES

   Operation of The CONSTITUTION Notebook Program involves the creation of
   files that represent a lot of work on your part.

   Files associated with this package are created or modified when you:  edit,
   delete, or modify (synonym or subject) reports; create a new seminar; parse
   another version or portion of the US Constitution, or; edit syllable data.

   TCNbP Company recommends that you periodically backup your data files
   associated with the TCN program.


   To emerge unscathed from an otherwise catastrophic hard drive or floppy
   drive head crash, backup your files on the occasions and in the manner
   described in this file.  Of course, you are free to backup more often if it
   gives you a warm feeling.  But don't backup any less often.  And if you have
   utilities other then DOS to backup your hard drive, by all means use them if
   you care to.  Use the information in this file to determine what to back up.

   If your computer has a magnetic tape, you can use it to backup your TCN data
   files.

   Otherwise, information is presented under the heading MAKING BACKUP TARGETS
   to help you prepare backup targets.

   Details of when, which diskette(s), and how to backup vary depending on
   whether you operate from a 5-1/4" floppy drive, a 3-1/2" floppy drive, or a
   hard drive.

   Refer to the procedure in this file that applies to the manner in which you
   operate The CONSTITUTION Notebook Program and backup your TCN package
   diskettes when and as instructed.


   When to Backup

   The titles of the following paragraphs describe an event after which you
   should backup certain TCN files.  Each paragraph explains WHAT to back up.


   Following changes made using Main Menu options 3, 4, or 5, backup:

        5-1/4 inch Index diskettes (2 of 4 and 3 of 4)

        3-1/2 inch Program diskette and User Documentation diskette (1 of 2 and
        2 of 2)

        Hard drive install directory and all its subdirectories

   


                                            97












   After Using Main Menu option 10, backup

        5-1/4 inch Program Diskette and Index Diskettes

        3-1/2 inch Program diskette and User Documentation diskette (1 of 2 and
        2 of 2)

        Hard drive install directory and all its subdirectories


   After Updating Syllable data with Main Menu option 11, backup

        5-1/4 inch Program Diskette

        3-1/2 inch Program Diskette

        Hard drive install directory and all its subdirectories



   Back Up Procedure for Floppy Diskettes

   On the occasions listed above, copy your working copy of a diskette onto the
   backup target for that diskette.  Use the DOS DISKCOPY command.


   Back Up Procedure for Hard Drives

   On the occasions listed above, copy your install directory and all its files
   and subdirectories onto a backup target diskette or diskettes.  Use the DOS
   BACKUP command with the /S option.  Have a blank formatted diskette handy in
   case you run out of room on your backup diskettes.  This works for
   everybody.  If you have DOS 4.0 or later, BACKUP will automatically format
   and continue the backup process without ill effect.  DOS 3.3 has a /F option
   that will format an unformatted diskette and continue.  Earlier versions
   will fail and you have to start over.

   You may wonder why backing up the install directory and everything below it
   is always recommended when you can easily see by the information for
   diskettes that not everything has to be backed up.  The answer to that is,
   it doesn't take very long anyway and it makes the recovery process much
   simpler.


   Recovery Procedure for Floppies

   If a working copy of a floppy diskette becomes defective, discard it.  Get
   another diskette that formats flawlessly.  Label it.  Copy your backup copy
   of the defective diskette onto the new diskette.




                                            98












   Recovery Procedures for Hard Drives

   If you lose data on a hard drive, get the drive fixed.

   Use the DOS RESTORE command to transfer the contents of your backup
   diskette(s) back onto your hard drive.



   MAKING BACKUP TARGETS


   Refer to the following materials to make backup targets for your TCN program
   package.



   Floppy Targets


   If you operate your TCN program on floppy disks, use the DOS DISKCOPY
   command to make a duplicate of each diskette in the package.  Label each
   duplicate diskette sufficiently to identify:

         a.  which diskette it backs up

         b.  that it is the backup diskette, not the working copy



   Hard Disk Targets

   Format diskettes to be used as a target with the DOS BACKUP command.  Label
   the diskettes sufficiently to identify:

         a.  that it is a backup target for the TCN program

         b.  the install drive and directory.

         c.  how many backup target diskettes you are using for the TCN program
         (four 5 1/4" targets or two 3 1/2" targets is sufficient to start
         with, though more may be required later if you do a lot of work with
         the TCN program)

         d.  the sequence number of each target

         e.  if it is formatted for high density
   





                                            99






```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```






                                    TABLE OF CONTENTS
                                                                                    
     File Names Start Pages

     BACKUP.DOC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  96
     CONTENTS.DOC                                           (Table of Contents)
     COVER.DOC                                              (Cover Page)
     DISKROOM.DOC                                                            92
     EDITOR.DOC                                                              81
     EVAL.DOC                                                                 1
     FUNCKEYS.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
     MAINMENU.DOC                                                            15
     MM1.DOC                                                                 22
     MM10.DOC                                                                65
     MM11.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
     MM12.DOC                                                                74
     MM13.DOC                                                                75
     MM2.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
     MM3.DOC                                                                 26
     MM4.DOC                                                                 29
     MM5.DOC                                                                 40
     MM6.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  51
     MM7.DOC                                                                 58
     MM8.DOC                                                                 63
     MM9.DOC                                                                 64
     PREFACE.DOC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   i
     USATEXT.DOC                                                             85



     Contents by File Name and Pages



     FILENAME:  PREFACE.DOC

     INTRODUCTION                                                             i
     GENERAL PROGRAM DESCRIPTION                                              i
     PROGRAM LIMITATIONS . . . . . . . . . . . . . . . . . . . . . . . . . . ii
          Extent of Error Recovery                                           ii
     KEYBOARD . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . iii
     DETAILED PROGRAM DESCRIPTION . . . . . . . . . . . . . . . . . . . . .  iv
         I.  Parse text files containing US Constitution which produces:     iv
         II.  Access to Lexicography Data Base for Review, Update, Output    iv
         III. A Four-Level Data Hierarchy  . . . . . . . . . . . . . . . . .  v
              A.  Version or portion                                          v
                   1.  Seminar                                                v
                       i). Subject                                            v
                            a).  Heading                                      v
                            b).  List of related words                        v
                            c).  Compilation of related phrases               v
                            d).  Comments                                     v
         













                       ii). Synonym                                          vi
                            a).  Heading                                     vi
                            b).  Word list                                   vi
                            c).  Compilation of related phrases              vi
                            d).  Comments                                    vi
         IV.  Notebook Functions                                             vi
             A.  Access output described in I.A. for review.                 vi
             B.  Create Topic Heading                                        vi
             C.  Access of Topic Headings for Review, 
                            Update, Deletion, Output                         vi
             D.  Compile Index of Phrases Related to Accessed Topic . . . . vii
             E.  Edit User Comments Related to Accessed Topic               vii
     TEXT OF THE UNITED STATES CONSTITUTION IN ASCII FILES                  vii



     FILENAME:  EVAL.DOC


     EVALUATION MATERIALS                                                     1
     GENERAL                                                                  1
          PARSE ENGINE . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
          NOTEBOOK FUNCTIONS                                                  2
          LEXICOGRAPHY FUNCTIONS                                              2
          MISCELLANEOUS FUNCTIONS . . . . . . . . . . . . . . . . . . . . . . 3
     EVALUATION EXERCISES                                                     3
     ON-SCREEN EXERCISES                                                      3
     CROSS REFERENCING EXERCISES                                              3
          Cross Reference Exercises for Synonyms . . . . . . . . . . . . . .  4
          Creating a Synonym Heading                                          4
          Now to access the heading . . . . . . . . . . . . . . . . . . . .   5
          Deleting cross references to all occurrences of a word . . . . . .  7
          Now to cross reference a specific occurrence of a word              7
          Deleting a reference to a specific occurrence of a word . . . . . . 8
          CREATING A SUBJECT HEADING . . . . . . . . . . . . . . . . . . . .  9
          A Timely Exercise                                                   9
     CONTINUING YOUR EVALUATION . . . . . . . . . . . . . . . . . . . . . .  10
     Continuing Evaluation of the Notebook Function                          10
          Review of Provided On-Screen Comments                              10
          Producing Your Own Comments . . . . . . . . . . . . . . . . . . .  11
     Lexicography Functions                                                  11
          Word and Clause Profiles                                           11
          Parameter Searches                                                 11
          Vocabulary Lists                                                   11
     Parse Engine . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
     Registration                                                            12
     Continuing Your Study of the Constitution . . . . . . . . . . . . . . . 13



     















     FILENAME:  MAINMENU.DOC


     MAIN MENU                                                               15
         Exit.                                                               15
         Choose version or portion.                                          15
         Choose Seminar.                                                     15
         Subject . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
         Synonym.                                                            16
         Parameter Searches, Word.                                           16
         Parameter Searches, Clauses . . . . . . . . . . . . . . . . . . . . 17
         Profiles, word use.                                                 17
         Profiles, clauses.                                                  17
         Analyze source file.                                                17
         Enter Syllable Data . . . . . . . . . . . . . . . . . . . . . . . . 18
         Options.                                                            18
         Choose Vocabulary List.                                             18
         Shareware Information.                                              18



     FILENAME:  FUNCKEYS.DOC


     FUNCTION KEYS                                                           19
         F1 Help.                                                            19
         F2 Function Key.                                                    19
         F3 Function Key.                                                    19
         F4 DEL . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
         F5 Xport.                                                           20
         F6 Find.                                                            20
         F7 Print. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
         F8 New.                                                             21
         F9                                                                  21
         F10 TGKEY.                                                          21



   FILENAME:  MM1.DOC

   MAIN MENU OPTION 1, EXIT                                                  22



   FILENAME:  MM2.DOC

   MAIN MENU OPTION 2, Version or Portion                                    23
   Description of the Screen                                                 23
       [File Name]                                                           23
       [Comments]  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
       [ Source Path ]                                                       24
       [ Output Path ]                                                       24
   Selecting a Version or Portion                                            24
     












     FILENAME:  MM3.DOC


     MAIN MENU OPTION  3, Choose Seminar                                     26
         What is a Seminar?                                                  26
         Screen Description . . . . . . . . . . . . . . . . . . . . . . . .  27
         Accessing a Seminar                                                 27
         Creating a Seminar . . . . . . . . . . . . . . . . . . . . . . . .  28



     FILENAME:  MM4.DOC


     CROSS REFERENCING PROCEDURES FOR SUBJECTS                               29
     Creating a Subject Heading                                              29
     Accessing a Subject Heading . . . . . . . . . . . . . . . . . . . . . . 30
     Reviewing the Selected Heading                                          30
     Reviewing Notes . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
     Reviewing Cross References using the F2 Key                             31
         F2 from the Selected Heading Field                                  31
         F2 from a highlighted word in the Middle Column . . . . . . . . . . 32
     Reviewing Cross References using the F3 Key                             32
         F3 from the Selected Heading Field                                  32
         F3 from a highlighted word in the Middle Column . . . . . . . . . . 33
     Adding Cross References to the Accessed Heading                         33
         Cross Referencing Every Occurrence of a Word . . . . . . . . . . .  34
         Cross Referencing Specific Occurrence(s) of a Word                  34
     Adding Comments . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
     Deleting Cross References from the Accessed Heading                     35
         Deleting Individual Cross References . . . . . . . . . . . . . . .  36
         Deleting All Cross References of a Selected Word                    36
     Deleting the Accessed Heading . . . . . . . . . . . . . . . . . . . . . 37
     Printing your Cross References                                          37
     Exporting Your Cross References to an ASCII Disk File . . . . . . . . . 38



     FILENAME:  MM5.DOC


     CROSS REFERENCING PROCEDURES FOR SYNONYMS                               40
     Creating a Synonym Heading                                              40
     Accessing a Synonym Heading                                             40
     Reviewing the Selected Heading . . . . . . . . . . . . . . . . . . . .  41
     Reviewing Notes                                                         41
     Reviewing Cross References using the F2 Key . . . . . . . . . . . . . . 42
         F2 from the Title Block of the Middle Column                        42
         F2 from a highlighted word in the Middle Column                     42
     Reviewing Cross References using the F3 Key . . . . . . . . . . . . . . 43
         F3 from the Title Block of the Middle Column                        43
         F3 from a highlighted word in the Middle Column . . . . . . . . . . 44
     Adding Cross References to the Accessed Heading                         44
     Cross Referencing Every Occurrence of a Word                            44












     Cross Referencing Specific Occurrence(s) of a Word                      45
     Adding Comments . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
     Deleting Cross References from the Accessed Heading                     46
         Deleting Individual Cross References                                46
         Deleting All Cross References of a Selected Word . . . . . . . . .  47
     Deleting the Accessed Heading . . . . . . . . . . . . . . . . . . . . . 48
     Printing your Cross References                                          48
     Exporting Your Cross References to an ASCII Disk File . . . . . . . . . 49



     FILENAME:  MM6.DOC


     MAIN MENU OPTION 6                                                      51
         Description of the Interactive Screen                               51
         Parameter Field Descriptions . . . . . . . . . . . . . . . . . . .  52
              Syllables Area                                                 52
              Letters Area . . . . . . . . . . . . . . . . . . . . . . . . . 53
              Occurrences Area . . . . . . . . . . . . . . . . . . . . . . . 54
              Place Area                                                     54
              Word Area . . . . . . . . . . . . . . . . . . . . . . . . . .  55
         Performing a Search . . . . . . . . . . . . . . . . . . . . . . . . 56



     FILENAME:  MM7.DOC


     MAIN MENU OPTION 7                                                      58
         Description of the Interactive Screen                               58
         Parameter Field Descriptions                                        58
             Syllables Area . . . . . . . . . . . . . . . . . . . . . . . .  59
             Letters Area . . . . . . . . . . . . . . . . . . . . . . . . .  60
             Words Area                                                      60
             Place Area . . . . . . . . . . . . . . . . . . . . . . . . . .  61
         Performing a Search . . . . . . . . . . . . . . . . . . . . . . . . 62



     FILENAME:  MM8.DOC


     MAIN MENU OPTION 8                                                      63
         The Secondary Menu                                                  63
         The Reports                                                         63
         Secondary Menu Option 4                                             63



     















     FILENAME:  MM9.DOC


     MAIN MENU OPTION 9                                                      64
         The Secondary Menu                                                  64
         The Reports                                                         64



     FILENAME:  MM10.DOC


     MAIN MENU OPTION 10, ANALYZING (PARSING) A SOURCE FILE                  65
         1)  Source file preparation.                                        65
         2)  Diskette preparation.                                           65
         3)  Analysis dialogue . . . . . . . . . . . . . . . . . . . . . . . 66
         4)  Analysis.                                                       66
     Analysis Dialogue . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
         1)  Source Text File Drive Specifier Prompt.                        67
         3)  Source Text File Name Prompt . . . . . . . . . . . . . . . . .  68
         4)  Output Drive Prompt.                                            68
         5)  Output Path Prompt . . . . . . . . . . . . . . . . . . . . . .  69
         6)  Comments Prompt.                                                69
     Analysis of the Source File . . . . . . . . . . . . . . . . . . . . . . 70



     FILENAME:  MM11.DOC


   MAIN MENU OPTION 11                                                       72
         The Secondary Menu                                                  72
         Entering Syllable Data . . . . . . . . . . . . . . . . . . . . . .  73



     FILENAME:  MM12.DOC


     MAIN MENU OPTION 12                                                     74
         Name of Install Directory                                           74
         Colors                                                              74
         User Documentation Drive                                            74



     FILENAME:  MM13.DOC


  MAIN MENU OPTION 13                                                        75
  The Secondary Menu                                                         75
         Words In Order Of Appearance . . . . . . . . . . . . . . . . . . .  76
         Words Sorted By Number Of Syllables                                 76
         Alphabetical List, Capitalized Words and Uncapitalized Words Merged 76












         Alphabetical List, Caps separate from Not caps, plus Numbers, Punct 77
         Words That Appear In Uppercase Only                                 77
         Words That Appear In Lower Case Only                                77
         Words That Appear In Both Upper And Lower Case . . . . . . . . . .  78
         Words Sorted By Number Of Times They Are Used                       78
         Words Sorted By Number Of Letters                                   78
         Reviewing the Vocabulary Lists                                      78
  LEXICOGRAPHY INFORMATION . . . . . . . . . . . . . . . . . . . . . . . . . 79
         Length                                                              79
         Syllables                                                           79
         Occurrences . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
         Place                                                               80
         Reference                                                           80



     FILENAME:  EDITOR.DOC


   COMMENT EDITOR                                                            82
         Accessing the Comment Editor                                        82
         Exiting the Comment Editor . . . . . . . . . . . . . . . . . . . .  83
         Using the Comment Editor                                            83
         Suggestions for Content of Your Comments . . . . . . . . . . . . .  84
         Saving Your Comments . . . . . . . . . . . . . . . . . . . . . . .  85
         Printing Your Comments                                              85
         Exporting Your Comments                                             85



     FILENAME:  USATEXT.DOC


     THE CONSTITUTION ON DISK                                                86
     DESCRIPTION OF THE PROVIDED TEXT OF THE CONSTITUTION                    86
         Hyphenation                                                         86
         Initial Capitalization of Words . . . . . . . . . . . . . . . . . . 87
         Archaic Spellings                                                   87
         Punctuation                                                         87
         Indentation                                                         87
         Article Titles . . . . . . . . . . . . . . . . . . . . . . . . . .  88
         Section Titles                                                      88
         Amendment Titles                                                    88
         Inclusion of Resolution . . . . . . . . . . . . . . . . . . . . . . 89
         Calligraphy                                                         89
         Unresolved Questions                                                89
     MODIFICATION OF PROVIDED FILES CONTAINING CONSTITUTIONAL TEXT  . . . .  90
         Roman Numerals                                                      90
         Additional Words                                                    90
         Why Modify the Provided Source Files?                               90
         Use of CONSTITUTION, ARTICLE, and AMENDMENT . . . . . . . . . . . . 91


                                            7












         Use of Section or SECTION                                           91
         Hyphenation                                                         91
         Effects of Vertical Spacing                                         91
         Use of Horizontal (Linear) Spaces . . . . . . . . . . . . . . . . . 92
         Carriage Returns and Horizontal Spaces in the Signature Section     92
         Closing Carriage Returns                                            92
         Use of ASCII File                                                   92



     FILENAME:  DISKROOM.DOC


     EFFICIENT UTILIZATION OF DISK SPACE                                     93
         5-1/4" Floppy Tips                                                  93
         3-1/2" Floppy Tips                                                  93
         Hard Disk Tips                                                      93
     DETAILED INFORMATION ABOUT DISK SPACE REQUIREMENTS                      93
         The Simple Rule . . . . . . . . . . . . . . . . . . . . . . . . . . 94
         When to Check Space Left on Floppies                                94
         What You Need to Know                                               94
         Absolute Minimum Required Space                                     94
         Estimation of Additional Space Requirements                         94
         Sample Space Calculation . . . . . . . . . . . . . . . . . . . . .  95
         Space Requirements for Seminars                                     95
         Consequences of a Disk full Error                                   95
         Summary                                                             95




     FILENAME:  BACKUP.DOC


   BACKUP PROCEDURES                                                         97
   When to Backup                                                            97
         Following changes made using Main Menu options 3, 4, or 5, backup:  97
         After using Main Menu option 10, backup . . . . . . . . . . . . . . 98
         After updating Syllable data with Main Menu option 11, backup       98
   Back Up Procedure for Floppy Diskettes                                    98
   Back Up Procedure for Hard Drives                                         98
   Recovery Procedure for Floppies                                           98
   Recovery Procedures for Hard Drives . . . . . . . . . . . . . . . . . . . 99
   MAKING BACKUP TARGETS                                                     99
         Floppy Targets                                                      99
         Hard Disk Targets                                                   99







                                            8






```
{% endraw %}

## COVER.DOC

{% raw %}
```






                                  User Documentation
                                         for

                          The CONSTITUTION Notebook Program

                        Copyright 1989 - 1992 by TCNbP Company

                               Shareware Version  1.22




















































```
{% endraw %}

## DISKROOM.DOC

{% raw %}
```






     EFFICIENT UTILIZATION OF DISK SPACE

     This file contains information about efficient disk space utilization with
     The CONSTITUTION Notebook Program.  Tips for saving space on 5-1/4"
     floppies, 3-1/2" floppies, and fixed (hard) drives are provided.


     5-1/4" Floppy Tips

     With version 1.22, you can delete the GO.EXE file.

     You can also make another copy of the Index (Main) Diskette (2 of 4) and
     delete some of the seminar directories on each of them.  The seminar
     directories have a path name "VERSION1\SMNR#" where # is an Arabic numeral
     between 1 and 6, inclusive.  You can put 1 - 3 on one diskette and 4 - 6
     on the other.  Do NOT delete the same seminar from both diskettes.  When
     you access the various seminars, the swap index diskette prompt will be
     repeated until you get the right diskette in the floppy drive.

     NOTE:  The information in the preceding paragraph is for the benefit of
     those users who have no fixed drive or a very crowded one.  TCNbP Company
     recommends a hard drive for use of the TCN program beyond evaluation.


     3-1/2" Floppy Tips

     You can delete the GO.EXE file from your working copy.  Restore it from
     your original if you ever need it.

     You can copy the HELP.TCN, HELPINDX.TCN files to other floppies and erase
     them from your working copy.

     You now have more available room on diskette 1.  You can fill it up, but
     you'll have to do a LOT of work.


     Hard Disk Tips

     About all hard disk users can do is erase GO.EXE from the directory you
     installed to on the fixed disk.



     DETAILED INFORMATION ABOUT DISK SPACE REQUIREMENTS


     A full disk error is a fatal error.  You will get kicked out of the
     program.  Depending on what file is being saved when a disk gets full, you
     could lose all your subject cross references or all your synonym cross
     references including notes in a seminar.  The program provides no warning.
     You have to manually monitor available space on a diskette to make the


                                         93












     appropriate decisions.  The following information tells you what you need
     to know to prevent loss of data resulting from a full disk error.

     The Simple Rule

     A simple rule to follow regarding diskette use is 1 version or portion per
     360 K 5.25 inch diskette, 2 per 720 K 3.5 inch diskette, or 3 per 1.44 M
     3.5 inch diskette.  This rule will always work.  It results in decent
     diskette utilization (better than 50% if version includes complete text of
     Constitution) while leaving adequate room for additional comments and
     cross references that you generate manually.

     If you are analyzing small portions of the text of the Constitution, you
     may wish to place more than one version or portion on a diskette.  There
     is an absolute limit of 9, 18, or 36 such portions per 360K, 720K, or 1.44
     M diskettes, respectively.  Placing this number of portions on each size
     diskette leaves very little room for exported files, or for additional
     comments and cross references that you generate manually.  Practical
     maximums are 4, 12, and 27.


     When to Check Space Left on Floppies

     The above guidelines give you a good way to estimate the number of
     diskettes you will need over the life of this program.  There are two
     times that more specific information should be considered.  One of these
     times is before you analyze a version or portion of the Constitution using
     Main Menu option 10.  Another time is before creating another seminar or
     adding a lot of notes.


     What You Need to Know

     The specific information that you need is the amount of unused space on
     the diskette.  If the diskette has just been formatted and no data is
     saved on it, the amount of unused space is equal to the capacity of the
     diskette.  Otherwise, you can use the DOS DIR command (or a disk status
     information feature of your desk top software) to obtain this information.


     Absolute Minimum Required Space

     If the diskette has less than 40,000 bytes available, there is no way you
     can save the output produced by Main Menu option 10 on it.  Don't even
     try.  Even if you are analyzing a portion of the Constitution with only
     one sentence in it, this much disk space is required.  


     Estimation of Additional Space Requirements




                                         94












     To estimate additional space required by larger portions of the
     Constitution, determine the size of the source file using the DOS DIR
     command (or a related feature of your desktop), and double the size.  This
     is the additional space.  To determine total estimated space, add the
     doubled size to 40,000.  This number is an absolute minimum.  To give
     yourself a little working room, add 20,000.  If the diskette has less
     space than this, clear off some space by deleting unrelated files
     including exported files, if any, (don't delete files with the file type
     .lex or .lxx), or use another diskette.


     Sample Space Calculation

     Example calculation using USACONST.DOC with a size of 51,352 bytes.

        40,000   absolute minimum
       104,000   2 times 51,352 (rounded up to 52,000)
        20,000   working room
         -----------
       164,000   minimum practical space required.



     Space Requirements for Seminars

     Concerning notes and seminars, 20,000 bytes is the minimum practical space
     to open a new seminar.  Additionally, allow 1,000 bytes of disk space for
     each 20 lines of notes that you estimate you will write.


     Consequences of a Disk full Error

     Remember, a disk full error is a fatal error.  It can result in the loss
     of a considerable amount of work.  It is up to you to manually monitor the
     available disk space to prevent this error.  This is a simple check that
     can be performed from DOS or your desk top before starting the program.
     If you are generous with spare space, you can prevent this error with
     occasional checks.


     Summary

     The purchased materials require about 1.5 Megabytes of disk space install.  

     If you intend to analyze different versions, additional space is required.  

     The files generated by the program as a result of analyzing the
     Constitution occupy 40 Kilobytes of disk space (minimum, even if the
     portion or version consists of one word) to 164 Kilobytes (worst case,
     unless amendments are added).



                                         95












     If you don't write very many notes, the disk space used by the cross
     reference functions is nominal.  Each line of notes requires 41 bytes of
     disk space.  (This holds even if the entire line is blank and even if it
     was created using the down arrow key.  Don't worry, the PG DN key will not
     create blank lines.)  Once a line has been created, it's there whether it
     was created by wrapping from a previous line or with the down arrow key.
     That 41 bytes of disk space is forever taken.  If you don't enter a line,
     no disk space is used.

     You can enter 190 lines per subject or synonym.  This is a maximum of 8
     Kilobytes per subject or synonym.  You can enter up to 200 subjects or
     2,000 synonyms. Hence, if you type in the maximum allowed notes for 45
     subjects or synonyms, you can exceed the capacity of a 5.25 inch diskette
     forcing you to use a fixed drive.  The same thing happens at 90 subjects
     with maximum notes for a 3.5 inch diskette.  In practice, this is a lot of
     notes and most users will not encounter this limit.





































                                         96






```
{% endraw %}

## EDITOR.DOC

{% raw %}
```






   COMMENT EDITOR

   This file contains information about the comment editor for Main Menu
   options 4 and 5, Subjects and Synonyms, respectively.  The comment editor is
   the part of The CONSTITUTION Notebook Program that lets you type in your
   thoughts concerning interpretation of the Constitution.  Your comments can
   be typed in the rightmost column of the secondary screen for Subjects.  Your
   comments for Synonyms are entered in the rightmost column of the Synonym
   screen.



   Accessing the Comment Editor

   Accessing the Comment Editor is slightly different for Subjects and
   Synonyms.  A procedure for each follows.


   To access the Comment Editor for Subjects, proceed as follows:

        1)  Select Main Menu option 4.

        2)  Access a topic.  (Highlight a selection and press ENTER.)

        3)  Press the TAB key until the flashing cursor appears in the top left
        corner of the rightmost column of the screen.


   To access the Comment Editor for Synonyms, proceed as follows:

        1)  Select Main Menu option 5.

        2)  Access a topic.  

            a)  Press the TAB key once.  The highlighting moves to the second
            column.

            NOTE:  If the Highlighting does not move to the second column, it
            is because no Synonym headings have been created.  To create a
            Synonym heading, select a word of interest in the left column and
            press ENTER.  Then start at step a.

            b)  Highlight the desired heading.

            c)  Press ENTER.

        3)  Press the TAB key until the flashing cursor appears in the top left
        corner of the rightmost column of the screen.





                                         82












   Exiting the Comment Editor

   To exit the Comment Editor, press the TAB key or the ESC key.  In either
   case, the flashing cursor disappears from the rightmost column and
   highlighting appears in the leftmost column.

   NOTE:  On older computers, a delay up to 15 seconds can occur when you exit
   the comment editor.  This delay is normal for the TCN program.  Your
   computer is not locked up.  This delay never occurs when you only browse
   comments without making changes.  It occurs as a seminar gets full of
   comments.  If you add or delete one or more lines of comments in one of the
   first titles (as determined by where it is displayed) in the list of titles,
   the delay is most pronounced.



   Using the Comment Editor

   The following material describes modes of the Comment Editor and actions of
   the various keys.

        The Comment Editor operates in an insert mode or a strikeover mode
        controlled by the INSERT key.  An underline cursor indicates insert
        mode.  On most computers strikeover mode is indicated by a rectangular
        cursor.  On some computers, the strikeover cursor is a line at the top
        of the letter and another line at the bottom of the letter.

        Each letter you type appears where the cursor is and the cursor is
        moved to the right one space or to the next line.

        In the insert mode, when you type a character, text beginning at the
        cursor and the cursor itself moves one space to the right and the
        character you typed appears where the cursor was.  When appropriate,
        words are wrapped to the next line and the cursor moves to the next
        line.

        In the strikeover mode, when you type a character, the character you
        type replaces whatever was there and the cursor moves to the right one
        space or to the next line.

        If you press the ENTER key in the insert mode, a new line is created
        with text at and to the right of the cursor on it.  If the line is not
        wrapped properly, place the cursor past the end of the last word on it
        and press the DELETE key.

        If you press the ENTER key in the strikeover mode, the cursor is moved
        to the beginning of the next line.  If you press the ENTER key while
        the cursor is on the last line of your comments, a new line is created.





                                         83












        To delete a character in either mode, place the flashing cursor under
        the character and press the DELETE key.  Use the BACK SPACE key to
        erase the character to the left of the cursor.

        To delete a blank line in either mode, place the flashing cursor
        anywhere on the line and press the DELETE key.  If the last line of
        your comments is a blank line, it cannot be deleted.

        To control the position of the flashing cursor without typing text, use
        the HOME, END, PG UP, PG DN, and the cursor movement (arrow) keys.

        Until you enter comments for a topic, only the ENTER key, the right
        arrow key and the down arrow cursor keys will move the cursor.

        If you have two or more lines of comments (even if they are blank), the
        HOME key and the END key will move the flashing cursor to the first and
        last line, respectively, of your comments.  The column is not affected
        with the END key.  The HOME key moves the flashing cursor to the first
        character in the first line.

        If the flashing cursor is not in the first column of the first line,
        the left arrow key (or CTRL-L combination) will move the cursor to the
        left one space or up one line.

        If the flashing cursor is not on the first line of comments, the up
        arrow key will move the cursor toward the first line one line at a
        time.  The cursor stays in the same column.

        Until you have 14 or more lines of comments, the PG UP key and the 
        PG DN key have no effect.

        Once you type 14 or more lines, the PG UP key will move the text 13
        lines toward the first line.  If the first line of comments is on the
        screen, the PG UP key has no effect.  The cursor stays in the same
        column on the same line of the screen.

        Once you type 14 or more lines, the PG DN key will move the text 13
        lines toward the last line.  If the last line of comments is on the
        screen, the PG DN key has no effect.  The cursor stays in the same
        column on the same line of the screen.


   Suggestions for Content of Your Comments

   While the cross referencing functions of The CONSTITUTION Notebook Program
   limit you strictly to internal parts of the Constitution, the Comment Editor
   does not so restrict you.

        In your comments, you can interpret indexes related to the current
        topic.



                                         84












        You can cite other topics indexed in the same seminar.

        You can cite other topics indexed in different seminars.

        You can cite topics indexed in other versions or portions of the
        Constitution.

        You can cite relevant Court cases or Supreme Court cases.

        You can cite titles, authors, and pages of relevant research material.



   Saving Your Comments

   To save your comments, press the ESC key until the Main Menu appears.  If
   desired, you can access your comments again for further editing.  Do not
   turn your computer off after entering comments until you exit from The
   CONSTITUTION Notebook Program using Main Menu option 1.  If you do, results
   are unpredictable.


   Printing Your Comments

   To print your comments, press the TAB key as required to highlight the title
   of your topic and press the F7 key.  Your comments are printed following the
   title of the topic, the list of related words, and the list of indexed
   phrases.



   Exporting Your Comments

   To export your comments, press the TAB key as required to highlight the
   title of your topic and press the F5 key.  Prepare the appropriate disk
   drive if exporting to a floppy drive; enter a drive specifier, path,
   filename and extension and press ENTER.  Your comments are exported to the
   file you specified. The format of the export file is the same as the
   printout obtained using the F7 key as described in the preceding procedure.
   That is, your comments follow the title of the topic, the list of related
   words, and the list of indexed phrases.

   When accessing the exported file with a word processing application, specify
   carriage return at the end of lines if prompted for this information.

   If you erroneously press the F5 key, press the ESC key to exit without
   exporting a topic.  Control of the program resumes with the highlighting on
   the title of your topic.





                                         85






```
{% endraw %}

## EVAL.DOC

{% raw %}
```





     EVALUATION MATERIALS

     The following materials contain information and exercises to help you
     evaluate the TCN program.

     EVALUATION MATERIALS                                                     1
     GENERAL                                                                  1
          PARSE ENGINE . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
          NOTEBOOK FUNCTIONS                                                  2
          LEXICOGRAPHY FUNCTIONS                                              2
          MISCELLANEOUS FUNCTIONS . . . . . . . . . . . . . . . . . . . . . . 3
     EVALUATION EXERCISES                                                     3
     ON-SCREEN EXERCISES                                                      3
     CROSS REFERENCING EXERCISES                                              3
          Cross Reference Exercises for Synonyms . . . . . . . . . . . . . .  4
          Creating a Synonym Heading                                          4
          Now to access the heading . . . . . . . . . . . . . . . . . . . .   5
          Deleting cross references to all occurrences of a word . . . . . .  7
          Now to cross reference a specific occurrence of a word              7
          Deleting a reference to a specific occurrence of a word . . . . . . 8
          CREATING A SUBJECT HEADING . . . . . . . . . . . . . . . . . . . .  9
          A Timely Exercise                                                   9
     CONTINUING YOUR EVALUATION . . . . . . . . . . . . . . . . . . . . . .  10
     Continuing Evaluation of the Notebook Function                          10
          Review of Provided On-Screen Comments                              10
          Producing Your Own Comments . . . . . . . . . . . . . . . . . . .  11
     Lexicography Functions                                                  11
          Word and Clause Profiles                                           11
          Parameter Searches                                                 11
          Vocabulary Lists                                                   11
     Parse Engine . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
     Registration                                                            12
     Continuing Your Study of the Constitution . . . . . . . . . . . . . . . 13



     GENERAL

     The TCN program has 14 options on the Main Menu that can be grouped as
     follows:

          1.  Parse engine

          2.  Notebook functions

          3.  Lexicography functions (analysis based on word complexity or use)

          4.  Miscellaneous

     A brief description of each group follows.





                                            1










     PARSE ENGINE

     Main Menu option 10 is the parse engine.

     You don't have to know anything about the parse engine at this point
     except that it exists.  It is provided with the TCN package so you can
     update your package if the Constitution is amended.  It is discussed here
     to support the descriptions of the notebook functions and the lexicography
     functions.

     For input, the parse engine uses an ASCII file that contains the text of
     the Constitution.  Preparation of this file is covered in MM10.DOC and
     USATEXT.DOC.  So you can begin evaluating the TCN program without learning
     all that material, 3 complete sets of parse engine output are provided
     with this evaluation copy of the TCN program.

     The output of the parse engine includes encrypted files that contain the
     text of the Constitution and an exhaustive index of every word.  The
     notebook functions use this part of the parse engine output.

     Other output produced by the parse engine is used by the lexicography
     functions.




     NOTEBOOK FUNCTIONS

     Main Menu options 2, 3, 4, and 5 are the notebook functions.  These are
     the functions that lend the word "Notebook" to the title of the TCN
     program.  You can use the notebook functions to:

        1.  Review provided comments about the Constitution and rights.

        2.  Modify, output (to ASCII file or printer), or delete provided
        comments about the Constitution and rights.

        3.  Create, review, modify, output (to ASCII file or printer), or
        delete your own comments about the Constitution and rights.

     The TCN program's interactive search and indexing features are part of the
     notebook functions.

     The notebook functions are introduced by exercises in this file.


     LEXICOGRAPHY FUNCTIONS

     Main Menu options 6, 7, 8, 9, 11, and 13 are the lexicography functions.
     You can use the lexicography functions to:

        1.  Review or output (to ASCII file or printer)

            word profile data

                                            2










            clause profile data

            vocabulary lists

        2.  Review, edit, or output (to ASCII file or printer) syllable data

        3.  Review or output (to ASCII file or printer)

            lists of WORDS that fit user specified lexicography parameters

            lists of CLAUSES that fit user specified lexicography parameters

     MISCELLANEOUS FUNCTIONS

     Main Menu options 1 and 14 are miscellaneous functions.  Main Menu option
     1 lets you exit the TCN program.  Main Menu option 14 tells you how to
     register the TCN program.


     EVALUATION EXERCISES

     The following materials contain a battery of exercises to introduce you to
     the notebook functions of the TCN program.

     ON-SCREEN EXERCISES

     A set of on-screen exercises is part of the TCN program itself.  These
     exercises are intended to help you get started with the program.  To
     access the on-screen exercises, proceed as follows:

     1)  Start the TCN program as described previously.

     2)  When the Main Menu appears, type 4 and press ENTER.

     3)  Notice that the title 'Exercises' is highlighted.

     4)  Press ENTER.

     5)  Press the TAB key twice and scroll through the exercises using the
         PG UP, PG DN, HOME and END keys.  Try some of the things the exercises
         suggest.



     CROSS REFERENCING EXERCISES

     Generally, cross referencing procedures are analogous for synonyms and
     subjects.  The four major steps are:

          1)  Create a heading, if it does not already exist.

          2)  Access the desired heading.

          3)  Review the heading while adding or deleting related references or
          comments.
                                            3











          4)  Exit to the Main Menu to save changes.

     Steps 3 and 4 are identical for subjects and synonyms.  Steps 1 and 2 are
     analogous, but not identical.  The on-screen exercises have taken you
     through step 2 and the review portion of step 3 for subjects.  The
     following exercises take you through all 4 steps for synonyms.  Following
     that, a final exercise shows you how to create a subject heading.

     Specific procedures for subjects and synonyms are contained in files
     MM4.DOC and MM5.DOC, respectively.



     Cross Reference Exercises for Synonyms

     If you have just performed the on-screen exercises, you have to get the
     default seminar to begin this exercise.  The following steps do that.
     They are not required steps in typical cross referencing procedures.

          1)  Select option 3 from the Main Menu.

          2)  Press the HOME key to highlight the top seminar, Sample Subjects
          and Synonyms Cross References.

          3)  Press ENTER.

     Ok, we are back at the Main Menu now ready to begin the synonym cross
     referencing exercise.  The following steps create a heading for the word
     Power.  Other parts of the exercise will cross reference synonyms to the
     word power as used in the Constitution.  As an introduction to the
     comments editor, you will be provided with a question to type in.


     Creating a Synonym Heading

          1)  Select option 5 from the Main Menu.

          NOTE:  On 2 of the lowest lines of the screen just above the function
          key mnemonics, messages appear to advise you what functions are
          available.  Note these messages as you go through the procedure.
          They will help you operate the program without documentation.

          2)  When the SYNONYMS screen appears, press the F6 key.

          3)  Type the word power and press ENTER.

              Notice the words power, Power, Powers, powers at the top of the
              left column.  You are already familiar with use of the F6 key
              from the on-screen exercises.

          4)  Using the up or down arrow keys, highlight the word Power,
          singular, initial capital letter.

          
                                            4










          5)  Press ENTER.

              Notice that the word Power is inserted above the word rights in
              the middle column.  Its placement is explained in MM5.DOC.  The
              heading is now created.


     Now to access the heading . . .

          1)  Press the TAB key once.

              Notice the highlighting is removed from the left column and now
              appears in the middle column.

          2)  Using the up and down arrow keys, highlight the word Power in the
          middle column.

          3)  Press ENTER.

              Notice the list of words in the middle column disappears and the
              title block over the middle column changes.  The highlighting is
              removed from the middle column and now appears in the title block
              of the middle column.

              The heading is accessed.  In this exercise, we accessed the
              heading immediately after creating it.  This is perfectly ok, but
              it is not required.  You can do other things first if you want
              to.

     Now to cross reference some phrases . . .

          1)  First, press the F2 key.

              Don't be alarmed by the blank screen.  When F2 is pressed while
              the heading in the title block is highlighted, all cross
              referenced phrases are displayed.  Since you haven't cross
              referenced anything yet, a blank screen shows exactly what is
              cross referenced.

          2)  Press the ESC key to get the SYNONYMS screen back.

          3)  Press the TAB key once and notice it goes into the comments
          column.  It skips the middle column since the middle column is
          presently empty.

          4)  Press the TAB key and notice the highlighting returns to the left
          column.  If you are following this exercise exactly, the word Power
          is highlighted.  The program keeps track of this sort of thing for
          you.

          5)  Press ENTER.

              Notice the word Power appears in the middle column.  But isn't
              that what already happened?  Well, yes and no.  To see the
              difference . . .
                                            5











          6)  Press the TAB key once.  The highlighting moves to the title
          block of the middle column.

          7)  Press F2.  Hey, no blank screen this time!

              All occurrences of the word Power are now cross referenced as
              synonyms to the heading Power.  Of course, any word can be
              considered a synonym to itself.  So doing this is ok, but it is
              not required.  You identify synonyms to the program; it does not
              find them for you or even give you hints.

          8)  Press the ESC key to get the SYNONYMS screen back.

          9)  Press the TAB key once and notice where it goes.

          10)  Press the TAB key again and type, "How does the use of the word
          Power in the US Constitution compare or contrast with the use of the
          word rights therein?"  Congratulations!  You've just entered comments
          using the comments editor.  More information about it is contained in
          the file EDITOR.DOC.  (You can access that file using the help on
          help feature at the Main Menu.)

          11) Press the TAB key and notice the highlighting back in the left
          column.

          12) Using the up and down arrow keys, highlight the word power,
          singular, lower case.

          13) Press ENTER.

              Notice that power now appears in the middle column.

          14) Highlight Powers and press ENTER to cross reference all
          occurrences.

          15) Highlight powers and press ENTER to cross reference all
          occurrences.

          16) Using the F6 key, find the word authority in the vocabulary list.
          This word is being sought out because it is suspected of being a
          synonym for the word power.

          17) Highlight Authority and press ENTER to cross reference all
          occurrences.

          18) Highlight authority and press ENTER to cross reference all
          occurrences.

          19) Press the TAB key once.

          20) Press F2 to view cross referenced phrases.  Notice the order.
          Optionally, scroll using the PG UP, PG DN, HOME, or END keys.


                                            6










          21) Press F3 to view cross referenced text.  Left and right arrow
          keys move you among cross referenced portions of text.

          22) If you performed step 20 or 21, press the ESC key to get the
          SYNONYMS screen back.

     Ok, now that you have added cross references, you are ready to delete a
     few.  It is useful to be able to delete cross references if you change
     your mind or if you make a mistake.

     As with adding cross references, you can delete the cross references to
     all occurrences of a word with just two keystrokes.  But you don't have to
     add or delete them all.  In the following exercises you will first delete
     the cross references to all occurrences of a word.  Then you will add a
     cross reference to one occurrence of a word.  Then you will delete a cross
     reference to a single occurrence of a word.


     On with the next exercise, 



     Deleting cross references to all occurrences of a word . . .

          1)  Press the TAB key once to place the highlighting in the middle
          column (not in the title block).

          2)  Highlight the word Powers, plural, initial capital letter.  (Use
          up and down arrow keys as needed.

          3)  Press the F4 key.

              Notice prompt that appears a bottom left side of screen.

          4)  Type the letter Y (no need to press ENTER).

              Notice that the word Powers disappears from the middle column.
              But this is not all that has happened.

          5)  Press the TAB key 3 times to highlight the title block.

          6)  Press the F2 key.

              Notice that no phrases containing the word Powers are displayed.

     This is the process to delete cross references to all occurrences of a
     word.

          7)  Press the ESC key to get the SYNONYMS screen back.

     Now to cross reference a specific occurrence of a word . . .

          1)  Press the TAB key three times to move the highlighting to the
          left column.

                                            7










          2)  Using the F6 key and the up and down arrow keys, highlight the
          word Powers.

          3)  Press F2.

          4)  Using the up and down arrow keys, highlight any of the displayed
          phrases that you choose.  Make a note of the reference at the left
          side of the screen.

          5)  Press ENTER.

              It doesn't look like much happened but it did.

          6)  Press the ESC key to get the SYNONYMS screen back.

              Notice that the word Powers is back in the middle column.  But
              that's not all.

          7)  Press the TAB key once to highlight the title block of the middle
          column.

          8)  Press F2 and look for the reference you noted in step 4.  You
          might have to use the PG UP or PG DN scroll keys.  There's your
          phrase.

     9)  Press the ESC key to get the SYNONYMS screen back.


     Deleting a reference to a specific occurrence of a word . . .

     1)  Press the F2 key.

     2)  Using the up and down arrow keys, highlight a phrase, any phrase.

     3)  Press the F4 key.

     4)  Type a Y.

         The phrase is gone.  You saw it happen.

     5)  Press the ESC key to get the SYNONYMS screen back.


     NOTE:  You've done a lot of work.  Before saving it, you might want to go
     back and re-cross reference all occurrences of the word Powers (not to
     mention the single cross reference you just deleted) in order to be able
     to complete the exercise you so thoughtfully typed in the comments column.
     Whatever you decide to do about that, no doubt you will be happy to know
     that when you press the ESC key twice, your work is saved on disk and you
     are returned to the Main Menu.





                                            8










     CREATING A SUBJECT HEADING

     The procedure to create a subject heading is as follows:

          1)  Select option 4 from the Main Menu.

          2)  When the primary SUBJECTS screen appears, press the F8 key.

              Notice that a blank highlighted line appears at the end of the
              list of subjects.  But the title is not complete yet.

          3)  Type in up to 60 letters and numbers to form a meaningful title.

              Now the title is created and complete.

              To access it, just press ENTER anytime it is highlighted,
              including right now.  After you access it, cross references are
              created in exactly the same manner that was shown for synonyms.

              You cannot delete a subject heading from the primary screen.  To
              delete it, access it and proceed to the secondary screen.  Press
              the TAB key once to highlight the heading on the 3rd line, press
              F4 and type a Y.  You are returned to the primary screen and the
              heading is gone.

              If you do not delete the heading, it is automatically saved on
              disk when you return to the Main Menu.


     A Timely Exercise

     During a recent event, the issue addressed in this exercise became
     relevant.  The question arose, "Are supreme court justices appointed for
     life?"  What does the Constitution have to say on this matter?

     Aha!  You have the TCN program.  It has an interactive search feature.
     But to use it, you have to know what words to look for.  However, the
     vocabulary list provides a source of exact search words.  BUT (!!!), those
     lists are almost 1400 words long!

     You could search the entire list of words for promising search key words.
     And if you have absolutely no idea about what is in the Constitution,
     that's exactly what you will have to do.  BUT(!!!), if you have absolutely
     no idea about what is in the Constitution, how likely does it appear that
     you will be able to spot pertinent search key words or recognize the
     relevant text?


     To illustrate the intended point, can you answer the following question:

     Is the issue of the length of terms for supreme court justices even
     addressed in the Constitution?  Yes or No.



                                            9










     If you answered yes, in what Article of the Constitution would you expect
     to find the answer?  Is it in the original document? . . . the Bill of
     Rights, maybe? . . . or in amendments 11 - 26?  

     Enough.  Happily, in this case, TCNbP company will provide you with
     relevant search words and leading questions.  The key words are:

        Behaviour, 
        Impeachment
        Impeachments.  

     The questions are, 

        "Does the Constitution explicitly state that supreme court justices are
        appointed for life?"

        "Does the Constitution explicitly exempt supreme court justices from
        impeachment?"

     By now, you should be able to use the key words to find and index the
     relevant phrases.  And you should be able to use the comment editor to
     type in the preceding questions and your answers to them.

     And this is what the TCN program was designed to do.

     What the TCN program cannot do is ask the question.  To ask the question,
     you must have some idea about what is in the Constitution.  Having the TCN
     program is no substitute for that awareness.  Acquiring that awareness is
     your responsibility.


     This completes the provided EVALUATION EXERCISES.



     CONTINUING YOUR EVALUATION

     The foregoing exercises have demonstrated:

          How to move around in the notebook functions of the TCN program. 

          How to use the interactive search and indexing functions.

     However, your evaluation of the TCN program is not complete.  Neither is
     your study of the United States Constitution.


     Continuing Evaluation of the Notebook Function

     There are a few more things you can do with the notebook function.

          Review of Provided On-Screen Comments

          On-screen with the the US Constitution under this evaluation copy of
          the TCN program are five historically significant documents that
                                            10










          address rights of the human individual.  These documents are
          presented in 180 (or so) paragraph-sized segments in five seminars.
          Along with many of these paragraphs from other rights documents,
          TCNbP Company has provided comments and has indexed a few related
          phrases from the US Constitution.

          Now that you know how to navigate using the notebook functions of the
          TCN program, review some of these provided comments.  In all, TCNbP
          Company provides approximately 20,000 words of comments.

          Producing Your Own Comments

          If you have some issue of Constitutional interpretation in mind, try
          using the interactive search of the TCN program to find relevant
          phrases.  After searching, create a relevant heading and compile any
          relevant phrases under it using the indexing features of the TCN
          program.  Add a few comments that come to mind.

          If you don't find any related phrases, make a heading and type in
          some comments under it.  Mention events that raised the question you
          have in mind.  List search words you tried.  Note whether you found
          the search words you were looking for.  Note why you decided any
          phrases found were not related to the question.

     Lexicography Functions

     Then, in addition to the notebook functions covered in the evaluation
     exercises, there are the lexicography functions.


          Word and Clause Profiles

          Main Menu options 8 and 9 provide profiles of vocabulary and sentence
          complexity.  Calling up the various profiles is easy enough.
          Interpreting the profiles is another matter.  The profiles contain
          raw data.  Whether you use them and how you interpret them is up to
          you.


          Parameter Searches

          Main Menu options 6 and 7 compile lists of words or clauses that fit
          user specified lexicography parameters.  These functions require more
          input than just a menu number.  The user documentation helps.


          Vocabulary Lists

          Perusing the vocabulary lists available under Main Menu option 13
          could prove interesting.  Call up the help and browse the related
          user documentation for information about each list.




                                            11










     Parse Engine

     You might want to try the parse engine.

     This evaluation copy of the TCN program comes with 3 complete sets of
     parse engine output.  The provided evaluation exercises used the default
     set of output.  Before running the parse engine, you ought to have a look
     at the other two sets.

     Use Main Menu option 2 to access the other set of output, called a version
     or portion.

     There are no comments provided with the other portions.  However, the
     lexicography profiles are there.  Have a look.  They give one example of a
     reason to use the parse engine.

     Then read or print out the files USATEXT.DOC and MM10.DOC.  Use help on
     help to print out USATEXT.DOC.  Call up help for Main Menu option 10 and
     press F3 to browse MM10.DOC.  While browsing it, press F7 to print it out.

     To run the parse engine, prepare an ASCII file according to USATEXT.DOC.
     Then refer to MM10.DOC for instructions about the parse dialogue.


     Registration

     Is the TCN program useful?

     Sure it is.

     But is it useful to you?

     Possibly not.

     (Embarrassed silence interrupted at intervals by sounds of throat
     clearing)

     No need for all that.  If the TCN program does not appear to be useful to
     you, simply clear it off your hard drive and pass the trial diskettes on
     to someone else or format them so they can be useful to you.

     But if the TCN program is useful to you and you continue to use it (either
     sporadically or regularly), please register.  See Main Menu option 14 for
     fees and benefits.











                                            12










     Continuing Your Study of the Constitution.

     The evaluation exercises demonstrated the strengths of the TCN program.

     Limitations of the TCN program were also demonstrated.  Some of these
     limitations were limitations not only of the TCN program, but limitations
     also of any computer program (and any computer for that matter).

     The TCN program cannot ask a question.

     The TCN program cannot become concerned about its rights and neither can
     the computer it runs on.

     The computer it runs on cannot experience happiness, so why would it ever
     pursue it?

     But the individual who operates the computer CAN experience happiness.

     And that person is probably actively involved in the pursuit of happiness
     every waking moment.

     And that person must be concerned with the possibility of undue
     interference with legitimate activities involved in that pursuit.

     And that person must be concerned with the legitimate limits of activity
     involved in that pursuit.

     And out of these concerns arise the questions about rights.

     And out of these concerns arise questions about the legitimate limits of
     government powers and the proper exercise thereof.

     The TCN program can help you find what the Constitution has to say
     regarding such questions.

     If you find segments of the Constitution related to such questions, the
     TCN program can help you organize what you find and store it for future
     reference along with your comments about what you did or did not find.

     But it is up to you to ask the question.

     And it is up to you to decide whether the policies, procedures and
     activities of officials are in keeping with the Constitution.

     And it is important for every Citizen to ask these questions and make the
     judgments.

     The Constitution contains a guarantee to provide a Republican form of
     government to every state.  With the active participation of the private
     Citizenry, this guarantee IS fulfilled.  Without it, that guarantee CANNOT
     be fulfilled.

     And what has been said here concerning the Constitution's guarantee of a
     Republican form of government is also true of every guarantee the
     Constitution contains.
                                            13











     For the guarantee to be fulfilled, the Citizenry must participate.

     To participate, to ask relevant questions and make reasonable judgments,
     each Citizen must know at least what is written in the Constitution.

     Whether or not you continue to use the TCN program, please continue your
     study of the Constitution.

     Thank you for trying The CONSTITUTION Notebook Program.













































                                            14





```
{% endraw %}

## FUNCKEYS.DOC

{% raw %}
```






     FUNCTION KEYS


     F1 Help.  

     The TCN program features help-on-help, help at the Main Menu, and context
     sensitive help.  At the Main Menu, press F1 to get help-on-help.  Or type
     the number of a Main Menu option and press F1 to get help related to that
     Main Menu option.  At other times, press F1 to get context sensitive help.
     When help is displayed, you can browse or print related information by
     pressing F3 and then F7.


     NOTE: F2 - F6 have special mnemonics for Main Menu option 14.  These
     mnemonics are self explaining.  They are not described in this file.


     F2 Function Key.

     The F2 function key has the mnemonic "INTRO" at the Main Menu.  At other
     times it has the mnemonic "CONC".

     "INTRO" is an abbreviation for introduction.  When "F2 INTRO" is
     displayed, press F2 to view an introduction to the TCN program.

     "CONC" is an abbreviation for concordance which is a compilation of
     phrases that contain a common word.  When you press F2, a list of phrases
     is displayed.  A reference is displayed for each phrase at the left of the
     screen.  (For more information about this reference, see MM13.DOC.)  One
     word is highlighted in each phrase.  If you are working from a vocabulary
     list, the same word is highlighted in all the displayed phrases.  If you
     are working from a synonym or subject cross reference list, a different
     word may be highlighted in each phrase.  One phrase is highlighted.  The
     PG UP, PG DN, HOME, END, up arrow, down arrow keys can be used to
     highlight a desired phrase.  When working in synonym and subject cross-
     reference lists, you can operate on the highlighted phrase with the ENTER
     key or the F4 key.  If you press F3, the text of the Constitution is
     displayed with the highlighted phrase on the 4th line of the screen.
     (exception is when phrase within 4 lines of top of file or within 14 lines
     of end of file).


     F3 Function Key.

     The F3 key has the mnemonic "EVAL" at the Main Menu.  At other times, it
     has the word "Text" associated with it.

     "EVAL" is an abbreviation for evaluation.  When "F3 EVAL" is displayed,
     press F3 to print out evaluation instructions for the TCN program.  Have
     14 sheets of paper in your printer.  TCNbP Company strongly recommends



                                            19












     that all users take advantage of these materials to evaluate the TCN
     program.

     If you press F3 while a vocabulary list is displayed, the text of the
     Constitution is displayed with the first occurrence of the highlighted
     word on the fourth line of the screen (with exceptions noted previously).
     If the selected word occurs more than once, you can use the right and left
     arrow keys to move among the occurrences.  The left arrow key will not
     move you from the first occurrence to the last occurrence.  The right
     arrow key will not move you from the last occurrence to the first
     occurrence.  The PG UP, PG DN, HOME, and END keys are active while text is
     displayed using F3.


     F4 DEL.  

     DEL is a mnemonic for delete.  However, F4 is not used to delete
     characters.  F4 is used to delete seminars, subject headings, or cross
     references.  You always get a double check prompt when you press F4.  Type
     an N to exit without deleting anything.  What gets deleted depends on what
     is highlighted on the screen.  Take your time.  One keystroke can delete
     hours of work if a subject heading, synonym list heading, or a seminar
     title is highlighted.


     F5 Xport.  

     This key allows you to export some of the reports generated using this
     program.  You can use exported files with your own word processing or
     spreadsheet software applications.  You are prompted for a file name.
     Type in the drive specifier, path, file name and extension.  If you don't
     know what this means, refer to the manuals that came with your computer or
     other software.  To avoid erasing files generated automatically by this
     program, do not use .lex or .lxx as the extension.  As an added measure,
     set aside a separate diskette or directory specifically for the purpose of
     holding files created using the F5 key.  Content and format of the file is
     the same as what you get when you press the F7 key with a given field
     highlighted.


     F6 Find.  

     If you are in an alphabetically sorted vocabulary list, this key will get
     you within a few keystrokes of a specific word.  You can type the whole
     word if desired, but the first 3 or 4 letters of the word will get you
     close.  As a rule, don't use all caps.  Also, capitalizing or not
     capitalizing the first letter makes a big difference in some lists.  F6 is
     active when an alphabetical vocabulary list is selected (Main Menu option
     13, secondary menu options 3, 4, 5, 6, or 7) and Main Menu options 4, 5,
     6, 11, or 13 are in use.  To escape from F6 without performing a search,
     press ENTER without typing anything.


                                            20














     F7 Print.

     Use this key to produce hard copy printout of vocabulary lists, word
     concordances, synonym and subject cross references or profiles.  If F7
     doesn't print something, press the F10 key to turn off display of function
     key mnemonics and use the screen print function of your computer.  F7 will
     not produce hard copy of Constitutional text.  Use your word processor to
     do that with the provided Constitutional text files.


     F8 New.  

     Use this key to add a new seminar title or subject heading.  You must
     select option 3 or 4 from the Main Menu for this key to be active.  


     F9

     Not used.


     F10 TGKEY.  

     Turns display of function key mnemonics on or off with repeated presses.
     Default mode is keys displayed.  Press F10 to turn off display.  When
     desired, press F10 again to turn display of mnemonics back on.  Useful for
     screen prints if you do not want to have the function key mnemonics
     included in your output.























                                            21






```
{% endraw %}

## MAINMENU.DOC

{% raw %}
```






     MAIN MENU

     The Main Menu is the menu that is displayed when you start the program.

     It consists of 14 options numbered 1 through 14.

     To select an option, use the typewriter number keys (not the numeric
     keypad keys) to type the corresponding number and press ENTER.

     If you make a mistake, use the BACK SPACE key to erase it before pressing
     ENTER.

     A brief discussion of each option follows.


     Exit.  

     The exit option allows you to exit the notebook program without rebooting
     your computer.  Get in the habit of exiting the program with this option.
     To do so ensures that any notes you have made will be saved on disk.  For
     more information, see file MM1.DOC.


     Choose version or portion.

     Within limits, The CONSTITUTION Notebook Program allows you to parse any
     complete version or any portion of any version of the United States
     Constitution that you wish.  The files associated with one complete
     version of the Constitution and three portions of the Constitution are
     provided with the program.  The choose version or portion option allows
     you to indicate which version or portion of the Constitution you want to
     examine.  The information displayed about each version or portion is
     entered in the dialogue associated with Main Menu option 10 Analyze Source
     File.  To select a version or portion, scroll through the list displayed
     when you select option 2 until the entry for the desired portion or
     version is highlighted and then press ENTER.  The default selection is the
     complete version of the Constitution provided with the program.  To read
     the files associated with a selected version or portion requires up to 5
     minutes depending on the amount of text included as well as what kind of
     computer you have.  For more information, see file MM2.DOC.



     Choose Seminar.

     The notes (subject cross references, synonym cross references and related
     comments) that you compile for each version or portion can be organized in
     seminars.  The amount of notes you can store is limited mainly by disk
     space and a practical maximum of 40 seminars per version or portion.  This
     allows up to 80,000 cross-references, an adequate quantity for a document
     consisting of less than 10,000 words.  Subordinate to each seminar is a


                                            15












     set of subject reports and a set of synonym reports that you can generate
     and modify using this program.  For more information, see file MM3.DOC.



     Subject.

     This option allows you to collect references to words related to a heading
     you make up.  The references are generated by highlighting a word in a
     vocabulary list (to indicate every occurrence of that word in the
     Constitution is related to the heading) or by highlighting a phrase
     containing the word in a concordance-like display generated by function
     key 2 (to indicate that the highlighted occurrence is related to the
     subject heading).  References can be deleted in a similar fashion using
     the F4 key.  To select the desired subject, scroll through the displayed
     list until the desired subject is highlighted and then press ENTER.  The
     selected subject is then displayed for review, update, deletion, print
     out, or saving to disk.  New subjects are added by pressing the F8 key.
     To delete a subject, access it, press the tab key once and then use F4.  A
     simple editor allows you to compile comments related to each subject
     heading.  For more information, see file MM4.DOC.



     Synonym.

     This option allows you to collect references to words that are synonyms to
     other words in the Constitution.  The references are generated by
     highlighting a word in a vocabulary list (to indicate every occurrence of
     that word in the Constitution is considered to be a synonym) or by
     highlighting a phrase containing the word in a concordance-like display
     generated by function key 2 (to indicate that the highlighted occurrence
     is considered to be a synonym).  References can be deleted in a similar
     fashion using the F4 key.  To select the desired list of synonyms, scroll
     through the displayed list until the desired word is highlighted and then
     press ENTER.  The selected word is then displayed along with its cross
     references for review, update, deletion, print out, or saving to disk.  To
     indicate that a word has synonyms, highlight it in a vocabulary list and
     press ENTER.  To delete a word, access it and then use F4.  A simple
     editor allows you to compile comments related to each word with synonyms.
     For more information, see file MM5.DOC.



     Parameter Searches, Word.

     In this program, the term word refers to any group of letters and numbers
     between two blanks, a blank and a punctuation mark, or a punctuation mark
     and a blank.  This option allows you to compile lists of words based on a
     set of parameters that you enter on an interactive screen.  For example,



                                            16












     you could list all the 7-letter words that start with N if you so desire
     using this option.  For more information, see file MM6.DOC.



     Parameter Searches, Clauses.

     In this program, the term clause refers to all words occurring between any
     two punctuation marks.  You can list clauses that consist of a number of
     letters, words, and syllables in a specified range entered on an
     interactive screen.  This option can be used to compile clauses in terms
     of reading complexity.  For more information, see file MM7.DOC.



     Profiles, word use.

     Gives you access to profiles of word use by vocabulary and text according
     to letters, syllables, and number of times a word is used.  Another gauge
     of reading complexity.  Report is generated automatically during execution
     of Main Menu option 10.  Can be updated without performing Main Menu
     option 10 if new syllable data is entered using Main Menu option 11.  Can
     be printed out or exported (saved as soft copy) for edit.  For more
     information, see file MM8.DOC.



     Profiles, clauses.

     Gives you access to profiles of clause complexity by number of words,
     letters, or syllables.  Another gauge of reading complexity.  Report is
     generated automatically during execution of Main Menu option 10.  Can be
     updated without performing Main Menu option 10 if new syllable data is
     entered using Main Menu option 11.  Can be printed out or exported (saved
     as soft copy) for edit.  For more information, see file MM9.DOC.


     Analyze source file.

     Allows you to generate full compliment of output for a version or portion
     of the Constitution that you prepare.  For best results, run this option
     first, that is, before performing any other Main Menu option.  Re-start
     program if necessary to run this option first.  If you analyze two
     versions or portions back to back, re-start the program between the two.
     Certain rules must be followed concerning hyphenation and headings for
     amendments, sections and articles.  The first word in the file is
     critical.  Refer to MODIFICATION OF PROVIDED FILES CONTAINING
     CONSTITUTIONAL TEXT in the file USATEXT.DOC for more information.  Fixed
     drive operators can arrange input and output files any way desired. Floppy
     drive operators must observe a few constraints.  For more information, see
     file MM10.DOC.


                                            17












     Enter Syllable Data.

     Allows you to enter the number of syllables for any word in the vocabulary
     of the Constitution.  This option is provided in case the Constitution is
     amended resulting in new words being used for which syllable data is not
     entered.  Also, you may disagree with the number of syllables entered in
     the provided list.  You can change the number of syllables using this
     option.  Keep in mind that this is a master vocabulary being changed.  All
     profiles subsequently generated for any version or portion using options 6
     - 10 will use the data you enter.  For more information, see file
     MM11.DOC.


     Options.

     Allows you to indicate desired values for a series of options.  For more
     information, see file MM12.DOC.


     Choose Vocabulary List.

     Allows you to choose from a variety of vocabulary lists compiled for the
     selected version or portion during execution of option 10.  The
     subordinate menu is self explanatory.  The default list is number 3 on
     this menu.  For more information, see file MM13.DOC.


     Shareware Information.  

     Provides information related to shareware distribution of this version of
     The CONSTITUTION Notebook Program.  Includes amount of requested payment
     and contact information.  Information is contained in an encrypted file.
     On older, slower PCs, up to 45 seconds is required for decryption.  For
     more information, run the program and select Main Menu option 14.  File
     name MM14.DOC is not provided.


















                                            18






```
{% endraw %}

## MM1.DOC

{% raw %}
```






   MAIN MENU OPTION 1, EXIT


   Main Menu option 1 provides a way for you to exit The CONSTITUTION Notebook
   program to DOS or to your desktop without rebooting your computer.  By
   using this function, you assure yourself that all changes that you make to
   options, syllable information, subject references, or synonym references
   are saved to disk.

   To accomplish this, proceed as follows:

        1)  Upon completion of all desired functions, select Main Menu option
            1, exit.

        2)  At the 'Are you sure, Y/N?' prompt, type a Y.

            Execution of The CONSTITUTION Notebook Program ends and you are
            returned either to DOS or to your desktop, depending on how you
            have your computer set up.

            If you inadvertently select this function, type an N at the 'Are
            you sure, Y/N?' prompt to return to the main menu and continue
            using the program.






























                                            22






```
{% endraw %}

## MM10.DOC

{% raw %}
```






     NOTE:  For best results, perform Main Menu option 10 immediately after
     starting the program (before performing any other function).  If you use
     Main Menu option 10 on two files back-to-back, restart the program between
     the two files.  If you fail to do this, and the file that is analyzed is
     smaller than the selected version or portion or smaller than the
     previously analyzed file, subsequent attempts to display phrases and text
     near the end of a version or portion may result in errors.



     MAIN MENU OPTION 10, ANALYZING (PARSING) A SOURCE FILE


     This file contains information needed to parse a file using Main Menu
     option 10.  In addition to the task oriented instructions needed to
     complete the analysis dialogue, information of a general nature is
     included to guide you through the entire process.


     Major steps involved in analyzing a file are:


     1)  Source file preparation.

     The content of your source file depends on your objective for performing
     the analysis.  The source file is prepared using your word processor.
     Save your file in a mode that does not insert special codes in the file.
     Files in this format are generally described as ASCII files.  All provided
     files are such files.  Main Menu option 10 works fine with them.  Using
     Main Menu option 10 with files containing special codes (not ASCII) may
     produce unreliable results.  Refer to modification of source file for
     further information.

     Check your source file very carefully.  Once you analyze it, you are stuck
     with the results of the analysis.  You cannot delete it.  There is a
     practical limit of 30 (approximately) sets of output that can be
     accommodated by this program.


     2)  Diskette preparation.

     If you intend to save your output on diskette, or use the diskette drives
     to store your source file during the analysis, you must have the diskettes
     ready before you can start the analysis function dialogue.  As you proceed
     through the dialogue, the program checks your information against the
     diskettes in the drive.  This ensures that all required information is
     available.  If not, at least you haven't tied up your computer for the
     time required to parse the file for nothing.





                                            65












     Know what will be on each diskette and have the source file stored where
     you intend to parse it from before starting the program.  If need be,
     format a diskette or two and label it (them) first.

     If you are storing more than one set of output on a diskette, check the
     available space on the diskette that you will use to store your output.
     The program does not do this.  Be sure that the diskette has enough room
     for the automatically generated output files and enough room to store the
     amount of cross references and comments that you estimate you will
     generate.  For further information see DETAILED INFORMATION ABOUT DISK
     SPACE REQUIREMENTS in the file DISKROOM.DOC.

     If you are working on a computer that has only one diskette drive and no
     fixed drive, your source file must be stored on the same diskette where
     the output files will be stored.  This limits one diskette users to 1
     (maximum) analysis of the complete Constitution with all amendments per
     360 K 5.25-inch diskette.  There simply is not room for the source file
     and 2 sets of outputs.  After completing option 10, you can delete the
     source file from the diskette if need be to free up space.  The program
     does not use the source file except during option 10.


     3)  Analysis dialogue.

     The analysis dialogue begins after you select Main Menu option 10.  You
     are prompted for information in a series of prompts.  As you enter each
     item of information, the program checks the information against available
     files on diskette or the fixed drive.  If a problem is detected, prompts
     appear to alert you and give hints at solutions.  The  information entered
     during the analysis dialogue is used by the computer during analysis to
     locate required information and to decide where to store the output.
     Also, this information is saved for display during execution of Main Menu
     option 2.  You are provided an opportunity during the analysis dialogue to
     enter comments (60 characters).

     The analysis dialogue provides a measure of confidence that all required
     files are available before starting the actual analysis.  One thing that
     the dialogue will not detect is when single diskette users have the source
     file and output files on separate diskettes.  Remember, single diskette
     users with no fixed drive, the source file must be on the same diskette
     where you intend the output to be stored.  Otherwise, you will get a fatal
     error or totally erroneous output.  Another thing the program does not
     check is whether the Constitution file is on the Program Diskette.  NEVER
     do this.


     4)  Analysis.

     The program parses the file and generates 28 files that contain the
     indexes used to display and cross reference information.  The screen
     usually has something displayed on it to give you an idea that something


                                            66












     is happening so you can know that you computer is not locked up.  You
     might be prompted to insert the program diskette or the diskette with the
     source file.  If prompted to insert the program diskette (this prompt will
     not appear if you installed on a fixed drive), put the program diskette in
     the drive where you installed.  If you put it in another drive, the prompt
     will be repeated until you put it in the proper drive.  If prompted to
     insert the diskette with the source file, insert it in the drive that you
     indicated during the analysis dialogue.  If you put it in another drive,
     the prompt is repeated until you put it in the appropriate drive.

     If a message appears advising you to print the screen, a fatal error has
     occurred.  This is possible due to the wide variations occurring in user
     preparation of the source file.  If this happens, send your screen print
     out and a copy (on diskette) of your source file to the address provided
     by Main Menu option 14 for advice concerning a solution.



     Analysis Dialogue


     The same series of prompts is displayed for all diskette, diskette
     plus fixed drive, or fixed drive combinations during the analysis
     dialogue.  Depending on the combination of disk drives that you have or
     are using, your responses vary.  Each response is checked for validity
     before proceeding to the next prompt.  Each prompt is repeated until
     acceptable input is provided.  The following materials describe each
     prompt, valid responses and error correction for the analysis dialogue.


     1)  Source Text File Drive Specifier Prompt.

     You are prompted for the drive specifier that indicates on which drive
     the text source file will be stored during analysis.

         a)  Type an upper or lower case letter A - Z.

         b)  Press ENTER.

         The program checks to see if the drive you specified is available.
         A formatted diskette must be in the drive if a floppy is specified.

         If the drive is unavailable, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the drive is available, the next prompt appears.

     





                                            67












     2)  Source Text File Path Information Prompt

     You are prompted for the path on which the source file is stored during
     analysis.  A colon and backslash are automatically added to the drive
     specifier previously entered.

         a)  Type the rest of the path information.  If the source file is
         stored in the root directory, do not type anything.

         b)  Press ENTER.

         The program checks to see if the path you specified exists.

         If the path does not exist, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the path exists, the next prompt appears.


     3)  Source Text File Name Prompt.

     You are prompted for the file name of the source file.

         a)  Type in the source file name and extension.

         b)  Press ENTER.

         The program checks to see if the file exists on the path
         previously entered.

         If the file does not exist, an advisory message appears to that
         effect and solutions are given.  The prompt is repeated.

         If the file exists, the next prompt appears.


     4)  Output Drive Prompt.

     You are prompted for the drive specifier that indicates on which drive the
     output files will be stored.

         a)  Type an upper or lower case letter A - Z.

         b)  Press ENTER.

         The program checks to see if the drive you specified is available.  A
         formatted diskette must be in the drive if a floppy is specified.

         If the drive is unavailable, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.



                                            68












         If the drive is available, the next prompt appears.


     5)  Output Path Prompt.

     You are prompted for the path on which the output files are to be stored
     by analysis.  A colon and backslash are automatically added to the drive
     specifier previously entered.

         a)  Type the rest of the path information.

         If the output is to be stored in the root directory, do not type
         anything.  However, if you are using a fixed drive, or if you are
         storing the output of more than one analysis on a floppy diskette, you
         must not specify the root directory for more than one analysis.
         Otherwise, the results of the previous analysis will be lost.  A
         simple rule is: ALWAYS specify a unique path.  Never store output in
         the root directory on any drive or any diskette.

         b)  Press ENTER.

         The program checks to see if the path you specified exists.

         If the path does not exist, an advisory message appears to that
         effect, and solutions are given.  The prompt is repeated.

         If the path exists, the program checks to see if the path has been
         used for analysis previously.  If so, an advisory message appears to
         that effect, and you are given the option to continue or escape.  If
         you continue, the results of the previous analysis are lost.  If you
         escape, you can repeat the analysis dialogue and enter different path
         information.

         When all checks have been completed, the next prompt appears.

     6)  Comments Prompt.

     You are prompted for 60 characters of comments.

         a)  Type your comments, if any.

         The left and right arrow keys, DELETE, and F9 keys are active.

         The source file name, source file path, the output file path
         information that you entered previously during this dialogue is stored
         for recall during Main Menu option 2.  Your comments need not repeat
         this information.  Use the comments to reference another file or
         perhaps a notebook that contains more detailed information about the
         reasons for this analysis.  Or briefly describe the source file as was
         done with the provided analysis.



                                            69












         b)  Press ENTER.

         No checks are performed.  The program proceeds to the actual analysis
         of the source file.



     Analysis of the Source File


     Following completion of the analysis dialogue, the program reads the
     master sort data.  If you are working from diskette, you may be prompted
     to insert the program diskette.  If so, insert it in the drive that you
     installed to.

     After reading the master sort data, the program attempts to access the
     source file.  If it is not available, you are prompted to insert the
     appropriate diskette.  Insert the diskette in the drive you indicated
     during the analysis dialogue.

     When analysis begins, the 200 bytes of text that is being parsed is
     displayed at the top of the screen.  This display (as well as the others)
     was placed in the code to aid in de-bugging while the program was being
     written.  It was left in the code for two reasons.  One reason is so your
     screen won't sit idle for an extended period while analysis is performed.
     The other reason is to provide helpful information should bugs appear in
     use when the Constitution is amended or when you analyze modified files.

     If your modified version contains words not previously used in the
     provided files, you may be prompted to insert the program diskette during
     analysis (if you are working from diskettes).  If so, place the working
     copy of the program diskette in the drive that you installed to.


     NOTE:  This process updates the master vocabulary list.  Never write the
     updated list to the backup diskette or to the original.  Write the updated
     list to your working copy if you are using diskettes.  To avoid saving the
     updated list on the original or backup copy, always protect those copies
     by leaving the write protect tab in place for 5.25 inch diskettes or
     always leaving the write protect tab on 3.5 inch diskettes in the protect
     position.  Each time your master vocabulary list is updated, backup your
     master vocabulary list.  The program does not do this, nor does it remind
     you to do it.  See BACKUP.DOC.


     The remainder of the prompts that appear on the screen during analysis are
     of no interest except that they should always be changing at least once
     every 5 minutes.  If not, the program is locked up.

     When analysis is complete, you may be prompted to insert the program
     diskette and then the index (output) diskette.  If so, insert the


                                            70












     diskettes in the appropriate drive (install drive for program diskette,
     drive you specified during analysis dialogue for index diskette).  After
     these two prompts, you are returned to the Main Menu and the results of
     your analysis are now available for review.

















































                                            71






```
{% endraw %}

## MM11.DOC

{% raw %}
```






   MAIN MENU OPTION 11


   Main Menu option 11 allows you to update syllable information.  You can edit
   the syllable data provided when you purchased this program.  Or, you can
   enter syllable data for words not included in the purchased master
   vocabulary list, should you parse a modified version of the Constitution or
   should you update the Constitution to include possibly forthcoming
   amendments.

   You can access 6 vocabulary lists using Main Menu option 11, including two
   versions of the master list which are not available using Main Menu options
   13 or 6.

   This file contains information needed to use Main Menu option 11.



   The Secondary Menu


   When you select 11 from the Main Menu, a secondary menu with 7 options
   numbered 0 - 6 appears.  Options 1 - 6 are vocabulary list formats.  Option
   0 returns you to the main menu.

   Option 2 is useful if you have just executed Main Menu option 10 on a
   version or portion of the Constitution.  New words for which no syllable
   information has been entered will appear at the top of the list because the
   computer 'thinks' that these words have 0 syllables.  You can enter the
   syllable data for those words and not concern yourself with the remainder of
   the list.  Given that the default version has nearly 1400 entries for which
   syllable data is entered, this saves a lot of time.  Over an hour was
   required to enter the syllable data for the master list of the default
   version.  Typically, less than a dozen new words will be added to the
   vocabulary in a modified version.  That much syllable information can be
   entered in a few minutes.

   Option 3 speeds up mass entry of syllable entry by automatically copying
   syllable  information for initially capitalized and not initially
   capitalized spellings of the same word.

   Options 1 and 4 display numbers for entry of syllable data.  If a number is
   intended to be pronounced, select one of these lists to enter the
   appropriate syllable data.

   Options 5 and 6 display all words in the master vocabulary list, as opposed
   to options 1 - 4 which only display words that occur in the current version
   or portion.  These lists include all words, including misspelled words
   that were ever included in a file parsed using Main Menu option 10.

   The lists for options 1 - 4 are more fully described in file MM13.DOC.


                                            72















   Entering Syllable Data


   To enter syllable data, proceed as follows:

   1)  Select 11 from the main menu.

   2)  Select a vocabulary list from the secondary menu.

       The selected vocabulary list is displayed after a delay.

   3)  Scroll through the displayed vocabulary list until a word for which
   you wish to enter syllable data is highlighted.  Use the PG UP, PG DN,
   HOME, END, up arrow and down arrow keys to move the highlighting.

   4)  Type the appropriate syllable information using the top row of
   typewriter keys, not the numeric keypad.

       The number you typed is displayed in the syllables column of the
   highlighted word and the highlighting is advanced in the list.

       You do not have to press the ENTER key.

       NOTE:  If you select secondary menu option 3 and the syllable data is
   entered within the bottom 3 lines on a screen, the highlighting may not
   advance properly.  Advance it manually with one of the above mentioned
   scroll keys when this happens.

       You can print the selected vocabulary list or export it (save it to 
   disk) using the F7 and F5 function keys, respectively.

   5)  When you are finished entering syllable data, press the ESC key to
   return to the secondary menu.

       You can select another vocabulary list if desired or return to the
   Main Menu according to your selection.  If you have updated syllable
   information, the program reminds you to regenerate the word usage and
   clause complexity profiles.  The prompt gives you the option to regenerate
   the profiles immediately.  If you type an N, you can update the profile
   later using Main Menu option 8, secondary menu option 4.  If you did not
   enter any syllable data, the prompt does not appear.









                                            73






```
{% endraw %}

## MM12.DOC

{% raw %}
```






     MAIN MENU OPTION 12


     Main Menu option 12 is used to specify desired values for options.  When
     you select 12 from the Main Menu, a secondary menu is displayed.  You can
     choose from among the options on the secondary menu for review or update.
     Or you can choose 0 from the secondary menu to return to the Main Menu.



     Name of Install Directory


     Use eliminated for version 1.22.


     Colors


     If you desire, you can change the colors for color monitor, or the
     relative level of foreground, background intensity for monochrome
     monitors.  The defaults are 1 and 15.  This gives a white on blue display
     on color monitors.  On some monochrome monitors, it results in highlighted
     items being underscored.



     User Documentation Drive

     Use eliminated for version 1.22.























                                            74






```
{% endraw %}

## MM13.DOC

{% raw %}
```






  MAIN MENU OPTION 13


  Main Menu option 13 allows you to select among 9 vocabulary lists.  The
  lists vary as to their content and the sort key by which they are ordered.
  You can print any list using F7 or export any of the lists (save on disk)
  using F5.  A description of each list is included in this file along with 
  some practical word study (lexicographical) methods to which each list lends
  itself.

  With the various lists, lexicography information is displayed on the line
  with each word.  Up to five columns can be displayed within a single list.
  The information in each column is described near the end of this file.

  All lists on this menu contain words, numbers, or punctuation marks that
  occur in the selected version or portion.  A master list that contains all
  words, numbers and punctuation marks from all versions and portions can be
  accessed using Main Menu option 11.

  The TCN program focuses on words.  You access phrases or text by first
  selecting a word from a list.  You proceed from menus to the lists
  automatically.  To return to a list after accessing phrases or text (F2 or F3
  keys), press the ESC key.

  While you are in a list, the following scroll keys move you through the list
  to highlight (select) a specific word:  PG UP, PG DN, HOME, END, up arrow,
  down arrow.

  The list that you need may vary depending on what you are trying to
  accomplish.


  Choice of Vocabulary List

  You can choose a vocabulary list while performing Main Menu options 6, 11, or
  13.  The selected list will affect performance of options 4, 5, 6, 11, and
  13.  To see the default list, select Main Menu option 13 and then select item
  3.  The default list is read when you select a version or portion or when the
  default version is read.  The default list remains in effect until another
  list is selected during performance of Main Menu options 6, 11, or 13.  For
  more information about the available vocabulary lists, see file MM13.DOC.



  The Secondary Menu


  When you select 13 from the Main Menu, a secondary menu consisting of 10
  options numbered 0 - 9 appears.  Options 1 - 9 are vocabulary lists.  Item 0
  returns you to the Main Menu.  The vocabulary lists are discussed below in
  order of their appearance on the secondary menu.


                                            75















  Words In Order Of Appearance


  All words, numbers, and punctuation symbols are included in this list.
  The program creates this list by appending newly encountered words to the
  end of this list.  That is to say, when the program encounters a word for
  the first time in the source file, it adds that word to the end of this
  list.  The result is a list ordered according to initial appearance.

  A practical application of this list is to evaluate focus.  Naturally, the
  words used most often occur early in a version or portion.  Once you get
  past the part of the list that relates the first appearance of very common
  words, there are words that appear late that are used several times.
  Hence, one can infer a focus on these words.  One interesting combination
  of facts to look at is words that appear very early (say even in the
  Preamble) that are used only once.  Hence, this list contains information
  related to focus; one aspect of focus being order of appearance (first
  things -most important- first) and number of times a word is used.



  Words Sorted By Number Of Syllables


  Only words are included in this list.

  A practical use of this list is to enter syllable data.  Also, the
  grouping of words according to syllables may be helpful.



  Alphabetical List, Capitalized Words Merged With Uncapitalized Words


  Only words are included in this list.

  A practical application of this list is convenience when entering synonym
  and subject cross references.  To the program, initially capitalized words
  and words not initially capitalized are two totally different words.
  Hence, if a word appears initially capitalized in some places and not
  initially capitalized in others, you have to access both spellings to
  indicate that both spellings are related.  In an ordinary sort (secondary
  menu option 4), these spellings are far apart in the list.  In this list,
  they are adjacent to each other.

  F6 can be used when this list is selected to quickly move to a desired
  word.



                                            76












  When the program is first started, or when you select a version or
  portion, this is the default list.



  Alphabetical List, Caps separate from Not caps, plus Numbers, Punct


  This list contains all words, numbers, and punctuation marks.  Unlike
  secondary menu option 1, this list is sorted alphabetically.

  One practical use of this list is to access occurrences of Arabic numeral
  in Constitutional text.  With this list selected, you can highlight an
  Arabic numeral and press F2 or F3 to see where the highlighted numeral
  occurs.

  Another practical use of this list is to show exactly which words, numbers
  and punctuation marks are greater than which.  This information is useful
  to understand the results of using the words area of Main Menu option 6.

  You could compile examples of punctuation mark usage.

  F6 works with this list.



  Words That Appear In Uppercase Only


  This list contains those words that are initially capitalized every time
  that they are used in the selected version or portion of the Constitution.

  A photogenic copy of the original Constitution reveals initially
  capitalized words in the middle of sentences.  Many of the words would not
  be capitalized by contemporary capitalization conventions.  An emphasis on
  or importance attached to words that were consistently capitalized can be
  inferred.  This list can be used in conjunction with the following two
  lists to evaluate the use of capitalization in the Constitution.



  Words That Appear In Lower Case Only


  This list contains those words that never appear initially capitalized in
  the selected version or portion of the Constitution.

  This list can be used in conjunction with the preceding list and the
  following list to evaluate use of capitalization in the Constitution.

  


                                            77












  Words That Appear In Both Upper And Lower Case


  This list contains those words that appear initially capitalized in some
  places and not initially capitalized in others in the selected version or
  portion of the Constitution.

  This list can be used in conjunction with the preceding two lists to
  evaluate use of capitalization in the Constitution.



  Words Sorted By Number Of Times They Are Used


  Only words are included in this list.

  A practical use of this list is to rank words by the number of times they
  occur in a selected version or portion.



  Words Sorted By Number Of Letters

  Only words are included in this list.

  A practical use of this list is to rank words that occur in a selected
  version or portion by the number of letters they contain.



  Reviewing the Vocabulary Lists


  To review a vocabulary list, proceed as follows:

  1)  Select 13 from the Main Menu.

  2)  Select a vocabulary list from the secondary menu.

      After a delay, the list is displayed.

      All lists include length, syllable, and occurrence information with
  each word.  In addition, the list accessed through secondary menu option 1
  provides place information.

      You can print out the entire list using the F7 key.

      You can export the entire list to a file on disk that can be used with
  many word processors.  These files are large.  Some word processors won't
  hold them.  If saving to diskette, allow 150,000 bytes for the vocabulary


                                            78












  list of the default version.  The F5 key performs the export function.

      You can review every phrase that contains a highlighted word by using
  the F2 key.  When these phrases are displayed, you can print them or export
  them to disk.  Except for words occurring more than 300 times, the files
  created thusly can be held by many common word processors.

      You can review text surrounding every occurrence of a highlighted word
  using the F3 key.

      When finished reviewing a list, press the ESC key to return to the
  secondary menu.

      When finished reviewing all word lists, select 0 from the secondary
  menu to return to the Main Menu.



  LEXICOGRAPHY INFORMATION


  Five different kinds of lexicography information are displayed in the
  various lists for each word.  Length, syllable, and occurrence data for
  each word is displayed in all the lists.  Reference and place data is
  displayed for the 'Words in order of appearance' list.  All information
  except syllable data is automatically generated and cannot be changed by
  the user.  The information included under each of the five titles is
  described below.



  Length

  The number in the length column is the number of letters in the
  corresponding word.



  Syllables


  The number in the syllables column is the number of syllables in the
  corresponding word.



  






                                            79












  Occurrences


  The number in the occurrences column is the number of times that the
  corresponding word appears in the selected version or portion.



  Place


  Place is defined as the location of a word, number or punctuation mark
  relative to the beginning of a selected version or portion.  Remember, a
  word is a group of alphanumeric characters between two blanks, a
  punctuation mark and a blank, or between a blank and a punctuation mark.
  The displayed place information is location of the first occurrence of the
  corresponding word.



  Reference


  Reference information is displayed for the 'Words in order of appearance'
  list or when F2 is pressed.  In either case, it appears at the left side
  of the screen.  Reference information for the 'Words in order of
  appearance' list is derived from the location of the first occurrence of
  the corresponding word.  Reference information displayed when F2 is
  pressed is derived from the location of the corresponding phrase.  The
  information below about references applies to F2 and the vocabulary list
  display.

  Art is an abbreviation for article.

  Sec is an abbreviation for section.

  Amd is an abbreviation for amendment.

  A reference can have one of the four following formats:

  Art #.#

  Art # Sec #.#

  Amd #.#

  Amd # Sec #.#

  When an article or an amendment is not divided into sections, the number
  following the abbreviation has a number to the right of the decimal.  The
  number to the right of the decimal is a paragraph number.  Even if there


                                            80












  is only one paragraph, this number is used.

  When an article or amendment is divided into sections, the number
  following the abbreviation (Art or Amd) does not have a decimal.  The
  abbreviation Sec is followed by a number, a decimal, and then another
  number.  Even if a section only has one paragraph, there is a number to
  the right of the decimal.

  The reference Amd 10.1 is used to indicate text in the first paragraph of
  the tenth amendment in the Bill of Rights.

  The reference Art 1 Sec 2.3 is used to indicate that the associated word
  or phrase is included in the 3rd paragraph of the 2nd section of the 1st
  article of the Constitution.







































                                            81






```
{% endraw %}

## MM2.DOC

{% raw %}
```






   MAIN MENU OPTION 2, Version or Portion


   Main Menu option 2 allows you to select a version or portion of the
   Constitution for review.  When you purchase the program, you have a
   selection consisting of a complete version, and 3 portions.  Later, if you
   analyze another file using Main Menu option 10, your selection is increased
   to include each version you analyze.  The following materials explain what
   appears on the screen and how to use Main Menu option 2.



   Description of the Screen

   When you select Main Menu option 2, the top three lines of the screen
   contain titles that show the relative positions of information provided for
   each version or portion available for selection.  The titles are:


   [File Name]                      [Comments]
   [ Source Path ]
   [ Output Path ]


   The fourth line of the screen is blank.  The fifth, sixth and seventh
   lines are highlighted (reverse video for color monitors, underscored for
   monochrome).  The highlighted lines contain information entered during the
   analysis dialogue (see file MM10.DOC) for the default version.

   Below the highlighted lines are displayed (in unhighlighted format
   separated by a blank line) the information entered during analysis
   dialogue for the other provided portions.

   If you have used Main Menu option 10 to analyze other versions or portions,
   the information that you entered during the analysis dialogue can be
   displayed by scrolling with the HOME, END, PG UP, PG DN, or up arrow and
   down arrow keys.

   Information for each available version or portion is displayed on three
   lines followed by a blank line.  The information appears in the same
   relative position as indicated by the titles on the top three lines of the
   screen.  The information referred to by each title is as follows:


   [File Name]  

   Twelve characters maximum consisting of a valid DOS file name (8 characters
   maximum), a period (if used), and a 3 character (maximum) extension, if
   used.  File name is entered during analysis dialogue.




                                            23












   [Comments]  

   Beginning in column 20 of the line on which the file name is displayed, 60
   (maximum) characters of comments entered during the analysis dialogue.


   [ Source Path ]  

   Beginning in column 1 of the line below that on which the file name and
   comments are displayed, eighty characters (maximum) of information defining
   drive and path on which source file was stored during execution of Main Menu
   option 10.  Can be a memory jogger if you use your imagination.  Information
   is entered during analysis dialogue.


   [ Output Path ]  

   Beginning in column 1 of the line below that on which the location of source
   file is displayed, eighty characters (maximum) of information defining drive
   and path on which output files were stored during execution of Main Menu
   option 10.  Can be a memory jogger if you use your imagination.  Information
   is entered during analysis dialogue.



   Selecting a Version or Portion


   To select a version or portion of the Constitution for review, proceed as
   follows:

   1)  Select item 2 from the Main Menu.

       A slight delay occurs while information is read from disk.  If
   operating from diskette, you may be prompted to insert the program
   diskette.  If so, place the working copy of your program diskette in the
   drive that you installed to.  If you put it in another drive, the prompt
   is repeated.

   2)  When the selections appear on the screen, scroll through the available
   items using the HOME, END, PG UP, PG DN, and up arrow or down arrow keys
   until the desired version or portion is highlighted.

   3)  If working from diskette, insert the index diskette.  This refers to
   the diskette on which the output files are stored.  Place that diskette in
   the drive specified in the location of output files information area of
   the highlighted selection.

   4)  Press ENTER.

       A delay occurs while files are read.  This delay may be as long as 5


                                            24












   minutes depending on the size of the selected version and the kind of
   computer you have.  A prompt appears at the bottom of the screen advising
   which file is being read.  This prompt should be updated at least every 90
   seconds.  When all files are read, you are returned to the Main Menu.

       If you put the index diskette in the wrong drive, inserted the wrong
   index diskette, or if you failed to insert the index diskette, you are
   prompted to insert it.  Information related to the selected version or
   portion is displayed along with the prompt.  Insert the index diskette in
   the appropriate drive and press ENTER.  In some cases you may be returned
   to the Main Menu anyway.  If so, repeat Main Menu option 2.










































                                            25






```
{% endraw %}

## MM3.DOC

{% raw %}
```






     MAIN MENU OPTION  3, Choose Seminar

     Main Menu option 3 allows you to select among existing seminars or to
     create a new seminar.  The materials in this file explain what a seminar
     is, how and why to create a seminar, and how to select a seminar.



     What is a Seminar?

     A seminar is a set of cross references created by the user.

     The program keeps a separate set of seminars for each version or portion
     of the Constitution analyzed using Main Menu option 10.

     Each seminar contains a set of words with synonyms and a set of subjects.
     Each word with synonyms and each subject has a set of related cross
     references and comments.

     Eight seminars with subject and synonym cross references are provided with
     the default version of analyzed files.  The other provided versions do not
     include any subjects or synonyms.  However, you can create them, if you
     wish.

     A seminar can contain a maximum of:

          2,000 lines of comments for subjects and 2,000 lines of comments for
          synonyms, for a maximum possible total of 4,000 lines of comments.

          2,000 subject headings and 2,000 synonym headings for a maximum
          possible total of 4,000 headings.

          2,000 subject cross references and 2,000 synonym cross references for
          a maximum possible total of 4,000 cross references.

          You can have any relative number of subjects and synonym headings.

          You can have any relative number of cross references and comments
          distributed among the subject headings or among the synonym headings.

     If you reach a maximum limit in the subjects, you can still work in the
     synonym section of the seminar if it is not already full.

     If you reach a maximum limit in the synonyms, you can still work in the
     subject section of the seminar.

     Reaching one of these maximum limits (actually, rather unlikely) is one
     reason to create a new seminar.

     Another reason to create a new seminar is to logically group synonym and
     subject headings, comments and cross references under a title relevant to


                                            26












     the version or portion of the Constitution being studied.

     When you select a version or portion of the Constitution (or let the
     program make the default selection), only the seminars related to that
     selected version or portion can be accessed.

     When you create a seminar, it is accessible only when the selected version
     or portion of the Constitution is selected.  If you select another
     version, the created seminar is unavailable.

     When you select a seminar, only those synonyms and subject headings
     previously stored in that seminar are available for review.  You can
     update the headings, cross references and comments if desired.  Unless you
     manually duplicate a heading with the associated cross references and
     comments in another seminar (perfectly ok to do so), said headings, cross
     references and comments will not be available if you select another
     seminar.

     You can switch seminars as often as you like.



     Screen Description


     When Main Menu option 3 is selected, a screen appears with the title
     SEMINARS.  The third line of the screen is highlighted.  If this is a
     newly analyzed version or portion of the Constitution, the line will be
     blank.  You can enter a title using the typewriter keys, F9, DELETE, and
     the left or right arrow keys.  If you have previously created other
     seminars and entered titles, each of those titles will appear on a line
     below the third line.  No blank line separates titles.  If more than one
     seminar exists, you can move the highlighting using the HOME, END, PG UP,
     PG DN, up arrow or down arrow keys.  You can edit the title of a seminar
     anytime it is highlighted on this screen.



     Accessing a Seminar


     To access a seminar, proceed as follows:

          1)  Select 3 from the Main Menu.

          2)  Scroll through the available selections until the desired seminar
          is highlighted.

          3)  Press ENTER.




                                            27












              You are returned to the Main Menu.  Subject and Synonyms
              available now using Main menu options 4 and 5 are those
              previously entered under the accessed seminar.

              If you do not wish to change the accessed seminar, press ESC
              instead of ENTER.  You are returned to the Main Menu.  The
              accessed seminar is unchanged.

              If no seminar selection is made using Main Menu option 3, the
              default is the first seminar.



     Creating a Seminar


     To create a seminar, proceed as follows:

          1)  Select 3 from the Main Menu.

          2)  Press F8.

              A blank highlighted line appears at the end of the existing list.

          3)  Type a seminar title in the highlighted area.

              At this point, you can press F8 and create another seminar.

              OR, you can press ENTER to access the newly created seminar.

              OR, you can press ESC to return to the Main Menu.  The new
              seminar is created; however, the accessed seminar is unchanged.

              OR, you can scroll through the list and press ENTER to select a
              different seminar.

              Pressing ENTER or ESC returns you to the Main Menu with the
              seminar selected as described previously.


     NOTE:  Once you create a seminar, you are stuck with it.  You cannot
     delete it.  If desired you can change the title and place different
     references in it.










                                            28






```
{% endraw %}

## MM4.DOC

{% raw %}
```






     CROSS REFERENCING PROCEDURES FOR SUBJECTS

     The four major steps for cross referencing subjects are:

           1) Create a heading, if it does not already exist.

           2) Access the desired heading.

           3) Review the heading while adding or deleting related references or
           comments.

           4) Exit to the main menu to save changes.



     Creating a Subject Heading


     To create a subject heading, proceed as follows:

          1)  Select 4 from the main menu.

          A screen appears with the heading SUBJECTS.  The third line of the
          screen is highlighted in reverse video.  This line contains the title
          of the default subject for the selected seminar.  If no title has
          been entered, the highlighted area is blank.  If so, you can enter a
          title if desired as described in step 3 which follows.

          2)  Press F8.  A new subject heading is created at the end of the
          existing list.  The highlighting moves to the newly created subject
          heading.

          3)  Type in a title.  Use the typewriter keys as per usual.  The
          INSERT, BACK SPACE, DELETE, left and right arrow keys are active.

          At this point you can access the created subject heading by
          performing the procedure that follows beginning at step 2.  Or you
          can press ESC to return to the Main Menu.  If so, the newly created
          subject title is saved to disk and will be displayed the next time
          you choose Main Menu item 4.  However, no cross references or
          comments are entered as yet.



     








                                            29












     Accessing a Subject Heading


     To access a created subject heading, proceed as follows:

          1)  Select 4 from the main menu.

          A screen appears with the heading SUBJECTS.  The third line of the
          screen is highlighted in reverse video.  This line contains the title
          of the default subject for the selected seminar.  If no title has
          been entered, the highlighted area is blank.  If so, you can enter a
          title if desired as described in step 3 in the preceding procedure.

          2)  Scroll through the list of subjects using PG UP, PG DN, HOME, END
          or the up and down arrow keys until the desired heading is
          highlighted.

          3)  Press ENTER.  A screen appears with a SUBJECT heading on the top
          line.  The title (if any) of the selected subject is displayed on the
          third line, under which is a boxed in area divided into three
          columns.  You now have access to the selected heading for review,
          print out, exporting to disk, updates including additions, deletion
          to cross references or comments, or even elimination of the entire
          subject heading.

          Words previously entered under this heading (if any) appear in the
          middle column.  Notes previously entered under this heading (if any)
          appear in the right column.

          The middle and right columns will be blank if this is the first time
          you have accessed the subject heading.  You can move the highlighting
          among the three columns and the selected heading field using the TAB
          key.  If the middle column is blank, it will be skipped.

          If you press ESC while the cursor is in the rightmost column, the
          cursor is removed from the rightmost column and the highlighting
          appears in the left column.

          If you press ESC while the highlighting is in the left or middle
          column, you are returned to the screen on which the list of subjects
          is displayed.


     Reviewing the Selected Heading


     Cross references and notes associated with a heading can be reviewed after
     the heading is accessed according to the preceding procedure.  The
     associated cross references can be reviewed using either the F2 or the F3
     key.  Procedures for reviewing notes and cross references follow.



                                            30














     Reviewing Notes


     To review notes, press the TAB key until the cursor appears in the
     rightmost column.  Use the scroll keys PG UP, PG DN, HOME, END, up arrow
     and down arrow to move through the comments as desired.  If all comments
     appear in the window, PG UP and PG DN will have no effect.



     Reviewing Cross References using the F2 Key


     One method for reviewing cross references using the F2 key involves
     pressing F2 while the accessed heading is highlighted in the Selected
     Heading field.  The other method involves pressing F2 while a word in the
     middle column is highlighted.  The results obtained by each method and
     practical applications of each method are described below.



     F2 from the Selected Heading Field


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the Selected Heading field on the third line of the screen.

     2)  Press F2.

     The subject screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  All phrases that
     have been cross referenced to the selected heading are accessed.  To
     return to the subject screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from the Title Block of the
     Middle Column.

     Pressing F4 deletes cross reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.





                                            31












     F2 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F2.

     The subject screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  Only those cross
     referenced phrases that contain the highlighted word are accessed.  To
     return to the subject screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from a highlighted word in
     the Middle Column.

     Pressing F4 deletes cross reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     Reviewing Cross References using the F3 Key


     One method for reviewing cross references using the F3 key involves
     pressing F3 while the accessed heading is highlighted in the Selected
     Heading field.  Another method involves pressing F3 while a word in the
     middle column is highlighted.  A third method (mentioned previously)
     involves using the F2 key to locate a specific phrase and then pressing
     the F3 key.  The results obtained by each method and practical
     applications of each method are described below.



     F3 from the Selected Heading Field


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed


                                            32












     heading in the Selected Heading field on the third line of the screen.

     2)  Press F3.

     The subject screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading on the 4th line of
     the screen. (Exception is when cross reference occurs with 1st 4 or last
     14 lines of active version or portion)  To return to the subject screen
     press the ESC key.

     OR, you can scroll through the cross referenced phrases using the
     left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     F3 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F3.

     The subject screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading that contains the
     word you indicated on the 4th line of the screen. (Exception is when cross
     reference occurs with 1st 4 or last 14 lines of active version or portion)
     To return to the subject screen press the ESC key.

     OR, you can scroll through the cross referenced phrases that contain the
     indicated word using the left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     Adding Cross References to the Accessed Heading


     Cross references can be added in two ways.  Before you can add cross
     references to a heading, the heading must already be created and accessed


                                            33












     according to the preceding materials.  Once a heading is created and
     accessed, you can indicate that every occurrence of a word is related to
     the accessed heading or that an individual occurrence of a word is
     related.  You can access the heading and change the cross references as
     many times as you want to.



     Cross Referencing Every Occurrence of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the ENTER key.  The highlighted word appears in the middle
     column.  All occurrences of the highlighted word are now cross referenced
     to the accessed heading.  To verify, use the F2 or F3 key to review the
     cross references as described previously.



     Cross Referencing Specific Occurrence(s) of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the F2 key.  The subject screen is replaced by a series of
     phrases that contain the word you indicated.  All phrases in the
     Constitution that contain the indicated word are accessed.

     You can scroll through the displayed phrases using the scroll keys PG UP,
     PG DN, HOME, END, up arrow or down arrow.

     You can return to the subject screen without cross referencing any thing
     by pressing the ESC key before you press the ENTER key.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  This is desirable sometimes to
     verify that the phrase you have highlighted is actually the phrase you are
     looking for.  Press ESC to return to the subject screen without cross


                                            34












     referencing anything or press F2 to return to the phrase display.

     With a desired phrase highlighted, press the ENTER key.  The highlighted
     occurrence of the word is now cross referenced to the accessed heading.
     The word you indicated before pressing F2 is added to the middle column if
     it was not already there.

     You can cross reference as many phrases as you wish.  If you attempt to
     duplicate the cross reference of an occurrence of a word to the accessed
     heading, the duplicate reference is ignored.  However, that same word can
     still be cross referenced to as many other headings under synonyms, or
     subject in the same or other seminars as you wish.

     When all desired occurrences of a word are cross referenced to the
     accessed heading, press the ESC key to return to the subject screen.

     4)  To verify, use the F2 or F3 key to review the cross references as
     described previously.



     Adding Comments


     With a heading accessed, press the TAB key until the cursor appears in the
     rightmost column.  On the typewriter keys, type up to 190 lines of
     comments per heading, 2000 maximum lines per seminar.  Use the INSERT key
     to control INS and RPLCE modes.  Use the DELETE key or the BACK SPACE key
     to erase unwanted characters.  The ENTER key moves the cursor to the
     beginning of the next line.  If the INS mode is selected, or if the cursor
     is on the last line, it also adds a line.  Active scroll keys are PG UP,
     PG DN, HOME, END, left, right, up and down arrows.  They do what they
     usually do in common word processor programs.  Each time you press the
     down arrow key or the ENTER key  with the cursor on the bottom line of
     your comments, you consume 41 bytes of disk space.  This can add up.  For
     more information, refer to the file named EDITOR.DOC.



     Deleting Cross References from the Accessed Heading


     Individual cross references to the accessed heading can be deleted.  Or
     all cross references of a selected word to the accessed heading can be
     deleted.  Or the accessed heading can be deleted with ALL associated cross
     references and comments.  Procedures to accomplish each of these delete
     functions follow.

     Keep in mind that you are NOT affecting the source text file in any way
     when you use the delete function (or any other feature of this program for
     that matter).  No words can or will be deleted from the vocabulary list


                                            35












     using the F4 key.  Only the accessed heading and its cross references are
     affected by the F4 key.



     Deleting Individual Cross References


     With the heading accessed, proceed as follows:

     1)  Press the F2 key.  You can use the F2 key from within the Selected
     Heading field or from a highlighted word in the middle column as described
     previously under 'Reviewing Cross References using the F2 Key'.

     2)  Scroll through the displayed phrases until the phrase containing the
     occurrence that you wish to delete is highlighted.  Use the PG UP, PG DN,
     HOME, END, or up arrow, down arrow keys to move the highlighting.

     NOTE:  You can return to the subject screen without deleting anything by
     pressing the ESC key.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  The cross
     reference to the highlighted occurrence is now deleted.  The screen is
     refreshed with the deleted phrase eliminated.  If the deleted phrase is
     the only phrase displayed, you are returned to the subject screen.

     If you type N in response to the 'Are you sure, Y/N?' prompt, you are
     returned to the display of cross referenced phrases.  The highlighted
     phrase is NOT deleted.

     You can delete as many cross references as you wish.  When finished
     deleting, press the ESC key to return to the subject screen.  You can
     return to delete cross references to other phrases anytime you wish.

     When you delete individual references using this procedure, no words are
     removed from the middle column, not even if you delete all cross
     references to a particular word or words.



     Deleting All Cross References of a Selected Word


     With the heading accessed, proceed as follows:

     1)  Press the TAB key until the top word in the middle column is accessed.

     2)  Scroll through the displayed words until the desired word is
     highlighted.  Use the PG UP, PG DN, HOME, END, or up arrow, down arrow


                                            36












     keys to move the highlighting.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  All cross
     references to the highlighted word are now deleted.  The screen is
     refreshed with the deleted word eliminated.  If the deleted word is the
     only word in the middle column, the highlighting moves to the left column.

     If you type N in response to the 'Are you sure, Y/N?' prompt, the
     highlighted word is NOT deleted.

     You can delete as many words as you wish.  When finished deleting, you can
     continue performing other functions in any desired order.  You can return
     to delete other words anytime you wish.



     Deleting the Accessed Heading


     When you delete the accessed heading, the accessed heading no longer
     appears on the screen with the list of subjects.  All associated cross
     references and comments are deleted.  The space used for comments on the
     disk is NOT freed up.  To delete the accessed heading, proceed as follows:

     1)  With the heading accessed, press the TAB key until the heading is
     highlighted in the Selected Heading field on the third line of the screen.

     2)  Press the F4 key.

     3)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  You are
     returned to the screen on which the list of subjects is displayed.  The
     list no longer contains the deleted heading.


     NOTE:  You can use the same heading multiple times.  This capability has
     its practical applications.  If you have done this, only the heading that
     you accessed is deleted.

     If you type an N in response to the 'Are you sure, Y/N?' prompt, you can
     continue reviewing the accessed heading as per usual.



     Printing your Cross References


     To make a hard copy of your cross references to an accessed heading,
     proceed as follows:



                                            37












     1)  Prepare your printer.

     2)  Access the desired heading.

     3)  Press the TAB key until the accessed heading is highlighted on the
     third line of the screen.

     4)  Press F7.  The print out should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F7 while the highlighting is in the left
     column.  This results in a 25-page listing of the vocabulary list for the
     default version.  Press the ESC key to stop print out of the vocabulary
     list.  The ESC key will NOT stop print out of the accessed heading.



     Exporting Your Cross References to an ASCII Disk File


     To export a soft copy of your cross references to an ASCII file, proceed
     as
     follows:

     1)  Decide on a file name.

       You are prompted for a file name during this procedure.  The file name
     must be a valid DOS file name.  The program does not perform any check of
     the file name.

       If you enter an invalid file name, results are unpredictable.

       If you enter the file name of an existing file, the existing file is
     erased when you press F5.  No warning or advisory message is provided.

       The file name can include a drive specifier and path information.

       You MUST type in the extension.  The program will not provide one.
     Without the extension, some word processors may not access the file.  Many
     will not access the file as easily without the proper extension.  Check
     the documentation provided with your word processor and use the proper
     extension.

     2)  If working with floppies, insert the target diskette in the
     appropriate drive.

       As has been discussed elsewhere, it is a good idea to use a separate
     diskette for the purpose of exporting these soft copy versions of your
     cross
     references.


                                            38













       Keep track of the space on your target diskette.  As has been discussed
     elsewhere, a full disk error is a fatal error.  You will get kicked out of
     the program.

       Minimum space required is 1,000 bytes.  To this add 10 bytes per word in
     the middle column, 80 bytes per phrase displayed (when the F2 key is
     pressed while the accessed heading is highlighted in the title block of
     the middle column), and 50 bytes per line of comments including all blank
     lines.

       The maximum possible space consumed by a single heading is 170,000
     bytes.  But this is ridiculous and will probably NEVER occur.  Even if it
     does, it will fit on a single floppy if you use one that is less than half
     full.  As a typical example, the soft copy file created by this procedure
     for the provide cross references to the word 'rights' consumes
     approximately 4,000 bytes of disk space.

     3)  Access the desired heading.

     4)  Press the TAB key until the accessed heading is highlighted on the
     third line of the screen.

     5)  Press F5.  You are prompted for a file name.  Type in the file name
     with drive specifier, path information and extension as discussed
     previously.

     6)  Press ENTER.  The export should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F5 while the highlighting is in the left
     column.  This results in a 100,000 byte listing of the vocabulary list for
     the default version.  Press the ESC key to stop exporting of the
     vocabulary list.  The ESC key will NOT stop exporting of the accessed
     heading.

     Don't worry about swapping diskettes.  If you are working with diskettes
     and you forget to swap back to the index or program diskette, you are
     prompted for them when they are needed.  You are NOT prompted for the
     alternate diskette to export soft copy files of your cross references.
     You must do this on your own before pressing ENTER after typing in the
     file name.










                                            39






```
{% endraw %}

## MM5.DOC

{% raw %}
```






     CROSS REFERENCING PROCEDURES FOR SYNONYMS

     The four major steps for cross referencing synonyms are:

          1) Create a heading, if it does not already exist.

          2) Access the desired heading.

          3) Review the heading while adding or deleting related references or
          comments.

          4) Exit to the main menu to save changes.



     Creating a Synonym Heading


     To create a synonym heading, proceed as follows:

     1)  Select 5 from the main menu.

     A screen appears with the heading SYNONYMS.  A box on the screen is
     divided into 3 columns.  The top word in the left column is highlighted.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press ENTER.  When the highlighted word appears in the middle column,
     your heading is created.

     At this point you can access the created synonym heading by performing the
     procedure that follows beginning at step 2.  Or you can press ESC to
     return to the Main Menu.  Notice that the title of the middle column is
     'Words with Synonyms'.  ESC will not return you to the Main Menu if the
     title of the middle column is 'Synonyms for xxxxxxx' where xxxxxx is a
     word you have selected.



     Accessing a Synonym Heading


     To access a created synonym heading, proceed as follows:

     1)  Select 5 from the main menu.

     A screen appears with the heading SYNONYMS.  A box on the screen is
     divided into 3 columns.  The top word in the left column is highlighted.

     2)  Press the TAB key once.  The highlighting moves to the middle column.


                                            40













     3)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired heading is highlighted.   (F6
     won't work when the highlighting is in the middle column.)

     4)  Press ENTER.  The title block of the middle column changes to
     'Synonyms for xxxxxxx' where xxxxxx is the desired heading.  The word you
     selected as the desired heading is highlighted.  You now have access to
     the selected heading for review, print out, exporting to disk, updates
     including additions, deletions to cross references or comments, or even
     elimination of the entire synonym heading.

     Words previously entered under this heading (if any) appear in the middle
     column.  Notes previously entered under this heading (if any) appear in
     the right column.

     The middle and right columns will be blank if this is the first time you
     have accessed the subject heading.  You can move the highlighting among
     the three columns and the middle column title block using the TAB key.  If
     the middle column is blank, it will be skipped.

     If you press ESC while the cursor is in the rightmost column, the cursor
     is removed from the rightmost column and the highlighting appears in the
     left column.

     If you press ESC while the highlighting is in the left column, the middle
     column title block, or in the middle column, the title of the middle
     column changes to 'Words with Synonyms'.



     Reviewing the Selected Heading


     Cross references and notes associated with a heading can be reviewed after
     the heading is accessed according to the preceding procedure.  The
     associated cross references can be reviewed using either the F2 or the F3
     key.  Procedures for reviewing notes and cross references follow.



     Reviewing Notes


     To review notes, press the TAB key until the cursor appears in the
     rightmost column.  Use the scroll keys PG UP, PG DN, HOME, END, up arrow
     and down arrow to move through the comments as desired.  If all comments
     appear in the window, PG UP and PG DN will have no effect.





                                            41












     Reviewing Cross References using the F2 Key

     One method for reviewing cross references using the F2 key involves
     pressing F2 while the accessed heading is highlighted in the title block
     of the middle column.  The other method involves pressing F2 while a word
     in the middle column is highlighted.  The results obtained by each method
     and practical applications of each method are described below.



     F2 from the Title Block of the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the title block of the middle column.

     2)  Press F2.

     The synonym screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  All phrases that
     have been cross referenced to the selected heading are accessed.  To
     return to the synonym screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from the Title Block of the
     Middle Column.

     Pressing F4 deletes cross-reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     F2 from a highlighted word in the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F2.


                                            42













     The synonym screen is replaced by a series of phrases that have been
     previously cross referenced to the accessed heading.  Only those cross
     referenced phrases that contain the highlighted word are accessed.  To
     return to the synonym screen press the ESC key.

     OR, you can scroll through the displayed phrases using the scroll keys PG
     UP, PG DN, HOME, END, up arrow or down arrow.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  See F3 from a highlighted word in
     the Middle Column

     Pressing F4 deletes cross-reference to occurrence of highlighted word in
     highlighted phrase.  See Deleting References to Individual Occurrences of
     Words.



     Reviewing Cross References using the F3 Key


     One method for reviewing cross references using the F3 key involves
     pressing F3 while the accessed heading is highlighted in the title block
     of the middle column.  Another method involves pressing F3 while a word in
     the middle column is highlighted.  A third method (mentioned previously)
     involves using the F2 key to locate a specific phrase and then pressing
     the F3 key.  The results obtained by each method and practical
     applications of each method are described below.



     F3 from the Title Block of the Middle Column


     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the accessed
     heading in the title block of the middle column.

     2)  Press F3.

     The synonym screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading on the 4th line of
     the screen. (Exception is when cross reference occurs with 1st 4 or last
     14 lines of active version or portion)  To return to the synonym screen
     press the ESC key.

     OR, you can scroll through the cross referenced phrases using the
     left and right arrow keys.



                                            43












     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.




     F3 from a highlighted word in the Middle Column

     With a heading accessed,

     1)  Press the TAB key until the highlighting appears over the first word
     in the middle column.

     2)  Scroll through the middle column using PG UP, PG DN, HOME, END or the
     up and down arrow keys until the desired word is highlighted. (F6 won't
     work when the highlighting is in the middle column.)

     3)  Press F3.

     The synonym screen is replaced by the text of the Constitution with the
     first occurring cross reference to the accessed heading that contains the
     word you indicated on the 4th line of the screen. (Exception is when cross
     reference occurs with 1st 4 or last 14 lines of active version or portion)
     To return to the synonym screen press the ESC key.

     OR, you can scroll through the cross referenced phrases that contain the
     indicated word using the left and right arrow keys.

     Scroll keys PG UP, PG DN, HOME, or END can be used to scroll through the
     text as per usual.



     Adding Cross References to the Accessed Heading


     Cross references can be added in two ways.  Before you can add cross
     references to a heading, the heading must already be created and accessed
     according to the preceding materials.  Once a heading is created and
     accessed, you can indicate that every occurrence of a word is a synonym to
     the accessed heading or that an individual occurrence of a word is a
     synonym.  You can access the heading and change the cross references as
     many times as you want to.



     Cross Referencing Every Occurrence of a Word


     With the desired heading accessed, proceed as follows:



                                            44












     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the ENTER key.  The highlighted word appears in the middle
     column.  All occurrences of the highlighted word are now cross referenced
     to the accessed heading.  To verify, use the F2 or F3 key to review the
     cross references as described previously.





     Cross Referencing Specific Occurrence(s) of a Word


     With the desired heading accessed, proceed as follows:

     1)  If the highlighting is not in the leftmost column, press the TAB key
     until it is.

     2)  Scroll through the list in the left column using PG UP, PG DN, HOME,
     END, F6 or up arrow, down arrow until a desired word is highlighted.

     3)  Press the F2 key.  The synonym screen is replaced by a series of
     phrases that contain the word you indicated.  All phrases in the
     Constitution that contain the indicated word are accessed.

     You can scroll through the displayed phrases using the scroll keys PG UP,
     PG DN, HOME, END, up arrow or down arrow.

     You can return to the synonym screen without cross referencing any thing
     by pressing the ESC key before you press the ENTER key.

     Pressing F3 displays the text of the Constitution with the highlighted
     phrase on the 4th line of the screen.  This is desirable sometimes to
     verify that the phrase you have highlighted is actually the phrase you are
     looking for.  Press ESC to return to the synonym screen without cross
     referencing anything or press F2 to return to the phrase display.

     With a desired phrase highlighted, press the ENTER key.  The highlighted
     occurrence of the word is now cross referenced to the accessed heading.
     The word you indicated before pressing F2 is added to the middle column if
     it was not already there.

     You can cross reference as many phrases as you wish.  If you attempt to
     duplicate the cross reference of an occurrence of a word to the accessed
     heading, the duplicate reference is ignored.  However, that same word can
     still be cross referenced to as many other headings under synonyms, or


                                            45












     subject in the same or other seminars as you wish.

     When all desired occurrences of a word are cross referenced to the
     accessed heading, press the ESC key to return to the synonym screen.

     4)  To verify, use the F2 or F3 key to review the cross references as
     described previously.



     Adding Comments


     With a heading accessed, press the TAB key until the cursor appears in the
     rightmost column.  On the typewriter keys, type up to 190 lines of
     comments per heading, 2000 maximum lines per seminar.  Use the INSERT key
     to control INS and RPLCE modes.  Use the DELETE key or the BACK SPACE key
     to erase unwanted characters.  The ENTER key moves the cursor to the
     beginning of the next line.  If the INS mode is selected, or if the cursor
     is on the last line, it also adds a line.  Active scroll keys are PG UP,
     PG DN, HOME, END, left, right, up and down arrows.  They do what they
     usually do in common word processor programs.  Each time you press the
     down arrow key or the ENTER key  with the cursor on the bottom line of
     your comments, you consume 41 bytes of disk space.  This can add up.  For
     more information, refer to the file named EDITOR.DOC.



     Deleting Cross References from the Accessed Heading


     Individual cross references to the accessed heading can be deleted.  Or
     all cross references of a selected word to the accessed heading can be
     deleted.  Or the accessed heading can be deleted with ALL associated cross
     references and comments.  Procedures to accomplish each of these delete
     functions follow.

     Keep in mind that you are NOT affecting the source text file in any way
     when you use the delete function (or any other feature of this program for
     that matter).  No words can or will be deleted from the vocabulary list
     using the F4 key.  Only the accessed heading and its cross references are
     affected by the F4 key.



     Deleting Individual Cross References


     With the heading accessed, proceed as follows:

     1)  Press the F2 key.  You can use the F2 key from within the title block


                                            46












     of the middle column or from a highlighted word in the middle column as
     described previously under 'Reviewing Cross References using the F2 Key'.

     2)  Scroll through the displayed phrases until the phrase containing the
     occurrence that you wish to delete is highlighted.  Use the PG UP, PG DN,
     HOME, END, or up arrow, down arrow keys to move the highlighting.

     NOTE:  You can return to the synonym screen without deleting anything by
     pressing the ESC key.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  The cross
     reference to the highlighted occurrence is now deleted.  The screen is
     refreshed with the deleted phrase eliminated.  If the deleted phrase is
     the only phrase displayed, you are returned to the synonym screen.

     If you type N in response to the 'Are you sure, Y/N?' prompt, you are
     returned to the display of cross referenced phrases.  The highlighted
     phrase is NOT deleted.

     You can delete as many cross references as you wish.  When finished
     deleting, press the ESC key to return to the synonym screen.  You can
     return to delete other phrases anytime you wish.

     When you delete individual references using this procedure, no words are
     removed from the middle column, not even if you delete all cross
     references to a particular word or words.



     Deleting All Cross References of a Selected Word


     With the heading accessed, proceed as follows:

     1)  Press the TAB key until the top word in the middle column is accessed.

     2)  Scroll through the displayed words until the desired word is
     highlighted.  Use the PG UP, PG DN, HOME, END, or up arrow, down arrow
     keys to move the highlighting.

     3)  Press the F4 key.

     4)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  All cross
     references to the highlighted word are now deleted.  The screen is
     refreshed with the deleted word eliminated.  If the deleted word is the
     only word in the middle column, the highlighting moves to the left column.

     If you type N in response to the 'Are you sure, Y/N?' prompt, the
     highlighted word is NOT deleted.


                                            47













     You can delete as many words as you wish.  When finished deleting, you can
     continue performing other functions in any desired order.  You can return
     to delete other words anytime you wish.



     Deleting the Accessed Heading


     When you delete the accessed heading, the word no longer appears in the
     middle column when the heading is Words with Synonyms.  All associated
     cross references and comments are deleted.  The space used for comments on
     the disk is NOT freed up.  To delete the accessed heading, proceed as
     follows:

     1)  With the heading accessed, press the TAB key until the heading is
     highlighted in the title block of the middle column.

     2)  Press the F4 key.

     3)  Type a Y in response to the 'Are you sure, Y/N?' prompt.  Screen is
     refreshed with the comments cleared from the right column.  The title of
     the middle column changes to Words with Synonyms.  The middle column no
     longer contains the deleted heading.  If there are no other words in the
     middle column, the highlighting appears in the left column.

     NOTE:  You can use the same word as a heading multiple times.  This
     capability has its practical applications.  If you have done this, only
     the heading that you accessed is deleted.

     If you type an N in response to the 'Are you sure, Y/N?' prompt, you can
     continue reviewing the accessed heading as per usual.



     Printing your Cross References


     To make a hard copy of your cross references to an accessed heading,
     proceed as follows:

     1)  Prepare your printer.

     2)  Access the desired heading.

     3)  Press the TAB key until the desired heading is highlighted in the
     title block of the middle column.

     4)  Press F7.  The print out should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may


                                            48












     occur.

     A common mistake is to press F7 while the highlighting is in the left
     column.  This results in a 25-page listing of the vocabulary list for the
     default version.  Press the ESC key to stop print out of the vocabulary
     list.  The ESC key will NOT stop print out of the accessed heading.



     Exporting Your Cross References to an ASCII Disk File


     To export a soft copy of your cross references to an ASCII file, proceed
     as  follows:

     1)  Decide on a file name.

       You are prompted for a file name during this procedure.  The file name
     must be a valid DOS file name.  The program does not perform any check of
     the file name.

       If you enter an invalid file name, results are unpredictable.

       If you enter the file name of an existing file, the existing file is
     erased when you press F5.  No warning or advisory message is provided.

       The file name can include a drive specifier and path information.

       You MUST type in the extension.  The program will not provide one.
     Without the extension, some word processors may not access the file.  Many
     will not access the file as easily without the proper extension.  Check
     the documentation provided with your word processor and use the proper
     extension.

     2)  If working with floppies, insert the target diskette in the
     appropriate drive.

       As has been discussed elsewhere, it is a good idea to use a separate
     diskette for the purpose of exporting these soft copy versions of your
     cross references.

       Keep track of the space on your target diskette.  As has been discussed
     elsewhere, a full disk error is a fatal error.  You will get kicked out of
     the program.

       Minimum space required is 1,000 bytes.  To this add 10 bytes per word in
     the middle column, 80 bytes per phrase displayed (when the F2 key is
     pressed while the accessed heading is highlighted in the title block of
     the middle column), and 50 bytes per line of comments including all blank
     lines.



                                            49












       The maximum possible space consumed by a single heading is 170,000
     bytes.  But this is ridiculous and will probably NEVER occur.  Even if it
     does, it will fit on a single floppy if you use one that is less than half
     full.  As a typical example, the soft copy file created by this procedure
     for the provide cross references to the word 'rights' consumes
     approximately 4,000 bytes of disk space.

     3)  Access the desired heading.

     4)  Press the TAB key until the desired heading is highlighted in the
     title block of the middle column.

     5)  Press F5.  You are prompted for a file name.  Type in the file name
     with drive specifier, path information and extension as discussed
     previously.

     6)  Press ENTER.  The export should start within a few seconds.  For
     headings with a large number of cross references, a slight delay may
     occur.

     A common mistake is to press F5 while the highlighting is in the left
     column.  This results in a 100,000 byte listing of the vocabulary list for
     the default version.  Press the ESC key to stop exporting of the
     vocabulary
     list.  The ESC key will NOT stop exporting of the accessed heading.

     Don't worry about swapping diskettes.  If you are working with diskettes
     and you forget to swap back to the index or program diskette, you are
     prompted for them when they are needed.  You are NOT prompted for the
     alternate diskette to export soft copy files of your cross references.
     You must do this on your own.






















                                            50






```
{% endraw %}

## MM6.DOC

{% raw %}
```






     MAIN MENU OPTION 6


     The Parameter Search (Words) function allows you to compile a list of
     words, the usage parameters of which conform to a set of values that you
     indicate on an interactive screen.  A description of the interactive
     screen, task-oriented (step-by-step) procedures for using the screen, and
     practical hints for using this function are included in this file.



     Description of the Interactive Screen


     When option 6 is selected from the Main Menu, the interactive screen for
     the parameter search (words) function appears.  On the top line of the
     screen is the title WORD PARAMETER SEARCH.

     On the third line of the screen is a field labeled 'Word List Selection'.
     This field allows you to select a vocabulary list.  When the screen is
     first displayed, the cursor is placed in this field, and the default value
     is 3.

     Beginning at approximately mid screen, 5 other areas for input are
     displayed.  Each of these five areas (described in the following material)
     has two fields to receive input related to a specific word usage
     parameter.  In each of these five areas, one field is for a maximum value,
     and the other field is for a minimum value to be used during the search.
     These maximum and minimum value determine what will be 'found' during the
     search.  Four of the areas require numeric input.  The fifth area accepts
     number(s), letter(s), or word(s).  When the screen is first displayed, the
     maximum and minimum occurring values for the selected version or portion
     are displayed in each of these five areas as the defaults.

     You can move the cursor among the fields using the TAB, up arrow, or down
     arrow keys.  You can enter data in each field using the typewriter keys,
     F9, DELETE, and the left or right arrow keys.

     Press ENTER when cursor is in the top field to select a vocabulary list.

     Press ENTER when the cursor is anywhere else on this screen to initiate
     specified search.

     Press ESC while cursor is on this screen to return to the Main Menu.



     





                                            51












     Parameter Field Descriptions


     Five areas on the screen contain two fields intended to receive your
     input.  The input for each field in an area depends on what you are
     looking for.  The value entered in the left field of any area can be equal
     to or less than the value entered in the right field of that area.  Words
     falling within the limits specified by your input will be displayed in a
     list on another screen.  You can return to this screen by pressing ESC.
     If no words fall within the limits you specify, an advisory message to
     that effect is displayed.  If a value in the left field of any area is
     greater than the value in the right field of the same area, no matches
     will be found.

     Each area is displayed on two lines.

     The top line has a number, a title and another number.  Each title
     specifies the word usage parameter that is entered in its area.  The left
     number indicates the minimum occurring value for a word usage parameter in
     the selected version or portion.  The right number indicates the maximum
     occurring value for a word usage parameter in the selected version or
     portion.  The numbers displayed on the top line of each area may vary for
     each version or portion.  They are determined during execution of Main
     Menu option 10.  The numbers on the top line of an area cannot be changed
     by the user.

     The second line contains a number, the symbols '<= target <=' and another
     number.  When the screen is first displayed, the numbers displayed on the
     second line are the same as the numbers displayed on the first line.  The
     left field for an area begins where the left number is displayed on the
     second line.  The right field for an area begins where the right number is
     displayed on the second line.  The second line can be read, 'The words
     that I am searching for (target) have a value for 'the title on first
     line' that is greater than or equal to the value in the left field and
     smaller than or equal to the value in the right field.  You can change
     the value in any field on the second line by accessing it (use the TAB
     key, up arrow or down arrow keys) and then typing in a desired value using
     the typewriter keys.



     Syllables Area

     The area with the title syllables is displayed on the 13th and 14th lines
     of the screen.  This area is used to specify the maximum and minimum
     number of syllables in the word(s) (if any) found during the specified
     search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


                                            52














     The minimum default value displayed on the top line is 0 because that is
     the number of syllables entered for punctuation marks.  The maximum
     default value depends on which version or portion you select.  The number
     1787 which occurs in Article VII with the signatures has 7 syllables.  If
     you select USACONST.DOC or ORIGINAL.DOC using Main Menu option 2, 7 is the
     maximum default value for the syllables area.  The maximum can be smaller
     for other versions or portions.

     To compile a list of 6 syllable words, you can enter 6 in both the left
     and right fields of the syllables area.  If you leave the values in the
     fields of the other areas at their defaults, you get all the six syllable
     words in the selected vocabulary list.

     To compile a list of 7 syllable words, enter 7 in both fields of the
     syllables area and leave the fields of the other areas at their default
     values.  When you press ENTER, you get the 'No matches found' advisory
     message.  Why is this?  The reason is that 1787 is not included in the
     default vocabulary list.

     To access a list containing 1787, press the TAB or up arrow key until the
     cursor is in the 'Word List Selection' field.  Press ENTER.  Select 4.
     Return to the parameter search screen and repeat the search.  The number
     1787 is 'found'.  The reason that 1787 is found is that it is included in
     the vocabulary list number 4 that you selected.  (This is not true if you
     select the BILLRITE.DOC or AMENDS.DOC portion using Main Menu option 2).

     The preceding exercise is intended to show the functioning of the
     syllables field.  The exercise demonstrates how the selected vocabulary
     list and selected version or portion interact with the syllables field.
     The 'Letters' area and the 'Occurrences' area behave in a similar fashion.
     The exercises are not repeated for them.  The 'Place' area and the 'Word'
     area are somewhat different.  See the corresponding paragraphs for further
     information about the 'Place' and 'Word' areas.

     For more information about vocabulary lists, see file MM13.DOC.  For more
     information about versions and portions, see file MM2.DOC.  For
     information about entering syllable data, see file MM11.DOC.



     Letters Area


     The area with the title letters is displayed on the 13th and 14th lines of
     the screen to the right of the syllables area.  This area is used to
     specify the maximum and minimum number of letters in the word(s) (if any)
     found during the specified search.




                                            53












     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     For the default version, the minimum default value displayed on the top
     line is 1 because that is the number of letters contained in the article
     adjective "A", the Roman Numerals "I" and "X", as well as the personal
     pronoun "I".  The maximum default value is 16 for the default version
     resulting from the use of 'constitutionally' and 'disqualification'.  The
     minimum and maximum default values may vary with the selected version or
     portion.

     To compile a list of 6 letter words, you can enter 6 in both the left and
     right fields of the letters area.  If you leave the values in the fields
     of the other areas at their defaults, you get all the six letter words in
     the selected vocabulary list.



     Occurrences Area


     The area with the title occurrences is displayed beneath the syllables
     area on the 17th and 18th lines of the screen.  This area is used to
     specify the maximum and minimum number of times that the word(s) (if any)
     found by a specified search are used in the selected version or portion.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     For the default version, the minimum default value displayed on the top
     line is 1 because numerous words are used once in that version.  The
     maximum default value is 700 for the default version because that is the
     number of times that the article adjective 'the' is used.  No other word
     occurs more times in the default version.  The minimum and maximum default
     values may vary with the selected version or portion.

     To compile a list of words that occur 6 times, you can enter 6 in both the
     left and right fields of the occurrences area.  If you leave the values in
     the fields of the other areas at their defaults, you get all the words in
     the selected vocabulary list that occur 6 times.



     Place Area


     The area with the title Place is displayed beneath the letters area on the
     17th and 18th lines of the screen.  This area is used to specify where in


                                            54












     the Constitution you want to search for the word(s) (if any) found during
     the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     The minimum default value displayed on the top line is always 1 because of
     the way place is defined.  The maximum default value is depends on the
     total number of words, numbers, and punctuation marks in the selected
     version or portion.  The maximum default value nearly always  varies with
     the selected version or portion.

     Place is defined as the location of a word, number or punctuation mark
     relative to the beginning of a selected version or portion.  Remember, a
     word is a group of alphanumeric characters between two blanks, a
     punctuation mark and a blank, or between a blank and a punctuation mark.
     To obtain place information for a particular occurrence of a word, number
     or punctuation mark, highlight the item of interest in a vocabulary list
     and press F2.  Highlight the occurrence of interest.  Place information is
     displayed at the top of the screen.

     To find what word occurs in the middle of the Constitution, divide the
     default maximum by 2 and enter the rounded off value in the left and right
     fields of the Place area.  If you leave the other areas at their defaults,
     the word displayed is the word in the exact middle of the Constitution.

     A more practical application of this field might be to confine your search
     to a particular Article, Section, or Amendment.  This would involve
     finding the place information for the beginning of two consecutive
     articles, sections, or amendments.  Enter the place information for the
     first item in the left field and enter the place information for the
     second item in the right field.  This allows you to perform your search
     with a given article, section, or amendment.

     Actually, you can specify any place value as beginning or end.  Valid
     input is NOT limited to beginnings of Articles, Section, or Amendments.



     Word Area


     The area with the title Word is displayed beneath the Occurrences area on
     the 21st and 22nd lines of the screen.  This area is used to specify the
     word(s) (if any) found during the specified search.  The words that will
     be found are based on an alphanumeric evaluation of your input.

     To see what is greater than what in alphanumeric sorts performed by this
     program, select Main Menu option 13 and then select option 4.  The


                                            55












     displayed list is in the order that is used by this search function to
     evaluate your input.  Generally speaking, blank comes first, followed by
     punctuation marks and numbers, then capital letters, then lower case
     letters.

     Also, to be found, a target word must be contained in the selected
     vocabulary list.  The default vocabulary list contains no Arabic numbers.
     Hence, if you look for the item with 7 syllables while 3 appears in the
     top field, you get 'No matches found'.  But there is a term with 7
     syllables.  To find it, move the cursor to the top field and press ENTER.
     Select 1 or 4 from the menu that appears.  Enter 7 in the left field of
     the syllable parameter.  Press ENTER.  Surprised?


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen, including the 'Word List Selection' field.


     The defaults on this screen are intended to be such that all words are
     included within the default ranges.  Hence, all blanks is always the
     default for the left field and lower case zz is always the default for the
     right field.

     One practical application of this area involves using it in conjunction
     with the place area.  You can specify a search within a given article,
     section, or amendment as previously described while the same word is
     entered in the left and right fields of the word area.  The resulting
     display tells you if the word occurs in the specified article, section, or
     amendment (get the place information by using F2 on the word ARTICLE,
     SECTION, or AMENDMENT in all upper case), and if so, how many times.



     Performing a Search


     To perform a search, proceed as follows:

     1)  Determine the appropriate values to specify your search, including
     which vocabulary list.

     2)  Select 6 from the Main Menu.

     3)  Select the appropriate vocabulary list if it is other than the one
     indicated in the 'Word List Selection' field.

     4)  Type the previously determined values in the fields of the appropriate
     areas.

     5)  With the cursor in any field except the 'Word List Selection' field,
     press ENTER.


                                            56













         After a delay, you either get a list of words that fit your input, or
     you get an advisory message, 'No matches found'.

         If the 'No Matches found' message appears, press ENTER to return to
     the interactive screen.

         If the list of words 'found' requires more than one screen to display,
     scroll through the list using PG UP, PG DN, HOME, or END keys.  You cannot
     access phrases or text using F2 and F3.

         You can print the list using the F7 key.

         You can export the list to disk using the F5 key.

         Using the screen print function of your computer, you can print a hard
     copy of the interactive screen title WORD PARAMETER SEARCH with your
     input.  F7 won't print that screen.  F5 won't export it to disk.



































                                            57






```
{% endraw %}

## MM7.DOC

{% raw %}
```






     MAIN MENU OPTION 7


     The Parameter Search (Clauses) function allows you to compile a list of
     clauses that conform to a set of values that you indicate on an
     interactive screen.  A description of the interactive screen, task-
     oriented (step-by-step) procedures for using the screen, and practical
     hints for using this function are included in this file.



     Description of the Interactive Screen


     When 7 is selected from the Main Menu, the interactive screen for the
     parameter search (words) function appears.  On the top line of the screen
     is the title CLAUSE PARAMETER SEARCH.

     Beginning at approximately mid screen, 4 areas for input are displayed.
     Each of these four areas (described in the following material) has two
     fields to receive input related to a specific  parameter of clause
     complexity.  In each of these four areas, one field is for a maximum
     value, and the other field is for a minimum value to be used during the
     search.  These maximum and minimum value determine what clauses will be
     found during the search.  The four areas require numeric input.  When the
     screen is first displayed, the maximum and minimum occurring values for
     the selected version or portion are displayed in each of these four areas
     as the defaults.

     You can move the cursor among the fields using the TAB, up arrow, or down
     arrow keys.  You can enter data in each field using the typewriter keys,
     F9, DELETE, and the left or right arrow keys.

     Press ENTER when the cursor is anywhere on this screen to initiate
     specified search.

     Press ESC while cursor is on this screen to return to the Main Menu.



     Parameter Field Descriptions


     Four areas on the screen contain two fields intended to receive your
     input.  The input for each field in an area depends on what you are
     looking for.  The value entered in the left field of any area can be equal
     to or less than the value entered in the right field of that area.
     Clauses falling within the limits specified by your input will be
     displayed one at a time on another screen.  You can return to this screen
     by pressing ESC.  If no clauses fall within the limits you specify, an
     advisory message to that effect is displayed.  If a value in the left


                                            58












     field of any area is greater than the value in the right field of the same
     area, no matches will be found.

     Each area is displayed on two lines.

     The top line has a number, a title and another number.  Each title
     specifies the clause complexity parameter that is entered in its area.
     The left number indicates the minimum occurring value for a clause
     complexity parameter in the selected version or portion.  The right number
     indicates the maximum occurring value for a clause complexity parameter in
     the selected version or portion.  The numbers displayed on the top line of
     each area may vary for each version or portion.  They are determined
     during execution of Main Menu option 10.  The numbers on the top line of
     an area cannot be changed by the user.

     The second line contains a number, the symbols '<= target <=' and another
     number.  When the screen is first displayed, the numbers displayed on the
     second line are the same as the numbers displayed on the first line.  The
     left field for an area begins where the left number is displayed on the
     second line.  The right field for an area begins where the right number is
     displayed on the second line.  The second line can be read, 'The clauses
     that I am searching for (target) have a value for the 'title on first
     line' that is greater than or equal to the value in the left field and
     smaller than or equal to the value in the right field.'  You can change
     the value in any field on the second line by accessing it (use the TAB
     key, up arrow or down arrow keys) and then typing in a desired value using
     the typewriter keys.



     Syllables Area


     The area with the title syllables is displayed on the 13th and 14th lines
     of the screen.  This area is used to specify the maximum and minimum
     number of syllables in the clause(s) (if any) found during the specified
     search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     The minimum default value displayed on the top line is 0 because of the
     double dash between the semi colon and the quote mark that precedes the
     President's inaugural oath.  The maximum default value depends on which
     version or portion you select.  Sixty-six is the maximum number of
     syllables in a clause for the default version.  The maximum can be smaller
     for other versions or portions.

     To compile a series of clauses with a total 6 syllable words, you can


                                            59












     enter 6 in both the left and right fields of the syllables area.  If you
     leave the values in the fields of the other areas at their defaults, you
     get all the six syllable clauses in the selected version or portion.



     Letters Area


     The area with the title letters is displayed on the 13th and 14th lines of
     the screen to the right of the syllables area.  This area is used to
     specify the maximum and minimum number of letters in the clause(s) (if
     any) found during the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     For the default version, the minimum default value displayed on the top
     line is 3 because that is the number of letters contained in the
     conjunction 'and' that occurs between two commas.  The maximum default
     value is 222 for the default version resulting from a phrase in the 22nd
     amendment.  The minimum and maximum default values may vary with the
     selected version or portion.

     To compile a list of clauses that consist of a total of 6 letters, you can
     enter 6 in both the left and right fields of the letters area.  If you
     leave the values in the fields of the other areas at their defaults, you
     get all the six letter clauses in the selected version or portion.



     Words Area


     The area with the title words is displayed beneath the syllables area on
     the 17th and 18th lines of the screen.  This area is used to specify the
     maximum and minimum number of words contained in clause(s) (if any) found
     by a specified search in the selected version or portion.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     For the default version, the minimum default value displayed on the top
     line is 1 because of the use of the conjunction 'and' between two commas.
     The maximum default value is 65 for the default version because of a
     phrase in the 22nd amendment.  No other phrase is longer  in the default
     version.  The minimum and maximum default values may vary with the


                                            60












     selected version or portion.

     To compile a list of clauses that contain 6 words, you can enter 6 in both
     the left and right fields of the words area.  If you leave the values in
     the fields of the other areas at their defaults, you get all the 6-word
     clauses in the selected version or portion.



     Place Area


     The area with the title Place is displayed beneath the letters area on the
     17th and 18th lines of the screen.  This area is used to specify where in
     the Constitution you want to search for the clause(s) (if any) found
     during the specified search.


     NOTE:  A search is 'specified' by the entries in all the fields of all the
     areas on this screen.


     The minimum default value displayed on the top line is always 1 because of
     the way place is defined.  The maximum default value is depends on the
     total number of words, numbers, and punctuation marks in the selected
     version or portion.  The maximum default value nearly always  varies with
     the selected version or portion.

     Place is defined as the location of a word, number or punctuation mark
     relative to the beginning of a selected version or portion.  Remember, a
     clause is a group of words and numbers between two punctuation marks,
     between a carriage return (a blank line) and a punctuation mark or between
     a punctuation mark and a carriage return.  To obtain place information for
     a particular occurrence of a word, number or punctuation mark, highlight
     the item of interest in a vocabulary list and press F2.  Highlight the
     occurrence of interest.  Place information is displayed at the top of the
     screen.

     To find what phrase occurs in the middle of the Constitution, divide the
     default maximum by 2 and enter the rounded off value in the left and right
     fields of the Place area.  If you leave the other areas at their defaults,
     the phrase displayed is the phrase in the exact middle of the
     Constitution.

     A more practical application of this field would involve finding the place
     information for the beginning of two consecutive articles, sections, or
     amendments.  Enter the place information for the first item in the left
     field and enter the place information for the second item in the right
     field.  This allows you to perform your search within a given article,
     section, or amendment.



                                            61














     Performing a Search


     To perform a search, proceed as follows:

     1)  Determine the appropriate values to specify your search.

     2)  Select 7 from the Main Menu.

     3)  Type the previously determined values in the fields of the appropriate
     areas.

     4)  Press ENTER.

         After a delay, you either get a list of clauses that fit your input,
     or you get an advisory message, 'No matches found'.

         If the 'No Matches found' message appears, press ENTER to return to
     the interactive screen.

         Scroll through the list one at a time using any key except ESC. You
     cannot access phrases or text using F2 and F3.

         You can print the list using the F7 key.

         You can export the list to disk using the F5 key.

         Using the screen print function of your computer, you can print a hard
     copy of the interactive screen entitled CLAUSE PARAMETER SEARCH with your
     input.  F7 won't print that screen.  F5 won't export it to disk. 





















                                            62






```
{% endraw %}

## MM8.DOC

{% raw %}
```






     MAIN MENU OPTION 8


     Main Menu option 8 allows you to review reports automatically generated
     during execution of Main Menu option 10.  It also allows you to regenerate
     those reports manually following update of syllable information using Main
     Menu option 11.  This file provides information needed to use Main Menu
     option 8. 



     The Secondary Menu

     When you select Main Menu option 8, a secondary menu consisting of 5
     options numbered 0 - 4 appears.  Options 1 - 3 display reports.  Option 4
     regenerates the reports.  Option 0 returns you to the Main Menu.



     The Reports


     Each of the three reports focuses on a single lexicographic statistic.
     The reports 'read' themselves to you.  The wording is not polished.  You
     can export a report to disk and improve the text using your word
     processor.  The F5 key accomplishes this.  You can print the report out on
     your printer using the F7 key.  If a report occupies more than one screen,
     use the HOME, END, PG UP, and PG DN keys to scroll through it.  When
     finished with a report, press ESC to return to the secondary menu.



     Secondary Menu Option 4


     The execution of this function is automatic, once it is selected.
     Diskette users may be prompted to swap diskettes.  If so, place the index
     diskette in the appropriate drive.  The swap prompt is repeated until the
     expected diskette is placed in the appropriate drive.  When the function
     is completed, you are returned to the secondary menu.  You can review
     reports or return to the Main Menu.












                                            63






```
{% endraw %}

## MM9.DOC

{% raw %}
```






     MAIN MENU OPTION 9


     Main Menu option 9 allows you to review reports automatically generated
     during execution of Main Menu option 10.  This file provides information
     needed to use Main Menu option 9. 



     The Secondary Menu

     When you select Main Menu option 9, a secondary menu consisting of 4
     options numbered 0 - 3 appears.  Options 1 - 3 display reports.  Option 0
     returns you to the Main Menu.



     The Reports


     Each of the three reports focuses on a single lexicographic statistic.
     The reports 'read' themselves to you.  The wording is not polished.  You
     can export a report to disk and improve the text using your word
     processor.  The F5 key accomplishes this.  You can print the report out on
     your printer using the F7 key.  If a report occupies more than one screen,
     use the HOME, END, PG UP, and PG DN keys to scroll through it.  When
     finished with a report, press ESC to return to the secondary menu.


























                                            64






```
{% endraw %}

## PREFACE.DOC

{% raw %}
```






     INTRODUCTION


     NOTE:  Most introductory materials are available on-screen in the TCN
     program.  Help is available from the F1 function key.  Use the F2 or F3
     keys at the Main Menu.  Or operate Main Menu option 14 and use function
     keys F2 through F6 to obtain other introductory information about this
     package.



     This file introduces a package of materials known as The CONSTITUTION
     Notebook Program.

     It provides information about the program, the user documentation, and the
     other materials included on the diskettes with The CONSTITUTION Notebook
     Program.

     You don't have to be a computer expert to install or operate The
     CONSTITUTION Notebook Program.  However, knowledge of general DOS file
     name and path conventions is helpful.  Refer to the documentation that was
     included with your personal computer for information on this topic.



     GENERAL PROGRAM DESCRIPTION

     The materials included with The CONSTITUTION Notebook Program facilitate
     an individual study of The United States Constitution.

     The program is helpful in the study of questions that hinge on word
     usage.

     Two of the Main Menu options allow you to take notes on the United
     States Constitution in an interactive manner.  Your notes consist of a
     heading, a list of related words, a compilation of related phrases, and a
     set of comments.  Your heading and comments are limited only by your
     imagination.  However, only words that appear in the Constitution can be
     placed in the list of related words.  Also, only phrases that appear in
     the Constitution can be placed in the compilation of related phrases.
     The restriction on words and phrases is deliberate.  This restriction
     provides a measure of conciseness and objectivity to notes produced using
     this program.

     When you generate such notes using this program, the program
     automatically saves them on diskette for review, and update.  You can
     print your notes using your printer.  You can also save your notes in a
     file that can be used by many common word processors.  With your notes in
     such a file, you can embellish and expand your comments or you can
     enhance the typestyles and format of the notes.



                                            i












     Lexicography statistics compiled by the program can be used to determine
     the relative simplicity or complexity of various parts of the US
     Constitution.

     More information about capabilities of this program are contained in this
     file under the heading DETAILED PROGRAM DESCRIPTION.


     PROGRAM LIMITATIONS

     This parse engine included with this program can accommodate no more than
     12 additional (39 total) amendments to the US Constitution.  No more than
     2,000 additional words can be accommodated.  There is a limit of 30
     versions or portions.

          Mouse pointer interface is not supported.

          Some features might not work on non-standard keyboards.

          The numeric key pad won't work for entering numbers on many
          computers.  These keys control scrolling and cursor movement.  Use
          the top row of typewriter keys to enter numbers.

          The CAPS lock key or the NUM LOCK key may disable scroll keys when
          enabled.  If scroll keys don't work, toggle the setting of the CAPS
          lock or NUM LOCK functions.



     Extent of Error Recovery

     A reasonable effort has been made to prevent your being ejected from the
     program when mistakes are made during ordinary operator input.  However,
     the program is not idiot-proof.  If you are reviewing the provided
     materials or materials generated by you, getting kicked out of the
     program means the inconvenience of a 3 to 8 minute start up.  If you are
     generating cross references or adding comments, getting kicked out of the
     program means the possible loss of considerable effort in addition to the
     3 to 8 minute start up.  To avoid this, take your time while learning the
     system.  Type carefully to ensure you strike the intended key and review
     input carefully before pressing ENTER.  Save often when using Main Menu
     options 4, 5, or 11.  (The other options either do not require files to
     be saved or else they do it automatically.  Also, do not confuse the file
     save function of Xport, the F5 function key, with the kind of save
     described here.)  To save, exit from the option to the Main Menu.  The
     pertinent files are saved before the Main Menu is displayed.  Then return
     to the option and continue working.






                                            ii













     KEYBOARD

     General.  The typewriter keys on your keyboard work as per usual.
     Depending on the function or task being performed, some inappropriate keys
     are ignored.  For example, you can't type a comma in a filename.

          If your keyboard has cursor movement keys (up arrow, down arrow, left
          arrow, and right arrow) separate from the numeric key pad and they
          don't work, try using the 8, 2, 4, and 6 keys on the numeric key pad
          instead.

          The BREAK, CTRL, ALT, PRINT, F9, F11 and F12 keys have no function
          for this program.  The TCN program ignores them.

          ESC, ENTER, TAB, INSERT, DELETE, BACK SPACE, HOME, END, PG UP, PG DN,
          and the up, down, left, and right arrow keys do things that they are
          often used to do.  Function keys F1 through F10 have mnemonics
          displayed at the bottom of the screen to remind you what they do.
          More information is contained in the file FUNCKEYS.DOC.

          The SHIFT TAB combination is not recognized by the program.

          The \ (backslash) key doesn't perform as expected on some keyboards.
          If you have trouble with it,

               1.  Press and hold the ALT key.

               2.  On the numeric keypad (not the typewriter keys), type a 9
               and release the 9.

               3.  On the numeric keypad (not the typewriter keys), type a 2
               and release the 2.  

               4.  Release the ALT key.

               NOTE:  You may have to toggle the NUM LOCK setting to make this
               work.

               This is the only use for the ALT key and the only time that you
               should type numbers on the numeric keypad while using this
               program.


     PARAMETER SEARCH PROCEDURES

     Generally, the concept for parameter search is similar for words and
     clauses, Main Menu options 6 and 7, respectively.  When the screen first
     appears a set of parameter fields is displayed with defaults set to
     maximum and minimum values that occur in the selected version or portion.
     The  idea is to narrow the search parameters to produce a compilation that


                                            iii












     contains a list of words or phrases of interest.  The procedures to do
     this are contained in files MM6.DOC and MM7.DOC for words and clauses,
     respectively.



     DETAILED PROGRAM DESCRIPTION

     The program is stored on diskette 1, the Program Diskette, in the file
     TCN.EXE.

     The program supports an individual study of the United States Constitution
     by providing the following capabilities:

     I.  Parse text files containing US Constitution which produces:

         A.  A replication of the input file that can be accessed by the
             other features of this program, but which cannot be edited.
             Input file is not altered.

         B.  Exhaustive index of every word.

         C.  Lexicography data base including:

             1.  Gross word count.

             2.  Individual word count.

             3.  Individual word length (number of letters)

             4.  Lexicon that accepts manual input of syllable data for 
                 each word.

             5.  Profiles of word data in 2., 3., and 4..

             6.  Gross clause count.

             7.  Word count of each clause.

             8.  Total characters in each clause (minus blanks).

             9.  Total syllables in each clause (based on 4., above).

             10. Profiles of clause data in 7., 8., and 9..

             11. Nine unique selectable vocabulary lists.

     II.  Access to Lexicography Data Base for Review, Update, Output

     



                                            iv












     III. A Four-Level Data Hierarchy 

     Allows for Organization of Results Produced by Notebook Functions
     Described in Item IV..  In the outline which follows, the top tier is
     represented by the capital letter A.  The second tier is represented by
     the Arabic numeral 1.  The third tier is represented by lower case Roman
     numerals i and ii.  The fourth tier is represented by the lower case
     letters a, b, c, and d.

     A.  Version or portion

     Created using Main Menu option 10, accessed using Main Menu option 2.

         1.  Seminar

         Created and accessed using Main Menu option 3.

              i). Subject

              Created and accessed using Main Menu option 4.

                  a).  Heading

                  Up to 60 characters that names anything you can imagine
                  typed in on the primary subjects screen.

                  b).  List of related words

                  Generated by pressing ENTER while a word is highlighted in
                  the vocabulary list on the secondary subjects screen, or when
                  F2 is pressed while a word in the vocabulary list (again, on
                  the secondary subjects screen) is highlighted followed by
                  ENTER being pressed while a desired phrase is highlighted.

                  c).  Compilation of related phrases

                  Compilation of related phrases is generated by the same
                  keystrokes that generate the list of related words.

                  d).  Comments

                  Generated by manually typing in your thoughts while the
                  cursor is in the third column of the secondary subjects
                  screen.

          







                                            v












             ii). Synonym

             Created and accessed using Main Menu option 5.

                 a).  Heading

                 Can only be a word in the vocabulary list for the selected
                 version or portion.  Generated by highlighting a desired word
                 in the vocabulary list and then pressing ENTER.

                 b).  Word list
       
                 Generated by making a heading active and pressing ENTER while
                 a word is highlighted in the vocabulary list, or when F2 is
                 pressed while a word in the vocabulary list is highlighted
                 followed by ENTER being pressed while a desired phrase is
                 highlighted.

                 c).  Compilation of related phrases

                 Compilation of related phrases is generated by the same
                 keystrokes that generate the list of related words.

                 d).  Comments

                 Generated by manually typing in your thoughts while the cursor
                 is in the third column of the synonym screen.


     As an example of how this hierarchy can be used to some advantage, have a
     supreme court case as a title for a seminar or as a subject.  Use the
     subordinate levels in the hierarchy to compile your research findings.
     Or, use a phrase in the Constitution as the title of a subject or seminar.
     If you do this, you can list supreme court cases in the comments column to
     correlate the phrase with rulings.

     Generally, the less information is related to a heading, the lower you can
     place it in the hierarchy.  Conversely, the more information related to a
     heading, the higher you should place it in the hierarchy.  If you have a
     great deal of information to go under one heading, you could even devote
     an entire version or portion to it.


     IV.  Notebook Functions

         A.  Access output described in I.A. for review.

         B.  Create Topic Heading

         C.  Access of Topic Headings for Review, Update, Deletion, Output



                                           vi












         D.  Compile Index of Phrases Related to Accessed Topic

             NOTE:  User highlights word or phrase, then presses ENTER or
                    the F4 function key to achieve following.  Program
                    automatically extracts pertinent indices from
                    exhaustive output described in I.B..

             1.  Index (under accessed topic) all phrases containing key
                 word.

             2.  Index (under accessed topic) specific occurrence(s) of
                 phrases containing key word.

             3.  Delete (from accessed topic) indices of all phrases
                 containing key word.

             4.  Delete (from accessed topic) index of specific
                 occurrence(s) of phrase containing key word.

         E.  Edit User Comments Related to Accessed Topic

             NOTE:  User TABs into 'Comments' column and blazes away at the
                    keyboard to type in up to approximately 1,000 words of
                    comments related to accessed topic.



     TEXT OF THE UNITED STATES CONSTITUTION IN ASCII FILES

     The package includes the text of the United States Constitution in ASCII
     files.  These files are in a directory named RIGHTS.  There are four files
     that contain this text.  One file contains the entire Constitution with
     all twenty-seven amendments.  The other three files were produced by
     breaking up this file.  More information about these files can be found in
     the file USATEXT.DOC.

     Also included in the RIGHTS directory are files containing the text of 5
     other significant historical documents related to individual rights.















                                           vii






```
{% endraw %}

## USATEXT.DOC

{% raw %}
```






     THE CONSTITUTION ON DISK

     This file contains information about the files included as part of this
     package that contain the text of the United States Constitution.  These
     files were used with Main Menu option 10 of The CONSTITUTION Notebook
     Program to produce the versions and portions of the Constitution that are
     provided with that package.  If you do not have a copy of The
     CONSTITUTION Notebook Program, send LSASE to TCNbP Company, P.O. Box 516,
     Olla, LA 71465-0516 for information.

     Included are files that contain the text of the United States
     Constitution in a format that can be used with many common word
     processors.  These files are contained in a directory named RIGHTS.  This
     directory is on diskette 3 of 4 for 5.25 inch format or diskette 2 of 2
     for 3.5 inch diskettes in the 720 K format.  One file named USACONST.DOC
     contains the text of the entire Constitution including the Bill of Rights
     and the other 17 amendments.  Three more files were formed by breaking
     USACONST.DOC into three sections.  The file named ORIGINAL.DOC contains
     the first 7 articles, the signatures, the resolution proposing
     ratification of the Constitution, and the resolution proposing the
     amendments that became the Bill of Rights.  The file named BILLRITE.DOC
     contains the 10 (of the first 12 proposed) amendments which were ratified
     and have come to be commonly referred to as the Bill of Rights.  Another
     file named AMENDS.DOC contains amendments 11 through 27.


     The files containing portions of the Constitution were provided for the
     benefit of those whose word processors might not hold USACONST.DOC.


     DESCRIPTION OF THE PROVIDED TEXT OF THE CONSTITUTION

     As has been noted previously, the text of the entire Constitution is
     provided with this program.  The version provided is an attempt to match
     the original text to the extent possible while maintaining viability for
     use with the program.  A description of concessions required to adapt the
     text of the Constitution for use with this program follows:


     Hyphenation

     The text of the Constitution contains very few hyphenated words (less
     than a dozen).  The text used with this program contains many.  The
     program treats everything between two blanks as a word.  Therefore, all
     occurrences of the term 'Vice President' are hyphenated so the program
     will automatically distinguish 'Vice-President' from President.  The
     fractions are hyphenated to be counted as one word.  The term 'one third'
     is more properly thought of as one word than two. If you feel otherwise,
     edit the source file, removing the hyphens and analyze the file using
     Main Menu option 10.



                                         86












     No words are hyphenated in order to be divided at the end of a line in
     the text provided with this program.

     Initial Capitalization of Words

     The text of the Constitution contains numerous words that are spelled
     with initial caps in the middle of a sentence.  Many of these words would
     not ordinarily be capitalized according to contemporary writing
     conventions. The provided text preserves the original use of initial
     caps.  A photographic reproduction of the original was employed for this
     purpose. The photographic reproduction ended with the 10th amendment in
     the Bill of Rights.  Past that point, no reliable source was located to
     resolve differences among sources.


     Archaic Spellings

     The text of the Constitution contains several words with archaic
     spellings.  Defence, chuse, labour, encrease and chusing come immediately
     to mind.  The provided text preserves original spellings to the end of
     the 10th amendment in the Bill of Rights.  Past that point, no reliable
     source was found to resolve differences among sources.

     NOTE:  More correctly stated, multiple sources did not corroborate with
     total consistency.  Sources agreeing on one detail might not agree on
     another.


     Punctuation

     The punctuation of the Constitution is difficult to see on a photographic
     reproduction.  There is disagreement among sources as to the exact
     punctuation.  Punctuation in the provided files is best guess.  If your
     guess is better, by all means, change to suit.

     One punctuation mark used in the Constitution has no keyboard equivalent
     on this type of computer.  This punctuation mark is a long dash used in 7
     places.  It is represented in the provided files as two consecutive
     dashes.  A space precedes the first dash and another space follows the
     second dash.  There is NOT a space between the dashes.  The spaces tell
     the program that the dashes are not part of a word.  If you fail to use
     spaces with this punctuation mark,  you will get some interesting
     additions to the beginning of your alphabetically sorted vocabulary list.


     Indentation

     The text of the Constitution used indentation to indicate the start of a
     new paragraph.  The provided files use vertical spacing for this purpose.
     At least one blank line must separate two paragraphs.  In the provided
     files, 3 blank lines precede each new article or amendment, 2 blank lines


                                         87












     precede each new section and 1 blank line precedes each new paragraph.
     The extra vertical spaces preceding articles, sections and amendments are
     for visual effect only.  They are intended to make the file easier for
     you to read.  They have no effect on the program.  As long as you have
     one blank line (2 presses of the ENTER key or carriage return key),
     preceding each new paragraph, section, article or amendment, the program
     should produce accurate references.


     Article Titles

     The text of the Constitution used Article with initial caps (albeit,
     large bold fancy letters were used) to indicate the beginning of a new
     article.  The provided files use ARTICLE in all caps for this purpose.
     When creating files to be analyzed by this program, do not use article in
     all caps for any purpose except to start a new article.  That is, do not
     use ARTICLE (all caps) in the text of any paragraph of any section
     article or amendment.

     Also, a period appears after the word Article each time it is used in a
     heading in the original Constitution.  These periods were omitted from
     these text files to avoid running up the number of clauses.


     Section Titles

     The text of the Constitution used Section with initial caps to indicate
     the beginning of a new section.  The provided files use SECTION in all
     caps for this purpose.  When creating files to be analyzed by this
     program, do not use section in all caps for any purpose except to start a
     new section.  That is, do not use section (all caps) in the text of any
     paragraph of any section article or amendment.

     Also, a period appears after the word Section each time it is used in a
     heading in the original Constitution.  These periods were omitted from
     these text files to avoid running up the number of clauses.  However, the
     period after the associated Arabic numberal is included to avoid having
     the Section title counted as words and syllables in the first clause
     following.



     Amendment Titles

     Headings for the amendments posed a special problem in terms of
     consistency with the original text and program efficacy.  Since not all
     proposed amendments were adopted, a numbering problem developed right
     away.  Also, there is not one consistent heading throughout the
     amendments according to the sources used.  The provided files use
     AMENDMENT in all caps to indicate the start of a new amendment.  When
     creating files to be analyzed by this program, do not use amendment in


                                         88












     all caps for any purpose except to start a new amendment.  That is, do
     not use AMENDMENT (all caps) in the text of any paragraph of any section
     article or amendment.  The provided files contain only those amendments
     which were ratified.


     Inclusion of Resolution

     The provided files contain the resolution by which the Constitution was
     brought into effect.  Also included is the resolution proposing the
     amendments that became the Bill of Rights.  These resolutions follow the
     signatures in Article VII and precede Amendment I in the Bill of Rights.
     Both resolutions are included in USACONST.DOC as well as in ORIGINAL.DOC.  

     Due to the way the TCN program generates references, both resolutions get
     the reference prefix Art 7.  Given the relatedness of the purpose of both
     these resolutions, this is not entirely inappropriate.

     Any attempt to parse a portion with the second resolution at the
     beginning of BILLRITE.DOC is guaranteed to produce disappointing results
     regarding references.


     Calligraphy

     The TCN program is limited to the use of initial caps or all caps in the
     attempt to express an infinite range of emphasis made possible by human
     penmanship.

     For example, the word "done" at the opening of the signature section of
     the Constitution is in all lower case.  However, the letters are
     deliberately made much larger.  In its attempt to express this emphasis,
     TCNbP Company decided to use an initial capital letter.

     A similar dilemna is presented by the words "In Witness" and "We the
     People".



     Unresolved Questions

     Several questions are left unresolved by the photogenic copy.  One
     concerns the use of the apostrophe with its.  Another concerns use of
     initial capitalization in the word suits in amendment VII in the Bill of
     Rights.

     Further difficult questions are raised by the issue of calligraphy.

     Frankly, due to the difficulty in reading some words, not every source
     agrees as to whether a particular word is capitalized.  In some cases,



                                         89












     not every source agrees on the spelling of some words.  TCNbP tried
     heroically to resolve these issues, but did not totally succeed.

     What to do?  Give users Main Menu option 10.  You prepare a source file
     to suit yourself.  Parse it using Main Menu option 10 and work from that
     version.  Modification of source files is described in the text that
     follows.


     MODIFICATION OF PROVIDED FILES CONTAINING CONSTITUTIONAL TEXT

     Within limits, you can use this program to produce its full compliment of
     output files on modified versions of the provided files.  This capability
     is provided mainly in the event that the Constitution is amended as well
     it may be in the not too distant future.


     Roman Numerals

     The program can read Roman Numerals (Arabic not allowed for amendment
     numbers) up to 39.


     Additional Words

     The program can accept at least 1,000 additional words (quite a lot
     considering the average size of amendments).  An exact maximum cannot be
     determined; however, it will probably hold nearer to 2,000 additional
     words.


     Why Modify the Provided Source Files?

     Other than possible amendments, one reason is that you may wish to
     analyze a version that has all superseded phrases omitted. (Given the
     amount of superseded text devoted to the election of the President and
     order of succession in the event of his death or resignation, parsing a
     file with superseded phrases omitted should produce interesting results
     concerning the relative number of times Congress and President are used
     if nothing else.)  Or, you may wish to analyze the Constitution on an
     Article-by-Article basis.

     Another reason to modify the source file is to incorporate modern
     spelling and capitalization conventions.  The spelling used in the
     provided files is intended to match the original spelling.  This includes
     archaic spellings as well as the use of initial caps or in one or two
     cases all caps.  Several versions of the Constitution were compared, but
     the decision where multiple sources did not match was not always certain.
     If you can obtain a photographic copy of the original (amendments 11 - 27
     of this version were not derived from that), believe it before these
     files.


                                         90













     Other variations of valid modifications are limited only by your
     imagination.

     Use of CONSTITUTION, ARTICLE, and AMENDMENT

     In addition to the carriage return usage and hyphenation effects
     described previously, the first line of the file MUST contain the word
     "CONSTITUTION", "ARTICLE", or "AMENDMENT" in all upper case.  "ARTICLE",
     or "AMENDMENT" in all upper case must be followed by a Roman numeral that
     goes with the material that follows the heading.  The Roman numeral must
     be followed by two (minimum) carriage returns.  Start the file with
     "CONSTITUTION" if your analysis includes the Preamble.  Start the file
     with "ARTICLE" if your analysis begins in the first 7 articles following
     the preamble.  Start the file with "AMENDMENT" if your analysis begins in
     the Bill of Rights or thereafter.



     Use of Section or SECTION

     Where "Section" is used to indicate the beginning of a new section
     reference in the text, the word must be in all upper case, SECTION.  Even
     if it is eventually used as upper case in the text of an amendment
     (unlikely), you must use initial caps.  The same is true for ARTICLE, or
     AMENDMENT.  The word "Constitution" can be used anywhere in the file as
     initial cap, all lower case or all upper case.  However, if the first
     word in a file is CONSTITUTION in all caps, the program will 'think' that
     it is in the Preamble, whether it is or not.  For clarification about the
     effect of using these words in all caps, initial caps, all lower case,
     refer to the provided text files and the resulting output of the program.
     The words in all caps ARTICLE, AMENDMENT, SECTION, and CONSTITUTION can
     easily be found in the alphabetically sorted vocabulary lists using F6.

     Failure to use CONSTITUTION, AMENDMENT, ARTICLE, or SECTION properly may
     result in improper references.


     Hyphenation

     Analysis of files that incorporate automatic hyphenation may produce
     unpredictable results.


     Effects of Vertical Spacing

     At least one vertical space (blank line) must appear between paragraphs.
     Always use two presses of the ENTER or carriage return key, even if one
     press gives you a blank line.  You can put more than one blank line if
     you wish.  In the provided files, three blank lines precede each article



                                         91












     or amendment heading, two blank lines precede each section, and one blank
     line precedes each paragraph.



     Use of Horizontal (Linear) Spaces

     In the provided file, two spaces follow each period (except at the end of
     a paragraph), two follow each colon and semicolon.  One space follows
     each comma.  You can use one linear (horizontal) space where two are used
     without affecting the output.


     Carriage Returns and Horizontal Spaces in the Signature Section

     If your word processor has a feature that allows you to view the
     placement of carriage return characters in a file, enable that feature
     and look at the signatures in ORIGINAL.DOC.  Notice that in the
     signatures, blanks are used as separators except after the last signature
     for each state.  In this manner, the signatures for each state get
     treated as one paragraph.  If you put carriage returns after each
     signature (press the ENTER key), each individual signature will get a
     separate paragraph reference.  This can place your references in Article
     7 at variance with the same references of other individuals using this
     program.  To maintain the consistency of your references, do not change
     the use of carriage returns (ENTER key presses) in the signature section.


     Closing Carriage Returns

     Always put at least 4 carriage returns after the last word or punctuation
     mark in a version or portion of the Constitution that you prepare for
     parsing.  To do this, press your end of file combination (usually CTRL
     END).  Just get the cursor located past the last punctuation mark or the
     last character in the last word.  Press ENTER 4 times.



     Use of ASCII File

     Use the 'Text Only' or ASCII file save option of your word processor to
     store your modified file.  Parsing a non-ASCII file may produce
     unreliable results.

     Use the carriage return after paragraphs option.  If your word processor
     does not provide this function, or you do not use it, the TCN program
     will generate a unique reference (Art 1 Sec 1.1, etc.) for each line of
     text.  You will crash the program guaranteed on a full blown version of
     the Constitution.  Even if the program does not crash, your references
     will be useless.



                                         92






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2949

     Volume in drive A has no label
     Directory of A:\

    TITLE               46  11-27-91   4:06p
    BOOK     BAT        22   8-21-92  10:25p
    RIGHTS       <DIR>    
    USERDOC      <DIR>    
            4 file(s)         68 bytes

     Directory of A:\RIGHTS

    .            <DIR>    
    ..           <DIR>    
    USACONST DOC     51352   8-05-92   9:10p
            3 file(s)      51352 bytes

     Directory of A:\USERDOC

    .            <DIR>    
    ..           <DIR>    
    COVER    DOC       403   8-08-92   6:18p
    CONTENTS DOC     24050   8-08-92   8:51p
    PREFACE  DOC     14758   8-21-92  10:33p
    EVAL     DOC     29576   8-08-92   6:34p
    MAINMENU DOC      9652   8-08-92   6:38p
    FUNCKEYS DOC      6514   8-08-92   6:42p
    MM1      DOC      1093   8-08-92   6:55p
    MM2      DOC      5218   8-08-92   7:03p
    MM3      DOC      6076   8-08-92   7:07p
    MM4      DOC     23579   8-08-92   7:10p
    MM5      DOC     23189   8-08-92   7:12p
    MM6      DOC     16356   8-08-92   7:16p
    MM7      DOC     11208   8-08-92   7:57p
    MM8      DOC      1753   8-08-92   8:00p
    MM9      DOC      1140   8-08-92   8:01p
    MM10     DOC     15281   8-08-92   8:02p
    MM11     DOC      4435   8-08-92   8:05p
    MM12     DOC       982   8-08-92   8:07p
    MM13     DOC     12167   8-08-92   8:09p
    EDITOR   DOC      8983   8-08-92   8:16p
    USATEXT  DOC     18030   8-08-92   8:24p
    DISKROOM DOC      8162   8-08-92   8:27p
    BACKUP   DOC      5521   8-08-92   8:31p
    BRWSNDX  TCN       237   4-21-92   7:20p
    MANUAL   BAT       487   4-27-92   8:50p
           27 file(s)     248850 bytes

    Total files listed:
           34 file(s)     300270 bytes
                            6144 bytes free
