---
layout: page
title: "PC-SIG Diskette Library (Disk #558)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0558/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0558"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PROMPT"

    PC-PROMPT is a unique, memory-resident DOS help program that
    automatically provides information for DOS commands as you type them.
    The F10 function key can display additional help whenever needed. Help
    screens can also be invoked for EDLIN, DEBUG, BASIC and Borland's Turbo
    Pascal editor.
    
    Since PC-PROMPT is memory-resident, it stays loaded in memory until you
    reboot the PC. It automatically activates at the DOS prompt, and
    deactivates whenever you execute any DOS command, batch file, or
    program. Because of this, it is compatible with most software, even
    with programs which do direct screen memory operations without using
    DOS. It is even compatible with various other memory-resident programs
    such as RAM drive emulators, printer spoolers, and Borland's SideKick.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0558.TXT

{% raw %}
```
Disk No:  558                                                           
Disk Title: PC-Prompt                                                   
PC-SIG Version: S3.1                                                    
                                                                        
Program Title: PC-Prompt                                                
Author Version: 3.0                                                     
Author Registration: 10.00                                              
Special Requirements: None.                                             
                                                                        
PC-PROMPT is a unique, memory-resident DOS help program that            
automatically provides information for DOS commands as you type them.   
The F10 function key can display additional help whenever needed.  Help 
screens can also be invoked for EDLIN, DEBUG, BASIC and Borland's Turbo 
Pascal editor.                                                          
                                                                        
Since PC-PROMPT is memory-resident, it stays loaded in memory until you 
reboot the PC. It automatically activates at the DOS prompt, and        
deactivates whenever you execute any DOS command, batch file, or        
program.  Because of this, it is compatible with most software, even    
with programs which do direct screen memory operations without using    
DOS. It is even compatible with various other memory-resident programs  
such as RAM drive emulators, printer spoolers, and even Borland's       
SideKick.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP.DOC

{% raw %}
```







                          PC-prompt USER'S GUIDE







                           Lake Medici Software
                           17 Medici Court
                           Baltimore, MD  21234








                 Copyright (c) 1985,1986  Anthony J. Spuria

                         All rights reserved



  



          CONTENTS                                            PAGE



          Introduction ..........................................1

          Installation ..........................................2

          Starting PC-prompt ....................................3

          Using PC-prompt .......................................4

          Stopping PC-prompt ....................................5

          PROMPT Command Considerations .........................6

          In Case of Trouble ....................................7

          Appendix A -- Using an AUTOEXEC.BAT file ..............8

          Appendix B -- A Sneak Preview ........................10

          Appendix C -- PC-prompt Licensing Terms...............11

          Appendix D -- Customized Prompts and Help Screens.....12 

          Appendix E -- Benefits of Registering PC-prompt.......13      



                            Introduction


          PC-prompt is a unique memory-resident help utility for
          the IBM PC, XT, AT, and compatibles.  It looks for DOS
          commands as you type them and automatically displays
          their syntax definitions in inverse video on the last
          line of your monitor screen.

          Pressing the F10 function key instantly displays a
          help window for the command being entered.  This
          window overlays whatever information was on the first
          23 lines of the screen.  The command being typed still
          shows on line 24, and the proper format for the
          command is still displayed on the last line.

          You can leave the help window on the screen as you
          finish typing the command, or you can press the F10
          key again to return to your previous display.  Leaving
          the help screen activated lets you finish entering the
          command while you can still see examples of its use
          and descriptions of its parameters and options.  In
          either case, the command syntax remains on the last
          line as a reference.  If the help window is still
          active when you press the Enter key, it will
          automatically be replaced by your original screen
          before the command is executed.

          Pressing the F10 key while at the DOS command level
          calls up a help window which lists most of the
          commonly used DOS commands.  You can toggle back and
          forth at will between this window and your previous
          display by pressing the F10 key.

          Since PC-prompt is memory-resident, it stays loaded in
          memory until you reboot the PC.  It automatically
          activates when DOS reaches the command level, and
          deactivates whenever you execute any DOS command,
          Batch file, or program.  Because of this, it is
          compatible with most software, even with programs
          which do direct screen memory operations without using
          DOS.  It is even compatible with various other
          memory-resident programs such as RAM Drive emulators,
          printer spoolers, and even Borland's SideKick.
        
          If you can't wait to see PC-prompt in action, jump
          ahead to Appendix B -- A SNEAK PREVIEW.  However,
          be sure to come back and read the rest of this
          User's Guide as soon as you have sampled PC-prompt
          in action.

                                                          1




                         PC-prompt INSTALLATION


        
          PC-prompt has two modes of operation.  The Full-Help
          mode operates as described in the introduction.  The
          current version of PC-prompt requires about 33K
          bytes of memory for this mode.  If this leaves you
          without enough memory for some particular application,
          you can still get the pop-up command syntax
          descriptions by selecting the Prompts-Only mode of
          operation.  This mode uses less than 14K bytes of
          memory.

          The Full-Help mode requires the files:
          
                         HELP.EXE
                         HELPF.CMP
                         HELPPOPF.CMP
                         HELPCMDF.NCP
                         HELPTABF.NCP

          The Prompts-Only mode requires the files:

                         HELP.EXE
                         HELPP.CMP
                         HELPPOPP.CMP
                         HELPCMDP.NCP
                         HELPTABP.NCP

          For convenience you can copy all files required for
          the mode(s) you intend to use onto your boot disk.  You only
          need these files to start PC-prompt after you boot
          your computer, so it is not actually necessary to keep
          them on your system disk.  However, this allows you to
          automatically invoke PC-prompt with an AUTOEXEC.BAT
          command file.  See Appendix A for further information
          about using an AUTOEXEC.BAT file.
          








                                                            2


        
                         STARTING PC-prompt

        
        
          All of the required HELP files must be in the default drive
          (and subdirectory) when you start PC-prompt.  The default
          drive can be set by entering its drive letter followed by a
          colon and then pressing the Enter key.  For example, if the
          files are on drive A, issue the command:

                         A:

          and press Enter.  If the files are in a subdirectory, use
          the CD command to change to this directory.  For
          example, if the files are in a subdirectory named "HELP"
          just below the root level on drive A, issue the command:

                         CD \HELP

          and press Enter.

          After you have set the default drive (and subdirectory),
          issue the command:

                         HELP

          and press Enter.

          The PC-prompt disk can be removed after the program has
          initialized itself; it is not needed again unless you
          reboot.

          When you start PC-prompt, it lets you select either the
          "Full-Help" or "Prompts-Only" operating mode.  As an
          option, you can make this selection when you start
          PC-prompt by appending an F (for Full-Help) or P (for
          Prompts-Only) on the command line as follows:
        
                         HELP F
        
          or

                         HELP P

          By doing this you avoid having PC-prompt explain your
          options and request your selection.  This makes it possible
          to start PC-prompt automatically each time you boot your
          PC.  To do this, simply put the HELP F or HELP P command in
          your AUTOEXEC.BAT command file.  See Appendix A for
          information about using an AUTOEXEC.BAT command file.

                                                                 3




                       USING PC-prompt

        
        
          PC-prompt uses the last line of the display as a
          prompt line.  When it first recognizes the standard
          DOS command prompt (for example, A> ), it explains
          that you can get a list of DOS commands by pressing
          the F10 function key.  Try it.  Press F10 again to
          restore your old screen.  You can toggle back and
          forth between the current PC-prompt help screen and
          your normal screen whenever DOS is waiting for you
          to enter a command.
        
          Once PC-prompt has been started, it continually
          monitors keyboard input and screen output made using
          the standard DOS console device handler CON.  When it
          recognizes a DOS command, it automatically prompts on
          the bottom line of the screen with the general format
          for that command.  This may be all you need, but if
          you have selected the Full-Help mode and you want more
          help just press the F10 function key.  A pop-up help
          window for the command will appear giving examples of
          its use and describing any parameters or options it
          may have.  You can continue typing the command while
          the help screen is still being displayed, or you can
          press the F10 key again to restore your old screen
          before you continue.  If you leave the help window on
          the screen, PC-prompt will automatically restore your
          previous screen when you press Enter.
        
          Although PC-prompt is mainly an aid for using DOS at
          the command level, it also provides help while you are
          using BASIC, DEBUG, EDLIN or Borland's Turbo Pascal
          editor.  Within these programs you can toggle back and
          forth between the help screen and your normal screen
          by pressing Shift-Alt-F10 (press and hold Shift and
          Alt keys, then press F10).  This three-key "hot key"
          combination is used to prevent accidentally interfering
          with programs which use the function keys alone or with
          the control, shift or alt key.






                                                              4




          When PC-prompt is activated within one of these
          programs, Shift-Alt-F10 can be used to restore your
          normal display screen.  Since BASIC and the Turbo
          Pascal editor sidestep the standard DOS keyboard and
          screen routines, you should restore you screen before
          typing any command within these pregrams.  When using
          DEBUG or EDLIN, however, you can use the automatic
          screen restoration that takes place when you press
          Enter.

          Note also that help for Turbo Pascal applies only
          within the editor portion of this program.  DO NOT
          press Shift-Alt-F10 within other portions of this
          program or you will exit back to DOS without saving
          your work.




                           STOPPING PC-prompt


          PC-prompt can be temporarily disabled by changing
          the DOS command prompt as described below under
          "Prompt Command Considerations".  In order to recover
          the memory it uses, however, you must reboot by
          pressing Ctrl-Alt-Del.  If you started PC-prompt with
          an AUTOEXEC.BAT file, you can either:

          1.  Modify AUTOEXEC.BAT to remove the HELP F or HELP P
              command.

          or

          2.  Rename AUTOEXEC.BAT to another name so that it
              will not be executed when you reboot.
          
          You MUST do something of this sort before you reboot
          or PC-prompt will just be automatically restarted.








                                                        5
 

                    PROMPT COMMAND CONSIDERATIONS
        
        
          PC-prompt monitors all DOS operating system output to
          the screen and looks for the normal A> ( or B> or C> )
          command prompt.  If you have changed this standard
          prompt with the
             
            PROMPT [prompt-text]
        
          command, either manually or in an AUTOEXEC.BAT file, it
          won't find this and won't do its automatic command
          prompting.  You can correct this situation by reissuing
          the PROMPT command without any prompt-text parameter. 
          You can use this PROMPT command with and without the
          prompt-text if you ever want to temporarily disable and
          enable PC-prompt.  If you want to modify the command
          prompt and still keep PC-prompt active, you must follow
          one simple rule:

          The last characters in the prompt-text MUST be

                        $_$n$g

          These are special meta-characters used by the PROMPT
          command which function as follows:

          $_  returns the cursor to the start of the next line
          $n  is replaced by the default drive letter
          $g  is replaced by the ">" symbol





          These meta-characters must be entered exactly as
          shown, in lower case with no spaces between them.

          A commonly used prompt command which shows your
          current default drive and subdirectory is:

                       PROMPT $p

          This command temporarily disables PC-prompt.  You can
          reenable it either by issuing the PROMPT command with
          no prompt-text, or by entering the command:

                       PROMPT $p$_$n$g

          This command displays your default drive and
          subdirectory on one line, followed by the normal DOS
          prompt on the next line.
                                                                   6



                    IN CASE OF TROUBLE

        
        
          If PC-prompt ever stops working, issue the command:
        
                      PROMPT
        
          with no parameters.  This will restore the standard
          DOS command prompt if it has been changed.  See the
          section "PROMPT COMMAND CONSIDERATIONS" for more
          details about using the PROMPT command in conjunction
          with PC-prompt.
        
          If you have restored the normal DOS command prompt but PC-prompt
          is still not working, it may be necessary to change the
          order in which you install memory resident software in
          your system.  For example, RAM disk emulators often
          must be loaded before any other resident software. 
          Other programs like BORLAND's SIDEKICK, for example,
          want to be the last resident programs loaded.  Try
          starting memory resident programs in another order to
          see what works best in your particular situation.  In
          some cases you may have to choose between PC-prompt and
          some other program if the two are not compatible.























                                                                  7


                                                           
                  APPENDIX A -- USING an AUTOEXEC.BAT FILE


          In its simplest form, a batch file is just a text file
          with DOS commands on each line.  When the batch file
          is invoked, these commands are executed one by one. 
          AUTOEXEC.BAT is a special batch command file that is
          invoked automatically whenever you boot your PC.  If
          you don't have such a file, you can create one using
          EDLIN or any other text editor that produces pure
          ASCII text files.

          Another way to create an AUTOEXEC.BAT file is to issue
          the command:

                         COPY CON: AUTOEXEC.BAT

          and press Enter.  Each line you now type will be
          copied into a new file called AUTOEXEC.BAT.  You can
          use the cursor keys, Ins key, Del key, etc.  to
          correct any typing errors before you press the Enter
          key.  When you do press the Enter key, the command
          line you have typed will be added to the file.  When
          you have finished entering all desired DOS command
          lines into this file, end the file creation operation
          by pressing the F6 function key and then pressing
          Enter.

          Alternatively, you can use a batch file named
          AUTOHELP.BAT which is on your PC-prompt Working Disk. 
          If you have a two drive system, you can copy the
          AUTOHELP.BAT file onto your boot disk by putting the
          PC-prompt Working Disk in drive B and your boot disk
          in drive A and issuing the command:

                         COPY B:AUTOHELP.BAT A:AUTOEXEC.BAT

          For a one drive system, you can put the PC-prompt
          Working Disk in drive A and issue the command:

                         COPY A:AUTOHELP.BAT B:AUTOEXEC.BAT

          When told to insert the diskette for drive B, remove
          the PC-prompt Working Disk, insert your boot disk back
          into the single drive, and press the space bar.



                                                              8





          If you already have an AUTOEXEC.BAT command file,
          you can use EDLIN to add either the command:
        
                              HELP F

          or

                              HELP P
        
          to it.  If you omit the F or P you can key in
          this selection each time you boot.





          Remember that the required HELP files must all be in
          the default drive (and subdirectory) when PC-prompt is
          started.  If necessary, insert commands into the
          AUTOEXEC.BAT file to assure that these defaults are set
          correctly as described in the section "Starting
          PC-prompt".
























                                                              9



                 APPENDIX B -- A SNEAK PREVIEW



          This appendix explains how to get a sneak preview of
          PC-prompt in action even before reading the rest of
          this User's Guide.  If you feel uncomfortable with the
          level of explanation given here, then you should
          probably go back and read the details given above.  If
          you do feel comfortable, however, then jump right in
          and get started.

          If you have an AUTOEXEC.BAT file, temporarily rename
          it to AUTOEXEC.TMP.  Next, reboot
          your PC (Ctrl-Alt-Del).  Then put your PC-prompt
          diskette into a drive and set that drive as the
          default.  Now issue the command:

                            HELP

          and read the selection information.  Just press Enter
          to select the Full-Help mode of operation.

          When the help prompt appears on the bottom of your
          monitor screen, press the F10 function key.  This
          displays a window listing DOS commands and explaining
          briefly the pop-up command formats.  Press F10 a few
          times and watch the screen toggle between the help
          window and your previous display.  Type a command like
          DIR, but before pressing Enter, press the F10 key. 
          Note that PC-prompt has recognized the command and
          displays the appropriate help window for it.  Note
          also that the general command syntax definition
          appears in inverse video on the last line of your
          screen.  

          After you have finished sampling how PC-prompt works,
          rename AUTOEXEC.TMP back to AUTOEXEC.BAT.  Be sure to
          read the rest of this User's Guide to get the maximum
          benefit out of PC-prompt.








                                                         10



          APPENDIX C -- PC-prompt LICENSING TERMS


          PC-prompt is NOT public domain software, it is a COPYRIGHTED
          PROGRAM distributed by Lake Medici Software.  You are hereby
          granted a limited license to use PC-prompt, and to copy it and
          further distribute it, under the following conditions:

          1) No fee may be charged for such copying and distribution.

          2) PC-prompt may ONLY be distributed in its original state,
             without any modifications or changes to the program itself
             or to any of its data files.

          3) Use by commercial or governmental organizations must be limited
             to a reasonable time (e.g. about a month) for evaluation
             purposes only, after which time a $20 per copy (per machine)
             price must be paid to

                          LAKE MEDICI SOFTWARE
                            17 Medici Court
                          Baltimore, MD  21234

             (Print the file HELP.INV if your organization requires an
              invoice to make this payment.)

          4) The per-copy (per machine) price for commercial and governmental
             organizations at one site reduces with volume as follows:

                 Copy Number                    Per-Copy Price

                  1 - 5                                $20
                  6 - 10                               $15
                  11 - 25                              $10
                  26 - 100                             $7
                  101 - infinite                       $5

          5) Backup copies may be made as required for safe operational
             practice, but not to circumvent payments.

          6) We would greatly appreciate a small contribution of $10
             from personal (non-business) users to help support future
             development.





                                                                11


          APPENDIX D -- CUSTOMIZED PROMPTS and HELP SCREENS         


          If you become a Registered User by sending $10 for personal use
          or $20 for business use, you will receive the latest version of
          PC-prompt, along with the source for the online prompts and help
          screens.  You will also receive a utility program together with
          instructions for modifying the standard prompts and help screens
          or creating your own customized online prompts and help screens.
          








































                                                                12


          APPENDIX E -- BENEFITS of REGISTERING PC-prompt


          User supported software (sometimes called freeware or shareware)
          attempts to provide useful programs to the PC community at low
          cost by reducing the dependence on conventional marketing channels.
          Several software developers have proven that the concept works, to
          the mutual benefit of the independent program authors and the
          PC community itself.

          The user benefits by the availability of low cost software which
          he can evaluate on his own system before making the decision to
          purchase it.  The author benefits by being able to enter the
          software market without extensive monetary risks.  The user
          community determines which products succeed based on their true
          utility, rather than on their marketing achievements.

          Some of the benefits of registering as a PC-prompt user are:
          
          1.  You will receive the most recent version of PC-prompt.
          
          2.  You will receive the source for the standard version of
              command prompts and help screens.  This source is ONLY
              distributed to registered users and NOT through any
              User Supported Software channels.
          
          3.  You will receive a utility program and instructions for
              creating your own customized prompts and help screens.
              This utility program is copyrighted and is NOT available
              as User Supported Software.

          4.  You will be helping to reduce future software costs for
              yourself and other PC owners.

          PC-prompt represents many, many months of work designing,
          coding, testing and documenting.  Several distinct versions of
          the program were Beta tested before the first public release of
          the software.  The financial rewards for this effort pale in
          comparison to the amount of labor involved.  Nevertheless,
          knowing that a fairly large group of PC users have found the
          program beneficial enough to become registered users gives us a
          sense of pride and accomplishment.
              
          Here's hoping you will find PC-prompt useful too.  Enjoy!







                                                                  13

```
{% endraw %}

## NOTES558.TXT

{% raw %}
```
Program name:          PC Prompt

Author name:           Anthony J. Spuria
Address:               Lake Medici Software
                       17 Medici Court
                       Baltimore, Md 21234

Suggested Donation:    $ 20.00

Program Description:   PC-prompt is a memory resident program that
                       provides the format for DOS commands in an on-line
                       mode. It would be of interest to most users and
                       programmers especially those just beginning to
                       use DOS commands.

                       The Function 10 key is used to toggle back and
                       forth from the help screen. There are also Help
                       screens for BASICA, Borland's Turbo Pascal,  Debug
                       and EDLIN.

                       The program needs 32 K to run in the full help mode
                       while the Prompt only mode needs only 14 K to run.



```
{% endraw %}

## README.TXT

{% raw %}
```
PC-prompt is a unique, memory resident DOS extension that automatically
provides syntax prompting for DOS commands as you type.  The F10 function
key can be used to display additional help whenever needed.  Help screens
can also be invoked for EDLIN, DEBUG, BASIC(A) and Borland's Turbo Pascal
editor from within these programs.

AUTOHELP BAT    Batch file for automatically installing PC-prompt
HELP     DOC    User's Guide for PC-prompt
HELP     EXE    PC-prompt...Memory resident, automatic DOS Help
HELP     INV    Printable invoice for business users
HELPCMDF NCP    Full Help mode command file
HELPCMD3 NCP    Full Help mode command file for DOS 3.2
HELPCMDP NCP    Prompts-Only mode command file
HELPDOS3 BAT    Renames NCP and CMP files for DOS 3.2 HELP
HELPF    CMP    Full Help mode compressed Help file
HELP3    CMP    Full Help mode compressed Help file for DOS 3.2
HELPP    CMP    Prompts-Only mode compressed Help file
HELPPOPF CMP    Full mode Popup DOS command prompts
HELPPOP3 CMP    Full mode Popup DOS command prompts for DOS 3.2
HELPPOPP CMP    Prompts-Only Popup DOS command prompts
HELPTABF NCP    Full mode decompression table   
HELPTABP NCP    Prompts-Only mode decompression table
README   TXT    This file description text

Registered users will receive the source for the command prompts and
help screens together with a utility program and instructions for
creating their own online customized prompts and help screens.  Read
the file HELP.DOC for more detailed information about using PC-prompt
and about the benefits of becoming a registered user.

NOTE:  If you are using DOS versions 3.0 or above, set the default
       drive to the one containing this diskette and execute the batch
       file

                  HELPDOS3.BAT

       before installing the HELP files.  This batch file will rename
       files as follows:

           HELPCMDF.NCP  will become HELPCMD2.NCP
           HELPF.CMP     will become HELPF2.CMP
           HELPPOPF.CMP  will become HELPPOP2.CMP

       then

           HELPCMD3.NCP  will become HELPCMDF.NCP
           HELPF3.CMP    will become HELPF.CMP
           HELPPOP3.CMP  will become HELPPOPF.CMP

       This will replace the full HELP files for DOS 2.1 with those
       for DOS 3.2 which has several new and modified commands.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0558

     Volume in drive A has no label
     Directory of A:\

    HELPF    CMP     18959   9-18-86   9:36p
    HELPPOPP CMP      1122   4-04-86   2:28a
    HELPPOPF CMP       965   9-18-86   9:33p
    HELPP    CMP       844   4-04-86   2:28a
    HELPCMDF NCP       334   9-18-86   9:33p
    HELPTABP NCP       272  10-15-85  10:45p
    HELPCMDP NCP       334   4-04-86   2:28a
    HELPTABF NCP      1238   9-17-86   7:44p
    HELP     EXE     15872   2-04-87  10:14p
    README   TXT      2352   3-09-87   9:24p
    HELP     DOC     25004   2-04-87   8:31p
    HELPDOS3 BAT       194   3-09-87   9:33p
    AUTOHELP BAT        51   9-29-85  10:22p
    HELP     INV      2382   9-23-86   6:17p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       804   1-01-80   6:34a
    NOTES558 TXT       985   5-26-87   7:42p
    HELPCMD3 NCP       412   2-04-87   9:22p
    HELPF3   CMP     30005   2-04-87   9:26p
    HELPPOP3 CMP      1446   2-04-87   9:22p
    FILE0558 TXT      2147   8-29-90   3:02p
           21 file(s)     105762 bytes
                           49664 bytes free
