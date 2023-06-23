---
layout: page
title: "PC-SIG Diskette Library (Disk #397)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0397/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0397"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHEKLIST SYSTEM"

    A simple system for maintaining bank account records for the home that
    provides the functions you need to keep your bank-related information
    accurate and up-to-date.
    
    Track up to 10 bank accounts with 1000 entries, or transactions.
    Maintain ledger accounts, draw instant balances, bank statement
    reconciliations and flexible search and sort options.
    
    Convenient to use, this checkbook manager provides thorough
    recordkeeping for today's harried householder.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHEKDEMO.DOC

{% raw %}
```


             CHEKLIST SYSTEM DEMONSTRATION EXERCISE
                                                        Fred Lee
                                                        May, 1985

CHEKLIST is an IBM PC program dedicated to the  maintenance of 
bank account records.  It is designed to be  simple and 
convenient to use and to provide all functions that  one might 
need with such records.

The CHEKLIST disk actually has two programs.  The CHEKLINE 
program presents all entries in the form of a list.  The CHEKLIST  
program  works  the same way, but offers a choice of having the 
entries shown on a list or showing them one at a time on a form 
that looks like a bank check. The CHEKLINE program  requires 256K 
of RAM memory. No color graphics adaptor is needed.  The CHEKLIST 
program  uses the same amount of memory but requires a color 
graphics adaptor  because it uses several text screens.  If you 
have a color graphics adaptor, you should use CHEKLIST. 


        FEATURES:
          * Up to 1000 check or other entries
          * Up to 10 bank accounts
          * Up to 22 special tags (ledger accounts)
          * Many data-entry conveniences
          * Search on any item, like check number, amount, payee, 
               tag, date, etc. 
          * Easy bank statement reconciliation
          * Instant balances
          * Move, delete, store on disk, and print-out modes.
          * No disk reading or writing except at start and end.



     MODES:

     L  (list edit) Edit the list of entries (Main mode)
     E  (edit)      Edit on check forms   (CHEKLIST program only)
     T  (totals)    Calculate balances (main, bank reconciled, tags)
     F  (find)      Find any entry using search word or number
     G  (go to)     Go to any entry using search word or number
     R  (reconcile) Reconcile entries with bank statement
     C  (continuous)Scroll entry list up or down automatically
     M  (move)      Move an entry to a new location on list
     D  (delete)    Delete an entry
     A  (assign)    Assign tags to ledger account categories 
     S  (store)     Store entries on disk
     P  (print)     Print entries on printer
     N  (new)       Set up (new files, new year, etc.)
     X  (excape)    Go back to DOS




     FUNCTION KEYS:           F1  =  Stop     F2  =  Up
                                              F4  =  Next
                                              F6  =  Same
                                              F8  =  Mode
                                              F10 =  Down
                    

What is presented here ia a short demonstration exercise which 
shows some of the things that can be done with the principal 
modes of these programs. This demo will not make the operation 
completely clear.  The operating instruction booklet 
(CHEKLIST.DOC) is designed to do that.  Meanwhile, please follow 
the instructions below.

If this disk was distributed in a locked condition, access of
all entry lines after 39 have been protected.  It is best not 
to stray into the protected area because the actions of the 
program there can be confusing.  Instructions for unlocking the
remaining lines are available from the author.


*   Put the CHEKLIST diskette into drive A.  (These programs 
and their data files are memory-resident.  If your operating 
system extends beyond 70000 bytes or you have loaded utilities or 
autoexec files which might compete for memory space with these 
programs, you may want to copy the program you plan to use 
(CHEKLINE or CHEKLIST) and the three CHEKDATA files onto a 
"system" diskette with just a barebones DOS on it and then power 
up or reset with that diskette in drive A.) 

*  If you have a color graphics adaptor, enter CHEKLIST.  If not, 
enter CHEKLINE.

*  If you entered CHEKLIST, you should now see a form that looks 
like a check.  This is the E screen.  We will return to it later.
Push the keys [F8] [L].

*   You should now see a list of 21 entries in a sample check 
record.  This is the L screen.  The + signs should appear 
brighter than other things. If not, adjust brightness and 
contrast controls of the terminal.

*  Push [F10] and [F2] a few times to see how the cursor moves up 
and down.  Also try the up and down arrow keys.

*  Push RETURN (<--') a few times to see how the cursor goes from 
item to item.  Try the arrow keys, <-- and --> .

*  Use [F10] and [F2] to move the cursor to the first empty entry 
line.

*  Push [F8] [L] (or [E] if you are in the E screen) so that the 
L (or E) on the bottom line stops blinking.  (Write-protect is on 
when the letter is blinking.)


  The following instructions show you how to enter items.  If you 
make a mistake use DELETE or BACKSPACE (<--).

*  Use RETURN to put the cursor on the date column.

*   Enter a date like 0305.  Push [F4] and [F6] to see what they 
do to the date.  When satisfied with the date, push RETURN to 
store it in memory and advance to the NO item.

*   The NO column is for check numbers or other codes.  If there 
is a number in the line above, see what [F4] and [F6] do here. 
After you have put a number there, push + and - and see what 
happens.  Push RETURN to store and advance.

*  Type what you like in the TO/FROM space.  RETURN when done.

*   To enter an amount, type the number of cents  (example:  1200 
for $12.00).  If the entry is a deposit, there must be a + before 
the number. Use the + and - keys to add or delete this + sign. 
(If no + sign is entered, the number is assumed to be negative, 
although the - sign is not shown.) Note that DEL erases the 
entire amount.  Push RETURN when done.

*   In the TAGS column you can enter one or more tags. (A tag is a 
letter between E and Z.)  You can even assign a fraction of the 
AMOUNT to a tag.  With the tags you can instantly get the total 
of all items with a particular tag or you can quickly find all 
items with the same tag.  The tag feature saves hours of work at 
tax time.  Push RETURN when done.

*  The MEMO column can be used as desired.


Next you will try some of the other modes.

*  Push [F8] [C] to scan through the checks automatically. To 
change direction, push [F2] or [F10].  Push the up and down arrow
keys.  Push [1] to slow down.  Push higher numbers to slow down
even more.  Let the scan go all the way to entry 0.

*  Push [F8] [G] to get the GO TO mode.  Push [F4] to "go to" the 
next empty entry line again.

*  Push [F8] [T] to get the TOTALS mode.  Push [A] to get the 
current balance.  (This number should match the "balance" on the 
second-the-last line).  Push [B] to get the balance of all bank-
reconciled checks.  (That balance should match the latest bank 
statement).  Push [C] to re-set the current balance in case it is 
incorrect.  Push [R] to get the total of all entries with the tag 
R (it will be negative).





*  Push [F8] [F] to get the FIND mode.  
   With the RETURN key put the cursor in the TO/FROM column.
   Type SCR to find all checks written to Mr. Scroodge.
   Push [F2]
   Push [F6] or [F2] again to find other Scroodge checks.
   Start the searches again with the up and down arrow keys.
   Push [DEL] when finished
   Similar searches can be done on any item, including entry 
       number, date, year, reconcile character, and tag.


If you are using the CHEKLIST program, you should now go to the E 
edit mode (push [F8] [E]) and repeat the entire procedure again 
beginning at the fourth instruction ("Push [F10] and  [F2] a few 
times  ..... ").  That will show you how the program works with 
the E screen.


That concludes the demonstration.  A complete description of what 
all of the keys and modes do can be found in the instruction 
document (CHEKLIST.DOC) This document also includes additional 
tricks and rules and much other vital information.


Push [F8] [X] [X] to return to DOS.
.pa

```
{% endraw %}

## CHEKLIST.DOC

{% raw %}
```






                       DISTRIBUTION NOTICE

These  programs, CHEKLIST and CHEKLINE, are distributed as  user-
supported software. Users may  make unmodified copies for others.  
Commercial  sale  without  written permission from  Fred  Lee  is 
prohibited.  Users  groups and non-commercial  organizations  may 
impose   their   customary   fees  for   copying   and   mailing.  
Reproduction of the printed material is prohibited.


                           DISCLAIMER

The  author  or  suppliers of these programs will in  no  way  be 
liable  for  any damages such as lost profits,  lost  savings  or 
other incidental or consequential damages arising from the use of 
or  inability  to  use  these programs, even  if  the  author  or 
supplier has been advised of the possibility of such damages,  or 
for any claim by any other party.


                             NOTICE

For evaluation, these programs are supplied with a capacity of 
forty entry lines and a sample check record which may be changed, 
added to, or erased. It is best not to stray into the protected 
area beyond line 39 until the files are unlocked.  Instructions 
for  unlocking the remaining 960 lines can be obtained from the 
author.





















                      CHEKLIST SYSTEM
                                                    (c) Fred Lee
                        version 1.50                August, 1987

CHEKLIST is an IBM PC/XT/AT program dedicated to the maintenance 
of bank account records.  It is designed to be simple and 
convenient to use and to provide all functions that one might 
need with such records.

The CHEKLIST disk actually has two programs.  The CHEKLINE 
program presents all entries in the form of a list.  The CHEKLIST 
program works the same way, but offers a choice of having the 
entries shown on a list or showing them one at a time on a form 
that looks like a bank check.  The CHEKLINE program  requires 
256K of RAM memory. No color graphics adapter is needed.  The 
CHEKLIST program  uses the same amount of memory but requires a 
color graphics adapter because it uses several text screens.  If 
you have a color graphics adapter,  you should  use CHEKLIST.  
(If you do use CHEKLIST, it is important that you keep at least 
one copy of CHEKLINE because it is the only program that can 
unlock the data files.)  Because most operations are the same in 
both programs, this description applies to both.  Where a 
statement applies only to the list mode of operation, that  is 
clearly stated.

        FEATURES:

          * Up to 1000 check or other entries
          * Up to 10 bank accounts
          * Up to 22 special tags (ledger accounts)
          * Many data-entry conveniences
          * Search on any item, like check number, amount, payee, 
               tag, date, etc. 
          * Easy bank statement reconciliation
          * Instant balances
          * Move, delete, store on disk, and print-out modes.
          * No disk reading or writing except at start and end.
          * File security available on request

     MODES:

     L  (list edit) Edit the list of entries (Main mode)
     E  (edit)      Edit on check forms   (CHEKLIST program only)
     T  (totals)    Calculate balances (main, bank reconciled, tags)
     F  (find)      Find any entry using search word or number
     G  (go to)     Go to any entry using search word or number
     R  (reconcile) Reconcile entries with bank statement
     C  (continuous)Scroll entry list up or down automatically
     M  (move)      Move an entry to a new location on list
     D  (delete)    Delete an entry
     A  (assign)    Assign tags to ledger account categories 
     S  (store)     Store entries on disk
     P  (print)     Print entries on printer
     N  (new)       Set up (new files, new year, etc.)
     X  (excape)    Go back to DOS


SOME DEFINITIONS

When this document refers to an "entry", it will mean all of the 
information entered for one transaction (check or deposit).  Each 
entry is given an entry number (0 to 1699) which always appears 
on the display with the entry.  In the list mode, an entry is 
also referred to as a "line".

When the "record" is mentioned, it means the entire batch of entries
currently on file. (Some call it the "check register.)

"Going to" or "moving to" an entry means getting it on the screen and, 
in case of the list mode of operation, putting the cursor on it.

An "item" is one of the parts of an entry.  Items are entry number,
check number, date, type, amount, payee, payor, memo, etc.

The RETURN key is the CARRIAGE RETURN key.

A "tag" provides a very simple way to do what is sometimes called 
double-entry accounting or the keeping of ledger accounts. 
Putting tags on entries allows you to instantly get a total of 
all entries that have the same tag (that saves hours of work at 
tax time).  Or you can have the machine find all entries with the 
same tag.  A tag is merely a letter that you assign to a 
particular category of entries (household expenses, for example).  
An entry can have from none to eight tags. You can even assign a 
fraction of the amount of the entry to a tag.

























OPERATING INSTRUCTIONS


The instructions in this section present the basic operating 
rules.  All of these are described in greater detail in later 
sections where a number of other topics are also covered that 
need to be read only by those who are really serious about using 
these programs.



     WHAT THE KEYS DO

          FUNCTION KEYS                             function keys       
                                                   /             \
                                                    ------ ------
     *  UP   -  Move up in entry record            | STOP |  UP  |     
                                                    ------ ------
     * NEXT  -  Print NEXT check number or day /   |      | NEXT |
                   find next empty line                    ------
     * SAME  -  Print SAME item as previous entry/ |      | SAME |
                   find same searchword elsewhere          ------
     * MODE  -  Push to select a new MODE          |      | MODE |
                   Then push letter of new mode.           ------
     * DOWN  -  Move down in entry record          |      | DOWN |
                                                    ------ ------
     * STOP  -  Stop calculation, search / Show help screen



          OTHER KEYS                                      
                                                           ------
     *  +    -  Deposit /  Increment check number,year    |   +  |
                                                           ------
     *  -    -  Cancel + / Decrement check number,year    |   -  |
                                                           ------
     * RETURN-  Stores item / Moves cursor to next item   | <--' |
                                                           ------
     * DEL   -  Delete (see mode explanations)            | Del  |
                                                           ------
     * BACK  -  Backspace is same as delete               | <--- |
                                                           ------

     More about keys:

          * Keys behave differently in different modes
          * Some keys do nothing in some modes
          * When MODE is pushed, a ? appears on the bottom line.
               That means "push the letter of the mode you want".
               In CHEKLINE, the key causes the most used modes to be
               shown on a prompt line. A second push shows the rest.
          * Horizontal arrow keys on numeric key pad move the cursor.
          * Vertical arrow keys same as UP and DOWN keys (F2, F10)
          * PgUp and PgDn move the L-screen up or down by 20 lines.

THE MODES

To enter a particular mode, push MODE (F8) and then the letter of 
the mode. When you push MODE, a ? appears on the last line. When 
you push the letter of the new mode, the mode appears there.
In CHEKLINE, a prompt line shows the available modes.




L (LIST) EDIT MODE       (Available in both programs)
     * List of entries is displayed
     * Current balance is shown one line before the last line
     * UP and DOWN keys move cursor to select line for editing     
     * On first entering, write and delete are locked out, L blinks.
     * To unlock, push MODE and L again. (This protects your sanity).
     * The items may be edited as follows:
   
          DATE -Enter as for example 02:03 ( 2: 3 is also OK)
               -Pushing + and - increments and decrements year
               -SAME, and NEXT keys speed up entry

          NO   -May be used for check number
               -Putting D or DEP for deposit makes entry positive (+)
               -Write AAA0 for first entry of first account,
                      AAA1 for first entry of second account, etc.
               -Delete erases only at cursor location.
               -NEXT, SAME, + , and  - keys can speed up entry

          TO/FR-Enter whatever is meaningful

          AMT  -Enter amount as number of cents (no decimal point)
               -Delete erases entire amount except sign
               -Minus signs for checks (debits) are not shown
               -Deposits must have + sign
               -Use + and  - keys to change signs
               -Entering D in NO or TAGS items makes amount + 
               -Cannot leave entries in middle of a bank account with
                  no amount or 0 amount
               -First entry in an account should be initial balance

          TAGS -Enter any tags  here (see definition of tags above)
               -As many as 8 tags can be entered.
               -To assign a percentage of the amount to a tag,
                  precede the tag letter with a percentage. e.g: 25G
               -Putting D if entry is deposit makes entry positive  (+)

          MEMO -Use is optional

          REC  -Box in lower right corner is for reconciling with 
                  bank statement 




E (EDIT) MODE      (Only available in CHEKLIST program)
     * Check-form is displayed
     * Current balance is in the "balance" box
     * RETURN moves cursor and stores items in memory
     * UP and DOWN keys bring previous and next entry to screen
     * On first entering, write and delete are locked out, E blinks.
     * To unlock, push MODE and E again.
     * All other things are the same as L mode (see above).


T (TOTALS) MODE
     * Push space bar (or A) to calculate balance from start of
          bank account to entry on E screen or cursor on L screen.
     * Push B to get balance of only entries reconciled with bank
          statements (this should match last bank statement balance).
     * Push C to calculate the current balance. (Must be done after 
          deleting an item or if you want to be sure it is correct.)
     * Push a letter E to Z to get balance of all entries with that
          tag-letter in the TYPE column.


F (FIND) MODE
     * Shows entries that match search word (or number). 
     * Use RETURN to move cursor to item to use in search - any item.
     * Type a search word or number (letters are automatically caps).
     * Don't worry about covering other writing.
     * If searching for amount, use exact number but ignore sign.
     * If searching for anything else, best use smallest possible piece
          of thing to be found.
     * Delete cancels search word, restores original display.
     * UP and DOWN keys set direction of search. Can step up or down
          only if no search word is entered.
     * UP or DOWN keys start search in up or down direction.
     * SAME key starts same search again - in direction of arrow..
     * If match is found, entry is shown temporarily on screen.
     * Then either delete to restore display or push SAME to search more.
     * Delete when finished searching to restore original display.
     * Must delete before entering another search word or number.
     * To view "next" empty entry line, push NEXT key.
     * To actually move to another entry permanently, must use G mode.


G (GO TO) MODE
     * The same as F mode, except original place in record is lost.
     * Machine goes to matching entry if SAME key is pushed.
     * Machine goes to next empty entry line if NEXT key is pushed.
     * Going to a new location is fastest using the entry number.


C (CONTINUOUS) MODE
     * Scans entries continuously in direction set by UP and DOWN keys.
     * Set speed with number keys. 0 is fastest, 9 is slowest.
     * Change speed and direction while scanning.
     * Push SPACE BAR to hold scan or continue scanning.

R (RECONCILE) MODE
     * For each transaction on last bank statement, find entry in record.
     * Cursor is in Reconcile box (or R column in list mode). Stays there
          until RETURN is pushed and nothing has been typed.
     * If entry appears on bank statement, type something in box -
          preferably something that identifies month of statement.
     * RETURN stores the mark in memory and brings next entry to display.
     * If nothing is typed in box, use DOWN key to get next entry.
     * Other items can be edited in this mode.
     * If a transaction is on bank statement but not in your record,
          must make a new entry or balances will not match.
     * The SAME key can speed up entry - for most entries, SAME RETURN
          is all you need to push..


M (MOVE) MODE
     * Assigns new entry number to an entry.
     * Move to the entry that is to be moved.
     * With cursor on entry number, type new number.
     * Push MODE to escape without moving.
     * Push RETURN to move entry to new location and adjust all others.
     * Cannot move to location that leaves empty line unless AAA is
          in NO item.


D (DELETE) MODE
     * Deletes an entry.
     * Move to the entry to be deleted.
     * Start D mode.
     * After warning message, push D or RETURN to delete,
           MODE to escape.
     * After deleting, re-calculate current balance with T mode.


P (PRINT) MODE
     * Prepare printer.
     * To message MB, respond with M, B, or O
     * M includes all Memos in the printout.
     * O includes Only balances in place of memos.
     * B includes Both. If there is a memo, it is printed. 
          If there is no memo, the balance is printed.
     * Printing starts when M,O, or B is pushed.
     * Push MODE to escape without printing.


S (STORE) MODE
     * Use before turnoff to store edited record on disk and to make
          backup disks.
     * Check disk drive in lower right corner. Push RETURN if OK, or
          change it by entering another.
     * Warning message then appears.
     * Push S or RETURN to store, MODE to escape without storing.



A (ASSIGN TAGS) MODE
     * Used to assign letters that constitute tags (for display only)
     * Screen shows first letter (E) and any previous assignment.
     * The assignment may be edited.
     * Use UP and DOWN keys to get to other letters (E to Z).
     * Assignments can be seen by using this mode or (after an S mode
          and restarting the program) on the A-screen of the
          CHEKLIST program.


N (NEW FILES) MODE
     * Use to clear memory, make new files for new year, change
          current year, or turn off current balance.
     * Can clear upper memory for entries 1000 to 1699.
     * Just follow directions
     * To repair damaged E-screen, go to N mode and return.


X (ESCAPE) MODE
     * Quits current program and returns to DOS.
     * Don't forget to save first if anything was changed.
     * After warning message, push X or RETURN to quit, MODE to
          escape.


STARTING FROM FLOPPY
     * Put diskette into drive A, enter CHEKLINE or CHEKLIST
     * Drive will be shown. If it is A, push RETURN.  If not,
          enter A.
     * (You may enter P to start with empty record. Best to do
          that after clearing or restarting computer to have clean
          memory. or use N mode to clear.)

    
 Note: This ends the simple, concise description.  You should be able
      to operate with this knowledge and a little experimenting.
      What follows is detailed explanations of everything else you
      might want to know.  At the end, you will find a picture
      of the E-screen for those who have to use the CHEKLINE program. 
















MEMORY AND FILES

When the CHEKLINE or CHEKLIST program is loaded, a 64,000-byte 
section of RAM is set aside for the data records.  When the 
program asks you to read the disk, the records are transferred 
from the disk to that section.  The two programs can both use the 
same records.   All 1000 entries can be stored in this segment at 
the same time.  There is no writing or reading from disks during 
normal operation.   When the STORE mode is used to store the 
records on disk, the data segment is stored on the disk as file 
CHEKDATA.1ST.  Next time one of the programs is started, the data 
file is read from disk back into the data segment in RAM.  It is 
suggested that one record of 1000 entries be used for the 
transactions of exactly one year.  (See STARTING A NEW RECORD).  
The programs also require that the three short disk files, 
CHEKDATA.BAL, CHEKDATA.SCU, AND CHEKDATA.SCD, be on the same disk 
that the main data file, CHEKDATA.1ST, is on.  These files are 
also read when a program starts up.

WHICH DISK TO USE

A single diskette can hold both programs  (CHEKLINE.EXE and 
CHEKLIST.EXE), the demonstration exercise  (CHEKDEMO.DOC), these 
operating instructions (CHEKLIST.DOC), all records for up to 1000 
entries (CHEKDATA.1ST), and three very small files (CHEKDATA.BAL, 
CHEKDATA.SCU, and CHEKDATA.SCD).  Such a disk should last the 
average family for one year.  To operate from the diskette, you 
need only insert it and enter the name of the program you want to 
use in response to the DOS prompt for the drive you are using.  
Enter this same drive when the program asks you which drive to 
use. Reading the records from disk and storing them again before 
you turn off the computer will then be done with this diskette.  
You should back up the record files on a second diskette.  One 
way to do that is to remove the main diskette and put the backup 
diskette in its place.   Then  start the STORE mode again.  If 
you prefer to operate from hard disk, copy either program  
(CHEKLINE.EXE or CHEKLIST.EXE) to the hard disk.  Install the 
data files as described in STARTING A NEW RECORD below.  You 
should back up the record files by inserting a backup floppy, 
changing the current drive to that of the floppy, and using the 
STORE mode.  (Even if you use CHEKLIST, you should not discard 
the CHEKLINE program.  It is the only one of the two that can 
unlock locked data files.)

These programs and their data file are memory-resident. If they 
do not work properly, they might be competing for memory space 
with something else in your memory.  The conflict might be  due 
to a number of things.  You might have augmented your DOS to such 
an extent that it extends more than 70600 bytes into  the memory 
space. At start-up you might automatically load (with  
AUTOEXEC.BAT) utilities that require memory space or you might 
have loaded one after start-up. Or such a utility might fix the 
screen colors so that these programs cannot make text bright 
where they have to.  In these cases, you may want to copy the
 
CHEKDATA files and CHEKLIST or CHEKLINE to a diskette with only  
the basic DOS files on it.  Starting or resetting the computer 
with this "system" diskette in drive A will then put only the  
simple DOS system in along with the bank account program.



STARTING FROM FLOPPY DISK

If you are using CHEKLIST on a floppy disk, insert the disk in 
drive A and enter either CHEKLINE or CHEKLIST in response to the 
DOS prompt >A, depending on which program you want.  The program 
will load and will then want to read the previously recorded 
check records from the disk.  The screen will ask whether the 
current drive is all right or whether you want to select a new 
one.  (You can bypass the reading from disk by entering P for 
pass.  In that case, be sure that the memory segments that the 
program will use for storing your records  are empty.  If you 
have just turned the machine on, they should be.  Otherwise you 
can use the N mode (activity #2) to clear.  Also, bypassing the 
disk destroys the unlocking that allows access to all 1000 entry 
lines.  Using P is not recommended for the average user.)  Under 
normal conditions, you will want to load the check records from  
disk.  In that case, push RETURN if the drive is correct,  (you 
will probably use drive A), or enter a new  drive. (Example: A 
[RETURN])  The machine then reads the disk and puts the latest 
entry on the screen in the E edit mode. 

If you copy the key files onto a "system" disk that has been 
formatted with the /S option and also add an AUTOEXEC.BAT file, 
then the program will start automatically when you power up or 
reset (by pushing Ctrl, Alt, and Del together) the computer.  If 
there is not enough room for all the files on a system disk, you 
need not copy the program that you are not using (CHEKLIST or 
CHEKLINE) or the instruction file (CHEKLIST.DOC).  You should 
have one of the .EXE files and all four CHEKDATA files on your 
operating disk.  But it is possible to operate with the EXE file 
on one disk and the CHEKDATA files on another.



STARTING FROM HARD DISK

If you have copied CHEKLINE.EXE or CHEKLIST.EXE to the hard disk, 
also copy the four CHEKDATA files (.1ST, .BAL, .SCU, and .SCD).
To run a program,  enter CHEKLINE or CHEKLIST in response to the 
DOS prompt <C.  When the time comes to store, store onto the hard 
disk and, for backup, on a floppy disk.  Reading from disk and 
storing are faster when the hard disk is used.
 
IMPORTANT NOTE:
These programs cannot work from sub-directories.  Please store 
them and their data files in the ROOT DIRECTORY of the hard disk.

  
THE SCREENS

If you use the CHEKLIST program,  the first screen after the 
title screen is the E-screen with the check form.  Above the form  
is a small help-screen with useful information.  The left-hand 
column lists how the various function keys are labeled.  The next 
column lists some special codes that can be put into the NO: 
blank on the check  form.   The MODES column shows the various 
modes that are available and the letters that you type to start 
them.  The right-hand  column  shows the kinds of balances 
(totals) you can get and the letters that you type to get them.  
You can refer to this help-screen when you are using the L-screen 
by just changing to the E mode and then returning to L.

In the bottom left corner of the E-screen, helpful messages will 
appear during operation.  These are either error messages or 
clues as to what you should do next.  These messages blink.  In 
the middle of the same line is the word  MODE:   The letter  
displayed there shows what mode the machine is in.  A ? means  
that you must select the mode by typing a mode letter.  The  
adjacent arrow shows in which direction scrolling or searching 
will be done.  Other special messages will appear at the  right 
end of this line during operation.  The word WORKING appears 
there when the machine is busy.
  
In the CHEKLIST program the L-screen appears when the L (list) 
edit mode is entered.  In the CHEKLINE program this screen is the 
only screen.  The L-screen shows a 21-line window of the 1000 
possible entry lines.  The window can be moved up or down. The 
same messages that appear on the bottom of the E-screen appear on 
the last line of this screen (see E-screen above).

In the CHEKLINE program, the second line from the top displays 
either the functions of the main function keys or a list of the 
available modes.  The most often used modes appear when the MODE 
key is pushed. The remaining modes appear if the MODE key is 
pushed a second time.  In CHEKLIST, only the function keys are 
shown on this line because the modes can be called up with F1.

The current balance is shown in the "balance" block on the E 
screen and on the second the last line on the L screen.  This 
balance must be set after the first entries have been made in a 
new record.  It must also be reset after deleting an entry with 
the D mode.  After being set, the balance should stay correct as 
you make entries.  (If you goof when entering an amount, it is 
possible to upset it.)  there is any doubt that it is correct, it 
can be easily reset.  To set the balance, start the T (Totals) 
mode and push C (for current balance).  Do that once in a while.

If you should keep more than one account on one disk, the current 
balance would have to be re-calculated whenever you switch 
accounts.  If you forget, you could get into trouble. It might be 
better, in that case, to turn off the current balance and use the 
T mode (pushing A) whenever you want to check the balance.  The 
current balance feature can be turned off in the N mode.

In the CHEKLIST program there is also an help screen that shows 
any tag assignments that you make and the modes that are 
available.  To see this screen, just push the F1 function key.  
When you are finished, push the space bar to return to normal 
operation.



KEY FUNCTIONS


     Function Key F1: In CHEKLINE, this key is used to stop a search
       or a calculation in progress (after stopping search in F or G
       mode, push DEL).  In CHEKLIST it again stops a search or
       calculation and it also presents the help screen.  The help
       screen can be called at any time.

     Function Key F2 or up arrow key: These are the UP keys. In most
       modes, they step the cursor or the display up to the next entry
       in the direction of the top of the list. In some modes they
       change the direction of searching or scrolling. In the 
       FIND mode, they can start searching in the up direction.

     Function Key F4: This is the NEXT key.  In the EDIT modes, it
       works on check numbers and dates.  If the cursor is in the
       check-number (NO) column, it causes the machine to look up the 
       check number of the previous entry and enter the next higher
       number.  If the cursor is in the date column, it prints the
       next higher day number (even if that is 32).  In the FIND
       mode, it finds the "next" empty entry line.

     Function Key F6: This is the SAME key. In the EDIT modes, it 
       puts into the item where the cursor is the same information
       that is entered into that item in the previous entry .
       That works on check numbers, dates, and the reconcile mark.
       In the FIND mode, it starts the search in the direction of 
       the arrow at the bottom of the screen.

     Function Key F8: This is the MODE key.  Pushing it terminates the
       current mode and puts a ? where the mode is shown.  You must
       then select another mode. In other words, to select a mode, 
       push F8 and the mode letter.  In CHEKLINE, a prompt line 
       shows some available modes. Pushing MODE again shows the rest.

     Function Key F10 or down arrow key: These are the DOWN keys.  In
       most modes, they step the cursor or the display down to the
       next entry in the direction of the bottom of the list. In some
       modes they change the direction of searching or scrolling.  In
       the FIND mode, they start searching in the down direction.

     Note: It would be a good idea to use a template for the
          function keys.
    

     RETURN Key: In the EDIT modes, this key enters an item into the
       memory if it has been newly typed, deleted, or edited. It 
       also steps the cursor to the next item.  If an item has not
       been changed, the key only steps the cursor along. The cursor
       will continually  cycle through the items in an entry.
       However, there are certain items to which the cursor steps
       only in certain modes.  In the MOVE, DELETE, STORE, and PRINT
       modes, the key starts the action of the mode.

     DELETE and BACKSPACE Keys:  These keys act the same. In the 
       edit modes, they erase entered data.  In the AMOUNT column,
       the  entire item is erased (except the + sign, which  must be
       changed by typing - ).  In all other columns, only the charac-
       ter under the cursor is erased and the cursor is moved left.
       Characters to the right of the cursor can only be erased by
       typing over them with other characters or spaces or by
       typing anything over them to move the cursor and then erasing
       with the DELETE or BACKSPACE keys.  What you see on the screen
       when you push RETURN is what is stored in the memory.  In the
       FIND mode, these keys delete the search word or number that
       you have entered and return the display to its original state.

     + and - Keys: These keys are used in the EDIT modes.  In the 
       AMOUNT column, they change the sign (+ for a deposit, - for
       a withdrawal, although the - sign is not displayed). In the
       NO column, the + key increments the check number each time it
       is pushed and the - key decrements it.  In the DATE column,
       the keys increment or decrement the year.  This is the only
       way the year of an entry can be changed.  Otherwise the year
       is automatically made the "current" year (which can be set
       in the N mode).


     Letter and Number Keys: These keys work normally. Some special
       symbol keys are locked out.


     Cursor Control Keys: The UP and DOWN arrow-keys on the right end
       of the keyboard duplicate the actions of the UP, DOWN function   
       keys.  The right and left arrows move the cursor within an item.

      
     The PgDn key, when used in the L edit mode, moves the L-screen
       window down so that you see the line that the cursor is on plus
       the next twenty lines.  The PgUp key moves the window up so that
       you see lines 20 to 40 preceding the cursor line.  In other words,
       IF THE CURSOR IS ON THE BOTTOM, these keys move the screen down
       20 lines and up 20 lines, respectively.  You may push one of the
       keys while the screen is being printed (but if you push PgUp and
       there is less than a page left at the top, printing will stop in
       mid-page.  To fix that, just push PgDn.)
      
       If you want to reprint the L-screen because the MEMO column has
       been covered up by balances, push PgDn and PgUp.

MODES

     EDIT (E) MODE
       This mode is available only in the CHEKLIST program It is
       used to operate in the single-check mode in which the
       display  shows  only  one  entry at a time  on a  bank
       check form. When the program is first started, it finds the
       last entry of the first bank account and puts that entry on
       the display. When the mode is first entered from any other mode,
       the E on the bottom line is blinking.  That means that the 
       writing and erasing functions are locked out.  (The inconvenience
       of having to unlock each time is much less than that of having
       to correct things inadvertently typed or erased when first 
       entering the mode).  To unlock the writing and clearing, you
       must push MODE and E a second time.  Subsequent pushes of these
       buttons alternately lock and unlock the mode.  While the mode
       is locked, the up, down, and cursor movements can be made as
       usual.

       When the mode is unlocked, editing can be done. This editing can
       consist of making changes on existing entries or stepping to
       blank forms and making new entries.  It is important that no
       entry forms be skipped when making new entries and that no 
       entries are made with nothing in the AMOUNT space.  The program
       considers any form with nothing or 0 as an AMOUNT  to be 
       empty and all balance calculations will stop there, thinking
       that  it is the end of the account.  Error  messages  will
       tell you when you attempt to skip a form, but the machine cannot
       detect your deleting an amount on a previously entered one.
       
       Each of the items on the check form that can be edited
       are described below more or less in the order in which you 
       will probably select them.  After you have typed, erased,
       or corrected an item so that it is as you want it to be,
       you must push the RETURN key to put the item into the memory.   
       The machine will not let you continue otherwise. Any item
       except the AMOUNT may be left blank.


       NO: This item is intended mainly for check numbers. You can 
          write a number there.  You can push NEXT and the program
          will increment the number from the previous entry and put
          it there. Whatever number is there, you can increment or
          decrement it with the + and - keys.  Or you can leave it
          blank.

          If the entry is a deposit, you can put D or DEP in this 
          column.  Anything with a D in it, will automatically put
          a + sign into the AMOUNT column and make it a deposit.
          (Do not put anything with a D in it into this column
          unless the entry IS a deposit !)

          The first entry of each account MUST begin with the code
          AAA.  It is recommended that the first entry of the first
          account be labeled AAA0, the second AAA1, and so on.

       TAGS: This item is for tags.  Tags can be assigned to entries
          so that, at some later time and at the push of a button,
          you can ask the machine to find or to calculate the total
          amount of all entries with that same tag.  A tag should be
          any letter from E to Z.  For example, if you assigned the
          letter H to "house expenses" each house expense entry
          should have an H in the TAGS column.  At any time, you can
          then put the machine into the T (for totalize) mode and
          push H.  It will then add all of the entries which have H
          in the TAGS column and present you with the total amount
          that you have spent on the house.  You can give an entry 
          more than one tag (there is room for 8 characters).  You can
          also assign only a part of the amount of the entry to a tag.
          To do that, you precede the letter with a number which is
          the fraction of the amount to be assigned with the decimal
          point left out.  The following examples will make that clear:


               To add          write         the machine will
                                                 make it
               ------         -------        ----------------
                100%          nothing               1
                 60%             6                  0.6
                 22%             22                 0.22
                  5%             05                 0.05

          So to assign 30% of an entry to tag G and 25% to tag
          P, for example, you would write 3G25P into the column.  Or
          you could write 3G 25P. Spaces make no difference. (No more
          than two numbers per fraction, please.)

          You can use this column to designate an entry as a deposit
          by entering a D.  That will again automatically put a + sign
          on the amount. It will also allow you to add up all of the
          deposits that you have marked with a D with the T mode.

       DATE: There are four slots available for the month and day.
          You should write a date as the example 02:05.  The machine
          automatically skips over the marker between month and day.
          so that you only have to type 0205.  You can push SAME to 
          make the machine print the same date as is on the previous
          entry.  The NEXT key prints the next day.  To erase, either
          type over a wrong date or move the cursor to the right and
          then delete.

          The year is automatically assigned the current year value.
          (That value can be changed with the N mode.)  If you need
          to change the year, with the cursor in the date column,
          push the + key to increment or the - key to decrement.
          (The year can be changed by only four years up or down from
          the current year.)

       TO/FROM:  The payee or payor can be put here.  Capital  or 
          lower case letters can be used.

       AMOUNT: The dollar amount of the entry is put here.  It is 
          entered without a decimal point - as if it were in pennies.
          For example, to enter $10.00, type 1000.  If you make an
          error here, the DELETE and BACKSPACE keys erase the entire
          amount and you must start over again.  

          If the entry is a deposit, there MUST be a + sign before 
          the number.  If you previously (or even subsequently) enter
          a D in the NO: or TAGS: column, the + sign will be put
          in automatically.  If not, you must put it in with the +
          key. (The reason for the three ways to put the sign in is
          to reduce the chances that you will forget.  You should 
          make it a rule to either write DEP into the NO: column or
          put a D into the TAGS: column for each deposit. If the
          + sign is omitted, the balance will be wrong.)  If a +
          sign is put there in error, it can be deleted by pushing 
          the - key. The RETURN key must be pushed to enter the amount
          as it must be pushed to enter other items, but it need not
          be pushed for the + or - sign.
           

       MEMO: This space can be used for memos or as an extension of 
          the TO/FOR line if it is too short.



       LIST EDIT (L) MODE

       This is the principal edit mode in the CHEKLIST program
       and the only edit mode available in the CHEKLINE program.  
       When CHEKLIST  is  first  started,  it begins in the E
       mode.  If the mode is then switched to L by pushing MODE
       and L, then 21 of the last entry lines of the first
       bank account are printed on the screen.  The cursor can
       be moved up and down with the UP and DOWN keys.  When
       the cursor reaches the top or bottom of the display, the
       window scrolls up or down.  The PgUp and PgDn keys can be 
       used to move  by 20 lines.  As in the E mode, when the 
       mode is first entered, the L at the bottom is blinking and
       writing and deleting are locked out.  MODE and L must be
       pushed again to allow editing.  Editing is then allowed
       on the line and the item at which the cursor is located.
       The actual editing is done exactly as described in Mode E
       above,  except that the items are in a different order. 
       (You might even describe these two modes as comodes !}
       Again it is important not to leave empty lines,  that is,
       lines with nothing in the AMOUNT column.







       TOTALS (T) MODE

       When the T mode is entered, you can have the machine 
       calculate various totals by typing single letters. 

   A   If you type A or push the space bar, the machine calculates
       the sum of all entries from the beginning of the bank account
       down to the location of the cursor (or the  entry on the
       screen if you  are  in  the E edit mode.  Also, in the E mode,
       the balance appears in the "balance" block instead of the
       current balance.  The current balance reappears if you push
       C or when you make another entry.)
       
       If  there is an entry with  0  in  the amount column
       (which is an unacceptable condition), the calculation stops
       at that point because the machine thinks that that is the
       end of the account.

   B   If, instead of pushing the space bar, you push B, the program
       calculates the total of all entries that have been reconciled
       with bank statements (see RECONCILE mode).  Again, the 
       calculation ends at the cursor location.

   C   If you type C (for Current balance), the program calculates
       the balance to the end of the account no matter where the
       cursor is or which entry you have on the E screen. The result
       of the calculation becomes the current balance which is then
       automatically updated with each entry that you make.  Use this
       feature to set the current balance on a new record or to make
       sure that the current balance is correct.  It should stay
       correct in normal operation.  It is possible to upset the
       balance by some combinations of entering wrong amounts,
       clearing, and re-entering. If you delete an entry with the
       D mode, you MUST re-calculate the balance. Also, when you 
       use the N mode to turn the feature on after it has been off.
       It is a good idea to check the balance once in a while.
       
  E-Z  If you type the letter of one of your tags, the program calcu-
       lates the total of just those entries which have been given the
       same tag in the TAGS column. (Don't be surprised if this total
       is negative.  If all tagged entries are checks, it should be.)
       Each time a calculation ends, you may order another calculation
       by pushing another button.  The results of such calculations
       are never stored. Each calculation goes through the entire
       bank account.  This allows you to make changes in amounts
       without fear of upsetting any previously calculated balances.



       FIND (F) MODE

       One way to find a particular entry is to step through the 
       account and look for it.  The FIND mode will do the searching
       for you and do it quickly.  You may identify the entry to be
       found by any of the items in the entry.

       When you enter the F mode, type what you want  to find. You
       can borrow any entry form (E-screen) or line (L-screen)
       to enter your search word or number even if there is
       an entry written there.  Just use the form or line on which
       you happen to be.  With the RETURN key, put the cursor on the
       item that you want to use in the search.  Then type what you
       want the program to look for.  What you type will appear
       as flashing characters.  These characters will cover what
       was there before, but only temporarily.  In this mode,
       nothing is entered in the memory.  No material is lost by
       writing over it.  Pushing the DELETE or BACKSPACE key
       restores the display to its original form.  If you search
       for an amount, type the amount without regard for the sign.
       The search will find like amounts both positive and negative
       If you use any item other than the amount or the date, you can
       type the entire item as you think it was entered in the entry
       you are looking for or you can type a part of it.  The FIND
       mode will search for an item that includes the search word or
       number you specify.  For example, if you are looking for a
       check to Mr. William P. Sroodge, you should not search for
       that entire name because you may have written Mr. Scroodge
       or W.P. Scroodge.  Searching for just SCROODGE will have a
       better chance of finding the check.  It also does not matter
       which letters are capitalized.  The search routine ignores
       all capitalization.  It would find scroodge or SCROODGE or
       even scrOODGE. It would also fine SCROOD, but not SCROOGE.
       In this way, you can also search for all entries that have
       been given tags even if some entries have more than one tag.
       Just enter in the TAGS column the letter of the tag you want
       to find and push SAME. The entry number can also be a search 
       item and so can the year. To search for all entries that have
       not been reconciled with a bank statement, type a SPACE into
       the R column (or the REC box on the E screen) as a search word.
       
       When you have typed the search word or number, Pushing UP 
       or DOWN (or up and down arrow) keys, starts the search in the
       up or down direction, respectively.  The SAME key also starts
       the search but in the direction of the arrow at the bottom of
       the screen. When the program finds a matching entry, it
       displays it. If you were operating in the E edit mode, the
       found entry is put on the check form in place of what was there
       before. If you were in the L edit mode, the found line will
       appear with high brightness on the line where the cursor is
       located.  In either case, you can tell from the entry number
       where the entry is located.  You can continue the search for
       other matching entries by pushing SAME  or the UP or DOWN keys
       again.  When the search gets to the end of the list, the
       direction automatically reverses.  If you want to type a new
       search word, you must DELETE first.

       To view the first empty entry line in the account in which you
       are operating, push NEXT.  


       After searching with either the SAME or NEXT key, pushing DELETE
       or changing modes restores the display to its original state.
       You are still in the original place in the record.  If you want
       to actually move to the location you are searching for, then 
       use the G (GO TO) mode instead of F.


       GO TO (G) MODE

       The G mode works exactly like the F mode.  The difference is
       that in this mode you actually move to the entry you are
       searching for.  (In the F mode, it is put on the display for
       viewing but when the DELETE key is pushed or the mode is changed,
       the found entry disappears and the machine returns to the
       original location in the record.)

       To move to the first empty location on the list, enter the G
       mode and push NEXT.
       
       Going to a new line is much faster when the entry number is
       used as the search item.


       CONTINUOUS (C) MODE

       In this mode, the display scans up or down continuously.
       If  you are operating in the E edit mode, one  entry  is 
       flashed  on the screen at a time.  In the list  mode,  the 
       list scrolls up or down.  The speed of scanning can be set
       by pushing one of the number keys. After 0 is pushed, the
       speed of flashing new entries is as fast as it can be.
       The higher the number you push, the slower is the scan rate.
       At 9, each entry is on about 4 seconds.  Pushing the UP or 
       DOWN keys sets the direction.  Both the direction and speed
       can be changed while the scanning is going on.  If you
       want to stop on a particular entry, push the space bar. That
       puts the mode on hold.  The directional arrow becomes bright
       during hold.  Push the space bar again to continue.  Scrolling
       ends when the account boundary is reached.  Push UP or DOWN to
       continue. Pushing MODE also stops the scanning.


       RECONCILE (R) MODE

       When a monthly bank statement arrives, each transaction listed 
       there must be checked against your record.  This is made easy
       by the R mode.  

       When the R mode begins, the cursor is automatically located in
       the R column.  If you are in the E edit mode, this column is
       the little box in the lower right corner of the check form.
       In the L edit mode, it is the column at the right edge of the  
       screen. This is where you "check off" the items in the bank
       statement.  If the entry on the screen appears in the bank 
       statement, you must type something in the R column.  Anything
       will do, but it is smart to put a letter that identifies the 
       month of the bank statement.  For a month that has the same
       first letter as another, you might substitute the number of 
       the month.  When you have typed whatever symbol you have chosen
       and entered it with the RETURN key, the program automatically
       steps to the next entry.  If that entry is also found on the
       bank statement, you need only push SAME and RETURN. The cursor
       stays in the R column after RETURN if there was actually 
       something to enter.  If you push RETURN when you put no mark
       into the R column, the RETURN key will move the cursor as it
       normally does.  In fact, normal editing can be done in the R
       mode.  The only thing different from the normal edit mode is
       that the cursor can be moved to the R column and that if you
       enter something there the next entry will be called up and the
       cursor will stay in the R column.

       If the bank statement shows transactions for which you have not
       made entries (such as service charges or interest credits),
       you should make a new entry for each such transaction AND FILL
       IN THE R COLUMN.  


       When every transaction listed on the bank statement has been
       matched with an entry on your machine and the R column filled in,
       you are ready to check the balance.  Be sure that you are located
       at the last entry that has something in the R column (or at least
       below that entry) and change to the T (TOTALIZE) mode.  Then
       type B. The machine will calculate the sum of all entries that
       have something in the R column.  That sum should match the final
       balance of the bank statement.  If it does not, then something
       has probably been entered incorrectly and you will be busy for
       a while longer.



       MOVE (M) MODE

       If you must change the order of your entries, you may do so
       with the M mode.  The mode allows you to change the entry 
       number of an entry.  If you assign it a lower number, all entries
       from    the old number to  the new will be moved down one slot
       and the entry will be inserted in the new location.  If you
       assign it a higher number, all entries from the old to the new
       number will be moved up one slot and the entry inserted in its 
       new location.

       To make the move, go to the entry which is to be moved and 
       change to the M mode.  The cursor is then automatically put in
       the ENTRY NUMBER column. Type the new number that the entry is
       to have. (The characters you type will blink and they can be
       deleted with the DELETE and BACKSPACE keys.)  Then push RETURN.




       DELETE (D) MODE

       This mode can be used to delete an entry and move all lower
       entries up one slot.  To use it, move to the entry that you
       want to delete, and change to the D mode. The machine will
       flash a warning message to make you think whether you really
       want to go through with this.  You must push D again or push
       RETURN to actually delete the entry.  If you decide not to
       delete, push MODE and select another mode.

       Deleting makes the current balance incorrect.  Use the T 
       mode and push C to re-calculate this balance.
      

       ASSIGN TAGS (A) MODE

       This mode allows you to designate up to 22 special categories
       and assign them tags from E to Z. It can also be used to see
       any assignments that were made earlier.  Examples of categories
       that you might want to assign are certain kinds of income, house
       expenses, business expenses, medical expenses, phone bills, and
       whatever else you might want to break out as a separate balance
       at the end of the year or to find quickly.  The programs do
       nothing with these assignments.  They are only stored so that
       you can look at them if you forget which tag represents which
       category.
        
       When the A mode is started, the word ASSIGNMENT: flashes at
       the right side of the bottom line.  After that will be the letter
       E and any category  that has been assigned to letter E.  You
       may enter a new name or change what was entered there.  If you 
       made any changes, you must push RETURN to store the changes in
       memory. The UP and DOWN function keys (F2 and F10) can be used
       to step up and down the list of 22 possible tags.  Assignments
       need not be made in any kind of order and any letter can be left
       unused.

       After assignments have been made, they reside in the RAM memory
       but they are not stored on the disk until the next time the
       the STORE (S) mode is used.  From then on, they will be read from
       disk along with the check record data and will appear on the
       help screen that can be seen in the CHEKLIST program by pushing
       the F1 key.  Whether or not they are stored on disk, the assign-
       ments can always be seen by calling the A mode.



       STORE (S) MODE

       This mode causes all vital data to be stored on whichever
       disk is designated as the current drive. The 1000 entries 
       are  stored in a disk file called CHEKDATA.1ST.  The  tag  
       assignments, current balance, and a few other items are 
       stored in a short file CHEKDATA.BAL.  These files are read
       back in when you re-start the program. 

       Before storing starts, the lower right side of the screen 
       shows which is the current drive and gives you a chance to 
       change it.  If the drive is correct, just push RETURN.  If not,
       type in the drive you want and push RETURN. (Example: A [RET])

       A warning message appears to let you change your mind.       
       Push S again or RETURN to start storing.  To abort, push MODE.

       If you write new entries or edit old ones and turn off the 
       computer  without using the STORE mode, the work  you  did 
       will  be  lost.   You must use this mode  at  least  before 
       turning  off if you want to save the data.  The S mode  is 
       also used to save the records on backup disks. 


  
       PRINT (P) MODE

       This mode is used to print the entries out with your printer.
       The print-out looks like the L screen. When the mode is started,
       the message MB is flashed.  This message prompts you to select
       one of three modes of printing. Since there is not room on an 
       80-character page to print everything, you have the choice of
       printing the memos, the current balance, or a mixture of both.
       If you type M in response to the MB message, the printer will
       print the "M"emos in the Memo column.  If you respond with the
       letter O, it will print "O"nly the current balance at each entry
       and print no memos.  If you respond with B (for "B"oth), the
       printer will print the memo whenever an entry has a memo.  If the
       entry has no memo, it will print the current balance instead.
       One extra line is printed so that you are sure to get a final
       balance.  When all entries of an account have been printed, the 
       machine continues searching for another account. Pushing the
       STOP key stops this search.



       NEW FILES (N) MODE

       This mode can be used for a number of things.  When first 
       trying these programs, it provides some guidance.  It can be
       used to clear the RAM sectors used for storing record data.
       When ending a record at the end of a year and starting a new
       one, this mode provides step by step instructions.  The mode
       lets you decide whether or not to use the current balance
       feature. (After turning on the current balance, it should
       be re-calculated using the T mode.)  Finally, the mode allows
       the changing of the current year.

       In all cases, the mode provides complete instructions.  There
       is one secret that is not revealed except right here.  If, for
       some reason, you want to bypass the clearing of the RAM memory
       segments, you can enter P (for pass) when asked to enter the
       disk drive.

       ESCAPE (X) MODE

       The X (for "excape") mode returns you to DOS.  The first time
       you enter the mode, a warning message is flashed.  It means "are
       you sure?  Do you have to store first??".  If you are sure, push
       X or RETURN.  If you don't want to quit the program, push MODE
       and select another mode.






MULTIPLE BANK ACCOUNTS

These programs can handle several accounts if the total number
of entries is below 1000.  It is probably best to have a single
checking account at the beginning of the record and put small,
seldom changed savings accounts at the end. If the main account
does not use nearly half of the available entries in a year,
the next year's entries could be made into a new account.
If there will be more than one account, then the first entry of
each account must have the code AAA as the first three letters
in the NO column. This first entry should also labeled "starting
balance" and must have a starting balance (other than 0) in the
AMOUNT column.  The starting balance must have a + sign (unless 
it is negative).

It is recommended that the first account be called AAA0, the next
AAA1, and so on.  The first, and main account should start at
entry number 0.  When you decide where the next account should 
start, move to its location with the GO TO mode and enter its 
first line.  The machine normally prevents you from entering 
anything after a blank entry, but it will let you enter a first
line if you first put the cursor in the NO column and enter AAA_.

When operating with several accounts in your system, use the
GO TO mode to get you into one account from another.

With multiple accounts, you must calculate the current balance 
when you begin working on an account.  That balance is good only 
for the account you are working with.  If you forget to re-
calculate, you will see the wrong number.  If that is confusing, 
it might be wise to kill the current balance feature with the N 
mode.



CLEARING THE CHEKDATA FILES FROM MEMORY OR DISK

You can clear an old record out.  For example, you may  want  to 
discard the sample records that were on the original diskette and 
start  your  own records.  Go to mode N and use  activity  #2  to 
clear the RAM memory..

When you have cleared the memory, you can also clear disk files
by storing the empty records.

  


STARTING A NEW RECORD (LIKE FOR A NEW YEAR)

A record can hold as many as 1000 entries.  That should be enough 
for one year in the average household.  In fact, to make good use 
of the Tags for end-of-year tax calculations, one record should 
hold the transactions of exactly one year.  (Or, if you can make 
a record serve for two years, you should start a new account for 
the transactions of the second year.)

When you have entered all transactions for the old year and want 
to start a new record, save the old record on one or more floppy 
disks using the SAVE mode. (You should have been doing that for 
backup all along.) Label the disks with the proper year and put 
them away.  Clear the computer memory and change the year with 
mode N. Then start a new record with the first entry being an 
initial balance equal to the final balance of the old record. (Be 
sure to add a + sign if it is a positive balance.)  Save the new 
record on one or more new disks.


If you are using a hard disk and want to save the old record on 
it as well as the new record, activity 3 of mode N can be used to 
guide you through the process.  You are first directed to store 
the old files in new files for safe-keeping.  What had  been 
stored in files CHEKDATA.1ST and CHEKDATA.BAL is stored as files  
CHEKDATA.1XX and CHEKDATA.BXX, where XX is the year when  these 
records were made. You are given the chance to select some  other 
name  than  CHEKDATA. (If, in the future, you want to  use  these 
files  again,  you  must first give  them  their  original  names 
back.) Next, the RAM memory is cleared.  Then new files  
CHEKDATA.1ST and .BAL are set up.

Reconciling with the bank statement is a little more difficult if 
the statement covers entries on both an old and a new disk.  
Start the program and load data from the old year's disk. Do the 
reconciling (mode R) as usual on the old year's record. Calculate 
the reconciled total (pushing B in the T-mode).  If any of your 
entries have not yet appeared on any bank statement, that total 
will be different from the final balance calculated with button 
A. Write down the difference.  (If you had to make any 
corrections in the old record which change the final balance, you 
must change the initial balance on the new record accordingly.) 
Start the program again with the disk for the new year.  Proceed 
with the reconciling process.  If there was a difference in the A 
and B totals on the old record, make a new and temporary entry 
putting in that difference (negative if total A was larger than 
B) and typing  something into column R. With the cursor at or 
below this entry, calculate the total with button B (mode T).  
This total should match that of the bank statement.  Now delete 
the temporary entry.  If there were un-reconciled entries on the 
old year's record, you will have to repeat this process when the 
next bank statement arrives until all entries have been accounted 
for on bank statements.

 

REPAIRING MISSING CURSOR OR DAMAGED SCREEN

If, for any reason, the cursor disappears, the cursor gets out of 
sync with the lines,  or  the  screen  is damaged,  you  need 
only to cause reprinting to fix  the  damage.  The  cursor  can  
be restored by reprinting any  entry  or  line.  On the E screen, 
one push of the UP or DOWN button should do  it.  On  the  L 
screen it may take several pushes.   Both  cursor  and other  
damage  can be fixed on the L screen by pushing  PgDn  and PgUp.   
Something that works in all cases is to start the N  mode and end 
it again by selecting option #6.


BLANK CHECKS

Some people like to enter voided checks with the AMOUNT being $0.  
The program does not let you make entries with $0 in the amount 
column.  You get an error message if you try to enter a line 
after one with a $0 amount.  That is because the program looks at 
the amount in order to tell when it has come to the end of the 
account.  If you must enter voided checks, one solution is to put 
one cent into the amount column.  If you make alternate voided 
checks 1 cent and + 1 cent, the errors will cancel out and you 
will have an error at the end of a year of no more that a cent.



CONTRAST

Some items on the screen are made brighter than others.  The main 
highlighted items are the messages, plus signs, and the "found" 
entries in the F mode.  If these things do not appear brighter 
than the other things on your screen, it may be that the contrast 
and brightness controls on your terminal are not properly 
adjusted.  They are usually located on the back.



FILE SECURITY

Secret codes for protecting data files from unauthorized access 
are available on request.





MESSAGES

The messages that blink in the lower left corner should be self-
explanatory.  However, due to the limited space, some have been 
abbreviated more than desirable.  The messages that can appear are
listed below.  In parentheses are the extra words that would appear
in these messages if there were room.  You should refer to this 
list if a message is not clear.

These programs are in compiled BASIC.  If there is a disk 
problem when the program  or its files are first being loaded, a 
normal BASIC error message appears and operation returns to DOS.  
In that case, you should correct the problem and start again.  
When the program is running, if a problem is encountered  with a 
disk drive or a printer, it is reported to you in the form of a 
number (example: BASIC error 68).  The meanings of the codes that 
you are most likely to encounter are listed below.  If you should 
get a different number or you want to find out more about them, 
please consult a BASIC manual.

There are also sound messages. A high beep means that the machine
has finished some activity.  A low beep means that there is a
message blinking in the lower left corner.
































                           MESSAGE LIST



 1  Previous entry (was) not a number. (Could not do NEXT)
 2  A number, please. (Must enter a number here).
 3  A letter, please. (Must enter a letter here).
 4  You edited. Push RETURN (to continue).
 5  End of record.
 6  Start of record.
 7  Illegal entry.
 8  End of account. (No match found.  Push SAME to) Go again.
          (Direction has been changed.) 
 9  End of memory. (No match found. Push SAME to) Go again.
          (Direction has been changed.)
10  If you're sure, (push) RETURN. (Last chance to abort - with MODE)
11  Bad line. (No "amount" in last line. Please push) DELETE, RETURN.
12  Skip lines? (Will leave empty line! If you want that,) push
          RETURN.
13  Too many years away (from current year. Limit is 4.)
14  Space not allowed here (at the beginning of item).
15  Number too big.  Delete.
16  Disk not ready.
17  Which total? A,B,E...Z? (Type a letter.)
18  Type search item & UP/DN (or SAME).
19  This is IT ! (Push SAME to) Go again ?
20  Memos, Only balances, Both? (Push M for Memos only, B (or space)
           for Both, O for Only balances, MODE to abort.)
21  Type new entry no.(number). (Push) RETURN
22  Four digits, please (for date).
23  Locked. Enter the mode (MODE L or E) again (to edit).
24  BASIC error (with disk or printer.  See below)



     SOME COMMON BASIC ERROR MESSAGES

           5  Attempt to edit protected program
          24  Device timeout
          25  Device fault
          27  Out of paper or printer not ready
          57  Device I/O error          
          61  Disk full
          68  Device unavailable
          70  Disk Write-protected
          71  Disk not ready
          72  Disk media error

          For more details on the BASIC errors
          consult a manual on BASIC





OTHER PROGRAM

If you find this program useful, you are invited to try the 
author's other program, INSURE.  This program is for the keeping 
of records of medical insurance claims.  As anyone who has had to 
file large numbers of these claims will testify,  keeping track 
of the claims and the amounts paid on them is an extremely 
difficult job.  INSURE makes it easy.  It provides convenient 
data entry, instant summaries, and search features.  Operations 
are guided by instructions every step of the way.  The program is 
available from the same sources that distribute CHEKLIST.


 







file: cheklist.wds         last rev:  7/17/88


```
{% endraw %}

## FILE0397.TXT

{% raw %}
```
Disk No:  397                                                           
Disk Title: CHEKLIST SYSTEM                                             
PC-SIG Version: S1.6                                                    
                                                                        
Program Title: CHEKLIST SYSTEM                                          
Author Version: 1.50                                                    
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
A simple system for maintaining bank account records for the home that  
provides the functions you need to keep your bank-related information   
accurate and up-to-date.                                                
                                                                        
Track up to 10 bank accounts with 1000 entries, or transactions, each.  
Maintain ledger accounts, draw instant balances, bank statement         
reconciliations and flexible search and sort options.                   
                                                                        
Convenient to use, this checkbook manager provides thorough             
recordkeeping for today's harried householder.                          
                                                                        
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
║               <<<<  Disk #397 CHECKBOOK SYSTEM  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print out the CHECKLIST Documentation enter:                       ║
║                      COPY CHEKLIST.DOC PRN                              ║
║                                                                         ║
║   To print out the CHECKDEMO Documentation enter:                       ║
║                      COPY CHEKDEMO.DOC PRN                              ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0397

     Volume in drive A has no label
     Directory of A:\

    CHEKDATA 1ST     64008   5-31-90   2:22p
    CHEKDATA BAL       439   5-31-90   2:22p
    CHEKDATA SCD        73   6-27-88  11:06a
    CHEKDATA SCU        73   6-27-88  11:06a
    CHEKDEMO DOC      8047   5-31-90   2:16p
    CHEKLINE EXE     91598   8-03-89   2:42p
    CHEKLIST DOC     68415   5-31-90   2:14p
    CHEKLIST EXE    101882   8-03-89   4:31p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       883   1-01-80   4:32a
    FILE0397 TXT      1851   7-09-90   6:50p
           11 file(s)     337307 bytes
                           19456 bytes free
