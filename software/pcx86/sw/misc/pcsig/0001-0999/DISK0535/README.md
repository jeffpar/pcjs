---
layout: page
title: "PC-SIG Diskette Library (Disk #535)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0535/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0535"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER HANDBAG #2"

    This disk contains several powerful DOS utilities, a background
    dialer, a text file lister, and a multi-tasking operating
    environment.  It also contains a communications program, some
    printer utilities, and a small memory resident program to
    automatically disable Caps Lock when an alphabetic key is
    pressed.  All but one of the programs are fully documented, and
    most have Assembly source code or BASIC listings.
    
    System Requirements:  128k, 1 disk drive, monochrome
    monitor.
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>. For instructions on ASM listings, refer to your
    Assembler manual.
    
    Suggested Registration:  SDIR50 $10.00
    
    File Descriptions:
    
    The First Disk Contains:
    CAPSUNLK COM  Memory resident utility to unlock the caps-lock
    CAPSUNLK ASM  ASSEMBLY Source Listing for CAPSUNLK.COM
    INT13    COM  Copy Protection Breaker DOS Utility
    INT13    ASM  ASSEMBLY Source Listing for Copy Protection Breaker
    ERRMON   DOC  Documentation for Disk I/O Error Monitor
    ERRMON   COM  Disk I/O Error Monitor for the AT
    DISKIDX  DOC  Documentation for disk organizer
    DISKIDX  BAS  BASIC source code listing for disk organizer utility
    DIALER95 DOC  Background dialer documentation
    DIALER95 COM  Background dialer program
    TMODEM32 COM  Program thats transmit data in several protocols.
    TMODEM   KEY  Auxiliary Communications utility
    TMODEM   CNF  Configuration file for communications program
    TFL      EXE  ASCII File Transfer Utility - Compiled
    TFL      DOC  ASCII File Transfer Utility - Documentation
    TFL      BAS  ASCII File Transfer Utility - BASIC source listing
    SDIR50   DOC  Documentation for all purpose directory utility
    SDIR50   COM  All purpose directory utility  and command shell
    LPTX     DOC  Documentation for above
    LPTX     COM  Allow capture of printer output to disk.
    INT13    DOC  Documentation for Copy Protection Breaker
    
    The Second Disk Contains:
    QWIKLABL KEY  Key assignments file for QWIKLABL
    QWIKLABL EXE  Computer-assisted typing of gummed labels
    PCDISK   COM  Disk cataloging program.
    COPYQ    EXE  Wildcard selective y/n copy, such as used in VDEL.
    LOAD     ASM  ASSEMBLY Source for LOAD.COM
    LOAD     COM  Loads COM file larger than 64KB.
    SUPEREN  COM  Renames files, subdirectories, volume labels.
    PUSH     COM  Save CRT image to a file.
    PUSH-POP DOC  Documentation for PUSH & POP.COM.
    POP      COM  Restore CRT image from a file.
    INDEXER  DOC  Documentation for use of INDEXER
    INDEXER  PAS  Microsoft PASCAL Source Code of INDEXER
    TRIVIA   C    A chuckle for C programmers.
    SUPEREN  ASM  ASSEMBLY Source for SUPEREN.COM
    INDEXER  EXE  Computer-aid for book indexing
    SHOW     COM  Like TYPE with MORE built in.
    FLIP     ASM  ASSEMBLY Source for FLIP.COM.
    FLIP     COM  Flips between page 0 & 1 of graphics text screens.
    CED1_03B COM  DOS Multiple Command Line Editor-create new DOS commands
    CED1_03B DOC  Documentation for CED1_03B.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CED1_03B.DOC

{% raw %}
```
                    Chris Dunford's "Command EDitor" V1.0b
















                                ced User's Guide
                                Table of Contents

               Purpose . . . . . . . . . . . . . . . . . . . .   1
               System Requirements . . . . . . . . . . . . . .   1
               Terminology . . . . . . . . . . . . . . . . . .   1
               Installation  . . . . . . . . . . . . . . . . .   2
               Command line editor . . . . . . . . . . . . . .   2
               DOS command stack . . . . . . . . . . . . . . .   3
               Application program command stack . . . . . . .   5
               Pcall function  . . . . . . . . . . . . . . . .   5
               Synonyms  . . . . . . . . . . . . . . . . . . .   6
               Command chaining  . . . . . . . . . . . . . . .   7
               Command parameters  . . . . . . . . . . . . . .   9
               Ignoring commands . . . . . . . . . . . . . . .  11
               Ignoring individual commands  . . . . . . . . .  11
               Clearing ced objects  . . . . . . . . . . . . .  12
               Configuration files . . . . . . . . . . . . . .  13
               Changing default buffer sizes . . . . . . . . .  14
               Status display  . . . . . . . . . . . . . . . .  15
               Multiple definitions  . . . . . . . . . . . . .  16
               User-installed commands . . . . . . . . . . . .  16
                    Subfunction 0: Enqueue . . . . . . . . . .  17
                    Subfunction 1: Dequeue . . . . . . . . . .  17
                    Return registers . . . . . . . . . . . . .  18
                    Command processor  . . . . . . . . . . . .  18
               Problem reporting . . . . . . . . . . . . . . .  19
               Copyright and Disclaimer  . . . . . . . . . . .  20
               Appendix A: Command summary . . . . . . . . . .  21
               Appendix B: Order of Processing . . . . . . . .  23
               Appendix C: Limitations . . . . . . . . . . . .  24
               Appendix D: Versions  . . . . . . . . . . . . .  25
               Appendix E: User Command Demo . . . . . . . . .  26






                                                                          1
                          === ced 1.0 User's Guide ===

          Purpose
          -------

          Ced  (which  stands  for  Command  EDitor) provides the following
          functions at the DOS prompt, or from within  certain applications
          programs:

               -- Complete command line editing facility.

               -- Recall of previously issued commands for re-entry.

               -- Command  synonyms, which may include "chaining" of a
               series of commands.

               -- Parameterization of synonym commands.

               -- Recall of parameters for previously issued commands.

               -- User-settable buffer sizes for all functions.

               -- For  programmers, a  facility to  add new "resident"
               commands to the DOS shell.

          Ced  is  an  evolutionary  development of two earlier programs by
          another  author: DOSEDIT,   and  RETRIEVE   (an  IBM  copyrighted
          product).  It performs all of the functions of both programs, and
          has a number of enhancements.   Both  DOSEDIT  and  RETRIEVE were
          written by Jack Gersbach.


          System Requirements
          -------------------

          Ced  was  written  for  an  IBM  PC/XT/AT  or compatible machine.
          However, it  uses  no  hardware-specific  functions,  so  it will
          probably work with any MS-DOS machine.

          Ced requires DOS Version 2.00 or later.  It increases the size of
          resident DOS by about 16K bytes  after installation  with default
          buffer sizes (this can be reduced).


          Terminology
          -----------

          This document  will usually refer to "commands" or "DOS commands"
          as ced targets; you should take  this to  mean either  (a) actual
          DOS  commands,  or  (b)  input  to  ced-compatible  programs (for
          example, DEBUG commands).

          Key names are as follows:






                                                                          2
                          === ced 1.0 User's Guide ===

          <Up>           The up-arrow key on the numeric keypad.
          <Down>         The down-arrow key on the numeric keypad.
          <Left>         The left-arrow key on the numeric keypad.
          <Right>        The right-arrow key on the numeric keypad.
          <Backspace>    The large left-arrow key, next to NumLock.

          A caret (^) means  to press  the Ctrl  key in  conjunction with a
          named key;  for example,  <^End> means  "press and  hold the Ctrl
          key, then press <End>".

          Words in CAPS are ced keywords and must be typed exactly as shown
          (they need not be capitalized when you use them).

          Words in [brackets] are optional elements of a command.


          Installation
          ------------

          Installation  (in  its  simplest  form) is accomplished by typing
          "ced" at the DOS prompt, or including the statement "ced" in your
          AUTOEXEC.BAT file.  There are optional parameters when installing
          ced; these will be covered later.

          After ced is installed, everything will appear to  be normal, but
          you now  have many  new features when entering DOS commands.  The
          remainder of this document will describe these features.

          Ced is active either at the  DOS prompt,  or when  an application
          program requests  buffered keyboard  input from DOS (DOS function
          0AH).  There are a few such programs (DEBUG  and EDLIN  are two);
          but the main use of ced is at the DOS prompt.

          Once  ced  has  been  installed,  the  command  "CED"  becomes an
          internal DOS command.  Thus, when you want to  issue ced commands
          (as  explained  below),  you  will  type "CED <command>", but the
          program file  (CED.COM)  need  NOT  be  available  on  disk.  Ced
          becomes fully  memory resident  and is  an extension to DOS after
          installation.  In particular,  this  means  that  you  should NOT
          include a  drive or  path in  issuing CED  commands after initial
          installation.  A command like "C:CED SYN d dir"  will reload ced,
          which is probably not what you intend.


          Command line editor
          -------------------

          Ced provides  a new  "editor" for  DOS commands.  The DOS editing
          keys (F3 for  copy-to-end-of-line,  for  example)  are  no longer
          available.  Instead, the following keys may be used:

          <Home>              Cursor to home position (first character).





                                                                          3
                          === ced 1.0 User's Guide ===


          <End>               Cursor   to   end  position  (following  last
                              character displayed).

          <Left>              Cursor  left  one  character  position.  This
                              does  not  erase  any  characters,  it simply
                              moves the cursor.

          <Right>             Cursor right one position.

          <^Left>             Cursor left one word.

          <^Right>            Cursor right one word.

          <Ins>               Enter/exit Insert  mode.  When  Insert is on,
                              new  characters   will  be  inserted  at  the
                              current cursor position.  When Insert is off,
                              new characters  will type  over the character
                              at the cursor position.

          <Del>               Delete the character at the cursor position.

          <Backspace>         Delete  the  character  to  the  left  of the
                              cursor position (destructive backspace).

          <^End>              Delete all characters from cursor position to
                              end of line.

          <Esc>               Cancel: erase all data and start over.

          When you have completed entering and  editing the  command, press
          <Enter> as usual to execute.


          DOS command stack
          -----------------

          Ced keeps  a record  of each command you enter.  You can retrieve
          and re-enter these commands by using the <Up> and <Down>  keys to
          display the  old commands, then pressing <Enter> when the desired
          command is displayed (the command can be edited, of course).

          You can visualize the  stored  data  as  a  "stack"  of commands.
          Ced  keeps  a  pointer  to  somewhere in this stack.  The pointer
          always points to a  location  "between"  two  commands;  when you
          press <Up>,  ced displays  the command  "above" the pointer, then
          moves the  pointer up  one command.   When you  press <Down>, ced
          displays the  command "below" the pointer, then moves the pointer
          down one command.

          For example, suppose you have entered  commands A,  B, and C. The
          stack will appear as follows:





                                                                          4
                          === ced 1.0 User's Guide ===


                              +-------------+
                              |      A      |
                              +-------------+
                              |      B      |
                              +-------------+
                              |      C      |
                              +-------------+  <-- pointer

          The  stack  is  circular  in  nature; thus, if the pointer points
          "below" the last command in the stack (as  it does  above), it is
          actually  between  the  last  command  (C)  and the first command
          (A).  In the situation above, pressing <Up> will  display command
          C and  leave the  pointer between  B and C.  Pressing <Down> will
          display command A, and leave the pointer between A and B.

          When you recall an old command  and re-enter  it without editing,
          the re-entered command is not added to the stack, and the pointer
          will drop one level.  Suppose, for  example, that  you press <Up>
          twice from  the position above (pointer below C): B is displayed,
          and the stack looks like this:


                              +-------------+
                              |      A      |
                              +-------------+ <-- pointer
                              |      B      |
                              +-------------+
                              |      C      |
                              +-------------+

          If you now press <Enter> (without editing the command), command B
          will be sent to DOS, and the pointer will drop to point between B
          and C.  From there, <Up> will  display B  again, and  <Down> will
          display  C.   Thus  you  can  "recycle"  a  series of commands by
          pressing <Up> until you see the first command, <Enter> to execute
          it, then  a series  of <Down><Enter>  sequences to re-execute the
          commands in the original order.

          If you retrieve an old command and edit it before  execution, the
          newly edited command is added to the bottom of the stack, and the
          pointer will point just below it.

          Ced will not stack any commands  of two  characters or  less (the
          theory  being  that  it's  easier  to retype than to go searching
          through the stack).

          This is one of those computer gizmos that's easier to use than it
          is to  explain.  Just  play with  <Up> and <Down>; you'll get the
          idea.






                                                                          5
                          === ced 1.0 User's Guide ===

          You can remove a command from  the  stack  by  displaying  it and
          pressing <^PgDn>,  and you can clear the entire stack by pressing
          <^PgUp>.

          The actual number of commands which will be held in  the stack is
          a function  of the  length of  the commands  and the  size of the
          stack (which can be increased; see below for details).


          Application program command stack
          ---------------------------------

          Ced actually keeps two  complete command  stacks: one is  for DOS
          commands, the  other for  commands entered into compatible appli-
          cation programs (DEBUG, et  al).   Thus,  DOS  commands  will not
          appear in the command stack while in DEBUG, and vice versa.


          Pcall function
          --------------

          "Pcall"  stands  for  parameter  recall;  this is a second way to
          quickly  retrieve  old  commands.   Pcall  simply  remembers  old
          parameters to  specific commands.   For example, suppose you have
          an editor called "edit", and the last time  you executed  it, you
          used "edit c:\util\foo.doc".  If you now enter "edit" without any
          parameters, ced will assume that you want to  edit the  same file
          and will supply the "c:\util\foo.doc" for you.

          You could,  of course,  scroll back through the command buffer to
          find the old command, but it might take a while  to find  it (and
          the command might be missing if it was too long ago).

          Because  many  commands  are  best  used WITHOUT parameter recall
          (FORMAT and ERASE are good examples), ced will only use  pcall on
          commands that you specify.   To make a command "pcallable", type

               CED PCALL <command>

          at the  DOS prompt.   For example,  if you  want to make "edit" a
          pcall command, type

               CED PCALL edit

          (Remember that the ced diskette need not be available).

          If you wish to issue a  command for  which pcall  is enabled, but
          you do  not want  it to  have parameters,  add a  space after the
          command.  For example, suppose you have issued a  "CED PCALL dir"
          command  and  your  last  dir  was a "dir *.exe". If you now type
          "dir", ced will add the "*.exe"  automatically.  However,  if you





                                                                          6
                          === ced 1.0 User's Guide ===

          type "dir  " (note  the space), ced will not add the "*.exe", and
          you'll get a full directory.

          You may also bypass  pcall  processing  through  the  use  of the
          ignore   character;   see   below,   under  "Ignoring  Individual
          Commands".


          Synonyms
          --------

          The synonym function allows  you to  define brief  "synonyms" for
          frequently used  commands.  For  example, suppose you invoke your
          communications package  by typing  "talk rbbs  /c63".  Ced allows
          you  to  abbreviate  this  to  a  shorter  command, say, "bb", by
          typing at the DOS prompt:

               CED SYN bb talk rbbs /c63

          The exact syntax is:

               CED SYN <synonym> <command>

          The <synonym> is the command abbreviation (which you will type at
          the DOS  prompt), and  <command> is  the word or phrase which ced
          will substitute when it  sees <synonym>.   The synonym  is always
          the first  word after  the keyword "syn", and <command> is always
          all of the remaining words.

          For example, "ced syn d dir"  allows you  to type  "d" instead of
          "dir".  You  may add  parameters: "d *.exe" becomes equivalent to
          "dir *.exe".

          Many  people  define  very  short  synonyms  for  frequently used
          commands:

               CED SYN d dir
               CED SYN e edit
               CED SYN g debug
               CED SYN l link
               CED SYN rbbs talk rbbs /c63
               CED SYN cc1 cc1 -bpe

          Note in  the last  example that  you can  use a  synonym which is
          identical to its associated phrase and simply use  it to automat-
          ically add parameters.

          Also  note  that  synonym  processing  takes  place  AFTER  pcall
          processing; thus if  you  use  a  command  synonym  and  wish the
          command to be "pcallable", use the synonym in the pcall command.
          For example:






                                                                          7
                          === ced 1.0 User's Guide ===

               CED SYN e edit
               CED PCALL e    (not PCALL edit)


          User program synonyms
          ---------------------

          Because ced  "knows" whether it is being used from the DOS prompt
          or from an application program such as DEBUG,  it is  possible to
          define separate  sets of  synonyms for  DOS commands and for user
          programs.  The syntax for a "user synonym" is

               CED USERSYN <synonym> <command>

          This is identical to the SYN command except  for the  new keyword
          USERSYN.  For  example, if  you need to frequently type the DEBUG
          command "d ds:1010 1200", you might use

               CED USERSYN d1 d es:1010 1200

          (Remember that DEBUG is  a ced-compatible  program; thus  you can
          type ced  commands at  the DEBUG  prompt.)  Then you could simply
          type "d1"  to  dump  memory  from  the  specified  address.  Note
          that   a "d1"  USERSYN is  separate from  a "d1"  SYN; at the DOS
          prompt you'd get  the  SYN,  in  DEBUG  or  EDLIN  you'd  get the
          USERSYN.


          Command chaining
          ----------------

          The command  chaining feature  allows you  to place more than one
          command in a SYN or USERSYN.  These commands  would be  passed to
          DOS or  to the user program one at a time, as input is requested.
          Suppose, for example, that  in order  to run  your communications
          package, you always type:

               cd \talk
               talk cis /c63
               cd \

          You could put this sequence into one synonym by typing

               CED SYN cis cd \talk^talk cis /c63^cd \

          The ^ character serves as a command separator.  When you type CIS
          at the prompt, ced will output  everything up  to the  ^ (in this
          case, "cd  \talk") and  then simulate  an <Enter>.  The next time
          DOS requests input, it  will get  "talk cis  /c63<Enter>", and so
          on.






                                                                          8
                          === ced 1.0 User's Guide ===

          Note  that  ced  will  not  pass  DOS-chained  commands  to  user
          programs; thus, in

               CED SYN bug cd \util^debug^cd \

          DEBUG would not see  the trailing  "cd \",  which would  still be
          held up until you return to the DOS prompt.

          The first  of the chained commands (e.g., the first 'cd \' above)
          cannot itself be a synonym, but the remaining commands can.  That
          is, if 'f' and 'g' are synonyms, the command

               CED SYN h dir^f^g

          will work as you expect.  Be careful, though.  A command like

               CED SYN f dir^f

          will put the computer into a loop from which there is no retreat.

          It may be useful in some circumstances, however, to fool ced into
          allowing the first command to be a synonym by simply  inserting a
          ^ as the first character of the chain:

               CED SYN d dir
               CED SYN f ^d^cd \

          When "f" is keyed, ced will first pass a null string to DOS, then
          "dir" and "cd \".  This trick will work OK at the DOS prompt, but
          it may  cause problems  in some  user programs (it would insert a
          blank line, for example, if you were in EDLIN line-insert mode).

          Limited "nesting" of chains  is allowed.   Consider the following
          definitions:

               CED SYN 1 a^b^c
               CED SYN 2 x^1^z

          By executing  "2", the  commands issued will be x, a, b, c,and z.
          The limitation is that the  stored  commands  ready  for chaining
          must  not  exceed  512  characters  total.  In the above example,
          after you have keyed "2" and the "x"  is passed  to the operating
          system, the stored commands will be:

               1^z

          which  requires  4  characters  of  storage  (3  for  the  stored
          commands, plus one for a terminating carriage return).   The next
          time  ced  is  called,  it  will  note that "1" is a synonym; the
          first "1" command ("a")  is passed  to the  operating system, and
          the new stored commands will be:






                                                                          9
                          === ced 1.0 User's Guide ===

               b^c^z

          which requires  6 bytes  of storage.  At no time can this list of
          stored commands  exceed 512  bytes; characters  pushed beyond the
          end of this storage will be lost.

          For whatever it's worth, you can use chaining directly at the dos
          prompt:

               C> dir^cd \

          will work as you'd expect.

          You may alter the chain character (command separator) via the ced
          command

               CED CHAINCH <char>

          So, for  example, "CED  CHAINCH &"  would replace ^ with & as the
          command separator.  The chain character can,  but probably should
          not,  be  a  control  character.   If  you are typing the command
          directly into ced, you can just type the control character:

               CED CHAINCH <Ctrl-A>

          However, if you are setting the chain character via configuration
          files  (below),  it  may  not  be possible to type in the control
          character directly.  For this  reason,  you  can  also  specify a
          control  character  by  typing  the  caret  (^) and a letter key.
          Thus, if you  wanted  to  use  ^Y  as  the  chain  character, you
          would use '^' and 'Y':

               CED CHAINCH ^Y

          Certain  control  characters  should  not  be  used  as  for this
          purpose, because they are used for other functions  by DOS; among
          these  are  ^C  (cancel),  ^G  (bell),  ^H (backspace), ^I (tab),
          ^J (linefeed), ^M (carriage  return),  ^P  (printer  on),  and ^S
          (stop).

          The use  of control  characters as  described has more meaningful
          use in  setting  the  "ignore"  and  "status  request" characters
          (below).


          Command parameters
          ------------------

          This section describes how synonyms and command chaining interact
          with command line parameters.

          The simplest case is a single word synonym like





                                                                         10
                          === ced 1.0 User's Guide ===


               CED SYN d dir

          which specifies no special parameter handling.  In this case, any
          command line  parameters are  simply tacked  on after the synonym
          substitution: "d *.exe /w" becomes "dir *.exe /w".

          If the synonym itself contains parameters:

               CED SYN dw dir /w

          a similar situation holds.  For example, "dw *.asm"  becomes "dir
          /w *.asm".   You might  think of these simple nonchained synonyms
          as just substitutions: when ced sees the synonym, it  will simply
          substitute the  replacement text, leaving the rest of the command
          line alone.

          This simple substitution, however,  means that  your command line
          parameters must  always be  the last  text of the synonym.  There
          would be no way, for example,  to  define  a  synonym  that would
          obtain a  directory of  <name>.exe, where <name> is some filename
          entered on the command line and  ".exe" is  part of  the synonym.
          That is,  it would  not be  possible to define a synonym "d" such
          that the command

               d foo

          would result in a "dir foo.exe" command.

          However, ced does provide a way to substitute parameters into the
          middle of a synonym.  Ced  recognizes  the  "%n"  dummy parameter
          format used  by DOS batch files.  %1 represents the first command
          line parameter, %2 is the second, and so on, up to %9.   Refer to
          your DOS documentation (batch file section) if this is unclear.

          Thus, a synonym which would provide the example function is:

               CED SYN d dir %1.exe

          When  "d   foo"  is  executed,  "foo"  (the  first  command  line
          parameter) is substituted for  the %1,  resulting in  the desired
          command "dir foo.exe".

          When   a   synonym   contains  chained  commands,  all  parameter
          substitution is  performed  at  one  time,  before  the  chain is
          started.  Thus,

               CED SYN f a %1^b %2^c %3

          when executed "f one two three" will result in three commands:

               a one





                                                                         11
                          === ced 1.0 User's Guide ===

               b two
               c three

          If a  chain-command synonym contains no dummy parameters (no %'s)
          the command line parameters will be  appended to  the end  of the
          chain, i.e., as parameters to the last command.  So,

               CED SYN f a^b^c

          when executed "f foo" will result in the three commands:

               a
               b
               c foo

          You can  change the dummy parameter character from '%' to another
          character using the

               CED PARAMCH <char>

          command.  The rules described for CHAINCH apply here.


          Ignoring commands
          -----------------

          There may be  certain  commands  that  you  do  not  want  ced to
          process;  for  example,  you  might  not  want  the ERASE command
          stacked.  To instruct  ced  to  ignore  a  command,  use  the ced
          command

               CED IGNORE <command>

          For example:

               CED IGNORE erase

          When a  command is  set to  IGNORE, ced  will not place it in the
          command stack, check for aliases, or perform any pcall processing
          (even if you have set PCALL for that command).


          Ignoring individual commands
          ----------------------------

          You may  sometimes want  ced to  ignore processing  of a specific
          command.  For example, you  may have  "dir" defined  as a synonym
          for an  external program  which will  display a sorted directory,
          but on  occasion want  to display  a standard  DOS directory.  To
          force ced to suspend all processing of a command, precede it with
          ^N (Ctrl-N).  If the  first character  of input  is ^N,  ced will
          not stack  the command,  check for  aliases, or perform any pcall





                                                                         12
                          === ced 1.0 User's Guide ===

          processing (just as if it were IGNOREd).  The  Ctrl-N, of course,
          is not passed to DOS or to the application program.  For example:

               ^Ndir

          If you  find ^N inconvenient, you can change the ignore character
          to a different character by using the IGNORECH command:

               CED IGNORECH ^T
               CED IGNORECH !

          See the section on command chaining (above) for  more information
          on how to enter control characters in this command.


          Clearing ced objects
          --------------------

          From time  to time  it may  be useful  to clear a ced "object": a
          pcall command,  a  synonym,  or  an  ignore  command.   The CLEAR
          command allows you to do this.  The formal syntax is:

               CED CLEAR <function> [[FROM] <name>]

          This looks  more complex  than it  is.  The  <function> is one of
          SYN, USERSYN, PCALL, and  IGNORE.  Since  the [[FROM]  <name>] is
          optional, the  simplest form  of the clear command is exemplified
          by:

               CED CLEAR SYN

          which will clear all synonyms.  Similarly,

               CED CLEAR PCALL

          clears all pcall commands.

          You may clear an individual  item  by  including  its  name.  For
          example:

               CED CLEAR USERSYN foo

          clears  the  user  synonym  "foo",  leaving  all  others synonyms
          undisturbed.

          Finally, you can clear  all items  FROM a  specified item through
          the end of the list with the FROM option.  For example:

               CED CLEAR USERSYN FROM foo

          would clear  the user synonym "foo" and all synonyms listed after
          "foo".  This command is particularly useful if you  have loaded a





                                                                         13
                          === ced 1.0 User's Guide ===

          temporary set of synonyms for some special purpose.  Suppose, for
          example, that you have a set of synonyms already in  memory, then
          you load  an additional set to be used temporarily.  When you are
          done, the command

               CED CLEAR SYN FROM foo

          would delete all of the "temporary"  synonyms, assuming  that the
          first of these was "foo".

          Note  that  SYN  and  USERSYN  objects  share  storage.   Thus, a
          CLEAR SYN FROM <item> or CLEAR USERSYN FROM <item> will clear all
          synonyms (of  either type) FROM the named item.  Similarly, CLEAR
          SYN and CLEAR USERSYN are functionally identical: all synonyms of
          either type will be cleared.


          Configuration files
          -------------------

          Obviously  it  would  be  inconvenient  to have to type in all of
          these commands every time  you use  your computer.   However, you
          may put  any ced  command into  a special ced configuration file,
          and have them loaded all at once.

          The configuration file is simply an  ASCII text  file (created by
          your text  editor, EDLIN,  or word processor in nondocument mode)
          which contains a series of  ced  commands.   Just  leave  out the
          keyword "CED", but include the rest of the command:

               Rem       Remarks are OK if preceded by "REM"
               Rem
               Rem       Set chain char to '&'
               Chainch &
               Rem       Set ignore char to '!'
               Ignorech !
               Rem       Set a few synonyms
               Syn d dir
               Syn e edit
               Syn cis cd \talk & talk cis & cd \
               Usersyn dd d ds:1017 L40
               Rem       And a few pcall commands
               Pcall e
               Pcall debug
               Rem       Ignore all DEL, ERASE, and FORMAT commands
               Ignore erase
               Ignore format
               Ignore del

          To read in your file, use the CED -f command line switch:

               CED -F<filename>





                                                                         14
                          === ced 1.0 User's Guide ===


          For example,  if your  configuration file  is call CED.CFG, you'd
          use

               CED -Fc:\boot\ced.cfg

          If you load new configuration files during one  computer session,
          the PCALL,  SYN, USERSYN,  and IGNORE commands are added to those
          already stored,  without  regard  to  duplication  (see "Multiple
          definitions" below).

          Note that  if you  have several  commands that  you want to enter
          into ced (but don't have them in a file), you can use

               CED -Fcon

          (which specifies  CON: as the  configuration file  name) and then
          type a  series of  ced commands  from the keyboard.  Type ^Z when
          you are done.


          Changing default buffer sizes
          -----------------------------

          Ced maintains  six separate  internal buffers  (regions of memory
          where data is stored).  Each buffer is initially set to a default
          size.  The buffers and their default sizes are:

               1. DOS command stack (2048 bytes)
               2. Application program command stack (1024)
               3. Synonym list (2048)
               4. Pcall list (1024)
               5. Ignore command list (1024)
               6. User command list (described below) (1024)

          You may make these buffers larger or smaller by including  a list
          of  buffer  sizes  the  FIRST  time you load ced during a session
          (i.e., when  you turn  on the  computer, or  after a Ctrl-Alt-Del
          reboot).  Use a -B switch as the FIRST ced command:

               CED -Bn1,n2,n3,n4,n5,n6

          where n1 is the desired size for buffer 1 (DOS command stack), n2
          is the size for buffer 2 (App program  command stack),  etc.  You
          need not  specify all  sizes, but  if you  skip one or more sizes
          (telling ced to use the default) you must  include the separating
          commas.  Examples:

               CED -B1000,2000,3000,4000,5000,6000  (Set all sizes)
               CED -B1000,,3000  (Set sizes 1 and 3)
               CED -B,,,,,6000 (Set size 6 only)






                                                                         15
                          === ced 1.0 User's Guide ===

          You cannot  set any  individual size less than 128 bytes, and the
          total of all sizes must be not exceed 52K (53248) bytes.

          Remember that the -B command must be the  FIRST command  used the
          FIRST time  you run ced during each session.  It is not valid any
          other time.  If you wish to  set sizes  and read  a configuration
          file during autoexec, the syntax would be:

               CED -Bn1,n2,n3,n4,n5,n6 -F<filename>

          For your  general information,  here is what is stored in each of
          the buffers, and what happens when it fills:

          1. DOS Command  stack: all  non-ignored  commands  of  3  or more
          characters  entered  at  the  DOS  prompt.  The command is stored
          before alias and pcall processing.  Each  stored command requires
          one byte  more than  the length  of the  command. When the buffer
          fills, the oldest command is deleted.

          2. Application  program  command  stack: same  as  above,  except
          commands  entered  at  participating  program  prompts are stored
          here.

          3. Synonym list: the full list of  synonyms  (both  DOS  and user
          synonyms) plus  their meanings.  Each entry requires the combined
          length of the  synonym  and  its  associated  command  plus three
          bytes.   When  the  synonym  list  fills, no new synonyms will be
          accepted unless a CLEAR is performed first.

          4. Pcall command list: the list  of all  pcall commands  plus the
          most  recent  parameter  list  for each.  Each entry requires the
          combined  length  of  the  command  and  its  current  parameters
          (including leading  separators) plus two bytes.  If the buffer is
          full when a "CED PCALL" command is entered, the new pcall command
          will not  be accepted.   If the  buffer is  full when a pcallable
          command is entered, its parameters will not be remembered.

          5. Ignore command  list: the list  of all  IGNORE commands.  Each
          entry requires  the command  length plus one byte.  If the buffer
          is full when a new  "CED  IGNORE"  command  is  entered,  the new
          command will be rejected.

          6. User-installed  command  list: the  list of all user-installed
          commands.  Requires the command length plus six bytes  of storage
          for each.  New commands will be rejected if the buffer is full.


          Status display
          --------------

          You may  obtain a  partial display  of ced status any time CED is
          active (i.e., at  the  DOS  prompt  or  in  a  compatible program





                                                                         16
                          === ced 1.0 User's Guide ===

          awaiting input).  Do this by hitting ^T (Ctrl-T).  Ced will first
          display all SYNonyms  and    USERSYNonyms,  then  a  list  of all
          buffer  sizes.   For  each  buffer  ced will show the total bytes
          allocated and the number of bytes free.

          When the display is  complete,  ced  will  redisplay  any partial
          input that you typed before ^T, and you may continue data entry.

          If  ^T  is  not  convenient,  you  can  change the status request
          character by using the ced command

               CED STATCH <character>

          as in  "CED STATCH  ^A" or  "CED STATCH  %".  See  the section on
          command chaining for more information on using control characters
          in this command.


          Multiple definitions
          --------------------

          It is possible to duplicate a  definition within  one of  the ced
          lists (SYN, USERSYN, PCALL, IGNORE).  For example, you may create
          more  than  one  synonym  for  "d".   In  the  event  of multiple
          definitions, ced will always use the newest.

          Suppose,  for  example,  that  you  have "d" defined as a SYN for
          "dir".  If you subsequently issue the command "CED  SYN d debug",
          you will have two synonyms for "d".  When you enter "d", ced will
          use the latest definition: "debug".  If you  then issue  a "CLEAR
          SYN d",  ced will  again use  the latest definition and clear the
          "debug"  synonym,  at  which  point  the  "dir"  definition again
          becomes effective.

          Multiple definitions  have no  real meaning for PCALL and IGNORE,
          but they are supported nonetheless.


          User-installed commands
          -----------------------

          This section describes how  to add  new resident  commands to DOS
          using  ced.   It  is  an  advanced  topic,  and  is  intended for
          programmers only; you don't need to read this section to use ced.

          Ced provides a means to enqueue new DOS commands, that is, to add
          internal commands to DOS.  Once enqueued, ced will call a routine
          that you specify whenever the  user  types  the  new  command (at
          the DOS prompt, or in a "participating" program).

          Access  to  ced  service  is  provided  via a bogus DOS function,
          0FFH.  This function behaves as a  normal DOS  function; that is,





                                                                         17
                          === ced 1.0 User's Guide ===

          you must set up the registers as needed by the call, place a 0FFH
          in register AH, and execute an INT 21H.  The two subfunctions are
          described  below;  the  subfunction  code  is  placed in register
          AL.


          SUBFUNCTION 0: ENQUEUE

          This subfunction allows you  to  enqueue  a  new  command.  Input
          register use is as follows:

               AH = 0FFH (ced service)

               AL = 0 (ENQUEUE)

               BL = MODE
                    This is  a bit  flag which  tells ced when to call your
                    routine.  You have the option of  being called  if your
                    command is  typed at  the DOS prompt, at a user program
                    prompt, or both.  Bit 0, if set, specifies that you are
                    to  be  called  at  the  DOS  prompt;  Bit  1,  if set,
                    specifies that you are to be  called at  a user program
                    prompt.

               DS:SI = command name
                    This is  a dword pointer to your command (i.e., you are
                    to be called when the  user  types  this  string).  The
                    command   must   be   from  one  to  eight  characters,
                    terminated by  a  carriage  return.   Ced  is  not case
                    sensitive.

               ES:DI = command processor entry point
                    This is  a dword  pointer to the routine which is to be
                    executed when the new command is entered.


          SUBFUNCTION 1: DEQUEUE

          This subfunction allows you  to dequeue  a user  command; after a
          command has  been dequeued,  ced will  no longer  call you if the
          user types your command.  Input register use is:

               AH = 0FFH (ced service)

               AL = 1 (DEQUEUE)

               DS:SI = command name
                    A dword pointer  to  the  name  of  the  command  to be
                    dequeued (i.e.,  the same  DS:SI as was used to enqueue
                    the command).







                                                                         18
                          === ced 1.0 User's Guide ===

          RETURN REGISTERS

          On return from ced service (DOS function 0FFH), all registers are
          preserved except  AX.  The  carry flag, if set, indicates that an
          error occurred; AX has the error code, which will be one of:

               1:   Invalid  function.   At  present,  only  subfunctions 0
                    and 1 are supported.  Subfunction 2 is reserved.

               2:   Command not found (DEQUEUE only).

               8:   Insufficient memory (ENQUEUE only).

               13:  Invalid data. (ENQUEUE  only; bad MODE flag, or invalid
                    command length).

          NOTE: In current versions of DOS,  AH  returns  0FFH  if function
          0FFH  is  requested  and  ced  is not installed.  You may use the
          reserved subfunction (2), at  your  own  risk,  to  test  for ced
          installation.  If  AH returns  any value  other than 0FFH, ced is
          probably installed.


          COMMAND PROCESSOR

          Your command processor is entered via a far call from ced.  Entry
          registers are as follows:

               BL = MODE
                    This is  the same  bit flag  as is  used in the ENQUEUE
                    subfunction.  You may use it to test "where you are".

               CL = MAXLEN
                    This is the maximum  allowed length  of the  user input
                    string (i.e.,  the value  of byte 0 of the DOS function
                    0AH input buffer) less one.

               DS:DX = Command tail pointer
                    This is a dword pointer  to  the  command  tail  of the
                    user's input.   For example, if your command is "hello"
                    and the user types "hello sam", DS:DX will point to the
                    space after "hello".

               DS:DI = Command pointer
                    This is a dword pointer to the first byte of the actual
                    user input.

          Note that DS:DI and DS:DX point to buffer  space within  ced, not
          to  the  actual  DOS  function  0AH  input  buffer.  There are no
          length attribute bytes preceding the buffer; DS:SI points  to the
          first byte of the buffer, not the third.  Ced will copy the final
          buffer, after all processing, to the actual input buffer.





                                                                         19
                          === ced 1.0 User's Guide ===


          You may manipulate the buffer to your heart's content.  It is 255
          characters long,  but ced  will truncate  the string if necessary
          (if the final command is longer than the  maximum allowed  by the
          function 0AH  request).  In particular, note two things about the
          ced buffer:

               1.   The string MUST  be  terminated  by  a  carriage return
                    ASCII 13).

               2.   If  you  null  out  the  buffer  (by putting a carriage
                    return in relative  byte  0)  ced  will  return  a null
                    string to  DOS or  the user  program.  This is probably
                    what you will want to do.

          There are few restrictions on what you can do within your service
          routine.  You  may request  other DOS  service (EXCEPTION: do not
          request more buffered input via function 0AH!!), and you need not
          preserve  any  registers  except  SS:SP.   The stack in effect on
          entry will have about 200 bytes free; switch to a larger internal
          stack if necessary.

          Return to ced via a far RET.

          Appendix E  contains a  sample MASM  program to enqueue a trivial
          command.


          Problem reporting
          -----------------

          If you find any problems with  ced,  please  report  them  to me,
          preferably  at   CompuServe  ID   76703,2002.   Before  reporting
          problems, however, please take the following steps:

               1. Reread the documentation!

               2. Install ced in a  "clean" environment,  i.e., without any
               other   resident   utilities.    Temporarily   rename   your
               AUTOEXEC.BAT and CONFIG.SYS files  to  other  names; reboot,
               reinstall ced,  and test.  If it works correctly, there is a
               conflict with some other  program.  Isolate  the conflict by
               reinstalling your  other programs  one by one and by varying
               the load  order.  If  you locate  the conflict,  let me know
               about  it.   I  cannot  guarantee  that the conflict will be
               resolved, but I will make an attempt when time permits.

               It would not be  necessary to  rename CONFIG.SYS  if it only
               contains   FILE,   BUFFER,   COUNTRY,   FCBS,  and  ANSI.SYS
               statements.






                                                                         20
                          === ced 1.0 User's Guide ===

          If the problem persists, please report the problem  as accurately
          and  completely  as  possible.   Include  the  ced version number
          (obtained  by  the  command  CED  VER),  and  a  listing  of your
          CONFIG.SYS and  AUTOEXEC.BAT files  if you  think that might have
          some bearing.


          Copyright and Disclaimer
          ------------------------

          This version of ced is hereby placed in the public  domain.  Both
          ced  and  this  documentation  are,  however,  copyrighted by the
          author.  Ced is  intended  for  your  private,  noncommercial use
          only.  You  may make  copies of the ced program and documentation
          files for your own use, and  you may  copy the  files for others.
          You may not, however, charge for such copies, or in any other way
          sell the program or otherwise attempt  to make  money from  it or
          any modified version of it.  Please.

          An  exception  to  the  above  is, however, granted to recognized
          user's groups, which are  hereby  authorized  to  charge  a small
          amount  (not  to  exceed  $6.00)  for  media,  postage, handling,
          and whatnot.

          I do not warrant that the documentation is accurate, or  that the
          program  operates  as  designed.   I  will  not be liable for any
          damages of any kind sustained through the use of the program.  By
          using the program, you agree to this.

          Your comments,  suggestions, and friendly criticisms are welcome.
          The best way to contact  me  is  via  CompuServe,  either through
          Easyplex  or  (best)  at  the IBM Novice Forum (PCS-129, SGIBMN).
          West Coast people, please don't call me at ridiculous hours.

          IBM is a registered trademark of  International Business Machines
          Corporation.

          MS-DOS is a trademark of Microsoft Corporation.

                           Both ced and this document are:

                                Copyright (c) 1985 by
                               Christopher J. Dunford
                              10057-2 Windstream Drive
                              Columbia, Maryland 21044
                              CompuServe ID 76703,2002


          Date: May 29, 1985
          Program version:  1.0A
          Document version: 1.0A





                                                                         21
                          === ced 1.0 User's Guide ===

                             Appendix A: Command summary
                             ---------------------------
          The following  is a  complete summary of all ced commands.  These
          commands may be included  in a  ced configuration  file (with the
          exception of  -F and  -B), or  they may  be typed  in directly by
          prefixing them with "CED ".

          -Bn1,n2,n3,n4,n5,n6      Sets  the  sizes  of  the  six  internal
                                   buffers.   Valid  ONLY  as first command
                                   when  installing  ced   after   boot  or
                                   reboot.

          -F<Filename>             Loads a  ced configuration  file.  Not a
                                   valid command within a config file.

          SYN <synonym> <command>  Defines a synonym.   The  first  word is
                                   the  synonym,  all  remaining  words are
                                   substituted for the synonym.

          USERSYN <synonym> <command>   Defines a  user synonym.  Identical
                                   to  SYN,  except  that  the  synonym  is
                                   available  within  user  programs rather
                                   than at the DOS prompt.

          PCALL <command>          Defines  a   command  subject  to  pcall
                                   processing.

          IGNORE <command>         Defines  a  command  to  be ignored--ced
                                   will not  perform any processing on this
                                   command at all.

          CHAINCH <char>           Defines the  command chaining character,
                                   which is  the character used to separate
                                   commands  in  a  multi-command  synonym.
                                   Normally '^'.

          IGNORECH <char>          Defines  the  keyboard-ignore character;
                                   when  this  character  is  typed  as the
                                   first  character  of keyboard input, ced
                                   will perform  no  further  processing on
                                   it.  Normally ^N.

          STATCH <char>            Defines  the  status  request character.
                                   When you  type this  character while ced
                                   is active,  ced will display its status.
                                   Normally ^T.

          PARAMCH <char>           Defines the  dummy  parameter character.
                                   Normally '%'.






                                                                         22
                          === ced 1.0 User's Guide ===

          CLEAR <function> [[FROM] <name>]   Clears all or part of a
                                   list of  ced objects.  <function> is one
                                   of  SYN,  USERSYN,  PCALL,   or  IGNORE.
                                   Without  arguments,  clears  all  of the
                                   specified list.  With  a  <name>, clears
                                   that  item  only.   With  a FROM <name>,
                                   clears  that  item  and  all  subsequent
                                   items.

          VER                      Display ced version number and copyright
                                   notice.


          Commands may be abbreviated as follows:

               USERSYN        USYN
               PCALL          PC
               IGNORE         IG
               CHAINCH        CC
               IGNORECH       IC
               STATCH         SC
               PARAMCH        PM   (NOT PC!)
               CLEAR          CL

          Note,  however,  that  the   arguments  to   CLEAR  may   NOT  be
          abbreviated; CLEAR USYN or CLEAR IG are not valid.







                                                                         23
                          === ced 1.0 User's Guide ===

                           Appendix B: Order of Processing
                           -------------------------------

          Ced performs its basic processing in the following order:

          1. Obtain input.   If there  is a chained command pending, obtain
          input from the chain; otherwise from keyboard.

          2. Check for "ignore".  If command is  an "ignore"  command or if
          the first  character of  input is  the ignore character, skip all
          further processing.

          3. Stack the command  (if  longer  than  two  characters)  in the
          appropriate command stack.

          4. Perform  pcall  (parameter  recall)  processing  and store the
          result  for  pcall  processing  next  time  the  same  command is
          entered.

          5. Perform synonym processing and parameter substitution.

          6. Check for CED command.  If input is a CED command, process and
          clear the input (returning null string to caller).  Skip rest.

          7. Check for command chaining.   If the  chain character appears,
          stack all  subsequent commands for later processing and pass back
          the first command only.

          8. Examine the resulting command and see if it's a user-installed
          command.  If so, call user command processor.






                                                                         24
                          === ced 1.0 User's Guide ===

                               Appendix C: Limitations
                               -----------------------

          There is  a limit  of 255 characters on any input line from a ced
          configuration file.  DOS will limit you to 127  characters at the
          DOS prompt.

          For  PCALL,  SYN,  USERSYN,  and  IGNORE  to  be effective, their
          commands must begin in the first  column  of  input  and  must be
          separated from any parameters by one of the following characters:

               ; , < > | = + [ ] / <Tab> <Space>

          Thus, if  you have  "cd" defined for pcall processing, "cd\" will
          not work correctly.  However, "cd \"  will be  OK.  Similarly, if
          you have  a synonym "d" for "debug", the command "c:\util\d" will
          not work, nor will " d" (note leading space).

          Remember that ced is active only at the DOS prompt or when a user
          program requests  input via  DOS function  0AH.  This has several
          effects:

               Programs which allow you  to execute  DOS commands  or other
               programs as  subtasks generally  do not use DOS function 0AH
               to input the name of the  subtask or  command; thus,  ced is
               not active, and synonyms are usually not effective.

               Ced  cannot  operate  on  statements  in batch files.  Thus,
               synonyms and user-installed commands will not  be recognized
               if they  are batch  statements, and  ced commands will cause
               ced to be reloaded (which is probably not what you want).






                                                                         25
                          === ced 1.0 User's Guide ===

                                Appendix D: Versions
                                --------------------

          1.0A      PARAMCH added.  Fixed problem which caused
          06/01/85  unpredictable results if DOS  function 0AH  called with
                    8088  direction  flag  set.  Status display cleaned up.
                    Processing order altered to allow synonyms  for CED SYN
                    to process  correctly.  Early  ROM BIOS bug relating to
                    cursor  size  trapped. Config  file  processing speeded
                    up. Problem  parsing  sixth  buffer  size in -B command
                    fixed.  Nesting chaining  allowed,  as  well  as direct
                    entry  of  chained  commands at the DOS/program prompt.
                    Some  minor  incompatibilities   with   other  resident
                    programs eliminated.






                                                                         26
                          === ced 1.0 User's Guide ===

                            Appendix E: User Command Demo
                            -----------------------------

          Comment *

               userdemo.com - demo of ced user command enqueuing

               Assembly: (M)ASM userdemo;
                         LINK userdemo;   (ignore NO STACK message)
                         EXE2BIN userdemo userdemo.com

               Use:      Just type 'userdemo'.  You now have
                         a new DOS command, "hello"

               Author:   CJDunford
                         05/28/85

          *

          CED       equ 0FFH            ; Special "DOS" fn for CED service

          ENQUEUE   equ 0               ; Subfunction: enqueue
          DEQUEUE   equ 1               ; Subfunction: dequeue

          DOS       equ 1               ; Cmd to be active at DOS prompt
          USER      equ 2               ; Cmd to be active at user prompt

          CR        equ 13
          LF        equ 10

          code segment
          assume cs:code,ds:code
          org 100H
          main proc far
               jmp Install              ; Go to installation

          ; -----------------------------------------------------
          ; This is the command processor.  It will be called
          ; whenever the user types "hello" at the DOS prompt.
          ; The routine simply prints the string "Hi there, ace".
          ;
          ; On entry:
          ;    BL: mode flag
          ;       1 = at DOS prompt
          ;       2 = at user program prompt
          ;    CL: max length of input
          ;    DS:SI => user command
          ;    DS:DX => user command tail
          ;
          ; Remember to null out the user string so that
          ; it is not passed on to DOS, then exit via a far
          ; return to ced.  Not necessary to preserve any





                                                                         27
                          === ced 1.0 User's Guide ===

          ; registers.
          ; ------------------------------------------------------
          Hello proc far                ; Must be a far procedure
               mov byte ptr [si],CR     ; Null out the user's input

               mov ax,cs                ; Set up local addressing
               mov ds,ax

               mov dx,offset HiThere$   ; Display our message
               mov ah,9
               int 21H

               ret                      ; No need to restore any regs
          Hello endp

          HiThere$ db 'Hi there, ace',CR,LF,'$'   ; Message to be displayed


          ; -----------------------------------------------
          ; This is the installation routine.  It sets up
          ; the regs for a call to the ced command enqueuing
          ; service, enqueues the command, and terminates,
          ; leaving the command service routine resident
          ; ------------------------------------------------
          Install:
               mov ah,CED               ; CED service request
               mov al,ENQUEUE           ; Enqueue a new command
               mov bl,DOS               ; To be active at DOS prompt
               mov si,offset Hello$     ; DS:SI => command ("Hello")
               mov di,offset Hello      ; ES:DI => service routine
               int 21H                  ; Enqueue new command
               jnc OK                   ; No carry, no error

               mov dx,offset Error$     ; Only 1 error possible here
               mov ah,9                 ; Print string
               int 21H
               int 20H                  ; Return to DOS

          OK:
               mov dx,offset Install    ; OK: terminate/resident
               int 27H
          main endp

          Hello$    db 'hello',CR        ; New command
          Error$    db 'ced user command list full',CR,LF,'$'

          code ends
          end main


```
{% endraw %}

## FILES535.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No. 535  COMPUTER USER'S HANDBAG #2                            V1 DS2
-----------------------------------------------------------------------------
This disk contains the DOS users magic bag of tools.  Special command editors,
disk catalogers, special deletes, graphics and a utility for indexing
manuscripts or books.
 
CED1_0B  COM  DOS Multiple Command line editor - create new DOS commands
CED1_0B  DOC  Documentation for CED1_0B.COM.
COPYQ    EXE  Wildcard selective y/n copy, such as used in VDEL.
PCDISK   COM  Disk cataloging program.
QWIKLABL EXE  Computer-assisted typing of gummed labels
QWIKLABL KEY  Key assignments file for QWIKLABL
LOAD     COM  Loads COM file larger than 64KB.
LOAD     ASM  ASSEMBLY Source for LOAD.COM
PUSH     COM  Save CRT image to a file.
POP      COM  Restore CRT image from a file.
PUSH-POP DOC  Documentation for PUSH & POP.COM.
SUPEREN  COM  Renames files, subdirectories, volume labels.
SUPEREN  ASM  ASSEMBLY Source for SUPEREN.COM
TRIVIA   C    A chuckle for C programmers.
FLIP     COM  Flips between page 0 & 1 of graphics text screens.
FLIP     ASM  ASSEMBLY Source for FLIP.COM.
SHOW     COM  Like TYPE with MORE built in.
INDEXER  EXE  Computer-aid for book indexing
INDEXER  PAS  Microsoft PASCAL Source Code of INDEXER
INDEXER  DOC  Documentation for use of INDEXER
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## FLIP.ASM

{% raw %}
```
; FLIP.COM  by K. S. Hunziker
; See PC Mag V4 No.4 p256
; Switches between page 0 and page 1 of the color/graphics display
; in text mode.  Note that some "end run" programs always write to
; page 0 rather than the active page.
code_seg    segment
            assume cs:code_seg
            org 100h
begin:      mov ah,15      ; read video state (call to BIOS)
            int 10h
            and bh,1       ; make sure we deal only with 0 or 1
            xor bh,1       ; switch to other page
            mov bl,bh      ; save new page number
            mov al,bh      ; set new active page (call to BIOS)
            mov ah,5
            int 10h
            mov dh,22      ; set cursor to row 22
            mov dl,0       ;   and column 0
            mov ah,2       ; set cursor position (call to BIOS)
            int 10h
            mov ch,6       ; assume page 0, begin cursor at 6
            mov cl,7       ; end cursor at line 7
            or  bh,bh      ; check new page number
            jz  is_zero    ; if new page is 0, we guessed right
            mov ch,0       ; cursor begins at line 0
is_zero:    mov ah,1       ; set cursor type (call to BIOS)
            int 10h
            mov ch,23      ; set upper left of window to row 23
            mov cl,0       ;   and column 0
            mov dh,24      ; set lower right of window to row 24
            mov dl,79      ;   and column 79
            mov al,0       ; blank the window
            mov bh,7       ; use white on black
            mov ah,6       ; perform window scroll (call to BIOS)
            int 10h
            mov al,bl      ; supply new page number as return code
            mov ah,4ch     ; exit to DOS
            int 21h
code_seg    ends
            end  begin
```
{% endraw %}

## INDEXER.DOC

{% raw %}
```
		      The INDEXER Program

Version of 5/28/85 for MSDOS 2 and Microsoft Pascal 3

------- Introduction: The Indexing Problem

An index is a table that lists the important topics of a book in
alphabetical order, showing for each the numbers of the pages on
which that topic is mentioned.	An index is an indispensable
part of any non-fiction book.  Even a poor index can give better
access to a book than a table of contents can, while a good
index increases the utility of a book many times.

Indexing a book is a skilled job.  The indexer must understand
the subject of the book well so as to know what the important
topics are.  The indexer must read the book and comprehend it
so as to know when a reference to a topic is important enough
to merit an index entry.  The indexer must understand the
intended use, and users, of the book well so as to know the
terms that they will expect to find in the index.

------- Crude Automation

An index of sorts can be built automatically by sorting the
words of a document file, eliminating duplicates, and appending
the page numbers on which the words appeared.  The indexes of
some software manuals appear to have been made by such a process,
and they demonstrate the failings of the method.  It only
indexes WORDS, it does not index TOPICS, so it works only to the
extent that the topics of the book are fully expressed in single
words and to the extent that the words were used consistently.
It is completely unselective, showing every reference no matter
how trivial.  There can be no provision for sub-entries under a
major topic, nor for multiple entries for a topic under
different terms.

------- Better Automation

A good index can be built automatically by some word processing
programs.  The writer embeds indexing commands within the text
of a document.	When the program formats the document for
printing, it writes each embedded index term to a disk file with
the page number on which it appeared.  This method can work
well since the entries are topical terms chosen by the writer,
who embeds them only at the relevant points.  I have developed
and used such a system for documents formatted by Magic Wand.

------- Indexes By Hand, and INDEXER

All automatic methods fail when the book is to be typeset.  They
rely on page numbers as they exist in the word-processed form
of the work.  The page numbers of the typeset work will be
different, so the machine-made index will have to be heavily
edited or completely remade.

And of course, the automatic methods can't work when the book to
be indexed is not available in machine-readable form -- when we
want to make an index of an unindexed work after the fact, for
one example.

Thus we still must make indexes by hand.  In the traditional
method, the indexer sets up a file of 4x5 (index!) cards, one
for each topic to be indexed.  Then he/she reads the book and,
wherever a topic appears, writes the page number on its card.
The sorted cards provide the material for typing the index.

The INDEXER program is a machine aid for a human indexer.  It
does the job of the pile of index cards, and it makes the
finished index automatically, as a disk file that can be edited
or printed.

-------- Using INDEXER:

(1) starting up

When you start it as a DOS command -- A>indexer (return) -- the
program looks first for a file containing a saved index in
internal form.	If there is such a file (one named INDEXER.TRE
in the default directory), the program loads it, and work can
continue from where you left off before.

(2) entering a term

Once initialized, INDEXER prompts for a "term."  You may type an
index term of up to 64 characters.  Spaces, commas, and indeed
any printable characters are allowed.  You may use the backspace
key to correct typing errors.  You signal the end of the term
with the Return key.

(3) entering a page number

INDEXER stores the term and prompts for a "page."  Enter the
page number of a reference to the term just entered, as an
integer from 1 to 32766.  YOU MUST ENTER AN INTEGER; if you
type letters or other punctuation, the program will terminate
with a Microsoft Pascal run-time error message (sorry!).

You may, however, enter a negative integer, -5 for instance.
Since there is no way to delete terms once they have been entered,
I use a page number of -999 as a way of marking a term to be
deleted from the finished index, and any other minus number as
a way of cancelling an incorrect page number -- if I entered
a previous page 17 when I meant 170, for instance, I would at
once make a new entry for that term of -17.

(3) ending a session

You may go on entering terms and pages as long as you like.
When you want to stop work, enter a term of length zero; that
is, just press Return at the "term" prompt.  INDEXER writes the
index to disk in two forms.  It writes its collection of terms
and pages in internal form as INDEXER.TRE, so that it will be
able to reload them and pick up work where it left off.  It also
writes a finished index file as INDEXER.OUT.  This file can be
edited with any word processor for final printing.

Before you read further, why not try it out: start up the
program, enter a few imaginary terms and page numbers, and
end the program.  Then look at INDEXER.OUT with either the TYPE
command or your favorite editor to see what you've made.

(4) using directories

The file INDEXER.TRE in the current directory represents one
index in progress.  However you may have several indexes in
progress at once.  If so, you may keep each index in a different
subdirectory.  Make sure that the DOS "path" includes the
directory where INDEXER.EXE resides.  Move to the directory for
a particular book and start INDEXER; it will find the INDEXER.TRE
for that book.

(5) using batch files

Alternatively, you may prepare a batch file like the following:

	delete %1.out
	delete %1.trx
	rename %1.tre %1.trx
	copy %1.tre indexer.tre
	indexer
	copy indexer.tre %1.tre
	rename indexer.out %1.out

Call it INDEX.BAT, and invoke it as A>INDEX bookname -- where
"bookname" is the name of one of the indexes you are working on.
It keeps the editable form of index as bookname.OUT and the
restart information as bookname.TRE, whatever "booknames" you
elect to use.

------- Using Sub-terms

INDEXER allows any term to have sub-terms and sub-sub-terms to a
depth of nine.	Subterms are very useful in indexes; they allow
you to group subtopics under a main topic entry.  Some readers
will look for a topic under its general term; others will look
for it under a very specific term.  For example, a good index
for the Pascal manual might index the CASE statement two or
even three ways:
	   ...
      CASE statement 27-29, 336
	 OTHERWISE 28, 336
	 speed of vs. IF 43
	  ...
      ELSE keyword 23
	 not used in CASE 28
	  ...
      OTHERWISE clause of CASE 28
         ...
      statement types
	 assignment 25
	 BEGIN 32
	 CASE 27
	  ...

To INDEXER, each group of subterms is a little index of its own.
Its terms are stored and sorted, and their page numbers are
collected, just as is done for the main terms.	When it prepares
the output file, INDEXER indents once for each sub-term level.

To enter a subterm, you first enter its main term.  But instead
of ending the main term by pressing Return, you end it by
pressing CONTROL-RETURN.  You are prompted for a " . .term,"
indenting a level on the screen.  Enter the subterm just as you
would a main term.  End it, too, with CONTROL-RETURN if you want
to enter a sub-sub-term.  When you eventually end a term with
Return, you will be prompted for a page number as usual.  That
page number will be associated with the subterm, not with its
superior term(s).

------- "Term Recall" feature

Typing all these terms is tedious, but INDEXER has a feature
which can save a lot of the labor.  The feature is called Term
Recall, and it serves two purposes.

You recall a term by typing some of its initial letters, then
pressing the Escape key.  INDEXER searches its list of terms for
the alphabetically-lowest one that matches the initial letters
you have typed to that point.  It then completes the term on the
screen by typing the remaining letters of that term.  If that is
the term you wanted to recall, you may then press Return (or
CONTROL-Return) just as if you had typed the whole term yourself.
You can modify a recalled term by backspacing and typing over
it -- but when you do, you've "accepted" the recalled term;
Term Recall starts fresh when you next press Escape.

If the term is not the one you want, just press Escape again.
INDEXER will wipe out the letters it supplied, find the next
term in alphabetic order, and show its final letters.  If you
keep pressing Escape, you will be shown all the terms that match
the initial letters you typed.	When there are no more, INDEXER
beeps the console alarm.

If you decide that you don't want any of the recalled terms,
press CONTROL-BACKSPACE.  The line will be restored to just the
characters you had typed initially.

Term Recall can save a lot of typing.  It also provides a way to
review the terms you have defined so far.  Press Escape without
typing any initial letters at all; INDEXER will complete your
non-existent entry by showing you the first of all the terms it
has, and will step through all the terms as you press Escape.

Term Recall also works at the level of a sub-term, where it will
show you some or all of the subterms at that level.

------- How To Index With INDEXER

Start by marking up a copy of the book.  Read through it
carefully with pencil and highlighting pen in hand.  Mark
every term to be indexed, and note in the margins where a topic
should be entered under more than one term.

Then, book in lap, start up INDEXER, either as a DOS command or
by way of the batch file described earlier.  Begin entering
terms and pages in the order they occur in the book. When you
have finished the book, or when you want to stop, just hit
Return at the "term" prompt.  INDEXER will write its files
(and the batch file will rename them).

If you are not finished, come back to the index later with the
same command to pick up where you left off.  When the index
is finished, edit the .OUT file with your favorite word
processor.  Delete any terms you entered with -999 pages,
clean up any erroneous page numbers that you entered as
negative numbers, and insert whatever formatting controls
are required.

------- INDEXER's Limitations

In function, INDEXER does not provide
     - any way to delete or edit a term once entered
     - any way to delete a page number once entered
     - any provision for "see also" or just "see" entries
     - any provision for roman or alphabetic page numbers
     - any provision for hyphenated page numbers

The scheme for term storage, a binary tree, assumes that terms
will be entered in approximately random order.	It may fail if
terms are entered in alphabetic order!

INDEXER does not check for adequate RAM storage; if too many
terms are entered, it will eventually crash with a Pascal
run-time error message.  It should be able to handle well over
500 terms with an average of two page numbers each, however.

Programmer Details

INDEXER stores terms as character strings.  I chose to do my own
strings rather than using the Pascal string type, so that the
program could be ported to other compilers.  Since most terms
are shorter than the 64 bytes allowed, keeping every term as an
independent string would waste storage.  Except when they are
being entered or written, terms are stored compactly in blocks
of 2048 bytes, and referenced by a block number and an offset
index.	I've allowed for up to 16 blocks (32Kb).

Terms are stored in a binary tree, and subterms under a term are
stored in a tree dangling from the superior term's node.  Page
references are stored in an ordered chain anchored in the term's
node.  In some cases, the trees are processed with recursive
algorithms, as traditional (see J and W program 11.5).	But more
often, recursion was inconvenient and would have eaten up too
much stack space.  Where a tree is to be "walked" in lexical
(in-) order, it is done by setting up a tree-walk record which
is processed by a "treestep" function.	That figures out the
next node and returns a pointer to it, saving the state of the
walk in the tree-walk record.  I played a lot of games with the
trees, some of which are (I think) quite clever.  The Term
Recall feature is based on tree-walking, and it turned out to be
a really slick user interface.

An index has to be in true alphabetical, not ASCII, order.  The
only way to make "Apple" come after "anteater" is to do all
comparisons in upper case.  To keep the speed up, I stored every
term two ways: as entered, and in all-caps.  The all-caps form
is used for all comparisons; the as-entered form is used for all
output.  This has the side effect that the terms "Apple" and
"apple" are identical, and only the first one entered will
appear in the output.  If storage was critical, it would be
possible to store only the original form of a term, and convert
it to all-caps prior to any comparison.

At 800+ lines, INDEXER is one big program.  I wouldn't be at all
surprised if it still contained a bug or two, so be alert.
The Z80 version compiled by Pascal/Z rarely in ill-defined
circumstances crashes the system -- this is probably a bug in
the Pascal/Z runtime library.  The Z80 version compiled by
Borland's Turbo-Pascal is not known to have the same problem,
but it hasn't been used much at this writing.  And this version
compiled with Microsoft Pascal hasn't been tested at all.


```
{% endraw %}

## LOAD.ASM

{% raw %}
```
        name     load
        page     55,128
        title   'LOAD -- load .COM file for MS-DOS 2.0'
;
;
; LOAD -- load .COM file bigger than 64K
; Requires MS-DOS 2.0
; Version 1.1   Dec 83 RGD
; Version 1     March 1983 RJW

; copyright (c) 1983
; Laboratory Microsystems
; 4147 Beethoven Street
; Los Angeles, CA  90066
;
cr      equ     0dh     ;ASCII carriage return
lf      equ     0ah     ;ASCII line feed

cseg    segment byte

        org     100h

        assume  cs:cseg,ds:cseg

load    proc    far             ; sets up far return ...

        push    es              ; save segment of PSP
        mov     dx,offset mes2  ; startup message
        mov     ah,9
        int     21h
        xor     dx,dx           ; zero DX
        mov     ah,25h          ; set terminate address ...
        mov     al,22h          ; ... for new program segment
        int     21h

        mov     dx,offset endofs ; offset to end of this loader
        mov     cl,4            ; no of bits to shift
        shr     dx,cl           ; convert byte addr to paragraph
        inc     dx              ; offset of 1st available segment
        mov     ax,cs           ; current segment to AX
        add     dx,ax           ; actual value of 1st available segment
        mov     useg,dx         ; save it for later ...
        mov     es,dx           ; ... and for subsequent move
        mov     ah,26h          ; call to DOS
        int     21h             ; create new program segment

        mov     si,6ch          ; 2nd param FCB in current segment
        mov     di,5ch          ; 1st param FCB in new segment
        mov     cx,0ch          ; byte count for move
        repz movsb              ; copy the filename

        mov     ax,cs           ; copy current code seg ...
        mov     ds,ax           ; ... to DS
        mov     dx,5ch          ; DS:DX points to FCB of .COM file
        mov     bx,dx           ; make FCB addressible
        mov     byte ptr  9 [bx],'C' ; force COM extension
        mov     byte ptr 10 [bx],'O'
        mov     byte ptr 11 [bx],'M'
        mov     ah,0fh          ; open the .COM file
        int     21h
        or      al,al           ; test return code
        jnz     load8           ; exit if non-zero
        mov     word ptr 33 [bx],0000 ; zero the random
        mov     word ptr 35 [bx],0000 ; record field in the FCB
        pop     es              ; get loader's PSP segment
        mov     bx,useg         ; let SS:SP = default buffer of
        mov     ss,bx           ; new PSP
        mov     sp,100h
        push    es              ; save loader's PSP again
        add     bx,10h          ; BX = segment of current DTA
        mov     ds,bx           ; set up DS:DX to point to the DTA
        xor     dx,dx
        mov     ah,1ah          ; set up DOS call and do it
        int     21h

load5:  mov     cx,100h         ; number of records of length 80h
        mov     ax,cs           ; copy current CS to DS
        mov     ds,ax
        mov     dx,5ch          ; DS:DH points to FCB of .COM file
        mov     ah,27h          ; do random block read
        int     21h
        test    al,1            ; end of file?
        jnz     load9           ; yes, so exit
        add     bx,800h         ; increment location of DTA
        mov     ds,bx           ; copy to DS
        xor     dx,dx           ; DS:DX now points to next DTA
        mov     ah,1ah          ; set up DOS call to set DTA
        int     21h
        jmp     load5           ; do it again

load8:  mov     dx,offset mes1  ; "file not found"
        mov     ah,9            ; write to terminal
        int     21h
        int     20h             ; exit to DOS

load9:  mov     ax,useg         ; set up registers for new segment
        mov     ds,ax
        pop     es              ; pass loader's PSP segment to overlay
        push    ax              ; push new CS onto stack
        mov     ax,100h
        push    ax              ; push offset onto stack
        ret                     ; FAR return causes CS:IP to be set
load    endp

mes1    db      cr,lf,
        db      '.COM file not found'
        db      cr,lf,'$'
mes2    db      cr,lf
        db      'Multi-Segment Loader version 1.1 for MS-DOS 2.0'
        db      cr,lf
        db      'Copyright (c) 1983 Laboratory Microsystems Inc.'
        db      cr,lf,'$'

useg    dw      0

endofs  equ     $

cseg    ends                    ; end of code segment

        end     load
```
{% endraw %}

## NOTES535.TXT

{% raw %}
```
 
Program name:         Computer User's Handbag #2  (#535)
 
Author Name:          Several
 
Program Description:
 
 1. PUSH-POP    This program allows you to take a snapshot of the image on the
                screen and store it in a text file. It is possible to later work
                with this file.
 
                Author: Larry Lockwood
                        Orange County PC Users Group
 
 2. CEDI_03B    This is a sophisticated Text Editor with complete line editing,
                user defined buffers and chaining of commands. It needs 16Kb
                memory and DOS 2.0 or above to run.
 
                Author: Chris Dunford
                        10057-2 Windstream Drive, Columbia, Maryland 21044
 
3. INDEXER      This program overcomes the problem with many automatic
                computerized indexers of book. It can help to even index a book
                in the manuscript stage where the page numbers have not been
                assigned. The program literally records on an Index card the
                occurences as entered by the human book reviewer. Later it
                arranges them in sequence. It is written in Turbo Pascal.
 
 4. COPYQ       This is suitable for wildcard and selective file copying.
 
 5. SUPEREN     A program to help rename files and sub-directories.
 
 6. SHOW        A command similar to TYPE but with MORE built into it.
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## PUSH-POP.DOC

{% raw %}
```
..PUSH-POP.DOC   by  Larry Lockwood, Orange County IBM PC Users Group

	Push.com is designed to take "snapshots" of CRT displays and 
store them in a file.  POP.COM restores the screen image and allows
you to modify almost everything.

	PUSH.COM, once loaded, remains resident in memory.  When it
has been loaded, the CRT display can be copied to a screen-image file
by concurrently depressing the Shift-PrtSc keys.  You can no longer 
use Shift-PrtSc to copy the CRT display to the printer until you 
reboot the computer.

	The syntax for loading PUSH.COM is:

         PUSH drive:filename (do not use a file extension)

	For example, suppose PUSH.COM is on the diskette in drive A
and you wish to create a series of screen-image files named SNAPSHOT
on a diskette in drive B.  The installation entry would be:
            
		PUSH b:snapshot

	When you first press the Shift-PrtSc keys, PUSH will create a
screen-image file named SNAPSHOT.001 on the diskette in drive B.  The
second time the Shift-PrtSc keys are pressed, another screen-image file,
SNAPSHOT.002, will be created, and so on.

	When you save a text screen, the corresponding screen-image file
size is 4100 bytes.  A graphics screen will create a corresponding 16,300
byte screen-image file.  You can copy approximately 88 text images or
22 graphics images to a 360KB diskette.  Once you create a series of
screen-image files, use the DOS RENAME command to give your files more 
meaningful names.  

	POP.COM restores a screen-image file to the display.  The syntax,
using the example above, would be:

		POP B:SNAPSHOT.001

	When I first tried POP.COM, I found that it always restored 
graphics images on a black background with the palette ) foreground
colors (cyan, white, and magenta).  After digging through the Technical
Reference Manual, I concluded that these are the default IBM PC color
settings and there was no way that I could rewrite PUSH.COM to capture
the Color Select Register setting (it's a write-only register).  My
only choice was to modify POP.COM to provide a means of restoring the
original colors via function keys.  While I was at it, it occurred to
me that the function keys could also be used to change the attributes
of individual characters in text files.

	One thing led to another and what finally evolved was a POP.COM
program that restores the original screen image and allows you to modify
almost everything.  The function keys do the following:

	F1-Changes background colors of graphics images
            and border colors of text images.
	F2-toggles graphics foreground colors back and 
	   forth between palettes 0 and 1.
	F3-Selects background colors for individual
	   characters in text mode.
	F4-Selects foreground colors for individual
	   characters in text mode.
	F5-Exercises your left forefinger.
	F6-Controls individual character blinking.
	
	Shift-F7-Reloads the original screen-image
	   file again. (Use this if you've made 
	   modifications that you don't like and
	   decide it would be quicker to just start
	   all over again.)
	Shift-F8-Saves modified image back to the
	   disk with the original filename. (Careful-
	   this destroys the original image.)
	Esc-Exits and returns to DOS without saving
           modified screen.

 	Other keys-The cursor keys are functional in 
	   text and graphics modes, as are the alpha-
           numeric keys.  In graphics mode, however,
	   the cursor is implemented as a one-pixel
	   dot that moves around the screen.  It starts
	   in the upper left-hand corner of the screen,
	   but you won't see it until one of the cursor
	   keys is depressed.  The Home key moves the
	   cursor up-left and the End key moves it
	   down-left.  The Ctrl key, when used in con-
	   junction with the alpha-numeric keys, produces
	   the IBM PC symbols associated with the various
	   control codes.  If you have the IBM Technical
	   Reference Manual, the symbols are shown on page
	   C-1.  If not, just experiment.

	These programs were witten specifically for an IBM
PC with a Color/Graphic Monitor Adapter.  Any compatibility
with other PC's or adapters is strictly coincidental.  These
programs will not work with a Monochrome Dispay Adapter,
because both PUSH and POP read from, and write to,the
color display memory at B800H.  Also, the IBM Monochrome
Dispay Adapter has no graphics capabilities.

	Perhaps the simplest way to provide continuous,
sequential viewing of screen-images files is to create 
BATch files with the filenames separated by PAUSE commands.

Note:  This file appeared in the August 1985 issue of
EXCHANGE, published by & copy write by International
Business Machines.  Exchange is distributed free of
charge to IBM computer user group members.  PUSH.COM
& POP.COM were downloaded from the IBM PC User Group
Support Electronic bulletin board system in Boca Raton,
Florida.  The electronic bulletin board system is 
available to all user group members.
	  

 
```
{% endraw %}

## SUPEREN.ASM

{% raw %}
```
        Page
        page    72,120
TITLE   SUPEREN   Change name of file, sub-dir or vol ID.
COMMENT "       SUPEREN   [d:]name1    name2
        Renames files or subdirectories from name 1 to name 2.
        Name1 & name2 may have extensions and wild caracters.
        Action of the program is as described in the DOS manual
        for INT 21, function 17. (See PC Tech Jr V3 No.4 p41)
"
COM     SEGMENT
        ASSUME CS:COM,DS:COM,ES:COM,SS:COM
        ORG     5CH     ;FCB FORMED FROM NAME1
FCB1    LABEL   BYTE
DRIVE1  DB      ?
NAME1   DB      11 DUP(?)
        ORG     6CH     ;FCB FORMED FROM NAME2
FCB2    LABEL   BYTE
DRIVE2  DB      ?
NAME2   DB      11 DUP(?)
        ORG     100H
SUPEREN PROC
        MOV     DX,OFFSET INVDR$        ;POINT TO ERROR MESSAGE
        TEST    AL,AL           ;TEST FOR VALID DRIVE1 ID
        JNZ     ERROR
        MOV     DX,OFFSET INVPAR$
        CMP     NAME1,' '               ;CHECK IF NAME1 IS THERE
        JE      ERROR
        CMP     NAME2,' '               ;CHECK FOR NAME 2
        JE      ERROR
        MOV     SI,OFFSET FCB1          ;POINT TO NAME1 FCB
        MOV     DI,OFFSET OLDN          ;POINT TO OLD NAME FIELD
        MOV     CX,12           ;MOVE 12 BYTES
        REP     MOVSB           ;MOVE NAME1 TO EXTENDED FCB
        MOV     SI,OFFSET NAME2 ;POINT TO NAME2, NOT DRIVE
        MOV     DI,OFFSET OLDN+11H      ;POINT TO NEW NAME FIELD
        MOV     CX,11           ;NAME EX DRIVE = 11 BYTES
        REP     MOVSB           ;MOVE NAME2 TO EXTENDED FCB
        MOV     DX,OFFSET XFCB          ;POINT DX TO EXTENDED FCB
        MOV     AH,17H          ;FUNCTION 17 = RENAME
        INT     21H
        TEST    AL,AL           ;TEST FOR ERRORS
        JZ      EXIT            ;NO ERRORS IF AL = 0
        MOV     DX,OFFSET INVNAM$       ;ELSE POINT TO ERROR MSG
ERROR:  MOV     AH,9            ;DISPLAY ERROR MESSAGE
        INT     21H
EXIT:   INT     20H             ;RETURN TO DOS
SUPEREN ENDP
INVDR$  DB      0DH,0AH,'Invalid drive id$',0DH,0AH,'$'
INVPAR$ DB      0DH,0AH,'2 params needed: [d:]oldname,newname'
        DB      0DH,0AH,'$'
INVNAM$ DB      0DH,0AH,'Name not found or already exists'
        DB      0DH,0AH,'$'
XFCB    DB      0FFH    ;EXTENDED FCB ID BYTE
        DB      5 DUP(0)
ATTR    DB      18H     ;ATTR FOR SUB-DIRS & VOL LABELS
OLDN    DB      37 DUP(0)       ;OLD & NEW NAMES GO HERE
COM     ENDS
        END     SUPEREN

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0535

     Volume in drive A has no label
     Directory of A:\

    CED1_03B COM      7168   6-30-85   9:33a
    CED1_03B DOC     63514   8-14-85   1:06a
    COPYQ    EXE      2688   6-25-85  12:45p
    FLIP     ASM      1795   6-25-85   7:19p
    FLIP     COM        62   6-07-85  12:11a
    INDEXER  DOC     13900   5-28-85  12:01p
    INDEXER  EXE     28330   5-28-85  10:18a
    INDEXER  PAS     24704   6-22-85   7:27p
    LOAD     ASM      4604   2-20-84   2:45p
    LOAD     COM       291   2-20-84  11:15p
    PCDISK   COM     39168   4-20-85  12:34p
    POP      COM      1280   8-23-85   7:05a
    PUSH     COM       512   8-23-85   7:04a
    PUSH-POP DOC      5120   8-24-85   6:13p
    QWIKLABL EXE     34944   1-01-80   1:31a
    QWIKLABL KEY       128   2-18-85   4:57p
    SHOW     COM       384   2-15-85   8:14p
    SUPEREN  ASM      2486   7-18-85   3:18p
    SUPEREN  COM       210   7-18-85   3:20p
    TRIVIA   C         105   9-01-85   3:12p
    GO       BAT      1500   6-02-86  12:03p
    NOTES535 TXT      1536   6-06-86   8:25a
    FILES535 TXT      1528   6-02-86  12:02p
           23 file(s)     235957 bytes
                           72704 bytes free
