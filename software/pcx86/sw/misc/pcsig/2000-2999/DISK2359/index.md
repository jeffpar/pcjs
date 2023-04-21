---
layout: page
title: "PC-SIG Diskette Library (Disk #2359)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2359/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2359"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN DEBUT"

    SCREEN DEBUT is a program used to build and develop text screens
    in any of four languages. Ansi code for use with dos, Basic code
    with and without line numbers, C code for Turbo Pascal, and compressed
    binary format for use with Fast Screen.
    
    Fast Screen is included with SCREEN DEBUT and is used to view your
    screen. If you build screens in any of the formats mentioned, SCREEN
    DEBUT will make your task much easier. It is so fast to learn and use
    that you'll be producing screens instead of mulling over a thick
    manual. This manual is just an F1 key away. The program uses few
    commands, but the ones used are all you need; commands like cursor
    border, select color, box junctions, load screen, save screen, cut and
    paste, copy and paste, and recolor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BLOAD.BAS

{% raw %}
```bas
'--------------------------------------------------------------------------
'- BLOAD.BAS                                                              -
'-                          Willie Robinson                               -
'-                          2613 Louis Blvd                               -
'-                          Hephzibah Ga 30815                            -
'-                                                                        -
'-         Example: How to Load a BSAVE File with Quick Basic             -
'-                                                                        -
'-                                                                        -
'- UpDated 1 June 1990                                                  -
'-                                                                        -
'--------------------------------------------------------------------------

DEFINT A-Z

'-/Modify this Line by Entering Your Own Screens/-------------------------
BSaveScreenToBeRetrived$ = "YourFile.BAS" '--Change "YourScrn"

'-/Get Video Mode/--------------------------------------------------------
DEF SEG = &H40
IF PEEK(&H49) = 7 THEN            '--PEEK to See Type of Monitor(Mono = 7)
   DEF SEG = &HB000               '--MonoChrome Monitor(Memory Location)
 ELSE
   DEF SEG = &HB800               '--Color Monitor(Memory Location)
END IF

'-/Load the Screen into the Video Memory/---------------------------------
BLOAD BSaveScreenToBeRetrived$, &H0

END

```
{% endraw %}

## BLOAD.BAS

{% raw %}
```bas
'--------------------------------------------------------------------------
'- BLOAD.BAS                                                              -
'-                          Willie Robinson                               -
'-                          2613 Louis Blvd                               -
'-                          Hephzibah Ga 30815                            -
'-                                                                        -
'-         Example: How to Load a BSAVE File with Quick Basic             -
'-                                                                        -
'-                                                                        -
'- UpDated 1 June 1990                                                  -
'-                                                                        -
'--------------------------------------------------------------------------

DEFINT A-Z

'-/Modify this Line by Entering Your Own Screens/-------------------------
BSaveScreenToBeRetrived$ = "YourFile.BAS" '--Change "YourScrn"

'-/Get Video Mode/--------------------------------------------------------
DEF SEG = &H40
IF PEEK(&H49) = 7 THEN            '--PEEK to See Type of Monitor(Mono = 7)
   DEF SEG = &HB000               '--MonoChrome Monitor(Memory Location)
 ELSE
   DEF SEG = &HB800               '--Color Monitor(Memory Location)
END IF

'-/Load the Screen into the Video Memory/---------------------------------
BLOAD BSaveScreenToBeRetrived$, &H0

END

```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
                                 Screen Debut
                                 History.Doc
                                 Willie Robinson
                                 2613 Louis Blvd
                                 Hephzibah Ga  30815

Version               Changes/Updates

 1.0              Not Released

 1.1              Not Released

 1.2x             Several versions released

 1.3              ANSI Animator and BSAVE added. ANSI coding Algorithms
                  rewritten.

 1.31             Documentation Targeted for main upgrade emphasis.

                  1) Documentaion smoothed out. SD2GT.DOC added.

                  2) Animator indicator added to Status line.


 1.4              KeyBoard efficency & ANSI Algorithms targeted for
                  upgrade emphasis.

                  1) Mouse Support

                  2) The F2 function now supports Automatic Line Junctions.
                  [Shift] F2 toggles Move cursor, single line, and double
                  line mode without Automatic Line Junctions.

                  3) [Shift] F5 or [Alt] Z places character selected by the
                  F5 ASCII chart to the current cursor position.

                  4) The F6 "Box Junction" function has been made smart for
                  greater efficency. It will attempt to suggest the correct
                  junction by scanning the area around the cursor. It has
                  three levels of suggestion.

                   a) Level One - It finds a junction that will fit at
                   the current position.

                   b) Level Two - It can't find a junction that will fit,
                   however it is able to recommend a quadrant within the
                   window. It then places the pointer in the center of the
                   quadrant. With luck you'll be within one character of
                   the one you want.

                   c) Level Three - It cannot derive any action from it's
                   calculations. The Pointer will then maintain it's last
                   position.

                 5) All [Ctrl] Key Combinations are now available directly
                 from the Keyboard.
                 Example: To enter ^E just hold down the [Ctrl] key then
                 press "E".

                 6) ASCII numeric codes may now be directly enter by
                 holding down the [Alt] key and typing the number on the
                 numeric key pad. Once the [Alt] key is released the
                 ASCII character will be placed at the cursor.

                 7) The ANSI non-animated coding routines have been
                 rewritten. There are now two choices of Non-Animated
                 screen coding style.

                  a) Regular code uses more space but allows the screen
                  to scroll without breaking up.

                  b) Compact code minimizes the number of lines of code.
                  It will not scroll, but is very useful for uploading
                  complex pictures into a BBS message base.

                 The animated coding routine remains unchanged.

                 8) Snow suppression for older CGA chips. Use the
                 command line switch "/s". Slows the program down
                 considerably.

                 9) Yes / No windows optionally activated with
                 "Y" or "N".

                 10) When saving code a window challenges the user
                 on overwriting the *.SD file. The options are:

                     Yes - Overwrite *.SD file.
                     No  - Don't Overwrite *.SD file. The Code (if any)
                           built by Debut will be saved.
                     Esc - Abort the entire procedure. Nothing is
                           written to the disk.

                 11) The Screen Menu now holds the last position
                 selected.

                 12) The command line switches /BBSE, /BBSR, and /NC
                 are no longer supported. These commands are now
                 supported internally.

                 13) The F7 Load Screen now has a sister procedure
                 [Shift] F7 which allows any file to be loaded into
                 SD. For Ansi be sure the ANSI.SYS file is installed.

                 14) [ALT] L (Letter) invokes the Big Letter procedure.
                 The letters were designed on an 8 x 8 matrix. All ASCII
                 characters from 1 to 127 are available (The extended
                 ASCII character set is not available). The Letters are
                 comprised of the character choosen with the F5 ASCII
                 Chart and the current color attributes. KeyBoard Support
                 for the Big Letter function is provided in three ways.

                 1. Normal keys - Just press one.

                 2. Control Characters - Hold down the [Ctrl] key and
                 press the appropriate key.

                 3. Any Character - Hold down the [Alt] key and enter the
                 ASCII number into the key pad. Numbers larger than 127
                 are truncated.

                 Note: This procedure works well with the Tab Key for
                 spacing.

                 15) The animator has been reworked & expanded to 6000
                 accept up to 6000 frames.

                 16) History Document started.
```
{% endraw %}

## PREDATOR.DOC

{% raw %}
```

                          Screen <Debut> Predator Ver 1.1
                          Copyright 1990 Willie Robinson
                          2613 Louis Blvd
                          Hephzibah Ga 30815

 Screen Predator is a TSR (Terminate & Stay Resident) program. As such
it waits, lurking in your computer memory, for your command to capture a
screen.It captures any text screen and saves it in a compressed binary
format, which is readable by Screen Debut! Used in conjunction with
Screen Debut, they are very powerful!

 Screen Predator is not a shareware program. It is supplied to registered
users of Screen Debut as a courtesy and is limited to their use ONLY!
Screen Predator is a copyrighted program and may not be changed,
disassembled, sold, or given to anyone without the written consent of the
author. All Rights Reserved.

DIRECTIONS FOR USE:
1) LOADING :  Screen Predator is loaded into the computer in the normal
way. At the DOS "A" prompt type PREDATOR ( A>PREDATOR ). You may now load
your normal program. Screen Predator will wait in the background until
activated.

2) ACTIVATION:  To activate the program simply press the Hot Key
combination ([Ctrl] PrtSc/*). It will then capture the current screen
(text screens only). Once the screen is captured and compressed, a Window
will appear (This happens almost instantaneously). This window, like the
"Verify Name" window in Screen Debut, requires that you name the screen.
The Editing commands used with this window are  A-Z, 0-9, Backspace,
Enter, and Esc.  The editing command's are few, this is to keep the
program as small as possible. On depression of the Enter key, the screen
will be saved. The status bar at the bottom of the page indicates the
home directory where the screen will go. The home directory is always
the directory where Screen Predator was loaded. As with Screen Debut,
the screen assumes the *.SD extension. To Abort the operation just hit
the Esc key.
Caution: The directory where Screen Predator is loaded from must be remain
in place while Screen Predator is in use!

3) REMOVING SCREEN PREDATOR: Simply type PREDATOR/U (/U for Unload) at the
DOS "A" Prompt.

4) PRECAUTIONS: TSR's are tricky. Screen Predator may not get along well
with a foreground program. Not because of the way it's written, but because
it's a TSR. This could cause a system crash. Be aware of the possibility.
It should be load before the foreground program, and unloaded after it.

DISCLAIMER: It is totally up to the user to judge the fitness of this program.
The use of this program is at your own risk!

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                         Printable Registration Form


NAME:__________________________________________________

ADDRESS:_______________________________________________

CITY/STATE/ZIP:________________________________________

PHONE # (Optional)_____________________________________

DISK SIZE       3.5__________  5.25___________


 $10.00 ea  (Outside US add $10.00 Handling plus postage)

                                                        Total:_________



Version You Currently are using:_______________________________________

Comments/Suggestions:__________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

```
{% endraw %}

## FILE2359.TXT

{% raw %}
```
Disk No: 2359                                                           
Disk Title: Screen Debut                                                
PC-SIG Version: S1.41                                                   
                                                                        
Program Title: Screen Debut                                             
Author Version: 1.41                                                    
Author Registration: $10.00                                             
Special Requirements: CGA recommended.                                  
                                                                        
SCREEN DEBUT is a program used to build and develop text screens        
in any of four languages. Ansi code for use with dos, Basic code        
with and without line numbers, C code for Turbo Pascal, and compressed  
binary format for use with Fast Screen. Fast Screen is included with    
SCREEN DEBUT and is used to view your screen. If you build screens in   
any of the formats mentioned, SCREEN DEBUT will make your task so much  
easier. It is so fast to learn and use that you'll be producing         
screens instead of mulling over a thick manual. The manual is so easy   
that it is just an F1 key away. The program uses very few commands, but 
the ones used are all you need; commands like cursor border, select     
color, box junctions, load screen, save screen, cut and paste, copy     
and paste, and recolor. Most of the commands are executed with the      
function keys.                                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
                                 Screen Debut
                                 History.Doc
                                 Willie Robinson
                                 2613 Louis Blvd
                                 Hephzibah Ga  30815

Version               Changes/Updates

 1.0              Not Released

 1.1              Not Released

 1.2x             Several versions released

 1.3              ANSI Animator and BSAVE added. ANSI coding Algorithms
                  rewritten.

 1.31             Documentation Targeted for main upgrade emphasis.

                  1) Documentaion smoothed out. SD2GT.DOC added.

                  2) Animator indicator added to Status line.


 1.4              KeyBoard efficency & ANSI Algorithms targeted for
                  upgrade emphasis.

                  1) Mouse Support

                  2) The F2 function now supports Automatic Line Junctions.
                  [Shift] F2 toggles Move cursor, single line, and double
                  line mode without Automatic Line Junctions.

                  3) [Shift] F5 or [Alt] Z places character selected by the
                  F5 ASCII chart to the current cursor position.

                  4) The F6 "Box Junction" function has been made smart for
                  greater efficency. It will attempt to suggest the correct
                  junction by scanning the area around the cursor. It has
                  three levels of suggestion.

                   a) Level One - It finds a junction that will fit at
                   the current position.

                   b) Level Two - It can't find a junction that will fit,
                   however it is able to recommend a quadrant within the
                   window. It then places the pointer in the center of the
                   quadrant. With luck you'll be within one character of
                   the one you want.

                   c) Level Three - It cannot derive any action from it's
                   calculations. The Pointer will then maintain it's last
                   position.

                 5) All [Ctrl] Key Combinations are now available directly
                 from the Keyboard.
                 Example: To enter ^E just hold down the [Ctrl] key then
                 press "E".

                 6) ASCII numeric codes may now be directly enter by
                 holding down the [Alt] key and typing the number on the
                 numeric key pad. Once the [Alt] key is released the
                 ASCII character will be placed at the cursor.

                 7) The ANSI non-animated coding routines have been
                 rewritten. There are now two choices of Non-Animated
                 screen coding style.

                  a) Regular code uses more space but allows the screen
                  to scroll without breaking up.

                  b) Compact code minimizes the number of lines of code.
                  It will not scroll, but is very useful for uploading
                  complex pictures into a BBS message base.

                 The animated coding routine remains unchanged.

                 8) Snow suppression for older CGA chips. Use the
                 command line switch "/s". Slows the program down
                 considerably.

                 9) Yes / No windows optionally activated with
                 "Y" or "N".

                 10) When saving code a window challenges the user
                 on overwriting the *.SD file. The options are:

                     Yes - Overwrite *.SD file.
                     No  - Don't Overwrite *.SD file. The Code (if any)
                           built by Debut will be saved.
                     Esc - Abort the entire procedure. Nothing is
                           written to the disk.

                 11) The Screen Menu now holds the last position
                 selected.

                 12) The command line switches /BBSE, /BBSR, and /NC
                 are no longer supported. These commands are now
                 supported internally.

                 13) The F7 Load Screen now has a sister procedure
                 [Shift] F7 which allows any file to be loaded into
                 SD. For Ansi be sure the ANSI.SYS file is installed.

                 14) [ALT] L (Letter) invokes the Big Letter procedure.
                 The letters were designed on an 8 x 8 matrix. All ASCII
                 characters from 1 to 127 are available (The extended
                 ASCII character set is not available). The Letters are
                 comprised of the character choosen with the F5 ASCII
                 Chart and the current color attributes. KeyBoard Support
                 for the Big Letter function is provided in three ways.

                 1. Normal keys - Just press one.

                 2. Control Characters - Hold down the [Ctrl] key and
                 press the appropriate key.

                 3. Any Character - Hold down the [Alt] key and enter the
                 ASCII number into the key pad. Numbers larger than 127
                 are truncated.

                 Note: This procedure works well with the Tab Key for
                 spacing.

                 15) The animator has been reworked & expanded to 6000
                 accept up to 6000 frames.

                 16) History Document started.
```
{% endraw %}

## PREDATOR.DOC

{% raw %}
```

                          Screen <Debut> Predator Ver 1.1
                          Copyright 1990 Willie Robinson
                          2613 Louis Blvd
                          Hephzibah Ga 30815

 Screen Predator is a TSR (Terminate & Stay Resident) program. As such
it waits, lurking in your computer memory, for your command to capture a
screen.It captures any text screen and saves it in a compressed binary
format, which is readable by Screen Debut! Used in conjunction with
Screen Debut, they are very powerful!

 Screen Predator is not a shareware program. It is supplied to registered
users of Screen Debut as a courtesy and is limited to their use ONLY!
Screen Predator is a copyrighted program and may not be changed,
disassembled, sold, or given to anyone without the written consent of the
author. All Rights Reserved.

DIRECTIONS FOR USE:
1) LOADING :  Screen Predator is loaded into the computer in the normal
way. At the DOS "A" prompt type PREDATOR ( A>PREDATOR ). You may now load
your normal program. Screen Predator will wait in the background until
activated.

2) ACTIVATION:  To activate the program simply press the Hot Key
combination ([Ctrl] PrtSc/*). It will then capture the current screen
(text screens only). Once the screen is captured and compressed, a Window
will appear (This happens almost instantaneously). This window, like the
"Verify Name" window in Screen Debut, requires that you name the screen.
The Editing commands used with this window are  A-Z, 0-9, Backspace,
Enter, and Esc.  The editing command's are few, this is to keep the
program as small as possible. On depression of the Enter key, the screen
will be saved. The status bar at the bottom of the page indicates the
home directory where the screen will go. The home directory is always
the directory where Screen Predator was loaded. As with Screen Debut,
the screen assumes the *.SD extension. To Abort the operation just hit
the Esc key.
Caution: The directory where Screen Predator is loaded from must be remain
in place while Screen Predator is in use!

3) REMOVING SCREEN PREDATOR: Simply type PREDATOR/U (/U for Unload) at the
DOS "A" Prompt.

4) PRECAUTIONS: TSR's are tricky. Screen Predator may not get along well
with a foreground program. Not because of the way it's written, but because
it's a TSR. This could cause a system crash. Be aware of the possibility.
It should be load before the foreground program, and unloaded after it.

DISCLAIMER: It is totally up to the user to judge the fitness of this program.
The use of this program is at your own risk!

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                         Printable Registration Form


NAME:__________________________________________________

ADDRESS:_______________________________________________

CITY/STATE/ZIP:________________________________________

PHONE # (Optional)_____________________________________

DISK SIZE       3.5__________  5.25___________


 $10.00 ea  (Outside US add $10.00 Handling plus postage)

                                                        Total:_________



Version You Currently are using:_______________________________________

Comments/Suggestions:__________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

_______________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2359

     Volume in drive A has no label
     Directory of A:\

    SD       EXE    119308   7-15-90  12:00p
    SNAPSCRN COM      5503   7-15-90  12:00p
    SD       DOC     32809   7-15-90  12:00p
    SD2GT    DOC     11084   7-15-90  12:00p
    REGISTER DOC      1012   7-15-90  12:00p
    PREDATOR DOC      2629   7-15-90  12:00p
    HISTORY  DOC      5532   7-15-90  12:00p
    BLOAD    BAS      1530   7-15-90  12:00p
    1KEYS    SD       1048   7-15-90  12:00p
    ARCADE   SD       1391   7-15-90  12:00p
    AUTOSIZE SD        790   7-15-90  12:00p
    CHESS    SD       1453   7-15-90  12:00p
    CHRIS'   SD       1588   7-15-90  12:00p
    CUSHMAN  SD       1044   7-15-90  12:00p
    EXAMPLE  SD        450   7-15-90  12:00p
    FUJI     SD       1128   7-15-90  12:00p
    HOKKAIDO SD       1152   7-15-90  12:00p
    HPYFACE  SD        871   7-15-90  12:00p
    INFO     SD       1331   7-15-90  12:00p
    JACK     SD       1671   7-15-90  12:00p
    MONKEY   SD       1157   7-15-90  12:00p
    PREDATOR SD       1165   7-15-90  12:00p
    RADIX    SD        831   7-15-90  12:00p
    ROADSTR  SD        847   7-15-90  12:00p
    SAHARA   SD        774   7-15-90  12:00p
    SURF     SD        879   7-15-90  12:00p
    SWISS    SD       1194   7-15-90  12:00p
    TIP      SD        705   7-15-90  12:00p
    DEBUT140 ZIP    103076   7-15-90  12:00p
    GO       BAT        24  10-03-90   1:40a
    FILE2359 TXT      2073  10-03-90   2:41p
    GO       TXT      1116  10-04-90  12:08a
           32 file(s)     307165 bytes
                           36864 bytes free
