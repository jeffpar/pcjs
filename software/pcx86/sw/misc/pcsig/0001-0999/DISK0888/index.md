---
layout: page
title: "PC-SIG Diskette Library (Disk #888)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0888/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0888"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PULLED FROM THE LIBRARY"

    MANAGEX I is based on the idea that it is best to send a statement to
    each client at some regular interval.  Even when nothing is due from the
    client during that period, a statement should be sent, just to let the
    client know you're thinking of him.
    
    The minimum period for which a client can be billed with MANAGEX I is
    one calendar month.  Each bill includes all transactions from the
    beginning of the first month covered by the bill to the end of the last
    month covered.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MANAGEX.DOC

{% raw %}
```
1


                          MANAGEX DOCUMENTATION

                                 LICENSE

        The following text and the ManageX program are copyrighted (C)
   in 1985, 1986, & 1987 by R.A. Kelly.  They are published by Integra
   Computing.  You may use ManageX I on a single computer, provided that 
   you do not use it in a business with more than 15 employees and that
   you accept the terms of the following AGREEMENT.  You may distribute 
   ManageX I, as long as this license and the following disclaimer, agree-
   ment and instructions accompany the program.  You may not distribute 
   ManageX I if any of its accompanying files or this documentation has 
   been altered.  No fee may be charged for ManageX I, nor may ManageX I 
   be bundled with (or in any way accompany or be used as an incentive 
   to purchase or lease) any other product or service, without the express 
   written consent of R.A. Kelly.
  
         All rights not expressly granted in the above paragraph are
   reserved in R.A. Kelly.  ManageX is a trademark of Integra Computing.

                                 DISCLAIMER

        Though ManageX and its predecessors have been under development 
   since 1984, ManageX may contain design and programming flaws.  Before 
   using ANY software on a regular basis, try estimating the potential
   harm that could result from your reliance upon it.  Please don't use 
   ManageX unless you are willing to assume the associated risks.

        MANAGEX AND ITS INSTRUCTIONS ARE PROVIDED "AS IS", WITHOUT 
   WARRANTY OF ANY KIND (INCLUDING THE IMPLIED WARRANTIES OF MERCHANT-
   ABILITY AND FITNESS FOR A PARTICULAR PURPOSE).  NO ORAL OR WRITTEN 
   INFORMATION OR ADVICE PROVIDED BY INTEGRA, ITS DEALERS, DISTRIBUTORS, 
   AGENTS, OR EMPLOYEES SHALL CREATE A WARRANTY OF ANY KIND REGARDING 
   MANAGEX, AND YOU MAY NOT RELY UPON SUCH INFORMATION OR ADVICE.  USE
   OF MANAGEX IS ENTIRELY AT YOUR OWN RISK.

        NEITHER INTEGRA NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE
   CREATION, PRODUCTION, OR DELIVERY OF MANAGEX SHALL BE LIABLE FOR ANY
   DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES (INCLUDING,
   BUT NOT LIMITED TO, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
   INTERRUPTION, AND LOSS OF BUSINESS INFORMATION) ARISING FROM THE
   USE OF (OR INABILITY TO USE) MANAGEX, EVEN THOUGH INTEGRA MAY BE
   ADVISED THAT SUCH DAMAGES ARE POSSIBLE.

        THIS DISCLAIMER APPLIES TO ALL PAST, PRESENT AND FUTURE VERSIONS
   OF MANAGEX, AS WELL AS TO UPGRADES, AUGMENTATIONS, EXTENSIONS, EXTRA 
   MODULES, AND MODIFICATIONS OF THE PROGRAM THAT MAY BE PROVIDED TO YOU. 

                                 AGREEMENT

        As used in this documentation, the term "ManageX", if not followed
   by a series or version designation, means any version or series of 
   ManageX provided to you now or in the future.
2




        Your attempt to use ManageX constitutes your acceptance of the 
   terms set forth in the foregoing LICENSE and DISCLAIMER (which are
   incorporated into this Agreement).  Your attempt to use ManageX also 
   constitutes your agreement that if you bring any legal action relating
   to ManageX, 1) your sole remedy for the damages for which any defendant
   is found liable (including direct, indirect, incidental and consequential
   damages) will be the recovery from that defendant of whatever you will 
   have paid to register as a ManageX user; and 2) you will pay the defen-
   dants' attorneys fees and other legal costs.

        The terms of this agreement are governed by Georgia law.  If any of 
   this Agreement's terms shall be held invalid to any extent, the remainder 
   of this Agreement shall be unaffected by such invalidity.

        THE ABOVE PARAGRAPHS CONSTITUTE THE ENTIRE AGREEMENT BETWEEN YOU
   AND INTEGRA.  NO ORAL OR WRITTEN COMMUNICATION, INFORMATION, OR ADVICE
   FROM ANY SOURCE MAY ALTER THE AGREEMENT AS SET FORTH ABOVE.

3


        SOME STATES DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR
   OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO SOME OF THE
   ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.  YOU MAY HAVE
   OTHER RIGHTS WHICH MAY VARY FROM STATE TO STATE.

4




    NOTE:  This is an abridged version of the instructions.  Registration 
           will entitle you to COMPLETE documentation on disk.


    NOTE:  Please remember to distribute only copies of the ORIGINAL ManageX
           files.  Don't pass on copies that you've already had on your hard
           disk, because using the program customizes it for YOU.
5



     SECTION 1.    INTRODUCTION


     Sec.1.A  WHAT MANAGEX WILL DO
     
          ManageX is based upon the proposition that it is usually best to 
     send a statement to each client at some regular interval, preferably 
     every month.  Even when nothing is due from the client for work done 
     during that period, a statement should be sent, if for no other 
     reason, to let him know that you're still thinking of him.

          The minimum period for which a client may be billed is one cal-
     endar month.  Each bill will include all transactions from the begin-
     ning of the first month covered by the bill to the end of the last 
     month covered.  A bill may be re-prepared for the same calendar month 
     (or months) several times.  For example, if it were now January 15, 
     and you wanted to send Mr. Smith's bill for work done so far this 
     month, the bill prepared by ManageX would cover all work done during 
     the entire month of January (the beginning of the first month covered
     by the bill is January 1, and the end of the last month covered is 
     January 31).  However, since no work will have been done after the 
     fifteenth, the bill will effectively be one for only the period from 
     January 1 to January 15.  

          If, in February, you subsequently printed a Smith January bill, 
     the bill prepared would show work done during the entire month, in-
     cluding 1) a recap of what had already been shown on the previous 
     January bill and 2) what had been done from the 16th to the 31st.  
     You may not request a bill for only the period from January 16 to 
     January 31, since, as mentioned above, the minimum billing period is 
     one calendar month.  But don't worry.  Mr. Smith will NOT be charged 
     again for the work already reflected in the first bill.  The second 
     bill will SHOW that work for a second time (as a recap), but will not 
     CHARGE him a second time for it.  Of course, if Mr. Smith had sent 
     any payments since the first bill was mailed, those payments would 
     also be reflected on the second bill.  Each bill sent out for any 
     period of time reflects the most current status of the client's ac-
     count with you for that period.  ManageX is unique in that it allows 
     you to prepare bills for the same period many times, not just once.  
     Correcting and resubmitting bills to your clients present no problem 
     to ManageX.


     Sec.1.C.2  Case Names, Case Numbers, & Master Record Numbers 

          ManageX considers each matter handled by the firm to be a case.
     This nomenclature, ideal for accountants and lawyers, is also suitable
     for other professionals willing to adapt.  Each case will be assigned 
     a Case Name, a Case Number and a "MasterRcrd" Number.  The Case Name 
     is simply a convenient name by which you can recognize the case, such 
     as "Smith Project" or "State v. Williams".  The Case Number is used by 
     the program to locate the case record in the computer's data files.  
     It may be in the same format as that used by your firm to manually 
     file the paperwork pertaining to that case.  The MasterRcrd Number is 
     used to link up to 500 subordinate case records to their master record.

          Each case is subordinate to its master.  If a case is indepen-
     dent (that is, not subordinate to another), then it is its OWN mas-
     ter, and its Case Number and MasterRcrd Number will be the same.  If, 
6


     however, it is subordinate to another, then the other's Case Number 
     will be the subordinate's MasterRcrd Number.  For example, if case 
     number 2 were subordinate to case number 1, then case 2's MasterRcrd 
     Number would be "1" (case 1, being its own master, would also be 
     assigned MasterRcrd Number 1).

          When would you want to subordinate one case to another?  Assume, 
     that you and Mr. Smith had a retainer agreement whereby he would pay
     you $150 per month for any services he needed from you at any time.  
     You might set up a case record with the Case Name, "Smith Retainer" 
     and the Case Number, "SMITJO1".  If Mr. Smith subsequently asked you 
     to help him with a building contract, you might do one of two things.  
     One would be to charge the time you spend working on the contract to 
     the "Smith Retainer" (SMITJO1) case.

          The other would be to establish a separate case record, perhaps 
     named "Smith Contract" and possibly numbered "SMITJO2".  If you want-
     ed to make sure that both Mr. Smith's cases were linked for easy 
     subsequent identification, you would assign to the new SMITJO2 case 
     the MasterRcrd Number, "SMITJO1".  A graphic representation of this 
     master-subordinate relationship follows:

           MASTER                           SUBORDINATES
                                            Case #:        SmitJo1
                                            Case Name:     Smith Retainer
           Case #:        SmitJo1           MasterRcrd #:  SmitJo1 
           Case Name:     Smith Retainer
           MasterRcrd #:  SmitJo1           Case #:        SmitJo2
                                            Case Name:     Smith Contract
                                            MasterRcrd #:  SmitJo1

     As can be seen, the SMITJO1 case is its own master, and it also acts 
     as a master for the SMITJO2 case.  In the future, whenever you want 
     to look through ALL of Mr. Smith's cases, it will be easy, because 
     they all have the same MasterRcrd Number.  MasterRcrd Numbers LINK 
     several cases together for future reference.

          Now, on to a related matter.  Unlike some other programs, 
     ManageX does not require you to set up a separate "client record" 
     before you open any case (or "matter") records for the client.  Each 
     ManageX case record contains both matter AND client information.  
     Hence, if you have a client for whom you do not expect to be handling 
     more than one matter, you need open only ONE record (a case record) 
     for him, rather than TWO (a client record and a matter record).  If, 
     subsequent to your having opened that single record for him, the 
     client comes to you with more work, you may either: 1) do that addi-
     tional work under the same case already opened, or 2) set up another 
     case for him.  If you do the latter, you may, though you do not HAVE 
     to, link the two cases by making the first record the second's Mas-
     terRcrd.

          Though ManageX does not REQUIRE you to do so, you may set up 
     something comparable to a separate "client record" for each client 
     before opening actual cases for him.  To do so, you would actually 
     set up a "case" record for the client and use it as a MasterRcrd for 
     the several matters that you handle for him.  After all, a "client 
     record" does nothing more than link several cases together under one 
     client, and a ManageX MasterRcrd can serve the same function.  You 
     would tell ManageX that this record is intended to serve as a simple 
     client record by beginning its "case" name with an asterisk.  An 
7


     example of a "client" record follows:

         MASTER                             SUBORDINATES
                                            Case #:        SmitJo1
                                            Case Name:     Smith Retainer
         Case #:        SmitJo              MasterRcrd #:  SmitJo 
         Case Name:     *John Smith Cases
         MasterRcrd #:  SmitJo              Case #:        SmitJo2
                                            Case Name:     Smith Contract
                                            MasterRcrd #:  SmitJo

     In the above example, the SMITJO record is a "client" record, which 
     contains only the client's name, address, salutation, billing interval,
     and a "case" name beginning with an asterisk (any other information 
     filled in will be disregarded by ManageX, since this is only a "client", 
     not a real "case", record).

     Sec.1.D.2  Control characters

          On-screen instructions will frequently instruct you to press 
     control characters.  A control character is represented graphically 
     as a letter preceded by an up caret (eg: ^A or ^H).  If you are 
     instructed to press a control character, you must hold the Ctrl key 
     down, while simultaneously pressing the appropriate letter key.  For 
     example, to press ^O, hold down the Ctrl key and tap the "O" (or "o") 
     key.  Do not actually press the up carrot key; the up carrot is used 
     merely as a graphic representation of the control key. 

     Sec.1.D.4  Entering Numbers

          When prices or other monetary figures are entered, never enter 
     a dollar sign, comma or any symbol other than a minus sign.  If, for 
     instance, a price were $9,999.95, you would enter only "9999.95", not
     "$9999.95" or "9,999.95". 

     Sec.1.D.5  Pausing

          When you find the computer in the middle of some lengthy proce-
     dure, such as printing a report, and you want to pause, press the 
     space bar.  Doing so will cause the process to stop until you press 
     the space bar again.  This use of the space bar will not work in all 
     of the program's operational modes, but it will in most.

     Sec.1.D.6  Aborting

          If, instead of wishing that the computer pause in the middle of 
     a procedure, you prefer to abort that procedure altogether, press ESC 
     (the Escape key).  As with the space bar, this key may not work in 
     all parts of the program, and it may take a few seconds to work.

     Sec.1.D.7  Printer Toggling

          Whenever you are about to have a report printed on the screen, 
     and you would prefer that it be printed on your printer, press ^P 
     before the report preparation begins.  ^P is the printing toggle, and 
     it turns the flow of data to the printer on and off.

     Sec.1.D.9  EDIT.COM

          There are a few files which will need to be created or modified 
8


     by ManageX's text editor, EDIT.COM, before you can realize the 
     full potential of the program.  For instance, you may want to custom-
     ize the return address file, so that your correct address will be 
     reflected on bills prepared by ManageX.  

          EDIT.COM manipulates simple industry-standard ASCII code.  An 
     extra facility is the ability to imbed printer codes in the text pre-
     pared with EDIT.COM.  If, for instance, you want your printer to 
     switch to letter-quality mode when it prepares bills, you could place 
     the appropriate printer code (available in your printer's manual) at 
     the top of the return address file.  To imbed any control character 
     (such as the escape character), press ^P first.  For instance, to 
     imbed "esc N", actually enter "^P esc N".

          You may access EDIT.COM from ManageX's MAIN MENU by pressing ^E
     (for "Edit").

     Sec.1.D.10  Deciding which module to use

          Use of ManageX requires your understanding its basic modular 
     organization.  Each choice in the MAIN MENU corresponds to a differ-
     ent module.  There is a SERVICE/FEE module, a BILLING module, a DIS-
     BURSEMENTS module, and so on.  Whenever you want to do ANYTHING in 
     this program, you should go to the module whose subject matter most 
     probably encompasses what you want to do.  For instance, to run a 
     report showing all your services performed during any period, you 
     would go to the SERVICES/FEES module.  There may be times when your 
     first guess as to the proper module is incorrect.  In that case, 
     take a second guess, and you'll be right.

          Note that a disbursement is an amount ADVANCED or PAID BY YOU for 
     something.  It must be entered in the DISBURSEMENTS module.  If, for 
     instance, you have paid filing costs of $55, this expenditure is a dis- 
     bursement.  Do not enter it on a time slip in the SERVICE/FEE module.

          Receipts are often a source of confusion.  Remember that they 
     are money PAID TO YOU, that is, money that you intend to put into 
     YOUR coffers.  Money given to you in trust is NOT a receipt.  If a 
     client gives you $100 and you intend to put it into trust for him, DO 
     NOT enter it as a receipt.  That $100 should be entered into your 
     books as a deposit into a trust account (if you have ManageX III or
     IV, your books will be completely integrated into the program and
     will accessible within moments).  That $100 is not meant to be a pre-
     sent payment to you for past or future services; rather, it is meant 
     to be placed into trust for the client.  At some future time, you might 
     withdraw part or all of it from the trust account as a payment to you,
     but, until that time, it is not a RECEIPT; it is merely money given to 
     you in trust.  Remember, money given to you is a RECEIPT only if it is 
     going directly into YOUR pocket.

          Likewise, a disbursement is money paid by YOU, from YOUR FIRM's 
     accounts, not from a trust account.  DO NOT enter as a disbursement 
     any payment from a trust account.  Remember, it is not a disbursement 
     unless it comes from your firm's own funds.

          Do not read further until you understand the discussion, so far. 

          Sometimes, the item you wish to enter does not seem to fit well 
     into the main categories of services/fees, disbursements, and re-
     ceipts.  For instance, an established client's current (at the time 
9


     you first enter his data into ManageX's files) balance is not strict-
     ly a "fee", since it does not apply to a specific single event or 
     transaction.  Nevertheless, it must be entered somewhere.  The AD-
     JUSTMENTS module exists for the purpose of adjusting client bills for 
     things that do not seem to fit well into the categories discussed 
     above.  If, for instance, you wished to decrease the amount due re-
     flected on a bill, you would probably wish to register an adjustment 
     in the form of a write-off. 
10


     SECTION 2.    SETTING UP

     When you first begin using ManageX, you will have to answer a series
     of CUSTOMIZING questions.  Very brief explanations follow:

     -> Drive used for ManageX:  Enter the letter designation (C,D, etc.) 
        of the hard disk containing the MANAGEX subdirectory.
     -> Lines to Letterhead Bottom:  If not using letterhead, leave as zero;
        otherwise, count lines (6 per inch) to bottom of letterhead printing.
     -> Indent used for Addresses:  column (from left margin) where printing
        of addresses on bills should begin.  If unsure, leave as zero.
     -> Minimum Time: Minimum # of minutes charged per time slip.
     -> Hourly Rates: Rate 1 should be your standard rate; alternate rates 
        may be filled in as Rates 2 thru 6.  If there are more than one time-
        keeper, enter one or two rates for each.  You could, for instance,
        be assigned rates 1 and 2, while rates 3 and 4 might apply to someone
        else in the organization.  Please note that ManageX III and IV allow
        up to six rates for EACH of fifteen timekeepers. 

          The first time you use ManageX each month, you will be asked 
     whether you want to create that month's files.  Answer `Yes' by 
     pressing "Y", unless, for some reason you do NOT want to create them.

          Next, a message will appear, asking, "Do you want to erase un-
     needed monthly data files?".  Keeping some old files may be useful 
     for referencing data from previous months, but how many old files you 
     preserve depends upon how much hard disk space you are willing to de-
     vote to ManageX, and how much you need for other uses. 

          If you want to clear up some hard disk space by erasing old 
     monthly files, and if you have not already taken care of that matter, 
     press "Y" (for "Yes, I do want to...").  Make sure, however, that you 
     have floppy archive copies of the files about to be erased.  You never 
     know when you may need to retrieve some old data which has been deleted 
     from the hard disk.  If you have not made the archives AND prepared ALL
     bills which will draw upon data compiled during the months you are 
     considering deleting, you should NOT delete those months' files.

          If you answer "Y", ManageX will ask for the month whose files are
     to be erased.  After confirming that bills and archives have been pre-
     pared for that month, ManageX will erase the old data files for you.
     Then, files for the current month will be created, and you will be
     taken to the  MAIN MENU.
11


     SECTION 3.    CASE MODULE


     Sec.3.A  (M)AKE A NEW RECORD

          If you press "M", you will be asked to give ManageX a Case Num-
     ber for the new case.  After you enter it, you will be taken into the 
     Edit mode, where you can fill in other information pertaining to that 
     case.  If the case you are entering is one that was opened before you
     began using ManageX, please read Section 9 of these instructions. 

     Sec.3.A.1  MasterRcrd Number

           You will note that this number has already been assigned.  It  
     is always initially presumed that a case's master is that case, 
     itself.  If you wish to change it, just use the cursor control and 
     delete keys to do so.  Once the new masterRcrd number has been
     entered, ManageX will search for that case to confirm its existence.  
     If it cannot find the masterRcrd, it will tell you so.  If it does 
     find the masterRcrd, certain common information will be transferred 
     from that case to the new one you are now creating.

          A subordinate case MUST NOT be entered into the file before the 
     master to which it refers.  A masterRcrd must always have been en-
     tered into the case file BEFORE its subordinates.

     Sec.3.A.2  Area of Business

          If you do not know the area of business or its number, and if 
     you would like some help, press the inquiry key, F1.  You will be 
     shown the contents of the M-LBAREA.DAT file, which contains a listing 
     of all the business categories and their corresponding numbers.  When 
     you find the area that fits this case, enter its number and procede 
     to the next item.  See the CODES, AREAS OF BUSINESS section for 
     instructions on how you may change the M-LBAREA.DAT file. 

     Sec.3.A.3  Methods of Charging Your Clients

          If you have an arrangement with your client whereby he is to pay 
     you a certain amount each month until his debt is paid, enter that 
     amount as the "MonthlyPmnt".  If the MonthlyPmnt is zero, ManageX will 
     assume that the client is supposed to pay the whole balance shown on 
     each bill.  If the MonthlyPmnt item is greater than zero, each bill 
     for this case will contain a statement reminding the client that he 
     need pay no more than the MonthlyPmnt, even though it may be less 
     than the total balance due.  Also, if the MonthlyPmnt is greater than 
     zero, ManageX will NOT calculate interest for this case, even though 
     you specify an interest rate, as discussed below. 

         NOTE:
               Don't confuse a MonthlyPmnt with a Monthly Retainer 
         A "retainer" is a regular monthly payment which is due you,
         whether or not the client has an outstanding balance at the 
         time a bill is prepared.  The MonthlyPmnt is due ONLY if the 
         client has an outstanding balance.  The MonthlyPmnt is a 
         payment on a debt, while the retainer is a sum paid to you 
         regularly in order to keep you "on the line", ready to provide 
         services at the drop of a hat.

          Note that ManageX uses the term, "retainer", to mean a recurring 
12


     payment made to the firm each month by the client.  Some firms,      
     however, use the term to mean a fixed fee paid in advance by the cli-
     ent.  If a case is to be charged a fixed fee (even though you may 
     call it a "retainer"), it should be entered next to the "Fixed Fee" 
     item, whether or not it is to be paid in advance; if it IS paid in 
     advance, you should, as soon as possible, enter the payment in the 
     RECEIPTS module, or, if appropriate, enter it as a trust account de-
     posit in your books (which are completely integrated into the pro-
     gram if you have ManageX III or IV).

     Sec.3.B  (E)DIT/EXAMINE A CASE

          If you do not know the case number (of the case you wish to edit)
     and would like some help, press F1. You will be shown a list of all 
     the cases on the disk.  To narrow the search, you should press the 
     first letter of the client's last name just before you press F1.  
     If you precede F1 with a letter, you will be shown only those cases 
     whose client last names begin with that letter.]

     Sec.3.C  (H)UNT FOR SOME INFO

          If you press "H" while in the CASES MENU, you will be taken to a 
     Hunt Gates display.  Here, you are to select the gates you want to 
     apply to the search through the case file.  The Hunt Gates allow 
     passage of only those records which contain information consistent 
     with the Hunt Gate parameters you select.  For example, if you wanted 
     to find records of all clients who work for a certain company, you 
     would enter a portion of the company name at item D (assuming  that 
     you consistently used the Addrs1 line for company names).  If you 
     wanted to find all cases with a certain masterRcrd number, you would 
     enter a portion of that number at item A.  Entering something at both 
     A and D would narrow the search to only those cases whose MasterRcrd 
     Numbers and Addrs1's contained matches for items A and D.

           Hunt routine searches for any item whose entry is alphanumeric 
     (as opposed to strictly numeric) may be made on the basis of partial 
     entries.  For instance, if you wished to find all cases whose 
     Addrs1's were either "Smith Enterprises" or "Smith, Inc", you would 
     need to enter only "Smith" at item D.  All cases whose Addrs1's con-
     tained "Smith" would be shown to you.  Included among these cases 
     might be "Jones and Smith, Ltd" and "The John Smith Company".  Any 
     case whose Addrs1 contained "Smith" would be included.

         NOTE:
               This valuable partial entry feature is contained in 
         the Hunt mode of every ManageX module.  It is applicable to 
         only alphanumeric items (those which may contain either 
         letters or numbers).  It does not apply to dates, amounts, 
         and a few other items.  

          To find cases applicable to a certain areas of business range, 
     set Gates F and G accordingly.  If all your divorce areas were 
     numbered between 100 and 150, you would set Gate F to "100" and 
     Gate G to "150" if you wanted to look for all your divorce work.  
     To find only a SINGLE area of business, both Gates F and G (that is, 
     both the lowest and the highest area of law to be reported) should 
     be identical. 

          Any gate that is left blank will be considered to be open, al-
     lowing ANY record to pass through.  In other words, each record will 
13


     be deemed to meet that gate's criterion, and, assuming that all the 
     other gates' criteria are also met, will be displayed during the 
     hunt.

          To begin the hunt, press F6.  For a printout of the hunt, press 
     ^P at some time before you press F6.

          Once the Hunting process begins, you will be shown the data for 
     each record conforming to the Hunt gates you have established.  If 
     you have chosen to display "One-Line" summaries (gate Q), data for 
     each conforming record will appear on one line.  The program will 
     then automatically search for the next conforming record, display it, 
     then look for the next one, and so on.  You may make the program 
     pause in its searching by pressing ^S or the space bar.  Pressing ESC 
     will abort the hunting process.

          If you have chosen the "Full-Screen" summaries display (gate Q), 
     the data shown for each conforming record will appear on a screen 
     identical to that used in the Edit mode.  Only one conforming file's 
     data will be displayed on the screen at one time.  Unlike the One-
     Line summaries routine, this one will not search for the next 
     conforming file unless you press F6 to indicate that you wish to move 
     on.  If you want to abort the Hunt routine, press ESC instead of F6.
14


     SECTION 4.    SERVICES/FEES MODULE

     Sec.4.A  (M)AKE A TIME SLIP OR FEE RECORD

     Sec.4.A.1  Abbreviations

          Description entries may be shortened (and disk space saved) 
     through the use of abbreviations or office codes (such codes are 
     contained in a file named M-LBCODE.DAT, and you may use EDIT.COM to 
     customize this file's codes for your own use -- see the CODES sec-
     tion).  To enter a service code, simply type it and end it with a 
     backslash.  Assume, for example, that the code for "Office Conference 
     with" were "OC".  If you wished to enter an office conference with 
     Mr. Smith, you could enter either "Office Conference with Mr. Smith" 
     or "OC\Mr. Smith".  If you entered the latter, you could be saving 
     time by typing fewer characters and also saving disk space.  ManageX 
     would know what "OC\" means.  If you subsequently prepared a bill 
     containing the service description, "OC\Mr. Smith", ManageX would 
     actually type out "Office Conference with Mr. Smith".

         If you need to see a listing of the acceptable codes, press the 
     inquiry key, F1.  If you press F1, you will be shown the contents of
     the M-LBCODE.DAT file (which contains not only codes, but also income/
     expense categories).

     Sec.4.A.2  Next Time Slip

          To finish the service record entry and move on, press F6.  Mana-
     geX will then automatically take you to another time slip/fee entry 
     record to be filled out.  If you do not need to make any more en-
     tries, just press F6 again. 

     Sec.4.B  (Z)IP TO A TIME SLIP

         As you go through a day, you will often find yourself working on
     several cases simultaneously.  As you perform a task for each, you 
     should enter it onto a time slip.  Of course, you may make out a
     separate time slip for each task performed.  But, alternatively, you
     may use thihs (Z)ip function to add each new service performed for a 
     case to the first time slip opened that day for that case.  

          When the time slip appears, add to it as you wish.  If you want to
     begin the automatic timer, press ^T; to stop the timer, press ^T again 
     (or press F6 or esc).  When the auto timer stops, the dollar value of 
     this most recent time block will be added to the time slip's previous 
     total.  Thus, every time you zip to a time slip during the day, you may
     keep adding to the total time and dollar amount by simply pressing ^T
     when you begin and end your entry.  This feature is most useful if you
     keep ManageX in the computer's memory at all times, through the use of
     a multi-tasking program like DoubleDOS or DESQview.
15


     SECTION 5.    DISBURSEMENTS MODULE


     Sec.5.A  (M)AKE A DISBURSEMENT

     Sec.5.A.1  Expense Category

          If you wish to later be able to sort your disbursements by cate-
     gory, enter the category number (1 to 9999) here.  If you are in 
     doubt about the appropriate category number, press F1 for a listing. 
     Doing so will result in displaying the contents of the M-LBCODE.DAT 
     file (which contains not only codes, but also income/expense cate-
     gories).  If M-LBCODE.DAT does not have the category you wish, remem-
     ber that you may modify it with EDIT.COM to suit your individual 
     needs (see the CODES section). 

     Sec.5.B  (H)UNT FOR INFO 

          These Hunt Gates are similar to those found elsewhere.

          At the end of a hunt sequence, there will be a series of 
     hunt totals.  Included in the Hunt Totals are the total charges. The 
     totals account only for those records shown during the hunt.  Charges 
     for other records will not be included.  For instance, if you abort a 
     hunt by pressing the ESC key, the charges for the records which WOULD 
     HAVE BEEN SHOWN (but for your having pressed ESC) will not be in-
     cluded in the totals.  
16


     SECTION 6.    BILLS 

     Sec.6.A.1  Composition of Bills

          Bills consist of six parts: 

         1  a return address;
         2  a client name, address and salutation, drawn from the 
             appropriate case's record at the time of the bill's 
             preparation;
         3  an opening statement;
         4  a basic data section drawn from transaction data at the
             time of the bill's preparation; 
         5  a closing statement; and
         6  a signature block.

     Sec.6.A.2  Return Address File

          The return address must be contained in a file called "M-
     RETADD.LTR".  Whenever ManageX prepares a bill, it will find this 
     file and print it onto the statement.  The file should be created with 
     EDIT.COM before you try to prepare any statements.  If it is not on 
     the disk when a statement is prepared, no return address will be 
     printed.  If you plan to use letterhead stationery, erase M-
     RETADD.LTR from the disk and make sure that you have entered the 
     correct figure for the number of "Lines from paper top to letterhead 
     printing bottom" in the MAIN MENU's (^C)ustomize routine.  

          After the return address (if such a file exists) is printed, 
     ManageX will print the statement date, followed by the client's name, 
     address, and salutation (as stored in the Case record of the case for 
     which the statement is being prepared).  If the format chosen for the 
     case whose bill is being prepared ends with a minus (eg: "8-"), then 
     no salutation will be printed.

          Between the client address and the salutation will appear a 
     short reference ("RE:") section, which will include the case Number 
     and case Name.  

     Sec.6.A.3  Opening Statement

          Next comes the opening portion of the bill, which should include 
     any remarks you wish to precede the details of the statement.  An 
     example would be,

         Following is a summary of the services we have recently 
         rendered in your behalf.

          The opening portion must be in a file named "M-BLOPEN.LTR", which
     is included with the ManageX program as an example.  You may modify it 
     with EDIT.COM to suit your purposes.

          After the opening portion is printed, ManageX will print the 
     statement details.  This part of the statement consists of a listing 
     of all services, fees, disbursements, income, etc., pertaining to the 
     case whose statement is being prepared for a certain month. 

     Sec.6.A.4  Closing Statement

          The closing portion of the bill should include any remarks you 
17


     wish to follow the details of the statement.  An example would be,

         Please promptly pay any amount shown above as being due this 
         firm.  Thank you.

          The closing file for a bill with a balance owed is "M-BLOWED.-
     LTR", while that for a bill with a zero or credit balance must be
     "M-BLCRDT.LTR".  

     Sec.6.A.5  Signature Block

          The signature block portion of the bill also requires a file 
     created by EDIT.COM.  To create such a file, press ^E at the MAIN 
     MENU, press `S' when the EDIT menu appears.  Then create the 
     signature block in any fashion you desire.

          If you do not want a signature block printed on your statements, 
     erase the "M-SGNxxx.LTR" file from your hard disk.

     Sec.6.B  PREPARING A BILL

          [self explanatory]

     Sec.6.C.  STATEMENT RE-PREPARATION

          You should avoid having a bill prepared for a month preceding 
     one for which another bill has already been prepared.  For example, 
     if February's bill has already been prepared, and you subsequently 
     have January's prepared again, you will also have to re-prepare 
     February's.  The reason for this is that the beginning balance for 
     the bill already prepared for February will have been based upon the 
     ending balance for the January bill already prepared.  If you were 
     now to go back and change January's bill, the January ending balance 
     might not be the same as it had been before.  Therefore, the 
     beginning balance for the February bill already prepared might no 
     longer be accurate.  Only if you prepare February's bill again will 
     all beginning and ending balances become consistent again.
18


     SECTION 7.   CODES and AREAS OF BUSINESS


     Sec.7.A  CODES (ABBREVIATIONS, CATEGORIES)

          The M-LBCODE.DAT file contains three types of information, 
     all conforming to the same general format.  It holds a listing of 
     each  1) service code, 2) income category, and 3) expense category.  
     Each line in the file consists of an abbreviation (from 1 to 3 char-
     acters long) and the statement being abbreviated.  Other optional
     items are also included, as described below.  You are encouraged to 
     change this file with EDIT.COM, so that it fits your needs exactly.  

          Go to EDIT.COM (to examine M-LBCODE.DAT) by pressing ^E when 
     the MAIN MENU is displayed.  When the EDIT.COM menu is on the screen,
     press `E' (for "Expense/Income/Service" file) to modify M-LBCODE.DAT.

          The file may have a total of up to 200 lines.  The items in each 
     line must be lined up EXACTLY, and each line must end with a carriage 
     RETurn.  The abbreviation may be from one to three characters in 
     length and must begin in column 1.  The statement being abbreviated 
     should begin in column 6, 7, 8 or 9, and may not extend beyond column 
     30.  The TAB key in EDIT.COM will help you align your data.

          You may have blank lines which contain no information, and you 
     may have lines containing headings, but you may have no more than 200 
     lines.

     Sec.7.A.1  Income/Expense Category Numbers

          If you are using a line for an income or expense description, 
     the last item (beginning at column 33) should be the income or 
     expense category, and the first item (the abbreviation) may be left 
     blank if you wish.  That category may be any number between 1 and 
     9999.  Do not use zero.  Begin your category entry at column 33.  
     If it is an income category, begin the entry with "I-"; if it is 
     an expense category, begin it with "E-".  For example, an income 
     category is represented by "I-1001", while "E-2054" represents an 
     expense category.  Do NOT use the same numbers for both expense 
     and income categories.  For instance, do not designate both these 
     categories: I-2054 and E-2054.  And DO NOT USE FRACTIONS to designate 
     categories -- only WHOLE numbers are allowed.

     Sec.7.A.2  Client Mark-Ups

          If you wish to charge clients a surcharge for your expenses in 
     their behalf, enter, at column 60, the factor by which you wish to 
     multiply your actual cost in order to arrive at the amount to charge
     your clients.  For instance, if your mark-up for a particular expense
     category is 10%, enter 1.10; if it is 25%, enter 1.25.

     Sec.7.B  AREAS OF BUSINESS 

          The M-LBAREA.DAT file supplied by Integra contains a listing of 
     the areas of business.  You should edit this file to fit your needs.  
     It should consist of no more than 24 lines (make sure that no blank 
     lines remain at the end of the file).  Each line may be up to 77 
     characters long.  Unlike the M-LBCODE.DAT file, you are not required 
     to line up certain information within M-LBAREA.DAT.  Use EDIT.COM 
     (^E, pressed when the MAIN MENU is displayed) to set up this file.
19


     SECTION 8.  MESSAGES

     [A full Messages section is provided to registered users]
20


     SECTION 9.  USING MANAGEX WITH OLD CASES


          When ManageX prepares bills, it automatically keeps up with 
     each case's balance brought forward from the previous billing period.
     A problem arises, however, when ManageX prepares its first bill for 
     a case that was opened and billed BEFORE YOU BEGAN USING the program.
     In this case, ManageX will have no historical data from which to 
     derive a "balance brought forward".

          To avoid this problem for an old case, go to the ADJUSTMENTS 
     (Write-offs and Adjustments) module immediately after setting up 
     the case in the CASES module.  Enter an adjustment with today's
     date.  If the client owes you money, make it a Charge; if you owe
     him, make it a Write-off.  The description should be something like,
     "Balance From Previous Bill". 

           This special treatment is needed only for the FIRST bill 
     ManageX prepares for each case opened before you began using the 
     program.

```
{% endraw %}

## README.DOC

{% raw %}
```
                             MANAGEX, series I


     This is ManageX I, your PERSONAL version of an extremely powerful time-
keeping, billing, and bookkeeping package.  It's designed to help attorneys,
accountants, and other professionals keep precise records and bill regularly.

     ManageX requires an IBM-compatible PC/XT/AT with a hard disk, DOS 2.1 or
greater and enough memory to devote 190K solely to ManageX.

---------------
NOTE:  When you pass ManageX to your friends, provide only copies of the
       ORIGINAL program files found on the ManageX disk.  NEVER, NEVER pass
       along copies of the program that you've already used on your hard disk,
       because using the program alters some of its files (making them
       unsuitable for your friends).

---------------
To install MANAGEX:


    1: Put the ManageX diskette into drive A;
    2: Type "A:INSTALL C:" (assuming your hard disk is drive C);
    3: Copy BACKUP.COM and RESTORE.COM from your DOS diskette to the MANAGEX
       directory (or insure that they are in the PATH).

---------------
     ManageX is an intuitive program, but it has a great many features which
will remain hidden from you unless you read the instructions.  Unfortunately,
to fit the entire program and instructions onto one disk, the documentation
has had to be severly condensed.  Nearly all the program's features are men-
tioned, but substantial detail has been excised.  To get the most from the
program, you may wish to obtain a disk containing unabridged documentation.
You may do so by registering as a user for $40.  Registration entitles you to
the most recent version of ManageX I and to a disk containing ManageX's FULL
instrucions, including descriptions of all the additional functions offered by
ManageX III and ManageX IV (mentioned below), as well as examples of all the
billing formats.  Just print out the registration form by entering the follow-
ing command at the DOS prompt:  "type register.frm>prn".  Fill it in and send
it, along with your payment, to Integra Computing.  Thanks.

      IF YOU DELAY REGISTERING, MANAGEX WILL BEGIN TO BEEP REMINDERS TO
YOU IN A FEW MONTHS.  DON'T WORRY, YOU'RE NOT BEING THREATENED.  NO FILES
WILL BE DESTROYED, AND THE PROGRAM WILL NOT SUDDENLY "DIE".  MANAGEX WILL
ALWAYS WORK FOR YOU, EVEN IF YOU DON'T PAY FOR IT.
  -- ManageX III and IV

     Integra also offers ManageX III, ManageX IV, and TickleX. ManageX III
is similar to ManageX I, except that it includes such features as additional
billing formats and a bookkeeping module.  It also provides more on-line help
and the ability to track the work of up to fifteen employees, each with up to
six hourly billing rates.

     Its bookkeeping module is quite unlike anything offered by other vendors.
While some other time and billing programs provide you with an "interface" to
an external general ledger, ManageX III completely INTEGRATES the general
ledger into the time and billing program.  Few, if any, other programs offer
this thorough a solution to your timekeeping/bookkeeping/billing needs.  Mana-
geX III is an ideal choice for maintaining trust, retainer, checking, savings,
and all other types of accounts.

     ManageX III also allows you to select each case's billing format from
among several pre-programmed choices (and variations on those choices), while
ManageX I is limited to the variations of a single format.

     These features and others make ManageX III the most value-packed program
you're likely to find at anywhere near its $125 price.  A full description of
the program, as well as of ManageX IV ($200), is provided to registered users.


  -- TickleX

     TickleX ($40) is a tickler/calendar program that will keep track of your
appointments and deadlines, print your itinerary at the beginning of each day
day, keep a "to-do" list, and chart the projected course of each matter you
handle.  You're not likely to find a more powerful scheduler at any price.


  -- Support and Guarantee

     Telephone support is provided in pre-purchased blocks costing $30 each.
Each block entitles you to half-an-hour of on-line help for a ninety day per-
iod.  If you think there's any likelihood that you will need assistance, you
are encouraged to purchase it at the time you register.

     Users covered by a support plan may reach Integra at 404-973-3586 on most
weekdays from 7:30AM - 1:30PM Eastern Time.  Please have your registration
(serial) number at hand when you call.

     ManageX III and IV are provided with a MONEY-BACK GUARANTEE, provided
that you pre-purchase half-an-hour of phone support (discussed above) when you
place your order.  If, within thirty days, you decide for any reason that you
don't want to keep ManageX III or IV, you may return your disks for a full
refund of what you paid for BOTH the program AND the phone support.


---------------
-  Any offer contained in any of the this disk's files is subject to change or
withdrawal without notice.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0888

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT      3072   7-01-86  12:40p
    README   DOC      5077   7-01-86   4:47p
    MANAGEX  DOC     43264   7-01-86  10:37a
    MANAGEX  COM     64359   7-01-86  10:16p
    MANAGEX  000    189568   7-01-86  10:16p
    MX       BAT       522   7-01-86  10:14p
    EDIT     COM     40672   7-01-86   9:57a
    M-LBAREA DAT       747   7-01-86   6:23p
    M-LBCODE DAT      2767   7-01-86  10:16p
    M-LBFRMT DAT      2585   7-01-86  11:11a
    M-BLOPEN LTR       128   7-01-86   5:55p
    M-BLOWED LTR       256   7-01-86   5:56p
    M-RETADD LTR       384   7-01-86   6:01p
    REGISTER FRM      2432   9-09-87   3:11p
           14 file(s)     355833 bytes
                               0 bytes free
