---
layout: page
title: "PC-SIG Diskette Library (Disk #1034)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1034/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1034"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAY-TIME PAYROLL SYSTEM (ALSO 963)"

    For most of us, payday is one of the most important times of the week.
    Shouldn't you do your employees, and yourself, a favor by making this
    time one of the most error-free periods as well?
    
    PAY-TIME figures out your company payroll and writes the paychecks for
    your employees. Several sample data files are included to familiarize
    you with the program. Store information for each employee, including
    the person's name, mailing address, employee ID, Social Security number,
    and payroll status. Once all the information for the tax files are
    entered, you can edit, display, add, delete, and print the records.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1034.TXT

{% raw %}
```
Disk No: 1034
Disk Title: Pay-Time Payroll System (#963 Also)  (Disk 2 of 2)
PC-SIG Version: S3

Program Title: Pay-Time Payroll System
Author Version: 3.00
Author Registration: $25.00
Special Requirements: Hard drive, printer, and NEBS 9024 check stock.

For most of us, payday is one of the most important times of the week.
Shouldn't you do your employees, and yourself, a favor by making this
time one of the most error-free periods as well?

PAY-TIME figures out your company payroll and writes the paychecks for
your employees.  Several sample data files are included to familiarize
you with the program.  Store information for each employee, including
the person's name, mailing address, employee ID, Social Security number,
and payroll status.  Once all the information for the tax files are
entered, you can edit, display, add, delete, and print the records.

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
║             <<<<  Disk No 1034 PAY-TIME (Disk 2 of 2)  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: PRNTDOC (press enter)  ║
║                                                                         ║
║ To run the program, Type: PAY (press enter)                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MSG1.TXT

{% raw %}
```



			    PAYTIME - PAYROLL PROGRAM

		This batch file will print the manual for PAYTIME.

	Be sure the README.DOC is on this drive and your printer on line.


	      >>>>>>   press <Ctrl> and <Break> to stop.   <<<<<<
```
{% endraw %}

## README.DOC

{% raw %}
```



                PAY-TIME PAYROLL PROGRAM DOCUMENTATION.

                           Licence Agreement


The material described herein is copyrighted LICENSED MATERIAL and the
property of Datatex Publishing.

This material is being distributed as a Shareware product.  You are
encouraged to copy and distribute the product, except assembly language
source code, with your friends and associates, provided you do not charge
any fee.  If you decide to use this product, you are urged to become a
registered user.

Under no circumstances may this product be sold without the express written
permission of Datatex Publishing. The material is being provided "AS IS"
without warranty of any kind, either expressed or implied. The entire risk
as to quality and performance of this material with you.  In no event shall
Datatex Publishing be liable to you for any damages including any lost profits,
lost savings or other incidental or consequential damages arising out of
the use of this material even if we have have been advised of the
possibility of such damages or any claim by any other party.

Use of this product indicates your acceptance of these terms and
conditions.

                        Registration Benefits

1. Receive a printed manual

2. Receive a new distribution diskette with your registration number

3. One free major update


5. A $5.00 commission for each new registered user that provides
   us with your registration number.



Microsoft  is a trademark of Microsoft Corporation
Microsoft Quick Basic is a product of Borland International
















2
                       Paytime Payroll Program
                          Registration Form
                              
Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Paytime Payroll Program Version 3.00 - 111 

Payment for Registered Paytime Payroll Program manual, software and
distribution diskette:


Send _______ copies at $35.00 each ___________._______


                             TOTAL ___________._______


[ ] Check enclosed   [ ] Money order enclosed





                            Datatex Publishing
                               Rt.1 Box 43a
                              Buna, TX. 77612
                              (409) 994-5118



 









3
                           Datatex Publishing
                              Rt.1 Box 43a
                             Buna, TX. 77612
                             (409) 994-5118
  
                            PRODUCT FEEDBACK
Help us make our product better by completing and returning this form.
Your feedback will help us to improve future releases of this product.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Paytime Payroll Program  Version 3.00 
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Comments and suggestions:

List additional procedures and functions, corrections or enhancements.






















4
                           DOCUMENTATION FEEDBACK

Help us make our documentation better by completing and returning this
form.  Your feedback will help us improve future products.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Paytime Payroll Program  Version 3.00 
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Please rate the documentation on a scale of 1 to 10 where 1 is poor, 5
is average and 10 is excellent.

___  Completeness        ___  Usability
___  Accuracy            ___  Readability
___  Organization        ___  Understandability


Was the demo program useful? ___ Yes  ___ No
Is information easy to find? ___ Yes  ___ No
Were errors found in the documentation? ___ Yes ___ No
If yes, please give page number and description of the error.


Is the manual ____ too long?
              ____ too short?
              ____ about right?

Please write other suggestions or comments on the back of this form.

          



     




      

5
       Thank you for using PAYTIME PAYROLL PROGRAM.this is a fully 
       functional program.Created on a pc-compatible computer ,with 
       640k,monochrome monitor,Ebson fx-85 printer,40 meg hard disk 
       PayTime was written and compiled using Microsoft Quick Basic.
       PayTime is designed to be used on a hard disk. 
       Elaborate graphics and pull down menus have been sacrificed
       for simplicity and and to keep Paytime from using unnecessary
       disk space.
     
       PayTime is intended to be a simple program designed for: 
     
       * small business's that have less than fifty employees. 
       * Companies that don't need complicated payroll accounting
         systems. 
       * Persons who are new to computer systems.
       * Persons who are in need of a program that can be easily 
         updated as tax laws and tax rates change. 

       Every effort has been made to insure there are no bugs in this 
       program, but experience shows that there will be problems that
       we are unaware of. Should you have problems using PayTime, we
       beg for your indulgence and assistance in correcting these 
       problems. You can be of assistance by notifying DataTex of 
       problems you encounter,and also submitting suggestions for 
       enhancing efficiency. Persons who make usuable suggestions will
       be given credit by recieving an extra major update,Free.
       
        We have tried to make this program as simple as possible, but
       we highly recommend that users have some experience in DOS operations
       before using this program.
  
       The payroll calculation program does not include a module to 
       figure Earned income credit. If you are in need of EIC
       calculations, then request this feature when you register 
       your copy of PayTime. 
        PayTime can handle only one pay period at a time. For example
       if your pay period is weekly, then the program can not handle
       bi-weely,monthly and so on. If you have need of different pay
       periods,then you will have to setup a different directory and
       use PayTime in that directory.
        You will notice that I use database terminology very loosely.
       For example I often use file and record interchangeably. A file
       is a group of records. Sometimes, files in PayTime contain only 
       one record .Thats why we use the word database as a catch all 
       phrase .

      




6
                  GENERAL SET UP PROCEDURE.

       CREATE CONFIG.SYS FILE.
       A config.sys file will set the number of open files that can 
       be used at the same time. This program will have several pro-
       grams open at the same time, so the config.sys file should be  
       set to handle 20 open files. The default number of open files
       is normally 10.
       The config.sys file should be placed in the root directory.
       Only one config.sys file should be used on the computer system.
       Also when you install a new config.sys file,the computer will
       have to be turned off and back on ,to make use of the new file. 


       If you aren't familar with the procedures necessary to create
       a config.sys file then use the one on the PayTime program disk.
       Use the 'copy' command to copy the file to the root directory.
       
       Example: from the C: drive prompt.
                Copy A:config.sys <return>

       MAKE A DIRECTORY:
       Usually major programs are installed on separate directories.
       A separate directory keeps the root directory from becoming
       to full and hard to read. A separate directory is much safer to
       to use . If you make a major mistake, normally,it will not
       effect programs or data in other directories.
       Example: from the C: drive prompt.
                mkdir pay.dir
                   or
                md pay.dir
       After you have created the pay directory then go to the directory.
       Example: chdir pay.dir
                     or
                cd pay dir 
       When you are in the pay.dir, then load all programs and files 
       from PayTime disks. Assuming PAYTIME is in drive a:
       Example: copy a:*.*
       after all files from first disk have been copied to the fixed
       disk,then copy all files from the second PayTime disk. 
       
       
                          PROGRAMS

          PAYTIME.EXE - Main menu. Allows access to(Create Tax rates 
                       Menu/ view and modify menu / Print menu).
          CREMEN.EXE - Create tax rates(income tax/fica/futa/suit/overtime).
          VIEMEN.EXE - View modify/(create employee,company files)/del
                       /undel) menu.
 

7
          FIGPAY.EXE - Calculates pay (gross/tax/net..etc).
          PRTPRG.EXE   Prints employee base data,(name,address,pay 
                       rate,etc..).
                       Prints employee numeric data,(ytd totals ,etc)
                       Prints company base data.
                       Prints company numeric ytd totals.
                       Prints pay period totals.
                       Prints all payroll calculations.
          VIEWADD.EXE - View modify/(create employee,company files)/del
                       /undel) menu.
                       View modify/create/del/undel employee
                       constant data.
                       View modify employee year to date totals.
                       View/modify/create company constant data.
                       View/modify company year to data totals.
                       View and modify pay period totals.
                       View all payroll calculations.
         CREPER.EXE  - Select data to print on pay period totals.
        FLATTAX.EXE  - Enter FICA/FUTA/SUIT/ tax rates/overtime info 
                       and data for error trapping.
         ERRCHECK.EXE- Error checking program.
         CREINC.EXE  - Enter income tax tables into income tax file.
         CKWRT.EXE   - Check writing program/position data on check
                       select data to print on check stub.
         INITIAL.EXE - Deletes pay data and Resets pay counters file.
         BRUN20      - Runtime prg.(c) copyright MICROSOFT CORP.  
                       1982,1983,1984,1985,1986

                          Files

           PAY1  - Employee base data(name/add/pay rate/allowances..etc).
           PAY2  - Employee numeric data file(year to date totals). 
           PAY3  - Company base data(name/add/ein number).
           PAY4  - Company numeric data(year to date totals).
           PAY5  - Pay period totals(totals for each pay period). 
           PAY6  - All transactions(each individual pay calculation).
           PAY7  - Header files.
           PAY8  - Record counters .
           PAY9  - Employee Index.
           PAY10 - Tax rates(FICA/FUTA/SUIT /overtime info).
           PAY11 - Income tax tables.
           PAY12 - Data to print on check stubs.
           PAY13 - Data to print on Pay period totals print out.
           PAY14 - Counters for check writing.
           PAY15 - Field names.
           PAY16 - Positioning data on checks. 
           Pay17 - Header file for company base data.
           Pay18 - Header file for figpay
     
8
                    Using program with sample files.

       create employee records - There is one employee record on the
       sample file. To start entering data goto view/modify employee
       records and modify the record by entering your own data.The 
       first three characters in the employee number are coded for
       program use. (look at create records).
        
       create company record -there is only one company record allowed
       for each payroll system. goto the view modify menu and create
       the company record .
        
       create income tax files     - can use current file (for 1988 - 
       weekly pay period)
       
       pay period print out - can use current pay period print out file
       or got to main menu and change these to your own selection

       check stub data - can use current stub data file or goto ckwrt
       to change this data to your own selection.
      
       All other necessary files created automatically(index,counters...etc.).



************* SETTING UP PROGRAM FROM ABSOLUTE BEGINNING ********************
Programs main menu

              PAYTIME PAYROLL PROGRAM         copyright 1987,1988,1989         
                   By: Ron Spoonemore   P.O.Box 805   Buna,Tx. 77612           
                
                  MAIN MENU.       Date:01-01-1980                      
                                                                              
        F1  - View / Modify / Add / Create / Del / Undel Records.             
        F2  - Print Records.                                                  
        F3  - Calculate Payroll.                                              
        F4  - Set Date.                                                       
        F5  - Delete Current Pay Data And Reset Counters.                     
        F6  - Create Tax Rates/Tables.                                        
        F7  - Check Write.                                                    
                                                                              
        F10 - End Program.                                                    
---------------------------------------------------------------------------     

                                                        







9
F1  - View / Modify / Add / Create / Del / Undel Records.             
      This menu selection allows access to the View/Modify Menu

F2  - Print Records.                                                  
      This menu selection allows for printing of records.
 
F3  - Calculate Payroll.                                              
      This menu selection allows access to Payroll Calculations Menu. 
      Payroll calculations is program that figures pay,income tax....

F4  - Set Date.Set date, if it hasn't been set previously.                      

F5  - Delete Current Pay Data And Reset Counters.                     
      Removes current payroll data,does not remove tax rates files
      
F6  - Create Tax Rates/Tables. Tax rates/tables for income tax, social
      security , federal employement tax, state employeement tax......         
       
F7  - Check Write. goes to checking writing program                            
        
F10 - End Program.Returns to menu system if one is installed, else goes to
      dos. This is a break to DOS not a <shell> command.                       


     DELETE CURRENT PAY DATA AND RESET COUNTERS.
       If there are old data records and you need to set up a new payroll
     records file, use menu selection <F5> from main menu.



                           Pay1(employee base data)
                           Pay2(employee numeric data)
                           pay3(company base data)
                           pay4(company numeric data)      
                           Pay5(pay period totals)
                           Pay6(All pay calculations)
                           pay8(program counters)
                           pay9(index file)

       deleting these records will not effect any other files such as the 
       Income Tax file, Tax Rates files.
                             

       EMPLOYEE BASE DATA
       To insure consistency enter all charaters in upper
       case. This simplifies data retrieval when searching for 
       employee numbers. Be very careful about entering data. Paytime
       has error checking routines, but it will not catch all data entry
       errors.
10
       WARNING              
       !! if character data is entered in a field that needs a number 
       !! the pay calculation program will try to figure pay from the data
       !! it has recieved,and the program will give an error message
     
       A) EMPLOYEE CODE .
         The Employee code has to contain at least three characters. These
       three characters have to be in the first three positions of the code. 
         The employee identification number has multiple uses. Entering 
       employee numbers seems complicated when first used, but because of 
       The amount of information needed for a Payroll system,it is simpler,
       for the programmer and program user, to use codes, rather than set up
       the entry modules for all necessary information.
   
       Entering first three characters.
       
       1. FIRST CHARACTER -- Can be one of two characters.
           "S" to designate a (S)alaried employee.
                      --- OR ----
           "H" to designate an (H)ourly employee.
       ! no other characters can be entered in this position ! 
      
       2. SECOND CHARACTER - used for social security purposes.
          "F" in the second position is used to designate a family member that
          does not pay social security ,otherwise this position can contain
          any alphanumeric character. If "H" is not used in this position then
          an "R" can be used. This character designates a "R"egular employee.
        
       3. THIRD CHARACTER -  used for city tax
            
          Some citys that have an income tax, have different rates for
          residents and non-residents of the city.
            The third character in the employee number should be 'R' for
          resident. Using any other character designates a non-resident.
          If your payroll system doesn't calculate city tax then you can
          use any character in this position. 
        
          Don't use 'H,S,F,R' for default characters, in first three char-
          cter positions. The program will assume you put these characters
          in these positions to direct the program to calculate payroll
          accordingly.
 

         The other 7 characters can be used for your own codes, such as 
       employee initials or numbers to designate employee seniority.
      
       Other information for employee records can be entered as prompted.
       make sure numeric entrys do not contain any commas or dollar signs.
       Example of right entry :  7000.00  or 7000
       Example of wrong entry :  $7000.00 or 7,000
       These records set up the 'Employee numeric data' records to recieve
       data.
                                               
       Four fields are absolutely necessary for the program to calculate
       payroll .
         Code
         Allowances.
         Marital status.
         Pay rate




11
       COMPANY RECORD.
        Unlike employee records the company record only has one record
       for base data and one record for year to date totals. The company
       numeric record keeps year to date totals for all pay catagories .
        This record sets up the 'company year to date' record to recieve
        data.

       federal ID.  :federal employee identification number.Number 
       issued by goverment for federal tax purposes.
      
       TAX RATES 


              tax rates - The example tax rates file holds 
                   FICA set at                         7.51%
                   soc. sec limit                      45000
                   state unemployment (SUIT)           2.31
                   limit on SUIT                       7000
                   fed. unemployment  (FUTA)           .008%
                   limit on FUTA                       7000
                   overtime pay after hours            40
                   percent for overtime pay            1.5
                   min. amt. for salaried emp.         100
                   max. amt. for salaried emp.         500
                   base hours for salaried emp.        40
                   State income tax (if flat rate)     .6
                   County income tax (if flat rate)    .05
                   City income tax (if flat rate)      1.5

       'overtime pay after hours' can be set to zero,if you do not pay
       overtime. Pay will be figured as straight time.
       minimun and maximun hours for salaried employee aren't necessary
       to figure pay, but are used as a safety to check for to much pay.
       Base hours for salaried employee aren't necessary,but are used as
       a time reference.
       
       Social security tax rate.(FICA).:insure that decimals are in 
       correct position.
       Social security tax rate for 1988 is 7.51
       example of right entry: 7.51
       example of wrong entry: 07.51 or .751 or .0751
      
       Limit on gross to pay social security.
       explanation : If an employee makes over a designated amount on
       gross pay during the year,then that empoyee is not liable to
       pay social security.
       The limit on gross for 1988 is 45000
       example of right entry: 45000 or 45000.00
       examples of wrong entry: $45,000 ,$45000,$45000.00



12
       State Unemployment Tax rate.(SUIT.)
       unemployment tax rates vary with state,type of business and 
       other factors.
       The tax rate for our company at this time is 2.31
       example of right entry: 2.31
      
       Limit on gross to pay state unemployment.
       Same explanation as above.
       the limit on gross for 1988 is 7000.
       example of right entry: 7000

       Federal unemployment tax rate(FUTA.)
       The federal unemployment  tax rate for our company at this time 
       is .008
       Example of right entry: .008
      
       Limit on futa.
       The limit on gross for futa for our company at this time is 
       7000
       example of right entry: 7000

       Over this amount of hours pay overtime(0T-hrs).
       If your company pays overtime then enter number of hours after 
       which you will pay overtime.
       Can not enter daily overtime.This number will usually be numbers 
       such as 40,80,100 etc....
       
       Percent to pay overtime.
       Enter the percentage of pay to pay for overtime.
       example: time and a half.This would be regular time plus half
       of regular time for overtime hours.
       example of right entry: 1.5
       example of wrong entry: 1.5%

       State income tax (if flat rate) Flat rate means that the tax rate
       does not need a formula or table to calculate taxes. This entry
       can contain any state tax that is figured on a flat rate. If zero
       is entered , the program will calculate these values to 0

       County income tax (if flat rate)

       City income tax (if flat rate)

       ! Warning ! These tax rates may vary for your state or company.
       Research current rates for your area and business type.






13
       CREATE INCOME TAX FILES
       Income tax(inctx.)
       (Must have circular:(IRS. publication 15 )'EMPLOYERS TAX GUIDE'
       for current year.
       The first prompt for income tax files asks for pay period.
       Length of pay period entries allowed. weekly
                                             biweekly
                                             semimonthly
                                              monthly
       The second prompt asks for withholding allowance.Withholding 
       tables can be found in 'publication 15   EMPLOYERS TAX GUIDE '
       enter allowance that corresponds to pay period and press
       enter.

       Entering income Tax Rates
       Look in EMPLOYERS TAX GUIDE (circular E ,Publication 15) and 
       locate tax table that corresponds to pay period.Enter 
       information exactly as shown. (DO NOT USE COMMA'S).Do not
       enter dollar signs or percent signs. 
        You must enter decimals in front of percentage rates.Make
       sure you use decimal in the correct position.
     
       Place cursor on dashed line [_____] for numbers you want to
       enter.Then enter amount that corresponds to that location.
        
       example:$[20______]   $[363_____]     [.15_]%

       While entering information the cursor keys can be used to 
       move around the screen.To remove unwanted charaters move
       cursor over charater to be removed and use space bar to delete
       the unwanted character.
       Be very careful about entering income tax information.Any
       numeric values entered incorrectly will give incorrect
       calculations when figuring income tax. It is easier to enter
       the amounts column by column instead of line by line.When all
       information has been entered press f1. Should you want to 
       cancel data entry press < Q > the program will be returned to 
       the main menu and the current Income Tax file will not change.
       Use figpay to test income tax information and check payroll
       calculations for correct entry.

       VIEW / MODIFY RECORDS
   
       E)mployee number:
       To display a record by using Employee number press < E >, then 
       at the bottom of screen you will be prompted to enter the 
       Employee number.  
       Enter code and press < return >
      


14
       R)ecord number:
       to display a record by record number press < R > then at the 
       bottom of function box you will be prompted to enter record
       number.
       enter number of record to view and press < return >
  
       N)ext record:
       To view next record in ascending sequential order press < N >
  
       P)revious record:
       To view record descending sequential order press < P >
      
       A)dd Record:
       To add records press <A> and enter new information. When all
       information entered into record press < F10 > to file the
       record.
       Add records is also used to create a new file after initialize
       has set record counters to zero. 

       M)odify record:
       To modify/edit a record that is displayed on screen press < M >
       and modify the record. When modification complete press <F10 >
       to file the modified record.

       D)elete
       To delete, display the record that you want deleted and press 
       < D >. Using the delete option does not remove the record from 
       the file. A code is placed in the index file to prevent the 
       record from being used in the pay calculation program.
       The file can still be viewed ,modified and printed.  

       U)ndelete 
       To undelete a record that has been deleted with the DELETE 
       option, display the record on the screen and press < U >.
       Undelete renoves the deleted code placed on a deleted record.

       ESCAPE) to cancel:
       If you are adding / modifying / viewing a record . Escape will
       allow canceling any operation on the record and leave the 
       record unchanged.                             
        
       Q)uit
       Pressing < Q > returns the program to the View/modify menu.
       The Quit option does not file records or change any record
       values. 

       Except for the Add option, the same view/modify options apply
       for other files.

15
       PRINT RECORDS
       1 - Start field selection 
       Places cursor in position to start sleecting items to print.
       Enter the number 1 for first item to print,enter 2 for second
       item..... .
       The char count display keeps track of how many characters are
       used, for each selection.
       Item selection does not have to be in sequential order. When 
       you put a 1 by item ten, item 10 will be printed first,item 2
       second.....
       2 - Compressed  OFF.
       Pressing 2 turns compressed on and off.
       Compressed  OFF, allows 80 characters(cols) to be printed before
       the printer ses a carriage return. Compress ON, allows 132 chara-
       cters to be printed without a carriage return.
       printing 132 charaters across. 
       The compressd code is for the Epson FX printer. The brand of printer
       you are using may or may not be able to print in compressed mode,
       using these code settings.(if this code is not appropriate for your
       printer, please , notify Datatex.) 

       3 - Print all records:
       Prints selected information for all records.
      
       4 - Search for records:Prints selected information for the selected 
       records.
       5 - Goto print menu:
       Returns print menu. 
       
       E)SCAPE to cancel 
       This option cancels the current print selection
       
       F10 - End Selection:
       After selecting fields to be printed, pressing F10 ends selection
       and allows  the computer to set up for printing selected fields.

       The same general instructions apply for all other print 
       modules.

       CALCULATE PAYROLL
       A)ll employees:Calculates payroll for all active employees.
       Salaried employee's pay calculations are done automatically.
       When the program retrieves a hourly employee record, it will
       prompt the user to input the hours for the pay poeriod.
       Employee records that haave been deleted will not be retrieved
       for pay calculations.
    
       S)elect employees:Calculates payroll for selected active 
       employees.
      
16
       P)ause OFF :The default setting for this switch is OFF. In this 
       position as soon as employee pay period hours are entered and 
       < enter > is pressed the program calculates pay and prints out
       the pay period totals for the employee. 
       By pressing < P > the program will wait until < enter >is
       pressed before printing pay period totals.
       This switch gives the user a chance to check the data before 
       printing.     
       
       WRITE CHECKS:
       The write checks program can be reached through the Main Menu
       or the Calculate Pay Menu.

       Print checks:
       After pay calculations are complete the information for these 
       calculations are filed on disk and used for printing checks.
       Only the most recent data is used.If new pay calculations are 
       done then the old data is deleted and replaced by the new data.
       The check writing program uses NEBS form 9024,multipurpose 
       checks.
         Using this option will print checks for all employees who have
       had pay calculated by the last use of the Calculate Pay prog-
       ram.

       Check number:
       Most printer feed checks have ascending numbers printed on the 
       checks, this option lets you enter a number of your choice.
       Each consecutive check printed will be incremented by one.
       
       Stub Data:
       Usually payroll checks have information printed on stubs for
       the employee's use.
       The Stub Data program lets the user select information to be 
       printed on the check stub.
       To select data press < S > in the check write menu. You will
       be taken to the Stub Data menu. When in the Stub Data menu 
       use the cursor key to move to the fields you want printed and
       press < C > to select data to be printed on the stub.
       There are thirty six items on the screen to select from, But
       only twenty-six items can be printed on the stub. You can 
       choose to print fewer fields .
      
       A)lign check data
       This option allows users to make small adjustments in 
       positions for information being printed on checks.  
       When the data positioning program is brought, up on the 
       screen, previous data will be displayed in the position for the
       data that will be effected.
       It is a good idea to make a back up copy of the check movement
17
       file,before making changes.The check movement file is Pay16
      
       Line spacing:
       The line spacing is set to n/72. Where n is the number of 72nds
       distance between lines.You will need to keep in mind that if 
       you change line spacing,all data positions on the check will be
       effected. Also when you move data down, all data below that 
       data will be moved down. Very small movements can cause radical
       diferences in data positions.  
       
       FEED top of check:
       This feed option controls the distance (line feeds) between 
       bottom of check stub and the check .

       moving data:
       When the check is displayed on the screen, each data item has 
       sets of closed brackets on the left side of each item. The 
       first item is for moving the data item down, the second item is
       for spacing data to the right.   
       M)ain menu


              REGRISTRATION AND GENERAL INFORMATION.
       Persons using this program should be aware of the User 
       Supported program concept and realize that the only way to 
       keep recieving quality software at bargain prices, is to 
       register programs . 
       
       The registration fee of for PayTime is $35.00. Persons who 
       use this program will find it to their benefit to register 
       with the author. This small fee is necessary for materials
       and other items that will enable the author to make this
       program more functional and professional.
       
        Do not let this request for registeration deter you from 
       submitting suggestions or asking for assistance in using this 
       program.Should you have a problem using this program it will 
       not be intentional on the  programmers part.All precautions 
       have been taken insure that users do not get trapped and have 
       to send the author money before they can make use of the 
       program. 

       Registered users needing a state income tax program  
       integrated into Pay-Time, send necessary information for their 
       state. The income tax module will be installed free. 
       Also registered users may request the program be set up 
       to use other types of checks.
                     

   Programmers, who want to customize this program for thier personal needs 
   can purchase source code for $65.00. Also Datatex Publishing will customze
   Paytime for users whgo have special needs. Contact author for details.

18
     REGISTRATION FOR PAYTIME ------------------------------------ $35.00
     SEND REGISTRATION FEE,QUESTIONS,AND SUGGESTIONS TO:
                          Ron Spoonemore 
                          P.o.box 805
                          Buna,TX. 77612
                          409-994-5118


```
{% endraw %}

## README.TXT

{% raw %}
```


              

 Thank you for using PAYTIME PAYROLL PROGRAM.this is a fully functional 
program.Created on a pc-compatible computer ,with 640k,monochrome 
monitor,Epson fx-85 printer,40 meg hard disk. Paytime was written and 
compiled using Microsoft Quick Basic.
 Elaborate graphics and pull down menus have been sacrificed for simplicity
and and to keep PAYTIME from using unnecessary disk space.
  PAYTIME is intended to be a simple program designed for, small business's 
that have less than fifty employees, Companies that don't need complicated 
payroll accounting systems and for Persons who are new to computer systems. 
 Persons who are in need of a program that can be easily  updated as tax laws 
and tax rates change.  
 Every effort has been made to insure there are no bugs in this program, but 
experience shows that there will be problems that we are unaware of. Should 
you have problems using PAYTIME, we  beg for your indulgence and assistance in 
correcting these  problems. You can be of assistance by notifying DataTex of  
problems you encounter,and also submitting suggestions for  enhancing 
efficiency. Persons who make usuable suggestions will be given credit by 
recieving an extra major update,Free. 
 We have tried to make this program as simple as possible, but we highly 
recommend that users have some experience in DOS operations before using this 
program.

  You will notice that I use database terminology very loosely. For example I 
often use file and record interchangeably. A file is a group of records. 
Sometimes, files in PayTime contain only  one record .Thats why we use the 
word database as a catch all phrase . 

REQUIREMENTS 
 
IBM or near compatible - with 256k 
DOS - with Vdisk command preferred. (will work without Vdisk.) 
Monochrome or graphics monitor.
1 - 360k  5 1/4 floppy drive or
2 - 5 1/4  floppy drives or
Hard drive.
Printer
 
 
 WHAT PAYTIME WILL DO 
 
 calculate payroll for twenty employees
 Caculate federal income tax
 Allows user to enter federal tax data
 Calculates pay for hourly employes
 Calculates pay for salaried employees
 Calculates social security tax
 Allows user to enter social security tax rate
 Calculates state employement tax 
 Allows user to enter state employement tax rate
 Calculates federal employement tax
 Allows user to enter federal employement tax rate
 Allows user to enter two optional payroll deductions 
 Prints payroll checks for pay period or single checks
 Calculates state income tax(registered version)
 Calculate county income tax(registered version)
 Calculate city income tax(registered version)
 Selection of pay period print out data.
 Selection of data to print on check-stub 
 
PROGRAM LIMITATIONS.

 The payroll calculation program does not include a module to  figure Earned 
income credit. If you are in need of EIC calculations, then request this 
feature when you register  your copy of PayTime.  
 PayTime can handle only one pay period at a time. For example if your pay 
period is weekly, then the program can not handle bi-weely,monthly and so on. 
If you have need of different pay periods,then you will have to setup a 
different directory and use PayTime in that directory. 




                         Licence Agreement
 The material described herein is copyrighted LICENSED MATERIAL and the
 property of Datatex Publishing.
  
  This material is being distributed as a Shareware product.  You are
 encouraged to copy and distribute the product, except source code, with 
your friends and associates, provided you do not charge a fee.  If you 
decide to use this product, you are urged to become a REGISTERED user. 
 
Under no circumstances may this product be sold without the express written 
permission of Datatex Publishing. The material is being provided "AS IS" 
without warranty of any kind, either expressed or implied. The entire risk 
as to quality and performance of this material rest with the user.  In no
event shall Datatex Publishing be liable to you for any damages including 
any lost profits, lost savings or other incidental or consequential damages 
arising out of the use of this material even if we have been advised of the
possibility of such damages or any claim by any other party. Use of this 
product indicates your acceptance of these terms and conditions. 

REGISTRATION BENEFITS 

1. Receive a printed manual
2. Receive a new distribution diskette with your registration number
3. One free major update
4. A $5.00 commission for each new registered user that provides us with your
   registration number.


Microsoft  is a trademark of Microsoft Corporation Microsoft Quick Basic is a 
product of Borland International. 


2 
                       Paytime Payroll Program  
                          Registration Form     


Name:    ________________________________________________________  
Company: ________________________________________________________ 
Address: ________________________________________________________
City:    ________________________________________________________ 
State:   ____________________  Zip Code: ______________  
Telephone: (_________) _________ - ________________  

 
                Paytime Payroll Program Version 3.00 - 111 
 Payment for Registered Paytime Payroll Program manual, software and
 distribution diskette:
  
Send _______ copies at $35.00 each ___________._______  
                             TOTAL ___________._______ 
 
[ ] Check enclosed   [ ] Money order enclosed



                            Datatex Publishing 
                               Rt.1 Box 43a    
                              Buna, TX. 77612  
                              (409) 994-5118   
3 
                           Datatex Publishing  
                              Rt.1 Box 43a     
                             Buna, TX. 77612   
                             (409) 994-5118    


 PRODUCT FEEDBACK Help us make our product better by completing and returning 
this form. Your feedback will help us to improve future releases of this
software. 
 
Name:________________________________________________________ 
Company: ________________________________________________________
Address: ________________________________________________________ 
City:    ________________________________________________________  
State:   ____________________  Zip Code: ______________  
Telephone: (_________) _________ - ________________
 
 

                     DOCUMENTATION FEEDBACK 
 
Help us make our documentation better by completing and returning this form.  
Your feedback will help us improve future products.
  
Name:    ________________________________________________________ 
Company: ________________________________________________________
Address: ________________________________________________________
City:    ________________________________________________________
State:   ____________________  Zip Code: ______________ 
Telephone: (_________) _________ - ________________ 


 
                 Paytime Payroll Program  Version 3.00 
Operating system: ____________________________________ 
Computer: ________________________ 
Memory(k): ________   Programming experience: ____ years;
 
Please rate the documentation on a scale of 1 to 10 where 1 is poor, 5 is 
average and 10 is excellent. 
 
___  Completeness        ___  Usability           ___  Accuracy
___  Readability         ___  Organization        ___  Understandability

   
Was the demo program useful? ___ Yes  ___ No  
Is information easy to find? ___ Yes  ___ No  
Were errors found in the documentation? ___ Yes ___ No.If yes, please give 
page number and description of the error. 

Is the manual ____ too long?   
              ____ too short?  
              ____ about right?

Please write other suggestions or comments on the back of this form. 



 GENERAL INFORMATION.
  
  CONFIG.SYS FILE. 
 A config.sys file will set the number of files that can  be opened and 
used at the same time. This program will have several programs open at the 
same time, so the config.sys file should be set to handle 20 open files. The 
default number of open files is normally 10. 
 The config.sys file should be placed in the root directory. Only one 
config.sys file can be used on the computer system. After installing a 
new config.sys file, the computer will have to be turned off and back on ,to 
make use of the new file. 

If you aren't familar with the procedures necessary to create a config.sys 
file then use the one on the PayTime program disk. Use the 'copy' command to 
copy the file to the root directory.


         Example: from the C: drive prompt. Copy A:config.sys <return> 

MAKE A DIRECTORY: Usually major programs are installed on separate 
directories. A separate directory keeps the root directory from becoming to 
cluttered and hard to read. A separate directory is much safer to to use .
If you make a major mistake, normally,it will not effect programs or data in 
other directories.

        Example: from the C: drive prompt. mkdir pay.dir or md pay.dir 
                 After you have created the pay directory then go to the 
                 directory. Example: chdir pay.dir or cd pay dir 

  When you are in the pay.dir, then load all programs and files  from 
 PayTime disks. 


PAYTIME installation
Before using PAYTIME : Make backup copies.
One floppy system

Two floppy system


Fixed/floppy disk system 
Assuming PAYTIME is in drive a: Example: copy a:*.* 
after all files from first disk have been copied to the fixed disk
then copy all files from the second PayTime disk.  


    SPECIAL INFORMATION FOR ONE AND TWO FLOPPY DRIVE SYSTEMS   
  For users without a hard disk, answering DOS's request to place in drive "A" 
the disk with COMMAND.COM on it,is a constant chore. 
 Swapping can be avoided by setting up COMMAND.COM on a ram disk where DOS can 
always find it. When Dos needs to reload* command.com  , it automatically 
finds it on virtual drive "C". A further benefit is that COMMAND.COM loads 
faster from the RAM* disk than from a floppy disk in drive A 

 Add DEVICE=VDISK.SYS 64 to the CONFIG.SYS FILE 
 Add these two lines to the AUTOEXEC.BAT FILE 
     COPY A:COMMAND.COM C:COMMAND.COM > NUL 
     SET COMSPEC=C:\COMMAND.COM The first line copies COMMAND.COM from the 
boot disk in drive A to the newly installed RAM disk, which should be drive C 
on a one or two drive system. Redriction to the null device(>NUL) prevents the 
display of the COPY command's usual message 
 The second line sets the inviroment variable COMSPEC (which* roughly stands 
for "command processor file specification"), so that DOS knows to look for 
COMMAND>COM in the RAM disk C rather than going to the default drive A. 

PROGRAMS
PAYTIME.EXE - Main menu. Allows access to(Create Tax rates  Menu/ view and
              modify menu / Print menu).
TAXTBLS.EXE - Enter tax information to create tax.
              files.(income tax / fica / futa / suit / overtime).
VIEWADD.EXE - Enter base data for employees and company files.
              add records 
              view records 
              delete records 
              undelete records 
              modify records
 

 
FIGPAY.EXE - Payroll calculation program (gross/tax/net..etc).
PRTPRG.EXE - Prints employee base data,(name,address,pay,rate,etc..).
             Prints employee numeric data,(ytd totals ,etc) 
             Prints company base data.                       
             Prints company numeric ytd totals. 
             Prints pay period totals. 
             Prints all payroll calculations.
CKWRT.EXE  - Check writing program/position data on check 
             select data to print on check stub.
BRUN20     - Runtime prg.(c) copyright MICROSOFT CORP.
                          1982,1983,1984,1985,1986
 
                          Files
  
PAY1  - Employee base data(name/add/pay rate/allowances..etc).
PAY2  - Employee numeric data file(year to date totals).
PAY3  - Company base data(name/add/ein number).
PAY4  - Company numeric data(year to date totals). 
PAY5  - Pay period totals(totals for each pay period).
PAY6  - All transactions(each individual pay calculation).
PAY7  - Header files.
PAY8  - Record counters .
PAY9  - Employee Index.
PAY10 - Tax rates(FICA/FUTA/SUIT /overtime info).
PAY11 - Income tax tables.
PAY12 - Data to print on check stubs.
PAY13 - Data to print on Pay period totals print out.
PAY14 - Counters for check writing.
PAY15 - Field names.
PAY16 - Positioning data on checks.  
Pay17 - Header file for company base data.
Pay18 - Header file for figpay 
diskseq - disk and printer information


8 




create company record -there is only one company record allowed for each 
payroll system. goto the view modify menu and create the company record . 

create income tax files     - can use current file (for 1989 -  weekly pay 
period) 

pay period print out - can use current pay period print out file or got to 
calculate payroll and change these to your own selection check stub data 
 can use current stub data file or goto ckwrt to change this data to your own 
selection. 

All other necessary files create automatically (index,counters..etc.). 



              ************* GETTING STARTED *******  

 

              PAYTIME PAYROLL PROGRAM     copyright 1987,1988,1989   
                By: Ron Spoonemore   P.O.Box 805   Buna,Tx. 77612    

             MAIN MENU.       Date:01-01-1980                         

F1  - View / Modify / Add / Create / Del / Undel Records.
F2  - Print Records. 
F3  - Calculate Payroll. 
F4  - Set Date. 
F5  - Reset Payroll Records.
F6  - Enter Tax Rates and Tables.
F7  - Check Write.
F8  - Enter Printer and Dr
F10 - End Program.
                                                




9
CREATE/VIEW/MODIFY MENU.
 1 - Employee Base Data. 
 2 - Employe Numeric Data.
 3 - Company Base Data.
 4 - Company Numeric Data.
 5 - Pay Period Totals 6 - All Pay Transactions.
 ESC - Previous menu.
 
              ----------- Enter Number --------------- 

 RESETTING  PROGRAM. 
 If there are old data records and you need to set up a new payroll records 
file, use menu selection <F5> from main menu. These are the files that 
will be effected. 
 
              Pay1(employee base data) 
              Pay2(employee numeric data) 
              pay3(company base data) 
              pay4(company numeric data)       
              Pay5(pay period totals) 
              Pay6(All pay calculations) 
              pay8(program counters) 
              pay9(index file) 
 
deleting these records will not effect any other files such as the Income Tax 
file, Tax Rates files. 
 
 
 VIEW EMPLOYEE BASE DATA     DATE: 01-01-1980    MODE > WAITING.
_________________________________________________________________ 

  1 - Code                 Code      [          ]
  2 - Rec#                 EmpName   [                        ]
  3 - Next                 Position  [               ]
  4 - Previous             Street    [               ] 
  5 - Add/Create           Mail Add  [                        ] 
  6 - Delete               c/s/z     [                        ] 
  7 - Modify               Soc Sec   [           ] 
  8 - Undelete             Allow     [  ] 
  * - Rename Fld           Mar Stat  [ ] 
 F9 - Cancel               Pay Rate  [          ]
 ESC - Previous Menu       Start Date[          ] 
                           End Date  [          ] 
                           Other*    [          ]
                           Other*    [          ]
 
 To insure consistency enter all charaters in upper case. This simplifies data 
retrieval when searching for  employee numbers. Be very careful about entering 
data. Paytime has error checking routines, but it will not catch all data 
entry errors.

WARNING  !! if character data is entered in a field that needs a number the
pay calculation program will try to figure pay from the data it has 
recieved ,and the program will give an error message

 
  EMPLOYEE CODE . 

 The Employee code has to contain at least three characters.
* These three characters have to be in the first three positions of the code.  
 The employee identification number has multiple uses. Entering  employee 
numbers seems complicated when first used, but because of The amount of 
information needed for a Payroll system,it is simpler, for the programmer and 
program user, to use codes, rather than set up the entry modules for all 
necessary information. 

Entering first three characters for CODE. 

        1. FIRST CHARACTER -- Can be one of two characters.         
           "S" to designate a (S)alaried employee.                 
                --- OR ----                                        
           "H" to designate an (H)ourly employee.                  
           ! no other characters can be entered in this position !         

       2. SECOND CHARACTER - used for social security purposes.     
          "F" in the second position is used to designate a  family
          member that  does not pay social security otherwise this 
          position can contain any alphanumeric character.         
          If "F" is not used in this position then an "R" can be used.
          This character designates a "R"egular employee.          

       3.THIRD CHARACTER -  used for city tax                       
          Some citys that have an income tax, have different rates for
          residents and non-residents of the city. The third character
          in the employee number should be  'R' for  resident. Using  
          any other character designates a non-resident. 
           If your payroll system doesn't calculate city tax then you 
          can use any character in this position. 
           
           Don't use 'H,S,F,R' for default characters, in first three 
          character positions. The program will assume you put these 
          characters in these positions to direct the program to calculate
          payroll accordingly.
         
          The other 7 characters in the 'Code' can be used for your own 
         codes, such as  employee initials or numbers to designate 
         employee seniority. 
         
         Other information for employee records can be entered as 
        prompted. make sure numeric entrys do not contain any commas or     
        dollar signs.
 
       Example of right entry :  7000.00  or 7000 
       Example of wrong entry :  $7000.00 or 7,000
 

                                                
       Four fields are absolutely necessary for the program to 
       calculate payroll correctly. 
         Code 
         Allowances. 
         Marital status. 
         Pay rate 
 
 
       COMPANY RECORD. 
        Unlike employee records the company record only has one 
        record for base data and one record for year to date     
        totals. The company numeric record keeps year to date 
        totals for all pay catagories . 
        This record sets up the 'company year to date' record to 
        recieve data. 
 
       federal ID.  :federal employee identification number.Number  
       issued by goverment for federal tax purposes. 
       
TAX RATES  

 
              tax rates - The example tax rates file holds  
                   FICA set at                         7.51% 
                   soc. sec limit                      45000 
                   state unemployment (SUIT)           2.31  
                   limit on SUIT                       7000  
                   fed. unemployment  (FUTA)           .008% 
                   limit on FUTA                       7000  
                   overtime pay after hours            40    
                   percent for overtime pay            1.5   
                   min. amt. for salaried emp.         100   
                   max. amt. for salaried emp.         500   
                   base hours for salaried emp.        40    
                   State income tax (if flat rate)     .6    
                   County income tax (if flat rate)    .05   
                   City income tax (if flat rate)      1.5   

 
 'Overtime pay after hours' can be set to zero,if you do not pay overtime.
 Pay will be figured as straight time. minimun and maximun hours for salaried
 employee aren't necessary to figure pay, but are used as a safety to check
 for to much pay. Base hours for salaried employee aren't necessary,but are 
 used as a time reference. 

  Social security tax rate.(FICA):Insure that decimals are in correct 
position.
 
       
       Social security tax rate for 1988 is 7.51 
       example of right entry: 7.51 
       example of wrong entry: 07.51 or .751 or .0751 
       
        Limit on gross to pay social security. 
       explanation : If an employee makes over a designated              
amount on  gross pay during the year,then that empoyee is not liable 
to pay social security. 
       
       The limit on gross for 1988 is 45000 
       example of right entry: 45000 or 45000.00 
       examples of wrong entry: $45,000 ,$45000,$45000.00 
 
 
 
12 
 State Unemployment Insurance Tax rate.(SUIT.)> Tax rates vary with state,type 
of business and other factors. 
 
       The tax rate for our company at this time is 2.31 
       example of right entry: 2.31 

       Limit on gross to pay state unemployment.: 
       Same explanation as above. 
       the limit on gross for 1988 is 7000. 
       example of right entry: 7000 
 
       Federal unemployment tax rate(FUTA.) 
       The federal unemployment  tax rate for our company at this time 
       is .008 
       Example of right entry: .008 
       
       Limit on futa. 
       The limit on gross for futa for our company at this time is  
       7000 
       example of right entry: 7000 
 
       Over this amount of hours pay overtime(0T-hrs). 
       If your company pays overtime then enter number of hours after  
which you will pay overtime. 
 Can not enter daily overtime.This number will usually be          
numbers such as 40,80,100 etc.... 
        
       Percent to pay overtime. 
       Enter the percentage of pay to pay for overtime. 
       example: time and a half.This would be regular time plus half 
       of regular time for overtime hours. 
      
       example of right entry: 1.5 
       example of wrong entry: 1.5% 
 
 State income tax (if flat rate) Flat rate means that the tax rate does not
need a formula or table to calculate taxes. This entry can contain any state
tax that is figured on a flat rate. If zero is entered, the program will
calculate these values to 0 
 
County income tax (if flat rate) 
 
City income tax (if flat rate) 

! Warning ! These tax rates may vary for your state or          
company. 
  Research current rates for your area and business type. 
 
 
 
 
 
 
13 
       CREATE INCOME TAX FILES 
       Income tax(inctx.) 
       (Must have circular:(IRS. publication 15 )'EMPLOYERS TAX        GUIDE' 
for current year. 
       The first prompt for income tax files asks for pay period. 
       Length of pay period entries allowed. weekly 
                                             biweekly 
                                             semimonthly 
                                              monthly 
 The second prompt asks for withholding allowance.Withholding  tables can be 
found in 'publication 15   EMPLOYERS TAX        GUIDE 'enter allowance that 
corresponds to pay period and        press enter. 
 
Entering income Tax Rates Look in EMPLOYERS TAX GUIDE (circular E ,Publication 
15)        and locate tax table that corresponds to pay period.Enter         
information exactly as shown. (DO NOT USE COMMA'S).Do not        enter dollar 
signs or percent signs.  
 You must enter decimals in front of percentage rates.Make        sure you use 
decimal in the correct position. 
      
Place cursor on dashed line [_____] for numbers you want        to  enter.Then 
enter amount that corresponds to that        location. 
         
       example:$[20______]   $[363_____]     [.15_]% 
 
While entering information the cursor keys can be used to         move around 
the screen.To remove unwanted charaters move cursor over charater to be 
removed and use space bar to        delete  the unwanted character. 
 Be very careful about entering income tax information.Any        numeric 
values entered incorrectly will give incorrect calculations when figuring 
income tax. It is easier to        enter the amounts column by column instead 
of line by        line.When all information has been entered press f1.        
Should you want to cancel data entry press < Q > the        program will be 
returned to  the main menu and the current        Income Tax file will not 
change. 
 Use figpay to test income tax information and check        payroll 
calculations for correct entry. 
 
VIEW / MODIFY RECORDS 
    
E)mployee number: 
 To display a record by using Employee number press < E >,        then at the 
bottom of screen you will be prompted to enter        the Employee number.   
Enter code and press < return > 
       
 
14 R)ecord number: to display a record by record number press < R > then at 
the bottom of function box you will be prompted to enter record number. enter 
number of record to view and press < return > 
   
N)ext record: View next record in ascending sequential order press < N > 
P)revious record: View record descending sequential order press < P > A)dd 
Record:Add records press <A> and enter new information. When all information 
entered into record press < F10 > to file the record. Add records is also used 
to create a new file after initialize has set record counters to zero.  
 
M)odify record: To modify/edit a record that is displayed on screen press < M 
> and modify the record. When modification complete press <F10 > to file the 
modified record. 
 
D)elete :To delete, display the record that you want deleted and press  < D >. 
Using the delete option does not remove the record from  the file. A code is 
placed in the index file to prevent the  record from being used in the pay 
calculation program. 
 The file can still be viewed ,modified and printed.   
 
U)ndelete: To undelete a record that has been deleted with the DELETE  option, 
display the record on the screen and press < U >. Undelete renoves the deleted 
code placed on a deleted record. 
 
ESCAPE) to cancel: If you are adding / modifying / viewing a record . Escape 
will allow canceling any operation on the record and leave the record 
unchanged.                              
         
Q)uit: Pressing < Q > returns the program to the View/modify menu. The Quit 
option does not file records or change any record  values.   

Except for the Add option, the same view/modify options apply for other files. 

RENAME FIELDS
 In the EMPLOYEE BASE DATA MENU there are two field names that end in an 
Asterisk character.Pressing the "*" character allows the user to change 
field names.These fields contain names for items that are removed from gross
pay. 
  



15 
PRINT RECORDS 1 - Start field selection  
Places cursor in position to start sleecting items to print. 
Enter the number 1 for first item to print,enter 2 for second item.....  
 The char count display keeps track of how many characters are used, for each 
selection.Item selection does not have to be in sequential order. When you put 
a 1 by item ten, item 10 will be printed first,item 2 second..... 

2 - Compressed  OFF.: Pressing 2 turns compressed on and off. Compressed  OFF, 
allows 80 characters(cols) to be printed before the printer uses a carriage 
return. Compress ON, allows 132 chara cters to be printed without a carriage 
return, printing 132 charaters across.  
 The compressd code is for the Epson FX printer. The brand of printer you are 
using may or may not be able to print in compressed mode,using these code 
settings.(if this code is not appropriate for your printer, please , notify 
Datatex.)  
 
3 - Print all records: Prints selected information for all records. 

4 - Search for records:Prints selected information for the selected records. 

5 - Goto print menu: Returns print menu.  

E)SCAPE to cancel: This option cancels the current print selection 

F10 - End Selection: After selecting fields to be printed, pressing F10 ends 
selection and allows  the computer to set up for printing selected fields. 
 
The same general instructions apply for all other print  modules. 
 
CALCULATE PAYROLL 

A)ll employees:Calculates payroll for all active employees. Salaried 
employee's pay calculations are done automatically. When the program retrieves 
a hourly employee record, it will prompt the user to input the hours for the 
pay period. Employee records that haave been deleted will not be retrieved for 
pay calculations. 

S)elect employees:Calculates payroll for selected active  employees. 

16 
 P)ause OFF :The default setting for this switch is OFF. In this  position as 
soon as employee pay period hours are entered and  < enter > is pressed the 
program calculates pay and prints out the pay period totals for the employee.  
 By pressing < P > the program will wait until < enter >is pressed before 
printing pay period totals. This switch gives the user a chance to check the 
data before printing.      

       WRITE CHECKS: 

       The write checks program can be reached through the Main Menu or the
       Calculate Pay Menu. 
 
       Print checks: 
       After pay calculations are complete the information for these  
       calculations are filed on disk and used for printing checks. 
       Only the most recent data is used.If new pay calculations are  
       done then the old data is deleted and replaced by the new data. 
       The check writing program uses NEBS form 9024,multipurpose  
       checks. 
         Using this option will print checks for all employees who have 
       had pay calculated by the last use of the Calculate Pay prog- 
       ram. 
 
       Check number: 
       Most printer feed checks have ascending numbers printed on the  
       checks, this option lets you enter a number of your choice. 
       Each consecutive check printed will be incremented by one. 
        
       Stub Data: 
       Usually payroll checks have information printed on stubs for 
       the employee's use. 
       The Stub Data program lets the user select information to be  
       printed on the check stub. 
       To select data press < S > in the check write menu. You will 
       be taken to the Stub Data menu. When in the Stub Data menu  
       use the cursor key to move to the fields you want printed and 
       press < C > to select data to be printed on the stub. 
       There are thirty six items on the screen to select from, But 
       only twenty-six items can be printed on the stub. You can  
       choose to print fewer fields . 
       
       A)lign check data 
       This option allows users to make small adjustments in  
       positions for information being printed on checks.   
       When the data positioning program is brought, up on the  
       screen, previous data will be displayed in the position for the 
       data that will be effected. 
       It is a good idea to make a back up copy of the check movement 
17 
       file,before making changes.The check movement file is Pay16 
       
       Line spacing: 
       The line spacing is set to n/72. Where n is the number of 72nds 
       distance between lines.You will need to keep in mind that if  
       you change line spacing,all data positions on the check will be 
       effected. Also when you move data down, all data below that  
       data will be moved down. Very small movements can cause radical 
       diferences in data positions.   
        
       FEED top of check: 
       This feed option controls the distance (line feeds) between  
       bottom of check stub and the check . 
 
       moving data: 
       When the check is displayed on the screen, each data item has  
       sets of closed brackets on the left side of each item. The  
       first item is for moving the data item down, the second item is 
       for spacing data to the right.    
       M)ain menu 
 
 
              REGRISTRATION AND GENERAL INFORMATION. 
       Persons using this program should be aware of the User  
       Supported program concept and realize that the only way to  
       keep recieving quality software at bargain prices, is to  
       register programs .  
        
       The registration fee of for PayTime is $35.00. Persons who  
       use this program will find it to their benefit to register  
       with the author. This small fee is necessary for materials 
       and other items that will enable the author to make this 
       program more functional and professional. 
        
        Do not let this request for registeration deter you from  
       submitting suggestions or asking for assistance in using this  
       program.Should you have a problem using this program it will  
       not be intentional on the  programmers part.All precautions  
       have been taken insure that users do not get trapped and have  
       to send the author money before they can make use of the  
       program.  
 
       Registered users needing a state income tax program   
       integrated into Pay-Time, send necessary information for their  
       state. The income tax module will be installed free.  
       Also registered users may request the program be set up  
       to use other types of checks. 
                      
 
   Programmers, who want to customize this program for thier personal needs  
   can purchase source code for $65.00. Also Datatex Publishing will customze 
   Paytime for users who have special needs. Contact author for details. 
 
18 
     REGISTRATION FOR PAYTIME ------------------------------------ $35.00 
     SEND REGISTRATION FEE,QUESTIONS,AND SUGGESTIONS TO: 
                          Ron Spoonemore  
                          P.o.box 805 
                          Buna,TX. 77612 
                          409-994-5118 
 
 

 base data - A mixture of character and numeric data. For employee information
             name,date,pay rate...etc.
 numeric data - Data that holds employee pay totals, pay period totals...etc
      * - denotes fields names that can be changed. Changing these names do not 
    change their function.





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1034

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        68   1-01-80  12:18a
    CONFIG   SYS        43   1-01-80  12:09a
    FILE1034 TXT       994  11-30-89   4:17p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   1-01-80   4:19a
    MSG1     TXT       230   1-01-80  12:41p
    PRNTDOC  BAT       126   1-01-80   5:49a
    README   DOC     36355   1-01-80   2:08a
    README   TXT     35592  10-24-89   6:16a
            9 file(s)      73986 bytes
                           82944 bytes free
