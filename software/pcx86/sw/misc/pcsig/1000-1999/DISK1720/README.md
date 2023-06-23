---
layout: page
title: "PC-SIG Diskette Library (Disk #1720)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1720/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1720"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HYPERSHELL"

    HYPERSHELL offers a powerful yet straightforward method of linking
    different text files by key words.  By placing codes within your text
    you can allow others to follow their interest from one file to another.
    Maneuvering of key words creates a type of on-screen menu which allows
    users to quickly move through documents directly related to their
    interests or needs.
    
    For example, you are reading a text file called "Personnel" searching
    for information regarding severance policies.  The document doesn't tell
    you enough about severance policies so you access other documents on
    your system regarding this subject until you find the right one.  Once
    you designate reference words which link related files together, these
    links can be bridged easily by anyone.  In the example above,
    "severance" would be the reference word and would appear as a
    highlighted word in the file "Personnel."  Using cursor keys or a mouse,
    move to "severance" and press return.  All text files you have tagged as
    related to the topic are now at your fingertips without leaving your
    original document.
    
    HYPERSHELL assists you in the initial set-up of a hypertext system by
    providing a hypertext editor, syntax checker, and formatted printer
    program, as well as several helpful utilities.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INTRO.TXT

{% raw %}
```
       Introduction to creating hyperfiles
       ===================================

       You can learn a lot from using the supplied hyperfiles. It is
       important to read the HS hyperfile (Introduction on the HOME
       menu) first, to see what HyperShell is and how you use it

       HyperShell is a very complex program and handles very complex
       hyperfiles. This does NOT mean that you have to know everything
       about it before you start. The more powerful features can be
       learnt as and when you need them.

       To show how simple a file can be, try giving the name of any
       normal text file to HyperShell (such as the READ.ME file):-

       HS READ.ME

       This gets treated as a single 'frame' hyperfile which you can
       page through, and use F10 to exit from.

       If you have a favourite editor or word processor, you can use
       that to produce your hyperfiles. If you do not know how to use an
       editor, you can use the small one supplied on the disk. This is
       usually used for creating small note files for HyperShell, but
       can be used for hyperfiles up to a certain size as well.

       The next stage is to break a file into 'frames', and give each
       frame a name. This can be done by using a text editor to add a
       line at the start and at various points in the file with the
       following format:-

        .FRAME name

       Note that the .FRAME must be at the VERY START of the line. The
       name you give each frame should be a short name of one or two
       words which gives an indication of what the piece of text
       afterwards is about, and you should not use the same name twice.

       Now when you run HyperShell it only displays the first frame, and
       displays the name for you. To move to another frame, press
       function key 2 to display a contents list and select another
       frame.

       You have now got a simple hyperfile, but you need some cross
       references to make it into a hypertext file. Using the editor
       again, add some text into each frame which includes the name of
       one of the other frames. Now add reference flags to the name in
       the text by putting a ~F immediately before it and a ~E
       immediately after it. These will form the 'references' which can
       be selected to move around in the hyperfile. Try running
       HyperShell again, and you should find that the references are
       highlighted. You should be able to select a reference and move
       the referenced frame. If it claims the frame is not available,
       you have probably not got the name exactly correct (it does not
       have to be in exactly the same 'case' i.e. the frame name can
       start with capital letters and the reference can start with small
       letters), or you may have put an extra space in between words in
       the name (this is easy if you use a word processor which pads out
       lines to the same length), or you may have split the name over
       two lines (also easy with a word processor).

       What you can do next is to add 'titles' for your frames. this is
       easily accomplished by adding an extra line after each .FRAME
       line of the form:-

        .TITLE title of frame

       Again the .TITLE must be at the very start of the line. If you
       add a title to each frame, you can then run HyperShell again and
       see the title displayed on the frame display and in the contents
       list.

       You can now add a special 'header' to your file, which will
       replace the normal header. To do this, add a line at the start of
       the hyperfile with .HEADER on it. After this line, and before the
       first .FRAME line, you can put whatever text you want in your
       header. If this includes the string '$1', this will be replaced
       by the name of the frame when it is displayed. $2 will be
       replaced by the title of the frame. These strings are known as
       'system variables' and you can look in the reference guide to see
       what other variables are available. Run your hyperfile again now,
       and it should show the header at the top of each frame displayed,
       with the frame name and title in the locations you specified.

       You should have a file of roughly the following form, the
       dashes representing any text:-

        .HEADER
        - - - - $1 - - - - $2 - - -
        .FRAME name1
        .TITLE title for name1
        - - ~Fname2~E -
        - - -
        .FRAME name2
        .TITLE title for name2
        - - -
        - - ~Fname1~E -
        .FRAME name3
        .TITLE title for name3
        - - ~Fname2~E -
        - ~Fname1~E - -

       What next?
       ----------

       You are now in a position to experiment and start adding other
       features to your hyperfiles.

       You should look at the following stages in turn, using the
       reference guide for information, and the supplied hyperfiles
       as examples, and trying out the features in your own
       hyperfiles:-

       Novice
       ------

                Hyperfile structure
                Footer
                References flags for frames, notes, menus
                Notes  -  global and local
                Menus  -  global and local

                HOME.HYP
                MSDOS.HYP

       Intermediate
       ------------

                Formatting flags
                Colour schemes
                Setup script
                Actions
                Dynamic menus
                Options
                Reserved characters

                HS.HYP
                DATABASE.HYP

       Advanced
       --------

                Scripts
                Variables
                Conditions
                Action modifiers
                Functions
                Autoreferencing

                HSREF.HYP

       Expert
       ------

                Browse through the reference guide to find
                what you don't know about. And if you have
                reached this stage, how about registering?

       A phased tutorial with a worked example is provided when
       you register, along with other documents and authoring
       tools to make your job easier.
```
{% endraw %}

## NOTED.TXT

{% raw %}
```










                    HyperShell Hypertext control system
                                Version 3.1

                       Guide to the Notepad Editor

                  Copyright (c) 1989,1990 Text Technology












    Text Technology
    66 Kennedy Avenue
    Macclesfield
    Cheshire
    England
    SK10 3DE
          HyperShell Notepad editor - User Guide            Page 2
                                 Chapter 1

                               Introduction

    1.1 Introduction

    The  HyperShell Notepad editor is a small editor which allows notes
    and small text files to be produced for use with HyperShell. It  is
    a small subset of the full hyperfile structure editor, which is the
    preferred  editor  for  normal  hyperfiles,  and  is available with
    registration.

    1.2 Invocation

    The editor is invoked  from  the  DOS prompt with a command line of
    the following form:-

    HN {flags} filename

    Where 'flags' are command line flags of the form

    -x -y -z

    and have the following meanings:-

    The  -m  flag causes the editor to attempt to use the mouse  driver
    directly.

    The  -d flag causes BIOS calls to be used for screen update.   This
    option should only be used for non-compatible computers that do not
    have the screen mapped in a conventional way, or with Desqview.

    The -h flag indicates that an alternative highlighting scheme is to
    be used, for support  of  MDA and Hercules adapters, and is used if
    the program does not  detect  that a monochrome adaptor is in use.
    This  also causes the mouse cursor to flash  if  -m  has  not  been
    specified.

    The -g flag  causes the default highlighting scheme to be used.  It
    is used if the program falsely detects a monochrome monitor.

    The -z flag causes the emulation mouse cursor to flash,  permitting
    it to be spotted more readily.

    The filename has a default extension of .NTE.

    2.1 Text editing

    The text editing screen is displayed at startup This  presents  the
    text  for  editing  using  the  keyboard for text input and control
    commands.

    For most items the  text  is contained within one screenful, but in
    some cases more than  one  screen  is  required,  and a facility is
    offered to page down and up the text in part pages.

          HyperShell Notepad editor - User Guide            Page 3
    References, tabs and horizontal formatting controls are handled  in
    the  main  display  to  give the appearance the text will take when
    displayed in  HyperShell.  The  current line, being that over which
    the cursor is placed, is also displayed at the bottom of the screen
    in its 'raw text' form, as it is held in the hyperfile.

    The bottom line of the display shows the name  of  the  file  being
    edited, the current page number and the number of pages.

    The bottom line is also used to display any warning messages issued
    as  a  result  of  limits  being exceeded etc.  It is also used  to
    display the overwrite mode when this is in effect, to indicate when
    a  function  key  macro is being recorded, and to indicate when the
    symbol shift is in effect.

    2.2 Moving around

    The cursor keys  are  used  to  move  around  the  text, and permit
    character, word, line and page movement  in  both directions.  If a
    mouse  is  mapped  to  the  cursor keys, this may also be used  for
    moving  around,  although  you  may  find  that  it   is  difficult
    positioning with the mouse in edit mode.

    2.3 Inserting text

    Text  is   inserted  at  the  current  cursor  position  by  typing
    characters.  An OVERWRITE mode may be toggled-in to  allow existing
    text to be overwritten.  The RETURN (or NEWLINE)  key  is  used  to
    start a new line (or to split a  line  if  the cursor is positioned
    within a line).  The TAB key inserts a tab character in the current
    position,  and uses this to tab to the  next  tab  position,  which
    occurs on the next 8th character boundary.

    Control  characters,  other  than  tabs, are not inserted, nor  are
    decimal codes above 175 entered via  the  ALT/Numeric keypad keys.
    Any key, including a control key, can be inserted  by  preceding it
    with a Ctrl-Q key press, although  caution  is  advised  when doing
    this.

    Special  symbols, with codes above decimal 175, are entered by  use
    of a special 'symbol shift' which is toggled using Function Key  8.
    When the  symbol  shift  is  in effect, all characters entered have
    decimal 128 added to their codes before being  inserted,  also  all
    characters between  128  and  175  have  128  subtracted from their
    codes.  This means that graphic characters, greek symbols etc.  can
    then be entered  with  single  key strokes, and have the benefit of
    keyboard auto-repeat for  such  purposes as drawing lines etc.  The
    mapping  between  the  characters   can  easily  be  determined  by
    inspecting the 256 character set chart  for  your  machine.   As an
    example, the 'M' character will draw  a double horizontal line, and
    'c' will draw a greek 'pi' symbol.

    As an assistance to entering symbols, CONTROL F10 can be pressed to
    present  a  map  of  symbols, and to allow one of the symbols to be
    selected using the mouse  cursor,  for insertion in the text at the
    text cursor position.

          HyperShell Notepad editor - User Guide            Page 4
    2.4 Deleting text

    Text is  deleted  in  a number of ways.  Single characters and line
    breaks can  be  deleted  either side of the cursor using the DELETE
    key  and the cursor pad DEL key.  Entire lines can be deleted,  and
    ranges of lines can be deleted  and  optionally  inserted elsewhere
    using the function keys.

    2.5 Moving text

    Text can be moved from  one  part of the text to another, in blocks
    of lines, using the CUT and PASTE facilities.  Partial lines can be
    deleted by  inserting  newlines  at the appropriate places prior to
    CUTting. The CUT lines  can be pasted anywhere in the file text, and
    are retained until you exit from the editor.

    The  contents  of a named external file can be appended, as can the
    screen on display when the editor was invoked,  and  captured  text
    screens.

    2.6 Referencing

    Reference  flags can be inserted in a number  of  ways.   The  flag
    characters can be typed directly into  the  text  at  the  required
    point (this may give strange and  confusing  results  in  the  main
    display area whilst in  progress - you are advised to watch the raw
    text area at the bottom of the display  whilst  doing  this).  If a
    line has an incomplete reference in it, the editor will flash a '~'
    character at the end  of  the  line, to indicate the presence of an
    incomplete reference.

    Menus are provided to assist with  the  selection  of  the  correct
    flags,  and   placement  of  the  flags  can  be  assisted.   Other
    parameteric information is requested for ends of references.

    Complete references can be  easily  removed by moving the cursor to
    the reference and pressing CTRL F3.

    2.7 Other functions

    Other  control  functions permit sequences of editing operations to
    be mapped to function keys and allow the program to be exited after
    saving the file, or quitted without saving the changes.

    3.1 Control Keys

    The following control keys are available during the edit operation,
    and provide the various editing functions:-

    ESCAPE           EDIT  MENU  - This option presents the edit menu,
                     which offers the options available on the function
                     keys as shown below.

    FUNCT KEY 1      HELP - This presents the  editing help menu.  This
                     is described below.

          HyperShell Notepad editor - User Guide            Page 5
    FUNCT KEY 2      REFRESH SCREEN - This key refreshes the  screen
                     display  for  when  you  want  to ensure that  the
                     highlighting  is  properly  done, and that a  line
                     just edited is displayed to correctly reflect  any
                     references.

    FUNCT KEY 3      >> QUICK REFERENCE - This presents  a  menu  of
                     immediate references  which  can  be  applied to a
                     single  word  of  text.   This  menu  is described
                     below.

    FUNCT KEY 4      >>  REFERENCE  /  INSERT  -  This presents  the
                     REFERENCE  and  INSERT  menu  which  is  described
                     below.

    FUNCT KEY 5      MARK  START  LINE FOR CUT - This notes the current
                     line as the start line for a cut operation.

    FUNCT KEY 6      CUT LINES FROM MARKED -  This  cuts all lines from
                     and including the marked  one  to the current one,
                     placing  the  lines  into  a  paste  buffer.   Any
                     previously  cut  lines  will  be  lost.  The paste
                     buffer  is  retained  until   overwritten  with  a
                     further cut operation, and is available within the
                     edit of  a  subsequent  item.  There is a limit to
                     the   number   of  lines  cut  of  99  (around   4
                     screensful).   The message "Too many lines  -  not
                     cut!"  is displayed if this is exceeded.

    FUNCT KEY 7      PASTE CUT LINES - This inserts the lines contained
                     in the paste buffer before the current line.   The
                     lines are still available  in the paste buffer for
                     insertion elsewhere.

    FUNCT KEY 8      TOGGLE  SYMBOL  SHIFT  - This toggles the symbol
                     shift mode, turning it on if it is off, and off if
                     it is on.  The  Symbol  shift  mode  is  used  for
                     entering symbol characters.

    FUNCT KEY 9      QUIT - This abandons the  changes made to the file
                     and retains the file  in the state it was in prior
                     to the edit, and returns to the DOS prompt.

    FUNCT KEY 10     EXIT  - This applies the changes made during the
                     edit to the file being edited, and  returns to the
                     DOS prompt.

    RETURN           SPLIT  LINE - This has the effect of splitting the
                     current line before the current character.  If the
                     cursor  is  at  the  end  of a line, this has  the
                     effect of 'starting a new line'.

    CTRL PGUP        JOIN LINES - This joins the current line  and  the
                     next line together.

    CTRL PGDN        DELETE  LINE  -  This  deletes the whole current
                     line.

          HyperShell Notepad editor - User Guide            Page 6
    PGUP             PREVIOUS PAGE - This moves back  one  screenful of
                     text within the edit buffer.  If at the  start, no
                     action is taken.

    PGDN             NEXT  PAGE - This moves to the next screenful  of
                     text within the text buffer.  If at the end of the
                     text buffer, no action is taken.

    UP ARROW         PREVIOUS LINE - This  moves  the  cursor  to  the
                     previous line,  retaining  the  cursor position in
                     the line if possible.  If at the start of the text
                     buffer, no action is taken.

    DOWN ARROW       NEXT  LINE  - This moves the cursor to the  next
                     line, retaining the cursor position in the line if
                     possible.  If at the end of the  text  buffer,  no
                     action is taken.

    RIGHT ARROW      NEXT CHARACTER - This moves the cursor to the next
                     character,  moving  to a new line  if  necessary.
                     Note that the real contents of the line  are  used
                     to determine the location of the  next  character,
                     and  the position in  the  main  display  may  not
                     change, if it is within a reference or  formatting
                     operation.

    LEFT ARROW       PREVIOUS CHARACTER  - This moves the cursor to the
                     previous character, moving to the previous line if
                     necessary.  Note that the  real  contents  of  the
                     line  are  used  to determine the location of  the
                     previous character, and  the  position in the main
                     display  may  not  change,  if  it  is  within   a
                     reference or formatting sequence.

    HOME             START OF LINE - This moves the cursor to the start
                     of the current line.

    END              END OF LINE  - This moves the cursor to the end of
                     the current line.

    CTRL HOME        START OF WORD - This moves the cursor to the start
                     of the current word.

    CTRL END         END OF WORD - This moves the cursor to the end of
                     the current word.

    CTRL RIGHT       DELETE  TO  END  OF  LINE  -  This  deletes  all
                     characters   from   and  including   the   current
                     character to the end of the current line.

    CTRL LEFT        DELETE TO  START  OF  LINE  -  This  deletes  all
                     characters before  the  current  character  on the
                     current line.

          HyperShell Notepad editor - User Guide            Page 7
    INS              TOGGLE MODE  - This toggles the INSERT / OVERWRITE
                     mode.    In  INSERT  mode,   all   (non   control)
                     characters  typed  are  inserted  at  the  current
                     cursor position.   In  OVERWRITE  mode, characters
                     typed overwrite  characters  at the current cursor
                     position, unless the  cursor  is  at  the end of a
                     line, in which case the characters are inserted.

    DEL              DELETE  CURRENT  CHARACTER  -  This  deletes  the
                     current  character,  this being  the  one  beneath
                     which the cursor is displayed.  If at the end of a
                     line,  the next line  is  joined  to  the  current
                     line.

    DELETE           DELETE  PREVIOUS  CHARACTER  -  This  deletes the
                     character just before the current position.  If at
                     the start  of  a line, the line is joined with the
                     previous one.

    CTRL B           BLANK LINE BEFORE - This causes a blank line to be
                     inserted BEFORE the current line in the text.

    CTRL A           BLANK LINE AFTER - This causes  a blank line to be
                     inserted AFTER the current line in the text.

    CTRL Q           SPECIAL CHARACTER - This  permits  the  next  key
                     depression to be inserted verbatim into the text.
                     Caution should be exercised when inserting certain
                     control  characters,  as unpredictable results can
                     occur.

    Other keys have the effect of having  the  corresponding  character
    inserted into the text at the current point.

    3.2 Quick references

    The quick  reference  menu  provides  for  the  rapid  addition  of
    references  which  can be applied to a single word in the text. The
    quick reference options are available directly using the SHIFT  key
    along with the function keys.  The options available are:-

    SHIFT FKEY 1     FRAME REFERENCE - This causes the  current word in
                     the text to be flagged as a frame cross reference,
                     with backtrack.

    SHIFT FKEY 2     STEP FRAME REF - This causes the current word  in
                     the text  to be flagged as a frame step reference,
                     with no backtrack.

    SHIFT FKEY 3     GLOBAL  NOTE REF - This causes the current word in
                     the   text   to  be  flagged  as  a  global   note
                     reference.

    SHIFT FKEY 4     LOCAL NOTE REF - This  causes  the current word in
                     the text to be flagged as a local note reference.

    SHIFT FKEY 5     GLOBAL MENU REF - This causes the current word  in
                     the  text  to  be   flagged   as   a  global  menu
                     reference.
          HyperShell Notepad editor - User Guide            Page 8

    SHIFT FKEY 6     LOCAL  MENU  REF - This causes the current word in
                     the text to be flagged as a local menu reference.

    SHIFT FKEY 7     GLOBAL  SCRIPT  REF - This causes the current word
                     in  the  text  to  be flagged as a  global  script
                     reference.

    SHIFT FKEY 8     LOCAL SCRIPT REF - This causes the current word in
                     the  text  to  be   flagged   as  a  local  script
                     reference.

    SHIFT FKEY 9     NOT USED

    SHIFT FKEY 10    NOT USED

    3.3 Reference and insert Menu

    The reference  and  insert  menu presents a number of types of item
    for  insertion, and controls the setting  up  of  references.   The
    options are also available directly using the CTRL  key  as a shift
    with the function keys.  The menu has the following options:-

    CTRL FKEY 1      ADD REFERENCE START - This presents a  menu  from
                     which a  reference  type  can  be selected.  After
                     selection, the reference flags are inserted at the
                     start  of  the  word  within  which the cursor  is
                     pointing.   The  rest   of   the   line   will  be
                     highlighted, and the reference  has to have an end
                     flagged using  the  END OF REFERENCE function (see
                     below).

    CTRL FKEY 2      END  OF  REFERENCE - This issues a request for the
                     Parameter  value,   whereupon  a  suitable  action
                     string should be input,  or  the ESCAPE key should
                     be pressed if no parameter is required.  A request
                     is then issued for the Map key, whereupon if a key
                     mapping is required, the single key to map to  the
                     reference  should be entered, followed by  RETURN.
                     If no mapping is  required,  the ESCAPE key should
                     be pressed.  After this, the reference end details
                     will be inserted at the end of the  current word.
                     This word can  be  the  one to which the reference
                     flag was added, or a subsequent one.

    CTRL FKEY 3      REMOVE  REFERENCE  FLAGS  -  This  removes  the
                     reference flags for the reference within which the
                     cursor is placed.   If  the cursor is not within a
                     reference the action is ignored.

    CTRL FKEY 4      INSERT FULL REFERENCE  - This option permits entry
                     of a complete reference string, prompting for each
                     part as it is built up, and inserts  the resulting
                     string at the current cursor position.

    CTRL FKEY 5      INSERT SAVED SCREEN - This inserts the  screen on
                     display when the editor  was  invoked.   This  is
                     useful when the editor is run as a notepad editor
                     from HyperShell, to capture frame texts.
          HyperShell Notepad editor - User Guide            Page 9

    CTRL FKEY 6      INSERT TEXT SCREEN FILE  -  This inserts the text
                     from a screen image file  captured using the HCAP
                     TSR program.

    CTRL FKEY 7      INSERT SCREEN FILE WITH ATTRIBUTES   -  This does
                     the  same  as  INSERT TEXT SCREEN FILE,  only the
                     colour  attributes  are  translated  into  colour
                     setting  flags  so  that it appears the same from
                     HyperShell.

    CTRL FKEY 8      INSERT FILE - This option allows the contents of a
                     named  file  to  be inserted at  the  end  of  the
                     current  item.   It requests the name of the  file
                     and then appends it to the text buffer.

    CTRL FKEY 9      DEFINE  MACRO KEY - This function is  described
                     below.

    CTRL FKEY 10     GRAPHIC MAP - This presents a popup display of the
                     graphic  symbols, from which one character can  be
                     selected for  insertion  by  positioning the mouse
                     cursor and  depressing  RETURN. The display can be
                     cancelled  with  ESCAPE  if no character is to  be
                     selected.

    4.1 Help

    The help  function presents the editing help menu, which gives help
    text on the following topics:-

      -  GENERAL KEYS      - Keys applicable to editing and viewing
      -  EDITING KEYS      - Keys only applicable to editing
      -  FUNCTION KEYS     - Function key mappings
      -  SHIFT FKEYS       - Mappings for shifted function keys
      -  CTRL FKEYS        - Mappings for function keys shifted CTRL

    5.1 Key macros

    The define macro function, CTRL FKEY 9, issues the message:-

    Press Alt-X sequence Alt-X

    and awaits the depression  of  a  mappable  Alt  shift / letter key
    combination.   Those combinations that  may  be  mapped  are  Alt-A
    through Alt-Z. The macro definition is  performed  by  pressing the
    key to be mapped, followed by the sequence of key strokes which are
    to form the macro, followed by another depression of the key to  be
    mapped.  After the key has been mapped, whenever  it  is depressed,
    it 'plays back' the sequence of key strokes.   All  key strokes are
    recordable, apart from menu selections, which cannot be  replayed.
    During recording, the key depressions are acted upon, so the cursor
    should be positioned where the sequence will be applicable.

    This is  useful  for storing common key sequences for easy replay.
    Thus a macro to set the current word up  as a frame reference would
    be mapped to Alt-W as follows:-
          HyperShell Notepad editor - User Guide            Page 10

            CTRL F9
            Alt-W
            CTRL HOME
            ~
            F
            CTRL END
            ~
            E
            Alt-W

    Thereafter, to set any word up as a frame reference, the cursor  is
    simply  moved within the word and Alt-W pressed.   Note  that  this
    function is only an example, and  the  function described is mapped
    to the SHIFT Fkey 1 combination normally.

    The  macro,  once  set  up,  remains in effect  until  the  key  is
    remapped, or the program is finally exited.

          ----- END OF NOTEFILE EDITOR DOCUMENT ------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1720

     Volume in drive A has no label
     Directory of A:\

    HS       EXE     47838   5-31-90   9:49p
    HERC     PIC     11566   5-31-90   9:49p
    TEXT     PIC      1946   5-31-90   9:49p
    HN       EXE     28274   5-31-90   9:49p
    EGA      PIC     11540   5-31-90   9:49p
    HSREF    HYP     79145   5-31-90   9:49p
    SBG      PIC      5293   5-31-90   9:49p
    NOTED    TXT     23849   6-04-90  10:26p
    CARB     PIC      3405   5-31-90   9:49p
    CIRCUIT  PIC      3590   5-31-90   9:49p
    CAI      HYP      5923   5-31-90   9:49p
    HOME     HYP      2178   5-31-90   9:49p
    INTRO    PIC      6534   5-31-90   9:49p
    HS       HIX      1933   6-05-90   9:01p
    WORLD    PIC      5243   5-31-90   9:49p
    DATABASE DAT      5408   5-31-90   9:49p
    DATABASE HYP      2882   5-31-90   9:49p
    INTRO    TXT      6434   5-31-90   9:49p
    READ     ME      14657   6-04-90  10:25p
    MSDOS    HIX      1594   5-31-90   9:49p
    HELP     BAT        28   5-31-90   9:49p
    BROWSER  HYP      5123   5-31-90   9:49p
    HSREF    HIX      5356   5-31-90   9:49p
    MSDOS    HYP     16798   5-31-90   9:49p
    HS       HYP     48545   6-04-90  10:23p
    GO       BAT       625   7-10-90   4:01a
           26 file(s)     345707 bytes
                            1024 bytes free
