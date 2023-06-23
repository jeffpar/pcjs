---
layout: page
title: "PC-SIG Diskette Library (Disk #1464)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1464/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1464"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "P-CEM"

    P-CEM is a program that displays the current directory and allows you
    to execute several DOS commands at the touch of a key. It simplifies
    complicated file and directory usage that would be more complicated
    using just the DOS command line.
    
    With P-CEM you can use the cursor pad to select a file from the
    directory, and press a single key to copy, delete, rename, execute,
    view, print or wipe that file. Encrypt and decrypt files, and change
    file attributes. P-CEM can switch between directories and allows you
    to create and delete directories. For other operations, you may
    temporarily shell to DOS and immediately return to the program.
    
    Additional utilities are included. COLOR is a program that allows you
    to change the border color on a CGA monitor, and CURSOR will allow you
    to change the size of the cursor so that it can be located on the
    screen more easily. DISKINFO will state what free space is available
    on a disk, and MEMORY will display your total computer memory and
    currently available memory. READSECT will allow you to view any disk
    sector. (This is useful for looking at the "raw" data of a program or
    finding a lost file.) SYSINFO will display general system
    information of your computer configuration, and REBOOT will reboot your
    computer (same as Ctrl-Alt-Del). REBOOT is a useful program if it
    becomes necessary to reboot the computer in a batch file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLOR.DOC

{% raw %}
```


       COLOR.EXE enables you to change the color of the border around
       the text area (for Color Monitor only). From DOS command line,
       enter:
               COLOR <palette number>

       where <palette number> is one of these values:

               0    -    Black
               1    -    Blue
               2    -    Green
               3    -    Cyan (blue-green)
               4    -    Red
               5    -    Magenta
               6    -    Brown (or dark yellow)
               7    -    Light Grey (or normal white)
               8    -    Dark Grey
               9    -    Light Blue
              10    -    Light Green
              11    -    Light Cyan
              12    -    Light Red
              13    -    Light Magenta
              14    -    Yellow (or light yellow)
              15    -    Bright White


```
{% endraw %}

## CURSOR.DOC

{% raw %}
```


       The standard cursor normally appears as one or two blinking
       scan lines at the bottom of a character display position.
       CURSOR.EXE is a utility to change this default size by
       redefining the number of lines that are displayed. From DOS
       command line, enter:

               CURSOR <Top> <Bottom>

       where <Top> and <Bottom> are the scan line number. 0 to 7 for
       CGA; 0 to 13 for Monochrome Adapter. The default cursor setting
       is:
               Top =  6,   Bottom =  7     -  for CGA
               Top = 11,   Bottom = 12     -  for Monochrome Adapter


```
{% endraw %}

## FILE1464.TXT

{% raw %}
```
Disk No: 1464
Program Title: P-CEM
PC-SIG version: 1

P-CEM is a program that displays the current directory and allows you to
execute several DOS commands at the touch of a key.  P-CEM simplifies
file and directory usage that would otherwise be more complicated using
just the DOS command line, plus has some additional features.  With
P-CEM you can use the cursor pad to select a file from the directory,
and then you may press a single key to copy, delete, rename, execute,
view, print or wipe that file.  You may also encrypt and decrypt files,
and change file attributes.  P-CEM can switch between directories, and
allows you to create and delete directories.  For other operations you
may temporarily shell to DOS, and immediately return to the program.

This disk also has other utilities in addition to P-CEM.  COLOR is a
program that allows you to change the border color on a CGA moniter, and
CURSOR will allow you to change the size of the cursor so that it can be
located on the screen more easily.  DISKINFO will state what free space
is available on a disk, and MEMORY will display your total computer
memory and currently available memory.  READSECT will allow you to view
any disk sector.  This is useful for looking at the "raw" data of a
program or finding a lost file.  SYSINFO will display general system
information of your computer configuration, and REBOOT will reboot your
computer (same as CTRL-ALT-DEL).  REBOOT is a useful program if it
becomes necessary to reboot the computer in a batch file.

Usage:  DOS Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter)

Suggested Registration:  $9.95

File Descriptions:

README        Instructions for starting the program.
MP-CEM   BAT  Batch file to execute P-CEM for monochrome moniter.
PRINTDOC BAT  Prints the documention for P-CEM.
COLOR    DOC  Documentation for COLOR.
CURSOR   DOC  Documentation for CURSOR.
P-CEM    DOC  Documentation for P-CEM.
READSECT DOC  Documentation for READSECT.
COLOR    EXE  COLOR, main program.
CURSOR   EXE  CURSOR, main program.
DISKINFO EXE  DISKINFO, main program.
MEMORY   EXE  MEMORY, main program.
P-CEM    EXE  P-CEM, main program.
READSECT EXE  READSECT, main program.
REBOOT   EXE  REBOOT, main program.
SYSINFO  EXE  SYSINFO, main program.
P-CEM    HLP  Help file for P-CEM

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No 1464 P-CEM  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║To look at information on how to run the program, type VIEW (press enter)║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## P-CEM.DOC

{% raw %}
```






                                        P-CEM
                                 (DOS Shell Utility)
                                     Version 1.2

                           for the IBM PC and Compatibles
                                (12th. January 1989)


                                         by


                              Mohamad Suhor Abd Ghafor,
                                P.O.Box 955, Toowong,
                                Qld., Australia 4066.



                                  Table of Contents
                                  -----------------

          1.   WHAT IS P-CEM . . . . . . . . . . . . . . . . . . . . . .   2
          2.   SYSTEM REQUIREMENTS . . . . . . . . . . . . . . . . . . .   2
          3.   HOW TO START  . . . . . . . . . . . . . . . . . . . . . .   2
          4.   DOS FUNCTIONS . . . . . . . . . . . . . . . . . . . . . .   3
                    ATTRIB . . . . . . . . . . . . . . . . . . . . . . .   3
                    COPY . . . . . . . . . . . . . . . . . . . . . . . .   3
                    DELETE . . . . . . . . . . . . . . . . . . . . . . .   3
                    VIEW . . . . . . . . . . . . . . . . . . . . . . . .   3
                    WIPE . . . . . . . . . . . . . . . . . . . . . . . .   3
                    EXECUTE  . . . . . . . . . . . . . . . . . . . . . .   3
                    PRINT  . . . . . . . . . . . . . . . . . . . . . . .   3
                    ENCRYPT  . . . . . . . . . . . . . . . . . . . . . .   4
                    DECRYPT  . . . . . . . . . . . . . . . . . . . . . .   4
                    RENAME . . . . . . . . . . . . . . . . . . . . . . .   4
                    CHDIR  . . . . . . . . . . . . . . . . . . . . . . .   4
                    MKDIR  . . . . . . . . . . . . . . . . . . . . . . .   4
                    RMDIR  . . . . . . . . . . . . . . . . . . . . . . .   4
          5.   OTHER SERVICES  . . . . . . . . . . . . . . . . . . . . .   4
                    PRINTLIST  . . . . . . . . . . . . . . . . . . . . .   4
                    DOSSHELL . . . . . . . . . . . . . . . . . . . . . .   4
                    HELP . . . . . . . . . . . . . . . . . . . . . . . .   5
                    SORT . . . . . . . . . . . . . . . . . . . . . . . .   5
                    PATH . . . . . . . . . . . . . . . . . . . . . . . .   5
                    ALT-DISPLAY  . . . . . . . . . . . . . . . . . . . .   5
                    CONFIG . . . . . . . . . . . . . . . . . . . . . . .   5
                    <ESC>  . . . . . . . . . . . . . . . . . . . . . . .   5
                    <ENTER>  . . . . . . . . . . . . . . . . . . . . . .   5
                    QUIT . . . . . . . . . . . . . . . . . . . . . . . .   6
          6.   DISCLAIMER  . . . . . . . . . . . . . . . . . . . . . . .   6
          7.   USER-SUPPORTED SOFTWARE . . . . . . . . . . . . . . . . .   6





                                                                           2

          1.   WHAT IS P-CEM
          ------------------

               P-CEM is a DOS Shell Utility designed to work on an IBM PC or
          compatibles  with  a  Monochrome  or  Color  Graphics  Adapter  or
          Enhanced Graphics Adapter installed.

               Using this utility, you can perform most of the DOS functions
          from a new user friendly environment. It also helps you  with your
          file and directory management tasks. By pressing a few keystrokes,
          you can perform most of the DOS operations on individual or groups
          of files (e.g. to copy, delete, execute, view, encrypt or print).




          2.   SYSTEM REQUIREMENTS
          ------------------------

               *    IBM PC, PC/XT or PC compatibles with a minimum of 128 Kb
                    of memory.
               *    One diskette drive.
               *    Color Graphics  Adapter,  Enhanced  Graphics  Adapter or
                    Monochrome Adapter.
               *    Color or Monochrome monitor.
               *    DOS Version 2.0 or higher.




          3.   HOW TO START
          -----------------

               At the DOS command line, type

                    P-CEM     and press <ENTER>.

               If  your  system  has  Color  Graphics Adapter but Monochrome
          monitor, type

                    P-CEM 1m  and press <ENTER>.

               After the program has been loaded into memory, you can remove
          the distribution  diskette and run other programs from P-Cem or do
          some other DOS functions. 

               Use the arrow keys to move  the cursor  bar. Place  it on the
          file  that  you  want  to  work  with and choose from the menu the
          desired service. There are two menus to choose  from, and  you can
          use  <ESC>  key  to  switch  between  these  menus.  Pressing  the
          highlighted letters will activate that service.





                                                                           3

          4.   DOS FUNCTIONS
          ------------------

               P-Cem version 1.2  provides  you  the  following  services to
          simulate the DOS functions:

               ATTRIB:   Change file attribute.
                         When DOS creates a file, it assigns an attribute to
                         the file. These are  the  attributes  that  you can
                         change using P-Cem's ATTRIB service:

                         Read-Only -    A   file   marked  as  read-only  is
                                        protected  from   being  changed  or
                                        deleted  by  any DOS operation. (For
                                        some  reasons,  P-Cem  cannot access
                                        files  which  have been marked read-
                                        only)
                         Hidden    -    Files  marked  as  hidden  cannot be
                                        seen  by  ordinary  DOS  operations,
                                        such as the DIR and TYPE commands.
                         System    -    This  attribute  indicates  that the
                                        file  is  a  system  file,  such  as
                                        IBMBIO.COM and IBMDOS.COM (or IO.SYS
                                        and MSDOS.SYS).
                         Archive   -    This attribute is used by DOS BACKUP
                                        program.

               COPY:     Copy file to another disk or drive.
                         This is the same as DOS COPY command. 

               DELETE:   Delete file.
                         This is the same as DOS DEL or ERASE command.

               VIEW:     Display the contents of the file on the screen.
                         ASCII character  #7  (bell)  will  be  displayed as
                         blank. You can view files of different formats.

               WIPE:     Erase file.
                         P-Cem will  overwrite the file with ASCII character
                         #32 (blank) before deleting it. This  is useful for
                         protecting important  files that  have been deleted
                         from 'file recovery program'.

               EXECUTE:  Run other program from P-Cem shell environment.
                         You can run other  program  while  still  in P-Cem.
                         Unfortunately, you  cannot run  a batch (.BAT) file
                         using this service.

               PRINT:    Print a file.
                         This service lets you  print  the  contents  of the
                         file. Only  a true  ASCII text file will be printed
                         correctly. This is the  same as  giving DOS command




                                                                           4

                         COPY   <filename.ext>   LPT1. However, this service
                         gives you more control over the printer.

               ENCRYPT:  Scramble the contents of a file.
                         This  service  provides  you   with  a   nice  data
                         security. A  password (up to 50 characters) must be
                         entered to lock the file. It is important  that you
                         remember or  write your  password somewhere, other-
                         wise you will  not  be  abled  to  unlock  the file
                         later.

               DECRYPT:  Un-Scramble the contents of a file.
                         This service  allows you  to unlock a file that has
                         been  scrambled  by  the   ENCRYPT  service  above,
                         provided you know the correct password.

               RENAME:   Change the name of a file. 
                         Same as DOS RENAME command.

               CHDIR:    Change the  current directory to another directory.
                         Same as DOS CHDIR command.

               MKDIR:    Make a new directory.
                         This  service   creates   a   multilevel  directory
                         structure. Same as DOS MKDIR command.

               RMDIR:    Remove directory.
                         This service  removes a directory from a multilevel
                         directory structure. You cannot  remove the current
                         directory, and  the directory to be removed must be
                         empty. Same as DOS RMDIR command.




          5.   OTHER SERVICES
          -------------------

               Other services that you will find on the menus are:

               PRINTLIST:Print directory contents.
                         This option lets you print the  directory listed on
                         the  screen.   If  the  current  printing  mode  is
                         'Compress', the directory contents  will be printed
                         in two columns.

               DOSSHELL: Go to DOS temporarily.
                         This feature  allows you  to go to DOS temporarily.
                         The  COMMAND.COM  file  must  be  in  the directory
                         specified by  the DOS Environment COMSPEC. Usually,
                         this is where you put your  'COMMAND.COM' file when
                         you boot the computer.




                                                                           5


               HELP:     On-Line Help.
                         P-Cem provides  you with on-line help. However, you
                         must acknowledge P-Cem where to find  its help file
                         if it  is not  in the current directory. You can do
                         this either by:

                         1)   Put the path where to find P-CEM.HLP file as a
                              parameter when  you first  run P-Cem. You must
                              preceed the pathname with number '2', eg.

                                   P-CEM  2C:\UTILITY\PCEM\

                         or

                         2)   Try to get help from P-Cem, when the help file
                              is not  found, you  will be  asked to give the
                              pathname to find the help file. Enter the path
                              name.

               SORT:     Sort files on the screen.
                         You can  sort the files by Name, Extension, Size or
                         Date; Ascending or Descending. 

               PATH:     Display the directory contents of other drive.
                         This allows  you to  display the  contents of other
                         drive or  directory. It does not change the Current
                         Directory.

               ALT
               -DISPLAY: Change the display mode.
                         The directory  contents  can  be  displayed  in two
                         modes. In  Single Column mode, all information will
                         be displayed. In Two Column mode, the Time informa-
                         tion will not be displayed.

               CONFIG:   Change the default settings.
                         There  are  five  default  settings  that  you  can
                         change:

                         1)   Display mode (One or Two columns).
                         2)   Printing mode (Normal or Compress).
                         3)   Vertical Tab for printing (default = 5 lines).
                         4)   Types of  files  to  be  displayed  (Normal or
                              All). "All" includes Hidden and System files.
                         5)   Sort display. (default is "No")

               <ESC>:    Switching from one menu to the other.

               <ENTER>:  Selecting files  for bulk  operation. If press on a
                         file that has been  selected, it  will unselect the
                         file. If  press on  a subdirectory, the contents of




                                                                           6

                         that subdirectory will be displayed on  the screen.
                         The maximum number of files that can be selected at
                         one time is 50.

               QUIT:     End the session, go back to normal DOS.




          6.   DISCLAIMER
          ---------------

               P-Cem version 1.2 is distributed  as  is,  with  no guarantee
          that it  will work  correctly in  all situations. In no event will
          the Author be liable for any damages, including lost profits, lost
          savings or  other incidental  or consequential damages arising out
          of the use of or inability to use this program.




          7.   USER-SUPPORTED SOFTWARE
          ----------------------------

               P-Cem version  1.2  is  user-supported  software.  Anyone may
          obtain a free copy of P-Cem by sending a blank, formatted diskette
          to the  author.  An  addressed,  postage-paid  return  mailer must
          accompany the diskette.

               The  entire  P-Cem  distribution  package,  consisting of the
          program, documentation file, and other utilities  will be  sent by
          return mail.  The program will carry a notice suggesting a payment
          to the program's author.  Making payment  is totally  voluntary on
          the part  of the  user. Regardless  whether a payment is made, the
          user is encouraged to share the program with others.

               The underlying philosophy of User-Supported Software is based
          on that:

               1.   The value  of software  is best  assessed by the user on
                    his/her own system.

               2.   The  creation  of  personal  computer  software  can and
                    should be supported by computing community.

               3.   Copying  of  programs  should be encouraged, rather than
                    restricted.

          If you like the software or  find it  useful, please  help support
          it...


```
{% endraw %}

## READSECT.DOC

{% raw %}
```


       READSECT.EXE is a utility program to read disk sectors and
       display the contents on the screen. The contents will be
       displayed in Hex notation and ASCII representation.

       A normal Double Side Double Density 5 1/4" diskette has
       2 Sides [0..1], 40 Tracks [0..39] and 9 Sectors [1..9].

       You cannot edit the contents of the sectors.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1464

     Volume in drive A has no label
     Directory of A:\

    README            1689   1-12-89   8:26a
    MP-CEM   BAT        10   1-12-89   8:15a
    PRINTDOC BAT       189   1-12-89   8:22a
    COLOR    DOC       883   1-12-89   7:40a
    CURSOR   DOC       622   1-12-89   7:41a
    P-CEM    DOC     15597   1-12-89   7:45a
    READSECT DOC       384   1-12-89   8:06a
    COLOR    EXE      4688   1-12-89   7:33a
    CURSOR   EXE      3456   1-12-89   7:35a
    DISKINFO EXE      6768   1-12-89   7:35a
    MEMORY   EXE      3712   1-12-89   7:37a
    P-CEM    EXE     61376   1-12-89   7:23a
    READSECT EXE     10032   1-12-89   7:38a
    REBOOT   EXE      4288   1-12-89   7:39a
    SYSINFO  EXE      5984   1-12-89   7:38a
    P-CEM    HLP     52000   1-12-89   7:00a
    VIEW     BAT        38   6-20-89   1:07p
    PAGE     COM       325   1-06-87   4:21p
    GO       BAT        38   6-14-89   3:12p
    GO       TXT       386   6-20-89   1:18p
    FILE1464 TXT      2476   6-20-89   1:48p
           21 file(s)     174941 bytes
                          136192 bytes free
