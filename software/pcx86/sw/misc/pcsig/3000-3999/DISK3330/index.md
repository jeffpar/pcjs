---
layout: page
title: "PC-SIG Diskette Library (Disk #3330)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3330/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3330"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BBS_REG.TXT

{% raw %}
```
      DSZ BBS Registration Form (must be accompanied by a paid registration)

Mail to:      Omen Technology INC,  17505-V NW Sauvie IS RD,  Portland OR 97231

Name     __

BBS Title/Nickname ___________________________________

Address  __

         __

         __

Daytime Phone (_____) _____________________  Evenings (_____)  _________________

BBS Phone  (________) _____________________________________  Hours: ____________

Public Access/Registration Policy: 

Area where ZCOMM files are stored:

I agree to feature the ZCOMM files (ZCOMMEXE.ARC, ZCOMMDOC.ARC,
ZCOMMHLP.ARC) for downloading, and to announce the availability and
features of ZCOMM in any bulletins, help displays, or other displays that
mention communications programs.  It is my responsibility to maintain
reasonably current versions of the ZCOMM files on the BBS shown above.

I understand that DSZ is not and never has been Copy Protected.  I fully
understand that "DSZ unprotect" files have no function except as a device
to enable Conspiracy in the the theft of Omen Technology's Intellectual
Property.

If I see any program or information intended to defraud Omen Technology by
compromising DSZ's registration procedures, I shall diligently attempt to
identify the author or uploader of such materials, report this information
to Omen Technology, and cause such materials to be removed.  I fully
understand that DSZ is not copy protected in any way.  I also understand
that distributing any "DSZ unprotect" material is a conspiracy that
financially damages DSZ's author.

*******************************************************************************
*                                                                             *
*Incomplete forms will not be processed.  A physical signature is required.   *
*                                                                             *
*      I have read and agree to the "Bulletin Board Registration"             *
*           in the DSZ.DOC file for each version of DSZ I use.                *
*                                                                             *
*                                                                             *
*Signed ___________________________________________ DATE _________________    *
*         SUBMISSIONS MUST BE ACCOMPANIED BY A PAID DSZ REGISTRATION          *
*                                                                             *
*******************************************************************************
```
{% endraw %}

## DSZ.DOC

{% raw %}
```




                                     CONTENTS


      1.  ZMODEM Features at a Glance....................................   1

      2.  TUTORIAL INTRODUCTION..........................................   3

      3.  CALLING DSZ FROM COMM PROGRAMS.................................   4
          3.1    USE AN INTERFACE PROGRAM?...............................   4
          3.2    Ms-Kermit 3.00..........................................   4
          3.3    PROCOMM PLUS............................................   4
          3.4    Qmodem..................................................   6
          3.5    TELIX...................................................   7
          3.6    BULLETIN BOARDS.........................................   8

      4.  DESCRIPTION....................................................   9

      5.  COMMANDS.......................................................  11
          5.1    List of Commands........................................  11
          5.2    Interrupt Keys..........................................  17

      6.  NUMERIC PARAMETERS.............................................  18

      7.  ENVIRONMENT VARIABLES..........................................  22

      8.  EXIT STATUS....................................................  26

      9.  EXAMPLES.......................................................  27

     10.  BACKGROUND OPERATION...........................................  28
          10.1   Windows 3...............................................  29
          10.2   VM......................................................  29

     11.  FLOW CONTROL...................................................  30

     12.  ERROR MESSAGES.................................................  31
          12.1   Got ZRPOS...............................................  32
          12.2   Subpacket too Long......................................  33
          12.3   Bad CRC.................................................  33
          12.4   Serial Input Error: Line Status Register xx ............  33
          12.5   No Carrier Detect.......................................  35
          12.6   Port %d (%X) defective..................................  35
          12.7   COMMAND NOT FOUND.......................................  36
          12.8   Out of Environment......................................  36

     13.  SLOW TRANSFERS.................................................  37

     14.  IN CASE OF DIFFICULTY..........................................  38
          14.1   LOCKUPS.................................................  38
                 14.1.1   Insufficient Memory  38
                 14.1.2   Environment TOO BIG  38








                 14.1.3   Bad COM Port Configuration  38
                 14.1.4   LAN Manager Conflicts  39
          14.2   Incorrect Batch Files...................................  40
          14.3   Cheap Internal Modems...................................  40
          14.4   Commands Entered in Upper Case..........................  40
          14.5   No Carrier Detect.......................................  40
          14.6   PKARC 3.6...............................................  41
          14.7   DOS 3.x.................................................  41
          14.8   Perstor Controllers.....................................  41
          14.9   IBM PS/2 Model 50Z......................................  41
          14.10  Brain Damaged UARTS.....................................  42
                 14.10.1  Everex Internal Modems  43
          14.11  Weird Iron..............................................  43
          14.12  Will the real YMODEM please stand up?...................  44
          14.13  286 and 386 Extended Memory.............................  44
          14.14  Disk Caches.............................................  44

     15.  ASSOCIATED DOCUMENTS...........................................  45

     16.  FILES..........................................................  46

     17.  Other Omen Technology Products.................................  48
          17.1   Professional-YAM COMMS TOOLS............................  48
          17.2   ZCOMM: Industrial Strength COMMS Shareware..............  48
          17.3   ZMODEM Developer's Collection...........................  48

     18.  FAIR PLAY......................................................  49
          18.1   Sharing DSZ Files.......................................  50
          18.2   REGISTRATION............................................  51
          18.3   Files on Registration Disk..............................  53
          18.4   Bulletin Board Registration.............................  54

     19.  CHANGES........................................................  56

     20.  ACKNOWLEDGEMENTS...............................................  66

























                                  Chuck Forsberg

                               Omen Technology Inc


                                     ABSTRACT



                   ZMODEM-90(TM) - Not just another XMODEM hack

     DSZ is one of many available programs that implement the ZMODEM file
     transfer protocol.  DSZ features the ZMODEM-90(TM) extensions including
     ZMODEM compression and MobyTurbo(TM) accelerator.

     DSZ's ZMODEM provides advanced file management features including two
     levels of Intelligent Crash Recovery(TM), and flexible control of
     selective file transfers.

     The ZMODEM file transfer protocol provides reliable file and command
     transfers with complete END-TO-END data integrity between application
     programs.  DSZ's 32 bit CRC protects against errors that sneak by "error
     free" modems and even the most advanced networks.

     ZMODEM safeguards all data and supervisory information with effective
     error detection.  (XMODEM and many recently introduced protocols do not
     protect vital supervisory data.)

     ZMODEM rapidly transfers files, particularly with modern modems,
     timesharing systems, satellite relays, and packet switched networks.
     ZMODEM's streaming operation eliminates delays caused by
     Kermit/XMODEM/YMODEM/JMODEM block acknowledgements.  ZMODEM eliminates
     traditional protocols' PACKET LENGTH compromises between transfer
     efficiency and error recovery; ZMODEM's packet length is the entire
     file.

     User Friendliness is an important ZMODEM feature.  ZMODEM
     AutoDownload(TM) (Automatic file Download without user intervention)
     provides a level of convenience unimaginable to users of traditional
     protocols.














       DSZ - a ZMODEM-90(TM), True YMODEM(TM), XMODEM File Transfer Program


                               Omen Technology Inc


     1.  ZMODEM Features at a Glance

     _______________________________________________________________________
     |   Feature              | ProCm | RZSZ | DSZ  | GSZ | ZCOMM | Pro-YAM |
     |________________________|_______|______|______|_____|_______|_________|
     |Security Verification   | no    | no   | no   | no  | no    | YES     |
     |Cybnertic Data Recovery | no    | no   | YES  | YES | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |Command Download        | no    | YES  | no   | no  | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |Update Directory Tree   | no    | YES* | no   | no  | YES   | YES     |
     | Create Directories     | no    | YES* | no   | no  | YES   | YES     |
     | Newer files Only       | no    | YES  | YES  | YES | YES   | YES     |
     | Protect files          | ?     | YES  | YES  | YES | YES   | YES     |
     | Common files Only      | no    | YES  | YES  | YES | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |Collision Aviodance     | ?     | no   | YES* | YES | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |Crash Recoverey         | YES   | YES  | YES  | YES | YES   | YES     |
     | Verified Accuracy      | no    | SZ   | YES  | YES | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |ZMODEM-90(TM)           | no    | YES  | YES  | YES | YES   | YES     |
     | Compression            | no    | YES  | YES  | YES | YES   | YES     |
     | MobyTurbo(TM)          | no    | YES* | YES  | YES | YES   | YES     |
     | 7-bit Paths OK         | no    | YES* | YES* | YES | YES   | YES     |
     |                        |       |      |      |     |       |         |
     |OPERATING SYSTEMS       |       |      |      |     |       |         |
     | Text Translation       | no    | YES  | YES  | YES | YES   | YES     |
     | Record Format Support  | no    | YES  | YES  | YES | YES   | YES     |
     | DOS Shared Files       | ?     | -    | YES* | YES | no    | no      |
     | OS/2                   | no    | no   | no   | no  | no    | YES     |
     | VMS                    | no    | YES  | no   | no  | no    | YES     |
     | Unix/Xenix             | no    | YES  | no   | no  | no    | YES     |
     |                        |       |      |      |     |       |         |
     |True YMODEM(TM)         | no    | YES  | YES  | YES | YES   | YES     |
     |Demand Upgrade(TM)      | no    | YES  | YES  | YES | YES   | YES     |
     |File Transfer Display   | YES   | no   | no   | YES | YES   | YES     |
     | TOTAL File Xfer Data   | no    | YES  | YES  | YES | YES   | YES     |
     |________________________|_______|______|______|_____|_______|_________|

     ProCm = ProComm Plus
     * Not available on all flavors or platforms











     Chapter 1 Pg 2         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     *************************************************************************
                           DSZ registration is special.
     With most programs, registration only applies only to today's version.
     Not DSZ!

     DSZ registration bypasses the shareware announcement and unlocks
     advanced features in all future versions of DSZ.  You don't have to pay
     and pay again for new DSZ versions.  Omen's Demand Upgrade(TM)
     technology allows you to download and activate future DSZ versions
     without further registration!
     *************************************************************************













































     Chapter 2 Pg 3         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     2.  TUTORIAL INTRODUCTION

     If you are just starting out with DSZ, or if you have difficulty getting
     DSZ to work, please follow the procedure given below.

     Do not run any TSR or other COMM program.  This includes LAN programs.
     Reboot a clean DOS if necessary.

     Start with the following command given directly from the DOS prompt:

                             dsz port 1 speed 2400 d t

     Type it exactly as it appears above; do NOT use upper case.

     (Change the port number and speed as necessary.  Use only COM1 or COM2
     for testing.)

     This connects you to the modem.  Dial a bulletin board by typing AT
     commands to the modem ("ATDP621-3746 <enter>")[1] to make it dial the
     BBS.  Log in as usual.  Then, request a ZMODEM download of a file you
     don't already have.  The file will download automatically, you don't
     have to do anything.  This procedure verifies the correct operation of
     DSZ.























     __________

      1. If your modem has a non standard setting the ATDT621-3746 command
         you type to the modem may not echo on the screen.






     Chapter 3 Pg 4         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     3.  CALLING DSZ FROM COMM PROGRAMS

     It may be necessary to add the DOS command: SET COMSPEC=C:\COMMAND.COM
     (change as needed) to your AUTOEXEC.BAT file to allow programs to call
     DSZ.

     Note: NO SPACES in the SET command!

     3.1  USE AN INTERFACE PROGRAM?

     A number of third party programs have been developed to provide a
     congenial interface to DSZ if you have enough memory to spare.  The
     XFER, POE, PCALL, DSZ_ZAP, and PROZ programs have been popular in
     interfacing DSZ to ProComm's editor gateway.  These programs are
     available on many bulletin boards.

     Hint: the DOS PATH environment variable must include ProComm's directory
     to allow POE to locate all the POE files,.  The POE files should be
     stored in the ProComm directory.  Setting the "PROCOMM" environment
     variable is insufficient.


     Calling DSZ with these programs requires more memory than calling DSZ
     directly.

     3.2  Ms-Kermit 3.00

     The "push" command (^[p) in MS-Kermit 3.00 sends an XOFF character to
     the modem before calling DOS.

     Using this to activate DSZ's term mode with a "dsz t" command causes
     most remote hosts to stop.  The remote host can be un-wedged by
     keyboarding XON (Ctrl-Q) from DSZ's terminal mode.

     Add these macros to your MSKERMIT.INI file.  Courtesy Keith Petersen
     W8SDZ

     define sx run dsz F port 2 sx 1 2,define 1,define 2,
     define rz run dsz F ha on port 2 pY129 rz -r
     define sz run dsz F ha bo port 2 pY129 pB4096 sz 1 2,define 1,define 2,
     define t run dsz F ha on port 2 pY129 t -r


     3.3  PROCOMM PLUS

     It's easy to add DSZ to ProComm Plus.

     Datastorm has not licensed ZMODEM-90(TM) technology despite allegations
     that DSZ is now "built in" to ProComm Plus version 2.  Many users of
     ProComm Plus version 2.x use DSZ to get MobyTurbo(TM), Intelligent Crash
     Recovery(TM), and other ZMODEM-90(TM) features.





     Chapter 3 Pg 5         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     Make sure the DSZ program is in your search path.  If you don't see DSZ
     announce itself when called from ProComm, DSZ is not in your search
     path.

     Here are some handy settings for ProComm Plus.

     First, you may need to set the DOS environment before running ProComm.
     Give these commands to DOS before running ProComm Plus.  (These lines
     may be added to your AUTOEXEC.BAT file.)

     Note: NO SPACES in the SET command!
     SET DSZPORT=2                   (Only needed for COM2)
     SET DSZLOG=DSZ.LOG      (Only if you wish a log file)

     Then set ProComm's external protocol strings.  From terminal mode hit
     ALT-S, then select the PROTOCOL OPTIONS menu item.

     From that menu select EXTERNAL PROTOCOL OPTIONS.  Then set ProComm's
     external protocol strings to:
     A- External protocol 1 upload filename:  ZMODEMU
     B- External protocol 1 download filename: ZMODEMD
     C- External protocol 2 download filename: ZMODEMMD

     The following batch files are included in the DSZ zipfile:
     ZMODEMU.BAT (contains:  DSZ sz %1 %2 %3 %4 %5 %6 %7 %8 %9)
     ZMODEMD.BAT (contains:   DSZ rz)
     ZMODEMDR.BAT (contains:   DSZ rz -r)
     ZMODEMMD.BAT (contains:   DSZ rz -mr)
     ZMODEMAD.BAT (contains: DSZ t)

     !!!!IMPORTANT USE lower case (small letters) EXCEPT WHERE SHOWN!!!!

     If using ProcommPlus 2.x, select the ZMODEM PROTOCOL OPTIONS menu and
     turn off Auto downloading.

     When sending (uploading) files with ZMODEMU.BAT give the ProComm window
     the full pathname (c:/foo/bar/file.ext) for *each* file not residing in
     the current directory.

     When downloading files with one of the other batch files shown above,
     Procomm will also prompt for parameters; just hit ENTER.  Or, you can
     enter options such as "-mr" if they are't included in the batch file
     itself.

     Once you've got the hang of things the "ProComm way", try the "dsz t"
     command described above to give you automatic ZMODEM-90(TM) downloads
     (Look Ma, no keystrokes!!!)..

     You can also set the editor hot key (ALT-A) or view program hot key
     (ALT-V) by using the ALT-S "FILE/PATH OPTIONS" menu.  The strings for
     these keys are long enough to store an entire DSZ command line without





     Chapter 3 Pg 6         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     need for a batch file.

     COM3 and COM4 on Procomm Plus are non standard; in case of difficulty
     use COM1 or COM2 or use the portx command.

     DSZ may not operate properly when called from ProComm if ProComm has
     files open at the time.

     A number of reports have been received of problems running DSZ from
     ProComm Plus because of insufficient memory.  Please refer to the
     subchapter on LOCKUPS.

     When running under ProComm's Host mode, failure to use the DSZ CON
     command may cause ProComm to lock up the computer, or at least interfere
     with file transfers, etc.

     EXAMPLE: DSZ CON sz %1


     Hint: the DOS PATH environment variable must include ProComm's directory
     to allow POE to locate all the POE files,.  The POE files should be
     stored in the ProComm directory.  Setting the "PROCOMM" environment
     variable is insufficient.


     3.4  Qmodem

     Instability in the Qmodem interface may require changes in the batch
     files depending on which version of Qmodem is used.

     If you define a protocol with 'Z' as its letter, the latest Qmodem will
     detect automatic ZMODEM downloads.  Defining an external 'Z' protocol
     disables Qmodem's internal ZMODEM, allowing DSZ to be called.

     The following is based on a message from Mike Cody, sysop of HomePlate
     313-385-9969 3/12/24/96 HST

     Go into Qinstall and go to frame 3 Directories. Then select External
     protocols #3 I think. Now you will see a definition area to tell Qmodem
     the Letter,batchfile combo to use.

     Now put Z in the letter definition, Zup.bat in the u/l batch zdown.bat
     in the d/l batch, and Y in the batch protocol. Now save it at the menu
     with f10 and S.

     Then go to DOS and create the following batch files in your Qmodem
     directory...

     zdown.bat: DSZ port %2 speed %1 rz -rr

     zmdown.bat: DSZ port %2 speed %1 rz -mrr      ((FOR MOBYTURBO!!))





     Chapter 3 Pg 7         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     zup.bat: DSZ port %2 speed %1 sz %4

     !!!!IMPORTANT USE lower case (small letters) EXCEPT WHERE SHOWN!!!!

     These are the batch files that will be called by Qmodem.  If you did
     everything right when you hit PGDN or PGUP you will see an external
     protocol called Z) Zmodem in the box. For an easier time do a search for
     either External.arc or maybe the string "Qmodem" in the file database as
     there is a file with several external protocols and batch files
     available in the Mahoney file section (EXEC-PC BBS).

     The following batch files for Qmodem are included in the DSZ zipfile:

     ZDOWN.BAT contains:     DSZ port %2 speed %1 rz -rr
     ZUP.BAT contains:       DSZ port %2 speed %1 sz %4

     !!!!IMPORTANT USE lower case (small letters) EXCEPT WHERE SHOWN!!!!

     A variation on the receive batch file:
     c:elecomqmodem\*y.com ha slow est 0 %3 rz -mrr
     A variation on the send batch file:
     c:elecomqmodem\*y.com ha cts est 0 %3 sz %4


     If Qmodem says "unable to allocate swap space": QMODEM 4.2 will swap all
     but approx. 5K to memory or disk when you shell out to DSZ. Go into
     QINSTALL and make sure that /O /R Optimum Shell and Disk Shell are both
     set to ON.

     For older Qmodem versions (before 4.2) change the %4 in upload scripts
     to %3.

     3.5  TELIX

     Telix has an internal ZMODEM, but some users prefer to use DSZ for
     performance and/or reliability reasons.  Mat Fisher has published a
     Telix script to call DSZ for automatic downloads.

     For those of you who use DSZ with Telix, here is a sample script file to use
     instead of batch files:

     //////////////////////////////////////////////////////////////////////////
     //Protocol salt file for Telix's external protocols by Matt Fisher
     //Last edited (02/24/90)
     //used for the DSZ ZMODEM protocol.  (It will work for u/ling and d/ling)
     //////////////////////////////////////////////////////////////////////////

     str upload[80]  =
        "c:\telix\protocol\DSZ port 1 pW1 pB4096 ha off sz -b -m -rr ";

     str download[80]=





     Chapter 3 Pg 8         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


        "c:\telix\protocol\DSZ port 1 pW1 pB4096 ha off rz -b -m -rr ";

     //////////////////////////////////////////////////////////////////////////

     Main ()
     {
      if (_ext_filespec == "")
       { strcat(download,_down_dir); dos(download,0); }
      else
       { strcat(upload,_up_dir); strcat(upload,_ext_filespec);  dos(upload,0); }
     alarm(1);
     }
     //////////////////////// THE END /////////////////////////////////////////

     Simple but effective...
     --- TAGMAIL v2.20
      * Origin: CRIMP/John Galt [Node 1] (1:120/144)
     INTERNET: Matt.Fisher@f144.n120.z1.FIDONET.ORG

     NOTE: The DSZ command strings given above are quite unusual.  Instead of
     the  "pW1  pB4096 ha off" one would be more likely to use "ha on" or "ha
     sw" depending on the modem's flow control settings.

     3.6  BULLETIN BOARDS

     Note to the wise BBS operator: be sure you understand the DSZ restrict
     command, how and WHY to use it!

     When installing DSZ on a bulletin board or host system, be sure to check
     for proper operation when the caller hangs up while a file is being sent
     or received.

     Currently, Only the TurboC version supports file sharing (shared read
     access on files sent by  dsz).

     Some bulletin board interface routines do not call DSZ to send a file
     until they have verified the file's presence by opening the file.  If
     this checking is done in DOS's default exclusive open mode, dsz's file
     sharing will be defeated.

















     Chapter 4 Pg 9         DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     4.  DESCRIPTION

     DSZ is a "protocol driver" that uses ZMODEM-90(TM), True YMODEM(TM), or
     XMODEM to transfer files over a serial port with a variety of programs.

     DSZ has two main commands for ZMODEM transfers: "sz" sends file(s), and
     "rz" receives them.

     When calling bulletin boards to download files with ZMODEM you can avoid
     the bother of starting DSZ for each transfer by DSZ's terminal emulator,
     before asking the BBS for the download.

                             dsz t

     The "t" command allows you to keyboard the file request directly to the
     BBS.  (The "t" stands for "terminal emulation".) Just give the "dsz t"
     command from DOS or your comms program's DOS GATEWAY.  DSZ's ZMODEM
     AutoDownload then receives the file automatically, using the filename
     provided by the BBS, without any wasted keystrokes or delay.  Try it,
     you'll like it!  (The "t" command is described below.)

     YMODEM downloads are almost as easy.  Use the "t" command as shown
     above, and hit the F3 key after telling the board to download a file
     with YMODEM.

     ZMODEM and True YMODEM(TM) transfers preserve exact file length and
     modification time.

     DSZ supports XMODEM-1k (XMODEM with 1024 byte blocks, sometimes
     mislabeled as ymodem) and CRC-16 with the sx -k and rc commands.

     DSZ is derived from Omen Technology's "Professional-YAM" high
     reliability communications tools (also known as PowerCom(TM)) and Omen
     Technology's ZCOMM User Supported Communications Software.  DSZ supports
     a subset of Pro-YAM's file transfer related commands.  This
     documentation makes extensive references to contemporary editions of the
     Pro-YAM or ZCOMM manual, and is incomplete without it.  (Registered
     copies include an alternate, copyrighted file.)

     DSZ is usually called from a communications or bulletin board program.

     DSZ uses its own modem I/O.  The original interrupt vector, UART parity,
     and interrupt configuration are restored on exit.  The original state of
     the 8259 interrupt mask bit for this vector is also restored on exit.

     DSZ uses DOS standard output (stdout) for messages.  DSZ never writes
     directly to the screen.  DSZ expects its standard output to point to the
     console, a logging file, or NUL, but never the modem port.  If dsz's
     standard output is redirected to the modem (as with ProComm's Host mode
     DOS shell), the combination will lock up the computer.  When necessary,
     dsz's standard output can be redirected back to the console device with





     Chapter 4 Pg 10        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     the CON command.

     Users of pcAnywhere must use DSZ's A command to disable pcAnywhere host
     mode during file transfers.




















































     Chapter 4 Pg 11        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     5.  COMMANDS

           ***********************************************************
                                    NOTE WELL
      Except as noted, all commands and options must be typed in lower case.
                             DO NOT USE UPPER CASE!!
                               Case is significant!
           ***********************************************************

     Optional commands or arguments are shown in square brackets [].

     When used (in any combination), the A, CON, port, speed, handshake,
     estimate, and d commands must be used in exactly this order.

     dsz [A] [CON] [F] [port N] [speed S] [handshake XX] [pxN... ] [z pxN...
     ] [D] [d] [restrict] command


     5.1  List of Commands

     A     Suspend pcAnywhere operation during file transfers (available only
           with DSZ.EXE).  The A command is used to avoid lockups caused by
           pcAnywhere host mode.  This command should be given to the DSZ
           running under pcAnywhere host mode.  Effective for PCA version 4.

           NOTE: A bug in the PCA Version 4 API causes the remote to
           effectively lock up when DSZ executes the suspend-host command.
           Currently the workaround for this bug it to use VT-220 emulation
           on the pcAnywhere host and remote instead of pcAnywhere4
           emulation.  Another possibility is to run AWREMOTE under DESQview,
           set the window to SUSPEND AWREMOTE.EXE, and swap windows to a DOS
           window from which DSZ, ZCOMM, or Professional-YAM can be run while
           AWREMOTE.EXE is forced to remain inert.

           The shareware program DOORWAY 2.2 interfaces well with DSZ, and
           provides many of the same functions, including the ability to run
           direct screen writing applications remotely.


           EXAMPLE: dsz A sz *.foo Sends files from a pcAnywhere hosted
           machine to you.


           Fm: Al de la Torre

           1 sending from host to remote
                  type: "dsz A sz filename.ext" ENTER
                  shell to dos on remote machine (ctrl-Rshift)
                  type: "dsz A rz" ENTER

           2 sending from remote to host





     Chapter 5 Pg 12        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


                  type: "dsz A rz" ENTER
                  shell to dos on remote machine (ctrl-Rshift)
                  type: "dsz A sz filename.ext" ENTER


     CON   Redirect  message  output  to  the  DOS  "CON"  (console)  device,
           overriding  any previous redirections.  This is necessary to avoid
           lockups caused by ProComm host mode.  Most programs do not require
           this hack.  This command is unique to DSZ.

     F     Leave the 16550A UART FIFO enabled on exit.  Since DSZ has no  way
           to  read  the 16550A DMA mode and trigger level bits, these values
           are not restored.

     port N select port N (n =  1,2,3,4,5,6,7,8,  10,11,12,13,14,15,16,17,18)
           Default  is port 1 (COM1) or read from the DSZPORT dos environment
           variable.  COM11 to COM18 refer to the COM1 to COM8 ports  on  the
           PS/2.

           *****************************************************************
                                          NOTE
           Only COM1 and COM2 are standard on all  PC  compatible  computers.
           Multiple  standards  exist for COM3 and above, so use only COM1 or
           COM2 when first installing DSZ.
           *****************************************************************

           DSZ COM3 uses 3E8 and IRQ4.  DSZ COM4 uses 2E8 and IRQ3.

           DSZ COM7 uses 2E8 and IRQ5.  DSZ COM8 uses 3E8 and IRQ5.

           If you wish to use COM3 or COM4 and your  computer  is  not  wired
           according  to  one  of  these  choices,  you  MUST use the "portx"
           command to specify base address and interrupt vector.

           EXAMPLE: to use COM2:
           dsz port 2 rz

           In multitasking  operation,  accessing  a  port  used  by  another
           running program will hang the machine.


     portx base,irq To select an arbitrary port address and interrupt vector,
           the  portx  command  must  be  used  instead  of the port command.
           Please refer to DSZBG.DOC (provided on the Registration  Diskette)
           or  the  Professional-YAM  or  ZCOMM  (ZCOMMDOC.ZIP)  manuals  for
           details on this command.

           EXAMPLE: dsz portx 3e8,4 speed 2400 rz








     Chapter 5 Pg 13        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     speed S Set the specified speed.  This command is rarely needed because
           DSZ reads the port's current speed by default.  Please refer to
           the FLOW CONTROL, MAIN COMMANDS and SOFTWARE COEXISTENCE chapters
           in DSZBG.ZOO or the ZCOMM or Pro-YAM manual for important
           information about the speed command.

           Please study all the chapters of this document when using speeds
           above 2400 bps.

           DSZ supports a maximum speed of 115200.  Not all hardware can
           support that speed without errors.


     handshake XX Enable one of several choices of hardware handshake.  (The
           default is XOFF/XON software handshake).  This command is
           documented in the ZCOMM or Pro-YAM manual, and in DSZBG.DOC.  (The
           ZCOMM manual is available on all bulletin boards registered for
           DSZ as ZCOMMDOC.ZIP.) On DSZ the "handshake" command may be
           abbreviated to "ha".

     D     Disables the modem (drops Data Terminal Ready, DTR) if carrier is
           lost.  This may be used to prevent spurious events (phone ringing)
           from interfering with the calling bulletin board's recovery from
           carrier loss.

     d     Disables carrier dropout monitoring, for modems that do not
           properly drive the "Carrier Detect" input on the PC.  If you see a
           No Carrier Detect message, you need to give the d command.  Before
           using the d command, make sure you have the proper port
           selected!!!


     estimate length [speed] Use the specified length and/or optional
           specified effective transfer speed to estimate transfer time for
           the next file to be sent or received.  The length argument is
           mainly used with XMODEM downloads; YMODEM and ZMODEM normally
           transfer the file length in the filename packet.  The estimate
           command must come after any port, speed, or handshake commands.

           The estimate command does not affect actual througput.  It only
           affects DSZ's prediction of how much time a file transfer will
           take.

           The following makes DSZ calculate file transfer times based on 290
           character per second throughput.  Some error correcting 2400 bps
           modems can attain this throughput when MobyTurbo(TM) is used.

           EXAMPLE: dsz port 2 speed 9600 estimate 0 2900 rz








     Chapter 5 Pg 14        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


           EXAMPLE: dsz port 2 speed 9600 estimate 0 2900 sz bigmama.zip



     pxN   Set numeric parameter x to N.

           DSZ has two sets of numeric parameters, a base set and a "zmodem"
           set.  Parameters in the base control such things as date stamping
           of files, error exit value, etc.  The "zmodem" numeric parameters
           control timeouts, window sizes, and other ZMODEM, YMODEM, and
           XMODEM protocol parameters.

           These parameters are mostly a subset of the Pro-YAM/ZCOMM numeric
           parameters, and are listed below.  They assume their defaults each
           time DSZ is called.  Without an argument, p displays the numeric
           parameters and their values.

           EXAMPLE: dsz p


     z pxN Set zmodem numeric parameter x to N.  All further numeric
           parameter commands are taken as zmodem parameters.  The zmodem
           numeric parameters correspond to the Pro-YAM or ZCOMM "zmodem"
           parameters and rarely need changing.  These parameters assume
           their defaults each time DSZ is called.  Without an argument, z p
           displays the zmodem numeric parameters and their values.


     restrict Restrict incoming pathnames (YMODEM/ZMODEM) to the current disk
           and directory tree, and disallow modification or overwriting of
           existing files.  This command is vital for bulletin boards
           uploading files.  The restrict command causes partially received
           files to be deleted.  When DSZ is restricted, it will refuse to
           transfer files containing the string autoexec.bat and command.com
           in upper or lower case.  This provides some defense from malicious
           uploaded files.

           EXAMPLE: dsz restrict rz


     t     [-T] [-8g] [-h] [-H] Talk with ZMODEM AutoDownload.

           The optional -T forces DSZ to exit after it has recognized a
           ZMODEM AutoDownload(TM) request.

           The optional -8g (available on registered copies only) enables
           reception of "BBS (ANSI) graphics" displays.  (A video device
           driver such as ANSI.SYS must be loaded to support some types of
           graphics.)

           The optional -h enables local echo of keyboarded characters ("half





     Chapter 5 Pg 15        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


           duplex").  In addition, -H makes the Enter key perform a local
           newline (CR/LF).

           A small subset of ZCOMM/Pro-YAM term function subcommands are
           recognized:

           Keyboard F1 or ALT-X to exit.

           F3 receives file(s) with True YMODEM(TM),

           ALT-P toggles parity between the 8n default and 8g (enables ANSI
           "graphics").

           ALT-H toggles two local echo ("Half Duplex") modes; the second
           displays a newline (CR/LF) when Enter is keyboarded.

           Keyboarded ASCII characters are sent to the modem.

           ALT-B sends a break.

           Characters from the modem print on the screen.  A device driver
           such as ANSI.SYS may be used to recognize escape sequences.
           Standard ANSI.SYS is limited to a small subset of ANSI escape
           sequences; NANSI.SYS, FANSI-Console and other replacement console
           drivers provide faster screen updates and better ANSI terminal
           emulation.

           DSZ's ZMODEM AutoDownload(TM) detects the start of a ZMODEM file
           download and accepts the file(s) without operator intervention.

     rz    [-abeEmMnpPrt+YZy] [dir] [file ...]     (ZMODEM-90 receive) **

     rz    [-abenprt+Yy] [dir] [file ...]          (ZMODEM receive) **

     rb    [-abt+y] [dir] [file ...]     (YMODEM receive) **

     rb -g [-abt+y] [dir] [file ...]     (YMODEM-g receive) **

     rc    [-abt+y] file1                (XMODEM/CRC receive)

     ro    [-abt+y] file1                (XMODEM OverThruster receive)

     rx    [-abt+y] file1                (XMODEM receive)

     rx -g [-abt+y] file1                (Qmodem-G receive) **

           ** Download directory specification and -g ignored w/o
           registration








     Chapter 5 Pg 16        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     sz    [-abefnprtFYQS+yZ] [-w[N]]  [PREFIX=p | ONAME=n] file ...(ZMODEM
           send)

     sz    [-abeEfmMnpPrtFYQS+yZ] [-w[N]]  [PREFIX=p | ONAME=n] file
           ...(ZMODEM-90 send)

           Pathnames are separated by spaces.  Wildcards are OK.

           EXAMPLE: dsz port 2 sz -r /tmp/file1 /tmp/file3 *.c


           The "sz" and "sb" commands exploit DOS's tree structured file
           system.  A directory or disk specifier expands to all files in
           that directory.

           EXAMPLE: dsz port 2 sz -r C:srcdir


           If you use PREFIX= or ONAME= with the "sb" or "sz" commands, these
           pathnames must be entered in lower case unless the underlying file
           system supports upper AND lower case.

           EXAMPLE: dsz port 2 sz -r ONAME=newsrc.c temp.c



     sb    [-ft] [PREFIX=p | ONAME=n] file ...     (YMODEM or YMODEM-g send)

     sb -k [-ft] [PREFIX=p | ONAME=n] file ...     (YMODEM-1k or YMODEM-g
           send)

     sx    [-t] file1                    (XMODEM, XMODEM/CRC, Qmodem-G send)

     sx -k [-t] file1                    (XMODEM-1k send)


     v     Verify the serial number by writing a log entry (see DSZLOG).

           v      1     0 bps    0 cps   0 errors     0  128 s/n 666

           The letter "v" indicates a verification entry.  The first numeric
           field is 1 if YMODEM-g is supported.  The last field is the serial
           number.  Unregistered copies show a s/n of 0.


     o     Turn off Data Terminal Ready (DTR), terminating ("offing") the
           connection if the modem responds to DTR.  Useful with the "t"
           command to disconnect afterwards.

           EXAMPLE: dsz t o






     Chapter 5 Pg 17        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     LARG  Convert ARG to lower case, then parse arg.


     The meanings of optional arguments to the file transfer commands are
     described in DSZBG.DOC and the ZCOMM/Pro-YAM manual.

     The s (SlugBait) option prevents a receiver from receiving a file
     without accounting for it.  Attempts to do so are flagged with a Q
     status in the log file.  This option can cause a transfer that
     legitimately fails near the end of the file to be reported as
     Questionable rather than ERROR.  SlugBait causes DSZ to return success
     if at least one file is transferred.

     Send files may be specified indirectly:
                               dsz sz @C:files.lst
     sends the files in C:files.lst.  This provides another means of
     bypassing the DOS command line limit.  The first letter must be "@" and
     the third letter must be ":" to distinguish this from an ordinary
     pathname.  Pathnames in the indirection file may be separated by any
     combination of space(s), tab(s), CR and/or LF.  No spaces may appear
     inside a pathname; "FOO     .BAR" won't work.

     A list of files to send may be built up with a command like:

     EXAMPLE: dir *.zip > files.tmp

     This file can be edited to remove unwanted files.  Then you send the
     files with:
     DSZ sz -m @c:files.tmp


     5.2  Interrupt Keys

     Ctrl-Break Terminates the transfer in progress.

     ALT-N Abruptly terminates (NUKES) the transfer in progress.

     Ctrl-X Typing a dozen Ctrl-X characters to another ZMODEM program
          terminates ZMODEM operations.

     ALT-F Skips the current file in ZMODEM transfers.

     ALT-B Cancels the current ZMODEM session.













     Chapter 6 Pg 18        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     6.  NUMERIC PARAMETERS

     DSZ uses the following main numeric parameters, settable with the pxN
     command.

     EXAMPLE: dsz pQ0 rz -rr


     **************************************************************************
     NOTE: Parameter setting commands such as "pd0" cannot be added to
     DSZOPT, they must be included in the command line.
     **************************************************************************

     In addition, DSZ uses the Pro-YAM/ZCOMM zmodem numeric parameters
     described in the Pro-YAM/ZCOMM reference manual (ZCOMMDOC.ZIP) and in
     DSZBG.DOC.


     B   Set the size of buffer used for disk reads and writes.  The default
         is 1024, 4096 maximum (16384 max on GSZ and DSZ.EXE).  If your copy
         of DSZ is running on a floppy disk system or a very slow turkey hard
         disk, a larger value may give better results.  Too large a value may
         exhaust memory, induce receiver timeouts, cause disconnects(!), or
         generate spurious CRC errors.  If performance logging doesn't work,
         this parameter is too big.

         EXAMPLE: dsz pB4096 sz A:floppy.fil

         Setting the buffer size may lock out the performance log, DSZFILES,
         and/or indirect pathname list in DSZ.COM.

         IF YOU AREN'T BLOODY SURE YOU NEED A BIGGER BUFFER, DON'T USE ONE.

         Please understand that the B parameter has nothing to do with
         anything you've heard about 128, 1024 or 8192 byte XMODEM style
         blocks.  Normally, ZMODEM's block size is the entire file!

     G   This parameter controls the number of bytes loaded into the 16550A
         transmit FIFO (First In First Out) storage register on each
         interrupt.

         For maximum efficiency, DSZ fills the 16 byte transmit FIFO when the
         UART generates a FIFO Empty interrupt.  Once loaded, data
         transmission from the transmit FIFO cannot be stopped, so many bytes
         may be sent after the modem sends XOFF or asserts hard flow control
         restraint.  Good engineering practice requires that modems accept a
         large number of bytes after exerting flow control restraint, but
         some modems won't.

         This parameter is effective only with PCDOS machines using FIFO
         buffered UART devices.  To improve dsz's responsiveness to flow





     Chapter 6 Pg 19        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


         control restraint, set this parameter to 0.

         EXAMPLE: pG0


     O   This parameter controls XMODEM OverThruster(TM).  It is described in
         DSZBG.DOC.  This file is part of the software package sent to paid
         registrants.

     P   After a "speed" command, if you give a p command (display
         parameters), the P parameter value will indicate the type of serial
         I/O UART chip detected.  DSZ automatically detects and enables the
         FIFO on the NS16550A, NS16550AFN, and Intel 82510 chips.

         EXAMPLE: dsz port 1 speed 19200 p


         0  Indicates a standard 8250 or 16450 UART with no special features.

         1  Indicates an NS16550AN or NS16550AFN with 16 deep receive FIFO.
            These are the preferred chips.

         2  Indicates an Intel 82510 with 3 deep receive FIFO.

         The sequence "port 1 pP1 speed 19200" bypasses DSZ's verification
         checks normally performed on the FIFO configuration and may allow
         defective FIFO logic on certain chips to be used.  This incantation
         is not required for the NS16550AN or NS16550AFN.

         The sequence "pP-1 speed 2400" should be used with the Western
         Digital WD16550 chip to disable the brain damaged FIFO on that chip.
         The WD16550 FIFO has been observed to lose data when transmitting at
         2400 bps and slower speeds.  The minimum speed for normal transmit
         FIFO operation with the WD16C550 may vary with different computers.


     Q   Error code returned to DOS (default 1).  (Success always returns 0.)
         Some programs toss cookies when confronted with certain exit codes.

         EXAMPLE: dsz pQ-1 sz foo.bar


         DSZ reports an error if no files have been transferred, even if the
         command used wasn't supposed to transfer any file(s).


     R   If set to 1, causes partially received files to be deleted.

         EXAMPLE: DSZ pR1 rz







     Chapter 6 Pg 20        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     S   Timeout in seconds (default 15) waiting for restraint release (XON
         and/or handshake).

     V   (DSZ.COM and GSZ only) Set this to 1 to use direct to screen video.
         This speeds up displays but may cause serial input errors when CGA
         equipped computers are used at high speeds.

         EXAMPLE: GSZ pV1 rz

         sets direct video output.

     W   Wait for Enter key before exiting after an error.  Effective only on
         registered copies.  Useful when calling DSZ from DESQview, allows
         the window to close unless there is an error message that should
         remain visible.

         EXAMPLE: dsz pW1 sz foo.bar


     Y   Control byte for the NS16550AN/NS16550FAN FCR register.  If you
         don't know what the FCR does, don't change this parameter.  It has
         been suggested that a different value (129) may improve multitasking
         under DESQview when multiple copies of DSZ are active.

     a   Calibrates certain protocol timeouts used with XMODEM and YMODEM
         transfers (Cybernetic Data Recovery(TM)).  This parameter does not
         affect ZMODEM transfers.

         The a numeric parameter is automatically set to 2000 for a 4.77 mHz
         PC or XT, 4000 for a PS2/30, 6000 for an 8 mHz 1ws AT, and 12000 for
         a PS2/80.  If your computer has a speedup card or otherwise runs
         unusually fast (or slow!) for its type, you may set the a numeric
         parameter to a value that reflects its speed.

         EXAMPLE: dsz port 2 pa4000 rb


         NOTE: Setting this parameter does not suppress the "Unknown Machine
         Type" message which is displayed before the command line is scanned.

     d   A non zero value (the default) causes incoming files received with
         ZMODEM and full YMODEM transfers to have their Date set to that sent
         in the file header.  ZMODEM's file management features depend on the
         transmission of each file's modification date.  Files will have the
         same creation date, even if the two machines are in different time
         zones.  When transferring files to/from a Unix system, creation
         dates are interpreted according to GMT or Universal Coordinated
         Time.  File dating may be disabled with a pd0 command, which causes
         files to assume the date and time they were received.
         NOTE: Backdating file creation times may confuse some backup
         programs.





     Chapter 6 Pg 21        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     v   Verbose level (debugging output) Negative values inhibit some
         routine messages.  Setting v to 1 or greater causes serialized
         copies to ring the bell when a transfer is done.

         EXAMPLE: dsz pv1 port 2 rz


     z   Timezone in minutes behind GMT, used for ZMODEM and True YMODEM file
         transfers to coordinate the actual date of the file with computers
         in other time zones.  Effective on registered copies.  PDT or MST
         corresponds to 420.  This may be preset with the ZONE DOS
         environment variable.












































     Chapter 7 Pg 22        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     7.  ENVIRONMENT VARIABLES

     The following DOS environment variables may be set to modify DSZ
     operation.  DOS environment variables are set by giving a command to DOS
     before running DSZ.  You can add these commands to your autoexec.bat
     file.


     EXAMPLE: set DSZPORT=2


     The following form may be used for arbitrary address/vector
     combinations:

     EXAMPLE: set DSZPORT=3e8,4

     These DOS "set" commands may be placed in your AUTOEXEC.BAT file or
     given just before you run your communications program.

     IMPORTANT! Do not add spaces to these commands!!
     set DSZPORT  =  2 WILL NOT WORK!


     DIRRX (Registered copies only.) Specifies the directory to receive
         (download) files.  If the sting in DIRRX ends with "/", directory
         and/or disk designators in the incoming pathname are stripped, and
         only the stem (name and extension) is used.  Otherwise, if an
         incoming file has an absolute pathname, the incoming pathname is
         used.

         EXAMPLE: set DIRRX=C:/modem/download/dsz/
         dsz rz -r
         downloads files to the /modem/download/dsz directory on the C:
         drive, with ZMODEM Crash Recovery..


         EXAMPLE: set DIRRX=B:/

         The DOS "set" command defining the receive directory may be placed
         in your AUTOEXEC.BAT file.  Make certain there is enough environment
         space to hold this value.  Confirm this by typing "set" to the DOS
         prompt and verifying the DIRRX value is listed correctly.

     DSZFILES May contain a list of up to 9999 pathnames to transmit, with
         entries separated by spaces.  If present, DSZFILES is used in place
         of a normal command line list of files to send with the sb and sz
         commands.

         EXAMPLE: set DSZFILES=file1 file2 file3 *.c
         dsz port 2 handshake on sz -rr






     Chapter 7 Pg 23        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


         In practice, this string would be built up by a calling program and
         passed to DSZ with a "spawnvpe", "execvpe", or similar subroutine
         call.

         SEE ALSO: Pathname list specification @C:files.lst

     DSZLOG log file to receive entries for files sent and received.
         (Default null).  Sample entries:

     Z  46532 38400 bps 3324 cps   0 errors    66 1024 DSZ.COM 1177
     Z 124087 19200 bps 1880 cps   0 errors     6 1024 MXY.TMP 1177

         Transfer times are based on the DOS time of day clock and have up to
         two seconds' uncertainty.  As with all protocol throughput reports
         generated by Omen Technology programs (and contrary to the false
         claims of some critics), DSZ's throughput figures for ZMODEM,
         Kermit, and True YMODEM(TM) transfers do not take "credit" for
         pathname and/or protocol overhead characters.  DSZ's throughput
         reports do not include the time required to send the pathname.  This
         understates the true time required to transfer files, but the time
         required to send the pathname often depends on the alacrity of the
         operator, and thus does not always reflect the performance of the
         protocol itself.

         Transfers measuring less than one second are reported as having 9999
         characters per second throughput.

         The unlabeled numeric field after the error (retry) count is the
         number of flow control stoppages encountered sending the file.  This
         number gives an indication of flow control restrictions (overloaded
         networks, etc.) encountered during the transfer.

         The last numeric field before the file name is the YMODEM block size
         or ZMODEM subpacket length used for the last block in the file.

         The last field is the serial number of the other program, or -1 if
         this information is not available.  When sending files, the
         receiving program's serial number is not normally available unless
         the -S option is used.

         The code letter indicates the type of transfer, Z (ZMODEM), S
         (X/YMODEM), R (X/YMODEM), E (error), or L (transfer terminated by
         loss of data carrier).

         WARNING: If DSZ encounters a loss of carrier or other fatal error
         condition before a file COMMENCES transmission, a log entry may not
         be made.


         EXAMPLE: set DSZLOG=C:/yam/dszlog






     Chapter 7 Pg 24        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


         IMPORTANT! NO SPACES!!


     DSZOPT (Registered copies only) String containing default options for
         DSZ file transfers.  Legal option letters for DSZOPT are the
         optional modifiers to the DSZ sz, rz, sx, rx, sb, rb commands.

         A T may be appended to the string to force DSZ to exit after it has
         recognized a ZMODEM AutoDownload(TM) request.

         An 8g may be appended to the string to make BBS (ANSI) graphics the
         default for DSZ's t command.  The ability to preset these options is
         especially helpful for controlling ZMODEM automatic downloads from
         DSZ's t command.

         EXAMPLE: set DSZOPT=r
         Enables DSZ's Intelligent Crash Recovery(TM) as a default.

         Let's say you wish ZMODEM crash recovery, and BBS "graphics" for the
         DSZ term function:
         set DSZOPT=r8g


         If you're downloading files from GEnie with an MNP modem, the
         following will speed up your downloads with Genie's ZMODEM-90Tm.
         (You can recognize ZMODEM-90 on GEnie two ways: 1) MobyTurboTm is
         used to speed ZIP and ARC downloads, 2) "sz 4.xx" is displayed at
         the end of transfer.  As of this writing, ZMODEM-90 may not be
         available in all libraries.) Note that (as usual with DSZ) case is
         significant: the "r" must be lower case, the "W" upper case.
         set DSZOPT=rW16384


         WARNING: Do NOT include "ena" or any other commands in the DSZOPT
         string.  With the exception of the "8g" mode, only **options** may
         be placed in the DSZOPT string!  (Options are the letters that
         modify the sz, rz, sb, etc. commands.  In "rz -r", "r" is an
         option.)

         Parameters can not be set in DSZOPT.

     MAXBYTES Maximum number of bytes allowed for transfer.  If this number
         is exceeded, DSZ skips the offending files (ZMODEM) or aborts
         remaining files in the batch (YMODEM).

     DSZPORT Default communications port override, default 1.

         EXAMPLE: set DSZPORT=2

         IMPORTANT! NO SPACES!!






     Chapter 7 Pg 25        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     ZONE sets the z numeric parameter to the number of minutes the current
         local time lags GMT time.  PDT or MST corresponds to 420.  PST
         corresponds to 480.
         EXAMPLE:
         set ZONE=420



















































     Chapter 8 Pg 26        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     8.  EXIT STATUS

     DSZ exits with 0 status for successful transfers, or the value of the Q
     numeric parameter (default 1) if a file transfer failed, or if no files
     were transferred.  Many languages and "door" programs do not return this
     information to the calling program.  Some languages and "door" programs
     freak out (hang) on certain non-zero exit values.

     A batch file that calls DSZ directly may be used to detect the DSZ exit
     status with the DOS "errorlevel" construct.  Please refer to the Q
     numeric parameter below for more information.

     DSZ's log file entries may also be examined to determine the success or
     failure of a file transfer.

     DSZ commands are an improper subset of Pro-YAM/PowerCom/ZCOMM commands.
     The file transfer commands are fully described in ZCOMMDOC.ZIP, the
     ZCOMM User's Manual.  Relevant portions of the ZCOMM User's Manual are
     provided in DSZBG.ZOO, a Copyrighted file included with the DSZ
     registration disk.  You may refer to one of those documents for details
     on the following commands.



































     Chapter 9 Pg 27        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     9.  EXAMPLES

     dsz sz c:foo.zip              (send 1 file with ZMODEM)

     dsz sz -m c:*.zip             (send all .ZIP files with MobyTurbo(TM))

     dsz sz f1.c f2.c f3.c         (send 3 files with ZMODEM)

     dsz sz c:foo.* b:*.c          (send multiple files with ZMODEM)

     dsz sz -Z *.lst               (send text files with ZMODEM compression)

     dsz sz -r bigone.zip          (CRASH RECOVERY: resume interrupted
     transfer)

     dsz rz -r                     (CRASH RECOVERY: resume interrupted
     transfer)

     dsz rz -rr                    (CRASH RECOVERY with file comparison)

     dsz handshake both sz yamdemo.zip       (Hardware+Software handshake)

     dsz sz -n *.*                 (send files that are newer or rx has no
     copy)

     dsz sz -Yn *.*                (Only send files that are newer than
     receiver's copy)
                                   (Do not send files that do not exist on
     receiver's disk)

     dsz rz C:/UPLOADS             (receive files to specified directory #)

     dsz port 2 speed 38400 handshake both restrict rz
                                   (Restrict provides protection for BBS's)

     dsz rz  -y prog.zip           (ZMODEM, single file pathname override)

     dsz z pr1 rx foo.dat          (XMODEM receive, remove file if error)

     dsz pO60 ro foo.dat           (XMODEM/OverThruster receive, GEnie MNP #)

     DSZ LRC L-Y NEWPROG.ZIP       (generate lower case "rc -y" command)

     dsz sz foo >debug.dmp         (Debugging data dump)

     dsz sz @C:/bbs/files.lst      (Indirect file list)

     dsz sz -u *.lst               (Unlink (Delete) files as they are sent)

     # Registered copies only






     Chapter 9 Pg 28        DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     10.  BACKGROUND OPERATION

     Three DESQview description files are provided to demonstrate background
     operation with modest (66 kb window) memory requirements.  DSZ uses
     tight C/ASM code, table driven CRC generators, and buffered receive and
     transmit for good performance in the background without hogging CPU
     cycles.  On a QIC Labs 8 mHz PC-AT clone, DSZ can download files in the
     background (3 background clock ticks, 9 foreground clock ticks) with a
     throughput better than 9600 bps.

     GSZ operates under DESQview with 128k of memory.

     2S   Prompts for file name(s) and sends them with ZMODEM protocol.
          File: 2S-PIF.DVP

     2T   Talks to the modem and allows manual YMODEM (F3) or automatic
          ZMODEM downloads.  File: 2T-PIF.DVP

     2A   Like 2T, but using Quarterdeck's dvansi.com memory resident ANSI
          CRT device driver to process ANSI screen codes.  File: 2A-PIF.DVP
          DS.BAT is the batch file used by 2A.

     These files are written for a port 2 local connection and \TMP
     directory, but may be modified to suit your requirements using the
     DESQview CP command.  The W numeric allows DESQview to close the window
     after DSZ finishes, providing a pleasant user interface.

     Other DVPs, Scripts, and Batch files are available on the DESQView
     conference on the Sound of Music as DVDSZ20Z.ARC.

     Please consult the DESQview documentation for instructions on
     installation procedure for the DVP files.

     Operation at high speed (above 9600 bps) may require the DESQview
     "Optimize communications" performance Advanced Setup option.

     Newer versions of DESQview may require more "common memory" allocation
     (6-8 k bytes) to operate with DSZ.  Some versions of DESQview do not
     operate properly with DSZ; DESQview 2.0 is known to work, and DESQview
     2.25 is reported to have fixed bugs in intermediate versions.

     On 286 and 386 machines, some DESQview operations involve swapping
     memory contents with buffers in extended memory.  As with extended
     memory ramdisks and disk caches, this causes errors with high speed
     communications.  The considerations discussed in the "286 and 386
     Extended Memory" subchapter apply here.  Since this DESQview extended
     memory swapping is asynchronous with respect to DSZ's file transfers,
     "handshake slow" doesn't help here.  The solution is to force DESQview's
     memory swaps to use smaller blocks (with interrupts allowed between
     blocks) and/or use NS16550AN or NS16550AFN chips for the serial
     interface.





     Chapter 10 Pg 29       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     If you see funny characters on the screen while a program is loading,
     you have a conflict between the display adapter and QEMM memory manager
     which may cause lockups.  If so you must explicitly exclude the display
     adapter's memory with an EXCLUDE clause in QEMM's config.sys entry.

           ***********************************************************
                                     WARNING
     When running DSZ under a multi tasking system such as DESQview, do not
     allow two programs to access the same comm port at the same time.  At
     best, such actions will disrupt communications.  At worst, your computer
     will attempt to open a subspace channel to V'ger.

     Tell DESQview to use the SPECIFIC port number you are using, and not "Y"
     to the question: "Uses serial Ports (Y, N, 1, 2)"

     When running a comm program under DESQview or any related multitasking
     executive, DSZ must be called directly from the comm program, in the
     same window.  DO NOT open a separate window for DSZ unless you were
     about to power down the computer anyway.
           ***********************************************************

     With some communications programs, you can make the call, log in, and
     then exit (closing the window) without disconnecting the modem.  At this
     time you can fire up DSZ with the "t" command to allow YMODEM or ZMODEM
     downloads in a small window.
     Example File: 2A-PIF.DVP

     Alternatively, you can start DSZ from the DOS prompt, then type "AT"
     commands to the modem to call the bulletin board.  DESQview's "learn"
     facility may be helpful here.

     10.1  Windows 3

     Communications programs do not operate well under Windows 3 because
     Windows does not have true multitasking.

     10.2  VM

     According to Marshall Sutherland, Be sure to set IOPL3 mode to YES.

















     Chapter 11 Pg 30       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     11.  FLOW CONTROL

     If you plan to send files over Telenet (PC-Pursuit), you must refer to
     the Pro-YAM or ZCOMM Reference manual (in ZCOMMDOC.ZIP) FLOW CONTROL
     chapter for vital information on flow control considerations necessary
     for proper operation of ZMODEM and other streaming protocols.


















































     Chapter 12 Pg 31       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     12.  ERROR MESSAGES

     COM2 1200 bps Carrier Detect enabled Handshake slow
     Command line = (commands)
     This is a normal message displayed to help resolve problems with
     incorrect batch files.  The port number, speed, carrier detect
     ("enabled" or "DISABLED") and "handshake" indicate the selected mode of
     operation.

     DSZ FINISHED! exit code = 0
     This is DSZ's normal exit when at least one file has been transferred
     and no unrecoverable errors have been detected.  If an error such as a
     failed file transfer had been detected, the exit code would be 1, or the
     value set in the Q numeric parameter.

     As the message implies, DSZ has done all of its processing, and has
     return the communications port and vector to its original value before
     displaying this message.  If the computer locks up after this message is
     displayed, there's something wrong with the program that called DSZ, not
     with DSZ itself.

     Unknown Machine Type XX, 'a' parameter preset to 6000 indicates a ROM
     BIOS that does not follow the IBM specification for identifying the
     machine type.  If your computer causes DSZ to display this message, you
     may set the a numeric parameter described elsewhere in this document.
     This message is generated before any commands are read, so do not be
     alarmed when you "discover" that setting the a parameter doesn't make
     this message go away.  The a parameter does not affect ZMODEM transfers.

     Please send us a postcard or letter indicating the reported hex value
     for machine Type, name of the computer, and its speed so we can include
     that machine type in a future release.

     Need more memory to run DSZ or Abnormal program termination is displayed
     by the TurboC startup routine if DSZ is run in too small a memory
     partition.  If you see this message, use a larger memory partition for
     DSZ or remove some memory resident programs.  This message may also
     appear if the calling program fails to free memory before calling DSZ.

     No Carrier Detect is displayed when DSZ recognizes a lack of carrier
     detect signal from the modem.  Most support calls concerning "No Carrier
     Detect" are caused by the user failing to tell DSZ to use the correct
     port.  DSZ does not magically divine the COM port number; if the default
     COM1 is incorrect, DSZ must be told what port to use with the port
     command or the DPORT environment variable.

     No Carrier Detect may also be caused by a line disconnect, defective
     cable, or incorrect modem strapping.  It may be disabled with the d
     command.  Sometimes this is caused by setting the B parameter to too
     large a value.






     Chapter 12 Pg 32       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     Garbage Count Exceeded Indicates ZMODEM has not detected a valid start
     of header in a reasonable number of characters.

     If DSZ becomes "stuck" on emitting this messages, it is possible the
     sending program may not be able to recognize and act upon transmission
     requests (ZROPS headers).  The sending program should be corrected.  In
     the meantime, setting a ZMODEM packet length with the "zmodem pl4096"
     ("l" is the small letter l) command will force the sender to wait for
     the receivers' progress reports.

     Permission denied comes from the Microsoft C Library.  This is caused by
     attempts to modify a read only file or directory, or to create a file in
     a nonexistent directory.

     A furtive flashing appearance of XOFF or FLOW during ZMODEM or YMODEM-g
     file sending signifies DSZ is responding to flow control restraint.
     This is normal operation when buffered modems or packet switched
     networks are used.  ZMODEM's robustness and reliability allow creative
     users to transfer files over unusual multiple computer lash-ups, causing
     modem data lights and computer status displays to dance in unfamiliar
     rhythms.

     Output FLow Control Restraint RELEASED Indcates DSZ has not received a
     positive flow control signal (XON and/or CTS as specified by the
     handshake command) within the timeout specified by the S numeric
     parameter.  This message may appear as the result of line noise.  If it
     appears often, it may indicate improper flow control settings, defective
     modem and/or cable, or (rarely) too small a value for the S numeric
     parameter.  A TSR program that monitors ring detect has also caused this
     problem.

     Not allowed to overwrite %s By default, DSZ will not overwrite an
     existing file.  Use the -y or -n or -r option to overwrite/update
     existing files.


     12.1  Got ZRPOS

     Got ZRPOS indicates the receiving program has detected a transmission
     error and has requested retransmission.  In other words, ZMODEM is doing
     its job of detecting and correcting missing and garbled data.

     If this happens with error correcting modems, or more often than
     observed line noise would suggest, the receiver's error messages must be
     studied.  "Line Status Register 01" messages indicate a flow control
     problem.  "Line Status Register 02" messages suggest a receiver problem
     with interrupt latency.

     Otherwise, the sender may have a flow control problem in one of four
     areas:






     Chapter 12 Pg 33       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


       + Between the sending program and its modem.  If using an interface
         speed higher than the transmission speed, or modem to modem error
         correction (MNP, LAPB, PEP, etc.), check that the modem and the
         sending program are configured for the same flow control methods.
         Omen Technology's software is faster than most other programs, and
         may expose flow control problems not seen with slower software.

       + Between the sending modem and the network.  Correcting this requires
         "handshake both" to allow the sending program to honor both hardware
         (CTS) flow control from the modem and software flow control
         (XON/XOFF) from the network.

       + Between parts of the network.

       + Between the receiving modem and the receiving program.  This can
         happen at high transmission speeds when the receiver has specified a
         large I/O buffer size with the B numeric parameter.

         Excessive interrupt latency from extended memory ramdisks or disk
         caches, and poorly written hard disk drivers also wreak havoc on
         streaming protocols but do not affect start-stop protocols (XMODEM,
         etc.).  Problems with extended memory disk caches may cause errors
         at regular intervals; check the receiver's error messages.

         To work around these problems, give the "handshake slow" command to
         the receiver.

     12.2  Subpacket too Long

     This error may be caused by flow control problems at the sender (see
     above).

     12.3  Bad CRC

     This error may be caused by flow control problems at the sender (see
     above).

     Byte NNNN retry M: <error message> These messages appear when the
     protocol has detected an error and is attempting to retransmit the
     garbled data.  These are normal messages.


     12.4  Serial Input Error: Line Status Register xx

     Serial Input Error: Line Status Register HH indicates a hardware
     problem, slow device driver, TSR program, or other software is disabling
     interrupts too long for the program to accept incoming data, and some
     characters are lost.  A slow response to folow control also triggers
     this message.

     The value of the line status register is displayed in HEX.  The





     Chapter 12 Pg 34       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     following error conditions are OR'ed into the Line Status Register.


     01   The Interrupt level circular buffer has been overrun.  This
          indicates a flow control problem.  The remote did not respond to
          DSZ's XOFF or hardware flow control signal, and continued to send
          characters after being told not to.  This problem is alleviated by
          matching flow control between the sending computer, modems, and the
          receiving computer.  Usually, the mismatch exists between the
          sending computer and its modem.


     02   An 02 value for the LSR indicates Data Overrun.  "Data Overrun"
          means the computer was not able to respond to an incoming character
          from the UART (modem) in time to make room for the next incoming
          character.  Data Overruns are caused by poorly designed software
          (or ROM BIOS "firmware") locking out interrupts for excessive
          periods.  These lockouts prevent the communications program from
          responding to the incoming characters quickly enough.

          To correct Data Overruns, you must correct the offending
          condition(s) to allow the communications program to operate
          properly.

          Common causes of excessively long interrupt lockouts ("critical
          code regions") are disk drivers (BIOS), window managers (Windows 3
          is terrible), disk caches, TSR programs, and EGA/VGA board auto-
          select.

          Slowing the CPU to allow games and other time dependent programs to
          be used can generate excessive interrupt latency.

          Some BIOS programs are written without regard to their effect on
          high speed communications.  Better versions of the offending BIOS
          programs may be made available if enough users complain about poor
          performance.

          Interrupt latency caused by EGA/VGA board auto-select can be often
          corrected by disabling the board's Auto-Select.

          Poorly written disk caches and disk drivers cause interrupt latency
          that affects streaming protocols (ZMODEM) but not start-stop
          protocols such as XMODEM, YMODEM, JMODEM, Lynx, etc.  The handshake
          slow command can be used to stop reception during disk transfers.

          Other chapters in this document give suggestions for working around
          excessive interrupt latency by using the NS16550AN UART chip.
          Please refer to the "Brain Damaged UARTS" subchapter.

          Please try all the suggestions mentioned here before contacting
          Omen Technology about data overruns.





     Chapter 12 Pg 35       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     08   Framing Error generally caused by line noise or an incorrect
          transmission speed ("baud rate") or format (number of bits).  Also
          caused by some cheap internal modems.  Most protocols require 8
          bits no parity (-8n) for proper operation.  This is set
          automatically by Omen Technology programs, but other programs may
          not be so smart.


     10   Break Interrupt generally caused by line noise or an incorrect
          transmission speed ("baud rate") or format (number of bits).  Also
          caused by some cheap internal modems.


     18   Framing Error and Break Interrupt (see above) in combination.

          This error may also be caused by defective 8250 UART chips.  Some
          internal modem cards have slow 8250 chips that do not operate
          properly with computers faster than 4.77 mHz.  Replacing the 8250
          with a NS16550AN is recommended.  Please refer to the "Brain
          Damaged UARTS" subchapter for details.

     Please refer to the In Case of Difficulty chapter of this document for
     solutions.

     Less commonly encountered DSZ error messages are explained in the Pro-
     YAM manual.


     12.5  No Carrier Detect

     If you see a No Carrier Detect message, and you haven't lost the
     connection, you should fix your modem cable or modem settings to allow
     proper operation of the Carrier Detect signal (CD).

     A poorer alternative is to give the d command:  dsz port 1 speed 2400 d
     t


     12.6  Port %d (%X) defective

     When DSZ selects a serial port, it performs a quick hardware check to
     verify the presence and minimal functionality of the 8250 family UART.
     This message usually means a nonexistent port has been selected.

     Reports have been received of functional but nonstandard UART chips
     triggering this message.










     Chapter 12 Pg 36       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     12.7  COMMAND NOT FOUND

     If you see this message, make sure DSZ is in the DOS PATH.  Sometimes
     this error is caused by having too many environment variable strings.


     12.8  Out of Environment

     means there is not enough room in the program environment to accept more
     data.

     DOS prints this message when it cannot allocate more memory to
     accommodate a "set" command, such as "set dirrx=c:/downloads/".

     Try moving the "set" commands to the batch file that calls your comms
     program, or to your AUTOEXEC.BAT file.

     To increase environment, use the /E switch. The default is 160 bytes.

     An example for your CONFIG.SIS file: SHELL=C:COMMAND.COM/E:256

     NOTE: Large environments may cause DSZ.COM to lockup.  This is less of a
     problem with DSZ.EXE.

































     Chapter 13 Pg 37       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     13.  SLOW TRANSFERS

     Some users report slower than expected file transfers even when few or
     no errors are reported.  Some possible causes are:

     If "handshake slow" is used, throughput may suffer.  Try one of the
     other solutions to the "Line Status Register = 02" errors discussed
     above.  When using "handshake slow" it may be possible to increase the
     modem's interface speed to 19200 bps or faster.

     Bad phone lines will silently slow MNP modems, sometimes without any
     error indications.  If the modems disconnect fairly often you should
     suspect marginal phone line conditions that are being hidden by MNP
     error correction.

     One of the programs may have set a parameter or option that acts to slow
     the transfer under certain conditions.







































     Chapter 14 Pg 38       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     14.  IN CASE OF DIFFICULTY

     14.1  LOCKUPS

     14.1.1  Insufficient Memory
     DSZ complains when it detects insufficient memory to operate.  When
     calling DSZ from another program, there may be ALMOST enough memory for
     proper operation, but DSZ locks up during a transfer or the calling
     program freezes after DSZ displays the "DSZ Finished" message.

     Sometimes there is a message about insufficient memory, sometimes just a
     lockup and no message.  To verify this problem, call CHKDSK from within
     your comms program (not from DOS!) by defining it as an external
     protocol.  If you use an interface program (Hotkeyz, Prodoor, etc.), you
     must call CHKDSK from that program, as those programs also reduce the
     memory available to DSZ.

     CHKDSK should report at least 64k free memory.  If less memory is
     reported, reduce the size of the COMMS program's capture buffer, or
     reboot the system with fewer/smaller device drivers and TSR programs.
     Calling DSZ directly from the comms program instead of from an interface
     also saves memory.


     14.1.2  Environment TOO BIG
     A large environment may cause DSZ.COM to lockup.  The size of the
     environment (the amount of text you get when you give the DOS "set"
     command) is subtracted from the data space available to 8086 C programs.
     This can be a problem with DSZ.COM, whose 8086 tiny model limits code,
     data, stack, and environment to 64 kb TOTAL.  Use DSZ.EXE (compiled with
     8086 small model) to alleviate this problem.


     14.1.3  Bad COM Port Configuration
     DSZ is fastidious about which interrupt vectors it takes over.  Unlike
     some programs, DSZ uses only the correct interrupt vector for its
     interrupt service routine.  (This allows multitasking.)

     DSZ obtains and releases this vector with standard DOS function calls.
     This allows multi line operation under DESQview and other multitasking
     systems.

     Incorrectly configured serial ports that work with programs that pig out
     both IRQ3 and IRQ4 will lock up with DSZ.  If DSZ locks up the machine
     as soon as it tries to send or receive data, this is usually the fault.
     Make sure the comm port is strapped correctly; COM1 uses IRQ4, COM2 uses
     IRQ3.  DSZ will lock up if the comm port is not properly set up.

     In addition, DSZ will not work properly if two devices are connected to
     the same IRQ line, even when some other programs (that don't use
     interrupts as intensively) do work normally on the same machine.





     Chapter 14 Pg 39       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     COM3 and above are not widely standardized.  If you have problems with
     COM3, chances are your "COM3" is non standard.


     14.1.4  LAN Manager Conflicts
     Some Local Area Network (LAN) managers take over comm ports using code
     that interferes with DSZ.

     The following hint is from Tom Louvaris, LANtastic Sales/Support - New
     York.  Other LAN mamagers may require similar incantations to keep the
     LAN manager from messing with DSZ's comm port.

     Problem: When the lan is running, DSZ intermittantly fails.  DSZ starts
     the transfer by displaying "Ready to send pathname".  The receiving
     system does noting.  Eventually, DSZ exits with code 1, and no file is
     sent.

     To release one or more Com Ports with LANtastic 3.x, enter the
     following...

             Net Queue Halt \Sever-name Comn


     Note: You must be logged on to "Server-name" with Queue priveleges to
































     Chapter 14 Pg 40       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     enable the operation of this command.

     14.2  Incorrect Batch Files

     Incorrect batch files are the number one source of problems using DSZ
     for uploads and downloads.  Bulletin board programs with convoluted
     batch file mechanisms exacerbate the problem.

     DSZ's command line echo was added to assist in correcting defective
     batch files.  You should see a display like:

     Command line = 'rz '
     or
     Command line = 'port 2 speed 9600 sz foo.baz '

     You may have to add a "pause" command at the end of the batch file to
     allow DSZ's messages to be seen.  Another possibility is to turn on the
     printer with ^P before running DSZ, so DSZ's message can be saved on
     paper.

     In general, the Command line display should look like one of the
     examples in this document or those displayed by DSZ itself.  (The
     Command line display does not include the name of the DSZ program
     itself.)

     Try running DSZ by itself, without any batch files or TSR programs,
     calling it directly from DOS as described above.


     14.3  Cheap Internal Modems

     Numerous trouble reports have been received lately caused by cheap
     internal modems causing errors on ZMODEM transfers but not XMODEM.  A
     similar problem was experienced in the mid 80's during beta testing of
     some 2400 bps modems.  Perhaps defective LSI chips left over from those
     days were cloned or recovered from the trash bin.


     14.4  Commands Entered in Upper Case

     Most DSZ commands and options must be entered in lower case (small
     letters, not big letters).  Where the documentation or help screen
     indicates "rz", you must use "rz" and not "RZ".


     14.5  No Carrier Detect

     If you see a No Carrier Detect message, and you haven't lost the
     connection, you should fix your modem cable or modem settings to allow
     proper operation of the Carrier Detect signal (CD).






     Chapter 14 Pg 41       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     A poorer alternative is to give the d command:  dsz port 1 speed 2400 d
     t



     14.6  PKARC 3.6

     It has been reported that PK36 grabs some interrupts and doesn't restore
     them on exit in an attempt to prevent hacks of the program.  Since
     eliminating that particular version and cleaning up memory, high speed
     transfers even with 8250 UARTS work properly again.

     The problem with PK 3.6 appears to be most severe if a BBS operator has
     doorware, etc that accesses the PK programs from a shell of some sort.
     This info may be helpful to users who are having otherwise inexplicable
     file transfer problems.

     Phil Katz has written me that this problem has been corrected in
     subsequent versions.


     14.7  DOS 3.x

     DOS 3.x systems may need to have a "STACKS = 8,256" line in CONFIG.SYS
     to prevent antisocial behavior. This is required on the NEC Multispeed,
     or if certain TSR's are used.


     14.8  Perstor Controllers

     Several reports have been received indicating Perstor disk controllers
     interfere with data communications.  Perstor is reportedly working on a
     fix.


     14.9  IBM PS/2 Model 50Z

     Early samples of this machine have a design error on the motherboard
     that causes comms programs to lock up the machine.  Replacing the
     motherboard with a correctly functioning unit from current production
     corrects the problem.  The part number of the replacement PS2/50 Z
     motherboard is 35F5928.  (Information provided by John M. Choma
     73047,3566) U.S. IBM has stonewalled on this issue, but in December 1988
     agreed to replace the defective motherboards under warranty.












     Chapter 14 Pg 42       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     14.10  Brain Damaged UARTS

     Omen Technology has received reports of problems with buggy 8250 type
     UART integrated circuits in Leading Edge modem boards, serial port
     interfaces, and computers.  The defective chip logic affects high
     performance software.  Replacing the buggy chip with a newer chip
     (NS16550AN) corrects the problem.

     The UM82450 chip in the Zoom 2400HC also appears to cause problems.
     Zoom Telephonics advises that this problem is limited to their old
     model.  The old model is inentifiable by an external volume control.

     You can identify an old chip by inspecting the serial interface board
     for 8250 or UM82450 type devices.  A service technician or hardware
     hacker can help if you are not familiar with reading chip numbers.

     Dsz users can identify old chips with the following software command:

     EXAMPLE: dsz port 1 speed 2400 p

     ZCOMM and Professional-YAM users can look at the printout produced by
     the s command;  old UART chips register as TYP 0.

     The National Semiconductor NS16550AN is a pin compatible plug in
     replacement for 8250 and 16450 serial chips.  Omen Technology software
     enables the FIFO buffer in the NS16550AN to prevents loss of data from
     poorly written device drivers, TSR programs, etc.

     We are also using the Goldstar GM82C550 chip with a 9025 date code.
     This Goldstar chip is plug compatible with the National chips.  No
     problems have been discovered with this chip.

     The NS16550AN has better electrical characteristics than the older UART
     chips.  386 and fast 286 machines should use the NS16550AN for best
     results.  Omen Technology software has been written to allow time for
     the older UART chips to operate. However, there is a limit to how much
     the software can rearrange chip accesses without resorting to
     performance robbing wait loops.  Some other software is not as forgiving
     of slow chips.

     Be sure to ask for the NS16550AN.  It is VITAL to get the National
     Semiconductor "AFN" or "AN" chip.  Other vendors' chips not mentioned
     above won't do.  Current Western Digital WD16C550 chips do not function
     properly at low speeds.

     As of this writing, the Goldstar GM82C550  and National NS16550AN and
     NS16550FAN are the only plug compatible chips that are known to work.

     The Hayes ESP board comes with two serial ports with NS16550A devices.
     The ESP definitions for COM3 and COM4 agree with the industry standard
     definitions used by Omen Technology.





     Chapter 14 Pg 43       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     The following information comes from a number of people:

     "I have located a small dealer in New York who has the cards with or
     without the 16550.  I believe the price is around $50.00.  The company
     is RJK Consulting and the number is 718-968-9167. The gentleman to speak
     to is a Mr. RJ Kulman. ...  I got this information off the "Interlink"
     BBS system." Fm: Nick Braak [TRICON] 75156,1254

     Fry's - 415-770-FRYS.  This is a Silicon Valley electronic department
     store.

     Jameco Electronics at 415-592-8097 sells National NS16550AN chips mail
     order (credit card) in small quantities.  Unfortunately, we have
     received a number of reports that their serial i/o card is now supplied
     with the infamous WD16C550 soldered in, even when ordered with specific
     instructions to include 16550AN chips.

     Microprocessors Unlimited, 24000 South Peoria, Beggs, OK. (918) 267-
     4961. The price for the chip is $13.50 plus shipping costs. No minimun
     purchase is required.

     Consolidated Computers 4 Shoppers Lane Suite 121 Turnersville, NJ  08012
     (609)751-9595(voice) (609)751-3843(bbs) (609)751-3840(fax)

     Arrow Electronics at 800-932-7769 (516-467-1000).

     Willies Computer Software Company: 800/835-4832.

     N.B.: Current Western Digital WD16C550 chips do not function properly at
     low speeds.  This has been confirmed with samples received directly from
     Western Digital.  WD is aware of this problem, but has not informed us
     of a corrected chip.



     14.10.1  Everex Internal Modems
     Numerous reports have been received concerning difficulties with Everex
     modem cards.  Some of these cards contain buggy 8250 chips which are not
     up to the demands of full duplex streaming protocols such as ZMODEM.
     Replacing the buggy 8250 chip with NS16550AN chip corrects these
     problems.


     14.11  Weird Iron

     A few machines, some with V20 CPUs, reportedly don't like DSZ.COM.  We
     have not been able to repeat this; TeleGodzilla (using a V20) runs
     DSZ.COM without a hitch.  Switching to DSZ.EXE has cleared up the
     problems on other machines.







     Chapter 14 Pg 44       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     14.12  Will the real YMODEM please stand up?

     Some XMODEM programs claiming to support YMODEM neither send nor accept
     the YMODEM pathname block.  1024 byte XMODEM is XMODEM-1k, not the
     YMODEM defined by Ward Christensen in 1985 when he invented the term
     YMODEM.  1987 and later versions of YMODEM.DOC remind the reader of the
     official YMODEM definition, which has not changed since YMODEM's coinage
     in 1985.


     14.13  286 and 386 Extended Memory

     Virtual memory disk caches and ramdisks using 80286 or 80386 extended
     memory require a kludge hardware reset of the CPU chip to return to the
     normal "real mode" after accessing extended memory.  This interference
     to the interrupt response time causes lost characters on comm ports, and
     may be minimized by specifying shorter memory transfers.

     Switching to a National NS16550AN or NS16550AFN UART chip helps
     tremendously, allowing transfers at 115200 bps instead of 9600 bps with
     a standard 8250.  Please refer to the subchapter on "Brain Damaged
     UARTs".  The DSZ "handshake slow" command may also help.


     14.14  Disk Caches

     Cache programs often interfere with ZMODEM transfers.  In one instance,
     replacing Microsoft's SMARTDRV.SYS with Multisoft's SUPERPCK.EXE helped.

     Some cache programs can be turned on and off; try turning it off when
     running DSZ.

     Switching to a National NS16550AN or NS16550AFN UART chip helps
     tremendously, allowing transfers at 115200 bps instead of 9600 bps with
     a standard 8250.  Please refer to the subchapter on "Brain Damaged
     UARTs".  The DSZ "handshake slow" command may also help.




















     Chapter 15 Pg 45       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     15.  ASSOCIATED DOCUMENTS

     Consult the Professional-YAM, PowerCom, or ZCOMM manual chapter "OPTIONS
     FOR FILE TRANSFERS" for descriptions of the file transfer options.  The
     "FILE TRANSFER BASICS" chapter explains the relative merits of XMODEM,
     YMODEM, ZMODEM, and other protocols and gives tips on their use.  The
     "MAIN COMMANDS" chapter describes the rb, rx, rc, rz, sb, and sz
     commands.  The "MODEM INTERFACING" and "FLOW CONTROL" chapters contain
     important information on the use of buffered modems with DSZ.

     Information on the ZMODEM Inter Application File Transfer Protocol is
     available in Omen Technology's "ZMODEM DEVELOPER's COLLECTION" ($89.00).

     Unix/Xenix C Source code for XMODEM, YMODEM, and ZMODEM transfers
     to/from Omen Technology Products is included in RZSZ.ZOO.[1] This file
     includes a Pro-YAM/ZCOMM script to upload a bootstrap file to a Unix
     system, compile it, and (if the compilation is successful) upload the
     rz/sz source files.





























     __________

      1. Technical support for rzsz is available on a paid consulting basis.






     Chapter 16 Pg 46       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     16.  FILES

     DSZ.COM, DSZ.DOC, 2A-PIF.DVP, 2S-PIF.DVP, 2T-PIF.DVP, BBS_REG.TXT,
     DS.BAT, FIX.BAT, MAILER, ZMODEMAD.BAT, ZMODEMD.BAT, ZMODEMDR.BAT, and
     ZMODEMU.BAT constitute Omen Technology's DSZ.ZIP.  These same files are
     in DSZ.ZOO on the distribution diskette mailed to registered users.[1]

     2S-PIF.DVP, 2A-PIF.DVP, DS.BAT, and 2T-PIF.DVP are used with Quarterdeck
     Office Systems' DESQview multitasking executive for background
     operation.  Their use is described in a previous chapter of this
     document.

     DGSZ.ZOO is distributed to GSZ registrants.  It contains GSZ.EXE and
     GCOLORS.EXE in addition to the above.

     ZCOMMDOC.ZIP (manual), ZCOMMEXE.ZIP (programs), ZCOMMHLP.ZIP (help
     processor and database), make up the ZCOMM communications tools
     shareware distribution.  The ZCOMM files are available on finer bulletin
     boards.

     RZSZ.ZOO contains ZMODEM "C" source code for COMPLETE Unix/Xenix
     programs licensed for use transferring files to/from licensed Omen
     Technology products.[2]

     RZSZ.TLB The ZMODEM rz/sz programs are available in native VMS flavors
     with wild cards, record format support, etc..  Pre compiled VAX/VMS
     files are contained in the RZSZ.TLB compressed text library.

     DSZ.EXE compiled with the Xenix to DOS XC may give moderately higher
     maximum throughput noticeable on slower machines.  Sending from a faster
     machine to an 8 MHz IBM AT with 16550FAN, using 115200 bps and "sz -yZ
     rttypix":

     Program                       Throughput

     DSZ.EXE                       12735 cps
     DSZ.COM                       7164 cps

     ProComm+2.0                   5928 cps



     __________

      1. DSZ.ZOO is supplied to registrants instead of DSZ.ZIP because not
         all registrants have copies of unarchiving programs.  The
         registration disk includes a copy of BOOZ, a simple dearchiver for
         ZOO files.

      2. Technical support for rzsz is available on a paid consulting basis.






     Chapter 16 Pg 47       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     (Compare these speeds to those listed on Page 159 of the April 30, 1991
     issue of PC Magazine.)

     DSZ.EXE supports ZMODEM over 7 bit paths (E and P options), and
     specified control character quoting (-Q<string> option).  The DSZ.EXE
     requires somewhat more memory than DSZ.COM.  DSZ.EXE does not support
     file sharing due to brain damage in the Microsoft C library.  The
     maximum DSZ.EXE I/O buffer size available with the B numeric parameter
     is 16384.  DSZ.EXE is available in DSZEXE.ZIP and DSZEXE.ZOO.

     ZCOMM and Pro-YAM also run faster than DSZ.COM.

     DSZBG.ZOO contains DSZBG.DOC.  Part of the DSZ registration disk, this
     file provides background information on the ZCOMM/Pro-YAM commands
     provided in DSZ and GSZ.

     The ZOO archive format is a machine independent improvement on the PC-
     DOS specific .ARC format. The ZOO format has been precisely defined, and
     stable ZOO archivers/dearchivers are available on a wide variety of
     systems.

     BOOZ.EXE unpacks .ZOO archives.  BOOZ.DOC describes BOOZ.EXE.


































     Chapter 17 Pg 48       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     17.  Other Omen Technology Products

     17.1  Professional-YAM COMMS TOOLS

     Omen Technology makes Professional-YAM, a comprehensive comms program
     with unmatched power.  Flavors are available for PC-DOS, Unix, Xenix,
     and OS/2 Protected mode.  Unix source code is available under license.


     17.2  ZCOMM: Industrial Strength COMMS Shareware

     ZCOMM is a full featured shareware version with a $40.00 basic
     registration.  Registered DSZ users upgrading to ZCOMM get a free
     binder!


     17.3  ZMODEM Developer's Collection

     Omen Technology sells the "ZMODEM Developer's Collection" for $89.00.
     This diskette includes the most recent public domain versions of
     YMODEM.DOC, ZMODEM.DOC and the Unix/VMS rz/sz C source code for YMODEM
     and ZMODEM.  Porting to the intended application is the sole
     responsibility of the purchaser.  For many developers, this collection
     affords a significant labor savings in obtaining these materials.
































     Chapter 18 Pg 49       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     18.  FAIR PLAY

     Unlike snazzy menu interfaces, reliable high speed transfer protocols
     take many hours of testing, often over expensive phone connections, to
     develop.  Two decades of communications experience and protocol testing
     are distilled in DSZ.

     DSZ is a user supported program developed and supported by Chuck
     Forsberg, owner of Omen Technology.  Countless hours of work and
     expen$ive resources went to develop and support DSZ for the myriad
     environments users use it in.  The fact that most of the problems people
     encounter with DSZ are caused by other software, hardware problems,
     failure to read the supplied documentation, or pirating has not kept
     users from seeking and getting help, even if it means calling the author
     in the middle of his sleep.

     Beyond this, the world of communications is constantly evolving, and it
     requires a significant ongoing effort to keep DSZ and its documentation
     up to date with the current state of the art.  Individuals with little
     knowledge of the dynamic nature of telecommunications (or hidden
     agendas) have misrepresented the frequency of enhancements to DSZ as a
     sign that DSZ is "unstable" and unworthy of "serious consideration".  If
     you think such sniping is fair play, you are more than welcome to use
     one of the many other protocol programs available, each of which claim
     to offer speed and reliability comparable to DSZ.

     Non registered users are welcome to use DSZ for a reasonable evaluation
     period.  "Reasonable" means "until you've decided whether the program is
     worth $20.00." It does not mean "until some competing program gets
     around to adding ZMODEM or True Ymodem(TM)".  Once you've evaluated DSZ,
     ethical use of DSZ requires registering the copy.

     DSZ is not and never has been Public Domain.  Every version of DSZ has
     included a Copyright Notice and a prohibition against sale or
     modification.  There is no usage counter or other Trojan Horse in DSZ,
     but if you use this program, you have a moral and ethical obligation to
     register it.

     Paid registration enables t -8g, DIRRX, DSZOPT, OverThruster(TM),
     YMODEM-g, and other advanced features that are present in DSZ.ARC in
     encrypted form.  The registration package serializes and decodes all
     past and future versions of DSZ.COM and DSZ.EXE.  You can get a fully
     featured upgrade of DSZ simply by downloading a newer version from
     TeleGodzilla, GEnie (IBM Roundtable), CompuServe, and trusted bulletin
     boards.











     Chapter 18 Pg 50       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     18.1  Sharing DSZ Files

     You are welcome to share unmodified copies of DSZ.ZIP or DSZ.ZOO with
     your friends and associates for their evaluation.  This documentation
     file and the MAILER file must be provided with all copies of DSZ except
     by prior written permission from Omen Technology Inc.  Because of piracy
     problems, Omen Technology must INSIST that DSZ be distributed only as
     part of the DSZ.ZIP file EXACTLY as provided by Omen Technology Inc, or
     in an archive which displays a CRC value for DSZ.COM equal to that shown
     in the Changes chapter.  If DSZ.ZIP is repacked, no files may be added
     to or removed from the archive.

     If you see an improperly packed or otherwise modified DSZ archive or
     parts thereof in a bulletin board, please ask the board's operator to
     replace such files with DSZ.ZIP exactly as provided by Omen Technology
     Inc.  Flame them until they behave ethically.

     Unmodified copies of Omen Technology shareware and demo files including
     GSZ.ZIP, DSZ.ZIP and DSZBG.ZIP may be distributed by "shareware
     distributors" provided 1) the files are clearly identified as
     unregistered shareware, 2) the cost of the distribution is nominal.
     Otherise, no version of DSZ may be sold without the prior written
     permission of Omen Technology Inc.

     DSZ is not and never has been Copy Protected.  "DSZ unprotect" files
     have no function whatsoever except to aid and encourage the theft of
     Omen Technology's Intellectual Property.

     Distribution or use of programs or procedures that modify, patch,
     disassemble, decompile, or otherwise reverse engineer DSZ without the
     prior written permission by Omen Technology Inc is a bloody theft of
     intellectual property and services and is a violation of Federal
     Copyright Law.  The same applies to debug scripts and documentation
     written for the same purposes.  These perform the same function as
     pirate satellite and/or cable descramblers, to obtain benefit from
     encrypted communications without proper payment.  Piracy has been
     investigated by the FBI and prosecuted under federal statutes.
     Applicable law provides for damages and recovery of attorney's fees.
     Omen Technology has received reports of serious problems caused by
     unauthorized patches to DSZ, and cannot assume liability for the
     performance of the resultant code.  So far, none of the slime producing
     such bilge have seen fit to sign their real name and address to their
     cretinous attempts at ego gratification.

     Distribution of DSZ in any medium without this documentation file is an
     unauthorized modification to DSZ that deprives the rightful author of
     registration revenues.  That is a theft of intellectual property.  Such
     distribution damages the author by forcing the user and author to waste
     time and phone bills scrounging for the documentation, and answering
     questions that are fully covered in the documentation.






     Chapter 18 Pg 51       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     If any version of DSZ is distributed with any other product, software or
     hardware, the product documentation must clearly and prominently state
     that the customer's continued use of DSZ requires registration directly
     with Omen Technology or its duly authorized agent(s).  When unregistered
     copies of DSZ are distributed on disk, a contemporary copy of
     ZCOMMDOC.ZIP should be included on the same disk.

     Thank you for your support.

     18.2  REGISTRATION

     After a short evaluation period, ethical users must register their copy
     of DSZ with a check for $20.00 in U.S. funds sent to:

            Omen Technology Inc.
            P.O. Box 4681
            Portland, OR 97208

     The address on your check is sufficient, no need to fill out forms.

            For VISA/MC Registrations, you can also:
            Call VOICE: 503-621-3406

            Or register online: 503-621-3746  300-1200-2400 bps
            Or FAX the INSTANT MAILER to: 503-621-3735

     Don't bother scrounging for an envelope, just print the INSTANT MAILER
     included in this archive!

     Overseas registrations are sent out International Air Mail.  Users,
     especially those overseas, may choose to register their copy of DSZ for
     $25.00 U.S.  by providing their VISA or Mastercard card number with
     expiration date and their name as it appears on their credit card.

     Purchase orders for less than $150 must be prepaid.  Omen Technology Inc
     Federal TAX ID #: 930858776 Oregon TAX ID #: 536565
      .ne 12

     "Das Recht zur Benutzung von DSZ in Deutschland, Oesterreich und der
     Schweiz erwerben Sie durch Bezahlung der Lizenzgebuehr von DM 57,00
     (incl. Mwst) an RzK

     Doris Koepke
     Bitzenstr. 11
     D-5464 Asbach

     Tel. 02683-4547, FAX 49 2683 4537, Telex 86 3705 rzk d, CIS
     [70126,1660]. Sie erhalten dann von dort sowohl die neueste Version, als
     auch Ihren individuellen Software-Key, mit dem Sie auch kuenftige
     Shareware-Versionen "aufschliessen", also die in der Shareware Version
     nicht zugnglichen Programmfunktionen nutzbar machen koennen, per Post.





     Chapter 18 Pg 52       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     Die Benutzung nicht registrierter Versionen stellt einen Verstoss
     geltenden Rechts dar und wird strafrechtlich verfolgt."


     *************************************************************************
     The user registration package includes a printed serial number password
     (SNP) card.  The registration "care package" diskette contains the
     latest versions of the DSZ programs, additional user documentation, and
     the installation program which uses your personal SNP to enable advanced
     features and bypass the opening advertisement.

     The registration package unlocks the extra value in all past and future
     versions of DSZ.COM and DSZ.EXE.
     *************************************************************************

     The unique serial number on the registration card is registered to the
     user, and is acceptable proof of registration to corporate auditors.

     The putsnp program inserts your unique DSZ Serial Number Password (SNP)
     into you copy of DSZ with the following command:
            putsnp dsz.com
     Putsnp prompts for your SNP and asks appropriate questions before
     inserting the SNP to enable the extra value in DSZ.

     GSZ is serilized with the GCOLORS program described above.

     Some TSR programs and device deivers interfere with putsnp.  If you have
     a lockup running putsnp, run it without any device drivers or TSR
     programs (boot a plain DOS from floppy disk).

     Your disk directory entry for DSZ will show the date and time you
     serialized your copy of DSZ.  This does not affect the revision date DSZ
     announces when DSZ is run.


     The only legitimate way to disable the opening advertisement in DSZ is
     to insert an authorized SNP obtained from Omen Technology into DSZ with
     the putsnp program.  Any other suppression or modification of the
     opening screen is an illegal, unethical theft of services.  Omen
     Technology has received reports of serious problems caused by
     unauthorized patches to DSZ, and cannot assume liability for the
     performance of the resultant code.

     Piracy is stealing.












     Chapter 18 Pg 53       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     18.3  Files on Registration Disk

     The following files are currently included on the Registration Disk sent
     to paid registrants.

     BOOZ.EXE       Program to unpack .ZOO archives.  BOOZ.DOC describes
                    BOOZ.EXE.


     DSZEXE.ZOO     Contains DSZ.EXE.

                    To dearchive with booz: booz x dszexe

                    Type "booz" without arguments to see the help message.



     DSZ.ZOO        Contains DSZ.COM, DSZ.DOC, DESQview description files.

                    To dearchive with booz: booz x dsz


     DGSZ.ZOO       Contains GSZ, DSZ, GSZ.DOC, and DESQview description
                    files.

                    To dearchive with booz: booz x dsz

                    RZSZ.ZOO contains ZMODEM "C" source code for COMPLETE VAX
                    VMS and Unix/Xenix programs licensed for use transferring
                    files to/from licensed Omen Technology products.[1]

                    To dearchive RZSZ with booz: booz x rzsz


     PUTSNP.EXE     Installs your unique registered serial number to enable
                    the extra value in DSZ.


     DSZBG.DOC      (in DSZBG.ZOO) Background information for GSZ and DSZ,
                    consisting of relevant parts of the ZCOMM User's Manual.

                    To dearchive with booz: booz x dszbg





     __________

      1. Technical support for rzsz is available on a paid consulting basis.






     Chapter 18 Pg 54       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     18.4  Bulletin Board Registration

     Note to the wise BBS operator: be sure you understand the DSZ restrict
     command and how to use it.

     Use and/or copying of DSZ by bulletin board sysops and/or systems is
     allowed according to the following conditions:

     I agree to feature the ZCOMM files (ZCOMMEXE.ZIP, ZCOMMDOC.ZIP,
     ZCOMMHLP.ZIP) for downloading, and to announce the availability and
     features of ZCOMM in any bulletins, help displays, or other displays
     that mention communications programs.  It is my responsibility to
     maintain reasonably current versions of the ZCOMM files on the BBS shown
     above.

     I understand that I am welcome to use DSZ on my bulletin board(s) from
     the time I sign and mail this document as long as I abide by the
     conditions above, including featuring the above mentioned ZCOMM files.

     I shall distribute DSZ.COM only as part of the DSZ.ZIP EXACTLY as
     provided by Omen Technology Inc, or "zipped" without any file additions,
     deletions, or modifications.  If I distribute DSZEXE.ZOO, I shall also
     maintain DSZ.ZIP in the same directory since DSZEXE.ZOO references files
     in DSZ.ZIP.

     If I see a modified DSZ archive or parts thereof in a file or collection
     of files (e.g., archive) on a bulletin board, I shall replace such files
     or archive members with the contents of DSZ.ZIP exactly as provided by
     Omen Technology Inc.  I shall report instances of noncompliance to Omen
     Technology.

     I shall not allow any version of dsz to be sold, modified, patched,
     hacked, disassembled, decompiled, or otherwise reverse engineered
     without the prior written permission of Omen Technology Inc.

     I understand that DSZ is not and never has been Copy Protected.  I fully
     understand that "DSZ unprotect" files have no function whatsoever except
     to aid and encourage the theft of Omen Technology's Intellectual
     Property.

     (For this BBS registration, a multi node bulletin board operating from a
     single, common file system counts as one machine.)

     The purpose of bulletin board registrations is to support and promote
     ZCOMM and Professional-YAM by popularizing the ZMODEM protocol and
     featuring the ZCOMM shareware files available for downloading.

     BBS registrations must be submitted on the bbs_reg form with signature
     and date, and must accompany a new paid DSZ or ZCOMM registration.  The
     paid registration that must accompany your BBS registration can be one
     submitted by one of your board's users.  Most boards have many





     Chapter 18 Pg 55       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     unregistered DSZ users, so getting one of them to register their DSZ
     should pose no difficulty.  Since the paid registration may be from one
     of your board's users, you can get your BBS registered for free by
     getting one of your users to register his/her DSZ at the same time.




















































     Chapter 18 Pg 56       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     19.  CHANGES

     Be sure to save your serial number/password (SNP) card and the putsnp
     program you received from Omen Technology to use with future versions of
     DSZ you may download!

     Current GSZ and DSZ versions are maintained on GEnie (IBM Roundtable),
     EXEC-PC BBS, CompuServe (IBMCOM and CONSULT SIGs) as well as
     TeleGodzilla.

     DSZ is a popular program which has been the object of virus attacks.
     Pirated/hacked versions of DSZ have cost users and DSZ's developer
     thousands of dollars in lost time and other expenses, in addition to
     injuring of Omen Technology's reputation.

     Virus and Trojan code hidden in hacked/pirated copies of DSZ and
     programs claiming to "register DSZ" have caused loss of data.

     Name             Length                           Date        Time   CRC


     dsz.com          52430  Crunched   16%     44499   7 Oct 91   2:17p  1054
     dsz.exe          63135  Crunched   20%     50998   7 Oct 91   1:37a  2878
     PKZIP -vt 32 bit CRC: 2396D9D6   52430  dsz.com
     PKZIP -vt 32 bit CRC: 49E0BE41   63135  dsz.exe



     Your copy of DSZ should show this information as provided by

            arc v dsz
     or
           pkxarc -v dsz
           lharc v dsz

     ARC, and LHARC use a 16 bit CRC.


     ZIP uses a 32 bit CRC compatible with  the  Professional-YAM  and  ZCOMM
     "crc" command.
           pkzip -vt dsz
     The following Pro-YAM/ZCOMM command gives the 32 bit CRC for DSZ.COM:

     EXAMPLE: >>>c: crc dsz.com


     If your copy shows a different CRC or file length, insist on a
     legitimate copy and report the source of the bogus/pirated copy to Omen
     Technology Inc.  Omen Technology has received reports of serious
     problems caused by unauthorized patches to DSZ, and cannot assume
     liability for the performance of the resultant code.





     Chapter 19 Pg 57       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     COM7 and COM8 are changed; see the "port" command above.

     A problem in the 1/17/89 and 2/2/89 DSZ versions corrupts files under
     unusual circumstances.  Please delete all instances of the 1/17/89 and
     2-02-89 version.

     There never was a "zmodem d" parameter in DSZ.  Older versions of DSZ
     ignored attempts to set this nonexistient parameter with a message that
     humans ignored.  DSZ now aborts when asked to set a nonexistient
     parameter.  There is a "d" parameter that controls time/date stamping of
     files; Bulletin boards that need to disable time/date stamping of
     received files should simply use "pd0" not preceded by a "z".

     Good news for tired frog stompers!  The ZMODEM rz/sz programs are
     available in native VMS flavors with wild cards, record format support,
     etc..  Pre compiled VAX/VMS files are contained in the RZSZ.TLB
     compressed text library.

     The DSZ and GSZ "t" command uses the DOS console driver for terminal
     emulation.  Standard ANSI.SYS is limited to a small subset of ANSI
     escape sequences; NANSI.SYS, FANSI-Console and other replacement console
     drivers provide faster screen updates and better ANSI terminal
     emulation.

     Oct 8 1991: Some versions of putsnp were confused by a data pattern in
     the Oct 7 dsz.com, misplacing the installed serial number.

     Oct 7 1991: The "t" (talk) command now accepts -h and -H to enable local
     echo.

     Oct 1 1991: Fixed an interaction between FIFO uarts and YMODEM-g
     termination after all files have been sent.  Fixed problem of some
     options being ignored on XMODEM and YMODEM downloads.  Fixed graphics
     display problem involving more than 40 MB of files.


     Sep 4 1991: GCOLORS now saves the color scheme in a separate file
     GCOLORS.T.  Many small improvements in the GSZ file xfer display.
     GCOLORS adds a "m" menu choice to remove color from the color scheme.

     A conflict between crash recovery and user specified short packets has
     been corrected.

     DSZ.EXE and GSZ now accept the "c" option to force incoming files to use
     a changed file name when a file with the same name exists.  The
     receiving program must support this new ZMODEM option or file
     disposition will be undefined.

     Aug 7 1991: Serial I/O modifications have solved a Wedge-O-Matic(R)
     problem with one hardware configuration (antique 2400 bps internal
     modem).  Hopefully this will solve similar non-replicatable problems for





     Chapter 19 Pg 58       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     other users.

     A number of display fixes/enhancements to GSZ, including the addition of
     the GSZWINDOW environment variable enabling BBS sysops to protect BBS
     status lines at the bottom of the screen.


     July 29 1991: Corrections to gcolors registration function.

     July 28 1991: Some changes to GSZ and CGOLORS to improve human factors.

     "GCOLORS -q" disables the flashing reminder of which field is being
     modified.  This was added to help users with certain visual impairments.

     A few users have reported hung transfers wither certain hardware and/or
     software configurations.  We have not been able to replicate the
     problem, but have added code that recovers from lost interrupts.

     July 21 1991: Preview release of GSZ!!


     July 3 1991: Spurious "Invalid Download Directory" message has been
     removed.  More hacks to accomodate AT&T's mutant "ymodemb" protocol.
     AT&T may be the right choice, but their "ymodemb" is not the right
     protocol.

     June 13 1991: DSZLOG entries made by the 6/10 DSZ had no carriage
     returns.  Please check the "pxN" and "z pxN" command descriptions for
     important clarifications.

     June 10 1991: A problem with sending with flow control has been fixed.
     Intelligent Crash Recovery(TM) has been enhanced to prevent timeouts
     when computers with different CPU speeds are used.

     May 31 1991:  The "sb" command has been hacked to accomodate an AT&T
     nonstandard "ymodemb" protocol.

     The handling of hardware flow control has been hacked to prevent flow
     control timeouts caused by TSR programs that poll the UART status
     registers.

     The size of the input buffer has been increased.

     The "V" numeric parameter has been added to DSZ.COM to allow direct
     video output in some instances.

     April 29 1991: The "t" command no longer ignores options set with DSZOPT
     and/or as flags to the "t" command.

     April 16 1991: Operation of "handshake slow" has been enhanced when
     receiving with ZMODEM CRC-32 and MobyTurbo(TM).  Users who had





     Chapter 19 Pg 59       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     previously found "handshake slow" unable to control disk related "Line
     Status Register 02" overrun errors should find the new "handshake slow"
     more effective on ZMODEM CRC-32 and MobyTurbo downloads.

     DSZ.COM and DSZ.EXE now announce themselves as DSZ.COM and DSZ.EXE.
     DSZ.DOC has more discussion of differences between .COM and .EXE flavor.
     See the FILES chapter for expanded discussion of DSZ.COM vs DSZ.EXE.

     April 4 1991:  DSZ now supports 115200 bps on suitable hardware.
     DSZ.EXE throughputs of 113000 bps have been achieved with modest
     trickery.  "Your mileage may vary."

     The -I option has been added to the sz command.  The -I option causes
     new versions (Mar 29 1991 or later) of VMS rz to store files with the
     VMS Variable length (mrs=510) binary format.  Adding this record format
     should prevent VMS Kermit servers from corrupting file contents.

     pcAnywhere users: please read the "A" command description carefully!

     Feb 28 1991:  The instructions for adding DSZ to ProComm Plus have been
     updated to include PCP version 2.  Datastorm has not licensed ZMODEM-
     90(TM) despite allegations that DSZ is now "built in" to ProComm Plus
     version 2.

     The F command was added to leave the 16550A FIFO enabled on exit.  The
     speed command now updates the effective baudrate used for time
     estimates.


     sz -e is more network friendly.  (If you don't know what sz -e does, you
     don't want to know - trust me.)

     Dec 16 1990:  Code changes to improve operation with the Intel
     SatisFAXtion modem/fax board.

     Nov 19 1990:  A number of small enhancements.

     The sz -i and -u options were added.  The -i option is useful sending
     files to VMS rz version 4.x, forcing VMS Stream_LF record format.  The
     -u option unlinks (deletes) a file after it is successfully sent with
     ZMODEM.

     SlugBait has been fixed.

     The Y numeric parameter (described above) has been added to allow FIFO
     hackers to do their thing.

     June 25 1990: When a ZMODEM block length is forced, the receiving DSZ
     writes the data to disk before acknowledging the block.  With DSZ.EXE
     and its maximum 16384 buffer size, you may be able to avoid overrun
     (Line Status Register 02) problems receiving to slow disk drives by





     Chapter 19 Pg 60       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     using:
     DSZ pB16384 z pl16384 rz

     ZMODEM-90(TM) speeds up GEnie ZMODEM downloads; see DSZOPT.

     The "sz" command had an undocumented fallback to YMODEM, this has been
     removed for reliability reasons.

     The SlugBait (-s) option now causes DSZ to return success (0 exit code)
     if at least one file is transferred.

     April 11 1990: Enhancements for more efficient multitasking under
     DESQview and DESQview 386.  Code which prevented IRQ conflicts between
     COM1/COM3 and COM2/COM4 has been removed to allow use of COM7 and COM8
     without interference from DSZ running on COM1 or COM2..

     ZIP replaces ARC as the standard download distribution format on new
     files.

     March 21 1990: DSZ now sends the CANCEL sequence if it runs out of disk
     space while receiving a file with ZMODEM.

     DSZ now defaults to "handshake both" if the clear to send signal is high
     when DSZ selects the comm port regardless of the initial "baud rate".

     The P parameter can be set to -1 to disable the FIFO on the Western
     Digital WD16550 chip.  The WD16550 FIFO has been observed to lose
     characters when transmitting at slow baud rates.  A more elegant
     software solution to this hardware problem may be discovered in the
     future.

     Feb 25 1990: Doco change only. The "R" numeric parameter or the
     "restrict" command may be used to force partially received files to be
     deleted.  These features have been in DSZ for a long time, but never got
     into DSZ.DOC.

     Feb 18 1990: DSZPORT now accepts "portx" style arguments in addition to
     the traditional decimal number.  The -Wn option has been improved.

     Jan-28-1990: Doco improvements, especially to the "In Case of
     Difficulty" chapter.  BBS registration clarified for those that bother
     to read it.  Qmodem batch files fixed.  No change to the DSZ software.

     Jan-22-1990: ZMODEM-90(TM) extensions:

     Receiver specified window size: The -Wn option operates similarly to the
     -wn option.  The -Wn option is specified to the receiver, which sends
     this information to the sender.  Pro-YAM, ZCOMM and DSZ versions
     beginning with Jan 22 1990 support this.

     Specified extra escaped characters: The "zmtxesc" and "zmrxesc" allow





     Chapter 19 Pg 61       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     extra characters to be escaped when sending (zmtxesc) or receiving
     (zmrxesc).  Zmtxesc is effective sending to any ZMODEM program.  The sz
     commands in Omen products after Jan 22 1990 except for DSZ.COM recognize
     incoming "zmrxesc" requests.  The zmrxesc and zmtxesc string parameters
     consist of one or more printing characters corresponding to the control
     characters to be escaped.  To escape NULL:  set zmrxesc "@"

     Since DSZ does not support string parameters, a -Q<string> option unique
     to DSZ performs the same function as zmrxesc and zmtxesc.  If the
     Q<string> option is used in DSZOPT, it must be last.  To escape NULL:
     DSZ sz -Q@ file.ext

     MobyTurbo(TM):

     MobyTurbo optimizes throughput on GIF, ZIP, ARC, and similar files
     without sacrificing ZMODEM's famous reliability on noisy lines.
     MobyTurbo works with standard modems, error correcting modems with
     hardware flow control, and over paths that support ZMODEM and do not
     "eat" or otherwise respond to control characters.  This includes all
     paths that support YMODEM-g (or would except for line noise).

     MobyTurbo can be used for downloads over PC Pursuit if software flow
     control is not turned on.

     Activate MobyTurbo with the -m option to one or more of: sz command, rz
     command, or DSZOPT environment variable.

     ZMODEM over 7 bit paths:  (Not supported in DSZ.COM)

     A pair of ZMODEM-90 programs with 7-bit support operating over a 7 bit
     path should detect that fact and switch to one of two 7-bit path
     compatible encodings.  For testing, this can be forced with a "-E"
     option.

     Default 7-bit mode is RLE compression and 8th bit quoting similar to
     Kermit but more efficient because not so many control characters are
     quoted.  Use this default for text files.  Rubout and all control
     characters can be escaped with the -e option.  Individual control
     characters can be escaped with "zmtxesc" and "zmrxesc".

     Pack-7 instead of quoting is activated with the -P option.  (-P has no
     effect on 8 bit paths.) Pack-7 packs 4 bytes into 5 printing characters.
     This is more efficient than quoting for files where 25% more 8th bits
     appear than the number of characters saved by RLE compression.  (This
     statement applies to GIF, ARC, ZOO, and ZIP files.  It may or may not
     apply to other binary file formats, depending on the data.) Pack-7 will
     match or beat standard Kermit on ZIP files, even when Kermit has use of
     all 8 bits.

     SUPK412.ZIP 75136 bytes sent at 2400 bps direct connect from an
     Everec 1800 AT clone 8mHz/0ws to an 18 mHz Intel 386 motherboard.





     Chapter 19 Pg 62       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     8-Bit line
     cps     Protocol/command
     156     MS Kermit 3.00 to MS Kermit 3.00  (defaults)
     182     MS Kermit 3.00 to MS Kermit 3.00  (windows=2 length=2000)
     184     MS Kermit 3.00 to Pro-YAM 17.51 (windows=2 length=2000)
     231     Pro-YAM 17.51 ZMODEM (defaults)
     237     Pro-YAM 17.51 ZMODEM-90(TM) MobyTurbo(TM) (sz -m)

     7-Bit line
     cps     Protocol/command
     156     MS Kermit 3.00 to MS Kermit 3.00  (windows=4 length=2000)
     190     Pro-YAM 17.51 ZMODEM-90 PACK-7 (sz -EP)

     Kermit transfers used 8 bit CRC, ZMODEM used 32 bit CRC.


     ************************************************************************
     ************************************************************************

     WHAT TO LOOK FOR:

     Performance     difference     with     MobyTurbo,     possible     side
     effects/incompatibilities.   MobyTurbo  logic  tests  for  software flow
     control incompatibilities: when does this test fail?

     Automatic detection of 7-bit paths.  Spurious detection of  7-bit  paths
     and failure to detect 7-bit paths.  (DSZ.EXE only)


     12-13-89  The Virus check was removed because of user confusion and slow
     startup under certain conditions.  Code has been added to prevent and/or
     recover from "line status register 18" errors.

     10-28-89 A T may be appended to DSZOPT or "DSZ t  -T"  may  be  used  to
     force  DSZ  to  exit  after  it has recognized a ZMODEM AutoDownload(TM)
     request.

     10-24-89  BBS registered copies (serial  numbers  8000-8999  and  20000-
     23999) are now fully featured.

     The BBS registration form has been  modified.   Please  read  this  form
     carefully  before  applying  a  BBS  serial  number.   Use of BBS serial
     numbers (4000, 20000 series) acknowledges acceptance of this contract.

     The IMP/KMD compatibility file length information in the  YMODEM  header
     generated by the sb command now uses the correct byte ordering.  Changes
     to the XMODEM/YMODEM sz/sb commands were made  to  accommodate  programs
     that ise CK or CKL.  (As predicted in 1985, networks sometimes interfere
     with these sequences.)

     Files passed over because of creation errors at the  receiving  end  are





     Chapter 19 Pg 63       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     now  counted  by the "sz" command as errors.  The receiving program must
     be a 9/89 or later version for this to be effective.

     The specified directory form of the rz and rb commands has been  enanced
     to accommodate certain forms of erroneous syntax.

     6-19-89 A documentation error (concerning DSZPORT) was corrected in  the
     DOC file.

     5-25-89  Corrects a protocol negotiation problem encountered when the rz
     or sz -e option is used.

     Host programs can now specify an alternate CANCEL sequence (not used for
     DOS and Unix).

     The ZMODEM "Slow Send" mode inserts a brief pause after  each  subpacket
     when  invoked with the -F option, or automatically when the "sz" command
     detects failing flow control.  The zmodem F numeric  parameter  (default
     1) sets the pause in tenths of seconds.

     4-24-89 The -rr option has been improved.  Long file compares  are  done
     in  two  stages  to  save  time  when  the  first portions do not match.
     Diagnostic code and undocumented commands have been removed to  decrease
     the program size.

     The 4-18 version introduces ZMODEM variable length headers of up  to  16
     bytes  information  field instead of the previous fixed 4.  Selection of
     variable length header capability is automatic and downward  compatible.
     Variable   length   headers   allow   future   extensions   to  ZMODEM's
     capabilities.

     ZMODEM Crash Recovery now understands the  -rr  option  to  compare  the
     CRC-32   of  the  assumed  common  file  segment  before  continuing  an
     incomplete file transfer.  The "zmodem R" numeric parameter may  be  set
     to limit the number of bytes in the files that are compared; the default
     R value of 0 allows all of the file to be compared, an  R  value  up  to
     32000  (up  to 2 billion on 32 bit flavors) limits the comparison to the
     first R bytes of the two files.  The ZMODEM -rr option is  supported  by
     Omen Tech versions April 18 1989 and later.

     When ZMODEM Crash Recovery detects incompatible source  and  destination
     file  contents,  the  destination  file  is now truncated to zero length
     before proceeding  with  the  transfer.   Crash  Recovery  requires  the
     destination file to be no longer than the source file.

     Error reporting on unregistered copies has been enhanced  to  point  the
     user to solutions described in the relevant chapters in DSZ.DOC.

     3-18-89 In order to work around a bug in the  new  TCOMM  bbs,  DSZ  now
     defaults  to  "handshake  on"  if the speed is greater than 2400 and the
     clear to send signal is high when DSZ selects the comm port.





     Chapter 19 Pg 64       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     The "o" command has been added to disconnect the modem after a  terminal
     session:  "DSZ  t  o" disconnects the modem when the terminal session is
     completed.

     The "P" (capital P) numeric parameter (q.v.) has been added  to  display
     and control the UART fifo on some clone chips.

     BBS registrations postmarked after Feb 28 1989 must be accompanied by  a
     paid  DSZ  registration.  The free program expired Feb 28 1989.  Outside
     help has been hired to process and verify  applications  received  under
     that program.

     2-23-89 The term function now sends BREAK in response to the ALT-B  key.
     Handling  of  the  Ctrl-Break  vector  has  been  changed so an untimely
     keyboarded Ctrl-C or Ctrl-Break will not hang DOS.

     2-15-89  DIRRX is enabled for BBS registrations (8xxx  numbers).   Logic
     has  been  added  to  simulate  transmit  interrupts  on chips that have
     problems in this area.  The "A" command does not  require  registration.
     An  interaction between ONAME= or PREFIX= and the file count display has
     been removed.  Time/date conversion routines have been enhanced to  deal
     with  files with missing dates.  The "v" command has been added to allow
     bbs programs to interrogate DSZ's serial number.

     2-06-89 A spurious error message at the completion of  YMODEM  downloads
     with  a  download  directory  specified  on  the  command  line has been
     eliminated.

     2-05-89 DSZ now returns a non 0 status unless at least one file has been
     transferred.    An   inappropriate   pathname/disk  specifier  check  on
     specified download directories has been removed.

     Previous versions:

     Added the "A" command to prevent pcAnywhere host mode  from  locking  up
     DSZ.   SlugBait  logic  has  been  simplified, reporting any failed file
     transfer where any of the last 1K of the file was sent with Q status.

     Introduced ZMODEM RLE compression with the -Z option.   (registered  DSZ
     copies  also  accept "Z" in the DSZOPT environment variable.) ZMODEM RLE
     compression packs runs of the same character in two or  three  character
     sequences.    Compression  is  useful  for  screen  dumps,  uncompressed
     workspaces, compiler listings, and other  files  rich  with  strings  of
     repeated  characters,  but  not  .GIF,  .ARC,  .ZOO and other compressed
     files.  Compression percentages range  from  -1  per  cent  for  already
     compressed  files  to  more  than  1000  per cent (10x speedup!) for the
     Personal Computing text file benchmark(!).   When  sending  to  programs
     that  do  not support ZMODEM compression, the -Z option is ignored.  The
     -Z option is effective when specified to the sending program only.

     "Handshake slow" has been added to disable the RTS signal to  the  modem





     Chapter 19 Pg 65       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     while writing to disk, even if the interrupt buffer is not chock full of
     bytes.  This should help systems with  excessive  interrupt  latency  on
     disk writes.

     Setting the v (verbose) parameter to  1  or  greater  causes  serialized
     copies to ring the bell when a transfer is done.

     DSZ.DOC has been extensively rewritten and  reorganized.   DSZ  supports
     the  advanced  buffering of the National NS16550AN, NS16550AFN and Intel
     82510 serial interface devices.   Please  refer  to  the  subchapter  on
     "Brain Damaged UARTs".













































     Chapter 20 Pg 66       DSZ Reference Rev Oct-7-91        Typeset 10-7-91


     20.  ACKNOWLEDGEMENTS

     32 bit CRC code courtesy Gary S. Brown.

     ZMODEM-90(TM), MobyTurbo(TM), The High Reliability Software(TM), Demand
     Upgrade(TM), TurboLearn Script Writer(TM), Cybernetic Data Recovery(TM),
     ZMODEM AutoDownload(TM), Intelligent Crash Recovery(TM), Error
     Containment(TM), Full Time Capture(TM), True YMODEM(TM),
     OverThruster(TM), Password Guardian(TM), CryptoScript(TM), and
     TurboDial(TM) are Omen Technology trademarks.

     PowerCom was trademarked in 1985 by POLYTRON Corporation, Hillsboro
     Oregon.

     True YMODEM(TM) is an Omen Technology Trademark signifying YMODEM
     protocol support that meets the full YMODEM specification.

     DSZ and this documentation are Copyright 1991 by Omen Technology Inc,
     all rights reserved.  DSZ is not and never has been Public Domain.
     Every version of DSZ has included a Copyright Notice and a prohibition
     against sale or modification.  This prohibition applies to any theft of
     the intellectual property and trade secrets contained in DSZ by
     decompilation, disassembly, or any other form of reverse engineering
     including but not limited to profiling, tracing, data analysis, or
     monitoring the operation of DSZ.

     Omen Technology copyright applies to its expression of the encoding and
     compression ideas expressed as code and byte streams used in the
     ZMODEM-90 enhancements.

     DSZ is not and never has been Copy Protected.  "DSZ unprotect" files
     have no function whatsoever except to aid and encourage the theft of
     Omen Technology's Intellectual Property.

                           Omen Technology Incorporated
                          The High Reliability Software

                       17505-V Northwest Sauvie Island Road
                              Portland Oregon 97231
                    Modem: 503-621-3746 Speed 1200,2400,19200
                                FAX: 503-621-3735
                         CompuServe:70007,2304  GEnie:CAF














```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3330

     Volume in drive A has no label
     Directory of A:\

    DSZ      ZIP     52550  11-19-91   2:51p
    PCBDISK3 EXE    283019  10-12-92   9:30a
    GO       BAT        27  11-11-92  12:21p
    GO       TXT       693   1-27-93   7:14a
            4 file(s)     336289 bytes
                           23552 bytes free
