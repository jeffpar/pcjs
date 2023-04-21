---
layout: page
title: "PC-SIG Diskette Library (Disk #217)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0217/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0217"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ELIST AND DISK ALIGNMENT"

    NELIST is a Pascal source lister, capable of automatically enhancing
    your printouts, and configurable to your own needs.  WA-TOR is a
    fascinating predator-prey simulation, try changing it's parameters and
    watch what happens!  SUPERDIR is a diskette file manager that allows
    you to give each file a descriptive comment line.
    
    How to Start: To run a COM program simply type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.  For information on PAS
    programs, consult your Pascal manual.
    
    Suggested Registration:  NET/ALIGN $20.00.
    
    File Descriptions:
    
    SUPERDIR BAS  "Super directory" program  (Compute Magazine April, l984)
    RESWORDS TXT  Key word list used by NELIST
    DUMPSCRN MRG  Model BASIC program for using DUMPSCRN.BAS
    DUMPSCRN BAS  BLOADable high resolution screen dump  (Softalk July 1983)
    SUPERDIR DOC  Documentation for SUPERDIR.BAS
    NELIST   PAS  Source code for NELIST
    NEINST   COM  Installation program to create NEPRN.DAT
    NEPRN    DAT  Printer control data for NELIST
    NELIST   COM  Turbo Pascal source lister - underlines key words etc.
    NELIST   DOC  Documentation for NELIST
    ALIGN    DOC  Documentation for disk alignment program
    ALIGN    EXE  Disk alignment program
    DUMPSCRN DOC  Documentation for DUMPSCRN
    NEINST   PAS  Source code for NEINST
    WA-TOR   000  Overlays used by WA-TOR.COM
    WA-TOR   COM  Predator-prey simulation (Scientific American, Dec., 1984)
    WA-TOR   DOC  Documentation for WA-TOR
    WA-TOR   PAS  Turbo Pascal source code for WA-TOR
    LETTER        Notes on WA-TOR.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALIGN.DOC

{% raw %}
```





                               ALIGN
                     Version 1.6 for the IBM PC
                              5/23/84

              (c) Copyright John L. Dickinson 1983, 1984

COPYING PROVISIONS

   This program and documentation may be freely copied and shared
   provided it is not modified in any manner and this notice is not
   bypassed or removed.  Please keep the ALIGN.DOC documentation file
   on the same diskette with ALIGN.EXE.

   If you find the ALIGN program useful, a contribution will be
   appreciated.  ($20 suggested.)  Comments or suggestions concerning
   ALIGN are welcome at any time.

                        John L. Dickinson
                        2470 N. Tierra Verde Pl.
                        Tucson, Arizona 85749


PROGRAM OVERVIEW

   The ALIGN program allows you to move a diskette drive head to
   absolute track locations and operate the drive while checks and
   adjustments are made.  40 track single or double-sided drives are
   supported.

   ALIGN is one of several tools needed to adjust and service
   diskette drives.  The ALIGN program does not attempt to teach you
   how to do an alignment, but it isn't difficult if you have what
   you need.  In addition to this program, you should have:

     The drive manufacturer's alignment and service procedures.

     An oscilloscope (dual trace with triggered sweep).

     A DYSAN double-sided analog alignment diskette for 40 track
     drives, 224/2A #800180.

     Extension or external diskette drive signal and power cables are
     very helpful.

   See the notes at the end of this document for possible sources for
   these items.

   An analog alignment diskette contains NO data, just special
   waveforms and can't be copied.  (It's really copy protected!) You
   can try the program using any diskette.  The ALIGN program does
   not write on diskettes.

   (It should also be possible to use this program to adjust 80 track
   drives provided you have the proper alignment diskette.  However,
   some of the program commands may not be useful since they have
   track addresses hard coded for the 40 track alignment diskette.)







                        ALIGN Version 1.6                      Page 2


SYSTEM AND DISKETTE DRIVE REQUIREMENTS

   ALIGN runs under IBM PC-DOS on a PC or PC/XT with at least 64K and
   an 80 column display, either monochrome or color.

   Since ALIGN uses standard BIOS interfaces for all I/O, it should
   also work on most IBM compatibles.  It does not work properly on
   the PCjr.

   The diskette drives to be adjusted are connected to the PC in the
   usual manner.  The ALIGN program works with standard IBM (Tandon)
   diskette drives and should work with others that use the same
   electrical interface.


USING THE ALIGN PROGRAM

   Enter ALIGN after the DOS prompt and press any key to get past the
   initial screen to the main command menu.  Chances are, you'll be
   able to use the program without reading any more of this
   documentation.

   Commands are entered one at a time on the command line.  All
   commands may be abbreviated and the first letter is sufficient for
   all but one command.  (INFO requires the 3 letters, INF.)

   Some commands require one operand as listed on the menu.  Numeric
   operands, such as track number or seconds, are decimal.  The first
   track is track 0, not track 1.

   If the diskette drive under test is running, pressing any key will
   cause it to stop in about 2 seconds.  This key may be the first
   letter of the next command or any key such as the RETURN key.  The
   drive will stop by itself after 60 seconds.

   If the drive is stopped and and you want to continue the previous
   motion command, simply press the RETURN key.  This enters a
   null command which is interpreted just like a GO command.

   Commonly used commands may also be entered using the program
   function keys as shown on the command menu.






















                        ALIGN Version 1.6                      Page 3


ALIGN PROGRAM COMMANDS

   DRIVE  A..D

     The DRIVE command specifies the letter of the drive under test:
     A, B, C or D.  The default is drive B.  The DRIVE command does
     not cause the drive to start.  Examples:

                        DRIVE A         (Set drive A)
                        D C             (Set drive C)


   HEAD  0..1

     The HEAD command selects the lower or upper head (diskette
     side).  HEAD 0 is the lower head and the only head on a single-
     sided drive.  HEAD 1 specifies the upper head on a double-sided
     drive.  The HEAD command does not cause the drive to start.
     Examples:

                        HEAD 0          (Set head 0, the lower head)
                        HEAD 1          (Set head 1, the upper head)
                        H 1             (Set head 1, the upper head)


   TRACK  0..39

     The TRACK command moves the head to a specified track and starts
     drive motion.  The drive will continue to run until a key is
     pressed or for 60 seconds.  (The 60 second run time may be
     changed using the SECONDS command.) The track number that may be
     specified is usually in the range 0 through 39, although the
     upper track limit may be extended using the MAX command.
     Examples:

                        TRACK 0      (Move to track 0 and run drive)
                        T 34         (Move to track 34 and run drive)
                        T 16         (Move to track 16 and run drive)


   IN
   OUT

     The IN command moves the head to track 32 and then immediately
     moves it "in" towards track 0 stopping on track 16.  IN is
     equivalent to the TRACK 32 command followed by TRACK 16.

     The OUT command is similar, but moves the head first to track 0
     and then "out", away from track 0 stopping on track 16.  OUT is
     equivalent to a TRACK 0 command followed by TRACK 16.

     Both commands end up on track 16 with the drive running.  Track
     16 is the radial head alignment track on the Dysan 40 track
     alignment diskette.









                        ALIGN Version 1.6                      Page 4


     After making a head adjustment it's a good idea to re-seek to
     track 16 and check the cat's eye pattern again.  Both the IN and
     OUT commands cause a re-seek to track 16.  The two commands
     also allow checking the accuracy of seeks (and the resulting
     head alignment) in both directions.  If there is a difference in
     the cat's eye patterns in the two directions, you may want to
     re-adjust the alignment to split the difference.  A difference
     indicates play in the mechanism or an imprecise head stepper
     motor.


   GO

     If the drive is stopped, the GO command simply starts the drive
     at whatever track it happens to be on.  A null entry does the
     same thing, so you can just press the RETURN key with nothing on
     the command line to start the drive.


   SECONDS  3..180

     Normally, each time you start the drive using ALIGN, the drive
     runs for 60 seconds if not stopped by pressing any key.
     This is usually enough time to make a check or adjustment and
     prevents the drive from running "forever".  The SECONDS command
     allows you to change this 60 second limit anywhere from 3 to 180
     seconds.  The SECONDS command does not cause the drive to start.
     Examples:

                        SECONDS 120                (2 minutes)
                        S 10
                        S 30


   CYCLE

     The CYCLE command starts the drive and cycles the head through
     tracks 0 through 3 in the following order 3,2,1,0,3,2,1,0,3,2...
     and so on for the purpose of checking the track 0 switch.  The
     drive changes tracks every few seconds so you have time to see
     if the track 0 switch has switched.  In between each track
     (0,1,2 or 3) the CYCLE command moves the head to track 16 so
     there is a seek similar to that when a drive is first used after
     power-on.

     Believe it or not, on Tandon TM-100 series drives, the track 0
     switch should switch between tracks 1 and 2.  (It's NOT supposed
     to switch at track 0!) This is a position in the middle of the
     first four tracks.  The actual track 0 signal on the drive
     interface is a combination of the track "0" switch and other
     indications in the drive electronics.

                            Switch here
                                 |
                                 V
                        0     1     2     3







                        ALIGN Version 1.6                      Page 5


     While the CYCLE command is active, the PC's speaker sounds rapid
     beeps equal to the current track number, 1 to 3, each time it
     changes tracks.  Track 0 is a single longer beep.  These beeps
     allow you to know what track the drive is on without trying to
     watch a meter or test light and the PC's display at the same
     time.  A higher pitch sounds in addition to the track beeps when
     the switch should switch.  After a little practice, the sound
     eliminates the need to watch the screen.  As you watch your
     meter or light, don't be confused by the very brief switch
     changes when the head moves out to track 16 and then back in.

     While it's always nice to set things "right on," the track 0
     switch adjustment isn't critical and the drive operates fine
     even when it switches a whole track off from the ideal point
     between tracks 1 and 2.


   MAX 39..90

     The MAX command sets the maximum track allowed with the TRACK
     command.

     Normally, the TRACK command accepts track numbers from 0 through
     39.  The MAX command allows you to change the TRACK command's
     high track limit all the way up to 90.  The MAX command does not
     cause the drive to start.

     There really isn't much occasion to use the MAX command.  It's
     most obvious use is to allow the ALIGN program to be used with
     80 track drives.  In this case you would specify MAX 79.  (Note
     that the IN and OUT commands assume a 40 track alignment disk
     and won't be useful with an 80 track alignment disk.  You can
     still use the TRACK command to do the equivalent manually.)

     Or, maybe you're looking for the track 39 signal on the DYSAN
     alignment disk.  If it doesn't appear on what the system thinks
     is track 39, maybe it will show up at what the system thinks is
     track 40, or 41 or....

     Actually, there is a limit to how far the head will go past
     track 39.  You may want to use the MAX command to allow you to
     investigate just how much further the head will go.  (A copy
     protection scheme might use one track past the "end" of the
     disk.)

     However, before you go charging off into the stratosphere of
     track addressing, realize that when the head hits the upper
     limit, it does so with the full force of the stepper motor.
     This alone could knock a drive out of alignment or possibly
     cause permanent damage.  Use the MAX command at your own risk.













                        ALIGN Version 1.6                      Page 6


   RESET

     The RESET command causes a reset of the diskette system (via
     BIOS INT 13 with AH=0).  RESET does not cause the drive to
     start.

     The next time any drive is accessed, it will then be
     "recalibrated." This means that the diskette controller makes no
     assumptions about which track the head is on, moves the head
     until track 0 is located as indicated by the drive, and then
     proceeds with the requested operation.  Once this recalibration
     process is complete, the diskette controller keeps it's own head
     position register and simply pulses the head forward or back,
     one step at a time to get to a desired track.  If one pulse
     is missed or the head is moved manually with power-on, then the
     controller's track register won't agree with the physical
     position of the head.

     "Recalibration" is not an adjustment, but rather a normal
     operation done by the diskette controller so it can get in sync
     with the physical head position.  Every drive is "calibrated" by
     the controller the first time you use it after power-on or boot.

     The RESET command allows you to recalibrate during the drive
     adjustment procedure.  For instance, assume the the drive is on
     track 16 (or what you think is track 16).  If you issue a RESET
     command and then simply start the drive motion (null entry), you
     will hear the drive move to track 0 and then back out to track
     16 as the drive is recalibrated.

     The RESET command is useful when servicing drives and you think
     the drive is not seeking to the correct track.  This could
     happen while adjusting the track 0 switch.  Also, the drive
     won't seek to the correct track anytime the head has been moved
     against the stepper's electrical hold.  This could occur when
     the head assembly hits it's travel limit at either end.  This
     isn't normal operation, but when the adjustments are wrong it
     can (and does) happen.

     If you don't find an alignment disk signal where you think it
     should be, try the RESET command.  It is also a good idea to use
     the RESET command just before the final checks on radial head
     alignment to be sure you're not exactly 1 or 2 tracks off.
     ALIGN does an automatic RESET between every CYCLE command seek
     to make track 0 switch adjustment easier.

     Without the RESET command, it would otherwise be necessary to
     re-boot or turn the machine off-and-on to force a recalibrate
     operation.














                        ALIGN Version 1.6                      Page 7


   INFO

     The INFO command causes another screen to be displayed with a
     brief description of each track on the Dysan 40 track alignment
     disk.  It's simply for reference.  Pressing any key returns you
     to the ALIGN command menu screen.


   QUIT

     The QUIT command terminates the ALIGN program and returns to
     DOS.


DRIVE SPEED TESTING

   ALIGN does not have the capability to check a drive's spindle
   speed.  The IBM "Advanced Diagnostics" diskette that comes with
   the IBM Hardware and Maintenance and Service book provides a good
   software check of drive speed.  Lacking that, use the ALIGN
   program to run the drive while you observe the strobe disk on the
   bottom of the drive.


INSTANTANEOUS SPEED VARIATION TESTING

   To test Instantaneous Speed Variation, the Tandon manual says to
   first "write a 2F (all ones) pattern on any track." The ALIGN
   program won't write this or anything else on your diskettes.  A
   totally satisfactory substitute is to simply use the DOS FORMAT
   command to format a work diskette in the drive under test.  This
   puts a pattern on every track.  Admittedly, it's not "all ones"
   but you'll hardly know the difference as you observe the pulse
   jitter on the oscilloscope.  Also, while Tandon says to use "any"
   track, the jitter is much worse on the inside (high) tracks.  Use
   a middle track, such as 16, to check the specification.  Get to
   know what normal jitter looks like on tracks 0 and 39 too.


























                        ALIGN Version 1.6                      Page 8


TANDON TM-100 SERIES REPAIR TIPS

   LOOSE SCREWS AND NUTS - HEAD MISALIGNMENT

   In my experience, the most frequent cause of head misalignment and
   drive failure on Tandon TM-100 series drives is a loose Allen head
   screw on the stepper motor shaft.  This allows the motor shaft to
   slip where it connects to the split band positioner pulley.
   Tighten this Allen head screw before doing an alignment.  It's not
   unusual to tighten it one-half turn holding the short end of an
   Allen wrench with just your fingers.  Don't over-do it, however,
   as you could strip the threads.

   The stepper motor shaft is smooth and has no flats or keys.  As
   long as you are doing an alignment and the Allen screw is tight,
   the exact pulley position on the shaft usually doesn't matter.
   But sometimes it can be out of the head alignment cam screw
   adjuster range.  If this happens, loosen the Allen screw, rotate
   the pulley a bit, tighten it, and try again.

   While you're at it, check the two nuts that hold the track stepper
   motor to the casting.  Also, remove the clear plastic cover on the
   bottom of the head assembly and carefully tighten the little
   Phillips screw that holds the split band on the pulley.

   If you're not going to do an alignment, don't tighten these screws
   since just tightening them might change the alignment some.


   TRACK 00 SWITCH PROBLEMS - BOOT FAILURE

   The track 0 microswitch frequently becomes intermittent or fails.
   You can easily check this by powering-off the system and removing
   plug 11 on the back of the drive.  Push a few pieces of bare wire
   into the connector and check the switch contacts with an analog
   ohm meter.  The switch is single pole, double throw (SPDT).

               |     |  |
               |     |  |  <- wires to switch
              ------------
              |          |         COM - common center contact
              | Plug     |         NC  - normally closed
              |          |         NO  - normally open
              |          |
    Pin # ->  |4  3  2  1|
              ------------
             COM     NC NO  <- Switch contacts

   Operate the switch manually.  It is a little hard to get to and
   you may want to remove the logic board first.  Check to see that
   contact closure is positive, occurs when the switch clicks,
   and without any wavering around.

   If the switch is not operating properly, the problem is usually
   just a very small amount of corrosion or oxidation on the switch
   contacts.  Rather than replacing the switch, the easy and







                        ALIGN Version 1.6                      Page 9


   effective repair is to pass some reasonable current through the
   switch and operate the switch a few times.  Be sure that plug 11
   is disconnected from the logic board and that you make connections
   to just the plug.  Use an external CURRENT LIMITED low voltage
   supply to burn off the little bit of oxidation.  I don't know how
   much current to recommend.  I use just enough to cause a little
   spark when the power supply leads are touched, probably 0.5 or
   1.0 amp.  Be sure to use a current limited supply or put an
   appropriate current limiting resistor in series.  If you don't
   know how to do this, then find someone who does rather than risk
   any harm or damage.


POSSIBLE SOURCES FOR SUPPLIES

   For the type of drives usually used in the PC, the alignment and
   service procedures are in the Tandon "OEM Operating and Service
   Manual TM-100-1 and -2 Disk Drives, 48 Tracks per Inch."

   Priority One Electronics sells this as part number 07TND179022001,
   for $36.00.

                     Priority One Electronics
                     9161 Deering Ave.
                     Chatsworth, CA 91311
                     Telephone (800) 423-5922
                               (818) 709-5111

   It is also Tandon part number 179022-001, listed at $25.00 on a
   December 1982 Tandon price list.  I don't know if they will sell
   it directly to end users.

                     Tandon Corporation
                     20320 Prairie Street
                     Chatsworth, CA 91311
                     Telephone (213) 993-6644


   Analog Alignment Diskettes (AAD's) are available directly from
   Dysan Corporation.

       5.25" Double-sided, 48 TPI, 224/2A #800180         $50.00
       5.25" Single-sided, 48 TPI, (numbers not known),   $25.00
       (96 TPI alignment diskettes are also available.)

                     Dysan Corporation
                     5201 Patrick Henry Drive
                     Santa Clara, CA 95050
                     Telephone (800) 551-9000, Dept 50
                               (408) 988-3472

   Extension or external diskette drive signal and power cables may
   be difficult to locate or you may have to make your own.  Priority
   One carries everything you need for the signal cable but not the
   power cable. (If you know of a source for the male and female
   power connectors in small quantities, please let me know.)


```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #217, version v2 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  RESWORDS.TXT         CRC = 71 DE

--> FILE:  SUPERDIR.BAS         CRC = 24 25

--> FILE:  SUPERDIR.DOC         CRC = 6C 4C

--> FILE:  DUMPSCRN.BAS         CRC = D0 7F

--> FILE:  DUMPSCRN.MRG         CRC = 18 69

--> FILE:  DUMPSCRN.DOC         CRC = AB 4B

--> FILE:  ALIGN   .EXE         CRC = 02 83

--> FILE:  ALIGN   .DOC         CRC = A1 C7

--> FILE:  NELIST  .DOC         CRC = 38 DB

--> FILE:  NELIST  .COM         CRC = 96 D2

--> FILE:  NEPRN   .DAT         CRC = 00 00

--> FILE:  NEINST  .COM         CRC = 92 38

--> FILE:  NELIST  .PAS         CRC = 28 D3

--> FILE:  NEINST  .PAS         CRC = F7 50

--> FILE:  LETTER  .            CRC = 37 AA

--> FILE:  WA-TOR  .COM         CRC = A3 46

--> FILE:  WA-TOR  .000         CRC = 4E 0D

--> FILE:  WA-TOR  .PAS         CRC = 3C D7

--> FILE:  WA-TOR  .DOC         CRC = 31 1C

 ---------------------> SUM OF CRCS = 53 C4

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## RESWORDS.TXT

{% raw %}
```
absolute
and
array
begin
case
const
div
do
downto
else
end
external
file
for
forward
function
goto
if
in
inline
label
mod
nil
not
of
or
overlay
packed
procedure
program
record
repeat
set
shl
shr
string
then
to
type
until
var
while
with
xor
```
{% endraw %}

## SUPERDIR.BAS

{% raw %}
```bas
100 '   Super Directory for the IBM Personal Computer
102 '
104 '   From Compute magazine, April, 1984 (per Dick Haan)
110 '   for monochrome or color adaptor, 80 columns
120     SCREEN 0,0,0: WIDTH 80: COLOR 7,0: CLS: DEFINT A-Z: KEY OFF:                       FOR I=1 TO 10: KEY I,"": NEXT
130     CR$=CHR$(17)+CHR$(196)+CHR$(217)
140     PRINT "Welcome to ";:COLOR 15: PRINT"Super Directory":COLOR 7
150 '   ---Remove the REM from next line for automatic use with drive A:
160 REM DRIVE$="A:": FSPEC$="A:*.*": GOTO 200
170     PRINT:PRINT "Select Drive: (";: COLOR 16,15: PRINT"A B";: COLOR 7,0:               PRINT CHR$(29);CHR$(29)"/";CHR$(28);")"
180     DRIVE$=INKEY$+":":A=ASC(DRIVE$):IF(A OR 32)<97 OR (A OR 32)>98 THEN 180
190     DRIVE$=CHR$(A AND 223)+":": FSPEC$=DRIVE$+"*.*"
200     GOSUB 5000: CLS: COLOR 23: PRINT "Reading description file"
210     DIM D$(ENTRIES): FOR I=0 TO ENTRIES: D$(I)=CHR$(9)+"--": NEXT
220     ON ERROR GOTO 310
230     OPEN DRIVE$+"descr.dir" FOR INPUT AS #1
240     LINE INPUT #1, DISKNAME$: LINE INPUT #1, A$: NUMREC=VAL(A$)
250     FOR ITEMS=0 TO NUMREC
260         LINE INPUT #1, F$: LINE INPUT #1, D$
264         IF ASC(D$)=9 THEN 290
270         FOR I=0 TO ENTRIES
280             IF F$=F$(I) THEN D$(I)=D$
284         NEXT I
290     NEXT ITEMS
300     GOTO 320
310     RESUME 320
320     CLOSE #1: ON ERROR GOTO 0
330     PAGES = INT(ENTRIES/10)
340     CURR = 0
350     START=CURR*10: FINISH=START+9: IF FINISH>ENTRIES THEN FINISH=ENTRIES
360     CLS: COLOR 0,15: LOCATE 2,1: PRINT STRING$(80,32): LOCATE 2,2:                     PRINT"Super Directory"; TAB(70); "Drive " DRIVE$:                               LOCATE 2,40-LEN(DISKNAME$)/2: PRINT DISKNAME$: PRINT
370     FOR I = START TO FINISH
380        COLOR 0,15: PRINT "F"; LEFT$(MID$(STR$(1+I-START),2)+" ",2);:                   COLOR 15,0: PRINT " "; F$(I); TAB(18);: COLOR 7: PRINT D$(I):                   PRINT STRING$(80,196);
390     NEXT
400     LOCATE 25,1:COLOR 15,0:PRINT "Press ";:COLOR 0,15:PRINT"F1";:COLOR 15,0:          PRINT" to ";:COLOR 0,15:PRINT"F";MID$(STR$(1+FINISH-START),2);:COLOR            15,0:PRINT" to select program.  Page with PgUp or PgDn.  ESC quits."
410     LOCATE 23,32: PRINT" Page #";CURR+1;"of";PAGES +1
420     A$=INKEY$: IF A$="" THEN 420
430     IF A$<>CHR$(27) THEN 540
440     LOCATE 25,1: PRINT SPACE$(79);:LOCATE 25,1:PRINT"  1. Exit to BASIC  "+           "2. Exit to DOS  3. Re-RUN  4. Save descriptions  5. Menu";
450     A$=INKEY$: IF A$<"1" OR A$>"5" THEN 450
460     ON VAL(A$) GOTO 470,480,490,500: GOTO 350
470     COLOR 7: CLS: GOTO 5300
480     SYSTEM
490     RUN
500     ON ERROR GOTO 510: GOSUB 1000: GOTO 350
510     BEEP: LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: COLOR 31: PRINT               "Can't save descriptions.  ":COLOR 7:PRINT"Press "CR$;" to continue.";
520     IF INKEY$<>CHR$(13) THEN 520
530     RESUME 350
540     IF A$=CHR$(0)+CHR$(81) THEN CURR=-(CURR+1)*(CURR<PAGES): GOTO 350
550     IF A$=CHR$(0)+CHR$(73) THEN CURR=CURR-1: CURR=CURR-(PAGES+1)*(CURR<0):            GOTO 350
560     A=ASC(MID$(A$+"0",2))-59:IF A<0 OR A>FINISH-START THEN BEEP: GOTO 420
570     LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: PRINT "Press ";CR$;                  " to run program, ESC to return to menu, SPACE to do description.";
580     LOCATE 3+A*2,5: COLOR 31: PRINT F$(START+A);: COLOR 15
590     A$=INKEY$: IF A$<>CHR$(13) AND A$<>CHR$(27) AND A$<>CHR$(32) THEN 590
600     IF A$=CHR$(27) THEN LOCATE 3+A*2,5: PRINT F$(START+A);: GOTO 350
610     IF A$<>CHR$(32) THEN 670
620     IF DISKNAME$="" THEN LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1:                 LINE INPUT;"Enter name of disk: "; DISKNAME$: GOTO 620
630     LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: Z=START+A:                         PRINT "Description: ";D$(Z);: LOCATE 25,15: LINE INPUT ;D$(Z):                  D$(Z)=LEFT$(" "+D$(Z),62): GOTO 350
640     LOCATE 25,1: PRINT SPACE$(79);: BEEP: COLOR 31: LOCATE 25,1:                      PRINT "Cannot save descriptions to disk.  ": COLOR 7:                           PRINT "Run program anyway? (Y/N):";
650     A$=INKEY$: IF A$<>"Y" AND A$<>"y" AND A$<>"N" AND A$<>"n" THEN 650
660     IF A$="Y" OR A$="y" THEN RESUME 680 ELSE RESUME 350
670     ON ERROR GOTO 640: GOSUB 1000
680     ON ERROR GOTO 690: COLOR 7: CLS: RUN DRIVE$+F$(START+A)
690     LOCATE 25,1: PRINT SPACE$(79): COLOR 23: BEEP: PRINT "Cannot run ";               F$(A);".  ";: COLOR 7: PRINT "Press  ";CR$;" to continue...";
700     IF INKEY$<>CHR$(13) THEN 700
710     RESUME 350
720     GOTO 5300
1000 '  Save descriptions to disk
1010    OPEN DRIVE$+"DESCR.DIR" FOR OUTPUT AS #1
1020    PRINT #1, DISKNAME$;CHR$(13);ENTRIES '   ;CHR$(13)
1030    FOR I=0 TO ENTRIES: PRINT #1, F$(I);CHR$(13);D$(I);CHR$(13);: NEXT
1040    CLOSE #1: ON ERROR GOTO 0: RETURN
1050 '
5000 '  This subroutine reads disk directory into a string array
5010 '  Enter with FSPEC$, the file spec for the FILES command
5020 '  Exits with array F$, and NUMFILES, the number of files
5030 '  Uses a temporary array, TT$, which is ERASED after use
5040 '
5050    DEF SEG = 0: WIDTH 80
5060    HEAD=1050: TAIL=1052: BUFFER=1054
5070    CLS: COLOR 23,0,0: PRINT "Reading disk directory"
5080    COLOR 0: ON ERROR GOTO 5100
5090    FILES FSPEC$: ON ERROR GOTO 0: GOTO 5110
5100    BEEP: COLOR 31: CLS: PRINT"Cannot read directory": COLOR 7:                       ON ERROR GOTO 0: GOTO 5300
5110    DIM TT$(24): LOCATE 2,1: COLOR 7: ROWS = 0
5120 '  Put code for End, Enter into keyboard standard buffer
5130    POKE HEAD,30: POKE TAIL,34: POKE BUFFER,0: POKE BUFFER+1,79:                      POKE BUFFER+2,13: POKE BUFFER+3,28
5140    LINE INPUT TT$(ROWS)
5150    IF TT$(ROWS)<>"" THEN ROWS=ROWS+1:GOTO 5130
5160    IF NOT DIMMED THEN DIM F$(ROWS*6-1): DIMMED = 1
5170    ROWS=ROWS-1
5180    FOR I = 0 TO ROWS
5190       FOR J = 0 TO 5
5200          T$=MID$(TT$(I),J*13+1,12)
5210          IF T$<>"" THEN F$(ENTRIES) = T$: ENTRIES = ENTRIES+1
5220       NEXT J
5230    NEXT I
5240    ERASE TT$: ENTRIES = ENTRIES-1
5250    DEF SEG: RETURN
5300  ' ---Set the keys
5310    KEY 1, "LIST ": KEY 2, "RUN"+CHR$(13)
5320    KEY 3, "LOAD"+CHR$(34): KEY 4, "SAVE"+CHR$(34)
5330    KEY 5, "EDIT ": KEY 6, "CHR$(12);" + CHR$(13): KEY 7, "CHR$("
5340    KEY 8, "CHR$(27);": KEY 9, ".BAS"+CHR$(34)+",A": KEY 10, "LPRINT "
5350    KEY ON
5360    KEY LIST: CLOSE: END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0217

     Volume in drive A has no label
     Directory of A:\

    RESWORDS TXT       285   7-17-84  10:50p
    SUPERDIR BAS      5376   1-01-80  12:17a
    SUPERDIR DOC      3712   6-23-84   1:22p
    DUMPSCRN BAS       256   4-27-84  10:17p
    DUMPSCRN MRG       512   6-23-84   1:12p
    DUMPSCRN DOC      1408   6-23-84   1:09p
    ALIGN    EXE     33108   6-09-84  10:44a
    ALIGN    DOC     21094   7-07-84   5:59p
    NELIST   DOC     10624  12-23-84   4:16p
    NELIST   COM     19488  12-20-84   5:21p
    NEPRN    DAT        36   8-15-84  12:43p
    NEINST   COM     15620   8-15-84  12:43p
    NELIST   PAS     21248  12-20-84   5:23p
    NEINST   PAS     10519   8-15-84  12:41p
    LETTER            3648   1-21-85  10:39a
    WA-TOR   COM     23921  12-23-84   1:39p
    WA-TOR   000     16896  12-23-84   1:39p
    WA-TOR   PAS     34497  12-23-84   1:38p
    WA-TOR   DOC      9600  12-23-84   1:23a
    CRC      TXT      1475   1-21-85  12:46p
    CRCK4    COM      1536  10-21-82   5:50p
           21 file(s)     234859 bytes
                           74752 bytes free
