---
layout: page
title: "PC-SIG Diskette Library (Disk #2909)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2909/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2909"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EXM.DOC

{% raw %}
```

Using the EXM files (loaders)
-----------------------------
 
The EXM files are actually 'loaders' which allow their respective
DOS programs to run without closing all of your applications, making
your HP95 more efficient.  They are started with 'hotkeys' just like
the built-in applications.

There are two groups of EXM files. The ones starting with 'A' are
used if your DOS program resides on A:.  The other ones are for
those on C:.  There is a required directory setup to use these
files, therefore follow the instructions carefully.

The following are the directories that the DOS applications MUST
reside in to use the associated EXM file.

Program        Directory      Loader         Hotkey

{COMMO}        C:\COMMO       COMMO.EXM      CTRL-COMM
{COMMO}        A:\COMMO       ACOMMO.EXM     CTRL-COMM
Screen         C:\            SCREEN.EXM     ALT-S
Screen         A:\            ASCREEN.EXM    ALT-S

After you have placed the program files in their appropriate
directories, include their associated EXM files dropping the 'A'
where applicable.

You will then need to create or modify your APNAME.LST file on each
drive.  This is a standard text file that can be modified by MEMO.
Do not mix applications from different drives in one APNAME.LST
file.  The one on C: needs to be in the \_DAT directory.  The one on
A: needs to be in the root directory, A:\.  There are a total of 8
applications that are allowed at one time.  The ones on C: are
counted first.  The ones on A: are added whenever a Ram Card is
inserted and removed when the card is removed.  If you have more
than one card you can have more applications.

I have included a sample APNAME.LST file which you can use or
modify.  Notice the entries show the path of the EXM file and the
scan-code of the hotkey.  The third entry is the name display if
there is not enough memory to load an application.  Once you have
created the file and put it in the appropriate directory, you can
activate it by rebooting, CTRL-ALT-DEL.


NOTES ON PROGRAMS

{COMMO}: The statement SET COMMO=A:\COMMO (or C:\COMMO) should be in
your AUTOEXEC.BAT file.  There is a bug in SYSMGR with respect to
the operation of the serial port.  After transmitting with {COMMO}
the port won't work with FILER or DATACOMM until you reboot.  If you
use FILER or DATACOMM to communicate, the simplest solution is to
enter {COMMO} when FILER and DATACOMM are closed.  This can easily
be done with a USER key and this macro:

      {FILER}Q{Ctrl-COMM}

Store this under one of your CHAR F# keys and you won't have to
reboot to use FILER or DATACOMM.

SCREEN:  This loader will activate SCREEN.COM which will allow
Alt-Arrow tracking of the screen.  Rename CURSOR.COM to SCREEN.COM
if you want to enable cursor tracking as well.  This capability is
disabled anytime you re-enter SYSMGR from the FILER DOS shell.

CAVEATS:

None of the above loaders will allow another application to be
accessed while it is running unless it can shell to DOS.  You cannot
access a SYSMGR app until you exit the program.

These loaders will not work if LOTUS is open.

The environment size on the 95 is defaulted to 160 bytes. APNAME.LST
will not work if you are close to the limit. Reduce your PATH,
SHELL, or SET statements and retry. Keep your path statements in the
APNAME.LST file in either all upper or all lower case.  If you want
to increase the size of the enviroment use the following statement
in your CONFIG.SYS.

   SHELL=COMMAND /E:#### /P  (#### is the number of bytes)

Do not put a SET statement after your PATH statement in your
AUTOEXEC.BAT file.  If you use SET statements include a PATH
statement after the the last SET statement.


These loaders were created using UTIL which is available from ESSEX
Marketing at 203-651-8284 for $70.  If you would like to create
custom loaders please order the software.  You do not need
programming experience to use this feature.

If you have any problems you can post a message to me on this forum.
My Compuserve ID is 71551,467.

These loaders, SCREEN.COM and CURSOR.COM are donated to the public
domain and cannot be offered for sale.

Mark V. Scardina
2435 14th Ave.
San Francisco, Ca 94116
CompuServe ID: 71551,467
```
{% endraw %}

## INSTAL95.DOC

{% raw %}
```

=================================
Installing {COMMO} on the HP 95LX
=================================

If you do not have the Connectivity Pack, you will need the accessory serial
cable, HP PN 82222A.  Connect your PC to the HP with the cable and follow
these steps:

  ----------
  ON YOUR PC
  ----------

  IMPORTANT:  This procedure assumes that you have read READ95.ME and that you
  have installed the standard version of {COMMO} on your PC.  If you have not
  done so, refer to COMMO.DOC for instructions.

  It also assumes that the {COMMO} "home" directory is "C:\COMMO\".  If this
  is not the case, you will be given an opportunity to change it while the
  install macro is running.

  1) Create a subdirectory below your {COMMO} "home" directory called "HP95".
     The path for this directory would then be "C:\COMMO\HP95\".

  2) Copy the files from the {COMMO} HP 95LX archive, COMMO9.ZIP or
     CMOHPxx.ZIP, to this directory.  "xx" is the {COMMO} version number.

  3) Copy the the files INSTAL95.BAT and INSTAL95.MAC to your {COMMO} "home"
     directory.

  4) Change to the {COMMO} "home" directory and type "instal95" to run the
     installation batch file.

  5) Enter the number of the serial port that is connected to the 95LX, "1"
     for COM1, "2" for COM2, etc.

  6) If the directory shown is correct, just press Enter.  Otherwise edit the
     path and then press Enter.  Be sure there is a "\" at the end.

  7) The first filename will blink at the top of the screen.  This is the
     filename that you should enter on the 95LX.  After each file is
     transferred, a new filename will appear.  Note that some of the names
     have "95" in them on the PC, but are named without the "95" on the 95LX.

  8) When you see the message "Finished!" you should press Alt-X to exit
     {COMMO} on your PC.  If you need to cancel the process at any time, just
     press Esc to stop and leave {COMMO}.

  ------------
  ON YOUR 95LX
  ------------

  1) Open FILER.

  2) Open DATACOMM.

  3) Press MENU, T, X, R.

  4) Enter the 95LX path and the filename that the PC is sending.

  5) The transfer will start.

  6) Continue until all files are copied.

                                - end -

```
{% endraw %}

## ADDENDUM.DOC

{% raw %}
```



                            {COMMO} 5.2 Addendum
                            ____________________

     This Addendum contains the major additions and/or changes to the
     {COMMO} 5.1 documentation.  Print out this file and keep it with
     your printed manual.


     ===============================
     In the User Guide and Reference
     ===============================

     Setup File additions
     --------------------

     ____________________________________________________

     {ncr=}         Macro to execute when carrier is lost
     ____________________________________________________

     Specify a macro label here and {COMMO} will execute the macro
     when carrier detect is lost.  Example:

          {ncr=carrlost}

     IMPORTANT:  This feature is enabled only when a connection is
     made using {COMMO}'s Auto Dialer.  Also, if carrier drops while a
     macro is running or a command window is open (such as the Dialing
     Directory or Capture File Options), the carrier lost macro will
     not activate.

     Be sure that you have your modem configured to provide the
     carrier detect signal.  See Appendix A for modem information.


     ________________________________________________

     {rtr=}    Receive Translate Table initialization
     {str=}    Send Translate Table initialization
     ________________________________________________

          These items are used to place values into the character
          translation tables at program startup and, if desired, to
          turn translation ON.  Multiple receive or send items may be
          present.

          Character translation is used when you wish certain
          characters to be changed into other characters as they are
          received from, or as they are sent to, the remote system. 
          You may also cause received characters to be ignored.

          Examples:

               {rtr=y,7,0,36,156}



                    Turn ON receive translation ("y").

                    Change the bell character (ASCII 7) to null (ASCII
                    0, which will not display).

                    Change the "$" (ASCII 36) to ASCII 156.

               {str=#26,97,65,42,43,#10,48,128}

                    Change 26 consecutive values starting at 97 to
                    consecutive values starting at 65.  This will
                    change all lowercase letters (ASCII 97 to 122) to
                    uppercase letters (ASCII 65 to 90).

                    Change the "*" (ASCII 42) to a "+" (ASCII 43).

                    Change 10 consecutive values starting at 48 to
                    consecutive values starting at 128.  This will
                    change the digits 0 through 9 (ASCII 48 to 57) to
                    ASCII 128 to 137.

                    The ON/OFF state of send translation will not be
                    changed (no "y" or "n" is present).

          A "y", to turn translation ON, must be the first argument,
          if present.  It may be used on any "rtr" or "str" item and
          will apply to all 256 values in either the receive table or
          the send table.  Note that translation defaults to OFF when
          {COMMO} is started.

          Use a PAIR of arguments to change a single value.

          Use THREE arguments to change a range of consecutive values
          to another range of consecutive values.  The "#" operator on
          the first argument specifies the number of values to change,
          followed by the starting values for each range.

          The macro functions RTRAn and STRAn have similar argument
          lists.  In addition they allow you to restore each Translate
          Table to default values and to turn translation ON and OFF
          without disturbing the values in the tables.  See the Macro
          Programming Guide for more details.



     Under "[Alt-P]  Set Terminal Parameters"
     ----------------------------------------

          _______________________

          Terminal Emulation Type
          _______________________

     {COMMO} supports the following terminal types:

          ANSI-BBS  (A)  For calling most bulletin board systems.
          VT102     (V)  For calling certain mainframes and online
                         services.
          TTY       (T)  For turning off almost all control functions
                         (lets you see ANSI control sequences).
          TTY(40)   (H)  HP 95LX version only.  Wraps terminal lines
                         at 40 columns.  Use when the host cannot be
                         configured for 40 columns.



     ==============================
     In the Macro Programming Guide
     ==============================

     New or changed function descriptions
     ------------------------------------

     ______

     CALOok
     ______

     Default key:   none
     Description:   Set up an additional string to look for during a
                    subsequent LOOKfor function.

     General form:

          {CALOok label1,label2,string}

               label1    The return point for the CALL to label2.

               label2    The label to CALL when "string" is received
                         from the serial port.

               string    The ASCII string to look for.  The string
                         begins following the "," and is terminated by
                         the "}".

     When the routine at "label2" executes a RETUrn, control will pass
     to "label1".  This is equivalent to:

          {call label2} {:label1} ...

     See LOOKfor for details, examples and tips on using CALOok.

     See also: GOLOok, SETLook.

     ______

     GOLOok
     ______

     Default key:   none
     Description:   Set up an additional string to look for during a
                    subsequent LOOKfor function.

     General form:

          {GOLOok label,string}

               label     A label to GOTO when "string" is received
                         from the serial port.



               string    The ASCII string to look for.  The string
                         begins following the "," and is terminated by
                         the "}".

     See LOOKfor for details, examples and tips on using GOLOok.

     See also: CALOok, SETLook.

     _______

     LOOKfor
     _______

     Default key:   none
     Description:   Look for strings in the modem input stream.

     LOOKfor may be used in conjunction with CALOok and GOLOok to scan
     for up to 16 strings at the same time.  When CALOok and GOLOok
     set up additional strings to look for, the actual "looking" does
     not take place until the LOOKfor executes.

     Parameters controlling LOOKfor execution are set with the SETLook
     function, which should be executed before any LOOKfor functions. 
     See the description of the SETLook function for details.

     Examples using LOOKfor only:

          {lookfor first name?}    Look for the string "first name?"

          {look ^(COMMO^)}         Look for the string "{COMMO}".

          When the string comes in, control will pass to the next
          function.

     Example construct using CALOok/GOLOok/LOOKfor:

                    {setlook 60,hng,3,n|}
                      ...

          {:m_1234}
                    {golook aaa,string1}
                    {calook m_1234,bbb,string2}
                    {calook m_1234,ccc,string3}
                    {golook ,string4}
                    {lookfor string5} {send answer5|} {goto ddd}

          {:aaa}    {hangup y} {goto cancel}
          {:bbb}    {send answer2|} {return}
          {:ccc}    {send answer3|} {call subr} {return}

          {:ddd}      ...

          In this example {COMMO} will look for five strings.  When
          any string comes in, the LOOKfor is terminated (all strings



          are cancelled).  It may be set up again by going back to
          "m_1234".

          The GOLOok function for string1 will GOTO "aaa" when the
          string comes in.  In the example control will pass to
          "cancel".

          If string2 or string3 come in the CALOok functions will set
          "m_1234" as the return point and then CALL "bbb" or "ccc"
          respectively.  When these routines RETUrn, control returns
          to "m_1234" and the five string LOOKfor will be set up
          again.

          The GOLOok for string4 has a null label and control will
          pass to the function following the LOOKfor if that string
          comes in.  The "," must be present.

          If string5 comes in, control will also pass to the function
          following the LOOKfor.

     TIPS on creating LOOKfor strings:

     >    There should be just one space following the LOOKfor
          function name.  Any spaces beyond this point are part of the
          string.  The string ends at the right curly brace.

     >    CALOok/GOLOok/Auto Receive strings begin immediately after
          the comma.  There should be no spaces unless they are part
          of the string.

     >    Strings may be up to 32 characters in length (control
          characters like "^M" count as one).  Upper/lower case is
          ignored.

     >    ANSI control sequences are filtered if ANSI or VT102
          emulation is enabled.

     >    Remember that short strings may not be unique enough, long
          strings may not match due to line noise.

     >    Rules for representing special characters in
          CALOok/GOLOok/LOOKfor/Auto Receive strings are given in
          Appendix D in the User Guide and Reference.

     Additional TIPS:

     >    CALOok and GOLOok functions should immediately precede a
          LOOKfor (no string compares actually occur until the LOOKfor
          executes).  Up to 15 CALOok/GOLOok strings may be used for a
          total of up to 16 strings to scan for.

     >    FILTER Capture Mode should be used to determine the exact
          prompt to look for.  The LOOKfor sees the incoming data
          exactly as it is captured when FILTER mode is set.



     >    If two or more strings cause a match at the same time, the
          LAST such string listed is the one acted upon.  For example,
          if "abcdef" and "def" are listed and "abcdef" comes in.

     >    Since the LOOKfor is terminated whenever any of the strings
          come in (or when the LOOKfor timeout expires), this
          structure is unrestricted -- that is, CALLs, GOTOs, other
          CALOok/GOLOok/LOOKfor constructs, etc., may be used freely
          in any of the branches.

     See also: CALOok, GOLOok, SETLook.

     _________

     NOCArrier
     _________

     Default key:   none
     Description:   Sets/resets a macro to execute when carrier detect
                    is lost.

     Examples:

          {nocar carrlost}         GOTO the label "carrlost" when the
                                   carrier detect signal drops.

          {nocar}                  Turn off the carrier lost label.

     IMPORTANT:  This feature is enabled only when a connection is
     made using {COMMO}'s Auto Dialer.  Also, if carrier drops while a
     macro is running or a command window is open (such as the Dialing
     Directory or Capture File Options), the carrier lost macro will
     not activate.

     Be sure that you have your modem configured to provide the
     carrier detect signal.  See Appendix A in the User Guide and
     Reference for modem information.

     _____

     RTRAn
     _____

     Default key:   none
     Description:   Maintain Receive Translate Table.

     Switches:

               I1 or I   Initialize Receive Translate Table to default
                         values (consecutive 0 to 255).

               I0        Do not initialize (default).

     Examples:



          {rtran y}                Turn receive translation ON.

          {rtran-i n}              Initialize the table and turn it
                                   OFF.

          {rtran 26,0}             Change ASCII 26 to null (ASCII 0,
                                   which will not display).

          {rtran-i y,#8,224,240}   Initialize the table, turn receive
                                   translation ON, change ASCII 224 to
                                   240, 225 to 241, ..., 231 to 247. 

          {rtran}                  Toggle receive translation ON/OFF.

          {rtran #13,65,78,#13,78,65,#13,97,110,#13,110,97}
                                   ROT13 translation.  This swaps the
                                   first 13 letters of the alphabet
                                   for the second 13.

     Rules for RTRAn arguments are the same as for the {rtr=} item in
     the Setup File.  In addition, "n" may be used as the first
     argument to turn receive translation OFF at any time.

     See "Edit Setup File" in the User Guide and Reference for details
     and more examples.

     TIPS on using RTRAn:

     >    Some control characters are unaffected by translation when
          certain features are enabled.  Examples:  XON (17) and XOFF
          (19) are not translated when Software Flow Control is on. 
          ENQ (5) is not translated when ENQ/ACK emulation is on.

     >    When the Capture Mode is set to RAW, data will be captured
          prior to translation.  FILTER and SCREEN captures will
          contain translated data.

     >    LOOKfor will always see translated data.  Use FILTER Capture
          Mode to see what LOOKfor sees.

     >    In GETString, incoming data (as well as locally typed
          characters) will be translated with the Receive Translate
          Table (it may be necessary to turn receive translation off
          during certain GETString functions).

     See also STRAn.

     _______

     SPDCtrl
     _______

     Default key:   none
     Description:   Serial port display control.



     Examples:

          {spdc y}            Serial port display is ON.
          {spdc n}            Serial port display is OFF.

     This function will suppress display of any data received from the
     serial port.  It can be used when a "clean" display is desired
     during automated procedures.

     TIPS on using SPDCtrl:

     >    ANSI control sequences are not processed while SPDCtrl is in
          effect (Terminal Emulation effectively reverts to TTY).

     >    LOOKfor will function normally, but remember that ANSI
          sequences are not stripped.  Make a manual run using TTY
          emulation to see what the LOOKfor will see.

     >    SCREEN Capture Mode will not capture any of the incoming
          data.  Use RAW mode or FILTER mode instead (FILTER capture
          will be affected by the Translate Table, but will still
          contain ANSI sequences).

     >    Serial port display will always be restored to ON at macro
          termination.

     _____

     STRAn
     _____

     Default key:   none
     Description:   Maintain Send Translate Table.

     Switches:

               I1 or I   Initialize Send Translate Table to default
                         values (consecutive 0 to 255).

               I0        Do not initialize (default).

     Examples:

          {stran y}           Turn send translation ON.

          {stran-i n}         Initialize the table and turn it OFF.

          {stran-i y,92,47}   Initialize the table, turn send
                              translation ON, change "\" to "/".

          {stran}             Toggle send translation ON/OFF.

          {stran #13,65,78,#13,78,65,#13,97,110,#13,110,97}



                              ROT13 translation.  This swaps the first
                              13 letters of the alphabet for the
                              second 13.

     Rules for STRAn arguments are the same as for the {str=} item in
     the Setup File.  In addition, "n" may be used as the first
     argument to turn send translation OFF at any time.

     See "Edit Setup File" in the User Guide and Reference for details
     and more examples.

     TIPS on using STRAn:

     >    Some control characters are unaffected by translation when
          certain features are enabled.  Examples:  XON (17) and XOFF
          (19) are not translated when Software Flow Control is on. 
          When ENQ/ACK emulation is on, an ACK sent in response to an
          ENQ will not be translated.

     >    In GETString, data echoed to the modem (and displayed
          locally) will be translated with the Send Translate Table
          (it may be necessary to turn send translation off during
          certain GETString functions).

     See also RTRAn.

                                  - end -

```
{% endraw %}

## COMMO.DOC

{% raw %}
```








                                ____________

                                {COMMO} (tm)
                                ____________


                   "A New Standard in Telecommunications"









                                     by

                              Fred P. Brucker

                            Post Office Box 9103
                            Santa Rosa, CA 95405






                          User Guide and Reference




                                Release 5.2

                               March 7, 1992













        (C)Copyright 1989,1992  Fred P. Brucker  All Rights Reserved





     The {COMMO} program and associated on-disk documentation are the
     property of the author and may not be sold without permission. 
     They may be freely distributed, unaltered and as a unit, via
     electronic bulletin board systems.  Permission to distribute on
     diskette or in any other manner must be obtained in writing.  See
     the file LICENSES for additional licensing and distribution
     details.


     The author does not guarantee this program to be free from
     defects and may not be held responsible for loss caused by such. 
     Your use of this program constitutes your acceptance of these
     terms.




     DESQview is a trademark of Quarterdeck Office Systems
     OmniView is a trademark of Sunny Hill Software
     DoubleDOS is a trademark of SoftLogic Solutions, Inc.
     HS/Link is a product of Samuel H. Smith
     DSZ and GSZ are products of Omen Technology Inc.
     MPt is a product of Matthew Thomas
     LIST is a product of Vernon D. Buerg
     The IBM PC is a product of IBM Corp.
     MS-DOS is a trademark of MicroSoft Corp.




        (C)Copyright 1989,1992  Fred P. Brucker  All Rights Reserved



                     ================================
                     {COMMO} Registration Information
                     ================================

  {COMMO} is a "SHAREWARE" product.  You are entitled to evaluate it for
  30 days.  If it suits your needs and you would like to continue using
  it, then you must pay the licensing fee.  Please use the REGISTRATION
  FORM on the next page.

  When you REGISTER you will be licensed to use all future releases of
  {COMMO}.  You will never have to pay an "update" charge.  You will also
  receive instructions for removing the Shareware Notice at program
  startup.

  My (voice) TELEPHONE NUMBER for inquiries and support for registered
  users is (707) 573-1065.  Please restrict calls to business hours
  (Mon-Fri, 9am-5pm, Pacific time).

  Registered users will also receive priority support on Bulletin Boards,
  CompuServe and GEnie (see READ.ME).

  Call or write for pricing information on MULTI-USER (site) and
  DISTRIBUTION licenses.  Discounts are given on quantities greater than
  10.  See the file LICENSES for licensing and distribution details.

  All prices shown are US DOLLARS.  Please remit US FUNDS on US BANK only.
  NET 30 TERMS will be accepted on purchase orders totalling $100.00 or
  more.

  PAYMENT OPTIONS:

  1) Payment by CHECK or MONEY ORDER:  make payable to FRED P. BRUCKER.
     Mail the Registration Form and payment to the address below.

  2) Payment by CREDIT CARD:  fill in the credit card information at the
     bottom of the Registration Form.  The following cards are accepted:

       VISA, MASTERCARD, CARTE BLANCHE, DINERS CLUB, DISCOVER, JCB.

     You can mail the Registration Form to the address below or:

       Order by phone: (707) 573-1065, Mon-Fri, 9am-5pm, Pacific time.
         Have your credit card ready when you call.

       Order by E-mail on CompuServe (71021,356) or GEnie (F.BRUCKER1).
         Upload the completed Registration Form as a message.

     The company name on the charge will be "New Standard Software."


                SEND TO:   Fred P. Brucker
                           Post Office Box 9103
                           Santa Rosa, CA 95405



               {COMMO} 5.2 SINGLE USER REGISTRATION FORM

  Name     _______________________________________________________________

  Company name (if company address)   ____________________________________

  Address  _______________________________________________________________

           _______________________________________________________________

           _______________________________________________________________


  {COMMO} single user license, SPECIAL PACKAGE .... $50.00    $ __________
    Includes: (1) Printed, bound, indexed manual.
              (2) Latest release on diskette plus utilities
                  (COMMOPNS, MOSTHOST, CMC, etc., see READ.ME).

  {COMMO} single user license, with DISKETTE ...... $40.00    $ __________

  {COMMO} single user LICENSE alone ............... $35.00    $ __________

  Registered users may order PRINTED MANUAL only .. $20.00    $ __________
    Limit of one per license.  Your serial no. _________

  Registered users may order DISKETTE only ......... $5.00    $ __________
    Limit of one per license.  Your serial no. _________

  ALL DISK ORDERS -  Choose format: 5.25" ____ 3.5" ____
                     Current (latest) release       ____
                     Next release (when available)  ____

                                                  Subtotal    $ __________

                  California residents add sales tax, 7.5%    $ __________
                    (No tax when ordering license alone)

  Special Package or Manual order, add SHIPPING:
                         USA/Canada/Mexico ......... $3.00
                         All other countries ...... $10.00    $ __________

                                                     Total    $ __________

  Payment method:  Check__  Money order__  Visa__  MasterCard__  PO__
                   Carte Blanche__  Diners Club__  Discover__  JCB__

     CREDIT CARD INFORMATION:

     Card No. ________  ________  ________  ________  Expires ____/____

     Cardholder signature _____________________________________________

     Cardholder name __________________________________________________

     Daytime telephone  (_____) _____ _______



                   {COMMO} (tm)  User Guide and Reference            5


     ========
     Contents
     ========


     Preface . . . . . . . . . . . . . . . . . . . . . . . . . . .   7

     Principal Features  . . . . . . . . . . . . . . . . . . . . .   8
          The Best Way to Learn {COMMO} Quickly  . . . . . . . . .  11

     Getting Started . . . . . . . . . . . . . . . . . . . . . . .  12
          Quick Start Instructions . . . . . . . . . . . . . . . .  12
          Preparing Your System  . . . . . . . . . . . . . . . . .  14
          Command Line Options . . . . . . . . . . . . . . . . . .  15
          {COMMO} Support Files  . . . . . . . . . . . . . . . . .  17
          Saving the Support Files . . . . . . . . . . . . . . . .  18
          Initialization Procedure . . . . . . . . . . . . . . . .  18
          Terminal Screen  . . . . . . . . . . . . . . . . . . . .  19

     {COMMO} Key Commands  . . . . . . . . . . . . . . . . . . . .  20
          [Alt-A]   ASCII Upload . . . . . . . . . . . . . . . . .  20
          [Alt-B]   Send Break Signal  . . . . . . . . . . . . . .  22
          [Alt-C]   Clear Screen . . . . . . . . . . . . . . . . .  22
          [Alt-D]   Dialing Directory  . . . . . . . . . . . . . .  22
               Dialing Directory Entry Example . . . . . . . . . .  23
          [Alt-G]   Edit Setup File  . . . . . . . . . . . . . . .  26
               Predefining Variables with SET  . . . . . . . . . .  26
               Explanation of Setup File Items . . . . . . . . . .  27
          [Alt-H]   Hang Up  . . . . . . . . . . . . . . . . . . .  40
          [Alt-I]   Screen Image Save  . . . . . . . . . . . . . .  40
          [Alt-K]   Scrollback . . . . . . . . . . . . . . . . . .  41
          [Alt-M]   Macro Processor  . . . . . . . . . . . . . . .  41
          [Alt-N]   Multi Number Dialing . . . . . . . . . . . . .  42
          [Alt-O]   Send Modem Initialization String . . . . . . .  42
          [Alt-P]   Set Terminal Parameters  . . . . . . . . . . .  42
               Parameter Descriptions  . . . . . . . . . . . . . .  43
               Setting Terminal Parameters . . . . . . . . . . . .  45
          [Alt-S]   Shell to DOS . . . . . . . . . . . . . . . . .  45
          [Alt-T]   Set Toggles  . . . . . . . . . . . . . . . . .  46
               Sound Control Toggle  . . . . . . . . . . . . . . .  46
               AutoBaud Toggle . . . . . . . . . . . . . . . . . .  46
               Local Echo Toggle . . . . . . . . . . . . . . . . .  47
               Signal Lights Toggle  . . . . . . . . . . . . . . .  47
          [Alt-U]   Utility Menu . . . . . . . . . . . . . . . . .  47
          [Alt-W]   Send Current Password  . . . . . . . . . . . .  48
          [Alt-X]   Exit from {COMMO}  . . . . . . . . . . . . . .  48
          [Alt-1]   Capture File Options . . . . . . . . . . . . .  48
          [Alt-2]   Print Log Toggle . . . . . . . . . . . . . . .  49
          [Alt--]   Chat Mode Toggle  (Alt minus)  . . . . . . . .  50
          [Alt-=]   Doorway Mode Toggle  . . . . . . . . . . . . .  51
          [F1]   How to Use Online Help  . . . . . . . . . . . . .  52
               Modifying the Help File . . . . . . . . . . . . . .  52



                   {COMMO} (tm)  User Guide and Reference            6



     [PgUp]/[PgDn]  Uploading/Downloading  . . . . . . . . . . . .  53
          How to Install External Protocol Drivers . . . . . . . .  53
          Using DSZ or GSZ . . . . . . . . . . . . . . . . . . . .  54
          Using OZBEXT . . . . . . . . . . . . . . . . . . . . . .  55
          {COMMO} Auto Receive . . . . . . . . . . . . . . . . . .  55

     Appendix A   Setting Up Your Modem  . . . . . . . . . . . . .  57
          Answering a call from another computer . . . . . . . . .  59
          Connecting two computers (null modem cable)  . . . . . .  60

     Appendix B   {COMMO} and Multi-Tasking  . . . . . . . . . . .  61
          DESQview . . . . . . . . . . . . . . . . . . . . . . . .  61
          OmniView . . . . . . . . . . . . . . . . . . . . . . . .  62
          DoubleDOS  . . . . . . . . . . . . . . . . . . . . . . .  62

     Appendix C   Flow Control . . . . . . . . . . . . . . . . . .  64

     Appendix D   ASCII Character Representation . . . . . . . . .  65

     Appendix E   Terminal Emulation . . . . . . . . . . . . . . .  67
          Printer Support  . . . . . . . . . . . . . . . . . . . .  68
          ANSI-BBS Keyboard Support  . . . . . . . . . . . . . . .  68
          VT102 Keyboard Simulation  . . . . . . . . . . . . . . .  68

     Appendix F   Usage Log Format . . . . . . . . . . . . . . . .  71

     Appendix G   Error Message Explanations . . . . . . . . . . .  72



                   {COMMO} (tm)  User Guide and Reference            7


     =======
     Preface
     =======

     {COMMO} is a general purpose telecommunications program, also
     called a "terminal" program.  Use it to dial remote systems and
     to communicate using a choice of terminal emulations.  Many
     features are available to enhance your communications needs.

     Minimum system configuration:

          IBM PC compatible computer.
          MS-DOS 2.1 or higher.
          128k of memory.
          One diskette drive.
          A serial port or internal modem with an 8250, 16450 or 16550
          series UART chip.

     {COMMO} can be configured to work with virtually any type of
     modem.



                   {COMMO} (tm)  User Guide and Reference            8


     ==================
     Principal Features
     ==================

     {COMMO} is small in size, loads rapidly and performs all
     functions with great speed.

     The powerful Macro Processor allows you to:

          1)   Write macro "scripts" to automate many common
               operations such as logging in, reading messages,
               uploading/downloading.  {COMMO} will perform these
               tasks in the middle of the night while you sleep.

          2)   Assign Function Keys, Alt Keys, Keypad Keys, etc., to:

                    (a) send a string to the modem
                    (b) execute any DOS command
                    (c) start any macro
                    (d) initiate any {COMMO} function.

          3)   Edit all macros without exiting {COMMO}, using the
               Internal Editor.  Macros become effective immediately.

          4)   Call your computer from a remote location using
               {COMMO}'s convenient Host Mode, written in {COMMO}'s
               macro language.

     The free-form Dialing Directory has space for hundreds of
     entries.  Multi Number Dialing is supported from the command
     line.  AutoBaud detect adjusts to the speed of the connection.  A
     macro may be linked to each directory entry.

     Multi-tasking support.  {COMMO} is fully DESQview aware, operates
     in far less memory than comparable programs.  Also supports
     OmniView, DoubleDOS and others.

     Built-in ANSI-BBS and VT102 emulation.  Supports ANSI editing
     functions, scrolling region, graphics character set, tab
     set/clear, printing, modes, reports, etc.  Complete auto-
     switching VT102 keyboard support via Macro Processor.

     ENQ/ACK terminal protocol support.

     Built-in Xmodem and Xmodem-1k (old Ymodem) protocols.

     ASCII Upload to send messages and text files.  Features line
     pacing and blank line expansion.

     The Setup File, Dialing Directory and Macro File may be edited
     with the full-function Internal Editor.  String search is



                   {COMMO} (tm)  User Guide and Reference            9


     available in all file windows.  Most features are fully
     configurable.

     Any file up to 64k in size may be edited within {COMMO} using the
     Internal Editor.

     {COMMO} supports all text display modes, including 132 column
     screens.

     Character Translate Tables for both sending and receiving. 
     Tables can be modified dynamically via macros.

     Split-screen Chat Mode for communicating with another computer
     which is also running a terminal program.  All program features
     are available while in Chat Mode.

     Doorway Mode lets you operate remote applications with full use
     of your screen and keyboard.

     {COMMO}'s Auto Receive feature lets you configure any eight
     strings to automatically trigger any eight macros.  Thus any
     protocol with a "signature" can be set to start automatically. 
     Zmodem, HS/Link and MPt are pre-configured.

     Support for any four serial ports.  Port addresses and IRQ's are
     configurable.  Port speeds up to 115,200 bps (hardware
     dependent).  Automatic support for NS16550A (or AF) buffered UART
     chip.

     Serial port signal lights may be displayed on the Status Line,
     including send and receive.  Very useful with internal modems.

     Scrollback buffer up to 64k bytes gives instant replay of the
     text that has scrolled off the screen.

     Capture Log saves all text from the screen to a disk file.  Three
     different capture modes are available.

     Screen Image Save writes the current screen to a disk file.

     Print Log writes all text from the screen to the printer.

     Usage Log records date, time, length of call and other
     information about each call.  Date of last call can be saved in
     the Dialing Directory.

     Support for visually impaired users with {COMMO}'s configurable
     Speech Friendly Interface.

     Special version available to support the HP 95LX palmtop
     computer.



                   {COMMO} (tm)  User Guide and Reference           10


     Enhanced keyboard support.

     Extensive context-related Online Help.


     And {COMMO} is elegant, easy to learn and fun to use!



                   {COMMO} (tm)  User Guide and Reference           11


                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    -------------------------------------
                    The Best Way to Learn {COMMO} Quickly
                    -------------------------------------
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


     1)   Read the section "Getting Started" which will get you up and
          running.

     2)   Read Appendix A "Setting Up Your Modem" for some very
          important instructions regarding your specific hardware.

     3)   Read through the section "{COMMO} Key Commands" to
          familiarize yourself with {COMMO}'s commands and features.

     4)   Use Online Help as a reference while you use {COMMO}.


     How is it pronounced???  Just like "comma" (,) except for the
     last letter.  It's technical jargon for "communications."



                   {COMMO} (tm)  User Guide and Reference           12


     ===============
     Getting Started
     ===============

     NOTE:  Refer to Appendix G for explanations of any error messages
     you receive during your initial use of {COMMO}.

     For greater detail, see the next section "Preparing Your System."


     Quick Start Instructions
     ========================

     1)   If you have a hard drive, create a subdirectory named
          "COMMO."  Copy all of the files from the {COMMO} archive or
          distribution diskette into this subdirectory.

          If your system has only floppy drives, copy the {COMMO}
          files to a formatted diskette.

          Now change to the {COMMO} subdirectory or log in to the
          diskette where you have copied the {COMMO} files.

     2)   Run the "New User's Guide"  by typing "guide" at the DOS
          prompt. Follow the instructions carefully.  A macro will
          automatically take you on a tour of some of {COMMO}'s main
          features.

          When you are in the Setup File you will be in {COMMO}'s
          Internal Editor and you may change any portion of the file
          using the arrow keys, PgUp, PgDn and other editing keys. 
          Press Alt-E for Edit Help to see a list of editing keys.

          You may need to change some of the items to conform to your
          system setup.  Notice that {COMMO} only looks at the items
          that are contained in curly braces: { }.  All other text is
          treated as commentary and is not used by the program.

          Most items will not need to be changed until you are more
          familiar with {COMMO}.  For now, check the following:

               The Default Dialing Parameters in the first item.  Make
               sure you have the correct port number (the third
               field).  If your modem is on COM2, change it to "2",
               COM3 to "3", etc.  Using COM2 it would look like this: 
               {2400,8n1,2,A,0}.

               The Modem Initialization String.  If you know the
               commands for your own modem, make the necessary
               adjustments.  If you don't, then leave it like it is. 
               Refer to Appendix A for more information.



                   {COMMO} (tm)  User Guide and Reference           13


               The items under "Paths and Files" (page down to see
               these). 

          Press [Esc] to save the file and continue the tour.

     3)   The next stop is the Dialing Directory.  To alter an entry
          or to add new ones, just press "E" to enter edit mode.  This
          is the same Internal Editor you used to modify the Setup
          File.  When you are finished making changes, press Esc to
          bring back the Selector Bar.  Then press Esc again to
          continue.

     4)   Next you will see a sample menu created by the Macro
          Processor.  Press Enter to continue and return to the
          Terminal Screen.  Then exit {COMMO} with the Alt-X command.

     5)   From the DOS prompt type "commo<cr>" to restart the program. 
          The new Setup File items will now be in effect.

     6)   IMPORTANT!  {COMMO}'s Auto Receive feature is set up to
          automatically start the program DSZ.COM (from Omen
          Technology) when the remote system sends a file using the
          Zmodem protocol.

          Do not request a file for downloading with Zmodem until you
          have this program installed in a directory that is in your
          DOS path (or in the current directory).  If "Bad command or
          filename" is displayed by DOS, just keep pressing Ctrl-X
          until it stops.  This message means you haven't installed
          DSZ properly.

          If things happen too quickly to see what is happening, you
          can use EXECute Preview Mode, which will allow you see the
          results of the command execution.  Use Alt-T to toggle
          Preview Mode on/off.

          The same principle applies to any other protocol drivers
          that you use, such as HS/Link, MPt, etc.  If you don't have
          any external protocol drivers installed, use the internal
          Xmodem protocol (use Xmodem-1k whenever possible since it is
          much faster).

     7)   When you see the Status Line at the bottom of the screen,
          you are in the Terminal Screen.  Now you may press Alt-D to
          enter the Dialing Directory.  Use the up and down arrow keys
          to select a system to call and press Enter.  {COMMO} will
          begin dialing.

     8)   When a connection is made with a remote system, {COMMO} will
          return to the Terminal Screen where you may interact with
          the remote.



                   {COMMO} (tm)  User Guide and Reference           14


          NOTE:  If your modem does not seem to operate properly (no
          connection is made or the data is garbled), read Appendix A
          "Setting Up Your Modem."  You may need to change the Modem
          Initialization String in the Setup File.  If you change it,
          exit and restart {COMMO} to send the new string.  Then try
          dialing again.


     Preparing Your System
     =====================

     The following sections give startup instructions in greater
     detail.

     Make sure that all of the files from the {COMMO} package are in
     one directory or on one diskette.  Four of these files are
     required to run the {COMMO} program:

          COMMO.COM      the Program File
          COMMO.SET      the Setup File
          COMMO.FON      the Dialing Directory File
          COMMO.MAC      the Macro File

     In addition, if Online Help is used (recommended):

          COMMO.HLP      the Online Help File

     There are two ways to make sure that {COMMO} will be able to find
     all of its files.  The first method is the simplest and should be
     used if you are not too familiar with DOS commands:

     1)   Make sure you are logged into the directory or disk drive
          where the files are located.  Then simply type "commo" at
          the DOS prompt.  If your files are in the directory
          "C:\COMMO" you would type:

               c:<cr>
               cd \commo<cr>
               commo<cr>

          (<cr> is the [Enter] or Return key)

          Or if the files are on a diskette in drive A you would type:

               a:<cr>
               commo<cr>

          {COMMO} will remember where the files are, so you will be
          able to change directory or drive later without concern.



                   {COMMO} (tm)  User Guide and Reference           15


     2)   The second method is a little more advanced, but allows you
          to run {COMMO} no matter what directory or drive you are
          currently logged into:

          Use the SET command in DOS to store the {COMMO} path into
          the "environment."  If you place this command in your
          AUTOEXEC.BAT file you won't have to change directories or
          diskettes to run {COMMO}.  If your files are in the
          directory "C:\COMMO" the command would be:

               set commo=c:\commo

          If the files are on the diskette in drive B the command
          would be:

               set commo=b:

          Do not use any extra spaces in the SET command.  And
          remember to place the {COMMO} directory or drive in your
          PATH command.

          IMPORTANT!  Be sure to check your "set commo=" command if
          you install {COMMO} into a different directory or onto
          another drive (or if you install a later release of the
          program).  If it points to the wrong directory, {COMMO} will
          not operate properly.  This is a common error and can cause
          a lot of head scratching.


     Command Line Options
     ====================

          _______________

          Dialing Strings
          _______________

     Dialing Strings are used to indicate numbers to dial at program
     startup.  If present, they must be placed before any command line
     switches.  {COMMO} will search the Dialing Directory for each
     string and mark the first entry where a match is found (case is
     ignored).

     The strings may consist of any part of a Dialing Directory entry
     line (usually part of the system name) and may be separated by
     commas or spaces.  The following characters may not appear in a
     command line Dialing String: space, comma, slash (/), curly
     braces.

     After entries in the Dialing Directory are marked, {COMMO} will
     check for a startup macro (specified on the command line or in
     the Setup File).  If a startup macro is present, it will be



                   {COMMO} (tm)  User Guide and Reference           16


     started.  Otherwise Multi Number Dialing of the marked systems
     will begin.

     Examples:

              commo telegodzilla joes-bbs 4567 

              commo zilla,joes,4567

     IMPORTANT!  The Modem Initialization String will normally be sent
     before dialing begins.  Your modem should be turned on and ready
     to receive the command string before you start {COMMO}.

          ________

          Switches
          ________

     Case is ignored and the switches may be in any order (Dialing
     Strings must precede them, however).

     NOTE:  Environment variables may also be used to communicate data
     to {COMMO} at program startup.  See the description of the
     SETVariable function in the Macro Programming Guide.

     /:label        Startup Macro.

          This switch can be used to override the "mac=" item in the
          Setup File.  The "label" is a one to eight character macro
          label.  If the label is found in the Macro File, macro
          processing will be started.  If the label is not found the
          switch will be ignored.

     /sfilename          Alternate Setup File.
     /dfilename          Alternate Dialing Directory File.
     /mfilename          Alternate Macro File

          Only the filename should be specified.  The {COMMO} home
          directory will be assumed for the path.

          If an alternate Macro File is specified, it will become the
          default Macro File.  This means it will be reloaded when the
          "R" switch is used with the MACLoad macro function.

     /knn           Scrollback Buffer size.

          This switch will override the "sbs=" item in the Setup File. 
          "nn" is kilobytes and may be 0 to 64.

     /i[y/n]        Modem Initialization override.



                   {COMMO} (tm)  User Guide and Reference           17


          Forces the Modem Initialization String to be sent ("/iy") or
          not sent ("/in").  This will override the "min=" item in the
          Setup File.

     Example:

     C:\COMMO> commo joes zilla /:mailrun /dother.dir /k25 /in

          Two systems will be marked in the Dialing Directory.

          The macro "mailrun" will be started if it exists in the
          Macro File.

          The alternate Dialing Directory "other.dir" will be loaded.

          The Scrollback Buffer will be set to 25k in size.

          The Modem Initialization String will not be sent.


     {COMMO} Support Files
     =====================

     The {COMMO} files are standard ASCII text files and may be
     modified with any editor (or word processor in "non-document"
     mode).  From within {COMMO} they may be edited with {COMMO}'s
     Internal Editor.

     The only control characters (below ASCII 28) allowed in the
     support files are CR/LF pairs and an EOF at the end.  {COMMO}'s
     Internal Editor adheres to this rule.  Control characters may be
     represented as shown in Appendix D.  For example, an ASCII 16
     would be written as ^P.

     Key definitions for the Internal Editor are given in Online Help. 
     A Color Chart will be displayed in the editor when F7 is pressed
     (useful in the Setup File and for the DISPlay function in the
     Macro File).

     NOTE:  {COMMO} generally retains the Dialing Directory and Macro
     File in memory during program operation.  If you use an external
     editor to modify them while in the Shell to DOS (or using the
     EXEC macro function), your changes could be lost.  See "Saving
     the Support Files" below.

     Following is a brief description of each file. 

     1)   COMMO.SET.  The Setup File contains settings for many
          important parameters.  The first time you run {COMMO} you
          should use the Alt-G key command to edit this file to your
          own needs.  See "Alt-G  Edit Setup File" for details on each
          item.



                   {COMMO} (tm)  User Guide and Reference           18



     2)   COMMO.FON.  The Dialing Directory File.  This file contains
          information about each system that you will be calling,
          including the telephone number, password, Linked Macro and
          serial port parameter overrides.  Use the Alt-D key command
          to dial numbers and to edit this file.  Details are given in
          the section "Alt-D  Dialing Directory."

     3)   COMMO.MAC.  The Macro File.  Use the Alt-M key command to
          select a macro for execution and to edit this file.  A
          complete description of {COMMO} macros is given in the Macro
          Programming Guide.  A summary of macro functions and key
          designators is also given in Online Help.

     4)   COMMO.HLP.  The Online Help File.  This file contains the
          information for {COMMO}'s context-related Online Help.  See
          "How to Use Online Help" later in this document.


     Saving the Support Files
     ========================

     Whenever a change is made to any file, the internal change flag
     is set for that file (indicated by an "*" next to the column
     number in the Internal Editor).

     The Dialing Directory and Macro File will be saved automatically
     when you exit {COMMO} (if the change flag is set).  The Setup
     File and other files that you may edit will be saved when you
     press Esc to exit the editor.

     You may press Alt-F in the Internal Editor to immediately save
     any file.

     If you do not wish to save your changes to the Dialing Directory
     or Macro File, you may press Alt-Q while in the Internal Editor. 
     This will reset {COMMO}'s change flag and the file will not be
     saved when exiting the program.  Any subsequent changes to the
     file will set the change flag again.  Pressing Alt-Q while
     editing any other file will simply cancel the edit.


     Initialization Procedure
     ========================

     When {COMMO} begins running it will read and process the Setup
     File, COMMO.SET.  Then it will attempt to load into memory:

          (1) the Dialing Directory     COMMO.FON
          (2) the Macro File            COMMO.MAC



                   {COMMO} (tm)  User Guide and Reference           19


     Any problems encountered will be reported.  These problems must
     be corrected before restarting the program.

     Automatic modem initialization will occur if requested in the
     Setup File with {min=yes}, or by the "/iy" command line switch. 
     Use the "/in" switch to suppress modem initialization if you are
     already on line.

     Please note that {COMMO} does NOT change the video display mode. 
     Instead {COMMO} can adapt to any text mode that is set when the
     program is started.  Check the items under "Video and Chat Mode"
     in the Setup File for details.  See also the section "[Alt-G] 
     Edit Setup File" later in this document.

     If the display does not look right try executing the DOS command 
     "mode co80" or "mode bw80" prior to calling {COMMO}.


     Terminal Screen
     ===============

     The Terminal Screen allows you to see the characters coming in
     from the serial port.  Any characters that you type will be sent
     out to the serial port.  If you are connected to another system
     you will be interacting with that system.

     Keep in mind that you will also be interacting with {COMMO} and
     with your own computer via key commands (Alt keys, for example). 
     These key commands have no effect on the remote system unless
     they cause characters to be sent to the serial port (pressing
     Alt-W to send your password, for example).



                   {COMMO} (tm)  User Guide and Reference           20


     ====================
     {COMMO} Key Commands
     ====================

     The Alt Keys shown in this section are the built-in default key
     assignments for the various {COMMO} commands.  Once you are
     familiar with these commands you may use the Macro Processor to
     reassign any of the keys.

     Keys used within the various command windows are properly
     detailed in Online Help.  Please press F1 from any command window
     to invoke {COMMO}'s context-related help system.

     Note that certain features are only available as macro functions. 
     Refer to the Macro Programming Guide for details.


     ======================
     [Alt-A]   ASCII Upload
     ======================

     This command is used to send prepared messages or any text files
     to the remote system.  Enter the pathname of the file you wish to
     send.  Note that the input field will be blank unless a macro is
     used to prompt with a path.  The macro supplied in COMMO.MAC is:

          {:ala} {ascii %uldir\} {}          ASCII Upload with path

     Notice the "\" following the path variable.  It tells {COMMO} to
     prompt for the filename.  If you needed to specify a colon for
     pacing (see below) you could change this to:

          {:ala} {ascii %uldir\,:} {}        ASCII Upload with path

     There is no special error checking associated with ASCII Upload. 
     It is intended primarily for sending message responses and other
     short text files.  For longer files, binary files or compressed
     files (.ARC, .ZIP) you will want to use error checking protocols
     such as Xmodem, Zmodem, MPt, etc.  See "Uploading / Downloading."

     A number of parameters are used to control an ASCII Upload:

          ___________

          Line Pacing
          ___________

     IMPORTANT!  Line Pacing is used to keep transmitted data
     synchronized with received (echoed) data and is normally used
     ONLY when the remote is sending a prompt for each line, usually
     "nn:" or "nn?".  "nn" is a line number and ":" or "?" is the
     prompt or "pacing character."



                   {COMMO} (tm)  User Guide and Reference           21



     {COMMO} will wait up to 5 seconds for the pacing character, then
     send the next line.  If there is a 5 second delay between the
     sending of each line, then either you have the wrong pacing
     character or you don't need line pacing (you don't need it when
     using a full-screen editor, for example).

     At any time, the Spacebar may be pressed to force transmission of
     the next line.  This is very useful when you have set the wrong
     pacing character or if you wish to send each line manually.  In
     the latter case, use any pacing character that is different from
     the one in the line prompt.

     To use line pacing, enter the pacing character when {COMMO} asks
     for it in the ASCII Upload window.  NOTE:  The receive Translate
     Table can affect the pacing character if receive translation is
     ON.

     The initial pacing character is configurable.  See "[Alt-G]  Edit
     Setup File."

     The pacing character may be any character including control
     characters, e.g. "^m" or "|" for carriage return.  See Appendix D
     for details on how to represent special characters.

     See also Appendix C "Flow Control."

          ________________

          Character Pacing
          ________________

     You may insert a delay between each character using the Inter-
     Character Delay feature.  This should only be used when the
     remote is so slow that it drops characters.  See "Set Terminal
     Parameters" for details.

          ___________________

          Stripping Linefeeds
          ___________________

     Normally you will want to strip linefeeds from your outgoing
     text.  This will appear to the remote as if you are typing the
     data.  But if all your data displays on the same line at the
     remote, then you must configure {COMMO} to send the linefeeds.

     NOTE:  This item is initialized in the Setup File.



                   {COMMO} (tm)  User Guide and Reference           22


          _____________________

          Expanding Blank Lines
          _____________________

     You may configure {COMMO} to send a space character whenever a
     blank line is encountered in the text file you are sending.  This
     will prevent your message from terminating prematurely if you are
     sending to a BBS message editor.  Blank line expansion is not
     normally required when sending to a "full screen" BBS editor.

     NOTE:  This item is initialized in the Setup File.


     ===========================
     [Alt-B]   Send Break Signal
     ===========================

     A one second Break Signal will be sent.  This signal is used by
     some systems to interrupt certain operations.  Use it only when
     the remote system directs you to do so.


     ======================
     [Alt-C]   Clear Screen
     ======================

     The Terminal Screen will be cleared and the current colors will
     be set to the Setup File defaults.


     ===========================
     [Alt-D]   Dialing Directory
     ===========================

     The Dialing Directory is your data base of telephone numbers. 
     From the directory window you can select numbers to dial and also
     update the directory using the Internal Editor.

     Refer to Online Help for a complete description of the commands
     available in the Dialing Directory window.



                   {COMMO} (tm)  User Guide and Reference           23


     _______________________________

     Dialing Directory Entry Example
     _______________________________


     System         Last      Telephone  System    Linked  Terminal
     Name           Called    Number     Password  Macro   Parameters
     _____________  ________  __________ _________ ______  __________

     File City BBS  02/14/92  {555-1234}  {pword}  {city}     {}

     NOTE:  Any number of Variable Items may be added following the
     Terminal Parameters item (see below).


     IMPORTANT!  Items in curly braces must be present (they are
     positional).  Items which are not used must have a null string {}
     as a placeholder.  You may omit null strings at the end of the
     line.

     Directory entries are limited to one per line.  Lines may be up
     to 255 characters in length.  {COMMO}'s Internal Editor will
     scroll horizontally to follow the cursor.

     Comments may be placed anywhere outside the curly braces or on
     separate lines.

     ______________________________

     System Name      File City BBS
     ______________________________

          Up to 40 characters in length,  it must NOT be enclosed in
          curly braces.  The System Name will be displayed on the
          Status Line after connection, unless the Signal Lights
          option is selected.  It will also be part of a Usage Log
          entry if the log is enabled.

     ______________________________________

     Telephone Number      {1-707-555-1234}
     ______________________________________

          Spaces and hyphens are ignored by most modems.  The Dialing
          Prefix, Telephone Number and Dialing Suffix are strung
          together to form a dialing command (may be up to 128
          characters total).  Refer to your modem manual for details
          on dialing commands.

          Normally the default Dialing Prefix (usually "ATDT") and the
          default Dialing Suffix (usually "|") will be used.  These



                   {COMMO} (tm)  User Guide and Reference           24


          are specified in the Setup File.  You may also have any
          number of alternate prefixes and suffixes by defining them
          with SET items in the Setup File.

          For example, if you wanted your prefix for a certain entry
          to be "ATM1L3DT" (to turn on the modem speaker LOUD), you
          could put this item in your Setup File:

               {set spkrpref,ATM1L3DT}       Loud speaker prefix

          Then your entry might look like this:

               File City  {%spkrpref%555-1234} {pword} {city} {}

          The prefix "spkrpref" will override the default prefix if it
          is at the very beginning of the telephone number field. 
          Similarly, an override suffix may be specified if it is at
          the very end of the field.

          Notice that these are variable names and must be bracketed
          between "%" characters.  Variables may be placed anywhere
          else within the number field as well, but they will not
          override the default prefix or suffix unless they are at the
          very beginning or very end, respectively.

          You may use variables defined with SET items in the Setup
          File or variables set within macros.

     _________________________________

     System Password      {mypassword}
     _________________________________

          A different Password String may be defined for each system
          that you call.  Passwords may be up to 64 characters in
          length.

          The Password String may be sent by pressing Alt-W or by
          using the variable "_pas" in a SEND macro function.

          Passwords are invisible in the Dialing Directory window, but
          appear when you enter [E]dit mode.

          Rules for writing passwords are in Appendix D.



                   {COMMO} (tm)  User Guide and Reference           25


     ________________________

     Linked Macro      {city}  
     ________________________

          If a valid Linked Macro is specified, it will be started
          when a connection is established with the remote system.  If
          no macro is specified (or the macro label is not found),
          {COMMO} will enter the Terminal Screen.

     ___________________________

     Terminal Parameters      {}
     ___________________________

          This item allows you to override any or all of the Default
          Dialing Parameters for the current call.  Prior to dialing
          each number, {COMMO} will set all Terminal Parameters to the
          Dialing Defaults (which are initialized from the Setup File
          at program startup, but may be changed with the DPARms macro
          function or with the Alt-P key command).

          If a system requires parameters that are different from the
          Dialing Defaults, specify them in this item.

          The general form of this item is:

               {speed,format,comport,terminal-type,delay}

          For example, you might have "{,7,,V}", which would set the
          Data Format to "7e1" and the Terminal-type to VT102, but
          would use the Dialing Defaults for the other parameters.

          See "Set Terminal Parameters" for a complete description of
          each field.  See also "AutoBaud Detect."

     _________________________

     Last Called      05/20/90
     _________________________

          If this item is present, {COMMO} will replace it with the
          current date whenever a connection is made with the system. 
          It may appear anywhere on the entry line (outside the curly
          braces).  Place "00/00/00" to start it.  The Dialing
          Directory file will be saved to disk when you exit {COMMO}.



                   {COMMO} (tm)  User Guide and Reference           26


     _________________________________

     Variable Items      {name,string}
     _________________________________

          Any number of Variable Items may be included in a directory
          entry and will be set just prior to dialing.  The "string"
          may not contain any variables.  The first Variable Item must
          follow the Terminal Parameters item (all other items must be
          present as placeholders even if some are null).  Example:

            Joes-BBS  {555-1234} {pword} {mac} {} {bbsid,joesbbs} ...


     See also "[Alt-N]  Multi Number Dialing."


     =========================
     [Alt-G]   Edit Setup File
     =========================

     Pressing Alt-G allows you to edit the Setup File, COMMO.SET (see
     "Internal Editor" in Online Help for details on editing).  The
     Setup File contains initial settings for many parameters used by
     {COMMO}.

     Items changed with the editor are not effective until the next
     time you start the program.  However, most items may be changed
     with key commands and/or macro functions while the program is
     running.

     Each item in the Setup File is enclosed in curly braces.  Items
     are designated with three letter "keywords" and may be present in
     any order.  There are no "required" items.  Most missing items
     will take on the default values shown in the examples below (AUT
     items and SET items have no default values).

     All text outside the curly braces is commentary and is ignored by
     {COMMO}.  Avoid using curly braces other than to bracket setup
     items.


     Predefining Variables with SET
     ==============================

     SET items predefine variables in {COMMO}'s String Variable Space. 
     The general form of a SET item is

          {set name,string}.

               name      Any valid variable name.



                   {COMMO} (tm)  User Guide and Reference           27


               string    A text string to assign to the name.  The
                         string may not contain any variables.

     Any number of SET items may appear in the Setup File.  They may
     be used later in macros, in telephone numbers, etc.

     See the Macro Programming Guide for more information on
     variables.


     Explanation of Setup File Items
     ===============================

     _________________________________________________________________

     {ddp=2400,8n1,1,A,0}          Default Dialing Parameters, set
                                   when you dial:
                                   (speed,format,port,terminal,delay).

                                   These are also the current settings
                                   when you start the program.
     _________________________________________________________________

          These values will be used as the current settings when
          {COMMO} is started and each time dialing begins.  Use the
          "Terminal Parameters" item in the Dialing Directory to set
          overrides when required.  Use Alt-P or the macro function
          DPARms to change dialing parameters at other times.

          See "Set Terminal Parameters" for a complete description of
          each field and how to change current parameters as well.

          NOTE:  PCjr users without the internal modem should specify
          Com2.

     ______________________________________________

     {min=yes}      Send Modem Init String (yes/no)
     ______________________________________________

          If "yes" this will instruct {COMMO} to send the Modem
          Initialization String at program startup.  You can override
          this item with the "/iy" or "/in" command line switch.



                   {COMMO} (tm)  User Guide and Reference           28


     ___________________________________________________

     {set _modini,~AT S0=0 S7=180 E0 Q0 V1 X4 &C1 &D2 |}

               Modem Init String (2400 bps and higher)
     ___________________________________________________

          This item defines the reserved variable "_modini" (notice
          that the string itself begins following the comma).

          The Modem Initialization String is normally sent to your
          modem when {COMMO} is started or when you press Alt-O.  

          If you are using a 1200 bps modem you should remove the "&C1
          &D2" commands.  In either case the "X" command may have to
          be adjusted.  See Appendix A "Setting Up Your Modem."

     ________________________________________________________

     {sfc=yes}      Software (XON/XOFF) Flow Control (yes/no)
     {hfc=no}       Hardware (RTS/CTS) Flow Control (yes/no)
     ________________________________________________________

          These are used to control the flow of data between your
          computer and the remote system.  They prevent loss of data
          when one end can send faster than the other end can process
          the information.  See Appendix C for details.

     ________________________________________________

     {dex=no}       Drop DTR and RTS on exit (yes/no)
     ________________________________________________

          Leave this "no" if you want to exit {COMMO} and return while
          still connected to a host.  "Yes" will normally cause the
          modem to hang up when exiting.

     ___________________________________________

     {enq=no}       Answer ENQ with ACK (yes/no)
     ___________________________________________

          Some hosts send an ENQ control character (^E) periodically
          and require that the terminal "answer back" with an ACK
          (^F).  Set this item to "yes" only if your host requires
          this.



                   {COMMO} (tm)  User Guide and Reference           29


     ____________________________________________________

     {ncr=}         Macro to execute when carrier is lost
     ____________________________________________________

          Specify a macro label here and {COMMO} will execute the
          macro when carrier detect is lost.  Example:

               {ncr=carrlost}

          IMPORTANT:  This feature is enabled only when a connection
          is made using {COMMO}'s Auto Dialer.  Also, if carrier drops
          while a macro is running or a command window is open (such
          as the Dialing Directory or Capture File Options), the
          carrier lost macro will not activate.

          Be sure that you have your modem configured to provide the
          carrier detect signal.  See Appendix A for modem
          information.

     ______________________________________________

     {aut=pzbr,^xB00}         Auto Receive, Zmodem
     {aut=phbr,^bR}           Auto Receive, HS/Link
     {aut=pmpr,^v^h^vMPt}     Auto Receive, MPt
     ______________________________________________

          The general form of this item is:  {aut=label,string}.  When
          the specified string (up to 32 characters, case ignored) is
          received, the macro will be started.

          These are normally used for automatically starting
          downloads, but may be used to trigger any macro upon
          receiving any string.

          Up to eight Auto Receive Strings may be specified.  Operates
          in Terminal Mode only (use GOLOok/LOOKfor in macros).

          See the section "{COMMO} Auto Receive" for more details.

     ________________________________________________

     {rtr=}    Receive Translate Table initialization
     {str=}    Send Translate Table initialization
     ________________________________________________

          These items are used to place values into the character
          translation tables at program startup and, if desired, to
          turn translation ON.  Multiple receive or send items may be
          present.



                   {COMMO} (tm)  User Guide and Reference           30


          Character translation is used when you wish certain
          characters to be changed into other characters as they are
          received from, or as they are sent to, the remote system. 
          You may also cause received characters to be ignored.

          Examples:

               {rtr=y,7,0,36,156}

                    Turn ON receive translation ("y").

                    Change the bell character (ASCII 7) to null (ASCII
                    0, which will not display).

                    Change the "$" (ASCII 36) to ASCII 156.

               {str=#26,97,65,42,43,#10,48,128}

                    Change 26 consecutive values starting at 97 to
                    consecutive values starting at 65.  This will
                    change all lowercase letters (ASCII 97 to 122) to
                    uppercase letters (ASCII 65 to 90).

                    Change the "*" (ASCII 42) to a "+" (ASCII 43).

                    Change 10 consecutive values starting at 48 to
                    consecutive values starting at 128.  This will
                    change the digits 0 through 9 (ASCII 48 to 57) to
                    ASCII 128 to 137.

                    The ON/OFF state of send translation will not be
                    changed (no "y" or "n" is present).

          A "y", to turn translation ON, must be the first argument,
          if present.  It may be used on any "rtr" or "str" item and
          will apply to all 256 values in either the receive table or
          the send table.  Note that translation defaults to OFF when
          {COMMO} is started.

          Use a PAIR of arguments to change a single value.

          Use THREE arguments to change a range of consecutive values
          to another range of consecutive values.  The "#" operator on
          the first argument specifies the number of values to change,
          followed by the starting values for each range.

          The macro functions RTRAn and STRAn have similar argument
          lists.  In addition they allow you to restore each Translate
          Table to default values and to turn translation ON and OFF
          without disturbing the values in the tables.  See the Macro
          Programming Guide for more details.



                   {COMMO} (tm)  User Guide and Reference           31


     _________________________________________

     {com=1,3f8,4}       Com1 port address/IRQ
     {com=2,2f8,3}       Com2 port address/IRQ
     {com=3,3e8,4}       Com3 port address/IRQ
     {com=4,2e8,3}       Com4 port address/IRQ
     _________________________________________

          These are the hardware serial port base address and IRQ
          assignments.  The settings shown are the most common, but
          some serial adapters are different.  The serial adapter
          manual may give a range of addresses, for example "3f8-3ff." 
          Use the first value as the base address.

     __________________________________________

     {abd=no}       AutoBaud Detect on (yes/no)
     __________________________________________

          Determines the initial state of the AutoBaud toggle.  See
          "AutoBaud Detect" under "[Alt-T]  Set Toggles."

     _________________________________________________________________

     {cdm=yes}      Clear dialing marks when saving directory (yes/no)
     _________________________________________________________________

          If this is "yes", dialing marks will not be written to disk
          when saving the Dialing Directory file.  Set it to "no" if
          you wish the marks to be saved with the file (to be used in
          the next session).

          Note that changes to dialing marks (mark or unmark) will not
          cause the file to be saved upon exit from {COMMO}.  If no
          other changes occur (such as Date Last Called), you must use
          Alt-F in the Internal Editor to save the marks.

     _______________________________________________

     {set _dialpf,ATDT }      Default Dialing Prefix
     {set _dialsf, |}         Default Dialing Suffix
     _______________________________________________

          These reserved variables define strings that will be used to
          create the modem dialing command.  The prefix, telephone
          number and suffix will be strung together in that order and
          sent to your modem when you dial.

          Any number of additional prefixes and suffixes may be used
          by including variables in the telephone number string (see
          "[Alt-D]  Dialing Directory" for details).



                   {COMMO} (tm)  User Guide and Reference           32


          Use "ATDP" if you don't have a tone line.  Use "ATDT9," to
          get an outside line on a switchboard.  The suffix is usually
          just a carriage return (|).  Your modem manual has
          additional tips on dialing prefixes and suffixes.

     _______________________________________________

     {dct=45}       Dialing cycle time-out (seconds)
     _______________________________________________

          The maximum time to wait before hanging up and redialing. 
          Adjust if your modem needs more time to complete a call.

     _______________________________________________________

     {idt=2}        Delay between dialing attempts (seconds)
     _______________________________________________________

          Amount of time to wait between dialing attempts.  Adjust to
          give incoming calls a greater chance of getting through.

     ______________________________________________________________

     {set _dialsr,CONNECT}              Dialing success response(s)
     {set _dialfr,BUSY,NO CARRIER,NO DIALTONE}
                                        Dialing failure response(s) 
     ______________________________________________________________

          These reserved variables each define a list of response
          codes that can be found in your modem manual.  Do not
          include the speed in the CONNECT response if you are
          enabling AutoBaud.

          Some modems use a CARRIER response to indicate the modem
          speed, e.g. CARRIER 2400.  Using this instead of CONNECT
          will improve the accuracy of the Usage Log.  In order to
          avoid confusion with a NO CARRIER response, you should use:

           {set _dialsr,CARRIER }    Notice the space after CARRIER.

          Responses are case sensitive.  There should be no null
          strings or extra spaces.



                   {COMMO} (tm)  User Guide and Reference           33


     _____________________________________________________

     {set uldir,c:\commo}          Path to find uploads
     {set dldir,c:\commo}          Path to place downloads
     _____________________________________________________

          These variables are used in some of the macros in COMMO.MAC
          and SAMPLES.MAC, primarily in the Uploading and Downloading
          macros.  They are not reserved variables, so you may change
          their names.

     _______________________________________________________________

     {set dszprog,DSZ.COM}    Name of program in DSZ family that you
                              have (DSZ.COM, GSZ.EXE or DSZ.EXE)
     _______________________________________________________________

          This variable is used in macros that require an Omen
          Technology external protocol driver program.  Just enter one
          of the three programs shown and all of the Zmodem and Ymodem
          macros will use it (including the MOSTHOST).

     _________________________________________________________

     {set _uselog,c:\commo\commo.log}   Pathname for Usage Log
     _________________________________________________________

          This is a reserved variable that tells {COMMO} where to find
          your Usage Log.  The Usage Log keeps a record of the calls
          you make.  If a valid pathname is specified, entries will be
          made when:

               1) You connect to a system.
               2) You transfer a file using an internal protocol.
               3) You disconnect (or exit {COMMO}).

          IMPORTANT!  In order for the log to function properly your
          modem must be set to provide "true carrier detect" (see
          Appendix A).

          Use a null pathname or remove this item to disable the Usage
          Log.  A null pathname would look like this:

               {set _uselog}

          The Usage Log should be disabled when you are connecting
          directly to another computer (with a null modem cable).

          Specify the same log file as your external protocol driver
          (e.g., DSZ.LOG or MPT.LOG) and you will have a complete
          record of your calls, including upload/download statistics.



                   {COMMO} (tm)  User Guide and Reference           34


          If a filename only (no path) is specified, the current
          directory will be used.  The pathname of an open Capture
          File is not allowed.

          See also Appendix F "Usage Log Format."

     _______________________________________________________

     {cap=c:\commo\commo.cap}      Pathname for Capture File
     _______________________________________________________

          This is the initial setting for the Capture File pathname. 
          It may be changed later with the Alt-1 key command or with
          the CAPTure macro function (do not try to change the "_cap"
          built-in variable with SETV).

          If a filename only (no path) is specified, the current
          directory will be used.

          See also "Capture File Options."

     ____________________________________________________________

     {scr=c:\commo\commo.scr}      Pathname for Screen Image File
     ____________________________________________________________

          This is the initial setting for the Screen Image File
          pathname.  It may be changed later with the Alt-I key
          command, with the SCREen macro function, or from within the
          Scrollback Buffer window (do not try to change the "_scr"
          built-in variable with SETV).

          If a filename only (no path) is specified, the current
          directory will be used.  The pathname of an open Capture
          File is not allowed.

          See also "Screen Image Save" and "Scrollback"

     ________________________________________________

     {ebl=yes}      Expand blank lines (yes/no)
     {slf=yes}      Strip outgoing linefeeds (yes/no)
     {pac=}         ASCII Upload pacing character
     ________________________________________________

          These items are used with the ASCII Upload feature.

          Blank line expansion sends a space and a carriage return,
          instead of just a carriage return for lines with no data. 
          This prevents BBS line editors from terminating prematurely.



                   {COMMO} (tm)  User Guide and Reference           35


          Stripping linefeeds gives the data the appearance of being
          entered manually.  Linefeeds should not be stripped when the
          remote is not in "edit" mode.

          The pacing character shown is null (no pacing).  To use a
          ":" for pacing, change the item to

               {pac=:}

          See "ASCII Upload" for more details.

     __________________________________

     {mac=}         Startup macro label
     __________________________________

          This item indicates a macro to run when {COMMO} starts up. 
          The command line switch "/:" can be used to override it. 
          See "Command Line Options."

          Example:  {mac=begin}.

     _______________________________________________

     {edd=no}       Enter Dialing Directory (yes/no)
     _______________________________________________

          If this is set to "yes" the Dialing Directory will be
          entered when {COMMO} is started (if no Dialing Strings or
          Startup Macro are present on the command line).

     _____________________________________

     {loc=no}       Local Echo on (yes/no)
     _____________________________________

          If this is set to "yes" Local Echo will be on when {COMMO}
          is started.  See also "Alt-T  Set Toggles."

     ______________________________________

     {sts=yes}      Status Line on (yes/no)
     ______________________________________

          If this is set to "yes" the Status Line will be on when
          {COMMO} is started.



                   {COMMO} (tm)  User Guide and Reference           36


     ________________________________________

     {sig=no}       Signal Lights on (yes/no)
     ________________________________________

          If this is set to "yes" Signal Lights will be on when
          {COMMO} is started.

     _________________________________________

     {cpf=no}       Capture File open (yes/no)
     _________________________________________

          If this is set to "yes" Capture will be open when {COMMO} is
          started.  See "Capture File Options."

     ____________________________________________________

     {cpm=screen}        Capture Mode (screen/filter/raw)
     ____________________________________________________

          See "Capture File Options" for a description of each mode.

     __________________________________________________

     {tek=no}       Test for enhanced keyboard (yes/no)
     __________________________________________________

          Set this to "yes" if your system supports the enhanced (101
          key) keyboard.  This will enable you to assign F11, F12 and
          a number of other keys to your macros.  See Appendix A
          "Table of {COMMO} Key-labels" in the Macro Programming
          Guide.

     ____________________________________________________________

     {tsn=yes}      Display time of day with System Name (yes/no)
     ____________________________________________________________

          If this is "yes" the time of day will be displayed on the
          right side of the Status Line.  Set this to "no" if you want
          the System Name given more space.  Note that this has no
          effect when the Signal Lights are displayed.

     _______________________________________

     {snd=yes}      Master Sound on (yes/no)
     _______________________________________

          If this is set to "yes" sound will be on when {COMMO} is
          started.  If "no" all sounds will be silenced. 



                   {COMMO} (tm)  User Guide and Reference           37


     ________________________________________________

     {dca=yes}      Dialing connection alarm (yes/no)
     ________________________________________________

          Controls the alarm that signals a connection when Auto
          Dialing is used.  The alarm will not be sounded when a valid
          Linked Macro is specified in the Dialing Directory.

     ___________________________________________________

     {afa=yes}      ASCII Upload finished alarm (yes/no)
     ___________________________________________________

          Controls the alarm that signals completion of an ASCII
          Upload.

     ______________________________________________________

     {ers=yes}      Make sounds on errors/warnings (yes/no)
     ______________________________________________________

          This controls the special sounds made for certain errors and
          warning messages.

     ____________________________________________________

     {rng=3}        Maximum number of alarm rings (1-999)
     ____________________________________________________

          Sets the number of times the alarm will ring.  You may press
          a key at any time to stop the alarm.

     _________________________________________________________

     {sbs=10}       Scrollback buffer size in kilobytes (0-64)
     _________________________________________________________

          The actual minimum size of the buffer (which {COMMO} will
          compute) depends on the number of screen lines and columns. 
          For a 25x80 screen it will be about 4k bytes -- it will be
          larger for screens with more lines and/or columns.  This
          includes room to save the current screen.

          Setting the size to 0 disables the Scrollback feature.  See
          also "Scrollback."



                   {COMMO} (tm)  User Guide and Reference           38


     ______________________________________________________________

     {adn=no}       Auto-detect number of rows and columns (yes/no)
     ______________________________________________________________

          {COMMO} will support 25 to 127 rows and 80 to 255 columns on
          the display, but you MUST set the display into the proper
          mode before starting the program (EGA/VGA adapters usually
          come with utilities to set modes such as 50x80, 44x132,
          etc.).

          Set this item to "yes" if you want {COMMO} to automatically
          obtain the current number of rows and columns from the
          system.  Most systems provide this information.  If the
          display is unsatisfactory, you may have to set it to "no."

          NOTE:  The cursor may not display properly in 43 line mode. 
          This is a problem with some EGA adapters.

     ________________________________________________________

     {ucw=18}       Number of lines in upper Chat Mode window
     ________________________________________________________

          This allows you to adjust the line "split" in Chat Mode. 
          The minimum number of lines in the upper or lower window is
          three.

     _______________________________________________________________

     {swe=no}       Send when Enter is pressed in Chat Mode (yes/no)
     _______________________________________________________________

          If "no" {COMMO} will send each character as you type it.  If
          "yes" {COMMO} will wait until you press Enter, then send all
          that you have typed.

     _________________________________________________

     {sfi=no}       Speech Friendly Interface (yes/no) 
     _________________________________________________

          If this is "yes" {COMMO} will be much friendlier to users
          with speech synthesizer boards (these enable blind users to
          read the computer display).  Terminal Screen data and many
          error and information messages will be displayed using the
          BIOS.  Also, the up and down arrow keys move the cursor
          instead of scrolling the screen in windows such as Online
          Help, Scrollback and View String Variable Space.



                   {COMMO} (tm)  User Guide and Reference           39


     ______________________________________________________________

     {bsc=no}       Use BIOS for Terminal Screen scrolling (yes/no)
     {sno=no}       Snow checking on CGA adapter (yes/no)
     ______________________________________________________________

          Change these video parameters only if necessary.

          o    BIOS scrolling enables external scrollback programs to
               work, but is slower and may cause "flicker" in certain
               displays.

          o    Snow checking will also slow the display, but will help
               to eliminate the "snow" effect on CGA monitors.

     ______________________________________________

     {ema=no}       Enable mono attributes (yes/no)
     ______________________________________________

          If this is "no" the default mono attributes will be used, no
          matter what colors are set in the following items.  Set it
          to "yes" if you want to set your own monochrome attributes
          (high intensity, reverse video, underline, etc.).  This has
          no effect on color displays.

     _________________________________________

     {tsc=07}       Terminal Screen colors
     {slc=17}       Status Line colors
     {fwt=17}       File window text colors
     {fwb=70}       File window border colors
     {fws=3f}       File window cursor colors
     {swt=70}       Small window text colors
     {swb=17}       Small window border colors
     _________________________________________

          Press F7 while editing the Setup File to pop up the color
          chart.  You may use it with color or monochrome displays.

          NOTE:  For the most accurate ANSI-BBS or VT102 terminal
          emulation, the Terminal Screen colors should be set to {07}. 
          In many cases, {COMMO} uses this color when clearing
          portions of the screen or when a "reset attributes" sequence
          is received from the host.

          "File windows" are full-screen windows such as the Dialing
          Directory, Macro File, Scrollback Buffer, etc.  "Small
          windows" are the pop up windows such as Capture File Options
          or ASCII Upload.



                   {COMMO} (tm)  User Guide and Reference           40


          Colors should be set so that the different parts of the
          screen contrast with each other.  For example the Status
          Line should be easily discernable from the rest of the
          Terminal Screen.  And the borders and Selector Bar should
          stand out against the text portion of the file windows.


     (End of Setup File items)


     =================
     [Alt-H]   Hang Up
     =================

     Disconnects the call by dropping DTR.  This will put the modem
     "on-hook" if response to DTR is enabled (see Appendix A).  If
     your modem does not respond properly, you may define a macro to
     send a "hang-up" command.  For modems using the "AT" command set
     the macro would look like this:

        {alh} {send ~~~+++~~~ATH|} {}    Press Alt-H to hangup
        
     Of course, you may assign this macro to any key you like.


     ===========================
     [Alt-I]   Screen Image Save
     ===========================

     The Screen Image Save is used to append all of the text currently
     on the screen to a disk file.  This is sometimes handier than
     repeatedly opening and closing the Capture File.

     TIPS on using Screen Image Save:

     >    The pathname may not be the same as the pathname of an open
          Capture File.

     >    If the file cannot be opened, the old pathname is retained.

     NOTE:  The current Screen Image Save file is also used to save
     blocks of text in the Scrollback feature.

     See also "Capture File Options" and "Scrollback."



                   {COMMO} (tm)  User Guide and Reference           41


     ====================
     [Alt-K]   Scrollback
     ====================

     Scrollback allows you to see what was previously on your screen. 
     Screen data is saved to a memory buffer (the size is defined in
     the Setup File).  Set the size to 0 to disable the feature
     entirely.

     A number of commands are available in Scrollback:

     1)   You may navigate as in the Online Help file -- scroll
          up/down, page up/down, beginning/end of buffer, etc.

     2)   Use the String Search feature available in all {COMMO} file
          windows.

     3)   Change the Screen Image Save pathname.

     4)   Write any part of the Scrollback buffer to the current
          Screen Image Save file.

     5)   Exit and return to the same place the next time you call
          Scrollback.

     6)   Jump directly to the Dialing Directory or Macro Processor
          windows.


     =========================
     [Alt-M]   Macro Processor
     =========================

     The Macro Processor executes {COMMO} macros which are resident in
     memory.  Macros are loaded at program startup from a Macro File
     (the default is COMMO.MAC, but an alternate file may be loaded
     using the "/m" command line switch).  A new Macro File can be
     loaded at any time using the MACLoad macro function.  The Macro
     File is maintained with the Internal Editor.

     IMPORTANT:  Only macros resident in memory may be executed.

     The Macro Programming Guide shows you how easily you can automate
     program operations, link to external protocols (used for
     Uploading/Downloading), assign keys and perform a myriad of other
     functions.

     See Online Help for details on operations within the Macro
     Processor window.



                   {COMMO} (tm)  User Guide and Reference           42


     ==============================
     [Alt-N]   Multi Number Dialing
     ==============================

     Any number of entries may be "marked" in the Dialing Directory,
     then automatically dialed in sequence until a connection is
     established.  Multi Number Dialing may be initiated in one of
     four ways:

     1)   Bring up the Dialing Directory window with Alt-D, then move
          the Selector Bar to each desired entry and press [Space]
          (repeat the procedure to unmark an entry).  Press Alt-N to
          begin dialing at the location of the Selector Bar.

     2)   Specify entries with Dialing Strings on the command line
          used to run {COMMO} (see "Command Line Options").  Specified
          entries will be marked and dialed in sequence when {COMMO}
          is started.

     3)   Specify entries with Dialing Strings in a macro, using the
          MARK function.  Refer to the Macro Programming Guide.

     4)   Press Alt-N from the Terminal Screen.  Dialing of marked
          entries will resume with the next system in the sequence.

     See also "[Alt-D]  Dialing Directory" and the DIAL function in
     the Macro Programming Guide. 


     ==========================================
     [Alt-O]   Send Modem Initialization String
     ==========================================

     Pressing Alt-O at any time from the Terminal Screen will cause
     the Modem Initialization String to be sent to the modem (if one
     is defined).  This is useful if your modem was powered off or if
     the modem setup was changed.


     =================================
     [Alt-P]   Set Terminal Parameters
     =================================

     The Terminal Parameters affect the transmission of data to and
     from your computer.  They are usually displayed or defined with a
     string.  For example:

               {2400,8n1,1,A,0}    Speed,format,port,terminal,delay.

     {COMMO} keeps two complete sets of Terminal Parameters:



                   {COMMO} (tm)  User Guide and Reference           43


          1)   The Current Parameters as shown on the left side of the
               Status Line.

          2)   The Default Dialing Parameters.  These will be set each
               time a number is dialed unless overridden by parameters
               in the Dialing Directory.


     Parameter Descriptions
     ======================

          _____

          Speed
          _____

     The rate at which data travels between your computer and your
     modem (or remote system if no modem is used).  It is specified as
     "bits per second" or "bps."  Allowable values are 300, 600, 1200,
     2400, 4800, 9600, 19200, 38400, 57600, 115200.  These may be
     abbreviated to the first two characters in Serial Port Parameter
     strings.

     See "AutoBaud Detect" for more information on setting the Speed.

          ___________

          Data Format
          ___________

     This consists of three parts.  Allowable values are:

          character length:   7, 8
          parity:             [n]one, [e]ven, [o]dd, [m]ark, [s]pace
          stop-bits:          1, 2

     Examples:

          7o2       7 bit characters, odd parity, 2 stop bits
          8m1       8 bit characters, mark parity, 1 stop bit

     The most common formats, "8n1" and "7e1", may be abbreviated to
     "8" and "7" in parameter strings, such as:

          {2400,8,1,A,0}



                   {COMMO} (tm)  User Guide and Reference           44


          ___________

          Serial Port
          ___________

     The channel your computer uses to talk to the outside world.  May
     be 1, 2, 3 or 4 (for Com1, Com2, Com3 or Com4).

     NOTE:  PCjr users without the internal modem should specify Com2.

          _______________________

          Terminal Emulation Type
          _______________________

     {COMMO} supports the following terminal types:

          ANSI-BBS  (A)  For calling most bulletin board systems.
          VT102     (V)  For calling certain mainframes and online
                         services.
          TTY       (T)  For turning off almost all control functions
                         (lets you see ANSI control sequences).
          TTY(40)   (H)  HP 95LX version only.  Wraps terminal lines
                         at 40 columns.  Use when the host cannot be
                         configured for 40 columns.

          _____________________

          Inter-Character Delay
          _____________________

     This factor defines the amount of delay to insert between
     characters transmitted by the SEND macro function and by ASCII
     Upload.  Use only when the remote is too slow to process the data
     (drops characters).

     Each unit is about 5 thousandths of a second (5 ms) on a 4.77 MHz
     XT class machine.  Faster machines require higher values -- on a
     12 MHz AT each unit will only be about 1 ms.

     For example, to delay 20 ms between characters (50 cps) use a
     factor of:

                4 on 4.77 MHz XT
               16 on 12 MHz AT
               27 on 20 MHz 386

     The factor will also vary when you use multi-tasking software, so
     adjust as necessary.  The maximum delay allowed is one second.



                   {COMMO} (tm)  User Guide and Reference           45


     Setting Terminal Parameters
     ===========================

          __________________________

          With the Alt-P Key Command
          __________________________

     Alt-P may be used at any time to change the Current Parameters or
     the Default Dialing Parameters.  Remember that Current Parameters
     will be reset to the Default Dialing Parameters whenever dialing
     begins.

          ________________________

          In the Dialing Directory
          ________________________

     Serial Port Parameters may be specified in a Dialing Directory
     entry to override the Default Dialing Parameters.  Specify only
     values that are different.  For example:

          {,,3,V}   A different serial port and terminal emulation is
                    required for this call.

          {,8o2}    Unusual format required.

          __________________________________________

          Using the Macro functions PARMs and DPARms
          __________________________________________

     Use these to set parameters during macro execution.  See the
     Macro Programming Guide.


     ======================
     [Alt-S]   Shell to DOS
     ======================

     When you Shell to DOS {COMMO} remains resident in memory and you
     may perform any DOS functions as you normally do.  Since {COMMO}
     is small in size, most of your memory is available when you use
     this key command.



                   {COMMO} (tm)  User Guide and Reference           46


     =====================
     [Alt-T]   Set Toggles
     =====================

     This key command is used to set a number of miscellaneous toggle
     (yes/no) parameters.  Some take effect while you are still in the
     Set Toggles window -- others when you exit the window.

     Some of the toggles will be described here.  The others are
     detailed in their respective sections of this document.


     Sound Control Toggle
     ====================

     This is the Master Sound Control toggle.  When sound is OFF all
     alarms, sounds and beeps will be silenced.  Alarms are
     individually controlled with items in the Setup File and with the
     "A" switch in EXECute macro functions.


     AutoBaud Toggle
     ===============

     AutoBaud Detect enables {COMMO} to automatically adjust to the
     line speed of the system you are calling.  You won't have to hang
     up and call back when you get the wrong speed.

     TIPS on using AutoBaud:

     >    Your modem must be set to return the connection speed
          responses such as "CONNECT 1200" (see Appendix A "Setting Up
          Your Modem").

     >    The Default Dialing Speed in the Setup File should be set to
          your modem's highest speed.

          ____________________

          Most 2400 bps modems
          ____________________

     Toggle AutoBaud Detect to the ON state.  Set the Default Dialing
     Speed in the Setup File to 2400.  The following modem responses
     will cause the indicated actions:

          CONNECT 2400  -->  serial port remains at 2400 bps
          CONNECT 1200  -->  serial port adjusted to 1200 bps
          CONNECT       -->  serial port adjusted to 300 bps



                   {COMMO} (tm)  User Guide and Reference           47


          _________________

          High-speed modems
          _________________


     Most high-speed modems require that the serial port be "locked"
     at 19200 bps or 38400 bps.  The modem will then automatically
     adjust to the line (modem-to-modem) speed.  In this case AutoBaud
     must be turned OFF to prevent {COMMO} from changing the serial
     port speed.

     IMPORTANT!  Check your modem manual for details.


     Local Echo Toggle
     =================

     Local Echo (sometimes called half-duplex) is normally used when
     you connect to a host that does not echo what you type.  {COMMO}
     will assume that the host is sending a linefeed with each
     carriage return.

     Typed characters will be displayed directly to the screen.


     Signal Lights Toggle
     ====================

     Turns ON/OFF the "modem lights" display on the Status Line. 
     Shows the state of the RS-232C signals, including send and
     receive.

     This toggles the right half of the Status Line from the System
     Name to the Signal Lights Display.  See "What is on the Status
     Line" in Online Help for a complete description of the Status
     Line indicators.


     ======================
     [Alt-U]   Utility Menu
     ======================

     The Utility Menu is supported by a macro in COMMO.MAC.  It
     contains a selection of features created by {COMMO} macros.

     Example features include:

          Edit any external text file less than 64k in size.
          Run any macro by name (label).
          Run the host mode macro, MOSTHOST.MAC.
          Edit the host mode macro.



                   {COMMO} (tm)  User Guide and Reference           48



     NOTE:  The Utility Menu will not be available when another Macro
     File has been loaded by the MACLoad macro function.


     ===============================
     [Alt-W]   Send Current Password
     ===============================

     Each entry in the Dialing Directory can have its own Password
     String.  After dialing a number, the Alt-W key command will send
     the current Password String to the remote system.

     For additional details on Passwords see "[Alt-D]  Dialing
     Directory."


     ===========================
     [Alt-X]   Exit from {COMMO}
     ===========================

     This key command will cause {COMMO} to terminate, saving all
     support files with outstanding changes.

     You may configure {COMMO} to leave DTR high when exiting so that
     you may exit and remain connected to a system (this is the
     default, see "[Alt-G]  Edit Setup File").

     If you re-enter {COMMO} while still online you should use the
     "/in" command line switch to prevent the Modem Initialization
     String from being sent.

     Alt-X may also be pressed from the Dialing Directory, Macro File
     or Scrollback windows for a quick exit.


     ==============================
     [Alt-1]   Capture File Options
     ==============================

     When Capture is OPEN all information written to your screen will
     be saved to the designated disk file.  This command allows you
     to:

          1)   OPEN/CLOSE the Capture File.
          2)   Change to a different file.
          3)   Change the Capture Mode.

     Data may be captured in one of three modes.  The startup Capture
     Mode is selected in the Setup File.



                   {COMMO} (tm)  User Guide and Reference           49


          If the mode is set to SCREEN, data will be captured exactly
          as it appears on the Terminal Screen.  This mode greatly
          improves the appearance of data captured from screens drawn
          with ANSI positioning sequences (animation).

          FILTER mode is used primarily when you need to capture lines
          longer than the width of the screen (e.g., to be printed on
          a wide carriage printer).  ANSI control sequences will be
          stripped out if ANSI-BBS or VT102 emulation is on. 
          Characters will be translated if the receive Translate Table
          is on.

          Use RAW mode when you want all data captured exactly as it
          comes from the serial port.  ANSI control sequences will not
          be stripped and length of lines will be preserved.  This
          mode can be used to capture ANSI animation and color to be
          "played back" later.

     TIPS on using the Capture File:

     >    IMPORTANT!  When capturing to a floppy drive, the diskette
          should not be removed until the Capture File is closed (this
          also applies if the "disk full" message appears).  DOS is
          unaware of a disk change and may overwrite the replacement
          disk.

     >    The old file will be closed if a new file is opened.

     >    If Capture Mode is set to SCREEN, text will be saved as it
          scrolls OFF the screen.  To prevent loss of data, the entire
          screen will be saved in the following situations:

               (1) whenever the screen is cleared
               (2) Capture is closed with Alt-1
               (3) {COMMO} is terminated
               (4) the mode is changed from SCREEN to FILTER or RAW

     >    If Capture Mode is set to FILTER or RAW, text will be saved
          as it arrives from the serial port.

     See also "Screen Image Save."


     ==========================
     [Alt-2]   Print Log Toggle
     ==========================

     Turns the Print Log ON/OFF.  When ON all information written to
     your screen will be printed to LPT1.  Handy for getting hard-copy
     of file lists, messages, etc.

     TIPS on using the Print Log:



                   {COMMO} (tm)  User Guide and Reference           50



     >    Text is printed as it scrolls OFF the screen.

     >    To prevent loss of data, the entire screen will be printed
          in the following situations:

               (1) whenever the screen is cleared
               (2) Print Log is turned off with Alt-2
               (3) {COMMO} is terminated

     >    Flow Control should be used if your printer cannot keep up
          with the incoming data (see Appendix C).


     ==========================
     [Alt--]   Chat Mode Toggle  (Alt minus)
     ==========================

     Chat Mode is normally used when you wish to converse via
     keyboard. The screen will be split with the upper portion showing
     what the remote is sending, while the lower portion shows what
     you type.

     The method used to send typed characters is selected in the Setup
     File under the section "Video and Chat Mode."  The two possible
     methods are:

          1)   Each character is sent as you type it.  This method is
               normally used when you are chatting with another person
               who is also in Chat Mode.

          2)   All characters are sent at once when you press Enter
               (up to 240 characters will be buffered).  Use this
               method when you are using a teleconferencing system or
               "CB Simulator."

     The number of lines in the upper and lower portions of the screen
     (the "line split") may also be set in the "Video and Chat Mode"
     section.

     TIPS on using Chat Mode:

     >    Alt-- (Alt minus) is used to enter AND exit Chat Mode.

     >    All {COMMO} functions are available in Chat Mode except
          Doorway Mode.



                   {COMMO} (tm)  User Guide and Reference           51


     =============================
     [Alt-=]   Doorway Mode Toggle
     =============================

     Definition: "Extended keys" are function keys, Alt keys, cursor
     keys, etc.  In other words, keys that do not generate ASCII
     characters.

     In Doorway Mode all extended keys will send their key codes to
     the remote (instead of activating {COMMO} functions).  Thus
     Doorway Mode can be used to operate most application software on
     the remote system when used with a host program such as Marshall
     Dudley's Doorway.  In addition some BBS full-screen editors use
     Doorway Mode.

     TIPS on using Doorway Mode:

     >    The Alt-= key is necessarily reserved for exiting Doorway
          Mode and thus cannot be sent to the remote.  Be sure to
          configure remote applications accordingly.

     >    The display should be set to the number of lines expected by
          the host program.  Usually this is 25 lines of text.  If
          your display is not in the proper mode, the results will be
          unpredictable.

     >    The Status Line is normally suppressed in Doorway Mode, but
          may be turned on by using the "S" switch in a macro:

               {:al=} {doorway-s} {}

          The "s" switch is ignored when exiting Doorway Mode and the
          Status Line will be restored to its previous state. 
          Remember that when the Status Line is on, there is one less
          usable line on the Terminal Screen.

     >    If it is necessary to clear the screen or to reset the
          terminal emulation mode parameters when starting Doorway
          Mode, use a macro.  For example:

               {:al=} {clear} {parms ,,,a} {doorway} {}

          This macro will execute when entering or exiting Doorway
          Mode (Alt-= must be used to exit, but any key may be
          assigned to enter Doorway Mode).

     >    For most applications you will want Terminal-Type set to
          ANSI-BBS.  It's a good idea to enter Doorway Mode before
          starting the host program.  The host may send commands to
          initialize the terminal.



                   {COMMO} (tm)  User Guide and Reference           52


     >    If Software Flow Control is enabled, the ASCII character
          values 17 and 19 (XON and XOFF) will not display.  If these
          characters are needed, Software Flow Control must be turned
          off.


     =============================
     [F1]   How to Use Online Help
     =============================

     A summary of {COMMO}'s operations is available by pressing F1. 
     The Online Help support file, COMMO.HLP, must be in the {COMMO}
     home directory or you will get an error message.

     This message will also be issued if there is not enough memory to
     load the Online Help file.  Note that the file is retained in
     memory until {COMMO} requires memory for some other program
     function.  It will automatically be re-read when necessary. 

     Once the Help window is entered you will see the Help control
     keys listed at the bottom of the screen.  At this point you may
     obtain more detailed information about using Online Help by
     typing "H".


     Modifying the Help File
     =======================

     When you are familiar with {COMMO} you may wish to reduce the
     size of the Help File.  Feel free to edit this file -- you can
     even set up your own menu.

     The search keys are in the bars separating the topics.  The
     character following the "T" in the middle of the bar may be
     changed to create your own key.  Keep in mind that the context-
     related Help uses topic characters that cannot be changed.

     The HELP macro function enables you to assign a key to go
     directly to any topic in Online Help.  For example:

               {:cf6} {help J} {}

     will go to topic "TJ" when Ctrl-F6 is pressed.  Use any single
     character as the key (do not include the "T").

     If you change the Help File, remember to keep a backup copy of
     the original.



                   {COMMO} (tm)  User Guide and Reference           53


     ====================================
     [PgUp]/[PgDn]  Uploading/Downloading
     ====================================

     When you press PgUp or PgDn you will be presented with a menu
     from which you may select a file transfer protocol.  Protocols
     provide the ability to transfer any kind of data using error
     correction methods.

     {COMMO} has the Xmodem and Xmodem-1k (old Ymodem) protocols built
     in and provides you with macros to send and receive.  In addition
     the Macro File is pre-configured with macros that execute various
     popular protocol drivers, including DSZ which performs Zmodem,
     Ymodem Batch and Ymodem-G uploads and downloads.

     The PgUp and PgDn menus are implemented using {COMMO}'s powerful
     Macro Processor which enables you to execute internal and
     external protocols easily and seamlessly (see below for details
     on obtaining and installing several of these drivers).

     You may add macros for any other protocol drivers that you need. 
     See the Macro Programming Guide for details on writing macros.


     How to Install External Protocol Drivers
     ========================================

     Protocols such as Zmodem, HS/Link and MPt offer greater
     convenience, speed and reliability.  They include features such
     as:

          1) Automatic startup.
          2) Transmission of file names, sizes and dates.
          3) Batch (multiple file) transfers.
          4) Resuming partial (failed) transfers.
          5) Bi-directional transfers (HS/Link only)

     External protocol "drivers" can be obtained from BBS's and other
     sources.  You can download them using {COMMO}'s internal
     protocols.

     To install DSZ, HS/Link, MPt or OZBEXT, just place the executable
     file (e.g., DSZ.COM, HSLINK.EXE, MPT.EXE, OZBEXT.EXE) in a
     directory which is specified in your DOS path statement.  If you
     don't have a path statement in your AUTOEXEC.BAT file, place the
     executable in your C:\COMMO directory.  In the latter case,
     change to this directory before you start {COMMO}.

     Each of the protocol driver programs has additional features that
     may be useful to you.  Refer to the program's documentation for
     more information.



                   {COMMO} (tm)  User Guide and Reference           54



     Using DSZ or GSZ
     ================

     NOTE:  These are Shareware programs from Omen Technology.  Like
     {COMMO}, they must be registered for continued use (some features
     are not enabled in the unregistered versions).  DSZ may almost
     always be found where you obtained {COMMO} and is usually
     archived as DSZmmdd.ZIP (mmdd is a release date).

     DSZ will transfer files using Zmodem, Ymodem Batch and Ymodem-G.

     The executable file to install is DSZ.COM.

     GSZ is functionally equivalent to DSZ.  In addition GSZ provides
     an attractive graphic display of the file transfer in progress. 
     To use GSZ you need only change one item in the Setup file:

          {set dszprog,GSZ.EXE}

     The executable file to install is GSZ.EXE.


     Using HS/Link
     =============

     HS/Link is a Shareware program that offers very fast file
     transfers.  It also has bi-directional capability for uploading
     and downloading simultaneously with a full-duplex modem (make
     sure the remote system allows this feature before attempting it).

     When you select a download with HS/Link (or if it is started
     automatically, see "Auto Receive"), you will be asked to enter a
     "Filename to Upload" as well.  Just press Enter for download
     only.

     The executable file to install is HSLINK.EXE.


     Using MPt
     =========

     MPt is a Shareware program that transfers files using the MPt
     protocol (similar to Zmodem, but not compatible).  It offers an
     excellent graphic display during file transfers.

     The executable file to install is MPT.EXE.



                   {COMMO} (tm)  User Guide and Reference           55


     Using OZBEXT
     ============

     OZBEXT is a file transfer program for CompuServe users (it is
     available without charge from CIS).  This protocol offers much
     better network throughput than Xmodem.

     OZBEXT will transfer files using the "B" and "B+" protocols.

     The executable file to install is OZBEXT.EXE.


     {COMMO} Auto Receive
     ====================

     This feature will automatically start a macro when a specified
     string is received from the serial port and is normally used for
     starting downloads.

     Up to 8 strings and respective macro labels may be defined in the
     "Terminal and Modem" section of the Setup File.  These are
     preconfigured for the Zmodem, HS/Link and MPt protocol
     "signature" strings, but you may change them or add new ones as
     desired.

     As an example, suppose one of the Auto Receive strings in your
     Setup File is:

               {pzbr,^XB00}        Zmodem Auto Receive

     This means that when the string "^XB00" is received, the macro at
     label "pzbr" will be started.  This string is the Zmodem
     signature string.

     In your Macro File you would have the corresponding macro:

       Z BATCH  {:pzbr} {exec %dszprog port %_por rz -mr %dldir} {}

     {COMMO} will execute the macro as soon as the signature string is
     received (be patient, a BBS may take several seconds to load and
     execute its own protocol program).

     IMPORTANT!  If you have not properly installed the protocol
     program, the message "Bad command or file name" will be
     periodically displayed by DOS.  If this happens type Ctrl-X
     repeatedly until the sender cancels the transfer.

     TIPS on using Auto Receive:

     >    If the macro called by Auto Receive EXECutes a DOS command,
          you may want to use EXECute Preview Mode for preliminary
          testing.  This will allow you to view the command before



                   {COMMO} (tm)  User Guide and Reference           56


          execution and to see the results afterwards.  Preview Mode
          may be toggled on/off using the Alt-T key command.

     >    Auto Receive will not trigger on characters that are
          displayed to the screen while a macro is running.

     >    If you need to download within a macro, you should do a
          LOOKfor to wait for the signature string, then CALL the
          download macro (make sure you have a RETUrn at the end).

     >    Using short strings, such as "^E" for CIS B protocol may
          result in unexpected triggering of the macro.  This is
          because other systems may send the same string for a
          different purpose (to display a "club" symbol, for example). 
          Thus it may be necessary to disable a string at times or to
          discontinue its use.

     >    A string may be disabled by removing the corresponding macro
          label in the Macro File, but this degrades performance since
          the Macro File must be scanned each time a "hit" occurs. 
          Instead, the Setup File item should be removed.

     >    Auto Receive can be set up for protocols that do not send
          signature strings, such as Xmodem, Ymodem, Ymodem-G, etc. 
          Use the prompt that the BBS sends just prior to the file
          transfer.  For example, "Start your Ymodem-G now."  Note
          that different systems may use different prompts.

     >    An Auto Receive string can be used to automatically continue
          Multi Number Dialing after you disconnect (in manual mode). 
          Set one of the strings to:

                    {aut=nocar,^jNO CARRIER^m}

          Then enter a macro in the Macro File:

                    {:nocar} {dial ,} {}

          When your modem sends "NO CARRIER" the macro will start. 
          Multi Number Dialing will resume if any more systems are
          marked in the Dialing Directory.

     See also "TIPS on creating LOOKfor strings" in the Macro
     Programming Guide, under LOOKfor.



                   {COMMO} (tm)  User Guide and Reference           57


     ==========   =====================
     Appendix A   Setting Up Your Modem
     ==========   =====================

     Please be aware that there are many different modems in use and
     that it is of the utmost importance that you configure your modem
     to work correctly with {COMMO}.  A few tips will be given here,
     but they are no substitute for the detailed installation
     instructions in your modem manual!

     When {COMMO} is started, a command string called the Modem
     Initialization String will be sent to the modem.  You must make
     certain that you have the correct string in your Setup File. 
     This string will perform part or all of the modem setup depending
     on the type of modem.  Examples will be given for the most common
     types.

     If your modem is external to your computer, be sure you have
     followed the installation instructions carefully and that the
     cable is connected to the computer's serial port.  It is wise to
     turn off power to the computer and the modem when connecting or
     disconnecting any cables.

     Also check the Default Dialing Parameters in the Setup File. 
     Make sure the serial port number is correct.

          _______________

          1200 bps Modems
          _______________

     Most 1200 bps modems have switches on them which must be set to
     provide the proper interaction with your computer and with
     {COMMO}.  Consult your modem manual concerning these switches and
     pay particular attention to the following:

          1)   Enable command recognition.  Allows the modem to
               recognize commands (dial, set registers, etc.).  Must
               be in the "enable" position or modem will be unusable.

          2)   Send result codes in English.  This switch should be
               set so that the modem will send verbal responses to
               commands instead of numbers.  This is usually
               controlled by a command also (such as ATV1).

          3)   Respond to DTR (data terminal ready).  This should NOT
               be in the "ignore" or "on all the time" position.  This
               switch allows the computer to signal the modem to hang
               up.



                   {COMMO} (tm)  User Guide and Reference           58


          4)   Respond to carrier detect or "allow true carrier." 
               This should NOT be set to the "on all the time"
               position.

     Here is an example Modem Initialization String which will set up
     a 1200 bps modem and override the switch settings (if possible):

          {~AT S0=0 S7=60 E0 Q0 V1 X1 |}

     The most important command to check is the "X" command, since its
     function varies the most from modem to modem.  The "X" command
     determines which responses the modem will generate during dialing
     (e.g. CONNECT, BUSY, etc.).  It may also activate an additional
     modem feature such as automatic redialing which will interfere
     with {COMMO}'s own redialing procedure.

     Your modem manual gives a description for each level of the "X"
     command: X0, X1, X2, ... , etc.  Generally you want to use the
     highest level that does not activate undesirable features.  If
     you will be using {COMMO}'s AutoBaud feature you will need the
     extended connect responses such as CONNECT 1200.  Also the BUSY
     response should be provided if possible.  In any case you should
     modify the Modem Initialization String to work with your
     particular modem.

          ____________________________

          2400, 9600, 14400 bps Modems
          ____________________________

     Most of the information in the section above on 1200 bps modems
     applies to higher speed modems as well.  However, these modems
     usually have software command settings to replace the switches. 
     These commands may be given every time you start {COMMO} or they
     may be permanently remembered by modems which have "non-volatile"
     memory.

     It will be assumed here that the commands are given every time
     you start {COMMO}.  If you wish to place the settings in non-
     volatile memory, consult your modem manual on how to do this. 
     Here is an example Modem Initialization String for most higher
     speed modems:

          {~AT S0=0 S7=180 E0 Q0 V1 X4 &C1 &D2 |}

     See the comments above concerning the "X" command since they
     apply to these modems as well.

     IMPORTANT!  Many modems that operate at 2400 bps and above
     require additional commands to control features such as error
     correction and data compression.  Consult the modem manual for
     details.  Insert these commands into the above string.



                   {COMMO} (tm)  User Guide and Reference           59



     If you need to change the Modem Initialization String, edit the
     Setup File with the Alt-G key command, then restart the program
     to send the string to the modem.


     Answering a call from another computer
     ======================================

     The following information assumes that you are not using the
     MOSTHOST or other {COMMO} host mode macro.  If you use a host
     macro, follow the instructions for installing and operating the
     host.

     There are two easy ways to use {COMMO} to answer when a friend or
     associate calls you by computer.  For best results, make sure you
     are in Chat Mode.  Press Alt-- (Alt minus) to enter/exit Chat
     Mode.

     1)   While in Chat Mode or in the Terminal Screen, wait for the
          phone to ring, then type "ATA<cr>" (upper case is not
          necessary with many modems).  Your modem should answer
          immediately (go off hook) and begin handshaking with the
          remote modem.

          When you see the CONNECT message you are ready to
          communicate.  At this point you can type, send data with
          macro keys, send a text file with ASCII Upload or send any
          file with an external protocol.

          You can use a macro key to send the answer command to the
          modem.  For example, to send it by pressing Alt-W, place the
          following macro in your Macro File.  When the phone rings,
          press F5:

               {nf5} {send ATA|} {}     Answer the phone!

     2)   The other method involves setting your modem into Auto
          Answer Mode.  This method is useful in some situations, but
          will cause the modem to answer whenever the phone rings. 
          This can be undesirable if you get a voice call.

          To set Auto Answer just type "ATS0=1<cr>" (or make "S0=1"
          part of your Modem Initialization String).  This will tell
          the modem to answer on ring "1" (adjust to as many rings as
          desired).  To turn off Auto Answer type "ATS0=0<cr>".  These
          may also be sent with macro keys. 



                   {COMMO} (tm)  User Guide and Reference           60


     Connecting two computers (null modem cable)
     ===========================================

     {COMMO} may be used on a "direct connection" between two
     computers or between a computer and another serial device. 
     Connect the two serial ports with a "null modem" cable.  Then
     start the program on each computer, having selected the
     appropriate Default Dialing Parameters in the Setup File(s).

     The null modem cable should be designed so that the transmit line
     on each end connects to the receive line on the other end.  No
     other signals are needed, but none of the RS-232C signals should
     be left "floating."  They should be tied high or low (or at least
     grounded).

     You may have to disable the Usage Log in the Setup File by
     setting the path to null: {set _uselog}.  The log is triggered by
     changes in Carrier Detect and will slow things down if CD is
     unpredictable.



                   {COMMO} (tm)  User Guide and Reference           61


     ==========   =========================
     Appendix B   {COMMO} and Multi-Tasking
     ==========   =========================

          ________

          DESQview
          ________

     Special care has been taken to ensure that {COMMO} is compatible
     with Quarterdeck Office Systems' DESQview(tm), a multi-tasking
     supervisor.  DESQview allows more than one program to execute at
     the same time.

     A sample Program Information File (CO-PIF.DVP) has been included
     in the {COMMO} package for your convenience.  This file is
     installed as follows:

          1)   Copy the file to your DESQview directory (usually
               C:\DV).
          2)   Run "Add a Program" (AP) from the "Open Window" menu.
          3)   Select "Other."  Specify the DESQview directory as the
               "Path."
          4)   Mark the {COMMO} entry, press Enter.  "CO" should now
               appear on your "Open Window" menu.

     The CO-PIF.DVP file has been set up to define a 150k memory
     window.  The amount of memory actually required is affected by
     the size of your COMMO.FON file, your COMMO.MAC file and the size
     of your Scrollback buffer.

     Test the size of the window by running DSZ, HS/Link, LIST, etc.,
     from the Macro Processor or Shell to DOS.  Be sure to test the
     execution of external programs with a "wait" at the end (or use
     EXECute Preview Mode) so that you can see any error messages (see
     EXEC function).

     CO-PIF.DVP can be changed with the "Change a Program" (CP)
     command on the "Open Window" menu.  You may also want to change
     the directory information or other parameters.

     TIPS on using {COMMO} with DESQview:

     >    For best performance the foreground and background "tick
          counts" should both be 10 or less.

     >    If you switch to another task, do not attempt to access any
          files which may be in use in the {COMMO} window.  Examples
          are the Capture File, the Screen Image File and files that
          may be currently involved in a file transfer (upload or
          download).  The result may be a loss of part or all of the
          data in the file.  This is a general DESQview no-no.  You



                   {COMMO} (tm)  User Guide and Reference           62


          may freely access these files in the Shell to DOS or Macro
          Processor features of {COMMO} (within the same window).

     >    If the memory allocated to the window is too small, {COMMO}
          will not be able to load the Online Help file.  Since the
          Online Help file is loaded only when requested, you needn't
          be concerned if you don't intend to use it.

     >    The video display may seem less smooth in DESQview.  This is
          a result of {COMMO} using the fastest possible display
          method, and is quite normal.  This effect can be reduced by
          specifying fewer clock ticks for foreground and background
          (4 and 4 seems to work well). 

     >    The Snow Checking option should not be used when {COMMO} is
          run under DESQview.  If you see "snow" type interference in
          your CGA display, use DESQview's own snow checking (request
          "synchronized access" in the Setup program).

          ________

          OmniView
          ________

     Display bleed-through may be avoided by telling OmniView that
     {COMMO} "Supports TopView Functions" or by using the "/T" switch
     on the OmniView command line.

     See "TIPS on using {COMMO} with DESQview" in the previous
     section, most of which apply to OmniView as well.

          _________

          DoubleDOS
          _________

     Color displays require the "DISPLAY = TEXT" option in
     DDCONFIG.SYS.  Run {COMMO} in the bottom partition -- about 130k
     to 150k should suffice if you plan to use Online Help and/or
     external protocols.  Increase this size in proportion to the size
     of your Scrollback buffer.

     Some non-multi-tasker-aware, direct-screen-writing programs
     executed with the Macro Processor or Shell to DOS may not display
     properly.  If this happens you may have to run {COMMO} in the top
     partition.

     Use the supplied DBLDANSI.SYS driver in place of your ANSI.SYS
     for running other programs in this partition ({COMMO} doesn't use
     it).



                   {COMMO} (tm)  User Guide and Reference           63


     With this setup you may run any non-graphics program in the top
     partition, including direct screen writers.  

     Monochrome displays require the REFRESH option in DDCONFIG.SYS. 
     Refer to the DoubleDOS user's manual for information on this.

     See "TIPS on using {COMMO} with DESQview" in the previous
     section, most of which apply to DoubleDOS as well.



                   {COMMO} (tm)  User Guide and Reference           64


     ==========   ============
     Appendix C   Flow Control
     ==========   ============

     Flow Control is a signalling system used by communications
     devices to prevent data from being transmitted faster than it can
     be processed by the receiving system.  This is especially
     important when data is transferred at high speeds.

     Flow Control is initialized in the Setup File and is used by
     {COMMO} for both sending and receiving.  You may specify Software
     Flow Control, Hardware Flow Control or both.  Changes may be made
     at any time using the "[Alt-T]  Set Toggles" key command (or with
     the HFLOw and SFLOw macro functions) and will be effective
     immediately.
      
     Software Flow Control uses a control character called XOFF (or
     ^S) to signal the remote to pause.  XON (^Q) is the signal to
     "resume transmission."  This is normally used only for ASCII
     data, since these characters may appear randomly within binary
     data.  An XOFF pause will automatically be released in 20 seconds
     if no XON is received.  It will also be released if you type a
     character in the Terminal Screen.

     Hardware Flow Control uses the RTS/CTS lines in your RS-232C
     (serial port) cable to signal pause/resume without interfering
     with the data.  It should only be used when you are connected to
     a device which also recognizes RTS/CTS Flow Control (such as a
     high-speed modem or another computer connected with a null modem
     cable).  A CTS-off (send) pause will not be released
     automatically.  Turn off Hardware Flow Control (using Alt-T) if
     you need to override it.

     TIPS on using Flow Control:

     >    Your modem must be properly initialized to utilize flow
          control (consult the manual for details).

     >    Since Software Flow Control uses the XOFF (ASCII 19) and XON
          (ASCII 17) characters, these will not display on the screen. 
          If it is necessary to display them, Software Flow Control
          must be turned off.

     >    It is especially important to use Flow Control when the
          Print Log is on, since data is usually received faster than
          it can be printed.  If you type a character to the remote
          during a flow control pause, the remote may begin sending
          again (some systems resume on any character, not just XON). 
          You may have to turn off the Print Log if this happens.



                   {COMMO} (tm)  User Guide and Reference           65


     ==========   ==============================
     Appendix D   ASCII Character Representation
     ==========   ==============================

     Sometimes it is necessary to enter control characters and other
     special characters in the {COMMO} support files or as input to
     {COMMO} key commands.

     For example, a carriage return (typed with the Enter key) is used
     to terminate your typed input.  Therefore a carriage return must
     be represented by some other character (or characters) in order
     to be used as data.

     The process of converting represented characters to actual
     characters is done in many places in {COMMO}.  Some examples are:

          1)   Strings sent to the modem.  These include the Modem
               Initialization String, dialing prefixes and suffixes,
               telephone numbers, the Password String, strings defined
               in macro functions such as SEND, SETLook (prompt
               response), VTCUr and VTPAd.

          2)   Strings defined in other macro functions such as
               LOOKfor, GOLOok, EXECute and DISPlay.

     All control characters may be represented using the (^) caret
     symbol (it is the shift character above the top row "6").  If you
     need to send a caret, use two carets (^^).

     For convenience, two "normal" characters have special meanings in
     certain contexts:

          The vertical bar (|) may be used to represent a carriage
          return.  If you need a vertical bar, use (^|).  In the
          EXECute function the vertical bar is never converted (it is
          used by DOS as the "pipe" symbol).

          The tilde (~) forces a one-half second delay when it is
          encountered in a string that is being sent to the modem.  If
          you need a tilde, use (^~).  This is effective only in
          strings that are sent to the modem.  In other strings the
          tilde is used as a tilde.

     Finally, curly braces { } are very special characters and may not
     be used as data in the support files.  They are represented as
     follows, using parentheses:

          Left curly brace         ^(
          Right curly brace        ^)

     Here is a list of some of the most common control characters and
     how to represent them.  Upper or lower case may be used.



                   {COMMO} (tm)  User Guide and Reference           66



          Carriage return          ^M or |
          Linefeed                 ^J
          Formfeed                 ^L
          Escape                   ^[
          Bell                     ^G
          XOFF                     ^S
          XON                      ^Q
          End of file              ^Z

     Here is a table of all ASCII control characters.  Values are
     decimal:

          0  ... ^@      7  ... ^G      14 ... ^N      21 ... ^U
          1  ... ^A      8  ... ^H      15 ... ^O      22 ... ^V
          2  ... ^B      9  ... ^I      16 ... ^P      23 ... ^W
          3  ... ^C      10 ... ^J      17 ... ^Q      24 ... ^X
          4  ... ^D      11 ... ^K      18 ... ^R      25 ... ^Y
          5  ... ^E      12 ... ^L      19 ... ^S      26 ... ^Z
          6  ... ^F      13 ... ^M      20 ... ^T      27 ... ^[

     ASCII 28 to 31 and those in the extended graphic character set
     (128 to 255), may be typed using the ALT-NUMERIC-KEYPAD method as
     follows:

          1.   Hold down the Alt key (and keep it down).
          2.   Enter the ASCII code in decimal using the numeric
               keypad keys (1, 2 or 3 digits are ok).
          3.   Release the Alt key.



                   {COMMO} (tm)  User Guide and Reference           67


     ==========   ==================
     Appendix E   Terminal Emulation
     ==========   ==================

     Terminal Emulation Type is indicated on the Status Line (in the
     Terminal Parameters string).  Available types are:

          A    ANSI-BBS  Used on bulletin boards and other systems.
          V    VT102     Used on minicomputers and mainframes.
          T    TTY       Supports only the basic control characters.
          H    TTY(40)   HP 95LX version only.  Wraps at 40 columns.

     The Terminal Emulation Type (as defined by the Default Dialing
     Parameter string) will be set whenever a system is dialed.  It
     may be changed temporarily using the Alt-P key command or the
     PARMs macro function.  The Default Dialing Parameters may be
     changed using the Alt-P key command or the DPARms macro function.

     TIPS on using terminal emulation:

     >    Whenever a change is made, a reset of mode parameters will
          be performed.  It is therefore important that the change be
          made BEFORE (or at the time of) connecting with a host (mode
          settings may be transmitted by the host).

     >    If some screens do not look right when VT102 emulation is
          used, you may need to turn LINEWRAP off (it defaults to on).

     >    Linewrap may be turned on/off locally using the DISPlay
          macro function.  Place one of the following in your login
          macro (or assign one of them to a key and execute it
          manually):

                    {display ,,,^[[?7h}      linewrap ON
                    {display ,,,^[[?7l}      linewrap OFF

     >    If colors do not always look right, it may be necessary to
          set the Terminal Screen colors in the Setup File to {07}. 
          See the note under "Colors" in the section "[Alt-G]  Setup
          File."

     >    Using the "H" emulation type with the HP 95LX version will
          cause terminal lines to wrap at 40 columns.  This is useful
          when calling systems that do not support 40 column screens. 
          Note that the basic emulation in this mode is TTY and that
          {COMMO} will not perform word wrapping (i.e., words may be
          split).



                   {COMMO} (tm)  User Guide and Reference           68


     Printer Support
     ===============

     {COMMO} supports the ANSI/VT102 printer functions, controlled by
     the remote system.

          The "Printer ON/OFF" function will turn {COMMO}'s Print Log
          ON/OFF.

          The "Dedicated Printing" function will send all input from
          the serial port directly to the printer.  This allows for
          "transparent" transmission of printer data, including
          control codes.

          The "Print Screen" function will print the entire current
          screen.

     The printer should be on and ready to print when these functions
     are used.  When "Dedicated Printing" is active no characters will
     be displayed on the screen.


     ANSI-BBS Keyboard Support
     =========================

     The sample Macro File is set up so you can use the PC keypad keys
     (arrow keys, PgUp, PgDn, etc.) with most BBS full-screen editors.


     VT102 Keyboard Simulation
     =========================

     Two keyboard files, VT102-1.MAC and VT102-2.MAC, provide support
     to simulate the VT102 keyboard.  You may merge one of these into
     COMMO.MAC if you intend to use VT102 all the time (replace the
     ANSI-BBS keys).  Be sure that you have no conflicting key-labels
     (remember that {COMMO} will use the first occurrence of a key-
     label).

     Or you can use the MACLoad function in your login macro to load
     the VT102 file automatically when you connect to the host.  Use
     the "R" switch to reload COMMO.MAC at disconnect.  For example:

          {macload-r vt102-1.mac}

     Both files support the following PC keypad functions (^ indicates
     the Ctrl key):

               Four cursor (arrow) keys
               Home   - Home cursor
               ^Home  - Insert line
               PgUp   - Page up



                   {COMMO} (tm)  User Guide and Reference           69


               ^PgUp  - Delete line
               PgDn   - Page down
               ^PgDn  - Clear screen
               End    - End of line
               Ins    - Insert mode
               Del    - Delete
               ^bs   -  Ctrl backspace (delete)

     VT102 numeric keypad keys are auto-switched by the host system
     between numeric mode and application mode.

     The four cursor keys are auto-switched between cursor mode and
     application mode.

     These files may be modified to create any keyboard support you
     desire (see description of VTCUr and VTPAd functions in the
     section "{COMMO} Macro Functions."

          ___________

          VT102-1.MAC
          ___________

     This file contains keyboard assignments that work best with the
     enhanced keyboard (because of the separate cursor keys, etc.).

     With Numlock ON the ten digits and period will simulate their
     equivalent VT102 functions.  In addition:

               F1 to F4 simulate PF1 to PF4
               Grey * is used for comma
               Grey - is used for dash
               Grey + is used for Enter

          ___________

          VT102-2.MAC
          ___________

     This file contains keyboard assignments that work best with the
     83-key keyboard (because of the location of the function keys on
     the left side).

     The following diagram shows how the ten function keys (Fn) and
     ten shifted function keys (SFn) relate to the VT102 keypad keys:



                   {COMMO} (tm)  User Guide and Reference           70


          F1=  PF1    F2=  PF2    SF1=  PF3    SF2=  PF4

          F3=   7     F4=   8     SF3=   9     SF4=   -

          F5=   4     F6=   5     SF5=   6     SF6=   ,
      
          F7=   1     F8=   2     SF7=   3     SF8=   Enter

          F9=   0     F10=  0     SF9=   .     SF10=  Enter



                   {COMMO} (tm)  User Guide and Reference           71


     ==========   ================
     Appendix F   Usage Log Format
     ==========   ================

     The {On} and {Off} entries are self-explanatory.

     Here is an example of a file transfer entry:

       {SX} 0  c:\ul\nlbbs.rep  1664  CRC 1024  0 errors 

          {SX}                Send {SX} or receive {RX} with Xmodem.
          0                   Transfer successful (0) or failed (1).
          c:\ul\nlbbs.rep     Pathname of file.
          1664                Bytes transferred.
          CRC 1024            Transfer method.
          0 errors            Total number of errors (corrected if
                              transfer was successful).



                   {COMMO} (tm)  User Guide and Reference           72


     ==========   ==========================
     Appendix G   Error Message Explanations
     ==========   ==========================

     If you get an error message that you don't understand, check
     below for additional information.

     ________________________________

     Sorry, out of memory
     Not enough memory for Scrollback
     ________________________________

          These messages may occur at program startup.  Check the
          following:

          1)   {COMMO} cannot allocate its internal buffers.  You must
               make more memory available.

          2)   {COMMO} cannot load the Dialing Directory and/or Macro
               File.  Try reducing the size of either of these files. 
               Removing comments may help.  Or make more memory
               available.

          3)   {COMMO} cannot allocate the Scrollback Buffer.  Reduce
               its size or make more memory available.

     _______________________________

     Cannot locate command processor
     _______________________________

          This is an unusual condition.  Type "SET" at the DOS prompt
          and be sure there is a "COMSPEC=" in the list.  If there is,
          make sure that COMMAND.COM is in the path specified.

     _______________________

     Not enough memory
     Program file not found
     Unable to execute shell
     _______________________

          A problem was encountered during Shell to DOS or EXEC:

          1)   There may not be enough memory to execute the command
               processor or external program you have specified.

          2)   The program file you specified in an EXECute function
               using the "D" switch cannot be located.  Make sure you
               specify the full path and filename.



                   {COMMO} (tm)  User Guide and Reference           73


          3)   Some other system error condition may exist.  Make sure
               that COMMAND.COM is still available in the "COMSPEC="
               path.

     ___________________________

     Hardware flow control pause
     ___________________________

          Hardware Flow Control is in effect and the remote system (or
          your modem) has requested a pause.  Try waiting a few
          seconds for the pause to clear; if that fails you may have
          to turn off Hardware Flow Control (use Alt-T, Set Toggles).

     _________________________________________

     File space full!  Delete unnecessary text
     _________________________________________

          {COMMO} allows about 65,000 bytes when editing any file (the
          Dialing Directory and Macro File occupy a common file
          space).  This limit may be reached when editing any of the
          files with the Internal Editor.  If this happens you must
          reduce the size of the file in question.  Try removing
          comment lines and any other extraneous information.

          This message may also be the result of loading a resident
          program (TSR) in the Shell to DOS or via the EXEC macro
          function.  Other causes involve a corruption of DOS
          parameters and require rebooting.

     _____________________

     Dial command too long
     _____________________

          The dial command is limited to 128 characters.

     ________________________

     Unable to open file
     Unable to open Help File
     File not found
     Path not found
     Too many files
     ________________________

          Check the following:

          1)   Your "SET COMMO=" command in your AUTOEXEC.BAT file. 
               It may be specifying the wrong directory.
          2)   That the path exists where the file should be.



                   {COMMO} (tm)  User Guide and Reference           74


          3)   That the file itself exists (this won't be the problem
               if the file is being created).
          4)   Too many files may be open.  You may need to increase
               your FILES= parameter in CONFIG.SYS.
          5)   The Online Help File must be less than 64K bytes in
               size.
          6)   You cannot use an open Capture File for any other
               purpose.

     ____________________________________

     Capture File Closed, disk is full!
     Information not saved, disk is full!
     ____________________________________

          The Capture File and Screen Image File should be edited
          regularly to ensure that they are not occupying too much
          disk space.


                              - end -

```
{% endraw %}

## MACRO.DOC

{% raw %}
```








                                ____________

                                {COMMO} (tm)
                                ____________


                   "A New Standard in Telecommunications"









                                     by

                              Fred P. Brucker

                            Post Office Box 9103
                            Santa Rosa, CA 95405






                          Macro Programming Guide




                                Release 5.2

                               March 7, 1992













        (C)Copyright 1989,1992  Fred P. Brucker  All Rights Reserved





     The {COMMO} program and associated on-disk documentation are the
     property of the author and may not be sold without permission. 
     They may be freely distributed, unaltered and as a unit, via
     electronic bulletin board systems.  Permission to distribute on
     diskette or in any other manner must be obtained in writing.  See
     the file LICENSES for additional licensing and distribution
     details.


     The author does not guarantee this program to be free from
     defects and may not be held responsible for loss caused by such. 
     Your use of this program constitutes your acceptance of these
     terms.




     DESQview is a trademark of Quarterdeck Office Systems
     OmniView is a trademark of Sunny Hill Software
     DoubleDOS is a trademark of SoftLogic Solutions, Inc.
     HS/Link is a product of Samuel H. Smith
     DSZ and GSZ are products of Omen Technology Inc.
     MPt is a product of Matthew Thomas
     LIST is a product of Vernon D. Buerg
     The IBM PC is a product of IBM Corp.
     MS-DOS is a trademark of MicroSoft Corp.




        (C)Copyright 1989,1992  Fred P. Brucker  All Rights Reserved



                     ================================
                     {COMMO} Registration Information
                     ================================

  {COMMO} is a "SHAREWARE" product.  You are entitled to evaluate it for
  30 days.  If it suits your needs and you would like to continue using
  it, then you must pay the licensing fee.  Please use the REGISTRATION
  FORM on the next page.

  When you REGISTER you will be licensed to use all future releases of
  {COMMO}.  You will never have to pay an "update" charge.  You will also
  receive instructions for removing the Shareware Notice at program
  startup.

  My (voice) TELEPHONE NUMBER for inquiries and support for registered
  users is (707) 573-1065.  Please restrict calls to business hours
  (Mon-Fri, 9am-5pm, Pacific time).

  Registered users will also receive priority support on Bulletin Boards,
  CompuServe and GEnie (see READ.ME).

  Call or write for pricing information on MULTI-USER (site) and
  DISTRIBUTION licenses.  Discounts are given on quantities greater than
  10.  See the file LICENSES for licensing and distribution details.

  All prices shown are US DOLLARS.  Please remit US FUNDS on US BANK only.
  NET 30 TERMS will be accepted on purchase orders totalling $100.00 or
  more.

  PAYMENT OPTIONS:

  1) Payment by CHECK or MONEY ORDER:  make payable to FRED P. BRUCKER.
     Mail the Registration Form and payment to the address below.

  2) Payment by CREDIT CARD:  fill in the credit card information at the
     bottom of the Registration Form.  The following cards are accepted:

       VISA, MASTERCARD, CARTE BLANCHE, DINERS CLUB, DISCOVER, JCB.

     You can mail the Registration Form to the address below or:

       Order by phone: (707) 573-1065, Mon-Fri, 9am-5pm, Pacific time.
         Have your credit card ready when you call.

       Order by E-mail on CompuServe (71021,356) or GEnie (F.BRUCKER1).
         Upload the completed Registration Form as a message.

     The company name on the charge will be "New Standard Software."


                SEND TO:   Fred P. Brucker
                           Post Office Box 9103
                           Santa Rosa, CA 95405



               {COMMO} 5.2 SINGLE USER REGISTRATION FORM

  Name     _______________________________________________________________

  Company name (if company address)   ____________________________________

  Address  _______________________________________________________________

           _______________________________________________________________

           _______________________________________________________________


  {COMMO} single user license, SPECIAL PACKAGE .... $50.00    $ __________
    Includes: (1) Printed, bound, indexed manual.
              (2) Latest release on diskette plus utilities
                  (COMMOPNS, MOSTHOST, CMC, etc., see READ.ME).

  {COMMO} single user license, with DISKETTE ...... $40.00    $ __________

  {COMMO} single user LICENSE alone ............... $35.00    $ __________

  Registered users may order PRINTED MANUAL only .. $20.00    $ __________
    Limit of one per license.  Your serial no. _________

  Registered users may order DISKETTE only ......... $5.00    $ __________
    Limit of one per license.  Your serial no. _________

  ALL DISK ORDERS -  Choose format: 5.25" ____ 3.5" ____
                     Current (latest) release       ____
                     Next release (when available)  ____

                                                  Subtotal    $ __________

                  California residents add sales tax, 7.5%    $ __________
                    (No tax when ordering license alone)

  Special Package or Manual order, add SHIPPING:
                         USA/Canada/Mexico ......... $3.00
                         All other countries ...... $10.00    $ __________

                                                     Total    $ __________

  Payment method:  Check__  Money order__  Visa__  MasterCard__  PO__
                   Carte Blanche__  Diners Club__  Discover__  JCB__

     CREDIT CARD INFORMATION:

     Card No. ________  ________  ________  ________  Expires ____/____

     Cardholder signature _____________________________________________

     Cardholder name __________________________________________________

     Daytime telephone  (_____) _____ _______



                   {COMMO} (tm)  Macro Programming Guide             5


     ========
     Contents
     ========


     Programming {COMMO} Macros  . . . . . . . . . . . . . . . . .   8
          Macro Structure  . . . . . . . . . . . . . . . . . . . .   8
          Macro Functions  . . . . . . . . . . . . . . . . . . . .   9
          Macro Labels . . . . . . . . . . . . . . . . . . . . . .  11
          Macro Variables  . . . . . . . . . . . . . . . . . . . .  12
          How to Use Variables . . . . . . . . . . . . . . . . . .  13
          Reserved Variables . . . . . . . . . . . . . . . . . . .  14
          Executing Macros . . . . . . . . . . . . . . . . . . . .  15
          Additional Macro Execution Rules . . . . . . . . . . . .  15
          Cancelling a Macro . . . . . . . . . . . . . . . . . . .  16

     Description of Functions (Alphabetical) . . . . . . . . . . .  17
          ABAUd  . . . . . . . . . . . . . . . . . . . . . . . . .  17
          ALARm  . . . . . . . . . . . . . . . . . . . . . . . . .  17
          ASCIiup  . . . . . . . . . . . . . . . . . . . . . . . .  18
          AUTO . . . . . . . . . . . . . . . . . . . . . . . . . .  19
          BEEP . . . . . . . . . . . . . . . . . . . . . . . . . .  20
          BREAk  . . . . . . . . . . . . . . . . . . . . . . . . .  20
          CALL . . . . . . . . . . . . . . . . . . . . . . . . . .  20
          CALOok . . . . . . . . . . . . . . . . . . . . . . . . .  21
          CAPMode  . . . . . . . . . . . . . . . . . . . . . . . .  21
          CAPTure  . . . . . . . . . . . . . . . . . . . . . . . .  22
          CHATmode . . . . . . . . . . . . . . . . . . . . . . . .  22
          CLEAr  . . . . . . . . . . . . . . . . . . . . . . . . .  22
          COMPare  . . . . . . . . . . . . . . . . . . . . . . . .  23
          CURSor . . . . . . . . . . . . . . . . . . . . . . . . .  24
          DECRement  . . . . . . . . . . . . . . . . . . . . . . .  24
          DIAL . . . . . . . . . . . . . . . . . . . . . . . . . .  24
          DISPlay  . . . . . . . . . . . . . . . . . . . . . . . .  26
          DOORway  . . . . . . . . . . . . . . . . . . . . . . . .  27
          DPARms . . . . . . . . . . . . . . . . . . . . . . . . .  27
          EDIT . . . . . . . . . . . . . . . . . . . . . . . . . .  28
          ELAPse . . . . . . . . . . . . . . . . . . . . . . . . .  29
          EXECute  . . . . . . . . . . . . . . . . . . . . . . . .  29
               Using the Direct Switch: exec-D . . . . . . . . . .  31
               EXECute Preview Mode  . . . . . . . . . . . . . . .  31
          EXIT . . . . . . . . . . . . . . . . . . . . . . . . . .  32
          GETString  . . . . . . . . . . . . . . . . . . . . . . .  32
          GOLOok . . . . . . . . . . . . . . . . . . . . . . . . .  34
          GOTO . . . . . . . . . . . . . . . . . . . . . . . . . .  35
          HANGup . . . . . . . . . . . . . . . . . . . . . . . . .  35
          HELP . . . . . . . . . . . . . . . . . . . . . . . . . .  35
          HFLOw  . . . . . . . . . . . . . . . . . . . . . . . . .  35
          HOLD . . . . . . . . . . . . . . . . . . . . . . . . . .  36
          IFCArrier  . . . . . . . . . . . . . . . . . . . . . . .  36
          IFCOndition  . . . . . . . . . . . . . . . . . . . . . .  37
          IFERrorlevel . . . . . . . . . . . . . . . . . . . . . .  38



                   {COMMO} (tm)  Macro Programming Guide             6


          IFEXist  . . . . . . . . . . . . . . . . . . . . . . . .  39
          INCRement  . . . . . . . . . . . . . . . . . . . . . . .  39
          INITmodem  . . . . . . . . . . . . . . . . . . . . . . .  40
          INPUt  . . . . . . . . . . . . . . . . . . . . . . . . .  40
          INSTring . . . . . . . . . . . . . . . . . . . . . . . .  41
          LENGth . . . . . . . . . . . . . . . . . . . . . . . . .  41
          LIGHts . . . . . . . . . . . . . . . . . . . . . . . . .  42
          LOCAlecho  . . . . . . . . . . . . . . . . . . . . . . .  42
          LOOKfor  . . . . . . . . . . . . . . . . . . . . . . . .  42
          MACLoad  . . . . . . . . . . . . . . . . . . . . . . . .  44
          MACRo  . . . . . . . . . . . . . . . . . . . . . . . . .  45
          MARK . . . . . . . . . . . . . . . . . . . . . . . . . .  46
          NOCArrier  . . . . . . . . . . . . . . . . . . . . . . .  47
          NOOP . . . . . . . . . . . . . . . . . . . . . . . . . .  47
          PARMs  . . . . . . . . . . . . . . . . . . . . . . . . .  47
          PASSword . . . . . . . . . . . . . . . . . . . . . . . .  48
          PAUSe  . . . . . . . . . . . . . . . . . . . . . . . . .  48
          POPStack . . . . . . . . . . . . . . . . . . . . . . . .  49
          PRINtlog . . . . . . . . . . . . . . . . . . . . . . . .  49
          PUSHstack  . . . . . . . . . . . . . . . . . . . . . . .  49
          RCLOse . . . . . . . . . . . . . . . . . . . . . . . . .  50
          READ . . . . . . . . . . . . . . . . . . . . . . . . . .  51
          RETUrn . . . . . . . . . . . . . . . . . . . . . . . . .  51
          ROPEn  . . . . . . . . . . . . . . . . . . . . . . . . .  52
          RTRAn  . . . . . . . . . . . . . . . . . . . . . . . . .  52
          RXMOdem  . . . . . . . . . . . . . . . . . . . . . . . .  54
          SCREen . . . . . . . . . . . . . . . . . . . . . . . . .  55
          SCROllback . . . . . . . . . . . . . . . . . . . . . . .  55
          SEND . . . . . . . . . . . . . . . . . . . . . . . . . .  55
          SETEsc . . . . . . . . . . . . . . . . . . . . . . . . .  56
          SETGet . . . . . . . . . . . . . . . . . . . . . . . . .  57
          SETLook  . . . . . . . . . . . . . . . . . . . . . . . .  58
          SETVariable  . . . . . . . . . . . . . . . . . . . . . .  60
          SHELl  . . . . . . . . . . . . . . . . . . . . . . . . .  61
          SFLOw  . . . . . . . . . . . . . . . . . . . . . . . . .  61
          SOUNd  . . . . . . . . . . . . . . . . . . . . . . . . .  62
          SPDCtrl  . . . . . . . . . . . . . . . . . . . . . . . .  62
          SPOCtrl  . . . . . . . . . . . . . . . . . . . . . . . .  63
          STATusline . . . . . . . . . . . . . . . . . . . . . . .  63
          STOP . . . . . . . . . . . . . . . . . . . . . . . . . .  63
          STRAn  . . . . . . . . . . . . . . . . . . . . . . . . .  64
          SUBString  . . . . . . . . . . . . . . . . . . . . . . .  65
          SXMOdem  . . . . . . . . . . . . . . . . . . . . . . . .  66
          TOGGles  . . . . . . . . . . . . . . . . . . . . . . . .  66
          UNMArk . . . . . . . . . . . . . . . . . . . . . . . . .  67
          VTCUr  . . . . . . . . . . . . . . . . . . . . . . . . .  67
          VTPAd  . . . . . . . . . . . . . . . . . . . . . . . . .  67
          WCLOse . . . . . . . . . . . . . . . . . . . . . . . . .  68
          WOPEn  . . . . . . . . . . . . . . . . . . . . . . . . .  68
          WRITe  . . . . . . . . . . . . . . . . . . . . . . . . .  69

     Appendix A   Table of {COMMO} Key-labels  . . . . . . . . . .  70



                   {COMMO} (tm)  Macro Programming Guide             7


          Enhanced Keyboard Key-labels . . . . . . . . . . . . . .  71

     Appendix B   List of Reserved Variables . . . . . . . . . . .  72

     Appendix C   Macro Functions Listed by Class  . . . . . . . .  73



                   {COMMO} (tm)  Macro Programming Guide             8


     ==========================
     Programming {COMMO} Macros
     ==========================

     IMPORTANT!  Please read the next few pages before you attempt to
     write any macros!  The rules for writing {COMMO} macros are few
     in number, but must be followed carefully.  Examples of more
     complex macro programming are given in the sample Macro File
     COMMO.MAC, in the supplied file SAMPLES.MAC and in the Host Mode
     and Guide macros.

     The following sections assume familiarity with {COMMO}'s key
     commands and with other features of the program.  Since many
     macro functions have corresponding key commands, duplicate
     explanations will not be given here.  Refer to the description of
     the key command in the User Guide and Reference.

     {COMMO}'s Macro File may contain any number of macros.  The only
     size limitation on the file is that the Dialing Directory and
     Macro File combined must total 64k bytes or less.

     Macros are "interpreted," which implies the following:

          (1)  Macros are not processed until they are executed.

          (2)  Only macros within the currently loaded Macro File are
               available for use.

          (3)  Macros added or modified with the Internal Editor are
               available immediately.

     Alternate Macro Files may be loaded using the MACLoad function
     (the original file is replaced and may be reloaded at a later
     time).


     Macro Structure
     ===============

     Macros consist of a series of items enclosed in curly braces. 
     Items may be placed on the same line or on as many lines as
     desired.  The file is entirely free-form.  Lines may be up to 255
     characters in length and all text outside the curly braces is
     ignored.

     There are two types of items: "functions" and "labels."

          Functions are action items.  Some are equivalent to {COMMO}
          key commands, such as DIAL, while others are unique to the
          macro language, such as SETVariable.



                   {COMMO} (tm)  Macro Programming Guide             9


          Labels are macro entry points and may be placed anywhere
          within the Macro File.


     Macro Functions
     ===============

     Each macro function is described in detail later in this
     document.  See also Appendix C "Macro Functions Listed by Class."


     The general form of any macro function is:

          {name-switches arg1,arg2,...,argn}

               name      The function name describes the action to be
                         performed and consists of four or more
                         characters. Only the first four are
                         significant and case is ignored.

               switches  These are used to alter the operation of a
                         function.  Each switch is a single letter and
                         may be followed by a numeric value, usually
                         "1" or "0" to indicate "yes" or "no"
                         respectively.

                         Switches have default interpretations when
                         the numeric value is omitted, or when the
                         switch is not present.

                         Switches must be separated from the name with
                         a hyphen (no intervening spaces).  They may
                         be upper or lower case.

                         See individual function descriptions for
                         details (note that only certain functions
                         have switches).

               args      Arguments follow the function name and
                         switches separated by a SINGLE SPACE. 
                         Individual arguments are separated with
                         commas and may contain no extraneous spaces
                         (all spaces are significant).

     NOTE:  Curly braces may be represented within macro functions by
     using ^( for { and ^) for }.

     Examples:

          {send Hi, how are you?}



                   {COMMO} (tm)  Macro Programming Guide            10


               This function sends the string "Hi, how are you?" to
               the modem.  SEND has only one argument -- the string to
               send out.  Since the string is the last argument, it
               may contain commas and spaces.  Quotes are not used to
               define strings.

          {ifcon-LE label1,label2}

               The IFCOndition function tests for conditions set by
               other functions, such as COMPare.  Here two switches
               are present, telling {COMMO} to test for less than or
               equal:

                    L    Test for "less than."
                    E    Test for "equal."

               The two arguments are labels to GOTO depending on the
               conditions.

               Notice that "name-switches" may be written in a number
               of different ways:

                    ifco-LE  ifcondition-EL  ifcond-LE

          {asci-S0E1 pathname}

               The ASCII Upload function will send the file indicated
               by "pathname."  The switches override current settings
               and tell {COMMO}:

                    S0   Do NOT strip linefeeds.
                    E1   DO expand blank lines (may also be written
                         "E").

          {sound}   {sound yes}

               The first function will TOGGLE Master Sound ON/OFF
               (since there is no argument).  The second will turn the
               sound ON.


     One very important function is the STOP function.  It is used to
     terminate macro processing and may appear in either its long form
     or short form:

          ... {stop}          long form
          ... {}              short form

     Macro processing continues until a STOP function is executed.  Be
     sure to use one or processing will continue into the next macro!



                   {COMMO} (tm)  Macro Programming Guide            11


     Macro Labels
     ============

     Labels are identifiers consisting of one or more characters. 
     When a label is defined, it must be preceded by a colon. 
     References to labels, such as {goto label}, do not require the
     colon.

     IMPORTANT!  {COMMO} always searches for labels from the beginning
     of the Macro File.  This means that if a label is duplicated
     within the file, the first occurrence will be used.

     Only the first eight characters in a label are significant.  Case
     is ignored.  All characters are allowed in labels except the
     following:

          colon          ":"
          space          " "
          comma          ","
          slash          "/"
          curly braces   "{" or "}"

     Examples:

          {:mailrun} {call login} ...

          {:start-here} {:another.entry} {send Begin now!} ...


     A number of three character labels are reserved and are called
     "key-labels."  When the corresponding key is pressed from the
     Terminal Screen, {COMMO} will look for the key-label in the
     current Macro File.  If the key-label is found, macro processing
     will begin at that location.

     Any default key assignment may be overridden using a key-label. 
     For example, pressing Alt-D normally enters the Dialing
     Directory.  But suppose this line is in the Macro File:

          {:ald} {clear} {}

     Now pressing Alt-D will clear the screen.

     See Appendix A "Table of {COMMO} Key-labels" for a complete list
     of keys that may be assigned.



                   {COMMO} (tm)  Macro Programming Guide            12


     Macro Variables
     ===============

     {COMMO} maintains a String Variable Space in which variables
     appear in the form:

          name,string

               name      An identifier consisting of one or more
                         characters of which only the first eight are
                         significant.  Case is ignored.  The following
                         are the ONLY valid characters that my be used
                         in a variable name:

                              "A" through "Z"
                              "a" through "z"
                              "0" through "9"
                              "_" underline.

                         All other characters will terminate the name.

               string    A text string.  The string must not contain
                         any control characters below ASCII 28.  Null
                         strings (0 characters) do not appear in
                         variable space.

                         Strings consisting of only the digits 0-9 and
                         representing a decimal number from 0 to 65535
                         are also numeric variables (there is no other
                         difference between string and numeric
                         variables).

                         The maximum length of strings is 240
                         characters.

     The String Variable Space may be viewed from within the Macro
     Processor window by pressing "V".  The amount of unused string
     space is shown at the bottom of the screen.

     Once a variable is defined, it remains in String Variable Space
     until it is redefined or deleted (set to null).  Therefore
     variables should be deleted or re-used to prevent String Variable
     Space from becoming full.



                   {COMMO} (tm)  Macro Programming Guide            13


     How to Use Variables
     ====================

     {COMMO} variables may be used in macro functions and also in the
     telephone number field of the Dialing Directory.  See "Alt-D 
     Dialing Directory" in the User Guide and Reference for this
     latter usage.

     When a variable name appears within a function, the string
     assigned to the name is substituted for the name.  If the
     variable is null, then the name is replaced with 0 characters. 
     {COMMO} will expand the variables in a function before processing
     it.

     In order to distinguish variable names, they must be preceded
     with a percent sign "%" (use two percent signs if a percent sign
     is needed in the data).

     The end of the variable name is indicated with another "%" or
     with the first character that is not allowed in a name (see
     above).


     A variable definition example:

          {setvar animal,Elephant} or {setvar %animal,Elephant}

               Notice that the "%" is not required (but is permitted)
               when the variable name is the first argument of a
               function that defines, modifies or tests the value of a
               variable.  Other such functions include INPUt,
               GETString, INCRement, DECRement, COMPare, SUBString,
               INSTring, READ.

               If the variable name in this situation needs to be a
               variable, then use two percent signs:

          {setv %%animal,Elephant}


     Variable usage examples:

          {setvar animal,Elephant}
          {send %animal}           Sends "Elephant" to the modem.
          {send animal}            Sends "animal".
          {send %animal%s are large animals}
                                   Sends "Elephants are large
                                   animals".  Note that the trailing
                                   "%" is required here.

          {setvar animal,Elephant}
          {setv creature,animal}



                   {COMMO} (tm)  Macro Programming Guide            14


          {send creature}          Sends "creature". 
          {send %creature}         Sends "animal". 
          {setv %%creature,Giraffe}
          {send %animal}           Sends "Giraffe".


     IMPORTANT!  Variables may NOT be substituted within the function
     name or switches.  They may be substituted anywhere else, even
     for the commas separating arguments.


     Reserved Variables
     ==================

     Certain variables have fixed names so that {COMMO} can find them
     whenever they are needed.  The names of these variables begin
     with an underline character "_".  There are two types of reserved
     variables: "user-defined" and "built-in" (see Appendix B "List of
     Reserved Variables" for a complete list).

     USER-DEFINED reserved variables are defined in the same way that
     you define ordinary variables -- in the Setup File using SET, or
     in a macro using functions such as SETVariable, INPUt, etc. 
     These variables define strings used by certain program features. 
     For example, the pathname of the Usage Log is defined in the
     Setup File as follows:

          {set _uselog,c:\commo\commo.log}

     BUILT-IN variables are defined by {COMMO} based on current system
     parameters.  Examples are:

          _cap      Current Capture File pathname
          _tim      Full time, hh:mm xm (am or pm)

     Any variable that starts with the same four characters as a
     built-in variable ("_" plus the next three) will be considered
     the same variable.  For example "_pas" may be written "_password"
     and "_yea" may be written "_year".

     {COMMO} will always search String Variable Space first when
     looking up the value of any variable.  This allows built-in
     variables to be overridden, but only when using their four
     character minimum names.  For example, to override the serial
     port number, you must use "_por", not "_port".

     See Appendix B for a complete list of reserved variables.



                   {COMMO} (tm)  Macro Programming Guide            15


     Executing Macros
     ================

     Macro execution may be started in any of the following ways:

     1)   Open the Macro Processor window by pressing Alt-M.  Position
          the Selector Bar at the desired starting point and press
          [Enter].  The Macro Processor will begin processing at the
          first macro label or function on the line.

          NOTE:  Macros started with the Selector Bar do not need
          macro labels and may be started at any point within the
          macro.

     2)   If a macro label is also a key-label, then you may press
          that key from the Terminal Screen.  Note that if the same
          key-label appears more than once, the first occurrence will
          be used.

     3)   A macro may be linked to a Dialing Directory entry (Linked
          Macro).  In this case {COMMO} will GOTO the macro when a
          connection is established with that system (or optionally
          CALL it, see the DIAL function).

     4)   A startup macro may be specified in the Setup File using the
          "{mac=label}" item.

     5)   A startup macro may be specified on the command line with
          the switch "/:label".  This will override the Setup File
          macro.

     6)   A macro may be an argument of another function such as CALL,
          GOTO, DIAL or SETLook (these are detailed in a later
          section).

     Some macro functions show their current action on the Status Line
     at the bottom of the screen.  In addition, a "face" character in
     the middle of the Status Line indicates that a macro is
     executing.


     Additional Macro Execution Rules
     ================================

     ASCII keys may be typed to the serial port during long functions
     (LOOKfor, GETString, PAUSe, HOLD, etc.).

     The Macro Processor will execute functions in order until one of
     the following conditions occurs:

     1)   A CALL, GOTO, RETURn, STOP, EXIT, etc. is encountered.



                   {COMMO} (tm)  Macro Programming Guide            16


     2)   Control is transferred to an alternate macro from certain
          functions when a special condition occurs.  An example of
          this is the SETLook function.  The alternate will execute
          when a subsequent LOOKfor times out.

     3)   A macro error occurs.  This will bring up the Macro
          Processor window with the Selector Bar on the problem line. 
          The macro will be terminated.

     4)   The end of the Macro File is reached.


     Cancelling a Macro
     ==================

     The [Esc] key is used to terminate macro processing.  To send an
     <esc> code (ASCII 27) to the remote during macro execution
     (without terminating the macro), press Ctrl-[ (Ctrl + left
     bracket).

     Current function execution may be terminated by pressing
     [Ctrl-Break].  For example, this can be used to terminate a
     LOOKfor, PAUSe or HOLD prematurely.  Macro processing will
     advance to the next function.

     If a macro contains a function that brings up a {COMMO} window
     (Dialing Directory, Capture File Options, etc.), then [Esc] will
     exit the window and processing continues with the next function. 
     To terminate macro processing from a window, press [Ctrl-Break].

     NOTE:  The SETEsc function may be used to help prevent accidental
     termination of macros.



                   {COMMO} (tm)  Macro Programming Guide            17


     =======================================
     Description of Functions (Alphabetical)
     =======================================

     The purpose of this section is to show the syntax of each
     function and the meaning of its arguments through examples.  All
     functions are listed here, but details on functions which are
     also default key commands are found in The User Guide and
     Reference under "{COMMO} Key Commands."

     Function names are shown with their four-letter abbreviations in
     uppercase.

     For consistency, the following conventions are used in many
     functions:

          "y" or "yes" is used to indicate "yes", "on",  "open",  etc.
          "n" or "no"  is used to indicate "no",  "off", "close", etc.

     _____

     ABAUd
     _____

     Default key:   none
     Description:   Set AutoBaud toggle.

     Examples:

          {abaud}             Toggle AutoBaud on/off
          {abaud y}           Turn on AutoBaud
          {abaud n}           Turn off AutoBaud

     _____

     ALARm
     _____

     Default key:   none
     Description:   Ring the alarm.

     Examples:

          {alarm}        Ring alarm, use ring count in Setup File.
          {alarm 2}      Ring alarm 2 times.

     {COMMO} will wait until the alarm has stopped ringing before
     proceeding to the next macro function (the alarm may be
     terminated early by pressing a key).



                   {COMMO} (tm)  Macro Programming Guide            18


     _______

     ASCIiup
     _______

     Default key:   Alt-A
     Description:   Upload an ASCII (text) file.

     General form:

          {ASCIiup pathname[\],pace}

               pathname       The complete path and filename (if the
                              path is absent, the current directory
                              will be used). 

                              If a "\" is placed at the end of the
                              pathname, the path will appear as a
                              prompt in the ASCII Upload window.

               pace           The pacing character to be used.

     Switches:

               E1 or E   Expand blank lines.  A space will be sent
                         when a zero-character line is encountered.

               E0        Do not expand blank lines.

               S1 or S   Strip linefeeds from outgoing text.

               S0        Do not strip linefeeds.

                         If a switch is absent, the current setting of
                         the toggle will be used.  The toggles can be
                         set in the Setup File or by using the Alt-T
                         key command.

                         Switches apply to the current function only
                         and do not affect the setting of the toggles.

     Examples:    

          {asci}                        Open ASCII Upload window.

          {asci-S}                      Open ASCII Upload window,
                                        strip linefeeds when file is
                                        sent.

          {asci %uldir%\}               Open ASCII Upload window,
                                        prompt with the current value
                                        of the variable "uldir".



                   {COMMO} (tm)  Macro Programming Guide            19



          {asci c:\msgs\file.xyz,:}     Upload "file.xyz."  Use ":"
                                        for pacing.

          {asci-E0 c:\msgs\file.xyz}    Upload "file.xyz."  Use
                                        current pacing character, do
                                        not expand blank lines.

          {asci c:\msgs\file.xyz,}      Upload "file.xyz."  Do not use
                                        pacing.

          {asci ,?}                     Set current pacing character
                                        to "?"

          {asci ,}                      Set current pacing to "no"
                                        pacing.

     The pacing character may be entered according to the rules shown
     in Appendix D in the User Guide and Reference.  For example, "^m"
     or "|" may be used to represent the carriage return.

     ____

     AUTO
     ____

     Default key:   none
     Description:   Maintain Auto Receive strings.

     General form:

          {AUTO label,string}

               label          Label to GOTO when the string is
                              received.
               string         String to look for, may be up to 32
                              characters.

     Examples:

          {auto}                   Clear all Auto Receive strings.
          {auto zmodem,^XB00}      Zmodem Auto Receive string.

     Note that only 8 Auto Receive strings may be in effect at the
     same time (including any strings defined in the Setup File).

     Use this function with no arguments to clear all strings when
     necessary.

     See also "TIPS on creating LOOKfor strings" under LOOKfor.



                   {COMMO} (tm)  Macro Programming Guide            20


     ____

     BEEP
     ____

     Default key:   none
     Description:   Sound a beep.

     Example:

          {beep}              No arguments.

     _____

     BREAk
     _____

     Default key:   Alt-B
     Description:   Send a break.

     Example:

          {break}             No arguments.

     ____

     CALL
     ____

     Default key:   none
     Description:   Execute a macro subroutine.

     Example:

          {call abc}          Execute subroutine abc.

     CALL will push the location following the CALL function onto the
     macro stack, then it will GOTO the label given in the argument. 
     When a RETUrn is executed, the location will be popped and
     control will return to the function following the CALL.

     Note that macros may be nested up to 32 deep.

     See also RETUrn, PUSHstack, POPStack.



                   {COMMO} (tm)  Macro Programming Guide            21


     ______

     CALOok
     ______

     Default key:   none
     Description:   Set up an additional string to look for during a
                    subsequent LOOKfor function.

     General form:

          {CALOok label1,label2,string}

               label1    The return point for the CALL to label2.

               label2    The label to CALL when "string" is received
                         from the serial port.

               string    The ASCII string to look for.  The string
                         begins following the "," and is terminated by
                         the "}".

     When the routine at "label2" executes a RETUrn, control will pass
     to "label1".  This is equivalent to:

          {call label2} {:label1} ...

     See LOOKfor for details, examples and tips on using CALOok.

     See also: GOLOok, SETLook.

     _______

     CAPMode
     _______

     Default key:   none
     Description:   Set Capture Mode.

     Examples:

          {capmode screen}         Set Capture Mode to SCREEN.
          {capmode filter}         Set Capture Mode to FILTER.
          {capmode raw}            Set Capture Mode to RAW.

     See also CAPTure.



                   {COMMO} (tm)  Macro Programming Guide            22


     _______

     CAPTure
     _______

     Default key:   Alt-1
     Description:   Capture File Options.

     Examples:

          {capture}                     Open Capture File Options
                                        window.

          {capture y}                   Open current Capture File.

          {capture n}                   Close current Capture File.

          {capt y,c:\commo\file.xyz}    Open indicated Capture File.

          {capt n,c:\dl\newfile.cap}    Close current Capture File,
                                        set new file as indicated.

     NOTE:  The current Capture File will always be closed when a new
     file is opened.

     See also CAPMode.

     ________

     CHATmode
     ________

     Default key:   Alt-- (Alt minus)
     Description:   Set Chat Mode toggle.

     Examples:

          {chat}              Toggle Chat Mode on/off.
          {chat y}            Turn on Chat Mode.
          {chat n}            Turn off Chat Mode

     _____

     CLEAr
     _____

     Default key:   Alt-C
     Description:   Clear Terminal Screen to default colors.

     Example:

          {clear}             No arguments.



                   {COMMO} (tm)  Macro Programming Guide            23



     _______

     COMPare
     _______

     Default key:   none
     Description:   Compare a string or numeric variable.

     General form:

          {COMPare name,string}

               name           The name of a variable.

               string         A string of ASCII characters.

     Examples:

          {comp pword,aardvark}         Test if the variable "pword"
                                        is set to "aardvark."

          {comp pword}                  Test if "pword" is null.
          {comp pword,}                 Test if "pword" is null.

          {comp nmbr,5}                 Compare a numeric variable.

          {comp abc,%xyz}               Test if the variable "abc" is
                                        equal to the variable "xyz."

     A numeric variable is a string of ASCII digits, 0-9, forming a
     positive integer in the range from 0 to 65535.  If the number is
     outside this range or contains non-numeric characters, the
     results of the compare will be unpredictable.

     COMPare will set flags which can be tested with the IFCOndition
     function.

          The Condition Flag will be set to "true" if the two
          arguments are identical strings (case is ignored). 
          Otherwise it will be set to "false."

          The Numeric Flag will be set to "equal", "less than" or
          "greater than."  This flag is unpredictable unless both
          arguments are valid numeric variables.

     A variable may be tested for being null (no entry in variable
     space) by omitting the second argument (or by comparing to a null
     variable).

     See also IFCOndition.



                   {COMMO} (tm)  Macro Programming Guide            24


     ______

     CURSor
     ______

     Default key:   none
     Description:   Terminal Screen cursor on/off.

     Examples:

          {cursor}            Toggle Terminal cursor on/off.
          {curs y}            Turn on Terminal Screen cursor.
          {curs n}            Turn off Terminal Screen cursor.

     _________

     DECRement
     _________

     Default key:   none
     Description:   Subtract an amount from a numeric variable.

     Examples:

          {decr number,200}   Subtract 200 from "number".
          {decr count}        Subtract 1 from the variable "count".

     Numeric variables and the amounts to be subtracted may range from
     0 to 65535.  The default amount is 1.  Results less than 0 will
     be set to 0.

     If the variable is not numeric, the results will be
     unpredictable.

     See also INCRement.

     ____

     DIAL
     ____

     Default keys:  Alt-D, Alt-N
     Description:   Dialing Directory.

     General form:

          {DIAL tries,label}

               tries     The maximum number of dialing tries.  If no
                         connection is established when the try count
                         is exhausted, the macro in the second



                   {COMMO} (tm)  Macro Programming Guide            25


                         argument will be started.  May be 0 to 999. 
                         "0" means unlimited.  Default is 0.

               label     A macro to GOTO if the try count in the first
                         argument is exhausted.  If no macro is
                         specified or if the macro label is invalid,
                         control will pass to the next function. 
                         Default is none.

     Switches:

               C1 or C   Specifies that a Linked Macro (from the
                         Dialing Directory) will be entered via CALL
                         (instead of GOTO).  When the Linked Macro
                         executes a RETUrn, control returns to the
                         DIAL function and Multi Number Dialing will
                         resume (see below).

               C0        Enter the Linked Macro via GOTO (default).


     Examples:

          {dial}              Open Dialing Directory window (similar
                              to Alt-D).

          {dial ,}            Multi Number Dial (similar to Alt-N).

          {dial 25,abc}       Multi Number Dial with try count.

          {dial-C ,}          Multi Number Dial, CALL Linked Macros.


     Marked numbers will be redialed in sequence.  Numbers may be
     marked in one of several ways:

          1)   Manually in the Dialing Directory window.
          2)   By placing Dialing Strings on the {COMMO} command line.
          3)   Using the MARK macro function.

     If a connection occurs and a valid Linked Macro is specified in
     the Dialing Directory, the macro will be started (via GOTO unless
     the "C" switch is present).  If no macro is specified in the
     Dialing Directory, control is passed to the next function.


     To automatically resume Multi Number Dialing at the end of a
     Linked Macro, use one of the following methods.

          1)   Execute the following sequence at the end of each
               Linked Macro (or GOTO it):



                   {COMMO} (tm)  Macro Programming Guide            26


               ... {setlook 60} {lookfor ^jNO CARRIER^m} {dial ,} {}

               This allows more than one system to be called without
               operator intervention.  This method will also work when
               using Dialing Strings on the command line or when
               pressing Alt-U after marking systems for dialing.

          2)   Use the "C" switch in the DIAL function.  Each Linked
               Macro should end with a RETUrn which will transfer
               control back to the DIAL.  When all numbers have been
               called, the DIAL will pass control to the next function
               in sequence.

     See also: MARK, UNMArk.

     _______

     DISPlay
     _______

     Default key:   none
     Description:   Display a string to the screen.

     General form:

          {DISPlay row,col,attr,string}

               row       The row where the string will display.
               col       The column where the string will display.
               attr      The attribute (colors) of the string.
               string    The text of the string (no quotes).

     Examples:

          {display 12,20,17,Hello!}     Display "Hello!" at row 12,
                                        column 20.  Colors are white
                                        on blue.

          {disp ,,,Hello, again.^m^j}   Display "Hello, again." at the
                                        current cursor using the
                                        current attribute, followed by
                                        a cr/lf.

          {disp 3,40}                   Position the cursor at row 3,
                                        column 40.

     TIPS on using DISPlay:

     >    The attribute is specified in the same manner as the colors
          in the Setup File (press F10 in the Internal Editor to
          display the Color Chart).



                   {COMMO} (tm)  Macro Programming Guide            27


     >    Setting background colors to high intensity values will
          cause blinking (for example, using "9" instead of "1" will
          still give a blue background but the foreground character
          will blink).  

     >    After the string is displayed, the previous Terminal Screen
          attribute will be restored.

     >    Conversion is performed on the string according to the rules
          in Appendix D in the User Guide and Reference.

     _______

     DOORway
     _______

     Default key:   Alt-=
     Description:   Toggle Doorway Mode.

     Switches:

               S1 or S   Status Line on when entering Doorway Mode.

               S0        Status Line off (default).

               M0        Do not display Doorway enter/exit messages.

               M1        Display enter/exit messages (default).

     Examples:

          {doorway}           Toggle Doorway Mode on/off.
          {door-S}            Status Line on when entering Doorway
                              Mode.
          {doorway-M0}        Do not display enter/exit messages.

     The "S" switch is ignored when exiting Doorway Mode (the Status
     Line will be restored to its prior state).

     ______

     DPARms
     ______

     Default key:   Alt-P
     Description:   Set Default Dialing Terminal Parameters



                   {COMMO} (tm)  Macro Programming Guide            28


     General form:

          {DPARms speed,format,comport,terminal-type,delay}

               speed          The bps rate: 2400, 9600, etc.
               format         The data format: 8n1, 7e1, etc.
               comport        The serial port number: 1, 2, 3 or 4.
               terminal       The terminal-type: A, V or T.
               delay          The inter-character delay factor: 0-999.

     Examples:

          {dparms 2400,8,1,,20}    Set 2400 bps, 8n1, Com1, delay =
                                   20.

          {dparms ,,4,V}           Set Com4 VT102.

          {dparms 19200,7o1}       Set 19200 bps, 7o1.

     Note that omitted parameters are not changed.

     See also PARMs.

     ____

     EDIT
     ____

     Default key:   none
     Description:   Edit an external file.

     Example:

          {edit c:\autoexec.bat}        Edit AUTOEXEC.BAT file.

     EDIT may be used to edit any text file up to 64k in length.  The
     rules are the same as for editing a support file with the
     Internal Editor.

     TIPS on using EDIT:

     >    Control characters (below ASCII 28) may not be typed.

     >    Any data beyond the last cr/lf pair will be removed prior to
          editing.  A cr/lf pair will be added, if necessary, to
          ensure at least one line in the file.

     >    The file will be saved unconditionally when Alt-F is pressed
          or conditionally (if changes were made) when Esc is pressed. 
          The file is "saved in place" (no backup).



                   {COMMO} (tm)  Macro Programming Guide            29


     ______

     ELAPse
     ______

     Default key:   none
     Description:   Reset the elapsed timer to 0 minutes.

     Example:

          {elap}              No arguments.

     The elapsed timer is automatically reset whenever dialing begins
     and when a connection is made with a remote system.

     _______

     EXECute
     _______

     Default key:   none
     Description:   Execute a DOS command.

     Switches:

               A1 or A   Sound the alarm at the end of command
                         execution.

               A0        Do not sound the alarm (default).

               D1 or D   Execute an external program directly, without
                         use of the command processor (see details
                         below).

               D0        Use the command processor (default).

               N1 or N   Do not clear the screen before execution. 
                         This is useful when running programs that
                         clear or rewrite the screen.  Also for simple
                         DOS functions like changing directories,
                         renaming files, etc.  

               N0        Clear the screen (default).

               W         Wait for a key press before restoring the
                         Terminal Screen.  This is useful if you need
                         to see the results of the command execution.

               Wn        Wait for "n" seconds, "n" may range from 0 to
                         999.  Press a key to cancel the wait.

                         Note:  Default (no "W" switch) is no wait.



                   {COMMO} (tm)  Macro Programming Guide            30



     Examples:

          {exec-AW3 dsz port %_por speed %_spe sz %uldir%\%file}

               {COMMO} will prepare the DSZ command by expanding the
               "%" variables, then call DOS to execute the program.

               See the section "Macro Variables" for complete details
               on variable substitution.

               The alarm will sound at completion (the "A" switch) and
               {COMMO} will wait for three seconds (the "W3" switch)
               before restoring the Terminal Screen.

          {execute-DN c:\utils\list.com %_cap}

               The LIST program will be directly executed with the
               current Capture File pathname as a command line
               argument.  The screen will not be cleared (LIST will
               rewrite the screen).  {COMMO} will return immediately
               to the Terminal Screen when LIST exits.

     The EXECute function enables you to "build" a command to be
     executed by DOS.  The DOS command processor (COMMAND.COM) is
     normally used (see below), which implies that you may specify any
     command as you would type it from the DOS prompt.

     Thus you can execute batch files and internal DOS commands (REN,
     DEL, etc.).  Also you can omit command paths and extensions (if
     the command is in your PATH or in the current directory).

     Character conversion is performed in the EXECute function.  This
     enables you to specify control characters.  For example:

               {exec echo ^L> prn}   Send a formfeed to the printer

     See Appendix D in the User Guide and Reference for details on
     conversion.  Note that the vertical bar "|" is NOT translated to
     a carriage return in the EXECute function.  



                   {COMMO} (tm)  Macro Programming Guide            31


     Using the Direct Switch: exec-D
     -------------------------------

     Use this switch to execute .EXE and .COM programs without the use
     of the command processor (usually COMMAND.COM).

     The program's Exit Code (called ERRORLEVEL in batch files) is
     saved and may be tested with the IFERrorlevel function.  The Exit
     Code is also available in the variable "_err".

     There are several advantages to using the "D" switch:

     1)   Only the memory needed to run the program is required (the
          command processor requires that about 32k be available, even
          if the program being run is much smaller).

     2)   About 4k of memory is saved by not having a copy of the
          command processor resident when the program is running.

     3)   The program executes faster, since COMMAND.COM is not loaded
          from disk.

     4)   The program's Exit Code is preserved and may be tested with
          the {COMMO} IFERrorlevel function.

     Two important rules must be followed when using the "D" switch:

     1)   The full pathname of the program file must be specified,
          including the path where the file resides on disk and the
          file extension.  For example:

               {exec-D c:\util\list.com file.txt}

     2)   Only .EXE and .COM files may be run (batch files and
          internal DOS commands cannot be executed without the command
          processor).


     EXECute Preview Mode
     --------------------

     Use the Set Toggles key command, Alt-T, to turn on "EXECute
     Preview Mode."  This mode is used to test your DOS commands and
     performs the following steps for each EXECute function:

     1)   The command will be displayed after expanding variables and
          converting control characters.

     2)   You will be given an opportunity to cancel the command
          before it is executed.



                   {COMMO} (tm)  Macro Programming Guide            32


     3)   Following execution {COMMO} will wait before restoring the
          Terminal Screen.  This lets you see any error messages that
          the command may have displayed.

     ____

     EXIT
     ____

     Default key:   Alt-X
     Description:   Exit {COMMO}.

     General form:

          {EXIT number}

               number    The return code to be passed to DOS.  It may
                         be tested with the IF ERRORLEVEL batch
                         command.  Range is 0 to 255.

     Switches:

               D1 or D   Drop DTR and RTS.  Dropping DTR will cause
                         the modem to disconnect if it has been
                         properly initialized.  See Appendix A in the
                         User Guide and Reference.

               D0        Do not drop DTR and RTS.

                         If the switch is absent, the current setting
                         of the toggle will be used.  The toggle can
                         be set in the Setup File or by using the Alt-
                         T key command.

     Examples:

          {exit}              No arguments (return code = 0).
          {exit 3}            With return code.
          {exit-D}            Drop DTR and RTS.

     _________

     GETString
     _________

     Default key:   none
     Description:   Input a string from the modem to a variable.

     General form:

          {GETString name,count,label}



                   {COMMO} (tm)  Macro Programming Guide            33


               name      The name of the variable to which the string
                         will be assigned.

               count     The maximum number of data characters
                         allowed.  A carriage return will always
                         terminate input.  May be 1 to 240.  Default
                         is 240.

               label     A macro to GOTO if a carriage return is
                         received and no characters have been entered
                         (the string will be assigned as null).  If
                         this argument is omitted, control will pass
                         to the next function.

     Switches:

               A1 or A   "Append" mode.  Characters will be appended
                         to the variable.  If the current length of
                         the variable is greater than the count in the
                         second argument, a count of 240 will be
                         assumed.

               A0        The variable will be overwritten (default).

               H1 or H   "Hotkey" mode.  When the maximum number of
                         characters has been entered, control will
                         pass to the next function.

               H0        Ignore all input after the maximum has been
                         entered, except backspace and carriage return
                         (default).

               P1 or P   "Password" mode.  Asterisks will be echoed to
                         the remote and local terminals in place of
                         the received characters (Echo Status will be
                         honored, see SETGet).

               P0        Characters are echoed as received (default).

     Examples:

          {setget 60,timeout,y,^m^j}         Set GETString parameters.
          {gets fonum,12,badinput}           Get input to "fonum."

          {gets-p pword,20}                  Get a password.


     TIPS on using GETString:

     >    The only control characters allowed (below ASCII 28) are
          carriage return (ASCII 13) and backspace (ASCII 8).  Other



                   {COMMO} (tm)  Macro Programming Guide            34


          control characters should be entered as ^J for linefeed,
          etc.  See Appendix D in the User Guide and Reference.

     >    Destructive backspace processing is supported for editing
          purposes.

     >    GETString supports "tandem" input.  Characters entered at
          either end will be input to the string (and displayed at
          both ends if echo is on (see SETGet).  Turn on Local Echo to
          see text locally that is sent to the remote with SEND,
          ASCIiup, etc.

     >    Use the "H" switch and a character count of 1 for "hotkeys."

     >    Turn off echo in the SETGet while waiting for the modem to
          answer (in host mode).  Some modems react poorly to
          characters being echoed when they are generating a response
          (such as "RING").

     >    Incoming characters displayed during a GETString function
          are not seen by subsequent CALOok/GOLOok/LOOKfor functions.

     See also SETGet.

     ______

     GOLOok
     ______

     Default key:   none
     Description:   Set up an additional string to look for during a
                    subsequent LOOKfor function.

     General form:

          {GOLOok label,string}

               label     A label to GOTO when "string" is received
                         from the serial port.

               string    The ASCII string to look for.  The string
                         begins following the "," and is terminated by
                         the "}".

     See LOOKfor for details, examples and tips on using GOLOok.

     See also: CALOok, SETLook.



                   {COMMO} (tm)  Macro Programming Guide            35


     ____

     GOTO
     ____

     Default key:   none
     Description:   Transfer control to a macro label.

     Example:

          {goto mail_run}          Control transferred to label
                                   "mail_run".

     ______

     HANGup
     ______

     Default key:   Alt-H
     Description:   Disconnect by dropping DTR.

     Examples:

          {hangup}            Prompt user for disconnect.
          {hangup y}          Disconnect without prompting.

     ____

     HELP
     ____

     Default key:   F1
     Description:   Open Online Help window.

     Example:

          {help}              Display key command help
          {help x}            Display topic "TX"

     Any single character may be specified.  {COMMO} will prefix it a
     "T" and search for the topic code.  You may create your own
     Online Help file.  See "Modifying the Help File" in The User
     Guide and Reference.

     _____

     HFLOw
     _____

     Default key:   none
     Description:   Set Hardware Flow Control toggle.



                   {COMMO} (tm)  Macro Programming Guide            36


     Examples:

          {hflow}             Toggle Hardware Flow Control on/off.
          {hflow y}           Turn on Hardware Flow Control.
          {hflow n}           Turn off Hardware Flow Control.

     ____

     HOLD
     ____

     Default key:   none
     Description:   Hold until specified time of day (24 hour format).

     Examples:

          {hold 3:30}         Hold until 3:30 am.
          {hold 16:10}        Hold until 4:10 pm.
          {hold 0:00}         Hold until midnight.

     NOTE:  Incoming characters displayed during a HOLD function are
     not seen by subsequent CALOok/GOLOok/LOOKfor functions.

     _________

     IFCArrier
     _________

     Default key:   none
     Description:   Test for presence of carrier detect signal.

     General form:

          {IFCArrier true,false}

               true           A label to GOTO if carrier is detected.

               false          A label to GOTO if carrier is not
                              detected.

     NOTE:  The default when either label is omitted is to pass
     control to the next function.

     Example:

               {ifcarrier c10,c20}

     Tip on using IFCArrier:

     >    When using a loop to wait for a change in carrier detect,
          you should include a short pause in the loop if you want
          characters to display.  The following sequence will display



                   {COMMO} (tm)  Macro Programming Guide            37


          incoming characters while waiting for carrier detect to
          drop:

               ... {:cd1} {pause 1} {ifcarrier cd1} ...

     ___________

     IFCOndition
     ___________

     Default key:   none
     Description:   Test for conditions set by other functions.

     General form:

          {IFCOndition true,false}

               true      A label to GOTO if the Condition Flag is
                         true.

               false     A label to GOTO if the Condition Flag is
                         false.

     NOTE:  The default when either label is omitted is to pass
     control to the next function.

     Switches:

               none      Test the current state of the Condition Flag.

               E1 or E   Test for numeric equality.  A numeric string
                         contains only the digits 0-9 and is in the
                         range 0 to 65535.

               L1 or L   Numeric test -- if first COMPare argument is
                         less than the second.

               G1 or G   Numeric test -- if first COMPare argument is
                         greater than the second.

     Examples:

          {compare var1,message}        Compare and set Condition
          {ifcondit match,nomatch}      Flag.  GOTO "match" if the
                                        variable "var1" is set to
                                        "message," to "nomatch" if it
                                        is not.

          {compare value,200}           Compare and set conditions.
          {ifcon-GE toobig,aok}         GOTO "toobig" if "value" is
                                        greater than or equal to 200,
                                        else GOTO "aok."



                   {COMMO} (tm)  Macro Programming Guide            38



          {instring zipcode,90}         Test if "zipcode" contains
          {ifcon yes,no}                the digits "90".  If "true"
                                        GOTO "yes", if "false" GOTO
                                        "no".

     Switches may be used in any combination.  If any numeric switches
     are present, the Condition Flag is not tested.

     The difference between testing for string equality and numeric
     equality is shown in this example:

          The strings "05" and "5" are different text strings, but are
          numerically equal.

     ____________

     IFERrorlevel
     ____________

     Default key:   none
     Description:   Test the Exit Code set by certain functions.

     General form:

          {IFERrorlevel number,true,false}

               number         A number from 0 to 255.  It will be
                              compared to the last Exit Code that was
                              set.

               true           A label to GOTO if the Exit Code is
                              greater than or equal to "number."

               false          A label to GOTO if the Exit Code is less
                              than "number."

     NOTE:  The default when either label is omitted is to pass
     control to the next function.

     Example:

               {iferror 1,abc,def}      GOTO "abc" if Exit Code is
                                        greater than or equal to 1. 
                                        Else GOTO def.

     TIPS on using IFERrorlevel:

     >    The Exit Code is set by certain functions (e.g., EXECute-D,
          SHELl, RXMOdem, SXMOdem) and should normally be tested
          immediately following execution of those functions.



                   {COMMO} (tm)  Macro Programming Guide            39


     >    EXECute without the "D" switch or Shell to DOS will normally
          set the Exit Code to 0.

     >    Many programs return an Exit Code greater than 0 when the
          result is unsuccessful.  DSZ, for example, will return an
          Exit Code of 1 if the file transfer has failed.

     >    The value of the Exit Code is also stored in the string
          variable "_err" and may be tested with COMPare.

     _______

     IFEXist
     _______

     Default key:   none
     Description:   Test for existence of a disk file or files.

     General form:

          {IFEXist pathname,true,false}

               pathname       A DOS pathname.  If the path is omitted,
                              the current directory will be used.  If
                              wildcards are used the "true" condition
                              will hold if any files match the
                              specification.

               true           A label to GOTO if the file exists.

               false          A label to GOTO if no files match.

     NOTE:  The default when either label is omitted is to pass
     control to the next function.

     Examples:

          {ifex a:file.xyz,,m20}             GOTO "m20" if not found.
          {ifex c:\data\words.txt,345}       GOTO "345" if found.
          {ifex c:\ul\*.rep,a01,a02}         Using a wildcard.

     _________

     INCRement
     _________

     Default key:   none
     Description:   Add an amount to a numeric variable.

     Examples:

          {incr number,1234}  Add 1234 to "number".



                   {COMMO} (tm)  Macro Programming Guide            40


          {incr count}        Add 1 to the variable "count".

     Numeric variables and the amounts to be added may range from 0 to
     65535.  The default amount is 1.  Results greater than 65535 will
     be set to 65535.

     If the variable is not numeric, the results will be
     unpredictable.

     See also DECRement.

     _________

     INITmodem
     _________

     Default key:   Alt-O
     Description:   Send Modem Initialization String.

     Example:

          {init}              No arguments

     _____

     INPUt
     _____

     Default key:   none
     Description:   Input a string from the keyboard.

     General form:

          {INPUt name,prompt}

               name      The name of a string variable.  The current
                         value of this variable will appear in the
                         input line.

               prompt    A prompt string that will appear in the input
                         window border.

     Example:

          {input upfile,Enter a filename:}        Input a string to
                                                  the variable
                                                  "upfile."

     If 0 data characters are entered, the variable will be set to
     null.



                   {COMMO} (tm)  Macro Programming Guide            41


     NOTE:  If Esc is pressed, macro processing will be terminated
     unless an exit label has been defined with SETEsc.

     ________

     INSTring
     ________

     Default key:   none
     Description:   Find a string within a string, return its
                    position.

     General form:

          {INSTring name,string}

               name      The name of a variable (string to search in).
               string    The string to search for.

     Example:

          {inst line,abc}     The variable "line" is searched for the
                              string "abc".

     INSTring will set the following:

          1)   The Condition Flag will be set to "true" if the string
               is found, to "false" if the string is not found.  Test
               with IFCOndition, no switches.

          2)   The starting position of the string will be returned in
               the built-in variable "_pos" (first character is "1"). 
               "_pos" will be set to zero if the string is not found.

     ______

     LENGth
     ______

     Default key:   none
     Description:   Determine the length of a string.

     Examples:

          {leng %line}             Find the length of the string in
                                   the variable "line".

          {leng %line1%%line2}     Find the combined length of "line1"
                                   and "line2".

     The length will be returned in the built-in variable "_len".  If
     the string is null, the length will be set to zero.



                   {COMMO} (tm)  Macro Programming Guide            42



     ______

     LIGHts
     ______

     Default key:   Alt-0
     Description:   Set Signal Lights toggle.

     Examples:

          {lights}            Toggle Signal Lights on/off.
          {lights y}          Turn on Signal Lights.
          {lights n}          Turn off Signal Lights.

     _________

     LOCAlecho
     _________

     Default key:   none
     Description:   Set Local Echo toggle.

     Examples:

          {local}             Toggle Local Echo on/off.
          {local y}           Turn on Local Echo.
          {local n}           Turn off Local Echo.

     _______

     LOOKfor
     _______

     Default key:   none
     Description:   Look for strings in the modem input stream.

     LOOKfor may be used in conjunction with CALOok and GOLOok to scan
     for up to 16 strings at the same time.  When CALOok and GOLOok
     set up additional strings to look for, the actual "looking" does
     not take place until the LOOKfor executes.

     Parameters controlling LOOKfor execution are set with the SETLook
     function, which should be executed before any LOOKfor functions. 
     See the description of the SETLook function for details.

     Examples using LOOKfor only:

          {lookfor first name?}    Look for the string "first name?"

          {look ^(COMMO^)}         Look for the string "{COMMO}".



                   {COMMO} (tm)  Macro Programming Guide            43


          When the string comes in, control will pass to the next
          function.

     Example construct using CALOok/GOLOok/LOOKfor:

                    {setlook 60,hng,3,n|}
                      ...

          {:m_1234}
                    {golook aaa,string1}
                    {calook m_1234,bbb,string2}
                    {calook m_1234,ccc,string3}
                    {golook ,string4}
                    {lookfor string5} {send answer5|} {goto ddd}

          {:aaa}    {hangup y} {goto cancel}
          {:bbb}    {send answer2|} {return}
          {:ccc}    {send answer3|} {call subr} {return}

          {:ddd}      ...

          In this example {COMMO} will look for five strings.  When
          any string comes in, the LOOKfor is terminated (all strings
          are cancelled).  It may be set up again by going back to
          "m_1234".

          The GOLOok function for string1 will GOTO "aaa" when the
          string comes in.  In the example control will pass to
          "cancel".

          If string2 or string3 come in the CALOok functions will set
          "m_1234" as the return point and then CALL "bbb" or "ccc"
          respectively.  When these routines RETUrn, control returns
          to "m_1234" and the five string LOOKfor will be set up
          again.

          The GOLOok for string4 has a null label and control will
          pass to the function following the LOOKfor if that string
          comes in.  The "," must be present.

          If string5 comes in, control will also pass to the function
          following the LOOKfor.

     TIPS on creating LOOKfor strings:

     >    There should be just one space following the LOOKfor
          function name.  Any spaces beyond this point are part of the
          string.  The string ends at the right curly brace.

     >    CALOok/GOLOok/Auto Receive strings begin immediately after
          the comma.  There should be no spaces unless they are part
          of the string.



                   {COMMO} (tm)  Macro Programming Guide            44



     >    Strings may be up to 32 characters in length (control
          characters like "^M" count as one).  Upper/lower case is
          ignored.

     >    ANSI control sequences are filtered if ANSI or VT102
          emulation is enabled.

     >    Remember that short strings may not be unique enough, long
          strings may not match due to line noise.

     >    Rules for representing special characters in
          CALOok/GOLOok/LOOKfor/Auto Receive strings are given in
          Appendix D in the User Guide and Reference.

     Additional TIPS:

     >    CALOok and GOLOok functions should immediately precede a
          LOOKfor (no string compares actually occur until the LOOKfor
          executes).  Up to 15 CALOok/GOLOok strings may be used for a
          total of up to 16 strings to scan for.

     >    FILTER Capture Mode should be used to determine the exact
          prompt to look for.  The LOOKfor sees the incoming data
          exactly as it is captured when FILTER mode is set.

     >    If two or more strings cause a match at the same time, the
          LAST such string listed is the one acted upon.  For example,
          if "abcdef" and "def" are listed and "abcdef" comes in.

     >    Since the LOOKfor is terminated whenever any of the strings
          come in (or when the LOOKfor timeout expires), this
          structure is unrestricted -- that is, CALLs, GOTOs, other
          CALOok/GOLOok/LOOKfor constructs, etc., may be used freely
          in any of the branches.

     See also: CALOok, GOLOok, SETLook.

     _______

     MACLoad
     _______

     Default key:   none
     Description:   Load a new Macro File.

     Switches:

               R1 or R   Specifies that COMMO.MAC will be reloaded
                         when carrier detect is lost.  Normally this
                         would occur at the end of the call.



                   {COMMO} (tm)  Macro Programming Guide            45


               R0        Do not reload COMMO.MAC when carrier is lost
                         (default).

     General form:

          {MACLoad filename,label}

               filename       The new Macro File.  Do NOT specify a
                              path; the {COMMO} home directory will be
                              used.

               label          A label to GOTO when the new file is
                              loaded.  Optional.

     Examples:

          {macload-R vt102-1.mac}       Load vt102-1.mac, reload
                                        COMMO.MAC at the end of the
                                        call.

          {macl newmac.fil,abc}         Load newmac.fil, start macro
                                        "abc" in the new file.


     IMPORTANT!  The new Macro File must reside in the {COMMO} home
     directory (do not specify a path).

     The current file will be saved to disk if changes are
     outstanding.  The new file is then loaded in place of the current
     one (all macros are replaced).  

     MACLoad should be the last function in a macro, since control is
     not returned.

     _____

     MACRo
     _____

     Default key:   Alt-M
     Description:   Open Macro Processor window.

     Examples:

          {macro}             Open window at current position.
          {macro menu1}       Open window at "menu1."

     NOTE:  The MACRo function always terminates the macro that is
     currently executing.

     A string argument may be included to facilitate the creation of
     menus within the Macro File.  The first occurrence of the



                   {COMMO} (tm)  Macro Programming Guide            46


     argument string will become the top line of the display when the
     window is opened.

     The Selector Bar will be positioned on the first screen line that
     has a left curly brace, if any.

     Here is an example of how to structure a menu using MACRo:


                                        | (this is past col. 80)
                                        | menu111
               Name of Menu             |
                                        |
                                        |
               Selection 1              | {exec ... } {}
               Selection 2              | {exec ... } {}
               Selection 3              | {exec ... } {}
                                        | {:af1} {macro menu111}


     The upper line with "menu111" will be the top line of the screen. 
     Pressing Alt-F1 will bring up the menu with the Selector Bar on
     Selection 1.

     Remember that the function itself will be found in the search
     since it contains the string.

     ____

     MARK
     ____

     Default key:   none
     Description:   Mark Dialing Directory entries for dialing.

     Example:

          {mark joes-bbs,file-city}     Mark entries for dialing.

     Dialing Strings may be separated by spaces or commas.

     {COMMO} will search the Dialing Directory for each string and
     mark the first entry where a match is found.  Case is ignored.

     The strings may consist of any part of a Dialing Directory entry
     line (including passwords).  However the following characters may
     not appear in a macro Dialing String: space, comma, left or right
     curly brace.

     See also: DIAL, UNMArk.



                   {COMMO} (tm)  Macro Programming Guide            47


     _________

     NOCArrier
     _________

     Default key:   none
     Description:   Sets/resets a macro to execute when carrier detect
                    is lost.

     Examples:

          {nocar carrlost}         GOTO the label "carrlost" when the
                                   carrier detect signal drops.

          {nocar}                  Turn off the carrier lost label.

     IMPORTANT:  This feature is enabled only when a connection is
     made using {COMMO}'s Auto Dialer.  Also, if carrier drops while a
     macro is running or a command window is open (such as the Dialing
     Directory or Capture File Options), the carrier lost macro will
     not activate.

     Be sure that you have your modem configured to provide the
     carrier detect signal.  See Appendix A in the User Guide and
     Reference for modem information.

     ____

     NOOP
     ____

     Default key:   none
     Description:   No-op function, does nothing

     Example:

          {noop}              No arguments.

     _____

     PARMs
     _____

     Default key:   Alt-P
     Description:   Set Current Terminal Parameters



                   {COMMO} (tm)  Macro Programming Guide            48


     General form:

          {PARMs speed,format,comport,terminal-type,delay}

               speed          The bps rate: 2400, 9600, etc.
               format         The data format: 8n1, 7e1, etc.
               comport        The serial port number: 1, 2, 3 or 4.
               terminal       The terminal-type: A, V or T.
               delay          The inter-character delay factor: 0-999.

     Examples:

          {parms 2400,8,1,,20}     Set 2400 bps, 8n1, Com1, delay =
                                   20.

          {parms ,,4,V}            Set Com4 VT102.

          {parms 19200,7o1}        Set 19200 bps, 7o1.

     Note that omitted parameters are not changed.

     See also DPARms.

     ________

     PASSword
     ________

     Default key:   Alt-W
     Description:   Send current password.

     Example:

          {password}          No arguments.

     The current password is obtained from the Dialing Directory entry
     whenever a number is dialed.  If no password is specified no
     characters will be sent.

     _____

     PAUSe
     _____

     Default key:   none
     Description:   Pause for up to 999 seconds.

     Example:

          {pause 25}          Pause for 25 seconds.



                   {COMMO} (tm)  Macro Programming Guide            49


     NOTE:  Incoming characters displayed during a PAUSe function are
     not seen by subsequent CALOok/GOLOok/LOOKfor functions.

     ________

     POPStack
     ________

     Default key:   none
     Description:   Pop an element from the macro stack.

     Switches:

               C1 or C   Clear all elements from the stack.

               C0        Pop the top element (default).

     Examples:

          {pops}              Pop the top element.
          {pops-c}            Clear the stack.

     POPStack throws away the top element on the macro stack.  This
     element would have been used by the next RETUrn function.

     See PUSHstack for a more complete description of the use of this
     function.

     See also CALL, RETUrn.

     ________

     PRINtlog
     ________

     Default key:   Alt-2
     Description:   Set Print Log toggle.

     Examples:

          {print}             Toggle Print Log on/off.
          {print y}           Turn on Print Log.
          {print n}           Turn off Print Log.

     _________

     PUSHstack
     _________

     Default key:   none
     Description:   Push a return point onto the macro stack.



                   {COMMO} (tm)  Macro Programming Guide            50


     Examples:

          {push}              Push the current location.
          {push abc}          Push the location "abc".

     When there are no arguments, the location pushed is the location
     of the PUSHstack function itself (i.e., it will be executed again
     when a RETUrn is encountered).

     Explanation:  Whenever a CALL is executed, the location of the
     function following the CALL (the "return point") is "pushed" onto
     the macro stack.  When a subsequent RETUrn is executed, the
     location at the top of the stack is "popped" and control is
     transferred to that location.  This allows "nesting" of CALLs and
     RETUrns.

     PUSHstack will push a return point onto the macro stack without
     transferring control to the location (control continues in
     sequence).  A subsequent RETUrn will transfer control to the
     location that was pushed.

     POPStack will remove the top stack element without transferring
     control to it (control continues in sequence).

     See also CALL, RETUrn.

     ______

     RCLOse
     ______

     Default key:   none
     Description:   Close the read file.

     Example:

          {rclose}            No arguments.

     IMPORTANT!  The read file will be closed automatically in the
     following situations:

          1)   When an attempt is made to read past the end of the
               file.
          2)   When the macro terminates (STOP, EXIT, etc.).

     A macro error will result if you try to close and no file is
     open.

     See also ROPEn, READ.



                   {COMMO} (tm)  Macro Programming Guide            51


     ____

     READ
     ____

     Default key:   none
     Description:   Read a line from the read file to a variable.

     Example:

          {read nextline}          Read the next line in the file into
                                   the variable "nextline."

     TIPS on reading files:

     >    Each READ will get another line until the end of the file is
          encountered, at which time control will GOTO the label
          specified when the file was opened.  If no label was
          specified (or the label is invalid) control continues in
          sequence.

          IMPORTANT:  In either case the file will be closed.

     >    ALL control characters (below ASCII 28) will be discarded,
          including the carriage return/linefeed that terminates the
          line.

     >    A file must be open for reading or a macro error will
          result.

     See also ROPEn, RCLOse

     ______

     RETUrn
     ______

     Default key:   none
     Description:   Return from a CALLed macro.

     Example:

          {return}            No arguments.

     This function will return control to a location determined by the
     last CALL or PUSHstack function.  See PUSHstack for a more
     complete description of CALL and RETUrn.

     NOTE:  If a RETUrn is encountered and no CALL or PUSHstack has
     been executed, a STOP will occur.  This is useful in macros that
     are CALLed and are also used standalone (such as protocol file
     transfer macros).



                   {COMMO} (tm)  Macro Programming Guide            52



     See also CALL, PUSHstack, POPStack.

     _____

     ROPEn
     _____

     Default key:   none
     Description:   Open a file for reading.

     General Form:

          {ROPEn name,label}

               name      The name of a string variable.

               label     A label to GOTO when a READ is attempted at
                         the end of the file.

     Example:

          {ropen c:\bbs\file.txt,nomore}     Open the file and set the
                                             label "nomore" to GOTO
                                             when the end of the file
                                             is reached.

     TIPS on using ROPEn:

     >    Only one file may be opened for reading (and one for
          writing).

     >    The file will be automatically closed when the end of the
          file is encountered during a READ (whether or not a label is
          specified).  An RCLOse is not needed in this situation and
          will cause a macro error.

     See also READ, RCLOse.

     _____

     RTRAn
     _____

     Default key:   none
     Description:   Maintain Receive Translate Table.

     Switches:

               I1 or I   Initialize Receive Translate Table to default
                         values (consecutive 0 to 255).



                   {COMMO} (tm)  Macro Programming Guide            53


               I0        Do not initialize (default).

     Examples:

          {rtran y}                Turn receive translation ON.

          {rtran-i n}              Initialize the table and turn it
                                   OFF.

          {rtran 26,0}             Change ASCII 26 to null (ASCII 0,
                                   which will not display).

          {rtran-i y,#8,224,240}   Initialize the table, turn receive
                                   translation ON, change ASCII 224 to
                                   240, 225 to 241, ..., 231 to 247. 

          {rtran}                  Toggle receive translation ON/OFF.

          {rtran #13,65,78,#13,78,65,#13,97,110,#13,110,97}
                                   ROT13 translation.  This swaps the
                                   first 13 letters of the alphabet
                                   for the second 13.

     Rules for RTRAn arguments are the same as for the {rtr=} item in
     the Setup File.  In addition, "n" may be used as the first
     argument to turn receive translation OFF at any time.

     See "Edit Setup File" in the User Guide and Reference for details
     and more examples.

     TIPS on using RTRAn:

     >    Some control characters are unaffected by translation when
          certain features are enabled.  Examples:  XON (17) and XOFF
          (19) are not translated when Software Flow Control is on. 
          ENQ (5) is not translated when ENQ/ACK emulation is on.

     >    When the Capture Mode is set to RAW, data will be captured
          prior to translation.  FILTER and SCREEN captures will
          contain translated data.

     >    LOOKfor will always see translated data.  Use FILTER Capture
          Mode to see what LOOKfor sees.

     >    In GETString, incoming data (as well as locally typed
          characters) will be translated with the Receive Translate
          Table (it may be necessary to turn receive translation off
          during certain GETString functions).

     See also STRAn.



                   {COMMO} (tm)  Macro Programming Guide            54


     _______

     RXMOdem
     _______

     Default key:   none
     Description:   Receive a file using Xmodem.

     Switches:

               C1 or C   Use CRC error correction (default).
               C0        Use Checksum error correction.
               D1 or D   Cancel transfer if carrier detect is lost
                         (default).
               D0        Ignore state of carrier detect.
               A1 or A   Sound the alarm at end of transfer.
               A0        Do not sound the alarm (default).
               W         Wait for a keypress at end of transfer.
               Wn        Wait for "n" seconds, "n" may range from 0 to
                         999.  Press a key to cancel the wait.
                         Note:  Default (no "W" switch) is no wait.

     Example:

          {rxmo-a c:\dl\file.zip}            Receive "file.zip", sound
                                             the alarm.

     TIPS on using RXMOdem:

     >    IMPORTANT!  If the file already exists it will be
          overwritten without warning.  The IFEXist function may be
          used to prevent this if desired.

     >    Block size is established by the sender and may be changed
          on a block-by-block basis.

     >    The transfer will be cancelled after 10 consecutive errors,
          if the sender cancels or if you press Esc.

     >    The Exit Code (test with IFER) will be set at the end of the
          transfer.  The Exit Code will also be stored in the variable
          "_err".  0 means success, 1 means failure.

     >    If the Usage Log is enabled, an entry will be made at the
          end of each transfer.

     See also SXMOdem.



                   {COMMO} (tm)  Macro Programming Guide            55


     ______

     SCREen
     ______

     Default key:   Alt-I
     Description:   Screen Image Save.

     Examples:

          {screen}                 Open Screen Image Save window.
          {screen y}               Append screen image to current
                                   file.
          {screen y,commo.scr}     Append screen image to indicated
                                   file. (and change current
                                   pathname).
          {screen n,c:\file.xyz}   Change current screen image
                                   pathname (don't save screen to
                                   file).

     __________

     SCROllback
     __________

     Default key:   Alt-K
     Description:   Display Scrollback Buffer

     Example:

          {scroll}            No arguments.

     ____

     SEND
     ____

     Default key:   none
     Description:   Send a string to the modem (serial port).

     Examples:

          {send Fred|~~Brucker|~~%_pass%|}

                              Send my first and last name with
                              carriage returns and 1 second delays,
                              then send the current password and a
                              <cr>.

          {send ^[^[}         Send two <esc> characters.



                   {COMMO} (tm)  Macro Programming Guide            56


          {send  }            Send a space (there must be two spaces,
                              the first is the separator).

          {send %line}        Send the string in the variable "line".


     NOTE:  See Appendix D in the User Guide and Reference for
     information on how to represent any character in a SEND function.

     ______

     SETEsc
     ______

     Default key:   none
     Description:   Define a label to GOTO when Esc is pressed.

     General form:

          {setesc label}

               label     A label to GOTO when the user presses Esc
                         during macro execution.

     Switches:

               P1 or P   The user will be prompted with, "A macro is
                         running.  Terminate it?."  If the user
                         answers "no," macro processing will continue
                         as if nothing had happened.  If "yes,"
                         processing will GOTO the label.  If the label
                         does not exist, a STOP will be executed.  P1
                         is the default.

               P0        The user will not be prompted.  Processing
                         will GOTO the label if it exists, else a STOP
                         will be executed.

     Examples:

          {setesc finish}          GOTO label, with prompt.
          {sete-p0 done}           GOTO label, without prompt.
          {setesc}                 Reset to no label (STOP on Esc).


     This function is used to "capture" the Esc key during macro
     execution, especially when a MACLoad is used to load a new Macro
     File.  It will help prevent accidental macro terminations.

     The macro at the label would typically reload COMMO.MAC, thus
     restoring the user's familiar environment.



                   {COMMO} (tm)  Macro Programming Guide            57


     NOTE:  In the various command windows, Esc is normally used to
     exit the window.  Use Ctrl-Break to bring up the prompt.

     ______

     SETGet
     ______

     Default key:   none
     Description:   Set parameters for GETString functions.

     General form:

          {SETGet seconds,label,y/n/l,string}

               seconds   GETString timeout.  If a character is not
                         entered in the specified amount of time, the
                         macro in the second argument will be started. 
                         May be 0 to 999.  Default is 0 (disabled).

               label     Timeout macro.  Macro to GOTO if the time in
                         the first argument expires.  If no macro is
                         specified or if the macro label is invalid,
                         control will pass to the function following
                         the GETString.  Default is no macro.

                         Note that if the timer expires no variable
                         assignment will be made.  Any previous
                         assignment will be unaltered.

               y/n/l     Echo Status.  If this is "yes", characters
                         entered at the local or remote terminals will
                         be echoed back to the remote and displayed
                         locally.  This is the default.

                         If "no", characters will not be echoed to
                         either location.

                         If "local", characters will be displayed
                         locally, but not echoed to the remote.  This
                         should be used when the remote is a host
                         system.

                         IMPORTANT!  This setting is independent of
                         Local Echo.  Turn on Local Echo if necessary
                         for local display of data transmitted with
                         SEND, ASCIiup, etc.

               string    Terminator response.  This string will be
                         sent and/or displayed locally (in accord with
                         the Echo Status) when a carriage return is
                         received (input terminated).  This is



                   {COMMO} (tm)  Macro Programming Guide            58


                         typically a carriage return/linefeed.  May be
                         up to 32 characters.  Default is no string.

     Example:

          {setg 120,noget,y,^m^j}       Set GETString parameters.


     The SETGet function will set parameters for all subsequent
     GETString functions.  It may be executed at any time to modify
     the parameters.

     When macro processing terminates, the parameters will be reset to
     the default values.

     Default arguments are:   GETString timeout        0 (disabled)
                              Timeout macro            none 
                              Echo status              y (echo on)
                              Terminator response      none

     IMPORTANT!  Null arguments in the SETGet function will be set to
     these defaults.

     See also: GETString.

     _______

     SETLook
     _______

     Default key:   none
     Description:   Set parameters for LOOKfor functions.

     General form:

          {SETLook seconds,label,seconds,string}

               seconds   LOOKfor timeout.  Maximum time in seconds to
                         look for a string.  If the string is not
                         found in the allotted time, the macro in the
                         second argument will be started.  May be 0 to
                         999.  Default is 0 (disabled).  

               label     Timeout macro.  Macro to GOTO if the time in
                         the first argument expires.  If no macro is
                         specified or if the macro label is invalid,
                         control will pass to the function following
                         the LOOKfor.

               seconds   Prompt timeout.  During a LOOKfor function
                         unwanted prompts may appear like "Press any
                         key" or "More [Y/n]", etc.  This argument is



                   {COMMO} (tm)  Macro Programming Guide            59


                         the time in seconds to wait at a prompt (no
                         input from the modem) before sending the
                         string in the fourth argument.  Usually you
                         would send "|" or "n|".

                         When the response string is sent the timer is
                         restarted, allowing any number of prompts to
                         be satisfied (until the LOOKfor itself is
                         satisfied or times out).

                         The timer will also be restarted if any keys
                         are typed while waiting.  This allows a
                         manual response to a prompt which the macro
                         does not handle.

                         IMPORTANT!  The prompt timeout should be long
                         enough (or disabled entirely) to prevent the
                         response from being sent when there is a long
                         delay without a prompt.  This might occur
                         right after connection while the BBS software
                         is loading or when a "door" program is
                         loading.

                         Failure to heed this warning will result in
                         "n" responses to "First name?" and other
                         undesirable effects.

                         May be 0 to 999.  Default is 0 (disabled).

               string    Prompt response.  String to send when the
                         time in the third argument runs out.  May be
                         up to 32 characters.  Default is no string.

     Example:

          {setl 60,abc,4,n|}       Set LOOKfor parameters


     The SETLook function will set parameters for all subsequent
     LOOKfor functions.  It may be executed at any time to modify the
     parameters.

     When macro processing terminates, the parameters will be reset to
     the default values.

     Default arguments are:   LOOKfor timeout     0 (disabled)
                              Timeout macro       none 
                              Prompt timeout      0 (disabled)
                              Prompt response     none

     IMPORTANT!  Null arguments in the SETLook function will revert to
     these defaults.



                   {COMMO} (tm)  Macro Programming Guide            60



     See also: LOOKfor, CALOok, GOLOok.

     ___________

     SETVariable
     ___________

     Default key:   none
     Description:   Assign a string to a variable name.

     General form:

          {SETVariable name,string}

               name      The name of the variable to which the string
                         will be assigned.

               string    The string may be the name of another {COMMO}
                         variable or an environment variable.  In
                         these cases further expansion is controlled
                         by switches (see below).

     Switches:

               E1 or E   This switch indicates that the second
                         argument is a DOS environment variable.  If
                         it is not found in the environment, the
                         {COMMO} variable will be set to NULL.

                         Note that environment variable names are CASE
                         SENSITIVE (they are usually upper case).

               E0        Normal variable (default).

               S1 or S   This switch will cause "double expansion" of
                         the second argument (indirect variable). 
                         First {COMMO} will substitute any variables
                         indicated by "%" signs.  The resulting string
                         (which must NOT begin with a "%") will then
                         be treated as a variable name and expanded
                         again.

                         This facility may be used to create a
                         "subscript."

               S0        Single expansion (default).

     Examples:

          {setv net,nodeid}             Assign the string "nodeid" to
                                        the variable name "net".



                   {COMMO} (tm)  Macro Programming Guide            61



          {setv nodeid,dirasnt}         Assign the string "dirasnt" to
                                        the variable name "nodeid".

          {setv-s bbs,nodeid}           Assuming the above examples
                                        have been executed, this will
                                        set the variable "bbs" to
                                        "dirasnt".

          {setv-s board,%net}           Assuming the above examples
                                        have been executed, this will
                                        set the variable "board" to
                                        "dirasnt".

          {setv-s xxx,yyy%index}        Suppose the variable "index"
                                        has the value "3".  It will be
                                        expanded first, then "yyy3"
                                        will be expanded and its value
                                        assigned to "xxx".

          {setv-e abc,TABLE}            Assuming a "SET TABLE=" DOS
                                        command has been executed
                                        prior to running {COMMO}, the
                                        variable "abc" will be set to
                                        the environment string.

          {setv abc} or {setv abc,}     Set the variable "abc" to null
                                        (it will be deleted from
                                        variable space).

     _____

     SHELl
     _____

     Default key:   Alt-S
     Description:   Shell to DOS.

     Example:

          {shell}             No arguments.

     _____

     SFLOw
     _____

     Default key:   none
     Description:   Set Software Flow Control toggle.

     Examples:



                   {COMMO} (tm)  Macro Programming Guide            62


          {sflow}             Toggle Software Flow Control on/off.
          {sflow y}           Turn on Software Flow Control.
          {sflow n}           Turn off Software Flow Control.

     _____

     SOUNd
     _____

     Default key:   none
     Description:   Set Master Sound toggle.

     Examples:

          {sound}             Toggle Master Sound on/off.
          {sound y}           Turn on Master Sound.
          {sound n}           Turn off Master Sound.

     _______

     SPDCtrl
     _______

     Default key:   none
     Description:   Serial port display control.

     Examples:

          {spdc y}            Serial port display is ON.
          {spdc n}            Serial port display is OFF.

     This function will suppress display of any data received from the
     serial port.  It can be used when a "clean" display is desired
     during automated procedures.

     TIPS on using SPDCtrl:

     >    ANSI control sequences are not processed while the display
          is OFF (Terminal Emulation effectively reverts to TTY).

     >    LOOKfor will function normally, but remember that ANSI
          sequences are not stripped.  Make a manual run using TTY
          emulation to see what the LOOKfor will see.

     >    SCREEN Capture Mode will not capture any of the incoming
          data.  Use RAW mode or FILTER mode instead (FILTER capture
          will be affected by the Translate Table, but will still
          contain ANSI sequences).

     >    Serial port display will always be restored to ON at macro
          termination.



                   {COMMO} (tm)  Macro Programming Guide            63


     _______

     SPOCtrl
     _______

     Default key:   none
     Description:   Serial port output control.

     Examples:

          {spoc y}            Serial port output is ON.
          {spoc n}            Serial port output is OFF.

     This function will inhibit any data from being sent to the serial
     port.  All other program operations will be normal.  It is used
     for "local mode" in host macros (no data is sent to the modem).

     Serial port output will always be restored to ON at macro
     termination.

     __________

     STATusline
     __________

     Default key:   none
     Description:   Set Status Line toggle.

     IMPORTANT!  The Status Line is {COMMO}'s instrument panel.  You
     should not turn it off until you are familiar with operating the
     program.

     Examples:

          {statusline}        Toggle Status Line on/off.
          {status y}          Turn on Status Line.
          {status n}          Turn off Status Line.

     When the Status Line is off (not visible), the bottom line of the
     display becomes part of the Terminal Screen.

     The STATusline function is ignored while in Chat Mode.

     ____

     STOP
     ____

     Default key:   none
     Description:   Halt macro execution.

     Examples:



                   {COMMO} (tm)  Macro Programming Guide            64



          {stop}              No arguments.
          {}                  Short form.

     STOP always returns {COMMO} to manual operation in the Terminal
     Screen.  It should be used to end login macros.

     _____

     STRAn
     _____

     Default key:   none
     Description:   Maintain Send Translate Table.

     Switches:

               I1 or I   Initialize Send Translate Table to default
                         values (consecutive 0 to 255).

               I0        Do not initialize (default).

     Examples:

          {stran y}           Turn send translation ON.

          {stran-i n}         Initialize the table and turn it OFF.

          {stran-i y,92,47}   Initialize the table, turn send
                              translation ON, change "\" to "/".

          {stran}             Toggle send translation ON/OFF.

          {stran #13,65,78,#13,78,65,#13,97,110,#13,110,97}
                              ROT13 translation.  This swaps the first
                              13 letters of the alphabet for the
                              second 13.

     Rules for STRAn arguments are the same as for the {str=} item in
     the Setup File.  In addition, "n" may be used as the first
     argument to turn send translation OFF at any time.

     See "Edit Setup File" in the User Guide and Reference for details
     and more examples.

     TIPS on using STRAn:

     >    Some control characters are unaffected by translation when
          certain features are enabled.  Examples:  XON (17) and XOFF
          (19) are not translated when Software Flow Control is on. 
          When ENQ/ACK emulation is on, an ACK sent in response to an
          ENQ will not be translated.



                   {COMMO} (tm)  Macro Programming Guide            65



     >    In GETString, data echoed to the modem (and displayed
          locally) will be translated with the Send Translate Table
          (it may be necessary to turn send translation off during
          certain GETString functions).

     See also RTRAn.

     _________

     SUBString
     _________

     Default key:   none
     Description:   Move a substring to a variable.

     General form:

          {SUBString name,start,count,string}

               name      The name of the variable to which the
                         substring will be assigned.

               start     The starting character number (first
                         character is "1").  If it is negative,
                         {COMMO} will count in from the end of the
                         string.

                         If it is too large and positive, the
                         substring will be null.

                         If it is too large and negative, the
                         substring will start at the beginning of the
                         string.

               count     The number of characters to use.  If the
                         number is too large, {COMMO} will use as many
                         as possible.  If the count is 0, the
                         substring will be null.

               string    The string to use.

     Examples:

          {subs var-sub,2,4,abcdefgh}        Set "var-sub" to "bcde".
          {subs newvar,-5,20,abcdefgh}       Set "newvar" to "defgh".



                   {COMMO} (tm)  Macro Programming Guide            66


     _______

     SXMOdem
     _______

     Default key:   none
     Description:   Send a file using Xmodem.

     Switches:

               K1 or K   Use 1024 byte block size (Xmodem-1k).
               K0        Use 128 byte block size (default).
               D1 or D   Cancel transfer if carrier detect is lost
                         (default).
               D0        Ignore state of carrier detect.
               A1 or A   Sound the alarm at end of transfer.
               A0        Do not sound the alarm (default).
               W         Wait for a keypress at end of transfer.
               Wn        Wait for "n" seconds, "n" may range from 0 to
                         999.  Press a key to cancel the wait.
                         Note:  Default (no "W" switch) is no wait.

     Example:

          {sxmo-ka c:\ul\file.zip}           Send "file.zip" using
                                             1024 byte block size,
                                             sound the alarm.

     TIPS on using SXMOdem:

     >    The transfer will be cancelled after 10 consecutive errors,
          if the receiver cancels or if you press Esc.

     >    CRC vs. Checksum mode is established by the receiver.

     >    The Exit Code (test with IFER) will be set at the end of the
          transfer.  The Exit Code will also be stored in the variable
          "_err".  0 means success, 1 means failure.

     >    If the Usage Log is enabled, an entry will be made at the
          end of each transfer.

     See also RXMOdem.

     _______

     TOGGles
     _______

     Default key:   Alt-T
     Description:   Set various toggle parameters.



                   {COMMO} (tm)  Macro Programming Guide            67


     Example:

          {toggles}                Open Set Toggles window.

     ______

     UNMArk
     ______

     Default key:   none
     Description:   Unmark Dialing Directory entries.

     Example:

          {unmark joes-bbs,file-city}        Unmark listed entries.
          {unmark}                           Unmark all entries.

     See the description of the MARK function for the rules on writing
     macro Dialing Strings.

     See also: DIAL, MARK.

     _____

     VTCUr
     _____

     Default key:   none
     Description:   Define a VT102 cursor (arrow) key.

     Example:

          {vtcur ^[[A|^[OA}        Define up-arrow key strings.

     The first string is sent when cursor mode is active; the second
     string is sent when application mode is active (these modes are
     controlled by the host).

     The two strings must be separated by a "|".  Use "^m" for
     carriage return if necessary.

     See also VTPAd.

     _____

     VTPAd
     _____

     Default key:   none
     Description:   Define a VT102 keypad key.

     Example:



                   {COMMO} (tm)  Macro Programming Guide            68



          {vtpad 5|^[Ou}           Define keypad "5" key strings.

     The first string is sent when numeric mode is active; the second
     string is sent when application mode is active (these modes are
     controlled by the host).

     The two strings must be separated by a "|".  Use "^m" for
     carriage return if necessary.

     See also VTCUr.

     ______

     WCLOse
     ______

     Default key:   none
     Description:   Close the write file.

     Example:

          {wclose}            No arguments.

     IMPORTANT!  A macro error will result if you try to close and no
     file is open.

     See also WOPEn, WRITE.

     _____

     WOPEn
     _____

     Default key:   none
     Description:   Open a file for writing.

     Switches:

               A1 or A   Open the file in "append" mode.  New lines
                         written to the file will be added at the end. 
                         If the file doesn't exist, it will be
                         created.

               A0        Open the file in "create" mode.  If the file
                         exists, it will be erased (default).

     Examples:

          {wopen c:\bbs\file.txt}       Open the file in create mode.

          {wopen-a c:\data\word.fil}    Open the file in append mode.



                   {COMMO} (tm)  Macro Programming Guide            69



     TIP on using WOPEn:

     >    Only one file may be opened for writing (and one for
          reading).

     See also WRITe, WCLOse.

     _____

     WRITe
     _____

     Default key:   none
     Description:   Write a string to the write file.

     Examples:

          {write %nextline}        Write the contents of the variable
                                   "nextline" to the write file.

          {write}                  Write a carriage return/linefeed
                                   only (blank line) to the file.

          {write %num%> }          Write the contents of "num"
                                   followed by a ">" and a space.

     TIPS on writing to files:

     >    A file must be open for writing or a macro error will
          result.

     >    The string will be written as one line, terminated by a
          carriage return/linefeed.

     >    Control character conversion is NOT performed on the write
          string.

     >    A macro error will result if the disk is full.

     See also WOPEn, WCLOse



                   {COMMO} (tm)  Macro Programming Guide            70


     ========================================
     Appendix A   Table of {COMMO} Key-labels
     ========================================

     Key-labels are also macro labels with the added advantage that
     the macro can be started by pressing the associated key from the
     Terminal Screen.  Most "extended" keys may be assigned this way. 
     If the same key-label appears more than once, the first
     occurrence will be used.  Note that key-labels are case
     insensitive.  The caret (^) indicates the Ctrl key.

     Enhanced keyboard key-labels are listed below.


          Key Name     Key-label     Key Name     Key-label
          ________     _________     ________     _________

          Normal-F1     nf1   ...    Normal-F10    nf0
          Ctrl-F1       cf1   ...    Ctrl-F10      cf0
          Shift-F1      sf1   ...    Shift-F10     sf0
          Alt-F1        af1   ...    Alt-F10       af0

          Alt-A         ala   ...    Alt-Z         alz
          Alt-1         al1   ...    Alt-0         al0
          Alt =         al=          Alt -         al-

          Escape        esc          Grey *        gr*
          Grey -        gr-          Grey +        gr+

          Backspace     bsp          ^Backspace    cbs
          Tab           tab          Shift-tab     stb
          Enter         ent          ^Enter        cen

          Home          hom          End           end
          PgUp          pgu          PgDn          pgd
          Up-Arrow      upa          Down-Arrow    dna
          Left-Arrow    lfa          Right-Arrow   rta
          Insert        ins          Delete        del

          ^Home         chm          ^End          cnd
          ^PgUp         cpu          ^PgDn         cpd
          ^Right-Arrow  cra          ^Left-Arrow   cla

          Keypad-0      kp0   ...    Keypad-9      kp9
          Keypad-.      kp.          ^PrtSc        cpr



                   {COMMO} (tm)  Macro Programming Guide            71


     Enhanced Keyboard Key-labels
     ============================

     IMPORTANT!  To use the following keys you must tell {COMMO} to
     test for the enhanced keyboard.  The item {tek=yes} must appear
     in your Setup File.

          Normal-F11    nfa          Normal-F12    nfb
          Ctrl-F11      cfa          Ctrl-F12      cfb
          Shift-F11     sfa          Shift-F12     sfb
          Alt-F11       afa          Alt-F12       afb

          Alt-[         al[          Alt-]         al]
          Alt-;         al;          Alt-'         al'
          Alt-,         al<          Alt-.         al.
          Alt-/         al/          Alt-\         al\
          Alt-*         al*          Alt-`         al`
          Center Key    cky

     The Center Key is the Keypad 5 with Numlock off.

     The keys in the second group may also work with the 83-key
     keyboard if your BIOS supports the enhanced keyboard.



                   {COMMO} (tm)  Macro Programming Guide            72


     =======================================
     Appendix B   List of Reserved Variables
     =======================================

     USER-DEFINED Reserved Variables
     -------------------------------

          _modini        Modem Initialization String
          _dialpf        Default Dialing Prefix
          _dialsf        Default Dialing Suffix
          _dialsr        Dialing Success responses
          _dialfr        Dialing Failure responses
          _uselog        Pathname of Usage Log

     BUILT-IN Variables
     ------------------

          _hom      {COMMO} home directory: c:\commo\, etc.
          _set      Filename of Setup File
          _fon      Filename of Dialing Directory
          _mac      Filename of default Macro File
          _cap      Current Capture File pathname
          _scr      Current Screen Image File pathname
          _err      Errorlevel from last EXEC-D, RXMOdem or SXMOdem
          _pos      Position in string
          _len      Length of string
          _por      Current serial port number: 1, 2, etc.
          _spe      Current serial port speed: 2400, 9600, etc.
          _mod      Last speed reported by modem
          _nci      Number of characters in input buffer
          _pas      Current Password String
          _ela      Elapsed time in minutes
          _dat      Full date, mm/dd/yy
          _mon      Month, mm
          _day      Day of the month, dd
          _yea      Year, yy
          _dwn      Numeric day of the week: 1=Mon, ... , 7=Sun
          _dwt      Text day of the week: Mon, Tue, ...
          _tim      Full time, hh:mm xm (am or pm)
          _24h      24 hour, hh
          _12h      12 hour, hh
          _amp      Am/pm indicator, xm
          _min      Minute, mm
          _sec      Second, ss
          _row      Current cursor row
          _col      Current cursor column



                   {COMMO} (tm)  Macro Programming Guide            73


     ============================================
     Appendix C   Macro Functions Listed by Class
     ============================================

     Variable manipulation
     ---------------------

          SETVariable    Assign a string to a variable name
          INCRement      Increment a numeric variable
          DECRement      Decrement a numeric variable
          INSTring       Find a string within a string
          SUBString      Move a substring to a variable
          LENGth         Determine the length of a string

     Looking for text
     ----------------

          AUTO           Auto Receive
          SETLook        Set LOOKfor parameters
          CALOok         Additional string to look for
          GOLOok         Additional string to look for
          LOOKfor        Look for string from port

     File Input/Output
     -----------------

          ROPEn          Open a file for reading
          READ           Read from a file to a variable
          RCLOse         Close the read file
          WOPEn          Open a file for writing
          WRITe          Write to a file from a variable
          WCLOse         Close the write file

     Dialing/connect/disconnect
     --------------------------

          ABAUd          AutoBaud toggle
          DIAL           Dialing Directory
          DPARms         Set dialing default parameters
          HANGup         Drop DTR to hangup
          MARK           Mark numbers for dialing
          UNMArk         Unmark Dialing Directory entries

     Modem control
     -------------

          PARMs          Set current terminal parameters
          LOCAlecho      Local Echo toggle
          INITmodem      Send modem init string
          HFLOW          Hardware flow control
          SFLOw          Software flow control
          BREAk          Send Break



                   {COMMO} (tm)  Macro Programming Guide            74


          LIGHts         Signal Lights toggle
          SPOCtrl        Serial port output control

     Send/receive data
     -----------------

          ASCIiup        ASCII Upload
          SEND           Send a text string
          CAPMode        Set Capture Mode
          CAPTure        Capture File Options
          SETGet         Set GETString parameters
          GETString      Get a string from the modem
          RXMOdem        Receive a file using Xmodem
          SXMOdem        Send a file using Xmodem
          PASSword       Send current password
          RTRAn          Maintain receive Translate Table
          STRAn          Maintain send Translate Table
          VTCUr          VT102 cursor key strings
          VTPAd          VT102 keypad key strings

     Testing
     -------

          COMPare        Compare a variable to a string
          IFCOndition    Test conditions set by COMPare
          IFERrorlevel   Test if Exit Code   number
          IFEXist        Test for existence of file(s)
          IFCArrier      Test for presence of carrier detect

     Macro control
     -------------

          CALL           Execute a macro
          RETUrn         Return from a CALL
          PUSHstack      Push a location to the macro stack
          POPStack       Pop from the macro stack
          GOTO           Transfer control to a label
          STOP           Stop macro processing
          MACLoad        Load a new Macro File
          PAUSe          Pause for interval 1-999 second
          HOLD           Hold until specified 24 hr time
          NOCArrier      Set a label to GOTO when carrier is lost
          SETEsc         Set a label to GOTO on Esc

     Video/sound related
     -------------------

          CLEAr          Clear Screen
          CURSor         Terminal Screen cursor toggle
          DISPlay        Display a string to the screen
          SCREen         Screen Image Save
          SPDCtrl        Serial port display control



                   {COMMO} (tm)  Macro Programming Guide            75


          STATusline     Status Line on/off toggle
          SOUNd          Master Sound toggle
          ALARm          Ring the alarm
          BEEP           Sound a beep

     Miscellaneous
     -------------

          CHATmode       Chat Mode toggle
          DOORway        Doorway Mode toggle
          ELAPse         Reset the elapsed timer
          EDIT           Edit a file
          EXECute        Execute a DOS command
          EXIT           Exit {COMMO}
          HELP           Online Help topic
          INPUt          Input from the keyboard
          MACRo          Macro Processor window
          NOOP           No-op function, does nothing
          PRINtlog       Print Log toggle
          SCROllback     Display Scrollback Buffer
          SHELl          Shell to DOS
          TOGGles        Set Toggles


                                   - end -

```
{% endraw %}

## UPGRADE.DOC

{% raw %}
```

                     {COMMO} 4.xx to 5.xx Upgrade Guide
                     ----------------------------------


Upgrading is very easy if you follow the instructions below.  These changes
will bring you up to date.  Then you will probably want to take advantage of
the new features to greatly increase the power of your macros.


Configuration File
------------------

COMMO.CFG has been replaced with COMMO.SET.  All items in this new file are
"keyworded."  This means that in the future you will only have to add an item
or two to become current.  You won't have to redo the entire file any more.

The easiest way to upgrade to the new Setup File is to print out your
Configuration File.  Then start {COMMO} 5.xx and press Alt-G to edit the Setup
File.  Change any items as needed, then exit and restart {COMMO} (the Setup
File is processed only at startup now).


Dialing Directory
-----------------

You will only need to change your Dialing Directory if you have used any
alternate Dialing Prefixes -- #1, #2, #3 or #4.

The Dialing Prefix items in the Configuration File are gone, but you may now
establish String Variables to have as many prefixes (or suffixes) as desired.
For example, suppose you had this in 4.xx:

        23 * {AT U1 DT}        Dial Prefix #2

and you had a Dialing Directory entry:

        Joes-BBS        {#2 555-1234} {pword} ...

In 5.xx you would put the following in your Setup File:

        {set prefix2,AT U1 DT}   Alternate prefix

You could use a variable name of your choice instead of "prefix2."

Finally, in your Dialing Directory change the entry to:

        Joes-BBS        {%prefix2% 555-1234} {pword} ...


Macro File
----------

Macro labels (they used to be called macro-id's) must now begin with a colon
(:).  They may also be made up of one or more characters, of which the first
eight are significant.

So just change all your macro labels from {abc} to {:abc}, etc., for now.

The password must now be specified with the built-in variable "_pas".  So just
replace all occurrences of "#" with "%_pas".

The EXECute "%" parameters have all been replaced with String Variables or
with Function Switches.  Here is a list of parameters and what to change them
to:

 Old Parameter   Change to
 -------------   ---------

        %a      Use "A" switch:  EXEC-A ...
        %w      Use "W" switch:  EXEC-W ...
        %p      %_port   (or %_por)
        %s      %_speed  (or %_spe)
        %m      %_modem  (or %_mod)
        %c      %_cap
        %u      String variable, "%uldir" for example.
        %d      String variable, "%dldir" for example.
        %k      Control character, e.g. change "%k^L" to just "^L".
        %i      Use INPUt function prior to EXEC.  See example
                below.

EXED and EXEN are no longer valid functions and must be specified with
Function Switches.  Change EXED to EXEC-D and EXEN to EXEC-N.

Note that Function Switches may be used in any combination.  Here is an
example of a macro to upload a file using Zmodem with DSZ:

 ZMODEM batch   {:af2} {setv file,%uldir\}
                {input file,Enter a filename to UPLOAD}
                {exec-AWD c:\proto\DSZ.com port %_port sz -m %file} {}

This sets the temporary variable "file" to the upload directory "uldir".  The
INPUt function will display the current value of "file" in the input line
(with the cursor at the end).

Then DSZ will be run (direct, because of the "D" switch).  The contents of the
variable "file" will be used for the filename.  After DSZ executes, the alarm
will sound ("A" switch) and {COMMO} will wait for a key press ("W" switch) so
you can see the results.


A few other functions now have Function Switches to replace other parameters:

 Change                         To
 ------                         --

 {dial 5,abc,c}                 {dial-C 5,abc}
 {macload other.mac,abc,r}      {macload-R other.mac,abc}
 {doorway s}                    {doorway-S}


Key Changes
-----------

A number of key commands now have different default keys.  These new keys may
conflict with existing macros, so check them carefully.  Here is a list of the
changes:

 Old key        New key         Key Command
 -------        -------         -----------

  Alt-H          F1             Online Help
  Alt-Q          Alt-H          Hang Up Modem
  Alt-U          Alt-N          Multi Number Dial
  Alt-L          Alt-P          Set Terminal Parameters
  Alt-P          Alt-W          Send Password String
  Alt-3          Alt-T          Master Sound toggle
  Alt-4          Alt-T          AutoBaud toggle
  Alt-5          Alt-T          Local Echo toggle
  Alt-0          Alt-T          Signal Lights toggle


                                - end -
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2909

     Volume in drive A has no label
     Directory of A:\

    COMMO52  ZIP    165526   3-07-92   5:20a
    CMOHP52  ZIP     57078   3-07-92   5:20a
    PCOMM170 ZIP     59628   5-22-92   5:12p
    GO       TXT      1540  11-03-92  12:37p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        38   1-31-91  12:58a
            6 file(s)     307338 bytes
                           12288 bytes free
