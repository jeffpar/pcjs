---
layout: page
title: "PC-SIG Diskette Library (Disk #3666)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3666/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3666"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COLORDOS.DOC

{% raw %}
```























                                  COLORDOS  1.5








                                    _______
                               ____|__     |               (R)
                            --|       |    |-------------------
                              |   ____|__  |  Association of
                              |  |       |_|  Shareware
                              |__|   o   |    Professionals
                            -----|   |   |---------------------
                                 |___|___|    MEMBER










                         Copyright (c) 1992,93  by KroTek Electronics


                             1214 Riverside Dr.  Unit 317
                             Timmins, Ontario, Canada
                             P4R 1A4
                             705 268 7352



                        ColorDOS release 1.50

        0.0     Welcome

        Thank you for taking the time to download ColorDOS 1.50. Hope-
fully you will find it useful in adding life to your work on the DOS
command line. With the advent of modern VGA color monitors included as a
part of many of today's computer packages, it is surprising that DOS
primarily remains a monochrome operating system.  ColorDOS was written
to overcome some of these limitations.


        1.0     What is ColorDOS ?

        ColorDOS is a set of very small, yet powerful set of TSR
(terminate and stay resident, or memory resident) programs that monitor
the activity of DOS and determine if the command line is present. They
then colorize the command prompt such that every subdirectory and drive
letter in the prompt has its own color. Also, all of the text that comes
after the command prompt can have a unique color for each drive, with or
without ANSI.SYS being installed.

        ColorDOS takes up very little memory (as low as 0.8 K) and it
can be loaded in the upper memory with the DOS loadhigh command.
ColorDOS is only active when the command prompt is showing, and is
completely passive when you are running applications. Despite its small
size and transparent operation, ColorDOS' effect are visible every time
you hit return from DOS.


        1.1      What is Included on This Disk ?

        This distribution disk should contain the following sixteen
files:
          1.      Read_me.1st                9.      Colordos.4

          2.      Colordos.doc              10.      Colordos.5

          3.      Colsetup.com              11.      Colordos.6

          4.      Colinstl.com              12.      Colremov.2

          5.      Colordos.1                13.      Registr.frm

          6.      Colordos.2                14.      Vendor.doc

          7.      Colordos.3                15.      Sysop.doc

          8.      Colremov.1                16.      Sitelice.doc

- If any of these files are missing, please do not redistribute this
package. - The file "Read_me.1st" contains information on how to quickly
get ColorDOS up and running on your system. - For more detail on the
contents or function of these files, please see appendicies B and C.



ColorDOS 1.5 User Manual                -2-           KroTek Electronics


        2.0     Table of Contents





        0.0     Welcome ................................... Page 2

        1.0     What is ColorDOS .......................... Page 2

        2.0     Table of Contents ......................... Page 3

        3.0     Installing ColorDOS ....................... Page 4

                3.1 Running ColInstl ...................... Page 4

                3.2 Loading ColorDOS ...................... Page 6

                3.3 Unloading ColorDOS .................... Page 6

                3.4 Running ColSetup ...................... Page 6

                3.5 ColSetup Features ..................... Page 8

        4.0     Video Modes ............................... Page 9

        5.0     Incompatibilities ......................... Page 10

                5.1 ColorDOS and DOSKey ................... Page 10

        6.0     Disclaimer ................................ Page 10

        7.0     Registration .............................. Page 10

                7.1 Copyright ............................. Page 10

                7.2 Price ................................. Page 11

                7.3 Software Support ...................... Page 11

                7.4 Distribution .......................... Page 11

        8.0     About ColorDOS ............................ Page 12

        9.0     Ombudsman & ASP Information ............... Page 12

        Appendix A - Definition of Shareware .............. Page 12

        Appendix B - Description of ColorDOS Files ........ Page 14

        Appendix C - Setting Environment Variables ........ Page 15

        Appendix D - Description of ColorDOS 'Drivers' .... Page 16



ColorDOS 1.5 User Manual                -3-           KroTek Electronics


        3.0  Installing ColorDOS


                        3.1     Running ColInstl

        The first step to installing ColorDOS on your computer is
the installation program, colinstl.com. ColInstl will automatically
create a batch file that can be run to set your "prompt" and the
"colordos" environment variables, and install the appropriate ColorDOS
tsr program in upper or lower memory, depending on your system.  The
installation program also will create a destination directory and copy
all of the program files to it. To determine information about your
system, ColInstl presents a series of settings that you can accept, or
step through and change to suit your needs.

        Use the arrow keys to step though the following settings and
edit them as follows: You can obtain help on any item by pressing F1
with the cursor over the setting in question.

         1.     CPU type - This is the microproceesor that your system
                        is running. This should be accurate, and cannot
                        be changed.

         2.     DOS version - The version of DOS that is running also
                        cannot be edited.

         3.     Video mode - The video card detected by the install-
                        ation program, can't be changed.

         4.     Use video BIOS - This is normally not necessary, and so
                        the default is 'no', as it is faster to use
                        ColorDOS' normal method of writing color changes
                        directly to the video memory. If you suspect
                        that you need to use the video BIOS, then toggle
                        this option on with the F2 key.

         5.     Text colorization - everything that appears on the
                        screen after the command prompt can be given a
                        unique color that changes as you change drives.
                        If you do not want this option, toggle it off
                        with the F2 key.

         6.     Ansi.sys Status - ColInstl can detect ansi.sys only if
                        it is the version origionally shipped with DOS
                        and that version of DOS is greater than 4.0. If
                        ansi.sys status is incorrectly reported, then
                        toggle it with the F2 key.

         7.     Command processor - In addition to command.com (which is
                        shipped with DOS), ColorDOS can be run under
                        4DOS, an alternative command processor from JP
                        Software. If the installation program detects
                        4DOS it will also report its version number.
                        Toggling this setting should not be necessary as
                        ColInstl will accurately detect the processor
                        installed, but it can be done with the F2 key.

ColorDOS 1.5 User Manual                -4-           KroTek Electronics


         8.     Prompt envir setting - This is read from your system if
                        you have previously set the prompt, otherwise it
                        defaults to $P$G. The cursor changes color to
                        indicate that you are in a line editor that you
                        can use to edit the prompt setting. Exit the
                        editor by moving the cursor up or down with the
                        arrow keys.

         9.     Installation source - This is the source where the
                        ColorDOS files will be copied from. It is
                        the active drive and directory at the time
                        that ColInstl is run, and cannot be
                        edited.

        10.     Path to ColorDOS files - This is the destination
                        directory for the files copied or created by the
                        installation program, and also for the color
                        configuration file created by the ColSetup
                        program. If you have set the colordos environ-
                        ment variable, the path is read from your
                        system.  If the environment is not set the
                        destination defaults to C:\DOS\COLORDOS. Running
                        the batch file will set the colordos env
                        variable to what you specify here. Like the
                        prompt setting, you are automatically in a line
                        editor when you move the cursor to this posit-
                        ion, and the up arrow will exit you from this
                        editor.

        Once you have answered all of the questions, then you can start
the installation process as follows using the following keys:

        F1      Help - Gives online help on the setting that is about to
                        be edited.

        F2      Toggle - Switch between the options available for the
                        use of the video bios, text colorization,
                        ansi.sys status, and the command processor.

        F3      Install - Copies the files over to the destination
                        directory. A file that is successfully copied is
                        indicated by a green check beside the file name,
                        a red 'R' indicates an error reading the source
                        file and a red 'W' indicates an error writing
                        to the new file. A series of W's at the end of
                        an installation probably indicates a full
                        destination disk.

        F4      Make Batch - Creates a batch file named COLSTART.BAT
                        that can be run to automatically set the
                        environment variables and load ColorDOS. You can
                        add this file to the end of your autoexec.bat
                        file so that ColorDOS loads every time you start
                        your system.

        F5      Quit - Exit the installation program.


ColorDOS 1.5 User Manual                -5-           KroTek Electronics


        F7      Insert - Text insert mode for the line editors that edit
                        the prompt and destination path.

        F8      Overwrite - Text overwrite mode for the line editors.
                        The insert key will also toggle between insert
                        and overwrite modes.


                        3.2     Loading ColorDOS in Memory

        The next step is to actually load the memory resident portion of
ColorDOS. This is done by simply running the batch file created by the
ColInstl program. Type "COLSTART" at the command line and the next
prompt will be in the default ColorDOS colors. In addition to loading
ColorDOS into memory, the ColStart batch file also sets the prompt and
the COLORDOS environment variables.




                        3.3     Unloading ColorDOS

        If you no longer require ColorDOS and wish to remove it from
memory, then you can run the ColRemove utility by typing 'colremov' at
the DOS prompt. ColorDOS will be unloaded and it's allocated memory will
be returned to the operating system. You can then reinstall ColorDOS if
you wish to use changes that you've made with ColSetup.

        ColRemov will work if ColorDOS is installed in conventional or
upper memory. However, if there are other TSR's that are installed after
ColorDOS, then you will not be able to unload ColorDOS until you have
removed the programs installed after it.



                        3.4     Running ColSetup

        Unless you are happy with the default color settings you will
want to create your own. This is done by running the program called
'colsetup' which will create a colordos.ini file that contains your
personal settings.

        The first thing ColSetup does is look for your previous setup
information. If you have not set the colordos environment variable
ColSetup will also default to the root directory of the C: drive.  The
first time you run the program, you will get an error message saying
ColSetup couldn't find colordos.ini but don't despair, you will soon
create it.








ColorDOS 1.5 User Manual                -6-           KroTek Electronics

        When you first start ColSetup, you will see a color grid on the
right and a sample prompt on the left. You will also see a copyright
notice in the upper left, and your computer will pause for 1 second
while you absorb it. After 1 second, you will be given 2 choices:

        RETURN  press the enter key if you accept the conditions of the
                  copyright notice

        ESCAPE  press the escape key if you do not accept


        If you press enter, two cursors will appear, Cursor 1 is the
box-like cursor that is used to select a drive letter, subdirectory, or
text color to edit, and Cursor 2 is to select a color from the color
grid to edit what you have selected with cursor 1. Also, your previous
setup colors will be loaded from disk and shown, or any applicable error
messages if there are problems with the environment variable or the
colordos.ini file. Now you can edit your settings using the following
keys:


        F1              Moves cursor 1 to the right over the sample
                          prompt.

        F2              Moves cursor 1 to the left.

        F3  &           If cursor 1 is positioned over the drive letter,
        F4                (or sample text, if text color is on) these
                          keys enable the drive letter to be changed in
                          order to enable editing of the drive letters
                          or text colors.

        F5 (or Escape)  Quit. If you have made any changes that have not
                          been saved to disk, you will be asked if you
                          want to exit without saving. Just press escape
                          again if you do, any other key will return you
                          to the program.

        F6              Save to disk. Your settings are written to a
                          file called colordos.ini in the drive and
                          directory that you specified in the colordos
                          environment variable. If the file already
                          exists, it is overwritten with the new
                          information, if it doesn't exist it is
                          created.

        F7              Turns text colorization on. This is the same
                          question as in the installation program, but
                          ColInstl & ColSetup don't talk to each other,
                          so you must repeat yourself here. Thus, if you
                          want ColorDOS to change the color of text
                          after the command prompt use this feature.
                          Some sample text will appear below the prompt
                          and the color can be edited.



ColorDOS 1.5 User Manual                -7-           KroTek Electronics


        F8              Turns text colorization off. If you have
                          ansi.sys installed, and want uniform text
                          colors regardless of what drive you are on,
                          then this is the option you need. Delete
                          removes the sample text from below the prompt,
                          as it no longer can be edited.

        Arrow Keys      Control the position of Cursor 2 over the color-
                          picking grid.

        Enter           Edits the color of the drive letter, subdir-
                          ectory, or text selected by Cursor 1 to the
                          color selected by Cursor 2.




        Please note that only the file colordos.ini is created with the
save option, if you specify a non-existent path with the colordos
variable, it is not created, you will only get an message specifying a
write error.



        3.3     ColSetup Features

        It is possible to set a unique drive color and text color for up
to 12 drives, A: to L:. After L:, the colors reset and start repeating-
so that M: is the same color as A:, and so on, in the following fashion:


        Color1 .......... A: .... M: .... Y:
        Color2 .......... B: .... N: .... Z:
        Color3 .......... C: .... O:
        Color4 .......... D: .... P:
        Color5 .......... E: .... Q:
        Color6 .......... F: .... R:
        Color7 .......... G: .... S:
        Color8 .......... H: .... T:
        Color9 .......... I: .... U:
        Color10 ......... J: .... V:
        Color11 ......... K: .... W:
        Color12 ......... L: .... X:




        ColorDOS can handle up to 8 different subdirectories.  Unlike
the drive letter colors, the subdirectory colors do not 'wrap around' to
subdirectory color 1 after the 8th subdirectory, and the program will
begin to give strange results.





ColorDOS 1.5 User Manual                -8-           KroTek Electronics

        There are not unique directory colors for each drive, the
directory background and foreground colors stay the same no matter what
drive you are on. Only the drive letter, the ":" and the chevron ( > )
change as you switch between drives. (As does the text if it is selected
on). You can, however, keep the same background color for the
directories as you have selected for the drive letter provided all of
the directory colors are chosen from the left most column of the color
grid. ( This is the column with no background color). ColSetup uses the
fact that none of the directories have a background  color as a signal
to fill in all of the prompt with the background color of the drive
letter.


                         The foreground color of DIR1 (a sample name for
                         the first subdirectory down from the root) in
                         each prompt will stay the same regardless of
                         the drive that you are logged on to. Similarily
                         for DIR2 & 3, etc. However, the background
                         color of all DIR's can be made the same as the
              ___________background color of the drive letters.
             |    |    |
             v    v    v
        C:\DIR1\DIR2\DIR3\...> sample_dos_command
        ^                    ^  ^
        |                    |  |
        |____________________|__|_ Both the foreground and background
                                        color of these items can be
                                        different for each drive in your
        Figure 1  Sample Prompt         system.


        This feature is useful if you want to make solid screen colors
that are different for each drive. For example, if you want drive C: to
have a solid blue background and drive D: to be solid green, choose a
blue background for the drive letter and text for C:, and a green
background for the drive and text for D:. Then choose directory colors
that contrast well with both blue and green, but pick them from the
left-most column of the color grid, and you're all set.

        Once you have everything setup to your satisfaction, press "F6"
to save your settings to disk, and exit ColSetup by pressing F5. In
order for your new color configuration to take effect, it is necessary
to first remove colordos from memory by running the program 'colremov'.
Then reload ColorDOS by running the batch file 'colstart' again. Your
new colors should now be displayed.


        4.0     Video Modes

        ColSetup will run in any color video mode from 80c x 25r to 132c
x 50r. ColorDOS will run in all of these modes and in addition 40c x
25r, but it must be started in at least 80 x 25. Both of these programs
will run on CGA, EGA, and VGA monitors in color video mode only.




ColorDOS 1.5 User Manual                -9-           KroTek Electronics

        5.0     Incompatibilities

        Every effort is made to ensure compatibility with existing
programs and tsr's that you might have already installed on your system.
However, due to the tremendous variety of TSR's available, it is
impossible to test them all. If you are unfortunate enough to uncover
any incompatibilities or bugs, please let us know, and every effort will
be made to rectify the problem. If possible, please include a listing of
your config.sys and autoexec.bat files. Also, if you have any
criticisms, comments, or features that you would like to see in future
versions, we would very much like to hear from you.  Please write to the
address shown in the registration section.


                5.1     ColorDOS and DOSKey

        Since version 1.41, ColorDOS is compatible with DOS 5's DOSKey.
However, DOSKey must be loaded into memory before ColorDOS is loaded. If
you are starting DOSKey and ColorDOS from your autoexec file, ensure the
command to load DOSKey comes before the line that loads ColorDOS.


        6.0     DISCLAIMER - AGREEMENT

        Users of ColorDOS must accept this disclaimer of warranty:


        "COLORDOS IS SUPPLIED AS IS.  THE AUTHOR DISCLAIMS ALL
WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE
WARRANTIES OF MERCHANTABILITY AND OF FITNESS FOR ANY PURPOSE.  THE
AUTHOR ASSUMES NO LIABILITY FOR DAMAGES, DIRECT OF CONSEQUENTIAL, WHICH
MAY RESULT FROM THE USE OF COLORDOS."


        7.0     Registration

                7.1     Copyright

        This ColorDOS documentation and the software are copyrighted and
all rights are reserved. No part of this documentation or software may
be copied or otherwise reproduced except in the manner described in this
manual.

                Copyright (c) 1992, 1993 by KroTek Electronics


        ColorDOS has been released as shareware. If you find it useful
and continue to use it after a reasonable trial period, please register
it.

        If you obtained this copy of ColorDOS in a self extracting
format it was created by a copyrighted archiving program called LHARC.

        LHA     Copyright (c) Haruyasu Yoshizaki, 1988-91



ColorDOS 1.5 User Manual                -10-          KroTek Electronics


                7.2     Price

        In Canada - CDN$13.50 plus $1.50 shipping and handling per
computer. In the United States - US$11 plus US$3 shipping and handling.
Internationally - add another US$3 to the US shipping price to offset
additional shipping costs. You will receive prompt notification of
future releases of ColorDOS.  Registered users will also receive a
registered version of the program without the registration notices,
delays or beeping.

        Please specify disk size when ordering. There is a registration
form included on the distribution disk for you convenience. Thank you
for your support. Please send your registration to:



       KroTek Electronics             |     Voice         705 268 7352
       1214 Riverside Dr.  Unit 317   |     CompuServe      70620,1755
       Timmins, Ont, Canada           |
       P4R 1A4                        |



                7.3     Software Support

        Support is available to all registered users of ColorDOS for a
period of 12 months by phoning 1 705 268 7352 (voice) or by CompuServe
email to 70620,1755.


                7.4     Distribution

        This shareware version of the ColorDOS 1.50 program may be
freely copied and distributed. In fact, your efforts in this regard are
greatly appreciated. However, the following restrictions apply:

                -This program may only be distributed as a complete
                  package, including this documentation file.

                -This program must not be altered in any way, and the
                  copyright notice must remain intact.

                -No charge may be levied for the program beyond a
                  reasonable media and copying fee.



        You are encouraged to pass a copy of ColorDOS along to your friends
for evaluation.  Please encourage them to register their copy if they
find that they can use it.  All registered users will receive a copy
of the latest version of ColorDOS.





ColorDOS 1.5 User Manual                -11-          KroTek Electronics


        8.0     About ColorDOS

        ColorDOS was written using the Microsoft Macro Assembler MASM
6.0. It was written between February and April 1992 to overcome the
limitations of all of the millions of prompt setting utilities that
relied on Ansi.sys.


        Ver 1.0   01May92     Well, here it is!

        Ver 1.1   15May92     ColRemove memory removal utility added.

        Ver 1.2 & 1.3         Not released

        Ver 1.4   17Jun92     The ability to send ANSI escape sequences
                                from within ColorDOS is added and 4DOS
                                compatible versions are added for all
                                the utilities.

        Ver 1.41  01Jul92     DOSKey incomatibility bug fixed, the bios
                                versions of ColorDOS added.

        Ver 1.50  20Feb93     The installation program is added to
                                automate the choices and system settings
                                This will ease the initial installation.



        9.0     Ombudsman Statement


        KroTek Electronics is a member of the Association of Shareware
Professionals (ASP). ASP wants to make sure that the shareware principle
works for you. If you are unable to resolve a shareware- related problem
with an ASP member by contacting the member directly, ASP may be able to
help. The ASP Ombudsman can help you resolve a dispute or problem with
an ASP member, but does not provide technical support for members'
products. Please write to the ASP Ombudsman at 545 Grover Road,
Muskegon, MI 49442 or send a CompuServe message via CompuServe Mail to
ASP Ombudsman 70007,3536.



                                Appendix A

                        The Definition of Shareware.

        Shareware distribution gives users a chance to try software
before buying it. If you try a Shareware program and continue using it,
you are expected to register. Individual programs differ on details --
some request registration while others require it, some specify a
maximum trial period. With registration, you get anything from the
simple right to continue using the software to an updated program with
printed manual.


ColorDOS 1.5 User Manual                -12-          KroTek Electronics

        Copyright laws apply to both Shareware and commercial software,
and the copyright holder retains all rights, with a few specific
exceptions as stated below. Shareware authors are accomplished
programmers, just like commercial authors, and the programs are of
comparable quality. (In both cases, there are good programs and bad
ones!) The main difference is in the method of distribution. The author
specifically grants the right to copy and distribute the software,
either to all and sundry or to a specific group. For example, some
authors require written permission before a commercial disk vendor may
copy their Shareware.

        Shareware is a distribution method, not a type of software. You
should find software that suits your needs and pocketbook, whether it's
commercial or Shareware. The Shareware system makes fitting your needs
easier, because you can try before you buy.  And because the overhead is
low, prices are low also. Shareware has the ultimate money-back
guarantee -- if you don't use the product, you don't pay for it.

        ColorDOS is a "shareware program" and is provided at no charge
to the user for evaluation.  Feel free to share it with your friends,
but please do not give it away altered or as part of another system.
The essence of "user-supported" software is to provide personal computer
users with quality software without high prices, and yet to provide
incentive for programmers to continue to develop new products. If you
find this program useful and find that you are using ColorDOS and
continue to use ColorDOS after a reasonable trial period, you must make
a registration payment of US$11 plus $3 shipping to KroTek Electronics.
The US$11 registration fee will license one copy for use on any one
computer at any one time.  You must treat this software just like a
book.  An example is that this software may be used by any number of
people and may be freely moved from one computer location to another, so
long as there is no possibility of it being used at one location while
it's being used at another.  Just as a book cannot be read by two
different persons at the same time.

        Commercial users of ColorDOS must register and pay for their
copies of ColorDOS within 30 days of first use or their license is
withdrawn.  Site-License arrangements may be made by referring to the
file sitelice.doc.

        Anyone distributing ColorDOS for any kind of remuneration must
first contact KroTek Electronics at the address above for authorization.
This authorization will be automatically granted to distributors
recognized by the (ASP) as adhering to its guidelines for shareware
distributors, and such distributors may begin offering ColorDOS
immediately (However KroTek Electronics must still be advised so that
the distributor can be kept up-to-date with the latest version of
ColorDOS.).









ColorDOS 1.5 User Manual                -13-          KroTek Electronics

                                Appendix B

        An explanation of the files contained in this package.


          1.      Read_me.1st     Contains the basic steps to quickly
                                    get ColorDOS running.

          2.      Colordos.doc    This is the file you are reading

          3.      Colinstl.com    Copies the colordos files from the
                                    distribution disk to the destination
                                    and determines the proper colordos
                                    'driver' and removal utility to use
                                    on your system. Also creates a DOS
                                    batch file that will automatically
                                    set system parameters and load
                                    ColorDOS.

          4.      Colsetup.com    The ColorDOS setup utility. Enables
                                    user customiztion of the default
                                    colors.

          5.      Colordos.1      This is the file that colorizes the
                                    command prompt.
          6.      Colordos.2      Same as Colordos.com, except this
                                    file also sends escape codes to the
                                    ANSI.SYS driver
          7.      Colordos.3      Also same as Colordos.com, except
                                    it uses the video bios to write to
                                    the screen.
          8.      Colremov.1      Utility for removing Colordos or
                                    Colansi from memory

          9.      Colordos.4      Performs the same job as Colordos for
                                    systems with JP Software's 4DOS
         10.      Colordos.5      Same as colordos.4, also sends ANSI
                                    escape sequences.
         11.      Colordos.6      4DOS version of Colordos.3.

         12.      Colremov.2      Utility for removing colordos.4, .5,
                                  or .6 from memory.

         13.      Registr.frm     An order form

         14.      Vendor.doc      Information for disk vendors

         15.      Sysop.doc       Information for BBS Sysops

         16.      Sitelice.doc    Contains a fee schedule and licence
                                    agreement for multiple computers
                                    under one registration.





ColorDOS 1.5 User Manual                -14-          KroTek Electronics

                                Appendix C

        This appendix contains information on manually setting the
colordos and prompt environment variables. This should not be necessary,
as the batch file does it automatically. This section is presented for
those who want more in depth information or who want to set the
environment from the command line.

                C.1     ColorDOS Environment Variable

        Before ColorDOS loads itself into memory, it looks for a setup
data file to tell it what colors to use. If it does not find this file,
it will continue to load regardless, however it will use default color
settings. The data file is called 'colordos.ini' and the environment
variable 'COLORDOS' can be set in order to tell the program where this
data file is located. Environment variables are set using the DOS 'set'
command:

        set colordos=d:\path

        where d: is the drive in which the colordos.ini file is stored
and "path" represents the subdirectory on that drive. Note that it is
important not to leave any spaces on either side of the equals sign and
the path name must actually exist.

        Environment variables can be set from the command line, however
the best place to set them is in the autoexec.bat file. If the
environment variable is not set, then ColorDOS defaults to looking in
the root directory of 'C:' drive for colordos.ini.

        Do not add a file name to the variable, the file name
'colordos.ini' is automatically appended to the end of the path.  See
your DOS documentation for further information regarding environment
variables, the 'set' command, or the 'shell' command if you get an 'out
of environment space' error message from DOS.

                C.2     The Prompt Environment Variable

        The prompt environment variable should also be set. This is done
by typing:

        prompt=$p$g

        where $p displays the current path and $g displays the
terminating chevron ( > ) character. The prompt MUST end with a chevron,
this is what ColorDOS uses to tell that it is at the end of the prompt.
Also, there can be no carriage return/ linefeed commands ( $_ ) after
the $p$g command in the prompt. The prompt environment variable can also
be set from the command line or from autoexec.bat.

        ColorDOS will also run with the default DOS prompt (C>), or
either upper or lower case 4DOS prompts. It is also OK to not set the
4DOS prompt enviroment and accept the default 4DOS prompt. (Upper case
4DOS prompts are specified by capitalizing the env variable ie $P$G,
lower case can be obtained with $p$g. See your DOS or 4DOS manual for
more information on various prompt options)

ColorDOS 1.5 User Manual                -15-          KroTek Electronics

                                Appendix D

        Presented here is more detailed information on the function of
the various 'driver' programs supplied in the ColorDOS package. As in
the case of setting the prompt, the installation program automatically
takes care of ensuring that the proper driver is renamed 'colordos.com'.
However, it is also possible to perform this task manually by using the
following proceedure.


                D.1     4DOS and ColorDOS

        4DOS, from JP Software, is an alternative command processor that
replaces command.com. The following table shows the 4DOS ColorDOS files
on the left along with their command.com equivalents.

             colordos.4   <==>  colordos.1
             colordos.5   <==>  colordos.2
             colordos.6   <==>  colordos.3
             colremov.2   <==>  colremov.1

        If you are running 4DOS, then you must use the utilities on the
left side of the table, the command.com versions will not work. They are
equivalent in every other way, and you can freely substitute the 4DOS
utilities on the left wherever you see the ones on the right printed for
the rest of this appendix.

        You must have 4DOS version 3.00 or higher. If you are unsure of
your version number, type the 'ver' command and the 4DOS version number
will be listed along with the DOS version no.



                D.2     Selecting the ColorDOS 'Driver'

        Let's start off here with a bit of a clean up. If you are using
4DOS, you can safely delete colordos.1, .2, and.3 and colremov.1.
Similarly, command.com users can delete colordos.4 and above, as well as
colremov.2

        The next decision is whether you have ANSI.SYS intalled. The
best way to check is to look in your config.sys file for the statement
'device=ansi.sys'. If you do not have ansi.sys, or you do but decided
that you don't want colordos to affect the text colors after the command
prompt, then rename colordos.1 to colordos.com. If you do want different
text colors for each different drive with ansi.sys installed, the you
must rename colordos.2 to colordos.com. This is necessary because
otherwise ansi.sys will overrule colordos' text colors with its own.
Colordos.2 generates an escape sequence every time you change drives
that puts ansi.sys' colors in phase with ColorDOS'.





4DOS is a trademark of JP Software, Inc.

ColorDOS 1.5 User Manual                -16-          KroTek Electronics

        If you are undecided about whether you should install ANSI.SYS,
- don't. ColorDOS works slightly better without it. ColorDOS does not
store keyboard macros, etc., however, so there are lots of reasons why
you might have it. If you have installed colansi.com and see something
similar to this: '<-[1;34;40m' every time you change drives, then you do
not have ansi.sys installed.

        If you notice that your text color is correct when you first log
onto a drive, but then switches back to its previous color, you have
ANSI escape sequences imbedded in your prompt, (ie your prompt is
probably set similar to 'prompt=$e[1;34;40m$p$g) which must be removed.
Escape sequences imbedded in the prompt will be generated each time the
prompt is displayed, and will overrule ColorDOS', which is only sent the
first time you log onto a new drive.

        Colordos.3 is simply another version of ColorDOS that uses the
video bios instead of writing directly to the video buffer. You may find
it useful if you do not have a totally compatible video card. In gen-
eral, though, if the setup program ColSetup runs, then using Colordos.3
should not be nesessary. If you need to use colordos.3, then rename it
to colordos.com. Colordos.3 uses the /a command line switch to turn on
the generation of ANSI.SYS escape sequences.

        Now you are ready to load ColorDOS into memory. To do this,
simply run 'colordos' at the command prompt. You will get an
installation message and your next prompt should be the colors you have
selected.

        If you have DOS 4.0 or greater and a 80386 or 486 with upper
memory installed, you can use DOS' 'loadhigh' command to place the
memory resident portion of ColorDOS in upper memory. This will help keep
the lower 640k of memory free for your applications programs. Once
again, the ColStart batch file should automatically make proper use of
the loadhigh command.

        See your DOS manual for information on emm386.exe, himem.sys,
dos=umb, and loadhigh.




















ColorDOS 1.5 User Manual                -17-          KroTek Electronics
```
{% endraw %}

## SITELICE.DOC

{% raw %}
```





                                   C O L O R D O S
                                  -----------------



                                     Version 1.5
                                    -------------




                  S I T E    L I C E N S E    I N F O R M A T I O N
                 ---------------------------------------------------






          What is a site license?  A site license is an inexpensive way for
          more than one person to legally use one copy of a program on more
          than one computer at a time.  Site licenses are designed for
          companies, offices or workgroups where more than one person in
          the organization needs to use a product, but does not need
          additional manuals or disks.  Site licensing enables companies,
          departments, government agencies, etc., to equip their personnel
          with the tools they need at a minimal cost.

          Here's the gist of how it works:  The company purchasing a site
          license (the licensee) provides a single point of contact for
          shipping, technical support, upgrades, etc., and we (the
          licensor) provide a "golden master" of the diskettes, manual, and
          any other parts of the package.

          The following chart gives a breakdown of the cost of site
          licensing and how much you save per site licensed.  For instance,
          if you purchased a site license for 11 users (sites) your cost
          would be $US84.70, which saves you $36.30 of the cost of 11
          separate purchases.  The more sites you license, the more you
          save.













          Site License Information                              Page 1 of 8


          KroTek Electronics                            ColorDOS 1.50


                               Discount      Price Per      Savings
               Quantity       Percentage       Unit         Per Unit


                5 -  10          25%        US$ 8.25       US$ 2.75
               11 -  15          30%          $ 7.70         $ 3.30
               16 -  20          33%          $ 7.37         $ 3.63
               21 -  25          36%          $ 7.04         $ 3.96
               26 -  30          39%          $ 6.71         $ 4.29
               31 -  40          42%          $ 6.38         $ 4.62
               41 -  50          45%          $ 6.05         $ 4.95
               51 -  60          48%          $ 5.72         $ 5.28
               61 -  70          51%          $ 5.39         $ 5.61
               71 -  80          54%          $ 5.06         $ 5.94
               81 -  90          57%          $ 4.73         $ 6.27
               91 - 100          60%          $ 4.40         $ 6.60

               101+           Please contact KroTek Electronics

          These days the world seems to be run by attorneys, so of course
          they want to get involved in everything.  The following legalese
          document is the complete license agreement.  Simply print it, fill
          it out, sign under LICENSEE, enclose a check or money order for
          the correct amount, and mail it to:

               KroTek Electronics                     Voice:  (705) 268-7352
               1214 Riverside Dr Unit 317
               Timmins, Ontario P4R 1A4          CompuServe:  70620,1755
               Canada

          Upon receipt of the completed, signed form, and a check or money
          order for the correct amount, we will send you the required
          "golden masters" and a copy of the license agreement with an
          authorized signature under LICENSOR.

          If you have any questions, or if you need site license information
          for more than 100 sites, please call our offices at (705)
          268-7352.  Thank you!

          NOTE:  This software is also marketed as Shareware, but this
          license has no relation to the Shareware version.

          All of the following pages are part of the actual site license
          agreement:









          Site License Information                              Page 2 of 8


                                    ColorDOS  1.5


                            END USER SITE LICENSE AGREEMENT
                            -------------------------------


          KroTek Electronics (Licensor) grants to ___________________________

          _______________________________________________________(Licensee),
          and Licensee accepts, a license to use the licensed program in
          accordance with the terms and conditions contained in this
          agreement.


          1.0 DEFINITIONS

               1.1 "Licensed program" means the object code version of the
          program listed in Exhibit 1 and related program user
          documentation.  No rights to the source code versions of the
          licensed program are granted by this license.

               1.2 "Object code" means any instruction or set of
          instructions in machine executable form.

               1.3 "User documentation" means any standard manuals or other
          related materials used for user instruction or reference in use of
          the licensed program.

               1.4 "Use" means copying of any portion of the licensed
          program from a storage unit or media into the designated equipment
          and execution of the licensed program on the equipment.


          2.0 LICENSE GRANT

               2.1 Licensee is granted a nontransferable, nonexclusive right
          to use the number of copies of the licensed program indicated on
          Exhibit 1 for Licensee's internal use.  Licensor (KroTek
          Electronics) will deliver one copy of the licensed program to
          Licensee.  Licensee may make additional copies of the licensed
          program, up to the number of copies licensed herein, provided that
          each copy of the program contains KroTek Electronics's copyright
          notice and any other proprietary legends, including legends under
          the Federal Acquisition Regulations (FAR), if any, contained on
          the delivered copy.

               2.2 Each copy of the licensed program provided under this
          license may be used on only one computer at any one time.  If used
          on a network system, each terminal user is automatically
          considered to be using a distinct copy of the licensed program
          whether or not he is actually using it.




          Site License Agreement        KroTek Electronics       Page 1 of 6


          KroTek Electronics                             ColorDOS 1.50


               2.3 Licensee shall not use, copy, rent, lease, sell, modify,
          decompile, disassemble, otherwise reverse engineer, or transfer
          the licensed program except as provided in this agreement.  Any
          such unauthorized use shall result in immediate and automatic
          termination of this license.


          3.0 TERMS

               3.1 This license is effective until terminated.  Licensee may
          terminate it at any time by destroying the licensed program and
          all copies of it and notifying KroTek Electronics in writing.  This
          license will also terminate as otherwise provided in this
          agreement.  On termination, Licensee shall return all materials
          not destroyed to KroTek Electronics together with a written
          verification that the remaining materials have been destroyed.


          4.0 PAYMENT

               4.1 The fee for this license is set forth in Exhibit 1,
          payable as set forth.


          5.0 CONFIDENTIALITY AND PROPRIETARY RIGHTS

               5.1 The licensed program is licensed, not sold.  Nothing in
          this agreement shall be construed as conveying title in the
          licensed program to Licensee.

               5.2 Licensee understands and agrees that the source code for
          the licensed program and all documentation related thereto
          constitute the valuable properties and trade secrets of Falk Data
          Systems, owner of the copyright to the licensed program, embodying
          substantial creative efforts which are secret, confidential, and
          not generally known by the public, and which secure to Falk Data
          Systems a competitive advantage.

               5.3 Licensee agrees during the term of this license, and
          thereafter, to hold the licensed program, including any copies
          thereof and any documentation related thereto, in strict
          confidence and to not permit any person or entity to obtain access
          to it except as required for Licensee's own internal use
          hereunder.

               5.4 Licensee shall inform KroTek Electronics promptly and in
          writing of any actual or suspected unauthorized use or disclosure
          of the licensed programs or documentation related thereto.

               5.5 The obligations under this paragraph shall survive the
          termination or rescission of this agreement.


          Site License Agreement        KroTek Electronics       Page 2 of 6


          KroTek Electronics                             ColorDOS 1.50


          6.0 LIMITED WARRANTY

               6.1 Kr2drk Electronics warrants that for a period of
          ninety days from the date of delivery of the licensed program,
          the program, if unmodified by the Licensee, will perform in
          substantial conformity with the user documentation.  KroTek
          Electronics does not warrant that the licensed program is
          free from coding errors.  Any program problems reported to
          KroTek Electronics during the warranty period and determined
          by KroTek Electronics to be actual coding errors will be
          corrected by KroTek Electronics within a reasonable time.  Any
          modifications to the licensed program shall thereafter be
          licensed AS IS.

               6.2 The above warranty does not apply to the extent that any
          failure of the licensed program to perform as warranted is caused
          by the licensed program being (1) not used in accordance with the
          user documentation, or (2) modified by any person other than
          authorized KroTek Electronics personnel.

               6.3 LICENSOR MAKES AND LICENSEE RECEIVES NO OTHER WARRANTY OF
          ANY KIND, EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY
          WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
          PURPOSE.


          7.0 LIMITATION OF LIABILITY

               7.1 The total liability of KroTek Electronics or its suppliers
          for any claim or damage arising out of the use of the licensed
          program or otherwise related to this license shall be limited to
          direct damages which shall not exceed the license fee(s) which
          have been paid by Licensee to KroTek Electronics for the specific
          client project which is the subject of such claim or damage.

               7.2 IN NO EVENT SHALL LICENSOR BE LIABLE TO LICENSEE FOR
          ADDITIONAL DAMAGES, INCLUDING ANY LOST PROFITS, LOST SAVINGS OR
          OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE
          OF OR INABILITY TO USE THE LICENSED PROGRAM, EVEN IF LICENSOR HAS
          BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.


          8.0 TERMINATION.  THIS LICENSE MAY BE TERMINATED BY KROTEK
          ELECTRONICS IF:

               8.1 Licensee fails to comply with any material term or
          condition of this agreement and Licensee fails to cure such
          failure within fifteen days after notices of such failure by KroTek
          Electronics; and





          Site License Agreement        KroTek Electronics       Page 3 of 6


          KroTek Electronics                             ColorDOS 1.50


               8.2 Licensee's normal business operations are disrupted or
          discontinued for more than thirty days by reason of insolvency,
          bankruptcy, receivership, or business termination.


          9.0 GENERAL TERMS

               9.1 Neither this agreement nor any rights or obligations
          hereunder shall be assigned or otherwise transferred by Licensee
          without prior written consent of KroTek Electronics, which consent
          will not be unreasonably withheld.  KroTek Electronics may assign
          this agreement entirely in its discretion upon the express written
          assumption of the obligations hereunder by the assignee.

               9.2 Any controversy or claim arising out of or relating to
          this agreement or the breach thereof shall be settled by
          arbitration in accordance with the commercial rules of the
          American Arbitration Association, using an arbitrator with
          knowledge of computers and software, and judgment upon the award
          rendered by the arbitrator(s) may be entered in any court having
          jurisdiction thereof.  No arbitration or other action arising out
          of any claimed breach of this agreement or transactions under this
          agreement may be demanded by either party more than one year after
          the cause of action accrued.  The prevailing party in any such
          action related to or arising under this agreement shall be
          entitled to reasonable attorneys' fees.  This provision shall not
          apply to any action or proceeding for injunctive relief.

               9.3 This agreement and its exhibits contain the entire
          agreement between the parties hereto, superseding all previous
          agreements, representations, understandings and negotiations.
          This agreement may not be amended other than by writing signed by
          an authorized representative of the parties.

               9.4 If any terms or provisions of this agreement shall be
          found to be illegal or unenforceable then, notwithstanding, this
          agreement shall remain in full force and effect and such term or
          provision shall be deemed stricken.















          Site License Agreement        KroTek Electronics       Page 4 of 6


          KroTek Electronics                             ColorDOS 1.50


               9.6 No amendment of this agreement shall be effective unless
          it is in writing and signed by duly authorized representatives or
          both parties.  No term or provision hereof shall be deemed waived
          and no breach excused unless such waiver or consent shall be in
          writing and signed by the party claimed to have waived or
          consented.  Any consent by any party to or waiver of a breach by
          the other, whether express or implied, shall not constitute a
          consent to, waiver of or excuse for any other, different or
          subsequent breach.

               9.7 This agreement shall be binding on and shall inure to the
          benefit of the heirs, executors, administrators, successors and
          assigns of the parties hereto, but nothing in this paragraph shall
          be construed as a consent to any assignment of this agreement by
          either party except as provided hereinabove.

               9.8 Timely payment is of the essence of this agreement.

               9.9 This agreement may be signed in counterparts.


































          Site License Agreement        KroTek Electronics       Page 5 of 6


          KroTek Electronics                             ColorDOS 1.50


          Effective this _________ day of ________________________, 19_____.

                      LICENSEE                          LICENSOR

          _______________________________    _______________________________
          Authorized Representative                Authorized Representative

          Typed name_____________________    Typed name_____________________

          Title__________________________    Title__________________________

          Address________________________    Address________________________

          _______________________________    _KroTek Electronics____________

          _______________________________    _1214 Riverside Dr Unit 317____

          _______________________________    _Timmins, Ontario P4R 1A4______


                                       EXHIBIT 1

                                   Licensed Program

                             ColorDOS, Version 1.50

                       NUMBER OF USERS     LICENSE FEE PER USER

                           5 -  10               US$ 8.25
                          11 -  15                 $ 7.70
                          16 -  20                 $ 7.37
                          21 -  25                 $ 7.04
                          26 -  30                 $ 6.71
                          31 -  40                 $ 6.38
                          41 -  50                 $ 6.05
                          51 -  60                 $ 5.72
                          61 -  70                 $ 5.39
                          71 -  80                 $ 5.06
                          81 -  90                 $ 4.73
                          91 - 100                 $ 4.40
                          101+             Please contact KroTek Electronics


          The above prices include one copy of the Retail Version of the
          ColorDOS.  Licensee may make additional copies, up to the number
          of copies licensed.  KroTek Electronics can supply multiple copies of
          the distribution diskettes at an additional cost of US$2.50 per copy
          plus shipping and handling costs.





          Site License Agreement        KroTek Electronics       Page 6 of 6

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```


           - ColorDOS, Version 1.50 - SYSOP.DOC -


                         C O L O R D O S
                        -----------------

                           Version 1.50
                          --------------

                  B B S    I N F O R M A T I O N
                 --------------------------------

                    Last updated:  March, 1993

This file contains information regarding the posting of the ColorDOS
package, version 1.50, on Bulletin Board Systems.

For sample descriptions which you may use to describe the product please
refer to the end of this file.

NOTE:  Disk Vendors and Distributors please refer to the VENDOR.DOC text
file.


-------------------------------------------------------------------------
                        Distribution Requirements:
-------------------------------------------------------------------------

Limited Distribution License:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
As the exclusive copyright holder for ColorDOS, KroTek Electronics
authorizes on-line distribution only in accordance with the following
restrictions.  Disk Vendors and Distributors should refer to the
VENDOR.DOC text file for complete license information.

The ColorDOS package is defined as containing all the material listed in
Appendix B of the COLORDOS.DOC text file.  If any files listed in the
Appendix B, or the COLORDOS.DOC file itself, are missing, then the
package is not complete and distribution is forbidden.  Please contact
us to obtain a complete package suitable for distribution.

    o  The ColorDOS package - including all related program files and
       documentation files - CANNOT be modified in any way (other than
       that mentioned in the following paragraph) and must be
       distributed as a complete package, without exception. Appendix A
       of the COLORDOS.DOC text file contains a list of all files that
       are part of the ColorDOS package.

    o  Many BBSs customarily add a small text file (advertisement) to
       each archived file.  This text file describes the BBS and tells
       people that the file was downloaded from that particular BBS.
       Other BBSs add a small one-line message with their BBS name and




BBS SYSOP Information                                 Page 1 of 4


           - ColorDOS, Version 1.50 - SYSOP.DOC -


       phone number into the compressed file, which will display when
       the file is uncompressed.  Either of these methods of mentioning
       your BBS are acceptable and may be used, provided the program and
       documentation is otherwise unmodified and complete.

    o  KroTek Electronics prohibits the distribution of outdated
       versions of the ColorDOS package, without written permission from
       KroTek Electronics.  If the version you have obtained is over
       twelve (12) months old, please contact us to ensure that you have
       the most current version.

    o  Licensee shall not use, copy, rent, lease, sell, modify,
       decompile, disassemble, otherwise reverse engineer, or transfer
       the licensed program except as provided in this agreement.  Any
       such unauthorized use shall result in immediate and automatic
       termination of this license.

All rights not expressly granted here are reserved to KroTek Electronics


Applying for ASP Associate Membership:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to apply for ASP Associate Membership (to
become an ASP BBS member), simply write to the following address
and request a BBS Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP Executive
   Director 72050,1433.  You may also FAX a request to the ASP Executive
   Director at 616-788-2765.



















BBS SYSOP Information                                 Page 2 of 4


           - ColorDOS, Version 1.50 - SYSOP.DOC -


BBS Update Program:
~~~~~~~~~~~~~~~~~~~
Most BBSs have standard procedures for acquiring new files.  They get
them from other boards, new programs are uploaded by users, etc.  This
is good because most authors cannot afford to mail disks or upload files
to thousands of BBSs.  However, some BBSs prefer to obtain programs
directly from the authors.  If you would like to obtain programs
directly from us, automatically, then please help us to cover the cost.

If your BBS would like to receive automatic upgrades to any of our
products, directly from us, then please refer to the information below.
Due to the time and expense we are generally unable to upload directly
to a large number of Bulletin Board Systems.  However, we are able to
mail updates on disk (in a sealed envelope) to many BBS's.

If your BBS would like to receive automatic updates then please take
advantage of our BBS Update Program.  Under this program you can receive
updates for an entire year for only $10 per program (this helps to
offset our costs).

To receive updates, simply send us a letter with the name and address of
your BBS, your mailing address, the name of the person we may contact
(preferably the SYSOP or CO-SYSOP), the program (or programs) for which
you would like to receive updates, and a check or money order for $10
for each program (for countries outside of North America please add an
additional $10 per program).

The BBS Update Program is available for the following products (as of
March, 1993):

        ColorDOS

NOTE: All BBS's participating in our BBS Update Program will
      automatically receive any NEW programs which we may release
      while their BBS Update Program is in effect.

The BBS Update Program is only intended to help us cover our expenses in
those cases where a BBS desires to obtain the program directly from us.
If you have other standard ways to obtain programs, then you may prefer
not to use our BBS Update Program.

Thank you for your support!











BBS SYSOP Information                                 Page 3 of 4


           - ColorDOS, Version 1.50 - SYSOP.DOC -


Please use the following discriptions for the ColorDOS package:


Filename:       colord15.zip  (or appropriate extension)

Short: (37 chars)
DOS prompt multi colorization utility

Long: (495 chars)
ColorDOS generates a unique prompt drive letter color and a different
text color for each drive in your system. Also, each subdirectory in the
prompt can have its own color. This gives instant visual recognition of
how many directories from the root directory you are and gives the
command line an extreamly pleasing appearance. All options are set using
an excellent setup program and load automatically. 4DOS compatible.
Outputs ansi.sys escape seq for different text color on each drive if
required.



Our address:    KroTek Electronics              | Voice    705 268 7352
                1214 Riverside Dr. Unit 317     | CompuServe 70620,1755
                Timmins, Ontario, Canada        |
                P4R 1A4                         |
































BBS SYSOP Information                                 Page 4 of 4
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```





                              C O L O R D O S
                             -----------------

                                Version 1.50
                               --------------

                    V E N D O R    I N F O R M A T I O N
                   --------------------------------------

                         Last updated:  March, 1993


This file provides information for Shareware Distributors, Disk Vendors
and Computer Clubs who wish to distribute the ColorDOS 1.50 package.

BBS SYSOPs:  Please refer to the SYSOP.DOC text file for information.

Individual and Company Users:  Please refer to the licence section of
the file COLORDOS.DOC and the file REGISTR.FRM for information.

For sample descriptions which you may use to describe the product please
refer to the end of this file.


---------------------------------------------------------------------------
                         Distribution Requirements
---------------------------------------------------------------------------

Individuals who wish to distribute the ColorDOS package to friends or
associates may do so in accordance with the restrictions outlined in
the registration section of COLORDOS.DOC.

Computer Clubs and User Groups wishing to add the ColorDOS package to
their disk library may do so in accordance with the Distribution
Restrictions listed below.

   If you would like your Computer Club or User Group to be placed on our
   mailing list for future upgrades to any of our products, please contact
   us for complete details.

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for ColorDOS, KroTek Electronics
authorizes distribution only in accordance with the following restrictions.

ASP Approved Vendors in good standing are hereby given permission to
distribute ColorDOS package.  Non-ASP member vendors must request
permission prior to distributing this package.




Vendor/Distributor Information                              Page 1 of 4


               - ColorDOS, Version 1.50 - Vendor.DOC -


The ColorDOS package is defined as containing all the material listed in
the Appendix B of the Colordos.doc file.  If any files listed in the
Appendix B, or the COLORDOS.DOC file itself, are missing, then the
package is not complete and distribution is forbidden. Please contact us
to obtain a complete package suitable for distribution.

The ColorDOS package - including all related program files and document-
ation files - CANNOT be modified in any way and must be distributed as a
complete package, without exception. Appendix B of the COLORDOS.DOC text
file contains a list of all files that are part of the ColorDOS package.

   Small additions to the package, such as the introductory or installation
   batch files used by many shareware disk vendors, are acceptable.

No price or other compensation may be charged for the ColorDOS package.
A distribution fee may be charged for the cost of the diskette, shipping
and handling, as long as the total (per disk) does not exceed US$8.00 in
the U.S. and Canada, or US$12.00 internationally.

Disk Sets & CD-ROMs:
~~~~~~~~~~~~~~~~~~~~
The ColorDOS package CANNOT be sold as part of some other inclusive
package.  Nor can it be included in any commercial software packaging
offer, without a written agreement from KroTek Electronics.

   ASP Approved Vendors who wish to distribute the ColorDOS package as
   part of a collection (such as PsL's MegaDisk set, or a CD-ROM
   package) may do so provided that all the other restrictions are met.

   Vendors (non-ASP Vendor Members) who wish to distribute the ColorDOS
   package as part of a collection (such as PsL's MegaDisk set, or a
   CD-ROM package) must obtain permission from KroTek Electronics prior
   to beginning such a distribution.

   If you wish to add any of our programs to a CD-ROM or other collection,
   please check the release date of the version you have.  If the version
   is over twelve (12) months old then please contact us to ensure that you
   have the most current version.  This version was released in March,
   1993.

Disk-of-the-Month (or Subscription) Distribution:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to distribute the ColorDOS package as a Disk-of-the-
Month, or as part of a subscription or monthly service, then the
following restrictions apply:

   ASP Associate (Disk Vendor) Members in good standing are hereby given
   permission to distribute the ColorDOS package under the Disk-of-the-
   Month style of distribution.



Vendor/Distributor Information                               Page 2 of 4


               - ColorDOS, Version 1.50 - Vendor.DOC -


   Others (non-ASP Members) must contact us in advance to ensure that you
   have the most current version of the software.

   You cannot use a Disk-of-the-Month distribution to use up your inventory
   of old (out of date) disks.  Only current versions may be shipped as
   Disk-of-the-Month disks.

The PRINTED User's Guide may not be reproduced in whole or in part, using
any means, without the written permission of KroTek Electronics.  In other
words, the disk-based documentation may not be distributed in PRINTED
(hardcopy) form.

The ColorDOS package cannot be "rented" or "leased" to others.

You may not list any of our products in advertisements, catalogs, or other
literature which describes our products as "FREE SOFTWARE".  Shareware is
"Try-Before-You-Buy" software, it is not free.

KroTek Electronics prohibits the distribution of outdated versions of the
ColorDOS package, without written permission from KroTek Electronics.
If the version you have is over twelve (12) months old, please contact us
to ensure that you have the most current version.  This version was
released in March, 1993.

Licensee shall not use, copy, rent, lease, sell, modify, decompile,
disassemble, otherwise reverse engineer, or transfer the licensed program
except as provided in this agreement.  Any such unauthorized use shall
result in immediate and automatic termination of this license.

All rights not expressly granted here are reserved to KroTek Electronics.























Vendor/Distributor Information                               Page 3 of 4


               - ColorDOS, Version 1.50 - Vendor.DOC -


Applying for ASP Associate Membership:
--------------------------------------

If you would like to apply for ASP Associate Membership (to become an ASP
Approved Vendor), simply write to the following address and request a
Vendor Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP Executive
   Director 72050,1433.  You may also FAX a request to the ASP Executive
   Director at 616-788-2765.


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding ColorDOS.
Please send us a copy of any reviews, articles, catalog descriptions, or
other information you print or distribute regarding the ColorDOS
package.  Thank you for your time and assistance and for supporting the
shareware marketing concept.


Please use the following discriptions for the ColorDOS package:


Filename:       colord15.zip    (or appropriate extension)

Short: (37 chars)
DOS prompt multi colorization utility

Long: (495 chars)
ColorDOS generates a unique prompt drive letter color and a different
text color for each drive in your system. Also, each subdirectory in the
prompt can have its own color. This gives instant visual recognition of
how many directories from the root directory you are and gives the
command line an extreamly pleasing appearance. All options are set using
an excellent setup program and load automatically. 4DOS compatible.
Outputs ansi.sys escape seq for different text color on each drive if
required.


Thank you for your support!

Our address:    KroTek Electronics              | Voice    705 268 7352
                1214 Riverside Dr. Unit 317     | CompuServe 70620,1755
                Timmins, Ontario, Canada        |
                P4R 1A4                         |

Vendor/Distributor Information                               Page 4 of 4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3666

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        37   4-27-93   3:08p
    COLORDOS 1        2756   2-19-93  12:53p
    COLORDOS 2        2920   2-19-93  12:53p
    COLORDOS 3        3064   2-19-93  12:53p
    COLORDOS 4        2644   2-19-93  12:53p
    COLORDOS 5        2739   2-19-93  12:53p
    COLORDOS 6        2911   2-19-93  12:53p
    COLREMOV 1         698   2-19-93  12:53p
    COLREMOV 2         615   2-19-93  12:53p
    READ_ME  1ST       967   2-19-93  12:53p
    VENDOR   DOC      8504   2-19-93  12:53p
    SYSOP    DOC      7348   2-19-93  12:53p
    REGISTR  FRM      1600   2-19-93  12:53p
    SITELICE DOC     18365   2-19-93  12:53p
    COLSETUP COM     14995   2-19-93  12:53p
    COLINSTL COM     22751   2-19-93  12:53p
    COLORDOS DOC     41260   2-19-93  11:55p
    FILE_ID  DIZ       452   2-18-93  12:50p
    SHOW     EXE      2040   9-12-88  10:48a
           19 file(s)     136666 bytes
                           18944 bytes free
