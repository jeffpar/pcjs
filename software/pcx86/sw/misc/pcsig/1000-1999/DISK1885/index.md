---
layout: page
title: "PC-SIG Diskette Library (Disk #1885)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1885/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1885"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CONLOG"

    An Amateur radio (Ham) logging and log printing program specifically for
    the ARRL November sweepstakes contest.
    In the world of the amateur radio operator, or Ham, documentation is a
    priority. There's a need to know who you have contacted, when you made
    the contact, the parameters of the frequency, etc.  Recording this
    information calls for a lot of pencil pushing over several forms.
    
    CONLOG eases the finger cramp associated with radio logging by providing
    a single structured data entry screen for the radio operator.  Working
    in the radio room, CONLOG accepts the log information field by field as
    the operator makes the call.  Later, CONLOG prints the contact
    documentation on American Radio Relay League approved forms.  CONLOG
    also prints radio statistics, including: avgerage number of contacts per
    minute, total contacts for each band, and number of contacts since last
    band change.
    
    CONLOG also provides a screen standby feature to avoid video burn-in, a
    DOS shell feature, and a notepad. The manual provides several sample
    data entry screens.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONLOG.DOC

{% raw %}
```


















                                ==================
                                =     CONLOG     =
                                =    November    =
                                =   Sweepstakes  =
                                = Logging System =
                                ==================





                           Steven E. Margison,  WA9DRE
                  Program and Documentation Copyright 1987-1989
                   by Steven E. Margison -- All Rights Reserved





































                      --------- TABLE OF CONTENTS ---------


              Introduction ................................. 1
                 A. Background ...................... 1
                 B. Supplied Files .................. 2
                 C. Hardware Requirements ........... 2
                 D. Other Software Requirements ..... 3
              Installation ................................. 5
                 A. Backup and Working Disks ........ 5
                 B. CONFIG.SYS ...................... 6
                 C. Date & Time ..................... 7
                 D. Hard Disk INstallation .......... 8
                 E. Configuration ................... 8
              INSTCLOG ..................................... 9
                 A. Usage ........................... 9
                 B. Editing CONLOG.PRM .............. 11
                 C. Customizing CONLOG Operation..... 14
              CONLOG ....................................... 16
                 A. Files and Formats ............... 16
                 B. Screens ......................... 19
                 C. Logging On and Off .............. 19
                 D. Changing Bands .................. 20
                 E. Printer Listing ................. 20
                 F. Making Contacts ................. 20
                 G. Statistics ...................... 23
                 H. Delete a Contact ................ 24
                 I. Edit a Contact .................. 24
                 J. File Functions .................. 25
                 K. Standby (Screen Saver)........... 26
                 L. Invoking DOS from CONLOG ........ 26
                 M. Terminating CONLOG .............. 26
                 N. Using the Notepad Function ...... 27
                 O. Resumption of Operations ........ 28
              DUPSHEET ..................................... 29
              LOGSHEET ..................................... 30
              File Maintenance ............................. 31
                 A. Saving to Disk .................. 31
                 B. Replacing & Deleting BACKUP.LOG . 31
                 C. Using the Log Information ....... 32
              Shareware .................................... 33
              Warranty ..................................... 35
              Screen Layouts ....................... Appendix A
              Registration Form .................... Appendix B






















         I. INTRODUCTION

                                  A. Background
                 You're  a  ham, and so am I, so this manual will largely
         be a  person  to  person  chat,  rather  than  a  dry  technical
         treatise.   I'm WA9DRE, licensed in 1962, and veteran of over 20
         hectic  weekends  in  November   called   the   "ARRL   November
         Sweepstakes".  Maybe  we've  wound  up in each others' logs.  If
         not, I'll be looking for you next  time  (especially  if  you're
         ALASK, YU-NWT, or PAC).
                 CONLOG was started about 9 years ago on an old Z80-based
         system as  a  simple duplicate check program.  It evolved into a
         full logging program and logsheet  printing  program.    In  its
         first  year  as a full logging program my score went up by about
         25%, confirming my theory that automated logging could  increase
         the  efficiency of contest operators, especially single operator
         stations.  In addition, instead of spending hours re-copying  my
         logs  and dupsheets for submission (they'd never be able to read
         the hastily done originals!), I  generated  beautifully  printed
         sheets ready to be mailed only an hour after the contest ended!
                 That  version  of  CONLOG was, however, not available to
         other hams, since it was created  for  a  custom-built  computer
         with  a  professional programmer's operating system normally not
         available to the hobbyist.  It was inevitable, I suppose, that I
         should join the ranks of IBM-PC owners, which  I  did  in  1986.
         And,  for  the  1986  Sweepstakes,  I  had a totally new contest
         logging program running on the PC.
                 Which brings us to the point.  For several years I  have
         been creating IBM-PC programs as an independent shareware author
         (more about shareware later).  Now, I am making CONLOG available
         to other  contesters  as  an inexpensive shareware program.  Use
         CONLOG once, and you'll  throw  out  the  ARRL's  venerable  log
         forms.  (By the way, the printouts made by CONLOG were submitted
         to the ARRL, and with their consultation were made acceptable as
         official submissions.)



















                 CONLOG November Sweepstakes Logging System        Page 1











                                B. Supplied Files
                 The  following files should be present as part of a full
         CONLOG distribution:

              CONLOG.EXE     Logging program
              INSTCLOG.EXE   Installation program
              DUPSHEET.EXE   Duplicate Checksheet Formatter
              LOGSHEET.EXE   Log Sheet Formatter
              SYMBOL.EXE     support program for formatters
              CONLOG.DOC     This manual for "plain" printers
              CONLOG.IBM     This manual for IBM/Epson printers
              NOEOF.BAT      Strips EOF marker from backup file
              README         Any update notes not in the manual
              README.1ST     If present, read this file FIRST!

         These files may be on either a distribution diskette, or may  be
         found  on  certain Bulletin Board Systems as the file CLOG18.EXE
         or CNLOG180.EXE. These EXE files are "self-extracting archives".
         In other words, each file is actually a compressed collection of
         files, with a special section of executable  code  which  causes
         the files  to  expand  themselves.  Of course, if you're reading
         this, you've probably already expanded the files!




                             C. Hardware Requirements
                 CONLOG will run on a floppy disk system  with  at  least
         110K of memory available after DOS has been loaded any any other
         device drivers  and  resident  programs  you may use.  Generally
         speaking this means a system with at  least  192K  of  installed
         memory.   The  program  will  run  faster  on a hard disk, but a
         floppy is sufficient.
                 CONLOG has been tested on genuine IBM  PC/XTs  and  ATs,
         and on  many  different  "clones".   As long as your system is a
         true compatible, it should work  without  any  problems.    Your
         operating system must be MS-DOS version 2.11 or higher.  Version
         3.00  or  higher is to be preferred because of advanced critical
         error handling.
                 Any standard video adapter may be used:  CGA,  MONO,  or
         EGA.  If  you  are  using  an  EGA or CGA video card but using a
         composite monochrome monitor, CONLOG can be  configured  to  use
         only  black  and  white, blinking, and highlighted text to avoid
         the usual shading  problems  associated  with  color  output  on
         non-color monitors.  If a MONO adapter is used, CONLOG senses it
         and automatically uses non-color text.
                 Your  printer  should  be  an  IBM  Graphics  compatible
         printer, or Epson FX-type printer.    Most  printers  sold  with
         IBM-PCs fall  into  this category.  Typical printers include the
         Epson MX/RX/FX series, any Okidata with IBM Plug 'n' Play  ROMs,
         most STAR  brand  printers,  and  many others.  However, if your
         printer is not IBM or Epson compatible, CONLOG can be configured


                 CONLOG November Sweepstakes Logging System        Page 2











         to  print  out  in  plain  text  compatible  with  any  printer,
         including daisy wheels.  It is also possible to configure CONLOG
         to use non-IBM control codes for boldface, italics,  and  double
         width  printing  in  the forms, although graphics require one of
         the two supported types.




                          D. Other Software Requirements
                 CONLOG is a completely self-sufficient system  requiring
         no  other  software  (other  than  the  DOS  operating  system).
         However, you may desire to manually edit the  logging  files  or
         parameter  file  in  which  case  you  will  need to have a text
         editor.  Any editing done on CONLOG files  must  be  done  in  a
         "non-document" mode.   That means that the editor may NOT insert
         special characters or mark characters by setting the high bit of
         each character (WordStar does this in its  document  mode),  nor
         may  it  automatically  replace  horizontal  TAB characters with
         spaces.  CONLOG uses the TAB character as a field  delimiter  in
         the  logging  files, and replacing the TAB character with spaces
         will cause the CONLOG system to malfunction.  Many text  editors
         have  an  option  which  will  allow  TABs  to  be automatically
         expanded or left intact.  Be sure this option is  set  to  leave
         TABs intact.   Check your editor documentation if you are unsure
         of what it does to TAB characters.
                 Memory-resident programs, or "TSRs"  are  becoming  more
         and more  common,  and  they are largely very useful.  CONLOG is
         not a memory-resident program, but it does use some of  the  DOS
         interrupts.   Most  TSR programs are written in a "well-behaved"
         manner; i.e., they will not  create  any  conflicts  with  other
         programs.  However,  this  is  not a hard and fast rule.  If you
         are using any TSR  programs  which  use  the  function  keys  as
         "hotkeys" (the key you press to activate the TSR program), there
         will  probably  be  a  conflict,  since  the TSR will "trap" the
         function keys before CONLOG can respond to them.  If this is the
         case, either change the other program's hotkeys (if possible) or
         do not install that program when  running  CONLOG.  CONLOG  also
         uses  the  real-time interrupt, which is another favorite of TSR
         programs.  If CONLOG should not  keep  time,  more  than  likely
         there is  a  conflict  with  a TSR program.  CONLOG plays by the
         generally accepted rules, and will peacefully co-exist with  any
         other program  which  also  plays by the rules.  CONLOG has been
         successfully tested with many TSR programs,  but  it  cannot  be
         guaranteed to  be  compatible with everything on the market.  If
         you think you are having trouble with CONLOG because of a memory
         resident program, reboot your system with NO  resident  programs
         and then try CONLOG. If the trouble goes away, add your resident
         programs  one-by-one,  testing  CONLOG  after each installation.
         When the trouble comes back, you'll know which  program  is  the
         culprit. (TSR, by the way, means Terminate and Stay Resident.)
                 There  is  one  confirmed  TSR  program which causes the


                 CONLOG November Sweepstakes Logging System        Page 3











         timekeeping functions of CONLOG to fail.  The program, which has
         appeared  under  several  names,  is  designed  to automatically
         "park" the heads on a hard disk if a certain time period  passes
         with no disk activity.  Do NOT use this program with CONLOG.


















































                 CONLOG November Sweepstakes Logging System        Page 4











         II. Installation

                 At this point, I could write pages and pages on  how  to
         use your computer.  Many commercial instruction manuals go on ad
         nauseum  about  which  end of the disk to insert, which drive is
         A:, etc.  I am going to assume that you know the basics of  your
         system.   If  you  are  not familiar with such things as "path",
         "directory", "drive", "FORMAT", etc., then I  suggest  you  stop
         here and review your DOS manual first.
                 After  installing  the program files as instructed next,
         BE SURE TO RUN THE INSTALLATION PROGRAM "INSTCLOG" BEFORE  USING
         ANY  OF  THE OTHER PROGRAMS! Until the CONLOG system is properly
         installed, the  program  will  not  execute.    Installation  is
         required  because there is much information that CONLOG needs to
         know about your station  before  logging  can  be  accomplished.
         Installation  is  NOT  required  because  of any copy protection
         scheme.


                           A. Backup and Working Disks
                 CONLOG is not copy protected.  In fact, copying is urged
         (see chapter on shareware).  But the  first  copies  you  should
         make are for yourself.  Your original diskette, whether received
         as  a  distribution  diskette  or expanded from a downloaded EXE
         file, should be used to make one or more working copies  of  the
         disk, and  then  stored  in  a  safe  place.   NEVER execute the
         programs from your original master disk.  If something should go
         wrong (unlikely) your original disk may be lost.
                 If you are  using  a  floppy  based  system,  I  suggest
         formatting  a  fresh  disk, without the system files (do not use
         the /S option to FORMAT), and copying onto it  all  of  the  EXE
         files from the distribution disk.

              (place fresh disk in drive B:)
              FORMAT B:
              (place CONLOG disk in drive A:)
              COPY A:*.EXE B:

                                      - or -

              DISKCOPY A: B:
              (and follow the program prompts)

         The  documentation files are not needed during program execution
         and will simply use up disk space.  Run CONLOG from  this  disk,
         and  after  the  contest is over, save the entire disk, making a
         new disk for next year's contest.  In the unlikely event that  a
         future  update  of  CONLOG  cannot  use  log  files from earlier
         versions, you will then have preserved not only your log  files,
         but the  programs  needed  to manipulate them as well.  Granted,
         there is probably no need to re-print any logs at a later  date,
         but there is no point in burning bridges either.


                 CONLOG November Sweepstakes Logging System        Page 5











                 If you are using a hard  disk  system,  then  I  suggest
         copying  your  final log files onto a freshly formatted diskette
         after the contest and placing this archive disk in a safe place.
         If you get a newer version of CONLOG in the future, be  sure  to
         save  the  current  version  in  the unlikely event that the log
         files will be incompatible.




                                  B. CONFIG.SYS
                 When DOS is first booted up, many items  of  information
         are initialized.    Some  items,  which are very common, are the
         system date and time, the "prompt", and the  "path"  environment
         variable.   These  are  usually  set  from  within a file called
         "AUTOEXEC.BAT".  Although sometimes  missing  from  floppy-based
         systems, this  file  is omnipresent on hard-disk systems.  There
         is also another file which is often overlooked  on  both  floppy
         and   hard   disk   systems: CONFIG.SYS.   This   file  contains
         information  relating  to  additional  device  drivers,  country
         information,  ram  disk  initialization,  and  other strange and
         wonderful items.  If this file is not available during boot  up,
         DOS does not complain; it simply makes certain assumptions which
         are usually valid.  One of the assumptions made is the number of
         file handles which can be simultaneously open by all programs.
                 File  Handles  are  the  means  used to identify file or
         device channels between DOS and application programs.  They  are
         numbered beginning  at  0.    By default, each executing program
         starts with 5 file handles which  are  automatically  opened  by
         DOS:

              standard input -- the keyboard
              standard output -- the screen
              standard  error  --  the  screen  (and  sometimes  the
              keyboard also)
              standard aux -- usually the first serial port found
              standard printer -- the "PRN:" channel, usually LPT1:

         The first two channels, standard input and standard output,  may
         be  "redirected"  from  the  command  line using the '<' and '>'
         symbols. (You DID read about that  in  your  DOS  manual  didn't
         you??) The other channels may not be redirected from the command
         line, but may be altered using the DOS "MODE" command.
                 The  point of this discussion is that 5 file handles are
         automatically opened at program  execution  time,  whether  they
         will  be  used  or  not. (Just as an aside, CONLOG uses standard
         input and error, but not the others.    INSTCLOG  uses  standard
         input, output, and error, and the others use standard output and
         error.  None of the programs will allow standard input or output
         redirection.  Attempts to do that will get you a warning message
         and  the  program will terminate.) Unless specified differently,
         DOS will default to a maximum of 8 possible file handles.   This


                 CONLOG November Sweepstakes Logging System        Page 6











         leaves just 3 extra handles available for CONLOG. If  you  don't
         do anything tricky, this is enough.  However, if you should exit
         to  DOS  from  within  CONLOG  (more about this later), you will
         probably not have  enough  file  handles  left  to  do  anything
         meaningful.  CONLOG  uses at most 2 file handles.  INSTCLOG also
         uses two, while LOGSHEET and DUPSHEET  use  1  each.    However,
         LOGSHEET  and  DUPSHEET  each invoke another subsidiary program,
         and this may cause the 8 handle limit to be exceeded.
                 How is the 8 handle limit altered?  Well,  that's  where
         CONFIG.SYS comes in.  Check yours now.  If it exists, look for a
         line like this:

                 files=20

         If  it is NOT present, then add it to your CONFIG.SYS using your
         favorite text editor.  The  line  shown  above  will  alter  the
         default number  of  files  to  a  maximum  of  20.   This is the
         recommended "standard" by power-users  of  DOS.  More  and  more
         programs are   using  larger  numbers  of  files.    By  setting
         files=20, it is unlikely that you will  ever  encounter  strange
         program problems due to the lack of sufficient file handles.




                                  C. Date & Time
                 CONLOG keeps track of the date and time for all contacts
         made.   Therefore,  it  is  IMPERATIVE that your system date and
         time be correctly set before invoking CONLOG. If your system has
         a real-time clock built in, then you probably  already  have  it
         set to adjust the system clock at boot up. (By the way; when did
         you  last  check the time???) If not, then either add the "DATE"
         and "TIME"  commands  to  your  AUTOEXEC.BAT,  or  execute  them
         manually.
                 CONLOG "cheats"  a little.  It never looks at the month,
         which it forces internally to be  always  November.    This  was
         primarily done to allow practice runs of CONLOG in other months,
         and  make the program look like it was November. (I'm in serious
         trouble if they ever move the contest to July!) However,  CONLOG
         does  look  at  the  date  and the year, and of course the time.
         Seconds are used only to initially sync CONLOG's clock with  the
         system clock.  CONLOG does not report time to the second.
                 For  logging purposes, all times should be in UTC (GMT).
         This can be accomplished by either setting your system clock  to
         UTC  time,  or by establishing a time zone or hour offset during
         the configuration of CONLOG. (This is explained a little later.)
         If such a time zone  is  set,  then  CONLOG  will  automatically
         adjust  the  system time to UTC time when making log entries and
         displaying the time onscreen.  This eliminates the need to reset
         your system time from local to UTC for the contest and then back
         again.  Of course, any date/time stamps  on  the  logging  files
         will  still  reflect  your  system  time,  since CONLOG does not


                 CONLOG November Sweepstakes Logging System        Page 7











         actually reset the system clock.




                            D. Hard Disk Installation
                 Hard disk  installation  is  very  easy.   First, make a
         working directory:

              c:
              cd \
              mkdir nss
              cd nss

         Of course, you can name the directory anything you like, or make
         the directory  under  another  directory  instead  of  the  root
         directory.   Once  in  the  working  directory, place the CONLOG
         distribution disk into drive A: and enter:

              copy a:*.EXE b:

         As with the floppy installation, the documentation files are not
         needed except to make a printed copy once.
                 At the end of the contest, I recommend placing the final
         logging files onto a floppy disk for safekeeping.   Whether  you
         leave them on your hard drive as well is up to you.




                                 E. Configuration
                 CONLOG  must  be  told something about yourself and your
         system in order to function correctly.  This procedure is called
         "configuration", and consists of creating a special  file  named
         CONLOG.PRM.  This file will contain all of the special knowledge
         required by the entire CONLOG  logging  system.    The  file  is
         normally   placed  in  the  same  directory  (or  disk)  as  the
         executable programs, but it  may  be  placed  anywhere  in  your
         current "path"  as  well.    If  it cannot be found or opened by
         CONLOG, LOGSHEET, or DUPSHEET, these programs  will  report  the
         error and  terminate.  INSTCLOG does not report the inability to
         find CONLOG.PRM, since this program is used to create it in  the
         first place.    Details  of  using INSTCLOG are in the following
         chapter.
                 If you are a glutton for punishment, you  may  create  a
         CONLOG.PRM  file  with  any  standard text editor which does NOT
         make special files (such as WordStar does in the document mode).
         Details on the format of the file are in the next chapter.   The
         only time you must manually edit the parameter file is to change
         the  printer  control  sequences for boldface, double width, and
         italic printing.



                 CONLOG November Sweepstakes Logging System        Page 8











         III. INSTCLOG

                                     A. Usage
                 The  CONLOG  system  requires  a  parameter  file  named
         CONLOG.PRM, which contains all the  customized  information  for
         your installation.   This file contains your name, QTH, section,
         check, rig info, club affiliation, power, time zone offset, plus
         program  information  regarding  printer  capabilities,   screen
         colors, etc.  This file is normally in the same directory as the
         CONLOG   programs,   but   may   actually   be  located  in  any
         drive:\directory specified in your PATH variable.
                 CONLOG.PRM is an ASCII text file which  may  be  created
         using a  standard  text  editor.    However, to insure accuracy,
         simplicity, and avoid syntax errors in  the  file,  INSTCLOG  is
         provided to  automate  the  task.    INSTCLOG  is an interactive
         program which asks you for each item of information required and
         processes your responses into the parameter file.  There are  no
         command  line  arguments  to  INSTCLOG; simply execute it as any
         other program.  If INSTCLOG finds a file named CONLOG.PRM in the
         current directory ONLY, then it will retrieve  information  from
         that file for each question and display the current entry.  This
         entry  may  then  be  replaced  with  a  new  one or used as is.
         INSTCLOG will ultimately  rename  the  old  CONLOG.PRM  file  to
         CONLOG.BAK and then make a new CONLOG.PRM file.
                 Most  items  requested require text information, such as
         your name, address, etc.  Several items require a simple yes  or
         no (Y/N)  response,  or a single digit parameter.  For all cases
         of text input, INSTCLOG allows you to edit the line as you type,
         and only accepts the line when the <enter> key is pressed.    To
         edit,  simply  use the backspace ( <-- ) key as you would in any
         text editor.  The <HOME> key erases the entire entry and  allows
         you to  start  over.    The left arrow cursor key is accepted as
         though it were the backspace key.  INSTCLOG will  only  allow  a
         certain  number  of  characters  for  each  entry;  the  maximum
         determined by the available space for that  information  in  the
         other programs.      When  the  limit  is  reached,  no  further
         characters are allowed, and each keypress sounds a  beep.    The
         <enter>,  <home>,  and  backspace  keys  will  still function as
         expected, however.  INSTCLOG parses the keystrokes to allow only
         valid data for the entry.  For  example,  when  asked  for  your
         "check", only  digits  0-9  will be accepted.  Some entries will
         automatically convert  lower  case  characters  to  upper  case,
         others will  leave  case  as  is.    The <ESC>ape key performs a
         special function.  It tells INSTCLOG to quit and NOT make a  new
         parameter file.   This allows you to evacuate the program if you
         really mess up.








                 CONLOG November Sweepstakes Logging System        Page 9











                 This   is   the  order  in  which  information  will  be
         requested:

              CALLSIGN                   maximum 10 characters
              NAME                       maximum 50 characters
              ADDRESS                    maximum 50 characters
              CITY,STATE,ZIP             maximum 60 characters
              SECTION                    maximum 20 characters
              CHECK                      maximum 2 digits
              POWER                      maximum 4 digits
              TIMEZONE                   maximum 3 characters
              RIG INFO                   maximum 3 lines of 79 chars
              SINGLE/MULTI OP STATION?   S/M response
              CLUB AFFILIATION           maximum 50 characters
              PRINTER PORT NUMBER        1, 2, or 3 is valid
              PRINTER TYPE               1, 2, or 3 is valid
              SLASH ZEROS?               Yes/No response
              AUDIBLE ALARMS?            0, 1, 2, 3 is valid
              AUTO-ADVANCE FROM CHECK?   1 or 2 is valid
              SECTION NAME STYLE         1 or 2 is valid
              ORDER OF DATA ENTRY        A, B, C is valid
              COLOR SELECTION            (see below)

                 The  four  items  mentioned  above  just  before   color
         selection  will  be  discussed in detail under heading C in this
         manual section.
                 Color selection is effective ONLY if a color video  card
         is detected.   A miniature screen is presented in the upper left
         corner and a menu of color parameters in the upper right corner.
         A "rainbow" of possible colors  is  presented  underneath  these
         items.   You  should  be able to see 15 of the 16 colors in this
         rainbow (the 16th is, of course, black).  If you cannot see  all
         15  visible  colors,  adjust  the color controls on your monitor
         before proceeding. (As a  matter  of  fact,  you  can  use  this
         program any  time  you want to adjust your monitor.  It displays
         all 16 of the possible CGA colors.) Some color monitors, notably
         the genuine  IBM  ones,  cannot  display  color  #08,  which  is
         actually a  highlighted  black.    It  should show up as a faint
         gray.  If your monitor  does  not  display  that  shade  without
         cranking  up the intensity to a very high level, then just treat
         it as another black.  Don't risk harming your screen to get that
         color to show.  You are then  prompted  to  select  an  item  to
         adjust from  the  menu,  and  then a color for that item.  After
         each selection, the  miniature  screen  in  the  upper  left  is
         re-painted to reflect the change.  When the screen first appears
         it uses the colors in the current parameter file, or my defaults
         if there is no current parameter file.  When you have the colors
         the  way  you  like  them, one menu selection allows you to save
         them.  This  option  also  causes  the  final  creation  of  the
         parameter file and the exit from INSTCLOG.




                 CONLOG November Sweepstakes Logging System       Page 10











                 The only other "tricky" entry  is  the  TIMEZONE  entry.
         This is used by the CONLOG program to offset the system clock to
         UTC time.  You may enter any of the usual timezone designations:
              EST
              EDT
              CST
              CDT
              MST
              MDT
              PST
              PDT
              UTC
              GMT
              Z
         If  your  timezone  is  not  listed  above,  as  for the Pacific
         Section, then enter an hourly offset from your  local  time  (as
         set  in  your  system clock) to UTC, expressed as 1 or 2 digits.
         For example, Central Standard Time (CST) is 6 hours behind  UTC,
         and could  therefore  be  entered as "6" instead of "CST".  Note
         that it is assumed that any time offset  will  be  hours  to  be
         ADDED to  local  time to meet UTC time.  This is valid since all
         participants in the contest are in a relatively narrow range  of
         time zones.    If your system clock is set to UTC, then use UTC,
         GMT, Z, or simply 0.




                              B. Editing CONLOG.PRM
                 Normally, CONLOG.PRM may be completely setup by  running
         INSTCLOG. However, since it is a straight ASCII text file, it is
         possible to  edit  the file to alter entries.  Although the file
         is ASCII text, there are certain rules which must be observed.
                 Each line in the file describes a single item, and is of
         the form:
                id=data
         where "id" is a code to indicate which item is being  described,
         the  "=" sign separates the id code from the data, and "data" is
         the actual data assigned.
                 The first line of the file must be a designation of  the
         format for  the  configuration file.  For Version 1.80 this line
         must read:
              @=0489
                 Any numerical codes (such as printer  control  codes  or
         color  codes)  must  be  entered  as decimal values in the range
         0-255.  If multiple values are needed, each is  separated  by  a
         comma.  No other characters may be used.
                 For  all  text entries (name, address, etc.) the maximum
         number of characters  for  the  entry  (after  the  "=")  is  as
         indicated in  the  previous section.  Exceeding any entry's size
         WILL CAUSE THE CONLOG PROGRAMS TO FAIL!
                 Here is a list of the code ids and associated data:


                CONLOG November Sweepstakes Logging System        Page 11












              C=callsign
              N=your name
              A=street address or P.O. Box
              Q=city, state, ZIP
              S=section name (spelled out, not abbreviated)
              Y=your check (last two digits of year first licensed)
              P=transmit power in watts
              Z=time zone designation or offset
              F1=first line of rig information
              F2=second line of rig information
              F3=third line of rig information
                 Omit any "F" entry not used
              M+  (If you are a multi-op station)
                      - or -
              M-  (if you are a single-op station)
              H=name of club affiliation
                 Omit the H= entry if not affiliated with a club
              L=printer port number: 1, 2, or 3
              G+   (If your printer supports IBM/Epson style graphics)
                      - or -
              G-   (If your printer is not IBM graphics compatible)
              B+=boldface ON printer control string (see notes below)
              B-=boldface OFF
              I+=italics ON
              I-=italics OFF
              W+=double width ON
              W-=double width OFF
              0+  (to enable slashing zeros on printouts)
                      - or -
              0-  (to disable slashing of zeros)
              T=Audible alarm code 0, 1, 2, or 3
              V+  (to enable auto-advance after check entry)
                      - or -
              V-  (to disable auto-advance)
              U+  (to enable short section names display)
                      - or -
              U-  (to use long section names)
              X=nnnnn (selects order of data entry on screen from left to right)
                      (where nnnnn are the digits 0, 1, 2, 3, and 4)
              R=color selections (see notes below)
                      - or -
              R-   (to disable colors)
                      - or -
              R_   (to disable colors but keep worked sections visible)

                 The  printer  entries  deserve some further explanation.
         First, your printer must be connected to LPT1,  LPT2,  or  LPT3.
         CONLOG  may NOT be used with serial port printers, only parallel
         port printers.    Fortunately,  serial  printers  are   becoming
         increasingly   rare,  which  is  why  serial  printers  are  not
         supported.  Second, some printers  have  a  slashed  zero  as  a


                 CONLOG November Sweepstakes Logging System       Page 12











         standard character form, while most do  not.    If  you  have  a
         printer which slashes zeros, then set the slashed zero entry OFF
         (0-).   Otherwise,  set  it ON (0+) to cause overprinting of any
         printer line with slashes at each zero character.  This  feature
         applies  only  to  DUPSHEET  and  LOGSHEET.  The printer logging
         output of CONLOG does not slash zeros.    Finally,  the  control
         strings  for  boldface,  and  double  width  default to IBM-type
         printer codes, with italics enabled  if  you  have  selected  an
         "Epson" type of printer.  If you have a printer which uses other
         codes,  then  you  will  have  to  edit  them  into these lines.
         (Actually, this is the only real need for  editing  this  file.)
         The  data  fields  of  these  lines  contain the decimal control
         character strings to enable or disable the named  feature,  with
         an additional decimal value as the first value.  This additional
         value is  the  number  of control characters in the string.  For
         example, the IBM control sequence to turn on  boldface  printing
         is "<ESC>ape  E",  which is decimal value 27 and 69.  Since this
         string consists of two control characters, the string  would  be
         entered as:
              B+=2,27,69
         Make  sure  that each value is separated by ONLY a single comma.
         The maximum number of control characters for each  entry  is  9,
         which should  be more than enough for any printer.  If a feature
         is not supported, or if you  simply  want  to  defeat  it,  then
         either  eliminate  both  the ON and OFF control strings from the
         file, or set the first value to 0 as follows:
              I+=0
              I-=0
         The above two lines will defeat italics printing.
                 The color entry (R=) is formatted just  as  the  printer
         control  strings,  except that there is a fixed number of values
         which MUST be entered.  Each value represents a  color  used  on
         the  screen,  and  must  be  represented  as a two-digit decimal
         number in the range 00-15.  The order of entries is:
              Main Background
              Main Border & window borders
              Main Text
              Data Input & window text
              Function Key Menu Background
              Function Key Menu Border
              Function Key Menu Text
              Highlights
              Error Background
              Error Text
              Statistics
              Worked Section Color
         To defeat all colors, simply use R- as a entry.  Of  course,  if
         your  default  video  device  is a monochrome adapter card, this
         entry will be ignored anyway.  Using R_ will defeat colors,  but
         allow  worked  sections to be underlined on monochrome adapters,
         and dark blue on color adapters.  Here is a list  of  the  legal
         color values:


                 CONLOG November Sweepstakes Logging System       Page 13












         00   Black        08   Gray (hi intensity black)
         01   Blue         09   Light Blue
         02   Green        10   Light Green
         03   Cyan         11   Light Cyan
         04   Red          12   Light Red
         05   Magenta      13   Light Magenta
         06   Yellow       14   Light Yellow
         07   White        15   High Intensity White

         Use care in assigning any color value above 08 to  a  background
         color,  since  you  will get blinking foreground colors instead.
         There are no "Light" background colors.
                 Any line beginning with a semi-colon (;) is treated as a
         "comment" line, and is ignored by all  CONLOG  programs.    This
         allows you to enter notes into the file relative to the meanings
         of the lines, if you wish.
                 It  cannot  be  stressed  to strongly that errors in the
         parameter file will seriously affect  operation  of  all  CONLOG
         programs,  even  though  the  programs  attempt  to validate the
         syntax of each line before trusting  it.    I  strongly  suggest
         using  INSTCLOG  first and printing out the resultant CONLOG.PRM
         file before attempting to edit it.  The printout will serve as a
         sample of proper entry format.




                         C. Customizing CONLOG Operation
                 There are several items which will configure  CONLOG  to
         your own  tastes.  The INSTCLOG program requests a selection for
         each of the following  items.    If  you  are  manually  editing
         CONLOG.PRM,  use the number selection given below for each item.
         First of these is the autible alarm selection.  You may select:
              0 = no alarms at all
              1 = alarm on data entry or system error
              2 = alarm on duplicate callsign
              3 = alarm on duplicate callsign and data entry/system error
         I suggest using selection 2 or 3, unless  you  plan  on  wearing
         headphones.  In that case, it doesn't matter if you have audible
         alarms or not.
                 Since  the  check field always requires exactly 2 digits
         entered, it makes sense to automatically  advance  to  the  next
         field after  the digits are entered.  This is especially true if
         you are a fairly accurate  and  fast  typist.    CONLOG  may  be
         configured  to  accomplish this auto-advance, or to advance only
         after the <space> or <enter> keys are pressed.  Select:
              1 = no auto-advance
              2 = auto-advance enabled

                 CONLOG  has  always  used  the  "traditional",  or  long
         section   names,   rather   than   the   newer  2  or  3  letter


                CONLOG November Sweepstakes Logging System        Page 14











         abbreviations.   This  is primarily due to tradition and nothing
         else.  However, there is good reason to use the shorter  section
         names,  especially  on CW. So, beginning with Version 1.80, both
         section names are supported.  In  the  section  field,  you  may
         enter  EITHER  the  long  or short section name at any time, and
         CONLOG will accept it.  The section name display  in  the  lower
         half of  the  screen must display one or the other, though.  You
         may select the format of section names thus:
              1 = long names
              2 = short names
         Note that this selection does  not  affect  logsheet  printouts,
         which will continue to use only the traditional section names.
                 Lastly,  CONLOG now allows the order of data entry to be
         customized.  The original order of data entry, and  the  default
         method if none other is specified, is:
             CALL   NR   PREC   CHECK   SECTION

         This  is  the  order  shown  on  all  the  screen layouts in the
         Appendix of this manual.  An alternate form, perhaps  useful  to
         CW operators is:
             NR   PREC   CALL   CHECK   SECTION

         These two formats may be selected as follows:
              A = CALL  NR  PREC  CHECK  SECTION
              B = NR  PREC  CALL  CHECK  SECTION
         INSTCLOG  allows  a response of 'C' to the format request, which
         then allows you to arrange the five entry field in any order you
         prefer.  Each field is assigned a number as follows:
              0 = CALL
              1 = NR
              2 = PREC
              3 = CHECK
              4 = SECTION
         The object is to arrange the five digits in the order  you  wish
         them to  appear  in  the  CONLOG screen from left to right.  The
         default condition would therefore be "01234".  The alternate (CW
         operator's) format would be "12034".  Note that you must specify
         all five digits, with no digit more than once.    INSTCLOG  will
         check your response for accuracy and reject anything not valid.
                 If  you are editing CONLOG.PRM, the data entry field may
         be omitted if you wish to use the standard "01234"  arrangement.
         Otherwise, the data entry format line should read:
              X=nnnnn
         where  "nnnnn"  are  the five digits representing the fields, in
         the order you desire them from left to right.  Since you are not
         using INSTCLOG, be sure that you have all five  digits,  in  the
         range 0-4,  with  no  digit  more than once.  The CONLOG program
         expects this line to be valid, and will fail  to  work  if  this
         line is inaccurate!





                 CONLOG November Sweepstakes Logging System       Page 15











         IV. CONLOG

                               A. Files and Formats
                 Logging information from CONLOG is saved to disk in  two
         different formats.    The  first  format  is  in  a  file  named
         BACKUP.LOG, and saves data on all  operations  done  during  the
         operation of CONLOG. This file is used as a disaster backup.  If
         power should fail, or your system should fail, BACKUP.LOG can be
         used  to  recover your log intact up to, and probably including,
         the last entry.  Information  saved  includes  each  log  entry,
         times  on  and  off, log entries deleted or edited, and the time
         and filename of log dumps to disk.  Total  time  spent  on  each
         band  is  not  recoverable,  but  that information is not really
         necessary for logging anyway.
                 The second type of file is  a  "log  dump"  file,  which
         saves the  log  information  currently  in memory.  This type of
         file does not save deleted entries, and only  saves  the  edited
         copy of  an edited entry.  It also saves section and QSO totals,
         total time logged on, and other vital information.  It may  also
         be  used  to recover from a power or system failure, but it will
         only be as accurate as the last time the log dump was performed.
         Unlike the BACKUP.LOG file, which is automatically  created  and
         updated, the log dump files are created only on operator command
         (see section I in this chapter, and chapter VII.).  The log dump
         file  is  the file used with LOGSHEET and DUPSHEET to create the
         final printouts.  BACKUP.LOG cannot be used for this purpose.
                 Both file types are saved as ASCII text files, with  one
         entry per  line.   However, the BACKUP.LOG format is not readily
         readable, since information is  stored  in  a  format  which  is
         convenient  for  use  by  CONLOG,  rather  than readable by real
         humans.  The BACKUP.LOG format looks like this:

         ;File opened: 1207Z, 11-19-89
         +0727   14    0000
         : WA9XYZ      0001   0023   B   62   56   0727   2    0000
         : W1AW        0002   0001   A   24   00   0728   2    0001
         : K9ABY       0003   0123   B   55   63   0730   3    0003
         @ K9ABY       0003
         ;EDIT WA9XYZ  0001
         ! WA9XYZ      0001   0024   B   62   56   0727   2    0005
         -0732   14    0005
         ;File: LOG89.001  Saved 11-19-89 1212Z
         ;READ LOG FILE: log89.001 at 1300Z 11-19-89
         ;File closed: 1301Z, 11-14-89

         This short excerpt shows just about all of the entries which can
         occur in the BACKUP.LOG. Note that each time you execute CONLOG,
         it will append new data to any existing BACKUP.LOG file  in  the
         current directory.    If  there is none, then it will be created
         anew.  It should be obvious that the  first  character  in  each
         line has a special meaning.  These are:



                 CONLOG November Sweepstakes Logging System       Page 16











              ;   Comment or note for "human" readers
              +   Indicates a "time on" entry
              -   Indicates a "time off" entry
              :   Indicates a QSO entry
              @   Indicates a deleted QSO entry
              !   Indicates an edited QSO entry

         The data following each code character varies with the  type  of
         entry.   For time on and off entries, the first set of digits is
         the current time (UTC is assumed) in minutes since  midnight  of
         the current  day.    The  next  set  of  digits is the date, and
         finally is the current total time logged on in the contest, also
         expressed in minutes.
                 QSO entries begin with the callsign, of course, followed
         by your QSO number, and then the  other  station's  QSO  number.
         Next  is  the precedence, check, section, time worked, band, and
         total contest time in that order.  The section is specified as a
         number which is translated  within  all  CONLOG  programs  to  a
         section name.    Number 00 is the CONN section, and number 76 is
         the YU-NWT section.  The numbers are ordered as they  appear  on
         the CONLOG  screen,  proceeding  downward  in  each  column.  Of
         course, this information is really  not  necessary  for  you  to
         know,  but it helps to understand what this log format contains.
         The band entry is also a number which  corresponds  to  a  band,
         with 1  being  80  meters, and 6 being 160 meters.  Band 0 means
         that no band was selected.  The entry time and  total  time  are
         expressed   in   minutes  since  midnight,  and  total  minutes,
         respectively.
                 An edited entry appears in the same format as  a  normal
         QSO entry, except that certain fields will not change.  The time
         worked and  your  QSO  number cannot be altered.  The total time
         will be the total time when the edit took  place.    This  total
         time  field  is  used  during  recovery  functions to constantly
         update the total time counter.
                 The comment entries appear for noting  when  files  were
         saved  or  recovered,  and for logging times when the BACKUP.LOG
         file was opened and closed.  They are for user information only,
         and have no other purpose.
                 Although possible, it is EXTREMELY UNWISE to attempt  to
         edit the  BACKUP.LOG  file.    Tab  characters are used as field
         delimiters within each line, and they  may  NOT  be  altered  to
         spaces.   In  addition,  some text editors place and end-of-file
         marker character in a file.  If this occurs, CONLOG  will  later
         append  new  data  AFTER  the EOF marker, and all that data will
         then be difficult, if not impossible, to recover.  To cover this
         last case, a batch file is provided called NOEOF.BAT, which  can
         be used to remove an EOF character from the BACKUP.LOG file.  If
         you  should  happen  to edit this file, be sure to run NOEOF.BAT
         before attempting to re-use BACKUP.LOG with the CONLOG program.





                CONLOG November Sweepstakes Logging System        Page 17











                 The  format  of  the log dump file is similar to that of
         BACKUP.LOG, but more readable to a "real person".  The format of
         lines is:

         ;File: LOG89.001  Saved  11-19-89  1212Z
         + TIME ON        11-14-89        1207Z
         : WA9XYZ       1     24    B   Ill   62   1207Z   40
         : W1AW         2      1    A   Conn  24   1208Z   40
         - TIME OFF       11-14-89        1212Z
         >Conn     1
         >Ill      1
         ;QSOs   SECTIONS          SCORE    TOTAL TIME
         #   2     2                   8      00:05
         ;Next number to send is:
         !4
         ;Total band times: 80-40-20-15-10-160
         &0000 0005 0000 0000 0000 0000

                 The same scheme of identifying each  line  with  a  code
         character  is  used,  except  that some different characters are
         used.  Here is a list of the codes for the log dumps:

              ;   Comment or note for "human" readers
              +   Indicates a "time on" entry
              -   Indicates a "time off" entry
              :   Indicates a QSO entry
              >   Indicates a section total
              #   Indicates scoring and logging totals
              !   Indicates the next number you will send
              &   Indicates total times (in minutes) for each band

                 In these files, all times are reported as  normal  hours
         and minutes, except for the total times on each band.  That item
         is reported as total minutes.  The QSO entry line should be easy
         to read.    The  fields  in order are callsign, your number, his
         number, precedence, section, check, entry time, and band.    You
         will  notice  in the above example that there are no entries for
         deleted or edited QSO entries.  That is because deletions should
         not appear in the log, and only the final edited entry is valid.
         Compare this example to the BACKUP.LOG example  above  and  note
         that the K9ABY entry does not appear (since it was deleted), and
         the  WA9XYZ  shows his number as 24, which is the edited version
         (the original entry was 23).   All  items  relating  to  section
         totals and score totals are for the use of LOGSHEET and DUPSHEET
         programs,  and  for  restoring the complete log to memory if you
         re-execute CONLOG. The section names are always specified in the
         "long" format, even if you have configured CONLOG to  use  short
         section names.    The  short  section name configuration affects
         ONLY the CONLOG display screen, nothing else.
                 The same cautions apply to the  log  dump  files  as  to
         BACKUP.LOG regarding  editing  them.   There really shouldn't be
         any need for that,  but  if  so,  all  tab  characters  must  be


                 CONLOG November Sweepstakes Logging System       Page 18











         preserved.   However,  an  end  of  file  marker  character   is
         acceptable  here,  since  these  files  are never appended, only
         created new.
                 Section I of this chapter and chapter VII  explain  more
         about using the various file recovery and save functions.




                                    B. Screens
                 There are three screens used in the CONLOG program.  The
         main screen is used for actually logging QSOs.  The function key
         menu  "pops up" in the lower half of the main screen in order to
         give access to special non-logging functions.  The function  key
         menu is visible when you first execute the program.  The special
         functions  menu  is  also  displayed  in  the bottom half of the
         screen,  and  contains  extra  features   related   to   contest
         operation.   Refer  to  Appendix  A  for printouts of the screen
         formats.
                 The function key menu is displayed whenever CONLOG is in
         the "command  mode",  and  disappears  when  CONLOG  is  in  the
         "logging mode".   The switch is made with the <F1> key.  It will
         toggle CONLOG between the two modes.  The special functions menu
         may be invoked by pressing the <ALT> key and <F1>  keys  at  the
         same time.    The  special functions menu allows the <F1> key to
         return to logging mode, or the <F2> key to  switch  directly  to
         the command  mode.  If you are not logged in to the contest, the
         <F1> key in the special functions menu will not be operative.




                              C. Logging On and Off
                 Logging on and off creates entries in  the  contest  log
         which  indicate  the  times  you started and stopped working the
         contest.  Current rules state that an "off" period  must  be  at
         least 30  minutes,  but  CONLOG  does not enforce that rule.  Be
         sure you observe it, however, to avoid disqualification of  your
         log.  Logging on and off may only be done from the command mode.
         If  you  are  currently logged off, CONLOG cannot be placed into
         the logging mode.  An error message will appear if  you  attempt
         to use  the  <F1>  key  while logged off.  The function key menu
         will always be displayed while you are logged off.
                 Pressing <F2> while in the command mode will log you  on
         or off,  and  the legend onscreen will change accordingly.  When
         you log on, the total contest time counter will begin to run  as
         well, and will stop when you log off.







                 CONLOG November Sweepstakes Logging System       Page 19











                                D. Changing Bands
                 The band you are working must be  manually  selected  in
         the command mode.  This is accomplished with the <F5> key.  Each
         time it is pressed the BAND field of the main screen will change
         to the next band.  The order of change is 80-40-20-15-10-160 and
         then back  to  80  again.    You  may  alter  the  band  setting
         regardless of being logged on or off.
                 It is VERY easy to forget to  change  the  band  setting
         when changing  the  band on your rig.  This could cause your log
         to be disqualified.  BE SURE to change the band  information  in
         CONLOG whenever you change bands on your rig!




                                E. Printer Listing
                 Besides the normal backup files which CONLOG creates, it
         is possible  to also log each operation to your printer.  In the
         command mode, function key <F9> toggles printer logging  on  and
         off.   The  legend  on  the  function  key  menu will report the
         current setting.  This may be toggled regardless of being logged
         on or off.  If you use this function, be sure  your  printer  is
         online and  loaded  with  paper.   If CONLOG detects any printer
         error during operation, a warning message is displayed for a few
         seconds, and the printer is automatically  toggled  off.    This
         feature  is  a  handy  way  of  being  able to quickly scan back
         through your log without having to save it to disk, exit to DOS,
         and look at it in that manner.




                                F. Making Contacts
                 This is where the fun begins.  After  getting  your  rig
         warmed   up,   laying  in  a  supply  of  your  favorite  liquid
         refreshment, kicking the kids and spouse out of the  house,  and
         taking  the  phone  off  the  hook, you're ready to begin making
         contacts.
                 If using floppy disks, place  the  CONLOG  working  disk
         into either drive A: or B: as you desire.  Switch to that drive,
         and invoke the program by typing

              CONLOG

         This   will  run  the  program  and  establish  or  re-open  the
         BACKUP.LOG file.  DO  NOT  REMOVE  THIS  DISK  WHILE  CONLOG  IS
         EXECUTING!  To  do  so  will cause failure of CONLOG and loss of
         your backup log file!
                 If using hard disk, change to the CONLOG  directory  and
         invoke the  program  as above.  Obviously, you cannot remove the
         disk, so there should be no trouble here.
                 After the sign-on screen appears, hit  any  key  (except


                 CONLOG November Sweepstakes Logging System       Page 20











         Ctrl-Break) and CONLOG will be ready for use.  First,  use  <F5>
         to set  your  band.   Then, use <F2> to log "on" to the contest.
         Finally, use <F1> to enter logging mode.
                 The main screen (Appendix A) is  divided  into  separate
         areas depending  upon  the  information being reported.  The top
         line is the only line actually used in  making  the  log  entry.
         The  second  line  will always report the next number for you to
         send, and your current band.   The  lower  half  of  the  screen
         reports  the  sections  NOT  WORKED. As you make contacts in new
         sections, this area will gradually become empty.

         NOTE: With the addition of the ability to configure the order of
         data entry, it is difficult to explain the sequence of operation
         for all possible configurations.  Therefore, it will be  assumed
         that the  default  field  order  is in use.  If you change this,
         remember that data entry always progresses from left to right on
         the screen, starting with the left-most field.

         The cursor is always on the top line, and shows you  where  your
         next character  will be entered.  For a fresh entry it starts in
         the CALLSIGN field.  It is not necessary to fill  in  the  entry
         fields in order, but they must be all filled in before the entry
         may be logged.
                 For  all  but the PREC field, the entry may be edited by
         using the backspace ( <- ) key.  In  addition,  the  <HOME>  key
         will  erase  the current field and place the cursor at the start
         of the field.  Invalid keystrokes will cause a "beep" (if alarms
         have been enabled during configuration) and will not  be  echoed
         to the  display.    The  CALLSIGN  field  does  not  accept  any
         punctuation, so do not attempt to enter any  portable  ("slash")
         identifier suffix.  It really isn't needed for logging anyway.
                 Duplicate  checking is performed when the CALLSIGN field
         has been filled, and movement to  another  field  is  attempted.
         When  the  log  begins to get large, there may be a slight pause
         during the search process.  If the callsign is  already  in  the
         log,  an  error  message is displayed next to the CALLSIGN field
         showing the number you sent to that station.  After a  pause  of
         several  seconds,  the error message is erased, and the CALLSIGN
         field is cleared out. (Anytime an error message is displayed  by
         CONLOG, a keystroke will terminate the message before the normal
         timeout.)
                 If you re-enter a field which was already filled in, any
         characters  typed  will  first  cause  the  field to be blanked.
         Otherwise, the field may be left  alone  by  moving  to  another
         field.
                 Moving  to another field is done by pressing the <enter>
         key, or <space> key.  This will move the cursor to the  starting
         position  of  the next field to the right, with wrap-around from
         the SECTION field to the CALLSIGN field.  You may also  directly
         move  either  to  the next field right or the next field left by
         using the cursor right or left arrow keys respectively.  This is
         handy for moving across a field without making an entry into it,


                CONLOG November Sweepstakes Logging System        Page 21











         or  without  disturbing  an  entry already in place. <enter> and
         <space> only leave a field if an entry  has  been  made  in  the
         field.  To move and leave the field blank, use the arrow keys.
                 The  <DEL>ete  key  will  clear all fields and place the
         cursor back into the CALLSIGN field.  If all  fields  have  been
         filled,  but  the  entry  has  not  been  logged,  you  will  be
         questioned by the system to see if you really want to clear  the
         pending entry.   A  "y"  response  will complete the clear.  Any
         other response will ignore the delete request.
                 The <INS>ert key is used to actually  log  the  contact.
         All fields must be filled, or the <INS> key will be ignored.  If
         the  log entry is made, the entry fields will be cleared and the
         cursor placed in the CALLSIGN field.  The next  number  to  send
         will be  incremented, and the scoring line will be updated.  The
         last entry logged will  be  displayed  just  above  the  section
         tally,  and  if  the contact was a new section, its name will be
         removed from the section tally.   Finally,  the  entry  will  be
         saved in the BACKUP.LOG file, and sent to the printer if printer
         logging is turned on.
                 The  <F1>  key  may  be  used  at  any time to return to
         command mode,  without  disturbing  any  pending  entry  on  the
         screen.   Likewise,  the <ALT-F1> key combination may be used at
         any  time  to  invoke  the  special  functions   menu,   without
         disturbing any pending entry.
                 The PREC  field  is  entered slightly differently.  When
         first entered, the field defaults to "B",  and  that  precedence
         may be  selected  simply  by  hitting  the  <enter> key.  If the
         precedence is "A" or "Q", then simply type  an  "A"  or  "Q"  in
         either upper  or  lower case.  Use the <enter> key or one of the
         other keys described above to  move  to  the  next  or  previous
         field.
                 The SECTION  field  has extra features.  The section can
         be typed in if desired, or the cursor up and down arrow keys can
         be used to scan through the list of sections until  the  desired
         section is  found.   The <PgUp> and <PgDn> keys may be similarly
         used, except they scan by 15 sections at a time, whereas the  up
         and down  arrow keys scan in one section increments.  Any time a
         section is selected which has not been worked, its name  in  the
         section tally  is highlighted.  When typing in the section name,
         either upper or lower case characters may be used.  Due to space
         limitations on  the  screen,  the  U.S.  Virgin  Islands  (USVI)
         section  is  listed  under  the 5th call area instead of the 4th
         call area.  A hyphen (-) after  the  Puerto  Rico  (PR)  section
         reminds you that USVI should be listed next.
                 At any time, you may enter either the "traditional" long
         section name  or  the  new  shortened  name.  CONLOG will accept
         either one.    During  configuration  you  have  the  option  of
         selecting which format will be displayed on the screen, but that
         does not limit which format you may manually enter.
                 If,    during    configuration,    you   have   selected
         "auto-advance" out of the check field, the second digit  entered
         in  this field will automatically cause the cursor to advance to


                CONLOG November Sweepstakes Logging System        Page 22











         the next  field  to  the  right.    It  is not required to press
         <enter> or <space> to leave the field.    In  this  manner,  the
         check  field  works  similar to the precedence field, which also
         doesn't require an <enter> key following data entry.




                                  G. Statistics
                 CONLOG contains some simple statistics intended  to  aid
         contest strategy.  These statistics include:
              Average number of contacts per minute
              Total contacts for each band
              Number of contacts since the last band change
              Total time operated on each band
              Total time operated since last band change
              Average number of contacts per minute since last band change
         It should be easy to see how this information can help determine
         when a band change is in order, or when it's naptime!
                 The  average  contacts  per minute are calculated as the
         total number of contacts divided by the total number of  minutes
         logged in  (your total time).  This average is carried only to 1
         decimal place, and is updated every minute  when  the  time  and
         total time displays are updated.  The value may be followed by a
         "+"  or "-" sign to indicate that the current average is more or
         less than the previous average.  If neither sign  appears,  then
         the average  hasn't  changed.  Like any average, changes will be
         most dramatic when the total time and/or total contacts are  low
         numbers,  and  will  be  slower  to  change  when the values are
         higher.  The average number of  contacts  since  the  last  band
         change  is calculated the same way, except that it is reset each
         time the band is changed.
                 Just above the sections worked  display  are  the  total
         QSOs for  each band, and the total time spent on that band.  The
         count is updated for each contact, and the time is updated  each
         minute.  In addition, there is a final "CURRENT" entry, which is
         reset  to zero each time the band is changed, and shows how many
         contacts were made since the last band change, and how much time
         has elapsed since the band change.  The counts are not saved  to
         the backup  logs,  but  the  times are.  Reading a file into the
         program will reconstruct the counts accurately.  Total times for
         each band are not recoverable from the BACKUP.LOG file.  If  you
         recover  from  this  file,  the  band  times will be reset to 0.
         However, this is not critical information  for  logging,  so  no
         real problem exists.









                 CONLOG November Sweepstakes Logging System       Page 23











                               H. Delete a Contact
                 Sometimes you work a station and log him, only  to  find
         out that  he  really  wasn't working you.  Or perhaps you simply
         jumped the gun and hit <INS>ert before you really confirmed  the
         contact.  (It  happens!)  Any  logged  contact may be deleted by
         first using <F1> to enter command mode, and then selecting  <F3>
         to delete  an  entry.  You will be asked for either the callsign
         of the station or your QSO number.  If the entry is found in the
         log, you will be asked to confirm the delete.  After  completing
         the action,  use  the  <F1> key to return to logging mode.  Note
         that the  deleted  call  is  still  in  memory,  but  marked  as
         "deleted",  so  that  it  will  not  be matched during duplicate
         checking, and will not be saved to a log file later.    The  QSO
         number  associated with that contact may not be used over again.
         In addition, your score will be adjusted accordingly.    If  the
         contact  represented  the only contact in a section, the section
         name will re-appear in the section tally.




                                I. Edit a Contact
                 You work a station and copy his check as "66".   Several
         minutes  later  you hear him again, only much clearer this time,
         and realize that he is reporting a  check  of  "56".    You  can
         correct  the  entry  by  returning to command mode with the <F1>
         key, and pressing the <F4> key to edit an entry.   You  will  be
         prompted for  either  the  callsign  or your QSO number.  If the
         contact is found, the data from that contact will be placed into
         the top line of the main screen, and the cursor will  be  placed
         in the  CALLSIGN  field.   This is the only time when the cursor
         will be in the main screen while the function key menu  is  also
         displayed.  You may now edit any of the fields displayed just as
         though it were a new entry.  Note that any entry in the CALLSIGN
         field will  cause  duplicate checking to occur.  This means that
         simply hitting <enter> in that field will run a duplicate  check
         on  the  current  callsign,  which  will cause a duplicate to be
         reported.  Therefore, unless  you  really  want  to  change  the
         CALLSIGN  field,  use the cursor left or right keys to change to
         the next field, not the <enter> key.
                 The <DEL>ete key will abort the editing process at once.
         The <INS>ert key will complete the edit function.  You  will  be
         prompted one  final  time  to  confirm the edit or abort it.  If
         confirmed, the entry will replace the old entry in memory.  If a
         section change was made, the scores and section totals  will  be
         adjusted as  needed.   If the section was not changed, the score
         and totals won't change either.
                 Certain items associated with a log  entry  may  not  be
         edited.  These include your QSO number, the time worked, and the
         band used.    The  reasons  for not allowing alteration of these
         items  should  be  reasonably  obvious  from  a  contest   rules
         standpoint.


                 CONLOG November Sweepstakes Logging System       Page 24











                                J. File Functions
                 The <F8> key in the command mode controls the three file
         functions available.  They are:

              Write the log to a logfile
              Read a logfile into memory
              Recover from BACKUP.LOG

         The last choice would be used only if a power or system  failure
         caused  an  exit  from  CONLOG and the log had not been recently
         saved to a logfile.
                 The current log in memory  should  be  written  to  disk
         before  any  exit from CONLOG, and before using the <F7> Suspend
         to DOS function.
                 After pressing <F8>, you will be prompted for  the  type
         of file  function  you  wish to perform.  If you choose to write
         the log file, the entire log in memory will be written to a  new
         file.  The name of the file will be:
              LOGyy.nnn
         where "yy" is the last two digits of the current year, and "nnn"
         is a  number from 001 to 999.  CONLOG automatically searches the
         current  directory  and  uses  the  lowest   number   available.
         Therefore,   for   1989,   the   first  file  written  would  be
         "LOG89.001", and the fifth file would be "LOG89.005".    If  you
         write  more  than  999 files, the final extension will be "000",
         and each write will overwrite the last file  with  that  number.
         You  may  use  the  <F7>  function to exit to DOS and erase some
         files.  Normally, you will not save  more  than  999  files,  so
         there  should be no need to erase intermediate files until after
         the contest (unless you get short of disk space).
                 If you choose to  read  in  a  log  file,  you  will  be
         prompted to  enter the name of the file to read.  This should be
         the most recent log file saved, so that the log will be as up to
         date as possible.  If the  log  file  was  created  and  nothing
         further was entered after that, then the log will be fully up to
         date.   If you have data currently in memory, you will be warned
         that it will be lost, and allowed to confirm or abort  the  read
         operation.
                 If you choose to recover from BACKUP.LOG, that file will
         be read  and your memory log will be restored.  If there is data
         in  memory  at  present,  you  will  be  warned  and  given  the
         opportunity to confirm or abort the operation.
                 When you will be logging off the contest for an extended
         period of time, say an hour or more, you should log off with the
         <F2> key, save the file to disk, and then exit the program using
         <F10>.  Later, execute CONLOG again, and as the first operation,
         select <F8>  and  a Read operation on the last file saved.  This
         will restore you to the condition at which you left off.






                CONLOG November Sweepstakes Logging System        Page 25











                            K. Standby (Screen Saver)
                 CONLOG is  a  "static"  screen program.  In other words,
         much of the information displayed never changes.  It is possible
         to permanently etch information into  the  phosphor  of  a  CRT.
         (Check  out  your  bank's  "Money  Machine" screen to see what I
         mean!) CONLOG normally  won't  be  used  enough  to  cause  this
         problem,  but  a  feature has been added to help avoid it if you
         leave the contest for  some  minutes  and  don't  want  to  exit
         CONLOG.  Using  <F1> to enter command mode, press <F6> to invoke
         the screen standby.  The screen will be blanked except  for  one
         line, which reminds you to press the space bar to restore normal
         operation.




                           L. Invoking DOS from CONLOG
                 It   is   possible   (if  you  have  enough  memory)  to
         temporarily exit CONLOG back to the normal DOS  prompt,  without
         actually  exiting CONLOG. This can be done to quickly check disk
         space, look at the directory, print a file, or whatever.    What
         can  be  done  is  mainly  limited  by  how  much free memory is
         available on your  system  with  CONLOG  in  place.    From  the
         function  key  menu,  press <F7> to suspend CONLOG operation and
         exit to DOS. If the suspension works, you will get  your  normal
         DOS prompt.    To  return  to CONLOG, type "EXIT<enter>" and you
         will be returned to CONLOG as you left it.
                 If you are "logged into" the contest when invoking  DOS,
         the  time you spend in DOS will be added to your total time when
         you return to CONLOG. If you are going to be  in  DOS  for  more
         than  30  minutes,  be sure to log off the contest first, so the
         time will not continue to accumulate.




                              M. Terminating CONLOG
                 From the  command  mode,  simply  press  <F10>  to  quit
         CONLOG.  If  you have made any changes to the log since the last
         time you saved the log, CONLOG will remind you of the  fact  and
         ask if  you  really want to exit without saving the log.  In all
         cases, CONLOG will request confirmation of your decision to exit
         before the exit actually happens.











                CONLOG November Sweepstakes Logging System        Page 26











                          N. Using the Notepad Function
                 I  don't know how you operate the contest, but when I am
         "queued  up"  to  work  a  station,  I  usually  enter  as  much
         information as  possible  before  the station works me.  Then, I
         need only enter his QSO number and I'm done.   If  I  decide  to
         move  on  for  awhile, I jot this info down on paper and add the
         frequency, and then come back later.  The "notepad"  feature  of
         CONLOG  has  been added to perform this function electronically.
         The notepad is 25 "slots" in the  computer's  memory  which  can
         store  a  station's callsign, precedence, section, check, and an
         optional frequency notation.  Later,  this  information  can  be
         printed out, viewed, or automatically retrieved into the logging
         screen.
                 The  notepad  functions  are  invoked  from  the special
         functions menu with the <ALT-F1> key  combination.    There  are
         three choices on this menu to handle the notepad:
              F3 Save An Entry to the Notepad
              F4 Print the Notepad
              F5 View the Notepad
         To save an entry in the notepad, first enter the callsign of the
         station in  the  logging  screen  as  normal.    Then, enter the
         remainder of the station's data, except his QSO number.   It  is
         not  necessary  to  enter  all information as long as either the
         section or check  is  entered.    Precedence,  if  not  entered,
         defaults to  "B".    After entering this information, invoke the
         special functions menu with <ALT-F1> and press <F3>.   You  will
         be prompted  for a frequency.  If you wish, you may enter from 1
         to 5 digits representing the kHz of the  station.    Or,  simply
         press <RETURN>  to  omit a frequency entry.  After the frequency
         is keyed in, pressing <RETURN> will enter the  information  into
         the notepad.
                 If you enter a station into the notepad which is already
         there,  the old information will simply be replaced with the new
         information.  A station will not occupy more  than  one  notepad
         slot.
                 There are  25  slots in the notepad.  If a 26th entry is
         saved, it replaces the oldest entry in the notepad.
                 To view the items in the  notepad,  press  <F5>  in  the
         special functions menu.  A window will open in the center of the
         screen  with  the  first  available notepad entry. (This may not
         actually be the first entry you made in the  notepad,  however.)
         Pressing  the  <SPACE> bar will advance to the next entry, until
         all have been displayed.  When no more  entries  are  available,
         the window  closes.    Also,  pressing the <ESC> key at any time
         will terminate the viewing function.  Pressing the minus <-> key
         will delete the currently displayed entry from the notepad.
                 The <F4> key in the special functions  menu  will  cause
         the entire  notepad  to  be  printed  out  on  the printer.  The
         printer logging option from the command menu does not have to be
         on for this to operate.  However, the printer does  have  to  be
         ready and  online.  The notepad entries are printed out in order
         for however many entries are valid.


                CONLOG November Sweepstakes Logging System        Page 27











                 The  most  helpful feature of the notepad is its ability
         to automatically recall information.  When a callsign is entered
         in the logging screen, a duplicate check  is,  of  course,  made
         against the  log.    If  the  callsign  is  not a dupe, then the
         notepad is searched.  If the callsign is found in  the  notepad,
         the  notepad  information  is  automatically  transferred to the
         logging screen fields, where it may be used as is, or edited  as
         though you  had  manually  entered  it.    If you do not log the
         station, the entry remains in the notepad.  However, if you  now
         log  the  station with the <INS> keystroke, then this station is
         deleted from the notepad automatically, thus freeing up  a  slot
         in the notepad for a new entry.
                 The  notepad  information  is not actually valid logging
         data, but it is nice to preserve it if you exit the program  and
         resume later.    The  RESUME.LOG  file  will  save  the  notepad
         information  for  later  recovery.  (See  the  next  stion   for
         details.)




                           O. Resumption of Operations
                 Beginning  with  Version  1.80,  CONLOG  incorporates  a
         feature which automatically restores all  data  when  CONLOG  is
         invoked.   Upon  exiting  CONLOG a special file is automatically
         created, named "RESUME.LOG".  This file is NOT,  repeat  NOT,  a
         text file,  and  cannot  be  edited or viewed!  The "RESUME.LOG"
         file contains the following information:

              Last file number saved
              Band active when program exited
              Printer ON/OFF status
              All active notepad items

         When CONLOG is run, the RESUME.LOG file is read  and  the  band,
         printer,  and  notepad  are  restored to the conditions existing
         when CONLOG was exited last.  Also, the  last  log  file  to  be
         saved is  automatically  restored.  The net effect is to restore
         operations exactly as  they  were  when  the  program  was  last
         exited.   Of  course,  if  the  wrong  log  file  is  read in, a
         different  one  can  be  re-read   with   the   <F8>   function.
         Alternately,  you  can  erase the RESUME.LOG file before running
         CONLOG. If the RESUME.LOG  file  is  missing,  CONLOG  does  not
         attempt any restoration of operations; it just starts anew.
                 IMPORTANT:    When   starting   the   contest  from  the
         beginning, be sure than no RESUME.LOG file is present!  In other
         words, after completing the CW weekend, erase RESUME.LOG  before
         the Phone weekend.  In addition, it is not necessary to save the
         RESUME.LOG file  after the contest is completed.  No information
         of any real value is preserved in that file.   It  is  only  for
         convenience in resuming operations during the contest.



                 CONLOG November Sweepstakes Logging System       Page 28











         V. DUPSHEET
                 Even  though  a  logging  program   like   CONLOG   will
         positively prevent duplicate contacts, the ARRL still requires a
         duplicate  check  sheet for all log entries totaling 200 QSOs or
         more.  However, the ARRL has  agreed  to  accept  an  alphabetic
         printout  of  callsigns,  arranged  by call area, in lieu of the
         standard handwritten form they issue.   DUPSHEET  is  a  program
         which prints a duplicate check sheet from your log file.
                 DUPSHEET  will  not  use the BACKUP.LOG file, only a log
         file which was created with the (W)rite option of  <F8>  in  the
         CONLOG program.    The filename specified must have the last two
         digits of the year as the last two characters  in  the  basename
         portion of  the  filename.    Filenames  generated by CONLOG are
         acceptable.  If you rename these files, be sure to  observe  the
         same basic format:

              LOG89.007      is O.K.
              PHONE89.LOG    is O.K.
              SWEEPS.89A      is invalid

                 To  use, simply invoke DUPSHEET with the name of the log
         file to use:

              dupsheet log89.008

         Naturally, substitute your actual filename in the example above.
         All printer configuration information  will  be  retrieved  from
         CONLOG.PRM,  which  must be available and already established by
         running INSTCLOG. (See Chapter III.)
                 The printout will  be  made  with  call  area  0  first,
         proceeding through  call  area  9, and then Canada.  Within each
         call area, callsigns will be arranged alphabetically by callsign
         suffix.   Prefixes  are  ignored  for  sorting,  and   this   is
         considered  acceptable  by  the ARRL. To sort by both prefix and
         suffix would extend the time the sort  takes  by  a  very  great
         amount, and  for no real purpose.  Even a sort of 300 entries on
         a typical 4.77mHz IBM-XT will take a number  of  seconds.    The
         larger the  file, the longer the sort.  BE PATIENT! Just because
         nothing seems to be  happening  doesn't  mean  the  program  has
         crashed.   If  your contacts number into the thousand range, the
         sort on a standard XT may even take a minute or more.













                CONLOG November Sweepstakes Logging System        Page 29











         VI. LOGSHEET
                 The  final  stage in working the "sweeps" is preparing a
         log and summary sheet for submission to the ARRL. LOGSHEET is  a
         program which performs this function from your log file.
                 LOGSHEET  will  not  use the BACKUP.LOG file, only a log
         file which was created with the (W)rite option of  <F8>  in  the
         CONLOG program.    The filename specified must have the last two
         digits of the year as the last two characters  in  the  basename
         portion of  the  filename.    Filenames  generated by CONLOG are
         acceptable.  If you rename these files, be sure to  observe  the
         same basic format:

              LOG89.007      is O.K.
              PHONE89.LOG    is O.K.
              SWEEPS.89A      is invalid

                 To  use, simply invoke LOGSHEET with the name of the log
         file to use and the word "phone" or "cw" to indicate which  mode
         was worked:

              logsheet log89.008 phone

         Naturally,  substitute  your  actual  filename  and  mode in the
         example above.  The filename must be the first parameter and the
         mode second.  All  printer  configuration  information  will  be
         retrieved  from  CONLOG.PRM, which must be available and already
         established by running INSTCLOG. (See Chapter III.) In addition,
         LOGSHEET collects all the miscellaneous information  entered  in
         CONLOG.PRM to complete the summary and log sheet headings.
                 Basically,   there   is  nothing  to  do  after  running
         LOGSHEET. The logsheets will be printed first, followed  by  the
         summary.   Just  sign and date the summary form where indicated.
         If you are a multi-op station, you will also need to fill in the
         callsigns of all operators in the space provided.




















                CONLOG November Sweepstakes Logging System        Page 30











         VII. File Maintenance

                                A. Saving to Disk
                 While  running  CONLOG, the <F8> function can be invoked
         at any time to write out a disk file of the complete log.   This
         should be  done as frequently as you see fit.  I suggest writing
         the log every 1 hour or 100 contacts, whichever comes first, but
         adjust this to your operating conditions.  The  BACKUP.LOG  will
         always  be  up  to  date, but it should be relied upon only as a
         disaster backup, not as the primary disk image of the  log.    A
         current  log dump always gives me a "warm, fuzzy feeling", as it
         should do for you, too.  Naturally, this log dump should  ALWAYS
         be  done before exiting CONLOG. If you don't, CONLOG will remind
         you before you are allowed to exit the program.
                 After the contest, use the last dump  as  the  file  for
         creating the  log  sheets and duplicate check sheets.  When they
         are properly printed out, you can erase all of the  earlier  log
         dump files.   Don't even bother to save them on a floppy -- only
         the last file is really valid.
                 If you operate both the cw and phone contests,  be  sure
         to save the BACKUP.LOG and LOG??.* files in a separate directory
         or floppy  disk  before running the phone weekend.  This is very
         important!  If  you  don't,  your  phone  operation  may  become
         appended to, or replace your cw logs!
                 Finally,  the  RESUME.LOG file is created when CONLOG is
         exited.  It is used  for  automatic  resumption  of  operations.
         After the  contest  is  over, erase this file.  It will serve no
         further purpose.



                       B. Replacing and Deleting BACKUP.LOG
                 The BACKUP.LOG file has no further use after the contest
         is ended and the logs are printed out.  At that time, it  should
         be deleted.   Since it is no longer needed, there is no point in
         using up disk space.   More  importantly,  since  CONLOG  always
         appends  information to any existing BACKUP.LOG, erasing it will
         insure that it starts fresh for the next  contest,  or  for  the
         phone contest if you have already worked the cw contest.















                 CONLOG November Sweepstakes Logging System       Page 31











                           C. Using the Log Information
                 The log file is  mainly  used  for  creating  the  final
         printout.   However,  if you print out the log file as it stands
         using any convenient means, such as  "copy log89.007 prn:",  you
         will  find  that  at  the  end  of the file is a list of all the
         sections worked and the number of contacts in each section made.
         This information may be useful to  you  in  future  contacts  to
         determine where to direct your beam, what geographical areas you
         seem to  work  best,  etc.    Future  plans  for  CONLOG include
         statistical compilation of  this  data  indicating  the  optimum
         times for  each  section,  busy  hours, slack hours, etc.  Until
         then, use this file information as  you  will  to  improve  your
         score.  Remember, "there's always next year"!









































                 CONLOG November Sweepstakes Logging System       Page 32











         VIII. SHAREWARE
                 Shareware  is  reasonably  priced   "try-before-you-buy"
         software.   You  can  get trial copies of shareware software for
         free from anyone who has a copy, or often  from  bulletin  board
         systems  or commercial distributors such as PC-SIG or the Public
         (Software) Library of Houston.  If you use and like the program,
         then you are obligated to purchase, or "register",  the  program
         for  a fee usually much lower than a typical commercial program.
         By registering you will often also receive notice  of  available
         upgrades or  supplemental  programs.    Keep  in  mind  that the
         purchase of a program from a distributor or payment to an online
         service (such as CompuServe) does NOT constitute registration of
         the program since the producer of the program does  not  receive
         one penny  of  that  payment.    Shareware  is NOT public domain
         software, and continued use of a program  carries  with  it  the
         OBLIGATION to  purchase  the  program.    The  free distribution
         method is intended only as  a  means  of  obtaining  a  copy  to
         evaluate before purchasing.
                 The CONLOG  system  is  a shareware program.  If you use
         it, please complete the order form at the end of this manual and
         submit it with your payment.   Notice  that  quantity  purchases
         through a  club  are eligible for a generous discount!  You will
         receive via return mail a diskette with the  latest  version  of
         the  program  and  documentation, and will be notified of future
         program upgrades.  Online help is available  through  CompuServe
         (74435,1042) or GEnie mail (S.MARGISON).  Sorry, but online help
         is available ONLY to registered users.
                 Help is  also  available  by mail.  I will try to answer
         all letters within 48 hours.  Non-registered users must  include
         a SASE   for   a   reply.     The  degree  of  help  offered  to
         non-registered users is purely discretionary.  No  phone  calls,
         please.
                 CONLOG may  be freely exchanged or given away.  However,
         it may not be included or "bundled" with any software  which  is
         sold or  is  a  commercial product without prior permission.  No
         charge may be made for copying or transferring the  files.    PC
         Users  groups  and PD software distributors may charge a nominal
         fee, PROVIDED permission is requested for  distribution.    With
         permission,  a complete distribution disk will be submitted with
         the latest version.
                 CONLOG and its documentation may not be transferred  nor
         exchanged in  any  modified  form.  If you really want to "hack"
         the program or the documentation, by all means do so; but  don't
         give the hacked version to anyone else.  I cannot be expected to
         help  others  use  this  program if it is not the same as it was
         when distributed.  Under  no  circumstances  may  the  copyright
         notices   be  altered  or  removed  from  the  program  or  this
         documentation.
                 If you decide not to use CONLOG, then just erase  it  or
         pass it on to someone else.  If you do use it, please honor your
         obligation and  purchase  this  product.   Inexpensive shareware
         cannot continue to exist if those who use it continue  to  treat


                 CONLOG November Sweepstakes Logging System       Page 33











         it as a gift, rather than as a product for which the author must
         receive payment.  Shareware used regularly  without  payment  is
         piracy  just  as  much as illegally copying "Lotus" or any other
         commercial product.  Ignore  the  claims  by  some  people  that
         shareware,  by virtue of its unique distribution method, carries
         no obligation  to  the  user.    These  claims  are  false,  and
         discourage many good programs from remaining as shareware.
                 CONLOG  is somewhat unique in that it is useful for only
         two weekends during the  year.    What,  therefore,  constitutes
         "regular use"?    If you try the program out before the contest,
         that is "trial usage".  However, if you actually USE the program
         DURING THE CONTEST, then you are a "user" and are  obligated  to
         purchase.   Registering  CONLOG  after  the  contest is entirely
         acceptable.








































                CONLOG November Sweepstakes Logging System        Page 34











         IX. WARRANTY
                 Oh,  this  shouldn't  be  necessary  among  friends  and
         gentlemen, but it's really the lawyers who  run  the  world  and
         they say we gotta do this:


              **    CONLOG,   its   support   programs,   and   this
              documentation  are  copyright  1987-89  by  Steven  E.
              Margison.

              ** This program and documentation are provided "as is"
              without  warranty  of  any  kind,  either expressed or
              implied, including but  not  limited  to  the  implied
              warranties   of  merchantability  and  fitness  for  a
              particular purpose.

              ** The user of this program and documentation agree to
              hold the author and/or distributor(s) of this  program
              and   documentation   harmless   for   any  direct  or
              consequential damages resulting  from  its  use.    In
              other words, "you're on your own!"

              **  IBM  is  a  registered  trademark of International
              Business Machines Corporation.

              ** MS-DOS is a trademark of MicroSoft Corporation.

              ** Many  other  tradenames  have  been  used  in  this
              manual, acknowledgement of which may be assumed.

























                 CONLOG November Sweepstakes Logging System       Page 35











         APPENDIX A.   Screen Layouts  (Shown using standard field format)
                              COMMAND MENU SCREEN
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On:            Time: 1826Z             Total Time: 00:00            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1 +--------------------------------------------------------------------+    |
|  Co|                            COMMAND MENU                            |r   |
|  EM|F1 Exit To Logging Mode                  F6 Screen Standby          |e   |
|  Me|F2 Log On & Off --> OFF                  F7 Suspend to DOS          |t   |
|  NH|F3 Delete An Entry                       F8 File Functions          |n   |
|  RI|F4 Edit An Entry                         F9 Printer Toggle --> OFF  |sk  |
|  Vt|F5 Select Band                          F10 Exit Program            |ta  |
|  WM|              Make function selection...                            |    |
|    |                                                                    |T   |
|    +--------------------------------------------------------------------+    |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+

                              Main Logging Screen
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1826Z             Total Time: 00:00            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1      2      3      4      5      6      7      8      9      0      VE    |
|  Conn   ENY    EPa    Ala    Ark    EBay   Ariz   Mich   Ill    Colo   Mar   |
|  EMass  NLI    Del    Ga     La     Los    Ida    Ohio   Ind    Iowa   Que   |
|  Me     NNJ    MDC    Ky     Miss   Org    Mont   WVa    Wisc   Kans   Ont   |
|  NH     SNJ    WPa    NC     NMex   SBar   Nev                  Minn   Man   |
|  RI     WNY           NFla   NTex   SCV    Oreg                 Mo     Sask  |
|  Vt                   SC     Okla   SDgo   Utah                 Nebr   Alta  |
|  WMass                SFla   STex   SF     Wash                 NDak   BC    |
|                       Tenn   WTex   SJV    Wyo                  SDak   NWT   |
|                       Va            SV     Alask                             |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+


              CONLOG November Sweepstakes Logging System               Page A-1











                    Main Logging Screen with Entry Pending
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL WA9DRE     NR 12       PREC B     CHECK 62     SECT ILL             |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1826Z             Total Time: 00:00            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1      2      3      4      5      6      7      8      9      0      VE    |
|  Conn   ENY    EPa    Ala    Ark    EBay   Ariz   Mich   Ill    Colo   Mar   |
|  EMass  NLI    Del    Ga     La     Los    Ida    Ohio   Ind    Iowa   Que   |
|  Me     NNJ    MDC    Ky     Miss   Org    Mont   WVa    Wisc   Kans   Ont   |
|  NH     SNJ    WPa    NC     NMex   SBar   Nev                  Minn   Man   |
|  RI     WNY           NFla   NTex   SCV    Oreg                 Mo     Sask  |
|  Vt                   SC     Okla   SDgo   Utah                 Nebr   Alta  |
|  WMass                SFla   STex   SF     Wash                 NDak   BC    |
|                       Tenn   WTex   SJV    Wyo                  SDak   NWT   |
|                       Va            SV     Alask                             |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+

                  Prompt to confirm killing of pending entry
+------------------------------------------------------------------------------+
|     Kill current entry? (y/n)                                                |
|     CALL WA9DRE     NR 12       PREC B     CHECK 62     SECT ILL             |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1827Z             Total Time: 00:01            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1      2      3      4      5      6      7      8      9      0      VE    |
|  Conn   ENY    EPa    Ala    Ark    EBay   Ariz   Mich   Ill    Colo   Mar   |
|  EMass  NLI    Del    Ga     La     Los    Ida    Ohio   Ind    Iowa   Que   |
|  Me     NNJ    MDC    Ky     Miss   Org    Mont   WVa    Wisc   Kans   Ont   |
|  NH     SNJ    WPa    NC     NMex   SBar   Nev                  Minn   Man   |
|  RI     WNY           NFla   NTex   SCV    Oreg                 Mo     Sask  |
|  Vt                   SC     Okla   SDgo   Utah                 Nebr   Alta  |
|  WMass                SFla   STex   SF     Wash                 NDak   BC    |
|                       Tenn   WTex   SJV    Wyo                  SDak   NWT   |
|                       Va            SV     Alask                             |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+



               CONLOG November Sweepstakes Logging System              Page A-2











                     Main Menu with Several Contacts Made
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 6        BAND  20                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1834Z             Total Time: 00:08            |
|                                                                              |
|     QSO Total: 5        Sections: 5      Score:     50        QSO/Min:  1.0+ |
|     Last Call Logged: K9XXX                                                  |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     2     3     0     0     0       3              |
|               TIME:  00:00 00:05 00:03 00:00 00:00 00:00   00:03   1.0+      |
|  1      2      3      4      5      6      7      8      9      0      VE    |
|  Conn   ENY    EPa    Ala    Ark    EBay   Ariz   Mich   Ill    Colo   Mar   |
|  EMass  NLI    Del    Ga     La     Los    Ida    Ohio   Ind    Iowa   Que   |
|  Me     NNJ    MDC    Ky     Miss   Org    Mont   WVa    Wisc   Kans   Ont   |
|  NH     SNJ    WPa    NC     NMex   SBar   Nev                  Minn   Man   |
|  RI     WNY           NFla   NTex   SCV    Oreg                 Mo     Sask  |
|  Vt                   SC     Okla   SDgo   Utah                 Nebr   Alta  |
|  WMass                SFla   STex   SF     Wash                 NDak   BC    |
|                       Tenn   WTex   SJV    Wyo                  SDak   NWT   |
|                       Va            SV     Alask                             |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+

       Error window for invalid section name (Short section names shown)
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL WA9DRE      NR 12        PREC B      CHECK 62      SECT ILM         |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1827Z             Total Time: 00:01            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:02 00:00 00:00 00:00 00:00   00:02   0.0       |
|  1      2      3  +-----------------ERROR----------------+      0      VE    |
|  CT     ENY    EPA|                                      |L     CO     MAR   |
|  EMA    NLI    DE |         INVALID SECTION NAME         |N     IA     PQ    |
|  ME     NNJ    MDC|                                      |I     KS     ON    |
|  NH     SNJ    WPA+--------------------------------------+      MN     MB    |
|  RI     WNY           NFL    NTX    SCV    OR                   MO     SK    |
|  VT                   SC     OK     SDG    UT                   NE     AB    |
|  WMA                  SFL    STX    SF     EW                   ND     BC    |
|                       TN     WTX    SJV    WW                   SD     NWT   |
|                       VA            SV     WY                                |
|                       PR   - VI     PAC    AK                                |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+



              CONLOG November Sweepstakes Logging System               Page A-3











                         Special Functions Menu Screen
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1826Z             Total Time: 00:00            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1 +--------------------------------------------------------------------+    |
|  Co|                       SPECIAL FUNCTION MENU                        |r   |
|  EM|F1 Exit To Logging Mode                  F6 (future use)            |e   |
|  Me|F2 Exit to Command Menu                  F7 (future use)            |t   |
|  NH|F3 Save Entry to Notepad                 F8 (future use)            |n   |
|  RI|F4 Send Notepad to Printer               F9 (future use)            |sk  |
|  Vt|F5 View Notepad                         F10 (future use)            |ta  |
|  WM|              Make function selection...                            |    |
|    |                                                                    |T   |
|    +--------------------------------------------------------------------+    |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+

                            Notepad Viewing Window
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1828Z             Total Time: 00:02            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs+--------------VIEW NOTEPAD--------------+  0              |
|               TIME|                                        |0:00   0.0       |
|  1 +--------------|     WA9DRE  Ill    B  62  14275 kHz    |------------+    |
|  Co|              |                                        |            |r   |
|  EM|F1 Exit To Log| <space> Scroll  <ESC> Quit  <-> Delete |            |e   |
|  Me|F2 Exit to Com|                                        |            |t   |
|  NH|F3 Save Entry +----------------------------------------+            |n   |
|  RI|F4 Send Notepad to Printer               F9 (future use)            |sk  |
|  Vt|F5 View Notepad                         F10 (future use)            |ta  |
|  WM|              Make function selection...                            |    |
|    |                                                                    |T   |
|    +--------------------------------------------------------------------+    |
|                       PR   - USVI   Pac                                      |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+



               CONLOG November Sweepstakes Logging System              Page A-4











                          Short Section Names Format
+------------------------------------------------------------------------------+
|                                                                              |
|     CALL            NR          PREC       CHECK        SECT                 |
|     Send QSO # 1        BAND  40                                             |
|                                                                              |
|     Time On: 1826Z      Time: 1826Z             Total Time: 00:00            |
|                                                                              |
|     QSO Total: 0        Sections: 0      Score:      0        QSO/Min:  0.0  |
|     Last Call Logged:                                                        |
|               BAND    80    40    20    15    10    160  Current   Avg       |
|               QSOs:     0     0     0     0     0     0       0              |
|               TIME:  00:00 00:00 00:00 00:00 00:00 00:00   00:00   0.0       |
|  1      2      3      4      5      6      7      8      9      0      VE    |
|  CT     ENY    EPA    AL     AR     EB     AZ     MI     IL     CO     MAR   |
|  EMA    NLI    DE     GA     LA     LAX    ID     OH     IN     IA     PQ    |
|  ME     NNJ    MDC    KY     MS     ORG    MT     WV     WI     KS     ON    |
|  NH     SNJ    WPA    NC     NM     SB     NV                   MN     MB    |
|  RI     WNY           NFL    NTX    SCV    OR                   MO     SK    |
|  VT                   SC     OK     SDG    UT                   NE     AB    |
|  WMA                  SFL    STX    SF     EW                   ND     BC    |
|                       TN     WTX    SJV    WW                   SD     NWT   |
|                       VA            SV     WY                                |
|                       PR   - VI     PAC    AK                                |
+----------<F1> Command Menu---------------<Alt-F1> Special Functions----------+





























              CONLOG November Sweepstakes Logging System               Page A-5











                          APPENDIX B.   Registration Form
          ======================================================================
                       SOFTWARE REGISTRATION FORM AND ORDER
          ======================================================================
          This form may be photocopied or printed out.

          PRODUCT: --------- CONLOG SWEEPSTAKES SYSTEM V1.80 --------------

          Quantity:                                               Amount:

          _________  Standard Registrations           $20.00       $______
                              (Payment in US Dollars ONLY)
              If ordering 3 or more copies, discount the price
              by 20% ($4.00) per copy               LESS DISCOUNT  $______
              (Quantity orders to one shipping address.  However,
               for update purposes, please send individual names
               and addresses of registrants.)

                                           TOTAL ENCLOSED:         $______


          If you already have this program, from where was it obtained?
          [ ]CompuServe  [ ]Friend  [ ]Employer  [ ]BBS:__________________
          Version___________ Serial No._______________

          Payment is by check[ ] or money order[ ] (Sorry - no COD or charges)

          NAME _____________________________________CALL: ____________

          ADDRESS ____________________________________________________

          CITY _______________________________________________________

          STATE___________________________ ZIP _______________________


          ======================================================================
          Send completed form and payment to:
                          Steven E. Margison, WA9DRE
                               124 Sixth Street
                           Downers Grove, IL, 60515























```
{% endraw %}

## FILE1885.TXT

{% raw %}
```
Disk No: 1885                                                           
Disk Title: Conlog                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Conlog                                                   
Author Version: 05/10                                                   
Author Registration: $20.00.                                            
Special Requirements: Dos 3.0 Recomm.                                   
                                                                        
In the world of the amateur radio operator, or Ham, documentation is a  
priority. There's a need to know who you have contacted, when you made  
the contact, the parameters of the frequency, etc. Recording this infor-
mation calls for a lot of pencil pushing over several forms.            
                                                                        
CONLOG eases the finger cramp associated with radio logging by providing
a single structured data entry screen for the radio operator. Working in
the radio room, COMLOG accepts the log information field by field as the
operator makes the call. Later, COMLOG prints the contact documentation 
on American Radio Relay League approved forms. COMLOG also prints radio 
statistics, including: Avg number of contacts per minute, Total contacts
for each band, and number of contacts since last band change.           
                                                                        
CONLOG also provides a screen standby feature to avoid video burn-in, a 
DOS shell feature, and a notepad. The manual provides several sample    
data entry screens.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLYER.TXT

{% raw %}
```

         SEM  Software  is  a  growing  collection  of shareware software
         products for the MS-DOS community.  Prices are  reasonable,  and
         quality  is  high,  since  all software is created by a fulltime
         professional  software  engineer  with   a   Chicago   high-tech
         consulting firm.   Help to registered users is available through
         Compuserve, GEnie, or mail.  Orders and inquiries  are  normally
         processed within  48  hours.   Free trial copies of all software
         may be obtained  from  Compuserve  (IBMSIG),  Public  (Software)
         Library  of Houston, GEnie, and many systems around the country.
         Unless noted otherwise, all programs  operate  under  MS-DOS  or
         PC-DOS  2.1 and above, on IBM XTs, ATs, or compatibles, and will
         work on MDA, Hercules, CGA, and EGA video cards.
                        FOR PRINTING AND TEXT PROCESSING:

              *****   SUPER PRINT   *****
              The ultimate in printing utilities,  SUPER  PRINT  has
              just   about  any  printing  feature  which  could  be
              desired.  SUPER PRINT will print files  with  embedded
              control   characters,   will  slash  zeros,  add  line
              numbers, add left margin space for  three-hole  paper,
              page  number, print file time and date in heading, and
              other stuff.  Recent  additions  include  page  length
              setting,  top and bottom margins, wild card filenames,
              prompted   printing,   printer   configuration   file,
              adjustable tab  expansion, and more!  This is also one
              of the few printing utilties which may be  the  target
              of piped data from another program.  Now, version 2.70
              includes  even  more enhancements, including character
              translation capabilities.  The most software  you  can
              get for only $10!

              ******   NEAT   *****
              This  is  a  text  formatting  program similar to UNIX
              nroff, except oriented to the PC user.  Virtually  any
              printer  can be supported with several different fonts
              or ribbon options.  This program also has file merging
              features for creating form letters merged with address
              lists, or other such uses.

                           FOR C LANGUAGE PROGRAMMERS:

              *****   STEVE'S TURBO-C LIBRARY   *****
              This expansion library for Borland's Turbo-C has  over
              130 functions and growing.  Although Version 1.5 of TC
              contains  direct  video  access, "Steve's Library" was
              the FIRST to contain a full library  of  direct  video
              text functions for this compiler.  Many users say that
              my  functions  are  even better and easier to use than
              Borland's.  The library includes complete source  code
              in  C and assembler, plus several useful header files.
              Included are printer BIOS service  routines  for  fast
              printer  access,  and  async communications functions,
              directly accessing the serial ports  for  fast  access
              without buffering.  Up to 9600 baud is possible!
              Need to accept wildcard filenames on the command line?
              My  exparg()  function  re-arranges (argc, argv) to an
              expanded array with all wildcards expanded to matching
              filenames.
              An installable interrupt handler for  the  18.2  Hertz
              interrupt   is   included  so  that  simple  real-time
              applications can be  programmed  which  will  function
              properly regardless of the type of system in use.
              Functions  for  file  opening  from PATH and specified
              environment variables make opening a file anywhere  in
              the environment totally transparent to the programmer.
              And  now,  support  is  also  included  for the switch
              inputs on the game port!   This  4-bit  port  is  very
              handy  for reading switches or other logic levels from
              any outside device.
              Full documentation suitable for printing  and  placing
              in  a  binder  is  provided,  along  with a utility to
              automate the printing.
              To demonstrate various functions from STEVE'S LIBRARY,
              six utilites with  source  code  are  included.    The
              utilities include:
              GTOD - Reports time and date in many formats
              TC - Compare two text files and report differences
              WC  -  Count  words,  lines, characters, and checksums
              files
              OKISET -  Configure  an  Okidata  Printer  or  similar
              IBM-type printer
              INPATH - Locate an executable file in current PATH
              DUMP - Unique hex dump program in COLOR, with optional
              highlighted bytes.

              *****   STEVE'S ZORTECH C LIBRARY   *****
              This  expansion  library  for  Zortech C  has over 100
              functions.  Much of "Steve's Library" for Turbo - C is
              included,  except  the  direct  video  (which  Zortech
              provides).   However,  "Steve's Library" provides much
              of  what  Zortech  forgot,  like   control-break   and

              critical   error   interrupt   handlers,  device  type
              interrogation functions, a game  port  handler,  async
              functions, direct  printer  functions,  and more.  All
              functions have been optimized for Zortech.




                           FOR AMATEUR RADIO OPERATORS

              *****   CONLOG   *****
              This is the first in what  will  become  a  series  of
              contest   logging   programs  for  the  Amateur  Radio
              Operator.  CONLOG is intended for the annual  November
              Sweepstakes.   This  package is more than one program.
              There is a logging program for use during the contest,
              and  two  support  programs  to  print  the  resulting
              logsheets, summary,  and  duplicate check sheets.  All
              forms  are  printed  with  slick  graphics  (for   IBM
              compatible  printers only), but can be also printed on
              non-IBM printers without the graphics.  The forms have
              been approved by the  ARRL  for  submission  as  valid
              contest entries.     Extra  care  has  been  taken  to
              preserve all log entries, even if there is a system or
              power failure.   The  user  can  configure  all  video
              attributes,   plus   name,   QTH,   rig,  and  section
              information.  This program is the  result  of  various
              programs  written  over  the  last seven years for the
              Sweepstakes.  No guarantees are made, but MY score has
              increased by over 25% as a result of computer logging!
              And the time saved in re-copying  the  logs  (to  make
              them readable!)  is  incredible.   My entry is usually
              ready for mailing about 30 minutes after  the  contest
              ends.   All new contest rules are supported, including
              the new West Texas section, and QRP power  precedence.
              Provisions  are  made  to  edit  or delete log entries
              during the contest, and the  program  absolutely  will
              not let  you  log a duplicate callsign!  Log size is a
              hefty 2500 entries to  cover  even  you  guys  in  the
              COLorado section.    Try  it once, and throw away your
              pencil!  And when you work  the  contest,  say  hi  to
              WA9DRE when we work!




         Corporations and clubs: Quantity discounts and/or site licensing
         agreements are   welcomed.      Send  your  requirements  for  a
         quotation.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1885

     Volume in drive A has no label
     Directory of A:\

    CONLOG   DOC    123676   5-10-89   8:20p
    CONLOG   EXE     64046   5-10-89   7:41p
    CONLOG   ORD      1972   4-26-89   7:20p
    DUPSHEET EXE     17528   5-10-89   7:43p
    FILE1885 TXT      2295  12-29-89  11:39a
    FLYER    TXT      8292   2-09-89   7:00p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:37a
    INSTCLOG EXE     24550   5-10-89   7:42p
    LOGSHEET EXE     23852   5-10-89   7:43p
    NOEOF    BAT       203  12-10-86   9:12p
    ORDER    FRM      2159   2-09-89   6:59p
    README            4107   5-10-89  12:34p
    SYMBOL   EXE      4090   5-10-89   7:42p
           14 file(s)     277348 bytes
                           36864 bytes free
