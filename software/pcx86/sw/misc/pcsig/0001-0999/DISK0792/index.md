---
layout: page
title: "PC-SIG Diskette Library (Disk #792)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0792/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0792"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILES792.TXT

{% raw %}
```
Disk No:  792                                                           
Disk Title: Home Loan (Your Financial Analyst)                          
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: Home Loan (Your Financial Analyst)                       
Author Version: 2.2                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
HOME LOAN/Your Financial Analyst is a versatile financial management    
package with four major financial modules -- Loan calculator, Equity    
calculator, Amortization Table generator and Financial Planner.         
                                                                        
The loan calculator allows you to calculate monthly loan payments based 
on the interest, loan amount and the loan term.  (You can enter any     
three of the four values and the module will calculate the fourth       
value.)  A payment table is displayed to reflect the interest or term   
change on your loan payment.                                            
                                                                        
The equity calculator keeps track of the equity in your home and        
calculates the amount you can borrow against your home and keep the     
interest tax deductible.                                                
                                                                        
The amortization module generates an amortization table of loan         
payments.  For each payment, a table displays the amount of payment that
goes towards the interest and the amount that covers the principle.     
Prepayments and balloon payments can be included.                       
                                                                        
The financial planner performs annuity, present value and future value  
calculations for your investments.  This module provides specific tables
for retirement planning, college cost planning and IRA planning.        
                                                                        
YOUR FINANCIAL ANALYST has an additional feature for professional users 
that allows you to print your name, address and phone number on all     
hardcopy reports. The program is completely menu-driven and has pop-up  
help screens for all modules.                                           
                                                                        
File Descriptions:                                                      
                                                                        
HL       EXE     Introduction and copyright notice.                     
BRUN30   EXE     Quick Basic Compiler.                                  
FINANCE  EXE     Program for financial planning.                        
SETUP    EXE     Program for name, address set up.                      
CALC     EXE     Main program for YOUR FINANCIAL ANALYST.               
FINANCE  DOC     Documentation for the program.                         
OTHER    DOC     Documentation for other HomeCraft software.            
INTRO    DOC     Introduction to the program and files.                 
MENU     OVL     Overlay file.                                          
PRINT    BAT     Batch file to print the documentation.                 
READ     ME      Brief introduction to the program.                     
NAME     DAT     Data file used by set up.                              
VALUE    DAT     Data file used by equity calculator.                   
LOAN     HLP     Contains help screens.                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## FINANCE.DOC

{% raw %}
```





       HHHH    HHHH    OOOOOOOOO     MMMM	  MMMM	 EEEEEEEEEEEE
       HHHH    HHHH   OOOOOOOOOOO    MMM MM	MM MMM	 EEEEEEEEEEEE
       HHHH    HHHH   OOO     OOO    MMM  MM   MM  MMM	 EEE
       HHHHHHHHHHHH   OOO     OOO    MMM   MM MM   MMM	 EEEEEEEEE
       HHHHHHHHHHHH   OOO     OOO    MMM    MMM    MMM	 EEEEEEEEE
       HHHH    HHHH   OOO     OOO    MMM	   MMM	 EEE
       HHHH    HHHH   OOOOOOOOOOO    MMM	   MMM	 EEEEEEEEEEEE
       HHHH    HHHH    OOOOOOOOO     MMM	   MMM	 EEEEEEEEEEEE


		Y O U R   F I N A N C I A L   A N A L Y S T
		     (THE HOME FINANCIAL CALCULATOR)


			      Created By:

			     Steve Hudgik
		       HomeCraft Computer Products
			     P.O. Box 974
			  Tualatin, OR	97062


	 LLL		OOOOOOOOO     AAAAAAAAA    NNNNN       NNN
	 LLL	       OOOOOOOOOOO   AAAAAAAAAAA   NNN NN      NNN
	 LLL	       OOO     OOO   AAA     AAA   NNN	NN     NNN
	 LLL	       OOO     OOO   AAA     AAA   NNN	 NN    NNN
	 LLL	       OOO     OOO   AAAAAAAAAAA   NNN	  NN   NNN
	 LLL	       OOO     OOO   AAAAAAAAAAA   NNN	   NN  NNN
	 LLLLLLLLLLL   OOOOOOOOOOO   AAA     AAA   NNN	    NN NNN
	 LLLLLLLLLLL	OOOOOOOOO    AAA     AAA   NNN	     NNNNN


			   Copyright 1988 by
			    Steven C. Hudgik
			  All Rights Reserved
































			     INTRODUCTION


	   Are you thinking of buying a car and you'd like to see what 
       your monthly payment would be?  Maybe you'd like to find out how 
       much sooner your mortgage will be paid off if you add $10 a month 
       to your payment; or how much money you can save by refinancing 
       your mortgage at a new, lower interest rate.	All of these 
       questions can be answered by YOUR FINANCIAL ANALYST (YFA).

	   YFA can show you various aspects of almost any type of 
       loan, based on information you enter.	For example, enter the 
       amount of the loan, interest rate and term (number of years the 
       loan is for) and YFA will give you the monthly payment.	
       You can also enter the monthly payment you'd like to have, the 
       interest rate and the term, and YFA will tell you how much 
       you can borrow.

	   Plus, YFA has a finacial planning section that can help 
       you with retirement planning and planning for your children's 
       college education.

	    HELP screens are provided throughout YFA.  If you ever 
       reach a point at which you don't know what to do, just enter a 
       question mark (?) to see the HELP screen.  While they can't 
       provide all of the detail contained in this manual, we have 
       included important points and answers to common questions.

	   We hope that YFA proves to be a valuable asset to you.  
       If you should have any problems or would like to offer any 
       comments, please feel free to contact us.


     Hardware/Software Requirements

	    To operate this version of YFA you need an I.B.M. PC, 
       XT, AT or compatible with 192K of memory and PC/MS-DOS version 
       2.0 or later.

	    If you wish to get a print-out, then a printer with a 
       minimum 80 column width is required.



     Booting YFA

	   To use YFA put a copy of the YFA disk in the A 
       disk drive, type HL and push ENTER.


     Using YFA On A Hard Disk

	   To use YFA with a hard disk, use COPY to copy all of 
       the files on the YFA disk.  Once the files have been 
       copied, you can boot up YFA by typing the letters "HL" at 
       the system prompt and pushing ENTER.









			USING YOUR FINANCIAL ANALYST


	   At any point in YFA, if you need to know where you are 
       and what you should do next, you can push F8 or enter a question 
       mark.  This will display a HELP SCREEN containing information 
       about YFA and the type of information you are expected to 
       enter at that point.

	   Also, throughout YFA you can generally push F9 to exit 
       from whatever you are doing.  This will bring you back to the 
       last function or menu you were using.


       NOTE: In most cases the amounts calculated by YFA should be 
       taken as estimates only.  YFA is designed to help you plan 
       for the future, however, there is no one who can accurately 
       predict future interest rates or inflation.  Be prepared to use 
       YFA on a continuing basis to update and change your plans 
       to meet your current circumstances.


	   The menus throughout YFA are set up so that you can 
       make a selection either of two ways.  When the menu first appears 
       the top selection will be highlighted by a light bar.  The light 
       bar can be moved up and down through the menu by using the 
       up/down cursor keys.  To make a selection using the light bar, 
       move the bar to the function you want to use and then push ENTER.

	   The second way to select a function on the menu is to push 
       the number corresponding that that function.


	   Now let's take a look at the functions listed on the Main 
       Menu.


     <1> Loan Calculator   

	   This first item is the Loan Calculator.  Push #1 and a menu 
       will appear that provides several ways for you to get information 
       about a loan.

     <1> Calculate Payment

	   The first item on the Loan Menu is "Calculate Payment."  Push 
       the #1 key and you will then be prompted to enter the amount of 
       the loan.  Please remember that commas should not be used when 
       entering amounts.  A comma will cause YFA to get confused 
       and the wrong value for the loan amount will be entered.

	   You'll next be asked for the interest rate.  Interest rates 
       from as low as 1% up to a maximum of 30% may be entered.












	   The final prompt asks for the term of the loan.  YFA 
       can handle loans that run anywhere from 1 year up to 40 years.

	   The monthly payment will now be calculated and displayed.  
       You'll also see a new prompt line that says; "<M>ain Menu or 
       print a table based on varying <I>nterest Rates or <T>erm."

	   If you push the letter M, you'll be returned to the Main 
       Menu.


     Table Of Interest Rates

	   Suppose you are thinking of borrowing some money, but you're 
       not sure if you should wait for the interest rates to go down (on 
       the other hand they may be heading upward).  Push the letter I 
       and YFA will display a table showing the monthly payment 
       for your loan plus the payments for terms both greater and 
       shorter than you selected.  In addition, the payments for four 
       other loan amounts will be displayed ($2000 and $4000 more and 
       less than the amount you entered).

	   You could have also pushed the letter I.  This would display 
       a similar screen that shows the effect of various interest rates 
       on your loan.

	   With either table on the screen the prompt at the bottom 
       gives you two choices.  Push the letter P to print this table (BE 
       SURE YOUR PRINTER IS TURNED ON), or push any other key to return 
       to the Main Menu.  It is important that your printer be turned on 
       if you are trying to get a printed copy of this table.  If your 
       printer is off, the program will hang up and nothing will happen 
       until the printer is turned on.



     <2> Calculate Term

	   The next item on the Main Menu allows you to calculate the 
       term of a loan.	Push the #2 key and you'll be prompted to enter 
       the amount of the loan.

	   Next you'll be asked for the interest rate and the last item 
       is the monthly payment you'd like to have.  The same range of 
       interest rates and terms as described previously can be used 
       here.



     <3> Calculate Principle Amount

	   The next item on the Main Menu, Calculate Principle Amount, 
       is very similar to the one we just looked at.  You'll be prompted 
       to enter the interest rate, term and the amount of the monthly 
       payment.  YFA will then tell you how much money you can 
       borrow.









     <4> Amortization


	   Item 4 on the Main Menu is used to create an amortization 
       table.  This type of table will show you how much of each monthly 
       payment is being used to pay interest and how much goes toward 
       paying off the principle.

	   To get the information it needs YFA will first ask you 
       for the amount of the loan, the interest rate and the term.  This 
       information is entered in the same way as we've already discussed 
       for the other functions.  The next prompt will ask if you have 
       prepaid any part of the principle.  For now push the letter N, 
       for NO, and we'll come back to this function later.

	   YFA will now take a few seconds to calculate a 
       amortization table.  When complete, you'll be asked for the first 
       monthly period of a twelve month period or for the year for which 
       you would like to see the amortization table.  The up and down 
       cursor keys are used to put the cursor next to either the prompt 
       for a monthly period or for the year.

	   The amortization table displayed by YFA covers a 12 
       month period.  If you use the down cursor key to move the cursor 
       to the line asking for a year, and you enter the number 1, you'll 
       see a table showing the first year of the loan.	Entering the 
       number 2 will show the second year and so forth.

	   If you leave the cursor on the payment number line, and enter 
       the number 1, the amortization table will show 12 months starting 
       with the first month.  If you enter the number 2, the table will 
       show months 2 through 13.  Let's look at an example.


     Prepayments

	   Now let's find out how loan pre-payments are handled by 
       looking at an example.

	   Push F9 until you return to the Amortization screen that asks 
       for the amount of the loan.  Enter the same loan amount, interest 
       rate and term that we've been using ($50,000 - 11.25% - 15 yr).  
       You should now be at the prompt that asks about prepayments.

	   Some loans allow you to pay off portions of the principle 
       early.  For example, if your monthly payment is $100, you could 
       send in $110 for one month and the extra $10 would be deducted 
       from the principle.  If you add enough extra to your monthly 
       payments, you can pay off a loan early and save, in some cases, a 
       substantial amount of interest.	Even adding $10 to one monthly 
       payment will result in some savings.

	   If you have prepaid some of the principle or would just like 
       to see what would happen if you did make a few prepayments, push 
       the "Y" key in response to this prompt.












	   You'll be asked to enter the payment number and the amount 
       you paid in excess of your normal monthly payment.  (NOTE: To 
       determine the payment number count the number of months since 
       your first loan payment).  When you've finished entering the 
       information for all of the prepayments you've made, then push F9 
       instyead of a payment number.  The amortization table will now be 
       calculated taking into account the prepayments you've made.

	   If you make a mistake and happen to enter the wrong payment 
       number, just enter zero for the amount and there'll be no effect 
       on the amortization table.  If you make a mistake in entering the 
       amount, re-enter the same payment number again and then the 
       correct amount.


     A Prepayment Example

	   Let's suppose you have a four year loan for $1000 at 10% 
       interest.  This loan will have 48 payments (4 years X 12 months 
       per year).  If you included an extra $10 in payment 8 and $25 in 
       payment 11, you should enter that information as shown in the 
       illustration to the left.  Now when the amortization table for 
       the first year is displayed, the amount of the prepayment will be 
       shown in the right hand column and the effect of those 
       prepayments will be calculated into the amortization table.

	   I would also like to mention that this feature of YFA 
       can be used to do "what if" calculations.  For example, what if 
       you added $100 to next month's mortgage payment?  What if you 
       added $100 to the next five payments?  How much sooner would your 
       mortgage be paided off?	(The amount shown in the amortization 
       table goes to zero when the loan is paid off).


      Setup

	   If you own a business in which you'd like to make use of Home 
       Loan to provide information for your clients, then YFA has 
       a feature you might find useful.  The SETUP feature allows you to 
       enter your name, address, phone number or any other information 
       you'd like.  Up to 6 lines, each fourty characters long, may be 
       entered.  This information will then be printed at the bottom of 
       all of the printed reports generated by YFA allowing your 
       customers to see who provided the information for them.

	   When you press #6 for SETUP on the Main Menu, YFA will 
       display six blank lines.  Type in the information you'd like to 
       have printed at the end of each YFA report just like you 
       would using a word processor.  When you're finshed push the 
       ESCape key and a menu will appear.

	   To save the information you've just entered, push the F1.

	   If you've made any mistakes and would like to start over, 
       push the F4 to return to the editor.











	   If you do not want to have anything printed on the YFA 
       reports, then push F5.  This will erase the information stored on 
       the disk.  When the the blank entry lines come on the screen push 
       the F10 key to return to the Main Menu.































































  
			   FINANCIAL PLANNING	  



	   The next item on the Main Menu, number 6, gets us into some 
       additional Financial Planning functions provided by YFA.   
       Of course, the loan calculation and amortization tables we've 
       already discussed are valuable financial planning tools.  This 
       next section expands the tools available to you by adding the 
       ability to do various financial calculations and to plan for your 
       retirement and your children's college education.  With the 
       Loan Calculator Menu (Main Menu) on the screen, push number "6."

	   The menu that appears will have six choices.


     Value Of An Annuity

	   You may have heard the term "annuity" mentioned when someone 
       wins a big jackpot in a state lottery.  If a million dollar prize 
       is awarded, the winner never gets the $1,000,000.  Million dollar 
       lottery winners usually get $50,000 per year for twenty years - 
       for a total of $1,000,000.  This is called a twenty year, million 
       dollar annuity.

	   An annuity is nothing more that a specific amount of money 
       paid for a set number of years.


     Are You Really A Millionaire?

	   Let's assume you've won the lottery and you've become a 
       "millionaire."  Let's find out how much that prize is really 
       worth and what it costs the state lottery.  Push #1 and we'll 
       determine the value of this annuity.

	   The first prompt asks for the amount of the yearly annuity 
       payment.  Since the $1,000,000 prize actually pays $50,000 per 
       year for 20 years, enter 50000.	DO NOT USE COMMAS WHEN ENTERING 
       AMOUNTS GREATER THAT 999.

	   Next you'll be asked for the interest rate you could earn if 
       this money was invested or put in the bank.  This rate will vary 
       depending on when you're reading this and how you want to invest 
       your money.  For this example let's assume you can get 8% 
       interest, so enter the number 8.

	   At the next prompt enter the number 20, as you'll receive 
       payments for twenty years.

	   The last prompt allows you to get a printed copy of the 
       annuity table that will be generated.  If you want a printed 
       report push the letter "Y" and BE SURE YOUR PRINTER IS CONNECTED 
       AND TURNED ON.  For now we don't need to get a printed copy of 
       this report, so push the letter "N."









	   Here's the answer to our question.  To pay you the million 
       dollar prize the state lottery only needs to put $490,907.37 in 
       the bank at 8% interest.  That's right, you're not a millionaire.  
       The actual value of the million dollar prize is less than half a 
       million dollars.  If we don't figure the effect of taxes, you'd 
       be better off taking half a million dollars now instead of the 
       million dollar, twenty year annuity.


     The Annuity Table

	   Taking a look at the table that should now be displayed on 
       your screen, first notice that each screen can display 15 years.  
       To see the next 15 years push any typing key.	To return to the 
       menu push F9.

	   The left column gives you the amount of money in the annuity 
       account before that year's payment is made.  The middle column 
       tells you the amount of interest earned by the amount show in the 
       left column.  The right hand column gives the amount of the 
       annuity payment, which is made at the end of the year.


     Getting Back To The Menu

	   After the last page of the annuity table has been displayed 
       you'll be returned to the prompt that asks for the amount of the 
       yearly annuity payment.	To exit back to the menu push F9. 
       As is true anywhere in YFA, you can also push F10 to
       return directly to the Main Menu.


     Net Present Value

	   Item two on the menu will calculate the amount you need to 
       invest now in order to have a specified amount at some time in 
       the future.  In other words, it will tell you how much an amount 
       of money at some time in the future is worth to you today.

	   Let's look at an example.

	   We'll assume that you used to be a member of a retirement 
       plan that will pay you $1000 when you retire in twenty years.  
       This benefit is guaranteed, even though you are no longer a 
       member of the plan.  In today's mail you received a letter from 
       the retirement plan that says they would like to reduce the 
       number of inactive members.  They'll pay you $250 now instead of 
       the $1000 when you retire.  What should you do?	A thousand 
       dollars is a lot more that $250, but you have to wait twenty 
       years to get it.  Push #2 and we'll get the answer to this 
       question.

	   The first prompt asks for the future amount.  For this 
       example that would be 1000.












	   Next you'll be asked for the interest rate.  We'll use the 
       same assumption as for the previous example.  Enter 8.

	   The third prompt asks for the "number of years."  You should 
       enter the number of years it will be until you receive the future 
       amount, in this case 20 years.

	   Once again the last prompt asks if you want a printed report.  
       Push the letter "Y" this time, just to see how the printer 
       reports look.  (If you don't have a printer connected to your 
       computer, then push "N").  BE SURE YOUR PRINTER IS TURNED ON.


     Is It A Good Offer?

	   It looks like the retirement plan's offer of $250 is a good 
       deal.  The present value of the $1000 you'll receive in twenty 
       years is $214.55.  Thus you are being offered more than what 
       you'll have if you wait.  Of course, this calculation is very 
       much dependent on the interest rate you assume.	If you go back 
       and have YFA do the calculation again based on a 7% 
       interest rate, it turns out that you should not accept the offer 
       of $250.  For this reason you may want to do a calculation 
       several times, with different interest rates, before you make 
       your final decision.

	   A table should now be on the screen.  This table shows how 
       $214.55 grows to $1000 in twenty years.	The table can display 15 
       years per screen and pushing any key will advance you to the next 
       screen.


     I'd Like To Have $10,000 Ten Years From Now

	   Another use for the Net Present Value calculation is to 
       determine the amount of money you'd need to invest today in order 
       to have a specified amount at some time in the future.  For 
       example, how much would I need to put in the bank today, at 5-
       1/4% interest, in order to have $10,000 in ten years?

	   Entering 10000 as the future amount, 5.25 as the interest 
       rate, and 10 for the number of years, we see that $5994.87 would 
       need to be invested now.

	   Push F9 until you get back to the Finacial Calculator Menu.


     Future Value

	   Item three on this menu will tell you how much an amount 
       invested today will be worth at some time in the future.

	   Let's assume that you have $1000 you want to invest today.  
       If you put it in the bank at 5-1/4% interest, how much money will 
       you have in five years?











	   At the first prompt of the Future Value calculation screen 
       enter 1000 as the amount to be invested.

	   The next prompt asks for the interest rate.	You should enter 
       5.25 for this example.

	   The third prompt asks for the number of compounding periods 
       per year.  If you've put your money in an account that pays daily 
       interest, then you should enter 365 here (360 in Canada).  If 
       interest is paid once as year, then enter 1 here.  For this 
       example we'll assume that interest is paid quarterly, so you'll 
       need to enter 4 as the number of compounding periods per year.

	   The last prompt asks for the number of years until you expect 
       to withdraw your investment.	For this example that would be 
       five years, so enter the number 5.

	   Push the letter "N" in response to the prompt that asks about 
       printed reports.  If you do say yes (push the letter "Y"), then 
       be sure your printer is connected and turned on.

	   The table that appears next tells you that you'll have 
       $1297.96 (lower right corner of the table) at the end of five 
       years.  This table also displays the amount of interest earned 
       each year and the amount of money you have in the account at the 
       end of each year.

	   The line just below the table gives the total amount of 
       interest earned over the five years as $297.96.	This means that 
       your original $1000 has grown by 29.80% due to the interest 
       you've earned.

	   Push F9 until you return to the Finacial Calculator Menu.




































			   RETIREMENT PLANNING	  



	   We're ready to move on and look at the retirement planning 
       section.  Push number 4 to bring up the retirement planning 
       screen.

	   The cursor can be moved up and down on this screen by using 
       the UP/DOWN cursor keys.  When the cursor is on the bottom line 
       it can also be moved left and right by the LEFT/RIGHT cursor 
       keys.  As you are moving the cursor around on the screen it will 
       only move to those lines on which you can enter information.  For 
       example, as you move the cursor down it will skip over the "total 
       monthly income" line.  The amount shown on this line is 
       calculated by the retirement planner and thus you can not enter 
       anything on this line.

	   Let's go to the top of the screen and discuss each line.


     Desired Monthly Retirement Income

	   The top line is used to enter the amount of retirement income 
       you'd like to have, in current dollars.  In other words, you 
       should enter the monthly income you'd like to have if you retired 
       today.  However, keep in mind that when you retire your kids will 
       not be living with you (hopefully) and you may have paid off your 
       mortgage, so don't figure those expenses into your money income.

	   We've set up the retirement planner so that you enter your 
       desired retirement income in current dollars so that you will not 
       need to calculate the effect of inflation.  After you've entered 
       the number of years you have before you retire, your desired 
       monthly income will be adjusted for inflation and that amount 
       will be shown on the line in the lower right of the screen called 
       "Desired Monthly Income At Retirement."	To see how this works 
       enter $1000 as your desired monthly income in current dollars.

	   Notice that nothing has changed on the screen yet.	The 
       retirement planner does not know how many years to use in 
       calculating your desired income at retirement.  Use the down 
       cursor key to move the cursor to the bottom line and enter 20 as 
       the number of years until retirement.

	   Your desired monthly income at retirement is $3207.14.

	   Notice that the lines that tell you the amount you'll need to 
       invest now and the amount you'd need to invest each month still 
       show a zero amount.  These amounts are calculated by the 
       retirement planner.  The top one tells you the lump sum 











       amount you'd need to have in the bank now in order to have the 
       desired income at retirement.  The lower one tells you the amount 
       of money you need to invest each month in order to have enough 
       invested at retirement to produce the income you desire.

	   Both of these amounts are zero because the retirement planner 
       needs to know how many years of retirement you are planning on.	
       The cursor should be on the "years of retirement" line, so let's 
       assume you'll be retiring at 65 and you plan to live to be 100.  
       That means you'll have 35 years of retirement.  Enter 35.

	   You can now see that you need to have $223,975.57 in the bank 
       today, to produce a retirement income of $3207.14 per month 
       starting 20 years from now and lasting for 35 years.

	   If you don't have any retirement money in the bank, saving 
       $3207.14 per month, for the next 20 years, will give you enough 
       money at retirement to have the desired retirement income.

	   Before we go on let's find out what assumptions are used in 
       calculating these numbers.


     Assumptions

	   The retirement planner makes two very important assumptions: 
       inflation will average 4% per year and you'll be able to get a 6% 
       return per year on your investments.  As I'm writing this in 1986 
       we've just finished a period of double digit inflation and very 
       high interests rates, so you may be wondering why 4 and 6 percent 
       are used.

	   These two numbers are based on long term historical averages.  
       There have been times when these numbers have been greatly 
       exceeded and other times when inflation and interest rates have 
       been less.  As long term averages these numbers should be fairly 
       accurate.


     Pension Income

	   The way the numbers appear now it looks like you need a lot 
       of money in the bank to achieve a very modest retirement income.  
       However, there's more information we need to enter to make the 
       calculation complete.  Move the cursor to the line monthly income 
       that says "FROM PENSION."

	   If you are a member of an employer sponsored pension plan, or 
       have a vested interest in a pension plan with a former employer, 
       then you should receive statements that give your projected 
       income from the pension plan(s) at retirement.  Enter the total 
       of those numbers here.  If you have no vested interest in a 
       company sponsored pension plan, then do not enter anything here.  
       For this example enter $200.












	   Notice that both the amount you would need to invest now and 
       the amount to invest each month have both decreased to reflect 
       the effect of your pension income.


     Social Security Income

	   The next line is used to enter your anticipated retirement 
       income from Social Security.  The amount entered on this line 
       will vary depending on your past income and circumstances.
       You may have also received a projection of your
       Social Security benefits from your employer as a part of 
       your employer's report on your benefits.  For the example we're 
       working on we'll assume a Social Security benefit of $2,378.

	   As you can see, when the monthly income from Social Security 
       was entered, both the amount need to invest now and the monthly 
       amount to invest decreased substantially.  This happened because 
       the actual Total Monthly Income increased to $2578, which is 
       getting close to your desired monthly income of $3207.14.


     Investment Income

	   This line can be used to enter the income (or interest) from 
       any investments you expect to have at retirement, in addition to 
       your retirement savings.  DO NOT INCLUDE THE INCOME FROM 
       RETIREMENT SAVINGS.  THAT INCOME IS ALREADY INCLUDED IN THE 
       CALCULATIONS.  This could be income from stocks, a limited 
       partnership, or from a savings account.	These should be 
       investments that you do not plan on cashing in.	For example, 
       let's assume that you have $5000 set aside for emergencies and 
       you do not plan on ever spending this money (hopefully).  If you 
       receive $300 in interest on this money each year, you can include 
       $25 per month (300 divided by 12) as a part of your actual 
       retirement income.  Enter 25 on the Investmen Income line.


     Insurance And Annuity Income

	   The final monthly income line is used to enter income you'll 
       be receiving from insurance policies or annuities.  We'll assume 
       that you have a whole life insurance policy that pays a $1200 
       ($100 per month) annuity upon your retirement.	Enter 100 on 
       this line.


     Retirement Savings

	   The cursor has advanced to the final line that we need to 
       enter information on, "Amount Of Money In Retirement Savings 
       Now."  You should enter the amount of money you currently have 
       set aside for retirement.  It could be in an IRA or KEOGH plan, 
       or it might just be a regular savings account.  If both you and 
       your wife have been putting $2000 into an IRA, you might have 
       about $14,000 now, so enter 14000 on this line.











     Your Retirement Plan

	   Based on the figures you've entered you need to have an 
       additional $21,207.35 in the bank, or you need to save $115.46 
       per month in order to reach your retirement goal.  Since you are 
       already saving $333.33 per month with your IRA contributions of 
       $4000 per year ($2000 each for you and your spouse), the 
       retirement income goal you've set is very modest.  If you 
       don't change the amount of money you're putting into your IRA, 
       what amount of retirement income can you expect?

	   Move the cursor up to the top line and try increasing your 
       desired income.	First try $1200 per month.  Notice that this 
       increases the monthly amount you'd need to invest to $359.34, a 
       little more than you are putting into your IRAs now.

	   Try $1180 as a desired monthly income.  This will require you 
       to save $334.96 per month, just about what you're saving now.  
       You can also see that you should have an income of $3784.42 per 
       month when you retire, that's what an average of 4% inflation for 
       20 years has done to $1180.


     Printed Reports

	   You can get a one page printed report containing the 
       information on the screen at any time.  Just push the letter "P."

	   BE SURE YOUR PRINTER IS CONNECTED, TURNED ON, AND HAS PAPER 
       IN IT.

	   To return to the Financial Calculator menu push the F9.  To 
       return to the main YFA Menu, push F10.



































			      COLLEGE PLANNING	   



	   With the Financial Calculator Menu on the screen push the #5 
       key to select "College Planning."

	   This screen allows you to calculate the amount of money 
       you'll need to save, if you are planning on sending your kids to 
       college.  The calculations are based on a historical average 
       increase in college costs of 5% per year and the assumption that 
       you should be able to get at least 6% on money you've invested.

	   The cursor can be moved around on the screen by using the 
       UP/DOWN cursor keys.  The cursor will only move among the top 
       four items, the bottom two items are calculated by the college 
       planner.


     Public or Private College?

	   When you start the cursor should be on the word "PUBLIC" in 
       the top line.  This line allows you to toggle the setting between 
       public colleges and private colleges.  Changing this setting 
       changes the default value for the current cost of college.  Push 
       any typing key to toggle the setting between public and private.  
       For the example we'll be looking at here, set this line to 
       "PUBLIC."


     Your Child's Age

	   Enter the age of your child on this line.  The college 
       planner assumes that your child will be entering college at age 
       18 and uses the age you enter here to determine the number of 
       years until your child is eighteen.  If you are planning on 
       sending someone to college after they turn 18, then you'll need 
       to determine the number of years until they'll be going to 
       college, subtract that number from 18 and enter the result as the 
       age of the child.  (If you'll be putting your 56 year old mother 
       through college starting in 5 years, enter 13 as the age).

	   For this example enter 3 as the age.


     Current Yearly Cost

	   There will be a default value of $6175 on this line.  This is 
       the average cost of a public college for the 1988-89 school year.  
       If you had toggled the setting for a private college, then the 
       amount shown on this line would be $12,511.













	   You do not have to use the default settings.  If you have an 
       idea of the cost for the college you want this child to go to, 
       enter that on this line.  Do not enter the cost someone is 
       projecting for when your child gets to the school.  Enter the 
       average yearly amount it costs to go to that school today.  Of 
       course, as this software becomes less current you will need to 
       enter a number different from the default setting to reflect the 
       overall increase in college costs.  You can plan on a 5-6% 
       increase in college costs per year.

	   In this example we'll leave the current yearly cost at the 
       default setting of $6,175.


     Amount Of Money Saved

	   The fourth line is used to enter the total amount of money 
       you already have set aside for this child's college education.  
       For example, you might have set up a separate saving account for 
       the child.  If that account has $400 in it, then you should enter 
       400 on the "Amount Currently Available" line.  Enter 400.


     The Results

	   If you were watching the screen as you entered the various 
       numbers, you would have seen the amounts on the bottom two lines 
       changing.  They should now be giving you the total cost
       of four years of college and the amount you need to save each month
       to have that much money when your child starts college.

	   A printed copy of this report can be obtained by pushing the 
       letter "P."

	   Push the F9 to return to the financial calculator menu or F10 
       to return to the main YFA menu.






























			    IRA PLANNING


	   The IRA Planner will calculate the amount you will have in 
       your IRA at retirement based on a regular yearly savings plan.  
       Three prompts will appear one at a time.

	   The first prompt asks for the amount you will be investing in 
       your IRA each year.  Amounts up to $1,000,000 can be entered.

	   Next you'll be asked for the average annual interest rate.  
       Since none of us has a 100% accurate crystal ball this number is 
       your guess at what the average interest rate will be between now 
       and your retirement.  Don't base your judgment on where interest 
       rates are today (expect for "what if" calculations), as today's 
       interest rates may not be realistic for the long term.  
       Historically interest rates on long term, highly secure 
       investments, has been in the 6 to 7% range.  (The maximum rate 
       YFA can handle is 33%).

	   The final prompt asks for the number of years you have until 
       you expect to retire.	If you plan to retire before you stop 
       making deposits in your IRA, then this number would be the number 
       of years until you stop making deposits.  The maximum number of 
       years that can be entered is 70.

	   YFA will now calculate the value of your IRA when you 
       retire.	The maximum amount that can be displayed is $10,000,000.




































				  THE END

	   This concludes our look at YFA.  This software provides you 
       with a great WHAT IF...	tool that allows you to explore the many 
       possibilities for loan configurations and payments and for 
       planning your financial future.	Try experimenting with the 
       various functions and discover the many possibilities available.

	   Also, I would like to remind you once again that the 
       calculations performed by YFA should only be taken as 
       estimates.  No one can predict what future interest rates or 
       inflation will be.  YFA has been designed to help you plan 
       for the future, but the only thing sure about the future is that 
       there will be change.  So, plan for change and be prepared to 
       change your plans as circumstances change.





       YOUR FINANCIAL ANALYST was created by:  Steve Hudgik
		       HomeCraft Computer Products
		       P.O. Box 974
		       Tualatin,  OR   97062

	  This manual and software are copyrighted (copyright 
       1988 - Steven C. Hudgik).  We grant permission for this manual and 
       associated software to be copied for non-commercial purposes 
       only.

	    This software has been placed in circulation under the 
	 user supported concept.  Non-profit groups and individuals 
	 are encouraged to make copies of this disk and distribute it 
	 to their members and friends as long as the software is 
	 provided at no cost.  A distibution charge, not to exceed $10,
	 may be charged only with the express written permission of
	 the author and copyright holder.

	    Under the user-supported concept, you are given a 
	 complete, working software free. If you find you are using 
	 this software, a contribution of $35 is suggested. The money 
	 will cover the cost of bug fixes, improvements, postage, 
	 telephone bills, etc.

	     The contribution will make you a registered user.	As a 
	 registered user you are entitled to updates, support, and a 
	 current copy of the user's manual and software.
	 A registration form can be displayed and printed from a
	 prompt on the Main YFA Menu.  Or send $35 with your
	 name, address, computer type and the name of this software
	 to the address given above.  Please add $3.00 for shipping,
	 $5.00 for shipment by airmail outside the U.S.
h
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk #1792 HOME LOAN/YOUR FINANCIAL ANALYST  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start HOME LOAN, type:  HL (press enter)                             ║
║ To start YOUR FINANCIAL ANALYST type:  FINANCE (press enter)            ║
║                                                                         ║
║ To print HOME LOAN documentation, type:                                 ║
║                                COPY INTRO.DOC PRN (press enter)         ║
║ To print YOUR FINANCIAL ANALYST documentation, type:                    ║
║                                PRINT (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.DOC

{% raw %}
```





				  HOME LOAN
			(THE HOME FINANCIAL CALCULATOR)
				VERSION  2.20

			   HomeCraft Computer Products
				 P.O. Box 974
			      Tualatin,  OR  97062
				(503) 692-3732









	       This disk contains version 2.20 of Your Financial Analyst
	 dated 12-03-88.  This disk contains the following files:


		   HL.EXE - Introduction and copyright notice
		 CALC.PGM - Main Menu and program
		SETUP.PGM - Name and Address Entry
		 LOAN.HLP - Help screens
		    *.DOC - Introduction and documentation
		VALUE.DAT - Data file used by Equity Calculator
		 NAME.DAT - Data file used by SETUP
		 MENU.OVL - File required to run program
	       BRUN30.EXE - File required to run program


	 ****************************************************************
	 ****************************************************************
	 ****************************************************************




	 YOU'VE HEARD IT SAID THAT KNOWLEDGE IS POWER.
	 THIS IS ESPECIALLY TRUE ANYTIME YOU'RE MAKING A PURCHASE THAT
	 INVOLVES FINANCING.  THE SALESMAN USUALLY HAS THE ADVANTAGE
	 BECAUSE HE HAS THE EXPERIENCE AND KNOWLEDGE.  HOME LOAN
	 CAN BE THE EQUALIZER, GIVING YOU THE KNOWNLEDGE YOU NEED.


	    For example, if you're buying a new $12,000 car and can
	 get $4500 on your trade-in, should you take the 3.9% dealer
	 financing, or the $600 discount and finance the car 
	 with a 8.75% loan from the credit union?

	    Can you afford the monthly payments if you refinance your
	 30 year, 11.25% mortgage as a new 15 year, 9.5% mortgage - or
	 should you get a new 30 year mortgage and use the difference
	 in monthly payments to buy a new boat?

 
	     Other features of Your Financial Analyst include:

	     <> Calculation of the amount of a loan.
		(Based on monthly payment, term and interest rate)
	     <> Calculation of the term of a loan.
		(Based on monthly payment, amount and interest rate)

	     <> Present Value
	     <> Future Value
	     <> Value Of An Annuity

	     <> Amortization tables
	     <> Retirement Planning
	     <> IRA Planning
	     <> College Cost Planning

	     <> Loan Planning - under the new tax law your home is 
	 your best source of equity for getting a loan.  Your Financial
	 Analyst keeps a running balance of your equity and the amount you 
	 can borrow while maintaining the interest as tax deductible.

	 SYSTEM REQUIREMENTS: IBM PC, XT, AT or compatible with 192K, 
	 one disk drive, and DOS 2.0 or later.



	 ****************************************************************
	 ****************************************************************
	 ****************************************************************



  ADDITIONAL SOFTWARE - PAM

	     Your Financial Analyst is a part of a larger program that 
	 is desinged as a complete home financial package.  It is called 
	 the PERSONAL ASSET MANAGER(tm) (PAM).

	     Would you like to make balancing your checkbook a simple 
	 task?	PAM can do it for you.

	     Are you sure your home and its contents are adequately 
	 insured?  PAM can check it for you.

	     How much do you need to start saving now in order to be 
	 able to pay for your children's college education?  PAM can 
	 calculate it for you.


	     The HMM Personal Asset Manager (PAM) combines three
	 software packages, Home Money Manager II, Home Insurance and
	 Your Financial Analyst into one package - allowing you to 
	 access any one from a single menu.

	 SYSTEM REQUIREMENTS: IBM PC, XT, AT or compatible with 192K 
	 and DOS 2.0 or later.



  SUMMARY OF PAM FEATURES


	 THE HOME MONEY MANAGER - II (HMM-II) is checkbook and 
	 budgeting software.  HMM-II provides 12 check registers plus
	 12 additional registers for credit cards.  Other features include
	 check printing, over 950 income and expense categories, marking of 
	 tax deductible transactions, a large number of printed 
	 reports, a print to disk capability and more.	


	 HOME INSURANCE is a home inventory and record keeping system 
	 that allows you to keep track of what you own, where it is 
	 located, any identifying marks and serial numbers and its 
	 value.  In addition, Home Insurance can make automatic 
	 adjustments for inflation (or depreciation) and it provides a 
	 large number of printed reports and searches.

	 Home Insurance also provides features to help with your life 
	 insurance planning and insurance record keeping.


	 YOUR FINANCIAL ANALYST has already been described earlier.

	 PAM is available for $129.95 from HomeCraft
	 Computer Products at the address given below.



	 ***********************************************************
	 ***********************************************************
	 ***********************************************************



  USER-SUPPORTED SOFTWARE

	    This software has been placed in circulation under the 
	 user supported concept.  Non-profit groups and individuals 
	 are encouraged to make copies of this disk and distribute it 
	 to their members and friends as long as the software is 
	 provided at no cost.  However, a distibution charge of up to 
	 $10 may be charged to cover the cost of diskettes, handling 
	 and duplicating.

	    Under the user-supported concept, you are given a 
	 complete, working software free. If you find you are using 
	 this software, a contribution of $35 is suggested. The money 
	 will cover the cost of bug fixes, improvements, postage, 
	 telephone bills, etc.

	     The contribution will make you a registered user.	As a 
	 registered user you are entitled to updates, support, and a 
	 current copy of the user's manual and software.
	 A registration form can be displayed and printed from a
	 prompt on the Main Your Financial Analyst Menu.  Or send $35 with
	 your name, address, computer type and the name of this software
	 to the address given below.  Please add $3.00 for shipping or
	 $5.00 for airmail shipment outside the U.S.


	 ***********************************************************
	 ***********************************************************


  DISCLAIMER


	 THIS SOFTWARE IS PROVIDED "AS IS,"  THERE ARE NO WARRANTIES, 
	 EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
	 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
	 PARTICULAR PURPOSE, AND ALL SUCH WARRANTIES ARE EXPRESSLY AND 
	 SPECIFICALLY DISCLAIMED.  NEITHER HOMECRAFT COMPUTER PRODUCTS 
	 NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION, 
	 PRODUCTION, OR DELIVERY OF THIS SOFTWARE SHALL BE LIABLE FOR 
	 ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES 
	 ARISING OUT OF THE USE OR INABILITY TO USE SUCH SOFTWARE EVEN 
	 IF HOMECRAFT COMPUTER PRODUCTS HAS BEEN ADVISED OF THE 
	 POSSIBILITY OF SUCH DAMAGES OR CLAIMS.

	 This disclaimer shall be governed by the laws of 
	 the State of Oregon and shall inure to the benefit of Steven 
	 C. Hudgik, his successors, administrators, heirs and assigns.



  MORE INFORMATION

	      For more information on Your Financial Analyst or other HomeCraft 
	 software products contact:

	       Steve Hudgik
	       HomeCraft Computer Products
	       P.O. Box 974
	       Tualatin,  OR  97062 


ontact:

	       Steve Hudgik
	       HomeCraft Computer Products
	       P.O. Bo
```
{% endraw %}

## OTHER.DOC

{% raw %}
```






OTHER SOFTWARE PUBLISHED BY HOMECRAFT:




***************************************************************************
***************************************************************************
***************************************************************************

THE COLLECTORS SERIES


All of the software in the collector's series has been specifically
designed for a certain type of collection.  Each allows you to catalog
your collection using 21 different characteristics and you can perform
searches based on any combination of the information you've entered.

This series is unique in that each of the programs provides three levels
of operation providing screens for beginning collectors through professionals.
You can change from one level two another via a selection on the main menu.

All of the software in the collectors series has been designed so your
computer does all the work - and it's easy for you to learn and use.  Over
half of our users purchased their first computer so they could use one of
the programs listed below.

The following programs are a part of the collectors series:


	FOR RECORD COLLECTORS (LPs, 45s, CDs, cassettes, etc.)
	FOR RECORD COLLECTORS - CLASSICAL MUSIC VERSION
	BOOK MINDER (Books and magazine articles)
	FOR COMIC BOOK COLLECTORS (comic books)
	FOR PHOTOGRAPHERS (Slides, negatives and prints)
	THE VIDEO VEWER (Video tapes & laser disks)
	FOR BASE BALL CARDS
	THE INFORMATION INDEX (Misc. information such as
	  recipes, dieting instructions, jokes, trivia,
	  exercise instructions, etc.).


Plus there's more collector's software on the way!



















***************************************************************************
***************************************************************************
***************************************************************************

HOME FINANCIAL SOFTWARE


Home Money Manager II - Checkbook and budgeting software designed specifically
			for the home user.  In addition to being able to
			provide the normal features that most home accounting
			has, HMM-II has several unique features.  For example,
			in addition to split entries, you can also split
			your checking accounts; each portion of a split entry
			can have its own memo; there are four editors that
			allow you to make changes at any time; and HMM-II
			automatically adjusts itself for use with any micro-
			computer printer (including laser printers set for
			66 lines per page).

			HMM-II prints checks, tracks up to 12 checking accounts
			on a floppy disk (plus 12 credit accounts), can handle
			ATM and telephone transactions, provides over 950
			expense catagories, and allows tracking of tax
			deductible expenses.


Home Loan (The Financial Calculator) - Home Loan not only calculates the
			monthly payment for nearly any type loan, it
			provides tables showing the effects of various loan
			options at a glance.  Calculation of amortization
			tables, the value of an annuity, present value, and
			future value are also provided.  In addition, Home
			Loan has special sections to help plan for your
			retirement, calculate the value of your IRA, plan
			for your children's college expenses and to do
			equity calculations for your home.


Home Insurance (Home Inventory and Insurance Planning) - provides a way for
			you to keep track of what you own, where it is
			located, what it cost, and any identifying marks.
			Home Insurance uses the same user interface as the
			collectors series and thus each item in your
			inventory can be cataloged using any of 22 
			characteristics (serial #, model #, color, etc.)

			Home Insurance also provides several other features
			to help with your insurance planning.  A life
			insurance estimator will take your current financial
			status and your future plans, and calculate the
			amount of life insurance you need.  An insurance
			records file provides a convient place to store
			vital information about your insurance policies.


Personal Asset Manager (tm) - Combines all three of the above into a single
			integrated system.








***************************************************************************
***************************************************************************
***************************************************************************


EDUCATIONAL


Play 'n' Learn - combines 6 education games (plus an additional 12 variations)
		 for very young children - ages 18 months to 4 years.  These
		 games include:

		 Amanda's Letter Lotto > learn the alphabet
		 Zach-A-Doodle > Etch-A-Sketch type game
		 Color Screen > a very simple game that changes screen colors
		 Color Match > learn colors and the alphabet
		 Word Whirl > learn about words and names
		 Next Number > learn numbers 1-9
		 Black Board Shapes > learn to match shapes


		 The Play 'n' Learn games are also designed to help your
		 learn about using computers.  They teach skills ranging
		 from just getting a response from pushing any key, to
		 multiple key combinations and making menu selections.



COMING SOON - Amanda's Spelling Bee, educational games for children
	      3 to 5 years old.



































***************************************************************************
***************************************************************************
***************************************************************************


HOME PRODUCTIVITY


Software in this catagory will be released in 1989 and will include
HOLIDAY MANAGER to help with sending cards for the holidays and
special occassions.



***************************************************************************
***************************************************************************
***************************************************************************


For more information on any of the above write to:


		HomeCraft
		P.O. Box 974
		Tualatin,  OR  97062























If you missed any of the information, push CTRL NUM LOCK to pause the
screen and any other key to restart it.










u missed any of the information, push CTRL NUM LOCK 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0792

     Volume in drive A is DISK0792
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CALC     EXE     49713  12-03-88   4:19a
    FILES792 TXT      4367  10-19-89   5:35p
    FINANCE  DOC     41088  12-03-88   4:40a
    FINANCE  EXE     32577  12-03-88   4:11a
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       848  10-19-89   6:37p
    HL       EXE      9249  12-03-88   4:04a
    INTRO    DOC      7424  12-03-88   4:31a
    LOAN     HLP      5888  12-02-88   8:15p
    MENU     OVL       150  12-06-88  10:05a
    NAME     DAT       480  12-03-88   4:44a
    OTHER    DOC      6400  10-09-88   4:39p
    PRINT    BAT       384  12-03-88   4:33a
    READ     ME        512  10-29-88   9:44p
    SETUP    EXE      7025  12-03-88   4:10a
    VALUE    DAT       360   5-30-87   9:51p
           17 file(s)     237183 bytes
                           74752 bytes free
