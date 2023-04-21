---
layout: page
title: "PC-SIG Diskette Library (Disk #2316)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2316/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2316"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LZE, LZESHELL, & COMTOEXE"

    Can you imagine the space you could reclaim from your hard drive by
    compressing all the .EXE files? Well, LZE, a public domain program,
    compresses an .EXE file to almost half its size! This isn't
    compression that must be decompressed to use the file; this is
    compression of the code, so the program can be used as is.
    
    LZE works with companion program COMTOEXE (which converts .COM files to
    .EXE files) to make a powerful compression package.
    
    LZESHELL interacts with LZE and COMTOEXE (all public domain programs)
    to make those programs even better.  LZESHELL changes .COM files to
    .EXE files with one command.  LZE then compresses the code of .EXE
    files to regain space on your hard drive.
    
    A companion program to LZE, COMTOEXE converts a .COM file into an .EXE
    file that can then be compressed by LZE (LZE compresses the code of
    .EXE files).  With the combination of the two files, you now have the
    ability to reclaim a sizable amount of valuable disk space from both
    .COM and .EXE files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ENGCOMEX.DOC

{% raw %}
```
COMOTEXE.EXE v1.00 (c) Fabrice Bellard

This very simple program converts a COM (or BIN) file into an EXE file.  In
fact, it does exactly the reverse of what EXE2BIN does.  It is the ideal
complement of LZEXE, by the same author, since, thanks to COMTOEXE, LZEXE can
also compress COM files.

    Syntax:  COMTOEXE filename[.com] [filename2[.exe]]

where filename is the name of the COM file to be converted.  The COM extension
is added automatically by COMTOEXE.  The original COM file is NOT erased, for
safety sake.  The 'filename2' is optional.  If not added, the new EXE file will
have the same name.

N.B.  Some COM files may not work correctly after the conversions, because some
DOS programs, such as COMMAND.COM, may need to know the exact structure of the
file, and the conversion to an EXE file does modify this structure.
```
{% endraw %}

## ENGUPACK.DOC

{% raw %}
```
	Documentation for:
		UPACKEXE.EXE  version 1.00 (c) 1989 Fabrice Bellard

	This program permits unpacking an EXE file packed with the Microsoft
	EXEPACK, so it can be compressed with LZEXE.  Otherwise, LZEXE can't
	do as good a job because EXEPACK's compression of the relocation
	table make it inacessible.

	How to use UPACKEXE:
	-------------------

	syntax:   UPACKEXE filename

	The original file's extent is changed to .OLD.  The new file is
	called UPACKEXE.TMP and is renamed after treated with LZEXE.
```
{% endraw %}

## EXE2COM.DOC

{% raw %}
```
                                  EXE2COM 1.00
                         By Chris Dunford/Cove Software

        Purpose
        -------
        EXE2COM is a one-for-one replacement for the EXE2BIN program
        that was formerly distributed with DOS.  Beginning with DOS 3.3,
        EXE2BIN has been moved to the disk that comes with the DOS
        Technical Reference and thus is not available without extra
        cost.

        Usage
        -----
        Usage is identical to DOS's EXE2BIN except that the output file
        extension defaults to COM rather than BIN (when was the last
        time you saw a BIN file?).

        Complete usage is:

            EXE2COM [d:][path]file[ext] [d:][path][file][ext]

        The drive and path of the first file default to the current
        drive and path, if not specified.  The extension of the first
        file defaults to EXE, if not specified.

        If the second file is completely unspecified, it defaults to the
        same drive, path, and filename as the first, except that the
        extension will be COM.

        If the second file is specified but without an extension, COM
        will be assumed (this is different from EXE2BIN).

        The simplest (and usual) usage is simply:

            EXE2COM file

        which will take the named EXE file in the current directory and
        convert it to a COM file in the same directory.


        Operation
        ---------
        EXE2COM runs the same way as EXE2BIN, with the following
        exceptions:

            1. The binary fixup option of EXE2BIN (IP=0, segment fixups
            required) is not supported.

            2. The EXE file checksum is not verified.

            3. Error messages are more useful, and a warning is provided
            if a COM file is created with an initial IP other than 100H.

        Error Messages
        --------------
        These are EXE2COM's error messages.  If one of these is seen,
        the EXE file will not be converted and the errorlevel returned
        by EXE2COM will be 1.

        ERROR READING EXE HEADER
            EXE2COM was unable to read the EXE file header from disk.

        ERROR WRITING OUTPUT FILE
            EXE2COM was unable to write the converted file to disk.

        INVALID EXE FILE SIGNATURE
            The first two bytes of an EXE file should be ASCII 'M' and
            'Z'.  This was not the case, and it's probably not an EXE
            file.

        EXE HAS RELOCATABLE ITEMS
            In order to be converted to a COM file, an EXE file cannot
            have any direct references to segments.  For example, the
            assembler instruction "mov ax,code" (where CODE is a segment
            name) is a segment reference.  One or more segment
            references were found in the EXE file.

        EXE HAS STACK SEGMENT
            In order to be converted to a COM file, an EXE file cannot
            have a stack segment.

        EXE HAS NONZERO CS
            In order to be converted to a COM file, an EXE file must
            have a code segment that begins at offset 0 of the code
            image in the EXE file.

        IP NOT 0 OR 100H
            In order to be converted to a binary file, an EXE file must
            have an entry point of 0 or 100H within the code segment.
            For COM files, the entry point should be 100H.  For SYS
            files (device drivers), the entry point should be 0.

        PROGRAM EXCEEDS 64K
            In order to be converted to a binary file, the total size of
            the code to be loaded (including the PSP) must not exceed
            64K bytes.

        UNKNOWN ERROR
            Internal error.  Notify the author.


        Warning message
        ---------------
        EXE2COM has one warning message:

            COM FILE, INITIAL IP NOT 100H

        The entry point of all COM files should be 100H.  If you are
        creating a COM file an the entry point is not 100H, EXE2COM will
        do the job but let you know that there is a potential problem.


        Source
        ------
        Source code should be included with this archive.  Users are
        encouraged to modify, improve, and/or correct the source for
        EXE2COM and submit the new program to the author for
        distribution.

        The original EXE2COM executable file (date 4/17/87) was produced
        using the provided source, except that the printf's were
        replaced by a function from the author's library that produces
        smaller EXE files.

        Public domain
        -------------
        EXE2COM is hereby donated by the author to the public domain.
        The program should not be sold at any cost by any for-profit
        organization.

        Author: Christopher J. Dunford
                The Cove Software Group
                PO Box 1072
                Columbia, MD 21044
                (301) 992-9371
                CompuServe 76703,2002
```
{% endraw %}

## EXE2COM.DOC

{% raw %}
```
                                  EXE2COM 1.00
                         By Chris Dunford/Cove Software

        Purpose
        -------
        EXE2COM is a one-for-one replacement for the EXE2BIN program
        that was formerly distributed with DOS.  Beginning with DOS 3.3,
        EXE2BIN has been moved to the disk that comes with the DOS
        Technical Reference and thus is not available without extra
        cost.

        Usage
        -----
        Usage is identical to DOS's EXE2BIN except that the output file
        extension defaults to COM rather than BIN (when was the last
        time you saw a BIN file?).

        Complete usage is:

            EXE2COM [d:][path]file[ext] [d:][path][file][ext]

        The drive and path of the first file default to the current
        drive and path, if not specified.  The extension of the first
        file defaults to EXE, if not specified.

        If the second file is completely unspecified, it defaults to the
        same drive, path, and filename as the first, except that the
        extension will be COM.

        If the second file is specified but without an extension, COM
        will be assumed (this is different from EXE2BIN).

        The simplest (and usual) usage is simply:

            EXE2COM file

        which will take the named EXE file in the current directory and
        convert it to a COM file in the same directory.


        Operation
        ---------
        EXE2COM runs the same way as EXE2BIN, with the following
        exceptions:

            1. The binary fixup option of EXE2BIN (IP=0, segment fixups
            required) is not supported.

            2. The EXE file checksum is not verified.

            3. Error messages are more useful, and a warning is provided
            if a COM file is created with an initial IP other than 100H.

        Error Messages
        --------------
        These are EXE2COM's error messages.  If one of these is seen,
        the EXE file will not be converted and the errorlevel returned
        by EXE2COM will be 1.

        ERROR READING EXE HEADER
            EXE2COM was unable to read the EXE file header from disk.

        ERROR WRITING OUTPUT FILE
            EXE2COM was unable to write the converted file to disk.

        INVALID EXE FILE SIGNATURE
            The first two bytes of an EXE file should be ASCII 'M' and
            'Z'.  This was not the case, and it's probably not an EXE
            file.

        EXE HAS RELOCATABLE ITEMS
            In order to be converted to a COM file, an EXE file cannot
            have any direct references to segments.  For example, the
            assembler instruction "mov ax,code" (where CODE is a segment
            name) is a segment reference.  One or more segment
            references were found in the EXE file.

        EXE HAS STACK SEGMENT
            In order to be converted to a COM file, an EXE file cannot
            have a stack segment.

        EXE HAS NONZERO CS
            In order to be converted to a COM file, an EXE file must
            have a code segment that begins at offset 0 of the code
            image in the EXE file.

        IP NOT 0 OR 100H
            In order to be converted to a binary file, an EXE file must
            have an entry point of 0 or 100H within the code segment.
            For COM files, the entry point should be 100H.  For SYS
            files (device drivers), the entry point should be 0.

        PROGRAM EXCEEDS 64K
            In order to be converted to a binary file, the total size of
            the code to be loaded (including the PSP) must not exceed
            64K bytes.

        UNKNOWN ERROR
            Internal error.  Notify the author.


        Warning message
        ---------------
        EXE2COM has one warning message:

            COM FILE, INITIAL IP NOT 100H

        The entry point of all COM files should be 100H.  If you are
        creating a COM file an the entry point is not 100H, EXE2COM will
        do the job but let you know that there is a potential problem.


        Source
        ------
        Source code should be included with this archive.  Users are
        encouraged to modify, improve, and/or correct the source for
        EXE2COM and submit the new program to the author for
        distribution.

        The original EXE2COM executable file (date 4/17/87) was produced
        using the provided source, except that the printf's were
        replaced by a function from the author's library that produces
        smaller EXE files.

        Public domain
        -------------
        EXE2COM is hereby donated by the author to the public domain.
        The program should not be sold at any cost by any for-profit
        organization.

        Author: Christopher J. Dunford
                The Cove Software Group
                PO Box 1072
                Columbia, MD 21044
                (301) 992-9371
                CompuServe 76703,2002
```
{% endraw %}

## FILE2316.TXT

{% raw %}
```
Disk No: 2316                                                           
Disk Title: LZE, LZESHELL, & COMTOEXE                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: LZE                                                      
Author Version: 0.91                                                    
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Can you imagine the space you could reclaim from your hard drive by     
compressing all the .EXE files?  Well, LZE, a public domain program,    
compresses an .EXE file to almost half its size!  This isn't compression
that must be decompressed to use the file; this is compression of the   
code, so the program can be used as is.                                 
                                                                        
LZE works with companion program COMTOEXEC (which converts COM files to 
EXE files) to make a powerful compression package.                      
Program Title: LZESHELL                                                 
Author Version: 1.0                                                     
Author Registration: None                                               
Special Requirements: None                                              
                                                                        
LZESHELL interacts with LZE and COMTOEXE (all three public domain       
programs) to make those programs even better.  LZESHELL changes .COM    
files to .EXE files with one command.  LZE then compresses the code     
of .EXE files to regain space on your hard drive.                       
Program Title: COMTOEXE                                                 
Author Version: 1.00                                                    
Author Registration: None                                               
Special Requirements: None                                              
                                                                        
A companion program to LZE, COMTOEXE converts a .COM file into an .EXE  
file that can then be compressed by LZE (LZE compresses the code of .EXE
files).  With the combination of the two files, you now have the ability
to reclaim a sizable amount of space from both .COM and .EXE files.     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2316

     Volume in drive A has no label
     Directory of A:\

    COMTOEXE DOC      1079  12-24-89   4:39p
    COMTOEXE EXE      5013  12-24-89   5:11p
    ENGCOMEX DOC       851   2-26-90   6:09p
    ENGLISH  DOC     10636   3-11-90   4:24p
    ENGUPACK DOC       526   3-11-90   8:19p
    EXE2COM  C        8971   4-17-87   4:45p
    EXE2COM  DOC      5135   4-17-87   6:45p
    EXE2COM  EXE      7906   4-17-87   5:55p
    EXE2COM  ZIP     12160   7-17-90   1:00a
    INFOEXE  EXE      5649  12-24-89   4:42p
    LZESHELL DOC      5908   3-14-90  11:36a
    LZESHELL EXE     16920   3-14-90  10:06a
    LZEXE    DOC     13092  12-24-89   5:15p
    LZEXE    EXE     12304   1-02-90   4:33p
    LZEXE91  EXE     76544   8-28-90   8:27a
    README   ENG       614   3-11-90   4:26p
    UPACKEXE DOC      1391  12-24-89   4:39p
    UPACKEXE EXE      6873   1-02-90   4:39p
    GO       BAT        38   8-28-90   3:05p
    GO       TXT       577   1-01-80   6:52a
    FILE2316 TXT      3035   9-17-90   4:42p
           21 file(s)     195222 bytes
                          117760 bytes free
