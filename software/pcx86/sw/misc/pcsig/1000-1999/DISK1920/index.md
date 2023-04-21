---
layout: page
title: "PC-SIG Diskette Library (Disk #1920)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1920/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1920"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MASS APPEAL"

    MASS APPEAL doesn't just address envelopes and print mailing labels, it
    creates mail merge files for all the major word processors, dials the
    phone, allows you to disable fields you don't need, and utilizes macros
    to speed data entry, and reduce errors.  Many powerful features found
    only in high-end multiuse databases have been fully integrated into MASS
    APPEAL such as field default values, copy fields from the previous
    entry, and advanced sort capabilities.
    
    MASS APPEAL is a fully menu-driven program, requiring little or no
    knowledge of database management programs.  All the "grunt" work has
    been done for you, allowing you to concentrate on maintaining your
    mailing list.  Don't worry about how to generate a report -- reports
    are plentiful.
    
    A companion program Zipp Appeal, PC-SIG disk #1921, allows you to enter
    the name of the city and state by simply typing the zip code.  Or you
    type the city and the zip code is found.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MA.DOC

{% raw %}
```

             Mass Appeal Mailing List Manager - Version 3.2


                  Copyright 1989, Mass Appeal Software


                          Mass Appeal Software
                              P.O. Box 772
                          Alabaster, AL  35007

                             (205) 663-1270


 THIS  PROGRAM IS PROVIDED "AS IS"  WITHOUT WARRANTY OF ANY KIND,   EITHER 
 EXPRESSED OR IMPLIED,  INCLUDING,  BUT NOT LIMITED TO,  THE APPLIED  WAR-
 RANTIES  OF MERCHANTABILITY AND FITNESS,  FOR A PARTICULAR PURPOSE.   THE 
 ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. 
 SHOULD THE PROGRAM PROVE DEFECTIVE,  YOU,  (NOT MASS APPEAL SOFTWARE OR A 
 DISTRIBUTOR)  ASSUME THE COST OF ALL NECESSARY SERVICING,  REPAIR OR COR-
 RECTION.   IN NO EVENT WILL MASS APPEAL SOFTWARE BE LIABLE TO YOU FOR ANY 
 DAMAGES, INCLUDING ANY LOST PROFITS,  SAVINGS OR OTHER INCIDENTAL OR CON-
 SEQUENTIAL  DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE SUCH  PRO-
 GRAM.
                            Mass Appeal Version 3.2


                               Table of Contents

 1 Introduction ................................................... 1
    1.1 Mass Appeal ............................................... 1
    1.2 Requirements .............................................. 1
    1.3 Zipp Appeal ............................................... 1

 2 Installation ................................................... 1
    2.1 Floppy Disk Drive ......................................... 1
    2.2 Hard Disk Drive ........................................... 2

 3 Execution ...................................................... 3
    3.1 Floppy Disk Drive ......................................... 3
    3.2 Hard Disk Drive ........................................... 3

 4 Main Menu ...................................................... 3

 5 Add Records .................................................... 3
    5.1 More ...................................................... 4
    5.2 Re-Edit ................................................... 4
    5.3 Help ...................................................... 4
       5.3.1 Next-Page ............................................ 4
       5.3.2 Return ............................................... 5
    5.4 Previous .................................................. 5
    5.5 Return .................................................... 5
    5.6 * ......................................................... 5
    5.7 Speeding Data Entry ....................................... 5
       5.7.1 Add Routine Defaults ................................. 5
       5.7.2 Function Keys ........................................ 5
       5.7.3 Turn Fields On/Off For Input ......................... 6
       5.7.4 Zipp Appeal .......................................... 6

 6 Edit/View Entries .............................................. 6
    6.1 Del ....................................................... 6
    6.2 Edit ...................................................... 7
    6.3 Find ...................................................... 7
       6.3.1 No Match Could Be Found .............................. 7
    6.4 Goto ...................................................... 7
       6.4.1 Top .................................................. 7
       6.4.2 Bottom ............................................... 7
       6.4.3 Record# .............................................. 7
       6.4.4 Return ............................................... 7
    6.5 Prev ...................................................... 8
    6.6 Next ...................................................... 8
    6.7 Help ...................................................... 8
       6.7.1 Next-Page ............................................ 8
       6.7.2 Return ............................................... 8
    6.8 Specify ................................................... 8
    6.9 Order ..................................................... 9
    6.10 Count .................................................... 9
    6.11 eXit ..................................................... 9
       6.11.1 Function Keys ....................................... 9

 7 Pack The Data File ............................................. 9


                                   Page -I-
                            Mass Appeal Version 3.2


 8 Generate Some Output ...........................................10
    8.1 Generate A Report .........................................10
       8.1.1 Screen ...............................................10
       8.1.2 Printer ..............................................10
       8.1.3 Quit .................................................11
    8.2 Generate Envelopes ........................................11
       8.2.1 Print ................................................11
       8.2.2 Skip .................................................11
       8.2.3 Quit .................................................11
    8.3 Generate Rotary Cards .....................................12
       8.3.1 Screen ...............................................12
       8.3.2 Printer ..............................................12
       8.3.3 Quit .................................................12
    8.4 Generate Mailing Labels ...................................13
       8.4.1 Screen ...............................................13
       8.4.2 Printer ..............................................13
       8.4.3 Quit .................................................14
    8.5 Generate A Mail Merge File ................................14
    8.6 Exit Output Options, Return To Main Menu... ...............14

 9 Import Existing Data ...........................................15

 10 Change Active Data File .......................................15
    10.1 Select-A-File ............................................15
    10.2 Add-A-File ...............................................15
    10.3 Delete-A-File ............................................15
    10.4 Return ...................................................16

 11 Access The Maintenance Routines ...............................16
    11.1 Label Options ............................................16
       11.1.1 Define Or Select A Label ............................16
          11.1.1.1 Select-A-Label .................................16
          11.1.1.2 Add-A-Label ....................................16
          11.1.1.3 Delete-A-Label .................................17
          11.1.1.4 Edit-A-Label ...................................17
          11.1.1.5 Return .........................................17
       11.1.2 Pause After Certain # Labels ........................17
       11.1.3 Define A Printer String For Labels ..................17
       11.1.4 Print Multiple Copy End Of Set Markers? .............17
       11.1.5 Print Bulk Information For Mailing Labels? ..........18
       11.1.6 Last Name Or Company Name First On Labels? ..........18
       11.1.7 How Many Copies Of Each Label Should Be Printed? ....18
       11.1.8 Exit Label Maintenance, Return To The Main Menu... ..18
    11.2 Report Options ...........................................18
       11.2.1 Change Report Format ................................18
          11.2.1.1 Next-Screen ....................................19
          11.2.1.2 Previous-Screen ................................19
          11.2.1.3 Select-Format ..................................19
          11.2.1.4 Return .........................................19
       11.2.2 Define A Printer String For Reports .................19
       11.2.3 Define A Printer Compression String For Reports .....19
       11.2.4 Set Spacing On Printed Output, Single, Double, Etc. .20
       11.2.5 Exit This Report Maintenance, Return To Main Menu... 20
    11.3 Function Key Setup .......................................20
       11.3.1 Define Function Keys ................................20

                                   Page -II-
                            Mass Appeal Version 3.2


       11.3.2 Define Alt + Function Keys ..........................20
       11.3.3 Define Ctrl + Function Keys .........................20
       11.3.4 Define Shift + Function Keys ........................20
       11.3.5 Reset Function Keys To Original Values ..............21
       11.3.6 Exit Function Key Maintenance, Return To Main Menu ..21
    11.4 Add Routine Defaults .....................................21
       11.4.1 Set Up Default City .................................21
       11.4.2 Set Up Default State ................................21
       11.4.3 Set Up Default Zip Code .............................21
       11.4.4 Set Up Default Category .............................21
       11.4.5 Set Up Default Salutation ...........................21
       11.4.6 Set Up Default Home Phone ...........................22
       11.4.7 Set Up Default Work Phone ...........................22
       11.4.8 Set Up Default Comment Field ........................22
       11.4.9 Reset All Default Values To Blank Values ............22
       11.4.10 Exit Default Maintenance, Return To Main Menu... ...22
    11.5 Miscellaneous Options ....................................22
       11.5.1 Change Monitor Type .................................22
       11.5.2 Change Output Order .................................23
       11.5.3 Group Deletion Of Records ...........................23
       11.5.4 Group Recovery Of Records ...........................23
       11.5.5 Reset All Data File Pointers ........................23
       11.5.6 Report Of Previously Saved Criteria .................23
          11.5.6.1 Screen .........................................24
          11.5.6.2 Printer ........................................24
          11.5.6.3 Quit ...........................................24
       11.5.7 Define A Setup String For Envelopes .................24
       11.5.8 Carriage Return Required For Field Advancement ......24
       11.5.9 Turn On/Off Checking For Correct State Abbreviations 24
       11.5.10 Set Up/Define Category Codes .......................24
       11.5.11 Data Entry Name Order ..............................25
       11.5.12 Turn On/Off Fields For Input .......................25
       11.5.13 Color Option Background Setting ....................25
       11.5.14 Set Mail Merge File Output Type ....................25
          11.5.14.1 ASCII .........................................26
          11.5.14.2 WordStar ......................................26
          11.5.14.3 WordPerfect ...................................26
          11.5.14.4 MicroSoft Word ................................26
          11.5.14.5 Comma Delimited ...............................26
          11.5.14.6 Fixed Length ASCII ............................26
       11.5.15 Set Amount Of Info. In Mail Mrg ....................26
       11.5.16 Set Up Communication Parameters ....................27
          11.5.16.1 Communications Port ...........................27
          11.5.16.2 Dial 9 First? .................................27
          11.5.16.3 Local Area Codes ..............................27
       11.5.17 Return To The Main Menu, Please ....................27
    11.6 Index File Adjustment System .............................27
       11.6.1 Zip Code ............................................28
          11.6.1.1 Option 1 .......................................28
          11.6.1.2 Option 2 .......................................29
          11.6.1.3 Option 3 .......................................29
          11.6.1.4 Option 4 .......................................29
       11.6.2 Last Name ...........................................29
          11.6.2.1 Option 1 .......................................29
          11.6.2.2 Option 2 .......................................30

                                  Page -III-
                            Mass Appeal Version 3.2


          11.6.2.3 Option 3 .......................................30
          11.6.2.4 Option 4 .......................................30
          11.6.2.5 Option 5 .......................................30
       11.6.3 Company Name ........................................31
          11.6.3.1 Option 1 .......................................31
          11.6.3.2 Option 2 .......................................31
          11.6.3.3 Option 3 .......................................31
          11.6.3.4 Option 4 .......................................31
          11.6.3.5 Option 5 .......................................32
          11.6.3.6 Option 6 .......................................32
       11.6.4 Exit, Return To Main Menu ...........................32
    11.7 Merge Two Existing Data Files ............................32
    11.8 Check For Duplicates In The Active Data File .............33
    11.9 Exit The Maintenance Menu, Return To Main Menu ...........33

 12 Exit This Program, Return To DOS... ...........................33

 13 ShareWare .....................................................33

 14 Appendix A - Defining Selection Criteria ......................34
    14.1 More-Criteria ............................................34
       14.1.1 City ................................................34
       14.1.2 State ...............................................34
       14.1.3 Last Name ...........................................35
       14.1.4 Salutation ..........................................35
       14.1.5 Zip Code Range ......................................35
       14.1.6 Category Field ......................................35
       14.1.7 Date Field Range ....................................35
       14.1.8 Home Phone Area Code ................................36
       14.1.9 Work Phone Area Code ................................36
       14.1.10 Company Name Keyword ...............................36
       14.1.11 Comment Field Keyword ..............................36
       14.1.12 Assigned Record Number .............................36
    14.2 Save-Criteria ............................................37
    14.3 Retrieve-Criteria ........................................37
    14.4 Parenthesis ..............................................37
    14.5 Done .....................................................37

 15 Appendix B - Cursor Movement ..................................38

 16 Appendix C - Printer Setup Strings ............................38

 17 Appendix D - Technical Information ............................39
    17.1 .DBF File Structure ......................................39
    17.2 Custom Index File Expression .............................39

 18 Zipp Appeal ...................................................40
    18.1 Installation .............................................41
    18.2 Mass Appeal And Zipp Appeal Interaction ..................41
    18.3 Operation ................................................41
       18.3.1 Insert City And State ...............................42
          18.3.1.1 Zipp Appeal - 95,000 Version ...................42
          18.3.1.2 Zipp Appeal - 40,000 Version ...................42
       18.3.2 Browse Through Cities, States And Zip Codes .........42
          18.3.2.1 Next-Screen ....................................43

                                   Page -IV-
                            Mass Appeal Version 3.2


          18.3.2.2 Previous-Screen ................................43
          18.3.2.3 Select-A-City ..................................43
          18.3.2.4 Find-A-City ....................................43

 19 Registration Form .............................................44



















































                                   Page -V-
                            Mass Appeal Version 3.2


 1 Introduction

   1.1 Mass Appeal

   Mass Appeal is an all purpose mailing list manager for IBM PC's and compat-
   ibles.  With Mass  Appeal you  can:  generate reports,  address  envelopes,
   print mailing labels, create  rotary cards, and  generate mail merge  files
   (For use with most word  processors, including most commercially  available
   word processors, to create form letters).

   Mass Appeal is a fully menu  driven program, requiring little or no  knowl-
   edge of data base management programs.  All the "grunt" work has been  done
   for you, allowing you to concentrate on maintaining your mailing list;  not
   having to worry about how to generate a report!

   Mass Appeal was written in dBASE III Plus, and then compiled using Clipper.
   This accounts for it's large size.  But,  at the same time, that's why  the
   program runs so quickly.  To give the companies their dues: dBASE III  Plus
   is a trademark of Ashton-Tate, Clipper is a trademark of Nantucket Corpora-
   tion.

   1.2 Requirements

   Mass Appeal requires at least 512K of RAM, and works best off a hard  disk,
   although a dual drive floppy machine can operate the program.

   You can put about 1100  or 1200 records on a  360K floppy.  A hard disk  is
   highly recommended; the program runs much more quickly, is able to  perform
   searches more efficiently, and  is much quicker  at printing your  reports,
   labels, rotary cards, etc.

   1.3 Zipp Appeal

   Zipp Appeal is  a companion  product to Mass  Appeal, and  requires a  hard
   disk. Essentially, Zipp  Appeal is a  large data file  that is utilized  by
   Mass Appeal in the Add  routine. You enter the  zip code, and Mass  Appeal,
   looking up the zip code in the Zipp Appeal data file, automatically inserts
   the city and state.

   Or, with Zipp Appeal installed, you can enter the name, or partial name  of
   a city, and browse through a list of possible zip codes and states for  the
   entry. You are allowed to page  forwards, backwards, and even find  another
   city if you like.

 2 Installation

 Mass Appeal comes with batch files that automatically install the program for
 you, whether you plan  to use Mass Appeal  from a hard disk,  or on a  floppy
 based machine.

   2.1 Floppy Disk Drive

   You will need three formatted diskettes, and  the DOS disk you use to  boot
   your machine. Label  one formatted  disk Program Disk,  label another  Data


                                   Page -1-
                            Mass Appeal Version 3.2


   Diskette, and  label the  final disk  Documentation Diskette.  Insert  your
   "original" Mass Appeal disk in drive  A:, and enter the following from  the
   A> prompt of DOS:

   FLOPPY

   If this is not what  you want to do (After  you have read the  instructions
   displayed on the screen), hold down the  key labeled Ctrl, and at the  same
   time, press the letter  C.  You will then be  asked "Terminate batch  job?"
   Enter a Y and press return.  You will be returned to the normal DOS prompt,
   probably A>.

   If you decide to  continue installation of Mass  Appeal for a floppy  based
   system, you  will be  instructed to  insert your  diskette labeled  Program
   Diskette in drive B:, and press return.  Insert your Program Disk in  drive
   B:, and press return to continue  installation of Mass Appeal. After a  few
   seconds, you will be asked to remove your Program Diskette from drive B:.

   Remove the  Program Disk  from drive  B:,  and replace  it with  your  Data
   Diskette. Press any key to continue  with the installation of Mass  Appeal.
   After a few seconds, you  will be asked to  remove your Data Diskette  from
   drive B:.

   Remove the Data Disk from drive B:, and replace it with your  Documentation
   Diskette. Press any key to continue  with the installation of Mass  Appeal.
   After a  few  seconds, you  will  be  asked to  remove  your  Documentation
   Diskette from drive B:.

   Finally, you will be asked to insert your DOS disk in drive B:. Remove your
   Documentation Disk from drive B:, and  insert your DOS disk. Press any  key
   to complete the installation of Mass Appeal.

   The installation process will add two lines to your CONFIG.SYS file (If  it
   exists).  The lines that are added are:

   FILES=20
   BUFFERS=20

   These are required for Mass Appeal to operate correctly.  If this conflicts
   with any existing software, please give Mass Appeal Software a call.

   Once the installation process has finished, a message stating the installa-
   tion of Mass Appeal was successful will be displayed. See the next  section
   on how to begin actual use of Mass Appeal.

   2.2 Hard Disk Drive

   Change your default drive to A:, and  enter HARDDISK from the A> prompt  of
   DOS.  The program will automatically install on drive C: of your  computer.
   If you wish to install  Mass Appeal on a drive  other than C, look  through
   the batch file and see what steps are taken to install Mass  Appeal.  Then,
   perform these exact operations on the new drive.

   The installation process will add two lines to your CONFIG.SYS file (If  it
   exists).  The lines that are added are:

                                   Page -2-
                            Mass Appeal Version 3.2


   FILES=20
   BUFFERS=20

   These are required for Mass Appeal to operate correctly.  If this conflicts
   with any existing software, please give Mass Appeal Software a call.

   The program automatically copies all files into a subdirectory it  creates,
   called MA.  In your root directory, a batch file called MA.BAT is copied so
   you can execute Mass Appeal from the root directory.

 3 Execution

   3.1 Floppy Disk Drive

   Insert your Program Disk in drive A:, and enter MA.  After several seconds,
   you will see the  initial Logo screen of  Mass Appeal (Nice,  huh?).  After
   the initial welcome message "walks" across the screen, you will be asked to
   remove your program disk and insert your data diskette.

   Remove your program disk from drive A:, and replace it with your data disk.
   Once the data disk is in drive A:, and the door is closed, press Return  to
   begin use of Mass Appeal.

   3.2 Hard Disk Drive

   From the root directory of drive C:, you only need to enter MA from the  C>
   prompt of DOS  to execute Mass  Appeal.  When prompted to  insert the  data
   diskette, press return to continue, as this does not concern you (It  would
   be quite  hard  to remove  your  hard disk  and  replace it  with  another,
   right?).

 4 Main Menu

 All functions of Mass  Appeal, such as adding  entries, generating a  report,
 etc.  are done through the Main Menu.

 Notice the date your computer is set to (Can be changed by entering DATE from
 the DOS prompt)  appears in the  upper left hand  corner.  Notice you have  8
 options available to you.  You access  each option by pressing a  highlighted
 number or letter.

 5 Add Records

 By pressing the number 1, or the letter A, you are allowed to add records  to
 the active  data file.  There  are several  options through  the  maintenance
 menus that may help you in entering records into Mass Appeal more quickly.

 Let's look over the screen and  see what information is displayed. Notice  in
 the upper left hand corner, Mass Appeal tells you what record number you  are
 currently entering.  Record  numbers are  assigned at  input time;  the  very
 first record you enter  is record number  1, the second  record you enter  is
 record number 2, and so forth.

 Also at the  top of the  screen, right next  to the record  number window  is
 another small window that shows you the active data file.

                                   Page -3-
                            Mass Appeal Version 3.2


 Notice right next  to the active  data file  window, towards the  top of  the
 screen, a message  states "Deleted:  No".  While in  the add  portion of  the
 program, this message will ALWAYS say No.

 And, in the upper right hand  corner, you notice the current date  displayed.
 When in the add routine, the date will be displayed; when you are in the edit
 routine, the total number  of records in  the active data  file will be  dis-
 played.

 Finally, notice the spaces  that are allocated  for each field.  Also  notice
 that the Date field has automatically been set for you.  But, you can  change
 it if you wish, although it MUST  be a valid date in the form  MM/DD/YY.  For
 example, you can't enter  '13/45/67' into the date  field, Mass Appeal  won't
 let you!

 Notice in the lower window, a message states 'Press <Ctrl-W> For Menu'.  Fill
 in each field as best as possible.  Don't  put the first address line in  the
 Company name field; put each field where is belongs.

 For a  detailed explanation  of  special cursor  movement and  editing  keys,
 please see Appendix B.

   5.1 More

   Once you have completed a record by entering all pieces of information, you
   will have several  new options available  to you in  the lower  window.  By
   pressing the letter M, you  are allowed to add  more entries to the  active
   data file.

   Several things will happen when you press the letter M.  The record  number
   (Displayed in the upper left hand  corner) will increase by one; the  entry
   just made will be cleared  from the screen, and  your cursor will be  posi-
   tioned in the salutation field, ready for another entry.

   5.2 Re-Edit

   Pressing the letter E will allow you to make corrections to the record that
   is currently displayed.  If you notice an  error, it's much easier to  cor-
   rect it now.

   5.3 Help

   Pressing the letter H  will give you several  pages of help concerning  the
   add routine.  Once in the Help routine, you have several additional options
   available.  They are:

     5.3.1 Next-Page

     By pressing the letter  N, you are  taken to the  next available page  of
     help for the add routine.






                                   Page -4-
                            Mass Appeal Version 3.2


     5.3.2 Return

     By pressing the letter R, you will  be returned to the Add routine  menu,
     displayed in the lower  window.  On the last page  of help, pressing  the
     letter R is the only available option; at this point, you must press  the
     letter R to continue.

   5.4 Previous

   If you have  lost your  place while entering  names into  Mass Appeal,  the
   Previous option can be a life saver!

   By pressing the letter P, you can see your previous entry.  Once the  entry
   is displayed, you  must press Return  to continue.  After pressing  Return,
   you may continue entering records into Mass Appeal.

   5.5 Return

   Once you have made several entries,  pressing the letter R will save  those
   entries to the active data file and return you to the main menu.

   NOTE: It is highly recommended that you return to the main menu every 10 or
   15 entries.  This will lessen the possibility of data loss.

   5.6 *

   Once an entry has been made, most of the fields from the information in the
   previous record can be duplicated by placing an asterick in the field to be
   duplicated.  The only field that can not be pulled from the previous  entry
   is the date field.

   NOTE: The field will  not immediately be pulled  forward; you will have  to
   complete the record, and get to the menu in the lower window before you can
   actually see the results of duplicating a field from the previous entry.

   5.7 Speeding Data Entry

   There are several options available  to you which will significantly  speed
   data entry and reduce data entry  errors. One such option, Zipp Appeal,  is
   optional, and requires a hard disk.

     5.7.1 Add Routine Defaults

     When you define defaults for some of  the fields of Mass Appeal (Not  all
     fields can have default values), these fields are already filled in  when
     you enter the add routine.  This comes in handy  when you are entering  a
     lot of information that is similar in nature.

     5.7.2 Function Keys

     The function keys can be  set up with commonly  used words or phrases  to
     speed data entry and reduce  errors. Words like 'Avenue' and  'Boulevard'
     have already been defined for the function keys.  Use this option as much
     as possible! It will greatly reduce typing errors and increase productiv-
     ity.

                                   Page -5-
                            Mass Appeal Version 3.2


     5.7.3 Turn Fields On/Off For Input

     If you enter information  into all the fields  of Mass Appeal, then  this
     option is not for  you. But, if  you would like  only the name,  address,
     city, state and zip code fields to appear when you enter the add routine,
     this option is for you.

     You can select what fields you should be allowed to enter data into  when
     you enter the add routine. This way, if you don't enter information  into
     the home phone, work  phone, date, category or  comment field, you  don't
     have to press return at each field!

     5.7.4 Zipp Appeal

     With Zipp Appeal on your hard disk, Mass Appeal automatically senses  the
     presence of the zip code  data file, and inserts  the city and state  for
     over 95,000 U.S. zip codes (Also available in a smaller, 40,000 version)!
     All you do is enter the  zip code, Mass Appeal automatically inserts  the
     appropriate city and state!

     Or, with Zipp Appeal installed, you  can enter the name, or partial  name
     of a city, and browse through a list of possible zip codes and states for
     the city entered. You are allowed  to page forwards, backwards, and  even
     find another city if you like.

     Two versions  of Zipp  Appeal are  available. For  detailed  information,
     please see section 18.

 6 Edit/View Entries

 By pressing the number  2 or the  letter E, you are  allowed to make  correc-
 tions, or look at entries in the  active data file.  The edit routine is  one
 of the most powerful features of Mass Appeal.

 Once you enter the  Edit routine, you notice  one minor difference than  when
 you were in the add routine (Besides the lower window options).  In the upper
 right hand  corner, the  total number  of  records in  the active  data  file
 appears.  In the Add routine, the date appears!

 In version 3.2, a  new 'light bar  Menu' (One third  less calories than  your
 regular bar menu) has been added. There are several ways to select an  option
 in the Edit routine. First, you can  move the highlighted bar to the  desired
 option (Using the cursor  arrows), and then press  return. Or, you can  press
 the highlighted letter of the desired option.

   6.1 Del

   All records in the active data file are either marked for deletion, or they
   are not.

   To determine whether a record is marked for deletion, see the middle window
   located at the top of the screen.  It states 'Deleted:  No/Yes'.  To change
   this message, press  the letter D;  you can watch  the status change  every
   time you press the letter D.


                                   Page -6-
                            Mass Appeal Version 3.2


   Records marked  for deletion  do not  appear on  ANY type  of output,  even
   though they remain in the data file.  Records that are marked for  deletion
   remain in the data base until option  3  from the main menu (Pack The  Data
   File) is executed.

   6.2 Edit

   If the record displayed needs corrections, pressing the letter E will allow
   you to make those corrections.  You will be allowed to modify any field  of
   this record.

   For a detailed  explanation of  special cursor movement  and editing  keys,
   please see Appendix B.

   6.3 Find

   To quickly Find someone (Determined by the Order Option, discussed  below),
   press the letter F.  You will then be asked for the last name, company name
   or zip code (Determined by the Order option).

   Enter who you want Mass Appeal to Find and press return.

     6.3.1 No Match Could Be Found

     If no match could be found, an  error message stating that a match  could
     not be found is displayed.  You will then be required to press return  to
     resume operation.

   6.4 Goto

   By pressing the letter  G, you are  allowed to quickly go  to one of  three
   places in the file, based on the setting of the Order option.

     6.4.1 Top

     Pressing the letter T will  take you to the  very first record, based  on
     the setting of the Order option.  The same process can be accomplished by
     pressing the Home key on the numeric keypad.

     6.4.2 Bottom

     Pressing the letter B will take you to the very last record, based on the
     setting of the  Order option.  The  same process can  be accomplished  by
     pressing the End key on the numeric keypad.

     6.4.3 Record#

     Pressing the '#' sign will allow you to go directly to a specific  record
     number, as long as that record number exists.

     6.4.4 Return

     Pressing the letter R will return you to the editing options, and abandon
     the current options displayed.


                                   Page -7-
                            Mass Appeal Version 3.2


   6.5 Prev

   Prev is an abbreviation for  Previous.  Pressing the letter P or  the  PgUp
   key will take you to the previous record, based on the setting of the Order
   option.

   If you are positioned on the very first record, based on the setting of the
   Order option, and attempt to use the Prev option, an error message will  be
   displayed. The message will state that  the beginning of the file has  been
   encountered. You will then be asked to press return to continue  processing
   in the Edit routine.

   6.6 Next

   Pressing the letter N  or the PgDn  key will take you  to the next  record,
   based on the setting of the Order option.

   If you are positioned on the very last record, based on the setting of  the
   Order option, and attempt to use the Next option, an error message will  be
   displayed. The message will state that the end of the file has been encoun-
   tered. You will then be asked to press return to continue processing in the
   Edit routine.

   6.7 Help

   Pressing the letter H  will give you several  pages of help concerning  the
   edit routine.  Once in the  Help routine, you  have several additional  op-
   tions available.  They are:

     6.7.1 Next-Page

     By pressing the letter  N, you are  taken to the  next available page  of
     help for the edit routine.

     6.7.2 Return

     By pressing the letter R, you will be returned to the edit routine  menu,
     displayed in the lower  window.  On the last page  of help, pressing  the
     letter R is the only available option; at this point, you must press  the
     letter R to continue.

   6.8 Specify

   Pressing the letter S will  allow you to look only  at records that meet  a
   Specific condition.  If there are no records meeting the condition you have
   specified, an error message will be displayed, and the program will  ignore
   your condition (Allowing you to edit ALL records).

   Once a specific condition has  been placed on the  data base, when you  use
   the Prev, Next, and other  commands, you will see  a message appear in  the
   lower window that states 'Locating Specific Records...'.

   NOTE: This may slow down operation,  since moving from record to record  is
   done taking into account the condition you have specified.


                                   Page -8-
                            Mass Appeal Version 3.2


   NOTE: To clear out a Specific condition, press the letter S, and then  when
   asked to narrow your  data base down, enter  D, for done.  This will  reset
   your condition to All Records (As indicated in the large lower window).

   6.9 Order

   The order option effects the Prev, Next, Find, and Goto options.  The order
   means the order  the data file  is in while  you are in  the edit  routine.
   NOTE: This only applies to the edit routine; setting the order option  here
   has nothing to do with the order your output will be displayed in.

   The current Order  of the data  file can  be determined by  looking at  the
   labels Last Name:,  Company: and  Zip Code:.  Whichever  field contains  an
   arrow in front of it is the current Order setting.

   To change the order, press the letter O, you will then be allowed to select
   what order you  would like your  data in;  last name, company  name or  zip
   code.  Enter the corresponding number of your choice.

   After you have made your selection, you will see the Order option indicator
   (The Arrow) move to your new selection.

   6.10 Count

   The Count  option displays  a count  of all  records meeting  the  Specific
   condition.  If a Specific condition has not been specified, the Count  will
   count all records, excluding those marked for deletion.

   If you want to abandon the Count process, press the letter Q.  The counting
   process will stop immediately.

   6.11 eXit

   Pressing the letter 'X'  will return you  to the main  menu, where you  can
   select another process to perform. NOTE: This was previously called Return;
   due to space limitations, it was changed to eXit.

     6.11.1 Function Keys

     The function keys can be  set up with commonly  used words or phrases  to
     speed data entry and reduce  errors. Words like 'Avenue' and  'Boulevard'
     have already been defined for the function keys.  Use this option as much
     as possible! It will greatly reduce typing errors and increase productiv-
     ity.

 7 Pack The Data File

 This option will permanently remove ALL records marked for  deletion.  Remem-
 ber, records marked for  deletion still remain in  the data base, until  they
 are Packed!

 Once this operation  is performed, all  records marked for  deletion will  be
 permanently removed from the data base.  Nothing can be done to recover them;
 they will be gone forever!!! Use with extreme caution!!!


                                   Page -9-
                            Mass Appeal Version 3.2


 Make sure you have  enough disk space to  perform the packing operation.  How
 much disk space is enough? To ensure the packing routine will operate exactly
 as planned, make sure enough disk space is available for another entire  copy
 of the active data file.

 8 Generate Some Output

 Now that you have some entries in your  data base, you may want to produce  a
 report, print some mailing labels, address  some envelopes or print out  some
 rotary cards.

 Without the ability to print out  the information stored in your data  bases,
 Mass Appeal would be rather useless.  Fortunately, Mass Appeal offers a  wide
 variety of output you can generate.

   8.1 Generate A Report

   Mass Appeal allows  you to print  a report in  48 different  formats.  Each
   report format  displays different  pieces  of information  concerning  each
   record.  For details about selecting  a report format,  please see the  re-
   porting options within the Maintenance Menus.

   To receive a  report from  your active  data base,  use option  1 from  the
   Generate Some Output menu.

   You are  now asked  what records  should be  included in  your report.  The
   condition you can  specify is  called a  selection criteria.  For  detailed
   instructions concerning building selection criteria, please see Appendix A.

   After you have  defined your selection  criteria, press the  letter D,  for
   Done (Because you  are Done  defining your  selection criteria).  You  will
   then be asked where your output should be sent.  Your options are:

     8.1.1 Screen

     To send the output  to the screen, press  the letter S.  The report  will
     then begin displaying on your screen.

     NOTE: Selecting a report format in the maintenance routines has no effect
     when the output is being sent  to the screen.  There is only 1  available
     report format when the output is sent to the screen.

     NOTE: When a report  is sent to  the screen, it  can not be  paused.  You
     must wait until the report completes before continuing normal use of Mass
     Appeal.

     8.1.2 Printer

     To send the report to the printer, press the letter P.  You will then  be
     asked to confirm  that your printer  is On Line  and ready to  print.  If
     your printer is  loaded with  paper and ready  to print,  then press  the
     letter C; otherwise, press the letter Q to return to the main menu.




                                   Page -10-
                            Mass Appeal Version 3.2


     Once your report begins printing, you will notice one of the most innova-
     tive features  of Mass  Appeal.  A Statistical  window will  appear  that
     tells you what time the  report began, what time  it ended (When it  com-
     pletes), how many  records have to  be read, how  many records have  been
     read, how many records meet your selection criteria, the percent complete
     (Based on the total  number of records divided  by the number of  records
     that have been read), the report format number, and the page number  that
     is currently printing.

     During the printing process, you may  pause the printing by pressing  the
     letter P. Once you have  paused the printing, you  may choose one of  two
     available options. To continue with the printing process, press the  let-
     ter C. To  abandon the  printing process, and  return to  the main  menu,
     press the letter Q.

     When the report has finished, you will  be asked whether or not you  want
     to print  the statistical  information on  a piece  of paper  for  future
     reference.  If you do,  press the  letter P; otherwise,  press return  to
     return to the main menu.

     8.1.3 Quit

     If you have decided you don't want to print the report, press the  letter
     Q.  You will be returned to the main menu.

   8.2 Generate Envelopes

   To generate envelopes, one at a  time, use this option.  As with all  other
   output options, you will be able to specify what records should be included
   when printing out envelopes.  For detailed instructions concerning building
   selection criteria, please see Appendix A.

   After you have defined your selection  criteria, you will be asked for  the
   number of spaces  that should be  skipped before the  envelope is  printed.
   This can be thought of as a left  margin. Enter a number between 1 and  99.
   Some experimentation may be necessary to find an exact setting.

   Each envelope will be  displayed in the upper  window.  You will then  have
   three options available:

     8.2.1 Print

     Print the information displayed  in the upper window,  and find the  next
     record that meets the selection criteria.

     8.2.2 Skip

     Skip the record displayed in the upper window; I don't want to print that
     one.  Then, find the next record that meets the selection criteria.

     8.2.3 Quit

     Quit this process of addressing envelopes and return to the main menu.



                                   Page -11-
                            Mass Appeal Version 3.2


   8.3 Generate Rotary Cards

   Rotary cards  are a  neat, convenient  way to  organize your  contacts  and
   business associates.  The size cards you will need for this process are the
   2 1/6 x 4 inch cards (Not the 3 x 5 cards, the smaller ones).

   To generate rotary cards, use option  3.  You will then be able to  specify
   which records should be  included when rotary  cards are printed.  For  de-
   tailed instructions concerning building selection criteria, please see  Ap-
   pendix A.

   You will then have 3 options available to you as to where the rotary  cards
   should be sent:

     8.3.1 Screen

     To send the rotary cards to the screen, press the letter S.  The informa-
     tion will then begin displaying on your screen.

     NOTE: Your rotary cards can not  be paused when sent to the  screen.  You
     must wait until they have completed before continuing use of Mass Appeal.

     8.3.2 Printer

     To send the rotary  cards to the printer,  press the letter P.  You  will
     then be asked to confirm that your printer is On Line and ready to print.
     If your printer is loaded with continuous feed rotary cards and ready  to
     print, then press the letter C;  otherwise, press the letter Q to  return
     to the main menu.

     Once your rotary cards begin  printing, a Statistical window will  appear
     that tells you what time the printing began, what time it ended (When  it
     completes), how many records have to be read, how many records have  been
     read, how  many records  meet your  selection criteria,  and the  percent
     complete (Based on the total number  of records divided by the number  of
     records that have been read).

     During the printing process, you may  pause the printing by pressing  the
     letter P. Once you have  paused the printing, you  may choose one of  two
     available options. To continue with the printing process, press the  let-
     ter C. To  abandon the  printing process, and  return to  the main  menu,
     press the letter Q.

     When the printing has finished, you will be asked whether or not you want
     to print  the statistical  information on  a piece  of paper  for  future
     reference.  If you do,  press the  letter P; otherwise,  press return  to
     return to the main menu.

     8.3.3 Quit

     If you have decided you don't want  to print the rotary cards, press  the
     letter Q.  You will be returned to the main menu.




                                   Page -12-
                            Mass Appeal Version 3.2


   8.4 Generate Mailing Labels

   Mass Appeal now allows  you to define  nearly ANY label  you would want  to
   print on.  See the maintenance routine section concerning label options for
   further details on how to design your own label.

   To generate mailing  labels, use  this option.  You  will then  be able  to
   specify which records should be  included when mailing labels are  printed.
   For detailed instructions  concerning building  selection criteria,  please
   see Appendix A.

   After you have  defined your selection  criteria, press the  letter D,  for
   Done (Because you  are Done  defining your  selection criteria).  You  will
   then be asked where your output should be sent.  Your options are:

     8.4.1 Screen

     To send the labels  to the screen, press  the letter S.  The labels  will
     then begin displaying on your screen.

     NOTE: Defining, building and selecting a label format in the  maintenance
     routines has no effect when the labels are being sent to the screen.  The
     labels are displayed in two across form, so you can view them easier.

     NOTE: Your labels can  not be paused when  sent to the screen.  You  must
     wait until the labels complete before continuing use of Mass Appeal.

     8.4.2 Printer

     To send the labels to the printer, press the letter P.  You will then  be
     asked to confirm  that your printer  is On Line  and ready to  print.  If
     your printer is  loaded with labels  and ready to  print, then press  the
     letter C; otherwise, press the letter Q to return to the main menu.

     Once your labels begins  printing, you will  notice a Statistical  window
     will appear that tells you what time the labels began printing, what time
     the printing ended (When it completes), how many records have to be read,
     how many records  have been read,  how many records  meet your  selection
     criteria, the  percent complete  (Based on  the total  number of  records
     divided by the number of records  that have been read), the label  format
     number, and the left margin.

     During the printing process, you may  pause the printing by pressing  the
     letter P. Once you have  paused the printing, you  may choose one of  two
     available options. To continue with the printing process, press the  let-
     ter C. To  abandon the  printing process, and  return to  the main  menu,
     press the letter Q.

     When the labels  finish, you will  be asked  whether or not  you want  to
     print the statistical information on a  piece of paper for future  refer-
     ence.  If you do, press the letter  P; otherwise, press return to  return
     to the main menu.




                                   Page -13-
                            Mass Appeal Version 3.2


     8.4.3 Quit

     If you have decided you don't want to print the labels, press the  letter
     Q.  You will be returned to the main menu.

   8.5 Generate A Mail Merge File

   A mail merge file is an auxiliary file you can use with your favorite  word
   processor to create form letters and such. Mass Appeal interfaces  directly
   with WordPerfect (Versions 4.2 and 5.0), MicroSoft Word, MultiMate, and any
   other word processor requiring either an  ASCII comma delimited file, or  a
   fixed length file. You can use  these files with your word processing  pro-
   gram to generate form letters.

   To select the type of  mail merge file to be  generated, and the amount  of
   information that should be contained in the mail merge file, use the  main-
   tenance menus (Option 7 from the Main Menu), and then select the  Miscella-
   neous Options.

   Since the amount of  information contained in the  mail merge file  varies,
   please use your word processor to determine the order of the fields as they
   appear in the mail merge file.

   You will then be able to specify which records should be included when  the
   mail merge file is created.  For detailed instructions concerning  building
   selection criteria, please see Appendix A.

   After you have  defined your selection  criteria, press the  letter D,  for
   Done (Because you  are Done  defining your  selection criteria).  You  will
   then be asked for the name of the mail merge file. NOTE: You may include  a
   drive and path designator if necessary.

   Once your mail  merge file process  begins, you will  notice a  Statistical
   window will appear that  tells you what time  the mail merge file  started,
   what time the process ended (When  it completes), how many records have  to
   be read,  how many  records have  been  read, how  many records  meet  your
   selection criteria,  the percent  complete (Based  on the  total number  of
   records divided by the number of records that have been read), and the mail
   merge file type.

   During the mail merge file creation  process, you may pause the  processing
   by pressing the  letter P.  Once you have  paused the  processing, you  may
   choose one of two  available options. To continue  with the process,  press
   the letter C. To abandon  the process, and return  to the main menu,  press
   the letter Q.

   8.6 Exit Output Options, Return To Main Menu...

   Pressing the number 6 will return you to the main menu. This is in case you
   don't want to generate any output, or  hit the number 4 (For generate  some
   output) by mistake.





                                   Page -14-
                            Mass Appeal Version 3.2


 9 Import Existing Data

 Mass Appeal has the ability  to read in data from  other sources, as long  as
 the file is  a comma delimited  file.  And, the data  must be structured  the
 same way as Mass Appeal; with the name broken down into Salutation, Last Name
 and First Name.

 Once you have  invoked this option  by pressing  the number 5  from the  main
 menu, you will be asked for the name of the interface file to import into the
 active data file.  To return  to the main menu  and abort the process,  press
 return when asked for the name of the file to import.

 Once you have entered the name of the import file, Mass Appeal will allow you
 to import the data.  All  you have to  tell Mass Appeal is  the order of  the
 fields as they appear in  the file to be  imported.  You do this by  entering
 the corresponding number of each  field, until all fields  in the file to  be
 imported are accounted for.

 When you are done  defining the order the  fields appear in, enter  99.  Mass
 Appeal will  then ask  you whether  or  not you  want to  go ahead  with  the
 operation.

 10 Change Active Data File

 To change to another data file, create another data file or delete an  exist-
 ing data file, use this option.  Remember,  the name of the active data  file
 appears on the main menu.  Once you have  pressed the number 6 from the  main
 menu, you will see a menu display all the available data files.

 You can have up to 20 data files to put information in.  This menu shows  you
 the total number of records  in each data file, the  last date each file  was
 accessed, the name of the file, and a corresponding data file number.

   10.1 Select-A-File

   To change the active data file, press the letter S.  You will then be asked
   which file you wish  to have as  the new active data  file. Enter a  number
   corresponding to the data file you want to work with.

   Once you have correctly selected a  new active data file, you are  returned
   to the main menu.

   10.2 Add-A-File

   To add a file, or create a new file as it is often called, press the letter
   A.  You will then be asked for a name for the file.  You have 7 spaces with
   which to name your file.  Try to call the file something  descriptive.  For
   example, if you are creating a new  data file to put prospects in, you  may
   want to call the data file PROSPCT.

   10.3 Delete-A-File

   If you ever decide you no longer  need a data file, use this  option.  BUT:
   USE WITH EXTREME CAUTION!!! ONCE A DATA  FILE IS DELETED, IT IS ERASED  AND
   CAN NEVER BE RECOVERED!!!

                                   Page -15-
                            Mass Appeal Version 3.2


   10.4 Return

   If you decide  you don't want  to perform any  of the operations  described
   above, press the letter R and you will be returned to the main menu.

 11 Access The Maintenance Routines

 The maintenance routines  are where the  real power and  versatility of  Mass
 Appeal begin to appear. Here is  where you define your add routine  defaults,
 define your mailing labels,  select your report format,  and many other  fea-
 tures of Mass Appeal.

   11.1 Label Options

   Most operations related to the generation of mailing labels can be found in
   this section.  With Mass Appeal,  you can define almost  ANY label you  may
   want to print on.

     11.1.1 Define Or Select A Label

     When labels are printed,  Mass Appeal looks to  this option to  determine
     how many lines are between each label,  how many labels across are to  be
     printed, a left margin, and numerous other features.

     You can have up to 10 different label templates, or label  guidelines.  A
     template is  a fancy  word for  instructions Mass  Appeal needs  when  it
     generates a mailing label or report; you have the ability to define  your
     own label template.

       11.1.1.1 Select-A-Label

       To have Mass Appeal  follow the guide lines  of a different label  tem-
       plate, press the letter S.  You will then be asked for the number  Mass
       Appeal should follow next time labels are printed.

       Enter the number of the label  template Mass Appeal should follow  next
       time labels are generated.

       NOTE: If  you use  only  one size  label, you  will  only need  to  Se-
       lect-A-Label once.  This  option DOES  NOT  have to  be set  each  time
       labels are  to be  printed.  Only when  a different  label template  is
       needed do you have to reset this option to follow another template.

       11.1.1.2 Add-A-Label

       To add a label  template, press the letter  A.  You will then be  asked
       several questions, like how many lines are between each label (Horizon-
       tally), a left margin, how many across, and how many spaces are between
       each label (Vertically) if you are printing more than one across.

       You will also be  asked for a short  description of the label  template
       you have just  defined.  This description  will appear  along with  the
       other information concerning the label template.



                                   Page -16-
                            Mass Appeal Version 3.2


       NOTE: When defining labels that are more than one across, you may enter
       a negative number when asked the  number of spaces between each  label.
       Some experimentation may be necessary to properly define your label.

       11.1.1.3 Delete-A-Label

       To remove  a label  template from  the  list, press  D, and  enter  the
       corresponding number of the template to delete.  NOTE: This will perma-
       nently remove  the label  template  from the  list of  available  label
       templates.  Use with caution.

       11.1.1.4 Edit-A-Label

       To make adjustments to a label template you have already defined, press
       the letter E.  You will then be asked each question you were asked when
       you added the label.

       Make changes as necessary.

       11.1.1.5 Return

       To return to the label maintenance menu, press the letter R.

     11.1.2 Pause After Certain # Labels

     You can tell Mass Appeal to pause  after a certain number of labels  have
     printed.  Press the number 2 and enter the number to stop at.

     This comes in handy when  you have 10,000 names,  yet your labels are  in
     boxes of 5,000! Tell Mass Appeal to  stop after 4,980 (A good number  for
     this scenario) labels  are printed.  After  Mass Appeal  has printed  the
     first 4,980 labels, you will be asked to load the next box of labels, and
     press return to continue the label printing!

     Remove the printed labels,  and load up a  new box of labels.  Press  the
     appropriate letter to continue printing!

     11.1.3 Define A Printer String For Labels

     To have your labels printed in  compressed print, NLQ, or another  style,
     set up a  printer string  for your  labels.  This printer  string can  be
     taken directly  from your  printer manual.  See  Appendix C  for  further
     details.

     11.1.4 Print Multiple Copy End Of Set Markers?

     Mass Appeal will print multiple copies of a label.  This option asks  you
     if you want a marker printed between each set.  This will help in finding
     where one set of labels ends and the next set begins.

     If you answer  Yes, between each  set of labels,  you will see  something
     similar to this:




                                   Page -17-
                            Mass Appeal Version 3.2


     ***********************************
     *                                 *
     *   End Of Set:  1  Of:  3        *
     *                                 *
     ***********************************

     In the above example, this  tells you that you  are printing 3 copies  of
     the labels, and this is the end of the first set, set number 1.

     11.1.5 Print Bulk Information For Mailing Labels?

     Bulk counts can be turned on or off prior to printing labels. Maintaining
     bulk rate information slows down the process of printing labels some, and
     should be used only when necessary.  Enter Y to maintain bulk counts,  or
     N to bypass bulk counting.

     If you have bulk counting turned on, when the labels finish, you will  be
     asked to insert a piece of paper to print the bulk report on.  Remove the
     labels from the printer, and load the  printer with regular 8 1/2" X  11"
     paper.  Then, press the letter P to print the bulk report.

     The bulk report gives counts of same 3-digit zip codes, and same  5-digit
     zip codes.

     11.1.6 Last Name Or Company Name First On Labels?

     You can tell  Mass Appeal whether  the persons name  should be the  first
     line on a label, or whether the company name should be first.

     11.1.7 How Many Copies Of Each Label Should Be Printed?

     To print multiple copies  of a label,  press the number  7 and enter  the
     number of copies that should be printed.  You can have up to 99 copies of
     each set of labels printed.

     11.1.8 Exit Label Maintenance, Return To The Main Menu...

     To return to the main menu, press the number 8.

   11.2 Report Options

   Mass Appeal has one of the most versatile reporting options available.  You
   can select from 48 available report formats, based on the type printer  you
   have.  You can also select whether you  want your report single, double  or
   even triple spaced!

     11.2.1 Change Report Format

     Allows you to select from a total of 48 different report  formats.  NOTE:
     Only applies to printed output! All  reports that are sent to the  screen
     have the same format.





                                   Page -18-
                            Mass Appeal Version 3.2


     When paging through the available report formats, make sure your  printer
     will handle  the report  format you  are selecting.  For  example,  don't
     select a report  that requires a  132 column  printer if you  have an  80
     column printer!

     But, at the same time, if you  have a 132 column printer, you CAN  select
     report formats that are designed for 80 column printers.

       11.2.1.1 Next-Screen

       Displays next screen  of available report  formats.  If no more  report
       formats are available (You  are on the last  page available), you  will
       receive an error message if you try to access the Next-Screen.

       11.2.1.2 Previous-Screen

       Displays previous screen of available  report formats.  If no more  re-
       port formats are available (You are  on the first page available),  you
       will receive an error message if you try to access the Previous-Screen.

       11.2.1.3 Select-Format

       Once you have found a report format  you want to use, press the  letter
       S.  You will then be  shown the current report  format number, and  you
       will be asked for the new report format number.

       Enter the corresponding  number you  wish to  have as  your new  report
       format.  The next report that prints out will follow your new guidelin-
       es.

       11.2.1.4 Return

       Pressing the letter R will exit you from the report options maintenance
       menu to the main menu.

     11.2.2 Define A Printer String For Reports

     If you want your report  to appear in some  type of print, like  italics,
     bold faced, or any other type of  print you can define, enter the  proper
     printer escape sequence here.

     Remember, some printers do not allow  you to mix print types.  For  exam-
     ple, when you're  printing a  report in compressed  print, most  printers
     won't allow you to print in  NLQ.  So, be careful when attempting to  use
     this option with reports that require compressed print.

     For detailed  instructions on  how to  enter a  printer escape  sequence,
     please see Appendix C.

     11.2.3 Define A Printer Compression String For Reports

     For reports that require  compressed print, you  must define the  printer
     escape sequence  that compresses  the print  on your  printer.  For  most
     Epson and IBM printers, you will  enter CHR(15) (Which is already  filled
     in for you).

                                   Page -19-
                            Mass Appeal Version 3.2


     For detailed  instructions on  how to  enter a  printer escape  sequence,
     please see Appendix C.

     11.2.4 Set Spacing On Printed Output, Single, Double, Etc.

     Some people like single spacing, some like double spacing, and still some
     like triple spacing.

     To set the spacing  on your printed reports,  use this option.  You  will
     then be asked for a number corresponding to the line spacing you  desire.
     If you  want single  spacing, enter  the  number 1,  if you  want  double
     spacing, enter the number 2, and if you prefer triple spacing, enter  the
     number 3.

     11.2.5 Exit This Report Maintenance, Return To Main Menu...

     Once you have  completed your  work in the  report maintenance  routines,
     press the number 5 to return to the main menu.

   11.3 Function Key Setup

   When in the add routine or edit  routine, you can have commonly used  words
   and phrases stored  in the  function keys to  speed data  entry and  reduce
   errors.

   A total of 36 keys can be defined by you.  The F1 key is not used, only the
   F2 - F10 keys are used.  You are allowed to define a word or phrase for the
   Alt function keys, the Ctrl function keys and the shift function keys.

     11.3.1 Define Function Keys

     Enter a word or phrase for  the corresponding function key.  When in  the
     add routine or edit  routine, pressing the function  key will insert  the
     corresponding word or phrase.

     11.3.2 Define Alt + Function Keys

     Enter a word or phrase for  the corresponding function key.  When in  the
     add routine or  edit routine, pressing  the function key  along with  the
     Alt.  key will insert the corresponding word or phrase.

     11.3.3 Define Ctrl + Function Keys

     Enter a word or phrase for  the corresponding function key.  When in  the
     add routine or  edit routine, pressing  the function key  along with  the
     Ctrl.  key will insert the corresponding word or phrase.

     11.3.4 Define Shift + Function Keys

     Enter a word or phrase for  the corresponding function key.  When in  the
     add routine or  edit routine, pressing  the function key  along with  the
     shift key will insert the corresponding word or phrase.




                                   Page -20-
                            Mass Appeal Version 3.2


     11.3.5 Reset Function Keys To Original Values

     Will reset the function keys  to their original values.  Please use  this
     routine with caution; as ALL 36 function keys are reset to their original
     values.

     11.3.6 Exit Function Key Maintenance, Return To Main Menu

     To return to the main menu, press number 7.

   11.4 Add Routine Defaults

   If your mailings are  mostly from a local  area, you have probably  noticed
   that some high percent of  the records you are  entering are from the  same
   city, same state, have the  same area code, and  are similar in many  other
   aspects.

   That is where this  can save you literally  hours of typing time.  You  can
   have certain  fields already  filled in  for  you when  you enter  the  add
   routine.  Then, when you get to that  field (For example, the City  field),
   all you have to do is press return if the value there is correct.

     11.4.1 Set Up Default City

     Enter the value for  the city you  would like to have  filled in for  you
     when you enter the add routine.

     11.4.2 Set Up Default State

     Enter the value for the  state you would like to  have filled in for  you
     when you enter the add routine.

     11.4.3 Set Up Default Zip Code

     Enter the value for the zip code you would like to have filled in for you
     when you enter the add routine.

     At times, you may want to set up a partial zip code, and then just  enter
     the last few numbers.  For example, when  I'm entering a lot of  business
     for the Birmingham, AL area, we  set the default to be '352'.  Then,  all
     we have to  do when we  come to this  field is press  the End key  (Which
     takes me to the end of the partial zip code) and enter the other 2 digits
     of the zip code!

     11.4.4 Set Up Default Category

     Enter the value for the category you would like to have filled in for you
     when you enter the add routine.

     11.4.5 Set Up Default Salutation

     Enter the value for the salutation you  would like to have filled in  for
     you when you enter the add routine.



                                   Page -21-
                            Mass Appeal Version 3.2


     11.4.6 Set Up Default Home Phone

     Enter the value for the home phone  you would like to have filled in  for
     you when you enter the add routine.

     Most of the time, you will already know the area code if you are entering
     records for  the same  area.  For example,  when I'm  entering a  lot  of
     records for Alabama, we set the  default to be '205'.  Then, all we  have
     to do when we come to this field is press the End key (Which takes me  to
     the end of the area code) and enter the rest of the 7 digit phone number.

     11.4.7 Set Up Default Work Phone

     Enter the value for the work phone  you would like to have filled in  for
     you when you enter the add routine.

     Most of the time, you will already know the area code if you are entering
     records for  the same  area.  For example,  when I'm  entering a  lot  of
     records for Alabama, we set the  default to be '205'.  Then, all we  have
     to do when we come to this field is press the End key (Which takes me  to
     the end of the area code) and enter the rest of the 7 digit phone number.

     11.4.8 Set Up Default Comment Field

     Enter the value for the  comment field you would  like to have filled  in
     for you when you enter the add routine.

     11.4.9 Reset All Default Values To Blank Values

     Resets ALL fields to blanks so when you enter the add routine, no  fields
     are automatically  filled in  for you.  Use  with caution,  as this  will
     clear out any previous defaults you may have set up.

     11.4.10 Exit Default Maintenance, Return To Main Menu...

     To return to the main menu, enter ten (10).

   11.5 Miscellaneous Options

   The miscellaneous options are those options  that don't exactly fit in  any
   of the other menus,  yet they play  an important part  in the operation  of
   Mass Appeal.

     11.5.1 Change Monitor Type

     If you have  invested in a  CGA, EGA,  or VGA monitor,  Mass Appeal  will
     display your menus in color.  Currently, the color combinations are some-
     what limited (You  are only  allowed to  select a  data entry  background
     color, discussed below).

     After invoking this  option, you will  be asked whether  you are using  a
     color monitor or not.  If you are using a color monitor, press the letter
     C, otherwise, press the letter N.



                                   Page -22-
                            Mass Appeal Version 3.2


     11.5.2 Change Output Order

     Whenever you  generate ANY  type of  output, Mass  Appeal looks  to  this
     option to determine what order the output should be in.  Your options are
     last name, company name, zip code, or record number.

     11.5.3 Group Deletion Of Records

     If you want to delete (Actually, it just marks them for deletion) a group
     of records that  meet a  certain condition, then  use this  option.  This
     might come in handy when you want to remove all the records in your  data
     base that were entered last year.

     Once you invoke this  option, you will be  presented with your  selection
     criteria menu.  NOTE: You must define  a condition; Mass Appeal will  not
     allow you to delete all the records in your active data base at one time.
     See Appendix A for details.

     Of course, if you do want to delete all your records, you could define  a
     condition that states 'Record number between 1 and 999999'.

     11.5.4 Group Recovery Of Records

     This is  the opposite  of  the Group  Deletion Of  Records.  This  option
     allows you to recover  (Actually, it unmarks the  record for deletion)  a
     group of records that meet a certain condition.

     Once you invoke this  option, you will be  presented with your  selection
     criteria menu.  NOTE: You must define  a condition; Mass Appeal will  not
     allow you to  recover all the  records in  your active data  base at  one
     time.  See Appendix A for details.

     Of course, if you do want to recover all your records, you could define a
     condition that states 'Record number between 1 and 999999'.

     11.5.5 Reset All Data File Pointers

     If your reports do not  appear in the order you  thought, or you are  not
     Finding someone you  know exists, the  index file of  your data base  may
     have been corrupted in some way.

     While this rarely happens, this  option is available when such  instances
     do occur.  After invoking this option,  Mass Appeal will reindex the  ac-
     tive data base, and some other data files.  The process may take a while,
     depending on the number of records in the active data file.

     11.5.6 Report Of Previously Saved Criteria

     If you have saved any of the  selection criteria you have built, you  can
     easily get a  report by  selecting this option.  After  you have  invoked
     this option, you will be asked where you want the report to be sent:





                                   Page -23-
                            Mass Appeal Version 3.2


       11.5.6.1 Screen

       By pressing the letter S,  you tell Mass Appeal  to send the report  of
       the previously saved criteria to the screen.  When the report finishes,
       you will be asked to press a key to continue.

       11.5.6.2 Printer

       By pressing the letter P,  you tell Mass Appeal  to send the report  of
       the previously saved criteria to  the printer.  You will then be  asked
       to make your sure your printer is ready to print.  If it is, press  the
       letter C to continue with printing the report.  When the report finish-
       es, you will be asked to press a key to continue.

       11.5.6.3 Quit

       To abandon a report of the previously saved criteria, press the  letter
       Q.

     11.5.7 Define A Setup String For Envelopes

     Allows you to define a set up string for envelopes.  Why a printer string
     for envelopes???  For users  who have  laser printers!  This option  will
     allow you to print envelopes in a laser printer.

     11.5.8 Carriage Return Required For Field Advancement

     In Mass Appeal,  when you completely  fill in a  field (For example,  the
     State field), you  are automatically  advanced to  the next  field.  Some
     people get a rhythm going that requires they press return before  advanc-
     ing to the next field.

     If a carriage  return is  required before  you can  move on  to the  next
     field, press Y; otherwise, if you  want to automatically be moved to  the
     next field when it is full, press the letter N.

     11.5.9 Turn On/Off Checking For Correct State Abbreviations

     When you enter  a record in  the Add routine,  the state abbreviation  is
     checked for correctness.  If it  is not 1 of  51 entries (The 50  states,
     plus the District of Columbia), you  are warned that the abbreviation  is
     not valid.

     Well, that's fine  if you  use Mass  Appeal for  United States  mailings.
     But, for the numerous users who are in Canada, I'm sure you don't want to
     be warned every time you enter ON for Ontario.

     This option allows you to turn the checking on or off.

     11.5.10 Set Up/Define Category Codes

     If you use Mass Appeal to it's fullest potential, you use category  codes
     a lot.  Keeping track of what each category code stands for can often  be



                                   Page -24-
                            Mass Appeal Version 3.2


     a hassle.  That's why Mass Appeal now has a handy little 'note pad'  that
     allows you to  quickly and easily  retain the meaning  of those  category
     codes.

     Once invoked,  you can  enter your  category codes,  and what  each  code
     stands for (Up to 24 category codes can be maintained).

     If you forget what the code 'HD' stands for (Or, any other code for  that
     matter) access  Help while  in the  Add or  Edit routine.  Your  category
     'note pad' will be displayed  immediately before the function key  macros
     are shown!

     11.5.11 Data Entry Name Order

     You now have the option of entering  (And, yes, editing) the name in  one
     of two  ways. Some  people find  it more  natural to  enter in  names  as
     "Mr.","Steven G.","Hughes", while others find it acceptable to enter  the
     name as "Hughes","Steven G.","Mr.".

     Mass Appeal now  supports BOTH  forms of input.  To  change the  setting,
     select option 11 from the  miscellaneous options menu.  You will then  be
     allowed to select your preference!

     11.5.12 Turn On/Off Fields For Input

     This option, option 12 from the miscellaneous options menu, allows you to
     turn on or  off fields for  data entry.  At  times, you may  not want  to
     enter data into certain fields.

     This option allows you  to turn off  any or all of  the fields you  don't
     want to enter data into.  After selecting this option, you place a 'T' by
     the fields you want to enter data  into, and 'F' by the fields you  don't
     want to enter data into.

     Once you have turned off fields for  data entry, you will not be  allowed
     to enter information into that field during the Add routine.  NOTE:  This
     option has no  bearing on  the Edit  routine.  In the  edit routine,  all
     fields are accessible.

     11.5.13 Color Option Background Setting

     Once you have told Mass  Appeal you have a  color monitor (See option  1,
     discussed previously),  you can  select from  either a  light blue  back-
     ground, or a red background.

     11.5.14 Set Mail Merge File Output Type

     When a mail merge file  is created, Mass Appeal  looks to the setting  of
     this option to determine what type of mail merge file should be  created.
     After entering 14 from the maintenance  menu, you will be presented  with
     six choices.





                                   Page -25-
                            Mass Appeal Version 3.2


       11.5.14.1 ASCII

       By selecting option 1, you tell Mass Appeal to create a file where each
       record retains it's field length  assigned in Mass Appeal. Each  record
       ends with a carriage return/line feed.

       11.5.14.2 WordStar

       By selecting this option, you tell  Mass Appeal to create a mail  merge
       file compatible with WordStar. You can  then use the file created  with
       WordStar to create form letters.

       11.5.14.3 WordPerfect

       By selecting this option, you tell  Mass Appeal to create a mail  merge
       file compatible with  WordPerfect. You  can then use  the file  created
       with WordPerfect to create form letters.

       After you have selected this option,  Mass Appeal will ask you for  the
       version of WordPerfect you are  using. Mass Appeal supports both  Word-
       Perfect version 4.2, and version 5.0! Enter the corresponding number.

       11.5.14.4 MicroSoft Word

       By selecting this option, you tell  Mass Appeal to create a mail  merge
       file compatible with MicroSoft Word. You can then use the file  created
       with MicroSoft Word to create form letters.

       11.5.14.5 Comma Delimited

       By selecting option 5, you tell Mass Appeal to create what is called  a
       comma delimited file  (Identical to  option 1,  discussed above).  Each
       field is enclosed  in double  quotes, and separated  by a  comma.  Each
       record ends in a carriage return/line feed.

       11.5.14.6 Fixed Length ASCII

       By selecting option 6, you tell Mass Appeal to create a file where each
       record retains it's field length  assigned in Mass Appeal. Each  record
       is NOT terminated with a carriage return/line feed.

     11.5.15 Set Amount Of Info. In Mail Mrg

     In some instances, you  will need all the  pieces on information in  Mass
     Appeal in your mail merge  file; and, in other  cases, you may want  only
     the name and address information.

     This option allows you  to determine how many  fields are written to  the
     mail merge file.  After selecting  this option,  option 15,  you will  be
     asked whether you want only the address information, or whether you  want
     all fields to be included in the mail merge file. Enter the corresponding
     number.




                                   Page -26-
                            Mass Appeal Version 3.2


     11.5.16 Set Up Communication Parameters

     If you  have a  modem connected  to  your computer,  you can  dial  phone
     numbers while in the Edit routine of Mass Appeal. You are allowed to dial
     either the home or work phone number.

     But, Mass Appeal has  added a few nice  features to the dialing  routine,
     and at the same time, requires some information about your modem. Here is
     the information Mass Appeal needs to know:

       11.5.16.1 Communications Port

       Enter the number of  the port your modem  is connected to. Mass  Appeal
       supports up to 4 communications ports. Usually, the port number will be
       1 or 2.

       11.5.16.2 Dial 9 First?

       Mass Appeal supports PBX systems, where you must first dial a 9 to  get
       an outside line. When Mass Appeal  begins to dial the number, it  looks
       to this option to determine if a 9 should be dialed first.

       If you are  using a PBX  system, enter a  Y, for Yes,  in this  option,
       otherwise, leave it N, for No.

       11.5.16.3 Local Area Codes

       When attempting to  dial a  number, Mass Appeal  checks to  see if  the
       number you are dialing  is within your local  area code. If the  number
       you are dialing is a local number (Meaning one of the local area  codes
       matches the  area code  of the  number you  are dialing),  Mass  Appeal
       removes the area code from the number to be dialed, and then dials  the
       number.

       But, if the number you are dialing  is not a local number (Meaning  one
       of the local area codes does not match the area code of the number  you
       are dialing), Mass Appeal will dial a 1 (For long distance) before  the
       phone number is dialed.

     11.5.17 Return To The Main Menu, Please

     Exit the maintenance menu,  and return to the  main menu by entering  the
     number 17.

   11.6 Index File Adjustment System

   Here we go again with some more technical information, index files.

   Index files are auxiliary files that  work in conjunction with a data  base
   file (In Mass Appeal, data  base files have an  extension of .DBF, and  the
   index files have an extension of .NTX) to keep the data base file logically
   sorted.




                                   Page -27-
                            Mass Appeal Version 3.2


   For every data base file (For example, MAILER.DBF) there are 3 index  files
   (For example, MAILER1.NTX, MAILER2.NTX  and MAILER3.NTX).  The first  index
   file, MAILER1.NTX,  keeps the  data sorted  on the  last name.  The  second
   index file, MAILER2.NTX  keeps the data  sorted by the company name;  while
   the third index file,  MAILER3.NTX, keeps the data  file sorted on the  zip
   code.

   Mass Appeal allows you  to customize these index  files, and determine  how
   precisely they should keep the data sorted.  For example, you can have Mass
   Appeal keep the records sorted not only by last name, but within exact last
   names, sort by the first name.  And, this power extends over to the company
   field, where you can sort first on the company name, then on the last name,
   and then on the first name.

   For example, if there are several  entries where the last name is  'Hughes'
   in your data file,  you may want to  tell Mass Appeal to  sort on the  last
   name, and the first name.  And, you can  tell Mass Appeal to sort the  last
   names within the company name.

   But, all this power has a price!  To sort the entire company name can  take
   up to 35 characters; to sort the last name within the company name requires
   an additional 16 characters, and to  sort the first name requires an  addi-
   tional 14 characters.  So, as you can see, there's an additional 65 charac-
   ters (Plus, some overhead for pointer information) per record just for  the
   company index file!

   Mass Appeal has taken all this and allowed you to customize it to suit your
   particular needs! You can tell Mass Appeal  that you only want to index  on
   the first  7 letters  of the  last name,  to save  disk space.  This  is  a
   somewhat technical feature of Mass Appeal,  but it remains a very  powerful
   option.

   Remember, you can have different index  schemes for EACH DATA FILE!  Making
   changes to these options only effects the active data file.

   Once you invoke this option, you will see 4 choices.  They are:

     11.6.1 Zip Code

     Of course, this allows  you to customize the  zip code index  file.  Once
     you have invoked this option, you will see 3 options:

       11.6.1.1 Option 1

       By invoking option 1, you tell Mass Appeal to use the entire 10 charac-
       ters of the  zip code  for sorting.  This is  usually a  waste of  disk
       space, and we strongly suggest you see option 2, listed below.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.




                                   Page -28-
                            Mass Appeal Version 3.2


       11.6.1.2 Option 2

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill in the number) digits of the zip code.  For those doing US
       mailings, you will only need to sort  on the first 5 digits of the  zip
       code.

       For those living in Canada, you will  want to tell Mass Appeal to  sort
       using the first 7 digits of the zip code.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.1.3 Option 3

       For programmers, dBASE enthusiasts, and anyone wanting to define  their
       own customized index file  (At your own risk,  of course), this  option
       allows you to  do just that.  You can  enter any valid  dBASE III  Plus
       expression into  this  field.  The  index file  will  then  follow  the
       guidelines you entered. This is available in case you want a report  in
       order of the date field, or a report sorted first by zip code, and then
       by city name, or any other similar operation.

       NOTE: IF YOU ARE NOT  FAMILIAR WITH dBASE III  PLUS, DO NOT ATTEMPT  TO
       USE THIS OPTION. IF YOU HAVE ANY  QUESTIONS ON HOW TO USE THIS  OPTION,
       PLEASE GIVE US A CALL - WE ARE WILLING TO HELP YOU! See Appendix D  for
       further details, and how you would go about obtaining a report in entry
       date order!

       11.6.1.4 Option 4

       To return to the index file maintenance menu without performing any  of
       the options, press number 4.

     11.6.2 Last Name

     This allows  you to  customize the  last name  index file  to your  exact
     specifications.  You are allowed to sort on the last name using 4 differ-
     ent options:

       11.6.2.1 Option 1

       By invoking option 1, you tell Mass Appeal to use the entire 16 charac-
       ters of the  last name for  sorting.  This is usually  a waste of  disk
       space, and we strongly suggest you see option 2, listed below.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu  when the  reindexing has  completed.  Reindexing  may
       take some time, depending on the total number of records in the  active
       data file.



                                   Page -29-
                            Mass Appeal Version 3.2


       11.6.2.2 Option 2

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill in the number) characters of the last name.  For those who
       maintain only company information  (With no first  and last name),  you
       may want to tell Mass Appeal to sort on the first character of the last
       name; this produces the smallest  index file possible, saving  valuable
       disk space.

       If you invoke this option, a value will be filled in for you  automati-
       cally.  This is the suggested value we  have have found works well  for
       this option.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.2.3 Option 3

       By invoking option 3, you tell Mass Appeal to use the entire 16 charac-
       ters of the last name and  the entire first name for sorting.  This  is
       usually a waste of disk space,  and we strongly suggest you see  option
       4, listed below  if you need  to sort  the first name  within the  last
       name.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu  when the  reindexing has  completed.  Reindexing  may
       take some time, depending on the total number of records in the  active
       data file.

       11.6.2.4 Option 4

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill in the number) characters of the last name, and the  first
       ?? (You fill in the number) characters of the first name.

       If you invoke this option, values  will be filled in for you  automati-
       cally.  This is the suggested values we have have found works well  for
       this option.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.2.5 Option 5

       To return to the index file maintenance menu without performing any  of
       the options, press number 5.





                                   Page -30-
                            Mass Appeal Version 3.2


     11.6.3 Company Name

     This allows you to  customize the company name  index file to your  exact
     specifications.  You are  allowed to  sort on  the company  name using  5
     different options:

       11.6.3.1 Option 1

       By invoking option 1, you tell Mass Appeal to use the entire 35 charac-
       ters of the company name for sorting.  This is usually a waste of  disk
       space, and we strongly suggest you see option 2, listed below.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu  when the  reindexing has  completed.  Reindexing  may
       take some time, depending on the total number of records in the  active
       data file.

       11.6.3.2 Option 2

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill in the number) characters of the company name.  For  those
       who maintain only personal information (With no company name), you  may
       want to tell Mass Appeal to sort on the first character of the  company
       name; this produces the smallest  index file possible, saving  valuable
       disk space.

       If you invoke this option, a value will be filled in for you  automati-
       cally.  This is the suggested value we  have have found works well  for
       this option.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.3.3 Option 3

       By invoking option 3, you tell Mass Appeal to use the entire 35 charac-
       ters of the company name and the entire last name for sorting.  This is
       usually a waste of disk space,  and we strongly suggest you see  option
       4, listed below if you  need to sort the  last name within the  company
       name.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu  when the  reindexing has  completed.  Reindexing  may
       take some time, depending on the total number of records in the  active
       data file.

       11.6.3.4 Option 4

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill  in the number)  characters of the  company name, and  the
       first ?? (You fill in the number) characters of the last name.

                                   Page -31-
                            Mass Appeal Version 3.2


       If you invoke this option, values  will be filled in for you  automati-
       cally.  This is the suggested values we have have found works well  for
       this option.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.3.5 Option 5

       When using this option, you tell Mass Appeal to sort only on the  first
       ?? (You fill  in the number)  characters of the  company name, and  the
       first ?? (You fill in the number) characters of the last name, and  the
       first ?? (You fill in the number) characters of the first name.

       If you invoke this option, values  will be filled in for you  automati-
       cally.  This is the suggested values we have have found works well  for
       this option.

       If you select  this option, Mass  Appeal will recreate  the index  file
       according to  the specifications,  and  return you  to the  index  file
       maintenance menu.  Reindexing  may take  some  time, depending  on  the
       total number of records in the active data file.

       11.6.3.6 Option 6

       To return to the index file maintenance menu without performing any  of
       the options, press number 5.

     11.6.4 Exit, Return To Main Menu

     Once finished, you can return to the main menu by pressing the number 4.

   11.7 Merge Two Existing Data Files

   At times, you may  want to merge one  or more of your  data files into  one
   large file.  Or, you  may wish to  take certain records  from one file  and
   merge them into another file.

   This option performs these operations quickly and easily.  Press the number
   7 from the Maintenance Menu to begin the process.

   Once you have  invoked this option,  you will  be asked for  a source  file
   (Where the records are  coming from) and a  target file (Where the  records
   will be copied to).

   Notice the target  file is  automatically filled in  with the  name of  the
   active data file; you can change this if you like.  To abandon the process,
   leave one of the fields blank; you will be returned to the main menu.

   If you want to  continue, fill in the  name of the source  file.  Remember,
   this is the  file the  records are coming  from.  Once you  have filled  in
   existing data files  for both the  source and target  files, the  selection
   criteria menu will be displayed.

                                   Page -32-
                            Mass Appeal Version 3.2


   This menu allows you  to merge only certain  records from the source  file.
   For example, you  can merge only  those records from  the source file  that
   live in 'AL'.  See appendix A for further details.

   Once you have defined your selection criteria (Or, merge criteria, in  this
   case), you are asked whether or not you want to continue.  To continue  the
   process, press the appropriate letter.

   Mass Appeal will now copy  the records from the  source file that meet  the
   selection criteria into the target file.  NOTE: The records still remain in
   the source file, they are not removed or marked for deletion!

   11.8 Check For Duplicates In The Active Data File

   This handy  routine allows  you to  check for  possible duplicates  in  the
   active data file.  You will have 12 choices; each allowing you to check for
   duplicates in different ways.  For  each option, you will  also be able  to
   specify how many characters of each field (Or, fields) should be checked.

   After you have informed  Mass Appeal which method  to use for checking  for
   duplicates, a temporary index file must be built.  This may take some time,
   depending on the total number of records in the active data file.

   After the index file has been created, you must turn on the printer for the
   duplication report to  print out.  The  report shows each  record, and  the
   suspected duplicate, based on the method you selected.

   After the report has completed, you will be allowed to delete each possible
   duplicate, one by one,  based on the record  number.  The record number  is
   printed out in the duplicate report.

   To delete a record (Actually, it  just marks them for deletion), enter  the
   record number.  After you enter the record number, you will have to confirm
   this is the record to delete.  To  delete this record, press the letter  Y;
   otherwise press the letter N.

   11.9 Exit The Maintenance Menu, Return To Main Menu

   Once you are  done with  the maintenance routines,  press the  number 9  to
   return to the main menu of Mass Appeal.

 12 Exit This Program, Return To DOS...

 When you are done using  Mass Appeal, you can return  to DOS by pressing  the
 number 8.  Once you have  done so, a menu  telling you about ShareWare,  Mass
 Appeal and Zipp  Appeal is  displayed.  You are  then asked  to press  return
 again to finally return to DOS.

 13 ShareWare

 ShareWare is a unique  marketing concept where you  can try out software  and
 see if it fits your particular  needs before you purchase the  product.  Mass
 Appeal and  the 40,000  version of  Zipp Appeal  are distributed  under  this
 marketing strategy.


                                   Page -33-
                            Mass Appeal Version 3.2


 Registration provides you  with numerous benefits.  First  and foremost is  a
 printed manual. This manual  is sent to you  upon registration, and is  quite
 handy to have  around. We  are currently  working with  a desktop  publishing
 program to develop a manual complete  with screen samples, and other  impres-
 sive features that make Mass Appeal even easier to learn and work with.

 Secondly is the  notice of updates  to the program.  Since  it was first  re-
 leased in the middle of 1987, Mass Appeal has gone through numerous  releases
 (Seven to  be exact,  but  who's counting?).  These  changes have  been  made
 mainly due to user requests.  So, keeping up to date is important.

 Our newsletter - The Mass Appealer - gives important tips on efficient use of
 Mass Appeal, and tells you about future plans for Mass Appeal. We also answer
 the most frequently asked questions.

 Registered users also receive two free  updates of their choice, in  addition
 to receiving the latest version of Mass Appeal when they register.

 14 Appendix A - Defining Selection Criteria

 To define a selection criteria, you need to tell Mass Appeal what  conditions
 should be met.  A selection criteria can be something like 'All entries where
 the state field is equal to 'AL'', or similar conditions.

 Once you get to the selection criteria screen, you have several choices:

   14.1 More-Criteria

   When you first begin  defining a selection criteria,  you notice the  large
   lower window says 'All Entries'.  To define an additional condition,  press
   the letter M.  If this is the first selection criteria you have defined for
   this condition, a menu will appear in the upper window asking you to select
   your option on how you wish to narrow the data base down.

   If this is not  the first condition,  you will be asked  how you want  your
   conditions joined: with AND, OR, AND NOT or OR NOT.  Enter the  correspond-
   ing number.

   You have 12 options available on how to select the records for your report,
   labels, or other type of output.  These options are:

     14.1.1 City

     By selecting option  1, you are  allowed to specify  what city should  or
     should not be (By using AND NOT or OR NOT combinations) included.  If you
     leave this field blank,  your selection criteria for  this field will  be
     ignored.

     14.1.2 State

     By selecting option 2,  you are allowed to  specify what state should  or
     should not be (By using AND NOT or OR NOT combinations) included in  your
     output.  If you leave this field blank, your selection criteria for  this
     field will be ignored.


                                   Page -34-
                            Mass Appeal Version 3.2


     14.1.3 Last Name

     By selecting option 3, you are  allowed to specify what last name  should
     or should not be (By  using AND NOT or  OR NOT combinations) included  in
     your output.  If you leave this field blank, your selection criteria  for
     this field will be ignored.

     This option comes in handy when you  want to select a single person,  and
     possibly print one label, or address a single envelope.

     14.1.4 Salutation

     By selecting option 4, you are allowed to specify what salutation  should
     or should not be (By  using AND NOT or  OR NOT combinations) included  in
     your output.  If you leave this field blank, your selection criteria  for
     this field will be ignored.

     You may want to use this to to target mail marketing for all  salutations
     with 'Dr.', or all salutations with 'Mrs.', or whatever.

     14.1.5 Zip Code Range

     By selecting option  5, you are  allowed to  define a zip  code range  to
     include or exclude  (By using  AND NOT or  OR NOR  combinations) in  your
     output.  You will be asked for a starting and stopping zip code.

     14.1.6 Category Field

     By selecting option  6, you are  allowed to define  a category code  that
     should be or  should not be  (By using  AND NOT or  OR NOT  combinations)
     included in your output.  If you  leave this field blank, your  selection
     criteria for this field will be ignored.

     Remember, when you  tell Mass Appeal  to search for  a specific code,  it
     looks through the entire  category field to see  if the code you  entered
     exists anywhere in the field of each record.

     14.1.7 Date Field Range

     By selecting option 7, you  are allowed to define  a date field range  to
     include or exclude  (By using  AND NOT or  OR NOR  combinations) in  your
     output.  You will be asked for a starting and stopping date.

     Notice '01/01/80' is automatically filled  in for the starting date,  and
     your computers internal  date is set  up in the  stopping date.  You  may
     modify these as necessary.

     This is a practical way  to get a  report of all the entries you  entered
     last week, this  month, this  quarter, or any  other period  of time  you
     like!






                                   Page -35-
                            Mass Appeal Version 3.2


     14.1.8 Home Phone Area Code

     By selecting option 8, you are allowed  to define a home phone area  code
     that should be or should not be (By using AND NOT or OR NOT combinations)
     included in your output.  If you  leave this field blank, your  selection
     criteria for this field will be ignored.

     You may want to use this condition in conjunction with the next option to
     create conditions like: "Where the home phone area code is '205', but the
     work phone area code is '404'".  This would imply this record belongs  to
     someone who lives in  Alabama, yet works  in Georgia (If  you sell a  car
     that gets impressive gas mileage, it may be of interest to this person).

     14.1.9 Work Phone Area Code

     By selecting option 9, you are allowed  to define a work phone area  code
     that should be or should not be (By using AND NOT or OR NOT combinations)
     included in your output.  If you  leave this field blank, your  selection
     criteria for this field will be ignored.

     You may  want to  use this  condition in  conjunction with  the  previous
     option to create  conditions like:  "Where the  home phone  area code  is
     '205', but the  work phone area  code is '404'".  This  would imply  this
     record belongs to someone who lives in Alabama, yet works in Georgia  (If
     you sell a car that gets impressive gas mileage, it may be of interest to
     this person).

     14.1.10 Company Name Keyword

     By selecting option 10, you are allowed  to define a key word within  the
     Company field that should be or should not be (By using AND NOT or OR NOT
     combinations) included in  your output.  If you  leave this field  blank,
     your selection criteria for this field will be ignored.

     Use this to produce reports of  entries that have the word 'Computer'  in
     the company name; or some other key  word that might help you reach  your
     target market.

     14.1.11 Comment Field Keyword

     By selecting option 11, you are allowed  to define a key word within  the
     comment field that should be or should not be (By using AND NOT or OR NOT
     combinations) included in  your output.  If you  leave this field  blank,
     your selection criteria for this field will be ignored.

     Use this to produce reports of entries that have the word 'Money' in  the
     comment field; or  some other  key word that  might help  you reach  your
     target market.

     14.1.12 Assigned Record Number

     By selecting option 12, you are  allowed to define a record number  range
     to include or exclude (By using AND  NOT or OR NOR combinations) in  your
     output.  You will be asked for a starting and stopping record number.


                                   Page -36-
                            Mass Appeal Version 3.2


     If you leave  both fields  blank (Actually,  they will  be zeroes),  your
     selection criteria for this field will be ignored.

   14.2 Save-Criteria

   If you have  just built an  elaborate selection criteria,  you may want  to
   save it for later use.  To save your criteria, press the letter S.

   You will then be asked  for a short name for  the criteria you are  saving.
   Try to use something  descriptive if at all  possible.  If you try to  save
   over a previously saved criteria with the  same name, you will be asked  if
   you want to replace the existing criteria.  If you do, press Y.  Otherwise,
   press N.

   You will  also be  able to  enter a  longer description  for the  selection
   criteria you are saving.  Once  you have entered  the long description  and
   pressed return, your criteria is saved.

   If you  do not  remember the  name of  previously saved  criteria, you  can
   access the maintenance menus (Option 7  from the main menu), then option  5
   from the maintenance menu, then option 6 to receive a report of  previously
   saved criteria.

   14.3 Retrieve-Criteria

   To retrieve a previously saved criteria, press the letter R.  You will then
   be asked for  the short name  of the criteria.  Enter  the name, and  press
   return if necessary.

   If you can't remember  the name of a  previously saved selection  criteria,
   you can access the Miscellaneous Maintenance  Menu and receive a report  of
   all previously saved criteria!

   If you  do not  remember the  name of  previously saved  criteria, you  can
   access the maintenance menus (Option 7  from the main menu), then option  5
   from the maintenance menu, then option 6 to receive a report of  previously
   saved criteria.

   14.4 Parenthesis

   For complex conditions, you  may want to  place parenthesis around  smaller
   conditions.  While this  is quite  advanced,  you do  have the  ability  to
   perform this operation.

   NOTE: You must have an equal number of left and right parenthesis!

   14.5 Done

   Previously the Finished  option.  Means your have  completed defining  your
   selection criteria, continue with processing.






                                   Page -37-
                            Mass Appeal Version 3.2


 15 Appendix B - Cursor Movement

 When you are in the add and edit routines of Mass Appeal, certain key strokes
 can save you time.  Here  are available key strokes  when in the Add  routine
 filling in the fields, or in the Edit routine, editing the record:

 Keystroke         Action

 Up Arrow          Moves up one field.

 Down Arrow        Moves down one field.

 Left Arrow        Moves cursor left one character.

 Right Arrow       Moves cursor right one character.

 Ctrl-Left Arrow   Moves cursor a word to the left.

 Ctrl-Right Arrow  Moves cursor a word to the right.

 Home              Takes you to the first position of the field.

 End               Takes you to the last position of the field.

 Ctrl-Y            Deletes from cursor position to end of the field.

 Ctrl-Home         Moves cursor to Last Name field.

 Ctrl-End          Moves cursor to Comment field.

 16 Appendix C - Printer Setup Strings

 Often times,  Mass Appeal  will ask  you for  a printer  setup string,  or  a
 printer escape sequence.  This appendix explains how you can enter these from
 your printer reference manual.

 In your printer manual, they describe how to perform special operations (Like
 compressed print) using BASIC.  The codes Mass Appeal uses are nearly identi-
 cal to those for BASIC, so entering printer setup strings is quite easy!

 For example, in  your printer  manual, it will  tell you  that the  following
 BASIC program (A 1  line program) will set  your printer in compressed  print
 (Often called condensed print):

 10  LPRINT CHR$(15)

 The number 10 is a line number, required in most BASIC programming languages.
 The LPRINT statement tells BASIC to  print what follows to the  printer.  The
 CHR$(15) is a printer escape sequence to compress the print for this  partic-
 ular printer, probably an Epson or IBM printer.

 We are interested in the CHR$(15) code.  To enter this code into Mass Appeal,
 leave out  the dollar  sign.  Thus,  the printer  compression code  for  Mass
 Appeal would be:


                                   Page -38-
                            Mass Appeal Version 3.2


 CHR(15)

 for  this particular printer.  Your printer may be different, so please refer
 to your printer  manual for the  printer escape sequence  to perform  similar
 operations.

 17 Appendix D - Technical Information

 If you are a programmer, dBASE III Plus enthusiast, or just want to know  how
 the Mass Appeal files are laid out,  this Appendix is for you. While it  does
 not cover the layout of ALL the files, it does give you some insight into the
 main data base  files, and  gives you some  additional technical  information
 about Mass Appeal.

   17.1 .DBF File Structure

   Listed below is  the structure of  the data files  that Mass Appeal  stores
   address information in. While other data base files are used in the  opera-
   tion of Mass Appeal (Such as CRITERIA.DBF and DEFAULT.DBF), only the struc-
   ture of the address files is really needed.

   Field Name    Type       Length Description
   ------------- ---------- ------ -------------------------------
   SAL           Character    5    Salutation, i.e. Mr., Mrs., Dr.
   FN            Character   14    First name field.
   LN            Character   16    Last Name field.
   CP            Character   35    Company Name.
   ADD_1         Character   35    Address Line 1.
   ADD_2         Character   35    Address Line 2.
   CTY           Character   20    City.
   ST            Character    2    State.
   ZC            Character   10    Zip Code.
   HP            Character   13    Home Phone.
   WP            Character   13    Work Phone.
   ED            Date         8    Date Entered.
   C             Character   26    Category Field - For Codes.
   CM            Character   24    Comment field.

   The fields have short names on purpose. During development of Mass  Appeal,
   we wanted the  user to  be able to  define complex  selection criteria.  To
   allow this, we had to shorten the  fields as much as possible, while  still
   retaining some meanings to the fields.

   Short field names would allow the user to define complex selection criteria
   without reaching the 254 character length placed on character variables  in
   the dBASE III programming language.

   17.2 Custom Index File Expression

   Mass Appeal now allows you to  define you own index file expression.  Using
   the maintenance menus, access the  index file adjustment system. Then,  ac-
   cess the zip code index  file maintenance. Option 3  is the option we  will
   talk about.



                                   Page -39-
                            Mass Appeal Version 3.2


   This option allows you to define your own index file expression. If you are
   a programmer familiar with dBASE III  Plus syntax, or a dBASE III  enthusi-
   ast, you can use this option to create your own index scheme.

   After selecting this option, enter your dBASE III Plus expression. WARNING:
   THE EXPRESSION IS NOT CHECKED FOR CORRECTNESS! IF YOU DO NOT ENTER A  VALID
   DBASE III PLUS EXPRESSION, THE PROGRAM WILL ABORT, AND RECOVERING YOUR DATA
   MAY BE DIFFICULT. IF YOU  HAVE ANY QUESTIONS, PLEASE  FEEL FREE TO CALL  US
   HERE AT MASS APPEAL SOFTWARE. WE WILL BE MORE THAN HAPPY TO HELP.

   As an example, let's say you wanted a report in order of the date  entered.
   Well,as many dBASE III enthusiasts already  know, you can't just enter  the
   ED field as the index file expression. NO! You have to convert the date  to
   a character field, and then pick out the year as the first two  characters,
   and then place  the rest of  the date (Also,  transformed into a  character
   field) at the end. That, in a  nutshell, allows you to receive a report  in
   date entered sequence! Here's the index file expression you would enter:

   SUBSTR(DTOC(ED),7,2) + SUBSTR(DTOC(ED),1,5)

   NOTE: Once you have defined your  new index file expression, you must  make
   sure the order of the output is set to zip code order (In the miscellaneous
   options in the  maintenance menus). Remember,  this is the  zip code  index
   file we  are working  with. And  remember that  when you  are in  the  edit
   routine, the Find option will not work  correctly when the Order is set  to
   the zip code, because you have changed the zip code index file expression.

   The file structure was defined in  the previous section for the purpose  of
   enabling you to create your own index file expressions.

   With all  that could  go wrong,  this  option is  really handy  for  people
   needing their output sorted by something other than company name, last name
   or zip code. And, once again, if you are not familiar with dBASE III  Plus,
   please call us here at Mass Appeal Software; we will help.

 18 Zipp Appeal

 Zipp Appeal is another program we have developed to work in conjunction  with
 Mass Appeal, version 3.0 and  up.  If you have a hard  disk, and 2.9 Meg.  of
 additional disk space, you can  use Zipp Appeal. Zipp  Appeal is by no  means
 required, but it may save you typing time and reduce data entry errors.

 We have expand the data file to  95,000 cities, states and zip codes  (Previ-
 ously, we only had a 40,000 version); this data file is available for $49.95!
 The difference between  the two  Zipp Appeal  versions is  minor. The  95,000
 version has  multiple cities  for each  zip code.  When  multiple cities  are
 found for a single zip code, you are allowed to select from several  possible
 cities (If you have Mass Appeal and Zipp Appeal interacting in this  manner).
 NOTE: The 95,000 version ONLY WORKS WITH VERSION 3.2 AND ABOVE!

 So, depending on your needs,  you may want to  register for the 40,000  entry
 data file  (Requires up  to 2.9  Meg.) costing  $39.95; or  you may  want  to
 register for the  95,000 entry data  file (Requires up  to 6.9 Meg.)  costing
 $49.95!


                                   Page -40-
                            Mass Appeal Version 3.2


 Both versions are  installable per  state, so  you do  not have  to load  the
 entire 95,000 or 40,000 U.S.  zip codes. You are  allowed to select from  the
 states you want to install.

   18.1 Installation

   Installation of  Zipp Appeal  is easy.  Zipp Appeal  Comes on  a series  of
   diskettes. If you have the 95,000 version of Zipp Appeal, you should have a
   total of 7 disks. If you have the 40,000 version of Zipp Appeal, you should
   have a total of 3 disks.

   Set your default drive to drive A by entering A: and then pressing  Return.
   From the DOS prompt (Probably A>), enter INSTALL and press Return. After  a
   few seconds, you will see a  message stating that the installation of  Zipp
   Appeal is going  to be performed.  If you  want to continue,  press a  key.
   Otherwise, if you don't  want to install Zipp  Appeal at the present  time,
   press Ctrl-C, and answer Y  when asked if you  want to terminate the  batch
   job.

   If you continue with installation, you  will soon be presented with a  menu
   that will allow you to select individual states to be installed. To install
   Zipp Appeal for a particular state,  simply enter the letter Y beside  that
   state. Otherwise, leave the field blank, or enter N, for No.

   Once you have selected the individual  states, you will be asked to  insert
   each disk, as needed, into drive A:.  Insert each disk, as instructed,  and
   continue until a  menu appears  asking how you  want Mass  Appeal and  Zipp
   Appeal to interact.

   18.2 Mass Appeal And Zipp Appeal Interaction

   To save space,  Zipp Appeal  is installable per  state, and  allows you  to
   select the  way Mass  Appeal and  Zipp Appeal  work with  each other.  This
   simply means that you must decide at  this point whether you want to  enter
   the zip code and have Mass Appeal automatically insert the city and  state,
   whether you want to  browse through possible states  and zip codes for  the
   city entered, or whether  you want Mass Appeal  to automatically adjust  to
   both scenarios.

   To help you judge  which scenario you  would like (Based  on the amount  of
   disk space you currently have available), take into consideration the  fol-
   lowing disk space requirements. NOTE: In the following chart, it is assumed
   that Zipp Appeal has been installed for all 50 states, plus the District of
   Columbia for that particular version.

     Product              Insert City, St.    Browse Cities   Total For Both
     Zipp Appeal 40,000          1,786,781        2,238,365        2,867,101
     Zipp Appeal 95,000          4,241,303        5,371,799        6,860,696

   18.3 Operation

   This section will  describe what  information Mass Appeal  expects to  see,
   based on the way you have installed Zipp Appeal.



                                   Page -41-
                            Mass Appeal Version 3.2


     18.3.1 Insert City And State

     If you have installed Zipp Appeal to allow Mass Appeal to insert the city
     and state based on the zip code entered, you must enter certain pieces of
     information for Mass Appeal to work correctly.

     When adding records in Mass Appeal, you must leave the city and/or  state
     fields blank.  Once you have entered a  zip code, and have completed  the
     entry, one of several things will happen. Based on which version of  Zipp
     Appeal you installed, the following may happen:

       18.3.1.1 Zipp Appeal - 95,000 Version

       If you have the  95,000 version of Zipp  Appeal installed, Mass  Appeal
       will do one of three things.  First, there exists the possibility  that
       the zip code you  entered could not  be found in  the Zipp Appeal  data
       file. If this happens, an error message will be displayed, and you will
       be required to press Return to resume operation of Mass Appeal.

       Secondly, a single, unique  city and state may  exist for the zip  code
       you entered. In this case, Mass  Appeal will insert the city and  state
       for you, and allow you to continue operation of Mass Appeal.

       Thirdly, there may be several  (Up to 36) cities  for the zip code  you
       entered. When this happens, Mass Appeal will display a window,  showing
       you all the cities  that correspond to the  zip code entered. You  will
       then be allowed  to enter the  number of  the city and  state for  your
       entry. Notice that when you are shown this window, a number has already
       been filled in for you. This  is most often the corresponding city  you
       want to select, so pressing return, and accepting the number  displayed
       is often times the best action to take.

       18.3.1.2 Zipp Appeal - 40,000 Version

       If you have the  40,000 version of Zipp  Appeal installed, Mass  Appeal
       will do one of two things. First, there exists the possibility that the
       zip code you entered could not be  found in the Zipp Appeal data  file.
       If this happens, an  error message will be  displayed, and you will  be
       required to press Return to resume operation of Mass Appeal.

       Secondly, a single, unique  city and state may  exist for the zip  code
       you entered. In this case, Mass  Appeal will insert the city and  state
       for you, and allow you to continue operation of Mass Appeal. Unlike the
       95,000 version of Zipp Appeal,  you will not be  able to select from  a
       list of possible cities for the zip code you have entered.

     18.3.2 Browse Through Cities, States And Zip Codes

     If you have installed Zipp Appeal to allow Mass Appeal to browse  through
     possible states and  zip codes based  on the city  you have entered,  you
     must enter certain pieces of information for the program to work correct-
     ly.




                                   Page -42-
                            Mass Appeal Version 3.2


     When adding records in  Mass Appeal, you must  leave the zip code  and/or
     state fields blank.  Once you have entered  a city (Or, the partial  name
     of a city),  and have  completed the entry,  one of  several things  will
     happen. Unlike  the  previous  interface between  Mass  Appeal  and  Zipp
     Appeal, it doesn't  really matter what  version of Zipp  Appeal you  have
     installed; they both perform identically (Except, of course, for the fact
     that the 95,000 version has more  cities, states and zip codes to  browse
     through).

     After you have completed  your entry, you will  see a window appear  that
     will show you 22  cities, states and zip  codes.  You will notice in  the
     lower part of the window, you  have several options. These options  allow
     you to go forwards, backwards, select a city, state and zip code, or find
     another city all together. The options  and their actual use are as  fol-
     lows:

       18.3.2.1 Next-Screen

       By pressing the letter N, or the  PgDn key,  you are taken to the  next
       screen of possible cities, states and  zip codes, based on the name  of
       the city.

       18.3.2.2 Previous-Screen

       By pressing the letter P, or the PgUp key, you are taken to the  previ-
       ous screen of possible cities, states and zip codes, based on the  name
       of the city.

       18.3.2.3 Select-A-City

       If you see the city, state and  zip code you would like Mass Appeal  to
       insert, press  the letter  S. You  will then  be asked  for the  number
       associated with your choice.  Enter the number,  and press return.  You
       will see that Mass  Appeal will fill  in the city,  state and zip  code
       with your selection.

       18.3.2.4 Find-A-City

       To position yourself at  another city, simply press  the letter F.  You
       will then be asked  for the name  of the city you  would like to  find.
       Enter the name, up to 15 characters, and press enter. You will then  be
       positioned in a  new set of  cities, states  and zip codes,  if a  city
       could be found that closely matches your entry.













                                   Page -43-
                            Mass Appeal Version 3.2


 19 Registration Form

 Remember, Mass Appeal  is like all  other software; you  should purchase  one
 copy for each machine  that uses Mass  Appeal.  Special pricing is  available
 for 10 or more copies, so please call for details!

 To register your copy of Mass Appeal, please complete the form below and send
 check, money order, or cashiers check to the following address:

 Mass Appeal Software; P.O.  Box 772; Alabaster, AL  35007

 Name:    _________________________________________________________________

 Company: _________________________________________________________________

 Address: _________________________________________________________________

 Address: _________________________________________________________________

 City:    ___________________________ St.: __________ Zip: ________________

 Phone:   (_________) _____________ - _________________  Ext: _____________

 What features  would you  like to  see implemented  in Mass  Appeal that  are
 currently not a part of the program?



 How did you obtain a copy of Mass Appeal? Users group, ShareWare distributor,
 bulletin board, friend, enemy, etc...



 Qty.      Description                         Price Ea.        Total

 _______   Mass Appeal Registration...........  $49.95    _________________

 _______   Zipp Appeal Registration (40,000)..  $39.95    _________________

 _______   Zipp Appeal Registration (95,000)..  $49.95    _________________

                                   Grand Total Due:    ____________________



 Send payment to the address  listed at the top  of this page.  Thank you  for
 your support.  Only with  your support  can low cost,  high quality  software
 like Mass Appeal and Zipp Appeal be developed.








                                   Page -44-
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1920

     Volume in drive A has no label
     Directory of A:\

    FLOPPY   BAT      2537   2-16-89
    HARDDISK BAT      1193   2-16-89
    MA       BAT       653   2-16-89
    DOC      BAT       857   2-16-89
    CRITERIA FRM      1990   2-16-89
    MA       FRM      1990   2-16-89
    MA       LBL      1034   2-16-89
    ROTARY   LBL      1034   2-16-89
    CONFIG   SYS        24   2-16-89
    MA       DOC    130660   2-16-89
    MA-32    EXE    214105   2-16-89
           11 file(s)     356077 bytes
                               0 bytes free
