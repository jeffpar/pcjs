---
layout: page
title: "PC-SIG Diskette Library (Disk #2179)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2179/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2179"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SALES COMMISSION TRACKER"

    Quit wondering how your sales people are doing in the field and what you
    owe them in commission.  SCT lets a company or organization
    track commissions due the sales staff in an orderly manner.
    
    SCT is easy to use and set up.  It assumes you're familiar with its
    terms and doesn't define them.
    
    The function keys shouldn't be used.  If they are, strange things pop up
    that need to be erased.  Those familiar with dBASE, dBXL, or
    FoxBase instantly recognize the keys are defined for database work. SCT
    does not use them and neither should you.
    
    When the manual is expanded to define program terms and when the
    program is revised to accept rates with at least two decimal points,
    this will be a good program to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2179.TXT

{% raw %}
```
Disk No: 2179                                                           
Disk Title: Sales Commission Tracker                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sales Commission Tracker                                 
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: 512K RAM, and a hard disk.                        
                                                                        
If you have wanted a way to keep track of the commissions that you      
are due or that you need to pay your sales people, then SCT may be      
your program.  SCT allows a company to track commissions due to sales   
staff in an orderly manner.  Such a program can be a time saver.        
                                                                        
SCT is easy to use, to set up, and to print its reports.  And, only     
two small areas stand in its way of being a very good program.  The     
first concerns the technical terms used in the program.  SCT assumes    
that you will be familiar with its terms and does not define them.      
In addition, there is no on-line help to assist in this or any other    
matter.  One of these other matters is the use of the function keys.    
The function keys should not be used.  If they are, strange things      
pop up that will need to be erased.  Those familiar with dBASE, dBXL,   
or FoxBase will instantly recognize that the keys are defined for       
database work.  SCT does not use them and neither should you.           
                                                                        
When the manual is expanded to define program terms and when the        
program is revised to accept rates with at least two decimal points,    
this will be a good program to use.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SCT.DOC

{% raw %}
```






                           Sales Commission Tracker
                                      SCT

                             Shareware Version 1.0


                              (c) copyright 1989


                                 David Arnold
                               Argonaut Systems
                      15466 Los Gatos Boulevard #109-314
                              Los Gatos, CA 95030




        Sales Commission Tracker (SCT) is distributed in shareware.  
        This is an opportunity to test and evaluate software before you 
        buy it.  You may freely distribute unmodified copies of SCT. 
        
        If you are going to use SCT please enclose a check or money 
        order for $25.  You will receive the registered version of SCT 
        which will include:
        
                1)  Sales Activity reports for sales organization and
                    sales personnel
        
                2)  Commission tracking of distributor POS transactions

                3)  Password Access Security

                4)  Online Operations Manual

        You will be added to our mailing list and be kept notified of 
        new releases and new software.

        Argonaut Systems has other sales management oriented software 
        available such as Prospect List and Analysis (PLAN) for sales 
        forecasting, Sales Rep Management (RMS), customer databases, 
        Sales Call Report/Customer List (SCR), etc. 

                         Sales Commission Tracker (SCT)
                               TABLE OF CONTENTS

        1.0  Introduction..........................................1

          1.1  General Description.................................1

          1.2  Prerequisites.......................................2

          1.3  Disk Contents.......................................2

        2.0  Installation..........................................2

        3.0  Getting Started.......................................3

        4.0  Entering Setup Data...................................3

          4.1  Company Data........................................4

            4.1.1  Clear All Files.................................4

          4.2  Principal Data......................................4

          4.3  Exit................................................5
        
        5.0  DATA ENTRY............................................5

          5.1  Enter Sales Order Data..............................5

          5.2  Enter Invoice Data..................................5

          5.3  Edit Sales Order/Invoice Data.......................6

          5.4  Enter/Edit Commissions Paid.........................6

          5.5  Exit................................................6

        6.0  DISPLAY/PRINT REPORTS.................................6

          6.1  Display/Print Shipping Schedule.....................7

          6.2  Display/Print Actual Shipments......................7

          6.3  Display/Print Purchase Order Status Report..........7

          6.4  Display/Print Commissions Report....................7

          6.5  Exit................................................7

        7.0  EXIT TO DOS...........................................7

        8.0  FILES.................................................8

        9.0  LICENSE AGREEMENT.....................................8

        Order Form.................................................9

                      Advertising Response Manager (SCT)
                               Shareware Version


                     Introduction, Installation and Setup    



        1.0  INTRODUCTION 
                                 
        1.1  General Description 
                                 
        Software sales management tool for sales representative 
        organizations and commissioned sales personnel designed to:
                                                                                
        o  Track sales commissions from direct sales--print reports 
        showing total commissions for each order, commissions due on 
        shipments, commissions paid to date and the difference between 
        commissions due and paid 
                                                                                
        o  Track sales order status--shipment quantity and shipping date 
        vs schedule  
                                                                                
        o  Print reports for sales organization and/or sales personnel
                                                                                
        o  Password access security  
                                                                                
        Sales Commission Tracker (SCT) is a software package that 
        enables commissioned sales personnel and sales representative 
        organizations to easily and effectively use a personal computer 
        to track sales commissions, sales order status and sales 
        activity/performance.  SCT should increase the efficiency of 
        your organization and provide better documentation on which to 
        base business decisions.
                















                                       1

        1.2  Prerequisites                                     
                                                               
        The minimum system required to operate SCT is:         
                                                               
          a.  Computer with MS- or PC-DOS                      
                                                               
          b.  512K RAM                                         
                                                               
          c.  Hard disk and 5.25" floppy disk drive    
                                                               
          d.  Printer                                          
        
        Note: SCT may be operated on a dual floppy system provided one 
        of the floppy drives is high capacity (720KB or greater) to 
        hold the SCT programs.
                                                               

        1.3  Disk Contents                                             
                                                                       
        SCT is supplied in archived file on a 360KB floppy disk.  
        AINSTALL.BAT is the program that installs SCT on your hard 
        disk in a directory named SCT.  This program also places 
        SCT.BAT in the root directory of your hard disk enabling one 
        to start using the Argonaut Systems Advertising Response 
        Manager by typing SCT while in the root directory.      
                                                 

        2.0  INSTALLATION                        
                                                 
        You need the CONFIG.SYS file on the boot disk to properly run 
        SCT.  If CONFIG.SYS already exists on your disk, modify the 
        file by adding the following lines using your word processing 
        program or EDLIN:                             
                         
                                   FILES = 24      
                                   BUFFERS = 24    
                                                   
        If CONFIG.SYS does not exist on your boot disk you may copy it 
        from SCT disk   Place disk into drive A.  Select drive A by 
        typing:                            
                    
                                   >A: [Enter]  
                                                
        Follow this by typing:                  
                                                
                          A>COPY CONFIG.SYS C:\ [Enter]
                                                       
        Where C:\ represents the root directory of the disk to which 
        you wish to copy SCT.  If the disk is not C, change the letter 
        to the appropriate one.                               
        




                                       2

                
        Begin installation of SCT with the disk in drive A and type:                
                    
                               A>AINSTALL C: [Enter]   
                                                       
        This operation will install SCT on your disk.  If the 
        designation of your drive is not "C:", you must type the 
        appropriate drive letter.      
                                       
        SCT will be installed in a directory called SCT.  SCT.BAT will 
        be in the root directory of drive C.  Use SCT by selecting 
        drive C and typing:     
                                
                                  C>SCT [Enter]   
                                                  
        3.0  GETTING STARTED                      
                                                  
        After typing SCT [Enter] to start SCT the initial SCT menu 
        will be displayed on the monitor.  This menu will reappear 
        after each function is completed.  Select a function by 
        pressing the letter preceding each function in the menu or by 
        moving the arrow keys to  highlight the desired function and 
        pressing Enter.  This same technique is used for selections in 
        all menus within SCT.  Areas that require operator entry are 
        highlighted.  Most messages (instructions, notes, etc.) appear 
        at the bottom of the monitor screen.  If you have a color 
        adapter (CGA or EGA) and a color monitor SCT will display in 
        color.    
                
        Setup should be entered prior to proceeding with other SCT 
        functions since this data is used in some of the other 
        functions.                                    
             
        Observe case of typed entries when searching for files, e.g., 
        a search for "Joe" will not be successful if you type "JOE".  
        The complete word is not necessary for a search, e.g., "Joe" 
        would be found if you typed "J" as well as  all other names 
        that begin with "J" in the file.                                
             

        4.0  ENTERING SETUP DATA   
                                   
        Press A when the initial SCT menu is displayed on the monitor 
        screen.           
           
        After typing SCT [Enter] to start SCT, the initial SCT menu will 
        be displayed on the monitor.  This menu will reappear after each 
        function is completed (functions A-D).  
                                                                                
        The A selection is your company or organization database plus 
        the utilities to erase all files for initializing a new sales 
        commission tracking program and password entry to limit access 
        to data. 


                                        3
 
        Selections D through E are for a database of your principal 
        companies.
                                                                                
        In the event that the indexing or ordering of your data files 
        has become damaged you may reindex the files with the selection 
        F.
                                                                                
        Press G to exit and return the program to the initial SCT menu.
                                                                                
        4.1  Company Data
                                                                                
        Input your company or organization name.  Input the first month 
        of your fiscal year, e.g., if your fiscal year begins April 1 
        you would enter 4.  If you are limited for space on your hard 
        disk it is recommended that you store history files on floppy 
        disks, i.e., press A or B in response to the "Disk drive 
        letter..." heading.   
                                                                                
                                                                                
        4.1.1  Clear All Files
                                                                                
        If you wish to begin SCT from scratch after data has been 
        entered you may erase all data from every file by responding 
        with a Y to the following screen prompt: 
                                                                                
        Clear all files? Y,N
                                                                                
        If you pressed Y in error you have one more opportunity to avoid 
        erasing your files.  A warning message, "ALL DATA CONTAINED IN 
        THE FILES WILL BE ERASED", is followed by "Proceed? Y,N".  Press 
        Y to erase the files.               
                                                                                
        After your last entry the program returns to the Setup menu. 
                                                                                
        
        4.2  Principal Data
                                                                                
        Press B to erase any existing principal company data and enter 
        all new data.  The data that may be entered includes the 
        principal company name, the standard commission rates paid to 
        your organization on direct sales and distributor point of sale 
        transactions, the number of days after shipment that commissions 
        are paid and the standard commission rates for sales personnel.
                                                                                
        You may add new principals to the existing principal list by 
        pressing C.        
                                                                                
        Edit the principal list by pressing D.
                                                                                
        The principal list and commission rate data may be displayed on 
        the screen or printed by pressing E.
                                                                  



                                        4

        4.3  Exit
                                                                  
        Return to the initial SCT menu by pressing G.                    
                                                                  
        
        5.0  DATA ENTRY
                                                                  
        Data on principal sales orders, shipments, sales activities, 
        invoices and commissions may be entered by pressing B when the 
        initial SCT menu is displayed.
                                                                         
                                                                         
        5.1  Enter Sales Order Data
                                                                         
        The first prompt after pressing A is a request for a purchase 
        order number.  If you do not enter a purchase order prior to 
        pressing Enter the screen prompt will be:
                                                                                
        Any more orders? Y,N  
                                                                                
        Press Y to continue to input data or N to exit routine and 
        return to original Data Entry menu. 
                                                                                
        A request for order date, customer, buyer, principal, sales 
        order number and salesperson will follow the purchase order 
        number.
                                                                                
        You may enter items from the sales order until you press Enter 
        with no product typed.  Each item requires a product name or 
        description.  This entry is followed by requests for quantity, 
        price, commission rates.  Separate commission rates may be 
        entered for each item if required.  The default commission rates 
        will be those entered in the "Setup" principal database.
                                                                                
        The routine requests a shipping schedule consisting of a ship 
        date and quantity for each item.  The shipping routine will be 
        exited when Enter is pressed with no quantity entered.  After 
        the shipping schedule is completed you may edit the sales order 
        input.  Finally the Data Entry menu is redisplayed. 
                                                                                
        
        5.2  Enter Invoice Data
                                                                                
        Input a sales order number after pressing B.  SCT will search 
        the sales order file for this number.  If the corresponding 
        sales order is not found the following message appears:
                                                                                
        Sales order not found--sales order must be entered before 
        invoice.
                                                                                
        If this message appears the display returns to the Data Entry 
        menu after pressing a key.
 


                                        5

        If the sales order is found you may enter the item number, 
        invoice number, quantity shipped and the date shipped.
                                                                               
        
        5.3  Edit Sales Order/Invoice Data
                                                                               
        Press C if you need to modify any of the data in the sales 
        orders or the invoice data.  A order number is requested to 
        search for the file.  A list of all sales orders on file may be 
        displayed or printed.  If the file is found all of the data is 
        displayed for both the sales order and the corresponding 
        invoices.  This data may be changed as desired.  At the 
        completion of editing the screen will once again display the 
        Data Entry menu. 
                                                                               
                                                                               
        5.4  Enter/Edit Commissions Paid
                                                                                
        Commissions paid by your principals may be entered by pressing 
        F.
                                                                                
        If the payment is a result of a direct sale, enter the 
        appropriate sales order number.  Select your sales organization 
        and/or the salesperson as the payee and enter the amount of the 
        commission payment.
                                                                                
        The screen will display each of the invoices for the selected 
        sales order with the commissions due and the amount of payment 
        for each invoice that have been previously entered.  Input the 
        appropriate commission payment for each invoice.  The payments 
        may be input for your organization and/or the salesperson. 
                                                                                
                                                                                
        5.5  Exit
                                                                                
        Press H to return to the initial SCT menu.

        
        6.0  DISPLAY/PRINT REPORTS
                
        Press G when the Data Entry menu is displayed to enter the 
        Display/Print Reports menu.  Press the appropriate letter for 
        the report that you desire.  This will be followed by the 
        prompt:   
                                                                               
        Print? Y,N









                                        6

        Press Y to print or N to display on the monitor.  The display of 
        reports on the monitor is meant for a quick check only and the 
        screen will scroll up if the report is longer than 25 lines.  
        You may halt the scroll with the Pause key or CTRL-S.  Press any 
        key to continue the scroll.  After a report is output the 
        program returns to the Display/Print Reports menu.
                                                                               
                                                                               
        6.1  Display/Print Shipping Schedule
                                                                               
        Press A to display or print the shipping schedule associated 
        with each sales order.  You may select shipping schedules by any 
        of several parameters that will be listed on the screen.
                                                                                
        Press Y to print or N to display on the monitor.  After the 
        schedule is output the program returns to the Display/Print 
        Reports menu.
                                                                                
                                                                                
        6.2  Display/Print Actual Shipments 
                                                                                
        The actual shipments may be displayed by pressing B.  The 
        operation is the same as described in section 6.1. 
                                                                                
                                                                                
        6.3  Display/Print Purchase Order Status Report
                                                                                
        Press H to display or print a purchase order status report.  The 
        operation is the same as described in section 6.1.
                                                  

        6.4  Display/Print Commissions Report 
                                                                                
        Overall and itemized commission reports for the sales 
        organization and/or sales personnel may be displayed or printed 
        by pressing F.  The overall commission report shows any 
        difference in the amount of commission due and the amount paid. 
                                                                                
        This report will allow you to flag any problems in your 
        commission payments.  The itemized report shows the commissions 
        for each invoice and the number of days that the payment is 
        delinquent.
                                                                                

        6.5  Exit 
                                             
        Press G to return to the Data Entry menu.    
                                             

        7.0  EXIT TO DOS                                                  
                                                                  
        Press H to return to the initial SCT menu.
               

        
                                       7

        8.0  FILES

        The files included with SCT are:

                AINSTALL.BAT    Installation batch file

                SCT.BAT         Batch file to start SCT

                SCT.EXE         Archived SCT programs

                SCT.DOC         Documentation for SCT

                CONFIG.SYS      CONFIG.SYS file setting files and 
                                buffers
        
                
        9.0  LICENSE AGREEMENT

        Advertising Response Manager (SCT) software is copyrighted by 
        Argonaut Systems.  Under copyright laws there are penalties for 
        making unauthorized copies.  You may make copies of the 
        shareware version and freely distribute these copies.  Any copy 
        you make must include reproduction of the copyright notice.  

        Argonaut Systems makes no express or implied warranty for the 
        software which is provided solely on an "as is" basis.  
        Argonaut Systems disclaims all conditions and warranties, 
        whether expressed or implied with regard to the software, 
        including all implied conditions or warranties of 
        merchantability and fitness for a particular purpose.  Argonaut 
        Systems shall not have any liability or responsibility of any 
        kind including special, indirect or consequential damages, 
        arising out of or resulting from such software or the use or 
        modification thereof. 





















                                        8

 




        Argonaut Systems                                    ORDER FORM
        ______________________________________________________________

        Send me a copy of:

                [ ]  Sales Call Reports/Customer List (SCR)       $35
        
                [ ]  XYPlot (XYP) Complex data XY graphics        $25
                     display
        
                [ ]  Prospect List and Analysis (PLAN)            $89
        
                [ ]  Advertising Response Manager (ARM)           $25
        
                [ ]  Sales Commission Tracker (SCT)               $45

        (all software includes registration, online manual, additional 
        features, update and new release notification)
        
                [ ]  I need more information on_______________________

        ______________________________________________________________

        CA residents add 7% tax
        [ ]  Check or money order

                Phone (____)___________________________ext____________

                Signature_____________________________________________

        Name______________________________Title_______________M/S_____

        Company_______________________________________________________

        Address_______________________________________________________

        City___________________________________State_____Zip__________

                                (please print)

            15466 Los Gatos Boulevard #109-314  Los Gatos, CA 95030
                                (408) 867-5029

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2179

     Volume in drive A has no label
     Directory of A:\

    AINSTALL BAT      1003   5-28-89   4:46p
    SCT      BAT        24   5-28-89   4:44p
    SCT      EXE    299731   6-02-89   8:42p
    CONFIG   SYS       128   3-16-88   8:40p
    SCT      DOC     27288   5-31-89   9:28p
    FILE2179 TXT      2517   4-28-90   3:19p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   4-28-90   2:21a
            8 file(s)     331423 bytes
                           26624 bytes free
