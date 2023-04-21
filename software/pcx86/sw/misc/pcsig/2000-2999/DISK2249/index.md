---
layout: page
title: "PC-SIG Diskette Library (Disk #2249)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2249/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2249"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FX - FILE EXAMINER"

    This program can be used by the novice to view any file, or by more
    experienced users to decipher, analyze, and understand file formats.
    
    FX is a "byte-level" word processor. Scroll through any DOS file,
    (even damaged files). Request that the display be formatted in any of
    seven ways (any mix of ASCII, hexadecimal or decimal).
    
    An important, and unique, feature is the "Numeric Display" that
    appears at the top center of the screen. Many database and word
    processing files contain integers and long integers in the file to
    indicate the number of records, offsets of certain information in the
    file, etc. FX continuously displays this information (the values of
    the byte, integer and long integer) in decimal, hexadecimal or binary,
    in both signed and unsigned forms. Without this feature, it can be
    tiresome to calculate this by hand, since the bytes are physically
    stored in reverse order.
    
    Any possible series of file bytes can be located, counted or modified
    using FX, including ASCII 0.
    
    FX has the built-in ability to automatically optimize its formatting
    parameters for dBASE database files, creating a binary "browse" for
    both the header AND data areas.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2249.TXT

{% raw %}
```
Disk No: 2249                                                           
Disk Title: FX - File eXaminer                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: FX - File eXaminer                                       
Author Version: 1.0                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
This program can be used by the novice to simply view any file, or by   
more experienced users and programmers to decipher, analyze and         
understand file formats.                                                
                                                                        
FX is, in effect, a "byte-level" wordprocessor; with it, one can        
continuously scroll through and examine any file possible under MS-DOS, 
(even damaged files), and request the display be formatted in any of    
seven ways (any mix of ASCII, hexadecimal or decimal).                  
                                                                        
An important, and unique, feature is the "Numeric Display" that appears 
at the top center of the screen; many database and wordprocessing files,
for instance, contain integers and long integers in the file to indicate
the number of records, offsets of certain information in the file, etc. 
FX continuously displays this information (the values of the byte,      
integer and long integer) in decimal, hexadecimal or binary, in both    
signed and unsigned forms.  Since the bytes are physically stored in    
reverse order, without this feature it can be tiresome to calculate this
by hand.                                                                
                                                                        
Any possible series of file bytes can be located, counted or modified   
using FX, including ASCII 0.                                            
                                                                        
FX has the built-in ability to automatically optimize its formatting    
parameters for dBASE database files, creating a binary "browse" for both
the header AND data areas.                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FX.TXT

{% raw %}
```





                              ----FAR--DARTER---->
                                s o f t w a r e

                                    Presents


                       _____________      ____        ____
                      |             |      ____      ____
                      |    _________|       ____    ____
                      |   |                  ____  ____
                      |   |_______            ________
                      |           |            ______
                      |    _______|             ____
                      |   |                    ______
                      |   |                   ________
                      |   |                  ____  ____
                      |   |                 ____    ____
                      |   |                ____      ____
                      |___|               ____        ____


                      F  i  l  e     e  X  a  m  i  n  e  r





                         ******************************
                         *                            *
                         *     User Documentation     *
                         *                            *
                         *        Version 1.0         *
                         *                            *
                         ******************************





                          Copyright 1990 William Noble
                              All Rights Reserved


     










                                 LIMIT OF LIABILITY



                    FX  is   distributed  as-is.     The   author
                    disclaims  all   warranties,   expressed   or
                    implied.  The author will assume no liability
                    for damages  either from  the direct  use  of
                    this product  or as  a consequence of the use
                    of this product, nor be liable for any damage
                    to data  or  property  which  may  be  caused
                    either directly  or indirectly, intentionally
                    or unintentionally,  from  the  use  of  this
                    product.





               ______________________________________________________


                    FX was  designed for the legal and legitimate
                    examination and repair of personal files.  It
                    was NOT  designed to  alter programs or files
                    that  are   copyrighted  or  owned  by  other
                    individuals or  companies!  Doing so may very
                    well  be  illegal,  and  will  at  the  least
                    probably void  any warranty  or  other  legal
                    rights  extended  to  the  purchaser  of  the
                    programs or  files thus affected.  The author
                    can   not,   and   will   not,   assume   any
                    responsibility or liability for those who use
                    this program irresponsibly!

               ______________________________________________________
                                          








                                      Shareware



          FX  is   distributed  as   shareware,  which  affords  users  the
          opportunity to  evaluate programs  BEFORE they are purchased.  If
          the program is then judged effective and practical for individual
          needs and  is used  regularly, one registers the program with the
          author.

          If you  use FX  on a  regular basis  and find  it  a  functional,
          worthwhile program,  we  sincerely  hope  you  will  register  in
          keeping  with  the  philosophy  and  practice  of  user-supported
          software.   The basic  single-user registration fee we request is
          $15.    (Please  see  the  end  of  the  documentation  for  full
          registration details).   FX,  like  most  shareware,  required  a
          substantial amount  of time  and skill to design and program, and
          is, we feel, on a par with commercially available packages in all
          respects.

          Regardless of  whether you register your copy of FX, we encourage
          you to copy it and pass it along to friends and acquaintances for
          their own evaluation and trial use!  (Needless to say, all copies
          made are  understood to  be for the non-commercial, private trial
          use of others).

          Consistent with  the custom  of user-supported  software, you may
          receive a  copy of  FX by  sending us  a  blank,  formatted  disk
          together with  an addressed,  POSTAGE PAID return mailer.  The FX
          program and  documentation on  disk will  be mailed  back on your
          diskette.










                              Trademark Acknowledgments



                    dBASE is  a registered  trademark of  Ashton-
                    Tate Corporation.

                    Epson MX  is a  trademark of  Epson  America,
                    Inc.

                    IBM and  IBM PC  are registered trademarks of
                    International Business Machines Corporation.

                    Microsoft, Microsoft C, Microsoft C Compiler,
                    Microsoft Macro  Assembler (MASM)  and MS-DOS
                    are  registered   trademarks   of   Microsoft
                    Corporation.
                    









                                      Contents





               Introduction                                       1
               FX Quick Start                                     2
               Hardware Requirements                              3
               Mouse Support                                      3
               Installation                                       4
               Using Menus and Input Areas                        5
               Basic Concepts                                     6
               Using FX- Overview                                 7
                        Moving through the File                   7
                        Selecting Display Modes                   7
                        Synopsis of FX Commands                   8
               The Major FX Functions                            10
                        Selecting a File To Examine              10
                        Locating Byte Patterns                   11
                        Counting Byte Patterns                   13
                        Modifying a File Byte                    13
               Major Display Formatting Options                  14
                        Changing the Display Mode                14
                        Selecting the Numeric Display            16
                        Optimizing the Display for ".DBF" Files  18
               Understanding The FX Display                      19
                        StartByte                                20
                        Recsize                                  20
                        Tab Amount                               20
                        File Byte                                21
                        Record                                   21
                        Recbyte                                  21
                        Modified                                 21
               Using FX with dBASE database files                22
                        Examining the field definitions          23
                        Examining the data                       24
               Summary of FX Messages                            25
               Error Handling                                    28
               FX Command Summary                                29
               Notes                                             30
               FX Registration Information                        A


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------



          Introduction


          FX (File  eXaminer) is  a general-purpose  file viewer and "byte-
          zap" utility.   It can handle any file possible under MS-DOS, and
          of unlimited size; it is neither constrained by nor optimized for
          any particular  file format,  whether that be ASCII text, binary,
          etc.   This program  was designed  to be  as fast and flexible as
          possible, working  as a  sort of  "byte-oriented" word processor.
          Note that  FX enables  viewing and  modification  of  the  ENTIRE
          contents of  a file,  INCLUDING any end-of-file marks (CONTROL-Z,
          ASCII value 26 decimal).

          Please note  that FX will not insert bytes or remove bytes-- only
          modify existing  ones.   In addition,  FX  does  not  create  any
          "temporary" or  "intermediate" files--  one is  working  DIRECTLY
          against the  selected file!   If  it is  planned to modify bytes,
          (especially in  an executable file), and there is the least doubt
          about the  impact of  the changes,  WORK WITH A COPY OF THE FILE,
          AND NOT THE ORIGINAL!

          Be assured  that FX  is completely  safe to  use on ANY file-- it
          will  not  modify  any  aspect  of  a  file  unless  specifically
          requested to  do so,  and doing  so requires  an overt, conscious
          decision  by   the  user.     Unintentional  changes  are  almost
          impossible.   If there  is the  least doubt, however, it is again
          strongly recommended the file be backed up first.

          Any of the following tasks may be easily accomplished with FX:

               -    Scroll through and examine ANY portion of ANY file
                    as if it were a word processing document.

               -    Locate or Count byte patterns.

               -    Format the  display to  expose the underlying file
                    structure.

               -    Modify any  byte in  any file,  regardless of  its
                    location.

               -    Read  PAST   any  end-of-file  marks,  (Control-Z,
                    decimal ASCII  26), right to the end of the file's
                    physical extent as recorded by DOS.











          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 1


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Typical uses of FX include:

               -    Repairing damaged files.

               -    Removing intermediate  end-of-file marks  in  text
                    files that  prevent access to the full contents of
                    the file.

               -    Scanning executable  code for  messages indicative
                    of  a   program  with   "ulterior  motives",  e.g.
                    "Viruses" and the like.

               -    Customizing  executable  programs.    Many  ".COM"
                    programs are  accompanied by a discussion of which
                    bytes to  modify to customize their display colors
                    and other configuration options.  (Typically, this
                    is done  using the  "DEBUG" program, but FX is far
                    easier to use and better suited to such a task).




          FX Quick Start


          FX is started simply by issuing the command "FX".  A filename may
          optionally be  supplied on  the command  line, in  which case one
          would use a command of the form:

               FX filename

          If no  filename is  present on  the command  line, or  FX  cannot
          locate the  file specified, then it will automatically pop up its
          file selection box when it starts.

          By default,  FX will first display an initial title screen.  This
          screen can  be skipped  by adding  a "/Q"  or "-Q" to the command
          line, (upper or lower case), which instructs FX to be "Quiet" and
          proceed straight  to its  main screen.  Some examples of starting
          FX are:

              FX
              FX /q            Run FX, skip initial screen.
              FX A:x.dat /q    Run FX, skip initial screen,
                               and examine the file "A:x.dat"

          Once FX  is running,  ALT-H will  pop up  the help display at any
          point in the program.  Also, hitting the forward slash  key ("/")
          will invoke the FX command menu, which may be used to familiarize
          oneself with, and optionally invoke, the FX commands.







          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 2


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Hardware Requirements


          FX will  run on  any IBM PC or true compatible running DOS 3.0 or
          higher, and  should certainly  run without  incident  on  a  256K
          system.   (The program  will require  about 52K  memory above and
          beyond the  memory it consumes in and of itself, which amounts to
          about 120K free memory required to run FX).

          FX automatically  detects and  adapts to  a monochrome  or  color
          system, and  selects 25  by 80  text mode  if the  system is  not
          already in  this mode.   (FX  restores the  video mode and cursor
          size upon exit).

          Since the  program writes  directly to  video memory for the best
          possible performance, it also accounts for CGA monitors and takes
          the proper measures to avoid the "snow" effect.

          Note to  Network Users:  This program was designed to function in
          network, as  well as  single-user, environments.   FX  opens  all
          files in  accord with  the SHARE  program.   This has  no  impact
          whatsoever on  single-user systems,  or on  systems  not  running
          SHARE.   However, if  SHARE is  installed, then note that FX will
          open all  files as "Deny Write"; that is, other programs can read
          from a  file in use by FX, but NOT write to it.  A file is opened
          by FX  when it is selected with the FILE command, and closed only
          when another file is chosen or the program is exited.




          Mouse Support


          FX will  automatically detect  and support a Microsoft-compatible
          mouse, if  installed.   FX neither  uses nor  displays  a  "mouse
          cursor", but  instead translates  the relative  movement  of  the
          mouse into  an equivalent  press of  the up, down, left and right
          arrow keys.   Moving  the mouse  up, for instance, is the same as
          repeatedly pressing the up-arrow key.

          Clicking BOTH buttons simultaneously and releasing them is always
          equivalent to pressing ESCAPE.














          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 3


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          At menus,  clicking either  button by  itself and releasing it is
          the same as pressing ENTER on the keyboard.

          When in the file window, the buttons are put to some use:

               -    Clicking  and   releasing  the   LEFT  button   is
                    equivalent to PgUp (Previous screenful)
               -    Clicking  and   releasing  the   RIGHT  button  is
                    equivalent to PgDn (Next screenful)

          The primary  reason for  supporting the  mouse is  not for making
          menu selections,  (although it can be used for that), but instead
          for moving the cursor about in the File Window.



          Installation


          FX does  not require a formal installation as such- the only file
          required to run FX is, simply enough,  "FX.exe".  To "install" FX
          is to  COPY the  file "FX.exe"  to any desired location.  On hard
          disk systems,  it would  certainly be  recommended that this be a
          directory that  is on  the "search  path", (any directory that is
          named in  the PATH  environment variable), so the system can find
          FX regardless of the current working directory.































          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 4


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Using Menus and Input Areas


          To use  any menu in FX, either press the first letter of the menu
          item, or  highlight  the  desired  item  using  the  Arrow  keys,
          Spacebar or Backspace keys and press ENTER.

          When entering  values  in  input  areas,  the  following  special
          editing keys may be used:

               -    Left/Right Arrow  Keys may be used to position the
                    cursor anywhere in an input area.

               -    INSERT:   Toggles between insert mode and overtype
                    mode.   FX starts  in overtype mode, meaning typed
                    characters will  replace existing ones.  In INSERT
                    mode, a  block  cursor  is  displayed,  and  typed
                    characters   are   inserted,   shifting   existing
                    characters to the right.

               -    DELETE:   Deletes character directly above cursor,
                    and shifts  all characters  to the  right  of  the
                    cursor left one position.

               -    BACKSPACE:   Deletes the  character to the left of
                    the cursor,  shifting the  remainder of  the  area
                    left one position.

               -    ESCAPE:  Cancel current option and back up.




























          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 5


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Basic Concepts


          A file  is nothing  more than  a stream  of continuous bytes.  FX
          displays these bytes exactly as they occur in the source file, in
          the same order they occur.  The power of FX, however, lies in its
          ability to  format and  display this information in a meaningful,
          flexible manner, and do it very fast.  Files are displayed in the
          FX "File  Window", which  is always  visible and consumes most of
          the screen display.

          FX formats  files by  breaking them  up into  "RECORDS" of  fixed
          length, displaying  one record  per display  line.   Therefore, a
          "Record" in  the context  of FX  is "The number of file bytes per
          line in  the FX  File Window".   (In  certain display modes, each
          record may  take up  as many  as 3  rows on the screen; "line" in
          this context  refers to  the 1 to 3 row area a record occupies in
          the File window).  The record size can be modified by the user to
          be anything  from 1 byte up to about 2,000 bytes.  Please keep in
          mind that  the physical  file is  still a  continuous  stream  of
          bytes, and  that FX  is only  VIEWING the  file as  a  series  of
          "records" to unencumber its display.

          FX starts  up with a default record size of 72 bytes.  This is by
          no means  a magic number-- it happens to be the number of columns
          in the  display window.   In  some cases,  such as  fixed record-
          length database files, it is meaningful to view the file in terms
          of a  very specific  record size, in which case FX can be made to
          display one  database record  per line.   In other cases, such as
          executable files  like "FX.exe", there is no underlying structure
          to the file, and the idea of a record size isn't relevant.

          While running  FX, the  record size may be repeatedly changed; FX
          will automatically  reformat the file display in the File Window.
          (This is,  by the way, a good technique for uncovering underlying
          patterns in files).

          FX also has the unique ability to instantly change its display of
          file bytes:  ASCII, DECIMAL or HEXADECIMAL, or any combination of
          those three,  which amounts  to 7 possible display formats.  This
          is covered in detail later in the documentation.
















          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 6


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Using FX- Overview


          FX uses  just  one  main  screen,  on  which  is  maintained  all
          information about the file being examined, and which is dominated
          by the "File Window".  This window is the "command center" of FX;
          it is  from here  that one  examines files,  and invokes  all  FX
          commands.


          Moving through the File

               The keys used to move around in the file window are:

               Left Arrow     Move left to the previous byte
               Right Arrow    Move right to the next byte
               Up Arrow       Move up to the previous record
               Down Arrow     Move down to next record
               Alt <-         Jump to the first byte in the record
               Alt ->         Jump to the last  byte in the record
               PgUp           Previous screenful
               PgDn           Next screenful
               Home           Jump to first byte in the file window
               End            Jump to last byte in the file window
               Ctrl-PgUp      Jump to the first record in the file
               Ctrl-PgDn      Jump to the last record in the file
               Ctrl-Home      Jump to first file byte (StartByte)
               Ctrl-End       Jump to last byte in the file
               F9             Pan left by 1/2 window
               F10            Pan right by 1/2 window
               Tab            Move forward by tab amount
               Shift+Tab      Move backward by tab amount

               (A beep  will sound  if an  attempt is made to move past the
               file or record boundaries).


          Selecting Display Modes

               The function  keys F1  through F8 are used to modify aspects
               of  the  FX  display.    Function  keys  1  through  7  each
               correspond to one of the 7 file display modes offered by FX.
               Function key  8 is  used to  select the  so-called  "Numeric
               Display", which gives detailed information on numeric values
               that exist  at the  current position  in the  file.    These
               options are covered in detail later on.

               F1 - F7        Select a Display Mode 1 through 7.
               SHIFT + F1-F7  Same as  above, but  also  automatically
                              adjusts the  number of  bytes per record
                              for the given mode.
               F8             Cycles through  the  4  numeric  display
                              options:  Decimal,  Hexadecimal,  Binary
                              and None.



          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 7


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------


          Synopsis of FX Commands

               An alphabetic summary of the FX commands follows.  To invoke
               a command,  type either  the  upper-  or  lower-case  letter
               indicated between quotes:

               "A"lpha Mode   Toggle PURE  ALPHA MODE.  FX starts with
                              this mode  OFF.   When toggled  ON,  all
                              non-alphanumeric     characters      are
                              displayed as a small dot.
               "C"ount        Count occurrences  of byte  patterns  in
                              the file.
               "D"atabase     Optimize  the   FX  display  to  isolate
                              sections of dBASE database files.
               "F"ile         Select file  to examine.   A list of all
                              files in  the current  directory will be
                              "popped up"-  just highlight the desired
                              file and press ENTER.
               "J"ump         Jump directly to any byte in the file.
               "L"ocate       Locate byte or text patterns
               "N"ext         Jump to next occurrence
               "R"ecSize      Specify the  record size, in bytes; that
                              is, the  number of  bytes that  FX  will
                              place on each display line.
               "S"tartByte    The  byte  in  the  file  to  begin  the
                              display with.   FX will ignore all bytes
                              before the  StartByte, thus establishing
                              a "new"  beginning of  file.    This  is
                              purely for ease of VIEWING the file, and
                              has NO effect on the actual file!
               "T"abAmount    Specify the number of bytes that will be
                              skipped ahead  or backward  when TAB  or
                              SHIFT-TAB are pressed.
               e"X"it         Quit FX

               CONTROL+ENTER  Modify current byte.
               ESCAPE         Quit FX.
               Alt-H          Call up the Help screen.
               /              Invoke the FX Options Menu.


               Pressing either the ESCAPE key or the letter X will quit FX.
               If a  file has  been selected,  then a prompt will pop up to
               confirm that  the user  wishes  to  continue  and  exit  the
               program.











          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 8


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               To  assist   in  understanding  and  using  the  various  FX
               commands, the  FX Options  Menu is  provided.   This menu is
               invoked by  typing the  forward slash (/).  This feature has
               been added as a convenience, enabling not only the selection
               of an  FX option,  but also  providing basic  information on
               each one.   As  the highlight  bar is moved up and down (via
               the arrow  keys), a description of each item is continuously
               displayed to  the right.  Options are invoked from this menu
               the same  as from the File Window: by pressing the upper- or
               lower-case letter,  or the  desired function key.  Also, the
               currently highlighted option can be invoked by just pressing
               ENTER.   To exit  this menu and invoke no option, just press
               ESCAPE, as usual.












































          -----------------------------------------------------------------
          (C) 1990, William Noble                                    Page 9


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          The Major FX Functions


          Selecting a File To Examine  ("F")

               All FX  sessions begin  by selecting a file from the FX file
               selection box,  unless a  file was  supplied on  the command
               line when FX was started.

               FX begins  in the  current working  directory on the current
               drive.   The file  box will contain every file (*.*) in this
               directory, as well as a parent directory, if applicable, and
               any subdirectories.   This  box provides  the full  means to
               navigate throughout  the entire directory structure, as well
               as, of  course, selecting  files to  examine.   If a file is
               chosen from  another directory,  then that directory becomes
               the new default FX path for subsequent file selections.

               Moving the  Highlight:  Press  Up/Down  arrow  to  move  the
               highlight one  file at  a time,  or  PgUp/PgDn  to  move  by
               screenfuls.   Press HOME  to jump to the first file, and END
               to jump to the last.

               SPEED Selection:  By pressing the first letter of a filename
               (upper or  lower case), FX will jump to the next file in the
               list that  begins with that letter.  Also, one can press the
               open parenthesis  "(" to  jump to  directory entries,  which
               always begin with this character.

               Sorting the  List: The  list  of  files  can  be  sorted  by
               extension (ALT-X),  by name  (ALT-N) or  by size  (ALT-S) to
               make finding a file easier.  (This sort order will remain in
               effect for subsequent file selections).

               To select  a file  to examine,  simply highlight the desired
               file  and  press  ENTER.    Press  ESCAPE  to  exit  without
               selecting a file.

               The FX  file selection  box  also  allows  one  to  navigate
               throughout the  current drive  by moving  up  and  down  the
               directory tree.  The Parent Directory and Subdirectories are
               enclosed in  parentheses ()  to distinguish  them  from  the
               other files  in the  list.  If you are currently in the root
               directory, then  of  course  no  Parent  directory  will  be
               listed.

               To select  the PARENT  directory: Highlight  the file called
               "(..) Parent"  and press  ENTER.   The parent  directory  is
               selected, and  a new  list of  files for that directory will
               appear.







          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 10


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               To select  a SUBDIRECTORY:  Highlight and  subdirectory  and
               press ENTER.   A  new list  of files for that directory will
               appear.

               To select  another drive,  press F2.   FX  determines  which
               drives are  configured in  the system  and displays  a menu.
               Select the desired drive.

               Note: FX  does not  change the  current working directory or
               drive.   When FX  is exited,  the system will be at the same
               drive and directory as when FX was started.


          Locating Byte Patterns  ("L")

               After invoking  Locate, an  input area pops up on the top of
               the screen.   Please observe that FX can search for ANY byte
               value possible in MS-DOS files, INCLUDING ASCII 0.  For this
               reason, not  only does FX need to know which bytes to search
               for, but  also the  NUMBER of  bytes that compose the search
               string.   A moveable  vertical "bar"  exists in  the  locate
               window for  this purpose  that can be shifted right or left,
               and all bytes TO THE LEFT of the bar form the search string;
               all bytes  to the  right  of  the  bar  are  ignored.    The
               following keys are used here:

               -    CURSOR UP  or CURSOR  DOWN: Move cursor to desired
                    input line (ASCII/DEC/HEX).

               -    ENTER, TAB or PgDn:  Move right to next byte.

               -    SHIFT+TAB or PgUp: Move left to previous byte.

               -    CONTROL-RIGHT ARROW:  Move the "bar" right.

               -    CONTROL-LEFT ARROW:  Move the "bar" left.

               One can  enter the  data in any of 3 formats: ASCII, Decimal
               or Hexadecimal,  depending on one's inclination.  A line for
               each format  is provided  in the  locate window.   The first
               line is  for ASCII, the second for hexadecimal, and the last
               for decimal.   Independent of the format chosen to enter the
               data,  the   values  in   the  other   2  lines  are  ALWAYS
               continuously updated  by FX  to reflect  that value in those
               other 2  formats.   In addition,  the bytes  may  be  freely
               defined in any mix of formats.

               For instance,  say it  is desired  to locate  the codes in a
               printer-driver file that cause an EPSON MX printer to change
               to bold: "ESCAPE E".







          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 11


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               The "ESCAPE"  character could be entered in decimal by first
               pressing down  arrow twice  to get  to the  decimal line and
               typing  27.     Note   the  values  in  the  2  lines  above
               automatically reflect  this: the first line will contain the
               ESCAPE graphic, and the hexadecimal line will contain 1B.

               Next, one could move to the first line (ASCII) and enter the
               second byte, the capital letter "E".  Again note the 2 lower
               lines reflect  this value.   (The  letter E  could  also  be
               entered in its decimal ASCII value, 69, or hexadecimal ASCII
               value, 45H).

               Next, one  tells FX  how many  bytes to search for.  In this
               example, we  are looking  for ESCAPE-E,  just 2  bytes.   So
               press CONTROL-RIGHT  ARROW once to move the bar to the right
               1 byte.   All  bytes to  the left  of the  bar will form the
               search string, in this case 2.

               (If it were decided to search for just the ESCAPE character,
               one would  press CONTROL-LEFT  ARROW once to move the bar to
               the left  one byte.   Now, just the ESCAPE character will be
               searched for.  Note that there is NO NEED to fiddle with any
               bytes to the right of the bar- FX ignores them completely).

               IMPORTANT NOTE:  FX  begins  searching  the  file  from  the
               "StartByte" value.   This  always defaults  to 0  when a new
               file is selected, meaning the display of the file will begin
               at its  physical beginning.  If this value has been modified
               by the  user, then  any occurrences  in the file before this
               location won't  be found.   To  search the ENTIRE file, just
               re-set the StartByte to 0 before invoking Locate.

               To begin  the search,  hit F10.   FX asks whether the search
               should be  case-sensitive;  that  is,  whether  or  not  the
               alphabetic characters    A-Z  and  a-z  should  be  compared
               without regard  to case.  If "Ignore Case" is selected, then
               FX considers an "A" to be equal to an "a", and so forth.  In
               this  example,   "Exact  Match"  would  be  the  appropriate
               selection, since ESCAPE-e is not a valid EPSON MX code.

               FX then  asks whether to start the search from the beginning
               of the  file, (that  is, from the "StartByte" value), or the
               current file position- select the desired option.

               As usual,  ESCAPE may  be pressed at any point to cancel the
               LOCATE.   Also, ESCAPE  may be  pressed during the LOCATE to
               cancel and resume FX in the File window.










          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 12


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Counting Byte Patterns  ("C")

               The Count  function is  quite similar  to LOCATE.   The only
               difference is  that Count  does not  provide the  option  of
               counting from the current file position- count ALWAYS begins
               at the StartByte.

               IMPORTANT NOTE:  FX counts  occurrences  STARTING  FROM  THE
               StartByte   VALUE.   If StartByte  is larger than 0, then FX
               will not start counting from the physical start of the file,
               but from  the offset  into the  file specified by StartByte.
               To receive  an accurate  count of  occurrences in the ENTIRE
               file, re-set the StartByte to 0 if it has been changed.


          Modifying a File Byte (Control - ENTER)

               Any byte in a file may be modified by pressing CONTROL-ENTER
               when positioned  on the  desired byte.   (Press and hold the
               CONTROL key and type ENTER).  As with the LOCATE command, an
               input area  appears at  the top  of the screen, allowing the
               new value  for the  byte to  be entered in any of 3 formats:
               ASCII, Decimal  or Hexadecimal.  Just position the cursor to
               the box  for the desired format by pressing UP ARROW or DOWN
               ARROW, then  enter the  value.   The values  in the  other 2
               boxes will  be updated  and display  this value in the other
               two formats.   To  commit the  change, press F10.  To abort,
               press ESCAPE.

               To ensure  that the change took place as expected, FX writes
               out the  changed byte  and flushes the file buffer, then RE-
               LOADS and re-displays the current window.  This takes almost
               no time, and verifies the modification beyond question.

               Please keep in mind that this is the ONLY means by which any
               byte can  be changed in the file.  NO OTHER SEQUENCE OF KEYS
               OR ACTIONS  WILL MODIFY  A FILE  BYTE  OTHER  THAN  PRESSING
               CONTROL-ENTER AND CONFIRMING WITH F10.



















          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 13


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Major Display Formatting Options


          Changing the Display Mode  (F1-F7) and "A"

               One of  the most  powerful features  of FX is its ability to
               display a  file in any of 7 different formats.  In addition,
               any format  may be  toggled to  "Pure Alpha" by pressing the
               letter "A",  making it  much easier  to look  for text  in a
               binary file.   In  "Pure Alpha"  mode, only  standard alpha-
               numeric characters  are displayed.    All  other  characters
               (high-bit graphics  with ASCII values above 127 and graphics
               from ASCII  1-31) are  replaced with  a small dot.  However,
               since the  display does  not accurately reflect the bytes in
               the file,  bytes cannot  be modified  in  pure  alpha  mode.
               (When this  mode is  enabled, the  text "[PURE ALPHA-NUMERIC
               DISPLAY MODE]"  will appear  on the lower-left corner of the
               File window box).

               The best  way to  become acquainted with each display format
               is to try out all 7 while running FX.  These formats account
               for every  combination of  ASCII, Hexadecimal,  and  Decimal
               notation, and are summarized as follows:

               Format 1       ASCII, one row displayed per record.

               Format 2       Hexadecimal,  one   row  displayed   per
                              record.

               Format 3       Decimal, one row displayed per record.

               Format 4       ASCII  on   first  row,  hexadecimal  on
                              second row.

               Format 5       ASCII on  first row,  decimal on  second
                              row.

               Format 6       Hexadecimal on  first  row,  decimal  on
                              second row.

               Format 7       ASCII  on   first  row,  hexadecimal  on
                              second row, and decimal on third row.

               Bear in  mind that  in modes  4, 5,  6 and 7, the file bytes
               that are  normally displayed  on one  row in the first three
               modes will now require TWO or THREE rows on the screen.  For
               example, in  mode 6 (Function key 6 was pressed) each record
               from the  file will  occupy TWO rows in the File Window: The
               first will reflect the data in hexadecimal notation, and the
               second will  display the  same data  in decimal  form.   The
               cursor block  will be  3 columns  wide, and  2 rows  high in
               order to  contain the  2 display lines.  Although the cursor
               is larger, it is STILL only reflecting ONE byte in the file!




          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 14


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               The cursor  size ("Cell"  size)  will  automatically  adjust
               depending on  the display  mode, since the cell must be able
               to hold  the largest  value that  can occur  in the  current
               mode.   For instance,  in DECIMAL  mode (mode  3), the "Cell
               Size" is  one row high and 3 columns wide, since three-digit
               numbers can  occur.  Remember that no matter which format is
               selected, the  cell is still just reflecting ONE byte in the
               file.

               As  mentioned  before,  the  display  mode  is  selected  by
               pressing F1  through F7 or SHIFT F1-F7.  The characteristics
               of each mode are summarized as follows:

               Key   Display Mode                     Cell Size
               ---   ----------------------------     ------------------
               F1    FORMAT1 1- ASCII                 1 row  x 1 column
               F2    FORMAT2 2- HEX                   1 row  x 2 columns
               F3    FORMAT3 3- DEC                   1 row  x 3 columns
               F4    FORMAT4 4- ASCII + HEX           2 rows x 2 columns
               F5    FORMAT5 5- ASCII + DEC           2 rows x 3 columns
               F6    FORMAT6 6- HEX   + DEC           2 rows x 3 columns
               F7    FORMAT7 7- ASCII + HEX + DEC     3 rows x 3 columns

               Note that the display mode may be freely changed as often as
               desired- FX will always maintain the cursor at the same file
               byte.

               If SHIFT  is pressed  along with  any of  the above function
               keys (F1-F7),  the display  mode is  not  only  selected  as
               above, but  FX will  also automatically increase or decrease
               the record  size (RecSize)  value so  that  each  line  fits
               exactly in  the display window.  For example, if one pressed
               F7 to switch to format seven from format one, only one-third
               as many  bytes would  be visible  at a  time-  the remainder
               being off  to the  right or  left of  the window.   Pressing
               SHIFT-F7, however,  would reduce  the record  size, (# bytes
               per line), by one-third as well to 24 bytes per record.

               Note on  multi-row  modes  (Format  4  -  Format  7):  On  a
               monochrome monitor,  the last  row of  each record  will  be
               underlined.   On a  color monitor,  the  last  row  will  be
               displayed in a contrasting color.















          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 15


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Selecting the Numeric Display (F8)

               The value  of the  Byte, Integer,  and Long-Integer  at  the
               current file  position is  continuously displayed at the top
               center of the screen.  Each press of F8 cycles through the 4
               display options:

                    1)   DECIMAL notation (default)
                    2)   HEXADECIMAL notation
                    3)   BINARY notation
                    4)   No Display: Center top of screen left blank.

               To refresh  the memory,  a BYTE  is one  character (byte) in
               length and  is the  basic building  block of  MS-DOS  files.
               Each byte  is composed  of 8  "bits", each having one of two
               possible values: 1, meaning that bit is "set", or 0, meaning
               that bit is "cleared".  The bits in a byte are numbered from
               0-7.   Bit  0  is  known  as  the  "least  significant"  bit
               position, and  has a  weight of  1.   Bit  7  is  the  "most
               significant" position,  with a  weight  of  128.    This  is
               analogous to  the base 10 numbering system, where the right-
               most position  has a  weight of  1, the  one to  its left  a
               weight of 10, then 100, 1000, and so on.

               An INTEGER  is 2  bytes, and  a LONG  INTEGER  4  bytes,  in
               length.   (Integers and  Long Integers  are also referred to
               "Words"  and   "Double  Words",   respectively).     As   an
               illustration, assume  a dBASE database file is being viewed:
               The record  count is stored in the file as a 4-byte unsigned
               long; instead  of having  to manually  figure out what the 4
               bytes in  the file  add up  to,  it  is  only  necessary  to
               position the  cursor to  the correct byte in the header area
               of the  database file,  then check the top of the screen and
               note the value shown for the "Unsigned Long".  (Please refer
               to the  detailed discussion  of dBASE  database files at the
               end of this documentation).

               To summarize,  FX derives  the values  for the Byte, Integer
               and Long Integer as follows:

               BYTE:          The value  of the  single  byte  at  the
                              current file (cursor) position.

               INTEGER:       The integer  value of  the pair of bytes
                              at the  current file position; the first
                              byte being  the one  at the  cursor, and
                              the second byte the one after that.

               LONG:          The LONG (4 byte) integer at the current
                              file position,  the first byte being the
                              byte under  at cursor,  followed by  the
                              next 3.





          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 16


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               For reference,  the signed  and unsigned  decimal ranges  of
               these values are as follows:

                       UNSIGNED                   SIGNED
                       Min  Max             Min              Max
                       ---  -------------   ---------------  --------------
               BYTE     0   +255             -128            +127
               INTEGER  0   +65,535          -32,768         +32,767
               LONG     0   +4,294,967,295   -2,147,483,648  +2,147,483,647


               For example,  given the  same sample  file position, each of
               these displays would appear as follows as F8 was pressed:


               Decimal:          U Byte:13          |S Byte:13
                                 U Int :48653       |S Int :-16883
                                 U Long:2298789389  |S Long:-1996177907

               Hexadecimal:      H   Byte:dH
                                 E   Int :be0dH
                                 X   Long:8904be0dH

               Binary:           B        MSB<---------LSB
                                 I   Byte:        00001101
                                 N   Int :1011111000001101

               If DECIMAL  display is selected, two columns of numbers will
               be shown:  the left  column is  the UNSIGNED  value  of  the
               number at  the current cursor position, and the right column
               is the  SIGNED value.   Again,  to refresh  the  memory,  an
               unsigned value  cannot be  negative, and  all 8 bits in each
               byte are  numerically significant.   A signed number, on the
               other hand,  CAN be  negative, because the high-order bit is
               NOT used  for its  value but  as the "sign bit": if the sign
               bit is  0, the number is positive, and if it is 1 the number
               is negative.   Please  understand that  the issue  of signed
               versus unsigned  numbers is  only one  of INTERPRETATION-  a
               byte is  not intrinsically  signed  or  unsigned,  but  only
               becomes so  when one  decides to use the high-order bit as a
               flag instead of for its binary value.

               If HEX  display is  selected, there  is only one column: The
               unsigned Hexadecimal  (base 16)  value of the byte, integer,
               and long integer at the current file position.

               The BINARY  display shows only the byte and integer- not the
               long integer.   The "Least Significant Bit" position, (LSB),
               is at the right of the value, and the "Most Significant Bit"
               position (MSB)  is to  the left.  This means that the right-
               most bit  has a weight of 1, then progresses to 2, 4, 8, 16,
               32, etc., moving from right to left.





          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 17


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

               IMPORTANT NOTE: The evaluation of the above numbers does NOT
               "wrap" to  the next  line!   For instance,  if one is on the
               last byte of a line, FX will display INTEGER and LONG values
               based ONLY  on that  byte, and not on the usual 2 and 4 byte
               sequences, respectively.   As a result, the values shown for
               the Integer  and Long  Integer are  only meaningful  when at
               least 1  byte from  the end of the line and 3 bytes from the
               end of  the line,  respectively.   For example,  on the last
               byte of a line the Byte, Integer and Long values will all be
               identical.


          Optimizing the Display for ".DBF" Files  ("D")

               Since it  is often necessary to investigate dBASE compatible
               database files,  FX has  a feature  that  facilitates  their
               display in  the FX File Window.  Pressing "D" invokes a menu
               with 3 options: DATA, FIELDS and NORMAL.

               If one selects "DATA", FX will automatically determine where
               in the  database the  actual data  (records) begin, and also
               the record  size.    FX  will  then  automatically  set  the
               StartByte and the RecSize to these values.  Further, the TAB
               amount is set to equal the record size, so each press of TAB
               advances one record.

               If one  selects "FIELDS",  FX will  optimize its  display to
               show the  database field definitions from the header area of
               the database.  This is the same for all databases: the field
               definitions begin  at byte  32, each definition requiring 32
               bytes.     Again,  the   StartByte,  RecSize   and  TAB  are
               automatically set by FX.

               The NORMAL option does nothing more than set StartByte to 0,
               RecSize to  72 (the width of the display window), and TAB to
               5.

               Since  FX  might  potentially  be  used  to  repair  damaged
               database files,  it will  allow  the  above  options  to  be
               invoked even though the first byte in the file is other than
               decimal 2,  3 or  131.   (See discussion  on databases later
               on).  It will, however, display a warning message.  Also, if
               the values  found from  the file don't make sense, (E.g. the
               header area  of the  file indicated  a record  size that  is
               larger than  the over-all  file size!),  FX will  display  a
               message and  not take further action.  Also, FX doesn't care
               whether or not the file has the ".DBF" extension.

               Please refer  to the discussion of database files at the end
               of this  manual for  more information  about  database  file
               structures.






          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 18


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Understanding The FX Display


          FX displays files in terms of lines (records) in the File Window,
          each containing the number of bytes as defined for the  "RECSIZE"
          value.   (The last  line of a file may contain fewer bytes if the
          record size is not evenly divisible into the file size).

          FX supports  horizontally scrolling,  if necessary,  and an arrow
          will appear  on the left or right of the top line of the edit box
          to indicate  that data exists outside the display area.  Each row
          in the  window is accompanied by a number to its left outside the
          box border,  which is  the byte  in the  file at  which the  line
          (record) begins.   Note  that these  values will  remain the same
          even if  the data in the window is scrolled to the right or left.
          These numbers on the left will always be displayed in accord with
          the current  display mode  (F1-F7).   For instance, the "F7" mode
          uses  three  screen  rows  per  record:  ASCII,  hexadecimal  and
          decimal.   Therefore, the numbers to the left of each row will be
          expressed in decimal, hexadecimal and decimal respectively.

          At the top-center of the screen is the numeric display, which has
          already been described in detail.

          The last  2 lines  on the  screen display  file  information  and
          various counters  that describe  the current  file position  in a
          number of  ways.  Please familiarize yourself with their meaning!
          For reference, these lines appear as follows when FX is started:

          | Byte:     | Record:    1/0    | Recbyte:   | # Modified: 0    |
          File:         Length:0      StartByte:0     Recsize:72    Tab:5


          The current  byte is  displayed in a reverse video block ("Cell")
          in the  File Window,  the size  of which changes depending on the
          current display mode.  The number of bytes that fit in the window
          also changes  with the  display mode- for instance, since decimal
          representation requires  3 times  the width  of plain ASCII, one-
          third as  many bytes  will fit  in  the  window,  and  horizontal
          scrolling may be necessary to view the other bytes.

















          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 19


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          StartByte  ("S")

               The Startbyte  is that  byte in  the file  at which  FX will
               begin displaying its contents, and defaults to 0 (first byte
               in file).   This is useful in cases where a file begins with
               a header area that one does not want on the display; one can
               "focus in" on just the data portion that follows it.  Recall
               that if  the StartByte is not 0 (start of file), both LOCATE
               and COUNT will begin at StartByte, not the physical start of
               file.  This value can be modified by pressing "S".

               Also, a  section of  the file might want to be viewed with a
               special record  size, and  setting  the  Startbyte  to  this
               section will  allow FX  to establish its logical records "in
               sync" with the data.


          Recsize  ("R")

               The Recsize  (Record Size)  is the number of bytes FX places
               on each  display line.   This  value defaults  to the window
               size, (72  bytes), and  can be  modified  by  pressing  "R".
               Since FX  scrolls horizontally,  the  Recsize  can  be  much
               larger than  the width  of the  display window-- up to about
               2,000 bytes per line in this version.

               The Recsize can be very useful when used in conjunction with
               the StartByte.   For  instance, consider the case of a dBASE
               database file.   The  byte at which data begins can be found
               in the header portion of the database, as well as the record
               size in  bytes.   Armed with this information, the StartByte
               can be set to the byte where data begins, and Recsize can be
               set to  the dbase  record size.    This  will  result  in  a
               "browse" of  the records  in the  database, one  record  per
               line, except that the display is in FX format, so EVERY byte
               in the record is visible!


          Tab Amount  ("T")

               The last  value on  the last  line is the tab amount, and is
               the number  of bytes  FX will advance or back up when TAB or
               SHIFT-TAB are pressed.  This value defaults to 5, and can be
               modified by  pressing "T".   Again  referring to  the  above
               database example,  the tab  amount can  be set  to equal the
               recsize, so  each press  of TAB will advance one record, and
               each press of SHIFT-TAB will go back one record.










          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 20


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          File Byte

               The next  to last line is in reverse-video, and displays the
               current position  in the  file from  a number of viewpoints.
               The  first  field,  "Byte:",  ALWAYS  reflects  the  current
               absolute position  in the  file as  an offset  from 0.  Note
               that FX  always considers  the first  byte in any file to be
               byte 0 (zero).  This is in keeping with DOS conventions.


          Record

               The number  of bytes  that FX  places in  each line  is  the
               number defined  as the  Record Size  (modified  by  pressing
               "R"), and  defaults to  the window  size, 72  bytes.    (The
               current record  and  the  current  line  can  be  considered
               synonymous).   Each line  on the FX display is considered to
               be a  record, and  FX reckons  records as  starting  from  1
               (one), NOT  0.  This counter is of use when viewing database
               files, for  instance, and could be set to the record size of
               the database  to facilitate  viewing.   Note that the record
               size can  be much  larger than the window dimensions-  up to
               about 2,000 bytes, in fact.

               If the  record size  specified is  not evenly divisible into
               the number of bytes in the file, (or, if StartByte is not 0,
               then the number of bytes from the StartByte value to the end
               of the  file), the  last line  will show a record number one
               greater than the upper-limit displayed, for example, "Record
               551/550".  This is intentional.


          Recbyte

               This is  the byte  offset into  the current record, with the
               first byte  of a  record being  0.   This is again handy for
               database files and the such, when one knows the byte offsets
               of certain fields within a record.


          Modified

               Displays the  number of  bytes in  the file  that have  been
               changed by the user.













          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 21


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Using FX with dBASE database files


          This section  is meant  to serve not only as a guide to the dBASE
          database file  structure, but  also as  the basis  for  a  sample
          session.   Also, the  information below  could be  useful in "re-
          constructing" damaged  database files!   So start up FX, load any
          database file, and follow along.  (Needless to say, if you intend
          to alter any bytes in the file, PLEASE DO SO WITH A COPY, AND NOT
          THE ORIGINAL!).

          dBASE databases are composed of 2 main areas:

               (1)  The header  area, which contains information about
                    the database,  such as the number of records, date
                    of last update, and the field definitions.

               (2)  The actual  data immediately  follows  the  header
                    area.   Every record is the same size, independent
                    of how much data is stored in it.


          The bytes  in the  header area  have the following meaning.  (The
          byte numbers  given are from the start of the file; that is, they
          will correspond to the "Byte:" display on the next to last line).

               Byte 0:        dBASE version  number. Can  have one of three
                              values (shown  here in  decimal): 2=dBASE  II
                              file, 3=dBASE III file, or 131=dBASE III file
                              with a Memo field.

               Byte 1:        Year of last edit date.

               Byte 2:        Month of last edit date.

               Byte 3:        Day of last edit date.

               Bytes 4-7:     Number of  records in  the database.    (Long
                              Integer).

               Bytes 8-9:     Length of the header area in bytes (Integer).
                              Note that  this is  ALSO  the  file  position
                              where the data actually begins in the file!

               Bytes 10-11:   The record size in bytes (Integer).

               Bytes 12-31:   Reserved, and therefore not very interesting.

               Byte 32-??     Fields are  defined.   There will be 32 bytes
                              used to  describe each  field,  for  as  many
                              fields as necessary.






          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 22


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Examining the field definitions

               To isolate the field definitions:

                    1)   Set StartByte to 32 bytes.
                    2)   Set RecSize to 32 bytes.

               Each line  will contain  a full field definition, the format
               of which follows.  (The values are OFFSETS from the start of
               each field entry).

               Bytes 0-10     The field name, 1-10 characters, zero-filled.
                              (E.g. C-style "Null-terminated" string).
               Byte 11        The field type: C, N, L, D, or M.
               Bytes 12-15    Field data address.  Of no interest to us.
               Byte 16        Field length.
               Byte 17        Number of decimals.
               Bytes 18-31    Reserved.

               Note that the "RecByte" counter on the bottom is quite handy
               here: it  displays how  many bytes  one is  offset into  the
               CURRENT RECORD.   (The  first byte of any record is 0).  For
               example, to  position the cursor at the field's FIELD LENGTH
               byte, just move until RecByte equals 16.

































          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 23


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Examining the data

               1)   Position  the  cursor  to  byte  8  and  read  the
                    UNSIGNED  INT  value  in  the  upper-left  of  the
                    screen.   This is  the size in bytes of the header
                    area.

               2)   Position the  cursor  at  byte  10  and  read  the
                    UNSIGNED INT  value from  the upper-left corner of
                    the screen.  This is the record size.

               3)   Set the  StartByte to the value found in step (1),
                    so that  FX will start displaying the file at this
                    point.

               4)   Set the  RecSize and  TabAmount to the value found
                    in step  (2), so  that FX will format one database
                    record per one display line.

               Of course,  one could also just press "D" and have FX do all
               this itself, but, then, where's that sense of adventure?


               NOTE: All  deleted records  contain an  asterisk (*)  in the
               first byte  of the  record, (and therefore the first display
               column, RecByte=0),  and normal records will contain a space
               (32 decimal  or 20H  hexadecimal) at this position.  One can
               easily mark  records as deleted, and "un"-delete them, using
               FX.   Also, please  observe that  any data  changed using FX
               that alters  the value of fields used in an associated INDEX
               FILE may  render the  index file outdated, so always REINDEX
               after any changes to key field values made with FX!

























          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 24


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Summary of FX Messages


          1)   Memory-Related Error  Messages:   One of  the following
               messages may  occur if there is insufficient memory for
               fX to carry out certain tasks:

               "Not enough memory to save screen contents."
               FX was  unable to  obtain enough  memory to save the current
               screen contents prior to displaying the ERROR box.

               "Not enough memory for Save Screen buffer."
               FX was  unable to  obtain enough  memory to save the current
               screen contents prior to displaying the HELP screen.

               "Not enough memory for screen/locate buffer."
               FX allocates  8K for the search buffer when it first starts.
               If it  can't find  the available  memory for  this  required
               buffer, it will exit to DOS at once.



          2)   File-Related  Error  Messages:    The  following  error
               messages may  occur  if  the  file  being  examined  is
               damaged, or exists on damaged portions of the disk:

               "Error accessing this file byte!"
               FX was  unable to  seek to a certain file position.  If this
               message appears,  the file  is probably on a damaged portion
               of the disk.

               "Error closing File.  Exiting to DOS..."
               FX was  unable to  close the  file;  since having open files
               hanging around  is  not  generally  a  good  idea,  FX  will
               immediately exit under these circumstances.

               "Error seeking to starting byte."
               FX was unable to seek to the start of the file.

               "Error writing byte."
               There was an error writing the byte to the file.

               "WARNING: Error  flushing buffers:  Cannot get  a  duplicate
               handle."
               FX was unable to flush the file buffers to disk after a byte
               was modified.

               "WARNING: Error  flushing buffers:  Cannot  close  duplicate
               handle."
               FX was unable to commit a modified byte to the file.







          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 25


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------


          3)   Status Messages

               "Byte successfully written."
               Confirms that  a modified  byte was  successfully written to
               the file.

               "Cannot Edit bytes when in ALPHA-NUMERIC mode."
               An attempt  was made  to modify  a byte by pressing CONTROL-
               ENTER when  the "PURE-ALPHA"  display  option  was  enabled.
               Press "A"  again to  toggle this  mode off,  then modify the
               byte in question.

               "No File is Selected..."
               This message  appears in  a shaded box in the File Window if
               no file  is selected.   Since  no FX  feature  can  be  used
               without a  file selected, either press "F" to select a file,
               or ESCAPE to exit the program.

               "No more occurrences found."
               Appears when NEXT is invoked, and no more occurrences of the
               byte pattern  were found  in the file after the current file
               position.

               "nnnn Occurrences found."
               Report of total occurrences found after COUNT was invoked.

               "Please select a FILE to examine."
               The user tried to invoke an option before selecting a file.

               "Tab width must be 1-20000"
               A tab width was entered that was out of range.

               "Valid record sizes are 0-1999"
               A record size was requested that was out of range.

               "Value is out of range for this file."
               The value  entered for the starting byte (StartByte) was out
               of range.


















          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 26


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------


          4)   Database Messages:   The  following messages  may occur
               when the DATABASE option is invoked ("D"):

               "File is under 32 bytes in size.  Cannot be database!"
               It is  theoretically impossible  for a  database file  to be
               under 32 bytes in length.

               "The header size is impossible for this file!"
               FX read  the stored  Header Size  and Record  Size from  the
               database header  area, and found that (1) The header size is
               larger than  the over-all file size, or (2)  The record size
               is larger than the file size.

               "Note: The first byte of the file is NOT 2, 3 or 131!"
               The first  byte of  all valid database files is either 2, 3,
               or 131.   FX  is simply  reporting that this is not the case
               for the current file.







































          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 27


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Error Handling


          In order  to be as robust as possible, FX takes over the hardware
          error handler,  interrupt 24H.   The  upshot of  this is that the
          message "Abort,  Retry, Fail"  will  never  appear  while  FX  is
          running.   Instead, in  the event  of an  error, FX will pop-up a
          special box informing the user of the nature of the problem.  The
          possible errors reported by FX are as follows:

               Bad Structure Length
               CRC Error
               Drive Not Ready
               General Failure
               Printer out of Paper
               Read Fault
               Sector Not Found
               Seek Error
               Unknown Command
               Unknown Media Type
               Unknown Unit
               Write Fault
               Write Protect


          Apart from  the "Write Protect" and "Drive Not Ready" errors, the
          chances of  one of  these errors  occurring  very  often  in  the
          context of FX is practically nil, unless, of course, one is using
          one's floppy  disks for  coasters.   For more  information on the
          import of the above errors, please consult a DOS manual.

          The interesting  and important  aspect of this, however,  is that
          FX CAN handle damaged files, literally "stepping through" corrupt
          sections of  a file  to valid  sections.   FX will always issue a
          warning when  an I/O  error has  occurred, allowing  the user  to
          ABORT FX  or simply ignore the error.  If IGNORE is selected, any
          lines that  contain unreadable areas of the file will be replaced
          with FLASHING ASTERISKS.

          In addition,  if it  is suspected  that a  file contains  damaged
          sections, or  it is desired to locate those sections, this may be
          easily accomplished  by simply  pressing the PgDn key when in the
          File window  to page  through the  file.  If there is any problem
          with the  file, then  the error box will pop up alerting the user
          to the  situation, and  lines containing errors will be blinking.
          This is an extremely powerful feature.











          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 28


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          FX Command Summary


          ESCAPE or X   Quit FX and return to DOS.
               /        Invoke the FX options menu.

          Positioning the cursor when in the File Window
          ----------------------------------------------
               Up Arrow            Previous record
               Down Arrow          Next record
               Left Arrow          Previous byte in record
               Right Arrow         Next byte in record
               ALT + Left Arrow    Jump to first byte in record
               ALT + Right Arrow   Jump to last byte in record
               HOME                Jump to left edge of File Window
               END                 Jump to right edge of File Window
               PGUP                Previous screenful
               PGDN                Next screenful
               Control + PGUP      Jump to first record (Top of file)
               Control + PGDN      Jump to last record (Bottom of file)
               Control + HOME      Jump to first file byte (StartByte)
               Control + END       Jump to last byte in the file
               Tab                 Move forward by tab amount
               Shift + Tab         Move backward by tab amount
               F9                  Pan Left by 1/2 window
               F10                 Pan Right by 1/2 window


          Keys that modify the display
          ----------------------------
               A                   Toggle PURE ALPHA MODE
               D                   Optimize the display for ".DBF" files.
               F1-F7               Select a display mode 1 through 7.
               [F1-F7]             Set  file's   display  mode  AND  adjust
                                   "RecSize" so  that each file record fits
                                   exactly in  the display  window for  the
                                   given mode.
               F8                  Cycles  through   the  numeric   display
                                   options Dec-Hex-Bin-None  that appear in
                                   the upper-left of the screen when in the
                                   File Window.


          Keys that invoke FX functions
          -----------------------------
               C                   Count occurrences of byte patterns
               F                   Select file
               J                   Jump directly to the specified file byte
               L                   Locate byte/text pattern
               N                   Locate next occurrence
               R                   Specify record size
               S                   Specify starting display byte
               T                   Specify tab amount
               CONTROL + ENTER     Modify current byte



          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 29


          FX User Documentation                                 Version 1.0
          -----------------------------------------------------------------

          Notes


          1)   Fx can  easily handle  very large  files, but for files over
          999,999 bytes, the display of the byte offset of each record that
          is placed  to the left of the File Window will over-write the box
          border.   This is  NOT a  bug.   The width of the File Window (72
          columns) was chosen because 72 is evenly divisible by 1, 2 and 3,
          allowing all display modes to evenly fill the window, but leaving
          only 6  free columns  to the  left of the box.  The next smallest
          number  divisible  by  1,  2  and  3  is  66,  which  was  judged
          unacceptably smaller.

          2)   Note on  Vertical Scrolling:   FX  is optimized  to traverse
          files by  "screenfuls", using  PgUp and  PgDn.  The display will,
          however, scroll  one line  at a  time up  or down  when expected-
          When Up  Arrow is  pressed and the cursor is on the first line of
          the window,  or when  Down Arrow  is pressed and the cursor is on
          the last line of the window.  However, what really occurs in this
          case is  more of  a "shift"  in the  window on  the file  than an
          actual scroll,  since a  full screen  of data  is completely  re-
          loaded.   This was  a conscious  design decision  to ensure that,
          without  fail,   the  current   display  perfectly   mirrors  the
          underlying file  and,  further,  that  the  cursor  is  perfectly
          synchronized with  its position  both on  the display  and in the
          underlying file.    This  may  result  in  sluggish  line-by-line
          scrolling when  examining files on floppy disks or very slow hard
          disks, in which case PgUp and PgDn would be preferable for paging
          through the file quickly.

                   ______________________________________________

          FX was  coded entirely  in C  and assembly  language,  using  the
          Microsoft  C  Optimizing  Compiler  version  5.1,  and  MASM;  it
          consists of  about 5,000  lines of C source code, and 1,500 lines
          of assembler.   (This  is not necessarily an endorsement of these
          products, but  is mentioned  for those  who may  be  interested).
          This is the first official, public release of FX-- Version 1.0
                   ______________________________________________

          If you  have special  file formats  or requirements  and think FX
          could be  the basis  for a  useful utility in your environment, a
          proprietary version can easily be created for specific needs.  We
          will gladly  consider any  proposals and  quote pricing and terms
          for any ideas you have in mind.

          If you  have any  questions, technical  difficulties, comments or
          suggestions of any kind, we would be quite delighted to hear from
          you!   Please address all correspondence to: Far Darter Software,
          PO BOX  519, Closter,  NJ 07624.  (Registered users will be given
          priority attention).  Due to limited time, we are unable to offer
          telephone support;  however,  registered  users  are  welcome  to
          include their  phone number-   if  time allows  and the situation
          recommends itself, we will get back to you by phone.



          -----------------------------------------------------------------
          (C) 1990, William Noble                                   Page 30




          FX Registration Information

          The registrations  and licenses  offered for FX (effective 4/1/90) are
          as follows:

          1)   A $15  registration fee is requested for the non-commercial,
               private use of the program.

          2)   $30 -  Same as  (1), but  includes printed documentation and
               the latest version of FX.

          3)   In a  business or  government environment, a $35 license per
               user is  mandatory.  This license is for the perpetual, non-
               exclusive use of any version, and automatically includes the
               latest version  of FX  plus  printed  documentation.    When
               registering for  more than  one user,  please  estimate  the
               number of  copies of  the program  you will use and refer to
               the following discount schedule:

               # Users        License fee
               (Copies)       per copy
               -------        --------------------
               1              $35
               2-9            $30
               10-24          $25
               25-49          $20
               50-99          $10
               100-199        $5
               Over 200       $1000 one-time fee, unlimited copies

               Independent of the number of users, you will receive one set
               of materials; you may then make as many copies as licensed.

          4)   FX can  also be  licensed on a per-server basis in a network
               environment, at  $125 PER NETWORK SERVER, which allows FX to
               be installed  on that one central location.  Access in terms
               of number  of nodes  and number of users is UNRESTRICTED and
               UNLIMITED.  If more than one local area network is involved,
               then  additional   licenses  for  each  network  server  are
               required.   This includes  the  latest  version  of  FX  and
               printed documentation; one set of materials will be sent.

          5)   Distribution  Licenses  and  all  other  situations:  Please
               contact the  author.   (Copying or  using FX  in any  manner
               other than outlined above is prohibited).


          Please send all registrations, inquiries or comments to the address on
          the next page.  We accept personal or company checks, money orders, or
          Visa, MasterCard  or  American  Express.    Sorry--  we  don't  handle
          purchase orders or invoicing.

          (Upgrades will be made available upon request).


          **********************************************************************
          *  Version 1.0         FX Registration Form        Effective 4/1/90  *
          **********************************************************************

                           Please send to:  Far Darter Software
                                            PO Box 519
                                            Closter, NJ
                                            07624

          Limit of Liability:
               FX is  distributed as-is.   The  author disclaims all warranties,
               expressed or  implied.   The author  will assume no liability for
               damages either  from the  direct use  of this  product  or  as  a
               consequence of the use of this product.



          Please register/license my copy of FX as:  (Select one)

             (1) Single user basic registration @ $15.00         __________

             (2) Single user "plus" registration @ $30.00        __________

             (3) Business/Government: _____ users @ _____     =  __________
                                   (See discount schedule)

             (4) LAN, @ 125.00 per Server:  _____ @ $125      =  __________

                                                   Subtotal:     __________


              New Jersey residents add 6% sales tax            + __________

                                                       Total:    __________



          Payment:  [] Check   [] Visa   [] MasterCard   [] American Express

          Card Number:     ________________________________________________

          Expiration date: ________________________________________________

          Name:    ________________________________________________________

          Company: ________________________________________________________

          Address: ________________________________________________________

          City, State, Zip: _______________________________________________

          Phone-  Day: ______________________   Nite: _____________________

          Signature:   ______________________   Date: _____________________




                             Thanks for supporting Shareware!
          



          Index
          -----

          /Q (Quiet) switch  2                   Locating bytes  11
          Alpha mode  8, 14, 26                  Long integer  16
          ASCII  11, 14                          Memory requirements  3
          Binary display  17                     Menus, using  5
          BINARY notation  16                    Messages
          Bit  16                                  File-related  25
          Byte  16                                 For DATABASE option  27
          Byte location counter  21                Memory-related  25
          Cell  19                                 Status  26
          Cell size  15                          Modified
          CGA monitors  3                          Display of  21
          Command Line arguments  2              Modifying a byte  13
          Command summary  29                    Monitor type  3
          Counting byte patterns  13             Mouse support  3
          Current directory  10                  Network Registration  A
          Current file location  21              Network support  3
          Damaged files  28                      Numeric display  16
          Database files  22                     Numeric equivalent display  16
          Databases                              Options Menu  9
            Displaying  18                       PATH environment variable  4
            Structure of  22                     Pure Alpha mode  14
          Decimal  11, 14                        Quick start  2
          Decimal display  17                    Quitting FX  8
          DECIMAL notation  16                   Recbyte  21
          Display mode  7, 19                    Record
            Alpha-Numeric  14                      Display of  21
            Changing the  7, 14, 15                Offset into  21
          DOS version  3                         Record size  20, 21
          Double Words  16                         Default  6
          Editing keys  5                          Description  6
          Error handling  28                     RecSize  15, 18, 19
          Error messages                           Modifying  20
            File-related  25                     Registration form  B
            Memory-related  25                   Registration Information  A
          File                                   Scrolling  19
            Selecting  10                          Vertical  30
          File Window  6                         SHARE program  3
          File Window commands  8                Signed numbers  17
          Hardware Requirements  3               StartByte  12, 18, 20
          Help, invoking  2, 8                     Modifying  20
          Hexadecimal  11, 14                    Starting file byte  20
          Hexadecimal display  17                Starting FX  2
          HEXADECIMAL notation  16               Status messages  26
          I/O Errors  28                         Tab amount, setting  20
          Installation  4                        Technical support  30
          Integer  16                            Unsigned numbers  17
          LANs                                   Words  16
            Registering FX for  A
            Using FX on  3

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2249

     Volume in drive A has no label
     Directory of A:\

    FX       EXE     61949   4-11-90  11:32a
    FX       REG      4963   4-09-90   5:58p
    FX       TXT     95798   4-09-90   5:51p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       573   1-01-80   6:30a
    FILE2249 TXT      2961   7-13-90   2:53p
            6 file(s)     166284 bytes
                          153600 bytes free
