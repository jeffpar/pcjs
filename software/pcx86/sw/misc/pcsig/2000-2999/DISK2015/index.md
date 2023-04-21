---
layout: page
title: "PC-SIG Diskette Library (Disk #2015)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2015/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2015"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHEX"

    CHEX is a bookkeeping program for balancing checks, credit cards, and
    savings accounts. The program looks and feels just like the recording
    section in your own checkbook. For each item or check you write, you
    may enter the date, check number, whether it is a debit or credit, who
    the item is written out to, a short note, and a category code. As the
    amount for each check is entered, the program will keep a running total
    of your bank statement.
    
    CHEX is easy to use because all information is entered and displayed in
    a list divided into columns on the screen. At any time you may sort the
    checkbook by date, allowing you to enter checks in any order you please.
    The program can balance the checkbook at the press of a button. CHEX
    can print an individual check, the entire checkbook, or a financial
    graph and total for the last 60 months. CHEX will allow you to
    customize the standard print format for your own checks. Continuous
    forms are not required. You may also export the checkbook information
    into LOTUS 1-2-3. CHEX has on-line, context-sensitive help, password
    and encryption protection, and an automatic saving feature which
    activates after a specified period of time with no input from the
    keyboard.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHEX.DOC

{% raw %}
```
 October 26, 1989                                                      v2.43
                                C h e X
                Copyright (c) Rich Young, 1987, 1988, 1989

 CheX is an easy to use checkbook program for your IBM PC or compatible
 computer.  It assists in balancing and can also be used for credit cards,
 savings accounts, and other types of debit / credit bookkeeping.

 To START a new checkbook type "CheX" and press <Return>.  Respond with a
 "Y" or "y" to create a new checkbook.  Enter the date and the existing
 balance prior to your first non-posted entry.  Then enter the rest of your
 entries that have not cleared the bank.

 Use <F2> to sort the items that appear on the screen.  This keeps items in
 date order.  <F7> is used to print your checkbook, and <Escape> or <F10>
 exits the program.

 Please feel free to copy and distribute this program fully intact with this
 document.  If you are using this program, please send a $20.00 contribution
 to the address at the end of this document.  By using this program you
 accept full liability;  there is no warranty stated nor implied.  Please
 don't let this program result in an overdraft on your part due to an
 oversight on my part.


.                      T A B L E   O F   C O N T E N T S

                          Screen                                     Screen
    I.  Control Keys....... 3.01       VII.  Check Printing.......... 19.17
   II.  Function Keys...... 5.01      VIII.  Format Check Options.... 21.05
  III.  Fields............. 8.13        IX.  Graph & Total........... 23.18
   IV.  Balancing......... 12.01         X.  Password Options........ 27.13
    V.  Custom Options.... 14.10        XI.  Errors.................. 29.17
   VI.  Print and Audit... 18.04       XII.  Program Information..... 30.10


I.   C O N T R O L   K E Y S:

 ---------------------------------------------------------------------------
 |  Home       - Top of checkbook.    |  Return      - Next column.        |
 |  End        - Bottom of checkbook. |  Right Arrow -  "    "             |
 |  Page Up    - Up one screen.       |  Tab         -  "    "             |
 |  Page Down  - Down one screen.     |  Left Arrow  - Previous column.    |
 |  Backspace  - Back up one space.   |  Shift Tab   -  "        "         |
 |  Escape     - Exit.                |  Up Arrow    - Up one line.        |
 |  "0" (zero) - Clears date; Check # |  Down Arrow  - Down one line.      |
 |  "."        - Decimal or "00".     |                                    |
 |               (option dependent)   |                                    |
 |                                    |                                    |
 |  Alt-C      - Copy item cursor     |  Ctrl-PgUp   - Top of screen.      |
 |                 is on.     Ctrl-K  |  Ctrl-PgDn   - Bottom of screen.   |
 |  Alt-I      - Insert line. Ctrl-N  |  Alt-P       - Print check hotkey. |
 |  Alt-D      - Blank item.  Ctrl-Y  |  Alt-D Alt-D - Delete item.        |
 ---------------------------------------------------------------------------

   While entering numeric fields, the alphanumeric keyboard will emulate a
   ten key in the following manner:

                -----------                   ------------
                 \ 7  8  9 \                   \ 7  8  9  \
                  \ U  I  O \     same as       \ 4  5  6  \
                   \ J  K  L \                   \ 1  2  3  \
                    \ M     . \                   \ 0     .  \
                     ----------                    ------------

 Note: If you start an entry in error, back spacing to the beginning of the
       field will restore the original field.  Once you move off the field,
       you may use <F3> to undo any changes made to the item.  Undo has a
       limit of 40 items and is cleared when you go to another checkbook,
       <F9>.


II.   F U N C T I O N   K E Y S:

  F1  - HELP.  Displays this document, "CHEX.DOC".  Available at any prompt.
        Press <F4> or "F" to search for a specific subject or string.  Press
        <F5> or "N" to find the next occurrence of the string.  You may
        modify this document to fit your needs.  I use the QEdit editor with
        a right margin of 76.  Maximum number of lines is 600.

  F2  - SORT items that appear on the screen.  For larger sorts use <F6-S>.

 [F3] - UNDO any changes made to the item the cursor is currently on.  The
        old item will be displayed at the bottom of the screen.  Press "Y"
        to confirm.  Undo limit is 40 items.  Undo information is cleared
        when you go to a different checkbook level, <F9>, or by deleting an
        item, <Alt-D> <Alt-D>.

 [F4] - FIND an alpha string.  Starts at end and works back to the beginning
        of the book.  FIND is not case sensitive.  Use "|" for vertical
        lines.  When a string is found you will have the following options:

          (E)nd find     - return to checkbook.
          (G)raph        - graph all occurrences.             (section  IX.)
          (M)ove to item - moves the cursor to the actual item.
          (N)ext item    - search for next occurrence of string.
          (P)rint & next - print item, display next occurrence and total.

 [F5] - FIND NEXT occurrence of an alpha string.  Used after F4, FIND.

 [F6] - RECONCILIATION functions:

          (B)alance - balance bank statement.                 (section  IV.)
          (L)ock    - locks the checkbook so that posted items can not be
                      altered. Exiting the checkbook will do the same thing.
          (P)ost    - move the cursor to the first non-posted item.
          (S)ort    - sort the last #### items in the checkbook.
          (U)nlock  - unlocks the checkbook for modifying posted items.

 [F7] - PRINT functions:

          (C)heck       - print an individual check.          (section VII.)
          (D)isk        - print to disk.  Filename: CHEXPR##  (section  VI.)
          (E)xport      - create a comma delimited export file for 1-2-3,
                          dBase, and other programs.  Filename: CHEXPR##.PRN
                          (A)ll fields  or  (N)umeric fields only.
          (F)eedback    - Display/print optional CheX FEEDBACK form.
          (G)raph       - graph or display totals by month, by year,
                          or by category.                     (section  IX.)
          (P)rint       - print checkbook to printer.         (section  VI.)
          (T)ypewriter  - use your printer as a typewriter.

 [F8] - OPTIONS settings:

          (C)ustom options   -  setup and color options.     (section    V.)
          (F)ormat check     -  custom check print formats.  (section VIII.)
          (P)assword options -  passwords and encryption.    (section    X.)

 [F9] - OPEN AUXILIARY checkbook.  The current book number is displayed in
        the headings in column "To:".  From DOS, you may go directly to an
        auxiliary book by typing CheX ## at the DOS prompt, ## being a value
        of 1 through 99.

 F10  - EXIT directly to DOS from any and all prompts.  Clears the screen.

 ESCAPE   - EXIT current checkbook or exit function.


III.   F I E L D S:

 ---------------------------------------------------------------------------
 | TITLE   | DESCRIPTION                                                   |
 |---------|---------------------------------------------------------------|
 | P       | POSTING CODE.  Used by balancing to determine which items     |
 |         | have cleared the bank.  If an item appears on your statement, |
 |         | enter the first letter of the month that the statement is     |
 |         | dated.  These items will be highlighted.  You may also        |
 |         | highlight non-posted items by entering an asterisk.  Valid    |
 |         | entries are; J, f, M, a, Y, u, L, g, S, o, N, d, or *.        |
 |         | Y, U, L, and G are for May, June, July, and August.           |
 |---------|---------------------------------------------------------------|
 | Date    | DATE WRITTEN.  Default is today or date last entered.  May be |
 |         | entered as DD, MMDD, MMDDYY, MM/DD, or MM/DD/YY.  This is     |
 |         | CheX's primary sort key.  Valid entries:  1/1/50 - 12/31/99.  |
 |         | The date can be changed to an international format, DD/MM/YY, |
 |         | by pressing <F8> option "C" and changing #12 to a "Y".        |
 |---------|---------------------------------------------------------------|
 | Ck# A/_ | CHECK NUMBER.  Default is last number entered plus one if the |
 |         | check is not future dated.  Entering a zero will turn off     |
 |         | automatic check numbering.  "Ck#A" in the heading indicates   |
 |         | automatic check numbering is on,  "Ck#_" indicates that it    |
 |         | has been turned off.  Note: CheX print will display a warning |
 |         | message if a check number is out of sequence.  (max = 4 chrs) |
 |---------|---------------------------------------------------------------|
 | Debit   | CHECK DOLLAR AMOUNT.  (max = 99,999.99)                       |
 |---------|---------------------------------------------------------------|
 | Credit  | DEPOSIT DOLLAR AMOUNT.  (max = 99,999.99)                     |
 |---------|---------------------------------------------------------------|
 | To:     | ITEM DESCRIPTION.  The person the check is written to or the  |
 |         | source of the deposit.  (max = 20 characters)                 |
 |---------|---------------------------------------------------------------|
 | Note    | NOTES.  (max = 12 characters)                                 |
 |         |   a. On item # 1, the note is used as a checkbook title.      |
 |         |   b. Can be used to continue an item description.             |
 |         |   c. "-" or "=" are personal and will not print on checks.    |
 |         |   d. "=" is an audit figure for the running balance.          |
 |---------|---------------------------------------------------------------|
 | Cat     | ITEM CATEGORY.  The first letter is converted to upper-case   |
 |         |   and may be graphed by pressing F7 - "G" option "C".  It is  |
 |         |   preferable to use unique characters.  (max = 3 characters)  |
 |         |   The following list is what I use; feel free to change it.   |
 |         |                                                               |
 |         |     Aut - auto         Ins - insurance    Qry - quarry/yard   |
 |         |     BC  - bank card    Job - job/work     Ren - rent          |
 |         |     Cas - cash         Knw - knowledge    Sav - savings       |
 |         |     Dre - dress        Ln  - loan         Tax - taxes         |
 |         |     Exp - expenses     Md  - medical      Ut  - utilities     |
 |         |     Fun - fun/friend   New - newspaper    Vac - vacation      |
 |         |     Gro - groceries    Org - organization                     |
 |         |     Hom - home         Pay - income                           |
 |         |                                                               |
 |         | Note: Characters W, X, Y, Z, and any special characters will  |
 |         |       be totaled together.  See section "IX. Graph & Total".  |
 |---------|---------------------------------------------------------------|
 | Balance | RUNNING BALANCE.  Computed.  (-999,999.99 thru 9,999,999.99)  |
 ---------------------------------------------------------------------------


IV.   B A L A N C I N G:                                                F6-B

 To balance your bank statement, press <F6> and option "P".  This will move
 the cursor to column "P" on the first non-posted item.  The item will be
 highlighted.  If the item appears on your bank statement, enter the first
 letter of the month you are posting.  (Letters Y, u, L, and g may be used
 for May, Jun, Jul, and Aug.)  The system will then move the cursor down
 to the next entry.  Use the down arrow key to skip entries that do not
 appear on your statement.  (I alternate between upper and lower case
 letters to help differentiate months.)

 Once all the posted items are marked, press <F6> and option "B".  The
 system will prompt you for the ending statement balance.  Enter the amount
 and press <Return>.  The difference displayed should be zero, otherwise you
 have entered an item incorrectly or have marked/not marked an item in
 error.  To change an item that has been marked as posted, you must "unlock"
 the checkbook by pressing <F6> and option "U".

 In the event your checkbook is out of balance, CheX may locate a possible
 error.  Please validate the suggestion prior to taking any action.  CheX
 limits the search to a single "current item", so CheX will not always find
 an item posted in error.  Also, multiple errors will not be found.

 If CheX is unable to locate an error, it will tell you if your checkbook is
 too high or too low.  Use the following to know what to look for.

 If your checkbook is too high, check the following:

    1.  Debits that require posting.
    2.  Posted credits that should not have been posted.
    3.  Posted debits that the amount entered is too low.
    4.  Posted credits that the amount entered is too high.
    5.  Entered statement balance is too low.
    6.  Running balance errors.  (see section "XI. ERRORS").

 If your checkbook is too low, check the following:

    1.  Posted debits that should not have been posted.
    2.  Credits that require posting.
    3.  Posted debits that the amount entered is too high.
    4.  Posted credits that the amount entered is too low.
    5.  Entered statement balance is too high.
    6.  Running balance errors.  (see section "XI. ERRORS").


V.   C U S T O M   O P T I O N S:                                       F8-C

 Options are stored by checkbook.  You may use different options for each
 auxiliary book.  Enter value to change and press <Return>.  Use <Escape> to
 exit.  A prompt will appear confirming your desire to save changes.  Press
 "Y" to use the changes that you made.


  1-5 Color codes        - Use codes 0 through 255.  Codes 128 through 255
                           blink.  To the right of the selected color the
                           highlighted version of the color is represented.
                           Use the right arrow key to update this value.

  6. Test disk & printer - (0, 1, 2, 3)  Disk and printer test.
                            0 = Perform no tests.
                            1 = Test if there is enough disk space.  This
                                option will make CheX startup slower.
                            2 = Test if the printer is ready.  (default)
                            3 = Perform both tests.

  7. Fast screen mode    - (Y or N)  Some color monitors will produce "snow"
                           when the screen is being displayed.  Press "N" to
                           suppress this snow.  This will make screen
                           display slower.

  8. Form feed line #    - Number of lines to do a printer page break,
                           0=off. There are 66 lines to a normal page.

  9. Auto exit # minutes - If a key is not pressed after ### minutes, the
                           system will clear the screen, save all updates
                           and exit your checkbook for safekeeping.  In the
                           event you were using SideKick, auto exit is
                           postponed to one minute after you return to CheX.

 10. Save # minutes/chgs - Number of elapsed minutes or the number of
                           changes to do an automatic full save.  A full
                           save also occurs prior to any print operation
                           that could hang the system.

 11. Auto read # of items- (0 to 255)  Number of items to be automatically
                           read into memory.  Auto Read works in between key
                           strokes.  Use 255 to set to maximum items.  The
                           number to the right is the number of items that
                           will presently fit in memory.  Maximum is 6138.
                           This does not affect CheX's checkbook maximum of
                           9,999 items.  Note: When Auto Read is turned on
                           the help file, HELP.DOC, is also automatically
                           read into memory.

 12. International dates - (Y or N)  If turned on, dates are entered and
                           displayed in DD/MM/YY format.

 13. Check print LPT:    - (1 or 2)  Selects which printer checks are
                           printed on.  Does not affect checkbook printing.

 14. Decimal entered     - (Y or N)  Specifies if decimal points are entered
                           on dollar amounts.  For option "N" the decimal
                           point will produce double zero, "00".

 15. Sound duration      - (0 to 9)  Zero turns sound off.

 16. Size of cursor      - Use <Page Up> and <Page Down> to change.  Cursor
                           size format is TTBB, where TT is the top scan
                           line and BB is the bottom scan line.


VI.   P R I N T   and   A U D I T:                               F7-D / F7-P

 <F7> is used to print a check or your checkbook.  For check print see
 section "VII. CHECK PRINTING:" below.  Checkbook printing is to paper or to
 disk.  The format is similar to what appears on the screen.

 During the print process the running balance, audit entries, check sequence
 numbers, and item sort order is validated.  Errors are indicated with a ">"
 on the printout and by a message at the end of the run.

 If the running balance is in error, the computed balance is inserted in the
 "To:" column of the item in error.  This error indicates loss of data and
 should be reconciled.  Data loss can be caused by turning the machine off
 while the checkbook is being saved.

 Audit entries are notes you insert that confirm the running balance.  This
 is done by typing a "=" in the first position of the note field.  Then the
 system will insert the current running balance for that item.  Should the
 running balance ever change, the print process would flag the entry as an
 error.

 Sequence warnings messages indicate that a check number was entered
 incorrectly or used out of sequence.  I suggest that you try to use your
 checks in sequence so that the print process can help validate the
 integrity of your checkbook.

 Item sort sequence errors could indicate a date entered in error or that
 your entries have not been sorted.  This is just a warning and may not
 require any action.


VII.   C H E C K   P R I N T I N G:                                     F7-C

 To print a check, move the cursor to the check you want printed.  Press
 <F7> and option "C".  Align your check to the date line and press <Return>.
 The check will be printed using the formatting information stored by
 checkbook.

  To help the alignment process, you may press "-", ".", or "_".  These will
 be printed on the check document.  Pressing the left and right arrow will
 move the carriage back and forth on some printers.  This should not affect
 where the next print field will be printed.

 As an option you can press ALT-P as a print check hotkey.  This will print
 the check the cursor is on without pausing for alignment.

 If the name of the person you are writing the check to is longer than the
 "To:" field, you may continue their name in the note column.  To do this,
 type over the vertical line between the "To:" column and the "Note" column.
 Check print will then print the note field as part of the name.

 Check formatting information may be changed by pressing <F8> option "F".
 For more information see section "VIII.  Format Check".


VIII.   F O R M A T   C H E C K                                         F8-F

 If you plan on using the check printing feature, you may need to change the
 standard print format.  Press <F8> and option "F" to change the standard
 print format.

 These options are stored by checkbook.  You may use a different format for
 each auxiliary book.  Enter value to change and press <Return>.  Use
 <Escape> to exit.  A prompt will appear confirming your desire to save
 changes.  Press "Y" to use the changes that you made.


   1 - 15  Enter formatting information for each field you want printed.
           Fifteen fields may be defined.

     Line feeds         - Number of line feeds prior to printing the field.
                          Note: Most printers use 6 line feeds to the inch.

     Micro line feeds   - Since some checks are not typewriter spaced, you
                          may need to do partial line feeds.  Only use this
                          if you know how to make your printer do micro line
                          feeds.  Use option #16 below to define the proper
                          escape sequence for your printer.  Note: Epson
                          uses 12 micro feeds to a standard line feed.

     Spaces             - Number of spaces to print prior to printing the
                          field.  Most printers use 10 or 12 spaces to the
                          inch.  CheX's default format uses 12 spaces to the
                          inch.

     Field Code         - Alpha codes "a" through "z" and "0" through "8".
                          Used to define which field to print.  These codes
                          are defined on the right side of the Format Check
                          window.

  16 Escape sequence for micro feeds - The escape sequence your printer
                          requires to do micro line feeds.  The sequence
                          needs to be followed with the commands to return
                          the printer to a normal print mode.  Each
                          character is a decimal number from 0 to 255.  Each
                          character is separated with a "/".

 Note:  Check printing does NOT require the purchase of continuous forms.
        Most letter quality printers and some dot matrix will print checks
        on your existing checks.  This makes it possible to print the
        envelope too.  I use an old SilverReed EXP 400 hooked up to LPT2:.
        Then I can still use LPT1: for faster dot matrix printing.


IX.   G R A P H   &   T O T A L:                                        F7-G

 GRAPH TYPE:
   (B)AR GRAPH - total debits, total credits, and average balance by month.
   (C)ATEGORY  - plotting of net dollar amounts by category code.
   (N)UMBERS   - display of actual values used by the above graphs.

 GRAPH CALCULATION:  (BY MONTH or BY CATEGORY)
   (A)CTUALS                      - monthly totals of debits & credits.
   (S)UM TOTAL                    - cumulative totals.
   (T)HREE MONTH WEIGHTED AVERAGE - graph smoothing technique.
   (D)ETAIL                       - detail plotting of each item.

 BAR GRAPHS:

 Totals are by month.  Each month graphed is indicated on the bottom of the
 screen.  Up to sixty months can be displayed.

 Scaling is based on the highest value and the zoom factor.  Press "+" or
 "-" to change zoom.  Years are represented by different colors on the month
 line.  Both total debits (checks) and total credits (deposits) are graphed
 together until one exceeds the other.  Up arrows represent amounts that
 exceed the scaling.

 A single "B" is the average daily balance.  Minus signs, "-", represent
 negative balances.  Down arrows represent negative balances that run off
 the scale.  The graph will not be accurate if the checkbook is not in date
 order.

 The far left margin displays the graph type.  The far right margin contains
 the checkbook title, today's date and time, the title being whatever is
 entered in the note field of item number one.

 Three month weighted average is a graph smoothing technique.  Each month is
 represented by taking the current month times three, the prior month times
 two and the month before that times one.  Then the sum is divided by six.

 On color monitors, debits are graphed using the checkbook's heading color.
 The rest of the graph uses the detail line color.

 You may also graph selected items using the "F4 FIND" command.


 CATEGORY:

 By pressing "C", graphing is by category net dollar amount, category being
 the first character in the "CAT" field.  Lower case letters indicate that
 more than one category was plotted.  "@" represents categories that were
 not "A" through "V".  By pressing the letter "B", the graph is returned to
 the standard bar chart format.

 By pressing "N", the values that make up the graph are displayed.  An
 asterisk, "*",  next to the category code indicates that the code usage has
 more than one meaning.  i.e. PAY and PC will display PA*.  On the right
 side of the screen the category percentage and six month average is
 displayed.


 NUMBERS:

 For each of the graphs, the actual values that are being plotted may be
 displayed.  This is done by pressing the letter "N" at any graph prompt.
 Since this information will not fit on a single screen, the left and right
 arrow keys are used to scroll through the results.  In addition to the
 plotted values, computed totals/averages are displayed.


X.   P A S S W O R D   O P T I O N S:                                   F8-P

 Passwords are optional.  You may use different password options for each
 auxiliary book.  Enter value to change and press <Return>.  Use <Escape> to
 exit.  A prompt will appear confirming your desire to save changes.  Press
 "Y" to use the changes that you made.

 The first time you add password options, CheX needs to be started with the
 "/P" option;  CHEX [##] /P.  Once a checkbook is password protected, the
 password may be entered as the LAST parameter on the command line;  CHEX
 [##] [/P] PASSWORD.  When you create a new checkbook, password options will
 be turned off.


  1. Primary password   - Primary password for your checkbook.  By entering
                          a password you must REMEMBER one of your
                          passwords.  Enter a blank in each of the four
                          fields to turn passwords off.
       Verification     - Reenter the above entry for verification.

     Backup password    - A second password in case you forget the first
                          one.  Both passwords should be entered each time
                          you make changes.  They both work the same.
       Verification     - Reenter the above entry for verification.

  2. Encrypt checkbook  - (Y or N)  By turning this option on, casual
                          browsing of your checkbook file is discouraged.
                          Since this option will only take affect for new
                          information stored, you will want to update every
                          item in your checkbook.  An easy way to do this is
                          to change the dollar amount of the first item in
                          your checkbook.  Then change it back to the
                          correct amount.  Be sure to perform the same
                          operation after turning this option off.

  WARNING:  Use the above options with caution.  You could lose valuable
  information by forgetting your password or by damaging an encrypted
  checkbook file.  Also note that the above routines are not very secure.


XI.   E R R O R S:

 To exit the program press <Escape> or <F10>.  In the event that power is
 lost or the system hangs prior to exiting, the checkbook could have serious
 errors.  Errors in the running balance will be flagged during the checkbook
 printing process, <F7>.  The running balance may be corrected by reentering
 a dollar amount above the running balance error, but it is up to you to
 determine which items have been lost.  See section "VI. PRINT and AUDIT"
 above.


XII.   P R O G R A M   I N F O R M A T I O N:

 CheX will run in 200K but runs better in 256K or more.  With more memory
 more items can be kept in memory.  This minimizes disk access but has no
 effect on the size of your checkbook.  A checkbook file may contain up to
 9,999 items.  CheX does not support memory above the DOS 640K barrier.


 CheX's FILES:

   README.      - Short description on how to get started.  May be deleted.
   CHEX.EXE     - Checkbook program.  Dated October 26, 1989; size 110795.
   CHEX.DOC     - This document.  Used as a help screen.  May be deleted.
   CHEX.FB      - CheX FEEDBACK registration form.  Please return.
   CHEX.AD1     - Your name and address for envelope print.  May be deleted.
   CHEX.PIF     - Used for running under MS Windows.  May be deleted.
   CHEX.UPT     - Updates or changes to the CheX program.  May be deleted.
   CHEX243.ZIP  - Library file containing all of the above.  May be deleted.

   CHEXBK##     - Checkbook.  Created by CheX.  ## = book number 01 thru 99.
   CHEXPR##     - Created by CheX on print to disk.  May be deleted.    F7-D
   CHEXPR##.PRN - Export file for transferring to Lotus or DB III.      F7-E
   CHEXPR##.OLD - Old copy of CHEXPR##.  Temporary.  Save this if you get a
                  disk error while printing your checkbook to disk.
   CHEX.AD#     - Free form text/binary files for check printing. # = 2 or 3

 If you are using the CHEXBK## file with any other program, please note the
 following:  In versions 2.40 and up, the carriage return at the end of each
 record is replaced by the last two digits of the category field.  This will
 require that programs using the CHEXBK## file use a random access mode
 rather than a sequential access mode.  Please contact me if you need more
 information.

 Please send $20.00 to keep CheX alive and growing.  As an option you may
 use the CheX FEEDBACK form.  This form can be printed by pressing <F7> and
 option "F".  Thank you in advance.

 Thanks to everyone who provided feedback and helped in the distribution of
 CheX.  Special thanks to Rick Mendosa.


                         ----------------------------
                         |  Rich Young              |
                         |  6060 Ashley Place       |
                         |  Goleta, CA  93117-1773  |
                         ----------------------------


 (end of CHEX.DOC document)  
```
{% endraw %}

## CHEX.DOC

{% raw %}
```
 October 26, 1989                                                      v2.43
                                C h e X
                Copyright (c) Rich Young, 1987, 1988, 1989

 CheX is an easy to use checkbook program for your IBM PC or compatible
 computer.  It assists in balancing and can also be used for credit cards,
 savings accounts, and other types of debit / credit bookkeeping.

 To START a new checkbook type "CheX" and press <Return>.  Respond with a
 "Y" or "y" to create a new checkbook.  Enter the date and the existing
 balance prior to your first non-posted entry.  Then enter the rest of your
 entries that have not cleared the bank.

 Use <F2> to sort the items that appear on the screen.  This keeps items in
 date order.  <F7> is used to print your checkbook, and <Escape> or <F10>
 exits the program.

 Please feel free to copy and distribute this program fully intact with this
 document.  If you are using this program, please send a $20.00 contribution
 to the address at the end of this document.  By using this program you
 accept full liability;  there is no warranty stated nor implied.  Please
 don't let this program result in an overdraft on your part due to an
 oversight on my part.


.                      T A B L E   O F   C O N T E N T S

                          Screen                                     Screen
    I.  Control Keys....... 3.01       VII.  Check Printing.......... 19.17
   II.  Function Keys...... 5.01      VIII.  Format Check Options.... 21.05
  III.  Fields............. 8.13        IX.  Graph & Total........... 23.18
   IV.  Balancing......... 12.01         X.  Password Options........ 27.13
    V.  Custom Options.... 14.10        XI.  Errors.................. 29.17
   VI.  Print and Audit... 18.04       XII.  Program Information..... 30.10


I.   C O N T R O L   K E Y S:

 ---------------------------------------------------------------------------
 |  Home       - Top of checkbook.    |  Return      - Next column.        |
 |  End        - Bottom of checkbook. |  Right Arrow -  "    "             |
 |  Page Up    - Up one screen.       |  Tab         -  "    "             |
 |  Page Down  - Down one screen.     |  Left Arrow  - Previous column.    |
 |  Backspace  - Back up one space.   |  Shift Tab   -  "        "         |
 |  Escape     - Exit.                |  Up Arrow    - Up one line.        |
 |  "0" (zero) - Clears date; Check # |  Down Arrow  - Down one line.      |
 |  "."        - Decimal or "00".     |                                    |
 |               (option dependent)   |                                    |
 |                                    |                                    |
 |  Alt-C      - Copy item cursor     |  Ctrl-PgUp   - Top of screen.      |
 |                 is on.     Ctrl-K  |  Ctrl-PgDn   - Bottom of screen.   |
 |  Alt-I      - Insert line. Ctrl-N  |  Alt-P       - Print check hotkey. |
 |  Alt-D      - Blank item.  Ctrl-Y  |  Alt-D Alt-D - Delete item.        |
 ---------------------------------------------------------------------------

   While entering numeric fields, the alphanumeric keyboard will emulate a
   ten key in the following manner:

                -----------                   ------------
                 \ 7  8  9 \                   \ 7  8  9  \
                  \ U  I  O \     same as       \ 4  5  6  \
                   \ J  K  L \                   \ 1  2  3  \
                    \ M     . \                   \ 0     .  \
                     ----------                    ------------

 Note: If you start an entry in error, back spacing to the beginning of the
       field will restore the original field.  Once you move off the field,
       you may use <F3> to undo any changes made to the item.  Undo has a
       limit of 40 items and is cleared when you go to another checkbook,
       <F9>.


II.   F U N C T I O N   K E Y S:

  F1  - HELP.  Displays this document, "CHEX.DOC".  Available at any prompt.
        Press <F4> or "F" to search for a specific subject or string.  Press
        <F5> or "N" to find the next occurrence of the string.  You may
        modify this document to fit your needs.  I use the QEdit editor with
        a right margin of 76.  Maximum number of lines is 600.

  F2  - SORT items that appear on the screen.  For larger sorts use <F6-S>.

 [F3] - UNDO any changes made to the item the cursor is currently on.  The
        old item will be displayed at the bottom of the screen.  Press "Y"
        to confirm.  Undo limit is 40 items.  Undo information is cleared
        when you go to a different checkbook level, <F9>, or by deleting an
        item, <Alt-D> <Alt-D>.

 [F4] - FIND an alpha string.  Starts at end and works back to the beginning
        of the book.  FIND is not case sensitive.  Use "|" for vertical
        lines.  When a string is found you will have the following options:

          (E)nd find     - return to checkbook.
          (G)raph        - graph all occurrences.             (section  IX.)
          (M)ove to item - moves the cursor to the actual item.
          (N)ext item    - search for next occurrence of string.
          (P)rint & next - print item, display next occurrence and total.

 [F5] - FIND NEXT occurrence of an alpha string.  Used after F4, FIND.

 [F6] - RECONCILIATION functions:

          (B)alance - balance bank statement.                 (section  IV.)
          (L)ock    - locks the checkbook so that posted items can not be
                      altered. Exiting the checkbook will do the same thing.
          (P)ost    - move the cursor to the first non-posted item.
          (S)ort    - sort the last #### items in the checkbook.
          (U)nlock  - unlocks the checkbook for modifying posted items.

 [F7] - PRINT functions:

          (C)heck       - print an individual check.          (section VII.)
          (D)isk        - print to disk.  Filename: CHEXPR##  (section  VI.)
          (E)xport      - create a comma delimited export file for 1-2-3,
                          dBase, and other programs.  Filename: CHEXPR##.PRN
                          (A)ll fields  or  (N)umeric fields only.
          (F)eedback    - Display/print optional CheX FEEDBACK form.
          (G)raph       - graph or display totals by month, by year,
                          or by category.                     (section  IX.)
          (P)rint       - print checkbook to printer.         (section  VI.)
          (T)ypewriter  - use your printer as a typewriter.

 [F8] - OPTIONS settings:

          (C)ustom options   -  setup and color options.     (section    V.)
          (F)ormat check     -  custom check print formats.  (section VIII.)
          (P)assword options -  passwords and encryption.    (section    X.)

 [F9] - OPEN AUXILIARY checkbook.  The current book number is displayed in
        the headings in column "To:".  From DOS, you may go directly to an
        auxiliary book by typing CheX ## at the DOS prompt, ## being a value
        of 1 through 99.

 F10  - EXIT directly to DOS from any and all prompts.  Clears the screen.

 ESCAPE   - EXIT current checkbook or exit function.


III.   F I E L D S:

 ---------------------------------------------------------------------------
 | TITLE   | DESCRIPTION                                                   |
 |---------|---------------------------------------------------------------|
 | P       | POSTING CODE.  Used by balancing to determine which items     |
 |         | have cleared the bank.  If an item appears on your statement, |
 |         | enter the first letter of the month that the statement is     |
 |         | dated.  These items will be highlighted.  You may also        |
 |         | highlight non-posted items by entering an asterisk.  Valid    |
 |         | entries are; J, f, M, a, Y, u, L, g, S, o, N, d, or *.        |
 |         | Y, U, L, and G are for May, June, July, and August.           |
 |---------|---------------------------------------------------------------|
 | Date    | DATE WRITTEN.  Default is today or date last entered.  May be |
 |         | entered as DD, MMDD, MMDDYY, MM/DD, or MM/DD/YY.  This is     |
 |         | CheX's primary sort key.  Valid entries:  1/1/50 - 12/31/99.  |
 |         | The date can be changed to an international format, DD/MM/YY, |
 |         | by pressing <F8> option "C" and changing #12 to a "Y".        |
 |---------|---------------------------------------------------------------|
 | Ck# A/_ | CHECK NUMBER.  Default is last number entered plus one if the |
 |         | check is not future dated.  Entering a zero will turn off     |
 |         | automatic check numbering.  "Ck#A" in the heading indicates   |
 |         | automatic check numbering is on,  "Ck#_" indicates that it    |
 |         | has been turned off.  Note: CheX print will display a warning |
 |         | message if a check number is out of sequence.  (max = 4 chrs) |
 |---------|---------------------------------------------------------------|
 | Debit   | CHECK DOLLAR AMOUNT.  (max = 99,999.99)                       |
 |---------|---------------------------------------------------------------|
 | Credit  | DEPOSIT DOLLAR AMOUNT.  (max = 99,999.99)                     |
 |---------|---------------------------------------------------------------|
 | To:     | ITEM DESCRIPTION.  The person the check is written to or the  |
 |         | source of the deposit.  (max = 20 characters)                 |
 |---------|---------------------------------------------------------------|
 | Note    | NOTES.  (max = 12 characters)                                 |
 |         |   a. On item # 1, the note is used as a checkbook title.      |
 |         |   b. Can be used to continue an item description.             |
 |         |   c. "-" or "=" are personal and will not print on checks.    |
 |         |   d. "=" is an audit figure for the running balance.          |
 |---------|---------------------------------------------------------------|
 | Cat     | ITEM CATEGORY.  The first letter is converted to upper-case   |
 |         |   and may be graphed by pressing F7 - "G" option "C".  It is  |
 |         |   preferable to use unique characters.  (max = 3 characters)  |
 |         |   The following list is what I use; feel free to change it.   |
 |         |                                                               |
 |         |     Aut - auto         Ins - insurance    Qry - quarry/yard   |
 |         |     BC  - bank card    Job - job/work     Ren - rent          |
 |         |     Cas - cash         Knw - knowledge    Sav - savings       |
 |         |     Dre - dress        Ln  - loan         Tax - taxes         |
 |         |     Exp - expenses     Md  - medical      Ut  - utilities     |
 |         |     Fun - fun/friend   New - newspaper    Vac - vacation      |
 |         |     Gro - groceries    Org - organization                     |
 |         |     Hom - home         Pay - income                           |
 |         |                                                               |
 |         | Note: Characters W, X, Y, Z, and any special characters will  |
 |         |       be totaled together.  See section "IX. Graph & Total".  |
 |---------|---------------------------------------------------------------|
 | Balance | RUNNING BALANCE.  Computed.  (-999,999.99 thru 9,999,999.99)  |
 ---------------------------------------------------------------------------


IV.   B A L A N C I N G:                                                F6-B

 To balance your bank statement, press <F6> and option "P".  This will move
 the cursor to column "P" on the first non-posted item.  The item will be
 highlighted.  If the item appears on your bank statement, enter the first
 letter of the month you are posting.  (Letters Y, u, L, and g may be used
 for May, Jun, Jul, and Aug.)  The system will then move the cursor down
 to the next entry.  Use the down arrow key to skip entries that do not
 appear on your statement.  (I alternate between upper and lower case
 letters to help differentiate months.)

 Once all the posted items are marked, press <F6> and option "B".  The
 system will prompt you for the ending statement balance.  Enter the amount
 and press <Return>.  The difference displayed should be zero, otherwise you
 have entered an item incorrectly or have marked/not marked an item in
 error.  To change an item that has been marked as posted, you must "unlock"
 the checkbook by pressing <F6> and option "U".

 In the event your checkbook is out of balance, CheX may locate a possible
 error.  Please validate the suggestion prior to taking any action.  CheX
 limits the search to a single "current item", so CheX will not always find
 an item posted in error.  Also, multiple errors will not be found.

 If CheX is unable to locate an error, it will tell you if your checkbook is
 too high or too low.  Use the following to know what to look for.

 If your checkbook is too high, check the following:

    1.  Debits that require posting.
    2.  Posted credits that should not have been posted.
    3.  Posted debits that the amount entered is too low.
    4.  Posted credits that the amount entered is too high.
    5.  Entered statement balance is too low.
    6.  Running balance errors.  (see section "XI. ERRORS").

 If your checkbook is too low, check the following:

    1.  Posted debits that should not have been posted.
    2.  Credits that require posting.
    3.  Posted debits that the amount entered is too high.
    4.  Posted credits that the amount entered is too low.
    5.  Entered statement balance is too high.
    6.  Running balance errors.  (see section "XI. ERRORS").


V.   C U S T O M   O P T I O N S:                                       F8-C

 Options are stored by checkbook.  You may use different options for each
 auxiliary book.  Enter value to change and press <Return>.  Use <Escape> to
 exit.  A prompt will appear confirming your desire to save changes.  Press
 "Y" to use the changes that you made.


  1-5 Color codes        - Use codes 0 through 255.  Codes 128 through 255
                           blink.  To the right of the selected color the
                           highlighted version of the color is represented.
                           Use the right arrow key to update this value.

  6. Test disk & printer - (0, 1, 2, 3)  Disk and printer test.
                            0 = Perform no tests.
                            1 = Test if there is enough disk space.  This
                                option will make CheX startup slower.
                            2 = Test if the printer is ready.  (default)
                            3 = Perform both tests.

  7. Fast screen mode    - (Y or N)  Some color monitors will produce "snow"
                           when the screen is being displayed.  Press "N" to
                           suppress this snow.  This will make screen
                           display slower.

  8. Form feed line #    - Number of lines to do a printer page break,
                           0=off. There are 66 lines to a normal page.

  9. Auto exit # minutes - If a key is not pressed after ### minutes, the
                           system will clear the screen, save all updates
                           and exit your checkbook for safekeeping.  In the
                           event you were using SideKick, auto exit is
                           postponed to one minute after you return to CheX.

 10. Save # minutes/chgs - Number of elapsed minutes or the number of
                           changes to do an automatic full save.  A full
                           save also occurs prior to any print operation
                           that could hang the system.

 11. Auto read # of items- (0 to 255)  Number of items to be automatically
                           read into memory.  Auto Read works in between key
                           strokes.  Use 255 to set to maximum items.  The
                           number to the right is the number of items that
                           will presently fit in memory.  Maximum is 6138.
                           This does not affect CheX's checkbook maximum of
                           9,999 items.  Note: When Auto Read is turned on
                           the help file, HELP.DOC, is also automatically
                           read into memory.

 12. International dates - (Y or N)  If turned on, dates are entered and
                           displayed in DD/MM/YY format.

 13. Check print LPT:    - (1 or 2)  Selects which printer checks are
                           printed on.  Does not affect checkbook printing.

 14. Decimal entered     - (Y or N)  Specifies if decimal points are entered
                           on dollar amounts.  For option "N" the decimal
                           point will produce double zero, "00".

 15. Sound duration      - (0 to 9)  Zero turns sound off.

 16. Size of cursor      - Use <Page Up> and <Page Down> to change.  Cursor
                           size format is TTBB, where TT is the top scan
                           line and BB is the bottom scan line.


VI.   P R I N T   and   A U D I T:                               F7-D / F7-P

 <F7> is used to print a check or your checkbook.  For check print see
 section "VII. CHECK PRINTING:" below.  Checkbook printing is to paper or to
 disk.  The format is similar to what appears on the screen.

 During the print process the running balance, audit entries, check sequence
 numbers, and item sort order is validated.  Errors are indicated with a ">"
 on the printout and by a message at the end of the run.

 If the running balance is in error, the computed balance is inserted in the
 "To:" column of the item in error.  This error indicates loss of data and
 should be reconciled.  Data loss can be caused by turning the machine off
 while the checkbook is being saved.

 Audit entries are notes you insert that confirm the running balance.  This
 is done by typing a "=" in the first position of the note field.  Then the
 system will insert the current running balance for that item.  Should the
 running balance ever change, the print process would flag the entry as an
 error.

 Sequence warnings messages indicate that a check number was entered
 incorrectly or used out of sequence.  I suggest that you try to use your
 checks in sequence so that the print process can help validate the
 integrity of your checkbook.

 Item sort sequence errors could indicate a date entered in error or that
 your entries have not been sorted.  This is just a warning and may not
 require any action.


VII.   C H E C K   P R I N T I N G:                                     F7-C

 To print a check, move the cursor to the check you want printed.  Press
 <F7> and option "C".  Align your check to the date line and press <Return>.
 The check will be printed using the formatting information stored by
 checkbook.

  To help the alignment process, you may press "-", ".", or "_".  These will
 be printed on the check document.  Pressing the left and right arrow will
 move the carriage back and forth on some printers.  This should not affect
 where the next print field will be printed.

 As an option you can press ALT-P as a print check hotkey.  This will print
 the check the cursor is on without pausing for alignment.

 If the name of the person you are writing the check to is longer than the
 "To:" field, you may continue their name in the note column.  To do this,
 type over the vertical line between the "To:" column and the "Note" column.
 Check print will then print the note field as part of the name.

 Check formatting information may be changed by pressing <F8> option "F".
 For more information see section "VIII.  Format Check".


VIII.   F O R M A T   C H E C K                                         F8-F

 If you plan on using the check printing feature, you may need to change the
 standard print format.  Press <F8> and option "F" to change the standard
 print format.

 These options are stored by checkbook.  You may use a different format for
 each auxiliary book.  Enter value to change and press <Return>.  Use
 <Escape> to exit.  A prompt will appear confirming your desire to save
 changes.  Press "Y" to use the changes that you made.


   1 - 15  Enter formatting information for each field you want printed.
           Fifteen fields may be defined.

     Line feeds         - Number of line feeds prior to printing the field.
                          Note: Most printers use 6 line feeds to the inch.

     Micro line feeds   - Since some checks are not typewriter spaced, you
                          may need to do partial line feeds.  Only use this
                          if you know how to make your printer do micro line
                          feeds.  Use option #16 below to define the proper
                          escape sequence for your printer.  Note: Epson
                          uses 12 micro feeds to a standard line feed.

     Spaces             - Number of spaces to print prior to printing the
                          field.  Most printers use 10 or 12 spaces to the
                          inch.  CheX's default format uses 12 spaces to the
                          inch.

     Field Code         - Alpha codes "a" through "z" and "0" through "8".
                          Used to define which field to print.  These codes
                          are defined on the right side of the Format Check
                          window.

  16 Escape sequence for micro feeds - The escape sequence your printer
                          requires to do micro line feeds.  The sequence
                          needs to be followed with the commands to return
                          the printer to a normal print mode.  Each
                          character is a decimal number from 0 to 255.  Each
                          character is separated with a "/".

 Note:  Check printing does NOT require the purchase of continuous forms.
        Most letter quality printers and some dot matrix will print checks
        on your existing checks.  This makes it possible to print the
        envelope too.  I use an old SilverReed EXP 400 hooked up to LPT2:.
        Then I can still use LPT1: for faster dot matrix printing.


IX.   G R A P H   &   T O T A L:                                        F7-G

 GRAPH TYPE:
   (B)AR GRAPH - total debits, total credits, and average balance by month.
   (C)ATEGORY  - plotting of net dollar amounts by category code.
   (N)UMBERS   - display of actual values used by the above graphs.

 GRAPH CALCULATION:  (BY MONTH or BY CATEGORY)
   (A)CTUALS                      - monthly totals of debits & credits.
   (S)UM TOTAL                    - cumulative totals.
   (T)HREE MONTH WEIGHTED AVERAGE - graph smoothing technique.
   (D)ETAIL                       - detail plotting of each item.

 BAR GRAPHS:

 Totals are by month.  Each month graphed is indicated on the bottom of the
 screen.  Up to sixty months can be displayed.

 Scaling is based on the highest value and the zoom factor.  Press "+" or
 "-" to change zoom.  Years are represented by different colors on the month
 line.  Both total debits (checks) and total credits (deposits) are graphed
 together until one exceeds the other.  Up arrows represent amounts that
 exceed the scaling.

 A single "B" is the average daily balance.  Minus signs, "-", represent
 negative balances.  Down arrows represent negative balances that run off
 the scale.  The graph will not be accurate if the checkbook is not in date
 order.

 The far left margin displays the graph type.  The far right margin contains
 the checkbook title, today's date and time, the title being whatever is
 entered in the note field of item number one.

 Three month weighted average is a graph smoothing technique.  Each month is
 represented by taking the current month times three, the prior month times
 two and the month before that times one.  Then the sum is divided by six.

 On color monitors, debits are graphed using the checkbook's heading color.
 The rest of the graph uses the detail line color.

 You may also graph selected items using the "F4 FIND" command.


 CATEGORY:

 By pressing "C", graphing is by category net dollar amount, category being
 the first character in the "CAT" field.  Lower case letters indicate that
 more than one category was plotted.  "@" represents categories that were
 not "A" through "V".  By pressing the letter "B", the graph is returned to
 the standard bar chart format.

 By pressing "N", the values that make up the graph are displayed.  An
 asterisk, "*",  next to the category code indicates that the code usage has
 more than one meaning.  i.e. PAY and PC will display PA*.  On the right
 side of the screen the category percentage and six month average is
 displayed.


 NUMBERS:

 For each of the graphs, the actual values that are being plotted may be
 displayed.  This is done by pressing the letter "N" at any graph prompt.
 Since this information will not fit on a single screen, the left and right
 arrow keys are used to scroll through the results.  In addition to the
 plotted values, computed totals/averages are displayed.


X.   P A S S W O R D   O P T I O N S:                                   F8-P

 Passwords are optional.  You may use different password options for each
 auxiliary book.  Enter value to change and press <Return>.  Use <Escape> to
 exit.  A prompt will appear confirming your desire to save changes.  Press
 "Y" to use the changes that you made.

 The first time you add password options, CheX needs to be started with the
 "/P" option;  CHEX [##] /P.  Once a checkbook is password protected, the
 password may be entered as the LAST parameter on the command line;  CHEX
 [##] [/P] PASSWORD.  When you create a new checkbook, password options will
 be turned off.


  1. Primary password   - Primary password for your checkbook.  By entering
                          a password you must REMEMBER one of your
                          passwords.  Enter a blank in each of the four
                          fields to turn passwords off.
       Verification     - Reenter the above entry for verification.

     Backup password    - A second password in case you forget the first
                          one.  Both passwords should be entered each time
                          you make changes.  They both work the same.
       Verification     - Reenter the above entry for verification.

  2. Encrypt checkbook  - (Y or N)  By turning this option on, casual
                          browsing of your checkbook file is discouraged.
                          Since this option will only take affect for new
                          information stored, you will want to update every
                          item in your checkbook.  An easy way to do this is
                          to change the dollar amount of the first item in
                          your checkbook.  Then change it back to the
                          correct amount.  Be sure to perform the same
                          operation after turning this option off.

  WARNING:  Use the above options with caution.  You could lose valuable
  information by forgetting your password or by damaging an encrypted
  checkbook file.  Also note that the above routines are not very secure.


XI.   E R R O R S:

 To exit the program press <Escape> or <F10>.  In the event that power is
 lost or the system hangs prior to exiting, the checkbook could have serious
 errors.  Errors in the running balance will be flagged during the checkbook
 printing process, <F7>.  The running balance may be corrected by reentering
 a dollar amount above the running balance error, but it is up to you to
 determine which items have been lost.  See section "VI. PRINT and AUDIT"
 above.


XII.   P R O G R A M   I N F O R M A T I O N:

 CheX will run in 200K but runs better in 256K or more.  With more memory
 more items can be kept in memory.  This minimizes disk access but has no
 effect on the size of your checkbook.  A checkbook file may contain up to
 9,999 items.  CheX does not support memory above the DOS 640K barrier.


 CheX's FILES:

   README.      - Short description on how to get started.  May be deleted.
   CHEX.EXE     - Checkbook program.  Dated October 26, 1989; size 110795.
   CHEX.DOC     - This document.  Used as a help screen.  May be deleted.
   CHEX.FB      - CheX FEEDBACK registration form.  Please return.
   CHEX.AD1     - Your name and address for envelope print.  May be deleted.
   CHEX.PIF     - Used for running under MS Windows.  May be deleted.
   CHEX.UPT     - Updates or changes to the CheX program.  May be deleted.
   CHEX243.ZIP  - Library file containing all of the above.  May be deleted.

   CHEXBK##     - Checkbook.  Created by CheX.  ## = book number 01 thru 99.
   CHEXPR##     - Created by CheX on print to disk.  May be deleted.    F7-D
   CHEXPR##.PRN - Export file for transferring to Lotus or DB III.      F7-E
   CHEXPR##.OLD - Old copy of CHEXPR##.  Temporary.  Save this if you get a
                  disk error while printing your checkbook to disk.
   CHEX.AD#     - Free form text/binary files for check printing. # = 2 or 3

 If you are using the CHEXBK## file with any other program, please note the
 following:  In versions 2.40 and up, the carriage return at the end of each
 record is replaced by the last two digits of the category field.  This will
 require that programs using the CHEXBK## file use a random access mode
 rather than a sequential access mode.  Please contact me if you need more
 information.

 Please send $20.00 to keep CheX alive and growing.  As an option you may
 use the CheX FEEDBACK form.  This form can be printed by pressing <F7> and
 option "F".  Thank you in advance.

 Thanks to everyone who provided feedback and helped in the distribution of
 CheX.  Special thanks to Rick Mendosa.


                         ----------------------------
                         |  Rich Young              |
                         |  6060 Ashley Place       |
                         |  Goleta, CA  93117-1773  |
                         ----------------------------


 (end of CHEX.DOC document)  
```
{% endraw %}

## FILE2015.TXT

{% raw %}
```
Disk No: 2015                                                           
Disk Title: CHEX                                                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: CheX                                                     
Author Version: 2.43                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
CHEX is a bookkeeping program for balancing checks, credit cards, and   
savings accounts.  The program looks and feels just like the recording  
section in your own checkbook.  For each item or check you write, you   
may enter the date, check number, whether it is a debit or credit, who  
the item is written out to, a short note, and a category code.  As the  
amount for each check is entered, the program will keep a running total 
of your bank statement.                                                 
                                                                        
CHEX is easy to use because all information is entered and displayed in 
a list divided into columns on the screen.  At any time you may sort the
checkbook by date, allowing you to enter checks in any order you please.
The program can balance the checkbook at the press of a button.  CHEX   
can print an individual check, the entire checkbook, or a financial     
graph and total for the last 60 months.  CHEX will allow you to         
customize the standard print format for your own checks.  Continuous    
forms are not required.  You may also export the checkbook information  
into LOTUS 1-2-3.  CHEX has on-line, context-sensitive help, password   
and encryption protection, and an automatic saving feature which        
activates after a specified period of time with no input from the       
keyboard.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2015

     Volume in drive A has no label
     Directory of A:\

    CHEX243  ZIP     87486   5-31-90   6:56p
    README             760  10-26-89   2:43a
    CHEX     AD1        81  10-26-89   2:43a
    CHEX     EXE    110795  10-26-89   2:43a
    CHEX     DOC     31004  10-26-89   2:43a
    CHEX     PIF       369  10-26-89   2:43a
    CHEX     UPT      2584  10-26-89   2:43a
    CHEX     FB       2415  10-26-89   2:43a
    FILE2015 TXT      2591   7-13-90  11:36p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   1-01-80   8:21a
           11 file(s)     238698 bytes
                           76800 bytes free
