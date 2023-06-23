---
layout: page
title: "PC-SIG Diskette Library (Disk #1994)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1994/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1994"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS-EZ, MAKESYS AND LISTBACK"

    DOS-EZ is a package of utilities to help make using a PC a little
    easier.  Included are some extensions of existing functions, as well as
    some routines that DOS forgot.
    
    ~ NOW -- Displays both current date and time at once.
    
    ~ SOUND -- Makes the speaker in your PC sing or beep.
    
    ~ VIEW -- A full screen browsing program to view a specific file.
    Better than the TYPE command, contents won't scroll off the screen.
    
    ~ XDIR -- XDIR provides more functions than "DIR *.* | SORT". XDIR can
    search files before/after/within certain dates. XDIR also sorts the
    screen output.
    
    ~ DTREE -- Displays the tree structure of specific pathnames or disks.
    
    ~ XDEL -- Deletes all files and files in sub-directories. In addition,
    XDEL try to remove all sub-directories if it is possible.
    
    ~ RNDIR -- Renames a directory.
    
    ~ MVFILES -- Moves files from one directory to another directory.
    Wildcard and "?" can be used in files' name which MS-DOS lacks.
    
    ~ FDATE -- Change the date and time of specific files.
    
    ~ SWAPF -- Swap file or sub-directory without using "copy" and "delete."
    
    ~ CRYPT -- A DES algorithm to encrypt/decrypt your files.
    
    ~ WIPEOUT -- Writes zero to a file(s) and deletes it, completely erasing
    the contents of the file.
    
    ~ XFIND -- Search files for a keyword which may contain wildcard "*" and
    "?". Using Kunth-Morris-Pratt non-backtracking pattern searching
    algorithm.
    
    ~ FGREP -- Search files for multiple keywords. Using Aho-Corasick
    non-backtracking pattern searching algorithm.
    
    ~ GREP -- A superset of grep, fgrep, egrep. Support OR "|" operator and
    all regular expression operators.
    
    ~ FINDF -- Find one or more than one files in the specific disk.
    
    Still not sure why your CONFIG.SYS file is so vital, or not sure exactly
    how to make or change the one that's on your system?  MAKESYS finally
    explains what your CONFIG.SYS file does and helps you build one.  This
    program gives the non-technical user the power of the professionals.  It
    may also be a time saver for those who often find themselves editing a
    CONFIG.SYS file with a cumbersome editor.
    
    LISTBACK is a hard disk utility that lists all the files and directories
    stored on a backup disk that was created using the DOS 3.3 BACKUP
    command. LSTBACK2 will do the same for backup disks created using DOS
    2.0 to 3.2. If you do not know the backup disk number, LISTBACK
    displays it. If the backup disk is not the last one, LISTBACK will
    prompt you to insert the next disk. For each file listed you may
    optionally have the program display the full path specification the file
    was copied from.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOSEZ.DOC

{% raw %}
```





                        WELCOME  TO  DOS-EZ

                            Version 1.0

                     Copyright (C) 1989 L. Chang
                         All Rights Reserved


                                LICENSE

    This version of DOS-EZ is not a public domain nor free software, but is
    being distributed as shareware.

    DOS-EZ is copyright (C) 1989 by L. Chang.

    All users granted a limited license to copy DOS-EZ only for the trial use.
    Non-registered users of this software are granted a limited license to try
    on a private, non-commercial basis. At the end of this trial period, you
    should either register your copy or stop using it.

    This license does not include distribution and/or copying of this software :

    1)  in connection with any other product and/or service.
    2)  for general use within a company, school, or institution.
    3)  in modified form ; i.e.,  you should distribute or copy all utilities,
        documents, and file contains license and registration information
        to other user.

    The distributor of a public domain or user-supported software library may
    distribute copies of DOS-EZ. Operator of bulletin board (Sysops) may post
    DOS-EZ for down loading by their users as long as the conditions listed
    above are met.


                               DISCLAIMER

    The software and documentation which provided by the author or distributed
    by dealers are working AS IS. I, L. Chang, can not accept any financial or
    other responsibility that may be the result of your use of the information
    in this documents and/or software material, including direct, indirect,
    special, or consequential damages.

    While every precaution has been taken in the preparation of this software
    and documents, the author assumes no responsibility for errors or
    omissions.

    The information and functions contained in this software is subject to
    change without notice. Revision may be issued to registered users.
    Please use this software and documents with caution.

                            TRADEMARK

IBM and PC-DOS are trademarks of International Business Machines Corp.
UNIX is a trademark of AT&T Bell Lab.
MS-DOS, Microsoft C, and Quick C are trademarks of Microsoft Corp.
Turbo C is a trademark of Borland International.


                                REGISTER


    Why you need to register ?  By just paying $25 you can have the following
    benefits :

    1) You can get an update or the next version just by paying a low update
       fee. We will be writing more utilities for this package/project.
       It will be available through the furture updates.

    2) Report any software defects to us, and we fix these bugs for you.

    3) The C source codes of all utilities can be make available to you at no
       charge. All programs are written in "C", and they can be compiled by
       Microsoft and/or Turbo C. With source codes, you can learn how to use
       DOS and BIOS calls in "C". You also can use those source codes in your
       applications.  If you adopt all or part of source codes in your
       application program, the executable image of your application is royalty
       free. This special offer is only available for DOS-EZ V1.0 , don't miss
       this special chance.

    4) Support us to upgrade programs, maintain programs , and stay in business.

    We offer quantity discounts starting at 2nd copy. Corporate or site
    licensing is also available. Please write for quantity discount pricing.
    For single user license, please use register form (file name REGISTER.FOM )
    to register your copy.  Order should be prepaid.


                            CONTENT

           
CRYPT      - Encrypt/Decrypt files
DTREE      - Display tree structures of directories
FDATE      - Change the date and time of files
FGREP      - Search files for keywords
FINDF      - Find where is files
GREP       - Search files for a pattern; Get Regular Expression and Print
MVFILES    - Move files from one directory to another directory
NOW        - Display what time it is now
RNDIR      - Rename sub-directory name
SOUND      - Generate sound or beep
SWAPF      - Swap file or directory
VATTR      - Reset video foreground and background colors
VIEW       - View a file
WIPEOUT    - Write zero into your files and delete them
XDEL       - Delete files, files in sub-directory, and remove sub-directory
XDIR       - List files in directories
XFIND      - Search files for a keyword



NAME
    crypt - encrypt/decrypt files

SYNOPSIS
    crypt [/c] password files

DESCRIPTION
    This crypt utility use DES algorithm. You should know:
    1)  If you forget the password after you encrypt files. They will be
        almost impossible to recover.
    2)  An Expert can decode your files by using a high speed computer. It
        will be possible to decode your files by using new algorithms.
    3)  The longer the password the more difficult it is to decode. Try to
        use a password longer than 6 characters.
        In order to decode a file with an 8 characters password, she/he would
        have to try 95*95*95*95*95*95*95*95 times to find the correct one.
        It takes about 10000000000 seconds to figure out by using 100 MIPS CPU.
        Please bear statement in (2) in mind: someone is out there who may
        know a fast way to find your password without 10^18 trials.
    4)  Modifying this crypt source code can give you more protection.
        (Registered  users can get source codes)

    /c : Conform before proceeding it.

    Password is case sensitive. Upper case is totally different from lower
    case.
    Wildcards '*' and '?' is allowed for specifying the file name.

EXAMPLES
     crypt /c password c:\tax\1989*.wks   ; encrypt files with password
     crypt    password c:\tax\1989tax.wks ; decrypt 1989tax.wks

DIAGNOSTIC
     Password should be more than 2 characters.


NAME
    dtree - Display the tree structure of directory

SYNOPSIS
    dtree [option] [pathname]

DESCRIPTION
    dtree read the structure of specified pathanme and displays it in tree
    structure. Without /f option you only see the relation between directory
    and sub-directory. With /f option you'll see the entire structure.

EXAMPLES
    dtree /f | view ; view the entry structure of current drive.
    dtree c:mypath  ; display the structure of c:\mypath

SEE ALSO
    dir, tree in DOS, view


NAME
    fdate - change the date and time of files

SYNOPSIS
    fdate [/Dmm-dd-yyyy] [/Thh:mm] [files...]

DESCRIPTION
    Fdate can change the date and/or time of files. Especially, when you
    use MAKE to compile your programs, fdate can help you to change date
    and time of files. This utility has another name called TOUCH.

    /D option let you specify new date for files.
    /T option let you specify new time for files.

    Fdate won't change anything if you don't specify /D nor /T.
    The input format of Date and Time is fixed. Please use '0' instead of
    space when you specify date and/or time.

    With /D option :
    mm   stands for month  ; month is 01 to 12.
    dd   stands for day    ; day is 01 to 31.
    yyyy stands for year   ; year is 1970 to 9999.

    With /T option :
    hh   stands for hour   ; hour is 00 to 23.
    mm   stands for minute ; minute is 00 to 59.

EXAMPLES
    fdate /d01-01-1989 /t12:00 *.doc ; reset the date and time of all
                                     ; "doc" files to 01-01-1989 12:00


DIAGNOSTIC
    Fdate will complain if you enter invalid date and/or time. For Example,
    13-01-1989 and 24-61 are invalid date and time.

BUGS
    Fdate does verify the date and/or time you specify, and fdate doesn't
    rule out 02-31-1989 nor 04-31-1989. Although we know there is no
    02-31-1989 nor 04-31-1989.


NAME
    fgrep - search files for multiple keywords

SYNOPSIS
    fgrep [options] keywords files...

DESCRIPTION
    Search files for keywords. Keywords can't contain wildcard '*' nor '?'.
    Files can be text files or binary files. Fgrep can search files and files
    in sub-directories for keywords. Keyword is separated by '|', so you
    should use single or double quote (' or ") to enclose a pattern.

    The following options are recognized :

    /c      Only a count of matching lines is printed.
    /i      Ignore upper/lower case.
    /l      Only the names of files with matching lines are listed(once).
    /n      Each line is proceeded by a line number.
    /s      Suppress the error message produced for nonexistent file.
    /v      All lines but those matching are listed.
    /z      Search files in sub-directories also.

EXAMPLES
    fgrep /ilz "mary|john|chris" *.dbs ; search all "dbs" files for mary, john
                                       ; or chris.  Ignoring upper/lower case,
                                       ; searching all sub-directories also,
                                       ; and only listing the name of the file
                                       ; with matching lines

    fgrep /n "mary|john" c:\dept1\*.wk1 c:\dept2\*.wks
                                       ; Search all "wk1" files in c:\dept1
                                       ; and all "wks" files in c:\dept2 for
                                       ; keyword john or mary.  Display the
                                       ; matching line with line number.
SEE ALSO
    find, xfind, grep and Technical Note.

DIAGNOSTIC
    Keywords should be specified before files. If files are binary files, the
    count of matching and line number make no sense at all. The pattern
    should be fewer than 128 characters.

Technical Note
    FGREP adopts Aho-Corasick algorithm to search files for keywords. This is
    the same algorithm used by UNIX's fgrep. This algorithm should be the
    fastest pattern searching algorithm to find "multiple" keywords. Because
    it does not match keyword once at a time. If the text contains N
    characters, this algorithm only needs N (at most) comparisons to know
    whether text contains any keyword or not. No matter how many keywords you
    specify.
    Please refer to "Efficient String Matching : An Aid to Bibliographic
    Search. CACM 1975 June" for more details.


NAME
    findf - find files in idsk

SYNOPSIS
    findf [file...]

DESCRIPTION
    Searching the entry drive to find the specified files. If you specify
    directory with file name then findf only searches the directory you
    specify and its sub-directories.

EXAMPLES
    findf c:\income.tax ; search entry C drive to find file income.tax
    findf c:income.tax  ; search the current directory and all sub-directories
                        ;  to find file income.tax
    findf c:\dos.*  d:\sys.h  ; searching entry C drive to find dos.* and
                              ; searching entry D drive to find file sys.h

SEE ALSO
    dir, xfind


NAME
    grep - search files for a pattern

SYNOPSIS
    grep [options] Regular-Expression files...

DESCRIPTION
    Grep searches the input files for lines matching a pattern. Patterns are
    full regular expressions.
    Grep can search binary files(e.g. object files). When the file is a binary
    file, the line number and count of matching makes no sense at all.
    Wildcards '*' and '?' are allowed to specify file names.

    The following options are recognized :

    /c      Only a count of matching lines is printed.
    /fFILE  Get regular expression from FILE.
    /i      Ignore upper/lower case.
    /l      Only the names of files with matching lines are listed(once).
    /n      Each line is proceeded by a line number.
    /s      Suppress the error message produced for nonexistent file.
    /v      All lines but those matching are listed.
    /z      Search files in sub-directories also.

    The regular expression metacharacters are following :
        \  ^  $  .  [  ]  |  (  )  *  +  ?

    The following table shows you regular expressions and the strings they
    match :
        c       matches the non-metacharacter c
        \c      matches the escape sequence (see below)
        $       matches the end of a string
        ^       matches the beginning of a string
        .       matches any single non-metacharacter
        [xyz..] matches any of xyz..; character class
        [^xy..] matches any single character but xy..
        R|S     matches any string matched by R or S
        RS      matches XY where R matches X and S matches Y
        R*      matches zero or more consecutive strings matched by R
        R+      matches one or more consecutive strings matched by R
        R?      matches the null string or one string matched by R
        (R)     matches string as R; grouping

    The operators are listed above in increasing precedence.

    The sequences listed below have special meaning in regular expressions and
    strings :
                \b      backspace
                \f      formfeed
                \n      newline
                \r      carriage return
                \t      tab
                \ddd    ddd is three digit octal value. ddd may be 1 to 3 digits
                \c      any other character literally


EXAMPLES
    grep /c "open|file" *.obj c:\cc\*.bin ; match "open" or "file" in *.obj
                                          ; and in c:\cc\*.bin

    grep /n "\[([0-9]+|[_a-zA-Z]+)\]" *.c ; match array subscript.
    ; [0], [abc], [_id] is matched by above expression.
    ; [0a]. [ a] [.a]   is not matched by above expression.
    ; "\[([0-9]+|[_a-zA-Z0-9]+)\]" will match [0a] or [a0].

    Caution :
        "Mary|John" matches Mary or John. It doesn't match Maryohn or MarJohn.

    "\/\*.*\*\/" will match a C comment statement.
    "[+-]?[0-9]+[.]?[0-9]*" matches a decimal number with optional sign
                             and optional fraction.
    "[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)([eE][+-]?[0-9]+)?" matches a C/Pascal
                             floating number or integer.
    "[_a-zA-Z][_a-zA-Z0-9]*" matches a C variable.

                                      
SEE ALSO
    fgrep, xfind, find and Technical Note.

DIAGNOSTIC
    The pattern should be fewer than 128 characters.

BUGS
    You may get error message from DOS due to no more stack space. In this
    case you need to recompile and link it with a bigger stack space.

Technical Note
    GREP uses NFA (nondeterministic finite automaton) to match the pattern,
    so it takes times rather than space.  This GREP read the input stream and
    analyze the complexity of the pattern. If the pattern is only a keyword,
    GREP will call a fast pattern searching routine based on Boyer-Moore's
    algorithm. If the pattern is composed of multiple keywords, GREP will
    call the routine based on Aho-Corasick's algorithm (the one we use in FGREP).
    Otherwise, GREP will simulate an NFA to match the pattern. For example,
    "grep 'mary' *.doc " will let GREP use Boyer-Moore's algorithm,
    "grep 'mary|john' *.doc" will let GREP use Aho-Corasick's algorithm,
    "grep 'marys?' *.doc " will let GREP simulate an NFA machine.
    Boyer-Moore's algorithm is better than Knuth-Morris-Pratt's algorithm in
    some situations. Please refer to "A Fast String Searching Algorithm 1977
    CACM" for more details.


NAME
    mvfiles - move files from one directory to another directory

SYNOPSIS
    mvfiles files pathname

DESCRIPTION
    This is a more powerful RENAME utility. RENAME (in DOS) can only move one
    file each time. Mvfiles allows you to use wildcard '*' and '?' to rename
    files.  Just like RENAME, you are only allowed to move files within the
    same drive.

EXAMPLES
    mvfiles c:\1989\income.*   c:\tax
    mvfiles *.c  .\test\sample

SEE ALSO
    rename in DOS

DIAGNOSTIC
    mvfiles will complain if you attempt to move files to different drive.


NAME
    now - Display current date and time.

SYNOPSIS
    now

DESCRIPTION
    Display current date and time.

SEE ALSO
    date and time commands in DOS.


NAME
    rndir - rename subdirectory name

SYNOPSIS
    rndir sub_dir1 sub_dir2

DESCRIPTION
    Rename sub_dir1 to sub_dir2. You can only rename and not move.
    What's that mean ?  It means that sub_dir1 and sub_dir2 should have
    same parent directory. In other word, RNDIR C:\TAX\1988  C:\1989 is
    not allowed because that 1988's parent directory is TAX, but 1989's
    parent directory is C:\ .

EXAMPLES
    rndir tc1 tc2 ; rename sub-directory TC1 to TC2.
    rndir a:\tax\1988 a:\tax\1989
    rndir c:\tax\1988 c:\1989 ; NO, This is an illegal command

SEE ALSO
    mvfiles, del, rename

DIAGNOSTIC
    rndir can only be used in DOS 3.x


NAME
    sound - Send a tone to speaker.

SYNOPSIS
    sound [ frequency duration ] ...

DESCRIPTION
    frequency : The frequency of the tone. A integer number is from
                20 to 20000 [Hz].   If frequency is zero then it means
                delay for some milliseconds.
    duration  : The duration of the tone. A integer number is from
                55 to 65000 [milliseconds].

EXAMPLES
    sound 440 500  ; This is Do
    sound 1000 100 ; This is beep.
    sound 440 500 0 1000 1000 100 ; Do , delay 1 second, and beep

BUGS
    No warning will be issued if frequency is less than 20 or larger than
    20000 Hz.
    Duration will be set to 55 if it is less than 55.


NAME
    swapf - swap file

SYNOPSIS
    swapf files1 files2

DESCRIPTION
    SWAPF swap file's content or file name between file1 and file2.
    If file1 and file2 are in the same directory, SWAPF then only swaps
    their file name. If file1 and file2 are not in the same directory,
    SWAPF then swaps content of files. File1 and file2 should be in the
    same device (disk).

EXAMPLES
    swapf c:\config.sys c:\config.tmp ; swap file name only

    swapf c:\1989\rules.new c:\1988\rules.old
          ; After swapping, c:\1989 contains rules.old, c:\1988 contains
          ; rules.new

SEE ALSO
    rename, rndir, mvfiles.

BUGS
    When you activate SWAPF, it will show the following messages :

        Move file1 to ________.___                   (1)
        Move file2 to file1                          (2)
        Move ________.___ to file2                   (3)

    If one of the above step fail, you'll get "Fail to move file because ..."
    If (1) fail, SWAPF will exit right away.
    If (2) fail, SWAPF will move ________.___ back to file1.
    If (3) fail, SWAPF does nothing. Because if you can't move ________.___
                 to file2, how could you move file1 back to file2.

    You may use SWAPF to swap directory. The following example shows you the
    disadvantage you may have :

        swapf file.txt mydir ; After SWAPF, file.txt is a sub-directory name,
                             ; mydir is a text file.
                             ; Fortunately, you can issue
                             ; "swapf file.txt mydir " to bring everything
                             ; back.
    You may use SWAPF to swap directory if your DOS version is 3.0 or up.
    Under DOS 2.x, you are not able to rename directory name.


NAME
    vattr - set video attribute

SYNOPSIS
    vattr [color]

DESCRIPTION
    VATTR can reset your video attribute after DOS is activated. The easiest
    way to specify the color code is entering VATTR without color code.
    If you don't specify a color code, VATTR will display all 128 combinations
    with color codes.  After VATTR displayed the entry color spectrums, you
    can pick one color easily. The color code is a hexadecimal number.

    If you are using ANSI.SYS as the Terminal driver, you should use PROMPT
    command to specify the color you want. VATTR can tell you whether you
    are using ANSI.SYS as the terminal driver or not. Please consult your
    DOS manual to help you to specify your video attribute if you are using
    ANSI.SYS.

EXAMPLES
    vattr           ; Display the entry color spectrums
    vattr 1F        ; if you are using ANSI.SYS please use
                    ; "PROMPT $e[37;44m" instead.
                    ; vattr will set the screen to blue background and
                    ; intense white foreground.

SEE ALSO
    prompt, ansi.sys


NAME
    view - browsing a file

SYNOPSIS
    view

DESCRIPTION
    view reads data from STDIN and display it on user's screen.
    No more "type read.me | more". view lets you read a file up to 60K bytes.
    Function keys are defined as followed :

    PgUp    - Move up one page.
    PgDn    - Move down one page.
    Home    - Move to the first line of file.
    End     - Move to the last line of file
    Arrow Up- Move up one line.
    Arrow Dn- Move down one line.
    Esc     - Exit to DOS.

EXAMPLES
    view < read.me  ; browse read.me : better than "type read.me | more"
    dir | view      ; find out files in current directory
                    ; same as dir > output; view < output

DIAGNOSTIC
    view has only 60K bytes buffer, file larger than 60K will display only
    the first 60K.

BUG
    If you use pipe as the input of view you may see a file which was not
    created by you. Indeed, that is the temporary file used as pipe by DOS.
    After you exit to DOS, DOS will delete that file for you. For Example,
    issue the command ,"dtree /f | view ", in DOS 3.1, you'll see one or two
    files which filenames are composed of number.


NAME
    wipeout - Write zero to files and delete them.

SYNOPSIS
    wipeout [/c] files

DESCRIPTION
    wipeout writes zero to every byte of your file and then deletes it.
    After that no one ever can recover this file.

    /c : Conform before proceeding to wipeout the file.

    Wildcard '*' and '?' is allowed to be used in file name.

EXAMPLES
    wipeout /c c:\tax\1989tax.wsk
    wipeout    c:\payroll\salary.*

DIAGNOSTIC
    Complain if can not find the file.


NAME
    xdel - delete files and sub-directories

SYNOPSIS
    xdel [files...]

DESCRIPTION
    xdel deletes files and sub-directories. If sub-directory contains files,
    xdel then deletes files in that sub-directory and removes that sub-
    directory thereafter.

EXAMPLES
    xdel *.* ; delete all files and sub-directories in current directory.
    xdel *.c ; same as del *.c

SEE ALSO
    del, erase, rndir, mvfiles


NAME
    xdir - Search files or directories and display them

SYNOPSIS
    xdir [ [options] file ] ...

DESCRIPTION
    XDIR provides two major functions to the user. The first function allows
    you to specify what kinds of files you are looking for. You can search file
    created and/or modified before/after/within certain date.
    Options are following :

     /Bmm-dd-yyyy   Display files created/modified before mm-dd-yyyy
     /Amm-dd-yyyy   Display files created/modified after mm-dd-yyyy
                    You may use /B and /A at same time
     /Imm-dd-yyyy   Display files created/modified on mm-dd-yyyy

     FORMAT :
        mm    stands for MONTH starting from 01 to 12.
        dd    stands for DAY starting from 01 to 31.
        yyyy  stands for YEAR starting from 1980 to 9999.

     The format of date mentioned above is fixed format, so please use '0'
     instead of SPACE (' ') to present leading zero.

     /T             Display files created/modified today
     /Y             Display files created/modified yesterday
     /On            Display files created/modified n days ago
     /Ln            Display files created/modified within last n days

    The second function is to sort the output before user see them. XDIR allows
    you to choose one of the following options :

     /SF            Sorted by file name before display
     /SD            Sorted by date before display
     /ST            Sorted by time before display
     /SS            Sorted by size name before display

    You may use /R option to ask XDIR to sort the output in descending order.
     /R             Sorted reverse order

    You may use /D option to search sub-directories only.
     /D             Display sub-directories only


    XDIR will display files and directories in the following format :

    File-Name        : DOS file format.
    File-Attribute   : 5 characters.
      1st character  : 'R' means this is a read only file.
      2nd character  : 'H' means this is a hidden file.
      3rd character  : 'S' means this is a system file.
      4th character  : 'D' means this is a directory.
      5th character  : 'A' means the archive bit of this file is set.

    Time             : HH:MM
    Date             : MM-DD-YYYY
    File-size        : one to ten digits integer.

EXAMPLES
    xdir /a01-01-1988 /b01-01-1989 /sd *.inv  ; find all 1988 invoice files
                                              ; and sorted by date.
    xdir /l30 /sf c:\check\*.chk ; Find all checks issued since 30 days ago.
    xdir /sf *.c /sd *.doc       ; Find all c programs and sorted by file name
                                 ; before display them. Find all doc files
                                 ; and sorted by date before display them.

SEE ALSO
    dir, findf, and sort

BUGS
    XDIR has only 512 file entries to keep the files/directories it finds.
    If it finds more than 512 files, it'll skip the 513th file and files
    after 513th.


NAME
    xfind - search files for a keyword

SYNOPSIS
    xfind [options] keyword files...

DESCRIPTION
    Search files for a keyword. Keyword can contain wildcards '*' and '?'.
    '*' means matching zero or any string. '?' means matching any single
    character. Files can be text files or binary files. xfind can search
    files and files in sub-directories for a keyword.

    The following options are recognized :

    /a?     Replace wildcard '?' with the character after 'a'.
    /c      Only a count of matching lines is printed.
    /i      Ignore upper/lower case.
    /l      Only the names of files with matching lines are listed(once).
    /n      Each line is proceeded by a line number.
    /s      Suppress the error message produced for nonexistent file.
    /v      All lines but those matching are listed.
    /w*     Replace wildcard '*' with the character after 'w'.
    /z      Search files in sub-directories also.

    Thing you should know :
    The wildcard '*' is a metacharacter in regular expression. It means
    matching zero or any string. So, how about string after '*', do we need
    to match it against text string ? In DOS file system, it will ignore
    characters after '*'. In other word, 'ab*fg' matches 'ab', 'abc', 'abcfg'.
    But in this utility when your keyword contains '*', it will try to match
    characters after '*'. If it can't match characters after '*', it will
    return 'notmatch' rather than 'match'. In other word, 'ab*fg' only matches
    'abcfg' not 'abc' nor 'ab'. You can see the later matching algorithm is
    more powerful than the one DOS uses in the DOS file system.


EXAMPLES
    xfind /ilz 'incom*tax??' *.wks; Search any WKS files for 'income*tax??'
                                  ; in current directory and any WKS files
                                  ; in sub-directories. If match just display
                                  ; the file name and keep searching other
                                  ; files. Ignore upper/lower case when it
                                  ; preforms matching.
    xfind /ilz /a~ 'income*tax~~' *.wks c:\1989\*.wk1
                                  ; The function is same as the one listed
                                  ; above. Except using '~' as the wildcard '?'.
SEE ALSO
    find, fgrep, grep and Technical Note.

DIAGNOSTIC
    Keyword should be specified before files. If files are binary files, the
    count of matching and line number make no sense at all. The keyword
    should be fewer than 128 characters.

Technical Note :
    XFIND adopts Knuth-Morris-Pratt fast pattern searching algorithm with
    minor modification to search files for a keyword. This algorithm is one
    of the fastest pattern searching algorithm. If there is an m characters
    text and an n characters sub-string. By using conventional brute-force
    algorithm, in the worst case you need to have (m-n)*m comparisons to know
    whether this text contains sub-string. Instead, in the worst case KMP
    algorithm only needs n comparisons to find the answer.
    Please refer to "SIAM J. Computing 1977 6:2 Fast Pattern Matching in String"
    for more details.



                    DOS-EZ     REGISTER     FORM


    NAME    :______________________________________________________________

    ADDRESS :______________________________________________________________

             ______________________________________________________________

             ______________________________________________________________

    COMPANY
     NAME :  ______________________________________________________________


    DOS-EZ : $25.00

    Non
    United
    States
    Users : $5.00
    [Please add $5.00 to cover extra cost of shipping.]

    TOTAL :  _______________

    All amount listed above are U. S. currency.

    Please send money order or check (only U.S. users) with amount listed in
    TOTAL and this register form to the following address.

                       L. Chang
                    P.O. BOX 201995
                  Mpls, MN  55420-1955


```
{% endraw %}

## FILE1994.TXT

{% raw %}
```
Disk No: 1994                                                           
Disk Title: DOS-EZ, MakeSys and ListBack                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Dos-Ez                                                   
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
DOS-EZ is a package of utilities to help make using a PC a little       
easier.   Included are some extensions of existing functions, as well as
some routines that DOS forgot:                                          
                                                                        
NOW   - Displays both current date and time at once.                    
SOUND - Makes the speaker in your PC sing or beep.                      
VIEW  - A full screen browsing program to view a specific file.         
        Better than the TYPE command, contents won't scroll of the      
        screen                                                          
XDIR  - XDIR provides more functions than "DIR *.* | SORT". XDIR        
        can search files before/after/within certain dates. XDIR        
        also sorts the screen output.                                   
DTREE - Displays the tree structure of specific pathnames or disks.     
XDEL  - Deletes all files and files in sub-directories. In addition,    
        XDEL try to remove all sub-directories if it is possible.       
RNDIR - Renames a directory.                                            
MVFILES - Moves files from one directory to another directory. Wildcard 
        and "?" can be used in files' name which MS-DOS lacks of.       
FDATE - Change the date and time of specific files.                     
SWAPF - Swap file or sub-directory without using "copy" and "delete".   
CRYPT - A DES algorithm to encrypt/decrypt your files.                  
WIPEOUT - Writes zero to a file(s) and deletes it, completely           
        erasing the contents of the file.                               
XFIND - Search files for a keyword which may contain wildcard "*"       
        and "?" . Using Kunth-Morris-Pratt non-backtracking pattern     
        searching algorithm.                                            
FGREP - Search files for mutilple keywords. Using Aho-Corasick          
        non-backtracking pattern searching algorithm.                   
GREP  - A superset of grep, fgrep, egrep. Support OR "|" operator       
        and all regular expression operators.                           
FINDF - Find one or more than one files in the specific disk.           
                                                                        
                                                                        
Program Title: MakeSYS                                                  
Author Version: 1.0                                                     
Author Registration: $5.00                                              
Special Requirements: None.                                             
                                                                        
Still not sure why your CONFIG.SYS file is so vital, or not sure exactly
how to make or change the one that's on your system?  MAKESYS finally   
explains what your CONFIG.SYS file does and helps you build one with    
pull down menus.  This program gives the non-technical user the power of
the pro's.  It may also be a time saver for those who often find        
themselves editing a CONFIG.SYS file with a cumbersome editor.          
Program Title: ListBack and LstBack2                                    
Author Version: 1.2                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
LISTBACK is a hard disk utility that lists all the files and directories
stored on a backup disk that was created using the DOS 3.3 BACKUP       
command.  LSTBACK2 will do the same for backup disk created using DOS   
2.0 to 3.2.  If you do not know the backup disk number, LISTBACK        
displays it.  If the backup disk is not the last one, LISTBACK will     
prompt you to insert the next disk.  For each file listed you may       
optionally have the program display the full path specification the file
was copied from.                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #1994  DOS-EZ, MAKESYS AND LISTBACK  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start MAKESYS, type:  MAKESYS (press enter)                          ║
║ To start LISTBACK using DOS 3.3 or higher, type LISTBACK (press enter)  ║
║ To start LISTBACK using DOS 2.0 to 3.2, type LSTBACK2 (press enter)     ║
║                                                                         ║
║ To print documentation for DOS-EZ, type:  COPY DOSEZ.DOC PRN            ║
║ To print documentation for MAKESYS, type:  COPY MAKESYS.DOC PRN         ║
║ To print documentation for LISTBACK, type:  COPY LISTBACK.DOC PRN       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LISTBACK.DOC

{% raw %}
```

                        LISTBACK 1.2 Documentation                5/24/89

LISTBACK Program and Documentation: Copyright (c) 1989 by Gary R. Pannone.
All rights reserved. This program may be freely distributed.

If you find this program useful, please send a contribution ($10 suggested)
to:  Gary R. Pannone, 35 Park View Rd., Hamden, CT 06514.

Introduction
------------

The LISTBACK program lists the files and directories that are stored on
backup diskettes which were created with the DOS 3.3 BACKUP command.

LISTBACK lists each directory, followed by the files that were copied from that
directory.  The filename, size, date, and time are listed for each file.




Command Syntax
--------------

The general form of the LISTBACK command is:

        LISTBACK d:[/U][/D]

   where d:  is the drive that contains the backup diskette.

         /U  indicates that the first diskette put in the
             diskette drive may not be backup diskette 01
             (i.e., an Unknown disk).

         /D  indicates that each filename listed should
             include the full directory specification.


Running LISTBACK
----------------

After you type the LISTBACK command, the program displays a startup screen.
Press any key, and the program displays a prompt that asks that you insert
the first backup diskette in the specified drive.  If you did not specify
the /U parameter, the first diskette must be backup diskette 01.

        Note:  You can press ctrl-C at any prompt to exit the
        LISTBACK program.

After inserting the diskette, press any key.  If you specified the /U
parameter, LISTBACK displays the backup diskette number.  LISTBACK reads the
control file on the diskette, and begins listing the directories and files
that are stored on the backup diskette.  If LISTBACK detects that the diskette
is not the last backup diskette, it prompts you for the next diskette.




Examples
--------

Some examples follow.

The following command lists all directories and files stored on the backup
diskette numbered 01 in drive A.

        LISTBACK A:

The following command displays the backup diskette number, and then lists all
directories and files stored on the backup diskette in drive A.

        LISTBACK A:/U

The following command lists all directories and files stored on the backup
diskette numbered 01 in drive A.  Each filename is displayed as a complete
path specification (minus drive ID).

        LISTBACK A:/D


```
{% endraw %}

## LSTBACK2.DOC

{% raw %}
```

                        LSTBACK2 1.2 Documentation                5/24/89

LSTBACK2 Program and Documentation: Copyright (c) 1989 by Gary R. Pannone.
All rights reserved. This program may be freely distributed.

If you find this program useful, please send a contribution ($10 suggested)
to:  Gary R. Pannone, 35 Park View Rd., Hamden, CT 06514.

Introduction
------------

The LSTBACK2 program lists the files and directories that are stored on
backup diskettes which were created with the DOS 2.0 - 3.2 BACKUP command.

LSTBACK2 lists each directory, followed by the files that were copied from that
directory.  The filename, size, date, and time are listed for each file.




Command Syntax
--------------

The general form of the LSTBACK2 command is:

        LSTBACK2 d:[/U][/D]

   where d:  is the drive that contains the backup diskette.

         /U  indicates that the first diskette put in the
             diskette drive may not be backup diskette 01
             (i.e., an Unknown disk).

         /D  indicates that each filename listed should
             include the full directory specification.


Running LSTBACK2
----------------

After you type the LSTBACK2 command, the program displays a startup screen.
Press any key, and the program displays a prompt that asks that you insert
the first backup diskette in the specified drive.  If you did not specify
the /U parameter, the first diskette must be backup diskette 01.

        Note:  You can press ctrl-C at any prompt to exit the
        LSTBACK2 program.

After inserting the diskette, press any key.  If you specified the /U
parameter, LSTBACK2 displays the backup diskette number.  LSTBACK2 reads the
control file on the diskette, and begins listing the directories and files
that are stored on the backup diskette.  If LSTBACK2 detects that the diskette
is not the last backup diskette, it prompts you for the next diskette.

LSTBACK2 can only determine the size of a backup file after reading every
backup diskette that contains a part of the file (a file can span backup
diskettes).  Because of this, LSTBACK2 may display a message in place of the
file size.  For example, if "BEGINS" is displayed, the file continues onto the
next backup diskette.  If "UNKNOWN" is displayed, the beginning of the file has
been missed because backup diskette 01 has not been read.  If "CONT'D" is
displayed, the file continues (but does not end) on this diskette.



Examples
--------

Some examples follow.

The following command lists all directories and files stored on the backup
diskette numbered 01 in drive A.

        LSTBACK2 A:

The following command displays the backup diskette number, and then lists all
directories and files stored on the backup diskette in drive A.

        LSTBACK2 A:/U

The following command lists all directories and files stored on the backup
diskette numbered 01 in drive A.  Each filename is displayed as a complete
path specification (minus drive ID).

        LSTBACK2 A:/D


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1994

     Volume in drive A has no label
     Directory of A:\

    CRYPT    EXE     11821   3-24-89   6:26p
    DOSEZ    DOC     30207   3-24-89   1:31p
    DTREE    EXE      5172   3-24-89   6:35p
    FDATE    EXE      8242   3-24-89   6:32p
    FGREP    EXE     10812   3-24-89   6:28p
    FILE1994 TXT      5477   1-22-90   7:45p
    FINDF    EXE      5246   3-24-89   6:34p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   1-22-90   7:57p
    GREP     EXE     15062   3-24-89   6:30p
    LISTBACK DOC      2530   5-24-89   1:42p
    LISTBACK EXE     23103   5-23-89  10:47a
    LSTBACK2 DOC      3067   5-24-89   1:41p
    LSTBACK2 EXE     20519   5-23-89  10:47a
    MAKESYS  DOC      8380   5-01-89  11:38a
    MAKESYS  EXE     70830   5-01-89  12:41p
    MVFILES  EXE      5366   3-24-89   6:30p
    NOW      EXE      5652   3-24-89   6:37p
    READ     ME       3061   3-24-89   1:29p
    REGISTER FOM       939   3-24-89   1:32p
    RNDIR    EXE      4520   3-24-89   6:31p
    SOUND    EXE      5706   3-24-89   6:56p
    SWAPF    EXE      5074   3-24-89   6:32p
    VATTR    EXE      5146   3-24-89   7:07p
    VIEW     EXE      9740   3-24-89   6:37p
    WIPEOUT  EXE      7000   3-24-89   6:35p
    XDEL     EXE      7516   3-24-89   6:33p
    XDIR     EXE     11994   3-24-89   6:54p
    XFIND    EXE     10526   3-24-89   6:28p
           29 file(s)     303594 bytes
                            3072 bytes free
