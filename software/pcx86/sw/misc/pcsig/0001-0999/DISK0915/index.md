---
layout: page
title: "PC-SIG Diskette Library (Disk #915)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0915/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0915"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDIR:  A DOS UTILITY"

    EDIR lets you manipulate MS-DOS directories in a full-screen editor.
    The program gives you full control over the order in which the
    individual directory entries are stored on disk.  It can sort
    directories by filename, extension, date, size, or any other arbitrary
    order.  EDIR gives you a number of other facilities to manage your
    directories: change filenames, file attributes, date and time stamps on
    files.  You can also create, copy, delete, move, and view files in a
    convenient manner.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    EDIR1301 ARC  EDIR archive file.
    EDIR1301 DOC  Documentation on EDIR version 1.301.
    EDIR1301 EXE  The EDIR main program.
    EDIR301  DOC  Documentation on EDIR version 3.01.
    EL25     COM  EGA utility: 25 lines display.
    EL43     COM  EGA utility: 43 lines display.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDIR1301.DOC

{% raw %}
```



                                        EDIR
                           A FULL SCREEN DIRECTORY EDITOR
                                   VERSION 1.301
          
          
          EDIR is  a full  screen directory  editor that allows you to edit
          MS-DOS directories.  It is based on the concept of user supported
          software which is an attempt to provide software at a low cost to
          the end user.
               
          Version 1  is provided  to you free of cost and may be copied and
          shared freely,  provided that  it  is  distributed  ONLY  in  its
          original  unmodified   form  and  no  fee  is  charged  for  such
          distribution.
               
          Version 2  and later  releases cannot be distributed. You can use
          these versions  on a  single machine  and copy  them  for  backup
          purposes only.
               
          The latest  and full-featured  version of EDIR can be obtained by
          sending a nominal contribution of $30 to Rose Development. Please
          use the  order form on the next page for this purpose. Registered
          users will  be informed about future releases and can get updates
          at a nominal charge.
               
          This document should be accompanied by the following files:
               
               EDIR1301.EXE - EDIR version 1.301 program
               EDIR301.DOC  - User's manual for EDIR version 3.01
               EL25.COM     - EGA utility (switch to 25 line mode)
               EL43.COM     - EGA utility (switch to 43 line mode)
               
          EDIR301.DOC is  intended to  be used  as the  user's  manual  for
          EDIR1301.EXE with the following exceptions:
               
          1. Replace all references to EDIR301 with EDIR1301.
          2. Version  1.301 provides  the  following   functions  for  demo
             purposes only.  If you  use them  during an  EDIR session, you
             will not  be able  to store  your edited directory back to the
             disk:
          
                 Mark, Organize, Sort, Trim, Edit, /DOS
                 
             The functions  that are  usable without  the above restriction
             have been underlined on the main menu.
               
          Hope you  will find  EDIR to be a useful utility. We welcome your
          suggestions to improve its capabilities.
               
               
               
          COPYRIGHT (C) 1986,1987 BY ROSE DEVELOPMENT
          ALL RIGHTS RESERVED













                                     ORDER FORM

	  Date:  ____________
          
          Qty.       Description            Unit Price       Extended Price
          ----       -----------            ----------       --------------
          
          ____       EDIR                     $30.00         ______________
          
                       IL residents add 7% sales tax         ______________
          
                                               Total         ______________
          
          Please print clearly:
          
          Name ____________________________________________________________
          
          Company _________________________________________________________
          
          Street Address __________________________________________________
          
          City/State _________________________________ Zip ________________
          
          Home Phone Number  (      )-__________-__________________________
          
          Bus. Phone Number  (      )-__________-__________________________
          
          Where will you be using this product?  ____ Home,  ____ Work
          
          Where did you hear about EDIR ___________________________________
          
          
          -----------------------------------------------------------------
          
          
          We would appreciate your response to the following questions.
          
          Your computer (make/model) ______________________________________
          
          Number of drives and type _______________________________________
          
          Display adapter and monitor _____________________________________
          
          Printer _________________________________________________________
          
          Other peripherals _______________________________________________
          
          We welcome  your comments  and suggestions about EDIR (please use
          other side if necessary):
          
          _________________________________________________________________
          
          _________________________________________________________________
          
          _________________________________________________________________
          
          
          Please mail this order form and your check to:
          
               Rose Development, P.O. Box 1906, Palatine, IL 60078.



```
{% endraw %}

## EDIR301.DOC

{% raw %}
```



            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                                        EDIR
                                          
                           A FULL SCREEN DIRECTORY EDITOR
                                          
                                    VERSION 3.01
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            COPYRIGHT (C) 1986,1987 BY ROSE DEVELOPMENT
            ALL RIGHTS RESERVED



















                                 TABLE OF CONTENTS
                                 -----------------
            
            LICENSE AGREEMENT......................................... 2
            INTRODUCTION.............................................. 3
            A SHORT COURSE ON MS-DOS DISK DIRECTORIES................. 5
            EDITING DIRECTORIES WITH EDIR............................. 6
                Installation.......................................... 6
                Getting Started....................................... 7
            EDIR COMMAND REFERENCE................................... 10
                Quick Summary........................................ 10
                PgUp................................................. 11
                PgDn................................................. 11
                Home................................................. 11
                End.................................................. 11
                Up-Arrow............................................. 11
                Down-Arrow........................................... 11
                Mark................................................. 11
                Unmark............................................... 11
                Cut.................................................. 12
                Paste................................................ 12
                Organize............................................. 12
                Sort................................................. 12
                Trim (compress) directory............................ 13
                Display paste or safe buffer......................... 13
                Edit individual directory entry...................... 14
                Perform DOS type operations.......................... 15
                Help................................................. 17
                Write directory to disk.............................. 17
                Quit to DOS.......................................... 17
            MISCELLANEOUS SUGGESTIONS AND USAGE TIPS................. 18
            EDIR 2.00 TO 3.00 CHANGES................................ 20
            































                         ROSE DEVELOPMENT LICENSE AGREEMENT
            
            
                 EDIR is  the copyrighted  property of Rose Development.
            It is  based on the concept of user supported software which
            is an  attempt to  provide software at a low cost to the end
            user.
                 
                 Version 1  is provided  to you  free of cost and may be
            copied and  shared freely,  provided that  it is distributed
            ONLY in  its original  unmodified form and no fee is charged
            for such distribution.
                 
                 Version 2 and later releases cannot be distributed. You
            can use these versions on a single machine and copy them for
            backup purposes only.
                 
                 The latest release of EDIR can be obtained by sending a
            nominal contribution  of $30 to Rose Development. Registered
            users will  be informed  about future  releases and  can get
            updates at a nominal charge.
                 
                 
            DISCLAIMER
                 
                 EDIR is  provided "as is" without warranty on any kind.
            In no  event will  Rose Development be liable to you for any
            damage, including  loss of  profits, savings,  data, time or
            other incidental or consequential damages arising due to use
            of this program.
                 
                 We have  tried  to  make  EDIR  as  "bullet  proof"  as
            possible. It  has been  tested on  several IBM PCs, XTs, ATs
            and  100%   compatibles  with  various  disk  configurations
            including double  sided/double density  drives, high density
            drives and  hard drives.  Unlike some  other  file  handling
            programs, EDIR can handle and distinguish between 12 bit and
            16 bit  FAT entries with equal convenience. It does not have
            any artificial  limits as imposed by some other programs. It
            has been  built with  extensive error handling from the very
            beginning. However, we do recommend you to test this program
            if you  have an  uncommon configuration. It is always a good
            idea to  have a  recent backup  of all your important disks.
            Please fill  out and mail your registration forms so that we
            can provide continued support for new and uncommon hardware.
                 
                 
            MINIMUM SYSTEM REQUIREMENTS
            IBM PC/XT/AT or 100% compatible
            MDA, CGA, EGA, Hercules Graphics or Compaq dual-mode adapter
            MS-DOS/PC-DOS version 2.00 or higher
            192K RAM
                 
            
            Rose Development
            P.O. Box 1906
            Palatine, IL 60078.


                                        - 2 -






                 
                                    INTRODUCTION
                 
                 EDIR is  a full screen directory editor that allows you
            unlimited flexibility in manipulating MS-DOS directories. It
            gives  you   full  control  over  the  order  in  which  the
            individual directory  entries will be stored on the disk. It
            can sort  directories by  filename, extension, date, size or
            any other  arbitrary order that may seem logical to you. For
            example, suppose  the DOS  'DIR' command  currently lists  a
            directory in the following order:
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            LIB          <DIR>     11-09-86   6:05p
            TEST1013 RES      324  10-13-86   8:54p
            HELP         <DIR>     11-09-86   6:10p
            TEST1009 RES      324  10-09-86  10:45a
            
                 EDIR lets  you change  this order  to your taste. A few
            possibilities are shown below:
                 
            1. Directories first, then files (in the desired order).
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            LIB          <DIR>     11-09-86   6:05p
            HELP         <DIR>     11-09-86   6:10p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST1013 RES      324  10-13-86   8:54p
            TEST1009 RES      324  10-09-86  10:45a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
                 
            2. Files  first, then  directories (in  the desired  order).
               Note that  . & .. entries must remain in place due to DOS
               requirements.
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST1013 RES      324  10-13-86   8:54p
            TEST1009 RES      324  10-09-86  10:45a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            LIB          <DIR>     11-09-86   6:05p
            HELP         <DIR>     11-09-86   6:10p









                                        - 3 -






            3. Directories first, then files (in sorted order).
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            HELP         <DIR>     11-09-86   6:10p
            LIB          <DIR>     11-09-86   6:05p
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            TEST1009 RES      324  10-09-86  10:45a
            TEST1013 RES      324  10-13-86   8:54p
            PRACTICE TXT     3140   9-10-85   6:36a
                 
                 
                 In addition  to changing  the order  of  entries,  EDIR
            gives  you   number  of  other  facilities  to  manage  your
            directories. To  mention a  few, you  can change  filenames,
            file attributes, date and time stamps on files. You can also
            create,  copy,  delete,  move  and  view  files  in  a  very
            convenient manner.
                 
                 The power  of EDIR  comes from  the fact  that you  can
            manipulate the  directories  interactively.  It  is  a  full
            screen editor  designed to edit directories, very similar to
            the full screen editors designed to edit documents.
                 
                 This document  describes the use of EDIR to effectively
            organize your disk directories.
































                                        - 4 -






            
                                 A SHORT COURSE ON
                              MS-DOS DISK DIRECTORIES
                 
                 This  section  is  not  mandatory  reading,  but  would
            certainly help to better understand the operation of EDIR.
                 
                 MS-DOS can create two types of directories on disk. The
            root directory  has a  fixed size  and is always present. On
            the other  hand, subdirectories  have variable size and they
            may or  may not  be present. Subdirectories are allocated in
            units called  'clusters'. A  cluster is  simply a  group  of
            sectors. The  number of sectors in a cluster is fixed and is
            determined by  the type  of the  disk, e.g.  a  double-sided
            double-density disk  has 2  sectors/cluster whereas the high
            density diskette on a PC/AT has 1 sector/cluster.
                 
                 Information about  files  and  subdirectories  under  a
            certain directory is stored in directory entries. Each entry
            contains the  following information  about the corresponding
            file or  subdirectory: filename, extension, attributes, date
            and time of creation, starting cluster number and file size.
            Each directory  entry occupies  32 bytes on the disk. When a
            directory cluster  gets full  with entries,  new entries are
            added to the directory by assigning an unused cluster to the
            directory.
                 
                 A directory entry that has never been used has a hex 00
            as the  first character  of  its  filename.  DOS  deletes  a
            directory  entry  by  making  the  first  character  of  its
            filename a  hex E5.  Deleted entries  are not  listed by the
            'DIR' command.  Thus deleted entries create small "holes" in
            a directory.  When DOS needs to add a new directory entry to
            the directory,  it writes  over the  first available  "hole"
            (deleted entry),  if one  exists. That is why filenames seem
            to appear  at unexpected places when you create new files in
            a directory that has deleted entries in it.
                 
                 EDIR lets  you interactively  manipulate the  order  of
            directory entries  with the following restrictions which are
            necessary for the proper operation of DOS:
                 
            1. In  a system  disk (a  disk that has DOS on it) the first
               two files  in the  root  directory  must  be  IO.SYS  and
               MSDOS.SYS (IBMIO.COM  and IBMDOS.COM  in case of PC-DOS).
               EDIR will  not let  you move  these two  files.  It  will
               actually pull  out these two entries into a 'safe buffer'
               before letting you manipulate the directory entries. When
               writing the  directory back  to the disk, the two entries
               will be  inserted at the right place. The same holds good
               for the . & .. entries in a subdirectory.
                 
            2. DOS  assumes that  the never  used entries in a directory
               will always  be at  the end. So EDIR strips these entries
               before letting you manipulate the directory and reinserts
               them at  the right  place before  writing it  back to the
               disk.


                                        - 5 -






                 
                           EDITING DIRECTORIES WITH EDIR
                 
                 
            Installation
            
            EDIR version  3.01 distribution disk has the following files
            on it:
                 
                 EDIR301.EXE - EDIR program
                 EDIR301.DOC - This document
                 EL25.COM    - EGA utility (switch to 25 line mode)
                 EL43.COM    - EGA utility (switch to 43 line mode)
                 
            Copy EDIR301.EXE to a directory of your choice and rename it
            as EDIR.EXE.  Make sure  that the  directory where  you copy
            EDIR is in your DOS search path.
            
            If your  computer has  an EGA  adapter, you may also want to
            copy EL25.COM  and EL43.COM  to a  directory on  your  disk.
            These utilities  allow you to switch your display between 25
            and  43   line  modes  (see  "Miscellaneous  Suggestions..."
            section for more details). Again, make sure that these files
            are copied to a directory that is in your DOS search path.
            
            Example: If  you want  to set  up EDIR on your C: drive in a
            directory called  \UTIL, you would execute the following set
            of commands:
            
                 C> COPY A:\EDIR301.EXE C:\UTIL\EDIR.EXE
                 C> PATH=C:\UTIL
                 
            The PATH command can also be put in the AUTOEXEC.BAT file in
            the root  directory.  If  you  want  to  copy  the  two  EGA
            utilities to the C: drive, execute the following command:
                 
                 C> COPY A:\EL*.* C:\UTIL
                 
            Now you  are ready  to use EDIR. The next section provides a
            quick tutorial on EDIR.



















                                        - 6 -






                 
                                  Getting Started
            
            An editing  session with  EDIR  consists  of  the  following
            steps:
                 
            1. Go to the directory that you want to edit.
            2. Invoke EDIR.
            3. Manipulate directory entries using EDIR commands.
            4. Store the directory back to the disk using the EDIR write
               command.
                 
            To try  out some  of the  features of  EDIR, go  to a  large
            enough directory  (at least 30 entries) and invoke edir. For
            example, if  you want  to edit a directory called \DOC\MEMOS
            on the  C: drive, then execute the following set of commands
            (assume that your current default drive is A:)
            
                 A> C:
                 C> CD \DOC\MEMOS
                 C> EDIR
            
            EDIR comes  up with  a screenful  of directory entries and a
            main menu displaying the commands that are available to you.
            The screen format is as follows:
            
             _______________________________________________________
            |                                                       |
            | EDIR version no. & current directory name             |
            |_______________________________________________________|
            |                                                       |
            | Main menu                                             |
            |_______________________________________________________|
            |                                                       |
            |                                                       |
            |                                                       |
            | Directory entries (one per line)                      |
            |                                                       |
            |                                                       |
            |                                                       |
            |_______________________________________________________|
            |                                                       |
            | Message window                                        |
            |_______________________________________________________|
            
            Each directory  entry  contains  the  following  information
            about  the   file   or   directory:   filename,   extension,
            attributes, date  and time  of creation,  size and  starting
            cluster number.  The  file  attributes  have  the  following
            meaning:
            
            A  Archive - set whenever a file is modified
            D  Subdirectory
            V  Volume label
            S  System file
            H  Hidden file
            R  Read-only file


                                        - 7 -






            An entry  that has  been deleted  is shown  with a  ? as the
            first character of its filename.
            
            The entry  at which  the cursor  is  placed  is  called  the
            "Current Entry". The current entry can be changed by the up-
            arrow and  down-arrow keys  on your  keyboard. You  can page
            through the directory rapidly using the 'Page-Up' and 'Page-
            Down' keys.  Also, you  can get  to the  top or  bottom of a
            directory very  quickly using the 'Home' and 'End' keys. Try
            using these  keys  to  view  various  parts  of  the  target
            directory.
            
            The entries  you are  looking at  are in  the main buffer of
            EDIR. EDIR  also has  a paste  buffer which  is  useful  for
            moving entries  within the  main buffer. Let's try this with
            an example.  Bring the  cursor to  an entry that you want to
            move. Press 'C' (CUT) on your keyboard. The entry pointed by
            the cursor  is deleted from the main buffer and is placed in
            the paste  buffer. Let  us look at the contents of the paste
            buffer now. To do this press 'D' (DISPLAY). The menu changes
            to a  'Lotus' style menu, which gives you two choices: Paste
            and Safe.  The choice 'Paste' is initially highlighted and a
            description of  this choice  is displayed  on the  following
            line. You  can change  the highlight  to appear on 'Safe' by
            pressing the  right arrow  key or by typing the first letter
            of the  word 'Safe', i.e. 'S'. All the multiple choice menus
            within EDIR work the same way. For now, set the highlight to
            'Paste' and select it by pressing the <Enter> key. The paste
            buffer is now shown  on the screen. It has only one entry at
            this time  - the  entry that  you had cut earlier. Press any
            key to get back to the main buffer. Now move the cursor to a
            point where  you want  to insert  the entry  that is  in the
            paste buffer. Press 'P' (PASTE) and the paste buffer will be
            inserted BEFORE the entry pointed by the cursor.
            
            If more than one entries are cut before pasting them back to
            the main  buffer, then they are appended to the paste buffer
            (as opposed  to overwriting  the paste  buffer). So  if  you
            wanted to group the 3rd, 14th & 22nd entries in a directory,
            you would  first cut  them into  the paste  buffer using the
            'CUT' command three times and then paste them at the desired
            location in  the main buffer using a single 'PASTE' command.
            Try this sequence and watch the contents of the paste buffer
            as you progress.
            
            Now try  some sorting  capabilities of  EDIR. EDIR  can sort
            directories by filename, extension, file size or date & time
            of creation.  To see  how sort works, press 'S' (SORT). EDIR
            prompts you  to select the primary key for sorting and gives
            you a  menu to  choose from.  Select 'Extension' to sort the
            directory by  file extension. Now you are prompted to select
            the secondary  key. What  does that mean? Well, if two files
            happen to  have the  same primary  key, then  sort uses  the
            secondary  key   to  resolve  their  order.  Let  us  choose
            'Filename' as  the secondary  key. Now  EDIR asks you if you
            want the  result in  ascending or  descending order.  Select
            'Ascending'  for  right  now.  As  soon  as  you  make  this


                                        - 8 -






            selection,  EDIR  sorts  the  directory  according  to  your
            specifications and  displays the  result. Page  through  the
            directory to confirm the results.
            
            Now if  you want  to save this edited directory on the disk,
            simply press  'W' (WRITE),  otherwise press 'Q' (QUIT). EDIR
            will ask  for your  confirmation in  each case.  In case  of
            'Write', the  directory will  be saved  on the disk and EDIR
            will return  to the main menu waiting for more commands. You
            may then type 'Q' (QUIT) to leave EDIR and return to DOS.
            
            By now you should have a good working knowledge of EDIR and
            you should be able to explore the remaining functions simply
            by reading the next chapter - EDIR COMMAND REFERENCE. A
            short online help screen is available when you are using
            EDIR. To display this help screen, simply press 'H' (HELP).











































                                        - 9 -






            
                               EDIR COMMAND REFERENCE
                 
                 
            Quick Summary:
            
            KEY            COMMAND DESCRIPTION
            
            <PgUp>:        Scroll page up
            <PgDn>:        Scroll page down
            <Home>:        Go to top of directory
            <End>:         Go to bottom of directory
            <Up-Arrow>:    Cursor up
            <Down-Arrow>:  Cursor down
            M:             Mark
            U:             Unmark
            C:             Cut
            P:             Paste
            O:             Organize (files/dirs/deleted entries)
            S:             Sort
            T:             Trim (compress) directory
            D:             Display paste or safe buffer
            E:             Edit entry pointed by cursor
            /:             Perform DOS type operations
            H:             Help
            W:             Write
            Q:             Quit
































                                       - 10 -






            
            <PgUp>: Scroll page up
            <PgDn>: Scroll page down
                 These keys are used to scroll through the directory one
                 page at  a time. When the top (bottom) of the directory
                 is reached, you cannot scroll up (down) any more.
                 
                 
            <Home>: Go to top of directory
            <End>:  Go to bottom of directory
                 These keys  are used  to reach the top or bottom of the
                 directory with just one keystroke.
                 
                 
            <Up-Arrow>:   Cursor up
            <Down-Arrow>: Cursor down
                 These keys  are used  to move  in the  main buffer  one
                 entry at a time. When the top (bottom) of the directory
                 is reached, you cannot move up (down) any more.
                 
                 
            M: Mark
            U: Unmark
                 MARK  is  used  to  group  a  certain  section  of  the
                 directory. Once  a section is marked, the CUT, SORT and
                 certain  DOS   commands  operate  only  on  the  marked
                 section. UNMARK is used to ungroup the marked section.
                 
                 To mark  a certain  section of the directory, go to the
                 first directory  entry of the section and press the 'M'
                 key. The  current entry  will be  highlighted. Now move
                 the cursor  to the   last  entry   in the section using
                 <Pg-Up>, <Pg-Down>,  <Home>,  <End>,  <Up-Arrow>    and
                 <Down-Arrow>  keys.   The   whole   section   will   be
                 highlighted as  you move  the cursor to the last entry.
                 Also, if  you want, you can start your marking from the
                 last entry  of the  section and work your way backwards
                 towards the first entry.
                 
                 Now that you have marked a particular section, what can
                 you do  with it?  Well, you could cut the whole section
                 using the  CUT command  and  append  it  to  the  paste
                 buffer. This  is much  easier than  cutting  individual
                 entries one at a time.
                 
                 Something else  you can  do with a marked section is to
                 sort it.  When you use the SORT command after marking a
                 section,  the  command  operates  only  on  the  marked
                 section and leaves the rest of the directory untouched.
                 Even after  the sort  is completed  the section is kept
                 marked for  you to  observe the  result and perform any
                 further operations  on the  section (for  example, more
                 sorts, or  CUT, or  even expand  or shrink  the section
                 using the cursor control keys).
                 
                 Entries in a marked section can also be copied or moved
                 to to  a different  directory as a group. They can also


                                       - 11 -






                 be deleted  as a  group. See  the  section  '/DOS'  for
                 performing these operation on marked sections.
                 
                 Whenever you  want to  unmark a  marked  section,  just
                 press 'U' (Unmark).
            
            
            C: Cut
            P: Paste
                 The CUT command cuts the directory entry pointed by the
                 cursor and  appends it to the paste buffer. If there is
                 a  marked  section  within  the  directory,  the  whole
                 section is  cut and  appended to  the paste buffer. The
                 contents of  the paste  buffer can  be observed  at any
                 time using  the  DISPLAY  command.  The  PASTE  command
                 inserts the  contents of  the paste  buffer BEFORE  the
                 current entry in the main buffer.
                 
                 
            O: Organize
                 The ORGANIZE function rearranges the main buffer in the
                 following order:  files, directories,  deleted entries.
                 This command  is  useful  to  separate  out  files  and
                 directories into  separate groups.  It also  places the
                 deleted entries  at the  bottom, thus combining all the
                 small "holes" into a big one. This ensures that all the
                 new files created in the future will be appended at the
                 end of  the directory  instead of  creeping up randomly
                 within  the   directory.  If   you  do   not  like  the
                 files/directories/deleted  entries   order   for   some
                 reason, you  can easily  reorder the entries by doing a
                 block CUT and PASTE.
                 
                 Note that  the organize  command operates  on the  main
                 buffer only.  So if  you have  any entries in the paste
                 buffer and  want them to be part of the reorganization,
                 you must first paste them into the main buffer.
                 
                 
            S: Sort
                 This command  is used  to sort the directory entries in
                 the main  buffer. If  there is  no marked section, then
                 the complete  main buffer is sorted, otherwise only the
                 marked section is sorted.
                 
                 The  sort   command  prompts   for  three   pieces   of
                 information: the primary key, the secondary key and the
                 sorting  order.  It  then  goes  ahead  and  sorts  the
                 directory entries  in the specified order (ascending or
                 descending) based  on the  primary key.  If the primary
                 keys for  two entries  are the same, then the secondary
                 key is used to make sorting decisions.
                 
                 Note that  the SORT command operates on the main buffer
                 only. So  if you  have any  entries in the paste buffer
                 and want  them to  be part  of the sort, you must first
                 paste them into the main buffer.


                                       - 12 -






            T: Trim (compress) directory
                 This function  will compress  a  directory  into  fewer
                 clusters if  possible, freeing  up valuable disk space.
                 The idea behind the TRIM function is as follows:
                 
                 To add new entries to a directory that is already full,
                 DOS assigns  an unused  cluster to that directory. Thus
                 DOS provides the basic mechanism to expand a directory.
                 However,  DOS   lacks  the  capability  to  compress  a
                 directory  which   is  essential   to  reclaim   unused
                 clusters.  As  an  example,  consider  a  disk  with  2
                 sectors/cluster  (i.e.  1024  bytes/cluster).  So  each
                 cluster  can  accommodate  32  directory  entries.  Now
                 consider a  directory that  has one cluster and is full
                 with 32  entries. Suppose you create a new file in this
                 directory. To  add this  33rd entry into the directory,
                 DOS assigns  an unused  cluster to  the  directory  and
                 writes the  new entry  as the  first entry  in the  new
                 cluster.  Now   if  you   delete  ANY  entry  from  the
                 directory,  there  are  only  32  valid  entries  left.
                 Theoretically, these  32 entries  should fit  into  one
                 cluster. But  DOS does  not pack these entries into one
                 cluster to  free up  the other  cluster. TRIM  function
                 does exactly that.
                 
                 When you  invoke the  TRIM function,  EDIR will ask you
                 for a  confirmation. If you say yes, EDIR will pack the
                 directory into  fewer clusters  if  possible  and  will
                 display the  number of  clusters  that  will  be  freed
                 during a  write to  the disk.  This feature may be very
                 useful when  you are trying to fit those last few bytes
                 on a disk.
                 
                 Note that  TRIM internally  uses the  ORGANIZE function
                 and  so   the  directory  will  be  rearranged  in  the
                 files/directories/deleted entries  order every time you
                 use  the   TRIM  function.  Also  note  that  the  root
                 directory cannot be trimmed because it has a fixed size
                 as defined  by  DOS.  If  you  try  to  trim  the  root
                 directory, EDIR will display an error message.
                 
                 
            D: Display paste or safe buffer
                 Paste buffer  is an  area where  EDIR keeps the entries
                 you have cut from the main buffer. Safe buffer contains
                 entries that  must not  be moved  from  their  original
                 locations, e.g.  the  DOS  system  files  in  the  root
                 directory and  the .  & .. entries in any subdirectory.
                 When you  invoke the  DISPLAY function, EDIR first asks
                 you which  one of  the two  buffers you  want  to  see.
                 Depending on  your choice, it displays either the paste
                 or the safe buffer.







                                       - 13 -






            E: Edit individual directory entry
                 This function  will let you edit the directory entry at
                 the current  cursor location.  When you type 'E' (Edit)
                 from the main menu, a 'Lotus' style menu appears giving
                 you the  following options:  Filename, Archive, System,
                 Hidden, Read, Date, Time, Erase, Divider, Quit. You can
                 choose the desired option, and change the corresponding
                 field in  the directory  entry. You  will remain in the
                 EDIT menu  until you  choose Quit to return to the main
                 menu. The  various options  available in  the EDIT menu
                 are explained below:
                 
                 Filename:
                   This option  allows you  to change  the filename  (or
                   directory name)  of the  current entry.  When you are
                   prompted for  the new  filename, type  in the a valid
                   filename and  hit <Enter>.  Incidentally, this option
                   allows you  to have  multiple  files  with  the  same
                   filename. This feature could be used, for example, to
                   imbed logical  dividers (such as --------.---) within
                   your directory. It should be noted that EDIR does not
                   allow you to change filenames of deleted entries.
                   
                 Archive, System, Hidden, Read:
                   These four  options allow  you  to  change  the  file
                   attributes for the current directory entry. All these
                   options act  as toggles  and turn  the  corresponding
                   attributes on or off.
                   
                 Date:
                   This option  allows you  to change  the date stamp on
                   the current  directory entry.  EDIR  prompts  you  to
                   enter a  date in  the MM:DD:YY format. If the date is
                   valid  then  the  corresponding  directory  entry  is
                   updated. The  two character  year field allows you to
                   enter a year between 1980 and 2079.
                   
                 Time:
                   This option  allows you  to change  the time stamp on
                   the current  directory entry.  EDIR  prompts  you  to
                   enter the new time in 24 hour format (HH:MM:SS). Note
                   that DOS  allows only  even number  of seconds  to be
                   stored  in  directory  entries.  So  if  you  entered
                   14:24:57, this would be stored as 14:24:56.
                   
                 Erase:
                   This option  works on deleted entries only. It allows
                   you  to   wipe  out  the  deleted  entry  completely,
                   converting it  to a  never used entry. The never used
                   entry has zeros in all its fields. It is removed from
                   the main  buffer and  appended to  other  never  used
                   entries at the bottom of the directory.
                 
                 Divider:
                   This option  works on non-deleted entries only. It is
                   a special case of the Filename option described above
                   and changes   the filename of  the current entry to a


                                       - 14 -






                   (--------.---). This  option is very useful to divide
                   long directories  into logical sections. This feature
                   is intended  to be used as follows: Say you need five
                   dividers  located   strategically    in  the  current
                   directory. You  must first  create five  empty  files
                   using the  '/DOS Creat'  function. Now you can change
                   the filenames  of these  files to  dividers using the
                   Divider function.  Then you  must cut and paste these
                   dividers at desired spots one by one.
                   
                 Quit:
                   This option takes you back to the main menu.
                   
                   
            /: Perform DOS type operations
                 This function  gives you several DOS type capabilities,
                 except that  it is  more interactive  and convenient as
                 compared to DOS.
                 
                 NOTE: Some of the options under this function, by their
                 very definition,  operate directly  on the disk instead
                 of the  main buffer.  The revised copy of the directory
                 is then  read from  the disk.  So any  changes that you
                 have made  in the  main buffer  are lost. These options
                 are called instantaneous options (as opposed to delayed
                 options that  are written  to disk  only during a WRITE
                 function). Hence you must save your edited buffer on to
                 the disk   before  you  use  any  instantaneous  option
                 (unless your  intention is to trash all the changes). A
                 reminder to  this effect  is given  by placing  an  (I)
                 beside every instantaneous option on the /DOS menu. The
                 list of instantaneous options is as follows:
                 
                   Delete, Move, Creat, Mkdir, Rmdir, Chdir
                   
                 The various  options available  in the  /DOS  menu  are
                 explained below:
                 
                 
                 Type:
                   This option  allows you  view the file pointed by the
                   cursor. You  can view  the whole  file a  screen at a
                   time or  you can  abort in the middle by pressing the
                   <F1> key.
                   
                 Copy:
                   This option  allows you  to copy one or more files to
                   another directory  or disk.  If  there  is  a  marked
                   region in  the main buffer, then all the files in the
                   marked region  will be  copied,  otherwise  only  the
                   current entry  will be  copied. EDIR  will prompt you
                   for the  name of  the target  directory.  The  target
                   directory could  be on  a drive  different  from  the
                   current drive  and in  that case you must include the
                   drive letter in the target pathname.




                                       - 15 -






                 Delete (Instantaneous):
                   This option  allows you  to delete  one or more files
                   from the  current directory.  If there  is  a  marked
                   region in  the main buffer, then all the files in the
                   marked region  will be  deleted, otherwise  only  the
                   current entry will be deleted.
                 
                 Move (Instantaneous):
                   This option  allows you  to move one or more files to
                   another directory  on the  same disk.  If there  is a
                   marked region  in the main buffer, then all the files
                   in the  marked region  will be  moved, otherwise only
                   the current entry will be moved. EDIR will prompt you
                   for the name of the target directory.
                   
                   Moving files  from one  directory to  another is much
                   faster  than   first  copying   them  to  the  target
                   directory and  then deleting  them from  the  current
                   directory. In  the former  case, the  files  are  not
                   physically moved  on the  disk, only  their directory
                   entries are.  This makes  the move  faster  than  the
                   copy/delete combination.
                   
                 Creat (Instantaneous):
                   This option  allows you  to create  one or more empty
                   files of  length zero.  This feature  may be  used in
                   conjunction  with  'Edit  Divider'  to  create  dummy
                   dividers in  a directory.  See the  'Divider' section
                   for more information on dividers.
                   
                   When you  choose this  option, EDIR  prompts  you  to
                   supply a  two character  prefix for  the zero  length
                   files. Then  it asks  you for the number of files you
                   want to  create. It  then goes  ahead and creates the
                   required number of files.
                   
                   The files  created by  this option  have a three part
                   filename:
                   
                       two character prefix supplied by you
                     + one character in the range 0,A-Z
                     + five characters derived from DOS process name
                   
                   This scheme  has been  devised to  easily create  new
                   files with  unique filenames.  Because of  the  0,A-Z
                   range the maximum number of files that can be created
                   with the same two character prefix is 27.
                 
                 Mkdir (Instantaneous):
                   This option  allows you  to create a new directory on
                   any drive.  EDIR will  prompt you for the pathname of
                   the directory  you want  to create.  If the directory
                   has to  be created  on a  drive  different  from  the
                   current drive,  you must  include the drive letter as
                   part of the pathname.




                                       - 16 -






                 Rmdir (Instantaneous):
                   This  option   allows  you   to  remove  an  existing
                   directory from  any drive.  EDIR will  prompt you for
                   the  pathname   of  the   target  directory.  If  the
                   directory is  on a  drive different  from the current
                   drive, you  must include  the drive letter as part of
                   the pathname.
                 
                 Chdir (Instantaneous):
                   This  option   allows  you   to  change  the  current
                   directory or  the current drive. EDIR will prompt you
                   for the  pathname of  the target  directory.  If  the
                   directory is  on a  drive different  from the current
                   drive, you  must include  the drive letter as part of
                   the pathname.  If all you want to do is to change the
                   default drive,  simply enter the letter of the target
                   drive followed  by a  colon,  e.g.  'B:'.  After  you
                   specify the  target pathname,  edir will  change  the
                   default drive and directory to that pathname and read
                   that directory  into the  main buffer - ready for you
                   to edit.
                   
                 Quit:
                   This option takes you back to the main menu.
                   
                   
            H: Help
                 This command displays a help screen for EDIR commands.
                 
                 
            W: Write directory to disk
                 This function  writes the  edited directory back to the
                 disk. If  there are  any entries  in the  paste buffer,
                 they will  be automatically pasted into the main buffer
                 before the  write. The  WRITE  command  asks  for  your
                 confirmation before  proceeding. After writing to disk,
                 EDIR reads  a fresh  copy of  the current directory and
                 displays it on the screen, ready for further editing.
                 
                 
            Q: Quit to DOS
                 This command  gets you  out of EDIR and back to DOS. It
                 asks for  your confirmation before quitting. The edited
                 copy of  the directory is NOT saved on the disk - to do
                 that you must first WRITE and then QUIT.














                                       - 17 -






                      MISCELLANEOUS SUGGESTIONS AND USAGE TIPS
                 
                 
            1. EDIR  presents you  with a 'Lotus' style menu for several
               functions. If  for some  reason, you  would like to abort
               the function, you can either choose the 'Quit' or 'Abort'
               type options  or you can simply press <Esc> to get out of
               the current function.
                 
            2. Whenever  EDIR asks  you  to  type  a  string  (filename,
               pathname  or  number  etc.),  you  have  several  editing
               functions available  to you  before you  hit  <Enter>  to
               submit your  input to EDIR. The left and right arrow keys
               can be  used to  move through  the string. The delete and
               backspace keys have their usual meaning. The <Insert> key
               will toggle  the insert  mode on  and off.  The <Esc> key
               will completely erase what you have typed.
            
            3. Whenever EDIR prompts you for a pathname, you can enter a
               pathname as  per DOS  conventions. Relative  and absolute
               pathnames are  allowed. If the pathname is intended for a
               specific drive, then the drive letter must be included as
               part of  the pathname.  If the pathname contains only the
               drive letter  followed by  a colon,  it is interpreted as
               the  current  directory  on  the  specified  drive.  Some
               examples of valid pathnames are as follows:
            
                   .                (current directory)
                   ..               (parent directory)
                   D:               (current directory on D: drive)
                   BUDGET\Y1987
                   \LOTUS\WKS
                   A:MISC\LETTERS
                   C:\DBASE\APP
                   
            4. EDIR  is an  "EGA-aware"  program  (EGA  stands  for  the
               Enhanced Graphics  Adapter for  the IBM PC). It will make
               use of the current EGA mode to utilize the full screen of
               your  display.  For  example,  if  your  EGA  adapter  is
               currently in  the 43  line mode,  EDIR  will  expand  its
               display to  43 lines.  This gives you the ability to look
               at more  entries per  screen. We have provided two simple
               utilities to  change the  number of  lines  on  your  EGA
               screen. EL43.COM  will change  your screen to accommodate
               43 lines,  whereas EL25.COM  will switch  you back  to 25
               line mode.  So, if  you want  to use  EDIR in the 43 line
               mode on  your computer,  you  would  type  the  following
               commands:
            
                   A> EL43
                   A> EDIR








                                       - 18 -






            5. If  you want  to do  some common  operation on a bunch of
               scattered files in a directory, it is faster if you first
               collect them  in  one  place  using  the  CUT  and  PASTE
               functions. Then  you can  mark all  these files using the
               MARK function  and operate  on them  as a  group. A  good
               example for  this would be if you want to copy a bunch of
               files that are scattered all over the directory.
            
            6. EDIR  can be  used in  conjunction with  a backup program
               (like DOS  Backup or  Fastback)  to  optimize  hard  disk
               performance.  EDIR   allows  you   can  organize  various
               directories so that frequently used files and directories
               can be  placed near  the top of a directory. This reduces
               the search  time for  DOS to  locate the  frequently used
               directory entries.  Further efficiency can be obtained by
               backing up  the whole  disk, reformatting  it,  and  then
               restoring the  complete file  system. This procedure will
               repack non-contiguous files into contiguous sectors, thus
               minimizing head  movement when  they are  accessed.  Note
               that  this  scheme  will  work  only  with  those  backup
               programs that backup and restore one file at a time. Some
               backup programs make a sector-by-sector image of the disk
               during backup and that does not help packing of the files
               during a restore.



































                                       - 19 -






                 
                             EDIR 2.00 TO 3.00 CHANGES
                 
                 
            1. EDIR  no longer  requires the  use of ANSI.SYS driver. It
               does its  own screen  handling and hence the installation
               and operation of this version are much more simpler.
            
            2. The syntax for invoking EDIR has been changed. You can no
               longer specify  a target  directory on  the command line.
               Instead you  can change  to a  different  directory  from
               within EDIR.  In version  3, EDIR  starts by  reading the
               default directory on the default drive.
            
            3. The  user interface  is upward  compatible with ver. 2.00
               with the  addition of  more commands, 'Lotus' style menus
               and much better looking screens.
            
            4. The  ability to  edit an  individual directory  entry has
               been  added.   This  allows   changing  of   file  names,
               attributes, date and time stamps etc.
            
            5. Deleted directory entries can be completely wiped out.
            
            6. A  whole set of DOS type functions has  been added (copy,
               delete, move etc.) for convenient handling of directories
               from within EDIR.
            
            7. Directory  sorts now  allow you  to specify  primary  and
               secondary keys as well as the sorting order.
            
            8. EDIR can now utilize the EGA adapter more effectively. It
               "senses" the  number of  lines on the display and adjusts
               itself to occupy the full screen.

























                                       - 20 -



```
{% endraw %}

## EDIR1301.DOC

{% raw %}
```



                                        EDIR
                           A FULL SCREEN DIRECTORY EDITOR
                                   VERSION 1.301
          
          
          EDIR is  a full  screen directory  editor that allows you to edit
          MS-DOS directories.  It is based on the concept of user supported
          software which is an attempt to provide software at a low cost to
          the end user.
               
          Version 1  is provided  to you free of cost and may be copied and
          shared freely,  provided that  it  is  distributed  ONLY  in  its
          original  unmodified   form  and  no  fee  is  charged  for  such
          distribution.
               
          Version 2  and later  releases cannot be distributed. You can use
          these versions  on a  single machine  and copy  them  for  backup
          purposes only.
               
          The latest  and full-featured  version of EDIR can be obtained by
          sending a nominal contribution of $30 to Rose Development. Please
          use the  order form on the next page for this purpose. Registered
          users will  be informed about future releases and can get updates
          at a nominal charge.
               
          This document should be accompanied by the following files:
               
               EDIR1301.EXE - EDIR version 1.301 program
               EDIR301.DOC  - User's manual for EDIR version 3.01
               EL25.COM     - EGA utility (switch to 25 line mode)
               EL43.COM     - EGA utility (switch to 43 line mode)
               
          EDIR301.DOC is  intended to  be used  as the  user's  manual  for
          EDIR1301.EXE with the following exceptions:
               
          1. Replace all references to EDIR301 with EDIR1301.
          2. Version  1.301 provides  the  following   functions  for  demo
             purposes only.  If you  use them  during an  EDIR session, you
             will not  be able  to store  your edited directory back to the
             disk:
          
                 Mark, Organize, Sort, Trim, Edit, /DOS
                 
             The functions  that are  usable without  the above restriction
             have been underlined on the main menu.
               
          Hope you  will find  EDIR to be a useful utility. We welcome your
          suggestions to improve its capabilities.
               
               
               
          COPYRIGHT (C) 1986,1987 BY ROSE DEVELOPMENT
          ALL RIGHTS RESERVED













                                     ORDER FORM

	  Date:  ____________
          
          Qty.       Description            Unit Price       Extended Price
          ----       -----------            ----------       --------------
          
          ____       EDIR                     $30.00         ______________
          
                       IL residents add 7% sales tax         ______________
          
                                               Total         ______________
          
          Please print clearly:
          
          Name ____________________________________________________________
          
          Company _________________________________________________________
          
          Street Address __________________________________________________
          
          City/State _________________________________ Zip ________________
          
          Home Phone Number  (      )-__________-__________________________
          
          Bus. Phone Number  (      )-__________-__________________________
          
          Where will you be using this product?  ____ Home,  ____ Work
          
          Where did you hear about EDIR ___________________________________
          
          
          -----------------------------------------------------------------
          
          
          We would appreciate your response to the following questions.
          
          Your computer (make/model) ______________________________________
          
          Number of drives and type _______________________________________
          
          Display adapter and monitor _____________________________________
          
          Printer _________________________________________________________
          
          Other peripherals _______________________________________________
          
          We welcome  your comments  and suggestions about EDIR (please use
          other side if necessary):
          
          _________________________________________________________________
          
          _________________________________________________________________
          
          _________________________________________________________________
          
          
          Please mail this order form and your check to:
          
               Rose Development, P.O. Box 1906, Palatine, IL 60078.



```
{% endraw %}

## EDIR301.DOC

{% raw %}
```



            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                                        EDIR
                                          
                           A FULL SCREEN DIRECTORY EDITOR
                                          
                                    VERSION 3.01
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            COPYRIGHT (C) 1986,1987 BY ROSE DEVELOPMENT
            ALL RIGHTS RESERVED



















                                 TABLE OF CONTENTS
                                 -----------------
            
            LICENSE AGREEMENT......................................... 2
            INTRODUCTION.............................................. 3
            A SHORT COURSE ON MS-DOS DISK DIRECTORIES................. 5
            EDITING DIRECTORIES WITH EDIR............................. 6
                Installation.......................................... 6
                Getting Started....................................... 7
            EDIR COMMAND REFERENCE................................... 10
                Quick Summary........................................ 10
                PgUp................................................. 11
                PgDn................................................. 11
                Home................................................. 11
                End.................................................. 11
                Up-Arrow............................................. 11
                Down-Arrow........................................... 11
                Mark................................................. 11
                Unmark............................................... 11
                Cut.................................................. 12
                Paste................................................ 12
                Organize............................................. 12
                Sort................................................. 12
                Trim (compress) directory............................ 13
                Display paste or safe buffer......................... 13
                Edit individual directory entry...................... 14
                Perform DOS type operations.......................... 15
                Help................................................. 17
                Write directory to disk.............................. 17
                Quit to DOS.......................................... 17
            MISCELLANEOUS SUGGESTIONS AND USAGE TIPS................. 18
            EDIR 2.00 TO 3.00 CHANGES................................ 20
            































                         ROSE DEVELOPMENT LICENSE AGREEMENT
            
            
                 EDIR is  the copyrighted  property of Rose Development.
            It is  based on the concept of user supported software which
            is an  attempt to  provide software at a low cost to the end
            user.
                 
                 Version 1  is provided  to you  free of cost and may be
            copied and  shared freely,  provided that  it is distributed
            ONLY in  its original  unmodified form and no fee is charged
            for such distribution.
                 
                 Version 2 and later releases cannot be distributed. You
            can use these versions on a single machine and copy them for
            backup purposes only.
                 
                 The latest release of EDIR can be obtained by sending a
            nominal contribution  of $30 to Rose Development. Registered
            users will  be informed  about future  releases and  can get
            updates at a nominal charge.
                 
                 
            DISCLAIMER
                 
                 EDIR is  provided "as is" without warranty on any kind.
            In no  event will  Rose Development be liable to you for any
            damage, including  loss of  profits, savings,  data, time or
            other incidental or consequential damages arising due to use
            of this program.
                 
                 We have  tried  to  make  EDIR  as  "bullet  proof"  as
            possible. It  has been  tested on  several IBM PCs, XTs, ATs
            and  100%   compatibles  with  various  disk  configurations
            including double  sided/double density  drives, high density
            drives and  hard drives.  Unlike some  other  file  handling
            programs, EDIR can handle and distinguish between 12 bit and
            16 bit  FAT entries with equal convenience. It does not have
            any artificial  limits as imposed by some other programs. It
            has been  built with  extensive error handling from the very
            beginning. However, we do recommend you to test this program
            if you  have an  uncommon configuration. It is always a good
            idea to  have a  recent backup  of all your important disks.
            Please fill  out and mail your registration forms so that we
            can provide continued support for new and uncommon hardware.
                 
                 
            MINIMUM SYSTEM REQUIREMENTS
            IBM PC/XT/AT or 100% compatible
            MDA, CGA, EGA, Hercules Graphics or Compaq dual-mode adapter
            MS-DOS/PC-DOS version 2.00 or higher
            192K RAM
                 
            
            Rose Development
            P.O. Box 1906
            Palatine, IL 60078.


                                        - 2 -






                 
                                    INTRODUCTION
                 
                 EDIR is  a full screen directory editor that allows you
            unlimited flexibility in manipulating MS-DOS directories. It
            gives  you   full  control  over  the  order  in  which  the
            individual directory  entries will be stored on the disk. It
            can sort  directories by  filename, extension, date, size or
            any other  arbitrary order that may seem logical to you. For
            example, suppose  the DOS  'DIR' command  currently lists  a
            directory in the following order:
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            LIB          <DIR>     11-09-86   6:05p
            TEST1013 RES      324  10-13-86   8:54p
            HELP         <DIR>     11-09-86   6:10p
            TEST1009 RES      324  10-09-86  10:45a
            
                 EDIR lets  you change  this order  to your taste. A few
            possibilities are shown below:
                 
            1. Directories first, then files (in the desired order).
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            LIB          <DIR>     11-09-86   6:05p
            HELP         <DIR>     11-09-86   6:10p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST1013 RES      324  10-13-86   8:54p
            TEST1009 RES      324  10-09-86  10:45a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
                 
            2. Files  first, then  directories (in  the desired  order).
               Note that  . & .. entries must remain in place due to DOS
               requirements.
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            PRACTICE TXT     3140   9-10-85   6:36a
            TEST1013 RES      324  10-13-86   8:54p
            TEST1009 RES      324  10-09-86  10:45a
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            LIB          <DIR>     11-09-86   6:05p
            HELP         <DIR>     11-09-86   6:10p









                                        - 3 -






            3. Directories first, then files (in sorted order).
                 
            .            <DIR>     11-09-86   5:52p
            ..           <DIR>     11-09-86   5:52p
            HELP         <DIR>     11-09-86   6:10p
            LIB          <DIR>     11-09-86   6:05p
            TEST     DOC    12876  12-29-84  10:30p
            TEST     EXE     2409  12-29-84  10:25p
            TEST1009 RES      324  10-09-86  10:45a
            TEST1013 RES      324  10-13-86   8:54p
            PRACTICE TXT     3140   9-10-85   6:36a
                 
                 
                 In addition  to changing  the order  of  entries,  EDIR
            gives  you   number  of  other  facilities  to  manage  your
            directories. To  mention a  few, you  can change  filenames,
            file attributes, date and time stamps on files. You can also
            create,  copy,  delete,  move  and  view  files  in  a  very
            convenient manner.
                 
                 The power  of EDIR  comes from  the fact  that you  can
            manipulate the  directories  interactively.  It  is  a  full
            screen editor  designed to edit directories, very similar to
            the full screen editors designed to edit documents.
                 
                 This document  describes the use of EDIR to effectively
            organize your disk directories.
































                                        - 4 -






            
                                 A SHORT COURSE ON
                              MS-DOS DISK DIRECTORIES
                 
                 This  section  is  not  mandatory  reading,  but  would
            certainly help to better understand the operation of EDIR.
                 
                 MS-DOS can create two types of directories on disk. The
            root directory  has a  fixed size  and is always present. On
            the other  hand, subdirectories  have variable size and they
            may or  may not  be present. Subdirectories are allocated in
            units called  'clusters'. A  cluster is  simply a  group  of
            sectors. The  number of sectors in a cluster is fixed and is
            determined by  the type  of the  disk, e.g.  a  double-sided
            double-density disk  has 2  sectors/cluster whereas the high
            density diskette on a PC/AT has 1 sector/cluster.
                 
                 Information about  files  and  subdirectories  under  a
            certain directory is stored in directory entries. Each entry
            contains the  following information  about the corresponding
            file or  subdirectory: filename, extension, attributes, date
            and time of creation, starting cluster number and file size.
            Each directory  entry occupies  32 bytes on the disk. When a
            directory cluster  gets full  with entries,  new entries are
            added to the directory by assigning an unused cluster to the
            directory.
                 
                 A directory entry that has never been used has a hex 00
            as the  first character  of  its  filename.  DOS  deletes  a
            directory  entry  by  making  the  first  character  of  its
            filename a  hex E5.  Deleted entries  are not  listed by the
            'DIR' command.  Thus deleted entries create small "holes" in
            a directory.  When DOS needs to add a new directory entry to
            the directory,  it writes  over the  first available  "hole"
            (deleted entry),  if one  exists. That is why filenames seem
            to appear  at unexpected places when you create new files in
            a directory that has deleted entries in it.
                 
                 EDIR lets  you interactively  manipulate the  order  of
            directory entries  with the following restrictions which are
            necessary for the proper operation of DOS:
                 
            1. In  a system  disk (a  disk that has DOS on it) the first
               two files  in the  root  directory  must  be  IO.SYS  and
               MSDOS.SYS (IBMIO.COM  and IBMDOS.COM  in case of PC-DOS).
               EDIR will  not let  you move  these two  files.  It  will
               actually pull  out these two entries into a 'safe buffer'
               before letting you manipulate the directory entries. When
               writing the  directory back  to the disk, the two entries
               will be  inserted at the right place. The same holds good
               for the . & .. entries in a subdirectory.
                 
            2. DOS  assumes that  the never  used entries in a directory
               will always  be at  the end. So EDIR strips these entries
               before letting you manipulate the directory and reinserts
               them at  the right  place before  writing it  back to the
               disk.


                                        - 5 -






                 
                           EDITING DIRECTORIES WITH EDIR
                 
                 
            Installation
            
            EDIR version  3.01 distribution disk has the following files
            on it:
                 
                 EDIR301.EXE - EDIR program
                 EDIR301.DOC - This document
                 EL25.COM    - EGA utility (switch to 25 line mode)
                 EL43.COM    - EGA utility (switch to 43 line mode)
                 
            Copy EDIR301.EXE to a directory of your choice and rename it
            as EDIR.EXE.  Make sure  that the  directory where  you copy
            EDIR is in your DOS search path.
            
            If your  computer has  an EGA  adapter, you may also want to
            copy EL25.COM  and EL43.COM  to a  directory on  your  disk.
            These utilities  allow you to switch your display between 25
            and  43   line  modes  (see  "Miscellaneous  Suggestions..."
            section for more details). Again, make sure that these files
            are copied to a directory that is in your DOS search path.
            
            Example: If  you want  to set  up EDIR on your C: drive in a
            directory called  \UTIL, you would execute the following set
            of commands:
            
                 C> COPY A:\EDIR301.EXE C:\UTIL\EDIR.EXE
                 C> PATH=C:\UTIL
                 
            The PATH command can also be put in the AUTOEXEC.BAT file in
            the root  directory.  If  you  want  to  copy  the  two  EGA
            utilities to the C: drive, execute the following command:
                 
                 C> COPY A:\EL*.* C:\UTIL
                 
            Now you  are ready  to use EDIR. The next section provides a
            quick tutorial on EDIR.



















                                        - 6 -






                 
                                  Getting Started
            
            An editing  session with  EDIR  consists  of  the  following
            steps:
                 
            1. Go to the directory that you want to edit.
            2. Invoke EDIR.
            3. Manipulate directory entries using EDIR commands.
            4. Store the directory back to the disk using the EDIR write
               command.
                 
            To try  out some  of the  features of  EDIR, go  to a  large
            enough directory  (at least 30 entries) and invoke edir. For
            example, if  you want  to edit a directory called \DOC\MEMOS
            on the  C: drive, then execute the following set of commands
            (assume that your current default drive is A:)
            
                 A> C:
                 C> CD \DOC\MEMOS
                 C> EDIR
            
            EDIR comes  up with  a screenful  of directory entries and a
            main menu displaying the commands that are available to you.
            The screen format is as follows:
            
             _______________________________________________________
            |                                                       |
            | EDIR version no. & current directory name             |
            |_______________________________________________________|
            |                                                       |
            | Main menu                                             |
            |_______________________________________________________|
            |                                                       |
            |                                                       |
            |                                                       |
            | Directory entries (one per line)                      |
            |                                                       |
            |                                                       |
            |                                                       |
            |_______________________________________________________|
            |                                                       |
            | Message window                                        |
            |_______________________________________________________|
            
            Each directory  entry  contains  the  following  information
            about  the   file   or   directory:   filename,   extension,
            attributes, date  and time  of creation,  size and  starting
            cluster number.  The  file  attributes  have  the  following
            meaning:
            
            A  Archive - set whenever a file is modified
            D  Subdirectory
            V  Volume label
            S  System file
            H  Hidden file
            R  Read-only file


                                        - 7 -






            An entry  that has  been deleted  is shown  with a  ? as the
            first character of its filename.
            
            The entry  at which  the cursor  is  placed  is  called  the
            "Current Entry". The current entry can be changed by the up-
            arrow and  down-arrow keys  on your  keyboard. You  can page
            through the directory rapidly using the 'Page-Up' and 'Page-
            Down' keys.  Also, you  can get  to the  top or  bottom of a
            directory very  quickly using the 'Home' and 'End' keys. Try
            using these  keys  to  view  various  parts  of  the  target
            directory.
            
            The entries  you are  looking at  are in  the main buffer of
            EDIR. EDIR  also has  a paste  buffer which  is  useful  for
            moving entries  within the  main buffer. Let's try this with
            an example.  Bring the  cursor to  an entry that you want to
            move. Press 'C' (CUT) on your keyboard. The entry pointed by
            the cursor  is deleted from the main buffer and is placed in
            the paste  buffer. Let  us look at the contents of the paste
            buffer now. To do this press 'D' (DISPLAY). The menu changes
            to a  'Lotus' style menu, which gives you two choices: Paste
            and Safe.  The choice 'Paste' is initially highlighted and a
            description of  this choice  is displayed  on the  following
            line. You  can change  the highlight  to appear on 'Safe' by
            pressing the  right arrow  key or by typing the first letter
            of the  word 'Safe', i.e. 'S'. All the multiple choice menus
            within EDIR work the same way. For now, set the highlight to
            'Paste' and select it by pressing the <Enter> key. The paste
            buffer is now shown  on the screen. It has only one entry at
            this time  - the  entry that  you had cut earlier. Press any
            key to get back to the main buffer. Now move the cursor to a
            point where  you want  to insert  the entry  that is  in the
            paste buffer. Press 'P' (PASTE) and the paste buffer will be
            inserted BEFORE the entry pointed by the cursor.
            
            If more than one entries are cut before pasting them back to
            the main  buffer, then they are appended to the paste buffer
            (as opposed  to overwriting  the paste  buffer). So  if  you
            wanted to group the 3rd, 14th & 22nd entries in a directory,
            you would  first cut  them into  the paste  buffer using the
            'CUT' command three times and then paste them at the desired
            location in  the main buffer using a single 'PASTE' command.
            Try this sequence and watch the contents of the paste buffer
            as you progress.
            
            Now try  some sorting  capabilities of  EDIR. EDIR  can sort
            directories by filename, extension, file size or date & time
            of creation.  To see  how sort works, press 'S' (SORT). EDIR
            prompts you  to select the primary key for sorting and gives
            you a  menu to  choose from.  Select 'Extension' to sort the
            directory by  file extension. Now you are prompted to select
            the secondary  key. What  does that mean? Well, if two files
            happen to  have the  same primary  key, then  sort uses  the
            secondary  key   to  resolve  their  order.  Let  us  choose
            'Filename' as  the secondary  key. Now  EDIR asks you if you
            want the  result in  ascending or  descending order.  Select
            'Ascending'  for  right  now.  As  soon  as  you  make  this


                                        - 8 -






            selection,  EDIR  sorts  the  directory  according  to  your
            specifications and  displays the  result. Page  through  the
            directory to confirm the results.
            
            Now if  you want  to save this edited directory on the disk,
            simply press  'W' (WRITE),  otherwise press 'Q' (QUIT). EDIR
            will ask  for your  confirmation in  each case.  In case  of
            'Write', the  directory will  be saved  on the disk and EDIR
            will return  to the main menu waiting for more commands. You
            may then type 'Q' (QUIT) to leave EDIR and return to DOS.
            
            By now you should have a good working knowledge of EDIR and
            you should be able to explore the remaining functions simply
            by reading the next chapter - EDIR COMMAND REFERENCE. A
            short online help screen is available when you are using
            EDIR. To display this help screen, simply press 'H' (HELP).











































                                        - 9 -






            
                               EDIR COMMAND REFERENCE
                 
                 
            Quick Summary:
            
            KEY            COMMAND DESCRIPTION
            
            <PgUp>:        Scroll page up
            <PgDn>:        Scroll page down
            <Home>:        Go to top of directory
            <End>:         Go to bottom of directory
            <Up-Arrow>:    Cursor up
            <Down-Arrow>:  Cursor down
            M:             Mark
            U:             Unmark
            C:             Cut
            P:             Paste
            O:             Organize (files/dirs/deleted entries)
            S:             Sort
            T:             Trim (compress) directory
            D:             Display paste or safe buffer
            E:             Edit entry pointed by cursor
            /:             Perform DOS type operations
            H:             Help
            W:             Write
            Q:             Quit
































                                       - 10 -






            
            <PgUp>: Scroll page up
            <PgDn>: Scroll page down
                 These keys are used to scroll through the directory one
                 page at  a time. When the top (bottom) of the directory
                 is reached, you cannot scroll up (down) any more.
                 
                 
            <Home>: Go to top of directory
            <End>:  Go to bottom of directory
                 These keys  are used  to reach the top or bottom of the
                 directory with just one keystroke.
                 
                 
            <Up-Arrow>:   Cursor up
            <Down-Arrow>: Cursor down
                 These keys  are used  to move  in the  main buffer  one
                 entry at a time. When the top (bottom) of the directory
                 is reached, you cannot move up (down) any more.
                 
                 
            M: Mark
            U: Unmark
                 MARK  is  used  to  group  a  certain  section  of  the
                 directory. Once  a section is marked, the CUT, SORT and
                 certain  DOS   commands  operate  only  on  the  marked
                 section. UNMARK is used to ungroup the marked section.
                 
                 To mark  a certain  section of the directory, go to the
                 first directory  entry of the section and press the 'M'
                 key. The  current entry  will be  highlighted. Now move
                 the cursor  to the   last  entry   in the section using
                 <Pg-Up>, <Pg-Down>,  <Home>,  <End>,  <Up-Arrow>    and
                 <Down-Arrow>  keys.   The   whole   section   will   be
                 highlighted as  you move  the cursor to the last entry.
                 Also, if  you want, you can start your marking from the
                 last entry  of the  section and work your way backwards
                 towards the first entry.
                 
                 Now that you have marked a particular section, what can
                 you do  with it?  Well, you could cut the whole section
                 using the  CUT command  and  append  it  to  the  paste
                 buffer. This  is much  easier than  cutting  individual
                 entries one at a time.
                 
                 Something else  you can  do with a marked section is to
                 sort it.  When you use the SORT command after marking a
                 section,  the  command  operates  only  on  the  marked
                 section and leaves the rest of the directory untouched.
                 Even after  the sort  is completed  the section is kept
                 marked for  you to  observe the  result and perform any
                 further operations  on the  section (for  example, more
                 sorts, or  CUT, or  even expand  or shrink  the section
                 using the cursor control keys).
                 
                 Entries in a marked section can also be copied or moved
                 to to  a different  directory as a group. They can also


                                       - 11 -






                 be deleted  as a  group. See  the  section  '/DOS'  for
                 performing these operation on marked sections.
                 
                 Whenever you  want to  unmark a  marked  section,  just
                 press 'U' (Unmark).
            
            
            C: Cut
            P: Paste
                 The CUT command cuts the directory entry pointed by the
                 cursor and  appends it to the paste buffer. If there is
                 a  marked  section  within  the  directory,  the  whole
                 section is  cut and  appended to  the paste buffer. The
                 contents of  the paste  buffer can  be observed  at any
                 time using  the  DISPLAY  command.  The  PASTE  command
                 inserts the  contents of  the paste  buffer BEFORE  the
                 current entry in the main buffer.
                 
                 
            O: Organize
                 The ORGANIZE function rearranges the main buffer in the
                 following order:  files, directories,  deleted entries.
                 This command  is  useful  to  separate  out  files  and
                 directories into  separate groups.  It also  places the
                 deleted entries  at the  bottom, thus combining all the
                 small "holes" into a big one. This ensures that all the
                 new files created in the future will be appended at the
                 end of  the directory  instead of  creeping up randomly
                 within  the   directory.  If   you  do   not  like  the
                 files/directories/deleted  entries   order   for   some
                 reason, you  can easily  reorder the entries by doing a
                 block CUT and PASTE.
                 
                 Note that  the organize  command operates  on the  main
                 buffer only.  So if  you have  any entries in the paste
                 buffer and  want them to be part of the reorganization,
                 you must first paste them into the main buffer.
                 
                 
            S: Sort
                 This command  is used  to sort the directory entries in
                 the main  buffer. If  there is  no marked section, then
                 the complete  main buffer is sorted, otherwise only the
                 marked section is sorted.
                 
                 The  sort   command  prompts   for  three   pieces   of
                 information: the primary key, the secondary key and the
                 sorting  order.  It  then  goes  ahead  and  sorts  the
                 directory entries  in the specified order (ascending or
                 descending) based  on the  primary key.  If the primary
                 keys for  two entries  are the same, then the secondary
                 key is used to make sorting decisions.
                 
                 Note that  the SORT command operates on the main buffer
                 only. So  if you  have any  entries in the paste buffer
                 and want  them to  be part  of the sort, you must first
                 paste them into the main buffer.


                                       - 12 -






            T: Trim (compress) directory
                 This function  will compress  a  directory  into  fewer
                 clusters if  possible, freeing  up valuable disk space.
                 The idea behind the TRIM function is as follows:
                 
                 To add new entries to a directory that is already full,
                 DOS assigns  an unused  cluster to that directory. Thus
                 DOS provides the basic mechanism to expand a directory.
                 However,  DOS   lacks  the  capability  to  compress  a
                 directory  which   is  essential   to  reclaim   unused
                 clusters.  As  an  example,  consider  a  disk  with  2
                 sectors/cluster  (i.e.  1024  bytes/cluster).  So  each
                 cluster  can  accommodate  32  directory  entries.  Now
                 consider a  directory that  has one cluster and is full
                 with 32  entries. Suppose you create a new file in this
                 directory. To  add this  33rd entry into the directory,
                 DOS assigns  an unused  cluster to  the  directory  and
                 writes the  new entry  as the  first entry  in the  new
                 cluster.  Now   if  you   delete  ANY  entry  from  the
                 directory,  there  are  only  32  valid  entries  left.
                 Theoretically, these  32 entries  should fit  into  one
                 cluster. But  DOS does  not pack these entries into one
                 cluster to  free up  the other  cluster. TRIM  function
                 does exactly that.
                 
                 When you  invoke the  TRIM function,  EDIR will ask you
                 for a  confirmation. If you say yes, EDIR will pack the
                 directory into  fewer clusters  if  possible  and  will
                 display the  number of  clusters  that  will  be  freed
                 during a  write to  the disk.  This feature may be very
                 useful when  you are trying to fit those last few bytes
                 on a disk.
                 
                 Note that  TRIM internally  uses the  ORGANIZE function
                 and  so   the  directory  will  be  rearranged  in  the
                 files/directories/deleted entries  order every time you
                 use  the   TRIM  function.  Also  note  that  the  root
                 directory cannot be trimmed because it has a fixed size
                 as defined  by  DOS.  If  you  try  to  trim  the  root
                 directory, EDIR will display an error message.
                 
                 
            D: Display paste or safe buffer
                 Paste buffer  is an  area where  EDIR keeps the entries
                 you have cut from the main buffer. Safe buffer contains
                 entries that  must not  be moved  from  their  original
                 locations, e.g.  the  DOS  system  files  in  the  root
                 directory and  the .  & .. entries in any subdirectory.
                 When you  invoke the  DISPLAY function, EDIR first asks
                 you which  one of  the two  buffers you  want  to  see.
                 Depending on  your choice, it displays either the paste
                 or the safe buffer.







                                       - 13 -






            E: Edit individual directory entry
                 This function  will let you edit the directory entry at
                 the current  cursor location.  When you type 'E' (Edit)
                 from the main menu, a 'Lotus' style menu appears giving
                 you the  following options:  Filename, Archive, System,
                 Hidden, Read, Date, Time, Erase, Divider, Quit. You can
                 choose the desired option, and change the corresponding
                 field in  the directory  entry. You  will remain in the
                 EDIT menu  until you  choose Quit to return to the main
                 menu. The  various options  available in  the EDIT menu
                 are explained below:
                 
                 Filename:
                   This option  allows you  to change  the filename  (or
                   directory name)  of the  current entry.  When you are
                   prompted for  the new  filename, type  in the a valid
                   filename and  hit <Enter>.  Incidentally, this option
                   allows you  to have  multiple  files  with  the  same
                   filename. This feature could be used, for example, to
                   imbed logical  dividers (such as --------.---) within
                   your directory. It should be noted that EDIR does not
                   allow you to change filenames of deleted entries.
                   
                 Archive, System, Hidden, Read:
                   These four  options allow  you  to  change  the  file
                   attributes for the current directory entry. All these
                   options act  as toggles  and turn  the  corresponding
                   attributes on or off.
                   
                 Date:
                   This option  allows you  to change  the date stamp on
                   the current  directory entry.  EDIR  prompts  you  to
                   enter a  date in  the MM:DD:YY format. If the date is
                   valid  then  the  corresponding  directory  entry  is
                   updated. The  two character  year field allows you to
                   enter a year between 1980 and 2079.
                   
                 Time:
                   This option  allows you  to change  the time stamp on
                   the current  directory entry.  EDIR  prompts  you  to
                   enter the new time in 24 hour format (HH:MM:SS). Note
                   that DOS  allows only  even number  of seconds  to be
                   stored  in  directory  entries.  So  if  you  entered
                   14:24:57, this would be stored as 14:24:56.
                   
                 Erase:
                   This option  works on deleted entries only. It allows
                   you  to   wipe  out  the  deleted  entry  completely,
                   converting it  to a  never used entry. The never used
                   entry has zeros in all its fields. It is removed from
                   the main  buffer and  appended to  other  never  used
                   entries at the bottom of the directory.
                 
                 Divider:
                   This option  works on non-deleted entries only. It is
                   a special case of the Filename option described above
                   and changes   the filename of  the current entry to a


                                       - 14 -






                   (--------.---). This  option is very useful to divide
                   long directories  into logical sections. This feature
                   is intended  to be used as follows: Say you need five
                   dividers  located   strategically    in  the  current
                   directory. You  must first  create five  empty  files
                   using the  '/DOS Creat'  function. Now you can change
                   the filenames  of these  files to  dividers using the
                   Divider function.  Then you  must cut and paste these
                   dividers at desired spots one by one.
                   
                 Quit:
                   This option takes you back to the main menu.
                   
                   
            /: Perform DOS type operations
                 This function  gives you several DOS type capabilities,
                 except that  it is  more interactive  and convenient as
                 compared to DOS.
                 
                 NOTE: Some of the options under this function, by their
                 very definition,  operate directly  on the disk instead
                 of the  main buffer.  The revised copy of the directory
                 is then  read from  the disk.  So any  changes that you
                 have made  in the  main buffer  are lost. These options
                 are called instantaneous options (as opposed to delayed
                 options that  are written  to disk  only during a WRITE
                 function). Hence you must save your edited buffer on to
                 the disk   before  you  use  any  instantaneous  option
                 (unless your  intention is to trash all the changes). A
                 reminder to  this effect  is given  by placing  an  (I)
                 beside every instantaneous option on the /DOS menu. The
                 list of instantaneous options is as follows:
                 
                   Delete, Move, Creat, Mkdir, Rmdir, Chdir
                   
                 The various  options available  in the  /DOS  menu  are
                 explained below:
                 
                 
                 Type:
                   This option  allows you  view the file pointed by the
                   cursor. You  can view  the whole  file a  screen at a
                   time or  you can  abort in the middle by pressing the
                   <F1> key.
                   
                 Copy:
                   This option  allows you  to copy one or more files to
                   another directory  or disk.  If  there  is  a  marked
                   region in  the main buffer, then all the files in the
                   marked region  will be  copied,  otherwise  only  the
                   current entry  will be  copied. EDIR  will prompt you
                   for the  name of  the target  directory.  The  target
                   directory could  be on  a drive  different  from  the
                   current drive  and in  that case you must include the
                   drive letter in the target pathname.




                                       - 15 -






                 Delete (Instantaneous):
                   This option  allows you  to delete  one or more files
                   from the  current directory.  If there  is  a  marked
                   region in  the main buffer, then all the files in the
                   marked region  will be  deleted, otherwise  only  the
                   current entry will be deleted.
                 
                 Move (Instantaneous):
                   This option  allows you  to move one or more files to
                   another directory  on the  same disk.  If there  is a
                   marked region  in the main buffer, then all the files
                   in the  marked region  will be  moved, otherwise only
                   the current entry will be moved. EDIR will prompt you
                   for the name of the target directory.
                   
                   Moving files  from one  directory to  another is much
                   faster  than   first  copying   them  to  the  target
                   directory and  then deleting  them from  the  current
                   directory. In  the former  case, the  files  are  not
                   physically moved  on the  disk, only  their directory
                   entries are.  This makes  the move  faster  than  the
                   copy/delete combination.
                   
                 Creat (Instantaneous):
                   This option  allows you  to create  one or more empty
                   files of  length zero.  This feature  may be  used in
                   conjunction  with  'Edit  Divider'  to  create  dummy
                   dividers in  a directory.  See the  'Divider' section
                   for more information on dividers.
                   
                   When you  choose this  option, EDIR  prompts  you  to
                   supply a  two character  prefix for  the zero  length
                   files. Then  it asks  you for the number of files you
                   want to  create. It  then goes  ahead and creates the
                   required number of files.
                   
                   The files  created by  this option  have a three part
                   filename:
                   
                       two character prefix supplied by you
                     + one character in the range 0,A-Z
                     + five characters derived from DOS process name
                   
                   This scheme  has been  devised to  easily create  new
                   files with  unique filenames.  Because of  the  0,A-Z
                   range the maximum number of files that can be created
                   with the same two character prefix is 27.
                 
                 Mkdir (Instantaneous):
                   This option  allows you  to create a new directory on
                   any drive.  EDIR will  prompt you for the pathname of
                   the directory  you want  to create.  If the directory
                   has to  be created  on a  drive  different  from  the
                   current drive,  you must  include the drive letter as
                   part of the pathname.




                                       - 16 -






                 Rmdir (Instantaneous):
                   This  option   allows  you   to  remove  an  existing
                   directory from  any drive.  EDIR will  prompt you for
                   the  pathname   of  the   target  directory.  If  the
                   directory is  on a  drive different  from the current
                   drive, you  must include  the drive letter as part of
                   the pathname.
                 
                 Chdir (Instantaneous):
                   This  option   allows  you   to  change  the  current
                   directory or  the current drive. EDIR will prompt you
                   for the  pathname of  the target  directory.  If  the
                   directory is  on a  drive different  from the current
                   drive, you  must include  the drive letter as part of
                   the pathname.  If all you want to do is to change the
                   default drive,  simply enter the letter of the target
                   drive followed  by a  colon,  e.g.  'B:'.  After  you
                   specify the  target pathname,  edir will  change  the
                   default drive and directory to that pathname and read
                   that directory  into the  main buffer - ready for you
                   to edit.
                   
                 Quit:
                   This option takes you back to the main menu.
                   
                   
            H: Help
                 This command displays a help screen for EDIR commands.
                 
                 
            W: Write directory to disk
                 This function  writes the  edited directory back to the
                 disk. If  there are  any entries  in the  paste buffer,
                 they will  be automatically pasted into the main buffer
                 before the  write. The  WRITE  command  asks  for  your
                 confirmation before  proceeding. After writing to disk,
                 EDIR reads  a fresh  copy of  the current directory and
                 displays it on the screen, ready for further editing.
                 
                 
            Q: Quit to DOS
                 This command  gets you  out of EDIR and back to DOS. It
                 asks for  your confirmation before quitting. The edited
                 copy of  the directory is NOT saved on the disk - to do
                 that you must first WRITE and then QUIT.














                                       - 17 -






                      MISCELLANEOUS SUGGESTIONS AND USAGE TIPS
                 
                 
            1. EDIR  presents you  with a 'Lotus' style menu for several
               functions. If  for some  reason, you  would like to abort
               the function, you can either choose the 'Quit' or 'Abort'
               type options  or you can simply press <Esc> to get out of
               the current function.
                 
            2. Whenever  EDIR asks  you  to  type  a  string  (filename,
               pathname  or  number  etc.),  you  have  several  editing
               functions available  to you  before you  hit  <Enter>  to
               submit your  input to EDIR. The left and right arrow keys
               can be  used to  move through  the string. The delete and
               backspace keys have their usual meaning. The <Insert> key
               will toggle  the insert  mode on  and off.  The <Esc> key
               will completely erase what you have typed.
            
            3. Whenever EDIR prompts you for a pathname, you can enter a
               pathname as  per DOS  conventions. Relative  and absolute
               pathnames are  allowed. If the pathname is intended for a
               specific drive, then the drive letter must be included as
               part of  the pathname.  If the pathname contains only the
               drive letter  followed by  a colon,  it is interpreted as
               the  current  directory  on  the  specified  drive.  Some
               examples of valid pathnames are as follows:
            
                   .                (current directory)
                   ..               (parent directory)
                   D:               (current directory on D: drive)
                   BUDGET\Y1987
                   \LOTUS\WKS
                   A:MISC\LETTERS
                   C:\DBASE\APP
                   
            4. EDIR  is an  "EGA-aware"  program  (EGA  stands  for  the
               Enhanced Graphics  Adapter for  the IBM PC). It will make
               use of the current EGA mode to utilize the full screen of
               your  display.  For  example,  if  your  EGA  adapter  is
               currently in  the 43  line mode,  EDIR  will  expand  its
               display to  43 lines.  This gives you the ability to look
               at more  entries per  screen. We have provided two simple
               utilities to  change the  number of  lines  on  your  EGA
               screen. EL43.COM  will change  your screen to accommodate
               43 lines,  whereas EL25.COM  will switch  you back  to 25
               line mode.  So, if  you want  to use  EDIR in the 43 line
               mode on  your computer,  you  would  type  the  following
               commands:
            
                   A> EL43
                   A> EDIR








                                       - 18 -






            5. If  you want  to do  some common  operation on a bunch of
               scattered files in a directory, it is faster if you first
               collect them  in  one  place  using  the  CUT  and  PASTE
               functions. Then  you can  mark all  these files using the
               MARK function  and operate  on them  as a  group. A  good
               example for  this would be if you want to copy a bunch of
               files that are scattered all over the directory.
            
            6. EDIR  can be  used in  conjunction with  a backup program
               (like DOS  Backup or  Fastback)  to  optimize  hard  disk
               performance.  EDIR   allows  you   can  organize  various
               directories so that frequently used files and directories
               can be  placed near  the top of a directory. This reduces
               the search  time for  DOS to  locate the  frequently used
               directory entries.  Further efficiency can be obtained by
               backing up  the whole  disk, reformatting  it,  and  then
               restoring the  complete file  system. This procedure will
               repack non-contiguous files into contiguous sectors, thus
               minimizing head  movement when  they are  accessed.  Note
               that  this  scheme  will  work  only  with  those  backup
               programs that backup and restore one file at a time. Some
               backup programs make a sector-by-sector image of the disk
               during backup and that does not help packing of the files
               during a restore.



































                                       - 19 -






                 
                             EDIR 2.00 TO 3.00 CHANGES
                 
                 
            1. EDIR  no longer  requires the  use of ANSI.SYS driver. It
               does its  own screen  handling and hence the installation
               and operation of this version are much more simpler.
            
            2. The syntax for invoking EDIR has been changed. You can no
               longer specify  a target  directory on  the command line.
               Instead you  can change  to a  different  directory  from
               within EDIR.  In version  3, EDIR  starts by  reading the
               default directory on the default drive.
            
            3. The  user interface  is upward  compatible with ver. 2.00
               with the  addition of  more commands, 'Lotus' style menus
               and much better looking screens.
            
            4. The  ability to  edit an  individual directory  entry has
               been  added.   This  allows   changing  of   file  names,
               attributes, date and time stamps etc.
            
            5. Deleted directory entries can be completely wiped out.
            
            6. A  whole set of DOS type functions has  been added (copy,
               delete, move etc.) for convenient handling of directories
               from within EDIR.
            
            7. Directory  sorts now  allow you  to specify  primary  and
               secondary keys as well as the sorting order.
            
            8. EDIR can now utilize the EGA adapter more effectively. It
               "senses" the  number of  lines on the display and adjusts
               itself to occupy the full screen.

























                                       - 20 -



```
{% endraw %}

## FILES915.TXT

{% raw %}
```
Disk No:  915
Program Title: EDIR version 1.301
PC-SIG version: 1.1

EDIR lets you manipulate MS-DOS directories in a full-screen editor.
The program gives you full control over the order in which the
individual directory entries are stored on disk.  It can sort
directories by filename, extension, date, size, or any other arbitrary
order.  EDIR gives you a number of other facilities to manage your
directories: change filenames, file attributes, date and time stamps on
files.  You can also create, copy, delete, move, and view files in a
convenient manner.

Usage:  Full Screen Directory Editor.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

EDIR1301 ARC  EDIR archive file.
EDIR1301 DOC  Documentation on EDIR version 1.301.
EDIR1301 EXE  The EDIR main program.
EDIR301  DOC  Documentation on EDIR version 3.01.
EL25     COM  EGA utility: 25 lines display.
EL43     COM  EGA utility: 43 lines display.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0915

     Volume in drive A has no label
     Directory of A:\

    EDIR1301 ARC     92959   7-01-87   5:00p
    EDIR1301 DOC      5105   7-01-87   5:00p
    EDIR1301 EXE     84455   7-01-87   5:00p
    EDIR301  DOC     54938   7-01-87   5:00p
    EL25     COM       108   7-01-87   5:00p
    EL43     COM       108   7-01-87   5:00p
    FILES915 TXT      1125   3-14-89   3:25p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   3-08-89   4:03p
    MANUAL   BAT       147   3-02-89  10:00a
           10 file(s)     239600 bytes
                           76800 bytes free
