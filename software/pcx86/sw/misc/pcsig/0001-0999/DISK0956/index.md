---
layout: page
title: "PC-SIG Diskette Library (Disk #956)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0956/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0956"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROFONEDIT - EDITOR"

    PROCOMM PLUS is a good telecommunications program, but you can only
    edit single entries at a time.  With PROFONEDIT PLUS, you can mark
    entire blocks of the directory for moving, deleting, inserting,
    exchanging, packing, and sorting telephone entries.  Edit your PROCOMM
    PLUS dialing directory like a wordprocessor.
    
    PROFONEDIT PLUS gives more editing capabilities on each line of the
    directory and can ``undo'' multiple-editing changes.  A backup file can
    be created at any time and on-line help explains each command of the
    program menu.  This program is a necessity for anyone using
    PROCOMM PLUS who wants to edit and reorganize their telephone
    directory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES956.TXT

{% raw %}
```
Disk No  956
Program Title: PROFONEDIT PLUS version 1.01
PC-SIG version 1.1

    ProComm is a good telecommunications program, but it only allows you to
edit single entries at a time, but with PROFONEDIT PLUS you can mark entire
blocks of the directory for moving, deleting, inserting, exchanging,
packing, and sorting telephone entries. It lets you edit your ProComm
dialing directory like a wordprocessor.

    PROFONEDIT PLUS also gives more editing capabilities on each line of
the directory, and can "undo" multiple-editing changes. A backup file of
the directory can be created at any time. This program has on-line help
which explains each command of the program menu. PROFONEDIT is a necessity
for anyone using ProComm who wants to edit and reorganize their telephone
directory.

Usage: ProComm Dialing Directory Editor

System Requirements: 128K memory, one disk drive, and a version of PROCOMM.

How to Start: Type: PFE-READ.ME (press enter).

Suggested Registration: $20.00

File Descriptions:

PFEPLUS  EXE  Main program.
PFE-READ ME   How to get started.
PFE-HIST ORY  The story behind PROFONEDIT PLUS.
PFEPLUS  DIR  Data file used by PROFONEDIT PLUS.
PFEPLUS  DOC  Program Documentation.
PFEPLUS  HLP  Help file for the program.
SS-READ  ME   Instuctions for SSPATCH.
SSPATCH  EXE  A simple patch program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PFEPLUS.DOC

{% raw %}
```

          
          
          
          
          
          
          
          
          
                          P R O F O N E D I T   P L U S (tm)
          
                                     Version 1.0
          
                    The Directory Processor for PROCOMM PLUS (tm)
          
          
          
          
          
          
                Copyright (c) 1988 Sunflower Systems and Karl Brendel.
                                 All rights reserved
          
                 "Profonedit", "Profonedit Plus", "PFE", "PFE+", and
                      "The Directory Processor for PROCOMM PLUS"
                         are Trademarks of Sunflower Systems.
          
           "PROCOMM PLUS" is the trademark of Datastorm Technologies, Inc.
          
          The Profonedit family of software is the product of Karl Brendel.
          
                                 _______
                            ____|__     |                   (tm)
                         --|       |    |-------------------
                           |   ____|__  |  Association of
                           |  |       |_|  Shareware
                           |__|   o   |    Professionals
                         -----|   |   |---------------------
                              |___|___|    MEMBER
          
          
     
     
     
     Profonedit Plus 1.0 Registration
     
     Registration of Profonedit Plus (PFE+) is $20 for a single copy. For
     volume discounts and site licenses, consult the users' manual or Sunflower
     Systems. Payment includes all costs for one copy of PFE+ sent by first
     class mail to the US, Canada, or Mexico. Payment from other countries
     should include additional funds (or charge authority) for shipment of four
     ounces of air mail, or should check the appropriate box at the bottom of
     this page.
     
     Payment must be made in US dollars. Checks and money orders must be drawn
     on US institutions only. Please remit to:
     
                                  Sunflower Systems
                                  718 East B Avenue
                                Hutchinson, KS  67501
     
     
     Name         : ...........................................................
     
     Address      : ...........................................................
     
     City, ST zip : ...........................................................
     
     Telephone    : ...........................................................
     
     For corporate registration, please provide the name of the person to be
     notified of updates, etc.:
     
     Name         : ...........................................................
     
     Title        : ...........................................................
     
     
     Source of your copy of PFE+ : ............................................
     
     Remarks      : ...........................................................
     
     ..........................................................................
     
     [ ]  Please charge my bank card : $............  [ ] VISA  [ ] MasterCard
     
     Card Number ............................................ Exp ............
     
     
     Signature : .............................................................
     
     Check one:
     
     [ ] Please send me a copy of the most recent version of PFE+.
     [ ] Please send me a copy of the most recent version of PFE+ ONLY if the
         version I am registering is NOT the most recent. Otherwise send me a
         postpaid order card for a future update.
     [ ] Please send me a postpaid order card for an update of PFE+ at any time
         of my choice.
     [ ] I am placing an international order but have NOT included funds for
         postage. I will forward appropriate US funds when I wish to receive an
         update of PFE+.
     




                             T A B L E   O F   C O N T E N T S



                License                                             i

             I. What Profonedit Plus is, what it requires           1

            II. How to run Profonedit Plus: A Quick Start           1

           III. Running Profonedit Plus: In Detail                  2

            IV. Getting Help from Profonedit Plus                   3

             V. The Editor                                          4

            VI. Profonedit Plus Commands: How They Operate          5

           VII. Profonedit Plus Commands: A Summary                 5

          VIII. Support of Profonedit Plus                          7

            IX. Thanks and Miscellaneous Remarks                    8

                Ordering Information                               10

                Corporate and Quantity Purchases                   11



                                PROFONEDIT PLUS                       - i -



                                       License
          
          
          Profonedit Plus (PFE+) is Shareware--not public domain, not free.
          
          PFE+ is copyright (c) 1988 by Sunflower Systems and Karl Brendel.
          All rights reserved.
          
          If you gave money to receive PFE+ from anyone except Sunflower
          Systems, you paid for a copying service, not for PFE+ itself. If
          your supplier told you otherwise, it misled you, and Sunflower
          Systems would very much appreciate knowing about it.
          
          Non-registered users are granted a limited license to use PFE+ on
          a trial basis for the purpose of determining whether it is
          suitable for their needs.  Use of PFE+, except for this limited
          purpose, requires registration.  Other use of unregistered copies
          of PFE+ by any person, business, corporation, governmental agency
          or other entity or institution is strictly forbidden.
          
          Registration permits a user the license to use PFE+ only on a
          single computer at a time; a registered user may use the program
          on a different computer, but may not use the program on more than
          one computer at the same time.
          
          No user may modify PFE+ in any way, including but not limited to
          decompiling, disassembling or otherwise reverse engineering the
          program, without written permission from Sunflower Systems.
          
          PFE+ is supplied as-is, with no warranties, expressed or implied,
          including, without limitation, the warranties of merchantability
          and of fitness for any purpose. The user assumes all liability
          for damages, direct or consequential, which may result from the
          use of PFE+. Use of PFE+ constitutes acceptance of these
          conditions.
          
          All users are granted a limited license to copy PFE+ only for the
          trial use of others subject to the above limitations, and also
          the following:
          
            PFE+ must be copied in unmodified form, complete with the file
            containing this license information.
          
            The full PFE+ documentation must be included with the copy.
          
            No fee, charge or other compensation may be accepted or
            requested by any licensee for providing copies of PFE+ without
            written permission from Sunflower Systems.
          
            PFE+ may not be distributed in conjunction with any other
            product without written permission from Sunflower Systems.



                                PROFONEDIT PLUS                      - ii -



          Operators of electronic bulletin board systems (Sysops) may post
          PFE+ for downloading by their users only as long as the above
          conditions are met.
          
          Distributors of public domain or user supported software may
          distribute copies of PFE+ subject to the above conditions only
          after obtaining written permission from Sunflower Systems. Such
          permission is usually granted; please write for details.



                                PROFONEDIT PLUS                       - 1 -


          I. What Profonedit Plus is, what it requires
          
          PFE+ (PFE+) is the PROCOMM PLUS dialing directory processor. You
          only need PFE+ if you use PROCOMM PLUS--and if you use PROCOMM
          PLUS, you need PFE+. PFE+ requires MS-DOS or PC-DOS 2.0 or later,
          and a computer with a display compatible with the IBM CGA or MDA
          (including the IBM EGA and VGA) or the Hercules monochrome
          graphics adapters, and an IBM PC or AT compatible keyboard. (Some
          keyboard commands described here may work differently or not at
          all on an IBM PC jr.) PFE+ requires a minimum of 200K bytes of
          available RAM.
          
          PFE+ is a processor in the same way that your favorite word
          processor is: it will let you edit and rearrange your PROCOMM
          PLUS dialing directory ("directory") to suit yourself, without
          tedious one-line-at-a-time entry and deletion.
          
          PFE+'s benefits include: maintaining multiple directories,
          eliminating uninteresting entries, rapidly sorting to suit your
          changing requirements, reducing the time spent looking for and
          rearranging entries, and more. PFE+ lets you work in the same
          screen colors that you chose for PROCOMM PLUS: no forced "bright
          yellow on black," no boring repetition of a configuration
          process.
          
          PFE+'s features include: full on-line help for all functions, full
          screen/full directory editing (using either function and cursor
          keys, or control-key combinations), multiple "undos" of changes,
          retention of a backup file (disk space permitting), packing,
          moving and deleting entries, inserting blank entries, sorting on
          up to six fields, and more. All of PFE+'s commands operate on
          ranges of lines that you mark, never forcing you into working on
          the whole directory to change just a few entries.
          
          
          
          
          
          
          II. How to run Profonedit Plus: A Quick Start
          
          A WARNING: If you use PROCOMM PLUS's DOS Gateway to run PFE+, do
          NOT save the directory to disk when you leave PFE+! The results
          are unpredictable. At this time, PROCOMM PLUS is not aware of
          PFE+, and cannot be expected to suspect that you have changed the
          disk file while through the gateway. (If you do run PFE+ when
          using the DOS Gateway, you will be reminded of this warning
          during PFE+'s startup.)
          
          Place the files PFEPLUS.EXE and PFEPLUS.HLP in the same
          subdirectory on the same disk. If you can, put them in the same
          subdirectory on the same disk as the files PCPLUS.DIR and
          PCPLUS.PRM, or any other PROCOMM PLUS directory files you want to
          process.



                                PROFONEDIT PLUS                       - 2 -


          Make the PFE+ subdirectory the current one (using the dos CD
          command). If you want to process PCPLUS.DIR, and it is in the
          PFE+ subdirectory, then at the DOS prompt, just type:
          
                          PFEPLUS[Enter]
          
          ("[Enter]" means to press the Enter or Return key. Don't press the
          [].)
          
          If the PFE+ display exhibits unacceptable "snow" (ie, if your
          display looks trashy) then restart PFE+ thus:;
          
                          PFEPLUS /I
          
          If you want to process a different directory, or PCPLUS.DIR is not
          in the PFE+ subdirectory, then at the DOS prompt type:
          
                          PFEPLUS dr:\path\filename[Enter]
          
          where "dr:" is the drive the directory is on (if not the same as
          the one PFE+ is on), "\path\" is the "path" to that file (if not
          the PFE+ subdirectory), and "filename" is the name of the file.
          PFE+ forces the filename extension to be ".DIR", like PROCOMM
          PLUS does. (For starters, put PFEPLUS.DIR in the PFE+
          subdirectory, and command "PFEPLUS PFEPLUS" to see the sample
          directory file.)
          
          To leave PFE+ and return to DOS, press Esc. If you made changes to
          the directory while in PFE+, you will be prompted to save it to
          disk. If you do, and disk space permits, the original disk file
          will be saved, with the extension .BAQ (eg, PCPLUS.BAQ).
          
          
          
          
          
          
          III. Running Profonedit Plus: In Detail
          
          Please read section II, "How to run PFEPLUS: A Quick Start,"
          before reading this section. Some information there is not
          repeated here.
          
          PFE+ can only find PFEPLUS.HLP if it is in the same subdirectory
          with it and that ("the PFE+ subdirectory") is the current
          subdirectory on the current drive. It can run without
          PFEPLUS.HLP, but on-line help will not be available.
          
          The full command for running PFE+ is:
          
                  PFEPLUS [dr:][path\][filename] [/a] [/b] [/c] [/i] [/s]
          



                                PROFONEDIT PLUS                       - 3 -


          Note that the filename extension is forced to be ".DIR" and can
          be omitted on the command line. Do not type the []. Any item
          within [] is optional. Although all arguments are shown in lower
          case, they may be in upper or mixed case. The hyphen character
          (-) may be used in place of the slash character. The dr: and/or
          path\ and/or filename arguments, if used, must not be separated
          from each other by spaces, but must be separated from "PFEPLUS"
          and any other arguments by spaces or tab characters. All other
          arguments must be separated from each other and from "PFEPLUS" by
          at least one space or tab character.
          
          The arguments are:
          
                  dr:             the drive where the directory is
                  path\           the path to the directory
                  filename        the name of the directory
                  /a              turn off Alarm beeps
                  /b              use only "Black and white" (this may be
                                  of use to "Herc" owners)
                  /c              use default Color
                  /i              assume IBM CGA card and suppress "snow"
                                  on display
                  /s              turn off Sound effects (not alarms)
          
          If PFE+ fails to find the directory file, it looks in the DOS
          "environment" for the string "PCPLUS". Finding it, PFE+ will use
          its value to search for the directory. Still failing to find the
          directory, PFE+ will stop with an appropriate message. (See the
          PROCOMM PLUS users' manual for information on the environment and
          PCPLUS.)
          
          If PFE+ finds the directory, it also looks for the file
          PCPLUS.PRM, which contains information on your choice of screen
          colors, sound usage, etc. If PFE+ fails to find PCPLUS.PRM it
          uses assumed values for colors and sounds. Note that the "/x"
          arguments allow you to force PFE+ to override both the assumed
          values and those contained in PCPLUS.PRM.
          
          
          
          
          
          
          IV. Getting Help from Profonedit Plus
          
          At any time that PFE+ is displaying the directory, you can press
          AltZ or function key 1 ("F1") to display a help window. ("AltZ"
          means to hold the "Alt" key down while pressing "Z" or "z".) To
          close the help window, press the Escape key ("Esc"). (All PFE+
          windows close with Esc, or in response to a requested prompt.)
          
          The information displayed in the initial help window depends on
          PFE+'s state at the time the window opened: whether some other
          window was open, or you were in the Editor, etc.



                                PROFONEDIT PLUS                       - 4 -






                                PROFONEDIT PLUS                       - 5 -


          A list of related topics appears near the bottom of each help
          window. One of the topics is always highlighted. The space bar
          and the cursor keys move the highlighting from topic to topic.
          Pressing Enter changes the display to a window about the
          highlighted topic.
          
          Selection of the topic "Editor Help" leads, unsurprisingly, to the
          "Editor Help" window. From that window, by making obvious
          choices, any topic in the help system can be displayed. Many of
          those windows list "Editor Help" as a topic, to enable a return
          to the "top" of the system.
          
          Once you know how to use the PFE+ help system, you can put this
          manual away.
          
          
          
          
          
          
          V. The Editor
          
          PFE+ works just like a text editor or word processor. Of course,
          not all text editors and word processors work alike. PFE+ follows
          the example of QEdit (the well-known programmers' editor by
          SemWare) except where PROCOMM PLUS compatibility requires
          otherwise. For a complete list of editing and cursor control
          keys, open the Editor Help window and select Keys as the next
          topic.
          
          By default, PFE+ operates in "overwrite mode," meaning that when
          you type a character, it replaces the character which had been at
          the cursor location. Pressing Ins or ^V will change the mode from
          overwrite to "insert," or back again. ("^V" means to hold the
          "Ctrl" or "Control" key down while pressing "V" or "v".) In
          insert mode, typing a character will cause the characters from
          the cursor to the end of the field to move right one column. The
          character at the right end of the field will be lost. When in
          insert mode, the cursor will appear larger than when in overwrite
          mode. Whichever mode is selected will stay in effect until Ins/^V
          is pressed again.
          
          In some columns, PFE+ accepts only certain characters--the same
          characters that PROCOMM PLUS would accept when revising an entry.
          In the "D" (Duplex) column, for example, PFE+ accepts only "F",
          "f", "H", or "h".
          
          In the Baud field, not only does PFE+ reject some characters, but
          when it accepts one which lets it guess the correct baud, it
          completes the entry. For example, typing "1" in the first Baud
          column leads PFE+ to place "9" in the second and "2" in the
          third, for a Baud of 19200. The Terminal and Protocol fields
          also try to "guess" your intent.



                                PROFONEDIT PLUS                       - 6 -


          VI. Profonedit Plus Commands: How They Operate
          
          PFE+ commands are given by pressing Alt keys. The commands and
          their Alt keys are listed in the lower portion of the Editor
          screen. Each command has at least one help window, in addition to
          a brief listing in one of the "Commands" help windows.
          
          When commands are to work on a range of entries (a "block"), the
          block must be "marked." To mark a block, place the cursor at the
          top line in the block and press F3; then place the cursor at the
          bottom line in the block and press F4. Since a block command will
          always operate on the marked block, you may want to turn the
          marks off between commands. F2 turns marks off, or if they are
          already off, it turns them on.
          
          If there is no marked block, some commands (Insert and Clear) will
          work on the cursor line, just as if it were a one-line marked
          block.
          
          Some commands require both a marked block and the location of the
          cursor line, and will not operate if the cursor line is within
          the marked block. The Move command, for example, moves the marked
          block so that it is right before the cursor line.
          
          Don't worry about messing up the directory by clearing or moving a
          block when you didn't mean to. Every potentially destructive
          command makes an in-RAM backup copy of the lines to be changed,
          before it changes them. The Undo command allows quick recovery
          from accidental changes. PFE+ keeps as many backups available as
          RAM permits, disposing of the oldest ones when it needs the RAM
          for something else. You can often undo the changes all the way
          back to the original state of the directory.
          
          A few commands may prompt you for a single-letter response. Such
          prompts appear in the form, "Question? (Y/N)". The case of your
          response doesn't matter: "Y" is as good as "y". Pressing Esc will
          close the prompt window and cancel the command.
          
          
          
          
          
          
          VII. Profonedit Plus: Commands: A Summary
          
          A more complete explanation of the commands is available in the
          PFE+ help system. From Editor Help, select Commands. Continue
          through the Commands help windows until the command of interest
          is listed. Then select that command as the next help topic.
          



                                PROFONEDIT PLUS                       - 7 -


          The commands:
          
            BackUp (AltB): saves the state of the directory and the Editor,
            in RAM, for later use by Undo. (Backup on command is in
            addition to the automatic backups PFE+ does.)
          
            Clear (AltC): over a marked block, or at the cursor line if
            nothing is marked, replaces the Name, Number and Script fields
            with spaces, the Total and Last fields with 0s, and restores
            the Baud, P, D, S and Duplex fields to default values.
          
            Exchange (AltE): swaps the contents of a marked block with an
            equal-sized block starting at the cursor line. The two blocks
            cannot overlap, and there must be enough lines after the cursor
            to make the exchange.
          
            Insert (AltI): replaces the lines in a marked block, or the
            cursor line, with empty lines (lines having only spaces in the
            Name, Number and Script fields). The original lines are moved
            down in the directory, and empty lines below them are moved
            into their place. (Insert does not clear any lines, or restore
            any default values.)
          
            Move (AltM): moves a marked block to the position in front of
            the cursor line. (If the cursor line is the last line in the
            directory, then the block is moved to the end of the
            directory.)
          
            Pack (AltP): moves the empty lines in a marked block to its
            bottom.
          
            Register (AltR): displays PFE+ licensing and registration
            information, and offers to print a registration form.
          
            Sort (AltS): rearranges the lines in a marked block, based on
            your selection of up to six of seven fields (Name, Number, Area
            Code, Exchange, Baud, Total Calls and Last Calls) and two
            directions (ascending and descending) per field.
          
            Toggle Display (AltT): changes the displayed fields between
            Number/Baud/P/D/S/D and Total/Last/Protocol/Terminal.
          
            Undo (AltU): restores the state of the directory and the Editor
            to that of a previous backup.
          
            eXchange Dir: prompts to save the directory to disk, and loads a
            new directory file from disk.
          
            Exit (Esc): prompts to save the directory to disk, and quits
            PFE+ to return to DOS.
          
          Pack and Sort may prompt "Page by page or the entire block (P/B)".
          The prompt will occur only if the marked block starts at the top
          of one page (a line number ending in 1) and ends at the bottom of



                                PROFONEDIT PLUS                       - 8 -


          another page (a line number ending in 0). Answering "P" or "p"
          will cause all lines effected to remain on their original pages,
          as if the command had been repeated for each page individually.
          Answering "B" or "b" will cause the command to operate on the
          entire block as a unit. Pressing Esc will cancel the command.
          
          Sort will open a window displaying the choice of fields and
          directions. If a previous sort has been done, the previous choice
          of fields and directions will appear as the default choice. To
          accept the default, press F10. To cancel the sort, press Esc.
          
          To edit the choice of fields and directions, use the cursor keys,
          Enter, and the space bar to move the cursor to a desired field
          and direction. Place a number from 1 through 6 at that location:
          1 for the most significant field, higher numbers for less
          significant fields. The number should appear beside the field
          name, in the direction column. An example:
          
                                              Asc  Des
                                Name           3
                                Number
                                  Area Code    2
                                  Exchange
                                Baud
                                Total Calls
                                Last Call           1
          
          would sort first: by Last Call, in descending order (i.e., most
          recent calls first); then: by Area Code, in ascending order;
          last: by Name, in ascending order.
          
          Two things to note about sorts on the Number fields: You cannot
          sort on Area Code or Exchange if you sort on Number (and vice
          versa); and sorting on Area Code or Exchange will not be
          meaningful unless your numbers are right justified, in the format
          "nnnnnnn aaa xxx nnnn", where "n" and space are "I don't care
          characters," "aaa" is the area code, and "xxx" is the exchange.
          
          
          
          
          
          
          VIII. Support of Profonedit Plus
          
          Sunflower Systems supports PFE+ by email on CompuServe
          [73307,3101], on GEnie [K.BRENDEL], by voice telephone, and by
          USPS mail. Registered users receive the author's home telephone
          number, for support during evenings and weekends, and can expect
          to receive prompt replies to their questions communicated by
          CompuServe, GEnie or USPS.
          



                                PROFONEDIT PLUS                       - 9 -


          Any user may also exchange email with Karl Brendel on the public-
          access bulletin board systems listed on the first page of the
          PFEPLUS.DIR file.
          
          Unregistered users are invited to write to Sunflower Systems.
          Because past experience has indicated that most support requests
          involve matters covered in the manual or the help system, and
          because support is a primary incentive for users to register, we
          may not always reply to unregistered users unless it is apparent
          that they have found a real problem with the program or the
          manual. In any event, if an individual reply is desired,
          unregistered users should provide a stamped, self-addressed
          envelope. (Note: We have never failed to reply to an unregistered
          user--we just don't promise a reply.)
          
          If you find a "bug," or some other flaw, in PFE+, please report
          it to Sunflower Systems. Please include a copy of your
          AUTOEXEC.BAT and CONFIG.SYS files, a list of any resident
          programs not named in those files, the report given by CHKDSK,
          and a full description of your system, including the type of DOS
          (MS or PC, and version number). If PFE+ makes a mistake it can't
          recover from, it will offer to save the directory file (if
          possible) and will print out an error report on the screen, with
          a request to record it. We would greatly appreciate a full report
          on the incident, but please do not feel that this requires a
          voice call late at night. Although we will certainly want to know
          soon, we can wait for email or USPS, and be sure the information
          is right.
          
          
          
          
          
          
          IX. Thanks and Miscellaneous Remarks
          
          First, thanks to you, both for trying PFE+ and for reading the
          manual. PFE+ exists only in the hopes of your using it. Again,
          Thanks!
          
          And thanks to the Datastorm Technologies people for their long
          effort in developing, improving, and marketing PROCOMM and
          PROCOMM PLUS. They've done a lot for computerized communications,
          and a lot for the Shareware movement. And for the encouragement
          they've given me, Thanks!
          
          Thanks also to my friends, new and old, whose previous help has
          improved PFE+: Sammy [QEdit II] Mitchell, John [GoodLook] Dove,
          Pradeep [Turbo Development System] Arora, and Tom [Checkeroo]
          Rodman. Thanks also to Jim Fouch, who not only tested, but
          contributed a closed conference on his Sleepy Hollow PC Board to
          make it easier to coordinate testing. Be assured that bugs or
          other flaws that remain in Profonedit are my fault, not theirs,
          and that much of what is good about PFE+ resulted from their



                                PROFONEDIT PLUS                      - 10 -


          feedback. Thanks! (The terms appearing in [] above are the names
          of programs, both Shareware and conventional, which those people
          have authored. Look for them--they're all first-rate programs.)
          
          PFE+ is written in Turbo Pascal, version 4. It uses many of the
          Turbo Professional routines published by TurboPower Software.
          Behind every good programmer are a good editor and a good
          debugger. Despite having Borland's excellent integrated editor-
          compiler environment, the editor behind PFE+ was QEdit 2, the
          multifile, multiwindow macroeditor from Semware, written by Sammy
          Mitchell. The debugger was TDebug+ 4, the source/assembler
          debugger/animator, published by TurboPower Software, based on
          David Baldwin's TDebug. Another aid to my habit of slinging
          terminal quantities of mistyped code onto the disk was the Turbo
          Development System 4 (TDS), a fast syntax checker which virtually
          guarantees successful first-time compilation of Turbo Pascal,
          published by MicroHelp, Inc., written by Pradeep Arora. Ordering
          information for these products may be found in any major magazine
          for MS-DOS programmers. (Contact me if you don't find the
          information elsewhere.) They are all reasonably priced (indeed,
          cheaply priced for conventional distribution) and to be highly
          recommended. On top of all that, Thanks to the authors and
          publishers for making them available!
          
          The Association of Shareware Professionals is a professional
          organization devoted to improving and promoting the Shareware
          industry. All of its members agree to adhere to a code of
          standards in their products and in customer relations. Shareware
          authors, and prospective Shareware authors, can contact me for
          further information. It may be the most important step in their
          Shareware careers.
          
          MS-DOS is the trademark of Microsoft. PC-DOS, PC jr, and AT are
          the trademarks of IBM. Turbo Pascal is the trademark of Borland
          International. Other names mentioned as the products of other
          companies are the trademarks of those companies.



                                PROFONEDIT PLUS                      - 11 -


                                 Ordering Information
          
          
          A PFE+ registration licenses you to use the product on a regular
          basis. Users need register only one version of PFE+; registration
          includes licensed use of all later releases.
          
          Registration of PFE+ costs only $20 for a single copy license. It
          entitles the registrant to receive, at no further cost, one
          upgrade of PFE+, on diskette, by mail. The registrant may choose
          when to receive the upgrade. Note that the upgrade benefit
          applies to versions of PFE+ supporting future versions of PROCOMM
          PLUS, as well. In addition, the registrant will receive mailed
          notification of major updates, (which can be ordered at a nominal
          cost--currently $5), and support from Sunflower Systems, above
          and beyond the support provided to unregistered users. See
          "Support of PFE PLUS." If you have read this far, thank you!
          Here's a benefit just from doing that: When you run PFE+, if you
          include " /f" or " -f" (for Fast) after the name PFEPLUS, you
          will not be delayed for key presses during the startup.
          
          Please use the order form from the beginning of this manual or
          from the Registration command when placing an order.
          
          Orders from outside the US: Please send instruments drawn on US
          institutions in US dollars.
          
          



                                PROFONEDIT PLUS                      - 12 -


                              Corporate and Quantity Purchases
          
          
          All corporate, business, government or other commercial users of
          PFE+ must be registered. We offer quantity discounts starting at
          the eleventh copy.  Corporate or site licensing is also
          available.
          
          We accept purchase orders in amounts of $100 or over only. All
          other orders should be prepaid.
          
          Orders in quantities of less than 75 units are handled as quantity
          purchases. Purchases of over 75 units may be handled as quantity
          purchases or as corporate licensing agreements. Licensing
          agreements allow duplication and distribution of specific numbers
          of copies within the licensed institution. Duplication of
          multiple copies (other than evaluation copies) is not allowed
          except through execution of a licensing agreement. Please write
          for details.
          
          All prices and discounts are subject to change without notice.
          Discounts are not cumulative; they apply to single orders of like
          products only.
          
          The quantity purchase discounts are as follows:
          
                  0- 10 copies:      no discount
                 11- 25 copies:     15% discount
                 26- 50 copies:     20% discount
                 51-100 copies:     25% discount
                101-200 copies:     30% discount
                201-300 copies:     35% discount
                301+    copies:     40% discount
          
          You may not use PFE+ within your organization, beyond the
          evaluation period, without a prior purchase or license
          arrangement.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0956

     Volume in drive A has no label
     Directory of A:\

    PFE-HIST ORY       487   3-16-88   1:01a
    PFE-READ ME       3467   3-16-88   1:01a
    PFEPLUS  DIR     15050   3-16-88   1:01a
    PFEPLUS  DOC     37562   3-16-88   1:01a
    PFEPLUS  EXE    106096   3-16-88   1:01a
    PFEPLUS  HLP     12963   3-16-88   1:01a
    SS-READ  ME       1303   3-16-88   1:01a
    SSPATCH  EXE     19776   3-16-88   1:01a
    FILES956 TXT      1464   5-16-88  11:49a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-11-88   9:22a
    MANUAL   BAT       147   5-11-88   9:38a
           12 file(s)     198893 bytes
                          116736 bytes free
