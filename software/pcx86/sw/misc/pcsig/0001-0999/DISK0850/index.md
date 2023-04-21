---
layout: page
title: "PC-SIG Diskette Library (Disk #850)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0850/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0850"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INSURE, A HOME INSURANCE TRACKING SYSTEM"

    INSURE is a convenient way to track your all-important medical insurance
    claims with all functions needed with such records.  Menu-driven, it has
    instructions to guide you through every step.  It features convenient
    data entry, search-and-list functions, and instant print-out summaries.
    
    Keep a record of all your medical bills, and track how much money is
    paid by you and each insurance company.  Each claim entry includes who
    provided the service, the date on which the service was done, the
    patient's name, the charge, category, and comments.  The categorizing
    feature can be used, for example, when a policy has different maximum
    amounts that it will pay for different kinds of services.
    
    Calculate the total amount paid by a particular insurance plan for a
    particular kind of service.  This is useful at income tax time to
    calculate how much you paid for hospital expenses, doctor bills, etc.
    
    The shareware version of INSURE comes with sample entries, but will not
    retain more than seven entries.
    
    Usage: Home Insurance Tracking
    
    System Requirements: None.
    
    How to Start: Type INSURE (press enter).
    
    Suggested Registration: $35.00 includes access to full version of the
    program, updates notices, and telephone support.
    
    File Descriptions:
    
    INSURE   DOC  Documentation
    INSURE   EXE  Main Program
    INSDATA  1ST  Data file
    INSDATA  2ND  Data file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0850.TXT

{% raw %}
```
Disk No:  850
Program Title:  INSURE version 3.0
PC-SIG version:  2

INSURE is a simple and convenient way to track your all-important
medical insurance claim reports and provides all functions needed with
such records.  The program is menu-driven, with instructions to guide
you through every step.  It features convenient data entry,
search-and-list functions, and instant print-out summaries.

INSURE keeps a record of all your medical bills, and separately keeps
track of how much money is paid by you and each insurance company.  Each
claim entry includes who provided the service, the date on which the
service was done, the patient's name, the charge, category, and
comments.  The categorizing feature can be used, for example, when a
policy has different maximum amounts that it will pay for different
kinds of services.

You can then use the LIST mode to calculate the total amount paid by a
particular insurance plan for a particular kind of service.  The
categories are also useful at income tax time to have the computer
calculate how much you paid for hospital expenses, doctor bills, etc.
There can be up to three claims per entry.  The insurance plans are
limited to ten, the number of patients is also limited to ten, and there
can only be up to 200 entries.

The shareware version of INSURE comes with sample entries, but will not
retain more than seven entries.

Usage:  Home Insurance Tracking.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00 includes access to full version of the
program, updates notices, and telephone support.

File Descriptions:

INSURE   DOC  Documentation
INSURE   EXE  Main Program
INSDATA  1ST  Data file
INSDATA  2ND  Data file

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## INSURE.DOC

{% raw %}
```
                            CONTENTS

1.         INTRODUCTION                                  page 3
  1.1        CAPACITY                                         3
  1.2        MODES                                            3
                                                            
2.         THE KEYS                                           4
  2.1        FUNCTION KEYS                                    4
  2.2        OTHER KEYS                                       4
  2.3        RETURN KEY                                       4
                                                               
3.         THE MODES                                          6
  3.1        C (CLAIM) MODE                                   6
    3.1.1      Type entry                                     7
    3.1.2      Date entry                                     8
    3.1.3      Entry procedure                                8
  3.2        A (ACTION) MODE                                  9
    3.2.1      Reporting Submissions                          9
    3.2.2      Deductibles                                    9
    3.2.3      Reporting payments                            10
    3.2.4      Changing the charge                           10
    3.2.5      Going from A to C and back                    10
  3.3        F (FIND) MODE                                   11
    3.3.1      Procedure                                     11
    3.3.2      Upper and lower case letters                  11
    3.3.3      Comments search                               12
    3.3.4      After a search                                12
  3.4        L (LIST) MODE                                   12
    3.4.1      Information in boxes                          14
    3.4.2      Not paid column                               14
    3.4.3      Deductibles                                   14
    3.4.4      Summary line                                  14
  3.5        S (STORE) MODE                                  15
  3.6        P (PRINT) MODE                                  15
  3.7        D (DELETE) MODE                                 15
  3.8        B (BACKGROUND) MODE                             15
    3.8.1      List of services                              16
    3.8.2      List of patients                              17
    3.8.3      Insurance plan information                    17
    3.8.4      Type assignments                              18
    3.8.5      Changing from one B-mode section to another   19
  3.9        N (NEW FILES) MODE                              19
  3.10       X (ESCAPE) MODE                                 19
                                                              
4.         MEMORY AND FILES                                  20
  4.1        WHICH DISK TO USE                               20
  4.2        STARTING FROM FLOPPY DISK                       20
  4.3        STARTING FROM HARD DISK                         20
  4.4        CLEARING THE INSDATA FILES FROM MEMORY OR DISK  21
  4.5        STARTING A NEW RECORD (LIKE FOR A NEW YEAR)     22
  4.6        INTERCHANGING ENTRIES                           22
  4.7        CONTRAST                                        22
  4.8        MESSAGES                                        23
  4.9        SOUNDS                                          23
  4.10       LOCKED FILES                                    23

                             INSURE
                                                    (c) Fred Lee
                        version 3.0 or 4.0           June, 1986


1.   INTRODUCTION 

INSURE is an IBM PC program dedicated to the maintenance of 
medical insurance claim records.  It is designed to be simple and 
convenient to use and to provide all functions that one might 
need with such records.  The program is menu driven with 
instructions shown on the screen to guide you through every step.
The program features convenient data entry, search and list 
functions, and instant summaries.

The INSURE program runs on an IBM PC/XT/AT with at least 256K of 
RAM memory.  It operates with DOS 2 or 3 and with color or 
monochrome terminals.



1.1      CAPACITY:

          * Entries - up to 200
          * Patients - up to 10
          * Insurance plans - up to 10
          * Charges and payments - up to $99999.99
          * Total charges, payments - up to $99,999,999.00
          * Deductibles - up to $9999
          * Claims on one entry - up to 3

  
1.2     MODES:

     C  (CLAIM)      Enter or change data on claims
     A  (ACTIONS)    Enter or change actions taken on claims
     F  (FIND)       Search for a claim with particular features
     L  (LIST)       List the entries and display totals
     S  (STORE)      Store the records on disk
     D  (DELETE)     Delete an entry
     P  (PRINT)      Print the records on a printer
     B  (BACKGROUND) Enter necessary background information
     N  (NEW)        Clear old records, make new files
     X  (ESCAPE)     Go back to DOS


     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     @                                                       @  
     @    Note: If the program does not run properly, try    @
     @    starting  up  your computer without  any  other    @
     @    memory-resident programs such as Sidekick. Then    @
     @    try again.                                         @
     @                                                       @
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

2.   THE KEYS

The program usually tells you which keys to use.  Some keys do 
different things in different modes, but most screens have a 
special section at the bottom which shows the most useful keys 
that can be used in that parituclar mode and what they do.  The 
main functions of the keys are described below.

2.1     FUNCTION KEYS
  
     The INSURE program uses six of the function keys of the IBM 
     keyboard.  Their principal functions are the following:
 
          FUNCTION KEY                 FUNCTION
              F1  (menu)  Return to main menu
              F2  (up)    Moves cursor up
              F3  (types) Prints list of types on C-screen
              F4  (next)  Finds next available unused entry
              F8  (Mode)  Lets you enter a new mode without 
                             going back to main menu
              F9  (menu)  Return to main menu
              F10 (down)  Moves cursor down

          Note: Although F1, F9, and Esc all bring up the main 
                menu, for the sake of simplicity, only F1 is
                mentioned in the KEY section on the screen and
                in the rest of these instructions.


2.2     OTHER KEYS 
     
     The principal functions of certain other keys are described 
as follows:
          
               Up Arrow   Same as F2. Moves cursor up
               Dn Arrow   Same as F10. Moves cursor down
               Pg Up      In list mode, starts list or moves     
                            screen up ten entries.
               Pg Dn      In list mode, starts list or starts
                            display of next screenfull of lines
               Del        Erases last character typed
               Backspace  Erases last character typed (same as Del)
               Esc        Usually brings up main menu   
   

2.3     RETURN KEY

     The RETURN key (also called ENTER) deserves special comment.
When you are asked to type in an item such as the date or a patient,
The RETURN key must be pushed to enter the item into memory. If you 
don't want to type in an entry, push RETURN without typing an
entry.  The computer will then move on to the next question.  If 
an item is entered incorrectly, you need only move the cursor back
to that item and enter it again.  Changes can be made at any time.

  
     Sometimes the computer does not wait for you to push RETURN
before it acts on your response to a question.  The general rule 
is this: If the response can only be a single letter or number, 
the computer usually does not wait for you to push RETURN.  The 
computer makes an exception when it thinks that you should have a 
chance to change your mind after typing a single-character 
response.   If the response can be more than one letter or 
number, the computer must wait for you to push RETURN in order to 
know when you are finished.

If you type in a character and nothing happens for a long time,
you will know that the computer is waiting for a RETURN.

When the instructions tell you to "enter" something, they mean 
that you should type the item and push RETURN.








































3.   THE MODES

     The various modes of the program are listed on the main menu.
This menu can always be called by pushing function key F1.  It is
usually possible to go to a particular mode directly from another 
mode by pushing function key F8 and the number or letter of the 
new mode.  Where this is recommended, the KEY section at the 
bottom of the screen will show it.  When F8 cannot call another 
mode directly, it calls the main menu instead.


USE MODE B FIRST ! ***********************************************
     It is important to remember that before any of the other 
modes can be used for any practical purposes, Mode B must be used 
to enter necessary background information into the memory.
******************************************************************


     The available modes are described below.


3.1    C (CLAIM) MODE

     This mode is used to enter or change the basic information about
a claim.  The C-screen shows a form and prompts you through the process
of filling it out. The following items can be entered:

          SERVICE   This is a code name for the doctor, med lab,
                      hospital, or other company which provided
                      the service. (Also for drugs and medicines)

          DATE      The date on which the service was done.

          PATIENT   A code name for the person who received
                      the service.

          CHARGE    The amount of the bill.

          TYPE      This is a letter or number that assigns the
                      entry to a category such as a doctor bill,
                      hospital stay, drugs, X-rays, or any other
                      that you might assign. In this mode (and the 
                      F or L modes), if you push the F3 key, the
                      list of types that you have assigned (see
                      mode B-4) will be printed on the screen.
                      Next time you push RETURN, the screen will 
                      be re-written so that the list is erased.


          COMMENTS  Here you can type any comments you might want to 
                      make.

              Note: For an explanation of the code names, see MODE B


    Of these items, the service, the patient, and the charge MUST be
entered in order for an entry to be complete.  Entering the service 
is most essential.  The computer uses the SERVICE entry to determine
whether an entry line is occupied.  If it finds an entry with no
service, it stops its searching or listing and assumes that it has
come to the end of the entries.  Therefore, no entries should exist
in the middle of your records that has an empty SERVICE item.  
(Leaving off the patient's name if the claim is for, say, 
prescription drugs for a number of patients is allowed but not 
recommended.)

     The use of the other items - date, type, and comments - is 
optional, although the date should not be left out.  The use of 
the type item is explained in detail in the special section 
below.  Some comments about the date appear after that.


3.1.1   Type entry
************************** type ***********************************
     The type item, being less obvious than other items, requires 
special explanation.

     The "type" item can be used for categorizing entries.  You 
must decide into what categories you will want to put entries.  
Examples of useful categories are doctor bills, dentist bills, 
drugs, X-rays, hospital expenses, and orthodontia.  You then 
assign to each of these categories a letter or number by which it 
will be represented in the "type" item.  Since you can use upper 
and lower case letters as well as numerals, you could have as 
many as 62 categories.  Mode B part 4 provides you with a list of 
25 capital letters (A to Y) which you can assign to categories.  
The only purpose of this list is to provide you with a convenient 
place to record your assignments.  In the C, F, and L modes, you 
can put the list on to the screen with [F3] to remind you of what 
letters you have assigned to what categories.  If you should need 
more than 25 categories, you will have to maintain your own list 
on paper.

     The categorizing feature  can be used, for example, when a 
policy has different maximum amounts that it will pay for 
different kinds of services.  Each such service type can be given 
a code letter.  The List mode can then be used to calculate the 
total amount paid by a particular insurance plan for a particular 
kind of service (see mode L below).  Another time when categories 
are useful is at income tax time when it is convenient to be able 
to let the computer calculate how much you have paid for doctor 
bills, drugs, etc..  A less likely use of this feature is to 
remind you whether the claim was submitted by the service and 
will pay them directly or whether you submitted the claim and 
will receive the check.  Each of these two cases can be assigned 
a letter (say S for service and P for patient) in the "type" 
item.
*********************************************************************


3.1.2   Date entry
     The date of the service is obvious except when a single 
service or procedure requires a number of visits to, say, a 
doctor's office.  Insurance companies prefer to be billed once 
for the entire procedure rather than for each visit.  In that 
case, you should make a single entry for the procedure.  You 
might want to enter the date of the first visit.  If you want to 
record the dates of all visits, you can use the comments line.
 
3.1.3   Entry procedure
     To go from one item to another in a downward direction, use 
the RETURN key, the function key F10 (Down), or the down arrow.  
If you have typed something in, you must use the RETURN key, or 
the computer will ignore what you have typed and keep the item as 
it was before.  You will hear five beeps if that happens. To step 
the cursor in the opposite direction, use the function key F2 
(Up) or the up arrow.  

     To enter or change an item, use the following procedure.  
Put the large box-cursor on the item.  The size of the box shows 
how many letters or numbers you may enter.  Type your new or 
corrected item in the workspace where the small cursor is 
blinking.  Use the DEL or Backspace keys to erase mistakes.  When 
the entry is correct, push RETURN.  The entry will then be 
transferred up to the form.  If you push an Up or Down key 
instead of RETURN, what you have typed will be ignored, the 
box-cursor will move to the next item, and five beeps will be 
heard.  This procedure applies also to MODE A.

     To erase an item that was previously entered and leave its
space blank, you can put the cursor on it, push Del and then RETURN.

     To bring the next entry to the screen, push PgDn.  The PgUp 
key brings the previous entry.

     If you type in an item and fail to push RETURN before you 
push another button that takes you away from that item, the 
computer sounds a warning message of five low beeps.  The message 
means that the item you typed was not entered into memory.  
Unless you intended not to enter it, you should go back and 
reenter the item.  It is annoying to have to go back, 
particularly if you have changed entries or modes.  Better to be 
careful about pushing RETURN to enter.

     The computer remembers which entry you last worked on.  
Don't be afraid to stop in the middle of your editing to go to 
the B mode to check on something or to the List mode to get the 
big picture.  When you return to the editing mode, the last entry 
you edited will reappear.  You need only push RETURN to 
reactivate it.





3.2   A (ACTION) MODE

     This mode allows you to enter or change the actions on a 
claim.  The actions fall into two categories:  Your submitting 
claims to insurance companies and their payments of the claims.  
The same screen is used as in the C mode and the same entry rules 
apply.  Again, the computer prompts you for the correct answers.


3.2.1     Reporting submissions

     Your submissions of the claims are entered at the top of the 
Actions section where it says REQUESTS.  You should enter a code 
word for the plan to which the claim was sumitted and the month 
and day when it was done.  (For an explanation of the code names, 
see MODE B.)  There are slots for three plans.  You must use them 
in order.  That is, don't leave a blank slot in front of an 
occupied one.  If the service submits claims for you, you must 
enter them here also.  Put your primary coverage first.  Payments 
cannot be entered unless this section is first filled in.

3.2.2     Deductibles

     The computer makes an attempt to help you keep track of the 
deductibles on your policies.  There are conditions under which 
the computer can have trouble doing this accurately.  Some 
examples are given below.  If there is a conflict between your 
bookkeeping and the computer's trying to calculate the 
deductibles, you should do the bookkeeping the way you want and 
take the computer's deductible figures as only its best guess.

     When you enter the code name of a plan, the computer 
calculates how much of the amount of the claim is within the 
"deductible" of your insurance policy.  The resulting numbers are 
printed under the plan code.  These numbers are rounded off to 
the nearest dollar to save space.  The numbers have the following 
meanings.

     *  If the number is the same as the "charge" entry in the 
Claim section, then the entire charge is still below the 
deductible and is not eligible to be paid. 

     *  If the number is smaller than the "charge", then only the 
amount shown is below the deductible and  the rest is eligible 
for payment.

     *  If the number is a zero, it means that none of the charge 
is below the deductible and the entire amount is eligible for 
payment.






     (It is not recommended but not forbidden to have no 
patient's name on a claim.  The name might be left off if the 
claim is for prescription drugs for a number of people.  With no 
name on the claim, the computer may not be able to calculate the 
deductible correctly.  The deductible should then be ignored.) 

     If an insurance company processes your claims in a different 
order from the order in which you entered the claims, it might 
happen that a deductible is taken from a different claim from 
what your record shows.  If you cannot live with that, you must 
reenter the claims in a different order. 


3.2.3     Reporting payments

     When an insurance company pays on your claim, you should 
fill in the second half of the Action section, under RESPONSES.   
Where it says "Paid by ____:", enter the amount paid.  The 
computer will calculate what percentage that is of the total 
charge and will print that percentage in the next column.  Next, 
you may enter the month and date of the payment.  Finally, you 
may enter any appropriate claim numbers.  A separate line like 
that is entered for each plan that pays on your claim.  After 
each such line is entered, the computer calculates what amount of 
the claim has not yet been paid and what percentage of the charge 
that is.  These figures are also printed on the screen.  (If the 
amount not paid is negative, it means that the payments were 
greater than the charge by the amount shown.)
 
     If the Insurance Company Does Not Pay

     If you receive notice that the insurance carrier will pay 
nothing on your claim, you should still enter the date and/or 
number of the claim so that you will later be able to tell 
whether you received a reply from the carrier.  It is also 
important to enter "0" in the "Paid by" space.  Then, when you  
list the claims with the List mode, you will be able to tell by 
the "0" in the AMT PAID column that the insurance company has 
replied to your claim.  Claims which the insurance company has 
not yet replied to will be blank in that column.


3.2.4    Changing the charge

     If after you have filled out any of the items of the Action 
section, you make a change in the charge (of the Claims section), 
you should retype the items of the Action section.  That is, you 
should enter the same items that you have already entered.  
Entering these items again makes the computer recalculate such 
things as the deductible amounts and  percentages of payments.  
If you fail to reenter these items, the deductibles and 
percentages will be wrong.  The computer will remind you to do
that if you change the charge.


3.2.5    Going from A to C and back

     To go from mode A to C and vice versa, use function key F8 
followed by the letter of the mode.  If you return to the main 
menu, the screen must be redrawn, which takes longer.



3.3    F (FIND) MODE

     This mode lets you find a claim using any of the main items 
on the A/C form as search-items (also called search-words).  The 
items that can be searched for are the service, date of service, 
patient, charge, type, comments, and plan.  That is, any of the 
items entered in the C mode can be used plus the plan from the A 
mode.  For example, if you use the code name of a patient to 
search on, the computer will find all claims that involve that 
patient.  If you enter a patient and a plan, the computer finds 
all claims for that patient that were submitted to that plan.  

     The same search-words are also used in the List mode.  What 
is said about them here, therefore, applies also to the L mode.


3.3.1   Procedure

     When the mode is entered, the screen shows the same form as 
in the A and C modes.  The entry number is 0.  This entry is 
reserved for the F and L modes.  Using the same method as used in 
the A and C modes, enter any items that are to be used as search- 
items.  Any number of items can be used.  Be sure to enter each 
item with the RETURN key before starting the search.  To start 
the search, push the PgDn key.  The computer will search the 
entries until it finds one that contains the search-item or items 
that you have selected.  This entry is displayed on the screen.  
Pushing PgUp or PgDn again causes the computer to continue the 
search up or down the list of entries for the next entry that has 
the proper search-words.


3.3.2     Upper and lower case letters

     If the "comments" or "type" items are used for search-items, 
the computer finds only words that have letters of the same case 
as you typed in the search-words. For example, if your search-
word is "D" or "Joe", the computer will not find "d" or "JOE" 
because the cases do not match.  Code names, on the other hand, 
can be entered in lower case letters or capitals.  The computer 
capitalizes them all for you.  In other words, be aware of the 
case of letters in the "comments" and "type" columns, but don't 
worry about case in code names for services, patients, and plans.


3.3.3     Comments search

     In the case of all search-items other than "comments",  
the computer finds entries that have items exactly the same as 
the search-items.  For example, to find an entry in which the 
patient is JOE, the search-item must be JOE (except that the case 
does not matter).  In the case of "comments", the computer finds 
entries in which the search-item is contained somewhere in the 
"comments" line.  For example, if Joe were used as the search-
item in the "comments" line, the computer would stop the search 
and display an entry that had the words "Joe's hangnail 
operation" because the letters "Joe" appear in those words.  This 
feature allows you to put key words into the comments line by 
which entries can be quickly found or listed.

3.3.4     After a search

     When the computer has found an entry for you, you have 
the following options:

     * Search for another entry with the same search-items. Do that
       by pushing PgUp or PgDn again.

     * Search for another item with new search criteria. Do that 
       by pushing the Mode key, F8, and [F] or returning to the 
       main menu and pushing [F].  In other words, start the F 
       mode again.

     * Edit the entry you have just found.  To do that, push the 
       Mode key, F8, and either [C] or [A], depending on whether 
       you want to edit the claims or the action section.  You 
       can also return to the main menu to change to the edit 
       modes but it takes longer.

     * Return to the entry that you were looking at before the 
       search.  Do that by pushing RETURN.

     * Go to the first empty entry.  To do that push F4.


3.4    L (LIST) MODE

     This mode is used to present the claim entries in list form.  
You are given a choice of listing all entries or only entries 
with certain characteristics or combinations of characteristics.  
For example, you can list only claims that have been paid or that 
have not been paid.  Or you can list all claims for patient Joe 
which have not been paid.  At the end of each list, the computer 
prints the totals of the amounts charged, paid, and not paid on 
all of the claims on the list.  It also prints the percentage 
paid.  The list can therefore be used as a way to summarize your 
claim activity.  FOR THAT REASON, IT IS A GOOD IDEA TO ENTER ALL 
OF YOUR MEDICAL BILLS, INCLUDING ANY THAT YOU DON'T EVEN MAKE 
INSURANCE CLAIMS FOR.  THE L MODE CAN THEN SUMMARIZE ALL OF YOUR 
MEDICAL EXPENSES.


     If you elect not to list all entries, you are given five 
choices:

         A   List claims that have been paid
         B   List claims that have not been paid
         C   List claims that have been submitted
         D   List claims that have not been submitted
         E   List claims with selected characteristics
     
     You can select combinations of these choices.  

     If choice E is one of your selections, the computer will put 
the A/C form back on the screen.  You can then enter the items 
that you want to limit the list to just as you entered search- 
words in the FIND mode.  In fact, these selections will have the 
same effects as the search-words in the F mode.  If you enter the 
code name of a patient, the list will be limited to claims for 
that patient.  If you enter a code in the "Comments" line, the 
list will show only entries with that code somewhere in its 
comments line.  A letter in the "type" item will limit the list 
to claims of that type.  (The [F3] key will print your list of 
types on the screen.)  Any number of search-words can be entered.  
(See F mode above for more about search-words.)

     When you have finished making selections, pushing either the 
PgUp key or the PgDn key tells the computer to make the list.

     In order to present the information on an 80-character line, 
some of the items that appear on the A and C screen are not shown 
on the list (the comments, some dates, the claim numbers, and 
the percentage not paid).  The following items do appear on the 
list in the order shown:

   Claim
     *  Entry number
     *  Service
     *  Date of Service (labeled DATE)
     *  Patient
     *  Charge
     *  Type (labeled TP)
     
   Submission
     *  Plan
     *  Amount deductible (labeled DED)

   Action
     *  Amount paid (labeled AMT PAID)
     *  Percentage of the charge paid (labeled %)
     *  Amount not paid (labeled NOT PAID)






3.4.1     Information in boxes

     Suppose you ask the computer to make a list of only caims 
that have been paid or that have not been paid.  What should the 
computer do when it comes to entries on which one plan has paid 
and another has not.  If it showed both plans, you would get 
information that you did not request.  If it showed only the plan
you requested, you would not see the complete data on the entry.  
The computer solves this problem by listing the information that 
you requested and adding the information on other plans in 
reverse video (in boxes).  Another case in which information 
appears in boxes is when you restrict the list to claims made to 
a particular plan.  Submissions to other plans on the same 
entries are shown in boxes.


3.4.2     Not paid column
 
     The list makes a separate line for each plan to which the 
claim was submitted.  The NOT PAID amount is listed after the 
last of these plans and reports the amount that has not been 
paid after the payments of ALL of the plans (that are not in 
boxes) have been added together.


3.4.3     Deductibles

     For an explanation of the numbers in the deductible column 
(DED) see "deductibles" in the explanation of the A mode above.


3.4.4     Summary line

     At the end of each list, a summary line is printed.  This 
line shows the total amount charged, the total amount paid, the 
percentage of the amount charged that was paid, and the total 
amount not paid.  If this line is blank, it means that the screen
has not yet shown the last item on the list.  Push F10 or the 
down arrow to add the next entry to the list.  If you push Pg Dn,
the next ten entries appear on the list.  Only when the last 
entry is shown, will the summary line show the totals.  After
that, you are allowed to go back up the list by ten entries by
pushing F2, the Up arrow, or Pg Up.  The totals, however, remain
the same.  That is, the totals are for the entire list even if
only a part of the list shows on the screen.

     If any total exdeeds $99999.99, the amount is rounded off to 
the nearest dollar. (For example, $123456.78 would be shown as 
$123457 .)






     The totals are calculated by adding only the amounts that 
are not in boxes.  The one exception to this rule is this: 
If you ask for a list of only claims that have not been paid, the 
total amount that was paid would, of course, be $0 and the amount 
not paid would be the same as the total of the charges.  Printing 
those totals would not provide useful information. So in that one 
case, the computer prints not the total of the items you wanted 
listed but the total of what was paid by other plans on the same 
claims.  That is, the total of the information shown in boxes on 
the list.  The "amounts not paid" are then those not paid by 
these other plans.

 


3.5   S (STORE) MODE

     The store mode must be used after changes have been made on 
any of your entries or in the background information if these 
changes are to be saved on your disk.

     You will be given an opportunity to change the disk drive 
and to change your mind about saving before the actual saving 
starts.
     
     It is wise to save your files on more than one disk.  To do 
that, just change disks or the disk drive and store again.



3.6    P (PRINT) MODE

     This mode lets you print your entire record on an 80-column 
(or wider) printer.  The list shows the same information as the 
screen does in the L mode, including the summary line.

     Only the complete list of entries can be printed in this 
mode.  To print any of the shorter lists that can be specified in 
the L mode, you must use the L mode to put the list on the screen 
and then use the PrtSc key to print the list.




3.7   D (DELETE) MODE

     This mode can be used to delete an entry from your records.
Deletion is done by entry number, so remember the number of the 
entry that you want to delete.  You are asked to type in that 
number when the D mode starts.  All entries below the deleted one 
are renumbered to fill the hole.



3.8    B (BACKGROUND) MODE

     This mode lets you enter or change the background 
information that the computer must have in order to run this 
porgram.  Three kinds of information must be entered here - 
ervices that will bill you, patients that will use these 
services, and the insurance plans that cover them.  A fourth kind 
is optional - a list of type assignments.

     To save space on the lists and forms, code names must be 
assigned to services, patients, and plans.  The computer must 
know what these code names are for three reasons.

     * To help you when you enter claims by showing lists of 
          eligible services, patients, or plans.
     * To check your entries against these lists so that you 
          cannot make incorrect entries.  Incorrect or misspelled 
          codes would result in wrong lists and totals.
     * To make it not necessary for you to remember what code 
          names you have assigned.

     When this mode is entered, four choices appear.  You can 
select to work on the list of services, the list of patients, 
the insurance plans, or the list of type assignments.   These 
choices are described in detail below.

3.8.1    List of Services

     If you select this choice, you are presented with a list of 
22 slots into which you can put code names of services that will 
bill you.  These services can include such things as doctors, 
nurses, medical labs, and hospitals.  You will probably want to 
designate one service code under which you enter all pharmacy 
prescriptions.

     To enter a service, you must select the number of the slot 
into which you want to type the service.  Then type the code name 
of the service.  You may use capitals or lower case letters.  
This code must be seven characters or less.  When you push the 
RETURN key, the code name is capitalized and transferred to the 
list.

     Later, when you are entering a claim, the computer will 
check the service that you enter against this list.  If the 
service is not on this list, the computer gives you a warning 
message and requires you to push RETURN a second time to store 
what you have typed.  The only reason why you are given a chance 
to enter a service that is not on the list is to allow for the 
remote possibility that you might be billed by more than 22 
different services during the course of a year.  If that is the 
case, you must keep your own list of code names and you may 
overrule the computer's warning message.  Otherwise, you should 
take the warning message to mean that you have entered an 
incorrect code name.


     When you are filling in the Service item on an entry form,
the computer shows you the available services.  However, there
is room for only the first 16 names on your list.

     To erase a name and leave the space blank, just push the 
RETURN key without typing anything.

3.8.2    List of Patients

     If you select this choice, you are given a list of 10 slots 
into which you can enter names of patients who are covered by 
your insurance policies.  If such a patient has a name that is 
more than seven letters long, you must enter a code name for that 
person that is no longer that seven characters.

     You are prompted first to select the number of the slot that 
you want to fill or change.  Then you must type the patients name 
of code.  Pushing RETURN transfers your entry to the list.

     Later, when you are entering a claim, the computer will 
check any patient names that you enter against this list and 
against the lists of patients that are covered by the policy and 
will reject any name that is not on these lists.


     To erase a name and leave the space blank, just push the 
RETURN key without typing anything.


3.8.3    Insurance Plan Information

     This choice allows you to enter data on the insurance 
policies that you will be making claims against.  If you have 
more than one plan from the same insurance company, a separate 
entry must be made for each plan.  There is room for 10 plans.
The PgUp and PgDn keys are used to view the 10 entry forms.

     You are presented with a form to fill in.  Some of the 
entries on this form are there to provide you with a convenient 
place to store information which you might want to refer to.  
These entries include the full name, address, and phone number of 
the insurance company, account numbers, maximum coverage, and 
miscellaneous comments.  You may use these lines as you wish.
The computer does not use them. 

     If your policy has a deductible amount, it should be entered 
in the "deductible" item.  If the policy has a family deductible, 
this amount should be entered in the "family deductbl" item.  
Enter only the dollar amount - no pennies, no dollar sign.  If 
there is no amount to put into these items, they must be left 
blank.  More about the deductibles later.




  Two items MUST be filled in so that the computer can run the
program.  These items are highlighted on your entry form.  They 
are the following:

               !!  THESE MUST BE FILLID IN  !!

          * A code name for the insurance plan
          * The list of people covered by the plan    

     The code name for the plan must be six characters or less 
(spaces are allowed, but not at the beginning).  Later, when you 
are entering a claim, the computer will reject any code name that 
you enter which has not been entered in this (B) mode.


     Other things that you should know about the B3 mode:

     Any maximum coverage data that you enter is there for your 
reference only.  Many policies have different maximum amounts on 
different kinds of services.  The computer cannot track them all.  
So the computer does not check your claims against these maxima 
and does not warn you if you exceed them. (See the discussion of 
type assignments  under Mode C to see how you can quickly calculate 
what has been paid for a particular kind of service by a 
particular plan.)


     The per-person deductible amount must be entered so that the 
computer can keep you advised on your standing with respect to 
the deductible as you enter claims.  (The computer cannot handle 
a policy which has differnt deductibles for different family 
members.  If there is such a policy, you must keep track of the 
deductibles yourself.)  If your policy has a maximum deductible 
amount for the family, enter that amount on the "Family 
deductble" line.  The computer will include that maximum in its 
calculations.

     The list of people covered by the policy is required so that 
the computer can prevent you from entering nonvalid names and help 
you prepare claims.  Each name or code name entered here must be 
on the list of patient names (choice 2 of this mode) and must be 
spelled exactly as it is on that list.  To enter the names, type 
them either in capitals or lower-case letters and separate them 
with commas.  Push the RETURN key when you have typed all of the 
names of covered persons.  The computer then capitalizes the 
names, spaces them properly, and transfers them to the form.  
Later, when you are entering a claim, the computer will reject 
any plan that does not cover the person who received the service.

     Changes can be made at any time.  If you want to make a 
change in an item after you have entered it, you must retype the 
entire item.  The first character typed causes the old line to be 
erased.  The RETURN key enters the new item.  


3.8.4    Type assignments

     This mode provides a list on which you can record the 
assignments of letters A to Y to up to 25 categories of services.   
You can quickly call this list to the C-screen with the F3 key if 
you need to look up your assignments.  The list has no other 
function than that.  For an explanation of the use of type 
assignments see mode C.

     For making entries or changing entries, there are simple 
editing features.  The cursor can be moved in all directions with 
the arrow keys and the RETURN key.  To make changes, just type 
over what was there before.  To erase, use the backspace key or 
type spaces.  There is no need use the RETURN key to enter 
anything that you have typed.  What you see on the screen is what 
will be retained by the memory.  
     

3.8.5     Changing from one B-mode section to another    

     There is no direct way to go from one of the four parts of 
the B mode to another.  When you have finished with one part - 
for example, entering names of patients - you must return to the 
main menu and re-enter the B mode.




IMPORTANT NOTICE:  If any additions and changes are made in the B 
mode,  You must use the S mode before turning off the computer if 
these changes are to be stored on the disk.  Otherwise the 
changes are lost. 



3.9   N (NEW FILES) MODE

     This mode helps you to clear old files from the RAM memory 
and disks and start new ones.  You are given the following four 
choices:
          1  Set up program for the first time
          2  Clear claim records from memory and disks
          3  Set up new record files for new year
          4  Go back to main menu

     The first choice tells you what to do with the sample 
records that are found on a new disk.  The second choice guides 
you through the process of clearing records from the RAM memory 
and, if you want, from disks.  The third choice presents one 
possible procedure for switching over to a new year.  The last 
choice returns you to the main menu.




3.10   X (ESCAPE) MODE

     The X mode is used to quit the INSURE program and return to 
the DOS operating system.  Before executing this mode, be sure 
that you have stored any entries or changes that you have made on 
disk (with the S mode).  The computer gives you a chance to abort 
if you change your mind.


4.     MEMORY AND FILES

When the INSURE program is executed, it is loaded into the RAM 
memory.  After it starts, a 44800-byte data segment is also 
transferred from disk into memory.  This segment serves as the 
place to store the records.  All 200 entries can be stored in 
this segment.  There is no writing or reading from disks during 
normal operation.  When the STORE mode is used to store the 
records on disk, the contents of the 44800-byte memory segment 
are stored on disk as file INSDATA.1ST.  Next time the program is 
started, this file is read from disk back into the memory 
segment.  It is suggested that one record of 200 entries be used 
for the transactions of exactly one year or a multiple of a year.  
(See STARTING A NEW RECORD).  A second disk file that is stored 
and read back along with this data file is the file INSDATA.2ND.  
This file holds the background information that is entered in 
mode B.  While the program is running, this data resides in 
tables. 

4.1    WHICH DISK TO USE

A single diskette can hold the main program file INSURE.EXE, the 
data files INSDATA.1ST and INSDATA.2ND, and these instructions in 
the file INSURE.DOC. Such a disk should last the average family 
at least one year.  To operate from the diskette, you need only 
insert it and enter the name INSURE in response to the DOS prompt 
for the drive you are using.  If your data file is stored on 
another drive, you have to chance to change to that drive when 
the program asks you which drive it should use to read data from 
disk.  Reading the records from disk and storing them again 
before you turn off the computer will then be done with this 
disk drive.  You should back up the record files on a second 
disk.  One way to do that is to remove the main diskette and put 
the backup diskette in its place.   Then  start the STORE mode 
again.

If you want to be able to "boot up" with the INSURE program, you 
should copy the files INSURE.EXE, INSDATA.1ST, and INSDATA.2ND 
onto a "system" disk that has been formatted in the /S mode so 
that it has the necessary operating system files on it.  If you 
also add an AUTOEXEC.BAT file, the INSURE program will start 
automatically when you power up the computer or do a reset (by 
pushing Alt, Cont, and Del simultaneously.)  Depending on what 
drives you use, there may be another advantage to using a system 


disk.  When you try to leave INSURE and go back to DOS, the 
computer might have to ask you to put a system disk in if your 
program is not on one already.

If you prefer to operate from hard disk, copy the program  
INSURE.EXE to the hard disk.  Install the record files as 
described in STARTING A NEW RECORD below.  Start the INSURE 
program from drive C. After you store your records on the hard 
disk, you should back up these files by inserting a backup 
floppy, changing the current drive to that of the floppy, and 
using the STORE mode again.

The INSURE program and its entire data file are loaded into 
memory. If it does not work properly or keeps other programs in 
your memory from working properly, it might be competing for 
memory space with other memory-resident programs.  In that case, 
you may want to copy the INSURE.EXE and INSDATA files to a 
diskette with only  the basic DOS files on it (done by formatting 
the diskette with the /S option).  Starting or resetting the 
computer with this "system" diskette in drive A will then put 
only the simple DOS system into the memory along with the INSURE 
program and its data file.



4.2    STARTING FROM FLOPPY DISK

If you are using INSURE on a floppy disk, insert the disk in 
drive A and enter INSURE in response to the DOS prompt >A.  The 
program will load and will then want to read the previously 
recorded check records from the disk.  The screen will ask 
whether the current drive is all right or whether you want to 
select a new one. Push RETURN if the drive is correct,  (you will 
probably use drive A), or enter a new  drive. The machine then 
reads the disk and put the main menu on the screen.




4.3    STARTING FROM HARD DISK

If you have copied INSURE.EXE to the hard disk, just enter INSURE 
in response to the DOS prompt <C.  The program will load and will 
then want to read the previously recorded check records from the 
disk.  The screen will ask whether the current drive is all right 
or whether you want to select a new one. Push RETURN if the drive 
is correct,  (you will probably use drive C), or enter a new  
drive. The machine then reads the disk and put the main menu on 
the screen.






4.4    CLEARING THE INSDATA FILES FROM MEMORY OR DISK

You can clear an old record out.  For example, you may  want  to 
discard the sample records that were on the original diskette and 
start  your  own records.  Go to mode N and use  activity  #2  to 
clear the RAM memory..

When you have cleared the memory, you can also clear disk files
by storing the empty records.





4.5    STARTING A NEW RECORD (LIKE FOR A NEW YEAR)

A record can hold as many as 200 entries.  That should be more 
than enough for one year in the average household.  In fact, to 
summaries more meaningful and to make searching and listing 
faster, one record should hold the transactions of exactly one 
year.

When you have entered all transactions for the old year and want 
to start a new record, save the old record on one or more floppy 
disks using the SAVE mode. (You should have been doing that for 
backup all along.) Label the disks with the proper year and put 
them away.  Clear the computer memory with mode N. Then start a 
new record as directed by the instructions of mode N.  If claims 
made in the old year have not all been settled, you will have to 
get the old disks out of storage and use them when payments come 
in for these claims.



4.6   INTERCHANGING ENTRIES

You might at some time want to change the order of two entries.  
For example, an insurance company might have responded to your 
claims in the opposite order in which you entered them.  The 
computer might then have assigned a deductible to the wrong 
claim.  You could probably live with that.  But if you do want to 
change the order of entries, you must do it yourself.  The 
program does not provide an automatic way to do it.  Copy on 
paper the claims that you want to interchange and type the new 
data in over the old data on the computer.  Re-enter every item 
even if it is the same in both entries.    









4.7    CONTRAST

Some items on the screen are made brighter than others.  The main 
highlighted items are the items that you enter on the C and A 
screens.  If these things do not appear brighter than the other 
things on your screen, it may be that the contrast and brightness 
controls on your terminal are not properly adjusted.  They are 
usually located on the back.











 
4.8     MESSAGES

Most help and error messages that are flashed on the screen are 
self explanatory.  Sometimes, when an error occurs due to the use 
of a disk drive or a printer, you are given an error number.  
The meanings on the most common of these are shown below.



               SOME COMMON ERROR NUMBERS

           2  File not found
           3  Drive not ready or path not found
           5  Invalid drive or attempt to edit protected program
           8  Insufficient memory
          15  Invalid drive  
          19  Attempt to write write-protected diskette                  
          21  Drive not ready
          23  Data error
          24  Device timeout
          25  Device fault
          26  Unknown media type
          27  Out of paper or printer not ready
          29  Write fault
          30  Read fault
          31  General failure
          57  Device I/O error          
          68  Device unavailable
          70  Disk write-protected
          71  Drive not ready
          72  Disk media error
          84  Disk full
          85  File not found




4.9    SOUNDS

     A short low buzz means that a blinking error message is on 
the screen.  A high beep means that some action has been 
completed.





4.10    LOCKED FILES

     This program comes with the files write-protected so that 
anything typed into an entry over number 7 is not retained by the 
memory.  That is, it remains on the screen until the screen is 
changed but, when that entry is returned to the screen, the new 
data is gone.

     If you suspect that your files are locked, there is a way to 
be sure.  Restart the INSURE program and look at the bottom left 
corner of the screen when the computer is loading in the disk 
files.  (The words "loading data" are blinking in the lower right 
corner.)  If the files are locked, the letter "L" appears briefly 
at the lower left.  If the files are unlocked, the letter "U" 
appears.

     The write protection is intended to allow you to fully 
evaluate the program before paying for it.  You can display the 
sample entries that come with the disk.  You can change these 
entries or the background information that comes with them.  If 
these changes are made on entries over 7, your changes will not 
go into memory.  If you want to start with empty files and enter 
your own data, you can erase the sample files and the sample 
background information by following the instructins in mode N.

     Instructions for unlocking the files can be obtained from 
the author.
     



                                           rev: 4/6/89
_______________________________________________________________










OTHER PROGRAM

     If you find this program useful, you are invited to try the 
author's other program, CHEKLIST.  This is a program for 
maintaining checkbook records.  It does all that one might want 
to do with such records and it does nothing but keep those 
records.  Some of the program's features are up to 1700 entries, 
22 ledger accounts, bank statement reconciliation, and many 
convenience features to make operation easy.  The program is 
available from the same sources that distribute INSURE.



.pa






















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0850

     Volume in drive A has no label
     Directory of A:\

    FILE0850 TXT      1884   6-28-89   3:29p
    GO       BAT        38  10-26-87  10:42a
    GO       TXT       617  10-26-87  10:44a
    INSDATA  1ST     44800   7-15-88  11:21p
    INSDATA  2ND      4635   7-15-88  11:21p
    INSURE   DOC     53166   5-31-89   1:57p
    INSURE   EXE    124170   5-30-89   4:57p
            7 file(s)     229310 bytes
                           90112 bytes free
