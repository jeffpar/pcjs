---
layout: page
title: "PC-SIG Diskette Library (Disk #1610)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1610/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1610"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SALES CALL REPORTS"

    SALES CALL REPORTS (SCR) enables a sales representative to easily and
    effectively use a computer to automate the reporting and customer list
    functions that are usually performed manually or not at all.  SCR will
    help sales reps organize and document their relationships with a
    customer, while helping a company keep records of what their sales reps
    are doing.  And all without ever actually filing reports.
    
    SCR becomes an effective central data source for customer status,
    contacts, specific sales notes, address information, and other
    pertinent data for every sale call.  Mailing labels, Rolodex cards, and
    sales reports are instantly available.  Paperwork is saved, and
    important customer contacts and personal notes won't be lost if a
    salesperson leaves the staff.  Best of all, the program is menu driven
    and so simple, even computerphobes will find it easy to use.
    
    SCR will increase the efficiency of your organization and provide
    better documentation on which to base business decisions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1610.TXT

{% raw %}
```
Disk No: 1610                                                           
Disk Title: Sales Call Reports                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sales Call Reports                                       
Author Version: 1.0                                                     
Author Registration: $35.00                                             
Special Requirements: 512K RAM                                          
                                                                        
SALES CALL REPORTS (SCR) enables a sales representative to easily and   
effectively use a computer to automate the reporting and customer list  
functions that are usually performed manually or not at all.  SCR will  
help a sales rep organize and document their relationship with a        
customer, while helping a company keep records of what their sales reps 
are doing.  And all without ever actually filing reports.               
                                                                        
SCR becomes an effective central data source for customer status,       
contacts, specific sales notes, address information, and other          
pertinent data for every sale call.  Mailing labels, rolodex cards, and 
sales reports are instantly available.  Paperwork is saved, and         
important customer contacts and personal notes won't be lost if a       
salesperson leaves the staff.  Best of all, the program is menu driven  
and so simple, even computerphobes will find it easy to use.            
                                                                        
SCR will increase the efficiency of your organization and provide       
better documentation on which to base business decisions.               
                                                                        
Program Limitations:  No security or sales itineraries in demo.         
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SCR.DOC

{% raw %}
```






                       Sales Call Reports/Customer List
                                      SCR

                             Shareware Version 1.0


                              (c) copyright 1989


                                 David Arnold
                               Argonaut Systems
                      15466 Los Gatos Boulevard #109-314
                              Los Gatos, CA 95030




        Sales Call Reports/Customer Lists (SCR) is distributed in 
        shareware.  this is an opportunity to test and evaluate 
        software before you buy it.  You may freely distribute 
        unmodified copies of SCR.
        
        If you are going to use SCR please enclose a check or money 
        order for $35.  You will receive the registered version of SCR 
        which will include:
        
                1)  Sales Intineraries

                2)  Password Access Security

                3)  Online Operations Manual

        You will be added to our mailing list and be kept notified of 
        new releases and new software.

        Argonaut Systems has other sales management oriented software 
        available such as Prospect List and Analysis (PLAN) for sales 
        forecasting, Sales Rep Management (RMS), customer databases, 
        sales lead management, etc. 




                    Sales Call Reports/Customer Lists (SCR)

                               TABLE OF CONTENTS



        1.0  Introduction..........................................1

          1.1  General Description.................................1

          1.2  Prerequisites.......................................2

          1.3  Disk Contents.......................................2

        2.0  Installation..........................................2

        3.0  Getting Started.......................................3

        4.0  Entering Setup Data...................................3

          4.1  Exit to DOS.........................................4
        
        5.0  Sales Call Reports....................................4

        6.0  Enter New Call Reports................................4

        7.0  Edit Current Call Reports.............................6

        8.0  Display/Print Current Call Reports....................7

        9.0  Display/Print Call Reports History File...............7

        10.0  Exit Call Reports....................................8
        
        11.0  Customer Mail List...................................8

        12.0  Edit and/or Add Name to Mail List....................8

        13.0  Display/Print Mail Labels...........................10

        14.0  Clear Files of All Data.............................10

        15.0  Exit Customer Lists.................................10

        16.0  Files...............................................11




                    Sales Call Reports/Customer List (SCR)
                               Shareware Version

                     Introduction, Installation and Setup    

        1.0  INTRODUCTION 
                                 
        1.1  General Description 
                                 
        A software sales management tool designed by sales people for 
        sales people to provide: 
                       
          o  Easy operation by non-technical and/or secretarial 
             personnel--no computer expertise is required     
                                                                           
          o  Consistent sales and marketing data                           
                                                                           
          o  Minimize time devoted to paperwork by sales personnel--
             allows more time for selling                     
                                                                           
          o  Paperless filing of data--instantly available                 
                                                                           
          o  Customer mail list automatically created from call 
             reports--print mailing labels and "Rolodex" or reference 
             cards                                    
             
          o  Print call reports in uniform format
                                                 
          o  Almost unlimited sorting of customer mail list
                                                           
                                                           
        Sales Call Report/Customer List (SCR) enables a sales 
        representative to easily and effectively use a personal 
        computer to automate the reporting and customer list functions 
        that are usually performed manually or not at all.  SCR should 
        increase the efficiency of your organization and provide 
        better documentation on which to base business decisions.      
             
        SCR is a menu driven, easy-to-use program that does not 
        require any computer expertise.  It is designed to be used by 
        secretarial personnel.  Questions and responses are in English.
                                                                       
        
        
        
        
        
        
        
        
        
        
                                       1

        1.2  Prerequisites                                     
                                                               
        The minimum system required to operate SCR is:         
                                                               
          a.  Computer with MS- or PC-DOS                      
                                                               
          b.  512K RAM                                         
                                                               
          c.  Hard disk and 5.25" floppy disk drive    
                                                               
          d.  Printer                                          
        
        Note: SCR may be operated on a dual floppy system provided one 
        of the floppy drives is high capacity (720KB or greater) to 
        hold the SCR programs.
                                                               

        1.3  Disk Contents                                             
                                                                       
        SCR is supplied in archived file on a 360KB floppy disk.  
        AINSTALL.BAT is the program that installs SCR on your hard 
        disk in a directory named SCR.  This program also places 
        SCR.BAT in the root directory of your hard disk enabling one 
        to start using the Argonaut Systems Sales Call Report software 
        by typing SCR while in the root directory.      
                                                 

        2.0  INSTALLATION                        
                                                 
        You need the CONFIG.SYS file on the boot disk to properly run 
        SCR.  If CONFIG.SYS already exists on your disk, modify the 
        file by adding the following lines using your word processing 
        program or EDLIN:                             
                         
                                   FILES = 24      
                                   BUFFERS = 24    
                                                   
        If CONFIG.SYS does not exist on your boot disk you may copy it 
        from SCR disk   Place disk into drive A.  Select drive A by 
        typing:                            
                    
                                   >A: [Enter]  
                                                
        Follow this by typing:                  
                                                
                          A>COPY CONFIG.SYS C:\ [Enter]
                                                       
        Where C:\ represents the root directory of the disk to which 
        you wish to copy SCR.  If the disk is not C, change the letter 
        to the appropriate one.                               
        




                                       2

                
        Begin installation of SCR with the disk in drive A and type:                
                    
                               A>AINSTALL C: [Enter]   
                                                       
        This operation will install SCR on your disk.  If the 
        designation of your drive is not "C:", you must type the 
        appropriate drive letter.      
                                       
        SCR will be installed in a directory called SCR.  SCR.BAT will 
        be in the root directory of drive C.  Use SCR by selecting 
        drive C and typing:     
                                
                                  C>SCR [Enter]   
                                                  
        3.0  GETTING STARTED                      
                                                  
        After typing SCR [Enter] to start SCR the initial SCR menu 
        will be displayed on the monitor.  This menu will reappear 
        after each function is completed.  Select a function by 
        pressing the letter preceeding each function in the menu or by 
        moving the arrow keys to  highlight the desired function and 
        pressing Enter.  This same technique is used for selections in 
        all menu within SCR.  Areas that require operator entry are 
        highlighted.  Most messages (instructions, notes, etc.) appear 
        at the bottom of the monitor screen.  If you have a color 
        adaptor (CGA or EGA) and a color monitor SCR will display in 
        color.    
                
        Setup should be entered prior to proceeding with other SCR 
        functions since this data is used in some of the other 
        functions.                                    
             
        Observe case of typed entries when searching for files, e.g., 
        a search for "Joe" will not be successful if you type "JOE".  
        The complete word is not necessary for a search, e.g., "Joe" 
        would be found if you typed "J" as well as  all other names 
        that begin with "J" in the file.                                
             

        4.0  ENTERING SETUP DATA   
                                   
        Press A when the initial SCR menu is displayed on the monitor 
        screen.           
           
        Input your company or organization name.  If you are limited 
        for space on your hard disk it is recommended that you store 
        history files on floppy disks, i.e., press A or B in response 
        to the "Disk drive letter..." heading.           
               
        After this last entry the program returns to the initial SCR 
        menu.            
               

        
                                       3

        4.1  Exit to DOS
        
        Press C to exit SCR and to return to DOS.
                

        5.0  SALES CALL REPORTS
                                                           
        Sales call reports may be developed and saved by pressing B 
        when initial SCR menu is displayed followed by pressing A when 
        the Sales Call Report menu appears.  
             
        6.0  ENTER NEW CALL REPORTS   
                                      
        The most efficient interface between your sales personnel that 
        are making the customer contacts and SCR is the handheld 
        microcassette recorder that each salesperson can use to 
        dictate the call reports.  The tapes can then be         
        transcribed directly into SCR.  This minimizes paperwork by 
        sales personnel and allows then to use their time in effective 
        selling.  Press A to select the new  data entry function.  The 
        current date is automatically displayed for date of contact, 
        but may be changed to any date.  Enter appropriate data for 
        each of the items followed by Enter, e.g.,      
               
        Date of contact  07/27/87  
        Salesperson                
        Company  Acme Widgets, Inc.
                                   
                                   
        A Y for yes is automatically displayed after "Mail list?", but 
        may be changed to N if it is not desired to add this contact 
        to the mail list file or if this contact already is included 
        in the mail list file from prior call reports.  All data entry 
        is followed by Enter unless the data completely fills the        
        space allotted.  After the last entry (EXT) the screen will be 
        replaced by:     
           
        Contact no. 2   
        Contact_________________    
                                    
        If a name is entered additional data items will be listed on 
        the screen that include the contact's title, add to mail list, 
        area code, phone and extension.  The original key contact's 
        phone will appear, but may be changed.  You may include up to 
        five additional contacts in each call report.  If you have no 
        additional contacts and wish to exit this routine, merely 
        press Enter without typing a contact name.  You will be given 
        a last chance to add names if you pressed Enter in error.  The 
        prompt is:                                         
              
        Any more contacts? Y,N   
        
        
        
        
                                       4

        If you press Y when asked if you want any more contacts, you 
        may add more contacts but still limited to a maximum of five.  
        Press N to exit routine.  The following message is now 
        displayed at the bottom of the screen:             
          
        Enter summary:  
        1.  Press Ctrl-PgDn to begin typing summary or contact report.
        2.  Upon completion of text, press Ctrl-PgUp to exit editor.  
        3.  Press Enter to proceed with next page or next input.      
                                                                      
        (Exit editor, press Enter & use 2nd page if text exceeds 35 lines) 
        Press any key to continue...                                       
                                                                           
        Press the Ctrl key and the PgDn key at the same time.  You can 
        now type the text or summary of the sales call report.  At the 
        conclusion of the text, exit the editor by pressing Ctrl key 
        and PgUp key together and press Enter.  The memo file does not 
        keep track of the number of lines of text that you type and 
        will not eject the printer paper at the end of the page.  
        Therefore, if you exceed approximately 35 lines your printer 
        may print past the end of the page.  
                                                                
        If the text of your call report is longer than 35 lines exit 
        the editor and enter a second summary page.    
                                                       
        Upon exiting the first summary page the screen will prompt:
                                                                   
        Complete summary on 2nd page? Y,N                          
                                                                   
        If you respond with a Y you will enter the editor again by 
        pressing Ctrl and PgDn together.  After completion of the 
        text, again press Ctrl and PgUp and Enter.  At the completion 
        of the second page or if you pressed N when prompted for a 
        second page the prompt will be:                     
                                                            
        Edit this call report? Y,N                          
        
        If you wish to make changes in the just completed call report 
        press Y.  The screen will display the same format with the 
        data you enter at the beginning of the contact report.  You 
        may change any of the parameters merely by typing over the 
        appropriate data.  You may move through the data fields with 
        the arrow keys and skip a whole page with the PgDn key.  You 
        can also re-enter the edit mode from the main call report menu 
        after you have displayed or printed the report.  
                                                         
        If editing is not required, press N.  The screen now erases 
        and displays the date of contact, salesperson and company 
        again to permit entry of another contact report.  The date and 
        salesperson displayed will be the same as the last call report 
        to minimize typing if you have several reports by the same 
                                                            
 
 
 
                                       5

        individual.  If no additional reports are to be entered, press 
        Enter without any data input for company.  You will be 
        prompted--"Any more entries? Y,N."  If you would like to then 
        enter another report you may do so by pressing Y,     
        otherwise press N. 
                           
        The screen now asks if you want to display or print the call 
        reports you have just entered.  It is not necessary to view 
        the reports at this time.  The screen displays the question: 
                                                                     
        Display/print call reports? Y,N                              
                                                                     
        Respond by pressing Y and the call reports you have just 
        entered will be displayed on the monitor or printed.  Press N 
        and the program will return to the call report menu.   
                                                               
 
        7.0  EDIT CURRENT CALL REPORTS                         
                                                               
        If corrections to the current call reports are necessary, 
        press B.  A request for data will appear on the monitor:
                                                                
        Key contact_________________                            
        Company___________________________________              
                                                                
        The program will find a partial name or company but you must 
        enter capitals and lower case as originally entered in the 
        call report.  If the requested call report is not found, the 
        message, "Record not found" will be displayed.  If the 
        requested contact report is found the screen will appear.
                            
        After EXT [Enter] for the sixth additional contact or pressing 
        PgDn, the monitor message will read: 
                                             
        Edit summary:                        
        1.  Press Ctrl-PgDn to begin editing summary of call report.   
        2.  Upon completion of editing, press Ctrl-PgUp to exit editor. 
        3.  Press Enter to proceed.                                     
                                                                        
        If there is an existing second page the program will 
        automatically permit editing of the file.  If you would like 
        to add a second page, press Y in response to the query "Add a 
        second page? Y,N."                              
        
                                              
        At the completion of editing all call reports that have been 
        selected, you may exit the edit routine or select a new call 
        report to edit.  The screen prompts:  
          
        More editing? Y,N 
                          
        Press Y to continue editing call reports.  Press N to return 
        to the main call report menu.  
        
        
                                       6

        8.0  DISPLAY/PRINT CURRENT CALL REPORTS 
                                                
        Press C, you will be prompted:          
                                                
        Print? Y,N                              
                                                
        If you do not choose to print the current call reports they 
        will be displayed on the monitor.  Be sure the printer is on 
        and loaded with paper.
                                                                   
        At the conclusion of printing the call reports, the screen 
        will prompt:         
                       
        Add these call reports to history file? Y,N 
                                                    
        You should press N if you wish to make changes to the call 
        reports before filing them.  If you are satisfied with the 
        call reports press Y.  The current call reports will be copied 
        to the call report history file.  The program will  check the 
        disk space available before copying the reports.  If 
        insufficient disk space is available the message  
                    
        Insufficient disk space.  Insert new formatted disk.   
        Press any key to continue...                           
                                                               
        will appear.  Assuming that you specified a floppy disk drive 
        for your archive file in the setup routine, insert the 
        formatted disk into the proper drive and press any key.  The 
        file copying will be completed.            
                                          
        If you have been storing your call report history file on your 
        hard disk and have insufficient disk space you will have to 
        transfer the file to floppy disks and erase it from the hard 
        disk.  After transfering the history file to floppy disk, 
        change the drive letter for archiving data to the floppy drive     
        if desired.                                 
                                                    
        The current call report file will be erased after archiving 
        the reports in the history file.
                                        
        The program now returns to the call report menu. 
                                                         
        
        9.0  DISPLAY/PRINT CALL REPORTS HISTORY FILE     
                                                         
        Press D when the call report menu is on the monitor screen.  A 
        new menu will appear.
                                                      
        
        
        
        
        
        
        
                                       7

        Any of the options may be used to find the call report of 
        interest.  After typing the appropriate letter the message at 
        the bottom of the screen will request input of the parameter 
        by which the program will search for the call report.  Once 
        the search parameter has been entered the screen message is:      
            
        Print? Y,N  
                    
        Press Y to print the call reports or N to display on the 
        monitor.  Be sure paper is loaded in the printer before 
        pressing Y.                               
         
        After the last selected call report is printed or displayed 
        the monitor redisplays the original call report menu.
                                                             
        10.0  EXIT                                            
                                                             
        Press E to return to the initial SCR menu.           
                                                             
        
        
        11.0  CUSTOMER MAIL LIST                              
                                                             
        Customer mail list is automatically developed from contact 
        reports or may be developed directly by pressing B when the 
        initial SCR menu is on the monitor followed by pressing B when 
        the Customer contact and forecast menu appears.
           
        
        12.0  EDIT AND/OR ADD NAME TO MAIL LIST  
                                                
        Press A to edit the mail list or to add to the list.  A short 
        menu will appear on the screen:
                                       
        A: Add name to mail list       
        B: Edit existing record        
                                       
        If you wish to add a name to the list press A.  You may then 
        enter an inquiry date, the name of the contact, the contact's 
        title, company, division, mail stop, address, city, state, zip 
        code, country, area code, phone, extension, market or SIC, 
        product of interest, and salesperson.  
                                       
        Press B to edit an existing mail list entry.  A new short menu 
        is displayed:    
           
        A: Display records                   
        B: Find record by company & contact  
                                             
        If you wish to display record(s) prior to editing, press A.  A 
        menu of choices for searching the mail list will be presented. 
                       
                    
        
        
                                      8

        To directly search for the mail list record that you wish to 
        edit press B.  You will be prompted for a company name and 
        contact name.  The mail list will be searched for these two 
        parameters.  If the record is found you will be permitted to 
        change any or all of the data in this entry.    
         
        After you have finished editing the screen will prompt: 
                                                                
        More editing? Y,N                                       
                                                                
        Pressing Y will allow you to continue editing the mail list or 
        adding names.  Press N to return to the original customer mail 
        list menu.                      
          
        3" x 5" reference cards or rotary file cards may be printed 
        with the information available for each of the customers on 
        your mail list by pressing B.  You can select from the menu 
        by pressing the appropriate letter to find the customer(s) of 
        interest.         
              
        You may elect to print the data on the cards by pressing Y in 
        response to the following:
                                  
        Print? Y,N                
                                  
        If you choose to print the cards rather than display on the 
        monitor the next prompt will be:  
                                          
        No. of cards printed across__     
                                          
        Printer reference cards and rotary file cards may be obtained 
        with either a single card across or two cards across.  You may 
        select to print either type by entering a 1 or 2.  Be sure the 
        printer is on with the cards loaded.  The cards will print in 
        the following format:                
                                       
             Sam Brown, Operations Mgr.
             ABC, Inc.                 
             Widget Division  1-23C    
             123 American Way          
             Los Gatos, CA 95030-0000  
             (408) 555-4567 EXT 789    
             12/28/87  Market: 3573  Product: Gadget #5
             Sales: Dick Smith                         
             Action/Comments:                          
                                                       
        Printed on a 3" x 5" card you will have approximately 1 1/4" 
        for writing any notes or comments.    
                                              
        After printing the cards the screen prompt will be: 
                                                            
        Create MAILMERGE file? Y,N                          
                                                            
        
        
                                      9

        Press Y to create a file called MAIL.TXT that may be used by 
        your word processing program to create form letters for 
        direct mail campaigns.  Press N to return to the customer list 
        menu.         
        
        
        13.0  DISPLAY/PRINT MAIL LABELS     
                                           
        Press C to print mail labels.  The first menu to appear is the 
        same as for displaying or printing reference cards.
            
        You may choose to display the labels on the monitor without 
        printing them by pressing N in response to the query "Print? 
        Y,N".  Pressing Y will print the labels.  
           
        You are given an opportunity to modify the label format by 
        pressing Y when the following message appears:    
                                                          
        Modify label format? Y,N    
                                    
        Finally you may wish to print sample labels, i.e., asterisks 
        in place of the actual label data just before printing all the 
        labels so you may align the labels in your printer.  Press Y 
        when the message on the screen is:                       
             
        Print sample labels? Y,N   
                                   
        Turn on the printer and load the labels prior to responding.  
        At the conclusion of printing the labels, the monitor will 
        again display the customer mail list   
        
        
        14.0  CLEAR FILES OF ALL DATA  
                                      
        Should you wish to begin a whole new customer mail list press 
        D to clear files of all data.  If you pressed D in error you 
        have an opportunity to exit the deletion routine when the 
        screen message is:                                    
                
        Are you sure? Y,N   
                            
        Press N to return to the customer mail list menu.  Press Y to 
        proceed with deletion of all data.  If you would like to save 
        this data on floppy disk for historical records press Y in 
        response to the following:               
        
        15.0  EXIT                                                 
                                                                  
        Press D to return to the original SCR menu.
     
                                                             
        
        
        
        
                                      10

        16.0  FILES

        The files included with SCR are:

                AINSTALL.BAT    Installation batch file

                SCR.BAT         Batch file to start SCR

                PKXARC.COM      Program to unarchive SCR.ARC

                SCR.ARC         Archived SCR programs

































        
        
        
        
        
        
        
        
        
        
        
                                      11

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1610

     Volume in drive A has no label
     Directory of A:\

    AINSTALL BAT      1015   3-22-89   7:58p
    FILE1610 TXT      2591  12-01-89   9:58a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  12-01-89   1:03p
    PKXARC   COM     12242   4-27-87
    SCR      ARC    283592   3-21-89  10:46p
    SCR      BAT        24   3-21-89   7:53p
    SCR      DOC     32277   3-22-89   7:20p
            8 file(s)     332396 bytes
                           26624 bytes free
