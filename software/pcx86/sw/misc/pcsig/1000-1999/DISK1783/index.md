---
layout: page
title: "PC-SIG Diskette Library (Disk #1783)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1783/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1783"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QEDIT ADVANCED"

    QEDIT is an extremely fast, easy-to-use, and fully-featured text editor
    for entering program code, letters, and small documents.    Just load
    and go.  And when loaded, QEDIT uses less than 56K of memory -- perfect
    for those who want to use QEDIT in conjunction with other software
    (e.g., dBase, FoxBase, Paradox) and do not have a lot of free memory to
    spare.
    
    A "pop-down" style menu system makes editing a snap.  There is a help
    screen which can be modified by the user, and the keyboard is completely
    reconfigurable.  The user can easily assign any QEDIT command to almost
    any key desired.  Also, the keyboard can be configured to look like
    WordStar, Brief or other popular editors.
    
    QEDIT is fully featured.  Although QEDIT is fast and easy to use, it
    doesn't skimp on features.  You still get all of the basic text editing
    features, plus many features found only on the more expensive editors.
    Edit dozens of files simultaneously, open up to eight windows, create
    macros with pause and keyboard recording, recover deleted text, and do
    line drawing.  Files to edit cannot be larger than available memory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ORDERFRM.DOC

{% raw %}
```
Remit to:  SemWare                                      Order Form  #9002-OF02
           4343 Shallowford Rd, Suite C-3
           Marietta, GA  30062-5003

               *** QEdit Advanced version 2.1, February 1990. ***
We offer discounts on quantity orders, multiple-user licenses, and dealer
pricing.  We also offer student discounts and discounts for bona fide BBS
sysops.  Please call for details. We take American Express, MasterCard, or
VISA.  You can use this handy order form to order by MAIL, or by:

VOICE: (404) 641-9002, Mon. - Fri., 9:00 a.m. - 5:00 p.m., ET ONLY.
FAX:   (404) 640-6213, 24 hrs, 7 days a week.
BBS:   (404) 641-8968, 24 hrs, 7 days a week. 1200/2400/9600(HST), <N81>.

SemWare, send me (check desired items):

____ QEdit Registration with Printed Manual...... @ $54.95 ea  $ ______
     (Includes latest version of the licensed software, handy
     reference card, low-cost upgrades, plus our professionally
     printed, spiral-bound, indexed reference manual.)

____ QEdit Registration ......................... @ $44.00 ea  $ ______
     (Includes latest version of the licensed software, with
     documentation on disk, plus low-cost upgrades)

Shipping
     With printed manual (US/Canada/Mexico: $3; Overseas: $10) $ ______
     Disk only (US/Canada/Mexico: $3; Overseas: $5)            $ ______

Purchase Orders under $100.00, add $6.00 Handling Charge       $ ______
     (NON-PREPAID ORDERS ONLY - THIS DOES NOT APPLY TO CASH,
     CHECK, MONEY ORDER, OR CHARGE CARD ORDERS)

                                                     Subtotal  $ ______

Georgia Residents please add Sales Tax ................  @ 4%  $ ______

                         Total (U.S. Funds drawn on U.S. Bank) $ ______
                                             
Payment by:( )CHECK(MAIL ONLY)  ( )AMEX  ( )MC  ( )VISA  ( )PO# ______________

  Name: _______________________________________________________________

  Company (ONLY if company address):___________________________________

  Address: ____________________________________________________________

         : ____________________________________________________________

         : ____________________________________________________________

  Voice Day Phone: ______________________ Evening: ____________________

  Card #: _________________________________ Exp. Date: ________________

  Signature of cardholder: ____________________________________________

Prices subject to change without notice.  Confirm current prices by calling
(404) 641-9002.  TSR and OS/2 VERSIONS NOW AVAILABLE!  Call for details.
```
{% endraw %}

## QHELP.TXT

{% raw %}
```
<Esc> for Menus - Selected QEdit Commands By Function - Press Any Key to Return
               # = <Shift>     @ = <Alt>     ^ = <Ctrl>
 ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐
 │  Cursor Movement   │      │      Toggles       │      │ Block/Scrap Buffer │
 └────────────────────┘      └────────────────────┘      └────────────────────┘
  GotoBlockBeg   ^QB          ToggleBoxDraw    #F1        MarkLine       @L
  GotoBlockEnd   ^QK          ToggleBoxType    @F1        MarkColumn     @K
  GotoLine       ^J           ToggleIndent     ^QI        MarkCharacter  @A
  PrevPosition   ^QP          ToggleSmartTabs  ^QT        Cut            grey -
  ScreenLeft     @F5          ToggleTabsExpand @V         Copy           grey +
  ScreenRight    QF6          ToggleTabsOut    @I         Paste          grey *
  ScrollUp       ^W           ToggleWordwrap   ^OW        PasteOver      ^PrtSc
  ScrollDown     ^Z           43/50 line mode  ^F1        UnmarkBlock    @U
 ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐
 │        File        │      │       Editing      │      │       Other        │
 └────────────────────┘      └────────────────────┘      └────────────────────┘
  ChangeFilename @O           AddLine          F2         CenterLine     ^OT
  EditFile       @E           DelLine          @D         Upper          @1
  Exit           ^KD          DelToEol         F6         Lower          @2
  GlobalExit     @X           DelRtWord        ^T         Flip           @3
  GlobalSave     @Y           DupLine          F4         Dos Shell      F9
  NextFile       @N           JoinLine         @J         Sort           #F3
  ReadBlock      @R           Literal          ^P         UndoCursorline ^QL
  WriteBlock     @W           SplitLine        @S         WrapPara       @B
  SaveFile       ^KD          UnKill           @U         RepeatCmd      ^QQ
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1783

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   3-23-90   1:17p
    GO       TXT       540   3-23-90   1:22p
    ORDERFRM DOC      2656   2-26-90   2:10a
    Q        EXE     47420   2-26-90   2:10a
    QCONFIG  DAT      7348   2-26-90   2:10a
    QCONFIG  EXE     21343   2-26-90   2:10a
    QEDIT    DOC    247172   2-26-90   2:10a
    QHELP    TXT      1953   2-26-90   2:10a
    READ     ME      28904   2-26-90   2:10a
            9 file(s)     357374 bytes
                               0 bytes free
