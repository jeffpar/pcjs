---
layout: page
title: "PC-SIG Diskette Library (Disk #2867)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2867/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2867"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2867.TXT

{% raw %}
```
Disk No: 2867                                                           
Disk Title: TimeSet and RighTime                                        
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: TimeSet                                                  
Author Version: 6.00A                                                   
Author Registration: $35.00                                             
Special Requirements: Modem.                                            
                                                                        
For those who desire or require the "real time" on their computer,      
TIMESET will set a computer clock to within five milliseconds of true   
time through a six-second telephone call from your modem to the atomic  
clocks of the U.S. Naval Observatory in Washington D.C. or the National 
Institute of Standards and Technology in Boulder, Colorado. TIMESET can 
then be complemented by RIGHTIME, a program that analyzes how much your 
system clock drifts and then regularly resets it.                       
                                                                        
Highly regarded programs, TIMESET, along with RIGHTIME, are used by     
organizations such as NASA, the Jet Propulsion Laboratories, power      
companies, the military, radio and TV stations, etc. who depend on      
time accuracy for technological or legal purposes.  They are also used  
by some of the rest of us who simply want a convenient way to set our   
computer to a standard we know is right.                                
Program Title: RighTime                                                 
Author Version: 1.1                                                     
Author Registration: $25.00                                             
Special Requirements: MSDOS 3.0+ and 100% compatible PC/AT.             
                                                                        
RIGHTIME, a 3K TSR program for MSDOS v3.0+ and DRDOS, regulates both the
CMOS and DOS clocks, and can keep both clocks accurate to within a      
fraction of a second for weeks at a time. Once loaded into memory,      
RIGHTIME compares how far your CMOS clock is drifting from your more    
accurate DOS clock, and then compares how both of them are drifting from
the "real time."                                                        
                                                                        
Real time, accurate to within five milliseconds, can be obtained by     
using the program TIMESET that will call by modem the atomic clocks of  
the U.S. Naval Observatory or the National Institute of Standards and   
Technology. After your computer is set up with "real time" for a couple 
of days and RIGHTIME has had a chance to analyze your system clocks,    
RIGHTIME will automatically take steps to regularly set your CMOS clock.
(RIGHTIME supports only clock boards or computer motherboard clocks that
emulate the PC/AT hardware clock and its BIOS support precisely.)       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## RIGHTIME.TXT

{% raw %}
```
RighTime v1.1, TestTime v1.1                       Copyright 1991, GTBecker
April 28, 1991                                          All Rights Reserved

                              Shareware Notice

      This file (RIGHTIME.TXT) and evaluation program files RIGHTIME.COM and
TESTTIME.COM should be contained in the distribution file.

      Neither evaluation program will run if the program file has been
      modified in any way, including filename, length and content.  A
      fresh distribution file of the latest version is always available
      on the SBE/DFW BBS, 214/647-0670.

      These files are the copyrighted property of G.T. Becker and Air System
Technologies, Inc., of Dallas, Texas, USA, 75234.

      Commercial shareware distributors must make arrangements with Air
System Technologies prior to distribution of these programs.

      You may use these evaluation programs for up to one month, and you may
- and are encouraged to - pass the distribution file along to others for
their evaluation, but no one may modify, rename or sell the files or programs
to anyone under any circumstances.  The programs will notify you when the
evaluation period has elapsed.

      This document is a complete description of the programs, including the
license that will be granted upon registration.  There are no surprises.  If
you have questions or suggestions, or if you need assistance, you may call
the telephone number at the end of this document any time during evaluation.

      We encourage you to register your use of RighTime.  Registered RighTime
users receive a diskette containing the current version of the registered
programs, a printed user manual and license agreement, notification of new
releases, and enthusiastic support from the author when needed.  The
registered version of RighTime is functionally identical to the shareware
distributed evaluation version, but it lacks registration reminders, it is
smaller in size, and it is serial numbered.

      Beyond the immediate tangible benefits, registration also provides
support for the shareware software distribution concept.  Shareware is not
free software, nor is it in the public domain.  Shareware means quality
software that you try before you buy, generally at a far lower cost than a
similar retail product, if one exists.  More happy shareware users mean more
happy shareware authors that produce more shareware distributed program
offerings.  We all benefit, but only if the users do their ultimate part of
registering.  If RighTime is a useful addition to your system, please
register your use.

      To register, fill in the form at the end of this document and send it
with US $25 for a single machine to Air System Technologies, Inc., 14232
Marsh Lane, Suite 339, Dallas, Texas, 75234, USA.  Site licensing is available.


                                 Version 1.1

      A number of new features have been added to RighTime since the previous
version (1.0a) was released, and problems that a few users encountered and
reported have been fixed.  If you tried RighTime v1.0 or v1.0a and found that
you could not use the program, try again with v1.1.  Please report any
difficulties you have.  Sometimes your trouble can be remedied by a single
telephone call, but if not, your information can be valuable in improving
future releases of the programs.

      RighTime v1.1 includes these new features:

      *     DRDOS 5.0 support;

      *     CMOS RAM requirement decreased to 12 bytes;

      *     Time trim provided in hundredths of a second;

      *     Permanent disable, temporary disable and reenable;

      *     Quiet mode silences beeps in error messages;

      *     Four termination codes testable by batch ERRORLEVEL;

      *     Automatic timeset request by two criteria;

      *     CMOS backup battery failure detection;

      *     Improved TestTime accuracy;

      *     New command line switches /H, /O, /T, /E, /K, /S, /Q.


                              What is RighTime?

      RIGHTIME.COM is a TSR for MSDOS v3.0 and later and DRDOS which will
correct the PC/AT "CMOS"-type clock error up to about 5.5 minutes per day. 
If RighTime is automatically and dependably installed via AUTOEXEC.BAT as
suggested below, the system clock will behave as properly and accurately as
one should hope the system clock of a computer would.  Written in 80286
assembly language, the resident portion occupies about 3K of system memory.


      First, here is what RighTime cannot do:

      -     RighTime cannot correct clock boards or computer motherboard
            clocks that do not emulate the PC/AT hardware clock and its BIOS
            support precisely.  By far, the majority of current 80286, 80386
            and 80486 machines are compatible, but systems like the AT&T PC
            6300, some Tandy-manufactured machines, AST Six Pack equipped PCs
            and XTs, ROM-socket and floppy-connector clocks and the like are
            not supported.

      -     RighTime cannot properly correct an unstable clock; most clocks
            are slow or fast and they are essentially unvarying.  If your
            clock wanders aimlessly, repair the hardware first.

      RighTime exploits the better qualities of each of the two clocks in
your system and improves upon them by doing three fundamental things:

      *     RighTime slaves the DOS system clock (which has higher
            resolution) to the hardware clock (which has higher stability),

      *     RighTime improves and maintains accuracy by regularly calculating
            and applying corrections to both clocks, and

      *     RighTime monitors time set commands (and the equivalent system
            calls from any program) to learn the hardware clock error rate.

      RighTime intrinsically sets the hardware clock and solves the midnight
rollover date bug that exists in some DOS versions; this eliminates the need
for other utility programs or drivers that perform these functions.  Unlike
DOS alone, the hardware clock seconds transition will be properly set by
RighTime and the time will be set to hundredths of a second resolution, and
these qualities will survive through rebooting.

      Each time you set the time, RighTime will improve the accuracy of the
clock error corrections and will subsequently improve the accuracy of the
clocks.  It should be easy to achieve a worst-case error of less than 0.5
second per day and under good conditions, less than 0.5 second per week;
typical results are much better.  Command line options are provided that
allow fine tuning the correction process to your system.  A trimming option
provides for offset adjustments in hundredths of a second.

      An option is provided that assists in automatic timesetting by allowing
RighTime to notify the AUTOEXEC batch file when a specified number of days
has elapsed since the last timeset, or if the system has been inactive for
too long and requires a timeset.  

      Large time changes (larger than approximately 5.5 minutes) will not
affect the corrections, permitting standard time to daylight time and the
converse adjustments.

      Some rogue programs apparently change the 8254 timer load constant,
resulting in a suddenly fast clock which usually requires a reboot to
correct.  Reexecuting RighTime will load the right value (which will restore
the proper rate) and indicate the correct time without resetting the time if
it is done reasonably promptly.


           If You Are In a Big Hurry, or If You Don't Read Manuals

      You can't know how to take best advantage of a new product unless you
take the time to read the instructions, but if you insist on trying RighTime
before you understand what you're trying, here's a helping hand:

      1)    Make a new directory, for example:
                  MD \RT

      2)    Copy RIGHTIME.COM, TESTTIME.COM and RIGHTIME.TXT into the new
            directory.

      3)    Set the date, if necessary.

      4)    Run from a DOS prompt:
                  \RT\RighTime /F /W /C

      5)    Set the system time very accurately with DOS's TIME command or,
            far better, with a telephone timesetting program.

      6)    Add this command to your AUTOEXEC.BAT:
                  \RT\RighTime /F

      7)    Reboot.

      8)    For a few days, set the time accurately immediately before you
            shutdown your system for the night, and immediately after booting
            in the morning.  If you never shutdown your system, set the time
            accurately a few times each day.

      9)    There are other considerations, and there might be additional
            features that are useful to you, so read the rest of this
            document, perhaps twice.


                               Getting Started

      To use RighTime, first decide where to store the corrections.  There
are three options: disk file, unused CMOS RAM, or neither.  In general, try
the disk file option first, if you can.  If you have a hard disk, you can use
the disk file or probably the CMOS RAM option.  If you have only floppies the
disk file option is impractical, so try the CMOS RAM option.  A diskless
machine cannot use the disk option, unless it is equipped with a non-volatile
RAM disk which appears to the system as any other disk would.

      The CMOS RAM option involves some initial bravado: although only the
first 52 bytes of CMOS RAM are defined by the IBM PC standard (presumably
leaving the last 12 bytes available), some modern BIOSs use these 12 bytes
for other functions.  If you have adopted a user-specified hard disk format,
for example, your specification is probably stored there.  Before attempting
to use the CMOS RAM option, be forewarned that CMOS RAM contains system setup
data that RighTime might inadvertently disturb; be prepared to reset the
setup data if the CMOS RAM option is unsuccessful on your system.  See the
Hardware Compatibility List, below.  If this dissuades you or if you are
otherwise reluctant, use the disk file option if you can.

      If you choose the disk file option, RighTime will attempt to write to
its own program file from time to time, so write access must be allowed.  If
the "disk" is actually a non-volatile RAM disk card, the card must remain in
the machine if this option is to work properly.  If you use the disk file
option on a battery powered hard disk laptop, you might want to decrease the
update frequency to allow your hard disk to spin down after periods of
inactivity to increase the battery life (see the /U option, Command Line
Syntax, below).  The disk file option causes RighTime to maintain an open
handle to its program file which might present a problem when running a file
defragmenting utility, but RighTime can be disabled during defragmentation
and restarted afterwards (see the /K option, Killing, Disabling and
Reenabling Resident RighTime, below).

      RighTime can also be configured with no correction storage, with
consequential loss of some of its utility (see No Correction Storage Option,
below).

      If you know how fast or slow your clock appears to run per day, you can
optionally speed the learning process of RighTime by suggesting a correction
to the program as a signed number in hundredths of a second - positive for a
slow clock, negative for a fast clock.  For example, if your clock runs about
two minutes fast per day, the suggested correction should be -12000 (120
seconds times 100).  There are actually two corrections that RighTime
normally applies, one while the system is running and warm, and another when
the system is turned off and cool.  If you know the cool correction, you can
suggest it also.  If you don't know one or either correction, RighTime will
determine them anyway; it'll just take a little longer for the corrections to
mature to good accuracy.

      If you need to restart RighTime and it is currently resident and
running, you must first kill the resident program (see Disabling and
Reenabling Resident RighTime, below).  If appropriate, the corrections that
RighTime has already learned can be suggested to the new program copy. 

      If you have been using another resident driver or TSR to correct the
weaknesses of your clock, remove all references to it from your CONFIG.SYS
and AUTOEXEC.BAT files and, once you are confident that RighTime is all it
purports to be, remove the other driver or TSR from your system.

      To get started, place RIGHTIME.COM in some directory (dev:\path, which
does not need to be included in a PATH statement), and run it from the DOS
prompt:

      if you choose the CMOS RAM option,
 
            dev:\path\RighTime /R /Wwarm /Ccool
                  or
            dev:\path\RighTime /R /W /C

      if you choose the disk file option,

            dev:\path\RighTime /F /Wwarm /Ccool
                  or
            dev:\path\RighTime /F /W /C

      As discussed above, the /W and /C switches are required, but the warm
and cool parameters are optional in this first execution.

      Also, in your AUTOEXEC.BAT file, add:

      if you choose the CMOS RAM option,
 
            dev:\path\RighTime /R

      if you choose the disk file option,

            dev:\path\RighTime /F

      Do not use the /W or /C switches in the AUTOEXEC.BAT invocation; if you
do, you will defeat the learning process.  Use the /W and/or /C switches only
when starting - or restarting - the error correction learning process of
RighTime; normally this needs to be done only once, the very first time you
run RighTime from the DOS prompt.  If you use other options to modify the
behavior of RighTime, these options must be included in the AUTOEXEC.BAT
invocation, and should be included in the initial DOS prompt invocation.

      RighTime cannot be INSTALLed in the CONFIG.SYS file.

      In the examples above and in those that follow, substitute your
appropriate device specification and the program file path.

      For example, I put RIGHTIME.COM in C:\DOS\TIME, my clock runs about 1.5
seconds fast per day when warm, and I use the CMOS RAM option.  I started by
running:

            C:\DOS\TIME\RighTime /R /W-150 /C

and I added this line to my AUTOEXEC.BAT file:

            C:\DOS\TIME\RighTime /R

Had I chosen the disk file option, I would have run:

            C:\DOS\TIME\RighTime /F /W-150 /C

and I would have added this line to my AUTOEXEC.BAT:

            C:\DOS\TIME\RighTime /F

      If RighTime encounters difficulty during its installation, it will
report one of several messages and terminate (see Installation Error
Messages, below).  A successful installation will display the corrections, a
copyright notice, and an "Installed" message.


                              Setting the Time

      Now that RighTime is installed and running, set the date and time as
accurately as possible.  If you have access to a time standard, use it.  For
best accuracy, use a NIST telephone service time setting program such as
Professional TimeSet v6.0 by Peter Petrakis (register with him, too). 
Alternatively, you can listen to WWV or CHU or a radio network news broadcast
and be prepared to set your clock when you hear the beep on the minute or
hour.  Don't use a radio station that is airing a call-in talk show; the
audio is usually delayed six to ten seconds on such programs to allow for
profanity dumping, and so the beep will be equally late.  An all-news format
station is probably not delayed.  To be certain, call the radio station and
ask for engineering; they will know.  Local telephone time services are
usually poor; don't trust that they are correct.  What is important is
accuracy; RighTime needs a reference to initially learn from, and unless you
care to (and know how to) automate it, you are it.

      From this moment on, RighTime will monitor each time set occurrence,
learning from your adjustments.  Whenever you notice or suspect that the
indicated DOS system time is insufficiently correct to satisfy you, reset it
accurately.  You will find that the clocks will become more and more accurate
and the need for adjustment will decrease, becoming infrequent; however, you
must set the time accurately at least once per month (an option is provided
to assist in automating this - see Errorlevels, below).

      Allow sufficient time to elapse between time sets so that enough error
exists for RighTime to use in its correction calculations; the more time that
you allow, the better the correction factors that are determined.  Time sets
that are separated by less than 30 minutes will be disregarded.  Careless
timesets will result in poor correction or even wild clock behavior; remember
that you are "training" the program, so do it well.  If you are eager, four
hours will probably be an adequate initial wait; of course, you can use your
system as you normally would during this time.

      When you turn your computer on, allow it to boot and then, if it is
necessary, set the time accurately within ten minutes of boot.  Time
adjustments that are performed within ten minutes of boot will affect the
cool correction; adjustments performed after that ten-minute period will
affect the warm correction.

      Each time you reboot, RighTime will display the current corrections. 
After a few days of your diligent time setting, the corrections should settle
to fairly constant numbers which will be true indications of the uncorrected
performance of your hardware clock.  Once it is installed, you can also
display the current corrections by simply running RighTime again at a DOS
prompt (no parameters are required).  The correction that is currently being
applied to the DOS clock will be displayed and a functional self test will
also be performed, verifying that RighTime is currently running properly on
your system (see Error Messages, below).

      As long as RighTime is in use and you've been diligent in your
adjustments, and the corrections have matured, the hardware clock error will
not be more than 0.5 second, and the DOS clock will be much more accurate
than that.  In fact, the DOS clock error can be less than 0.01 second; but
since DOS can't express the time any better than the 55 millisecond tick rate
permits, this accuracy might not be easily seen.  Nevertheless, it is there. 
A tool is provided with RighTime that allows verification and visualization
of RighTime's actions (see TestTime, below).
 
      RighTime has limits of one week of inactivity, and one month between
time sets, that can be corrected to a maximum of 5 minutes, 27.67 seconds per
occasion; beyond that, all bets are off.  In that case, unpredictable, and
probably incorrect, clock changes can occur, but RighTime will advise you of
its difficulty if it can.  For example, if your clock runs two minutes slow
per day and you don't use the system for three full days, when you boot up
you will receive a message warning that the clock needs to be adjusted
manually (or automatically; see Errorlevels, below).  The subsequent
adjustment will not affect the corrections.

      Keep in mind that the date is the most significant part of the time. 
If you change only the date, you are in fact making a very large change in
the time.  The change will not affect the corrections due to its large size,
but it will very likely change the seconds synchronization, and that, in
turn, will create additional error at the next time set.  A solution to this
problem is to set the time twice after you change the date; first,
deliberately set the time an hour off, and then set the time accurately. 
Neither of these two timesets will affect the corrections due to their size.


                        No Correction Storage Option

      If you have difficulty with both the CMOS RAM and disk file options or
you need or wish to use neither option, RighTime can still correct the clocks
for as long as the system runs continuously.  What RighTime has learned will
be lost when you reboot or power down, and there can be no cool correction. 
Otherwise, all of the comments above apply.  If you suggest a good warm
correction and you set the clock after you boot, RighTime will serve well.

      To run RighTime in this mode, add the following line in the
AUTOEXEC.BAT file:

            dev:\path\RighTime /N /Wwarm
                  or
            dev:\path\RighTime /N /W

      You might want to follow this with a TIME command (perhaps preceded by
a DATE command) to remind you to set the clock at each boot.


             Killing, Disabling and Reenabling Resident RighTime

      Earlier versions of RighTime (which were running with the disk file
option) reportedly could cause occasional loss of data or system lockups
during high-speed communication sessions.  If you encounter similar
difficulties with RighTime v1.1, you can temporarily suspend the function of
RighTime and reenable it later.  The disabling and reenabling command lines
can be placed in a batch file surrounding the invocation of the offended
program.  RighTime should not be disabled for an extended period.

      In the Software Carousel environment, RighTime seemed to interfere with
the automatic partition starting process of the task switcher.  This problem
was cured by installing and then immediately disabling RighTime in
AUTOEXEC.BAT, then reenabling RighTime when the last partition was started. 

      Once RighTime is resident, it can be disabled by running at a DOS
prompt:

            dev:\path\RighTime /T

Resident RighTime can then be reenabled by running:

            dev:\path\RighTime /E

      Programs that defragment or reorganize the hard disk should always be
run with no open files.  When using RighTime's disk file option, an open
handle is maintained to the program file, so before running a disk
reorganizing utility, RighTime should be killed.  After the utility
completes, RighTime can be restarted with the same command line used in the
AUTOEXEC.BAT file.  This precaution is not required when using the CMOS RAM
option.

      RighTime can be irreversibly disabled (or "killed") by running:

            dev:\path\RighTime /K

The /K switch will cause the function of RighTime to terminate, but the
memory that was allocated to RighTime will remain allocated and unavailable. 
If you wish, another copy of RighTime can be started with different options. 
In that case, a memory map will indicate multiple RighTime allocations, but
only one will be active.

      If it is your intent to permanently remove RighTime from your system,
you can do so by killing the resident program and removing the RighTime
invocation in your AUTOEXEC.BAT.  Rebooting is not immediately necessary.


                                 Errorlevels

      RighTime provides four unique termination codes.  The termination code
can be tested in a batch file to guide subsequent operations.

      Code value  Indication

            0     Installed normally, cool correction within range, last
                  timeset within specified elapsed period.

            1     Installed, cool correction within range, but more than 
                  the specified period has elapsed since a timeset.

            2     Installed, but cool correction was out of range (the
                  system has been inactive too long), so a timeset is
                  externally required.

          255     Not installed due to syntax error, insufficient memory, 
                  incompatible hardware, etc.

      These codes can be tested in the AUTOEXEC batch file with the
ERRORLEVEL batch command.  For example, if the termination code is 1, then
more than 28 days have elapsed since the last timeset (this duration can be
changed with the /S option).  It would be wise to have a NIST telephone
service time setting program such as Professional TimeSet v6.0 automatically
set the time in this situation to prevent RighTime from exceeding its one
month limit, or you could cause execution of the system DATE and TIME
commands to urge the user to set them manually.  


                               Error Messages

      RighTime might report one of the following messages:

"DOS version 3.0 or later is required"
      The PC/AT "CMOS" hardware clock is not supported by earlier DOS
      versions.

"System is not 80286 code compatible"
      RighTime expects that the system processor is at least an 80286.  The
      80C286, 80386(DX), 80386SX, and the 80486 are also code compatible with
      the 80286.  Systems that use the 8086, 8088, 80186, 80188, and the NEC
      V-series processors will not run RighTime.

"No AT hardware clock is present or clock is not running"
      Either a hardware clock or BIOS failure prevents use of the clock, or
      the clock chip is not installed in the system.

"System skipped a hardware clock alarm"
      RighTime has not passed a self test, but this condition can
      occasionally occur normally.  Try again in a minute or so.  If this
      message persists, please notify the author.

"Alarm is not supported by BIOS"
      The BIOS has reported an unsuccessful attempt to set the clock alarm
      feature.  The BIOS is not compatible with RighTime.

"Already installed"
      RighTime is currently resident and running in the system.

"Correction storage switch is required"
      Either the disk file (/F), CMOS RAM (/R) or no storage (/N) option must
      be specified in the command line.

"Invalid switch"
      An unrecognized option switch is present in the command line.

"Invalid parameter"
      A value associated with an option is inappropriate.

"Program has been altered"
      RIGHTIME.COM or TESTTIME.COM has been modified in some way.  This
      message might indicate the presence of a software virus in your system. 
      Immediately delete the program from your system and replace it with the
      distributed program.  If the original distributed copy displays this
      message, notify the author.  This message will also result from an
      attempt to INSTALL RighTime in the CONFIG.SYS file.

"Enable resident RighTime first"
      RighTime has been disabled with the /T switch.  Reenable the program
      with the /E switch.

"Hardware clock indicates low or no battery"
      The hardware clock and CMOS RAM are powered by a battery during periods
      when the system is turned off.  Replace the battery or batteries or
      replace the clock module if the battery is self-contained.

"Calculated correction is too large"
      RighTime has determined that a single adjustment of more than about 5.5
      minutes is required.  The time must be set manually or via a subsequent
      program that can be invoked within AUTOEXEC.BAT by testing the
      termination code with ERRORLEVEL.


                       PC/AT and MSDOS Clock Esoteria

                                    18.2

      DOS historians say that the designers of the PC tried to do the DOS
system programmers a favor by dividing an hour into 65536 parts, or about
18.20444444 ticks per second, making the most significant 16 bits of the 32
bit tick count directly indicate the hour and theoretically simplifying the
system code.  Somehow the hardware didn't turn out that way, resulting in
about 176 extra ticks per day.  The 8254 timer/counter clock input of 1193180
Hz and its counter 0 load constant of 0 (effectively 65536), yielded a
hardware tick rate of approximately 18.20648193 ticks per second, and that
remains so today.  That looks like a small difference, but it amounted to an
almost ten-second gain per day.

      DOS designers corrected for the hardware error by redefining the number
of ticks per day to include the extra ticks, and a standard was set: the
exact ticker rate was defined by the quotient of the number of ticks per day
and the number of seconds per day (1573040/86400), which is approximately
18.20648148 ticks per second.  When they did that, they made it possible to
convert from ticks to time and from time to ticks in two ways, each way
exact, but one according to the PC hardware implementation and one according
to the day-length standard definition.

      Using only 16 bit integer arithmetic, the conversion that matches the
PC hardware requires multiplying the current time in hundredthseconds by
59659 (which is 1193180/20), dividing that product by 65536 (discard the
least significant 16 bits), then dividing that quotient by 5 to yield the
tick count.  The resulting rate is approximately 0.1820648193 ticks per
hundredthsecond, which is the same as the hardware rate.  The conversion for
the day-length standard can be accomplished by multiplying the current time
in hundredthseconds by 19663 (since 1573040/86400 = 19663/1080), dividing
that product by 10800, then dividing that quotient by 10 to yield the tick
count.  The resulting rate is approximately 0.1820648148 ticks per
hundredthsecond, the correct day-length standard rate.

      Ironically, MSDOS authors ignored their own day-length standard and
chose to match the hardware to determine the time.  The resulting error
(compared to the day-length standard) is very small, only 0.039 tick per day,
but for some requirements that can be significant.  For example, if the
resulting time is rounded or truncated to whole seconds, the two methods will
yield different results for some values.  For most applications, though, the
choice won't matter.

      Often, the number 18.2 or the period 55 milliseconds is used to
describe the system clock (interrupts 8 and 1Ch) tick rate.  That is never
the correct number, but an approximation.  Almost all PC "compatible"
machines use this 18.2 standard tick rate, but there are exceptions; the AT&T
6300, for example, uses 18.75.

                     Stability, Accuracy and Resolution

      Frequently confused, these three qualities are different and are only
obliquely related, although each is required to exist in any good clock. 
They can be prioritized with little difficulty.  Stability is foremost.  Even
if lacking in other qualities, a stable clock is useful if you know what to
expect of it; an unstable clock generates worthless noise.  Accuracy can only
be meaningful if the clock is stable.  Resolution is required only to meet
the requirements of the clock's task; to catch a train on time, for example,
you don't need hundredths of a second resolution, just an accurate, stable
clock that will tell the time to minutes, or maybe only hours.

             Translation Gain, Resolution and Truncation Losses

      Suppose that some accurate clock resolves only to minutes, and you read
the clock often at random, or asynchronous, times.  Your time reading will be
correct if it is made at the instant the minutes have incremented from one
number to the next, but your reading will appear to be just under one minute
low if made at the instant before the next minute increment.  If you do this
enough, the average or mean error of your readings will prove to be one-half
minute low.  This is the mean resolution loss.  An artifact of any finite
resolution, resolution loss is present when asynchronously reading any
accurate digital clock.

      Some applications require resolution loss compensation, which can be as
simple as increasing the time by one-half of the unit of resolution of the
clock.  Postcompensation can be applied when the time is read, or
precompensation can be applied when it is set.  In the example, the range of
the compensated error would extend from 30 seconds low to 30 seconds high;
the mean resolution loss would be zero.  More sophisticated compensation
schemes can synthetically increase the effective resolution of the clock, but
resolution loss, though smaller, remains unavoidable.

      A similar effect, translation gain, occurs when asynchronously setting
a digital clock.  The instant of time set can occur anytime between one
regular increment and the next.  If set at the instant after an increment, no
error results; if set immediately prior to an increment, however, the clock
will be effectively set one unit too high.  On the average, asynchronous
clock sets will produce a clock time that is one-half unit of resolution
high.  Negative precompensation of one-half unit of resolution will
compensate for translation gain.

      Truncation loss is an effect that results from the disregard of digits
of low significance.  When converting from one time base to another, the
result is often not an integral number in the new time base.  If the
fractional part is ignored, loss results.  Arithmetic rounding to the nearest
unit of resolution is effective compensation and is easy to implement by
adding one-half unit of resolution; the fractional part of the sum is then
discarded by the time set function.

      In the PC/AT, all of these compensations are useful and, when combined,
they are easy to implement.  Translation and truncation errors are intrinsic
to the function of RighTime and are compensated.  Since few application
programs - nor MSDOS itself - consider resolution loss, it is precompensated
by default; DRDOS 5.0, however, includes resolution loss compensation. 
RighTime's /H0 option should be used on DRDOS systems.


                                  TestTime

      Included with RighTime is a program tool that can provide some
interesting insight into the relationship of the clocks in your system and
the function of RighTime.  TestTime takes no command line parameters.  It
will determine and express whether or not RighTime is running in the system,
and it provides a continuous single line display of the clock system status.

      The status line is terse:

            H[date:hh:mm:ss(:aa)] D[date:hh:mm:ss] corr diff distrib

where:

      H is the hardware clock data.  (:aa) is the alarm seconds data. 
            While RighTime is running, the alarm seconds will increment in
            four second steps;

      D is the DOS system clock data;

      corr is the current correction being applied to the DOS
            clock in hundredthseconds, if RighTime is resident;

      diff is the signed time difference between the hardware and DOS
            clocks in seconds.  A positive difference indicates that the DOS
            clock leads the hardware clock (it displays a higher, or later,
            time).  Since DOS can only express time to 55 millisecond
            resolution in hundredthseconds, the difference is determined by
            a 100-sample moving average method whose accuracy improves with
            time.  The last character of diff will initially be an approxima
            (a wavy equal sign) to indicate that full accuracy has not been
            achieved; it will change to an equal sign or a one-half sign when
            the difference is accurate.  A one-half sign indicates that the
            difference value is between hundredths (an average of 5
            milliseconds of resolution);

      distrib contains three numbers corresponding to the percentage of 
            difference samples that are negative, zero, and positive.  When
            the average difference is zero, the distribution of differences
            should ideally be balanced around zero.  As the DOS clock drifts
            away from the hardware clock, the balance will shift until all
            samples are positive or negative.

      An arrow to the left of each seconds data indicates which data last
changed.

      You can use TestTime to learn much about the behavior of the two clocks
in your system.  Try running it without RighTime installed and notice that
the DOS clock is never the same as the hardware clock.  Set the time and run
TestTime again.  If your DOS sets the hardware clock, check to see if the
seconds are synchronized, which is indicated by a diff value of zero.  They
probably are not.  Run TestTime some time later and see if the relationship
between the clocks has changed; there's a good chance that it will have. 
Which, if either, is correct?  Try these things with RighTime installed and
see the difference for yourself.  If RighTime is doing its job, you should
see that corr and diff are essentially the same value - the former is the
cause, and the latter is the effect.

      If the corr and diff values differ by some small, fixed amount, you can
trim RighTime with the /O option to achieve better accuracy.  One way to
determine the proper trimming offset is by starting RighTime with a /W0
switch, then running TestTime.  Making certain that the corr value is zero
(it should be, since you started RighTime with /W0), let TestTime run 100
seconds or more; the approxima will be replaced by an equal sign or one-half
sign.  If the diff value is then not zero, use its complement value as the
trimming offset with the RighTime /O switch.  For example, if the difference
is -00.02 second, the proper offset trim should be +2 hundredthseconds, so
the proper RighTime option expression would be /O+2.

      Since TestTime measures the difference between the two clocks with a
moving average, the diff value will lag the corr value.  For warm correction
values of 864 hundredthseconds per day or smaller this presents no problem,
but for larger daily correction values the current corr value will change
within the 100 second window of TestTime.  TestTime will never "catch up"
with the correction, so the indicated diff value will be somewhat low under
these conditions.


                         Briefly, How RighTime Works

      Every four seconds, RighTime reads the hardware clock time and
calculates and sets the proper system time tick count.  As usual, DOS
continues to increment that count at each 55 millisecond timer tick interrupt
and uses the count to determine the time whenever it is requested.

      When the user or an application program resets the time, RighTime
determines the sign and magnitude of the adjustment and uses this data to
modify correction factors that it maintains.  RighTime normally stores these
corrections in CMOS RAM or in its own program file on disk.

      Every two minutes, RighTime stores the current time so the period of
inactivity can be determined when the system is next booted.  The proper
(cool) adjustment can then be calculated and the hardware clock can be
adjusted if it is required.  If the cool adjustment spans midnight, the date
will be appropriately adjusted.

      RighTime provides a plus or minus 500 millisecond correction range. 
When the calculated system clock time and the hardware clock time differ by
500 milliseconds, RighTime advances or retards the hardware clock as needed
to keep the correction within range.  This adjustment is automatic and will
not affect the DOS clock, which remains correct at all times.

      RighTime takes interrupt 4Ah and hooks interrupts 8h, 1Ah, 21h, 28h and
2Fh, and it is TesSeRact compatible.  Use of the features of the hardware
clock is central to the function of RighTime, so the hardware clock is
strongly guarded.  While RighTime is installed, any attempt (via interrupt
1Ah) to set the hardware clock time, date or alarm time, or to disable the
alarm, will be ignored and will produce an error indication to the offending
program.  If interrupt 4Ah is taken by another program, it will be recovered
by RighTime.  The program is resistant to modifications.


                             Command Line Syntax

      If you use other options to modify the behavior of RighTime, the
options (except options /W and /C) must be included in the AUTOEXEC.BAT
invocation, and should be included in the initial DOS prompt invocation. 
Options /W and /C must be specified in the initial DOS prompt invocation and
must not be specified in the AUTOEXEC.BAT invocation.  The options are not
case-sensitive (either /f or /F will work) and space between options is not
required.  There must be no space between an option switch and its related
parameter.

      RighTime [ [{/F | /R[addr] | /N}] [/W[[{+|-}]warm]] [/C[[{+|-}]cool]]
            [/Dmin] [/Umin] [/H[{0|1}]] [/O[{+|-}]trim] [/Sn] [/Q] |
            [{/K | /T | /E}] ]

where:

      /F causes RighTime to store corrections in and retrieve corrections 
            from its own program file;

      /R causes RighTime to store corrections in CMOS RAM;

      /Raddr causes RighTime to store corrections in CMOS RAM at a specific
            location other than the default address of 63.  This location is
            that of the last of 12 bytes.  This option is potentially
            harmful, since a careless value might allow RighTime to overwrite
            setup data.  Inadvertently changing a hard disk type, for
            example, can lead to sadness.  Be careful;

      /N disables correction storage;

      /W sets initial warm correction rate in hundredthseconds per day
            (default 0, maximum +32767 or -32768);

      /C sets initial cool correction rate, as above;

      /D changes the cool adjust period allowance (after boot) from the 10
            minute default.  The valid range is 1 to 60.  Consider this
            option if your system exhibits a large difference in warm and
            cool corrections and cabinet temperature is suspect.  You should
            also consider that the clock rate might be affected by lower
            supply voltage when the system is off;

      /U changes the CMOS RAM or disk file update period from the two
            minute default.  The valid range is 2 to 60, and the value should
            be even.  If you think the default is unnecessarily frequent, try
            this option.  Remember that this is part of the cool correction
            process, and less frequency might affect correction accuracy in
            severe situations;

      /H sets positive half-tick compensation on (1) or off (0).  The
            default is on (1) for MSDOS systems.  Off (0) should be used on 
            a DRDOS-equipped system, which includes its own compensation;

      /O allows DOS clock offset trim in hundredthseconds.  Default is 0; the
            valid range is -99 to +99.  This can be used to compensate for
            fixed system overhead in the operating system, or to anticipate
            relay and contactor actuation delays and motor start times in
            process control system applications;

      /T temporarily disables RighTime function;

      /E reenables RighTime function;

      /K irreversibly disables (kills) RighTime function.  The memory that is
            occupied by RighTime remains allocated and unavailable;

      /S causes RighTime to set the program termination code, which can 
            be tested with ERRORLEVEL in the AUTOEXEC batch file if the
            duration since the last timeset exceeds n days.  The default is
            28 days;

      /Q will mute any error message beeps.


                           Hardware Compatibility

      RighTime requires a hardware real time clock that is compatible with
the stock PC/AT part, an MC146818.  The Dallas Semiconductor DS1287 is one
such part.  Some modern PC/AT implementations provide an embedded hardware
clock, not a separate part, that is fully compatible.

      The hardware clock and CMOS RAM usability depends upon the hardware and
the BIOS:

      *     The Tandy 1000TL hardware is not compatible.

      *     The Tandy 3000 and an unlabeled AT clone with an Award 286 BIOS
            do not support the alarm feature of the hardware clock and are
            not compatible with RighTime.

      *     Toshiba laptops will not allow the use of CMOS RAM but no ill
            effects result from trying aside from a checksum error at the
            next boot which requires only a key press to correct.  Use the
            disk file (/F) option.

      *     To date, all other AMI, DTK, Oak and Phoenix BIOS ROMs have
            worked well.


                             If You Have Trouble

      Please note the symptoms and circumstances as thoroughly as is
reasonably possible and contact

      Tom Becker
      Air System Technologies, Inc.
      14232 Marsh Lane, Suite 339
      Dallas, Texas  75234  USA

      Telephone:  214/402-9660
      SBEDFW BBS: 214/647-0670
      Fidonet:    1:124/1213.0
      CompuServe:   76436,3210

                        Software License Agreement

      When you register, this will be the agreement between you (the user)
and Air System Technologies to which both parties are bound upon the payment
and acceptance of the license fee, which is part of the registration fee.

      Grant of License
      In consideration of the payment of each license fee by the user to Air
System Technologies, Air System Technologies will license to the user a
nonexclusive right to use one copy of each of the software programs (RighTime
and TestTime) on one computer at a time.  The license is expressly for
program use only, per the terms of the license.  No other rights are implied.

      Ownership of Software
      Air System Technologies is the owner of the software programs and holds
full title to them.  The user may own the physical media on which the
software programs are recorded, including the original disk which is provided
by Air System Technologies to the user, but the user does not own the
software programs nor any copy of the software programs.

      Copies
      The software programs and the documentation are copyrighted and
therefore may not be copied without permission.  Permission is granted to the
licensed user to make copies of the software programs and the documentation
as required in the conventional course of computer system data backup. 
Permission is granted to copy the shareware distribution file in its
complete, unmodified form.  No other permission to copy is granted.

      Use and Transfer
      The Grant of License applies only to one copy of each of the software
programs.  Simultaneously functional resident copies of the software programs
each require licensing.  You may not transfer any copy (except the shareware
distribution file) of the software programs to a computer which is not under
your control, nor may you rent, lease, sell or otherwise assign control of
the software programs to anyone.

      Termination
      The license is in effect until it is terminated.  When the license is
terminated, the user's rights that are granted by the license are revoked. 
The license is automatically terminated upon violation of any of its terms,
without notice.

      Disclaimer of Warranty
      No warranty of performance or suitability is expressed or implied. 
Every effort has been made to make the software programs deliver as the
documentation describes, but the correctness for your application or
environment cannot be assured.  Air System Technologies cannot assume
responsibility for the failure of the software programs, nor for any
consequence of their use.


      RighTime Usage Registration Form               Evaluation version 1.1

      Fill out this form, enclose the required funds and mail to:

      Air System Technologies, Inc.
      14232 Marsh Lane, Suite 339
      Dallas, Texas  75234  USA


      I would like to register the use of RighTime.


      Name:________________________________________________________________

      Business name:_______________________________________________________

      Address:_____________________________________________________________

              _____________________________________________________________

      City:______________________________ State:_________ Zip:_____________

      Telephone:_________________________


      Where did you get RighTime?__________________________________________


      Registered RighTime programs are serial numbered.  Registration is 
      required for each copy of RighTime that is simultaneously machine
      resident.  If you have, for example, three machines on which you want
      to run RighTime, please register for three machines.

      Single machine registration fee is $25.
      Each additional machine registration fee is $20.


      How many copies of the RighTime package do you want?_________________

      On what media?  5.25"/360K______  3.25"/720K______


      Total enclosed:  US$____________
      Make your check or money order payable to Air System Technologies.

      Does your business require an invoice?____________


                                 Thank You!

```
{% endraw %}

## TIMSET6A.DOC

{% raw %}
```
























                                          TIMESET TM
                                         Version 6.00A


                A program to set computers to the world's most accurate clocks


                          Copyright 1987-1991, Life Sciences Software
                                  8925 271st N.W., Suite 112
                                         P.O. Box 1560
                                  Stanwood, Washington 98292

                                         206-387-9788




                     "TIMESET" is a trademark of Life Sciences Software TM







                                           CONTENTS


          FEATURES OF TIMESET 6.00A                                                ii

          SHAREWARE NOTICE                                                         iv
               Toll-Free Registration by Modem -- using TSREGSTR                   iv

          INTRODUCTION                                                              1

          CONFIGURATION                                                             3

          CONFIGURING TIMESET FOR HARDWARE CLOCKS                                   6
               "Slotless Clocks" and Tandy's SmartClock                             6
               CMOS Clocks                                                          6
               Expansion Slot Add-On Clocks                                         6
               Using CLKDRV10                                                       7

          RUNNING THE PROGRAM                                                       9
               Dialing                                                              9
               Standard and Daylight Time                                           9
               Monitor Color                                                        9
               Pulse Generation                                                     9
               Changing the Configuration                                          10
               Additional Help                                                     10

          THE TIME DATA STRINGS                                                    12
               The Naval Observatory's Data String                                 12
               The NIST's Data String                                              13

          LINE DELAY MEASUREMENTS                                                  14
               Line Delay Correction by NIST                                       14
               Line Delay Correction with the Naval Observatory                    16
               When Should Line Delay Measurement Be Used?                         16
               A Note About MNP Modems                                             17

          THE FINAL DISPLAY                                                        19

          MORE ABOUT ACCURACY                                                      19
              Recommendation:  Get RIGHTIME.COM                                    20

          TIMESET 6 AND THE WORDPERFECT LIBRARY                                    21

          PROGRAMMING NOTE AND ACKNOWLEDGEMENTS                                    22

          CUSTOM PROGRAMMING SERVICES AVAILABLE                                    23

          DISCLAIMER                                                               24

          YOUR SUPPORT IS IMPORTANT                                                24

          TIMESET 6 MAIL REGISTRATION FORM                                         25

                                             - i -







                                   FEATURES OF TIMESET 6.00A

          Version 6.00A of Professional TIMESET is a top-to-bottom revision and
          major enhancement of the classic program for setting computer clocks with
          high accuracy and precision with a telephone call to the most accurate
          time sources in the world.  The program has many new features, but one of
          the most notable is its ability to get time not just from one time source,
          but from two.  TIMESET 6.00A does alone what used to require two different
          programs from two different suppliers.  Yet the price has not changed,
          it's still $35.

          All the popular features of earlier TIMESET versions are still here,
          including the big running time display, interactive or automatic
          operation, immediate timesetting or after a countdown to zero seconds
          (done offline), and rejection of noise-corrupted data strings.


          The new features include:

          1.   Accurate time from two alternative sources.  TIMESET 6.00A can set
               the computer clock by calling cesium beam atomic clocks of either the
               U.S. Naval Observatory in Washington, DC or the National Institute of
               Standards and Technology (formerly the National Bureau of Standards)
               in Boulder, Colorado.  Previous versions could call and process time
               signals only from the Naval Observatory.  Correction for line delay
               can be made with both  services.  If line delay is not requested,
               estimated delay values are used for both services that are very close
               to what could be  measured for most localities in the continental
               United States.

          2.   Line delay correction with any type of Hayes- compatible modem.
               Previous versions could get this correction only through the Naval
               Observatory with modems capable of remote digital loopback testing
               through the &T6 and &T0 commands.

          3.   Very fast action.  It normally takes only 2-6 seconds online,
               depending on the service called, if no line delay measurement is
               requested.

          4.   Very high accuracy.  TIMESET 6.00A even measures the time it requires
               to process the received data string, and it corrects for that
               internal delay before setting the time.  String processing is one of
               the slowest things a computer does, and the time it takes is
               measurable.  Yet it's overlooked by every other timesetting program
               we know of.

          5.   Self-configuration, with a detailed help screen available for each
               configuration item and intuitive operation, making this the least
               manual-dependent version of TIMESET so far.  The help screens amount
               to an online tutorial, and you may not even need the manual.
               Previous versions of TIMESET needed a separate  program to configure
               for serial port, modem, time zone, time season, telephone dialing

                                            - ii -







               procedures, type of display, etc.  All that is self-contained in
               Version 6.00A and available at the press of a function key.  The
               configuration is written to TIMESET's own source file on disk (there
               is no separate configuration data file).  Most choices are made by
               pressing arrow keys, and editing functions are available for the few
               configuration items that require typing.  Everything is done on a
               single configuration screen.

          6.   One-key time season adjustment.  The press of a single key toggles
               the configuration between daylight or standard time and
               simultaneously adjusts the computer clock to reflect the time season
               change.  Likewise, a single key lets you override the program's video
               display configuration and toggle between color and forced monochrome
               display (very useful for some laptop computers).

          7.   Numerous fixes, including substantial changes to eliminate connection
               and synchronization problems with certain modems.  The program now
               works with PC, XT, AT, PS/2, and better computers -- on serial ports
               1 to 4, at dialing speeds from 1200 to 38400 bps, with local modem
               speed locked or unlocked.  It automatically detects a PS/2 and
               assigns the correct COM3/COM4 port addresses for that type of
               computer.

          8.   Greatly reduced file size -- under 52 kbytes, less than half the
               combined total of 105 kbytes for TIMESET plus CONFIGTS in version 5.3
               and smaller than other programs that can call only one of the two
               services.

          9.   Completely redesigned displays to convey more information, plus the
               big running digital clock display that has always been part of the
               program.  TIMESET has always been a good-looking program, because
               esthetics and functionality go hand in hand.  This version is the
               most esthetically pleasing yet and by far the most functional.

          10.  Advance notice of time season changes.  Version 6.00A can notify you
               weeks in advance when a time season change is coming.  And each time
               you use it on succeeding days it can tell you the number of days
               remaining before the change actually takes effect.  On the eve of the
               season change it prints a special announcement to remind you that
               it's almost time to reconfigure for daylight or standard time.  On
               the day of the change it tells you, in effect, "If you haven't
               already reconfigured, you'd better do it now" (which you can do by
               merely pressing a function key, with simultaneous automatic
               adjustment of your clock).

          We think all these enhancements put version 6.00A of Professional TIMESET
          far ahead of any other program for computer timesetting.  TIMESET 6.00A is
          not a "bait" program intended to entice you to send away for something
          we're holding back that's more complete, more professional, and expensive.
          It IS the complete professional version.  Nothing has been held back.
          It's all here.  You already have the maximum product.  And it's still only
          $35.

                                            - iii -








                                       SHAREWARE NOTICE


          TIMESET Version 6.00A is a copyrighted commercial program developed and
          owned by Peter L. Petrakis (doing business as Life Sciences Software of
          Stanwood, Washington and formerly of Annapolis, Maryland) and is
          distributed as shareware.

          "Shareware" does not mean free and it does not mean public domain.
          Shareware is a method of software distribution that lets you try a program
          out and pass it along to others to try out.  Those who don't find the
          program useful are free to junk it (although they could pass it along to
          somebody else).  Those who like TIMESET, find it useful, and continue
          using it after a reasonable trial period of 21 days are expected to pay
          $35 for each copy in use (plus 8 percent sales tax for residents of
          Washington State).

          Payment makes you a registered user.  Registration for TIMESET version
          6.00A brings benefits of technical help by telephone, a printed manual, a
          disk copy of the program containing any recent changes, and a 20 percent
          discount on the next major upgrade.

          Organizations such as corporations, other enterprises, government
          agencies, educational institutions, etc. should not expect to pay $35 for
          a single copy of TIMESET then put more than one copy into use.  That is as
          unfair to an author as buying a single copy of his book and using the
          Xerox machine to duplicate it for the office staff.  Payment of $35 is
          required for each copy of TIMESET in use within an organization.  That's
          not unreasonable, and discounts are available for quantity.

          If your organization requires the formality of purchase order and invoice,
          don't let that be a deterrent to payment and registration; contact your
          purchasing agent then let us know the procedures.  We've worked that way
          with several organizations.  (Please contact us about a discount for
          organizational use of more than six copies.  The discounting rate will
          depend on how many additional copies your organization plans to use.)

          We concede that there is no practical way to make anyone pay for
          shareware.  Few shareware writers have the stomach for that sort of thing
          anyway. Shareware is an honor system.  And it's a valuable system that is
          bringing many high-quality programs at modest prices from talented people
          who work diligently to evolve and perfect their products.  It should not
          be exploited through abuse or forgetfulness.


          Toll-Free Registration by Modem -- using TSREGSTR

          Experience suggests that many people intend to pay for a shareware program
          they continue using.  But they postpone it.  Then they forget to do it.
          Eventually they might not even have the registration form and the address
          around anymore.  Because that's human nature, the TIMESET version 6.00A

                                            - iv -







          package includes a companion program, TSREGSTR, that lets you register by
          modem -- with the phone call paid by us.  It's simple, fast, and
          convenient, allowing good intentions to be carried out promptly before the
          memory cogs slip.  All you need to do is type in some information -- your
          name, address, phone number, etc. -- and press a key to send it to our
          electronic mailbox automatically.  A screen editor in TSREGSTR lets you
          move around freely in the data entry field so you can make any necessary
          corrections before pressing F10 to send the information.  Your phone
          number gives us a chance to call you back and confirm the order and take
          care of problems such as a garbled transmission.  We will then send you
          the latest version of TIMESET, a printed manual, and an invoice.

          It takes only a few seconds and the call is free, so there is no real
          reason not to do it if you keep and use TIMESET.

          To use TSREGSTR you need a 1200 or 2400 baud modem.  To keep this limited
          purpose program simple, we did not provide any support for serial ports
          other than COM1 and COM2 or for high-speed locked dialing (although
          TIMESET itself is much more versatile and can handle COM1-COM4 and locked
          or unlocked dialing speeds up to 38,400 bps).

          (NOTE:  If you pass the TIMESET version 6.00A package along to others,
          please be sure to include TSREGSTR.)

          If you prefer to register by mail, using a check or money order, please
          use the form at the end of this document.

          Our voice line, if you have any general questions about registration,
          licensing, quantity discounts, or the program's capabilities, is
          206-387-9788.























                                             - v -







                                         INTRODUCTION


          One of the least reliable components in any computer is the clock.
          Computer clocks are notoriously inaccurate, gaining or losing as much as
          several seconds a day, and it's not unusual for them to be off by minutes
          within a few weeks or even days after they are set.  This doesn't matter
          to everyone who uses a computer, of course, but it matters a great deal to
          a lot of people.  This includes businesses that need an accurate record of
          the time of data entry, sometimes for legal reasons.  Technological and
          research organizations need accurate time for numerous serious purposes
          related to physical measurements.  Radio and television stations and cable
          TV systems need a dependable source of time so they can switch in and out
          of networks or link up with remotes at the right time.  These and many
          other organizations have found previous versions of TIMESET not only
          useful but necessary.

            TIMESET is used in universities, NASA, the Jet Propulsion Laboratory,
          the Federal Communications Commission, Federal Aviation Administration,
          Veterans Administration, the military, police departments, municipal
          agencies, the Federal Reserve Bank of New York, commercial banks, power
          companies, Hewlett-Packard and similar high-tech companies, radio and TV
          stations, cable networks, and by computer bulletin board operators,
          satellite tracking hobbyists, professional and amateur astronomers, and
          many people who simply want to know the time is at least close to what
          their computer says it is.

            There are many TIMESET users of all kinds in the United States and
          abroad who are dismayed that the clock in their expensive computer, which
          is driven by a high-frequency crystal-controlled oscillator, cannot keep
          time nearly as well as a ten dollar wind-up watch from K-Mart.  They think
          a computer should provide a standard for setting other timepieces, not the
          other way around, and they are right.  Nor are all of them necessarily
          interested in split-second accuracy for their computer clocks; many users
          simply want a convenient way to set their computer to a standard they know
          is right.  TIMESET provides that convenience, and the Naval Observatory
          and NIST clocks are as right as any clocks can be.

            The first version of TIMESET was released to computer bulletin boards in
          July 1987.  It was to be the only version (it didn't even have a version
          number), but the response was astonishing.  Phone calls came day and
          (alas) night from people all over the country who were either delighted
          with the program or had problems getting it to work with their systems,
          particularly their modems.  That interest has stimulated continued
          development ever since, and successive versions have been released to make
          the program work reliably for more and more people and to add new
          features, many of them suggested by users.  It was very gratifying to see
          Version 5.3, the most recent version until now, written up by PC/Computing
          Magazine in its October 1990 issue in an article devoted to good ways to
          enhance a DOS computer's operating environment.



                                             - 1 -







            Version 6.00A is a top-to-bottom revision that includes, for the first
          time, the ability to get atomic time from either of the world's two
          preeminent sources for timing by telephone -- the National Institute of
          Standards and Technology (NIST) and the U.S. Naval Observatory.  There are
          programs,including previous versions of TIMESET, that can call one or the
          other of these two services, but TIMESET 6.00A so far appears to be the
          only one that can dial both of them (we expect to be corrected if that's
          not right or ceases to be so) and make full use of the capabilities of
          each.  Thus users from one end of the country to the other can now reduce
          phone costs by using the nearest service.

            Users of previous versions will notice numerous other changes.  The
          program looks and feels completely different.  Though it has more
          features, it is much smaller on disk.  Configuration procedures are now
          built into the program itself (there is no external configuration data
          file and no external configuration program) and are very easy to do.  You
          can enter configuration mode at any time to change things by pressing a
          function key at the main menu.  Help for each configuration item is
          available by pressing another function key when the item is highlighted on
          the configuration screen.

            You can now toggle between standard and daylight time configuration by
          pressing a function key at the main menu -- and it simultaneously sets the
          computer clock one hour earlier or later depending on the season.  You can
          generate a usable pulse for synchronizing an external device at the
          instant of timesetting by pressing another function key before dialing.
          Command line options are displayed by typing TIMESET followed by a space
          and a question mark at the DOS command.  A quick overview of internal
          command options is available by pressing a function key at the main menu.
          Finally, TIMESET 6.00A can measure and correct for line delays with either
          the Naval Observatory or the National Institute of Standards and
          Technology.


                                         CONFIGURATION


          Because configuration data for TIMESET 6.00A are written directly to its
          source file on disk, the program needs to know where its source file is;
          it reads its configuration each time it's loaded and each time you change
          the configuration.  With DOS versions 3 and up it's no problem; those
          versions allow TIMESET to find out where it came from, making it possible
          to configure or run the program from any drive and directory on the system
          path (which is set up with the DOS PATH command).  That's not the case
          with earlier versions of DOS.  With those DOS versions, TIMESET 6.00A
          needs to be told where its source file is.  That's done by using the DOS
          SET command to put its location in the DOS environment, like this:

                          SET TIMESET=[drive]:\[directory\]TIMESET.COM

            The drive, directory (if any), and ".COM" are essential.  If you're
          using a version of DOS earlier than 3.0 and are going to be using TIMESET

                                             - 2 -







          6.00A regularly, it makes sense to put that command in your AUTOEXEC.BAT
          file, which should also include a path to its location using the PATH
          command.  Otherwise you'll always have to be in the drive and directory
          where TIMESET is located before you can use it.

            THIS IS IMPORTANT!!:  If the copy of TIMESET version 6.00A that you
          received has never been configured before, it will automatically load in
          configuration mode so you can tailor it to your own system.  If you got it
          from a computer bulletin board, however, the chances are it will have
          already been configured, probably by the bulletin board operator who
          tested it before making it available for downloading or by the person who
          uploaded it to the bulletin board.  In that case, it will load in
          operating mode.  In fact, if it was configured to run in non-prompted
          (automatic) mode it will immediately start dialing.  For this reason, if
          you obtained TIMESET 6.00A from a computer bulletin board or other
          indirect source, you should put /C on the command line the first time you
          run it, like this:

                                          TIMESET /C

          This will force the program to go to configuration mode as soon as it's
          loaded so you can tailor the configuration to your own system.  Using /C
          will not be necessary if your copy of TIMESET 6.00A came directly from
          Life Sciences Software, because we do not preconfigure the program before
          shipping it.

            The configuration screen comes up with values for phone numbers, time
          season, serial port, baud rate, etc. already listed.  Please understand
          that if TIMESET 6.00A has never been configured before, those values are
          not yet in the program file's configuration field; they are what WILL be
          written to that field if you press F10.  On the other hand, if TIMESET has
          already been configured, they represent the actual current configuration
          that the program read from its own disk source.

            After the program has been configured, you can always enter
          configuration mode to check or change your settings by pressing F2 at the
          main menu.  If you are just checking and not changing anything, you don't
          have to press F10 to resave what's on the screen.  Instead, you can get
          back to the main program by pressing F2 again.  If you make a change, you
          should of course press F10 to save it.

            If you are configuring for the first time and the values you see are
          what you want, press F10 to save them to TIMESET.COM on your disk.  There
          is a good chance, however, that you'll need to change some of the default
          values so they'll correspond to your actual computer/modem setup.  That's
          what configuration of version 6.00A is mostly about -- changing
          configuration values that are already displayed.  It's very easy to do,
          and it's likely that you'll only need to make minor changes in two or
          three items.

            Each configuration item has its own help screen, which can be displayed
          by pressing F1 when that item is highlighted.  The highlighting can be

                                             - 3 -







          moved up or down by pressing the up or down arrow key on your keypad.
          Before doing any configuring, we strongly recommend that you use the up
          and down arrow keys to go through the entire list of configuration items
          one by one and press F1 to get the help screen for each.  That will give
          you a good overview of what the configuration procedure is about.  The
          help screens collectively amount to an online configuration manual.  In a
          way, they ARE the manual, because few particulars are discussed here.
          Version 6.00A has been designed to reduce the need to consult a printed
          manual to the minimum.  As result, this manual can devote more attention
          to some theoretical matters that are worth knowing about.

            Everything is done on a single screen, mostly by pressing the right,
          left, up, and down arrow keys on your keyboard.  Pressing the up or down
          arrow key highlights a new configuration item.  The right and left arrow
          keys toggle the options that are available for a given configuration item.
          For example, on the configuration line for baud rate, you can go upward
          from 1200 baud -- 1200, 2400, 4800, etc. -- to 38400 baud by repeatedly
          pressing the right arrow key.  Pressing the left arrow key takes you in
          the opposite direction.

            Only four of the configuration items involve typing anything, and even
          that might not be necessary if the default or preexisting settings for
          those items are what you want.  Three of the items that may require typing
          or editing pertain to telephone numbers, the fourth pertains to the user's
          modem initialization string.  All the other items are toggled with the
          right-left arrow keys.  To change the phone numbers or the modem
          initialization string, you have to get into editing mode.  That's done by
          pressing Return when the editable configuration line is highlighted (a
          message also appears telling when a line can be edited).  In editing mode
          you can insert characters or delete or type over existing characters.  A
          description of editing functions (inserting, overstriking, deleting,
          cursor movement, etc.) pops onto the screen at the right as soon as you
          press Return, so not much needs to be said about them here.

            For example, the default phone number for the Naval Observatory is shown
          as 12026530351.  If you live in Washington, D.C., the Naval Observatory is
          a local call and you obviously need to get rid of 1202.  You do that by
          scrolling to the appropriate line with the up or down arrow key, pressing
          Return, pressing the Delete key four times, then pressing Return again.
          Or suppose your company requires you to add an account number to the end
          of a long-distance phone number when you dial out.  Scroll to the phone
          number, press Return, press the End key to move the cursor to the end of
          the phone number, type in your account number, and press Return again.
          Insert a comma to generate a pause if you need one.  The default pause in
          virtually all modems is 2 seconds for each comma.

            (IMPORTANT:  Please just modify  the phone numbers that are there, and
          NEVER configure to dial our phone number.  The program will refuse to run
          if you put our number in it, and we don't have an atomic clock anyway.)

            Editing works the same way for the user's modem initialization string.
          It's especially important to study the help screen for that one, because

                                             - 4 -







          it has some crucial information about what to use with different types of
          modems.

            Configuration for the type of clock in your computer is a special topic
          and is discussed in the next section.

            Be sure that no configuration fields are left blank and none contains
          the word "(edit)".  The word "(edit)" appears on a couple of the editable
          configuration items when you press the right or left arrow key enough
          times.  When you see it, you are supposed to get into editing mode and
          replace it with actual configuration data.  Rest assured that the program
          will not work properly if configuration fields are left blank or contain
          "(edit)".

            When you've checked or changed all the configuration items and are
          satisified that everything is correct, press F10 to save the configuration
          to TIMESET's source file on disk.  As soon as the configuration is saved,
          the program jumps into operating mode, reads its new configuration, and is
          ready to call either of the time services.



                                      CONFIGURING TIMESET
                                      FOR HARDWARE CLOCKS

          Every computer comes equipped with at least one clock, called the DOS
          clock/calendar, which can be read or set with the TIME and DATE commands
          in DOS or by a program such as TIMESET.  Its major limitation is that it's
          volatile; that is, the time and date settings are lost whenever the
          computer is turned off, and both have to be reset each time the computer
          is restarted.

            Because of this volatility, battery-powered clocks have been developed
          to maintain the current time and date while the computer is off and pass
          them to the DOS clock/calendar when the computer is turned back on.  There
          are three kinds of nonvolatile clocks:  (1) the CMOS clock found on the
          motherboards of AT and later computers, (2) add-on clocks that plug into
          an expansion slot in the computer, and (3) so-called slotless clocks that
          plug into a socket under the ROM chip or some other socketed chip.
          TIMESET can work with nearly all of the first and second types, but not
          with the third.


          "Slotless Clocks" and Tandy's SmartClock

          TIMESET can work with CMOS clocks and most add-on clock boards.  However,
          it will not work directly with Tandy's SmartClock nor with slotless
          clocks.  With those clocks you'll have to configure to set the DOS
          clock/calendar with TIMESET then later on use your own clock's software to
          reset the add- on clock.



                                             - 5 -







          CMOS Clocks

          Depending on the version of DOS that is installed in a computer, a CMOS
          clock may need special software to be reset or to make it update the DOS
          clock/calendar.  With DOS 3.3 or later, you need no special software,
          because those DOS versions automatically adjust the CMOS clock when you
          change the DOS clock/calendar; changes made in the DOS clock/calendar are
          simultaneously made in the CMOS clock as well.  That automatic
          synchronization doesn't occur with DOS versions earlier than 3.3, however.

            Therefore, if your computer has a CMOS clock, the version of DOS you're
          using will determine how to configure TIMESET 6.00A for clock type.  If
          it's DOS 3.3 or later, you should configure TIMESET to set only the DOS
          clock/calendar, because the operating system will automatically update the
          CMOS clock when TIMESET changes the DOS time and date.  If you have an
          earlier version of DOS, you will have to configure TIMESET 6.00A so it can
          directly set both the DOS clock/calendar and the CMOS clock, thus
          eliminating the need to run DOS's SETUP program.  You can select the
          correct option by using the right or left arrow key in configuration mode.
          If you need help, press F1 while that item is highlighted.


          Expansion Slot Add-On Clocks

          Add-on clocks that plug into expansion slots present a mixed situation.
          Some require you to run a special program each time you want to update the
          DOS clock/calendar from the add-on clock or update the add-on clock from
          the DOS clock/calendar.  Others come with a memory-resident program or
          driver that takes care of these time adjustments between the two clocks
          automatically, making them behave very much like the CMOS clock under DOS
          3.3 or higher.  Configuring TIMESET 6.00A for these add-on clocks
          therefore depends on the kind of software that comes with the clock.

            Better known brands of add-on clocks these days come with memory-
          resident software to keep the add-on clock and the DOS clock/calendar
          synchronized automatically.  An example of such a program is ASTCLOCK, for
          managing the clock on AST's Six-Pack multifunction board.  Running
          ASTCLOCK with the /R switch on the command line (ASTCLOCK /R) makes it
          memory-resident so it can automatically keep the two clocks synchronized.
          If your add-on clock came with a memory-resident driver program or a
          driver that goes in your CONFIG.SYS file, install that driver and
          configure TIMESET to set only the DOS clock/calendar.  Your driver
          software will take care of resetting the add-on clock when TIMESET sets
          the time and date in the DOS clock/calendar.


          Using CLKDRV10.SYS with Board Clocks

          There are a number of slot-type add-on clocks that do not come with
          memory-resident software and therefore can't pass time and date changes
          back and forth between the two clocks automatically.  These clocks, with
          mail-order prices ranging from $7.50 to $15, have obscure brand names and

                                             - 6 -







          often no brand name at all.  Despite their low cost and generic nature
          they hold accurate time surprisingly well.

            The major limitation of these cheap add-ons is lack of memory-resident
          software to allow automatic movement of time and date between the two
          clocks.  Instead they require you to run a special program to update the
          add-on clock each time you change the time or date in DOS (e.g.,
          SETCLOCK), or to update the DOS clock/calendar from the add-on clock
          (e.g., GETCLOCK).  With some of these clocks, both functions are handled
          by a single program, with the desired function chosen with a command line
          switch.  Having to go into DOS to run external programs like these is
          utterly impractical for a program like TIMESET, which requires timesetting
          to occur in both clocks at virtually the same instant for maximum
          accuracy.  Furthermore, some of them insist on prompting for the time,
          which of course means the time will be wrong no matter how fast a typist
          you are.

            For people with these obscure brands and that clumsy kind of software,
          the TIMESET 6.00A package includes a small driver called CLKDRV10.SYS,
          written by Tom Strickland of Alexandria, Virginia.

            To use it, put the driver in your boot directory and the following line
          in your CONFIG.SYS file:

                                    device=clkdrv10.sys

          Loading CLKDRV10.SYS in effect erases the barrier between your DOS
          clock/calendar and your add-on clock and eliminates the need for any other
          software to manage the two clocks and keep them synchronized.  Thus, if
          you change time or date in DOS, CLKDRV10.SYS sees to it that the add-on
          clock gets the same change, and if you ask for time or date in DOS or a
          program, CLKDRV10.SYS automatically updates the DOS clock/calendar from
          the add-on clock an instant before DOS displays the time or date.  With
          CLKDRV10.SYS installed, you must configure TIMESET to set only the DOS
          clock/calendar, and let CLKDRV10.SYS take care of updating the add-on
          clock.

            CLKDRV10.SYS is designed to work with board-type add-on clocks that have
          a base clock address of 240h, 2C0h, or 340h, and it automatically checks
          to see which of those ports is being used by your clock.  Nearly all
          expansion slot add-on clocks use one of those three base addresses, and
          some of them allow you to choose between at least two of them by means of
          a jumper on the clock board.  If your clock does not use one of these
          three port addresses (which is possible but infrequent), CLKDRV10.SYS will
          not load and you will have to be content with letting TIMESET adjust only
          the DOS clock/calendar.

            If you install CLKDRV10.SYS, you should put your clock's regular
          software aside, because CLKDRV10.SYS has its own method of managing the
          add-on clock.  You won't need your original software anyway, because
          CLKDRV10.SYS makes your add-on clock directly accessible through the DOS
          TIME and DATE commands or from any program. CLKDRV10.SYS is mainly for

                                             - 7 -







          people whose add-on clock did not come with its own memory-resident driver
          program.  If your add-on clock came with its own memory-resident software,
          use it rather than CLKDRV10.SYS.

            It's important to know when not to use CLKDRV10.SYS.  You should NOT use
          it when: (1) your computer has a CMOS clock, or (2) you have an add-on
          clock board that came with its own memory resident software to accomplish
          what CLKDRV10.SYS does, or (3) you have only the DOS clock/calendar and no
          battery-powered clock board at all.  Under no circumstances should you
          load both CLKDRV10.SYS and another driver that accomplishes the same thing
          -- the two drivers will get into a contest that could paralyze the system.

            Also, CLKDRV10.SYS will be of no help if you have Tandy's SmartClock or
          a "slotless" clock.  (The manufacturers of those clocks should be
          pressured to develop their own memory-resident drivers for them.)



                                      RUNNING THE PROGRAM

                                   OPTIONS AT THE MAIN MENU

          Dialing

          If you configured for interactive mode, dialing starts when you press W,
          Alt-W, B, or Alt-B.  W stands for Washington (Naval Observatory) and B
          stands for Boulder (NIST).  Pressing W or B alone gets the time without
          any adjustment for measured line delay.  In combination with the ALT key,
          pressing W or B gets the time with a line delay adjustment from Washington
          (Alt-W) or Boulder (Alt-B).  Line delay measurements are discussed in more
          detail later on.

            If you configured the program to run in noninteractive mode (no
          prompts), you won't have to press any keys; TIMESET 6.00A will load,
          immediately dial the time service you chose, set the time, and exit to
          DOS.  The choice of interactive or noninteractive mode is yours.  If you
          plan to have TIMESET in your AUTOEXEC file so it can update you computer
          clock during the boot- up process, it's best to configure for
          noninteractive mode so timesetting will be automatic and booting can
          continue after the clock has been set.  TIMESET skips the main menu when
          it's in noninteractive mode and there are no pauses for input.


          Standard and Daylight Time

          One way to switch between daylight and standard time is to press F2 at the
          main menu to get into configuration mode, scroll down to the time season
          line, toggle daylight or standard with the right or left arrow key, and
          press F10 to save the change.  You'll need to do it that way during
          initial configuration since you are automatically put into configuration
          mode when you run a fresh copy of TIMESET 6.00A, and the program won't run
          until it's fully configured.  However, after you have configured the

                                             - 8 -







          program and it's time to reconfigure for daylight or standard time there
          is a very simple way to do it from the main menu:  just press F7.  That
          will not only change change the configuration, it will simultaneously
          reset your computer clock for the new season.  You should do that
          reconfiguration before dialing one of the time services on the day the
          time season changes.


          Monitor Color

          Although you can specify color or monochrome display during configuration,
          a function key toggle is also available at the main menu for controlling
          monitor color.  Pressing F8 at the main menu switches the display between
          color and monochrome.  You may need to force monochrome display this way
          if you run TIMESET 6.00A on a laptop computer that shows colors as shades
          of "grey"; some colors have poor contrast on certain laptops.


          Pulse Generation

          F9 is a special key that will probably not be needed by many people.
          Pressing it at the main menu allows a single pulse to be generated at pin
          1 of the parallel printer port at the instant of timesetting.  The pulse
          can be used to synchronize external devices, which could include
          specialized (and expensive) clocks.  It can also be used for calibrating
          instruments.  According to the NIST, its time mark typically has
          repeatability of about 1 ms from day to day when obtained with line delay
          correction.  This allows the delay-corrected pulse generated by TIMESET to
          be used in combination with a digital counter to check or calibrate an
          oscillator with high accuracy.  The uncertainty would be on the order of 1
          part in 100 million for oscillation counts at 1/second made a day apart
          (0.001 second repeatability divided by 86,400 seconds/day).

            For reference, here are the characteristics of the pulse:

                   Change:  ~5 volts
                Direction:  from ~+5 volts to 0 volts (relative to pin 25)
                 Duration:  ~55 ms (controlled by the system timer)

          Depending on the external device's requirements, it may be necessary to
          invert the pulse or modify it in other ways with appropriate electronic
          circuitry (which is beyond the scope of this manual).

            A companion program, PULSEGEN, is available for $15 from Life Sciences
          Software for generating continuous pulsing at the parallel port at 1/min,
          1/sec, 10/sec, or 100/sec with any computer, and up to 1000/sec with
          computers equipped with slot-type add-on clocks using base I/O port
          addresses of 240h, 2C0h, 340h, or 3C0h and capable of millisecond
          resolution (probably all such clocks are, although their port for
          thousandths is usually not used since the DOS clock resolution is no
          better than 0.01 sec).  The pulse widths produced by PULSEGEN depend on
          CPU speed and are in the order of microseconds; i.e., no intentional delay

                                             - 9 -







          is inserted between pulse on and pulse off.  The running time display is
          to three decimal places and is written directly to the video buffer for
          maximum speed.  If the computer clock has been freshly set with TIMESET,
          the pulses, which can be used for driving external devices continuously,
          will occur approximately in real time, subject to clock drift.

            Pulses should not be generated at the parallel port if a printer is
          attached.


          Changing the Configuration

          If TIMESET 6.00A is configured for interactive operation and you need to
          change or check the configuration, press F2 at the main menu to get the
          configuration screen.  If you make any changes, be sure to press F10 to
          save them, otherwise you can press F2 to go back to the program without
          making any changes.  Getting to the configuration screen can require an
          extra step if you have already configured TIMESET to run in automatic
          mode, because it then bypasses the main menu and starts dialing as soon as
          you run it.  In that case you can press the Backspace key to interrupt
          dialing and go to the main menu, where you can press F2 (there's plenty of
          time to do that before the call goes through).  A better alternative is to
          load TIMESET 6.00A with /C on the command line, which forces it to come up
          in configuration mode so you can make your changes.


          Additional Help

          Pressing F1 at the main menu brings a help screen that summarizes your
          keyboard options within the program.  There are also some command line
          options for TIMESET 6.00A, including options for temporarily overriding
          some of the configurations or delaying dialing until a specified time.
          You can see these command line options by typing TIMESET ? at the DOS
          prompt.



                                     THE TIME DATA STRINGS


          The data strings from the Naval Observatory and the National Institute of
          Standards and Technology have a few similarities and several differences.
          The pattern for both services is a string of data that announces the next
          second, followed by a brief pause, then a character that marks the second.
          This goes on endlessly, every second, 24 hours a day, year round.  When
          you are connected to either service with TIMESET 6.00A these data strings
          will be displayed on your screen as they are received for as long as it
          takes to get a clean data string to set your computer clock.  With clean
          lines and no line delay measurement, that's about 2 or 3 seconds with the
          Naval Observatory and about 5 or 6 seconds with the NIST.  If you request
          line delay measurement, it takes about 11 seconds online with the NIST and
          about 21 seconds with the Naval Observatory.  These times will increase if

                                            - 10 -







          there is a lot of noise on the phone lines, because TIMESET will reject
          data strings that are corrupted by noise and don't match the required
          pattern.

            Both services limit your time online.  The Naval Observatory gives you a
          maximum of 60 seconds.  The NIST gives you up to 55 seconds but will
          reduce that to 15 seconds if the service is in heavy use.  Except for
          extremely noisy lines (which may indicate a problem with your own phone
          system), these times are more than adequate for TIMESET 6.00A.


          The Naval Observatory's Data String

          The pattern of the Naval Observatory's time data string is:

                                 JJJJJ DDD HHMMSS UTC (pause) *

               JJJJJ is the last five digits of the julian day, which is simply a
               count of the number of days since January 1, 4713 B.C.  The first two
               digits, 24, are left out because they will not change for a long time
               to come (140 years or so) and can be assumed in calculations.
               TIMESET uses the julian day to calculate the current month, day of
               the month, and year.

               DDD is the day of the year (number of days since December 31 of the
               previous year).  It is only displayed by TIMESET, at the final
               screen.

               HHMMSS is what the hours, minutes, and seconds will be when the time
               mark -- the asterisk (*) -- is sent.

               UTC stands for Universal Time Coordinated, and it means that the
               values for julian day, day of the year, and the time all apply to 0
               degrees longitude, the longitude of the Royal Observatory at
               Greenwich, England.  TIMESET corrects these values for your time zone
               and season before setting your computer clock (unless you want your
               computer on universal time, which is desired by some in the aviation
               industry and the military, for example, and have configured TIMESET
               for it).


          The NIST's Data String

          The NIST time data string is more complex:

            JJJJJ Yr-Mo-Da HH:MM:SS Sn L UT1 msADV UTC(NIST) (pause) * (or #)

          Again, UTC means the time and date values all pertain to Greenwich,
          England.




                                            - 11 -







               JJJJJ means exactly what it means in the Naval Observatory string.
               Unlike the Naval Observatory, the NIST does not provide the day of
               the year, but TIMESET 6.00A calculates it from this number and
               displays it on the final screen.

               Yr-Mo-Da means current year, month, and day of the year.

               HH:MM:SS means hours, minutes, and seconds.

               Sn is a two-digit number that indicates whether the continental
               United States is on standard or daylight saving time or is
               approaching daylight or standard time.  Except for a 48-day period
               before a time season change, the number is either 00 (standard time)
               or 50 (daylight time).  In the fall, the number begins to decrement
               daily, starting 48 days before standard time officially begins in
               late October, when it reaches 00.  In the spring, 48 days before
               daylight saving time officially begins, the number jumps to 98 then
               decrements daily until it reaches 50, indicating that daylight saving
               time is in effect.  During the periods when Sn is decrementing,
               TIMESET 6.00A prints a special message on its final screen announcing
               the number of days (including the current day) before the time season
               is due to change in the continental United States (the days are based
               on UTC).  At all other times it displays the current time season in
               the continental U.S. on the final screen.

               L is a flag that indicates whether a leap second will be added or
               subtracted at midnight on the last day of the current UTC month to
               compensate for irregularity in the earth's rotation.  If a leap
               second is to be added, the number is 1.  If L is 2 it means that a
               second will be subtracted at midnight on the last day of the current
               UTC month, but the NIST says a negative leap second is not likely to
               occur any time soon.  The L flag is on for the entire month before a
               second is added or subtracted, which will usually be in June or
               December.  Most of the time the L flag is set at 0, meaning no
               change.  The flag is merely an announcement and is not needed by
               TIMESET 6.00A.

               UT1 is a correction factor for converting UTC to an older form of
               universal time that is still used in navigation.  It is the tenths of
               a second to be added or subtracted from UTC and is preceded by the
               appropriate sign.  It is only displayed by TIMESET 6.00A.

               msADV is the NIST's line delay correction and is discussed as a
               separate topic in the next section.









                                            - 12 -







                                    LINE DELAY MEASUREMENTS


          It is physically impossible for the time mark character at the end of the
          data string to arrive at the same instant it leaves the time source.
          There is always a delay, and it is the sum of three components:  (1) the
          time it takes for data bits moving at the speed of light to travel the
          distance between the time source and your computer, plus (2) the time it
          takes for the time source's modem to serialize and send the time mark
          character, plus (3) the time it takes your modem to process the incoming
          data and feed it to your computer.  With land line communication in the
          continental United States, the time the signal spends traveling between
          the modems is almost negligible compared to the processing delay that is
          inherent in modems.  With a satellite link, however, the time the signal
          spends traveling becomes very significant and accounts for most of the
          lag.

            Both the NIST and the U.S. Naval Observatory are equipped for
          measurement of line delay, but each uses a different method.  TIMESET
          6.00A can handle either method.  When TIMESET 6.00A asks for line delay
          measurement from the NIST, the NIST itself measures the delay and advances
          the departure of the time mark to compensate so the mark arrives on time.
          However, with the Naval Observatory, TIMESET 6.00A itself measures the
          line delay by means of a remote digital loopback test, in which the
          program sends a stream of characters to the Naval Observatory and measures
          the time for the Naval Observatory's modem to echo them back.  It then
          captures a time data string and adds the measured one-way delay to the
          time as a correction before setting your computer's clock.

            Notice the essential difference in methodology here:  delay measurements
          with the Naval Observatory are made by TIMESET; delay measurements with
          the NIST are made by the NIST.

            Because of limitations in standard computers, the line delay
          measurements the NIST makes are inherently more precise than the ones
          TIMESET 6.00A makes with the Naval Observatory.  The NIST's equipment can
          measure line delay to the tenth of a millisecond.  In contrast, TIMESET
          must round the line delay it measures with the Naval Observatory to the
          nearest 0.01 sec since that's the smallest unit of time that a standard
          computer can accept as a correction.  This is a 100-fold difference in
          precision.  It's important to realize, however, that this difference in
          precision has absolutely no effect on the accuracy of timesetting in your
          computer.  Precision and accuracy are not the same thing.  Furthermore,
          the "granularity" in computer clocks, which is based on the ticking rate
          of the system timer (18.2 times per second), limits the accuracy with
          which they can be set to within about 0.055 sec of true time, which means
          that timesetting accuracy ends up the same with either service.  (Delay
          correction and accuracy are discussed in more detail later.)





                                            - 13 -







          Line Delay Correction by NIST

          msADV in the NIST's data string is the milliseconds (ms) that the
          departure of the time mark was advanced to compensate for line delays.  If
          no line delay measurement is requested, the NIST routinely advances the
          departure of the mark by 45 ms (0.045 sec), which is displayed in the data
          string as 045.0.  The standard 45 ms is an estimated value for the United
          States that includes the 8 ms it takes to send all the bits of the time
          mark character at 1200 baud, plus an assumed 7 ms for travel from the NIST
          to the average user in the United States, plus 30 ms to compensate for the
          inherent delay in 1200 baud modems (the modem delay is an average value
          for several modem brands).

            If an actual line delay measurement is requested by initiating the call
          with Alt-B, the NIST itself calculates the delay, then advances the
          departure of the time mark to compensate for the measured one-way lag so
          the time mark can arrive at your computer at the right instant.  As soon
          as the NIST has measured and adjusted for line delay, the time mark
          changes from an asterisk to a pound sign (#).  TIMESET watches for the
          pound sign and sets the computer clock the instant it is received.

            The NIST says that if your modem has the same internal delay as theirs,
          you should receive the # time mark within +-2 ms of the correct time.  If
          it does not have the same internal delay, the mark should arrive within
          +-10 ms of the correct time, with different modem brands varying within
          that range.  Repeatability of line delay correction is excellent,
          typically within 1 ms from day to day according to the NIST.  Accuracy of
          setting the time in your computer is another matter, however, and is
          discussed separately below.

            The measured line delay is likely to be slightly larger than the
          estimated 45 ms that the NIST routinely uses when you don't request an
          actual measurement and are using land lines, and it's much larger if the
          communication is by satellite.  It will be influenced by the speed of your
          computer's CPU in echoing characters to NIST as well as by distance and
          the characteristics of your modem.  With a Hayes Smartmodem 2400 and a
          computer running at 8 Mhz, the delay measured between the Seattle area and
          Boulder, Colorado is always around 62 ms (0.062 second).  Beta testers
          using TIMESET 6.00A in New Jersey, Maryland, and Illinois with 20-25 Mhz
          386 computers and different modem brands have reported delays around 54
          ms.  A tester in Alaska, with a 386 computer and a U.S. Robotics modem
          reported a delay of just over .3 second, a magnitude of delay that
          indicates a satellite link.  Our tests show that the measured line delay
          is also affected by the choice of long distance carrier.  The delay is
          consistently greater with MCI than with AT&T -- about 62 and 54 ms
          respectively calling from the Seattle area with a land line link in each
          case.  The accuracy of setting is the same in either case, however, since
          the NIST adjusts for the lag it measures.

            In the usual, bidirectional, satellite link, the one-way signal delay is
          in the range of 260 to 300 ms (.26 to .3 seconds).  The communications
          satellites are parked in stationary orbits about 26,000 miles from earth,

                                            - 14 -







          which requires the NIST's time mark to travel 52,000 miles or more to
          reach the caller's computer.  This alone takes over a quarter of a second
          with the signal traveling at the speed of light (186,000 miles/sec).
          Modem processing adds further delay.

            There is one situation where the NIST is unable to report a line delay
          measurement.  That is when the path is by satellite (a long path) in one
          direction and by land line (a shorter path) in the other.  In that
          situation, which the NIST detects by a delay measurement of 90-260 ms, it
          is impossible to know whether it's the long path or the shorter one that
          is carrying the time signal to the user, so a delay adjustment can't be
          applied; the NIST time mark remains an asterisk and the standard 45 ms
          advance is used.  According to the NIST, a split-path transmission like
          this is rarely used by telephone services.


          Line Delay Correction with the Naval Observatory

          If you dial the Naval Observatory without asking for line delay
          measurement, TIMESET 6.00A will routinely add 50 ms (0.05 sec) to the time
          it feeds to the computer clock.  This value is close to the standard 0.045
          sec time mark advance the NIST makes when no actual line delay measurement
          is requested, has the same purpose, and includes the same estimated delay
          elements (see first paragraph in the preceding section).  Why is the
          estimate for the Naval Observatory 0.05 second instead of 0.045 second?
          The answer is that it's impossible to set a computer clock to the third
          decimal place; 0.045 sec must therefore be rounded up to 0.05 sec.  The
          practical effect of this rounding up is nil; if you dial the two services
          alternately and in quick succession without requesting line delay
          measurements, the before/after time readings on the final screen will
          usually agree within 0.01 sec. each time.

            Actually, it makes sense to have the default line delay correction
          slightly larger for the Naval Observatory since Washington, D.C., on the
          east coast, is farther away from the statistical population center of the
          nation than more centrally located Boulder, Colorado.  The default
          correction will therefore be about right most of the time for most users
          in the United States. An actual line delay measurement for Naval
          Observatory data is made by means of a remote digital loopback test, which
          not all modems can do.  Even if your modem can do remote digital loopback
          testing, if it doesn't use the &T6 command to initiate the test and the
          &T0 command to terminate it, you will not be able to make this measurement
          with TIMESET.  An example of a modem that can do remote digital loopback
          but uses commands other than &T6 and &T0 is the U.S. Robotics HST.  There
          is no reliable way for a program to detect a modem's ability to handle &T6
          and &T0, so it's up to you to check your modem manual to see if you can do
          it.  If you ask for remote digital loopback and your modem can't do it,
          you'll just sit there online wasting money and accomplishing nothing until
          the Naval Observatory hangs up on you or until you press the backspace key
          to hang up and go back to the main menu.  People with such modems who need
          line delay measurement should use the NIST's service.


                                            - 15 -







            In a remote digital loopback test, TIMESET instructs the local modem to
          send a request for the test to the Naval Observatory's modem.  This
          conditions the Naval Observatory's modem to echo back characters that
          TIMESET sends it.  TIMESET 6.00A calculates the one-way line delay by
          measuring the time it takes for 10 characters to travel to the Naval
          Observatory and return.  When 10 characters have been sent and echoed
          back, TIMESET turns off the remote digital loopback test, calculates the
          average lag per character, reverts to normal operation, and grabs one of
          the Naval Observatory's regular time data strings.  The calculated one-way
          line delay per character, rounded to the nearest 0.01 sec, is added to the
          zone- and season-adjusted time just before it is sent to your computer's
          clock.


          When Should Line Delay Measurement Be Used?

          The idea of being able to measure and correct for line delay so you can
          set your computer clock with maximum accuracy is fascinating to many
          people.  It intrigues us, too, which is why we worked very hard to
          incorporate that feature in TIMESET for both time services.  However, it
          has the potential of being overused or used unnecessarily.

            A major purpose for measured line delay adjustment is for satellite
          communications, where line delay is a significant factor.  For ordinary
          purposes within the continental United States, where telephone
          communications are virtually always by land lines, the default standard
          estimates should normally be adequate, because they are so close to what
          can be obtained by actual measurement.  For example, TIMESET's built-in
          default estimate of line delay for the Naval Observatory's signal is 0.05
          seconds, whereas the measured delay from Washington, D.C. to Seattle,
          Washington is typically around 0.0700 -- a difference of 0.02 sec., and
          usually less.  Similarly, the standard estimated line delay the NIST
          provides is 0.045 second, whereas the NIST's measured delay between
          Boulder, Colorado and Seattle is typically around 0.062 sec --less than
          0.02 second difference.

            These are very small discrepancies that are so close to the smallest
          time unit that can be read with a computer clock (0.01 sec) that they are
          hardly worth worrying about.  If you want to see how small 0.02 second is,
          try reading numbers in the second decimal place in one of TIMESET's
          running time displays.  You can't.  They change so fast that they blend
          into each other.  We included the second decimal place in those displays
          just to remind you how unimportant 0.02 sec is for most purposes and to
          persuade you that there's no sense in going overboard with line delay
          measurements.  Why go to all that time and trouble for a a couple
          hundredths of a second more accuracy when your computer clock could drift
          that much in the next several minutes?  Furthermore, computer clock
          updating can take place only when the system timer ticks, every 0.055 sec,
          which means you can only be confident that your clock is set somewhere
          within 0.055 second of true time, a range of error nearly three times
          larger than that extra 0.02 second of accuracy you're striving for.
          Clearly, measured line delay is useful only with satellite communications,

                                            - 16 -







          where line delays are substantial, or for calibrating external equipment
          in real time.

            Another thing to consider with line delay measurement is the extra time
          on line that it requires, as indicated in the following table:



                           Connect time typically required (seconds)
               ------------------------------------------------------------
                    Delay measurement              No delay measurement
               -----------------------------      ---------------------------

          Naval Observatory   21                            2

          NIST                12                            6


          The size of these connect time differences suggests that if a lot of
          people get in the habit of doing pointless line delay measurements they
          will effectively reduce the capacity of these services.  The result for
          everybody could be a lot of frustrating busy signals.

            Be scientific.  Use it sensibly.


          A Note About MNP Modems

          TIMESET 6.00A will work if you are using an MNP modem and it's initially
          set for MNP error checking.  However, MNP isn't needed because neither the
          NIST nor the Naval Observatory uses it.  Furthermore, tests show that MNP
          action can increase the line delay that is measured by the NIST, since it
          delays the return of echoed characters at the same time the NIST is
          measuring the echo time to determine one-way line delay.  This should not
          affect accuracy, because the delay is real and the NIST adjusts the
          departure of the time-mark character to compensate for it if you request
          line delay measurement.  Still it's something you need to know about.  If
          you don't request line delay measurement and use MNP, the nominal 45 ms
          standard advance used by the NIST, or TIMESET's 50 ms standard adjustment
          for Naval Observatory signals, will provide even less compensation for
          delay than they otherwise would, because of the slowing action of MNP.

            MNP action could also require you to be online a few seconds longer than
          with an ordinary modem or an MNP modem with MNP turned off, because the
          first thing an MNP modem does is check for MNP action and MNP level in the
          remote modem.  If it doesn't detect MNP in the remote modem, it reverts to
          standard operation (provided it's configured to do so, which it should be
          if you are calling one of the time services).  All that can take a few
          seconds, and during that time data strings being transmitted are not being
          seen by TIMESET.  You are wasting time on line, in other words.  If you
          happened to call NIST at a time of day when there was a lot of phone
          traffic, a few seconds worth of wasted data strings could make a

                                            - 17 -







          difference, especially if there was also line noise to corrupt data
          strings and cause their rejection by TIMESET.  Since the NIST may limit
          your connection time to 15 seconds during busy periods, you could be cut
          off before your computer clock gets set.  For this reason you might need
          to consider turning off MNP when doing line delay measurements.



                                       THE FINAL DISPLAY


          As soon as the time is received and the computer clock is set, TIMESET
          jumps to its final screen, which displays the NIST or Naval Observatory
          data string that was used to set the computer's clock, along with
          extracted information about UTC time and date, daylight/standard time
          announcements if the NIST was used, a table showing the computer's time
          and date before and after the call, the estimated or measured line delay
          correction, and the time it took TIMESET to process the data and set the
          clock (internal delay).

            The internal delay is an actual self-measurement by TIMESET of the time
          it took to process the string of data it received.  There's a lot to do
          with that string -- parse it, convert its components to numeric form,
          calculate the date from the julian day, adjust for local time zone and
          season, create new strings from numbers for summarizing results on the
          screen, etc.  Practically all the internal delay is due to string
          manipulation, one of the slowest processes in a computer.  With our 8086
          computer the internal delay is always about 0.01 second, but it might well
          be too small to measure with a very high-speed computer.  The value for
          internal delay is added to the time that is sent to the computer clock.
          If the call was to the Naval Observatory, the estimated or measured line
          delay is also added to the time that was sent to the computer clock.  With
          a call to the NIST, only the internal delay will be added (line delay will
          not be included, because the NIST compensated for it by advancing the time
          mark's departure so it could arrive on time).

            Current system time to two decimal places is shown in a running display
          in the middle of the final screen if TIMESET 6.00A is configured for
          interactive mode.  The main menu screen's large clock display is available
          at this point by pressing the backspace key to go back to the main menu.



                                      MORE ABOUT ACCURACY


          It's useful to remember that even though TIMESET 6.00A links you to the
          most accurate clocks in the world, your computer's clock can never be set
          to their accuracy.  The main reason is that a computer clock is not
          continuously receptive to timesetting.  Because of the way standard
          computers are designed, their clocks "tick" (advance) about 18.2 times a
          second, with variations among computers, which means they are updated in

                                            - 18 -







          approximately 0.0549-second increments (1 divided by 18.2), although they
          can display time to 0.01 second.  So even if a time mark arrives within
          +-2 ms of true time, this "granularity" in computer clocks means you can
          only be sure that your clock has been set within about 55 ms (55/1000 sec)
          of true time, which is very accurate indeed but not perfect.

            Repeatability of timesetting with TIMESET 6.00A is very good.  In tests
          where one service or the other is called a few times in quick succession,
          before the computer clock has time to drift to any measurable extent, the
          "Computer time was:" item on the final screen is almost always within 0.01
          second of what it was after the previous call.  Usually it's identical.

            It's important to remember, however, that you shouldn't expect your
          computer clock to stay highly accurate very long.  No computer clock does.
          (If your computer time is wildly unstable and you have a battery-powered
          clock in it, it could mean the battery needs replacing.)  Get to know your
          computer clock's stability by running TIMESET a few times over a period of
          days.  How often you need to run it thereafter depends on how stable your
          clock is and the degree of inaccuracy you can tolerate.

            If you are a scientist or engineer and need accurate time for physical
          measurements, you already know you'd need to run it just before a
          procedure.  Same thing if you are part of a far-flung organization and
          need to have computers in the outposts synchronized with a reliable and
          mutually accessible standard (but don't forget to pay for each copy of
          TIMESET).  If you are part of a radio, TV, or cable network you might need
          to run it at least a couple times a day so you won't switch into the
          network in the middle of somebody's sentence.  If you are satisfied to
          have your clock accurate within a few seconds, a run every day or two
          should be sufficient.  If accuracy within 1 minute is enough, you probably
          need to run it only once every few days.  If you're satisfied to be within
          5 or 10 minutes, you can probably wait weeks, but you might want to
          consider just checking the clock on the wall and setting your computer
          clock manually.  If clock accuracy doesn't matter to you, then of course
          you won't need TIMESET at all.  We definitely recommend that these
          valuable time services be used no more than necessary, and we urge people
          not to abuse them.


          A Recommendation for People with CMOS Clocks:  Get RIGHTIME.COM

          If your computer has a CMOS clock, we strongly recommend that you get hold
          of RIGHTIME.COM.  It's a remarkable memory-resident program written by Tom
          Becker.  RIGHTIME not only keeps your DOS clock continuously synchronized
          with your more accurate CMOS clock, it learns the drift characteristics of
          your CMOS clock and automatically corrects for it.  Each time you run a
          program like TIMESET, it notices the extent of your clock drift and
          refines the correction until eventually it can keep your CMOS and DOS
          clocks within 0.5 second of true time.  Thus it can greatly reduce the
          frequency of having to run TIMESET.  RIGHTIME, a shareware program, can be
          found on Compuserve's IBMHW forum and computer bulletin board systems
          around the country.

                                            - 19 -








                                    THE WORDPERFECT LIBRARY


          TIMESET 6.00A contains assembly language routines for automatic detection
          and full compatibility with the WordPerfect Library, an excellent program
          for task-switching made by the WordPerfect Corporation.  It behaves
          exactly like WPCorp's own programs when managed by the Library, allowing
          you to:  (1) load TIMESET memory-resident or remove it from memory, both
          invisibly; (2) directly access it from other programs in the Library menu
          by pressing hot keys; and (3) directly access the other programs from
          TIMESET by pressing hot keys.  Depending on how you load the Library, it
          swaps TIMESET with the other programs by using either expanded memory
          (EMS) or a temporary hard or RAM disk file as the storage area for the
          program's memory image.  TIMESET 6.00A takes about 136 kbytes of EMS or
          disk memory under the Library and about 135 kbytes under DOS.





































                                            - 20 -







                                       PROGRAMMING NOTE,
                                       ACKNOWLEDGEMENTS

                                       November 19, 1990


          TIMESET 6.00A was written with Microsoft's BASIC Professional Development
          System version 7.0 and contains scores of linked commercial assembly
          routines as well as several special purpose assembly routines I developed
          when no commercial alternatives were available.

            It's doubtful that using another higher-level language to write the
          program would have improved anything, and I thank the folks at MicroHelp
          Inc., Crescent Software, and Microsoft for transforming BASIC into a truly
          professional language.

            My special thanks go to a group of special people who tested TIMESET
          6.00A for me during its development and made many helpful suggestions:

                              Tom Strickland, Virginia
                               Bob Germer, New Jersey
                              Bruce Felstein, New Jersey
                                Jim Luhman, Illinois
                                 Stu Rothman, Alaska
                                Tom Takesian, Maryland
                         Julia Petrakis (my wife), Washington

            The CLKDRV10.SYS driver for expansion slot add-on clocks was created by
          Tom Strickland of Alexandria, Virginia and fills an important void.  It
          has been part of the TIMESET package for over two years and is an
          outstanding piece of work.  I'm very grateful to Tom for letting me
          include it.

                             Pete Petrakis, Life Sciences Software
                          Stanwood, Washington (Compuserve 76555,1175)


















                                            - 21 -







                                  CUSTOM PROGRAMMING SERVICES
                                    LIFE SCIENCES SOFTWARE


          If you need custom programming, write or phone Life Sciences Software,
          tell us what you want, and find out if we can help you.  The chances are
          good that we can, and with the same care and experience that has gone into
          TIMESET and a lot of other very well received programs we've written.  But
          you won't know unless you ask.  Our rates are competitive.

            You can telephone us at 206-387-9788 between 8 a.m. and 5:30 p.m.
          Pacific time, Monday through Friday

            Our address is:

                                    Life Sciences Software
                                  8925 271st N.W., Suite 112
                                         P.O. Box 1560
                                  Stanwood, Washington 98292


































                                            - 22 -







                                          DISCLAIMER


          TIMESET is a mature program that has been thoroughly tested through
          several revisions since its inception in early 1987.  Tremendous effort
          has been expended to make it work properly with as many systems as
          possible.  This includes the bewildering variety of modems that exist,
          some of which may be described charitably as balky and idiosyncratic.  The
          number of modem brands that TIMESET cannot work with has declined with
          each refinement over the years, and dramatically since the release of
          version 5.3 in the fall of 1989.  Only a few exceptionally stubborn ones
          have proved unyielding so far.  It is our hope that version 6.00A will
          work for everybody no matter what kind of equipment they have, but of
          course we cannot guarantee it.  The virtue of shareware is that you can
          determine a program's usefulness to you before spending any money on it.
          Nor can we accept any responsibility or liability for any harm the program
          might cause to your system or your data.  We have never heard of any bad
          effects, have never experienced any ourselves, and cannot imagine how
          there could be any, but, as with all programs, the user must assume any
          risk.



                                   YOUR SUPPORT IS IMPORTANT


          We hope you like Professional TIMESET 6.00A and find it useful.  Please
          register and pay for it if you do.  It has taken a lot of hard work and
          study; many, many hours (surely thousands since the first version in
          1987); and considerable expense to develop TIMESET into the highly
          sophisticated program it is and the best of its kind.  If it's useful to
          you or your organization, it merits your financial support.

            It's also advantageous to you to register TIMESET.  Registration brings
          you fresh copies of TIMESET and its supporting programs (including any
          interim fixes before the next major upgrade), a printed manual, free
          technical support, and a 20 percent discount on the next major revision.
          Handling and mailing are included in the $35 per unit registration price.
          Please fill out the form on the next page and mail it to us with payment,
          or register by modem with TSREGSTR and be invoiced if you prefer.

            By the way, we always like to get reports from TIMESET users --
          favorable or unfavorable.  They are what have driven the program's
          evolution from the beginning.









                                            - 23 -







                                TIMESET MAIL REGISTRATION FORM
                               For Individuals and Organizations

          Notice to companies and other organizations:  Registration and payment is
          required for each copy of TIMESET in use within an organization.  The
          price is $35 per copy for up to six copies.  Please call Life Sciences
          Software at 206-337-7328 for discount information on more than six copies
          (the phone number will be 206-387-9788 after December 17, 1991).

          Notice to all:  If you prefer to register TIMESET by modem and be invoiced
          for payment, use the TSREGSTR program to send the registration information
          to our electronic mailbox.  The information TSREGSTR will prompt you for
          and send to us is essentially what you see below.


          TO:  LIFE SCIENCES SOFTWARE
               BOX 1560
               8925 271st, N.W., SUITE 112
               STANWOOD, WASHINGTON 98292

          I wish to become a registered user of TIMESET.

          My name: _____________________________________________________________

          Organization name (if any): __________________________________________

          Street address: ______________________________________________________

          Additional address: __________________________________________________

          City: _______________________  State: __________________ ZIP: ________

          Phone number: ___ ___ ____

          Number of copies being registered: ___


          PAYMENT:

          Note:  As a licensed business in the State of Washington we are required
          to charge residents of the state an additional 8.1 percent for sales tax.

               ___ I am enclosing payment for ___ copy(ies) of TIMESET at $35.00
                   per copy (Washington residents please add 8.1 percent for sales
                   tax).  Total enclosed:  U.S. $ ________

          Please make your check or money order payable to Life Sciences Software.

          Thank you for supporting shareware!




                                            - 24 -
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2867

     Volume in drive A has no label
     Directory of A:\

    TIMESET6 ZIP    101297  10-23-91   8:27a
    RIGHTM11 ZIP     30717  10-23-91  12:44p
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE2867 TXT      3627  10-23-91   1:37p
    GO       TXT      1617  10-23-91   1:13p
    GO       BAT        38   1-31-91  12:58a
            6 file(s)     160832 bytes
                          159744 bytes free
