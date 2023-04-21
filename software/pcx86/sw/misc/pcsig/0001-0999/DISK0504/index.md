---
layout: page
title: "PC-SIG Diskette Library (Disk #504)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0504/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0504"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES #21"

    ``Exotic'' or ``esoteric'' might better (than Miscellaneous) describe
    this assortment of programs that perform a WIDE variety of functions.
    They include DUMP3, a program for the examination of files, CLEAN,
    which assists in the cleaning of diskettes, to TTD5PT2, a teletype
    interface for deaf people.  This disk includes both documentation and
    the source code.  Also included is a mail-list management program and a
    specially designed utility program to give you the ability to run
    programs in two memory partitions.
    
    System Requirements:  64K, one disk drive and monochrome display.
    
    How to Start:   To run an EXE or COM program simply type its name and
    press <ENTER>. To read DOC files simply enter TYPE filename.ext and pres
    <ENTER>.
    
    Suggested Registration: DUMP3 $5.00; HOTDEMO requests $20.00 for a full
    working version of HOT-DOS, and USERLOG requests $25.00.
    
    File Descriptions:
    
    AREACODE EXE  Displays phone area codes for different states
    BG       EXE  Program to produces batch file with file names
    BG       DOC  Documentation for BG system
    QUIKTIME COM  Displays the time in words
    TDD5PT2  DOC  TDD5PT2 documentation
    TDD5PT2  EXE  Teletype interface program - 2
    TDD5PT2  ASM  Teletype interface program for deaf people
    HOTDEMO  COM  Creates two memory partitions for programs
    HOTDEMO  DOC  HOTDEMO documentation
    SYSLOG   TXT  Older version of USERLOG
    USERLOG  COM  Maintains log of usage of system
    CALPO    EXE  Appointment generator program
    CALPO    DOC  CALPO documentation
    CLOCK    EXE  Clock program
    CLEAN    COM  Clear discettes program
    CLEAN    DOC  CLEAN documentation
    USERLOG  DOC  USERLOG documentation
    PCUTIL   COM  Various simple PC Utilities
    DUMP3    EXE  Search, dump & maintain files
    DUMP3    DOC  DUMP documentation
    MAILLIST EXE  Mail list management system
    MAILLIST DOC  MAILLIST documentation
    FATDUMP  COM  Lists disk files allocation table
    FATDUMP  DOC  FATDUMP documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BG.DOC

{% raw %}
```




        DESCRIPTION:

             The command with which to invoke BG is:-

                             BG  [[d:]afn.ft]   [options]

             BG generates a file call NAMES.BAT.  It uses the command 
             line to obtain the filename.filetype search mask (afn.ft 
             portion)  and also  some  optional run time parameters.  
             These  parameters are used to select  the  file names  off 
             of  the specified disk.  These selected file names are then  
             sorted into ascending sequence and the user is notified  of 
             how many files are selected. 

             At  this  point  a prompt 'Skeleton?'  is  displayed  asking  
             for skeleton  line(s)  into  which the selected file  names  
             will  be inserted. More  than one skeleton line can be given 
             in which case  multiple lines  are generated for each file 
             name.  A null line  terminates the skeleton line input phase 
             of the programs operation.

             Obviously,  part of the skeleton can be commands that 
             operate  on the file names.  Alternatively, BATCH parameters 
             can be included at  various  points  within the skeleton if 
             it  is  necessary  to generate a multi-use .BAT file.

        SUBSTITUTION FORMULA:

             During  the  generation of the .BAT file from the  selected  
             file names  BG copies the skeleton line(s) to the output 
             file once for every selected name. During this copying 
             process BG looks for occurrences of the substitution 
             character. When found, BG replaces this character with the 
             current  filename.filetype.  The standard  character  is  
             the '@' character 

             Special  processing  is  done by BG if  the  @  character  
             is preceded  or  followed  by a period.  This is to  allow  
             for  the possibility  of  doing  global  operations  on  
             filetypes  or  on systems.  The  algorithm  is  most  easily 
             explained  by  use  of examples. Assume that the current 
             file name is ABC.COM. Thus:-

             erase @          => erase ABC.COM      ;simple case first

             erase b:@        => erase b:ABC.COM    ;another simple case

             rename  @ @.old  => rename ABC.COM  ABC.old
                                                    ; . suffix causes fn
                                                      substitution only

             dir *.@          => dir *              ; . prefix causes ft
                                                    ;  substitution only













             A  secondary  substitution  character  has  been  provided   
             that functions  just as above with one exception,  when 
             selecting only fn  or  ft  by  specification of a period  
             before  or  after  the substitution  character,  a  leading 
             or trailing  period  is  not written to the output file.   
             The standard secondary substitution character is the '#'.  
             Expanding upon the above example, we have:

             testpgm #.  => testpgm ABC         ; no trailing period

             type #      => type ABC.CO         ; identical to standard 
                                                ; substitution character
                                                ; if no leading or 
                                                ; trailing period


        OPTIONAL EXTRAS:

             The following options can follow the file name specification 
             if these additional capabilities are desired:

             (F)  This option allows specification of an output file name 
                  following the options prompt.  If this option is not 
                  used, the default output file name is NAMES.BAT.

             (H)  This causes a Header?  prompt to be written.  It is 
                  used to write  one or more records to the output file 
                  before the body  of the file is written using the 
                  skeleton definitions.  No file name substitution takes 
                  place on these header records.   A null  reply 
                  terminates the header record writing process.

             (L)  This  option is used to convert all file names to lower 
                  case before substitution into the skeleton lines.  This 
                  option is very useful with the C86 librarian and 
                  linker, as they are a bit confused about the case of 
                  file names.  i.e. The librarian is case sensitive, but 
                  the linker is not.

             (P)  This causes the selected filenames to be written 
                  followed by a  question  mark (?) during the selection 
                  process.  This  occurs after selection, i.e. you have 
                  the last say.  A Y response selects the file while an N 
                  response rejects the file.  In addition, a B response 
                  backs up one entry in the list, a S response skips the 
                  rest of the list, and a Q response immediately aborts 
                  BG.

             (T)  Similar to the Header option,  the trailer option 
                  allows one or more records to be written after the body 
                  of the file.















        HELP:

             BG has a simple help function to jog your memory if you 
             forget how some of the parameters work, it is invoked by 
             typing:

                            BG ?

        EXAMPLES:

             Note:  In  these  examples the UPPER CASE represents  user  
             input except where obviously not user input.

             1.   Rename all .BAK files on the default drive to .ASM.

                  C>BG *.BAK                   Invoke BG
                  BG-......                    Normal identifier from BG
                  There are 10 selected files  BGs msg
                  Skeleton?RENAME @ @.ASM      Refer to substitution rules.
                  Skeleton?                    Null reply

                  C>NAMES                      Now do the renames.

             2.   You are about to undertake the BG v2 project. Rename 
                  all existing BG10.* components (DOC, REL, COM, BAT and 
                  whatever you have forgotton about) to this new name on 
                  the A drive.

                  C>BG A:BG10.*                Invoke BG
                  BG-......                    Normal identifier from BG
                  There are 7 selected files   BGs msg
                  Skeleton?RENAME  @ A:BG20.@  Make use of substitution 
                                               rules
                  Skeleton?                    Null reply

                  C>NAMES                      Now do the rename

             3.   You have to ERASE all your .BAK files on the default 
                  drive. You wish to confirm each deletion.

                  C>BG *.BAK P                 Invoke BG with the P - option
                  BG-......                    Normal identifier from BG
                  mast.bak?N                   BG prompt - reject reply
                  mast.bak?Y                   Select this one
                   ....                        etc
                  There are 2 selected files   BGs msg
                  Skeleton?ERASE @             Generate the command
                  Skeleton?                    Null reply

                  C>NAMES                      Invoke the command.

                  Now, you are ready, CHARGE!














```
{% endraw %}

## CALPO.DOC

{% raw %}
```
                      CALPO.EXE Version 2.3
                An Appointment Calendar Generator

                  for the IBM PC, XT and clones


                      P. L. Olympia, Ph.D.
         Darwin Systems, Inc.  (301) 963-4003   12/28/83


     CALPO.EXE  was  derived  from  a  public  domain  program 
written  by Barry Tilds.  It produces a desk calendar that begins 
on  any month of any year in the 16th thru the 23rd  century  and 
runs for any number of continuous months.  A day of any month can 
have as many as 8 appointments. 

     To  use  it,  you must first create a file  of  appointments 
using  any text editor like WordStar (use the NON-DOCUMENT mode). 
Then,  all  you  do  is invoke the program  by  giving  its  name 
"CALPO" at the DOS prompt level, e.g.,

          C>calpo


     The  program will ask you for some information regarding the 
final  appearance of your desk calendars.  Each question  can  be 
answered  simply by pressing <RETURN>,  if you wish to accept the 
default values.

1.   Fence character (default=|). This is the vertical bar charac-
     ter used to separate days in a month. Some letter-quality
     printers do not have this character on the daisywheel. In such
     a case, use either the colon (:) or the exclamation point (!).
 	
2.   Compressed print?  (Y/N) - Answer "Y" or "y" if you have  an 
     EPSON  (IBM)  printer  and you want  compressed  print.  The 
     default is N(o). 

3.   Lines  per page  -  This is usually 66 for 8.5 x 11 paper
     Default=66

4.   Columns  per line -  either 80 or 132 (132 is  recommended); 
     although   in   principle  any  number  between  80-132   is 
     acceptable;  Default=132.  The  program is set to  handle  a 
     maximum column width of 132 (for now).

5.   Appointment  File  Name - this is the file  of  appointments 
     that  you  created previously;  its  contents  is  described 
     below. By default, its name is CALENDAR.APT.

6.   Name  of  Month  to  Start - This is  the  month  where  the 
     calendar  begins;  enter any valid month,  e.g.,  JUNE.  The 
     program looks only at the first three letters of the  month, 
     so "jun", "June", "JUN" are all equivalent.

7.   The Year - e.g., 1983 or, simply, 83.

8.   The  number  of  consecutive months - it is OK to  have  any 
     number of consecutive months even though these may span more 
     than one year; the program knows when to change years;
     The default number of consecutive months is 1.

9.   Number  of  Copies - the program can produce any  number  of 
     copies of a calendar in a given run. The default is 1.


     The  program knows all about such things as leap  years  and 
the  number  of days in a given month.  Although this program  is 
primarily designed to give you an appointment calendar,  you  can 
create  ordinary calendars by entering just one dummy appointment 
in the appointment file.



                      THE APPOINTMENT FILE

The  appointment file is a text file with any file name you  give 
it, e.g., CALENDAR.APT. It should contain the following lines:

Line  1 - Calendar Title (this is reproduced on each  calendar 
          page).  Do  not  imbed the string in quotes unless  you 
          want the quotes to be part of the title.

Line  2 - An appointment, arranged in this way:

     MM,DD,YEAR,"name of appointment"

  For example,

     06,23,1983,"NBS Micro Conf"
     06,19,1983,"Father's Day"

  The  maximum  number of appointments on a given day  is  eight. 
This could be less if you specify a NUMBER OF LINES PER PAGE less 
than  60.  If you have an appointment description that is  longer 
than 16 characters,  the description will be truncated.  One  way 
around this is to break up the description into two segments,  as 
though there were two appointments on the same day. For example,
instead of:
     06,22,1983,"This description will be truncated"

you can break it up this way:
     06,22,1983,"This description" 
     06,22,1983,"will be truncated"

Line 3  on - repeat line 2 for as many appointments that you have

Last Line - 99,99,99,"END"
   This should always be the last line on an appointment file

Here is an example of an appointment file:

THIS IS A SAMPLE APPOINTMENT CALENDAR
05,10,1983,"NICOLE'S BIRTHDAY"
05,10,1983,"VISIT DENTIST"
05,10,1983,"1ST COMMUNION"
05,15,1983,"MOTHER'S DAY"
05,28,1983,"MOMMY'S BIRTHDAY"
99,99,99,"END"


Enjoy!!!

```
{% endraw %}

## DUMP3.DOC

{% raw %}
```



















                              ==========================
                               DUMP - File Dump Utility
                                     User's Guide
                                     Version 3.0
                              ==========================






                                  Copyright (C) 1985
                                    Nick Richards
                                     1124 S. Main
                                 Burlington, NC 27215


























                         DUMP Version 3.00 (c) Copyright 1985 
                         Argan Software; ALL RIGHTS RESERVED 
                               Written by Nick Richards

          DUMP  is  the  copyrighted  property  of Argan Software.  You are 
          granted a limited license  to  use  DUMP,  and  to  copy  it  and 
          distribute it, provided that the following conditions are met: 

          1)  You may not charge a fee for such copying and distribution.
          
          2)  You must distribute DUMP as a complete set of all files.
          
          3) You may ONLY distribute DUMP in its original, unmodified state.  
          
          This  program  is  being  distributed  under the Freeware concept 
          where users are urged to  distribute  this  program  in  original 
          form,  not  modified in any way,  to their friends and other BBS.  
          The  author  claims  no  responsibility  for  any  damage  either 
          accidental or otherwise through use of this program.  The program 
          is  provided  "AS  IS"  without  warranty  of  any  kind,  either 
          expressed or implied.  The entire risk  as  to  the  quality  and 
          compatibility of the program is with YOU.  
          
          If  you use this program and find it of value,  any contributions 
          ($5 suggested) will be greatly appreciated and will  be  used  to 
          further develop useful software.  Send any contributions to: 
          
                                    Nick Richards
                                     1124 S. Main
                                 Burlington, NC 27215






























                                       -------
                                       D U M P
                                       -------

    


                   Program to Search, Examine, and Modify Any File


          INTRODUCTION
          
          
          
          DUMP allows you to examine the contents of a file.  You can also 
          search for data within a file, as well as modify the file's con- 
          tents.
          
          Why  can't  you just TYPE the file?  Well,  to an extent you can.  
          TYPE will show you what is  in  the  file.  What  it  shows  you, 
          however,  is  often  unreadable to the human eye.  Files that are 
          compressed and files that contain non-ASCII data will look like a 
          stream of random characters.  And,  of course,  you can't  modify 
          that stream of random characters, just look at it.  Not very use- 
          ful.  
          
          What about text processors?  Can they do the job?  After all, you 
          can modify files with a text processor, can't you?  Yes, you can.  
          Again,  however,  you are often faced with a stream of characters 
          that make no sense to you.  Trying to  decipher  a  file  is  not 
          always easy.  Besides,  isn't that what computers are supposed to 
          do for you?  
          
          Here comes DUMP to the rescue!  Not only will DUMP allow  you  to 
          search  through the data,  not only will DUMP allow you to EASILY 
          modify a file,  but DUMP will also present the data to you in  an 
          easy-to-understand display.  In fact,  it will display the infor- 
          mation two different ways,  so you can attack the data YOUR  way, 
          not just the way somebody else thought you should do so.  
          
          Have  you  ever had a file corrupted?  Don't worry!  DUMP can fix 
          it almost instantly.  Program not working right and  you  suspect 
          the file has wrong data?  Relax!  DUMP will show you exactly what 
          data is in your file.  No more guesswork.  
          
          DUMP is  easy to use and will prove itself invaluable as you work
          with your computer.  





          
          
          
          
          
          
          
          
          HOW TO USE DUMP

          
          
          Format:   DUMP [d:]filename[.ext][ O=offset][ S=search][ EOF]
          
          Type:     Internal  External
                                ****
          
          Remarks:  Specify the parameters:
                      
                    [d:]filename[.ext] to specify the file  to  be  DUMPed.  
                    The  drive  specification  [d:]  is optional.  The ext- 
                    ension [.ext] is optional,  but if the file has an ext- 
                    ension,  you  must include it when you call DUMP.  DUMP 
                    does not assume a specific extension.  
                    
                    [ O=offset] to specify the byte offset  into  the  file 
                    where  DUMP is to begin.  If O= is not specified,  DUMP 
                    starts from the beginning of the file.  offset can be a 
                    number  from 0 up to the size of the file in bytes.  If 
                    offset is not a multiple of 256,  it  will  be  rounded 
                    down to the nearest multiple of 256.  
                    
                    [ S=search]  to  have  DUMP  search  for  the specified 
                    string.  When the first occurence of that string in the 
                    file is found,  DUMP stops searching and  displays  the 
                    file  contents  at that point.  If S= is not specified, 
                    DUMP will not search for a  particular  string.  search 
                    can  be any string that does NOT contain a space.  DUMP 
                    assumes that the first space  it  encounters  after  S= 
                    marks the end of the search string.  
                    
                    [ EOF]  to  have  DUMP jump to the end of  the file and 
                    display the file  contents  at  that  point.  EOF  will 
                    override both O= and S=.  

          Example:  The following example DUMPs the file TEST.DAT on drive 
                    B.
                    
                    A>dump b:test.dat
                    
                    The following example DUMPs the file MYPROG.BAS  start- 
                    ing with byte 2560.  
                    
                    A>dump myprog.bas o=2560
                    
                    The following example DUMPs the file DATA starting with 
                    byte 1280 and searching for the first occurrence of the 
                    string "filename".  
                    
                    A>dump data o=1280 s=filename
                    
                    The  following  example DUMPs the last part of the file 
                    RANDOM.TXT.  
                    
                    A>dump random.txt eof
                              


          HOW TO USE DUMP (Continued)

          DISPLAY FORMAT
                    
          When  DUMP  displays the file's contents,  it does so in two dif- 
          ferent formats:  HEX and ASCII.  Each line on the screen displays 
          16  bytes  from  the  file.  There  are 16 lines displayed on the 
          screen at once, for a total of 256 bytes on each screen.  
          
          To make the screen easier to read,  the 16 lines are broken  into 
          two  groups  of 8 lines.  Each line is divided into two groups of 
          eight bytes.  On the HEX part of the screen,  the groups are div- 
          ided  by a dot.  On the ASCII part of the screen,  the groups are 
          divided by a double line at the top and bottom of the screen.  
          
          On the left side of the screen is a  column  marked  OFFSET.  The 
          offset  numbers  tell  how  far  DUMP is into the file.  Thus the 
          first line has an offset number of 0 because at the beginning  of 
          that line,  there are 0 bytes that came before it.  The next line 
          has an offset of 16 bytes because at the beginning of  that  line 
          16  bytes have already been DUMPed (the first line).  At the beg- 
          inning of the third line,  32  bytes  have  been  DUMPed  already 
          (lines  one and two),  etc.  Each screen shows 256 bytes,  so the 
          first offset number on a screen is a multiple of 256.  
          
          The HEX part of the screen shows the file bytes in hex format (00 
          to FF).  The ASCII part of the screen shows the ASCII  equivalent 
          of  each  HEX byte.  The only exceptions are ASCII characters 0 - 
          31.  These are represented on the screen by a period since  their 
          meanings  are  not clear visually.  However,  the HEX part of the 
          screen tells you exactly which characters are being displayed, so 
          you can always tell what it is.  
          



























          HOW TO USE DUMP (Continued)



          ACTIVE KEYS
          
          Once DUMP is started, there are several keys you can use:
          
          
                 HOME             SPACE             END
                 UP ARROW         ESC               DOWN ARROW
                 PG UP            INS               PG DOWN
          
          HOME will cause DUMP to display the beginning of the  file.  This 
          is a fast way to return to the beginning.  
          
          UP ARROW  will  cause  DUMP  to display the previous screen  (the 
          previous 256 bytes).  
          
          PG UP will cause DUMP to jump back 5 screens (1280 bytes).
          
          END will cause DUMP to display the end of the  file.  This  is  a 
          fast way to jump to the end.  
          
          DOWN ARROW  will  cause DUMP to display the next screen (the next 
          256 bytes).  
          
          PG DOWN will cause DUMP to jump forward 5 screens (1280 bytes).
          
          SPACE will start DUMP scrolling through  the  file  at  a  steady 
          speed.  To  stop  the  scrolling,  hit the space bar again.  Once 
          scrolling begins, the only keys that are active besides the space 
          bar  are the numeral keys  1 - 9.  These cause the  scrolling  to 
          speed  up  or  slow down with 1 being the slowest and 9 being the 
          fastest.  The current speed is displayed at  the  bottom  of  the 
          screen.  
          
          Please  note  that  the preceding keys are only active at certain 
          times.  Thus if you are at the beginning of the file, UP ARROW or 
          HOME or PG UP will not go any farther.  Similarly,  if you are at 
          the end of the file,  DOWN ARROW,  END, and PG DOWN will take you 
          no farther.  When a key is not currently active,  the key message 
          will  disappear from the screen and hitting that key will have no 
          effect.  
          
          In addition, the RIGHT ARROW and LEFT ARROW keys can also be used 
          if  you  started  DUMP  with the S= option.  S= will show you the 
          first occurrence of the search string.  Hitting the  RIGHT  ARROW 
          key will show you the next occurrence,  if any.  Hitting the LEFT 
          ARROW key will show you the previous occurrence,  if  any.  These 
          keys  can  be used repeatedly until you come to the end or begin- 
          ning of the file.  However,  if you did not specify  S=,  neither 
          the RIGHT ARROW or LEFT ARROW key will have any effect.  
          
          ESC will exit from DUMP at any time except when scrolling or when 
          in MODIFY mode (see below).  




          HOW TO USE DUMP (Continued) 
          
          
          
          MODIFY MODE
          
          INS will cause DUMP to enter MODIFY mode.  The screen will change 
          slightly as follows:  The only special keys that will  be  active 
          are INS (to leave MODIFY mode) and F9 (to write any modifications 
          to the file in order to permanently save them).  In addition, the 
          cursor  will  appear  as  a  large blinking box in the upper left 
          corner of the HEX part of the screen.  
          
          In MODIFY mode,  you can overwrite any of the 256  bytes  on  the 
          screen by typing over them.  You can do this either by typing the 
          hex codes if you are in the HEX part of the screen,  or by typing 
          the ASCII characters if you are in the ASCII part of the  screen.  
          To  move  from  one part of the screen to the other,  hit the TAB 
          key.  
          
          As you begin typing, your modifications will appear on the screen 
          highlighted.  This means that  your  modifications  are  not  yet 
          being saved to the file itself.  To do this, hit F9.  Any changes 
          you made will now be permanently stored  in  the  file  and  your 
          changes  will  no longer appear highlighted.  If you leave MODIFY 
          mode before you hit F9,  the changes will not be  saved  and  the 
          screen will be restored to the previous values.  

          When you are finished making modifications, hit F9 to save the 
          changes (if you want them saved) and hit the INS key to return to 
          normal DUMP mode.  You can then DUMP the next screen, hit INS to 
          enter MODIFY mode and modify the next screen, if you want.


985 ight     author.  CED IS INTENDED FOR YOUR PRIVATE, NONCOMMERCIAL USE
          ONLY.  You may make copies of the ced program and documentation
          files for your own use, and you may copy the files for others. 
          You may not, however, charge for such copies, or in any other way
          sell the program or otherwise attempt to make money from it or
          any modified version of it.  Please.

          An exception to the above is, however, granted to recognized
      
```
{% endraw %}

## FATDUMP.DOC

{% raw %}
```
                            FATSTUFF


The two utilities in this library perform functions that list the
contents of the disk's file allocation table.

FATDUMP.COM

    File  allocation table dump.  "DUMB".  Assumes sector 1 is  a
    FAT,  assumes FATs are 12 bits. Stops after 4096 fats. Use Ctrl-S
    then  Ctrl-C  to stop sooner.
    use:  Fatdump  drive:opt'l  start sector for 2nd fat

```
{% endraw %}

## FILES504.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  504  MISCELLANEOUS  UTILITIES                             V1   DS2
---------------------------------------------------------------------------
This diskette contains an assortment of programs that perform a variety of
functions.  They include programs for the examination of files, the clearing of
diskettes to a teletype interface for deaf people, a maillist program and the
ability to run programs in two memory partitions.
 
AREACODE EXE  Displays phone area codes for different states
BG       DOC  Documentation for BG system
BG       EXE  Program to produces batch file with file names
CALPO    DOC  CALPO documentation
CALPO    EXE  Appointment generator program
CLEAN    DOC  CLEAN documentation
CLEAN    COM  Clear discettes program
CLOCK    EXE  Clock program
FATDUMP  DOC  FATDUMP documentation
FATDUMP  COM  Lists disk files allocation table
MAILLIST DOC  MAILLIST documentation
MAILLIST EXE  Mail list management system
DUMP3    DOC  DUMP documentation
DUMP3    EXE  Search, dump & maintain files
PCUTIL   COM  Various simple PC Utilities
USERLOG  DOC  USERLOG documentation
USERLOG  COM  Maintains log of usage of system
SYSLOG   TXT  Older version of USERLOG
TDD5PT2  DOC  TDD5PT2 documentation
TDD5PT2  ASM  Teletype interface program for deaf people
TDD5PT2  EXE  Teletype interface program - 2
HOTDEMO  DOC  HOTDEMO documentation
HOTDEMO  COM  Creates two memory partitions for programs
QUIKTIME COM  Displays the time in words
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA    94086
(408) 730-9291
```
{% endraw %}

## HOTDEMO.DOC

{% raw %}
```
                                *** HOT-DOS ***
                          Demonstration Version 1.04D

                              Copyright (C) 1985
                                  Robert Best

The following documentation describes the operation of HOT-DOS, a small but
powerful program that, with the press of the LEFT-SHIFT -- RIGHT-SHIFT
combination, allows any currently executing program to be temporarily
suspended so that a second copy of COMMAND.COM can be loaded and run in the
background (the aptly named HOT-DOS partition.)

To load HOT-DOS simply type HOTDEMO at the DOS prompt.  From that point on,
any simultaneous pressing of the LEFT-SHIFT -- RIGHT-SHIFT keys will
automatically save the entire current state of the operating system, followed
by the execution of a newly loaded command processor.  It's like having two
computers in one!  To return to your primary application, type EXIT at the
DOS prompt.  That is all you need to know to use this program!

Let me emphasize that this Demonstration Version of HOT-DOS has purposely
been severely limited in its capabilities.  I will briefly mention the
limitations, followed by a thorough discussion of the full capability
available in the authorized version.


                         ** SIDEKICK COMPATIBILITY **

The demonstration version of HOT-DOS is not compatible with Sidekick (tm).
To use Sidekick (tm) with HOT-DOS you must obtain the authorized version.
The authorized version has been thoroughly tested with Sidekick (tm), and
appears to function flawlessly.  This combination of resident programs
creates an extremely powerful environment.  Serious users of Sidekick (tm)
will wonder how they managed without a HOT-DOS capability.


                    ** USER CONFIGURABLE PARTITION SIZE **

The demonstration version of HOT-DOS uses the minimum partition size required
to load COMMAND.COM.  This will allow users to load and execute any
application program using less than approximately 20K.  This size is
sufficient for most DOS commands, but will not support most applications.
The authorized version of HOT-DOS allows the user to set the size of the
partition at load time.  This feature makes it possible to configure your
memory allocation to suit any particular requirements.  The size of the
HOT-DOS partition can be set anywhere from 20K to the limit of RAM installed
in the user's machine.


                  ** USER CONFIGURABLE DRIVE SPECIFICATION **

The demonstration version of HOT-DOS uses the A: drive to search for
COMMAND.COM.  A copy of COMMAND.COM must be included in the root directory of
a diskette inserted in drive A: for the program to properly load and execute.
The authorized version of HOT-DOS allows the user to specify the drive to be
searched for COMMAND.COM.  This feature allows COMMAND.COM to be accessed
from the root directory of any drive configured on the system.  I personally
recommend accessing from a RAM disk for virtually instantaneous loading of the
HOT-DOS environment. 


                     ** AUTOMATIC DISPLAY DETERMINATION **

The demonstration version will automatically determine which display adapter
(monochrome or color/graphics) is currently being used, and will load the
HOT-DOS environment using this display.  HOT-DOS has only been tested on IBM
compatible standard monochrome and IBM compatible standard color/graphics
adapters. It has not been tested on EGA or Hercules display cards.  I cannot
vouch for its compatibility using either of these options.


                            ** USE BOTH SCREENS **

The demonstration version has been designed to run on only one screen.  For
users having both the IBM monochrome and IBM color/graphics or compatible
displays available, the authorized version of HOT-DOS includes a valuable
feature that automatically loads the HOT-DOS environment on the display that
is NOT currently active.  This allows the user to refer to data on the
primary screen while running HOT-DOS on the other screen.  The user maintains
the option of switching screens at any time in either environment.  Upon EXIT,
HOT-DOS will restore the primary environment exactly as it was executing
prior to activating HOT-DOS.


                            ** GRAPHICS SUPPORT **

The demonstration version of HOT-DOS does not support any of the graphics
modes available using the IBM color/graphics adapter.  If a primary
application is running a graphics display application, the screen will not be
restored properly upon EXIT from HOT-DOS.  The authorized version of HOT-DOS
will restore any graphics mode screen upon EXIT from HOT-DOS at the expense
of an additional 12K RAM required for use as a buffer.


      ** IMPORTANT NOTE REGARDING USE OF HOT-DOS DEMONSTRATION PROGRAM **

As is evident in the preceding documentation, the HOT-DOS Demonstration
Program has been designed to give the user a taste of the enormous capability
provided by HOT-DOS without offering the full benefits available with the
authorized version.  As a further limitation in the Demonstration version,
you will be allowed only THREE opportunities to escape to the HOT-DOS
environment after any boot of the system.  After three accesses, the HOT-KEY
(LEFT-SHIFT -- RIGHT-SHIFT combination) will be disabled.


The potential user of HOT-DOS is encouraged to thoroughly test the
Demonstration version to adequately determine whether it will run compatibly
on their system configuration.  During the testing of HOT-DOS, I have
discovered several preventable problems and have provided the following
solutions:

1)  Do not load any RESIDENT application in the HOT-DOS environment.  Doing
so will surely destroy the integrity of the DOS memory allocation chain.

2)  Do not load any application that will overlay without checking for the
top of memory location stored in the Program Segment Prefix.  A program that
overlays above the top of available memory (in the HOT-DOS partition) will
overwrite the memory chain block of the primary application, not to mention
the PSP and part of the primary application itself!

3)  Do not load BASIC in the HOT-DOS environment if BASIC is currently
suspended in the primary environment.

4)  If you mistakenly type EXIT at the DOS prompt in the primary environment,
immediately run a CHKDSK on any drive configured in your system.  For some
reason, running a CHKDSK avoids problems that occur if you type EXIT in the
primary environment and then immediately escape to HOT-DOS.  This problem has
not been traced, but seems to be a bug in the DOS EXIT command.


To obtain immediate shipment of an authorized copy of ** HOT-DOS ** send
cashiers check or money order made payable to ROBERT BEST in the amount of
$20.00 (California residents $21.20 including 6% sales tax) to:

                                  Robert Best
                                13681 Dall Lane
                             Santa Ana, CA  92705

Personal checks will be accepted but shipment will be delayed pending the
clearing of the check.


                       ** HOT-DOS LICENSING AGREEMENT **

The HOT-DOS Demonstration Program is copyrighted material intended for use in
unaltered form.  The user is encouraged to freely distribute the
Demonstration version of HOT-DOS provided that it has not been altered in any
way.  Distribution of either an original or altered copy of the authorized
version of HOT-DOS or an altered version of the HOT-DOS Demonstration Program
is a violation of copyright.  The program is provided "AS IS" without any
warranty of any kind. Should the program prove defective, the user shall
assume the entire cost of all necessary servicing, repair or correction.  Site
licensing of the authorized version of HOT-DOS is available by arrangement
with Robert Best.  The authorized version of HOT-DOS is intended for use on a
single machine.  Making copies for use on other machines represents a
violation of this licensing agreement. 




```
{% endraw %}

## MAILLIST.DOC

{% raw %}
```



STEPS IN OPERATING PROGRAM MAILLIST   ( .EXE VERSION )

1.  Load DOS 1.1
2.  Run  program  - Just type in MAILLIST and MAILLIST.EXE will load 
    and run
3.  Respond to the following question - Does the mail list reside/or     
    is to reside on Drive A or B? Type either A or B.
4.  Then a menu of six items will be presented on the screen.

NOTE:  If  the mail list file is new,  the program will  immediately 
transfer  to the ADD ADDITIONAL ENTRY portion and will  not  display 
the  main  menu.  DO  NOT  remove the data disk  until  the  program 
terminates and returns to P.C. DOS or data will be lost.



The mail list program is broken down into six options:

A.  List mail list on the CRT
B.  List the mail list on the line printer
C.  Edit mail list
D.  Add additional entries
E.  MicroPro mailmerge interface
F.  Terminate mail list program     (return to PC DOS)


WILD CARD USAGE

Wild cards may be used in item 7,  option A; option C; and option D, 
listed above.  The wild card character is the asterisk (*). The wild 
card  may be used when you are unsure of the name of the  individual 
you  wish to list on the CRT or edit. All characters that follow the
asterisk  are ignored.If the asterisk is used in the last name,  the 
first name of the individual will never be requested.  The  asterisk 
may  be  used  in the last name field or the first  name  field.  In 
option  D,  the wild card duplicates the same field of the  previous 
entry.  For example,  if the previous "city entry" were LOS ANGELES,
depress  the  asterisk  in the city field and LOS  ANGELES  will  be 
displayed on the CRT and inserted in the record. This can be done in
any  of the specified fields when a field of a previous entry is  to 
be duplicated.


MINIMUM SYSTEM REQUIREMENTS:

1.  I.B.M. P.C. with 96K of memory
2.  160k byte disk drive
3.  I.B.M. line printer or equivalent
4.  DOS 1.1
Note:  The equivalent line printers to the I.B.M. line printer would 
be the Epson MX-80 or Epson MX-100.

SORT CODE - User defined field

This  field  can contain upto five characters composed of upper  and 
lower  case letters and numbers.  There are three ways to  use  this 
field:

1.   As  a  sort  option  - The entire field is  used  as  a  single 
variable.  The user may use up to five characters in this field. For 
example: all doctors could be designated "doc".

2.   As an extraction option used with sort options 2,  4, 5, and 6. 
Each character in the field is a specific user defined catagory. See 
option A ( LIST MAIL LIST ON CRT ).

3.   As  an index to  the nineteen possible mailmerge interface  op
tions.  ( OPTION E - MAIL MERGE INTERFACE )

Note:  If  you use both options 2 and 3,  it would be  advisable  to 
restrict  the usage of capital letters A thru I and numbers 0 thru 9 
for   use  with  option  3  to  avoid  the  possibility  of   option 
interference  since option 3 ( MAILMERGE INTERFACE ) uses  the  last 
printable character to determine the format of output.


OPTION A - LIST MAIL LIST ON CRT presents a menu of seven items:

1.  no sort/no extract
2.  sort on name
3.  sort on sort code   (full field)   
4.  sort on zip code
5.  sort on area code
6.  sort on company name
7.  list individual entry

If  you choose item 1,  your entire file will be listed in the order 
that  it was entered.  If you choose items 2-6,  your file  will  be 
sorted  as the name of the item indicates.  If items 2-6 are chosen, 
then an additional question will be asked:  Do you wish to list  the 
entire  sorted file or extract a portion of the file?  If you choose 
to  extract a portion of the file,  you must give a start  and  stop 
string. In other words, you must type the upper and lower limits for 
your  output.  For example,  if you sorted on the ZIP CODE,  you may 
define  the start string as 92 and the stop string as 98.  Then  any 
person's  record  which resides within this zip code range  will  be 
listed.  A sub-sort is performed in items 3-6 according to the name. 
A special extraction feature is built into the sort code for options 
2,4,5,  and 6. The user may designate each character position within 
the  sort  code to represent a chosen catagory.  Each  character  is 
specific.  Upper and lower case letters and single digit numbers may 
be  used to represent different catagories.  This means that a total 
of sixty-two possible catagories are available of which five may  be 
used  for each name.  For example,  you may designate a sort code as 
ABC12  in  which each letter and number stands for  a  user  defined 
catagory.  If you input to the program that you wish to extract ZA5, 
then  anyone who has a Z or an A or a 5 in any position in his  sort 
code  will  be listed on the CRT,  as long as other conditions  have 
been met.  If you choose item 7, you will be asked to input the last 
name  of the individual entry followed by the first name  (see  wild 
card  explanation).  You  may  wish to use this item as  a  personal 
telephone directory.

OPTION B - LIST ON THE LINE PRINTER

The  exact same menu as was presented in OPTION A except for item 7, 
LIST MAIL LIST ON CRT,  will be presented with one additional  ques
tion: Do you wish listings or labels? If you choose labels, then the 
list  will  be  presented on labels with the  following  dimensions; 
single column,  3 1/2 inches by 15/16 of an inch.  You will also  be 
asked  if  you  wish  the  labels to  be  centered  or  blocked.  An 
additional  question will be asked if you wish the company  name  or 
the  individual's  name to be first on the label.  A final  question 
will  be  asked concerning the number of labels per  entry.  If  you 
choose  the  list option,  the printout on the line printer will  be 
presented  in  the form of three entries per row and  six  rows  per 
column for a total page count of eighteen entries.

OPTION C - EDIT MAIL LIST

You  will  first  be asked to input the last name  of  the  person's 
record  whom  you wish to edit,  followed by the first name  of  the 
person's record to edit.  If this entry is found,  you will be asked 
if this is the correct entry to edit since it is possible for two or 
more people to have the same name.  If it is the correct entry,  you 
will  be asked if you wish to delete the entry.  If the response  is 
affirmative,  you will be asked,  ARE YOU SURE?  If the entry is de
leted,  a  hole is made in the file which will be filled by an addi
tional entry.  If the entry is not deleted, you will have the option 
of changing any or all parameters in the following manner. By moving 
the cursor with the keypad controls to the entry on the screen,  you 
may perform the following functions:

1.   Overwrite what is there

2.   Press insert on the keypad control and insert characters. NOTE: 
An  entry  other than an alphanumeric character will  terminate  the 
insert.   If field overflow occurs while you are in this  mode,  the 
trailing characters which disappear on the screen are lost.

3.   Delete the character over the cursor.  Deletion is performed by 
using the delete on the key pad control.

NOTE:  It  is very important not to depress the enter or the  escape 
key  until  all  entries are correct since that will  terminate  the 
edit. You can only edit the mail list parameters. Boundry conditions 
are checked so no over flow can occur between the fields. If you are
editing the telephone number,  the area code is considered a  single 
field,  the three digit prefix is considered a single field, and the 
four digit suffix is a single field. You may make as many changes as 
you wish but once the enter or escape key is depressed, that edit is
complete.  What is displayed on the CRT is exactly what is stored in 
the file. You will notice a slight hesitation between the time you
depress a character on the keyboard and when the character is prese
nted on the CRT. This is normal due to the loop time of the edit.


OPTION D - ADD ADDITIONAL ENTRIES

If  the mail file is new,  the program will automatically enter this 
option without presenting the main menu.

A list of all the mail list parameters will be displayed on the CRT. 
You  may enter characters wherever the cursor is positioned  by  the 
program.
NOTE: If the entire field is filled,  the cursor will  automatically
be moved to the next field.  Do not press the enter or escape key if 
the  field is full or you will skip the next field.  If the field is 
not filled,  then you must either press the enter key or the  escape 
key to jump to the next field.  If a character is typed erroneously, 
you  may use the backspace to change that character.  The fields are 
shaded so you may see the relative position of the characters to the 
field.  When  all fields have been entered or skipped,  you will  be 
asked if the entries are correct.  If you indicate that an entry  is 
in error, the program will transfer to the edit mode and will permit 
the  record  to be edited prior to writting the record to the  disk. 
NOTE:  Use the same controls to edit as in option C, EDIT MAIL LIST. 
Upon  completion  of  the edit you may proceed to  the  next  entry. 
However,  termination  of the ADD ADDITIONAL ENTRY is  performed  by 
depressing  either  the escape key or the enter key prior to  typing 
any  character  in the LAST NAME ENTRY.  Character  verification  is 
performed while you are typing individual entries.  For example,  no 
number  can appear in a name nor can a letter appear in a  telephone 
number. If you do press the wrong key, the character will be ignored 
and it will not be presented on the CRT.  A control B (^B) will back 
you up to the previous field.



OPTION E - MAIL MERGE INTERFACE

The  mail merge file is determined by the user as any file name  may 
be used.  The user,  also,  has the option of determining which disk 
drive to write the file to.

The exact same menu as was presented in OPTION A,  LIST MAIL LIST ON 
CRT,  will  be presented with the exception of item 7.  All sort op
tions and extract options are available to the user.

There  are  nineteen  (19)  different possible mail  merge  type  of 
address entries available. These entries are determined by the LEAST 
SIGNIFICANT PRINTABLE CHARACTER in the SORT CODE.  An example of  an 
option entry would be: sort code= ABC12. Then the option entry would 
be 2. An other example would be: sort code=AA. Then the option entry 
would  be  A.  Digits 0 thru 9 and letters A thru I are used in  the 
selection  of the format for the individual entry.  If  the  program 
does not find a match,  it will default to code  0. Please note that 
options  A thru I are capital letters and not lower case.  If  lower 
case  letters  are used,  no match will occur and the  program  will 
default to code 0.

The codes are as follows:

     0    CN,ADDR,CITY-STATE,ZIP CODE,MR. LAST NAME
     1    CN,ADDR,CITY-STATE,ZIP CODE,MS. LAST NAME
     2    CN,ADDR,CITY-STATE,ZIP CODE,MRS. LAST NAME
     3    CN,ADDR,CITY-STATE,ZIP CODE,MISS LAST NAME
     4    CN,ADDR,CITY-STATE,ZIP CODE,FIRST NAME
     5    ADDR,CITY-STATE,ZIP CODE,MR. LAST NAME
     6    ADDR,CITY-STATE,ZIP CODE,MS. LAST NAME
     7    ADDR,CITY-STATE,ZIP CODE,MRS. LAST NAME
     8    ADDR,CITY-STATE,ZIP CODE,MISS LAST NAME
     9    ADDR,CITY-STATE,ZIP CODE,FIRST NAME
     A    FN-MI-LN,ADDR,CITY-STATE,ZIP CODE,MR. LAST NAME
     B    FN-MI-LN,ADDR,CITY-STATE,ZIP CODE,MS. LAST NAME
     C    FN-MI-LN,ADDR,CITY-STATE,ZIP CODE,MRS. LAST NAME
     D    FN-MI-LN,ADDR,CITY-STATE,ZIP CODE,MISS LAST NAME
     E    FN-MI-LN,ADDR,CITY-STATE,ZIP CODE,FIRST NAME
     F    CN,ADDR,CITY-STATE,ZIP CODE,GENTLEMEN
     G    CN,ADDR,CITY-STATE,ZIP CODE,MESDAMES
     H    CN,ADDR,CITY-STATE,ZIP CODE,SIR
     I    CN,ADDR,CITY-STATE,ZIP CODE,MADAM

CN        Company name      FN      First name       LN    Last name
ADDR      Street address    MI      Middle initial

Note  that formats 0 thru 4 and formats A thru I use the  same  Mail 
Merge  format  while  formats 5 thru 9 use a  different  Mail  Merge 
format. 

The  interface file is attached to the WordStar/MailMerge letter  by 
the  .DF directive.  Formats 0 thru 4 and A thru I are described  by 
the  .RV  COMPANY,ADDR1,ADDR2,ADDR3,NAME directive while  formats  5 
thru  9  are described by the .RV ADDR1,ADDR2,ADDR3,NAME  directive. 
Please refer to your WordStar Mailmerge manual for further  explana
tion.  WordStar and Mailmerge are copywritted programs from MicroPro 
Corporation.



OPTION  F - TERMINATE MAIL LIST PROGRAM- You will be returned to  PC 
DOS.


The mail list is composed of the following fields:

1.  Up to eighteen characters describing the last name
2.  Up to twelve characters describing the first name
3.  One character for the middle initial
4.  Up to seventeen characters for the company name
5.  Up to twenty six characters for the street address
6.  Up to four characters for the apartment number
7.  Up to twenty characters for the city name
8.  Two characters for the state
9.  Five characters for the zip code
10. Four  characters for the zip extension (not yet implemented  by 
    the postal authority)
11. Up to five characters for the user defined sort code
12. Three characters for the telephone area code
13. Three characters for the telephone prefix
14. Four characters for the telephone suffix
15. Up to four characters for the telephone extension



SUMMARY OF AUTOMATIC FEATURES

1.  Use of wild cards (*)
2.  Method of editing
3.  Highlighting
4.  Visual messages
5.  Multiple methods of sorting and extraction
6.  Requires  only one file to  contain entire mail list.  No  other         
    file will ever be generated (except for the mailmerge file).
7.  The mail list file may reside on either drive A or B
8.  The Mailmerge file may reside on either drive A or B and  may be 
    any name of your choice.







Alpha Computer Service
P.O. Box 2517
Cypress, California
90630

and  may be 
    any name of your choice.







Alpha Computer Service
P.O. Box
```
{% endraw %}

## NOTES504.TXT

{% raw %}
```
Program name:        Assorted Programs - details below

Author name:         Multiple authors

Program Description:
  1. CALPO Ver 2.3
     Appointment generator program with a maximum of 8 appointments per day.
     Author: P.L. Olympia , Darwin Systems Inc. , Ph. 301-963-4003

  2. BG
     Generates a batch file with file names of selected files.

  3. CLEAN
     Clears diskette for preventive maintenance of drive.
     Author: Marty Smith, 310 Cinnamon Oak Lane, Houston, Texas 77079
     Phone : 713-661-1241

  4. FATDUMP
     Lists disk files allocation table

  5. MAILLIST
     Maintain, sort & print mailing list. Needs 96K memory & 160K drive.
     Author: Alpha Computer Service. PO Box 2517, Cypress, CA 90630

  6. DUMP3   Version 3
     Search, dump & examine a file. Suggested donation $5.00
     Author: Nick Richards, 1124 S.Main, Burlington, N.C.  27215

  7. USERLOG Version 1.0
     Tracks the usage of the system. Needs 64K RAM and DOS 1.0 or above.
     Suggested Donation $ 25.00
     Author : Chris E. Lindberg, 5221 W. Washington Blvd., Milwaukee Il 53208

  8. TDD5PT2
     PC works as a Teletype device for deaf people with interface to phone.
     Author: John Spalding, c/o Handicapped Educational Exchange,
             11523 Charlton Drive, Silver Spring, MD 20902
     Phone : 301-593-7033

  9. HOTDEMO
     Allows the use of two memory partitions for different programs.
     Uses the SHIFT keys for control. Suggested donation $ 20.00
     Author: Robert Best, 13681 Dall Lane, Santa Ana, CA 92705

 10. AREACODE
     Displays the phone area code for any state.

 11. QUIKTIME
     Displays the time in words.
```
{% endraw %}

## SYSLOG.TXT

{% raw %}
```
The SYSLOG system on this disk has been replaced by the USERLOG system
which is preferable.
```
{% endraw %}

## TDD5PT2.ASM

{% raw %}
```
		TITLE	TDD VERSION 5.2 BY JOHN W. SPALDING
		PAGE	62,132

;This program allows an IBM PC to be used as a Telecommunications Device for
;the Deaf (TDD).  The cassette port of the PC must be coupled to the telephone
;line by a modified telephone amplifier or other suitable means.  Note that
;the modem function is provided by this program, not the coupling device.
;
;The cassette port pinouts, as described in the PC Technical Reference
;Manual from IBM are as follows:
;
;	1 and 3: Relay contacts normally used for cassette motor control.
;		TDD5 closes them at startup, opens them when it ends.  Could
;		be used to control on/off hook in your coupler.  Possible
;		future use for pulse dialing.
;
;	2:	Ground.
;
;	4:	Data in (received data) rated at +/- 13v max.
;
;	5:	Data out (transmitted data) rated at .075 vdc, may
;		be jumpered to .68vdc
;
;NOTE: This version is coded to produce an .EXE file to simplify installation.
;The following commands should be issued to assemble and link the program:
;
;		MASM TDD5;
;		LINK TDD5;
;		ERASE TDD5.OBJ
;
;The the uppercase letter keys on the keyboard are mapped to their
;corresponing TTY FIGS characters, for example, you can send "#" by
;typing SHIFT-H or by typing "#".  Linefeeds may be sent by typing
;CTRL-J, however the program will insert them automatically as needed.
;
;Type "TDD5" to run the program, type CTRL-Break to end it.

;8253 COUNTER/TIMER EQUATES

TIMER_MODE	EQU	43H		;PORT TO WRITE MODE WORD
TIMER_0 	EQU	40H		;TIMER 0 FOR XMIT/RECV TIMING
TIMER_2 	EQU	42H		;TIMER 2 FOR CARRIER GENERATION
TIMER_0_MODE	EQU	00110110B	;MODE WORD FOR TIMER 0
TIMER_2_MODE	EQU	10110110B	;MODE WORD FOR TIMER 2

NEW_TIMER_TICK	EQU	305		;GENERATE TICKS AT 3912 HZ

BAUD_RATE	EQU	86		;22 MILLISECONDS
SEND_TIMEOUT	EQU	3912/2		;ABOUT A HALF A SECOND
RECEIVE_TIMEOUT EQU	3912*3/4	;ABOUT 3/4 SECOND

SPACE_TONE	EQU	663		;1800 HZ SPACE
MARK_TONE	EQU	852		;1400 HZ MARK

;CASSETTE PORT EQUATES

PPI_B		EQU	061H		;8255 PPI PORT B
T2_GATE 	EQU	01H		;SET ON TO GATE TIMER 2 OUTPUT
SPEAKER_DATA	EQU	02H		;SET ON TO TURN ON SPEAKER
MOTOR_OFF	EQU	08H		;BIT OFF TO ENABLE CASSETTE CIRCUIT

PPI_C		EQU	062H		;8255 PPI PORT C
CASS_DATA_IN	EQU	10H		;SAMPLE CASSETTE INPUT
CASS_SHIFTS	EQU	4		;BITS TO SHIFT LEFT TO GET CASS DATA

;8259 PROGRAMMABLE INTERRUPT CONTROLLER EQUATES

INT_CONTROL	EQU	20H		;PORT ADDRESS OF 8259
EOI_COMMAND	EQU	20H		;END OF INTERRUPT COMMAND

;DEFINE THE INTERRUPT VECTORS WE'LL USE:

ABSOLUTE_ZERO	SEGMENT AT 0H

		ORG	4*08H		;TIMER_INT IS INT 08H
TIMER_INT	DD	?

		ORG	1BH*4		;CTRL-BRK INTERRUPT VECTOR
BRK_INT 	DD	?

ABSOLUTE_ZERO	ENDS

		PAGE

CODE		SEGMENT
		ASSUME	CS:CODE,DS:CODE,ES:CODE,SS:NOTHING

BANNER		DB	'TDD Version 5.2 (IBM PC)'
		DB	   13,10,'by John W. Spalding'
		DB	13,10,10,'Ctrl-Break to exit',13,10,10,'$'

SHIFT_REG	DB	0	;INCOMMING SIGNAL SHIFTED IN HERE
OUR_CLOCK	DW	0	;INCREMENTED AT 1909 HZ
SYSTEM_CLOCK	DW	0	;TO GENERATE 18HZ TICKS FOR SYSTEM
SAVE_PPI_B	DB	?	;ORIGINAL CASSETTE PORT SETTINGS
TIMER_SAVE	DD	?	;ORIGINAL TIMER INTERRUPT VECTOR
BREAK_SAVE	DD	?	;ORIGINAL BREAK KEY INTERRUPT
SHIFT_STATUS	DB	40H	;FIGS, LTRS STATUS OF SCREEN/KEYBOARD
FIGS_SHIFT	EQU	20H	;CURRENTLY IN FIGS SHIFT, OFF=LTRS SHIFT
FORCE_SHIFT	EQU	40H	;SEND FIGS/LTRS FOR NEXT CHARACTER
LAST_CHAR	DB	0	;LAST CHAR SEND -- USED TO FORCE LF IF REQ'D
HOLD_CHAR	DB	000H	;HOLD BAUDOT CHARACTER FOR KEYBOARD ROUTINE
CANCEL		DB	0	;SET TO 0FFH BY BREAK INTERRUPT

TABLE_BAUD_ASC	DB	8,'E',10,'A SIU',13,'DRJNFCK'           ;LETTERS
		DB	'TZLWHYPQOBG',0A0H,'MXV',80H
		DB	8,'3',10,'- ',7,'87',13,'$4',27H,',!:(' ;FIGURES
		DB	'5")2#6019?&',0A0H,'./;',80H

CODE_FIGS	EQU	1BH	;BAUDOT CODE FOR FIGS SHIFT
CODE_LTRS	EQU	1FH	;BAUDOT CODE FOR LTRS SHIFT
CODE_LF 	EQU	02H	;BAUDOT CODE FOR LINE FEED
CODE_CR 	EQU	08	;BAUDOT CODE FOR CARRIAGE RETURN

;IN THE FOLLOWING TABLE, BIT7=1 IS NO BAUDOT EQUIV, BIT6=1 MEANS EITHER SHFT
;BIT5=1 MEANS MUST BE FIGS SHIFT.

;			 0   1	 2   3	 4   5	 6   7
;			 8   9	 A   B	 C   D	 E   F

TABLE_ASC_BAUD	DB	80H,80H,80H,80H,80H,80H,80H,25H 	;00H-07H
		DB	40H,80H,42H,80H,80H,48H,80H,80H 	;08H-0FH
		DB	80H,80H,80H,80H,80H,80H,80H,80H 	;10H-17H
		DB	80H,80H,80H,80H,80H,80H,80H,80H 	;18H-1FH
		DB	44H,2DH,31H,34H,29H,80H,3AH,2BH 	;20H-27H
		DB	2FH,32H,80H,80H,2CH,23H,3CH,3DH 	;28H-2FH
		DB	36H,37H,33H,21H,2AH,30H,35H,27H 	;30H-37H
		DB	26H,38H,2EH,3EH,80H,80H,80H,39H 	;38H-3FH
		DB	80H,23H,39H,2EH,29H,21H,2DH,3AH 	;40H-47H
		DB	34H,26H,2BH,2FH,32H,3CH,2CH,38H 	;48H-4FH
		DB	36H,37H,2AH,25H,30H,27H,3EH,33H 	;50H-57H
		DB	3DH,35H,31H,80H,80H,80H,80H,80H 	;58H-5FH
		DB	80H,03H,19H,0EH,09H,01H,0DH,1AH 	;60H-67H
		DB	14H,06H,0BH,0FH,12H,1CH,0CH,18H 	;68H-6FH
		DB	16H,17H,0AH,05H,10H,07H,1EH,13H 	;70H-77H
		DB	1DH,15H,11H,80H,80H,80H,80H,40H 	;78H-7FH

END_MSG 	DB	13,10,10,'+++ TDD5 ENDED +++',13,10,10,'$'

BEL_MSG 	DB	'<BEL>$'        ;SUBSTITUTED FOR ^G  (07H)

SIG_SW		DW	OFFSET $	;INDICATES <SIGNAL> OR <      > WRITTEN
SIG_REG 	DB	0		;SLOW SHIFT REG FOR RING/BUSY
SIG_CLK 	DB	0		;LOCAL CLOCK FOR RING/BUSY TESTS
SIG_ON		DB	'<SIGNAL>$'     ;LEGEND TO INDICATE A SIGNAL
SIG_OFF 	DB	'<      >$'     ;LEGEND TO INDICATE NO SIGNAL

		PAGE

MAIN_ENTRY:	XOR	AX,AX		;PUSH A RETURN ADDRESS
		PUSH	DS		;AND SET UP SEGMENTS
		PUSH	AX
		MOV	AX,CS
		MOV	DS,AX
		MOV	ES,AX

		CALL	CLR_SCRN	;CLEAR THE SCREEN AND ...
		MOV	DX,OFFSET BANNER	;PRINT HELLO MESSAGE
		CALL	PRINT_STRING

		CALL	TIMER_INIT		;SET UP INTERRUPT VECTORS

;MAIN LOOP -- ONCE XMIT/RECV BEGINS STAY IN THAT MODE FOR GIVEN TIMEOUT.
;THE CALLED ROUTINES RETURN OR EXPECT A BAUDOT CHARACTER CODE IN AL

RECEIVE1:	CALL	RECEIVE_TTY		;TRY TO RECEIVE A CHARACTER
		JZ	TRANSMIT1		;NONE

RECEIVE2:	CALL	PRINT_BAUDOT		;PRINT THE CHARACTER
		MOV	OUR_CLOCK,0		;SET TIMEOUT

RECEIVE3:	CALL	RECEIVE_TTY		;TRY TO RECEIVE ANOTHER CHAR
		JNZ	RECEIVE2
		CMP	OUR_CLOCK,RECEIVE_TIMEOUT ;CHECK TIMEOUT
		JC	RECEIVE3		;TRY UNTIL EXPIRED

TRANSMIT1:	OR	SHIFT_STATUS,FORCE_SHIFT ;SEND SHIFT ON 1ST CHR
		CALL	GET_BAUDOT		;TRY TO READ THE KEYBOARD
		JZ	SIGNAL1 		;NO, LOOK FOR RING/BUSY

TRANSMIT2:	CALL	TRANSMIT_TTY		;SEND THE CHARACTER
		MOV	OUR_CLOCK,0		;SET TIMEOUT

TRANSMIT3:	CALL	GET_BAUDOT		;LOOK FOR ANOTHER CHARACTER
		JNZ	TRANSMIT2		;SEND IT IF ANY
		CMP	OUR_CLOCK,SEND_TIMEOUT ;CHECK TIMEOUT
		JC	TRANSMIT3		;TRY UNTIL EXPIRED
		CALL	CARRIER_OFF		;TURN OFF CARRIER
		JMP	RECEIVE1		;AND ENTER RECEIVE MODE

SIGNAL1:	CALL	SIG_TEST		;GO TEST FOR RING/BUSY
		CMP	CANCEL,0		;BRK KEY PRESSED
		JZ	SHORT RECEIVE1		;NO
		MOV	CANCEL,0		;RESET SW FOR DEBUG

;CTRL_BRK KEY WAS PRESSED

FINISH_UP:	CALL	TIMER_QUIT		;CLEAN UP VECTORS AND TIMERS

		MOV	DX,OFFSET END_MSG	;PRINT ENDING MESSAGE
		CALL	PRINT_STRING
DUMMY1		PROC	FAR
		RET				;SHOULD BE A FAR RETURN HERE
DUMMY1		ENDP
		PAGE

;BREAK KEY INTERRUPT ROUTINE

BREAK_KEY:	MOV	CS:CANCEL,0FFH		;SET THE FLAG
		IRET				;AND RETURN

;RECEIVE A TTY CHARACTER.

RECEIVE_TTY:	MOV	AL,SHIFT_REG		;LOOK FOR CARRIER TONE
		CMP	AL,01010101B
		JZ	HAVE_CARRIER		;FOUND START BIT (SPACE)
		SHL	AL,1			;START WITH 01 OR 10?
		JO	RECEIVE_TTY		;YES, STILL POSSIBLE
		XOR	AL,AL			;SET ZERO FLAG AND AL=0
		RET

HAVE_CARRIER:	MOV	OUR_CLOCK,0		;RESET THE CLOCK

START_WAIT:	CMP	OUR_CLOCK,BAUD_RATE+BAUD_RATE/8
		JC	START_WAIT		;DELAY TO 1ST DATA BIT
		XOR	AL,AL			;SET UP TO RECEIVE DATA BITS
		MOV	CX,5

DATA_BITS:	MOV	OUR_CLOCK,0

FIND_TONE:	CMP	SHIFT_REG,01010101B	;LOOK FOR SPACE
		JZ	HAVE_BIT		;HAVE ONE, NOTE CF=0
		CMP	OUR_CLOCK,BAUD_RATE/3	;ONLY TRY SO LONG
		JC	FIND_TONE
		STC				;DIDN'T FIND IT, SET 1 BIT

HAVE_BIT:	RCR	AL,1			;MOVE THE CARRY IN

BIT_DELAY:	CMP	OUR_CLOCK,BAUD_RATE	;SIT HERE FOR
		JC	BIT_DELAY		;REST OF BIT TIME

		LOOP	DATA_BITS		;SHIFT REST OF BITS
		SHR	AL,1			;ONLY SHIFTED 5 BITS
		SHR	AL,1			;SO SHIFT OTHER 3
		SHR	AL,1

		CMP	AL,0FFH 		;SET NONZERO FLAG
		RET				;RETURN WITH CHARACTER

		PAGE

;SEND TTY CHARACTER OVER THE CASSETTE INTERFACE USING TIMER 2

TRANSMIT_TTY:	MOV	BL,AL			;MOVE CHARACTER
		CLC				;AND CLEAR THE CARRY BIT
		MOV	CX,6			;NUMBER OF BITS

XMIT_LOOP:	CALL	XMIT_BIT		;SEND ONE BIT
		RCR	BL,1			;GET NEXT BIT
		LOOP	XMIT_LOOP		;AND DO IT AGAIN

		MOV	DX,BAUD_RATE+BAUD_RATE/2 ;SEND 1 1/2 STOP BITS
		CALL	XMIT_BIT1

		RET				;RETURN LEAVING CARRIER ON

XMIT_BIT:	MOV	DX,BAUD_RATE		;TIME FOR ONE BIT
		MOV	AX,SPACE_TONE		;ASSUME SPACE
		JNC	XMIT_BIT0		;YES, BIT IS ZERO

XMIT_BIT1:	MOV	AX,MARK_TONE		;ELSE, SET MARK

XMIT_BIT0:	CALL	WRITE_TIMER2		;SET THE TIMER
		CALL	CARRIER_ON		;TURN ON (USUALLY ALREADY ON)
		MOV	OUR_CLOCK,0		;SET THE TIMER

XMIT_BIT2:	CMP	OUR_CLOCK,DX		;WAIT TIL IT
		JC	XMIT_BIT2		;GETS UP THERE
		RET				;THEN RETURN

		PAGE

;TEST FOR NON-CARRIER SIGNALS SUCH AS RING/BUSY

SIG_TEST:	MOV	AL,BYTE PTR OUR_CLOCK+1 ;DO IT EVERY 256 TICKS
		CMP	AL,SIG_CLK
		JZ	SIG_RET

		MOV	SIG_CLK,AL
		MOV	AL,SHIFT_REG
		SHL	AL,1
		RCR	SIG_REG,1	;SHIFT INTO SLOW REG
		MOV	DX,OFFSET SIG_OFF
		JZ	SIG_PRT
		MOV	DX,OFFSET SIG_ON

SIG_PRT:	CMP	DL,BYTE PTR SIG_SW ;DON'T PRINT IF ALREADY THERE
		JZ	SIG_RET
		MOV	SIG_SW,DX

		MOV	AH,3		;GET CURSOR POSITION
		CALL	SIG_VID
		PUSH	DX

		MOV	DX,72		;SET NEW CURSOR POSITION
		CALL	SIG_SET

		MOV	DX,SIG_SW	;NOW PRINT THE FLAG
		CALL	PRINT_STRING

		POP	DX		;RESTORE ORIGINAL CURSOR POSITION
		JMP	SHORT SIG_SET

CLR_SCRN:	MOV	AX,0600H	;SCROLL/CLEAR FUNCTION
		XOR	CX,CX		;UPPER LEFT CORNER
		MOV	DX,24*256+79	;LOWER RIGHT CORNER
		MOV	BH,07H		;DEFAULT ATTRIBUTE
		INT	10H		;ROM BIOS CALL
		XOR	DX,DX		;NEED TO HOME THE CURSOR

SIG_SET:	MOV	AH,2		;CODE TO SET CURSOR

SIG_VID:	MOV	BH,0		;ASSUME VIDEO PAGE 0
		INT	10H		;VIDEO FUNCTION INTERRUPT
SIG_RET:	RET


;CONSOLE I/O AND ASCII/BAUDOT TRANSLATION ROUTINES

GET_BAUDOT:	MOV	AL,HOLD_CHAR		;GET PREVIOUS CHARACTER IF ANY
		OR	AL,AL			;IF ANY
		JNZ	HAVE_CHAR		;THEN SKIP READ

TRY_STATUS:	CALL	CONSOLE_GET		;TRY TO GET CHAR FROM KEYBOARD
		JZ	GET_NULL		;NO EXIT WITH ZERO FLAG SET

HAVE_CHAR:	MOV	HOLD_CHAR,AL		;ASSUME WANT TO HOLD
		CMP	LAST_CHAR,13		;WAS PREVIOUS CHAR CR?
		JNZ	GET_XLAT		;NO TRANSLATE THIS ONE
		CMP	AL,10			;CR FOLLOWED BY LF?
		JZ	GET_XLAT		;YES, WE'RE OK

		MOV	AL,CODE_LF		;INSERT A LINE FEED
		JMP	SHORT SET_FORCE 	;AND GO FORCE SHIFT NEXT

GET_XLAT:	PUSH	BX			;TRANSLATE CHARACTER TO BAUDOT
		MOV	BX,OFFSET TABLE_ASC_BAUD ;XLATE TABLE
		XLAT
		POP	BX

		CMP	AL,80H			;UNKNOWN CHARACTER
		JNZ	GOOD_XLAT		;SKIP OF KNOWN

GET_NULL:	AND	HOLD_CHAR,0		;CLEAR HOLD AND SET ZERO FLAG
		RET

GOOD_XLAT:	MOV	AH,AL			;GET BAUDOT CODE IN AL
		AND	AL,1FH			;SHIFT CODE IN AH
		AND	AH,60H			;40=ANY,20=FIGS,00=LTRS

		TEST	AH,40H			;ANY SHIFT OK?
		JZ	TEST_FORCE		;NO
		MOV	AH,SHIFT_STATUS 	;YES MAKE REQUESTED = CURRENT

TEST_FORCE:	TEST	SHIFT_STATUS,FORCE_SHIFT ;FORCE FIGS/LTRS?
		JNZ	GET_FORCE

		TEST	AH,40H			;ANY SHIFT NEEDED?
		JNZ	CLEAR_HOLD		;NO, SKIP

		CMP	AH,SHIFT_STATUS 	;NEED TO SEND A SHIFT?
		JNZ	GET_FORCE		;YES

CLEAR_HOLD:	MOV	HOLD_CHAR,0		;WON'T NEED THIS
		JMP	SHORT TEST_LF

GET_FORCE:	TEST	AH,FIGS_SHIFT		;ASSUME NEED FIGS
		MOV	AL,CODE_FIGS		;TRUE?
		JNZ	TEST_LF 		;YES, SEND THE FIGS
		MOV	AL,CODE_LTRS		;SET TO INSERT LTRS SHIFT

TEST_LF:	CMP	AL,CODE_LF		;SENDING A LINE FEED THIS TIME?
		JNZ	GET_ECHO		;NO

SET_FORCE:	OR	SHIFT_STATUS,FORCE_SHIFT ;YES SEND FIGS/LTRS AFTER LF

GET_ECHO:	PUSH	AX
		CALL	PRINT_BAUDOT		;PRINT THE CHARACTER
		POP	AX
		CMP	AL,0FFH 		;MAKE SURE NO ZERO FLAG

		RET

CONSOLE_GET:	MOV	AH,1			;ROM BIOS CONSOLE STATUS
		INT	16H
		JZ	CON_RET

		MOV	AH,0			;ROM BIOS CONSOLE GET
		INT	16H
		AND	AL,7FH

CON_RET:	RET

PRINT_BAUDOT:	MOV	SIG_SW,OFFSET SIG_SW	;FORCE <SIGNAL> NEXT TIME
		PUSH	BX			;PRINT BAUDOT CHAR IN AL
		MOV	BX,OFFSET TABLE_BAUD_ASC
		OR	AL,SHIFT_STATUS 	;INCLUDE FIGS/LTRS SHIFT
		AND	AL,3FH			;CLEAR EXTRA BITS
		XLAT				;HAVE ASCII CHAR IN AL
		POP	BX

		TEST	AL,80H			;SEE IF THIS WAS
		JZ	CONSOLE_PUT		;A FIGS OR LETTERS SHIFT

		AND	AL,FIGS_SHIFT		;IF THIS WAS A SHIFT,
		MOV	SHIFT_STATUS,AL 	;THEN UPDATE THE SHIFT
		RET				;RETURN

CONSOLE_PUT:	MOV	LAST_CHAR,AL		;THEN RESTORE CHAR WE WANT
		CMP	AL,07H			;IS THIS BEL?
		JZ	PRINT_BEL		;YES PRINT [BEL]

TTYFUNC:	MOV	AH,14			;TTY VIDEO FUNCTION
		INT	10H
		RET

PRINT_BEL:	PUSH	DX			;PRINT <BEL>
		MOV	DX,OFFSET BEL_MSG
		CALL	PRINT_STRING
		POP	DX
		RET

PRINT_STRING:	PUSH	SI			;POINTER TO STRING
		MOV	SI,DX
		CLD

PS1:		LODSB				;LOAD BYTE TO PRINT
		CMP	AL,'$'                  ;TERMINATED BY $
		JZ	PSR
		CALL	TTYFUNC
		JMP	SHORT PS1

PSR:		POP	SI
		RET

		PAGE

;TIMER AND CASSETTE INTERFACE SUPPORT ROUTINES

;TIMER INTERRUPT ROUTINE PERFORMS THE FOLLOWING FUNCTIONS:

;	- SHIFTS ONE BIT OF CASSETTE INPUT DATA INTO A 1 BYTE SHIFT REGISTER
;	- ADDS 1 TO A WORD USED BY MAINLINE ROUTINES AS A CLOCK
;	- JUMPS TO IBM TIMER INTERRUPT ROUTINE AT CORRECT INTERVAL (18HZ)

NEW_TIMER_INT:	STI				;INTERRUPTS BACK ON
		PUSH	DS
		PUSH	AX
		MOV	AX,CS
		MOV	DS,AX
		ASSUME	ES:NOTHING

		IN	AL,PPI_C		;READ THE CASSETTE PORT
		REPT	CASS_SHIFTS		;SHIFT CORRECT NUMBER
		RCL	AL,1			;TO GET INTO CARRY BIT
		ENDM				;(FASTER THAN RCL AL,CL)
		RCR	SHIFT_REG,1		;CASSETTE DATA SHIFTED IN

		INC	OUR_CLOCK		;ADD 1 TO OUR CLOCK

		ADD	SYSTEM_CLOCK,NEW_TIMER_TICK  ;NEED TO UPDATE IBM CLOCK?
		JC	IBM_TICK		;YES

		MOV	AL,EOI_COMMAND		;END OF INTERRUPT TO 8259
		OUT	INT_CONTROL,AL

		POP	AX			;RESTORE REGS AND RETURN
		POP	DS
		IRET

IBM_TICK:	POP	AX			;RESTORE REGS AND GO TO
		POP	DS			;IBM TIMER INT (THEY'LL
		JMP	CS:TIMER_SAVE		;DO THE EOI INSTR.

TIMER_INIT:	CLI				;NO INTERRUPTS WHILE WE FIDDLE
		PUSH	DS
		PUSH	ES

		XOR	AX,AX			;SET ES
		MOV	DS,AX			;TO ZERO
		ASSUME	DS:ABSOLUTE_ZERO

		CLD
		MOV	DI,OFFSET TIMER_SAVE
		MOV	SI,OFFSET TIMER_INT

		MOVSW
		MOVSW

		MOV	SI,OFFSET BRK_INT

		MOVSW
		MOVSW

		MOV	WORD PTR TIMER_INT[0],OFFSET NEW_TIMER_INT
		MOV	WORD PTR TIMER_INT[2],CS

		MOV	WORD PTR BRK_INT,OFFSET BREAK_KEY
		MOV	WORD PTR BRK_INT+2,CS

		MOV	AX,NEW_TIMER_TICK	;INITIALIZE TIMER 0
		CALL	WRITE_TIMER0

		IN	AL,PPI_B		;INITIALIZE CASSETTE PORT
		MOV	SAVE_PPI_B,AL		;(SAVE FOR QUIT ROUTINE)
		AND	AL,NOT (MOTOR_OFF OR T2_GATE OR SPEAKER_DATA)
		OUT	PPI_B,AL		;MOTOR ON, GATE, SPKR OFF

		JMP	SHORT TIMER_INITEND	;GO RESTORE ES AND RETURN

TIMER_QUIT:	CLI				;INTERRUPTS OFF FOR THIS
		PUSH	DS
		PUSH	ES

		XOR	AX,AX
		MOV	ES,AX
		ASSUME	ES:ABSOLUTE_ZERO,DS:CODE

		MOV	SI,OFFSET TIMER_SAVE
		MOV	DI,OFFSET TIMER_INT
		MOVSW
		MOVSW
		MOV	DI,OFFSET BRK_INT
		MOVSW
		MOVSW

		XOR	AX,AX			;RESTORE TIMER 0 TO IBM VALUE
		CALL	WRITE_TIMER0

		MOV	AL,SAVE_PPI_B		;RESTORE CASSETTE PORT
		OUT	PPI_B,AL

TIMER_INITEND:	POP	ES			;SET BACK ORIGINAL ES REG
		POP	DS			;AND DS
		STI
		RET

		ASSUME	DS:CODE,ES:CODE

;WRITE TIMER ROUTINES -- SET TIMER0 OR TIMER2 TO VALUE IN AX

WRITE_TIMER0:	PUSH	DX			;ENTER HERE FOR TIMER 0
		PUSH	AX

		MOV	DX,TIMER_0		;PORT ADDRESS
		MOV	AL,TIMER_0_MODE 	;MODE WORD FOR TIMER 0

		JMP	SHORT WRITE_TIMERX

WRITE_TIMER2:	PUSH	DX			;ENTER HERE FOR TIMER 2
		PUSH	AX

		MOV	DX,TIMER_2		;PORT ADDRESS
		MOV	AL,TIMER_2_MODE 	;MODE WORD FOR TIMER 2

WRITE_TIMERX:	OUT	TIMER_MODE,AL		;SET MODE OF REQUESTED TIMER

		POP	AX			;WRITE LSB
		OUT	DX,AL
		MOV	AL,AH			;THEN MSB
		OUT	DX,AL

		POP	DX			;ALREADY POPPED AX, POP DX
		RET

;ROUTINES TO TURN CARRIER TONE ON OR OFF AT CASSETTE INTERFACE.

CARRIER_ON:	PUSH	AX			;START CARRIER TONE
		IN	AL,PPI_B		;TO MONITOR, ADD:
		OR	AL,T2_GATE		;OR SPEAKER_DATA
		JMP	SHORT CARRIER_EXIT

CARRIER_OFF:	PUSH	AX			;TURN OFF CARRIER TONE
		IN	AL,PPI_B
		AND	AL,NOT (T2_GATE OR SPEAKER_DATA)

CARRIER_EXIT:	OUT	PPI_B,AL
		POP	AX
		RET

CODE		ENDS

STACK		SEGMENT STACK
		DB	256 DUP(?)
STACK		ENDS
		END	MAIN_ENTRY
```
{% endraw %}

## TDD5PT2.DOC

{% raw %}
```
				 TDD5PT2.DOC

	 Deaf people in this country have, over the past quarter century
    or	thereabouts,  adopted the "TTY" or "TDD" as their standard means
    of communicating over the telphone. "TTY" is of course a contraction
    for  "Teletype",  a  trademark  of  the Teletype Corporation.  "TDD"
    stands for "Telecommunications Device for the Deaf".

	   The original TDD was a teletype machine,  and the modem  used
    was  one designed for the specific purpose of deaf communications by
    Dr.  Robert Weitbrecht.  It is not compatible with any standard Bell
    modem  design,  as	the  TDD  is incompatible with modern computers.
    Computers of course use ASCII while the TDD  uses  the  Baudot  code
    transmitted  at  45.5  baud.  A  description  of  the  TDD	and  the
    Weitbrecht	modem are given in the file  "TDD.TXT".

	 The old mechanical Baudot teletype machines  still  serve  many
    people  as	their working TDD.  However,  many newer devices of more
    modern design have come on the market,  some incorporating	a  modem
    with  a  keyboard  and  an LED or LCD display.  In addition,  modern
    computers often serve the place of a TDD,  since they are  perfectly
    capable  of  converting  between  the  ASCII and Baudot codes.  Some
    computers,	in fact,  are able to replace the  modem  as  well.  The
    IBM-PC is one of these.

	 In order to make the PC serve as a TDD, it is only necessary to
    install appropriate software (available for downloading in the files
    TDD5PT2.EXE  and  TDD5PT2.ASM)  and  connect  the  computer  to  the
    telephone line in some suitable fashion. One suitable approach is to
    use the technique designed by the author of the software; it employs
    a Radio Shack telephone amplifier,	a couple  of  plugs,  jacks  and
    switches,  and a little soldering.	As an alternative,  the complete
    device can be purchased for $40  from  a  group  in  Texas	who  are
    working in the field of rehabilitation.

	 The software was written,  and placed in the public domain,  by
    John Spalding of Atlanta Georgia.  He  has	made  it  available  for
    distribution  to  the Handicapped Educational Exchange (HEX) which I
    operate.  Further information on  the  telephone  interface  can  be
    obtained from the address below.  If you want a copy of the software
    on disk,  send me a formatted disk and a self-addressed mailer  with
    postage   attached,   along  with  a  note	as  to	what  you  want.

	 Similar software by John Spalding is available  for  the  Tandy
    Color  Computer.  This  machine  also  serves as its own modem,  and
    employs the  same  telephone  coupling  device.  Software  by  other
    authors (most local and members of AMRAD, the Amateur Radio Research
    and Development Corporation) is available for the  TRS-80  model  I,
    PET,   Atari,   Apple,   VIC-20,   Commodore  64  and  Smoke  Signal
    Broadcasting 6800 and 6809 machines. These other programs require an
    external  modem  (plans for which are available) and are also in the
    public  domain;   design  data  are  available   for   the	cost  of
    reproduction and mailing.

	 For  further  information  contact:
	    Handicapped Educational Exchange
	    11523 Charlton Drive
	    Silver Spring MD 20902

	 The HEX BBS operates 24 hours a day on  (301)	593-7033,  using
    300 baud only and settings of 8-N-1. It can also be accessed using a
    TDD.  I can be contacted by voice on (301) 681-7372 evenings  (at  a
    reasonable hour,  please) and weekends.  The AMRAD and HEX crew look
    forward to your comments regarding the above software,  and to  your
    questions  and information on all aspects of the use of computers to
    assist the disabled.

				       Richard Barth

```
{% endraw %}

## USERLOG.DOC

{% raw %}
```



   NOTE:

   This manual has been formatted such that, if cut into
   sheets that measure 8.5" x 5.5", it will fit into your DOS
   manual or another similarly sized binder.

                                            - CEL

   (This page may be discarded)
   






                   =====================
                  ||                   ||
    ==============||   U s e r L o g   ||==============
   ||                                                 ||
    ===================================================


                            by

                     Chris E. Lindberg

                          v1.00






















   Copyright(c) 1985                All Rights Reserved
   
                                            U s e r L o g
   -------------------------------------------------------


                       COPYRIGHT 1985

                             BY

                      CHRIS E. LINDBERG

   This software product and manual is copyrighted.  All
   rights are reserved by Chris E. Lindberg.


                   USER SUPPORTED SOFTWARE
   I am distributing this software using the "freeware"
   concept because I believe that software should be usable
   AND affordable.  Therefore, if you are using this soft-
   ware and find it to be of value, please fill out the
   registration card on last page of this manual and return
   it with $25.00 to

                      Chris E. Lindberg
                   5221 W. Washington Blvd.
                    Milwaukee, WI   53208

   Registration of your ownership of this software program
   and manual will entitle you to notification of any
   updates and free upgrades (excluding diskette and postage).

   A one-time fee of $25.00 is required to register this soft-
   ware and manual.  This registration fee is tax deductible
   for business-users of personal computers.







   -------------------------------------------------------

                             -i-
   
                                            U s e r L o g
   -------------------------------------------------------


                     TABLE OF CONTENTS


   INTRODUCTION TO USERLOG .............................1

   SYSTEM REQUIREMENTS..................................2

   BEFORE YOU BEGIN.....................................3

   INSTALLING USERLOG...................................4

   USING USERLOG........................................5

   THE USERLOG LOG ENTRY SCREEN.........................8

   CREATING A NEW LOG FILE (/N).........................9

   LOGGING IN (/I).....................................10

   LOGGING OUT (/O)....................................11

   BROWSING LOG ENTRIES (/B)...........................12

   LISTING LOG ENTRIES (/L)............................13

   USING USERLOG IN BATCH FILES........................14

   USERLOG REGISTRATION FORM...........................16








   -------------------------------------------------------

                             -ii-
                                            U s e r L o g
   -------------------------------------------------------


                  INTRODUCTION TO USERLOG

   USERLOG is a system utility designed to maintain a
   disk-based file of computer usage.  As such, it may
   be used in lieu of a written log to record and monitor
   the business and personal use for which your personal
   computer is being used.

   The main features of USERLOG are:

        -  the utility is simple to use
        -  it is invoked directly from the PC-DOS command
           level.
        -  it can be used in batch files or with keyboard
           enhancement programs.
        -  all entries are automatically time and date
           stamped using your system's clock/calendar.
        -  elapsed times for each entry are calculated
           automatically and stored with each log entry
        -  the browsing and listing features permit you
           to selectively display or print log entries
        -  listings of log entries show the number of
           hours the computer was used for personal and for
           business use.












   -------------------------------------------------------

                             -1-
   
                                            U s e r L o g
   -------------------------------------------------------


                   SYSTEM REQUIREMENTS

   USERLOG has the following minimal system requirements

        -  IBM Personal Computer PC/XT/AT
        -  64K RAM
        -  One floppy disk drive
        -  Monochrome or color monitor
        -  printer port configured as LPT1
        -  printer
        -  PC-DOS version 1.0 or greater

   While optional, the use of a battery-powered clock/
   calendar that automatically sets your system clock and
   calendar is highly recommended.





















   -------------------------------------------------------

                             -2-
   
                                            U s e r L o g
   -------------------------------------------------------


                      BEFORE YOU BEGIN

   Before you put USERLOG to work for you, it is a good
   idea to create a working copy of your USERLOG program
   file.  First, you will need a blank, formatted diskette.
   Place your DOS diskette into drive A and next to the
   DOS prompt type

   FORMAT A:

   Follow the instructions on the screen to complete the
   diskette formatting process.

   Once the formatting process has been completed, a
   working copy of USERLOG can be made by entering next
   to the DOS prompt

   DISKCOPY A: A:    (if you have  1 disk drive)

     or

   DISKCOPY A: B:    (if you have 2 disk drives)

   Again, follow the directions on the screen to complete
   the copying process.

   Once a working copy of USERLOG has been made, store the
   original USERLOG diskette in a safe place.  Use the
   working copy of USERLOG to transfer the program file or
   maintain the log data file.






   -------------------------------------------------------

                             -3-
   
                                            U s e r L o g
   -------------------------------------------------------


                     INSTALLING USERLOG

   Floppy Drive Systems

   USERLOG.COM should be transferred to a blank and
   formatted diskette (See BEFORE YOU BEGIN and USING
   USERLOG IN BATCH FILES).  Because USERLOG records
   log entries in the same directory in which USERLOG.COM
   resides, the log file will be maintained on the same
   diskette.  The number of log entries that can be
   written to a diskette depends on the free space
   available.  A blank double-sided, double-density
   diskette formatted at 9 tracks per inch containing
   USERLOG.COM will have approximately 336 kilobytes of
   free storage available.  Since each log entry consumes
   63 bytes of storage, approximately 5300 log entries
   can be stored on the diskette.  This means you can
   record approximately 14 log entries per day.

   Hard Disk Systems

   USERLOG maintains the log file in the same directory
   in which USERLOG.COM resides.  As a result, USERLOG.COM
   can be installed in any directory or subdirectory on
   a hard disk.  However, unless you make extensive use
   of batch files or keyboard enhancement programs (e.g.
   PROKEY) to run applications, we recommend that
   USERLOG.COM reside in the root directory.








   -------------------------------------------------------

                             -4-
   
                                            U s e r L o g
   -------------------------------------------------------


                       USING USERLOG

   USERLOG is a system utility that is invoked at the
   DOS command level i.e. next to the DOS prompt.  To
   run USERLOG, the following syntax must be used

   d:USERLOG/[p]

   where "d" designates the physical drive in which
   USERLOG resides and "p" (short for parameter) instructs
   USERLOG which function to perform.  The following
   table lists the parameters that USERLOG recognizes,
   their functions and the page number of this manual
   where each function is described in greater detail.

   PARAMETER           FUNCTION               PAGE
   ---------   -------------------------     ------
      /N       Create a new log file            9
      /I       Log in                          10
      /O       Log out                         11
      /B       Browse log entries              12
      /L       List log entries                13

   NOTE:  USERLOG will accept a parameter in either upper-
   case or lowercase letters.

   For example, suppose you are going to begin analyzing
   last year's sales figures with your favorite spread-
   sheet program and wish to enter the activity into your
   log file.  To "log in", next to the DOS prompt you
   would type

   USERLOG /I



   -------------------------------------------------------

                             -5-
   
                                            U s e r L o g
   -------------------------------------------------------


   If USERLOG resides on a drive other than the default
   drive, you would type

   d:USERLOG /I

   where "d:" specifies the physical drive in which
   USERLOG exists.

   For systems equipped with a hard disk drive, a path
   name must be specified if USERLOG.COM is not in the
   current directory.  For example, if USERLOG.COM resides
   in a directory named MYLOG, to log in you would enter
   next to the DOS prompt

   \MYLOG\USERLOG /I

   All parameters are invoked in an identical fashion.
   If no parameters are specified or the parameter is not
   recognized, USERLOG will inform you that an error has
   occurred and give you the option of selecting the
   correct parameter or returning to DOS.  Thus, USERLOG
   can be invoked at the DOS command level by including
   the parameter, or by entering USERLOG next to the
   command prompt and selecting an option.

   With the exception of logging an entry out (/O), you
   may escape from USERLOG at any time simply by pressing
   the [ESC] key.

   To insure the integrity of the log file and, therefore,
   your records, no means for editing log entries have
   been provided.  Attempts to edit the log file with a
   text editor will probably cause irreparable damage to
   the contents of the file.


   -------------------------------------------------------

                             -6-
   
                                            U s e r L o g
   -------------------------------------------------------


                         IMPORTANT
                   ---------------------

   If your computer is not equipped with a battery-
   powered clock/calendar that automatically sets the
   computer time and date when started, then be sure to
   set the correct system time and date when starting
   the computer.  USERLOG assumes that the system time
   and date are correct.



























   -------------------------------------------------------

                             -7-
   
                                            U s e r L o g
   -------------------------------------------------------


                THE USERLOG LOG ENTRY SCREEN

   When USERLOG is invoked correctly, your display screen
   will clear and the log entry data screen will appear.
   The purpose and contents of each field in the screen
   are described below.

         FIELD              DESCRIPTION
       ----------   --------------------------------------
        User         1 to 3 characters can be entered
                     in this field to identify the user
                     (e.g. your initials).
        Category     The number 1 or  2 is entered in
                     this field to identify whether the
                     task is (1) business-oriented or
                     (2) for personal use.
        Task         Up to 24 characters may be used to
                     describe the activity.
        In           The time the USER logged in
        Out          The time the USER logged out
        Date         The date the USER logged in or out.
        E. Hours     The elapsed hours between logging in
                     and out.
        Entry        The log entry number.
        Status Area  User prompts or the status of the
                     current operation is displayed in
                     this area.









   -------------------------------------------------------

                             -8-
   
                                            U s e r L o g
   -------------------------------------------------------


                CREATING A NEW LOG FILE (/N)

   When first installing USERLOG, or at the beginning of
   each new calendar year, a new log file must be created
   before any entries can be made.

   To create a new log file, next to the DOS prompt type

   USERLOG /N

   USERLOG will ask you to enter the serial number of
   your system unit in the status area of the USERLOG
   log entry screen.  Once you have supplied the serial
   number, USERLOG will record the current system date
   and create a data file in the current directory with
   the name "USERLOG.yy" where the extension "yy" corre-
   sponds to the last two digits of the year held by the
   system clock/calendar (e.g. USERLOG.85).

   If you attempt to use USERLOG before a log file has
   been created, or if the calendar year changes, USERLOG
   will indicate that USERLOG.yy cannot be found and
   should be created by using the /N parameter.

   USERLOG will not create a new log file if one already
   exists in the current directory that corresponds to
   the current settings of your system's clock/calendar.









   -------------------------------------------------------

                             -9-
   
                                            U s e r L o g
   -------------------------------------------------------


                      LOGGING IN (/I)

   Each time you begin a new activity on your computer,
   you should create a new log entry in your file using
   the /I parameter.  Invoking USERLOG with the /I
   parameter causes the USERLOG log entry screen to
   appear on your display.  To create the new entry,
   USERLOG requires that you fill three field with the
   following information

   FIELD                    YOU ENTER
   -------    ------------------------------------------
   USER        1 to 3 characters that identifies the
               user(e.g. your initials)
   CAT         Enter "1" if the activity is business
               related or "2" if it is for personal use.
   TASK        Up to 24 characters may be entered in
               this field to describe the activity.

   Once you filled in the three field with the appropriate
   information, USERLOG time and date stamps the entry
   with the current settings of your system clock/calendar
   then exits to DOS.

   If the last log entry is still open, USERLOG will auto-
   matically close that entry and display its contents
   before creating a new log entry (See LOGGING OUT (/O)).









   -------------------------------------------------------

                             -10-
   
                                            U s e r L o g
   -------------------------------------------------------


                      LOGGING OUT (/O)

   After logging in and completing an activity on your
   computer, you must "log out" the entry using the /O
   parameter.  Invoking USERLOG with the /O parameter
   causes the USERLOG log entry screen to appear contain-
   ing the information from the last open entry.  Logging
   out is automatic feature of USERLOG.  Therefore, the
   "Out" field is automatically stamped with your system's
   current time, the hours that have elapsed since logging
   in are calculated and displayed in the field marked
   "E. Hours", the log file is updated, and control is
   returned to DOS.

   If the last log entry has already been logged out,
   USERLOG will inform you of such and will exit to DOS.

   If you are moving from one application to another
   and wish to enter each activity into your log file,
   you may "shortcut" the process of logging in and out
   by using only the /I parameter between activities.
   Invoking the /I parameter with the last entry still
   open causes USERLOG to automatically log out and
   display the contents of the last entry before creating
   a new entry (See LOGGING IN (/I)).











   -------------------------------------------------------

                             -11-
   
                                            U s e r L o g
   -------------------------------------------------------


                 BROWSING LOG ENTRIES (/B)

   A facility for browsing forwards and backwards through
   your log file one entry at a time has been provided
   for in USERLOG.  When USERLOG is invoked with the /B
   parameter, USERLOG will ask for the beginning date in
   the status area of the log entry screen.  Once the
   date has been entered in a mm/dd format, USERLOG will
   scan the log file and display on the screen the first
   log entry whose date is greater than or equal to the
   date you supplied.  If the dates of all the log entries
   fall before the date you specified, then the last log
   entry is displayed.

   After a log entry has been displayed, certain keys on
   the keyboard can be used to browse through the log
   file.  The following table lists the keys and their
   respective functions:

             KEY             FUNCTION
           --------   -------------------------
            [->]       Show next log entry
            [<-]       Show prior log entry
            [Home]     Show first log entry
            [End]      Show last log entry
            [Esc]      Exit USERLOG










   -------------------------------------------------------

                             -12-
   
                                            U s e r L o g
   -------------------------------------------------------


                  LISTING LOG ENTRIES (/L)

   USERLOG can provide you with a listing of all or
   selected log entries through the use of the /L para-
   meter.  When USERLOG is invoked with the /L parameter,
   you will be asked to supply a beginning date in a
   mm/dd format and whether you want only (1) business,
   (2) personal, or (3) both types of log entries listed.
   USERLOG will scan your entire log file searching for
   the first log entry that satisfies the criteria you
   specified.  If no matches are found, USERLOG will
   inform you of such and exit to DOS.  Otherwise USERLOG
   will ask which device to list the log entries to.
   Pressing the [S] key causes the output to be printed
   on the display screen whereas pressing the [P] key
   causes it to be listed on the printer attached to
   your computer.  You may exit USERLOG at this time by
   pressing the [Esc] key.  If the log entries are to be
   listed on the printer, be sure the printer is turned
   on and that the printer top-of-form has been set.

   The log entries are listed in detail in the order in
   which they were made.  As each log entry is printed,
   the number of hours the computer was used for business
   and for personal purposes are accumulated and printed
   on the bottom of each page.  The percentage of time
   your computer has been used for business-related
   activities is calculated and printed also.








   -------------------------------------------------------

                             -13-
   
                                            U s e r L o g
   -------------------------------------------------------


                USING USERLOG IN BATCH FILES

   In order to keep accurate records of computer usage,
   users should be 'forced' to log in and out between
   applications.  Fortunately, the batch language facil-
   ities of PC-DOS provides a very convenient means for
   doing so.  The following example shows how to create
   a batch file that will log a user in, run a program
   named MYPROGRAM and log the user out after exiting
   the program.


   A>COPY CON: MYPROGRAM.BAT
   CLS
   PAUSE -----> INSERT LOG FILE DISKETTE INTO DRIVE A
   USERLOG /I
   PAUSE -----> INSERT MYPROGRAM DISKETTE INTO DRIVE A
   MYPROGRAM
   PAUSE -----> INSERT LOG FILE DISKETTE INTO DRIVE A
   USERLOG /O
   ^Z                   (press the F6 key)
   1 file copied


   If your system has a hard disk drive, then the PAUSE
   statements can be eliminated.  However, the path to
   the directory containing USERLOG.COM must be named.
   For example, if USERLOG.COM resides in the directory
   named MYLOG, then then following batch program will
   log a user in and out.






   -------------------------------------------------------

                             -14-
   
                                            U s e r L o g
   -------------------------------------------------------


   C>COPY CON: MYPROGRAM.BAT
   CLS
   PATH \MYLOG
   USERLOG /I
   MYPROGRAM
   PATH \MYLOG
   USERLOG /O
   ^Z                   (press the F6 key)
   1 file copied


   Programs written in interpretive BASIC can be executed
   from batch files as well by either including BASIC.COM
   in the directory which contains the BASIC program or
   by extending the search path to include the directory
   that contains BASIC.COM.




















   -------------------------------------------------------

                             -15-
   
                                            U s e r L o g
   -------------------------------------------------------


                 USERLOG REGISTRATION FORM


     I have enclosed $25.00 with this registration form.
     Registration entitles me to notification of updates
     to USERLOG and free upgrades (excluding diskette and
     postage).  Please add me to your list of registered
     users of USERLOG.

     Mail To:         Chris E. Lindberg
                   5221 W. Washington Blvd.
                    Milwaukee, WI   53208

    Please supply the following information:


     Name _____________________________________________

     Company __________________________________________

     Street ___________________________________________

     City _____________________________________________

     State ______   Zip __________  Phone _____________

     How did you obtain a copy of USERLOG _____________

     __________________________________________________

   Comments/Problems:




   -------------------------------------------------------

                             -16-

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0504

     Volume in drive A has no label
     Directory of A:\

    AREACODE EXE     19328   2-14-85  12:36p
    BG       DOC      7984   4-03-85   7:43p
    BG       EXE     17792   4-03-85   7:43p
    CALPO    DOC      4608   7-27-84   8:36a
    CALPO    EXE     27648   7-27-84   8:29a
    CLEAN    COM       640   1-01-80
    CLEAN    DOC      2944   1-01-80
    CLOCK    EXE     25856   9-04-83   6:41p
    DUMP3    DOC     14848   8-10-85  12:15p
    DUMP3    EXE     36389   9-18-85  10:37a
    FATDUMP  COM      4550  10-09-11   6:41a
    FATDUMP  DOC       405  12-29-85   4:14p
    FILES504 TXT      1674   5-07-86   3:33p
    HOTDEMO  COM      9748  10-03-85  12:17p
    HOTDEMO  DOC      8082  10-03-85   3:43p
    MAILLIST DOC     14336   3-19-85   8:37a
    MAILLIST EXE     51456   3-19-85   8:33a
    NOTES504 TXT      1697   4-26-86  10:37a
    PCUTIL   COM      4992   7-27-84   9:12a
    QUIKTIME COM       512   3-12-85   2:40a
    SYSLOG   TXT        95   5-05-86   8:26p
    TDD5PT2  ASM     16128   3-20-85   9:25a
    TDD5PT2  DOC      3968   3-20-85   9:25a
    TDD5PT2  EXE      1664   3-20-85   9:25a
    USERLOG  COM     25600   1-14-85  10:36p
    USERLOG  DOC     23567  12-04-85   7:38p
           26 file(s)     326511 bytes
                           25600 bytes free
