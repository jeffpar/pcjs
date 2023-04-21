---
layout: page
title: "PC-SIG Diskette Library (Disk #65)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0065/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0065"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DESKTOP 2 OF 2  (#64 FIRST DISK)"

    DESKTOP is a LOTUS 1-2-3 worksheet featuring a menu-driven manager's
    appointment calendar, phone directory, and more.  It is particularly
    useful for consultants and people who need to track time and expenses.
    DESKTOP is sophisticated and relatively easy to use.  The companion
    tutorial and documentation disk is available on Disk #65
    
    System Requirements: 265K RAM, two disk drives, LOTUS 1-2-3 version 1A
    
    How to Start:  Access through LOTUS 1-2-3
    
    Suggested Registration:  $25 (for 2 disks)
    
    File Descriptions:
    
    The First Disk Contains:
    DTCOPY   BAT  Makes copies of Desktop
    COPYIT   BAT  Batch file to copy DESKTOP DTCOPY   BAT  Batch file
    DESKTOP  WKS  DESKTOP main worksheet
    SAMPLE   WKS  DESKTOP sample worksheet
    
    The Second Disk Contains:
    DESK     DOC  Documentation for DESKTOP.
    INSTRUCT WKS  DESKTOP instruction worksheet.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESK.DOC

{% raw %}
```


                                    DESK.DOC



                        DOCUMENTATION FILE FOR DESKTOP                        DOCUMENTATION FILE FOR DESKTOP                        DOCUMENTATION FILE FOR DESKTOP


         1.0  DESKTOP DISTRIBUTION NOTICE

              Desktop is being distributed under the "Freeware"
         concept.  For those of you unfamiliar with it, here's how it
         operates.  You may send two preformatted double-sided
         diskettes to us using either DOS 1.1 or 2.0, a prepaid disk
         mailer, and your name and address.  We will send you a
         complete copy of Desktop and its associated sample and
         documentation files.  If the product does not meet your
         needs, please pay nothing.  If the product does meet your
         needs, we would appreciate a contribution of whatever you
         feel is appropriate.  We suggest a donation of $25.00 as an
         appropriate amount, but contributions are completely
         voluntary though encouraged.

              If you do not wish to send disks and a prepaid mailer,
         you may just send the contribution to us, and we will pay for
         the costs of the diskettes (double-sided only) and mailer.
         Contributors of whatever nature will be placed on our mailing
         list for revisions, program updates, and future products.

              The Freeware concept was initially developed by Andrew
         Fluegelman. The term "FREEWARE" is a trademark of The
         Headlands Press.  The Headlands Press provides a catalog of
         information about Freeware products available from multiple
         sources.  They may be contacted at PO Box 862, Tiburon, CA
         94920 or Source: TCP204.

              Whether or not you contribute, you are encouraged to
         copy and distribute this program subject to the following
         restrictions:

              1.  Do not distribute altered copies.  You may
         distribute a separate set of alterations if you like.  If you
         make alterations, we'd like to see them.

              2.  Desktop is to be distributed as a complete
         "distribution copy" only.  Copy all documentation files when
         you distribute it.

              3.  No fee is to be charged for copying or distributing
         the program.

              4.  Commercial sale of Desktop in any manner is
         prohibited without Microcomputer Management's written
         permission.

         User Groups/Clubs may distribute this product in the same
         manner as has been outlined for individuals.  So may computer
         bulletin boards, though the program and it's associated
         documentation is probably too long for telecommunication


               Microcomputer Management                  Page -1-





                                    DESK.DOC



         distribution unless error-checking protocols are included by
         the service involved.

         2.0  Requirements to run Desktop

              Desktop is a template for Lotus Development
         Corporation's 1-2-3 application program.  It is neither
         associated with nor sanctioned by Lotus Development
         Corporation.  It will run under either DOS 1.1 or 2.0, but
         requires the following hardware and software for operation:


              a.  an IBM PC or XT with at least 2 disk drives,
         double-sided, 192 K of memory (required by 1-2-3), either a
         monochrome or color monitor or both, and optionally, a
         printer.

              b.  Lotus Development Corporation's 1-2-3 program,
         release 1A only.  Desktop will not work with Lotus' 1-2-3
         release 1.0, because the file save/retrieve format has been
         changed in the revision by Lotus.

              c.  the Desktop software, which consists of two disks
         and four files, DESKTOP.WKS, SAMPLE.WKS (on disk 1),
         INSTRUCT.WKS and this file, DESK.DOC (on disk 2).


         3.0  What Desktop Is

              Desktop is just that...a simulation of one manager's
         desktop.  What we do involves (a) getting phone messages, (b)
         making and keeping (sometimes) appointments, (c) doodling and
         calculating on a scratchpad, (d) running a consulting
         business in addition to my other work which requires tracking
         client time, and (e) writing memos and letters.  Essentially,
         Desktop manages these functions in a simple but effective
         manner.  Desktop is divided into five functional areas (and
         several other support ones, like the instructions on-line),
         is menu-driven for ease of use, makes heavy use of 1-2-3's
         macro and programming capabilities, and is able to print what
         is recorded if a printer is connected to the computer.  The
         file INSTRUCT.WKS on this disk has relatively complete step-
         by-step instructions for using each range in Desktop.  The
         file SAMPLE.WKS on disk 1 shows a partially filled-in real
         application file of Desktop from which you can learn.  But
         the best place to learn about Desktop is either in actual
         operation, or by reading Lotus Development Corporation's 1-2-
         3 User Manual when things get unclear.

         4.0  Suggested Mode of Proceeding

              4.1  Boot the computer (i.e., start it with a DOS system
         disk.  Put your Lotus System Disk in drive A: (or call it
         from the hard disk if you have an XT or "souped up" PC), type


               Microcomputer Management                  Page -2-





                                    DESK.DOC



         "lotus" (no quotes) at the A> prompt, hit return when the
         Access Manager comes up on screen, and you'll be in 1-2-3.
         Put this disk (disk 2) in your B: drive on a regular machine
         or the floppy on a XT and from the main 1-2-3 screen type the
         following letters:

                             "/FD<the letter of the drive with Disk 2>
         Carriage Return"  (don't type the quotes)

           [This command sets the file directory to Desktop's disk 2]

                             "/FRInstruct Carriage Return"  (no
         quotes)

           [This command tells 1-2-3 to get the file INSTRUCT from
         disk 2]

              You will be looking at a Desktop worksheet on which
         instructions have been printed.  You will be in the main
         choice menu to begin with, and can "point" with the arrow
         keys to any of the available choices for instructions on the
         various Desktop options.  To escape the menu without making a
         choice, either <Esc> or <Ctrl-Break> will do nicely and put
         you in 1-2-3's "ready" mode.  Move around the INSTRUCT
         worksheet, read the steps given for each range, try some of
         the secondary menus if you'd like such as ALT + P to print
         the instructions, and then exit to practice with SAMPLE.WKS.

              4.2  SAMPLE.WKS

              Sample.Wks is a sample Desktop worksheet on disk 1 which
         you can load, play with, and learn from before engaging
         Desktop for real.  It has filled in messages (try some finds
         and even extracts), a memo about an article we didn't like,
         some scratchpad spreadsheet computations, a client list, and
         even a partial calendar.  Move around the worksheet at will,
         either by typing Alt + Z to get the main menu or by going
         directly (F5 + range name, like "Instructions") to what you
         want to examine.  Print the memo; check options with which
         you are uncomfortable in the 1-2-3 reference manual.

              4.3  DESKTOP.WKS

              This is the main template, given to you blank for your
         own use.  If you follow the suggested learning flow, you
         should be ready to use it when you call it up.


         5.0  Tips, Pointers, and Caveats

              In order to semi-automate DESKTOP, I've made some
         choices you may not endorse.  They are eminently changeable
         of course; that is the beauty of 1-2-3.  For instance, the
         print menu automatically specifies a date header of the


               Microcomputer Management                  Page -3-





                                    DESK.DOC



         current date for whatever you're printing out, and a name
         header of the range involved.  You may wish to modify this to
         your taste, either by mucking around in the menu macros, or
         better, by changing the options through 1-2-3's own /PPOH
         command.  Here are some other things:

              5.1  Print Ranges

              We set up the print ranges so that the full range would
         be printed each time a range was called.  So, to take
         Messages as an example, you'll get almost three full pages of
         output even if your message list is one item long.  If you
         are not very familiar with 1-2-3, just leave it alone - a
         little printer paper won't kill you, and you'll be sure of
         getting a list of all your messages, clients, and the like                           all                           all
         whenever you print.  If you want to save paper, the on-line
         instructions tell you how.

              5.2 Menus

              Desktop has three different menus you can use.  The main
         menu you see when you load the template, or when you type Alt
         + Z, is escapable by hitting the <esc> key on your keyboard
         at any time.  One of 1-2-3's limitations is that if you like
         to call menu options by typing the first letter of what you
         want to do, 1-2-3 will only go to the first occurrence of                                               first                                               first
         that letter in a menu.  So, to Save and Exit Desktop, typing
         "S" won't do it, because 1-2-3 will think you want to go to
         the Scratchpad range, and do that instead.  Avoid this
         problem by pointing the cursor with the arrow keys whenever
         you're in a menu.  A similar confusion is possible in the
         Find menu (Alt + F).

              5.3  Macros

              It is possible to invoke a macro without meaning to.
         For instance, if you hit the Alt + C (clear) macro in any
         range without having pre-positioned the cursor at the "clear"
         column in the messages range, you're in trouble, right?  No,
         just hit <Ctrl-Break> to abort this (or any) pending
         operation, and all will be as it was.  There is no reason if
         you're willing to learn them that you cannot invoke the
         macros directly, for your own purposes.  To see the listing
         of macros, sort of a semi-command summary, type F5 Macros.

         6.0  Teaching Value of Desktop


              1-2-3 is nothing short of an awesome application for
         creativity in programming.  But awesomeness brings
         complexity, and all the help files in the world haven't
         simplified 1-2-3 for many users to the point where they feel
         comfortable doing useful work with it.  Desktop is a step in
         the direction of helping you understand some of the fuzzier


               Microcomputer Management                  Page -4-





                                    DESK.DOC



         corners of 1-2-3, if you want to use it in that way.  For
         instance, using Desktop as a teaching guide, you can
         understand the following things about 1-2-3's abilities:

              .  creating and invoking user-driven menus.

              .  creating and invoking user-driven macros,
         independently and from menus.

              .  date manipulation.

              .  range name creation, use, and protection.

              .  print automation.

              .  file save automation.


         7.0  Revisions and Such

              We hope to be able to add features to this first
         revision of Desktop in the future, to catch any errors
         that might remain in the programs, and to update you as
         necessary and possible.  To do so, we need your name and
         address.  Please send all correspondence, and contributions,
         to:

              Microcomputer Management
              45 Drum Hill Road
              Concord, MA  01742


         8.0  Disclaimer

              Microcomputer Management and any of its program authors
         shall have no liability or responsibility to customers or any
         other persons or entities with respect to any loss, damage or
         problems alleged to be caused directly or indirectly by
         programs distributed in any manner by Microcomputer
         Management.  This disclaimer includes but is not limited to
         any interruption of service, loss of business or anticipated
         profits, or consequential damages resulting from the use or
         operation of our programs.

         NOTE:     Good computer processing procedure dictates that
         the user test all programs, run sample sets of data, and run
         Desktop in parallel with the system previously in place for a
         period of time adequate to insure that the results of the
         computer program are satisfactory.

         9.0  Command Summary

              Only three commands, besides the rudimentary ones of
         loading 1-2-3 and Desktop, are necessary to use the system.


               Microcomputer Management                  Page -5-





                                    DESK.DOC



         They are:

                             1.  Alt + z:  this calls up the main
         menu, which allow you to go to any of Desktop's five
         operating ranges at will.  Instructions within the range
         itself will help you make entries.

                             2.  Alt + f:  The "Findit" menu.  This
         menu presupposes that you have entered some search criteria
         in the relevant (messages or appointments) range to be
         searched, and are prepared to engage the search.

                             3.  Alt + p:  The "Print" menu.  This
         menu allows you to print any of Desktop's operating ranges at
         will.

              In addition, you can dive down further into Desktop's
         macro commands if you'd like to learn more than this
         rudimentary way of operating the system.  For instance, by
         typing F5, then the word "macros" (no quotes), you can
         examine all of Desktop's macro functions and invoke them
         anywhere on the spreadsheet you'd like by typing Alt plus the
         letter of the macro in which you are interested.  So to enter
         a date, you could type Alt + D.
































               Microcomputer Management                  Page -6-



```
{% endraw %}

## FILES65.TXT

{% raw %}
```
Disk No:   65
Program Title:  DESKTOP  (Disk 2 of 2)
PC-SIG version:  1.1

This is the companion disk to #64 DESKTOP.  DESKTOP is a LOTUS 1-2-3
worksheet featuring a menu-driven manager's appointment calendar, phone
directory, and more.  It is particularly useful for consultants and
people who need to track time and expenses.  This disk contains program
documentation and instructions.

Usage:  Desktop Organization, Time Management.

Special Requirements:  Two disk drives and LOTUS 1-2-3 version 1A.

How to Start:  Access through LOTUS 1-2-3.

Suggested Registration:  $25 (for two disks).

File Descriptions:

DESK     DOC  Documentation for DESKTOP.
INSTRUCT WKS  DESKTOP instruction worksheet.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0065

     Volume in drive A has no label
     Directory of A:\

    DESK     DOC     15427   7-18-83   9:39a
    FILES65  TXT       846  12-16-88   2:30p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-02-88   8:51a
    INSTRUCT WKS    116480   7-17-83   7:55p
            5 file(s)     133331 bytes
                           25088 bytes free
