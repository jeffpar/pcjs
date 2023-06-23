---
layout: page
title: "PC-SIG Diskette Library (Disk #500)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0500/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0500"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOFT-TOUCH"

    Soft-touch is a program that allows keys to be programmed with
    keystrokes.  It operates as a sort of computer shorthand, allowing you
    to speed through often-repeated commands or entries.  It has an
    excellent built-in tutorial.  Soft-touch is a memory-resident program
    that may be activated any time through it's escape sequence.  For the
    adventurous, the source code in assembly language is included.
    
    Usage:  Intermediate-Advanced user or programmer.
    
    System Requirements: 64K, one disk drive, monochrome display
    
    How to Start: Check the READ.ME and then the SOFTCH.DOC files for
    documentation and instructions.  To run, enter SOFTCH and press
    <ENTER>.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    SOFTCH   COM  Main Program.
    LIST     COM  Program to list the tutorial screens.
    TUTOR    DOC  Text information for the tutorial.
    TUTOR    BAT  A batch file to execute the tutorial.
    SOFTCH   DOC  The operations manual text file.
    MCRO     KEY  Tutorial and example micros.
    README        An introductory text file.
    MANUAL   BAT  A batch file to print out the operations manual.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES500.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  500  Soft-Touch P2.03                                       v1.1 DS2
---------------------------------------------------------------------------
Soft-touch is a program that allows keys to be programmed with keystrokes.
It's source file is assembly language.   Soft-touch is a memory resident
program that may be activated any time through it's escape sequence.
 
SOFTCH   COM  Main Program.
MANUAL   BAT  A batch file to print out the operations manual.
README        An introductory text file.
MCRO     KEY  Tutorial and example micros.
SOFTCH   DOC  The operations manual text file.
TUTOR    BAT  A batch file to execute the tutorial.
TUTOR    DOC  Text information for the tutorial.
LIST     COM  Program to list the tutorial screens.
```
{% endraw %}

## NOTES500.TXT

{% raw %}
```
Program name: Soft-Touch P2.03
 
Author name:  Martin D. Flynn
Address:      c/o Software Alternatives Corp.
              1555  Burke Ave.  Bldg K
              San Francisco, Calif.  94124
Telephone:    (415) 641-1818
 
Suggested Donation: $23, Includes enhanced version, registration and limited
                     phone support.
 
Program Description:
 
Soft-Touch is a very complex, if not practical program. The essential use of of
the program is for programming keys with user keystrokes. Hence, the user could
assign his name to the control-N key and thereafter be able to key in his name
simply by typing control-N. Soft-Touch goes way beyond this simple example,
however and ends up being sort of an executive shell with many capabilities. The
major ones are:
 
The ability to nest programmed keys. Hence, if a person's name was programmed
into control-N and a person's address to control-M, the user could program a new
key with control-N and control-M to obtain his name and address. Nesting is
possible this way to 5 levels deep on the unenhanced version and 25 levels deep
on the enhanced version.
 
The use of a macro file to pre-define and save keystrokes. This file can be
specified on the enhanced version, it is "Mcro.key" on the unenhanced version.
This capability allows the user to save and recall his programmed keystrokes. It
also alows the keystroke buffer to be packed by first saving the keystrokes,
clearing the buffer and then recalling the keystrokes.
 
The existence of a time delay function for screen use as well as time and date
capabilities. The time delay function occurs in the form of a parameter option
to Soft-touch and will automatically blacken the screen after a certain interval
of idle time has elapsed at the keyboard. This is designed to prevent screen
burn-out. A full span of time and date functions are available to return the
year, month, day, hours, minutes or seconds.
 
The ability to have a work buffer record all the keystrokes entered into the
keyboard and the ability to play back these keystrokes. The purpose of this is
to view and execute keystrokes before programming them to keys, but ends up
being an extremely powerful device for placing your computer on automatic. If a
file is edited, changed and then saved, for example; while the record mode is
on, the exact same sequence of keystrokes and events can be re-done by playing
back the work buffer. I don't really know how useful this would be for
day-to-day programming, but for something like a demo, it would be great.
 
The existence of programming varialbles along with Pause and Wait commands
during playback. These alow the user to control the playback of the programmed
key as well as enter data during playback into the programming. Hence if a file
was to be renamed, Soft-touch may be programmed so that the file name will be
asked for before the renaming takes place.
 
The ability to re-program the escape sequence calling Soft-touch, so that
Soft-touch will not interfere with any other memory resident's escape code. This
ability is one of the parameter options of Soft-touch. Also, of course, there is
the ability to inactivate Soft-touch and re-activate it from the keyboard, once
it is installed
 
Soft-touch if a very complete and well designed program for what it does,
whether it is actually that much use to the average user cannot be said. It
limitations are: 90 possible programmed keys with 3000 maximum keystrokes and 5
levels of nesting in the unenhanced version. Some functions are also not
available in playback mode on the unenhanced version. Soft-touch requires DOS
2.0 to run.
 
```
{% endraw %}

## SOFTCH.DOC

{% raw %}
```




           +---------------------------------------------------------+
           |                                                         |
           |                                                         |
           |                        Soft-Touch                       |
           |                                                         |
           |              Installation/Operations Guide              |
           |                   manual revision 2.03                  |
           |                                                         |
           |                                                         |
           |                                                         |
           |            Soft-Touch Version P2.03 - 03/12/86          |
           |                                                         |
           |           (C) Copyright 1986 - Martin D. Flynn          |
           |                   All Rights Reserved                   |
           |                                                         |
           |                                                         |
           |                                                         |
           |                                                         |
           | I encourage you to freely use, copy, and share this     |
           | product with friends and associates.  If you decide to  |
           | use this product, support the shared software marketing |
           | concept by becoming a registered user.                  |
           |                                                         |
           |                                                         |
           |                                                         |
           |                                                         |
           |                                                         |
           |                     Martin D. Flynn                     |
           |                        FlynnSoft                        |
           |                      P.O. Box 5034                      |
           |               Redwood City, Calif.  94063               |
           |                     (415) 487-6482                      |
           |                                                         |
           +---------------------------------------------------------+












         -  I reserve the right to make improvements in the product
            described in this manual at any time and without notice.

         -  The software described herein is a copyrighted LICENSE PROGRAM
            and the property of Martin D. Flynn.

         -  This program is distributed as a shared software product.  You
            may freely copy and share this product with your friends and
            associates.  If you decide to use this product, I ask you to
            become a registered user.

         -  Under no circumstances may this product be sold without the
            express written permission of Martin D. Flynn.

         -  Please read the Terms and Conditions contained in the Appendix
            for further details.

         -  Use of this product indicates your acceptance of these Terms and
            Conditions.








      IBM is a registered trademark of the International Business Machines
          Corporation.





                                Table of Contents


      Chapter 1: Introduction

         1.a)  Shareware concept

         1.b)  Description and Capabilities

         1.c)  PC system requirements

         1.d)  Special notation and Conventions

         1.e)  A word about "RAM-cram"


      Chapter 2: Using Soft-Touch

         2.a)  Installing Soft-Touch

         2.b)  Soft-Touch parameters

         2.c)  Escape mode functions

         2.d)  Defining keystrokes from the keyboard

         2.e)  Saving defined keystrokes to a text file

         2.f)  Restoring keystrokes to the keyboard buffer

         2.g)  Using variable fields

         2.h)  Date and time functions

         2.i)  Nesting keystroke definitions


      Chapter 3: Advanced Topics

         3.a)  Enhancing DOS batch file processing

         3.b)  Creating demonstration or instructional self running
               programs

         3.c)  Program interface





      Appendices:

        A)  Special keystroke names

        B)  Keyboard scan codes

        C)  Error messages

        D)  Program License Agreement

        E)  Limited Warranty





           +---------------------------------------------------------+
           |                                                         |
           |                        CHAPTER 1                        |
           |                      Introduction                       |
           |                                                         |
           +---------------------------------------------------------+


      ======================================================================
      1.a)  Shareware concept

      This version of Soft-Touch is distributed in the public domain with
      the idea that you may freely use, copy, and share this product with
      your friends and associates.

      You may review this product at your leasure to determine if you would
      like to continue using it.  If you find it useful, and you decide to
      use it, I encourage you to become a registered user of this product.
      You may receive a single registered copy of Soft-Touch for $23, or
      $20 each for two or more copies.

      Registration provides the following benefits:

         1.  Receive an upgraded version of Soft-Touch with the following
             enhancements:
                - Increased keyboard buffer size to 25000 keystrokes.
                - Ability to save and restore to/from any file name.
                - Escape mode functions <PLAY>, <RCRD>, and <WAIT> have been
                  implemented.
                - Assembler program interface examples.

         2.  Limited telephone support.

         3.  A $5.00 commission for each new registered user who provides
             your registration number as a reference.

      You may recieve a registered copy of Soft-Touch by completing the
      accomanying registration form and mailing it to the specified address.
      Please make payment via C.O.D., check, or money order.  Call for
      information regarding OEM and large quantity discount prices.

      The full assembler source for the enhanced version of Soft-Touch is
      also available and may be purchased for $139.

      Whatever you decide about getting a registered version of Soft-Touch I
      would appreciate hearing what you think about Soft-Touch and any
      suggestions you may have.  Anyone who writes to me will be included on
      my mailing list to be notified of any future enhancements or new
      products.




      Registration form:


      Name.....:______________________________________________________

      Company..:______________________________________________________

      Address..:______________________________________________________

      City.....:_______________________ State:_____  ZIP:_____________

      Telephone:(_____) _____-_______

      Soft-Touch Version:_____._____  Registration ID#:_______________

      Comments:












      Payment:

        Send 1 Copy of enhanced Soft-Touch at $23.00         _____.___
        (or)
        Send ____ Copies of enhanced Soft-Touch at $20.00/ea _____.___

                                             C.O.D.     1.75 _____.___

                                             Shipping            1.50

                                             Calif Sales Tax _____.___

                                                       TOTAL _____.___
      [ ] C.O.D.   [ ] Check enclosed



      Mail to .............. : Martin D. Flynn
                               FlynnSoft
                               P.O. Box 5034
                               Redwood City, Calif.  94063
                               (415) 487-6482





      ======================================================================
      1.b)  Description and Capabilities:

      Soft-Touch is a powerful tool which allows you to customize your
      keyboard to simplify the use of your various software applications.

      With Soft-Touch you can pre-define any lengthy series of keystrokes,
      such as frequently used parameters, names, or phrases, and play them
      back with just one or two keystrokes. These defined keystrokes can be
      played back at any time within your application to perform your
      customized function.

      You will be able to call up your spread sheet or word processor and
      enter your often used parameters with only a single keystroke.  Which
      enables you to spend less time with the details and get right to the
      work, thus speeding up throughput and therefore productivity.

      Soft-Touch can be used to record all keystrokes entered during an
      application so that they may be replayed at a convienient time for
      demonstration or instructional purposes.  Soft-Touch can even allow
      unattended operation for long running applications that require
      keyboard input, thus creating an invaluable extension to batch file
      processing.

      Soft-Touch contains many powerful features which allow you to take
      full advantage of the programmability of your keyboard.  Some of the
      Soft-Touch features are as follows:

          * ability to define over 90 single or double key operations.

          * playback functions which are able to return the current date and
            time during a keystroke playback.

          * variable length data entry fields which can be entered during a
            keystroke playback and later be recalled in a different portion
            of the playback.  Thus allowing keystroke variables.

          * keystroke definitions may be referenced within other definitions
            up to 5 levels deep for the regular version and 25 levels deep
            for the enhanced version.

          * playback execution may be suspended and resumed at any time.

          * keystrokes may be viewed and executed from a work buffer before
            actually defining them to a single or double keystroke.

          * an invaluable extension to batch file processing which allows
            the keyboard buffer work area to be loaded with a series of
            keystrokes with a Soft-Touch command issued within the batch
            file.  These keystrokes are then available to any application
            run after the buffer is loaded.

          * a screen saver option which can automatically switch off the
            video portion of the display to avoid burning if there is no
            keyboard activity for a pre-defined amount of time.






      ======================================================================
      1.c)  PC system requirements:

      In order to take full advantage of the features of Soft-Touch, you
      will need the following minimum hardware configuration:

         - An IBM PC, XT, or AT, or a 100% IBM compatable with at least 128k
           or more.

         - At least one diskette drive.

         - PC DOS 2.0 or above.


      ======================================================================
      1.d)  Special notation and Conventions:

      A special notation will be used in this manual to identify functions
      and keystrokes for which there is no single character representation.
      Such functions and keystrokes have been given a short name which is
      descriptive of its use and will be included within the brackets '<'
      and '>'.

      An example of such a keystroke would be the HOME key.  To distinguish
      the HOME key from the characters H-O-M-E, it will be included in
      brackets to denote a single keystroke, in this case <HOME>.  The
      control shift, caps shift, and alternate shift modes will be denoted
      by the characters '^', '$', and '@', respectively, preceding the
      descriptive key name.  Therefore control-HOME would be denoted as
      <^HOME>.

      Comments within a string of keystrokes will start with a
      left-bracket-asterisk '<*', and end at the first right bracket '>'.
      The following lists a few example comments.

                    <* this is a comment >
                    <* ---- this is also a comment ---- *>
                    <*>

      A list of the special functions and keystrokes which are described in
      this manner, and other advanced shift modes which are also available,
      may be found in Appendix A.


      ======================================================================
      1.e)  A word about "RAM-cram":

      With the advent of numerous memory resident programs, there has
      arisen a growing problem of conflicts among various memory
      resident software packages.  This syndrome is sometimes known as
      "RAM-cram".

      One possible problem is the requirement by more than one memory
      resident program for the same "hot key" sequence (escape mode
      sequence).  Another is a possible conflict in the use the same
      software or hardware interrupts.

      Soft-Touch tries to help solve these problems with two setable




      options.  First, the "hot key" sequence used to access the special
      Soft-Touch functions may be changed if it is found that the "hot key"
      sequence currently set conflicts with another memory resident program.
      Second, Soft-Touch can be temporarily deactivated to allow running
      programs which may not be compatable with Soft-Touch.

      These added features allow Soft-Touch a much greater flexibility when
      installing it with other memory resident programs.





           +---------------------------------------------------------+
           |                                                         |
           |                        CHAPTER 2                        |
           |                     Using Soft-Touch                    |
           |                                                         |
           +---------------------------------------------------------+


      ======================================================================
      2.a)  Installing Soft-Touch:

      You may find a file on your Soft-Touch diskette called 'README'.
      This file will contain the latest information about the
      Soft-Touch programs and samples that may be included on the
      diskette.

      Since Soft-Touch is stored in your PC's memory, it is necessary to
      load it into memory each time you boot or reload PC DOS.  Therefore,
      it is most likely that you will want to copy the Soft-Touch program
      to any system diskette that you use to boot PC DOS.

      To copy the Soft-Touch programs and sample files to your boot
      diskette, place the Soft-Touch diskette into drive A: and your DOS
      boot diskette into drive B: then enter the following DOS command:

                        COPY A:*.* b:[path]

      This command will copy all necessary programs and files to your
      DOS diskette.  If you wish to install the Soft-Touch software onto
      your hard disk, then specify your hard disk drive and path name for
      the destination.

      You may also wish to have Soft-Touch installed automatically on your
      system when the power is turned on, or when it is re-booted.  To do
      so, use your word processor, or use the DOS supplied EDLIN command, to
      include Soft-Touch in your AUTOEXEC.BAT file.  The following is an
      example that may be inserted into your AUTOEXEC.BAT file to load
      Soft-Touch when your system is booted.

                        SOFTCH /I=3000 /B=15

      This example will cause Soft-Touch to be installed in your PC memory
      with reserved space for 3000 keystrokes.  Also, the screen saver
      option is installed with a time delay of 15 minutes of keyboard
      inactivity before the video portion of the display is blanked.  The
      parameters used by Soft-Touch will be described in the next section.


      ======================================================================
      2.b)  Soft-Touch parameters:

      The command 'SOFTCH' may be used to install the memory resident
      portion of the Soft-Touch keyboard enhancer, or it may be used to
      interface with the previously loaded buffer to define keystrokes or
      change various parameters.

      To install the resident portion of the Soft-Touch extended keyboard




      buffer driver, enter the command 'SOFTCH' with the '/i' install option
      followed by any other desired parameters.

      The format of the command and the allowable parameters are as follows:
      (note: Items listed within the brackets '[' and ']' are optional.)

      Format : [d:][path]SOFTCH [-]
                                [/I=[<size>]]
                                [/B=[<delay>]]
                                [/R=[filename | "string"]]
                                [/S=[filename]]
                                [/E=[<hexnum>]
                                [/H]

      Parms  : Specify the parameters:
                - [d:][path] before the command to specify the drive and
                  path that contains the command file.
                - [-] to supress the printing of the Soft-Touch header
                  message (enhanced version only).
                - [/I=[<size>]] to install the memory resident keyboard
                  buffer and specify the desired keystroke buffer size.  If
                  specified, the '/I' option must appear before all other
                  options.  If the <size> parameter is not specified, the
                  size will be set to the default.  For the regular version
                  of Soft-Touch the maximum buffer size that can be set is
                  3000 keystrokes.
                - [/B=[<delay>]] to install the screen saver option and
                  specify the number of minutes for the screen blank delay.
                  If the <delay> parameter is not specified, the time delay
                  will be set to the default.
                - [/R=filename] to specify the text file containing defined
                  keystrokes to load into the buffer.  For the regular
                  version of Soft-Touch the filename used will be 'MCRO.KEY'
                  regardless of the filename that may actually appear with
                  this option.
                - [/R="string"] to specify the keystrokes on the command
                  line that you wish to load into the buffer.
                - [/S=[filename]] to specify the file to which the defined
                  keystrokes will be written.  The file created by this
                  option may later be reloaded with the '/R' option.  If the
                  filename parameter is not specified, the defined keys will
                  be listed to the screen.  For the regular version of
                  Soft-Touch the filename used will be 'MCRO.KEY' regardless
                  of the filename that may actually appear with this option.
                - [/E=<hexnum>] to change the recognized escape mode key
                  sequence.  The first byte of the hex number represents the
                  keyboard scan code recognized.  The second byte represents
                  the shift status recognized.  The default setting is 0102
                  (escape key, left-shift).  Additional information for this
                  option may be found in the next section.
                - [/H] to display the function key help screen.

                Note:  An error message will display if an error is
                  encountered in the parameter list, or if the buffer has
                  already been loaded.  See Appendix C for a list of the
                  possible error messages.

      Example: SOFTCH /I=3000 /B=15 /R=mcro.key




               This example will set up the extended keyboard buffer with
               space reserved for 3000 keystrokes.  The screen saver option
               is installed with a screen blank time-out of 15 minute.
               Also, the keyboard buffer will be initialized with the
               keystroke definitions found in the file 'MCRO.KEY'.

      Example: SOFTCH /R="this is a keystroke string<cr>"
               This example will restore the keystrokes define on the
               command line to the work buffer.

      Example: SOFTCH /R="<kstr><f1>format a:/s<cr><kend>"
               This example will cause the F1 function key to be defined
               with DOS command to format a diskette.

      Example: SOFTCH /S=mcro.key
               This example will cause all defined keystrokes in the
               enhanced keyboard buffer to be written to the text file named
               'MCRO.KEY'.


      ======================================================================
      2.c)  Escape-Mode functions:

      Once the resident portion of Soft-Touch has been loaded, there are
      several functions that may be performed to affect the execution of the
      Soft-Touch keyboard enhancer.  These special functions may be executed
      after pressing a special escape mode "hot key" sequence.

      To enter the escape mode for execution of the special functions, hold
      down the LEFT SHIFT then press the <ESC> key.  The speaker will
      respond with two short high pitched beeps and the cursor size will
      change to a large block to acknowledge that the keyboard is now in
      escape mode.

      When the keyboard is in escape mode, any playback operation is
      suspended and the function keys are reassigned with special functions
      to be performed as they are pressed.  These functions are described
      below.

      When a valid function key is pressed, the speaker will respond with
      one short high beep and the cursor size will return to normal,
      indicating that the function has been accepted.  The suspended
      keyboard operation will then resume where it left off.  The exception
      is when function key <F3> is pressed; the playback will then be
      cancelled.  If an invalid key is pressed while in escape mode, the
      speaker will respond with one low beep and the cursor size will remain
      a large block, indicating that the function was invalid.  The keyboard
      will remain in escape mode until a valid function key is pressed.

      The following is a list of the special functions used to aid in
      customizing your keyboard.  These functions may be performed in
      escape-mode, or you may define their function to another key of your
      choice.

      Function names marked with a '**' may only be used in keystroke text
      definitions with the enhanced version of Soft-Touch.  These functions
      may still be selected manually with the escape mode "hot key"
      sequence.





         esc-mod
         ftn key  name    description
         -------+--------+-------------------------------------------------
         <F1>     <ON>    Turn the defined keystroke recognition on.
                          Defined keystroke definition is turned on when
                          Soft-Touch is initially loaded.

         <F2>     <OFF>   Turn the defined keystroke recognition off.  This
                          can be used to disable the defined key recognition
                          so that all keystrokes (such as functions keys)
                          will perform their original function as defined by
                          the application you are currently running.

         <F3>     <STOP>  Terminate playback and recording modes.

         <F4>     <FLSH>  Clear all characters from the work buffer.  This
                          function will be used when you wish to clear the
                          work buffer to start recording new characters.

         <F5>  ** <RCRD>  Turn on the recording mode.  This will cause the
                          recording mode to be set so that any keystrokes
                          entered from the keyboard will be recorded to the
                          work buffer.

         <F6>  ** <PLAY>  Playback work buffer.  This will cause the
                          keystrokes entered into the work buffer to be
                          played back.

         <F7>     <KBKS>  Backspace the work buffer.  This will cause the
                          last keystroke entered into the work buffer to be
                          removed.

         <F8>     <KCLR>  This function will clear all defined keys from the
                          keyboard buffer and will also flush all characters
                          from the work buffer.

         <F9>     <KSTR>  Start keystroke definition.  Use this function
                          to start a keystroke definition.  When this
                          function is selected, the work buffer is cleared,
                          and the next key pressed will be the key to which
                          the recorded keystrokes will be assigned.  If an
                          invalid key is selected to define, then the
                          speaker will respond with one low beep to indicate
                          that the key to define was rejected and the
                          function will be cancelled.  You may then select
                          the function again and try a valid key.  A list of
                          definable keys may be found in a later section.

         <F10>    <KEND>  End keystroke definition.  If the <KSTR> function
                          has been selected prior to this function, then the
                          keystrokes entered between the start and end
                          functions will be assigned to the keystroke
                          selected after the <KSTR> function.  If the <KSTR>
                          function was not selected, then the keystrokes
                          found in the work buffer will be assigned to the
                          next valid key pressed.  If an invalid key is
                          selected to define, then the speaker will respond




                          with one low beep and the function will be
                          cancelled.

      Note: The above function names (ie. <FLSH>) are executed immediately
      when they are recognized in an input string as it is loaded (with the
      '/R' option) and will not be part of the functions assigned to a
      particular keystroke.  If you wish to include the above functions as
      part of the assigned keystrokes, then select the desired function with
      the alternate shift pressed (ie. <@PLAY>).  This will cause the
      function to be executed only at playback time and not at load time.


         <$F1>    <VFLD>  Variable length data entry field.  When a playback
                          encounters this function, the playback pauses
                          waiting for keyboard input.  The keyboard input is
                          terminated by a carriage return.  The terminating
                          carriage return is "invisible" and will not be
                          sent to your application program. The playback
                          will then continue where it left off.  The
                          keystrokes entered during the variable field data
                          entry may be recalled later in a playback with the
                          <VAR> function.

         <$F#>    <VFL#>  The function keys <$F1>, <$F3>, and <$F5>
                          correspond with the variable data entry fields
                          <VFL1>, <VFL2>, and <VFL3>, respectively. <VFL1>
                          is the same as <VFLD>.  See the <VFLD> function
                          for the definition of use.

         <$F2>    <VAR>   This function plays back the keystrokes entered
                          during the previous <VFLD> data entry.

         <$F#>    <VAR#>  The function keys <$F2>, <$F4>, and <$F6>,
                          correspond with the variable playback fields
                          <VAR1>, <VAR2>, and <VAR3>, respectively. <VAR1>
                          is the same as <VAR>. See the <VAR> function for
                          the defintion of use.

         <$F7> ** <WAIT>  This function will cause the playback operation to
                          be suspended until any key is pressed on the
                          keyboard.  This function is very usefull for
                          suspending the playback operations during a
                          self-running demonstration to allow for viewing
                          the current screen until a key is pressed.

         <$F8>    <PAUS>  This function causes the playback to pause for
                          approximately 2 seconds before continuing with the
                          playback string.  This may be used for replaying
                          demonstration application to allow for screen
                          viewing at strategic points.

         <$F10>   <BOOT>  This function will cause the system to reboot as
                          if the ctl-alt-del key sequence had been pressed.
                          This will allow for creating an additional
                          definition of the system reset to another key, or
                          to be included in application programs that may
                          require that the system be rebooted.





         <^F1>    <TIME>  Set the internal data areas to the current system
                          date and time.  No playback string is returned
                          with this function.

         <^F2>    <YEAR>  This function returns the long year (ie. 1986)
                          last set by the <TIME> function.

         <^F3>    <YR>    This function returns the short year (ie. 86) last
                          set by the <TIME> function.

         <^F4>    <MO>    This function returns the month of the year last
                          set by the <TIME> function.

         <^F5>    <DA>    This function returns the day of the month last
                          set by the <TIME> function.

         <^F6>    <HR>    This function returns the time hour, bases on a 24
                          hour clock, last set by the <TIME> function.

         <^F7>    <MN>    This function returns the time minutes last set by
                          the <TIME> function.

         <^F8>    <SC>    This function returns the time seconds last set by
                          the <TIME> function.

         <^F9>    <LOOP>  This function causes the key in which it is
                          defined to be re-executed creating a continuous
                          loop of keystrokes.  The escape mode function key
                          <F3> must be used in this case to terminate the
                          playback.

         <^F10>   <BEEP>  This function causes the speaker to issue a short
                          beep.  This can be used to identify certain
                          sections of a playback with strategically placed
                          beeps.

      Note: The above functions may be selected from the keyboard during
      escape mode but they will not be executed until they are encountered
      during a playback.  They will, however, be recorded to the work buffer
      if record mode is active.

      The following functions can not be executed through the function key
      pad in escape mode.  They can only be executed by including them in a
      text file or on a command line with the '/R' option.

          ----    <DACT>  This function will temporarily deactivate the
                          Soft-Touch keyboard enhancer.  The escape mode
                          keys and any defined special keys will not be
                          recognized while the keyboard enhancer is
                          deactivated.

          ----    <ACTV>  This function will re-activate the Soft-Touch
                          keyboard enhancer so that the escape mode keys and
                          the defined special keys will be recognized when
                          pressed.

      ---------





      The left-shift-escape "hot key" sequence can be changed with the '/E'
      option on the command line.  To set the new "hot key" sequence specify
      the scan code and shift status in hex.

      The first byte of the hex code (first two numbers) represents the
      keyboard scan code of the key to be recognized in the "hot key"
      sequence.  See Appendix B for a list of the keyboard keys and their
      corresponding scan codes.

      The second byte (last two numbers) represents the shift status to be
      recognized in the "hot key" sequence.  The following table shows the
      shift status available.  It is recommended that only one of the
      following shift status codes be used at any one time, rather than
      combining two or more of them.

                      01h = right shift
                      02h = left shift
                      04h = control shift
                      08h = alternate shift

      The default escape key sequence is 0102 hex (01=esc, 02=left shift).
      The following command will show how to change the escape mode key
      sequence to right-shift-escape.

                      SOFTCH /E=0101


      ======================================================================
      2.d)  Defining keystrokes from the keyboard:

      There are over 90 different keystroke sequences on the keyboard to
      which you may assign keystroke strings.  A list of keys which can be
      used for assigning keystroke may be found in Appendix A.  The
      definable keystrokes are marked with an asterisk (*).

      A series of keystrokes may be recorded and assigned to a single or
      double keystrokes using the escape mode functions.  There are two
      methods with which to accomplish this:

         Method #1:
          Step 1) Press the escape mode "hot key" sequence; the speaker will
           respond with two high pitched beeps.  Then select the <KSTR>
           function <F9> (start keystroke definition); the speaker will
           respond with one high pitched beep.
          Step 2) Select the key to which you wish to assign your
           keystrokes. If you press an invalid keystroke, the speaker will
           respond with one low pitched beep and the <KSTR> function will be
           cancelled.  You will then need to restart at step 1.
          Step 3) At this point all keys entered on the keyboard will be
           recorded to the work buffer.
          Step 4) When you have finished entering your desired keystrokes,
           press the escape mode "hot key" sequence; the speaker will
           respond with two high pitched beeps.  Then select the <KEND>
           function <F10> (end keystroke definition); the speaker will
           respond with one high pitched beep.
          The keystrokes recorded in step 3 have now been assigned to the
           key selected in step 2.





         Method #2:
          Step 1) Press the escape mode "hot key" sequence; the speaker will
           respond with two high pitched beeps.  Then select the <RCRD>
           function <F5> (record mode); the speaker will respond with one
           high pitched beep.
          Step 2) At this point all keys entered on the keyboard will be
           recorded to the work buffer.
          Step 3) When you have finished entering your desired keystrokes,
           press the escape mode "hot key" sequence; the speaker will
           respond with two high pitched beeps.  Then press the <KSTR>
           function <F10> (end keystroke definition); the speaker will
           respond with one high pitched beep.
          Step 4) Select the key to which you wish to assign your
           keystrokes.  If you press an invalid keystroke, the speaker will
           respond with one low pitched beep and the <KEND> function will be
           cancelled.  You will then need to restart at step 3.
          The keystrokes recorded in step 2 have now been assigned to the
           key selected in step 4.

      With the second method steps 3 and 4 may be delayed.  If you wish to
      view the keystrokes entered in the work buffer before actually
      assigning them to a key you may do so.  You can turn off the keystroke
      record mode by selecting the escape mode <STOP> function <F3>, then
      view the contents of the work buffer with the '/S' option on the
      command line.  The record mode may then be turned back on with the
      escape mode <RCRD> function <F5> (as in step 1), or you may continue
      with step 3.

      Example: To assign the keystroke string "hello" to the alternate-H
      (<@H>) key you could perform the following using method #1 as
      described above:
         1) Press the escape mode "hot key" sequence followed by the <KSTR>
            start key definition function <F9>.
         2) Press and hold the alternate shift key then press the 'H' key.
         3) Enter the keystroke string "hello".
         4) Terminate the keystroke definition by pressing the escape mode
            "hot key" sequence followed by the <KEND> end key definition
            function <F10>.
      The sentence "hello" may now be played back by pressing the
      alternate-H keystroke.

      Once a keystroke has been defined, it may be played back at any time
      by pressing the defined key.  You may cancel a keystroke definition by
      redefining the key with another keystroke string or with no keystroke
      string (start the keystroke definition, then end it without entering
      any other keystrokes).  Assigning a null definition to a previously
      defined key will reset the keys function to that defined by the
      application program.

      The buffer space used by key definitions which have been cancelled
      will remain unused until the buffer is cleared with the <KCLR>
      command, or until the system is rebooted.  You may use the SOFTCH
      command to reorganize unused space created from cancelling key
      assignments.  To reorganize the buffer, enter the following command:

              SOFTCH /S=temp.$$$ /R="<KCLR>" /R=temp.$$$

      The parameters '/S=temp.$$$' will cause the entire buffer to be saved




      to the temporary file 'temp.$$$'.  The parameter '/R="<KCLR>"' will
      cause the entire buffer to be cleared and reset.  Finally, the
      parameter '/R=temp.$$$' will restore the previously saved keyboard
      buffer.  This reorganization will cause all previously unused space
      from key assignment cancellation to be reused.

      Note that for the regular version of Soft-Touch the file name used on
      the save and restore options is 'MCRO.KEY' regardless of the file name
      that may actually appear with the option.


      ======================================================================
      2.e)  Saving defined keystrokes to a text file:

      Keystrokes which have been assigned to various keys may be written to
      a text file or displayed on the screen for viewing with the '/S'
      parameter.  This example will save all defined keystrokes into the
      file 'CUSTOM.KEY':

                      SOFTCH /S=CUSTOM.KEY

      Note that for the regular version of Soft-Touch the file name used on
      the save option is 'MCRO.KEY', regardless of the file name that may
      actually appear with the option.

      The saved file may be edited in any convenient word processor to add
      or delete defined keystrokes.  The text file may later be restored to
      the buffer with the '/R' (restore) parameter.

      If no file name is entered after the '/S' option then the defined
      keystrokes will be listed to the screen.

      The format of the defined keystrokes when written to a text file, or
      printed on the screen, is as follows:

                    <* ----- key definition ----- *>
                    <KSTR><defined-key>
                    .
                    .
                    keystroke string
                    .
                    ...
                    <KEND>
                    <* ----- key definition ----- *>
                    .
                    .
                    ...
                    <* ----- work area ---------- *>
                    .
                    .
                    ...

      For example, a macro that defines the alternate-E to the delete file
      command and the alternate-F key to the format command followed by a
      check disk command might be as follows:

                    <* ----- key definition ----- *>
                    <KSTR><@E>




                    del  <*>
                    <KEND>
                    <* ----- key definition ----- *>
                    <KSTR><@F>
                    format b:/s<cr>
                    chkdsk b:<cr>
                    <KEND>
                    <* ----- work area ---------- *>

      The keyword <KSTR> and its defined key will appear on a separate line
      preceding the string of keystrokes it is to represent.  The keyword
      <KEND> will appear on a line by itself to terminate the definition of
      the keystroke string.

      As the keystrokes are written to the text file, a new text line is
      generated when the keystroke '<cr>' is encountered, or if the
      keystroke line would be greater than 72 characters.  This is why the
      definition for the alternate-F is as shown in the example rather than
      in the form below:

                    <KSTR><@F>format b:/s<cr>chkdsk b:<cr><KEND>

      This format is functionally equivalent to the format generated by the
      '/S' option, but is less readable.  If this format is entered with the
      '/R' option, it will be converted to the standard format described
      above when it is read with the '/S' option.

      All characters found in the text file that are less than a space
      (decimal 32) are ignored by the '/R' option.  This will allow for a
      few control codes that are required by some word processors without
      effecting the data sent to the Soft-Touch keyboard buffer.  This
      includes the carriage return and line feed characters.  Any characters
      equal to, or greater than, a space will be included in the buffer.  If
      your defined keystroke string requires a character that is less than a
      space, then use the special notation which defines the desired
      character (ie. use <cr> for carriage return).  See Appendix A.

      If there are any significant trailing spaces at the end of a line, as
      in the example above for the defined key alternate-E, the line will be
      terminated with the comment '<*>' after the last significant space.
      This will let you know where the line actually ends and will not
      effect the processing of the keystrokes.

      Any characters in the work buffer will appear below the comment line
      heading '<* - work area - *>'.  If there are no keystrokes in the work
      buffer, then nothing will appear below this line.

      To distinguish a literal left-bracket (<) from the beginning of a
      keystroke name or function, a literal left-bracket will appear as two
      left brackets together.  For example, if you have recorded the
      sequence ".. < .. > .." while defining a key, then this line will
      appear as ".. << .. > .." in the saved text file.  Note that this
      is true for the left bracket only, not for the right bracket.


      ======================================================================
      2.f)  Restoring keystrokes to the keyboard buffer:





      Keystrokes which have been written to a text file with the '/S'
      option, or that have been defined in a text file with a word
      processor, may be loaded into the keyboard buffer with the '/R'
      option.  This example will restore keystrokes define in the text file
      'CUSTOM.KEY' to the keyboard buffer:

                   SOFTCH /R=CUSTOM.KEY

      Note that with the regular version of Soft-Touch the file name used on
      the restore option is 'MCRO.KEY', regardless of the file name that may
      actually appear with the option.

      Keystrokes may also be loaded into the keyboard buffer by specifying
      them right on the command parameter line just as they would be in a
      text file.  The format for loading keystrokes from the command line is
      as follows:

                   SOFTCH /R=".. keystroke string .."

      On the command line, to specify one literal quote, you must specify
      two quotes together.  This example defines the alt-E key with the
      keystrokes which will execute the DOS 'echo' command with the quoted
      message "hello":

                   SOFTCH /R="<kstr><@E>echo ""hello""<cr><kend>"

      The work buffer may also be loaded with a string of keystrokes.  The
      keystrokes in the work buffer may be played back by pressing the
      escape mode "hot key" sequence followed by the <PLAY> function <F6>.
      This example loads the work buffer with a date and time phrase which
      may be used in some application:

                   SOFTCH /R="date <yr>/<mo>/<da><tab>"


      ======================================================================
      2.g)  Using variable fields:

      Soft-Touch will allow keyboard entry during a playback which may be
      re-played at a later time.  For example, if we wish to create a macro
      which exchanges the names of two files, we could define the
      alternate-X key as follows:

                    <KSTR><@X>
                    rename <VFL1> temp.$$$<cr>
                    rename <VFL2> <VAR1><cr>
                    rename temp.$$$ <VAR2><cr>
                    <KEND>

      When the <VFL1> is encountered, the playback will pause waiting for
      keyboard input, allowing you to enter the first file name. When you
      have finished entering the first file name, you may terminate the
      keyboard data entry with a carriage return.  This carriage return will
      be interpreted by Soft-Touch only and will not be recognized by the
      executing program (in this case DOS).

      The file is then renamed to 'TEMP.$$$' and the next rename command
      will be initiated.  The playback will again pause at the <VFL2>




      function waiting for keyboard input.  When the second file name
      entered is terminated with a carriage return, the playback will
      continue to the <VAR1> function.  This function will be replaced with
      the file name entered in <VFL1>, causing the second file name to be
      renamed to the first.  The temporary file will then be renamed to the
      file name entered as the second file in <VFL2>.


      ======================================================================
      2.h)  Date and Time functions:

      At some time it may be necessary to include in your keystroke playback
      the current date and time.  This may be most useful for unattended
      operations that require a date and/or time.

      Soft-Touch has several functions that support the return of the
      current date and time:

          <TIME>      : set internal data areas to system date and time.
          <YEAR>/<YR> : return the long/short year last set by the <TIME>
                        function.
          <MO>        : return the month number of the year last set by the
                        <TIME> function.
          <DA>        : return the day of the month last set by the <TIME>
                        function.
          <HR>        : return the hour based on a 24 hour clock last set by
                        the <TIME> function.
          <MN>        : return the number of minutes past the hour last set
                        by the <TIME> function.
          <SC>        : return the number of seconds past the minute last
                        set by the <TIME> function.

      The function <TIME> does not return any keystrokes, it only serves to
      set the date and time in an internal data area with the current system
      date and time when it was executed.  This internal data area is then
      accessed by the various date and time return functions.  This would
      allow, for instance, saving the time at the beginning of one program
      to be used as input to another program run at a later time.

      For example, we could create a formatted date and time that could be
      played back in your word processor to be included with your text.
      This kind of definition could look like the following:

                    <KSTR><@T>
                    <TIME>date <MO>/<DA>/<YR>, time <HR>:<MN>:<SC>
                    <KEND>

      The <TIME> function is used here in the definition to make sure that
      the returned date and time is always current.  If the current date and
      time is January 17, 1986, 8:32am and 27 seconds, then the returned
      keystroke string would appear as follows:

                    date 01/17/86, time 08:32:27


      ======================================================================
      2.i)  Nesting keystroke definitions:





      Soft-Touch will allow you to specify previously defined keystrokes
      within other definitions.  For example, let's look at the following
      keystroke definitions:

                    <KSTR><@D>
                    lazy dog
                    <KEND>

                    <KSTR><@F>
                    quick brown fox
                    <KEND>

                    <KSTR><@S>
                    The <@F> jumped over the <@D>.
                    <KEND>

      The phrase 'lazy dog' has been assigned to the alt-D key, while 'quick
      brown fox' has been assigned to the alt-F key.  Notice that the
      definition for the alt-S key references the alt-D and alt-F keys.  In
      this example, the keystroke definitions are nested so that when alt-S
      is pressed, the following sentence will be played back:

               The quick brown fox jump over the lazy dog.

      This shows how defined keys can be specified within other definitions.
      The regular version will allow keystroke playback nesting like this up
      to 5 levels deep, while the enhanced version allows nesting up to 25
      levels deep.  Much deeper than you will probably ever need.  If the
      limit is ever reached, the speaker will sound to indicate a nesting
      overflow and the last keystroke that caused the overflow will be
      skipped.





           +---------------------------------------------------------+
           |                                                         |
           |                        CHAPTER 3                        |
           |                     Advanced Topics                     |
           |                                                         |
           +---------------------------------------------------------+


      ======================================================================
      3.a)  Enhancing DOS batch file processing:

      The Soft-Touch keyboard enhancer provides an invaluable tool for
      enhancing the operation of the DOS batch file processor.  Now, not
      only can programs be entered into a batch file, but now the keystrokes
      that are required by the program as well.

      For instance, if you have a word processor, spread sheet, or database
      system that requires a set of keyboard entered parameters, then the
      keyboard buffer can be loaded with the keystroked before the program
      is run so that they may be ready when asked for by the program.

      Example:

      Suppose we have a program called 'TRANS' that has a simple menu
      structure as follows:

                    L = load transactioin file
                    C = calculate transaction
                    P = print transaction
                    X = exit from program

               Enter selection: _

      We wish to load a transaction file, calculate any needed information,
      then print the results.  When the 'L' option is selected, a file name
      will be requested so we will need acocunt for this.

      Given the circumstances of this example, it will be more advantagious
      to playback the keystrokes from the work buffer rather than defining
      the key strokes to another key.  We could either use a separate file
      to define the keystrokes, or we can define the keystrokes right within
      the batch file.

      If we wish to define the keystrokes in a separate file, the keystroke
      file and batch file would appear as follows:

      Keystroke file TRANS.KEY:
                  <flsh>         <* make sure work buffer is empty *>
                  L              <* select load option *>
                  RCPT.TRN<cr>   <* enter file name *>
                  C              <* calculate transactions *>
                  P              <* print transactioin *>
                  X              <* exit program *>
                  <play>         <* set playback (enhanced version only) *>

      Batch file TRANSACT.BAT:
                  .                     <* other batch commands *>




                  .
                  SOFTCH /R=TRANS.KEY   <* load keyboard buffer *>
                  TRANS                 <* execute application *>
                  .
                  .

      When the batch file is executed, the keyboard buffer is loaded with
      the necessary keystrokes.  In the regular version of Soft-Touch, the
      playback mode will have to be turned on manually by pressing the
      escape mode "hot key" sequence followed by the <PLAY> function <F6>.
      In the enhanced version the function "<PLAY>" may be included in the
      keystroke definition text.  The playback mode is then set on when the
      <PLAY> function is encountered.  The keystrokes will then be passed to
      the program as they are requested.

      If we wished to define the keystrokes in the batch file and not in a
      separate text file, the batch file would appear as follows:

      Batch file TRANSACT.BAT:
                  .         <* other batch commands *>
                  .
                  SOFTCH /R="<flsh>LRCPT.TRN<cr>CPX<play>"
                  TRANS
                  .
                  .

      Again, the <PLAY> function is only valid when included with the
      keystroke definition text with the enhanced version of Soft-Touch.

      If we wish to use the batch file parameter capabilities we could then
      design the batch file so that the file name could be entered as a
      parameter on the TRANSACT batch file.  The batch file would then
      appear as follows:

      Batch file TRANSACT.BAT:
                  .         <* other batch commands *>
                  .
                  SOFTCH /R="<flsh>L%1<cr>CPX<play>"
                  TRANS
                  .
                  .

      The symbol '%1' will be replaced by DOS with the first parameter
      entered on the batch file, in this case, the file name.  So the
      transaction file may be loaded, calculated, and printed using the
      following command:

                    TRANSACT RCPT.TRN

      ======================================================================
      3.b)  Creating demonstration or instructional self running
            programs:

      Another invaluable feature of the Soft-Touch keyboard enhancer is the
      ability to use it for running programs for demonstration or
      instructional purposes.  The keyboard buffer can be loaded with all
      the necessary keystrokes for carrying out a full demonstration of an
      application.





      Just before calling up your application for which you wish to create
      your demonstration run, initiate a keystroke definition as outlined in
      the section to define keystrokes from the keyboard (section 2.d).  At
      this time the keyboard buffer should be in record mode and will record
      any keys pressed at this time.  Run your application at this time and
      issue any functions you wish to appear in your demonstration.  When
      you have finished entering all your desired functions within your
      application, you may terminate the keystroke definition with the
      appropriate escape mode function key.  The entire application may then
      be re-run by pressing the defined keystroke.

      Note: If desired, the sequence of keystrokes may be recorded to and
      executed from the work buffer without actually having to define them
      to a single or double keystroke.  The work buffer may be played back
      by selecting the escape mode <PLAY> function <F6>.

      The keystroke buffer should then be saved to a text file for editing
      and later restoring.  To save the keystroke buffer to a text file,
      follow the instructions outlined the the section for saving defined
      keystrokes (section 2.e).

      Various Soft-Touch functions are available to enhance your
      demonstration run so that everything doesn't fly by too fast when it
      is re-run.  Three function which which may be especially useful are
      <WAIT>, <PAUS>, and <BEEP>.  These functions can be included during
      record mode by selecting the appropriate escape mode function, or they
      may be inserted in the saved keystroke text file with a convenient
      word processor.  Note that the function "<WAIT>" is only available
      with the enhanced version of Soft-Touch.

      The <PAUS> function will cause the keystroke playback to pause for
      about 2 seconds before continuing with the playback.  This function
      can be inserted at stratigic points to allow for viewing the screen
      for a short time.  If a longer delay than 2 seconds is necessary, then
      several <PAUS> functions may be used end to end. For example,
      "<PAUS><PAUS>" will cause a pause of about 4 seconds.

      The <WAIT> function will cause the keystroke playback to be suspended
      and will wait until any key is pressed on the keyboard before
      continuing.  This function can be inserted at strategic points to
      allow for viewing the current screen until a key is pressed on the
      keyboard.  This function is only available with the enhanced version
      of Soft-Touch.

      The <BEEP> function will cause the speaker to respond with one short
      beep.  This can be used to identify certain points of a playback, such
      as just before a <WAIT> function.

      Once the keystrokes which run your application have been saved to a
      text file and edited, you need only restore the file to the keyboard
      buffer and set the play mode to execute the entire application.

      To automatically set the play mode when the buffer is loaded, you must
      send the <PLAY> function to the keyboard buffer.  The <PLAY> function
      will cause all keystrokes in the work buffer to be played back.  With
      the regular version of Soft-Touch this playback mode will need to be
      set manually by pressing the escape mode "hot key" sequence followed




      by the <PLAY> playback function <F6>.  If you have defined all your
      application keystrokes to be within the work buffer, then nothing more
      need be done.  Otherwise, you must set the work buffer to include the
      keystroke to which you have defined the application keystrokes.

      For example, if you have assigned all of your application keystrokes
      to the key <@D> in the text file 'DEMO.KEY' ('MCRO.KEY' for the
      regular version), and your application program name is 'APPLIC', then
      one possible way to execute the application might be as follows:

                  Contents of 'DEMO.KEY':
                      <KSTR><@D>
                       .
                       .
                       (application keystrokes)
                       .
                       .
                      <KEND>

                  Batch file to execute the application:
                       .
                       .
                      SOFTCH /R=demo.key /R="<FLSH><@D><PLAY>"
                      APPLIC
                       .
                       .

      In the batch file the first '/R' parameter causes the keyboard buffer
      to be loaded with the application keystrokes found in the file
      'DEMO.KEY' ('MCRO.KEY' for the regular version). The second '/R'
      parameter causes the work buffer to be cleared, after which the key
      '<@D>' is put into the work buffer.

      With the enhanced version playback mode is then set on so that the
      keystrokes will be sent to the application when requested.  Since the
      function "<PLAY>" is not implemented for the regular version of
      Soft-Touch, the playback mode will have to be set manually by pressing
      the escape mode "hot key" sequence followed by the <PLAY> playback
      function <F6>.


      ======================================================================
      3.c)  Program interface:

      This sections contains the user interface routine parameters for the
      Soft-Touch keyboard enhancer functions.  To use the routines defined
      in this section, place the desired value into the register AH and the
      required values in the specified registers then issue a call to
      software interrupt 016h (INT 016h).

      Note:  The 'keyboard mode' used in 0A3h, 0A5h, and 0A6h, will affect
      the pointers in the Soft-Touch keyboard buffer used by application
      programs to get keystrokes from the keyboard.  The 'maintenance mode'
      will not affect these pointers and is therefore suggested for use when
      you wish only to interrogate the keyboard buffer without actually
      returning the keystrokes in the buffer to your applications.

      Program functions available:





         (ah) = A0h Set carry flag and return status.
                    (ds:si) = pointer to 10 word status array
                       values returned:
                       elem: 0 = -1 (indicate Soft-Touch loaded)
                             1 = work space size (keystrokes)
                             2 = keystrokes in buffer
                             3 = execute mode status (on/off)
                             4 = capture mode status (on/off)
                             5 to 9 reserved

         (ah) = A1h Flush work area buffer.

         (ah) = A2h Convert scan code to string.
                    (bx) = scan code to convert
                    (cl) = string termination character
                    (ds:si) = pointer to data area for converted string
                           the returned string may be up to 8 byte long
                           including the termination character.

         (ah) = A3h Set keystroke pointer to defined key and turn on
                    playback mode.
                    (bx) = scan code of defined key.
                           (if bx=FF00h, set to work buffer)
                    (cx) = 0 for keyboard mode, (enhanced version only)
                           1 for maintenance mode

         (ah) = A4h Put character string in buffer.
                    (ds:si) = address of string terminated with a null.

         (ah) = A5h Get scan code from active Soft-Touch keyboard
                    buffer and advance keystroke pointer.
                    (bx) = returned scan character
                    (cx) = 0 for keyboard mode,
                           1 for maintenance mode

         (ah) = A6h Get scan code from active Soft-Touch keyboard
                    buffer and do not advance the keystroke pointer.
                    (bx) = returned scan character
                    (cx) = 0 for keyboard mode,
                           1 for maintenance mode

         (ah) = AEh Set escape mode "hot key" sequence.
                    (bh) = keyboard scan code for escape mode key
                    (bl) = shift code for escape mode key
                           01h = right shift
                           02h = left shift
                           04h = control shift
                           08h = alternate shift

         (ah) = AFh Set new screen blank delay.
                    (bx) = time delay in minutes

      The returned error codes are as follows:
         (dx) = 0000h successful operation
              = 0001h unknown option
              = 0002h buffer is empty/full
              = 0003h key is invalid / already defined / not defined




              = 0004h buffer not set for proper defined key termination
              = 0005h buffer play/record mode is turned off
              = 0006h cannot execute field during it's definition
              = 0007h nesting/recursion overflow





           +---------------------------------------------------------+
           |                                                         |
           |                       APPENDICES                        |
           |                                                         |
           +---------------------------------------------------------+


      ======================================================================
      A)  Special keystroke names:

      There are keystrokes on the keyboard that do not have any single
      character representation, therefore a special notation is used to
      identify these keys.  The following is a list of keystrokes in their
      special notation form, and a description of the function that the key
      performs:

      An asterisk has been placed by the keystrokes to which you may assign
      a string of keystrokes.  These keystrokes have been defined as keys
      with 'extended scan codes'.

      Unshifted keys:

        * <F1> - <F10>    : unshifted functions
        * <UP>            : up arrow
        * <DOWN>          : down arrow
        * <LEFT>          : left arrow
        * <RGHT>          : right arrow
        * <PGUP>          : page up
        * <PGDN>          : page down
        * <HOME>          : home
        * <END>           : end
        * <INS>           : insert
        * <DEL>           : delete
          <CR>            : carriage return
          <LF>            : line feed
          <TAB>           : tab
          <ESC>           : escape
          <BKSP>          : back space

      Alternate shifted keys:

        * <@F1> - <@F10>  : alternate function
        * <@0> - <@9>     : alternate numbers (top of keyboard)
        * <@->            : alternate '-'
        * <@=>            : alternate '='
        * <@A> - <@Z>     : alternate 'A' through 'Z'

      Caps shifted keys:

        * <$F1> - <$F10>  : shifted functions
          <$TAB>          : shift tab

      Control shifted keys:

        * <^F1> - <^F10>  : control functions
        * <^2>            : control '2'
          <^6>            : control '6'




          <^->            : control '-'
        * <^LEFT>         : control left arrow
        * <^RGHT>         : control right arrow
        * <^PGUP>         : control page up
        * <^PGDN>         : control page down
        * <^HOME>         : control home
        * <^END>          : control end
        * <^PRTS>         : control print screen
          <^CR>           : control carriage return (same as <LF>)
          <^BKSP>         : control back space
          <^[>            : control '['
          <^\>            : control '\'
          <^]>            : control ']'
          <^A> - <^Z>     : control 'A' through 'Z'

      Special escape mode functions:

          The functions applicable only to the enhanced version of
          Soft-Touch are indicated by a '**' beside the function.

          <ON>            : immed: enable defined keys
          <OFF>           : immed: disable defined keys
          <STOP>          : immed: turn off record and play modes
          <FLSH>          : immed: clear work buffer
       ** <RCRD>          : immed: turn on record mode
       ** <PLAY>          : immed: playback work buffer
          <KBKS>          : immed: backspace work buffer
          <KCLR>          : immed: clear all defined keys
          <KSTR>          : immed: start key definition
          <KEND>          : immed: end key definition
          <@ON>           : playback: enable defined keys
          <@OFF>          : playback: disable defined keys
          <@STOP>         : playback: turn off record and play modes
          <@FLSH>         : playback: clear work buffer
          <@RCRD>         : playback: turn on record mode
          <@PLAY>         : playback: playback work buffer
          <@KBKS>         : playback: backspace work buffer
          <@KCLR>         : playback: clear all defined keys
          <@KSTR>         : playback: start key definition
          <@KEND>         : playback: end key definition
          <BOOT>          : re-boot system
          <TIME>          : set current system data and time
          <YEAR>          : return long year
          <YR>            : return short year
          <MO>            : return month number
          <DA>            : return day number
          <HR>            : return hour (24 hour clock)
          <MN>            : return minutes past hour
          <SC>            : return seconds past minute
          <LOOP>          : replay keystrokes
          <BEEP>          : issue a short beep in the speaker
       ** <WAIT>          : wait until a key is pressed
          <PAUS>          : pause for 2 seconds
          <VFLD>          : variable entry field #1
          <VFL1> - <VFL3> : variable entry field #1 - #3
          <VAR>           : variable field return #1
          <VAR1> - <VAR3> : variable field return #1 - #3





      Other special names:

         <*...comment...> : comment line
         <#001> - <#255>  : alternate shift numeric pad codes
         <&hhhh>          : literal scan code (hhhh = hex number)




      ======================================================================
      B)  Keyboard scan codes:

      This is a list of the keyboard scan codes and the codes which are
      returned by a call to software interrupt 016h.  All keystrokes in the
      list below which have a returned code ending with 00h (ie. 3B00h for
      <F1>) may be used for assigning keystroke strings.

      Scan code table:

           keyboard       |  codes returned by int 016h
      scan code |         |        shift status
      dec | hex | key     | norm  | alt   | shft  | ctrl
      ----+-----+---------+-------+-------+-------+-------
        1 | 01h | esc     | 011Bh | ----  | 011Bh | 011Bh
        2 | 02h | 1 !     | 0231h | 7800h | 0221h | ----
        3 | 03h | 2 @     | 0332h | 7900h | 0340h | 0300h
        4 | 04h | 3 #     | 0433h | 7A00h | 0423h | ----
        5 | 05h | 4 $     | 0534h | 7B00h | 0524h | ----
        6 | 06h | 5 %     | 0635h | 7C00h | 0625h | ----
        7 | 07h | 6 ^     | 0736h | 7D00h | 075Eh | 071Eh
        8 | 08h | 7 &     | 0837h | 7E00h | 0826h | ----
        9 | 09h | 8 *     | 0938h | 7F00h | 092Ah | ----
       10 | 0Ah | 9 (     | 0A39h | 8000h | 0A28h | ----
       11 | 0Bh | 0 )     | 0B30h | 8100h | 0B29h | ----
       12 | 0Ch | - _     | 0C2Dh | 8200h | 0C5Fh | 0C1Fh
       13 | 0Dh | = +     | 0D3Dh | 8300h | 0D2Bh | ----
       14 | 0Eh | bksp    | 0E08h | ----  | 0E08h | 0E7Fh
       15 | 0Fh | tab     | 0F09h | ----  | 0F00h | ----
       16 | 10h | Q       | 1071h | 1000h | 1051h | 1011h
       17 | 11h | W       | 1177h | 1100h | 1157h | 1117h
       18 | 12h | E       | 1265h | 1200h | 1245h | 1205h
       19 | 13h | R       | 1372h | 1300h | 1352h | 1312h
       20 | 14h | T       | 1474h | 1400h | 1454h | 1414h
       21 | 15h | Y       | 1579h | 1500h | 1559h | 1519h
       22 | 16h | U       | 1675h | 1600h | 1655h | 1615h
       23 | 17h | I       | 1769h | 1700h | 1749h | 1709h
       24 | 18h | O       | 186Fh | 1800h | 184Fh | 180Fh
       25 | 19h | P       | 1970h | 1900h | 1950h | 1910h
       26 | 1Ah | [ {     | 1A5Bh | ----  | 1A7Bh | 1A1Bh
       27 | 1Bh | ] }     | 1B5Dh | ----  | 1B7Dh | 1B1Dh
       28 | 1Ch | return  | 1C0Dh | ----  | 1C0Dh | 1C0Ah
       29 | 1Dh | ctrl    | ----  | ----  | ----  | ----
       30 | 1Eh | A       | 1E61h | 1E00h | 1E41h | 1E01h
       31 | 1Fh | S       | 1F73h | 1F00h | 1F53h | 1F13h
       32 | 20h | D       | 2064h | 2000h | 2044h | 2004h
       33 | 21h | F       | 2166h | 2100h | 2146h | 2106h
       34 | 22h | G       | 2267h | 2200h | 2247h | 2207h
       35 | 23h | H       | 2368h | 2300h | 2348h | 2308h
       36 | 24h | J       | 246Ah | 2400h | 244Ah | 240Ah
       37 | 25h | K       | 256Bh | 2500h | 254Bh | 250Bh
       38 | 26h | L       | 266Ch | 2600h | 264Ch | 260Ch
       39 | 27h | ; :     | 273Bh | ----  | 273Ah | ----
       40 | 28h | ' "     | 2827h | ----  | 2822h | ----
       41 | 29h | ` ~     | 2960h | ----  | 297Eh | ----




      (continued)

           keyboard       |  codes returned by int 016h
      scan code |         |        shift status
      dec | hex | key     | norm  | alt   | shft  | ctrl
      ----+-----+---------+-------+-------+-------+-------
       42 | 2Ah | L-shft  | ----  | ----  | ----  | ----
       43 | 2Bh | \ |     | 2B5Ch | ----  | 2B7Ch | 2B1Ch
       44 | 2Ch | Z       | 2C7Ah | 2C00h | 2C5Ah | 2C1Ah
       45 | 2Dh | X       | 2D78h | 2D00h | 2D58h | 2D18h
       46 | 2Eh | C       | 2E63h | 2E00h | 2E43h | 2E03h
       47 | 2Fh | V       | 2F76h | 2F00h | 2F56h | 2F16h
       48 | 30h | B       | 3062h | 3000h | 3042h | 3002h
       49 | 31h | N       | 316Eh | 3100h | 314Eh | 310Eh
       50 | 32h | M       | 326Dh | 3200h | 324Dh | 320Dh
       51 | 33h | , <     | 332Ch | ----  | 333Ch | ----
       52 | 34h | . >     | 342Eh | ----  | 343Eh | ----
       53 | 35h | / ?     | 352Fh | ----  | 353Fh | ----
       54 | 36h | R-shft  | ----  | ----  | ----  | ----
       55 | 37h | * prtsc | 372Ah | ----  | ----  | 7200h
       56 | 38h | alt     | ----  | ----  | ----  | ----
       57 | 39h | space   | 3920h | 3920h | 3920h | 3920h
       58 | 3Ah | caps-lk | ----  | ----  | ----  | ----
       59 | 3Bh | f1      | 3B00h | 6800h | 5400h | 5E00h
       60 | 3Ch | f2      | 3C00h | 6900h | 5500h | 5F00h
       61 | 3Dh | f3      | 3D00h | 6A00h | 5600h | 6000h
       62 | 3Eh | f4      | 3E00h | 6B00h | 5700h | 6100h
       63 | 3Fh | f5      | 3F00h | 6C00h | 5800h | 6200h
       64 | 40h | f6      | 4000h | 6D00h | 5900h | 6300h
       65 | 41h | f7      | 4100h | 6E00h | 5A00h | 6400h
       66 | 42h | f8      | 4200h | 6F00h | 5B00h | 6500h
       67 | 43h | f9      | 4300h | 7000h | 5C00h | 6600h
       68 | 44h | f10     | 4400h | 7100h | 5D00h | 6700h
       69 | 45h | num-lk  | ----  | ----  | ----  | ----
       70 | 46h | break   | ----  | ----  | ----  | 0000h
       71 | 47h | home 7  | 4700h |*00##h | 4737h | 7700h
       72 | 48h | up 8    | 4800h |*00##h | 4838h | ----
       73 | 49h | pgup 9  | 4900h |*00##h | 4939h | 8400h
       74 | 4Ah | -       | 4A2Dh | ----  | 4A2Dh | ----
       75 | 4Bh | left 4  | 4B00h |*00##h | 4B34h | 7300h
       76 | 4Ch | 5       | ----  |*00##h | 4C35h | ----
       77 | 4Dh | rght 6  | 4D00h |*00##h | 4D36h | 7400h
       78 | 4Eh | +       | 4E2Bh | ----  | 4E2Bh | ----
       79 | 4Fh | end 1   | 4F00h |*00##h | 4F31h | 7500h
       80 | 50h | dwn 2   | 5000h |*00##h | 5032h | ----
       81 | 51h | pgdn 3  | 5100h |*00##h | 5133h | 7600h
       82 | 52h | ins 0   | 5200h |*00##h | 5230h | ----
       83 | 53h | del .   | 5300h | ----  | 532Eh | ----

       * special ALT code generation
         note: 0000 is not returned by the ALT numeric pad sequence.




      ======================================================================
      C)  Error messages:

      This section lists the possible error messages that may be encountered
      while using the MCROKY command.

      Error: Keyboard buffer has not been loaded
         An option has been requested on the SOFTCH command line that
         requires that the buffer be previously loaded with the install
         option.  This can be corrected by installing the buffer.

      Error: Invalid quoted string
         An invalid quoted string has been entered on the SOFTCH command
         line with the restore option.  Correct the improper quoted string,
         then resubmit the command.

      Error: File does not exist
         The file name entered on the restore option does not exist as
         specified.  Check that the drive and path for the file are
         correctly specified, then resubmit the command.

      Error: Buffer load error (invalid code / buffer full)
         The restore option on the SOFTCH command found an error when
         loading the keyboard buffer with keystrokes.  Either an invalid
         keystroke function name has been specifed, or the keyboard buffer
         is full and can not accept any more keystrokes.

      Error: Unknown parameter code
         An option has been specified on the SOFTCH command line that is not
         valid.  Correct the invalid parameter code, then resubmit the
         command.

      Error: Buffer already loaded
         The buffer install optioni has been specified when the macro key
         keyboard buffer has already been loaded.  The buffer cannot be
         loaded more than once.

      Error: Invalid parameter format (terminating)
         The parameter parser became lost when trying to separate options on
         the SOFTCH command line due to an invalid parameter format
         specified.  The rest of the parameter line is flushed and the
         command terminated.  Correct the invalid parameter format, then
         resubmit the command.

      Error: File open error
         A DOS level error was encountered when trying to open a file for
         the save or restore option.

      Error: File write error (disk full)
         A DOS level error was encountered when writing keystrokes to a file
         during the save option.  This usually means that the disk has
         become full and that no more information can be written. Change
         diskettes or allocate more available space, then resubmit the
         command.

      Error: Parameter number overflow / number invalid
         This means that a number specified on the install or screen blank
         options is too large or is invalid.  Change the specified number,




         then resubmit the command.

      Error: Invalid escape mode "hot key" parameter
         The number specified on the escape mode "hot key" change option is
         invalid.  Correct and resubmit the command.




      ======================================================================
      D)  Program License Agreement:

      YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS BEFORE
      USING THIS PRODUCT.  USING THIS PRODUCT INDICATES YOUR ACCEPTANCE OF
      THESE TERMS AND CONDITIONS.  IF YOU DO NOT AGREE WITH THEM, YOU SHOULD
      PROMPTLY RETURN THE PACKAGE.

      LICENSE

      A limited license is granted to any user of the program to freely copy
      and distribute the product on the following conditions:

      You may:

        -  Use the program on any microcomputer on which this package
           was designed to operate.

        -  Copy the program into any machine readable form for
           backup purposes.

        -  Freely copy and share unmodified copies of the product with
           your friends or associates.


      You may not:

        -  Sell this product for a fee without express written permission.

        -  Grant sublicense, leases, or other rights in the software to
           others.

        -  Modify or remove the Copyright notice from the program,
           diskette or its manual.

        -  Modify the program, diskette or manual and/or merge it into
           another program for any machine.


      Terms and Conditions

      The license is effective until terminated.  You may terminate it at
      any time by destroying the diskette(s) contained in this package.  The
      license and the rights thereof terminate if you fail to comply with
      any term or condition of this agreement.  You agree further, upon
      termination, to destroy the program together with any modifications
      and/or merged portions in any form.




      ======================================================================
      E)  Limited Warranty:

      THE PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
      EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
      WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
      THE ENTIRE RISK AS TO QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
      YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST
      OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. SOME STATES DO NOT
      ALLOW THE EXCLUSION OF IMPLIED WARRANTIES SO THE ABOVE EXCLUSION MAY
      NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND
      YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.

      LIMITATIONS OF REMEDIES

      Martin D. Flynn and his associates liability and your exclusive remedy
      shall be:

         -  The replacement of the diskette(s) if you have met the
            conditions as described under "LIMITED WARRANTY" or

         -  A full refund if Martin D. Flynn is unable to deliver a diskette
            free from defects in materials or workmanship.

      IN NO EVENT WILL MARTIN D. FLYNN OR HIS ASSOCIATES BE LIABLE TO YOU
      FOR ANY DAMAGES INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER
      INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR
      INABILITY TO USE SUCH PROGRAM EVEN IF MARTIN D. FLYNN OR HIS
      ASSOCIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR ANY
      CLAIM BY ANY OTHER PARTY.

      SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR
      INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR
      EXCLUSION MAY NOT APPLY TO YOU.

      GENERAL

      You may not sublicense, assign or transfer the license or the limited
      warranties of the program except as expressly provided in this
      agreement.  Any attempt otherwise to sublicense, assign or transfer
      any of the rights, duties or obligations hereunder is void.  This
      agreement will be governed by the laws of the State of California.

      Should you have any questions concerning this agreement, you may
      contact Martin D. Flynn by writing to:

                      Martin D. Flynn
                      P.O. Box 5034
                      Redwood City, Calif.  94063


      YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT
      AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE
      THAT IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT
      BETWEEN US WHICH SUPERCEDES ANY PROPOSAL OR PRIOR WRITTEN AGREEMENT,
      ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO
      THE SUBJECT MATTER OF THIS AGREEMENT.

```
{% endraw %}

## TUTOR.DOC

{% raw %}
```
F1
(C)Copyright Martin D. Flynn, 1986 - All Rights Reserved

Welcome to Soft-Touch!

This is a mini-tutorial which will lead you through some the the features of
Soft-Touch.  It is assumed that you have already printed and read the
Soft-Touch manual.  To follow this tutorial you need only to press the
specified keys as they are requested.  To restart this tutorial just re-enter
the command TUTOR.

This tutorial is using Soft-Touch macros and is run under DOS with echo off.
The text information for this tutorial is printed to the screen with a command
called 'LIST' which prints out text information from the file 'TUTOR.DOC'.
You will find the macros which run this tutorial in the file 'MCRO.KEY'.  To
cancel this tutorial press alt-F10.  This will turn echo back on and will clear
the Soft-Touch key definitions.

For a directory of the topics covered and their corresponding assigned
function key, press alt-F1.




Press F2 to continue ...
F2
Accessing Soft-Touch functions (entering escape mode):

To allow full freedom to define all possible extended keys without having
to reserve certain keys for Soft-Touch use, a special "hot key" sequence is
used to access the Soft-Touch functions.

To enter the "hot key" escape mode sequence press and hold the left-shift,
then press the escape key.  The speaker will respond with two short high
pitched beeps and the cursor will appear as a large block.  The function
keys are now temporarily assigned with special Soft-Touch functions which
will be performed when pressed.

If the left-shift-escape key sequence is pressed again, then the speaker
will respond with one short high pitched beep, and the cursor will return
to normal indicating that you are no longer in escape mode.

Try it now: ("hot key" sequence)
  - Press the "hot key" sequence once: listen for two high pitched beeps
    and see the cursor change to a large block.
  - Press the "hot key" sequence again: listen for one high pitched beep
    and see the cursor return to normal size.


Make sure you are out of escape mode, then press F3 to continue ...
F3
Accessing Soft-Touch functions (selecting a function):

While in escape mode, pressing a valid function key will cause the speaker to
respond with one short high pitched beep and the cursor size will return to
normal to indicate that the function was accepted.  A list of the valid
function keys and their descriptions may be found in the operations guide.  A
few of the functions will be discussed in this tutorial.

If an invalid function key is pressed, then a low pitched beep will be heard
and the keyboard will remain in escape mode.  To exit the Soft-Touch escape
mode, press a valid function, or press the "hot key" sequence again.

While in escape mode, any active playback operation is suspended.  It may be
resumed by pressing the "hot key" sequence again, or by pressing certain
functions which do not directly affect the playback operation of Soft-Touch.
Pressing F3 (STOP function) will cancel any active playback operation.

Try it now:
  - Press left-shift-escape "hot key" sequence: listen for the speaker
    response and see the cursor change size.
  - Press F6 (work buffer playback): see a message played back from the work
    buffer.

Press F4 to continue ...
F4
Accessing Soft-Touch functions (immediate vs. playback execution):

The playback function F6 executed immediately when selected because it was an
unshifted function key.  All shifted escape mode functions (ie. control-shift,
caps-shift, and alternate-shift) will not be executed immediatly, but will be
executed if they are encountered in a playback.  Selecting a shifted escape
mode function while the keystroke record mode is not on (not defining a macro)
has no effect.  Selecting a shifted escape mode function while in the process
of defining a macro will cause the function to be recorded with the keystrokes
to be executed when the macro is played back.

If you wish to have one of the unshifted functions executed only when
encountered in a playback operation, then select the function with the
alternate shift key pressed.  For instance, if you wish to execute the OFF
function within a playback operation, then select the escape mode function OFF
with the alternate shift key pressed (ie. alt-F2) when defining a macro.

Try it now: (immediate vs. playback execution)
  - Press the "hot key" sequence followed by the immediate playback operation
    function F6: notice that the message was displayed immediatly.
  - Press the "hot key" sequence followed by the playback operation function
    with the alt-shift pressed: notice that the message was not displayed.

Press F5 to see how to define a macro ...
F5
Defining a keystroke macro:

Later you will be shown a short-cut to defining a macro, but first let's try
it using the escape mode functions.  To define a macro, perform the following
steps (this uses method #1 as described in the operations guide):
    1 - Press the escape mode "hot key" sequence left-shift-escape
    2 - Press F9 to start a macro definition
    3 - Press the key you wish to define
    4 - Enter your keystroke to include in the macro
    5 - Press the escape mode "hot key" sequence left-shift-escape
    6 - Press F10 to terminate the keystroke macro definition

You may define a macro at any time, within any program.  If you select an
invalid key to define in step 3, then the speaker will respond with one low
pitched beep and the macro definition sequence is cancelled.  You will then
need to restart at step 1.  A list of the valid definable keys may be found
in the operations guide.

Try it now: (define a macro)
  - Follow the above steps to create a macro using the alt-N key for step 3,
    and your name (no carriage return) for the keystrokes entered in step 4.
  - Test your macro definition by pressing alt-N.

When you are done, press F6 to continue.
F6
Nesting keystroke playback operations:

Since you defined your name to the alt-N key, I was able to playback your
name in the previous statement by referencing the alt-N key in this tutorial.
This is an example of a nested playback operation.  You may nest playback
operations up to 5 levels deep (25 levels for the enhanced version).

With this feature you can define macros which contain a name or phrase which
you use often and play them back within other macros by referencing the
keystroke to which they were defined.

The short-cut to defining macros which was spoken of in the last section is
accomplished by assigning the start and end macro definition functions to a
key of your choice.  Thus eliminating having to select the "hot key" sequence
to execute these functions.  All of the Soft-Touch functions may be assigned
in this manner.  For instance you could define the 'alt =' key with the start-
macro-definition function and the 'alt -' key with the end-macro-definition
function.  This has already been done for you in this tutorial.  For the macro
definition steps described in the previous section, steps 1 and 2 may be
replaced with the 'alt =' key, and steps 5 and 6 may be replaced with the 'alt
-' key.  You may view the file 'MCRO.KEY' to see how these two keys have been
defined.

Press F7 to continue ...
F7
Using Date and Time functions:

A series of functions are available in Soft-Touch to allow returning the
current date and time within a playback operation.  The escape mode functions
shift-F1 through shift-F8 support the date and time capability of Soft-Touch.

A Date and Time function has been set up for you in the Soft-Touch tutorial
macro.  The keystroke alt-T will get the current date and time and display
them in a playback operation.

For more information on the date and time functions see the example in the
Soft-Touch tutorial macro (file 'MCRO.KEY') and see the appropriate section
in the operations guide.

Try it now: (date and time functions)
  - Press alt-T: see the current date and time displayed.
  - You may repeat pressing alt-T to see the time change.






When you have finished, press F8 to continue ...
F8
Using Variable fields:

One very powerful feature of Soft-Touch is the use of playback variables.
Playback operations can be automatically suspended to allow keystrokes to be
entered from the keyboard.  These entered keystrokes can then be replayed at
a different location in the playback.

One example of how this might be used is with the DOS RENAME command.  If you
wish to exchange the names of two files the normal sequence of commands would
be as follows:

              RENAME fileA.xxx TEMP.$$$
              RENAME fileB.zzz fileA.xxx
              RENAME TEMP.$$$  fileB.zzz

Notice that the files 'fileA.xxx' and 'fileB.zzz' have each been entered
twice.  Using Soft-Touch keystroke variables you could create a macro which
would only require entering each file name once.  This file name exchange
macro has already been prepared for you and has been assigned to the alt-X
key.  You may wish to experiment with this macro on some of your test files.
For more information see the appropriate section in the manual and view the
tutorial macro file to see how the alt-X key has been defined.

Press F9 to continue ...
F9
Soft-Touch features:

Some Soft-Touch features include:

    * The ability to define macros for over 90 different keystrokes.

    * The ability to set a screen blanking time delay which will turn off the
      video portion of the monitor to avoid burning the display.

    * The ability to use the current system date and time within playback
      operations.

    * The ability to suspend and resume playback operations at any time.

    * The ability to call up you spread sheet or word processor and enter your
      often-used parameters with only a simple keystroke.

    * The ability to change the escape mode "hot key" sequence to another key
      sequence to avoid conflicting sequences with other memory resident
      programs.

    * And More!

Press F10 to continue ...
F10
Registration information:

This concludes the mini-tutorial.  This version of Soft-Touch is distributed in
the public domain.  You may review this product at your leasure to determine if
you would like to continue using it.  If you find it useful, and you decide to
use it, I encourage you to become a registered user of this product.  You may
receive a registered copy of Soft-Touch for $23 for one copy, or $20 for two or
more.  See the operations guide for more information and the registration form.

Registration provides the following benefits:
  1.  Receive an upgraded version of Soft-Touch including enhancements.
  2.  Limited phone support.
  3.  A $5.00 commission for each new registered user who provides your
      registration number as a reference.

You may request additional public domain copies of Soft-Touch for $7.00 each
which includes shipping and handling.

                             Martin D. Flynn
                                FlynnSoft
                              P.O. Box 5034
                       Redwood City, Calif.  94063

Press alt-F10 to terminate the tutorial ...
HELP
Tutorial directory:

Select one of the following:
   F1  - Introduction
   F2  - Accessing Soft-Touch functions (entering escape mode)
   F3  - Accessing Soft-Touch functions (selecting a function)
   F4  - Accessing Soft-Touch functions (immediate vs. playback execution)
   F5  - Defining a keystroke macro
   F6  - Nesting keystoke playback operations
   F7  - Using date and time functions
   F8  - Using variable fields
   F9  - Soft-Touch features
   F10 - Registration information.

   alt F1  - Tutorial directory (this screen)
   alt F10 - Terminate this tutorial
   alt N   - Your name defined in section F5 above
   alt S   - Playback operation nesting example (see file MCRO.KEY)
   alt T   - Date / Time function example
   alt X   - Variable field example (exchange file names)
   alt =   - Start-macro-definition macro
   alt -   - End-macro-definition macro

To restart this tutorial, enter 'TUTOR' followed by a carriage return.
end

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0500

     Volume in drive A has no label
     Directory of A:\

    FILES500 TXT       840  11-11-86   2:40p
    GO       BAT       586   5-05-86   2:52p
    LIST     COM     14236   3-11-86  10:24p
    MANUAL   BAT       128   3-07-86   1:25a
    MCRO     KEY      2816   3-13-86  12:08a
    NOTES500 TXT      3696  11-11-86   2:41p
    README            1792   8-07-86  10:36p
    SOFTCH   COM     11657   3-13-86  12:15a
    SOFTCH   DOC     85888   8-14-86   9:22a
    TUTOR    BAT       128   3-12-86  12:28a
    TUTOR    DOC     12544   8-13-86   9:44p
           11 file(s)     134311 bytes
                           23040 bytes free
