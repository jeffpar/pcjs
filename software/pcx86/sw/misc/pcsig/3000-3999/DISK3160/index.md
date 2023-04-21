---
layout: page
title: "PC-SIG Diskette Library (Disk #3160)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3160/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3160"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
                       AQUARIUM (c) 1991, 1992

Reading the README.DOC file with VIEW.COM program.

  o  Use the UP/DOWN,  PG UP/PG DOWN,  HOME/END, LEFT/RIGHT keys to navigate
     thru the document.
  o  Use the ESC key to exit out of VIEW.COM back to DOS.
  o  VIEW.COM can be used to read any text document file.
  o  SYNTAX:    VIEW [drive][path] textfile.doc
              Where textfile.doc is any text based file to view.
              Where path is optional if VIEW.COM resides in the same
                    directory the textfile exists.  To read a text file
                    that is not in the same directory that VIEW.COM program
                    is,  just simply include the entire path.
              Where drive is the location of the textfile.  If the textfile.doc
                    is on the current drive then the drive is not needed.
                    ex:  VIEW A:\README.DOC
                    The textfile README.DOC is on the floppy in drive A:
                    in the root directory.

Remember use the ESC key to exit.


Discription:

AQUARIUM turns your monitor into a eye-catching fish tank.
Aquariums are a proven method of relaxing.   This realistic aquarium
lets you control the number and type of fish, display floating messages
in the background, make the fish change direction,  and more.
Includes both a display and screen save mode of operation.

Minimum requirements:

     XT IBM compatible
     EGA color monitor with 256K video memory
     DOS 2.1 or greater
     292k DOS memory

     Mouse is OPTIONAL

Compatability:
In order to move large amounts of objects,  while in high resolution
EGA screen mode 640 x 350,  all the video routines were written in
assembly code.  Further,  direct writes to the video registers had
to be performed.
AQUARIUM has been tested on NCR, ZENITH, MIT, GATEWAY, PACKARD BELL,
EVEREX, COMPAC, EPSON, TECH486, and MAX  machines succesfully.

About AQUARIUM:
Aquarium is a real attention getter.
No matter what message I put on my screen IT GETS READ.....

You may notice some changes to AQUARIUM.   The most recent addition
was BIG Eyes, Divers Bell, Flood Lite, Seahorse, and the new crate wall-
paper for the Control Panel.

BIG EYES was origionally a small OSCAR, but experimenting with cartoon
looking features resulted in the BIG EYES creature.  The Flood Lite
will slow the action down if you are running on an XT (8086) machine.
You may want to avoid using the Flood Lite except with sparcely populated
aquariums.
_________________________________________________________________________
             INSTALLING AQUARIUM ON YOUR HARD DISC

    o    Insert the AQUARIUM diskette in drive A: and close the door.
         Next, log onto drive A: by typing 'A:' followed by ENTER key.

    o    Start the installation by typing  'INSTALL C:'

                   Syntax:   INSTALL Drive:

        Where 'Drive:' is the drive letter of the hard disk drive
        where you wish to install this program.
        Such as   C:  or  D:  ect.
_________________________________________________________________________
                    SITE LICENSE INFORMATION

Information about a SITE License is available in the file SITE.DOC.
View the SITE.DOC by using the included VIEW.COM program.

Type:                  VIEW SITE.DOC         (Press Enter key)

Use the arrow up, down, pg up, down to browse.
To exit the VIEW program press ESC key.

To print out the SITE.DOC document, use the DOS copy command.
Put printer ON LINE first.

Type:                COPY SITE.DOC LPT1      (Press Enter key)

______________________________________________________________________

                   QUICK STARTING AQUARIUM
If you want to run AQUARIUM without stopping at the control panel
screen then start AQUA with the /R switch as follows:

C:> AQUA /R

This is handy if you want to launch AQUARIUM from a single ICON click
while in Windows.  With your registered version,  the last configuration
when AQUARIUM was exited will be the current configuration invoked here.
_________________________________________________________________________

                   RUNNING FROM A BATCH FILE
To run AQUARIUM from a batch file include these two lines:
                       CD C:\AQUARIUM
                       AQUA [/R]

Note: The [/R] is optional.
      C: = drive (replace with d:  if using D drive etc.)
      CD = DOS command to Change Directory
      AQUA =  The AQUARIUM program
Assuming you have loaded Aquarium files onto your hard drive in the
directory called AQUARIUM, if not replace the directory \AQUARIUM with the
appropriate directory name.

_________________________________________________________________________

                   RUNNING AQUARIUM FROM WINDOWS 3.x

AQUARIUM is a DOS program and should be configured in WINDOWS as a DOS
program group, and will carry a DOS icon.  Since AQUARIUM is not a WINDOWS
application, AQUARIUM will take over the screen completely.
Upon exiting AQUARIUM you will return to the WINDOWS environment.
To set up for running AQUARIUM in WINDOWS, do the following:

    o   From the Program Manager, select the NON-WINDOWS APPLICATION icon
        and maximize this window.
    o   Open the FILE menu and select NEW.  (NEW PROGRAM OBJECT)
    o   Select PROGRAM ITEM.
        You will now be in the Program Item Properties window.

        In the Description box  put            AQUARIUM
        In the Command Line box put            C:\AQUARIUM\AQUA [/R]

        Where C: is equal to the drive where AQUARIUM program is located.
        Where \AQUARIUM\ is the path (directory) where AQUARIUM files are.
        Where AQUA is the AQUARIUM program.
        Where /R is optional.  If you want to start animation immediately
        without stopping at the Control Panel then include the /R. If not
        then use C:\AQUARIUM\AQUA  only.
    o   Select the OK button.  If there were no errors then you will now
        see the DOS icon for AQUARIUM.  To run AQUARIUM, double click on
        the AQUARIUM icon.  Upon exiting AQUARIUM you will return back
        to WINDOWS.


_________________________________________________________________________

When our space shuttle put the jelly fish into orbit, I had AQUARIUM
running on our work PC with lots of jelly fish and the caption:

           WE HAVE OBTAINED ORBITAL VELOCITY.......

AQUARIUM was fun program to develop, but not as much fun as watching
other people see it for the first time.


                        THE RACE IS ON
Put some mixture of fish in your Aquarium, then hold down the right-
arrow key to move all the fish to the right side of the Aquarium,
waiting until all fish are far right as possible, then release the
right-arrow key.  This now starts the official RACE across the Aquarium.
The first one to the treasure chest wins!


                        AQUARIUM TRIVIA
The treasure chest contains valuable jewels, but rumor has it that the
chest is haunted by the remains of a thirsty pirate who has the taste
for RUM.
If this pirate drank too much, then it might explain why the sea weeds are
planted in different locations each time AQUARIUM is started.....

              AQUARIUM IS NOT AN AUTOMATIC SCREEN SAVER
I have had a lot of requests that AQUARIUM be made TSR (Terminate and Stay
Resident) in order to "automatically" take over the screen when there is
no keyboard activity.  New release AquaTSR(c) read below.

AQUARIUM was origionally made for just entertainment,  but having the ability
to display objects that DO NOT remain in one spot qualifies AQUARIUM as having
screen saving abilities, but in no way automatic.   When selecting the Screen
Save button, while in the Control Panel, tells AQUARIUM not to display
stationary objects during animation.  This button does not cause AQUARIUM to
remain in memory (resident) when exiting the program.


At work I have had people display the message

          "ON VACATION, BE BACK THURSDAY, JUNE ...."

and leave AQUARIUM running for 1 or 2 weeks.  I don't recommend this, but
when leaving you PC for several hours,  you should use some method
of protection from burning images onto the screen.  This could include
turning down the brightness, powering off only the monitor, or starting up
AQUARIUM with screen save mode selected.

------------------------------------------------------------------------------
                    AquaTSR(c) NEW RELEASE

Due to the large request to use AQUARIUM as an AUTOMATIC screen saver, I
have now created a TSR (Terminate & Stay Resident) version called AquaTSR(c).
AquaTSR will require DOS 3.x and will NOT be compatible with Microsoft
WINDOWS.  AquaTSR is now ready for distribution.

AquaTSR(c) features many of the fish you currently enjoy in AQUARIUM.
AquaTSR can be unloaded from a batch file, so that if you want to start up
WINDOWS you can unload AquaTSR first and then load it up again when you
finish WINDOWS automatically.

Description:
    An automatic screen saving program that features many of the creatures
    swimming in the AQUARIUM program such as Seahorse, Divers Bell, Oscar,
    Angel and more.  Not compatible with WINDOWS.  The AquaTSR Control
    Panel (AQUACP.EXE) lets you select fish, create messages, unload and
    load the AquaTSR program etc.

AquaTSR minimum requirements:
    DOS 3.x or higher
    XT turbo machine (10mhz)
    190K cpu memory,  4.6k when resident!
    EGA or VGA color monitor, with 256K video memory
    Hard Drive with 840k available- this includes space for program swap
                                    and video file save when AquaTSR is
                                    activated.
    Registration is $15.95  (USA currency)
    Ask your local BBS or Shareware distributers for a demo copy.


Regards
Ron Gray


```
{% endraw %}

## SITE.DOC

{% raw %}
```
                       AQUARIUM (c) 1991, 1992
                       by Ron, Kim & Chris Gray



Page 1: Description of SITE License, private use and price schedule.
Page 2: SITE document to be filled out and returned with payment.

Information on Site License & Private Use:


CORPORATE AND GOVERNMENTAL SITE LICENSE

This is a license for use of the software within your company or government
agency, and is not transferable.  This allows internal use and copying of
the software for as many sites / computers as contracted for.  (See Site
License price schedule).  An unlimited Site License allows unlimited copying
of the software for internal use by your company or government agency.
Distributing, repackaging, or reselling of the software to third parties is
not allowed.  All licenses are prepaid.


PRIVATE USE

This license is not necessary for clubs or user groups distributing the
software on a SHAREWARE basis, providing that the entire AQUARIUM program
with accompanying README.DOC file is included in the distribution, and no
more than a nominal fee (not to exceed $10) is charged for such distribution.


AVAILABILITY OF SOURCE CODE

It is the policy of SoftStar not to release source code of its products.



                    SITE LICENSE PRICE SCHEDULE

   AQUARIUM
   Current Version: 1.046
  

  * Diskette with program and accompaning files ......    $14.95    ______

  * Commercial site license for the use of AQUARIUM.
    (Includes one diskette with program & accompaning files.)

     2 to  9 computers .. at $11.95 each  # computers ____ x 11.95 = ______
    10 to 24 computers .. at $ 9.95 each  # computers ____ x  9.95 = ______
    25 to 49 computers .. at $ 7.95 each  # computers ____ x  7.95 = ______
    50 to 99 computers .. at $ 4.95 each  # computers ____ x  4.95 = ______
   100 +     computers .. $495  one time fee                       = ______


Diskette format (choose one)     5.25" disk ____    3.5" disk ____



SITE LICENSE                                         #_____________

                        SoftStar - Ron Gray
                          P.O. Box 5673
                      GLENDALE, AZ  85312  USA


SoftStar hereby grants _______________________________________ a site
license for ________  computers for the use of the following software
program:  AQUARIUM

This is a perpetual license for the use of the software within your
company, and is not transferable.  This license allows internal use
and copying of the software by as many users/ machines as contracted
for.  Distribution, repackaging, or reselling of the software, to
third parties, is not allowed under this agreement.

SoftStar hereby disclaims all warranties relating to this software,
whether express or implied, including without limitation any implied
warranties of merchantability or fitness for a particular purpose.
SoftStar will not be liable for any special, incidental, consequential,
indirect or similar damages due to loss of data or any other reason,
even if SoftStar or an agent of SoftStar has been advised of the
possibility of such damages.  In no event shall SoftStar's liability
for any damages ever exceed the price paid for the license to use the
software, regardless of the form of the claim.  The person using the
software bears all risk as to the quality and performance of the software.

This agreement shall be construed and enforced in accordance with the laws
of the STATE OF ARIZONA.  Any action or proceeding brought by either party
against the other arising out of or related to this agreement shall be
brought only in a STATE or FEDERAL COURT of competent jurisdiction located
in Maricopa county, Arizona.  The parties hereby consent to in personam
jurisdiction of said courts.


COMPANY: ____________________________________________________________  *

ADDRESS: ____________________________________________________________  *

CITY:    _____________________________  STATE: ___   ZIP CODE: ______  *


AUTHORIZED  SIGNATURE:   ____________________________________________  *

TITLE: _______________________________         DATE: ________________  *


SoftStar     AUTHORIZED SIGNATURE: __________________________________

TITLE:       Owner                             DATE: ________________

* Complete these lines.  Send with check based on price schedule.
  A copy of this aggreement will be returned with a SITE program disk.
  Make check payable to Ron Gray.
                                                    

```
{% endraw %}

## AQUATSR.DOC

{% raw %}
```
                         AquaTSR (c)  1992
                                                   by Ron, Chris and Kim Gray


------------------------------------------------------------------------------
Reading the AQUATSR.DOC file with VIEW program:

  o  Use the UP/DOWN,  PG UP/PG DOWN,  HOME/END, LEFT/RIGHT keys to navigate
     thru the document.

  o  Use the ESC key to exit out of VIEW back to DOS.

  o  VIEW.COM can be used to read any text document file.

  o  SYNTAX:   VIEW [drive][path] textfile.doc
              Where textfile.doc is any text based file to view.
              Where path is optional if VIEW.COM resides in the same directory
                    the textfile exists.  To read a text file that is not in
                    the same directory that VIEW.COM program is, just simply
                    include the entire path.
              Where drive is the location of the textfile. If the textfile.doc
                    is on the current drive then the drive is not needed.

                    ex:  VIEW A:\AQUATSR.DOC

                    The textfile AQUATSR.DOC is on the floppy in drive A:
                    in the root directory.


------------------------------------------------------------------------------
                             AquaTSR(c) 1992
Description:
    Is an "automatic" screen saving program.  You specify the period of
    inactivity that AquaTSR(c) will wait prior to starting up.  AquaTSR
    features many of the fish swimming in the AQUARIUM(c) program such
    as Seahorse, Divers Bell, Oscar, Angel and more.  Not compatible with
    WINDOWS.  The AquaTSR Control Panel (AQUACP.EXE) lets you select fish,
    create messages, unload and load AquaTSR etc.  Further,  you can load
    or unload AquaTSR from a batch file.

    Registration is $15.95.

AquaTSR minimum requirements:
     XT IBM compatible turbo (10mhz)
     EGA color monitor with 256K video memory
     DOS 3.x or greater
     243k DOS memory, 4.6k when resident!
     Hard Drive with 840k available- this includes space for program swap
                                     and video file save when AquaTSR is
                                     activated.
Compatability:
    In order to move large amounts of objects,  while in high resolution
    EGA screen mode 640 x 350,  all the video routines were written in
    assembly code.  Further,  direct writes to the video registers had
    to be performed.
    AquaTSR has been tested on NCR, ZENITH, MIT, GATEWAY, PACKARD BELL,
    EVEREX, COMPAC, TECH486 and MAX machines succesfully.

Incompatability:
    AquaTSR is strictly a DOS program and is not compatible with WINDOWS
    environment.  Use a batch file to unload AquaTSR prior to starting
    WIN.

______________________________________________________________________________

                   INSTALLING AquaTSR ON YOUR HARD DISC
Note: If you already own the AQUARIUM(c) program, both the AquaTSR files and
      AQUARIUM files can co-exist in the same directory.  It is not necessary
      to create a seperate directory for AquaTSRs files.

    o    Insert the AquaTSR diskette in drive A: and close the door.
         Next, log onto drive A: by typing              A: (press ENTER key)

    o    Start the installation by typing       INSTALL C: (press ENTER key)

                   Syntax:   INSTALL Drive:

        Where 'Drive:' is the drive letter of the hard disk drive where you
        wish to install this program.
        Such as   C:  or  D:  ect.

    o   Here is a list of the file names and brief description.

                    AQUATSR.EXE     Main TSR program
                    AQUATSR.001     Graphics Picture File
                    AQUATSR.002     Graphics Picture File
                    AQUATSR.DOC     This Document
                    AQUATSR.CFG     Last AquaTSR configuration saved here
                    INSTALL.BAT     Batch file that will automatically install
                                    the AquaTSR files on your hard drive.
                    AQUACP .EXE     AquaTSR Control Panel used to select the
                                    fish,  period of inactivity,  create
                                    floating messages, and load or unload
                                    AquaTSR program (optional).
                    VIEW   .COM     Program to view the AQUATSR.DOC text file.
                    -----------     ------------------------------------------
              *     TSRSWAP.000     Files created by AquaTSR when swapping
              *     TSRSWAP.001     program memory out during pop up time.
              **    SCRSAV2.TSR     File created by AquaTSR when saving the
                                    video screen that AquaTSR popped up over.
                    AQGO   .BAT     Batch file created by AQUACP.EXE program
                                    when the LOAD or UNLOAD buttons are
                                    selected.  This file is deleted when
                                    AQUACP.EXE program is exited.

*  These files will be created at start up time by AquaTSR.
** This file is created when AquaTSR pops up.

______________________________________________________________________________

                            LOADING AquaTSR

method 1:
Loading AquaTSR from the AquaTSR Control Panel program AQUACP.EXE
 o   Log on to your hard drive by typing       C:            (press ENTER key)
 o   Change to the AQUARIUM directory          CD \AQUARIUM  (press ENTER key)
 o   Start up AquaCP program                   AQUACP        (press ENTER key)
 
While in the AquaCP program press the button "LOAD TSR"  which will batch file
out to start up the AquaTSR program and return to AQUACP screen.


method 2:
Loading AquaTSR directly from DOS prompt:
 o   Log on to your hard drive by typing       C:            (press ENTER key)
 o   Change to the AQUARIUM directory          CD \AQUARIUM  (press ENTER key)
 o   Start up AquaTSR program                  AQUATSR       (press ENTER key)

You will now see the line-
        "AquaTSR will pop up after xx minutes of keyboard inactivity"


If you forgot that AquaTSR was already in memory and you tried to load a
second copy, AquaTSR will return the message-
        "AquaTSR will pop up after xx minutes of keyboard inactivity"
        "Aqua-TSR already loaded"

______________________________________________________________________________

                        POPPING AquaTSR DOWN

 Once AquaTSR starts up the aquarium activity,  a touch of your keyboard key
 will cause AquaTSR to restore your video screen, swap back into CPU memory
 approximately 172K bytes of program code, and pop back down.  The program
 or DOS that AquaTSR popped up over can now resume.
 AquaTSR does not monitor the mouse during animation, so mouse clicks or
 movement will not effect AquaTSR.

 o   ESC key pressed after AquaTSR pops up will cause AquaTSR to unload from
     memory.   If AquaTSR has popped up over another program,  AquaTSR will
     sense this and display a message that it is unable to unload at this
     time.

 o   All keys except ESC key will cause AquaTSR to pop back down.

______________________________________________________________________________

                        UNLOADING AquaTSR
method 1:
Unloading AquaTSR from the AquaTSR Control Panel program AQUACP.EXE
 o   Log on to your hard drive by typing       C:            (press ENTER key)
 o   Change to the AQUARIUM directory          CD \AQUARIUM  (press ENTER key)
 o   Start up AquaCP program                   AQUACP        (press ENTER key)

While in the AquaCP program press the button "UNLOAD TSR"  which will batch
file out to remove the AquaTSR program and return to AQUACP screen.


method 2:
Unloading AquaTSR directly from DOS prompt:
 o   Log on to your hard drive by typing    C:               (press ENTER key)
 o   Change to the AQUARIUM directory       CD \AQUARIUM     (press ENTER key)
 o   Unload AquaTSR program                 REMOVTSR AQUATSR.EXE (press ENTER)

If AquaTSR was not loaded prior to trying to remove it you will see the
message-
       "AquaTSR not in memory or was not the last program loaded"


______________________________________________________________________________

                   STARTING AquaTSR FROM A BATCH FILE

To run AquaTSR from a batch file include these three lines:
                       C:
                       CD \AQUARIUM
                       AQUATSR

Note:
Refer to DOs & DONT rules if you are loading more than AquaTSR in your batch.

        CD = DOS command to Change Directory.  This is very important because
             AquaTSR will then use the current directory to locate the config
             file and where to put new files for swaping out program and video
             memory.  If a different directory other than \AQUARIUM was used
             then replace with the appropriate name.
        C: = drive (replace with d:  if using D drive etc.) May be omitted if
             the current drive is to be used.
   AQUATSR = The TSR program

______________________________________________________________________________

                     AquaTSR PROGRAM OPERATION

The phrase "Terminate and Stay Resident", or "TSR", comes from the DOS
service that provides the ability for a program to become memory-resident.
As the name implies, a TSR is a program that is loaded and takes up
residence in memory,  waiting to perform its task.  This task may require the
TSR to pop-up over another program or DOS.  When the TSR pops up or becomes
active, it suspends any foreground process (program) while performing its task
such as screen saving.
TSR activation or pop-up always occur during the servicing of an interrupt.
AquaTSR when resident in memory,  hooks the clock interrupt such that AquaTSR
code is called 18.2 times a second.  AquaTSR keeps track of this to time the
duration period of keyboard or mouse (if present) inactivity.  The keyboard
interrupt is also hooked such that each time a key is pressed,  AquaTSR will
examine it to see if the AquaTSRs' hot keys  (ALT key and '.' period key)
were pressed and also to reset the inactivity timer count to zero.
When the inactivity counter reaches the period (1 - 30 min) selected by you,
AquaTSR will then pop up, saving program memory and video screen prior to
starting up your aquarium.  When AquaTSR is resident in memory only a small
kernel of approximately 4.6k remains resident in memory to monitor the
interrupt process.  Upon popping up,  AquaTSR will swap out 172K of DOS memory
to the file TSRSWAP.000 and swap in AquaTSR program from TSRSWAP.001 file.
During this process a blinking green box will appear in the upper left corner
of your video screen if you are in TEXT mode.  Depending on your machine speed
will take a second or two.  If during animation you reset or boot your machine,
the TSRSWAP.00x files will be present.  Normally when AquaTSR is removed from
memory these files are deleted.  An additional file called SCRSAV2.TSR will be
created to save the current video memory image.


______________________________________________________________________________

                    TSR RULES - DOs AND DONTs

DO unload TSR programs on a last in first out.   If you wish to later remove
   AquaTSR from memory,  you must ensure that AquaTSR was the last TSR loaded.
   Remember, the last TSR loaded would be the first to unload.

DONT try to unload AquaTSR, if you installed other TSR programs after AquaTSR.
   However,  during AquaTSR animation you may unload it by pressing the ESC
   key.  If AquaTSR detected it was popped up over another program,  the
   display "UNABLE TO TERMINATE AT THIS TIME, TRY LATER." will appear, simply
   press a different key once to resume animation,  and a second time to pop
   down AquaTSR.  In this case you must first quit the current program that
   AquaTSR popped up over prior to using the ESC key to unload AquaTSR from
   memory.

             
______________________________________________________________________________

                       POSSIBLE PROBLEMS  Q & A
o  While in the AquaTSR Control Panel program,  upon selecting either the LOAD
   or UNLOAD TSR buttons the Control Panel program terminated and I was
   was returned back to my DOS SHELL or MENU program.  Why?
   The AQUACP program creates a batch file called AQGO.BAT to allows AQUACP to
   quit momentarily,  start up AquaTSR program and return to AQUACP program.  If you used a shell or batch program to origionally start up the
   AQUACP.EXE program actually terminates prior to running the AQGO.BAT file,
   DOS assumes that it finished, in which control now passes back to the
   origional menu or DOS shell that started up AQUACP.EXE program.
   If you are using a menu that calls other programs thru batch files, then
   you must create two batch files for loading or unloading AquaTSR the same
   way that AQUACP would do it.

          example:   UNLOAD.BAT         (file)
                     CD \AQUARIUM       (changes directory to AquaTSR location)
                     REMOVTSR AQUATSR.EXE  (removes AquaTSR from memory)

          example:   LOAD.BAT           (file)
                     CD \AQUARIUM       (changes directory to AquaTSR location)
                     AQUATSR            (installs AquaTSR into memory)

o  When AquaTSRs hot keys (ALT and '.'period) are pressed, why does AquaTSR
   sometimes fail to pop up?   AquaTSR monitors the DOS busy flag to make sure
   that something important is not in progress.  If the DOS busy flag is set
   AquaTSR waits a short time to see if the busy flag goes away.
   If not then AquaTSR goes back to sleep.  A second attempt to pop up AquaTSR
   will then be needed.
   Further, if AquaTSR refuses to pop up over a currently running program, it
   is because the keyboard interrupt is being interrigated before AquaTSR has
   a chance to.  In this case you must first terminate (quit) the current
   program and then you should be able to POP up AquaTSR.

o  While working in GEM DRAW with the mouse,  AquaTSR pops up anyway.  Why
   didn't AquaTSR know that the mouse was being used?
   Because many CAD programs almost exclusively use the mouse,  it is not
   enough to only watch the keyboard for inactivity.  AquaTSR watches both
   mouse and keyboard for inactivity,  however some programs ignore the mouse
   software already present in memory and uses their own mouse routines.
   When this happens AquaTSR can no longer monitor mouse activity.
   You have two choices here, 1- Unload AquaTSR prior to starting a graphic
   program that uses its own mouse code.  2 - Set the inactivity period to at
   least 20- 30 minutes.  This way if AquaTSR rudely visits you while you are
   using the mouse, touch a key to pop AquaTSR back down for another 20-30
   minutes and continue with your drawing.
   AquaTSR works fine with many other CAD programs such as SCHEMA or AutoCAD.
   
o  My graphic animation program screen was not restored properly when AquaTSR
   popped back down,  Why?
   Most programs do not perform continuous screen updating, but simply wait
   for a key or mouse input in order to carry out tasks.   Other programs
   involving "animation",  will perform many thousands of video changes each
   second.   These programs are "video intensive", meaning most of the time
   they continually perform some task with the video registers or video memory
   (images).  The chances are very high that when AquaTSR pops up over these
   video intensive programs,  it will interrupt setup calls to the video
   registers (ie:map, mask, overscan, pan and pel etc).  The results may not
   be predictable.  Further,  the EGA palette registers that allow a program
   to map 1 of 16 colors to 1 of 64 are "write only" and can not be read so
   that they are restored properly.  Given this, the results of popping
   AquaTSR over such a program could be loss of origional screen images or
   color,  you have only one choice here, DONT.

______________________________________________________________________________

                  AquaTSR POSSIBLE ERROR CODES

    1  =  DOS Services are not available.  AquaTSR should attempt to pop back
          down when this is encountered.  You should not see this one.
    2  =  Not enough memory to become resident.  AquaTSR will report the
          amount of memory detected in this case.  If applicable you should
          off-load other TSR programs to free up memory.
    3  =  Unable to become memory resident.
    4  =  System is running under DOS 2.x, so AquaTSR cannot become resident.
   10  =  Error initializing disk swapping files.  This may occur if there is
          insufficient room on your hard disk to create the files TSRSWAP.000
          and TSRSWAP.001 when AquaTSR popped up.

                       DOS CRITICAL ERROR CODES
    7  =  Out of memory.  Not enough memory to load AquaTSR to begin with.
______________________________________________________________________________

                 AQUARIUM(c) 1991, 1992 - fish tank

AQUARIUM(c) turns your monitor into a eye-catching fish tank.
Aquariums are a proven method of relaxing.   This realistic aquarium lets
you control the number and type of fish, display floating messages in the
background, make the fish change direction,  and more.
AQUARIUM features all objects shown in the AquaTSR Control Panel program
AQUACP,  plus a bubbler that starts up when viewing your AQUARIUM.

AQUARIUM minimum requirements:

    DOS 2.1 or higher
    XT turbo machine (10mhz)
    292K cpu memory
    EGA or VGA color monitor, with 256K video memory
    Single 360K floppy drive

    Mouse is OPTIONAL

Registration is only $14.95.

Registered programs include the FILE feature,  which allows you to save
up to 10 different AQUARIUM configurations.
Ask your local BBS or Shareware Distributor for a demo copy.


Regards
Ron Gray

```
{% endraw %}

## TSRSITE.DOC

{% raw %}
```
                       AquaTSR (c)  1992
                       by Ron, Kim & Chris Gray



Page 1: Description of SITE License, private use and price schedule.
Page 2: SITE document to be filled out and returned with payment.

Information on Site License & Private Use:


CORPORATE AND GOVERNMENTAL SITE LICENSE

This is a license for use of the software within your company or government
agency, and is not transferable.  This allows internal use and copying
of the software for as many sites / computers as contracted for.  (See
Site License price schedule).  An unlimited Site License allows unlimited
copying of the software for internal use by your company or government
agency.  Distributing, repackaging, or reselling of the software to third
parties is not allowed.  All licenses are prepaid.


PRIVATE USE

This license is not necessary for clubs or user groups distributing the
software on a SHAREWARE basis, providing that the entire AquaTSR program
with accompanying DOC file is included in the distribution, and no more
than a nominal fee (not to exceed $10) is charged for such distribution.


AVAILABILITY OF SOURCE CODE

It is the policy of SoftStar not to release source code of its
products.


                    SITE LICENSE PRICE SCHEDULE

   AquaTSR
   Current Version: 1.010
  

  * Diskette with program and accompaning files ......    $15.95    ______
                   
  * Commercial site license for the use of AquaTSR.
    (Includes one diskette with program & accompaning files.)

     2 to  9 computers .. at $11.95 each  # computers ____ x 11.95 = ______
    10 to 24 computers .. at $ 9.95 each  # computers ____ x  9.95 = ______
    25 to 49 computers .. at $ 7.95 each  # computers ____ x  7.95 = ______
    50 to 99 computers .. at $ 4.95 each  # computers ____ x  4.95 = ______
   100 +     computers .. $495  one time fee                       = ______


Diskette format (choose one)     5.25" disk ____    3.5" disk ____



SITE LICENSE

                        SoftStar - Ron Gray
                          P.O. Box 5673
                      GLENDALE, AZ  85312  USA


SoftStar hereby grants ____________________________________ a site
license for _______  computers for the use of the following software
program:  AquaTSR

This is a perpetual license for the use of the software within your
company, and is not transferable.  This license allows internal use
and copying of the software by as many users/ machines as contracted
for.  Distribution, repackaging, or reselling of the software, to
third parties, is not allowed under this agreement.

SoftStar hereby disclaims all warranties relating to this software,
whether express or implied, including without limitation any implied
warranties of merchantability or fitness for a particular purpose.
SoftStar will not be liable for any special, incidental,
consequential, indirect or similar damages due to loss of data or
any other reason, even if SoftStar or an agent of SoftStar has been
advised of the possibility of such damages.  In no event shall
SoftStar's liability for any damages ever exceed the price paid for
the license to use the software, regardless of the form of the
claim.  The person using the software bears all risk as to the
quality and performance of the software.

This agreement shall be construed and enforced in accordance with
the laws of the STATE OF ARIZONA.  Any action or proceeding
brought by either party against the other arising out of or related
to this agreement shall be brought only in a STATE or FEDERAL COURT
of competent jurisdiction located in Maricopa county, Arizona.
The parties hereby consent to in personam jurisdiction of said
courts.


COMPANY: ____________________________________________________  *

ADDRESS: ____________________________________________________  *

CITY:    _____________________  STATE: ___   ZIP CODE: ______  *


AUTHORIZED  SIGNATURE:   ____________________________________  *

TITLE: _______________________         DATE: ________________  *


SoftStar     AUTHORIZED SIGNATURE: __________________________

TITLE:       Owner                     DATE: ________________

* Complete these lines.  Send with check based on price schedule.
  A copy of this aggreement will be returned with a SITE program
  disk.   Make check payable to Ron Gray.
                                                   

```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3160

     Volume in drive A has no label
     Directory of A:\

    AQUARIUM ZIP    120546   2-11-93  12:37p
    AQUATSR  ZIP    133084   2-11-93  12:41p
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       540   2-11-93   4:30a
           10 file(s)     318305 bytes
                               0 bytes free
