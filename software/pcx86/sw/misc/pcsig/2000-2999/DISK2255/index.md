---
layout: page
title: "PC-SIG Diskette Library (Disk #2255)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2255/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2255"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCBILLING"

    Free yourself from some of the necessary clerical tasks of running a
    small business with PCBILLING.
    
    Using a simple data entry screen, PCBILLING prompts you to enter
    billing information -- who your clients are and what they are being
    billed for, and prints their invoices. Once an invoice is sent,
    PCBILLING remembers it. If payment is not received within 30 days, it
    prints a past-due notice automatically, and if there is no payment
    after 60 days, a delinquent notice is printed.
    
    Instruct PCBILLING to report on outstanding bills or summarize
    receipts, receivables, or bad debts.
    
    PCBILLING is menu-driven for ease of use and comes with a set of
    demonstration files to assist you in getting started.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BILL.DOC

{% raw %}
```

























	       ******   *****  ******   **  ***  ***   **
		**  ** **   **  **  **       **   **                      *
		**  ** **       **  ** ***   **   **  ***  ** ****   *****
		*****  **       *****   **   **   **   **   **  **  **   **
		**     **       **  **  **   **   **   **   **  **  **   **
		**     **   **  **  **  **   **   **   **   **  **   *****
	       ***      *****  ******  **** **** **** **** ***  ***  *
								     *****
	       **************************************************** **   **
	       ****************************************************  *****

	       Release 2.2

	       Copyright 1988, 1989, 1990 -- Brad Strausbaugh
	       All Rights Reserved



				      PCBilling
					v2.2

		   Copyright 1988, 1989, 1990 -- Brad Strausbaugh
				 All Rights Reserved


               INTRODUCTION

               PCBilling is an easy-to-use invoicing  system  designed
               for  the  small  business  person who relies on billing
               clients to collect revenue.  It runs on any IBM/PC, XT,
	       or  AT  with  at  least  one  floppy  disk  drive and a
               printer that uses standard 9-1/2 by 11 continuous  feed
               computer  paper.   The  only other supply you will need
               are  #10  window  envelopes  commonly  found  in   most
               stationary stores.


               THE SHAREWARE CONCEPT

               If you find PCBilling a helpful tool in  managing  your
               business,  please fill out the registration form at the
	       end of this document and send it, along with $25 to the
	       author.  You will receive all major  PCBilling upgrades
	       as they are published.


               WHAT PCBilling DOES

               PCBilling has three primary  functions  that  free  you
               from  some  of  the  clerical  tasks in running a small
               business.

	       Invoicing:    Using a simple data entry screen
			     PCBilling lets you enter billing
			     information -- who your clients
			     are and what they are being billed
			     for -- and prints off their
			     invoices.

	       Monitoring:   Once an invoice is sent PCBilling
			     remembers it.  If payment is not
			     received within 30 days, it prints
			     off a past-due notice automatically,
			     and if there is no payment after 60
			     days a delinquent notice is printed.

	       Reporting:    You can instruct PCBilling to report
			     on outstanding bills or to summarize
			     receipts or receivables or bad debts.
			     It's just a matter of selecting the
			     report you want from the Report
			     pull-down menu.


                                                                Page 2
	       HOW PCBilling FILES YOUR INVOICES

               PCBilling maintains three data files, the invoice  file
               where information on outstanding invoices is monitored,
               the  receipts  file  where   receipt   and   bad   debt
               information  is  kept for historical reporting, and the
               header file where PCBilling keeps system information.

               The important thing to remember is that PCBilling  puts
               each  new invoice in the invoice file, then moves it to
               the receipts file only when payment is received or when
               you flag it as a bad debt.

                         Key In Invoices
                               |
                               |
                               V
                      _____
                     /     \________________
                     |                      |
                     |    Invoice File      |
                     |                      |
                     |                      |
                      ----------------------
                               |
                               V

                         Payment Received
                               or
                        Flagged as Bad Debt

                               |
                               V
                      _____
                     /     \________________
                     |                      |
                     |    Receipts File     |
                     |                      |
                     |                      |
                      ----------------------


               In the receipts file bad debts are  distinguished  from
               received  invoices  by  having  no  Date Received.  The
               various reports will select only the invoices  relevant
               to that report.


               GETTING STARTED

	       After you've extracted BILL22.ARC you should  have the
               following files.

                    BILL.EXE      The PCBilling program
                    BILL.DOC      This documentation file
		    BRUN30.EXE    Run-time module used by BILL.EXE
                    HEADER.DAT    PCBilling system information
                                                                Page 3


                    INVOICE.DAT   The invoice file
                    RECEIPTS.DAT  The receipts file

	       Put the BILL22.ARC diskett in a safe place and use only
               these extracted files from now on.


               THE SYSTEM DATE

               PCBilling relies on your PC's  system  date  to  assign
               invoice  dates.   You  may  have  a PC that maintains a
               current system date even when it is turned off.  If you
               do  not,  please  set the system date with the DOS DATE
               command before you run PCBilling.



	       GETTING AROUND IN PCBilling

               To  use  PCBilling  just  put  the  diskett  with   the
               extracted  files  on  it  in  dive  A,  and  enter  the
               following command.

                      A> BILL

               The PCBilling banner will appear.  Just press  any  key
               to  continue.   The banner will disappear and the first
               item on the menu bar at the top of the screen  will  be
               highlighted  in reverse video.  Notice too that a brief
               help line appears at the bottom of the screen.  A  help
               line  will  always  be present there and it will change
               automatically as needed.

               You  can  change  the  highlighted  menu  bar  item  by
               pressing  the  left  or  right arrow key on the numeric
               keypad (with the Num-Lock key off) or by  pressing  the
               first  letter  of  the item you want.  When the desired
	       menu item is highlighted  press the Enter key and  that
               item will be invoked.

               Selecting the Report,  PrintBills  or  Setup  menu  bar
               option  results  in the appearance of a pull-down menu.
               Like the menu bar, the current item on  the  pull-down.
               menu  is  highlighted in reverse video.  You can change
               it with the up and  down  arrow  keys  on  the  numeric
               keypad  or by pressing the first letter of the item you
               want.  When  the  desired  item  is  highlighted  press
	       Enter to select it.  To exit from a pull-down menu  and
               "stepback" to the menu bar press the Escape key.



               THE DEMO DATA

               For the purpose of illustration, your PCBilling  system
                                                                Page 4


               disk   comes  with  the  invoices  and  receipts  of  a
               ficticious computer system  consultant.   This  example
               will  be  helpful  when  you  first  go  through  these
               instructions.  You can run  reports,  update  invoices,
               etc,  without fear of losing important data.  Remember,
               you can always create a new  copy  from  your  original
	       BILL22.ARC diskett.

               Later, when you are ready to enter your  own  invoices,
               you  can  invoke  the Setup option from the menu bar to
               clear the demo data from the PCBilling database.   Just
               how to do that will be explained in the Setup section.


               REPORTS

               PCBilling comes complete with six standard reports.  To
	       create a report just invoke the Report  option from the
               menu bar and  select  the  report  you  want  from  the
               pull-down menu.

               The year-to-date reports will prompt you for an "As of"
               date.   Enter  the  date in mm/dd/yy format.  PCBilling
               will generate the report and display it on the  screen.
               You can send the report to your printer by pressing the
               P key, or return  to  the  Reports  pull-down  menu  by
               pressing  the  Escape  key -- remember the help line at
               the bottom of the screen.  All other reports  are  sent
               directly to your printer.

               Go ahead and run these reports with the demo data.


               UPDATE

               You can use the Update option to key in a new  invoice,
               or  to  move  and  invoice from the invoice file to the
	       receipts file.  You can also modify or delete invoices.

               The invoice file can  contain  up  to  200  outstanding
               invoices.   Each  invoice is uniquely identified by its
               Invoice Number.   When  an  invoice  is  moved  to  the
               receipts  file or deleted, that number is opened up for
               a new invoice.

               When you select the Update option from  the  menu  bar,
               the invoice update screen is pulled down and it prompts
               you for an Invoice Number, If you want to create a  new
	       invoice,  just  press  the  Enter  key   and  the  next
               available Invoice Number will be assigned.

               Notice also that PCBilling automatically fills  in  the
               Date  of  Bill with today's date, the Date Due with the
               date 30 days hence, and the Date  Delinquent  with  the
               date  60  days  hence.  The column of dates just to the
                                                                Page 5


               right labeled Date Logged  will  contain  blank  dates.
               These  are  filled  in  later  by PCBilling to log when
               invoices and notices are printed off in the  PrintBills
               menu  bar  option.  So all you have to do is enter your
               client's name and address and the items he  or  she  is
               being billed for.

               If you want to call up and existing invoice, enter  its
               Invoice  Number.  If it exists it will be called up and
               PCBilling will ask whether you want to mark it  Payment
               Received or Bad Debt and move it the the receipts file,
               or whether you want to modify or delete it.  If it does
               not  exist  PCBilling  will  accept  data entry just as
               though it had assigned the Invoice Number itself.



               PRINTING BILLS

               With the PrintBills menu bar option you can  align  the
               paper  in  your  printer,  printoff  invoices, past-due
               notices, and delinquent notices, and log  the  invoices
               and notices sent so they won't be repeated.

               To print  invoices  and  notices  PCBilling  scans  the
               invoice  file  and  checks each invoice's Date of Bill,
               Date Due, and Date Delinqent to determine if an invoice
	       or past-due notice or delinquent notice should be sent.
               Then it prints the appropriate document.  The  client's
               name and address is always positioned on the invoice or
               notice to be visible  throught  the  window  of  a  #10
               envelope when folded in three sections.

               If your printer jams, or fails for any reason to  print
               ALL  appropriate  invoices and notices, just re-run the
               print option.  Only after printing is successful, go to
               the Log Invoices/Notices Option.

	       THE LOG INVOICES/NOTICES OPTION IS VERY IMPORTANT.   It
               scans  the invoice file just like the print option did,
               but instead of printing, it logs  today's  activity  on
               the  selected  invoice records, so that, in the future,
               PCBilling will not print duplicate bills  and  notices.
               YOU  SHOULD  ALWAYS  RUN  THIS  OPTION IMMEDIATLY AFTER
               SUCCESSFULLY PRINTING INVOICES AND NOTICES.


               SETUP

               You can use the Setup  menu  bar  option  to  do  three
               things;  (1)  set the header that appears at the top of
               printed invoices and  notices;  (2)  clear  the  entire
               PCBilling database; and (3) set the system date.

               When you select the Set Header option,  a  window  will
                                                                Page 6


               prompt  you  for the name, address and phone number you
               what to appear at the top of invoices and notices.   If
               you  are  using  printer  paper  with  your  letterhead
               pre-printed at the top, just fill in this  window  with
               blanks.

               The  Clear  Entire  Database  option  will  clear   all
               invoice,  receipt,  and  header  information  from  the
               entire PCBilling database.   Its  main  purpose  is  to
               clear  the  demo  data  when  you  are  ready  to start
               entering your own invoices, If you use it for any other
               reason, please exercise caution.

               The Set System Date option lets you change  the  system
               calendar  clock  to the current date.  This is the date
               PCBilling uses  to  assign  the  invoice  dates.   Your
               system  may  have  an internal clock that maintains the
               current date even when your machine is turned off.   If
               it  does  not, use this option to set the current date,
               or use the DOS DATE command before you run PCBilling.



               QUIT

	       The  Quit  menu  bar  option  simply   terminates  your
               PCBilling interactive session and returns you to DOS.
                                                                Page 7


				  REGISTRATION FORM

				   PCBilling v2.2


               If  you  find  PCBilling  helpful  in   managing   your
	       business and would like to  receive all  major  program
	       upgrades as they are published,  please  fill out  this
	       registration form and send it, along with $25 to...

                    Brad Strausbaugh
		    350 E. Del Mar Blvd #311
                    Pasadena, Ca  91101


			 Name: _______________________________________

		       Street: _______________________________________

	       City/State/Zip: _______________________________________

			Phone: _____________________

	       Where did you get your copy of PCBilling?

			       _______________________________________

	       I  have  taken  great  care  to insure  that  PCBilling
	       performs  as  described  above.   Be advised,  however,
	       that  by using PCBilling,  you  agree  the author shall
	       not be held legally liable for the program's behavior.

	       Please  use  the  rest  of this  page  (and the back if
	       needed)  to  jot  down  any  comments  you  have  about
	       PCBilling.  Your feedback is most welcome.

```
{% endraw %}

## FILE2255.TXT

{% raw %}
```
Disk No: 2255                                                           
Disk Title: PCBilling                                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: PCBilling                                                
Author Version: 2.2                                                     
Author Registration: $25.00                                             
Special Requirements: Standard continuous-feed paper printer.           
                                                                        
Free yourself from some of the clerical tasks in running a small        
business with PCBILLING.                                                
                                                                        
Using a simple data entry screen, PCBILLING prompts you to enter billing
information -- who your clients are and what they are being billed for, 
and prints their invoices.  Once an invoice is sent PCBILLING remembers 
it.  If payment is not received within 30 days, it prints a past-due    
notice automatically, and if there is no payment after 60 days a        
delinquent notice is printed.                                           
                                                                        
You can also instruct PCBILLING to report on outstanding bills or to    
summarize receipts, receivables, or bad debts.                          
                                                                        
PCBILLING is menu-driven for ease of use and comes with a set of        
demonstration files to assist you in getting started.                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2255

     Volume in drive A has no label
     Directory of A:\

    BILL     DOC     16354   1-24-90   4:57p
    BILL     EXE     85184   1-27-90  11:02a
    BRUN30   EXE     70680   4-07-87  10:48a
    HEADER   DAT       250  11-30-89   5:27p
    RECEIPTS DAT       865  12-31-89   8:17p
    INVOICE  DAT    142800  12-31-89   8:16p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       496   1-01-80   2:33a
    FILE2255 TXT      2221   7-16-90   9:37a
            9 file(s)     318890 bytes
                           37888 bytes free
