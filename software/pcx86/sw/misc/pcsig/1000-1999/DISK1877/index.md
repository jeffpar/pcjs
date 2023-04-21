---
layout: page
title: "PC-SIG Diskette Library (Disk #1877)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1877/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1877"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANARKEY"

    Tired of having to retype the DOS command when you make a spelling
    error?  Reduce the number of keystrokes you make when entering DOS
    commands by using ANARKEY.
    
    ANARKEY is a commmand-line editor that will significantly reduce the
    keystrokes you make when entering DOS commands.  ANARKEY provides one of
    the most powerful, compact, and flexible command-line environments
    available on a DOS machine.
    
    ANARKEY is a memory resident program that intercepts your DOS commands.
    When you make a typing error, you can move the cursor backwards, without
    erasing characters, and make the correction.   You can't do this with
    DOS.  The shape of the cursor also changes to indicate overwrite or
    insert mode.  ANARKEY will save all the commands you enter so that you
    can recall them for later use.  This saves you from having to reenter
    commands that are used repeatedly.  Simply press the F4 key until the
    command you want appears and then press enter.
    
    ANARKEY also provides improved program and directory search functions,
    and the ability to control environment variables.  It will also run in
    expanded memory so that it requires less than 1K of DOS memory space.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANARKED.DOC

{% raw %}
```








                                    ANARKED
                           The ANARKEY Keystroke Editor
                                  User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                               by Steven Calwas
                              All rights reserved











                               Introduction
                               ------------

   ANARKED is the ANARKEY keystroke editor.  It allows ANARKEY functions
to be reassigned to keystrokes other than their default assignments.  With
ANARKED, you can configure ANARKEY to perform like your word processor,
previous command-line editor, or own personal tastes.

   ANARKED is not a TSR (Terminate-and-Stay-Resident) program.  ANARKED
modifies the ANARKEY.COM disk file so that it will recognize the new
keystroke assignments.  ANARKEY does not have to be installed to run
ANARKED.  ANARKED will patch the ANARKEY.COM disk file, not the resident
program.  After running ANARKED, the new keystroke assignments will be
activated the next time you install ANARKEY.



                              Getting Started
                              ---------------

   Simply execute ANARKED from the DOS command line or from a batch file.
ANARKED will accept one optional command-line parameter.

        ANARKED [-U]

   Specify the -U option if you are upgrading from a previous version of
ANARKEY (2.00 or later) to a later release.  ANARKED will allow you to carry
over the key assignments of the earlier version to the new release.  This
will save you from having to go through the entire key assignment operation
each time you upgrade to a new version of ANARKEY.  The effects of
specifying the -U option are described a little later.

   Note: The -U option is supported only in the registered version of
ANARKED.  To receive a registered version, you must send in your paid
registration form contained in the file ORDERFRM.  A registered copy of the
entire ANARKEY software package will be sent to you immediately.

   When executed without the -U option, ANARKED will ask for the name and
location of the ANARKEY.COM program file you wish to configure.  When
executed under DOS version 3.00 and later, the default input file is
ANARKEY.COM located in the same directory and drive from which ANARKED was
executed.  If executed in an earlier version of DOS the default input file
will be ANARKEY.COM in the current directory of the current drive.
Whichever version of DOS you're running, the default input filename will be
displayed.  Pressing the <Enter> key will accept the default.  To specify a
different filename or location, type the file's drive, path and name
specification and then press <Enter>.

   ANARKED will check the input file to verify it is a valid ANARKEY program
file.  ANARKED will modify ANARKEY versions 2.00 or greater.  Earlier
versions of ANARKEY are not modifiable.  If the program file is found to be
invalid, an error message will appear and ANARKED will prompt for another
input file.

   When upgrading (-U option), ANARKED will prompt you for two input files:
(1) the original ANARKEY file whose key assignments you wish to carry over
and (2) the new release ANARKEY file to which you are upgrading.  If both
files are valid ANARKEY program files, the key assignments will be
transferred from the old version to the new.

   All default key assignments to functions supported in the new release but
not in the old version will be removed.  This is done to prevent any
occurrences of a key being assigned to more than one function.  All new
functions in a release will be documented in the UPDATE.DOC file included in
each ANARKEY distribution package.  If there are any new functions in the
new version, ANARKED will inform you by listing them in a window when the
program is first executed.

   After transferring key assignments, the normal ANARKED operation will
continue.

   Once all the required input files are specified, ANARKED will prompt for
the output file.  Any changes you make during the ANARKED session will be
stored in this output file.  By default, ANARKED will write the changes to
the specified input file.  Pressing <Enter> will accept the default.  If you
wish to save your changes to a different file, type in the desired file
specification with optional drive and path.

   After specifying valid input and output files, ANARKED will display its
main "command/keystroke window."



                      ANARKED Command/Keystroke Windows
                      ---------------------------------

   A "command/keystroke window" is a full-screen window which contains a
group of ANARKEY functions and their assigned keystrokes.  Since all of the
ANARKEY functions cannot fit onscreen at once, they are divided into several
windows.  Traversing through the windows is possible by pressing one of the
action keys described below.

   Each ANARKEY function is displayed on a single line.  On each line is a
function description and its keystroke invocations.  As displayed,
keystrokes are surrounded by < > characters, for example <F1>.  These
bracketing characters are not part of the keystroke invocation.  Any
keystroke invocation that is not currently assigned is displayed as "<>".

   An ANARKEY function may have a maximum of two keystrokes assigned to it.
For example, as shipped, the Find-History-Buffer-Match-and-Edit function is
invoked by pressing either the <F5> or <Ctrl-K> keys.  Both of these
keystrokes would share the line with the function description and would look
something like this:

             Find match and edit      <F5>            <Ctrl-K>

The Active Keystroke Field
--------------------------
   One keystroke invocation in the window will be displayed in inverse
video, meaning the characters are displayed on a bright background.  This
keystroke is the "active keystroke field."  Keystroke assignments are always
performed on the active keystroke field.

Action Keys
-----------
   There are seven "action" keys that, when pressed, cause ANARKED to
perform a special operation.  The seven action keys are:

                -- the arrow keys (Up, Down, Left and Right)
                -- <PgUp> and <PgDn>
                -- and <Esc>

   Pressing one of the arrow keys (Up, Down, Left or Right) will move the
active keystroke field in the specified direction.  These keys are used to
set the active field to any of the displayed keystroke invocations.

   All ANARKEY commands are modifiable with ANARKED, but, because they
cannot all fit onscreen at once, commands are divided into several display
windows.  Pressing the <PgUp> and <PgDn> keys will cycle through each of
these windows.

   Pressing the <Esc> key will activate the "ANARKED Action Menu."  From the
Action Menu you may perform special operations such as saving your changes,
assigning one of the action keys to a function or quitting the program.
Each Action Menu function is explained later in this manual.



                          Editing ANARKEY Keystrokes
                          --------------------------

Assigning New Keystrokes
------------------------
   Pressing any key (other than an action key) will immediately assign that
key to the active keystroke field.  As an example, to assign <F1> to the
active keystroke field, simply hit <F1>.

   This method makes it extremely easy to configure ANARKEY without the
confusing configuration files or installation programs required by many word
processors.

   Most of the keystroke combinations available on a keyboard may be
assigned to an ANARKEY function.  These include:

                 <Alt>  -sequences, like <Alt-F1>  and <Alt-A>,
                 <Ctrl> -sequences, like <Ctrl-F1> and <Ctrl-Z> and
                 <Shift>-sequences, like <Shift-F1>.

   Some keys, however, are reserved by DOS for special handling, for
example, <Ctrl-C> and <Ctrl-P>.  These DOS-reserved keystrokes may not be
assigned to an ANARKEY function.  If you attempt such an assignment, ANARKED
will refuse to carry out your request.

   Each particular keystroke may be assigned to a maximum of one ANARKEY
function.  Obviously, it would not make sense to have a key assigned to two
different functions.  If an attempt is made to assign a key to the active
keystroke field and that key is already assigned to another function,
ANARKED will display a window stating the function to which the key is
currently assigned and asking if you wish to remove it.  If you wish to
remove the current key assignment and assign the key to the active keystroke
field, press 'Y' or <Enter>.  Pressing any other key will leave the original
key assignment and active keystroke field unchanged.

Clearing Keystrokes
-------------------
   A particular keystroke invocation may be completely removed or cleared
from a function by pressing the <Ctrl-@> key when the field is the active
keystroke field.  Notice that you will have to hold down one of the <Shift>
keys to enter a <Ctrl-@> keystroke.  In case you forget this field-clearing
keystroke, the Action Menu (described below) can be used to perform the same
operation.

   NOTE: The TOPS local area network will not correctly handle the <Ctrl-@>
keystroke.  Either UNLOAD TOPS when running ANARKED or use the corresponding
Action Menu operation to remove keystroke assignments.  TOPS may also
interfere with the assignment of otherwise valid keystrokes.  If you have
any problems assigning a particular key, UNLOAD TOPS and try again.

An Editing Example
------------------
   As an example of editing a keystroke assignment, let's say you want to
configure the Delete-to-End-of-Line function so it will be executed every
time you press <F1>.

   First, use the <PgUp>/<PgDn> keys to display the window that contains the
Delete-to-End-of-Line function.  Then use the arrow keys to move the active
keystroke field to the key-field you wish to change.

   By default, Delete-to-End-of-Line is assigned the keys <Ctrl-End> and
<Ctrl-Y>.  Since a function may be assigned a maximum of two keystrokes, the
new <F1> assignment will have to replace one of these.  Decide which key to
replace and make it the active field by using the arrow keys.

   Finally, press the <F1> key.  <F1> will be immediately assigned to the
active keystroke field.  If <F1> had already been assigned to another
function, ANARKED would have automatically removed it and beeped to tell you
so.

   As another example, say you do not want any possibility of accidently
invoking the Clear-History-Buffer function.  You can, in effect, remove this
command from ANARKEY by clearing all keystrokes assigned to it via <Ctrl-@>.

   That's all there is to it!



                          The ANARKED Action Menu
                          -----------------------

   Operations other than keystroke assignments are performed by choosing a
selection from the Action Menu.  The Action Menu is activated by pressing
the <Esc> key.  Once active, the Action Menu provides the abilities to:

               -- save your editing changes and quit ANARKED,
               -- create a summary file of the ANARKEY
                  functions and their assigned keystrokes,
               -- assign one of the action keys to a function,
               -- clear the active keystroke field and
               -- quit ANARKED without saving your changes.

   The Action Menu's active operation is displayed in inverse video.
Pressing the Up and Down arrow keys will cycle the active operation through
the available choices.  Pressing <Enter> will execute the active operation.
Some operations are executed immediately, while others require additional
input before executing.  If additional input is required, ANARKED will
prompt you for it.  To exit the Action Menu, press <Esc>.

   Each Action Menu operation is explained below.

--- Save changes and quit
-------------------------
   This operation saves the current keystroke configuration to the output
file specified during startup.  Since ANARKED modifies the ANARKEY.COM disk
file, the new keystroke assignments will not take effect until the next time
ANARKEY is installed.

   After writing the output file, ANARKED terminates and you are returned to
the DOS command prompt.

--- Create summary list
-----------------------
   Executing this menu option will create a summary listing of ANARKEY
functions and their current keystroke assignments.  The listing may be saved
to a disk file or sent directly to a printer for use as a quick and handy
reference when first learning ANARKEY.  You will be prompted for the
summary's destination.

   To save the summary to a disk file, you may accept the displayed default
destination or enter a different file specification with optional drive and
path.  The default file spec will be the same as the output file you
specified at ANARKED startup, but with a ".SUM" extension.  For example, if
you specified the output file to be:

                        C:\BIN\ANARKEY.COM

then the default summary file will be:

                        C:\BIN\ANARKEY.SUM

   To accept the default, simply press <Enter> when prompted for the
destination.

   To send the summary information to a printer, enter "PRN" when prompted
for the destination.  The printer must be on-line and active BEFORE sending
anything to it.  Check and be sure this is the case before you attempt to
print or you may lose your current editing session.

   Pressing <F1> will abort the operation without creating a summary list.

   Tip: By defining an AKA that loads the summary file into your favorite
word processor or file-viewing program, an on-line help facility can be
created.  For example:

                    :help   editor c:\bin\anarkey.sum

--- Assign action key
---------------------
   The seven action keys (Up, Down, Left and Right arrow keys, <PgUp>,
<PgDn> and <Esc>) are used to execute special ANARKED operations.  To assign
one of these keys to an ANARKEY function requires going through this Action
Menu option.

   When this operation is chosen from the Action Menu, the next keystroke
will be directly assigned to the active keystroke field.  The keystroke will
not be interpreted by ANARKED.  Thus, pressing one of the action keys will
assign that key to the active field.  If the key was already assigned to a
function, ANARKED will beep to inform you it is removing the previous
assignment.

   Although this method is mainly used to assign one of the action keys, any
keystroke (except <F1>) will be assigned to the active keystroke field.

   Pressing <F1> will abort the operation without performing a keystroke
assignment.

--- Remove keystroke (<Ctrl-@>)
-------------------------------
   When this operation is chosen, the active keystroke field is cleared of
the keystroke currently assigned to it.

   This operation is equivalent to pressing <Ctrl-@> in a command/keystroke
window.  The Action Menu operation is provided in case you forget <Ctrl-@>
or if <Ctrl-@> is too difficult or not possible to enter.

--- Quit ANARKED without save
-----------------------------
   ANARKED will terminate immediately without saving your editing changes to
the output file.



                     All Keyboards are NOT Created Equal
                     -----------------------------------

   ANARKED will recognize as many keystrokes as your system's hardware and
firmware support.

   Some systems have enhanced keyboards containing <F11> and <F12> keys.
Unfortunately, the system BIOS on many of these machines will not recognize
the extra keys.  If the BIOS will not recognize a key then ANARKED will not
recognize it either.

   If your keyboard has <F11> and <F12> keys and ANARKED does not recognize
them, please do not assume there is a problem with ANARKED.  More likely the
fault lies with your machine's BIOS.

   Also, because ANARKEY must work in conjunction with so many other
programs, it must be extremely well-behaved.  This means it must get its
keyboard input from a level far-removed from your system's hardware.  Other
programs that do not need to be so well-behaved may be able to access
hardware directly.  Thus, these programs may be able to recognize certain
keystrokes, such as <F11>, that ANARKED cannot.  Again, the problem is not
due to some lack in ANARKED, but rather to the circumstances in which it
must operate.

   Please do not deluge me with bug reports about how ANARKED does not
recognize certain keystrokes.  If you truly happen to come upon a common
keystroke, for example, <Alt-F1>, that ANARKED does not accept, I would like
to know.  But if you're pressing your <F11> and <F12> keys and nothing is
happening, the problem lies elsewhere.



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning ANARKED and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## ANARKEY.DOC

{% raw %}
```








                                    ANARKEY
                                  User Manual


                                  Version 3.00





                   Anarchy : a state of being without rulers

                   Anarkey : a state of being without keystrokes














                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                            Copyright (C) 1988, 1989
                                by Steven Calwas
                               All rights reserved











                                Introduction
                                ------------

   ANARKEY is a command-line editor that will significantly reduce the
number of keystrokes you make when entering DOS commands.  Among its many
capabilities, ANARKEY supports:

        o  Command-line editing features comparable to those found in
           expensive word processors

        o  Storage and retrieval of past command lines

        o  Two methods of command line retrieval:
                1) sequential access
                2) character matching where you enter a portion of the
                line and have ANARKEY search through the buffer for a
                matching completion

        o  A text substitution capability called an AKA (often referred to
           as an "alias" or "synonym" in other command-line editors).  A
           utility program is included in the ANARKEY package that will
           convert the alias and synonym definitions of other editors to the
           equivalent ANARKEY format.  AKAs may even be executed from a
           batch file.

        o  Multiple commands per line (even from a batch file)

        o  A 255-character command line

        o  File name completion, including directory and program names

        o  Environment variable editing

        o  Configurable keystroke assignments

        o  Storing ANARKEY in expanded memory

        o  A Mega-Completion-Key that analyzes the input line, determines
           the type of completion operation you are attempting and does it
           for you automatically

        o  Writing the command-line history buffer to a disk file

        o  Loading the history buffer and AKA definitions from disk files at
           any time

        o  Comprehensive UNIX switchar conventions

        o  Invoking ANARKEY functions from a batch file

        o  And much more!


   ANARKEY is written 100% in assembly language for maximum efficiency in
memory usage and execution speed.  When installed with the default 500-
character history buffer, ANARKEY requires less than 9500 bytes of memory.
A smaller buffer may be used, reducing memory usage even further.  If
expanded memory is used, ANARKEY requires only 992 bytes of conventional
memory.

   ANARKEY is distributed as shareware.  Each user is given the opportunity
to evaluate the complete ANARKEY software package for 30 days with no
obligation.  If, after the evaluation period, you find ANARKEY to be a
useful tool, you must register your copy with the author, Steven Calwas.

   ANARKEY is distributed in two forms: a registered version and an
unregistered version.  The unregistered version is a fully-functional
program that contains all the features found in the registered version.
However, the unregistered version requires the user to go through an
installation procedure whenever ANARKEY is executed.  The installation
procedure requires the user to enter a random 8-digit number before ANARKEY
will install.  The registered version does not have this installation
procedure.

   ANARKEY registration is only $25, plus $3.00 shipping and handling.  A
copy of the registered version will be sent to all registered users upon
receipt of their paid registration form.  Registration also entitles a
person to technical support and future releases at a minimal price.
Considering the large number of times you will be using ANARKEY during each
computer session, this is an outstanding value.

   An ANARKEY registration form is included in the distribution package in
the file ORDERFRM.  Please take the time to fill it out and return it.  If
you would like high-quality software to continue to be made available on a
try-first basis and for a reasonable cost, it is up to YOU to support such
programs.  Please do.



                            A Quick Introduction
                            --------------------

   This section will outline some of the powerful capabilities ANARKEY
provides.  It should give you an idea of whether or not you wish to examine
ANARKEY in more depth.  All of the functions presented here are discussed in
detail in subsequent sections of the manual.

   ANARKEY is shipped in a default configuration, however, a very large
number of its characteristics are configurable to your specifications.  Some
of the configurable characteristics are:

        o  ANARKEY keystrokes may be reconfigured by using ANARKED, the
           ANARKEY Keystroke Editor.

        o  Command-line history buffer can hold from 255 to 50,000
           characters.

        o  The length of the shortest line to store in the history buffer
           can be set.

        o  Powerup input mode can be set to either insert or overwrite.

        o  Cursor shape in each input mode can be set.  (The cursor shape
           can also remain unchanged if you so desire.)

        o  Switch character conventions common to the UNIX operating system
           (i.e. directories separated by a slash, '/', and options preceded
           by a dash, '-') may be used.  This feature works for "internal"
           DOS commands, such as COPY and DIR, as well as "external"
           commands, like XCOPY and LINK.


   In addition to a high degree of malleability, ANARKEY brings to the DOS
command line many of the editing features available in expensive word
processors.  For example, the cursor may be positioned anywhere on the
command line without destructively backspacing through characters.  Also,
individual characters or entire words may be easily inserted or deleted
anywhere on the line.

   Each command line you enter is stored by ANARKEY in a "history buffer."
These stored lines may be retrieved whenever you wish to execute them again.
The retrieved line may be edited before being executed or may be sent for
immediate execution upon retrieval.  Never again will you retype a command
line.

   ANARKEY provides two methods of line retrieval.  The Up and Down
Arrow keys can be used to cycle sequentially through the history buffer and
retrieve one line at a time.  When you get to the line you want, you may
then edit and execute it.

   The second and more powerful retrieval method accepts one or more
characters of the desired line and then searches through the history buffer
until it finds a line starting with the same character(s).  The matching
line is then entered on the command line.  If the retrieved line is not the
desired line, the search may be continued and the next matching line
retrieved.  This method of line completion is extremely powerful, especially
when the desired line is buried deep in the history buffer.  Once you learn
how to use this capability, you'll wonder how you ever lived without it!

   ANARKEY also supports the entering of multiple commands on a single input
line.  This can be used to group a sequence of related commands together on
one line.  For example, say you want to edit a letter and then print it.
Using DOS, this may require two lines: one to execute the word processor and
another to print the text file.  With ANARKEY, both commands can be placed
on the same line.

   To make it easy to fit more than one command on the line, ANARKEY will
accept input lines consisting of up to 255 characters.

   ANARKEY provides a feature called an AKA (pronounced A-K-A) that allows
you to assign a single word to represent a long string of commands.  Later,
when you enter the single word on the command line, ANARKEY will replace it
with the long line and execute it.  For example, you may associate the
letter "D" to represent the string "DIR."  Afterward, simply entering the
single character "D" on the command line will cause ANARKEY to execute the
associated string ("DIR").

   An AKA may consist of multiple commands.  Thus, by using an AKA, a single
character can execute several complicated commands.  In this respect, an AKA
is much like a DOS batch file.

   And, like a batch file, an AKA may contain parameters.  AKA parameters
are specified by using the DOS batch conventions %1 through %9.  As an
example, you may define the AKA "T" to represent the string "TYPE %1."
Subsequently, the command "T ANARKEY.DOC" will be expanded to "TYPE
ANARKEY.DOC."  The advantage provided by an AKA over a batch file is that
the AKA will execute much more quickly than the equivalent batch file.

   An AKA may be defined on the command line or read in from a disk file.
If you are already using a command-line editor that supports aliases or
synonyms, the CONVERT program is provided in the ANARKEY package to
translate your aliases and synonyms into an equivalent AKA format.

   ANARKEY will also complete the names of files, programs and directories
for you.  Simply type in zero(!) or more characters and ANARKEY will cycle
through all of the existing files with matching characters.  This may seem
like a minor convenience, but, once you become used to it, you'll never
want to go back to entering an entire file specification again.

   How often have you needed to add one more directory to your PATH
environment variable?  Doing so in plain vanilla DOS is a pain because you
have to retype the entire PATH sequence.  Not so with ANARKEY.  ANARKEY will
retrieve the current PATH setting and enter it on the command line for you.
From there you may edit the line as you wish.  This feature is not
restricted to the PATH variable either; ANARKEY will retrieve ANY
environment variable and allow you to modify it.  You can even type in only
the first zero(!) or more characters of the environment variable's name and
ANARKEY will cycle through all the matching variables.

   Since ANARKEY provides so many completion-type operations, for example,
line completion from the history buffer, directory, program and file name
completion and environment variable completion, it may be difficult for new
users to remember each of the keys assigned to perform all these operations.
It is also an inconvenience to always have to specify exactly what it is you
want to do.  Wouldn't life be easier if all you had to do was hit one key
and ANARKEY "knew" exactly what you wanted to do and went ahead and did it?
Well, it does!

   A Mega-Key is provided that analyzes the input line and determines what
operation you most likely want and does it.  Automatically.  The Mega-Key
will complete environment variables, disk file names and lines retrieved
from the history buffer.  It combines the operations of four separate
functions into a single key.  The Mega-Key is one giant step toward a state
of pure Anarkey, a state with no keystrokes.

   All of these features and much more are included in ANARKEY.  If you
would like to learn how to use these capabilities and relieve yourself of
the drudgery of entering DOS commands then read on.



                           The Spirit of ANARKEY
                           ---------------------

   While walking down a city sidewalk several years ago, I noticed a crowd
of people gathering around the corner about a block ahead of me.  Normally,
I try to avoid crowds at all costs, but this one was directly in my path and
seemed peaceful, so I decided to continue ahead and see what the attraction
was.

   Arriving closer, music could be heard coming from within the crowd.
There, in its center, stood a street-corner musician, a lone saxophone
player.  The musician blew a sweet and gentle song on his horn, a song I had
never heard before, but which I instantly recognized.

   As I stood listening to this music, the atmosphere around me seemed to
change.  The typical rush of the city street was calmed by each note.  Sharp
edges were smoothed.  I felt as though I had been transported to a spring
forest, light greens and blues all around.  I stood on the edge of a clear,
flat pond where each long, cool note from the saxophone floated on the
glassy surface.  The world became relaxed, friendly and a bit melancholy.
Each note was so palpable, I could hold it in my open palm.

   External noises entered.  The rhythmic breeze of passing cars, the
syncopated percussion of conversation, all joined in to create a sweet, sad
symphony.  A blanket had been placed over the area and we all existed
beneath its protective cover.  The song floated on and the blanket slowly
descended, enveloping each person, every object.

   Eventually, the saxophone sounds ebbed and drifted off, slowly
evaporating.  For an elongated second, the crowd basked in the remaining
wisps of sound.  Then polite applause.

   Afterward, the musician stood beside his open music case, graciously
accepting the offerings of the appreciative crowd.  I remember thinking,
"What a wonderful way to live.  Making your way in the world playing such
sweet music.  That's the way I want to spend my life."  I began saxophone
lessons shortly afterward.

   Unfortunately, talent does not always come in the same amount as desire.
Sustained attempts to woo the elusive songbird proved fruitless.  The tears
that would well up in my listener's eyes were not the product of a song's
passionate beauty, but rather of its painful rendition and total
destruction.  The local dogs would howl in protest whenever I blew.  In
rapid succession, half the homes in my neighborhood went up for sale.  The
signs eventually became too numerous to ignore.  The frequency of my
practice sessions declined in reverse proportion to my realization that I
was a musical wretch.

   As a result, I began to spend more time in front of a computer writing
programs, a different kind of song, and an area in which I displayed at
least a modicum of ability.  With passing time, the dream of playing sweet
music on a street corner faded.  But I never forgot that street musician.

   And so, it is in the spirit of a street-corner musician that I dedicate
ANARKEY.  I call software created in this spirit "Frustrated-Musicianware."
I hope you find ANARKEY to be as sweet a song as I wish I could play on a
saxophone.  If so, won't you please take the time to register it?

   Like a street-corner musician, I stand beside my open computer case,
graciously accepting your appreciative gestures.

   Please send your registration form, suggestions and comments to:

                               Steven Calwas
                              Moderne Software
                               P.O. Box 3638
                         Santa Clara, CA 95055-3638



                              Getting Started
                              ---------------

   ANARKEY is ready to run "right out of the box."  Simply enter its program
name on the DOS command line and ANARKEY will install itself.  ANARKEY may
also be installed by running it from a batch file, such as AUTOEXEC.BAT.

   ANARKEY is a TSR (Terminate-and-Stay-Resident) program.  When executed
from the command line or from a batch file, it will install itself into your
system and then return control to the DOS command prompt.  When you are
returned to the command prompt, all of the ANARKEY features will be
available.

   If you have not registered ANARKEY, a message will appear during the
installation process that will describe how you can register the program and
receive an official registered copy of the ANARKEY software package.  You
will also be asked to enter a random 8-digit number.  ANARKEY will not
install until you correctly enter this number.

   Registered users receive a copy of ANARKEY that does not require this
installation procedure.  Unregistered users can receive a registered version
by sending in their paid registration form.  You can find a registration
form in the file ORDERFRM, included in the ANARKEY distribution package.  A
registered copy of ANARKEY, without the installation procedure, will be sent
to you immediately.

Note:
   If you are running ANARKEY for the first time and a message appears
stating the program is already installed, refer to the section "Installation
Options -- ANARKEY Process Number" for instructions on installing ANARKEY on
your machine.

   Many of ANARKEY's features may be configured by specifying program
options at installation time.  The supported options are described in the
"Installation Options" section later in this manual.
 
   After installation, ANARKEY handles all input requests for the following
situations:

        --the DOS command line
        --redirected input
        --DEBUG, SYMDEB, EDLIN and several third-party programs

   Notice that commands executed from a batch file are NOT processed by
ANARKEY.

   Many powerful features are available once ANARKEY is installed.  They are
all described in the remainder of this manual.



                             Manual Organization
                             -------------------

   The supported ANARKEY functions and related topics are grouped into the
following categories:

        --Line Editing Functions
        --History Buffer Functions
        --AKA Functions
        --Name Completion Functions
        --Entering Multiple Commands per Line
        --Editing Environment Variables
        --The Mega-Key, All-in-One Completion Function
        --Installation Options
        --ANARKEY Internals
        --Special Considerations
        --Future Directions
        --The Spirit of ANARKEY

   All of the supported functions are explained in detail within one of
these categories.  In addition, a brief summary of all ANARKEY functions is
outlined in the file ANARKEY.SUM.  You may find it helpful to keep a listing
of ANARKEY.SUM alongside your keyboard while you are learning the ANARKEY
commands.

   Each documented ANARKEY function consists of two parts: a "function name"
and a "keystroke invocation."  The function name is simply a descriptive tag
assigned to a function, just as a person's name is a kind of tag.  The
keystroke invocation is the keystroke or keystrokes entered by the user
which cause the function to be executed.

   The function definitions documented in this manual use the following
format:

   <Keystroke Invocation>  -- Function Name

   The keystroke invocation is always contained within < > symbols.  The < >
symbols are not part of the keystroke invocation and should not be entered
as such.  Examples of some of the ANARKEY function definitions are:

   <Home>             -- Cursor to Start of Line

   <F5>               -- Find History Buffer Match and Edit
   <Ctrl-K>

   In the first example, the keystroke invocation for the Cursor-to-Start-
of-Line function is the <Home> key.  In other words, pressing the <Home> key
will instruct ANARKEY to perform the Cursor-to-Start-of-Line function.

   Some functions have two possible keystroke invocations, as in the second
example above.  Entering either of the keystroke invocations will cause
ANARKEY to perform the indicated function.  The example above shows that the
Find-History-Buffer-Match-and-Edit function may be executed by pressing
either the <F5> or <Ctrl-K> keys.  Which invocation you decide to use
depends upon which keystroke you are most comfortable making.

   Keystroke invocations are not case-sensitive.  Thus, the keystrokes
<Ctrl-K> and <Ctrl-k> are equivalent.

   Note: All keystroke invocations can be modified by ANARKED, the ANARKEY
Keystroke Editor.  For instructions, refer to the "ANARKED User Manual."

 

                           Line Editing Functions
                           ----------------------

   ANARKEY provides line editing functions commonly found in word processing
programs.  These functions include cursor movement, character deletion,
character retrieval and some general purpose features.

   <Enter>            -- Send Line to Command Processor
        The input line is passed to ANARKEY for "acceptance."  The cursor
        need not be at the end of the line for the whole line to be
        accepted; the entire command line is always accepted, regardless of
        the cursor position.

        The acceptance process includes "breaking" the line into separate
        commands, checking that each command's length is within the
        allowable range, and sending the commands individually to the
        command processor.  (This process is discussed in depth in the
        "Entering Multiple Commands per Line" section.)

   <Ins>              -- Toggle Insert/Overwrite Mode
        ANARKEY supports two modes of text input: insert mode and overwrite
        mode.  When editing in insert mode, characters entered will be
        "inserted" into the current input line; any characters to the right
        of the inserted character are shifted over to make room.  Characters
        entered in overwrite mode will "write over" the character under the
        current cursor position; no shifting of characters occurs as in
        insert mode.

        The <Ins> key toggles the two input modes.  By default, once the
        mode has been set, ANARKEY remains in that mode until the <Ins> key
        is pressed again.  (The input mode can be forced to a particular
        setting at the start of each new input line by using the 'F'
        modifier to the -I installation option.  Refer to the section
        "Installation Options, Input Mode on Powerup" for further details.)

        The default input mode upon program powerup is insert mode.  If you
        prefer ANARKEY to default to overwrite mode on powerup, use the -I
        option (explained in "Installation Options, Input Mode on Powerup").

        ANARKEY indicates the current input mode by setting the cursor
        shape.  An underscore cursor is used in the powerup mode; the
        alternate mode uses a block cursor.  The following table illustrates
        the cursor shapes used depending upon the powerup mode.

        Powerup mode = Insert (default and -II option)
                Insert mode cursor    = underscore
                Overwrite mode cursor = block

        Powerup mode = Overwrite (-IO option)
                Insert mode cursor    = block
                Overwrite mode cursor = underscore

        Cursor shape changes can be repressed by including the -C option on
        the installation command line (see "Installation Options, Cursor
        Shape Remains Unchanged").

   <Ctrl-U>           -- Accept Next Keystroke Unmodified
        Enter the next keystroke into the input line, bypassing any ANARKEY
        function interpretation.

        Occasionally, you may wish to enter a keystroke on the input line
        that would normally be interpreted by ANARKEY as a keystroke
        invocation.  For example, say you wanted to send a formfeed
        character to your printer.  One way to accomplish this might be to
        enter a formfeed on the command line and then redirect the line to
        the printer.  The formfeed character is <Ctrl-L>.  However, <Ctrl-L>
        is normally interpreted by ANARKEY as an invocation of the Find-
        History-Match-and-Execute function.  To prevent ANARKEY from
        interpreting the <Ctrl-L> as a keystroke invocation, precede it with
        a <Ctrl-U>.  Thus, the two keystroke sequence <Ctrl-U> <Ctrl-L> will
        enter a <Ctrl-L> character on the input line.

        This function may also be used to enter ANSI escape sequences on the
        input line.  Simply precede the <Esc> key with a <Ctrl-U> keystroke.
        Being able to enter an <Esc> character on the input line will allow
        you to create AKAs that assign string constants to the function
        keys, define an elaborate command-line prompt, and set the screen
        colors.  Refer to the ANSI.SYS documentation that came with your
        operating system or one of the public domain or shareware ANSI
        device drivers for details on doing this.

   Cursor movement functions allow the cursor to be positioned anywhere on
the input line.  Once the cursor has been placed in its desired position,
further line modification operations, such as deleting or adding characters,
may be performed.  The cursor movement functions provided by ANARKEY are
discussed below.

   <Home>             -- Cursor to Start of Line
        Position the cursor under the first character in the input line.

   <End>              -- Cursor to End of Line
        Position the cursor after the last character in the input line.

   <Right Arrow>      -- Cursor Right One Character
        Move the cursor one character to the right.

   <Ctrl-Right Arrow> -- Cursor Right One Word
        Position the cursor under the start of the next word.

   <Left Arrow>       -- Cursor Left One Character
        Move the cursor one character to the left.

   <Ctrl-Left Arrow>  -- Cursor Left One Word
        Position the cursor under the start of the previous word.

   Also provided are functions to delete individual or groups of characters
from the input line.

   <Backspace>        -- Delete Character Left
        Move the cursor left one character and delete the character.  If the
        current input mode is insert mode, any characters from the current
        cursor position to the end of the line are shifted one character to
        the left.  If the input mode is overwrite mode, no shift occurs.

   <Del>              -- Delete Current Character
        Delete the character at the current cursor position.  All characters
        from the cursor position to the end of the line are shifted one
        character to the left, regardless of the current input mode.

   <Ctrl-T>           -- Delete Word Right
        Delete all characters from the current cursor position until the
        start of the next word.  All characters from the cursor position to
        the end of the line are shifted to fill the space emptied by the
        deleted word, regardless of the current input mode.

   <Ctrl-End>         -- Delete to End of Line
   <Ctrl-Y>
        Delete all characters from the current cursor position to the end of
        the line.

   <Esc>              -- Delete Line
        Clear the entire input line.  Position the cursor at the "home"
        position.

        The CBL (current buffer line) pointer is moved to the end of the
        history buffer.  The CBL is discussed in detail in "History Buffer
        Functions."

   ANARKEY also supports two functions which are provided in the primitive
DOS list of editing functions: the retrieval of single characters from the
previous input line or the remainder of the previous line.

   <F1>               -- Retrieve Character From Previous Input Line
        This function is identical to the DOS function associated with this
        key.

        A character is retrieved from the previous input line and entered
        into the current line.  The character retrieved is from the same
        relative location as the current cursor position.  The cursor
        position is advanced to the next character location.

        For example, if the cursor is at the third-character position in the
        line when the <F1> key is hit, the third character from the previous
        input line will be recalled and entered into the current line.
        
   <F3>               -- Retrieve Remainder of Previous Line and Edit
        This function is identical to the DOS function associated with this
        key.

        The remainder of the previous input line is retrieved and entered
        into the current line.  The beginning of the retrieved portion is
        from the same relative location as the current cursor position.  The
        cursor is positioned at the end of the current line.  Editing may be
        performed on the line.

   <Alt-F3>           -- Retrieve Remainder of Previous Line and Execute
        This function is the same as the Retrieve-Remainder-...-and-Edit
        function (<F3>) except that the line is immediately sent to the
        command processor for execution.  The user is given no opportunity
        to edit the line.

   Once you break the habit of leaning on the BackSpace key to correct any
typing errors and begin to use the ANARKEY editing functions to their
fullest, the blisters on your fingertips will clear up.  And your keyboard
will thank you.



                          History Buffer Functions
                          ------------------------

Introduction
------------

   The history buffer functions provide ANARKEY with the very powerful
ability to quickly retrieve any previously-entered input line for either
editing or immediate execution.

   Many work sequences done on a computer are repetitive.  For example, a
programmer will edit a source file, compile it, link it and then execute it
checking for any bugs.  If any problems are discovered, the whole cycle
begins again.  Being able to quickly retrieve the commands entered during
the first pass through this cycle relieves the user of much annoying
busywork.


The History Buffer
------------------

   ANARKEY stores all non-empty input lines in a "history buffer."  Lines
consisting of multiple commands are placed in the buffer as a single intact
line.  When ANARKEY is initially installed, the history buffer is empty.
The first input line entered by the user is stored by ANARKEY at the very
top of the history buffer.  Subsequent input lines are stored, one after
another, toward the bottom of the buffer.  This concept is depicted in the
following diagram which shows a history buffer completely filled with lines:

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem This is line one     |
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   Notice in the above diagram that there is an empty line at the bottom of
the buffer, even though the buffer is considered full.  ANARKEY always
reserves an empty line at the bottom of the buffer which it uses as a marker
to signify the end of the buffer.  This end-of-buffer, empty-line marker is
also useful to the user, as will become clear in the discussion on line
retrieval.

   The contents of the history buffer may be viewed at any time.

   <F4>               -- Display History Buffer Contents
        The input lines stored in the history buffer are displayed onscreen.
        Lines are displayed beginning at the top of the buffer and advancing
        to the end.

        When an entire screen of lines has been displayed, output will
        pause.  Pressing any key will cause the next screenful of lines to
        be displayed.  ANARKEY supports screens consisting of ANY number of
        lines and columns per screen, including 25, 43 and 50 lines.

   <Ctrl-F4>          -- Display History Buffer from Bottom
        This function is the same as Display-History-Buffer-Contents except
        the buffer is displayed from the bottom to the top.

   Storing a new input line into a full history buffer is similar to how a
display screen handles the entering of an additional line.  When a screen is
full, room is made at the bottom of the screen by scrolling the other lines
up.  The line which used to be at the top of the screen disappears.  The
same operation occurs when storing an input line into a full history buffer.
The line stored at the top of the buffer is permanently removed, all
remaining lines are shifted up and the new input line is entered at the
bottom of the buffer.  The effects of storing an additional line in a full
history buffer are shown below:

                   rem This is line one       <--- Removed from buffer

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 | rem New last line        |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   The number of input lines which can be stored in the history buffer
depends upon the length of the lines and the size of the buffer.  By
default, the history buffer will hold 500 characters, but this may be
configured during installation from 255 to 50,000 characters.  (Details are
contained in the "Installation Options, History Buffer Size" section.)


The Current Buffer Line or CBL
------------------------------

   ANARKEY maintains a location marker which always "points" to the
beginning of one of the lines stored in the buffer.  The line at which this
marker points is referred to as the "current buffer line" or CBL.  Everytime
a new DOS command prompt appears, the CBL is reset to the end of the history
buffer, which, as mentioned above, will always be an empty line.  Also,
invoking the Delete-Line function (<Esc> key) will move the CBL to the end
of the history buffer.

   The following diagram depicts a history buffer with the CBL set to the
end of the buffer:

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 | rem New last line        |
         CBL --->|                          |
                 ---------------------------- <--- Bottom of buffer


Moving History Buffer Lines
---------------------------

   During the course of entering command lines, many lines retrieved from
the history buffer will be executed without being edited.  If these
re-executed and unedited lines were stored in the buffer each time, the
buffer would soon be cluttered with many copies of identical lines.  Besides
creating an unnecessary mess, these duplicates would force other, less-often
executed, lines out of the buffer.

   ANARKEY eliminates this problem.  Any line retrieved from the history
buffer and "immediately accepted" is moved from its current location to the
end of the buffer.  The phrase "immediately accepted" means that no editing
is performed on the line and the cursor is not moved.  In other words, the
very next keystroke must accept the line (<Enter>).

   By moving buffer lines, ANARKEY guarantees that heavily-executed lines
will always be available for retrieval and the history buffer will not
become cluttered with duplicate lines.

   The moving of retrieved lines is the default operation that ANARKEY
performs.  However, situations may arise where a log of each command in
their exact order of execution is desired.  This can be achieved by
installing ANARKEY with the -F (full disclosure) option which represses the
moving of retrieved buffer lines.  Refer to the "Installation Options, Full
Disclosure" section for more information about this option.


History Buffer Line Retrieval
-----------------------------

   Moving the CBL pointer through the buffer is the method used to retrieve
stored input lines.  ANARKEY provides two methods of retrieving input lines
from the history buffer: "bidirectional sequential access" and "character
matching."


Sequential Access Retrieval
---------------------------

   With sequential access, the CBL is moved through the buffer one line at a
time.  Each time the CBL is moved, the new line it points at in the buffer
is retrieved and displayed on the current input line, replacing any line
that was previously displayed.  Sequential access is "bidirectional" because
the CBL pointer can be moved either up or down though the history buffer.

   When the CBL points at the end of the buffer, moving down will cause the
CBL to circle around to point at the first line stored at the top of the
buffer. Conversely, with the CBL at the top of the buffer, moving up will
circle the CBL back to the end.

   The following diagram shows the CBL moved up one line from its previous
location at the end of the buffer.  When the CBL was moved, the line it now
points at would have been retrieved and displayed onscreen.

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
         CBL --->| rem New last line        |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   Bidirectional sequential access is performed by invoking the following
ANARKEY functions:

   <Up Arrow>         -- Retrieve Previous History Buffer Line
        Move the CBL pointer up one line.  Retrieve the line and display it
        onscreen, replacing any previously displayed line.  Position the
        cursor at the end of the displayed line.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end.  (Installing ANARKEY with the -F option will repress
        this line movement.)

   <Down Arrow>       -- Retrieve Next History Buffer Line
        Move the CBL pointer down one line.  Retrieve the line and display
        it onscreen, replacing any previously displayed line.  Position the
        cursor at the end of the displayed line.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end.  (Line movement can be repressed by installing ANARKEY
        with the -F option.)


Character Matching Retrieval
----------------------------

   The "character matching" method of line retrieval is one of the most
powerful features available in ANARKEY.  With this method, a portion of a
past input line is entered and a search is made through the history buffer
for a line whose first characters match those just entered.  If a match is
found, the line is retrieved from the buffer and entered onto the input
line.

   Before performing the search operation, ANARKEY gathers together the
characters it will use for the comparison.  It collects the characters
beginning at the start of the line up until the cursor position.  The
character under the cursor (if there is one) is NOT included in the search.
The search begins in the history buffer at the CBL and continues up toward
the top of the buffer until either a match is found or the top of the buffer
is reached.  The comparison performed upon the collected input line
characters and the retrieved buffer lines is not case-sensitive.

   The exact operations executed during a search are:

        1) The CBL pointer is moved up one line.
        2) If moving the CBL pointer caused it to circle around to the
           bottom of the history buffer, beep to signal that the CBL pointer
           has traversed the entire buffer.  Also, clear the displayed input
           line from the cursor position to the end of the line.  The search
           operation is complete.
        3) If the CBL pointer has not circled around, the CBL is retrieved
           from the buffer, but is not displayed.
        4) The character(s) collected from the current input line are
           compared with the first character(s) in the retrieved line.
        5) If the character(s) match, the remainder of the retrieved line is
           displayed on the input line and the search operation is complete.
        6) If the character(s) do not match, return to instruction (1) above
           and repeat the cycle.

   If a matching line is found, but it is not the line you desire, the
search may be continued and subsequent matching lines retrieved.

   As explained in the list of search operations above, if a matching line
is found, it is entered onto the input line.  When this occurs, the cursor
position is not changed.  The reason for this is so that if the search is
continued, the same group of characters used in the original search, i.e.
those from the start of the line up until the cursor position, will be used
in the continuation.

   The character matching method of line retrieval is one of the most useful
and powerful features of ANARKEY.  Using it provides you with the ability to
enter only a single character and have ANARKEY complete the rest of the line
for you.  After you are acquainted with this method, entering an entire
input line yourself will become drudgery.

   To be certain everyone understands how to use the character matching
method, an extended example is provided below.  But first, the ANARKEY
functions that implement the character matching retrieval method are:

   <F5>               -- Find History Buffer Match and Edit
   <Ctrl-K>
        Perform a character matching line retrieval operation.  The
        remainder of the matching retrieved line is displayed on the input
        line, replacing any previously entered line.  The line may be edited
        before being accepted.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end, unless ANARKEY was installed with the -F option.

   <F6>               -- Find History Buffer Match and Execute
   <Ctrl-L>
        This function is the same as the Find-Match-and-Edit function except
        that the matching line is immediately sent to the command processor
        for execution; the user is given no opportunity to edit the line.

        Since the retrieved line is immediately executed, it is moved to the
        end of the history buffer.  (This movement is repressable by
        installing ANARKEY with the -F option.)

        If the top of the buffer is reached without finding a matching line,
        the current input line is not sent to the command processor; further
        editing of the line may be performed.  The CBL will be set to the
        end of the buffer.


An Extended Example
-------------------

   As an example of the character matching functions, assume we are sitting
at a new line prompt (therefore, the CBL pointer references the empty line
at the end of the history buffer) and the buffer contains the following
lines:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Say we wish to move to the "\work\janice\memos\text" directory and copy
all files with a .TXT extension to the A: drive.  Using the character
matching retrieval method, here is how we can do it.

   First, we have to move to the desired directory.  Since we have already
entered an input line similar to the one we now need (the CD line in the
buffer), let's retrieve and edit that line.  Enter the first character of
the line we want, as in:

                C>c_

   The underscore shows the current cursor position.  Then invoke the Find-
History-Buffer-Match-and-Edit function (<F5> or <Ctrl-K> key).  ANARKEY
searches from the CBL up toward the top of the buffer for an input line
whose first character is a 'C.'  It finds a matching line in the COPY
command.  Thus, it retrieves that line from the buffer and displays it on
the input line.  The current input line and history buffer are:

                C>copy *.txt a:
                   -

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
         CBL --->| copy *.txt a:              |
                 | dir a:                     |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   Notice that the cursor position on the input line has not changed (it is
still immediately after the 'C').  Also, notice the CBL has been set to the
retrieved buffer line.  Since this is not the line we want to execute,
continue the search by invoking the Find-Match-and-Edit function again (<F5>
or <Ctrl-K>).  This time ANARKEY finds a match with the desired CD command.
That line is retrieved from the buffer and replaces the previously retrieved
COPY command.  Now the input line and history buffer look like this:

                C>cd \work\jasper\memos\text
                   -

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   The input line can now be edited using the available line-editing
functions. There are several different combinations of these functions which
can be used to perform this operation.  One such combination is outlined
below.

   User keystrokes                  Current input line and cursor position
   ---------------                  --------------------------------------
                                    C>cd \work\jasper\memos\text
                                       -
   <Ctrl-Right Arrow>               C>cd \work\jasper\memos\text
                                          -
   <Ctrl-Right Arrow>               C>cd \work\jasper\memos\text
                                               -
   <Right Arrow> <Right Arrow>      C>cd \work\jasper\memos\text
                                                 -
   <Ctrl-T>                         C>cd \work\ja\memos\text
                                                 -
   nice                             C>cd \work\janice\memos\text
                                                     -

   Note: The last line in the example assumes the input mode is set to
"insert."

   The modified input line can now be accepted (<Enter> key) and executed.
Afterward, we will be in the \work\janice\memos\text directory and the
history buffer will look like this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Now we wish to copy all of the .TXT files to the A: drive.  Since a line
already exists in the history buffer to perform this operation, there is no
need for us to type it on the command line; we'll let ANARKEY do it for us.

   This time, we don't want to retrieve the CD command we just entered
before getting the desired COPY line, so we enter:

                C>co_

   And invoke the Find-History-Buffer-Match-and-Edit function (<F5> or
<Ctrl-K>).  ANARKEY uses the characters from the start of the input line up
until the cursor (but not including the character under the cursor) in its
search for a matching line.  In this case, ANARKEY uses the two characters
"co" to find a matching line.  Subsequently, it retrieves the desired "copy"
command.  Thus, when the search-and-retrieve operation is complete, the
input line and history buffer are:

                C>copy *.txt a:
                    -

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
         CBL --->| copy *.txt a:              |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   Since this is the exact command we wish to execute, no editing is
required prior to acceptance.  Following acceptance (<Enter>), the history
buffer will contain:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
                 | copy *.txt a:              |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Take a close look at the current history buffer.  Notice that the
retrieved line has not only been entered at the bottom of the buffer, but
that it has been "moved" from its previous location between the two "dir"
commands.  This occurred because the retrieved line was accepted unmodified.

   Now we want a list of all the files we've copied to the A: drive.  The
"dir a:" input line stored in the history buffer is exactly what we want.
Rather than type it ourselves, simply enter the single character 'D' so the
input line is:

                C>d_

   But this time invoke the Find-History-Buffer-Match-and-Execute function
(<F6> or <Ctrl-L>).  ANARKEY will retrieve the first matching line in the
buffer (which just happens to be the "dir a:" command we desire) and
immediately pass it to the command processor for execution.  This saves us
from entering the extra keystroke required (i.e. <Enter>) if we were to
accept the line ourselves.  Once again, since the retrieved line was
immediately executed, it is moved to the end of the history buffer.  Thus,
the history buffer at the end of our example would look this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | cd \work\janice\memos\text |
                 | copy *.txt a:              |
                 | dir a:                     |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   The Find-Match-and-Execute function is powerful, but potentially
dangerous.  In the above example, if a "del *.exe" command happened to be
stored in the history buffer between the "dir a:" command and the CBL, the
DEL command would have been retrieved and executed before anything could be
done about it.  This may cause irreparable damage.  To prevent this from
ever happening, you could always use the Find-Match-and-Edit function and
accept the line only after you've ascertained that the retrieved line is the
actual command(s) you wish to execute.  On the other hand, for users who
"know what they are doing," the Find-Match-and-Execute function provides the
ability to reduce keystrokes even further and really soar.


Retrieving a Group of Lines
---------------------------

   Often, a group of consecutive command lines need to be re-executed.  For
instance, a programmer may edit a source file, compile and link it, test the
resulting program for bugs, and then begin the cycle again to correct any
problems.  This cycle may result in a history buffer with the following
contents:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | edit file                  |
                 | compile file               |
                 | link file                  |
                 | file                       |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

  It would be nice to be able to move the CBL pointer to the top of this
cycle and then have a simple method for retrieving each of the succeeding
lines.  ANARKEY provides such a method.

   <PgDn>             -- Restore CBL
        As previously described, when a new command prompt appears, the CBL
        is initialized to point at the end of the history buffer.  In
        addition to this, the position of the CBL pointer at the time of
        line acceptance is also saved.  The CBL can be restored to this
        saved position by invoking the Restore-CBL function (<PgDn>).

        Given the above history buffer contents, assume the CBL was moved to
        the top line.  This can be done using either of the retrieval
        methods.  The situation would then be:

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| edit file                  |
                 | compile file               |
                 | link file                  |
                 | file                       |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

        If this line is then accepted (<Enter> key), several things would
        occur.  First, the retrieved line (assuming it was accepted
        unmodified) would be moved to the end of the buffer.  Second,
        because the line was moved, the CBL would be the line AFTER the
        retrieved line (i.e. the compile line).  Third, as part of the
        line-acceptance operation, the CBL position would be saved.
        Following this, the retrieved line would be executed.  When the
        command prompt was next displayed, the CBL would be moved to the end
        of the buffer (but the saved position would still be maintained).
        This final state is depicted in the following diagram:

                        History Buffer
                 ------------------------------ <--- Top of buffer
   saved CBL --->| compile file               |
                 | link file                  |
                 | file                       |
                 | edit file                  |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

        Now to retrieve the next line in the cycle, simply invoke the
        Restore-CBL function (<PgDn> key).  Doing so will move the CBL
        pointer from its position at the end of the buffer to the saved
        position.  The history buffer would now look like this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| compile file               |
                 | link file                  |
                 | file                       |
                 | edit file                  |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

        The CBL would be retrieved from the buffer and displayed on the
        input line.  Accepting the line (<Enter>) will repeat the process.
        All the lines in the cycle may be retrieved and executed this way.

        The Restore-CBL function will work even if the move-line operation
        is repressed (-F installation option) or the retrieved line is
        edited prior to acceptance.  ANARKEY is smart enough to know whether
        or not the retrieved line has been moved and acts accordingly.

        Restore-CBL can be executed once per command line.  Subsequent
        invocations will act as a Retrieve-Next-History-Buffer-Line function
        (<Down Arrow>).


Miscellaneous History Buffer Functions
--------------------------------------

   Additional functions allow you to write the contents of the buffer to a
disk file, remove lines from the buffer and clear the buffer.

   <Ctrl-W>           -- Write History Buffer to Disk
        The history buffer contents are written to the ANARKEY.LOG disk
        file.  The file is located in the root directory of the current
        drive.  If the file cannot be written because the disk is full,
        ANARKEY will beep.

        ANARKEY.LOG is a standard ASCII text file which may be edited using
        most editors and word processors.  It may be reloaded into the
        history buffer by LOAD, the ANARKEY Loader.  Refer to the "LOAD User
        Manual" for instructions on using LOAD.

   <Ctrl-Z>           -- Remove CBL from Buffer
        If the CBL pointer is pointing at a non-empty line, i.e. the CBL
        pointer is not at the end of the history buffer, the line pointed at
        by the CBL pointer is removed from the buffer.  All lines stored
        after it in the buffer are shifted up.  The result of this shift is
        that the CBL pointer will then point at the line stored after the
        removed line.  This operation is depicted in the following two
        diagrams.  The first diagram shows the history buffer and CBL
        pointer before removing the CBL.

                             History Buffer
                      | rem Line before removed line |
              CBL --->| rem We'll remove this line   |
                      | rem Line after removed line  |

        Here are the contents of the buffer and the position of the CBL
        pointer after removing the CBL:

                             History Buffer
                      | rem Line before removed line |
              CBL --->| rem Line after removed line  |
                      |                              |

        After the CBL has been removed and the buffer lines shifted, the new
        CBL is displayed on the input line, replacing the previously
        displayed line.  The removal function may be repeated several times
        to delete a group of consecutive lines from the buffer.  If the last
        non-empty line in the history buffer is removed, the CBL pointer
        will be at the end of the buffer and an empty line will be displayed
        on the input line.

   <Ctrl-X>           -- Clear History Buffer
        Invoking this function will clear all lines from the history buffer.

        Obviously, this function is potentially dangerous, so beware.  If
        you are afraid of accidentally invoking this function, use ANARKED,
        the ANARKEY Keystroke Editor, to reassign its keystroke invocation
        to something you are less likely to enter or remove its keystroke
        invocation entirely, thereby making it impossible to execute.
        ANARKED operation is explained in the "ANARKED User Manual."

   The history buffer functions, and, in particular, the character matching
functions, give ANARKEY its main source of strength.  Take the time to
become familiar and comfortable with them and chances are you will never
want to use your computer without them.



                               AKA Functions
                               -------------

   Some commands are executed with great regularity.  The history buffer
retrieval functions are extremely useful in reducing the number of times you
actually have to type in such lines.  However, ANARKEY provides yet another
powerful feature called AKAs to ease the strain on your fingertips.


Simple Text Substitution
------------------------

   An AKA (pronounced A-K-A) provides a text substitution capability to
ANARKEY.  AKAs are analogous to aliases and synonyms found in other
command-line editors.  AKA is an acronym for either "Also-Known-As" or
"AnarKey Alias."  Once again, ANARKEY offers you a choice.

   By default, AKAs are not an integral part of ANARKEY; they must be
enabled at installation time by the -A option (Allocate Space for AKA
Definitions).  If AKAs are not enabled, none of the AKA-processing code
remains resident.  This is an obvious advantage to users who do not use
AKAs; they do not have to pay a memory penalty for a feature they will never
exercise.

   Refer to the section "Installation Options, Allocate Space for AKA
Definitions" for information on enabling the AKA features.  The remainder of
this section will describe how to use AKAs once they are enabled.

   An AKA is made up of two parts: an AKA word and a substitution string.
When the word is entered on the input line as a command, ANARKEY will
replace the AKA word with its substitution string.  AKA words are not case
sensitive.  As an example, an AKA could be:

                        dos     cd \dos
                        ---     -------
                         |         |
            AKA word <----         ----> Substitution string

   If this was a "defined" AKA, meaning ANARKEY knew about it, then every
time "dos" was entered as a command on an input line, ANARKEY would replace
it with "cd \dos."

                C>dos           <---ANARKEY will replace with "cd \dos"

   This replacement is performed after the line is accepted (<Enter>), but
before it is passed to the command processor for execution.  Because the
replacement string is never displayed onscreen, the substitution operation
is transparent to the user.  For example, the above AKA may result in the
following screen display:

                        >cd
                        C:\EDITOR\BACKUP

                        >dos            <---replaced with "cd \dos"

                        >cd
                        C:\DOS

   It is important to understand that the AKA word must be a "command" on
the input line.  In other words, it must be the first word in the "command
line."  (Because ANARKEY supports multiple commands per line, it must
differentiate between "command line" and "input line."  There may be more
than one "command line" in the "input line."  Multiple commands per line are
discussed in detail later in this manual.)

   Again, given the above AKA, the following input line would not replace
"dos" with its substitution string:

                        >echo dos

   In the example, "echo" is the command and "dos" is a "parameter" or
"argument" to the command.  Since "dos" is not a command on this line, it
will not get replaced with its substitution string.


Viewing AKAs
------------

   The list of defined AKAs may be viewed at any time by invoking the View-
AKAs function.

   <Alt-F4>           -- View AKAs
        All defined AKAs are displayed onscreen.  After a screen's worth of
        AKAs have been displayed, output will pause.  Pressing any key will
        display another screen of AKA definitions.

        At the end of the AKA list, ANARKEY will display the remaining space
        available to store further AKA definitions.

        When AKAs are not enabled (i.e. no space allocated for AKA
        definitions via -A installation option), this keystroke invocation
        has no effect.


Defining an AKA
---------------

   An AKA must be "defined" before it can be used.  ANARKEY provides two
methods to define AKAs.  The definition may be entered on the input line or
it can be read from a disk file using LOAD, the ANARKEY Loader.  The
definition syntax is identical for both methods.  This section will present
examples of definitions as if they were entered on the command line.  Refer
to the "LOAD User Manual" for instructions on how to read AKA definitions
from a disk file.

   When defining an AKA, the very first character in the command must be a
colon.  The characters following the colon, up until the first space or
<Tab> character comprise the AKA word.  All remaining characters on the line
make up the substitution string.

   Example AKA definitions are:

        >:d             dir
        >:dos           cd \dos
        >:help          type anarkey.sum
        >:format        echo You do not have access to this command!

   AKA words and substitution strings can be of any length as long as their
total length does not exceed 255 characters.  In other words, the AKA
definition must fit on the input line.

   Any character may be used in an AKA word except a space or <Tab>
character, since these characters indicate the end of the AKA name.  All
other characters, including control and graphic characters, are valid in an
AKA name.

   The amount of space allocated to store AKA definitions is specified at
ANARKEY installation time (-A option).  (This option also enables AKAs and
keeps the AKA-processing code resident.)  If there is not enough space left
to store a definition, ANARKEY will beep.  When this occurs, there are
several roads you may choose.  One choice would be to make room in the AKA
"buffer" by undefining one or more AKAs (undefining AKAs is explained
below).  Another method is to retrieve the AKA definition from the history
buffer and edit it so that it will fit in the remaining AKA space (i.e. make
it shorter). If none of these routes is feasible, you can reboot your
system, but this time allocate more space for AKA definitions.

   AKA substitution strings may contain multiple commands.  Multiple
commands per line are discussed in detail a little later, but, basically,
each command must be separated by a semi-colon (;).  Some example AKA
definitions consisting of multiple commands are:

        >:edit          cd\wordproc ; editor ; cd\homedir
        >:editaka       editor anarkey.aka;load anarkey.aka

   In the first example, if you were to enter the command "edit," ANARKEY
would replace it with the substitution string which would execute the three
commands comprising it.

   If an AKA definition is made that contains an AKA word already being
used, the new definition will replace the existing one.  For example, given
the following AKA definitions, the second definition will replace the first:

        >:d             dir *.*
        >:d             del *.com

   AKAs may not be nested.  In other words, a substitution string may not
contain another AKA word.  The following example shows an invalid AKA
definition:

        >:r             rem
        >:ignore        r

   In the above example, "r" is first defined as an AKA word whose
substitution string is "rem."  "R" is also specified as the replacement
string for "ignore."  If "ignore" was entered as a command, ANARKEY would
replace it with its substitution string "r."  It would not continue and
replace "r" with "rem."

   When defining an AKA, ANARKEY performs a length check on each command in
the substitution string.  If any command is longer than 127 characters,
ANARKEY will refuse to accept the definition.  It will beep and place the
cursor under the first character beyond the 127-character limit.  Further
editing of the command will be required before the definition can be
accepted.

   A length check is always performed following input line acceptance
(<Enter> key).  Length checks may optionally occur by invoking the Check-
Line-Lengths function (<F2>), documented in the "Multiple Commands Per Line"
section.


Undefining an AKA
-----------------

   A single AKA may be undefined by entering a colon as the first character
in the command followed by the name of the AKA.  Do not specify a
substitution string.  When the line is accepted, the AKA will be undefined.
For example, the following commands undefine AKAs:

        >:edit
        >:d

   ANARKEY also provides a way to undefine all existing AKAs in a single
swoop.

   <Alt-X>            -- Undefine All AKAs
        Undefine all existing AKAs.  All the allocated AKA space is freed
        for new AKA definitions.


Parameter Fields
----------------

   ANARKEY AKAs support more than just simple text substitution.
Substitution strings may contain "parameter" fields.  These fields are
similar to the parameter fields in a DOS batch file.  They are specified by
a leading percent sign (%) and followed by a single-digit number from 1 to
9, as in %1, %5 and %9.  (%0 is not supported.)

   When specified in an AKA substitution string, parameters fields are
replaced with the corresponding argument from the command line.  For
example, %1 is replaced with the first argument to the AKA, %2 with the
second, and so on, up through %9.

        >:example       echo %1 %2 %3 %4 %5 %6 %7 %8 %9
        >example one two three four five six seven eight nine

   In this example, the %1 parameter in the AKA substitution string would be
replaced with the AKA argument "one,"  %2 with the second argument ("two")
and so on.  The resulting line passed to the command processor would be:

        echo one two three four five six seven eight nine

   The resulting line may never exceed the maximum input line length of 255
characters.  Also, each command in the line may not go beyond the requested
maximum length.  In the case of the DOS command processor, this is 127
characters.  If either of these events occur, ANARKEY will immediately stop
replacing parameter fields and pass the input line in its current form to
the command processer.

   If the substitution string contains a parameter field, but the command
line does not include a corresponding argument, the parameter field is
simply removed from the expanded line.  In other words, the parameter field
is replaced with nothing.  This is depicted in the following AKA definition
and command:

        >:pack          echo %1%3%2
        >pack a b                       <--- expands to "echo ab"

   Notice that the %1 parameter was replaced with 'a,' 'b' is the second
argument so it replaces the %2 parameter, and, since there is no third
argument to replace the %3 parameter, it is "expanded" to nothing.  The
resulting line passed to the command processor is "echo ab."

   If there are more AKA arguments than there are parameter fields, the
extra arguments are ignored.  As an example:

        >:one-arg       echo %1
        >one-arg a b c                  <--- expands to "echo a"

   The 'b' and 'c' arguments are not part of the resulting line.

   If the AKA substitution string does not contain any parameter fields,
arguments on the command line are appended to the end of the replacement
string.  For example:

        >:d             dir
        >d *.com                        <--- expands to "dir *.com"

        >:no-args       dir;echo
        >no-args *.com                  <--- expands to "dir;echo *.com"

   Use of parameter fields in substitution strings can provide fast batch
files.  This is due to the fact that the DOS command processor will accept
many of the commands normally executed in a batch file on the command line.
For example, you could enter "pause" on the command line and the result
would be the familiar "Hit any key to continue . . ." message.  This ability
can be used to create very powerful and quick AKAs.  As an example, consider
the following AKA definition:

        :mcopy  for %f in (%2 %3 %4 %5 %6 %7 %8 %9) do copy %1

   This AKA will copy up to eight file specifications (the %2 through %9
parameter fields) to a destination (the %1 parameter field).  For example:

        >mcopy a: *.com *.exe *.doc anarkey.sum

   Will expand into the commands:

        copy *.com a:
        copy *.exe a:
        copy *.doc a:
        copy anarkey.sum a:

   All in one command!



                          Name Completion Functions
                          -------------------------

   As an additional feature to make the entering of commands as quick and
easy as possible, ANARKEY provides functions which will complete file names,
including directory and program names.

   <F7>               -- Complete Directory Name
   <Ctrl-D>
        When this function is invoked, ANARKEY extracts the characters
        starting at the immediate left of the current cursor position and
        proceeding left (toward the start of the line) until either a space
        or the start of the line is reached.  It uses these characters to
        perform its search-and-compare operation, looking for an existing
        directory with which to complete the name.  The search-and-compare
        operation is not case-sensitive.

        If a match is found, it is inserted in the input line at the current
        cursor position.  The cursor position is not changed.

        The matching directory is displayed in upper or lowercase depending
        upon the current state of the CapsLock key.  If CapsLock is active,
        the directory is displayed in uppercase; if inactive, the name will
        be in lowercase.  Should no match be found, ANARKEY will respond
        with a beep.

        This function may be invoked repeatedly.  Each successive invocation
        will find any additional matching directory names.  For example,
        assume there are three directories that begin with the letter "M" in
        the current directory.  If you enter the character "M" and invoke
        the Complete-Directory-Name function, ANARKEY will find one of the
        directories and enter its name on the input line.  If this is not
        the directory you desire, invoking the function a second time will
        cause another of the "M"-directories to replace the original match.
        Another invocation will display the remaining matching directory.
        Since there are no more matching directories, invoking the function
        a fourth time will cause the last matched directory to be removed
        from the input line and ANARKEY will beep.  You may begin the cycle
        all over again by invoking the function a fifth time, which would
        once again display the first matching "M"-directory.

   After the desired name has been completed, the cursor will still be in
its original location.  ANARKEY will automatically move the cursor to the
position immediately after the completed name if the keystroke following a
name completion is one of the following:

        -- Space     ( )             -- Colon              (:)
        -- Backslash (\)             -- Input redirection  (<)
        -- Slash     (/)             -- Output redirection (>)
        -- Semicolon (;)             -- Equal sign         (=)
        -- Asterisk  (*)             -- Question mark      (?)
        -- Plus sign (+)             -- Pipe character     (|)
        -- Comma     (,)             -- Dash (only if -U)  (-)

   After moving the cursor position, the keystroke will be entered into the
input line.

   Notice that the dash character will move the cursor position only if UNIX
switchar character translations are active.  These translations are
activated at installation time by the -U option.  Further details about the
-U option can be found in the "Installation Options" section of this manual.

   Leaving the cursor position unchanged during the completion operation
provides a method of reducing the number of matching names found during the
completion process.  This will be demonstrated in the example below.

   It is not necessary to enter any characters in order for ANARKEY to
perform a directory-completion operation.  Simply invoke the function with
the cursor located at the start of the command or to the right of at least
one space, slash (/) or backslash (\) character and ANARKEY will cycle
through all the existing directory names.

   Directories in locations other than the current directory or on a drive
other than the current drive may also be completed.  To do so, specify a
path specification to the desired directory.

NOTE:
   Many people change the DOS switch character from a slash (/) character to
 a dash (-) or something else.  Doing so frees the slash character to be
 used as a path separator in a directory specification, as in:

                        C>cd c:/dos/commands

   ANARKEY recognizes both backslashes (\) and slashes as path separator
characters in directory specifications.  ANARKEY also provides a more
comprehensive switchar capability than any of the available standalone
programs.  Please refer to the -U option discussed in the "Installation
Options" section of this manual.

   The completion function can be especially useful when working on a new
machine where the directory structure is unfamiliar.

   Here is an extended example using the directory completion function.  Say
you wish to enter the command:

                        C>cd c:\dos\commands

   First type the following characters:

                        C>cd c:\_

   The underscore represents the position of the cursor.

   Invoke the Complete-Directory-Name function.  ANARKEY will begin cycling
through all directories in the root of the C: drive.  If there is more than
one directory in the root, each can be retrieved by invoking the function
repeatedly.  Eventually, the DOS directory will be displayed.

   If you had added a "d" to the above input line, ANARKEY would have cycled
through all directories starting with a "D"; add a "DO" and the cycle would
be through directories whose first two characters were "DO."

   The current input line is now:

                        C>cd c:\dos
                                -

   The underscore represents the cursor position which is unchanged from the
its starting location.

   If this were the entire line we wished to execute, we could accept the
line by simply pressing <Enter>.  However, for our example, we still need to
enter an additional directory.  But before we can do so, the cursor position
must be moved so it follows the completed directory name.  ANARKEY will
automatically move the cursor if a backslash character is entered following
a completion operation.  Thus, simply press backslash.  The current input
line is now:

                        C>cd c:\dos\_

   This time, rather than cycle through all the directories, let's retrieve
only those directories whose first character is "c".  Enter the "c" onto the
input line, like so:

                        C>cd c:\dos\c_

   Invoke the Complete-Directory-Name function again.  ANARKEY will begin
cycling through the directories whose first character is a "c" and are
located in the DOS directory on the C: drive.

   Let's say that after retrieving several directories that begin with a "c"
you realize there are many such directories.  Rather than cycle through them
all until you arrive at the desired one, you can give ANARKEY additional
characters to use in its search.  ANARKEY will use these characters in
finding a matching directory.  These characters will often reduce the number
of matching names retrieved in the completion operation.

   For example, say you are sitting with this line:

                        C>cd c:\dos\chars
                                     -

   Now enter one or more additional characters of the directory you wish, in
our case "commands."  Since we've already entered the "c" at the start of
the operation, we'll enter an "o" now.  The input line thus becomes:

                        C>cd c:\dos\cohars
                                      -

   Notice that the "o" was entered into the line and the cursor position
updated.  (This example assumes the input mode is set to insert.  If the
input mode was overwrite, the "o" would have replaced the "h", but the
cursor position would still be the same.)

   Continue the completion operation by invoking the Complete-Directory-
Name function again.  ANARKEY will now complete only those directories that
begin with the characters "co".  Presumably, this should reduce the total
number of matches found.  Additional characters can be similarly entered to
reduce the number of matches further.

   Eventually, the desired "commands" directory will be retrieved and
displayed on the input line.

                        C>cd c:\dos\commands
                                      -

   And you've got it.  The line can now be accepted by pressing <Enter>.


   <F8>               -- Complete File or Program Name
   <Ctrl-F>
        The Complete-File-or-Program-Name function is similar to the
        Complete-Directory-Name function.  The main difference, as its name
        implies, is that instead of completing directory names, the
        Complete-File-or-Program-Name function completes program and file
        names.

        In ANARKEY, a "program" is defined as the first specification in a
        command.  A program specification may contain a drive and/or a
        directory path.  A program name must have a file extension of BAT,
        COM or EXE.  "Files" are all specifications which are passed to
        programs in an argument list.  In other words, all specifications in
        a command other than the program name, are file names.  File
        specifications may also contain a drive and/or directory path and
        may have any file extension.

        All of the information presented in the Complete-Directory-Name
        function is applicable to the Complete-File-or-Program-Name
        function, including the non-case-sensitive search, the effect of the
        CapsLock key, the repeatability of the function, the positioning of
        the cursor and the method of character extraction upon which the
        search is performed.  That information will not be repeated here.
        Please refer to the explanation of the Complete-Directory-Name
        function for background information relevant to the Complete-File-
        or-Program-Name function.  This section will deal only with those
        details which are specific to the Complete-File-or-Program-Name
        function.

        When the Complete-File-or-Program-Name function is invoked, ANARKEY
        determines whether it is searching for a program or a file name
        based upon the above definitions.  Be aware of the fact that since
        ANARKEY supports multiple commands per line (explained in the next
        section), there may be multiple program names on a single input
        line.  ANARKEY will automatically determine whether it needs to
        complete a program or a file name.

        If a "program name" is being completed, ANARKEY will search the
        appropriate directory for a matching file specification which has
        the extension BAT, COM or EXE. If a match is found, the program name
        is entered into the input line.  The program's extension is not
        displayed, just as you would not enter the extension were you to
        type the program name yourself.  Other possible situations are
        handled in the same manner as in the Complete-Directory-Name
        function.

        If a "file name" completion is called for, all the files in the
        appropriate directory are retrieved, one after another, in the same
        cyclical operation as that used for directory and program names.
        The complete file name, including extension, is entered onto the
        input line.

        In the case of file names, many files exist which are rarely entered
        as arguments to programs.  For example, files with the extensions
        EXE, OBJ, and SYS are almost never part of a program's argument
        list.  Most of the time, a user would simply cycle past these file
        names as they popped up during the completion operation.  To save
        the user from this unnecessary cycling, files with certain
        extentions are ignored by ANARKEY when it is searching for a
        matching file name.  The ignored extensions are:

                .$$$    .BAK    .BIN    .COM    .EXE    .HEX
                .LIB    .OBJ    .OVR    .SYS    .TMP

        Additional file extensions may be added to the ignored-extension
        list during program installation (the -X option).  Also, the
        extensions listed above may be cleared so that ANARKEY will not
        ignore file names with those extensions.  Refer to the section
        "Installation Options, Exclude File Extension" for details.

   As a simple example, assume you are in a directory which contains a
single file called TEST.EXE.  At the start of a new command, you invoke the
Complete-File-or-Program-Name function.  ANARKEY would find a program-name
match with TEST.EXE and enter it on the input line, like so:

                        C>test
                          -

   The cursor would be sitting under the first character of the program name
since that was its location at the start of the completion operation.  It
can be moved past the program name by entering a space character.

                        C>test _

   Invoking the Complete-File-or-Program-Name function now would get only a
beep as a response.  This is because ANARKEY is now searching for a
file-name match and the only file it finds is TEST.EXE whose .EXE extension
is a member of the ignored-extension list.  If you truly wanted to include
the file TEST.EXE in the program's argument list, you would have to enter it
yourself.

   Alternatively, let's say you had installed ANARKEY so that it would not
use the default ignored-extension list.  In that case, given the above input
line, ANARKEY WOULD match the TEST.EXE file.  The input line would then be:

                        C>test test.exe
                               -

   Of course, this example shows the most basic use of the Complete-
File-or-Program-Name function.  Program and file names may include a drive
and/or path specifier, just as their directory-name counterpart.  When used
in conjunction with the Complete-Directory-Name function, entire commands
can be entered with only a few keystrokes.

   The various name-completion functions contribute to an environment rich
in capability.  Become familiar with it and the entering of new command
lines will become a pleasurable experience.
  


                    Entering Multiple Commands per Line
                    -----------------------------------

   The following ANARKEY functions are documented in this section:

   <F2>               -- Check Command Lengths

   <F10>              -- Repress Multiple Commands per Line
   <Ctrl-R>

   In DOS, the terms "line," "command" and "command line" all generally
refer to the same thing.  This is because DOS supports only a single command
on each line.  ANARKEY supports multiple commands per line and thus must
make a distinction between "commands" and "lines."

   Support of multiple commands per line requires a method of specifying the
end of one command and the start of the next.  ANARKEY interprets the
semicolon character (;) as just such a command separator.  A semicolon must
lie between each of the commands on the input line.  Spaces may be on either
side of the semicolon, but they are not required.

   For example, to enter two commands on a single input line, enter the
first command, follow it with a semicolon, and then enter the next command.
This sequence may be followed for as many commands as will fit on the input
line.  The number of commands allowed on a single input line is restricted
only by the input line's maximum length of 255 characters.

   Some examples of input lines which contain multiple commands are:

        C>dir a: ; pause ; del a:*.* ; copy *.* a: ; dir a:
        C>cd \play;game;cd \work
        C>edlin prog.c;cl -c prog.c

   Some programs require that a semicolon occasionally be passed to them in
the program's argument list.  There are three methods to include a semicolon
in a command:

        1) Enter two consecutive semicolons on the input line.
        2) Make the semicolon the very last character on the line.
        3) Repress semicolon/command separator interpretation for the line.

   Note: Many environment varibles use semicolons as part of their value.
The PATH variable is one example.  Rather than require the entering of
consecutive semicolons, ANARKEY will not translate semicolons when they are
contained within a SET, PATH or PROMPT command.  This topic is discussed in
detail in the "Editing Environment Variables" section.

   As an example, the LINK program interprets a semicolon character as
designating the end of the argument list.  Some valid input lines which
invoke the LINK program are:

        C>link prog;
        C>link prog;;
        C>link prog;;;exe2bin prog prog.com ; del prog.exe

   In the first example, the semicolon is the last character on the input
line, therefore it is passed as part of the command.

   The second example shows a situation where the first semicolon is not at
the end of the input line, but it is followed immediately by another
semicolon.  In this case, the consecutive semicolons are converted to a
single semicolon character and passed to the command processor.

   Notice that the first two examples result in identical commands.  They
are shown to illustrate the fact that, although it is not always necessary,
if you consistently enter consecutive semicolons whenever it is desired to
pass a semicolon as part of a command, you will never get burned.

   The third example above displays how semicolons may be used as both
command separators and part of a command.  The first two semicolons are
converted to a single semicolon and entered as part of the LINK command. The
third and fourth semicolons are interpreted as command separators.  The
third example will be dissected into the following three commands (the
quotation marks are included only to illustrate the blank characters in each
command; they are not actually part of the commands):

        "link prog;"
        "exe2bin prog prog.com "
        " del prog.exe"

   Be aware that semicolons used to separate commands may have blank
characters before and/or after them.  However, to pass a semicolon as part
of a command, the semicolons must be consecutive with no space between them.
Thus, the above example may have been entered as:

        C>link prog;; ; exe2bin ...

But not as:

        C>link prog; ; ; exe2bin ...

   Another method to disable semicolon interpretation is to invoke the
Repress-Multiple-Commands-per-Line function.  Pressing the <F10> or <Ctrl-R>
key will repress semicolon interpretation for the current input line.  The
entire line will be passed to the command processor unmodified.  This
function performs a temporary repression for the current input line only;
the next input line will support semicolon translation unless this function
is invoked again.

   With ANARKEY installed, input lines may be up to 255 characters in
length.  Each input line may contain several commands.  Individual commands
consist of no more than 127 characters.

   This 127-character limit is imposed by the DOS command processor,
COMMAND.COM.  If you are using some other command processor, the length
limit may differ.  ANARKEY enforces and supports the length limit of all
third-party command processors, provided the command processor uses the same
method of line input that COMMAND.COM uses.

   ANARKEY will not let you enter an input line that exceeds 255 characters,
nor will commands which go beyond their length limit (usually 127
characters) be accepted.  Should you attempt to enter more than 255
characters on an input line, ANARKEY will beep and refuse to accept the
input.  Commands that exceed 127 characters are caught by ANARKEY after you
accept the input line (by hitting the <Enter> key).

   After pressing <Enter>, ANARKEY "breaks" the line into individual
commands based upon any translated semicolons.  It then checks to verify
that each command does not exceed the 127-character command-length limit.
If a command is found which exceeds the limit, ANARKEY will beep and
position the cursor under the first character beyond the allowable limit.
The character under the cursor and all subsequent characters in that command
go beyond the boundary.  In order to get ANARKEY to accept the command, you
must edit it so that it fits within the allowable length.

   In addition to this automatic length-check, you may have ANARKEY perform
a check at any time during line entry.  Simply invoke the Check-Command-
Length function by pressing the <F2> key.  This function performs the
command length check without passing the input line to ANARKEY for
acceptance.  If all commands are within the allowable range, nothing will
happen.  However, if a command is found which exceeds the boundary, ANARKEY
will beep and the cursor will be positioned under the first out-of-bounds
character.  This interactive length-check may be useful when you're trying
to squeeze one more file name in a command or an additional directory
specification in a PATH variable and you're not sure whether you've gone
past the limit.

   If all commands are within the allowable boundary, each is passed to the
command processor one at a time, as if they had each been entered on their
own input line.  When the command processor is finished executing a command
and requests another, ANARKEY will pass it the next command extracted from
the input line.  This cycle continues until all the commands on the input
line are passed to the command processor.  Notice that no multitasking
(simultaneous execution of multiple programs) occurs when entering multiple
commands on a line.  No command begins execution until the command preceding
it has completed.

   Note: LOAD, the ANARKEY Loader, may be executed from a multiple-command
line, however, it must be the LAST command in the line.  Any commands
following LOAD will not be executed.

   Multiple commands per line can be very useful in instances where the
creation of a batch file is unwarranted.  Sometimes a group of commands
needs to be executed, however, their execution is a one-time occurrence so a
batch file is not really necessary.  Such a situation may be the copying of
a group of files, as in:

        C>copy *.c \c\source;copy *.h \c\include;copy *.obj \c\objects

   In this example, rather than entering each command on their own input
line and waiting for each to complete so you can enter the next one, you can
enter them all at once and go get coffee while they're executing.

   Another use of multiple-commands which may not be obvious is for
documentation purposes.  A REM statement could be added to the input line
explaining the reason for the commands on the line.  For example:

        C>edlin corpx.txt ; rem Incorporate 12/14 proposal changes
        C>edlin prog.c ; make ; rem Enable debug statements

   If this is done on a regular basis, the exact sequence of events in any
daily operation can be documented by displaying the contents of the history
buffer (<F4>) or writing the buffer to a disk file (<Ctrl-W>).  (See the
documentation explaining the Full Disclosure (-F) installation option for
more information on this technique.)


Multiple-Command Lines and Secondary Shells
-------------------------------------------

   Multiple-command lines create one problematic situation, demonstrated in
the following input line:

        C>cd \text ; editor letter.doc ; cd \home

   Such a sequence of commands might be executed to temporarily move to a
working subdirectory, perform an operation (in this case, edit a file) and
then return to the starting directory.  Most modern editors and word
processors provide the capability to temporarily exit to a DOS command
prompt, execute one or more commands and then return to the original
program, picking up where it had left off.

   During such an operation, the exit to the DOS command prompt will result
in the command processor making a request for input.  Under normal
conditions, ANARKEY would return the next command in the multiple-command
line.  However, in this case, doing so would not be the desired response;
the next command should not be executed until the preceding command has
completed.  Thus, ANARKEY must handle this situation in a special manner.

   ANARKEY will automatically recognize the above-described condition.  When
it does, ANARKEY will not handle the request for input itself.  Instead, the
original DOS input handler is called to process the input request.  During
this time, none of the ANARKEY functions will be available.  Only after
exiting the secondary command processor, completing the original program and
returning to the original command prompt, will ANARKEY reactivate itself and
return the next command in the multiple-command line.

   All of this may seem a bit confusing and difficult to remember, however,
be aware that such situations will rarely occur and, when they do, ANARKEY
will handle them for you automatically.



                        Editing Environment Variables
                        -----------------------------

   It is often necessary to view the current value of a single environment
variable or to modify a variable's setting.  ANARKEY provides the capability
to recall and edit the value of any defined environment variable.  This is
especially handy when you have a long PATH setting and wish to add a single
directory to it.  Plain DOS would require that you reenter the entire list
of directories.  ANARKEY will retrieve the current PATH value and allow you
to modify it as you wish.

   <F9>               -- Retrieve Environment Variable
   <Ctrl-E>

   To retrieve the current value of an environment variable, enter the DOS
SET command followed by at least one space and then zero(!) or more
characters of the desired variable's name.  Variable names may be entered in
upper or lowercase.  An equal sign may or may not follow the environment
variable name, however, often it will not be necessary because you will not
be entering the entire name anyway.

   After entering the above line, invoke the Retrieve-Environment-Variable
function by pressing either the <F9> or <Ctrl-E> key.  ANARKEY will search
the list of defined environment variables for a completing match in the same
manner that it completes disk file names and history buffer lines.  When a
match is found, the rest of the variable's name will be entered onto the
input line followed by an equal sign and the variable's current value.  The
cursor position will be placed immediately after the equal sign.  The line
may then be edited.

   If the retrieved environment variable is not the one you desired, simply
invoke the Retrieve-Environment-Variable function again.  Like the other
ANARKEY completion operations, the Retrieve-Environment-Variable function
will cycle through all matching environment variables.  Thus, you can invoke
it repeatedly until the variable you want is retrieved.

   As an example, if you wish to retrieve the current value of the COMSPEC
environment variable, you could enter:

                C>set comspec_

   The underscore designates the location of the cursor.  At this point,
simply press the <F9> or <Ctrl-E> key to instruct ANARKEY to retrieve the
variable's value.

   If the environment variable exists, an equal sign and its value will be
added to the input line.  The cursor will be moved to immediately after the
equal sign.  The above situation could result in the following line:

                C>set comspec=C:\DOS\COMMAND.COM
                              -

   Any part of the line may now be modified using the available editing
functions.

   In the above example, it was not necessary to enter the entire variable
name; zero or more of its characters are all that ANARKEY needs to perform
the retrieval.  So the following line could have worked just as well:

                C>set c_

   Invoking the Retrieve-Environment-Variable function given this line,
ANARKEY will search through all the environment variables for one that
begins with the letter 'C.'  The first one it finds will be entered on the
input line.  If the retrieved variable is not the desired one, invoking the
function a second time will instruct ANARKEY to continue its search.  It
will retrieve the next variable it finds that begins with a 'C.'  This can
be done repeatedly, cycling through all of the matching variable names,
until the desired variable is found.

   Entering zero characters after the SET command, as in the following line:

                C>set _

will cause ANARKEY to cycle through all of the defined environment
variables.  Notice that at least one blank must follow the SET command.

   One important piece of information concerning environment variable names
may be in order here.  DOS will allow any character to be part of an
environment variable name except the characters <, >, | and =.  (Notice that
a space can be included as part of an environment variable's name.)  ANARKEY
adds the further restriction that they may not contain a semicolon character
(;), either.  This fact may be important when creating and retrieving
environment variable names.

   The Retrieve-Environment-Variable function may be used to recall variable
values simply to see to what value a specific variable is currently set.
This ability is most useful when a large number of environment variables
exist on a system and recalling all variables (as with a simple "SET"
command) would cause the variable list to scroll offscreen.  This situation
is becoming increasingly common as more and more programs require the
definition of multiple environment variables, usually for program
configuration purposes.

   Also, as previously suggested, environment variable retrieval is
extremely useful when you wish to edit a very long variable value, as is
often the case with the PATH variable.

   And speaking of PATH, DOS handles the PATH variable, along with the
PROMPT variable, in a manner which is slightly different from other
environment variables.  PATH and PROMPT are special in that they do not
require the SET command to precede them on the input line. SET may be used,
but is not required as it is for other variables.  ANARKEY supports this
special handling of the PATH and PROMPT variables; it will retrieve their
current values given any of the following input lines:

                C>set path_
                C>path_

                C>set prompt_
                C>prompt_

   ANARKEY will not complete the PATH or PROMPT variable name unless it is
preceded by the SET command.  For example, you could not enter:

                C>pa_

and have ANARKEY retrieve the rest of the name and its value.  You must
enter the entire variable name if it is not preceded by SET.  Thus, the
following would be valid:

                C>path_

   Alternatively, ANARKEY will complete the PATH name and retrieve its value
given the following SET command:

                C>set pa_

   Even though the examples show situations where the SET, PATH or PROMPT
command is the first and only command on the input line, this is not a
restriction of the Retrieve-Environment-Variable function.  The function may
be invoked upon any command on the input line, as in:

                C>dir *.* ; set comspec_

   Use of the semicolon (;) character in environment variables AND as a
command separator presents a special problem.  For example, PATH and other
environment values commonly specify several directories, each separated by a
semicolon.  Normally, ANARKEY would interpret these single semicolons as
command separators.  To include an actual semicolon in the value would
require either two consecutive semicolons or the repression of multiple
commands (as explained in the "Entering Multiple Commands per Line"
section).  If this were the final situation, it would be particularly
annoying, at best.  Fortunately, ANARKEY makes provisions for this
condition.

   Since SET, PATH and, to a lesser extent, PROMPT commands are fairly
common, ANARKEY treats them as special cases.  While ANARKEY is breaking the
input line into individual commands, it checks each command to see if it is
SET, PATH or PROMPT.  If it is, semicolon/command separator translation is
immediately turned off for the remainder of the line.  All remaining
semicolon characters on the line are interpreted as straight semicolons.
Two consecutive semicolons are interpreted as two consecutive semicolons;
they are not translated to a single semicolon as they normally would with
translation.

   The consequence of this solution is that another command may not follow a
SET, PATH or PROMPT command on the same input line.  Since the semicolon
translation is turned off, there is no way to indicate the end of the
SET/PATH/PROMPT other than the end of the input line.  Other commands may
still precede a SET, PATH or PROMPT command.

   Other than the uses already mentioned, this function may also be used to
save a variable's current setting, temporarily modify it and eventually
restore the saved value.  For example, say you want a different PATH value
for a short period of time.  Either of the following sequences would save
you time:

        1) Recall the current PATH value.
        2) Using the editing functions, change the name of the PATH variable
           to SAVED PATH.  (Remember that spaces are valid characters within
           environment variable names.)  Be sure to precede "SAVED PATH"
           with a SET command; only PATH does not require it.  After you've
           hit <Enter>, you'll have two environment variables, PATH and
           SAVED PATH.
        3) Set the new PATH value.  (If the new value resembles the original
           value, you may want to retrieve the original value and edit it.)
        4) Execute the desired commands which will use the new PATH value.
        5) To restore the original PATH, retrieve the SAVED PATH variable
           (you'll need to use SET).  Rename the variable from SAVED PATH to
           PATH (you can delete the SET command, too).

Alternatively:

        1) Recall the current PATH value.
        2) Without making any modifications, accept the line by pressing
           <Enter>.  This will store the input line in the history buffer.
        3) Create your modified PATH value.
        4) Execute the commands which use the new value.
        5) Retrieve the input line previously stored in (2) by using the
           supported history buffer functions.  Acceptance of the retrieved
           line will restore the original variable value.

   The second method described above has the advantage of not requiring an
additional environment variable.  However, you may come across situations
where the first method is a more desirable solution.

   Keep this function in mind whenever environment variables are concerned
and further uses, often in conjunction with the other ANARKEY functions,
will make themselves known.



                     The Mega-Key, All-in-One Completion
                     -----------------------------------
   ANARKEY provides a function which combines the operations of the
following functions in a single key:

          Find-History-Buffer-Match-and-Edit      <F5>, <Ctrl-K>
          Complete-Directory-Name                 <F7>, <Ctrl-D>
          Complete-File-or-Program-Name           <F8>, <Ctrl-F>
          Retrieve-Environment-Variable           <F9>, <Ctrl-E>

   The name of this combined function is Mega-Completion because it performs
all of the above completions in a single function.  In addition, Mega-
Completion determines the type of completion you are most likely attempting
and performs it for you automatically.  You do not need to tell ANARKEY what
to complete.  Whether it's a file name, environment variable, directory name
or a line retrieved from the history buffer, ANARKEY will figure that out
itself and do it!

   The keystroke assigned the Mega-Completion function is usually referred
to as the "Mega-Key."

   Among its advantages, the Mega-Key will save you from having to remember
all the keys associated with each of the individual functions.  Simply hit
the Mega-Key no matter what you want to do and ANARKEY will do the rest.

   By default, the Mega-Completion function is mapped to the <Tab> key.  Of
course, it can be reassigned with ANARKED.

   <Tab>              -- Mega-Completion
        Mega-Completion analyzes the current input line and determines which
        of the following completion operations would be most appropriate:

                Find-History-Buffer-Match-and-Edit
                Complete-Directory-Name
                Complete-File-or-Program-Name
                Retrieve-Environment-Variable

        It then executes the operation it evaluates to be most likely.

        Mega-Completion can be invoked repeatedly to have it work down its
        list of likely operations.  For example, Mega-Completion may
        determine that a directory name completion is most called for.  In
        this case it will first cycle through all matching directory names,
        just as if you had repeatedly invoked Complete-Directory-Name.
        After finishing that cycle, its analysis may conclude that the next
        most likely operation is a line completion.  Thus, subsequent
        invocations will search the history buffer for matching line
        completions, as though you were calling the Find-History-Buffer-
        Match-and-Edit function.  This kind of mega-cycling, "mega" because
        it is cycling through multiple functions rather than within a single
        function, can be continued until the desired completion is made.

   Mega-Completion will analyze the input line and perform the correct
completion operation an amazingly high percentage of the time.  But, of
course, nothing is perfect and you may occasionally have to cycle through a
few undesired completions before the Mega-Key retrieves the one you want.

   You can give the Mega-Key a clue about how you want the line completed by
prefacing the Mega-Completion call with one of the four functions it
performs.  For example, say you have entered one or two characters on the
input line and you would like to complete the line from one of the stored
lines in the history buffer.  You would like to use the Mega-Completion
function, but you are also, of course, in a hurry and want the Mega-Key to
make the correct completion as soon as possible.  Simply invoke the Find-
History-Buffer-Match-and-Edit function to retrieve the first matching
history buffer line.  Then press the Mega-Key.  Mega-Completion will take
the preceding line-completion operation as an instruction to perform line
completions over any other type of completion operation it may otherwise
determine to be appropriate.  It will pick up the history-buffer search from
the point where the last line-completion operation left off and continue
from there down its list of most-likely completions.  The Mega-Key will
operate in this manner whenever preceded by one of the four function
operations listed above.

   The Mega-Completion function is one more giant step toward a state of
total Anarkey, a state without keystrokes.



                         UNIX Switchar Conventions
                         -------------------------
   The UNIX operating system does not use the backslash(\) character to
separate directories in a path specification.  Instead, it uses the slash(/)
character.  UNIX also uses the dash(-) character to specify command options
or "switches" while DOS commonly uses the slash character for this purpose.

   Many people find the UNIX conventions more convenient.  In fact, DOS
provides an undocumented operating system function that will cause
COMMAND.COM's internal commands, such as COPY and DIR, to recognize the UNIX
switchar conventions.  There are several public domain programs available
that use this undocumented function to alter the DOS switchar.

   Unfortunately, these programs only have an effect on the internal
commands provided by COMMAND.COM; they do not work with external commands,
like XCOPY or third-party software.  They also have some strange
side-effects which make them an adventure to use at times.  Further, the new
versions of DOS since 4.xx and the DOS compatibility box of OS/2 do not
provide the undocumented function that supports the altered switchar.  Thus,
it is impossible to change the switchar conventions on the newer operating
systems using one of the SWITCHAR programs.

   ANARKEY solves all the problems related to the SWITCHAR programs.  It
supports the use of UNIX switchar conventions on *ALL* programs, whether
they are internal to COMMAND.COM or external.  ANARKEY also fills the void
left by the new operating systems that do not support the undocumented
function call.

   UNIX switchar conventions are activated by specifying the -U option on
the ANARKEY installation line.  Doing so will cause ANARKEY to convert
certain characters on an input line to their UNIX equivalents.  The
conversion takes place after the line has been accepted (<Enter>) and any
AKA substitution has occurred, thus, the usage of UNIX switchar conventions
is completely transparent to the user.

   Note: UNIX conventions can be used from a batch file provided the command
is prefaced by ANARKMD, the ANARKEY Command-Line Utility.  See the "ANARKMD
User Manual" distributed in the ANARKEY software package for further
details.

   The converted characters and what they are converted to is depicted in
the following chart:

                   Character on
                   command line            Converted to
                   ------------            ------------
                        /                       \
                        -                       /

   Note: The conversion of the dash character to a slash can be disabled by
including the 'S' modifier with the -U installation option.  Further details
can be found in the "Installation Options" section of this manual.

   The above chart documents that when UNIX switchar conventions are active,
all slash(/) characters are converted to backslashes(\) and all dashes(-)
are translated to slashes.  This is illustrated in the following examples
(the lines under the "Input line" column are what you would enter on the
command line; those under "Converted line" are what will actually be
executed):

          Input line                     Converted line
          --------------------           --------------------
          dir -p                         dir /p
          copy a:/dos/*.com c:           copy a:\dos\*.com c:
          xcopy a:/*.* c: -s             xcopy a:\*.* c: /s

   To enter an actual slash or dash on the command line, enter the desired
character consecutively.  For example,

          Input line                     Converted line
          --------------------           --------------------
          dir //p                        dir /p
          anarked --u                    anarked -u
          prog--1 file--1.txt            prog-1 file-1.txt

   Because of the situation depicted in the third example above, it is
highly recommended that you refrain from using dash characters in file
names.  It is best to use an underscore(_) character in place of the dash.

   Some third-party programs already support the UNIX switchar conventions,
for example, all of the support programs in the ANARKEY software package.
It would be inconvenient to have to always enter two dashes for every
command option.  Fortunately, this is not necessary.

   ANARKEY provides a method of specifying and saving the names of programs
which already support the UNIX switchar conventions.  Afterward, whenever
one of the programs is invoked, ANARKEY will suppress the switchar character
translations for that command.  This will save you from having to enter the
consecutive characters described above.

   ANARKEY stores the names of programs which use the UNIX conventions in an
area of memory that is allocated at installation time.  Along with the -U
option may be specified the size of this buffer.  The size must be
immediately after the 'U' with no spaces between them.

   If a buffer size is not specified, ANARKEY will allocate a default buffer
large enough to hold 25 characters.  If the -U option is not specified on
the installation line, no space is allocated for the buffer.  Refer to the
"Installation Options" section of this manual for further details on the
buffer size and the -U option.

   You tell ANARKEY which programs use UNIX conventions by entering the
program name on the command line prefaced with an exclamation point (!).
ANARKEY will store the program name in the "UNIX buffer" and subsequent
invocations of the program will not be subject to switchar translations.

   For example, to inform ANARKEY that the program "ANARKED" already
recognizes UNIX conventions and therefore do not perform the related
conversions, enter:

                >!anarked

   Now subsequent invocations of ANARKED will not have their slash and dash
characters converted.  For example, BEFORE storing its name in the UNIX
buffer:

           anarked -u    ...is converted to...     anarked /u

AFTER storing its name (a la "!anarked"):

           anarked -u     ...is unchanged...       anarked -u

   When a program name is stored in the UNIX buffer, only that program's
arguments will not be translated; all other items on the command line,
including redirected file names, path designations and piped commands, will
still be translated.

   This is best illustrated by an example.  Assume the program ANARKED is
stored in the UNIX buffer and ECHO is not.  The following command line and
its translated result is shown below.

   Original input line:
        >c:/bin/anarked -u >f:/log.txt | echo -test --the /translations

   Translated line:
        >c:\bin\anarked -u >f:\log.txt | echo /test -the \translations

   As the above example shows, ANARKEY intelligently parses the input line
and translates only the appropriate characters.

   As many program names can be stored in the buffer as will fit.  Each
program name requires enough space to hold the length of its name plus one
character.  Thus, the program "A" requires two characters from the buffer,
the program "AB" requires three, and so on.  If there is not enough room to
store the name, ANARKEY will beep.  Otherwise, the name is saved and
subsequent invocations of the program will not have their slash and dash
characters translated.

   As an alternative to entering the program name on the DOS command line,
it may be read in by LOAD, the ANARKEY Loader.  Often, it will be most
convenient to accumulate a list of UNIX-style programs and save their names
in a disk file.  The file can then be loaded during system start-up with
LOAD.  Just remember each program name in the disk file must be prefaced
with an exclamation point.  Instructions on the use of LOAD can be found in
the "LOAD User Manual" which came as part of the ANARKEY software package.

   ANARKEY provides a function which will display all the program names
stored in the UNIX buffer.

   <Shift-F4>         -- Display Switchar Programs
        Display the programs that already support the UNIX switchar
        conventions.  This is a list of all the program names stored in the
        UNIX buffer.

   A program can be removed from the UNIX buffer by specifying its name on
the command line prefaced by two (2) exclamation points.  Once removed, any
slash or dash characters on subsequent invocations of the program will be
translated.

   For example, to remove the "ANARKED" program from the buffer, enter:

                >!!anarked

   ANARKEY instructions to add(!) or remove(!!) program names from the UNIX
buffer can also be specified in multiple-command lines and AKAs.

   This enhanced switchar system makes it possible to consistently use UNIX
conventions on any program you run.  It is much more comprehensive than the
SWITCHAR programs that rely on the undocumented DOS function and it is also
available on operating systems where the DOS function is not supported (as
in DOS 4.xx and the compatibility box of OS/2).



                            Installation Options
                            --------------------

   ANARKEY supports an assortment of configuration options which may be
specified during program installation.

   An option may be in upper or lowercase and each must be preceded by a
dash (-) or slash (/) character.  All options are single characters,
however, some options require an additional argument which must appear
immediately after the option.  Options may appear in any order and each must
be separated by at least one space.

   An example ANARKEY installation line is:

        C>anarkey -f -h1000 -io

   The supported ANARKEY options are detailed in the remainder of this
section.

   The notational conventions used are:
        n       -- represents a numeric argument
        x       -- represents an alphanumeric argument
        []      -- an argument in brackets represents an optional argument


   -An                -- Allocate Space for AKA Definitions
        By default, AKAs are not supported by ANARKEY.  They must be enabled
        by the -A installation option.

        This option specifies how much space to reserve for AKA definitions.
        The amount of space is specified in number of characters.

        The total amount of space allocated for AKA storage, the history
        buffer (-H option) and the UNIX buffer (-U) may not exceed 50,000
        characters.  ANARKEY will automatically adjust the space allocated
        for AKA definitions if this limit is exceeded.

        To allocate enough space to store 400 characters of AKA definitions:

                C>anarkey -a400

   -C                 -- Cursor Shape Remains Unchanged
        Normally, ANARKEY sets the cursor shape based upon the input mode.
        Use of this option will repress all changes of the cursor shape.

   -E                 -- Load ANARKEY in Expanded Memory
        If enough expanded memory is available, ANARKEY will store the
        history buffer, AKA definitions and most of its code in expanded
        memory above 640K.  Only a very small fraction of ANARKEY remains
        resident in the lower 640K when using expanded memory.  This leaves
        more room for other programs to operate.

        ANARKEY supports all versions of the Lotus-Intel-Microsoft Expanded
        Memory Specification (LIM EMS), including versions 3.2 and 4.0.

        If a valid expanded memory manager is not installed or there is not
        enough expanded memory to store ANARKEY, an error message will be
        displayed and ANARKEY will install itself entirely in conventional
        memory (memory below 640K).

   -F                 -- Full Disclosure
        Under default operation, when a line is retrieved from the history
        buffer and then immediately accepted, ANARKEY moves the line to the
        end of the buffer.  Doing so prevents the buffer from becoming
        cluttered with duplicate lines.

        The -F option will repress this line movement and maintain the
        history buffer as a log of each line in their executed order.

   -Hn                -- History Buffer Size
        Create a history buffer capable of holding *n* number of characters.
        Buffer size may range from 255 to 50,000.  Default buffer size is
        500 characters.  If you try to set a buffer size less than 255 or
        greater than 50,000, ANARKEY will use the default value of 500.

        If AKA storage space is allocated (-A option), the total space used
        by the history buffer and AKA storage together may not exceed
        50,000.  ANARKEY will automatically adjust the space allocated for
        AKA definitions if this limit is exceeded.

        To allocate a history buffer of 10,000 characters:

                C>anarkey -h10000

        Notice that commas should not be included as part of the size value.

   -Ix[F]             -- Input Mode on Powerup [and Start of Input Line]
        Set the initial input mode to insert(x = I) or overwrite(x = O)
        mode.  The default value of x is I (insert mode).

        The powerup input mode affects the cursor shape.  An underscore
        cursor is used in the powerup mode; the alternate mode uses a
        block-shaped cursor.  (Note: Changing cursor shapes can be repressed
        by using the -C option.)

        To start ANARKEY in overwrite mode:

                C>anarkey -io

        During normal operation, ANARKEY will not change the input mode
        until you explicitly tell it to do so by invoking the
        Toggle-Insert/Overwrite-Mode function (<Ins>).

        Alternatively, ANARKEY may be configured to force the input mode
        back to the powerup setting at the start of each new input line.
        (Many of the alternative command-line editors operate this way by
        default.)  Simply append the 'F' option-modifier to the end of the
        -I option and ANARKEY will automatically force the input mode to the
        powerup setting whenever a new input line is requested.

        To start ANARKEY in overwrite mode and force the input mode to
        overwrite at the beginning of each new line:

                C>anarkey -iof

        To start ANARKEY in insert mode and force it into that mode at the
        start of each line:

                C>anarkey -iif

   -M                 -- Display ANARKEY Memory Usage
        The increasing size of application programs and DOS's limitation of
        640K of program memory have combined to make users count every byte
        their TSR programs eat up.  ANARKEY will tell you exactly how much
        memory it will request from DOS when the -M option is included on
        the installation command line.

        Add the -M option to any valid installation line and ANARKEY will
        calculate and display how much memory the specified configuration
        will require.  ANARKEY will not install itself; this option is for
        informational purposes only.

        If the installation line has a -E option (Load in Expanded Memory),
        the displayed message will include information on expanded memory
        usage as well as conventional memory (memory below 640K)
        requirements.  The total amount of memory ANARKEY will require is
        the sum of the conventional and expanded memory amounts.

        Expanded memory is allocated in 16K chunks.  Even if you need only a
        single byte, an entire 16K block is reserved.  Any unused memory in
        the 16K block just goes to waste because no other program can use it
        either.  This is a characteristic of the LIM expanded memory
        specification.  To help you use expanded memory to its fullest, the
        amount of reserved, but unused, expanded memory is displayed along
        with the amount that is used.  The sizes of the history, AKA and/or
        UNIX buffers can be increased to put this "free" memory to good use.

        An expanded memory manager need not be installed, nor does expanded
        memory have to be available when combining the -E and -M options on
        the same command line.

        To find out how much memory ANARKEY will request when configured
        with a 1000-character history buffer and 400 characters allocated
        for AKAs:

                C>anarkey -a400 -h1000 -m

        Note:
           The memory usage displayed by the -M option is not the exact
        amount DOS will reserve for ANARKEY; it is the amount ANARKEY will
        ask DOS to reserve for it.  DOS only guarantees that it will reserve
        AT LEAST the amount of memory requested.  To the requested value
        will be added the space allocated for defined environment variables.

        Tip:
           When a program is executed, it is assigned a copy of all defined
        environment variables at the time of execution.  If that program
        remains resident, this environment space remains resident with it.
        You can reduce the amount of memory a resident program requires by
        installing it BEFORE defining environment variables.

   -Pn                -- ANARKEY Process Number
        When ANARKEY is installed, it assigns to itself a process number
        which it later uses to determine if it is already installed.  There
        exists a small possibility that another TSR program will use the
        same process number ANARKEY wishes to use.  If this is the case,
        ANARKEY will think it has already been installed when, in fact, it
        has not been.  To install ANARKEY in this situation, ANARKEY must
        use an alternative process number which is specified via this
        option.

        The default process number is 35.  Valid process numbers are 0 to
        63.

        Here is an example of a ANARKEY installation that uses an
        alternative process number of 14:

                C>anarkey -p14

        If ANARKEY refuses to install, continue trying all valid process
        numbers.  (It will be extremely rare situations where this option
        will need to be used at all, let alone attempted several times.)

   -Q                 -- Run ANARKEY in Quiet Mode
        In quiet mode, the bell will sound only in situations where no other
        form of error notification is provided.  For example, it will not
        sound after cycling through all filename or history buffer
        completions and no matches remain.  However, the bell will still
        ring if an AKA definition cannot be stored due to lack of storage
        space.

   -Sn                -- Shortest Line to Store in History Buffer
        Short input lines are often easier to retype than to retrieve from
        the history buffer.  Rather than have these short lines clutter the
        buffer, they can be excluded from ever being entered.

        The -S option specifies the shortest line length required for a line
        to be stored in the history buffer.  Lines of less length will not
        be entered.

        By default, ANARKEY stores all non-empty lines (-S1).  Empty lines
        are never stored in the history buffer, even if -S0 is specified.

        To store only lines of four or more characters:

                C>anarkey -s4

   -U[S][n]           -- Translate Characters to UNIX Standards
        When the -U option is specified, certain characters are translated
        to their UNIX equivalents.  The converted characters are:

                Slash(/)  is converted to  Backslash(\)
                Dash (-)  is converted to  Slash(/)

        If the program being executed already recognized the UNIX switchar
        conventions and is stored in the UNIX buffer, these translations are
        suppressed.  Further details on the use of UNIX switchar conventions
        can be found in the section "UNIX Switchar Conventions" of this
        manual.

        The S modifier may optionally be appended to the -U option (i.e.
        -US).  This will cause only slash characters to be translated;
        dashes will remain unchanged.  With the current release of ANARKEY,
        this modifier is not very useful, but is maintained for
        compatibility purposes.

        With the -U and -US options can be specified the size of the "UNIX
        buffer" which is used to store the names of programs that already
        recognize the UNIX switchar conventions.  The size is specified in
        number of characters and must be immediately after the 'U' or 'S'
        option.

        If a size is not specified, ANARKEY will allocate a default buffer
        size of 25 characters.  If the -U or -US options are not specified,
        no space is allocated for the UNIX buffer.

        The total accumulated size of the history, AKA and UNIX buffers may
        not exceed 50,000.  If it does, the UNIX buffer will be
        automatically downsized to fit into 50,000.

        To use UNIX switchar conventions and allocate 100 characters for
        program names:

                C>anarkey -u100

   -Xxxx              -- Exclude File Extension
        Add a file extension to the ignored-extensions list used during a
        filename-completion operation.

        During filename completion, ANARKEY automatically ignores all files
        with the following extensions:

                .$$$    .BAK    .BIN    .COM    .EXE    .HEX
                .LIB    .OBJ    .OVR    .SYS    .TMP

        To include additional extensions in this list, specify them using
        the -X option.  An installation configuration may contain up to six
        -X options.  Standard DOS wildcard characters '?' and '*' are
        supported.

        Example:

                C>anarkey -xtxt -xbat -xq* -x??v

        The above line would cause ANARKEY to ignore all files with a .TXT
        or .BAT extension and any extension that started with a 'Q' or ended
        with a 'V'.

        -X\ is a special case option that will clear the entire extension
        list.  Use -X\ if you do not wish to use the default extensions
        listed above.  -X\ should be specified prior to any other -X options
        so as to prevent clearing any extensions you've added to the list.
        -X\ does not count toward one of the possible six -X options.



                             ANARKEY Internals
                             -----------------

   This section documents some of the inner workings of the ANARKEY program.
It is not necessary to read and understand this section in order to use
ANARKEY.  The information is provided for those people who prefer to know
something about the internal operations of the programs which they run.
Those people with no interest or technical background in this area may
safely skip this section and proceed to the next.

   The following discussion assumes the reader has a general understanding
of DOS functions and TSR program structure.

   Upon installation, ANARKEY hooks into two interrupts:

        1) Interrupt 2Fh (multiplex) to install program signature
        2) Interrupt 21h, function 0Ah

   Upon initial program execution, a program "signature" is installed which
is used by ANARKEY to prevent itself from being installed more than once.
ANARKEY installs it signature by chaining into interrupt 2Fh.  This is the
multiplex interrupt which is shared between the PRINT, SHARE and other TSR
programs.  Programs chaining into this interrupt assign themselves a
"process number" which is used for identification purposes.  Process numbers
0C0h thru 0FFh are reserved for user programs.  By default, ANARKEY
appropriates process number 0E3h.  During program initialization, ANARKEY
queries the appropriate process number to check if it has already been
installed.  If it determines that ANARKEY is not currently resident, it will
chain into the interrupt and continue the installation procedure.

   If this process number is being used by another TSR program, ANARKEY will
believe that it has already been installed.  It will display a message
stating as much and refuse to continue execution.  If this is the case, the
installation option -P may be used to install ANARKEY under a different
process number.  (The -P option is documented in the "Installation Options,
ANARKEY Process Number" section.  Notice that the -P argument which
specifies the new process number has been "de-programmer-ized."  Process
numbers are specified in decimal and range from 0 to 63.  The
de-programmer-ized value is first added to 0C0h (re-programmer-ized?) before
being used for installation.)

   Once ANARKEY has verified that it is not already installed and chained
into the multiplex interrupt, it hooks into interrupt 21h, function 0Ah, the
buffered input routine.  The resident portion of ANARKEY is a replacement
for this function, the standard version of which is provided by the
operating system.

   After installing its signature and hooking into the buffered input
interrupt, ANARKEY terminates its execution, but remains resident in system
memory.  Most subsequent calls for buffered input will be handled by
ANARKEY.
  


                           Special Considerations
                           ----------------------

   A few situations exist in which ANARKEY must operate in a special manner.
Each of these special and rare circumstances are described in this section.

Redirecting Output to a Serial Terminal
---------------------------------------
   When output is redirected to a serial terminal, i.e. the COM device, a
special set of problems arises.  Due to the many different characteristics
of serial terminal displays, it is difficult to implement many of the
ANARKEY functions so that they are compatible with all available terminals.
Because output redirection to a COM device is a relatively rare occurence,
ANARKEY handles this situation in a special manner.

   When output is redirected to a COM device, either by using the
redirection character ('>') or executing the CTTY program, ANARKEY will
temporarily disable itself.  ANARKEY will remain disabled until output is no
longer redirected to the COM device, at which time it will re-enable itself.
Notice that ANARKEY will recognize this situation on its own and will handle
it appropriately; there is no need for the user to do anything special.

Incompatible Programs
---------------------
   Some programs are not 100% compatible with ANARKEY.  Known
incompatibilities are documented here.
 
   -- SIDEKICK
        Old versions of Borland's SIDEKICK will not correctly execute lines
        containing multiple commands.  After executing the first command on
        the line, SIDEKEY will pause before allowing subsequent commands to
        run.  Pressing any key will cause the remaining commands to execute.
        To solve this problem, upgrade to a newer version of SIDEKICK.

   -- RAWMODE (as distributed with NANSI and any offshoots)
        Distributed with the public domain NANSI device driver is the source
        code for a program that will place the screen console into raw mode.
        This source code and any programs generated from it contain a bug
        that will cause ANARKEY to disable itself.  Thus, ANARKEY will be
        loaded, but none of its features will seem to work.

        ANARKEY will work fine in raw mode, however, the RAWMODE program
        does more than just set the console's mode.  Even when RAWMODE is
        used to set the screen back into cooked mode, it leaves behind side
        effects that will cause ANARKEY to disable itself.  If RAWMODE is
        run even once during a computer session, ANARKEY will appear to not
        work.  Rebooting the computer will erase the undesired and
        unnecessary RAWMODE effects.

        A fixed RAWMODE program will be supplied to you upon request when
        you register ANARKEY.

        For the technically oriented: When setting the console mode, do NOT
        change bit 4 of the device data word.  The NANSI RAWMODE programs
        change bits 4 and 5; only bit 5 needs to be altered.

   -- TOPS
        If ANARKEY is to work with the TOPS local area network, ANARKEY must
        be installed after TOPSKRNL/TOPSCLNT.

        Also, TOPS alters some of the keystroke codes received as input from
        the keyboard.  This results in problems when reassigning keystrokes
        using ANARKED, the ANARKEY Keystroke Editor.

        This problem may be gotten around by restricting key assignments to
        only those keystrokes not altered by TOPS.  Finding those keys that
        are altered is a try-and-see operation (i.e. "try" the keystroke and
        "see" if ANARKED handles it correctly).



                             Future Directions
                             -----------------

   ANARKEY is a powerful and extremely useful program in its current state.
However, I believe that everything can be improved upon and ANARKEY is no
exception.  I foresee the future direction of ANARKEY to be primarily
user-driven.  For this to be possible, I need your comments and suggestions.

   After you've used the program for a while, please take a few minutes to
let me know what you think.  I welcome and strongly encourage suggestions
concerning additional features you would like to see added to ANARKEY.  I am
also very interested in hearing about the current features that you find
most useful and those that you don't use very often, if at all.  Also, if
you decide that ANARKEY is not a useful tool, I would like to know what
features you believe it lacks.  All comments - the good, the bad and the
ugly - will receive serious consideration and are strongly encouraged.



                 The Association of Shareware Professionals
                 ------------------------------------------

   ANARKEY is produced by Steven Calwas, a member of the Association of
Shareware Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-related
problem with an ASP member by contacting the member directly, ASP may be
able to help.  The ASP Ombudsman can help you resolve a dispute or problem
with an ASP member, but does not provide technical support for members'
products.  Please write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA
98006 or send a CompuServe message via EasyPlex to ASP Ombudsman 70007,3536.


   Please send your registration form, suggestions and comments to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER
```
{% endraw %}

## ANARKMD.DOC

{% raw %}
```








                                  ANARKMD
                      The Anarkey Command-Line Utility
                                User Manual

                                Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                                 Steven Calwas
                              All rights reserved

















                               Introduction
                               ------------

   ANARKMD (pronounced "anar-command") is a support program for the ANARKEY
software package.  It allows the execution of certain ANARKEY functions to
be instigated from the command line as opposed to the keyboard.  An ANARKEY
function executed via ANARKMD operates exactly as if you had pressed the
associated function invocation keystroke yourself.  In addition, ANARKMD
offers some function enhancements not available when the function is
executed from the keyboard.  For example, a filename and location may be
specified when writing the history buffer contents to a disk file.  With
ANARKMD, ANARKEY functions can be invoked from within a batch file, a
multiple command input line or an AKA.

   ANARKMD can also be used to execute an AKA or multiple-command input line
from within a batch file.  Normally, ANARKEY is not active during batch file
processing, but, with ANARKMD, many of the powerful features of ANARKEY will
now be available.



                              Running ANARKMD
                              ---------------

   ANARKMD can be executed from the DOS command prompt, within a batch file,
from an AKA or anywhere else a normal program can be run.

   The only restriction to ANARKMD execution is that it may NOT be run from
within a multiple command line unless it is the very last command in the
line.  If ANARKMD is run in a multiple command line and other commands
follow it on the line, all the following commands will be ignored; they will
not be executed.

   ANARKMD command-line syntax is:

        ANARKMD [-option | input_line]

   ANARKMD is really two programs combined into one; it can be used to
either:

        (1) execute an ANARKEY function or
        (2) execute an entire input line which may contain multiple commands
        and AKAs.

   Depending on which operation you wish to perform, either a function
description ("-option") or the line to execute ("input_line") must be
provided to ANARKMD on its command line.  This manual will first discuss how
to invoke an ANARKEY function and then move on the executing entire lines.


Invoking ANARKEY Functions
--------------------------
   To execute an ANARKEY function from the command-line, ANARKMD must be
told:

        (1) to execute an ANARKEY function and
        (2) which function to execute

   Both of these pieces of information are provided to ANARKMD via
command-line options.  Options always begin with a dash (-) character and
may be in upper or lower case.  Options may be specified in any order.

   The supported options are:

   -Fx          -- ANARKEY function to execute

   The -F option is used to tell ANARKMD which ANARKEY function to execute.
   Only one -F option per ANARKMD invocation is allowed.  If multiple -F
   options are specified, only the last one will be recognized.

   The -F option is immediately followed by a full description of the
   function to be executed.  No spaces may separate the -F option from the
   function description.

   ANARKMD looks at only the first two characters of the description to
   determine its identity, thus, you may abbreviate the function description
   by only specifying its first two characters.  The function description
   may be in upper or lower case.

   The supported functions are:

     o BOttom_display_history_buffer

        The contents of the history buffer are display onscreen starting
        from the last line in the buffer and advancing to the first.  This
        function executes the ANARKEY Display-History-Buffer-From-Bottom
        function assigned to the <Ctrl-F4> key.

        Examples:
                        >ANARKMD -FBottom_display_history_buffer
                        >ANARKMD -FBO

     o CLear_history_buffer

        All lines stored in the history buffer will be removed.

        This function is identical to executing the ANARKEY Clear-History-
        Buffer function assigned to the <Ctrl-X> key by default.

        Examples:
                        >ANARKMD -Fclear_history_buffer
                        >ANARKMD -fCL

     o DIsplay_history_buffer

        The contents of the history buffer will be displayed onscreen.  This
        function invokes the ANARKEY Display-History-Buffer-Contents
        operation mapped to the <F4> key.

        Examples:
                        >ANARKMD -FDisplay_History_Buffer
                        >ANARKMD -FDI

     o LIst_switchar_programs

        The contents of the UNIX switchar buffer will be displayed onscreen.
        This operation executes the ANARKEY Display-Switchar-Programs
        function mapped to <Shift-F4>.

        Examples:
                        >ANARKMD -FList_Switchar_Programs
                        >ANARKMD -FLI

     o REstore_anarkey

        Will restore ANARKEY input processing of DOS command lines.  Input
        processing can be disabled by the SUspend_anarkey_input_processing
        function.  Refer to the SUspend_anarkey_input_processing option's
        description for further details.

        There is no comparable function available in ANARKEY.  Once
        suspended, ANARKEY can only be restored by running ANARKMD with this
        option.

        Examples:
                        >ANARKMD -FRestore_anarkey
                        >ANARKMD -FRE

     o SHow_AKAs

        The list of defined AKAs will be displayed onscreen, just as if you
        had invoked the ANARKEY View-AKAs function by pressing the <Alt-F4>
        key.

        Examples:
                        >ANARKMD -Fshow_AKAs
                        >ANARKMD -Fsh

     o SUspend_anarkey

        Will suspend ANARKEY handling of input commands.  All ANARKEY
        features will be disabled indefinitely.  ANARKEY can be enabled
        again by running ANARKMD with the REstore_anarkey option.

        There is no comparable function available in ANARKEY itself.

        Examples:
                        >ANARKMD -FSuspend_Anarkey
                        >ANARKMD -FSU

     o TOggle_input_mode

        The TOggleInputMode function will cause ANARKMD to execute the
        ANARKEY Toggle-Insert/Overwrite-Mode function whose default key
        assignment is the <Ins> key.

        Examples:
                        >ANARKMD -Ftoggle_input_mode
                        >ANARKMD -Fto

     o UNdefine_all_AKAs

        All AKAs will be undefined.  This is the same as pressing the
        <Alt-X> key to invoke the ANARKEY Undefine-All-AKAs function.

        Examples:
                        >ANARKMD -FUndefine_all_AKAs
                        >ANARKMD -Fun

     o WRite_history_buffer:file_specification

        The contents of the history buffer are written to the
        file_specification disk file.  "file_specification" is any valid DOS
        filename, including an optional drive and/or path name.  There is
        no default value for file_specification; it must always be
        explicitly specified.  The file_specification is separated from the
        function description by a colon (:).  No spaces may exist on either
        side of the colon.

        This function executes the ANARKEY Write-History-Buffer-to-Disk
        function normally assigned to <Ctrl-W>.

        Support for the file_specification provides a new capability not
        found in the associated ANARKEY function.  ANARKEY will only write
        the disk file to ANARKEY.LOG in the root directory of the current
        drive.

        This capability can be very useful if you have a standard batch file
        you run whenever you powerdown your machine.  You could add a line
        to the batch file which saves the current history buffer and then
        run LOAD from the AUTOEXEC file to restore the buffer the next time
        you powerup.

        Examples:
                        >ANARKMD -Fwr:e:\usr\dave\log\buffer.log
                        >ANARKMD -Fwr:\log\savehist.buf
                        >:whb anarkmd -fwr:c:\anarkey.log
                        anarkmd -fwr:%1         <--- As in a batch file


   -Pn          -- ANARKEY Process Number

   The -Pn option is used to inform ANARKMD of ANARKEY's installation
   process number.  This option is identical to the -P option available on
   the ANARKEY installation line.  Please refer to the "ANARKEY User Manual"
   for details about when to use this option.

   The -P option will only be required in extremely rare instances.  If you
   installed ANARKEY without it, you will not need to use it for ANARKMD
   either.

   Examples:
                        >ANARKMD -FToggle_Input_Mode -P14
                        >ANARKMD -p3 -Fun


Executing an Entire Input Line
------------------------------
   As mentioned, ANARKMD can also be used to execute an entire input line.
This capability is most useful when used in batch files as it allows you to
execute multiple-command lines and AKAs within them.

   To have ANARKMD execute an input line, simple specify the line on the
ANARKMD command line.  Any valid DOS input line may be entered.  If ANARKEY
is installed, any valid ANARKEY input line is also allowable.  This means
the line can contain multiple commands and AKAs and be up to 255 characters
long.  The line will be executed just as if it had been entered at the DOS
command prompt.

   Some sample command lines follow.

                ANARKMD dir
                ANARKMD aka;edit file.x;aka2
                ANARKMD aka2 file1 file2 file3

   If the line contains DOS redirection characters >, >> or < or the pipe
operator |, bracket the entire line with double quotes (").

                ANARKMD "dir >dir.log"
                ANARKMD "aka file1 | more;aka2"

   As part of the process of executing a line, ANARKMD creates a temporary
disk file.  By default, the file will be written to the current directory of
the current drive.  The temporary file can be written somewhere else by
defining an environment variable called "ANARTMP".  ANARTMP should be set to
the drive and/or directory to which the temporary file should be written.
The temporary file is always deleted before ANARKMD terminates.

   For example, the following environment variable definitions would
instruct ANARKMD to store its temporary file in a specific location:

                >SET ANARTMP=g:
                >SET ANARTMP=c:\temp\
                >SET ANARTMP=a:/etc



                          Comments and Suggestions
                          ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning ANARKMD and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## CONVERT.DOC

{% raw %}
```








                                    CONVERT
                        The Anarkey AKA Conversion Utility
                                  User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                               by Steven Calwas
                              All rights reserved















                                Introduction
                                ------------

   CONVERT will translate alias and synonym definitions of other command-
line editors into an ANARKEY AKA-compatible format.  The resulting file can
then be used as input to LOAD which will pass the list of AKA definitions to
ANARKEY.  Thus, if you have accumulated a list of aliases and synonyms for
another command-line editor, CONVERT can help make the transition to ANARKEY
a smooth and painless experience.

   CONVERT can process alias and synonym definitions for the following
command-line editors:

                                -- CED
                                -- PCED
                                -- DOSEDIT

   Note: Further editing may be required on some of the converted
definitions, especially PCED definitions, before they may be used as input
to LOAD.



                               Getting Started
                               ---------------

   CONVERT command-line syntax is:

        CONVERT -type input_file [output_file]

   The type argument indicates the format of the definitions to be
converted, for example, whether they are CED-compatible synonyms or DOSEDIT
aliases.  The type may be specified anywhere on the command line and must be
immediately preceded by a dash (-) character.  It may be in upper or
lowercase.  The supported type arguments are:

                    -C      -- convert CED synonyms
                    -D      -- convert DOSEDIT aliases
                    -P      -- convert PCED synonyms

   Input_file specifies the disk file containing the original alias or
synonym definitions.  The file's name may include an optional drive and path
specification.

   Output_file specifies the disk file to where the converted AKA-compatible
definitions should be written.  The output_file name may contain an optional
drive and path specification.  Following creation, this file can be used as
input to LOAD.  (Refer to the "LOAD User Manual" for instructions on using
LOAD.)

   The output_file argument is optional.  If output_file is not specified,
CONVERT will write the AKA-compatible definitions to the file ANARKEY.AKA in
the current directory of the current drive.

   Sample CONVERT command lines are:

         CONVERT -c syn.def anarkey.cfg
         CONVERT -d dosedit.ali
         CONVERT -p pced.syn c:\bin\anarkey.syn

   In the first example, the CED synonyms (specified by the -C type
argument) contained in the file SYN.DEF will be converted and saved to a
file called ANARKEY.CFG.

   The second example translates the DOSEDIT definitions (-D) in DOSEDIT.ALI
and writes the converted aliases to the default output file ANARKEY.AKA.

   Finally, the PCED definitions in PCED.SYN are converted and written to
the file C:\BIN\ANARKEY.SYN.



                        Converting DOSEDIT Aliases
                        --------------------------

   CONVERT will successfully translate 100% of the definitions contained in
a DOSEDIT alias file.  No further editing will be required on the output
file; it may be fed immediately as input to LOAD.

   DOSEDIT users would benefit immensely by becoming familiar with the
additional power available in ANARKEY AKAs.  The capabilities to pass
parameters to AKAs and to create AKAs consisting of multiple commands should
reduce your editing time significantly.  The many other powerful features of
ANARKEY contribute even further to make it an attractive alternative.

   Welcome to ANARKEY!



                       Converting CED and PCED Synonyms
                       --------------------------------

   CONVERT will perform most of the grunt editing work required to translate
CED and PCED synonyms to an ANARKEY-compatible format.

   However, while all synonyms will be translated to a valid ANARKEY format,
the resulting AKA will not always be the exact equivalent to the original
synonym.  This is especially true of converted PCED synonyms.  Some manual
touch-up will be required on these definitions to complete the conversion.
The types of definitions requiring touch-up will be pointed out as this
discussion unfolds.

   CONVERT recognizes and processes the following CED/PCED commands:

                                CHAINCH
                                PARAMCH
                                SYN
                                USERSYN

   All other commands in the CED or PCED file are ignored by CONVERT.

CHAINCH Commands
----------------
   By default, CED and PCED use the caret(^) character to separate multiple
commands.  When CONVERT encounters this character in a synonym substitution
string, it will replace it with the ANARKEY command-separator character,
semicolon (;).

   If a CHAINCH command is encountered that changes the separator character,
CONVERT will remember the new separator and replace occurrences of it with
semicolons.

PARAMCH Commands
----------------
   PARAMCH commands are handled in a manner similar to CHAINCH commands.

   By default, CED and PCED recognize the start of a parameter field by the
percent sign (%).  Since ANARKEY uses the same character for this purpose,
no conversion is normally required.

   However, the parameter-field character may be changed in CED/PCED by the
PARAMCH command.  If PARAMCH changes the parameter-field character, CONVERT
will remember the new character and replace all instances of it with percent
signs.

SYN and USERSYN Commands
------------------------
   One major difference between CED/PCED and ANARKEY is that ANARKEY does
not differentiate between input requests made by the primary command
processor and those made by a user program or secondary shell.  In ANARKEY,
all commands are stored in the same history buffer and all AKA definitions
are available at any time.

   Because of this, CONVERT treats SYN and USERSYN commands identically.  On
the one hand, this saves you from having to define the same synonym twice,
once for each environment.  On the other hand, it means you will have to
rename any synonym names that differ only in the context of their use.  As
an example, assume the following CED synonyms:

                SYN     d       dir
                USERSYN d       dir /w

   CONVERT will translate these definitions to:

                :d      dir
                :d      dir /w

   In this case, where two AKA definitions use the same AKA word, the second
definition would replace the first when LOAD processed the file.

Other Considerations
--------------------
   Additional modifications besides the translation of command-separator and
parameter-specification characters may occur during conversion.  For
example, if the converted file is a PCED configuration file (-P), any
asterisk characters (*) in the synonym name are removed.  Also, if the
substitution string is bracketed by special characters (for example,
quotes), they are removed.

   Note: PCALL and PCED's '*' operator are not necessary in ANARKEY.  A
similar (and more powerful and elegant) functionality is provided by the
character-matching history buffer retrieval method.  Refer to the "ANARKEY
User Manual" for further information.

   Because the '*' operator is not necessary, many of the synonyms
containing it may no longer be of any use.  For example, a synonym such as:

                SYN     L*ONGNAME       LONGNAME

is nearly superfluous in ANARKEY.  Eliminating such definitions will reduce
the amount of space ANARKEY will require for AKA storage.

   ANARKEY does not support nested AKAs and CONVERT does not look for nested
synonyms in the input file.  As an example, assume the following nested
synonym definitions:

                SYN     d       dir
                SYN     dd      d^pause^d

   CED/PCED would expand the "dd" synonym to "dir^pause^dir."  CONVERT will
not take the nesting action into account during translation and, thus, the
resulting AKA definitions would be:

                :d      dir
                :dd     d;pause;d

   The removal of asterisks from synonym names and ignorance of nested
definitions will often result in an AKA definition that is not equivalent to
its PCED original.  It is suggested that you examine the translated AKA
definitions and manually perform any necessary modifications to complete the
conversion.

   After CONVERT has finished its job and any touch-up is done, the file may
be processed by LOAD which will pass the converted AKA definitions to
ANARKEY.

   To all CED and PCED users, welcome to the world of ANARKEY!



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning CONVERT and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## FASTART.DOC

{% raw %}
```


                                  ANARKEY
                            Quick-Start Tutorial
                            --------------------

   ANARKEY offers many powerful features that you will find extremely
helpful when entering DOS command lines.  However, it is not necessary to
understand all of ANARKEY's powers before you begin to use it.  This
introductory tutorial will get you started using the basic ANARKEY features
immediately.  As you become familiar with them, additional information can
be found in the "ANARKEY User Manual."

   First, simply execute the ANARKEY.COM program file from the DOS command
prompt as you would any other program.  A sign-on message will appear and
you will be sitting at a new command prompt.  Everything will appear normal
except now the ANARKEY features are available for your use.

   One of ANARKEY's most useful features is its editing facility.  To
demonstrate this, enter the following line at the command prompt:

                      >echo This is an ANARCHY test_

   The underscore in the above line shows the current cursor position at the
end of the line.  In the sample, the word ANARKEY is misspelled (sort of).
We wish to change ANARCHY to ANARKEY.

   To accomplish this, the <Left-Arrow> key can be pressed to move the
cursor left until it is under the first character we wish to modify.  Go
ahead and do this now.  Notice that moving the cursor does not delete
characters as it backtracks through the line.

   The line, with its cursor position now under the 'C', should look like
this:

                      >echo This is an ANARCHY test
                                           -

   In addition to the <Left-Arrow> key moving the cursor left one character,
the <Right-Arrow> key will move the cursor right one character.  Also, the
<Home> key will move the cursor to the beginning of the line and pressing
the <End> key will send the cursor to the end of the line.  Experiment
moving the cursor with the <Left> and <Right> arrow keys and the <Home> and
<End> keys.  Positioning the cursor in this way has no effect on the
contents of the command line, so you can play with them all you like.

   After you have a feel for positioning the cursor, reset the cursor so it
is under the 'C' character in ANARCHY.  We'll now complete the editing
operation we originally started out doing - changing ANARCHY to ANARKEY.

   When characters are typed on a line, they are either "inserted" into
the line or they "overwrite" the current character.  When a character is
inserted, any characters to the right of the cursor are shifted over to make
room for the new character.  When a character is overwritten, the new
character replaces the character at the cursor position; no shift occurs.

   Whether a character will be inserted or overwritten is determined by the
"mode" ANARKEY is in, either insert mode or overwrite mode.  When first
installed, ANARKEY is in insert mode.  Thus any characters typed will be
inserted into the line and the remainder of the line will be shifted to make
room for them.

   Verify this on the sample line by entering the single character 'K'.  The
command line and cursor position should now look like this:

                      >echo This is an ANARKCHY test
                                            -

   ANARKEY can be placed in overwrite mode by pressing the <Ins> key.  Do so
now.

   When in overwrite mode, the cursor shape changes from an underscore to a
block shape.  That is how you can tell which mode you are in; insert mode
has an underscore cursor and overwrite mode has a block cursor.

   You can return to insert mode by pressing the <Ins> key again.  The <Ins>
key toggles the editing mode between insert and overwrite.  The cursor shape
will always remind you which mode you're in.

   Set the editing mode back to overwrite (block cursor) and type an 'E'
character.  The 'E' will overwrite the 'C' under the cursor and advance the
cursor to the next character.  The command line should now look like this:

                      >echo This is an ANARKEHY test
                                             -

   The cursor shown above is an underscore, but your screen cursor will be a
block.  Press the <Ins> key to toggle back into insert mode so that the
screen display will match our example.

   In addition to being inserted, characters may also be deleted by pressing
the <Del> key.  When the <Del> key is pressed, the character under the
cursor is removed from the line and any characters to the right are shifted
over to fill the vacated space.

   Press the <Del> key with the cursor under the character 'H'.  The 'H'
will be deleted and the remaining characters shifted over one space.  The
line will look like this:

                      >echo This is an ANARKEY test
                                             -

   The <Backspace> key can also be used to delete characters from the line.
<Backspace> differs from the <Del> key in that it will remove the character
TO THE LEFT of the cursor position and move the cursor left one space.

   Experiment with the editing keys you've learned so far.  They are:

                <Left-Arrow>    Move cursor left one character
                <Right-Arrow>   Move cursor right one character
                <Home>          Move cursor to beginning of line
                <End>           Move cursor to end of line
                <Ins>           Toggle between insert and overwrite modes
                <Del>           Delete character under cursor
                <Backspace>     Delete character to left of cursor

   When you are comfortable with the editing keys, enter the original
example line above and press <Enter>.  The cursor may be positioned anywhere
on the line when <Enter> is pressed; the entire line will be accepted.  The
ECHO command we just entered will be executed and the cursor will be sitting
at a new command prompt.  You should see the following on your screen:

                      >echo This is an ANARKEY test
                      This is an ANARKEY test

                      >_

   ANARKEY "saves" all the commands you enter.  A list of the saved commands
can be displayed onscreen by pressing the <F4> key.  Do so now to show that
ANARKEY has saved the command we just entered.  Your screen should look like
this:

                      >
                      echo This is an ANARKEY test

                      >_

   Enter and execute the following commands:

                      >dir *.*
                      >type read.me
                      >dir \*.bat

   Now press the <F4> key to verify that ANARKEY has saved each of the
commands.  Your screen should look like this:

                      >
                      echo This is an ANARKEY test
                      dir *.*
                      type read.me
                      dir \*.bat

                      >_

   In addition to saving your commands, ANARKEY allows you to retrieve them
for editing and re-execution.  Often retrieving a command will be much
easier than retyping it.

   Commands can be retrieved by pressing the <Up-Arrow> and <Down-Arrow>
keys.  These keys retrieve commands from the saved list sequentially.

   Press the <Up> and <Down> arrow keys a few times and you will see how
this is done.

   An easier way to retrieve commands is available by using ANARKEY's
command completion feature.  Start with a blank command line and enter the
first character of the command you wish to retrieve.  For example, say you
wish to retrieve the ECHO command we started this tutorial with.  Simply
enter the character 'e' on the command line (case does not matter).  The
command line should look like this:

                      >e_

   To "complete" the command, hit the <Tab> key.  ANARKEY will start from
the bottom of the saved-command list and search for the first command that
begins with the character 'e'.  When it finds one, it retrieves the command
and enters it on the command line, thereby completing the command for you.
Given our example, the command line would now contain:

                      >echo This is an ANARKEY test
                        -

   The completion operation required only two keystrokes ('e' and <Tab>)
while a comparable <Up-Arrow> retrieval would have required four keypresses.
If the desired line was further up in the saved-command list, the completion
operation would have saved even more keystrokes.

   If the retrieved command was not the command you wanted, pressing <Tab>
again will instruct ANARKEY to find and retrieve another command that begins
with an 'e'.  If another command exists in the list, it will be retrieved
and entered on the command line.  <Tab> can be pressed any number of times
to cycle through all the commands that match.

   You can also specify more than one character of the desired command.  Any
number of characters can be specified, although one or two will usually be
enough.

   Once a command has been retrieved, it can be modified using the editing
facilities described earlier.  When the command is ready for execution,
simply press <Enter>.

   Commands are not the only thing ANARKEY will complete.  Directory and
file names can also be completed.  This is done by pressing the <Tab> key,
same as when completing commands.  ANARKEY is smart enough to know what type
of completion you want and will go ahead and do it automatically.

   As an example, say you wish to move to a directory called \GLOBAL.  Enter
the following command line:

                      >cd\g_

   Only the first character of the directory is needed (you can enter more
if you want, but there is no need).  Then press the <Tab> key.  ANARKEY will
determine that you want to complete the name of a directory and go ahead and
do it, entering the name on the command line.  The line will now look like
this:

                      >cd\global
                           -

   If there were several directories that began with 'G', ANARKEY may choose
one of them for its completion.  If ANARKEY completes the name with an
undesired name, simply continue pressing <Tab>.  ANARKEY will cycle through
all the directories beginning with the letter 'G'.  Eventually, it will
complete the one you're looking for.

   Notice that the cursor position does not change after a name completion.

   You can now press <Enter> to execute the command.

   To continue this example, say you really want to go to the directory
called \GLOBAL\PROGS.  Assume we have just completed the \GLOBAL portion and
the cursor is sitting under the first 'l' in 'global' as shown above.  Now
press the '\' key.  The command will become:

                      >cd\global\_

   Notice that the cursor position automatically moved to the end of the
directory name before entering the backslash(\) character.  This automatic
cursor positioning will occur whenever you are completing directory or file
names and you press a key that cannot be a part of the name, such as the
backslash, space or slash(/) characters.  The character will be appended to
the end of the completed name automatically.

   We can now complete the PROGS portion of the command line by entering a
'p' and pressing <Tab>.  The final command line is:

                      >cd\global\progs
                                  -

   The command can be executed by pressing <Enter>.

   File names can be completed in the same manner.  For example, say you
wish to copy a file called LETTER.TXT to drive A:.  Enter the following line
and press <Tab>:

                      >copy l_

   ANARKEY knows you want to complete a file name and does so automatically
so that the command line will now look like this:

                      >copy letter.txt
                             -

   To specify drive A:, simply press <Space>.  This will cause the cursor
position to automatically move to the end of the completed file name and
enter a space on the line.  Then type in the 'a:' portion.  Pressing <Enter>
will execute the command.  The final line will look like:

                      >copy letter.txt a:_

   Not only will the <Tab> key complete directory and file names, but it
will complete program names, too.  To do so, the program file must be in the
current directory.  For example, say you wish to execute a program called
EDIT which is stored in the current directory.  At a fresh command prompt,
enter an 'e' and press <Tab>.  ANARKEY is smart enough to know that a
program name completion is called for and will perform the appropriate
completion.

   There are occasions when it is necessary to modify an environment
variable's value.  This often occurs when a slightly different PATH value is
required.  The painstaking method of re-entering the entire value is not
necessary with ANARKEY.  ANARKEY will enter any environment variable's value
on the command line for you.  You can then edit it to the desired value
before executing/saving it.

   As an example, say you want to modify the value of the PATH environment
variable.  Simply enter the following portion of the line and press (what
else?) the <Tab> key:

                      >set p_

   ANARKEY will determine that you wish to complete an environment variable
automatically.  It will enter the name of the variable and its current value
on the command line.  The cursor will be positioned under the first
character of the variable's value.  Thus, the command line may look like
this:

                      >set path=c:\;c:\dos;c:\global;c:\bin\programs
                                -

   If more than one environment variable began with a 'p', each could be
retrieved and entered on the command line by repeated pressings of <Tab>.

   The PATH and PROMPT environment variables are special in that they do not
require that they be defined with a SET command.  If SET is not specified on
the command line then the entire environment variable's name must be spelled
out before pressing the <Tab> key.  Thus, the following would have to be
entered:

                      >path_

   The <Tab> key can now be pressed to retrieve the value of the PATH
variable.

   You have probably noticed that the <Tab> key does a lot of things.  It
will complete commands, names of directories, files and programs and even
environment variables.  Since one key does all this, ANARKEY is extremely
easy to learn and use.

   ANARKEY will correctly determine the appropriate completion type 75% to
90% of the time.  Occasionally, ANARKEY will make a mistake and think that
you want to complete something, say a command, when what you really want to
complete is a program name.  This is not a problem.  Simply continue to
press the <Tab> key.  Once ANARKEY has finished completing all matching
command lines, it will stop and think "Gee, I've cycled through all the
command completions and he or she still wants more.  They must want to
complete something other than a command."  It will then determine what the
most-likely type of completion is and perform it.  In the few cases when a
second choice such as this is needed, ANARKEY will make the correct
decision.

   You are now able to use the basic features of ANARKEY.  With this
knowledge, you can start using ANARKEY productively right now.

   However, this tutorial was meant to get you started quickly and only
touches the surface of ANARKEY's full capabilities.  Much more is available.
If you are interested in learning about the other powerful ANARKEY features,
read the "ANARKEY User Manual."



                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER
```
{% endraw %}

## LOAD.DOC

{% raw %}
```








                                      LOAD
                               The Anarkey Loader
                                   User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                                 Steven Calwas
                              All rights reserved

















                               Introduction
                               ------------

   LOAD will read the contents of an ASCII text file and store each line,
unexecuted, into the ANARKEY history buffer.

   Although "regular" command lines are not executed before being stored,
lines containing AKA definitions ARE processed as though they had been
entered on the command line.  In other words, the AKA is defined.  UNIX
switchar program names are also processed.  (The processing of an AKA or
UNIX program definition can be suppress by specifying the -D option on the
LOAD command line.  The -D option is explained later in this manual.)

   Once ANARKEY is installed, LOAD may be executed at any time and any
number of times.  It will probably be useful to run LOAD immediately after
installing ANARKEY to initialize your starting environment.  For example,
you may define any AKAs and restore the contents of the history buffer from
the previous computer session.  Later, a switch in tasks may warrant the use
of a different set of AKAs.  LOAD can be run again to read and define these
new definitions.
  


                             Loading a Disk File
                             -------------------

   ANARKEY must already be installed in order for LOAD to store lines into
its history buffer.  If ANARKEY is not installed, LOAD will display an error
message and halt execution.

   NOTE: If invoked from a multiple-command input line or AKA, LOAD must be
the very last command in the line.

   LOAD syntax is:

        LOAD [-options] filename [filename...]

   If you invoke LOAD with no arguments, a short usage message will be
displayed.

   Normally, one or more file names will be specified on the LOAD command
line.  Each file specification may contain the DOS wildcard characters '*'
and '?'.  LOAD will perform the wildcard expansion and process each matching
file in turn.

   Each file should contain standard ASCII text characters.  LOAD will read
one line at a time from the file.  Blank lines and lines whose first word is
"REM" are ignored.  Otherwise, the line is stored in the history buffer,
unexecuted.  If there is not enough room in the buffer to store the line,
lines are removed from the top of the buffer to make room.  (This operation
is explained in detail in the "ANARKEY User Manual.")

   If the line is an AKA definition (specified by a colon in the first
character position), it will be processed and added to the list of AKAs (or
removed from the list if it is an un-define).  If there is not enough
available AKA space to store the definition, LOAD will beep and display an
error message.

   Likewise, a UNIX switchar program name (specified by a single or double
exclamation point) will be processed.  Provided there is enough room to
store the name in the UNIX buffer, it will be saved.  If there is not enough
room, LOAD will beep and display an error message.  If the program name is
to be removed from the buffer, LOAD will do so.

   Lines longer than 255 characters and lines containing individual commands
longer than 127 characters will be rejected by LOAD.  An error message
stating the nature of the problem will be displayed and the offending line
will then be discarded.  LOAD will continue reading any remaining lines in
the file.

   LOAD assumes that the multiple-commands-per-line feature is active in all
processed lines unless the line contains a SET, PATH or PROMPT command.  If
one of these commands is encountered, LOAD handles it in the same manner as
ANARKEY does, i.e. the remainder of the line is considered a single command.
LOAD also assumes that SET, PATH and PROMPT are not assigned to an AKA, for
example:

                              :S      SET



                           Command-Line Options
                           --------------------

   Options may appear anywhere on the command line.  Each must be
immediately preceded by a dash (-) character.  Options may be in upper or
lower case.  The supported options are detailed in the remainder of this
section.


Suppress Processing of AKA and UNIX Definitions
-----------------------------------------------

        -D      -- Do Not Process AKA and UNIX Definitions

   The -D option instructs LOAD to not process any AKA or UNIX definitions
it encounters in the loaded text file(s).  When -D is specified, AKA and
UNIX definitions will not be stored in the AKA, UNIX or history buffers.

   This suppression is useful when loading files which may contain some AKA
or UNIX definitions that were temporarily defined, but are no longer
desirable.  Such instances may occur when loading a saved history-buffer log
file.


Calculating Required AKA and Switchar Space
-------------------------------------------

        -M      -- Display AKA and Switchar Memory Requirements

   When -M is included on the command line, LOAD will read the contents of
each specified file and accumulate the number of characters taken up by AKA
and UNIX switchar definitions.  The file's contents are not loaded into the
history buffer, nor are the AKA or switchar definitions processed.

   After all of the files have been scanned, LOAD will display the total
amount of space the defined AKAs will require.  This value can then be used
to allocate space for AKAs during ANARKEY installation (see the -A option in
the "ANARKEY User Manual").

   If switchar definitions require memory, LOAD will display the total
amount needed.  If there are no switchar definitions, no message will be
displayed.

   LOAD does not keep track of AKAs or switchar programs that are defined
more than once nor AKA un-definitions.  Any command read from the disk file
that begins with the AKA definition character (colon, ':') or UNIX switchar
character (single exclamation point, '!') is added to the accumulated total.
Thus, if a disk file contained the following definitions:

               :define         rem This is an AKA definition
               :define         rem A new substitution string
               :define
               !abc
               !abc

LOAD would include the lengths of all five lines in its total, even though
the net result will require no AKA space and only four switchar characters.
(The above AKA definitions require no space because the second definition
replaces the first one and the third "definition" undefines it completely,
leaving nothing defined.)

   ANARKEY does not have to be installed to use LOAD with the -M option.


Specifying the ANARKEY Process Number
-------------------------------------

        -Pn     -- ANARKEY Process Number

   This option is identical to the -P option available on the ANARKEY
installation line.  Please refer to the "ANARKEY User Manual" for details
about when to use this option.

   The -P option will only be required in extremely rare instances.  If you
installed ANARKEY without it, you will not need to use it for LOAD either.


Suppressing Run-Time Messages
-----------------------------

        -Q      -- Run in Quiet Mode

   When LOAD is running in quiet mode, informational messages, such as the
name of the file being processed, are suppressed.  Error messages will still
be displayed.



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning LOAD and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```



                        ANARKEY 3.00 Update Information
                        -------------------------------


   Welcome to ANARKEY Version 3.00.


   This document is to inform current ANARKEY users of the new features and
enhancements in version 3.00.  With this information, upgrading to the new
release will be a quick and easy experience.

   All of the features explained here are also included in the various
manuals contained in the ANARKEY distribution package.  New ANARKEY users
are encouraged to read the FASTART.DOC file and the other manuals so that
they will be able to use all the powerful ANARKEY features to their fullest
capabilities.



                                ANARKEY 3.00
                                ------------

Support for Expanded Memory
---------------------------
   ANARKEY now supports the Lotus-Intel-Microsoft Expanded Memory
Specification commonly referred to as LIM EMS.  All versions of the LIM spec
are supported, including versions 3.2 and 4.0.

   When using expanded memory, ANARKEY will store its history buffer, AKA
definitions and most of its code in expanded memory.  ANARKEY uses less than
1000 bytes of conventional memory, i.e. memory below 640K, when using
expanded memory and there is no noticeable degradation in response time,
even on original 4.77 MHz PC's.

   To have ANARKEY use expanded memory, simply add a -E option to your
normal installation line.

   In conjunction with expanded memory support, the -M option which displays
ANARKEY memory usage without actually installing the program has been
enhanced to include expanded memory information.  This can be used to
optimize your memory consumption when configuring history and AKA buffer
sizes.

   The "Installation Options" section of the "ANARKEY User Manual" describes
the -E and enhanced -M options.
 

The Mega-Key, All-in-One Completion
-----------------------------------
   ANARKEY provides a function which combines the operations of the
following functions in a single key:

          Find-History-Buffer-Match-and-Edit      <F5>, <Ctrl-K>
          Complete-Directory-Name                 <F7>, <Ctrl-D>
          Complete-File-or-Program-Name           <F8>, <Ctrl-F>
          Retrieve-Environment-Variable           <F9>, <Ctrl-E>

   The name of this combined function is Mega-Completion because it performs
all of the above completions in a single function.  Mega-Completion analyzes
your command line, determines the type of completion you are most-likely
attempting and performs it for you automatically.  You do not need to tell
ANARKEY what to complete.  Whether it's a file name, environment variable,
directory name or a line retrieved from the history buffer, ANARKEY will
figure that out itself and do it!

   The keystroke assigned to the Mega-Completion function is referred to as
the "Mega-Key."

   Among its advantages, the Mega-Key will save you from having to remember
all the keys associated with each of the individual functions.  Simply hit
the Mega-Key no matter what you want to do and ANARKEY will do the rest.

   By default, the Mega-Completion function is mapped to the <Tab> key.  Of
course, it can be reassigned with ANARKED.

   <Tab>              -- Mega-Completion
        Mega-Completion analyzes the current input line and determines which
        of the following completion operations would be most appropriate:

                      Find-History-Buffer-Match-and-Edit
                      Complete-Directory-Name
                      Complete-File-or-Program-Name
                      Retrieve-Environment-Variable

        It then executes the operation it evaluates to be the most likely.

        Mega-Completion can be invoked repeatedly to have it work down its
        list of likely operations.  For example, Mega-Completion may
        determine that a directory name completion is most called for.  In
        this case it will first cycle through all matching directory names,
        just as if you had repeatedly invoked Complete-Directory-Name.
        After finishing that cycle, its analysis may conclude that the next
        most likely operation is a line completion.  Thus, subsequent
        invocations will search the history buffer for matching line
        completions, as though you were calling the Find-History-Buffer-
        Match-and-Edit function.  This kind of mega-cycling, "mega" because
        it is cycling through multiple functions rather than within a single
        function, can be continued until the desired completion is made.

   Mega-Completion will analyze the input line and perform the correct
completion operation an amazingly high percentage of the time.  But, of
course, nothing is perfect and you may occasionally have to cycle through a
few undesired completions before the Mega-Key retrieves the one you want.

   You can give the Mega-Key a clue about how you want the line completed by
prefacing the Mega-Completion call with one of the four functions it
performs.  For example, say you have entered one or two characters on the
input line and you would like to complete the line from one of the stored
lines in the history buffer.  You would like to use the Mega-Completion
function, but you are also, of course, in a hurry and want the Mega-Key to
make the correct completion as soon as possible.  Simply invoke the Find-
History-Buffer-Match-and-Edit function to retrieve the first matching
history buffer line.  Then press the Mega-Key.  Mega-Completion will take
the preceding line-completion operation as an instruction to perform line
completions over any other type of completion operation it may otherwise
determine to be appropriate.  It will pick up the history-buffer search from
the point where the last line-completion operation left off and continue
from there down its list of most-likely completions.  The Mega-Key will
operate in this manner whenever preceded by one of the four function
operations listed above.

   The Mega-Completion function is one more giant step toward a state of
total Anarkey, a state without keystrokes.

   Mega-Completion documentation can be found in the "ANARKEY User Manual"
in the section titled "The Mega-Key, All-in-One Completion."


Name Completion
---------------
   In the continuing quest to find the perfect name completion operation,
version 3.00 further tweaks the completing of file, program and directory
names.

   When a file, program or directory name (referred to simply as "name" in
the future) is completed by either the Mega-Key or one of the respective
completion functions, the cursor position will remain unchanged.  The list
of matching name completions can then be cycled through just as in previous
versions.

   During the cycling process, if you realize that there are many matching
completions to cycle through, you can give the matching operation additional
characters to use in its matching string by simply entering them at the
current cursor position.  For example, say you have entered the following
command:

                >edit a_

   The underscore character represents the current cursor position.  You now
begin a filename completion operation and ANARKEY begins cycling through all
the files that begin with the letter "a".  The input line may now look like
this:

                >edit anarkey.doc
                       -

   Notice that the cursor position remains unchanged, immediately following
the "a" character.  After one or two matches, you suddenly remember there
are 56 files that begin with the letter "a" and you don't want to cycle
through all of them.  You can give the completion operation a further clue
about the file you desire by simply entering additional characters of its
name.  Say the specific file you want is called "ABACUS.TXT".  Since you
have already entered the beginning "a", enter the "b" now.  The input line
will look like:

                >edit abnarkey.doc
                        -

if you are in insert mode.  If you are in overwrite mode, the "b" will
replace the "n".  In either case the cursor position is updated as shown
above.  Now you may either continue the completion operation or enter more
characters of the name.  If you continue completion, all the matching names
will now start with the characters "ab".  For example:

                >edit abacus.txt
                        -

   This method of name completion can be used to narrow the list of matching
names during the cycling operation.

   In many cases, additional arguments must be entered on the input line
following a completed name.  For these arguments to be entered in the
correct location on the line, the cursor position must be moved so it is
after the name.  ANARKEY supports this cursor positioning automatically.

   The cursor will move automatically to the end of the completed name when
any of the following characters are entered:

                     <SPACE> " * + , / : ; < = > ? \ |

   If the UNIX switchar character translations are active (via the -U
installation option explained later), entering a dash(-) character will also
move the cursor to the end of the completed name.  After moving to the end
of the name, the pressed keystroke will be entered into the line.

   This enhancement to the name completion operation should make it easier
than ever to complete file, program and directory names.

   The completion operation is explained in detail in the "ANARKEY User
Manual" under the heading "Name Completion Functions."


Environment Variable Completion
-------------------------------
   In previous versions, it was necessary to enter the entire environment
variable name before ANARKEY would retrieve its value and enter it on the
input line.  With version 3.00, environment variable names may be completed
and cycled through in the same manner as file and directory names.

   To have ANARKEY complete an environment variable name, simply enter the
SET command followed by zero(!) or more characters of the variable's name.
Then invoke the Retrieve-Environment-Variable function (<F9> or <Ctrl-E> or
the Mega-Key, <Tab>).  ANARKEY will search the list of environment variables
for a matching completion.  If it finds one, the rest of the variable's name
is entered on the input line followed by an equal sign and the variable's
current value.  The cursor will be placed immediately after the equal sign.
You may then edit the variable's name and value or, if the retrieved
variable is not the one you wanted, you can invoke the function again and
have it cycle through all the existing matching variables.

   Notes: At least one space must follow the SET command.  Also, name
completion cannot be done on the PATH or PROMPT variables unless they are
preceded on the input line by a SET command.  The current values of PATH and
PROMPT can be retrieved without a SET command by specifying their entire
name on the input line.

   The operation associated with the Retrieve-Environment-Variable function
is also done as part of the Mega-Completion operation.  Thus, it is not
necessary to explicitly tell ANARKEY it is dealing with environment
variables; simply press the Mega-Key and ANARKEY will figure that out by
itself!

   The Retrieve-Environment-Variable function is documented in the "ANARKEY
User Manual" under "Editing Environment Variables."


Display of History Buffer Contents
----------------------------------
   The contents of the history buffer may be displayed from the bottom of
the buffer to the top by invoking the Display-History-Buffer-from-Bottom
function.  The default key assignment for this function is <Ctrl-F4>.  The
contents of the history buffer will be displayed onscreen starting with the
last line in the buffer and backtracking to the first line.  Thus, the most
recently-entered lines will be displayed before older lines.  This is
particularly helpful when a large history buffer is utilized.

   The history buffer can still be displayed from the top to the bottom by
invoking the Display-History-Buffer-Contents function <F4>.

   The Display-History-Buffer-from-Bottom function is documented in the
"ANARKEY User Manual" under "History Buffer Functions."


UNIX Switchar Conventions
-------------------------
   The -U installation option which provides UNIX switchar conventions (i.e.
slashes(/) in path specifications and dashes(-) as switch designators) has
been significantly enhanced.  It now provides a complete environment where
ALL programs can be invoked using the UNIX conventions.

   As in version 2.00, the -U option specified at installation time will
cause ANARKEY to translate all slash characters to backslashes(\) and all
dashes to slashes.  The 'S' modifier can be used to convert only slashes and
leave dashes alone.

   What was lacking in v2.00 was a reasonable method of invoking programs
that already supported the UNIX conventions.  For example, if a program
already recognized the dash as the beginning of an option (or switch), it
was necessary in v2.00 to specify two consecutive dashes, which would then
be converted to a single dash by ANARKEY.

   Version 3.00 provides a method to indicate to ANARKEY those programs
which already support the UNIX switchar conventions.  Afterward, whenever
one of the programs is invoked, ANARKEY will suppress the switchar character
translations for that command.  This will prevent you from having to enter
the consecutive characters described above.

   ANARKEY stores the names of programs which use the UNIX conventions in an
area of memory that is allocated at installation time.  Along with the -U or
-US options, you may specify the size of the buffer.  The size must be
immediately after the 'U' or 'S' with no spaces between them.  For example,

                >anarkey -u100
                >anarkey -us75

   If a buffer size is not specified, ANARKEY will allocate a buffer large
enough to hold 25 characters.  If the -U or -US options are not specified on
the installation line, no space is allocated for the buffer.

   You tell ANARKEY which programs use UNIX conventions by entering the
program name on the command line prefaced with an exclamation point (!).
For example, to inform ANARKEY that the program "ANARKED" already recognizes
UNIX conventions and therefore do not perform the related conversions on its
command line, enter:

                >!anarked

   If there is not enough room to store the program name in the buffer,
ANARKEY will beep.  Otherwise, the name is saved and subsequent invocations
of ANARKED will not have their characters translated.

   Rather than specifying program names on the DOS command line, they may be
read in by LOAD.  For example, it will probably be most convenient to
accumulate a list of UNIX-style programs and save their names in a disk
file.  This file can then be loaded during system start-up using LOAD.
Remember, each of the lines in the disk file must begin with an exclamation
point.

   A list of the currently defined UNIX-style programs can be displayed by
invoking the Display-Switchar-Programs function.  This function is assigned
to the <Shift-F4> key by default.  ANARKED, the ANARKEY Keystroke Editor,
can be used to change this assignment if you wish.

   A program can be removed from the UNIX buffer by specifying its name on
the command line preceded by two (2) exclamation points.  For example, to
remove the "ANARKED" program from the buffer, enter:

                >!!anarked

   Instructions to ANARKEY to add or remove program names from the UNIX
buffer can also be specified in multiple-command lines and AKAs.

   This enhanced switchar system makes it possible to consistently use UNIX
conventions on any program you run.  It is much more comprehensive than the
SWITCHAR-type programs available that rely on an undocumented DOS function
to support UNIX conventions on internal DOS commands only.  Also, this
undocumented operating system function is not included in DOS 4.xx or the
DOS compatibility box of OS/2.  Thus, the ANARKEY method is not only the
most powerful method, but, in certain environments, it's the only way to go.


Sign-on Procedure for Unregistered Users
----------------------------------------
   The ANARKEY software package is now distributed in two forms: a
registered version and an unregistered version.

   Unregistered versions of ANARKEY require the user to go through a sign-on
procedure during installation.  This procedure displays a message informing
the user that the version of ANARKEY she or he is running is unregistered
and lists instructions on how to receive a registered version.  At the end
of the message, the user is prompted to enter an 8-digit number.  This
number must be entered correctly in order for ANARKEY to continue its
installation.

   All registered users receive a registered version of ANARKEY that does
not require this sign-on procedure.  A registered version of ANARKEY is sent
immediately to all people who send in their paid registration form.

   THE REGISTERED VERSION OF ANARKEY IS LICENSED TO THE SINGLE PERSON WHO
REGISTERED THE PROGRAM AND MAY NOT BE DISTRIBUTED IN ANY MANNER.  It is
unlawful to distribute the registered version of ANARKEY in any form.  Do
not, repeat, do NOT distribute the registered version anywhere.

   Please respect this distribution restriction as it protects your
interests in the software as well.  People who do not register the software
discourage the release of future updates.

   The unregistered sign-on procedure is also discussed in the "ANARKEY User
Manual" in the section "Getting Started."


New Signature Installation Procedure under DOS 2.x, 3.0
-------------------------------------------------------
   Of interest to software-internals fanatics: ANARKEY now installs its
program "signature" in the INT 2Fh (multiplex) interrupt for all versions of
DOS.  The signature is used to prevent multiple copies of ANARKEY from being
installed at the same time.

   Previous versions of ANARKEY when run under DOS 2.x or 3.0 would
appropriate an unused interrupt vector between 60h and 67h, inclusive, to
install the program signature.  When running under DOS 3.1 and later,
ANARKEY has always used INT 2Fh.

   The -P (ANARKEY Process Number) installation option is now available at
all times and is not ignored under DOS 2.x and 3.0.

   ANARKEY's internal installation procedure is documented in the "ANARKEY
Internals" section of the "ANARKEY User Manual."  (This information is only
provided for those interested in such matters; it is not necessary to read
or understand this area to effectively use ANARKEY.)  The -P option is
detailed in the "ANARKEY User Manual" under "Installation Options."



                                ANARKMD 3.00
                                ------------

   ANARKMD (pronounced "anar-command") is a new support program that will
invoke ANARKEY functions from the command line.  ANARKMD can be executed
from an AKA or batch file to execute ANARKEY functions without having to
press the necessary keystrokes yourself.  

   ANARKMD also supports two features the regular ANARKEY program does not:

        -- specification of a file name and location to which to write the
        history buffer contents.  ANARKEY will always write the history
        buffer to a file called "ANARKEY.LOG" in the root directory of the
        current drive.  If the Write-History-Buffer-Contents function is
        invoked through ANARKMD, the name and location of the file can be
        specified to any valid file specification.

        -- suspending and restoring ANARKEY processing.  By using ANARKMD,
        ANARKEY can be suspended indefinitely.  ANARKEY remains in memory,
        however, none of its features are available.  ANARKMD can then be
        used to restore ANARKEY processing.  These capabilities are not
        available in ANARKEY itself and are only possible through ANARKMD.

   In addition to these new capabilities, ANARKMD can be used to toggle the
input mode, clear or display the history buffer or defined AKAs and display
the list of switchar programs.

   ANARKMD is really two programs in one; in addition to executing an
ANARKEY function from the command line, ANARKMD can be used to execute an
AKA or multiple-command input line from within a batch file.  Since ANARKEY
is not active when processing a batch file, it was not possible to utilize
its features from batch files in previous versions.  ANARKMD now provides
this capability.

   Complete documentation on the use of ANARKMD can be found in the "ANARKMD
User Manual."



                                ANARKED 3.00
                                ------------

Carrying Over Key Assignments from an Earlier Version of ANARKEY
----------------------------------------------------------------
   The registered version of the ANARKEY software package includes a version
of ANARKED that makes upgrading from a previous version very easy.  The
registered ANARKED will allow you to carry over the key assignments of a
previous version (2.00 or later) of ANARKEY to the new release.  This will
save you from having to go through the entire key assignment operation when
you upgrade to a new version of ANARKEY.  Unregistered versions do not have
this capability so each function must be reassigned individually.  (If you
have been using ANARKEY for more than 30 days, it is time for you to
register the program.  You will be sent a registered version with the key-
carryover capability immediately upon receipt of your paid registration.)

   When upgrading, specify the -U option on the ANARKED command line.
ANARKED will prompt you for two input files:

        (1) the original ANARKEY file whose key assignments you wish to
            carry over and
        (2) the new release ANARKEY file to which you are upgrading.

   If both files are valid ANARKEY program files, the key assignments of the
old version will be transferred to the new version.

   If the new release includes new functions not supported in the earlier
version, ANARKED will remove any default key assignment to these new
functions so as to prevent any occurrence of a key being assigned to more
than one function.  ANARKED will display a list of these new functions in a
window when it begins execution.  The new functions can be assigned to a key
during your ANARKED session.

   The following new functions have been added to ANARKEY 3.00 and will
therefore be unassigned when transferring key assignments from version 2.00:

      Function Name                           Default Key Assignments
      -------------                           -----------------------
      Mega-Completion                         <Tab>
      Display-History-Buffer-from-Bottom      <Ctrl-F4>
      Display-Switchar-Programs               <Shift-F4>

   After transferring the key assignments to the new version, the normal
ANARKED operation continues and you may modify the configuration of the new
release further.  Be sure to save your changes when exiting ANARKED if you
are transferring key assignments from a previous release.

   The -U option is documented in the "Getting Started" section of the
"ANARKED User Manual."


Assigning an Already-Assigned Key to the Active Keystroke Field
---------------------------------------------------------------
   In previous versions, ANARKED would assign to the active keystroke field
a key which was already assigned to another ANARKEY function.  ANARKED would
automatically remove the original key assignment before assigning it to the
active field and would then emit a beep informing the user of what it had
done.

   When this occurs in version 3.00, ANARKED displays a window stating the
function name to which the key is currently assigned and asks the user if it
should remove the assignment.  Responding with a 'Y' (upper or lowercase) or
<Enter> key will remove the key from its current assignment and assign it to
the active keystroke field.  Pressing any other key will leave the key
assignment and the active keystroke field unchanged.
 


                                 LOAD 3.00
                                 ---------

Support for UNIX Switchar Programs
----------------------------------
   As mentioned in the section on the new support for "UNIX Switchar
Conventions," LOAD will recognize and process commands which begin with an
exclamation point(!) as UNIX switchar program definitions.  The -M option
which calculates the amount of storage required for AKA definitions has been
enhanced to include support for UNIX program definitions.

   LOAD support for UNIX program definitions is described in the "LOAD User
Manual."


Suppress Processing of AKA and UNIX Definitions
-----------------------------------------------
   A new command-line option (-D) has been added to LOAD which instructs
LOAD to not process any AKA or UNIX definitions it encounters in the loaded
text file(s).  When -D is specified, AKA and UNIX definitions will not be
stored in the AKA, UNIX or history buffers.

   This suppression is useful when loading files which may contain some AKA
or UNIX definitions that were temporarily defined, but are no longer
desired.  Such instances may occur when loading a saved history-buffer log
file.

   The -D option is also explained in the "LOAD User Manual" in the section
on "Command-Line Options."



   Please fill out the registration form and send it with your comments and
suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## ANARKED.DOC

{% raw %}
```








                                    ANARKED
                           The ANARKEY Keystroke Editor
                                  User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                               by Steven Calwas
                              All rights reserved











                               Introduction
                               ------------

   ANARKED is the ANARKEY keystroke editor.  It allows ANARKEY functions
to be reassigned to keystrokes other than their default assignments.  With
ANARKED, you can configure ANARKEY to perform like your word processor,
previous command-line editor, or own personal tastes.

   ANARKED is not a TSR (Terminate-and-Stay-Resident) program.  ANARKED
modifies the ANARKEY.COM disk file so that it will recognize the new
keystroke assignments.  ANARKEY does not have to be installed to run
ANARKED.  ANARKED will patch the ANARKEY.COM disk file, not the resident
program.  After running ANARKED, the new keystroke assignments will be
activated the next time you install ANARKEY.



                              Getting Started
                              ---------------

   Simply execute ANARKED from the DOS command line or from a batch file.
ANARKED will accept one optional command-line parameter.

        ANARKED [-U]

   Specify the -U option if you are upgrading from a previous version of
ANARKEY (2.00 or later) to a later release.  ANARKED will allow you to carry
over the key assignments of the earlier version to the new release.  This
will save you from having to go through the entire key assignment operation
each time you upgrade to a new version of ANARKEY.  The effects of
specifying the -U option are described a little later.

   Note: The -U option is supported only in the registered version of
ANARKED.  To receive a registered version, you must send in your paid
registration form contained in the file ORDERFRM.  A registered copy of the
entire ANARKEY software package will be sent to you immediately.

   When executed without the -U option, ANARKED will ask for the name and
location of the ANARKEY.COM program file you wish to configure.  When
executed under DOS version 3.00 and later, the default input file is
ANARKEY.COM located in the same directory and drive from which ANARKED was
executed.  If executed in an earlier version of DOS the default input file
will be ANARKEY.COM in the current directory of the current drive.
Whichever version of DOS you're running, the default input filename will be
displayed.  Pressing the <Enter> key will accept the default.  To specify a
different filename or location, type the file's drive, path and name
specification and then press <Enter>.

   ANARKED will check the input file to verify it is a valid ANARKEY program
file.  ANARKED will modify ANARKEY versions 2.00 or greater.  Earlier
versions of ANARKEY are not modifiable.  If the program file is found to be
invalid, an error message will appear and ANARKED will prompt for another
input file.

   When upgrading (-U option), ANARKED will prompt you for two input files:
(1) the original ANARKEY file whose key assignments you wish to carry over
and (2) the new release ANARKEY file to which you are upgrading.  If both
files are valid ANARKEY program files, the key assignments will be
transferred from the old version to the new.

   All default key assignments to functions supported in the new release but
not in the old version will be removed.  This is done to prevent any
occurrences of a key being assigned to more than one function.  All new
functions in a release will be documented in the UPDATE.DOC file included in
each ANARKEY distribution package.  If there are any new functions in the
new version, ANARKED will inform you by listing them in a window when the
program is first executed.

   After transferring key assignments, the normal ANARKED operation will
continue.

   Once all the required input files are specified, ANARKED will prompt for
the output file.  Any changes you make during the ANARKED session will be
stored in this output file.  By default, ANARKED will write the changes to
the specified input file.  Pressing <Enter> will accept the default.  If you
wish to save your changes to a different file, type in the desired file
specification with optional drive and path.

   After specifying valid input and output files, ANARKED will display its
main "command/keystroke window."



                      ANARKED Command/Keystroke Windows
                      ---------------------------------

   A "command/keystroke window" is a full-screen window which contains a
group of ANARKEY functions and their assigned keystrokes.  Since all of the
ANARKEY functions cannot fit onscreen at once, they are divided into several
windows.  Traversing through the windows is possible by pressing one of the
action keys described below.

   Each ANARKEY function is displayed on a single line.  On each line is a
function description and its keystroke invocations.  As displayed,
keystrokes are surrounded by < > characters, for example <F1>.  These
bracketing characters are not part of the keystroke invocation.  Any
keystroke invocation that is not currently assigned is displayed as "<>".

   An ANARKEY function may have a maximum of two keystrokes assigned to it.
For example, as shipped, the Find-History-Buffer-Match-and-Edit function is
invoked by pressing either the <F5> or <Ctrl-K> keys.  Both of these
keystrokes would share the line with the function description and would look
something like this:

             Find match and edit      <F5>            <Ctrl-K>

The Active Keystroke Field
--------------------------
   One keystroke invocation in the window will be displayed in inverse
video, meaning the characters are displayed on a bright background.  This
keystroke is the "active keystroke field."  Keystroke assignments are always
performed on the active keystroke field.

Action Keys
-----------
   There are seven "action" keys that, when pressed, cause ANARKED to
perform a special operation.  The seven action keys are:

                -- the arrow keys (Up, Down, Left and Right)
                -- <PgUp> and <PgDn>
                -- and <Esc>

   Pressing one of the arrow keys (Up, Down, Left or Right) will move the
active keystroke field in the specified direction.  These keys are used to
set the active field to any of the displayed keystroke invocations.

   All ANARKEY commands are modifiable with ANARKED, but, because they
cannot all fit onscreen at once, commands are divided into several display
windows.  Pressing the <PgUp> and <PgDn> keys will cycle through each of
these windows.

   Pressing the <Esc> key will activate the "ANARKED Action Menu."  From the
Action Menu you may perform special operations such as saving your changes,
assigning one of the action keys to a function or quitting the program.
Each Action Menu function is explained later in this manual.



                          Editing ANARKEY Keystrokes
                          --------------------------

Assigning New Keystrokes
------------------------
   Pressing any key (other than an action key) will immediately assign that
key to the active keystroke field.  As an example, to assign <F1> to the
active keystroke field, simply hit <F1>.

   This method makes it extremely easy to configure ANARKEY without the
confusing configuration files or installation programs required by many word
processors.

   Most of the keystroke combinations available on a keyboard may be
assigned to an ANARKEY function.  These include:

                 <Alt>  -sequences, like <Alt-F1>  and <Alt-A>,
                 <Ctrl> -sequences, like <Ctrl-F1> and <Ctrl-Z> and
                 <Shift>-sequences, like <Shift-F1>.

   Some keys, however, are reserved by DOS for special handling, for
example, <Ctrl-C> and <Ctrl-P>.  These DOS-reserved keystrokes may not be
assigned to an ANARKEY function.  If you attempt such an assignment, ANARKED
will refuse to carry out your request.

   Each particular keystroke may be assigned to a maximum of one ANARKEY
function.  Obviously, it would not make sense to have a key assigned to two
different functions.  If an attempt is made to assign a key to the active
keystroke field and that key is already assigned to another function,
ANARKED will display a window stating the function to which the key is
currently assigned and asking if you wish to remove it.  If you wish to
remove the current key assignment and assign the key to the active keystroke
field, press 'Y' or <Enter>.  Pressing any other key will leave the original
key assignment and active keystroke field unchanged.

Clearing Keystrokes
-------------------
   A particular keystroke invocation may be completely removed or cleared
from a function by pressing the <Ctrl-@> key when the field is the active
keystroke field.  Notice that you will have to hold down one of the <Shift>
keys to enter a <Ctrl-@> keystroke.  In case you forget this field-clearing
keystroke, the Action Menu (described below) can be used to perform the same
operation.

   NOTE: The TOPS local area network will not correctly handle the <Ctrl-@>
keystroke.  Either UNLOAD TOPS when running ANARKED or use the corresponding
Action Menu operation to remove keystroke assignments.  TOPS may also
interfere with the assignment of otherwise valid keystrokes.  If you have
any problems assigning a particular key, UNLOAD TOPS and try again.

An Editing Example
------------------
   As an example of editing a keystroke assignment, let's say you want to
configure the Delete-to-End-of-Line function so it will be executed every
time you press <F1>.

   First, use the <PgUp>/<PgDn> keys to display the window that contains the
Delete-to-End-of-Line function.  Then use the arrow keys to move the active
keystroke field to the key-field you wish to change.

   By default, Delete-to-End-of-Line is assigned the keys <Ctrl-End> and
<Ctrl-Y>.  Since a function may be assigned a maximum of two keystrokes, the
new <F1> assignment will have to replace one of these.  Decide which key to
replace and make it the active field by using the arrow keys.

   Finally, press the <F1> key.  <F1> will be immediately assigned to the
active keystroke field.  If <F1> had already been assigned to another
function, ANARKED would have automatically removed it and beeped to tell you
so.

   As another example, say you do not want any possibility of accidently
invoking the Clear-History-Buffer function.  You can, in effect, remove this
command from ANARKEY by clearing all keystrokes assigned to it via <Ctrl-@>.

   That's all there is to it!



                          The ANARKED Action Menu
                          -----------------------

   Operations other than keystroke assignments are performed by choosing a
selection from the Action Menu.  The Action Menu is activated by pressing
the <Esc> key.  Once active, the Action Menu provides the abilities to:

               -- save your editing changes and quit ANARKED,
               -- create a summary file of the ANARKEY
                  functions and their assigned keystrokes,
               -- assign one of the action keys to a function,
               -- clear the active keystroke field and
               -- quit ANARKED without saving your changes.

   The Action Menu's active operation is displayed in inverse video.
Pressing the Up and Down arrow keys will cycle the active operation through
the available choices.  Pressing <Enter> will execute the active operation.
Some operations are executed immediately, while others require additional
input before executing.  If additional input is required, ANARKED will
prompt you for it.  To exit the Action Menu, press <Esc>.

   Each Action Menu operation is explained below.

--- Save changes and quit
-------------------------
   This operation saves the current keystroke configuration to the output
file specified during startup.  Since ANARKED modifies the ANARKEY.COM disk
file, the new keystroke assignments will not take effect until the next time
ANARKEY is installed.

   After writing the output file, ANARKED terminates and you are returned to
the DOS command prompt.

--- Create summary list
-----------------------
   Executing this menu option will create a summary listing of ANARKEY
functions and their current keystroke assignments.  The listing may be saved
to a disk file or sent directly to a printer for use as a quick and handy
reference when first learning ANARKEY.  You will be prompted for the
summary's destination.

   To save the summary to a disk file, you may accept the displayed default
destination or enter a different file specification with optional drive and
path.  The default file spec will be the same as the output file you
specified at ANARKED startup, but with a ".SUM" extension.  For example, if
you specified the output file to be:

                        C:\BIN\ANARKEY.COM

then the default summary file will be:

                        C:\BIN\ANARKEY.SUM

   To accept the default, simply press <Enter> when prompted for the
destination.

   To send the summary information to a printer, enter "PRN" when prompted
for the destination.  The printer must be on-line and active BEFORE sending
anything to it.  Check and be sure this is the case before you attempt to
print or you may lose your current editing session.

   Pressing <F1> will abort the operation without creating a summary list.

   Tip: By defining an AKA that loads the summary file into your favorite
word processor or file-viewing program, an on-line help facility can be
created.  For example:

                    :help   editor c:\bin\anarkey.sum

--- Assign action key
---------------------
   The seven action keys (Up, Down, Left and Right arrow keys, <PgUp>,
<PgDn> and <Esc>) are used to execute special ANARKED operations.  To assign
one of these keys to an ANARKEY function requires going through this Action
Menu option.

   When this operation is chosen from the Action Menu, the next keystroke
will be directly assigned to the active keystroke field.  The keystroke will
not be interpreted by ANARKED.  Thus, pressing one of the action keys will
assign that key to the active field.  If the key was already assigned to a
function, ANARKED will beep to inform you it is removing the previous
assignment.

   Although this method is mainly used to assign one of the action keys, any
keystroke (except <F1>) will be assigned to the active keystroke field.

   Pressing <F1> will abort the operation without performing a keystroke
assignment.

--- Remove keystroke (<Ctrl-@>)
-------------------------------
   When this operation is chosen, the active keystroke field is cleared of
the keystroke currently assigned to it.

   This operation is equivalent to pressing <Ctrl-@> in a command/keystroke
window.  The Action Menu operation is provided in case you forget <Ctrl-@>
or if <Ctrl-@> is too difficult or not possible to enter.

--- Quit ANARKED without save
-----------------------------
   ANARKED will terminate immediately without saving your editing changes to
the output file.



                     All Keyboards are NOT Created Equal
                     -----------------------------------

   ANARKED will recognize as many keystrokes as your system's hardware and
firmware support.

   Some systems have enhanced keyboards containing <F11> and <F12> keys.
Unfortunately, the system BIOS on many of these machines will not recognize
the extra keys.  If the BIOS will not recognize a key then ANARKED will not
recognize it either.

   If your keyboard has <F11> and <F12> keys and ANARKED does not recognize
them, please do not assume there is a problem with ANARKED.  More likely the
fault lies with your machine's BIOS.

   Also, because ANARKEY must work in conjunction with so many other
programs, it must be extremely well-behaved.  This means it must get its
keyboard input from a level far-removed from your system's hardware.  Other
programs that do not need to be so well-behaved may be able to access
hardware directly.  Thus, these programs may be able to recognize certain
keystrokes, such as <F11>, that ANARKED cannot.  Again, the problem is not
due to some lack in ANARKED, but rather to the circumstances in which it
must operate.

   Please do not deluge me with bug reports about how ANARKED does not
recognize certain keystrokes.  If you truly happen to come upon a common
keystroke, for example, <Alt-F1>, that ANARKED does not accept, I would like
to know.  But if you're pressing your <F11> and <F12> keys and nothing is
happening, the problem lies elsewhere.



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning ANARKED and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## ANARKEY.DOC

{% raw %}
```








                                    ANARKEY
                                  User Manual


                                  Version 3.00





                   Anarchy : a state of being without rulers

                   Anarkey : a state of being without keystrokes














                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                            Copyright (C) 1988, 1989
                                by Steven Calwas
                               All rights reserved











                                Introduction
                                ------------

   ANARKEY is a command-line editor that will significantly reduce the
number of keystrokes you make when entering DOS commands.  Among its many
capabilities, ANARKEY supports:

        o  Command-line editing features comparable to those found in
           expensive word processors

        o  Storage and retrieval of past command lines

        o  Two methods of command line retrieval:
                1) sequential access
                2) character matching where you enter a portion of the
                line and have ANARKEY search through the buffer for a
                matching completion

        o  A text substitution capability called an AKA (often referred to
           as an "alias" or "synonym" in other command-line editors).  A
           utility program is included in the ANARKEY package that will
           convert the alias and synonym definitions of other editors to the
           equivalent ANARKEY format.  AKAs may even be executed from a
           batch file.

        o  Multiple commands per line (even from a batch file)

        o  A 255-character command line

        o  File name completion, including directory and program names

        o  Environment variable editing

        o  Configurable keystroke assignments

        o  Storing ANARKEY in expanded memory

        o  A Mega-Completion-Key that analyzes the input line, determines
           the type of completion operation you are attempting and does it
           for you automatically

        o  Writing the command-line history buffer to a disk file

        o  Loading the history buffer and AKA definitions from disk files at
           any time

        o  Comprehensive UNIX switchar conventions

        o  Invoking ANARKEY functions from a batch file

        o  And much more!


   ANARKEY is written 100% in assembly language for maximum efficiency in
memory usage and execution speed.  When installed with the default 500-
character history buffer, ANARKEY requires less than 9500 bytes of memory.
A smaller buffer may be used, reducing memory usage even further.  If
expanded memory is used, ANARKEY requires only 992 bytes of conventional
memory.

   ANARKEY is distributed as shareware.  Each user is given the opportunity
to evaluate the complete ANARKEY software package for 30 days with no
obligation.  If, after the evaluation period, you find ANARKEY to be a
useful tool, you must register your copy with the author, Steven Calwas.

   ANARKEY is distributed in two forms: a registered version and an
unregistered version.  The unregistered version is a fully-functional
program that contains all the features found in the registered version.
However, the unregistered version requires the user to go through an
installation procedure whenever ANARKEY is executed.  The installation
procedure requires the user to enter a random 8-digit number before ANARKEY
will install.  The registered version does not have this installation
procedure.

   ANARKEY registration is only $25, plus $3.00 shipping and handling.  A
copy of the registered version will be sent to all registered users upon
receipt of their paid registration form.  Registration also entitles a
person to technical support and future releases at a minimal price.
Considering the large number of times you will be using ANARKEY during each
computer session, this is an outstanding value.

   An ANARKEY registration form is included in the distribution package in
the file ORDERFRM.  Please take the time to fill it out and return it.  If
you would like high-quality software to continue to be made available on a
try-first basis and for a reasonable cost, it is up to YOU to support such
programs.  Please do.



                            A Quick Introduction
                            --------------------

   This section will outline some of the powerful capabilities ANARKEY
provides.  It should give you an idea of whether or not you wish to examine
ANARKEY in more depth.  All of the functions presented here are discussed in
detail in subsequent sections of the manual.

   ANARKEY is shipped in a default configuration, however, a very large
number of its characteristics are configurable to your specifications.  Some
of the configurable characteristics are:

        o  ANARKEY keystrokes may be reconfigured by using ANARKED, the
           ANARKEY Keystroke Editor.

        o  Command-line history buffer can hold from 255 to 50,000
           characters.

        o  The length of the shortest line to store in the history buffer
           can be set.

        o  Powerup input mode can be set to either insert or overwrite.

        o  Cursor shape in each input mode can be set.  (The cursor shape
           can also remain unchanged if you so desire.)

        o  Switch character conventions common to the UNIX operating system
           (i.e. directories separated by a slash, '/', and options preceded
           by a dash, '-') may be used.  This feature works for "internal"
           DOS commands, such as COPY and DIR, as well as "external"
           commands, like XCOPY and LINK.


   In addition to a high degree of malleability, ANARKEY brings to the DOS
command line many of the editing features available in expensive word
processors.  For example, the cursor may be positioned anywhere on the
command line without destructively backspacing through characters.  Also,
individual characters or entire words may be easily inserted or deleted
anywhere on the line.

   Each command line you enter is stored by ANARKEY in a "history buffer."
These stored lines may be retrieved whenever you wish to execute them again.
The retrieved line may be edited before being executed or may be sent for
immediate execution upon retrieval.  Never again will you retype a command
line.

   ANARKEY provides two methods of line retrieval.  The Up and Down
Arrow keys can be used to cycle sequentially through the history buffer and
retrieve one line at a time.  When you get to the line you want, you may
then edit and execute it.

   The second and more powerful retrieval method accepts one or more
characters of the desired line and then searches through the history buffer
until it finds a line starting with the same character(s).  The matching
line is then entered on the command line.  If the retrieved line is not the
desired line, the search may be continued and the next matching line
retrieved.  This method of line completion is extremely powerful, especially
when the desired line is buried deep in the history buffer.  Once you learn
how to use this capability, you'll wonder how you ever lived without it!

   ANARKEY also supports the entering of multiple commands on a single input
line.  This can be used to group a sequence of related commands together on
one line.  For example, say you want to edit a letter and then print it.
Using DOS, this may require two lines: one to execute the word processor and
another to print the text file.  With ANARKEY, both commands can be placed
on the same line.

   To make it easy to fit more than one command on the line, ANARKEY will
accept input lines consisting of up to 255 characters.

   ANARKEY provides a feature called an AKA (pronounced A-K-A) that allows
you to assign a single word to represent a long string of commands.  Later,
when you enter the single word on the command line, ANARKEY will replace it
with the long line and execute it.  For example, you may associate the
letter "D" to represent the string "DIR."  Afterward, simply entering the
single character "D" on the command line will cause ANARKEY to execute the
associated string ("DIR").

   An AKA may consist of multiple commands.  Thus, by using an AKA, a single
character can execute several complicated commands.  In this respect, an AKA
is much like a DOS batch file.

   And, like a batch file, an AKA may contain parameters.  AKA parameters
are specified by using the DOS batch conventions %1 through %9.  As an
example, you may define the AKA "T" to represent the string "TYPE %1."
Subsequently, the command "T ANARKEY.DOC" will be expanded to "TYPE
ANARKEY.DOC."  The advantage provided by an AKA over a batch file is that
the AKA will execute much more quickly than the equivalent batch file.

   An AKA may be defined on the command line or read in from a disk file.
If you are already using a command-line editor that supports aliases or
synonyms, the CONVERT program is provided in the ANARKEY package to
translate your aliases and synonyms into an equivalent AKA format.

   ANARKEY will also complete the names of files, programs and directories
for you.  Simply type in zero(!) or more characters and ANARKEY will cycle
through all of the existing files with matching characters.  This may seem
like a minor convenience, but, once you become used to it, you'll never
want to go back to entering an entire file specification again.

   How often have you needed to add one more directory to your PATH
environment variable?  Doing so in plain vanilla DOS is a pain because you
have to retype the entire PATH sequence.  Not so with ANARKEY.  ANARKEY will
retrieve the current PATH setting and enter it on the command line for you.
From there you may edit the line as you wish.  This feature is not
restricted to the PATH variable either; ANARKEY will retrieve ANY
environment variable and allow you to modify it.  You can even type in only
the first zero(!) or more characters of the environment variable's name and
ANARKEY will cycle through all the matching variables.

   Since ANARKEY provides so many completion-type operations, for example,
line completion from the history buffer, directory, program and file name
completion and environment variable completion, it may be difficult for new
users to remember each of the keys assigned to perform all these operations.
It is also an inconvenience to always have to specify exactly what it is you
want to do.  Wouldn't life be easier if all you had to do was hit one key
and ANARKEY "knew" exactly what you wanted to do and went ahead and did it?
Well, it does!

   A Mega-Key is provided that analyzes the input line and determines what
operation you most likely want and does it.  Automatically.  The Mega-Key
will complete environment variables, disk file names and lines retrieved
from the history buffer.  It combines the operations of four separate
functions into a single key.  The Mega-Key is one giant step toward a state
of pure Anarkey, a state with no keystrokes.

   All of these features and much more are included in ANARKEY.  If you
would like to learn how to use these capabilities and relieve yourself of
the drudgery of entering DOS commands then read on.



                           The Spirit of ANARKEY
                           ---------------------

   While walking down a city sidewalk several years ago, I noticed a crowd
of people gathering around the corner about a block ahead of me.  Normally,
I try to avoid crowds at all costs, but this one was directly in my path and
seemed peaceful, so I decided to continue ahead and see what the attraction
was.

   Arriving closer, music could be heard coming from within the crowd.
There, in its center, stood a street-corner musician, a lone saxophone
player.  The musician blew a sweet and gentle song on his horn, a song I had
never heard before, but which I instantly recognized.

   As I stood listening to this music, the atmosphere around me seemed to
change.  The typical rush of the city street was calmed by each note.  Sharp
edges were smoothed.  I felt as though I had been transported to a spring
forest, light greens and blues all around.  I stood on the edge of a clear,
flat pond where each long, cool note from the saxophone floated on the
glassy surface.  The world became relaxed, friendly and a bit melancholy.
Each note was so palpable, I could hold it in my open palm.

   External noises entered.  The rhythmic breeze of passing cars, the
syncopated percussion of conversation, all joined in to create a sweet, sad
symphony.  A blanket had been placed over the area and we all existed
beneath its protective cover.  The song floated on and the blanket slowly
descended, enveloping each person, every object.

   Eventually, the saxophone sounds ebbed and drifted off, slowly
evaporating.  For an elongated second, the crowd basked in the remaining
wisps of sound.  Then polite applause.

   Afterward, the musician stood beside his open music case, graciously
accepting the offerings of the appreciative crowd.  I remember thinking,
"What a wonderful way to live.  Making your way in the world playing such
sweet music.  That's the way I want to spend my life."  I began saxophone
lessons shortly afterward.

   Unfortunately, talent does not always come in the same amount as desire.
Sustained attempts to woo the elusive songbird proved fruitless.  The tears
that would well up in my listener's eyes were not the product of a song's
passionate beauty, but rather of its painful rendition and total
destruction.  The local dogs would howl in protest whenever I blew.  In
rapid succession, half the homes in my neighborhood went up for sale.  The
signs eventually became too numerous to ignore.  The frequency of my
practice sessions declined in reverse proportion to my realization that I
was a musical wretch.

   As a result, I began to spend more time in front of a computer writing
programs, a different kind of song, and an area in which I displayed at
least a modicum of ability.  With passing time, the dream of playing sweet
music on a street corner faded.  But I never forgot that street musician.

   And so, it is in the spirit of a street-corner musician that I dedicate
ANARKEY.  I call software created in this spirit "Frustrated-Musicianware."
I hope you find ANARKEY to be as sweet a song as I wish I could play on a
saxophone.  If so, won't you please take the time to register it?

   Like a street-corner musician, I stand beside my open computer case,
graciously accepting your appreciative gestures.

   Please send your registration form, suggestions and comments to:

                               Steven Calwas
                              Moderne Software
                               P.O. Box 3638
                         Santa Clara, CA 95055-3638



                              Getting Started
                              ---------------

   ANARKEY is ready to run "right out of the box."  Simply enter its program
name on the DOS command line and ANARKEY will install itself.  ANARKEY may
also be installed by running it from a batch file, such as AUTOEXEC.BAT.

   ANARKEY is a TSR (Terminate-and-Stay-Resident) program.  When executed
from the command line or from a batch file, it will install itself into your
system and then return control to the DOS command prompt.  When you are
returned to the command prompt, all of the ANARKEY features will be
available.

   If you have not registered ANARKEY, a message will appear during the
installation process that will describe how you can register the program and
receive an official registered copy of the ANARKEY software package.  You
will also be asked to enter a random 8-digit number.  ANARKEY will not
install until you correctly enter this number.

   Registered users receive a copy of ANARKEY that does not require this
installation procedure.  Unregistered users can receive a registered version
by sending in their paid registration form.  You can find a registration
form in the file ORDERFRM, included in the ANARKEY distribution package.  A
registered copy of ANARKEY, without the installation procedure, will be sent
to you immediately.

Note:
   If you are running ANARKEY for the first time and a message appears
stating the program is already installed, refer to the section "Installation
Options -- ANARKEY Process Number" for instructions on installing ANARKEY on
your machine.

   Many of ANARKEY's features may be configured by specifying program
options at installation time.  The supported options are described in the
"Installation Options" section later in this manual.
 
   After installation, ANARKEY handles all input requests for the following
situations:

        --the DOS command line
        --redirected input
        --DEBUG, SYMDEB, EDLIN and several third-party programs

   Notice that commands executed from a batch file are NOT processed by
ANARKEY.

   Many powerful features are available once ANARKEY is installed.  They are
all described in the remainder of this manual.



                             Manual Organization
                             -------------------

   The supported ANARKEY functions and related topics are grouped into the
following categories:

        --Line Editing Functions
        --History Buffer Functions
        --AKA Functions
        --Name Completion Functions
        --Entering Multiple Commands per Line
        --Editing Environment Variables
        --The Mega-Key, All-in-One Completion Function
        --Installation Options
        --ANARKEY Internals
        --Special Considerations
        --Future Directions
        --The Spirit of ANARKEY

   All of the supported functions are explained in detail within one of
these categories.  In addition, a brief summary of all ANARKEY functions is
outlined in the file ANARKEY.SUM.  You may find it helpful to keep a listing
of ANARKEY.SUM alongside your keyboard while you are learning the ANARKEY
commands.

   Each documented ANARKEY function consists of two parts: a "function name"
and a "keystroke invocation."  The function name is simply a descriptive tag
assigned to a function, just as a person's name is a kind of tag.  The
keystroke invocation is the keystroke or keystrokes entered by the user
which cause the function to be executed.

   The function definitions documented in this manual use the following
format:

   <Keystroke Invocation>  -- Function Name

   The keystroke invocation is always contained within < > symbols.  The < >
symbols are not part of the keystroke invocation and should not be entered
as such.  Examples of some of the ANARKEY function definitions are:

   <Home>             -- Cursor to Start of Line

   <F5>               -- Find History Buffer Match and Edit
   <Ctrl-K>

   In the first example, the keystroke invocation for the Cursor-to-Start-
of-Line function is the <Home> key.  In other words, pressing the <Home> key
will instruct ANARKEY to perform the Cursor-to-Start-of-Line function.

   Some functions have two possible keystroke invocations, as in the second
example above.  Entering either of the keystroke invocations will cause
ANARKEY to perform the indicated function.  The example above shows that the
Find-History-Buffer-Match-and-Edit function may be executed by pressing
either the <F5> or <Ctrl-K> keys.  Which invocation you decide to use
depends upon which keystroke you are most comfortable making.

   Keystroke invocations are not case-sensitive.  Thus, the keystrokes
<Ctrl-K> and <Ctrl-k> are equivalent.

   Note: All keystroke invocations can be modified by ANARKED, the ANARKEY
Keystroke Editor.  For instructions, refer to the "ANARKED User Manual."

 

                           Line Editing Functions
                           ----------------------

   ANARKEY provides line editing functions commonly found in word processing
programs.  These functions include cursor movement, character deletion,
character retrieval and some general purpose features.

   <Enter>            -- Send Line to Command Processor
        The input line is passed to ANARKEY for "acceptance."  The cursor
        need not be at the end of the line for the whole line to be
        accepted; the entire command line is always accepted, regardless of
        the cursor position.

        The acceptance process includes "breaking" the line into separate
        commands, checking that each command's length is within the
        allowable range, and sending the commands individually to the
        command processor.  (This process is discussed in depth in the
        "Entering Multiple Commands per Line" section.)

   <Ins>              -- Toggle Insert/Overwrite Mode
        ANARKEY supports two modes of text input: insert mode and overwrite
        mode.  When editing in insert mode, characters entered will be
        "inserted" into the current input line; any characters to the right
        of the inserted character are shifted over to make room.  Characters
        entered in overwrite mode will "write over" the character under the
        current cursor position; no shifting of characters occurs as in
        insert mode.

        The <Ins> key toggles the two input modes.  By default, once the
        mode has been set, ANARKEY remains in that mode until the <Ins> key
        is pressed again.  (The input mode can be forced to a particular
        setting at the start of each new input line by using the 'F'
        modifier to the -I installation option.  Refer to the section
        "Installation Options, Input Mode on Powerup" for further details.)

        The default input mode upon program powerup is insert mode.  If you
        prefer ANARKEY to default to overwrite mode on powerup, use the -I
        option (explained in "Installation Options, Input Mode on Powerup").

        ANARKEY indicates the current input mode by setting the cursor
        shape.  An underscore cursor is used in the powerup mode; the
        alternate mode uses a block cursor.  The following table illustrates
        the cursor shapes used depending upon the powerup mode.

        Powerup mode = Insert (default and -II option)
                Insert mode cursor    = underscore
                Overwrite mode cursor = block

        Powerup mode = Overwrite (-IO option)
                Insert mode cursor    = block
                Overwrite mode cursor = underscore

        Cursor shape changes can be repressed by including the -C option on
        the installation command line (see "Installation Options, Cursor
        Shape Remains Unchanged").

   <Ctrl-U>           -- Accept Next Keystroke Unmodified
        Enter the next keystroke into the input line, bypassing any ANARKEY
        function interpretation.

        Occasionally, you may wish to enter a keystroke on the input line
        that would normally be interpreted by ANARKEY as a keystroke
        invocation.  For example, say you wanted to send a formfeed
        character to your printer.  One way to accomplish this might be to
        enter a formfeed on the command line and then redirect the line to
        the printer.  The formfeed character is <Ctrl-L>.  However, <Ctrl-L>
        is normally interpreted by ANARKEY as an invocation of the Find-
        History-Match-and-Execute function.  To prevent ANARKEY from
        interpreting the <Ctrl-L> as a keystroke invocation, precede it with
        a <Ctrl-U>.  Thus, the two keystroke sequence <Ctrl-U> <Ctrl-L> will
        enter a <Ctrl-L> character on the input line.

        This function may also be used to enter ANSI escape sequences on the
        input line.  Simply precede the <Esc> key with a <Ctrl-U> keystroke.
        Being able to enter an <Esc> character on the input line will allow
        you to create AKAs that assign string constants to the function
        keys, define an elaborate command-line prompt, and set the screen
        colors.  Refer to the ANSI.SYS documentation that came with your
        operating system or one of the public domain or shareware ANSI
        device drivers for details on doing this.

   Cursor movement functions allow the cursor to be positioned anywhere on
the input line.  Once the cursor has been placed in its desired position,
further line modification operations, such as deleting or adding characters,
may be performed.  The cursor movement functions provided by ANARKEY are
discussed below.

   <Home>             -- Cursor to Start of Line
        Position the cursor under the first character in the input line.

   <End>              -- Cursor to End of Line
        Position the cursor after the last character in the input line.

   <Right Arrow>      -- Cursor Right One Character
        Move the cursor one character to the right.

   <Ctrl-Right Arrow> -- Cursor Right One Word
        Position the cursor under the start of the next word.

   <Left Arrow>       -- Cursor Left One Character
        Move the cursor one character to the left.

   <Ctrl-Left Arrow>  -- Cursor Left One Word
        Position the cursor under the start of the previous word.

   Also provided are functions to delete individual or groups of characters
from the input line.

   <Backspace>        -- Delete Character Left
        Move the cursor left one character and delete the character.  If the
        current input mode is insert mode, any characters from the current
        cursor position to the end of the line are shifted one character to
        the left.  If the input mode is overwrite mode, no shift occurs.

   <Del>              -- Delete Current Character
        Delete the character at the current cursor position.  All characters
        from the cursor position to the end of the line are shifted one
        character to the left, regardless of the current input mode.

   <Ctrl-T>           -- Delete Word Right
        Delete all characters from the current cursor position until the
        start of the next word.  All characters from the cursor position to
        the end of the line are shifted to fill the space emptied by the
        deleted word, regardless of the current input mode.

   <Ctrl-End>         -- Delete to End of Line
   <Ctrl-Y>
        Delete all characters from the current cursor position to the end of
        the line.

   <Esc>              -- Delete Line
        Clear the entire input line.  Position the cursor at the "home"
        position.

        The CBL (current buffer line) pointer is moved to the end of the
        history buffer.  The CBL is discussed in detail in "History Buffer
        Functions."

   ANARKEY also supports two functions which are provided in the primitive
DOS list of editing functions: the retrieval of single characters from the
previous input line or the remainder of the previous line.

   <F1>               -- Retrieve Character From Previous Input Line
        This function is identical to the DOS function associated with this
        key.

        A character is retrieved from the previous input line and entered
        into the current line.  The character retrieved is from the same
        relative location as the current cursor position.  The cursor
        position is advanced to the next character location.

        For example, if the cursor is at the third-character position in the
        line when the <F1> key is hit, the third character from the previous
        input line will be recalled and entered into the current line.
        
   <F3>               -- Retrieve Remainder of Previous Line and Edit
        This function is identical to the DOS function associated with this
        key.

        The remainder of the previous input line is retrieved and entered
        into the current line.  The beginning of the retrieved portion is
        from the same relative location as the current cursor position.  The
        cursor is positioned at the end of the current line.  Editing may be
        performed on the line.

   <Alt-F3>           -- Retrieve Remainder of Previous Line and Execute
        This function is the same as the Retrieve-Remainder-...-and-Edit
        function (<F3>) except that the line is immediately sent to the
        command processor for execution.  The user is given no opportunity
        to edit the line.

   Once you break the habit of leaning on the BackSpace key to correct any
typing errors and begin to use the ANARKEY editing functions to their
fullest, the blisters on your fingertips will clear up.  And your keyboard
will thank you.



                          History Buffer Functions
                          ------------------------

Introduction
------------

   The history buffer functions provide ANARKEY with the very powerful
ability to quickly retrieve any previously-entered input line for either
editing or immediate execution.

   Many work sequences done on a computer are repetitive.  For example, a
programmer will edit a source file, compile it, link it and then execute it
checking for any bugs.  If any problems are discovered, the whole cycle
begins again.  Being able to quickly retrieve the commands entered during
the first pass through this cycle relieves the user of much annoying
busywork.


The History Buffer
------------------

   ANARKEY stores all non-empty input lines in a "history buffer."  Lines
consisting of multiple commands are placed in the buffer as a single intact
line.  When ANARKEY is initially installed, the history buffer is empty.
The first input line entered by the user is stored by ANARKEY at the very
top of the history buffer.  Subsequent input lines are stored, one after
another, toward the bottom of the buffer.  This concept is depicted in the
following diagram which shows a history buffer completely filled with lines:

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem This is line one     |
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   Notice in the above diagram that there is an empty line at the bottom of
the buffer, even though the buffer is considered full.  ANARKEY always
reserves an empty line at the bottom of the buffer which it uses as a marker
to signify the end of the buffer.  This end-of-buffer, empty-line marker is
also useful to the user, as will become clear in the discussion on line
retrieval.

   The contents of the history buffer may be viewed at any time.

   <F4>               -- Display History Buffer Contents
        The input lines stored in the history buffer are displayed onscreen.
        Lines are displayed beginning at the top of the buffer and advancing
        to the end.

        When an entire screen of lines has been displayed, output will
        pause.  Pressing any key will cause the next screenful of lines to
        be displayed.  ANARKEY supports screens consisting of ANY number of
        lines and columns per screen, including 25, 43 and 50 lines.

   <Ctrl-F4>          -- Display History Buffer from Bottom
        This function is the same as Display-History-Buffer-Contents except
        the buffer is displayed from the bottom to the top.

   Storing a new input line into a full history buffer is similar to how a
display screen handles the entering of an additional line.  When a screen is
full, room is made at the bottom of the screen by scrolling the other lines
up.  The line which used to be at the top of the screen disappears.  The
same operation occurs when storing an input line into a full history buffer.
The line stored at the top of the buffer is permanently removed, all
remaining lines are shifted up and the new input line is entered at the
bottom of the buffer.  The effects of storing an additional line in a full
history buffer are shown below:

                   rem This is line one       <--- Removed from buffer

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 | rem New last line        |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   The number of input lines which can be stored in the history buffer
depends upon the length of the lines and the size of the buffer.  By
default, the history buffer will hold 500 characters, but this may be
configured during installation from 255 to 50,000 characters.  (Details are
contained in the "Installation Options, History Buffer Size" section.)


The Current Buffer Line or CBL
------------------------------

   ANARKEY maintains a location marker which always "points" to the
beginning of one of the lines stored in the buffer.  The line at which this
marker points is referred to as the "current buffer line" or CBL.  Everytime
a new DOS command prompt appears, the CBL is reset to the end of the history
buffer, which, as mentioned above, will always be an empty line.  Also,
invoking the Delete-Line function (<Esc> key) will move the CBL to the end
of the history buffer.

   The following diagram depicts a history buffer with the CBL set to the
end of the buffer:

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
                 | rem New last line        |
         CBL --->|                          |
                 ---------------------------- <--- Bottom of buffer


Moving History Buffer Lines
---------------------------

   During the course of entering command lines, many lines retrieved from
the history buffer will be executed without being edited.  If these
re-executed and unedited lines were stored in the buffer each time, the
buffer would soon be cluttered with many copies of identical lines.  Besides
creating an unnecessary mess, these duplicates would force other, less-often
executed, lines out of the buffer.

   ANARKEY eliminates this problem.  Any line retrieved from the history
buffer and "immediately accepted" is moved from its current location to the
end of the buffer.  The phrase "immediately accepted" means that no editing
is performed on the line and the cursor is not moved.  In other words, the
very next keystroke must accept the line (<Enter>).

   By moving buffer lines, ANARKEY guarantees that heavily-executed lines
will always be available for retrieval and the history buffer will not
become cluttered with duplicate lines.

   The moving of retrieved lines is the default operation that ANARKEY
performs.  However, situations may arise where a log of each command in
their exact order of execution is desired.  This can be achieved by
installing ANARKEY with the -F (full disclosure) option which represses the
moving of retrieved buffer lines.  Refer to the "Installation Options, Full
Disclosure" section for more information about this option.


History Buffer Line Retrieval
-----------------------------

   Moving the CBL pointer through the buffer is the method used to retrieve
stored input lines.  ANARKEY provides two methods of retrieving input lines
from the history buffer: "bidirectional sequential access" and "character
matching."


Sequential Access Retrieval
---------------------------

   With sequential access, the CBL is moved through the buffer one line at a
time.  Each time the CBL is moved, the new line it points at in the buffer
is retrieved and displayed on the current input line, replacing any line
that was previously displayed.  Sequential access is "bidirectional" because
the CBL pointer can be moved either up or down though the history buffer.

   When the CBL points at the end of the buffer, moving down will cause the
CBL to circle around to point at the first line stored at the top of the
buffer. Conversely, with the CBL at the top of the buffer, moving up will
circle the CBL back to the end.

   The following diagram shows the CBL moved up one line from its previous
location at the end of the buffer.  When the CBL was moved, the line it now
points at would have been retrieved and displayed onscreen.

                        History Buffer
                 ---------------------------- <--- Top of buffer
                 | rem Followed by line two |
                 | rem Here's line three    |
                 |/\/\/\/\/\/\/\/\/\/\/\/\/\|
                              .
                              .
                              .
                 |\/\/\/\/\/\/\/\/\/\/\/\/\/|
                 | rem Last line in buffer  |
         CBL --->| rem New last line        |
                 |                          |
                 ---------------------------- <--- Bottom of buffer

   Bidirectional sequential access is performed by invoking the following
ANARKEY functions:

   <Up Arrow>         -- Retrieve Previous History Buffer Line
        Move the CBL pointer up one line.  Retrieve the line and display it
        onscreen, replacing any previously displayed line.  Position the
        cursor at the end of the displayed line.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end.  (Installing ANARKEY with the -F option will repress
        this line movement.)

   <Down Arrow>       -- Retrieve Next History Buffer Line
        Move the CBL pointer down one line.  Retrieve the line and display
        it onscreen, replacing any previously displayed line.  Position the
        cursor at the end of the displayed line.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end.  (Line movement can be repressed by installing ANARKEY
        with the -F option.)


Character Matching Retrieval
----------------------------

   The "character matching" method of line retrieval is one of the most
powerful features available in ANARKEY.  With this method, a portion of a
past input line is entered and a search is made through the history buffer
for a line whose first characters match those just entered.  If a match is
found, the line is retrieved from the buffer and entered onto the input
line.

   Before performing the search operation, ANARKEY gathers together the
characters it will use for the comparison.  It collects the characters
beginning at the start of the line up until the cursor position.  The
character under the cursor (if there is one) is NOT included in the search.
The search begins in the history buffer at the CBL and continues up toward
the top of the buffer until either a match is found or the top of the buffer
is reached.  The comparison performed upon the collected input line
characters and the retrieved buffer lines is not case-sensitive.

   The exact operations executed during a search are:

        1) The CBL pointer is moved up one line.
        2) If moving the CBL pointer caused it to circle around to the
           bottom of the history buffer, beep to signal that the CBL pointer
           has traversed the entire buffer.  Also, clear the displayed input
           line from the cursor position to the end of the line.  The search
           operation is complete.
        3) If the CBL pointer has not circled around, the CBL is retrieved
           from the buffer, but is not displayed.
        4) The character(s) collected from the current input line are
           compared with the first character(s) in the retrieved line.
        5) If the character(s) match, the remainder of the retrieved line is
           displayed on the input line and the search operation is complete.
        6) If the character(s) do not match, return to instruction (1) above
           and repeat the cycle.

   If a matching line is found, but it is not the line you desire, the
search may be continued and subsequent matching lines retrieved.

   As explained in the list of search operations above, if a matching line
is found, it is entered onto the input line.  When this occurs, the cursor
position is not changed.  The reason for this is so that if the search is
continued, the same group of characters used in the original search, i.e.
those from the start of the line up until the cursor position, will be used
in the continuation.

   The character matching method of line retrieval is one of the most useful
and powerful features of ANARKEY.  Using it provides you with the ability to
enter only a single character and have ANARKEY complete the rest of the line
for you.  After you are acquainted with this method, entering an entire
input line yourself will become drudgery.

   To be certain everyone understands how to use the character matching
method, an extended example is provided below.  But first, the ANARKEY
functions that implement the character matching retrieval method are:

   <F5>               -- Find History Buffer Match and Edit
   <Ctrl-K>
        Perform a character matching line retrieval operation.  The
        remainder of the matching retrieved line is displayed on the input
        line, replacing any previously entered line.  The line may be edited
        before being accepted.

        If the very next keystroke accepts the line (<Enter>), the retrieved
        line is moved from its current position in the history buffer to the
        buffer's end, unless ANARKEY was installed with the -F option.

   <F6>               -- Find History Buffer Match and Execute
   <Ctrl-L>
        This function is the same as the Find-Match-and-Edit function except
        that the matching line is immediately sent to the command processor
        for execution; the user is given no opportunity to edit the line.

        Since the retrieved line is immediately executed, it is moved to the
        end of the history buffer.  (This movement is repressable by
        installing ANARKEY with the -F option.)

        If the top of the buffer is reached without finding a matching line,
        the current input line is not sent to the command processor; further
        editing of the line may be performed.  The CBL will be set to the
        end of the buffer.


An Extended Example
-------------------

   As an example of the character matching functions, assume we are sitting
at a new line prompt (therefore, the CBL pointer references the empty line
at the end of the history buffer) and the buffer contains the following
lines:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Say we wish to move to the "\work\janice\memos\text" directory and copy
all files with a .TXT extension to the A: drive.  Using the character
matching retrieval method, here is how we can do it.

   First, we have to move to the desired directory.  Since we have already
entered an input line similar to the one we now need (the CD line in the
buffer), let's retrieve and edit that line.  Enter the first character of
the line we want, as in:

                C>c_

   The underscore shows the current cursor position.  Then invoke the Find-
History-Buffer-Match-and-Edit function (<F5> or <Ctrl-K> key).  ANARKEY
searches from the CBL up toward the top of the buffer for an input line
whose first character is a 'C.'  It finds a matching line in the COPY
command.  Thus, it retrieves that line from the buffer and displays it on
the input line.  The current input line and history buffer are:

                C>copy *.txt a:
                   -

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
         CBL --->| copy *.txt a:              |
                 | dir a:                     |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   Notice that the cursor position on the input line has not changed (it is
still immediately after the 'C').  Also, notice the CBL has been set to the
retrieved buffer line.  Since this is not the line we want to execute,
continue the search by invoking the Find-Match-and-Edit function again (<F5>
or <Ctrl-K>).  This time ANARKEY finds a match with the desired CD command.
That line is retrieved from the buffer and replaces the previously retrieved
COPY command.  Now the input line and history buffer look like this:

                C>cd \work\jasper\memos\text
                   -

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   The input line can now be edited using the available line-editing
functions. There are several different combinations of these functions which
can be used to perform this operation.  One such combination is outlined
below.

   User keystrokes                  Current input line and cursor position
   ---------------                  --------------------------------------
                                    C>cd \work\jasper\memos\text
                                       -
   <Ctrl-Right Arrow>               C>cd \work\jasper\memos\text
                                          -
   <Ctrl-Right Arrow>               C>cd \work\jasper\memos\text
                                               -
   <Right Arrow> <Right Arrow>      C>cd \work\jasper\memos\text
                                                 -
   <Ctrl-T>                         C>cd \work\ja\memos\text
                                                 -
   nice                             C>cd \work\janice\memos\text
                                                     -

   Note: The last line in the example assumes the input mode is set to
"insert."

   The modified input line can now be accepted (<Enter> key) and executed.
Afterward, we will be in the \work\janice\memos\text directory and the
history buffer will look like this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | copy *.txt a:              |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Now we wish to copy all of the .TXT files to the A: drive.  Since a line
already exists in the history buffer to perform this operation, there is no
need for us to type it on the command line; we'll let ANARKEY do it for us.

   This time, we don't want to retrieve the CD command we just entered
before getting the desired COPY line, so we enter:

                C>co_

   And invoke the Find-History-Buffer-Match-and-Edit function (<F5> or
<Ctrl-K>).  ANARKEY uses the characters from the start of the input line up
until the cursor (but not including the character under the cursor) in its
search for a matching line.  In this case, ANARKEY uses the two characters
"co" to find a matching line.  Subsequently, it retrieves the desired "copy"
command.  Thus, when the search-and-retrieve operation is complete, the
input line and history buffer are:

                C>copy *.txt a:
                    -

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
         CBL --->| copy *.txt a:              |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

   Since this is the exact command we wish to execute, no editing is
required prior to acceptance.  Following acceptance (<Enter>), the history
buffer will contain:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | dir a:                     |
                 | cd \work\janice\memos\text |
                 | copy *.txt a:              |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   Take a close look at the current history buffer.  Notice that the
retrieved line has not only been entered at the bottom of the buffer, but
that it has been "moved" from its previous location between the two "dir"
commands.  This occurred because the retrieved line was accepted unmodified.

   Now we want a list of all the files we've copied to the A: drive.  The
"dir a:" input line stored in the history buffer is exactly what we want.
Rather than type it ourselves, simply enter the single character 'D' so the
input line is:

                C>d_

   But this time invoke the Find-History-Buffer-Match-and-Execute function
(<F6> or <Ctrl-L>).  ANARKEY will retrieve the first matching line in the
buffer (which just happens to be the "dir a:" command we desire) and
immediately pass it to the command processor for execution.  This saves us
from entering the extra keystroke required (i.e. <Enter>) if we were to
accept the line ourselves.  Once again, since the retrieved line was
immediately executed, it is moved to the end of the history buffer.  Thus,
the history buffer at the end of our example would look this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | cd \work\jasper\memos\text |
                 | dir *.*                    |
                 | cd \work\janice\memos\text |
                 | copy *.txt a:              |
                 | dir a:                     |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

   The Find-Match-and-Execute function is powerful, but potentially
dangerous.  In the above example, if a "del *.exe" command happened to be
stored in the history buffer between the "dir a:" command and the CBL, the
DEL command would have been retrieved and executed before anything could be
done about it.  This may cause irreparable damage.  To prevent this from
ever happening, you could always use the Find-Match-and-Edit function and
accept the line only after you've ascertained that the retrieved line is the
actual command(s) you wish to execute.  On the other hand, for users who
"know what they are doing," the Find-Match-and-Execute function provides the
ability to reduce keystrokes even further and really soar.


Retrieving a Group of Lines
---------------------------

   Often, a group of consecutive command lines need to be re-executed.  For
instance, a programmer may edit a source file, compile and link it, test the
resulting program for bugs, and then begin the cycle again to correct any
problems.  This cycle may result in a history buffer with the following
contents:

                        History Buffer
                 ------------------------------ <--- Top of buffer
                 | edit file                  |
                 | compile file               |
                 | link file                  |
                 | file                       |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

  It would be nice to be able to move the CBL pointer to the top of this
cycle and then have a simple method for retrieving each of the succeeding
lines.  ANARKEY provides such a method.

   <PgDn>             -- Restore CBL
        As previously described, when a new command prompt appears, the CBL
        is initialized to point at the end of the history buffer.  In
        addition to this, the position of the CBL pointer at the time of
        line acceptance is also saved.  The CBL can be restored to this
        saved position by invoking the Restore-CBL function (<PgDn>).

        Given the above history buffer contents, assume the CBL was moved to
        the top line.  This can be done using either of the retrieval
        methods.  The situation would then be:

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| edit file                  |
                 | compile file               |
                 | link file                  |
                 | file                       |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

        If this line is then accepted (<Enter> key), several things would
        occur.  First, the retrieved line (assuming it was accepted
        unmodified) would be moved to the end of the buffer.  Second,
        because the line was moved, the CBL would be the line AFTER the
        retrieved line (i.e. the compile line).  Third, as part of the
        line-acceptance operation, the CBL position would be saved.
        Following this, the retrieved line would be executed.  When the
        command prompt was next displayed, the CBL would be moved to the end
        of the buffer (but the saved position would still be maintained).
        This final state is depicted in the following diagram:

                        History Buffer
                 ------------------------------ <--- Top of buffer
   saved CBL --->| compile file               |
                 | link file                  |
                 | file                       |
                 | edit file                  |
         CBL --->|                            |
                 ------------------------------ <--- Bottom of buffer

        Now to retrieve the next line in the cycle, simply invoke the
        Restore-CBL function (<PgDn> key).  Doing so will move the CBL
        pointer from its position at the end of the buffer to the saved
        position.  The history buffer would now look like this:

                        History Buffer
                 ------------------------------ <--- Top of buffer
         CBL --->| compile file               |
                 | link file                  |
                 | file                       |
                 | edit file                  |
                 |                            |
                 ------------------------------ <--- Bottom of buffer

        The CBL would be retrieved from the buffer and displayed on the
        input line.  Accepting the line (<Enter>) will repeat the process.
        All the lines in the cycle may be retrieved and executed this way.

        The Restore-CBL function will work even if the move-line operation
        is repressed (-F installation option) or the retrieved line is
        edited prior to acceptance.  ANARKEY is smart enough to know whether
        or not the retrieved line has been moved and acts accordingly.

        Restore-CBL can be executed once per command line.  Subsequent
        invocations will act as a Retrieve-Next-History-Buffer-Line function
        (<Down Arrow>).


Miscellaneous History Buffer Functions
--------------------------------------

   Additional functions allow you to write the contents of the buffer to a
disk file, remove lines from the buffer and clear the buffer.

   <Ctrl-W>           -- Write History Buffer to Disk
        The history buffer contents are written to the ANARKEY.LOG disk
        file.  The file is located in the root directory of the current
        drive.  If the file cannot be written because the disk is full,
        ANARKEY will beep.

        ANARKEY.LOG is a standard ASCII text file which may be edited using
        most editors and word processors.  It may be reloaded into the
        history buffer by LOAD, the ANARKEY Loader.  Refer to the "LOAD User
        Manual" for instructions on using LOAD.

   <Ctrl-Z>           -- Remove CBL from Buffer
        If the CBL pointer is pointing at a non-empty line, i.e. the CBL
        pointer is not at the end of the history buffer, the line pointed at
        by the CBL pointer is removed from the buffer.  All lines stored
        after it in the buffer are shifted up.  The result of this shift is
        that the CBL pointer will then point at the line stored after the
        removed line.  This operation is depicted in the following two
        diagrams.  The first diagram shows the history buffer and CBL
        pointer before removing the CBL.

                             History Buffer
                      | rem Line before removed line |
              CBL --->| rem We'll remove this line   |
                      | rem Line after removed line  |

        Here are the contents of the buffer and the position of the CBL
        pointer after removing the CBL:

                             History Buffer
                      | rem Line before removed line |
              CBL --->| rem Line after removed line  |
                      |                              |

        After the CBL has been removed and the buffer lines shifted, the new
        CBL is displayed on the input line, replacing the previously
        displayed line.  The removal function may be repeated several times
        to delete a group of consecutive lines from the buffer.  If the last
        non-empty line in the history buffer is removed, the CBL pointer
        will be at the end of the buffer and an empty line will be displayed
        on the input line.

   <Ctrl-X>           -- Clear History Buffer
        Invoking this function will clear all lines from the history buffer.

        Obviously, this function is potentially dangerous, so beware.  If
        you are afraid of accidentally invoking this function, use ANARKED,
        the ANARKEY Keystroke Editor, to reassign its keystroke invocation
        to something you are less likely to enter or remove its keystroke
        invocation entirely, thereby making it impossible to execute.
        ANARKED operation is explained in the "ANARKED User Manual."

   The history buffer functions, and, in particular, the character matching
functions, give ANARKEY its main source of strength.  Take the time to
become familiar and comfortable with them and chances are you will never
want to use your computer without them.



                               AKA Functions
                               -------------

   Some commands are executed with great regularity.  The history buffer
retrieval functions are extremely useful in reducing the number of times you
actually have to type in such lines.  However, ANARKEY provides yet another
powerful feature called AKAs to ease the strain on your fingertips.


Simple Text Substitution
------------------------

   An AKA (pronounced A-K-A) provides a text substitution capability to
ANARKEY.  AKAs are analogous to aliases and synonyms found in other
command-line editors.  AKA is an acronym for either "Also-Known-As" or
"AnarKey Alias."  Once again, ANARKEY offers you a choice.

   By default, AKAs are not an integral part of ANARKEY; they must be
enabled at installation time by the -A option (Allocate Space for AKA
Definitions).  If AKAs are not enabled, none of the AKA-processing code
remains resident.  This is an obvious advantage to users who do not use
AKAs; they do not have to pay a memory penalty for a feature they will never
exercise.

   Refer to the section "Installation Options, Allocate Space for AKA
Definitions" for information on enabling the AKA features.  The remainder of
this section will describe how to use AKAs once they are enabled.

   An AKA is made up of two parts: an AKA word and a substitution string.
When the word is entered on the input line as a command, ANARKEY will
replace the AKA word with its substitution string.  AKA words are not case
sensitive.  As an example, an AKA could be:

                        dos     cd \dos
                        ---     -------
                         |         |
            AKA word <----         ----> Substitution string

   If this was a "defined" AKA, meaning ANARKEY knew about it, then every
time "dos" was entered as a command on an input line, ANARKEY would replace
it with "cd \dos."

                C>dos           <---ANARKEY will replace with "cd \dos"

   This replacement is performed after the line is accepted (<Enter>), but
before it is passed to the command processor for execution.  Because the
replacement string is never displayed onscreen, the substitution operation
is transparent to the user.  For example, the above AKA may result in the
following screen display:

                        >cd
                        C:\EDITOR\BACKUP

                        >dos            <---replaced with "cd \dos"

                        >cd
                        C:\DOS

   It is important to understand that the AKA word must be a "command" on
the input line.  In other words, it must be the first word in the "command
line."  (Because ANARKEY supports multiple commands per line, it must
differentiate between "command line" and "input line."  There may be more
than one "command line" in the "input line."  Multiple commands per line are
discussed in detail later in this manual.)

   Again, given the above AKA, the following input line would not replace
"dos" with its substitution string:

                        >echo dos

   In the example, "echo" is the command and "dos" is a "parameter" or
"argument" to the command.  Since "dos" is not a command on this line, it
will not get replaced with its substitution string.


Viewing AKAs
------------

   The list of defined AKAs may be viewed at any time by invoking the View-
AKAs function.

   <Alt-F4>           -- View AKAs
        All defined AKAs are displayed onscreen.  After a screen's worth of
        AKAs have been displayed, output will pause.  Pressing any key will
        display another screen of AKA definitions.

        At the end of the AKA list, ANARKEY will display the remaining space
        available to store further AKA definitions.

        When AKAs are not enabled (i.e. no space allocated for AKA
        definitions via -A installation option), this keystroke invocation
        has no effect.


Defining an AKA
---------------

   An AKA must be "defined" before it can be used.  ANARKEY provides two
methods to define AKAs.  The definition may be entered on the input line or
it can be read from a disk file using LOAD, the ANARKEY Loader.  The
definition syntax is identical for both methods.  This section will present
examples of definitions as if they were entered on the command line.  Refer
to the "LOAD User Manual" for instructions on how to read AKA definitions
from a disk file.

   When defining an AKA, the very first character in the command must be a
colon.  The characters following the colon, up until the first space or
<Tab> character comprise the AKA word.  All remaining characters on the line
make up the substitution string.

   Example AKA definitions are:

        >:d             dir
        >:dos           cd \dos
        >:help          type anarkey.sum
        >:format        echo You do not have access to this command!

   AKA words and substitution strings can be of any length as long as their
total length does not exceed 255 characters.  In other words, the AKA
definition must fit on the input line.

   Any character may be used in an AKA word except a space or <Tab>
character, since these characters indicate the end of the AKA name.  All
other characters, including control and graphic characters, are valid in an
AKA name.

   The amount of space allocated to store AKA definitions is specified at
ANARKEY installation time (-A option).  (This option also enables AKAs and
keeps the AKA-processing code resident.)  If there is not enough space left
to store a definition, ANARKEY will beep.  When this occurs, there are
several roads you may choose.  One choice would be to make room in the AKA
"buffer" by undefining one or more AKAs (undefining AKAs is explained
below).  Another method is to retrieve the AKA definition from the history
buffer and edit it so that it will fit in the remaining AKA space (i.e. make
it shorter). If none of these routes is feasible, you can reboot your
system, but this time allocate more space for AKA definitions.

   AKA substitution strings may contain multiple commands.  Multiple
commands per line are discussed in detail a little later, but, basically,
each command must be separated by a semi-colon (;).  Some example AKA
definitions consisting of multiple commands are:

        >:edit          cd\wordproc ; editor ; cd\homedir
        >:editaka       editor anarkey.aka;load anarkey.aka

   In the first example, if you were to enter the command "edit," ANARKEY
would replace it with the substitution string which would execute the three
commands comprising it.

   If an AKA definition is made that contains an AKA word already being
used, the new definition will replace the existing one.  For example, given
the following AKA definitions, the second definition will replace the first:

        >:d             dir *.*
        >:d             del *.com

   AKAs may not be nested.  In other words, a substitution string may not
contain another AKA word.  The following example shows an invalid AKA
definition:

        >:r             rem
        >:ignore        r

   In the above example, "r" is first defined as an AKA word whose
substitution string is "rem."  "R" is also specified as the replacement
string for "ignore."  If "ignore" was entered as a command, ANARKEY would
replace it with its substitution string "r."  It would not continue and
replace "r" with "rem."

   When defining an AKA, ANARKEY performs a length check on each command in
the substitution string.  If any command is longer than 127 characters,
ANARKEY will refuse to accept the definition.  It will beep and place the
cursor under the first character beyond the 127-character limit.  Further
editing of the command will be required before the definition can be
accepted.

   A length check is always performed following input line acceptance
(<Enter> key).  Length checks may optionally occur by invoking the Check-
Line-Lengths function (<F2>), documented in the "Multiple Commands Per Line"
section.


Undefining an AKA
-----------------

   A single AKA may be undefined by entering a colon as the first character
in the command followed by the name of the AKA.  Do not specify a
substitution string.  When the line is accepted, the AKA will be undefined.
For example, the following commands undefine AKAs:

        >:edit
        >:d

   ANARKEY also provides a way to undefine all existing AKAs in a single
swoop.

   <Alt-X>            -- Undefine All AKAs
        Undefine all existing AKAs.  All the allocated AKA space is freed
        for new AKA definitions.


Parameter Fields
----------------

   ANARKEY AKAs support more than just simple text substitution.
Substitution strings may contain "parameter" fields.  These fields are
similar to the parameter fields in a DOS batch file.  They are specified by
a leading percent sign (%) and followed by a single-digit number from 1 to
9, as in %1, %5 and %9.  (%0 is not supported.)

   When specified in an AKA substitution string, parameters fields are
replaced with the corresponding argument from the command line.  For
example, %1 is replaced with the first argument to the AKA, %2 with the
second, and so on, up through %9.

        >:example       echo %1 %2 %3 %4 %5 %6 %7 %8 %9
        >example one two three four five six seven eight nine

   In this example, the %1 parameter in the AKA substitution string would be
replaced with the AKA argument "one,"  %2 with the second argument ("two")
and so on.  The resulting line passed to the command processor would be:

        echo one two three four five six seven eight nine

   The resulting line may never exceed the maximum input line length of 255
characters.  Also, each command in the line may not go beyond the requested
maximum length.  In the case of the DOS command processor, this is 127
characters.  If either of these events occur, ANARKEY will immediately stop
replacing parameter fields and pass the input line in its current form to
the command processer.

   If the substitution string contains a parameter field, but the command
line does not include a corresponding argument, the parameter field is
simply removed from the expanded line.  In other words, the parameter field
is replaced with nothing.  This is depicted in the following AKA definition
and command:

        >:pack          echo %1%3%2
        >pack a b                       <--- expands to "echo ab"

   Notice that the %1 parameter was replaced with 'a,' 'b' is the second
argument so it replaces the %2 parameter, and, since there is no third
argument to replace the %3 parameter, it is "expanded" to nothing.  The
resulting line passed to the command processor is "echo ab."

   If there are more AKA arguments than there are parameter fields, the
extra arguments are ignored.  As an example:

        >:one-arg       echo %1
        >one-arg a b c                  <--- expands to "echo a"

   The 'b' and 'c' arguments are not part of the resulting line.

   If the AKA substitution string does not contain any parameter fields,
arguments on the command line are appended to the end of the replacement
string.  For example:

        >:d             dir
        >d *.com                        <--- expands to "dir *.com"

        >:no-args       dir;echo
        >no-args *.com                  <--- expands to "dir;echo *.com"

   Use of parameter fields in substitution strings can provide fast batch
files.  This is due to the fact that the DOS command processor will accept
many of the commands normally executed in a batch file on the command line.
For example, you could enter "pause" on the command line and the result
would be the familiar "Hit any key to continue . . ." message.  This ability
can be used to create very powerful and quick AKAs.  As an example, consider
the following AKA definition:

        :mcopy  for %f in (%2 %3 %4 %5 %6 %7 %8 %9) do copy %1

   This AKA will copy up to eight file specifications (the %2 through %9
parameter fields) to a destination (the %1 parameter field).  For example:

        >mcopy a: *.com *.exe *.doc anarkey.sum

   Will expand into the commands:

        copy *.com a:
        copy *.exe a:
        copy *.doc a:
        copy anarkey.sum a:

   All in one command!



                          Name Completion Functions
                          -------------------------

   As an additional feature to make the entering of commands as quick and
easy as possible, ANARKEY provides functions which will complete file names,
including directory and program names.

   <F7>               -- Complete Directory Name
   <Ctrl-D>
        When this function is invoked, ANARKEY extracts the characters
        starting at the immediate left of the current cursor position and
        proceeding left (toward the start of the line) until either a space
        or the start of the line is reached.  It uses these characters to
        perform its search-and-compare operation, looking for an existing
        directory with which to complete the name.  The search-and-compare
        operation is not case-sensitive.

        If a match is found, it is inserted in the input line at the current
        cursor position.  The cursor position is not changed.

        The matching directory is displayed in upper or lowercase depending
        upon the current state of the CapsLock key.  If CapsLock is active,
        the directory is displayed in uppercase; if inactive, the name will
        be in lowercase.  Should no match be found, ANARKEY will respond
        with a beep.

        This function may be invoked repeatedly.  Each successive invocation
        will find any additional matching directory names.  For example,
        assume there are three directories that begin with the letter "M" in
        the current directory.  If you enter the character "M" and invoke
        the Complete-Directory-Name function, ANARKEY will find one of the
        directories and enter its name on the input line.  If this is not
        the directory you desire, invoking the function a second time will
        cause another of the "M"-directories to replace the original match.
        Another invocation will display the remaining matching directory.
        Since there are no more matching directories, invoking the function
        a fourth time will cause the last matched directory to be removed
        from the input line and ANARKEY will beep.  You may begin the cycle
        all over again by invoking the function a fifth time, which would
        once again display the first matching "M"-directory.

   After the desired name has been completed, the cursor will still be in
its original location.  ANARKEY will automatically move the cursor to the
position immediately after the completed name if the keystroke following a
name completion is one of the following:

        -- Space     ( )             -- Colon              (:)
        -- Backslash (\)             -- Input redirection  (<)
        -- Slash     (/)             -- Output redirection (>)
        -- Semicolon (;)             -- Equal sign         (=)
        -- Asterisk  (*)             -- Question mark      (?)
        -- Plus sign (+)             -- Pipe character     (|)
        -- Comma     (,)             -- Dash (only if -U)  (-)

   After moving the cursor position, the keystroke will be entered into the
input line.

   Notice that the dash character will move the cursor position only if UNIX
switchar character translations are active.  These translations are
activated at installation time by the -U option.  Further details about the
-U option can be found in the "Installation Options" section of this manual.

   Leaving the cursor position unchanged during the completion operation
provides a method of reducing the number of matching names found during the
completion process.  This will be demonstrated in the example below.

   It is not necessary to enter any characters in order for ANARKEY to
perform a directory-completion operation.  Simply invoke the function with
the cursor located at the start of the command or to the right of at least
one space, slash (/) or backslash (\) character and ANARKEY will cycle
through all the existing directory names.

   Directories in locations other than the current directory or on a drive
other than the current drive may also be completed.  To do so, specify a
path specification to the desired directory.

NOTE:
   Many people change the DOS switch character from a slash (/) character to
 a dash (-) or something else.  Doing so frees the slash character to be
 used as a path separator in a directory specification, as in:

                        C>cd c:/dos/commands

   ANARKEY recognizes both backslashes (\) and slashes as path separator
characters in directory specifications.  ANARKEY also provides a more
comprehensive switchar capability than any of the available standalone
programs.  Please refer to the -U option discussed in the "Installation
Options" section of this manual.

   The completion function can be especially useful when working on a new
machine where the directory structure is unfamiliar.

   Here is an extended example using the directory completion function.  Say
you wish to enter the command:

                        C>cd c:\dos\commands

   First type the following characters:

                        C>cd c:\_

   The underscore represents the position of the cursor.

   Invoke the Complete-Directory-Name function.  ANARKEY will begin cycling
through all directories in the root of the C: drive.  If there is more than
one directory in the root, each can be retrieved by invoking the function
repeatedly.  Eventually, the DOS directory will be displayed.

   If you had added a "d" to the above input line, ANARKEY would have cycled
through all directories starting with a "D"; add a "DO" and the cycle would
be through directories whose first two characters were "DO."

   The current input line is now:

                        C>cd c:\dos
                                -

   The underscore represents the cursor position which is unchanged from the
its starting location.

   If this were the entire line we wished to execute, we could accept the
line by simply pressing <Enter>.  However, for our example, we still need to
enter an additional directory.  But before we can do so, the cursor position
must be moved so it follows the completed directory name.  ANARKEY will
automatically move the cursor if a backslash character is entered following
a completion operation.  Thus, simply press backslash.  The current input
line is now:

                        C>cd c:\dos\_

   This time, rather than cycle through all the directories, let's retrieve
only those directories whose first character is "c".  Enter the "c" onto the
input line, like so:

                        C>cd c:\dos\c_

   Invoke the Complete-Directory-Name function again.  ANARKEY will begin
cycling through the directories whose first character is a "c" and are
located in the DOS directory on the C: drive.

   Let's say that after retrieving several directories that begin with a "c"
you realize there are many such directories.  Rather than cycle through them
all until you arrive at the desired one, you can give ANARKEY additional
characters to use in its search.  ANARKEY will use these characters in
finding a matching directory.  These characters will often reduce the number
of matching names retrieved in the completion operation.

   For example, say you are sitting with this line:

                        C>cd c:\dos\chars
                                     -

   Now enter one or more additional characters of the directory you wish, in
our case "commands."  Since we've already entered the "c" at the start of
the operation, we'll enter an "o" now.  The input line thus becomes:

                        C>cd c:\dos\cohars
                                      -

   Notice that the "o" was entered into the line and the cursor position
updated.  (This example assumes the input mode is set to insert.  If the
input mode was overwrite, the "o" would have replaced the "h", but the
cursor position would still be the same.)

   Continue the completion operation by invoking the Complete-Directory-
Name function again.  ANARKEY will now complete only those directories that
begin with the characters "co".  Presumably, this should reduce the total
number of matches found.  Additional characters can be similarly entered to
reduce the number of matches further.

   Eventually, the desired "commands" directory will be retrieved and
displayed on the input line.

                        C>cd c:\dos\commands
                                      -

   And you've got it.  The line can now be accepted by pressing <Enter>.


   <F8>               -- Complete File or Program Name
   <Ctrl-F>
        The Complete-File-or-Program-Name function is similar to the
        Complete-Directory-Name function.  The main difference, as its name
        implies, is that instead of completing directory names, the
        Complete-File-or-Program-Name function completes program and file
        names.

        In ANARKEY, a "program" is defined as the first specification in a
        command.  A program specification may contain a drive and/or a
        directory path.  A program name must have a file extension of BAT,
        COM or EXE.  "Files" are all specifications which are passed to
        programs in an argument list.  In other words, all specifications in
        a command other than the program name, are file names.  File
        specifications may also contain a drive and/or directory path and
        may have any file extension.

        All of the information presented in the Complete-Directory-Name
        function is applicable to the Complete-File-or-Program-Name
        function, including the non-case-sensitive search, the effect of the
        CapsLock key, the repeatability of the function, the positioning of
        the cursor and the method of character extraction upon which the
        search is performed.  That information will not be repeated here.
        Please refer to the explanation of the Complete-Directory-Name
        function for background information relevant to the Complete-File-
        or-Program-Name function.  This section will deal only with those
        details which are specific to the Complete-File-or-Program-Name
        function.

        When the Complete-File-or-Program-Name function is invoked, ANARKEY
        determines whether it is searching for a program or a file name
        based upon the above definitions.  Be aware of the fact that since
        ANARKEY supports multiple commands per line (explained in the next
        section), there may be multiple program names on a single input
        line.  ANARKEY will automatically determine whether it needs to
        complete a program or a file name.

        If a "program name" is being completed, ANARKEY will search the
        appropriate directory for a matching file specification which has
        the extension BAT, COM or EXE. If a match is found, the program name
        is entered into the input line.  The program's extension is not
        displayed, just as you would not enter the extension were you to
        type the program name yourself.  Other possible situations are
        handled in the same manner as in the Complete-Directory-Name
        function.

        If a "file name" completion is called for, all the files in the
        appropriate directory are retrieved, one after another, in the same
        cyclical operation as that used for directory and program names.
        The complete file name, including extension, is entered onto the
        input line.

        In the case of file names, many files exist which are rarely entered
        as arguments to programs.  For example, files with the extensions
        EXE, OBJ, and SYS are almost never part of a program's argument
        list.  Most of the time, a user would simply cycle past these file
        names as they popped up during the completion operation.  To save
        the user from this unnecessary cycling, files with certain
        extentions are ignored by ANARKEY when it is searching for a
        matching file name.  The ignored extensions are:

                .$$$    .BAK    .BIN    .COM    .EXE    .HEX
                .LIB    .OBJ    .OVR    .SYS    .TMP

        Additional file extensions may be added to the ignored-extension
        list during program installation (the -X option).  Also, the
        extensions listed above may be cleared so that ANARKEY will not
        ignore file names with those extensions.  Refer to the section
        "Installation Options, Exclude File Extension" for details.

   As a simple example, assume you are in a directory which contains a
single file called TEST.EXE.  At the start of a new command, you invoke the
Complete-File-or-Program-Name function.  ANARKEY would find a program-name
match with TEST.EXE and enter it on the input line, like so:

                        C>test
                          -

   The cursor would be sitting under the first character of the program name
since that was its location at the start of the completion operation.  It
can be moved past the program name by entering a space character.

                        C>test _

   Invoking the Complete-File-or-Program-Name function now would get only a
beep as a response.  This is because ANARKEY is now searching for a
file-name match and the only file it finds is TEST.EXE whose .EXE extension
is a member of the ignored-extension list.  If you truly wanted to include
the file TEST.EXE in the program's argument list, you would have to enter it
yourself.

   Alternatively, let's say you had installed ANARKEY so that it would not
use the default ignored-extension list.  In that case, given the above input
line, ANARKEY WOULD match the TEST.EXE file.  The input line would then be:

                        C>test test.exe
                               -

   Of course, this example shows the most basic use of the Complete-
File-or-Program-Name function.  Program and file names may include a drive
and/or path specifier, just as their directory-name counterpart.  When used
in conjunction with the Complete-Directory-Name function, entire commands
can be entered with only a few keystrokes.

   The various name-completion functions contribute to an environment rich
in capability.  Become familiar with it and the entering of new command
lines will become a pleasurable experience.
  


                    Entering Multiple Commands per Line
                    -----------------------------------

   The following ANARKEY functions are documented in this section:

   <F2>               -- Check Command Lengths

   <F10>              -- Repress Multiple Commands per Line
   <Ctrl-R>

   In DOS, the terms "line," "command" and "command line" all generally
refer to the same thing.  This is because DOS supports only a single command
on each line.  ANARKEY supports multiple commands per line and thus must
make a distinction between "commands" and "lines."

   Support of multiple commands per line requires a method of specifying the
end of one command and the start of the next.  ANARKEY interprets the
semicolon character (;) as just such a command separator.  A semicolon must
lie between each of the commands on the input line.  Spaces may be on either
side of the semicolon, but they are not required.

   For example, to enter two commands on a single input line, enter the
first command, follow it with a semicolon, and then enter the next command.
This sequence may be followed for as many commands as will fit on the input
line.  The number of commands allowed on a single input line is restricted
only by the input line's maximum length of 255 characters.

   Some examples of input lines which contain multiple commands are:

        C>dir a: ; pause ; del a:*.* ; copy *.* a: ; dir a:
        C>cd \play;game;cd \work
        C>edlin prog.c;cl -c prog.c

   Some programs require that a semicolon occasionally be passed to them in
the program's argument list.  There are three methods to include a semicolon
in a command:

        1) Enter two consecutive semicolons on the input line.
        2) Make the semicolon the very last character on the line.
        3) Repress semicolon/command separator interpretation for the line.

   Note: Many environment varibles use semicolons as part of their value.
The PATH variable is one example.  Rather than require the entering of
consecutive semicolons, ANARKEY will not translate semicolons when they are
contained within a SET, PATH or PROMPT command.  This topic is discussed in
detail in the "Editing Environment Variables" section.

   As an example, the LINK program interprets a semicolon character as
designating the end of the argument list.  Some valid input lines which
invoke the LINK program are:

        C>link prog;
        C>link prog;;
        C>link prog;;;exe2bin prog prog.com ; del prog.exe

   In the first example, the semicolon is the last character on the input
line, therefore it is passed as part of the command.

   The second example shows a situation where the first semicolon is not at
the end of the input line, but it is followed immediately by another
semicolon.  In this case, the consecutive semicolons are converted to a
single semicolon character and passed to the command processor.

   Notice that the first two examples result in identical commands.  They
are shown to illustrate the fact that, although it is not always necessary,
if you consistently enter consecutive semicolons whenever it is desired to
pass a semicolon as part of a command, you will never get burned.

   The third example above displays how semicolons may be used as both
command separators and part of a command.  The first two semicolons are
converted to a single semicolon and entered as part of the LINK command. The
third and fourth semicolons are interpreted as command separators.  The
third example will be dissected into the following three commands (the
quotation marks are included only to illustrate the blank characters in each
command; they are not actually part of the commands):

        "link prog;"
        "exe2bin prog prog.com "
        " del prog.exe"

   Be aware that semicolons used to separate commands may have blank
characters before and/or after them.  However, to pass a semicolon as part
of a command, the semicolons must be consecutive with no space between them.
Thus, the above example may have been entered as:

        C>link prog;; ; exe2bin ...

But not as:

        C>link prog; ; ; exe2bin ...

   Another method to disable semicolon interpretation is to invoke the
Repress-Multiple-Commands-per-Line function.  Pressing the <F10> or <Ctrl-R>
key will repress semicolon interpretation for the current input line.  The
entire line will be passed to the command processor unmodified.  This
function performs a temporary repression for the current input line only;
the next input line will support semicolon translation unless this function
is invoked again.

   With ANARKEY installed, input lines may be up to 255 characters in
length.  Each input line may contain several commands.  Individual commands
consist of no more than 127 characters.

   This 127-character limit is imposed by the DOS command processor,
COMMAND.COM.  If you are using some other command processor, the length
limit may differ.  ANARKEY enforces and supports the length limit of all
third-party command processors, provided the command processor uses the same
method of line input that COMMAND.COM uses.

   ANARKEY will not let you enter an input line that exceeds 255 characters,
nor will commands which go beyond their length limit (usually 127
characters) be accepted.  Should you attempt to enter more than 255
characters on an input line, ANARKEY will beep and refuse to accept the
input.  Commands that exceed 127 characters are caught by ANARKEY after you
accept the input line (by hitting the <Enter> key).

   After pressing <Enter>, ANARKEY "breaks" the line into individual
commands based upon any translated semicolons.  It then checks to verify
that each command does not exceed the 127-character command-length limit.
If a command is found which exceeds the limit, ANARKEY will beep and
position the cursor under the first character beyond the allowable limit.
The character under the cursor and all subsequent characters in that command
go beyond the boundary.  In order to get ANARKEY to accept the command, you
must edit it so that it fits within the allowable length.

   In addition to this automatic length-check, you may have ANARKEY perform
a check at any time during line entry.  Simply invoke the Check-Command-
Length function by pressing the <F2> key.  This function performs the
command length check without passing the input line to ANARKEY for
acceptance.  If all commands are within the allowable range, nothing will
happen.  However, if a command is found which exceeds the boundary, ANARKEY
will beep and the cursor will be positioned under the first out-of-bounds
character.  This interactive length-check may be useful when you're trying
to squeeze one more file name in a command or an additional directory
specification in a PATH variable and you're not sure whether you've gone
past the limit.

   If all commands are within the allowable boundary, each is passed to the
command processor one at a time, as if they had each been entered on their
own input line.  When the command processor is finished executing a command
and requests another, ANARKEY will pass it the next command extracted from
the input line.  This cycle continues until all the commands on the input
line are passed to the command processor.  Notice that no multitasking
(simultaneous execution of multiple programs) occurs when entering multiple
commands on a line.  No command begins execution until the command preceding
it has completed.

   Note: LOAD, the ANARKEY Loader, may be executed from a multiple-command
line, however, it must be the LAST command in the line.  Any commands
following LOAD will not be executed.

   Multiple commands per line can be very useful in instances where the
creation of a batch file is unwarranted.  Sometimes a group of commands
needs to be executed, however, their execution is a one-time occurrence so a
batch file is not really necessary.  Such a situation may be the copying of
a group of files, as in:

        C>copy *.c \c\source;copy *.h \c\include;copy *.obj \c\objects

   In this example, rather than entering each command on their own input
line and waiting for each to complete so you can enter the next one, you can
enter them all at once and go get coffee while they're executing.

   Another use of multiple-commands which may not be obvious is for
documentation purposes.  A REM statement could be added to the input line
explaining the reason for the commands on the line.  For example:

        C>edlin corpx.txt ; rem Incorporate 12/14 proposal changes
        C>edlin prog.c ; make ; rem Enable debug statements

   If this is done on a regular basis, the exact sequence of events in any
daily operation can be documented by displaying the contents of the history
buffer (<F4>) or writing the buffer to a disk file (<Ctrl-W>).  (See the
documentation explaining the Full Disclosure (-F) installation option for
more information on this technique.)


Multiple-Command Lines and Secondary Shells
-------------------------------------------

   Multiple-command lines create one problematic situation, demonstrated in
the following input line:

        C>cd \text ; editor letter.doc ; cd \home

   Such a sequence of commands might be executed to temporarily move to a
working subdirectory, perform an operation (in this case, edit a file) and
then return to the starting directory.  Most modern editors and word
processors provide the capability to temporarily exit to a DOS command
prompt, execute one or more commands and then return to the original
program, picking up where it had left off.

   During such an operation, the exit to the DOS command prompt will result
in the command processor making a request for input.  Under normal
conditions, ANARKEY would return the next command in the multiple-command
line.  However, in this case, doing so would not be the desired response;
the next command should not be executed until the preceding command has
completed.  Thus, ANARKEY must handle this situation in a special manner.

   ANARKEY will automatically recognize the above-described condition.  When
it does, ANARKEY will not handle the request for input itself.  Instead, the
original DOS input handler is called to process the input request.  During
this time, none of the ANARKEY functions will be available.  Only after
exiting the secondary command processor, completing the original program and
returning to the original command prompt, will ANARKEY reactivate itself and
return the next command in the multiple-command line.

   All of this may seem a bit confusing and difficult to remember, however,
be aware that such situations will rarely occur and, when they do, ANARKEY
will handle them for you automatically.



                        Editing Environment Variables
                        -----------------------------

   It is often necessary to view the current value of a single environment
variable or to modify a variable's setting.  ANARKEY provides the capability
to recall and edit the value of any defined environment variable.  This is
especially handy when you have a long PATH setting and wish to add a single
directory to it.  Plain DOS would require that you reenter the entire list
of directories.  ANARKEY will retrieve the current PATH value and allow you
to modify it as you wish.

   <F9>               -- Retrieve Environment Variable
   <Ctrl-E>

   To retrieve the current value of an environment variable, enter the DOS
SET command followed by at least one space and then zero(!) or more
characters of the desired variable's name.  Variable names may be entered in
upper or lowercase.  An equal sign may or may not follow the environment
variable name, however, often it will not be necessary because you will not
be entering the entire name anyway.

   After entering the above line, invoke the Retrieve-Environment-Variable
function by pressing either the <F9> or <Ctrl-E> key.  ANARKEY will search
the list of defined environment variables for a completing match in the same
manner that it completes disk file names and history buffer lines.  When a
match is found, the rest of the variable's name will be entered onto the
input line followed by an equal sign and the variable's current value.  The
cursor position will be placed immediately after the equal sign.  The line
may then be edited.

   If the retrieved environment variable is not the one you desired, simply
invoke the Retrieve-Environment-Variable function again.  Like the other
ANARKEY completion operations, the Retrieve-Environment-Variable function
will cycle through all matching environment variables.  Thus, you can invoke
it repeatedly until the variable you want is retrieved.

   As an example, if you wish to retrieve the current value of the COMSPEC
environment variable, you could enter:

                C>set comspec_

   The underscore designates the location of the cursor.  At this point,
simply press the <F9> or <Ctrl-E> key to instruct ANARKEY to retrieve the
variable's value.

   If the environment variable exists, an equal sign and its value will be
added to the input line.  The cursor will be moved to immediately after the
equal sign.  The above situation could result in the following line:

                C>set comspec=C:\DOS\COMMAND.COM
                              -

   Any part of the line may now be modified using the available editing
functions.

   In the above example, it was not necessary to enter the entire variable
name; zero or more of its characters are all that ANARKEY needs to perform
the retrieval.  So the following line could have worked just as well:

                C>set c_

   Invoking the Retrieve-Environment-Variable function given this line,
ANARKEY will search through all the environment variables for one that
begins with the letter 'C.'  The first one it finds will be entered on the
input line.  If the retrieved variable is not the desired one, invoking the
function a second time will instruct ANARKEY to continue its search.  It
will retrieve the next variable it finds that begins with a 'C.'  This can
be done repeatedly, cycling through all of the matching variable names,
until the desired variable is found.

   Entering zero characters after the SET command, as in the following line:

                C>set _

will cause ANARKEY to cycle through all of the defined environment
variables.  Notice that at least one blank must follow the SET command.

   One important piece of information concerning environment variable names
may be in order here.  DOS will allow any character to be part of an
environment variable name except the characters <, >, | and =.  (Notice that
a space can be included as part of an environment variable's name.)  ANARKEY
adds the further restriction that they may not contain a semicolon character
(;), either.  This fact may be important when creating and retrieving
environment variable names.

   The Retrieve-Environment-Variable function may be used to recall variable
values simply to see to what value a specific variable is currently set.
This ability is most useful when a large number of environment variables
exist on a system and recalling all variables (as with a simple "SET"
command) would cause the variable list to scroll offscreen.  This situation
is becoming increasingly common as more and more programs require the
definition of multiple environment variables, usually for program
configuration purposes.

   Also, as previously suggested, environment variable retrieval is
extremely useful when you wish to edit a very long variable value, as is
often the case with the PATH variable.

   And speaking of PATH, DOS handles the PATH variable, along with the
PROMPT variable, in a manner which is slightly different from other
environment variables.  PATH and PROMPT are special in that they do not
require the SET command to precede them on the input line. SET may be used,
but is not required as it is for other variables.  ANARKEY supports this
special handling of the PATH and PROMPT variables; it will retrieve their
current values given any of the following input lines:

                C>set path_
                C>path_

                C>set prompt_
                C>prompt_

   ANARKEY will not complete the PATH or PROMPT variable name unless it is
preceded by the SET command.  For example, you could not enter:

                C>pa_

and have ANARKEY retrieve the rest of the name and its value.  You must
enter the entire variable name if it is not preceded by SET.  Thus, the
following would be valid:

                C>path_

   Alternatively, ANARKEY will complete the PATH name and retrieve its value
given the following SET command:

                C>set pa_

   Even though the examples show situations where the SET, PATH or PROMPT
command is the first and only command on the input line, this is not a
restriction of the Retrieve-Environment-Variable function.  The function may
be invoked upon any command on the input line, as in:

                C>dir *.* ; set comspec_

   Use of the semicolon (;) character in environment variables AND as a
command separator presents a special problem.  For example, PATH and other
environment values commonly specify several directories, each separated by a
semicolon.  Normally, ANARKEY would interpret these single semicolons as
command separators.  To include an actual semicolon in the value would
require either two consecutive semicolons or the repression of multiple
commands (as explained in the "Entering Multiple Commands per Line"
section).  If this were the final situation, it would be particularly
annoying, at best.  Fortunately, ANARKEY makes provisions for this
condition.

   Since SET, PATH and, to a lesser extent, PROMPT commands are fairly
common, ANARKEY treats them as special cases.  While ANARKEY is breaking the
input line into individual commands, it checks each command to see if it is
SET, PATH or PROMPT.  If it is, semicolon/command separator translation is
immediately turned off for the remainder of the line.  All remaining
semicolon characters on the line are interpreted as straight semicolons.
Two consecutive semicolons are interpreted as two consecutive semicolons;
they are not translated to a single semicolon as they normally would with
translation.

   The consequence of this solution is that another command may not follow a
SET, PATH or PROMPT command on the same input line.  Since the semicolon
translation is turned off, there is no way to indicate the end of the
SET/PATH/PROMPT other than the end of the input line.  Other commands may
still precede a SET, PATH or PROMPT command.

   Other than the uses already mentioned, this function may also be used to
save a variable's current setting, temporarily modify it and eventually
restore the saved value.  For example, say you want a different PATH value
for a short period of time.  Either of the following sequences would save
you time:

        1) Recall the current PATH value.
        2) Using the editing functions, change the name of the PATH variable
           to SAVED PATH.  (Remember that spaces are valid characters within
           environment variable names.)  Be sure to precede "SAVED PATH"
           with a SET command; only PATH does not require it.  After you've
           hit <Enter>, you'll have two environment variables, PATH and
           SAVED PATH.
        3) Set the new PATH value.  (If the new value resembles the original
           value, you may want to retrieve the original value and edit it.)
        4) Execute the desired commands which will use the new PATH value.
        5) To restore the original PATH, retrieve the SAVED PATH variable
           (you'll need to use SET).  Rename the variable from SAVED PATH to
           PATH (you can delete the SET command, too).

Alternatively:

        1) Recall the current PATH value.
        2) Without making any modifications, accept the line by pressing
           <Enter>.  This will store the input line in the history buffer.
        3) Create your modified PATH value.
        4) Execute the commands which use the new value.
        5) Retrieve the input line previously stored in (2) by using the
           supported history buffer functions.  Acceptance of the retrieved
           line will restore the original variable value.

   The second method described above has the advantage of not requiring an
additional environment variable.  However, you may come across situations
where the first method is a more desirable solution.

   Keep this function in mind whenever environment variables are concerned
and further uses, often in conjunction with the other ANARKEY functions,
will make themselves known.



                     The Mega-Key, All-in-One Completion
                     -----------------------------------
   ANARKEY provides a function which combines the operations of the
following functions in a single key:

          Find-History-Buffer-Match-and-Edit      <F5>, <Ctrl-K>
          Complete-Directory-Name                 <F7>, <Ctrl-D>
          Complete-File-or-Program-Name           <F8>, <Ctrl-F>
          Retrieve-Environment-Variable           <F9>, <Ctrl-E>

   The name of this combined function is Mega-Completion because it performs
all of the above completions in a single function.  In addition, Mega-
Completion determines the type of completion you are most likely attempting
and performs it for you automatically.  You do not need to tell ANARKEY what
to complete.  Whether it's a file name, environment variable, directory name
or a line retrieved from the history buffer, ANARKEY will figure that out
itself and do it!

   The keystroke assigned the Mega-Completion function is usually referred
to as the "Mega-Key."

   Among its advantages, the Mega-Key will save you from having to remember
all the keys associated with each of the individual functions.  Simply hit
the Mega-Key no matter what you want to do and ANARKEY will do the rest.

   By default, the Mega-Completion function is mapped to the <Tab> key.  Of
course, it can be reassigned with ANARKED.

   <Tab>              -- Mega-Completion
        Mega-Completion analyzes the current input line and determines which
        of the following completion operations would be most appropriate:

                Find-History-Buffer-Match-and-Edit
                Complete-Directory-Name
                Complete-File-or-Program-Name
                Retrieve-Environment-Variable

        It then executes the operation it evaluates to be most likely.

        Mega-Completion can be invoked repeatedly to have it work down its
        list of likely operations.  For example, Mega-Completion may
        determine that a directory name completion is most called for.  In
        this case it will first cycle through all matching directory names,
        just as if you had repeatedly invoked Complete-Directory-Name.
        After finishing that cycle, its analysis may conclude that the next
        most likely operation is a line completion.  Thus, subsequent
        invocations will search the history buffer for matching line
        completions, as though you were calling the Find-History-Buffer-
        Match-and-Edit function.  This kind of mega-cycling, "mega" because
        it is cycling through multiple functions rather than within a single
        function, can be continued until the desired completion is made.

   Mega-Completion will analyze the input line and perform the correct
completion operation an amazingly high percentage of the time.  But, of
course, nothing is perfect and you may occasionally have to cycle through a
few undesired completions before the Mega-Key retrieves the one you want.

   You can give the Mega-Key a clue about how you want the line completed by
prefacing the Mega-Completion call with one of the four functions it
performs.  For example, say you have entered one or two characters on the
input line and you would like to complete the line from one of the stored
lines in the history buffer.  You would like to use the Mega-Completion
function, but you are also, of course, in a hurry and want the Mega-Key to
make the correct completion as soon as possible.  Simply invoke the Find-
History-Buffer-Match-and-Edit function to retrieve the first matching
history buffer line.  Then press the Mega-Key.  Mega-Completion will take
the preceding line-completion operation as an instruction to perform line
completions over any other type of completion operation it may otherwise
determine to be appropriate.  It will pick up the history-buffer search from
the point where the last line-completion operation left off and continue
from there down its list of most-likely completions.  The Mega-Key will
operate in this manner whenever preceded by one of the four function
operations listed above.

   The Mega-Completion function is one more giant step toward a state of
total Anarkey, a state without keystrokes.



                         UNIX Switchar Conventions
                         -------------------------
   The UNIX operating system does not use the backslash(\) character to
separate directories in a path specification.  Instead, it uses the slash(/)
character.  UNIX also uses the dash(-) character to specify command options
or "switches" while DOS commonly uses the slash character for this purpose.

   Many people find the UNIX conventions more convenient.  In fact, DOS
provides an undocumented operating system function that will cause
COMMAND.COM's internal commands, such as COPY and DIR, to recognize the UNIX
switchar conventions.  There are several public domain programs available
that use this undocumented function to alter the DOS switchar.

   Unfortunately, these programs only have an effect on the internal
commands provided by COMMAND.COM; they do not work with external commands,
like XCOPY or third-party software.  They also have some strange
side-effects which make them an adventure to use at times.  Further, the new
versions of DOS since 4.xx and the DOS compatibility box of OS/2 do not
provide the undocumented function that supports the altered switchar.  Thus,
it is impossible to change the switchar conventions on the newer operating
systems using one of the SWITCHAR programs.

   ANARKEY solves all the problems related to the SWITCHAR programs.  It
supports the use of UNIX switchar conventions on *ALL* programs, whether
they are internal to COMMAND.COM or external.  ANARKEY also fills the void
left by the new operating systems that do not support the undocumented
function call.

   UNIX switchar conventions are activated by specifying the -U option on
the ANARKEY installation line.  Doing so will cause ANARKEY to convert
certain characters on an input line to their UNIX equivalents.  The
conversion takes place after the line has been accepted (<Enter>) and any
AKA substitution has occurred, thus, the usage of UNIX switchar conventions
is completely transparent to the user.

   Note: UNIX conventions can be used from a batch file provided the command
is prefaced by ANARKMD, the ANARKEY Command-Line Utility.  See the "ANARKMD
User Manual" distributed in the ANARKEY software package for further
details.

   The converted characters and what they are converted to is depicted in
the following chart:

                   Character on
                   command line            Converted to
                   ------------            ------------
                        /                       \
                        -                       /

   Note: The conversion of the dash character to a slash can be disabled by
including the 'S' modifier with the -U installation option.  Further details
can be found in the "Installation Options" section of this manual.

   The above chart documents that when UNIX switchar conventions are active,
all slash(/) characters are converted to backslashes(\) and all dashes(-)
are translated to slashes.  This is illustrated in the following examples
(the lines under the "Input line" column are what you would enter on the
command line; those under "Converted line" are what will actually be
executed):

          Input line                     Converted line
          --------------------           --------------------
          dir -p                         dir /p
          copy a:/dos/*.com c:           copy a:\dos\*.com c:
          xcopy a:/*.* c: -s             xcopy a:\*.* c: /s

   To enter an actual slash or dash on the command line, enter the desired
character consecutively.  For example,

          Input line                     Converted line
          --------------------           --------------------
          dir //p                        dir /p
          anarked --u                    anarked -u
          prog--1 file--1.txt            prog-1 file-1.txt

   Because of the situation depicted in the third example above, it is
highly recommended that you refrain from using dash characters in file
names.  It is best to use an underscore(_) character in place of the dash.

   Some third-party programs already support the UNIX switchar conventions,
for example, all of the support programs in the ANARKEY software package.
It would be inconvenient to have to always enter two dashes for every
command option.  Fortunately, this is not necessary.

   ANARKEY provides a method of specifying and saving the names of programs
which already support the UNIX switchar conventions.  Afterward, whenever
one of the programs is invoked, ANARKEY will suppress the switchar character
translations for that command.  This will save you from having to enter the
consecutive characters described above.

   ANARKEY stores the names of programs which use the UNIX conventions in an
area of memory that is allocated at installation time.  Along with the -U
option may be specified the size of this buffer.  The size must be
immediately after the 'U' with no spaces between them.

   If a buffer size is not specified, ANARKEY will allocate a default buffer
large enough to hold 25 characters.  If the -U option is not specified on
the installation line, no space is allocated for the buffer.  Refer to the
"Installation Options" section of this manual for further details on the
buffer size and the -U option.

   You tell ANARKEY which programs use UNIX conventions by entering the
program name on the command line prefaced with an exclamation point (!).
ANARKEY will store the program name in the "UNIX buffer" and subsequent
invocations of the program will not be subject to switchar translations.

   For example, to inform ANARKEY that the program "ANARKED" already
recognizes UNIX conventions and therefore do not perform the related
conversions, enter:

                >!anarked

   Now subsequent invocations of ANARKED will not have their slash and dash
characters converted.  For example, BEFORE storing its name in the UNIX
buffer:

           anarked -u    ...is converted to...     anarked /u

AFTER storing its name (a la "!anarked"):

           anarked -u     ...is unchanged...       anarked -u

   When a program name is stored in the UNIX buffer, only that program's
arguments will not be translated; all other items on the command line,
including redirected file names, path designations and piped commands, will
still be translated.

   This is best illustrated by an example.  Assume the program ANARKED is
stored in the UNIX buffer and ECHO is not.  The following command line and
its translated result is shown below.

   Original input line:
        >c:/bin/anarked -u >f:/log.txt | echo -test --the /translations

   Translated line:
        >c:\bin\anarked -u >f:\log.txt | echo /test -the \translations

   As the above example shows, ANARKEY intelligently parses the input line
and translates only the appropriate characters.

   As many program names can be stored in the buffer as will fit.  Each
program name requires enough space to hold the length of its name plus one
character.  Thus, the program "A" requires two characters from the buffer,
the program "AB" requires three, and so on.  If there is not enough room to
store the name, ANARKEY will beep.  Otherwise, the name is saved and
subsequent invocations of the program will not have their slash and dash
characters translated.

   As an alternative to entering the program name on the DOS command line,
it may be read in by LOAD, the ANARKEY Loader.  Often, it will be most
convenient to accumulate a list of UNIX-style programs and save their names
in a disk file.  The file can then be loaded during system start-up with
LOAD.  Just remember each program name in the disk file must be prefaced
with an exclamation point.  Instructions on the use of LOAD can be found in
the "LOAD User Manual" which came as part of the ANARKEY software package.

   ANARKEY provides a function which will display all the program names
stored in the UNIX buffer.

   <Shift-F4>         -- Display Switchar Programs
        Display the programs that already support the UNIX switchar
        conventions.  This is a list of all the program names stored in the
        UNIX buffer.

   A program can be removed from the UNIX buffer by specifying its name on
the command line prefaced by two (2) exclamation points.  Once removed, any
slash or dash characters on subsequent invocations of the program will be
translated.

   For example, to remove the "ANARKED" program from the buffer, enter:

                >!!anarked

   ANARKEY instructions to add(!) or remove(!!) program names from the UNIX
buffer can also be specified in multiple-command lines and AKAs.

   This enhanced switchar system makes it possible to consistently use UNIX
conventions on any program you run.  It is much more comprehensive than the
SWITCHAR programs that rely on the undocumented DOS function and it is also
available on operating systems where the DOS function is not supported (as
in DOS 4.xx and the compatibility box of OS/2).



                            Installation Options
                            --------------------

   ANARKEY supports an assortment of configuration options which may be
specified during program installation.

   An option may be in upper or lowercase and each must be preceded by a
dash (-) or slash (/) character.  All options are single characters,
however, some options require an additional argument which must appear
immediately after the option.  Options may appear in any order and each must
be separated by at least one space.

   An example ANARKEY installation line is:

        C>anarkey -f -h1000 -io

   The supported ANARKEY options are detailed in the remainder of this
section.

   The notational conventions used are:
        n       -- represents a numeric argument
        x       -- represents an alphanumeric argument
        []      -- an argument in brackets represents an optional argument


   -An                -- Allocate Space for AKA Definitions
        By default, AKAs are not supported by ANARKEY.  They must be enabled
        by the -A installation option.

        This option specifies how much space to reserve for AKA definitions.
        The amount of space is specified in number of characters.

        The total amount of space allocated for AKA storage, the history
        buffer (-H option) and the UNIX buffer (-U) may not exceed 50,000
        characters.  ANARKEY will automatically adjust the space allocated
        for AKA definitions if this limit is exceeded.

        To allocate enough space to store 400 characters of AKA definitions:

                C>anarkey -a400

   -C                 -- Cursor Shape Remains Unchanged
        Normally, ANARKEY sets the cursor shape based upon the input mode.
        Use of this option will repress all changes of the cursor shape.

   -E                 -- Load ANARKEY in Expanded Memory
        If enough expanded memory is available, ANARKEY will store the
        history buffer, AKA definitions and most of its code in expanded
        memory above 640K.  Only a very small fraction of ANARKEY remains
        resident in the lower 640K when using expanded memory.  This leaves
        more room for other programs to operate.

        ANARKEY supports all versions of the Lotus-Intel-Microsoft Expanded
        Memory Specification (LIM EMS), including versions 3.2 and 4.0.

        If a valid expanded memory manager is not installed or there is not
        enough expanded memory to store ANARKEY, an error message will be
        displayed and ANARKEY will install itself entirely in conventional
        memory (memory below 640K).

   -F                 -- Full Disclosure
        Under default operation, when a line is retrieved from the history
        buffer and then immediately accepted, ANARKEY moves the line to the
        end of the buffer.  Doing so prevents the buffer from becoming
        cluttered with duplicate lines.

        The -F option will repress this line movement and maintain the
        history buffer as a log of each line in their executed order.

   -Hn                -- History Buffer Size
        Create a history buffer capable of holding *n* number of characters.
        Buffer size may range from 255 to 50,000.  Default buffer size is
        500 characters.  If you try to set a buffer size less than 255 or
        greater than 50,000, ANARKEY will use the default value of 500.

        If AKA storage space is allocated (-A option), the total space used
        by the history buffer and AKA storage together may not exceed
        50,000.  ANARKEY will automatically adjust the space allocated for
        AKA definitions if this limit is exceeded.

        To allocate a history buffer of 10,000 characters:

                C>anarkey -h10000

        Notice that commas should not be included as part of the size value.

   -Ix[F]             -- Input Mode on Powerup [and Start of Input Line]
        Set the initial input mode to insert(x = I) or overwrite(x = O)
        mode.  The default value of x is I (insert mode).

        The powerup input mode affects the cursor shape.  An underscore
        cursor is used in the powerup mode; the alternate mode uses a
        block-shaped cursor.  (Note: Changing cursor shapes can be repressed
        by using the -C option.)

        To start ANARKEY in overwrite mode:

                C>anarkey -io

        During normal operation, ANARKEY will not change the input mode
        until you explicitly tell it to do so by invoking the
        Toggle-Insert/Overwrite-Mode function (<Ins>).

        Alternatively, ANARKEY may be configured to force the input mode
        back to the powerup setting at the start of each new input line.
        (Many of the alternative command-line editors operate this way by
        default.)  Simply append the 'F' option-modifier to the end of the
        -I option and ANARKEY will automatically force the input mode to the
        powerup setting whenever a new input line is requested.

        To start ANARKEY in overwrite mode and force the input mode to
        overwrite at the beginning of each new line:

                C>anarkey -iof

        To start ANARKEY in insert mode and force it into that mode at the
        start of each line:

                C>anarkey -iif

   -M                 -- Display ANARKEY Memory Usage
        The increasing size of application programs and DOS's limitation of
        640K of program memory have combined to make users count every byte
        their TSR programs eat up.  ANARKEY will tell you exactly how much
        memory it will request from DOS when the -M option is included on
        the installation command line.

        Add the -M option to any valid installation line and ANARKEY will
        calculate and display how much memory the specified configuration
        will require.  ANARKEY will not install itself; this option is for
        informational purposes only.

        If the installation line has a -E option (Load in Expanded Memory),
        the displayed message will include information on expanded memory
        usage as well as conventional memory (memory below 640K)
        requirements.  The total amount of memory ANARKEY will require is
        the sum of the conventional and expanded memory amounts.

        Expanded memory is allocated in 16K chunks.  Even if you need only a
        single byte, an entire 16K block is reserved.  Any unused memory in
        the 16K block just goes to waste because no other program can use it
        either.  This is a characteristic of the LIM expanded memory
        specification.  To help you use expanded memory to its fullest, the
        amount of reserved, but unused, expanded memory is displayed along
        with the amount that is used.  The sizes of the history, AKA and/or
        UNIX buffers can be increased to put this "free" memory to good use.

        An expanded memory manager need not be installed, nor does expanded
        memory have to be available when combining the -E and -M options on
        the same command line.

        To find out how much memory ANARKEY will request when configured
        with a 1000-character history buffer and 400 characters allocated
        for AKAs:

                C>anarkey -a400 -h1000 -m

        Note:
           The memory usage displayed by the -M option is not the exact
        amount DOS will reserve for ANARKEY; it is the amount ANARKEY will
        ask DOS to reserve for it.  DOS only guarantees that it will reserve
        AT LEAST the amount of memory requested.  To the requested value
        will be added the space allocated for defined environment variables.

        Tip:
           When a program is executed, it is assigned a copy of all defined
        environment variables at the time of execution.  If that program
        remains resident, this environment space remains resident with it.
        You can reduce the amount of memory a resident program requires by
        installing it BEFORE defining environment variables.

   -Pn                -- ANARKEY Process Number
        When ANARKEY is installed, it assigns to itself a process number
        which it later uses to determine if it is already installed.  There
        exists a small possibility that another TSR program will use the
        same process number ANARKEY wishes to use.  If this is the case,
        ANARKEY will think it has already been installed when, in fact, it
        has not been.  To install ANARKEY in this situation, ANARKEY must
        use an alternative process number which is specified via this
        option.

        The default process number is 35.  Valid process numbers are 0 to
        63.

        Here is an example of a ANARKEY installation that uses an
        alternative process number of 14:

                C>anarkey -p14

        If ANARKEY refuses to install, continue trying all valid process
        numbers.  (It will be extremely rare situations where this option
        will need to be used at all, let alone attempted several times.)

   -Q                 -- Run ANARKEY in Quiet Mode
        In quiet mode, the bell will sound only in situations where no other
        form of error notification is provided.  For example, it will not
        sound after cycling through all filename or history buffer
        completions and no matches remain.  However, the bell will still
        ring if an AKA definition cannot be stored due to lack of storage
        space.

   -Sn                -- Shortest Line to Store in History Buffer
        Short input lines are often easier to retype than to retrieve from
        the history buffer.  Rather than have these short lines clutter the
        buffer, they can be excluded from ever being entered.

        The -S option specifies the shortest line length required for a line
        to be stored in the history buffer.  Lines of less length will not
        be entered.

        By default, ANARKEY stores all non-empty lines (-S1).  Empty lines
        are never stored in the history buffer, even if -S0 is specified.

        To store only lines of four or more characters:

                C>anarkey -s4

   -U[S][n]           -- Translate Characters to UNIX Standards
        When the -U option is specified, certain characters are translated
        to their UNIX equivalents.  The converted characters are:

                Slash(/)  is converted to  Backslash(\)
                Dash (-)  is converted to  Slash(/)

        If the program being executed already recognized the UNIX switchar
        conventions and is stored in the UNIX buffer, these translations are
        suppressed.  Further details on the use of UNIX switchar conventions
        can be found in the section "UNIX Switchar Conventions" of this
        manual.

        The S modifier may optionally be appended to the -U option (i.e.
        -US).  This will cause only slash characters to be translated;
        dashes will remain unchanged.  With the current release of ANARKEY,
        this modifier is not very useful, but is maintained for
        compatibility purposes.

        With the -U and -US options can be specified the size of the "UNIX
        buffer" which is used to store the names of programs that already
        recognize the UNIX switchar conventions.  The size is specified in
        number of characters and must be immediately after the 'U' or 'S'
        option.

        If a size is not specified, ANARKEY will allocate a default buffer
        size of 25 characters.  If the -U or -US options are not specified,
        no space is allocated for the UNIX buffer.

        The total accumulated size of the history, AKA and UNIX buffers may
        not exceed 50,000.  If it does, the UNIX buffer will be
        automatically downsized to fit into 50,000.

        To use UNIX switchar conventions and allocate 100 characters for
        program names:

                C>anarkey -u100

   -Xxxx              -- Exclude File Extension
        Add a file extension to the ignored-extensions list used during a
        filename-completion operation.

        During filename completion, ANARKEY automatically ignores all files
        with the following extensions:

                .$$$    .BAK    .BIN    .COM    .EXE    .HEX
                .LIB    .OBJ    .OVR    .SYS    .TMP

        To include additional extensions in this list, specify them using
        the -X option.  An installation configuration may contain up to six
        -X options.  Standard DOS wildcard characters '?' and '*' are
        supported.

        Example:

                C>anarkey -xtxt -xbat -xq* -x??v

        The above line would cause ANARKEY to ignore all files with a .TXT
        or .BAT extension and any extension that started with a 'Q' or ended
        with a 'V'.

        -X\ is a special case option that will clear the entire extension
        list.  Use -X\ if you do not wish to use the default extensions
        listed above.  -X\ should be specified prior to any other -X options
        so as to prevent clearing any extensions you've added to the list.
        -X\ does not count toward one of the possible six -X options.



                             ANARKEY Internals
                             -----------------

   This section documents some of the inner workings of the ANARKEY program.
It is not necessary to read and understand this section in order to use
ANARKEY.  The information is provided for those people who prefer to know
something about the internal operations of the programs which they run.
Those people with no interest or technical background in this area may
safely skip this section and proceed to the next.

   The following discussion assumes the reader has a general understanding
of DOS functions and TSR program structure.

   Upon installation, ANARKEY hooks into two interrupts:

        1) Interrupt 2Fh (multiplex) to install program signature
        2) Interrupt 21h, function 0Ah

   Upon initial program execution, a program "signature" is installed which
is used by ANARKEY to prevent itself from being installed more than once.
ANARKEY installs it signature by chaining into interrupt 2Fh.  This is the
multiplex interrupt which is shared between the PRINT, SHARE and other TSR
programs.  Programs chaining into this interrupt assign themselves a
"process number" which is used for identification purposes.  Process numbers
0C0h thru 0FFh are reserved for user programs.  By default, ANARKEY
appropriates process number 0E3h.  During program initialization, ANARKEY
queries the appropriate process number to check if it has already been
installed.  If it determines that ANARKEY is not currently resident, it will
chain into the interrupt and continue the installation procedure.

   If this process number is being used by another TSR program, ANARKEY will
believe that it has already been installed.  It will display a message
stating as much and refuse to continue execution.  If this is the case, the
installation option -P may be used to install ANARKEY under a different
process number.  (The -P option is documented in the "Installation Options,
ANARKEY Process Number" section.  Notice that the -P argument which
specifies the new process number has been "de-programmer-ized."  Process
numbers are specified in decimal and range from 0 to 63.  The
de-programmer-ized value is first added to 0C0h (re-programmer-ized?) before
being used for installation.)

   Once ANARKEY has verified that it is not already installed and chained
into the multiplex interrupt, it hooks into interrupt 21h, function 0Ah, the
buffered input routine.  The resident portion of ANARKEY is a replacement
for this function, the standard version of which is provided by the
operating system.

   After installing its signature and hooking into the buffered input
interrupt, ANARKEY terminates its execution, but remains resident in system
memory.  Most subsequent calls for buffered input will be handled by
ANARKEY.
  


                           Special Considerations
                           ----------------------

   A few situations exist in which ANARKEY must operate in a special manner.
Each of these special and rare circumstances are described in this section.

Redirecting Output to a Serial Terminal
---------------------------------------
   When output is redirected to a serial terminal, i.e. the COM device, a
special set of problems arises.  Due to the many different characteristics
of serial terminal displays, it is difficult to implement many of the
ANARKEY functions so that they are compatible with all available terminals.
Because output redirection to a COM device is a relatively rare occurence,
ANARKEY handles this situation in a special manner.

   When output is redirected to a COM device, either by using the
redirection character ('>') or executing the CTTY program, ANARKEY will
temporarily disable itself.  ANARKEY will remain disabled until output is no
longer redirected to the COM device, at which time it will re-enable itself.
Notice that ANARKEY will recognize this situation on its own and will handle
it appropriately; there is no need for the user to do anything special.

Incompatible Programs
---------------------
   Some programs are not 100% compatible with ANARKEY.  Known
incompatibilities are documented here.
 
   -- SIDEKICK
        Old versions of Borland's SIDEKICK will not correctly execute lines
        containing multiple commands.  After executing the first command on
        the line, SIDEKEY will pause before allowing subsequent commands to
        run.  Pressing any key will cause the remaining commands to execute.
        To solve this problem, upgrade to a newer version of SIDEKICK.

   -- RAWMODE (as distributed with NANSI and any offshoots)
        Distributed with the public domain NANSI device driver is the source
        code for a program that will place the screen console into raw mode.
        This source code and any programs generated from it contain a bug
        that will cause ANARKEY to disable itself.  Thus, ANARKEY will be
        loaded, but none of its features will seem to work.

        ANARKEY will work fine in raw mode, however, the RAWMODE program
        does more than just set the console's mode.  Even when RAWMODE is
        used to set the screen back into cooked mode, it leaves behind side
        effects that will cause ANARKEY to disable itself.  If RAWMODE is
        run even once during a computer session, ANARKEY will appear to not
        work.  Rebooting the computer will erase the undesired and
        unnecessary RAWMODE effects.

        A fixed RAWMODE program will be supplied to you upon request when
        you register ANARKEY.

        For the technically oriented: When setting the console mode, do NOT
        change bit 4 of the device data word.  The NANSI RAWMODE programs
        change bits 4 and 5; only bit 5 needs to be altered.

   -- TOPS
        If ANARKEY is to work with the TOPS local area network, ANARKEY must
        be installed after TOPSKRNL/TOPSCLNT.

        Also, TOPS alters some of the keystroke codes received as input from
        the keyboard.  This results in problems when reassigning keystrokes
        using ANARKED, the ANARKEY Keystroke Editor.

        This problem may be gotten around by restricting key assignments to
        only those keystrokes not altered by TOPS.  Finding those keys that
        are altered is a try-and-see operation (i.e. "try" the keystroke and
        "see" if ANARKED handles it correctly).



                             Future Directions
                             -----------------

   ANARKEY is a powerful and extremely useful program in its current state.
However, I believe that everything can be improved upon and ANARKEY is no
exception.  I foresee the future direction of ANARKEY to be primarily
user-driven.  For this to be possible, I need your comments and suggestions.

   After you've used the program for a while, please take a few minutes to
let me know what you think.  I welcome and strongly encourage suggestions
concerning additional features you would like to see added to ANARKEY.  I am
also very interested in hearing about the current features that you find
most useful and those that you don't use very often, if at all.  Also, if
you decide that ANARKEY is not a useful tool, I would like to know what
features you believe it lacks.  All comments - the good, the bad and the
ugly - will receive serious consideration and are strongly encouraged.



                 The Association of Shareware Professionals
                 ------------------------------------------

   ANARKEY is produced by Steven Calwas, a member of the Association of
Shareware Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-related
problem with an ASP member by contacting the member directly, ASP may be
able to help.  The ASP Ombudsman can help you resolve a dispute or problem
with an ASP member, but does not provide technical support for members'
products.  Please write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA
98006 or send a CompuServe message via EasyPlex to ASP Ombudsman 70007,3536.


   Please send your registration form, suggestions and comments to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER
```
{% endraw %}

## ANARKMD.DOC

{% raw %}
```








                                  ANARKMD
                      The Anarkey Command-Line Utility
                                User Manual

                                Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                                 Steven Calwas
                              All rights reserved

















                               Introduction
                               ------------

   ANARKMD (pronounced "anar-command") is a support program for the ANARKEY
software package.  It allows the execution of certain ANARKEY functions to
be instigated from the command line as opposed to the keyboard.  An ANARKEY
function executed via ANARKMD operates exactly as if you had pressed the
associated function invocation keystroke yourself.  In addition, ANARKMD
offers some function enhancements not available when the function is
executed from the keyboard.  For example, a filename and location may be
specified when writing the history buffer contents to a disk file.  With
ANARKMD, ANARKEY functions can be invoked from within a batch file, a
multiple command input line or an AKA.

   ANARKMD can also be used to execute an AKA or multiple-command input line
from within a batch file.  Normally, ANARKEY is not active during batch file
processing, but, with ANARKMD, many of the powerful features of ANARKEY will
now be available.



                              Running ANARKMD
                              ---------------

   ANARKMD can be executed from the DOS command prompt, within a batch file,
from an AKA or anywhere else a normal program can be run.

   The only restriction to ANARKMD execution is that it may NOT be run from
within a multiple command line unless it is the very last command in the
line.  If ANARKMD is run in a multiple command line and other commands
follow it on the line, all the following commands will be ignored; they will
not be executed.

   ANARKMD command-line syntax is:

        ANARKMD [-option | input_line]

   ANARKMD is really two programs combined into one; it can be used to
either:

        (1) execute an ANARKEY function or
        (2) execute an entire input line which may contain multiple commands
        and AKAs.

   Depending on which operation you wish to perform, either a function
description ("-option") or the line to execute ("input_line") must be
provided to ANARKMD on its command line.  This manual will first discuss how
to invoke an ANARKEY function and then move on the executing entire lines.


Invoking ANARKEY Functions
--------------------------
   To execute an ANARKEY function from the command-line, ANARKMD must be
told:

        (1) to execute an ANARKEY function and
        (2) which function to execute

   Both of these pieces of information are provided to ANARKMD via
command-line options.  Options always begin with a dash (-) character and
may be in upper or lower case.  Options may be specified in any order.

   The supported options are:

   -Fx          -- ANARKEY function to execute

   The -F option is used to tell ANARKMD which ANARKEY function to execute.
   Only one -F option per ANARKMD invocation is allowed.  If multiple -F
   options are specified, only the last one will be recognized.

   The -F option is immediately followed by a full description of the
   function to be executed.  No spaces may separate the -F option from the
   function description.

   ANARKMD looks at only the first two characters of the description to
   determine its identity, thus, you may abbreviate the function description
   by only specifying its first two characters.  The function description
   may be in upper or lower case.

   The supported functions are:

     o BOttom_display_history_buffer

        The contents of the history buffer are display onscreen starting
        from the last line in the buffer and advancing to the first.  This
        function executes the ANARKEY Display-History-Buffer-From-Bottom
        function assigned to the <Ctrl-F4> key.

        Examples:
                        >ANARKMD -FBottom_display_history_buffer
                        >ANARKMD -FBO

     o CLear_history_buffer

        All lines stored in the history buffer will be removed.

        This function is identical to executing the ANARKEY Clear-History-
        Buffer function assigned to the <Ctrl-X> key by default.

        Examples:
                        >ANARKMD -Fclear_history_buffer
                        >ANARKMD -fCL

     o DIsplay_history_buffer

        The contents of the history buffer will be displayed onscreen.  This
        function invokes the ANARKEY Display-History-Buffer-Contents
        operation mapped to the <F4> key.

        Examples:
                        >ANARKMD -FDisplay_History_Buffer
                        >ANARKMD -FDI

     o LIst_switchar_programs

        The contents of the UNIX switchar buffer will be displayed onscreen.
        This operation executes the ANARKEY Display-Switchar-Programs
        function mapped to <Shift-F4>.

        Examples:
                        >ANARKMD -FList_Switchar_Programs
                        >ANARKMD -FLI

     o REstore_anarkey

        Will restore ANARKEY input processing of DOS command lines.  Input
        processing can be disabled by the SUspend_anarkey_input_processing
        function.  Refer to the SUspend_anarkey_input_processing option's
        description for further details.

        There is no comparable function available in ANARKEY.  Once
        suspended, ANARKEY can only be restored by running ANARKMD with this
        option.

        Examples:
                        >ANARKMD -FRestore_anarkey
                        >ANARKMD -FRE

     o SHow_AKAs

        The list of defined AKAs will be displayed onscreen, just as if you
        had invoked the ANARKEY View-AKAs function by pressing the <Alt-F4>
        key.

        Examples:
                        >ANARKMD -Fshow_AKAs
                        >ANARKMD -Fsh

     o SUspend_anarkey

        Will suspend ANARKEY handling of input commands.  All ANARKEY
        features will be disabled indefinitely.  ANARKEY can be enabled
        again by running ANARKMD with the REstore_anarkey option.

        There is no comparable function available in ANARKEY itself.

        Examples:
                        >ANARKMD -FSuspend_Anarkey
                        >ANARKMD -FSU

     o TOggle_input_mode

        The TOggleInputMode function will cause ANARKMD to execute the
        ANARKEY Toggle-Insert/Overwrite-Mode function whose default key
        assignment is the <Ins> key.

        Examples:
                        >ANARKMD -Ftoggle_input_mode
                        >ANARKMD -Fto

     o UNdefine_all_AKAs

        All AKAs will be undefined.  This is the same as pressing the
        <Alt-X> key to invoke the ANARKEY Undefine-All-AKAs function.

        Examples:
                        >ANARKMD -FUndefine_all_AKAs
                        >ANARKMD -Fun

     o WRite_history_buffer:file_specification

        The contents of the history buffer are written to the
        file_specification disk file.  "file_specification" is any valid DOS
        filename, including an optional drive and/or path name.  There is
        no default value for file_specification; it must always be
        explicitly specified.  The file_specification is separated from the
        function description by a colon (:).  No spaces may exist on either
        side of the colon.

        This function executes the ANARKEY Write-History-Buffer-to-Disk
        function normally assigned to <Ctrl-W>.

        Support for the file_specification provides a new capability not
        found in the associated ANARKEY function.  ANARKEY will only write
        the disk file to ANARKEY.LOG in the root directory of the current
        drive.

        This capability can be very useful if you have a standard batch file
        you run whenever you powerdown your machine.  You could add a line
        to the batch file which saves the current history buffer and then
        run LOAD from the AUTOEXEC file to restore the buffer the next time
        you powerup.

        Examples:
                        >ANARKMD -Fwr:e:\usr\dave\log\buffer.log
                        >ANARKMD -Fwr:\log\savehist.buf
                        >:whb anarkmd -fwr:c:\anarkey.log
                        anarkmd -fwr:%1         <--- As in a batch file


   -Pn          -- ANARKEY Process Number

   The -Pn option is used to inform ANARKMD of ANARKEY's installation
   process number.  This option is identical to the -P option available on
   the ANARKEY installation line.  Please refer to the "ANARKEY User Manual"
   for details about when to use this option.

   The -P option will only be required in extremely rare instances.  If you
   installed ANARKEY without it, you will not need to use it for ANARKMD
   either.

   Examples:
                        >ANARKMD -FToggle_Input_Mode -P14
                        >ANARKMD -p3 -Fun


Executing an Entire Input Line
------------------------------
   As mentioned, ANARKMD can also be used to execute an entire input line.
This capability is most useful when used in batch files as it allows you to
execute multiple-command lines and AKAs within them.

   To have ANARKMD execute an input line, simple specify the line on the
ANARKMD command line.  Any valid DOS input line may be entered.  If ANARKEY
is installed, any valid ANARKEY input line is also allowable.  This means
the line can contain multiple commands and AKAs and be up to 255 characters
long.  The line will be executed just as if it had been entered at the DOS
command prompt.

   Some sample command lines follow.

                ANARKMD dir
                ANARKMD aka;edit file.x;aka2
                ANARKMD aka2 file1 file2 file3

   If the line contains DOS redirection characters >, >> or < or the pipe
operator |, bracket the entire line with double quotes (").

                ANARKMD "dir >dir.log"
                ANARKMD "aka file1 | more;aka2"

   As part of the process of executing a line, ANARKMD creates a temporary
disk file.  By default, the file will be written to the current directory of
the current drive.  The temporary file can be written somewhere else by
defining an environment variable called "ANARTMP".  ANARTMP should be set to
the drive and/or directory to which the temporary file should be written.
The temporary file is always deleted before ANARKMD terminates.

   For example, the following environment variable definitions would
instruct ANARKMD to store its temporary file in a specific location:

                >SET ANARTMP=g:
                >SET ANARTMP=c:\temp\
                >SET ANARTMP=a:/etc



                          Comments and Suggestions
                          ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning ANARKMD and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## CONVERT.DOC

{% raw %}
```








                                    CONVERT
                        The Anarkey AKA Conversion Utility
                                  User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                               by Steven Calwas
                              All rights reserved















                                Introduction
                                ------------

   CONVERT will translate alias and synonym definitions of other command-
line editors into an ANARKEY AKA-compatible format.  The resulting file can
then be used as input to LOAD which will pass the list of AKA definitions to
ANARKEY.  Thus, if you have accumulated a list of aliases and synonyms for
another command-line editor, CONVERT can help make the transition to ANARKEY
a smooth and painless experience.

   CONVERT can process alias and synonym definitions for the following
command-line editors:

                                -- CED
                                -- PCED
                                -- DOSEDIT

   Note: Further editing may be required on some of the converted
definitions, especially PCED definitions, before they may be used as input
to LOAD.



                               Getting Started
                               ---------------

   CONVERT command-line syntax is:

        CONVERT -type input_file [output_file]

   The type argument indicates the format of the definitions to be
converted, for example, whether they are CED-compatible synonyms or DOSEDIT
aliases.  The type may be specified anywhere on the command line and must be
immediately preceded by a dash (-) character.  It may be in upper or
lowercase.  The supported type arguments are:

                    -C      -- convert CED synonyms
                    -D      -- convert DOSEDIT aliases
                    -P      -- convert PCED synonyms

   Input_file specifies the disk file containing the original alias or
synonym definitions.  The file's name may include an optional drive and path
specification.

   Output_file specifies the disk file to where the converted AKA-compatible
definitions should be written.  The output_file name may contain an optional
drive and path specification.  Following creation, this file can be used as
input to LOAD.  (Refer to the "LOAD User Manual" for instructions on using
LOAD.)

   The output_file argument is optional.  If output_file is not specified,
CONVERT will write the AKA-compatible definitions to the file ANARKEY.AKA in
the current directory of the current drive.

   Sample CONVERT command lines are:

         CONVERT -c syn.def anarkey.cfg
         CONVERT -d dosedit.ali
         CONVERT -p pced.syn c:\bin\anarkey.syn

   In the first example, the CED synonyms (specified by the -C type
argument) contained in the file SYN.DEF will be converted and saved to a
file called ANARKEY.CFG.

   The second example translates the DOSEDIT definitions (-D) in DOSEDIT.ALI
and writes the converted aliases to the default output file ANARKEY.AKA.

   Finally, the PCED definitions in PCED.SYN are converted and written to
the file C:\BIN\ANARKEY.SYN.



                        Converting DOSEDIT Aliases
                        --------------------------

   CONVERT will successfully translate 100% of the definitions contained in
a DOSEDIT alias file.  No further editing will be required on the output
file; it may be fed immediately as input to LOAD.

   DOSEDIT users would benefit immensely by becoming familiar with the
additional power available in ANARKEY AKAs.  The capabilities to pass
parameters to AKAs and to create AKAs consisting of multiple commands should
reduce your editing time significantly.  The many other powerful features of
ANARKEY contribute even further to make it an attractive alternative.

   Welcome to ANARKEY!



                       Converting CED and PCED Synonyms
                       --------------------------------

   CONVERT will perform most of the grunt editing work required to translate
CED and PCED synonyms to an ANARKEY-compatible format.

   However, while all synonyms will be translated to a valid ANARKEY format,
the resulting AKA will not always be the exact equivalent to the original
synonym.  This is especially true of converted PCED synonyms.  Some manual
touch-up will be required on these definitions to complete the conversion.
The types of definitions requiring touch-up will be pointed out as this
discussion unfolds.

   CONVERT recognizes and processes the following CED/PCED commands:

                                CHAINCH
                                PARAMCH
                                SYN
                                USERSYN

   All other commands in the CED or PCED file are ignored by CONVERT.

CHAINCH Commands
----------------
   By default, CED and PCED use the caret(^) character to separate multiple
commands.  When CONVERT encounters this character in a synonym substitution
string, it will replace it with the ANARKEY command-separator character,
semicolon (;).

   If a CHAINCH command is encountered that changes the separator character,
CONVERT will remember the new separator and replace occurrences of it with
semicolons.

PARAMCH Commands
----------------
   PARAMCH commands are handled in a manner similar to CHAINCH commands.

   By default, CED and PCED recognize the start of a parameter field by the
percent sign (%).  Since ANARKEY uses the same character for this purpose,
no conversion is normally required.

   However, the parameter-field character may be changed in CED/PCED by the
PARAMCH command.  If PARAMCH changes the parameter-field character, CONVERT
will remember the new character and replace all instances of it with percent
signs.

SYN and USERSYN Commands
------------------------
   One major difference between CED/PCED and ANARKEY is that ANARKEY does
not differentiate between input requests made by the primary command
processor and those made by a user program or secondary shell.  In ANARKEY,
all commands are stored in the same history buffer and all AKA definitions
are available at any time.

   Because of this, CONVERT treats SYN and USERSYN commands identically.  On
the one hand, this saves you from having to define the same synonym twice,
once for each environment.  On the other hand, it means you will have to
rename any synonym names that differ only in the context of their use.  As
an example, assume the following CED synonyms:

                SYN     d       dir
                USERSYN d       dir /w

   CONVERT will translate these definitions to:

                :d      dir
                :d      dir /w

   In this case, where two AKA definitions use the same AKA word, the second
definition would replace the first when LOAD processed the file.

Other Considerations
--------------------
   Additional modifications besides the translation of command-separator and
parameter-specification characters may occur during conversion.  For
example, if the converted file is a PCED configuration file (-P), any
asterisk characters (*) in the synonym name are removed.  Also, if the
substitution string is bracketed by special characters (for example,
quotes), they are removed.

   Note: PCALL and PCED's '*' operator are not necessary in ANARKEY.  A
similar (and more powerful and elegant) functionality is provided by the
character-matching history buffer retrieval method.  Refer to the "ANARKEY
User Manual" for further information.

   Because the '*' operator is not necessary, many of the synonyms
containing it may no longer be of any use.  For example, a synonym such as:

                SYN     L*ONGNAME       LONGNAME

is nearly superfluous in ANARKEY.  Eliminating such definitions will reduce
the amount of space ANARKEY will require for AKA storage.

   ANARKEY does not support nested AKAs and CONVERT does not look for nested
synonyms in the input file.  As an example, assume the following nested
synonym definitions:

                SYN     d       dir
                SYN     dd      d^pause^d

   CED/PCED would expand the "dd" synonym to "dir^pause^dir."  CONVERT will
not take the nesting action into account during translation and, thus, the
resulting AKA definitions would be:

                :d      dir
                :dd     d;pause;d

   The removal of asterisks from synonym names and ignorance of nested
definitions will often result in an AKA definition that is not equivalent to
its PCED original.  It is suggested that you examine the translated AKA
definitions and manually perform any necessary modifications to complete the
conversion.

   After CONVERT has finished its job and any touch-up is done, the file may
be processed by LOAD which will pass the converted AKA definitions to
ANARKEY.

   To all CED and PCED users, welcome to the world of ANARKEY!



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning CONVERT and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## FASTART.DOC

{% raw %}
```


                                  ANARKEY
                            Quick-Start Tutorial
                            --------------------

   ANARKEY offers many powerful features that you will find extremely
helpful when entering DOS command lines.  However, it is not necessary to
understand all of ANARKEY's powers before you begin to use it.  This
introductory tutorial will get you started using the basic ANARKEY features
immediately.  As you become familiar with them, additional information can
be found in the "ANARKEY User Manual."

   First, simply execute the ANARKEY.COM program file from the DOS command
prompt as you would any other program.  A sign-on message will appear and
you will be sitting at a new command prompt.  Everything will appear normal
except now the ANARKEY features are available for your use.

   One of ANARKEY's most useful features is its editing facility.  To
demonstrate this, enter the following line at the command prompt:

                      >echo This is an ANARCHY test_

   The underscore in the above line shows the current cursor position at the
end of the line.  In the sample, the word ANARKEY is misspelled (sort of).
We wish to change ANARCHY to ANARKEY.

   To accomplish this, the <Left-Arrow> key can be pressed to move the
cursor left until it is under the first character we wish to modify.  Go
ahead and do this now.  Notice that moving the cursor does not delete
characters as it backtracks through the line.

   The line, with its cursor position now under the 'C', should look like
this:

                      >echo This is an ANARCHY test
                                           -

   In addition to the <Left-Arrow> key moving the cursor left one character,
the <Right-Arrow> key will move the cursor right one character.  Also, the
<Home> key will move the cursor to the beginning of the line and pressing
the <End> key will send the cursor to the end of the line.  Experiment
moving the cursor with the <Left> and <Right> arrow keys and the <Home> and
<End> keys.  Positioning the cursor in this way has no effect on the
contents of the command line, so you can play with them all you like.

   After you have a feel for positioning the cursor, reset the cursor so it
is under the 'C' character in ANARCHY.  We'll now complete the editing
operation we originally started out doing - changing ANARCHY to ANARKEY.

   When characters are typed on a line, they are either "inserted" into
the line or they "overwrite" the current character.  When a character is
inserted, any characters to the right of the cursor are shifted over to make
room for the new character.  When a character is overwritten, the new
character replaces the character at the cursor position; no shift occurs.

   Whether a character will be inserted or overwritten is determined by the
"mode" ANARKEY is in, either insert mode or overwrite mode.  When first
installed, ANARKEY is in insert mode.  Thus any characters typed will be
inserted into the line and the remainder of the line will be shifted to make
room for them.

   Verify this on the sample line by entering the single character 'K'.  The
command line and cursor position should now look like this:

                      >echo This is an ANARKCHY test
                                            -

   ANARKEY can be placed in overwrite mode by pressing the <Ins> key.  Do so
now.

   When in overwrite mode, the cursor shape changes from an underscore to a
block shape.  That is how you can tell which mode you are in; insert mode
has an underscore cursor and overwrite mode has a block cursor.

   You can return to insert mode by pressing the <Ins> key again.  The <Ins>
key toggles the editing mode between insert and overwrite.  The cursor shape
will always remind you which mode you're in.

   Set the editing mode back to overwrite (block cursor) and type an 'E'
character.  The 'E' will overwrite the 'C' under the cursor and advance the
cursor to the next character.  The command line should now look like this:

                      >echo This is an ANARKEHY test
                                             -

   The cursor shown above is an underscore, but your screen cursor will be a
block.  Press the <Ins> key to toggle back into insert mode so that the
screen display will match our example.

   In addition to being inserted, characters may also be deleted by pressing
the <Del> key.  When the <Del> key is pressed, the character under the
cursor is removed from the line and any characters to the right are shifted
over to fill the vacated space.

   Press the <Del> key with the cursor under the character 'H'.  The 'H'
will be deleted and the remaining characters shifted over one space.  The
line will look like this:

                      >echo This is an ANARKEY test
                                             -

   The <Backspace> key can also be used to delete characters from the line.
<Backspace> differs from the <Del> key in that it will remove the character
TO THE LEFT of the cursor position and move the cursor left one space.

   Experiment with the editing keys you've learned so far.  They are:

                <Left-Arrow>    Move cursor left one character
                <Right-Arrow>   Move cursor right one character
                <Home>          Move cursor to beginning of line
                <End>           Move cursor to end of line
                <Ins>           Toggle between insert and overwrite modes
                <Del>           Delete character under cursor
                <Backspace>     Delete character to left of cursor

   When you are comfortable with the editing keys, enter the original
example line above and press <Enter>.  The cursor may be positioned anywhere
on the line when <Enter> is pressed; the entire line will be accepted.  The
ECHO command we just entered will be executed and the cursor will be sitting
at a new command prompt.  You should see the following on your screen:

                      >echo This is an ANARKEY test
                      This is an ANARKEY test

                      >_

   ANARKEY "saves" all the commands you enter.  A list of the saved commands
can be displayed onscreen by pressing the <F4> key.  Do so now to show that
ANARKEY has saved the command we just entered.  Your screen should look like
this:

                      >
                      echo This is an ANARKEY test

                      >_

   Enter and execute the following commands:

                      >dir *.*
                      >type read.me
                      >dir \*.bat

   Now press the <F4> key to verify that ANARKEY has saved each of the
commands.  Your screen should look like this:

                      >
                      echo This is an ANARKEY test
                      dir *.*
                      type read.me
                      dir \*.bat

                      >_

   In addition to saving your commands, ANARKEY allows you to retrieve them
for editing and re-execution.  Often retrieving a command will be much
easier than retyping it.

   Commands can be retrieved by pressing the <Up-Arrow> and <Down-Arrow>
keys.  These keys retrieve commands from the saved list sequentially.

   Press the <Up> and <Down> arrow keys a few times and you will see how
this is done.

   An easier way to retrieve commands is available by using ANARKEY's
command completion feature.  Start with a blank command line and enter the
first character of the command you wish to retrieve.  For example, say you
wish to retrieve the ECHO command we started this tutorial with.  Simply
enter the character 'e' on the command line (case does not matter).  The
command line should look like this:

                      >e_

   To "complete" the command, hit the <Tab> key.  ANARKEY will start from
the bottom of the saved-command list and search for the first command that
begins with the character 'e'.  When it finds one, it retrieves the command
and enters it on the command line, thereby completing the command for you.
Given our example, the command line would now contain:

                      >echo This is an ANARKEY test
                        -

   The completion operation required only two keystrokes ('e' and <Tab>)
while a comparable <Up-Arrow> retrieval would have required four keypresses.
If the desired line was further up in the saved-command list, the completion
operation would have saved even more keystrokes.

   If the retrieved command was not the command you wanted, pressing <Tab>
again will instruct ANARKEY to find and retrieve another command that begins
with an 'e'.  If another command exists in the list, it will be retrieved
and entered on the command line.  <Tab> can be pressed any number of times
to cycle through all the commands that match.

   You can also specify more than one character of the desired command.  Any
number of characters can be specified, although one or two will usually be
enough.

   Once a command has been retrieved, it can be modified using the editing
facilities described earlier.  When the command is ready for execution,
simply press <Enter>.

   Commands are not the only thing ANARKEY will complete.  Directory and
file names can also be completed.  This is done by pressing the <Tab> key,
same as when completing commands.  ANARKEY is smart enough to know what type
of completion you want and will go ahead and do it automatically.

   As an example, say you wish to move to a directory called \GLOBAL.  Enter
the following command line:

                      >cd\g_

   Only the first character of the directory is needed (you can enter more
if you want, but there is no need).  Then press the <Tab> key.  ANARKEY will
determine that you want to complete the name of a directory and go ahead and
do it, entering the name on the command line.  The line will now look like
this:

                      >cd\global
                           -

   If there were several directories that began with 'G', ANARKEY may choose
one of them for its completion.  If ANARKEY completes the name with an
undesired name, simply continue pressing <Tab>.  ANARKEY will cycle through
all the directories beginning with the letter 'G'.  Eventually, it will
complete the one you're looking for.

   Notice that the cursor position does not change after a name completion.

   You can now press <Enter> to execute the command.

   To continue this example, say you really want to go to the directory
called \GLOBAL\PROGS.  Assume we have just completed the \GLOBAL portion and
the cursor is sitting under the first 'l' in 'global' as shown above.  Now
press the '\' key.  The command will become:

                      >cd\global\_

   Notice that the cursor position automatically moved to the end of the
directory name before entering the backslash(\) character.  This automatic
cursor positioning will occur whenever you are completing directory or file
names and you press a key that cannot be a part of the name, such as the
backslash, space or slash(/) characters.  The character will be appended to
the end of the completed name automatically.

   We can now complete the PROGS portion of the command line by entering a
'p' and pressing <Tab>.  The final command line is:

                      >cd\global\progs
                                  -

   The command can be executed by pressing <Enter>.

   File names can be completed in the same manner.  For example, say you
wish to copy a file called LETTER.TXT to drive A:.  Enter the following line
and press <Tab>:

                      >copy l_

   ANARKEY knows you want to complete a file name and does so automatically
so that the command line will now look like this:

                      >copy letter.txt
                             -

   To specify drive A:, simply press <Space>.  This will cause the cursor
position to automatically move to the end of the completed file name and
enter a space on the line.  Then type in the 'a:' portion.  Pressing <Enter>
will execute the command.  The final line will look like:

                      >copy letter.txt a:_

   Not only will the <Tab> key complete directory and file names, but it
will complete program names, too.  To do so, the program file must be in the
current directory.  For example, say you wish to execute a program called
EDIT which is stored in the current directory.  At a fresh command prompt,
enter an 'e' and press <Tab>.  ANARKEY is smart enough to know that a
program name completion is called for and will perform the appropriate
completion.

   There are occasions when it is necessary to modify an environment
variable's value.  This often occurs when a slightly different PATH value is
required.  The painstaking method of re-entering the entire value is not
necessary with ANARKEY.  ANARKEY will enter any environment variable's value
on the command line for you.  You can then edit it to the desired value
before executing/saving it.

   As an example, say you want to modify the value of the PATH environment
variable.  Simply enter the following portion of the line and press (what
else?) the <Tab> key:

                      >set p_

   ANARKEY will determine that you wish to complete an environment variable
automatically.  It will enter the name of the variable and its current value
on the command line.  The cursor will be positioned under the first
character of the variable's value.  Thus, the command line may look like
this:

                      >set path=c:\;c:\dos;c:\global;c:\bin\programs
                                -

   If more than one environment variable began with a 'p', each could be
retrieved and entered on the command line by repeated pressings of <Tab>.

   The PATH and PROMPT environment variables are special in that they do not
require that they be defined with a SET command.  If SET is not specified on
the command line then the entire environment variable's name must be spelled
out before pressing the <Tab> key.  Thus, the following would have to be
entered:

                      >path_

   The <Tab> key can now be pressed to retrieve the value of the PATH
variable.

   You have probably noticed that the <Tab> key does a lot of things.  It
will complete commands, names of directories, files and programs and even
environment variables.  Since one key does all this, ANARKEY is extremely
easy to learn and use.

   ANARKEY will correctly determine the appropriate completion type 75% to
90% of the time.  Occasionally, ANARKEY will make a mistake and think that
you want to complete something, say a command, when what you really want to
complete is a program name.  This is not a problem.  Simply continue to
press the <Tab> key.  Once ANARKEY has finished completing all matching
command lines, it will stop and think "Gee, I've cycled through all the
command completions and he or she still wants more.  They must want to
complete something other than a command."  It will then determine what the
most-likely type of completion is and perform it.  In the few cases when a
second choice such as this is needed, ANARKEY will make the correct
decision.

   You are now able to use the basic features of ANARKEY.  With this
knowledge, you can start using ANARKEY productively right now.

   However, this tutorial was meant to get you started quickly and only
touches the surface of ANARKEY's full capabilities.  Much more is available.
If you are interested in learning about the other powerful ANARKEY features,
read the "ANARKEY User Manual."



                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER
```
{% endraw %}

## LOAD.DOC

{% raw %}
```








                                      LOAD
                               The Anarkey Loader
                                   User Manual

                                  Version 3.00






















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                                 Steven Calwas
                              All rights reserved

















                               Introduction
                               ------------

   LOAD will read the contents of an ASCII text file and store each line,
unexecuted, into the ANARKEY history buffer.

   Although "regular" command lines are not executed before being stored,
lines containing AKA definitions ARE processed as though they had been
entered on the command line.  In other words, the AKA is defined.  UNIX
switchar program names are also processed.  (The processing of an AKA or
UNIX program definition can be suppress by specifying the -D option on the
LOAD command line.  The -D option is explained later in this manual.)

   Once ANARKEY is installed, LOAD may be executed at any time and any
number of times.  It will probably be useful to run LOAD immediately after
installing ANARKEY to initialize your starting environment.  For example,
you may define any AKAs and restore the contents of the history buffer from
the previous computer session.  Later, a switch in tasks may warrant the use
of a different set of AKAs.  LOAD can be run again to read and define these
new definitions.
  


                             Loading a Disk File
                             -------------------

   ANARKEY must already be installed in order for LOAD to store lines into
its history buffer.  If ANARKEY is not installed, LOAD will display an error
message and halt execution.

   NOTE: If invoked from a multiple-command input line or AKA, LOAD must be
the very last command in the line.

   LOAD syntax is:

        LOAD [-options] filename [filename...]

   If you invoke LOAD with no arguments, a short usage message will be
displayed.

   Normally, one or more file names will be specified on the LOAD command
line.  Each file specification may contain the DOS wildcard characters '*'
and '?'.  LOAD will perform the wildcard expansion and process each matching
file in turn.

   Each file should contain standard ASCII text characters.  LOAD will read
one line at a time from the file.  Blank lines and lines whose first word is
"REM" are ignored.  Otherwise, the line is stored in the history buffer,
unexecuted.  If there is not enough room in the buffer to store the line,
lines are removed from the top of the buffer to make room.  (This operation
is explained in detail in the "ANARKEY User Manual.")

   If the line is an AKA definition (specified by a colon in the first
character position), it will be processed and added to the list of AKAs (or
removed from the list if it is an un-define).  If there is not enough
available AKA space to store the definition, LOAD will beep and display an
error message.

   Likewise, a UNIX switchar program name (specified by a single or double
exclamation point) will be processed.  Provided there is enough room to
store the name in the UNIX buffer, it will be saved.  If there is not enough
room, LOAD will beep and display an error message.  If the program name is
to be removed from the buffer, LOAD will do so.

   Lines longer than 255 characters and lines containing individual commands
longer than 127 characters will be rejected by LOAD.  An error message
stating the nature of the problem will be displayed and the offending line
will then be discarded.  LOAD will continue reading any remaining lines in
the file.

   LOAD assumes that the multiple-commands-per-line feature is active in all
processed lines unless the line contains a SET, PATH or PROMPT command.  If
one of these commands is encountered, LOAD handles it in the same manner as
ANARKEY does, i.e. the remainder of the line is considered a single command.
LOAD also assumes that SET, PATH and PROMPT are not assigned to an AKA, for
example:

                              :S      SET



                           Command-Line Options
                           --------------------

   Options may appear anywhere on the command line.  Each must be
immediately preceded by a dash (-) character.  Options may be in upper or
lower case.  The supported options are detailed in the remainder of this
section.


Suppress Processing of AKA and UNIX Definitions
-----------------------------------------------

        -D      -- Do Not Process AKA and UNIX Definitions

   The -D option instructs LOAD to not process any AKA or UNIX definitions
it encounters in the loaded text file(s).  When -D is specified, AKA and
UNIX definitions will not be stored in the AKA, UNIX or history buffers.

   This suppression is useful when loading files which may contain some AKA
or UNIX definitions that were temporarily defined, but are no longer
desirable.  Such instances may occur when loading a saved history-buffer log
file.


Calculating Required AKA and Switchar Space
-------------------------------------------

        -M      -- Display AKA and Switchar Memory Requirements

   When -M is included on the command line, LOAD will read the contents of
each specified file and accumulate the number of characters taken up by AKA
and UNIX switchar definitions.  The file's contents are not loaded into the
history buffer, nor are the AKA or switchar definitions processed.

   After all of the files have been scanned, LOAD will display the total
amount of space the defined AKAs will require.  This value can then be used
to allocate space for AKAs during ANARKEY installation (see the -A option in
the "ANARKEY User Manual").

   If switchar definitions require memory, LOAD will display the total
amount needed.  If there are no switchar definitions, no message will be
displayed.

   LOAD does not keep track of AKAs or switchar programs that are defined
more than once nor AKA un-definitions.  Any command read from the disk file
that begins with the AKA definition character (colon, ':') or UNIX switchar
character (single exclamation point, '!') is added to the accumulated total.
Thus, if a disk file contained the following definitions:

               :define         rem This is an AKA definition
               :define         rem A new substitution string
               :define
               !abc
               !abc

LOAD would include the lengths of all five lines in its total, even though
the net result will require no AKA space and only four switchar characters.
(The above AKA definitions require no space because the second definition
replaces the first one and the third "definition" undefines it completely,
leaving nothing defined.)

   ANARKEY does not have to be installed to use LOAD with the -M option.


Specifying the ANARKEY Process Number
-------------------------------------

        -Pn     -- ANARKEY Process Number

   This option is identical to the -P option available on the ANARKEY
installation line.  Please refer to the "ANARKEY User Manual" for details
about when to use this option.

   The -P option will only be required in extremely rare instances.  If you
installed ANARKEY without it, you will not need to use it for LOAD either.


Suppressing Run-Time Messages
-----------------------------

        -Q      -- Run in Quiet Mode

   When LOAD is running in quiet mode, informational messages, such as the
name of the file being processed, are suppressed.  Error messages will still
be displayed.



                           Comments and Suggestions
                           ------------------------

   I would love to hear your suggestions, comments, and enhancement ideas
concerning LOAD and the other programs in the ANARKEY software package.
Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```



                        ANARKEY 3.00 Update Information
                        -------------------------------


   Welcome to ANARKEY Version 3.00.


   This document is to inform current ANARKEY users of the new features and
enhancements in version 3.00.  With this information, upgrading to the new
release will be a quick and easy experience.

   All of the features explained here are also included in the various
manuals contained in the ANARKEY distribution package.  New ANARKEY users
are encouraged to read the FASTART.DOC file and the other manuals so that
they will be able to use all the powerful ANARKEY features to their fullest
capabilities.



                                ANARKEY 3.00
                                ------------

Support for Expanded Memory
---------------------------
   ANARKEY now supports the Lotus-Intel-Microsoft Expanded Memory
Specification commonly referred to as LIM EMS.  All versions of the LIM spec
are supported, including versions 3.2 and 4.0.

   When using expanded memory, ANARKEY will store its history buffer, AKA
definitions and most of its code in expanded memory.  ANARKEY uses less than
1000 bytes of conventional memory, i.e. memory below 640K, when using
expanded memory and there is no noticeable degradation in response time,
even on original 4.77 MHz PC's.

   To have ANARKEY use expanded memory, simply add a -E option to your
normal installation line.

   In conjunction with expanded memory support, the -M option which displays
ANARKEY memory usage without actually installing the program has been
enhanced to include expanded memory information.  This can be used to
optimize your memory consumption when configuring history and AKA buffer
sizes.

   The "Installation Options" section of the "ANARKEY User Manual" describes
the -E and enhanced -M options.
 

The Mega-Key, All-in-One Completion
-----------------------------------
   ANARKEY provides a function which combines the operations of the
following functions in a single key:

          Find-History-Buffer-Match-and-Edit      <F5>, <Ctrl-K>
          Complete-Directory-Name                 <F7>, <Ctrl-D>
          Complete-File-or-Program-Name           <F8>, <Ctrl-F>
          Retrieve-Environment-Variable           <F9>, <Ctrl-E>

   The name of this combined function is Mega-Completion because it performs
all of the above completions in a single function.  Mega-Completion analyzes
your command line, determines the type of completion you are most-likely
attempting and performs it for you automatically.  You do not need to tell
ANARKEY what to complete.  Whether it's a file name, environment variable,
directory name or a line retrieved from the history buffer, ANARKEY will
figure that out itself and do it!

   The keystroke assigned to the Mega-Completion function is referred to as
the "Mega-Key."

   Among its advantages, the Mega-Key will save you from having to remember
all the keys associated with each of the individual functions.  Simply hit
the Mega-Key no matter what you want to do and ANARKEY will do the rest.

   By default, the Mega-Completion function is mapped to the <Tab> key.  Of
course, it can be reassigned with ANARKED.

   <Tab>              -- Mega-Completion
        Mega-Completion analyzes the current input line and determines which
        of the following completion operations would be most appropriate:

                      Find-History-Buffer-Match-and-Edit
                      Complete-Directory-Name
                      Complete-File-or-Program-Name
                      Retrieve-Environment-Variable

        It then executes the operation it evaluates to be the most likely.

        Mega-Completion can be invoked repeatedly to have it work down its
        list of likely operations.  For example, Mega-Completion may
        determine that a directory name completion is most called for.  In
        this case it will first cycle through all matching directory names,
        just as if you had repeatedly invoked Complete-Directory-Name.
        After finishing that cycle, its analysis may conclude that the next
        most likely operation is a line completion.  Thus, subsequent
        invocations will search the history buffer for matching line
        completions, as though you were calling the Find-History-Buffer-
        Match-and-Edit function.  This kind of mega-cycling, "mega" because
        it is cycling through multiple functions rather than within a single
        function, can be continued until the desired completion is made.

   Mega-Completion will analyze the input line and perform the correct
completion operation an amazingly high percentage of the time.  But, of
course, nothing is perfect and you may occasionally have to cycle through a
few undesired completions before the Mega-Key retrieves the one you want.

   You can give the Mega-Key a clue about how you want the line completed by
prefacing the Mega-Completion call with one of the four functions it
performs.  For example, say you have entered one or two characters on the
input line and you would like to complete the line from one of the stored
lines in the history buffer.  You would like to use the Mega-Completion
function, but you are also, of course, in a hurry and want the Mega-Key to
make the correct completion as soon as possible.  Simply invoke the Find-
History-Buffer-Match-and-Edit function to retrieve the first matching
history buffer line.  Then press the Mega-Key.  Mega-Completion will take
the preceding line-completion operation as an instruction to perform line
completions over any other type of completion operation it may otherwise
determine to be appropriate.  It will pick up the history-buffer search from
the point where the last line-completion operation left off and continue
from there down its list of most-likely completions.  The Mega-Key will
operate in this manner whenever preceded by one of the four function
operations listed above.

   The Mega-Completion function is one more giant step toward a state of
total Anarkey, a state without keystrokes.

   Mega-Completion documentation can be found in the "ANARKEY User Manual"
in the section titled "The Mega-Key, All-in-One Completion."


Name Completion
---------------
   In the continuing quest to find the perfect name completion operation,
version 3.00 further tweaks the completing of file, program and directory
names.

   When a file, program or directory name (referred to simply as "name" in
the future) is completed by either the Mega-Key or one of the respective
completion functions, the cursor position will remain unchanged.  The list
of matching name completions can then be cycled through just as in previous
versions.

   During the cycling process, if you realize that there are many matching
completions to cycle through, you can give the matching operation additional
characters to use in its matching string by simply entering them at the
current cursor position.  For example, say you have entered the following
command:

                >edit a_

   The underscore character represents the current cursor position.  You now
begin a filename completion operation and ANARKEY begins cycling through all
the files that begin with the letter "a".  The input line may now look like
this:

                >edit anarkey.doc
                       -

   Notice that the cursor position remains unchanged, immediately following
the "a" character.  After one or two matches, you suddenly remember there
are 56 files that begin with the letter "a" and you don't want to cycle
through all of them.  You can give the completion operation a further clue
about the file you desire by simply entering additional characters of its
name.  Say the specific file you want is called "ABACUS.TXT".  Since you
have already entered the beginning "a", enter the "b" now.  The input line
will look like:

                >edit abnarkey.doc
                        -

if you are in insert mode.  If you are in overwrite mode, the "b" will
replace the "n".  In either case the cursor position is updated as shown
above.  Now you may either continue the completion operation or enter more
characters of the name.  If you continue completion, all the matching names
will now start with the characters "ab".  For example:

                >edit abacus.txt
                        -

   This method of name completion can be used to narrow the list of matching
names during the cycling operation.

   In many cases, additional arguments must be entered on the input line
following a completed name.  For these arguments to be entered in the
correct location on the line, the cursor position must be moved so it is
after the name.  ANARKEY supports this cursor positioning automatically.

   The cursor will move automatically to the end of the completed name when
any of the following characters are entered:

                     <SPACE> " * + , / : ; < = > ? \ |

   If the UNIX switchar character translations are active (via the -U
installation option explained later), entering a dash(-) character will also
move the cursor to the end of the completed name.  After moving to the end
of the name, the pressed keystroke will be entered into the line.

   This enhancement to the name completion operation should make it easier
than ever to complete file, program and directory names.

   The completion operation is explained in detail in the "ANARKEY User
Manual" under the heading "Name Completion Functions."


Environment Variable Completion
-------------------------------
   In previous versions, it was necessary to enter the entire environment
variable name before ANARKEY would retrieve its value and enter it on the
input line.  With version 3.00, environment variable names may be completed
and cycled through in the same manner as file and directory names.

   To have ANARKEY complete an environment variable name, simply enter the
SET command followed by zero(!) or more characters of the variable's name.
Then invoke the Retrieve-Environment-Variable function (<F9> or <Ctrl-E> or
the Mega-Key, <Tab>).  ANARKEY will search the list of environment variables
for a matching completion.  If it finds one, the rest of the variable's name
is entered on the input line followed by an equal sign and the variable's
current value.  The cursor will be placed immediately after the equal sign.
You may then edit the variable's name and value or, if the retrieved
variable is not the one you wanted, you can invoke the function again and
have it cycle through all the existing matching variables.

   Notes: At least one space must follow the SET command.  Also, name
completion cannot be done on the PATH or PROMPT variables unless they are
preceded on the input line by a SET command.  The current values of PATH and
PROMPT can be retrieved without a SET command by specifying their entire
name on the input line.

   The operation associated with the Retrieve-Environment-Variable function
is also done as part of the Mega-Completion operation.  Thus, it is not
necessary to explicitly tell ANARKEY it is dealing with environment
variables; simply press the Mega-Key and ANARKEY will figure that out by
itself!

   The Retrieve-Environment-Variable function is documented in the "ANARKEY
User Manual" under "Editing Environment Variables."


Display of History Buffer Contents
----------------------------------
   The contents of the history buffer may be displayed from the bottom of
the buffer to the top by invoking the Display-History-Buffer-from-Bottom
function.  The default key assignment for this function is <Ctrl-F4>.  The
contents of the history buffer will be displayed onscreen starting with the
last line in the buffer and backtracking to the first line.  Thus, the most
recently-entered lines will be displayed before older lines.  This is
particularly helpful when a large history buffer is utilized.

   The history buffer can still be displayed from the top to the bottom by
invoking the Display-History-Buffer-Contents function <F4>.

   The Display-History-Buffer-from-Bottom function is documented in the
"ANARKEY User Manual" under "History Buffer Functions."


UNIX Switchar Conventions
-------------------------
   The -U installation option which provides UNIX switchar conventions (i.e.
slashes(/) in path specifications and dashes(-) as switch designators) has
been significantly enhanced.  It now provides a complete environment where
ALL programs can be invoked using the UNIX conventions.

   As in version 2.00, the -U option specified at installation time will
cause ANARKEY to translate all slash characters to backslashes(\) and all
dashes to slashes.  The 'S' modifier can be used to convert only slashes and
leave dashes alone.

   What was lacking in v2.00 was a reasonable method of invoking programs
that already supported the UNIX conventions.  For example, if a program
already recognized the dash as the beginning of an option (or switch), it
was necessary in v2.00 to specify two consecutive dashes, which would then
be converted to a single dash by ANARKEY.

   Version 3.00 provides a method to indicate to ANARKEY those programs
which already support the UNIX switchar conventions.  Afterward, whenever
one of the programs is invoked, ANARKEY will suppress the switchar character
translations for that command.  This will prevent you from having to enter
the consecutive characters described above.

   ANARKEY stores the names of programs which use the UNIX conventions in an
area of memory that is allocated at installation time.  Along with the -U or
-US options, you may specify the size of the buffer.  The size must be
immediately after the 'U' or 'S' with no spaces between them.  For example,

                >anarkey -u100
                >anarkey -us75

   If a buffer size is not specified, ANARKEY will allocate a buffer large
enough to hold 25 characters.  If the -U or -US options are not specified on
the installation line, no space is allocated for the buffer.

   You tell ANARKEY which programs use UNIX conventions by entering the
program name on the command line prefaced with an exclamation point (!).
For example, to inform ANARKEY that the program "ANARKED" already recognizes
UNIX conventions and therefore do not perform the related conversions on its
command line, enter:

                >!anarked

   If there is not enough room to store the program name in the buffer,
ANARKEY will beep.  Otherwise, the name is saved and subsequent invocations
of ANARKED will not have their characters translated.

   Rather than specifying program names on the DOS command line, they may be
read in by LOAD.  For example, it will probably be most convenient to
accumulate a list of UNIX-style programs and save their names in a disk
file.  This file can then be loaded during system start-up using LOAD.
Remember, each of the lines in the disk file must begin with an exclamation
point.

   A list of the currently defined UNIX-style programs can be displayed by
invoking the Display-Switchar-Programs function.  This function is assigned
to the <Shift-F4> key by default.  ANARKED, the ANARKEY Keystroke Editor,
can be used to change this assignment if you wish.

   A program can be removed from the UNIX buffer by specifying its name on
the command line preceded by two (2) exclamation points.  For example, to
remove the "ANARKED" program from the buffer, enter:

                >!!anarked

   Instructions to ANARKEY to add or remove program names from the UNIX
buffer can also be specified in multiple-command lines and AKAs.

   This enhanced switchar system makes it possible to consistently use UNIX
conventions on any program you run.  It is much more comprehensive than the
SWITCHAR-type programs available that rely on an undocumented DOS function
to support UNIX conventions on internal DOS commands only.  Also, this
undocumented operating system function is not included in DOS 4.xx or the
DOS compatibility box of OS/2.  Thus, the ANARKEY method is not only the
most powerful method, but, in certain environments, it's the only way to go.


Sign-on Procedure for Unregistered Users
----------------------------------------
   The ANARKEY software package is now distributed in two forms: a
registered version and an unregistered version.

   Unregistered versions of ANARKEY require the user to go through a sign-on
procedure during installation.  This procedure displays a message informing
the user that the version of ANARKEY she or he is running is unregistered
and lists instructions on how to receive a registered version.  At the end
of the message, the user is prompted to enter an 8-digit number.  This
number must be entered correctly in order for ANARKEY to continue its
installation.

   All registered users receive a registered version of ANARKEY that does
not require this sign-on procedure.  A registered version of ANARKEY is sent
immediately to all people who send in their paid registration form.

   THE REGISTERED VERSION OF ANARKEY IS LICENSED TO THE SINGLE PERSON WHO
REGISTERED THE PROGRAM AND MAY NOT BE DISTRIBUTED IN ANY MANNER.  It is
unlawful to distribute the registered version of ANARKEY in any form.  Do
not, repeat, do NOT distribute the registered version anywhere.

   Please respect this distribution restriction as it protects your
interests in the software as well.  People who do not register the software
discourage the release of future updates.

   The unregistered sign-on procedure is also discussed in the "ANARKEY User
Manual" in the section "Getting Started."


New Signature Installation Procedure under DOS 2.x, 3.0
-------------------------------------------------------
   Of interest to software-internals fanatics: ANARKEY now installs its
program "signature" in the INT 2Fh (multiplex) interrupt for all versions of
DOS.  The signature is used to prevent multiple copies of ANARKEY from being
installed at the same time.

   Previous versions of ANARKEY when run under DOS 2.x or 3.0 would
appropriate an unused interrupt vector between 60h and 67h, inclusive, to
install the program signature.  When running under DOS 3.1 and later,
ANARKEY has always used INT 2Fh.

   The -P (ANARKEY Process Number) installation option is now available at
all times and is not ignored under DOS 2.x and 3.0.

   ANARKEY's internal installation procedure is documented in the "ANARKEY
Internals" section of the "ANARKEY User Manual."  (This information is only
provided for those interested in such matters; it is not necessary to read
or understand this area to effectively use ANARKEY.)  The -P option is
detailed in the "ANARKEY User Manual" under "Installation Options."



                                ANARKMD 3.00
                                ------------

   ANARKMD (pronounced "anar-command") is a new support program that will
invoke ANARKEY functions from the command line.  ANARKMD can be executed
from an AKA or batch file to execute ANARKEY functions without having to
press the necessary keystrokes yourself.  

   ANARKMD also supports two features the regular ANARKEY program does not:

        -- specification of a file name and location to which to write the
        history buffer contents.  ANARKEY will always write the history
        buffer to a file called "ANARKEY.LOG" in the root directory of the
        current drive.  If the Write-History-Buffer-Contents function is
        invoked through ANARKMD, the name and location of the file can be
        specified to any valid file specification.

        -- suspending and restoring ANARKEY processing.  By using ANARKMD,
        ANARKEY can be suspended indefinitely.  ANARKEY remains in memory,
        however, none of its features are available.  ANARKMD can then be
        used to restore ANARKEY processing.  These capabilities are not
        available in ANARKEY itself and are only possible through ANARKMD.

   In addition to these new capabilities, ANARKMD can be used to toggle the
input mode, clear or display the history buffer or defined AKAs and display
the list of switchar programs.

   ANARKMD is really two programs in one; in addition to executing an
ANARKEY function from the command line, ANARKMD can be used to execute an
AKA or multiple-command input line from within a batch file.  Since ANARKEY
is not active when processing a batch file, it was not possible to utilize
its features from batch files in previous versions.  ANARKMD now provides
this capability.

   Complete documentation on the use of ANARKMD can be found in the "ANARKMD
User Manual."



                                ANARKED 3.00
                                ------------

Carrying Over Key Assignments from an Earlier Version of ANARKEY
----------------------------------------------------------------
   The registered version of the ANARKEY software package includes a version
of ANARKED that makes upgrading from a previous version very easy.  The
registered ANARKED will allow you to carry over the key assignments of a
previous version (2.00 or later) of ANARKEY to the new release.  This will
save you from having to go through the entire key assignment operation when
you upgrade to a new version of ANARKEY.  Unregistered versions do not have
this capability so each function must be reassigned individually.  (If you
have been using ANARKEY for more than 30 days, it is time for you to
register the program.  You will be sent a registered version with the key-
carryover capability immediately upon receipt of your paid registration.)

   When upgrading, specify the -U option on the ANARKED command line.
ANARKED will prompt you for two input files:

        (1) the original ANARKEY file whose key assignments you wish to
            carry over and
        (2) the new release ANARKEY file to which you are upgrading.

   If both files are valid ANARKEY program files, the key assignments of the
old version will be transferred to the new version.

   If the new release includes new functions not supported in the earlier
version, ANARKED will remove any default key assignment to these new
functions so as to prevent any occurrence of a key being assigned to more
than one function.  ANARKED will display a list of these new functions in a
window when it begins execution.  The new functions can be assigned to a key
during your ANARKED session.

   The following new functions have been added to ANARKEY 3.00 and will
therefore be unassigned when transferring key assignments from version 2.00:

      Function Name                           Default Key Assignments
      -------------                           -----------------------
      Mega-Completion                         <Tab>
      Display-History-Buffer-from-Bottom      <Ctrl-F4>
      Display-Switchar-Programs               <Shift-F4>

   After transferring the key assignments to the new version, the normal
ANARKED operation continues and you may modify the configuration of the new
release further.  Be sure to save your changes when exiting ANARKED if you
are transferring key assignments from a previous release.

   The -U option is documented in the "Getting Started" section of the
"ANARKED User Manual."


Assigning an Already-Assigned Key to the Active Keystroke Field
---------------------------------------------------------------
   In previous versions, ANARKED would assign to the active keystroke field
a key which was already assigned to another ANARKEY function.  ANARKED would
automatically remove the original key assignment before assigning it to the
active field and would then emit a beep informing the user of what it had
done.

   When this occurs in version 3.00, ANARKED displays a window stating the
function name to which the key is currently assigned and asks the user if it
should remove the assignment.  Responding with a 'Y' (upper or lowercase) or
<Enter> key will remove the key from its current assignment and assign it to
the active keystroke field.  Pressing any other key will leave the key
assignment and the active keystroke field unchanged.
 


                                 LOAD 3.00
                                 ---------

Support for UNIX Switchar Programs
----------------------------------
   As mentioned in the section on the new support for "UNIX Switchar
Conventions," LOAD will recognize and process commands which begin with an
exclamation point(!) as UNIX switchar program definitions.  The -M option
which calculates the amount of storage required for AKA definitions has been
enhanced to include support for UNIX program definitions.

   LOAD support for UNIX program definitions is described in the "LOAD User
Manual."


Suppress Processing of AKA and UNIX Definitions
-----------------------------------------------
   A new command-line option (-D) has been added to LOAD which instructs
LOAD to not process any AKA or UNIX definitions it encounters in the loaded
text file(s).  When -D is specified, AKA and UNIX definitions will not be
stored in the AKA, UNIX or history buffers.

   This suppression is useful when loading files which may contain some AKA
or UNIX definitions that were temporarily defined, but are no longer
desired.  Such instances may occur when loading a saved history-buffer log
file.

   The -D option is also explained in the "LOAD User Manual" in the section
on "Command-Line Options."



   Please fill out the registration form and send it with your comments and
suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER

```
{% endraw %}

## FILE1877.TXT

{% raw %}
```
Disk No: 1877                                                           
Disk Title: Anarkey                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: ANARKEY                                                  
Author Version: 3.00                                                    
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
Tired of having to retype the DOS command when you make a spelling      
error?  Reduce the number of keystrokes you make when entering DOS      
commands by using ANARKEY.                                              
                                                                        
ANARKEY is a commmand-line editor that will significantly reduce the    
keystrokes you make when entering DOS commands.  ANARKEY provides one of
the most powerful, compact, and flexible command-line environments      
available on a DOS machine.                                             
                                                                        
ANARKEY is a memory resident program that intercepts your DOS commands. 
When you make a typing error, you can move the cursor backwards, without
erasing characters, and make the correction.   You can't do this with   
DOS.  The shape of the cursor also changes to indicate overwrite or     
insert mode.  ANARKEY will save all the commands you enter so that you  
can recall them for later use.  This saves you from having to reenter   
commands that are used repeatedly.  Simply press the F4 key until the   
command you want appears and then press enter.                          
                                                                        
ANARKEY also provides improved program and directory search functions,  
copy functions, and the ability to control environment variables.       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1877

     Volume in drive A has no label
     Directory of A:\

    ANARKEY3 ARC    184193  10-01-89  12:00a
    ANARKEY3 ZIP    147571  10-01-89  12:00a
    FILE1877 TXT      2591  12-22-89   5:50p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694  12-27-89   3:58p
            5 file(s)     335087 bytes
                           24576 bytes free
