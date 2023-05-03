---
layout: page
title: "PC-SIG Diskette Library (Disk #1562)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1562/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1562"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ADVERTISING RESPONSE MANAGER"

    Advertisers, there is an easy way to see if your advertising dollars
    are paying off. ADVERTISING RESPONSE MANAGER (ARM) lets you keep track
    of the response to all types of advertising and promotional campaigns.
    ARM can handle advertisements, news releases, product surveys,
    technical articles, reply cards, or anything else you use as
    promotional material. ARM gets you started with menus that prompt you
    for everything from product information to advertising costs. Once
    your advertising and promotional pieces are entered, another section of
    the program allows you, or your administrative support, to keep track
    of responses. You do not need to be a computer or advertising guru to
    effectively use ARM.
    
    You can look at how much you spent on advertising overall, or by
    publication, by product, by type of media, or by individual piece. You
    can look at responses based on the media name, issue, type,
    identification number, product advertised, last response date, or number
    of responses to date.
    
    One of the best things about ARM is that it allows you to easily plug
    your data files into any other spreadsheet or database program that
    uses dBase files. With ARM, you can finally see what you're getting
    for your advertising dollar.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARM.DOC

{% raw %}
```






                         Advertising Response Manager
                                      ARM

                             Shareware Version 1.0


                              (c) copyright 1989


                                 David Arnold
                               Argonaut Systems
                      15466 Los Gatos Boulevard #109-314
                              Los Gatos, CA 95030




        Advertising Response Manager (ARM) is distributed in shareware.  
        This is an opportunity to test and evaluate software before you 
        buy it.  You may freely distribute unmodified copies of ARM. 
        
        If you are going to use ARM please enclose a check or money 
        order for $25.  You will receive the registered version of ARM 
        which will include:
        
                1)  Sales Lead Tracking including mail labels, 
                    reference cards and reports

                2)  Password Access Security

                3)  Online Operations Manual

        You will be added to our mailing list and be kept notified of 
        new releases and new software.

        Argonaut Systems has other sales management oriented software 
        available such as Prospect List and Analysis (PLAN) for sales 
        forecasting, Sales Rep Management (RMS), customer databases, 
        Sales Call Report/Customer List (SCR), etc. 




                      Advertising Response Manager (ARM)

                               TABLE OF CONTENTS



        1.0  Introduction..........................................1

          1.1  General Description.................................1

          1.2  Prerequisites.......................................2

          1.3  Disk Contents.......................................2

        2.0  Installation..........................................2

        3.0  Getting Started.......................................3

        4.0  Entering Setup Data...................................3

          4.1  Exit to DOS.........................................4
        
        5.0  Advertising Response Data.............................4

        6.0  Enter/Edit Advertising Response Data..................4

        7.0  Display/Print Advertising Reports.....................5

        8.0  Clear All Files for New Fiscal Year...................5

        9.0  Exit..................................................5

        10.0  Files................................................5

        11.0  License Agreement....................................6




                      Advertising Response Manager (ARM)
                               Shareware Version

                     Introduction, Installation and Setup    

        1.0  INTRODUCTION 
                                 
        1.1  General Description 
                                 
        A software sales and marketing management tool designed to 
        provide:             
                                                                                
        o  Track advertising response and effectiveness--print reports 
           of advertising statistics, including cost per inquiry and 
           number of responses per advertisement
                                                                                
        o  Paperless filing of data--instantly available 
                                                                                
        Advertising Response Manager (ARM) is a software package that 
        enables marketing personnel to easily and effectively use a 
        personal computer to track the response to advertising 
        campaigns.  ARM should increase the efficiency of your  
        organization and provide better documentation on which to base 
        business decisions.                              

        ARM is a menu driven, easy-to-use program that does not 
        require any computer expertise.  It is designed to be used by 
        secretarial personnel.  Questions and responses are in English.
                                                                       
        
        
        
        
        
        
        
        
        
        













                                       1

        1.2  Prerequisites                                     
                                                               
        The minimum system required to operate ARM is:         
                                                               
          a.  Computer with MS- or PC-DOS                      
                                                               
          b.  512K RAM                                         
                                                               
          c.  Hard disk and 5.25" floppy disk drive    
                                                               
          d.  Printer                                          
        
        Note: ARM may be operated on a dual floppy system provided one 
        of the floppy drives is high capacity (720KB or greater) to 
        hold the ARM programs.
                                                               

        1.3  Disk Contents                                             
                                                                       
        ARM is supplied in archived file on a 360KB floppy disk.  
        AINSTALL.BAT is the program that installs ARM on your hard 
        disk in a directory named ARM.  This program also places 
        ARM.BAT in the root directory of your hard disk enabling one 
        to start using the Argonaut Systems Advertising Response 
        Manager by typing ARM while in the root directory.      
                                                 

        2.0  INSTALLATION                        
                                                 
        You need the CONFIG.SYS file on the boot disk to properly run 
        ARM.  If CONFIG.SYS already exists on your disk, modify the 
        file by adding the following lines using your word processing 
        program or EDLIN:                             
                         
                                   FILES = 24      
                                   BUFFERS = 24    
                                                   
        If CONFIG.SYS does not exist on your boot disk you may copy it 
        from ARM disk   Place disk into drive A.  Select drive A by 
        typing:                            
                    
                                   >A: [Enter]  
                                                
        Follow this by typing:                  
                                                
                          A>COPY CONFIG.SYS C:\ [Enter]
                                                       
        Where C:\ represents the root directory of the disk to which 
        you wish to copy ARM.  If the disk is not C, change the letter 
        to the appropriate one.                               
        




                                       2

                
        Begin installation of ARM with the disk in drive A and type:                
                    
                               A>AINSTALL C: [Enter]   
                                                       
        This operation will install ARM on your disk.  If the 
        designation of your drive is not "C:", you must type the 
        appropriate drive letter.      
                                       
        ARM will be installed in a directory called ARM.  ARM.BAT will 
        be in the root directory of drive C.  Use ARM by selecting 
        drive C and typing:     
                                
                                  C>ARM [Enter]   
                                                  
        3.0  GETTING STARTED                      
                                                  
        After typing ARM [Enter] to start ARM the initial ARM menu 
        will be displayed on the monitor.  This menu will reappear 
        after each function is completed.  Select a function by 
        pressing the letter preceding each function in the menu or by 
        moving the arrow keys to  highlight the desired function and 
        pressing Enter.  This same technique is used for selections in 
        all menus within ARM.  Areas that require operator entry are 
        highlighted.  Most messages (instructions, notes, etc.) appear 
        at the bottom of the monitor screen.  If you have a color 
        adapter (CGA or EGA) and a color monitor ARM will display in 
        color.    
                
        Setup should be entered prior to proceeding with other ARM 
        functions since this data is used in some of the other 
        functions.                                    
             
        Observe case of typed entries when searching for files, e.g., 
        a search for "Joe" will not be successful if you type "JOE".  
        The complete word is not necessary for a search, e.g., "Joe" 
        would be found if you typed "J" as well as  all other names 
        that begin with "J" in the file.                                
             

        4.0  ENTERING SETUP DATA   
                                   
        Press A when the initial ARM menu is displayed on the monitor 
        screen.           
           
        Input your company or organization name.  If you are limited 
        for space on your hard disk it is recommended that you store 
        history files on floppy disks, i.e., press A or B in response 
        to the "Disk drive letter..." heading.           
               
        After this last entry the program returns to the initial ARM 
        menu.            
               

        
                                       3

        4.1  Exit to DOS
        
        Press C to exit ARM and to return to DOS.
                

        5.0  ADVERTISING RESPONSE DATA

        Press B to enter the Data Entry and Reports menu.  Press A to 
        enter or edit advertising response routine from the Data Entry 
        and Reports menu.
                                                                                

        6.0  ENTER/EDIT ADVERTISING RESPONSE DATA                                       
                                                                                
        Press A and the screen will display the following:                              
                                                                                
        Media name                                                                      
        Bingo or ad no.                                                                 
                                                                                
        The media name is the name of the advertising media or 
        vehicle, e.g., EDN.  After entering the media name, input the 
        "bingo" or advertisement number from the magazine.  If this is 
        the first entry for this advertisement the screen will display 
        the following:

        (Media name)        Issue date  04/07/89  Bingo or ad no. (#)

        Product or description________________________________________

        (AD=Advertisement, NR=News Release, PS=Product Survey, 
        TA=Technical Article, RC=Reply Card)  Type__

        No. of Inquiries_______________ Inquiry date 04/20/89

                                                                                
        The media name and the bingo number that you entered will be 
        displayed.  Enter the issue date, the product advertised or 
        description of the advertisement, a two letter code 
        representing the type of promotion (AD for advertisement, NR 
        for news release, etc.), the number of inquiries, the date of 
        the inquiries (today's date is shown as default, but may be 
        changed as necessary), the cost of preparing the 
        identification number that you can assign to the advertisement 
        for your own records.  The identification number may be used 
        to recall the data in lieu of the bingo number if none exists.
                                                                                
        If you have made previous entries for a particular 
        advertisement the existing data will be displayed followed by 
        the prompt:                                       
                                                                                
        Edit this existing data: Y,N 
                                                                                
        Press Y [Enter] to edit the existing data.  Press N [Enter] to 
        enter new number of inquiries and the date of the inquiries. 
          
                                       4

        You may continue to make entries for additional advertisements 
        until you press in error you have an opportunity to return to 
        data entry by responding affirmatively when prompted "Any more 
        entries? Y,N."                                   
                                                                                

        7.0  DISPLAY/PRINT ADVERTISING REPORTS
                                                                                
        Choose advertising reports by pressing B when the data entry 
        and reports menu is displayed.  Advertising reports may be 
        selected for the entire list, the media, the product, the type 
        of advertisement or the ad/mailer identification number that 
        previously assigned.  Press the appropriate key for the report 
        desired.  The report may be displayed on the screen or printed.
        The report will display the media name, issue, type, 
        identification number, product advertised, last response date, 
        number of responses to date, preparation costs, placement costs, 
        the cost per inquiry and the cost totals.

        
        8.0  CLEAR ALL FILES FOR NEW FISCAL YEAR
                                                                                
        To clear files of all of last year's data when a new fiscal 
        year is beginning press C.  If you pressed C in error you have 
        an opportunity to exit the deletion routine when the screen 
        message is:                                    
                                                                                
        Are you sure? Y,N  
                                                                                
        Press N to return to the Data Entry and Reports menu.  Press Y 
        to proceed with deletion of last year's data.                                                   
                                                                                

        9.0  EXIT  
                                                                                
        Press D to return to the initial ARM menu.
        

        10.0  FILES

        The files included with ARM are:

                AINSTALL.BAT    Installation batch file

                ARM.BAT         Batch file to start ARM

                PKXARC.COM      Program to unarchive ARM.ARC

                ARM.ARC         Archived ARM programs


        



                                       5

        11.0  LICENSE AGREEMENT

        Advertising Response Manager (ARM) software is copyrighted by 
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




































                                       6
```
{% endraw %}

## FILE1562.TXT

{% raw %}
```
Disk No: 1562                                                           
Disk Title: Advertising Response Manager                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Advertising Response Manager (ARM)                       
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: 512K RAM and a hard drive.                        
                                                                        
Advertisers, there is an easy way to see if your advertising dollars    
are paying off.  ADVERTISING RESPONSE MANAGER (ARM) lets you keep track 
of the response to all types of advertising and promotional campaigns.  
ARM can handle advertisements, news releases, product surveys,          
technical articles, reply cards, or anything else you use as            
promotional material.  ARM gets you started with menus that prompt you  
for everything from product information to advertising costs.  Once     
your advertising and promotional pieces are entered, another section of 
the program allows you, or your administrative support, to keep track   
of responses.  You do not need to be a computer or advertising guru to  
effectively use ARM.                                                    
                                                                        
The best part about ARM is the information you get out.  You can look   
at how much you spent on advertising overall, or by publication, by     
product, by type of media, or by individual piece.  You can look at     
responses based on the media name, issue, type, identification number,  
product advertised, last response date, or number of responses to date. 
                                                                        
One of the best things about ARM is that it allows you to easily plug   
your data files into any other spreadsheet or database program that     
uses dBase files.  With arm, you can finally see what you're getting    
for your advertising dollar.                                            
                                                                        
File Descriptions:                                                      
                                                                        
AINSTALL BAT  Installation program for archived ARM files.              
ARM      ARC  Program and data files condensed.                         
ARM      BAT  File to start ARM once installed.                         
ARM      DOC  Instruction manual on disk.                               
CONFIG   SYS  Recommended configuration file.                           
PKXARC   COM  Unarchiving utility.                                      
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #1562  ADVERTISING RESPONSE MANAGER >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type:  AINSTALL (press enter)                     ║
║                                                                         ║
║ To print the documentation, type: COPY ARM.DOC PRN (press enter)        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1562

     Volume in drive A has no label
     Directory of A:\

    AINSTALL BAT      1015   4-09-89   7:15a
    ARM      ARC    254121   4-16-89  10:07a
    ARM      BAT        24   4-09-89   7:14a
    ARM      DOC     17046   4-16-89   8:30a
    CONFIG   SYS       128   3-16-88   8:40p
    FILE1562 TXT      3479  10-19-89   2:20p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       542  10-19-89   6:47p
    PKXARC   COM     12242   4-27-87
            9 file(s)     288635 bytes
                           28672 bytes free
