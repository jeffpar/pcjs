---
layout: page
title: "PC-SIG Diskette Library (Disk #1748)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1748/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1748"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VECHILE EXPENSES AND MAINTENANCE"

    VEHICLE EXPENSES provides a means of writing, storing and maintaining
    files of four categories: fuel, scheduled, emergency, and other
    expenses related to the operation and maintenance of motor vehicles or
    other equipment.
    
    Using VEHICLE EXPENSES is quite easy. The database is created by simply
    assigning a file name and adding the appropriate information. While the
    system is set to handle many different vehicles, it is best suited for
    the individual or small business with only a few cars.
    
    VEHICLE MAINTENANCE provides a typewritten check-off sheet listing items
    to be serviced at pre-defined intervals. The check-off sheet may be
    used as a "memory jogger" to prevent overlooking items that should be
    maintained, or the sheet may be presented to a service agency in order
    to indicate the work you would like them to accomplish.
    
    The data base is created by inputting up to five (5) maintenance
    intervals; i.e., 5000, 10000, 15000, 30000, and 60000 "miles" for
    vehicles, or you may use "hours" as the maintenance period criteria for
    items such as generators, snowmobiles, air compressors, etc. The
    maintenance period criteria is followed by a description of the
    maintenance items you would like serviced at each of the specified
    intervals; i.e., change oil, replace oil filter, replace air filter,
    check brake pads, etc. Any of the interval item descriptions may be
    added to, deleted from, or edited as required without leaving the
    program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1748.TXT

{% raw %}
```
Disk No: 1748                                                           
Disk Title: VEH Expenses/Maint                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: VEH Expenses/Maint                                       
Author Version: 4.2                                                     
Author Registration: $5.00 individual, $20.00 commercial.               
Special Requirements: None.                                             
                                                                        
VEHICLE EXPENSES provides a means of writing, storing and maintaining   
files of four categories:  fuel, scheduled, emergency and other         
expenses, related to the operation and maintenance of motor vehicles or 
other equipment.                                                        
                                                                        
Using VEHICLE EXPENSES is quite easy.  The data base is created by      
simply assigning a file name and adding the appropriate information.    
While the system is set to handle many different vehicles, it is best   
suited for the individual or small business with only a few cars.       
                                                                        
VEHICLE MAINTENANCE provides a type written check off sheet listing     
items to be serviced at pre-defined intervals.  The check off sheet may 
be used as a "memory jogger" to prevent over looking items that should  
be maintained, or the sheet may be presented to a service agency in     
order to indicate the work you would like them to accomplished.         
                                                                        
                                                                        
The data base is created by inputting up to five (5) maintenance        
intervals i.e., 5000, 10000, 15000, 30000, and 60000 "miles" for        
vehicles or you may use "hours" as the maintenance period criteria for  
items such as generators, snomobiles, air compressors, etc.  The        
maintenance period criteria is followed by a description of the         
maintenance items you would like serviced at each of the specified      
intervals i.e., change oil, replace oil filter, replace air filter,     
check brake pads, etc.  Any of the interval item descriptions may be    
added to, deleted from, or edited as required without leaving the       
program.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VEHEXP31.TXT

{% raw %}
```
























                      ************************************
                      *                                  *
                      *              VEHICLE             *
                      *                                  * 
                      *              EXPENSES            *
                      *                                  *
                      *            Version 3.1           *
                      *                                  * 
                      ************************************
















                                  Gary LaRonge
                            3023 Wilderness Loop S.E.
                              Olympia, Washington
                                     98501





                               (C) Copyright 1988










                                VEHICLE EXPENSES
                                  Version 3.1


      DESCRIPTION:

          VEHICLE EXPENSES provides a means of writing, storing and 
      maintaining files of four categories, fuel, scheduled, emergency and 
      other expenses, related to the operation and maintenance of motor 
      vehicles or other equipment.

          Using VEHICLE EXPENSES is quite easy. The data base is created by 
      simply assigning a file name and adding the appropriate information.

          After the file has been created, and the appropriate data has 
      been entered, save the file using a unique name that in some way 
      identifies the machinery to which it pertains. Some names that you 
      might consider are vehicle type (MUSTANG, PICKUP, BIGTRUCK, etc.) or 
      license number (DAT111, FGH089, etc.). The method you choose is not 
      important as long as it is meaningful to you. The file may now be 
      added to, deleted from, edited, printed to screen or printed to 
      printer as your needs dictate.


          INCLUDED FILES:

                 VEHEXP31.TXT-  This documentation.
                 VEHEXP31.EXE-  The main program.
                 SAMPLE.EXP  -  A sample vehicle expense file. This file 
                                may be used to practice editing, printing, 
                                etc. until you feel comfortable enough to 
                                create your permanent files.
                 HASERROR.EXP-  This expense file has an out of sequence 
                                entry in it. Select "print file to screen" 
                                to see the results.
                 EXPINSTL.BAT-  A batch file to assist installing VEHICLE 
                                EXPENSES 3.1 on a hard disk.
                 TYPEDOC.BAT -  A batch file to automate document printing.

          NOTE- DOS Version 2.0 + is required for proper operation of this 
                program.

      What's NEW in Version 3.0 -

      1-  Now writes files using different extensions than earlier 
          versions.
          <filename>.FUE = Fuel expenses
          <filename>.SM  = Scheduled maintenance expenses
          <filename>.EM  = Emergency expenses
          <filename>.OTH = Other expenses
          This was necessary to gain the added record capacity.
      2-  Handles up to 157 records of each category. It is suggested that 
          new files be started annually and retain a separate disk of the 
          data entered for the previous year.

                               -Version 3.1-
          Changes in user input fields
          Change of Address
                                      -1-







      NOTE- If your computer is equipped with a color video board and a 
          mono monitor, it will be necessary to utilize the configuration 
          file to advise the program of the mono monitor.

      The Version 3.0 file structure is not compatible with the structure 
      of earlier versions. The differences between the two file structures 
      is so great that it is not practical to write a conversion program, 
      so it will be necessary to start new expense files.

      LETS GET STARTED:

          To install VEHICLE EXPENSES on a hard disk, place the floppy disk 
      containing VEHICLE EXPENSES 3.1 and the files previously mentioned, 
      in drive A: and type EXPINSTL <enter>. A directory named C:\EXPNS 
      will be created on the hard disk and the files on the floppy disk in 
      drive A: will be copied to the new directory. When the file transfer 
      has been completed, type C: <enter> to access the hard disk, then 
      type CD\EXPNS to change directory to the new maintenance directory. 

          Version 3.1 supports a configuration file that is named 
      VEHEXP30.CNF. When the program is invoked it checks for the presence 
      of VEHEXP30.CNF. If the file is found, the data contained becomes  
      values which determines, the name in line one of the opening screen, 
      monitor type definition,  and the I.D. of the disk drive/sub-
      directory containing the expense files.
          

        To invoke VEHICLE EXPENSES, Type VEHEXP31 <enter>.

      An opening screen will appear with the prompt "Press <ENTER> to 
      continue" displayed at the bottom of the screen. At this point, if 
      you wish to create a configuration file, hold down the control key 
      and press F1. Follow the prompts to complete the three required 
      entries.
                                      -or-
      If you wish to install password protection, hold down the control, 
      shift and alternate keys and press F10. Enter the desired password 
      and be certain that it is not forgotten or you are in serious 
      trouble. Normally, use of password access will not be desired or 
      required.

      Press <ENTER> to continue and when the opening screen clears you will 
      see the main menu which displays the following choices;


                 1- SELECT expense file.
                 2- PRINT expense file.
                 3- ADD expense records.
                 4- EDIT expense records.
                 5- DELETE expense FILES.
                 6- EXIT to DOS







                                      -2-







          Let's explore the options-

          "SELECT expense file" is normally going to be your first choice 
      after the file has been created. When selected, you will need to 
      specify the type of file to select as fuel, scheduled, emergency, or 
      other, then all expense files are sorted and displayed with a 
      numerical reference. Simply enter the number assigned to the file of 
      your choice and that file will be opened and prepared for processing.
          Up to 10 files will read into the directory for selection. If you 
      require maintaining data for more than 10 vehicles or pieces of 
      equipment, ask about our Commercial version. It is also very 
      inexpensive and offers nice features and handles 200 vehicles.
          If you wish to create a new file, press <ESC> instead of entering 
      a file number.


          "PRINT maintenance due" 
      When selected, you will need to choose one of the four available 
      categories, fuel expenses, scheduled expenses,emergency expenses or 
      other expenses. A print sub-menu offers the choices of "Print to 
      screen" or  "Print to printer", you may then indicate your choice of 
      printing "all" records or a "single" record of the selected category. 
      If "print to printer" was your choice, you will be given the 
      opportunity to enter up to a 50 character title header for the 
      printed sheet. The print routine uses no special character codes so 
      it should function correctly with most printers.


          "ADD expense records" 
      As additional expenses are encountered, they may be entered into the 
      main file with this option. You will be asked to enter the date, 
      mileage, and cost of the expenditure and if the selected category is 
      fuel, you will be asked to enter the amount of fuel purchased. Two 60 
      character comment lines have been provided in each entry to make 
      appropriate notes regarding that entry.


          "EDIT expense records"
      After selecting the desired category, you may opt to edit a record by 
      browsing through all records to edit as necessary or you may choose a 
      record by record number. When the appropriate record has been 
      displayed, you simply enter the number of the line to edit and make 
      the necessary corrections. Returning to the expense menu will cause 
      the file to updated automatically.

          
          "DELETE expense files" should be used with caution. DO NOT 
      confuse this option with an editing function. This selection ERASES 
      THE FILE OF CHOICE FROM THE COMPUTER DISK !!!. To use this option, 
      enter the number of the file to be deleted as shown on the directory 
      of expense files. You will then be given an opportunity to abort the 
      operation if you choose to do so.

          "EXIT to DOS" is the end of biz!. 




                                      -3-







      This software is provided "as is" and offers no warranty, express or 
      implied. The author accepts no liability for this software use or 
      misuse, or any consequential, special, or exemplary damages 
      attributed to it's use.





                                -A CLOSING NOTE-

          In most situations, pressing <esc> will get you out of a place in 
      which you don't wish to be.



          My thoughts on contributions for shareware. Pretty simple, If you 
      decide to use this software and wish to contribute the suggested 
      value I will be forever grateful, If you feel you can't afford the 
      suggested amount, contribute what you think will better suit your 
      budget. If you want to use the software and contribute nothing, I 
      guess you will probably do just that. The down side of using 
      shareware and failing to contribute for its use is becoming more and 
      more evident. A few years ago, it was not difficult to find full 
      featured software readily available but now, thanks to those who 
      don't wish to support a fine system, we are seeing more and more 
      "teaseware", that is software that has been released without being 
      fully implemented. One of the beauties of the shareware system, 
      besides extremely low cost, is the opportunity to test new software 
      and be sure it suits ones needs before spending a couple of dollars 
      and with "teaseware" that benefit is being restricted. Let's not 
      destroy the system altogether. The thought of being restricted to 
      purchasing only commercial software is not a pretty one.

























                                      -4-








      Please mail to:

          Gary LaRonge
          3023 Wilderness Loop S.E.
          Olympia, Washington  98501


      Please add my name to the list of registered users of-

          VEHEXP31            (Individual use - $ 5.00)
                              (Commercial use - $20.00)

          NOTE- Commercial registration includes the next release on disk.           


          BUSINESS NAME- __________________________________

          DEPT- ___________________________________________

          NAME- ___________________________________________

          ADDRESS- ________________________________________

          CITY, STATE- ____________________________________

          ZIP CODE- _______________________________________

                                       
                          Please accept my sincere thanks,

                                               Gary      
                                































```
{% endraw %}

## VEHMTC42.TXT

{% raw %}
```
























                      ************************************
                      *                                  *
                      *              VEHICLE             *
                      *                                  * 
                      *            MAINTENANCE           *
                      *                                  *
                      *            Version 4.2           *
                      *                                  * 
                      ************************************
















                                  Gary LaRonge
                           3023 Wilderness  Loop S.E.
                              Olympia, Washington
                                     98501






                               (C) Copyright 1988









                              VEHICLE MAINTENANCE
                                  Version 4.2


      DESCRIPTION:

          VEHICLE MAINTENANCE provides a type written check off sheet 
      listing items to be serviced at pre-defined intervals. The check off 
      sheet may be used as a "memory jogger" to prevent over looking items 
      that should be maintained or the sheet may be presented to a service 
      agency and used as an indication of the work you would like 
      accomplished by the agency.

          Using VEHICLE MAINTENANCE is quite easy. The data base is created 
      by inputting up to five (5) maintenance intervals i.e., 5000, 10000, 
      15000, 30000, and 60000 "miles" for vehicles or you may use "hours" 
      as the maintenance period criteria for items such as generators, sno-
      mobiles, air compressors, etc. The maintenance period criteria is 
      followed by a description of the maintenance items you would like 
      serviced at each of the specified intervals i.e., change oil, replace 
      oil filter, replace air filter, check brake pads, etc. Any of the 
      interval item descriptions may be added to, deleted from, or edited 
      as required without leaving the program.

          After the file has been created, and the appropriate data has 
      been entered, save the file using a unique name that in some way 
      identifies the machinery to which it pertains. Some names that you 
      might consider are vehicle type (MUSTANG, PICKUP, BIGTRUCK, SNOMOBIL, 
      AIRCOMP etc.) or license number (DAT111, FGH089, etc.). The method 
      you choose is not important as long as it is meaningful to you.

          The VEHICLE MAINTENANCE print option- Enter the current mileage 
      or hours and maintenance due or maintenance overdue will be 
      displayed.  At this point, a sheet of items due may be printed. 
      That's all there is to it!


          INCLUDED FILES:

                 VEHMTC42.TXT-  This documentation.
                 VEHMTC42.EXE-  The main program.
                 MTCFIX.EXE  -  A program to convert [.MTC] files created 
                                by earlier versions of Vehicle Maintenance 
                                to the version 4.2 format.
                 SAMPLE.MTC  -  A sample vehicle maintenance file. This 
                                file may be used to practice editing, 
                                printing, etc. until you feel comfortable 
                                enough to create your permanent files.
                 MTCINSTL.BAT-  A batch file to assist getting started 
                                using VEHICLE MAINTENANCE on a hard disk.
                 TYPEDOC.BAT -  A batch file to automate document printing.
       
          NOTE- DOS Version 2.0 + is required.





                                      -1-






      New in Version 4.0-
          Sorted directory.
          Configuration file written from main program.
          "Write over existing file" protection.
          Password protection option.
          Automatically determines color or mono video adapter.
               NOTE- If you are using a color video adapter and a 
                     monochrome monitor, it will be necessary to use the 
                     configuration option for the program to operate 
                     correctly.
          Menu options and files selectable by number.
          Monitors disk free space. <10k free is reported.
          Supports Path and drive specifications.
          Improved editing and screen displays.
          loads faster.
          Runs faster.
                               - Version 4.1-
               A few bug fixes.    
                               - Version 4.2-
               Change of address
     
      LETS GET STARTED:

          If you have previously been using VEHICLE MAINTENANCE, it will be 
      necessary to convert your existing data files using MTCFIX.EXE. If 
      you are a new user of VEHICLE MAINTENANCE just skip this section.
          To convert your files type MTCFIX <enter> and follow the prompts. 
      MTCFIX will display all the information and instructions required. If 
      data files written with an earlier version of VEHICLE MAINTENANCE are 
      executed from VEHICLE MAINTENANCE version 4.2 the results will be 
      undesirable.
          In the event an MTCFIX conversion fails, it will be necessary to 
      start new files using VEHMTC42. You might try running it twice.

      *******************************************************************
          NOTE- MAKE BACK UP COPIES OF YOUR DATA FILES BEFORE CONVERSION.
      *******************************************************************

          To install VEHICLE MAINTENANCE on a hard disk, place the floppy 
      disk containing VEHICLE MAINTENANCE 4.2 and the files previously 
      mentioned in drive A: and type MTCINSTL <enter>. A directory named 
      C:\MTC will be created on the hard disk and the files on the floppy 
      disk in drive A: will be copied to the new directory. When the file 
      transfer has been completed, type C: <enter> to access the hard disk, 
      then type CD\MTC to change directory to the new maintenance 
      directory. 

          Version 4.2 supports a configuration file that is named 
      VEHMTC40.CNF. If you are using a color monitor and the [.MTC] files 
      are located in the same directory or are on the same diskette as 
      VEHMTC41.EXE it will not be necessary a configuration file. If you 
      need to configure the program, it may be done by holding down ctrl 
      and pressing F1 when the "Press <ENTER> to continue" prompt is 
      displayed below the opening screen. The configure option allows you 
      to define up to 19 characters to be displayed as line 1 of the 
      opening screen, to define whether or not you are using a color or 
      monchrome monitor, and to define the drive or path to find the [.MTC] 
      files. 


                                      -2-







          Version 4.2 also supports password protection. To install a 
      password, hold down ctrl,shift,alt and press F10 when the "Press 
      <ENTER> to continue" prompt is displayed below the opening screen.
      Once a password is installed, it is necessary that it be correctly 
      entered to access the program. In most cases, the use of a password 
      will not be necessary. If you opt to use password access, DO NOT 
      FORGET YOUR PASSWORD or you are in serious trouble.
        
        To execute VEHICLE MAINTENANCE, Type VEHMTC42 <enter>. When the 
      opening screen is cleared, you will see the main menu which displays 
      the following choices;

                 1- SELECT maintenance file
                 2- PRINT maintenance due
                 3- FILE maintenance
                 4- DELETE maintenance files
                 5- CREATE maintenance files
                 6- EXIT to DOS

          Let's explore the options-

          "SELECT maintenance file" is normally going to be your first 
      selection after creating new files. Define the type of file you wish 
      to open. The choices are "hours" or "miles". Enter the number of the  
      the file of choice. When the file choice is completed the file will 
      be read and the program returns to the main menu awaiting another 
      selection.

          "PRINT maintenance due" 
      When selected, you will need to enter the current mileage or hours of 
      the selected equipment. The input range is limited to 1 - 999,999. 
      The input value is processed to determine the appropriate maintenance 
      interval and notification of maintenance status is returned.  
          A print menu provides the choices of "Print Mtce Due", "Return to 
      Menu", or "Exit to DOS". The print selection requires the date you 
      would like printed on the hard copy. The date may be entered manually 
      or automatically. If the automatic selection is chosen, the current 
      date in the computer time clock is used. Once the date is entered, a 
      title containing up to 45 characters may be input after which a 
      printed sheet containing the title, date, current mileage and 
      maintenance due for the specified maintenance interval, as well as 
      the mileage or hours of the next scheduled maintenance period is 
      generated. Choosing "Return to Menu" simply returns to the main menu 
      and "Exit to DOS" just exactly that.

          "FILE maintenance" provides access to the file editor. Depending 
      upon your typing skills, you may spend a lot of time using this 
      feature. It's probably a good idea to become comfortable with the 
      file maintenance options. As with the rest of the program, the 
      editing module was written with ease of use as a priority so I don't 
      think you will have any trouble here. It begins with a menu offering 
      the following options;

                 Change line
                 Add line
                 Insert line
                 Delete line
                 Return to Main Menu

                                      -3-






          "Change line" allows access to a file to correct typos, add 
      missing words or generally restructure the previously entered text. 
      The current maintenance items are displayed on the screen preceded by 
      line numbers. Simply enter the line number that contains the text to 
      be revised. When the line number has been entered, the selected text 
      will begin to flash, verifying your choice. You may now enter the 
      revised text at the entry line indicated at the bottom of the screen.
      Completion of the revision brings forth a "more?" prompt. If your 
      response is yes, you reenter the editor in the current maintenance 
      interval. If your response is no, the file is automatically saved and 
      you are returned to the menu. Please note that if a change is entered 
      and "Y" entered at the more? prompt and the edit option is exited the 
      file changes will not be saved. A save does not occur until the more? 
      prompt receives an "N".
         The "change line" selection may also be used to view the 
      maintenance items listed for a specified maintenance interval. To 
      exit "change line" without making corrections, press <esc>.
         
          "Add line" permits an extra line to be added to the bottom of the  
      current maintenance interval items. If the file is already full (22 
      items), no additions are permitted and a notification of the file 
      full status is displayed.      

          "Delete line" will remove the selected line number from the file 
      and move all remaining lines up one line to "close the gap" in the 
      maintenance item list.

          "Return to main menu". You guessed it. That is what it does.
      When a file is altered, it is automatically saved if you entered "N" 
      at the edit "more?" prompt. Don't bother looking for a separate "save 
      file" option, there isn't one.

          "ERASE maintenance files" should be used with caution. DO NOT 
      confuse this option with an editing function. This selection ERASES 
      THE FILE OF CHOICE FROM THE COMPUTER DISK !!!. To use this option 
      it's simply a matter of selecting the chosen file as you have 
      previously done. After the file has been selected, you are given a 
      chance to change your mind at the next prompt which is "Press <ESC> 
      for menu or <ENTER> to continue". Choosing <ENTER> will cause the 
      selected file to be erased and <ESC> is your opportunity to bail out.

          "CREATE maintenance files" is where the maintenance intervals and 
      maintenance items per interval are defined. To start, you are asked 
      to define the maintenance period criteria in "hours" or "miles", you 
      may then enter the maintenance intervals. Maintenance intervals are 
      the mileages or hours that you want maintenance performed. The 
      intervals chosen should be multiples of interval 1.











                                      -4-







      An example-

      Using the "mile" definition, Interval 1= 5000, Interval 2= 10000, 
      Interval 3=15000, Interval 4=30000 and Interval 5=60000 or using the 
      "hour" definition, Interval 1= 10 , Interval 2= 20, Interval 3= 40, 
      Interval 4=80, Interval 5=160. Using a format other than the one 
      described may provide unpredictable results. Feel free to experiment. 
      You may certainly try other combinations, just be advised the attempt 
      may not be successful. If an incompatible format is used, the problem 
      will show up in the print option where the mileages or hours and 
      maintenance interval will be incorrectly calculated. After the 
      intervals are entered it is just a matter of entering the data you 
      would like for each maintenance interval. Assuming an interval 
      structure of 5000, 10000, 15000, 30000, and 60000 miles, an example 
      of appropriate item entries would be;

      Interval 1=   5000-  Change engine oil (5 qts.- 7/16" wrench)
                           Replace engine oil filter (APEX # nnnn)
                           Check lights
                           Check Brakes
      Interval 2=   10000- Replace air filter (APEX # nnnn)
      Interval 3=   15000- Inspect SMOG control system
                           Check transmission and differential levels
      Interval 4=   30000- Check tire wear
                           Check tire pressures (26 psi)
      Interval 5=   60000- Replace engine coolant (7 qts)
                           Replace transmission gear oil (4 pts)
                           Replace differential gear oil (4 pts)

          The minimum interval 1 value that may be entered is 5 and the 
      maximum value is 20,000.
          Selecting the [.MTC] file containing the above data would provide 
      a check off listing the items of each maintenance interval that may 
      be evenly divided into the current mileage.
         Using the sample data- if the print option is selected, and a 
      mileage of 30000 entered, a print out would be generated that 
      contains all items in intervals 1, 2, 3, and 4 because 30000 miles is 
      divisible by each of those interval values. If the mileage entered 
      were 60000 then all items of all intervals would be printed. Entry of 
      an odd value such as 35000 miles would result in printing only the 
      items in interval 1 because 35000 cannot evenly be divided by 10000, 
      15000, 30000, or 60000, as required, however 35000 can be evenly 
      divided by 5000. It really is less confusing than it appears.   
          A maximum of 66 characters per line will be accepted. It is not 
      necessary to enter all 5 possible maintenance intervals, Press F10 
      when you wish to quit interval entry. It is also unnecessary to enter 
      all 22 possible items before entering the next interval, press F10 if 
      you wish to move on before the interval file is filled.

          Files created using the "hour" format will be saved as 
      <filename>.HRS and files using the mile format will be saved as 
      <filename>.MTC.

          "EXIT to DOS" is the end of biz!. 




                                      -5-







                                -A CLOSING NOTE-

          In most situations, pressing <esc> will get you out of a place in 
      which you don't wish to be.


          If your needs require tracking more than 10 pieces of equipment, 
      ask about our COMMERCIAL VERSIONS of Vehicle Maintenance and Vehicle 
      Expenses. The commercial versions are also inexpensive, inter-active 
      and make tracking vehicle maintenance requirements of many vehicles 
      much easier. 


                                              Gary LaRonge
                                              3023 Wilderness Loop S.E.
                                              Olympia, Wa.  98501             










                          

          This software is provided "as is" and offers no warranty, express 
          or implied. The author accepts no liability for this softwares 
          use or misuse, or any consequential, incidental, special or 
          exemplary damages attributed to it's use.  


























                                      -6-







          My thoughts on contributions for shareware. Pretty simple, If you 
      decide to use this software and wish to contribute the suggested 
      value I will be forever grateful, If you feel you can't afford the 
      suggested amount, contribute what you think will better suit your 
      budget. If you want to use the software and contribute nothing, I 
      guess you will probably do just that. The down side of using 
      shareware and failing to contribute for its use is becoming more and 
      more evident. A few years ago, it was not difficult to find full 
      featured software readily available but now, thanks to those who 
      don't wish to support a fine system, we are seeing more and more 
      "teaseware", that is software that has been released without being 
      fully implemented. One of the beauties of the shareware system, 
      besides extremely low cost, is the opportunity to test new software 
      and be sure it suits ones needs before spending a couple of dollars 
      and with "teaseware" that benefit is being restricted. Let's not 
      destroy the system altogether. The thought of being restricted to 
      purchasing commercial software is not a pretty one.







      ---------------------------------------------------------------------  



      Please mail to:

          Gary LaRonge
          3023 Wilderness Loop S.E.
          Olympia, Washington  98501


      Please add my name to the list of registered users of-

          VEHMTC42            (Individual use - $ 5.00)
                              (Commercial use - $20.00)

          NOTE- Commercial registration includes the next release on disk.           


          BUSINESS NAME- __________________________________

          DEPT- ___________________________________________

          NAME- ___________________________________________

          ADDRESS- ________________________________________

          CITY, STATE- ____________________________________

          ZIP CODE- _______________________________________

                                       
                          Please accept my sincere thanks,

                                               Gary      
                                


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1748

     Volume in drive A has no label
     Directory of A:\

    FILE1748 TXT      3109  12-19-89  10:59a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   1-01-80   1:53a
    VEHMTC42 EXE    100219  10-11-88   6:37p
    TYPEDOC  BAT       607  10-11-88   7:13p
    MTCINSTL BAT       367  10-11-88   7:13p
    SAMPLE   MTC      1706   1-03-88  11:45a
    MTCFIX   EXE     59060   2-26-88   9:39p
    VEHMTC42 TXT     20184  10-11-88   7:01p
    VEHEXP31 EXE    114203  10-11-88   6:30p
    EXPINSTL BAT       381  10-11-88   7:10p
    TYPEDO~1 BAT       607  10-11-88   7:11p
    HASERROR FUE      5040   3-23-88   8:00p
    SAMPLE   FUE      5040   3-23-88  11:56a
    VEHEXP31 TXT     12244  10-11-88   7:08p
           15 file(s)     323653 bytes
                           32768 bytes free
