---
layout: page
title: "PC-SIG Diskette Library (Disk #2228)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2228/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2228"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIRECTORY FREEDOM"

    DIRECTORY FREEDOM is intended for the person with a basic working
    knowledge of subdirectories, etc., by remembering filenames when, for
    example, they wish to selectively copy some files from a hard disk
    subdirectory.
    
    It's a fast, compact (12K) alternative to a DOS shell and provides for
    selective file and directory operations (e.g., copying files), a
    scrollable environment for examining the contents of directories, and
    user-defined keys to operate on selected files.  For example, define
    the CONTROL-F1 key to be an editor (e.g., QEDIT).  Highlight a file in
    the directory, press CONTROL-F1 to move immediately into the editor and
    operate on the file.  Colors, directory sort order, and the setting of
    the DOS Verify flag can all be customized.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DF350A.TXT

{% raw %}
```








                             DF - Directory Freedom 3.50


                        Copyright 1989, 1990 by Gordon Haff.
                                All rights reserved.



          Command:  DF

          Purpose:  Offer users a fast, compact alternative to DOS Shells
                    which provides 1) selective file and directory
                    operations; 2) a scrollable environment for examining
                    directories; and 3) user-defined keys which can operate
                    upon highlighted files (e.g. defined editors)

          Format:   DF [d:][source-path] [d:][dest-path] [/O,N,E,D,or
          S][/F][/V]

          Prereqs:  100% IBM Compatible PC running DOS 2.0 or higher
                    (certain directory commands require DOS 3.0 or higher)

          Major Associated Programs:

               DFCONFIG, while not required for the use of DF, allows for
                    the installation of user-defined commands and options
                    in an intuitive, menu-driven manner.  CONVERT allows
                    users of earlier revisions to preserve their customized
                    options when upgrading.


                                 ┌─────────┐
                           ┌─────┴───┐     │              (tm)
                         ──│         │o    │──────────────────
                           │   ┌─────┴╨──┐ │  Association of
                           │   │         │─┘  Shareware
                           └───│    o    │    Professionals
                         ──────│    ║    │────────────────────
                               └────╨────┘    MEMBER


          Directory Freedom 3.50                                     2


                                     DISCLAIMER

          The author hereby disclaims all warranties relating to this
          product, whether express or implied, including without limitation
          any implied warranties of merchantability or fitness for a
          particular purpose. The author cannot and will not be liable for
          any special, incidental, consequential, indirect or similar
          damages due to loss of data or any other reason, even if the
          author or an authorized agent has been advised of the possibility
          of such damages.  In no event shall the liability for any damages
          ever exceed the price paid for the license to use the software,
          regardless of the form and/or extent of the claim.  The user of
          this program bears all risk as to the quality and performance of
          the software.

                                       LICENSE

          Directory Freedom is a Shareware product.  As such, it is made
          available to the general personal computing public for
          evaluation.  Users are licensed to operate this program on their
          personal computers for the purpose of test and evaluation on a
          trial basis for a limited trial period.  It is not possible to
          reasonably define the limits of a fair and equitable time period
          for evaluation; therefore it is left to the user's judgment and
          sense of fair play as to the time required to make a decision as
          to its usefulness.  If the user decides the program is not of
          sufficient merit to warrant purchase through registration with
          the author, he/she should remove the program from his/her
          personal computer.  Otherwise, if the program is deemed useful
          and is in regular use on the user's computer system, registration
          with the author is required.

          Registered users are those users who elect to pay for Directory
          Freedom and register that payment with the author.  By virtue of
          registration and payment for the program, registered users are
          granted a license to continue to utilize the program on their
          personal computer for as long as they choose.  This license
          authorizes the user to use the program on any personal computer
          system he or she may own or use so long as the program is
          operated on only one computer system at a time.

                                      GUARANTEE

          Directory Freedom is offered with an unconditional 30-day money-
          back guarantee.  If you become unsatisfied with the program for
          any reason within that period, just let me know and your
          registration will be refunded.  If you purchased a registration
          package which included a diskette and a manual, please return
          these when requesting a refund.

          This guarantee is unconditional.  I would ask, however, if you
          are having a problem to let me know before giving up on DF since
          your problem may be something I can solve.

          Finally, if you order a registration package which includes

          Directory Freedom 3.50                                     3

          diskette and manual and either of these items are defective --
          either through my error or through postal service "processing",
          let me know and I will send replacements promptly.


          Directory Freedom 3.50                                     4

                                    REGISTRATION

          Directory Freedom is the sole property of Gordon Haff.  The
          program may be freely copied and transferred to individual
          parties for evaluation purposes.  It may be posted on Bulletin
          Board systems (BBS) for electronic access as long as NO FEE is
          charged for its distribution except for private BBS operations
          that charge a regular user subscription fee.  Computer
          information services such as Compuserve (CIS), Genie, and Byte
          Information Exchange (BIX) are authorized to post this product
          for subscriber access.  Directory Freedom may be distributed on
          diskette only by 1) disk distributors/vendors who are associate
          members of the Association of Shareware Professionals (ASP) or 2)
          users groups which do not charge more than a nominal fee ($5) to
          cover the costs of distribution.  Any changes to these policies
          must be made in writing by the author.

          Directory Freedom is a fully functional Shareware product.
          Shareware is a computer program distribution/marketing method
          that permits potential buyers to thoroughly try the program prior
          to purchase. It is NOT free and it is not in the Public Domain.
          If, after evaluating the program, you find it to be useful enough
          to use it on a regular basis, you are expected to pay for it by
          registering with the author.

          The registration fee is $20.00.  The payment of this registration
          fee to the author entitles the user to full use of the product
          for an unlimited period of time in addition to product support.
          The distribution of diskette copies of Directory Freedom and
          future upgrades is not included as part of the basic registration
          fee.  See the order form at the end of this documentation for the
          charges associated with these services.

          Attractively-priced site licensing is available for commercial
          users.  Please call or write for details since the pricing varies
          depending upon support and product update requirements.
          Customization is also available on a contract basis.

          Please note that the registration fee is specifically limited to
          Directory Freedom (DF.COM), the configuration program
          (DFCONFIG.EXE), and their associated documentation.  Other
          copyrighted "Freeware" and public domain software is distributed
          with Directory Freedom only for the convenience of users.

          This program is produced by a member of the Association of
          Shareware Professionals (ASP).  ASP wants to make sure that the
          shareware principle works for you. If you are unable to resolve a
          shareware-related problem with an ASP member by contacting the
          member directly, ASP may be able to help. The ASP Ombudsman can
          help you resolve a dispute or problem with an ASP member, but
          does not provide technical support for members' products. Please
          write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006
          or send a Compuserve message via easyplex to ASP Ombudsman
          70007,3536

          Directory Freedom 3.50                                     5

                                  TECHNICAL SUPPORT

          Full technical support is available to registered users of
          Directory Freedom.  I have found that the most effective product
          support can be delivered through the electronic services listed
          below.  If this option is not open to you, however, I also offer
          full product support through the mails, or, if the problem
          absolutely cannot wait, the telephone (no collect calls please).
          (It's not that I don't want to talk with you, it's just that I
          have found it very difficult to talk through complex problems
          over the telephone.)  I will do my best to resolve any software
          bugs in a timely manner and I am always open to incorporating new
          features or changes which are appropriate to the nature of the
          product.

          I will attempt to respond to software trouble reports made by
          non-registered users if the problems affect the general
          functionality of the program.  Such users should not, however,
          expect product support beyond initial aid to determine if the
          program is suitable for their needs.

               Contact via:

                    Channel 1 BBS            (617) 354-3137
                    Future Technology BBS         (617) 720-3600
                    Compuserve User ID#           72561,2637  (See Note 2)
                    InterNet/ARPANET              See Note 1
                    BIX                      ghaff

                    U.S. Mail                3205 Windsor Ridge Dr.
                                             Westboro MA 01581
                    Telephone                (508) 898-3321 (evenings)

          The above are roughly in order of preference (i.e. how quickly
          I'm likely to see your message and be able to respond).  I check
          Channel One almost daily and the other electronic services at
          least weekly in most cases.  In addition, I monitor the Interlink
          Shareware relay on Future Technology and the PCRelay Shareware
          relay on Channel One.

          Note 1:
          I can be reached on two Internet nodes:
          1)   gordon_haff@img024.dg.com (or you may need something along
               the lines of gordon_haff%img024.dg.com@relay.cs.net if your
               system doesn't recognize the dg.com domain)
          2)   Alternatively 72561,2637@compuserve.com goes to my
               Compuserve mailbox.  This second method is probably the more
               reliable of the two.

          Note 2:
          When contacting me via Compuserve, please use the Easyplex mail
          system since I do not regularly monitor any of the IBM SIG
          message bases.

          Directory Freedom 3.50                                     6

          1.0  History and Program Philosophy

          DF.COM was adapted from Peter Esherick's DC (Directory Control)
          version 1.05B.  DC, in turn, represents a melding of PC
          Magazine's DR and CO utilities (written by Michael J. Mefford and
          published in PC Magazine, vol.6, #17 and #21) with a variety of
          additional features added while not sacrificing the speed and
          compactness of those two utilities.  While DC became a staple in
          my utilities subdirectory, it still lacked a few features which I
          would have found useful.  Some of these were included in Brad
          Stephenson's modifications to DR; others didn't exist at all.

          You get the basic idea.  The features I wanted in my directory
          control program were scattered amongst about 3 or 4 different
          versions of the original PC Magazine programs when they existed
          at all.  At the same time, more conventional DOS shells usually
          lacked these features as well plus they tended to be rather big
          clunky things by comparison.

          So, what have I added?  Some of the new features are listed
          below.  These are just a sampling but should help to give the
          user of one or more of the earlier programs a flavor for how DF
          has been extended from its original roots.

               Directory functions
               User-definable shell functions
               An enhanced display containing more detailed subdirectory
                   information
               Functions to change file and directory attributes
               Increased flexibility in areas such as setting the DOS
                   Verify flag and beep type
               A user-friendly configuration program

          Directory Freedom is designed to provide what one user called "a
          rational alternative to the DOS 'dir' command."  While, at this
          stage in its development, DF has grown significantly past the
          point where it merely provides DOS directory services, I have
          tried to stay true to one fundamental philosophy of design.  This
          philosophy is that DF should stay sufficiently small and fast
          that the user does not feel that he is bringing up an
          applications program every time he types "DF".  Rather, it is the
          intent that the user will find it faster and easier to just type
          "DF" that typing DIR, or COPY, or whatever other DOS command is
          required.  Along the way, additional functionality has been
          added, but with the intent of never compromising this basic
          design goal.

          Directory Freedom 3.50                                     7

          2.0  Installing Directory Freedom

          Installing Directory Freedom is straightforward.  If you obtained
          the program from a bulletin board or other source which stores
          all distribution files in a compressed "archive", you first have
          to "de-archive" DF using the appropriate software.  Since you are
          reading this documentation, however, it's a fair bet that you
          have already taken this step!

          The next step is to copy the required files to your working
          disk(s).  DF.COM is self-contained and does not require any other
          files for its operation.  DFCONFIG.EXE allows you to easily
          configure DF, however, and you'll want to make use of CONVERT.EXE
          if you are already a DF user and have gone to the time and
          trouble to custom configure an earlier revision of the program.

          If you are reasonably familiar with moving files between disks
          and so forth, the following section should tell you all you need
          to know about installing DF.

               Quick Installation:

          Copy the files DF.COM, (optionally) DFCONFIG.EXE, and
          (optionally) CONVERT.EXE to a working floppy diskette or a
          subdirectory on your hard disk.  If you've got a hard disk, the
          easiest thing is probably just to copy to whatever subdirectory
          you normally keep your utilities in.  Since DF is nice and small
          and simple, there's really no need to go off creating a separate
          subdirectory for it.  To be most useful, whatever subdirectory DF
          ends up in should be part of the PATH setup in your CONFIG.SYS
          file.  You can also go ahead and copy any of the associated
          utilities distributed with DF to the same location if you like
          and do whatever you normally do with the documentation.

          If you're already using an earlier (rev 2.20 and later) revision
          of DF, CONFIG.EXE will bring over your customized settings to the
          new revision.  Just type CONVERT at the DOS prompt and follow the
          instructions.  When you're done, go ahead and erase CONVERT.EXE,
          if you like, since you won't be needing it again.

          At this, or any other point, you can also run the DFCONFIG
          customization program.  Full instructions for doing this are
          given in Section 5.0 of this manual.

          Directory Freedom 3.50                                     8

          3.0  Using Directory Freedom

          3.1  About this Manual

          This documentation was written at a level which, I hope, is
          appropriate to the level of computer sophistication of most DF
          users.  This level assumes a degree of familiarity with keyboard
          usage on an IBM-PC/AT compatible and a basic understanding of how
          DOS is employed to run programs and execute commands.  DF is not
          a DOS Shell in that it attempts to make life easier for the
          person who knows how to use the command line but does not try to
          shield the user from the underlying system.

          If the above scares you a bit, don't let it.  We have all been
          beginners at one time and I'm sure you can borrow a book or
          friend who will help you through any rough spots you run into.
          (And feedback on any spots of opaqueness in this manual is always
          welcome as well.)

          This manual does go into some depth explaining the hows and whys
          of certain functions.  These explanations exist largely to
          satisfy the curiosity of the more technical users of this program
          and therefore the beginning user should not feel put off if he
          does not understand every concept mentioned in these
          supplementary discussions.

          One final note: The commands on the alternate main menu are
          designated throughout this manual as Alt-Fx commands for
          simplicity and consistency with previous revisions of this
          program even though they can now be alternatively defined as
          LeftShift-Fx.

          Directory Freedom 3.50                                     9

          3.2  Starting up Directory Freedom

          The basic format of the DF command line is:

               DF [d:][source-path] [d:][dest-path] [/O,N,E,D,or S][/F][/V]

          All parameters are optional.  If no pathnames are entered, both
          the source and the destination directories default to the current
          DOS directory.  If only one path is enetered, this path is taken
          to be that of the source directory and the destination directory
          defaults to the current DOS directory.  Options, specified by a
          "/" followed by a letter, may appear either before or after the
          pathnames and override any settings made with the DFCONFIG
          program.  (Pathnames can be a maximum of 63 characters long,
          starting at the drive letter and including the filename.)  The
          options are as follows:

          /N   Sort directory by filename
          /E   Sort directory by extension
          /D   Sort directory by date and time
          /S   Sort directory by file size
          /O   Use original order, i.e. do not sort directory at all.

          /V   Turn on DOS Verify switch for disk file writes
          /F   Fast display on IBM Color Graphics Adapter (CGA) -- i.e. no
               snow check

          DF comes up displaying the "source" / "working" directory.  A
          brief menu of optional commands is displayed to the right of the
          directory display.  You may move up and down the directory list
          with the up and down arrow keys on the cursor keypad.  Files may
          be individually copied, deleted, moved or renamed by pressing the
          function keys F1 through F4, respectively.  Alternatively, a
          number of files may be selected, or "marked" using the Grey + and
          Grey - keys on the right side of the keypad. After marking,
          pressing the appropriate function key will apply the chosen
          operation to the entire group of files.

          New directories can be displayed in one of two ways.  You can
          press the F9 function key and enter a new drive and path name.
          Alternatively, if you want to move to different sub-directories
          on the same drive, you simply press the <Enter> key after using
          the up or down arrow keys to high-light the desired subdirectory.
          Note that as always within DOS, ".." denotes the parent of a
          given subdirectory, i.e. the level above the currently displayed
          directory.

          Directory Freedom 3.50                                    10

          3.3  Key by key Summary of Commands

          Esc       Exit program and return to original directory.

          Alt-Q     Exit program leaving the currently displayed dir as the
                    current default drive and directory for DOS.

          Grey +    Mark current file entry, if not a subdirectory or
          or Ins    hidden file, and advance cursor to next line.

          Grey -    Remove mark on current file, and advance cursor to next
          or Del    line.

          Space     Same as Grey - (Remove Mark) if currently highlighted
                    file is marked; otherwise same as Grey +

          The following functions operate on the marked files, if any,
          otherwise they operate on the currently highlighted file.  If the
          operation is successful the mark is replaced with an asterisk
          (*), if unsuccessful the file is passed over, leaving the mark,
          and the program proceeds on to the next marked file.

          F1     Copy file(s) via a read/write sequence to requested target
          F2     Delete file(s) or directory after asking for confirmation
                   (unless empty directory)
          F3     Move file(s), i.e. Copy to requested target, delete 
                   source.  Where possible this function is performed 
                   using an across directory rename instead of a file 
                   read/write sequence.  
          F4     Rename file(s) or directory within the currently 
                   displayed directory.
          F5     Clear all marks 
          F6     Mark all remaining files, i.e. those not marked with an "*"
          F7     Swap marked and unmarked files.

          The following three functions change the active source and
          destination directories:

          F8     Swap the Working (source) Directory and the Default
                   Destination Directory
          F9     Prompt for a new Working (source) Directory
          F10    Prompt for a new Default Destination Directory

          The working (displayed) directory can be re-sorted by typing:

          Alt-N  Sort by filename
          Alt-E  Sort by file extension (e.g. .COM vs .DOC)
          Alt-D  Sort by date and time
          Alt-S  Sort by file size
          Alt-O  Re-read and display dir in original, unsorted
                   order

          Directory Freedom 3.50                                    11

          Additional commands appearing in the ALT menu:

          Alt F1    Protected Copy -- similar to F1 except that an error is
                      generated if the target file already exists
          Alt F2    Invoke DOS Shell
          Alt F3    Forced Move -- Unlike a regular move (F3), this option
                      will overwrite the target file if it already exists.
                      (This command has the same relationship to MOVE as 
                      COPY has to PROTECTED COPY.) 
          Alt F4    Re-read working directory.  Required after changing 
                      diskettes in a floppy-disk drive.  Also useful if a 
                      copy or shell command has changed the current directory.  
          Alt F5    Run a program.  Parameters may be added after the 
                      program name.
          Alt F6    Create a directory.  Creates a new subdirectory under
                      the working (displayed) directory using a name 
                      provided by the user.  
          Alt F7    Returns the size of the highlighted directory in terms 
                      of disk space used both on the working drive and on 
                      a typical floppy diskette.

          Alt C     Copy (Duplicates F1)
          Alt M     Move (Duplicates F3)
          Alt V     View (Duplicates Return)

          Attribute Commands:

          Alt A     Add Archive bit
          Alt R     Add Read-Only bit
          Alt H     Add Hidden bit
          Alt Y     Add System bit

          Ctrl A    Remove Archive bit
          Ctrl R    Remove Read-Only bit
          Ctrl H    Remove Hidden bit
          Ctrl Y    Remove System bit

          Directory Freedom 3.50                                    12

          User-defined Commands:

          Ctrl-F1 through Ctrl-F10 plus external file viewer.  Ctrl-F11 and
          Ctrl-F12 can be optionally configured through DFCONFIG if you are
          using an extended (101-key or equivalent) keyboard

          View Mode commands (ONLY applicable when using internal viewer):

          W         Toggle word wrap/horizontal scroll
          A         Toggle ASCII string display
          B         Toggle blanking of non-ASCII characters
          Grey *    Toggle Wordstar bit mask (shift non-ASCII high-order
                      characters (from 128 to 255) down into the 
                      displayable ASCII range of 1 to 127.


          3.4  File Marking

          Entries may be marked, as explained above, with the following
          exceptions.  The marking keys will NOT operate on the following:

               --   Subdirectories
               --   Hidden files

          Directory Freedom 3.50                                    13

          4.0  Program Feature Information


          4.1  Built-in Viewer

          (Note that this section applies ONLY if an external file viewer
          is NOT configured.  I recommend that, for most purposes, the user
          configure Vernon Buerg's LIST as his file viewer.  DF is shipped
          with LIST preconfigured although the user can, of course, change
          this easily, by either changing or deleting the command line LIST
          ~ from within the DFCONFIG program.)

          Just as pressing <Enter> lets you view a new directory, pressing
          <Enter> when a filename is highlighted lets you view the contents
          of the file. In the default mode the display is wrapped at the
          edge of the screen if a line is more than 80 characters wide.
          This option can be toggled by pressing W.  Display of non-ASCII
          characters can be toggled with the ASCII and Blank options by
          pressing A or B.  In ASCII mode only strings of 5 or more normal
          ASCII characters (including tab or space) are displayed.  This is
          useful for viewing the messages contained in an .EXE or .COM
          file.  With the Blank option, non-ASCII characters are replaced
          with a blank or space.  A final option, Grey *, masks the high-
          order bit of non-ASCII characters to make Wordstar files
          readable.


          4.2  Shell functions

          These appear in the CONTROL menu with one exception.  The
          exception is the VIEW function accessed by the <Enter> key.  If
          an external VIEW program (such as Buerg's LIST) is defined, it
          will replace the internal VIEW function.  Functions which could
          be set up might include EDIT, UNARCHIVE, and ARCHIVE VIEW.  The
          program comes configured with a few typical external programs
          predefined, but these can be easily added to or changed through
          the use of the DFCONFIG program.

          Up to 10 (or 12 if the F11/F12 keys are enabled) external shell
          functions can be assigned to the CONTROL-F1 through CONTROL-F10
          keys.  In addition, an external program can be assigned to the
          VIEW function, as mentioned earlier.

          A Run-a-Program function (Alt-F5) allows you to run an executable
          program from within DF.  Use this function with caution, however,
          as detailed further down in this documentation.  The DOS Shell
          (Alt-F2) allows you to temporarily exit to DOS.  You should be
          able to do anything in this shell which you would normally do
          from the DOS command line subject to the contraint that the DF
          parent is using approximately 96KB of memory.  Type 'EXIT' at the
          DOS prompt to return to DF.

          Directory Freedom 3.50                                    14

          4.3  Attribute Functions

          DF incorporates functions which allow you to add or remove file
          attributes.  The ALT-attribute functions allow you to add
          attribute bits while the CTRL-attribute functions allow you to
          remove the bits. The A, R, H, and Y keys control the Archive,
          read-Only, Hidden, and System bits respectively.  (An S-key would
          have conflicted with the sort function, so the system attribute
          was assigned a different key since it will be seldom used
          anyway.)

          In general, attribute functions can be performed using standard
          marking just like all other functions.  The exception is un-
          hiding hidden files. Hidden files can be unhid one-by-one, but
          hidden files cannot be marked. This is because the ability to
          mark must carry over to all program functions and I thought that,
          in general, users would want hidden files to be automatically
          skipped when marking files since most functions are not allowed
          on those files by the program.


          4.4  Notes on RUN a Program

           --  Use this option with caution on programs you haven't tried
               out before.  For one thing, DF has no way of testing a
               program's memory requirements.  If a program doesn't do its
               own testing it may hang your system.  Also, some programs
               seem to be allergic to being run in shells.
           --  NEVER execute a Terminate-And-Stay-Resident (TSR) program
               from a shell.  You'll end up creating a hole in memory which
               will, at the least, cause you to lose memory and, at worst,
               will cause a system crash.


          4.5  DESQView Compatibility

          While this revision of Directory Freedom is not fully "DESQview-
          aware," an alternate "hot-key" has been added which can
          substitute for the Alt key.  This addition, in conjunction with
          the following setup information, should allow you to effectively
          use DF in a DESQview environment.

          When configuring DESQview to add DF to its program list, the
          following characteristics should be specified in the advanced
          program setup:

               Writes directly to screen          Y
               Uses its own colors                Y
               Maximum height/width               25,80
               Starting Row/Column/Height/Width   0,0,25,80

          Directory Freedom 3.50                                    15

          4.6  Hints and Suggestions

          The following techniques, explanations, and hints have proven
          useful to myself or to other users.  They may help you to get
          more out of your copy of Directory Freedom.

           --  To "re-mark" a group of files (i.e. mark the same group of
               files which have just been operated on and which now have a
               * next to their entries) press F6 and F7 in sequence.
           --  One of the PC Magazine utilities is called SWEEP and allows
               you to automatically repeat the execution of a command
               through multiple directories.  If you type 'SWEEP DF' from
               the root directory, therefore, DF will be executed in
               succession in each directory on the hard disk.  Ben Stock
               suggests that this "is the best thing for housekeeping,
               reclaiming disk space, and preparing for major backups."
               SWEEP should be available on most major bulletin boards.
           --  To pop up a directory level, highlight the '..' entry and
               press <Enter>.
           --  The DF destination directory is also the current DOS
               directory.  Hence user-defined commands which send output
               files to the default directory regardless of the directory
               of the source file (e.g. PKUNZIP) will send their output to
               the DF default destination directory -- NOT the (displayed)
               working directory.

          5.0  Customization

          User customization is carried out through the DFCONFIG program
          which is menu driven and includes its own help screens.  You MUST
          use the matching rev of DFCONFIG with DF.  The matching revision
          requirement is enforced by the software and DFCONFIG will give
          you an error message if you attempt to use it to modify a
          mismatched revision of DF.

          The DFCONFIG command line is as follows:

               DFCONFIG [path\filename of DF]

          If you do not specify a path and filename on the DFCONFIG command
          line, DFCONFIG assumes that the program you wish to modify is
          called DF.COM (the name for the Directory Freedom program file as
          shipped) and is in the current directory.  If you do specify a
          path\filename on the command line, you must give a full legal
          pathname from either the current directory or a root and the full
          filename with extension.  (This allows you to rename DF.COM if
          you wish -- always preserve the .COM extension, however, else DOS
          will get confused.)

          Miscellaneous DFCONFIG usage notes:

           --  A mouse is supported in DFCONFIG's menus.  The <Left Mouse
               Button> button is equivalent to <ENTER> on the keyboard, the
               <Right Mouse Button> button to <ESC>.

          Directory Freedom 3.50                                    16

           --  If you make changes to DF's parameters, make sure that you
               tell DFCONFIG to save them; i.e. changes are not
               automatically saved.
           --  DFCONFIG operates by reading in DF, making changes to the
               memory image of the program, and then saving the memory
               image back to disk if told to save the changes overwriting
               the original.  This modification procedure may alert certain
               anti-viral programs such as Flushot+.


          5.1  Commands Modification

          DFCONFIG can be used to modify the user-defined shell functions
          accessed by the CONTROL menu in DF.

          At the simplest level, the shell functions can merely be used to
          run an external program with no arguments (or at least no
          variable arguments).  Thus, if you had a program called CPUTYPE
          which you would ordinarily run just by typing:

               C>CPUTYPE

          at the DOS prompt, you would just enter the same thing as one of
          the command lines within the DFCONFIG commands modification
          screen.

          There may indeed be situations where you want to access such a
          program from within DF, however this usage does not take full
          advantage of the DF user-defined shell feature.

          Since the DF highlight cursor is always resting on a file or
          directory, it might seem useful to be able to pass that
          information to a shell command line.  DF can do exactly this.  By
          entering a ~ (tilde) as part of a defined command line in
          DFCONFIG, the user tells DF to "Insert the full path and filename
          of the file or directory under the highlight at this spot in the
          command."

          Along with this feature, beginning with Rev. 3.50, a dynamic
          customization feature has been added.    Together with the ~, a `
          (grave -- the backward accent under the tilde on most keyboards)
          can be added to the command line in DFCONFIG.  If a ` is present
          in the command line, DF will prompt the user for parameters to
          insert at its location at runtime.

               Example:

          All the above is really a whole lot more complicated to read than
          it actually is to do, so let's go through an example.  Let's
          suppose that we want to define a key for Phil Katz's PKUNZIP
          program which views or extracts the archives found on many
          electronic bulletin board systems.  Although we would normally
          set this program up on two different keys (one to view and one to

          Directory Freedom 3.50                                    17

          extract), let's assume for the purposes of the example that this
          is a seldom used function and we only want to use one key for it.

          We go into DFCONFIG and the Commands menu.  We then enter the
          desired command line.  (We'll assume we've programmed CTRL-F3):

          PKUNZIP ` ~

          (Enter whatever you like for the menu name -- it's only for your
          own reference.  Don't worry about the Pause? and Refresh? fields
          for now.  They're described later.)

          We save the modified data entry screen with a <CTRL-Enter>, and
          choose Save and Quit from the main DFCONFIG menu.

          When we next run DF, you'll notice that, when pressing the
          Control key, the new item has been added to the menu.

          We now select a file to operate on.  Just move the cursor down
          until the desired file is highlighted and, while holding down the
          Control key, press F3.  DF will prompt you to enter parameters.
          Let's assume you want to view the archive.  In this case, type -v
          and then hit the <Enter> key.  If the highlighted file were
          called ARCHIVE.ZIP and was in the DOWNLOAD directory on the C:
          drive, DF would expand the command line to the following:

               PKUNZIP -V C:\DOWNLOAD\ARCHIVE.ZIP

               Command-line data entry summary:

           --  A tilde (~) indicates that the file name under the cursor is
               to be inserted at that point.  Only one tilde should
               generally be entered per command line, else it may well get
               too long (note that DF uses the filename with its entire
               path)
           --  A grave (`) indicates that a string entered dynamically by
               the user is to be inserted at this point.  More than one
               grave may be entered per command line, BUT the user is only
               prompted for parameters once and this same set of parameters
               will be entered for each grave.
           --  The Pause? value is asking whether you want a "Press any key
               to return" after exiting the program.  You probably don't
               want a pause for things such as editors and do for programs
               which place information on the screen without inserting
               their own pause before exiting.
           --  The Refresh? value is asking whether you want DF to reread
               the directory before returning from the shell.  You will
               generally want to set this value to 'Y' when performing
               functions such as extracting archives.  There is a minimal
               performance penalty attached to performing such a reread on
               hard disks unless the directories are very large.  If a
               function is regularly used on a floppy diskette directory,
               however, you may wish to perform Rereads manually (Alt-F4)
               only when you need them.

          Directory Freedom 3.50                                    18

           --  In the customization screen, you save your work by either
               typing CTRL-<Enter> at any point, or <Enter> when positioned
               on the last field of the screen.  Exiting with<Esc> DOES NOT
               SAVE THE CONTENTS OF THE SCREEN!
           --  All the movement and edit commands for the data screen are
               available through on-line help in DFCONFIG


          5.2  Attributes Modification

          In addition to DF screen colors (NORMAL, INTENSE, MENU, BORDER,
          and INVERSE), the following attributes can be changed by the
          DFCONFIG program:

           --  Switch character         [Default: / (Standard DOS)
           --  Copy Verify mode         [Default: No Change]
           --  Beep tone                [Default: Standard DOS Beep]
           --  Screen snow check        [Default: Off]
           --  Default sort order       [Default: Name order]
           --  Secondary Hot Key        [Default: Alt]
           --  Enable F11/F12 Keys      [Default: No]

          Each of these options are explained below.

            Color

          Both the foreground and background settings of the five color
          combinations used in DF can be modified through DFCONFIG's
          Attribute modification.  To aid you in this process, a sample
          color screen changes dynamically based on the currently set and
          currently highlighted colors.

            Switch character

                         /    ("Standard" DOS switch) -- Default
                         -    ("Unix" switch)

          For the UNIX hackers, the switch character is used to identify an
          option entered on the DOS command line when you first call up DF.
          Normally this is '/', so that options would be specified by /d or
          /o. By changing the byte to '-', options can be entered as -d or
          -o.  This lets you use '/' in your path names, so that instead of
          entering command lines like:

               DF C:\COMM\DOWN D:\UTIL /D

          You can now enter:

               DF C:/COMM/DOWN D:/UTIL -D              or
               DF C:\COMM\DOWN -d D:\UTIL              or
               DF -d  C:/COMM\DOWN D:/UTIL -D

          But not:  DF C:\COMM\DOWN D:/UTIL /D    (This will confuse DF)

          Directory Freedom 3.50                                    19

          (Note that since the confusion results from the option switch,
          and since there are no options entered with pathnames once the
          program is running, you can use either / or \ as a path delimiter
          when entering a destination or changing the path with F9 or F10
          keys.)

            Copy Verify option

                         No Change
                         Yes
                         No
                         Floppy Only

          From the DOS command line, you can type VERIFY ON or VERIFY OFF
          to change DOS's write-verify status.  If Verify is on, MS-DOS
          performs a series of checks following each disk-write operation
          to attempt to verify that the data just written can be read
          without error.  The downside of such checking is that write
          operations are slowed down significantly and the enhanced
          security provided by VERIFY ON is questionable, at least with
          hard disks.

          In any case, DFCONFIG allows the write-verify status within DF to
          be set in one of four different ways.  It can be set ON, in which
          case all affected DF commands will operate with write-verify
          status enabled.  It can be set OFF, in which case all affected DF
          commands will operate with write-verify status disabled.  It can
          be set to NO CHANGE, in which case DF will use the write-verify
          status which was in use by DOS prior to running DF.  Or it can be
          set to FLOPPY ONLY in which case verify is set on if the target
          is a floppy diskette and set off otherwise.  Using DF's /V
          command-line switch will force write-verify status ON no matter
          how this switch is set.

            Beep option

                         DOS Beep
                         Beep 1

          If an error is made when using DF (e.g. an illegal operation such
          as deleting a Read-only file is attempted), the program beeps to
          alert you of the error.  By default, the standard DOS beep (ASCII
          07) is used.  Some users find this standard tone rather obtrusive
          and grating on the ear so DFCONFIG allows an alternative "soft
          beep" to be chosen instead.  (This alternative tone is generated
          by programming the timer chip directly instead of using standard
          DOS or BIOS services.  Therefore it may not work on some
          computers which are not 100% IBM PC/AT hardware compatible.)

          Directory Freedom 3.50                                    20

            Snow Checking

                         Yes
                         No

          When DF starts up it checks BIOS data area (Segment 40) to see if
          the current display adapter is a monochrome card.  If it isn't
          mono, then DF will query the display adapter before writing a
          character to the display memory to see if it is ok to do so.
          This procedure is necessary to avoid spurious dots or "snow" on
          old IBM Color Graphics Adapters (CGA's) caused by the CPU and the
          display-refresh circuitry simultaneously accessing the video
          buffer.  Unfortunately, this check also slows things down quite a
          bit.  If you prefer speed over a clean display update, or if you
          have an EGA or other color display adapter that doesn't need to
          do this checking, choose OFF for the snow check option.  Choosing
          Yes will enable snow checking on all but the monochrome display
          adapter (which never needs it anyway).  Using DF's /F command-
          line option switch forces snow checking off and will override the
          setting of this switch.

            Sort Option

                         Name      Ascending order by filename
                         Extension Ascending order by filename extension
                         Size      Descending order by file size in bytes
                         Date      Descending order by file date/time stamp
                         Original  DOS order

          A new default sort order can be chosen from within DFCONFIG.  The
          choices (Name, Extension, Size, Date, and Original) are the same
          as those which can be specified on either the DF command line or
          by pressing the appropriate Alt-key.  If a sort order is
          specified as a command line switch, this default setting is
          overridden.

          If (O)riginal is chosen, no sort takes place and the filenames
          are displayed in the same order as they are displayed when typing
          the 'dir' command at the DOS prompt.  If (N)ame or (E)xtension is
          chosen, the sort is in ascending (i.e. alphabetical) order.  If
          (S)ize is chosen, the sort is in descending order to allow for
          more efficient packing when copying to multiple floppy diskettes.
          (D)ate also sorts in descending order to place the most recently
          created or modified files at the top of the directory listing.

            Secondary Hot Key

                         Alt
                         Left-Shift (i.e. the Shift key on the left side of
          the keyboard)

          The switch chooses the "hot-key" used to bring up the secondary
          menu of "hardwired" DF functions.  (This is the menu which
          includes the Directory-specific functions and items such as "Run

          Directory Freedom 3.50                                    21

          a Program.")  The choice is offered because pressing and
          releasing the Alt key also brings up the DESQView menu if
          DESQView is active.  Since Alt has been the secondary "hot-key"
          in all versions of Directory Freedom to date, however, it has
          been left as the default for backward compatibility.

            Enable F11/F12 keys

                         Yes
                         No

          On systems with extended keyboards (101-key or equivalent),
          selecting this option will allow the user to program two
          additional function keys on the Control menu.  The status of this
          switch does NOT affect the ability to program these keys in the
          DFCONFIG command line editor.  Unless this switch is set to Yes,
          however, those programmed keys cannot actually be used (nor will
          they be displayed) within DF.


          6.0  Supplementary Programs


          6.1  Included Programs

          The programs described in this section are NOT part of DF and are
          distributed with DF only for the convenience of users.  The
          copyrights to this software remain with the original authors.
          Two programs which were included with earlier revs of DF (TED and
          FV) are no longer distributed with DF but they are still
          available from a wide variety of sources.

            RF

          I have included a slightly modified version of PC Magazine's
          RN.COM to provide a higher-level "tree-style" directory program
          which users can run in conjunction with DF.  It's called RF.COM
          now and is configured to spawn DF with no switches.  With the
          addition of directory functions to DF in rev. 3.00, there should
          now be less need to use RF as a companion program.  This version
          of RF is based on RN Rev. 2.0 which supports drives >32MB under
          DOS 4.x.  This will probably be the last major revision of DF to
          include RF since plans for the next major DF release include a
          sophisticated support for this functionality (either through a DF
          Enhanced version or as a separate program.)

            DFM

          I have received several requests to add mouse support to DF.
          While this is still a likely possibility for the future, I didn't
          add it in rev 3.50.  What I did do, however, was tweak some
          assembly language sources which derived from PC Magazine's
          MOUSEKEY program so that they would run properly with DF.  The
          result is DFM which is a TSR (~900 bytes) which interprets

          Directory Freedom 3.50                                    22

          forward/backward mouse movement as up and down keystrokes and
          which treats the left mouse button as a <Space> (Mark/Unmark) and
          the right button as an <Enter> (View file or change directory).
          The mouse sensitivity is adjustable from the command line.  Read
          the comments at the beginning of the assembly language sources
          (included) for all the nitty-gritty.  It's not an elegant
          solution, but it does more or less work.

            ND

          This program can be programmed to a function key and will rename
          the highlighted file to a new name which is derived from the
          current date. For example, FILENAME.TXT would be renamed to
          891015.TXT if the date were Oct 15, 1989.  It append a letter to
          the base name (e.g. 891015A.TXT, 891015B.TXT, etc.) if the "dated
          name" already exists.  I find this very useful for handling
          message-base files from BBS's. (Besides, I wrote it and figure
          that no one can keep me from distributing it with DF if I want
          to.)


          6.2  Non-Included Programs

          The programs in this section are NOT included with the DF
          distribution, but I have found these programs (or programs
          fulfilling the same functions) to complement DF well for certain
          applications.

            FV or RV

          Vernon Buerg's FV can be used to cut down on the number of
          function keys needed to deal with archives.  FV will basically
          allow you to view any kind of archive (.ZIP, .ARC, etc.) by
          programming only a single function key.  DF is shipped configured
          for use with FV.  You'll still need a different function key for
          each archive extraction function, but consolidating all the view
          functions should help those users who were running out of keys.
          Robert T. Kaya's RV serves a similar function.
               Most recent revisions as of this writing: FV 1.23; RV 2.13

            SLED or TED or QEDIT or ...

          Since I do not want to start a religious war, I won't even begin
          to suggest which editor people should configure.  SLED is a small
          shareware editor which many people like and is very sophisticated
          for its size.  TED is a simple editor from PC Magazine which is
          free copyrighted software.  While lacking such features as word-
          wrap, it is very compact (~ 12K bytes) and more than sufficient
          to edit batch files and perform similar tasks.  QEdit is a very
          good shareware programmers' editor.  Personally, I have my
          working copy of DF setup to use Multi-Edit (a programmer's
          editor) and WordPerfect.

          Directory Freedom 3.50                                    23

            LIST

          As mentioned earlier in this documentation, I recommend Vernon
          Buerg's LIST in place of the built-in file viewer for most
          applications.  Vernon has been making significant enhancements to
          LIST recently (current version is 7.3d) and is well worth a look
          in the event you don't already have a copy.


          7.0  Technical

          Compiled using Borland's Turbo Assembler 1.0 and debugged using
          Turbo Debugger.  Multi-Edit from American Cybernetics was used as
          an editor. DFCONFIG was compiled using Turbo C 2.0.  Windowing
          functions in DFCONFIG are from Mike Smedley's CXL rev 5.1.


          8.0  Acknowledgements

          DF 1.00 was based extensively on Peter Esherick's source code
          from DC rev 1.05b with the additional help of some code from Brad
          Stephenson's DR26 program.  Peter has also been kind enough to
          share some DC code fixes with me for incorporation into DF.
          Peter can be contacted at the following:

               Albuquerque PC Users' Group
               Albuquerque RBBS  296-7672, John Maio, sysop
               ARPANET: esheric@SANDIA.GOV

          I would also like to thank the many users whose suggestions have
          contributed greatly to the advancement of DF and, of course,
          those who have registered their copies and made the Shareware
          concept work.  While the following list is by no means complete,
          the following individuals' ideas have been especially helpful in
          my efforts to improve DF: Don Dougherty, Greg Saddler, Tom
          Bullard, Dennis McCunney, and Jack Lupic.  Finally, I would like
          to thank the sysops of my "home" BBS (Channel One), Brian Miller
          and Tess Hedder, and Bud Napier of the Future Technology BBS.

          Directory Freedom 3.50                                    24

          9.0  Revision history

          DF VERSION 3.50
          General cleanup of shell routines should result in more reliable
               operation for a wider range of programs (user-defined and
               Run a Program)
          Parameters can be inserted at runtime in user-defined functions
          Optional support for F11/F12 added to user-defined functions
          Checks added to path length (63 characters max) and length of
               user command lines when expanded (i.e. file names filled in,
               etc.) to prevent overruns
          Menu moved to avoid conflict with long destination path names
          Information added to display: number of highlighted entry, total
               number of entries, bytes in subdirectory, and volume name of
               the working drive
          Some problems with cursor positioning and other oddities in empty
               directories, along with cursor problems when deleting
               directories, eliminated
          Problems when default directory was deleted eliminated
          >10MB of tagged files now display properly
          Internal file viewer finally fixed properly (Thanks to Peter
               Esherick for sharing his fix in DC  with me)
          Additional Verify option (ON when copying to floppy only)
          The left-shift can optionally replace Alt as a hot key for
               improved interoperability with DESQView
          Date/Time sorting fixed (Time wasn't sorting in most descending
               order within a particular date)
          P-Copy message fixed
          Major documentation rework.  Also the printed manual is now
               "desktop publishing quality"
          Various changes in included programs (for license and other
               reasons)
          Message added when shelling to DOS
          CONVERT has been updated and will also bring over color
               modifications from earlier revisions

          DF VERSION 3.01
          Made modifications to the DOS EXEC functions which should allow a
               wider range of programs to run from the shell (Control-Fn
               functions) without problems
          Eliminated problem with changing to and operating on directories
               with extensions
          Corrected problem which caused viewer to PgDn one too many lines
          Directory attribute changes now work properly
          Cursor positioning (and associated problems) which occurred when
               all files in a root directory were deleted is now fixed
          A potential problem with the Directory Size function which would
               result in not popping back up to the parent directory if the
               parent were not sorted at the top of the subdirectory was
               eliminated
          The latest FV (1.22) for viewing archives has been added to the
               DF archive

          Directory Freedom 3.50                                    25

          CONVERT has been made more general purpose and can convert either
               Rev 2.20 or 3.00 to the current rev.  This will be continued
               with future DF revs
          DFCONFIG has been relinked with the latest revision of Mike
          Smedley's CXL function library (5.1).  This should be transparent
          to the user.

          DF VERSION 3.00
          DIRECTORY FREEDOM is now SHAREWARE (fully functional)
          Added directory functions -- create, size, delete, rename, change
               attributes
          Space bar will function as Mark/Unmark for greater consistency
               with the way other similar programs operate
          Added a "soft" beep option (configurable in DFCONFIG)
          Added a Verify On/Off/No Change option (configurable in DFCONFIG)
          The full path and name for DF.COM can now be specified at the
               DFCONFIG command line (i.e. the name of DF.COM can be
               changed and DFCONFIG does not need to run from the same
               directory)
          Corrected bug which caused attribute changes to sometimes not
               "catch" on the first try
          Moved menu to avoid overwrites by long destination path names
          Fixed shell bug which could cause DF's attributes to be used by
               programs run in a shell
          Added "forced move" option (i.e. a move which will overwrite even
               if the destination file name already exists)
          Fixed the wording of the shell return
          Returns from shell to re-read directory -- cursor will now sit on
               the original file if it still exists
          Sort by size order is now sorted in descending order (so that
               files can be more efficiently copied to multiple diskettes)
          Added two more auxiliary programs to the archive:
               Buerg's FV: View all types of archives with one command
               DFM: A PC Mag MOUSEKEY derivative to allow the use of mouse
                    movement and mouse buttons with DF
          Major rewrite of the documentation
          "Cleanup" of DFCONFIG to warn of exits without saving, etc.

          DF version 2.20
          Added some memory management fixes from Peter Esherick to GET_MEM
               and the MAIN initialization routine
          Added Reread Directory switch to DF and DFCONFIG
          Modified DFCONFIG to accommodate significant changes in Michael
               Smedley's C function libraries (TCXL 3.3 to CXL 5.0)
          Added mouse support for menu selection to DFCONFIG
          Added sample color window when configuring DF's colors in
               DFCONFIG

          DF version 2.11
          Fixed problem introduced by longer user-defined command lines in
               version 2.10.  User functions can now be defined properly.

          Directory Freedom 3.50                                    26

          DF version 2.10
          Fixed shell problem with the CTRL-F5 key (Prompt to continue
               appeared  before the execution of the shell rather than
               after)
          Added configuration (through DFCONFIG) of a default sort option -
               name, extension, size, date, or original (unsorted)
          Lengthened allowable command line which can be configured

          DF version 2.00
          User defined shell commands are now configured through
               DFCONF2.EXE   including user defined names for menus and
               user defined pause after shell execution; environment
               variables no longer used
          Attribute modification functions added
          CONTROL-key menu added to accommodate all this new stuff, along
               with  other modifications to the existing menus; user-
               defined commands  are now separate in the CONTROL menu
          Fixed bug with reading parameters when Running a Program

          DF version 1.00
          Alternative ALT-key menu added
          Shell to List, Edit, Unarc, Unarc view, and run program added
               with program information specified in environment variables





































```
{% endraw %}

## DFM.ASM

{% raw %}
```
;DFMOUSE version 1.00
;Quick and dirty fixes by Gordon Haff - 10/89
;                         3205 Windsor Ridge Dr., Westboro MA 01581
; This file and DFMOUSE.COM is NOT an integral part of Directory Freedom.
; While this file and program are released into the public domain,
; Directory Freedom, DFCONFIG, and their associated documentation are
; SHAREWARE.
;
; See the Directory Freedom documentation for information on the use of
; this program in conjunction with DF.  Unless you are interested in some
; of the technical nitty-gritty, you need not concern yourself with the
; balance of this file.
;--------------------------------------------------------------------------
; This program has (for the time being) been modified in a "quick and
; dirty" manner to provide functionality with Directory Freedom (DF).
; As written, MOUSER has some problems -- not only with DF, but with other
; programs I have tested.  This problem results in the mouse buttons
; being non-functional.  The problem appears to be that DF and other assembly
; language programs often use int 16h to scan for keys.  Then the keyboard
; scan code returned in ah is used for key processing, rather than the
; Ascii value returned in al.  There may be more to it than this, but
; this explanation seems to be the obvious one.
;
; So, I've done the following to this program.  I may try to do a proper
; fixup at a later date if someone else doesn't beat me to it.
;    Hard set left button to <space>
;    Hard set right button to <CR>
;    Disabled both button option (there wasn't anything especially wrong
;		with this option, but in practice it just didn't produce the
;         desired results for me
;    Adjusted menus, help screens to reflect changes
; Since this program is still basically the same as MOUSER, I am
; distributing this file in accordance with the original author's wishes

;MOUSER.007 - MOUSE cursoR for the Microsoft Mouse & Compatibles - 09/87
; --------------------------------------------------------------------------
; (c) OZZARD of WIS / Paul Noeldner, 510 S. Dickinson, Madison, WI 53703
;                This Software is In the Public Domaine
; OZZARD of WIS assumes no liability for any loss or damage from use of this
; program.  Use of the program constitutes agreement to this disclaimer.
; When copied or distributed, it must include this ASM code documentation.
; --------------------------------------------------------------------------
;                       PURPOSE
; MOUSER is dedicated to all cats (cursor arrow tappers) out there who are
; interested in seeing how nice a mouse can work in everyday PC programs.
; The feel of high-powered point-and-click mouse software, can be quickly
; realized in any scrolling-menu program by using MOUSER and a mouse -
; without high-falutin graphics or window software, or gobs of TSR memory.
; --------------------------------------------------------------------------
;			ENVIRONMENT
; The MicroSoft(Tm) MOUSE.COM or MOUSE.SYS mouse driver, or a compatible
; using the same driver protocol, must be implemented to run MOUSER.
; MOUSER then works with ANY PROGRAM that accepts cursor up/down/left/right.
; The mouse buttons can be used for COMMON KEYS like return and escape -
; both mouse speed, and buttons, can be set via parms to suit your needs.
; --------------------------------------------------------------------------
;			USE
; The MOUSER defaults - average cursor speed, and RETURN/ESCAPE/BREAK buttons,
; work well in many applications.  Individuals may wish to adjust the
; speed and the button functions for particular applications, to make mouse
; use satisfying and productive (rather than tedius or target practice).
; The cursor speed and buttons can be customized by you to complement
; your applications.  You run MOUSER with control parameters from the DOS
; prompt or in any application .bat procedure file.
; --------------------------------------------------------------------------
;			PARMS
; MOUSER Hn Vn Lnn Rnn Bnn?
;	? - help - which also appears if parms are not understood
;	Hn, Vn  n=1 to 9 - sets Horizontal or Vertical cursor speed
;	Lx, Rx, Bx - x=character or 2-digit ASCII value - sets Left,
;                    Right, or Both (pressed together) button key values
;	             Digit values above 31 are treated as 'extended' keys.
;	These parms are all optional, in any order, with any delimiters.
; --------------------------------------------------------------------------
;			SAMPLES
;  MOUSER ? 		- shows full help, sample button ASCII values.
;  MOUSER		- sets default medium cursor, RETURN, ESCAPE buttons
;  MOUSER H1 V1 L27 R13 B/ - slow cursor, left ESCAPE, right RETURN, both /
;	This might be appropriate for a scrolling-bar menu program.
;	This example shows how to reverse the return/escape buttons,
;       if you happen to prefer them in that order.  Both buttons would
;       input a slash, which may be useful for spreadsheet commands.
;  MOUSER V9 L73 R81 B27 - fast vertical, left PGUP, right PGDN, both ESC
;	This would be useful in a text file browse, and to
;       quickly position the cursor and mark blocks in an editor.
;   The button keys work in any program that accepts the specified keys.
;   The MOUSER ? help display shows several more common key values.
;   See your DOS or BASIC manual for a complete list of the ASCII values
;   of keys below 32 (space), such as 13-RETURN, and the 'extended' keys
;   such as 81-PGUP.  Any values over 32 are considered 'extended' keys.
;   If a character is specified instead of a 2-digit value, it is used.
;   MOUSER + 		- the + parm is the currently implemented means to
;  			  reactivate MOUSER if it becomes deactivated.
;                         Once you use +, it must be used subsequently.
;                         Hopefully, the next version will not need this.
; --------------------------------------------------------------------------
; The regular cursor keys continue to work as usual.  Programs that have
; their own mouse driver support, work independently of MOUSER.
; MOUSER does not prevent or preclude any normal use of the keyboard.
; --------------------------------------------------------------------------
; Some programs appear to disable MOUSER; you may want to put MOUSER
; in the application .bat startup file, after the application program,
; to turn the mouse back on after running the application.  Programs
; that have custom mouse drivers are commonly guilty of this crime.
; In that case, use the + parameter to ask that a fresh copy be loaded.
; Once the + parameter is used, it must subsequently be used each time.
; --------------------------------------------------------------------------
;			MORE ABOUT TSR AND RELOADING
; Normally one copy of MOUSER loads memory resident; after that, the parms
; are updated whenever the program is run.  The program takes about 600 bytes
; of memory - much less than 'custom' mouse menus.  By not reloading
; each time it is run, it saves that much more memory for you.
; If the mouse driver has been disengaged by any program, it is reengaged
; by using the + parameter, which loads a fresh copy of MOUSER.  A future
; version of this program should get around that requirement, but my
; knowledge of assembler is pretty weak and I cannot seem to reengage by
; pointing at the current resident version.  Give it a hack - give me a call!
; See the code related to tsrsav and address 126h - that was my attempt.
; --------------------------------------------------------------------------
;			ACKNOWLEDGMENT
; The program code was modeled after MOUSEKEY by Jeff Prosise / Ziff Davis.
; --------------------------------------------------------------------------
;			CHANGES FROM MOUSEKEY
; While MOUSER can be used in place of MOUSEKEY, the defaults are different.
; Enhancements have been made to improve user control over parameters.
; The program normally loads just one TSR copy even if run more than once.
; --------------------------------------------------------------------------
;			SPECIFIC IMPROVEMENTS
; (1) Added control over sensitivity of horizontal motion.
; (2) Prioritized vertical above horizontal movement (otherwise the mouse
;     tends to jump left and right while positioning vertically).
; (3) Set defaults to suit menu scrolling - slower cursor speed, and
;     mouse buttons set to RETURN, ESCAPE (instead of MOUSEKEY PGUP, PGDN).
; (4) Allow optional parms for speed 1-9 and custom mouse button values
;     specified as actual characters or 2-digit ASCII codes.
;     Example:  MOUSER H5 V5 L13 R27 B03 (example indicates the defaults).
;     All parms are optional in any order.  Any delimiters are ignored.
;     Any unrecognized 'junk' on the command line displays help and a message.
; (5) Added processing for 'both buttons' pressed, giving a third key value
;     in addition to left and right button values.  Default is 03, CTRL-C.
; (5) Added help - enter MOUSER ? for help display.
; (6) Posts current TSR version if already loaded, by finding itself in
;     memory.  This is especially important since the intent is to run
;     MOUSER whenever it is desirable to set parms to suit particular programs.
;     It may be run as part of .BAT files for specific applications.
;     Currently, if driver is 'disengaged', must reload using + parm.
; --------------------------------------------------------------------------
;			PROGRAM STRUCTURE
; The following program structure is based on Jeff Prosise's MOUSEKEY.
; It includes a TSR segment and an initialization segment that now sets the
; parameters and terminates after pointing the PLP to the end of the TSR part.
; If already loaded, parms are posted to the current address of the program.
; --------------------------------------------------------------------------
bios_data     segment at 40h
              org 1Ah
buffer_head   dw ?                          ;pointer to keyboard buffer head
buffer_tail   dw ?                          ;pointer to keyboard buffer tail
              org 80h
buffer_start  dw ?                          ;starting keyboard buffer address
buffer_end    dw ?                          ;ending keyboard buffer address
bios_data     ends
;
code          segment para public 'code'
              assume cs:code
              org 100h
begin:        jmp init	                ;goto initialization code
; --------------------------------------------------------------------------
;This part was enhanced in MOUSER to include hdelay and lkey/rkey/bkey values,
;and to support location and posting of current TSR version of program.
; --------------------------------------------------------------------------
resfinder	db 'MOUSER CODE'	;This is used to find and change parms
					;if MOUSER program is already resident.
					;Address of above literal is mcb+113h.
					;If this db block is changed, also
					;change the initialize mcb: and post:
					;code that finds and changes the parms.
					;The following parms are at mcb+11Eh.
vdelay		db 2			;vertical delay (set by Vn speed parm)
hdelay		db 5			;horizontal delay (set by Hn parm)
lkey		dw  0020h		;keycode for left button (set by Lnn)
rkey		dw 01C0Dh		;keycode for right button (set by Rnn)
bkey		dw  5100h		;keycode for both buttons (set by Bnn)
tsrsav		dw 0000h		;address of 'mouse' segment below
;
vcount		db 1			;vertical mouse mickey counter
hcount		db 1			;horizontal mouse mickey counter
vflag		dw ?			;vertical count sign flag
hflag		dw ?			;horizontal count sign flag
keycode		db 4Dh,4Bh,50h,48h	;keycodes for up/dn/lf/rt cursor keys
;------------------------------------------------------------------------------
;This subroutine is handed control by the mouse driver when the mouse is
;moved or a button is pressed.
;------------------------------------------------------------------------------
mouse         proc far
;
;Determine which event occurred and branch accordingly.
;
              test ax,2                     ;was the left button pressed?
              jnz lbut                      ;yes, then branch
              test ax,8                     ;was the right button pressed?
              jnz rbut                      ;yes, then branch
; --------------------------------------------------------------------------
;Move the cursor in the direction indicated by the most recent mouse move.
;This was modified from MOUSEKEY to prioritize vertical over horizontal,
;and to test a horizontal delay factor.
; --------------------------------------------------------------------------
mouse0:       mov ax,11                     ;function 11
              int 51                        ;read mouse motion counters
              mov hflag,0                   ;initialize sign flags
              mov vflag,2
              xor al,al                     ;zero AL for extended keycode
              cmp dx,0                      ;vertical count positive?
              jge mouse1                    ;yes, then branch
              inc vflag                     ;record negative condition
              neg dx                        ;convert negative to positive
mouse1:       cmp cx,0                      ;horizontal count positive?
              jge mouse2                    ;yes, then branch
              inc hflag                     ;record negative condition
              neg cx                        ;convert negative to positive
mouse2:       mov bx,vflag                  ;assume motion was vertical
              cmp dx,cx                     ;was the assumption correct?
              jae mouse4                    ;yes, then branch
              mov bx,hflag                  ;no, then correct it
              dec hcount                    ;decrement horizontal count
              jz  mouse3                    ;continue if count is zero
              ret                           ;exit if it's not
; --------------------------------------------------------------------------
;The hdelay/vdelay values allow control over horizontal sensitivity.
;These are input as Hn Vn parms as speed 1-slow to 9-fast, and converted
;for decrementing to delay 9-slow to 1-fast.  The delay simply ignores
;the indicated number of mickeys (mouse increments) before responding.
;They correspond roughly to screen pixels; e.g. speed 1 moves 1 pixel where
;speed 9 moves 9 pixels in a similar physical mouse movement (about 1/32").
; --------------------------------------------------------------------------
mouse3:       mov ah,hdelay
	      mov hcount,ah                 ;reset horizontal delay
              jmp setkey                    ;
mouse4:       dec vcount                    ;decrement vertical delay
              jz  mouse5                    ;continue if count is zero
              ret                           ;exit if it's not
mouse5:       mov ah,vdelay
	      mov vcount,ah                 ;reset vertical delay
setkey:       mov ah,keycode[bx]            ;get keycode from table
              jmp insert                    ;insert it into keyboard buffer
;
;The left button was pressed.  Load AX with the keycode.
;
lbut: ;     test ax,8
	 ;     jnz bbut			    ;both buttons?
	      mov ax,lkey                   ;load left button keycode
              jmp insert		;insert into the keyboard buffer
;
;The right button was pressed.  Load AX with the keycode.
;
rbut:         mov ax,rkey                   ;load keycode
	      jmp insert		;insert into keyboard buffer
;
;Both buttons were pressed.  Load AX with the keycode.
;
bbut:	      mov ax,bkey		;load both button keycode
;
;Insert the keycode in AX into the keyboard buffer.
;
insert:       mov bx,bios_data              ;point DS to BIOS data area
              mov ds,bx
              assume ds:bios_data
              cli                           ;disable interrupts
              mov bx,buffer_tail            ;get buffer tail address
              mov dx,bx                     ;transfer it to DX
              add dx,2                      ;calculate next buffer position
              cmp dx,buffer_end             ;did we overshoot the end?
              jne insert1                   ;no, then continue
              mov dx,buffer_start           ;yes, then wrap around
insert1:      cmp dx,buffer_head            ;is the buffer full?
              je insert2                    ;yes, then end now
              mov [bx],ax                   ;insert the keycode
              mov bx,dx                     ;advance the tail
              mov buffer_tail,bx            ;record its new position
insert2:      sti                           ;enable interrupts
              assume ds:nothing
              ret                           ;exit user-defined subroutine
mouse         endp
;
;------------------------------------------------------------------------------
;INIT routine points the mouse driver to the user-defined subroutine,
;then leaves it resident in memory.
;------------------------------------------------------------------------------
init		proc near
                jmp setup
;
logo		db 201,205,205,181
db'     DFM / 10/89 / Gordon Haff / Public Domain / ?-HELP      '
db 198,205,205,187,13,10,'$'
;
helpmsg		db 186
db ' modified from MOUSER by Paul Noeldner, Madison, WI 608-255-5577   '
db 186,13,10,186
db '   ',15,' For users of Directory Freedom to simulate:                   '
db 186,13,10,186
db '                - Up/Down cursor keys (move the mouse)             '
db 186,13,10,186
db '                - <Space Bar> (press the left mouse button)        '
db 186,13,10,186
db '                - <CR> (press the right mouse button)              '
db 186,13,10,186
db ' DFM V8 H5   Example showing default parameters.                   '
db 186,13,10,186
db '    Hn, Vn      Horizontal ,Vertical speed 1-9: 5 = medium.        '
db 186,13,10,186
db '    +           Loads new copy of DFM (use only if disengaged).    '
db 186,13,10,186
db '    All parms are optional, in any order, with any delimiters.     '
db 186,13,10,200
db 67 dup ('═')
db 188,13,10,'$'
;
errmsg  	db 7,200
db 8 dup ('═')
db 16,' DRIVER MISSING: Install MOUSE.SYS or MOUSE.COM ',17
db 9 dup ('═')
db 188,7,13,10,'$'
;
junkmsg  	db 7,200
db 7 dup ('═')
db 16,' UKNOWN INPUT PARAMETER - CHECK THIS HELP DISPLAY ',17
db 8 dup ('═')
db 188,7,'$'
;
loadmsg		db 200
db 18 dup ('═')
db 16,' OK - Mouse Cursor Installed ',17
db 18 dup ('═')
db 188,13,10,'$'
;
postmsg		db 200
db 16 dup ('═')
db 16,' OK - Mouse Cursor Parms Adjusted ',17
db 15 dup ('═')
db 188,13,10,'$'
;
endparm 	dw 81h		;end of parm input
mcbptr		dw 0000h	;pointer to memory control blocks
found           db 'N'		;is MOUSER already loaded TSR in memory
newcopy		db 'N'		;indicates if + (update) parm entered
lit		db ?		;literal parm input character
dig		db 'N'		;found a digit?
;
;Logo display
;
setup:	lea dx,logo          	;show logo
	mov ah,9
	int 21h
	call parms		;process input parms
	call mcbwalk		;check if MOUSER is already resident
endit:	jmp allthru		;exit program
;
init	endp
;
;-----------------------------------------------------------------------------
;Process the command line parms (if any)
;
parms	proc near
	mov bx,0		;point at input parm length in Pgm Seg Prefix
	mov si,80h
	mov ah,0
        mov al,byte ptr[si]     ;now we have the length
	add ax,80h		;compute end of parm
        mov endparm,ax          ;remember it
	inc si			;skip initial space in input parm
;
parmloop:
	mov bx,0
	inc si			;get input from command parm
	cmp si,endparm         	;see if at end of parm
        jle parse		;if not, process it
	ret			;if so, done with setup work
;
parse:	mov al,byte ptr[si]	;get next character
    	cmp al,' '		;skip blanks
	je  parmloop
	cmp al,'/'		;skip slashes
	je  parmloop
	cmp al,','		;skip commas
	je  parmloop
	cmp al,'+'		;load new copy?
	jne help
	mov newcopy,'Y'
	jmp parmloop
help:	cmp al,'?'		;show help?
	jne case
	lea dx,helpmsg		;help display
	mov ah,9
	int 21h
	int 20h
;
case: 	cmp al,91		;upper case?
	jl  upper
      	sub al,32		;convert lower to upper case
;
upper:	call parmcheck		;see if H, V, L, R
	jmp parmloop		;continue parsing thru parm
;
parms	endp
;
;-----------------------------------------------------------------------------
;Check for Horizontal and Vertical Speed, Left/Right/Both button control values
;
parmcheck proc near
	cmp al,'H'		;is it horizontal speed parm
	jne parmv               ;if not, check vertical speed
	call digedit		;check it out, value returned in al
        cmp dig,'Y'		;is it a digit?
        jne junk		;if not, return message
	not al			;invert 10-speed to get delay
  	mov hdelay,al           ;store horizontal delay value
	ret			;back to parsing parms
;
parmv:	cmp al,'V'		;is it vertical speed parm?
	jne parml               ;if not, check left button
	call digedit		;check it out, value returned in al
	cmp dig,'Y'		;is it a digit?
	jne junk		;if not, return message
	not al			;invert 10-speed to get delay
	mov vdelay,al           ;store vertical delay value
	ret
;
parml:	cmp al,'L'		;is it left button parm?
	jmp parmr               ;if not, check right button  [DISABLED]
        call dighex		;get digits into hex
	mov lkey,ax		;set left button key code
	ret
;
parmr:	cmp al,'R'		;is it right button parm?
	jmp parmb		;if not,check both buttons            [DISABLED]
	call dighex		;get digits into hex
	mov rkey,ax		;set right button key code
	ret
;
parmb:	cmp al,'B'		;is it both buttons parm?
	jmp junk		;send message if unknown parm         [DISABLED]
	call dighex		;get digits into hex
	mov bkey,ax		;set both buttons key code
	ret
;
;Junk parm error message
;
junk:	lea dx,helpmsg		;help, plus error message for invalid parms
	mov ah,9
	int 21h
	lea dx,junkmsg
	mov ah,9
	int 21h
	int 20h			;and program ends
;
parmcheck endp
;
;-----------------------------------------------------------------------------
;Digits to hex routine
;
dighex	proc near
	call digedit		;get next digit
        cmp dig,'Y'		;is it a digit?
	je  digcon 		;if so, continue
	ret			;otherwise got literal, return it
digcon:	cbw			;byte in al goes to word in ax
	xchg ax,bx		;trade digit and number
	mov cx,10d
	mul cx			;number in ax times 10
	xchg ax,bx		;trade number and digit
	add bx,ax		;add digit to number
	call digedit		;get next digit
	cmp dig,'Y'		;is it a digit?
	jne junk		;return message if not
	cbw			;byte in al goes to word in ax
	xchg ax,bx		;trade digit and number
	mov cx,10d
	mul cx			;number in ax times 10
	xchg ax,bx		;trade number and digit
	add bx,ax		;add digit to number
        mov ax,bx
        cmp al,20h		;is number > 20?
	jl setok		;no, set as is
	mov ah,al		;yes, make it high byte
	mov al,0		;null low byte
setok:	ret			;all thru, got 2 digits into binary form
;
dighex endp
;
;-----------------------------------------------------------------------------
;Get value of ASCII digit or literal, return in ah
;
digedit	proc near
	mov dig,'N'		;may not have a digit here
	inc si
	mov al,byte ptr[si]	;get next byte
        mov lit,al		;save literal value
	sub al,30h		;drop ascii code to convert digit to value
	jl  liter		;if not digit, use literal
	cmp al,9d		;
	jg  liter		;if not digit, use literal
 	sub al,11d
	mov dig,'Y'		;yes, got a digit
	ret
liter:	or ax,ax		;get ax to null
	mov al,lit		;plug in literal character
	ret			;back to parm scan
;
digedit endp
;
;-----------------------------------------------------------------------------
;See if MOUSER is already resident by walking memory control blocks.
;
;Each MCB is marked with M in first byte, last block has Z in first byte.
;The length of each MCB is in byte 3.  Adding len + 1 locates the next MCB.
;If MOUSER is already resident, parms are updated in that copy of the program.
;
mcbwalk proc near
	push bp			;remember right where we were (we hope)
	push ax                 ;the stack was getting messed in this code
	push bx
	push cx
	push dx
	push ds
	push es
	mov ah,52h		;DOS fn to get first memory control block
	int 21h
	mov ax,es:[bx-2]	;stash starting mcb address in variable
	mov mcbptr,ax
;
search: mov es,mcbptr		;get first byte at current mcb address
	mov dl,byte ptr es:[0]
        cmp dl,'M'		;an M means TSR, but not last one loaded
        je  gotmcb
	pop es
	pop ds
	pop dx
	pop cx
	pop bx
	pop ax
	pop bp			;back to current memory values and pointers
        ret			;Done with TSR chain
;
gotmcb: cmp found,'Y'		;see if already found
	je  nextmcb		;skip to end of chain if already found
	mov dl,byte ptr es:[113h] ;if not found yet, look for 'MOUSER CODE'
	cmp dl,'M'		  ;literal starting in byte 4
	jne nextmcb
	mov dl,byte ptr es:[114h]
	cmp dl,'O'
	jne nextmcb
	mov dl,byte ptr es:[115h]
	cmp dl,'U'
	jne nextmcb
	mov dl,byte ptr es:[116h]
	cmp dl,'S'
	jne nextmcb
	mov dl,byte ptr es:[117h]
	cmp dl,'E'
	jne nextmcb
	mov dl,byte ptr es:[118h]
	cmp dl,'R'
	jne nextmcb
	mov dl,byte ptr es:[11Ah]
	cmp dl,'C'
	jne nextmcb
	mov dl,byte ptr es:[11Bh]
	cmp dl,'O'
	jne nextmcb
	mov dl,byte ptr es:[11Ch]
	cmp dl,'D'
	jne nextmcb
	mov dl,byte ptr es:[11Dh]
	cmp dl,'E'
	jne nextmcb
	call post		;post parms to existing MOUSER TSR copy
	jmp nextmcb
;
nextmcb: mov ax,mcbptr		;on to the next mcb
	mov es,ax
	add ax,word ptr es:3	;length of block is in byte 3
        inc ax			;add length plus 1 for next mcbptr
	mov mcbptr,ax
        jmp search
;
mcbwalk endp
;
;-----------------------------------------------------------------------------
;Post parms to data locations in current resident version of MOUSER
;
post	proc near
	mov found,'Y'		;indicate TSR now found
	mov al,vdelay		;and post V, H, L, R and B parms to memory
 	mov byte ptr es:[11Eh],al
	mov al,hdelay
	mov byte ptr es:[11Fh],al
	mov ax,lkey
	mov word ptr es:[120h],ax
	mov ax,rkey
	mov word ptr es:[122h],ax
	mov ax,bkey
	mov word ptr es:[124h],ax
;
;The following code should re-activate the mouse driver addressability
;to the currently loaded tsr mouse routine we just found.
;It is commented out because the code as written here leaves the mouse
;driver pointing into never-never land somewhere.  Please help me Peter Pan!
;
;	mov ax,12                     ;function 12, set ms driver active
;	mov cx,11                     ;subroutine call mask
;	mov dx,word ptr es:[126h]     ;offset of tsrsav pointer to mouse seg
;	int 51                        ;pass information to mouse driver
 	ret
;
post	endp
;
;-----------------------------------------------------------------------------
;If MOUSER already TSR, end normally, else end TSR
;
allthru proc
	cmp found,'Y'
	jne tsr
	cmp newcopy,'Y'
	je  tsr
 	mov ah,9		;send post message
	lea dx,postmsg
	int 21h
	int 20h			;normal exit to DOS
;
tsr:	call msmouse		;make sure mouse driver is resident
	mov ah,9		;send load message
	lea dx,loadmsg
	int 21h
	mov ax,12		;function 12, set ms driver active
	mov cx,11		;subroutine call mask (bits 1011)
				;call if mouse moved, or button tapped
	mov dx,offset mouse	;point ES:DX to the TSR subroutine
	mov tsrsav,dx		;and save this address for later use
	int 51			;pass address to mouse driver
	lea dx,init		;point DX to end of resident code
	int 27h			;terminate-but-stay-resident
;
allthru endp
;
;-----------------------------------------------------------------------------
;Make sure the ms mouse hardware and software are in place.
;
msmouse proc near
	mov ax,0                      ;function 0
	int 51                        ;get installation flag
	or ax,ax                      ;is AX zero?
	jne msok                      ;proceed with loading
	mov ah,9                      ;print error message and abort
	lea dx,errmsg
	int 21h
	int 20h
;
msok:	ret			;continue loading
;
msmouse endp
code	ends
        end begin
```
{% endraw %}

## FILE2228.TXT

{% raw %}
```
Disk No: 2228                                                           
Disk Title: Directory Freedom                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Directory Freedom                                        
Author Version: 3.50A                                                   
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
DIRECTORY FREEDOM is not primarily targeted at the user who wishes to   
shield him/herself from DOS and who wishes the services of a "full DOS  
Shell." Rather, it is intended to aid the person who has a basic working
knowledge of subdirectories, etc. by relieving them from remembering and
typing out file names when, for example, they wish to selectively copy  
some files from a hard disk subdirectory to a floppy.                   
                                                                        
DIRECTORY FREEDOM is a fast, compact (12K) alternative to DOS Shells    
which provides for selective file and directory operations (e.g.        
copying files), a scrollable environment for examining the contents     
of directories, and user-defined keys which can operate upon            
highlighted files.  A user can, for example, define the CONTROL-F1 key  
to be an editor (e.g. QEDIT). This definition is done through a         
separate, user-friendly configuration program, DFCONFIG.  Then, by      
highlighting a file in the directory with the cursor, the user need just
press CONTROL-F1 to immediately jump into the editor and operate on the 
highlighted file.  In addition to the example cited above, the DFCONFIG 
program allows for a great deal of control over the operation of DF.    
Colors, directory sort order, and the setting of the DOS Verify flag can
all be customized -- just to name a few of the possible settings.       
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  PC-SIG Disk #2228 DIRECTORY FREEDOM  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start the program, type: DF (press enter)                          ║
║                                                                         ║
║                                                                         ║
║   To print the documentaion, type: COPY DF350.TXT PRN (press enter)     ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
Registration for Directory Freedom 3.50
------------------------------------------------------------------------

To register, please return this form with your registration check or
money order (Purchase orders are also accepted) to :

                        Gordon Haff
                        3205 Windsor Ridge Dr.
                        Westborough, MA 01581
                        Phone: (508) 898-3321


 Name ____________________________________

 Address _______________________________________________________________

         _______________________________________________________________

         _______________________________________________________________


 Phone (_____)_____-______


 Where did you get DF 3.50 from:

    BBS Name ________________________________ Number (_____)_____-______

    Other electronic service (Compuserve, GEnie, etc.) _________________

    Other ______________________________________________________________

 Are you a SYSOP or CO-SYSOP (circle)  NO - YES ________________________


____ DF 3.50 Registration ...................... @ $ 20.00 ea  $ _______
     (Includes a license for one user and product
     support for that user.)

____ DF 3.50 Registration and diskette ......... @ $ 35.00 ea  $ _______
     (Includes Registration as detailed above plus:
          A diskette with DF and all associated files
          Laser-printed documentation
          One free upgrade)

____ DF Upgrade ................................ @ $  5.00 ea  $ _______
	(Includes diskette with DF and all associated files
		Laser-printed documentation
		REGISTERED USERS ONLY)


	Non-US Shipping ...............................@ $ 5.00   $ _______
        (Payments must be in US Dollars, US bank)

 TOTAL Enclosed ......................................... $ ____________

 If a diskette is being ordered:  3.5" ____   5.25" ____


 Non-U.S. orders need to include $5.00 extra to cover additional
 shipping and handling charges.  Checks and money orders must be
 drawn on a U.S. bank.  Please send all payments payable in U.S. Dollars.

 Feel free to attach any other comments or instructions (e.g. program
 features you'd like to see, or don't send a copy of the program until the
 next major rev, etc.)

 Note that the upgrade option is:

 1) Only available to users who have registered a previous revision of
 Directory Freedom and

 2) Is only required of registered users if they wish a copy of the latest
 revision on disk.  In other words, this is a shipping and handling charge
 for sending out the latest revision.  Registered users of DF who have
 obtained the latest rev from other sources (e.g. a BBS) are under no
 obligation to pay an upgrade fee for the use of that rev.

 (Of course, this revision will be mailed out automatically to those users
 for whom it represents their free upgrade.)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2228

     Volume in drive A has no label
     Directory of A:\

    CONVERT  EXE     17463   4-01-90  11:03p
    DF       COM     11265   4-01-90   6:11p
    DF350A   NEW      5496   4-10-90   2:04a
    DF350A   TXT     64765   3-13-90  10:23p
    DFCONFIG EXE     69673   3-25-90  11:07p
    DFM      ASM     28217  10-12-89  12:26a
    DFM      COM      1884  10-12-89  12:27a
    ND       EXE     10603   4-25-89  10:49p
    PACKING  LST      1160   4-10-90   2:06a
    READ_ME           3381   4-09-90  10:17p
    REGISTER TXT      2930   3-13-90  10:58p
    RF       COM      4675   4-10-90   2:02a
    GO       BAT        37   6-20-90   2:12p
    GO       TXT      1079   6-20-90   2:20p
    FILE2228 TXT      2961   6-20-90   2:22p
           15 file(s)     225589 bytes
                           87040 bytes free
