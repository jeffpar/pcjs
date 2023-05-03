---
layout: page
title: "PC-SIG Diskette Library (Disk #1044)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1044/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1044"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHIRO PATIENT TRACKING SYSTEM"

    Chiro was written in conjunction with several physicians to provide a
    specific service in a medical office. The system maintains a detailed
    patient data base and eliminates the nuisance of typing claim forms. It
    uses friendly and colorful screens, is easy installed, with no
    cumbersome manuals required. It is completely menu driven, with on-line
    help always available. Backup, purge, and restore of patient data is
    provided. Claim form data is printed directly on form HCFA-1500. Other
    printed output includes reports of outstanding claims and standard offic
    statements. It provides automatic sort and merge of new patient records
    and can rapidly fetch any patient record for analysis or claim form
    processing. Each registered copy is personalized with name, address,
    telephone, social security, and ID numbers of the physician. Similar
    medical products on the market retail for thousands of dollars.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1044.TXT

{% raw %}
```
Disk No: 1044                                                           
Disk Title: Chiro Patient Tracking System                               
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: Chiro Patient Tracking System                            
Author Version: 4.0                                                     
Author Registration: $25.00                                             
Special Requirements: A hard drive, and a printer.                      
                                                                        
Chiro was written in conjunction with several physicians to provide a   
specific service in a medical office.  The system maintains a detailed  
patient data base and eliminates the nuisance of typing claim forms.    
It uses friendly and colorful screens, is easy installed, with no       
cumbersome manuals required.  It is completely menu driven, with on-line
help always available.  Backup, purge, and restore of patient data is   
provided.  Claim form data is printed directly on form HCFA-1500.  Other
printed output includes reports of outstanding claims and standard offic
statements.  It provides automatic sort and merge of new patient records
and can rapidly fetch any patient record for analysis or claim form     
processing.  Each registered copy is personalized with name, address,   
telephone, social security, and ID numbers of the physician.  Similar   
medical products on the market retail for thousands of dollars.         
                                                                        
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
║                     <<<<  Disk No 1044 CHIRO  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To install the program, type: INSTALL (press enter)                     ║
║                                                                         ║
║ To start the program, type: CHIRO  (press enter)                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

















                                    CHIRO
                                    -----

                              Patient Data Base
                                     and
                             Claim Form Processing

                              Version 4.0 - 3/90








                                 USERS GUIDE







                            C & C Computer Support
                            Michael A. Currao
                            RR 3, Box 3700
                            Factoryville, PA 18419


































                            LICENSE AGREEMENT




      (C)Copyright 1987,88,89,90  C & C Computer Support - CHIRO.EXE



       . You assume responsibility for the installation, use, and
         results obtained from this program.

       . This program is provided without warranty of any kind, either
         expressed or implied. All warranties are disclaimed.

       . The entire risk as to the quality and performance of the
         program is with you. Should the program prove defective, you
         assume the entire cost of all necessary servicing, repair, or
         correction.





































      System Requirements
      -------------------

      IBM Personal Computer(tm) or compatible
      256K of random access memory (RAM)
      Minimum 10 meg Hard Drive
      80 column monitor (MONO, CGA, EGA, or VGA)
      PC-DOS or MS-DOS, version 2.0 or higher
      80 character per line printer
      Claim Forms (HCFA-1500)






      Explanation of Diskette files
      -----------------------------

      CHIRO.EXE       - Main program
      CLAIM.DAT       - Sample patient file
      INDEXREC.DAT    - Sample index records
      INSTALL.BAT     - Batch file for Hard Drive installation






      Start DOS
      ---------
      Follow the procedures outlined in the system's Operating Manual
      for the version of DOS installed in your system, to obtain a DOS
      prompt. On a hard drive system the prompt is usually C>.







      Running CHIRO
      -------------
      At the C> or the directory prompt (eg. C:\CHIRO>) type "CHIRO"
      AFTER you have entered the date and time. Always enter the
      correct date and time when running the program.
      If your system contains a clock/calendar option simply type
      "CHIRO" to start the program.
      The system was designed to automatically adjust itself for any
      type of monitor (CGA, EGA, VGA or monochrome).


















      MAIN MENU
      ---------
      The two main functions of the program are to print Claim Forms
      HCFA-1500, and to maintain a data base of the forms submitted.
      The data base will contain a permanent record of Office Visits,
      Diagnosis History, Procedure Codes, and Charges.

      Patient records can be Created, Displayed, Modified, Deleted.

      All functions are selected through the MAIN MENU. As new
      records are created the system will automatically sort the
      records in alphabetical order.

      Certain functions, such as searching for a particular record,
      or bringing up the HELP screen, can be activated at various sub
      menus or screens.







      1 - Create Patient Record
      -------------------------
      You will be prompted by a highlighted bar area for all data
      input. The highlighted area actually illustrates, in graphic
      form, the length of the field. Over 50 items of information
      can be entered to create the Patient Record.

      All NUMERIC fields, including DATE fields are automatically
      adjusted to provide proper alignment when a print of the Claim
      Form is requested.







      2 - Display or Edit Record
      --------------------------
      There are two methods to fetch a record for display or edit.
      You may either type in the patient's name on the menu displayed
      or you may search for the record by hitting the F3 key.

      The F3 method will allow you to scan the entire data base index
      file, or you may type in the first initial of the Patient's last
      name. A pop-up window will prompt you accordingly.

      If you make an error in typing the patient's name, just hit F4
      which will allow you to re-type the name.














      Display or Edit Record (Screen 1 of 2)
      --------------------------------------
      All displayed fields can be changed.

      To select an item on Screen 1 use the up and down cursor
      keys to move the arrow and then hit [RETURN].
      The System will display an error message if the NumLock
      key is active, as it must be OFF to use the cursor keys.

      Extensive editing is conducted to make certain that all
      input data is valid.

      The function to remove a record is available by typing
      "DELETE" at the Last Name prompt on Screen 1.











      Display or Edit Record (Screen 2 of 2)
      --------------------------------------

      All displayed fields can be changed with the exception of
      Total Charges, which will be automatically calculated on
      creation, and on modification of Claim History items.

      To select an item on Screen 2 use any cursor key to move
      the arrow key in any direction and hit [RETURN].

      The System will display an error message if the NumLock
      key is active, as it must be OFF to use the cursor keys.
      Extensive editing is conducted to make certain that all
      input data is valid.

      Although Form HCFA-1500 allows only six entries, CHIRO
      has been designed to permit up to 12 entries on the form,
      therefore, the Patient file will hold up to 12 Claim history
      items. In addition, please note that the date fields are
      NOT restricted to 8 digits, thereby allowing multiple date
      entries, such as 4/3,7,18/89.




















      3 - Purge Deleted Records
      -------------------------
      This menu selection is used when you want to physically remove
      patient records that are no longer needed. The only records
      that will be erased will be the ones you previously marked for
      deletion. This is accomplished on Screen 1 by typing DELETE
      for the patient's last name entry. The system is designed to
      physically maintain all records, whether or not you mark them
      for deletion.

      The purge function should be used with CAUTION, as the deleted
      records cannot be recovered. It is recommended that this function
      be used only when the data base grows very large, and disk space
      is needed.

      If no records are marked for deletion the purge function will
      rewrite each patient record intact, and will report the results
      of the activity.







      4 - Produce Statement
      ---------------------
      This item will allow you to create and print a statement as
      designed by you. The function will accommodate a standard size
      statement (5 1/2" x 6 3/4"), presently in use by most offices.

      A facsimile of the form is displayed on the screen. The first
      displayed screen represents the upper part of the form and the
      second screen represents the lower part of the form.
      Up to fourteen lines of information may be entered on the lower
      portion of the form.






      5 - Claim Form Report
      ---------------------
      Selection of this item will allow you to print a report of all
      claim forms submitted for the period of time specified by you.
      At the subsequent screen type in the beginning and ending dates
      of the time frame required. The system will search through the
      patient database and select all patient records falling within
      the selected date criteria, and will produce a report which
      includes the patient's name, the date that the form was created,
      and monetary control items.
















      6 - Backup Data Files
      ---------------------
      The system will automatically backup critical files by placing
      a duplicate copy of the file on the hard disk after each
      session. It is up to you to determine when a physical backup
      should be made of the files on a floppy diskette, for extra
      security. It is recommended that this task be activated at
      least ONCE PER DAY.
      In the event of a disaster (eg. hard disk crash caused by power
      failure), the floppy disk backups can be used to restore all
      patient data.
      Before selecting this item make certain that several FORMATTED
      diskettes are available for immediate use. If you select the
      item and formatted diskettes are not available, hit [ESC] to
      exit or abort the function.









      7 - Print Claim Form
      --------------------
      You will be prompted for a date and kind of claim, as this
      information is required on Claim Form HCFA-1500.
      The Form must be set correctly in the printer to ascertain
      all fields are properly positioned.
      To do so, align the top of the form just above the printer
      head and print a few samples. Once you have determined that
      alignment of all fields is correct, it is recommended that
      you mark a blank claim form for future reference.
      If the volume calls for it, you should consider purchasing
      perforated continuous forms of HCFA-1500 through your usual
      supply channels.






      8 - Quit The Program
      --------------------
      It is absolutely necessary to exit the program properly to
      trigger off automatic backup of the Patient Files.
      If the machine is turned off without properly exiting the
      program through the MAIN MENU, or if a power failure occurs,
      the integrity of the Data Base will be in question, and may
      require emergency restore measures.








                           REGISTRATION FORM
                           -----------------

      In order to obtain the full benefit of CHIRO you are encouraged
      to register the program with the author. Doing so will enable you
      to receive a custom version which will give you the ability to
      automatically have your name, address, telephone number, social
      security number, and ID numbers placed on the claim form. Full
      personalization beyond what is available in this shareware version
      will also become available to you.

      Most importantly, CHIRO is consistently maintained and supported,
      resulting in frequent updates because of insurance carrier and other
      requirements. Registration will allow you to enjoy automatic update
      notification.

      Please complete the following Form and forward it along with the
      nominal registration fee of $60.00 to:


                       C & C Computer Support
                       Michael A. Currao
                       RR 3, Box 3700
                       Factoryville, PA 18419


---------------------------------------------------------------------



      FULL NAME AND TITLE
                          ------------------------------------

      ADDRESS (LINE 1)
                       ---------------------------------------

      ADDRESS (LINE 2)
                       ---------------------------------------

      ADDRESS (LINE 3)
                       ---------------------------------------

      TELEPHONE NUMBER
                       ---------------------------------------

      SOCIAL SECURITY NUMBER
                             ---------------------------------

      ID NUMBER
                ----------------------------------------------

      EMPLOYER ID
                 ---------------------------------------------

      FORMAT   5 1/4" DISKETTE           3 1/2" CARTRIDGE
                               -----                      -----



              THANK YOU for supporting SHAREWARE !!!!




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1044

     Volume in drive A has no label
     Directory of A:\

    CHIRO    EXE    184758   3-24-90   6:32p
    INDEXREC DAT       152   3-24-90   2:35p
    CLAIM    DAT      4000   3-24-90   6:40p
    MANUAL   DOC     12417   3-15-90   9:30a
    MANUAL   BAT       147   5-23-88  10:32a
    INSTALL  BAT       304   5-23-89   5:24p
    GO       BAT        38   5-23-88  10:34a
    GO       TXT       694   4-22-90   6:37a
    FILE1044 TXT      2073   4-23-90   2:33p
            9 file(s)     204583 bytes
                          111616 bytes free
