---
layout: page
title: "PC-SIG Diskette Library (Disk #2380)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2380/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2380"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SWAP SHOP & CASHFLOW"

    CASHFLOW is an integrated, menu-driven, practical budgeting tool that
    can simplify home record-keeping by calculating checks and balancing
    the checkbook.
    
    You can hold back checks that you've written until Payday gets here.
    CASHFLOW won't write checks for you but will track and calculate the
    ones that you write.  It will tell you what your bills are averaging
    and what percentage of your money goes for insurance, transportation,
    entertainment, etc.
    
    SWAP SHOP is a collection of various programs used for swapping printer
    and communication port addresses electronically.  No more resetting
    mechanical switches.  Documentation and Assembly source code are
    included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
page 1 of 5         GENERAL INTRODUCTION TO CASHFLOW
 
CASHFLOW is a practical budgeting-checkbook tool for the average PC user.
It is a human engineered application program which simplifies family
record keeping by computerizing the recording of checks and the balancing of
the checkbook; and rewards the user after very little data input with knowledge
of current cash available, and a realistic forecast of future cash positions.
 CASHFLOW is a flexible, functional, integrated checkbook program that 
 Helps you to get through the month without bouncing a check.
 Allows you to hold back some checks that you have written until pay day.
 Allows you to include some bills (or deposits) that you haven't yet paid
(or made) into your current cash position. 
Tells you what your bills are averaging and what percentage of your cash 
goes for insurance, transportation, entertainment, etc. 
Tells you how much you could live on as a minimum if you had to.
CASHFLOW is very easy to use

 
 
 
 
 
      

page 2 of 5      OPERATING INSTRUCTIONS

CASHFLOW is menu driven. Make a selection from the screen menu,
and type, or type and enter it, with the carriage return key as prompted.
You may retreat from all selected modules by pressing the carriage return. 
When you are asked a yes or no question, the carriage return key
will serve for no, and yes should be indicated by a ' Y ' or ' y '. 
If you page through the menus by repeatedly pressing the carriage
return you will eventually be asked if you want to leave the program. A ' Y '
or ' y ' answer will end the session, saving all new data. Both the budget
setup and checkbook utility menus offer a leave without saving option. 
This program was written for the IBM PC. (or compatible) The date
should be set before starting the program. Files used by CASHFLOW are 
CASHFLOW.EXE    199?BUD.DAT    199?CKBK.DAT    199?PAY.DAT    199?CSF.DAT 
CASHFLOW.EXE will create empty *.DAT data files if they are not present.
Empty data files require 11997 bytes of disk space, and will expand to
approximately 60000 bytes after one years use. To avoid a re-setup of
your budget records you may rename 1990BUD.DAT to 1991BUD.DAT in 1991.

  



page 3 of 5      BRIEF DESCRIPTION
 
For ease of handling on screen, budgets are divided into 4 parts 
1. Obligatory, mandatory bills - rent, utilities, & installment payments etc.
2. Miscellaneous, random bills - car maintenance, entertainment & taxes etc.
3. Groceries, an entry for each week of the month is provided.
4. Input, deposits on a weekly basis are also provided. 
There are two main menus, one for budgeting, and one for recording
checks. Both menus access the same budget data but amounts for which checks or
a check has been written are marked with an *. If you haven't received your
gas bill but want to include it in your current cash position summation then
you would use the budget menu to enter a guess at the amount and correct it
later before you record the check from the checkbook menu. If a payment is to
be different from average, or zero, enter in budget to correct prediction. 
CASHFLOW displays your current 'cash ' position in several ways
A checkbook balance, and that balance as adjusted by budget entries.
A monthly net so far, and the last reconciled bank statement amount.
A prediction of your cash position at the end of the month.
The cashflow chart shows your current checkbook & budget balance as adjusted  
by checks written but not yet sent.





page 4 of 5      BRIEF DESCRIPTION, CONTINUED 

Each of the main menus offers a special utility menu. 
The BUDGET utility menu provides routines for customizing the program to
your own check or budget categories and for setting or adjusting the current
averages for those categories. It also provides access to a printout menu,
a budget analysis screen, a routine which allows payment amounts to be 
fixed or unfixed for convenience, and an end of year forecast routine. 
The CHECKBOOK utility menu provides routines to view checks by various
categories, and a module for editing any check already recorded. It also
provides a quick summary of tax deductible checks by code and total. 
A unique monthly cashflow chart is accessible from both menus. This
chart displays up to 15 preselected bills and their due dates. The chart
automatically shows if a check has been written, and notes it to be either
not sent or late until you indicate that it is sent. Beneath the chart the
program lists the checkbook balance and budget adjusted balance, each
corrected by the total amount of checks written but not yet sent. 
The screens viewed are always set for a specific month which may be
changed at any time. CASHFLOW remembers which month was looked at last.





page 5 of 5              GETTING STARTED    
 
Browse through the various menus to get a feel for what is
there. Remember you can always get back to the main menu by pressing the
carriage return. The following start-up routine is suggested 
1. Selection 8 of the budget utility menu is a hardcopy print out menu.
Make copies of the reports and study in particular the monthly status.
Use this report to make a list of the record titles you want to setup. A
record may be the title of a single repeating bill or a general category. 
2. Input your customized record titles using selection 3 of the budget
utility menu. Fill in the codes as prompted. Then set your best guess of
the averages for these records one at a time using selection 5. 
3. If you are starting in the middle of the year, use last months checkbook
balance as the carryover from last year (this can be entered at the first
prompt anytime the program starts up). Also enter your outstanding checks in
that month. All check data including the amount may be edited after input. 
4. Select and enter the records (and due dates) you want on the cashflow
chart. (During set up don't confuse item number with record number.)
The chart allows five days for postage.
    


page 6 of 6;
 
 
To obtain a registered copy of the CASHFLOW program please send $16.95 to:
GABE Software 
1350 Camino Manadero
Santa Barbara, CA 93111
```
{% endraw %}

## DEACT.DOC

{% raw %}
```
                               DEACT.DOC

                  Program to deactivate LPT or COM ports 
                    Copyright (C) 1987 by Dale Botkin

DEACT is a user-supported program.  It is NOT public-domain, nor is it free.  
If you use DEACT, please send the required $3.00 donation to the address 
below.  

To use DEACT.COM, simply type in DEACT/p/x, substituting the port type (C or 
L) and number (1-4) for p and x.  The port type (C or L) may be upper or 
lower case.  For example,

To deactivate COM1:: DEACT/C/1
To deactivate LPT3:: DEACT/L/3

After DEACT is run, the port will be deactivated as though the hardware were 
not installed.  This will remain in effect until the system is re-booted.

Please direct comments, suggestions, or $3.00 fees to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137

```
{% endraw %}

## FILE2380.TXT

{% raw %}
```
Disk No: 2380                                                           
Disk Title: Swap Shop & Cashflow                                        
PC-SIG Version: S2                                                      
                                                                        
Program Title: Cashflow                                                 
Author Version: 6.6                                                     
Author Registration: $16.95                                             
Special Requirements: None.                                             
                                                                        
CASHFLOW is an integrated, menu-driven, practical budgeting tool that   
can simplify home record-keeping by calculating checks and balancing    
the checkbook.                                                          
                                                                        
You can hold back checks that you've written until Payday gets here.    
CASHFLOW won't write checks for you but will track and calculate the    
ones that you write.  It will tell you what your bills are averaging    
and what percentage of your money goes for insurance, transportation,   
entertainment, etc.                                                     
Program Title: Swap Shop                                                
Author Version: 6.3/2                                                   
Author Registration: $3.00 to $5.00.                                    
Special Requirements: None.                                             
                                                                        
SWAP SHOP is a collection of various programs used for swapping printer 
and communication port addresses electronically.  No more resetting     
mechanical switches.  Documentation and Assembly source code are        
included.                                                               
                                                                        
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
║         <<<<  PC-SIG Disk #2380  SWAP SHOP and CASHFLOW  >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║  SWAP SHOP =                                                            ║
║     From Drive A root directory, type:  CD CASHFLOW (Enter)             ║
║                                         DIR         (Enter)             ║
║                                                                         ║
║     For instructions on SWAP SHOP, type:  TYPE README.NOW (press Enter) ║
║                                                                         ║
║=========================================================================║
║  To return to the A: root directory, type:  CD \ (press Enter)          ║
║=========================================================================║
║                                                                         ║
║  CASHFLOW =                                                             ║
║     From Drive A root directory, type:  CD CASHFLOW (Enter)             ║
║                                         DIR         (Enter)             ║
║                                                                         ║
║     To print documentation, type:  COPY README.TXT PRN (press Enter)    ║
║                                                                         ║
║     To start the program, type:  CASHFLOW (press Enter)                 ║
║                                                                         ║
║     To print a copy of the CASHFLOW Checkbook, type:  PRNTCKBK (Enter)  ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
page 1 of 5         GENERAL INTRODUCTION TO CASHFLOW
 
CASHFLOW is a practical budgeting-checkbook tool for the average PC user.
It is a human engineered application program which simplifies family
record keeping by computerizing the recording of checks and the balancing of
the checkbook; and rewards the user after very little data input with knowledge
of current cash available, and a realistic forecast of future cash positions.
 CASHFLOW is a flexible, functional, integrated checkbook program that 
 Helps you to get through the month without bouncing a check.
 Allows you to hold back some checks that you have written until pay day.
 Allows you to include some bills (or deposits) that you haven't yet paid
(or made) into your current cash position. 
Tells you what your bills are averaging and what percentage of your cash 
goes for insurance, transportation, entertainment, etc. 
Tells you how much you could live on as a minimum if you had to.
CASHFLOW is very easy to use

 
 
 
 
 
      

page 2 of 5      OPERATING INSTRUCTIONS

CASHFLOW is menu driven. Make a selection from the screen menu,
and type, or type and enter it, with the carriage return key as prompted.
You may retreat from all selected modules by pressing the carriage return. 
When you are asked a yes or no question, the carriage return key
will serve for no, and yes should be indicated by a ' Y ' or ' y '. 
If you page through the menus by repeatedly pressing the carriage
return you will eventually be asked if you want to leave the program. A ' Y '
or ' y ' answer will end the session, saving all new data. Both the budget
setup and checkbook utility menus offer a leave without saving option. 
This program was written for the IBM PC. (or compatible) The date
should be set before starting the program. Files used by CASHFLOW are 
CASHFLOW.EXE    199?BUD.DAT    199?CKBK.DAT    199?PAY.DAT    199?CSF.DAT 
CASHFLOW.EXE will create empty *.DAT data files if they are not present.
Empty data files require 11997 bytes of disk space, and will expand to
approximately 60000 bytes after one years use. To avoid a re-setup of
your budget records you may rename 1990BUD.DAT to 1991BUD.DAT in 1991.

  



page 3 of 5      BRIEF DESCRIPTION
 
For ease of handling on screen, budgets are divided into 4 parts 
1. Obligatory, mandatory bills - rent, utilities, & installment payments etc.
2. Miscellaneous, random bills - car maintenance, entertainment & taxes etc.
3. Groceries, an entry for each week of the month is provided.
4. Input, deposits on a weekly basis are also provided. 
There are two main menus, one for budgeting, and one for recording
checks. Both menus access the same budget data but amounts for which checks or
a check has been written are marked with an *. If you haven't received your
gas bill but want to include it in your current cash position summation then
you would use the budget menu to enter a guess at the amount and correct it
later before you record the check from the checkbook menu. If a payment is to
be different from average, or zero, enter in budget to correct prediction. 
CASHFLOW displays your current 'cash ' position in several ways
A checkbook balance, and that balance as adjusted by budget entries.
A monthly net so far, and the last reconciled bank statement amount.
A prediction of your cash position at the end of the month.
The cashflow chart shows your current checkbook & budget balance as adjusted  
by checks written but not yet sent.





page 4 of 5      BRIEF DESCRIPTION, CONTINUED 

Each of the main menus offers a special utility menu. 
The BUDGET utility menu provides routines for customizing the program to
your own check or budget categories and for setting or adjusting the current
averages for those categories. It also provides access to a printout menu,
a budget analysis screen, a routine which allows payment amounts to be 
fixed or unfixed for convenience, and an end of year forecast routine. 
The CHECKBOOK utility menu provides routines to view checks by various
categories, and a module for editing any check already recorded. It also
provides a quick summary of tax deductible checks by code and total. 
A unique monthly cashflow chart is accessible from both menus. This
chart displays up to 15 preselected bills and their due dates. The chart
automatically shows if a check has been written, and notes it to be either
not sent or late until you indicate that it is sent. Beneath the chart the
program lists the checkbook balance and budget adjusted balance, each
corrected by the total amount of checks written but not yet sent. 
The screens viewed are always set for a specific month which may be
changed at any time. CASHFLOW remembers which month was looked at last.





page 5 of 5              GETTING STARTED    
 
Browse through the various menus to get a feel for what is
there. Remember you can always get back to the main menu by pressing the
carriage return. The following start-up routine is suggested 
1. Selection 8 of the budget utility menu is a hardcopy print out menu.
Make copies of the reports and study in particular the monthly status.
Use this report to make a list of the record titles you want to setup. A
record may be the title of a single repeating bill or a general category. 
2. Input your customized record titles using selection 3 of the budget
utility menu. Fill in the codes as prompted. Then set your best guess of
the averages for these records one at a time using selection 5. 
3. If you are starting in the middle of the year, use last months checkbook
balance as the carryover from last year (this can be entered at the first
prompt anytime the program starts up). Also enter your outstanding checks in
that month. All check data including the amount may be edited after input. 
4. Select and enter the records (and due dates) you want on the cashflow
chart. (During set up don't confuse item number with record number.)
The chart allows five days for postage.
    


page 6 of 6;
 
 
To obtain a registered copy of the CASHFLOW program please send $16.95 to:
GABE Software 
1350 Camino Manadero
Santa Barbara, CA 93111
```
{% endraw %}

## SWAP.DOC

{% raw %}
```
                                SWAP.DOC

                Program to swap LPT and COM ports 1 thru 4
                    Copyright (C) 1987 by Dale Botkin

SWAP is a user-supported program.  It is NOT public-domain, nor is it free.  
If you use SWAP, please send the required $3.00 donation to the address 
below.  

To use SWAP.COM, simply type in SWAP/p/xx, substituting the port type (C or 
L) and number (1-4) for p and xx.  The port type (C or L) may be upper or 
lower case.  For example,

To swap COM ports 1 & 2: SWAP/C/12
To swap LPT ports 2 & 4: SWAP/L/24

After SWAP is run, the port reassignment will remain in effect until the 
system is re-booted, or until SWAP is run again.

Please direct comments, suggestions, or $3.00 fees to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137

```
{% endraw %}

## SWAPCOM.ASM

{% raw %}
```
;*************************************************************************
;*               SWAPCOM.ASM                                             *
;*               Program to swap the assignments of  COM ports.          *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swapcom.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp begin
        notice  db "SWAPCOM Copyright (C) 1987 Dale Botkin",0dh,0ah
                db 0dh,0ah,'$'
;
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
getparm:
        mov ah,cs:80h           ;point to command line parameter
        add ah,0                ;is there a parameter?
        jz noparm
parse:
        mov ah,cs:82h           ;get first parameter and test for
        cmp ah,'1'              ;1 or 2
        jz f1
        cmp ah,'2'
        jz f2
        jmp short noparm
getparm2:
        mov ah,cs:83h           ;get second parameter and test for
        cmp ah,'2'              ;2 or 3
        jz s2
        cmp ah,'3'
        jz s3
        jmp short noparm
f1:                                    ;
        mov bx,0                       ;
        jmp short getparm2             ;     These will set the values
f2:                                    ;
        mov bx,2                       ;     for the first and second
        jmp short getparm2             ;
s2:                                    ;     ports to be swapped.
        mov cx,2                       ;
        jmp short swap                 ;
s3:                                    ;
        mov cx,4                       ;
        jmp short swap                 ;
noparm:
        lea dx,error                   ;
        mov ah,9                       ;  Prints error message and
        int 21h                        ;  terminates.
        int 20h                        ;
swap:
        mov ax,40h                     ;point to the address of the first
        mov es,ax                      ;com port at 0000:40
        mov dx,es:[bx]                 ;put old first port add. in dx
        push bx                        ;save bx regs.
        mov bx,cx                      ;get second port address
        mov ax,es:[bx]                 ;put old second port add. in ax
        mov es:[bx],dx                 ;swap  the addresses
        pop bx                         ;here we restore bx for the other port
        mov es:[bx],ax
        mov ah,9                       ;display string function
        mov dx,offset message          ;point to message
        int 21h                        ;display it
        int 20h                        ;return control to DOS
;
;
;*  MESSAGES *
;
        message db "COM ports specified have been swapped.",0dh,0ah,"$"
        error   db 'You have specified no parameters, or the parameters',0dh,0ah
                db 'you specified are not correct.  Please consult the',0dh,0ah
                db 'SWAPCOM documentation (SWAPCOM.DOC).',0ah,0ah,'$'
;
cseg ends
end start

```
{% endraw %}

## SWAPCOM.DOC

{% raw %}
```
                               SWAPCOM.DOC

                  Program to swap COM ports 1, 2, and 3

                    Copyright (C) 1987 by Dale Botkin

To use SWAPCOM.COM, simply type in SWAPCOM/xx, substituting 1, 2, or 3
for xx in the following manner:

To swap ports 1 & 2: SWAPCOM/12
To swap ports 2 & 3: SWAPCOM/23
To swap ports 1 & 3: SWAPCOM/13

After SWAPCOM is run, the port reassignment will remain until re-boot
or until SWAPCOM is run again.

Please direct comments, suggestions, or $5.00 donations to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137



```
{% endraw %}

## SWAPLPT.ASM

{% raw %}
```
;*************************************************************************
;*               SWAPLPT.ASM                                             *
;*               Program to swap the assignments of  LPT ports.          *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swaplpt.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp begin
;
        notice  db "SWAPLPT Copyright (C) 1987 Dale Botkin",0dh,0ah
                db 0dh,0ah,'$'
;
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
getparm:
        mov ah,cs:80h           ;point to command line parameter
        add ah,0                ;is there a parameter?
        jz noparm
parse:
        mov ah,cs:82h           ;get first parameter and test for
        cmp ah,'1'              ;1 or 2
        jz f1
        cmp ah,'2'
        jz f2
        jmp short noparm
getparm2:
        mov ah,cs:83h           ;get second parameter and test for
        cmp ah,'2'              ;2 or 3
        jz s2
        cmp ah,'3'
        jz s3
        jmp short noparm
f1:                                    ;
        mov first,0                    ;
        jmp short getparm2             ;     These will set the values
f2:                                    ;
        mov first,2                    ;     for the first and second
        jmp short getparm2             ;
s2:                                    ;     ports to be swapped.
        mov next,2                     ;
        jmp short swap                 ;
s3:                                    ;
        mov next,4                     ;
        jmp short swap                 ;
noparm:
        lea dx,error                   ;
        mov ah,9                       ;  Prints error message and
        int 21h                        ;  terminates.
        int 20h                        ;
swap:
        mov ax,48h                     ;point to the address of the first
        mov es,ax                      ;printer port at 0000:48
        mov bx,first                   ;
        mov dx,es:[bx]                 ;put old first port add. in dx
        mov ax,es:next                 ;put old second port add. in ax
        mov es:[bx],ax                 ;swap  the addresses
        mov es:next,dx
        mov ah,9                       ;display string function
        mov dx,offset message          ;point to message
        int 21h                        ;display it
        int 20h                        ;return control to DOS
;
;*  MESSAGES *
;
        message db "LPT ports specified have been swapped.",0dh,0ah,"$"
        error   db 'You have specified no parameters, or the parameters',0dh,0ah
                db 'you specified are not correct.  Please consult the',0dh,0ah
                db 'SWAPLPT documentation (SWAPLPT.DOC).',0ah,0ah,'$'
 ;
cseg ends
end start



```
{% endraw %}

## SWAPLPT.DOC

{% raw %}
```
                               SWAPLPT.DOC

                  Program to swap LPT ports 1, 2, and 3

                    Copyright (C) 1987 by Dale Botkin

To use SWAPLPT.COM, simply type in SWAPLPT/xx, substituting 1, 2, or 3
for xx in the following manner:

To swap ports 1 & 2: SWAPLPT/12
To swap ports 2 & 3: SWAPLPT/23
To swap ports 1 & 3: SWAPLPT/13

After SWAPLPT is run, the port reassignment will remain until re-boot
or until SWAPLPT is run again.

Please direct comments, suggestions, or $5.00 donations to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137



```
{% endraw %}

## DEACT.DOC

{% raw %}
```
                               DEACT.DOC

                  Program to deactivate LPT or COM ports 
                    Copyright (C) 1987 by Dale Botkin

DEACT is a user-supported program.  It is NOT public-domain, nor is it free.  
If you use DEACT, please send the required $3.00 donation to the address 
below.  

To use DEACT.COM, simply type in DEACT/p/x, substituting the port type (C or 
L) and number (1-4) for p and x.  The port type (C or L) may be upper or 
lower case.  For example,

To deactivate COM1:: DEACT/C/1
To deactivate LPT3:: DEACT/L/3

After DEACT is run, the port will be deactivated as though the hardware were 
not installed.  This will remain in effect until the system is re-booted.

Please direct comments, suggestions, or $3.00 fees to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137

```
{% endraw %}

## SWAP.DOC

{% raw %}
```
                                SWAP.DOC

                Program to swap LPT and COM ports 1 thru 4
                    Copyright (C) 1987 by Dale Botkin

SWAP is a user-supported program.  It is NOT public-domain, nor is it free.  
If you use SWAP, please send the required $3.00 donation to the address 
below.  

To use SWAP.COM, simply type in SWAP/p/xx, substituting the port type (C or 
L) and number (1-4) for p and xx.  The port type (C or L) may be upper or 
lower case.  For example,

To swap COM ports 1 & 2: SWAP/C/12
To swap LPT ports 2 & 4: SWAP/L/24

After SWAP is run, the port reassignment will remain in effect until the 
system is re-booted, or until SWAP is run again.

Please direct comments, suggestions, or $3.00 fees to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137

```
{% endraw %}

## SWAPCOM.ASM

{% raw %}
```
;*************************************************************************
;*               SWAPCOM.ASM                                             *
;*               Program to swap the assignments of  COM ports.          *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swapcom.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp begin
        notice  db "SWAPCOM Copyright (C) 1987 Dale Botkin",0dh,0ah
                db 0dh,0ah,'$'
;
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
getparm:
        mov ah,cs:80h           ;point to command line parameter
        add ah,0                ;is there a parameter?
        jz noparm
parse:
        mov ah,cs:82h           ;get first parameter and test for
        cmp ah,'1'              ;1 or 2
        jz f1
        cmp ah,'2'
        jz f2
        jmp short noparm
getparm2:
        mov ah,cs:83h           ;get second parameter and test for
        cmp ah,'2'              ;2 or 3
        jz s2
        cmp ah,'3'
        jz s3
        jmp short noparm
f1:                                    ;
        mov bx,0                       ;
        jmp short getparm2             ;     These will set the values
f2:                                    ;
        mov bx,2                       ;     for the first and second
        jmp short getparm2             ;
s2:                                    ;     ports to be swapped.
        mov cx,2                       ;
        jmp short swap                 ;
s3:                                    ;
        mov cx,4                       ;
        jmp short swap                 ;
noparm:
        lea dx,error                   ;
        mov ah,9                       ;  Prints error message and
        int 21h                        ;  terminates.
        int 20h                        ;
swap:
        mov ax,40h                     ;point to the address of the first
        mov es,ax                      ;com port at 0000:40
        mov dx,es:[bx]                 ;put old first port add. in dx
        push bx                        ;save bx regs.
        mov bx,cx                      ;get second port address
        mov ax,es:[bx]                 ;put old second port add. in ax
        mov es:[bx],dx                 ;swap  the addresses
        pop bx                         ;here we restore bx for the other port
        mov es:[bx],ax
        mov ah,9                       ;display string function
        mov dx,offset message          ;point to message
        int 21h                        ;display it
        int 20h                        ;return control to DOS
;
;
;*  MESSAGES *
;
        message db "COM ports specified have been swapped.",0dh,0ah,"$"
        error   db 'You have specified no parameters, or the parameters',0dh,0ah
                db 'you specified are not correct.  Please consult the',0dh,0ah
                db 'SWAPCOM documentation (SWAPCOM.DOC).',0ah,0ah,'$'
;
cseg ends
end start

```
{% endraw %}

## SWAPCOM.DOC

{% raw %}
```
                               SWAPCOM.DOC

                  Program to swap COM ports 1, 2, and 3

                    Copyright (C) 1987 by Dale Botkin

To use SWAPCOM.COM, simply type in SWAPCOM/xx, substituting 1, 2, or 3
for xx in the following manner:

To swap ports 1 & 2: SWAPCOM/12
To swap ports 2 & 3: SWAPCOM/23
To swap ports 1 & 3: SWAPCOM/13

After SWAPCOM is run, the port reassignment will remain until re-boot
or until SWAPCOM is run again.

Please direct comments, suggestions, or $5.00 donations to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137



```
{% endraw %}

## SWAPLPT.ASM

{% raw %}
```
;*************************************************************************
;*               SWAPLPT.ASM                                             *
;*               Program to swap the assignments of  LPT ports.          *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swaplpt.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp begin
;
        notice  db "SWAPLPT Copyright (C) 1987 Dale Botkin",0dh,0ah
                db 0dh,0ah,'$'
;
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
getparm:
        mov ah,cs:80h           ;point to command line parameter
        add ah,0                ;is there a parameter?
        jz noparm
parse:
        mov ah,cs:82h           ;get first parameter and test for
        cmp ah,'1'              ;1 or 2
        jz f1
        cmp ah,'2'
        jz f2
        jmp short noparm
getparm2:
        mov ah,cs:83h           ;get second parameter and test for
        cmp ah,'2'              ;2 or 3
        jz s2
        cmp ah,'3'
        jz s3
        jmp short noparm
f1:                                    ;
        mov first,0                    ;
        jmp short getparm2             ;     These will set the values
f2:                                    ;
        mov first,2                    ;     for the first and second
        jmp short getparm2             ;
s2:                                    ;     ports to be swapped.
        mov next,2                     ;
        jmp short swap                 ;
s3:                                    ;
        mov next,4                     ;
        jmp short swap                 ;
noparm:
        lea dx,error                   ;
        mov ah,9                       ;  Prints error message and
        int 21h                        ;  terminates.
        int 20h                        ;
swap:
        mov ax,48h                     ;point to the address of the first
        mov es,ax                      ;printer port at 0000:48
        mov bx,first                   ;
        mov dx,es:[bx]                 ;put old first port add. in dx
        mov ax,es:next                 ;put old second port add. in ax
        mov es:[bx],ax                 ;swap  the addresses
        mov es:next,dx
        mov ah,9                       ;display string function
        mov dx,offset message          ;point to message
        int 21h                        ;display it
        int 20h                        ;return control to DOS
;
;*  MESSAGES *
;
        message db "LPT ports specified have been swapped.",0dh,0ah,"$"
        error   db 'You have specified no parameters, or the parameters',0dh,0ah
                db 'you specified are not correct.  Please consult the',0dh,0ah
                db 'SWAPLPT documentation (SWAPLPT.DOC).',0ah,0ah,'$'
 ;
cseg ends
end start



```
{% endraw %}

## SWAPLPT.DOC

{% raw %}
```
                               SWAPLPT.DOC

                  Program to swap LPT ports 1, 2, and 3

                    Copyright (C) 1987 by Dale Botkin

To use SWAPLPT.COM, simply type in SWAPLPT/xx, substituting 1, 2, or 3
for xx in the following manner:

To swap ports 1 & 2: SWAPLPT/12
To swap ports 2 & 3: SWAPLPT/23
To swap ports 1 & 3: SWAPLPT/13

After SWAPLPT is run, the port reassignment will remain until re-boot
or until SWAPLPT is run again.

Please direct comments, suggestions, or $5.00 donations to:

                Dale Botkin
                P.O. Box 37718
                Omaha, NE 68137



```
{% endraw %}

## SWCOM12.ASM

{% raw %}
```
;*************************************************************************
;*               SWCOM12.ASM                                             *
;*               Program to swap the assignments of COM1: and COM2:      *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swcom12.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp short begin
	notice db "SWCOM12 Copyright (C) 1987 Dale Botkin",0dh,0ah,"$"
        message db "COM1: and COM2: Swapped.",0dh,0ah,"$"
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
        mov ax,40h              ;point to the address of the first
        mov es,ax               ;serial port at 0000:40
        mov bx,0
        mov dx,es:[bx]          ;put old first port add. in dx
        mov ax,es:[bx]+2        ;put old second port add. in ax
        mov es:[bx],ax          ;swap the addresses
        mov es:[bx]+2,dx
        mov ah,9                ;display string function
        mov dx,offset message   ;point to message
        int 21h                 ;display it
        int 20h                 ;return control to DOS
cseg ends
end start



```
{% endraw %}

## SWLPT12.ASM

{% raw %}
```
;*************************************************************************
;*               SWLPT12.ASM                                             *
;*               Program to swap the assignments of  LPT1: and LPT2:     *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swlpt12.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp short begin
        notice db "SWLPT12 Copyright (C) 1987 Dale Botkin",0dh,0ah,"$"
        message db "LPT1: and LPT2: Swapped.",0dh,0ah,"$"
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
        mov ax,40h              ;point to the address of the first
        mov es,ax               ;printer port at 0000:48
        mov bx,8
        mov dx,es:[bx]          ;put old first port add. in dx
        mov ax,es:[bx]+2        ;put old second port add. in ax
        mov es:[bx],ax          ;swap the addresses
        mov es:[bx]+2,dx
        mov ah,9                ;display string function
        mov dx,offset message   ;point to message
        int 21h                 ;display it
        int 20h                 ;return control to DOS
cseg ends
end start



```
{% endraw %}

## SWXXX12.DOC

{% raw %}
```
                            INTRO.DOC

             Documentation for SWLPT12.* and SWCOM12.*

                         By Dale Botkin

SWLPT12.COM will, when run, swap the base addresses for LPT1: and 
LPT2:.  Any output sent by the system to one will be redirected to
the other.  To restore the ports to their original addresses, simply
run SWLPT12 again.

SWCOM12.COM performs the exact same operation, with the exact same 
result, on the serial ports COM1: and COM2:.

If you find these programs useful, please send a donation ($5.00 U.S.
each is recommended) to the author at:

                           P.O. Box 37718
                           Omaha, NE  68137

Thank you, and enjoy!


```
{% endraw %}

## SWCOM12.ASM

{% raw %}
```
;*************************************************************************
;*               SWCOM12.ASM                                             *
;*               Program to swap the assignments of COM1: and COM2:      *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swcom12.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp short begin
	notice db "SWCOM12 Copyright (C) 1987 Dale Botkin",0dh,0ah,"$"
        message db "COM1: and COM2: Swapped.",0dh,0ah,"$"
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
        mov ax,40h              ;point to the address of the first
        mov es,ax               ;serial port at 0000:40
        mov bx,0
        mov dx,es:[bx]          ;put old first port add. in dx
        mov ax,es:[bx]+2        ;put old second port add. in ax
        mov es:[bx],ax          ;swap the addresses
        mov es:[bx]+2,dx
        mov ah,9                ;display string function
        mov dx,offset message   ;point to message
        int 21h                 ;display it
        int 20h                 ;return control to DOS
cseg ends
end start



```
{% endraw %}

## SWLPT12.ASM

{% raw %}
```
;*************************************************************************
;*               SWLPT12.ASM                                             *
;*               Program to swap the assignments of  LPT1: and LPT2:     *
;*               COPYRIGHT (C) 1987 DALE BOTKIN                          *
;*               P.O. Box 37718                                          *
;*               Omaha, NE 68137                                         *
;*               Suggested contribution: $5.00 US                        *
;*************************************************************************
;
title swlpt12.asm
;
assume cs:cseg,ds:cseg,ss:cseg,es:cseg  
;
cseg    segment
;
org 0100h
;
start:
        jmp short begin
        notice db "SWLPT12 Copyright (C) 1987 Dale Botkin",0dh,0ah,"$"
        message db "LPT1: and LPT2: Swapped.",0dh,0ah,"$"
begin:
        mov ah,9                ;display string function
        lea dx,notice           ;point to copyright notice
        int 21h                 ;put it on screen
        mov ax,40h              ;point to the address of the first
        mov es,ax               ;printer port at 0000:48
        mov bx,8
        mov dx,es:[bx]          ;put old first port add. in dx
        mov ax,es:[bx]+2        ;put old second port add. in ax
        mov es:[bx],ax          ;swap the addresses
        mov es:[bx]+2,dx
        mov ah,9                ;display string function
        mov dx,offset message   ;point to message
        int 21h                 ;display it
        int 20h                 ;return control to DOS
cseg ends
end start



```
{% endraw %}

## SWXXX12.DOC

{% raw %}
```
                            INTRO.DOC

             Documentation for SWLPT12.* and SWCOM12.*

                         By Dale Botkin

SWLPT12.COM will, when run, swap the base addresses for LPT1: and 
LPT2:.  Any output sent by the system to one will be redirected to
the other.  To restore the ports to their original addresses, simply
run SWLPT12 again.

SWCOM12.COM performs the exact same operation, with the exact same 
result, on the serial ports COM1: and COM2:.

If you find these programs useful, please send a donation ($5.00 U.S.
each is recommended) to the author at:

                           P.O. Box 37718
                           Omaha, NE  68137

Thank you, and enjoy!


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2380

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        40   1-01-80   6:00a
    FILE2380 TXT      2443  11-09-90   1:47p
    GO       TXT      2003  11-09-90   5:37a
    CASHFLOW     <DIR>    
    SWAPSHOP     <DIR>    
            5 file(s)       4486 bytes

     Directory of A:\CASHFLOW

    .            <DIR>    
    ..           <DIR>    
    CASHFLOW EXE    154348   8-03-90   2:18p
    PRNTCKBK EXE     44234   8-03-90   2:46p
    README   TXT      6246   8-04-90   5:16p
            5 file(s)     204828 bytes

     Directory of A:\SWAPSHOP

    .            <DIR>    
    ..           <DIR>    
    DEACT    COM       688   8-27-87  12:25p
    DEACT    DOC       886   8-27-87  12:33p
    README   NOW      1044   8-27-87  10:23a
    SWAP     COM       754   8-25-87   3:35p
    SWAP     DOC       864   8-27-87  12:33p
    SWAPCOM  ASM      3530   6-22-87  11:44a
    SWAPCOM  COM       343   6-22-87  11:45a
    SWAPCOM  DOC       639   6-22-87  11:50a
    SWAPLPT  ASM      3385   6-22-87  11:46a
    SWAPLPT  COM       347   6-22-87  10:49a
    SWAPLPT  DOC       639   6-22-87  11:51a
    SWCOM12  ASM      1636   8-27-87  10:32a
    SWCOM12  COM       109   6-19-87   4:12p
    SWLPT12  ASM      1644   8-27-87  10:33a
    SWLPT12  COM       109   6-19-87   4:11p
    SWXXX12  DOC       717   6-19-87  11:52a
           18 file(s)      17334 bytes

    Total files listed:
           28 file(s)     226648 bytes
                           81920 bytes free
