---
layout: page
title: "PC-SIG Diskette Library (Disk #109)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0109/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0109"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 5"

    A grabbag of utilities aimed mostly at the needs of the more advanced
    programmer types among us.  BREAKPT lets you do a breakpoint within any
    program, FILEDUMP will do a hex dump to your screen.  There are
    routines to demonstrate structured macros and one on APL. One of the
    most interesting programs here is UTIL.  This is a DOS utility that
    allows you to do things like: sort directories, do paged display of
    text files, redefine your keyboard, and others.  This could be quite
    useful for anyone interested in a simple, effective way to enhance
    their system.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  WKS files are for use with LOTUS 1-2-3.  For
    instructions on ASM listings, refer to your Assembler manual.  To read
    DOC and read-me files simply enter TYPE filename.ext and press
    <ENTER>.
    
    Suggested Registration:  UTIL $10.00, $15.00 includes latest
    version and printed documentation.
    
    File Descriptions:
    
    BREAKPT  COM  Makes ctrl-esc do a breakpoint to trace any program
    BREAKPT  DOC  Documentation for above
    BREAKPT  ASM  Source for above
    DATE     PRG  dBASE II program to validate dates
    FEDTAX83 WKS  123 worksheet for 1040 form, schedules A, B, C, W
    REGDISP  ASM  Source for program to display 8088 regs in real time
    PV______ APL  Present value functions in APL
    MACTEST  ASM  Illustrates structured assembler macros in STRUCT.MAC
    FILEDUMP COM  Hex dump a file to screen
    STRUCT   MAC  Assembler macros for structured programming
    UTIL     EXE  Fantastic set of screen/file/directory, etc. functions
    UTILREAD ME   Introductory note about these utilities
    UTIL     DOC  Documentation for UTIL.DOC
    DATABASE      Sample database
    READ     ME   List of files on this diskette
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BREAKPT.ASM

{% raw %}
```
PAGE 60,132
; BREAKPT.ASM: A DEBUGGING UTILITY
; TO BE USED IN CONJUNCTION WITH THE DOS DEBUG UTILITY OR ANY DEBUGGER
; WHICH CAN INTERCEPT THE BREAKPOINT INTERRUPT.
; USAGE: RUN BREAKPT.COM ONCE UNDER DOS TO INSTALL.
;        LOAD DEBUGGER WITH PROGRAM TO BE DEBUGGED.
;        SET A BREAKPOINT (ANY BREAKPOINT) AND EXECUTE PROGRAM.
;        WHILE PROGRAM RUNS, HITTING CTRL-ESC JUMPS TO THIS ROUTINE,
;        WHICH HANDS CONTROL TO DEBUGGER.
;        NOTE THIS METHOD CAN BE USED TO INTERRUPT BOTH ROM
;        AND RAM EXECUTION.
;                               PROGRAM BY RICH WINKEL
BOTTOM  SEGMENT AT 0H
        ORG     024H
KBDIP   DW      ?               ;IP FOR KBD INT
KBDCS   DW      ?               ;CS FOR KBD INT
        ORG     0417H
KB_FLAG DB      ?               ;ROM BIOS DATA
BOTTOM  ENDS
;
BREAKPT SEGMENT
        ASSUME CS:BREAKPT,DS:BOTTOM
        ORG     100H
MAIN    PROC    NEAR
        JMP     INIT
;
; KEYBOARD INTERRUPT INTERCEPT ROUTINE
;
CATCH:  STI                     ;INTERRUPTS BACK ON
        PUSH    AX
        IN      AL,60H          ;CHECK SCAN CODE
        CMP     AL,01H          ;IS IT ESC KEY?
        JNZ     L2              ;NO, ON TO KEYBOARD ROUTINE
        PUSH    DS              ;OTHERWISE, CHECK FOR
        XOR     AX,AX           ;CONTROL KEY SHIFT
        MOV     DS,AX           ;GET DOWN TO THE BOTTOM
        MOV     AL,KB_FLAG      ;GET KEYBOARD FLAG BYTE FROM ROM DATA
        TEST    AL,04H          ;CTRL SHIFT?
        JZ      L1              ;NO, ON TO KEYBOARD ROUTINE
        IN      AL,61H          ;OTHERWISE, WE TAKE IT FROM HERE
        MOV     AH,AL           ;RESET
        OR      AL,80H          ;THE
        OUT     61H,AL          ;KEYBOARD
        MOV     AL,AH           ;CONTROL
        OUT     61H,AL          ;PORT
        CLI                     ;TURN OFF INTERRUPTS
        MOV     AL,20H          ;RESET INTERRUPT CONTROLLER (8259)
        OUT     20H,AL
        POP     DS
        POP     AX
        STI                     ;LET PENDING INTERRUPTS EXECUTE
        NOP
        INT     03H             ;NOW GIVE DEBUG CONTROL
        IRET                    ;SINGLE STEP BACK TO INTERRUPTED PGM
L1:     POP     DS              ;ONWARD TO KBD ROUTINE
L2:     POP     AX
        DB      0EAH            ;PREFIX BYTE FOR FAR JUMP
JFARIP  DW      0H              ;IP FOR KBD ROUTINE
JFARCS  DW      0H              ;CS FOR KBD ROUTINE
INIT:   XOR     AX,AX           ;GET INTO
        MOV     DS,AX           ;BOTTOM SEGMENT
        MOV     AX,KBDIP        ;GET IP FOR KBD INTERRUPT
        MOV     CS:JFARIP,AX    ;PUT IN OUR FAR JUMP
        MOV     AX,KBDCS        ;GET CS FOR KBD INTERRUPT
        MOV     CS:JFARCS,AX    ;PUT IN OUR FAR JUMP
        MOV     AX,CS           ;BACK TO
        MOV     DS,AX           ;OUR SEGMENT
        MOV     DX,OFFSET CATCH ;USE DOS TO POINT KBD INT TO US
        MOV     AX,2509H        ;'RESET INT 9H VECTOR TO DS:DX'
        INT     21H             ;DO IT
        MOV     AH,09H          ;PRINT MESSAGE
        MOV     DX,OFFSET MSG   ;POINT TO MESSAGE
        INT     21H             ;DO IT
        MOV     DX,OFFSET INIT  ;GET LAST ADDRESS OF RESIDENT CODE
        INT     27H             ;TERMINATE AND STAY RESIDENT
;
MSG     DB 'Breakpoint debugging utility.',0DH,0AH
        DB 'Load a program under DEBUG, '
        DB 'set a breakpoint, (any breakpoint) and go.',0DH,0AH
        DB 'To stop the program for debugging, hit Ctrl-Esc, then type:',0DH,0AH
        DB  09H,'RIP <enter> 12D <enter> T <enter>',0DH,0AH
        DB 'to jump over the INT 3, execute an IRET, and',0DH,0AH
        DB 'get back to where your program was executing.',0DH,0AH
        DB "WARNING: Don't hit Ctrl-Esc except while under DEBUG!$"
;
MAIN    ENDP
BREAKPT ENDS
        END MAIN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #109, version V1-1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  BREAKPT .ASM         CRC = 5B A5

--> FILE:  BREAKPT .COM         CRC = DC 1D

--> FILE:  BREAKPT .DOC         CRC = BF DB

--> FILE:  READ    .ME          CRC = 86 F9

--> FILE:  PV______.APL         CRC = 89 14

--> FILE:  FEDTAX83.WKS         CRC = 96 8A

--> FILE:  STRUCT  .MAC         CRC = C8 D8

--> FILE:  UTIL    .DOC         CRC = E2 FC

--> FILE:  UTIL    .EXE         CRC = F0 2F

--> FILE:  MACTEST .ASM         CRC = 48 16

--> FILE:  REGDISP .ASM         CRC = A9 96

--> FILE:  FILEDUMP.COM         CRC = 70 2D

--> FILE:  DATE    .PRG         CRC = 22 9F

--> FILE:  UTILREAD.ME          CRC = 38 F0

--> FILE:  DATABASE.            CRC = BA 1B

 ---------------------> SUM OF CRCS = B1 BA

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MACTEST.ASM

{% raw %}
```
title	MACRO Test Program
page 62,132
include	struct.mac
data	segment
num	dd	1843200
	assume	cs:data
	@save	<ax,bx,si,di>
lab:	mov	ax,bx
	.repeat
	  mov al,ah
	.until loop

	.repeat
	  mov al,cl
	.until al l 34

	.repeat
	  add al,1
	.until al e 56 long

	.dowhl si e 5 long
	  dec si
	.enddo

	.if	pe
	  mov ax,1
	.else
	  mov ax,2
	  .if	z,long
	    mov ax,3
	  .else
	    mov ax,4
	  .endif
	.endif

	.dowhl ax e 1
	  dec ax
	.enddo

	.if <word ptr num> e 23h
	  mov word ptr num,40h
	.endif

	.if	ax,e,bx
	  mov ax,4
	.endif
	.if ax l 1
	  mov ax,1
	.else
	  mov ax,2
	.endif
	.if cx l 0
	  inc cx
	.else
	  dec cx
	.endif
	.if ax l 0
	  .if bx l 0
	    .if cx l 0
	      dec cx
	    .else
	      inc cx
	    .endif
	    mov bx,1
	  .else
	    mov bx,2
	  .endif
	  mov ax,1
	.else
	  mov ax,2
	.endif
	.if ax g cx long
	  add ax,1
	.else long
	  add ax,2
	.endif
	@restore
	check$
data	ends
	end
```
{% endraw %}

## UTIL.DOC

{% raw %}
```




          Documentation                 - 1 -              UTIL Version 1.3
          _________________________________________________________________


                                  UTIL Version 1.3
                         Copyright (c) 1983 Mutant Software





                               ____ _________ ________
                               User Supported Software
               If you use this program and like it, your contribution
                        of $10 would be greatly appreciated.



                                   Mutant Software
                                    Program UTIL
                                    P.O. Box 765
                                 Bellaire, TX 77401



          Regardless  of  whether  you  make a contribution or not, you are
          encouraged to copy and distribute this program  to  others,  with
          the  stipulation  that  this notice not be removed. If you do not
          have printed  documentation,  it  resides  on  your  distribution
          diskette  under the name UTIL.DOC. Merely print this file to your
          printer.

                  System requirements : 128K and DOS 2.0 or higher

          If you want to, you can order directly from me for $15. The extra
          $5 covers the  diskette,  the  mailing  cost,  and  documentation
          reproduction.  By ordering direct, you are assured of getting the
          latest version of UTIL with  the  fewest  bugs,  and  the  latest
          enhancements.

          New features are being added regularly to this program, either at
          the  suggestion  of  users,  or  as  I see the need. I am open to
          suggestions for the enhancement of this program or to reports  of
          any bugs. I would also like to hear of any ways that the documen-
          tation  for  this program can be made clearer. Please write to me
          at the above address.
















                                  Revision 11-22-83                        




          Documentation                 - 2 -              UTIL Version 1.3
          _________________________________________________________________


                                  1.  Program UTIL



          1.1  Introduction

          UTIL is a general purpose collection of utilities for  use  under
          DOS  2.0.  A  given  utility  is invoked either directly from the
          command line (when invoking UTIL, or alternately  from  a  screen
          menu.  The screen menu option is gotten when you invoke UTIL with
          no options. The UTIL program should be kept in the root directory
          on all disks which you  will  want  it's  facilities  on.  Often,
          utility programs are written in assembler, and are very small (in
          file  size). Generally, they are have only one function.A collec-
          tion of these utilities is difficult to haul around from disk  to
          disk. UTIL was designed to handle that problem. It is one program
          with a variety of useful options.

          UTIL  was  written  in  C,  using the Ci86 compiler from Computer
          Innovations. The C programming  language  generates  very  tight,
          fast code. But the overhead for a single program is large (mainly
          due  to  file  I/O  facilities). This makes C lack usefullness in
          generating small utility routines. The advantage of  using  C  is
          that  additional  capabilities added to the original (large) core
          program produces very little increase in code size. In  addition,
          C  code is much easier to maintain than assembler. It is for this
          reason that UTIL has many utilities built into it.

          Some of the features of UTIL are much more  useful  than  others.
          The  directory  option is by far the most useful. Look at what it
          can do carefully. This option also required the  largest  invest-
          ment in code (and resultant .EXE file size).


          1.2  Time Tests

          In case you are worried about the time required to load UTIL, let
          me  show you some times I recorded for loading and executing UTIL
          in the directory (SD) mode, compared to the DIR command.



               1.2.1  Test Number 1.  
               UTIL on floppy getting directory of floppy.
                    DIR : 5.16 seconds, UTIL : 10.94 seconds



               1.2.2  Test Number 2.  
               UTIL on hard disk getting directory of hard disk.
                    DIR : 4.12 seconds, UTIL : 6.78 seconds






                                  Revision 11-22-83                        




          Documentation                 - 3 -              UTIL Version 1.3
          _________________________________________________________________


               1.2.3  Test Number 3.  
               UTIL on floppy getting directory of floppy.
                    DIR : 4.6 seconds, UTIL : 7.47 seconds.

          Note that DIR and UTIL were accessing exactly the same  directory
          information.  The difference between Test 1 and Test 3 is that in
          Test 3, UTIL was copied to a clean (freshly formatted)  diskette.
          In  Test  1,  the  diskette already had had alot of activity with
          alot of files. This points out the advantage of copying the  UTIL
          program  (and  any other programs you will use frequently) onto a
          fresh diskette- it will always load faster.

          In all cases, this is  not  a  bad  time,  considering  the  con-
          siderable  increase  in  power you get from UTIL over DIR. By the
          way, in Test 2, if you pipe DIR into SORT (DIR | SORT) to  get  a
          sorted  directory, as suggested in the DOS manual, DIR takes 7.25
          seconds, which is actually slower than UTIL. And going the DIR  |
          SORT route, all you can do with the output is look at it.

          Once  you  have  used UTIL, it will probably reside on every disk
          you own. It does not take up much disk space, and it is very easy
          to move from disk to disk (after all, it is  only  one  program).
          And  if  you  have  a hard disk, you will never get tired of this
          program.

          As was mention previously, you must have DOS 2.0 to  be  able  to
          use  this  program.  Intelligent programmers cannot afford to not
          utilize DOS 2.0 features forever.

          And the program overhead to support all  versions  of  DOS  is  a
          waste  of  energy. PC owners should consider new DOS revisions as
          being like preventative maintenance on their cars- necessary.



                                 2.  Installing UTIL


          The UTIL program is not copy protected.  These  installation  in-
          structions are meant to make UTIL work best for you.


               a)        Put DOS 2.0 diskette in drive A:

               b)        Put a blank diskette in drive B:

               c)        Enter the following:

                              FORMAT B:/S

                         Now,  remove  the  DOS diskette from drive A:, and
                         replace with your UTIL diskette. Enter the follow-
                         ing:




                                  Revision 11-22-83                        




          Documentation                 - 4 -              UTIL Version 1.3
          _________________________________________________________________


                              COPY A:UTIL.EXE B:

                         This installs the UTIL program  on  a  fresh  dis-
                         kette.

               d)        Remove the UTIL diskette from drive A: and replace
                         with the DOS 2.0 diskette again. Enter the follow-
                         ing commands:

                              COPY *.* B:
                              COPY CON: B:CONFIG.SYS
                              DEVICE=ANSI.SYS
                              ^Z

                         Every  line  typed  in  is followed by hitting the
                         ENTER key. The last line (^Z) is gotten either  by
                         hitting F6 or CTRL-Z.

               e)        Copy  any  other DOS utilities or programs you may
                         require regularly onto drive B.


               What you did in the above steps was to create  a  boot  dis-
               kette for your system. The important things done were:


               *   Put  the  file  ANSI.SYS on the boot diskette. This file
                   was provided  on  your  original  DOS  2.0  distribution
                   diskette.

               *   Build  a  file  called CONFIG.SYS on your boot diskette,
                   with one line in the file, saying DEVICE=ANSI.SYS.  When
                   DOS  2.0  boots, it looks for a file by this name. If it
                   finds  it,  it  loads  any  specified   device   drivers
                   (ANSI.SYS,  in  this  case).  This provides for extended
                   screen and keyboard handling, which UTIL uses.


               Note: You needn't worry about  the  CONFIG.SYS  or  ANSI.SYS
               files  after  you  have  booted  your machine. They are only
               required at machine boot.


               2.1  RAM Disk

               If you have enough memory to support a RAM disk, it would be
               a good idea to copy UTIL.EXE to the RAM disk when  you  boot
               up.  The  copy  operation  should  be  done from within your
               AUTOEXEC.BAT file after creation of the RAM disk.

               If you wish to utilize UTIL's crude database capability (for
               often used phone numbers, addresses, etc.),  you  will  also
               want  to  copy  this  file  into  your RAM disk (the file is
               called DATABASE; see discussion of the database  option  for
               more details).


                                  Revision 11-22-83                        




          Documentation                 - 5 -              UTIL Version 1.3
          _________________________________________________________________


               2.2  The PC XT

               Put  the UTIL distribution diskette in drive A:, and type in
               the following

               C>A:
               A>COPY UTIL.EXE C:\
                      or
               C>COPY A:UTIL.EXE \

          The idea is to load UTIL into the root  directory  on  your  hard
          disk.


          2.3  For both machines

          On  all the diskettes you will boot the machine up from, you need
          to

          *   Have an AUTOEXEC.BAT file

          *   Have a file called CONFIG.SYS with a line in  it  which  says
              DEVICE=ANSI.SYS.

          *   Have the ANSI.SYS file (supplied on your DOS 2.0 diskette)



          2.4  Changing .EXE Name

          Many  users  find  it convenient to rename UTIL to DO. This makes
          for less to type in, and seems to read naturally when typed  from
          the command line. For example,

               A>DO SD C:\ASM\SOURCE

          reads "do sorted directory on C:\ASM\SOURCE"




















                                  Revision 11-22-83                        




          Documentation                 - 6 -              UTIL Version 1.3
          _________________________________________________________________


                              3.  Summary of Utilities


          Name      Function


          sd        Sorted directory

          br        Screen listing of a text file. Uses PgUp and PgDn keys

          kb        Allows keyboard redefinition

          db        A crude data base routine

          tf        Causes printer to do a top-of-form

          mo        Switch to monochrome display

          co        Switch to color display


          All  commands  may be entered in either upper or lower case. Most
          of the commands listed above have additional options which can be
          invoked. These are described under the  detailed  description  of
          each of the commands, which follow shortly.

          UTIL was designed as a utility. It is meant to be easy to use and
          fast.  It  is  not  sickeningly  friendly. It does not say please
          once. Errors are caught, but if the  program  cannot  figure  out
          something  to  do,  it will usually do something harmless (wrong,
          but harmless). Many users are finding out that  an  overabundance
          of  menus and mushy friendliness really get in your way after you
          have learned how to run the program. Not only that, but after you
          are familiar with the program, they  almost  insult  your  intel-
          ligence.

          If  you  cannot  remember what UTIL options are available, or the
          order of entry of items on the command line, or if  you  want  to
          use several of UTIL's features in the same run, merely type

               UTIL <ENTER>

          from the command line. UTIL will then prompt you for what options
          are available, and what to do each step of the way.













                                  Revision 11-22-83                        




          Documentation                 - 7 -              UTIL Version 1.3
          _________________________________________________________________


                              4.  Sorted Directory (sd)



          4.1  Introduction to Sorted Directories

          SD  will  probably  be  the most useful of all the utilities con-
          tained in the UTIL program. You will find no end to the  usefull-
          ness of SD. After you have seen what it can do, you will probably
          wonder how you ever got along without it.

          SD  will  serve  you  most  effectively  when  installed in a RAM
          pseudo-disk. Installed this way, it will always be available, and
          can be invoked almost instantly.

          The reason the SD option was written into UTIL was that  I  often
          felt  that  the  directory listing programs normally available to
          the user left a lot to be desired. When you  consider  what  your
          time  is worth, the time you spend screwing around looking at the
          contents of your disk costs a bundle  (in  time,  headaches,  and
          mistakes).

          SD  is useful for full screen directory and file manipulation. By
          default, it displays the current directory in alphabetical order.
          Only 30 entries may be viewed on the screen at a time. But  since
          they are viewed full screen, hitting the RIGHT arrow key a couple
          of  times  will bring in another 15 entries. This continues until
          you don't have any more directory entries.  The  LEFT  arrow  key
          does the same thing in the reverse direction. Try it.

          Even  if  you do not use the subdirectory feature of DOS 2.0, you
          will still enjoy the ease with which you  can  look  at  what  is
          contained  on  your  diskettes.  At  the  touch of a key, you can
          resort the directory  3  different  ways.  You  can  also  browse
          whatever  file  the  cursor is pointing to. Or print the file the
          cursor is pointing to. Or (in the browse option), print any  part
          of a file. Or execute your favorite word processor or text editor
          on  it.  Or run a program on it. The SD option of UTIL is invoked
          by typing the following at the DOS command prompt:

               UTIL SD [drive][path]

          The [drive] and [path] are optional. If you are on  drive  B  and
          wish to view the directory of drive A, merely type

               UTIL SD A:

          The  user  has  a Home directory. This is the directory he was in
          when he entered UTIL (by default). The  Home  directory  will  be
          listed  at  the top of the screen. In addition to this there will
          be the Displayed directory. By default, this  will  also  be  the
          Home directory. The Displayed directory will also be shown at the
          top of the screen.

          The  Home directory will also be the directory to which any files


                                  Revision 11-22-83                        




          Documentation                 - 8 -              UTIL Version 1.3
          _________________________________________________________________


          are copied when the COPY command is invoked.

          While a directory is displayed, the user can instantly resort the
          displayed directory by alpha, extension,  or  date,  all  at  the
          touch of a key ( A for alpha, X for extension, or D for date).

          The  user  can delete a file or files in whatever directory he is
          currently viewing on the screen by moving the "cursor" next to an
          entry and hitting alt-d. This will cause a DEL to appear next  to
          that entry.

          In the directory list, all subdirectories of the Displayed direc-
          tory are preceded by a "\". If the user positions the cursor over
          a  subdirectory  name  and  hits <ENTER>, the Displayed directory
          becomes the appropriate subdirectory.

          Note: Deletes are done from within the program. COPIES  are  done
          when  you  exit  UTIL. I let DOS do the copying, since it is much
          more efficient, especially on systems that don't have a bunch  of
          memory.

          Letting  DOS  do the copying is no real handicap. You should know
          that this is what is done so that after leaving UTIL,  you  don't
          get  confused as to where these COPY commands are appearing from.
          In addition, you should not change diskettes until you exit UTIL,
          since it expects the files you  flagged  for  copying  to  be  on
          certain  drives.  If you have done no copying, changing diskettes
          is no problem.


          4.2  Resorting the Directory (A,X or D)



          4.2.1  Alphabetic Sort (A).  Hit A  to  sort  the  directroy  al-
          phabetically. Note that this is the default sort.


          4.2.2  Extension  Sort (X).  Hit X to resort the viewed directory
          by extension.


          4.2.3  Date Sort (D).  Hit D to resort the  viewed  directory  by
          date.


          4.3  Going Through Subdirectories (.,L,V,I,!)



          4.3.1  Up  a Level (.).  Hitting . (period) causes the program to
          revert one level in the subdirectory heiarchy. The  command  will
          be ignored if you are already in the root directory.




                                  Revision 11-22-83                        




          Documentation                 - 9 -              UTIL Version 1.3
          _________________________________________________________________


          4.3.2  Last  Directory  (L).  Hit  L to see the last subdirectory
          (or drive, or whatever) that you were viewing  previously.  Let's
          say  you were viewing subdirectory C:\LANG\C and you went off and
          viewed the contents of drive A:. Rather than having to  respecify
          C:\LANG\C if you want to review it, merely hit L.

          Note:  UTIL  only  maintains  one previous directory information.
          Because of this, hitting L twice is a waste of time.


          4.3.3  A Different Drive (V).  Hit V to see the  directory  of  a
          different  disk  drive than the one you are currently viewing. At
          the bottom of the screen, you are prompted  to  enter  the  drive
          letter. Respond appropriately. No <ENTER> is required.


          4.3.4  Immediately  View  Another  Directory  (I).  Hit  I to im-
          mediately view the directory of another drive, or merely  another
          subdirectory on the current drive.

          As an example, let's say you are currently viewing a directory on
          drive  B,  and you wish to see the directory of drive A. Hit I to
          get into this option. When the prompt appears at  the  bottom  of
          the screen, respond with

               A: <ENTER>

          You  will  now  be viewing the directory of drive A. Note that in
          this simple case, you could have gotten the same effect with  the
          V option. Thus, a more complicated example is in order.

          Suppose  you  are viewing a directory on drive B and wish to look
          at directory A:\DBASE.

          First, hit I to get into this option. When the prompt appears  at
          the bottom of the screen, respond with

               A:\DBASE

          As you did in puberty, experiment with this one.


          4.3.5  Move  into  a  Displayed  Subdirectory  (<ENTER>).  As was
          mentioned previously, any items in the directory list whose names
          begin with a "\" are subdirectories.

          Merely position the cursor over one of these and hit <ENTER>. The
          subdirectory you were pointing do will be entered, and its direc-
          tory read.

          This command only has an effect if your cursor is positoned  over
          an entry in the directory list whose name begins with a "\".





                                  Revision 11-22-83                        




          Documentation                - 10 -              UTIL Version 1.3
          _________________________________________________________________


          4.3.6  Reread Directory (!).  

          To reread a directory, hit !. Why would you ever want to reread a
          directory?

          This  option  is most useful when you have several diskettes upon
          which you wish to find some files you need.  You  put  the  first
          diskette  in drive B, and do an SD on it. This disk does not have
          what you wanted.

          Load the second disk in drive B, and  hit  !.  The  directory  of
          drive B will be reread, which is exactly what you wanted.



          4.4  Screen Copy (S)

          If  you  are  lucky  enough  to  have  both  the monochrome and a
          graphics screen, this command may prove useful.  Hitting  S  will
          copy  the  contents  of  the  screen you are on to the screen you
          aren't on. When you are comparing the contents of disks  or  sub-
          directories, this can be very useful.

          Note that you do not switch screens by hitting S. You merely copy
          the  contents  of  the  screen  you  are  working on to the other
          screen.


          4.5  Printing a File (P)

          While the cursor is over the name of a file, hitting P will cause
          that file to be printed to the line printer.  This  option  works
          well  in  conjunction  with  the B (BROWSE) option, wherein after
          rummaging through several files on a diskette  with  BROWSE,  you
          finally  find  the  one you want to print out. Hit <ESC> to leave
          BROWSE, then hit P. The file  you  were  just  browsing  will  be
          printed.

          The PRINT option will properly expand tabs contained in the text.
          If  you  have  one of the many available print spoolers (many are
          free), this command will work it's fastest. Otherwise,  you  must
          wait for the file to finish printing before you can resume.


          4.6  Browsing a File (B or alt-B)

          While  the  cursor is over the name of a file, the user can hit B
          to browse the file. It is assummed that the file being browsed is
          a text file capable of being viewed. Don't bother trying to  view
          .COM  files,  for  instance.  Hitting <ESC> takes you back to the
          directory you were viewing before you did the browse.

          As a special feature for WORDSTAR fans, hitting alt-B will browse
          your WORDSTAR files, making them suitable for screen display. The
          display will not be perfect, but you will be  able  to  read  the


                                  Revision 11-22-83                        




          Documentation                - 11 -              UTIL Version 1.3
          _________________________________________________________________


          file well enough to know what it contains.

          The  browse command is unique in that text is read and put to the
          screen directly from disk. The reading is done one  screen  at  a
          time.  Thus,  browse will get your text to the screen much faster
          than most editors can. And browse does not  care  how  long  your
          file is. A 100Kb file will appear on the screen just as fast as a
          2Kb file.

          While  in  BROWSE, you will see instructions at the bottom of the
          screen. They tell you that you can hit the PgUp key to go a  page
          backwards  in the text, PgDn to go down a page, or <ESC> to leave
          browse. While in the SD option of UTIL, <ESC> will get  you  back
          to  the  directory  which  was  being  diplayed when you hit B to
          invoke BROWSE.

          What these instructions don't tell you is what else you  can  do.
          After a page appears on the screen, notice the small right point-
          ing arrow in the first column of the last line of displayed text.
          This  is  the  cursor.  Use  your  UP and DOWN arrows to make the
          cursor move. Notice how the cursor stops at the  first  and  last
          displayed line on the screen.

          Moving  the  cursor  does  nothing  in  itself  (except  move the
          cursor). If you hit M, you  mark  that  line  of  text.  Move  to
          another  line and hit M again. Now, you have marked two lines. If
          you now hit P, all lines between (and including) the marked lines
          will be printed to the printer.

          If you have made one mark, then  hit  *,  this  tells  BROWSE  to
          consider  the  last  line  of  the file as the second mark. Thus,
          hitting P will print from the first mark to the end of the file.

          If no marks are made, and you hit *, this tells  BROWSE  to  mark
          the  text  from  the  top of the current screen to the end of the
          file. Following the * with a P  will  cause  those  lines  to  be
          printed.

          Note  that  your printing will go much faster if you have a print
          spooler. If you do not, you will  (unfortunately)  have  to  wait
          until the printing has completed.

          Just  as a reminder, every time a text line is marked using M, an
          * appears to the right of  the  message  at  the  bottom  of  the
          screen. If you have marked text and decide you would like to mark
          a  different  block  of  text, hit U. This will undo all existing
          marks. When you see two *'s,  this  means  you  have  marked  two
          points  in  the  file for possible printing. Hitting P will cause
          the marked area to be printed.  If  you  were  interrupted  after
          marking the text (or just forgot what you marked), you can always
          hit  U,  then  remark  the text. If you try to mark more than two
          points, you'll just here a lonely beep.





                                  Revision 11-22-83                        




          Documentation                - 12 -              UTIL Version 1.3
          _________________________________________________________________


          4.7  Invoking Your Editor (E)

          Often, after browsing a file, you decide that you would  like  to
          edit  that  file. With the cursor over the file you wish to edit,
          hit E. The program will call up your favorite  text  editor,  and
          cause  it  to  begin  editing  that  file. By default, the editor
          invoked is the Personal Editor (sold  by  IBM).  You  can  easily
          change this, though.

          In  the back of the DOS 2.0 manual there is a section on Advanced
          Commands. One of these is the SET command. This allows you to put
          data into the environment. The environment is an area  of  memory
          set  aside when you start DOS, and it's contents are available to
          all application programs. This is where you need to tell UTIL the
          name of your favorite editor.

          From the keyboard (at the DOS prompt), merely type

               SET UT*ED=editor

          where editor is the name of your favorite editor. For example, if
          you use EDLIN as your editor, type in the following (at  the  DOS
          prompt):

               SET UT*ED=EDLIN

          It  is a good idea to put this SET command in your AUTOEXEC file.
          This way, you will never forget to do it.


          4.8  Invoking Your Wordprocessor (W)

          This is similar to the EDIT option described  above  except  this
          command invokes your favorite word processor. As was discussed in
          the  EDIT  command  above,  you  must place the name of your word
          processor in the environment. Do this as follows:

               SET UT*WP=wordprocessor

          where wordprocessor is the name of your favorite word  processor.
          For example, if you use WORDSTAR, you would type in the following
          (at the DOS prompt):

               SET UT*WP=WS

          As was mentioned in EDIT, it is a good idea to place this line in
          your AUTOEXEC file so you won't forget to do it.

          Note:  If either your word processor or text editor requires some
          command line options, these can be specified via the SET command.
          Merely put a $ where the file name is  to  be  substituted.  UTIL
          will take care of the rest.

          For instance, if you usually invoke your editor by specifying the
          "a" and "p" options, you would specify this to UTIL by saying the


                                  Revision 11-22-83                        




          Documentation                - 13 -              UTIL Version 1.3
          _________________________________________________________________


          following:

               SET UT*ED=myeditor $/a/p

          When  you  invoke  your editor on a file by hitting the E option,
          UTIL will replace the $ with the name  of  the  file  which  your
          cursor is on.


          4.9  Global Operations (*)

          While  viewing  a  directory  on  the screen, hitting * invokes a
          prompt at the bottom of the screen. The program will ask  you  if
          you  want  to  delete (alt-D), copy (alt-C), or do nothing (ESC).
          Hit the <ESC> key if you hit the * key by mistake.

          Otherwise, the current sort mode determines what following  alt-D
          or alt-C means.

          If you are in the alphanumeric or extension sort and respond with
          alt-D,  all files with the same extension as the file your cursor
          is pointing to are marked for deletion.

          If you are in the date sort, hitting alt-C means copy  all  files
          from (and including) the one pointed to by the cursor to the last
          file in the date sorted list.

          Hitting  the <ENTER> key with the cursor over a name which begins
          with a \ places you in that subdirectory, viewing it's contents.


          4.10  Delete a File (alt-D)

          With the cursor positioned over a file name, hitting alt-D  marks
          the  file  for  deletion. I say mark because the file will not be
          immediately deleted. You can cause the marked files to be deleted
          by hitting alt-X (execute).

          This gives you a chance  to  change  your  mind  (see  the  alt-U
          option).  Files  flagged for deletion are not remembered when you
          move from directory to directory. Thus,  if  you  try  to  change
          directories,  the  program  will  remind you that there are files
          flagged for deletion, and will ask it you  wish  to  perform  the
          deletions. A simple Y or N is all that is required. No <ENTER> is
          necessary.


          4.11  Copy a File (alt-C)

          With  the  cursor positioned over a file name, hitting alt-C will
          mark the file for copying. That is  copying  the  file  from  the
          directory being viewed to the Home directory.





                                  Revision 11-22-83                        




          Documentation                - 14 -              UTIL Version 1.3
          _________________________________________________________________


          4.12  Special Command, User Defined (alt-S)

          While your cursor is positioned over a file name on the directory
          listing,  hitting  alt-S  invokes  your  'special' command on the
          file. As was done with the E  and  W  options  (see  above),  the
          command  which  is  'special' is contained in the environment. It
          goes under the name UT*SP. You must set it into  the  environment
          either at boot time, or before executing UTIL. Once specified, it
          needn't be reentered. The environment will remember what you have
          specified until you turn your machine off or reboot.

          Let's  say  you  were into assembly language programming, and you
          see several files in  the  directory  listing  that  need  to  be
          reassmebled.  The  assembler program is called MASM. You would do
          the following (either at the DOS prompt, or in your  AUTOEXEC.BAT
          file):

               SET UT*SP=MASM

          While  the  cursor  is over a file name, hitting alt-S will cause
          the following command to be generated:

               MASM filename

          where filename is the file your  cursor  was  pointing  to.  Note
          that,  like  the alt-C command, this command will not be executed
          until you exit UTIL. The command is merely generated  internally,
          and  held  until  you exit the program (it is actually put into a
          BATCH  file  which  will  be  executed  when  the  program   UTIL
          terminates).

          Because  of  an  apparent  oversight,  a .BAT file cannot execute
          another .BAT file (this is true in DOS 2.0, at least).  If  some-
          where  in  the  middle of .BAT file 1 you invoke .BAT file 2, DOS
          will never return you to .BAT file 1 to finish it. Thus,  if  you
          set  UT*SP  to  be a .BAT file, you may not be too happy with the
          results.

          For this reason, UT*SP can specify more than one program to  run.
          Let's take, for example, the compiling of a program under the C86
          compiler.  The compiler is composed of 3 programs, named CC1, CC2
          and CC3. I am looking at a directory and see 3 files  I  want  to
          compile.  I  move the cursor over each file name and hit ALT-S. I
          then exit UTIL by hitting <ESC>.

          In my environment, I have previously put the following:

               SET UT*SP=.CC1 $ ^ .CC2 $ ^ .CC3 $ ^
          The $ signs tell UTIL where the file name is to be placed. The  ^
          tells  UTIL  to  do  a  carriage return. The "." in front of each
          string instructs is optional, and tells UTIL to rip the extension
          (if there is one) off of the file name. Not putting the "." would
          have left the extension on the file name, and it  would  be  sub-
          stituted in it's entirety for the $ at all three occurances.


                                  Revision 11-22-83                        




          Documentation                - 15 -              UTIL Version 1.3
          _________________________________________________________________


          Note that if you mark a file by hitting ALT-S, but have failed to
          specify  UT*SP, UTIL will not give you an error, but will instead
          cause the following command to be executed:

               ECHO filename

          This will just print the file name on the screen, and won't  hurt
          anything. Remember: Any strings which needs to go in the environ-
          ment  should  be  specified via SET commands in your AUTOEXEC.BAT
          file!!


          4.13  Undo (alt-U)

          Deletes and copies are not done  instantly.  This  is  protection
          against  yourself.  As you are viewing a directory, entries which
          you have flagged for deletion, copying, or  a  special  operation
          are  flagged by a DEL or CPY or SP* to the left of the name which
          has been flagged. If you have the cursor over a file  name  which
          is thus marked and hit alt-U, the flag will be removed.

          The  alt-U  option  is especially useful when used in conjunction
          with the global (*) option. Let's say you have used * to mark  15
          .BAK  files  for  deltetion. But there are two of these files you
          would like to keep.

          Merely position the cursor over the two files you  wish  to  keep
          and hit alt-U. The DEL will disappear, assuring you that the file
          will not be deleted.


          4.14  Executing Deletions (alt-X)

          When  you  are satisfied that files in the current directory have
          been properly marked for either copying or deleting, hit alt-X.

          All files marked for deletion will actually be  deleted.  If  you
          have  marked any files for copying, UTIL will exit, and execute a
          .BAT file it has been building with COPY commands in it. The COPY
          operation could be done from within  the  UTIL  program,  but  it
          would be much, much slower than DOS. This is due to the fact that
          UTIL  is  hogging  somewhere  around 96K of memory when it begins
          executing. Thus, remaining memory is scarce on many systems. Once
          UTIL is exited, however, 96K is freed back up, and DOS  has  this
          entire area to use as a buffer for disk copying.


                              5.  Browsing a File (br)

          This facility lets you list any text file on the screen. When the
          screen fills, you can use the PgUp or PgDn keys to browse through
          the  file. Browse is novel in that the scrolling is done directly
          from disk. No text is stored in memory, so system memory require-
          ments are kept low. Hit <ESC> to exit browse.



                                  Revision 11-22-83                        




          Documentation                - 16 -              UTIL Version 1.3
          _________________________________________________________________


          Even though UTIL is probably close in size to your editor or word
          processor, files can be viewed much faster using BROWSE than your
          editor or word processor. This is due to the fact that the BROWSE
          option does not attempt to load your entire file before it begins
          showing it to you on the screen.

          Instead, it lists lines of text to the screen as  they  are  read
          from disk. You are allowed full screen paging through the file as
          it  is  being  viewed. Note that this same option is available in
          the SD option of UTIL (see below). Also  see  the  decription  of
          browse  contained within the SD documentation for some additional
          features which are available under this  browse  too  (especially
          the printing of a part of the file you are browsing).

          The  BROWSE  option of UTIL is exactly the same as the browse you
          get under SD. All features available under that option are avail-
          able here.


                           6.  Keyboard Redefinition (kb)

          Allows redefining the keys on the keyboard. DOS 2.0 provides  for
          keyboard  redefinition,  but  only  in  a  limited sense. The DOS
          manual confuses many about how  the  keys  on  the  keyboard  can
          actually  be  redefined.  In order for key redefinition to occur,
          you must have a file called CONFIG.SYS on your diskette when  you
          boot up. For key redefinition to occur, you need only one line in
          the CONFIG.SYS file. This line is:

               DEVICE = ANSI.SYS

          ANSI.SYS  is a file which was supplied to you when you bought DOS
          2.0. In addition to  the  CONFIG.SYS  file,  you  also  need  the
          ANSI.SYS                            

          I  mentioned  earlier that key redefinition was limited under DOS
          2.0. This is because some crazy person thought  that  you  didn't
          need  more  than  190 bytes (for some strange reason) to redefine
          all of the keys you wanted to. This isn't much, believe me. There
          is a good, easy fix given by Ronald Parsons in the September  '83
          issue  of  PC  Magazine on pp586-587. Do it, unless IBM comes out
          with a new release of DOS which corrects this stupid limitation.

          You will be propmted to hit the key to be redefined. Hit the key.
          Next, you will be asked to type in what you want the  key  to  be
          defined  to.  If  you want to reset they key back to what it was,
          hit

               <ESC> <ENTER>

          (the ESC key and then the ENTER key). If you want to  define  the
          key to a string, type in the string. An example follows.

          Suppose  you are constantly running a program which asks a lot of
          stupid, redundant questions . Just to get into your program,  you


                                  Revision 11-22-83                        




          Documentation                - 17 -              UTIL Version 1.3
          _________________________________________________________________


          need  to  answer "Y" to 14 dumb questions. Use UTIL to redefine a
          key. Say you want to turn F1  into  14  "Y"  answers.  When  UTIL
          prompts  you to redefine the key you just hit, the in the follow-
          ing :

               YYYYYYYYYYYYYY <ENTER>

          Now, when running your program,  hitting  F1  answers  14  stupid
          questions  for  you.  Now,  let's say you have another frequently
          used program which requires 3 responses upon initialization,  the
          answers  to  which  rarely  change.  You might want to assign the
          answers to F2. In response to the UTIL prompt, type  the  follow-
          ing:

               Y^BIGBOOBS^EASYTOLAY^

          The  ^  tells DOS to do an <ENTER>, by the way. At least it tells
          UTIL to tell DOS to do an <ENTER>. Anyway, the ^  means  <ENTER>.
          When  your program got to the point where it was asking you these
          3 magic questions, you need only hit F2.


                              7.  A Crude Database (db)



          7.1  Description

          The db option of  UTIL  provides  for  a  very  crude  data  base
          capability. The db option functions in a retrieval mode only, and
          does  not  allow  the  adding  or deleting of items from the data
          base.


          7.2  Useage

          The data base is created by you in the root directory.  You  must
          name  the  file  DATABASE,  and the file must be in ASCII format.
          Your data base entries each occupy one line in the file DATABASE.

          Suppose you want to have a database with phone numbers in it  for
          handy  access.  Begin  by  putting the following in a file called
          DATABASE.

               Ralph Itup ^ 111-2222
               I.M. Horny ^ 123-6969
               I. Gaveattheoffice ^ 444-0000
               Ben Dover ^ 553-9988

          The ^'s you see tell UTIL to perform  a  carriage  return.  Thus,
          when the first entry was printed to the screen by UTIL, you would
          see

               Ralph Itup
               111-2222


                                  Revision 11-22-83                        




          Documentation                - 18 -              UTIL Version 1.3
          _________________________________________________________________


          Thus, the imbedded ^ signs are used purely for neatness on output
          display,  and  are put there at your discretion. To search for an
          item in the data base, you must supply a group of  characters  to
          search  for.  This  can  be  done from the command line (when you
          invoke UTIL), or UTIL will prompt you for it. To find  the  phone
          number of Ralph Itup, you could do any of the following:

               do db Ralph
               do db ralph
               do db alp
               do db up
               etc.

          Whatever  you  provide  to search for, UTIL will present you with
          anything it finds that matches. Note  that  the  search  is  case
          insensitive,  i.e.  you  needn't  remember whether you entered an
          upper or lower case letter in the data base.

          As was alluded to earlier, UTIL presently only retrieves informa-
          tion from the data base you created by hand. You  must  use  your
          text  editor  to  modify,  add or delete items from the data base
          itself.

          Nevertheless, the db option of UTIL is great for the  information
          you  need  quick access to all of the time (such as phone numbers
          and addresses).


                      8.  Switching Between Screens (mo and co)

          Allows you to easily switch from one display to the other. If you
          are using the monochrome  monitor  and  wish  to  use  the  color
          monitor, type in

               A>UTIL CO

          This will make your active display the color screen. Type in

               A>UTIL MO

          to switch back to the monochrome monitor.

          As  with  all other commands in UTIL, this command may be entered
          directly from the DOS prompt, or from the menu (gotten by  inkok-
          ing UTIL with no options).

          Even  though  the DOS MODE command supports switching screens, it
          was felt that this was still a useful option, since if  you  have
          UTIL,  you  needn't  haul  MODE  around  too. Plus, UTIL does not
          terminate and remain resident, as does MODE.







                                  Revision 11-22-83                        




          Documentation                - 19 -              UTIL Version 1.3
          _________________________________________________________________


                          9.  Type Directly to Printer (ty)

          This option provides a very raw interface between  your  computer
          and  your  printer.  It  was  meant  to  closely simulate using a
          regular typewriter.

          It is a useful option in situations where you want to bang a note
          or memo out quickly, and would rather not call up a  text  editor
          or wordprocessor.

          No buffering is done in the computer. As a character is typed, it
          is  sent  to the printer. Note that many dot matrix printers con-
          tain their own storage, and will buffer  characters  typed  until
          you hit <ENTER>.

          When  you  have typed all you need to type to the printer, hit F3
          to exit.








































pe to the printer, hit F3
          to exit.



























```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0109

     Volume in drive A has no label
     Directory of A:\

    BREAKPT  ASM      4096  11-27-83   3:46a
    BREAKPT  COM      1024  11-27-83   3:51a
    BREAKPT  DOC       384  11-27-83   3:47a
    CRC      TXT      1289  12-17-84  12:35p
    CRCK4    COM      1536  10-21-82   5:50p
    DATABASE           150  11-13-83  12:34p
    DATE     PRG      2048   2-03-84   2:17a
    FEDTAX83 WKS     37888   2-03-84   3:15a
    FILEDUMP COM      1408  10-23-83  12:18a
    MACTEST  ASM      1024   2-03-84   2:21a
    PV______ APL      6016  12-11-83   1:51a
    READ     ME        849   2-03-84  12:04a
    REGDISP  ASM      5376   2-03-84   2:23a
    STRUCT   MAC      3072   2-03-84   2:24a
    UTIL     DOC     49152  12-25-83   2:30a
    UTIL     EXE     46080  12-25-83   2:19a
    UTILREAD ME       1241   1-11-84  12:34p
           17 file(s)     162633 bytes
                          154624 bytes free
