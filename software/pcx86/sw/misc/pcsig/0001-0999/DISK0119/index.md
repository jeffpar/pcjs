---
layout: page
title: "PC-SIG Diskette Library (Disk #119)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0119/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0119"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ABC DATABASE"

    ABC DATABASE is a user-friendly data filing system that accepts up to
    1,500 records with up to 12 fields in each record.  It handles
    customer files or mailing lists of 100s to 1000s of records.  It will
    also handle daily schedules or technical-article cross references.
    
    Features:
    
    ~ Maintains 1,500 records, 12 fields, and 50 characters per field
    ~ Handles customer files or mailing lists of up 1000s of records
    ~ Handles daily schedules, technical article cross references, recipe
    files, sales records, parts inventories, student grades, etc.
    ~ Ability to specify character or numeric fields
    ~ Simple calculations on fields
    
    System Requirements: Epson FX/MX-80 or equivalent.
    
    How to Start: Consult the .DOC files for documentation and directions.
    To run the ABCFILE.EXE program, just enter ABCFILE and press <ENTER>.
    
    Suggested Registration:  $30.00
    
    File Descriptions:
    
    ABCFILE  HLP  ABC-FILE help file
    ABCFILE  DOC  Documentation
    ABCFILE  EXE  ABC database main program ABCFILE  HLP  Help data
    NUMSAM   CFG  Sample configuration
    DBII-ABC EXE  Translate dBASE II files to ABC
    AUTOEXEC BAT  Boot start up file
    ABCONVRT BAS  Convert files to ABC format
    NUMSAM   DAT  Sample program data
    NUMSAM   NUM  Part of sample program
    SAMPLE   DAT  Sample program data
    SAMPLE   CFG  Sample configuration
    README   1ST  Initial documentation
    NUMSAM1  NDX  Sample program
    SAMPLE1  NDX  Sample program
    SAMPLE   NUM  Part of sample program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABCFILE.DOC

{% raw %}
```














                                                                   



                              " ABC-FILE "      
                                
                           (C) Copyright 1984



      
                            D N D  Enterprises

                          6215 Quiet Water Place

                          Charlotte, N. C. 28214

                              David A. Valk








































                                   Page 2


     ABC-FILE Index                                   Version 1.1

     ==================================================================
     

     0.1   -   Files, Records, Fields & Such                   -  3 
     0.2   -   ABC-FILE requirements, capabilities, & scope    -  4 
     0.3   -   How to begin...                                 -  5
     0.4   -   Defining a database                             -  8
     0.5   -   The Menu,Help,Sound, and Color                  - 11

     1.0   -   Adding - Records                                - 12

     2.0   -   Finding records by number (See Records)         - 13
 
     3.0   -   Binary Search (Find Record)                     - 13
     3.1   -   Deleting Records                                - 15
     3.2   -   Recalling Records                               - 15
     3.3   -   Modifying existing records                      - 15
     3.4   -   Writing individual Records to WS/MM File        - 16

     4.0   -   Reports (List Records)                          - 17
     4.05  -   More Reports (General Information)              - 18
     4.1   -   Labels (Two Part Names)                         - 21
     4.2   -   Labels (One Part Names)                         - 22
     4.3   -   To WS/MM File                                   - 22
     4.4   -   To Disk File                                    - 23
     4.5   -   To the Screen                                   - 24
     4.6   -   To the Printer                                  - 24

     5.0   -   Sorting Records                                 - 24

     6.0   -   Packing Files (Pack Records)                    - 25

     7.0   -   Importing Files                                 - 26
           -   Using ABCONVRT.BAS if needed                    - 27
     7.1   -   Using DBII-ABC for import                       - 28

     8.0   -   Changing Files                                  - 29
       
     9.0   -   Misc....                                        - 29



















                                   Page 3



     0.1     Files, Records, Fields & Such  
     -------------------------------------- 
         
     Perhaps  something  should be said about the record  concept  with 
     regards to computer files.   (For those in the Know,  feel free to 
     skip this chapter and move on to 0.2)

     A computer stores information in files.   For the purpose of ABC-
     File we will refer to these as "DataFiles".  A DataFile consists
     of many individual components known as Records.  ABC-File 
     allows a maximum of 1500 records in any DataFile.  The "Record" 
     can be thought of as a individually locatable part of the 
     DataFile.   Generally  a  record  would be  used  to  contain  the 
     information  about  an individual Customer,  Person in  a  mailing 
     list, Recipe, etc.

     Each record is within itself made up of individual components 
     known as "Fields".  A typical field might be used for storing the 
     Name,  Address,  City, State, etc.  All records in a DataFile will 
     contain the same number of fields known by the same field name.  

     So,  to  summerize each DataFile you define will contain from 1 to 
     1500 records.  Each record will contain from 1 to 12 fields.

     When  you define your DataFile you will be asked not only to  Name 
     the Fields for each Record, but also to specify the length of each 
     field.   (The computer must be told how much space to allocate  in 
     your  file  for  each field and each record.)  The  maximum  field 
     length allowed in ABC-File is 50 characters and the minimum length 
     is 2 characters.

     One might think of a file as an Index File Box and each record  as 
     an  Index Card within the box.   A Field may be thought of as  the 
     lines on an Index Card.

     With  ABC-FILE  you  will be able to define any  number  of  "File 
     Boxes"  containing any number of ever changing Index  Cards.   The 
     number  of  lines used on the card can be specified and  named  at 
     will, and every card in the box will be uniformly formatted.

     So,  continue  on and get ready to define your  first  file,  have 
     fun!!!



















                                   Page 4


     0.2  Requirements, Capabilities & Scope
     ---------------------------------------

     System Requirements - IBM PC/XT
                         - 128K Memory
                         - At least 1 disk drive or hard disk
                         - Epson FX/MX-80 or equivelant
                         - Color or Monochrome monitor

     Files required      - ABCFILE.EXE       ABCONVRT.BAS
                         - ABCFILE.DOC
                         - ABCFILE.HLP
                         - DBII-ABC.EXE

     Files Generated     - YOURFILE.DAT
                         - YOURFILE.NUM
                         - YOURFIL1.NDX thru YOURFI12.NDX
                         - YOURFILE.CFG
                         - YOURFILE.MRG
                         - ABCCONFG

     Capabilities        - Max number of records     -  1500
                         - Max number of fields      -  12
                         - Max characters per field  -  50
                         - Max number of index files =  # of fields

     Scope....           

     ABC-File  is not intended to be all things for all people.   It is 
     not  intended to be used to maintain a 65000 plus (+) record  file 
     for some Fortune 500 company. (What Micro is ? !)

     It is however designed to be easy to use, user friendly throughout 
     and  adequately  maintain  a reasonable size  file  for  most  any 
     purpose.   Customer files or mailing lists of 100-1000 records are 
     handled very well.  Other ideas include daily schedules, technical 
     artical  cross  references  (With  the  first  field  used  for  a 
     keyword(s),   at  50  characters  per  field  you  can  enter  550 
     characters  of  text  about  the  artical),  recipe  files,  sales 
     records, parts inventory, student grades, etc.























                                   Page 5


     This version includes the abilty to specify fields to be character 
     or numeric,  and if numeric,  the number of default decimal places 
     for each field.  Also included are simple calculations on  fields. 
     You  can define any field to be the result of a calculation on any 
     two other fields in the record. Numeric operators include +, -, *, 
     and  /.  You  will not be prompted to enter data  into  calculated 
     fields while in the add record function. ABC will update the field 
     automatically.  Reports containing numeric fields will be  totaled 
     and averaged for each numeric field.

     Again,  your  super DataBase system its not,  but we feel ABC-FILE 
     will find its "Place" in any number of uses,  for  any  number  of
     people !

     Your feedback and suggestions for later versions is appreciated.



     0.3  How to Begin
     ----------------- 
     To  prepare  your  ABC  work  disk,  first make  a  copy  of  your 
     distribution disk and file it away for safe  keeping.  Next,  with 
     the  DOS  copy command,  copy Command.com to your ABC  work  disk. 
     There  is  an Autoexec.bat file included with ABC to allow you  to 
     boot  the  system  form the work disk once  you  have  copied  the 
     necessary DOS files. 

     To  load ABC-FILE,  insert your disk in the default drive and type 
     ABCFILE  <Enter>  (Or,if booting simply  hit  Ctr-Alt-Del).  After 
     loading  you should see the sign-on screen,  read the  information 
     and press any key to proceed.

     One  of two things will happen next.   If your IBM PC is  equipped 
     with  a  monochrome adapter you will proceed directly to the  file 
     entry  screen (Go to 0.4 if thats the case).   If your  system  is 
     equipped  with  a  color graphics board you will go to  the  color 
     definition  screen  to  set up  your  screen  configuration.   The 
     default colors are 7,7,3,1,1,3,1 and are a good starting point for 
     now.   Enter these,  one at a time when prompted to do so.  If you 
     have a Green or Amber monitor connected to your CG Board enter the 
     proper  codes  for foreground,  0 for background,  and  white  for 
     inverse video.





















                                   Page 6


     You will then be prompted to save this configuration.  Respond "Y" 
     and  press  enter and the ABCCONFG file will be written  to  disk.  
     You will not have to define colors again unless you wish to change 
     at a later date or time.

     You  should  now be looking at the prompt asking for the entry  of 
     your  DataFile  Name.  To view the predefined files on  your  disk 
     enter "?", press <Return>, then the drive identifier (A,B,C,or D), 
     press <Return>,  and you should see the available files.  You  may 
     enter  "SAMPLE"  for a demo (Suggested) now or go  to  0.4  to 
     define your own file.    

     If  you're  reading this I'll presume you have entered "Sample"  for 
     the  file  name and we'll proceed with a  quick  demonstration  of 
     ABC's  commands and abilities.  After viewing the defined  fields, 
     Press <Return> to go to main menu.

     Let's  begin with an easy report using one of the Macros available 
     from  here.  Press [F4] (The function key on the left).  ABC  will 
     quickly flash through several screens and then present a report to 
     the  screen  of all the records in the  sample  file.  Notice  the 
     screen  will  display  19  records at a time,  then  pause  for  a 
     keypress to continue or by pressing [F10], return to the menu. If 
     you continue through all the records note that the number  printed 
     is provided for you at the end. 

     Press  <Return>  to return to the main menu.  Now lets do  another 
     report,  but  this time not use the macro.  First press [4]  (List 
     Records).  At the next screen select [1] for sorted,  then "N" for 
     printed  copy.  Now ABC asks for the index to sort the report  on. 
     Enter [2].  You should get an error message telling you to  resort 
     the file on that field! ABC will not let you print a report if the 
     index is not current!  (We could press Return and sort the file on 
     the 2nd field now,  but lets continue) Now re-enter [1], this is a 
     valid  index,  presorted and included with your distribution disk. 
     ABC  will respond with "List all the records ?  ".  Enter "Y"  and 
     press <Return>.  (If we would have responded with "N",  ABC  would 
     ask for our selection methods and the field to compare to, you can 
     try that later, see 4.0) 
























                                   Page 7


     Now ABC asks for the fields to include in the report, ....enter 4, 
     3,  2,  1 ,(<Return> after each number,  no comma's).  To end  the 
     process  press <Return> again.  The report will list to the screen 
     with only the fields you have selected. Notice you printed the 4th 
     field in the first column,  the 3rd in the second,  etc.  With ABC 
     you  can  print any field in any column.  They don't  have  to  be 
     consecutive,  and  any field may be omitted.  You may also include 
     extra  spaces between any field by simply typing "Sn"  when  asked 
     for the next field, where "n" equals the number of spaces to place 
     between the field last entered and the field about to be entered.

     Press  <Return> to return to the main menu.  Now an example of the 
     find function.  Press [F3].  One screen will flash by (We're using 
     another  Macro!).    Enter "IBM" in response to  the  prompt,  and 
     press  <Enter>.  The record will be displayed almost  immediately. 
     This "Find" function utilizes a binary search and find times  will 
     remain nearly constant no matter how many records are in the file. 
     Notice  by pressing "A" you will advance one position in the index 
     in use,  "B" will back up to where you were.  You may also delete, 
     recall,  change,  or write any record with a single keypress  from 
     the  find  function.  When  Advancing or  Backingup  the  relative 
     position  in  the  datafile  is displayed  for  your  convienence. 
     Pressing "E" will Exit back to the main menu.

     Lets  end this demo with a quick look at the add record  function. 
     Press  [1]  from the main menu.  Notice the inverse video  to  the 
     right  of  the "Enter Vendor"   prompt. This  visually  shows  the 
     maximum number of characters you may enter into this field. Typing 
     past  this  point will cause an error message.  Try it  now,  type 
     anything past the inverse outline and press <Enter>. ABC will tell 
     you of an entry error and ask you to re-enter.  Now, press <Enter> 
     with the inverse area blank and ABC will return to the main  menu. 
     This  is  how  we exit this function.  Return to  the  add  record 
     function  by  typing  [1] from the menu and enter  a  new  record, 
     typing dummy info into each field when asked. When finished answer 
     "N" to the prompt verifying that all is OK,  select a field number 
     to  change,  Press <Enter> ,  and see how ABC allows us to correct 
     our mistakes. When finished answer "Y" to OK? and press <Enter> on 
     a  blank first field to exit.  ABC will re-sort the primary  index 
     (On field 1), and return us to the main menu.























                                   Page 8


     Well,  that  gives  you  a  taste of how  ABC  works  and  of  its 
     capabilities.  Read  the rest of the documentation for details  on 
     the many more features included,  define your own file, and put us 
     to good use!
    

     0.4 - Defining a DataBase 
     -------------------------

     Now,  to  define a DataBase....First we must select a name for the 
     database.   Naming  restrictions  are the same as  those  for  all 
     regular  DOS  file  names with one exception.   DO  NOT  enter  an 
     extension for the name (No .ext!),  ABC-FILE will assign the  .Dat 
     extension to each file you define.   As with DOS you are allowed a 
     maximum  of  Eight  characters with no spaces,  you  may  use  the 
     underscore character if it is imbedded in the name (I.E. MY_FILE).  
     See  your  DOS manuel for more information.   Choose a  name  that 
     describes  the files contents so you will know what it is the next 
     time you see it! 

     Next  you will be asked to enter the drive on which the file  will 
     be saved (Stored). Enter A,B,C, or D as applicable.


     If  you have chosen a "New" name for your file ABC will  beep  and 
     respond  with  "NEW FILE".   A prompt at the bottom of the  screen 
     will  ask  you to confirm that you want to define  the  new  file.  
     Press "Y" and (RETURN) to continue.   (If you have misspelled your 
     file  name or wish to change it enter "N" (RETURN) to re-enter the 
     file  name. 
       ABC  will  respond with the prompt,  "Enter field  #1  Name  ?".  
     Enter  the  name  of  your first field.   Field names  may  be  in 
     lowercase  (recomended) and may include any character as  well  as 
     spaces.   In  effect,  anything  but  a blank may be  entered, and 
     seperated  or  2 part names will work very well later  on  in  the 
     prompts. The Maximum length is 8 Characters.



























                                   Page 9


         Examples  -  New Cust     -  LastName 
                   -  1st Name     -  Time 24H
                   -  Line #1      -  Key Word
                   -  Zip Code     -  ABC Cust

         NOTE * If you intend to use this file for mailing labels  see 
                "4.1 Labels".

     Pressing  enter  after the field name will produce  the  following 
     prompt  "Enter Field #1 length?".   Respond with a number equal to 
     the  maximum  number  of characters you will  need  to  store  the 
     necessary  information.   The number must be between 2 - 50.  Disk 
     space will be wasted if you choose an excessively long field,  and 
     you  won't  have enough room if you do not define  a  long  enough 
     field  so give it some thought.   Do not forget to include  spaces 
     for the hyphens in phone numbers, etc.

     If you wish to define the field to be numeric place a capital  "N" 
     immediately following the field length,  and immediately following 
     the "N" a number from 0-9 specifying the number of decimals.

     Example...  5N2 or 10N1

     Remember,  the "N" MUST be in uppercase!  This is necessary due to 
     the  manner  in  which  ABC parses the  command  string  .  It  is 
     recomended  that  8 to 10 characters be defined for  field  length 
     with  all  numeric  fields to allow for space to print  totals  in 
     reports  later  on.  The  decimal specifier is  required  for  all 
     numeric fields, even those not using decimals ("0").

     Another  feature available with numeric fields is defining a field 
     to  be the result of a calculation made on two PREVIOUSLY  DEFINED 
     FIELDS.  The  calculated field must occur in the record AFTER  the 
     fields that combine to be it's value.  In other words,  you  can't 
     define field #1 to be the product of field #2 * field #3.  You can 
     define #3 to be the product of #1 * #2.  The  Method for including 
     calculations  follows  some  pretty  strick  rules  so  study  the 
     following examples carefully.  The necessary identifier that tells 
     ABC to make a calculation is the backstroke "\".  This symbol must 
     follow the decimal specifier (I.E.  10N2\ ).  Following the "\" is 
     the first field in the calculation ,  then the operator,  and then 
     the  second field in the calculation.  The fields entered MUST  be 
     two digit numbers.  To enter field 1, you must enter it as "01", 3 
     as "03", etc.  The operators available are + - * / ,  representing 
     Plus, Minus, Multiply, and Divide.  


















                                  Page 10


     Example....

     Lets  pretend  we  are defining a Datafile to be  used  for  stock 
     inventory.  We  define the first two fields to be  "Partname"  and 
     "Part Num".  These are character fields of 20 char each in length. 
     We  decide  to define field #3 as "Quanity" and specify it  to  be 
     numeric  as follows...10N1.  Now we define field #4 as "Price  Ea" 
     and also make it numeric as ....10N2. We decide it would be to our 
     advantage  to  have  a running total of "Quanity"  *  "Price"  for 
     individual parts as well as in reports so we define field #5 to be 
     the product of field #3 * field #4 as follows, 10N2\03*04.

     Now,  anytime we add records to the file ABC will not prompt us to 
     enter  field  #5,  but simply skip to the next field (If there  is 
     another).  If we enter some records,  when we go back and look  at 
     them  we'll  see  that  ABC made the  necessary  calculations  and 
     entered  the current total into the record for  us.  Also,  if  we 
     locate the record with the find function and elect to change field 
     #3   or  #4,   we'll  see  the  new  total  fill  into  field   #5 
     automatically.  Any  Reports  we choose to format will  total  and 
     average the calculated fields just as if they were entered fields.

     Any  number of uses can take advantage of this feature,  let  your 
     imagination  run and see what you can come up with.  We've defined 
     files  for  Sales,Costs,  then calculate profit and %  of  profit. 
     Inventory  files could contain minimum quanity and  calculate  the 
     required reorder to maintain it, etc.etc.etc.

     Rules review for Numeric fields...

     * The N must be in uppercase "N"

     * You must specify the number of decimals "N2" (0-9)

     * Calculated field indentifier "\"

     * Field Identfiers for calculations must be two (2) digits.
         Enter 1 as "01" , 5 as "05" , etc

     * Available operators  + - * /

     * Valid entries... 8N3\10/05   8N2\02+06  10N2\01-09





















                                  Page 11

   
     Continue  in this manner until you have defined all the fields  in 
     your DataFile. If you make a mistake or want to start over anytime 
     during the definition process enter "99" to  field name and  press 
     enter.

     Once all are defined,  if you have not reached the 12 field limit, 
     press  enter  when  prompted for the next field name  to  end  the 
     process.   If you are using all 12 fields,after you enter the 12th 
     definition ABC will end the process automatically.


     ABC-FILE will now display the fields defined and pause waiting for 
     a key press.  Press (RETURN) to go to the main menu.


     0.5 - The Menu, Help, Sound and Colors
     --------------------------------------

     You should now be viewing the main menu.  Notice your file name is 
     displayed in the upper right corner.  In the upper left corner the 
     number of Records on File is displayed for your  information.   If 
     you have just defined this file the ROF will equal 0.
     

     Notice  the  three prompts across the bottom of the screen  (Sound 
     off/on,  Help, Color).These functions are accessed by pressing the 
     appropreate arrow keys on the numeric key pad as follows....

         Left Arrow ( <-- ) -  Sound toggle, turns the "Beep" on or off

         Up Arrow   (  ^  ) -  Displays help screens.  Follow the arrow 
                               key  immediately with a function  number 
                               for specific help (You have to be  fast, 
                               no  more  than  a second  delay  between 
                               the  up  arrow and a key 1-9). Up  arrow 
                               only starts at screen 0 and you can page 
                               on through screen 9.

         Right Arrow (--> ) -  Allows  you  to  change  the   color 
                               configuration of the screen.























                                  Page 12


     *****************************************************************
 
     MACROS  - There are four (4) macros available from the Main  menu, 
     they are...

     [F3] Find function, indexed on field #1

     [F4] List function, indexed on field #1, to the screen, "A"

     [F5] List function, "   "       "    " , to the printer, "A"

     [F6] List function, "   "       "    " , to the printer, "AC"
  
     ******************************************************************
   
     The main functions (1 - 9) all begin and end from the menu screen. 
     Read 1.0 thru 9.0 for a description.   (Please note,  the  chapter 
     numbers  correspond with the menu selection to simplify using this 
     documentation).


     l.0 - Adding Records
     --------------------

     To  add new records to your DataFile enter "1" from the main menu.  
     ABC  will  respond  with  "Enter  (yourfield)_____________".   The 
     inverse  video corresponds to the length you defined  earlier  for 
     this field.  Typing past the inverse video will result in a "Entry 
     Error  "  and a low tone Beep.   Type in the information for  each 
     field in order when prompted to do so.   To abort the addition  of 
     records press enter with field #1 Blank.

     When  each record is complete ABC will ask "Are Entries  OK?".  If 
     you respond "Y" you will be given the next record to enter.  a "N" 
     will result in the following....

     ABC  will number the fields,  1 thru the record length.  Enter the 
     number of the field to change.  The cursor will move to the proper 
     field and you may re-enter the correct data.   You may do this any 
     number of times, changing any and all of the fields until correct.























                                  Page 13


     To abort or exit after you have begun elect to change field #1 and 
     replace the current data with a blank.

     After you have completed a session of adding records,  press enter 
     on  field  #1 and ABC will construct an index file  built  on  the 
     first  field  automatically.   You will see the  prompt  "Indexing 
     Files" as this takes place.   When complete ABC will return to the 
     main menu.

     Note  - Any  calculated  fields will be skipped during  the  entry 
             procedure.

     2.0 - Finding Records by Number
     -------------------------------

     ABC-FILE  keeps track of where any given record is in your file by 
     Record  Number.   The  last record entered will  have  the  number 
     corresponding  to the ROF=n shown on the main menu  screen.   This 
     function provides a means to view any record selectively by record 
     number.   This  could  be  handy to look at the  last  record  you 
     entered from a previous session to see where to begin again, etc.

     Press  (RETURN)  or enter "0" to exit the function.   The  present 
     range shown at the top right of the screen details the  acceptable 
     entries.


     No functions other than viewing are accessable from this screen.



     3.0 - Binary Search (Find Records)
     ----------------------------------

     Use  this  function  to find records quickly  (typically  1  - 1.5 
     seconds)  even  in large DataFiles.   The search criteria  may  be 
     compared  to  any field in the file but the field chosen  MUST  BE 
     INDEXED!   ABC  always maintains and keeps current the index built 
     on  field  #1  of  every DataFile,   You may  elect  to  index  on 
     additional fields but this must be done manually after each  entry 
     or  pack of the datafile using the "Sort Records" function (#5).






















                                  Page 14
          

     To "FIND" records enter "3" from the main menu.   ABC will respond 
     with the Index Selection Screen.   Select which field (By  Number) 
     you wish to have your search criteria compared to.  Every field in 
     your DataFile is displayed and numbered for your convenience under 
     the  heading "Indexes Available".   Remember only #1 is maintained 
     automatically,  you  must  sort the file on any others if  it  has 
     changed since the last sort.

     Once  the  index is selected you will go to "Binary  Search  Entry 
     Screen".   A prompt will ask "Enter (yourfield) to Find ?".  Enter 
     either  Full  or Partial search criteria for  ABC  to  locate.  
     (Index  files are built on the first 10 characters of a  field  so 
     anything  past 10 will be ignored).   If the record desired is  in 
     the  DataFile it will be displayed almost immediately,  if not ABC 
     will say "(your entry) not found,    press E to Exit or  Return 
     to Continue".  Pressing return will allow entry for another search 
     ,E will return you to the Main Menu.

     Once  the  desired  record  is found a  number  of  functions  are 
     available.   We will cover A)dvance and B)ackup here,  see 3.n for 
     others.

     To  advance  a position in the Index chosen simply  press  "A", to 
     Backup  press "B".   In both cases ABC will show you your relative 
     position  in  the  index.   A)dvancing or  B)acking  up  past  the 
     beginning  or end of the Index will result in ABC returning to the 
     original Entry Screen.  

     Anytime  you are looking at a given record on the screen it may be 
     deleted,  recalled,  changed,  or written to a disk file.  See the 
     following chapters for details.

     To  end  the find function and return to the main menu enter E  or 
     Press return when asked for search criteria.

     ******************************************************************
     Macros available from find function....
             
                  [F8] Recall the displayed record and backup
                  [F9] Delete the displayed record and advance

     ******************************************************************





















                                  Page 15


     3.1 - Deleting Records
     ----------------------

     To delete records from the datafile "Find" the proper record  (See 
     3.0)  and  with it displayed on the screen simply  press  "D".   A 
     prompt  will  ask if you are sure,  respond "Y" or  "N".   If  you 
     respond  "Y",  ABC will say "Record Deleted" and you will notice a 
     "*" placed at the beginning of the first field.  At this point the 
     record  is not permantly deleted and may be R)ecalled by  the  "R" 
     entry.   (See  3.2)  The "Pack Records" function must be  used  to 
     permantly remove records from the file (See 6.0).

     Until the file is Re-Indexed you may still find the deleted record 
     in the normal fashion.  Once re-indexed you can find all "Deletes" 
     by searching for a "*" in field #1.

     Responding with a "N" will leave the record unchanged.


     3.2 - Recalling Records
     -----------------------

     Records  may  be recalled after deletion by finding (See 3.0)  and 
     simply pressing "R" to recall.  You will notice the deleted marker 
     ("*") will be removed from the first field.

     Remember,  once  a  datafile is Packed deleted  records  are  gone 
     Forever and cannot be recalled!

     ABC will tell you "Record is not deleted!"  If you press "R" on an 
     active record. 


     3.3 - Modifying Existing Records
     --------------------------------

     To  change  the information stored in any record in the  DataFile, 
     find the desired record as in 3.0.   When viewing the  appropriate 
     record type "C" for C)hange.























                                  Page 16



     ABC  will respond by numbering the available fields and  prompting 
     you for a field number to change.   Enter the desired field number 
     (or press enter to abort) and ABC will ask for the new  data.   At 
     the  "Enter  New (yourfield)?" prompt type in the new  information 
     and  press  enter.   ABC error checks the length of the  new  data 
     entered  and  will  respond "TOO LONG!" if  the  field  length  is 
     exceeded.   You  will  then see your "NEW" data in  the  displayed 
     record.

     Please  note;  if you change information in an Indexed  field  you 
     should resort the file from the ""5"" selection to keep the  Index 
     current!


     3.4 - Writing Individual Records to WS/MM File
     ----------------------------------------------

     To output individual records to a file to be used by Wordstar/Mail 
     Merge(TM)  simply  locate  the record as in  3.0.   You  may  page 
     forward  or backward in the DataFile reviewing records at will  (A 
     or B from the Find function). 

     To  write  a  record to the output file just press  "W"  with  the 
     record  displayed.   ABC  will  respond  with  a  Beep  and  print 
     "Done..." on the screen to verify.

     The  file  written to will have the Name of your DataFile with  an 
     extension  of  ".MRG" (I.E.  MAILLIST.MRG).   All  12  fields  are 
     written  to  the  file,  even if you DON'T  HAVE  12  DEFINED.   A 
     carriage  return is inserted after each entry.   In some Mailmerge 
     type programs it may be necessary to include "dummy" varibles  for 
     the  unused fields (If any) written to the file.   Wordstar  works 
     fine  without  the "dummy" varibles,  you will have to  experiment 
     with others to see.

     Fields  are written delimited with (") and (,).   The file written 
     to is appended to(I.E. added to). If a new file is desired it will 
     be necessary to delete the existing (filename.MRG)  file from disk 
     before  entering  ABC-FILE.   This  function  allows  for  ongoing 
     additions  to  a mailmerge file allowing creation of  a  "Preferred 
     Customer" or "Close Friend", etc. file and making additions over a 
     period of time.

     * Wordstar & Mailmerge are registered trade marks of MicroPro Int.



















                                  Page 17


     4.0 - Reports (List Records)
     ----------------------------

     The list function is the most involved and perhaps the hardest  of 
     the  menu  selections to master due to its  complexity.   However, 
     once  mastered  (It's not that hard!)  you can utilize  the  IBM's 
     type ahead capabilities and quickly enter 4 or 5 commands at  once 
     from  the menu and have a report listing to the screen or  printer 
     in  no time at all!   To begin,  lets start slowly and cover  each 
     step in detail.

     First,  select the #4 option from the main menu.  ABC will respond 
     with enter "1" for Sorted, "2" by record number.

     The  "2" is the easy selection so we will cover it  first.   Press 
     "2", the screen will clear and the records in your file will begin 
     to scroll down the screen in the order in which they were  entered 
     (By  record number).   Only the first two fields are displayed  in 
     this version as well as the record number.   You may press Control 
     NumLock  to  stop  the scrolling at anytime and then  (RETURN)  to 
     continue.

     That's  it,  that's all you can do from here!   The  function  was 
     included  only to allow a listing of records by number if the need 
     should arise.

     You  could use this to verify that a record was entered and  where 
     it  is  relative to other enteries,  perhaps to take note  of  its 
     spelling if difficulties were encountered in "Finding".   There is 
     no way to abort the printing of all the records in the file, so if 
     you have a large DataFile be prepared to watch them roll by for  a 
     while!  

     Many  more options are provided from the "1" selection and you will 
     utilize it much more often....




























                                  Page 18


     The "#1" selection will present a number of prompts requiring your 
     input  as to how to format your report.   After pressing "4"  from 
     the main menu and then "1" for sorted,  you will see the following 
     prompt.

     Do You Want Hardcopy? (1,2,3 or 4) Y/N ?

     At this point you have six (6) options on how to proceed.  You may 
     respond  to this prompt with a 1,2,3 or 4,  a "Y" or a "N".   Each 
     selection is covered in detail in the following chapters (4.1 thru 
     4.6) and the generic information on 4.05, please read on.....



     4.05 - More About Report (List Records)
     ---------------------------------------


     For Sorted reports (Selection 4,1 ) from the main menu,  as stated 
     before you have six (6) options, they are....

         1 =  Mailing Labels, 2 part Names
         2 =  Mailing Labels, 1 part Names
         3 =  Out put to WS/MM file
         4 =  Out put to disk file
         N =  Report to the screen
         Y =  Report to the printer

     We  are  going to put the cart before the horse for a  moment  and 
     explain what happens after one of the above selections and then go 
     into detail for each of the above, bear with us....

     After  selecting one of the six options ABC will respond with  the 
     familiar  "Index Selection Screen" to determine how you  want  the 
     report  sorted.   Enter  a  field  number and press [Enter].


     After doing so you will see  "Validating  (yoursortfield)  Index".  
     If  the Index is current you will advance to the next step,  if it 
     is not current, ABC will respond with "Resort File on (yourfield)" 
     and you will be given the opportunity to select another field  for 
     the  index.   (Pressing Return at this point will take you to  the 
     main menu)




















                                  Page 19


     Once  a  current Index is selected (ABC will not let you  print  a 
     report  with a non-current index) you will be asked "List all  the 
     Records  Y/N  ?"  A response of "Y" will advance you to  the  next 
     step, "N" will produce the following prompt.

     "Enter  field to Select on?".   Enter the field in your  file  you 
     wish  the selection to compare to (1 thru NumberOfFields). 

     You will notice the field chosen for the Index will be marked with 
     "Sort  -->"  and the field to select on marked with  "<-- Sel"  to 
     remind you of where you are.

     Once  the selection field is chosen you will be asked to tell  ABC 
     how  to compare the search criteria to the field.   To the  prompt 
     "Compare How A,B,C,D,E,F,?", select a method and enter A - F

         A =  Equal to          (  =  )
         B =  Not Equal to      (  <> )
         C =  Greater than      (  >  )
         D =  Less than         (  <  )
         E =  Keyword
         F =  Not Keyword

     Once  A  - F  is entered ABC will say "Enter Criteria  to  Compare 
     (SelectHow) with (yourfield)?

     Enter  your  selection criteria in response to  this  prompt,  for 
     example...

     If  field  #3  was "City" in a mailing list and you  selected  "A" 
     (Equal  to) you could enter "Chicago" for your selection  criteria 
     and  print  a report of all the enteries in the  mailing  list  in 
     Chicago.   If  you selected "B" for "Compare how?" (Not equal  to) 
     the report would contain entries from everywhere BUT Chicago.  Zip 
     Codes and Customer Number fields would be prime candidates for the 
     "C" and "D" selection methods " > and < " and so on.

     The  keyword  function checks for the occurance of  the  selection 
     criteria  anywhere  in the selection field,  for example,  if  you 
     choose  a keyword search ("E") and entered the selection  criteria 
     of "AS",  a report of all records containing "AS" anywhere in  the 
     selection  field would be printed.   The "Not Keyword" ("F") would 
     do the opposite.




















                                  Page 20


     This can be a very powerful means of selecting records,  give some 
     thought to how best to utilize it.

     Once  all that is behind us,  we next have to tell ABC-FILE how to 
     format  the report.   There are a few options here so lets  review 
     them.

     Manual Entry
     ------------

     You  may enter the fields to be included in the report,  one at  a 
     time  and  in any order.   The fields again are numbered  and  the 
     entry is of the selected field number.  You may print field #12 in 
     position  1  by entering it first,  or field #5 in position  3  or 
     whatever.   As you select a field to include ABC will print on the 
     screen the position in the report it will occur.  For instance, if 
     you  select  field #5 to print in the 1st position  (on  the  very 
     left)  you  will  see  field #5 in caps with a  #1  beside  it  to 
     indicate its position in the report.

     As  you  add  fields  to the report manually a  line  will  appear 
     showing the current report width.   If the report is to be printed 
     to the screen the maximum width is 75 characters, if it's going to 
     the  printer,  the maximum width is 132 characters.   If you  come 
     close  to  the maximum ABC will Beep and flash the  maximum  as  a 
     reminder.

     The default space between report columns is 1.   If you would like 
     the  spacing  changed in your report after entering the left  most 
     column,  tell ABC how many spaces to allow between the column just 
     entered and the next column about to be entered by entering  "Sn", 
     where  "n"  is  the  number of spaces to insert  before  the  next 
     column.   The width status line will change to reflect  the  width 
     including  the  added spaces and MAY BE CHANGED AGAIN  before  the 
     next  field is entered.   This allows you to space a report and if 
     you  see  you  have  added too  many  spaces  between  columns  to 
     accomadate  the  next field,  to RE-ENTER "Sn" with fewer  spaces.  
     You may do this any number of times until the status line reflects 
     the desired number of spaces to start the next field.
























                                  Page 21


     If you exceed the maximum line width allowed ABC will respond with 
     "Too Wide" and force you to start over.

     If  you  have started defining a report and want  to  start  over, 
     enter "99".

     AUTOMATIC
     ---------

     ABC-FILE  will  automatically format your reports  for  you,  with 
     little to no effort on your part.

     When  asked to define the fields in the report simply enter"A" for 
     automatic  and ABC will print the maximum number of fields in  the 
     allowable line width.  They are chosen beginning with #1, then #2,
     etc., until the next field would exceed the maximum line width.

     If a "Summary" only report is desired enter "SUM" when asked for a 
     field to include, then define the fields to summarize or enter "A" 
     for automatic.  This option will not print individual records, but 
     print the totals and averages of the selected records only. 

     If  the  report is to be output to the printer "A" will  output  a 
     maximum  of 75 columns and "AC" [for A)utomatic  C)ompressed] will 
     output a maximum of 132 columns.  (AC has no effect to the screen)

     Some commands differ based on selections from the original "Do you 
     want  Hardcopy  (1,2,3 or 4) Y/N?"  Please see 4.1  thru  4.6  for 
     further details on each selection.


     4.1 - Labels (2 part Names)
     ---------------------------

     Use  this  selection to print mailing labels of  selected  records 
     when  the  first  two fields of your file are for two  part  names 
     (I.E. First, Last or Last, First, etc.).

     ABC will trim the first field to properly space the second  field 
     and print them both on the first line of the label.

     ABC will ask you to specify the number of linefeeds between labels
     . You may respond with <Enter> for the default of three, or  enter
     a number of your choosing.



















                                  Page 22


     You  will not be asked to define the fields to include,  the first 
     six fields are includes automatically and should be....

         1 -  First or Last
         2 -  First or Last
         3 -  Address
         4 -  City
         5 -  State
         6 -  Zip

     (All functions other than defining fields are active)


     4.2 - Labels (One part Name)
     ----------------------------

     Use  this  selection to print mailing labels of  selected  records 
     when the first field contains the complete name. 
     
     This  selection would normally be used for customer mailing  lists 
     with the DataFile defined as ...

         1 -  Customer
         2 -  Address
         3 -  City
         4 -  State
         5 -  Zip
         6 -  Attn.

       (See 4.1 for other details)


     4.3 - To WS/MM File
     -------------------

     This  selection will output all 12 fields of your file to  a  disk 
     file for use by a wordstar/mailmerge type program.  This also  may 
     prove  handy  for  output of selected records for use  by  another 
     program that can read the fields delimited with (",).

     Field  selection and sorting are available as in any report format.  
     (You will not be asked to define the fields to output)





















                                  Page 23


     ABC will ask you to supply a File Name to output records to. Use a 
     Name  that  will help you identify the contents later  on,  as  in 
     Chicago.Cst, or Pastdue.Act , etc.

     A  variety  of  information  can  be  automatically  inserted   in 
     mailmerge type letters using this function.

     As mentioned earlier,  since all 12 fields are output to the file, 
     some  mailmerge  type  programs may require you  to  identify  the 
     unused fields (If any) with dummy varibles (See 3.4).


     4.4 - Outputting reports to Disk File
     -------------------------------------

     This  selection allows you to output any or all of the  fields  in 
     your  records to a disk file.   All commands are available as  are 
     used in any report,  including the A)utomatic function for "fields 
     to include".   

     This  is  expecially  handy  for  outputting  selected  fields  of 
     selected  records to other programs or for importing into  another 
     ABC DataFile.

     If   you  wanted  to  create  another  DataFile  of  only  certain 
     customers,  you could output only the fields selected for  records 
     meeting  a  certain  criteria (I.E. City = Chicago) and  then  use 
     import  (Selection  #7 from the main menu) to copy  them  into  an 
     existing or new DataFile.  

     If  creating  a new datafile from existing records,fields  can  be 
     added  between existing fields by using the "Sn" (Spaces)  command 
     after  a  field already entered.  In other words,  if copying  out 
     fields  1  thru 8,  with a desire for a new field between 4  &  5, 
     after entering 4,  enter "S10", and then enter 5 thru 8. This will 
     result in a file containing NINE fields,  with #5 being blank  and 
     containing 10 spaces.  Any number of fields can be added, but only 
     one  between  any  two existing fields,  and none after  the  last 
     field.  

     Fields  output  are delimited with a (C/R),  and are  in  standard 
     ASCII form. 





















                                  Page 24


     4.5 - Reports to the Screen
     ---------------------------

     Enter "N" in response to "Do you want Hardcopy?"

     All report functions are active,  selected records will be  output 
     to the screen for viewing.

     Display format is 19 records per page with titles across the top.

     Pressing  return at the end of a page will cause the next page  to 
     be displayed.  F10 may be pressed at the end of any page to return 
     to the menu.

     A count of the records displayed will be printed at the end of the 
     report.


     4.6 - Reports to the Printer
     ----------------------------

     Enter "Y" in response to "Do you want Hardcopy?"

     After  entering selection methods and sort field,  selected fields 
     will  be  output to the printer.   If the line  width  exceeds  80 
     characters, compressed print will be selected automatically.

     All   report   functions   are  available   including   A)utomatic  
     field  selection (75 Char) and also A)utomatic  C)ompressed  field 
     selection (AC) for 132 Char reports.



     5.0 - Sorting Records
     --------------------- 

     This function provides for Sorting or Indexing the DataFile on any 
     field.   Sorts can be made in Ascending or Desending order, as you 
     prefer.  After a sort is made, the resultant index file is written 
     to  disk  with the name (DataFile) + (Index field Number) +  .NDX.  
     You  may have as many different index files as you have fields  in 
     your  file.   Index  files  are stored on the same  drive  as  you 
     designated earlier for the DataFile.




















                                  Page 25


     Remember,  the index on the first field  of your file is automatic 
     and  kept  current  by ABC after each entry  or  deletion  to  the 
     DataFile.  You may have as many other index files as you wish, but 
     they must be resorted with this function after changes are made to 
     the DataFile.  

     A  prompt  will  advise  you  of the status  of  the  sort  as  it 
     progresses  and when complete will allow you to go directly to the 
     report function if you desire.


     6.0 - Packing Records
     ---------------------

     This  selection  allows for permanent removal of  deleted  records 
     from  the DataFile.   You will be advised of this before it  takes 
     place and you must respond with "Y" to proceed.

     If  you  elect  to proceed you will see the progress of  the  pack 
     function as it reads and rewrites non-deleted records back to  the 
     file.   Deleted  records will be removed.   Each time one is found 
     for removal you will hear a high pitch Beep and the removed record 
     will  be  printed to the screen.  The total  removed,  packed  and 
     deleted will be reported during the pack operation.

     Upon completion ABC will re-index the DataFile on the first  field 
     and wait for a key press to return to the main menu.

     Remember,  once  deleted records are packed there is no chance  of 
     recall!!

     If  no  deleted records are found ABC will read and  re-write  all 
     records to the file and return to the menu, without re-indexing or 
     pausing.





























                                  Page 26


     7.0 - Importing files from Other Programs & ABC
     -----------------------------------------------

     Use  the  Import  function as an alternate means of  entering  new 
     records  into a DataFile.   If the DataFile you are  appending  to 
     already contains records,  new records added by this function will 
     be  appended to the existing file exactly as if you had typed them 
     in the normal fashion.

     If  the  DataFile to append to did not exist prior to  the  import 
     function,  YOU MUST DEFINE IT PRIOR TO THE IMPORT USING THE CHANGE 
     (#8) FILES COMMAND.

     Basically,  IMPORT reads in ASCII Files delimited with (C/R)s  and 
     inserts this data into your file.   The file appended from is read 
     sequentially  so  special  care  must be  taken  in  defining  the 
     DataFile  to contain the same number of fields as are  represented 
     in  the "FROM" file.   (I.E.  The file appended from will  contain 
     information  written in a repetitive manner). 

     If  it  contains a mailing list the information will repeat  every 
     (X) times, for instance Name, Address, City, State, Name, Address, 
     City,  State and so on.   In this case it would be imperative that 
     the  DataFile chosen to "Append to" be made up of four (4)  fields 
     so that the data "read" was placed in the appropriate field.    If 
     it  mistakenly contained 5 fields the first record  written  would 
     contain Name, Address, City, State and Name again!  Now we are out 
     of sequence and successive records would contain garbage.

     Import  can also be used to create new DataFiles from  information 
     contained in existing files.   Selected information can be written 
     to  a  tempory file using the report (4,1,4) function (See  4.0  & 
     4.4).   Then  create  a new DataFile using the Change  Files  (#8) 
     selection  from  the  menu and then append the data "IN" with  the 
     import function.  




























                                  Page 27


     Here are the steps again....

         #1 -  Select List, Sorted, Output to Disk File (4,1,4)

         #2 -  Select Index,  All or part of the Records and  selection 
               criteria.

         #3 -  Identify the fields to be written to the TempFile

         #4  -  Define  the new DataFile to ABC (8) with one field  for 
                each field output from the original in Step #3

         #5  -  Select  Import Files (7) and when prompted for  a  file 
                name to append from enter <TempFile>.

     NOTE * Remember,  the list function allows any or all fields to be        
     written  in  any  order.   Keeping  this in mind  it  is  easy  to        
     reconstruct a DataFile, moving fields, eliminating some, or adding 
     fields,  etc.   Also,  the selection functions provide for writing 
     only records meeting certain criteria.   These features combine to 
     produce  the ability to reconstruct your DataFile  in  practically 
     any form, containing only selected records as you desire.

     Import does not create index files automatically, when complete it 
     will  be necessary to resort the file to create/update any indexes 
     required.  


     ******************************************************************
     [NOTE]  If IMPORTING files from other programs that are  delimited 
     with  comma's  (,) or double quotes (") or both (",)  process  the 
     file  first  with  the  program  ABCONVRT.BAS,   included  on  the 
     distribution disk.  It will read in the foreign data and write  it 
     out  to a new file with the fields delimited in ABC fashion.  This 
     program  is run from basica and may be started from DOS  with  the 
     BASICA  ABCONVRT  command.(Of  course,  a copy of  basic  must  be 
     present  on  the  default  drive and a  drive  identifier  may  be 
     necessary for ABCONVRT).Files written will have a ".IMP" extension
     and may be "Imported" as described above.
     ******************************************************************























                                  Page 28


     7.1 - Using DBII-ABC Import
     ---------------------------

     This is an external function of the ABC system (Not available from 
     the  menu!).   It  requires the DBII-ABC.EXE file  and  of  course 
     Ashton Tate's dBase II to output from.

     This  function  provides  a means to transport existing  dBase  II 
     files  to  ABC-FILE.   When  using  this  function  DataFiles  are 
     "Created",   not   appended   to.    (To   append   the   standard 
     "Import"function should be selected)

     From dBase II "Use" the desired file.  Issue the following command 
     to instruct dBase to write the desired output to a TEMPFILE.

     * COPY [FIELDS FIELD1, FIELD2, etc.] TO TEMPFILE SDF

     This  will  cause dBase II to output the data in  what  they  call 
     System  Data  Format (ASCII files W/O delimiters with a C/R  after 
     each record).

     Before  exiting dBase take note of the order of  the  fields,  the 
     length  of each field and the total length of each record (The sum 
     of the field length).

     After doing so,  exit dBase and copy TEMPFILE to the ABC-FILE disk 
     containing  DBII-ABC.EXE.   Now,  from DOS type  DBII-ABC.   After 
     loading,  the program will prompt you for the name of the file  to 
     append from.  Enter TEMPFILE.  Next you will be asked for the name 
     of  the  file to write to.   Enter your New  DataFile  name.   Now 
     DBII-ABC  will ask for the length of each record,   Enter the "Sum 
     of the field lengths" from your notes.

     Now DBII-ABC will proceed to read the data from TEMPFILE and write 
     it  out in the exact format used by ABC-FILE for  DataFiles.   The 
     operation is fairly fast so it will not take long.  After creating 
     the new ".DAT" file,  it will also create the reqired ".NUM" file, 
     advise you of what is being done, and then load ABC-FILE for you.

























                                  Page 29


     Upon  entering ABC,  proceed to the second screen (after  sign-on) 
     and Enter your "NEWFILE" Name when asked.   Proceed to DEFINE  the 
     field  names  and lengths to ABC.   For proper  operation,  IT  IS 
     IMPERITIVE  THAT  THE FIELDS BE IN THE SAME ORDER AS THEY WERE  IN 
     dBASE II'S COPY COMMAND, Also the FIELD LENGTH MUST BE THE SAME. 

     That  is all there is to it,  now create any required index  files 
     with "Sort Records" (5) and begin using your new file.   You  will 
     find  that  ABC's  Sort  is much faster than  the  dBASE  II  sort 
     function.  

     * dBASE II is a Registered Trademark of Ashton-Tate.


     8.0 - Changing Files
     --------------------

     Use  this function when you want to change to a different DataFile 
     or define a new DataFile.(If you need to list the predefined files 
     to refresh your memory,  type a "?" for a file name)   If the file 
     name has already been defined, ABC will list the field definitions 
     for you information.   If not, you will be asked to define the new 
     file.  (See 0.4)

     9.0 - MISC.
     -----------

     QUITING
     ------- 

     The  (9)  selection  from  the menu will allow you  to  exit  ABC, 
     returning  to  DOS.  (An alternate means of exiting  is  to  press 
     return when prompted for a DataFile Name on screen 2)






























                                  Page 30



     SAMPLE PROGRAMS
     ---------------

     The following sample programs are included on your disk.

             SAMPLE.DAT                NUMSAM.DAT
             SAMPLE.CFG                NUMSAM.CFG
             SAMPLE.NUM                NUMSAM.NUM
             SAMPLE1.NDX               NUMSAM1.NDX


     ABC-FILE - How, how much, and where ?
     -------------------------------------

     ABC-FILE  is  made  available  as  User  Supported  Software,   We 
     encourage  you to copy it and share it with your friends.  If  you 
     find the program to be of value, a contribution of $30.00 would be 
     appreciated. Contributions should be sent to....

                        DND Enterprises
                        6215 Quiet Water Pl.
                        Charlotte, N.C. 28214
                        704-393-0489

```
{% endraw %}

## ABCONVRT.BAS

{% raw %}
```bas
10 '****************************************************************************
20 '********   Copywrite 1984  DND Enterprises  All rights reserved     ********
30 '********  Program to convert files delimited with ", to ABC-FILE    ********
40 '****************************************************************************
50 ON ERROR GOTO 130:KEY OFF:CLS:FLDNUM=0
60 LOCATE 5,5:INPUT "ENTER FILENAME TO IMPORT TO ABC-FILE:";OLDFILE$:IF LEN(OLDFILE$)>12 THEN BEEP:GOTO 60:ELSE IF OLDFILE$="" THEN CLOSE:SYSTEM
70 OPEN OLDFILE$ FOR INPUT AS #1:GOSUB 140
80 LOCATE 7,5:INPUT "ENTER ABC-FILE TO CREATE (NEW FILE):";NEWFILE$:IF INSTR(NEWFILE$,".")>0 OR LEN(NEWFILE$)>8 THEN LOCATE 25,5:BEEP:PRINT "MAX LEN=8, NO EXTENSION!";:GOTO 80
90 GOSUB 140:OPEN NEWFILE$+".IMP" FOR OUTPUT AS #2:WHILE NOT EOF(1):FLDNUM=FLDNUM+1:INPUT #1,A$:LOCATE 10,5:PRINT "WORKING,FIELD #"FLDNUM;:PRINT #2,A$;CHR$(13);:WEND:CLOSE
100 PRINT:PRINT:PRINT TAB(5) "Your  file has been written to disk in ABC-FILE  format ,":PRINT:PRINT TAB(5) "PRESS [RETURN]"
110 NXT$=INKEY$:IF NXT$=CHR$(13) THEN 120 ELSE GOTO 110
120 CLS:SYSTEM
130 IF ERR=53 THEN LOCATE 25,5:BEEP:PRINT "FILE NOT FOUND";:RESUME 60:ELSE LOCATE 25,5:BEEP:PRINT "SORRY, UNDEFINEABLE ERROR, RE-TRY";:SYSTEM
140 LOCATE 25,5:PRINT SPACE$(40);:RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #119, version v1_1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ABCFILE .DOC         CRC = 80 4D

--> FILE:  ABCFILE .EXE         CRC = F3 23

--> FILE:  ABCFILE .HLP         CRC = C0 6D

--> FILE:  ABCONVRT.BAS         CRC = 9C 1E

--> FILE:  AUTOEXEC.BAT         CRC = 00 00

--> FILE:  DBII-ABC.EXE         CRC = D0 46

--> FILE:  NUMSAM  .CFG         CRC = D0 A4

--> FILE:  NUMSAM  .DAT         CRC = 4B EA

--> FILE:  NUMSAM  .NUM         CRC = 22 C4

--> FILE:  NUMSAM1 .NDX         CRC = D4 EC

--> FILE:  README  .1ST         CRC = B6 00

--> FILE:  SAMPLE  .CFG         CRC = A7 C9

--> FILE:  SAMPLE  .DAT         CRC = EB 27

--> FILE:  SAMPLE  .NUM         CRC = 90 F2

--> FILE:  SAMPLE1 .NDX         CRC = EC 2B

--> FILE:  XXX     .            CRC = E4 AF

 ---------------------> SUM OF CRCS = 5F 3B

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0119

     Volume in drive A has no label
     Directory of A:\

    ABCFILE  DOC     60288   1-11-80  11:47p
    ABCFILE  EXE     88064   1-11-80  12:48p
    ABCFILE  HLP     14276   1-11-80   4:37p
    ABCONVRT BAS      1062   1-11-80   4:37p
    AUTOEXEC BAT        14   1-11-80  12:00a
    DBII-ABC EXE     23168   1-01-80   4:47p
    NUMSAM   CFG       128   1-11-80   5:10p
    NUMSAM   DAT       896   1-11-80  11:38p
    NUMSAM   NUM       128   1-11-80   5:44p
    NUMSAM1  NDX       256   1-11-80   5:44p
    README   1ST       647   1-11-80   4:57p
    SAMPLE   CFG       137   1-11-80   6:05p
    SAMPLE   DAT      7040   1-11-80   6:04p
    SAMPLE   NUM       128   1-11-80   6:04p
    SAMPLE1  NDX       640   1-11-80   6:05p
    XXX                768   5-02-84  10:28p
    CRC      TXT      1313  11-09-84   2:47p
    CRCK4    COM      1536  10-21-82   7:54p
           18 file(s)     200489 bytes
                          112640 bytes free
