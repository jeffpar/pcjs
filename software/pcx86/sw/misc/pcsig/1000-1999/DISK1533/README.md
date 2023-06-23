---
layout: page
title: "PC-SIG Diskette Library (Disk #1533)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1533/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1533"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LEOCE TOOLKIT & PC-ENCRYPT"

    Bring UNIX functionality to MS-DOS with the LEOCE TOOLKIT, a
    collection of utilities complete with textbook quality C source code
    that beginner programmers will find highly useful.
    
    ~ DLT.COM -- Routine to permit deleting of multiple files without
    wildcards (like UNIX RM command).
    
    ~ ENTAB.COM -- Converts spaces in files to tabs according to options
    specified or default processing using 8 spaces per tab.
    
    ~ HEAD.COM -- The UNIX HEAD command reads a number of lines (20 default)
    from the start of a file and writes them to the screen.
    
    ~ MERGE.COM -- Routine will read the .A output from the Turbo C compiler
    and read the .C source, and merge the two. This is useful to see how
    the compiler has translated individual code segments.
    
    ~ PR.COM -- The UNIX PR function generates formatted print files with
    carriage returns to a file or the printer.
    
    ~ SIZEOF.COM -- The UNIX SIZEOF routine counts the number of bytes in a
    file.
    
    ~ STGMAP.COM -- Traces through memory reporting the names and sizes of
    hooked vectors for all active load modules in memory. This is useful to
    determine if virus programs or renegade TSR programs are present.
    
    ~ TAIL.COM -- The UNIX TAIL function reads n (20 default) lines from the
    bottom of a file onto the screen.
    
    ~ TEE.COM -- The UNIX TEE function will copy a file both to the screen
    and to a designated file (with optional redirection for input an
    output). This is commonly called a FILTER function.
    
    ~ TP.COM -- Routine to replace the DOS TYPE command. This function
    will type a file onto the screen. There are a number of options
    supported to control output, such as tp/p file file file... files are
    output one group at a time followed by the " -More- " prompt.
    
    ~ WILD.C = C Source for supporting file wildcard processing in a C
    program.
    
    ~ CMDLINE.C -- C source for supporting command line switch processing.
    
    PC-ENCRYPT keeps unauthorized users from peeking at your files!
    
    Whether you work in a profession where you are required to keep
    information about clients or projects confidential, or you just want a
    little more privacy for that computerized diary of yours, PC-ENCRYPT
    puts a zipper on your files that only you can open.
    
    The program accepts a password key of up to 255 characters, including
    spaces, and then makes an encrypted copy of a designated file.  The
    copy cannot be decoded, without a supercomputer, unless it is
    decrypted by PC-ENCRYPT with the appropriate password.
    
    Also includes HEXDUMP that translates a file into hexadecimal numbers
    and displays them page-by-page.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DECRYPT.DOC

{% raw %}
```
                            DECRYPT                    Version  1.0

  This program copies a file and decrypts as it does so.

  The program will decrypt any file, which has been encrypted by the
    accompanying Encrypt program.

Initiating the program:-

  DECRYPT input_file_name output_file_name

  where 'DECRYPT' is the name of the program
        'input_file_name' is the full name of the encrypted file
        'output_file_name' is the full name given to the unencrypted file

Operation:-

  The program will ask for a password and the file names (if they were not
    given on the command line).
  The password may be up to 255 characters in length and may consist of any
    characters including spaces.

  WARNING WARNING WARNING
  There is no practical way to decrypt an encrypted file without the password,
    so you better not forget it.
```
{% endraw %}

## ENCRYPT.DOC

{% raw %}
```
                            ENCRYPT                    Version  1.0

  This program copies a file and encrypts as it does so.

  The encryption scheme used is similar to the Data Encryption Standard,
    but is non_symetrical (i.e. encrypting an encrypted file does not
    result in the original file) , therefore you must have the accompanying
    'DECRYPT' program (and the password) to decrypt your file.

  The program will encrypt any file by means of a user supplied password,
    the file can ony be decrypted by means of the same password and the
    accompanying program 'DECRYPT'.

Initiating the program:-

  ENCRYPT input_file_name output_file_name

  where 'ENCRYPT' is the name of the program
        'input_file_name' is the full name of the file to be encrypted
        'output_file_name' is the full name given to the encrypted file

Operation:-

  The program will ask for a password and the file names (if they were not
    given on the command line).
  The password may be up to 255 characters in length and may consist of any
    characters including spaces.

  WARNING WARNING WARNING
  There is no practical way to decrypt an encrypted file without the password,
    so you better not forget it.
```
{% endraw %}

## FILE1533.TXT

{% raw %}
```
Disk No: 1533
Program Title: LEOCE TOOLKIT
PC-SIG version:  1

Bring UNIX functionality to MS-DOS with the LEOCE TOOLKIT, a
collection of utilities complete with textbook quality C source code
that beginner programmers will find highly useful.

DLT.COM     Routine to permit deleting of multiple files without
            wildcards (like UNIX RM command).

ENTAB.COM   Converts spaces in files to tabs according to options specified,
            or default processing using 8 spaces per tab.

HEAD.COM    The UNIX HEAD command, reads a number of lines (20 default),
            from the start of a file and writes them to the screen.

MERGE.COM   Routine will read the .A output from the Turbo C compiler and
            read the .C source, and merge the two, this is useful to see
            how the compiler has translated individual code segments.

PR.COM      The UNIX PR function, generates formatted print files with
            carriage returns to a file or the printer.

SIZEOF.COM  The UNIX SIZEOF routine: counts the number of bytes in a file.

STGMAP.COM  Traces through memory reporting the names and sizes of hooked
            vectors for all active load modules in memory.  This is useful
            to determine if virus programs or renegade TSR programs are
            present.

TAIL.COM    The UNIX TAIL function: reads n (20 default) lines from the
            bottom of a file onto the screen.

TEE.COM     The UNIX TEE function, will copy a file both to the screen and
            to a designated file (with optional redirection for input and
            output). This is commonly called a FILTER function.

TP.COM      Routine to replace the DOS/CP TYPE command.  This function will
            type a file onto the screen, there are a number of options
            supported to control output, such as tp/p file file file ... ,
            files are output 1 tube at a time followed by --More-- prompt.

WILD.C      C Source for supporting file wildcard processing in a C program.

CMDLINE.C   C source for supporting command line switch processing.


Synopsis:  Tools for bringing Unix functionality to DOS, including
Tail, Tee, RM, PR, SIZEOF, HEAD functions and more.  C source code
included.

Usage:  Utilities/DOS/Unix.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

Author:   Steve Leoce.

File Descriptions:

README   DOC  Documentation.
???????? C    C source code (13 files).
STGMAP   ASM  Assembly source.
???????? COM  Utility Programs (10 files).

================================================================================

Disk No: 1533
Program Title:  PC-ENCRYPT
PC-SIG version: 1.0

PC-ENCRYPT keeps unauthorized users from peeking at your files!

Whether you work in a profession where you are required to keep
information about clients or projects confidential, or you just want a
little more privacy for that computerized diary of yours, PC-ENCRYPT
puts a zipper on your files that only you can open.

The program accepts a password key of up to 255 characters, including
spaces, and then makes an encrypted copy of a designated file.  The
copy can not be decoded, without a supercomputer, unless it is
decrypted by PC-ENCRYPT with the appropriate password.

Also, includes HEXDUMP that translates a file into hexadecimal numbers
and displays them page-by-page.

Synopsis:  Encrypt your most secret files with passwords up to 25
characters long.

Usage:  Data Security/Encryption/Hex Dump.

Special Requirements:   None.

How to Start:  Type GO (press enter).

Suggested Registration: $27.50 (Australian).

Author: D.J. Lincoln, Australia.

File Descriptions:

???????  DOC  Documentation.
DECRYPT  EXE  Decryption Program.
ENCRYPT  EXE  Encryption Program.
HEXDUMP  EXE  Hexdecimal printout program.

The PC-SIG Library
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## HEXDUMP.DOC

{% raw %}
```
                            HEXDUMP                    Version  1.0

  This program provides a hexadecimal dump of a file on the screen. No
    stopping occurs at end of page but the output may be piped or
    redirected using DOS pipes or redirection commands.

  Examples of use:-

    HEXDUMP filename        Dumps a file to the screen without page breaks

    HEXDUMP filename |MORE  Dumps a file to the screen with page breaks

    HEXDUMP filename >PRN   Dumps a file to the printer

    The file name will be asked for if it is not given on the command line.
```
{% endraw %}

## README.DOC

{% raw %}
```


Version of 22 February 1989.


DLT.COM (C) -- Routine should be installed on the system directory
               or first search directory and used instead of the
               DOS/OS delete/erase command, del and erase cannot
               delete multiple datasets without the use of the
               wildcard, which is not always suitable.  This routine
               will delete multiple files on the command line
               as the unix RM command ( wildcards are not supported ).

         Options: /t == Type dataset names as deleted.
                  /f == Use force if need be to delete R/O datsets.

/* .................................................................. */

ENTAB.COM (C)  Routine will convert spaces in datasets to tabs
               according to options specified, or default processing
               using 8 spaces per tab.

         Options: ... see source for usage

/* .................................................................. */

HEAD.COM (C) - Routine is the standard unix HEAD command, it will
               read n lines ( 20 default ), from the start of a
               dataset and write them onto std output, output until
               eof if dataset does not have 20 (or n) records.

         Options:  ... see source for options and usage.
/* .................................................................. */


MERGE.COM (C)  Routine will read the .A output from the Turbo
               C compiler and read the .C source, and merge the
               two, this is useful to see how the compiler has
               translated individual code segments.

/* .................................................................. */

PR.COM (C)  -- Routine is the standard unix PR function, it will
               generated formatted print files with carriage ctl
               and send the formatted output onto std output,
               output can be filed or printed.

         Options: ... see source for usage.

/* .................................................................. */

SIZEOF.COM (C) Routine is the standard unix SIZEOF routine,
               wildcard processing is supported, options are
               supported -- see source for usage.

/* .................................................................. */

STGMAP.COM (ASM)  Routine will trace through memory reporting
               the names and sizes and hooked vectors for
               all active load modules in memory, names omitted
               with CP versions under 3.x.
               This function is useful to determine if virus
               programs or renegade TSR programs are present.
               Note: This function cannot terminate any virus
               program, and makes no attempt to analyze memory
               patterns to determine if any module has suspicious
               coding, or segment math, etc ...

               Options are supported, read source, or use
               STGMAP /? for info.

               There are two modes, ... standard, includes all
               available information, or /F (fast mode), no
               vector search is performed.

/* .................................................................. */

TAIL.COM (C) - Routine is similar to the Unix TAIL function, it
               reads n (20 default) lines from the bottom of a
               dataset toward the top and writes these records
               onto standard output in dataset record order,
               so line n-1 is output before n, as they appear in
               the dataset.

/* .................................................................. */

TEE.COM (C) -- Routine is similar to the unix TEE function, it
               will accept a dataset name, and optionally std file
               redirection for input and output, .. a copy of
               standard output is sent onto the file named in the
               command line -- this is a FILTER function.

TP.COM (C)  -- Routine should be used to replace the DOS/CP TYPE
               command.  This function will type a dataset onto
               standard console output, there are a rich number
               of options supported to control output, such as
               tp/p file file file ... , files are output 1 tube
               at a time followed by --More-- prompt.
               Use: TP /H for verbose help.

/* .................................................................. */

WILD.C (C)  -- Routine is the source function for supporting
               file wildcard processing.

/* .................................................................. */

CMDLINE.C (C)  Routine is the source function for supporting
               command line switch processing.


/* .................................................................. */


    22-Feb-89 - Steve Leoce
       **       2251 Pimmit Drive; Apt #1228
       **       Falls Church, Virginia  22043-2829


    Software is public domain and may be used without penalty or
    permission for any non commercial purposes.

    PS: I have gotten many questions about required contributions
    to the cost of development; as always I never require any
    contributions -- if you really can't sleep, send whatever you
    think it may be worth to you...

    Please contact me at the above address to direct any questions
    or commentary you might have.

    -- Steve;
```
{% endraw %}

## README.TXT

{% raw %}
```
This disk contains programs and documentation for ENCRYPT, DECRYPT, and
HEXDUMP.

ENCRYPT Version  1.0
--------------------

This program copies a file and encrypts as it does so.
The program will encrypt any file by means of a user supplied password, and
the file can ony be decrypted by means of the same password and the
accompanying program 'DECRYPT'.
The encrypted file is the same length as the original file.

The encryption scheme used is similar to the Data Encryption Standard,
but is more secure, and non_symetrical. (i.e. encrypting an encrypted file
does not result in the original file) , therefore you must have the
accompanying 'DECRYPT' program (and the password) to decrypt your file.
There are at least two advantages of this scheme:-
  1. The encryption scheme is more secure than the DES.
  2. A file may be encrypted more than once, giving an exceptionally
     high degree of security.

Initiating the program:-

Ensure the program is in the current directory or available via the DOS PATH
command and type:-

  ENCRYPT input_file_name output_file_name

where 'ENCRYPT' is the name of the program
      'input_file_name' is the full name of the file to be encrypted
      'output_file_name' is the full name given to the encrypted file

Operation:-

The program prompts for the input and output files names if they are not
given on the command line.
The program always prompts for the password which cannot be given on the
command line.
The password may be up to 255 characters in length and may consist of any
characters including spaces.

WARNING                          WARNING                            WARNING
-------                          -------                            -------

There is no way to decrypt an encrypted file without the password, so you
better not forget it.

DECRYPT Version  1.0
--------------------

This program copies a file and decrypts as it does so.

The program will decrypt any file, which has been encrypted by the
accompanying ENCRYPT program.

Initiating the program:-

Ensure the program is in the current directory or available via the DOS PATH
command and type:-

  DECRYPT input_file_name output_file_name

where 'DECRYPT' is the name of the program
      'input_file_name' is the full name of the encrypted file
      'output_file_name' is the full name given to the unencrypted file

Operation:-

The program prompts for the input and output files names if they are not
given on the command line.
The program always prompts for the password which cannot be given on the
command line.
The password must be exactly the same as the password used to encrypt the
file. Upper case letters are not the same as lower case letters and spaces
are significant.

WARNING                          WARNING                            WARNING
-------                          -------                            -------

There is no way to decrypt an encrypted file without the password, so you
better not have forgotten it.

HEXDUMP Version 1.1
-------------------

This is an upgrade which corrects a minor bug. The bug caused corrupted
addresses when the file length exceeded 64K.

This program provides a hexadecimal dump of a file on the screen. No
stopping occurs at end of page but the output may be piped or
redirected using DOS pipes or redirection commands.

Hexdump outputs to standard I\O so that the output may be directed to a file
or another device (e.g. printer).

   Examples of use:-

Ensure the program is in the current directory or available via the DOS PATH
command and type:-

  HEXDUMP filename        Dumps a file to the screen without page breaks

  HEXDUMP filename |MORE  Dumps a file to the screen with page breaks

  HEXDUMP filename >PRN   Dumps a file to the printer

The program prompts for the file name if it is not given on the command
line.

COPYRIGHT and LICENCE
---------------------

These programs have been placed in the public domain by the author.
Copies may be made for non_commercial, demonstration or evaluation use.
Any copies made for commercial use or use by profit_making users must be
registered and licensed.

License fee varies form program to program, and is given in the program's
sign on message.
All users may register for upgrades for $12.50 (Australian).
```
{% endraw %}

## REVISION.DOC

{% raw %}
```
09-May-1989 19:27

Revsions for X7579

STGMAP.ASM (.COM) -- Status: Minor;
New option added (/V) - shows the vectors reserved by DOS to application
programs which are not used.  These vectors are 60H - 67H;  The program
determines if one or more of these vectors are not in use by first checking
the segment (if 0000 - the vector is not allocated), if the segment is not
zero, and the first instruction is 0xCF (IRET) then the vector is free,
otherwise, the vector is counted as allocated to some program, and it is
not included in the list.

PR.C (.EXE) -- Status: Minor;
Options processing for the /B parameter has been enhanced into a standard
style burst page commonly found on large systems which is useful for
identifing datasets printed on networked remote printers.  Use care, use
of this option will print 2 additional pages; 1 before and 1 after the
actual dataset.  Previously, this option only printed 1 initial page, and
the data was standard print.

RM.C (.EXE) -- Status: New;
This program more closely resembles the function of the later editions of
the UNIX family of RM routines.  It fully supports the expansion of
wildcards via startup routines, and implements the -N option (no action,
therefore one can see what will be deleted before the delete occurs).


RM.C (.EXE) -- Usage: RM [-cftn?] file [file ...]

Options available:
    -c	--> Provide summary of count when complete.
    -f	--> use FORCE , force R/O to R/W before delete attempt.
    -t	--> type filenames upon deletion
    -n	--> Process wildcards, and type names -- do NOT delete.
    -?	--> Brief options summary

This routine more closely simulates the standard UNIX RM function, which
it late releases fully supports wildcards, and when the -T option is
in effect, shows names expanded by the wildcard expander in uppercase,
other names are shown in the case as typed.  This program exhibits this
behaivor.

This function can if desired replace the DLT function, which does not
support wildcards in the filenames.

----------

There are no major revisions in this release - so if there are problems
replacing the modules already submitted there should be no problem,
although there may be some complaints about those who use the /B option
in the PR filter -- before this revision the /B option was very primitive.

If problems -- please contact me.

s;
```
{% endraw %}

## STGMAP.ASM

{% raw %}
```
;stgmap - routine will show the memory map allocated to each MCB
;in the system
;for version 3.x and later the program name will be provided as well
;
title stgmap.asm - show storage chain
name  ikjstg
page    80,132
;
;------- m a c r o s     -------------
pusha    macro
         pushr   ax
         pushr  bx
         pushr  cx
         pushr  dx
         pushr  si
         pushr  di
         pushr  es
         pushr  ds
         pushr  bp
         endm
;
pushr    macro   reg
         push    reg
         endm
;
popa     macro
         popr    bp
         popr   ds
         popr   es
         popr   di
         popr   si
         popr   dx
         popr   cx
         popr   bx
         popr   ax
         endm
;
popr     macro   reg
         pop     reg
         endm
;
;------- e q u a t e s   -------------
;
cr      equ     0dh     ;common symbols
lf      equ     0ah     ;
tab     equ     09h
;
code     segment para public 'code'
         assume cs:code,ds:code,es:code,ss:code
;
id       segment byte public 'data'
author   db     'Steve Leoce - Public Domain'
stamp    db     'STGMAP 29 Aug 1987'
release  db     'V3 R1 SvcLvl 7'
terminal db     1ah
id       ends
;
         org    100h
entry:   jmp    map     ;do the map thing...
;
heading  db     13,10,'Addr   Para    Bytes    Member Name'
         db     8 dup (' '),'Hooked Vectors '
crlf     db     cr,lf,'$'
commsg   db     'COMMAND.COM '
unkmsg   db     '    N/A     '
fremsg   db     'UNALLOCATED '
space    db     3 dup (' '),'$'
n_blk    db     0       ;count table entries
ver3     db     0       ;=1 if version 3.x
;
fcount   db     0       ;free space count
mcount   db     1       ;member count
;
pgmsize  dw     ?       ;region size
;
map      proc   near

;
; release any other storage not used by the map program above here
; allow 512 bytes to remain on board for stack and table ...
;
         push   es
         mov    ax,ds:[002ch]   ;release the env
         mov    es,ax
         mov    ah,49h
         int    21h     ;no need to keep it here
         pop    es      ;restore es segments
         mov    bx,512+offset eom       ;allow 1K stk, Plus pgm
         mov    sp,bx   ;reset stack here ...
         add    bx,15   ;round up 1k
         mov    cl,04   ;divide by 16 for paragraphs
         shr    bx,cl
         mov    pgmsize,bx      ;store new region size
         mov    ah,4ah  ;free allocated memory fcn
         int    21h     ;do it now
         jnc    relsd           ;couldn't release
         mov    dx,offset memmsg
         mov    ah,09h
         int    21h     ;write the warning
;
relsd:  mov     ah,30h  ;check cp version
         int    21h
         cmp    al,3    ;if not 3.x?
         jb     not3
         inc    ver3
not3:
        call    parse   ;determine flags
        call    intro   ;intro function here ...
;
;--- find the MCB by scanning through memory, on exit ES=MCB address
;--- AX=Block address, BX=ES, CX=OWNER, DX=TOP of memory
;
         xor    bx,bx
search:  mov    es,bx   ;point segment to 0
         assume es:nothing      ;tell masm nothing
         cmp    byte ptr es:[0],'M'     ;is this an MCB signature?
         je     check   ;might be ... let's look
crawl:   inc    bx      ;point to next segment
         jmp    search  ;continue the search
check:   mov    ax,bx   ;MCB seg should belong to next
         inc    ax
         mov    cx,word ptr es:[1]      ;if owner of this block is the
         cmp    ax,cx   ;is the same as the block
         jne    crawl   ;is the legit first block
foundf:  mov    dx,word ptr ds:[2]      ;top of memory is saved here
;
; if the owner is cx=0, then this block is unallocated <FREE>
; AX=mem addr, BX=ES, CX=OWN, DX=TOP, look up owner in table
;
worm:   cld             ;string moves forward in memory
         mov    di,offset table ;where to search for the names
         mov    cx,word ptr es:[1]      ;get owner of this block
         mov    al,n_blk        ;number to look at
srchtab:        or      al,al   ;if no entries are left
         jz     create  ;then create a new one
         dec    al      ;adjust valid entry table count
         or     cx,cx   ;if unallocated
         jz     skip    ;then skip to the end
         mov    si,word ptr [di]        ;get pid of owner
         cmp    cx,si   ;if owner matches
         je     addlen  ;add more length bytes here
skip:    add    di,17   ;point to next entry
         jmp    srchtab ;and continue the scan
;
; assume di points to 1st empty spot in the table
;
create:  inc    n_blk   ;adding a new entry to count
         mov    ax,cx   ;recover the id word here
         or     cx,cx   ;if block is not allocated now
         jnz    notfree ;don't count it
         mov    ax,bx   ;then put memory as owner
         inc    ax      ;marked next segment
notfree:        mov     word ptr [di],ax        ;put owner id in table
         mov    word ptr [di][2],0      ;zero initial length
addlen:  mov    si,word ptr es:[3]      ;block length is here
         inc    bx      ;use length to point bx...
         mov    ax,bx   ;point ax to memory segment
         add    bx,si   ;and MCB zone
         add    word ptr [di][2],si     ;increase paragraph count
         mov    si,offset fremsg        ;the memory free message
         or     cx,cx   ;if owner = 0
         jnz    owned   ;
         or     memchk,cl       ;if doing fast scan, mark free
         jz     scanall ;don't mark
         mov    word ptr [di],cx        ;otherwise, PID is zero
scanall: mov    cx,12   ;length of string
         inc    fcount  ;free space counter ...
         jmp    copy
owned:
;
; is this block a primary block (a program)?
;
         cmp    ax,cx   ;is mem=owner
         jne    next    ;no
;
; this is a program block - word at offset 2ch into the block contains
; environment segment address (offset from current es by 1 block)
;
         mov    si,word ptr es:[2ch+10h]
         cmp    n_blk,1 ;if not first block
         jne    chkenv  ;look for an envrionment
         mov    si,offset commsg        ;the commander is owner
         mov    cx,12   ;bytes to output as name
copy:    mov    bp,12   ;fixup
         sub    bp,cx   ;for later
         add    di,4    ;string destination
         push   cs      ;point es to this segment
         pop    es
         rep    movsb   ;copy the name here
         mov    al,' '
         mov    cx,bp   ;remainder to fill w/spaces
         rep    stosb   ;store the bytes here
         mov    al,'$'  ;dos string terminator
         stosb          ;save it in stg
         push   cs      ;restore ds to segment
         pop    ds
         jmp    short next      ;get next block
;
; is the envrionment still allocated to the owner?
;
chkenv:  cmp    ver3,0  ;if not 3.x
         je     noenv   ;skip this section - no name
         dec    si
         push   si      ;point to env MCB
         pop    ds      ;segment is DS for name find
         cmp    cx,word ptr ds:[1]      ;compare owners
         jnz    noenv   ;not our property
;
; point ds:si to the env and scan for dbl zero entry (00)
;
         inc    si      ;point si back to env
         push   si
         pop    ds      ;data segment here
         xor    si,si   ;offset = 0
         inc    si
scan:    dec    si      ;backup one byte
         lodsw           ;look at the word there
         or     ax,ax   ;if not double 0 then
         jnz    scan    ;continue to look
;
; now at the end of the path name and program name
;
         lodsw           ;skip a word (# strings)
         mov    bp,si   ;point to first char
         dec    bp      ;
path:    lodsb           ;read char at si
         or     al,al   ;if 0, eos
         jnz    path    ;else continue reading
;
; si now points to the terminator (0), scan backward for \ in memory
;
         dec    si
         mov    cx,si   ;point cx past last char
name:    dec    si      ;point to char
         cmp    si,bp   ;is it the 1st char?
         je     start   ;string start here ...
         cmp    byte ptr [si],'\'       ;the backslash?
         jne    name    ;no, continue looking
start:   inc    si      ;point to start char
         sub    cx,si   ;length of string
         jmp    copy    ;copy the name ...
noenv:   push   cs      ;restore ds
         pop    ds
         mov    cx,12   ;number of chars
         mov    si,offset unkmsg        ;unknown message
         jmp    copy    ;write that name
;
; point es to next MCB and continue searching, stop at top of memory
;
next:    mov    es,bx   ;set es to next paragraph
         cmp    bx,dx   ;now at top of memory?
         je     nomore  ;nothing else to do now
         jmp    worm    ;otherwise, continue scan
nomore:  cmp    memchk,0        ;see if table should be written
         je     short showtab
         call   summary ;just write summary , exit
showtab:        mov     dx,offset heading       ;display the table now
         mov    ah,09h
         int    21h     ;write the heading
         mov    si,offset table
         mov    cl,n_blk
         xor    ch,ch
print:   inc    mcount  ;increment owner
         call   prtword
         mov    siz,0ffffh      ;load -1 indicator - size reqd
         call   prtword ;print size
         call   ascii           ;output the size in bytes
         mov    dx,si   ;name of owner
         mov    ah,09h  ;function = output string
         int    21h
         add    si,13   ;next entry is here
         cmp    fast,1  ;true for fast?
         je     nxt     ;get next
         call   vlist   ;show the vector list
nxt:     lea    dx,crlf ;the cr/lf string
         mov    ah,09h
         int    21h     ;output newline
         mov    pid,0   ;assume no owner right now
         mov    siz,0   ;sizing is required
         loop   print   ;continue until done
         lea    dx,members      ;member string
         mov    ah,09
         int    21h
         mov    al,mcount
         sub    al,fcount       ;remove the # free
         call   number
;
         lea    dx,freespc
         mov    ah,09
         int    21h
;
         mov    al,fcount
         call   number
         mov    dx,offset crlf
         mov    ah,09h
;
         mov    al,vctchk              ; check vectors?
         or     al,al                  ; if not, quit
         jz     mxit                   ; exit map routine
;
         call   vectors                ; otherwise, show free vectors
;
mxit:
         mov    ax,4c00h        ;terminate with CP
         int    21h
map      endp
;
spacer   db      5 dup (' ')     ;5 blanks to sep name list ...
         db      '$' ;end marker
;
vlist    proc   near    ;output the list of vectors
         push   cx      ;save block count here
         push   si
;
; ** compare to see if an active process was found
;
         push   ds
         pop    bp
         cmp    pid,bp
         jne    short v0        ;no - start the search
         lea    dx,amsg
         dec    mcount  ;keep track properly
         mov    ah,09h
         int    21h     ;output the msg line
         jmp    short vexit     ;blow out when this pgm
;
; ** output the spacer characters now - and search interrupts
;
v0:      lea    dx,spacer       ;write the spacer here
         mov    ah,09h
         int    21h     ;output the spaces
;
; now start the loop here - read the vector table and see if owner
; matches requested value - move bp,pid and see
;
         mov    bp,pid
         mov    di,bp
         add    di,10h  ;correction required
         mov    cx,00ffh        ;load the number to do
         xor    ax,ax   ;the place to start
         xor    si,si
v1:      push   cx      ;save the loop control for now
         push   ds
         push   ax
         xor    bx,bx
         mov    ds,bx
         lodsw
         lodsw          ;get the segment
         mov    bx,ax
         pop    ax
         pop    ds      ;restore ds
         mov    dx,bx   ;for later
         cmp    bx,bp   ;compare the segments here
         je     v2      ;do nothing, continue
         cmp    bx,di   ;maybe this one?
         jne    v3      ;not a match, continue search
v2:      push   ax
         call   hex2    ;output 2 chars now ...
         mov    dl,' '
         mov    ah,02
         int    21h     ;output a blank space
         int    21h     ;output the space twice
         pop    ax
v3:      pop    cx      ;restore the lcr
         inc    al      ;point to next interrupt
         loop   v1      ;continue until done
;
vexit:   pop    si
         pop    cx      ;restore block counter
         mov    pid,0   ;store a zero here for later
         ret
vlist   endp
;
pid     dw      0       ;process id word here
siz     dw      0       ;process size requirement
;
prtword  proc    near
         lodsw           ;get owner
         cmp    pid,0
         jne    prt2    ;don't load second time
         mov    pid,ax  ;otherwise, save the value
prt2:    cmp    siz,0ffffh      ;insert the size yet?
         jne    prt3    ;just continue - not required
         mov    siz,ax  ;store the value now
prt3:    call   hex4    ;write 4 digits
         mov    dx,offset space ;the spacer ...
         mov    ah,09h
         int    21h
         ret            ;back to caller
prtword endp
;
; hex4 - write AX as 4 hex digits onto console
; hex2 - write AL as 2 hex digits onto console
;
hex4     proc   near
         push   ax
         mov    al,ah   ;show high digits first
         call   hex2    ;display al
         pop    ax      ;restore low digits to al
;
hex2     proc    near    ;display al
         push   ax      ;save register used
         push   cx      ;save cx across shift
         mov    cl,4
         shr    al,cl   ;get high 4 bits
         pop    cx      ;restore cx
         call   h2c     ;display upper al digits
         pop    ax      ;restore lower
         and    al,0fh  ;mask and display
h2c:     add    al,90h  ;convert to ascii char in al
         daa             ;bcd convert
         adc    al,40h
         daa
         push   dx
         mov    dl,al
         mov    ah,02
         int    21h
         pop    dx
         ret
hex2     endp
hex4     endp
;
output   db      7 dup ('0')
         db      3 dup (' ')
         db     '$'
;
ascii    proc    near
         pusha           ;save all registers
         mov    cx,7    ;bytes to zero
         lea    di,output
         mov    dl,' '
rp0:     mov     [di],dl
         inc     di
         loop   rp0     ;store spaces
         mov    ax,siz  ;store the size
         xor    dx,dx   ;multiply by 16 now
         mov    bx,16   ;value in a paragraph
         mul    bx      ;do it now, dx:ax contains result
         dec    di      ;addr to start
         xchg   bp,dx   ;stash temp hiword
         mov    bx,0ah
         mov    cl,30h  ;convert factor weight
rp1:     cmp     bp,0    ;hi part exhausted yet?
         jz      short rp2       ;continue when done
         xchg   ax,bp
         xor    dx,dx   ;continue with top
         div    bx
         xchg   bp,ax
         div    bx
         or     dl,cl
         mov    [di],dl ;store converted char
         dec    di      ;make room for next
         jmp    short rp1       ;continue
rp2:     xor     dx,dx   ;hi word is gone
         div     bx      ;remainder in ax used
         or     dl,cl   ;adjust weight for ascii
         mov    [di],dl ;store the char
         dec    di
         cmp    ax,0    ;done?
         jnz    short rp2
         lea    dx,output
         mov    ah,09h
         int    21h     ;output the string
         popa           ;restore registers
         ret            ;return now
ascii    endp            ;all done
;
summary proc    near    ;only show totals
         call   newline
;
         mov    si,offset table
         mov    cl,n_blk
         xor    ch,ch
         xor    bx,bx   ;temp total
         mov    bp,bx
         mov    fcount,bl
         mov    mcount,bl
;
smrylp:  lodsw           ;read pid field for free mark
         or     ax,ax
         jnz    alloc   ;already allocated
;
         inc    fcount
         lodsw          ;now have size
         add    bp,ax   ;free space in bp
         jmp    short smryelp
;
alloc:   lodsw
         add    bx,ax
         inc    mcount
;
smryelp: add    si,13   ;skip away filename
         loop   smrylp  ;and continue
;
; write details for summary here
;
         push   bp      ;save free space total
         sub    bx,pgmsize      ;remove from allocated space
         mov    siz,bx  ;resident bytes here
         call   ascii
         call   smryhdr
         lea    dx,smrymsg2
         mov    ah,09h
         int    21h
;
         lea    dx,smrymem
         mov    ah,09h
         int    21h
         xor    ax,ax
         mov    al,mcount
         dec    al      ;remove count of self

         call   number
         call   newline
;
; process unallocated segments here
;
         pop    bx
         add    bx,pgmsize      ;add program length to free
         mov    siz,bx
         call   ascii
         call   smryhdr
         lea    dx,smryfre2
         mov    ah,09h
         int    21h     ;write total
;
         mov    ah,09h
         lea    dx,smryfre
         int    21h
         xor    ax,ax
         mov    al,fcount
;
; adjustment to al not required here -- the free pool will be
; linked with the large free pool at the bottom when execution
; is terminated
;
         call   number
         call   newline
;
;
; obtain total memory size
;
         call    newline ;double space required
         call    memsize
         mov    siz,ax
         call   ascii
         lea    dx,smrytot
         mov    ah,09h
         int    21h
         call   newline
;
; terminate execution here
;
         mov     ax,4c00h
         int    21h     ;condition code is 00
;
smryhdr  proc    near
         lea     dx,smrymsg      ;write header
         mov    ah,09h
         int    21h     ;and return to internal call
         ret
smryhdr  endp
;
newline  proc    near
         lea     dx,crlf
         mov    ah,09h
         int    21h
         ret
newline  endp
;
summary  endp
;
memsize  proc    near    ;determine memory size
         xor     dx,dx
         mov    bx,1024 ;bytes / k
         mov    cx,16   ;bytes / para
         int    12h     ;memsize request
         mul    bx
         div    cx
         ret            ;ax = size in para
memsize  endp
;
         subttl VECTORS - Show free user interrupts
         page
;
maxvect  equ       67H                 ; last user vector number
first    equ       60H                 ; first user vector
userofs  equ       0180H               ; first vector offset
;
vctr     db     0                      ; current processed vector
curv     db     first                  ; first one to check
;
vectors  proc   near
         lea    dx,freevct             ; free message
         mov    ah,09h
         int    21H                    ; write intro message
;
         xor    ax,ax                  ; segment zero
         mov    es,ax
         mov    di,userofs             ; user offset = 180H
;
v01:     push   ds
         lds    bx,dword ptr es:[di]
         test   bx,0FFFFH              ; see if free, null segment
         jnz    v02                    ; not sure, check 1st instr
;
         mov    ax,ds
         test   ax,0FFFFH              ; reset flags
         jz     v03                    ; certainly free now
;
; not sure- examine first instruction
;
v02:     cmp    byte ptr [bx],0CFH     ; valid iret does nothing...
         jz     v03                    ; certainly not used
;
         pop    ds                     ; restore for next search
         jmp    short v04              ; see if complete
;
v03:     pop    ds
         inc    byte ptr [vctr]        ; current vector number
;
         xor    bx,bx
         mov    al,byte ptr [curv]     ; current conversion
         call   hex2                   ; convert byte to HEX
;
         lea    dx,spaces              ; two spaces
         mov    ah,09H
         int    21H                    ; write separator
;
v04:     cmp    byte ptr [curv],maxvect
         jz     v05                    ; all complete...
;
         cmp    byte ptr [curv],0FFH
         jz     v06                    ; increment free count, continue
;
         test   byte ptr [curv],0FFH   ; last vector in list?
         jz     v07                    ; nothing free
;
v06:     inc    byte ptr [curv]        ; next one
         add    di,04                  ; next vector in table
         jmp    short v01              ; continue scan
;
v05:     mov    ah,09H                 ; write final cr/lf
         lea    dx,crlf
         int    21H
;
         ret                           ; back to caller
;
v07:     lea    dx,nonefree            ; nothing free
         mov    ah,09H
         int    21H
         jmp    short v05              ; output cr/lf, exit
;
vectors  endp
;
amsg     db      ' * Map facility not resident *$'
;
smrymsg  db      'Bytes in $'
smrymsg2 db      'resident allocation - $'
smryfre2 db      'free storage pool   - $'
smrytot  db      'Bytes total memory$'
;
smrymem  db      ' Member(s): $'
smryfre  db      'Segment(s): $'
members  db      13,10,4 dup(' '),'Active Load Members - $'
freespc  db      13,10,4 dup(' '),'Blocks Available    - $'
;
freevct  db      13, 10, 10
         db      4 dup(' '), 'Available interrupt vectors:', 13, 10
         db      4 dup(' '), '$'
;
spaces   db      2 dup (' '), '$'
;
nonefree db      4 dup(' '), '* None available', '$'
;
memmsg   db      '!STGMAP: (F21,S4A) Failed to release; all allocated'
         db      13,10,'$'
intmsg   db      'MCB Storage Map Facility - Version 3, Release 2, Service Level 8'
         db      13,10,'Load Member names $'
notm     db      'not $'
arem     db      'are $'
avail    db      'available',13 dup (' '),'Control Program $'
period   db      '.'
;
intro    proc    near
         mov     ah,09h
         lea    dx,intmsg
         int    21h
         lea    dx,notm
         cmp    ver3,0
         je     short i2
i1:      lea    dx,arem
i2:      mov    ah,09h
         int    21h     ;output the message
         lea    dx,avail
         int    21h     ;finish msg
         mov    ah,30h  ;get the version
         int    21h     ;ask cp for release number
         push   ax
         xor    ah,ah   ;blow out the top for now
         call   number
         mov    dl,period
         mov    ah,02
         int    21h     ;output the dot ..
         pop    ax
         mov    al,ah
         xor    ah,ah
         call   number
         lea    dx,crlf
         mov    ah,09h
         int    21h     ;write the crlf ...
         ret             ;back from intro routine
;
number   proc    near
         aam
         add    ax,3030h
         cmp    ah,30h
         je     p1
         push   ax
         mov    dl,ah
         mov    ah,02
         int    21h
         pop    ax
p1:      mov     ah,02
         mov     dl,al
         int    21h     ;output the char
         ret
number   endp
intro    endp            ;end of proc
;
parse    proc    near
         mov     si,80h
         lodsb
         or     al,al   ;if nothing, done
         jz     pend    ;quit now
         mov    cl,al   ; save count of characters
         xor    ch,ch   ; don't go forever though
;
pa1:     lodsb
         cmp    al,0dh  ;the cr char?
         je     pend    ;done - nothing
;
         cmp    al,20H  ; if a space or tab, do nothing
         je     short pnxt
;
         cmp    al,09H
         je     short pnxt
;
         cmp    al,'/'  ;complete?
         je     short nxch
;
         lea    dx,help
         mov    ah,09H
         int    21H
;
         mov    ax,4C16H
         int    21H
;
nxch:

         lodsb          ;get next one in
         cmp    al,'?'  ;issue helps
         jne    pa1a    ;continue
;
         lea    dx,help
         mov    ah,09h
         int    21h
;
         mov    ax,4c04h
         int    21h
;
pa1a:    and    al,5fh  ;convert to uppercase
         cmp    al,'F'
         jne    pa2     ;invalid char
;
         inc    [fast]
         jmp     short pnxt
;
pa2:     cmp     al,'M'  ;mem size only
         jne     pa3
;
         inc    [memchk]
         jmp    short pnxt
;
pa3:     cmp    al,'V'                 ; show vectors?
         jne    pa4                    ; no, bogus switch
;
         inc    [vctchk]
         jmp    short pnxt
;
pnxt:
         loop   pa1                    ; continue until done
;
pend:    ret
;
pa4:
         lea     dx,pmsg1
         mov     ah,09h
         int    21h
;
         ret
;
parse    endp
;
pmsg1    db      'Invalid parameter has been ignored',13,10,'$'
help     db      13,10,'Usage: STGMAP [/F /M /V]',13,10,10
         db      '  /F - Fast memory scan, Suppress vector display',13,10
         db      '  /M - Active memory scan only, Show memory usage',13,10
         db      '  /V - Show free vectors in the user region',13,10
         db      'NONE - Full memory scan, Show everything available'
         db      13,10,'$'
;
fast     db      0       ;=1 when selected def= no fast scan
memchk   db      0       ;=1 when selected def= no mem check only
vctchk   db      0       ;=1 when selected def= no show vectors
;
; format is table db 20 dup (0,0,0,0,'            ')
;
table    label   byte
eom      equ     $       ;last byte here
;
code     ends
         end     entry   ;entry point to linker
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1533

     Volume in drive A has no label
     Directory of A:\

    CMDLINE  C        1439   1-08-88   3:32p
    DECRYPT  DOC       878   7-19-88   8:08p
    DECRYPT  EXE      8928   7-19-88   8:16p
    DLT      C        2156   2-22-89   9:27p
    DLT      COM      6628   2-22-89   9:27p
    ENCRYPT  DOC      1250   7-19-88   8:04p
    ENCRYPT  EXE      8544   7-19-88   8:17p
    ENLARGE  C        5528   5-09-89   8:00p
    ENTAB    C         752   2-22-89   9:48p
    ENTAB    COM      5526   2-22-89   9:49p
    FILE1533 TXT      4035   8-10-89   2:33p
    GO       BAT        43   8-10-89   2:35p
    HEAD     C        1879   2-22-89   9:15p
    HEAD     COM      9050   1-09-88   4:01p
    HEXDUMP  DOC       580   7-19-88   8:26p
    HEXDUMP  EXE      8144   3-09-89   6:25p
    LOCAL    H        1919   6-26-88  10:58a
    LOCAL    LIB      6656   7-02-88   1:22p
    MERGE    C        4053   2-22-89   9:15p
    MERGE    COM      8872   6-25-88  10:44a
    PR       C        3703   2-22-89   9:59p
    PR       COM     11486   2-22-89  10:00p
    PR       EXE     18693   5-09-89   8:00p
    README   DOC      5534   2-22-89  10:36p
    README   TXT      4392   3-13-89   5:10p
    REVISE   BAT        35   5-09-89   8:00p
    REVISION DOC      2397   5-10-89   8:00p
    RM       C        2730   5-09-89   8:00p
    RM       EXE      9285   5-09-89   8:00p
    SIZEOF   C        2450   2-22-89   9:14p
    SIZEOF   COM      7232   7-02-88   4:08p
    STGMAP   ASM     26146   5-09-89   8:00p
    STGMAP   COM      2109   5-09-89   8:00p
    TAIL     C        4049   2-22-89   9:45p
    TAIL     COM      9532   2-22-89   9:46p
    TEE      C        2239   2-22-89   9:56p
    TEE      COM      9100   2-22-89   9:57p
    TP       C        4472   2-22-89   9:52p
    TP       COM     10498   2-22-89   9:53p
    WILD     C        1745   2-22-89   9:14p
           40 file(s)     224687 bytes
                           76800 bytes free
